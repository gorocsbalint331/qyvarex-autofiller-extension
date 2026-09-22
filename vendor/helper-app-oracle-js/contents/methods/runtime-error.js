/**
 * Parcel module id: cYBXq
 * Resolved path: contents/methods/runtime-error.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
  *
 * Deobfuscated (pretty + export/import rename). Parcel e()/r preserved.
 */

var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");
helpers.defineInteropFlag(r), helpers.export(r, "isExtensionContextInvalidatedError", () => isExtensionContextInvalidatedError);
let o = ["extension context invalidated", "message channel closed before a response was received", "the message port closed before a response was received", "receiving end does not exist"];
function i(e) {
  return e instanceof Error ? e.message : "string" == typeof e ? e : e && "object" == typeof e && "message" in e && "string" == typeof e.message ? e.message : "";
}
function isExtensionContextInvalidatedError(e) {
  let t = i(e).toLowerCase();
  return o.some(e => t.includes(e));
}
