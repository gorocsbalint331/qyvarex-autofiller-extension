// @ts-nocheck
/**
 * Detect a successful autofill completion payload shape.
 */

export function isSuccessfulAutofillCompletion(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return false
  }
  return (
    Array.isArray(payload.fieldRequiredStatus) &&
    Array.isArray(payload.filledFields) &&
    Array.isArray(payload.missingFields)
  )
}
