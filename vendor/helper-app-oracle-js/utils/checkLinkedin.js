/**
 * Parcel module id: 5xJv6
 * Resolved path: utils/checkLinkedin.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  let t = /^https:\/\/(www\.)?linkedin\.com\//;
  return t.test(e)
}

function i(e) {
  let t =
    /^https:\/\/(www\.)?linkedin\.com\/jobs\/(search|search-results|collections)(?:\/.*|\?.*)?$/;
  return t.test(e)
}

function a(e) {
  let t = /^https:\/\/(www\.)?linkedin\.com\/jobs\/view\/(?:[^/?#]*-)?\d+(?:[/?#]|$)/;
  return t.test(e)
}
n.defineInteropFlag(r), n.export(r, "isLinkedinDomain", () => o), n.export(r,
    "isLinkedinJobListPage", () => i), n.export(r, "isLinkedinJobDetailPage", () => a), n.export(r,
    "LINKEDIN_PRELOAD_IFRAME_SRC", () => l), n.export(r, "isLinkedinPreloadIframe", () => s), n
  .export(r, "getLinkedinJobIdFromUrl", () => u), n.export(r, "getCurrentJobId", () => c);
let l = "https://www.linkedin.com/preload/";

function s() {
  if (window.self === window.top) return !1;
  let e = window.frameElement;
  return e?.tagName === "IFRAME" && e.src === l
}

function u(e) {
  let t = new URLSearchParams(new URL(e).search),
    r = t.get("currentJobId");
  return r || (e.match(/\/jobs\/view\/(?:[^/?#]*-)?(\d+)(?:[/?#]|$)/)?.[1] ?? null)
}

function c() {
  return u(window.top.location.href)
}

