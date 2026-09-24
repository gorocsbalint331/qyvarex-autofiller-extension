// @ts-nocheck
/**
 * Zoho Recruit v2 — answer shaping (dates, months, country defaults).
 */

import * as dayjs from "dayjs"
import * as enums from "../../../core/enums.js"

const dayjsDefault = { default: dayjs?.default ?? dayjs }

const MONTH_NUMBER_MAP = {
  "01": "1",
  "02": "2",
  "03": "3",
  "04": "4",
  "05": "5",
  "06": "6",
  "07": "7",
  "08": "8",
  "09": "9",
  10: "10",
  11: "11",
  12: "12",
}

const MONTH_NAME_MAP = {
  january: "1",
  february: "2",
  march: "3",
  april: "4",
  may: "5",
  june: "6",
  july: "7",
  august: "8",
  september: "9",
  october: "10",
  november: "11",
  december: "12",
  jan: "1",
  feb: "2",
  mar: "3",
  apr: "4",
  jun: "6",
  jul: "7",
  aug: "8",
  sep: "9",
  oct: "10",
  nov: "11",
  dec: "12",
}

function normalizeMonthValue(value) {
  if (!value) return value
  const text = value.toString().trim()
  const lower = text.toLowerCase()
  return MONTH_NAME_MAP[lower]
    ? MONTH_NAME_MAP[lower]
    : MONTH_NUMBER_MAP[text]
      ? MONTH_NUMBER_MAP[text]
      : text
}

function splitMonthYear(dateText) {
  if (!dateText || !dateText.includes("/")) return null
  const [month, year] = dateText.split("/")
  return {
    month: normalizeMonthValue(month),
    year,
  }
}

export function formatAnswer(answer, formRules) {
  if (answer.regular) {
    Object.keys(answer.regular).forEach((key) => {
      const keyLower = key.toLowerCase()
      if (keyLower.includes("country") || keyLower.includes("pays")) {
        if (formRules) {
          const matchingRule = formRules.find(
            (rule) => rule.label === key || rule.name === key,
          )
          if (
            matchingRule &&
            matchingRule.type === enums.FIELD_TYPE.TEXT
          ) {
            answer.regular[key] = "United States"
          }
        } else {
          answer.regular[key] = "United States"
        }
      }
      if (
        (keyLower.includes("salary") ||
          keyLower.includes("current salary") ||
          keyLower.includes("excepted salary") ||
          keyLower.includes("expected salary")) &&
        typeof answer.regular[key] == "string"
      ) {
        answer.regular[key] = answer.regular[key].replace(
          /[^0-9]/g,
          "",
        )
      }
    })
    if (answer.regular?.["Available Start Date"]) {
      answer.regular["Available Start Date"] = dayjsDefault
        .default()
        .format("YYYY-MM-DD")
    }
  }
  if (answer.workExperience && answer.workExperience.length > 0) {
    for (const experience of answer.workExperience) {
      if (experience?.Start) {
        experience["Start date"] = dayjsDefault
          .default(experience.Start)
          .format("MM/YYYY")
        experience.From = experience["Start date"]
        const parts = splitMonthYear(experience["Start date"])
        if (parts) {
          experience["Start Month"] = parts.month
          experience["Start Year"] = parts.year
        }
      }
      if (experience?.End) {
        experience["End date"] = dayjsDefault
          .default(experience.End)
          .format("MM/YYYY")
        experience.To = experience["End date"]
        const parts = splitMonthYear(experience["End date"])
        if (parts) {
          experience["End Month"] = parts.month
          experience["End Year"] = parts.year
        }
      }
      if (experience["Start Month"]) {
        experience["Start Month"] = normalizeMonthValue(
          experience["Start Month"],
        )
      }
      if (experience["End Month"]) {
        experience["End Month"] = normalizeMonthValue(
          experience["End Month"],
        )
      }
      if (experience && "isCurrent" in experience) {
        experience["I currently work here"] = experience.isCurrent
      }
    }
  }
  if (answer.education && answer.education.length > 0) {
    for (const education of answer.education) {
      if (education?.Start) {
        education["Start date"] = dayjsDefault
          .default(education.Start)
          .format("MM/YYYY")
        education.From = education["Start date"]
        const parts = splitMonthYear(education["Start date"])
        if (parts) {
          education["Start Month"] = parts.month
          education["Start Year"] = parts.year
        }
      }
      if (education?.End) {
        education["End date"] = dayjsDefault
          .default(education.End)
          .format("MM/YYYY")
        education.To = education["End date"]
        const parts = splitMonthYear(education["End date"])
        if (parts) {
          education["End Month"] = parts.month
          education["End Year"] = parts.year
        }
      }
      if (education["Start Month"]) {
        education["Start Month"] = normalizeMonthValue(
          education["Start Month"],
        )
      }
      if (education["End Month"]) {
        education["End Month"] = normalizeMonthValue(
          education["End Month"],
        )
      }
      if (education?.Study) {
        education["Field of Study"] = education.Study
      }
    }
  }
  return answer
}
