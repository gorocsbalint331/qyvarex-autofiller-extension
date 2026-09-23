// @ts-nocheck
/**
 * MyWorkday apply-step helpers for clearing stale fill progress.
 */

export function isMyWorkdayApplyUrl(url) {
  if (!url) return false
  try {
    return new URL(url).pathname.includes("/apply")
  } catch {
    return url.includes("/apply")
  }
}

export function shouldClearMissingMyWorkdayStepProgress({
  fillingMode,
  hasAutoFillResult,
  isFilling,
  url,
}) {
  if ((!isFilling && !hasAutoFillResult) || isMyWorkdayApplyUrl(url)) {
    return false
  }
  return (
    fillingMode !== "pre_autofill_flow" &&
    fillingMode !== "signup_autofill_flow"
  )
}
