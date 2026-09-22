/**
 * Parcel module id: 2KQwH
 * Resolved path: src/contents/methods/checkbox-label.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
  *
 * Deobfuscated (pretty + export/import rename). Parcel e()/r preserved.
 */

var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");
function o(e) {
  let t = e;
  return (t?.innerText || t?.textContent || "").trim();
}
function i(e) {
  if (!e.id || "undefined" == typeof document) return null;
  let t = e.id.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  try {
    return document.querySelector(`label[for="${t}"]`);
  } catch {
    return null;
  }
}
function getRadioCheckText(e) {
  let t = e.parentElement ?? e.parentNode,
    r = t?.parentElement ?? e.parentNode?.parentNode,
    _helpersLocal = ["function" == typeof e.closest ? e.closest("label") : null, i(e), t, t?.nextElementSibling, t?.previousElementSibling, r];
  for (let e of _helpersLocal) {
    let t = o(e);
    if (t) return t;
  }
  return "";
}
function normalizeRadioCheckText(e) {
  return e.toLowerCase().trim().replace("*", "");
}
helpers.defineInteropFlag(r), helpers.export(r, "getRadioCheckText", () => getRadioCheckText), helpers.export(r, "normalizeRadioCheckText", () => normalizeRadioCheckText);
