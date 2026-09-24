// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/core/match.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import {
  buildCountryNameVariantIndex,
  lookupCountryNameVariant,
} from "./country-name-variants.js"
import {
  COUNTRY_RECORDS,
  getCountryByIso2,
  getPrimaryCountryByDialCode,
  isSharedDialCode,
} from "./data.js"
import {
  extractPhoneCountryName,
  getDialCodeDigits,
  normalizePhoneCountryText,
} from "./parse.js"
import {
  SITE_COUNTRY_NAME_ENTRIES,
  getIso2ForSiteCountryName,
} from "./site-names.js"

function resolveIso2FromAddressCountry(addressCountry) {
  let normalized = normalizePhoneCountryText(addressCountry)
  return normalized
    ? /^[a-z]{2}$/.test(normalized) && getCountryByIso2(normalized)
      ? normalized
      : resolveIso2FromCountryName(addressCountry)
    : ""
}

let countryNameToIso2 = new Map(
  COUNTRY_RECORDS.map((record) => [
    normalizePhoneCountryText(record.name),
    record.iso2,
  ]),
)
let countryNameVariantIndex = buildCountryNameVariantIndex([
  ...COUNTRY_RECORDS,
  ...SITE_COUNTRY_NAME_ENTRIES,
])

export function resolveIso2FromCountryName(countryName) {
  if (!countryName) return ""
  let normalized = normalizePhoneCountryText(countryName)
  return (
    (normalized &&
      (countryNameToIso2.get(normalized) ||
        getIso2ForSiteCountryName(normalized) ||
        lookupCountryNameVariant(countryNameVariantIndex, countryName))) ||
    ""
  )
}

function resolveOptionIso2(option) {
  let fromIso2 = normalizePhoneCountryText(option.iso2 || "")
  return fromIso2 || resolveIso2FromCountryName(option.countryName)
}

export function formatPhoneCountryOptionLabel(option) {
  return [option.countryName, option.dialCode ? `+${option.dialCode}` : ""]
    .filter(Boolean)
    .join(" ")
    .trim()
}

export function parsePhoneCountryOptionLabel(labelText, element) {
  let label = String(labelText ?? "")
    .replace(/\s+/g, " ")
    .trim()
  return {
    label,
    countryName: label
      .replace(/\(?\s*\+\s*\d{1,4}\s*\)?/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
    dialCode: getDialCodeDigits(label),
    element,
  }
}

export function dedupePhoneCountryOptions(options) {
  let seen = /* @__PURE__ */ new Set()
  return (options || []).filter((option) => {
    if (!option?.countryName || !option?.dialCode) return false
    let key = [
      (option.iso2 || "").toLowerCase(),
      normalizePhoneCountryText(option.countryName),
      option.dialCode,
    ].join("|")
    return !seen.has(key) && (seen.add(key), true)
  })
}

export function findPhoneCountryOption(
  answer,
  options,
  {
    bareDialPolicy = "unique",
    addressCountry = "",
    allowPrimaryDialFallback = false,
  } = {},
) {
  let candidates = (options || []).filter(
    (option) => option && (option.label || option.countryName),
  )
  if (!candidates.length) return null
  let answerText = String(answer ?? "")
  let answerDialCode = getDialCodeDigits(answerText)
  let extractedCountryName = normalizePhoneCountryText(
    extractPhoneCountryName(answerText),
  )
  let answerCountryName =
    extractedCountryName ||
    (answerDialCode ? "" : normalizePhoneCountryText(answerText))
  if (!answerCountryName && !answerDialCode) return null
  let normalizedAnswer = normalizePhoneCountryText(answerText)
  let exactLabelMatches = candidates.filter((option) => {
    let optionLabel = normalizePhoneCountryText(option.label || "")
    return (
      (!!optionLabel && optionLabel === normalizedAnswer) ||
      normalizePhoneCountryText(formatPhoneCountryOptionLabel(option)) ===
        normalizedAnswer
    )
  })
  if (exactLabelMatches.length) {
    let uniqueKeys = new Set(
      exactLabelMatches.map(
        (option) =>
          `${normalizePhoneCountryText(option.countryName)}|${option.dialCode}`,
      ),
    )
    return 1 === uniqueKeys.size ? exactLabelMatches[0] : null
  }
  let uniqueOptions = dedupePhoneCountryOptions(candidates)
  if (!uniqueOptions.length) return null
  if (answerCountryName) {
    let answerIso2 = resolveIso2FromCountryName(answerCountryName)
    let nameMatches = uniqueOptions.filter((option) => {
      if (normalizePhoneCountryText(option.countryName) === answerCountryName)
        return true
      let optionIso2 = resolveOptionIso2(option)
      return (
        !!optionIso2 &&
        (optionIso2 === answerIso2 || optionIso2 === answerCountryName)
      )
    })
    if (nameMatches.length) {
      let dialFiltered = answerDialCode
        ? nameMatches.filter((option) => option.dialCode === answerDialCode)
        : nameMatches
      return 1 === dialFiltered.length ? dialFiltered[0] : null
    }
  }
  if (
    !answerDialCode ||
    "never" === bareDialPolicy ||
    ("reject-shared" === bareDialPolicy && isSharedDialCode(answerDialCode))
  )
    return null
  let dialMatches = uniqueOptions.filter(
    (option) => option.dialCode === answerDialCode,
  )
  if (1 === dialMatches.length) return dialMatches[0]
  if (!dialMatches.length) return null
  let addressIso2 = resolveIso2FromAddressCountry(addressCountry)
  if (addressIso2) {
    let addressMatches = dialMatches.filter(
      (option) => resolveOptionIso2(option) === addressIso2,
    )
    if (1 === addressMatches.length) return addressMatches[0]
  }
  if (allowPrimaryDialFallback) {
    let primaryIso2 =
      getPrimaryCountryByDialCode(answerDialCode)?.iso2 || ""
    let primaryMatches = primaryIso2
      ? dialMatches.filter((option) => resolveOptionIso2(option) === primaryIso2)
      : []
    if (1 === primaryMatches.length) return primaryMatches[0]
  }
  return null
}

export function findPhoneCountryOptionElement(
  answer,
  elements,
  { getLabel, debugLabel, ...matchOptions } = {},
) {
  let labelGetter = getLabel ?? ((element) => element?.textContent)
  let parsedOptions = (elements || []).map((element) =>
    parsePhoneCountryOptionLabel(labelGetter(element), element),
  )
  let matched = findPhoneCountryOption(answer, parsedOptions, matchOptions)
  return matched?.element !== undefined
    ? matched.element
    : (debugLabel &&
        console.warn("[phone-country-code] no option matched", {
          field: debugLabel,
          answer,
          optionCount: parsedOptions.length,
          sampleOptions: parsedOptions.slice(0, 5).map((option) => option.label),
        }),
      null)
}
