// @ts-nocheck
/**
 * Careers Toasttab — phone country-code answer matching helpers.
 */

function normalizeLabel(value) {
  return value.toLowerCase().replace(/[()]/g, "").replace(/\s+/g, " ").trim()
}

function normalizeLabelWithoutDialCode(value) {
  return normalizeLabel(value)
    .replace(/\+\d+/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
}

export function findCountryCodeForAnswer(answer, countries) {
  const normalized = normalizeLabel(answer)
  if (!normalized) return null

  const exactMatches = countries.filter(
    (country) => normalizeLabel(country.label) === normalized,
  )
  if (exactMatches.length === 1) return exactMatches[0].countryCode

  const dialCode = normalized.match(/\+\d+/)?.[0]
  const labelWithoutDial = normalizeLabelWithoutDialCode(normalized)

  if (labelWithoutDial) {
    const fuzzyMatches = countries.filter((country) => {
      const countryLabel = normalizeLabelWithoutDialCode(country.label)
      const labelMatches =
        countryLabel === labelWithoutDial ||
        countryLabel.includes(labelWithoutDial) ||
        labelWithoutDial.includes(countryLabel)
      return labelMatches && (!dialCode || country.dialCode === dialCode)
    })
    return fuzzyMatches.length === 1 ? fuzzyMatches[0].countryCode : null
  }

  const dialMatches = countries.filter(
    (country) => country.dialCode === dialCode,
  )
  return dialMatches.length === 1 ? dialMatches[0].countryCode : null
}
