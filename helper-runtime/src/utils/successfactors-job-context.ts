// @ts-nocheck
/**
 * Sticky SuccessFactors job id kept in sessionStorage across navigation.
 */

export const SUCCESSFACTORS_STICKY_JOB_ID_KEY =
  "jobright_successfactors_current_job_id"

function normalizeJobId(value) {
  const text = value?.trim()
  return text || null
}

function getSessionStorage() {
  try {
    return typeof sessionStorage === "undefined" ? null : sessionStorage
  } catch {
    return null
  }
}

export function resolveSuccessFactorsStickyJobId(jobId, siteId) {
  const normalized = normalizeJobId(jobId)
  if (siteId !== "successfactors") return normalized

  const storage = getSessionStorage()
  if (normalized) {
    storage?.setItem(SUCCESSFACTORS_STICKY_JOB_ID_KEY, normalized)
    return normalized
  }
  return normalizeJobId(storage?.getItem(SUCCESSFACTORS_STICKY_JOB_ID_KEY))
}
