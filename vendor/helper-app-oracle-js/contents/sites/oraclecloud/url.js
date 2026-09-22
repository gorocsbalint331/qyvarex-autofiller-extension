/**
 * Parcel module id: 7oftP
 * Resolved path: contents/sites/oraclecloud/url.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "isOracleApplyPath", () => i), n.export(r,
  "isOracleJobDetailPath", () => a), n.export(r, "normalizeOracleApplyTokenUrl", () => l);
let o = "/apply";

function i(e) {
  return /(?:^|\/)job\/[^/]+\/apply(?:\/|$)/.test(e) ||
    /(?:^|\/)jobs\/preview\/[^/]+\/apply(?:\/|$)/.test(e)
}

function a(e) {
  return /(?:^|\/)job\/[^/]+\/?$/.test(e) || /(?:^|\/)jobs\/preview\/[^/]+\/?$/.test(e)
}

function l(e) {
  try {
    let t = new URL(e),
      r = t.pathname.indexOf(o);
    if (-1 === r) return t.search = "", t.hash = "", t.toString();
    return t.pathname = t.pathname.slice(0, r) + o, t.search = "", t.hash = "", t.toString()
  } catch {
    return e.split("?")[0]
  }
}

