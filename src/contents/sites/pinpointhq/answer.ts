// @ts-nocheck
/**
 * PinpointHQ — answer shaping for country names and phone formatting.
 */

import * as phoneCountryCode from "./phone-country-code.ts"

function coerceAnswerText(value) {
  if (typeof value === "string") return value
  if (Array.isArray(value)) {
    const found = value.find(
      (item) => typeof item === "string" && item.trim(),
    )
    return found || null
  }
  if (value && typeof value === "object") {
    const record = value
    const nested = record.value ?? record.label ?? record.name
    return typeof nested === "string" ? nested : null
  }
  return null
}

export function getPinpointCountryFillValue(value) {
  const text = coerceAnswerText(value)?.trim()
  if (!text) return null
  const lower = text.toLowerCase()
  if (["us", "usa", "united states of america"].includes(lower)) {
    return "United States"
  }
  if (["uk", "gb", "great britain"].includes(lower)) {
    return "United Kingdom"
  }
  return text
}

function firstCountryFillValue(candidates) {
  for (const candidate of candidates) {
    const filled = getPinpointCountryFillValue(candidate)
    if (filled) return filled
  }
  return null
}

function formatUsPhoneNumber(raw) {
  const digits = raw.replace(/\D/g, "")
  if (digits.length === 11 && digits.startsWith("1")) {
    const area = digits.substring(1, 4)
    const mid = digits.substring(4, 7)
    const last = digits.substring(7, 11)
    return `(${area}) ${mid}-${last}`
  }
  if (digits.length === 10) {
    const area = digits.substring(0, 3)
    const mid = digits.substring(3, 6)
    const last = digits.substring(6, 10)
    return `(${area}) ${mid}-${last}`
  }
  return raw
}

function isUsPhoneCountryCode(value) {
  const text = Array.isArray(value)
    ? value.find((item) => typeof item === "string" && item.trim())
    : value
  if (typeof text !== "string") return true
  const dial = text.match(/\+\s*(\d{1,4})/)?.[1]
  return !dial || dial === "1"
}

export function formatAnswer(answer) {
  if (answer.regular) {
    const country = firstCountryFillValue([
      answer.profileData?.country,
      answer.profile_data?.country,
      answer.country,
      answer.regular.Country,
    ])
    if (country) answer.regular.Country = country

    const useUsFormat = isUsPhoneCountryCode(
      answer.regular[phoneCountryCode.PINPOINT_PHONE_COUNTRY_CODE_LABEL],
    )
    const phoneLabels = ["Phone"]
    for (const label of phoneLabels) {
      if (!answer.regular[label]) continue
      const raw = Array.isArray(answer.regular[label])
        ? answer.regular[label][0]
        : answer.regular[label]
      if (raw && typeof raw === "string") {
        answer.regular[label] = useUsFormat ? formatUsPhoneNumber(raw) : raw
      }
    }
  }
  return answer
}
