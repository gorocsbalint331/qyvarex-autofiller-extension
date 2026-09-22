// @ts-nocheck
/**
 * ADP Recruiting — shape Falcon answers (state names, dates, education/experience).
 */

import * as dayjs from "dayjs"
import * as constants from "../../../constants.ts"

const dayjsDefault = { default: dayjs }

function isBlank(value) {
  if (Array.isArray(value)) return value.every(isBlank)
  return String(value ?? "").trim() === ""
}

function normalizeStateName(raw) {
  const first = Array.isArray(raw) ? raw.find((item) => !isBlank(item)) : raw
  const text = String(first ?? "").trim()
  if (!text) return ""

  const abbr = text.replace(/\./g, "").toUpperCase()
  if (constants.STATE_MAP[abbr]) return constants.STATE_MAP[abbr]

  const lower = text.toLowerCase()
  return (
    Object.values(constants.STATE_MAP).find(
      (name) => name.toLowerCase() === lower,
    ) || ""
  )
}

function isStateLikeLabel(label) {
  const key = label.replace(/[^a-z]/gi, "").toLowerCase()
  return [
    "state",
    "stateprovince",
    "stateprov",
    "stateregion",
    "stateterritory",
  ].includes(key)
}

/** Mutates and returns the Falcon answer for ADP Recruiting labels. */
export function formatAnswer(answer) {
  if (answer.regular) {
    const profileState = normalizeStateName(answer.state)
    const stateKeys = Object.keys(answer.regular).filter(isStateLikeLabel)

    for (const key of stateKeys) {
      const normalized = normalizeStateName(answer.regular[key])
      if (normalized) {
        answer.regular[key] = normalized
      } else if (isBlank(answer.regular[key]) && profileState) {
        answer.regular[key] = profileState
      }
    }

    if (profileState && stateKeys.length === 0) {
      answer.regular.State = profileState
    }

    if (answer.regular?.["Available Start Date"]) {
      answer.regular["Available Start Date"] = dayjsDefault.default().format(
        "YYYY-MM-DD",
      )
    }
  }

  if (answer.workExperience?.length > 0) {
    for (const item of answer.workExperience) {
      if (item?.Start) {
        item["Start date"] = dayjsDefault.default(item.Start).format("MM/YYYY")
        item.From = item["Start date"]
      }
      if (item?.End) {
        item["End date"] = dayjsDefault.default(item.End).format("MM/YYYY")
        item.To = item["End date"]
      }
      if (item && "isCurrent" in item) {
        item["I currently work here"] = item.isCurrent
      }
    }
  }

  if (answer.education?.length > 0) {
    for (const item of answer.education) {
      if (item?.Start) {
        item["Start date"] = dayjsDefault.default(item.Start).format("MM/YYYY")
        item.From = item["Start date"]
      }
      if (item?.End) {
        item["End date"] = dayjsDefault.default(item.End).format("MM/YYYY")
        item.To = item["End date"]
      }
      if (item?.Study) {
        item["Field of Study"] = item.Study
      }
    }
  }

  return answer
}
