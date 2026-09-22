/**
 * Parcel module id: 2TASB
 * Resolved path: components/HelperContainer/render-step.js (oracle restore)
 * Dependencies:
 *   ../../core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "resolveHelperRenderStep", () => i);
var o = e("../../core/enums");

function i({
  isAgentDomain: e,
  userProfile: t,
  userStage: r
}) {
  return r?.logined ? t ? 5 === t.step || e ? o.RENDER_STEP.FILLING : o.RENDER_STEP.INITIAL : a(r
    .currentStage) ? o.RENDER_STEP.INITIAL : o.RENDER_STEP.FAILED : o.RENDER_STEP.INITIAL
}

function a(e) {
  return "number" == typeof e && e !== o.PROFILE_CURRENT_STAGE.FILTE_RESUME_READY
}

