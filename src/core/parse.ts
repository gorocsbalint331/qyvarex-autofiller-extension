// @ts-nocheck
/**
 * Phone country-code answer parsing and normalization helpers.
 */

const PLUS_DIAL_CODE_PATTERN = /\+\s*(\d{1,4})(?!\d)/
const BARE_DIAL_CODE_PATTERN = /^\d{1,4}$/
const TRAILING_DIAL_CODE_PATTERN = /(?:^|\D)(\d{1,4})\s*$/

export const normalizePhoneCountryCode = (rawValue) => {
  let trimmed = String(rawValue ?? "").trim()
  if (!trimmed) return ""
  let plusMatch = trimmed.match(PLUS_DIAL_CODE_PATTERN)
  if (plusMatch) return `+${plusMatch[1]}`
  let digitsOnly = trimmed.replace(/[\s()-]/g, "")
  if (BARE_DIAL_CODE_PATTERN.test(digitsOnly)) return `+${digitsOnly}`
  let trailingMatch = trimmed.match(TRAILING_DIAL_CODE_PATTERN)
  return trailingMatch && /[A-Za-z]/.test(trimmed) ? `+${trailingMatch[1]}` : trimmed
}

export const extractPhoneCountryName = (rawValue) => {
  let trimmed = String(rawValue ?? "").trim()
  let normalizedCode = normalizePhoneCountryCode(trimmed)
  if (!/^\+\d{1,4}$/.test(normalizedCode)) return ""
  let dialDigits = normalizedCode.slice(1)
  return trimmed
    .replace(RegExp(`\\+?\\s*${dialDigits}(?!\\d)`), "")
    .replace(/^[\s(),-]+|[\s(),-]+$/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

export const formatPhoneCountryCode = (codeOrAnswer, countryName) => {
  let normalizedCode = normalizePhoneCountryCode(codeOrAnswer)
  let normalizedName = String(countryName ?? "").replace(/\s+/g, " ").trim()
  return normalizedCode && normalizedName
    ? `${normalizedCode} ${normalizedName}`
    : normalizedCode
}

export const normalizePhoneCountryCodeWithName = (rawValue) =>
  formatPhoneCountryCode(normalizePhoneCountryCode(rawValue), extractPhoneCountryName(rawValue))

export const withPhoneCountryCodeOption = (options, answer) => {
  let normalizedCode = normalizePhoneCountryCode(answer)
  return !normalizedCode || options.some((option) => option.value === normalizedCode)
    ? options
    : [{ label: normalizedCode, value: normalizedCode }, ...options]
}

export const normalizePhoneCountryText = (rawValue) =>
  String(rawValue ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()

export const getDialCodeDigits = (rawValue) => {
  let normalizedCode = normalizePhoneCountryCode(rawValue)
  return /^\+\d{1,4}$/.test(normalizedCode) ? normalizedCode.slice(1) : ""
}
