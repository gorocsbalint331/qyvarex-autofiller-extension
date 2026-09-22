// @ts-nocheck
/**
 * ADP WorkforceNow / MyJobs — country option matching helpers.
 */

const COUNTRY_ALIASES = [
  ["us", "usa", "united states", "united states of america"],
  ["ca", "canada"],
  ["uk", "gb", "great britain", "united kingdom"],
]

function normalizeCountryText(value) {
  return (value || "").replace(/\s+/g, " ").trim().toLowerCase()
}

function findAliasGroup(normalized) {
  return COUNTRY_ALIASES.find((group) => group.some((alias) => alias === normalized)) ?? null
}

/** True when option text/value matches the answer country (including US/CA/UK aliases). */
export function isAdpCountryOptionMatch(answer, optionText, optionValue) {
  const wanted = normalizeCountryText(answer)
  if (!wanted) return false

  const aliases = findAliasGroup(wanted) ?? [wanted]
  const text = normalizeCountryText(optionText)
  const value = normalizeCountryText(optionValue)
  return [text, value].some(
    (candidate) => candidate.length > 0 && aliases.includes(candidate),
  )
}
