// @ts-nocheck
/**
 * Dover-specific country field normalization for autofill payloads.
 */

function normalizeCountryDisplayName(value) {
  const trimmed = String(value ?? "").trim()
  if (!trimmed) return null

  const normalized = trimmed
    .replace(/\./g, "")
    .replace(/\s+/g, " ")
    .toLowerCase()

  if (
    normalized === "us" ||
    normalized === "usa" ||
    normalized === "united states" ||
    normalized === "united states of america"
  ) {
    return "United States"
  }

  if (normalized === "ca" || normalized === "canada") {
    return "Canada"
  }

  return trimmed
}

function isDoverCountryFieldLabel(label) {
  const normalized = String(label ?? "")
    .replace(/\*/g, "")
    .replace(/[\/_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()

  if (!normalized) return false
  if (
    normalized.includes("phone") ||
    normalized.includes("dial") ||
    normalized.includes("code")
  ) {
    return false
  }

  return (
    normalized === "country" ||
    normalized === "country region" ||
    normalized === "country territory" ||
    normalized === "country of residence" ||
    normalized === "residence country" ||
    normalized === "current country"
  )
}

export function getDoverCountryFillValue(value) {
  return normalizeCountryDisplayName(value)
}

export function applyDoverCountryFromAutofillInfo(userInfo, formRules, country) {
  const fillValue = getDoverCountryFillValue(country)
  if (!fillValue) return

  for (const key of Object.keys(userInfo)) {
    if (isDoverCountryFieldLabel(key)) userInfo[key] = fillValue
  }

  for (const rule of formRules) {
    if (isDoverCountryFieldLabel(rule.label)) userInfo[rule.label] = fillValue
  }
}
