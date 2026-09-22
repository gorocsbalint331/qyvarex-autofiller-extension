/**
 * Parcel module id: 5bGe0
 * Resolved path: src/utils/autofill-answer-pair.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "filterAutofillAnswerPairNormalSnapshot", () => c), n.export(r,
  "sanitizeAutofillAnswerPairPayload", () => p);
let o = new Set(["education", "employment", "experience"]);

function i(e) {
  return !!e && "object" == typeof e && !Array.isArray(e)
}

function a(e) {
  return Object.fromEntries(Object.entries(e).filter(([, e]) => void 0 !== e))
}

function l(e) {
  return Array.isArray(e) ? e.map(l) : i(e) ? Object.fromEntries(Object.entries(a(e)).map(([e,
    t]) => [e, "normal" === e ? c(t) : l(t)])) : e
}

function s(e, t = "") {
  return "string" == typeof e ? e.trim() : "number" == typeof e || "boolean" == typeof e ||
    "bigint" == typeof e ? String(e) : t
}

function u(e) {
  return s(e, "unknown") || "unknown"
}

function c(e) {
  return i(e) ? Object.fromEntries(Object.entries(e).filter(([, e]) => "string" == typeof e)) : {}
}

function d(e) {
  return Array.isArray(e) ? e.filter(i).map(a) : []
}

function f(e) {
  let t = i(e) ? e : {},
    {
      normal: r,
      ...n
    } = t,
    l = Object.fromEntries(Object.entries(a(n)).map(([e, t]) => [e, o.has(e) ? d(t) : t]));
  return {
    normal: c(r),
    ...l
  }
}

function p(e) {
  let t = i(e) ? e : {},
    {
      formUrl: r,
      autofill: n,
      submit: o,
      source: a,
      ...c
    } = t;
  return {
    ...l(c),
    formUrl: s(r),
    autofill: f(n),
    submit: f(o),
    source: u(a)
  }
}

