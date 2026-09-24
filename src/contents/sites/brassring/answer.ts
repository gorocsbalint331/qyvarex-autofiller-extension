// @ts-nocheck
/**
 * BrassRing — answer shaping (names, phone, state/country, education, employment).
 */

import * as dayjs from "dayjs"
import * as constants from "../../../constants.ts"
import * as gpa from "../../../utils/gpa.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as stringUtils from "../../../utils/string.ts"

const dayjsDefault = { default: dayjs?.default ?? dayjs }

function resolveStateName(value) {
  const first = Array.isArray(value) ? value.find(Boolean) : value
  const text = String(first ?? "").trim()
  if (!text) return null
  const abbr = text.replace(/\./g, "").toUpperCase()
  if (constants.STATE_MAP[abbr]) return constants.STATE_MAP[abbr]
  const lower = text.toLowerCase()
  return (
    Object.values(constants.STATE_MAP).find(
      (name) => name.toLowerCase() === lower,
    ) || null
  )
}

function normalizeCountryName(value) {
  const first = Array.isArray(value) ? value.find(Boolean) : value
  const text = String(first ?? "").trim()
  if (!text) return null
  if (/^(us|usa|u\.s\.|u\.s\.a\.|united states of america)$/i.test(text)) {
    return "United States"
  }
  if (/^(ca|can)$/i.test(text)) return "Canada"
  return text
}

function splitListValues(value) {
  const items = Array.isArray(value) ? value : [value]
  return items
    .flatMap((item) => String(item ?? "").split(/[\n,;]/))
    .map((item) => item.trim())
    .filter(Boolean)
}

function getFillDataListValue(answer, name) {
  const list = answer.fillDataList || answer.fill_data_list || []
  if (!Array.isArray(list)) return
  const entry = list.find(
    (item) =>
      String(item?.name ?? "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase() === name.toLowerCase(),
  )
  return entry?.value
}

function getSkillsFromProfile(answer) {
  return (
    answer.profile_data?.skills || answer.profileData?.skills || answer.skills
  )
}

function getProfileField(answer, key) {
  return answer.profile_data?.[key] || answer.profileData?.[key] || answer[key]
}

function firstNonEmpty(...candidates) {
  for (const candidate of candidates) {
    const value = Array.isArray(candidate)
      ? candidate.find((item) => String(item ?? "").trim())
      : candidate
    if (String(value ?? "").trim()) return value
  }
  return ""
}

function isTruthyYes(value) {
  const first = Array.isArray(value) ? value.find(Boolean) : value
  return /^(yes|true|checked|current|present)$/i.test(
    String(first ?? "").trim(),
  )
}

function isPresentCurrent(value) {
  const first = Array.isArray(value) ? value.find(Boolean) : value
  return /^(present|current|now)$/i.test(String(first ?? "").trim())
}

function firstString(value) {
  const first = Array.isArray(value) ? value.find(Boolean) : value
  return String(first ?? "").trim()
}

function isPhoneCodeLabel(label) {
  const compact = label
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
  return compact.includes("phone") && compact.includes("code")
}

function tokenizeLabel(label) {
  return label
    .replace(/[_/-]+/g, " ")
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
}

function isStateProvinceLabel(label) {
  const tokens = tokenizeLabel(label)
  return (
    !!tokens.some((token) => token === "state" || token === "province") &&
    tokens.every((token) =>
      [
        "state",
        "region",
        "province",
        "county",
        "territory",
        "current",
        "of",
        "residence",
        "residency",
      ].includes(token),
    )
  )
}

function isCountryLabel(label) {
  const tokens = tokenizeLabel(label)
  return (
    !!tokens.includes("country") &&
    tokens.every((token) =>
      ["country", "region", "current", "of", "residence", "residency"].includes(
        token,
      ),
    )
  )
}

function isSponsorshipLabel(label) {
  return /sponsor/i.test(label) && /visa/i.test(label)
}

function formatPhoneForBrassring(phone, countryCodeAnswer) {
  const { dialCode, national } = phoneCountryCode.decomposePhone(
    phone,
    countryCodeAnswer,
  )
  if (dialCode && dialCode !== "1") {
    return (
      phoneCountryCode.toInternationalPhoneValue(phone, countryCodeAnswer) ||
      phone
    )
  }
  const digits = national.replace(/\D/g, "")
  return digits.length === 10
    ? `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`
    : national || phone
}

function inferCurrentEndDateFormat(...candidates) {
  const texts = candidates.map(firstString).filter(Boolean)
  const sample = texts.find((text) => !isPresentCurrent(text)) || ""
  if (/^\d{1,2}\/\d{4}$/.test(sample)) return dayjsDefault.default().format("M/YYYY")
  if (/^\d{4}[-/]\d{1,2}$/.test(sample)) {
    return dayjsDefault.default().format("YYYY-M")
  }
  if (/[A-Za-z]/.test(sample)) return dayjsDefault.default().format("MMM-YYYY")
  return dayjsDefault.default().format("M/YYYY")
}

function normalizeRegularAnswers(answer) {
  answer.regular = { ...(answer.regular || {}) }
  const sponsorshipEntries = Object.entries(answer.regular)
    .filter(([key]) => isSponsorshipLabel(key))
    .map(([key, value]) => ({ key, value: firstString(value) }))

  const legalFirst =
    answer.regular["Legal First Name"] ||
    answer.regular["First Name"] ||
    answer.regular["First name"]
  if (legalFirst && !answer.regular["Legal First Name"]) {
    answer.regular["Legal First Name"] = legalFirst
  }

  const legalLast =
    answer.regular["Legal Last Name"] ||
    answer.regular["Last Name"] ||
    answer.regular["Last name"]
  if (legalLast && !answer.regular["Legal Last Name"]) {
    answer.regular["Legal Last Name"] = legalLast
  }

  const phoneCountry = phoneCountryCode.resolvePhoneCountryCodeAnswer(answer)
  for (const key of Object.keys(answer.regular)) {
    const value = answer.regular[key]
    if (/^(legal )?(first|last) name$/i.test(key) && typeof value === "string") {
      answer.regular[key] = stringUtils.toNameTitleCase(value)
      continue
    }
    if (isStateProvinceLabel(key)) {
      const state =
        resolveStateName(value) || resolveStateName(getProfileField(answer, "state"))
      if (state) answer.regular[key] = state
      continue
    }
    if (isCountryLabel(key)) {
      const country =
        normalizeCountryName(getProfileField(answer, "country")) ||
        normalizeCountryName(value)
      if (country) answer.regular[key] = country
      continue
    }
    if (/phone|mobile/i.test(key) && !isPhoneCodeLabel(key) && typeof value === "string") {
      answer.regular[key] = formatPhoneForBrassring(value, phoneCountry)
    }
  }

  const profileState = resolveStateName(getProfileField(answer, "state"))
  if (profileState && !Object.keys(answer.regular).some(isStateProvinceLabel)) {
    answer.regular.State = profileState
  }

  const profileCountry = normalizeCountryName(getProfileField(answer, "country"))
  if (profileCountry && !Object.keys(answer.regular).some(isCountryLabel)) {
    answer.regular["Country/Region"] = profileCountry
  }

  const fillDataSkills = splitListValues(getFillDataListValue(answer, "Add skills"))
  const regularSkills = splitListValues(answer.regular["Add skills"])
  const preferredSkills = fillDataSkills.length ? fillDataSkills : regularSkills
  const profileSkills = splitListValues(getSkillsFromProfile(answer))
  const skills = preferredSkills.length ? preferredSkills : profileSkills

  if (skills.length > 0) {
    answer.skills = skills
    answer.regular["Add skills"] = skills
  }

  for (const { key, value: before } of sponsorshipEntries) {
    console.info(
      `[BrassRingAutofill] sponsorship-answer-normalization ${JSON.stringify({
        before,
        after: firstString(answer.regular[key]),
        treatedAsState: isStateProvinceLabel(key),
        treatedAsCountry: isCountryLabel(key),
      })}`,
    )
  }
}

function normalizeEducationAnswers(answer) {
  answer.education = (answer.education || []).map((row) => {
    const next = { ...row }
    const school = firstNonEmpty(
      next["School / Educational institution"],
      next.School,
      next.rawSchool,
      next["School or University"],
      next.University,
      next.Institution,
    )
    if (school) next["School / Educational institution"] = school

    const major = firstNonEmpty(
      next["Major area of study"],
      next.Study,
      next.rawMajor,
      next["Field of Study"],
      next.Major,
    )
    if (major) next["Major area of study"] = major

    const degree = firstNonEmpty(next.Degree, next.rawDegree, next["Degree Type"])
    if (degree) next.Degree = degree

    const gpaValue = firstNonEmpty(next.GPA, next.gpa, next["Grade Point Average"])
    if (gpaValue) next.GPA = gpa.normalizeGpaValue(gpaValue)

    const graduation = firstNonEmpty(
      next["Graduation year"],
      next["Graduation Year"],
      next.End,
      next["End Date"],
      next.To,
    )
    if (graduation) {
      const yearMatch = String(graduation).match(/\b(19|20)\d{2}\b/)
      next["Graduation year"] = yearMatch?.[0] || graduation
    }

    if (next.isCurrent || next["Most Recent"]) {
      next["This is my most recent education"] = "Yes"
    }
    return next
  })
}

function normalizeWorkExperienceAnswers(answer) {
  answer.workExperience = (answer.workExperience || []).map((row) => {
    const next = { ...row }
    const company =
      next.Company || next["Company Name"] || next.Employer || next.Organization
    if (company) {
      next.Company = company
      next.Employer = company
      next["Employer Name"] = company
    }

    const title = next["Job Title"] || next.Title || next.Position || next.Role
    if (title) {
      next["Job Title"] = title
      next.Title = title
      next.Position = title
    }

    const start = firstNonEmpty(
      next["Start Year/month"],
      next.Start,
      next["Start Date"],
      next.From,
    )
    if (start) {
      const startText = firstString(start)
      next["Start Year/month"] = startText
      next["Start Date"] = startText
      next.From = firstString(firstNonEmpty(next.From, start))
    }

    const isCurrent =
      isTruthyYes(next["This is my most recent work experience"]) ||
      isTruthyYes(next["I currently work here"]) ||
      isTruthyYes(next.Current) ||
      isTruthyYes(next.isCurrent)

    if (isCurrent) {
      const endRaw = firstNonEmpty(
        next["End Year/month"],
        next.End,
        next["End Date"],
        next.To,
      )
      const endValue = endRaw
        ? isPresentCurrent(endRaw)
          ? inferCurrentEndDateFormat(
              next["Start Year/month"],
              next["Start Date"],
              next.From,
            )
          : firstString(endRaw)
        : inferCurrentEndDateFormat(
            next["Start Year/month"],
            next["Start Date"],
            next.From,
          )
      next["This is my most recent work experience"] = "Yes"
      next["I currently work here"] = "Yes"
      next.Current = "Yes"
      next["End Year/month"] = endValue
      next["End Date"] = endValue
      next.To = endValue
      next.End = endValue
      return next
    }

    const end = firstNonEmpty(
      next["End Year/month"],
      next.End,
      next["End Date"],
      next.To,
    )
    if (end) {
      const endValue = isPresentCurrent(end)
        ? inferCurrentEndDateFormat(
            end,
            next["Start Year/month"],
            next["Start Date"],
            next.From,
          )
        : firstString(end)
      next["End Year/month"] = endValue
      next["End Date"] = endValue
      next.To = firstString(firstNonEmpty(next.To, end))
    } else if (
      "End Year/month" in next ||
      "End" in next ||
      "End Date" in next ||
      "To" in next
    ) {
      const endValue = inferCurrentEndDateFormat(
        next["Start Year/month"],
        next["Start Date"],
        next.From,
      )
      next["End Year/month"] = endValue
      next["End Date"] = endValue
      next.To = endValue
    }

    const description =
      next.Description ||
      next.Responsibilities ||
      next["Role Description"] ||
      next.jobDescriptions
    if (description) {
      next.Description = description
      next.Responsibilities = description
      next["Role Description"] = description
    }

    if ("isCurrent" in next) {
      if (isTruthyYes(next.isCurrent)) {
        next["I currently work here"] = "Yes"
        next.Current = "Yes"
      } else {
        next["I currently work here"] = "No"
        next.Current = "No"
      }
    }
    return next
  })
}

export function formatAnswer(answer) {
  normalizeRegularAnswers(answer)
  normalizeEducationAnswers(answer)
  normalizeWorkExperienceAnswers(answer)
  return answer
}
