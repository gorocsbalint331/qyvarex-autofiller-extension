// @ts-nocheck
/**
 * Resolve which helper render step to show from profile / agent domain state.
 */

import { PROFILE_CURRENT_STAGE, RENDER_STEP } from "../../core/enums.ts"

function isProfileIncompleteForInitial(currentStage) {
  return (
    typeof currentStage === "number" &&
    currentStage !== PROFILE_CURRENT_STAGE.FILTE_RESUME_READY
  )
}

export function resolveHelperRenderStep({
  isAgentDomain,
  userProfile,
  userStage,
}) {
  if (!userStage?.logined) return RENDER_STEP.INITIAL
  if (!userProfile) {
    return isProfileIncompleteForInitial(userStage.currentStage)
      ? RENDER_STEP.INITIAL
      : RENDER_STEP.FAILED
  }
  if (userProfile.step === 5 || isAgentDomain) return RENDER_STEP.FILLING
  return RENDER_STEP.INITIAL
}
