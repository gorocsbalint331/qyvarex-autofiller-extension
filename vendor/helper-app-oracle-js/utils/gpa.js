/**
 * Parcel module id: l4T7j
 * Resolved path: utils/gpa.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  let t = Array.isArray(e) ? e.find(Boolean) : e,
    r = String(t ?? "").trim();
  if (!r) return "";
  let n = r.match(/^(\d+(?:\.\d+)?)\s*\/\s*\d+(?:\.\d+)?$/);
  if (n) return n[1];
  let o = r.match(/^(\d+(?:\.\d+)?)$/);
  return o ? o[1] : r
}
n.defineInteropFlag(r), n.export(r, "normalizeGpaValue", () => o)

