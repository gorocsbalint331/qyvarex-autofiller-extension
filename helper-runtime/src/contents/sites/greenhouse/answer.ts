// @ts-nocheck

import * as constants from "../../../constants.ts"
import * as stringUtils from "../../../utils/string.ts"

export const DEGREE_FALLBACK_OPTIONS = [
  "Associate's Degree",
  "Bachelor's Degree",
  "Doctor of Medicine (M.D.)",
  "Doctor of Philosophy (Ph.D.)",
  "Engineer's Degree",
  "High School",
  "Juris Doctor (J.D.)",
  "Master of Business Administration (M.B.A.)",
  "Master's Degree",
  "Other",
]

export const DISCIPLINE_FALLBACK_OPTIONS = [
  "Accounting",
  "African Studies",
  "Agriculture",
  "Anthropology",
  "Applied Health Services",
  "Architecture",
  "Art",
  "Asian Studies",
  "Biology",
  "Business",
  "Business Administration",
  "Chemistry",
  "Classical Languages",
  "Communications & Film",
  "Computer Science",
  "Dentistry",
  "Developing Nations",
  "Discipline Unknown",
  "Earth Sciences",
  "Economics",
  "Education",
  "Electronics",
  "Engineering",
  "English Studies",
  "Environmental Studies",
  "European Studies",
  "Fashion",
  "Finance",
  "Fine Arts",
  "General Studies",
  "Health Services",
  "History",
  "Humanities",
  "Human Resources Management",
  "Industrial Arts & Carpentry",
  "Information Systems",
  "International Relations",
  "Journalism",
  "Languages",
  "Latin American Studies",
  "Law",
  "Linguistics",
  "Manufacturing & Mechanics",
  "Mathematics",
  "Medicine",
  "Middle Eastern Studies",
  "Naval Science",
  "North American Studies",
  "Nuclear Technics",
  "Operations Research & Strategy",
  "Organizational Theory",
  "Other",
  "Philosophy",
  "Physical Education",
  "Physical Sciences",
  "Physics",
  "Political Science",
  "Psychology",
  "Public Policy",
  "Public Service",
  "Religious Studies",
  "Russian & Soviet Studies",
  "Scandinavian Studies",
  "Science",
  "Social Science",
  "Social Sciences",
  "Sociology",
  "Speech",
  "Statistics & Decision Theory",
  "Urban Studies",
  "Veterinary Medicine",
]

export function generateSchoolNameVariants(schoolName) {
  const variants = new Set()
  const trimmedSchoolName = schoolName.trim()
  if (!trimmedSchoolName) {
    return []
  }

  variants.add(trimmedSchoolName)
  const schoolNames = [trimmedSchoolName]

  if (trimmedSchoolName.startsWith("The ")) {
    const nameWithoutArticle = trimmedSchoolName.slice(4).trim()
    variants.add(nameWithoutArticle)
    schoolNames.push(nameWithoutArticle)
  }

  const separators = [" at ", " - ", ", "]
  for (const name of schoolNames) {
    for (const separator of separators) {
      if (!name.includes(separator)) {
        continue
      }

      for (const replacement of separators) {
        if (replacement !== separator) {
          const escapedSeparator = separator.replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&",
          )
          variants.add(name.replace(RegExp(escapedSeparator, "g"), replacement))
        }
      }
      break
    }
  }

  return [...Array.from(variants).sort((left, right) => left.length - right.length), "Other"]
}

const MONTH_ABBREVIATIONS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]
const NUMERIC_MONTH_PATTERN = /^(0?[1-9]|1[0-2])$/

function toNumericMonth(value) {
  const trimmedValue = value.trim()
  if (NUMERIC_MONTH_PATTERN.test(trimmedValue)) {
    return trimmedValue.padStart(2, "0")
  }

  const monthIndex = MONTH_ABBREVIATIONS.indexOf(trimmedValue)
  return monthIndex >= 0 ? String(monthIndex + 1).padStart(2, "0") : ""
}

function toAbbreviatedMonth(value) {
  const trimmedValue = value.trim()
  if (NUMERIC_MONTH_PATTERN.test(trimmedValue)) {
    return MONTH_ABBREVIATIONS[Number(trimmedValue) - 1] || ""
  }
  return MONTH_ABBREVIATIONS.includes(trimmedValue) ? trimmedValue : ""
}

export function resolveGreenhouseDateInputValue(label, value, input) {
  const answer = Array.isArray(value) ? value[0] || "" : value
  if (typeof answer !== "string") {
    return String(answer ?? "")
  }

  const normalizedLabel = label.toLowerCase().replace(/\s+/g, " ").trim()
  if (!/\bdate\s+month\b/.test(normalizedLabel)) {
    return answer
  }

  const expectsNumericMonth =
    input?.getAttribute?.("maxlength") === "2" ||
    input?.getAttribute?.("placeholder") === "MM" ||
    input?.placeholder === "MM"

  return expectsNumericMonth
    ? toNumericMonth(answer) || answer
    : toAbbreviatedMonth(answer) || answer
}

function expandStateAbbreviation(location) {
  const parts = location.split(",").map((part) => part.trim())
  if (parts.length < 2) {
    return null
  }

  const stateCode = parts[1].replace(/\./g, "").toUpperCase()
  const stateName = constants.STATE_MAP[stateCode]
  if (!stateName) {
    return null
  }

  parts[1] = stateName
  return parts.join(", ")
}

function normalizeFieldName(value) {
  return value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
}

function hasSeparatePhoneCountryCode(answer) {
  return Object.entries(answer.regular || {}).some(([key, value]) => {
    const normalizedKey = normalizeFieldName(key)
    const trimmedValue = String(value ?? "").trim()
    return (
      ((normalizedKey === "phonecountrycode" ||
        normalizedKey === "countryphonecode" ||
        normalizedKey === "countryregionphonecode") &&
        trimmedValue.length > 0) ||
      (normalizedKey === "countrycode" &&
        (/(?:^|\s)\+\d{1,4}\b/.test(trimmedValue) ||
          /^\d{1,4}$/.test(trimmedValue)))
    )
  })
}

function findPhoneCountryCode(answer) {
  for (const [key, value] of Object.entries(answer.regular || {})) {
    const normalizedKey = normalizeFieldName(key)
    const trimmedValue = String(value ?? "").trim()
    if (
      trimmedValue &&
      (normalizedKey === "phonecountrycode" ||
        normalizedKey === "countryphonecode" ||
        normalizedKey === "countryregionphonecode" ||
        (normalizedKey === "countrycode" &&
          (/(?:^|\s)\+\d{1,4}\b/.test(trimmedValue) ||
            /^\d{1,4}$/.test(trimmedValue))))
    ) {
      return normalizePhoneCountryCode(trimmedValue)
    }
  }
  return null
}

function normalizeParenthesizedPhone(value) {
  const match = String(value ?? "").match(
    /^\s*\(\s*(\+\d{1,4})\s*\)\s*(.+)$/,
  )
  if (!match) {
    return null
  }

  const phoneNumber = match[2].replace(/\D/g, "")
  return phoneNumber ? `${match[1]} ${phoneNumber}` : null
}

function normalizePhoneCountryCode(value) {
  const trimmedValue = String(value ?? "").trim()
  if (!trimmedValue) {
    return null
  }

  const countryCode = trimmedValue.match(/\+(\d{1,4})/)?.[1]
  if (countryCode) {
    return `+${countryCode}`
  }

  const digits = trimmedValue.replace(/\D/g, "")
  return digits && digits.length <= 4 ? `+${digits}` : null
}

function getProfilePhoneCountryCode(answer) {
  return normalizePhoneCountryCode(
    answer.profileData?.phoneCountryCode ??
      answer.profileData?.phone_country_code ??
      answer.profile_data?.phoneCountryCode ??
      answer.profile_data?.phone_country_code,
  )
}

function formatCombinedPhone(answer) {
  const phone = String(answer.regular?.Phone ?? "")
  const parenthesizedPhone = normalizeParenthesizedPhone(phone)
  if (parenthesizedPhone) {
    return parenthesizedPhone
  }

  const prefixedPhone = phone.match(/^\s*(\+\d{1,4})\D+(.+)$/)
  if (prefixedPhone) {
    const phoneNumber = prefixedPhone[2].replace(/\D/g, "")
    if (phoneNumber) {
      return `${prefixedPhone[1]} ${phoneNumber}`
    }
  }

  const phoneNumber = phone.replace(/\D/g, "")
  if (!phoneNumber) {
    return phone
  }

  const countryCode = getProfilePhoneCountryCode(answer)
  return countryCode ? `${countryCode} ${phoneNumber}` : phoneNumber
}

function formatPhoneWithoutCountryCode(answer) {
  const phone = String(answer.regular?.Phone ?? "")
  const countryCode = findPhoneCountryCode(answer)
  if (countryCode) {
    const escapedCountryCode = countryCode.replace("+", "\\+")
    const countryCodePattern = RegExp(
      `^\\s*(?:\\(\\s*${escapedCountryCode}\\s*\\)|${escapedCountryCode})\\D+(.+)$`,
    )
    const match = phone.match(countryCodePattern)
    if (match) {
      const phoneNumber = match[1].replace(/\D/g, "")
      if (phoneNumber) {
        return phoneNumber
      }
    }
  }

  const phoneNumber = phone.replace(/\D/g, "")
  return phoneNumber || phone
}

export function formatAnswer(answer) {
  if (answer.regular) {
    const nameFields = ["First Name", "First name", "Last Name", "Last name"]
    for (const field of nameFields) {
      if (
        answer.regular[field] &&
        typeof answer.regular[field] === "string"
      ) {
        answer.regular[field] = stringUtils.toNameTitleCase(
          answer.regular[field],
        )
      }
    }

    answer.regular.Phone = hasSeparatePhoneCountryCode(answer)
      ? formatPhoneWithoutCountryCode(answer)
      : formatCombinedPhone(answer)

    const locationField =
      "Location (City)" in answer.regular
        ? "Location (City)"
        : "Location / City"
    const location = answer.regular[locationField]
    if (location != null) {
      const locations =
        typeof location === "string"
          ? [location]
          : Array.isArray(location)
            ? [...location]
            : []
      const formattedLocations = []

      for (let value of locations) {
        if (typeof value !== "string") {
          continue
        }

        value = value.replace(/,\s*(USA|United States?)$/i, "").trim()
        const expandedLocation = expandStateAbbreviation(value)
        if (expandedLocation && expandedLocation !== value) {
          formattedLocations.push(expandedLocation)
        }
        formattedLocations.push(value)
      }

      if (formattedLocations.length > 0) {
        answer.regular[locationField] = formattedLocations
      }
    }

    const websiteField = Object.keys(answer.regular).find(
      (key) => key.toLowerCase() === "website",
    )
    const hasLinkedInField = Object.keys(answer.regular).some((key) =>
      /linkedin/i.test(key),
    )
    if (websiteField && hasLinkedInField) {
      const website = Array.isArray(answer.regular[websiteField])
        ? answer.regular[websiteField][0]
        : answer.regular[websiteField]
      if (typeof website === "string" && /linkedin\.com/i.test(website)) {
        delete answer.regular[websiteField]
      }
    }
  }

  if (answer.education && answer.education.length > 0) {
    for (const education of answer.education) {
      if (education?.School) {
        const school = education.School
        const schoolName =
          typeof school === "string"
            ? school
            : Array.isArray(school)
              ? school[0] ?? ""
              : String(school ?? "")
        if (schoolName.trim()) {
          education["School original answer"] = schoolName
          education.School = generateSchoolNameVariants(schoolName)
        }
      }

      if (education?.Degree) {
        const degree =
          typeof education.Degree === "string"
            ? education.Degree
            : Array.isArray(education.Degree)
              ? education.Degree[0] ?? ""
              : String(education.Degree ?? "")
        if (degree.trim()) {
          education["Degree original answer"] = degree
        }
      }

      if (education?.Study) {
        if (education?.Discipline) {
          const discipline = Array.isArray(education.Discipline)
            ? education.Discipline[0]
            : education.Discipline
          education.Discipline = discipline
          if (String(discipline ?? "").trim()) {
            education["Discipline original answer"] = String(discipline)
          }
        } else {
          education.Discipline = education.Study
          if (String(education.Study ?? "").trim()) {
            education["Discipline original answer"] = String(education.Study)
          }
        }
      } else if (education?.Discipline) {
        const discipline =
          typeof education.Discipline === "string"
            ? education.Discipline
            : Array.isArray(education.Discipline)
              ? education.Discipline[0] ?? ""
              : String(education.Discipline ?? "")
        if (discipline.trim()) {
          education["Discipline original answer"] = discipline
        }
      }
    }
  }

  if (answer.workExperience && answer.workExperience.length > 0) {
    for (const workExperience of answer.workExperience) {
      if (workExperience?.isCurrent !== undefined) {
        const isCurrent =
          workExperience.isCurrent === true ||
          workExperience.isCurrent === "true" ||
          workExperience.isCurrent === "True" ||
          workExperience.isCurrent === 1 ||
          workExperience.isCurrent === "1"
        workExperience["Current role"] = isCurrent ? "True" : "False"
      }
    }
  }

  return answer
}
