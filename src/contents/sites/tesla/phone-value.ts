// @ts-nocheck
/**
 * Tesla — phone value / country-source helpers for dual-control phone inputs.
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"

export function resolveTeslaPhoneCountrySource(
  phoneAnswer,
  countryCodeAnswer,
  countryAnswer,
) {
  return phoneCountryCode.resolvePhoneCountrySource(
    phoneAnswer,
    countryCodeAnswer,
    countryAnswer,
  )
}

export function resolveTeslaPhoneValue(phoneAnswer, countrySource) {
  return phoneCountryCode.resolveDualControlPhoneValue(
    phoneAnswer,
    countrySource,
  )
}

export function parseTeslaPhoneCountryOption(element) {
  const iso2 = (element.getAttribute("data-tds-value") || "").trim()
  const rawText = (element.textContent || "").replace(/\s+/g, " ").trim()
  const labelText =
    iso2 && rawText.toUpperCase().startsWith(iso2.toUpperCase())
      ? rawText.slice(iso2.length).trim()
      : rawText
  return {
    ...phoneCountryCode.parsePhoneCountryOptionLabel(
      labelText || element.getAttribute("data-tds-label"),
      element,
    ),
    iso2: iso2.toLowerCase(),
  }
}
