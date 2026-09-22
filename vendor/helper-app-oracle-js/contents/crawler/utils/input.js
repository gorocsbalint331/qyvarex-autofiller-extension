/**
 * Parcel module id: iPIvT
 * Resolved path: contents/crawler/utils/input.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
async function o(e, t) {
  if (!e) {
    console.error("element is null");
    return
  }
  e.focus();
  let r = Object.getPrototypeOf(e);
  if (!Object.getOwnPropertyDescriptor(r, "value")) return;
  let n = Object.getOwnPropertyDescriptor(r, "value").set;
  n.call(e, t), e.dispatchEvent(new Event("input", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new Event("change", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new Event("blur")), e.dispatchEvent(new KeyboardEvent("keydown", {
    bubbles: !0,
    cancelable: !0,
    keyCode: 13
  })), e.dispatchEvent(new KeyboardEvent("keyup", {
    bubbles: !0,
    cancelable: !0,
    keyCode: 13
  })), e.blur(), e.dispatchEvent(new FocusEvent("focus", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new Event("change", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new FocusEvent("blur", {
    bubbles: !0,
    cancelable: !0
  }))
}
n.defineInteropFlag(r), n.export(r, "fillDefaultInputField", () => o)

