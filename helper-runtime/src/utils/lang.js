/**
 * Parcel module id: f5rbp
 * Resolved path: src/utils/lang.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  let t = Object.prototype.toString.call(e).match(/^\[object (.*)\]$/)[1].toLowerCase();
  return "string" === t && "object" == typeof e ? "object" : null === e ? "null" : void 0 === e ?
    "undefined" : t
}

function i(e) {
  return "string" === o(e)
}

function a(e) {
  return "object" === o(e)
}

function l(e) {
  return "array" === o(e)
}

function s(e) {
  return "function" === o(e)
}

function u(e) {
  return null == e || "" === e || (a(e) ? 0 === Object.keys(e).length : !!l(e) && 0 === e.length)
}

function c(e) {
  return null == e || (Array.isArray(e) ? e.every(e => c(e)) : "string" == typeof e && "" === e
    .trim())
}
n.defineInteropFlag(r), n.export(r, "isString", () => i), n.export(r, "isObject", () => a), n
  .export(r, "isArray", () => l), n.export(r, "isFunction", () => s), n.export(r, "isEmpty", () =>
    u), n.export(r, "isEmptyValue", () => c), n.export(r, "isNounEng", () => p);
let d = /[A-Za-z0-9\s\p{Punctuation}\p{Symbol}\u25CF\u2013\u2014\u2026\u02c6]/u,
  f = 90;

function p(e) {
  if (!e) return !1;
  let t = 0,
    r = e.length;
  if (0 === r) return !1;
  for (let n = 0; n < r; n++) {
    let r = e.charAt(n);
    d.test(r) && t++
  }
  let n = t / r * 100;
  return n < f
}

