// @ts-nocheck
/**
 * Taleo — answer shaping for country, dates, education, and work experience.
 */

import * as dayjs from "dayjs"

const dayjsDefault = { default: dayjs?.default ?? dayjs }

function normalizeCountry(value) {
  const text = String(value ?? "")
    .trim()
    .toLowerCase()
  return text
    ? "canada" === text || "ca" === text
      ? "Canada"
      : "united states" === text ||
          "united states of america" === text ||
          "usa" === text ||
          "us" === text
        ? "United States"
        : ""
    : ""
}

function parseTaleoDateValue(value) {
  const text = String(value ?? "").trim()
  if (!text) return null
  if (/^\d{4}-\d{2}$/.test(text)) return dayjsDefault.default(`${text}-01`)
  if (/^\d{4}\/\d{2}$/.test(text)) {
    return dayjsDefault.default(text.replace("/", "-") + "-01")
  }
  if (/^\d{4}$/.test(text)) return dayjsDefault.default(`${text}-01-01`)
  const parsed = dayjsDefault.default(text)
  return parsed.isValid() ? parsed : null
}

function formatClassicTaleoDateValue(value) {
  const text = String(value ?? "").trim()
  if (!text) return ""
  const parsed = parseTaleoDateValue(text)
  return parsed ? parsed.format("MMM D, YYYY") : text
}

function formatTaleoDatepickerInputValue(value) {
  const text = String(value ?? "").trim()
  if (!text) return ""
  const parsed = parseTaleoDateValue(text)
  return parsed ? parsed.format("MM/DD/YYYY") : text
}

function formatWorkExperienceDates(items) {
  return Array.isArray(items)
    ? items.map((item) => {
        const next = { ...item }
        const start = String(next.Start ?? next["Start Date"] ?? "").trim()
        if (start && !next.Start) next.Start = start
        if (start) {
          const parsed = dayjsDefault.default(start)
          if (parsed.isValid()) {
            next["Date From Month"] = [parsed.format("MMMM")]
            next["Date From Year"] = [parsed.format("YYYY")]
          }
        }
        const end = String(next.End ?? next["End Date"] ?? "").trim()
        if (end && !next.End) next.End = end
        if (end) {
          const parsed = dayjsDefault.default(end)
          if (parsed.isValid()) {
            next["Date To Month"] = [parsed.format("MMMM")]
            next["Date To Year"] = [parsed.format("YYYY")]
          }
        }
        return next
      })
    : []
}

function formatEducationType1(items) {
  if (!Array.isArray(items)) return []
  const resolveSchoolType = (item) => {
    const level = String(
      item["Education Level"] ||
        item["Highest Degree Achieved"] ||
        item.Degree ||
        item.rawDegree ||
        "",
    )
      .trim()
      .toLowerCase()
    return level
      ? level.includes("master") ||
        level.includes("mba") ||
        level.includes("doctor") ||
        level.includes("phd") ||
        level.includes("graduate")
        ? "Graduate Schools"
        : level.includes("technical") || level.includes("trade")
          ? "Technical or Vocational Schools"
          : level.includes("high school") || level.includes("ged")
            ? "High School or GED"
            : "Undergraduate Colleges or Universities"
      : ""
  }
  return items.map((item) => {
    const next = { ...item }
    if (!next.Institution) {
      next.Institution = next.School || next["School Name"] || ""
    }
    if (!next["Field of Study/Major"]) {
      next["Field of Study/Major"] =
        next["Major Field of Study"] ||
        next.Study ||
        next.Program ||
        next.rawMajor ||
        ""
    }
    if (!next["Major Field of Study"]) {
      next["Major Field of Study"] =
        next["Field of Study/Major"] ||
        next.Study ||
        next.Program ||
        next.rawMajor ||
        ""
    }
    if (!next.Study) {
      next.Study =
        next["Major Field of Study"] ||
        next["Field of Study/Major"] ||
        next.Program ||
        next.rawMajor ||
        ""
    }
    if (!next["Education Level"]) {
      next["Education Level"] = next["Highest Degree Achieved"] || next.Degree || ""
    }
    if (!next["Type of School"]) next["Type of School"] = resolveSchoolType(next)
    return next
  })
}

function formatWorkExperienceType1(items) {
  return Array.isArray(items)
    ? items.map((item) => {
        const next = { ...item }
        if (!next["Employer Name"]) {
          next["Employer Name"] =
            next.Employer || next["Company Name"] || next.Company || ""
        }
        if (!next["Company Name"]) {
          next["Company Name"] =
            next.Company || next.Employer || next["Employer Name"] || ""
        }
        if (!next["Position Title"]) {
          next["Position Title"] =
            next.Title || next["Job Title"] || next.jobTitle || ""
        }
        if (!next.Title) {
          next.Title =
            next["Position Title"] || next["Job Title"] || next.jobTitle || ""
        }
        if (!next.State && next["State/Province"]) {
          next.State = next["State/Province"]
        }
        if (!next["State/Province"] && next.State) {
          next["State/Province"] = next.State
        }
        if (!next["Supervisor's Name"] && next["Direct Supervisor"]) {
          next["Supervisor's Name"] = next["Direct Supervisor"]
        }
        if (!next["Direct Supervisor"] && next["Supervisor's Name"]) {
          next["Direct Supervisor"] = next["Supervisor's Name"]
        }
        if (!next["Company Phone"] && next.Phone) {
          next["Company Phone"] = next.Phone
        }
        if (
          !next[
            "Summary of experience including special training/skills/qualifications you have used in the performance of this job"
          ]
        ) {
          next[
            "Summary of experience including special training/skills/qualifications you have used in the performance of this job"
          ] =
            next.jobDescriptions ||
            next.Achievements ||
            next["Duties and Responsibilities"] ||
            next["Job Duties"] ||
            ""
        }
        if (!next.jobDescriptions) {
          next.jobDescriptions =
            next[
              "Summary of experience including special training/skills/qualifications you have used in the performance of this job"
            ] ||
            next.Achievements ||
            next["Duties and Responsibilities"] ||
            next["Job Duties"] ||
            ""
        }
        return next
      })
    : []
}

function formatEducationType2(items) {
  if (!Array.isArray(items)) return []
  const resolveYearsCompleted = (item) => {
    const level = String(
      item["Education Level"] ||
        item["Highest Degree Achieved"] ||
        item.Degree ||
        item.rawDegree ||
        "",
    )
      .trim()
      .toLowerCase()
    return level
      ? level.includes("master") ||
        level.includes("mba") ||
        level.includes("graduate") ||
        level.includes("associate") ||
        level.includes("trade")
        ? "2"
        : (level.includes("phd") ||
            level.includes("doctor") ||
            level.includes("high school") ||
            level.includes("ged"),
          "4")
      : "4"
  }
  return items.map((item) => {
    const next = { ...item }
    if (!next["Field of Study/Major"]) {
      next["Field of Study/Major"] =
        next["Field of study"] || next.Study || next.Program || next.rawMajor || ""
    }
    const degree =
      next["Degree or Certificate"] ||
      next["Highest Degree Achieved"] ||
      next.Degree ||
      ""
    if (!next["Education Level"]) next["Education Level"] = degree
    if (!next["Highest Degree Achieved"]) next["Highest Degree Achieved"] = degree
    if (!next["Years Completed"]) {
      next["Years Completed"] = resolveYearsCompleted(next)
    }
    return next
  })
}

function formatWorkExperienceType2(items) {
  return Array.isArray(items)
    ? items.map((item) => {
        const next = { ...item }
        if (!next.Title) {
          next.Title =
            next["Position Title"] || next["Job Title"] || next.jobTitle || ""
        }
        if (!next["Job Title"]) {
          next["Job Title"] =
            next["Position Title"] || next.Title || next.jobTitle || ""
        }
        if (!next.jobTitle) {
          next.jobTitle =
            next["Position Title"] || next.Title || next["Job Title"] || ""
        }
        if (!next["Position Title"]) {
          next["Position Title"] =
            next.Title || next["Job Title"] || next.jobTitle || ""
        }
        if (next["Reason For Leaving"] && !next["Reason for Leaving"]) {
          next["Reason for Leaving"] = next["Reason For Leaving"]
        }
        if (next["Reason for Leaving"] && !next["Reason For Leaving"]) {
          next["Reason For Leaving"] = next["Reason for Leaving"]
        }
        if (!next.Description) {
          next.Description =
            next.jobDescriptions ||
            next[
              "Summary of experience including special training/skills/qualifications you have used in the performance of this job"
            ] ||
            next["Duties and Responsibilities"] ||
            next["Job Duties"] ||
            ""
        }
        if (!next["Company City State"]) {
          next["Company City State"] =
            next.City || next["State/Province"] || next.State || ""
        }
        return next
      })
    : []
}

function formatAnswer(answer, typeIndex = 0) {
  const next = {
    ...answer,
    education:
      1 === typeIndex
        ? formatEducationType1(answer.education)
        : 2 === typeIndex
          ? formatEducationType2(answer.education)
          : answer.education,
    workExperience: formatWorkExperienceDates(
      1 === typeIndex
        ? formatWorkExperienceType1(answer.workExperience)
        : 2 === typeIndex
          ? formatWorkExperienceType2(answer.workExperience)
          : answer.workExperience,
    ),
    regular: { ...(answer.regular || {}) },
  }

  const country = normalizeCountry(next.country)
  if (country) {
    next.country = country
    const countryKeys = Object.keys(next.regular).filter((key) =>
      key.trim().toLowerCase().includes("country"),
    )
    if (countryKeys.length > 0) {
      for (const key of countryKeys) next.regular[key] = country
    } else {
      next.regular.Country = country
    }
  }

  if (next.state && !next.regular.State) next.regular.State = next.state

  const phoneLabels = [
    "Home Phone Number",
    "Cellular Number",
    "Work Phone Number",
  ]
  for (const label of phoneLabels) {
    const phone = next.regular[label]
    if (phone) {
      const digits = String(phone).replace(/\D/g, "")
      if (10 === digits.length) {
        next.regular[label] =
          `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`
      } else if (11 === digits.length && digits.startsWith("1")) {
        next.regular[label] =
          `${digits.slice(1, 4)}-${digits.slice(4, 7)}-${digits.slice(7)}`
      } else if (!/^\d{3}-\d{3}-\d{4}$/.test(String(phone))) {
        next.regular[label] = ""
      }
    }
  }

  return next
}

export {
  formatAnswer,
  formatClassicTaleoDateValue,
  formatTaleoDatepickerInputValue,
  parseTaleoDateValue,
}
