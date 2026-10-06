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

const TITLE_KEYS = [
  "jobTitle",
  "job_title",
  "Title",
  "Job Title",
  "Position",
  "Role",
  "Occupation",
  "Occupation / Title",
  "Occupation/Title",
  "designation",
]
const COMPANY_KEYS = [
  "companyName",
  "organization",
  "organisation",
  "Company",
  "Company Name",
  "Employer",
  "Employer Name",
  "employerName",
  "company",
]

function firstRecordText(record, keys) {
  const wanted = new Set(
    keys.map((key) => key.toLowerCase().replace(/[^a-z0-9]+/g, "")),
  )
  for (const key of Object.keys(record || {})) {
    const norm = key.toLowerCase().replace(/[^a-z0-9]+/g, "")
    if (!wanted.has(norm)) continue
    const value = record[key]
    if (typeof value === "string" && value.trim()) return value.trim()
  }
  return ""
}

export function valueForEducationLabel(label, record) {
  const norm = String(label || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
  if (/\b(school|institute|university|college|academy)\b/.test(norm)) {
    return firstRecordText(record, [
      "School",
      "School Name",
      "Institute",
      "organization",
      "schoolName",
    ])
  }
  if (/\b(degree|qualification|diploma)\b/.test(norm)) {
    return firstRecordText(record, ["Degree", "degree", "accreditation"])
  }
  if (/\b(major|department|field|study|discipline)\b/.test(norm)) {
    return firstRecordText(record, [
      "Major",
      "Field of Study",
      "Study",
      "major",
      "degree",
    ])
  }
  if (/\bgpa\b|\bgrade\b/.test(norm)) {
    return firstRecordText(record, ["GPA", "gpa"])
  }
  return ""
}

function alignEducationRecord(record) {
  if (!record || typeof record !== "object") return record
  const dates =
    record.dates && typeof record.dates === "object" ? record.dates : {}
  const startRaw = record.Start || record.startDate || dates.start_date
  const endRaw = record.End || record.endDate || dates.completion_date
  if (startRaw && !record.Start) record.Start = startRaw
  if (endRaw && !record.End) record.End = endRaw
  if (!("isCurrent" in record) && dates.is_current != null) {
    record.isCurrent = dates.is_current
  }
  const school = valueForEducationLabel("School", record)
  const degree = valueForEducationLabel("Degree", record)
  if (school) record.School = record.School || school
  if (degree) record.Degree = record.Degree || degree
  return record
}

export function valueForExperienceLabel(label, record) {
  const norm = String(label || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
  if (/\b(summary|description|duties|responsibilit)\b/.test(norm)) {
    return resumeWorkSummary(record)
  }
  if (/\b(company|employer|organization|organisation|firm)\b/.test(norm)) {
    return firstRecordText(record, COMPANY_KEYS)
  }
  if (/\b(title|position|role|designation|occupation)\b/.test(norm)) {
    return firstRecordText(record, TITLE_KEYS)
  }
  return ""
}

function resumeSourceJobs(answer) {
  const pools = [
    answer?.profileData?.workExperience,
    answer?.profile_data?.workExperience,
    answer?.profileData?.Employment,
    answer?.profile_data?.Employment,
  ]
  for (const pool of pools) {
    if (!Array.isArray(pool)) continue
    if (
      pool.some(
        (item) =>
          Array.isArray(item?.job_descriptions) ||
          Array.isArray(item?.descriptions),
      )
    ) {
      return pool
    }
  }
  return []
}

function bulletsForJob(record, jobs) {
  const company = firstRecordText(record, COMPANY_KEYS).toLowerCase()
  const title = firstRecordText(record, TITLE_KEYS).toLowerCase()
  const job = jobs.find((item) => {
    const org = String(
      item?.organization || item?.companyName || item?.company || item?.Company || "",
    )
      .trim()
      .toLowerCase()
    const role = String(
      item?.job_title || item?.jobTitle || item?.title || item?.Title || "",
    )
      .trim()
      .toLowerCase()
    if (company && org && org === company) return true
    return !!(title && role && role === title)
  })
  const list = job?.job_descriptions || job?.descriptions
  if (!Array.isArray(list)) return ""
  return list
    .map((item) => String(item ?? "").trim())
    .filter(Boolean)
    .join("\n")
}

export function resumeWorkSummary(record) {
  const lists = [
    record?.job_descriptions,
    record?.descriptions,
    record?.jobDescriptions,
  ]
  for (const list of lists) {
    if (!Array.isArray(list)) continue
    const lines = list
      .map((item) => String(item ?? "").trim())
      .filter(Boolean)
    if (lines.length) return lines.join("\n")
  }
  return firstRecordText(record, [
    "summary",
    "Summary",
    "Description",
    "description",
  ])
}

function alignWorkRecord(record) {
  if (!record || typeof record !== "object") return record
  const title = firstRecordText(record, TITLE_KEYS)
  const company = firstRecordText(record, COMPANY_KEYS)
  if (title) {
    record["Occupation / Title"] = record["Occupation / Title"] || title
    record["Occupation/Title"] = record["Occupation/Title"] || title
    record["Job Title"] = record["Job Title"] || title
    record.Title = record.Title || title
    record.jobTitle = record.jobTitle || title
  }
  if (company) {
    record.Company = record.Company || company
    record["Company Name"] = record["Company Name"] || company
    record.organization = record.organization || company
    record.companyName = record.companyName || company
  }
  const resumeSummary = resumeWorkSummary(record)
  if (resumeSummary) {
    record.Summary = resumeSummary
    record.summary = resumeSummary
    record.Description = resumeSummary
  }
  const dates =
    record.dates && typeof record.dates === "object" ? record.dates : {}
  const startRaw = record.Start || record.startDate || dates.start_date
  const endRaw = record.End || record.endDate || dates.completion_date
  if (startRaw && !record.Start) record.Start = startRaw
  if (endRaw && !record.End) record.End = endRaw
  if (!("isCurrent" in record) && dates.is_current != null) {
    record.isCurrent = dates.is_current
  }
  return record
}

function yearsNumber(rawValue) {
  const text = String(rawValue ?? "")
  const range = text.match(/(\d+)\s*[-–—to]+\s*(\d+)/i)
  if (range) {
    return String(Math.round((Number(range[1]) + Number(range[2])) / 2))
  }
  const single = text.match(/(\d+)/)
  return single ? single[1] : ""
}

function noticeWeeks(rawValue) {
  const text = String(rawValue ?? "").trim().toLowerCase()
  if (!text) return ""
  if (/immediate|none|no notice|asap/.test(text)) return "0"
  const amount = text.match(/(\d+(?:\.\d+)?)/)
  if (!amount) return ""
  const value = Number(amount[1])
  if (!Number.isFinite(value)) return ""
  if (/month/.test(text)) return String(Math.round(value * 4))
  if (/day/.test(text)) return String(Math.max(0, Math.round(value / 7)))
  if (/year/.test(text)) return String(Math.round(value * 52))
  return String(Math.round(value))
}

export function coerceRegularValue(label, rawValue, maxLength = 0) {
  const key = String(label || "").toLowerCase()
  let text = String(rawValue ?? "").trim()
  if (/notice/.test(key) && /week/.test(key)) {
    text = noticeWeeks(text)
  } else if (/year/.test(key) && /experience/.test(key)) {
    text = yearsNumber(text)
  }
  const limit = Number(maxLength)
  if (limit > 0 && text.length > limit) {
    const digits = text.replace(/\D/g, "")
    text = digits ? digits.slice(0, limit) : text.slice(0, limit)
  }
  return text
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
    const location =
      answer.profileData?.location ||
      answer.profile_data?.location ||
      answer.location ||
      {}
    const locationCopies = {
      City: location.city,
      "State/Province": location.state || location.province,
      State: location.state || location.province,
      Country: location.country,
    }
    for (const [key, value] of Object.entries(locationCopies)) {
      if (!String(answer.regular[key] ?? "").trim() && String(value ?? "").trim()) {
        answer.regular[key] = String(value).trim()
      }
    }
    if (answer.regular?.["Available Start Date"]) {
      answer.regular["Available Start Date"] = dayjsDefault
        .default()
        .format("YYYY-MM-DD")
    }
  }
  if (answer.workExperience && answer.workExperience.length > 0) {
    const sourceJobs = resumeSourceJobs(answer)
    for (const experience of answer.workExperience) {
      alignWorkRecord(experience)
      const bullets = bulletsForJob(experience, sourceJobs)
      if (bullets) {
        experience.job_descriptions = bullets.split("\n")
        experience.summary = bullets
        experience.Summary = bullets
        experience.Description = bullets
      }
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
      alignEducationRecord(education)
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
