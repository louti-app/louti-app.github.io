/* Louti service worker (from Tegaki): full offline once visited.
 * Network-first for the app shell and data (so updates land when the server
 * is reachable), cache-first for the heavy immutable assets (vendored JS,
 * icons, audio). Audio is fetched lazily on first play, never precached.
 * Bump VERSION together with the ?v= in index.html to invalidate everything. */
const VERSION = "louti-v78";
const SHELL = [
  ".", "index.html", "style.css", "main.js", "writer-element.js",
  "vendor/hanzi-writer.min.js", "manifest.webmanifest",
  "data/corpus.json.gz", "icons/icon-192.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(VERSION).then((c) =>
      // cache: "reload" bypasses the HTTP cache: a heuristically-fresh stale
      // copy must never be what gets installed as "the new version"
      c.addAll(SHELL.map((u) => new Request(u, { cache: "reload" })))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

const cacheFirst = /\/(fonts|audio|icons|vendor)\//;

// Safari fetches media in byte ranges and can refuse to play a whole-file 200
// where it asked for a range. Cache whole files, answer ranges with a 206.
async function ranged(request, resp) {
  const range = request.headers.get("range");
  const m = range && /^bytes=(\d*)-(\d*)$/.exec(range.trim());
  if (!m || resp.status !== 200) return resp;
  const buf = await resp.arrayBuffer();
  const size = buf.byteLength;
  const start = m[1] === "" ? Math.max(0, size - Number(m[2])) : Number(m[1]);
  const end = m[1] === "" || m[2] === "" ? size - 1 : Math.min(Number(m[2]), size - 1);
  if (start >= size || start > end) {
    return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
  }
  return new Response(buf.slice(start, end + 1), {
    status: 206,
    statusText: "Partial Content",
    headers: {
      "Content-Type": resp.headers.get("Content-Type") || "application/octet-stream",
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Content-Length": String(end - start + 1),
      "Accept-Ranges": "bytes",
    },
  });
}

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin || e.request.method !== "GET") return;
  if (cacheFirst.test(url.pathname)) {
    // ignoreSearch: a ?v= bump must not orphan the installed SHELL copies
    // fetch and cache the whole file (by url: no Range header), then answer
    // whatever range was asked for from it
    e.respondWith(
      caches.open(VERSION).then((c) =>
        c.match(url.href, { ignoreSearch: true }).then((hit) =>
          (hit ? Promise.resolve(hit) : fetch(url.href).then((resp) => {
            if (resp.status === 200) c.put(url.href, resp.clone());
            return resp;
          })).then((resp) => ranged(e.request, resp))
        )
      )
    );
  } else {
    // network-first must mean the network, not the HTTP cache: without
    // cache: "no-cache", heuristic freshness can serve a stale shell.
    // (fetch by url, not request: navigation Requests can't be re-inited.)
    e.respondWith(
      fetch(e.request.url, { cache: "no-cache" })
        .then((resp) => {
          if (resp.ok) caches.open(VERSION).then((c) => c.put(e.request, resp.clone()));
          return resp;
        })
        .catch(() => caches.match(e.request, { ignoreSearch: true }))
    );
  }
});
