// @ts-nocheck
/**
 * Recruiterflow — answer shaping for dates, phone, education, and employment.
 */

import * as dayjs from "dayjs"
import * as phoneCountryCode from "../../../core/phone-country-code.js"

const dayjsDefault = { default: dayjs }

const EMPLOYMENT_KEY_MAP = {
  Start: "From",
  StartDate: "Start Date",
  End: "To",
  EndDate: "End Date",
  isCurrent: "I currently work here",
}

const EDUCATION_KEY_MAP = {
  Start: "From",
  StartDate: "Start Date",
  End: "To",
  EndDate: "End Date",
  School: "School or University",
  Study: "Field of Study",
}

function setIfEmpty(record, key, value) {
  if (
    record[key] === undefined ||
    record[key] === null ||
    String(record[key]).trim() === ""
  ) {
    record[key] = value
  }
}

function extractDialCode(text) {
  return (
    text.match(/\+\s*(\d{1,4})/)?.[1] ||
    (/^\s*\d{1,4}\s*$/.test(text) ? text.replace(/\D/g, "") : "")
  )
}

export function formatPhoneNumber(value, countryCodeAnswer) {
  const text = phoneCountryCode.resolvePhoneAnswerText(value)
  if (!text) return text
  const dial = extractDialCode(countryCodeAnswer || "")
  if (dial) {
    const dialPattern = dial.split("").join("\\s*")
    const prefixRe = RegExp(
      `^\\s*(?:\\(\\s*)?\\+\\s*${dialPattern}\\s*(?:\\))?[\\s-]*`,
    )
    if (prefixRe.test(text)) return text.replace(prefixRe, "").trim()
  }
  return text
}

function resolvePhoneCountryAnswer(answer) {
  const regular = answer.regular || {}
  const labels = [
    "Phone Country Code",
    "Country Phone Code",
    "phoneCountryCode",
    "phone_country_code",
  ]
  for (const label of labels) {
    const text = phoneCountryCode.resolvePhoneAnswerText(regular[label])
    if (text) return text
  }
  return phoneCountryCode.resolvePhoneAnswerText(
    answer.profileData?.phoneCountryCode ??
      answer.profileData?.phone_country_code ??
      answer.profile_data?.phoneCountryCode ??
      answer.profile_data?.phone_country_code,
  )
}

export function formatDate(value) {
  return value ? dayjsDefault.default(value).format("MM/DD/YYYY") : ""
}

export function formatMonthYearDate(value) {
  return value ? dayjsDefault.default(value).format("MM/YYYY") : ""
}

function formatEmploymentItem(item) {
  const next = { ...item }
  if (next?.Start) {
    next[EMPLOYMENT_KEY_MAP.Start] = next.Start
    setIfEmpty(next, EMPLOYMENT_KEY_MAP.StartDate, next.Start)
  }
  if (next?.End) {
    next[EMPLOYMENT_KEY_MAP.End] = next.End
    setIfEmpty(next, EMPLOYMENT_KEY_MAP.EndDate, next.End)
  }
  if (next?.isCurrent !== undefined) {
    next[EMPLOYMENT_KEY_MAP.isCurrent] = next.isCurrent
  }
  if (next?.Company) setIfEmpty(next, "Company Name", next.Company)
  return next
}

function formatEducationItem(item) {
  const next = { ...item }
  if (next?.Start) {
    next[EDUCATION_KEY_MAP.Start] = next.Start
    setIfEmpty(next, EDUCATION_KEY_MAP.StartDate, next.Start)
  }
  if (next?.End) {
    next[EDUCATION_KEY_MAP.End] = next.End
    setIfEmpty(next, EDUCATION_KEY_MAP.EndDate, next.End)
  }
  if (next?.School) {
    next[EDUCATION_KEY_MAP.School] = next.School
    setIfEmpty(next, "School Name", next.School)
  }
  if (next?.Study) next[EDUCATION_KEY_MAP.Study] = next.Study
  return next
}

export function formatAnswer(answer) {
  const phoneLabels = ["Phone", "phone", "Phone Number"]
  const countryCodeAnswer = resolvePhoneCountryAnswer(answer)
  if (answer.regular) {
    for (const label of phoneLabels) {
      if (answer.regular[label]) {
        answer.regular[label] = formatPhoneNumber(
          answer.regular[label],
          countryCodeAnswer,
        )
      }
    }
  }
  if (answer.workExperience && answer.workExperience.length > 0) {
    answer.workExperience = answer.workExperience.map(formatEmploymentItem)
  }
  if (answer.education && answer.education.length > 0) {
    answer.education = answer.education.map(formatEducationItem)
  }
  return answer
}
