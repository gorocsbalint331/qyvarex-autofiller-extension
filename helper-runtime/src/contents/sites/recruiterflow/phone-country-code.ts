// @ts-nocheck
/**
 * Recruiterflow — phone country code option matching helpers.
 */

import * as phoneCountryCodeConstants from "../../../constants/phone-country-code.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"

export function normalizePhoneCountryCodeSource(value) {
  const text = phoneCountryCode.resolvePhoneAnswerText(value)
  if (!text) return null

  const withoutDial = text
    .replace(/\(?\s*\+\d{1,4}\s*\)?/g, "")
    .replace(/\s+/g, " ")
    .trim()
  const dial = text.match(/\+(\d{1,4})/)?.[1]
  if (dial) return withoutDial ? `${withoutDial} +${dial}` : `+${dial}`

  const digits = text.replace(/\D/g, "")
  return digits && digits.length <= 4 ? `+${digits}` : text
}

export function normalizeCountryText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

const DIAL_CODE_COUNTRY_FALLBACK = {
  1: "United States",
  44: "United Kingdom",
}

export function getPhoneCountryName(element) {
  return (
    element.querySelector(".iti__country-name")?.textContent ||
    element.textContent ||
    ""
  )
}

export function getPhoneCountryDialCode(element) {
  const attr = element.getAttribute("data-dial-code") || ""
  if (attr) return attr.replace(/\D/g, "")
  const text =
    element.querySelector(".iti__dial-code")?.textContent ||
    element.textContent ||
    ""
  return text.match(/\+(\d{1,4})/)?.[1] || ""
}

function extractDialFromAnswer(value) {
  return String(value ?? "").match(/\+(\d{1,4})/)?.[1] || ""
}

function countryNameFromDialCode(dialCode) {
  const digits = String(dialCode ?? "").replace(/\D/g, "")
  if (!digits) return ""
  const fallback = DIAL_CODE_COUNTRY_FALLBACK[digits]
  if (fallback) return fallback
  const option = phoneCountryCodeConstants.PHONE_COUNTRY_CODE_OPTIONS.find(
    (entry) => entry.value.replace(/\D/g, "") === digits,
  )
  return option?.label.replace(/^\+\d+\s*/, "").trim() || ""
}

export function findRecruiterflowPhoneCountryOption(optionElements, answer) {
  if (!normalizeCountryText(answer)) return null

  const matched = phoneCountryCode.findPhoneCountryOption(
    answer,
    optionElements.map((element) => ({
      countryName: getPhoneCountryName(element).trim(),
      dialCode: getPhoneCountryDialCode(element),
      iso2: element.getAttribute("data-country-code") || "",
      element,
    })),
  )
  if (matched?.element) return matched.element
  if (phoneCountryCode.extractPhoneCountryName(answer).trim()) return null

  const dial = extractDialFromAnswer(answer)
  if (!dial) return null
  const expectedName = normalizeCountryText(countryNameFromDialCode(dial))
  return expectedName
    ? optionElements.find(
        (element) =>
          getPhoneCountryDialCode(element) === dial &&
          normalizeCountryText(getPhoneCountryName(element)) === expectedName,
      ) ?? null
    : null
}
