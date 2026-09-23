// @ts-nocheck
/**
 * Okta — answer shaping for phone number formatting.
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"

function formatOktaPhone(rawValue, countryCodeAnswer) {
  const resolved = phoneCountryCode.resolvePhoneFieldValue(
    rawValue,
    countryCodeAnswer,
  )
  const digits = resolved.replace(/\D/g, "")
  if (resolved.startsWith("+") && !resolved.startsWith("+1")) return resolved
  if (digits.length === 10) {
    const area = digits.substring(0, 3)
    const prefix = digits.substring(3, 6)
    const line = digits.substring(6, 10)
    return `(${area}) ${prefix}-${line}`
  }
  return resolved || rawValue
}

export function formatAnswer(answer) {
  if (answer.regular) {
    const phoneLabels = ["Phone"]
    for (const label of phoneLabels) {
      if (answer.regular[label]) {
        const value = Array.isArray(answer.regular[label])
          ? answer.regular[label][0]
          : answer.regular[label]
        if (value && typeof value === "string") {
          answer.regular[label] = formatOktaPhone(
            value,
            phoneCountryCode.resolvePhoneCountryCodeAnswer(answer),
          )
        }
      }
    }
  }
  return answer
}
