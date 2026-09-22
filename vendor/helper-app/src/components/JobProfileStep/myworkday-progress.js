/**
 * Parcel module id: dzqGl
 * Resolved path: src/components/JobProfileStep/myworkday-progress.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  if (!e) return !1;
  try {
    return new URL(e).pathname.includes("/apply")
  } catch {
    return e.includes("/apply")
  }
}

function i({
  fillingMode: e,
  hasAutoFillResult: t,
  isFilling: r,
  url: n
}) {
  return !(!r && !t || o(n)) && "pre_autofill_flow" !== e && "signup_autofill_flow" !== e
}
n.defineInteropFlag(r), n.export(r, "isMyWorkdayApplyUrl", () => o), n.export(r,
  "shouldClearMissingMyWorkdayStepProgress", () => i)

