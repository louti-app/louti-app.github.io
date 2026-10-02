/* <writing-canvas>: the writing surface, ported from Tegaki. The only
 * JavaScript that touches the app's DOM (sw.js and the bootstrap in
 * index.html are the others).
 *
 * Hanzi Writer grades the strokes; the canvas draws the character itself, as
 * monoline strokes along Make Me a Hanzi's medians (the stroke centerlines),
 * which is Tegaki's look. MMAH data is Hanzi Writer's native format: a 1024
 * box with y up and the baseline at 900, so with padding 0 the underlay's
 * `scale(1,-1) translate(0,-900)` lines up exactly with Hanzi Writer's space.
 *
 * Properties in:  character {char, strokes: [outline path], medians: [[[x, y]]]}
 *                 hintLevel 3..0 (3: demo, then trace over the full guide with
 *                   the next stroke emphasised; 2: guide + next-stroke cue;
 *                   1: a very faint guide; 0: a blank canvas)
 *                 flubAllowance (mistakes before the write counts as failed)
 *                 leniency (global multiplier from Settings)
 * Events out:     stroke-correct, stroke-mistake {totalMistakes}, quiz-complete
 *                 {passed, totalMistakes}. The finished strokes stay on the
 *                 canvas; the page fades them green or red via --wc-ink.
 */
(() => {
  const LINE_W = 44; // monoline width, in the 1024 box
  const HINT_LENIENCY = { 3: 1.5, 2: 1.3, 1: 1.15, 0: 1.0 };
  const GUIDE_OPACITY = { 3: 0.4, 2: 0.4, 1: 0.16, 0: 0 };

  const medianPath = (pts) =>
    pts.map(([x, y], i) => (i ? "L" : "M") + x + " " + y).join(" ");

  const svgEl = (tag, attrs, parent) => {
    const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(el);
    return el;
  };

  class WritingCanvas extends HTMLElement {
    constructor() {
      super();
      this.character = null;
      this.hintLevel = 3;
      this.flubAllowance = 5;
      this.leniency = 1;
      this._started = false;
      this._gen = 0;
      this._quizActive = false;
      this._failed = false; // allowance exceeded: assisted finish, graded a miss
    }

    connectedCallback() {
      if (this._started) return;
      this._started = true;
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = `<style>
        :host { display: block; aspect-ratio: 1/1; position: relative; touch-action: none; }
        .underlay, .writer { position: absolute; inset: 0; width: 100%; height: 100%; }
        .underlay { overflow: visible; pointer-events: none; }
        .grid line { stroke: var(--line, #e6e1d8); stroke-width: 3; stroke-dasharray: 14 14; }
        .strokes path { fill: none; stroke-width: ${LINE_W}; stroke-linecap: round; stroke-linejoin: round; }
        .guides path { stroke: var(--wc-guide, #c8c2b8); }
        .next path { stroke: var(--wc-next, #9d9484); }
        .ink path { stroke: var(--wc-ink, #2b2722); transition: stroke .45s ease; }
        .hint path { stroke: var(--wc-hint, #e2574c); }
        /* Hanzi Writer's own filled character layers (they carry clip-path);
           the monoline underlay draws the character instead */
        .writer path[clip-path] { display: none; }
      </style>`;
      const svg = svgEl("svg", { viewBox: "0 0 1024 1024", class: "underlay" }, root);
      const grid = svgEl("g", { class: "grid" }, svg);
      svgEl("line", { x1: 512, y1: 0, x2: 512, y2: 1024 }, grid);
      svgEl("line", { x1: 0, y1: 512, x2: 1024, y2: 512 }, grid);
      const flip = svgEl("g", { class: "strokes", transform: "scale(1,-1) translate(0,-900)" }, svg);
      this._guides = svgEl("g", { class: "guides" }, flip);
      this._next = svgEl("g", { class: "next" }, flip);
      this._ink = svgEl("g", { class: "ink" }, flip);
      this._hint = svgEl("g", { class: "hint" }, flip);
      this._writerDiv = root.appendChild(document.createElement("div"));
      this._writerDiv.className = "writer";
      // wait a frame so the element has laid out and has a size
      requestAnimationFrame(() => this._init());
    }

    disconnectedCallback() {
      this._gen++;
      if (this._resizeObs) this._resizeObs.disconnect();
      if (this._writer) {
        try { this._writer.cancelQuiz(); } catch (e) { /* not quizzing */ }
      }
    }

    _paths(group) {
      return this.character.medians.map((m) => svgEl("path", { d: medianPath(m) }, group));
    }

    _init() {
      if (!this.character || !this.isConnected) return;
      const size = Math.round(this.getBoundingClientRect().width) || 300;
      const rec = this.character;
      const hint = Math.max(0, Math.min(3, this.hintLevel | 0));

      this._paths(this._guides);
      this._guides.style.opacity = GUIDE_OPACITY[hint];
      this._inkPaths = this._paths(this._ink);
      for (const p of this._inkPaths) p.style.visibility = "hidden";

      this._writer = HanziWriter.create(this._writerDiv, rec.char || "字", {
        width: size, height: size, padding: 0,
        showCharacter: false, showOutline: false, highlightOnComplete: false,
        drawingWidth: LINE_W,
        drawingColor: getComputedStyle(this).getPropertyValue("--wc-drawing").trim() || "#4a6fa5",
        charDataLoader: () => ({ strokes: rec.strokes, medians: rec.medians }),
      });
      let last = size;
      this._resizeObs = new ResizeObserver(() => {
        const s = Math.round(this.getBoundingClientRect().width);
        if (this._writer && s > 0 && s !== last) {
          last = s;
          this._writer.updateDimensions({ width: s, height: s });
        }
      });
      this._resizeObs.observe(this);

      if (hint === 3) {
        // demo the stroke order first; touching the canvas skips straight to writing
        const gen = this._gen;
        this.addEventListener("pointerdown", () => {
          if (this._gen !== gen || this._quizActive) return;
          this._gen++;
          for (const p of this._inkPaths) {
            p.getAnimations().forEach((a) => a.cancel());
            p.style.strokeDasharray = "";
          }
          this._clearInk();
          this._startQuiz(hint);
        }, { capture: true });
        this._animate(this._inkPaths, gen).then((done) => {
          if (!done || this._gen !== gen) return;
          setTimeout(() => {
            if (this._gen !== gen || !this.isConnected) return;
            this._clearInk();
            this._startQuiz(hint);
          }, 400);
        });
      } else {
        this._startQuiz(hint);
      }
    }

    // the stroke to write next, emphasised within the guide (hint 2 and 3, and
    // while guiding an assisted finish)
    _showNext(i, hint) {
      this._next.replaceChildren();
      const m = this.character.medians[i];
      if ((hint >= 2 || this._failed) && m) svgEl("path", { d: medianPath(m) }, this._next);
    }

    _startQuiz(hint) {
      const emit = (name, detail) =>
        this.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
      this._quizActive = true;
      this._showNext(0, hint);
      this._writer.quiz({
        leniency: HINT_LENIENCY[hint] * (this.leniency || 1),
        acceptBackwardsStrokes: false,
        showHintAfterMisses: false,
        onCorrectStroke: (s) => {
          this._showNext(s.strokeNum + 1, hint);
          this._inkPaths[s.strokeNum].style.visibility = "visible";
          emit("stroke-correct", { strokeNum: s.strokeNum, totalMistakes: s.totalMistakes });
        },
        onMistake: (s) => {
          emit("stroke-mistake", { strokeNum: s.strokeNum, totalMistakes: s.totalMistakes });
          if (s.totalMistakes > this.flubAllowance && !this._failed) {
            // graded a miss, but nothing resets: show the stroke they're stuck
            // on and keep guiding to an assisted finish
            this._failed = true;
            this._showNext(s.strokeNum, hint);
          } else if (s.mistakesOnStroke >= 3) {
            this._flashHint(s.strokeNum);
          }
        },
        onComplete: (s) => {
          this._quizActive = false;
          this._next.replaceChildren();
          const passed = !this._failed;
          // let the last stroke land before the page shows the verdict
          setTimeout(() => {
            if (this.isConnected) emit("quiz-complete", { passed, totalMistakes: s.totalMistakes });
          }, 250);
        },
      });
    }

    _clearInk() {
      for (const p of this._inkPaths) p.style.visibility = "hidden";
    }

    _flashHint(i) {
      this._hint.replaceChildren();
      const p = svgEl("path", { d: medianPath(this.character.medians[i]) }, this._hint);
      this._animateStroke(p).then(() => {
        p.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, delay: 200, fill: "forwards" })
          .finished.then(() => p.remove()).catch(() => {});
      });
    }

    _animateStroke(p) {
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len} ${len + 1}`;
      p.style.visibility = "visible";
      const anim = p.animate(
        [{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
        { duration: 160 + len * 0.7, easing: "ease-out", fill: "forwards" });
      return anim.finished.then(() => { p.style.strokeDasharray = ""; return true; }).catch(() => false);
    }

    async _animate(paths, gen) {
      for (const p of paths) {
        if (this._gen !== gen || !this.isConnected) return false;
        if (!(await this._animateStroke(p))) return false;
        await new Promise((r) => setTimeout(r, 120));
      }
      return true;
    }
  }

  customElements.define("writing-canvas", WritingCanvas);
})();
