// @ts-nocheck
/**
 * Resolve which job id should drive resume initialization (or a sentinel when none).
 */

const RESUME_INIT_WITHOUT_JOB_ID = "__resume-init-without-job-id__"

function normalizeJobId(value) {
  if (value == null) return null
  const trimmed = String(value).trim()
  return trimmed || null
}

export function resolveResumeInitializationJobId({
  resumeTargetJob,
  fallbackJobId,
  jobContextLoading = false,
}) {
  if (jobContextLoading) return null
  return (
    normalizeJobId(resumeTargetJob?.jobResult?.jobId) ||
    normalizeJobId(fallbackJobId) ||
    RESUME_INIT_WITHOUT_JOB_ID
  )
}
