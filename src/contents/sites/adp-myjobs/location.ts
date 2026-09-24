// @ts-nocheck
/**
 * ADP MyJobs — map autofill-info location into country/state select answers.
 */

export function getAdpMyJobsAutofillLocation(autofillInfo) {
  return {
    country: (autofillInfo?.location?.country ?? "").trim(),
    state: (autofillInfo?.location?.state ?? "").trim(),
  }
}

/**
 * For country/state selects, prefer the current-run autofill location over
 * Falcon answers. Returns `undefined` to skip when no location value exists.
 */
export function getAdpMyJobsCurrentLocationSelectValue(
  rule,
  falconAnswers,
  currentRunLocation,
) {
  const dataName =
    rule?.$input
      ?.closest?.("adp-form-group[data-name]")
      ?.getAttribute?.("data-name")
      ?.toLowerCase?.() || ""

  if (dataName === "country") {
    return currentRunLocation.country
      ? [currentRunLocation.country]
      : undefined
  }
  if (dataName === "state") {
    return currentRunLocation.state ? [currentRunLocation.state] : undefined
  }
  return falconAnswers
}
