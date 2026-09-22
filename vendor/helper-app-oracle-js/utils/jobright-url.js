/**
 * Parcel module id: 8dTkf
 * Resolved path: utils/jobright-url.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  let t = new URL("/", e);
  return t.searchParams.set("login", "1"), t.toString()
}
n.defineInteropFlag(r), n.export(r, "buildJobrightLoginUrl", () => o)

