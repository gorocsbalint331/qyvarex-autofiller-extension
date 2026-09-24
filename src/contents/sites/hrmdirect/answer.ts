// @ts-nocheck
/**
 * HRMDirect — date formatting and answer shaping.
 */

import * as dayjs from "dayjs"
import * as customParseFormat from "dayjs/plugin/customParseFormat"
import * as constants from "../../../constants.ts"

const dayjsDefault = { default: dayjs?.default ?? dayjs }
const customParseFormatDefault = { default: customParseFormat?.default ?? customParseFormat }

dayjsDefault.default.extend(customParseFormatDefault.default)

export function formatDate(value) {
  let parsed
  if (!value) return ""

  if (typeof value === "string") {
    if (value.match(/^\d{2}\/\d{2}\/\d{4}$/)) return value
    parsed = value.match(/^\d{4}-\d{2}$/)
      ? dayjsDefault.default(value + "-01")
      : dayjsDefault.default(value)
  } else {
    parsed = dayjsDefault.default(value)
  }

  return parsed.isValid()
    ? parsed.format("MM/DD/YYYY")
    : typeof value === "string"
      ? value
      : ""
}

export function formatAnswer(answer) {
  if (answer.regular && constants.STATE_MAP[answer.state]) {
    answer.regular.State =
      constants.STATE_MAP[answer.state] ?? answer.regular.State
  }

  if (answer.workExperience && answer.workExperience.length > 0) {
    for (const item of answer.workExperience) {
      if (item?.isCurrent !== undefined) {
        const isCurrent =
          item.isCurrent === true ||
          item.isCurrent === "true" ||
          item.isCurrent === "True" ||
          item.isCurrent === 1 ||
          item.isCurrent === "1"
        if (isCurrent) {
          item["End Date"] = "current"
          continue
        }
      }
    }

    for (const item of answer.education) {
      if (item?.["College (years completed)"] && item?.Start && item?.End) {
        item["College (years completed)"] =
          parseInt(formatDate(item.End).slice(6, 10)) -
          parseInt(formatDate(item.Start).slice(6, 10))
      }
    }
  }

  return answer
}
