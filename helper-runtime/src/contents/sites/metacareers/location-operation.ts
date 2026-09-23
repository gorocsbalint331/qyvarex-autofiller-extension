// @ts-nocheck
/**
 * Meta Careers — current-location field detection and value helpers.
 */

import * as profileLocationOriginalAnswer from "../profile-location-original-answer.ts"
import * as enums from "../../../core/enums.js"

function normalizeLocationLabel(label) {
  return typeof label === "string"
    ? label
        .replace(/\s*\*+\s*$/, "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase()
    : ""
}

export function isMetaCurrentLocationRule(rule) {
  if (
    rule.type !== enums.FIELD_TYPE.TEXT ||
    normalizeLocationLabel(rule.label) !== "current location"
  ) {
    return false
  }
  const input = rule.$input
  return (
    input.tagName.toUpperCase() === "BUTTON" &&
    input.getAttribute("role") === "combobox" &&
    normalizeLocationLabel(input.getAttribute("aria-label")) ===
      "current location"
  )
}

export function getMetaCurrentLocationOriginalAnswer(answer, regularValue) {
  const profileValue =
    profileLocationOriginalAnswer.getProfileLocationOriginalAnswer(answer)
      .value
  if (profileValue) return profileValue
  const first = Array.isArray(regularValue) ? regularValue[0] : regularValue
  return typeof first === "string" ? first.trim() : ""
}

export function getMetaResolvedLocationValue(resolveResult) {
  if (resolveResult?.action !== "SELECT_OPTIONS") return ""
  const first = resolveResult.selected_values[0]
  return typeof first === "string" ? first.trim() : ""
}
