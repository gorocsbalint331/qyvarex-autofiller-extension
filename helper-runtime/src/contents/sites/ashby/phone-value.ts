// @ts-nocheck
/**
 * Ashby — phone number value formatting for tel inputs.
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"

export function resolveAshbyPhoneValue(rawValue, phoneCountryCodeAnswer) {
  let resolved = phoneCountryCode.resolvePhoneFieldValue(
    rawValue,
    phoneCountryCodeAnswer,
  )
  if (resolved.startsWith("+") && !resolved.startsWith("+1")) return resolved

  let digits = resolved.replace(/\D/g, "")
  if (digits.length === 10) {
    return `1-${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`
  }
  if (digits.length === 11 && digits.startsWith("1")) {
    return `${digits[0]}-${digits.slice(1, 4)}-${digits.slice(4, 7)}-${digits.slice(7)}`
  }
  return resolved
}
