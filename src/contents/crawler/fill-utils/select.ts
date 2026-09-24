// @ts-nocheck
/**
 * Select option matching: Levenshtein fuzzy best-match and exact choice lookup.
 */

import { findExactChoice } from "../../methods/choice-match.ts"

function levenshteinDistance(a, b) {
  if (a.length === 0) return b.length
  if (b.length === 0) return a.length

  const matrix = []
  for (let i = 0; i <= b.length; i++) matrix[i] = [i]
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1,
        )
      }
    }
  }

  return matrix[b.length][a.length]
}

export function fuzzyFindBest(query, nodes, options = {}) {
  if (!query || nodes.length === 0) return null

  const {
    caseSensitive = false,
    threshold = 1,
    normalize = (text) => text.trim(),
  } = options

  let normalizedQuery = normalize(query)
  if (!caseSensitive) normalizedQuery = normalizedQuery.toLowerCase()

  let best = null
  let hasTie = false

  nodes.forEach((node, index) => {
    let text = normalize(node?.textContent ?? "")
    if (!caseSensitive) text = text.toLowerCase()
    if (!text || !normalizedQuery) return

    const distance = levenshteinDistance(normalizedQuery, text)
    const maxLen = Math.max(normalizedQuery.length, text.length)
    const similarity = maxLen === 0 ? 1 : (maxLen - distance) / maxLen

    if (best && similarity >= threshold && similarity === best.similarity) {
      hasTie = true
    }
    if (similarity >= threshold && (!best || similarity > best.similarity)) {
      hasTie = false
      best = {
        bestMatch: node,
        similarity,
        distance,
        index,
      }
    }
  })

  return hasTie ? null : (best?.bestMatch ?? null)
}

export function findMatchOption(options, value = "") {
  return findExactChoice(options, value, (option) => option.textContent) ?? null
}
