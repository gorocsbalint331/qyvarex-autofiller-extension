/**
 * Parcel module id: 92ViD
 * Resolved path: src/contents/sites/jobvite/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "formatAnswer", () => c), n.export(r, "formatDate", () => d);
var o = e("dayjs"),
  i = n.interopDefault(o);

function a(e) {
  return Array.isArray(e) ? String(e[0] ?? "").trim() : String(e ?? "").trim()
}

function l(e) {
  let t = a(e).toLowerCase();
  return t ? "canada" === t || "ca" === t ? "Canada" : "uk" === t || "united kingdom" === t ?
    "United Kingdom" : "us" === t || "usa" === t || "united states" === t ||
    "united states of america" === t ? "United States" : a(e) : ""
}

function s(e) {
  let t = a(e);
  return t ? t.split(",")[0]?.trim() || t : ""
}

function u(e, t) {
  let r = a(e);
  if (!r) return "";
  let n = r.split(",").map(e => e.trim()).filter(Boolean);
  if (n.length < 4 || !t) return r;
  let o = n.findIndex(e => e.toLowerCase() === t.toLowerCase());
  return o > 0 ? n.slice(0, o).join(", ") : r
}

function c(e) {
  let t = e.regular || {},
    r = Object.keys(t).some(e => /^country$/i.test(e)),
    n = l(t.Country) || l(t.country) || l(e.country) || (r ? "United States" : "");
  if (r && n) {
    for (let e of Object.keys(t)) /^country$/i.test(e) && delete t[e];
    t.Country = [n]
  }
  let o = s(t.City);
  o && (t.City = o);
  let a = u(t.Address, o);
  return a && (t.Address = a), t.Date = (0, i.default)().format("YYYY-MM-DD"), e.regular = t, e
}

function d(e) {
  return (0, i.default)(e).format("YYYY-MM-DD")
}

