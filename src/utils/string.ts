// @ts-nocheck
/**
 * Shared string helpers for the ported ATS engine.
 * Source of truth — synced to utils/string.js for the Parcel helper bundle.
 */

/** True when `value` coerces to a finite number (including numeric strings). */
export function isStringNumber(value) {
  const numeric = Number(value)
  return !isNaN(numeric)
}

/** True when `value` parses as JSON; logs and returns false on failure. */
export function isJSONString(value) {
  try {
    JSON.parse(value)
    return true
  } catch (error) {
    console.error("isJSONString error", error)
    return false
  }
}

/** Parse JSON string; returns null and logs on failure. */
export function parsedJSONString(value) {
  try {
    return JSON.parse(value)
  } catch (error) {
    console.error("parsedJSONString error", error)
    return null
  }
}

/** Deep-clone via JSON (drops non-JSON-safe values). */
export function cleanObject(value) {
  return parsedJSONString(JSON.stringify(value))
}

/**
 * Title-case a name while preserving whitespace and hyphens
 * (e.g. "mary-jane doe" -> "Mary-Jane Doe").
 */
export function toNameTitleCase(value) {
  if (!value || typeof value !== "string") return value
  return value
    .split(/(\s+|-)/)
    .map((part) => {
      if (/^\s+$/.test(part) || part === "-" || part.length === 0) return part
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    })
    .join("")
}
