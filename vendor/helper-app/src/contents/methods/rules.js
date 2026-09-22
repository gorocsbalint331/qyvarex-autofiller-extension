/**
 * Parcel module id: 3cWKC
 * Resolved path: src/contents/methods/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
  *
 * Deobfuscated (pretty + export/import rename). Parcel e()/r preserved.
 */

var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");
helpers.defineInteropFlag(r), helpers.export(r, "filterRulesByLabel", () => filterRulesByLabel);
let o = e => e.replace(/[^a-zA-Z]/g, "").toLowerCase();
function filterRulesByLabel(e, t) {
  let r = new Set(t.map(o));
  return e.filter(e => !r.has(o(e.label)));
}
