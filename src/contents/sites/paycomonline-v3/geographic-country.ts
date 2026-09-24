// @ts-nocheck
/**
 * Paycom Online v3 — geographic country control matching helpers.
 */

const COUNTRY_FIELD_SELECTOR =
  '[data-testid="personal-information-country-field-CountryList"]'

export function isPaycomMainGeographicCountryButton(button) {
  return (
    !!button.getAttribute("aria-label")?.includes("Country combo box") &&
    !!button.closest(COUNTRY_FIELD_SELECTOR)
  )
}

function normalizeCountryKey(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\([^)]*\)/g, " ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ")
}

function canonicalizeCountryKey(value) {
  const key = normalizeCountryKey(value).replace(/\s+/g, "")
  if (["us", "usa", "unitedstates", "unitedstatesofamerica"].includes(key))
    return "us"
  if (["ca", "canada"].includes(key)) return "ca"
  if (["gb", "uk", "greatbritain", "unitedkingdom"].includes(key)) return "gb"
  return key
}

export function formatPaycomGeographicCountrySearch(value) {
  const key = canonicalizeCountryKey(value)
  if (key === "us") return "United States"
  if (key === "ca") return "Canada"
  if (key === "gb") return "United Kingdom"
  return String(value ?? "").trim()
}

export function findPaycomGeographicCountryOption(options, value) {
  const key = canonicalizeCountryKey(value)
  if (!key) return null
  const matches = options.filter(
    (option) => canonicalizeCountryKey(option.textContent) === key,
  )
  return matches.length === 1 ? matches[0] : null
}

export function isPaycomGeographicCountrySelectionMatch(button, value) {
  const key = canonicalizeCountryKey(value)
  if (!key) return false
  const ariaLabel = button.getAttribute("aria-label") || ""
  const selectedLabel = ariaLabel
    .replace(/^Country combo box\s*,?\s*/i, "")
    .replace(/\s+selected\.?\s*$/i, "")
  return [button.textContent || "", selectedLabel].some(
    (text) => canonicalizeCountryKey(text) === key,
  )
}

export {
  findPaycomGeographicCountryOption as findPaycomGeographicCountryOptionForTests,
  formatPaycomGeographicCountrySearch as formatPaycomGeographicCountrySearchForTests,
  isPaycomGeographicCountrySelectionMatch as isPaycomGeographicCountrySelectionMatchForTests,
  isPaycomMainGeographicCountryButton as isPaycomMainGeographicCountryButtonForTests,
}
