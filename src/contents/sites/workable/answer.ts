// @ts-nocheck
/**
 * Workable answer shaping — cover letter, dates, and experience/education keys.
 */

import * as dayjs from "dayjs"
import * as coverLetter from "../../methods/cover-letter.ts"

const dayjsDefault = { default: dayjs?.default ?? dayjs }

function formatAnswer(answer, coverLetterText) {
  const result = coverLetter.applyCoverLetterTextToAnswer(answer, coverLetterText, [
    "Cover letter",
    "Cover Letter",
  ])

  if (result.regular && result.regular?.["Available Start Date"]) {
    result.regular["Available Start Date"] = dayjsDefault
      .default()
      .format("YYYY-MM-DD")
  }

  if (result.workExperience && result.workExperience.length > 0) {
    for (const item of result.workExperience) {
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

  if (result.education && result.education.length > 0) {
    for (const item of result.education) {
      if (item?.Start) {
        item["Start date"] = dayjsDefault.default(item.Start).format("MM/YYYY")
        item.From = item["Start date"]
      }
      if (item?.End) {
        item["End date"] = dayjsDefault.default(item.End).format("MM/YYYY")
        item.To = item["End date"]
      }
      if (item?.Study) item["Field of Study"] = item.Study
    }
  }

  if (
    result.regular?.["Family Law Experience"] &&
    result.regular?.["Family Law Experience"]
      .toString()
      .toLowerCase()
      .includes("no")
  ) {
    result.regular["Family Law Experience"] = "0"
  }

  return result
}

export { formatAnswer }
