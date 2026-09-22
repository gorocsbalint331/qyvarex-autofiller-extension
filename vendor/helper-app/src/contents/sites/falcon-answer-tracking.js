/**
 * Parcel module id: 2vI9E
 * Resolved path: src/contents/sites/falcon-answer-tracking.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

let n;
var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
o.defineInteropFlag(r), o.export(r, "beginFalconResponseAnswerRequest", () => l), o.export(r,
    "hasCurrentFalconResponseAnswer", () => s), o.export(r, "markFalconResponseAnswer", () => u), o
  .export(r, "isFalconResponseAnswer", () => f), o.export(r, "isCurrentFalconResponseAnswer", () =>
    p), o.export(r, "inheritFalconResponseAnswerMarker", () => m);
let i = Symbol.for("jobright.falcon-response-answer"),
  a = 0;

function l() {
  return a += 1, n = void 0, a
}

function s() {
  return n === a
}

function u(e, t = a) {
  return t !== a || (n = t, c(e, t)), e
}

function c(e, t) {
  Object.defineProperty(e, i, {
    configurable: !0,
    enumerable: !0,
    value: t
  })
}

function d(e) {
  if (!e || "object" != typeof e) return;
  let t = e[i];
  return "number" == typeof t ? t : void 0
}

function f(e) {
  return void 0 !== d(e)
}

function p(e) {
  return s() && d(e) === a
}

function m(e, ...t) {
  let r = t.map(d).filter(e => void 0 !== e),
    n = r.find(e => e === a) ?? r[0];
  return void 0 !== n && c(e, n), e
}

