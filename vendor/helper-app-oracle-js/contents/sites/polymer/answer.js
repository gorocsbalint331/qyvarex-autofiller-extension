/**
 * Parcel module id: XfQNt
 * Resolved path: contents/sites/polymer/answer.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  if (!e.regular) return e;
  let t = Object.keys(e.regular).find(e => e.toLowerCase().includes("linkedin"));
  if (t) {
    let r = e.regular[t];
    if (Array.isArray(r) && (r = r[0]), "string" == typeof r && r) {
      let n = r.match(/(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/([^\/\?]+)/);
      n && n[1] ? e.regular[t] = n[1] : e.regular[t] = r
    }
  }
  return Object.keys(e.regular).forEach(t => {
    let r = e.regular[t];
    "boolean" == typeof r && (e.regular[t] = r ? "Yes" : "No")
  }), e
}
n.defineInteropFlag(r), n.export(r, "formatAnswer", () => o)

