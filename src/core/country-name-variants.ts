// @ts-nocheck
/**
 * Generate and look up country-name spelling variants for ISO2 matching.
 */
import {
  normalizePhoneCountryText
} from "./parse.js"

function stripDiacritics(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function stripParentheticals(value) {
  return value.replace(/\([^)]*\)/g, " ")
}

function flipCommaOrder(value) {
  let parts = value.split(",")
  if (2 !== parts.length) return value
  let [left, right] = parts.map((part) => part.trim())
  return left && right ? `${right} ${left}` : value
}

let OFFICIAL_PREFIX_PATTERN =
  /^(?:the\s+)?(?:federated\s+|islamic\s+|democratic\s+|people'?s\s+|united\s+|socialist\s+|bolivarian\s+|plurinational\s+|co-?operative\s+|independent\s+|federal\s+)*(?:democratic\s+)?(?:republics?|states?|kingdom|commonwealth|union)\s+of\s+(?:the\s+)?/i

function stripOfficialPrefix(value) {
  return value.replace(OFFICIAL_PREFIX_PATTERN, "")
}

function saintAbbreviations(value) {
  let toSaint = value.replace(/\bst\.?\b/gi, "Saint")
  let toSt = value.replace(/\bsaint\b/gi, "St.")
  return [toSaint, toSt]
}

let STOP_WORDS = new Set(["and", "the"])

function dropStopWords(value) {
  return value
    .split(" ")
    .filter((word) => !STOP_WORDS.has(word))
    .join(" ")
}

let VARIANT_TRANSFORMS = [
  (value) => [stripDiacritics(value)],
  (value) => [stripParentheticals(value)],
  (value) => [flipCommaOrder(value)],
  (value) => [stripOfficialPrefix(value)],
  saintAbbreviations
]

export function countryNameVariants(countryName) {
  let trimmed = String(countryName ?? "").trim()
  if (!trimmed) return []
  let rawVariants = new Set([trimmed])
  for (let transform of VARIANT_TRANSFORMS) {
    let nextVariants = new Set(rawVariants)
    for (let current of rawVariants) {
      for (let variant of transform(current)) {
        if (variant.trim()) nextVariants.add(variant.trim())
      }
    }
    rawVariants = nextVariants
  }
  let normalizedVariants = new Set()
  for (let variant of rawVariants) {
    let normalized = normalizePhoneCountryText(variant)
    if (!normalized) continue
    normalizedVariants.add(normalized)
    let withoutStopWords = dropStopWords(normalized)
    if (withoutStopWords) normalizedVariants.add(withoutStopWords)
  }
  return [...normalizedVariants]
}

let AMBIGUOUS_MARKER = "\0ambiguous"

export function buildCountryNameVariantIndex(countries) {
  let index = new Map()
  for (let { name, iso2 } of countries) {
    if (name && iso2) {
      for (let variant of countryNameVariants(name)) {
        let existing = index.get(variant)
        if (undefined === existing) index.set(variant, iso2)
        else if (existing !== iso2) index.set(variant, AMBIGUOUS_MARKER)
      }
    }
  }
  return index
}

export function lookupCountryNameVariant(index, countryName) {
  let matchedIso2Codes = new Set()
  for (let variant of countryNameVariants(countryName)) {
    let iso2 = index.get(variant)
    if (iso2) {
      if (iso2 === AMBIGUOUS_MARKER) return ""
      matchedIso2Codes.add(iso2)
    }
  }
  return 1 === matchedIso2Codes.size ? [...matchedIso2Codes][0] : ""
}
