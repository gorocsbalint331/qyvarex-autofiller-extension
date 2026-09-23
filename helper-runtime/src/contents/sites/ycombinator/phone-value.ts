// @ts-nocheck
/**
 * YCombinator — phone value resolution against form option labels.
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as ycombinatorAnswer from "./answer.ts"

function resolveYCombinatorPhoneValue(raw, countryCodeAnswer) {
  let value = String(raw ?? "").trim()
  if (!value) return ""

  let localNumber = phoneCountryCode.stripPhoneCountryCodePrefix(
    value,
    countryCodeAnswer,
  )
  let { dialCode } = phoneCountryCode.decomposePhone(value, countryCodeAnswer)
  return dialCode && dialCode !== "1"
    ? localNumber
    : ycombinatorAnswer.formatPhoneNumber(localNumber)
}

function getYCombinatorPhoneCountrySearchTerms(raw) {
  let value = String(raw ?? "").trim()
  if (!value) return []

  let dialDigits = phoneCountryCode.getDialCodeDigits(value)
  let countryName =
    phoneCountryCode.extractPhoneCountryName(value) ||
    (dialDigits ? "" : value)
  return [countryName.trim(), dialDigits ? `+${dialDigits}` : ""].filter(
    Boolean,
  )
}

let SHARED_PHONE_COUNTRY_ALIASES = [
  { countryName: "us canada", dialCode: "1", iso2: ["us", "ca"] },
]
let DIAL_CODE_COUNTRY_NAMES = {
  1: "us canada",
  44: "united kingdom",
}

function findExactCountryOption(options, countryName, dialCode) {
  let matches = options.filter((option) => {
    let parsed = phoneCountryCode.parsePhoneCountryOptionLabel(option)
    return (
      phoneCountryCode.normalizePhoneCountryText(parsed.countryName) ===
        countryName &&
      (!dialCode || parsed.dialCode === dialCode)
    )
  })
  return matches.length === 1 ? matches[0] : null
}

function findYCombinatorPhoneCountryOptionLabel(raw, options = []) {
  let value = String(raw ?? "").trim()
  if (!value || !options.length) return null

  let matched = phoneCountryCode.findPhoneCountryOption(
    value,
    options.map((option) =>
      phoneCountryCode.parsePhoneCountryOptionLabel(option, option),
    ),
    { bareDialPolicy: "reject-shared" },
  )
  if (matched?.element) return matched.element

  let dialDigits = phoneCountryCode.getDialCodeDigits(value)
  let countryName = phoneCountryCode.normalizePhoneCountryText(
    phoneCountryCode.extractPhoneCountryName(value) ||
      (dialDigits ? "" : value),
  )
  let iso2 = countryName
    ? phoneCountryCode.resolveIso2FromCountryName(countryName)
    : ""

  if (iso2) {
    for (let alias of SHARED_PHONE_COUNTRY_ALIASES) {
      if (
        (dialDigits && alias.dialCode !== dialDigits) ||
        !alias.iso2.includes(iso2)
      ) {
        continue
      }
      let option = findExactCountryOption(
        options,
        alias.countryName,
        alias.dialCode,
      )
      if (option) return option
    }
  }

  if (!countryName && dialDigits) {
    let aliasName = DIAL_CODE_COUNTRY_NAMES[dialDigits]
    if (aliasName) return findExactCountryOption(options, aliasName, dialDigits)
  }

  return null
}

function resolveYCombinatorPhoneCountryCodeValue(raw, options) {
  let value = String(raw ?? "").trim()
  if (!value) return ""

  if (options?.length) {
    let matched = phoneCountryCode.findPhoneCountryOption(
      value,
      options.map((option) =>
        phoneCountryCode.parsePhoneCountryOptionLabel(option, option),
      ),
    )
    if (matched?.element) return matched.element
  }

  return ycombinatorAnswer.formatPhoneCountryCodeValue(value, options)
}

export {
  findYCombinatorPhoneCountryOptionLabel,
  getYCombinatorPhoneCountrySearchTerms,
  resolveYCombinatorPhoneCountryCodeValue,
  resolveYCombinatorPhoneValue,
}
