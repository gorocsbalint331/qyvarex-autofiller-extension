/**
 * Parcel module id: gw4pD
 * Resolved path: store/autofill-storage.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/storage -> 9RCRe  =>  @plasmohq/storage.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "createAutofillSnapshotStorage", () => i);
var o = e("@plasmohq/storage");
let i = () => new o.Storage({
  area: "local"
})

