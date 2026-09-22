/**
 * Parcel module id: cFD6N
 * Resolved path: src/hooks/useShowContinueState.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e, t, r) {
  return r && (!!e || t)
}

function i({
  isSupported: e,
  isFilling: t
}) {
  return e && !t
}
n.defineInteropFlag(r), n.export(r, "shouldShowNavigationAfterAutofill", () => o), n.export(r,
  "shouldRunContinueVisibilityMonitor", () => i), n.export(r, "shouldShowWalmartContinueButton",
() => a);
let a = o

