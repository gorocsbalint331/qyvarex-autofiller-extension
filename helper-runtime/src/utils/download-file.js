/**
 * Parcel module id: cmrQu
 * Resolved path: src/utils/download-file.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e, t) {
  if (!e) return;
  let r = document.createElement("a");
  r.href = e, r.download = t, r.rel = "noopener", document.body.appendChild(r), r.click(), document
    .body.removeChild(r)
}
n.defineInteropFlag(r), n.export(r, "downloadDataUrlFile", () => o)

