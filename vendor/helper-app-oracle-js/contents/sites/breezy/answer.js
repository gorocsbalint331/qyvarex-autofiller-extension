/**
 * Parcel module id: 1Ai17
 * Resolved path: contents/sites/breezy/answer.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~contents/methods/cover-letter -> 7VR5i  =>  _tilde_contents/methods/cover-letter.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "formatCoverLetterAnswer", () => l), n.export(r,
  "formatCountryAnswer", () => p), n.export(r, "formatAnswer", () => m), n.export(r, "formatDate",
  () => h);
var o = e("dayjs"),
  i = n.interopDefault(o),
  a = e("~contents/methods/cover-letter");

function l(e, t) {
  return (0, a.applyCoverLetterTextToAnswer)(e, t, ["Cover Letter"])
}

function s(e) {
  return "country" === u(e)
}

function u(e) {
  return String(e ?? "").replace(/\u00a0/g, " ").trim().replace(/\s*\*+\s*$/, "").trim().replace(
    /\s+/g, " ").toLowerCase()
}

function c(e) {
  return u(e).includes("date")
}

function d(e) {
  if (null == e) return e;
  if (Array.isArray(e)) return e.map(d);
  if ("string" != typeof e && !(e instanceof Date) || "string" == typeof e && "" === e.trim())
    return e;
  let t = (0, i.default)(e);
  return t.isValid() ? t.format("YYYY-MM-DD") : e
}

function f(e) {
  if (Array.isArray(e)) return e.map(f);
  if (!e || "object" != typeof e || e instanceof Date) return e;
  let t = e,
    r = c(t.name);
  return Object.fromEntries(Object.entries(t).map(([e, t]) => r && "value" === e || c(e) ? [e, d(
    t)] : [e, f(t)]))
}

function p(e) {
  let t = String(e.country ?? "").trim();
  if (!t) return e;
  let r = !1,
    n = Object.fromEntries(Object.entries(e.regular ?? {}).map(([e, n]) => s(e) ? (r = !0, [e, t]) :
      [e, n])),
    o = e.fillDataList?.map(e => s(e?.name) ? (r = !0, {
      ...e,
      value: t
    }) : e);
  return r ? {
    ...e,
    regular: n,
    ...o ? {
      fillDataList: o
    } : {}
  } : e
}

function m(e, t) {
  return l(f(p(e)), t)
}

function h(e) {
  return (0, i.default)(e).format("YYYY-MM-DD")
}

