// @ts-nocheck
/**
 * Paycom Online v3 — phone country code option matching helpers.
 */

import * as phoneCountryCode from "../../../constants/phone-country-code.js"
import * as delay from "../../../utils/delay.js"

const DEFAULT_TIMEOUT_MS = 2e3
const DEFAULT_INTERVAL_MS = 50

function normalizeText(value) {
  return Array.isArray(value)
    ? normalizeText(value[0])
    : String(value ?? "")
        .replace(/\s+/g, " ")
        .trim()
}

export function getPaycomPhoneCountryDialCode(value) {
  const text = normalizeText(value)
  const plusMatch = text.match(/\+\s*(\d{1,4})\b/)
  if (plusMatch) return `+${plusMatch[1]}`
  const bareMatch = text.match(/^\s*(\d{1,4})\s*$/)
  return bareMatch ? `+${bareMatch[1]}` : ""
}

function dialCodeCountryName(dialCode) {
  if (dialCode === "+1") return "United States of America"
  const option = phoneCountryCode.PHONE_COUNTRY_CODE_OPTIONS.find(
    (entry) => entry.value === dialCode,
  )
  return option?.label.replace(option.value, "").trim() || ""
}

function profileCountryNameForPlusOne(profileCountry, dialCode) {
  if (dialCode !== "+1") return ""
  const lower = normalizeText(profileCountry).toLowerCase()
  if (lower === "canada" || lower === "ca") return "Canada"
  if (
    lower === "united states" ||
    lower === "united states of america" ||
    lower === "usa" ||
    lower === "us"
  ) {
    return "United States of America"
  }
  return ""
}

function stripDialCodeFromLabel(label, dialCode) {
  const stripped = dialCode
    ? label.replace(dialCode, "").replace(dialCode.replace("+", ""), "")
    : label
  return stripped
    .replace(/[()+]/g, " ")
    .replace(/\b\d{1,4}\b/g, " ")
    .replace(/\s*\/\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function resolveCountryName(rawValue, dialCode, profileCountry) {
  return (
    stripDialCodeFromLabel(rawValue, dialCode) ||
    profileCountryNameForPlusOne(profileCountry, dialCode) ||
    dialCodeCountryName(dialCode)
  )
}

function flagTestIdForPlusOne(countryName, dialCode) {
  if (dialCode !== "+1") return ""
  const lower = normalizeText(countryName).toLowerCase()
  if (lower === "canada" || lower === "ca") return "ca-countryflag"
  if (
    lower.includes("united states") ||
    lower === "usa" ||
    lower === "us"
  ) {
    return "us-countryflag"
  }
  return ""
}

function listItemTestIdForCountry(countryName) {
  const lower = normalizeText(countryName).toLowerCase()
  if (lower === "canada" || lower === "ca") return "country-list-item-Canada"
  if (
    lower.includes("united states") ||
    lower === "usa" ||
    lower === "us"
  ) {
    return "country-list-item-United States of America (USA)"
  }
  return ""
}

function pushUniqueCandidate(candidates, value) {
  const trimmed = value.trim()
  if (
    trimmed &&
    !candidates.some(
      (entry) => entry.toLowerCase() === trimmed.toLowerCase(),
    )
  ) {
    candidates.push(trimmed)
  }
}

export function getPaycomPhoneCountryCodeSearchCandidates(
  value,
  profileCountry,
) {
  const text = normalizeText(value)
  if (!text) return []
  const dialCode = getPaycomPhoneCountryDialCode(text)
  const countryName = dialCode
    ? resolveCountryName(text, dialCode, profileCountry)
    : ""
  const candidates = []
  pushUniqueCandidate(candidates, countryName)
  pushUniqueCandidate(candidates, text)
  if (dialCode) {
    pushUniqueCandidate(candidates, dialCode)
    pushUniqueCandidate(candidates, dialCode.replace("+", ""))
  }
  return candidates
}

export function findPaycomPhoneCountryOption(options, value, profileCountry) {
  const text = normalizeText(value)
  const dialCode = getPaycomPhoneCountryDialCode(text)
  const countryName = resolveCountryName(text, dialCode, profileCountry)
  const countryLower = countryName.toLowerCase()
  const listItemTestId = listItemTestIdForCountry(countryName)

  if (listItemTestId) {
    const byTestId = options.find((option) => {
      if (option.getAttribute?.("data-testid") !== listItemTestId) return false
      const optionText = normalizeText(option.textContent).toLowerCase()
      return !dialCode || optionText.includes(dialCode.toLowerCase())
    })
    if (byTestId) return byTestId
  }

  const scored = options
    .map((option, index) => {
      const optionText = normalizeText(option.textContent).toLowerCase()
      const dialMatch =
        !dialCode || optionText.includes(dialCode.toLowerCase())
      const nameMatch =
        countryLower && optionText.includes(countryLower.toLowerCase())
      let score = 0
      if (dialMatch) score += 1
      if (nameMatch) score += 2
      return { option, index, score }
    })
    .filter((entry) => entry.score > 0)
    .sort(
      (left, right) =>
        right.score - left.score || left.index - right.index,
    )

  return scored[0]?.option || null
}

function optionMatchesValue(option, value, profileCountry) {
  const text = normalizeText(value)
  const dialCode = getPaycomPhoneCountryDialCode(text)
  const countryLower = resolveCountryName(
    text,
    dialCode,
    profileCountry,
  ).toLowerCase()
  const optionText = normalizeText(option.textContent).toLowerCase()
  return (
    (!dialCode || !!optionText.includes(dialCode.toLowerCase())) &&
    (!countryLower || !!optionText.includes(countryLower))
  )
}

export async function waitForPaycomPhoneCountryOption({
  getOptions,
  value,
  profileCountry,
  timeoutMs = DEFAULT_TIMEOUT_MS,
  intervalMs = DEFAULT_INTERVAL_MS,
}) {
  const deadline = Date.now() + Math.max(timeoutMs, 0)
  const interval = Math.max(intervalMs, 1)
  for (;;) {
    const option = findPaycomPhoneCountryOption(
      getOptions(),
      value,
      profileCountry,
    )
    if (option && optionMatchesValue(option, value, profileCountry)) {
      return option
    }
    const remaining = deadline - Date.now()
    if (remaining <= 0) return null
    await delay.delay(Math.min(interval, remaining))
  }
}

export function isPaycomPhoneCountrySelectionMatch(
  button,
  value,
  profileCountry,
) {
  const text = normalizeText(value)
  const dialCode = getPaycomPhoneCountryDialCode(text)
  if (!dialCode || !String(button.textContent || "").includes(dialCode)) {
    return false
  }
  const countryName = resolveCountryName(text, dialCode, profileCountry)
  const flagTestId = flagTestIdForPlusOne(countryName, dialCode)
  return (
    !flagTestId || !!button.querySelector(`[data-testid="${flagTestId}"]`)
  )
}

export {
  getPaycomPhoneCountryCodeSearchCandidates as getPaycomPhoneCountryCodeSearchCandidatesForTests,
  findPaycomPhoneCountryOption as findPaycomPhoneCountryOptionForTests,
  isPaycomPhoneCountrySelectionMatch as isPaycomPhoneCountrySelectionMatchForTests,
  waitForPaycomPhoneCountryOption as waitForPaycomPhoneCountryOptionForTests,
}
