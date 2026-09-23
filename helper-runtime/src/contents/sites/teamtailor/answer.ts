// @ts-nocheck
/**
 * TeamTailor — answer shaping (cover letter text).
 */

import * as coverLetter from "../../methods/cover-letter.ts"

export function formatAnswer(answer, coverLetterInfo) {
  const withCoverLetter = coverLetter.applyCoverLetterTextToAnswer(
    answer,
    coverLetterInfo,
    ["Cover letter", "Cover Letter"],
  )
  const markdownAsText = coverLetter.formatCoverLetterMarkdownAsText(
    coverLetterInfo?.markdown,
  )
  if (!markdownAsText) return withCoverLetter

  const regular = { ...(withCoverLetter.regular ?? {}) }
  if (!regular["Cover letter"] && !regular["Cover Letter"]) {
    regular["Cover letter"] = markdownAsText
  }
  return { ...withCoverLetter, regular }
}
