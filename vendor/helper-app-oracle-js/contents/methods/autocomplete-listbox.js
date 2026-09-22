/**
 * Parcel module id: b2rO1
 * Resolved path: contents/methods/autocomplete-listbox.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
  *
 * Deobfuscated (pretty + export/import rename). Parcel e()/r preserved.
 */

var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");
function o(e) {
  return (e || "").replace(/\s+/g, " ").trim().toLowerCase();
}
function findAutocompleteListbox(e, t, r) {
  let _helpersLocal = e.getAttribute("aria-controls");
  if (_helpersLocal) {
    let e = t.getElementById(_helpersLocal);
    if (e?.isConnected && "listbox" === e.getAttribute("role")) return e;
  }
  if (!r) return null;
  let _findAutocompleteListboxLocal = o(e.getAttribute("aria-label") ?? "");
  if (!_findAutocompleteListboxLocal) return null;
  let a = Array.from(r.querySelectorAll('[role="listbox"]')).filter(e => e.isConnected && o(e.getAttribute("aria-label") ?? "") === _findAutocompleteListboxLocal);
  return 1 === a.length ? a[0] : null;
}
helpers.defineInteropFlag(r), helpers.export(r, "findAutocompleteListbox", () => findAutocompleteListbox);
