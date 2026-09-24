// @ts-nocheck
/**
 * Eightfold ATS filler — phone answer helpers (readable TypeScript source of truth).
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"

function getFillDataListValue(answer, name) {
  const entry = answer.fillDataList?.find((item) => item?.name === name)
  const value = entry?.value
  return typeof value === "string" ? value.trim() : ""
}

function firstTrimmedString(value) {
  if (Array.isArray(value)) {
    return (
      value.find((item) => typeof item === "string" && !!item.trim())?.trim() ??
      ""
    )
  }
  return typeof value === "string" ? value.trim() : ""
}

function trimString(value) {
  return typeof value === "string" ? value.trim() : ""
}

export function getEightfoldPhoneCountryCodeSource(
  rule,
  answer,
  phoneCountrySources = {},
) {
  const fromAnswer =
    rule && answer
      ? firstTrimmedString(answer.regular?.[rule.label]) ||
        getFillDataListValue(answer, rule.label)
      : ""
  return (
    fromAnswer ||
    trimString(phoneCountrySources.phoneCountryCode) ||
    trimString(phoneCountrySources.country)
  )
}

export function resolveEightfoldPhoneValue(nationalNumber, countryCode, extras) {
  return phoneCountryCode.resolveDualControlPhoneValue(
    nationalNumber,
    countryCode,
    extras,
  )
}

export function formatAnswer(answer) {
  const phoneLabels = [
    "Phone: Phone Number",
    "Phone-Phone Number",
    "Number",
    "Phone Number",
  ]
  for (const label of phoneLabels) {
    const raw = answer.regular?.[label] || getFillDataListValue(answer, label)
    if (raw) {
      answer.regular = {
        ...answer.regular,
        [label]: phoneCountryCode.resolveNationalPhoneValue(raw, answer),
      }
    }
  }
  return answer
}
