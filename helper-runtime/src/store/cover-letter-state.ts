// @ts-nocheck
/**
 * Pure helpers for cover-letter module visibility, naming, and download/edit seeds.
 */

export function hasValidCoverLetter(coverLetter) {
  return !!coverLetter?.coverLetterId
}

export function buildDefaultCoverLetterName(firstName, lastName) {
  const trimmedFirst = firstName?.trim()
  const trimmedLast = lastName?.trim()
  return trimmedFirst && trimmedLast
    ? `Cover_Letter_${trimmedFirst}_${trimmedLast}`
    : "Cover Letter"
}

export function getCoverLetterEditableName(name) {
  return name.replace(/\.[^/.]+$/, "")
}

export function buildEditWithAiCoverLetterSeed(coverLetter) {
  const coverLetterId = coverLetter?.coverLetterId?.trim()
  const jobId = coverLetter?.jobId?.trim()
  return coverLetterId && jobId
    ? {
        coverLetterId,
        jobId,
      }
    : null
}

export function resolveEditWithAiCoverLetterSeedId(seed, jobId) {
  const trimmedJobId = jobId?.trim()
  if (seed && trimmedJobId && seed.jobId === trimmedJobId) {
    return seed.coverLetterId
  }
}

export function resolveCoverLetterDownloadRequest({
  useLegacyDownload,
  agentCoverLetter = null,
  currentJobCoverLetter = null,
}) {
  const activeCoverLetter = hasValidCoverLetter(agentCoverLetter)
    ? agentCoverLetter
    : hasValidCoverLetter(currentJobCoverLetter)
      ? currentJobCoverLetter
      : null
  return activeCoverLetter?.coverLetterId
    ? {
        coverLetterId: activeCoverLetter.coverLetterId,
        markdown: useLegacyDownload
          ? ""
          : currentJobCoverLetter?.markdown?.trim() ||
            activeCoverLetter.markdown?.trim() ||
            "",
        useLegacyDownload,
      }
    : null
}

export function resolveCoverLetterState({
  detectionStatus,
  agentCoverLetter = null,
  currentJobCoverLetter = null,
}) {
  const activeCoverLetter = hasValidCoverLetter(agentCoverLetter)
    ? agentCoverLetter
    : hasValidCoverLetter(currentJobCoverLetter)
      ? currentJobCoverLetter
      : null
  const hasExistingCoverLetter = !!activeCoverLetter?.coverLetterId
  const showModule = detectionStatus !== "" || hasExistingCoverLetter
  return showModule
    ? {
        showModule,
        hasExistingCoverLetter,
        state: hasExistingCoverLetter ? "existing" : "missing",
        activeCoverLetter,
      }
    : {
        showModule,
        hasExistingCoverLetter,
        state: "hidden",
        activeCoverLetter,
      }
}
