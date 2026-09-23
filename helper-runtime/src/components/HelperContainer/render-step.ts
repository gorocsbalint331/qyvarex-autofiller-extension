// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/HelperContainer/render-step.js).
 */
import * as o from "../../core/enums.ts"

function i({isAgentDomain: e,userProfile: t,userStage: r}) {return r?.logined ? t ? 5 === t.step || e ? o.RENDER_STEP.FILLING : o.RENDER_STEP.INITIAL : a(r.currentStage) ? o.RENDER_STEP.INITIAL : o.RENDER_STEP.FAILED : o.RENDER_STEP.INITIAL}function a(e) {return "number" == typeof e && e !== o.PROFILE_CURRENT_STAGE.FILTE_RESUME_READY}

export { i as resolveHelperRenderStep }
