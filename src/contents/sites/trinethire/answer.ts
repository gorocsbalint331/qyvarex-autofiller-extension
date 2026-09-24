// @ts-nocheck
/**
 * TrinetHire — answer shaping (phone formatting, city).
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"

function formatPhoneNumber(raw, countryCode) {
  const resolved = phoneCountryCode.resolvePhoneFieldValue(raw, countryCode)
  const digits = resolved.replace(/\D/g, "")
  if (resolved.startsWith("+") && !resolved.startsWith("+1")) return resolved
  if (10 === digits.length) {
    const area = digits.substring(0, 3)
    const prefix = digits.substring(3, 6)
    const line = digits.substring(6, 10)
    return `(${area}) ${prefix}-${line}`
  }
  return resolved || raw
}

function firstCityToken(value) {
  const text = Array.isArray(value)
    ? String(value[0] ?? "").trim()
    : String(value ?? "").trim()
  return text ? text.split(",")[0]?.trim() || text : ""
}

export function formatAnswer(answer) {
  if (answer.regular) {
    const phoneLabels = ["Phone number"]
    for (const label of phoneLabels)
      if (answer.regular[label]) {
        const value = Array.isArray(answer.regular[label])
          ? answer.regular[label][0]
          : answer.regular[label]
        value &&
          "string" == typeof value &&
          (answer.regular[label] = formatPhoneNumber(
            value,
            phoneCountryCode.resolvePhoneCountryCodeAnswer(answer),
          ))
      }
    const city = firstCityToken(answer.regular.City)
    city && (answer.regular.City = city)
  }
  return answer
}
