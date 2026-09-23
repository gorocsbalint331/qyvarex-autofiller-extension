// @ts-nocheck
/**
 * Route helper body content by render step + domain support.
 */

import { jsx } from "react/jsx-runtime"
import { RENDER_STEP } from "../../core/enums.ts"
import JobProfileStep from "../JobProfileStep.ts"
import NotAvailableStatus from "../NotAvailableStatus.ts"
import Onboarding from "../Onboarding.ts"

export default function StepContent({
  renderStep,
  domainSupport,
  currentTabJob,
  showContinue,
  jobContextLoading,
  fallbackJobId,
}) {
  if (renderStep === RENDER_STEP.INITIAL) {
    return jsx(Onboarding, {})
  }
  if (!domainSupport || renderStep === RENDER_STEP.FAILED) {
    return jsx(NotAvailableStatus, {})
  }
  if (renderStep === RENDER_STEP.FILLING) {
    return jsx(JobProfileStep, {
      currentTabJob,
      showContinue,
      jobContextLoading,
      fallbackJobId,
    })
  }
  return null
}
