// @ts-nocheck
/**
 * YCombinator — phone country-code and number formatting helpers.
 */

function resolveUnitedKingdomLabel(dialCode, options) {
  return dialCode === "+44"
    ? (options?.find((option) =>
        option.trim().toLowerCase().startsWith("united kingdom +44"),
      ) ?? "United Kingdom +44")
    : null
}

function formatPhoneCountryCodeValue(raw, options) {
  let value = String(raw ?? "").trim()
  if (!value) return ""

  let dialMatch = value.match(/\+\s*(\d{1,4})(?!\d)/)
  if (dialMatch && !/[A-Za-z]/.test(value)) {
    let dialCode = `+${dialMatch[1]}`
    return resolveUnitedKingdomLabel(dialCode, options) ?? dialCode
  }

  let digitsOnly = value.replace(/[\s()-]/g, "")
  if (/^\d{1,4}$/.test(digitsOnly)) {
    let dialCode = `+${digitsOnly}`
    return resolveUnitedKingdomLabel(dialCode, options) ?? dialCode
  }

  let trailingDigits = value.match(/(?:^|\D)(\d{1,4})\s*$/)
  return trailingDigits && /[A-Za-z]/.test(value)
    ? value.replace(/\+\s*(\d{1,4})(?!\d)/g, "+$1")
    : value
}

function formatPhoneNumber(raw) {
  let digits = raw.replace(/\D/g, "")

  if (digits.length === 11 && digits.startsWith("1")) {
    let area = digits.substring(1, 4)
    let prefix = digits.substring(4, 7)
    let line = digits.substring(7, 11)
    return `(${area}) ${prefix}-${line}`
  }

  if (digits.length === 10) {
    let area = digits.substring(0, 3)
    let prefix = digits.substring(3, 6)
    let line = digits.substring(6, 10)
    return `(${area}) ${prefix}-${line}`
  }

  return raw
}

let formatPhoneCountryCodeValueForTests = formatPhoneCountryCodeValue

export {
  formatPhoneCountryCodeValue,
  formatPhoneCountryCodeValueForTests,
  formatPhoneNumber,
}
