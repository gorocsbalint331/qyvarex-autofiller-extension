// @ts-nocheck
/**
 * Field-label normalize / compare helpers for ATS form matching.
 */

export function normalizeFieldLabel(label, options = {}) {
  const normalized = String(label ?? "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s*\/\s*/g, " / ")
    .replace(/\s*\*\s*/g, "")
    .trim()
    .toLowerCase()
  return options.loose
    ? normalized
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, " ")
        .trim()
    : normalized
}

export function buildNormalizedFieldLabelSet(labels = [], options = {}) {
  return new Set(labels.map((label) => normalizeFieldLabel(label, options)))
}

export function formatFieldLabelForDisplay(label) {
  return String(label ?? "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .replace(/(?:\s*\*)+\s*$/g, "")
    .trim()
}

export function removeFieldLabelSpecialCharacters(label) {
  return normalizeFieldLabel(label, { loose: true }).replace(/\s/g, "")
}
