// @ts-nocheck

import * as enums from "../../../core/enums.js"
import * as answer from "./answer.ts"

export function buildGreenhouseEducationOptionDescriptors(rules) {
  return rules.map((rule) => {
    const descriptor = {
      type: rule.type,
      label: rule.label,
    }
    const normalizedLabel = rule.label?.toLowerCase().trim()
    const isEmptySchoolSearch =
      normalizedLabel === "school" &&
      rule.type === enums.FIELD_TYPE.SEARCH &&
      Array.isArray(rule.options) &&
      rule.options.length === 0
    let options = Array.isArray(rule.options) ? [...rule.options] : undefined

    if (
      normalizedLabel === "degree" &&
      (!options || options.length === 0)
    ) {
      options = answer.DEGREE_FALLBACK_OPTIONS
    }
    if (
      normalizedLabel === "discipline" &&
      (!options || options.length === 0)
    ) {
      options = answer.DISCIPLINE_FALLBACK_OPTIONS
    }
    if (isEmptySchoolSearch) {
      options = []
    }
    if (options && options.length > 0) {
      descriptor.options = options
    }
    if (isEmptySchoolSearch) {
      descriptor.options = []
    }

    return descriptor
  })
}
