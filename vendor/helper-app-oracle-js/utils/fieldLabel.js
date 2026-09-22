/**
 * Parcel module id: 1RmGw
 * Resolved path: utils/fieldLabel.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  return String(e ?? "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").replace(/\s*\/\s*/g, " / ")
    .replace(/\s*\*\s*/g, "").trim().toLowerCase()
}

function i(e, t = {}) {
  let r = o(e);
  return t.loose ? r.replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim() : r
}

function a(e = [], t = {}) {
  return new Set(e.map(e => i(e, t)))
}

function l(e) {
  return String(e ?? "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").replace(/(?:\s*\*)+\s*$/g, "")
    .trim()
}

function s(e, t, r = {}) {
  let n = i(e, r),
    o = i(t, r);
  return !!n && n === o
}

function u(e) {
  return i(e, {
    loose: !0
  }).replace(/\s/g, "")
}
n.defineInteropFlag(r), n.export(r, "normalizeFieldLabel", () => i), n.export(r,
    "buildNormalizedFieldLabelSet", () => a), n.export(r, "formatFieldLabelForDisplay", () => l), n
  .export(r, "isSameFieldLabel", () => s), n.export(r, "removeFieldLabelSpecialCharacters", () => u)

