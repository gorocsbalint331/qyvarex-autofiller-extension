// @ts-nocheck
/**
 * Normalize Greenhouse date-related field labels (start/end month/year).
 */

function stripAsterisks(value) {
  return String(value ?? "")
    .replace(/[*\uff0a]/g, "")
    .trim()
    .replace(/\s+/g, " ")
}

function normalizeLower(value) {
  return stripAsterisks(value).toLowerCase()
}

/**
 * Canonicalize start/end month/year labels from raw label, input id, or aria-label.
 */
export function normalizeGreenhouseFieldLabel({
  rawLabel,
  inputId,
  inputAriaLabel,
}) {
  const cleaned = stripAsterisks(rawLabel)
  const id = String(inputId ?? "")
    .trim()
    .toLowerCase()
  const aria = normalizeLower(inputAriaLabel)
  const label = normalizeLower(cleaned)

  if (
    /^start(?:-date)?-year\b/.test(id) ||
    label === "start year" ||
    aria === "start year" ||
    label === "start date year" ||
    aria === "start date year"
  ) {
    return "Start date year"
  }
  if (
    /^end(?:-date)?-year\b/.test(id) ||
    label === "end year" ||
    aria === "end year" ||
    label === "end date year" ||
    aria === "end date year"
  ) {
    return "End date year"
  }
  if (
    /^start(?:-date)?-month\b/.test(id) ||
    label === "start month" ||
    aria === "start month" ||
    label === "start date month" ||
    aria === "start date month"
  ) {
    return "Start date month"
  }
  if (
    /^end(?:-date)?-month\b/.test(id) ||
    label === "end month" ||
    aria === "end month" ||
    label === "end date month" ||
    aria === "end date month"
  ) {
    return "End date month"
  }
  return cleaned
}
