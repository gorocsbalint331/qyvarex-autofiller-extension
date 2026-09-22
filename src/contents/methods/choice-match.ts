/** Exact / normalized choice matching (port of engine choice-match).
 * Oracle: engine/helper-app/src/contents/methods/choice-match.js
 */

export function normalizeChoiceText(value: unknown): string {
  if (typeof value !== "string" && typeof value !== "number") return ""
  return String(value)
    .normalize("NFKC")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

export function isExactChoiceMatch(optionText: unknown, want: unknown): boolean {
  const w = normalizeChoiceText(want)
  return !!w && normalizeChoiceText(optionText) === w
}

export function findExactChoice<T>(
  items: T[],
  want: unknown,
  getLabel: (item: T) => unknown,
  getSecondary?: (item: T) => unknown
): T | undefined {
  if (!normalizeChoiceText(want)) return undefined
  const byLabel = items.filter((item) => isExactChoiceMatch(getLabel(item), want))
  if (byLabel.length === 1) return byLabel[0]
  if (byLabel.length > 1 || !getSecondary) return undefined
  const bySec = items.filter((item) =>
    isExactChoiceMatch(getSecondary(item), want)
  )
  return bySec.length === 1 ? bySec[0] : undefined
}

/** Simple fuzzy score 0–1 (token overlap + substring). */
export function fuzzyScore(a: string, b: string): number {
  const na = normalizeChoiceText(a)
  const nb = normalizeChoiceText(b)
  if (!na || !nb) return 0
  if (na === nb) return 1
  if (nb.includes(na) || na.includes(nb)) return 0.85
  const at = new Set(na.split(" ").filter(Boolean))
  const bt = nb.split(" ").filter(Boolean)
  if (!bt.length) return 0
  let hit = 0
  for (const t of bt) if (at.has(t)) hit += 1
  return hit / Math.max(at.size, bt.length)
}

export function fuzzyFindBest<T>(
  items: T[],
  want: string,
  getLabel: (item: T) => string,
  minScore = 0.45
): T | undefined {
  let best: T | undefined
  let bestScore = 0
  for (const item of items) {
    const s = fuzzyScore(want, getLabel(item))
    if (s > bestScore) {
      bestScore = s
      best = item
    }
  }
  return bestScore >= minScore ? best : undefined
}
