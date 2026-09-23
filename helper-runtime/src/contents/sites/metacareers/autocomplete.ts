// @ts-nocheck
/**
 * Meta Careers — autocomplete / popover option matching helpers.
 */

import * as choiceMatch from "../../methods/choice-match.js"

export const normalizeAutocompleteText = (text) =>
  text.replace(/\s+/g, " ").trim().toLowerCase()

const normalizeCommaSeparatedText = (text) =>
  normalizeAutocompleteText(text.replace(/\s*,\s*/g, ", "))

export const findExactMetaPopoverOption = (options, targetText) => {
  const normalizedTarget = normalizeCommaSeparatedText(targetText)
  if (!normalizedTarget) return null
  return (
    options.find(
      (option) =>
        normalizeCommaSeparatedText(option.textContent || "") ===
        normalizedTarget,
    ) ?? null
  )
}

const formatCandidateText = (text) =>
  text.replace(/\s+/g, " ").replace(/\s*,\s*/g, ", ").trim()

export const buildMetaAutocompleteCandidates = (label, value) => {
  const candidates = []
  const pushUnique = (raw) => {
    const formatted = formatCandidateText(raw)
    if (formatted && !candidates.includes(formatted)) {
      candidates.push(formatted)
    }
  }
  pushUnique(value)
  if (label?.toLowerCase().includes("location")) {
    const cityOnly = formatCandidateText(value).split(",")[0]?.trim()
    if (cityOnly) pushUnique(cityOnly)
  }
  return candidates
}

export const findBestPopoverOption = (
  options,
  candidates,
  allowPrefixMatch = false,
) => {
  const normalizedCandidates = candidates
    .map(normalizeAutocompleteText)
    .filter(Boolean)

  for (const candidate of normalizedCandidates) {
    const exactMatches = options.filter((option) =>
      choiceMatch.isExactChoiceMatch(option.textContent, candidate),
    )
    if (exactMatches.length > 1) return null
    if (exactMatches.length === 1) return exactMatches[0]
  }

  if (!allowPrefixMatch) return null

  for (const candidate of normalizedCandidates) {
    const parts = candidate.split(",").map((part) => part.trim())
    if (parts.some((part) => !part)) continue

    const prefixMatches = options.filter((option) => {
      const optionParts = String(option.textContent || "")
        .split(",")
        .map((part) => part.trim())
      return (
        optionParts.length > parts.length &&
        parts.every((part, index) =>
          choiceMatch.isExactChoiceMatch(optionParts[index], part),
        )
      )
    })
    if (prefixMatches.length > 1) break
    if (prefixMatches.length === 1) return prefixMatches[0]
  }

  return null
}
