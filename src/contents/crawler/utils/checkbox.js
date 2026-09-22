/**
 * Parcel module id: 5MP6u
 * Resolved path: src/contents/crawler/utils/checkbox.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "fillCheckbox", () => i);
var o = e("~core/xpath");
async function i(e, t = !0) {
  if (e.checked) return;
  e.focus(), e.dispatchEvent(new Event("focus", {
    bubbles: !0,
    cancelable: !1
  })), e.checked = !0, t && e.dispatchEvent(new Event("click", {
    bubbles: !0,
    cancelable: !1
  })), e.dispatchEvent(new Event("change", {
    bubbles: !0,
    cancelable: !1
  }));
  let r = (0, o.getFirstOrderedNode)('./ancestor::div[@role="checkbox"]', e);
  r && r.dispatchEvent(new Event("click", {
    bubbles: !0,
    cancelable: !1
  })), e.blur(), e.dispatchEvent(new Event("blur", {
    bubbles: !0,
    cancelable: !1
  }))
}

