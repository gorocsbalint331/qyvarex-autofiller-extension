// @ts-nocheck
/**
 * Resolve a stable job id for resume uploads.
 */

function normalizeId(value) {
  if (value == null) return null
  const text = String(value).trim()
  return text || null
}

export function resolveResumeJobId({
  currentTabJob,
  fallbackJobId,
  currentJobContextId,
}) {
  return (
    normalizeId(fallbackJobId) ||
    normalizeId(currentTabJob?.jobResult?.jobId) ||
    normalizeId(currentJobContextId)
  )
}
