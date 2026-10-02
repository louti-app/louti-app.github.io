(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.n.bh === region.k.bh)
	{
		return 'on line ' + region.n.bh;
	}
	return 'on lines ' + region.n.bh + ' through ' + region.k.bh;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (Object.prototype.hasOwnProperty.call(value, key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	var unwrapped = _Json_unwrap(value);
	if (!(key === 'toJSON' && typeof unwrapped === 'function'))
	{
		object[key] = unwrapped;
	}
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.ep,
		impl.fv,
		impl.fh,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS
//
// For some reason, tabs can appear in href protocols and it still works.
// So '\tjava\tSCRIPT:alert("!!!")' and 'javascript:alert("!!!")' are the same
// in practice. That is why _VirtualDom_RE_js and _VirtualDom_RE_js_html look
// so freaky.
//
// Pulling the regular expressions out to the top level gives a slight speed
// boost in small benchmarks (4-10%) but hoisting values to reduce allocation
// can be unpredictable in large programs where JIT may have a harder time with
// functions are not fully self-contained. The benefit is more that the js and
// js_html ones are so weird that I prefer to see them near each other.


var _VirtualDom_RE_script = /^script$/i;
var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;


function _VirtualDom_noScript(tag)
{
	return _VirtualDom_RE_script.test(tag) ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return _VirtualDom_RE_on_formAction.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'outerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return _VirtualDom_RE_js.test(value)
		? /**/''//*//**_UNUSED/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return _VirtualDom_RE_js_html.test(value)
		? /**/''//*//**_UNUSED/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlJson(value)
{
	return (
		(typeof _Json_unwrap(value) === 'string' && _VirtualDom_RE_js_html.test(_Json_unwrap(value)))
		||
		(Array.isArray(_Json_unwrap(value)) && _VirtualDom_RE_js_html.test(String(_Json_unwrap(value))))
	)
		? _Json_wrap(
			/**/''//*//**_UNUSED/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		) : value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		aw: func(record.aw),
		cg: record.cg,
		ca: record.ca
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.aw;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.cg;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.ca) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.ep,
		impl.fv,
		impl.fh,
		function(sendToApp, initialModel) {
			var view = impl.fx;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.ep,
		impl.fv,
		impl.fh,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.ce && impl.ce(sendToApp)
			var view = impl.fx;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.dM);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.ft) && (_VirtualDom_doc.title = title = doc.ft);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.eO;
	var onUrlRequest = impl.eP;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		ce: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.c8 === next.c8
							&& curr.cK === next.cK
							&& curr.c5.a === next.c5.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		ep: function(flags)
		{
			return A3(impl.ep, flags, _Browser_getUrl(), key);
		},
		fx: impl.fx,
		fv: impl.fv,
		fh: impl.fh
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { ei: 'hidden', dS: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { ei: 'mozHidden', dS: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { ei: 'msHidden', dS: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { ei: 'webkitHidden', dS: 'webkitvisibilitychange' }
		: { ei: 'hidden', dS: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		df: _Browser_getScene(),
		fy: {
			dB: _Browser_window.pageXOffset,
			fB: _Browser_window.pageYOffset,
			dx: _Browser_doc.documentElement.clientWidth,
			cI: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		dx: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		cI: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			df: {
				dx: node.scrollWidth,
				cI: node.scrollHeight
			},
			fy: {
				dB: node.scrollLeft,
				fB: node.scrollTop,
				dx: node.clientWidth,
				cI: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			df: _Browser_getScene(),
			fy: {
				dB: x,
				fB: y,
				dx: _Browser_doc.documentElement.clientWidth,
				cI: _Browser_doc.documentElement.clientHeight
			},
			d5: {
				dB: x + rect.left,
				fB: y + rect.top,
				dx: rect.width,
				cI: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}



// DECODER

var _File_decoder = _Json_decodePrim(function(value) {
	// NOTE: checks if `File` exists in case this is run on node
	return (typeof File !== 'undefined' && value instanceof File)
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FILE', value);
});


// METADATA

function _File_name(file) { return file.name; }
function _File_mime(file) { return file.type; }
function _File_size(file) { return file.size; }

function _File_lastModified(file)
{
	return $elm$time$Time$millisToPosix(file.lastModified);
}


// DOWNLOAD

var _File_downloadNode;

function _File_getDownloadNode()
{
	return _File_downloadNode || (_File_downloadNode = document.createElement('a'));
}

var _File_download = F3(function(name, mime, content)
{
	return _Scheduler_binding(function(callback)
	{
		var blob = new Blob([content], {type: mime});

		// for IE10+
		if (navigator.msSaveOrOpenBlob)
		{
			navigator.msSaveOrOpenBlob(blob, name);
			return;
		}

		// for HTML5
		var node = _File_getDownloadNode();
		var objectUrl = URL.createObjectURL(blob);
		node.href = objectUrl;
		node.download = name;
		_File_click(node);
		URL.revokeObjectURL(objectUrl);
	});
});

function _File_downloadUrl(href)
{
	return _Scheduler_binding(function(callback)
	{
		var node = _File_getDownloadNode();
		node.href = href;
		node.download = '';
		node.origin === location.origin || (node.target = '_blank');
		_File_click(node);
	});
}


// IE COMPATIBILITY

function _File_makeBytesSafeForInternetExplorer(bytes)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/10
	// all other browsers can just run `new Blob([bytes])` directly with no problem
	//
	return new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}

function _File_click(node)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/11
	// all other browsers have MouseEvent and do not need this conditional stuff
	//
	if (typeof MouseEvent === 'function')
	{
		node.dispatchEvent(new MouseEvent('click'));
	}
	else
	{
		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		document.body.appendChild(node);
		node.dispatchEvent(event);
		document.body.removeChild(node);
	}
}


// UPLOAD

var _File_node;

function _File_uploadOne(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			callback(_Scheduler_succeed(event.target.files[0]));
		});
		_File_click(_File_node);
	});
}

function _File_uploadOneOrMore(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.multiple = true;
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			var elmFiles = _List_fromArray(event.target.files);
			callback(_Scheduler_succeed(_Utils_Tuple2(elmFiles.a, elmFiles.b)));
		});
		_File_click(_File_node);
	});
}


// CONTENT

function _File_toString(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsText(blob);
		return function() { reader.abort(); };
	});
}

function _File_toBytes(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(new DataView(reader.result)));
		});
		reader.readAsArrayBuffer(blob);
		return function() { reader.abort(); };
	});
}

function _File_toUrl(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsDataURL(blob);
		return function() { reader.abort(); };
	});
}





// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.eE) { flags += 'm'; }
	if (options.dR) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;


function _Url_percentEncode(string)
{
	return encodeURIComponent(string);
}

function _Url_percentDecode(string)
{
	try
	{
		return $elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return $elm$core$Maybe$Nothing;
	}
}var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\u000A    ',
		A2($elm$core$String$split, '\u000A', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\u000A\u000A(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\u0027' + (f + '\u0027]'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\u000A\u000A',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\u000A\u000A';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\u000A\u000A    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\u000A\u000A' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.u) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.y),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.y);
		} else {
			var treeLen = builder.u * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.A) : builder.A;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.u);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.y) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.y);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{A: nodeList, u: (len / $elm$core$Array$branchFactor) | 0, y: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {cD: fragment, cK: host, c2: path, c5: port_, c8: protocol, bm: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$element = _Browser_element;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$Main$Failed = function (a) {
	return {$: 0, a: a};
};
var $author$project$Main$Home = {$: 0};
var $author$project$Main$IntroPage = function (a) {
	return {$: 8, a: a};
};
var $author$project$Main$Ready = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$StudyPage = {$: 1};
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$filter = F2(
	function (isGood, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, d) {
					return A2(isGood, k, v) ? A3($elm$core$Dict$insert, k, v, d) : d;
				}),
			$elm$core$Dict$empty,
			dict);
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === -2) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$State$itemOfKey = function (key) {
	var _v0 = $elm$core$List$head(
		$elm$core$List$reverse(
			A2($elm$core$String$indexes, '|', key)));
	if (!_v0.$) {
		var i = _v0.a;
		return A2($elm$core$String$left, i, key);
	} else {
		return key;
	}
};
var $author$project$State$facetName = function (f) {
	switch (f) {
		case 0:
			return 'pinyin';
		case 1:
			return 'meaning';
		case 2:
			return 'draw';
		case 3:
			return 'choice';
		default:
			return 'sound';
	}
};
var $author$project$State$cardKey = F2(
	function (id, f) {
		return id + ('|' + $author$project$State$facetName(f));
	});
var $author$project$State$keyOf = function (k) {
	return A2($author$project$State$cardKey, k.aZ, k.cB);
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$core$Basics$not = _Basics_not;
var $author$project$State$FacetKey = F2(
	function (id, facet) {
		return {cB: facet, aZ: id};
	});
var $author$project$State$FChoice = 3;
var $author$project$State$FDraw = 2;
var $author$project$State$FMeaning = 1;
var $author$project$State$FPinyin = 0;
var $author$project$State$FSound = 4;
var $author$project$State$facetFromString = function (s) {
	switch (s) {
		case 'pinyin':
			return $elm$core$Maybe$Just(0);
		case 'meaning':
			return $elm$core$Maybe$Just(1);
		case 'draw':
			return $elm$core$Maybe$Just(2);
		case 'choice':
			return $elm$core$Maybe$Just(3);
		case 'sound':
			return $elm$core$Maybe$Just(4);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$State$parseKey = function (key) {
	var id = $author$project$State$itemOfKey(key);
	return A2(
		$elm$core$Maybe$map,
		$author$project$State$FacetKey(id),
		$author$project$State$facetFromString(
			A2(
				$elm$core$String$dropLeft,
				$elm$core$String$length(id) + 1,
				key)));
};
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $author$project$Srs$w = function (i) {
	switch (i) {
		case 0:
			return 0.4872;
		case 1:
			return 1.4003;
		case 2:
			return 3.7145;
		case 3:
			return 13.8206;
		case 4:
			return 5.1618;
		case 5:
			return 1.2298;
		case 6:
			return 0.8975;
		case 7:
			return 0.031;
		case 8:
			return 1.6474;
		case 9:
			return 0.1367;
		case 10:
			return 1.0461;
		case 11:
			return 2.1072;
		case 12:
			return 0.0793;
		case 13:
			return 0.3246;
		case 14:
			return 1.587;
		case 15:
			return 0.2272;
		default:
			return 2.8755;
	}
};
var $author$project$Srs$initialDifficulty = function (g) {
	return A3(
		$elm$core$Basics$clamp,
		1,
		10,
		$author$project$Srs$w(4) - ($author$project$Srs$w(5) * (g - 3)));
};
var $author$project$Srs$relearn = function (card) {
	return _Utils_update(
		card,
		{
			ai: $author$project$Srs$initialDifficulty(3),
			bA: 0,
			aH: card.aH + 1,
			fd: $elm$core$Maybe$Nothing
		});
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$State$renameItems = F2(
	function (table, s) {
		var keys = F2(
			function (f, d) {
				return A3(
					$elm$core$Dict$foldl,
					F3(
						function (k, v, acc) {
							return A3(
								$elm$core$Dict$insert,
								f(k),
								v,
								acc);
						}),
					$elm$core$Dict$empty,
					d);
			});
		var id = function (x) {
			return A2(
				$elm$core$Maybe$withDefault,
				x,
				A2($elm$core$Dict$get, x, table));
		};
		var key = function (k) {
			var i = $author$project$State$itemOfKey(k);
			return _Utils_ap(
				id(i),
				A2(
					$elm$core$String$dropLeft,
					$elm$core$String$length(i),
					k));
		};
		var session = function (sess) {
			return _Utils_update(
				sess,
				{
					aE: A2($elm$core$List$map, id, sess.aE),
					b2: A2($elm$core$List$map, id, sess.b2),
					b4: A2(keys, id, sess.b4),
					a3: A2(
						$elm$core$List$map,
						function (q) {
							return _Utils_update(
								q,
								{
									aZ: id(q.aZ)
								});
						},
						sess.a3),
					bt: A2(keys, key, sess.bt)
				});
		};
		return $elm$core$Dict$isEmpty(table) ? s : _Utils_update(
			s,
			{
				aB: A2(keys, key, s.aB),
				bT: A2(keys, key, s.bT),
				ak: A2(
					$elm$core$List$map,
					function (e) {
						return _Utils_update(
							e,
							{
								aZ: id(e.aZ)
							});
					},
					s.ak),
				a1: A2(keys, id, s.a1),
				T: A2(
					$elm$core$List$map,
					function (r) {
						return _Utils_update(
							r,
							{
								aZ: id(r.aZ)
							});
					},
					s.T),
				x: A2($elm$core$Maybe$map, session, s.x),
				a6: A2(keys, id, s.a6),
				bo: A2(keys, id, s.bo),
				fj: A2(keys, id, s.fj),
				dv: A2(keys, id, s.dv)
			});
	});
var $author$project$Study$applyFixes = F2(
	function (fixes, s0) {
		var todo = A2(
			$elm$core$List$filter,
			function (fx) {
				return !A2($elm$core$List$member, fx.aZ, s0.bY);
			},
			fixes);
		var apply = F2(
			function (fx, s) {
				var renamed = $elm$core$Dict$isEmpty(fx.e4) ? s : A2($author$project$State$renameItems, fx.e4, s);
				var dropped = function (key) {
					var id = $author$project$State$itemOfKey(key);
					return A2(
						$elm$core$List$any,
						function (rule) {
							return _Utils_eq(
								A2(
									$elm$core$String$dropLeft,
									$elm$core$String$length(id) + 1,
									key),
								rule.cB) && (((rule.eZ !== '') && A2($elm$core$String$startsWith, rule.eZ, id)) || A2($elm$core$List$member, id, rule.el));
						},
						fx.d4);
				};
				var kept = A2(
					$elm$core$Dict$filter,
					F2(
						function (key, _v2) {
							return !dropped(key);
						}),
					renamed.aB);
				var relearnable = A2(
					$elm$core$List$filterMap,
					function (r) {
						return A2(
							$elm$core$Maybe$andThen,
							function (key) {
								return A2(
									$elm$core$Maybe$map,
									function (card) {
										return _Utils_Tuple3(key, card, r.c$);
									},
									A2($elm$core$Dict$get, key, kept));
							},
							A2(
								$elm$core$Maybe$map,
								$author$project$State$keyOf,
								$author$project$State$parseKey(r.aZ + ('|' + r.cB))));
					},
					fx.e3);
				return _Utils_update(
					renamed,
					{
						aB: A3(
							$elm$core$List$foldl,
							F2(
								function (_v0, acc) {
									var key = _v0.a;
									var card = _v0.b;
									return A3(
										$elm$core$Dict$insert,
										key,
										$author$project$Srs$relearn(card),
										acc);
								}),
							kept,
							relearnable),
						bT: A3(
							$elm$core$List$foldl,
							F2(
								function (_v1, acc) {
									var key = _v1.a;
									var note = _v1.c;
									return (note === '') ? acc : A3($elm$core$Dict$insert, key, note, acc);
								}),
							renamed.bT,
							relearnable),
						bY: _Utils_ap(
							renamed.bY,
							_List_fromArray(
								[fx.aZ])),
						x: A2(
							$elm$core$Maybe$map,
							function (sess) {
								return _Utils_update(
									sess,
									{
										a3: A2(
											$elm$core$List$filter,
											function (k) {
												return !dropped(
													$author$project$State$keyOf(k));
											},
											sess.a3)
									});
							},
							renamed.x)
					});
			});
		return _Utils_Tuple2(
			A3($elm$core$List$foldl, apply, s0, todo),
			!$elm$core$List$isEmpty(todo));
	});
var $author$project$Srs$cleanNeededFor = function (strokes) {
	return A3($elm$core$Basics$clamp, 1, 3, 1 + ((strokes / 5) | 0));
};
var $author$project$Corpus$Char = 3;
var $author$project$Corpus$Component = 1;
var $author$project$Corpus$Guise = 2;
var $author$project$Study$drawable = function (it) {
	return (!_Utils_eq(it.ef, $elm$core$Maybe$Nothing)) && (((it.b3 === 3) && it.e$) || ((it.b3 === 1) || (it.b3 === 2)));
};
var $author$project$Corpus$get = F2(
	function (c, id) {
		return A2($elm$core$Dict$get, id, c.b2);
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $author$project$Study$strokeCount = F2(
	function (c, it) {
		return A2(
			$elm$core$Maybe$withDefault,
			4,
			A2(
				$elm$core$Maybe$map,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.d_;
					},
					$elm$core$List$length),
				A2(
					$elm$core$Maybe$andThen,
					function (k) {
						return A2($elm$core$Dict$get, k, c.cH);
					},
					it.ef)));
	});
var $author$project$Srs$dayMs = 86400000;
var $author$project$Srs$fourHours = (4 * 3600) * 1000;
var $author$project$Srs$graduate = F3(
	function (now, hint, cleanNeeded) {
		return {
			as: 0,
			by: cleanNeeded,
			ai: $author$project$Srs$initialDifficulty(3),
			bA: now + $author$project$Srs$fourHours,
			bC: hint,
			aH: 0,
			aJ: now,
			bn: 0,
			fd: $elm$core$Maybe$Nothing
		};
	});
var $author$project$Srs$interval = F2(
	function (retention, s) {
		return (9 * s) * ((1 / A3($elm$core$Basics$clamp, 0.5, 0.995, retention)) - 1);
	});
var $author$project$Srs$intervalCap = function (hint) {
	switch (hint) {
		case 3:
			return 4;
		case 2:
			return 10;
		case 1:
			return 30;
		case 0:
			return 90;
		default:
			return 3650;
	}
};
var $author$project$Srs$markKnown = F5(
	function (now, s, dueIn, hint, cleanNeeded) {
		return {
			as: 0,
			by: cleanNeeded,
			ai: $author$project$Srs$initialDifficulty(3),
			bA: now + dueIn,
			bC: hint,
			aH: 0,
			aJ: now,
			bn: 1,
			fd: $elm$core$Maybe$Just(s)
		};
	});
var $elm$core$Basics$round = _Basics_round;
var $author$project$Study$writingFrom = F3(
	function (retention, cleanNeeded, reading) {
		var _v0 = reading.fd;
		if (_v0.$ === 1) {
			var fresh = A3($author$project$Srs$graduate, reading.aJ, 3, cleanNeeded);
			return _Utils_update(
				fresh,
				{bA: reading.bA});
		} else {
			var st = _v0.a;
			var stability = st / 2;
			var days = A3(
				$elm$core$Basics$clamp,
				1,
				$author$project$Srs$intervalCap(2),
				A2($author$project$Srs$interval, retention, stability));
			return A5(
				$author$project$Srs$markKnown,
				reading.aJ,
				stability,
				$elm$core$Basics$round(days * $author$project$Srs$dayMs),
				2,
				cleanNeeded);
		}
	});
var $author$project$Study$backfillWriting = F2(
	function (c, s) {
		if (!s.N.dA) {
			return s;
		} else {
			var ids = $elm$core$Dict$keys(
				A3(
					$elm$core$Dict$foldl,
					F3(
						function (key, _v1, acc) {
							return A3(
								$elm$core$Dict$insert,
								$author$project$State$itemOfKey(key),
								0,
								acc);
						}),
					$elm$core$Dict$empty,
					s.aB));
			var add = F2(
				function (id, cards) {
					var _v0 = _Utils_Tuple2(
						A2($author$project$Corpus$get, c, id),
						A2(
							$elm$core$Dict$get,
							A2($author$project$State$cardKey, id, 1),
							cards));
					if ((!_v0.a.$) && (!_v0.b.$)) {
						var it = _v0.a.a;
						var reading = _v0.b.a;
						return ($author$project$Study$drawable(it) && (!A2(
							$elm$core$Dict$member,
							A2($author$project$State$cardKey, id, 2),
							cards))) ? A3(
							$elm$core$Dict$insert,
							A2($author$project$State$cardKey, id, 2),
							A3(
								$author$project$Study$writingFrom,
								s.N.cb,
								$author$project$Srs$cleanNeededFor(
									A2($author$project$Study$strokeCount, c, it)),
								reading),
							cards) : cards;
					} else {
						return cards;
					}
				});
			return _Utils_update(
				s,
				{
					aB: A3($elm$core$List$foldl, add, s.aB, ids)
				});
		}
	});
var $author$project$State$State = function (cards) {
	return function (suspended) {
		return function (log) {
			return function (synonyms) {
				return function (notes) {
					return function (stories) {
						return function (undoCount) {
							return function (settings) {
								return function (session) {
									return function (lastExport) {
										return function (iosNoteSeen) {
											return function (fixesApplied) {
												return function (introSeen) {
													return function (lastVoice) {
														return function (day) {
															return function (reviewsToday) {
																return function (corrections) {
																	return function (reports) {
																		return {aB: cards, bT: corrections, bV: day, bY: fixesApplied, b$: introSeen, bD: iosNoteSeen, aI: lastExport, bg: lastVoice, ak: log, a1: notes, T: reports, cc: reviewsToday, x: session, N: settings, a6: stories, bo: suspended, fj: synonyms, dv: undoCount};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $author$project$State$andMap = $elm$json$Json$Decode$map2($elm$core$Basics$apR);
var $author$project$Srs$Card = F9(
	function (stability, difficulty, lastReview, due, reps, lapses, hint, clean, cleanNeeded) {
		return {as: clean, by: cleanNeeded, ai: difficulty, bA: due, bC: hint, aH: lapses, aJ: lastReview, bn: reps, fd: stability};
	});
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$index = _Json_decodeIndex;
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $author$project$Srs$noHint = -1;
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$nullable = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder)
			]));
};
var $author$project$State$cardDecoder = A2(
	$author$project$State$andMap,
	$elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$index, 8, $elm$json$Json$Decode$int),
				$elm$json$Json$Decode$succeed(1)
			])),
	A2(
		$author$project$State$andMap,
		$elm$json$Json$Decode$oneOf(
			_List_fromArray(
				[
					A2($elm$json$Json$Decode$index, 7, $elm$json$Json$Decode$int),
					$elm$json$Json$Decode$succeed(0)
				])),
		A2(
			$author$project$State$andMap,
			$elm$json$Json$Decode$oneOf(
				_List_fromArray(
					[
						A2($elm$json$Json$Decode$index, 6, $elm$json$Json$Decode$int),
						$elm$json$Json$Decode$succeed($author$project$Srs$noHint)
					])),
			A2(
				$author$project$State$andMap,
				A2($elm$json$Json$Decode$index, 5, $elm$json$Json$Decode$int),
				A2(
					$author$project$State$andMap,
					A2($elm$json$Json$Decode$index, 4, $elm$json$Json$Decode$int),
					A2(
						$author$project$State$andMap,
						A2($elm$json$Json$Decode$index, 3, $elm$json$Json$Decode$int),
						A2(
							$author$project$State$andMap,
							A2($elm$json$Json$Decode$index, 2, $elm$json$Json$Decode$int),
							A2(
								$author$project$State$andMap,
								A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$float),
								A2(
									$author$project$State$andMap,
									A2(
										$elm$json$Json$Decode$index,
										0,
										$elm$json$Json$Decode$nullable($elm$json$Json$Decode$float)),
									$elm$json$Json$Decode$succeed($author$project$Srs$Card))))))))));
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $author$project$State$field = F3(
	function (name, dec, _default) {
		return $elm$json$Json$Decode$oneOf(
			_List_fromArray(
				[
					A2($elm$json$Json$Decode$field, name, dec),
					$elm$json$Json$Decode$succeed(_default)
				]));
	});
var $author$project$State$initial = {
	aB: $elm$core$Dict$empty,
	bT: $elm$core$Dict$empty,
	bV: 0,
	bY: _List_Nil,
	b$: false,
	bD: false,
	aI: 0,
	bg: 'female',
	ak: _List_Nil,
	a1: $elm$core$Dict$empty,
	T: _List_Nil,
	cc: 0,
	x: $elm$core$Maybe$Nothing,
	N: {bS: 5, bG: 20, cb: 0.9, ch: 1.0, dr: 'system', bR: 'alternate', dA: true},
	a6: $elm$core$Dict$empty,
	bo: $elm$core$Dict$empty,
	fj: $elm$core$Dict$empty,
	dv: $elm$core$Dict$empty
};
var $elm$json$Json$Decode$list = _Json_decodeList;
var $author$project$State$LogEntry = F5(
	function (t, id, facet, correct, undo) {
		return {q: correct, cB: facet, aZ: id, aP: t, cl: undo};
	});
var $elm$json$Json$Decode$map5 = _Json_map5;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$State$logDecoder = A6(
	$elm$json$Json$Decode$map5,
	$author$project$State$LogEntry,
	A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$index, 2, $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$map,
		$elm$core$Basics$eq(1),
		A2($elm$json$Json$Decode$index, 3, $elm$json$Json$Decode$int)),
	A2(
		$elm$json$Json$Decode$map,
		$elm$core$Basics$eq(1),
		A2($elm$json$Json$Decode$index, 4, $elm$json$Json$Decode$int)));
var $author$project$State$Report = F7(
	function (t, id, keyword, place, facet, typed, text) {
		return {cB: facet, aZ: id, cR: keyword, b9: place, aP: t, ck: text, aQ: typed};
	});
var $author$project$State$reportDecoder = A2(
	$author$project$State$andMap,
	A2($elm$json$Json$Decode$field, 'text', $elm$json$Json$Decode$string),
	A2(
		$author$project$State$andMap,
		A3($author$project$State$field, 'typed', $elm$json$Json$Decode$string, ''),
		A2(
			$author$project$State$andMap,
			A3($author$project$State$field, 'facet', $elm$json$Json$Decode$string, ''),
			A2(
				$author$project$State$andMap,
				A3($author$project$State$field, 'place', $elm$json$Json$Decode$string, ''),
				A2(
					$author$project$State$andMap,
					A3($author$project$State$field, 'keyword', $elm$json$Json$Decode$string, ''),
					A2(
						$author$project$State$andMap,
						A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string),
						A2(
							$author$project$State$andMap,
							A2($elm$json$Json$Decode$field, 't', $elm$json$Json$Decode$int),
							$elm$json$Json$Decode$succeed($author$project$State$Report))))))));
var $author$project$State$Session = F7(
	function (lesson, items, presenting, queue, wrong, left, finished) {
		return {aE: finished, b2: items, b4: left, aj: lesson, X: presenting, a3: queue, bt: wrong};
	});
var $elm$json$Json$Decode$fail = _Json_fail;
var $author$project$State$facetFromName = function (s) {
	switch (s) {
		case 'pinyin':
			return $elm$json$Json$Decode$succeed(0);
		case 'meaning':
			return $elm$json$Json$Decode$succeed(1);
		case 'draw':
			return $elm$json$Json$Decode$succeed(2);
		case 'choice':
			return $elm$json$Json$Decode$succeed(3);
		case 'sound':
			return $elm$json$Json$Decode$succeed(4);
		default:
			return $elm$json$Json$Decode$fail('unknown facet ' + s);
	}
};
var $elm$json$Json$Decode$map7 = _Json_map7;
var $author$project$State$sessionDecoder = A8(
	$elm$json$Json$Decode$map7,
	$author$project$State$Session,
	A2($elm$json$Json$Decode$field, 'lesson', $elm$json$Json$Decode$bool),
	A2(
		$elm$json$Json$Decode$field,
		'items',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A3(
		$author$project$State$field,
		'presenting',
		$elm$json$Json$Decode$nullable($elm$json$Json$Decode$int),
		$elm$core$Maybe$Nothing),
	A2(
		$elm$json$Json$Decode$field,
		'queue',
		$elm$json$Json$Decode$list(
			A3(
				$elm$json$Json$Decode$map2,
				$author$project$State$FacetKey,
				A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$string),
				A2(
					$elm$json$Json$Decode$andThen,
					$author$project$State$facetFromName,
					A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$string))))),
	A2(
		$elm$json$Json$Decode$field,
		'wrong',
		$elm$json$Json$Decode$dict($elm$json$Json$Decode$int)),
	A2(
		$elm$json$Json$Decode$field,
		'left',
		$elm$json$Json$Decode$dict($elm$json$Json$Decode$int)),
	A3(
		$author$project$State$field,
		'finished',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
		_List_Nil));
var $author$project$State$Settings = F7(
	function (retention, batchSize, newPerDay, writing, voice, strokeLeniency, theme) {
		return {bS: batchSize, bG: newPerDay, cb: retention, ch: strokeLeniency, dr: theme, bR: voice, dA: writing};
	});
var $author$project$State$settingsDecoder = function () {
	var d = $author$project$State$initial.N;
	return A2(
		$author$project$State$andMap,
		A3($author$project$State$field, 'theme', $elm$json$Json$Decode$string, d.dr),
		A2(
			$author$project$State$andMap,
			A3($author$project$State$field, 'strokeLeniency', $elm$json$Json$Decode$float, d.ch),
			A2(
				$author$project$State$andMap,
				A3($author$project$State$field, 'voice', $elm$json$Json$Decode$string, d.bR),
				A2(
					$author$project$State$andMap,
					A3($author$project$State$field, 'writing', $elm$json$Json$Decode$bool, d.dA),
					A2(
						$author$project$State$andMap,
						A3($author$project$State$field, 'newPerDay', $elm$json$Json$Decode$int, d.bG),
						A2(
							$author$project$State$andMap,
							A3($author$project$State$field, 'batchSize', $elm$json$Json$Decode$int, d.bS),
							A2(
								$author$project$State$andMap,
								A3($author$project$State$field, 'retention', $elm$json$Json$Decode$float, d.cb),
								$elm$json$Json$Decode$succeed($author$project$State$Settings))))))));
}();
var $author$project$State$decodeBody = A2(
	$author$project$State$andMap,
	A3(
		$author$project$State$field,
		'reports',
		$elm$json$Json$Decode$list($author$project$State$reportDecoder),
		_List_Nil),
	A2(
		$author$project$State$andMap,
		A3(
			$author$project$State$field,
			'corrections',
			$elm$json$Json$Decode$dict($elm$json$Json$Decode$string),
			$elm$core$Dict$empty),
		A2(
			$author$project$State$andMap,
			A3($author$project$State$field, 'reviewsToday', $elm$json$Json$Decode$int, 0),
			A2(
				$author$project$State$andMap,
				A3($author$project$State$field, 'day', $elm$json$Json$Decode$int, 0),
				A2(
					$author$project$State$andMap,
					A3($author$project$State$field, 'lastVoice', $elm$json$Json$Decode$string, 'female'),
					A2(
						$author$project$State$andMap,
						A3($author$project$State$field, 'introSeen', $elm$json$Json$Decode$bool, false),
						A2(
							$author$project$State$andMap,
							A3(
								$author$project$State$field,
								'fixesApplied',
								$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
								_List_Nil),
							A2(
								$author$project$State$andMap,
								A3($author$project$State$field, 'iosNoteSeen', $elm$json$Json$Decode$bool, false),
								A2(
									$author$project$State$andMap,
									A3($author$project$State$field, 'lastExport', $elm$json$Json$Decode$int, 0),
									A2(
										$author$project$State$andMap,
										A3(
											$author$project$State$field,
											'session',
											$elm$json$Json$Decode$nullable($author$project$State$sessionDecoder),
											$elm$core$Maybe$Nothing),
										A2(
											$author$project$State$andMap,
											A3($author$project$State$field, 'settings', $author$project$State$settingsDecoder, $author$project$State$initial.N),
											A2(
												$author$project$State$andMap,
												A3(
													$author$project$State$field,
													'undoCount',
													$elm$json$Json$Decode$dict($elm$json$Json$Decode$int),
													$elm$core$Dict$empty),
												A2(
													$author$project$State$andMap,
													A3(
														$author$project$State$field,
														'stories',
														$elm$json$Json$Decode$dict($elm$json$Json$Decode$string),
														$elm$core$Dict$empty),
													A2(
														$author$project$State$andMap,
														A3(
															$author$project$State$field,
															'notes',
															$elm$json$Json$Decode$dict($elm$json$Json$Decode$string),
															$elm$core$Dict$empty),
														A2(
															$author$project$State$andMap,
															A3(
																$author$project$State$field,
																'synonyms',
																$elm$json$Json$Decode$dict(
																	$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
																$elm$core$Dict$empty),
															A2(
																$author$project$State$andMap,
																A3(
																	$author$project$State$field,
																	'log',
																	$elm$json$Json$Decode$list($author$project$State$logDecoder),
																	_List_Nil),
																A2(
																	$author$project$State$andMap,
																	A3(
																		$author$project$State$field,
																		'suspended',
																		A2(
																			$elm$json$Json$Decode$map,
																			function (xs) {
																				return $elm$core$Dict$fromList(
																					A2(
																						$elm$core$List$map,
																						function (x) {
																							return _Utils_Tuple2(x, true);
																						},
																						xs));
																			},
																			$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
																		$elm$core$Dict$empty),
																	A2(
																		$author$project$State$andMap,
																		A3(
																			$author$project$State$field,
																			'cards',
																			$elm$json$Json$Decode$dict($author$project$State$cardDecoder),
																			$elm$core$Dict$empty),
																		$elm$json$Json$Decode$succeed($author$project$State$State)))))))))))))))))));
var $author$project$State$decodeV1 = $author$project$State$decodeBody;
var $author$project$State$decodeV2 = $author$project$State$decodeBody;
var $elm$core$String$endsWith = _String_endsWith;
var $author$project$State$asksPinyin = function (id) {
	return A2($elm$core$String$startsWith, 'h:', id) && (!A2($elm$core$String$endsWith, ':r5', id));
};
var $author$project$State$cardFacets = F2(
	function (id, drawable) {
		var draw = drawable ? _List_fromArray(
			[2]) : _List_Nil;
		return A2($elm$core$String$startsWith, 's:', id) ? _List_fromArray(
			[4]) : (A2($elm$core$String$startsWith, 'w:', id) ? _List_fromArray(
			[1]) : (A2($elm$core$String$startsWith, 'h:', id) ? _Utils_ap(
			$author$project$State$asksPinyin(id) ? _List_fromArray(
				[0, 1]) : _List_fromArray(
				[1]),
			draw) : A2($elm$core$List$cons, 1, draw)));
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$core$Basics$ge = _Utils_ge;
var $author$project$State$migrate1to2 = function (s) {
	var split = F2(
		function (id, card) {
			return A2(
				$elm$core$List$map,
				function (f) {
					return _Utils_Tuple2(
						A2($author$project$State$cardKey, id, f),
						(f === 2) ? _Utils_update(
							card,
							{
								as: 0,
								by: 2,
								bC: (A2($elm$core$Maybe$withDefault, 0, card.fd) >= 21) ? 1 : 3
							}) : card);
				},
				A2(
					$author$project$State$cardFacets,
					id,
					(!A2($elm$core$String$startsWith, 'w:', id)) && (!A2($elm$core$String$startsWith, 's:', id))));
		});
	var settings = s.N;
	return _Utils_update(
		s,
		{
			aB: $elm$core$Dict$fromList(
				A2(
					$elm$core$List$concatMap,
					function (_v0) {
						var id = _v0.a;
						var c = _v0.b;
						return A2(split, id, c);
					},
					$elm$core$Dict$toList(s.aB))),
			x: A2(
				$elm$core$Maybe$map,
				function (sess) {
					return _Utils_update(
						sess,
						{bt: $elm$core$Dict$empty});
				},
				s.x),
			N: _Utils_update(
				settings,
				{dA: true})
		});
};
var $author$project$State$decode = A2(
	$elm$json$Json$Decode$andThen,
	function (v) {
		switch (v) {
			case 1:
				return A2($elm$json$Json$Decode$map, $author$project$State$migrate1to2, $author$project$State$decodeV1);
			case 2:
				return $author$project$State$decodeV2;
			default:
				return $elm$json$Json$Decode$fail(
					'saved state has schema ' + ($elm$core$String$fromInt(v) + ', newer than this app'));
		}
	},
	$elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$field, 'schema', $elm$json$Json$Decode$int),
				$elm$json$Json$Decode$succeed(1)
			])));
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $author$project$Corpus$Word = 4;
var $elm$core$String$filter = _String_filter;
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{A: nodeList, u: nodeListSize, y: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $author$project$Corpus$unique = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (x, acc) {
				return A2($elm$core$List$member, x, acc) ? acc : _Utils_ap(
					acc,
					_List_fromArray(
						[x]));
			}),
		_List_Nil,
		xs);
};
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === -1) {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === -1) {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (!_v0.$) {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $author$project$Corpus$build = F6(
	function (schema, items, glyphs, hsk, attribution, syllabus) {
		var wordsUsing = A3(
			$elm$core$List$foldr,
			F2(
				function (it, acc) {
					return (it.b3 === 4) ? A3(
						$elm$core$List$foldl,
						F2(
							function (c, a) {
								return A3(
									$elm$core$Dict$update,
									c,
									function (m) {
										return $elm$core$Maybe$Just(
											A2(
												$elm$core$List$cons,
												it.aZ,
												A2($elm$core$Maybe$withDefault, _List_Nil, m)));
									},
									a);
							}),
						acc,
						$author$project$Corpus$unique(it.bx)) : acc;
				}),
			$elm$core$Dict$empty,
			items);
		return {
			cq: attribution,
			bX: _List_Nil,
			cH: glyphs,
			cL: A3(
				$elm$core$Dict$foldl,
				F3(
					function (k, v, acc) {
						return A3(
							$elm$core$Dict$insert,
							A2(
								$elm$core$Maybe$withDefault,
								0,
								$elm$core$String$toInt(k)),
							v,
							acc);
					}),
				$elm$core$Dict$empty,
				hsk),
			b2: $elm$core$Dict$fromList(
				A2(
					$elm$core$List$map,
					function (it) {
						return _Utils_Tuple2(it.aZ, it);
					},
					items)),
			c1: $elm$core$Array$fromList(
				A2(
					$elm$core$List$map,
					function ($) {
						return $.aZ;
					},
					items)),
			dg: schema,
			$7: $elm$core$Set$fromList(
				A2(
					$elm$core$List$filter,
					function (s) {
						return s !== '';
					},
					A2(
						$elm$core$List$map,
						function (s) {
							return A2($elm$core$String$filter, $elm$core$Char$isAlpha, s);
						},
						A2(
							$elm$core$List$concatMap,
							function (it) {
								return A2($elm$core$List$cons, it.c4, it.da);
							},
							items)))),
			dp: syllabus,
			dz: wordsUsing
		};
	});
var $author$project$Corpus$Fix = F4(
	function (id, rename, drop, relearn) {
		return {d4: drop, aZ: id, e3: relearn, e4: rename};
	});
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$json$Json$Decode$map4 = _Json_map4;
var $author$project$Corpus$fixDecoder = A5(
	$elm$json$Json$Decode$map4,
	$author$project$Corpus$Fix,
	A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string),
	$elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$field,
				'rename',
				$elm$json$Json$Decode$dict($elm$json$Json$Decode$string)),
				$elm$json$Json$Decode$succeed($elm$core$Dict$empty)
			])),
	$elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$field,
				'drop',
				$elm$json$Json$Decode$list(
					A4(
						$elm$json$Json$Decode$map3,
						F3(
							function (f, p, i) {
								return {cB: f, el: i, eZ: p};
							}),
						A2($elm$json$Json$Decode$field, 'facet', $elm$json$Json$Decode$string),
						$elm$json$Json$Decode$oneOf(
							_List_fromArray(
								[
									A2($elm$json$Json$Decode$field, 'prefix', $elm$json$Json$Decode$string),
									$elm$json$Json$Decode$succeed('')
								])),
						$elm$json$Json$Decode$oneOf(
							_List_fromArray(
								[
									A2(
									$elm$json$Json$Decode$field,
									'ids',
									$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
									$elm$json$Json$Decode$succeed(_List_Nil)
								]))))),
				$elm$json$Json$Decode$succeed(_List_Nil)
			])),
	$elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$field,
				'relearn',
				$elm$json$Json$Decode$list(
					A4(
						$elm$json$Json$Decode$map3,
						F3(
							function (i, f, n) {
								return {cB: f, aZ: i, c$: n};
							}),
						A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string),
						A2($elm$json$Json$Decode$field, 'facet', $elm$json$Json$Decode$string),
						$elm$json$Json$Decode$oneOf(
							_List_fromArray(
								[
									A2($elm$json$Json$Decode$field, 'note', $elm$json$Json$Decode$string),
									$elm$json$Json$Decode$succeed('')
								]))))),
				$elm$json$Json$Decode$succeed(_List_Nil)
			])));
var $author$project$Corpus$Glyph = F2(
	function (d, m) {
		return {d_: d, ex: m};
	});
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$Corpus$glyphDecoder = A3(
	$elm$json$Json$Decode$map2,
	$author$project$Corpus$Glyph,
	A2(
		$elm$json$Json$Decode$field,
		'd',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$field,
		'm',
		$elm$json$Json$Decode$list(
			$elm$json$Json$Decode$list(
				A3(
					$elm$json$Json$Decode$map2,
					$elm$core$Tuple$pair,
					A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$int),
					A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$int))))));
var $author$project$Corpus$Audio = F3(
	function (male, female, text) {
		return {ed: female, ey: male, ck: text};
	});
var $author$project$Corpus$Exemplar = F2(
	function (word, blank) {
		return {dK: blank, cm: word};
	});
var $author$project$Corpus$Item = function (id) {
	return function (kind) {
		return function (prereqs) {
			return function (keyword) {
				return function (synonyms) {
					return function (alternates) {
						return function (meanings) {
							return function (mnemonic) {
								return function (placeholder) {
									return function (glyph) {
										return function (hsk) {
											return function (wordHsk) {
												return function (freq) {
													return function (audio) {
														return function (role) {
															return function (value) {
																return function (note) {
																	return function (text) {
																		return function (image) {
																			return function (canonical) {
																				return function (canonicalGlyph) {
																					return function (position) {
																						return function (_char) {
																							return function (pinyin) {
																								return function (primary) {
																									return function (components) {
																										return function (strokeComp) {
																											return function (phonetic) {
																												return function (semantic) {
																													return function (confusers) {
																														return function (exemplars) {
																															return function (coverage) {
																																return function (word) {
																																	return function (readings) {
																																		return function (surface) {
																																			return function (chars) {
																																				return function (partRoles) {
																																					return function (index) {
																																						return {dF: alternates, dH: audio, dP: canonical, dQ: canonicalGlyph, cu: _char, bx: chars, dW: components, dX: confusers, dZ: coverage, d8: exemplars, ee: freq, ef: glyph, ej: hsk, aZ: id, em: image, eo: index, cR: keyword, b3: kind, eA: meanings, eD: mnemonic, c$: note, eU: partRoles, eW: phonetic, c4: pinyin, eX: placeholder, eY: position, e_: prereqs, e$: primary, da: readings, e9: role, fb: semantic, ff: strokeComp, fi: surface, fj: synonyms, ck: text, fw: value, cm: word, fz: wordHsk};
																																					};
																																				};
																																			};
																																		};
																																	};
																																};
																															};
																														};
																													};
																												};
																											};
																										};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $author$project$Corpus$andMap = $elm$json$Json$Decode$map2($elm$core$Basics$apR);
var $author$project$Corpus$Sound = 0;
var $author$project$Corpus$kindDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (s) {
		switch (s) {
			case 'sound':
				return $elm$json$Json$Decode$succeed(0);
			case 'component':
				return $elm$json$Json$Decode$succeed(1);
			case 'guise':
				return $elm$json$Json$Decode$succeed(2);
			case 'char':
				return $elm$json$Json$Decode$succeed(3);
			case 'word':
				return $elm$json$Json$Decode$succeed(4);
			default:
				return $elm$json$Json$Decode$fail('unknown kind ' + s);
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$Corpus$opt = F3(
	function (field, dec, _default) {
		return $elm$json$Json$Decode$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$json$Json$Decode$map,
					$elm$core$Maybe$withDefault(_default),
					A2(
						$elm$json$Json$Decode$field,
						field,
						$elm$json$Json$Decode$nullable(dec))),
					$elm$json$Json$Decode$succeed(_default)
				]));
	});
var $author$project$Corpus$optMaybe = F2(
	function (field, dec) {
		return $elm$json$Json$Decode$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$json$Json$Decode$field,
					field,
					$elm$json$Json$Decode$nullable(dec)),
					$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
				]));
	});
var $author$project$Corpus$itemDecoder = function (index) {
	return A2(
		$author$project$Corpus$andMap,
		$elm$json$Json$Decode$succeed(index),
		A2(
			$author$project$Corpus$andMap,
			A3(
				$author$project$Corpus$opt,
				'roles',
				$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
				_List_Nil),
			A2(
				$author$project$Corpus$andMap,
				A3(
					$author$project$Corpus$opt,
					'chars',
					$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
					_List_Nil),
				A2(
					$author$project$Corpus$andMap,
					A3(
						$author$project$Corpus$opt,
						'surface',
						$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
						_List_Nil),
					A2(
						$author$project$Corpus$andMap,
						A3(
							$author$project$Corpus$opt,
							'readings',
							$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
							_List_Nil),
						A2(
							$author$project$Corpus$andMap,
							A3($author$project$Corpus$opt, 'word', $elm$json$Json$Decode$string, ''),
							A2(
								$author$project$Corpus$andMap,
								A3($author$project$Corpus$opt, 'coverage', $elm$json$Json$Decode$float, 0),
								A2(
									$author$project$Corpus$andMap,
									A3(
										$author$project$Corpus$opt,
										'exemplars',
										$elm$json$Json$Decode$list(
											A3(
												$elm$json$Json$Decode$map2,
												$author$project$Corpus$Exemplar,
												A2($elm$json$Json$Decode$field, 'word', $elm$json$Json$Decode$string),
												A2($elm$json$Json$Decode$field, 'blank', $elm$json$Json$Decode$int))),
										_List_Nil),
									A2(
										$author$project$Corpus$andMap,
										A3(
											$author$project$Corpus$opt,
											'confusers',
											$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
											_List_Nil),
										A2(
											$author$project$Corpus$andMap,
											A2($author$project$Corpus$optMaybe, 'semantic', $elm$json$Json$Decode$string),
											A2(
												$author$project$Corpus$andMap,
												A2($author$project$Corpus$optMaybe, 'phonetic', $elm$json$Json$Decode$string),
												A2(
													$author$project$Corpus$andMap,
													A3(
														$author$project$Corpus$opt,
														'stroke_comp',
														$elm$json$Json$Decode$list(
															$elm$json$Json$Decode$nullable($elm$json$Json$Decode$int)),
														_List_Nil),
													A2(
														$author$project$Corpus$andMap,
														A3(
															$author$project$Corpus$opt,
															'components',
															$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
															_List_Nil),
														A2(
															$author$project$Corpus$andMap,
															A3($author$project$Corpus$opt, 'primary', $elm$json$Json$Decode$bool, false),
															A2(
																$author$project$Corpus$andMap,
																A3($author$project$Corpus$opt, 'pinyin', $elm$json$Json$Decode$string, ''),
																A2(
																	$author$project$Corpus$andMap,
																	A3($author$project$Corpus$opt, 'char', $elm$json$Json$Decode$string, ''),
																	A2(
																		$author$project$Corpus$andMap,
																		A2($author$project$Corpus$optMaybe, 'position', $elm$json$Json$Decode$string),
																		A2(
																			$author$project$Corpus$andMap,
																			A2($author$project$Corpus$optMaybe, 'canonical_glyph', $elm$json$Json$Decode$string),
																			A2(
																				$author$project$Corpus$andMap,
																				A2($author$project$Corpus$optMaybe, 'canonical', $elm$json$Json$Decode$string),
																				A2(
																					$author$project$Corpus$andMap,
																					A2($author$project$Corpus$optMaybe, 'image', $elm$json$Json$Decode$string),
																					A2(
																						$author$project$Corpus$andMap,
																						A2($author$project$Corpus$optMaybe, 'text', $elm$json$Json$Decode$string),
																						A2(
																							$author$project$Corpus$andMap,
																							A3($author$project$Corpus$opt, 'note', $elm$json$Json$Decode$string, ''),
																							A2(
																								$author$project$Corpus$andMap,
																								A3($author$project$Corpus$opt, 'value', $elm$json$Json$Decode$string, ''),
																								A2(
																									$author$project$Corpus$andMap,
																									A3($author$project$Corpus$opt, 'role', $elm$json$Json$Decode$string, ''),
																									A2(
																										$author$project$Corpus$andMap,
																										A2(
																											$author$project$Corpus$optMaybe,
																											'audio',
																											A4(
																												$elm$json$Json$Decode$map3,
																												$author$project$Corpus$Audio,
																												A2($author$project$Corpus$optMaybe, 'male', $elm$json$Json$Decode$string),
																												A2($author$project$Corpus$optMaybe, 'female', $elm$json$Json$Decode$string),
																												A3($author$project$Corpus$opt, 'text', $elm$json$Json$Decode$string, ''))),
																										A2(
																											$author$project$Corpus$andMap,
																											A3($author$project$Corpus$opt, 'freq', $elm$json$Json$Decode$float, 0),
																											A2(
																												$author$project$Corpus$andMap,
																												A2($author$project$Corpus$optMaybe, 'word_hsk', $elm$json$Json$Decode$int),
																												A2(
																													$author$project$Corpus$andMap,
																													A2($author$project$Corpus$optMaybe, 'hsk', $elm$json$Json$Decode$int),
																													A2(
																														$author$project$Corpus$andMap,
																														A2($author$project$Corpus$optMaybe, 'glyph', $elm$json$Json$Decode$string),
																														A2(
																															$author$project$Corpus$andMap,
																															A3($author$project$Corpus$opt, 'placeholder', $elm$json$Json$Decode$bool, false),
																															A2(
																																$author$project$Corpus$andMap,
																																A2($author$project$Corpus$optMaybe, 'mnemonic', $elm$json$Json$Decode$string),
																																A2(
																																	$author$project$Corpus$andMap,
																																	A3(
																																		$author$project$Corpus$opt,
																																		'meanings',
																																		$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
																																		_List_Nil),
																																	A2(
																																		$author$project$Corpus$andMap,
																																		A3(
																																			$author$project$Corpus$opt,
																																			'alternates',
																																			$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
																																			_List_Nil),
																																		A2(
																																			$author$project$Corpus$andMap,
																																			A3(
																																				$author$project$Corpus$opt,
																																				'synonyms',
																																				$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
																																				_List_Nil),
																																			A2(
																																				$author$project$Corpus$andMap,
																																				A2($elm$json$Json$Decode$field, 'keyword', $elm$json$Json$Decode$string),
																																				A2(
																																					$author$project$Corpus$andMap,
																																					A2(
																																						$elm$json$Json$Decode$field,
																																						'prereqs',
																																						$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
																																					A2(
																																						$author$project$Corpus$andMap,
																																						A2($elm$json$Json$Decode$field, 'kind', $author$project$Corpus$kindDecoder),
																																						A2(
																																							$author$project$Corpus$andMap,
																																							A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string),
																																							$elm$json$Json$Decode$succeed($author$project$Corpus$Item)))))))))))))))))))))))))))))))))))))));
};
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Corpus$itemsDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (values) {
		return function (r) {
			if (!r.$) {
				var xs = r.a;
				return $elm$json$Json$Decode$succeed(xs);
			} else {
				var e = r.a;
				return $elm$json$Json$Decode$fail(
					$elm$json$Json$Decode$errorToString(e));
			}
		}(
			A3(
				$elm$core$List$foldr,
				F2(
					function (r, acc) {
						var _v0 = _Utils_Tuple2(r, acc);
						if (!_v0.a.$) {
							if (!_v0.b.$) {
								var it = _v0.a.a;
								var xs = _v0.b.a;
								return $elm$core$Result$Ok(
									A2($elm$core$List$cons, it, xs));
							} else {
								var e = _v0.b.a;
								return $elm$core$Result$Err(e);
							}
						} else {
							var e = _v0.a.a;
							return $elm$core$Result$Err(e);
						}
					}),
				$elm$core$Result$Ok(_List_Nil),
				A2(
					$elm$core$List$indexedMap,
					F2(
						function (i, v) {
							return A2(
								$elm$json$Json$Decode$decodeValue,
								$author$project$Corpus$itemDecoder(i),
								v);
						}),
					values)));
	},
	$elm$json$Json$Decode$list($elm$json$Json$Decode$value));
var $author$project$Corpus$schemaVersion = 3;
var $author$project$Corpus$Syllabus = F2(
	function (chars, words) {
		return {bx: chars, dy: words};
	});
var $author$project$Corpus$syllabusDecoder = function () {
	var levels = A2(
		$elm$json$Json$Decode$map,
		A2(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, acc) {
					return A3(
						$elm$core$Dict$insert,
						A2(
							$elm$core$Maybe$withDefault,
							0,
							$elm$core$String$toInt(k)),
						v,
						acc);
				}),
			$elm$core$Dict$empty),
		$elm$json$Json$Decode$dict($elm$json$Json$Decode$int));
	return A3(
		$elm$json$Json$Decode$map2,
		$author$project$Corpus$Syllabus,
		A2($elm$json$Json$Decode$field, 'chars', levels),
		A2($elm$json$Json$Decode$field, 'words', levels));
}();
var $author$project$Corpus$decoder = A2(
	$elm$json$Json$Decode$andThen,
	function (schema) {
		return (!_Utils_eq(schema, $author$project$Corpus$schemaVersion)) ? $elm$json$Json$Decode$fail(
			'corpus schema ' + ($elm$core$String$fromInt(schema) + (', app expects ' + ($elm$core$String$fromInt($author$project$Corpus$schemaVersion) + ': reload to update the app')))) : A2(
			$elm$json$Json$Decode$andThen,
			function (c) {
				return A2(
					$elm$json$Json$Decode$map,
					function (fixes) {
						return _Utils_update(
							c,
							{bX: fixes});
					},
					$elm$json$Json$Decode$oneOf(
						_List_fromArray(
							[
								A2(
								$elm$json$Json$Decode$field,
								'fixes',
								$elm$json$Json$Decode$list($author$project$Corpus$fixDecoder)),
								$elm$json$Json$Decode$succeed(_List_Nil)
							])));
			},
			A6(
				$elm$json$Json$Decode$map5,
				$author$project$Corpus$build(schema),
				A2($elm$json$Json$Decode$field, 'items', $author$project$Corpus$itemsDecoder),
				A2(
					$elm$json$Json$Decode$field,
					'glyphs',
					$elm$json$Json$Decode$dict($author$project$Corpus$glyphDecoder)),
				A2(
					$elm$json$Json$Decode$field,
					'hsk_chars',
					$elm$json$Json$Decode$dict(
						$elm$json$Json$Decode$list($elm$json$Json$Decode$string))),
				A2(
					$elm$json$Json$Decode$field,
					'attribution',
					$elm$json$Json$Decode$list(
						A3(
							$elm$json$Json$Decode$map2,
							F2(
								function (s, l) {
									return {ev: l, fc: s};
								}),
							A2($elm$json$Json$Decode$field, 'source', $elm$json$Json$Decode$string),
							A2($elm$json$Json$Decode$field, 'license', $elm$json$Json$Decode$string)))),
				$elm$json$Json$Decode$oneOf(
					_List_fromArray(
						[
							A2($elm$json$Json$Decode$field, 'syllabus', $author$project$Corpus$syllabusDecoder),
							$elm$json$Json$Decode$succeed(
							{bx: $elm$core$Dict$empty, dy: $elm$core$Dict$empty})
						]))));
	},
	A2($elm$json$Json$Decode$field, 'schema', $elm$json$Json$Decode$int));
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$json$Json$Encode$dict = F3(
	function (toKey, toValue, dictionary) {
		return _Json_wrap(
			A3(
				$elm$core$Dict$foldl,
				F3(
					function (key, value, obj) {
						return A3(
							_Json_addField,
							toKey(key),
							toValue(value),
							obj);
					}),
				_Json_emptyObject(0),
				dictionary));
	});
var $elm$json$Json$Encode$float = _Json_wrap;
var $elm$json$Json$Encode$int = _Json_wrap;
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $author$project$State$encodeCard = function (c) {
	return A2(
		$elm$json$Json$Encode$list,
		$elm$core$Basics$identity,
		_Utils_ap(
			_List_fromArray(
				[
					A2(
					$elm$core$Maybe$withDefault,
					$elm$json$Json$Encode$null,
					A2(
						$elm$core$Maybe$map,
						function (x) {
							return $elm$json$Json$Encode$float(
								$elm$core$Basics$round(x * 1000) / 1000);
						},
						c.fd)),
					$elm$json$Json$Encode$float(
					$elm$core$Basics$round(c.ai * 1000) / 1000),
					$elm$json$Json$Encode$int(c.aJ),
					$elm$json$Json$Encode$int(c.bA),
					$elm$json$Json$Encode$int(c.bn),
					$elm$json$Json$Encode$int(c.aH)
				]),
			_Utils_eq(c.bC, $author$project$Srs$noHint) ? _List_Nil : _List_fromArray(
				[
					$elm$json$Json$Encode$int(c.bC),
					$elm$json$Json$Encode$int(c.as),
					$elm$json$Json$Encode$int(c.by)
				])));
};
var $author$project$State$boolInt = function (b) {
	return b ? 1 : 0;
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$State$encodeLog = function (l) {
	return A2(
		$elm$json$Json$Encode$list,
		$elm$core$Basics$identity,
		_List_fromArray(
			[
				$elm$json$Json$Encode$int(l.aP),
				$elm$json$Json$Encode$string(l.aZ),
				$elm$json$Json$Encode$string(l.cB),
				$elm$json$Json$Encode$int(
				$author$project$State$boolInt(l.q)),
				$elm$json$Json$Encode$int(
				$author$project$State$boolInt(l.cl))
			]));
};
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(0),
			pairs));
};
var $author$project$State$encodeReport = function (r) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				't',
				$elm$json$Json$Encode$int(r.aP)),
				_Utils_Tuple2(
				'id',
				$elm$json$Json$Encode$string(r.aZ)),
				_Utils_Tuple2(
				'keyword',
				$elm$json$Json$Encode$string(r.cR)),
				_Utils_Tuple2(
				'place',
				$elm$json$Json$Encode$string(r.b9)),
				_Utils_Tuple2(
				'facet',
				$elm$json$Json$Encode$string(r.cB)),
				_Utils_Tuple2(
				'typed',
				$elm$json$Json$Encode$string(r.aQ)),
				_Utils_Tuple2(
				'text',
				$elm$json$Json$Encode$string(r.ck))
			]));
};
var $author$project$State$encodeSession = function (s) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'lesson',
				$elm$json$Json$Encode$bool(s.aj)),
				_Utils_Tuple2(
				'items',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, s.b2)),
				_Utils_Tuple2(
				'presenting',
				A2(
					$elm$core$Maybe$withDefault,
					$elm$json$Json$Encode$null,
					A2($elm$core$Maybe$map, $elm$json$Json$Encode$int, s.X))),
				_Utils_Tuple2(
				'queue',
				A2(
					$elm$json$Json$Encode$list,
					function (k) {
						return A2(
							$elm$json$Json$Encode$list,
							$elm$json$Json$Encode$string,
							_List_fromArray(
								[
									k.aZ,
									$author$project$State$facetName(k.cB)
								]));
					},
					s.a3)),
				_Utils_Tuple2(
				'wrong',
				A3($elm$json$Json$Encode$dict, $elm$core$Basics$identity, $elm$json$Json$Encode$int, s.bt)),
				_Utils_Tuple2(
				'left',
				A3($elm$json$Json$Encode$dict, $elm$core$Basics$identity, $elm$json$Json$Encode$int, s.b4)),
				_Utils_Tuple2(
				'finished',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, s.aE))
			]));
};
var $author$project$State$encodeSettings = function (s) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'retention',
				$elm$json$Json$Encode$float(s.cb)),
				_Utils_Tuple2(
				'batchSize',
				$elm$json$Json$Encode$int(s.bS)),
				_Utils_Tuple2(
				'newPerDay',
				$elm$json$Json$Encode$int(s.bG)),
				_Utils_Tuple2(
				'writing',
				$elm$json$Json$Encode$bool(s.dA)),
				_Utils_Tuple2(
				'voice',
				$elm$json$Json$Encode$string(s.bR)),
				_Utils_Tuple2(
				'strokeLeniency',
				$elm$json$Json$Encode$float(s.ch)),
				_Utils_Tuple2(
				'theme',
				$elm$json$Json$Encode$string(s.dr))
			]));
};
var $author$project$State$schemaVersion = 2;
var $author$project$State$encode = function (s) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'schema',
				$elm$json$Json$Encode$int($author$project$State$schemaVersion)),
				_Utils_Tuple2(
				'cards',
				A3($elm$json$Json$Encode$dict, $elm$core$Basics$identity, $author$project$State$encodeCard, s.aB)),
				_Utils_Tuple2(
				'suspended',
				A2(
					$elm$json$Json$Encode$list,
					$elm$json$Json$Encode$string,
					$elm$core$Dict$keys(s.bo))),
				_Utils_Tuple2(
				'log',
				A2($elm$json$Json$Encode$list, $author$project$State$encodeLog, s.ak)),
				_Utils_Tuple2(
				'synonyms',
				A3(
					$elm$json$Json$Encode$dict,
					$elm$core$Basics$identity,
					$elm$json$Json$Encode$list($elm$json$Json$Encode$string),
					s.fj)),
				_Utils_Tuple2(
				'notes',
				A3($elm$json$Json$Encode$dict, $elm$core$Basics$identity, $elm$json$Json$Encode$string, s.a1)),
				_Utils_Tuple2(
				'stories',
				A3($elm$json$Json$Encode$dict, $elm$core$Basics$identity, $elm$json$Json$Encode$string, s.a6)),
				_Utils_Tuple2(
				'undoCount',
				A3($elm$json$Json$Encode$dict, $elm$core$Basics$identity, $elm$json$Json$Encode$int, s.dv)),
				_Utils_Tuple2(
				'settings',
				$author$project$State$encodeSettings(s.N)),
				_Utils_Tuple2(
				'session',
				A2(
					$elm$core$Maybe$withDefault,
					$elm$json$Json$Encode$null,
					A2($elm$core$Maybe$map, $author$project$State$encodeSession, s.x))),
				_Utils_Tuple2(
				'lastExport',
				$elm$json$Json$Encode$int(s.aI)),
				_Utils_Tuple2(
				'iosNoteSeen',
				$elm$json$Json$Encode$bool(s.bD)),
				_Utils_Tuple2(
				'fixesApplied',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, s.bY)),
				_Utils_Tuple2(
				'introSeen',
				$elm$json$Json$Encode$bool(s.b$)),
				_Utils_Tuple2(
				'lastVoice',
				$elm$json$Json$Encode$string(s.bg)),
				_Utils_Tuple2(
				'day',
				$elm$json$Json$Encode$int(s.bV)),
				_Utils_Tuple2(
				'reviewsToday',
				$elm$json$Json$Encode$int(s.cc)),
				_Utils_Tuple2(
				'corrections',
				A3($elm$json$Json$Encode$dict, $elm$core$Basics$identity, $elm$json$Json$Encode$string, s.bT)),
				_Utils_Tuple2(
				'reports',
				A2($elm$json$Json$Encode$list, $author$project$State$encodeReport, s.T))
			]));
};
var $elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$random$Random$next = function (_v0) {
	var state0 = _v0.a;
	var incr = _v0.b;
	return A2($elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var $elm$random$Random$initialSeed = function (x) {
	var _v0 = $elm$random$Random$next(
		A2($elm$random$Random$Seed, 0, 1013904223));
	var state1 = _v0.a;
	var incr = _v0.b;
	var state2 = (state1 + x) >>> 0;
	return $elm$random$Random$next(
		A2($elm$random$Random$Seed, state2, incr));
};
var $author$project$Study$localDay = F2(
	function (tzOffsetMin, now) {
		return ((now - (tzOffsetMin * 60000)) / 86400000) | 0;
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (!result.$) {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Study$rollDay = F2(
	function (day, s) {
		return (!_Utils_eq(s.bV, day)) ? _Utils_update(
			s,
			{bV: day, cc: 0}) : s;
	});
var $author$project$Main$save = _Platform_outgoingPort('save', $elm$json$Json$Encode$string);
var $elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === -2) {
				return n;
			} else {
				var left = dict.d;
				var right = dict.e;
				var $temp$n = A2($elm$core$Dict$sizeHelp, n + 1, right),
					$temp$dict = left;
				n = $temp$n;
				dict = $temp$dict;
				continue sizeHelp;
			}
		}
	});
var $elm$core$Dict$size = function (dict) {
	return A2($elm$core$Dict$sizeHelp, 0, dict);
};
var $author$project$Main$init = function (flags) {
	var _v0 = A2($elm$json$Json$Decode$decodeValue, $author$project$Corpus$decoder, flags.bU);
	if (_v0.$ === 1) {
		var e = _v0.a;
		return _Utils_Tuple2(
			$author$project$Main$Failed(
				A2(
					$elm$core$String$left,
					600,
					$elm$json$Json$Decode$errorToString(e))),
			$elm$core$Platform$Cmd$none);
	} else {
		var c = _v0.a;
		var loaded = function () {
			var _v4 = flags.cd;
			if (_v4.$ === 1) {
				return $elm$core$Result$Ok($author$project$State$initial);
			} else {
				var str = _v4.a;
				return A2(
					$elm$core$Result$mapError,
					$elm$json$Json$Decode$errorToString,
					A2($elm$json$Json$Decode$decodeString, $author$project$State$decode, str));
			}
		}();
		if (loaded.$ === 1) {
			var e = loaded.a;
			return _Utils_Tuple2(
				$author$project$Main$Failed(
					'Saved progress could not be read (it is untouched in storage): ' + A2($elm$core$String$left, 400, e)),
				$elm$core$Platform$Cmd$none);
		} else {
			var saved = loaded.a;
			var day = A2($author$project$Study$localDay, flags.bP, flags.l);
			var _v2 = function (_v3) {
				var fx = _v3.a;
				var f = _v3.b;
				var filled = A2($author$project$Study$backfillWriting, c, fx);
				return _Utils_Tuple2(
					filled,
					f || (!_Utils_eq(
						$elm$core$Dict$size(filled.aB),
						$elm$core$Dict$size(fx.aB))));
			}(
				A2($author$project$Study$applyFixes, c.bX, saved));
			var s = _v2.a;
			var fixed = _v2.b;
			return _Utils_Tuple2(
				$author$project$Main$Ready(
					{
						V: 0,
						_: flags._,
						I: {ej: 'all', b3: 'all', ac: 300, bm: '', a5: 'all'},
						aT: _List_Nil,
						aU: '',
						aV: 0,
						bv: 0,
						aW: true,
						bc: '',
						aA: '',
						d: c,
						bd: false,
						aC: false,
						aD: false,
						be: $elm$core$Maybe$Nothing,
						at: $elm$core$Maybe$Nothing,
						aa: 0,
						ab: _List_Nil,
						a_: '',
						w: '',
						b0: flags.b1,
						al: false,
						an: $elm$core$Maybe$Nothing,
						l: flags.l,
						a2: $elm$core$Maybe$Nothing,
						h: $elm$core$Maybe$Nothing,
						s: (!_Utils_eq(s.x, $elm$core$Maybe$Nothing)) ? $author$project$Main$StudyPage : ((!s.b$) ? $author$project$Main$IntroPage(0) : $author$project$Main$Home),
						aM: $elm$core$Maybe$Nothing,
						ao: $elm$core$Maybe$Nothing,
						a: A2($author$project$Study$rollDay, day, s),
						Z: $elm$random$Random$initialSeed(flags.l),
						ap: $elm$core$Maybe$Nothing,
						ag: false,
						U: $elm$core$Maybe$Nothing,
						B: $elm$core$Maybe$Nothing,
						aq: '',
						J: flags.bP
					}),
				fixed ? $author$project$Main$save(
					A2(
						$elm$json$Json$Encode$encode,
						0,
						$author$project$State$encode(s))) : $elm$core$Platform$Cmd$none);
		}
	}
};
var $author$project$Main$Tick = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$ArrowKey = function (a) {
	return {$: 11, a: a};
};
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $author$project$Main$arrowKey = A2(
	$elm$json$Json$Decode$andThen,
	function (_v0) {
		var key = _v0.a;
		var tag = _v0.b;
		return (((key === 'ArrowRight') || (key === 'ArrowLeft')) && ((tag !== 'INPUT') && (tag !== 'TEXTAREA'))) ? $elm$json$Json$Decode$succeed(
			$author$project$Main$ArrowKey(key)) : (((key === 'Enter') && ((tag !== 'INPUT') && ((tag !== 'TEXTAREA') && (tag !== 'BUTTON')))) ? $elm$json$Json$Decode$succeed(
			$author$project$Main$ArrowKey('ArrowRight')) : $elm$json$Json$Decode$fail('not a card key'));
	},
	A3(
		$elm$json$Json$Decode$map2,
		$elm$core$Tuple$pair,
		A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['target', 'tagName']),
			$elm$json$Json$Decode$string)));
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$time$Time$Every = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$time$Time$State = F2(
	function (taggers, processes) {
		return {c7: processes, dq: taggers};
	});
var $elm$time$Time$init = $elm$core$Task$succeed(
	A2($elm$time$Time$State, $elm$core$Dict$empty, $elm$core$Dict$empty));
var $elm$time$Time$addMySub = F2(
	function (_v0, state) {
		var interval = _v0.a;
		var tagger = _v0.b;
		var _v1 = A2($elm$core$Dict$get, interval, state);
		if (_v1.$ === 1) {
			return A3(
				$elm$core$Dict$insert,
				interval,
				_List_fromArray(
					[tagger]),
				state);
		} else {
			var taggers = _v1.a;
			return A3(
				$elm$core$Dict$insert,
				interval,
				A2($elm$core$List$cons, tagger, taggers),
				state);
		}
	});
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$time$Time$Name = function (a) {
	return {$: 0, a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 1, a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$setInterval = _Time_setInterval;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$time$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		if (!intervals.b) {
			return $elm$core$Task$succeed(processes);
		} else {
			var interval = intervals.a;
			var rest = intervals.b;
			var spawnTimer = $elm$core$Process$spawn(
				A2(
					$elm$time$Time$setInterval,
					interval,
					A2($elm$core$Platform$sendToSelf, router, interval)));
			var spawnRest = function (id) {
				return A3(
					$elm$time$Time$spawnHelp,
					router,
					rest,
					A3($elm$core$Dict$insert, interval, id, processes));
			};
			return A2($elm$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var $elm$time$Time$onEffects = F3(
	function (router, subs, _v0) {
		var processes = _v0.c7;
		var rightStep = F3(
			function (_v6, id, _v7) {
				var spawns = _v7.a;
				var existing = _v7.b;
				var kills = _v7.c;
				return _Utils_Tuple3(
					spawns,
					existing,
					A2(
						$elm$core$Task$andThen,
						function (_v5) {
							return kills;
						},
						$elm$core$Process$kill(id)));
			});
		var newTaggers = A3($elm$core$List$foldl, $elm$time$Time$addMySub, $elm$core$Dict$empty, subs);
		var leftStep = F3(
			function (interval, taggers, _v4) {
				var spawns = _v4.a;
				var existing = _v4.b;
				var kills = _v4.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, interval, spawns),
					existing,
					kills);
			});
		var bothStep = F4(
			function (interval, taggers, id, _v3) {
				var spawns = _v3.a;
				var existing = _v3.b;
				var kills = _v3.c;
				return _Utils_Tuple3(
					spawns,
					A3($elm$core$Dict$insert, interval, id, existing),
					kills);
			});
		var _v1 = A6(
			$elm$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			processes,
			_Utils_Tuple3(
				_List_Nil,
				$elm$core$Dict$empty,
				$elm$core$Task$succeed(0)));
		var spawnList = _v1.a;
		var existingDict = _v1.b;
		var killTask = _v1.c;
		return A2(
			$elm$core$Task$andThen,
			function (newProcesses) {
				return $elm$core$Task$succeed(
					A2($elm$time$Time$State, newTaggers, newProcesses));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v2) {
					return A3($elm$time$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var $elm$time$Time$Posix = $elm$core$Basics$identity;
var $elm$time$Time$millisToPosix = $elm$core$Basics$identity;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $elm$time$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _v0 = A2($elm$core$Dict$get, interval, state.dq);
		if (_v0.$ === 1) {
			return $elm$core$Task$succeed(state);
		} else {
			var taggers = _v0.a;
			var tellTaggers = function (time) {
				return $elm$core$Task$sequence(
					A2(
						$elm$core$List$map,
						function (tagger) {
							return A2(
								$elm$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						taggers));
			};
			return A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$succeed(state);
				},
				A2($elm$core$Task$andThen, tellTaggers, $elm$time$Time$now));
		}
	});
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$time$Time$subMap = F2(
	function (f, _v0) {
		var interval = _v0.a;
		var tagger = _v0.b;
		return A2(
			$elm$time$Time$Every,
			interval,
			A2($elm$core$Basics$composeL, f, tagger));
	});
_Platform_effectManagers['Time'] = _Platform_createManager($elm$time$Time$init, $elm$time$Time$onEffects, $elm$time$Time$onSelfMsg, 0, $elm$time$Time$subMap);
var $elm$time$Time$subscription = _Platform_leaf('Time');
var $elm$time$Time$every = F2(
	function (interval, tagger) {
		return $elm$time$Time$subscription(
			A2($elm$time$Time$Every, interval, tagger));
	});
var $elm$browser$Browser$Events$Document = 0;
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {c3: pids, dn: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (!node) {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {cz: event, F: key};
	});
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (!node) {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.c3,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var event = _v0.cz;
		var key = _v0.F;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.dn);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onKeyDown = A2($elm$browser$Browser$Events$on, 0, 'keydown');
var $author$project$Main$subscriptions = function (_v0) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				A2($elm$time$Time$every, 20000, $author$project$Main$Tick),
				$elm$browser$Browser$Events$onKeyDown($author$project$Main$arrowKey)
			]));
};
var $author$project$Main$cardShown = function (m) {
	return _Utils_Tuple2(
		m.s,
		A2(
			$elm$core$Maybe$map,
			function (sess) {
				return _Utils_Tuple2(
					sess.X,
					$elm$core$List$head(sess.a3));
			},
			m.a.x));
};
var $author$project$Main$playAudio = _Platform_outgoingPort('playAudio', $elm$json$Json$Encode$string);
var $author$project$Main$BrowseApply = function (a) {
	return {$: 35, a: a};
};
var $author$project$Main$BrowseOpened = F2(
	function (a, b) {
		return {$: 15, a: a, b: b};
	});
var $author$project$Main$BrowsePage = {$: 3};
var $author$project$Main$CopiedDone = {$: 14};
var $author$project$Main$ImportFile = function (a) {
	return {$: 64, a: a};
};
var $author$project$Main$ImportLoaded = function (a) {
	return {$: 65, a: a};
};
var $author$project$Main$ItemPage = function (a) {
	return {$: 2, a: a};
};
var $author$project$Main$Nav = function (a) {
	return {$: 2, a: a};
};
var $author$project$Main$Next = {$: 18};
var $author$project$Main$NoOp = {$: 0};
var $author$project$Main$PresentNext = {$: 9};
var $author$project$Main$PresentPrev = {$: 10};
var $author$project$Main$SynRemove = F2(
	function (a, b) {
		return {$: 27, a: a, b: b};
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			A2(
				$elm$core$Task$onError,
				A2(
					$elm$core$Basics$composeL,
					A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
					$elm$core$Result$Err),
				A2(
					$elm$core$Task$andThen,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Ok),
					task)));
	});
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$String$lines = _String_lines;
var $author$project$Study$markKnown = F6(
	function (c, now, stability, dueIn, id, s) {
		var _v0 = A2($author$project$Corpus$get, c, id);
		if (_v0.$ === 1) {
			return s;
		} else {
			var it = _v0.a;
			var card = function (f) {
				return (f === 2) ? A5(
					$author$project$Srs$markKnown,
					now,
					stability,
					dueIn,
					1,
					$author$project$Srs$cleanNeededFor(
						A2($author$project$Study$strokeCount, c, it))) : A5($author$project$Srs$markKnown, now, stability, dueIn, $author$project$Srs$noHint, 1);
			};
			return _Utils_update(
				s,
				{
					aB: A3(
						$elm$core$List$foldl,
						F2(
							function (f, acc) {
								return A3(
									$elm$core$Dict$insert,
									A2($author$project$State$cardKey, id, f),
									card(f),
									acc);
							}),
						s.aB,
						A2(
							$author$project$State$cardFacets,
							id,
							$author$project$Study$drawable(it))),
					ak: A2(
						$elm$core$List$cons,
						{q: true, cB: 'event:known', aZ: id, aP: now, cl: false},
						s.ak)
				});
		}
	});
var $elm$core$Basics$modBy = _Basics_modBy;
var $author$project$Study$started = F2(
	function (s, id) {
		return A2(
			$elm$core$List$any,
			function (f) {
				return A2(
					$elm$core$Dict$member,
					A2($author$project$State$cardKey, id, f),
					s.aB);
			},
			_List_fromArray(
				[0, 1, 4, 2]));
	});
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $elm$core$String$trim = _String_trim;
var $elm$core$String$words = _String_words;
var $author$project$Main$bulkMarkKnown = function (m) {
	var wordsByText = A3(
		$elm$core$Dict$foldl,
		F3(
			function (id, it, acc) {
				return (it.b3 === 4) ? A3($elm$core$Dict$insert, it.cm, id, acc) : acc;
			}),
		$elm$core$Dict$empty,
		m.d.b2);
	var primaryByChar = A3(
		$elm$core$Dict$foldl,
		F3(
			function (id, it, acc) {
				return ((it.b3 === 3) && it.e$) ? A3($elm$core$Dict$insert, it.cu, id, acc) : acc;
			}),
		$elm$core$Dict$empty,
		m.d.b2);
	var isHan = function (ch) {
		var code = $elm$core$Char$toCode(ch);
		return (code >= 13312) && (code <= 40959);
	};
	var entries = A2(
		$elm$core$List$concatMap,
		function (line) {
			var token = A2(
				$elm$core$String$filter,
				isHan,
				A2(
					$elm$core$Maybe$withDefault,
					'',
					$elm$core$List$head(
						$elm$core$String$words(line))));
			var _v7 = A2($elm$core$Dict$get, token, wordsByText);
			if (!_v7.$) {
				var wid = _v7.a;
				return _List_fromArray(
					[wid]);
			} else {
				return A2(
					$elm$core$List$filterMap,
					function (ch) {
						return A2(
							$elm$core$Dict$get,
							$elm$core$String$fromChar(ch),
							primaryByChar);
					},
					$elm$core$String$toList(
						A2($elm$core$String$filter, isHan, line)));
			}
		},
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$String$split('\u0009'),
				A2(
					$elm$core$Basics$composeR,
					$elm$core$List$head,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$Maybe$withDefault(''),
						$elm$core$String$trim))),
			$elm$core$String$lines(m.aA)));
	var closure = F2(
		function (id, acc) {
			if (A2($elm$core$List$member, id, acc)) {
				return acc;
			} else {
				var _v0 = A2($author$project$Corpus$get, m.d, id);
				if (_v0.$ === 1) {
					return acc;
				} else {
					var it = _v0.a;
					var follow = A2(
						$elm$core$List$filter,
						function (p) {
							var _v1 = A2(
								$elm$core$Maybe$map,
								function ($) {
									return $.b3;
								},
								A2($author$project$Corpus$get, m.d, p));
							_v1$4:
							while (true) {
								if (!_v1.$) {
									switch (_v1.a) {
										case 0:
											var _v2 = _v1.a;
											return true;
										case 3:
											var _v3 = _v1.a;
											return true;
										case 1:
											var _v4 = _v1.a;
											return m.aW;
										case 2:
											var _v5 = _v1.a;
											return m.aW;
										default:
											break _v1$4;
									}
								} else {
									break _v1$4;
								}
							}
							return false;
						},
						it.e_);
					return A3(
						$elm$core$List$foldl,
						closure,
						A2($elm$core$List$cons, id, acc),
						follow);
				}
			}
		});
	var ids = $elm$core$List$reverse(
		A2(
			$elm$core$List$filter,
			function (id) {
				return !A2($author$project$Study$started, m.a, id);
			},
			A3($elm$core$List$foldl, closure, _List_Nil, entries)));
	var s2 = A3(
		$elm$core$List$foldl,
		F2(
			function (_v6, s) {
				var i = _v6.a;
				var id = _v6.b;
				return A6(
					$author$project$Study$markKnown,
					m.d,
					m.l,
					7,
					(1 + A2($elm$core$Basics$modBy, 7, i)) * 86400000,
					id,
					s);
			}),
		m.a,
		A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, ids));
	return _Utils_Tuple2(
		s2,
		$elm$core$List$length(ids));
};
var $author$project$Main$currentFacet = function (m) {
	var _v0 = m.a.x;
	if (!_v0.$) {
		var sess = _v0.a;
		return _Utils_eq(sess.X, $elm$core$Maybe$Nothing) ? $elm$core$List$head(sess.a3) : $elm$core$Maybe$Nothing;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $elm$time$Time$flooredDiv = F2(
	function (numerator, denominator) {
		return $elm$core$Basics$floor(numerator / denominator);
	});
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0;
	return millis;
};
var $elm$time$Time$toAdjustedMinutesHelp = F3(
	function (defaultOffset, posixMinutes, eras) {
		toAdjustedMinutesHelp:
		while (true) {
			if (!eras.b) {
				return posixMinutes + defaultOffset;
			} else {
				var era = eras.a;
				var olderEras = eras.b;
				if (_Utils_cmp(era.n, posixMinutes) < 0) {
					return posixMinutes + era.f;
				} else {
					var $temp$defaultOffset = defaultOffset,
						$temp$posixMinutes = posixMinutes,
						$temp$eras = olderEras;
					defaultOffset = $temp$defaultOffset;
					posixMinutes = $temp$posixMinutes;
					eras = $temp$eras;
					continue toAdjustedMinutesHelp;
				}
			}
		}
	});
var $elm$time$Time$toAdjustedMinutes = F2(
	function (_v0, time) {
		var defaultOffset = _v0.a;
		var eras = _v0.b;
		return A3(
			$elm$time$Time$toAdjustedMinutesHelp,
			defaultOffset,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				60000),
			eras);
	});
var $elm$time$Time$toCivil = function (minutes) {
	var rawDay = A2($elm$time$Time$flooredDiv, minutes, 60 * 24) + 719468;
	var era = (((rawDay >= 0) ? rawDay : (rawDay - 146096)) / 146097) | 0;
	var dayOfEra = rawDay - (era * 146097);
	var yearOfEra = ((((dayOfEra - ((dayOfEra / 1460) | 0)) + ((dayOfEra / 36524) | 0)) - ((dayOfEra / 146096) | 0)) / 365) | 0;
	var dayOfYear = dayOfEra - (((365 * yearOfEra) + ((yearOfEra / 4) | 0)) - ((yearOfEra / 100) | 0));
	var mp = (((5 * dayOfYear) + 2) / 153) | 0;
	var month = mp + ((mp < 10) ? 3 : (-9));
	var year = yearOfEra + (era * 400);
	return {
		bV: (dayOfYear - ((((153 * mp) + 2) / 5) | 0)) + 1,
		cV: month,
		dC: year + ((month <= 2) ? 1 : 0)
	};
};
var $elm$time$Time$toDay = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).bV;
	});
var $elm$time$Time$Apr = 3;
var $elm$time$Time$Aug = 7;
var $elm$time$Time$Dec = 11;
var $elm$time$Time$Feb = 1;
var $elm$time$Time$Jan = 0;
var $elm$time$Time$Jul = 6;
var $elm$time$Time$Jun = 5;
var $elm$time$Time$Mar = 2;
var $elm$time$Time$May = 4;
var $elm$time$Time$Nov = 10;
var $elm$time$Time$Oct = 9;
var $elm$time$Time$Sep = 8;
var $elm$time$Time$toMonth = F2(
	function (zone, time) {
		var _v0 = $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).cV;
		switch (_v0) {
			case 1:
				return 0;
			case 2:
				return 1;
			case 3:
				return 2;
			case 4:
				return 3;
			case 5:
				return 4;
			case 6:
				return 5;
			case 7:
				return 6;
			case 8:
				return 7;
			case 9:
				return 8;
			case 10:
				return 9;
			case 11:
				return 10;
			default:
				return 11;
		}
	});
var $elm$time$Time$toYear = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).dC;
	});
var $elm$time$Time$utc = A2($elm$time$Time$Zone, 0, _List_Nil);
var $author$project$Main$dateString = F2(
	function (tz, ms) {
		var z = $elm$time$Time$utc;
		var t = $elm$time$Time$millisToPosix(ms - (tz * 60000));
		var pad = function (n) {
			return A3(
				$elm$core$String$padLeft,
				2,
				'0',
				$elm$core$String$fromInt(n));
		};
		var month = function () {
			var _v0 = A2($elm$time$Time$toMonth, z, t);
			switch (_v0) {
				case 0:
					return 1;
				case 1:
					return 2;
				case 2:
					return 3;
				case 3:
					return 4;
				case 4:
					return 5;
				case 5:
					return 6;
				case 6:
					return 7;
				case 7:
					return 8;
				case 8:
					return 9;
				case 9:
					return 10;
				case 10:
					return 11;
				default:
					return 12;
			}
		}();
		return $elm$core$String$fromInt(
			A2($elm$time$Time$toYear, z, t)) + ('-' + (pad(month) + ('-' + pad(
			A2($elm$time$Time$toDay, z, t)))));
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $author$project$Corpus$glyphText = function (it) {
	var _v0 = it.b3;
	switch (_v0) {
		case 4:
			return it.cm;
		case 3:
			return it.cu;
		case 0:
			return it.cR;
		default:
			return A2($elm$core$Maybe$withDefault, '?', it.ck);
	}
};
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm$core$String$any = _String_any;
var $author$project$Pinyin$startsWithVowel = function (m) {
	return A2(
		$elm$core$String$any,
		function (c) {
			return _Utils_eq(
				A2($elm$core$String$left, 1, m),
				$elm$core$String$fromChar(c));
		},
		'aeoāáǎàēéěèōóǒò');
};
var $author$project$Pinyin$indexOf = F2(
	function (needle, hay) {
		return A2(
			$elm$core$Maybe$withDefault,
			-1,
			$elm$core$List$head(
				A2($elm$core$String$indexes, needle, hay)));
	});
var $author$project$Pinyin$lastVowel = function (base) {
	return A2(
		$elm$core$Maybe$withDefault,
		-1,
		A2(
			$elm$core$Maybe$map,
			$elm$core$Tuple$first,
			$elm$core$List$head(
				$elm$core$List$reverse(
					A2(
						$elm$core$List$filter,
						function (_v0) {
							var c = _v0.b;
							return A2(
								$elm$core$String$contains,
								$elm$core$String$fromChar(c),
								'aeiouv');
						},
						A2(
							$elm$core$List$indexedMap,
							$elm$core$Tuple$pair,
							$elm$core$String$toList(base)))))));
};
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $author$project$Pinyin$split = function (syl) {
	var _v0 = $elm$core$String$toInt(
		A2($elm$core$String$right, 1, syl));
	if (!_v0.$) {
		var t = _v0.a;
		return _Utils_Tuple2(
			A2($elm$core$String$dropRight, 1, syl),
			t);
	} else {
		return _Utils_Tuple2(syl, 5);
	}
};
var $author$project$Pinyin$vowelMarks = F2(
	function (v, t) {
		var table = function () {
			switch (v) {
				case 'a':
					return 'āáǎà';
				case 'e':
					return 'ēéěè';
				case 'i':
					return 'īíǐì';
				case 'o':
					return 'ōóǒò';
				case 'u':
					return 'ūúǔù';
				default:
					return 'ǖǘǚǜ';
			}
		}();
		return A3($elm$core$String$slice, t - 1, t, table);
	});
var $author$project$Pinyin$toMarks = function (syl) {
	var _v0 = $author$project$Pinyin$split(syl);
	var base = _v0.a;
	var t = _v0.b;
	var plain = A3($elm$core$String$replace, 'v', 'ü', base);
	if (syl === 'r5') {
		return 'r';
	} else {
		if ((t === 5) || (!t)) {
			return plain;
		} else {
			var idx = A2($elm$core$String$contains, 'a', base) ? A2($author$project$Pinyin$indexOf, 'a', base) : (A2($elm$core$String$contains, 'e', base) ? A2($author$project$Pinyin$indexOf, 'e', base) : (A2($elm$core$String$contains, 'ou', base) ? A2($author$project$Pinyin$indexOf, 'o', base) : $author$project$Pinyin$lastVowel(base)));
			return (idx < 0) ? plain : _Utils_ap(
				A3(
					$elm$core$String$replace,
					'v',
					'ü',
					A2($elm$core$String$left, idx, base)),
				_Utils_ap(
					A2(
						$author$project$Pinyin$vowelMarks,
						A3($elm$core$String$slice, idx, idx + 1, base),
						t),
					A3(
						$elm$core$String$replace,
						'v',
						'ü',
						A2($elm$core$String$dropLeft, idx + 1, base))));
		}
	}
};
var $author$project$Pinyin$joinMarks = function (syls) {
	return $elm$core$String$concat(
		A2(
			$elm$core$List$indexedMap,
			F2(
				function (i, s) {
					var m = $author$project$Pinyin$toMarks(s);
					return ((i > 0) && ((s !== 'r5') && $author$project$Pinyin$startsWithVowel(m))) ? ('\u0027' + m) : m;
				}),
			syls));
};
var $elm$core$String$fromList = _String_fromList;
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$Pinyin$stripMark = function (c) {
	var groups = _List_fromArray(
		[
			_Utils_Tuple2('āáǎà', 'a'),
			_Utils_Tuple2('ēéěè', 'e'),
			_Utils_Tuple2('īíǐì', 'i'),
			_Utils_Tuple2('ōóǒò', 'o'),
			_Utils_Tuple2('ūúǔù', 'u'),
			_Utils_Tuple2('ǖǘǚǜü', 'v')
		]);
	return A2(
		$elm$core$Maybe$withDefault,
		c,
		A2(
			$elm$core$Maybe$map,
			$elm$core$Tuple$second,
			$elm$core$List$head(
				A2(
					$elm$core$List$filter,
					function (_v0) {
						var g = _v0.a;
						return A2(
							$elm$core$String$contains,
							$elm$core$String$fromChar(c),
							g);
					},
					groups))));
};
var $elm$core$String$toLower = _String_toLower;
var $author$project$Pinyin$searchKey = function (s) {
	return A2(
		$elm$core$String$filter,
		function (c) {
			return $elm$core$Char$isAlpha(c);
		},
		$elm$core$String$fromList(
			A2(
				$elm$core$List$map,
				$author$project$Pinyin$stripMark,
				$elm$core$String$toList(
					$elm$core$String$toLower(s)))));
};
var $author$project$Main$searchEntry = function (it) {
	var syls = (it.b3 === 4) ? it.da : ((it.b3 === 3) ? _List_fromArray(
		[it.c4]) : _List_Nil);
	var marked = $elm$core$List$isEmpty(syls) ? '' : A3(
		$elm$core$String$replace,
		'\u0027',
		'',
		$author$project$Pinyin$joinMarks(syls));
	return {
		ef: $author$project$Corpus$glyphText(it),
		a$: it,
		F: $author$project$Pinyin$searchKey(marked),
		cR: $elm$core$String$toLower(it.cR),
		bi: marked
	};
};
var $author$project$Main$ensureIndex = F2(
	function (page, m) {
		return (_Utils_eq(page, $author$project$Main$BrowsePage) && $elm$core$List$isEmpty(m.aT)) ? A2(
			$elm$core$List$map,
			$author$project$Main$searchEntry,
			A2(
				$elm$core$List$filterMap,
				$author$project$Corpus$get(m.d),
				$elm$core$Array$toList(m.d.c1))) : m.aT;
	});
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $author$project$Study$answerForms = function (a) {
	var bare = function () {
		var _v0 = A2($elm$core$String$indexes, '(', a);
		if (_v0.b) {
			var i = _v0.a;
			return $elm$core$String$trim(
				A2($elm$core$String$left, i, a));
		} else {
			return a;
		}
	}();
	var parts = A2(
		$elm$core$List$map,
		$elm$core$String$trim,
		A2(
			$elm$core$String$split,
			',',
			A3(
				$elm$core$String$replace,
				'/',
				',',
				A3($elm$core$String$replace, ';', ',', bare))));
	return A3(
		$elm$core$List$foldr,
		F2(
			function (x, acc) {
				return A2($elm$core$List$member, x, acc) ? acc : A2($elm$core$List$cons, x, acc);
			}),
		_List_Nil,
		A2(
			$elm$core$List$filter,
			function (x) {
				return $elm$core$String$length(x) > 1;
			},
			A2(
				$elm$core$List$cons,
				a,
				A2($elm$core$List$cons, bare, parts))));
};
var $author$project$Study$accepted = F3(
	function (c, s, it) {
		var own = A2(
			$elm$core$List$concatMap,
			$author$project$Study$answerForms,
			A2(
				$elm$core$List$cons,
				it.cR,
				_Utils_ap(
					it.fj,
					_Utils_ap(
						it.dF,
						A2(
							$elm$core$Maybe$withDefault,
							_List_Nil,
							A2($elm$core$Dict$get, it.aZ, s.fj))))));
		var family = function () {
			var _v0 = A2(
				$elm$core$Maybe$andThen,
				$author$project$Corpus$get(c),
				it.dP);
			if (!_v0.$) {
				var canon = _v0.a;
				return A2(
					$elm$core$List$concatMap,
					$author$project$Study$answerForms,
					A2($elm$core$List$cons, canon.cR, canon.fj));
			} else {
				return _List_Nil;
			}
		}();
		return _Utils_ap(own, family);
	});
var $author$project$Answer$Collision = function (a) {
	return {$: 3, a: a};
};
var $author$project$Answer$Right = {$: 0};
var $author$project$Answer$Typo = function (a) {
	return {$: 1, a: a};
};
var $author$project$Answer$Wrong = {$: 2};
var $author$project$Answer$normalize = function (s) {
	var strip = F2(
		function (prefix, str) {
			return A2($elm$core$String$startsWith, prefix, str) ? A2(
				$elm$core$String$dropLeft,
				$elm$core$String$length(prefix),
				str) : str;
		});
	var lower = A2(
		$elm$core$String$join,
		' ',
		$elm$core$String$words(
			$elm$core$String$toLower(s)));
	return $elm$core$String$trim(
		A2(
			strip,
			'to ',
			A2(
				strip,
				'the ',
				A2(
					strip,
					'an ',
					A2(strip, 'a ', lower)))));
};
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (!_v0.$) {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $elm$core$Elm$JsArray$push = _JsArray_push;
var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			$elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					$elm$core$Elm$JsArray$push,
					$elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
				return A2($elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (!value.$) {
				var subTree = value.a;
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4(
						$elm$core$Array$insertTailInTree,
						shift - $elm$core$Array$shiftStep,
						index,
						tail,
						$elm$core$Elm$JsArray$singleton(value)));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var $elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var originalTailLen = $elm$core$Elm$JsArray$length(tail);
		var newTailLen = $elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + $elm$core$Array$shiftStep;
				var newTree = A4(
					$elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					$elm$core$Elm$JsArray$singleton(
						$elm$core$Array$SubTree(tree)));
				return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					$elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var $elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			$elm$core$Array$unsafeReplaceTail,
			A2($elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var $author$project$Answer$levenshtein = F2(
	function (a, b) {
		var bs = $elm$core$Array$fromList(
			$elm$core$String$toList(b));
		var lb = $elm$core$Array$length(bs);
		var row0 = A2($elm$core$Array$initialize, lb + 1, $elm$core$Basics$identity);
		var step = F2(
			function (_v0, prev) {
				var i = _v0.a;
				var ca = _v0.b;
				return A3(
					$elm$core$List$foldl,
					F2(
						function (j, cur) {
							var ins = A2(
								$elm$core$Maybe$withDefault,
								0,
								A2($elm$core$Array$get, j - 1, cur)) + 1;
							var del = A2(
								$elm$core$Maybe$withDefault,
								0,
								A2($elm$core$Array$get, j, prev)) + 1;
							var cb = A2(
								$elm$core$Maybe$withDefault,
								' ',
								A2($elm$core$Array$get, j - 1, bs));
							var cost = _Utils_eq(ca, cb) ? 0 : 1;
							var sub = A2(
								$elm$core$Maybe$withDefault,
								0,
								A2($elm$core$Array$get, j - 1, prev)) + cost;
							return A2(
								$elm$core$Array$push,
								A2(
									$elm$core$Basics$min,
									del,
									A2($elm$core$Basics$min, ins, sub)),
								cur);
						}),
					$elm$core$Array$fromList(
						_List_fromArray(
							[i])),
					A2($elm$core$List$range, 1, lb));
			});
		return A2(
			$elm$core$Maybe$withDefault,
			0,
			A2(
				$elm$core$Array$get,
				lb,
				A3(
					$elm$core$List$foldl,
					step,
					row0,
					A2(
						$elm$core$List$indexedMap,
						F2(
							function (i, c) {
								return _Utils_Tuple2(i + 1, c);
							}),
						$elm$core$String$toList(a)))));
	});
var $author$project$Answer$tolerance = function (s) {
	var n = $elm$core$String$length(s);
	return (n <= 4) ? 0 : ((n <= 8) ? 1 : 2);
};
var $author$project$Answer$within = F2(
	function (input, accepted) {
		return _Utils_eq(input, accepted) || (_Utils_cmp(
			A2($author$project$Answer$levenshtein, input, accepted),
			$author$project$Answer$tolerance(accepted)) < 1);
	});
var $author$project$Answer$checkMeaning = F3(
	function (mine, others, input) {
		var n = $author$project$Answer$normalize(input);
		var accepted = A2($elm$core$List$map, $author$project$Answer$normalize, mine);
		if (n === '') {
			return $author$project$Answer$Wrong;
		} else {
			if (A2($elm$core$List$member, n, accepted)) {
				return $author$project$Answer$Right;
			} else {
				var _v0 = A2(
					$elm$core$List$filter,
					function (_v1) {
						var a = _v1.a;
						return A2(
							$author$project$Answer$within,
							n,
							$author$project$Answer$normalize(a)) && (!A2(
							$elm$core$List$member,
							$author$project$Answer$normalize(a),
							accepted));
					},
					others);
				if (_v0.b) {
					var _v2 = _v0.a;
					var id = _v2.b;
					return $author$project$Answer$Collision(id);
				} else {
					var _v3 = A2(
						$elm$core$List$filter,
						$author$project$Answer$within(n),
						accepted);
					if (_v3.b) {
						var a = _v3.a;
						return $author$project$Answer$Typo(a);
					} else {
						return $author$project$Answer$Wrong;
					}
				}
			}
		}
	});
var $author$project$Pinyin$alternatives = function (syl) {
	var marked = $author$project$Pinyin$toMarks(syl);
	var _v0 = $author$project$Pinyin$split(syl);
	var base = _v0.a;
	var t = _v0.b;
	var bases = A2($elm$core$String$contains, 'v', base) ? _List_fromArray(
		[
			base,
			A3($elm$core$String$replace, 'v', 'u:', base),
			A3($elm$core$String$replace, 'v', 'ü', base)
		]) : _List_fromArray(
		[base]);
	return (syl === 'r5') ? _List_fromArray(
		['r', 'r5', 'r0']) : ((t === 5) ? A2(
		$elm$core$List$concatMap,
		function (b) {
			return _List_fromArray(
				[b + '5', b + '0', b]);
		},
		bases) : A2(
		$elm$core$List$cons,
		marked,
		A2(
			$elm$core$List$map,
			function (b) {
				return _Utils_ap(
					b,
					$elm$core$String$fromInt(t));
			},
			bases)));
};
var $elm$core$List$sortBy = _List_sortBy;
var $author$project$Pinyin$matchSyllables = F2(
	function (syls, input) {
		if (!syls.b) {
			return input === '';
		} else {
			var s = syls.a;
			var rest = syls.b;
			return A2(
				$elm$core$List$any,
				function (alt) {
					return A2($elm$core$String$startsWith, alt, input) && A2(
						$author$project$Pinyin$matchSyllables,
						rest,
						A2(
							$elm$core$String$dropLeft,
							$elm$core$String$length(alt),
							input));
				},
				A2(
					$elm$core$List$sortBy,
					function (a) {
						return -$elm$core$String$length(a);
					},
					$author$project$Pinyin$alternatives(s)));
		}
	});
var $author$project$Pinyin$normalizeInput = function (s) {
	return $elm$core$String$trim(
		A2(
			$elm$core$String$filter,
			function (c) {
				return (c !== ' ') && ((c !== '\'') && ((c !== '’') && ((c !== '-') && (c !== '·'))));
			},
			$elm$core$String$toLower(s)));
};
var $author$project$Pinyin$matches = F2(
	function (forms, input) {
		var n = $author$project$Pinyin$normalizeInput(input);
		return (n !== '') && A2(
			$elm$core$List$any,
			function (f) {
				return A2($author$project$Pinyin$matchSyllables, f, n);
			},
			forms);
	});
var $author$project$Study$familyKey = function (it) {
	var _v0 = it.b3;
	switch (_v0) {
		case 2:
			return A2($elm$core$Maybe$withDefault, it.aZ, it.dP);
		case 3:
			return it.cu;
		default:
			return it.aZ;
	}
};
var $author$project$Study$uniqueIds = A2(
	$elm$core$Basics$composeR,
	A2(
		$elm$core$List$foldl,
		F2(
			function (x, _v0) {
				var seen = _v0.a;
				var acc = _v0.b;
				return A2($elm$core$Dict$member, x, seen) ? _Utils_Tuple2(seen, acc) : _Utils_Tuple2(
					A3($elm$core$Dict$insert, x, 0, seen),
					_Utils_ap(
						acc,
						_List_fromArray(
							[x])));
			}),
		_Utils_Tuple2($elm$core$Dict$empty, _List_Nil)),
	$elm$core$Tuple$second);
var $author$project$Study$othersAnswers = F3(
	function (c, s, it) {
		var mine = $author$project$Study$familyKey(it);
		var canonFamily = function (other) {
			var _v0 = other.b3;
			switch (_v0) {
				case 2:
					return A2($elm$core$Maybe$withDefault, other.aZ, other.dP);
				case 3:
					return other.e$ ? other.aZ : other.cu;
				default:
					return other.aZ;
			}
		};
		var sameFamily = function (other) {
			return _Utils_eq(
				$author$project$Study$familyKey(other),
				mine) || (_Utils_eq(
				canonFamily(other),
				mine) || (_Utils_eq(
				canonFamily(other),
				A2($elm$core$Maybe$withDefault, '', it.dP)) || _Utils_eq(
				$elm$core$Maybe$Just(other.aZ),
				it.dP)));
		};
		return A2(
			$elm$core$List$concatMap,
			function (o) {
				return A2(
					$elm$core$List$map,
					function (a) {
						return _Utils_Tuple2(a, o.aZ);
					},
					A2(
						$elm$core$List$concatMap,
						$author$project$Study$answerForms,
						A2(
							$elm$core$List$cons,
							o.cR,
							_Utils_ap(
								o.fj,
								_Utils_ap(
									o.dF,
									A2(
										$elm$core$Maybe$withDefault,
										_List_Nil,
										A2($elm$core$Dict$get, o.aZ, s.fj)))))));
			},
			A2(
				$elm$core$List$filter,
				function (o) {
					return (!_Utils_eq(o.aZ, it.aZ)) && ((!(!o.b3)) && (!sameFamily(o)));
				},
				A2(
					$elm$core$List$filterMap,
					$author$project$Corpus$get(c),
					$author$project$Study$uniqueIds(
						A2(
							$elm$core$List$map,
							$author$project$State$itemOfKey,
							$elm$core$Dict$keys(s.aB))))));
	});
var $author$project$Main$soundMatches = F2(
	function (it, typed) {
		var t = $elm$core$String$toLower(
			$elm$core$String$trim(typed));
		var _v0 = it.e9;
		switch (_v0) {
			case 'initial':
				return (it.fw === 'ø') ? A2(
					$elm$core$List$member,
					t,
					_List_fromArray(
						['ø', '0', '-', 'none', 'null', ''])) : _Utils_eq(t, it.fw);
			case 'final':
				return A2(
					$elm$core$List$member,
					t,
					_List_fromArray(
						[
							it.fw,
							A3($elm$core$String$replace, 'v', 'ü', it.fw),
							A3($elm$core$String$replace, 'v', 'u:', it.fw)
						]));
			default:
				return _Utils_eq(t, it.fw) || ((it.fw === '5') && (t === '0'));
		}
	});
var $author$project$Main$evaluate = F3(
	function (m, key, typed) {
		var _v0 = A2($author$project$Corpus$get, m.d, key.aZ);
		if (_v0.$ === 1) {
			return {q: false, c$: ''};
		} else {
			var it = _v0.a;
			var _v1 = key.cB;
			switch (_v1) {
				case 0:
					var forms = (it.b3 === 4) ? _List_fromArray(
						[it.da, it.fi]) : _List_fromArray(
						[
							_List_fromArray(
							[it.c4])
						]);
					return {
						q: A2($author$project$Pinyin$matches, forms, typed),
						c$: ''
					};
				case 1:
					var n = $elm$core$String$length(
						$author$project$Answer$normalize(typed));
					var others = A2(
						$elm$core$List$filter,
						function (_v4) {
							var a = _v4.a;
							return $elm$core$Basics$abs(
								$elm$core$String$length(
									$author$project$Answer$normalize(a)) - n) <= 2;
						},
						A3($author$project$Study$othersAnswers, m.d, m.a, it));
					var _v2 = A3(
						$author$project$Answer$checkMeaning,
						A3($author$project$Study$accepted, m.d, m.a, it),
						others,
						typed);
					switch (_v2.$) {
						case 0:
							return {q: true, c$: ''};
						case 1:
							var a = _v2.a;
							return {q: true, c$: 'Close enough: “' + (a + '”.')};
						case 3:
							var other = _v2.a;
							return {
								q: false,
								c$: function () {
									var _v3 = A2($author$project$Corpus$get, m.d, other);
									if (!_v3.$) {
										var o = _v3.a;
										return 'That\u0027s the keyword for ' + ($author$project$Corpus$glyphText(o) + (' (' + (o.cR + ').')));
									} else {
										return 'That\u0027s another item\u0027s keyword.';
									}
								}()
							};
						default:
							return {q: false, c$: ''};
					}
				case 4:
					return {
						q: A2($author$project$Main$soundMatches, it, typed),
						c$: ''
					};
				default:
					return {q: false, c$: ''};
			}
		}
	});
var $author$project$Main$event = F3(
	function (now, id, name) {
		return {q: true, cB: 'event:' + name, aZ: id, aP: now, cl: false};
	});
var $author$project$Main$exportFile = _Platform_outgoingPort('exportFile', $elm$core$Basics$identity);
var $elm$file$File$Select$file = F2(
	function (mimes, toMsg) {
		return A2(
			$elm$core$Task$perform,
			toMsg,
			_File_uploadOne(mimes));
	});
var $elm$browser$Browser$Dom$focus = _Browser_call('focus');
var $author$project$Main$focusInput = _Platform_outgoingPort(
	'focusInput',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $elm$browser$Browser$Dom$getViewport = _Browser_withWindow(_Browser_getViewport);
var $author$project$Srs$initialStability = function (g) {
	return $author$project$Srs$w(
		A3($elm$core$Basics$clamp, 1, 4, g) - 1);
};
var $elm$core$Basics$e = _Basics_e;
var $elm$core$Basics$pow = _Basics_pow;
var $author$project$Srs$lapseStability = F3(
	function (s, d, r) {
		return A2(
			$elm$core$Basics$min,
			s,
			(($author$project$Srs$w(11) * A2(
				$elm$core$Basics$pow,
				d,
				-$author$project$Srs$w(12))) * (A2(
				$elm$core$Basics$pow,
				s + 1,
				$author$project$Srs$w(13)) - 1)) * A2(
				$elm$core$Basics$pow,
				$elm$core$Basics$e,
				$author$project$Srs$w(14) * (1 - r)));
	});
var $author$project$Srs$retrievability = F2(
	function (elapsedDays, s) {
		return 1 / (1 + (elapsedDays / (9 * A2($elm$core$Basics$max, 0.01, s))));
	});
var $author$project$Srs$successStability = F4(
	function (s, d, r, g) {
		var hardPenalty = (g === 2) ? $author$project$Srs$w(15) : 1;
		var gain = ((A2(
			$elm$core$Basics$pow,
			$elm$core$Basics$e,
			$author$project$Srs$w(8)) * (11 - d)) * A2(
			$elm$core$Basics$pow,
			s,
			-$author$project$Srs$w(9))) * (A2(
			$elm$core$Basics$pow,
			$elm$core$Basics$e,
			$author$project$Srs$w(10) * (1 - r)) - 1);
		var easyBonus = (g === 4) ? $author$project$Srs$w(16) : 1;
		return s * (1 + ((gain * hardPenalty) * easyBonus));
	});
var $author$project$Srs$tenMinutes = 600000;
var $author$project$Srs$updateDifficulty = F2(
	function (d, g) {
		var stepped = d - ($author$project$Srs$w(6) * (g - 3));
		return A3(
			$elm$core$Basics$clamp,
			1,
			10,
			($author$project$Srs$w(7) * $author$project$Srs$initialDifficulty(3)) + ((1 - $author$project$Srs$w(7)) * stepped));
	});
var $author$project$Srs$gradeWith = F4(
	function (now, retention, g, card) {
		var passed = g > 1;
		var elapsedDays = (now - card.aJ) / $author$project$Srs$dayMs;
		var _v0 = function () {
			var _v1 = card.fd;
			if (_v1.$ === 1) {
				return _Utils_Tuple2(
					$author$project$Srs$initialStability(g),
					$author$project$Srs$initialDifficulty(g));
			} else {
				var s = _v1.a;
				var r = A2($author$project$Srs$retrievability, elapsedDays, s);
				return _Utils_Tuple2(
					passed ? A4($author$project$Srs$successStability, s, card.ai, r, g) : A3($author$project$Srs$lapseStability, s, card.ai, r),
					A2($author$project$Srs$updateDifficulty, card.ai, g));
			}
		}();
		var stability = _v0.a;
		var difficulty = _v0.b;
		return passed ? _Utils_update(
			card,
			{
				ai: difficulty,
				bA: now + $elm$core$Basics$round(
					$author$project$Srs$dayMs * A3(
						$elm$core$Basics$clamp,
						1,
						$author$project$Srs$intervalCap(card.bC),
						A2($author$project$Srs$interval, retention, stability))),
				aJ: now,
				bn: card.bn + 1,
				fd: $elm$core$Maybe$Just(stability)
			}) : _Utils_update(
			card,
			{
				ai: difficulty,
				bA: now + $author$project$Srs$tenMinutes,
				aH: card.aH + 1,
				aJ: now,
				fd: $elm$core$Maybe$Just(
					A2($elm$core$Basics$max, 0.1, stability))
			});
	});
var $author$project$Srs$grade = F4(
	function (now, retention, passed, card) {
		return A4(
			$author$project$Srs$gradeWith,
			now,
			retention,
			passed ? 3 : 1,
			card);
	});
var $author$project$Srs$gradeDraw = F5(
	function (now, retention, passed, mistakes, card) {
		var g = (!passed) ? 1 : ((mistakes >= 3) ? 2 : 3);
		var _v0 = (!passed) ? _Utils_Tuple2(
			A2($elm$core$Basics$min, 3, card.bC + 1),
			0) : ((!mistakes) ? (((_Utils_cmp(card.as + 1, card.by) > -1) && (card.bC > 0)) ? _Utils_Tuple2(card.bC - 1, 0) : _Utils_Tuple2(card.bC, card.as + 1)) : _Utils_Tuple2(card.bC, card.as));
		var hint = _v0.a;
		var clean = _v0.b;
		return A4(
			$author$project$Srs$gradeWith,
			now,
			retention,
			g,
			_Utils_update(
				card,
				{as: clean, bC: hint}));
	});
var $author$project$Study$graduate = F5(
	function (c, now, id, _v0, s) {
		var _v1 = A2($author$project$Corpus$get, c, id);
		if (_v1.$ === 1) {
			return s;
		} else {
			var it = _v1.a;
			var facets = A2(
				$author$project$State$cardFacets,
				id,
				$author$project$Study$drawable(it) && s.N.dA);
			var card = function (f) {
				return (f === 2) ? A3(
					$author$project$Srs$graduate,
					now,
					3,
					$author$project$Srs$cleanNeededFor(
						A2($author$project$Study$strokeCount, c, it))) : A3($author$project$Srs$graduate, now, $author$project$Srs$noHint, 1);
			};
			return _Utils_update(
				s,
				{
					aB: A3(
						$elm$core$List$foldl,
						F2(
							function (f, acc) {
								return A3(
									$elm$core$Dict$insert,
									A2($author$project$State$cardKey, id, f),
									card(f),
									acc);
							}),
						s.aB,
						facets)
				});
		}
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $author$project$Study$answer = F6(
	function (c, now, key, correct, mistakes, s) {
		var _v0 = s.x;
		if (_v0.$ === 1) {
			return s;
		} else {
			var sess = _v0.a;
			var rest = A2($elm$core$List$drop, 1, sess.a3);
			var queue = correct ? rest : _Utils_ap(
				A2($elm$core$List$take, 3, rest),
				A2(
					$elm$core$List$cons,
					key,
					A2($elm$core$List$drop, 3, rest)));
			var logged = {
				q: correct,
				cB: $author$project$State$facetName(key.cB),
				aZ: key.aZ,
				aP: now,
				cl: false
			};
			var left = correct ? A3(
				$elm$core$Dict$update,
				key.aZ,
				$elm$core$Maybe$map(
					function (n) {
						return n - 1;
					}),
				sess.b4) : sess.b4;
			var k = $author$project$State$keyOf(key);
			var wrong = correct ? sess.bt : A3(
				$elm$core$Dict$update,
				k,
				function (n) {
					return $elm$core$Maybe$Just(
						A2($elm$core$Maybe$withDefault, 0, n) + 1);
				},
				sess.bt);
			var itemDone = _Utils_eq(
				A2($elm$core$Dict$get, key.aZ, left),
				$elm$core$Maybe$Just(0)) && (!A2($elm$core$List$member, key.aZ, sess.aE));
			var sess2 = _Utils_update(
				sess,
				{
					aE: itemDone ? A2($elm$core$List$cons, key.aZ, sess.aE) : sess.aE,
					b4: left,
					a3: queue,
					bt: wrong
				});
			var s2 = _Utils_update(
				s,
				{
					ak: A2($elm$core$List$cons, logged, s.ak),
					x: $elm$core$Maybe$Just(sess2)
				});
			var firstTry = !A2($elm$core$Dict$member, k, sess.bt);
			if (sess.aj) {
				return itemDone ? A5(
					$author$project$Study$graduate,
					c,
					now,
					key.aZ,
					sess.a3,
					_Utils_update(
						s2,
						{
							ak: A2(
								$elm$core$List$cons,
								_Utils_update(
									logged,
									{q: true, cB: 'event:graduate'}),
								s2.ak)
						})) : s2;
			} else {
				if (firstTry) {
					var _v1 = A2($elm$core$Dict$get, k, s2.aB);
					if (!_v1.$) {
						var card = _v1.a;
						return _Utils_update(
							s2,
							{
								aB: A3(
									$elm$core$Dict$insert,
									k,
									(key.cB === 2) ? A5($author$project$Srs$gradeDraw, now, s.N.cb, correct, mistakes, card) : A4($author$project$Srs$grade, now, s.N.cb, correct, card),
									s2.aB),
								cc: s2.cc + 1
							});
					} else {
						return s2;
					}
				} else {
					return s2;
				}
			}
		}
	});
var $author$project$Main$firstJust = F2(
	function (a, b) {
		if (!a.$) {
			return a;
		} else {
			return b;
		}
	});
var $elm$random$Random$step = F2(
	function (_v0, seed) {
		var generator = _v0;
		return generator(seed);
	});
var $elm$random$Random$addOne = function (value) {
	return _Utils_Tuple2(1, value);
};
var $elm$random$Random$Generator = $elm$core$Basics$identity;
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $elm$random$Random$peel = function (_v0) {
	var state = _v0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var $elm$random$Random$float = F2(
	function (a, b) {
		return function (seed0) {
			var seed1 = $elm$random$Random$next(seed0);
			var range = $elm$core$Basics$abs(b - a);
			var n1 = $elm$random$Random$peel(seed1);
			var n0 = $elm$random$Random$peel(seed0);
			var lo = (134217727 & n1) * 1.0;
			var hi = (67108863 & n0) * 1.0;
			var val = ((hi * 134217728.0) + lo) / 9007199254740992.0;
			var scaled = (val * range) + a;
			return _Utils_Tuple2(
				scaled,
				$elm$random$Random$next(seed1));
		};
	});
var $elm$random$Random$getByWeight = F3(
	function (_v0, others, countdown) {
		getByWeight:
		while (true) {
			var weight = _v0.a;
			var value = _v0.b;
			if (!others.b) {
				return value;
			} else {
				var second = others.a;
				var otherOthers = others.b;
				if (_Utils_cmp(
					countdown,
					$elm$core$Basics$abs(weight)) < 1) {
					return value;
				} else {
					var $temp$_v0 = second,
						$temp$others = otherOthers,
						$temp$countdown = countdown - $elm$core$Basics$abs(weight);
					_v0 = $temp$_v0;
					others = $temp$others;
					countdown = $temp$countdown;
					continue getByWeight;
				}
			}
		}
	});
var $elm$random$Random$map = F2(
	function (func, _v0) {
		var genA = _v0;
		return function (seed0) {
			var _v1 = genA(seed0);
			var a = _v1.a;
			var seed1 = _v1.b;
			return _Utils_Tuple2(
				func(a),
				seed1);
		};
	});
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $elm$random$Random$weighted = F2(
	function (first, others) {
		var normalize = function (_v0) {
			var weight = _v0.a;
			return $elm$core$Basics$abs(weight);
		};
		var total = normalize(first) + $elm$core$List$sum(
			A2($elm$core$List$map, normalize, others));
		return A2(
			$elm$random$Random$map,
			A2($elm$random$Random$getByWeight, first, others),
			A2($elm$random$Random$float, 0, total));
	});
var $elm$random$Random$uniform = F2(
	function (value, valueList) {
		return A2(
			$elm$random$Random$weighted,
			$elm$random$Random$addOne(value),
			A2($elm$core$List$map, $elm$random$Random$addOne, valueList));
	});
var $author$project$Main$playFor = F2(
	function (it, m) {
		var _v0 = it.dH;
		if (_v0.$ === 1) {
			return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
		} else {
			var a = _v0.a;
			var _v1 = function () {
				var _v2 = m.a.N.bR;
				switch (_v2) {
					case 'male':
						return _Utils_Tuple3(true, m.Z, m.a.bg);
					case 'female':
						return _Utils_Tuple3(false, m.Z, m.a.bg);
					case 'random':
						var _v3 = A2(
							$elm$random$Random$step,
							A2(
								$elm$random$Random$uniform,
								true,
								_List_fromArray(
									[false])),
							m.Z);
						var b = _v3.a;
						var sd = _v3.b;
						return _Utils_Tuple3(b, sd, m.a.bg);
					default:
						var male = m.a.bg !== 'male';
						return _Utils_Tuple3(
							male,
							m.Z,
							male ? 'male' : 'female');
				}
			}();
			var wantMale = _v1.a;
			var seed = _v1.b;
			var last = _v1.c;
			var key = wantMale ? A2($author$project$Main$firstJust, a.ey, a.ed) : A2($author$project$Main$firstJust, a.ed, a.ey);
			if (!key.$) {
				var k = key.a;
				return _Utils_Tuple2(
					_Utils_update(
						m,
						{
							a: function (s) {
								return _Utils_update(
									s,
									{bg: last});
							}(m.a),
							Z: seed
						}),
					$author$project$Main$playAudio('audio/' + (k + '.mp3')));
			} else {
				return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
			}
		}
	});
var $author$project$Main$autoPlay = F2(
	function (it, m) {
		return (m.a.N.bR === 'off') ? _Utils_Tuple2(m, $elm$core$Platform$Cmd$none) : A2($author$project$Main$playFor, it, m);
	});
var $author$project$Main$persist = function (m) {
	return _Utils_Tuple2(
		m,
		$author$project$Main$save(
			A2(
				$elm$json$Json$Encode$encode,
				0,
				$author$project$State$encode(m.a))));
};
var $author$project$Main$pinyinPending = F2(
	function (m, id) {
		var _v0 = m.a.x;
		if (!_v0.$) {
			var sess = _v0.a;
			return A2(
				$elm$core$List$any,
				function (k) {
					return _Utils_eq(k.aZ, id) && (!k.cB);
				},
				sess.a3);
		} else {
			return false;
		}
	});
var $author$project$Main$withCmd = F2(
	function (extra, _v0) {
		var m = _v0.a;
		var cmd = _v0.b;
		return _Utils_Tuple2(
			m,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[cmd, extra])));
	});
var $author$project$Main$grade = F3(
	function (key, result, m) {
		var graded = A6($author$project$Study$answer, m.d, m.l, key, result.q, m.aa, m.a);
		var s2 = _Utils_update(
			graded,
			{
				bT: A2(
					$elm$core$Dict$remove,
					$author$project$State$keyOf(key),
					graded.bT)
			});
		var correction = A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Dict$get,
				$author$project$State$keyOf(key),
				graded.bT));
		var note = A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$filter,
				$elm$core$Basics$neq(''),
				_List_fromArray(
					[correction, result.c$])));
		var before = m.a;
		var m2 = _Utils_update(
			m,
			{
				h: $elm$core$Maybe$Just(
					{q: result.q, F: key, c$: note, aQ: m.w}),
				a: s2,
				U: $elm$core$Maybe$Just(before)
			});
		var _v0 = function () {
			var _v1 = A2($author$project$Corpus$get, m.d, key.aZ);
			if (!_v1.$) {
				var it = _v1.a;
				return ((!(!key.cB)) && A2($author$project$Main$pinyinPending, m2, it.aZ)) ? _Utils_Tuple2(m2, $elm$core$Platform$Cmd$none) : A2($author$project$Main$autoPlay, it, m2);
			} else {
				return _Utils_Tuple2(m2, $elm$core$Platform$Cmd$none);
			}
		}();
		var m3 = _v0.a;
		var audio = _v0.b;
		return A2(
			$author$project$Main$withCmd,
			audio,
			$author$project$Main$persist(m3));
	});
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $author$project$Main$mapSession = F2(
	function (f, s) {
		return _Utils_update(
			s,
			{
				x: A2($elm$core$Maybe$map, f, s.x)
			});
	});
var $author$project$Main$maxReportLength = 2000;
var $author$project$Main$maxStoryLength = 900;
var $author$project$Pinyin$lettersOf = function (s) {
	return $elm$core$String$fromList(
		A2(
			$elm$core$List$filter,
			$elm$core$Char$isAlpha,
			A2(
				$elm$core$List$map,
				$author$project$Pinyin$stripMark,
				$elm$core$String$toList(
					A3(
						$elm$core$String$replace,
						'u:',
						'v',
						$elm$core$String$toLower(s))))));
};
var $author$project$Pinyin$isPinyin = F2(
	function (known, s) {
		var splits = function (rest) {
			return (rest === '') || A2(
				$elm$core$List$any,
				function (n) {
					return (_Utils_cmp(
						$elm$core$String$length(rest),
						n) > -1) && (known(
						A2($elm$core$String$left, n, rest)) && splits(
						A2($elm$core$String$dropLeft, n, rest)));
				},
				_List_fromArray(
					[6, 5, 4, 3, 2, 1]));
		};
		var letters = $author$project$Pinyin$lettersOf(s);
		var allowed = function (c) {
			return $elm$core$Char$isAlpha(c) || ($elm$core$Char$isDigit(c) || A2(
				$elm$core$String$contains,
				$elm$core$String$fromChar(c),
				' \u0027’-·:āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü'));
		};
		return (letters !== '') && (A2(
			$elm$core$String$all,
			allowed,
			$elm$core$String$toLower(s)) && splits(letters));
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$member, key, dict);
	});
var $author$project$Study$otherMeanings = function (it) {
	return A2($elm$core$List$concatMap, $author$project$Study$answerForms, it.eA);
};
var $author$project$Main$nudgeFor = F3(
	function (m, key, typed) {
		var _v0 = A2($author$project$Corpus$get, m.d, key.aZ);
		if (_v0.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var it = _v0.a;
			var spoken = (it.b3 === 4) ? _List_fromArray(
				[it.da, it.fi]) : _List_fromArray(
				[
					_List_fromArray(
					[it.c4])
				]);
			var matches = function (answers) {
				var _v2 = A3($author$project$Answer$checkMeaning, answers, _List_Nil, typed);
				switch (_v2.$) {
					case 0:
						return true;
					case 1:
						return true;
					default:
						return false;
				}
			};
			var letters = $author$project$Pinyin$lettersOf(typed);
			var isMeaning = matches(
				A3($author$project$Study$accepted, m.d, m.a, it));
			var isOtherMeaning = (!isMeaning) && matches(
				$author$project$Study$otherMeanings(it));
			var isItsPinyin = A2($author$project$Pinyin$matches, spoken, typed) || A2(
				$elm$core$List$any,
				function (f) {
					return _Utils_eq(
						letters,
						$elm$core$String$concat(
							A2(
								$elm$core$List$map,
								$elm$core$String$filter($elm$core$Char$isAlpha),
								f)));
				},
				spoken);
			var hasTone = A2($elm$core$String$any, $elm$core$Char$isDigit, typed) || A2(
				$elm$core$String$any,
				function (c) {
					return A2(
						$elm$core$String$contains,
						$elm$core$String$fromChar(c),
						'āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ');
				},
				typed);
			var _v1 = key.cB;
			switch (_v1) {
				case 0:
					return A2($author$project$Pinyin$matches, spoken, typed) ? $elm$core$Maybe$Nothing : ((isMeaning || isOtherMeaning) ? $elm$core$Maybe$Just('That\u0027s the meaning. We\u0027re asking for the pinyin.') : ((!A2(
						$author$project$Pinyin$isPinyin,
						function (s) {
							return A2($elm$core$Set$member, s, m.d.$7);
						},
						typed)) ? $elm$core$Maybe$Just('That isn\u0027t valid pinyin. Type the syllables with tone numbers, like hao3.') : ((isItsPinyin && (!hasTone)) ? $elm$core$Maybe$Just('Add the tone: a number after each syllable, like hao3.') : $elm$core$Maybe$Nothing)));
				case 1:
					return (isItsPinyin && (!isMeaning)) ? $elm$core$Maybe$Just('That\u0027s the pinyin. We\u0027re asking for the meaning.') : (isOtherMeaning ? $elm$core$Maybe$Just('That\u0027s one of its other meanings. We\u0027re asking for its keyword.') : $elm$core$Maybe$Nothing);
				default:
					return $elm$core$Maybe$Nothing;
			}
		}
	});
var $author$project$Main$presentingItem = function (m) {
	return A2(
		$elm$core$Maybe$andThen,
		function (sess) {
			return A2(
				$elm$core$Maybe$andThen,
				$author$project$Corpus$get(m.d),
				A2(
					$elm$core$Maybe$andThen,
					function (i) {
						return $elm$core$List$head(
							A2($elm$core$List$drop, i, sess.b2));
					},
					sess.X));
		},
		m.a.x);
};
var $author$project$Main$pushHistory = function (m) {
	return _Utils_eq(m.s, $author$project$Main$Home) ? _List_Nil : (_Utils_eq(
		$elm$core$List$head(m.ab),
		$elm$core$Maybe$Just(m.s)) ? m.ab : A2(
		$elm$core$List$take,
		50,
		A2($elm$core$List$cons, m.s, m.ab)));
};
var $author$project$Srs$reschedule = F2(
	function (retention, card) {
		var _v0 = card.fd;
		if (_v0.$ === 1) {
			return card;
		} else {
			var s = _v0.a;
			return _Utils_update(
				card,
				{
					bA: card.aJ + $elm$core$Basics$round(
						$author$project$Srs$dayMs * A3(
							$elm$core$Basics$clamp,
							1,
							$author$project$Srs$intervalCap(card.bC),
							A2($author$project$Srs$interval, retention, s)))
				});
		}
	});
var $author$project$Study$resetItem = F2(
	function (id, s) {
		return _Utils_update(
			s,
			{
				aB: A2(
					$elm$core$Dict$filter,
					F2(
						function (key, _v0) {
							return !_Utils_eq(
								$author$project$State$itemOfKey(key),
								id);
						}),
					s.aB)
			});
	});
var $author$project$Main$restoreScroll = _Platform_outgoingPort('restoreScroll', $elm$json$Json$Encode$float);
var $author$project$Main$saveBackup = _Platform_outgoingPort('saveBackup', $elm$json$Json$Encode$string);
var $author$project$Srs$setHint = F2(
	function (h, card) {
		return _Utils_update(
			card,
			{
				as: 0,
				bC: A3($elm$core$Basics$clamp, 0, 3, h)
			});
	});
var $author$project$Study$setDrawHint = F3(
	function (id, h, s) {
		return _Utils_update(
			s,
			{
				aB: A3(
					$elm$core$Dict$update,
					A2($author$project$State$cardKey, id, 2),
					$elm$core$Maybe$map(
						$author$project$Srs$setHint(h)),
					s.aB)
			});
	});
var $author$project$Main$setQuery = F2(
	function (q, b) {
		return _Utils_update(
			b,
			{ac: 300, bm: q});
	});
var $author$project$Main$setSetting = F2(
	function (f, m) {
		return $author$project$Main$persist(
			_Utils_update(
				m,
				{
					a: function (s) {
						return _Utils_update(
							s,
							{
								N: f(s.N)
							});
					}(m.a)
				}));
	});
var $author$project$Main$maxAnswerLength = 40;
var $author$project$Main$maxAnswers = 10;
var $author$project$Main$setSynonyms = F3(
	function (id, f, s) {
		var next = A2(
			$elm$core$List$take,
			$author$project$Main$maxAnswers,
			A3(
				$elm$core$List$foldl,
				F2(
					function (x, acc) {
						return A2($elm$core$List$member, x, acc) ? acc : _Utils_ap(
							acc,
							_List_fromArray(
								[x]));
					}),
				_List_Nil,
				A2(
					$elm$core$List$filter,
					$elm$core$Basics$neq(''),
					A2(
						$elm$core$List$map,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$String$left($author$project$Main$maxAnswerLength),
							$elm$core$String$trim),
						f(
							A2(
								$elm$core$Maybe$withDefault,
								_List_Nil,
								A2($elm$core$Dict$get, id, s.fj)))))));
		return _Utils_update(
			s,
			{
				fj: $elm$core$List$isEmpty(next) ? A2($elm$core$Dict$remove, id, s.fj) : A3($elm$core$Dict$insert, id, next, s.fj)
			});
	});
var $author$project$Main$setTheme = _Platform_outgoingPort('setTheme', $elm$json$Json$Encode$string);
var $author$project$Main$setWriting = F2(
	function (f, m) {
		return $author$project$Main$persist(
			_Utils_update(
				m,
				{
					a: A2(
						$author$project$Study$backfillWriting,
						m.d,
						function (s) {
							return _Utils_update(
								s,
								{
									N: f(s.N)
								});
						}(m.a))
				}));
	});
var $elm$core$Process$sleep = _Process_sleep;
var $author$project$Study$removeFirst = F2(
	function (x, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var y = xs.a;
			var ys = xs.b;
			return _Utils_eq(x, y) ? ys : A2(
				$elm$core$List$cons,
				y,
				A2($author$project$Study$removeFirst, x, ys));
		}
	});
var $elm$random$Random$int = F2(
	function (a, b) {
		return function (seed0) {
			var _v0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
			var lo = _v0.a;
			var hi = _v0.b;
			var range = (hi - lo) + 1;
			if (!((range - 1) & range)) {
				return _Utils_Tuple2(
					(((range - 1) & $elm$random$Random$peel(seed0)) >>> 0) + lo,
					$elm$random$Random$next(seed0));
			} else {
				var threshhold = (((-range) >>> 0) % range) >>> 0;
				var accountForBias = function (seed) {
					accountForBias:
					while (true) {
						var x = $elm$random$Random$peel(seed);
						var seedN = $elm$random$Random$next(seed);
						if (_Utils_cmp(x, threshhold) < 0) {
							var $temp$seed = seedN;
							seed = $temp$seed;
							continue accountForBias;
						} else {
							return _Utils_Tuple2((x % range) + lo, seedN);
						}
					}
				};
				return accountForBias(seed0);
			}
		};
	});
var $elm$random$Random$maxInt = 2147483647;
var $elm$random$Random$minInt = -2147483648;
var $elm_community$random_extra$Random$List$anyInt = A2($elm$random$Random$int, $elm$random$Random$minInt, $elm$random$Random$maxInt);
var $elm$random$Random$map3 = F4(
	function (func, _v0, _v1, _v2) {
		var genA = _v0;
		var genB = _v1;
		var genC = _v2;
		return function (seed0) {
			var _v3 = genA(seed0);
			var a = _v3.a;
			var seed1 = _v3.b;
			var _v4 = genB(seed1);
			var b = _v4.a;
			var seed2 = _v4.b;
			var _v5 = genC(seed2);
			var c = _v5.a;
			var seed3 = _v5.b;
			return _Utils_Tuple2(
				A3(func, a, b, c),
				seed3);
		};
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $elm$random$Random$independentSeed = function (seed0) {
	var makeIndependentSeed = F3(
		function (state, b, c) {
			return $elm$random$Random$next(
				A2($elm$random$Random$Seed, state, (1 | (b ^ c)) >>> 0));
		});
	var gen = A2($elm$random$Random$int, 0, 4294967295);
	return A2(
		$elm$random$Random$step,
		A4($elm$random$Random$map3, makeIndependentSeed, gen, gen, gen),
		seed0);
};
var $elm_community$random_extra$Random$List$shuffle = function (list) {
	return A2(
		$elm$random$Random$map,
		function (independentSeed) {
			return A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2(
					$elm$core$List$sortBy,
					$elm$core$Tuple$second,
					A3(
						$elm$core$List$foldl,
						F2(
							function (item, _v0) {
								var acc = _v0.a;
								var seed = _v0.b;
								var _v1 = A2($elm$random$Random$step, $elm_community$random_extra$Random$List$anyInt, seed);
								var tag = _v1.a;
								var nextSeed = _v1.b;
								return _Utils_Tuple2(
									A2(
										$elm$core$List$cons,
										_Utils_Tuple2(item, tag),
										acc),
									nextSeed);
							}),
						_Utils_Tuple2(_List_Nil, independentSeed),
						list).a));
		},
		$elm$random$Random$independentSeed);
};
var $author$project$Study$arrange = F2(
	function (keys, seed) {
		var spread = F2(
			function (acc, pending) {
				spread:
				while (true) {
					if (!pending.b) {
						return $elm$core$List$reverse(acc);
					} else {
						var lastId = A2(
							$elm$core$Maybe$map,
							function ($) {
								return $.aZ;
							},
							$elm$core$List$head(acc));
						var _v1 = function () {
							var _v2 = A2(
								$elm$core$List$filter,
								function (k) {
									return !_Utils_eq(
										$elm$core$Maybe$Just(k.aZ),
										lastId);
								},
								pending);
							if (_v2.b) {
								var p = _v2.a;
								return _Utils_Tuple2(
									p,
									A2($author$project$Study$removeFirst, p, pending));
							} else {
								if (pending.b) {
									var p = pending.a;
									var ps = pending.b;
									return _Utils_Tuple2(p, ps);
								} else {
									return _Utils_Tuple2(
										{cB: 1, aZ: ''},
										_List_Nil);
								}
							}
						}();
						var pick = _v1.a;
						var rest = _v1.b;
						var $temp$acc = A2($elm$core$List$cons, pick, acc),
							$temp$pending = rest;
						acc = $temp$acc;
						pending = $temp$pending;
						continue spread;
					}
				}
			});
		var _v4 = A2(
			$elm$random$Random$step,
			$elm_community$random_extra$Random$List$shuffle(keys),
			seed);
		var shuffled = _v4.a;
		var seed2 = _v4.b;
		return _Utils_Tuple2(
			A2(spread, _List_Nil, shuffled),
			seed2);
	});
var $elm$core$String$foldl = _String_foldl;
var $author$project$Study$hashSeed = function (str) {
	return $elm$random$Random$initialSeed(
		A3(
			$elm$core$String$foldl,
			F2(
				function (ch, h) {
					return A2(
						$elm$core$Basics$modBy,
						2147483647,
						(h * 31) + $elm$core$Char$toCode(ch));
				}),
			7,
			str));
};
var $author$project$Study$unique = A2(
	$elm$core$List$foldl,
	F2(
		function (x, acc) {
			return A2($elm$core$List$member, x, acc) ? acc : _Utils_ap(
				acc,
				_List_fromArray(
					[x]));
		}),
	_List_Nil);
var $author$project$Study$choiceOptions = F2(
	function (it, salt) {
		var seed = $author$project$Study$hashSeed(
			it.aZ + ('|' + $elm$core$String$fromInt(salt)));
		var _v0 = A2(
			$elm$random$Random$step,
			$elm_community$random_extra$Random$List$shuffle(
				A2(
					$elm$core$List$filter,
					$elm$core$Basics$neq(
						$author$project$Corpus$glyphText(it)),
					$author$project$Study$unique(it.dX))),
			seed);
		var picked = _v0.a;
		var seed2 = _v0.b;
		return ($elm$core$List$length(picked) < 3) ? _List_Nil : A2(
			$elm$random$Random$step,
			$elm_community$random_extra$Random$List$shuffle(
				A2(
					$elm$core$List$cons,
					$author$project$Corpus$glyphText(it),
					A2($elm$core$List$take, 3, picked))),
			seed2).a;
	});
var $author$project$Study$facetsFor = F3(
	function (lesson, settings, it) {
		var drawIf = (settings.dA && $author$project$Study$drawable(it)) ? _List_fromArray(
			[2]) : _List_Nil;
		var choice = lesson ? _List_fromArray(
			[3]) : _List_Nil;
		var _v0 = it.b3;
		switch (_v0) {
			case 3:
				return _Utils_ap(
					$author$project$State$asksPinyin(it.aZ) ? _List_fromArray(
						[0, 1]) : _List_fromArray(
						[1]),
					_Utils_ap(choice, drawIf));
			case 4:
				return A2($elm$core$List$cons, 1, choice);
			case 1:
				return A2($elm$core$List$cons, 1, drawIf);
			case 2:
				return A2($elm$core$List$cons, 1, drawIf);
			default:
				return _List_fromArray(
					[4]);
		}
	});
var $author$project$Study$newSession = F3(
	function (lesson, items, queue) {
		return {
			aE: _List_Nil,
			b2: A2(
				$elm$core$List$map,
				function ($) {
					return $.aZ;
				},
				items),
			b4: $elm$core$Dict$fromList(
				A2(
					$elm$core$List$map,
					function (it) {
						return _Utils_Tuple2(
							it.aZ,
							$elm$core$List$length(
								A2(
									$elm$core$List$filter,
									function (k) {
										return _Utils_eq(k.aZ, it.aZ);
									},
									queue)));
					},
					items)),
			aj: lesson,
			X: lesson ? $elm$core$Maybe$Just(0) : $elm$core$Maybe$Nothing,
			a3: queue,
			bt: $elm$core$Dict$empty
		};
	});
var $author$project$Study$newToday = F2(
	function (tz, s) {
		var go = F2(
			function (entries, n) {
				go:
				while (true) {
					if (!entries.b) {
						return n;
					} else {
						var e = entries.a;
						var rest = entries.b;
						if (_Utils_cmp(
							A2($author$project$Study$localDay, tz, e.aP),
							s.bV) < 0) {
							return n;
						} else {
							if ((e.cB === 'event:graduate') && (!e.cl)) {
								var $temp$entries = rest,
									$temp$n = n + 1;
								entries = $temp$entries;
								n = $temp$n;
								continue go;
							} else {
								var $temp$entries = rest,
									$temp$n = n;
								entries = $temp$entries;
								n = $temp$n;
								continue go;
							}
						}
					}
				}
			});
		return A2(go, s.ak, 0);
	});
var $author$project$Study$newAllowance = F2(
	function (tz, s) {
		return A2(
			$elm$core$Basics$max,
			0,
			s.N.bG - A2($author$project$Study$newToday, tz, s));
	});
var $author$project$Study$unstarted = F3(
	function (c, s, limit) {
		var go = F3(
			function (i, n, acc) {
				go:
				while (true) {
					if (n <= 0) {
						return $elm$core$List$reverse(acc);
					} else {
						var _v0 = A2($elm$core$Array$get, i, c.c1);
						if (_v0.$ === 1) {
							return $elm$core$List$reverse(acc);
						} else {
							var id = _v0.a;
							if (A2($author$project$Study$started, s, id) || A2($elm$core$Dict$member, id, s.bo)) {
								var $temp$i = i + 1,
									$temp$n = n,
									$temp$acc = acc;
								i = $temp$i;
								n = $temp$n;
								acc = $temp$acc;
								continue go;
							} else {
								var _v1 = A2($elm$core$Dict$get, id, c.b2);
								if (!_v1.$) {
									var it = _v1.a;
									var $temp$i = i + 1,
										$temp$n = n - 1,
										$temp$acc = A2($elm$core$List$cons, it, acc);
									i = $temp$i;
									n = $temp$n;
									acc = $temp$acc;
									continue go;
								} else {
									var $temp$i = i + 1,
										$temp$n = n,
										$temp$acc = acc;
									i = $temp$i;
									n = $temp$n;
									acc = $temp$acc;
									continue go;
								}
							}
						}
					}
				}
			});
		return A3(go, 0, limit, _List_Nil);
	});
var $author$project$Study$nextLessonItems = F3(
	function (c, tz, s) {
		return A3(
			$author$project$Study$unstarted,
			c,
			s,
			A2(
				$elm$core$Basics$min,
				s.N.bS,
				A2($author$project$Study$newAllowance, tz, s)));
	});
var $author$project$Study$startLesson = F4(
	function (c, tz, seed, s) {
		var items = A3($author$project$Study$nextLessonItems, c, tz, s);
		var keys = A2(
			$elm$core$List$concatMap,
			function (it) {
				return A2(
					$elm$core$List$map,
					$author$project$State$FacetKey(it.aZ),
					A2(
						$elm$core$List$filter,
						function (f) {
							return (f !== 3) || ($elm$core$List$length(
								A2($author$project$Study$choiceOptions, it, 0)) >= 3);
						},
						A3($author$project$Study$facetsFor, true, s.N, it)));
			},
			items);
		var _v0 = A2($author$project$Study$arrange, keys, seed);
		var queue = _v0.a;
		var seed2 = _v0.b;
		return $elm$core$List$isEmpty(items) ? _Utils_Tuple2(s, seed) : _Utils_Tuple2(
			_Utils_update(
				s,
				{
					x: $elm$core$Maybe$Just(
						A3($author$project$Study$newSession, true, items, queue))
				}),
			seed2);
	});
var $author$project$Study$normalDay = F3(
	function (now, newPerDay, cards) {
		var fortnight = now + (14 * $elm$core$Basics$round($author$project$Srs$dayMs));
		var ahead = $elm$core$List$length(
			A2(
				$elm$core$List$filter,
				function (_v0) {
					var card = _v0.b;
					return (_Utils_cmp(card.bA, now) > 0) && (_Utils_cmp(card.bA, fortnight) < 1);
				},
				cards));
		return A2(
			$elm$core$Basics$max,
			10,
			A2($elm$core$Basics$max, (ahead / 14) | 0, 2 * newPerDay));
	});
var $author$project$Study$reviewable = F2(
	function (c, s) {
		return A2(
			$elm$core$List$filterMap,
			function (_v0) {
				var key = _v0.a;
				var card = _v0.b;
				var _v1 = $author$project$State$parseKey(key);
				if (!_v1.$) {
					var k = _v1.a;
					return (A2($elm$core$Dict$member, k.aZ, c.b2) && ((!A2($elm$core$Dict$member, k.aZ, s.bo)) && ((k.cB !== 2) || s.N.dA))) ? $elm$core$Maybe$Just(
						_Utils_Tuple2(k, card)) : $elm$core$Maybe$Nothing;
				} else {
					return $elm$core$Maybe$Nothing;
				}
			},
			$elm$core$Dict$toList(s.aB));
	});
var $author$project$Study$avalanche = F3(
	function (c, now, s) {
		var cards = A2($author$project$Study$reviewable, c, s);
		var due = $elm$core$List$length(
			A2(
				$elm$core$List$filter,
				function (_v0) {
					var card = _v0.b;
					return _Utils_cmp(card.bA, now) < 1;
				},
				cards));
		var normal = A3($author$project$Study$normalDay, now, s.N.bG, cards);
		var perDay = ((normal * 3) / 2) | 0;
		return (_Utils_cmp(due, 3 * normal) > 0) ? $elm$core$Maybe$Just(
			{
				bA: due,
				b4: A2($elm$core$Basics$max, 0, perDay - s.cc),
				eV: perDay
			}) : $elm$core$Maybe$Nothing;
	});
var $author$project$Study$dueCards = F3(
	function (c, now, s) {
		return A2(
			$elm$core$List$filter,
			function (_v0) {
				var card = _v0.b;
				return _Utils_cmp(card.bA, now) < 1;
			},
			A2($author$project$Study$reviewable, c, s));
	});
var $author$project$Srs$overdueRatio = F2(
	function (now, card) {
		return ((now - card.bA) / $author$project$Srs$dayMs) / A2($elm$core$Maybe$withDefault, 0.2, card.fd);
	});
var $author$project$Study$dueQueue = F3(
	function (c, now, s) {
		return A2(
			$elm$core$List$map,
			$elm$core$Tuple$first,
			A2(
				$elm$core$List$sortBy,
				function (_v0) {
					var card = _v0.b;
					return -A2($author$project$Srs$overdueRatio, now, card);
				},
				A3($author$project$Study$dueCards, c, now, s)));
	});
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $author$project$Study$proportional = F2(
	function (n, keys) {
		var total = $elm$core$List$length(keys);
		var groups = $elm$core$Dict$values(
			A3(
				$elm$core$List$foldr,
				F2(
					function (k, acc) {
						return A3(
							$elm$core$Dict$update,
							$author$project$State$facetName(k.cB),
							function (g) {
								return $elm$core$Maybe$Just(
									A2(
										$elm$core$List$cons,
										k,
										A2($elm$core$Maybe$withDefault, _List_Nil, g)));
							},
							acc);
					}),
				$elm$core$Dict$empty,
				keys));
		var exact = function (g) {
			return (n * $elm$core$List$length(g)) / total;
		};
		var floors = A2(
			$elm$core$List$map,
			function (g) {
				return _Utils_Tuple2(
					g,
					$elm$core$Basics$floor(
						exact(g)));
			},
			groups);
		var spare = n - $elm$core$List$sum(
			A2($elm$core$List$map, $elm$core$Tuple$second, floors));
		var extra = A2(
			$elm$core$List$map,
			$elm$core$Tuple$first,
			A2(
				$elm$core$List$take,
				spare,
				A2(
					$elm$core$List$sortBy,
					function (_v2) {
						var r = _v2.b;
						return -r;
					},
					A2(
						$elm$core$List$indexedMap,
						F2(
							function (i, _v1) {
								var g = _v1.a;
								var f = _v1.b;
								return _Utils_Tuple2(
									i,
									exact(g) - f);
							}),
						floors))));
		return (_Utils_cmp(total, n) < 1) ? keys : $elm$core$List$concat(
			A2(
				$elm$core$List$indexedMap,
				F2(
					function (i, _v0) {
						var g = _v0.a;
						var f = _v0.b;
						return A2(
							$elm$core$List$take,
							A2($elm$core$List$member, i, extra) ? (f + 1) : f,
							g);
					}),
				floors));
	});
var $author$project$Study$startReviews = F5(
	function (all, c, now, seed, s) {
		var keys = function () {
			var _v1 = _Utils_Tuple2(
				all,
				A3($author$project$Study$avalanche, c, now, s));
			if ((!_v1.a) && (!_v1.b.$)) {
				var av = _v1.b.a;
				return A2(
					$author$project$Study$proportional,
					av.b4,
					A3($author$project$Study$dueQueue, c, now, s));
			} else {
				return A3($author$project$Study$dueQueue, c, now, s);
			}
		}();
		var items = A2(
			$elm$core$List$filterMap,
			$author$project$Corpus$get(c),
			$author$project$Study$uniqueIds(
				A2(
					$elm$core$List$map,
					function ($) {
						return $.aZ;
					},
					keys)));
		var _v0 = A2($author$project$Study$arrange, keys, seed);
		var queue = _v0.a;
		var seed2 = _v0.b;
		return $elm$core$List$isEmpty(items) ? _Utils_Tuple2(s, seed) : _Utils_Tuple2(
			_Utils_update(
				s,
				{
					x: $elm$core$Maybe$Just(
						A3($author$project$Study$newSession, false, items, queue))
				}),
			seed2);
	});
var $author$project$Main$startReviews = F2(
	function (all, m) {
		var _v0 = A5($author$project$Study$startReviews, all, m.d, m.l, m.Z, m.a);
		var s2 = _v0.a;
		var seed = _v0.b;
		return $author$project$Main$persist(
			_Utils_update(
				m,
				{at: $elm$core$Maybe$Nothing, w: '', h: $elm$core$Maybe$Nothing, s: $author$project$Main$StudyPage, a: s2, Z: seed, U: $elm$core$Maybe$Nothing}));
	});
var $elm$core$String$toFloat = _String_toFloat;
var $elm$core$Result$toMaybe = function (result) {
	if (!result.$) {
		var v = result.a;
		return $elm$core$Maybe$Just(v);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$file$File$toString = _File_toString;
var $elm$browser$Browser$Dom$setViewport = _Browser_setViewport;
var $author$project$Main$toTop = A2(
	$elm$core$Task$perform,
	function (_v0) {
		return $author$project$Main$NoOp;
	},
	A2($elm$browser$Browser$Dom$setViewport, 0, 0));
var $author$project$Main$updateSession = F2(
	function (f, s) {
		return _Utils_update(
			s,
			{
				x: f(s.x)
			});
	});
var $author$project$Main$updateStateNotes = F3(
	function (id, note, s) {
		return ($elm$core$String$trim(note) === '') ? _Utils_update(
			s,
			{
				a1: A2($elm$core$Dict$remove, id, s.a1)
			}) : _Utils_update(
			s,
			{
				a1: A3($elm$core$Dict$insert, id, note, s.a1)
			});
	});
var $author$project$Main$withPresentationAudio = function (_v0) {
	var m = _v0.a;
	var cmd = _v0.b;
	var _v1 = $author$project$Main$presentingItem(m);
	if (!_v1.$) {
		var it = _v1.a;
		var _v2 = A2($author$project$Main$autoPlay, it, m);
		var m2 = _v2.a;
		var cmd2 = _v2.b;
		return _Utils_Tuple2(
			m2,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[cmd, cmd2, $author$project$Main$toTop])));
	} else {
		return _Utils_Tuple2(
			m,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						cmd,
						$author$project$Main$focusInput(0),
						$author$project$Main$toTop
					])));
	}
};
var $author$project$Main$step = F2(
	function (msg, m) {
		step:
		while (true) {
			switch (msg.$) {
				case 0:
					return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
				case 1:
					var t = msg.a;
					var now = $elm$time$Time$posixToMillis(t);
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{
								l: now,
								a: A2(
									$author$project$Study$rollDay,
									A2($author$project$Study$localDay, m.J, now),
									m.a)
							}),
						$elm$core$Platform$Cmd$none);
				case 2:
					var page = msg.a;
					if (!page.$) {
						return _Utils_Tuple2(
							_Utils_update(
								m,
								{aC: false, aD: false, ab: _List_Nil, al: false, s: page}),
							$author$project$Main$toTop);
					} else {
						return _Utils_Tuple2(
							_Utils_update(
								m,
								{
									aT: A2($author$project$Main$ensureIndex, page, m),
									aC: false,
									aD: false,
									at: $elm$core$Maybe$Nothing,
									ab: $author$project$Main$pushHistory(m),
									al: false,
									an: $elm$core$Maybe$Nothing,
									s: page,
									ap: $elm$core$Maybe$Nothing,
									B: $elm$core$Maybe$Nothing,
									aq: ''
								}),
							$author$project$Main$toTop);
					}
				case 13:
					var txt = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{
								be: $elm$core$Maybe$Just(txt)
							}),
						A2(
							$elm$core$Task$perform,
							function (_v2) {
								return $author$project$Main$CopiedDone;
							},
							$elm$core$Process$sleep(1500)));
				case 14:
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{be: $elm$core$Maybe$Nothing}),
						$elm$core$Platform$Cmd$none);
				case 12:
					var id = msg.a;
					return _Utils_Tuple2(
						m,
						A2(
							$elm$core$Task$perform,
							function (vp) {
								return A2($author$project$Main$BrowseOpened, id, vp.fy.fB);
							},
							$elm$browser$Browser$Dom$getViewport));
				case 15:
					var id = msg.a;
					var y = msg.b;
					var $temp$msg = $author$project$Main$Nav(
						$author$project$Main$ItemPage(id)),
						$temp$m = _Utils_update(
						m,
						{bv: y});
					msg = $temp$msg;
					m = $temp$m;
					continue step;
				case 3:
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{al: !m.al}),
						$elm$core$Platform$Cmd$none);
				case 4:
					var _v3 = function () {
						var _v4 = m.ab;
						if (_v4.b) {
							var p = _v4.a;
							var ps = _v4.b;
							return _Utils_Tuple2(p, ps);
						} else {
							return _Utils_Tuple2($author$project$Main$Home, _List_Nil);
						}
					}();
					var prev = _v3.a;
					var rest = _v3.b;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{ab: rest, an: $elm$core$Maybe$Nothing, s: prev, ap: $elm$core$Maybe$Nothing, B: $elm$core$Maybe$Nothing, aq: ''}),
						_Utils_eq(prev, $author$project$Main$BrowsePage) ? $author$project$Main$restoreScroll(m.bv) : $author$project$Main$toTop);
				case 5:
					var _v5 = A4($author$project$Study$startLesson, m.d, m.J, m.Z, m.a);
					var s2 = _v5.a;
					var seed = _v5.b;
					return $author$project$Main$withPresentationAudio(
						$author$project$Main$persist(
							_Utils_update(
								m,
								{at: $elm$core$Maybe$Nothing, w: '', h: $elm$core$Maybe$Nothing, s: $author$project$Main$StudyPage, a: s2, Z: seed, U: $elm$core$Maybe$Nothing})));
				case 6:
					return A2($author$project$Main$startReviews, false, m);
				case 7:
					return A2($author$project$Main$startReviews, true, m);
				case 8:
					return $author$project$Main$persist(
						_Utils_update(
							m,
							{
								w: '',
								h: $elm$core$Maybe$Nothing,
								s: $author$project$Main$Home,
								a: A2(
									$author$project$Main$updateSession,
									$elm$core$Basics$always($elm$core$Maybe$Nothing),
									m.a)
							}));
				case 11:
					var key = msg.a;
					if ((!_Utils_eq(m.s, $author$project$Main$StudyPage)) || _Utils_eq(m.a.x, $elm$core$Maybe$Nothing)) {
						return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
					} else {
						if (!_Utils_eq(
							$author$project$Main$presentingItem(m),
							$elm$core$Maybe$Nothing)) {
							var $temp$msg = (key === 'ArrowRight') ? $author$project$Main$PresentNext : $author$project$Main$PresentPrev,
								$temp$m = m;
							msg = $temp$msg;
							m = $temp$m;
							continue step;
						} else {
							if ((key === 'ArrowRight') && ((!_Utils_eq(m.h, $elm$core$Maybe$Nothing)) || _Utils_eq(
								$author$project$Main$currentFacet(m),
								$elm$core$Maybe$Nothing))) {
								var $temp$msg = $author$project$Main$Next,
									$temp$m = m;
								msg = $temp$msg;
								m = $temp$m;
								continue step;
							} else {
								return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
							}
						}
					}
				case 9:
					var s2 = A2(
						$author$project$Main$mapSession,
						function (sess) {
							var _v6 = sess.X;
							if (!_v6.$) {
								var i = _v6.a;
								return (_Utils_cmp(
									i + 1,
									$elm$core$List$length(sess.b2)) > -1) ? _Utils_update(
									sess,
									{X: $elm$core$Maybe$Nothing}) : _Utils_update(
									sess,
									{
										X: $elm$core$Maybe$Just(i + 1)
									});
							} else {
								return sess;
							}
						},
						m.a);
					return $author$project$Main$withPresentationAudio(
						$author$project$Main$persist(
							_Utils_update(
								m,
								{a: s2, ag: false, B: $elm$core$Maybe$Nothing})));
				case 10:
					return $author$project$Main$withPresentationAudio(
						$author$project$Main$persist(
							_Utils_update(
								m,
								{
									a: A2(
										$author$project$Main$mapSession,
										function (sess) {
											return _Utils_update(
												sess,
												{
													X: A2(
														$elm$core$Maybe$map,
														function (i) {
															return A2($elm$core$Basics$max, 0, i - 1);
														},
														sess.X)
												});
										},
										m.a),
									B: $elm$core$Maybe$Nothing
								})));
				case 16:
					var str = msg.a;
					var _v7 = m.h;
					if (_v7.$ === 1) {
						return _Utils_Tuple2(
							_Utils_update(
								m,
								{w: str, a2: $elm$core$Maybe$Nothing}),
							$elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
					}
				case 17:
					var _v8 = m.h;
					if (!_v8.$) {
						var $temp$msg = $author$project$Main$Next,
							$temp$m = m;
						msg = $temp$msg;
						m = $temp$m;
						continue step;
					} else {
						var _v9 = $author$project$Main$currentFacet(m);
						if (!_v9.$) {
							var key = _v9.a;
							if ($elm$core$String$trim(m.w) === '') {
								return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
							} else {
								var _v10 = A3($author$project$Main$nudgeFor, m, key, m.w);
								if (!_v10.$) {
									var n = _v10.a;
									return _Utils_Tuple2(
										_Utils_update(
											m,
											{
												a2: $elm$core$Maybe$Just(n)
											}),
										$elm$core$Platform$Cmd$none);
								} else {
									return A3(
										$author$project$Main$grade,
										key,
										A3($author$project$Main$evaluate, m, key, m.w),
										m);
								}
							}
						} else {
							return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
						}
					}
				case 18:
					var sessionDone = function () {
						var _v12 = m.a.x;
						if (!_v12.$) {
							var sess = _v12.a;
							return $elm$core$List$isEmpty(sess.a3) && _Utils_eq(sess.X, $elm$core$Maybe$Nothing);
						} else {
							return true;
						}
					}();
					if (sessionDone) {
						var summary = function () {
							var _v11 = m.a.x;
							if (!_v11.$) {
								var sess = _v11.a;
								return {
									aE: $elm$core$List$length(sess.aE),
									aj: sess.aj
								};
							} else {
								return {aE: 0, aj: false};
							}
						}();
						return $author$project$Main$persist(
							_Utils_update(
								m,
								{
									V: m.V + 1,
									at: $elm$core$Maybe$Just(summary),
									aa: 0,
									w: '',
									h: $elm$core$Maybe$Nothing,
									s: $author$project$Main$Home,
									a: A2(
										$author$project$Main$updateSession,
										$elm$core$Basics$always($elm$core$Maybe$Nothing),
										m.a),
									U: $elm$core$Maybe$Nothing
								}));
					} else {
						return _Utils_Tuple2(
							_Utils_update(
								m,
								{V: m.V + 1, aa: 0, w: '', h: $elm$core$Maybe$Nothing, ag: false, U: $elm$core$Maybe$Nothing}),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										$author$project$Main$focusInput(0),
										$author$project$Main$toTop
									])));
					}
				case 19:
					var opt = msg.a;
					var _v13 = _Utils_Tuple2(
						m.h,
						$author$project$Main$currentFacet(m));
					if ((_v13.a.$ === 1) && (!_v13.b.$)) {
						var _v14 = _v13.a;
						var key = _v13.b.a;
						var correct = A2(
							$elm$core$Maybe$withDefault,
							false,
							A2(
								$elm$core$Maybe$map,
								function (it) {
									return _Utils_eq(
										$author$project$Corpus$glyphText(it),
										opt);
								},
								A2($author$project$Corpus$get, m.d, key.aZ)));
						return A3(
							$author$project$Main$grade,
							key,
							{q: correct, c$: ''},
							_Utils_update(
								m,
								{w: opt}));
					} else {
						return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
					}
				case 21:
					var n = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{aa: n}),
						$elm$core$Platform$Cmd$none);
				case 22:
					var str = msg.a;
					var _v15 = $elm$core$String$toFloat(str);
					if (!_v15.$) {
						var x = _v15.a;
						return A2(
							$author$project$Main$setSetting,
							function (st) {
								return _Utils_update(
									st,
									{
										ch: A3($elm$core$Basics$clamp, 0.6, 1.6, x)
									});
							},
							m);
					} else {
						return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
					}
				case 23:
					var id = msg.a;
					var h = msg.b;
					return $author$project$Main$persist(
						_Utils_update(
							m,
							{
								a: A3($author$project$Study$setDrawHint, id, h, m.a)
							}));
				case 20:
					var passed = msg.a;
					var mistakes = msg.b;
					var _v16 = _Utils_Tuple2(
						m.h,
						$author$project$Main$currentFacet(m));
					if ((_v16.a.$ === 1) && (!_v16.b.$)) {
						var _v17 = _v16.a;
						var key = _v16.b.a;
						return (key.cB === 2) ? A3(
							$author$project$Main$grade,
							key,
							{q: passed, c$: ''},
							_Utils_update(
								m,
								{aa: mistakes})) : _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
					}
				case 24:
					var _v18 = _Utils_Tuple2(m.U, m.h);
					if ((!_v18.a.$) && (!_v18.b.$)) {
						var prev = _v18.a.a;
						var o = _v18.b.a;
						var restored = _Utils_update(
							prev,
							{
								ak: A2(
									$elm$core$List$cons,
									{
										q: o.q,
										cB: $author$project$State$facetName(o.F.cB),
										aZ: o.F.aZ,
										aP: m.l,
										cl: true
									},
									prev.ak),
								dv: A3(
									$elm$core$Dict$update,
									o.F.aZ,
									function (n) {
										return $elm$core$Maybe$Just(
											A2($elm$core$Maybe$withDefault, 0, n) + 1);
									},
									prev.dv)
							});
						return A2(
							$author$project$Main$withCmd,
							$author$project$Main$focusInput(0),
							$author$project$Main$persist(
								_Utils_update(
									m,
									{V: m.V + 1, aa: 0, w: '', h: $elm$core$Maybe$Nothing, a: restored, U: $elm$core$Maybe$Nothing})));
					} else {
						return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
					}
				case 25:
					var _v19 = _Utils_Tuple2(m.U, m.h);
					if ((!_v19.a.$) && (!_v19.b.$)) {
						var prev = _v19.a.a;
						var o = _v19.b.a;
						var syn = $author$project$Answer$normalize(o.aQ);
						var prev2 = A3(
							$author$project$Main$setSynonyms,
							o.F.aZ,
							function (xs) {
								return _Utils_ap(
									xs,
									_List_fromArray(
										[syn]));
							},
							prev);
						return A3(
							$author$project$Main$grade,
							o.F,
							{q: true, c$: 'Added “' + (syn + '” as a synonym.')},
							_Utils_update(
								m,
								{h: $elm$core$Maybe$Nothing, a: prev2, U: $elm$core$Maybe$Nothing}));
					} else {
						return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
					}
				case 26:
					var id = msg.a;
					var i = msg.b;
					var v = msg.c;
					var syn = $author$project$Answer$normalize(v);
					if (syn === '') {
						var $temp$msg = A2($author$project$Main$SynRemove, id, i),
							$temp$m = m;
						msg = $temp$msg;
						m = $temp$m;
						continue step;
					} else {
						return $author$project$Main$persist(
							_Utils_update(
								m,
								{
									a: A3(
										$author$project$Main$setSynonyms,
										id,
										$elm$core$List$indexedMap(
											F2(
												function (j, x) {
													return _Utils_eq(j, i) ? syn : x;
												})),
										m.a)
								}));
					}
				case 27:
					var id = msg.a;
					var i = msg.b;
					return $author$project$Main$persist(
						_Utils_update(
							m,
							{
								a: A3(
									$author$project$Main$setSynonyms,
									id,
									A2(
										$elm$core$Basics$composeR,
										$elm$core$List$indexedMap($elm$core$Tuple$pair),
										A2(
											$elm$core$Basics$composeR,
											$elm$core$List$filter(
												function (_v20) {
													var j = _v20.a;
													return !_Utils_eq(j, i);
												}),
											$elm$core$List$map($elm$core$Tuple$second))),
									m.a)
							}));
				case 28:
					var str = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{aq: str}),
						$elm$core$Platform$Cmd$none);
				case 29:
					var id = msg.a;
					var syn = $author$project$Answer$normalize(m.aq);
					return (syn === '') ? _Utils_Tuple2(m, $elm$core$Platform$Cmd$none) : $author$project$Main$persist(
						_Utils_update(
							m,
							{
								a: A3(
									$author$project$Main$setSynonyms,
									id,
									function (xs) {
										return _Utils_ap(
											xs,
											_List_fromArray(
												[syn]));
									},
									m.a),
								aq: ''
							}));
				case 30:
					var it = msg.a;
					return A2($author$project$Main$playFor, it, m);
				case 31:
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{ag: !m.ag}),
						$elm$core$Platform$Cmd$none);
				case 32:
					var q = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{aU: q, aV: m.aV + 1}),
						A2(
							$elm$core$Task$perform,
							function (_v21) {
								return $author$project$Main$BrowseApply(m.aV + 1);
							},
							$elm$core$Process$sleep(250)));
				case 34:
					var n = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{
								s: $author$project$Main$IntroPage(n)
							}),
						$author$project$Main$toTop);
				case 33:
					return A2(
						$author$project$Main$withCmd,
						$author$project$Main$toTop,
						$author$project$Main$persist(
							_Utils_update(
								m,
								{
									al: false,
									s: $author$project$Main$Home,
									a: function (s) {
										return _Utils_update(
											s,
											{b$: true});
									}(m.a)
								})));
				case 35:
					var n = msg.a;
					return (_Utils_eq(n, m.aV) && (!_Utils_eq(m.aU, m.I.bm))) ? _Utils_Tuple2(
						_Utils_update(
							m,
							{
								I: A2($author$project$Main$setQuery, m.aU, m.I)
							}),
						$elm$core$Platform$Cmd$none) : _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
				case 36:
					var k = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{
								I: function (b) {
									return _Utils_update(
										b,
										{b3: k, ac: 300});
								}(m.I)
							}),
						$elm$core$Platform$Cmd$none);
				case 37:
					var k = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{
								I: function (b) {
									return _Utils_update(
										b,
										{ej: k, ac: 300});
								}(m.I)
							}),
						$elm$core$Platform$Cmd$none);
				case 38:
					var k = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{
								I: function (b) {
									return _Utils_update(
										b,
										{ac: 300, a5: k});
								}(m.I)
							}),
						$elm$core$Platform$Cmd$none);
				case 39:
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{
								I: function (b) {
									return _Utils_update(
										b,
										{ac: b.ac + 300});
								}(m.I)
							}),
						$elm$core$Platform$Cmd$none);
				case 40:
					var i = msg.a;
					var compId = msg.b;
					if (_Utils_eq(
						m.ap,
						$elm$core$Maybe$Just(i))) {
						var $temp$msg = $author$project$Main$Nav(
							$author$project$Main$ItemPage(compId)),
							$temp$m = _Utils_update(
							m,
							{ap: $elm$core$Maybe$Nothing});
						msg = $temp$msg;
						m = $temp$m;
						continue step;
					} else {
						return _Utils_Tuple2(
							_Utils_update(
								m,
								{
									ap: $elm$core$Maybe$Just(i)
								}),
							$elm$core$Platform$Cmd$none);
					}
				case 41:
					var str = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{
								an: $elm$core$Maybe$Just(str)
							}),
						$elm$core$Platform$Cmd$none);
				case 42:
					var id = msg.a;
					var note = A2($elm$core$Maybe$withDefault, '', m.an);
					return $author$project$Main$persist(
						_Utils_update(
							m,
							{
								an: $elm$core$Maybe$Nothing,
								a: A3($author$project$Main$updateStateNotes, id, note, m.a)
							}));
				case 43:
					var str = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{
								B: $elm$core$Maybe$Just(
									A2($elm$core$String$left, $author$project$Main$maxStoryLength, str))
							}),
						$elm$core$Platform$Cmd$none);
				case 44:
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{B: $elm$core$Maybe$Nothing}),
						$elm$core$Platform$Cmd$none);
				case 45:
					var id = msg.a;
					var _v22 = m.B;
					if (!_v22.$) {
						var str = _v22.a;
						return $author$project$Main$persist(
							_Utils_update(
								m,
								{
									a: function (s) {
										return _Utils_update(
											s,
											{
												a6: A3(
													$elm$core$Dict$insert,
													id,
													A2($elm$core$String$left, $author$project$Main$maxStoryLength, str),
													s.a6)
											});
									}(m.a),
									B: $elm$core$Maybe$Nothing
								}));
					} else {
						return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
					}
				case 46:
					var id = msg.a;
					return $author$project$Main$persist(
						_Utils_update(
							m,
							{
								a: function (s) {
									return _Utils_update(
										s,
										{
											a6: A2($elm$core$Dict$remove, id, s.a6)
										});
								}(m.a),
								B: $elm$core$Maybe$Nothing
							}));
				case 47:
					var id = msg.a;
					return $author$project$Main$persist(
						_Utils_update(
							m,
							{
								a: A6($author$project$Study$markKnown, m.d, m.l, 30, 3 * 86400000, id, m.a)
							}));
				case 49:
					var b = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{aC: b}),
						$elm$core$Platform$Cmd$none);
				case 48:
					var id = msg.a;
					return $author$project$Main$persist(
						_Utils_update(
							m,
							{
								aC: false,
								a: function (s) {
									return A2(
										$author$project$Study$resetItem,
										id,
										_Utils_update(
											s,
											{
												ak: A2(
													$elm$core$List$cons,
													{q: true, cB: 'event:reset', aZ: id, aP: m.l, cl: false},
													s.ak)
											}));
								}(m.a)
							}));
				case 50:
					var id = msg.a;
					return $author$project$Main$persist(
						_Utils_update(
							m,
							{
								a: function (s) {
									return A2($elm$core$Dict$member, id, s.bo) ? _Utils_update(
										s,
										{
											ak: A2(
												$elm$core$List$cons,
												A3($author$project$Main$event, m.l, id, 'unsuspend'),
												s.ak),
											bo: A2($elm$core$Dict$remove, id, s.bo)
										}) : _Utils_update(
										s,
										{
											ak: A2(
												$elm$core$List$cons,
												A3($author$project$Main$event, m.l, id, 'suspend'),
												s.ak),
											bo: A3($elm$core$Dict$insert, id, true, s.bo)
										});
								}(m.a)
							}));
				case 51:
					var str = msg.a;
					var _v23 = $elm$core$String$toFloat(str);
					if (!_v23.$) {
						var r = _v23.a;
						return $author$project$Main$persist(
							_Utils_update(
								m,
								{
									a: function (s) {
										return _Utils_update(
											s,
											{
												aB: A2(
													$elm$core$Dict$map,
													F2(
														function (_v24, card) {
															return A2($author$project$Srs$reschedule, r, card);
														}),
													s.aB),
												N: function (st) {
													return _Utils_update(
														st,
														{cb: r});
												}(s.N)
											});
									}(m.a)
								}));
					} else {
						return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
					}
				case 52:
					var str = msg.a;
					return A2(
						$author$project$Main$setSetting,
						function (st) {
							return _Utils_update(
								st,
								{
									bS: A3(
										$elm$core$Basics$clamp,
										1,
										30,
										A2(
											$elm$core$Maybe$withDefault,
											st.bS,
											$elm$core$String$toInt(str)))
								});
						},
						m);
				case 53:
					var str = msg.a;
					return A2(
						$author$project$Main$setSetting,
						function (st) {
							return _Utils_update(
								st,
								{
									bG: A3(
										$elm$core$Basics$clamp,
										1,
										500,
										A2(
											$elm$core$Maybe$withDefault,
											st.bG,
											$elm$core$String$toInt(str)))
								});
						},
						m);
				case 54:
					var b = msg.a;
					return A2(
						$author$project$Main$setWriting,
						function (st) {
							return _Utils_update(
								st,
								{dA: b});
						},
						m);
				case 55:
					var v = msg.a;
					return A2(
						$author$project$Main$setSetting,
						function (st) {
							return _Utils_update(
								st,
								{bR: v});
						},
						m);
				case 56:
					var t = msg.a;
					return A2(
						$author$project$Main$withCmd,
						$author$project$Main$setTheme(t),
						A2(
							$author$project$Main$setSetting,
							function (st) {
								return _Utils_update(
									st,
									{dr: t});
							},
							m));
				case 57:
					var str = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{aA: str}),
						$elm$core$Platform$Cmd$none);
				case 58:
					var b = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{aW: b}),
						$elm$core$Platform$Cmd$none);
				case 59:
					var _v25 = $author$project$Main$bulkMarkKnown(m);
					var s2 = _v25.a;
					var n = _v25.b;
					return $author$project$Main$persist(
						_Utils_update(
							m,
							{
								bc: 'Marked ' + ($elm$core$String$fromInt(n) + ' items known.'),
								aA: '',
								a: s2
							}));
				case 60:
					var stamp = A2($author$project$Main$dateString, m.J, m.l);
					var s2 = _Utils_update(
						m,
						{
							al: false,
							a: function (s) {
								return _Utils_update(
									s,
									{aI: m.l});
							}(m.a)
						});
					return A2(
						$author$project$Main$withCmd,
						$author$project$Main$exportFile(
							$elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'name',
										$elm$json$Json$Encode$string('louti-backup-' + (stamp + '.json'))),
										_Utils_Tuple2(
										'text',
										$elm$json$Json$Encode$string(
											A2(
												$elm$json$Json$Encode$encode,
												0,
												$author$project$State$encode(s2.a))))
									]))),
						$author$project$Main$persist(s2));
				case 63:
					return _Utils_Tuple2(
						m,
						A2(
							$elm$file$File$Select$file,
							_List_fromArray(
								['application/json', '.json']),
							$author$project$Main$ImportFile));
				case 64:
					var f = msg.a;
					return _Utils_Tuple2(
						m,
						A2(
							$elm$core$Task$perform,
							$author$project$Main$ImportLoaded,
							$elm$file$File$toString(f)));
				case 65:
					var str = msg.a;
					var _v26 = A2($elm$json$Json$Decode$decodeString, $author$project$State$decode, str);
					if (!_v26.$) {
						var s = _v26.a;
						return _Utils_Tuple2(
							_Utils_update(
								m,
								{
									a_: '',
									aM: $elm$core$Maybe$Just(
										_Utils_Tuple2(s, str))
								}),
							$elm$core$Platform$Cmd$none);
					} else {
						var e = _v26.a;
						return _Utils_Tuple2(
							_Utils_update(
								m,
								{
									a_: 'Not a Louti backup: ' + A2(
										$elm$core$String$left,
										200,
										$elm$json$Json$Decode$errorToString(e))
								}),
							$elm$core$Platform$Cmd$none);
					}
				case 66:
					var _v27 = m.aM;
					if (!_v27.$) {
						var _v28 = _v27.a;
						var s = _v28.a;
						var old = A2(
							$elm$json$Json$Encode$encode,
							0,
							$author$project$State$encode(m.a));
						return A2(
							$author$project$Main$withCmd,
							$author$project$Main$saveBackup(old),
							$author$project$Main$persist(
								_Utils_update(
									m,
									{
										_: $elm$core$Maybe$Just(old),
										aM: $elm$core$Maybe$Nothing,
										a: A2(
											$author$project$Study$rollDay,
											A2($author$project$Study$localDay, m.J, m.l),
											A2(
												$author$project$Study$backfillWriting,
												m.d,
												A2($author$project$Study$applyFixes, m.d.bX, s).a))
									})));
					} else {
						return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
					}
				case 67:
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{aM: $elm$core$Maybe$Nothing}),
						$elm$core$Platform$Cmd$none);
				case 61:
					var ask = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{aD: ask}),
						$elm$core$Platform$Cmd$none);
				case 62:
					var old = A2(
						$elm$json$Json$Encode$encode,
						0,
						$author$project$State$encode(m.a));
					var base = $author$project$State$initial;
					var fresh = _Utils_update(
						base,
						{bD: m.a.bD, aI: m.a.aI, T: m.a.T, N: m.a.N});
					return A2(
						$author$project$Main$withCmd,
						$author$project$Main$saveBackup(old),
						$author$project$Main$persist(
							_Utils_update(
								m,
								{
									_: $elm$core$Maybe$Just(old),
									aD: false,
									at: $elm$core$Maybe$Nothing,
									ab: _List_Nil,
									h: $elm$core$Maybe$Nothing,
									s: $author$project$Main$IntroPage(0),
									a: A2(
										$author$project$Study$rollDay,
										A2($author$project$Study$localDay, m.J, m.l),
										fresh)
								})));
				case 68:
					var _v29 = A2(
						$elm$core$Maybe$andThen,
						function (b) {
							return $elm$core$Result$toMaybe(
								A2($elm$json$Json$Decode$decodeString, $author$project$State$decode, b));
						},
						m._);
					if (!_v29.$) {
						var s = _v29.a;
						var old = A2(
							$elm$json$Json$Encode$encode,
							0,
							$author$project$State$encode(m.a));
						return A2(
							$author$project$Main$withCmd,
							$author$project$Main$saveBackup(old),
							$author$project$Main$persist(
								_Utils_update(
									m,
									{
										_: $elm$core$Maybe$Just(old),
										a: A2($author$project$Study$applyFixes, m.d.bX, s).a
									})));
					} else {
						return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
					}
				case 69:
					return $author$project$Main$persist(
						_Utils_update(
							m,
							{
								a: function (s) {
									return _Utils_update(
										s,
										{bD: true});
								}(m.a)
							}));
				case 70:
					var id = msg.a;
					var keyword = A2(
						$elm$core$Maybe$withDefault,
						'',
						A2(
							$elm$core$Maybe$map,
							function ($) {
								return $.cR;
							},
							A2($author$project$Corpus$get, m.d, id)));
					var current = A2(
						$elm$core$Maybe$andThen,
						function (k) {
							return _Utils_eq(k.aZ, id) ? $elm$core$Maybe$Just(k) : $elm$core$Maybe$Nothing;
						},
						A2(
							$elm$core$Maybe$andThen,
							A2(
								$elm$core$Basics$composeR,
								function ($) {
									return $.a3;
								},
								$elm$core$List$head),
							m.a.x));
					var _v30 = function () {
						var _v31 = _Utils_Tuple2(m.s, m.a.x);
						if ((_v31.a.$ === 1) && (!_v31.b.$)) {
							var _v32 = _v31.a;
							var sess = _v31.b.a;
							return (!_Utils_eq(sess.X, $elm$core$Maybe$Nothing)) ? _Utils_Tuple3('lesson', '', '') : _Utils_Tuple3(
								sess.aj ? 'lesson' : 'review',
								A2(
									$elm$core$Maybe$withDefault,
									'',
									A2(
										$elm$core$Maybe$map,
										A2(
											$elm$core$Basics$composeR,
											function ($) {
												return $.cB;
											},
											$author$project$State$facetName),
										current)),
								A2(
									$elm$core$Maybe$withDefault,
									m.w,
									A2(
										$elm$core$Maybe$map,
										function ($) {
											return $.aQ;
										},
										m.h)));
						} else {
							return _Utils_Tuple3('item', '', '');
						}
					}();
					var place = _v30.a;
					var facet = _v30.b;
					var typed = _v30.c;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{
								ao: $elm$core$Maybe$Just(
									{cB: facet, aZ: id, cR: keyword, b9: place, aP: m.l, ck: '', aQ: typed})
							}),
						A2(
							$elm$core$Task$attempt,
							function (_v33) {
								return $author$project$Main$NoOp;
							},
							$elm$browser$Browser$Dom$focus('report-text')));
				case 71:
					var str = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{
								ao: A2(
									$elm$core$Maybe$map,
									function (r) {
										return _Utils_update(
											r,
											{
												ck: A2($elm$core$String$left, $author$project$Main$maxReportLength, str)
											});
									},
									m.ao)
							}),
						$elm$core$Platform$Cmd$none);
				case 72:
					var _v34 = m.ao;
					if (!_v34.$) {
						var r = _v34.a;
						return ($elm$core$String$trim(r.ck) === '') ? _Utils_Tuple2(m, $elm$core$Platform$Cmd$none) : $author$project$Main$persist(
							_Utils_update(
								m,
								{
									ao: $elm$core$Maybe$Nothing,
									a: function (s) {
										return _Utils_update(
											s,
											{
												T: A2(
													$elm$core$List$cons,
													_Utils_update(
														r,
														{
															aP: m.l,
															ck: $elm$core$String$trim(r.ck)
														}),
													s.T)
											});
									}(m.a)
								}));
					} else {
						return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
					}
				case 73:
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{ao: $elm$core$Maybe$Nothing}),
						$elm$core$Platform$Cmd$none);
				case 74:
					var i = msg.a;
					return $author$project$Main$persist(
						_Utils_update(
							m,
							{
								a: function (s) {
									return _Utils_update(
										s,
										{
											T: _Utils_ap(
												A2($elm$core$List$take, i, s.T),
												A2($elm$core$List$drop, i + 1, s.T))
										});
								}(m.a)
							}));
				case 75:
					return _Utils_Tuple2(
						m,
						$author$project$Main$exportFile(
							$elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'name',
										$elm$json$Json$Encode$string(
											'louti-reports-' + (A2($author$project$Main$dateString, m.J, m.l) + '.json'))),
										_Utils_Tuple2(
										'text',
										$elm$json$Json$Encode$string(
											A2(
												$elm$json$Json$Encode$encode,
												2,
												$elm$json$Json$Encode$object(
													_List_fromArray(
														[
															_Utils_Tuple2(
															'exported',
															$elm$json$Json$Encode$int(m.l)),
															_Utils_Tuple2(
															'reports',
															A2(
																$elm$json$Json$Encode$list,
																$author$project$State$encodeReport,
																$elm$core$List$reverse(m.a.T)))
														])))))
									]))));
				case 76:
					var b = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							m,
							{bd: b}),
						$elm$core$Platform$Cmd$none);
				default:
					return $author$project$Main$persist(
						_Utils_update(
							m,
							{
								bd: false,
								a: function (s) {
									return _Utils_update(
										s,
										{T: _List_Nil});
								}(m.a)
							}));
			}
		}
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		if (!model.$) {
			return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		} else {
			var m = model.a;
			var _v1 = A2($author$project$Main$step, msg, m);
			var m2 = _v1.a;
			var cmd = _v1.b;
			var leaves = !_Utils_eq(
				$author$project$Main$cardShown(m),
				$author$project$Main$cardShown(m2));
			return _Utils_Tuple2(
				$author$project$Main$Ready(
					leaves ? _Utils_update(
						m2,
						{a2: $elm$core$Maybe$Nothing}) : m2),
				leaves ? $elm$core$Platform$Cmd$batch(
					_List_fromArray(
						[
							cmd,
							$author$project$Main$playAudio('')
						])) : cmd);
		}
	});
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$html$Html$h1 = _VirtualDom_node('h1');
var $author$project$Main$AboutPage = {$: 7};
var $author$project$Main$DataPage = {$: 6};
var $author$project$Main$ProgressPage = {$: 4};
var $author$project$Main$SettingsPage = {$: 5};
var $author$project$Main$ToggleMenu = {$: 3};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $elm$html$Html$button = _VirtualDom_node('button');
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $author$project$Main$nav = function (m) {
	return (_Utils_eq(m.s, $author$project$Main$StudyPage) && (!_Utils_eq(m.a.x, $elm$core$Maybe$Nothing))) ? $elm$html$Html$text('') : A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('nav')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('brand'),
						$elm$html$Html$Events$onClick(
						$author$project$Main$Nav($author$project$Main$Home))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('楼梯')
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('menu-wrap')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('hamburger'),
								$elm$html$Html$Events$onClick($author$project$Main$ToggleMenu),
								A2($elm$html$Html$Attributes$attribute, 'aria-label', 'Menu')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('☰')
							])),
						m.al ? A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('menu-backdrop'),
										$elm$html$Html$Events$onClick($author$project$Main$ToggleMenu)
									]),
								_List_Nil),
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('menu')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Events$onClick(
												$author$project$Main$Nav($author$project$Main$Home))
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Home')
											])),
										A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Events$onClick(
												$author$project$Main$Nav(
													$author$project$Main$IntroPage(0)))
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('How it works')
											])),
										A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Events$onClick(
												$author$project$Main$Nav($author$project$Main$ProgressPage))
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Progress')
											])),
										A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Events$onClick(
												$author$project$Main$Nav($author$project$Main$BrowsePage))
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Browse')
											])),
										A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Events$onClick(
												$author$project$Main$Nav($author$project$Main$SettingsPage))
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Settings')
											])),
										A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Events$onClick(
												$author$project$Main$Nav($author$project$Main$DataPage))
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Data')
											])),
										A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Events$onClick(
												$author$project$Main$Nav($author$project$Main$AboutPage))
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('About')
											]))
									]))
							])) : $elm$html$Html$text('')
					]))
			]));
};
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $elm$html$Html$Attributes$rel = _VirtualDom_attribute('rel');
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $author$project$Main$linkify = function (s) {
	return $elm$core$List$concat(
		A2(
			$elm$core$List$intersperse,
			_List_fromArray(
				[
					$elm$html$Html$text(' ')
				]),
			A2(
				$elm$core$List$map,
				function (w) {
					if (A2($elm$core$String$startsWith, 'http://', w) || A2($elm$core$String$startsWith, 'https://', w)) {
						var trail = (A2($elm$core$String$endsWith, ';', w) || (A2($elm$core$String$endsWith, ',', w) || A2($elm$core$String$endsWith, '.', w))) ? A2($elm$core$String$right, 1, w) : '';
						var url = A2(
							$elm$core$String$dropRight,
							$elm$core$String$length(trail),
							w);
						return _List_fromArray(
							[
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href(url),
										$elm$html$Html$Attributes$target('_blank'),
										$elm$html$Html$Attributes$rel('noopener')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										A3(
											$elm$core$String$replace,
											'http://',
											'',
											A3($elm$core$String$replace, 'https://', '', url)))
									])),
								$elm$html$Html$text(trail)
							]);
					} else {
						return _List_fromArray(
							[
								$elm$html$Html$text(w)
							]);
					}
				},
				A2($elm$core$String$split, ' ', s))));
};
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $author$project$Main$viewAbout = function (m) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('settings')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('settings-card about')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h2,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('About')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('楼梯 Louti: a staircase for reading Chinese, one step at a time.')
							])),
						A2(
						$elm$html$Html$ul,
						_List_Nil,
						A2(
							$elm$core$List$map,
							function (a) {
								return A2(
									$elm$html$Html$li,
									_List_Nil,
									$author$project$Main$linkify(a.ev));
							},
							m.d.cq))
					]))
			]));
};
var $author$project$Main$BrowseHsk = function (a) {
	return {$: 37, a: a};
};
var $author$project$Main$BrowseKind = function (a) {
	return {$: 36, a: a};
};
var $author$project$Main$BrowseQuery = function (a) {
	return {$: 32, a: a};
};
var $author$project$Main$BrowseStatus = function (a) {
	return {$: 38, a: a};
};
var $author$project$Main$hskName = function (l) {
	return (l === 7) ? 'HSK 7–9' : ('HSK ' + $elm$core$String$fromInt(l));
};
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$virtual_dom$VirtualDom$lazy4 = _VirtualDom_lazy4;
var $elm$html$Html$Lazy$lazy4 = $elm$virtual_dom$VirtualDom$lazy4;
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 1, a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $elm$html$Html$option = _VirtualDom_node('option');
var $elm$html$Html$select = _VirtualDom_node('select');
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$selected = $elm$html$Html$Attributes$boolProperty('selected');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $author$project$Main$select = F3(
	function (toMsg, current, opts) {
		return A2(
			$elm$html$Html$select,
			_List_fromArray(
				[
					$elm$html$Html$Events$onInput(toMsg)
				]),
			A2(
				$elm$core$List$map,
				function (_v0) {
					var v = _v0.a;
					var l = _v0.b;
					return A2(
						$elm$html$Html$option,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$value(v),
								$elm$html$Html$Attributes$selected(
								_Utils_eq(v, current))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(l)
							]));
				},
				opts));
	});
var $author$project$Main$BrowseMore = {$: 39};
var $author$project$Main$BrowseOpen = function (a) {
	return {$: 12, a: a};
};
var $author$project$Main$kindName = function (k) {
	switch (k) {
		case 0:
			return 'sound';
		case 1:
			return 'component';
		case 2:
			return 'guise';
		case 3:
			return 'char';
		default:
			return 'word';
	}
};
var $author$project$Main$previewMarks = function (s) {
	var go = F3(
		function (chars, buf, acc) {
			go:
			while (true) {
				if (!chars.b) {
					return _Utils_ap(acc, buf);
				} else {
					var ch = chars.a;
					var rest = chars.b;
					if ($elm$core$Char$isDigit(ch)) {
						var $temp$chars = rest,
							$temp$buf = '',
							$temp$acc = _Utils_ap(
							acc,
							$author$project$Pinyin$toMarks(
								_Utils_ap(
									$elm$core$String$toLower(buf),
									$elm$core$String$fromChar(ch))));
						chars = $temp$chars;
						buf = $temp$buf;
						acc = $temp$acc;
						continue go;
					} else {
						if (ch === ' ') {
							var $temp$chars = rest,
								$temp$buf = '',
								$temp$acc = acc + (buf + ' ');
							chars = $temp$chars;
							buf = $temp$buf;
							acc = $temp$acc;
							continue go;
						} else {
							var $temp$chars = rest,
								$temp$buf = _Utils_ap(
								buf,
								$elm$core$String$fromChar(ch)),
								$temp$acc = acc;
							chars = $temp$chars;
							buf = $temp$buf;
							acc = $temp$acc;
							continue go;
						}
					}
				}
			}
		});
	return A3(
		go,
		$elm$core$String$toList(
			A3($elm$core$String$replace, 'u:', 'v', s)),
		'',
		'');
};
var $author$project$Main$matcher = function (q) {
	var ql = $elm$core$String$toLower(
		$elm$core$String$trim(q));
	var toned = A3(
		$elm$core$String$replace,
		' ',
		'',
		$author$project$Main$previewMarks(ql));
	var key = $author$project$Pinyin$searchKey(ql);
	var hasTone = A2($elm$core$String$any, $elm$core$Char$isDigit, ql) || A2(
		$elm$core$String$any,
		function (ch) {
			return A2(
				$elm$core$String$contains,
				$elm$core$String$fromChar(ch),
				'āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ');
		},
		ql);
	var han = A2(
		$elm$core$String$any,
		function (ch) {
			return $elm$core$Char$toCode(ch) >= 11904;
		},
		ql);
	return (ql === '') ? function (_v0) {
		return true;
	} : (han ? function (e) {
		return A2($elm$core$String$contains, ql, e.ef);
	} : (hasTone ? function (e) {
		return A2($elm$core$String$contains, ql, e.cR) || ((e.bi !== '') && A2($elm$core$String$startsWith, toned, e.bi));
	} : function (e) {
		return A2($elm$core$String$contains, ql, e.cR) || ((e.bi !== '') && A2($elm$core$String$startsWith, key, e.F));
	}));
};
var $author$project$Pinyin$soundDisplay = function (v) {
	return A3($elm$core$String$replace, 'v', 'ü', v);
};
var $elm$html$Html$span = _VirtualDom_node('span');
var $author$project$Study$Learned = 2;
var $author$project$Study$Learning = 1;
var $author$project$Study$Suspended = 3;
var $author$project$Study$Unstarted = 0;
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $author$project$Study$status = F2(
	function (s, id) {
		if (A2($elm$core$Dict$member, id, s.bo)) {
			return 3;
		} else {
			var _v0 = A2(
				$elm$core$List$filterMap,
				function (f) {
					return A2(
						$elm$core$Dict$get,
						A2($author$project$State$cardKey, id, f),
						s.aB);
				},
				_List_fromArray(
					[0, 1, 4]));
			if (!_v0.b) {
				return 0;
			} else {
				var cards = _v0;
				return A2(
					$elm$core$List$all,
					function (c) {
						return A2($elm$core$Maybe$withDefault, 0, c.fd) >= 21;
					},
					cards) ? 2 : 1;
			}
		}
	});
var $author$project$Main$statusClass = function (st) {
	switch (st) {
		case 0:
			return 'unstarted';
		case 1:
			return 'learning';
		case 2:
			return 'learned';
		default:
			return 'suspended';
	}
};
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $author$project$Glyph$view = F3(
	function (cls, strokeClass, g) {
		return A2(
			$elm$svg$Svg$svg,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$viewBox('0 0 1024 1024'),
					$elm$svg$Svg$Attributes$class('glyph ' + cls)
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$transform('scale(1,-1) translate(0,-900)')
						]),
					A2(
						$elm$core$List$indexedMap,
						F2(
							function (i, d) {
								return A2(
									$elm$svg$Svg$path,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$d(d),
											$elm$svg$Svg$Attributes$class(
											strokeClass(i))
										]),
									_List_Nil);
							}),
						g.d_))
				]));
	});
var $author$project$Glyph$viewText = F3(
	function (c, cls, s) {
		return A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('glyphs ' + cls),
					A2(
					$elm$html$Html$Attributes$attribute,
					'style',
					'--n:' + $elm$core$String$fromInt(
						A2(
							$elm$core$Basics$max,
							1,
							$elm$core$String$length(s))))
				]),
			A2(
				$elm$core$List$map,
				function (ch) {
					var _v0 = A2(
						$elm$core$Dict$get,
						$elm$core$String$fromChar(ch),
						c.cH);
					if (!_v0.$) {
						var g = _v0.a;
						return A3(
							$author$project$Glyph$view,
							'',
							$elm$core$Basics$always(''),
							g);
					} else {
						return A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('glyph glyph-text')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$elm$core$String$fromChar(ch))
								]));
					}
				},
				$elm$core$String$toList(s)));
	});
var $author$project$Glyph$viewItem = F3(
	function (c, cls, it) {
		var _v0 = it.b3;
		switch (_v0) {
			case 4:
				return A3($author$project$Glyph$viewText, c, cls, it.cm);
			case 0:
				return A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('glyphs sound-glyph ' + cls)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(it.cR)
						]));
			default:
				var _v1 = A2(
					$elm$core$Maybe$andThen,
					function (k) {
						return A2($elm$core$Dict$get, k, c.cH);
					},
					it.ef);
				if (!_v1.$) {
					var g = _v1.a;
					return A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('glyphs ' + cls)
							]),
						_List_fromArray(
							[
								A3(
								$author$project$Glyph$view,
								'',
								$elm$core$Basics$always(''),
								g)
							]));
				} else {
					return A3(
						$author$project$Glyph$viewText,
						c,
						cls,
						$author$project$Corpus$glyphText(it));
				}
		}
	});
var $author$project$Main$viewBrowseResults = F4(
	function (c, s, index, b) {
		var matches = $author$project$Main$matcher(b.bm);
		var results = A2(
			$elm$core$List$map,
			function ($) {
				return $.a$;
			},
			A2(
				$elm$core$List$filter,
				function (e) {
					return ((b.b3 === 'all') || _Utils_eq(
						$author$project$Main$kindName(e.a$.b3),
						b.b3)) && (((b.ej === 'all') || _Utils_eq(
						A2($elm$core$Maybe$map, $elm$core$String$fromInt, e.a$.ej),
						$elm$core$Maybe$Just(b.ej))) && (matches(e) && ((b.a5 === 'all') || _Utils_eq(
						$author$project$Main$statusClass(
							A2($author$project$Study$status, s, e.a$.aZ)),
						b.a5))));
				},
				index));
		var shown = A2($elm$core$List$take, b.ac, results);
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('shown-count')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$elm$core$String$fromInt(
								$elm$core$List$length(results)) + ' items')
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('char-grid')
						]),
					A2(
						$elm$core$List$map,
						function (it) {
							return A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class(
										'chip ' + ($author$project$Main$statusClass(
											A2($author$project$Study$status, s, it.aZ)) + (' k-' + $author$project$Main$kindName(it.b3)))),
										$elm$html$Html$Events$onClick(
										$author$project$Main$BrowseOpen(it.aZ)),
										$elm$html$Html$Attributes$title(
										it.cR + (' · ' + $author$project$Main$kindName(it.b3)))
									]),
								_List_fromArray(
									[
										(it.b3 === 2) ? A3($author$project$Glyph$viewItem, c, 'chip-svg', it) : ((!it.b3) ? $elm$html$Html$text(
										$author$project$Pinyin$soundDisplay(it.fw)) : $elm$html$Html$text(
										$author$project$Corpus$glyphText(it)))
									]));
						},
						shown)),
					(_Utils_cmp(
					$elm$core$List$length(results),
					b.ac) > 0) ? A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('more'),
							$elm$html$Html$Events$onClick($author$project$Main$BrowseMore)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Show more')
						])) : $elm$html$Html$text('')
				]));
	});
var $author$project$Main$viewBrowse = function (m) {
	var b = m.I;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('browse')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('browse-filters')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$input,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$placeholder('字, pinyin or keyword'),
								$elm$html$Html$Attributes$value(m.aU),
								$elm$html$Html$Events$onInput($author$project$Main$BrowseQuery),
								A2($elm$html$Html$Attributes$attribute, 'autocorrect', 'off'),
								A2($elm$html$Html$Attributes$attribute, 'autocapitalize', 'off'),
								A2($elm$html$Html$Attributes$attribute, 'spellcheck', 'false')
							]),
						_List_Nil),
						A3(
						$author$project$Main$select,
						$author$project$Main$BrowseKind,
						b.b3,
						_List_fromArray(
							[
								_Utils_Tuple2('all', 'All kinds'),
								_Utils_Tuple2('char', 'Characters'),
								_Utils_Tuple2('word', 'Words'),
								_Utils_Tuple2('component', 'Components'),
								_Utils_Tuple2('guise', 'Guises'),
								_Utils_Tuple2('sound', 'Sounds')
							])),
						A3(
						$author$project$Main$select,
						$author$project$Main$BrowseHsk,
						b.ej,
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2('all', 'All levels'),
							A2(
								$elm$core$List$map,
								function (l) {
									return _Utils_Tuple2(
										$elm$core$String$fromInt(l),
										$author$project$Main$hskName(l));
								},
								A2($elm$core$List$range, 1, 7)))),
						A3(
						$author$project$Main$select,
						$author$project$Main$BrowseStatus,
						b.a5,
						_List_fromArray(
							[
								_Utils_Tuple2('all', 'Any status'),
								_Utils_Tuple2('unstarted', 'Not started'),
								_Utils_Tuple2('learning', 'Learning'),
								_Utils_Tuple2('learned', 'Learned'),
								_Utils_Tuple2('suspended', 'Suspended')
							]))
					])),
				A5($elm$html$Html$Lazy$lazy4, $author$project$Main$viewBrowseResults, m.d, m.a, m.aT, b)
			]));
};
var $author$project$Main$BulkApply = {$: 59};
var $author$project$Main$BulkComponents = function (a) {
	return {$: 58, a: a};
};
var $author$project$Main$BulkText = function (a) {
	return {$: 57, a: a};
};
var $author$project$Main$Export = {$: 60};
var $author$project$Main$ImportCancel = {$: 67};
var $author$project$Main$ImportConfirm = {$: 66};
var $author$project$Main$ImportPick = {$: 63};
var $author$project$Main$ReportsClearAsk = function (a) {
	return {$: 76, a: a};
};
var $author$project$Main$ReportsClearConfirm = {$: 77};
var $author$project$Main$ReportsExport = {$: 75};
var $author$project$Main$ResetAllAsk = function (a) {
	return {$: 61, a: a};
};
var $author$project$Main$ResetAllConfirm = {$: 62};
var $author$project$Main$RestoreBackup = {$: 68};
var $elm$html$Html$Attributes$checked = $elm$html$Html$Attributes$boolProperty('checked');
var $elm$html$Html$label = _VirtualDom_node('label');
var $elm$html$Html$Events$targetChecked = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'checked']),
	$elm$json$Json$Decode$bool);
var $elm$html$Html$Events$onCheck = function (tagger) {
	return A2(
		$elm$html$Html$Events$on,
		'change',
		A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetChecked));
};
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $author$project$Main$checkField = F3(
	function (l, v, toMsg) {
		return A2(
			$elm$html$Html$label,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('field')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('field-label')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(l)
						])),
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('checkbox'),
							$elm$html$Html$Attributes$checked(v),
							$elm$html$Html$Events$onCheck(toMsg)
						]),
					_List_Nil)
				]));
	});
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $author$project$Main$learnedCount = F2(
	function (m, s) {
		return $elm$core$List$length(
			A2(
				$elm$core$List$filter,
				function (id) {
					return A2($author$project$Study$status, s, id) === 2;
				},
				$elm$core$Dict$keys(
					A3(
						$elm$core$List$foldl,
						F2(
							function (k, d) {
								return A3($elm$core$Dict$insert, k, 0, d);
							}),
						$elm$core$Dict$empty,
						A2(
							$elm$core$List$map,
							$author$project$State$itemOfKey,
							$elm$core$Dict$keys(s.aB))))));
	});
var $elm$html$Html$Attributes$rows = function (n) {
	return A2(
		_VirtualDom_attribute,
		'rows',
		$elm$core$String$fromInt(n));
};
var $author$project$Main$startedCount = function (s) {
	return $elm$core$Dict$size(
		A3(
			$elm$core$List$foldl,
			F2(
				function (k, d) {
					return A3($elm$core$Dict$insert, k, 0, d);
				}),
			$elm$core$Dict$empty,
			A2(
				$elm$core$List$map,
				$author$project$State$itemOfKey,
				$elm$core$Dict$keys(s.aB))));
};
var $elm$html$Html$textarea = _VirtualDom_node('textarea');
var $author$project$Main$viewData = function (m) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('settings')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('settings-card')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h2,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Back up and restore')
							])),
						A2(
						$elm$html$Html$p,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('field-hint')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								(!m.a.aI) ? 'Never backed up.' : ('Last backup ' + (A2($author$project$Main$dateString, m.J, m.a.aI) + '.')))
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('row')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('small-btn'),
										$elm$html$Html$Events$onClick($author$project$Main$Export)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Back up')
									])),
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('small-btn'),
										$elm$html$Html$Events$onClick($author$project$Main$ImportPick)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Restore from file')
									])),
								function () {
								var _v0 = m._;
								if (!_v0.$) {
									return A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('small-btn'),
												$elm$html$Html$Events$onClick($author$project$Main$RestoreBackup)
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Swap with previous copy')
											]));
								} else {
									return $elm$html$Html$text('');
								}
							}()
							])),
						(m.a_ !== '') ? A2(
						$elm$html$Html$p,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('bad')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(m.a_)
							])) : $elm$html$Html$text(''),
						function () {
						var _v1 = m.aM;
						if (!_v1.$) {
							var _v2 = _v1.a;
							var s = _v2.a;
							var lastReview = A2(
								$elm$core$Maybe$map,
								function ($) {
									return $.aP;
								},
								$elm$core$List$head(
									A2(
										$elm$core$List$filter,
										function (l) {
											return !A2($elm$core$String$startsWith, 'event:', l.cB);
										},
										s.ak)));
							return A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('import-confirm')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$p,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text(
												'This backup has ' + ($elm$core$String$fromInt(
													$author$project$Main$startedCount(s)) + (' items started, ' + ($elm$core$String$fromInt(
													A2($author$project$Main$learnedCount, m, s)) + (' learned; last review ' + (A2(
													$elm$core$Maybe$withDefault,
													'never',
													A2(
														$elm$core$Maybe$map,
														$author$project$Main$dateString(m.J),
														lastReview)) + ('; schema ' + ($elm$core$String$fromInt($author$project$State$schemaVersion) + '. Replace your current progress with it? Your current progress is kept as the previous copy.'))))))))
											])),
										A2(
										$elm$html$Html$div,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('row')
											]),
										_List_fromArray(
											[
												A2(
												$elm$html$Html$button,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('small-btn danger'),
														$elm$html$Html$Events$onClick($author$project$Main$ImportConfirm)
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('Replace')
													])),
												A2(
												$elm$html$Html$button,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('small-btn'),
														$elm$html$Html$Events$onClick($author$project$Main$ImportCancel)
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('Cancel')
													]))
											]))
									]));
						} else {
							return $elm$html$Html$text('');
						}
					}()
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('settings-card')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h2,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Reports')
							])),
						A2(
						$elm$html$Html$p,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('field-hint')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								function () {
									var _v3 = $elm$core$List$length(m.a.T);
									switch (_v3) {
										case 0:
											return 'No reports. Report a problem from any card with the flag button, or from an item\u0027s page.';
										case 1:
											return '1 report. Export it as one JSON file for the build\u0027s tooling (louti reports).';
										default:
											var n = _v3;
											return $elm$core$String$fromInt(n) + ' reports. Export them as one JSON file for the build\u0027s tooling (louti reports).';
									}
								}())
							])),
						$elm$core$List$isEmpty(m.a.T) ? $elm$html$Html$text('') : (m.bd ? A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('row')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('small-btn danger'),
										$elm$html$Html$Events$onClick($author$project$Main$ReportsClearConfirm)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Yes, delete them')
									])),
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('small-btn'),
										$elm$html$Html$Events$onClick(
										$author$project$Main$ReportsClearAsk(false))
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Cancel')
									]))
							])) : A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('row')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('small-btn'),
										$elm$html$Html$Events$onClick($author$project$Main$ReportsExport)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Export reports')
									])),
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('small-btn'),
										$elm$html$Html$Events$onClick(
										$author$project$Main$ReportsClearAsk(true))
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Delete all…')
									]))
							])))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('settings-card')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h2,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Mark known')
							])),
						A2(
						$elm$html$Html$p,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('field-hint')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Paste characters, or words one per line (Pleco exports work). They skip lessons and come up for a first check within a week.')
							])),
						A2(
						$elm$html$Html$textarea,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$value(m.aA),
								$elm$html$Html$Events$onInput($author$project$Main$BulkText),
								$elm$html$Html$Attributes$rows(5),
								$elm$html$Html$Attributes$placeholder('你好\u000A谢谢\u000A我是学生')
							]),
						_List_Nil),
						A3($author$project$Main$checkField, 'Include their components and guises', m.aW, $author$project$Main$BulkComponents),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('small-btn'),
								$elm$html$Html$Events$onClick($author$project$Main$BulkApply),
								$elm$html$Html$Attributes$disabled(
								$elm$core$String$trim(m.aA) === '')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Mark known')
							])),
						(m.bc !== '') ? A2(
						$elm$html$Html$p,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('field-hint')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(m.bc)
							])) : $elm$html$Html$text('')
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('settings-card')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h2,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Reset')
							])),
						A2(
						$elm$html$Html$p,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('field-hint')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Clear all progress: every card, the review history, notes, your answers and your stories, and show How it works again. Settings and reports stay. What\u0027s cleared is kept as the previous copy, so the swap above can undo this once.')
							])),
						m.aD ? A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('row')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('small-btn danger'),
										$elm$html$Html$Events$onClick($author$project$Main$ResetAllConfirm)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Yes, reset everything')
									])),
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('small-btn'),
										$elm$html$Html$Events$onClick(
										$author$project$Main$ResetAllAsk(false))
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Cancel')
									]))
							])) : A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('small-btn'),
								$elm$html$Html$Events$onClick(
								$author$project$Main$ResetAllAsk(true))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Reset all progress…')
							]))
					]))
			]));
};
var $author$project$Main$DismissIos = {$: 69};
var $author$project$Main$StartLessons = {$: 5};
var $author$project$Main$StartReviews = {$: 6};
var $author$project$Main$StartReviewsAll = {$: 7};
var $author$project$Study$moreToLearn = F2(
	function (c, s) {
		return !$elm$core$List$isEmpty(
			A3($author$project$Study$unstarted, c, s, 1));
	});
var $author$project$Main$countStatuses = F2(
	function (m, ids) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (id, acc) {
					var _v0 = A2($author$project$Study$status, m.a, id);
					switch (_v0) {
						case 2:
							return _Utils_update(
								acc,
								{au: acc.au + 1, Q: acc.Q + 1});
						case 1:
							return _Utils_update(
								acc,
								{aK: acc.aK + 1, Q: acc.Q + 1});
						default:
							return _Utils_update(
								acc,
								{Q: acc.Q + 1});
					}
				}),
			{au: 0, aK: 0, Q: 0},
			ids);
	});
var $author$project$Main$frac = function (c) {
	return (!c.Q) ? 0 : (c.au / c.Q);
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $author$project$Main$pct = function (f) {
	return $elm$core$String$fromFloat(
		$elm$core$Basics$round(f * 1000) / 10) + '%';
};
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $author$project$Main$viewOverall = function (m) {
	var hsk1Words = $author$project$Main$frac(
		A2(
			$author$project$Main$countStatuses,
			m,
			A2(
				$elm$core$List$map,
				function ($) {
					return $.aZ;
				},
				A2(
					$elm$core$List$filter,
					function (it) {
						return (it.b3 === 4) && _Utils_eq(
							it.ej,
							$elm$core$Maybe$Just(1));
					},
					$elm$core$Dict$values(m.d.b2)))));
	var charsLearned = A2(
		$elm$core$List$filter,
		function (it) {
			return (it.b3 === 3) && (it.e$ && (A2($author$project$Study$status, m.a, it.aZ) === 2));
		},
		$elm$core$Dict$values(m.d.b2));
	var coverage = $elm$core$List$sum(
		A2(
			$elm$core$List$map,
			function ($) {
				return $.dZ;
			},
			charsLearned)) * 100;
	var message = (coverage >= 90) ? 'Try a middle-grade novel with a tap-to-look-up reader.' : (($elm$core$List$length(charsLearned) >= 300) ? 'Mandarin Companion Level 1 readers are within reach.' : ((hsk1Words >= 0.9) ? 'You should try HSK 1 graded readers now!' : ((hsk1Words < 0.3) ? 'The start of a great journey!' : 'One step at a time.')));
	var all = A2(
		$author$project$Main$countStatuses,
		m,
		$elm$core$Array$toList(m.d.c1));
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('overall')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('gauge')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('gauge-fill'),
								A2(
								$elm$html$Html$Attributes$style,
								'width',
								$author$project$Main$pct(
									$author$project$Main$frac(all)))
							]),
						_List_Nil)
					])),
				A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('gauge-label'),
						$elm$html$Html$Attributes$title('learned / learning / total')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('n-learned')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								$elm$core$String$fromInt(all.au))
							])),
						$elm$html$Html$text(' learned / '),
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('n-learning')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								$elm$core$String$fromInt(all.aK))
							])),
						$elm$html$Html$text(' learning / '),
						$elm$html$Html$text(
						$elm$core$String$fromInt(all.Q) + ' items')
					])),
				A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('encourage')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(message)
					])),
				A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('coverage')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(
						(coverage < 0.5) ? 'Soon you\u0027ll start to recognise characters in everyday Chinese.' : ('Of every 100 characters in everyday Chinese, you know ' + ($elm$core$String$fromInt(
							$elm$core$Basics$round(coverage)) + '.')))
					]))
			]));
};
var $author$project$Main$viewUpNext = F2(
	function (m, it) {
		var tile = F2(
			function (cls, content) {
				return A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('up-next-item' + cls),
							$elm$html$Html$Attributes$type_('button'),
							A2(
							$elm$html$Html$Attributes$attribute,
							'aria-label',
							'Open ' + (_Utils_eq(
								$author$project$Corpus$glyphText(it),
								it.cR) ? it.cR : ($author$project$Corpus$glyphText(it) + (' ' + it.cR)))),
							$elm$html$Html$Events$onClick(
							$author$project$Main$Nav(
								$author$project$Main$ItemPage(it.aZ)))
						]),
					content);
			});
		var _v0 = it.b3;
		switch (_v0) {
			case 0:
				return A2(
					tile,
					' up-next-name',
					_List_fromArray(
						[
							$elm$html$Html$text(it.cR)
						]));
			case 4:
				return A2(
					tile,
					' up-next-word',
					_List_fromArray(
						[
							$elm$html$Html$text(it.cm)
						]));
			default:
				return A2(
					tile,
					'',
					_List_fromArray(
						[
							A3($author$project$Glyph$viewItem, m.d, 'mini', it)
						]));
		}
	});
var $author$project$Main$viewHome = function (m) {
	var resume = !_Utils_eq(m.a.x, $elm$core$Maybe$Nothing);
	var paused = (!A2($author$project$Study$newAllowance, m.J, m.a)) && A2($author$project$Study$moreToLearn, m.d, m.a);
	var next = A3($author$project$Study$nextLessonItems, m.d, m.J, m.a);
	var backupOld = (!$elm$core$Dict$isEmpty(m.a.aB)) && (_Utils_cmp(m.l - m.a.aI, 14 * 86400000) > 0);
	var av = A3($author$project$Study$avalanche, m.d, m.l, m.a);
	var due = function () {
		if (!av.$) {
			var a = av.a;
			return a.b4;
		} else {
			return $elm$core$List$length(
				A3($author$project$Study$dueQueue, m.d, m.l, m.a));
		}
	}();
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('home')
			]),
		_List_fromArray(
			[
				(m.b0 && (!m.a.bD)) ? A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('notice')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Add Louti to your Home Screen (Share → Add to Home Screen). Safari deletes the progress of sites not visited for 7 days; home-screen apps are exempt. Back up now and then either way.')
							])),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick($author$project$Main$DismissIos)
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Got it')
							]))
					])) : $elm$html$Html$text(''),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('home-top')
					]),
				_List_fromArray(
					[
						function () {
						var _v0 = m.at;
						if (!_v0.$) {
							var sm = _v0.a;
							return A2(
								$elm$html$Html$p,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('done-line')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										sm.aj ? ('Lesson done: ' + ($elm$core$String$fromInt(sm.aE) + ' new items.')) : ('Reviews done: ' + ($elm$core$String$fromInt(sm.aE) + ' items reviewed.')))
									]));
						} else {
							return $elm$html$Html$text('');
						}
					}(),
						$author$project$Main$viewOverall(m),
						$elm$core$List$isEmpty(next) ? $elm$html$Html$text('') : A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('up-next')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$p,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('up-next-label')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Up next')
									])),
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('up-next-items')
									]),
								A2(
									$elm$core$List$map,
									$author$project$Main$viewUpNext(m),
									next))
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('home-spacer')
					]),
				_List_Nil),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('big-actions')
					]),
				_List_fromArray(
					[
						resume ? A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('action primary-action'),
								$elm$html$Html$Events$onClick(
								$author$project$Main$Nav($author$project$Main$StudyPage))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Resume')
							])) : $elm$html$Html$text(''),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('action reviews'),
								$elm$html$Html$Attributes$disabled((!due) || resume),
								$elm$html$Html$Events$onClick($author$project$Main$StartReviews)
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('count')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										$elm$core$String$fromInt(due))
									])),
								A2(
								$elm$html$Html$span,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('Reviews')
									]))
							])),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('action lessons'),
								$elm$html$Html$Attributes$disabled(
								paused || ($elm$core$List$isEmpty(next) || (resume || (!_Utils_eq(av, $elm$core$Maybe$Nothing))))),
								$elm$html$Html$Events$onClick($author$project$Main$StartLessons)
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('count')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										$elm$core$String$fromInt(
											$elm$core$List$length(next)))
									])),
								A2(
								$elm$html$Html$span,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('Lessons')
									]))
							]))
					])),
				function () {
				if (!av.$) {
					var a = av.a;
					return A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('paused avalanche')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$p,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text(
										'Catching up: ' + ($elm$core$String$fromInt(a.bA) + (' reviews are due, more than three normal days\u0027 worth. They come ' + ($elm$core$String$fromInt(a.eV) + (' a day, most at risk first, and new lessons wait until the pile is down.' + ((!a.b4) ? ' Today\u0027s share is done.' : ''))))))
									])),
								resume ? $elm$html$Html$text('') : A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('link'),
										$elm$html$Html$Events$onClick($author$project$Main$StartReviewsAll)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										'Review all ' + ($elm$core$String$fromInt(a.bA) + ' anyway'))
									]))
							]));
				} else {
					return $elm$html$Html$text('');
				}
			}(),
				(!_Utils_eq(av, $elm$core$Maybe$Nothing)) ? $elm$html$Html$text('') : (paused ? A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('paused')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(
						'That\u0027s today\u0027s ' + ($elm$core$String$fromInt(m.a.N.bG) + ' new items. More tomorrow.'))
					])) : ($elm$core$List$isEmpty(next) ? A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('paused')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('No lessons left. Well climbed.')
					])) : $elm$html$Html$text(''))),
				backupOld ? A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('backup-line')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(
						(!m.a.aI) ? 'No backup yet. ' : 'Last backup over two weeks ago. '),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('link'),
								$elm$html$Html$Events$onClick($author$project$Main$Export)
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Back up')
							]))
					])) : $elm$html$Html$text('')
			]));
};
var $author$project$Main$IntroDone = {$: 33};
var $author$project$Main$IntroStep = function (a) {
	return {$: 34, a: a};
};
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $elm$html$Html$br = _VirtualDom_node('br');
var $author$project$Main$introCard = F2(
	function (title, body) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('settings-card intro')
				]),
			A2(
				$elm$core$List$cons,
				A2(
					$elm$html$Html$h2,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(title)
						])),
				body));
	});
var $author$project$Main$introCell = F3(
	function (m, id, caption) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('intro-cell')
				]),
			_List_fromArray(
				[
					function () {
					var _v0 = A2($author$project$Corpus$get, m.d, id);
					if (!_v0.$) {
						var it = _v0.a;
						return A3($author$project$Glyph$viewItem, m.d, 'intro-svg', it);
					} else {
						return A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('intro-svg zh')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									A2(
										$elm$core$Maybe$withDefault,
										'',
										$elm$core$List$head(
											A2(
												$elm$core$List$drop,
												1,
												A2($elm$core$String$split, ':', id)))))
								]));
					}
				}(),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('intro-cap')
						]),
					caption)
				]));
	});
var $author$project$Main$introCharCell = F3(
	function (m, ch, caption) {
		var id = A2(
			$elm$core$Maybe$withDefault,
			'h:' + (ch + ':'),
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.aZ;
				},
				$elm$core$List$head(
					A2(
						$elm$core$List$sortBy,
						function (it) {
							return it.e$ ? 0 : 1;
						},
						A2(
							$elm$core$List$filter,
							function (it) {
								return (it.b3 === 3) && _Utils_eq(it.cu, ch);
							},
							$elm$core$Dict$values(m.d.b2))))));
		return A3($author$project$Main$introCell, m, id, caption);
	});
var $author$project$Main$introFormula = F3(
	function (m, parts, _v0) {
		var whole = _v0.a;
		var cap = _v0.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('intro-formula')
				]),
			_Utils_ap(
				A2(
					$elm$core$List$intersperse,
					A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('intro-op')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('+')
							])),
					A2(
						$elm$core$List$map,
						function (_v1) {
							var id = _v1.a;
							var c = _v1.b;
							return A3($author$project$Main$introCell, m, id, c);
						},
						parts)),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('intro-op')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('→')
							])),
						A3($author$project$Main$introCell, m, whole, cap)
					])));
	});
var $author$project$Main$introName = F2(
	function (m, id) {
		return A2(
			$elm$core$Maybe$withDefault,
			'?',
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.cR;
				},
				A2($author$project$Corpus$get, m.d, id)));
	});
var $author$project$Main$introKw = F2(
	function (m, id) {
		return _List_fromArray(
			[
				$elm$html$Html$text(
				A2($author$project$Main$introName, m, id))
			]);
	});
var $author$project$Main$introPy = F3(
	function (m, id, gloss) {
		return _List_fromArray(
			[
				A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('py')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(
						A2(
							$elm$core$Maybe$withDefault,
							'',
							A2(
								$elm$core$Maybe$map,
								function (it) {
									return $author$project$Pinyin$toMarks(it.c4);
								},
								A2($author$project$Corpus$get, m.d, id))))
					])),
				A2($elm$html$Html$br, _List_Nil, _List_Nil),
				$elm$html$Html$text(gloss)
			]);
	});
var $author$project$Main$ToggleCitation = {$: 31};
var $elm$core$List$map3 = _List_map3;
var $author$project$Main$sandhiNotes = F3(
	function (word, readings, spoken) {
		var tone = function (s) {
			return A2($elm$core$String$right, 1, s);
		};
		var chars = A2(
			$elm$core$List$map,
			$elm$core$String$fromChar,
			$elm$core$String$toList(word));
		return A2(
			$elm$core$List$map,
			function (_v1) {
				var ch = _v1.a;
				var cit = _v1.b;
				var sur = _v1.c;
				var change = ch + (' ' + ($author$project$Pinyin$toMarks(cit) + (' → ' + $author$project$Pinyin$toMarks(sur))));
				return ((ch === '不') && (tone(sur) === '2')) ? (change + ' before a fourth tone') : (((ch === '一') && (tone(sur) === '2')) ? (change + ' before a fourth tone') : (((ch === '一') && (tone(sur) === '4')) ? (change + ' before a first, second or third tone') : (((tone(cit) === '3') && (tone(sur) === '2')) ? (change + ': a third tone before another third tone') : (change + ' in this word'))));
			},
			A2(
				$elm$core$List$filter,
				function (_v0) {
					var cit = _v0.b;
					var sur = _v0.c;
					return !_Utils_eq(cit, sur);
				},
				A4(
					$elm$core$List$map3,
					F3(
						function (ch, cit, sur) {
							return _Utils_Tuple3(ch, cit, sur);
						}),
					chars,
					readings,
					spoken)));
	});
var $author$project$Main$wordPinyin = F2(
	function (showCitation, it) {
		var spoken = _Utils_eq(
			$elm$core$List$length(it.fi),
			$elm$core$List$length(it.da)) ? it.fi : it.da;
		var syllables = A3(
			$elm$core$List$map2,
			F2(
				function (cit, sur) {
					return A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$classList(
								_List_fromArray(
									[
										_Utils_Tuple2('syl', true),
										_Utils_Tuple2(
										'sandhi',
										!_Utils_eq(cit, sur))
									]))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								$author$project$Pinyin$toMarks(sur))
							]));
				}),
			it.da,
			spoken);
		var notes = A3($author$project$Main$sandhiNotes, it.cm, it.da, spoken);
		return (showCitation && (!$elm$core$List$isEmpty(notes))) ? _Utils_ap(
			syllables,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('sandhi-note')
						]),
					A2(
						$elm$core$List$map,
						function (n) {
							return A2(
								$elm$html$Html$span,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text(n)
									]));
						},
						notes))
				])) : syllables;
	});
var $author$project$Main$introSandhi = F2(
	function (m, ids) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('intro-formula')
				]),
			A2(
				$elm$core$List$map,
				function (w) {
					return A3(
						$author$project$Main$introCell,
						m,
						w.aZ,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('intro-citation')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										$author$project$Pinyin$joinMarks(w.da))
									])),
								A2($elm$html$Html$br, _List_Nil, _List_Nil),
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('py intro-spoken'),
										$elm$html$Html$Events$onClick($author$project$Main$ToggleCitation)
									]),
								A2($author$project$Main$wordPinyin, m.ag, w)),
								A2($elm$html$Html$br, _List_Nil, _List_Nil),
								$elm$html$Html$text(w.cR)
							]));
				},
				A2(
					$elm$core$List$filterMap,
					$author$project$Corpus$get(m.d),
					ids)));
	});
var $author$project$Main$introSyllable = F4(
	function (m, ch, ini, fin) {
		return A3(
			$author$project$Main$introCharCell,
			m,
			ch,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('py')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('intro-ini')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(ini)
								])),
							$elm$html$Html$text(' + '),
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('intro-fin')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(fin)
								]))
						]))
				]));
	});
var $author$project$Main$introZh = function (t) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('zh')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(t)
			]));
};
var $author$project$Main$positionPhrase = function (pos) {
	return (pos === 'enclose') ? 'enclosing' : ('on the ' + pos);
};
var $elm$html$Html$strong = _VirtualDom_node('strong');
var $author$project$Main$introChars = function (m) {
	return _List_fromArray(
		[
			A2(
			$author$project$Main$introCard,
			'Built from parts',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Most characters are made of a few smaller parts, and the same few hundred parts come up again and again. Learn the parts, and new characters stop being random tangles of strokes.')
						])),
					A3(
					$author$project$Main$introFormula,
					m,
					_List_fromArray(
						[
							_Utils_Tuple2(
							'h:女:nv3',
							A2($author$project$Main$introKw, m, 'h:女:nv3')),
							_Utils_Tuple2(
							'h:子:zi3',
							A2($author$project$Main$introKw, m, 'h:子:zi3'))
						]),
					_Utils_Tuple2(
						'h:好:hao3',
						A2($author$project$Main$introKw, m, 'h:好:hao3')))
				])),
			A2(
			$author$project$Main$introCard,
			'Pictures',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Some of the oldest characters began as drawings, simplified over three thousand years:')
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('intro-formula')
						]),
					A2(
						$elm$core$List$map,
						function (id) {
							return A3(
								$author$project$Main$introCell,
								m,
								id,
								A2($author$project$Main$introKw, m, id));
						},
						_List_fromArray(
							['h:人:ren2', 'h:木:mu4', 'h:日:ri4', 'h:月:yue4', 'h:山:shan1', 'h:口:kou3'])))
				])),
			A2(
			$author$project$Main$introCard,
			'Ideas put together',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Others put pictures together to make an idea:')
						])),
					A3(
					$author$project$Main$introFormula,
					m,
					_List_fromArray(
						[
							_Utils_Tuple2(
							'g:人:left',
							A2($author$project$Main$introKw, m, 'g:人:left')),
							_Utils_Tuple2(
							'h:木:mu4',
							A2($author$project$Main$introKw, m, 'h:木:mu4'))
						]),
					_Utils_Tuple2(
						'h:休:xiu1',
						A2($author$project$Main$introKw, m, 'h:休:xiu1'))),
					A3(
					$author$project$Main$introFormula,
					m,
					_List_fromArray(
						[
							_Utils_Tuple2(
							'h:日:ri4',
							A2($author$project$Main$introKw, m, 'h:日:ri4')),
							_Utils_Tuple2(
							'h:月:yue4',
							A2($author$project$Main$introKw, m, 'h:月:yue4'))
						]),
					_Utils_Tuple2(
						'h:明:ming2',
						A2($author$project$Main$introKw, m, 'h:明:ming2')))
				])),
			A2(
			$author$project$Main$introCard,
			'Meaning plus sound',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Most characters, around four in five, pair a part for the meaning with a part for the sound:')
						])),
					A3(
					$author$project$Main$introFormula,
					m,
					_List_fromArray(
						[
							_Utils_Tuple2(
							'h:女:nv3',
							_List_fromArray(
								[
									$elm$html$Html$text('woman'),
									A2($elm$html$Html$br, _List_Nil, _List_Nil),
									A2(
									$elm$html$Html$span,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('intro-role')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('meaning')
										]))
								])),
							_Utils_Tuple2(
							'h:马:ma3',
							_List_fromArray(
								[
									A2(
									$elm$html$Html$span,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('py')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('mǎ')
										])),
									A2($elm$html$Html$br, _List_Nil, _List_Nil),
									A2(
									$elm$html$Html$span,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('intro-role')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('sound')
										]))
								]))
						]),
					_Utils_Tuple2(
						'h:妈:ma1',
						A3($author$project$Main$introPy, m, 'h:妈:ma1', 'mother'))),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('One sound part makes a whole family. '),
							$author$project$Main$introZh('青'),
							$elm$html$Html$text(' qīng gives the sound, and the other part says what it\u0027s about:')
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('intro-formula')
						]),
					A2(
						$elm$core$List$map,
						function (_v0) {
							var id = _v0.a;
							var g = _v0.b;
							return A3(
								$author$project$Main$introCell,
								m,
								id,
								A3($author$project$Main$introPy, m, id, g));
						},
						_List_fromArray(
							[
								_Utils_Tuple2('h:请:qing3', 'invite (speech)'),
								_Utils_Tuple2('h:清:qing1', 'clear (water)'),
								_Utils_Tuple2('h:晴:qing2', 'sunny (sun)'),
								_Utils_Tuple2('h:情:qing2', 'feelings (heart)')
							]))),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('muted small')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Pronunciation has drifted over the centuries, so the sound part is a hint, not a rule.')
						]))
				])),
			A2(
			$author$project$Main$introCard,
			'Parts change shape',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Squeezed into one side of a character, some parts take a different form:')
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('intro-formula')
						]),
					A2(
						$elm$core$List$map,
						function (_v1) {
							var full = _v1.a;
							var side = _v1.b;
							return A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('intro-pair')
									]),
								_List_fromArray(
									[
										A3(
										$author$project$Main$introCell,
										m,
										full,
										A2($author$project$Main$introKw, m, full)),
										A2(
										$elm$html$Html$span,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('intro-op')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('→')
											])),
										A3(
										$author$project$Main$introCell,
										m,
										side,
										_List_fromArray(
											[
												$elm$html$Html$text(
												A2(
													$elm$core$Maybe$withDefault,
													'',
													A2(
														$elm$core$Maybe$map,
														$author$project$Main$positionPhrase,
														A2(
															$elm$core$Maybe$andThen,
															function ($) {
																return $.eY;
															},
															A2($author$project$Corpus$get, m.d, side)))))
											]))
									]));
						},
						_List_fromArray(
							[
								_Utils_Tuple2('h:人:ren2', 'g:人:left'),
								_Utils_Tuple2('h:刀:dao1', 'g:刀:right'),
								_Utils_Tuple2('h:竹:zhu2', 'g:竹:top'),
								_Utils_Tuple2('h:火:huo3', 'g:火:bottom')
							])))
				])),
			A2(
			$author$project$Main$introCard,
			'Pinyin: initials and finals',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Every character is one syllable, and pinyin spells it with Latin letters: an initial (the consonant at the start) and a final (the rest). There are about 20 initials and 35 finals, and between them they make every syllable in Mandarin:')
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('intro-formula')
						]),
					A2(
						$elm$core$List$map,
						function (_v2) {
							var ch = _v2.a;
							var ini = _v2.b;
							var fin = _v2.c;
							return A4($author$project$Main$introSyllable, m, ch, ini, fin);
						},
						_List_fromArray(
							[
								_Utils_Tuple3('妈', 'm', 'a'),
								_Utils_Tuple3('好', 'h', 'ǎo'),
								_Utils_Tuple3('请', 'q', 'ǐng'),
								_Utils_Tuple3('学', 'x', 'ué')
							]))),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Some letters don\u0027t sound like English: q is close to “ch”, x to “sh”, and zh, ch and sh are said with the tongue curled back. A few syllables have no initial at all (安 ān). When a syllable starts with i, u or ü, it\u0027s written with y or w instead (衣 yī, 乌 wū, 鱼 yú).')
						])),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('To type pinyin, type the letters as they\u0027re spelled, and ü as v: 女 is nv, 绿 is lv.')
						]))
				])),
			A2(
			$author$project$Main$introCard,
			'Tones',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Each syllable also has a tone, the shape of the pitch, and the tone changes the word:')
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('intro-formula')
						]),
					A2(
						$elm$core$List$map,
						function (_v3) {
							var ch = _v3.a;
							var py = _v3.b;
							var g = _v3.c;
							return A3(
								$author$project$Main$introCharCell,
								m,
								ch,
								_List_fromArray(
									[
										A2(
										$elm$html$Html$span,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('py')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text(py)
											])),
										A2($elm$html$Html$br, _List_Nil, _List_Nil),
										$elm$html$Html$text(g)
									]));
						},
						_List_fromArray(
							[
								_Utils_Tuple3('妈', 'mā', 'mother'),
								_Utils_Tuple3('麻', 'má', 'numb'),
								_Utils_Tuple3('马', 'mǎ', 'horse'),
								_Utils_Tuple3('骂', 'mà', 'scold'),
								_Utils_Tuple3('吗', 'ma', 'question')
							]))),
					A2(
					$elm$html$Html$ul,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('intro-tones')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$li,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('1st, ā: high and level')
								])),
							A2(
							$elm$html$Html$li,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('2nd, á: rising, like asking “huh?”')
								])),
							A2(
							$elm$html$Html$li,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('3rd, ǎ: low and dipping')
								])),
							A2(
							$elm$html$Html$li,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('4th, à: sharply falling, like a firm “No!”')
								])),
							A2(
							$elm$html$Html$li,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('neutral, a: short and light, no mark')
								]))
						])),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('To type a tone, put its number after the syllable: ma1, ma2, ma3, ma4, and ma5 (or just ma) for the neutral tone. Louti turns the numbers into marks as you type: hao3 becomes hǎo.')
						]))
				])),
			A2(
			$author$project$Main$introCard,
			'Tones change in speech',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('A few tones change when syllables are spoken together (this is called tone sandhi). Three rules cover nearly all of it:')
						])),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('intro-rule')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$strong,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('Two third tones in a row: ')
								])),
							$elm$html$Html$text('the first becomes a second tone.')
						])),
					A2(
					$author$project$Main$introSandhi,
					m,
					_List_fromArray(
						['w:你好:ni3hao3', 'w:可以:ke3yi3'])),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('intro-rule')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$strong,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('不 bù before a fourth tone ')
								])),
							$elm$html$Html$text('becomes bú.')
						])),
					A2(
					$author$project$Main$introSandhi,
					m,
					_List_fromArray(
						['w:不要:bu4yao4', 'w:不错:bu4cuo4'])),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('intro-rule')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$strong,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('一 yī ')
								])),
							$elm$html$Html$text('becomes yí before a fourth tone and yì before the others. Counting, or at the end of a word, it stays yī.')
						])),
					A2(
					$author$project$Main$introSandhi,
					m,
					_List_fromArray(
						['w:一下:yi1xia4', 'w:一些:yi1xie1', 'w:一起:yi1qi3'])),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Louti writes a word\u0027s pinyin the way it\u0027s spoken, and its audio says it that way too. A changed syllable is underlined with dots: tap it to see what changed and why. A character on its own is always asked in its own tone: 不 is bù, 一 is yī.')
						]))
				])),
			A2(
			$author$project$Main$introCard,
			'Words',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Most words are two characters. The meaning often follows from the parts, and sometimes it takes a little imagination:')
						])),
					A3(
					$author$project$Main$introFormula,
					m,
					_List_fromArray(
						[
							_Utils_Tuple2(
							'h:电:dian4',
							A2($author$project$Main$introKw, m, 'h:电:dian4')),
							_Utils_Tuple2(
							'h:话:hua4',
							A2($author$project$Main$introKw, m, 'h:话:hua4'))
						]),
					_Utils_Tuple2(
						'w:电话:dian4hua4',
						A2($author$project$Main$introKw, m, 'w:电话:dian4hua4')))
				]))
		]);
};
var $author$project$Main$durationWords = function (months) {
	var numberWord = function (n) {
		switch (n) {
			case 1:
				return 'one';
			case 2:
				return 'two';
			case 3:
				return 'three';
			case 4:
				return 'four';
			case 5:
				return 'five';
			case 6:
				return 'six';
			default:
				return $elm$core$String$fromInt(n);
		}
	};
	var halves = $elm$core$Basics$round(months / 6);
	var whole = (halves / 2) | 0;
	return (months < 12) ? ($elm$core$String$fromInt(
		A2(
			$elm$core$Basics$max,
			1,
			$elm$core$Basics$round(months))) + ' months') : ((A2($elm$core$Basics$modBy, 2, halves) === 1) ? (numberWord(whole) + ' and a half years') : ((whole === 1) ? 'a year' : (numberWord(whole) + ' years')));
};
var $elm$html$Html$table = _VirtualDom_node('table');
var $elm$html$Html$td = _VirtualDom_node('td');
var $elm$html$Html$th = _VirtualDom_node('th');
var $author$project$Main$thousands = function (n) {
	var go = function (s) {
		return ($elm$core$String$length(s) <= 3) ? s : (go(
			A2($elm$core$String$dropRight, 3, s)) + (',' + A2($elm$core$String$right, 3, s)));
	};
	return go(
		$elm$core$String$fromInt(n));
};
var $elm$html$Html$tr = _VirtualDom_node('tr');
var $author$project$Main$introScope = function (m) {
	var syl = F2(
		function (d, l) {
			var _v0 = A2($elm$core$Dict$get, l, d);
			if (!_v0.$) {
				var n = _v0.a;
				return ' / ' + $author$project$Main$thousands(n);
			} else {
				return '';
			}
		});
	var levelName = function (l) {
		return (l === 7) ? '7–9' : $elm$core$String$fromInt(l);
	};
	var items = $elm$core$Dict$values(m.d.b2);
	var num = function (k) {
		return $elm$core$List$length(
			A2($elm$core$List$filter, k, items));
	};
	var parts = num(
		function (it) {
			return (it.b3 === 1) || (it.b3 === 2);
		});
	var total = num(
		function (it) {
			return !(!it.b3);
		}) + num(
		function (it) {
			return !it.b3;
		});
	var months = (total / 15) / 30;
	var words = num(
		function (it) {
			return it.b3 === 4;
		});
	var wordsAt = function (l) {
		return num(
			function (it) {
				return ((it.b3 === 4) && _Utils_eq(
					it.ej,
					$elm$core$Maybe$Just(l))) || _Utils_eq(
					it.fz,
					$elm$core$Maybe$Just(l));
			});
	};
	var extra = num(
		function (it) {
			return (it.b3 === 3) && (!it.e$);
		});
	var coveredBy = function (l) {
		return 100 * $elm$core$List$sum(
			A2(
				$elm$core$List$map,
				function ($) {
					return $.dZ;
				},
				A2(
					$elm$core$List$filterMap,
					$author$project$Corpus$get(m.d),
					A2(
						$elm$core$List$concatMap,
						function (k) {
							return A2(
								$elm$core$Maybe$withDefault,
								_List_Nil,
								A2($elm$core$Dict$get, k, m.d.cL));
						},
						A2($elm$core$List$range, 1, l)))));
	};
	var coverage = 100 * $elm$core$List$sum(
		A2(
			$elm$core$List$map,
			function ($) {
				return $.dZ;
			},
			A2(
				$elm$core$List$filter,
				function (it) {
					return (it.b3 === 3) && it.e$;
				},
				items)));
	var charsAt = function (l) {
		return A2(
			$elm$core$Maybe$withDefault,
			0,
			A2(
				$elm$core$Maybe$map,
				$elm$core$List$length,
				A2($elm$core$Dict$get, l, m.d.cL)));
	};
	var row = function (l) {
		return A2(
			$elm$html$Html$tr,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							'HSK ' + levelName(l))
						])),
					A2(
					$elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							_Utils_ap(
								$author$project$Main$thousands(
									charsAt(l)),
								A2(syl, m.d.dp.bx, l)))
						])),
					A2(
					$elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							_Utils_ap(
								$author$project$Main$thousands(
									wordsAt(l)),
								A2(syl, m.d.dp.dy, l)))
						])),
					A2(
					$elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							$elm$core$String$fromInt(
								$elm$core$Basics$round(
									coveredBy(l))) + '%')
						]))
				]));
	};
	var chars = num(
		function (it) {
			return (it.b3 === 3) && it.e$;
		});
	return _List_fromArray(
		[
			A2(
			$author$project$Main$introCard,
			'The whole HSK syllabus',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Louti covers every level of the 2025 HSK syllabus, from HSK 1 to HSK 7–9:')
						])),
					A2(
					$elm$html$Html$ul,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$li,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Main$thousands(chars) + (' characters, plus ' + ($elm$core$String$fromInt(extra) + ' second readings of characters that are read two ways;')))
								])),
							A2(
							$elm$html$Html$li,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Main$thousands(words) + ' words;')
								])),
							A2(
							$elm$html$Html$li,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									$elm$core$String$fromInt(parts) + (' parts, and the ' + ($elm$core$String$fromInt(
										num(
											function (it) {
												return !it.b3;
											})) + ' actors, buildings and rooms of the cast.')))
								]))
						])),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							'Together, these characters make up ' + (((coverage >= 99) ? $elm$core$String$fromFloat(
								$elm$core$Basics$floor(coverage * 10) / 10) : $elm$core$String$fromInt(
								$elm$core$Basics$round(coverage))) + '% of everyday Chinese text.'))
						]))
				])),
			A2(
			$author$project$Main$introCard,
			'Level by level',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('field-hint')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('In Louti / in the syllabus. Text: how much of everyday Chinese is written with the characters up to that level. A one-character word is taught as its character and counted with the words; a word with two readings (地方 dìfāng, dìfang) counts twice.')
						])),
					A2(
					$elm$html$Html$table,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('intro-table')
						]),
					A2(
						$elm$core$List$cons,
						A2(
							$elm$html$Html$tr,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$elm$html$Html$th,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('Level')
										])),
									A2(
									$elm$html$Html$th,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('Characters')
										])),
									A2(
									$elm$html$Html$th,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('Words')
										])),
									A2(
									$elm$html$Html$th,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('Text')
										]))
								])),
						A2(
							$elm$core$List$map,
							row,
							A2($elm$core$List$range, 1, 7))))
				])),
			A2(
			$author$project$Main$introCard,
			'How long it takes',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							'At about 15 new items a day, the whole course takes ' + ($author$project$Main$durationWords(months) + ' or so, and HSK 1–3 comes much sooner: the early levels are small, and later lessons lean on everything before.'))
						])),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Go at whatever pace keeps your daily reviews comfortable; the home screen holds new lessons back if they pile up.')
						]))
				]))
		]);
};
var $elm$html$Html$em = _VirtualDom_node('em');
var $author$project$Main$introCast = function (t) {
	return A2(
		$elm$html$Html$em,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('intro-cast')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(t)
			]));
};
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (!result.$) {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine = {$: 10};
var $dillonkearns$elm_markdown$Markdown$Block$BlockQuote = function (a) {
	return {$: 3, a: a};
};
var $dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote = function (a) {
	return {$: 11, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Cdata = function (a) {
	return {$: 4, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$CodeBlock = function (a) {
	return {$: 7, a: a};
};
var $dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock = function (a) {
	return {$: 5, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$CodeSpan = function (a) {
	return {$: 6, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$CompletedTask = 2;
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Emphasis = function (a) {
	return {$: 3, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Inline$Emphasis = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Parser$EmptyBlock = {$: 0};
var $elm$parser$Parser$Expecting = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 8, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$HardLineBreak = {$: 8};
var $dillonkearns$elm_markdown$Markdown$Block$Heading = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$Heading = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$Html = function (a) {
	return {$: 2, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$HtmlBlock = function (a) {
	return {$: 0, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$HtmlComment = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Block$HtmlElement = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Block$HtmlInline = function (a) {
	return {$: 0, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Image = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Block$IncompleteTask = 1;
var $dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock = function (a) {
	return {$: 6, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Parser$InlineProblem = function (a) {
	return {$: 2, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Link = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Block$ListItem = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 0, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$NoTask = 0;
var $dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$OrderedList = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock = F6(
	function (a, b, c, d, e, f) {
		return {$: 4, a: a, b: b, c: c, d: d, e: e, f: f};
	});
var $dillonkearns$elm_markdown$Markdown$Block$Paragraph = function (a) {
	return {$: 5, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$Markdown$RawBlock$ParsedBlockQuote = function (a) {
	return {$: 12, a: a};
};
var $elm$parser$Parser$Problem = function (a) {
	return {$: 12, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction = function (a) {
	return {$: 2, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Strikethrough = function (a) {
	return {$: 5, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Strong = function (a) {
	return {$: 4, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Table = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$Table = function (a) {
	return {$: 8, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Table$Table = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Table$TableDelimiterRow = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Block$Text = function (a) {
	return {$: 7, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$ThematicBreak = {$: 8};
var $dillonkearns$elm_markdown$Markdown$RawBlock$ThematicBreak = {$: 7};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Block$UnorderedList = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock = F4(
	function (a, b, c, d) {
		return {$: 3, a: a, b: b, c: c, d: d};
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines = $elm$core$Basics$identity;
var $dillonkearns$elm_markdown$Markdown$Parser$addReference = F2(
	function (state, linkRef) {
		return {
			b: A2($elm$core$List$cons, linkRef, state.b),
			c: state.c
		};
	});
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0;
		return function (s0) {
			var _v1 = parseA(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				var _v2 = callback(a);
				var parseB = _v2;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
				}
			}
		};
	});
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0;
	return function (s0) {
		var _v1 = parse(s0);
		if (_v1.$ === 1) {
			var x = _v1.b;
			return A2($elm$parser$Parser$Advanced$Bad, false, x);
		} else {
			var a = _v1.b;
			var s1 = _v1.c;
			return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
		}
	};
};
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.cf);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.f, offset) < 0,
					0,
					{cv: col, j: s0.j, m: s0.m, f: offset, fa: row, cf: s0.cf});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return function (s) {
		return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.f, s.fa, s.cv, s);
	};
};
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0;
		var parseB = _v1;
		return function (s0) {
			var _v2 = parseA(s0);
			if (_v2.$ === 1) {
				var p = _v2.a;
				var x = _v2.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v2.a;
				var a = _v2.b;
				var s1 = _v2.c;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p1 || p2,
						A2(func, a, b),
						s2);
				}
			}
		};
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $dillonkearns$elm_markdown$Whitespace$isSpaceOrTab = function (_char) {
	switch (_char) {
		case ' ':
			return true;
		case '\t':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Parser$Token$carriageReturn = A2(
	$elm$parser$Parser$Advanced$Token,
	'\u000D',
	$elm$parser$Parser$Expecting('a carriage return'));
var $dillonkearns$elm_markdown$Parser$Token$newline = A2(
	$elm$parser$Parser$Advanced$Token,
	'\u000A',
	$elm$parser$Parser$Expecting('a newline'));
var $elm$parser$Parser$Advanced$Empty = {$: 0};
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (!_v1.$) {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
	};
};
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {cv: col, dY: contextStack, e0: problem, fa: row};
	});
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.fa, s.cv, x, s.j));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.f, s.fa, s.cv, s.cf);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{cv: newCol, j: s.j, m: s.m, f: newOffset, fa: newRow, cf: s.cf});
	};
};
var $dillonkearns$elm_markdown$Whitespace$lineEnd = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$Advanced$token($dillonkearns$elm_markdown$Parser$Token$newline),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$token($dillonkearns$elm_markdown$Parser$Token$carriageReturn),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$Advanced$token($dillonkearns$elm_markdown$Parser$Token$newline),
						$elm$parser$Parser$Advanced$succeed(0)
					])))
		]));
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					func(a),
					s1);
			} else {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			}
		};
	});
var $dillonkearns$elm_markdown$Markdown$Parser$blankLine = A2(
	$elm$parser$Parser$Advanced$map,
	function (_v0) {
		return $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine;
	},
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$backtrackable(
			$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab)),
		$dillonkearns$elm_markdown$Whitespace$lineEnd));
var $dillonkearns$elm_markdown$Parser$Token$space = A2(
	$elm$parser$Parser$Advanced$Token,
	' ',
	$elm$parser$Parser$Expecting('a space'));
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $dillonkearns$elm_markdown$Markdown$Parser$blockQuoteStarts = _List_fromArray(
	[
		$elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			'>',
			$elm$parser$Parser$Expecting('>'))),
		A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$backtrackable(
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$space)),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'>',
						$elm$parser$Parser$Expecting(' >'))),
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						' >',
						$elm$parser$Parser$Expecting('  >'))),
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'  >',
						$elm$parser$Parser$Expecting('   >')))
				])))
	]);
var $dillonkearns$elm_markdown$Whitespace$isLineEnd = function (_char) {
	switch (_char) {
		case '\n':
			return true;
		case '\r':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd = $elm$parser$Parser$Advanced$chompWhile(
	A2($elm$core$Basics$composeL, $elm$core$Basics$not, $dillonkearns$elm_markdown$Whitespace$isLineEnd));
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					A2(
						func,
						A3($elm$core$String$slice, s0.f, s1.f, s0.cf),
						a),
					s1);
			}
		};
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$Advanced$end = function (x) {
	return function (s) {
		return _Utils_eq(
			$elm$core$String$length(s.cf),
			s.f) ? A3($elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $dillonkearns$elm_markdown$Helpers$endOfFile = $elm$parser$Parser$Advanced$end(
	$elm$parser$Parser$Expecting('the end of the input'));
var $dillonkearns$elm_markdown$Helpers$lineEndOrEnd = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[$dillonkearns$elm_markdown$Whitespace$lineEnd, $dillonkearns$elm_markdown$Helpers$endOfFile]));
var $dillonkearns$elm_markdown$Markdown$Parser$blockQuote = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote),
			$elm$parser$Parser$Advanced$oneOf($dillonkearns$elm_markdown$Markdown$Parser$blockQuoteStarts)),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$space),
					$elm$parser$Parser$Advanced$succeed(0)
				]))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
		$dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
var $dillonkearns$elm_markdown$Markdown$Parser$problemToString = function (problem) {
	switch (problem.$) {
		case 0:
			var string = problem.a;
			return 'Expecting ' + string;
		case 1:
			return 'Expecting int';
		case 2:
			return 'Expecting hex';
		case 3:
			return 'Expecting octal';
		case 4:
			return 'Expecting binary';
		case 5:
			return 'Expecting float';
		case 6:
			return 'Expecting number';
		case 7:
			return 'Expecting variable';
		case 8:
			var string = problem.a;
			return 'Expecting symbol ' + string;
		case 9:
			var string = problem.a;
			return 'Expecting keyword ' + string;
		case 10:
			return 'Expecting keyword end';
		case 11:
			return 'Unexpected char';
		case 12:
			var problemDescription = problem.a;
			return problemDescription;
		default:
			return 'Bad repeat';
	}
};
var $dillonkearns$elm_markdown$Markdown$Parser$deadEndToString = function (deadEnd) {
	return 'Problem at row ' + ($elm$core$String$fromInt(deadEnd.fa) + ('\u000A' + $dillonkearns$elm_markdown$Markdown$Parser$problemToString(deadEnd.e0)));
};
var $dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString = function (deadEnds) {
	return A2(
		$elm$core$String$join,
		'\u000A',
		A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$deadEndToString, deadEnds));
};
var $dillonkearns$elm_markdown$Markdown$Parser$endWithOpenBlockOrParagraph = function (block) {
	endWithOpenBlockOrParagraph:
	while (true) {
		switch (block.$) {
			case 1:
				var str = block.a;
				return !A2($elm$core$String$endsWith, str, '\u000A');
			case 12:
				var blocks = block.a;
				if (blocks.b) {
					var last = blocks.a;
					var $temp$block = last;
					block = $temp$block;
					continue endWithOpenBlockOrParagraph;
				} else {
					return false;
				}
			case 4:
				var blockslist = block.e;
				if (blockslist.b) {
					var blocks = blockslist.a;
					if (blocks.b) {
						var last = blocks.a;
						var $temp$block = last;
						block = $temp$block;
						continue endWithOpenBlockOrParagraph;
					} else {
						return false;
					}
				} else {
					return false;
				}
			case 0:
				return true;
			default:
				return false;
		}
	}
};
var $dillonkearns$elm_markdown$HtmlParser$Cdata = function (a) {
	return {$: 3, a: a};
};
var $dillonkearns$elm_markdown$HtmlParser$Element = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$HtmlParser$Text = function (a) {
	return {$: 1, a: a};
};
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return function (s) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.f, s.cf);
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{cv: 1, j: s.j, m: s.m, f: s.f + 1, fa: s.fa + 1, cf: s.cf}) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{cv: s.cv + 1, j: s.j, m: s.m, f: newOffset, fa: s.fa, cf: s.cf}));
		};
	});
var $dillonkearns$elm_markdown$HtmlParser$expectTagNameCharacter = $elm$parser$Parser$Expecting('at least 1 tag name character');
var $dillonkearns$elm_markdown$HtmlParser$tagNameCharacter = function (c) {
	switch (c) {
		case ' ':
			return false;
		case '\r':
			return false;
		case '\n':
			return false;
		case '\t':
			return false;
		case '/':
			return false;
		case '<':
			return false;
		case '>':
			return false;
		case '"':
			return false;
		case '\'':
			return false;
		case '=':
			return false;
		default:
			return true;
	}
};
var $dillonkearns$elm_markdown$HtmlParser$tagName = A2(
	$elm$parser$Parser$Advanced$mapChompedString,
	F2(
		function (name, _v0) {
			return $elm$core$String$toLower(name);
		}),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2($elm$parser$Parser$Advanced$chompIf, $dillonkearns$elm_markdown$HtmlParser$tagNameCharacter, $dillonkearns$elm_markdown$HtmlParser$expectTagNameCharacter),
		$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$HtmlParser$tagNameCharacter)));
var $dillonkearns$elm_markdown$HtmlParser$attributeName = $dillonkearns$elm_markdown$HtmlParser$tagName;
var $dillonkearns$elm_markdown$HtmlParser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$token(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0;
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (!step.$) {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return function (s) {
			return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
		};
	});
var $dillonkearns$elm_markdown$HtmlParser$entities = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('amp', '&'),
			_Utils_Tuple2('lt', '<'),
			_Utils_Tuple2('gt', '>'),
			_Utils_Tuple2('apos', '\''),
			_Utils_Tuple2('quot', '"')
		]));
var $elm$core$Char$fromCode = _Char_fromCode;
var $elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (!maybe.$) {
			var v = maybe.a;
			return $elm$core$Result$Ok(v);
		} else {
			return $elm$core$Result$Err(err);
		}
	});
var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return $elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return $elm$core$Result$Err(
							$elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (!ra.$) {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $rtfeldman$elm_hex$Hex$fromString = function (str) {
	if ($elm$core$String$isEmpty(str)) {
		return $elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2($elm$core$String$startsWith, '-', str)) {
				var list = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					$elm$core$List$tail(
						$elm$core$String$toList(str)));
				return A2(
					$elm$core$Result$map,
					$elm$core$Basics$negate,
					A3(
						$rtfeldman$elm_hex$Hex$fromStringHelp,
						$elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					$rtfeldman$elm_hex$Hex$fromStringHelp,
					$elm$core$String$length(str) - 1,
					$elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					['\u0022' + (str + '\u0022'), 'is not a valid hexadecimal string because', err]));
		};
		return A2($elm$core$Result$mapError, formatError, result);
	}
};
var $dillonkearns$elm_markdown$HtmlParser$decodeEscape = function (s) {
	return A2($elm$core$String$startsWith, '#x', s) ? A2(
		$elm$core$Result$mapError,
		$elm$parser$Parser$Problem,
		A2(
			$elm$core$Result$map,
			$elm$core$Char$fromCode,
			$rtfeldman$elm_hex$Hex$fromString(
				A2($elm$core$String$dropLeft, 2, s)))) : (A2($elm$core$String$startsWith, '#', s) ? A2(
		$elm$core$Result$fromMaybe,
		$elm$parser$Parser$Problem('Invalid escaped character: ' + s),
		A2(
			$elm$core$Maybe$map,
			$elm$core$Char$fromCode,
			$elm$core$String$toInt(
				A2($elm$core$String$dropLeft, 1, s)))) : A2(
		$elm$core$Result$fromMaybe,
		$elm$parser$Parser$Problem('No entity named \u0022&' + (s + ';\u0022 found.')),
		A2($elm$core$Dict$get, s, $dillonkearns$elm_markdown$HtmlParser$entities)));
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return function (s) {
		return A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $dillonkearns$elm_markdown$HtmlParser$escapedChar = function (end_) {
	var process = function (entityStr) {
		var _v0 = $dillonkearns$elm_markdown$HtmlParser$decodeEscape(entityStr);
		if (!_v0.$) {
			var c = _v0.a;
			return $elm$parser$Parser$Advanced$succeed(c);
		} else {
			var e = _v0.a;
			return $elm$parser$Parser$Advanced$problem(e);
		}
	};
	var isEntityChar = function (c) {
		return (!_Utils_eq(c, end_)) && (c !== ';');
	};
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$dillonkearns$elm_markdown$HtmlParser$symbol('&')),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$andThen,
				process,
				$elm$parser$Parser$Advanced$getChompedString(
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$chompIf,
							isEntityChar,
							$elm$parser$Parser$Expecting('an entity character')),
						$elm$parser$Parser$Advanced$chompWhile(isEntityChar)))),
			$dillonkearns$elm_markdown$HtmlParser$symbol(';')));
};
var $dillonkearns$elm_markdown$HtmlParser$textStringStep = F3(
	function (closingChar, predicate, accum) {
		return A2(
			$elm$parser$Parser$Advanced$andThen,
			function (soFar) {
				return $elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$Advanced$map,
							function (escaped) {
								return $elm$parser$Parser$Advanced$Loop(
									_Utils_ap(
										accum,
										_Utils_ap(
											soFar,
											$elm$core$String$fromChar(escaped))));
							},
							$dillonkearns$elm_markdown$HtmlParser$escapedChar(closingChar)),
							$elm$parser$Parser$Advanced$succeed(
							$elm$parser$Parser$Advanced$Done(
								_Utils_ap(accum, soFar)))
						]));
			},
			$elm$parser$Parser$Advanced$getChompedString(
				$elm$parser$Parser$Advanced$chompWhile(predicate)));
	});
var $dillonkearns$elm_markdown$HtmlParser$textString = function (closingChar) {
	var predicate = function (c) {
		return (!_Utils_eq(c, closingChar)) && (c !== '&');
	};
	return A2(
		$elm$parser$Parser$Advanced$loop,
		'',
		A2($dillonkearns$elm_markdown$HtmlParser$textStringStep, closingChar, predicate));
};
var $dillonkearns$elm_markdown$HtmlParser$attributeValue = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$dillonkearns$elm_markdown$HtmlParser$symbol('\u0022')),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$dillonkearns$elm_markdown$HtmlParser$textString('"'),
				$dillonkearns$elm_markdown$HtmlParser$symbol('\u0022'))),
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$dillonkearns$elm_markdown$HtmlParser$symbol('\u0027')),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$dillonkearns$elm_markdown$HtmlParser$textString('\''),
				$dillonkearns$elm_markdown$HtmlParser$symbol('\u0027')))
		]));
var $dillonkearns$elm_markdown$HtmlParser$keepOldest = F2(
	function (_new, mValue) {
		if (!mValue.$) {
			var v = mValue.a;
			return $elm$core$Maybe$Just(v);
		} else {
			return $elm$core$Maybe$Just(_new);
		}
	});
var $dillonkearns$elm_markdown$HtmlParser$isWhitespace = function (c) {
	switch (c) {
		case ' ':
			return true;
		case '\r':
			return true;
		case '\n':
			return true;
		case '\t':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$HtmlParser$whiteSpace = $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$HtmlParser$isWhitespace);
var $dillonkearns$elm_markdown$HtmlParser$attributesStep = function (attrs) {
	var process = F2(
		function (name, value) {
			return $elm$parser$Parser$Advanced$Loop(
				A3(
					$elm$core$Dict$update,
					$elm$core$String$toLower(name),
					$dillonkearns$elm_markdown$HtmlParser$keepOldest(value),
					attrs));
		});
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(process),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2($elm$parser$Parser$Advanced$ignorer, $dillonkearns$elm_markdown$HtmlParser$attributeName, $dillonkearns$elm_markdown$HtmlParser$whiteSpace),
							$dillonkearns$elm_markdown$HtmlParser$symbol('=')),
						$dillonkearns$elm_markdown$HtmlParser$whiteSpace)),
				A2($elm$parser$Parser$Advanced$ignorer, $dillonkearns$elm_markdown$HtmlParser$attributeValue, $dillonkearns$elm_markdown$HtmlParser$whiteSpace)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(attrs))
			]));
};
var $dillonkearns$elm_markdown$HtmlParser$attributes = A2(
	$elm$parser$Parser$Advanced$map,
	A2(
		$elm$core$Dict$foldl,
		F3(
			function (key, value, accum) {
				return A2(
					$elm$core$List$cons,
					{cW: key, fw: value},
					accum);
			}),
		_List_Nil),
	A2($elm$parser$Parser$Advanced$loop, $elm$core$Dict$empty, $dillonkearns$elm_markdown$HtmlParser$attributesStep));
var $elm$parser$Parser$Advanced$chompUntilEndOr = function (str) {
	return function (s) {
		var _v0 = A5(_Parser_findSubString, str, s.f, s.fa, s.cv, s.cf);
		var newOffset = _v0.a;
		var newRow = _v0.b;
		var newCol = _v0.c;
		var adjustedOffset = (newOffset < 0) ? $elm$core$String$length(s.cf) : newOffset;
		return A3(
			$elm$parser$Parser$Advanced$Good,
			_Utils_cmp(s.f, adjustedOffset) < 0,
			0,
			{cv: newCol, j: s.j, m: s.m, f: adjustedOffset, fa: newRow, cf: s.cf});
	};
};
var $dillonkearns$elm_markdown$HtmlParser$cdata = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
		$dillonkearns$elm_markdown$HtmlParser$symbol('<![CDATA[')),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr(']]>')),
		$dillonkearns$elm_markdown$HtmlParser$symbol(']]>')));
var $dillonkearns$elm_markdown$HtmlParser$childrenStep = F2(
	function (options, accum) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (f) {
				return f(accum);
			},
			$elm$parser$Parser$Advanced$oneOf(options));
	});
var $dillonkearns$elm_markdown$HtmlParser$fail = function (str) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(str));
};
var $dillonkearns$elm_markdown$HtmlParser$closingTag = function (startTagName) {
	var closingTagName = A2(
		$elm$parser$Parser$Advanced$andThen,
		function (endTagName) {
			return _Utils_eq(startTagName, endTagName) ? $elm$parser$Parser$Advanced$succeed(0) : $dillonkearns$elm_markdown$HtmlParser$fail('tag name mismatch: ' + (startTagName + (' and ' + endTagName)));
		},
		$dillonkearns$elm_markdown$HtmlParser$tagName);
	return A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$dillonkearns$elm_markdown$HtmlParser$symbol('</'),
					$dillonkearns$elm_markdown$HtmlParser$whiteSpace),
				closingTagName),
			$dillonkearns$elm_markdown$HtmlParser$whiteSpace),
		$dillonkearns$elm_markdown$HtmlParser$symbol('>'));
};
var $dillonkearns$elm_markdown$HtmlParser$Comment = function (a) {
	return {$: 2, a: a};
};
var $dillonkearns$elm_markdown$HtmlParser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $dillonkearns$elm_markdown$HtmlParser$comment = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$HtmlParser$Comment),
		$elm$parser$Parser$Advanced$token(
			$dillonkearns$elm_markdown$HtmlParser$toToken('<!--'))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr('-->')),
		$elm$parser$Parser$Advanced$token(
			$dillonkearns$elm_markdown$HtmlParser$toToken('-->'))));
var $dillonkearns$elm_markdown$HtmlParser$Declaration = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var $dillonkearns$elm_markdown$HtmlParser$expectUppercaseCharacter = $elm$parser$Parser$Expecting('at least 1 uppercase character');
var $dillonkearns$elm_markdown$HtmlParser$allUppercase = $elm$parser$Parser$Advanced$getChompedString(
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2($elm$parser$Parser$Advanced$chompIf, $elm$core$Char$isUpper, $dillonkearns$elm_markdown$HtmlParser$expectUppercaseCharacter),
		$elm$parser$Parser$Advanced$chompWhile($elm$core$Char$isUpper)));
var $dillonkearns$elm_markdown$HtmlParser$oneOrMoreWhiteSpace = A2(
	$elm$parser$Parser$Advanced$ignorer,
	A2(
		$elm$parser$Parser$Advanced$chompIf,
		$dillonkearns$elm_markdown$HtmlParser$isWhitespace,
		$elm$parser$Parser$Expecting('at least one whitespace')),
	$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$HtmlParser$isWhitespace));
var $dillonkearns$elm_markdown$HtmlParser$docType = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$HtmlParser$Declaration),
			$dillonkearns$elm_markdown$HtmlParser$symbol('<!')),
		A2($elm$parser$Parser$Advanced$ignorer, $dillonkearns$elm_markdown$HtmlParser$allUppercase, $dillonkearns$elm_markdown$HtmlParser$oneOrMoreWhiteSpace)),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr('>')),
		$dillonkearns$elm_markdown$HtmlParser$symbol('>')));
var $dillonkearns$elm_markdown$HtmlParser$ProcessingInstruction = function (a) {
	return {$: 4, a: a};
};
var $dillonkearns$elm_markdown$HtmlParser$processingInstruction = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$HtmlParser$ProcessingInstruction),
		$dillonkearns$elm_markdown$HtmlParser$symbol('<?')),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr('?>')),
		$dillonkearns$elm_markdown$HtmlParser$symbol('?>')));
var $dillonkearns$elm_markdown$HtmlParser$isNotTextNodeIgnoreChar = function (c) {
	switch (c) {
		case '<':
			return false;
		case '&':
			return false;
		default:
			return true;
	}
};
var $dillonkearns$elm_markdown$HtmlParser$textNodeStringStepOptions = _List_fromArray(
	[
		A2(
		$elm$parser$Parser$Advanced$map,
		function (_v0) {
			return $elm$parser$Parser$Advanced$Loop(0);
		},
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$chompIf,
				$dillonkearns$elm_markdown$HtmlParser$isNotTextNodeIgnoreChar,
				$elm$parser$Parser$Expecting('is not & or <')),
			$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$HtmlParser$isNotTextNodeIgnoreChar))),
		A2(
		$elm$parser$Parser$Advanced$map,
		function (_v1) {
			return $elm$parser$Parser$Advanced$Loop(0);
		},
		$dillonkearns$elm_markdown$HtmlParser$escapedChar('<')),
		$elm$parser$Parser$Advanced$succeed(
		$elm$parser$Parser$Advanced$Done(0))
	]);
var $dillonkearns$elm_markdown$HtmlParser$textNodeStringStep = function (_v0) {
	return $elm$parser$Parser$Advanced$oneOf($dillonkearns$elm_markdown$HtmlParser$textNodeStringStepOptions);
};
var $dillonkearns$elm_markdown$HtmlParser$textNodeString = $elm$parser$Parser$Advanced$getChompedString(
	A2($elm$parser$Parser$Advanced$loop, 0, $dillonkearns$elm_markdown$HtmlParser$textNodeStringStep));
var $dillonkearns$elm_markdown$HtmlParser$children = function (startTagName) {
	return A2(
		$elm$parser$Parser$Advanced$loop,
		_List_Nil,
		$dillonkearns$elm_markdown$HtmlParser$childrenStep(
			$dillonkearns$elm_markdown$HtmlParser$childrenStepOptions(startTagName)));
};
var $dillonkearns$elm_markdown$HtmlParser$childrenStepOptions = function (startTagName) {
	return _List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$map,
			F2(
				function (_v1, accum) {
					return $elm$parser$Parser$Advanced$Done(
						$elm$core$List$reverse(accum));
				}),
			$dillonkearns$elm_markdown$HtmlParser$closingTag(startTagName)),
			A2(
			$elm$parser$Parser$Advanced$andThen,
			function (text) {
				return $elm$core$String$isEmpty(text) ? A2(
					$elm$parser$Parser$Advanced$map,
					F2(
						function (_v2, accum) {
							return $elm$parser$Parser$Advanced$Done(
								$elm$core$List$reverse(accum));
						}),
					$dillonkearns$elm_markdown$HtmlParser$closingTag(startTagName)) : $elm$parser$Parser$Advanced$succeed(
					function (accum) {
						return $elm$parser$Parser$Advanced$Loop(
							A2(
								$elm$core$List$cons,
								$dillonkearns$elm_markdown$HtmlParser$Text(text),
								accum));
					});
			},
			$dillonkearns$elm_markdown$HtmlParser$textNodeString),
			A2(
			$elm$parser$Parser$Advanced$map,
			F2(
				function (_new, accum) {
					return $elm$parser$Parser$Advanced$Loop(
						A2($elm$core$List$cons, _new, accum));
				}),
			$dillonkearns$elm_markdown$HtmlParser$cyclic$html())
		]);
};
var $dillonkearns$elm_markdown$HtmlParser$elementContinuation = function (startTagName) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(
					$dillonkearns$elm_markdown$HtmlParser$Element(startTagName)),
				$dillonkearns$elm_markdown$HtmlParser$whiteSpace),
			A2($elm$parser$Parser$Advanced$ignorer, $dillonkearns$elm_markdown$HtmlParser$attributes, $dillonkearns$elm_markdown$HtmlParser$whiteSpace)),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return _List_Nil;
					},
					$dillonkearns$elm_markdown$HtmlParser$symbol('/>')),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$dillonkearns$elm_markdown$HtmlParser$symbol('>')),
					$dillonkearns$elm_markdown$HtmlParser$children(startTagName))
				])));
};
function $dillonkearns$elm_markdown$HtmlParser$cyclic$html() {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2($elm$parser$Parser$Advanced$map, $dillonkearns$elm_markdown$HtmlParser$Cdata, $dillonkearns$elm_markdown$HtmlParser$cdata),
				$dillonkearns$elm_markdown$HtmlParser$processingInstruction,
				$dillonkearns$elm_markdown$HtmlParser$comment,
				$dillonkearns$elm_markdown$HtmlParser$docType,
				$dillonkearns$elm_markdown$HtmlParser$cyclic$element()
			]));
}
function $dillonkearns$elm_markdown$HtmlParser$cyclic$element() {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$dillonkearns$elm_markdown$HtmlParser$symbol('<')),
		A2($elm$parser$Parser$Advanced$andThen, $dillonkearns$elm_markdown$HtmlParser$elementContinuation, $dillonkearns$elm_markdown$HtmlParser$tagName));
}
var $dillonkearns$elm_markdown$HtmlParser$html = $dillonkearns$elm_markdown$HtmlParser$cyclic$html();
$dillonkearns$elm_markdown$HtmlParser$cyclic$html = function () {
	return $dillonkearns$elm_markdown$HtmlParser$html;
};
var $dillonkearns$elm_markdown$HtmlParser$element = $dillonkearns$elm_markdown$HtmlParser$cyclic$element();
$dillonkearns$elm_markdown$HtmlParser$cyclic$element = function () {
	return $dillonkearns$elm_markdown$HtmlParser$element;
};
var $dillonkearns$elm_markdown$Parser$Token$tab = A2(
	$elm$parser$Parser$Advanced$Token,
	'\u0009',
	$elm$parser$Parser$Expecting('a tab'));
var $dillonkearns$elm_markdown$Markdown$Parser$exactlyFourSpaces = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$tab),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$backtrackable(
				$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$space)),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$Advanced$symbol(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'   ',
							$elm$parser$Parser$ExpectingSymbol('Indentation'))),
						$elm$parser$Parser$Advanced$symbol(
						A2(
							$elm$parser$Parser$Advanced$Token,
							' \u0009',
							$elm$parser$Parser$ExpectingSymbol('Indentation'))),
						$elm$parser$Parser$Advanced$symbol(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'  \u0009',
							$elm$parser$Parser$ExpectingSymbol('Indentation')))
					])))
		]));
var $dillonkearns$elm_markdown$Markdown$Parser$indentedCodeBlock = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock),
		$dillonkearns$elm_markdown$Markdown$Parser$exactlyFourSpaces),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
		$dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
var $dillonkearns$elm_markdown$Markdown$Helpers$isEven = function (_int) {
	return !A2($elm$core$Basics$modBy, 2, _int);
};
var $dillonkearns$elm_markdown$Markdown$Block$Loose = 0;
var $dillonkearns$elm_markdown$Markdown$Block$Tight = 1;
var $dillonkearns$elm_markdown$Markdown$Parser$isTightBoolToListDisplay = function (isTight) {
	return isTight ? 1 : 0;
};
var $dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith = F3(
	function (joinWith, string1, string2) {
		var _v0 = _Utils_Tuple2(string1, string2);
		if (_v0.a === '') {
			return string2;
		} else {
			if (_v0.b === '') {
				return string1;
			} else {
				return _Utils_ap(
					string1,
					_Utils_ap(joinWith, string2));
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll = F2(
	function (string1, string2) {
		return string1 + ('\u000A' + string2);
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $dillonkearns$elm_markdown$Markdown$Parser$innerParagraphParser = A2(
	$elm$parser$Parser$Advanced$mapChompedString,
	F2(
		function (rawLine, _v0) {
			return $dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(rawLine);
		}),
	$dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd);
var $dillonkearns$elm_markdown$Markdown$Parser$openBlockOrParagraphParser = A2($elm$parser$Parser$Advanced$ignorer, $dillonkearns$elm_markdown$Markdown$Parser$innerParagraphParser, $dillonkearns$elm_markdown$Helpers$lineEndOrEnd);
var $dillonkearns$elm_markdown$Markdown$OrderedList$ListItem = F4(
	function (order, intended, marker, body) {
		return {dM: body, eq: intended, ez: marker, c1: order};
	});
var $elm$parser$Parser$Advanced$getCol = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.cv, s);
};
var $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListEmptyItemParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	$elm$parser$Parser$Advanced$succeed(
		function (bodyStartPos) {
			return _Utils_Tuple2(bodyStartPos, '');
		}),
	A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$getCol, $dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
var $dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore = function (condition) {
	return A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$chompIf,
			condition,
			$elm$parser$Parser$Problem('Expected one or more character')),
		$elm$parser$Parser$Advanced$chompWhile(condition));
};
var $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListItemBodyParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(
				F2(
					function (bodyStartPos, item) {
						return _Utils_Tuple2(bodyStartPos, item);
					})),
			$dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab)),
		$elm$parser$Parser$Advanced$getCol),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
		$dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
var $dillonkearns$elm_markdown$Markdown$OrderedList$Dot = 0;
var $dillonkearns$elm_markdown$Markdown$OrderedList$Paren = 1;
var $dillonkearns$elm_markdown$Parser$Token$closingParen = A2(
	$elm$parser$Parser$Advanced$Token,
	')',
	$elm$parser$Parser$Expecting('a `)`'));
var $dillonkearns$elm_markdown$Parser$Token$dot = A2(
	$elm$parser$Parser$Advanced$Token,
	'.',
	$elm$parser$Parser$Expecting('a `.`'));
var $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListMarkerParser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(0),
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$dot)),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(1),
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$closingParen))
		]));
var $dillonkearns$elm_markdown$Parser$Extra$positiveInteger = A2(
	$elm$parser$Parser$Advanced$mapChompedString,
	F2(
		function (str, _v0) {
			return A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(str));
		}),
	$dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore($elm$core$Char$isDigit));
var $dillonkearns$elm_markdown$Markdown$OrderedList$positiveIntegerMaxOf9Digits = A2(
	$elm$parser$Parser$Advanced$andThen,
	function (parsed) {
		return (parsed <= 999999999) ? $elm$parser$Parser$Advanced$succeed(parsed) : $elm$parser$Parser$Advanced$problem(
			$elm$parser$Parser$Problem('Starting numbers must be nine digits or less.'));
	},
	$dillonkearns$elm_markdown$Parser$Extra$positiveInteger);
var $dillonkearns$elm_markdown$Whitespace$space = $elm$parser$Parser$Advanced$token($dillonkearns$elm_markdown$Parser$Token$space);
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $dillonkearns$elm_markdown$Parser$Extra$upTo = F2(
	function (n, parser) {
		var _v0 = A2($elm$core$List$repeat, n, parser);
		if (!_v0.b) {
			return $elm$parser$Parser$Advanced$succeed(0);
		} else {
			var firstParser = _v0.a;
			var remainingParsers = _v0.b;
			return A3(
				$elm$core$List$foldl,
				F2(
					function (p, parsers) {
						return $elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[
									A2($elm$parser$Parser$Advanced$ignorer, p, parsers),
									$elm$parser$Parser$Advanced$succeed(0)
								]));
					}),
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							firstParser,
							$elm$parser$Parser$Advanced$succeed(0)
						])),
				remainingParsers);
		}
	});
var $dillonkearns$elm_markdown$Markdown$OrderedList$validateStartsWith1 = function (parsed) {
	if (parsed === 1) {
		return $elm$parser$Parser$Advanced$succeed(parsed);
	} else {
		return $elm$parser$Parser$Advanced$problem(
			$elm$parser$Parser$Problem('Lists inside a paragraph or after a paragraph without a blank line must start with 1'));
	}
};
var $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListOrderParser = function (previousWasBody) {
	return previousWasBody ? A2(
		$elm$parser$Parser$Advanced$andThen,
		$dillonkearns$elm_markdown$Markdown$OrderedList$validateStartsWith1,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				A2($dillonkearns$elm_markdown$Parser$Extra$upTo, 3, $dillonkearns$elm_markdown$Whitespace$space)),
			$dillonkearns$elm_markdown$Markdown$OrderedList$positiveIntegerMaxOf9Digits)) : A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			A2($dillonkearns$elm_markdown$Parser$Extra$upTo, 3, $dillonkearns$elm_markdown$Whitespace$space)),
		$dillonkearns$elm_markdown$Markdown$OrderedList$positiveIntegerMaxOf9Digits);
};
var $dillonkearns$elm_markdown$Markdown$OrderedList$parser = function (previousWasBody) {
	var parseSubsequentItem = F5(
		function (start, order, marker, mid, _v0) {
			var end = _v0.a;
			var body = _v0.b;
			return ((end - mid) <= 4) ? A4($dillonkearns$elm_markdown$Markdown$OrderedList$ListItem, order, end - start, marker, body) : A4(
				$dillonkearns$elm_markdown$Markdown$OrderedList$ListItem,
				order,
				(mid - start) + 1,
				marker,
				_Utils_ap(
					A2($elm$core$String$repeat, (end - mid) - 1, ' '),
					body));
		});
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed(parseSubsequentItem),
						$elm$parser$Parser$Advanced$getCol),
					$elm$parser$Parser$Advanced$backtrackable(
						$dillonkearns$elm_markdown$Markdown$OrderedList$orderedListOrderParser(previousWasBody))),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$OrderedList$orderedListMarkerParser)),
			$elm$parser$Parser$Advanced$getCol),
		previousWasBody ? $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListItemBodyParser : $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[$dillonkearns$elm_markdown$Markdown$OrderedList$orderedListEmptyItemParser, $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListItemBodyParser])));
};
var $dillonkearns$elm_markdown$Markdown$Parser$orderedListBlock = function (previousWasBody) {
	return A2(
		$elm$parser$Parser$Advanced$map,
		function (item) {
			return A6($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock, true, item.eq, item.ez, item.c1, _List_Nil, item.dM);
		},
		$dillonkearns$elm_markdown$Markdown$OrderedList$parser(previousWasBody));
};
var $dillonkearns$elm_markdown$Markdown$Inline$CodeInline = function (a) {
	return {$: 2, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Inline$HardLineBreak = {$: 1};
var $dillonkearns$elm_markdown$Markdown$Inline$HtmlInline = function (a) {
	return {$: 5, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Inline$Image = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Inline$Link = F3(
	function (a, b, c) {
		return {$: 3, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Inline$Strikethrough = function (a) {
	return {$: 7, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Inline$Text = function (a) {
	return {$: 0, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$matchToInline = function (_v0) {
	var match = _v0;
	var _v1 = match.r;
	switch (_v1.$) {
		case 0:
			return $dillonkearns$elm_markdown$Markdown$Inline$Text(match.ck);
		case 1:
			return $dillonkearns$elm_markdown$Markdown$Inline$HardLineBreak;
		case 2:
			return $dillonkearns$elm_markdown$Markdown$Inline$CodeInline(match.ck);
		case 3:
			var _v2 = _v1.a;
			var text = _v2.a;
			var url = _v2.b;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Inline$Link,
				url,
				$elm$core$Maybe$Nothing,
				_List_fromArray(
					[
						$dillonkearns$elm_markdown$Markdown$Inline$Text(text)
					]));
		case 4:
			var _v3 = _v1.a;
			var url = _v3.a;
			var maybeTitle = _v3.b;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Inline$Link,
				url,
				maybeTitle,
				$dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.z));
		case 5:
			var _v4 = _v1.a;
			var url = _v4.a;
			var maybeTitle = _v4.b;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Inline$Image,
				url,
				maybeTitle,
				$dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.z));
		case 6:
			var model = _v1.a;
			return $dillonkearns$elm_markdown$Markdown$Inline$HtmlInline(model);
		case 7:
			var length = _v1.a;
			return A2(
				$dillonkearns$elm_markdown$Markdown$Inline$Emphasis,
				length,
				$dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.z));
		default:
			return $dillonkearns$elm_markdown$Markdown$Inline$Strikethrough(
				$dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.z));
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines = function (matches) {
	return A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$InlineParser$matchToInline, matches);
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$Match = $elm$core$Basics$identity;
var $dillonkearns$elm_markdown$Markdown$InlineParser$prepareChildMatch = F2(
	function (parentMatch, childMatch) {
		return {k: childMatch.k - parentMatch.C, z: childMatch.z, n: childMatch.n - parentMatch.C, ck: childMatch.ck, P: childMatch.P - parentMatch.C, C: childMatch.C - parentMatch.C, r: childMatch.r};
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$addChild = F2(
	function (parentMatch, childMatch) {
		return {
			k: parentMatch.k,
			z: A2(
				$elm$core$List$cons,
				A2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareChildMatch, parentMatch, childMatch),
				parentMatch.z),
			n: parentMatch.n,
			ck: parentMatch.ck,
			P: parentMatch.P,
			C: parentMatch.C,
			r: parentMatch.r
		};
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$organizeChildren = function (_v4) {
	var match = _v4;
	return {
		k: match.k,
		z: $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatches(match.z),
		n: match.n,
		ck: match.ck,
		P: match.P,
		C: match.C,
		r: match.r
	};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatches = function (matches) {
	var _v2 = A2(
		$elm$core$List$sortBy,
		function (_v3) {
			var match = _v3;
			return match.n;
		},
		matches);
	if (!_v2.b) {
		return _List_Nil;
	} else {
		var first = _v2.a;
		var rest = _v2.b;
		return A3($dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatchesHelp, rest, first, _List_Nil);
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatchesHelp = F3(
	function (remaining, _v0, matchesTail) {
		organizeMatchesHelp:
		while (true) {
			var prevMatch = _v0;
			if (!remaining.b) {
				return A2(
					$elm$core$List$cons,
					$dillonkearns$elm_markdown$Markdown$InlineParser$organizeChildren(prevMatch),
					matchesTail);
			} else {
				var match = remaining.a;
				var rest = remaining.b;
				if (_Utils_cmp(prevMatch.k, match.n) < 1) {
					var $temp$remaining = rest,
						$temp$_v0 = match,
						$temp$matchesTail = A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$InlineParser$organizeChildren(prevMatch),
						matchesTail);
					remaining = $temp$remaining;
					_v0 = $temp$_v0;
					matchesTail = $temp$matchesTail;
					continue organizeMatchesHelp;
				} else {
					if ((_Utils_cmp(prevMatch.n, match.n) < 0) && (_Utils_cmp(prevMatch.k, match.k) > 0)) {
						var $temp$remaining = rest,
							$temp$_v0 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$addChild, prevMatch, match),
							$temp$matchesTail = matchesTail;
						remaining = $temp$remaining;
						_v0 = $temp$_v0;
						matchesTail = $temp$matchesTail;
						continue organizeMatchesHelp;
					} else {
						var $temp$remaining = rest,
							$temp$_v0 = prevMatch,
							$temp$matchesTail = matchesTail;
						remaining = $temp$remaining;
						_v0 = $temp$_v0;
						matchesTail = $temp$matchesTail;
						continue organizeMatchesHelp;
					}
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$NormalType = {$: 0};
var $dillonkearns$elm_markdown$Markdown$Helpers$containsAmpersand = function (string) {
	return A2($elm$core$String$contains, '&', string);
};
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {eo: index, bj: match, eN: number, ci: submatches};
	});
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{dR: false, eE: false},
		string);
};
var $elm$regex$Regex$never = _Regex_never;
var $dillonkearns$elm_markdown$Markdown$Entity$decimalRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('&#([0-9]{1,8});'));
var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var $dillonkearns$elm_markdown$Markdown$Entity$isBadEndUnicode = function (_int) {
	var remain_ = A2($elm$core$Basics$modBy, 16, _int);
	var remain = A2($elm$core$Basics$modBy, 131070, _int);
	return (_int >= 131070) && ((((0 <= remain) && (remain <= 15)) || ((65536 <= remain) && (remain <= 65551))) && ((remain_ === 14) || (remain_ === 15)));
};
var $dillonkearns$elm_markdown$Markdown$Entity$isValidUnicode = function (_int) {
	return (_int === 9) || ((_int === 10) || ((_int === 13) || ((_int === 133) || (((32 <= _int) && (_int <= 126)) || (((160 <= _int) && (_int <= 55295)) || (((57344 <= _int) && (_int <= 64975)) || (((65008 <= _int) && (_int <= 65533)) || ((65536 <= _int) && (_int <= 1114109)))))))));
};
var $dillonkearns$elm_markdown$Markdown$Entity$validUnicode = function (_int) {
	return ($dillonkearns$elm_markdown$Markdown$Entity$isValidUnicode(_int) && (!$dillonkearns$elm_markdown$Markdown$Entity$isBadEndUnicode(_int))) ? $elm$core$String$fromChar(
		$elm$core$Char$fromCode(_int)) : $elm$core$String$fromChar(
		$elm$core$Char$fromCode(65533));
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceDecimal = function (match) {
	var _v0 = match.ci;
	if (_v0.b && (!_v0.a.$)) {
		var first = _v0.a.a;
		var _v1 = $elm$core$String$toInt(first);
		if (!_v1.$) {
			var v = _v1.a;
			return $dillonkearns$elm_markdown$Markdown$Entity$validUnicode(v);
		} else {
			return match.bj;
		}
	} else {
		return match.bj;
	}
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceDecimals = A2($elm$regex$Regex$replace, $dillonkearns$elm_markdown$Markdown$Entity$decimalRegex, $dillonkearns$elm_markdown$Markdown$Entity$replaceDecimal);
var $dillonkearns$elm_markdown$Markdown$Entity$entitiesRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('&([0-9a-zA-Z]+);'));
var $dillonkearns$elm_markdown$Markdown$Entity$entities = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('quot', 34),
			_Utils_Tuple2('amp', 38),
			_Utils_Tuple2('apos', 39),
			_Utils_Tuple2('lt', 60),
			_Utils_Tuple2('gt', 62),
			_Utils_Tuple2('nbsp', 160),
			_Utils_Tuple2('iexcl', 161),
			_Utils_Tuple2('cent', 162),
			_Utils_Tuple2('pound', 163),
			_Utils_Tuple2('curren', 164),
			_Utils_Tuple2('yen', 165),
			_Utils_Tuple2('brvbar', 166),
			_Utils_Tuple2('sect', 167),
			_Utils_Tuple2('uml', 168),
			_Utils_Tuple2('copy', 169),
			_Utils_Tuple2('ordf', 170),
			_Utils_Tuple2('laquo', 171),
			_Utils_Tuple2('not', 172),
			_Utils_Tuple2('shy', 173),
			_Utils_Tuple2('reg', 174),
			_Utils_Tuple2('macr', 175),
			_Utils_Tuple2('deg', 176),
			_Utils_Tuple2('plusmn', 177),
			_Utils_Tuple2('sup2', 178),
			_Utils_Tuple2('sup3', 179),
			_Utils_Tuple2('acute', 180),
			_Utils_Tuple2('micro', 181),
			_Utils_Tuple2('para', 182),
			_Utils_Tuple2('middot', 183),
			_Utils_Tuple2('cedil', 184),
			_Utils_Tuple2('sup1', 185),
			_Utils_Tuple2('ordm', 186),
			_Utils_Tuple2('raquo', 187),
			_Utils_Tuple2('frac14', 188),
			_Utils_Tuple2('frac12', 189),
			_Utils_Tuple2('frac34', 190),
			_Utils_Tuple2('iquest', 191),
			_Utils_Tuple2('Agrave', 192),
			_Utils_Tuple2('Aacute', 193),
			_Utils_Tuple2('Acirc', 194),
			_Utils_Tuple2('Atilde', 195),
			_Utils_Tuple2('Auml', 196),
			_Utils_Tuple2('Aring', 197),
			_Utils_Tuple2('AElig', 198),
			_Utils_Tuple2('Ccedil', 199),
			_Utils_Tuple2('Egrave', 200),
			_Utils_Tuple2('Eacute', 201),
			_Utils_Tuple2('Ecirc', 202),
			_Utils_Tuple2('Euml', 203),
			_Utils_Tuple2('Igrave', 204),
			_Utils_Tuple2('Iacute', 205),
			_Utils_Tuple2('Icirc', 206),
			_Utils_Tuple2('Iuml', 207),
			_Utils_Tuple2('ETH', 208),
			_Utils_Tuple2('Ntilde', 209),
			_Utils_Tuple2('Ograve', 210),
			_Utils_Tuple2('Oacute', 211),
			_Utils_Tuple2('Ocirc', 212),
			_Utils_Tuple2('Otilde', 213),
			_Utils_Tuple2('Ouml', 214),
			_Utils_Tuple2('times', 215),
			_Utils_Tuple2('Oslash', 216),
			_Utils_Tuple2('Ugrave', 217),
			_Utils_Tuple2('Uacute', 218),
			_Utils_Tuple2('Ucirc', 219),
			_Utils_Tuple2('Uuml', 220),
			_Utils_Tuple2('Yacute', 221),
			_Utils_Tuple2('THORN', 222),
			_Utils_Tuple2('szlig', 223),
			_Utils_Tuple2('agrave', 224),
			_Utils_Tuple2('aacute', 225),
			_Utils_Tuple2('acirc', 226),
			_Utils_Tuple2('atilde', 227),
			_Utils_Tuple2('auml', 228),
			_Utils_Tuple2('aring', 229),
			_Utils_Tuple2('aelig', 230),
			_Utils_Tuple2('ccedil', 231),
			_Utils_Tuple2('egrave', 232),
			_Utils_Tuple2('eacute', 233),
			_Utils_Tuple2('ecirc', 234),
			_Utils_Tuple2('euml', 235),
			_Utils_Tuple2('igrave', 236),
			_Utils_Tuple2('iacute', 237),
			_Utils_Tuple2('icirc', 238),
			_Utils_Tuple2('iuml', 239),
			_Utils_Tuple2('eth', 240),
			_Utils_Tuple2('ntilde', 241),
			_Utils_Tuple2('ograve', 242),
			_Utils_Tuple2('oacute', 243),
			_Utils_Tuple2('ocirc', 244),
			_Utils_Tuple2('otilde', 245),
			_Utils_Tuple2('ouml', 246),
			_Utils_Tuple2('divide', 247),
			_Utils_Tuple2('oslash', 248),
			_Utils_Tuple2('ugrave', 249),
			_Utils_Tuple2('uacute', 250),
			_Utils_Tuple2('ucirc', 251),
			_Utils_Tuple2('uuml', 252),
			_Utils_Tuple2('yacute', 253),
			_Utils_Tuple2('thorn', 254),
			_Utils_Tuple2('yuml', 255),
			_Utils_Tuple2('OElig', 338),
			_Utils_Tuple2('oelig', 339),
			_Utils_Tuple2('Scaron', 352),
			_Utils_Tuple2('scaron', 353),
			_Utils_Tuple2('Yuml', 376),
			_Utils_Tuple2('fnof', 402),
			_Utils_Tuple2('circ', 710),
			_Utils_Tuple2('tilde', 732),
			_Utils_Tuple2('Alpha', 913),
			_Utils_Tuple2('Beta', 914),
			_Utils_Tuple2('Gamma', 915),
			_Utils_Tuple2('Delta', 916),
			_Utils_Tuple2('Epsilon', 917),
			_Utils_Tuple2('Zeta', 918),
			_Utils_Tuple2('Eta', 919),
			_Utils_Tuple2('Theta', 920),
			_Utils_Tuple2('Iota', 921),
			_Utils_Tuple2('Kappa', 922),
			_Utils_Tuple2('Lambda', 923),
			_Utils_Tuple2('Mu', 924),
			_Utils_Tuple2('Nu', 925),
			_Utils_Tuple2('Xi', 926),
			_Utils_Tuple2('Omicron', 927),
			_Utils_Tuple2('Pi', 928),
			_Utils_Tuple2('Rho', 929),
			_Utils_Tuple2('Sigma', 931),
			_Utils_Tuple2('Tau', 932),
			_Utils_Tuple2('Upsilon', 933),
			_Utils_Tuple2('Phi', 934),
			_Utils_Tuple2('Chi', 935),
			_Utils_Tuple2('Psi', 936),
			_Utils_Tuple2('Omega', 937),
			_Utils_Tuple2('alpha', 945),
			_Utils_Tuple2('beta', 946),
			_Utils_Tuple2('gamma', 947),
			_Utils_Tuple2('delta', 948),
			_Utils_Tuple2('epsilon', 949),
			_Utils_Tuple2('zeta', 950),
			_Utils_Tuple2('eta', 951),
			_Utils_Tuple2('theta', 952),
			_Utils_Tuple2('iota', 953),
			_Utils_Tuple2('kappa', 954),
			_Utils_Tuple2('lambda', 955),
			_Utils_Tuple2('mu', 956),
			_Utils_Tuple2('nu', 957),
			_Utils_Tuple2('xi', 958),
			_Utils_Tuple2('omicron', 959),
			_Utils_Tuple2('pi', 960),
			_Utils_Tuple2('rho', 961),
			_Utils_Tuple2('sigmaf', 962),
			_Utils_Tuple2('sigma', 963),
			_Utils_Tuple2('tau', 964),
			_Utils_Tuple2('upsilon', 965),
			_Utils_Tuple2('phi', 966),
			_Utils_Tuple2('chi', 967),
			_Utils_Tuple2('psi', 968),
			_Utils_Tuple2('omega', 969),
			_Utils_Tuple2('thetasym', 977),
			_Utils_Tuple2('upsih', 978),
			_Utils_Tuple2('piv', 982),
			_Utils_Tuple2('ensp', 8194),
			_Utils_Tuple2('emsp', 8195),
			_Utils_Tuple2('thinsp', 8201),
			_Utils_Tuple2('zwnj', 8204),
			_Utils_Tuple2('zwj', 8205),
			_Utils_Tuple2('lrm', 8206),
			_Utils_Tuple2('rlm', 8207),
			_Utils_Tuple2('ndash', 8211),
			_Utils_Tuple2('mdash', 8212),
			_Utils_Tuple2('lsquo', 8216),
			_Utils_Tuple2('rsquo', 8217),
			_Utils_Tuple2('sbquo', 8218),
			_Utils_Tuple2('ldquo', 8220),
			_Utils_Tuple2('rdquo', 8221),
			_Utils_Tuple2('bdquo', 8222),
			_Utils_Tuple2('dagger', 8224),
			_Utils_Tuple2('Dagger', 8225),
			_Utils_Tuple2('bull', 8226),
			_Utils_Tuple2('hellip', 8230),
			_Utils_Tuple2('permil', 8240),
			_Utils_Tuple2('prime', 8242),
			_Utils_Tuple2('Prime', 8243),
			_Utils_Tuple2('lsaquo', 8249),
			_Utils_Tuple2('rsaquo', 8250),
			_Utils_Tuple2('oline', 8254),
			_Utils_Tuple2('frasl', 8260),
			_Utils_Tuple2('euro', 8364),
			_Utils_Tuple2('image', 8465),
			_Utils_Tuple2('weierp', 8472),
			_Utils_Tuple2('real', 8476),
			_Utils_Tuple2('trade', 8482),
			_Utils_Tuple2('alefsym', 8501),
			_Utils_Tuple2('larr', 8592),
			_Utils_Tuple2('uarr', 8593),
			_Utils_Tuple2('rarr', 8594),
			_Utils_Tuple2('darr', 8595),
			_Utils_Tuple2('harr', 8596),
			_Utils_Tuple2('crarr', 8629),
			_Utils_Tuple2('lArr', 8656),
			_Utils_Tuple2('uArr', 8657),
			_Utils_Tuple2('rArr', 8658),
			_Utils_Tuple2('dArr', 8659),
			_Utils_Tuple2('hArr', 8660),
			_Utils_Tuple2('forall', 8704),
			_Utils_Tuple2('part', 8706),
			_Utils_Tuple2('exist', 8707),
			_Utils_Tuple2('empty', 8709),
			_Utils_Tuple2('nabla', 8711),
			_Utils_Tuple2('isin', 8712),
			_Utils_Tuple2('notin', 8713),
			_Utils_Tuple2('ni', 8715),
			_Utils_Tuple2('prod', 8719),
			_Utils_Tuple2('sum', 8721),
			_Utils_Tuple2('minus', 8722),
			_Utils_Tuple2('lowast', 8727),
			_Utils_Tuple2('radic', 8730),
			_Utils_Tuple2('prop', 8733),
			_Utils_Tuple2('infin', 8734),
			_Utils_Tuple2('ang', 8736),
			_Utils_Tuple2('and', 8743),
			_Utils_Tuple2('or', 8744),
			_Utils_Tuple2('cap', 8745),
			_Utils_Tuple2('cup', 8746),
			_Utils_Tuple2('int', 8747),
			_Utils_Tuple2('there4', 8756),
			_Utils_Tuple2('sim', 8764),
			_Utils_Tuple2('cong', 8773),
			_Utils_Tuple2('asymp', 8776),
			_Utils_Tuple2('ne', 8800),
			_Utils_Tuple2('equiv', 8801),
			_Utils_Tuple2('le', 8804),
			_Utils_Tuple2('ge', 8805),
			_Utils_Tuple2('sub', 8834),
			_Utils_Tuple2('sup', 8835),
			_Utils_Tuple2('nsub', 8836),
			_Utils_Tuple2('sube', 8838),
			_Utils_Tuple2('supe', 8839),
			_Utils_Tuple2('oplus', 8853),
			_Utils_Tuple2('otimes', 8855),
			_Utils_Tuple2('perp', 8869),
			_Utils_Tuple2('sdot', 8901),
			_Utils_Tuple2('lceil', 8968),
			_Utils_Tuple2('rceil', 8969),
			_Utils_Tuple2('lfloor', 8970),
			_Utils_Tuple2('rfloor', 8971),
			_Utils_Tuple2('lang', 9001),
			_Utils_Tuple2('rang', 9002),
			_Utils_Tuple2('loz', 9674),
			_Utils_Tuple2('spades', 9824),
			_Utils_Tuple2('clubs', 9827),
			_Utils_Tuple2('hearts', 9829),
			_Utils_Tuple2('diams', 9830)
		]));
var $dillonkearns$elm_markdown$Markdown$Entity$replaceEntity = function (match) {
	var _v0 = match.ci;
	if (_v0.b && (!_v0.a.$)) {
		var first = _v0.a.a;
		var _v1 = A2($elm$core$Dict$get, first, $dillonkearns$elm_markdown$Markdown$Entity$entities);
		if (!_v1.$) {
			var code = _v1.a;
			return $elm$core$String$fromChar(
				$elm$core$Char$fromCode(code));
		} else {
			return match.bj;
		}
	} else {
		return match.bj;
	}
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceEntities = A2($elm$regex$Regex$replace, $dillonkearns$elm_markdown$Markdown$Entity$entitiesRegex, $dillonkearns$elm_markdown$Markdown$Entity$replaceEntity);
var $dillonkearns$elm_markdown$Markdown$Helpers$escapableRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\u005C\u005C+)([!\u0022#$%&\u005C\u0027()*+,./:;<=>?@[\u005C\u005C\u005C]^_`{|}~-])'));
var $dillonkearns$elm_markdown$Markdown$Helpers$replaceEscapable = A2(
	$elm$regex$Regex$replace,
	$dillonkearns$elm_markdown$Markdown$Helpers$escapableRegex,
	function (regexMatch) {
		var _v0 = regexMatch.ci;
		if (((_v0.b && (!_v0.a.$)) && _v0.b.b) && (!_v0.b.a.$)) {
			var backslashes = _v0.a.a;
			var _v1 = _v0.b;
			var escapedStr = _v1.a.a;
			return _Utils_ap(
				A2(
					$elm$core$String$repeat,
					($elm$core$String$length(backslashes) / 2) | 0,
					'\u005C'),
				escapedStr);
		} else {
			return regexMatch.bj;
		}
	});
var $dillonkearns$elm_markdown$Markdown$Entity$hexadecimalRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('&#[Xx]([0-9a-fA-F]{1,8});'));
var $dillonkearns$elm_markdown$Markdown$Entity$hexToInt = function (string) {
	var folder = F2(
		function (hexDigit, _int) {
			return ((_int * 16) + A2(
				$elm$core$Basics$modBy,
				39,
				$elm$core$Char$toCode(hexDigit))) - 9;
		});
	return A3(
		$elm$core$String$foldl,
		folder,
		0,
		$elm$core$String$toLower(string));
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimal = function (match) {
	var _v0 = match.ci;
	if (_v0.b && (!_v0.a.$)) {
		var first = _v0.a.a;
		return $dillonkearns$elm_markdown$Markdown$Entity$validUnicode(
			$dillonkearns$elm_markdown$Markdown$Entity$hexToInt(first));
	} else {
		return match.bj;
	}
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimals = A2($elm$regex$Regex$replace, $dillonkearns$elm_markdown$Markdown$Entity$hexadecimalRegex, $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimal);
var $dillonkearns$elm_markdown$Markdown$Helpers$formatStr = function (str) {
	var withEscapes = $dillonkearns$elm_markdown$Markdown$Helpers$replaceEscapable(str);
	return $dillonkearns$elm_markdown$Markdown$Helpers$containsAmpersand(withEscapes) ? $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimals(
		$dillonkearns$elm_markdown$Markdown$Entity$replaceDecimals(
			$dillonkearns$elm_markdown$Markdown$Entity$replaceEntities(withEscapes))) : withEscapes;
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch = function (text) {
	return {
		k: 0,
		z: _List_Nil,
		n: 0,
		ck: $dillonkearns$elm_markdown$Markdown$Helpers$formatStr(text),
		P: 0,
		C: 0,
		r: $dillonkearns$elm_markdown$Markdown$InlineParser$NormalType
	};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatch = F3(
	function (rawText, _v2, parsedMatches) {
		var matchModel = _v2;
		var updtMatch = {
			k: matchModel.k,
			z: A3($dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatches, matchModel.ck, _List_Nil, matchModel.z),
			n: matchModel.n,
			ck: matchModel.ck,
			P: matchModel.P,
			C: matchModel.C,
			r: matchModel.r
		};
		if (!parsedMatches.b) {
			var finalStr = A2($elm$core$String$dropLeft, matchModel.k, rawText);
			return $elm$core$String$isEmpty(finalStr) ? _List_fromArray(
				[updtMatch]) : _List_fromArray(
				[
					updtMatch,
					$dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(finalStr)
				]);
		} else {
			var matchHead = parsedMatches.a;
			var _v4 = matchHead.r;
			if (!_v4.$) {
				return A2($elm$core$List$cons, updtMatch, parsedMatches);
			} else {
				return _Utils_eq(matchModel.k, matchHead.n) ? A2($elm$core$List$cons, updtMatch, parsedMatches) : ((_Utils_cmp(matchModel.k, matchHead.n) < 0) ? A2(
					$elm$core$List$cons,
					updtMatch,
					A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(
							A3($elm$core$String$slice, matchModel.k, matchHead.n, rawText)),
						parsedMatches)) : parsedMatches);
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatches = F3(
	function (rawText, parsedMatches, matches) {
		parseTextMatches:
		while (true) {
			if (!matches.b) {
				if (!parsedMatches.b) {
					return $elm$core$String$isEmpty(rawText) ? _List_Nil : _List_fromArray(
						[
							$dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(rawText)
						]);
				} else {
					var matchModel = parsedMatches.a;
					return (matchModel.n > 0) ? A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(
							A2($elm$core$String$left, matchModel.n, rawText)),
						parsedMatches) : parsedMatches;
				}
			} else {
				var match = matches.a;
				var matchesTail = matches.b;
				var $temp$rawText = rawText,
					$temp$parsedMatches = A3($dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatch, rawText, match, parsedMatches),
					$temp$matches = matchesTail;
				rawText = $temp$rawText;
				parsedMatches = $temp$parsedMatches;
				matches = $temp$matches;
				continue parseTextMatches;
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$cleanAngleBracketTokens = F3(
	function (tokensL, tokensR, countL) {
		cleanAngleBracketTokens:
		while (true) {
			if (!tokensR.b) {
				return _List_Nil;
			} else {
				var hd1 = tokensR.a;
				var rest1 = tokensR.b;
				if (!tokensL.b) {
					if (countL > 1) {
						var $temp$tokensL = tokensL,
							$temp$tokensR = rest1,
							$temp$countL = countL - 1;
						tokensL = $temp$tokensL;
						tokensR = $temp$tokensR;
						countL = $temp$countL;
						continue cleanAngleBracketTokens;
					} else {
						if (countL === 1) {
							return A2(
								$elm$core$List$cons,
								hd1,
								A3($dillonkearns$elm_markdown$Markdown$InlineParser$cleanAngleBracketTokens, tokensL, rest1, countL - 1));
						} else {
							var $temp$tokensL = tokensL,
								$temp$tokensR = rest1,
								$temp$countL = 0;
							tokensL = $temp$tokensL;
							tokensR = $temp$tokensR;
							countL = $temp$countL;
							continue cleanAngleBracketTokens;
						}
					}
				} else {
					var hd = tokensL.a;
					var rest = tokensL.b;
					if (_Utils_cmp(hd.eo, hd1.eo) < 0) {
						if (!countL) {
							return A2(
								$elm$core$List$cons,
								hd,
								A3($dillonkearns$elm_markdown$Markdown$InlineParser$cleanAngleBracketTokens, rest, tokensR, countL + 1));
						} else {
							var $temp$tokensL = rest,
								$temp$tokensR = tokensR,
								$temp$countL = countL + 1;
							tokensL = $temp$tokensL;
							tokensR = $temp$tokensR;
							countL = $temp$countL;
							continue cleanAngleBracketTokens;
						}
					} else {
						if (countL > 1) {
							var $temp$tokensL = tokensL,
								$temp$tokensR = rest1,
								$temp$countL = countL - 1;
							tokensL = $temp$tokensL;
							tokensR = $temp$tokensR;
							countL = $temp$countL;
							continue cleanAngleBracketTokens;
						} else {
							if (countL === 1) {
								return A2(
									$elm$core$List$cons,
									hd1,
									A3($dillonkearns$elm_markdown$Markdown$InlineParser$cleanAngleBracketTokens, tokensL, rest1, countL - 1));
							} else {
								var $temp$tokensL = tokensL,
									$temp$tokensR = rest1,
									$temp$countL = 0;
								tokensL = $temp$tokensL;
								tokensR = $temp$tokensR;
								countL = $temp$countL;
								continue cleanAngleBracketTokens;
							}
						}
					}
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketLTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\u005C\u005C*)(\u005C<)'));
var $elm$regex$Regex$find = _Regex_findAtMost(_Regex_infinity);
var $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketOpen = {$: 4};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketLToken = function (regMatch) {
	var _v0 = regMatch.ci;
	if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just(
			{eo: regMatch.eo + backslashesLength, b5: 1, g: $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketOpen}) : $elm$core$Maybe$Nothing;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketLTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketLToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketLTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketRTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\u005C\u005C*)(\u005C>)'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketClose = function (a) {
	return {$: 5, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$Escaped = 0;
var $dillonkearns$elm_markdown$Markdown$InlineParser$NotEscaped = 1;
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketRToken = function (regMatch) {
	var _v0 = regMatch.ci;
	if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		return $elm$core$Maybe$Just(
			{
				eo: regMatch.eo + backslashesLength,
				b5: 1,
				g: $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketClose(1) : $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketClose(0)
			});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketRTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketRToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketRTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$asteriskEmphasisTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\u005C\u005C*)([^*])?(\u005C*+)([^*])?'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisToken = F2(
	function (a, b) {
		return {$: 7, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$isPunctuation = function (c) {
	switch (c) {
		case '!':
			return true;
		case '"':
			return true;
		case '#':
			return true;
		case '%':
			return true;
		case '&':
			return true;
		case '\'':
			return true;
		case '(':
			return true;
		case ')':
			return true;
		case '*':
			return true;
		case ',':
			return true;
		case '-':
			return true;
		case '.':
			return true;
		case '/':
			return true;
		case ':':
			return true;
		case ';':
			return true;
		case '?':
			return true;
		case '@':
			return true;
		case '[':
			return true;
		case ']':
			return true;
		case '_':
			return true;
		case '{':
			return true;
		case '}':
			return true;
		case '~':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$containPunctuation = A2(
	$elm$core$String$foldl,
	F2(
		function (c, accum) {
			return accum || $dillonkearns$elm_markdown$Markdown$InlineParser$isPunctuation(c);
		}),
	false);
var $dillonkearns$elm_markdown$Markdown$InlineParser$isWhitespace = function (c) {
	switch (c) {
		case ' ':
			return true;
		case '\f':
			return true;
		case '\n':
			return true;
		case '\r':
			return true;
		case '\t':
			return true;
		case '\u000b':
			return true;
		case ' ':
			return true;
		case ' ':
			return true;
		case ' ':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$containSpace = A2(
	$elm$core$String$foldl,
	F2(
		function (c, accum) {
			return accum || $dillonkearns$elm_markdown$Markdown$InlineParser$isWhitespace(c);
		}),
	false);
var $dillonkearns$elm_markdown$Markdown$InlineParser$getFringeRank = function (mstring) {
	if (!mstring.$) {
		var string = mstring.a;
		return ($elm$core$String$isEmpty(string) || $dillonkearns$elm_markdown$Markdown$InlineParser$containSpace(string)) ? 0 : ($dillonkearns$elm_markdown$Markdown$InlineParser$containPunctuation(string) ? 1 : 2);
	} else {
		return 0;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToEmphasisToken = F3(
	function (_char, rawText, regMatch) {
		var _v0 = regMatch.ci;
		if ((((_v0.b && _v0.b.b) && _v0.b.b.b) && (!_v0.b.b.a.$)) && _v0.b.b.b.b) {
			var maybeBackslashes = _v0.a;
			var _v1 = _v0.b;
			var maybeLeftFringe = _v1.a;
			var _v2 = _v1.b;
			var delimiter = _v2.a.a;
			var _v3 = _v2.b;
			var maybeRightFringe = _v3.a;
			var rFringeRank = $dillonkearns$elm_markdown$Markdown$InlineParser$getFringeRank(maybeRightFringe);
			var leftFringeLength = function () {
				if (!maybeLeftFringe.$) {
					var left = maybeLeftFringe.a;
					return $elm$core$String$length(left);
				} else {
					return 0;
				}
			}();
			var mLeftFringe = ((!(!regMatch.eo)) && (!leftFringeLength)) ? $elm$core$Maybe$Just(
				A3($elm$core$String$slice, regMatch.eo - 1, regMatch.eo, rawText)) : maybeLeftFringe;
			var backslashesLength = function () {
				if (!maybeBackslashes.$) {
					var backslashes = maybeBackslashes.a;
					return $elm$core$String$length(backslashes);
				} else {
					return 0;
				}
			}();
			var isEscaped = ((!$dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength)) && (!leftFringeLength)) || function () {
				if ((!mLeftFringe.$) && (mLeftFringe.a === '\u005C')) {
					return true;
				} else {
					return false;
				}
			}();
			var delimiterLength = isEscaped ? ($elm$core$String$length(delimiter) - 1) : $elm$core$String$length(delimiter);
			var lFringeRank = isEscaped ? 1 : $dillonkearns$elm_markdown$Markdown$InlineParser$getFringeRank(mLeftFringe);
			if ((delimiterLength <= 0) || ((_char === '_') && ((lFringeRank === 2) && (rFringeRank === 2)))) {
				return $elm$core$Maybe$Nothing;
			} else {
				var index = ((regMatch.eo + backslashesLength) + leftFringeLength) + (isEscaped ? 1 : 0);
				return $elm$core$Maybe$Just(
					{
						eo: index,
						b5: delimiterLength,
						g: A2(
							$dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisToken,
							_char,
							{bE: lFringeRank, bI: rFringeRank})
					});
			}
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$findAsteriskEmphasisTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		A2($dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToEmphasisToken, '*', str),
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$asteriskEmphasisTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$codeTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\u005C\u005C*)(\u005C`+)'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$CodeToken = function (a) {
	return {$: 0, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToCodeToken = function (regMatch) {
	var _v0 = regMatch.ci;
	if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var backtick = _v1.a.a;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		return $elm$core$Maybe$Just(
			{
				eo: regMatch.eo + backslashesLength,
				b5: $elm$core$String$length(backtick),
				g: $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $dillonkearns$elm_markdown$Markdown$InlineParser$CodeToken(1) : $dillonkearns$elm_markdown$Markdown$InlineParser$CodeToken(0)
			});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findCodeTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToCodeToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$codeTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$hardBreakTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(?:(\u005C\u005C+)|( {2,}))\u005Cn'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken = {$: 8};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToHardBreakToken = function (regMatch) {
	var _v0 = regMatch.ci;
	_v0$2:
	while (true) {
		if (_v0.b) {
			if (!_v0.a.$) {
				var backslashes = _v0.a.a;
				var backslashesLength = $elm$core$String$length(backslashes);
				return (!$dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength)) ? $elm$core$Maybe$Just(
					{eo: (regMatch.eo + backslashesLength) - 1, b5: 2, g: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken}) : $elm$core$Maybe$Nothing;
			} else {
				if (_v0.b.b && (!_v0.b.a.$)) {
					var _v1 = _v0.b;
					return $elm$core$Maybe$Just(
						{
							eo: regMatch.eo,
							b5: $elm$core$String$length(regMatch.bj),
							g: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken
						});
				} else {
					break _v0$2;
				}
			}
		} else {
			break _v0$2;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToSoftHardBreakToken = function (regMatch) {
	var _v0 = regMatch.ci;
	_v0$2:
	while (true) {
		if (_v0.b) {
			if (!_v0.a.$) {
				var backslashes = _v0.a.a;
				var backslashesLength = $elm$core$String$length(backslashes);
				return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just(
					{eo: regMatch.eo + backslashesLength, b5: 1, g: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken}) : $elm$core$Maybe$Just(
					{eo: (regMatch.eo + backslashesLength) - 1, b5: 2, g: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken});
			} else {
				if (_v0.b.b) {
					var _v1 = _v0.b;
					return $elm$core$Maybe$Just(
						{
							eo: regMatch.eo,
							b5: $elm$core$String$length(regMatch.bj),
							g: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken
						});
				} else {
					break _v0$2;
				}
			}
		} else {
			break _v0$2;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreak = false;
var $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreakTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(?:(\u005C\u005C+)|( *))\u005Cn'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$findHardBreakTokens = function (str) {
	return $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreak ? A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToSoftHardBreakToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreakTokenRegex, str)) : A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToHardBreakToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$hardBreakTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageCloseTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\u005C\u005C*)(\u005C])'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$SquareBracketClose = {$: 3};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageCloseToken = function (regMatch) {
	var _v0 = regMatch.ci;
	if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just(
			{eo: regMatch.eo + backslashesLength, b5: 1, g: $dillonkearns$elm_markdown$Markdown$InlineParser$SquareBracketClose}) : $elm$core$Maybe$Nothing;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageCloseTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageCloseToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageCloseTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageOpenTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\u005C\u005C*)(\u005C!)?(\u005C[)'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$Active = 0;
var $dillonkearns$elm_markdown$Markdown$InlineParser$ImageOpenToken = {$: 2};
var $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageOpenToken = function (regMatch) {
	var _v0 = regMatch.ci;
	if (((_v0.b && _v0.b.b) && _v0.b.b.b) && (!_v0.b.b.a.$)) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var maybeImageOpen = _v1.a;
		var _v2 = _v1.b;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		var isEscaped = !$dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength);
		var index = isEscaped ? ((regMatch.eo + backslashesLength) + 1) : (regMatch.eo + backslashesLength);
		if (isEscaped) {
			if (!maybeImageOpen.$) {
				return $elm$core$Maybe$Just(
					{
						eo: index,
						b5: 1,
						g: $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken(0)
					});
			} else {
				return $elm$core$Maybe$Nothing;
			}
		} else {
			if (!maybeImageOpen.$) {
				return $elm$core$Maybe$Just(
					{eo: index, b5: 2, g: $dillonkearns$elm_markdown$Markdown$InlineParser$ImageOpenToken});
			} else {
				return $elm$core$Maybe$Just(
					{
						eo: index,
						b5: 1,
						g: $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken(0)
					});
			}
		}
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageOpenTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageOpenToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageOpenTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$StrikethroughToken = function (a) {
	return {$: 9, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToStrikethroughToken = function (regMatch) {
	var _v0 = regMatch.ci;
	if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var tilde = _v1.a.a;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		var _v2 = $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? _Utils_Tuple2(
			$elm$core$String$length(tilde),
			$dillonkearns$elm_markdown$Markdown$InlineParser$StrikethroughToken(1)) : _Utils_Tuple2(
			$elm$core$String$length(tilde),
			$dillonkearns$elm_markdown$Markdown$InlineParser$StrikethroughToken(0));
		var length = _v2.a;
		var meaning = _v2.b;
		return $elm$core$Maybe$Just(
			{eo: regMatch.eo + backslashesLength, b5: length, g: meaning});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\u005C\u005C*)(~{2,})([^~])?'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$findStrikethroughTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToStrikethroughToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$underlineEmphasisTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\u005C\u005C*)([^_])?(\u005C_+)([^_])?'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$findUnderlineEmphasisTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		A2($dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToEmphasisToken, '_', str),
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$underlineEmphasisTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex = F2(
	function (left, right) {
		if (left.b) {
			var lfirst = left.a;
			var lrest = left.b;
			if (right.b) {
				var rfirst = right.a;
				var rrest = right.b;
				return (_Utils_cmp(lfirst.eo, rfirst.eo) < 0) ? A2(
					$elm$core$List$cons,
					lfirst,
					A2($dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex, lrest, right)) : A2(
					$elm$core$List$cons,
					rfirst,
					A2($dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex, left, rrest));
			} else {
				return left;
			}
		} else {
			return right;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$tokenize = function (rawText) {
	return A2(
		$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
		A3(
			$dillonkearns$elm_markdown$Markdown$InlineParser$cleanAngleBracketTokens,
			A2(
				$elm$core$List$sortBy,
				function ($) {
					return $.eo;
				},
				$dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketLTokens(rawText)),
			A2(
				$elm$core$List$sortBy,
				function ($) {
					return $.eo;
				},
				$dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketRTokens(rawText)),
			0),
		A2(
			$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
			$dillonkearns$elm_markdown$Markdown$InlineParser$findHardBreakTokens(rawText),
			A2(
				$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
				$dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageCloseTokens(rawText),
				A2(
					$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
					$dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageOpenTokens(rawText),
					A2(
						$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
						$dillonkearns$elm_markdown$Markdown$InlineParser$findStrikethroughTokens(rawText),
						A2(
							$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
							$dillonkearns$elm_markdown$Markdown$InlineParser$findUnderlineEmphasisTokens(rawText),
							A2(
								$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
								$dillonkearns$elm_markdown$Markdown$InlineParser$findAsteriskEmphasisTokens(rawText),
								$dillonkearns$elm_markdown$Markdown$InlineParser$findCodeTokens(rawText))))))));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$CodeType = {$: 2};
var $dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisType = function (a) {
	return {$: 7, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$HtmlType = function (a) {
	return {$: 6, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType = function (a) {
	return {$: 5, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$Inactive = 1;
var $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType = function (a) {
	return {$: 4, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$StrikethroughType = {$: 8};
var $dillonkearns$elm_markdown$Markdown$InlineParser$AutolinkType = function (a) {
	return {$: 3, a: a};
};
var $elm$regex$Regex$contains = _Regex_contains;
var $dillonkearns$elm_markdown$Markdown$InlineParser$decodeUrlRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('%(?:3B|2C|2F|3F|3A|40|26|3D|2B|24|23|25)'));
var $elm$url$Url$percentDecode = _Url_percentDecode;
var $elm$url$Url$percentEncode = _Url_percentEncode;
var $dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl = A2(
	$elm$core$Basics$composeR,
	$elm$url$Url$percentEncode,
	A2(
		$elm$regex$Regex$replace,
		$dillonkearns$elm_markdown$Markdown$InlineParser$decodeUrlRegex,
		function (match) {
			return A2(
				$elm$core$Maybe$withDefault,
				match.bj,
				$elm$url$Url$percentDecode(match.bj));
		}));
var $dillonkearns$elm_markdown$Markdown$InlineParser$urlRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^([A-Za-z][A-Za-z0-9.+\u005C-]{1,31}:[^<>\u005Cx00-\u005Cx20]*)$'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$autolinkToMatch = function (_v0) {
	var match = _v0;
	return A2($elm$regex$Regex$contains, $dillonkearns$elm_markdown$Markdown$InlineParser$urlRegex, match.ck) ? $elm$core$Result$Ok(
		_Utils_update(
			match,
			{
				r: $dillonkearns$elm_markdown$Markdown$InlineParser$AutolinkType(
					_Utils_Tuple2(
						match.ck,
						$dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl(match.ck)))
			})) : $elm$core$Result$Err(match);
};
var $elm$regex$Regex$findAtMost = _Regex_findAtMost;
var $dillonkearns$elm_markdown$Markdown$Helpers$insideSquareBracketRegex = '[^\u005C[\u005C]\u005C\u005C]*(?:\u005C\u005C.[^\u005C[\u005C]\u005C\u005C]*)*';
var $dillonkearns$elm_markdown$Markdown$InlineParser$refLabelRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^\u005C[\u005Cs*(' + ($dillonkearns$elm_markdown$Markdown$Helpers$insideSquareBracketRegex + ')\u005Cs*\u005C]')));
var $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces = function (original) {
	return original;
};
var $dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel = A2($elm$core$Basics$composeR, $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces, $elm$core$String$toLower);
var $dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle = F2(
	function (rawUrl, maybeTitle) {
		return _Utils_Tuple2(
			$dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl(
				$dillonkearns$elm_markdown$Markdown$Helpers$formatStr(rawUrl)),
			A2($elm$core$Maybe$map, $dillonkearns$elm_markdown$Markdown$Helpers$formatStr, maybeTitle));
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$refRegexToMatch = F3(
	function (matchModel, references, maybeRegexMatch) {
		var refLabel = function (str) {
			return $elm$core$String$isEmpty(str) ? matchModel.ck : str;
		}(
			A2(
				$elm$core$Maybe$withDefault,
				matchModel.ck,
				A2(
					$elm$core$Maybe$withDefault,
					$elm$core$Maybe$Nothing,
					A2(
						$elm$core$Maybe$andThen,
						A2(
							$elm$core$Basics$composeR,
							function ($) {
								return $.ci;
							},
							$elm$core$List$head),
						maybeRegexMatch))));
		var _v0 = A2(
			$elm$core$Dict$get,
			$dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel(refLabel),
			references);
		if (_v0.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v1 = _v0.a;
			var rawUrl = _v1.a;
			var maybeTitle = _v1.b;
			var type_ = function () {
				var _v3 = matchModel.r;
				if (_v3.$ === 5) {
					return $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType(
						A2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle, rawUrl, maybeTitle));
				} else {
					return $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType(
						A2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle, rawUrl, maybeTitle));
				}
			}();
			var regexMatchLength = function () {
				if (!maybeRegexMatch.$) {
					var match = maybeRegexMatch.a.bj;
					return $elm$core$String$length(match);
				} else {
					return 0;
				}
			}();
			return $elm$core$Maybe$Just(
				_Utils_update(
					matchModel,
					{k: matchModel.k + regexMatchLength, r: type_}));
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineReferences = F3(
	function (remainText, _v0, references) {
		var tempMatch = _v0;
		var matches = A3($elm$regex$Regex$findAtMost, 1, $dillonkearns$elm_markdown$Markdown$InlineParser$refLabelRegex, remainText);
		return A3(
			$dillonkearns$elm_markdown$Markdown$InlineParser$refRegexToMatch,
			tempMatch,
			references,
			$elm$core$List$head(matches));
	});
var $dillonkearns$elm_markdown$Markdown$Helpers$lineEndChars = '\u005Cf\u005Cv\u005Cr\u005Cn';
var $dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars = ' \u005Ct\u005Cf\u005Cv\u005Cr\u005Cn';
var $dillonkearns$elm_markdown$Markdown$InlineParser$hrefRegex = '(?:<([^<>' + ($dillonkearns$elm_markdown$Markdown$Helpers$lineEndChars + (']*)>|([^' + ($dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars + ('\u005C(\u005C)\u005C\u005C]*(?:\u005C\u005C.[^' + ($dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars + '\u005C(\u005C)\u005C\u005C]*)*))')))));
var $dillonkearns$elm_markdown$Markdown$Helpers$titleRegex = '(?:[' + ($dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars + (']+' + ('(?:\u0027([^\u0027\u005C\u005C]*(?:\u005C\u005C.[^\u0027\u005C\u005C]*)*)\u0027|' + ('\u0022([^\u0022\u005C\u005C]*(?:\u005C\u005C.[^\u0022\u005C\u005C]*)*)\u0022|' + '\u005C(([^\u005C)\u005C\u005C]*(?:\u005C\u005C.[^\u005C)\u005C\u005C]*)*)\u005C)))?'))));
var $dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^\u005C(\u005Cs*' + ($dillonkearns$elm_markdown$Markdown$InlineParser$hrefRegex + ($dillonkearns$elm_markdown$Markdown$Helpers$titleRegex + '\u005Cs*\u005C)'))));
var $dillonkearns$elm_markdown$Markdown$Helpers$returnFirstJust = function (maybes) {
	var process = F2(
		function (a, maybeFound) {
			if (!maybeFound.$) {
				var found = maybeFound.a;
				return $elm$core$Maybe$Just(found);
			} else {
				return a;
			}
		});
	return A3($elm$core$List$foldl, process, $elm$core$Maybe$Nothing, maybes);
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegexToMatch = F2(
	function (matchModel, regexMatch) {
		var _v0 = regexMatch.ci;
		if ((((_v0.b && _v0.b.b) && _v0.b.b.b) && _v0.b.b.b.b) && _v0.b.b.b.b.b) {
			var maybeRawUrlAngleBrackets = _v0.a;
			var _v1 = _v0.b;
			var maybeRawUrlWithoutBrackets = _v1.a;
			var _v2 = _v1.b;
			var maybeTitleSingleQuotes = _v2.a;
			var _v3 = _v2.b;
			var maybeTitleDoubleQuotes = _v3.a;
			var _v4 = _v3.b;
			var maybeTitleParenthesis = _v4.a;
			var maybeTitle = $dillonkearns$elm_markdown$Markdown$Helpers$returnFirstJust(
				_List_fromArray(
					[maybeTitleSingleQuotes, maybeTitleDoubleQuotes, maybeTitleParenthesis]));
			var toMatch = function (rawUrl) {
				return _Utils_update(
					matchModel,
					{
						k: matchModel.k + $elm$core$String$length(regexMatch.bj),
						r: function () {
							var _v5 = matchModel.r;
							if (_v5.$ === 5) {
								return $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType;
							} else {
								return $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType;
							}
						}()(
							A2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle, rawUrl, maybeTitle))
					});
			};
			var maybeRawUrl = $dillonkearns$elm_markdown$Markdown$Helpers$returnFirstJust(
				_List_fromArray(
					[maybeRawUrlAngleBrackets, maybeRawUrlWithoutBrackets]));
			return $elm$core$Maybe$Just(
				toMatch(
					A2($elm$core$Maybe$withDefault, '', maybeRawUrl)));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineLinkTypeOrImageType = F3(
	function (remainText, _v0, refs) {
		var tempMatch = _v0;
		var _v1 = A3($elm$regex$Regex$findAtMost, 1, $dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegex, remainText);
		if (_v1.b) {
			var first = _v1.a;
			var _v2 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegexToMatch, tempMatch, first);
			if (!_v2.$) {
				var match = _v2.a;
				return $elm$core$Maybe$Just(match);
			} else {
				return A3($dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineReferences, remainText, tempMatch, refs);
			}
		} else {
			return A3($dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineReferences, remainText, tempMatch, refs);
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$checkParsedAheadOverlapping = F2(
	function (_v0, remainMatches) {
		var match = _v0;
		var overlappingMatches = $elm$core$List$filter(
			function (_v1) {
				var testMatch = _v1;
				return (_Utils_cmp(match.k, testMatch.n) > 0) && (_Utils_cmp(match.k, testMatch.k) < 0);
			});
		return ($elm$core$List$isEmpty(remainMatches) || $elm$core$List$isEmpty(
			overlappingMatches(remainMatches))) ? $elm$core$Maybe$Just(
			A2($elm$core$List$cons, match, remainMatches)) : $elm$core$Maybe$Nothing;
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$emailRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^([a-zA-Z0-9.!#$%&\u0027*+\u005C/=?^_`{|}~\u005C-]+@[a-zA-Z0-9](?:[a-zA-Z0-9\u005C-]{0,61}[a-zA-Z0-9])?(?:\u005C.[a-zA-Z0-9](?:[a-zA-Z0-9\u005C-]{0,61}[a-zA-Z0-9])?)*)$'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$emailAutolinkTypeToMatch = function (_v0) {
	var match = _v0;
	return A2($elm$regex$Regex$contains, $dillonkearns$elm_markdown$Markdown$InlineParser$emailRegex, match.ck) ? $elm$core$Result$Ok(
		_Utils_update(
			match,
			{
				r: $dillonkearns$elm_markdown$Markdown$InlineParser$AutolinkType(
					_Utils_Tuple2(
						match.ck,
						'mailto:' + $dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl(match.ck)))
			})) : $elm$core$Result$Err(match);
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findTokenHelp = F3(
	function (innerTokens, isToken, tokens) {
		findTokenHelp:
		while (true) {
			if (!tokens.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var nextToken = tokens.a;
				var remainingTokens = tokens.b;
				if (isToken(nextToken)) {
					return $elm$core$Maybe$Just(
						_Utils_Tuple3(
							nextToken,
							$elm$core$List$reverse(innerTokens),
							remainingTokens));
				} else {
					var $temp$innerTokens = A2($elm$core$List$cons, nextToken, innerTokens),
						$temp$isToken = isToken,
						$temp$tokens = remainingTokens;
					innerTokens = $temp$innerTokens;
					isToken = $temp$isToken;
					tokens = $temp$tokens;
					continue findTokenHelp;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$findToken = F2(
	function (isToken, tokens) {
		return A3($dillonkearns$elm_markdown$Markdown$InlineParser$findTokenHelp, _List_Nil, isToken, tokens);
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$HtmlToken = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$NotOpening = 0;
var $elm$parser$Parser$Advanced$getOffset = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.f, s);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 0:
					return list;
				case 1:
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0;
		var _v1 = parse(
			{cv: 1, j: _List_Nil, m: 1, f: 0, fa: 1, cf: src});
		if (!_v1.$) {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$htmlToToken = F2(
	function (rawText, _v0) {
		var match = _v0;
		var consumedCharacters = A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						F3(
							function (startOffset, htmlTag, endOffset) {
								return {cM: htmlTag, b5: endOffset - startOffset};
							})),
					$elm$parser$Parser$Advanced$getOffset),
				$dillonkearns$elm_markdown$HtmlParser$html),
			$elm$parser$Parser$Advanced$getOffset);
		var parsed = A2(
			$elm$parser$Parser$Advanced$run,
			consumedCharacters,
			A2($elm$core$String$dropLeft, match.n, rawText));
		if (!parsed.$) {
			var length = parsed.a.b5;
			var htmlTag = parsed.a.cM;
			var htmlToken = A2($dillonkearns$elm_markdown$Markdown$InlineParser$HtmlToken, 0, htmlTag);
			return $elm$core$Maybe$Just(
				{eo: match.n, b5: length, g: htmlToken});
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$Helpers$ifError = F2(
	function (_function, result) {
		if (!result.$) {
			return result;
		} else {
			var err = result.a;
			return _function(err);
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$isCodeTokenPair = F2(
	function (closeToken, openToken) {
		var _v0 = openToken.g;
		if (!_v0.$) {
			if (!_v0.a) {
				var _v1 = _v0.a;
				return _Utils_eq(openToken.b5 - 1, closeToken.b5);
			} else {
				var _v2 = _v0.a;
				return _Utils_eq(openToken.b5, closeToken.b5);
			}
		} else {
			return false;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$isLinkTypeOrImageOpenToken = function (token) {
	var _v0 = token.g;
	switch (_v0.$) {
		case 1:
			return true;
		case 2:
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$isOpenEmphasisToken = F2(
	function (closeToken, openToken) {
		var _v0 = openToken.g;
		if (_v0.$ === 7) {
			var openChar = _v0.a;
			var open = _v0.b;
			var _v1 = closeToken.g;
			if (_v1.$ === 7) {
				var closeChar = _v1.a;
				var close = _v1.b;
				return _Utils_eq(openChar, closeChar) ? ((_Utils_eq(open.bE, open.bI) || _Utils_eq(close.bE, close.bI)) ? ((!(!A2($elm$core$Basics$modBy, 3, closeToken.b5 + openToken.b5))) || ((!A2($elm$core$Basics$modBy, 3, closeToken.b5)) && (!A2($elm$core$Basics$modBy, 3, openToken.b5)))) : true) : false;
			} else {
				return false;
			}
		} else {
			return false;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$isStrikethroughTokenPair = F2(
	function (closeToken, openToken) {
		var _v0 = function () {
			var _v1 = openToken.g;
			if (_v1.$ === 9) {
				if (!_v1.a) {
					var _v2 = _v1.a;
					return _Utils_Tuple2(true, openToken.b5 - 1);
				} else {
					var _v3 = _v1.a;
					return _Utils_Tuple2(true, openToken.b5);
				}
			} else {
				return _Utils_Tuple2(false, 0);
			}
		}();
		var openTokenIsStrikethrough = _v0.a;
		var openTokenLength = _v0.b;
		var _v4 = function () {
			var _v5 = closeToken.g;
			if (_v5.$ === 9) {
				if (!_v5.a) {
					var _v6 = _v5.a;
					return _Utils_Tuple2(true, closeToken.b5 - 1);
				} else {
					var _v7 = _v5.a;
					return _Utils_Tuple2(true, closeToken.b5);
				}
			} else {
				return _Utils_Tuple2(false, 0);
			}
		}();
		var closeTokenIsStrikethrough = _v4.a;
		var closeTokenLength = _v4.b;
		return closeTokenIsStrikethrough && (openTokenIsStrikethrough && _Utils_eq(closeTokenLength, openTokenLength));
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakType = {$: 1};
var $dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch = F2(
	function (token, type_) {
		return {k: token.eo + token.b5, z: _List_Nil, n: token.eo, ck: '', P: 0, C: 0, r: type_};
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$lineBreakTTM = F2(
	function (remaining, matches) {
		lineBreakTTM:
		while (true) {
			if (!remaining.b) {
				return matches;
			} else {
				var token = remaining.a;
				var tokensTail = remaining.b;
				var _v1 = token.g;
				if (_v1.$ === 8) {
					var $temp$remaining = tokensTail,
						$temp$matches = A2(
						$elm$core$List$cons,
						A2($dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch, token, $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakType),
						matches);
					remaining = $temp$remaining;
					matches = $temp$matches;
					continue lineBreakTTM;
				} else {
					var $temp$remaining = tokensTail,
						$temp$matches = matches;
					remaining = $temp$remaining;
					matches = $temp$matches;
					continue lineBreakTTM;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$removeParsedAheadTokens = F2(
	function (_v0, tokensTail) {
		var match = _v0;
		return A2(
			$elm$core$List$filter,
			function (token) {
				return _Utils_cmp(token.eo, match.k) > -1;
			},
			tokensTail);
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketsToMatch = F6(
	function (closeToken, escaped, matches, references, rawText, _v44) {
		var openToken = _v44.a;
		var remainTokens = _v44.c;
		var result = A2(
			$dillonkearns$elm_markdown$Markdown$Helpers$ifError,
			$dillonkearns$elm_markdown$Markdown$InlineParser$emailAutolinkTypeToMatch,
			$dillonkearns$elm_markdown$Markdown$InlineParser$autolinkToMatch(
				A7(
					$dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch,
					references,
					rawText,
					function (s) {
						return s;
					},
					$dillonkearns$elm_markdown$Markdown$InlineParser$CodeType,
					openToken,
					closeToken,
					_List_Nil)));
		if (result.$ === 1) {
			var tempMatch = result.a;
			if (escaped === 1) {
				var _v47 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$htmlToToken, rawText, tempMatch);
				if (!_v47.$) {
					var newToken = _v47.a;
					return $elm$core$Maybe$Just(
						_Utils_Tuple2(
							A2($elm$core$List$cons, newToken, remainTokens),
							matches));
				} else {
					return $elm$core$Maybe$Nothing;
				}
			} else {
				return $elm$core$Maybe$Nothing;
			}
		} else {
			var newMatch = result.a;
			return $elm$core$Maybe$Just(
				_Utils_Tuple2(
					remainTokens,
					A2($elm$core$List$cons, newMatch, matches)));
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM = F5(
	function (remaining, tokens, matches, references, rawText) {
		codeAutolinkTypeHtmlTagTTM:
		while (true) {
			if (!remaining.b) {
				return A5(
					$dillonkearns$elm_markdown$Markdown$InlineParser$htmlElementTTM,
					$elm$core$List$reverse(tokens),
					_List_Nil,
					matches,
					references,
					rawText);
			} else {
				var token = remaining.a;
				var tokensTail = remaining.b;
				var _v36 = token.g;
				switch (_v36.$) {
					case 0:
						var _v37 = A2(
							$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
							$dillonkearns$elm_markdown$Markdown$InlineParser$isCodeTokenPair(token),
							tokens);
						if (!_v37.$) {
							var code = _v37.a;
							var _v38 = A5($dillonkearns$elm_markdown$Markdown$InlineParser$codeToMatch, token, matches, references, rawText, code);
							var newTokens = _v38.a;
							var newMatches = _v38.b;
							var $temp$remaining = tokensTail,
								$temp$tokens = newTokens,
								$temp$matches = newMatches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue codeAutolinkTypeHtmlTagTTM;
						} else {
							var $temp$remaining = tokensTail,
								$temp$tokens = A2($elm$core$List$cons, token, tokens),
								$temp$matches = matches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue codeAutolinkTypeHtmlTagTTM;
						}
					case 5:
						var isEscaped = _v36.a;
						var isAngleBracketOpen = function (_v43) {
							var meaning = _v43.g;
							if (meaning.$ === 4) {
								return true;
							} else {
								return false;
							}
						};
						var _v39 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$findToken, isAngleBracketOpen, tokens);
						if (!_v39.$) {
							var found = _v39.a;
							var _v40 = A6($dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketsToMatch, token, isEscaped, matches, references, rawText, found);
							if (!_v40.$) {
								var _v41 = _v40.a;
								var newTokens = _v41.a;
								var newMatches = _v41.b;
								var $temp$remaining = tokensTail,
									$temp$tokens = A2(
									$elm$core$List$filter,
									A2($elm$core$Basics$composeL, $elm$core$Basics$not, isAngleBracketOpen),
									newTokens),
									$temp$matches = newMatches,
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue codeAutolinkTypeHtmlTagTTM;
							} else {
								var $temp$remaining = tokensTail,
									$temp$tokens = A2(
									$elm$core$List$filter,
									A2($elm$core$Basics$composeL, $elm$core$Basics$not, isAngleBracketOpen),
									tokens),
									$temp$matches = matches,
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue codeAutolinkTypeHtmlTagTTM;
							}
						} else {
							var $temp$remaining = tokensTail,
								$temp$tokens = A2(
								$elm$core$List$filter,
								A2($elm$core$Basics$composeL, $elm$core$Basics$not, isAngleBracketOpen),
								tokens),
								$temp$matches = matches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue codeAutolinkTypeHtmlTagTTM;
						}
					default:
						var $temp$remaining = tokensTail,
							$temp$tokens = A2($elm$core$List$cons, token, tokens),
							$temp$matches = matches,
							$temp$references = references,
							$temp$rawText = rawText;
						remaining = $temp$remaining;
						tokens = $temp$tokens;
						matches = $temp$matches;
						references = $temp$references;
						rawText = $temp$rawText;
						continue codeAutolinkTypeHtmlTagTTM;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$codeToMatch = F5(
	function (closeToken, matches, references, rawText, _v32) {
		var openToken = _v32.a;
		var remainTokens = _v32.c;
		var updatedOpenToken = function () {
			var _v33 = openToken.g;
			if ((!_v33.$) && (!_v33.a)) {
				var _v34 = _v33.a;
				return _Utils_update(
					openToken,
					{eo: openToken.eo + 1, b5: openToken.b5 - 1});
			} else {
				return openToken;
			}
		}();
		var match = A7($dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch, references, rawText, $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces, $dillonkearns$elm_markdown$Markdown$InlineParser$CodeType, updatedOpenToken, closeToken, _List_Nil);
		return _Utils_Tuple2(
			remainTokens,
			A2($elm$core$List$cons, match, matches));
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$emphasisTTM = F5(
	function (remaining, tokens, matches, references, rawText) {
		emphasisTTM:
		while (true) {
			if (!remaining.b) {
				return A5(
					$dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughTTM,
					$elm$core$List$reverse(tokens),
					_List_Nil,
					matches,
					references,
					rawText);
			} else {
				var token = remaining.a;
				var tokensTail = remaining.b;
				var _v27 = token.g;
				if (_v27.$ === 7) {
					var _char = _v27.a;
					var rightFringeRank = _v27.b.bI;
					var leftFringeRank = _v27.b.bE;
					if (_Utils_eq(leftFringeRank, rightFringeRank)) {
						if ((!(!rightFringeRank)) && ((_char !== '_') || (rightFringeRank === 1))) {
							var _v28 = A2(
								$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
								$dillonkearns$elm_markdown$Markdown$InlineParser$isOpenEmphasisToken(token),
								tokens);
							if (!_v28.$) {
								var found = _v28.a;
								var _v29 = A5($dillonkearns$elm_markdown$Markdown$InlineParser$emphasisToMatch, references, rawText, token, tokensTail, found);
								var newRemaining = _v29.a;
								var match = _v29.b;
								var newTokens = _v29.c;
								var $temp$remaining = newRemaining,
									$temp$tokens = newTokens,
									$temp$matches = A2($elm$core$List$cons, match, matches),
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue emphasisTTM;
							} else {
								var $temp$remaining = tokensTail,
									$temp$tokens = A2($elm$core$List$cons, token, tokens),
									$temp$matches = matches,
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue emphasisTTM;
							}
						} else {
							var $temp$remaining = tokensTail,
								$temp$tokens = tokens,
								$temp$matches = matches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue emphasisTTM;
						}
					} else {
						if (_Utils_cmp(leftFringeRank, rightFringeRank) < 0) {
							var $temp$remaining = tokensTail,
								$temp$tokens = A2($elm$core$List$cons, token, tokens),
								$temp$matches = matches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue emphasisTTM;
						} else {
							var _v30 = A2(
								$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
								$dillonkearns$elm_markdown$Markdown$InlineParser$isOpenEmphasisToken(token),
								tokens);
							if (!_v30.$) {
								var found = _v30.a;
								var _v31 = A5($dillonkearns$elm_markdown$Markdown$InlineParser$emphasisToMatch, references, rawText, token, tokensTail, found);
								var newRemaining = _v31.a;
								var match = _v31.b;
								var newTokens = _v31.c;
								var $temp$remaining = newRemaining,
									$temp$tokens = newTokens,
									$temp$matches = A2($elm$core$List$cons, match, matches),
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue emphasisTTM;
							} else {
								var $temp$remaining = tokensTail,
									$temp$tokens = tokens,
									$temp$matches = matches,
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue emphasisTTM;
							}
						}
					}
				} else {
					var $temp$remaining = tokensTail,
						$temp$tokens = A2($elm$core$List$cons, token, tokens),
						$temp$matches = matches,
						$temp$references = references,
						$temp$rawText = rawText;
					remaining = $temp$remaining;
					tokens = $temp$tokens;
					matches = $temp$matches;
					references = $temp$references;
					rawText = $temp$rawText;
					continue emphasisTTM;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$emphasisToMatch = F5(
	function (references, rawText, closeToken, tokensTail, _v25) {
		var openToken = _v25.a;
		var innerTokens = _v25.b;
		var remainTokens = _v25.c;
		var remainLength = openToken.b5 - closeToken.b5;
		var updt = (!remainLength) ? {bz: closeToken, bl: openToken, bH: remainTokens, bO: tokensTail} : ((remainLength > 0) ? {
			bz: closeToken,
			bl: _Utils_update(
				openToken,
				{eo: openToken.eo + remainLength, b5: closeToken.b5}),
			bH: A2(
				$elm$core$List$cons,
				_Utils_update(
					openToken,
					{b5: remainLength}),
				remainTokens),
			bO: tokensTail
		} : {
			bz: _Utils_update(
				closeToken,
				{b5: openToken.b5}),
			bl: openToken,
			bH: remainTokens,
			bO: A2(
				$elm$core$List$cons,
				_Utils_update(
					closeToken,
					{eo: closeToken.eo + openToken.b5, b5: -remainLength}),
				tokensTail)
		});
		var match = A7(
			$dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch,
			references,
			rawText,
			function (s) {
				return s;
			},
			$dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisType(updt.bl.b5),
			updt.bl,
			updt.bz,
			$elm$core$List$reverse(innerTokens));
		return _Utils_Tuple3(updt.bO, match, updt.bH);
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$htmlElementTTM = F5(
	function (remaining, tokens, matches, references, rawText) {
		htmlElementTTM:
		while (true) {
			if (!remaining.b) {
				return A5(
					$dillonkearns$elm_markdown$Markdown$InlineParser$linkImageTypeTTM,
					$elm$core$List$reverse(tokens),
					_List_Nil,
					matches,
					references,
					rawText);
			} else {
				var token = remaining.a;
				var tokensTail = remaining.b;
				var _v23 = token.g;
				if (_v23.$ === 6) {
					var isOpen = _v23.a;
					var htmlModel = _v23.b;
					var $temp$remaining = tokensTail,
						$temp$tokens = tokens,
						$temp$matches = A2(
						$elm$core$List$cons,
						A2(
							$dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch,
							token,
							$dillonkearns$elm_markdown$Markdown$InlineParser$HtmlType(htmlModel)),
						matches),
						$temp$references = references,
						$temp$rawText = rawText;
					remaining = $temp$remaining;
					tokens = $temp$tokens;
					matches = $temp$matches;
					references = $temp$references;
					rawText = $temp$rawText;
					continue htmlElementTTM;
				} else {
					var $temp$remaining = tokensTail,
						$temp$tokens = A2($elm$core$List$cons, token, tokens),
						$temp$matches = matches,
						$temp$references = references,
						$temp$rawText = rawText;
					remaining = $temp$remaining;
					tokens = $temp$tokens;
					matches = $temp$matches;
					references = $temp$references;
					rawText = $temp$rawText;
					continue htmlElementTTM;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageTypeTTM = F5(
	function (remaining, tokens, matches, references, rawText) {
		linkImageTypeTTM:
		while (true) {
			if (!remaining.b) {
				return A5(
					$dillonkearns$elm_markdown$Markdown$InlineParser$emphasisTTM,
					$elm$core$List$reverse(tokens),
					_List_Nil,
					matches,
					references,
					rawText);
			} else {
				var token = remaining.a;
				var tokensTail = remaining.b;
				var _v18 = token.g;
				if (_v18.$ === 3) {
					var _v19 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$findToken, $dillonkearns$elm_markdown$Markdown$InlineParser$isLinkTypeOrImageOpenToken, tokens);
					if (!_v19.$) {
						var found = _v19.a;
						var _v20 = A6($dillonkearns$elm_markdown$Markdown$InlineParser$linkOrImageTypeToMatch, token, tokensTail, matches, references, rawText, found);
						if (!_v20.$) {
							var _v21 = _v20.a;
							var x = _v21.a;
							var newMatches = _v21.b;
							var newTokens = _v21.c;
							var $temp$remaining = x,
								$temp$tokens = newTokens,
								$temp$matches = newMatches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue linkImageTypeTTM;
						} else {
							var $temp$remaining = tokensTail,
								$temp$tokens = tokens,
								$temp$matches = matches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue linkImageTypeTTM;
						}
					} else {
						var $temp$remaining = tokensTail,
							$temp$tokens = tokens,
							$temp$matches = matches,
							$temp$references = references,
							$temp$rawText = rawText;
						remaining = $temp$remaining;
						tokens = $temp$tokens;
						matches = $temp$matches;
						references = $temp$references;
						rawText = $temp$rawText;
						continue linkImageTypeTTM;
					}
				} else {
					var $temp$remaining = tokensTail,
						$temp$tokens = A2($elm$core$List$cons, token, tokens),
						$temp$matches = matches,
						$temp$references = references,
						$temp$rawText = rawText;
					remaining = $temp$remaining;
					tokens = $temp$tokens;
					matches = $temp$matches;
					references = $temp$references;
					rawText = $temp$rawText;
					continue linkImageTypeTTM;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$linkOrImageTypeToMatch = F6(
	function (closeToken, tokensTail, oldMatches, references, rawText, _v8) {
		var openToken = _v8.a;
		var innerTokens = _v8.b;
		var remainTokens = _v8.c;
		var removeOpenToken = _Utils_Tuple3(
			tokensTail,
			oldMatches,
			_Utils_ap(innerTokens, remainTokens));
		var remainText = A2($elm$core$String$dropLeft, closeToken.eo + 1, rawText);
		var inactivateLinkOpenToken = function (token) {
			var _v16 = token.g;
			if (_v16.$ === 1) {
				return _Utils_update(
					token,
					{
						g: $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken(1)
					});
			} else {
				return token;
			}
		};
		var findTempMatch = function (isLinkType) {
			return A7(
				$dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch,
				references,
				rawText,
				function (s) {
					return s;
				},
				isLinkType ? $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType(
					_Utils_Tuple2('', $elm$core$Maybe$Nothing)) : $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType(
					_Utils_Tuple2('', $elm$core$Maybe$Nothing)),
				openToken,
				closeToken,
				$elm$core$List$reverse(innerTokens));
		};
		var _v9 = openToken.g;
		switch (_v9.$) {
			case 2:
				var tempMatch = findTempMatch(false);
				var _v10 = A3($dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineLinkTypeOrImageType, remainText, tempMatch, references);
				if (_v10.$ === 1) {
					return $elm$core$Maybe$Just(removeOpenToken);
				} else {
					var match = _v10.a;
					var _v11 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$checkParsedAheadOverlapping, match, oldMatches);
					if (!_v11.$) {
						var matches = _v11.a;
						return $elm$core$Maybe$Just(
							_Utils_Tuple3(
								A2($dillonkearns$elm_markdown$Markdown$InlineParser$removeParsedAheadTokens, match, tokensTail),
								matches,
								remainTokens));
					} else {
						return $elm$core$Maybe$Just(removeOpenToken);
					}
				}
			case 1:
				if (!_v9.a) {
					var _v12 = _v9.a;
					var tempMatch = findTempMatch(true);
					var _v13 = A3($dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineLinkTypeOrImageType, remainText, tempMatch, references);
					if (_v13.$ === 1) {
						return $elm$core$Maybe$Just(removeOpenToken);
					} else {
						var match = _v13.a;
						var _v14 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$checkParsedAheadOverlapping, match, oldMatches);
						if (!_v14.$) {
							var matches = _v14.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple3(
									A2($dillonkearns$elm_markdown$Markdown$InlineParser$removeParsedAheadTokens, match, tokensTail),
									matches,
									A2($elm$core$List$map, inactivateLinkOpenToken, remainTokens)));
						} else {
							return $elm$core$Maybe$Just(removeOpenToken);
						}
					}
				} else {
					var _v15 = _v9.a;
					return $elm$core$Maybe$Just(removeOpenToken);
				}
			default:
				return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughTTM = F5(
	function (remaining, tokens, matches, references, rawText) {
		strikethroughTTM:
		while (true) {
			if (!remaining.b) {
				return A2(
					$dillonkearns$elm_markdown$Markdown$InlineParser$lineBreakTTM,
					$elm$core$List$reverse(tokens),
					matches);
			} else {
				var token = remaining.a;
				var tokensTail = remaining.b;
				var _v5 = token.g;
				if (_v5.$ === 9) {
					var _v6 = A2(
						$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
						$dillonkearns$elm_markdown$Markdown$InlineParser$isStrikethroughTokenPair(token),
						tokens);
					if (!_v6.$) {
						var content = _v6.a;
						var _v7 = A5($dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughToMatch, token, matches, references, rawText, content);
						var newTokens = _v7.a;
						var newMatches = _v7.b;
						var $temp$remaining = tokensTail,
							$temp$tokens = newTokens,
							$temp$matches = newMatches,
							$temp$references = references,
							$temp$rawText = rawText;
						remaining = $temp$remaining;
						tokens = $temp$tokens;
						matches = $temp$matches;
						references = $temp$references;
						rawText = $temp$rawText;
						continue strikethroughTTM;
					} else {
						var $temp$remaining = tokensTail,
							$temp$tokens = A2($elm$core$List$cons, token, tokens),
							$temp$matches = matches,
							$temp$references = references,
							$temp$rawText = rawText;
						remaining = $temp$remaining;
						tokens = $temp$tokens;
						matches = $temp$matches;
						references = $temp$references;
						rawText = $temp$rawText;
						continue strikethroughTTM;
					}
				} else {
					var $temp$remaining = tokensTail,
						$temp$tokens = A2($elm$core$List$cons, token, tokens),
						$temp$matches = matches,
						$temp$references = references,
						$temp$rawText = rawText;
					remaining = $temp$remaining;
					tokens = $temp$tokens;
					matches = $temp$matches;
					references = $temp$references;
					rawText = $temp$rawText;
					continue strikethroughTTM;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughToMatch = F5(
	function (closeToken, matches, references, rawText, _v1) {
		var openToken = _v1.a;
		var remainTokens = _v1.c;
		var updatedOpenToken = function () {
			var _v2 = openToken.g;
			if ((_v2.$ === 9) && (!_v2.a)) {
				var _v3 = _v2.a;
				return _Utils_update(
					openToken,
					{eo: openToken.eo + 1, b5: openToken.b5 - 1});
			} else {
				return openToken;
			}
		}();
		var match = A7($dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch, references, rawText, $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces, $dillonkearns$elm_markdown$Markdown$InlineParser$StrikethroughType, updatedOpenToken, closeToken, _List_Nil);
		return _Utils_Tuple2(
			remainTokens,
			A2($elm$core$List$cons, match, matches));
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch = F7(
	function (references, rawText, processText, type_, openToken, closeToken, innerTokens) {
		var textStart = openToken.eo + openToken.b5;
		var textEnd = closeToken.eo;
		var text = processText(
			A3($elm$core$String$slice, textStart, textEnd, rawText));
		var start = openToken.eo;
		var end = closeToken.eo + closeToken.b5;
		var match = {k: end, z: _List_Nil, n: start, ck: text, P: textEnd, C: textStart, r: type_};
		var matches = A2(
			$elm$core$List$map,
			function (_v0) {
				var matchModel = _v0;
				return A2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareChildMatch, match, matchModel);
			},
			A4($dillonkearns$elm_markdown$Markdown$InlineParser$tokensToMatches, innerTokens, _List_Nil, references, rawText));
		return {k: end, z: matches, n: start, ck: text, P: textEnd, C: textStart, r: type_};
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$tokensToMatches = F4(
	function (tokens, matches, references, rawText) {
		return A5($dillonkearns$elm_markdown$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM, tokens, _List_Nil, matches, references, rawText);
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$parse = F2(
	function (refs, rawText_) {
		var rawText = $elm$core$String$trim(rawText_);
		var tokens = $dillonkearns$elm_markdown$Markdown$InlineParser$tokenize(rawText);
		return $dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(
			A3(
				$dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatches,
				rawText,
				_List_Nil,
				$dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatches(
					A4($dillonkearns$elm_markdown$Markdown$InlineParser$tokensToMatches, tokens, _List_Nil, refs, rawText))));
	});
var $dillonkearns$elm_markdown$Markdown$Parser$thisIsDefinitelyNotAnHtmlTag = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$Advanced$token(
			A2(
				$elm$parser$Parser$Advanced$Token,
				' ',
				$elm$parser$Parser$Expecting(' '))),
			$elm$parser$Parser$Advanced$token(
			A2(
				$elm$parser$Parser$Advanced$Token,
				'>',
				$elm$parser$Parser$Expecting('>'))),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$chompIf,
					$elm$core$Char$isAlpha,
					$elm$parser$Parser$Expecting('Alpha')),
				$elm$parser$Parser$Advanced$chompWhile(
					function (c) {
						return $elm$core$Char$isAlphaNum(c) || (c === '-');
					})),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							':',
							$elm$parser$Parser$Expecting(':'))),
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'@',
							$elm$parser$Parser$Expecting('@'))),
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'\u005C',
							$elm$parser$Parser$Expecting('\u005C'))),
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'+',
							$elm$parser$Parser$Expecting('+'))),
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'.',
							$elm$parser$Parser$Expecting('.')))
					])))
		]));
var $dillonkearns$elm_markdown$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock = $elm$parser$Parser$Advanced$backtrackable(
	A2(
		$elm$parser$Parser$Advanced$mapChompedString,
		F2(
			function (rawLine, _v0) {
				return $dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(rawLine);
			}),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'<',
							$elm$parser$Parser$Expecting('<'))),
					$dillonkearns$elm_markdown$Markdown$Parser$thisIsDefinitelyNotAnHtmlTag),
				$dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
			$dillonkearns$elm_markdown$Helpers$lineEndOrEnd)));
var $dillonkearns$elm_markdown$Markdown$Table$TableHeader = $elm$core$Basics$identity;
var $dillonkearns$elm_markdown$Parser$Token$parseString = function (str) {
	return $elm$parser$Parser$Advanced$token(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$Expecting(str)));
};
var $dillonkearns$elm_markdown$Markdown$TableParser$parseCellHelper = function (_v0) {
	var curr = _v0.a;
	var acc = _v0.b;
	var _return = A2(
		$elm$core$Maybe$withDefault,
		$elm$parser$Parser$Advanced$Done(acc),
		A2(
			$elm$core$Maybe$map,
			function (cell) {
				return $elm$parser$Parser$Advanced$Done(
					A2($elm$core$List$cons, cell, acc));
			},
			curr));
	var finishCell = A2(
		$elm$core$Maybe$withDefault,
		$elm$parser$Parser$Advanced$Loop(
			_Utils_Tuple2($elm$core$Maybe$Nothing, acc)),
		A2(
			$elm$core$Maybe$map,
			function (cell) {
				return $elm$parser$Parser$Advanced$Loop(
					_Utils_Tuple2(
						$elm$core$Maybe$Nothing,
						A2($elm$core$List$cons, cell, acc)));
			},
			curr));
	var addToCurrent = function (c) {
		return _Utils_ap(
			A2($elm$core$Maybe$withDefault, '', curr),
			c);
	};
	var continueCell = function (c) {
		return $elm$parser$Parser$Advanced$Loop(
			_Utils_Tuple2(
				$elm$core$Maybe$Just(
					addToCurrent(c)),
				acc));
	};
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v1) {
					return _return;
				},
				$dillonkearns$elm_markdown$Parser$Token$parseString('|\u000A')),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v2) {
					return _return;
				},
				$dillonkearns$elm_markdown$Parser$Token$parseString('\u000A')),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v3) {
					return _return;
				},
				$elm$parser$Parser$Advanced$end(
					$elm$parser$Parser$Expecting('end'))),
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$backtrackable(
					$elm$parser$Parser$Advanced$succeed(
						continueCell('|'))),
				$dillonkearns$elm_markdown$Parser$Token$parseString('\u005C\u005C|')),
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$backtrackable(
					$elm$parser$Parser$Advanced$succeed(
						continueCell('\u005C'))),
				$dillonkearns$elm_markdown$Parser$Token$parseString('\u005C\u005C')),
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$backtrackable(
					$elm$parser$Parser$Advanced$succeed(
						continueCell('|'))),
				$dillonkearns$elm_markdown$Parser$Token$parseString('\u005C|')),
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$backtrackable(
					$elm$parser$Parser$Advanced$succeed(finishCell)),
				$dillonkearns$elm_markdown$Parser$Token$parseString('|')),
				A2(
				$elm$parser$Parser$Advanced$mapChompedString,
				F2(
					function (_char, _v4) {
						return continueCell(_char);
					}),
				A2(
					$elm$parser$Parser$Advanced$chompIf,
					$elm$core$Basics$always(true),
					$elm$parser$Parser$Problem('No character found')))
			]));
};
var $dillonkearns$elm_markdown$Markdown$TableParser$parseCells = A2(
	$elm$parser$Parser$Advanced$map,
	A2(
		$elm$core$List$foldl,
		F2(
			function (cell, acc) {
				return A2(
					$elm$core$List$cons,
					$elm$core$String$trim(cell),
					acc);
			}),
		_List_Nil),
	A2(
		$elm$parser$Parser$Advanced$loop,
		_Utils_Tuple2($elm$core$Maybe$Nothing, _List_Nil),
		$dillonkearns$elm_markdown$Markdown$TableParser$parseCellHelper));
var $dillonkearns$elm_markdown$Markdown$TableParser$rowParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$dillonkearns$elm_markdown$Parser$Token$parseString('|'),
					$elm$parser$Parser$Advanced$succeed(0)
				]))),
	$dillonkearns$elm_markdown$Markdown$TableParser$parseCells);
var $dillonkearns$elm_markdown$Markdown$TableParser$parseHeader = F2(
	function (_v0, headersRow) {
		var columnAlignments = _v0.b;
		var headersWithAlignment = function (headers) {
			return A3(
				$elm$core$List$map2,
				F2(
					function (headerCell, alignment) {
						return {bu: alignment, a0: headerCell};
					}),
				headers,
				columnAlignments);
		};
		var combineHeaderAndDelimiter = function (headers) {
			return _Utils_eq(
				$elm$core$List$length(headers),
				$elm$core$List$length(columnAlignments)) ? $elm$core$Result$Ok(
				headersWithAlignment(headers)) : $elm$core$Result$Err(
				'Tables must have the same number of header columns (' + ($elm$core$String$fromInt(
					$elm$core$List$length(headers)) + (') as delimiter columns (' + ($elm$core$String$fromInt(
					$elm$core$List$length(columnAlignments)) + ')'))));
		};
		var _v1 = A2($elm$parser$Parser$Advanced$run, $dillonkearns$elm_markdown$Markdown$TableParser$rowParser, headersRow);
		if (!_v1.$) {
			var headers = _v1.a;
			return combineHeaderAndDelimiter(headers);
		} else {
			return $elm$core$Result$Err('Unable to parse previous line as a table header');
		}
	});
var $dillonkearns$elm_markdown$Markdown$CodeBlock$CodeBlock = F2(
	function (language, body) {
		return {dM: body, es: language};
	});
var $dillonkearns$elm_markdown$Markdown$CodeBlock$infoString = function (fenceCharacter) {
	var toInfoString = F2(
		function (str, _v2) {
			var _v1 = $elm$core$String$trim(str);
			if (_v1 === '') {
				return $elm$core$Maybe$Nothing;
			} else {
				var trimmed = _v1;
				return $elm$core$Maybe$Just(trimmed);
			}
		});
	var _v0 = fenceCharacter.b3;
	if (!_v0) {
		return A2(
			$elm$parser$Parser$Advanced$mapChompedString,
			toInfoString,
			$elm$parser$Parser$Advanced$chompWhile(
				function (c) {
					return (c !== '`') && (!$dillonkearns$elm_markdown$Whitespace$isLineEnd(c));
				}));
	} else {
		return A2(
			$elm$parser$Parser$Advanced$mapChompedString,
			toInfoString,
			$elm$parser$Parser$Advanced$chompWhile(
				A2($elm$core$Basics$composeL, $elm$core$Basics$not, $dillonkearns$elm_markdown$Whitespace$isLineEnd)));
	}
};
var $dillonkearns$elm_markdown$Markdown$CodeBlock$Backtick = 0;
var $dillonkearns$elm_markdown$Parser$Token$backtick = A2(
	$elm$parser$Parser$Advanced$Token,
	'`',
	$elm$parser$Parser$Expecting('a \u0027`\u0027'));
var $dillonkearns$elm_markdown$Markdown$CodeBlock$backtick = {cu: '`', b3: 0, bN: $dillonkearns$elm_markdown$Parser$Token$backtick};
var $dillonkearns$elm_markdown$Markdown$CodeBlock$colToIndentation = function (_int) {
	switch (_int) {
		case 1:
			return $elm$parser$Parser$Advanced$succeed(0);
		case 2:
			return $elm$parser$Parser$Advanced$succeed(1);
		case 3:
			return $elm$parser$Parser$Advanced$succeed(2);
		case 4:
			return $elm$parser$Parser$Advanced$succeed(3);
		default:
			return $elm$parser$Parser$Advanced$problem(
				$elm$parser$Parser$Expecting('Fenced code blocks should be indented no more than 3 spaces'));
	}
};
var $dillonkearns$elm_markdown$Markdown$CodeBlock$fenceOfAtLeast = F2(
	function (minLength, fenceCharacter) {
		var builtTokens = A3(
			$elm$core$List$foldl,
			F2(
				function (t, p) {
					return A2($elm$parser$Parser$Advanced$ignorer, p, t);
				}),
			$elm$parser$Parser$Advanced$succeed(0),
			A2(
				$elm$core$List$repeat,
				minLength,
				$elm$parser$Parser$Advanced$token(fenceCharacter.bN)));
		return A2(
			$elm$parser$Parser$Advanced$mapChompedString,
			F2(
				function (str, _v0) {
					return _Utils_Tuple2(
						fenceCharacter,
						$elm$core$String$length(str));
				}),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				builtTokens,
				$elm$parser$Parser$Advanced$chompWhile(
					$elm$core$Basics$eq(fenceCharacter.cu))));
	});
var $dillonkearns$elm_markdown$Markdown$CodeBlock$Tilde = 1;
var $dillonkearns$elm_markdown$Parser$Token$tilde = A2(
	$elm$parser$Parser$Advanced$Token,
	'~',
	$elm$parser$Parser$Expecting('a `~`'));
var $dillonkearns$elm_markdown$Markdown$CodeBlock$tilde = {cu: '~', b3: 1, bN: $dillonkearns$elm_markdown$Parser$Token$tilde};
var $dillonkearns$elm_markdown$Whitespace$upToThreeSpaces = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$dillonkearns$elm_markdown$Whitespace$space,
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							$dillonkearns$elm_markdown$Whitespace$space,
							$elm$parser$Parser$Advanced$succeed(0)
						]))),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						$dillonkearns$elm_markdown$Whitespace$space,
						$elm$parser$Parser$Advanced$succeed(0)
					]))),
			$elm$parser$Parser$Advanced$succeed(0)
		]));
var $dillonkearns$elm_markdown$Markdown$CodeBlock$openingFence = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(
				F2(
					function (indent, _v0) {
						var character = _v0.a;
						var length = _v0.b;
						return {bw: character, b_: indent, b5: length};
					})),
			$dillonkearns$elm_markdown$Whitespace$upToThreeSpaces),
		A2($elm$parser$Parser$Advanced$andThen, $dillonkearns$elm_markdown$Markdown$CodeBlock$colToIndentation, $elm$parser$Parser$Advanced$getCol)),
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2($dillonkearns$elm_markdown$Markdown$CodeBlock$fenceOfAtLeast, 3, $dillonkearns$elm_markdown$Markdown$CodeBlock$backtick),
				A2($dillonkearns$elm_markdown$Markdown$CodeBlock$fenceOfAtLeast, 3, $dillonkearns$elm_markdown$Markdown$CodeBlock$tilde)
			])));
var $elm$parser$Parser$ExpectingEnd = {$: 10};
var $dillonkearns$elm_markdown$Whitespace$isSpace = $elm$core$Basics$eq(' ');
var $dillonkearns$elm_markdown$Markdown$CodeBlock$closingFence = F2(
	function (minLength, fenceCharacter) {
		return A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(0),
						$dillonkearns$elm_markdown$Whitespace$upToThreeSpaces),
					A2($dillonkearns$elm_markdown$Markdown$CodeBlock$fenceOfAtLeast, minLength, fenceCharacter)),
				$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpace)),
			$dillonkearns$elm_markdown$Helpers$lineEndOrEnd);
	});
var $dillonkearns$elm_markdown$Markdown$CodeBlock$codeBlockLine = function (indented) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			A2($dillonkearns$elm_markdown$Parser$Extra$upTo, indented, $dillonkearns$elm_markdown$Whitespace$space)),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$getOffset, $dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
			$dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
};
var $elm$parser$Parser$Advanced$getSource = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.cf, s);
};
var $dillonkearns$elm_markdown$Markdown$CodeBlock$remainingBlockHelp = function (_v0) {
	var fence = _v0.a;
	var body = _v0.b;
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(
					$elm$parser$Parser$Advanced$Done(body)),
				$elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd)),
				A2(
				$elm$parser$Parser$Advanced$mapChompedString,
				F2(
					function (lineEnd, _v1) {
						return $elm$parser$Parser$Advanced$Loop(
							_Utils_Tuple2(
								fence,
								_Utils_ap(body, lineEnd)));
					}),
				$dillonkearns$elm_markdown$Whitespace$lineEnd),
				$elm$parser$Parser$Advanced$backtrackable(
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						$elm$parser$Parser$Advanced$Done(body)),
					A2($dillonkearns$elm_markdown$Markdown$CodeBlock$closingFence, fence.b5, fence.bw))),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed(
							F3(
								function (start, end, source) {
									return $elm$parser$Parser$Advanced$Loop(
										_Utils_Tuple2(
											fence,
											_Utils_ap(
												body,
												A3($elm$core$String$slice, start, end, source))));
								})),
						$dillonkearns$elm_markdown$Markdown$CodeBlock$codeBlockLine(fence.b_)),
					$elm$parser$Parser$Advanced$getOffset),
				$elm$parser$Parser$Advanced$getSource)
			]));
};
var $dillonkearns$elm_markdown$Markdown$CodeBlock$remainingBlock = function (fence) {
	return A2(
		$elm$parser$Parser$Advanced$loop,
		_Utils_Tuple2(fence, ''),
		$dillonkearns$elm_markdown$Markdown$CodeBlock$remainingBlockHelp);
};
var $dillonkearns$elm_markdown$Markdown$CodeBlock$parser = A2(
	$elm$parser$Parser$Advanced$andThen,
	function (fence) {
		return A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$CodeBlock$CodeBlock),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$dillonkearns$elm_markdown$Markdown$CodeBlock$infoString(fence.bw),
					$dillonkearns$elm_markdown$Helpers$lineEndOrEnd)),
			$dillonkearns$elm_markdown$Markdown$CodeBlock$remainingBlock(fence));
	},
	$dillonkearns$elm_markdown$Markdown$CodeBlock$openingFence);
var $dillonkearns$elm_markdown$Markdown$Heading$dropTrailingHashes = function (headingString) {
	dropTrailingHashes:
	while (true) {
		if (A2($elm$core$String$endsWith, '#', headingString)) {
			var $temp$headingString = A2($elm$core$String$dropRight, 1, headingString);
			headingString = $temp$headingString;
			continue dropTrailingHashes;
		} else {
			return headingString;
		}
	}
};
var $elm$core$String$trimRight = _String_trimRight;
var $dillonkearns$elm_markdown$Markdown$Heading$dropClosingSequence = function (headingString) {
	var droppedTrailingHashesString = $dillonkearns$elm_markdown$Markdown$Heading$dropTrailingHashes(headingString);
	return (A2($elm$core$String$endsWith, ' ', droppedTrailingHashesString) || $elm$core$String$isEmpty(droppedTrailingHashesString)) ? $elm$core$String$trimRight(droppedTrailingHashesString) : headingString;
};
var $dillonkearns$elm_markdown$Parser$Token$hash = A2(
	$elm$parser$Parser$Advanced$Token,
	'#',
	$elm$parser$Parser$Expecting('a `#`'));
var $dillonkearns$elm_markdown$Markdown$Heading$isHash = function (c) {
	if ('#' === c) {
		return true;
	} else {
		return false;
	}
};
var $elm$parser$Parser$Advanced$spaces = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return (c === ' ') || ((c === '\n') || (c === '\r'));
	});
var $dillonkearns$elm_markdown$Markdown$Heading$parser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$Heading),
				A2(
					$elm$parser$Parser$Advanced$andThen,
					function (startingSpaces) {
						var startSpace = $elm$core$String$length(startingSpaces);
						return (startSpace >= 4) ? $elm$parser$Parser$Advanced$problem(
							$elm$parser$Parser$Expecting('heading with < 4 spaces in front')) : $elm$parser$Parser$Advanced$succeed(startSpace);
					},
					$elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$spaces))),
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$hash)),
		A2(
			$elm$parser$Parser$Advanced$andThen,
			function (additionalHashes) {
				var level = $elm$core$String$length(additionalHashes) + 1;
				return (level >= 7) ? $elm$parser$Parser$Advanced$problem(
					$elm$parser$Parser$Expecting('heading with < 7 #\u0027s')) : $elm$parser$Parser$Advanced$succeed(level);
			},
			$elm$parser$Parser$Advanced$getChompedString(
				$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Markdown$Heading$isHash)))),
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(''),
				$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$newline)),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[
								$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$space),
								$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$tab)
							]))),
				A2(
					$elm$parser$Parser$Advanced$mapChompedString,
					F2(
						function (headingText, _v0) {
							return $dillonkearns$elm_markdown$Markdown$Heading$dropClosingSequence(
								$elm$core$String$trim(headingText));
						}),
					$dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd))
			])));
var $elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
var $elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var $elm$parser$Parser$Advanced$chompUntil = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$findSubString, str, s.f, s.fa, s.cv, s.cf);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A4($elm$parser$Parser$Advanced$fromInfo, newRow, newCol, expecting, s.j)) : A3(
			$elm$parser$Parser$Advanced$Good,
			_Utils_cmp(s.f, newOffset) < 0,
			0,
			{cv: newCol, j: s.j, m: s.m, f: newOffset, fa: newRow, cf: s.cf});
	};
};
var $dillonkearns$elm_markdown$Parser$Token$greaterThan = A2(
	$elm$parser$Parser$Advanced$Token,
	'>',
	$elm$parser$Parser$Expecting('a `>`'));
var $elm$parser$Parser$Advanced$Located = F3(
	function (row, col, context) {
		return {cv: col, j: context, fa: row};
	});
var $elm$parser$Parser$Advanced$changeContext = F2(
	function (newContext, s) {
		return {cv: s.cv, j: newContext, m: s.m, f: s.f, fa: s.fa, cf: s.cf};
	});
var $elm$parser$Parser$Advanced$inContext = F2(
	function (context, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(
				A2(
					$elm$parser$Parser$Advanced$changeContext,
					A2(
						$elm$core$List$cons,
						A3($elm$parser$Parser$Advanced$Located, s0.fa, s0.cv, context),
						s0.j),
					s0));
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					a,
					A2($elm$parser$Parser$Advanced$changeContext, s0.j, s1));
			} else {
				var step = _v1;
				return step;
			}
		};
	});
var $dillonkearns$elm_markdown$Whitespace$isWhitespace = function (_char) {
	switch (_char) {
		case ' ':
			return true;
		case '\n':
			return true;
		case '\t':
			return true;
		case '\u000b':
			return true;
		case '\f':
			return true;
		case '\r':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Parser$Token$lessThan = A2(
	$elm$parser$Parser$Advanced$Token,
	'<',
	$elm$parser$Parser$Expecting('a `<`'));
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$destinationParser = A2(
	$elm$parser$Parser$Advanced$inContext,
	'link destination',
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$url$Url$percentEncode),
					$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$lessThan)),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$getChompedString(
						$elm$parser$Parser$Advanced$chompUntil($dillonkearns$elm_markdown$Parser$Token$greaterThan)),
					$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$greaterThan))),
				$elm$parser$Parser$Advanced$getChompedString(
				$dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore(
					A2($elm$core$Basics$composeL, $elm$core$Basics$not, $dillonkearns$elm_markdown$Whitespace$isWhitespace)))
			])));
var $dillonkearns$elm_markdown$Parser$Token$closingSquareBracket = A2(
	$elm$parser$Parser$Advanced$Token,
	']',
	$elm$parser$Parser$Expecting('a `]`'));
var $dillonkearns$elm_markdown$Parser$Token$openingSquareBracket = A2(
	$elm$parser$Parser$Advanced$Token,
	'[',
	$elm$parser$Parser$Expecting('a `[`'));
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$labelParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel),
		$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$openingSquareBracket)),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntil($dillonkearns$elm_markdown$Parser$Token$closingSquareBracket)),
		$elm$parser$Parser$Advanced$symbol(
			A2(
				$elm$parser$Parser$Advanced$Token,
				']:',
				$elm$parser$Parser$Expecting(']:')))));
var $dillonkearns$elm_markdown$Parser$Token$doubleQuote = A2(
	$elm$parser$Parser$Advanced$Token,
	'\u0022',
	$elm$parser$Parser$Expecting('a double quote'));
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$hasNoBlankLine = function (str) {
	return A2($elm$core$String$contains, '\u000A\u000A', str) ? $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Expecting('no blank line')) : $elm$parser$Parser$Advanced$succeed(str);
};
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$chompWhile(
		function (c) {
			return (!$dillonkearns$elm_markdown$Whitespace$isLineEnd(c)) && $dillonkearns$elm_markdown$Whitespace$isWhitespace(c);
		}),
	$dillonkearns$elm_markdown$Helpers$lineEndOrEnd);
var $dillonkearns$elm_markdown$Whitespace$requiredWhitespace = A2(
	$elm$parser$Parser$Advanced$ignorer,
	A2(
		$elm$parser$Parser$Advanced$chompIf,
		$dillonkearns$elm_markdown$Whitespace$isWhitespace,
		$elm$parser$Parser$Expecting('Required whitespace')),
	$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isWhitespace));
var $dillonkearns$elm_markdown$Parser$Token$singleQuote = A2(
	$elm$parser$Parser$Advanced$Token,
	'\u0027',
	$elm$parser$Parser$Expecting('a single quote'));
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$titleParser = function () {
	var inSingleQuotes = A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Just),
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$singleQuote)),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$andThen,
					$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$hasNoBlankLine,
					$elm$parser$Parser$Advanced$getChompedString(
						$elm$parser$Parser$Advanced$chompUntil($dillonkearns$elm_markdown$Parser$Token$singleQuote))),
				$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$singleQuote)),
			$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline));
	var inDoubleQuotes = A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Just),
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$doubleQuote)),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$andThen,
					$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$hasNoBlankLine,
					$elm$parser$Parser$Advanced$getChompedString(
						$elm$parser$Parser$Advanced$chompUntil($dillonkearns$elm_markdown$Parser$Token$doubleQuote))),
				$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$doubleQuote)),
			$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline));
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'title',
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$Advanced$backtrackable(
					A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
							$dillonkearns$elm_markdown$Whitespace$requiredWhitespace),
						$elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[
									inDoubleQuotes,
									inSingleQuotes,
									$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing)
								])))),
					A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing),
					$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline)
				])));
}();
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$parser = A2(
	$elm$parser$Parser$Advanced$inContext,
	'link reference definition',
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						F3(
							function (label, destination, title) {
								return _Utils_Tuple2(
									label,
									{d1: destination, ft: title});
							})),
					$dillonkearns$elm_markdown$Whitespace$upToThreeSpaces),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$labelParser,
							$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab)),
						$elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[
									$dillonkearns$elm_markdown$Whitespace$lineEnd,
									$elm$parser$Parser$Advanced$succeed(0)
								]))),
					$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab))),
			$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$destinationParser),
		$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$titleParser));
var $dillonkearns$elm_markdown$ThematicBreak$ThematicBreak = 0;
var $dillonkearns$elm_markdown$ThematicBreak$whitespace = $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab);
var $dillonkearns$elm_markdown$ThematicBreak$withChar = function (tchar) {
	var token = $dillonkearns$elm_markdown$Parser$Token$parseString(
		$elm$core$String$fromChar(tchar));
	return A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed(0),
								token),
							$dillonkearns$elm_markdown$ThematicBreak$whitespace),
						token),
					$dillonkearns$elm_markdown$ThematicBreak$whitespace),
				token),
			$elm$parser$Parser$Advanced$chompWhile(
				function (c) {
					return _Utils_eq(c, tchar) || $dillonkearns$elm_markdown$Whitespace$isSpaceOrTab(c);
				})),
		$dillonkearns$elm_markdown$Helpers$lineEndOrEnd);
};
var $dillonkearns$elm_markdown$ThematicBreak$parseThematicBreak = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$dillonkearns$elm_markdown$ThematicBreak$withChar('-'),
			$dillonkearns$elm_markdown$ThematicBreak$withChar('*'),
			$dillonkearns$elm_markdown$ThematicBreak$withChar('_')
		]));
var $dillonkearns$elm_markdown$ThematicBreak$parser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$dillonkearns$elm_markdown$Whitespace$space),
					$elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[
								$dillonkearns$elm_markdown$Whitespace$space,
								$elm$parser$Parser$Advanced$succeed(0)
							]))),
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							$dillonkearns$elm_markdown$Whitespace$space,
							$elm$parser$Parser$Advanced$succeed(0)
						]))),
			$dillonkearns$elm_markdown$ThematicBreak$parseThematicBreak),
			$dillonkearns$elm_markdown$ThematicBreak$parseThematicBreak
		]));
var $dillonkearns$elm_markdown$Markdown$RawBlock$LevelOne = 0;
var $dillonkearns$elm_markdown$Markdown$RawBlock$LevelTwo = 1;
var $dillonkearns$elm_markdown$Markdown$RawBlock$SetextLine = F2(
	function (a, b) {
		return {$: 13, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Parser$Token$equals = A2(
	$elm$parser$Parser$Advanced$Token,
	'=',
	$elm$parser$Parser$Expecting('a `=`'));
var $dillonkearns$elm_markdown$Parser$Token$minus = A2(
	$elm$parser$Parser$Advanced$Token,
	'-',
	$elm$parser$Parser$Expecting('a `-`'));
var $dillonkearns$elm_markdown$Markdown$Parser$setextLineParser = function () {
	var setextLevel = F3(
		function (level, levelToken, levelChar) {
			return A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(level),
					$elm$parser$Parser$Advanced$token(levelToken)),
				$elm$parser$Parser$Advanced$chompWhile(
					$elm$core$Basics$eq(levelChar)));
		});
	return A2(
		$elm$parser$Parser$Advanced$mapChompedString,
		F2(
			function (raw, level) {
				return A2($dillonkearns$elm_markdown$Markdown$RawBlock$SetextLine, level, raw);
			}),
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$dillonkearns$elm_markdown$Whitespace$upToThreeSpaces),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[
								A3(setextLevel, 0, $dillonkearns$elm_markdown$Parser$Token$equals, '='),
								A3(setextLevel, 1, $dillonkearns$elm_markdown$Parser$Token$minus, '-')
							])),
					$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab)),
				$dillonkearns$elm_markdown$Helpers$lineEndOrEnd)));
}();
var $dillonkearns$elm_markdown$Markdown$RawBlock$TableDelimiter = function (a) {
	return {$: 9, a: a};
};
var $dillonkearns$elm_markdown$Markdown$TableParser$chompSinglelineWhitespace = $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab);
var $dillonkearns$elm_markdown$Parser$Extra$maybeChomp = function (condition) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$chompIf,
				condition,
				$elm$parser$Parser$Problem('Character not found')),
				$elm$parser$Parser$Advanced$succeed(0)
			]));
};
var $dillonkearns$elm_markdown$Markdown$TableParser$requirePipeIfNotFirst = function (columns) {
	return $elm$core$List$isEmpty(columns) ? $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$dillonkearns$elm_markdown$Parser$Token$parseString('|'),
				$elm$parser$Parser$Advanced$succeed(0)
			])) : $dillonkearns$elm_markdown$Parser$Token$parseString('|');
};
var $dillonkearns$elm_markdown$Markdown$TableParser$delimiterRowHelp = function (revDelimiterColumns) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$elm$parser$Parser$Advanced$backtrackable(
				A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(revDelimiterColumns);
					},
					$dillonkearns$elm_markdown$Parser$Token$parseString('|\u000A'))),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v1) {
					return $elm$parser$Parser$Advanced$Done(revDelimiterColumns);
				},
				$dillonkearns$elm_markdown$Parser$Token$parseString('\u000A')),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v2) {
					return $elm$parser$Parser$Advanced$Done(revDelimiterColumns);
				},
				$elm$parser$Parser$Advanced$end(
					$elm$parser$Parser$Expecting('end'))),
				$elm$parser$Parser$Advanced$backtrackable(
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							$elm$parser$Parser$Advanced$Done(revDelimiterColumns)),
						$dillonkearns$elm_markdown$Parser$Token$parseString('|')),
					$elm$parser$Parser$Advanced$end(
						$elm$parser$Parser$Expecting('end')))),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (column) {
								return $elm$parser$Parser$Advanced$Loop(
									A2($elm$core$List$cons, column, revDelimiterColumns));
							}),
						$dillonkearns$elm_markdown$Markdown$TableParser$requirePipeIfNotFirst(revDelimiterColumns)),
					$dillonkearns$elm_markdown$Markdown$TableParser$chompSinglelineWhitespace),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$getChompedString(
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed(0),
									$dillonkearns$elm_markdown$Parser$Extra$maybeChomp(
										function (c) {
											return c === ':';
										})),
								$dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore(
									function (c) {
										return c === '-';
									})),
							$dillonkearns$elm_markdown$Parser$Extra$maybeChomp(
								function (c) {
									return c === ':';
								}))),
					$dillonkearns$elm_markdown$Markdown$TableParser$chompSinglelineWhitespace))
			]));
};
var $dillonkearns$elm_markdown$Markdown$Block$AlignCenter = 2;
var $dillonkearns$elm_markdown$Markdown$Block$AlignLeft = 0;
var $dillonkearns$elm_markdown$Markdown$Block$AlignRight = 1;
var $dillonkearns$elm_markdown$Markdown$TableParser$delimiterToAlignment = function (cell) {
	var _v0 = _Utils_Tuple2(
		A2($elm$core$String$startsWith, ':', cell),
		A2($elm$core$String$endsWith, ':', cell));
	if (_v0.a) {
		if (_v0.b) {
			return $elm$core$Maybe$Just(2);
		} else {
			return $elm$core$Maybe$Just(0);
		}
	} else {
		if (_v0.b) {
			return $elm$core$Maybe$Just(1);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	}
};
var $dillonkearns$elm_markdown$Markdown$TableParser$delimiterRowParser = A2(
	$elm$parser$Parser$Advanced$andThen,
	function (delimiterRow) {
		var trimmed = delimiterRow.a.du;
		var headers = delimiterRow.b;
		return $elm$core$List$isEmpty(headers) ? $elm$parser$Parser$Advanced$problem(
			$elm$parser$Parser$Expecting('Must have at least one column in delimiter row.')) : ((($elm$core$List$length(headers) === 1) && (!(A2($elm$core$String$startsWith, '|', trimmed) && A2($elm$core$String$endsWith, '|', trimmed)))) ? $elm$parser$Parser$Advanced$problem(
			$elm$parser$Parser$Problem('Tables with a single column must have pipes at the start and end of the delimiter row to avoid ambiguity.')) : $elm$parser$Parser$Advanced$succeed(delimiterRow));
	},
	A2(
		$elm$parser$Parser$Advanced$mapChompedString,
		F2(
			function (delimiterText, revDelimiterColumns) {
				return A2(
					$dillonkearns$elm_markdown$Markdown$Table$TableDelimiterRow,
					{
						c9: delimiterText,
						du: $elm$core$String$trim(delimiterText)
					},
					A2(
						$elm$core$List$map,
						$dillonkearns$elm_markdown$Markdown$TableParser$delimiterToAlignment,
						$elm$core$List$reverse(revDelimiterColumns)));
			}),
		A2($elm$parser$Parser$Advanced$loop, _List_Nil, $dillonkearns$elm_markdown$Markdown$TableParser$delimiterRowHelp)));
var $dillonkearns$elm_markdown$Markdown$Parser$tableDelimiterInOpenParagraph = A2($elm$parser$Parser$Advanced$map, $dillonkearns$elm_markdown$Markdown$RawBlock$TableDelimiter, $dillonkearns$elm_markdown$Markdown$TableParser$delimiterRowParser);
var $dillonkearns$elm_markdown$Markdown$TableParser$standardizeRowLength = F2(
	function (expectedLength, row) {
		var rowLength = $elm$core$List$length(row);
		var _v0 = A2($elm$core$Basics$compare, expectedLength, rowLength);
		switch (_v0) {
			case 0:
				return A2($elm$core$List$take, expectedLength, row);
			case 1:
				return row;
			default:
				return _Utils_ap(
					row,
					A2($elm$core$List$repeat, expectedLength - rowLength, ''));
		}
	});
var $dillonkearns$elm_markdown$Markdown$TableParser$bodyRowParser = function (expectedRowLength) {
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		function (row) {
			return ($elm$core$List$isEmpty(row) || A2($elm$core$List$all, $elm$core$String$isEmpty, row)) ? $elm$parser$Parser$Advanced$problem(
				$elm$parser$Parser$Problem('A line must have at least one column')) : $elm$parser$Parser$Advanced$succeed(
				A2($dillonkearns$elm_markdown$Markdown$TableParser$standardizeRowLength, expectedRowLength, row));
		},
		$dillonkearns$elm_markdown$Markdown$TableParser$rowParser);
};
var $dillonkearns$elm_markdown$Markdown$Parser$tableRowIfTableStarted = function (_v0) {
	var headers = _v0.a;
	var body = _v0.b;
	return A2(
		$elm$parser$Parser$Advanced$map,
		function (row) {
			return $dillonkearns$elm_markdown$Markdown$RawBlock$Table(
				A2(
					$dillonkearns$elm_markdown$Markdown$Table$Table,
					headers,
					_Utils_ap(
						body,
						_List_fromArray(
							[row]))));
		},
		$dillonkearns$elm_markdown$Markdown$TableParser$bodyRowParser(
			$elm$core$List$length(headers)));
};
var $dillonkearns$elm_markdown$Markdown$Block$H1 = 0;
var $dillonkearns$elm_markdown$Markdown$Block$H2 = 1;
var $dillonkearns$elm_markdown$Markdown$Block$H3 = 2;
var $dillonkearns$elm_markdown$Markdown$Block$H4 = 3;
var $dillonkearns$elm_markdown$Markdown$Block$H5 = 4;
var $dillonkearns$elm_markdown$Markdown$Block$H6 = 5;
var $dillonkearns$elm_markdown$Markdown$Parser$toHeading = function (level) {
	switch (level) {
		case 1:
			return $elm$core$Result$Ok(0);
		case 2:
			return $elm$core$Result$Ok(1);
		case 3:
			return $elm$core$Result$Ok(2);
		case 4:
			return $elm$core$Result$Ok(3);
		case 5:
			return $elm$core$Result$Ok(4);
		case 6:
			return $elm$core$Result$Ok(5);
		default:
			return $elm$core$Result$Err(
				$elm$parser$Parser$Expecting(
					'A heading with 1 to 6 #\u0027s, but found ' + $elm$core$String$fromInt(level)));
	}
};
var $dillonkearns$elm_markdown$Markdown$ListItem$EmptyItem = {$: 2};
var $dillonkearns$elm_markdown$Markdown$ListItem$PlainItem = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$Markdown$ListItem$TaskItem = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$UnorderedList$getIntendedCodeItem = F4(
	function (markerStartPos, listMarker, markerEndPos, _v0) {
		var bodyStartPos = _v0.a;
		var item = _v0.b;
		var spaceNum = bodyStartPos - markerEndPos;
		if (spaceNum <= 4) {
			return _Utils_Tuple3(listMarker, bodyStartPos - markerStartPos, item);
		} else {
			var intendedCodeItem = function () {
				switch (item.$) {
					case 0:
						var completion = item.a;
						var string = item.b;
						return A2(
							$dillonkearns$elm_markdown$Markdown$ListItem$TaskItem,
							completion,
							_Utils_ap(
								A2($elm$core$String$repeat, spaceNum - 1, ' '),
								string));
					case 1:
						var string = item.a;
						return $dillonkearns$elm_markdown$Markdown$ListItem$PlainItem(
							_Utils_ap(
								A2($elm$core$String$repeat, spaceNum - 1, ' '),
								string));
					default:
						return $dillonkearns$elm_markdown$Markdown$ListItem$EmptyItem;
				}
			}();
			return _Utils_Tuple3(listMarker, (markerEndPos - markerStartPos) + 1, intendedCodeItem);
		}
	});
var $dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListEmptyItemParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	$elm$parser$Parser$Advanced$succeed(
		function (bodyStartPos) {
			return _Utils_Tuple2(bodyStartPos, $dillonkearns$elm_markdown$Markdown$ListItem$EmptyItem);
		}),
	A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$getCol, $dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
var $dillonkearns$elm_markdown$Markdown$ListItem$Complete = 1;
var $dillonkearns$elm_markdown$Markdown$ListItem$Incomplete = 0;
var $dillonkearns$elm_markdown$Markdown$ListItem$taskItemParser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(1),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'[x] ',
					$elm$parser$Parser$ExpectingSymbol('[x] ')))),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(1),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'[X] ',
					$elm$parser$Parser$ExpectingSymbol('[X] ')))),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(0),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'[ ] ',
					$elm$parser$Parser$ExpectingSymbol('[ ] '))))
		]));
var $dillonkearns$elm_markdown$Markdown$ListItem$parser = A2(
	$elm$parser$Parser$Advanced$keeper,
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$ListItem$TaskItem),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$dillonkearns$elm_markdown$Markdown$ListItem$taskItemParser,
					$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab))),
				$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$ListItem$PlainItem)
			])),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
		$dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
var $dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListItemBodyParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(
				F2(
					function (bodyStartPos, item) {
						return _Utils_Tuple2(bodyStartPos, item);
					})),
			$dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab)),
		$elm$parser$Parser$Advanced$getCol),
	$dillonkearns$elm_markdown$Markdown$ListItem$parser);
var $dillonkearns$elm_markdown$Markdown$UnorderedList$Asterisk = 2;
var $dillonkearns$elm_markdown$Markdown$UnorderedList$Minus = 0;
var $dillonkearns$elm_markdown$Markdown$UnorderedList$Plus = 1;
var $dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListMarkerParser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(0),
				A2($dillonkearns$elm_markdown$Parser$Extra$upTo, 3, $dillonkearns$elm_markdown$Whitespace$space)),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'-',
					$elm$parser$Parser$ExpectingSymbol('-')))),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(1),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'+',
					$elm$parser$Parser$ExpectingSymbol('+')))),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(2),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'*',
					$elm$parser$Parser$ExpectingSymbol('*'))))
		]));
var $dillonkearns$elm_markdown$Markdown$UnorderedList$parser = function (previousWasBody) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$UnorderedList$getIntendedCodeItem),
					$elm$parser$Parser$Advanced$getCol),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListMarkerParser)),
			$elm$parser$Parser$Advanced$getCol),
		previousWasBody ? $dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListItemBodyParser : $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[$dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListEmptyItemParser, $dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListItemBodyParser])));
};
var $dillonkearns$elm_markdown$Markdown$Parser$unorderedListBlock = function (previousWasBody) {
	var parseListItem = F2(
		function (listmarker, unparsedListItem) {
			switch (unparsedListItem.$) {
				case 0:
					var completion = unparsedListItem.a;
					var body = unparsedListItem.b;
					return {
						dM: body,
						ez: listmarker,
						t: $elm$core$Maybe$Just(
							function () {
								if (completion === 1) {
									return true;
								} else {
									return false;
								}
							}())
					};
				case 1:
					var body = unparsedListItem.a;
					return {dM: body, ez: listmarker, t: $elm$core$Maybe$Nothing};
				default:
					return {dM: '', ez: listmarker, t: $elm$core$Maybe$Nothing};
			}
		});
	return A2(
		$elm$parser$Parser$Advanced$map,
		function (_v0) {
			var listmarker = _v0.a;
			var intended = _v0.b;
			var unparsedListItem = _v0.c;
			return A4(
				$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
				true,
				intended,
				_List_Nil,
				A2(parseListItem, listmarker, unparsedListItem));
		},
		$dillonkearns$elm_markdown$Markdown$UnorderedList$parser(previousWasBody));
};
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (!result.$) {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$childToBlocks = F2(
	function (node, blocks) {
		switch (node.$) {
			case 0:
				var tag = node.a;
				var attributes = node.b;
				var children = node.c;
				var _v106 = $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocks(children);
				if (!_v106.$) {
					var childrenAsBlocks = _v106.a;
					var block = $dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
						A3($dillonkearns$elm_markdown$Markdown$Block$HtmlElement, tag, attributes, childrenAsBlocks));
					return $elm$core$Result$Ok(
						A2($elm$core$List$cons, block, blocks));
				} else {
					var err = _v106.a;
					return $elm$core$Result$Err(err);
				}
			case 1:
				var innerText = node.a;
				var _v107 = $dillonkearns$elm_markdown$Markdown$Parser$parse(innerText);
				if (!_v107.$) {
					var value = _v107.a;
					return $elm$core$Result$Ok(
						_Utils_ap(
							$elm$core$List$reverse(value),
							blocks));
				} else {
					var error = _v107.a;
					return $elm$core$Result$Err(
						$elm$parser$Parser$Expecting(
							A2(
								$elm$core$String$join,
								'\u000A',
								A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$deadEndToString, error))));
				}
			case 2:
				var string = node.a;
				return $elm$core$Result$Ok(
					A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
							$dillonkearns$elm_markdown$Markdown$Block$HtmlComment(string)),
						blocks));
			case 3:
				var string = node.a;
				return $elm$core$Result$Ok(
					A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
							$dillonkearns$elm_markdown$Markdown$Block$Cdata(string)),
						blocks));
			case 4:
				var string = node.a;
				return $elm$core$Result$Ok(
					A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
							$dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction(string)),
						blocks));
			default:
				var declarationType = node.a;
				var content = node.b;
				return $elm$core$Result$Ok(
					A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
							A2($dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration, declarationType, content)),
						blocks));
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$completeBlocks = function (state) {
	var _v91 = state.c;
	_v91$5:
	while (true) {
		if (_v91.b) {
			switch (_v91.a.$) {
				case 11:
					var body2 = _v91.a.a;
					var rest = _v91.b;
					var _v92 = A2(
						$elm$parser$Parser$Advanced$run,
						$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
						body2);
					if (!_v92.$) {
						var value = _v92.a;
						return $elm$parser$Parser$Advanced$succeed(
							{
								b: _Utils_ap(state.b, value.b),
								c: A2(
									$elm$core$List$cons,
									$dillonkearns$elm_markdown$Markdown$RawBlock$ParsedBlockQuote(value.c),
									rest)
							});
					} else {
						var error = _v92.a;
						return $elm$parser$Parser$Advanced$problem(
							$elm$parser$Parser$Problem(
								$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(error)));
					}
				case 3:
					var _v93 = _v91.a;
					var tight = _v93.a;
					var intended = _v93.b;
					var closeListItems = _v93.c;
					var openListItem = _v93.d;
					var rest = _v91.b;
					var _v94 = A2(
						$elm$parser$Parser$Advanced$run,
						$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
						openListItem.dM);
					if (!_v94.$) {
						var value = _v94.a;
						var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.c) ? false : tight;
						return $elm$parser$Parser$Advanced$succeed(
							{
								b: _Utils_ap(state.b, value.b),
								c: A2(
									$elm$core$List$cons,
									A4(
										$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
										tight2,
										intended,
										A2(
											$elm$core$List$cons,
											{dM: value.c, t: openListItem.t},
											closeListItems),
										openListItem),
									rest)
							});
					} else {
						var e = _v94.a;
						return $elm$parser$Parser$Advanced$problem(
							$elm$parser$Parser$Problem(
								$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
					}
				case 4:
					var _v99 = _v91.a;
					var tight = _v99.a;
					var intended = _v99.b;
					var marker = _v99.c;
					var order = _v99.d;
					var closeListItems = _v99.e;
					var openListItem = _v99.f;
					var rest = _v91.b;
					var _v100 = A2(
						$elm$parser$Parser$Advanced$run,
						$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
						openListItem);
					if (!_v100.$) {
						var value = _v100.a;
						var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.c) ? false : tight;
						return $elm$parser$Parser$Advanced$succeed(
							{
								b: _Utils_ap(state.b, value.b),
								c: A2(
									$elm$core$List$cons,
									A6(
										$dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock,
										tight2,
										intended,
										marker,
										order,
										A2($elm$core$List$cons, value.c, closeListItems),
										openListItem),
									rest)
							});
					} else {
						var e = _v100.a;
						return $elm$parser$Parser$Advanced$problem(
							$elm$parser$Parser$Problem(
								$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
					}
				case 10:
					if (_v91.b.b) {
						switch (_v91.b.a.$) {
							case 3:
								var _v95 = _v91.a;
								var _v96 = _v91.b;
								var _v97 = _v96.a;
								var tight = _v97.a;
								var intended = _v97.b;
								var closeListItems = _v97.c;
								var openListItem = _v97.d;
								var rest = _v96.b;
								var _v98 = A2(
									$elm$parser$Parser$Advanced$run,
									$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
									openListItem.dM);
								if (!_v98.$) {
									var value = _v98.a;
									var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.c) ? false : tight;
									return $elm$parser$Parser$Advanced$succeed(
										{
											b: _Utils_ap(state.b, value.b),
											c: A2(
												$elm$core$List$cons,
												A4(
													$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
													tight2,
													intended,
													A2(
														$elm$core$List$cons,
														{dM: value.c, t: openListItem.t},
														closeListItems),
													openListItem),
												rest)
										});
								} else {
									var e = _v98.a;
									return $elm$parser$Parser$Advanced$problem(
										$elm$parser$Parser$Problem(
											$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
								}
							case 4:
								var _v101 = _v91.a;
								var _v102 = _v91.b;
								var _v103 = _v102.a;
								var tight = _v103.a;
								var intended = _v103.b;
								var marker = _v103.c;
								var order = _v103.d;
								var closeListItems = _v103.e;
								var openListItem = _v103.f;
								var rest = _v102.b;
								var _v104 = A2(
									$elm$parser$Parser$Advanced$run,
									$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
									openListItem);
								if (!_v104.$) {
									var value = _v104.a;
									var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.c) ? false : tight;
									return $elm$parser$Parser$Advanced$succeed(
										{
											b: _Utils_ap(state.b, value.b),
											c: A2(
												$elm$core$List$cons,
												A6(
													$dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock,
													tight2,
													intended,
													marker,
													order,
													A2($elm$core$List$cons, value.c, closeListItems),
													openListItem),
												rest)
										});
								} else {
									var e = _v104.a;
									return $elm$parser$Parser$Advanced$problem(
										$elm$parser$Parser$Problem(
											$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
								}
							default:
								break _v91$5;
						}
					} else {
						break _v91$5;
					}
				default:
					break _v91$5;
			}
		} else {
			break _v91$5;
		}
	}
	return $elm$parser$Parser$Advanced$succeed(state);
};
var $dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks = F2(
	function (state, newRawBlock) {
		var _v41 = _Utils_Tuple2(newRawBlock, state.c);
		_v41$13:
		while (true) {
			if (_v41.b.b) {
				switch (_v41.b.a.$) {
					case 5:
						if (_v41.a.$ === 5) {
							var block1 = _v41.a.a;
							var _v42 = _v41.b;
							var block2 = _v42.a.a;
							var rest = _v42.b;
							return $elm$parser$Parser$Advanced$succeed(
								{
									b: state.b,
									c: A2(
										$elm$core$List$cons,
										$dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock(
											{
												dM: A2($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll, block2.dM, block1.dM),
												es: $elm$core$Maybe$Nothing
											}),
										rest)
								});
						} else {
							break _v41$13;
						}
					case 6:
						switch (_v41.a.$) {
							case 6:
								var block1 = _v41.a.a;
								var _v43 = _v41.b;
								var block2 = _v43.a.a;
								var rest = _v43.b;
								return $elm$parser$Parser$Advanced$succeed(
									{
										b: state.b,
										c: A2(
											$elm$core$List$cons,
											$dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock(
												A2($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll, block2, block1)),
											rest)
									});
							case 10:
								var _v44 = _v41.a;
								var _v45 = _v41.b;
								var block = _v45.a.a;
								var rest = _v45.b;
								return $elm$parser$Parser$Advanced$succeed(
									{
										b: state.b,
										c: A2(
											$elm$core$List$cons,
											$dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock(
												A2($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll, block, '\u000A')),
											rest)
									});
							default:
								break _v41$13;
						}
					case 11:
						var _v46 = _v41.b;
						var body2 = _v46.a.a;
						var rest = _v46.b;
						switch (newRawBlock.$) {
							case 11:
								var body1 = newRawBlock.a;
								return $elm$parser$Parser$Advanced$succeed(
									{
										b: state.b,
										c: A2(
											$elm$core$List$cons,
											$dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote(
												A2($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll, body2, body1)),
											rest)
									});
							case 1:
								var body1 = newRawBlock.a;
								var _v48 = A2(
									$elm$parser$Parser$Advanced$run,
									$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
									body2);
								if (!_v48.$) {
									var value = _v48.a;
									var _v49 = value.c;
									if (_v49.b) {
										var last = _v49.a;
										if ($dillonkearns$elm_markdown$Markdown$Parser$endWithOpenBlockOrParagraph(last) && (!A2($elm$core$String$endsWith, '\u000A', body2))) {
											return $elm$parser$Parser$Advanced$succeed(
												{
													b: state.b,
													c: A2(
														$elm$core$List$cons,
														$dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote(
															A2($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll, body2, body1)),
														rest)
												});
										} else {
											var _v50 = A2(
												$elm$parser$Parser$Advanced$run,
												$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
												body2);
											if (!_v50.$) {
												var value1 = _v50.a;
												return $elm$parser$Parser$Advanced$succeed(
													{
														b: _Utils_ap(state.b, value.b),
														c: A2(
															$elm$core$List$cons,
															newRawBlock,
															A2(
																$elm$core$List$cons,
																$dillonkearns$elm_markdown$Markdown$RawBlock$ParsedBlockQuote(value1.c),
																rest))
													});
											} else {
												var e1 = _v50.a;
												return $elm$parser$Parser$Advanced$problem(
													$elm$parser$Parser$Problem(
														$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e1)));
											}
										}
									} else {
										var _v51 = A2(
											$elm$parser$Parser$Advanced$run,
											$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
											body2);
										if (!_v51.$) {
											var value1 = _v51.a;
											return $elm$parser$Parser$Advanced$succeed(
												{
													b: _Utils_ap(state.b, value.b),
													c: A2(
														$elm$core$List$cons,
														newRawBlock,
														A2(
															$elm$core$List$cons,
															$dillonkearns$elm_markdown$Markdown$RawBlock$ParsedBlockQuote(value1.c),
															rest))
												});
										} else {
											var e1 = _v51.a;
											return $elm$parser$Parser$Advanced$problem(
												$elm$parser$Parser$Problem(
													$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e1)));
										}
									}
								} else {
									var e = _v48.a;
									return $elm$parser$Parser$Advanced$problem(
										$elm$parser$Parser$Problem(
											$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
								}
							case 6:
								var body1 = newRawBlock.a;
								var _v52 = A2(
									$elm$parser$Parser$Advanced$run,
									$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
									body2);
								if (!_v52.$) {
									var value = _v52.a;
									var _v53 = value.c;
									if (_v53.b && (_v53.a.$ === 1)) {
										return $elm$parser$Parser$Advanced$succeed(
											{
												b: state.b,
												c: A2(
													$elm$core$List$cons,
													$dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote(
														A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, ' ', body2, body1)),
													rest)
											});
									} else {
										var _v54 = A2(
											$elm$parser$Parser$Advanced$run,
											$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
											body2);
										if (!_v54.$) {
											var value1 = _v54.a;
											return $elm$parser$Parser$Advanced$succeed(
												{
													b: _Utils_ap(state.b, value.b),
													c: A2(
														$elm$core$List$cons,
														newRawBlock,
														A2(
															$elm$core$List$cons,
															$dillonkearns$elm_markdown$Markdown$RawBlock$ParsedBlockQuote(value1.c),
															rest))
												});
										} else {
											var e1 = _v54.a;
											return $elm$parser$Parser$Advanced$problem(
												$elm$parser$Parser$Problem(
													$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e1)));
										}
									}
								} else {
									var e = _v52.a;
									return $elm$parser$Parser$Advanced$problem(
										$elm$parser$Parser$Problem(
											$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
								}
							default:
								var _v55 = A2(
									$elm$parser$Parser$Advanced$run,
									$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
									body2);
								if (!_v55.$) {
									var value = _v55.a;
									return $elm$parser$Parser$Advanced$succeed(
										{
											b: _Utils_ap(state.b, value.b),
											c: A2(
												$elm$core$List$cons,
												newRawBlock,
												A2(
													$elm$core$List$cons,
													$dillonkearns$elm_markdown$Markdown$RawBlock$ParsedBlockQuote(value.c),
													rest))
										});
								} else {
									var e = _v55.a;
									return $elm$parser$Parser$Advanced$problem(
										$elm$parser$Parser$Problem(
											$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
								}
						}
					case 3:
						var _v56 = _v41.b;
						var _v57 = _v56.a;
						var tight = _v57.a;
						var intended1 = _v57.b;
						var closeListItems2 = _v57.c;
						var openListItem2 = _v57.d;
						var rest = _v56.b;
						switch (newRawBlock.$) {
							case 3:
								var intended2 = newRawBlock.b;
								var openListItem1 = newRawBlock.d;
								if (_Utils_eq(openListItem2.ez, openListItem1.ez)) {
									var _v59 = A2(
										$elm$parser$Parser$Advanced$run,
										$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
										openListItem2.dM);
									if (!_v59.$) {
										var value = _v59.a;
										return A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.c) ? $elm$parser$Parser$Advanced$succeed(
											{
												b: _Utils_ap(state.b, value.b),
												c: A2(
													$elm$core$List$cons,
													A4(
														$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
														false,
														intended2,
														A2(
															$elm$core$List$cons,
															{dM: value.c, t: openListItem2.t},
															closeListItems2),
														openListItem1),
													rest)
											}) : $elm$parser$Parser$Advanced$succeed(
											{
												b: _Utils_ap(state.b, value.b),
												c: A2(
													$elm$core$List$cons,
													A4(
														$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
														tight,
														intended2,
														A2(
															$elm$core$List$cons,
															{dM: value.c, t: openListItem2.t},
															closeListItems2),
														openListItem1),
													rest)
											});
									} else {
										var e = _v59.a;
										return $elm$parser$Parser$Advanced$problem(
											$elm$parser$Parser$Problem(
												$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
									}
								} else {
									var _v60 = A2(
										$elm$parser$Parser$Advanced$run,
										$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
										openListItem2.dM);
									if (!_v60.$) {
										var value = _v60.a;
										var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.c) ? false : tight;
										return $elm$parser$Parser$Advanced$succeed(
											{
												b: _Utils_ap(state.b, value.b),
												c: A2(
													$elm$core$List$cons,
													newRawBlock,
													A2(
														$elm$core$List$cons,
														A4(
															$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
															tight2,
															intended1,
															A2(
																$elm$core$List$cons,
																{dM: value.c, t: openListItem2.t},
																closeListItems2),
															openListItem1),
														rest))
											});
									} else {
										var e = _v60.a;
										return $elm$parser$Parser$Advanced$problem(
											$elm$parser$Parser$Problem(
												$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
									}
								}
							case 1:
								var body1 = newRawBlock.a;
								return $elm$parser$Parser$Advanced$succeed(
									{
										b: state.b,
										c: A2(
											$elm$core$List$cons,
											A4(
												$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
												tight,
												intended1,
												closeListItems2,
												_Utils_update(
													openListItem2,
													{
														dM: A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '\u000A', openListItem2.dM, body1)
													})),
											rest)
									});
							default:
								var _v61 = A2(
									$elm$parser$Parser$Advanced$run,
									$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
									openListItem2.dM);
								if (!_v61.$) {
									var value = _v61.a;
									var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.c) ? false : tight;
									return $elm$parser$Parser$Advanced$succeed(
										{
											b: _Utils_ap(state.b, value.b),
											c: A2(
												$elm$core$List$cons,
												newRawBlock,
												A2(
													$elm$core$List$cons,
													A4(
														$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
														tight2,
														intended1,
														A2(
															$elm$core$List$cons,
															{dM: value.c, t: openListItem2.t},
															closeListItems2),
														openListItem2),
													rest))
										});
								} else {
									var e = _v61.a;
									return $elm$parser$Parser$Advanced$problem(
										$elm$parser$Parser$Problem(
											$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
								}
						}
					case 4:
						var _v62 = _v41.b;
						var _v63 = _v62.a;
						var tight = _v63.a;
						var intended1 = _v63.b;
						var marker = _v63.c;
						var order = _v63.d;
						var closeListItems2 = _v63.e;
						var openListItem2 = _v63.f;
						var rest = _v62.b;
						switch (newRawBlock.$) {
							case 4:
								var intended2 = newRawBlock.b;
								var marker2 = newRawBlock.c;
								var openListItem1 = newRawBlock.f;
								if (_Utils_eq(marker, marker2)) {
									var _v65 = A2(
										$elm$parser$Parser$Advanced$run,
										$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
										openListItem2);
									if (!_v65.$) {
										var value = _v65.a;
										var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.c) ? false : tight;
										return $elm$parser$Parser$Advanced$succeed(
											{
												b: _Utils_ap(state.b, value.b),
												c: A2(
													$elm$core$List$cons,
													A6(
														$dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock,
														tight2,
														intended2,
														marker,
														order,
														A2($elm$core$List$cons, value.c, closeListItems2),
														openListItem1),
													rest)
											});
									} else {
										var e = _v65.a;
										return $elm$parser$Parser$Advanced$problem(
											$elm$parser$Parser$Problem(
												$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
									}
								} else {
									var _v66 = A2(
										$elm$parser$Parser$Advanced$run,
										$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
										openListItem2);
									if (!_v66.$) {
										var value = _v66.a;
										var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.c) ? false : tight;
										return $elm$parser$Parser$Advanced$succeed(
											{
												b: _Utils_ap(state.b, value.b),
												c: A2(
													$elm$core$List$cons,
													newRawBlock,
													A2(
														$elm$core$List$cons,
														A6(
															$dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock,
															tight2,
															intended1,
															marker,
															order,
															A2($elm$core$List$cons, value.c, closeListItems2),
															openListItem2),
														rest))
											});
									} else {
										var e = _v66.a;
										return $elm$parser$Parser$Advanced$problem(
											$elm$parser$Parser$Problem(
												$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
									}
								}
							case 1:
								var body1 = newRawBlock.a;
								return $elm$parser$Parser$Advanced$succeed(
									{
										b: state.b,
										c: A2(
											$elm$core$List$cons,
											A6($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock, tight, intended1, marker, order, closeListItems2, openListItem2 + ('\u000A' + body1)),
											rest)
									});
							default:
								var _v67 = A2(
									$elm$parser$Parser$Advanced$run,
									$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
									openListItem2);
								if (!_v67.$) {
									var value = _v67.a;
									var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.c) ? false : tight;
									return $elm$parser$Parser$Advanced$succeed(
										{
											b: _Utils_ap(state.b, value.b),
											c: A2(
												$elm$core$List$cons,
												newRawBlock,
												A2(
													$elm$core$List$cons,
													A6(
														$dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock,
														tight2,
														intended1,
														marker,
														order,
														A2($elm$core$List$cons, value.c, closeListItems2),
														openListItem2),
													rest))
										});
								} else {
									var e = _v67.a;
									return $elm$parser$Parser$Advanced$problem(
										$elm$parser$Parser$Problem(
											$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
								}
						}
					case 1:
						switch (_v41.a.$) {
							case 1:
								var body1 = _v41.a.a;
								var _v68 = _v41.b;
								var body2 = _v68.a.a;
								var rest = _v68.b;
								return $elm$parser$Parser$Advanced$succeed(
									{
										b: state.b,
										c: A2(
											$elm$core$List$cons,
											$dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(
												A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '\u000A', body2, body1)),
											rest)
									});
							case 13:
								if (!_v41.a.a) {
									var _v69 = _v41.a;
									var _v70 = _v69.a;
									var _v71 = _v41.b;
									var unparsedInlines = _v71.a.a;
									var rest = _v71.b;
									return $elm$parser$Parser$Advanced$succeed(
										{
											b: state.b,
											c: A2(
												$elm$core$List$cons,
												A2($dillonkearns$elm_markdown$Markdown$RawBlock$Heading, 1, unparsedInlines),
												rest)
										});
								} else {
									var _v72 = _v41.a;
									var _v73 = _v72.a;
									var _v74 = _v41.b;
									var unparsedInlines = _v74.a.a;
									var rest = _v74.b;
									return $elm$parser$Parser$Advanced$succeed(
										{
											b: state.b,
											c: A2(
												$elm$core$List$cons,
												A2($dillonkearns$elm_markdown$Markdown$RawBlock$Heading, 2, unparsedInlines),
												rest)
										});
								}
							case 9:
								var _v75 = _v41.a.a;
								var text = _v75.a;
								var alignments = _v75.b;
								var _v76 = _v41.b;
								var rawHeaders = _v76.a.a;
								var rest = _v76.b;
								var _v77 = A2(
									$dillonkearns$elm_markdown$Markdown$TableParser$parseHeader,
									A2($dillonkearns$elm_markdown$Markdown$Table$TableDelimiterRow, text, alignments),
									rawHeaders);
								if (!_v77.$) {
									var headers = _v77.a;
									return $elm$parser$Parser$Advanced$succeed(
										{
											b: state.b,
											c: A2(
												$elm$core$List$cons,
												$dillonkearns$elm_markdown$Markdown$RawBlock$Table(
													A2($dillonkearns$elm_markdown$Markdown$Table$Table, headers, _List_Nil)),
												rest)
										});
								} else {
									return $elm$parser$Parser$Advanced$succeed(
										{
											b: state.b,
											c: A2(
												$elm$core$List$cons,
												$dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(
													A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '\u000A', rawHeaders, text.c9)),
												rest)
										});
								}
							default:
								break _v41$13;
						}
					case 8:
						if (_v41.a.$ === 8) {
							var updatedTable = _v41.a.a;
							var _v78 = _v41.b;
							var rest = _v78.b;
							return $elm$parser$Parser$Advanced$succeed(
								{
									b: state.b,
									c: A2(
										$elm$core$List$cons,
										$dillonkearns$elm_markdown$Markdown$RawBlock$Table(updatedTable),
										rest)
								});
						} else {
							break _v41$13;
						}
					case 10:
						if (_v41.b.b.b) {
							switch (_v41.b.b.a.$) {
								case 4:
									var _v79 = _v41.b;
									var _v80 = _v79.a;
									var _v81 = _v79.b;
									var _v82 = _v81.a;
									var tight = _v82.a;
									var intended1 = _v82.b;
									var marker = _v82.c;
									var order = _v82.d;
									var closeListItems2 = _v82.e;
									var openListItem2 = _v82.f;
									var rest = _v81.b;
									var _v83 = A2(
										$elm$parser$Parser$Advanced$run,
										$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
										openListItem2);
									if (!_v83.$) {
										var value = _v83.a;
										if (newRawBlock.$ === 4) {
											var intended2 = newRawBlock.b;
											var openListItem = newRawBlock.f;
											return $elm$parser$Parser$Advanced$succeed(
												{
													b: _Utils_ap(state.b, value.b),
													c: A2(
														$elm$core$List$cons,
														A6(
															$dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock,
															false,
															intended2,
															marker,
															order,
															A2($elm$core$List$cons, value.c, closeListItems2),
															openListItem),
														rest)
												});
										} else {
											return $elm$parser$Parser$Advanced$succeed(
												{
													b: _Utils_ap(state.b, value.b),
													c: A2(
														$elm$core$List$cons,
														newRawBlock,
														A2(
															$elm$core$List$cons,
															$dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine,
															A2(
																$elm$core$List$cons,
																A6(
																	$dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock,
																	tight,
																	intended1,
																	marker,
																	order,
																	A2($elm$core$List$cons, value.c, closeListItems2),
																	openListItem2),
																rest)))
												});
										}
									} else {
										var e = _v83.a;
										return $elm$parser$Parser$Advanced$problem(
											$elm$parser$Parser$Problem(
												$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
									}
								case 3:
									var _v85 = _v41.b;
									var _v86 = _v85.a;
									var _v87 = _v85.b;
									var _v88 = _v87.a;
									var tight = _v88.a;
									var intended1 = _v88.b;
									var closeListItems2 = _v88.c;
									var openListItem2 = _v88.d;
									var rest = _v87.b;
									var _v89 = A2(
										$elm$parser$Parser$Advanced$run,
										$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
										openListItem2.dM);
									if (!_v89.$) {
										var value = _v89.a;
										if (newRawBlock.$ === 3) {
											var openListItem = newRawBlock.d;
											return $elm$parser$Parser$Advanced$succeed(
												{
													b: _Utils_ap(state.b, value.b),
													c: A2(
														$elm$core$List$cons,
														A4(
															$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
															false,
															intended1,
															A2(
																$elm$core$List$cons,
																{dM: value.c, t: openListItem2.t},
																closeListItems2),
															openListItem),
														rest)
												});
										} else {
											return $elm$parser$Parser$Advanced$succeed(
												{
													b: _Utils_ap(state.b, value.b),
													c: A2(
														$elm$core$List$cons,
														newRawBlock,
														A2(
															$elm$core$List$cons,
															$dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine,
															A2(
																$elm$core$List$cons,
																A4(
																	$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
																	tight,
																	intended1,
																	A2(
																		$elm$core$List$cons,
																		{dM: value.c, t: openListItem2.t},
																		closeListItems2),
																	openListItem2),
																rest)))
												});
										}
									} else {
										var e = _v89.a;
										return $elm$parser$Parser$Advanced$problem(
											$elm$parser$Parser$Problem(
												$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
									}
								default:
									break _v41$13;
							}
						} else {
							break _v41$13;
						}
					default:
						break _v41$13;
				}
			} else {
				break _v41$13;
			}
		}
		return $elm$parser$Parser$Advanced$succeed(
			{
				b: state.b,
				c: A2($elm$core$List$cons, newRawBlock, state.c)
			});
	});
var $dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper = F2(
	function (referencesDict, _v36) {
		var unparsedInlines = _v36;
		var mappedReferencesDict = $elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$mapSecond(
					function (_v37) {
						var title = _v37.ft;
						var destination = _v37.d1;
						return _Utils_Tuple2(destination, title);
					}),
				referencesDict));
		return A2(
			$elm$core$List$map,
			$dillonkearns$elm_markdown$Markdown$Parser$mapInline,
			A2($dillonkearns$elm_markdown$Markdown$InlineParser$parse, mappedReferencesDict, unparsedInlines));
	});
var $dillonkearns$elm_markdown$Markdown$Parser$mapInline = function (inline) {
	switch (inline.$) {
		case 0:
			var string = inline.a;
			return $dillonkearns$elm_markdown$Markdown$Block$Text(string);
		case 1:
			return $dillonkearns$elm_markdown$Markdown$Block$HardLineBreak;
		case 2:
			var string = inline.a;
			return $dillonkearns$elm_markdown$Markdown$Block$CodeSpan(string);
		case 3:
			var string = inline.a;
			var maybeString = inline.b;
			var inlines = inline.c;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Block$Link,
				string,
				maybeString,
				A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
		case 4:
			var string = inline.a;
			var maybeString = inline.b;
			var inlines = inline.c;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Block$Image,
				string,
				maybeString,
				A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
		case 5:
			var node = inline.a;
			return $dillonkearns$elm_markdown$Markdown$Block$HtmlInline(
				$dillonkearns$elm_markdown$Markdown$Parser$nodeToRawBlock(node));
		case 6:
			var level = inline.a;
			var inlines = inline.b;
			switch (level) {
				case 1:
					return $dillonkearns$elm_markdown$Markdown$Block$Emphasis(
						A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
				case 2:
					return $dillonkearns$elm_markdown$Markdown$Block$Strong(
						A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
				default:
					return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(level) ? $dillonkearns$elm_markdown$Markdown$Block$Strong(
						_List_fromArray(
							[
								$dillonkearns$elm_markdown$Markdown$Parser$mapInline(
								A2($dillonkearns$elm_markdown$Markdown$Inline$Emphasis, level - 2, inlines))
							])) : $dillonkearns$elm_markdown$Markdown$Block$Emphasis(
						_List_fromArray(
							[
								$dillonkearns$elm_markdown$Markdown$Parser$mapInline(
								A2($dillonkearns$elm_markdown$Markdown$Inline$Emphasis, level - 1, inlines))
							]));
			}
		default:
			var inlines = inline.a;
			return $dillonkearns$elm_markdown$Markdown$Block$Strikethrough(
				A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
	}
};
var $dillonkearns$elm_markdown$Markdown$Parser$nodeToRawBlock = function (node) {
	switch (node.$) {
		case 1:
			return $dillonkearns$elm_markdown$Markdown$Block$HtmlComment('TODO this never happens, but use types to drop this case.');
		case 0:
			var tag = node.a;
			var attributes = node.b;
			var children = node.c;
			var parseChild = function (child) {
				if (child.$ === 1) {
					var text = child.a;
					return $dillonkearns$elm_markdown$Markdown$Parser$textNodeToBlocks(text);
				} else {
					return _List_fromArray(
						[
							$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
							$dillonkearns$elm_markdown$Markdown$Parser$nodeToRawBlock(child))
						]);
				}
			};
			return A3(
				$dillonkearns$elm_markdown$Markdown$Block$HtmlElement,
				tag,
				attributes,
				A2($elm$core$List$concatMap, parseChild, children));
		case 2:
			var string = node.a;
			return $dillonkearns$elm_markdown$Markdown$Block$HtmlComment(string);
		case 3:
			var string = node.a;
			return $dillonkearns$elm_markdown$Markdown$Block$Cdata(string);
		case 4:
			var string = node.a;
			return $dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction(string);
		default:
			var declarationType = node.a;
			var content = node.b;
			return A2($dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration, declarationType, content);
	}
};
var $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocks = function (children) {
	return A2($dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocksHelp, children, _List_Nil);
};
var $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocksHelp = F2(
	function (remaining, soFar) {
		nodesToBlocksHelp:
		while (true) {
			if (remaining.b) {
				var node = remaining.a;
				var rest = remaining.b;
				var _v31 = A2($dillonkearns$elm_markdown$Markdown$Parser$childToBlocks, node, soFar);
				if (!_v31.$) {
					var newSoFar = _v31.a;
					var $temp$remaining = rest,
						$temp$soFar = newSoFar;
					remaining = $temp$remaining;
					soFar = $temp$soFar;
					continue nodesToBlocksHelp;
				} else {
					var e = _v31.a;
					return $elm$core$Result$Err(e);
				}
			} else {
				return $elm$core$Result$Ok(
					$elm$core$List$reverse(soFar));
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$parse = function (input) {
	var _v27 = A2(
		$elm$parser$Parser$Advanced$run,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
			$dillonkearns$elm_markdown$Helpers$endOfFile),
		input);
	if (_v27.$ === 1) {
		var e = _v27.a;
		return $elm$core$Result$Err(e);
	} else {
		var v = _v27.a;
		var _v28 = $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines(v);
		if (_v28.$ === 1) {
			var e = _v28.a;
			return A2(
				$elm$parser$Parser$Advanced$run,
				$elm$parser$Parser$Advanced$problem(e),
				'');
		} else {
			var blocks = _v28.a;
			var isNotEmptyParagraph = function (block) {
				if ((block.$ === 5) && (!block.a.b)) {
					return false;
				} else {
					return true;
				}
			};
			return $elm$core$Result$Ok(
				A2($elm$core$List$filter, isNotEmptyParagraph, blocks));
		}
	}
};
var $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines = function (state) {
	return A3($dillonkearns$elm_markdown$Markdown$Parser$parseAllInlinesHelp, state, state.c, _List_Nil);
};
var $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlinesHelp = F3(
	function (state, rawBlocks, parsedBlocks) {
		parseAllInlinesHelp:
		while (true) {
			if (rawBlocks.b) {
				var rawBlock = rawBlocks.a;
				var rest = rawBlocks.b;
				var _v26 = A2($dillonkearns$elm_markdown$Markdown$Parser$parseInlines, state.b, rawBlock);
				switch (_v26.$) {
					case 1:
						var newParsedBlock = _v26.a;
						var $temp$state = state,
							$temp$rawBlocks = rest,
							$temp$parsedBlocks = A2($elm$core$List$cons, newParsedBlock, parsedBlocks);
						state = $temp$state;
						rawBlocks = $temp$rawBlocks;
						parsedBlocks = $temp$parsedBlocks;
						continue parseAllInlinesHelp;
					case 0:
						var $temp$state = state,
							$temp$rawBlocks = rest,
							$temp$parsedBlocks = parsedBlocks;
						state = $temp$state;
						rawBlocks = $temp$rawBlocks;
						parsedBlocks = $temp$parsedBlocks;
						continue parseAllInlinesHelp;
					default:
						var e = _v26.a;
						return $elm$core$Result$Err(e);
				}
			} else {
				return $elm$core$Result$Ok(parsedBlocks);
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$parseHeaderInlines = F2(
	function (linkReferences, header) {
		return A2(
			$elm$core$List$map,
			function (_v24) {
				var alignment = _v24.bu;
				var label = _v24.a0;
				return A3(
					$dillonkearns$elm_markdown$Markdown$Parser$parseRawInline,
					linkReferences,
					function (parsedHeaderLabel) {
						return {bu: alignment, a0: parsedHeaderLabel};
					},
					label);
			},
			header);
	});
var $dillonkearns$elm_markdown$Markdown$Parser$parseInlines = F2(
	function (linkReferences, rawBlock) {
		switch (rawBlock.$) {
			case 0:
				var level = rawBlock.a;
				var unparsedInlines = rawBlock.b;
				var _v17 = $dillonkearns$elm_markdown$Markdown$Parser$toHeading(level);
				if (!_v17.$) {
					var parsedLevel = _v17.a;
					return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
						A2(
							$dillonkearns$elm_markdown$Markdown$Block$Heading,
							parsedLevel,
							A2($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper, linkReferences, unparsedInlines)));
				} else {
					var e = _v17.a;
					return $dillonkearns$elm_markdown$Markdown$Parser$InlineProblem(e);
				}
			case 1:
				var unparsedInlines = rawBlock.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$Paragraph(
						A2($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper, linkReferences, unparsedInlines)));
			case 2:
				var html = rawBlock.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(html));
			case 3:
				var tight = rawBlock.a;
				var unparsedItems = rawBlock.c;
				var parseItem = F2(
					function (rawBlockTask, rawBlocks) {
						var blocksTask = function () {
							if (!rawBlockTask.$) {
								if (!rawBlockTask.a) {
									return 1;
								} else {
									return 2;
								}
							} else {
								return 0;
							}
						}();
						var blocks = function () {
							var _v18 = $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines(
								{b: linkReferences, c: rawBlocks});
							if (!_v18.$) {
								var parsedBlocks = _v18.a;
								return parsedBlocks;
							} else {
								return _List_Nil;
							}
						}();
						return A2($dillonkearns$elm_markdown$Markdown$Block$ListItem, blocksTask, blocks);
					});
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					A2(
						$dillonkearns$elm_markdown$Markdown$Block$UnorderedList,
						$dillonkearns$elm_markdown$Markdown$Parser$isTightBoolToListDisplay(tight),
						$elm$core$List$reverse(
							A2(
								$elm$core$List$map,
								function (item) {
									return A2(parseItem, item.t, item.dM);
								},
								unparsedItems))));
			case 4:
				var tight = rawBlock.a;
				var startingIndex = rawBlock.d;
				var unparsedItems = rawBlock.e;
				var parseItem = function (rawBlocks) {
					var _v20 = $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines(
						{b: linkReferences, c: rawBlocks});
					if (!_v20.$) {
						var parsedBlocks = _v20.a;
						return parsedBlocks;
					} else {
						return _List_Nil;
					}
				};
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					A3(
						$dillonkearns$elm_markdown$Markdown$Block$OrderedList,
						$dillonkearns$elm_markdown$Markdown$Parser$isTightBoolToListDisplay(tight),
						startingIndex,
						$elm$core$List$reverse(
							A2($elm$core$List$map, parseItem, unparsedItems))));
			case 5:
				var codeBlock = rawBlock.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$CodeBlock(codeBlock));
			case 7:
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock($dillonkearns$elm_markdown$Markdown$Block$ThematicBreak);
			case 10:
				return $dillonkearns$elm_markdown$Markdown$Parser$EmptyBlock;
			case 11:
				return $dillonkearns$elm_markdown$Markdown$Parser$EmptyBlock;
			case 12:
				var rawBlocks = rawBlock.a;
				var _v21 = $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines(
					{b: linkReferences, c: rawBlocks});
				if (!_v21.$) {
					var parsedBlocks = _v21.a;
					return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
						$dillonkearns$elm_markdown$Markdown$Block$BlockQuote(parsedBlocks));
				} else {
					var e = _v21.a;
					return $dillonkearns$elm_markdown$Markdown$Parser$InlineProblem(e);
				}
			case 6:
				var codeBlockBody = rawBlock.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$CodeBlock(
						{dM: codeBlockBody, es: $elm$core$Maybe$Nothing}));
			case 8:
				var _v22 = rawBlock.a;
				var header = _v22.a;
				var rows = _v22.b;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					A2(
						$dillonkearns$elm_markdown$Markdown$Block$Table,
						A2($dillonkearns$elm_markdown$Markdown$Parser$parseHeaderInlines, linkReferences, header),
						A2($dillonkearns$elm_markdown$Markdown$Parser$parseRowInlines, linkReferences, rows)));
			case 9:
				var _v23 = rawBlock.a;
				var text = _v23.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$Paragraph(
						A2($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper, linkReferences, text.c9)));
			default:
				var raw = rawBlock.b;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$Paragraph(
						A2($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper, linkReferences, raw)));
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$parseRawInline = F3(
	function (linkReferences, wrap, unparsedInlines) {
		return wrap(
			A2($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper, linkReferences, unparsedInlines));
	});
var $dillonkearns$elm_markdown$Markdown$Parser$parseRowInlines = F2(
	function (linkReferences, rows) {
		return A2(
			$elm$core$List$map,
			function (row) {
				return A2(
					$elm$core$List$map,
					function (column) {
						return A3($dillonkearns$elm_markdown$Markdown$Parser$parseRawInline, linkReferences, $elm$core$Basics$identity, column);
					},
					row);
			},
			rows);
	});
var $dillonkearns$elm_markdown$Markdown$Parser$stepRawBlock = function (revStmts) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v2) {
					return $elm$parser$Parser$Advanced$Done(revStmts);
				},
				$dillonkearns$elm_markdown$Helpers$endOfFile),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (reference) {
					return $elm$parser$Parser$Advanced$Loop(
						A2($dillonkearns$elm_markdown$Markdown$Parser$addReference, revStmts, reference));
				},
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$parser)),
				function () {
				var _v3 = revStmts.c;
				_v3$6:
				while (true) {
					if (_v3.b) {
						switch (_v3.a.$) {
							case 1:
								return A2(
									$elm$parser$Parser$Advanced$map,
									function (block) {
										return $elm$parser$Parser$Advanced$Loop(block);
									},
									A2(
										$elm$parser$Parser$Advanced$andThen,
										$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
										$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterOpenBlockOrParagraphParser()));
							case 8:
								var table = _v3.a.a;
								return A2(
									$elm$parser$Parser$Advanced$map,
									function (block) {
										return $elm$parser$Parser$Advanced$Loop(block);
									},
									A2(
										$elm$parser$Parser$Advanced$andThen,
										$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
										$elm$parser$Parser$Advanced$oneOf(
											_List_fromArray(
												[
													$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser(),
													$dillonkearns$elm_markdown$Markdown$Parser$tableRowIfTableStarted(table)
												]))));
							case 3:
								var _v4 = _v3.a;
								var tight = _v4.a;
								var intended = _v4.b;
								var closeListItems = _v4.c;
								var openListItem = _v4.d;
								var rest = _v3.b;
								var completeOrMergeUnorderedListBlockBlankLine = F2(
									function (state, newString) {
										return _Utils_update(
											state,
											{
												c: A2(
													$elm$core$List$cons,
													$dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine,
													A2(
														$elm$core$List$cons,
														A4(
															$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
															tight,
															intended,
															closeListItems,
															_Utils_update(
																openListItem,
																{
																	dM: A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '', openListItem.dM, newString)
																})),
														rest))
											});
									});
								var completeOrMergeUnorderedListBlock = F2(
									function (state, newString) {
										return _Utils_update(
											state,
											{
												c: A2(
													$elm$core$List$cons,
													A4(
														$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
														tight,
														intended,
														closeListItems,
														_Utils_update(
															openListItem,
															{
																dM: A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '\u000A', openListItem.dM, newString)
															})),
													rest)
											});
									});
								return $elm$parser$Parser$Advanced$oneOf(
									_List_fromArray(
										[
											A2(
											$elm$parser$Parser$Advanced$map,
											function (block) {
												return $elm$parser$Parser$Advanced$Loop(block);
											},
											A2(
												$elm$parser$Parser$Advanced$map,
												function (_v5) {
													return A2(completeOrMergeUnorderedListBlockBlankLine, revStmts, '\u000A');
												},
												$dillonkearns$elm_markdown$Markdown$Parser$blankLine)),
											A2(
											$elm$parser$Parser$Advanced$map,
											function (block) {
												return $elm$parser$Parser$Advanced$Loop(block);
											},
											A2(
												$elm$parser$Parser$Advanced$map,
												completeOrMergeUnorderedListBlock(revStmts),
												A2(
													$elm$parser$Parser$Advanced$keeper,
													A2(
														$elm$parser$Parser$Advanced$ignorer,
														$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
														$elm$parser$Parser$Advanced$symbol(
															A2(
																$elm$parser$Parser$Advanced$Token,
																A2($elm$core$String$repeat, intended, ' '),
																$elm$parser$Parser$ExpectingSymbol('Indentation')))),
													A2(
														$elm$parser$Parser$Advanced$ignorer,
														$elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
														$dillonkearns$elm_markdown$Helpers$lineEndOrEnd)))),
											A2(
											$elm$parser$Parser$Advanced$map,
											function (block) {
												return $elm$parser$Parser$Advanced$Loop(block);
											},
											A2(
												$elm$parser$Parser$Advanced$andThen,
												$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
												$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterList()))
										]));
							case 4:
								var _v10 = _v3.a;
								var tight = _v10.a;
								var intended = _v10.b;
								var marker = _v10.c;
								var order = _v10.d;
								var closeListItems = _v10.e;
								var openListItem = _v10.f;
								var rest = _v3.b;
								var completeOrMergeUnorderedListBlockBlankLine = F2(
									function (state, newString) {
										return _Utils_update(
											state,
											{
												c: A2(
													$elm$core$List$cons,
													$dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine,
													A2(
														$elm$core$List$cons,
														A6($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock, tight, intended, marker, order, closeListItems, openListItem + ('\u000A' + newString)),
														rest))
											});
									});
								var completeOrMergeUnorderedListBlock = F2(
									function (state, newString) {
										return _Utils_update(
											state,
											{
												c: A2(
													$elm$core$List$cons,
													A6($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock, tight, intended, marker, order, closeListItems, openListItem + ('\u000A' + newString)),
													rest)
											});
									});
								return $elm$parser$Parser$Advanced$oneOf(
									_List_fromArray(
										[
											A2(
											$elm$parser$Parser$Advanced$map,
											function (block) {
												return $elm$parser$Parser$Advanced$Loop(block);
											},
											A2(
												$elm$parser$Parser$Advanced$map,
												function (_v11) {
													return A2(completeOrMergeUnorderedListBlockBlankLine, revStmts, '\u000A');
												},
												$dillonkearns$elm_markdown$Markdown$Parser$blankLine)),
											A2(
											$elm$parser$Parser$Advanced$map,
											function (block) {
												return $elm$parser$Parser$Advanced$Loop(block);
											},
											A2(
												$elm$parser$Parser$Advanced$map,
												completeOrMergeUnorderedListBlock(revStmts),
												A2(
													$elm$parser$Parser$Advanced$keeper,
													A2(
														$elm$parser$Parser$Advanced$ignorer,
														$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
														$elm$parser$Parser$Advanced$symbol(
															A2(
																$elm$parser$Parser$Advanced$Token,
																A2($elm$core$String$repeat, intended, ' '),
																$elm$parser$Parser$ExpectingSymbol('Indentation')))),
													A2(
														$elm$parser$Parser$Advanced$ignorer,
														$elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
														$dillonkearns$elm_markdown$Helpers$lineEndOrEnd)))),
											A2(
											$elm$parser$Parser$Advanced$map,
											function (block) {
												return $elm$parser$Parser$Advanced$Loop(block);
											},
											A2(
												$elm$parser$Parser$Advanced$andThen,
												$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
												$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterList()))
										]));
							case 10:
								if (_v3.b.b) {
									switch (_v3.b.a.$) {
										case 3:
											var _v6 = _v3.a;
											var _v7 = _v3.b;
											var _v8 = _v7.a;
											var tight = _v8.a;
											var intended = _v8.b;
											var closeListItems = _v8.c;
											var openListItem = _v8.d;
											var rest = _v7.b;
											var completeOrMergeUnorderedListBlockBlankLine = F2(
												function (state, newString) {
													return _Utils_update(
														state,
														{
															c: A2(
																$elm$core$List$cons,
																$dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine,
																A2(
																	$elm$core$List$cons,
																	A4(
																		$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
																		tight,
																		intended,
																		closeListItems,
																		_Utils_update(
																			openListItem,
																			{
																				dM: A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '', openListItem.dM, newString)
																			})),
																	rest))
														});
												});
											var completeOrMergeUnorderedListBlock = F2(
												function (state, newString) {
													return _Utils_update(
														state,
														{
															c: A2(
																$elm$core$List$cons,
																A4(
																	$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
																	tight,
																	intended,
																	closeListItems,
																	_Utils_update(
																		openListItem,
																		{
																			dM: A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '\u000A', openListItem.dM, newString)
																		})),
																rest)
														});
												});
											return ($elm$core$String$trim(openListItem.dM) === '') ? A2(
												$elm$parser$Parser$Advanced$map,
												function (block) {
													return $elm$parser$Parser$Advanced$Loop(block);
												},
												A2(
													$elm$parser$Parser$Advanced$andThen,
													$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
													$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser())) : $elm$parser$Parser$Advanced$oneOf(
												_List_fromArray(
													[
														A2(
														$elm$parser$Parser$Advanced$map,
														function (block) {
															return $elm$parser$Parser$Advanced$Loop(block);
														},
														A2(
															$elm$parser$Parser$Advanced$map,
															function (_v9) {
																return A2(completeOrMergeUnorderedListBlockBlankLine, revStmts, '\u000A');
															},
															$dillonkearns$elm_markdown$Markdown$Parser$blankLine)),
														A2(
														$elm$parser$Parser$Advanced$map,
														function (block) {
															return $elm$parser$Parser$Advanced$Loop(block);
														},
														A2(
															$elm$parser$Parser$Advanced$map,
															completeOrMergeUnorderedListBlock(revStmts),
															A2(
																$elm$parser$Parser$Advanced$keeper,
																A2(
																	$elm$parser$Parser$Advanced$ignorer,
																	$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
																	$elm$parser$Parser$Advanced$symbol(
																		A2(
																			$elm$parser$Parser$Advanced$Token,
																			A2($elm$core$String$repeat, intended, ' '),
																			$elm$parser$Parser$ExpectingSymbol('Indentation')))),
																A2(
																	$elm$parser$Parser$Advanced$ignorer,
																	$elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
																	$dillonkearns$elm_markdown$Helpers$lineEndOrEnd)))),
														A2(
														$elm$parser$Parser$Advanced$map,
														function (block) {
															return $elm$parser$Parser$Advanced$Loop(block);
														},
														A2(
															$elm$parser$Parser$Advanced$andThen,
															$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
															$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser()))
													]));
										case 4:
											var _v12 = _v3.a;
											var _v13 = _v3.b;
											var _v14 = _v13.a;
											var tight = _v14.a;
											var intended = _v14.b;
											var marker = _v14.c;
											var order = _v14.d;
											var closeListItems = _v14.e;
											var openListItem = _v14.f;
											var rest = _v13.b;
											var completeOrMergeUnorderedListBlockBlankLine = F2(
												function (state, newString) {
													return _Utils_update(
														state,
														{
															c: A2(
																$elm$core$List$cons,
																$dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine,
																A2(
																	$elm$core$List$cons,
																	A6($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock, tight, intended, marker, order, closeListItems, openListItem + ('\u000A' + newString)),
																	rest))
														});
												});
											var completeOrMergeUnorderedListBlock = F2(
												function (state, newString) {
													return _Utils_update(
														state,
														{
															c: A2(
																$elm$core$List$cons,
																A6($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock, tight, intended, marker, order, closeListItems, openListItem + ('\u000A' + newString)),
																rest)
														});
												});
											return ($elm$core$String$trim(openListItem) === '') ? A2(
												$elm$parser$Parser$Advanced$map,
												function (block) {
													return $elm$parser$Parser$Advanced$Loop(block);
												},
												A2(
													$elm$parser$Parser$Advanced$andThen,
													$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
													$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser())) : $elm$parser$Parser$Advanced$oneOf(
												_List_fromArray(
													[
														A2(
														$elm$parser$Parser$Advanced$map,
														function (block) {
															return $elm$parser$Parser$Advanced$Loop(block);
														},
														A2(
															$elm$parser$Parser$Advanced$map,
															function (_v15) {
																return A2(completeOrMergeUnorderedListBlockBlankLine, revStmts, '\u000A');
															},
															$dillonkearns$elm_markdown$Markdown$Parser$blankLine)),
														A2(
														$elm$parser$Parser$Advanced$map,
														function (block) {
															return $elm$parser$Parser$Advanced$Loop(block);
														},
														A2(
															$elm$parser$Parser$Advanced$map,
															completeOrMergeUnorderedListBlock(revStmts),
															A2(
																$elm$parser$Parser$Advanced$keeper,
																A2(
																	$elm$parser$Parser$Advanced$ignorer,
																	$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
																	$elm$parser$Parser$Advanced$symbol(
																		A2(
																			$elm$parser$Parser$Advanced$Token,
																			A2($elm$core$String$repeat, intended, ' '),
																			$elm$parser$Parser$ExpectingSymbol('Indentation')))),
																A2(
																	$elm$parser$Parser$Advanced$ignorer,
																	$elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
																	$dillonkearns$elm_markdown$Helpers$lineEndOrEnd)))),
														A2(
														$elm$parser$Parser$Advanced$map,
														function (block) {
															return $elm$parser$Parser$Advanced$Loop(block);
														},
														A2(
															$elm$parser$Parser$Advanced$andThen,
															$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
															$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser()))
													]));
										default:
											break _v3$6;
									}
								} else {
									break _v3$6;
								}
							default:
								break _v3$6;
						}
					} else {
						break _v3$6;
					}
				}
				return A2(
					$elm$parser$Parser$Advanced$map,
					function (block) {
						return $elm$parser$Parser$Advanced$Loop(block);
					},
					A2(
						$elm$parser$Parser$Advanced$andThen,
						$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
						$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser()));
			}(),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (block) {
					return $elm$parser$Parser$Advanced$Loop(block);
				},
				A2(
					$elm$parser$Parser$Advanced$andThen,
					$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
					$dillonkearns$elm_markdown$Markdown$Parser$openBlockOrParagraphParser))
			]));
};
var $dillonkearns$elm_markdown$Markdown$Parser$textNodeToBlocks = function (textNodeValue) {
	return A2(
		$elm$core$Result$withDefault,
		_List_Nil,
		$dillonkearns$elm_markdown$Markdown$Parser$parse(textNodeValue));
};
var $dillonkearns$elm_markdown$Markdown$Parser$xmlNodeToHtmlNode = function (xmlNode) {
	switch (xmlNode.$) {
		case 1:
			var innerText = xmlNode.a;
			return $elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(innerText));
		case 0:
			var tag = xmlNode.a;
			var attributes = xmlNode.b;
			var children = xmlNode.c;
			var _v1 = $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocks(children);
			if (!_v1.$) {
				var parsedChildren = _v1.a;
				return $elm$parser$Parser$Advanced$succeed(
					$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
						A3($dillonkearns$elm_markdown$Markdown$Block$HtmlElement, tag, attributes, parsedChildren)));
			} else {
				var err = _v1.a;
				return $elm$parser$Parser$Advanced$problem(err);
			}
		case 2:
			var string = xmlNode.a;
			return $elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
					$dillonkearns$elm_markdown$Markdown$Block$HtmlComment(string)));
		case 3:
			var string = xmlNode.a;
			return $elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
					$dillonkearns$elm_markdown$Markdown$Block$Cdata(string)));
		case 4:
			var string = xmlNode.a;
			return $elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
					$dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction(string)));
		default:
			var declarationType = xmlNode.a;
			var content = xmlNode.b;
			return $elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
					A2($dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration, declarationType, content)));
	}
};
function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser() {
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		$dillonkearns$elm_markdown$Markdown$Parser$completeBlocks,
		A2(
			$elm$parser$Parser$Advanced$loop,
			{b: _List_Nil, c: _List_Nil},
			$dillonkearns$elm_markdown$Markdown$Parser$stepRawBlock));
}
function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser() {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$dillonkearns$elm_markdown$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock,
				$dillonkearns$elm_markdown$Markdown$Parser$blankLine,
				$dillonkearns$elm_markdown$Markdown$Parser$blockQuote,
				A2(
				$elm$parser$Parser$Advanced$map,
				$dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock,
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$CodeBlock$parser)),
				$dillonkearns$elm_markdown$Markdown$Parser$indentedCodeBlock,
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v40) {
					return $dillonkearns$elm_markdown$Markdown$RawBlock$ThematicBreak;
				},
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$ThematicBreak$parser)),
				$dillonkearns$elm_markdown$Markdown$Parser$unorderedListBlock(false),
				$dillonkearns$elm_markdown$Markdown$Parser$orderedListBlock(false),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Heading$parser),
				$dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser()
			]));
}
function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterOpenBlockOrParagraphParser() {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$dillonkearns$elm_markdown$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock,
				$dillonkearns$elm_markdown$Markdown$Parser$blankLine,
				$dillonkearns$elm_markdown$Markdown$Parser$blockQuote,
				A2(
				$elm$parser$Parser$Advanced$map,
				$dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock,
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$CodeBlock$parser)),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Parser$setextLineParser),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v39) {
					return $dillonkearns$elm_markdown$Markdown$RawBlock$ThematicBreak;
				},
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$ThematicBreak$parser)),
				$dillonkearns$elm_markdown$Markdown$Parser$unorderedListBlock(true),
				$dillonkearns$elm_markdown$Markdown$Parser$orderedListBlock(true),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Heading$parser),
				$dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser(),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Parser$tableDelimiterInOpenParagraph)
			]));
}
function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterList() {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$dillonkearns$elm_markdown$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock,
				$dillonkearns$elm_markdown$Markdown$Parser$blankLine,
				$dillonkearns$elm_markdown$Markdown$Parser$blockQuote,
				A2(
				$elm$parser$Parser$Advanced$map,
				$dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock,
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$CodeBlock$parser)),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v38) {
					return $dillonkearns$elm_markdown$Markdown$RawBlock$ThematicBreak;
				},
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$ThematicBreak$parser)),
				$dillonkearns$elm_markdown$Markdown$Parser$unorderedListBlock(false),
				$dillonkearns$elm_markdown$Markdown$Parser$orderedListBlock(false),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Heading$parser),
				$dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser()
			]));
}
function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser() {
	return A2($elm$parser$Parser$Advanced$andThen, $dillonkearns$elm_markdown$Markdown$Parser$xmlNodeToHtmlNode, $dillonkearns$elm_markdown$HtmlParser$html);
}
var $dillonkearns$elm_markdown$Markdown$Parser$rawBlockParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser();
$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser = function () {
	return $dillonkearns$elm_markdown$Markdown$Parser$rawBlockParser;
};
var $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockNotAfterOpenBlockOrParagraphParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser();
$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser = function () {
	return $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockNotAfterOpenBlockOrParagraphParser;
};
var $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockAfterOpenBlockOrParagraphParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterOpenBlockOrParagraphParser();
$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterOpenBlockOrParagraphParser = function () {
	return $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockAfterOpenBlockOrParagraphParser;
};
var $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockAfterList = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterList();
$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterList = function () {
	return $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockAfterList;
};
var $dillonkearns$elm_markdown$Markdown$Parser$htmlParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser();
$dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser = function () {
	return $dillonkearns$elm_markdown$Markdown$Parser$htmlParser;
};
var $elm$core$Result$map2 = F3(
	function (func, ra, rb) {
		if (ra.$ === 1) {
			var x = ra.a;
			return $elm$core$Result$Err(x);
		} else {
			var a = ra.a;
			if (rb.$ === 1) {
				var x = rb.a;
				return $elm$core$Result$Err(x);
			} else {
				var b = rb.a;
				return $elm$core$Result$Ok(
					A2(func, a, b));
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$combineResults = A2(
	$elm$core$List$foldr,
	$elm$core$Result$map2($elm$core$List$cons),
	$elm$core$Result$Ok(_List_Nil));
var $dillonkearns$elm_markdown$Markdown$Block$foldl = F3(
	function (_function, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var block = list.a;
				var remainingBlocks = list.b;
				switch (block.$) {
					case 0:
						var html = block.a;
						if (!html.$) {
							var children = html.c;
							var $temp$function = _function,
								$temp$acc = A2(_function, block, acc),
								$temp$list = _Utils_ap(children, remainingBlocks);
							_function = $temp$function;
							acc = $temp$acc;
							list = $temp$list;
							continue foldl;
						} else {
							var $temp$function = _function,
								$temp$acc = A2(_function, block, acc),
								$temp$list = remainingBlocks;
							_function = $temp$function;
							acc = $temp$acc;
							list = $temp$list;
							continue foldl;
						}
					case 1:
						var blocks = block.b;
						var childBlocks = A2(
							$elm$core$List$concatMap,
							function (_v3) {
								var children = _v3.b;
								return children;
							},
							blocks);
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = _Utils_ap(childBlocks, remainingBlocks);
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 2:
						var blocks = block.c;
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = _Utils_ap(
							$elm$core$List$concat(blocks),
							remainingBlocks);
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 3:
						var blocks = block.a;
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = _Utils_ap(blocks, remainingBlocks);
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 4:
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 5:
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 6:
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 7:
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					default:
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText = function (block) {
	switch (block.$) {
		case 5:
			var inlines = block.a;
			return $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines);
		case 0:
			var html = block.a;
			if (!html.$) {
				var blocks = html.c;
				return A3(
					$dillonkearns$elm_markdown$Markdown$Block$foldl,
					F2(
						function (nestedBlock, soFar) {
							return _Utils_ap(
								soFar,
								$dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText(nestedBlock));
						}),
					'',
					blocks);
			} else {
				return '';
			}
		case 1:
			var items = block.b;
			return A2(
				$elm$core$String$join,
				'\u000A',
				A2(
					$elm$core$List$map,
					function (_v4) {
						var blocks = _v4.b;
						return A2(
							$elm$core$String$join,
							'\u000A',
							A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText, blocks));
					},
					items));
		case 2:
			var items = block.c;
			return A2(
				$elm$core$String$join,
				'\u000A',
				A2(
					$elm$core$List$map,
					function (blocks) {
						return A2(
							$elm$core$String$join,
							'\u000A',
							A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText, blocks));
					},
					items));
		case 3:
			var blocks = block.a;
			return A2(
				$elm$core$String$join,
				'\u000A',
				A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText, blocks));
		case 4:
			var inlines = block.b;
			return $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines);
		case 6:
			var header = block.a;
			var rows = block.b;
			return A2(
				$elm$core$String$join,
				'\u000A',
				$elm$core$List$concat(
					_List_fromArray(
						[
							A2(
							$elm$core$List$map,
							$dillonkearns$elm_markdown$Markdown$Block$extractInlineText,
							A2(
								$elm$core$List$map,
								function ($) {
									return $.a0;
								},
								header)),
							$elm$core$List$concat(
							A2(
								$elm$core$List$map,
								$elm$core$List$map($dillonkearns$elm_markdown$Markdown$Block$extractInlineText),
								rows))
						])));
		case 7:
			var body = block.a.dM;
			return body;
		default:
			return '';
	}
};
var $dillonkearns$elm_markdown$Markdown$Block$extractInlineText = function (inlines) {
	return A3($elm$core$List$foldl, $dillonkearns$elm_markdown$Markdown$Block$extractTextHelp, '', inlines);
};
var $dillonkearns$elm_markdown$Markdown$Block$extractTextHelp = F2(
	function (inline, text) {
		switch (inline.$) {
			case 7:
				var str = inline.a;
				return _Utils_ap(text, str);
			case 8:
				return text + ' ';
			case 6:
				var str = inline.a;
				return _Utils_ap(text, str);
			case 1:
				var inlines = inline.c;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
			case 2:
				var inlines = inline.c;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
			case 0:
				var html = inline.a;
				if (!html.$) {
					var blocks = html.c;
					return A3(
						$dillonkearns$elm_markdown$Markdown$Block$foldl,
						F2(
							function (block, soFar) {
								return _Utils_ap(
									soFar,
									$dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText(block));
							}),
						text,
						blocks);
				} else {
					return text;
				}
			case 4:
				var inlines = inline.a;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
			case 3:
				var inlines = inline.a;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
			default:
				var inlines = inline.a;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
		}
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderHtml = F5(
	function (tagName, attributes, children, _v0, renderedChildren) {
		var htmlRenderer = _v0;
		return A2(
			$elm$core$Result$andThen,
			function (okChildren) {
				return A2(
					$elm$core$Result$map,
					function (myRenderer) {
						return myRenderer(okChildren);
					},
					A3(htmlRenderer, tagName, attributes, children));
			},
			$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(renderedChildren));
	});
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $dillonkearns$elm_markdown$Markdown$Renderer$foldThing = F3(
	function (renderer, topLevelInline, soFar) {
		var _v12 = A2($dillonkearns$elm_markdown$Markdown$Renderer$renderSingleInline, renderer, topLevelInline);
		if (!_v12.$) {
			var inline = _v12.a;
			return A2($elm$core$List$cons, inline, soFar);
		} else {
			return soFar;
		}
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderHelper = F2(
	function (renderer, blocks) {
		return A2(
			$elm$core$List$filterMap,
			$dillonkearns$elm_markdown$Markdown$Renderer$renderHelperSingle(renderer),
			blocks);
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderHelperSingle = function (renderer) {
	return function (block) {
		switch (block.$) {
			case 4:
				var level = block.a;
				var content = block.b;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						function (children) {
							return renderer.eh(
								{
									dT: children,
									cU: level,
									e1: $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(content)
								});
						},
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, content)));
			case 5:
				var content = block.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.eT,
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, content)));
			case 0:
				var html = block.a;
				if (!html.$) {
					var tag = html.a;
					var attributes = html.b;
					var children = html.c;
					return $elm$core$Maybe$Just(
						A4($dillonkearns$elm_markdown$Markdown$Renderer$renderHtmlNode, renderer, tag, attributes, children));
				} else {
					return $elm$core$Maybe$Nothing;
				}
			case 1:
				var tight = block.a;
				var items = block.b;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						function (listItems) {
							return renderer.fu(
								A2(
									$elm$core$List$map,
									function (_v7) {
										var task = _v7.a;
										var children = _v7.b;
										return A2(
											$dillonkearns$elm_markdown$Markdown$Block$ListItem,
											task,
											$elm$core$List$concat(children));
									},
									listItems));
						},
						$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
							A2(
								$elm$core$List$map,
								function (_v4) {
									var task = _v4.a;
									var children = _v4.b;
									return A2(
										$elm$core$Result$map,
										$dillonkearns$elm_markdown$Markdown$Block$ListItem(task),
										$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
											function (blocks) {
												return A2(
													$elm$core$List$filterMap,
													function (listItemBlock) {
														var _v5 = _Utils_Tuple2(tight, listItemBlock);
														if ((_v5.a === 1) && (_v5.b.$ === 5)) {
															var _v6 = _v5.a;
															var content = _v5.b.a;
															return $elm$core$Maybe$Just(
																A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, content));
														} else {
															return A2(
																$elm$core$Maybe$map,
																$elm$core$Result$map($elm$core$List$singleton),
																A2($dillonkearns$elm_markdown$Markdown$Renderer$renderHelperSingle, renderer, listItemBlock));
														}
													},
													blocks);
											}(children)));
								},
								items))));
			case 2:
				var tight = block.a;
				var startingIndex = block.b;
				var items = block.c;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						function (listItems) {
							return A2(
								renderer.eS,
								startingIndex,
								A2(
									$elm$core$List$map,
									function (children) {
										return $elm$core$List$concat(children);
									},
									listItems));
						},
						$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
							A2(
								$elm$core$List$map,
								function (itemsblocks) {
									return $dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
										function (blocks) {
											return A2(
												$elm$core$List$filterMap,
												function (listItemBlock) {
													var _v8 = _Utils_Tuple2(tight, listItemBlock);
													if ((_v8.a === 1) && (_v8.b.$ === 5)) {
														var _v9 = _v8.a;
														var content = _v8.b.a;
														return $elm$core$Maybe$Just(
															A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, content));
													} else {
														return A2(
															$elm$core$Maybe$map,
															$elm$core$Result$map($elm$core$List$singleton),
															A2($dillonkearns$elm_markdown$Markdown$Renderer$renderHelperSingle, renderer, listItemBlock));
													}
												},
												blocks);
										}(itemsblocks));
								},
								items))));
			case 7:
				var codeBlock = block.a;
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(
						renderer.dU(codeBlock)));
			case 8:
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(renderer.fs));
			case 3:
				var nestedBlocks = block.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.dL,
						$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
							A2($dillonkearns$elm_markdown$Markdown$Renderer$renderHelper, renderer, nestedBlocks))));
			default:
				var header = block.a;
				var rows = block.b;
				var renderedHeaderCells = $dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
					A2(
						$elm$core$List$map,
						function (_v11) {
							var alignment = _v11.bu;
							var label = _v11.a0;
							return A2(
								$elm$core$Result$map,
								$elm$core$Tuple$pair(alignment),
								A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, label));
						},
						header));
				var renderedHeader = A2(
					$elm$core$Result$map,
					function (listListView) {
						return renderer.fn(
							$elm$core$List$singleton(
								renderer.fp(
									A2(
										$elm$core$List$map,
										function (_v10) {
											var maybeAlignment = _v10.a;
											var item = _v10.b;
											return A2(renderer.fo, maybeAlignment, item);
										},
										listListView))));
					},
					renderedHeaderCells);
				var renderedBody = function (r) {
					return $elm$core$List$isEmpty(r) ? _List_Nil : _List_fromArray(
						[
							renderer.fl(r)
						]);
				};
				var alignmentForColumn = function (columnIndex) {
					return A2(
						$elm$core$Maybe$andThen,
						function ($) {
							return $.bu;
						},
						$elm$core$List$head(
							A2($elm$core$List$drop, columnIndex, header)));
				};
				var renderRow = function (cells) {
					return A2(
						$elm$core$Result$map,
						renderer.fp,
						A2(
							$elm$core$Result$map,
							$elm$core$List$indexedMap(
								F2(
									function (index, cell) {
										return A2(
											renderer.fm,
											alignmentForColumn(index),
											cell);
									})),
							$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
								A2(
									$elm$core$List$map,
									$dillonkearns$elm_markdown$Markdown$Renderer$renderStyled(renderer),
									cells))));
				};
				var renderedRows = $dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
					A2($elm$core$List$map, renderRow, rows));
				return $elm$core$Maybe$Just(
					A3(
						$elm$core$Result$map2,
						F2(
							function (h, r) {
								return renderer.fk(
									A2(
										$elm$core$List$cons,
										h,
										renderedBody(r)));
							}),
						renderedHeader,
						renderedRows));
		}
	};
};
var $dillonkearns$elm_markdown$Markdown$Renderer$renderHtmlNode = F4(
	function (renderer, tag, attributes, children) {
		return A5(
			$dillonkearns$elm_markdown$Markdown$Renderer$renderHtml,
			tag,
			attributes,
			children,
			renderer.ek,
			A2($dillonkearns$elm_markdown$Markdown$Renderer$renderHelper, renderer, children));
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderSingleInline = F2(
	function (renderer, inline) {
		switch (inline.$) {
			case 4:
				var innerInlines = inline.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.fg,
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, innerInlines)));
			case 3:
				var innerInlines = inline.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.d6,
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, innerInlines)));
			case 5:
				var innerInlines = inline.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.fe,
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, innerInlines)));
			case 2:
				var src = inline.a;
				var title = inline.b;
				var children = inline.c;
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(
						renderer.em(
							{
								dE: $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(children),
								cf: src,
								ft: title
							})));
			case 7:
				var string = inline.a;
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(
						renderer.ck(string)));
			case 6:
				var string = inline.a;
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(
						renderer.dV(string)));
			case 1:
				var destination = inline.a;
				var title = inline.b;
				var inlines = inline.c;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$andThen,
						function (children) {
							return $elm$core$Result$Ok(
								A2(
									renderer.ew,
									{d1: destination, ft: title},
									children));
						},
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, inlines)));
			case 8:
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(renderer.eg));
			default:
				var html = inline.a;
				if (!html.$) {
					var tag = html.a;
					var attributes = html.b;
					var children = html.c;
					return $elm$core$Maybe$Just(
						A4($dillonkearns$elm_markdown$Markdown$Renderer$renderHtmlNode, renderer, tag, attributes, children));
				} else {
					return $elm$core$Maybe$Nothing;
				}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderStyled = F2(
	function (renderer, styledStrings) {
		return $dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
			A3(
				$elm$core$List$foldr,
				$dillonkearns$elm_markdown$Markdown$Renderer$foldThing(renderer),
				_List_Nil,
				styledStrings));
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$render = F2(
	function (renderer, ast) {
		return $dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
			A2($dillonkearns$elm_markdown$Markdown$Renderer$renderHelper, renderer, ast));
	});
var $dillonkearns$elm_markdown$Markdown$HtmlRenderer$HtmlRenderer = $elm$core$Basics$identity;
var $dillonkearns$elm_markdown$Markdown$Html$resultOr = F2(
	function (ra, rb) {
		if (ra.$ === 1) {
			var singleError = ra.a;
			if (!rb.$) {
				var okValue = rb.a;
				return $elm$core$Result$Ok(okValue);
			} else {
				var errorsSoFar = rb.a;
				return $elm$core$Result$Err(
					A2($elm$core$List$cons, singleError, errorsSoFar));
			}
		} else {
			var okValue = ra.a;
			return $elm$core$Result$Ok(okValue);
		}
	});
var $dillonkearns$elm_markdown$Markdown$Html$attributesToString = function (attributes) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$map,
			function (_v0) {
				var value = _v0.fw;
				var name = _v0.cW;
				return name + ('=\u0022' + (value + '\u0022'));
			},
			attributes));
};
var $dillonkearns$elm_markdown$Markdown$Html$tagToString = F2(
	function (tagName, attributes) {
		return $elm$core$List$isEmpty(attributes) ? ('<' + (tagName + '>')) : ('<' + (tagName + (' ' + ($dillonkearns$elm_markdown$Markdown$Html$attributesToString(attributes) + '>'))));
	});
var $dillonkearns$elm_markdown$Markdown$Html$oneOf = function (decoders) {
	var unwrappedDecoders = A2(
		$elm$core$List$map,
		function (_v4) {
			var rawDecoder = _v4;
			return rawDecoder;
		},
		decoders);
	return function (rawDecoder) {
		return F3(
			function (tagName, attributes, innerBlocks) {
				return A2(
					$elm$core$Result$mapError,
					function (errors) {
						if (!errors.b) {
							return 'Ran into a oneOf with no possibilities!';
						} else {
							if (!errors.b.b) {
								var singleError = errors.a;
								return 'Problem with the given value:\u000A\u000A' + (A2($dillonkearns$elm_markdown$Markdown$Html$tagToString, tagName, attributes) + ('\u000A\u000A' + (singleError + '\u000A')));
							} else {
								return 'oneOf failed parsing this value:\u000A    ' + (A2($dillonkearns$elm_markdown$Markdown$Html$tagToString, tagName, attributes) + ('\u000A\u000AParsing failed in the following 2 ways:\u000A\u000A\u000A' + (A2(
									$elm$core$String$join,
									'\u000A\u000A',
									A2(
										$elm$core$List$indexedMap,
										F2(
											function (index, error) {
												return '(' + ($elm$core$String$fromInt(index + 1) + (') ' + error));
											}),
										errors)) + '\u000A')));
							}
						}
					},
					A3(rawDecoder, tagName, attributes, innerBlocks));
			});
	}(
		A3(
			$elm$core$List$foldl,
			F2(
				function (decoder, soFar) {
					return F3(
						function (tagName, attributes, children) {
							return A2(
								$dillonkearns$elm_markdown$Markdown$Html$resultOr,
								A3(decoder, tagName, attributes, children),
								A3(soFar, tagName, attributes, children));
						});
				}),
			F3(
				function (_v0, _v1, _v2) {
					return $elm$core$Result$Err(_List_Nil);
				}),
			unwrappedDecoders));
};
var $author$project$Story$plainList = $elm$html$Html$span(_List_Nil);
var $author$project$Story$renderer = {
	dL: $elm$html$Html$p(_List_Nil),
	dU: function (_v0) {
		var body = _v0.dM;
		return A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text(body)
				]));
	},
	dV: function (s) {
		return A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('py')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(s)
				]));
	},
	d6: $elm$html$Html$em(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('cast')
			])),
	eg: A2($elm$html$Html$br, _List_Nil, _List_Nil),
	eh: function (_v1) {
		var children = _v1.dT;
		return A2($elm$html$Html$p, _List_Nil, children);
	},
	ek: $dillonkearns$elm_markdown$Markdown$Html$oneOf(_List_Nil),
	em: function (img) {
		return $elm$html$Html$text(img.dE);
	},
	ew: F2(
		function (_v2, children) {
			return $author$project$Story$plainList(children);
		}),
	eS: F2(
		function (_v3, items) {
			return A2(
				$elm$html$Html$p,
				_List_Nil,
				A2(
					$elm$core$List$concatMap,
					function (children) {
						return _Utils_ap(
							children,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]));
					},
					items));
		}),
	eT: $elm$html$Html$p(_List_Nil),
	fe: $author$project$Story$plainList,
	fg: $elm$html$Html$strong(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('kw')
			])),
	fk: $author$project$Story$plainList,
	fl: $author$project$Story$plainList,
	fm: function (_v4) {
		return $author$project$Story$plainList;
	},
	fn: $author$project$Story$plainList,
	fo: function (_v5) {
		return $author$project$Story$plainList;
	},
	fp: $author$project$Story$plainList,
	ck: $elm$html$Html$text,
	fs: $elm$html$Html$text(''),
	fu: function (items) {
		return A2(
			$elm$html$Html$ul,
			_List_Nil,
			A2(
				$elm$core$List$map,
				function (_v6) {
					var children = _v6.b;
					return A2($elm$html$Html$li, _List_Nil, children);
				},
				items));
	}
};
var $author$project$Story$view = function (src) {
	var _v0 = A2(
		$elm$core$Result$andThen,
		function (blocks) {
			return A2(
				$elm$core$Result$mapError,
				function (_v2) {
					return 0;
				},
				A2($dillonkearns$elm_markdown$Markdown$Renderer$render, $author$project$Story$renderer, blocks));
		},
		A2(
			$elm$core$Result$mapError,
			function (_v1) {
				return 0;
			},
			$dillonkearns$elm_markdown$Markdown$Parser$parse(src)));
	if (!_v0.$) {
		var nodes = _v0.a;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('story')
				]),
			nodes);
	} else {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('story')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(src)
						]))
				]));
	}
};
var $author$project$Main$introTeach = function (m) {
	var room = function (t) {
		return A2(
			$elm$html$Html$li,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('py')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$author$project$Pinyin$toMarks(
								'ma' + $elm$core$String$fromInt(t)))
						])),
					$elm$html$Html$text(' '),
					$author$project$Main$introCast(
					A2(
						$author$project$Main$introName,
						m,
						's:t:' + $elm$core$String$fromInt(t)))
				]));
	};
	var count = function (role) {
		return $elm$core$List$length(
			A2(
				$elm$core$List$filter,
				function (it) {
					return (!it.b3) && _Utils_eq(it.e9, role);
				},
				$elm$core$Dict$values(m.d.b2)));
	};
	return _List_fromArray(
		[
			A2(
			$author$project$Main$introCard,
			'Parts first, each with a keyword',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Every part gets a keyword, a name for its picture. A character comes only after its parts, and a word only after its characters, so there\u0027s always something familiar to hang the new thing on.')
						]))
				])),
			A2(
			$author$project$Main$introCard,
			'A story for every character',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Each character gets a short story in which its parts add up to its meaning. Take '),
							$author$project$Main$introZh('爸'),
							$elm$html$Html$text(', “dad”:')
						])),
					A3(
					$author$project$Main$introFormula,
					m,
					_List_fromArray(
						[
							_Utils_Tuple2(
							'h:父:fu4',
							A2($author$project$Main$introKw, m, 'h:父:fu4')),
							_Utils_Tuple2(
							'h:巴:ba1',
							A2($author$project$Main$introKw, m, 'h:巴:ba1'))
						]),
					_Utils_Tuple2(
						'h:爸:ba4',
						A2($author$project$Main$introKw, m, 'h:爸:ba4'))),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('A father with a child who clings to his leg and won\u0027t let go: that\u0027s a dad.')
						]))
				])),
			A2(
			$author$project$Main$introCard,
			'The sound is the scene',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Where the story happens tells you how the character sounds:')
						])),
					A2(
					$elm$html$Html$ul,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$li,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									'the initial is an actor (' + ($elm$core$String$fromInt(
										count('initial')) + ' of them);'))
								])),
							A2(
							$elm$html$Html$li,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									'the final is a building (' + ($elm$core$String$fromInt(
										count('final')) + ' of them);'))
								])),
							A2(
							$elm$html$Html$li,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('the tone is the room, the same five in every building:')
								]))
						])),
					A2(
					$elm$html$Html$ul,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('intro-rooms')
						]),
					A2(
						$elm$core$List$map,
						room,
						A2($elm$core$List$range, 1, 5))),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('爸 is bà, so its story happens with '),
							$author$project$Main$introCast(
							A2($author$project$Main$introName, m, 's:i:b')),
							$elm$html$Html$text(' (b) at '),
							$author$project$Main$introCast(
							A2($author$project$Main$introName, m, 's:f:a')),
							$elm$html$Html$text(' (a), in '),
							$author$project$Main$introCast(
							A2($author$project$Main$introName, m, 's:t:4')),
							$elm$html$Html$text(' (4th tone). Each actor, building and room gets its own card, just before you first need it.')
						]))
				])),
			A2(
			$author$project$Main$introCard,
			'Putting it all together',
			_List_fromArray(
				[
					function () {
					var _v0 = A2(
						$elm$core$Maybe$andThen,
						function ($) {
							return $.eD;
						},
						A2($author$project$Corpus$get, m.d, 'h:爸:ba4'));
					if (!_v0.$) {
						var story = _v0.a;
						return $author$project$Story$view(story);
					} else {
						return $elm$html$Html$text('');
					}
				}(),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('muted small')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Parts are in bold, the character\u0027s own keyword in bold italics, and the cast in blue italics.')
						])),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('See '),
							$author$project$Main$introZh('爸'),
							$elm$html$Html$text(' again and the scene comes back: '),
							$author$project$Main$introCast(
							A2($author$project$Main$introName, m, 's:i:b')),
							$elm$html$Html$text(' with a child clinging to his leg, in the cellar of the spa. A clinging child means dad; Beethoven, the spa and the cellar mean bà.')
						]))
				])),
			A2(
			$author$project$Main$introCard,
			'Lessons',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('A lesson brings a few new items. Each is shown first: its glyph, reading, meaning, parts and story. Then a short quiz on them, in mixed order:')
						])),
					A2(
					$elm$html$Html$ul,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$li,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('its meaning, typed;')
								])),
							A2(
							$elm$html$Html$li,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('its pinyin, typed with tone numbers (characters only; a word\u0027s pinyin is shown and spoken instead);')
								])),
							A2(
							$elm$html$Html$li,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('which of four it is;')
								])),
							A2(
							$elm$html$Html$li,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('and writing it, stroke by stroke (this can be turned off in Settings).')
								]))
						])),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('An item is learned once you\u0027ve got each of those right.')
						]))
				])),
			A2(
			$author$project$Main$introCard,
			'Reviews',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Each of those skills then comes back on its own schedule: soon at first, then less and less often as it sticks, and sooner again if you miss it. Your due reviews are on the home screen; do them before new lessons.')
						])),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Meanings accept the keyword or a close synonym, and small typos are forgiven. Under an answer, ↶ undoes a slip, + accepts your answer from now on, and ⓘ opens the item\u0027s page.')
						]))
				])),
			A2(
			$author$project$Main$introCard,
			'Your progress',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Everything stays in this browser. Back it up now and then under Data, where you can also mark what you already know.')
						]))
				]))
		]);
};
var $author$project$Main$introWhat = function (m) {
	return _List_fromArray(
		[
			A2(
			$author$project$Main$introCard,
			'A staircase for reading Chinese',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Louti ('),
							$author$project$Main$introZh('楼梯'),
							$elm$html$Html$text(', lóutī, “staircase”) teaches you to read Simplified Chinese: the characters, how each one sounds, and the words of the HSK syllabus, the standard used across China and in the HSK exams.')
						])),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Every step uses only what you already know. You start with the simplest parts of characters and climb, a few items at a time, to thousands of characters and words.')
						]))
				])),
			A2(
			$author$project$Main$introCard,
			'A few minutes a day',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Each day, do your reviews first: quick checks of what you\u0027ve learned, each timed for just before you\u0027d forget it. Then take a lesson of a few new items. Whatever you learn comes back on its own schedule, so it sticks.')
						]))
				])),
			A2(
			$author$project$Main$introCard,
			'What it\u0027s for',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Reading. Louti doesn\u0027t teach speaking, listening or grammar; its audio is there to fix each sound in your memory. Once you know a few hundred characters, pair it with graded readers: Louti builds recognition, and reading real text turns it into fluency.')
						]))
				]))
		]);
};
var $author$project$Main$viewIntro = F2(
	function (m, n) {
		var pages = _List_fromArray(
			[
				_Utils_Tuple2(
				'What is Louti?',
				$author$project$Main$introWhat(m)),
				_Utils_Tuple2(
				'How Chinese characters work',
				$author$project$Main$introChars(m)),
				_Utils_Tuple2(
				'How Louti teaches them',
				$author$project$Main$introTeach(m)),
				_Utils_Tuple2(
				'What Louti teaches',
				$author$project$Main$introScope(m))
			]);
		var count = $elm$core$List$length(pages);
		var cur = A3($elm$core$Basics$clamp, 0, count - 1, n);
		var _v0 = A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2('', _List_Nil),
			$elm$core$List$head(
				A2($elm$core$List$drop, cur, pages)));
		var title = _v0.a;
		var body = _v0.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('settings intro-pages')
				]),
			A2(
				$elm$core$List$cons,
				A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('intro-step')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$elm$core$String$fromInt(cur + 1) + (' of ' + $elm$core$String$fromInt(count)))
						])),
				A2(
					$elm$core$List$cons,
					A2(
						$elm$html$Html$h1,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('intro-title')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(title)
							])),
					_Utils_ap(
						body,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('intro-nav')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('small-btn'),
												$elm$html$Html$Events$onClick(
												$author$project$Main$IntroStep(cur - 1)),
												$elm$html$Html$Attributes$disabled(!cur)
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('‹ Previous')
											])),
										A2(
										$elm$html$Html$div,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('intro-dots')
											]),
										A2(
											$elm$core$List$indexedMap,
											F2(
												function (i, _v1) {
													return A2(
														$elm$html$Html$span,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$classList(
																_List_fromArray(
																	[
																		_Utils_Tuple2('dot', true),
																		_Utils_Tuple2(
																		'on',
																		_Utils_eq(i, cur))
																	]))
															]),
														_List_Nil);
												}),
											pages)),
										(_Utils_cmp(cur, count - 1) < 0) ? A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('small-btn primary'),
												$elm$html$Html$Events$onClick(
												$author$project$Main$IntroStep(cur + 1))
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Next ›')
											])) : A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('small-btn primary'),
												$elm$html$Html$Events$onClick($author$project$Main$IntroDone)
											]),
										_List_fromArray(
											[
												$elm$html$Html$text(
												m.a.b$ ? 'Done' : 'Let\u0027s go')
											]))
									]))
							])))));
	});
var $author$project$Main$ConfirmReset = function (a) {
	return {$: 49, a: a};
};
var $author$project$Main$GoBack = {$: 4};
var $author$project$Main$MarkKnownItem = function (a) {
	return {$: 47, a: a};
};
var $author$project$Main$NoteInput = function (a) {
	return {$: 41, a: a};
};
var $author$project$Main$ResetItem = function (a) {
	return {$: 48, a: a};
};
var $author$project$Main$SaveNote = function (a) {
	return {$: 42, a: a};
};
var $author$project$Main$SelectComp = F2(
	function (a, b) {
		return {$: 40, a: a, b: b};
	});
var $author$project$Main$SetDrawHint = F2(
	function (a, b) {
		return {$: 23, a: a, b: b};
	});
var $author$project$Main$ToggleSuspend = function (a) {
	return {$: 50, a: a};
};
var $author$project$Study$cardFor = F2(
	function (s, k) {
		return A2(
			$elm$core$Dict$get,
			$author$project$State$keyOf(k),
			s.aB);
	});
var $author$project$Main$chipGlyph = F2(
	function (m, it) {
		return (it.b3 === 2) ? A3($author$project$Glyph$viewItem, m.d, 'chip-svg', it) : A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('chip-text')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(
					$author$project$Corpus$glyphText(it))
				]));
	});
var $author$project$Main$soundPart = F2(
	function (m, it) {
		var _v0 = A2(
			$elm$core$Maybe$andThen,
			$author$project$Corpus$get(m.d),
			it.eW);
		if (!_v0.$) {
			var ph = _v0.a;
			return ((ph.b3 === 3) && (it.b3 === 3)) ? $elm$core$Maybe$Just(ph) : $elm$core$Maybe$Nothing;
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Main$chipLabel = F3(
	function (m, it, c) {
		var _v0 = A2($author$project$Main$soundPart, m, it);
		if (!_v0.$) {
			var ph = _v0.a;
			return _Utils_eq(ph.aZ, c.aZ) ? A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('chip-label')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(c.cR)
							])),
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('chip-sound py')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								$author$project$Pinyin$toMarks(ph.c4) + (' → ' + $author$project$Pinyin$toMarks(it.c4)))
							]))
					])) : A2(
				$elm$html$Html$span,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text(c.cR)
					]));
		} else {
			return A2(
				$elm$html$Html$span,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text(c.cR)
					]));
		}
	});
var $author$project$Main$facetLabel = F2(
	function (it, f) {
		switch (f) {
			case 0:
				return 'Pinyin';
			case 1:
				return (it.b3 === 4) ? 'Meaning' : 'Keyword';
			case 2:
				return 'Draw it';
			case 3:
				return 'Which one?';
			default:
				var _v1 = it.e9;
				switch (_v1) {
					case 'initial':
						return 'Which initial?';
					case 'final':
						return 'Which final?';
					default:
						return 'Which tone?';
				}
		}
	});
var $author$project$Main$facetSchedule = F3(
	function (m, it, f) {
		var _v0 = A2(
			$author$project$Study$cardFor,
			m.a,
			{cB: f, aZ: it.aZ});
		if (!_v0.$) {
			var card = _v0.a;
			return A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('field-hint facet-line')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(
						A2($author$project$Main$facetLabel, it, f) + (': ' + (A2(
							$elm$core$Maybe$withDefault,
							'new',
							A2(
								$elm$core$Maybe$map,
								function (x) {
									return $elm$core$String$fromFloat(
										$elm$core$Basics$round(x * 10) / 10) + ' days';
								},
								card.fd)) + (((f === 2) ? (' · hint ' + $elm$core$String$fromInt(card.bC)) : '') + (' · next ' + A2($author$project$Main$dateString, m.J, card.bA))))))
					]));
		} else {
			return $elm$html$Html$text('');
		}
	});
var $author$project$Main$primaryChip = F2(
	function (m, pr) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('chips')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('chips-label')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Another reading of')
						])),
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('comp-chip'),
							$elm$html$Html$Events$onClick(
							$author$project$Main$Nav(
								$author$project$Main$ItemPage(pr.aZ)))
						]),
					_List_fromArray(
						[
							A2($author$project$Main$chipGlyph, m, pr),
							A2(
							$elm$html$Html$span,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(pr.cR)
								])),
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('tag py')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Pinyin$toMarks(pr.c4))
								]))
						]))
				]));
	});
var $author$project$Main$primaryReading = F2(
	function (m, it) {
		return ((it.b3 === 3) && (!it.e$)) ? $elm$core$List$head(
			A2(
				$elm$core$List$filter,
				function (p) {
					return (p.b3 === 3) && (p.e$ && _Utils_eq(p.cu, it.cu));
				},
				A2(
					$elm$core$List$filterMap,
					$author$project$Corpus$get(m.d),
					it.e_))) : $elm$core$Maybe$Nothing;
	});
var $author$project$Pinyin$initialFinal = function (syl) {
	var yw = function (s) {
		return A2($elm$core$String$startsWith, 'yu', s) ? ('v' + A2($elm$core$String$dropLeft, 2, s)) : (A2($elm$core$String$startsWith, 'yi', s) ? A2($elm$core$String$dropLeft, 1, s) : ((s === 'you') ? 'iu' : (A2($elm$core$String$startsWith, 'y', s) ? ('i' + A2($elm$core$String$dropLeft, 1, s)) : (A2($elm$core$String$startsWith, 'wu', s) ? A2($elm$core$String$dropLeft, 1, s) : ((s === 'wei') ? 'ui' : ((s === 'wen') ? 'un' : (A2($elm$core$String$startsWith, 'w', s) ? ('u' + A2($elm$core$String$dropLeft, 1, s)) : s)))))));
	};
	var initials = _List_fromArray(
		['zh', 'ch', 'sh', 'b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'r', 'z', 'c', 's']);
	var _v0 = A2(
		$elm$core$List$filter,
		function (i) {
			return A2($elm$core$String$startsWith, i, syl);
		},
		initials);
	if (_v0.b) {
		var i = _v0.a;
		var rest = A2(
			$elm$core$String$dropLeft,
			$elm$core$String$length(i),
			syl);
		return _Utils_Tuple2(
			i,
			(A2(
				$elm$core$List$member,
				i,
				_List_fromArray(
					['j', 'q', 'x'])) && A2($elm$core$String$startsWith, 'u', rest)) ? ('v' + A2($elm$core$String$dropLeft, 1, rest)) : rest);
	} else {
		return _Utils_Tuple2(
			'',
			yw(syl));
	}
};
var $author$project$Pinyin$rhyme = function (f) {
	switch (f) {
		case 'ia':
			return 'a';
		case 'ua':
			return 'a';
		case 'uo':
			return 'o';
		case 'ie':
			return 'e';
		case 've':
			return 'e';
		case 'uai':
			return 'ai';
		case 'ui':
			return 'ei';
		case 'iao':
			return 'ao';
		case 'iu':
			return 'ou';
		case 'ian':
			return 'an';
		case 'uan':
			return 'an';
		case 'van':
			return 'an';
		case 'in':
			return 'en';
		case 'un':
			return 'en';
		case 'vn':
			return 'en';
		case 'iang':
			return 'ang';
		case 'uang':
			return 'ang';
		case 'ing':
			return 'eng';
		case 'iong':
			return 'ong';
		default:
			return f;
	}
};
var $author$project$Pinyin$toneless = function (syl) {
	return $author$project$Pinyin$split(syl).a;
};
var $author$project$Pinyin$drifted = F2(
	function (a, b) {
		var _v0 = $author$project$Pinyin$initialFinal(
			$author$project$Pinyin$toneless(b));
		var ib = _v0.a;
		var fb = _v0.b;
		var _v1 = $author$project$Pinyin$initialFinal(
			$author$project$Pinyin$toneless(a));
		var ia = _v1.a;
		var fa = _v1.b;
		return (!_Utils_eq(ia, ib)) && (!_Utils_eq(
			$author$project$Pinyin$rhyme(fa),
			$author$project$Pinyin$rhyme(fb)));
	});
var $author$project$Main$soundNote = F2(
	function (m, it) {
		var _v0 = A2($author$project$Main$soundPart, m, it);
		if (!_v0.$) {
			var ph = _v0.a;
			return A2($author$project$Pinyin$drifted, ph.c4, it.c4) ? A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('sound-note')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('zh')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(ph.cu)
							])),
						$elm$html$Html$text(' gave this character its sound, but the pronunciation has drifted a long way over the centuries.')
					])) : $elm$html$Html$text('');
		} else {
			return $elm$html$Html$text('');
		}
	});
var $author$project$Main$statusLabel = function (st) {
	switch (st) {
		case 0:
			return 'not started';
		case 1:
			return 'learning';
		case 2:
			return 'learned';
		default:
			return 'suspended';
	}
};
var $author$project$Main$RevertStory = function (a) {
	return {$: 46, a: a};
};
var $author$project$Main$SaveStory = function (a) {
	return {$: 45, a: a};
};
var $author$project$Main$StoryInput = function (a) {
	return {$: 43, a: a};
};
var $elm$html$Html$code = _VirtualDom_node('code');
var $elm$html$Html$Attributes$maxlength = function (n) {
	return A2(
		_VirtualDom_attribute,
		'maxlength',
		$elm$core$String$fromInt(n));
};
var $author$project$Main$storyEditor = F3(
	function (m, it, story) {
		return _List_fromArray(
			[
				A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('field-hint')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('You can use '),
						A2(
						$elm$html$Html$code,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('**bold**')
							])),
						$elm$html$Html$text(' for '),
						A2(
						$elm$html$Html$strong,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('bold')
							])),
						$elm$html$Html$text(' and '),
						A2(
						$elm$html$Html$code,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('_italic_')
							])),
						$elm$html$Html$text(' for '),
						A2(
						$elm$html$Html$em,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('italics')
							])),
						$elm$html$Html$text(
						'; up to ' + ($elm$core$String$fromInt($author$project$Main$maxStoryLength) + ' characters.'))
					])),
				A2(
				$elm$html$Html$textarea,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$value(
						A2($elm$core$Maybe$withDefault, story, m.B)),
						$elm$html$Html$Events$onInput($author$project$Main$StoryInput),
						$elm$html$Html$Attributes$maxlength($author$project$Main$maxStoryLength),
						$elm$html$Html$Attributes$rows(4)
					]),
				_List_Nil),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('row')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('small-btn'),
								$elm$html$Html$Events$onClick(
								$author$project$Main$SaveStory(it.aZ)),
								$elm$html$Html$Attributes$disabled(
								_Utils_eq(m.B, $elm$core$Maybe$Nothing) || _Utils_eq(
									m.B,
									$elm$core$Maybe$Just(story)))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Save')
							])),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('small-btn'),
								$elm$html$Html$Events$onClick(
								$author$project$Main$RevertStory(it.aZ)),
								$elm$html$Html$Attributes$disabled(
								!A2($elm$core$Dict$member, it.aZ, m.a.a6)),
								$elm$html$Html$Attributes$title('Go back to the course\u0027s story')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Revert')
							]))
					]))
			]);
	});
var $author$project$Main$storyFor = F2(
	function (m, it) {
		var _v0 = A2($elm$core$Dict$get, it.aZ, m.a.a6);
		if (!_v0.$) {
			var s = _v0.a;
			return $elm$core$Maybe$Just(s);
		} else {
			return (!it.b3) ? $elm$core$Maybe$Just(
				A2($elm$core$Maybe$withDefault, it.c$, it.eD)) : it.eD;
		}
	});
var $author$project$Main$viewCanonical = F2(
	function (m, it) {
		var _v0 = _Utils_Tuple2(
			it.b3,
			A2(
				$elm$core$Maybe$andThen,
				$author$project$Corpus$get(m.d),
				it.dP));
		if (_v0.a === 2) {
			if (!_v0.b.$) {
				var _v1 = _v0.a;
				var c = _v0.b.a;
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('chips canonical')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('chips-label')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('A form of')
								])),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('comp-chip'),
									$elm$html$Html$Events$onClick(
									$author$project$Main$Nav(
										$author$project$Main$ItemPage(c.aZ)))
								]),
							_List_fromArray(
								[
									A2($author$project$Main$chipGlyph, m, c),
									A2(
									$elm$html$Html$span,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text(c.cR)
										]))
								]))
						]));
			} else {
				var _v2 = _v0.a;
				var _v3 = _v0.b;
				var _v4 = it.dQ;
				if (!_v4.$) {
					var g = _v4.a;
					return A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('chips canonical')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('chips-label')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('A form of ' + g)
									]))
							]));
				} else {
					return $elm$html$Html$text('');
				}
			}
		} else {
			return $elm$html$Html$text('');
		}
	});
var $author$project$Main$Play = function (a) {
	return {$: 30, a: a};
};
var $author$project$Main$soundRoleLabel = function (it) {
	var py = function (v) {
		return A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('py')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(v)
				]));
	};
	var _v0 = it.e9;
	switch (_v0) {
		case 'initial':
			return _List_fromArray(
				[
					$elm$html$Html$text('Initial '),
					py(
					$author$project$Pinyin$soundDisplay(it.fw)),
					$elm$html$Html$text(' · actor')
				]);
		case 'final':
			return _List_fromArray(
				[
					$elm$html$Html$text('Final '),
					py(
					$author$project$Pinyin$soundDisplay(it.fw)),
					$elm$html$Html$text(' · location')
				]);
		default:
			return _List_fromArray(
				[
					$elm$html$Html$text('Tone '),
					py(it.fw),
					$elm$html$Html$text(' · room')
				]);
	}
};
var $author$project$Main$viewGlyphBig = F2(
	function (m, it) {
		var _v0 = it.b3;
		if (!_v0) {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('sound-big')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('sound-role')
							]),
						$author$project$Main$soundRoleLabel(it)),
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('sound-name')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(it.cR)
							]))
					]));
		} else {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('glyph-big'),
						$elm$html$Html$Events$onClick(
						$author$project$Main$Play(it))
					]),
				_List_fromArray(
					[
						A3($author$project$Glyph$viewItem, m.d, '', it)
					]));
		}
	});
var $author$project$Main$ReportDelete = function (a) {
	return {$: 74, a: a};
};
var $author$project$Main$ReportOpen = function (a) {
	return {$: 70, a: a};
};
var $author$project$Main$viewItemReports = F2(
	function (m, it) {
		var mine = A2(
			$elm$core$List$filter,
			function (_v1) {
				var r = _v1.b;
				return _Utils_eq(r.aZ, it.aZ);
			},
			A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, m.a.T));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('settings-card')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$h2,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Reports')
						])),
					$elm$core$List$isEmpty(mine) ? A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('field-hint')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Something wrong with this card? Report it, and it goes out with your next report export.')
						])) : A2(
					$elm$html$Html$ul,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('reports')
						]),
					A2(
						$elm$core$List$map,
						function (_v0) {
							var i = _v0.a;
							var r = _v0.b;
							return A2(
								$elm$html$Html$li,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$elm$html$Html$span,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text(r.ck)
											])),
										A2(
										$elm$html$Html$span,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('muted small')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text(
												' · ' + (A2($author$project$Main$dateString, m.J, r.aP) + ((r.b9 !== 'item') ? (', ' + r.b9) : '')))
											])),
										A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('small-btn'),
												$elm$html$Html$Events$onClick(
												$author$project$Main$ReportDelete(i))
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Delete')
											]))
									]));
						},
						mine)),
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('small-btn'),
							$elm$html$Html$Events$onClick(
							$author$project$Main$ReportOpen(it.aZ))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Report a problem')
						]))
				]));
	});
var $author$project$Main$viewKeyword = function (it) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('keyword-block')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('keyword')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(it.cR),
						(it.b3 === 2) ? A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('qualifier')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								', ' + $author$project$Main$positionPhrase(
									A2($elm$core$Maybe$withDefault, '', it.eY)))
							])) : $elm$html$Html$text('')
					]))
			]));
};
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $author$project$Main$viewOtherMeanings = function (it) {
	return ($elm$core$List$isEmpty(it.eA) && $elm$core$List$isEmpty(it.dF)) ? $elm$html$Html$text('') : A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('other-meanings')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$h3,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Other meanings')
					])),
				A2(
				$elm$html$Html$ul,
				_List_Nil,
				_Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return A2(
								$elm$html$Html$li,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text(x),
										A2(
										$elm$html$Html$span,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('accepted-tag')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text(' · also accepted')
											]))
									]));
						},
						it.dF),
					A2(
						$elm$core$List$map,
						function (x) {
							return A2(
								$elm$html$Html$li,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text(x)
									]));
						},
						it.eA)))
			]));
};
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $elm$svg$Svg$Attributes$strokeLinecap = _VirtualDom_attribute('stroke-linecap');
var $elm$svg$Svg$Attributes$strokeLinejoin = _VirtualDom_attribute('stroke-linejoin');
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $author$project$Main$icon = function (name) {
	var paths = function () {
		switch (name) {
			case 'next':
				return _List_fromArray(
					['M5 12h14', 'M13 6l6 6-6 6']);
			case 'back':
				return _List_fromArray(
					['M19 12H5', 'M11 6l-6 6 6 6']);
			case 'flag':
				return _List_fromArray(
					['M5 21V4', 'M5 4h12l-2.5 4 2.5 4H5']);
			case 'undo':
				return _List_fromArray(
					['M9 14L4 9l5-5', 'M4 9h10.5a5.5 5.5 0 010 11H11']);
			case 'add':
				return _List_fromArray(
					['M12 5v14', 'M5 12h14']);
			case 'info':
				return _List_fromArray(
					['M12 11v6', 'M12 7.5v.01', 'M21 12a9 9 0 11-18 0 9 9 0 0118 0z']);
			case 'copy':
				return _List_fromArray(
					['M9 9h11v11H9z', 'M5 15H4V4h11v1']);
			case 'check':
				return _List_fromArray(
					['M5 12l5 5 9-10']);
			case 'edit':
				return _List_fromArray(
					['M4 20h4L19 9l-4-4L4 16v4z', 'M13.5 6.5l4 4']);
			case 'play':
				return _List_fromArray(
					['M11 5L6 9H3v6h3l5 4V5z', 'M15.5 8.5a5 5 0 010 7', 'M18.5 5.5a9 9 0 010 13']);
			default:
				return _List_Nil;
		}
	}();
	return A2(
		$elm$svg$Svg$svg,
		_List_fromArray(
			[
				$elm$svg$Svg$Attributes$viewBox('0 0 24 24'),
				$elm$svg$Svg$Attributes$class('icon'),
				$elm$svg$Svg$Attributes$fill('none'),
				$elm$svg$Svg$Attributes$stroke('currentColor'),
				$elm$svg$Svg$Attributes$strokeWidth('2'),
				$elm$svg$Svg$Attributes$strokeLinecap('round'),
				$elm$svg$Svg$Attributes$strokeLinejoin('round')
			]),
		A2(
			$elm$core$List$map,
			function (d) {
				return A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$d(d)
						]),
					_List_Nil);
			},
			paths));
};
var $author$project$Main$audioButton = function (it) {
	var _v0 = it.dH;
	if (!_v0.$) {
		var a = _v0.a;
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('audio'),
					$elm$html$Html$Events$onClick(
					$author$project$Main$Play(it)),
					A2($elm$html$Html$Attributes$attribute, 'aria-label', 'Play'),
					$elm$html$Html$Attributes$title('Play')
				]),
			_List_fromArray(
				[
					$author$project$Main$icon('play'),
					(!_Utils_eq(
					a.ck,
					$author$project$Corpus$glyphText(it))) ? A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('as-in')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('as in ' + a.ck)
						])) : $elm$html$Html$text('')
				]));
	} else {
		return $elm$html$Html$text('');
	}
};
var $author$project$Main$Copied = function (a) {
	return {$: 13, a: a};
};
var $author$project$Main$copyButton = F2(
	function (m, it) {
		var txt = $author$project$Corpus$glyphText(it);
		return ((txt === '') || (txt === '?')) ? $elm$html$Html$text('') : A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('audio copy'),
					A2($elm$html$Html$Attributes$attribute, 'data-copy', txt),
					A2($elm$html$Html$Attributes$attribute, 'aria-label', 'Copy ' + txt),
					$elm$html$Html$Attributes$title('Copy ' + txt),
					$elm$html$Html$Events$onClick(
					$author$project$Main$Copied(txt))
				]),
			_List_fromArray(
				[
					$author$project$Main$icon(
					_Utils_eq(
						m.be,
						$elm$core$Maybe$Just(txt)) ? 'check' : 'copy')
				]));
	});
var $author$project$Main$StoryClose = {$: 44};
var $author$project$Main$editButton = F3(
	function (m, it, editable) {
		return ((!editable) || (!it.b3)) ? _List_Nil : _List_fromArray(
			[
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class(
						(!_Utils_eq(m.B, $elm$core$Maybe$Nothing)) ? 'audio edit on' : 'audio edit'),
						A2($elm$html$Html$Attributes$attribute, 'aria-label', 'Edit the story'),
						$elm$html$Html$Attributes$title('Edit the story'),
						$elm$html$Html$Events$onClick(
						_Utils_eq(m.B, $elm$core$Maybe$Nothing) ? $author$project$Main$StoryInput(
							A2(
								$elm$core$Maybe$withDefault,
								'',
								A2($author$project$Main$storyFor, m, it))) : $author$project$Main$StoryClose)
					]),
				_List_fromArray(
					[
						$author$project$Main$icon('edit')
					]))
			]);
	});
var $author$project$Main$viewReading = F3(
	function (m, it, editable) {
		var tools = function (extra) {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('reading-tools')
					]),
				_Utils_ap(
					extra,
					_Utils_ap(
						_List_fromArray(
							[
								A2($author$project$Main$copyButton, m, it)
							]),
						A3($author$project$Main$editButton, m, it, editable))));
		};
		var _v0 = it.b3;
		switch (_v0) {
			case 3:
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('reading')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('reading-py')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Pinyin$toMarks(it.c4))
								])),
							tools(
							_List_fromArray(
								[
									$author$project$Main$audioButton(it)
								]))
						]));
			case 4:
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('reading')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('reading-py'),
									$elm$html$Html$Events$onClick($author$project$Main$ToggleCitation)
								]),
							A2($author$project$Main$wordPinyin, m.ag, it)),
							tools(
							_List_fromArray(
								[
									$author$project$Main$audioButton(it)
								]))
						]));
			case 1:
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('reading')
						]),
					_List_fromArray(
						[
							tools(_List_Nil)
						]));
			case 2:
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('reading')
						]),
					_List_fromArray(
						[
							tools(_List_Nil)
						]));
			default:
				var _v1 = it.dH;
				if (!_v1.$) {
					return A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('reading')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('reading-tools')
									]),
								_List_fromArray(
									[
										$author$project$Main$audioButton(it)
									]))
							]));
				} else {
					return $elm$html$Html$text('');
				}
		}
	});
var $author$project$Main$SynAdd = function (a) {
	return {$: 29, a: a};
};
var $author$project$Main$SynDraft = function (a) {
	return {$: 28, a: a};
};
var $author$project$Main$SynSet = F3(
	function (a, b, c) {
		return {$: 26, a: a, b: b, c: c};
	});
var $elm$html$Html$form = _VirtualDom_node('form');
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $elm$html$Html$Events$alwaysPreventDefault = function (msg) {
	return _Utils_Tuple2(msg, true);
};
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 2, a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $elm$html$Html$Events$onSubmit = function (msg) {
	return A2(
		$elm$html$Html$Events$preventDefaultOn,
		'submit',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysPreventDefault,
			$elm$json$Json$Decode$succeed(msg)));
};
var $author$project$Main$viewUserAnswers = F2(
	function (m, it) {
		var mine = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2($elm$core$Dict$get, it.aZ, m.a.fj));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('settings-card')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$h2,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Your answers')
						])),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('field-hint')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$elm$core$List$isEmpty(mine) ? 'Answers you add here, or with + after a quiz answer, are accepted for this item\u0027s meaning.' : 'Accepted for this item\u0027s meaning, besides its keyword and synonyms.')
						])),
					A3(
					$elm$html$Html$Keyed$node,
					'div',
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('user-answers')
						]),
					A2(
						$elm$core$List$indexedMap,
						F2(
							function (i, a) {
								return _Utils_Tuple2(
									$elm$core$String$fromInt(i) + ('|' + a),
									A2(
										$elm$html$Html$div,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('user-answer')
											]),
										_List_fromArray(
											[
												A2(
												$elm$html$Html$input,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$value(a),
														$elm$html$Html$Attributes$maxlength($author$project$Main$maxAnswerLength),
														A2(
														$elm$html$Html$Events$on,
														'change',
														A2(
															$elm$json$Json$Decode$map,
															A2($author$project$Main$SynSet, it.aZ, i),
															$elm$html$Html$Events$targetValue)),
														A2($elm$html$Html$Attributes$attribute, 'autocapitalize', 'off'),
														A2($elm$html$Html$Attributes$attribute, 'autocorrect', 'off'),
														A2($elm$html$Html$Attributes$attribute, 'aria-label', 'Edit answer ' + a)
													]),
												_List_Nil),
												A2(
												$elm$html$Html$button,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('tool'),
														$elm$html$Html$Attributes$type_('button'),
														$elm$html$Html$Events$onClick(
														A2($author$project$Main$SynRemove, it.aZ, i)),
														A2($elm$html$Html$Attributes$attribute, 'aria-label', 'Remove ' + a),
														$elm$html$Html$Attributes$title('Remove')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('×')
													]))
											])));
							}),
						mine)),
					(_Utils_cmp(
					$elm$core$List$length(mine),
					$author$project$Main$maxAnswers) > -1) ? A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('field-hint')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							'That\u0027s the most answers an item can have (' + ($elm$core$String$fromInt($author$project$Main$maxAnswers) + '). Remove one to add another.'))
						])) : A2(
					$elm$html$Html$form,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('user-answer'),
							$elm$html$Html$Events$onSubmit(
							$author$project$Main$SynAdd(it.aZ))
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$input,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$value(m.aq),
									$elm$html$Html$Events$onInput($author$project$Main$SynDraft),
									$elm$html$Html$Attributes$maxlength($author$project$Main$maxAnswerLength),
									$elm$html$Html$Attributes$placeholder('add an answer'),
									A2($elm$html$Html$Attributes$attribute, 'autocapitalize', 'off'),
									A2($elm$html$Html$Attributes$attribute, 'autocorrect', 'off')
								]),
							_List_Nil),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('tool'),
									$elm$html$Html$Attributes$type_('submit'),
									$elm$html$Html$Attributes$disabled(
									$elm$core$String$trim(m.aq) === ''),
									A2($elm$html$Html$Attributes$attribute, 'aria-label', 'Add'),
									$elm$html$Html$Attributes$title('Add')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('+')
								]))
						]))
				]));
	});
var $author$project$Main$wordRow = F2(
	function (m, w) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('word-row'),
					$elm$html$Html$Events$onClick(
					$author$project$Main$Nav(
						$author$project$Main$ItemPage(w.aZ)))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('w')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(w.cm)
						])),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('py')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$author$project$Pinyin$joinMarks(w.fi))
						])),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('gl')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(w.cR)
						]))
				]));
	});
var $author$project$Main$viewItem = F2(
	function (m, it) {
		var usedIn = ((it.b3 === 1) || ((it.b3 === 2) || ((it.b3 === 3) && it.e$))) ? A2(
			$elm$core$List$take,
			30,
			A2(
				$elm$core$List$sortBy,
				function ($) {
					return $.eo;
				},
				A2(
					$elm$core$List$filter,
					function (o) {
						return A2($elm$core$List$member, it.aZ, o.dW);
					},
					A2(
						$elm$core$List$filter,
						function (o) {
							return ((o.b3 !== 4) && o.e$) || (o.b3 === 1);
						},
						$elm$core$Dict$values(m.d.b2))))) : _List_Nil;
		var used = A2(
			$elm$core$List$filterMap,
			$author$project$Corpus$get(m.d),
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2($elm$core$Dict$get, it.aZ, m.d.dz)));
		var strokeClass = function (i) {
			var _v5 = _Utils_Tuple2(
				m.ap,
				$elm$core$List$head(
					A2($elm$core$List$drop, i, it.ff)));
			if (!_v5.a.$) {
				if ((!_v5.b.$) && (!_v5.b.a.$)) {
					var sel = _v5.a.a;
					var ci = _v5.b.a.a;
					return _Utils_eq(sel, ci) ? 'hl' : 'dim';
				} else {
					return 'dim';
				}
			} else {
				return '';
			}
		};
		var story = A2(
			$elm$core$Maybe$withDefault,
			'',
			A2($author$project$Main$storyFor, m, it));
		var st = A2($author$project$Study$status, m.a, it.aZ);
		var bigGlyph = function () {
			var _v4 = A2(
				$elm$core$Maybe$andThen,
				function (k) {
					return A2($elm$core$Dict$get, k, m.d.cH);
				},
				it.ef);
			if (!_v4.$) {
				var g = _v4.a;
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('glyph-big')
						]),
					_List_fromArray(
						[
							A3($author$project$Glyph$view, '', strokeClass, g)
						]));
			} else {
				return A2($author$project$Main$viewGlyphBig, m, it);
			}
		}();
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('item-page')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('item-top')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('back'),
									$elm$html$Html$Events$onClick($author$project$Main$GoBack)
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('‹ Back')
								])),
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									'status-pill ' + $author$project$Main$statusClass(st))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Main$statusLabel(st))
								]))
						])),
					bigGlyph,
					A3($author$project$Main$viewReading, m, it, false),
					(!it.b3) ? $elm$html$Html$text('') : $author$project$Main$viewKeyword(it),
					A2($author$project$Main$viewCanonical, m, it),
					$elm$core$List$isEmpty(it.fj) ? $elm$html$Html$text('') : A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('synonyms')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							'Also accepted: ' + A2($elm$core$String$join, ', ', it.fj))
						])),
					function () {
					var _v0 = it.em;
					if (!_v0.$) {
						var img = _v0.a;
						return A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('image')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(img)
								]));
					} else {
						return $elm$html$Html$text('');
					}
				}(),
					(story !== '') ? $author$project$Story$view(story) : $elm$html$Html$text(''),
					(it.b3 === 4) ? A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('chips')
						]),
					A2(
						$elm$core$List$map,
						function (c) {
							return A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('comp-chip'),
										$elm$html$Html$Events$onClick(
										$author$project$Main$Nav(
											$author$project$Main$ItemPage(c.aZ)))
									]),
								_List_fromArray(
									[
										A2($author$project$Main$chipGlyph, m, c),
										A2(
										$elm$html$Html$span,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text(c.cR)
											])),
										A2(
										$elm$html$Html$span,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('tag py')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text(
												$author$project$Pinyin$toMarks(c.c4))
											]))
									]));
						},
						A2(
							$elm$core$List$filterMap,
							$author$project$Corpus$get(m.d),
							A3(
								$elm$core$List$foldr,
								F2(
									function (c, acc) {
										return A2($elm$core$List$member, c, acc) ? acc : A2($elm$core$List$cons, c, acc);
									}),
								_List_Nil,
								it.bx)))) : $elm$html$Html$text(''),
					function () {
					var _v1 = A2($author$project$Main$primaryReading, m, it);
					if (!_v1.$) {
						var pr = _v1.a;
						return A2($author$project$Main$primaryChip, m, pr);
					} else {
						return $elm$html$Html$text('');
					}
				}(),
					($elm$core$List$isEmpty(it.dW) || (!_Utils_eq(
					A2($author$project$Main$primaryReading, m, it),
					$elm$core$Maybe$Nothing))) ? $elm$html$Html$text('') : A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('chips')
						]),
					A2(
						$elm$core$List$indexedMap,
						F2(
							function (i, cid) {
								var _v2 = A2($author$project$Corpus$get, m.d, cid);
								if (!_v2.$) {
									var c = _v2.a;
									return A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$classList(
												_List_fromArray(
													[
														_Utils_Tuple2('comp-chip', true),
														_Utils_Tuple2(
														'selected',
														_Utils_eq(
															m.ap,
															$elm$core$Maybe$Just(i)))
													])),
												$elm$html$Html$Events$onClick(
												A2($author$project$Main$SelectComp, i, cid))
											]),
										_List_fromArray(
											[
												A2($author$project$Main$chipGlyph, m, c),
												A3($author$project$Main$chipLabel, m, it, c),
												_Utils_eq(
												$elm$core$Maybe$Just(cid),
												it.eW) ? A2(
												$elm$html$Html$span,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('tag')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('sound')
													])) : (_Utils_eq(
												$elm$core$Maybe$Just(cid),
												it.fb) ? A2(
												$elm$html$Html$span,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('tag')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('meaning')
													])) : $elm$html$Html$text(''))
											]));
								} else {
									return $elm$html$Html$text('');
								}
							}),
						it.dW)),
					($elm$core$List$isEmpty(it.dW) || (!_Utils_eq(
					A2($author$project$Main$primaryReading, m, it),
					$elm$core$Maybe$Nothing))) ? $elm$html$Html$text('') : A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('muted small')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Tap a component to highlight it; tap again to open it.')
						])),
					A2($author$project$Main$soundNote, m, it),
					$author$project$Main$viewOtherMeanings(it),
					(!(!it.b3)) ? A2($author$project$Main$viewItemReports, m, it) : $elm$html$Html$text(''),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('settings-card')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h2,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('Notes')
								])),
							A2(
							$elm$html$Html$textarea,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$value(
									A2(
										$elm$core$Maybe$withDefault,
										A2(
											$elm$core$Maybe$withDefault,
											'',
											A2($elm$core$Dict$get, it.aZ, m.a.a1)),
										m.an)),
									$elm$html$Html$Events$onInput($author$project$Main$NoteInput),
									$elm$html$Html$Attributes$rows(3)
								]),
							_List_Nil),
							(!_Utils_eq(m.an, $elm$core$Maybe$Nothing)) ? A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('small-btn'),
									$elm$html$Html$Events$onClick(
									$author$project$Main$SaveNote(it.aZ))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Save note')
								])) : $elm$html$Html$text('')
						])),
					(!(!it.b3)) ? A2($author$project$Main$viewUserAnswers, m, it) : $elm$html$Html$text(''),
					(!(!it.b3)) ? A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('settings-card')
						]),
					A2(
						$elm$core$List$cons,
						A2(
							$elm$html$Html$h2,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('Your story')
								])),
						A3($author$project$Main$storyEditor, m, it, story))) : $elm$html$Html$text(''),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('settings-card')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h2,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('Status')
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('row')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$button,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('small-btn'),
											$elm$html$Html$Events$onClick(
											$author$project$Main$MarkKnownItem(it.aZ))
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Mark known')
										])),
									m.aC ? A2(
									$elm$html$Html$button,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('small-btn danger'),
											$elm$html$Html$Events$onClick(
											$author$project$Main$ResetItem(it.aZ))
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Really reset')
										])) : A2(
									$elm$html$Html$button,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('small-btn'),
											$elm$html$Html$Events$onClick(
											$author$project$Main$ConfirmReset(true)),
											$elm$html$Html$Attributes$disabled(!st)
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Reset')
										])),
									A2(
									$elm$html$Html$button,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('small-btn'),
											$elm$html$Html$Events$onClick(
											$author$project$Main$ToggleSuspend(it.aZ))
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(
											(st === 3) ? 'Unsuspend' : 'Suspend')
										]))
								])),
							A2(
							$elm$html$Html$div,
							_List_Nil,
							A2(
								$elm$core$List$map,
								A2($author$project$Main$facetSchedule, m, it),
								A2(
									$author$project$State$cardFacets,
									it.aZ,
									$author$project$Study$drawable(it)))),
							function () {
							var _v3 = A2(
								$author$project$Study$cardFor,
								m.a,
								{cB: 2, aZ: it.aZ});
							if (!_v3.$) {
								var card = _v3.a;
								return A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('hint-picker')
										]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$p,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('field-hint')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('Already know how to write it? Start at hint level:')
												])),
											A2(
											$elm$html$Html$div,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('row')
												]),
											A2(
												$elm$core$List$map,
												function (h) {
													return A2(
														$elm$html$Html$button,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$class(
																_Utils_eq(card.bC, h) ? 'small-btn chosen' : 'small-btn'),
																$elm$html$Html$Events$onClick(
																A2($author$project$Main$SetDrawHint, it.aZ, h))
															]),
														_List_fromArray(
															[
																$elm$html$Html$text(
																$elm$core$String$fromInt(h))
															]));
												},
												_List_fromArray(
													[3, 2, 1, 0])))
										]));
							} else {
								return $elm$html$Html$text('');
							}
						}()
						])),
					$elm$core$List$isEmpty(used) ? $elm$html$Html$text('') : A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('word-list')
						]),
					A2(
						$elm$core$List$cons,
						A2(
							$elm$html$Html$h2,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('Words')
								])),
						A2(
							$elm$core$List$map,
							$author$project$Main$wordRow(m),
							A2($elm$core$List$take, 40, used)))),
					$elm$core$List$isEmpty(usedIn) ? $elm$html$Html$text('') : A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('word-list')
						]),
					A2(
						$elm$core$List$cons,
						A2(
							$elm$html$Html$h2,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('Used in')
								])),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('chips')
									]),
								A2(
									$elm$core$List$map,
									function (o) {
										return A2(
											$elm$html$Html$button,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('comp-chip'),
													$elm$html$Html$Events$onClick(
													$author$project$Main$Nav(
														$author$project$Main$ItemPage(o.aZ)))
												]),
											_List_fromArray(
												[
													A2(
													$elm$html$Html$span,
													_List_fromArray(
														[
															$elm$html$Html$Attributes$class('chip-text')
														]),
													_List_fromArray(
														[
															$elm$html$Html$text(
															$author$project$Corpus$glyphText(o))
														])),
													A2(
													$elm$html$Html$span,
													_List_Nil,
													_List_fromArray(
														[
															$elm$html$Html$text(o.cR)
														]))
												]));
									},
									usedIn))
							])))
				]));
	});
var $elm$svg$Svg$circle = $elm$svg$Svg$trustedNode('circle');
var $elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var $elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var $elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var $elm$svg$Svg$Attributes$strokeDasharray = _VirtualDom_attribute('stroke-dasharray');
var $elm$svg$Svg$Attributes$strokeDashoffset = _VirtualDom_attribute('stroke-dashoffset');
var $author$project$Main$donut = F2(
	function (label, c) {
		var total = A2($elm$core$Basics$max, 1, c.Q);
		var ring = F3(
			function (cls, offset, len) {
				return A2(
					$elm$svg$Svg$circle,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$cx('21'),
							$elm$svg$Svg$Attributes$cy('21'),
							$elm$svg$Svg$Attributes$r('15.9155'),
							$elm$svg$Svg$Attributes$class(cls),
							$elm$svg$Svg$Attributes$strokeDasharray(
							$elm$core$String$fromFloat(len) + (' ' + $elm$core$String$fromFloat(100 - len))),
							$elm$svg$Svg$Attributes$strokeDashoffset(
							$elm$core$String$fromFloat(25 - offset))
						]),
					_List_Nil);
			});
		var learning = (100 * c.aK) / total;
		var learned = (100 * c.au) / total;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('donut')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$svg,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$viewBox('0 0 42 42')
						]),
					_List_fromArray(
						[
							A3(ring, 'ring-bg', 0, 100),
							A3(ring, 'ring-learning', learned, learning),
							A3(ring, 'ring-learned', 0, learned)
						])),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						])),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('donut-n'),
							$elm$html$Html$Attributes$title('learned / learning / total')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('n-learned')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$elm$core$String$fromInt(c.au))
								])),
							$elm$html$Html$text(' / '),
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('n-learning')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$elm$core$String$fromInt(c.aK))
								])),
							$elm$html$Html$text(' / '),
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('n-total')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$elm$core$String$fromInt(c.Q))
								]))
						]))
				]));
	});
var $author$project$Main$viewProgress = function (m) {
	var wordsAt = function (l) {
		return A2(
			$elm$core$List$map,
			function ($) {
				return $.aZ;
			},
			A2(
				$elm$core$List$filter,
				function (it) {
					return ((it.b3 === 4) && _Utils_eq(
						it.ej,
						$elm$core$Maybe$Just(l))) || _Utils_eq(
						it.fz,
						$elm$core$Maybe$Just(l));
				},
				$elm$core$Dict$values(m.d.b2)));
	};
	var charsLearned = A2(
		$elm$core$List$filter,
		function (it) {
			return (it.b3 === 3) && (it.e$ && (A2($author$project$Study$status, m.a, it.aZ) === 2));
		},
		$elm$core$Dict$values(m.d.b2));
	var coverage = $elm$core$List$sum(
		A2(
			$elm$core$List$map,
			function ($) {
				return $.dZ;
			},
			charsLearned)) * 100;
	var charsAt = function (l) {
		return A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2($elm$core$Dict$get, l, m.d.cL));
	};
	var levels = A2(
		$elm$core$List$map,
		function (l) {
			return _Utils_Tuple3(
				l,
				A2(
					$author$project$Main$countStatuses,
					m,
					charsAt(l)),
				A2(
					$author$project$Main$countStatuses,
					m,
					wordsAt(l)));
		},
		A2($elm$core$List$range, 1, 7));
	var hsk1Words = A2(
		$elm$core$Maybe$withDefault,
		0,
		A2(
			$elm$core$Maybe$map,
			function (_v1) {
				var w = _v1.c;
				return $author$project$Main$frac(w);
			},
			$elm$core$List$head(levels)));
	var message = (coverage >= 90) ? 'Try a middle-grade novel with a tap-to-look-up reader.' : (($elm$core$List$length(charsLearned) >= 300) ? 'Mandarin Companion Level 1 readers are within reach.' : ((hsk1Words >= 0.9) ? 'You should try HSK 1 graded readers now!' : ((hsk1Words < 0.3) ? 'The start of a great journey!' : 'One step at a time.')));
	var all = A2(
		$author$project$Main$countStatuses,
		m,
		$elm$core$Array$toList(m.d.c1));
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('progress')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$h2,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Progress')
					])),
				$author$project$Main$viewOverall(m),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('levels')
					]),
				A2(
					$elm$core$List$map,
					function (_v0) {
						var l = _v0.a;
						var cs = _v0.b;
						var ws = _v0.c;
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('level-card')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h2,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text(
											$author$project$Main$hskName(l))
										])),
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('donuts')
										]),
									_List_fromArray(
										[
											A2($author$project$Main$donut, 'Characters', cs),
											A2($author$project$Main$donut, 'Words', ws)
										]))
								]));
					},
					levels)),
				A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('field-hint')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Under each ring: '),
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('n-learned')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('learned')
							])),
						$elm$html$Html$text(' / '),
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('n-learning')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('learning')
							])),
						$elm$html$Html$text(' / total. The course runs by frequency, so common words from higher levels show up early.')
					]))
			]));
};
var $author$project$Main$ReportCancel = {$: 73};
var $author$project$Main$ReportInput = function (a) {
	return {$: 71, a: a};
};
var $author$project$Main$ReportSend = {$: 72};
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $author$project$Main$viewReportSheet = function (m) {
	var _v0 = m.ao;
	if (_v0.$ === 1) {
		return $elm$html$Html$text('');
	} else {
		var r = _v0.a;
		var glyph = A2(
			$elm$core$Maybe$withDefault,
			r.aZ,
			A2(
				$elm$core$Maybe$map,
				$author$project$Corpus$glyphText,
				A2($author$project$Corpus$get, m.d, r.aZ)));
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('menu-backdrop'),
							$elm$html$Html$Events$onClick($author$project$Main$ReportCancel)
						]),
					_List_Nil),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('report-sheet')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h2,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									'Report ' + (_Utils_eq(glyph, r.cR) ? glyph : (glyph + (' · ' + r.cR))))
								])),
							A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('field-hint')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('What\u0027s wrong with this card? It\u0027s saved with the card and where you were; export reports from the Data page.')
								])),
							A2(
							$elm$html$Html$textarea,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$id('report-text'),
									$elm$html$Html$Attributes$value(r.ck),
									$elm$html$Html$Events$onInput($author$project$Main$ReportInput),
									$elm$html$Html$Attributes$rows(4),
									$elm$html$Html$Attributes$placeholder('e.g. the story says 机 means opportunity')
								]),
							_List_Nil),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('row')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$button,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('small-btn'),
											$elm$html$Html$Events$onClick($author$project$Main$ReportSend),
											$elm$html$Html$Attributes$disabled(
											$elm$core$String$trim(r.ck) === '')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Save report')
										])),
									A2(
									$elm$html$Html$button,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('small-btn'),
											$elm$html$Html$Events$onClick($author$project$Main$ReportCancel)
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Cancel')
										]))
								]))
						]))
				]));
	}
};
var $author$project$Main$SetBatch = function (a) {
	return {$: 52, a: a};
};
var $author$project$Main$SetLeniency = function (a) {
	return {$: 22, a: a};
};
var $author$project$Main$SetNewPerDay = function (a) {
	return {$: 53, a: a};
};
var $author$project$Main$SetRetention = function (a) {
	return {$: 51, a: a};
};
var $author$project$Main$SetTheme = function (a) {
	return {$: 56, a: a};
};
var $author$project$Main$SetVoice = function (a) {
	return {$: 55, a: a};
};
var $author$project$Main$SetWriting = function (a) {
	return {$: 54, a: a};
};
var $elm$core$List$sort = function (xs) {
	return A2($elm$core$List$sortBy, $elm$core$Basics$identity, xs);
};
var $author$project$Main$choiceField = F4(
	function (l, v, opts, toMsg) {
		var all = A2($elm$core$List$member, v, opts) ? opts : $elm$core$List$sort(
			A2($elm$core$List$cons, v, opts));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('field')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$label,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('field-label')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(l)
						])),
					A3(
					$author$project$Main$select,
					toMsg,
					$elm$core$String$fromInt(v),
					A2(
						$elm$core$List$map,
						function (n) {
							return _Utils_Tuple2(
								$elm$core$String$fromInt(n),
								$elm$core$String$fromInt(n));
						},
						all))
				]));
	});
var $elm$html$Html$Attributes$max = $elm$html$Html$Attributes$stringProperty('max');
var $elm$html$Html$Attributes$min = $elm$html$Html$Attributes$stringProperty('min');
var $elm$html$Html$Attributes$step = function (n) {
	return A2($elm$html$Html$Attributes$stringProperty, 'step', n);
};
var $author$project$Main$viewSettings = function (m) {
	var st = m.a.N;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('settings')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('settings-card')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h2,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Study')
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('field slider-field')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$label,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('field-label')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										'Retention target: ' + ($elm$core$String$fromInt(
											$elm$core$Basics$round(st.cb * 100)) + '%'))
									])),
								A2(
								$elm$html$Html$input,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$type_('range'),
										$elm$html$Html$Attributes$min('0.8'),
										$elm$html$Html$Attributes$max('0.97'),
										$elm$html$Html$Attributes$step('0.01'),
										$elm$html$Html$Attributes$value(
										$elm$core$String$fromFloat(st.cb)),
										$elm$html$Html$Events$onInput($author$project$Main$SetRetention)
									]),
								_List_Nil)
							])),
						A4(
						$author$project$Main$choiceField,
						'Lesson batch size',
						st.bS,
						_List_fromArray(
							[3, 5, 8, 10, 15, 20]),
						$author$project$Main$SetBatch),
						A4(
						$author$project$Main$choiceField,
						'New items per day',
						st.bG,
						_List_fromArray(
							[5, 10, 15, 20, 30, 40, 50, 75, 100]),
						$author$project$Main$SetNewPerDay)
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('settings-card')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h2,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Writing')
							])),
						A3($author$project$Main$checkField, 'Teach writing', st.dA, $author$project$Main$SetWriting),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('field slider-field')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$label,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('field-label')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Stroke grading')
									])),
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('slider-row')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$span,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('slider-end')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('strict')
											])),
										A2(
										$elm$html$Html$input,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$type_('range'),
												$elm$html$Html$Attributes$min('0.6'),
												$elm$html$Html$Attributes$max('1.6'),
												$elm$html$Html$Attributes$step('0.05'),
												$elm$html$Html$Attributes$value(
												$elm$core$String$fromFloat(st.ch)),
												$elm$html$Html$Events$onInput($author$project$Main$SetLeniency)
											]),
										_List_Nil),
										A2(
										$elm$html$Html$span,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('slider-end')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('forgiving')
											]))
									]))
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('settings-card')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h2,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Appearance')
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('field')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$label,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('field-label')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Theme')
									])),
								A3(
								$author$project$Main$select,
								$author$project$Main$SetTheme,
								st.dr,
								_List_fromArray(
									[
										_Utils_Tuple2('system', 'Match the system'),
										_Utils_Tuple2('light', 'Light'),
										_Utils_Tuple2('dark', 'Dark')
									]))
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('settings-card')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h2,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Text to speech')
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('field')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$label,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('field-label')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Voice')
									])),
								A3(
								$author$project$Main$select,
								$author$project$Main$SetVoice,
								st.bR,
								_List_fromArray(
									[
										_Utils_Tuple2('off', 'Off'),
										_Utils_Tuple2('male', 'Male'),
										_Utils_Tuple2('female', 'Female'),
										_Utils_Tuple2('alternate', 'Alternate'),
										_Utils_Tuple2('random', 'Random')
									]))
							]))
					]))
			]));
};
var $author$project$Main$nextIsTyped = function (m) {
	var _v0 = m.a.x;
	if (!_v0.$) {
		var sess = _v0.a;
		var _v1 = sess.a3;
		if (_v1.b) {
			var k = _v1.a;
			return A2(
				$elm$core$List$member,
				k.cB,
				_List_fromArray(
					[0, 1, 4]));
		} else {
			return false;
		}
	} else {
		return false;
	}
};
var $author$project$Main$nextTypedAttr = function (m) {
	return $author$project$Main$nextIsTyped(m) ? _List_fromArray(
		[
			A2($elm$html$Html$Attributes$attribute, 'data-next-typed', '1')
		]) : _List_Nil;
};
var $author$project$Main$QuitSession = {$: 8};
var $author$project$Main$sessionHead = F2(
	function (sess, label) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('session-head')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('quit'),
							$elm$html$Html$Events$onClick($author$project$Main$QuitSession),
							A2($elm$html$Html$Attributes$attribute, 'aria-label', 'Quit')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('×')
						])),
					A2(
					$elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						])),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('kind')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							sess.aj ? 'Lesson' : 'Review')
						]))
				]));
	});
var $author$project$Main$toolButton = F4(
	function (name, label, msg, enabled) {
		return A2(
			$elm$html$Html$button,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('tool tool-' + name),
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Attributes$disabled(!enabled),
						$elm$html$Html$Attributes$title(label),
						A2($elm$html$Html$Attributes$attribute, 'aria-label', label),
						A2(
						$elm$html$Html$Events$preventDefaultOn,
						'pointerdown',
						$elm$json$Json$Decode$succeed(
							_Utils_Tuple2($author$project$Main$NoOp, true)))
					]),
				enabled ? _List_fromArray(
					[
						A2(
						$elm$html$Html$Events$on,
						'pointerup',
						$elm$json$Json$Decode$succeed(msg)),
						A2(
						$elm$html$Html$Events$on,
						'click',
						A2(
							$elm$json$Json$Decode$andThen,
							function (d) {
								return (!d) ? $elm$json$Json$Decode$succeed(msg) : $elm$json$Json$Decode$fail('handled on pointerup');
							},
							A2($elm$json$Json$Decode$field, 'detail', $elm$json$Json$Decode$int)))
					]) : _List_Nil),
			_List_fromArray(
				[
					$author$project$Main$icon(name)
				]));
	});
var $author$project$Main$chips = F3(
	function (m, it, ids) {
		return $elm$core$List$isEmpty(ids) ? $elm$html$Html$text('') : A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('chips')
				]),
			A2(
				$elm$core$List$map,
				function (c) {
					return A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('comp-chip'),
								$elm$html$Html$Events$onClick(
								$author$project$Main$Nav(
									$author$project$Main$ItemPage(c.aZ)))
							]),
						_List_fromArray(
							[
								A2($author$project$Main$chipGlyph, m, c),
								A3($author$project$Main$chipLabel, m, it, c)
							]));
				},
				A2(
					$elm$core$List$filterMap,
					$author$project$Corpus$get(m.d),
					ids)));
	});
var $author$project$Main$spelledOut = F2(
	function (m, it) {
		var parts = A2(
			$elm$core$List$filterMap,
			function (_v3) {
				var id = _v3.a;
				var role = _v3.b;
				return A2(
					$elm$core$Maybe$map,
					function (c) {
						return _Utils_Tuple2(c, role);
					},
					A2($author$project$Corpus$get, m.d, id));
			},
			A3(
				$elm$core$List$map2,
				$elm$core$Tuple$pair,
				it.bx,
				_Utils_ap(
					it.eU,
					A2(
						$elm$core$List$repeat,
						$elm$core$List$length(it.bx),
						'meaning'))));
		var meaning = A2(
			$elm$core$List$filterMap,
			function (_v2) {
				var c = _v2.a;
				var role = _v2.b;
				return (role === 'meaning') ? $elm$core$Maybe$Just('**' + (c.cR + '**')) : $elm$core$Maybe$Nothing;
			},
			parts);
		var endings = A2(
			$elm$core$List$filterMap,
			function (_v1) {
				var c = _v1.a;
				var role = _v1.b;
				return (role === 'meaning') ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(c.cu + (', ' + c.cR));
			},
			parts);
		var withEndings = function () {
			if (!endings.b) {
				return '';
			} else {
				return ', with ' + (A2($elm$core$String$join, ' and ', endings) + ' on the end');
			}
		}();
		return ((it.b3 === 4) && (!$elm$core$List$isEmpty(meaning))) ? $author$project$Story$view(
			'The characters spell it out: ' + (A2($elm$core$String$join, ' + ', meaning) + (withEndings + '.'))) : $elm$html$Html$text('');
	});
var $author$project$Main$viewDetails = F2(
	function (m, it) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('details')
				]),
			_List_fromArray(
				[
					function () {
					var _v0 = _Utils_Tuple2(
						m.B,
						A2($author$project$Main$storyFor, m, it));
					if (!_v0.a.$) {
						var st = _v0.b;
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('story-editor')
								]),
							A3(
								$author$project$Main$storyEditor,
								m,
								it,
								A2($elm$core$Maybe$withDefault, '', st)));
					} else {
						if (!_v0.b.$) {
							var _v1 = _v0.a;
							var st = _v0.b.a;
							return $author$project$Story$view(st);
						} else {
							var _v2 = _v0.a;
							var _v3 = _v0.b;
							return A2($author$project$Main$spelledOut, m, it);
						}
					}
				}(),
					function () {
					if ((it.b3 === 3) && (!it.e$)) {
						var _v4 = A2(
							$elm$core$Maybe$andThen,
							function (e) {
								return A2($author$project$Corpus$get, m.d, e.cm);
							},
							$elm$core$List$head(it.d8));
						if (!_v4.$) {
							var w = _v4.a;
							return A2(
								$elm$html$Html$p,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('intro-word')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										'Introduced with ' + (w.cm + (' ' + ($author$project$Pinyin$joinMarks(w.da) + (': ' + w.cR)))))
									]));
						} else {
							return $elm$html$Html$text('');
						}
					} else {
						return $elm$html$Html$text('');
					}
				}(),
					function () {
					var _v5 = A2($author$project$Main$primaryReading, m, it);
					if (!_v5.$) {
						var pr = _v5.a;
						return A2($author$project$Main$primaryChip, m, pr);
					} else {
						return A3(
							$author$project$Main$chips,
							m,
							it,
							(it.b3 === 4) ? it.bx : it.dW);
					}
				}(),
					A2($author$project$Main$soundNote, m, it),
					function () {
					var _v6 = A2($elm$core$Dict$get, it.aZ, m.a.a1);
					if (!_v6.$) {
						var note = _v6.a;
						return A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('user-note')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(note)
								]));
					} else {
						return $elm$html$Html$text('');
					}
				}(),
					$author$project$Main$viewOtherMeanings(it)
				]));
	});
var $author$project$Main$viewPresentation = F3(
	function (m, sess, it) {
		var n = $elm$core$List$length(sess.b2);
		var i = A2($elm$core$Maybe$withDefault, 0, sess.X);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('session present')
				]),
			_List_fromArray(
				[
					A2(
					$author$project$Main$sessionHead,
					sess,
					$elm$core$String$fromInt(i + 1) + (' / ' + $elm$core$String$fromInt(n))),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('present-top')
						]),
					_List_fromArray(
						[
							A2($author$project$Main$viewGlyphBig, m, it),
							A3($author$project$Main$viewReading, m, it, true),
							(!it.b3) ? $elm$html$Html$text('') : $author$project$Main$viewKeyword(it)
						])),
					A2($author$project$Main$viewCanonical, m, it),
					A2($author$project$Main$viewDetails, m, it),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('bottom-actions nav-bar')
						]),
					_List_fromArray(
						[
							A4($author$project$Main$toolButton, 'back', 'Back', $author$project$Main$PresentPrev, i > 0),
							A4(
							$author$project$Main$toolButton,
							'flag',
							'Report a problem with this card',
							$author$project$Main$ReportOpen(it.aZ),
							true),
							A2(
							$elm$html$Html$button,
							_Utils_ap(
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('tool tool-next'),
										$elm$html$Html$Attributes$type_('button'),
										$elm$html$Html$Attributes$title(
										(_Utils_cmp(i + 1, n) > -1) ? 'Start the quiz' : 'Next'),
										A2(
										$elm$html$Html$Attributes$attribute,
										'aria-label',
										(_Utils_cmp(i + 1, n) > -1) ? 'Start the quiz' : 'Next'),
										$elm$html$Html$Events$onClick($author$project$Main$PresentNext)
									]),
								(_Utils_cmp(i + 1, n) > -1) ? $author$project$Main$nextTypedAttr(m) : _List_Nil),
							_List_fromArray(
								[
									$author$project$Main$icon('next')
								]))
						]))
				]));
	});
var $author$project$Main$Choose = function (a) {
	return {$: 19, a: a};
};
var $author$project$Main$asIn = F2(
	function (m, it) {
		var _v0 = A2(
			$elm$core$Maybe$andThen,
			function (e) {
				return A2(
					$elm$core$Maybe$map,
					function (w) {
						return _Utils_Tuple2(w, e.dK);
					},
					A2($author$project$Corpus$get, m.d, e.cm));
			},
			$elm$core$List$head(it.d8));
		if (!_v0.$) {
			var _v1 = _v0.a;
			var w = _v1.a;
			var blankAt = _v1.b;
			return A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('draw-asin')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('asin-label')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('as in ')
							])),
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('exemplar')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('zh')
									]),
								A2(
									$elm$core$List$indexedMap,
									F2(
										function (i, ch) {
											return _Utils_eq(i, blankAt) ? A2(
												$elm$html$Html$span,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('blank')
													]),
												_List_Nil) : $elm$html$Html$text(
												$elm$core$String$fromChar(ch));
										}),
									$elm$core$String$toList(w.cm))),
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('py exemplar-py')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										$author$project$Pinyin$joinMarks(w.fi))
									]))
							])),
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('gloss-line')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(' · ' + w.cR)
							]))
					]));
		} else {
			return (it.b3 === 3) ? A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('draw-asin')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('py')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								$author$project$Pinyin$toMarks(it.c4))
							]))
					])) : $elm$html$Html$text('');
		}
	});
var $author$project$Main$choiceFace = F2(
	function (m, it) {
		var hash = A3(
			$elm$core$String$foldl,
			F2(
				function (ch, acc) {
					return A2(
						$elm$core$Basics$modBy,
						7919,
						(acc * 31) + $elm$core$Char$toCode(ch));
				}),
			0,
			it.aZ);
		var _v0 = A2($elm$core$Basics$modBy, 4, m.V + hash);
		switch (_v0) {
			case 0:
				return 'strokes';
			case 1:
				return 'sans';
			case 2:
				return 'serif';
			default:
				return 'kai';
		}
	});
var $author$project$Main$AddSynonym = {$: 25};
var $author$project$Main$Undo = {$: 24};
var $author$project$Main$quizTools = F3(
	function (m, it, withNext) {
		var canAddSynonym = function () {
			var _v0 = m.h;
			if (!_v0.$) {
				var o = _v0.a;
				var typed = $author$project$Answer$normalize(o.aQ);
				var room = _Utils_cmp(
					$elm$core$List$length(
						A2(
							$elm$core$Maybe$withDefault,
							_List_Nil,
							A2($elm$core$Dict$get, it.aZ, m.a.fj))),
					$author$project$Main$maxAnswers) < 0;
				var exact = A2(
					$elm$core$List$member,
					typed,
					A2(
						$elm$core$List$map,
						$author$project$Answer$normalize,
						A3($author$project$Study$accepted, m.d, m.a, it)));
				return (o.F.cB === 1) && ((typed !== '') && ((!exact) && (room && (_Utils_cmp(
					$elm$core$String$length(typed),
					$author$project$Main$maxAnswerLength) < 1))));
			} else {
				return false;
			}
		}();
		var answered = !_Utils_eq(m.h, $elm$core$Maybe$Nothing);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('quiz-tools')
				]),
			_Utils_ap(
				_List_fromArray(
					[
						A4(
						$author$project$Main$toolButton,
						'play',
						'Play it again',
						$author$project$Main$Play(it),
						answered && ((!_Utils_eq(it.dH, $elm$core$Maybe$Nothing)) && (_Utils_eq(
							A2(
								$elm$core$Maybe$map,
								function (o) {
									return !o.F.cB;
								},
								m.h),
							$elm$core$Maybe$Just(true)) || (!A2($author$project$Main$pinyinPending, m, it.aZ))))),
						A4($author$project$Main$toolButton, 'undo', 'Undo: I fat-fingered it', $author$project$Main$Undo, answered),
						A4($author$project$Main$toolButton, 'add', 'Accept my answer as a synonym', $author$project$Main$AddSynonym, canAddSynonym),
						A4(
						$author$project$Main$toolButton,
						'info',
						'Open the item page',
						$author$project$Main$Nav(
							$author$project$Main$ItemPage(it.aZ)),
						answered),
						A4(
						$author$project$Main$toolButton,
						'flag',
						'Report a problem with this card',
						$author$project$Main$ReportOpen(it.aZ),
						true)
					]),
				withNext ? _List_fromArray(
					[
						A2(
						$elm$html$Html$button,
						_Utils_ap(
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('tool tool-next'),
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Attributes$disabled(!answered),
									$elm$html$Html$Attributes$title('Continue'),
									A2($elm$html$Html$Attributes$attribute, 'aria-label', 'Continue'),
									A2(
									$elm$html$Html$Events$preventDefaultOn,
									'pointerdown',
									$elm$json$Json$Decode$succeed(
										_Utils_Tuple2($author$project$Main$NoOp, true))),
									$elm$html$Html$Events$onClick($author$project$Main$Next)
								]),
							$author$project$Main$nextTypedAttr(m)),
						_List_fromArray(
							[
								$author$project$Main$icon('next')
							]))
					]) : _List_Nil));
	});
var $author$project$Main$readingText = function (it) {
	return (it.b3 === 4) ? $author$project$Pinyin$joinMarks(it.fi) : $author$project$Pinyin$toMarks(it.c4);
};
var $author$project$Main$expected = F3(
	function (m, it, f) {
		switch (f) {
			case 0:
				return _List_fromArray(
					[
						$elm$html$Html$text(
						$author$project$Pinyin$toMarks(it.c4) + (' · ' + it.cR))
					]);
			case 1:
				return A2(
					$elm$core$List$cons,
					$elm$html$Html$text(it.cR),
					(it.b3 === 4) ? _List_fromArray(
						[
							$elm$html$Html$text('  '),
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Events$onClick($author$project$Main$ToggleCitation)
								]),
							A2($author$project$Main$wordPinyin, m.ag, it))
						]) : ((it.b3 === 3) ? _List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('muted')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									'  ' + $author$project$Main$readingText(it))
								]))
						]) : _List_Nil));
			case 4:
				return _List_fromArray(
					[
						$elm$html$Html$text(
						(it.fw === 'ø') ? 'no initial (ø)' : $author$project$Pinyin$soundDisplay(it.fw))
					]);
			default:
				return _List_fromArray(
					[
						$elm$html$Html$text(
						$author$project$Corpus$glyphText(it) + (' · ' + it.cR))
					]);
		}
	});
var $author$project$Main$viewOutcome = F2(
	function (m, it) {
		var _v0 = m.h;
		if (_v0.$ === 1) {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('feedback')
					]),
				_List_Nil);
		} else {
			var o = _v0.a;
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('feedback')
					]),
				_List_fromArray(
					[
						(o.c$ !== '') ? A2(
						$elm$html$Html$p,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('note')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(o.c$)
							])) : $elm$html$Html$text(''),
						(!o.q) ? A2(
						$elm$html$Html$p,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('expected')
							]),
						A3($author$project$Main$expected, m, it, o.F.cB)) : (((it.b3 === 4) && (o.F.cB === 1)) ? A2(
						$elm$html$Html$p,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('expected')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[
										$elm$html$Html$Events$onClick($author$project$Main$ToggleCitation)
									]),
								A2($author$project$Main$wordPinyin, m.ag, it))
							])) : $elm$html$Html$text(''))
					]));
		}
	});
var $author$project$Main$viewChoice = F3(
	function (m, it, key) {
		var opts = A2($author$project$Study$choiceOptions, it, m.V);
		var face = A2($author$project$Main$choiceFace, m, it);
		var viewOpt = function (o) {
			return (face === 'strokes') ? A3($author$project$Glyph$viewText, m.d, '', o) : A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('choice-text face-' + face),
						A2(
						$elm$html$Html$Attributes$attribute,
						'style',
						'--n:' + $elm$core$String$fromInt(
							A2(
								$elm$core$Basics$max,
								1,
								$elm$core$String$length(o))))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(o)
					]));
		};
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('choice-card')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('prompt')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('facet-label')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									A2($author$project$Main$facetLabel, it, key.cB))
								])),
							A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('choice-keyword')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(it.cR)
								])),
							((it.b3 === 3) && (!$elm$core$List$isEmpty(it.d8))) ? A2($author$project$Main$asIn, m, it) : A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('hint')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Main$readingText(it))
								]))
						])),
					A2($author$project$Main$viewOutcome, m, it),
					A3($author$project$Main$quizTools, m, it, true),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('choices')
						]),
					A2(
						$elm$core$List$map,
						function (o) {
							var state = function () {
								var _v0 = m.h;
								if (!_v0.$) {
									var out = _v0.a;
									return _Utils_eq(
										o,
										$author$project$Corpus$glyphText(it)) ? ' correct' : (_Utils_eq(o, out.aQ) ? ' chosen' : '');
								} else {
									return '';
								}
							}();
							return A2(
								$elm$html$Html$button,
								_Utils_ap(
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('choice' + state),
											$elm$html$Html$Events$onClick(
											(!_Utils_eq(m.h, $elm$core$Maybe$Nothing)) ? $author$project$Main$Next : $author$project$Main$Choose(o)),
											A2($elm$html$Html$Attributes$attribute, 'data-opt', o)
										]),
									(!_Utils_eq(m.h, $elm$core$Maybe$Nothing)) ? $author$project$Main$nextTypedAttr(m) : _List_Nil),
								_List_fromArray(
									[
										viewOpt(o)
									]));
						},
						opts))
				]));
	});
var $author$project$Srs$flubAllowance = function (hint) {
	switch (hint) {
		case 3:
			return 5;
		case 2:
			return 4;
		case 1:
			return 3;
		default:
			return 2;
	}
};
var $author$project$Main$viewTypefaces = F2(
	function (m, it) {
		var t = $author$project$Corpus$glyphText(it);
		var face = F2(
			function (cls, label) {
				return A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('face-glyph ' + cls),
							$elm$html$Html$Attributes$title(label)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(t)
						]));
			});
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('typefaces')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('face-glyph face-strokes'),
							$elm$html$Html$Attributes$title('strokes')
						]),
					_List_fromArray(
						[
							A3($author$project$Glyph$viewItem, m.d, '', it)
						])),
					A2(face, 'face-sans', 'sans'),
					A2(face, 'face-serif', 'serif'),
					A2(face, 'face-kai', 'kai')
				]));
	});
var $author$project$Main$DrawDone = F2(
	function (a, b) {
		return {$: 20, a: a, b: b};
	});
var $author$project$Main$StrokeMistake = function (a) {
	return {$: 21, a: a};
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlJson(value));
	});
var $elm$html$Html$Attributes$property = $elm$virtual_dom$VirtualDom$property;
var $author$project$Main$writingCanvas = F5(
	function (m, it, key, hint, verdict) {
		var _v0 = A2(
			$elm$core$Maybe$andThen,
			function (k) {
				return A2($elm$core$Dict$get, k, m.d.cH);
			},
			it.ef);
		if (!_v0.$) {
			var g = _v0.a;
			return A3(
				$elm$html$Html$Keyed$node,
				'div',
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('canvas-wrap' + verdict)
					]),
				_List_fromArray(
					[
						_Utils_Tuple2(
						key + ('#' + $elm$core$String$fromInt(m.V)),
						A3(
							$elm$html$Html$node,
							'writing-canvas',
							_List_fromArray(
								[
									A2(
									$elm$html$Html$Attributes$property,
									'character',
									$elm$json$Json$Encode$object(
										_List_fromArray(
											[
												_Utils_Tuple2(
												'char',
												$elm$json$Json$Encode$string(
													$author$project$Corpus$glyphText(it))),
												_Utils_Tuple2(
												'strokes',
												A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, g.d_)),
												_Utils_Tuple2(
												'medians',
												A2(
													$elm$json$Json$Encode$list,
													$elm$json$Json$Encode$list(
														function (_v1) {
															var x = _v1.a;
															var y = _v1.b;
															return A2(
																$elm$json$Json$Encode$list,
																$elm$json$Json$Encode$int,
																_List_fromArray(
																	[x, y]));
														}),
													g.ex))
											]))),
									A2(
									$elm$html$Html$Attributes$property,
									'hintLevel',
									$elm$json$Json$Encode$int(hint)),
									A2(
									$elm$html$Html$Attributes$property,
									'flubAllowance',
									$elm$json$Json$Encode$int(
										$author$project$Srs$flubAllowance(hint))),
									A2(
									$elm$html$Html$Attributes$property,
									'leniency',
									$elm$json$Json$Encode$float(m.a.N.ch)),
									A2(
									$elm$html$Html$Events$on,
									'quiz-complete',
									A3(
										$elm$json$Json$Decode$map2,
										$author$project$Main$DrawDone,
										A2(
											$elm$json$Json$Decode$at,
											_List_fromArray(
												['detail', 'passed']),
											$elm$json$Json$Decode$bool),
										A2(
											$elm$json$Json$Decode$at,
											_List_fromArray(
												['detail', 'totalMistakes']),
											$elm$json$Json$Decode$int))),
									A2(
									$elm$html$Html$Events$on,
									'stroke-mistake',
									A2(
										$elm$json$Json$Decode$map,
										$author$project$Main$StrokeMistake,
										A2(
											$elm$json$Json$Decode$at,
											_List_fromArray(
												['detail', 'totalMistakes']),
											$elm$json$Json$Decode$int)))
								]),
							_List_Nil))
					]));
		} else {
			return $elm$html$Html$text('');
		}
	});
var $author$project$Main$viewDraw = F3(
	function (m, it, key) {
		var verdict = function () {
			var _v3 = m.h;
			if (!_v3.$) {
				var o = _v3.a;
				return o.q ? ' pass' : ' fail';
			} else {
				return '';
			}
		}();
		var hintAt = function (st) {
			var _v2 = A2($author$project$Study$cardFor, st, key);
			if (!_v2.$) {
				var c = _v2.a;
				return A2($elm$core$Basics$max, 0, c.bC);
			} else {
				return 3;
			}
		};
		var hint = function () {
			var _v1 = m.U;
			if (!_v1.$) {
				var prev = _v1.a;
				return hintAt(prev);
			} else {
				return hintAt(m.a);
			}
		}();
		var allowance = $author$project$Srs$flubAllowance(hint);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('draw-card')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('prompt')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('choice-keyword')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(it.cR)
								])),
							A2($author$project$Main$asIn, m, it)
						])),
					A2(
					$elm$html$Html$div,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$Attributes$class('canvas-tap'),
						(!_Utils_eq(m.h, $elm$core$Maybe$Nothing)) ? A2(
							$elm$core$List$cons,
							$elm$html$Html$Events$onClick($author$project$Main$Next),
							$author$project$Main$nextTypedAttr(m)) : _List_Nil),
					_List_fromArray(
						[
							A5(
							$author$project$Main$writingCanvas,
							m,
							it,
							$author$project$State$keyOf(key),
							hint,
							verdict)
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('flubs'),
							A2(
							$elm$html$Html$Attributes$attribute,
							'aria-label',
							$elm$core$String$fromInt(m.aa) + (' of ' + ($elm$core$String$fromInt(allowance) + ' mistakes')))
						]),
					A2(
						$elm$core$List$map,
						function (i) {
							return A2(
								$elm$html$Html$span,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class(
										(_Utils_cmp(i, m.aa) < 0) ? 'flub used' : 'flub')
									]),
								_List_Nil);
						},
						A2($elm$core$List$range, 0, allowance - 1))),
					A3($author$project$Main$quizTools, m, it, true),
					function () {
					var _v0 = m.h;
					if (!_v0.$) {
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('after-draw')
								]),
							_List_fromArray(
								[
									A2($author$project$Main$viewTypefaces, m, it)
								]));
					} else {
						return $elm$html$Html$text('');
					}
				}()
				]));
	});
var $author$project$Main$Input = function (a) {
	return {$: 16, a: a};
};
var $author$project$Main$Submit = {$: 17};
var $author$project$Main$otherReadingChars = function (m) {
	return A3(
		$elm$core$Dict$foldl,
		F3(
			function (_v0, o, acc) {
				return ((o.b3 === 3) && (!o.e$)) ? A3($elm$core$Dict$insert, o.cu, 0, acc) : acc;
			}),
		$elm$core$Dict$empty,
		m.d.b2);
};
var $author$project$Main$hasOtherReadings = F2(
	function (m, it) {
		return A2(
			$elm$core$Dict$member,
			it.cu,
			$author$project$Main$otherReadingChars(m));
	});
var $author$project$Main$promptHint = F3(
	function (m, it, f) {
		var polyphonic = (it.b3 === 3) && ((!it.e$) || A2($author$project$Main$hasOtherReadings, m, it));
		var _v0 = _Utils_Tuple2(it.b3, f);
		_v0$3:
		while (true) {
			switch (_v0.a) {
				case 3:
					switch (_v0.b) {
						case 0:
							var _v1 = _v0.a;
							var _v2 = _v0.b;
							if (polyphonic) {
								var _v3 = $elm$core$List$head(it.d8);
								if (!_v3.$) {
									var ex = _v3.a;
									var _v4 = A2($author$project$Corpus$get, m.d, ex.cm);
									if (!_v4.$) {
										var w = _v4.a;
										return A2(
											$elm$html$Html$p,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('hint')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('as in ' + w.cm)
												]));
									} else {
										return $elm$html$Html$text('');
									}
								} else {
									return $elm$html$Html$text('');
								}
							} else {
								return $elm$html$Html$text('');
							}
						case 1:
							var _v5 = _v0.a;
							var _v6 = _v0.b;
							return polyphonic ? A2(
								$elm$html$Html$p,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('hint')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										'read ' + $author$project$Pinyin$toMarks(it.c4))
									])) : $elm$html$Html$text('');
						default:
							break _v0$3;
					}
				case 0:
					var _v7 = _v0.a;
					return A2(
						$elm$html$Html$p,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('hint')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(it.c$)
							]));
				default:
					break _v0$3;
			}
		}
		return $elm$html$Html$text('');
	});
var $author$project$Main$viewTyped = F3(
	function (m, it, key) {
		var placeholder = function () {
			var _v2 = key.cB;
			switch (_v2) {
				case 0:
					return 'pinyin, e.g. hao3';
				case 1:
					return 'meaning';
				default:
					return 'answer';
			}
		}();
		var cls = function () {
			var _v1 = m.h;
			if (!_v1.$) {
				var o = _v1.a;
				return o.q ? 'answer good' : 'answer bad';
			} else {
				return 'answer';
			}
		}();
		return A3(
			$elm$html$Html$Keyed$node,
			'div',
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('card-top')
				]),
			_List_fromArray(
				[
					_Utils_Tuple2(
					'prompt-' + key.aZ,
					A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('prompt')
							]),
						_List_fromArray(
							[
								(!it.b3) ? A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('sound-big small')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$span,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('sound-name')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text(it.cR)
											]))
									])) : A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('glyph-quiz')
									]),
								_List_fromArray(
									[
										A3($author$project$Glyph$viewItem, m.d, '', it)
									])),
								A2(
								$elm$html$Html$p,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('facet-label')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										A2($author$project$Main$facetLabel, it, key.cB))
									])),
								A3($author$project$Main$promptHint, m, it, key.cB)
							]))),
					_Utils_Tuple2(
					'answer',
					A2(
						$elm$html$Html$form,
						_List_fromArray(
							[
								$elm$html$Html$Events$onSubmit($author$project$Main$Submit),
								$elm$html$Html$Attributes$class('answer-form')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('answer-box')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$input,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$id('answer'),
												$elm$html$Html$Attributes$class(cls),
												$elm$html$Html$Attributes$value(m.w),
												$elm$html$Html$Events$onInput($author$project$Main$Input),
												$elm$html$Html$Attributes$placeholder(placeholder),
												A2($elm$html$Html$Attributes$attribute, 'autocorrect', 'off'),
												A2($elm$html$Html$Attributes$attribute, 'autocapitalize', 'off'),
												A2($elm$html$Html$Attributes$attribute, 'spellcheck', 'false'),
												A2($elm$html$Html$Attributes$attribute, 'autocomplete', 'off'),
												A2($elm$html$Html$Attributes$attribute, 'enterkeyhint', 'go')
											]),
										_List_Nil),
										A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('answer-go'),
												$elm$html$Html$Attributes$type_('submit'),
												$elm$html$Html$Attributes$disabled(
												_Utils_eq(m.h, $elm$core$Maybe$Nothing) && ($elm$core$String$trim(m.w) === '')),
												A2(
												$elm$html$Html$Attributes$attribute,
												'aria-label',
												_Utils_eq(m.h, $elm$core$Maybe$Nothing) ? 'Check' : 'Continue'),
												A2(
												$elm$html$Html$Events$preventDefaultOn,
												'pointerdown',
												$elm$json$Json$Decode$succeed(
													_Utils_Tuple2($author$project$Main$NoOp, true)))
											]),
										_List_fromArray(
											[
												$author$project$Main$icon('next')
											]))
									])),
								A2(
								$elm$html$Html$p,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('preview')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										((!key.cB) && _Utils_eq(m.h, $elm$core$Maybe$Nothing)) ? $author$project$Main$previewMarks(m.w) : '')
									]))
							]))),
					_Utils_Tuple2(
					'tools',
					A3($author$project$Main$quizTools, m, it, false)),
					_Utils_Tuple2(
					'nudge',
					function () {
						var _v0 = m.a2;
						if (!_v0.$) {
							var n = _v0.a;
							return A2(
								$elm$html$Html$p,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('nudge')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(n)
									]));
						} else {
							return $elm$html$Html$text('');
						}
					}()),
					_Utils_Tuple2(
					'feedback',
					A2($author$project$Main$viewOutcome, m, it))
				]));
	});
var $author$project$Main$viewQuiz = F3(
	function (m, sess, key) {
		var _v0 = A2($author$project$Corpus$get, m.d, key.aZ);
		if (_v0.$ === 1) {
			return A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Events$onClick($author$project$Main$Next)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Skip')
					]));
		} else {
			var it = _v0.a;
			var typed = (!key.cB) || ((key.cB === 1) || (key.cB === 4));
			var remaining = A3(
				$elm$core$Dict$foldl,
				F3(
					function (_v1, n, acc) {
						return acc + A2($elm$core$Basics$max, 0, n);
					}),
				0,
				sess.b4);
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('session quiz')
					]),
				_List_fromArray(
					[
						A2(
						$author$project$Main$sessionHead,
						sess,
						$elm$core$String$fromInt(remaining) + ' to go'),
						typed ? A3($author$project$Main$viewTyped, m, it, key) : ((key.cB === 3) ? A3($author$project$Main$viewChoice, m, it, key) : A3($author$project$Main$viewDraw, m, it, key))
					]));
		}
	});
var $author$project$Main$viewStudy = function (m) {
	var _v0 = m.a.x;
	if (_v0.$ === 1) {
		return $author$project$Main$viewHome(m);
	} else {
		var sess = _v0.a;
		var _v1 = $author$project$Main$presentingItem(m);
		if (!_v1.$) {
			var it = _v1.a;
			return A3($author$project$Main$viewPresentation, m, sess, it);
		} else {
			var _v2 = _Utils_Tuple2(
				m.h,
				$author$project$Main$currentFacet(m));
			if (!_v2.a.$) {
				var o = _v2.a.a;
				return A3($author$project$Main$viewQuiz, m, sess, o.F);
			} else {
				if (!_v2.b.$) {
					var _v3 = _v2.a;
					var key = _v2.b.a;
					return A3($author$project$Main$viewQuiz, m, sess, key);
				} else {
					var _v4 = _v2.a;
					var _v5 = _v2.b;
					return A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('summary')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('primary'),
										$elm$html$Html$Events$onClick($author$project$Main$Next)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Finish')
									]))
							]));
				}
			}
		}
	}
};
var $author$project$Main$viewSummary = function (sm) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('summary')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$h2,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text(
						sm.aj ? 'Lesson done' : 'Reviews done')
					])),
				A2(
				$elm$html$Html$p,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text(
						_Utils_ap(
							$elm$core$String$fromInt(sm.aE),
							sm.aj ? ' items learned.' : ' items reviewed.'))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('bottom-actions')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('primary'),
								$elm$html$Html$Events$onClick(
								$author$project$Main$Nav($author$project$Main$Home))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Home')
							]))
					]))
			]));
};
var $author$project$Main$view = function (model) {
	if (!model.$) {
		var e = model.a;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('fatal')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$h1,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('楼梯 Louti')
						])),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(e)
						]))
				]));
	} else {
		var m = model.a;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('app')
				]),
			_List_fromArray(
				[
					$author$project$Main$nav(m),
					function () {
					var _v1 = m.s;
					switch (_v1.$) {
						case 0:
							return $author$project$Main$viewHome(m);
						case 1:
							return $author$project$Main$viewStudy(m);
						case 2:
							var id = _v1.a;
							var _v2 = A2($author$project$Corpus$get, m.d, id);
							if (!_v2.$) {
								var it = _v2.a;
								return A2($author$project$Main$viewItem, m, it);
							} else {
								return $author$project$Main$viewHome(m);
							}
						case 3:
							return $author$project$Main$viewBrowse(m);
						case 4:
							return $author$project$Main$viewProgress(m);
						case 5:
							return $author$project$Main$viewSettings(m);
						case 6:
							return $author$project$Main$viewData(m);
						case 7:
							return $author$project$Main$viewAbout(m);
						case 8:
							var n = _v1.a;
							return A2($author$project$Main$viewIntro, m, n);
						default:
							var sm = _v1.a;
							return $author$project$Main$viewSummary(sm);
					}
				}(),
					$author$project$Main$viewReportSheet(m)
				]));
	}
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{ep: $author$project$Main$init, fh: $author$project$Main$subscriptions, fv: $author$project$Main$update, fx: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (tzOffset) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (saved) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (now) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (iosBrowser) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (data) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (backup) {
													return $elm$json$Json$Decode$succeed(
														{_: backup, bU: data, b1: iosBrowser, l: now, cd: saved, bP: tzOffset});
												},
												A2(
													$elm$json$Json$Decode$field,
													'backup',
													$elm$json$Json$Decode$oneOf(
														_List_fromArray(
															[
																$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
																A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$string)
															]))));
										},
										A2($elm$json$Json$Decode$field, 'data', $elm$json$Json$Decode$value));
								},
								A2($elm$json$Json$Decode$field, 'iosBrowser', $elm$json$Json$Decode$bool));
						},
						A2($elm$json$Json$Decode$field, 'now', $elm$json$Json$Decode$int));
				},
				A2(
					$elm$json$Json$Decode$field,
					'saved',
					$elm$json$Json$Decode$oneOf(
						_List_fromArray(
							[
								$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
								A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$string)
							]))));
		},
		A2($elm$json$Json$Decode$field, 'tzOffset', $elm$json$Json$Decode$int)))(0)}});}(this));