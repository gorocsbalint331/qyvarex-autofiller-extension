// @ts-nocheck
/**
 * Resume picker dirty-state / tracking helpers.
 */

const TAILOR_RESUME_PREFIX = "tailor-resume-"

function getSelectedResumeType({ disableUploadResume, selectResume }) {
  if (disableUploadResume) return "none"
  return selectResume?.startsWith(TAILOR_RESUME_PREFIX) ? "tailor" : "base"
}

function getSelectedTemplateType({
  disableUploadResume,
  selectResume,
  useOriginalResume,
}) {
  if (disableUploadResume || selectResume?.startsWith(TAILOR_RESUME_PREFIX)) {
    return "none"
  }
  return useOriginalResume === "true" ? "original" : "jobright"
}

export function getResumePickerChangeSummary({ initial, current }) {
  const changedFields = []
  if (initial.disableUploadResume !== current.disableUploadResume) {
    changedFields.push("disableUploadResume")
  }
  if (initial.selectResume !== current.selectResume) {
    changedFields.push("selectResume")
  }
  if (initial.useOriginalResume !== current.useOriginalResume) {
    changedFields.push("useOriginalResume")
  }
  return {
    hasChanges: changedFields.length > 0,
    changedFields,
  }
}

export function isResumePickerContinueDisabled({ hasChanges }) {
  return !hasChanges
}

export function getResumePickerTrackingSnapshot({
  disableUploadResume,
  selectResume,
  useOriginalResume,
}) {
  const snapshot = { disableUploadResume, selectResume, useOriginalResume }
  return {
    selected_resume_type: getSelectedResumeType(snapshot),
    selected_template_type: getSelectedTemplateType(snapshot),
  }
}
