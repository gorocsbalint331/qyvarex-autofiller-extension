// @ts-nocheck
/**
 * Personio — phone number formatting for form fills.
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"

function formatPhoneNumber(value, phoneCountryCodeAnswer) {
  const resolved = phoneCountryCode.resolvePhoneFieldValue(
    value,
    phoneCountryCodeAnswer,
  )
  if (resolved.startsWith("+") && !resolved.startsWith("+1")) return resolved

  const digits = resolved.replace(/\D/g, "")
  if (digits.length === 10) {
    const area = digits.substring(0, 3)
    const mid = digits.substring(3, 6)
    const last = digits.substring(6, 10)
    return `+1 ${area} ${mid} ${last}`
  }

  return resolved || value
}

export { formatPhoneNumber }
