/**
 * Parcel module id: lDfqE
 * Resolved path: src/contents/shared/helper-host-stacking.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "HELPER_HOST_Z_INDEX", () => o), n.export(r,
  "applyHelperHostStackingStyle", () => i);
let o = 2147483647;

function i(e) {
  e.style.setProperty("position", "relative", "important"), e.style.setProperty("z-index", String(
    o), "important")
}

