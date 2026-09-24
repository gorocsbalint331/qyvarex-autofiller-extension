// @ts-nocheck
/**
 * Exact choice matching for select / radio / checkbox labels.
 */

export function normalizeChoiceText(value) {
  if (typeof value !== "string" && typeof value !== "number") return ""
  return String(value)
    .normalize("NFKC")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

export function isExactChoiceMatch(candidate, target) {
  const normalizedTarget = normalizeChoiceText(target)
  return !!normalizedTarget && normalizeChoiceText(candidate) === normalizedTarget
}

export function findExactChoice(items, target, getPrimaryText, getFallbackText) {
  if (!normalizeChoiceText(target)) return

  const primaryHits = items.filter((item) =>
    isExactChoiceMatch(getPrimaryText(item), target),
  )
  if (primaryHits.length) {
    return primaryHits.length === 1 ? primaryHits[0] : undefined
  }

  if (!getFallbackText) return

  const fallbackHits = items.filter((item) =>
    isExactChoiceMatch(getFallbackText(item), target),
  )
  return fallbackHits.length === 1 ? fallbackHits[0] : undefined
}
