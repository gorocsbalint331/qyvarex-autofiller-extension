// @ts-nocheck
/**
 * Cover letter ID/name helpers for agent and refresh flows.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import { extractAgentCoverLetterId } from "../api/resume-helpers.js"

const normalizeOptionalString = (value) => {
  if (null == value) return
  let trimmed = String(value).trim()
  return trimmed || void 0
}

export const resolveAgentCoverLetterViewRequest = ({ url, agentCoverLetter }) => {
  let coverLetterId =
    normalizeOptionalString(agentCoverLetter?.coverLetterId) ||
    (url ? normalizeOptionalString(extractAgentCoverLetterId(url)) : void 0)
  return coverLetterId ? { coverLetterId } : null
}

export const resolveCoverLetterRefreshPlan = ({ jobId }) => ({
  currentJobId: normalizeOptionalString(jobId)
})

export const normalizeAgentCoverLetter = (coverLetter) => {
  let coverLetterId = normalizeOptionalString(coverLetter?.coverLetterId)
  return coverLetterId
    ? {
        coverLetterId,
        coverLetterName:
          normalizeOptionalString(coverLetter?.coverLetterName) ||
          normalizeOptionalString(coverLetter?.title) ||
          normalizeOptionalString(coverLetter?.jobTitle) ||
          normalizeOptionalString(coverLetter?.companyName) ||
          "Cover Letter"
      }
    : null
}
