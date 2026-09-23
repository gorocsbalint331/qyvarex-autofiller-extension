// @ts-nocheck
/**
 * Prefer external job info, then the current-tab job, for resume targeting.
 */

export function resolveResumeTargetJob(currentTabJob, externalJobInfo) {
  return externalJobInfo || currentTabJob || null
}
