// @ts-nocheck
/**
 * Ashby — native <select> option value matching.
 */

function normalizeSelectText(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

export function resolveAshbyNativeSelectOptionValue(answer, options) {
  let wanted = normalizeSelectText(answer)
  if (!wanted) return null

  let enabled = options.filter((opt) => !opt.disabled && !opt.hidden)
  for (let opt of enabled) {
    if (
      normalizeSelectText(opt.value) === wanted ||
      normalizeSelectText(opt.text) === wanted
    ) {
      return opt.value
    }
  }
  return null
}
