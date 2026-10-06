// @ts-nocheck
/**
 * Zoho Recruit — answer shaping (dates, salary, country defaults).
 */

import * as dayjs from "dayjs"

const dayjsDefault = { default: dayjs?.default ?? dayjs }

function profileCountry(answer, country) {
  const candidates = [
    country,
    answer?.profileData?.location?.country,
    answer?.profile_data?.location?.country,
    answer?.location?.country,
  ]
  for (const candidate of candidates) {
    const value = String(candidate ?? "").trim()
    if (value) return value
  }
  return ""
}

function salaryDigitsForLabel(label, rawValue) {
  const raw = String(rawValue ?? "")
  const digits = raw.replace(/[^0-9]/g, "")
  if (!digits) return ""
  const labelLower = label.toLowerCase()
  const asksMonth = labelLower.includes("month") && !labelLower.includes("hour")
  const valueSaysYear = /annual|per year|yearly|annum/i.test(raw)
  const valueSaysMonth = /per month|monthly/i.test(raw)
  const amount = Number(digits)
  if (
    asksMonth &&
    Number.isFinite(amount) &&
    (valueSaysYear || (!valueSaysMonth && amount >= 24000))
  ) {
    return String(Math.round(amount / 12))
  }
  return digits
}

export function formatAnswer(answer, country) {
  if (answer.regular) {
    const savedCountry = profileCountry(answer, country)
    Object.keys(answer.regular).forEach((key) => {
      const keyLower = key.toLowerCase()
      if (
        (keyLower.includes("country") || keyLower.includes("pays")) &&
        !isPhoneCountryCodeLabel(keyLower)
      ) {
        const existing = String(answer.regular[key] ?? "").trim()
        if (!existing && savedCountry) answer.regular[key] = savedCountry
      }
      if (
        (keyLower.includes("salary") ||
          keyLower.includes("current salary") ||
          keyLower.includes("excepted salary") ||
          keyLower.includes("expected salary")) &&
        typeof answer.regular[key] == "string"
      ) {
        answer.regular[key] = salaryDigitsForLabel(key, answer.regular[key])
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
      }
      if (experience?.End) {
        experience["End date"] = dayjsDefault
          .default(experience.End)
          .format("MM/YYYY")
        experience.To = experience["End date"]
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
      }
      if (education?.End) {
        education["End date"] = dayjsDefault
          .default(education.End)
          .format("MM/YYYY")
        education.To = education["End date"]
      }
      if (education?.Study) {
        education["Field of Study"] = education.Study
      }
    }
  }
  return answer
}

function isPhoneCountryCodeLabel(labelLower) {
  return (
    labelLower.includes("phone country code") ||
    labelLower.includes("country phone code") ||
    (labelLower.includes("phone") &&
      labelLower.includes("country") &&
      labelLower.includes("code")) ||
    (labelLower.includes("mobile") &&
      labelLower.includes("country") &&
      labelLower.includes("code"))
  )
}
