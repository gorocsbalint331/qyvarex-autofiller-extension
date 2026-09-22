/**
 * Parcel module id: eEchw
 * Resolved path: src/utils/ab-test.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  if (!e || "object" != typeof e || !("config" in e)) return {};
  let t = e.config;
  return !t || "object" != typeof t || Array.isArray(t) ? {} : t
}
n.defineInteropFlag(r), n.export(r, "normalizeAbConfig", () => o)

