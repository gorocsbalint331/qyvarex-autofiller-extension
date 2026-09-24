// @ts-nocheck
/**
 * Detect dirty state for autofill info editor changes.
 */

import { getWorkdaySignupPasswordLocalUpdateAction } from "../store/workday-signup-info.ts"
import { buildAutofillInfoSaveBody } from "../mappers/save-payload.ts"

function stripRegenerationEmail(structuredData) {
  const { regenerationEmail, ...rest } = structuredData
  return rest
}

export function getAutofillInfoChangeSummary({
  current,
  initial,
  signupPassword,
  initialSignupPassword = "",
  isSignupPasswordLoaded,
  isSignupPasswordTouched,
}) {
  const currentBody = buildAutofillInfoSaveBody(current)
  const initialBody = initial
    ? buildAutofillInfoSaveBody(initial)
    : currentBody

  const hasRegularAutofillChanges =
    JSON.stringify(stripRegenerationEmail(currentBody.structuredData)) !==
    JSON.stringify(stripRegenerationEmail(initialBody.structuredData))

  const hasRegistrationEmailChanges =
    (initial?.signupInformation.registrationEmail ?? "").trim() !==
    current.signupInformation.registrationEmail.trim()

  const signupPasswordAction =
    isSignupPasswordTouched && signupPassword !== initialSignupPassword
      ? getWorkdaySignupPasswordLocalUpdateAction({
          password: signupPassword,
          isLoaded: isSignupPasswordLoaded,
          isTouched: isSignupPasswordTouched,
        })
      : "skip"

  const hasSignupPasswordChanges = signupPasswordAction !== "skip"

  return {
    hasChanges:
      hasRegularAutofillChanges ||
      hasRegistrationEmailChanges ||
      hasSignupPasswordChanges,
    hasRegularAutofillChanges,
    hasRegistrationEmailChanges,
    hasSignupPasswordChanges,
    signupPasswordAction,
  }
}
