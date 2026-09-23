// @ts-nocheck
/**
 * Intuit — answer formatting (phone nationalization).
 * Readable TypeScript source of truth.
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"

export function formatAnswer(answer) {
  if (!answer?.regular) return answer
  for (const key of Object.keys(answer.regular)) {
    const normalizedKey = key.trim().toLowerCase()
    const isMobileField =
      (normalizedKey === "mobile" ||
        normalizedKey === "mobile phone number" ||
        normalizedKey === "mobile number") &&
      !normalizedKey.includes("prefix")
    if (!isMobileField) continue
    const raw = answer.regular[key]
    const value = Array.isArray(raw) ? raw[0] : raw
    if (typeof value === "string" && value.trim()) {
      answer.regular[key] = phoneCountryCode.resolveNationalPhoneValue(
        value,
        answer,
      )
    }
  }
  return answer
}
