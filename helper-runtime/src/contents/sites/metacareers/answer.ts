// @ts-nocheck
/**
 * Meta Careers — answer formatting before fill.
 */

import * as enums from "../../../core/enums.js"

const isLocationCheckboxRule = (rule) =>
  rule.type === enums.FIELD_TYPE.CHECKBOX &&
  /select one or more locations/i.test(rule.label)

const hasNonEmptyAnswer = (value) =>
  Array.isArray(value)
    ? value.some((item) => String(item ?? "").trim() !== "")
    : String(value ?? "").trim() !== ""

const firstNonEmptyOption = (rule) => {
  const options = "options" in rule ? rule.options : undefined
  if (!Array.isArray(options)) return null
  for (const option of options) {
    const text = String(option ?? "").trim()
    if (text) return text
  }
  return null
}

const ensureLocationCheckboxDefault = (answer, formRules) => {
  answer.regular = answer.regular || {}
  const locationRule = formRules.find(isLocationCheckboxRule)
  if (!locationRule || hasNonEmptyAnswer(answer.regular[locationRule.label])) {
    return
  }
  const defaultOption = firstNonEmptyOption(locationRule)
  if (defaultOption) {
    answer.regular[locationRule.label] = [defaultOption]
  }
}

export function formatAnswer(answer, formRules = []) {
  ensureLocationCheckboxDefault(answer, formRules)
  if (
    answer.workExperience.length > 0 &&
    answer.regular["Are you applying for your first job?"] === "Yes"
  ) {
    answer.regular["Are you applying for your first job?"] = "No"
  }
  return answer
}
