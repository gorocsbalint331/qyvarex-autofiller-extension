// @ts-nocheck
/**
 * Uber Careers answer shaping — normalize phones, links, education, and
 * work-experience keys to match Uber form labels.
 */

const MONTH_NAME_TO_MM = {
  jan: "01",
  january: "01",
  feb: "02",
  february: "02",
  mar: "03",
  march: "03",
  apr: "04",
  april: "04",
  may: "05",
  jun: "06",
  june: "06",
  jul: "07",
  july: "07",
  aug: "08",
  august: "08",
  sep: "09",
  sept: "09",
  september: "09",
  oct: "10",
  october: "10",
  nov: "11",
  november: "11",
  dec: "12",
  december: "12",
}

const PRESENT_TOKENS = [
  "present",
  "current",
  "now",
  "till now",
  "to present",
  "to-present",
  "to current",
  "to-current",
  "to now",
  "to-now",
  "-present",
]

const DATE_FIELD_ALIASES = {
  startMonth: [
    "Start Date - Month",
    "Start date month",
    "Start Month",
    "startMonth",
    "start_month",
  ],
  startYear: [
    "Start Date - Year",
    "Start date year",
    "Start Year",
    "startYear",
    "start_year",
  ],
  endMonth: [
    "End Date - Month",
    "End date month",
    "End Month",
    "endMonth",
    "end_month",
  ],
  endYear: [
    "End Date - Year",
    "End date year",
    "End Year",
    "endYear",
    "end_year",
  ],
}

function normalizePhoneValue(raw) {
  let text
  if (raw == null) return null
  if (Array.isArray(raw) && raw.length > 0) {
    text = String(raw[0] || "").trim()
  } else {
    if (typeof raw !== "string") return null
    text = raw.trim()
  }
  if (!text) return null

  const digitsOnly = text.replace(/[^\d]/g, "")
  if (digitsOnly.length >= 7) {
    const withPlus = text.replace(/[^\d+]/g, "")
    return withPlus && withPlus.replace(/\+/g, "").length >= 7
      ? withPlus
      : text
  }
  if (digitsOnly.length >= 4) return text
  if (
    digitsOnly.length <= 3 &&
    text.includes("+") &&
    !text.match(/\d{4,}/)
  ) {
    return null
  }
  return text
}

function normalizePhoneFieldsInRegular(regular) {
  const phoneLabels = [
    "Mobile phone number",
    "Phone",
    "Mobile",
    "Phone number",
  ]
  for (const label of phoneLabels) {
    const normalized = normalizePhoneValue(regular[label])
    if (normalized === null) delete regular[label]
    else regular[label] = normalized
  }
}

export function formatAnswer(answer) {
  if (!answer.regular) answer.regular = {}
  normalizePhoneFieldsInRegular(answer.regular)

  const linkLabels = ["LinkedIn", "Github", "Portfolio"]
  for (const label of linkLabels) {
    const raw =
      answer.regular[label] ??
      answer[label] ??
      answer[label.toLowerCase()]
    const first = raw == null ? "" : Array.isArray(raw) ? raw[0] : raw
    const hasValue = typeof first === "string" && first.trim() !== ""
    if (hasValue) answer.regular[label] = raw
    else delete answer.regular[label]
  }

  const zipAliases = [
    "Zip code",
    "Zip Code",
    "ZIP code",
    "ZIP Code",
    "zipcode",
    "zip_code",
    "Zip",
    "zip",
  ]
  const profile = answer.profile_data || answer.profileData
  if (profile && typeof profile === "object") {
    for (const key of zipAliases) {
      if (profile[key] && !answer.regular[key]) {
        answer.regular[key] = profile[key]
        break
      }
    }
    for (const nestedKey in profile) {
      const nested = profile[nestedKey]
      if (nested && typeof nested === "object" && !Array.isArray(nested)) {
        for (const key of zipAliases) {
          if (nested[key] && !answer.regular[key]) {
            answer.regular[key] = nested[key]
            break
          }
        }
      }
    }
  }

  let zipValue = null
  let zipKey = null
  for (const key of zipAliases) {
    if (answer.regular[key]) {
      zipValue = answer.regular[key]
      zipKey = key
      break
    }
  }
  if (zipValue && zipKey && zipKey !== "Zip code") {
    answer.regular["Zip code"] = zipValue
  }

  const monthToMm = (raw) => {
    const text = (raw || "").trim()
    if (!text) return ""
    if (/^\d{1,2}$/.test(text)) {
      const num = Number(text)
      if (num >= 1 && num <= 12) return String(num).padStart(2, "0")
    }
    return MONTH_NAME_TO_MM[text.toLowerCase()] || ""
  }

  const isPresentToken = (raw) => {
    const text = String(raw ?? "")
      .trim()
      .toLowerCase()
    return (
      !!text &&
      (PRESENT_TOKENS.some((token) => text === token) ||
        text.includes("present"))
    )
  }

  const firstNonEmpty = (record, keys) => {
    for (const key of keys) {
      const value = record?.[key]
      if (value != null) {
        if (Array.isArray(value)) {
          const found = value.find(
            (item) => String(item ?? "").trim() !== "",
          )
          if (found != null) return found
          continue
        }
        if (String(value).trim() !== "") return value
      }
    }
    return ""
  }

  const parseDateParts = (raw) => {
    const text = String(raw ?? "").trim()
    if (!text) return { month: "", year: "" }
    if (isPresentToken(text)) return { month: "", year: "present" }

    let match = text.match(/^(\d{4})[\/\-.](\d{1,2})(?:[\/\-.](\d{1,2}))?/)
    if (match) {
      return {
        year: match[1],
        month: String(match[2]).padStart(2, "0"),
      }
    }
    match = text.match(/^(\d{1,2})\s*[\/\-.]\s*(\d{4})/)
    if (match) {
      return {
        month: String(match[1]).padStart(2, "0"),
        year: match[2],
      }
    }
    match = text.match(
      /\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t)?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\b[\s\/\-.]*?(\d{4})/i,
    )
    if (match) {
      return { month: monthToMm(match[1]) || "", year: match[2] }
    }
    match = text.match(
      /(\d{4})[\s\/\-.]*\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t)?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\b/i,
    )
    if (match) {
      return { year: match[1], month: monthToMm(match[2]) || "" }
    }
    match = text.match(/\b(\d{4})\b/)
    if (match) return { year: match[1], month: "" }
    return { month: "", year: "" }
  }

  const applyCurrentAndEndDates = (
    record,
    endMonth,
    endYear,
    isCurrentFlag,
    endRaw,
    endYearExisting,
    currentField,
  ) => {
    let currentText = ""
    currentText = Array.isArray(currentField)
      ? String(currentField[0] ?? "")
          .trim()
          .toLowerCase()
      : String(currentField ?? "")
          .trim()
          .toLowerCase()

    const isCurrent =
      isCurrentFlag === true ||
      endYear === "present" ||
      isPresentToken(endRaw) ||
      isPresentToken(endYearExisting) ||
      (currentText &&
        ["yes", "true", "1", "y"].includes(currentText))

    if (isCurrent) {
      record.Current = "Yes"
      record["End Date - Month"] = ""
      record["End Date - Year"] = ""
    } else {
      record["End Date - Month"] = endMonth
      record["End Date - Year"] = endYear
      if (endMonth || endYear) {
        record.Current = "No"
      } else if (isCurrentFlag === false) {
        record.Current = "No"
      } else if (currentText) {
        record.Current = ["yes", "true", "1", "y"].includes(currentText)
          ? "Yes"
          : "No"
      } else if (isCurrentFlag === true) {
        record.Current = "Yes"
      } else {
        record.Current = "No"
      }
    }
  }

  const resolveDateFields = (record) => {
    const startKeys = ["Start", "start", "Start Date", "startDate", "From"]
    const endKeys = ["End", "end", "End Date", "endDate", "To"]
    const startRaw = firstNonEmpty(record, startKeys)
    const endRaw = firstNonEmpty(record, endKeys)
    const startParts = parseDateParts(startRaw)
    const endParts = parseDateParts(endRaw)
    const startMonthExisting = firstNonEmpty(
      record,
      DATE_FIELD_ALIASES.startMonth,
    )
    const startYearExisting = firstNonEmpty(
      record,
      DATE_FIELD_ALIASES.startYear,
    )
    const endMonthExisting = firstNonEmpty(
      record,
      DATE_FIELD_ALIASES.endMonth,
    )
    const endYearExisting = firstNonEmpty(record, DATE_FIELD_ALIASES.endYear)

    return {
      startMonth:
        startParts.month ||
        (startMonthExisting && String(startMonthExisting).trim()
          ? monthToMm(String(startMonthExisting))
          : "") ||
        "",
      startYear:
        startParts.year ||
        (startYearExisting && String(startYearExisting).trim()
          ? String(startYearExisting).trim()
          : "") ||
        "",
      endMonth:
        endParts.month ||
        (endMonthExisting && String(endMonthExisting).trim()
          ? monthToMm(String(endMonthExisting))
          : "") ||
        "",
      endYear:
        endParts.year ||
        (endYearExisting && String(endYearExisting).trim()
          ? String(endYearExisting).trim()
          : "") ||
        "",
      endRaw,
      endYearExisting,
    }
  }

  const stripMajorFromDegree = (degree, major) => {
    if (!degree || !major) return degree
    degree.toLowerCase().trim()
    const majorLower = major.toLowerCase().trim()
    if (!majorLower) return degree

    const escaped = majorLower.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    const patterns = [
      RegExp(`\\s+in\\s+${escaped}`, "i"),
      RegExp(`,\\s*${escaped}`, "i"),
      RegExp(`\\s+${escaped}$`, "i"),
    ]
    let cleaned = degree
    for (const pattern of patterns) {
      cleaned = cleaned.replace(pattern, "").trim()
    }
    return !cleaned || cleaned.length < 3 ? degree : cleaned
  }

  const formatEducationRecord = (record) => {
    const school = firstNonEmpty(record, [
      "School",
      "school",
      "schoolName",
      "School Name",
      "Institution",
      "Institution Name",
      "University",
      "College",
    ])
    const degree = firstNonEmpty(record, ["Degree", "degree"])
    const major = firstNonEmpty(record, [
      "Major",
      "major",
      "Field Of Study",
      "fieldOfStudy",
      "Study",
      "study",
      "Discipline",
      "discipline",
    ])
    const currentField = firstNonEmpty(record, [
      "Current",
      "current",
      "isCurrent",
      "Is Current",
    ])
    const isCurrentFlag =
      record.isCurrent !== undefined ? !!record.isCurrent : null
    const dates = resolveDateFields(record)
    const cleanedDegree = stripMajorFromDegree(
      String(degree || "").trim(),
      String(major || "").trim(),
    )
    const majorText = String(major || "").trim()

    record.School = String(school || "").trim()
    record.Degree = cleanedDegree
    record.Major = majorText
    record["Start Date - Month"] = dates.startMonth
    record["Start Date - Year"] = dates.startYear
    applyCurrentAndEndDates(
      record,
      dates.endMonth,
      dates.endYear,
      isCurrentFlag,
      dates.endRaw,
      dates.endYearExisting,
      currentField,
    )
  }

  const formatEmploymentRecord = (record) => {
    const company = firstNonEmpty(record, [
      "Company",
      "company",
      "companyName",
      "Employer",
    ])
    const position = firstNonEmpty(record, [
      "Position",
      "position",
      "title",
      "Title",
    ])
    const description = firstNonEmpty(record, [
      "jobDescriptions",
      "Job Description",
      "jobDescription",
      "Description (optional)",
      "Description",
      "description",
    ])
    const currentField = firstNonEmpty(record, [
      "Current",
      "current",
      "isCurrent",
      "Is Current",
    ])
    const isCurrentFlag =
      record.isCurrent !== undefined ? !!record.isCurrent : null
    const dates = resolveDateFields(record)

    record.Company = String(company || "").trim()
    record.Position = String(position || "").trim()
    record["Description (optional)"] = String(description || "").trim()
    delete record.jobDescriptions
    delete record["Job Description"]
    delete record.jobDescription
    record["Start Date - Month"] = dates.startMonth
    record["Start Date - Year"] = dates.startYear
    applyCurrentAndEndDates(
      record,
      dates.endMonth,
      dates.endYear,
      isCurrentFlag,
      dates.endRaw,
      dates.endYearExisting,
      currentField,
    )
  }

  if (Array.isArray(answer.education)) {
    answer.education.forEach((record) => {
      if (record && typeof record === "object") formatEducationRecord(record)
    })
  }
  if (Array.isArray(answer.workExperience)) {
    answer.workExperience.forEach((record) => {
      if (record && typeof record === "object") formatEmploymentRecord(record)
    })
  }

  const firstName = String(answer.regular?.["First Name"] ?? "").trim()
  const lastName = String(answer.regular?.["Last Name"] ?? "").trim()
  const fullName = [firstName, lastName].filter(Boolean).join(" ")
  const reverseName = [lastName, firstName].filter(Boolean).join(" ")

  const looksLikePersonName = (value) => {
    if (!value) return false
    const text = value.trim()
    return (
      text === firstName ||
      text === lastName ||
      text === fullName ||
      text === reverseName
    )
  }

  const findNonNameValue = (record, keys) => {
    for (const key of keys) {
      const value = record?.[key]
      if (value == null) continue
      const first = Array.isArray(value) ? value[0] : value
      const text = String(first ?? "").trim()
      if (text && !looksLikePersonName(text)) return text
    }
    return ""
  }

  const schoolKeys = [
    "School",
    "school",
    "schoolName",
    "School Name",
    "Institution",
    "Institution Name",
    "University",
    "College",
  ]
  const companyKeys = [
    "Company",
    "company",
    "companyName",
    "Employer",
    "Employer name",
  ]

  if (Array.isArray(answer.education)) {
    answer.education.forEach((record) => {
      if (
        record &&
        typeof record === "object" &&
        record.School &&
        looksLikePersonName(String(record.School))
      ) {
        record.School = findNonNameValue(record, schoolKeys)
      }
    })
  }
  if (Array.isArray(answer.workExperience)) {
    answer.workExperience.forEach((record) => {
      if (
        record &&
        typeof record === "object" &&
        record.Company &&
        looksLikePersonName(String(record.Company))
      ) {
        record.Company = findNonNameValue(record, companyKeys)
      }
    })
  }

  return answer
}

export function inferRepeatingCountFromRegular(
  regular,
  prefix,
  baseKeys,
  maxCount = 20,
) {
  const record = regular || {}
  let maxIndexed = 0
  const indexPattern = RegExp(`^${prefix}\\s+(\\d+)\\s+`)
  for (const key of Object.keys(record)) {
    const match = key.match(indexPattern)
    if (match) {
      const index = Number(match[1])
      if (Number.isFinite(index) && index > maxIndexed) maxIndexed = index
    }
  }

  let maxArrayLength = 0
  let hasAnyValue = false
  for (const key of baseKeys) {
    const value = record[key]
    if (value != null && value !== "") {
      hasAnyValue = true
      if (Array.isArray(value)) {
        maxArrayLength = Math.max(maxArrayLength, value.length)
      }
    }
  }

  const count = Math.max(
    maxIndexed,
    maxArrayLength,
    hasAnyValue && maxIndexed === 0 && maxArrayLength === 0 ? 1 : 0,
  )
  return Math.min(count, maxCount)
}

export function buildRepeatingGroupRecordsFromRegular(
  regular,
  prefix,
  fieldMap,
) {
  const record = regular || {}
  const baseKeys = fieldMap.map((field) => field.baseKey)
  const count = inferRepeatingCountFromRegular(record, prefix, baseKeys, 30)
  if (count <= 0) return []

  const readField = (baseKey, index) => {
    const indexedKey = baseKey.replace(
      RegExp(`^${prefix}\\s+`),
      () => `${prefix} ${index + 1} `,
    )
    const value = record[indexedKey] ?? record[baseKey]
    if (Array.isArray(value)) {
      const items = value
        .map((item) => String(item ?? "").trim())
        .filter(Boolean)
      return items[index] || ""
    }
    return index > 0 ? "" : String(value ?? "").trim()
  }

  const rows = []
  for (let index = 0; index < count; index++) {
    const row = {}
    let hasValue = false
    for (const field of fieldMap) {
      const value = readField(field.baseKey, index)
      row[field.recordKey] = value
      if (value) hasValue = true
    }
    if (hasValue) rows.push(row)
  }
  return rows
}

export function buildEmploymentRecordsFromRegular(regular) {
  return buildRepeatingGroupRecordsFromRegular(regular, "Experience", [
    { baseKey: "Experience Company", recordKey: "Company" },
    { baseKey: "Experience Position", recordKey: "Position" },
    {
      baseKey: "Experience Description (optional)",
      recordKey: "Description (optional)",
    },
    { baseKey: "Experience Current", recordKey: "Current" },
    {
      baseKey: "Experience Start Date - Month",
      recordKey: "Start Date - Month",
    },
    {
      baseKey: "Experience Start Date - Year",
      recordKey: "Start Date - Year",
    },
    { baseKey: "Experience End Date - Month", recordKey: "End Date - Month" },
    { baseKey: "Experience End Date - Year", recordKey: "End Date - Year" },
  ])
}

export function buildEducationRecordsFromRegular(regular) {
  return buildRepeatingGroupRecordsFromRegular(regular, "Education", [
    { baseKey: "Education School", recordKey: "School" },
    { baseKey: "Education Degree", recordKey: "Degree" },
    { baseKey: "Education Major (optional)", recordKey: "Major" },
    { baseKey: "Education Current", recordKey: "Current" },
    {
      baseKey: "Education Start Date - Month",
      recordKey: "Start Date - Month",
    },
    { baseKey: "Education Start Date - Year", recordKey: "Start Date - Year" },
    { baseKey: "Education End Date - Month", recordKey: "End Date - Month" },
    { baseKey: "Education End Date - Year", recordKey: "End Date - Year" },
  ])
}

function isEmptyLinkValue(value) {
  return !!(
    value == null ||
    (typeof value === "string" && value.trim() === "") ||
    (Array.isArray(value) &&
      (value.length === 0 ||
        (value.length === 1 &&
          (value[0] === undefined ||
            value[0] === null ||
            String(value[0]).trim() === ""))))
  )
}

export function findLinksValueInRecord(label, record) {
  if (!label || !record) return null
  const lower = label.toLowerCase()
  let value = null

  if (lower.includes("linkedin")) {
    value =
      record.LinkedIn ??
      record.Linkedin ??
      record.linkedin ??
      record["LinkedIn URL"] ??
      record["LinkedIn Profile"] ??
      record.linkedInURL ??
      record.linkedin_url ??
      null
  } else if (lower.includes("github")) {
    value =
      record.Github ??
      record.GitHub ??
      record.github ??
      record["GitHub URL"] ??
      record["Github URL"] ??
      record.githubURL ??
      record.github_url ??
      null
  } else if (lower.includes("portfolio")) {
    value =
      record.Portfolio ??
      record.portfolio ??
      record["Portfolio URL"] ??
      record["Portfolio Website"] ??
      record.otherURL ??
      record.other_url ??
      null
  }

  return isEmptyLinkValue(value) ? null : value
}
