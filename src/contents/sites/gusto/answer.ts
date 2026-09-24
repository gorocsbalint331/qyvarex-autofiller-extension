// @ts-nocheck
/**
 * Gusto — date answer lookup and fill-handler helpers.
 */

import * as filler from "../../shared/filler.ts"
import * as answerMethods from "../../methods/answer.ts"

export function getDateValueFromRecord(label, record) {
  let matched
  for (const key in record) {
    if (answerMethods.isMatched(label, key)) {
      matched = record[key]
      break
    }
  }

  if (matched == null || matched === "") {
    throw new filler.ValueError(`No matching field for label: ${label}`)
  }

  if (
    typeof matched === "object" &&
    matched !== null &&
    !Array.isArray(matched) &&
    Object.prototype.toString.call(matched) === "[object Object]" &&
    ("start" in matched || "end" in matched)
  ) {
    return matched
  }

  const text = String(matched).trim()
  if (text === "" || text === "[object Object]") {
    throw new filler.ValueError(
      `Field for label '${label}' resulted in an empty or invalid value`,
    )
  }
  return text
}

export function createDateFillHandler({
  fillInputTextField,
  updateFilledProgress,
  updateMissedProgress,
}) {
  return async (rule, answers, trackProgress = true) => {
    if (!rule?.$input) return

    try {
      const value = getDateValueFromRecord(rule.label, answers)
      await fillInputTextField(rule.$input, value)
      if (trackProgress) updateFilledProgress(rule.label)
    } catch (error) {
      if (error instanceof filler.ValueError) {
        if (trackProgress) updateMissedProgress(rule.label)
      } else {
        console.error("[gusto][DATE]", error)
      }
    }
  }
}

const SKIPPABLE_INPUT_TYPES = ["hidden", "submit", "button", "reset", "file"]

export function isSkippableInput(input) {
  const type = (input.type || "").toLowerCase()
  return !!SKIPPABLE_INPUT_TYPES.includes(type) || input.disabled
}
