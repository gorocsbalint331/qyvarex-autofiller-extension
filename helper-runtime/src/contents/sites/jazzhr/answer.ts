// @ts-nocheck
/**
 * JazzHR answer formatting (phone + cover letter).
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as coverLetter from "../../methods/cover-letter.js"

function formatJazzhrPhone(phone, countryCode) {
  const resolved = phoneCountryCode.resolvePhoneFieldValue(phone, countryCode)
  const digits = resolved.replace(/\D/g, "")
  if (resolved.startsWith("+") && !resolved.startsWith("+1")) return resolved
  if (digits.length === 10) {
    const area = digits.substring(0, 3)
    const prefix = digits.substring(3, 6)
    const line = digits.substring(6, 10)
    return `(${area}) ${prefix}-${line}`
  }
  return resolved || phone
}

export function formatAnswer(answer, coverLetterPayload) {
  const formatted = coverLetter.applyCoverLetterTextToAnswer(
    answer,
    coverLetterPayload,
    ["Cover Letter", "Cover letter"],
  )
  if (formatted.regular) {
    const phoneLabels = ["Phone"]
    for (const label of phoneLabels) {
      if (formatted.regular[label]) {
        const raw = Array.isArray(formatted.regular[label])
          ? formatted.regular[label][0]
          : formatted.regular[label]
        if (raw && typeof raw === "string") {
          formatted.regular[label] = formatJazzhrPhone(
            raw,
            phoneCountryCode.resolvePhoneCountryCodeAnswer(formatted),
          )
        }
      }
    }
  }

  const markdownText = coverLetter.formatCoverLetterMarkdownAsText(
    coverLetterPayload?.markdown,
  )
  if (!markdownText) return formatted

  const regular = { ...(formatted.regular ?? {}) }
  if (!regular["Cover Letter"] && !regular["Cover letter"]) {
    regular["Cover Letter"] = markdownText
  }
  return { ...formatted, regular }
}
