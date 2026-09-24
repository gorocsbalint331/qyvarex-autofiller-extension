// @ts-nocheck
/**
 * Runtime validation deviation tracking for autofill dropdown / typeahead fields.
 *
 * Collects education + location validation rows that did not cleanly match
 * (or matched only after retries / reset) and emits them as a trackEvent.
 */

import * as trace from "../../utils/trace.js"

export const RUNTIME_VALIDATION_DEVIATION_EVENT = "autofill_dropdown_validation"

function isDeviationValidation(validation) {
  return (
    !!validation?.status &&
    (validation.status !== "matched" ||
      Number(validation.retryCount ?? 0) > 0 ||
      validation.resetApplied === true)
  )
}

function buildDeviationRecord({
  fieldLabel,
  fieldType,
  index,
  section,
  validation,
}) {
  return {
    section,
    ...(typeof index === "number" ? { index } : {}),
    fieldType,
    ...(fieldLabel ? { fieldLabel } : {}),
    status: validation.status,
    ...(validation.initialStatus
      ? { initialStatus: validation.initialStatus }
      : {}),
    ...(validation.initialCommittedValue !== undefined
      ? { initialCommittedValue: validation.initialCommittedValue }
      : {}),
    ...(validation.retryCount !== undefined
      ? { retryCount: validation.retryCount }
      : {}),
    ...(validation.resetApplied !== undefined
      ? { resetApplied: validation.resetApplied }
      : {}),
    sourceValue: validation.sourceValue ?? "",
    resolveValue: validation.resolveValue ?? "",
    committedValue: validation.committedValue ?? "",
    attemptedCandidates: Array.isArray(validation.attemptedCandidates)
      ? validation.attemptedCandidates
      : [],
  }
}

export function getRuntimeValidationDeviationRecords(trackingData) {
  const deviations = []

  const educationRows = trackingData?.validation?.education
  if (Array.isArray(educationRows)) {
    educationRows.forEach((row, index) => {
      for (const fieldType of ["school", "discipline"]) {
        const validation = row?.[fieldType]
        if (isDeviationValidation(validation)) {
          deviations.push(
            buildDeviationRecord({
              section: "education",
              index,
              fieldType,
              validation,
            }),
          )
        }
      }
    })
  }

  const locationValidation = trackingData?.validation?.location
  if (isDeviationValidation(locationValidation)) {
    deviations.push(
      buildDeviationRecord({
        section: "location",
        fieldType: "location",
        fieldLabel: locationValidation.label,
        validation: locationValidation,
      }),
    )
  }

  return deviations
}

export function buildRuntimeValidationDeviationEventPayload({
  formUrl,
  source,
  trackingData,
}) {
  const deviations = getRuntimeValidationDeviationRecords(trackingData)
  if (deviations.length === 0) return null
  return {
    formUrl,
    source,
    validation: {
      deviationCount: deviations.length,
      deviations,
    },
  }
}

export function sendRuntimeValidationDeviationEvent(
  params,
  trackEvent = trace.trackEvent,
) {
  const payload = buildRuntimeValidationDeviationEventPayload(params)
  if (payload) trackEvent(RUNTIME_VALIDATION_DEVIATION_EVENT, payload)
}
