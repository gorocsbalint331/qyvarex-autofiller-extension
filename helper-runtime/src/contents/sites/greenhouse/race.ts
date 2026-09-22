// @ts-nocheck
/**
 * Greenhouse race / EEO conditional field helpers.
 */

import * as xpath from "../../../core/xpath.js"

const RACE_LABEL_SNIPPET = "please identify your race"

const RACE_CONTAINER_XPATH =
  "//div[contains(@class, 'select__container')][.//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '" +
  RACE_LABEL_SNIPPET +
  "')]]"

export const RACE_FALLBACK_OPTIONS = [
  "American Indian or Alaskan Native",
  "Asian",
  "Black or African American",
  "White",
  "Native Hawaiian or Other Pacific Islander",
  "Two or More Races",
  "Decline To Self Identify",
]

export function isGreenhouseRaceLabel(label) {
  return (
    typeof label === "string" &&
    label.toLowerCase().includes(RACE_LABEL_SNIPPET)
  )
}

export function findGreenhouseRaceContainer() {
  return xpath.getFirstOrderedNodeSafe(RACE_CONTAINER_XPATH, document)
}

/** Race rule that has no input yet (shown only after another answer). */
export function isGreenhouseConditionalRaceRule(rule) {
  return isGreenhouseRaceLabel(rule?.label) && !rule?.$input
}

export function excludeGreenhouseConditionalRaceRules(rules) {
  return rules.filter((rule) => !isGreenhouseConditionalRaceRule(rule))
}
