// @ts-nocheck
/**
 * Resolve phone country ISO2 from answer text and optional address country.
 */
import {
  COUNTRY_RECORDS,
  getCountriesByDialCode
} from "./data.js"
import {
  extractPhoneCountryName,
  getDialCodeDigits,
  normalizePhoneCountryText
} from "./parse.js"

function findCountryByNormalizedName(countries, normalizedName) {
  if (normalizedName) {
    return countries.find(
      (country) => normalizePhoneCountryText(country.name) === normalizedName
    )
  }
}

export function resolvePhoneCountryIso2({
  answer,
  addressCountryIso2,
  allowPriorityFallback = false,
  countries = COUNTRY_RECORDS
}) {
  let dialDigits = getDialCodeDigits(answer)
  let normalizedName =
    normalizePhoneCountryText(extractPhoneCountryName(answer)) ||
    (dialDigits ? "" : normalizePhoneCountryText(answer))
  let matchedByName = findCountryByNormalizedName(countries, normalizedName)
  if (matchedByName) return matchedByName.iso2

  let addressCountry = addressCountryIso2
    ? countries.find((country) => country.iso2 === addressCountryIso2.trim().toLowerCase())
    : undefined
  if (addressCountry && (!dialDigits || addressCountry.dialCode === dialDigits)) {
    return addressCountry.iso2
  }
  if (!allowPriorityFallback || !dialDigits) return ""

  let dialMatches =
    countries === COUNTRY_RECORDS
      ? getCountriesByDialCode(dialDigits)
      : countries
          .filter((country) => country.dialCode === dialDigits)
          .slice()
          .sort(
            (left, right) =>
              (left.priority ?? Number.MAX_SAFE_INTEGER) -
                (right.priority ?? Number.MAX_SAFE_INTEGER) ||
              left.iso2.localeCompare(right.iso2)
          )
  return dialMatches[0]?.iso2 ?? ""
}
