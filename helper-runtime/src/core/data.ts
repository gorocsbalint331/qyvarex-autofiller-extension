// @ts-nocheck
/**
 * Country dial-code records from intl-tel-input.
 */
import * as intlTelInputData from "intl-tel-input/data"
import * as intlTelInputEn from "intl-tel-input/i18n/en"

const intlTelInputDataInterop = { default: intlTelInputData }
let translations = intlTelInputEn.countryTranslations
export const COUNTRY_RECORDS = intlTelInputDataInterop.default
  .map((entry) => ({
    iso2: entry.iso2,
    dialCode: entry.dialCode,
    name: translations[entry.iso2] || entry.name || "",
    priority: entry.priority ?? Number.MAX_SAFE_INTEGER
  }))
  .filter((entry) => !!entry.iso2 && !!entry.dialCode && !!entry.name)

let countriesByIso2 = new Map()
let countriesByDialCode = new Map()
for (let country of COUNTRY_RECORDS) {
  countriesByIso2.set(country.iso2, country)
  let dialGroup = countriesByDialCode.get(country.dialCode)
  if (dialGroup) dialGroup.push(country)
  else countriesByDialCode.set(country.dialCode, [country])
}
for (let dialGroup of countriesByDialCode.values()) {
  dialGroup.sort(
    (left, right) =>
      left.priority - right.priority || left.iso2.localeCompare(right.iso2)
  )
}

export function getCountryByIso2(iso2) {
  return countriesByIso2.get(String(iso2 ?? "").trim().toLowerCase())
}

export function getCountriesByDialCode(dialCode) {
  return countriesByDialCode.get(String(dialCode ?? "").replace(/\D/g, "")) || []
}

export const SHARED_DIAL_CODES = new Set(
  Array.from(countriesByDialCode.entries())
    .filter(([, countries]) => countries.length > 1)
    .map(([dialCode]) => dialCode)
)

export function isSharedDialCode(dialCode) {
  return SHARED_DIAL_CODES.has(String(dialCode ?? "").replace(/\D/g, ""))
}

export function getPrimaryCountryByDialCode(dialCode) {
  return getCountriesByDialCode(dialCode)[0]
}
