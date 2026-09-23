// @ts-nocheck
/**
 * Normalize free-text country input to a COUNTRY_OPTIONS value.
 */

import * as country from "../constants/country.ts"

const COUNTRY_ALIASES = {
  us: "United States",
  usa: "United States",
  "united states of america": "United States",
  ca: "Canada",
  gb: "United Kingdom",
  uk: "United Kingdom",
  "great britain": "United Kingdom",
  turkey: "Turkiye",
  turkiye: "Turkiye",
  in: "India",
}

function stripDiacritics(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export function normalizeCountryInput(input) {
  const trimmed = (input ?? "").trim()
  if (!trimmed) return ""

  const key = stripDiacritics(trimmed).toLowerCase()
  const alias = COUNTRY_ALIASES[key]
  const needle = (alias ? alias : key).toLowerCase()

  const match = country.COUNTRY_OPTIONS.find((option) => {
    const value = stripDiacritics(option.value).toLowerCase()
    const label = stripDiacritics(option.label).toLowerCase()
    return value === needle || label === needle
  })
  return match?.value ?? ""
}
