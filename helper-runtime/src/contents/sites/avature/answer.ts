// @ts-nocheck
/**
 * Avature — label helpers, phone shaping, and Falcon answer formatting.
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"

const IGNORED_FIELD_LABEL_PATTERNS = [
  /^job country$/i,
  /^job lob2$/i,
  /^job region$/i,
  /^job record type$/i,
  /^source/i,
  /^record type/i,
  /^dedupingby$/i,
]

const NON_ALNUM_LABEL_CHARS =
  /[^a-zA-Z0-9\s\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]/g

export function normalizeAvatureLabel(label) {
  return String(label ?? "")
    .replace(/\s+/g, " ")
    .replace(/\*/g, "")
    .replace(/\s*Select an option\s*$/i, "")
    .trim()
}

function labelsMatchLoosely(a, b) {
  const normalize = (value) =>
    String(value ?? "")
      .replace(NON_ALNUM_LABEL_CHARS, "")
      .replace(/\s*\*\s*/g, "")
      .replace(/\s+/g, " ")
      .toLowerCase()
      .trim()
  const left = normalize(a)
  const right = normalize(b)
  return !!left && left === right
}

export function isAvaturePhoneCountryCodeLabel(label) {
  const normalized = normalizeAvatureLabel(label)
    .toLowerCase()
    .replace(/\s*\/\s*/g, "/")
  return normalized === "country/territory code"
}

export function isAvaturePhoneNumberLabel(label) {
  const normalized = normalizeAvatureLabel(label).toLowerCase()
  return (
    /\bphone\b/.test(normalized) &&
    !/(country|territory|dial|calling|code)/.test(normalized)
  )
}

export function getAvatureRequestFieldLabel(label) {
  return isAvaturePhoneCountryCodeLabel(label)
    ? phoneCountryCode.PHONE_COUNTRY_CODE_LABEL
    : label
}

export function getAvatureRegularRecordForRule(rule, allRules, answer) {
  const regular =
    answer.regular &&
    typeof answer.regular === "object" &&
    !Array.isArray(answer.regular)
      ? answer.regular
      : {}
  const sameLabelRules = allRules.filter((candidate) =>
    labelsMatchLoosely(rule.label, candidate.label),
  )
  if (sameLabelRules.length < 2) return regular

  const withoutDupes = Object.fromEntries(
    Object.entries(regular).filter(
      ([key]) => !labelsMatchLoosely(rule.label, key),
    ),
  )
  const fillMatches = (answer.fillDataList || []).filter(
    (entry) =>
      typeof entry?.name === "string" &&
      labelsMatchLoosely(rule.label, entry.name),
  )
  const occurrence = sameLabelRules.indexOf(rule)
  if (occurrence < 0 || fillMatches.length !== sameLabelRules.length) {
    console.warn("[Avature][DuplicateAnswer] unmatched", {
      ruleCount: sameLabelRules.length,
      answerCount: fillMatches.length,
    })
    return withoutDupes
  }

  const match = fillMatches[occurrence]
  if (match) {
    console.info("[Avature][DuplicateAnswer] mapped", {
      occurrence,
      ruleCount: sameLabelRules.length,
      answerCount: fillMatches.length,
    })
    return { ...withoutDupes, [rule.label]: match.value }
  }

  console.warn("[Avature][DuplicateAnswer] missing-occurrence", {
    occurrence,
    ruleCount: sameLabelRules.length,
    answerCount: fillMatches.length,
  })
  return withoutDupes
}

export function shouldIgnoreAvatureFieldLabel(label) {
  const normalized = normalizeAvatureLabel(label)
  return !normalized || IGNORED_FIELD_LABEL_PATTERNS.some((re) => re.test(normalized))
}

function normalizeMonthYear(value) {
  const trimmed = String(value ?? "").trim()
  if (!trimmed) return

  if (/^\d{4}-\d{2}$/.test(trimmed)) return trimmed

  const ymd = trimmed.match(/^(\d{4}-\d{2})-\d{2}$/)
  if (ymd) return ymd[1]

  const monthYear = trimmed.match(/^([A-Za-z]+)[,\s]+(\d{4})$/)
  if (monthYear) {
    const monthName = monthYear[1].toLowerCase()
    const monthIndex = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ].indexOf(monthName)
    if (monthIndex >= 0) {
      return `${monthYear[2]}-${String(monthIndex + 1).padStart(2, "0")}`
    }
  }

  return trimmed
}

function firstNonEmpty(...values) {
  return values.find((value) => String(value ?? "").trim() !== "")
}

function isEmptyAnswer(value) {
  return (
    value == null ||
    value === "" ||
    (Array.isArray(value) &&
      value.every((item) => String(item ?? "").trim() === ""))
  )
}

export function formatAnswer(answer) {
  if (answer.regular) {
    const territoryCode = phoneCountryCode.resolvePhoneAnswerText(
      answer.regular["Country/Territory Code"],
    )
    if (
      territoryCode &&
      !Object.hasOwn(answer.regular, phoneCountryCode.PHONE_COUNTRY_CODE_LABEL)
    ) {
      answer.regular[phoneCountryCode.PHONE_COUNTRY_CODE_LABEL] =
        answer.regular["Country/Territory Code"]
    }

    const dialCode = phoneCountryCode.resolvePhoneCountryCodeAnswer(answer, [
      phoneCountryCode.PHONE_COUNTRY_CODE_LABEL,
      "Country/Territory Code",
    ])
    if (dialCode) {
      for (const [key, value] of Object.entries(answer.regular)) {
        if (!isAvaturePhoneNumberLabel(key)) continue
        const phoneText = phoneCountryCode.resolvePhoneAnswerText(value)
        if (!phoneText) continue
        const local = phoneCountryCode.resolvePhoneFieldValue(phoneText, dialCode)
        answer.regular[key] = Array.isArray(value) ? [local] : local
      }
    }
  }

  if (answer.workExperience && answer.workExperience.length > 0) {
    for (const record of answer.workExperience) {
      if (record) {
        const company = firstNonEmpty(
          record.Company,
          record.Employer,
          record["Company Name"],
          record["Current employer"],
        )
        if (company) {
          if (!record.Company) record.Company = company
          if (!record.Employer) record.Employer = company
          if (!record["Company Name"]) record["Company Name"] = company
          if (!record["Current employer"]) record["Current employer"] = company
        }

        const title = firstNonEmpty(
          record["Job Title"],
          record["Position title"],
          record["Current position title"],
          record["Position Title"],
        )
        if (title) {
          if (!record["Job Title"]) record["Job Title"] = title
          if (!record["Position title"]) record["Position title"] = title
          if (!record["Position Title"]) record["Position Title"] = title
          if (!record["Current position title"]) {
            record["Current position title"] = title
          }
        }

        const responsibilities = firstNonEmpty(
          record.Responsibilities,
          record.jobDescriptions,
          record["Job Description"],
          record.Description,
        )
        if (responsibilities && !record.Responsibilities) {
          record.Responsibilities = responsibilities
        }
      }

      if (record && "isCurrent" in record) {
        record["Current Job?"] = record.isCurrent === true ? "Yes" : "No"
        record["Is current position?"] =
          record.isCurrent === true ? "Yes" : "No"
        for (const key of Object.keys(record)) {
          if (key === "isCurrent") continue
          const lower = key.toLowerCase()
          const isCurrentFlag =
            lower.includes("current") &&
            !lower.includes("employer") &&
            !lower.includes("title") &&
            !lower.includes("start date")
          if (isCurrentFlag) {
            record[key] = record.isCurrent === true ? "Yes" : "No"
          }
        }
      }

      const start = normalizeMonthYear(record["Start Date"] ?? record.Start)
      const end = normalizeMonthYear(record["End Date"] ?? record.End)
      if (start) record["Start Date"] = start
      if (end) record["End Date"] = end
      if (start) {
        if (!record["Start date"]) record["Start date"] = start
        if (!record["Start date in current position"]) {
          record["Start date in current position"] = start
        }
      }
      if (end && !record["End date"]) record["End date"] = end
    }
  }

  if (answer.education && answer.education.length > 0) {
    for (const record of answer.education) {
      const school = firstNonEmpty(
        record["University/School"],
        record.Institution,
        record.School,
        record["School Name"],
        record.University,
      )
      if (school) {
        if (isEmptyAnswer(record["University/School"])) {
          record["University/School"] = school
        }
        if (isEmptyAnswer(record.Institution)) record.Institution = school
        if (isEmptyAnswer(record.School)) record.School = school
      }

      const degree = firstNonEmpty(
        record["Degree Level"],
        record["Degree Type"],
        record.Degree,
      )
      if (degree) {
        if (!record["Degree Level"]) record["Degree Level"] = degree
        if (!record["Degree Type"]) record["Degree Type"] = degree
      }

      const major = firstNonEmpty(
        record["Major(s)"],
        record.Major,
        record["Specialization/Major"],
        record.Specialization,
        record.Concentration,
        record["Area of Study"],
        record["Field of Study"],
        record.Study,
        record.Discipline,
      )
      if (major) {
        if (!record["Major(s)"]) record["Major(s)"] = major
        if (!record.Major) record.Major = major
        if (!record["Field of Study"]) record["Field of Study"] = major
      }

      const minor = firstNonEmpty(record["Minor(s)"], record.Minor)
      if (minor) {
        if (!record["Minor(s)"]) record["Minor(s)"] = minor
        if (!record.Minor) record.Minor = minor
      }

      const gpa = firstNonEmpty(record["Cumulative GPA"], record.GPA, record.gpa)
      if (gpa) {
        if (!record["Cumulative GPA"]) record["Cumulative GPA"] = gpa
        if (!record.GPA) record.GPA = gpa
      }

      const graduateKeys = Object.keys(record).filter((key) =>
        key.toLowerCase().includes("graduate"),
      )
      if ("isCurrent" in record && graduateKeys.length > 0) {
        console.info("[Avature][EducationGraduate] explicit-answer-only", {
          hasExplicitAnswer: graduateKeys.some((key) => !isEmptyAnswer(record[key])),
          hasIsCurrent: true,
        })
      }

      const start = normalizeMonthYear(record["Start Date"] ?? record.Start)
      const end = normalizeMonthYear(record["End Date"] ?? record.End)
      const graduation = normalizeMonthYear(
        record["Graduation Month/Year"] ??
          record["Graduation Date"] ??
          record["Graduation date"],
      )
      if (start) record["Start Date"] = start
      if (end) record["End Date"] = end
      if (graduation) {
        record["Graduation Month/Year"] = graduation
        record["Graduation Date"] = graduation
        record["Graduation date"] = graduation
      }
    }
  }

  return answer
}
