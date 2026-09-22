/**
 * Parcel module id: dMQWN
 * Resolved path: src/contents/crawler/utils.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "shouldSkipLabel", () => o), n.export(r, "getLabelText", () =>
  i), n.export(r, "removeSpecialCharacters", () => a), n.export(r, "triggerTabEvent", () => l);
let o = e => {
  let t = e.className;
  return t && t.includes("offscreen")
};

function i(e) {
  let t = e.textContent.trim().split("\n")[0];
  return t ? t.replace(/[\u2731*]/g, "").trim() : ""
}

function a(e) {
  return e.replace(/[^a-zA-Z0-9\s]/g, "")
}

function l(e) {
  let t = new KeyboardEvent("keydown", {
    bubbles: !0,
    cancelable: !0,
    key: "Tab",
    keyCode: 9,
    which: 9
  });
  e.dispatchEvent(t)
}

