// @ts-nocheck
/**
 * Paylocity — answer shaping (country/state, phone, dates, education, employment).
 */

import * as dayjs from "dayjs"
import * as constants from "../../../constants.ts"
import * as phoneCountryCode from "../../../core/phone-country-code.js"

const dayjsDefault = { default: dayjs }

const CANADA_PROVINCE_ABBRS = /* @__PURE__ */ new Set([
  "AB",
  "BC",
  "MB",
  "NB",
  "NL",
  "NS",
  "ON",
  "PE",
  "QC",
  "SK",
  "NT",
  "NU",
  "YT",
])

const CANADA_PROVINCE_NAME_TO_ABBR = Object.fromEntries(
  Object.entries(constants.STATE_MAP)
    .filter(([abbr]) => CANADA_PROVINCE_ABBRS.has(abbr))
    .map(([abbr, name]) => [normalizeProvinceKey(name), abbr]),
)

function normalizeProvinceKey(text) {
  return text
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function isCanadaCountry(value) {
  if ("string" != typeof value) return false
  const normalized = value.trim().toLowerCase()
  return "ca" === normalized || normalized.includes("canada")
}

function resolveAnswerCountry(answer) {
  const regular = answer.regular || {}
  const candidates = [
    answer.profileData?.location?.country,
    answer.profile_data?.location?.country,
    answer.profileData?.country,
    answer.profile_data?.country,
    answer.country,
    regular.Country,
    regular["Country / Territory"],
    regular["Country/Territory"],
    regular["Country / Region"],
    regular["Country or Region"],
  ]
  return String(
    candidates.find((item) => "string" == typeof item && item.trim()) || "",
  )
}

function normalizeCanadaAdministrativeArea(value) {
  if ("string" != typeof value) return value
  const trimmed = value.trim()
  if (!trimmed) return value
  const upper = trimmed.toUpperCase()
  return CANADA_PROVINCE_ABBRS.has(upper)
    ? upper
    : CANADA_PROVINCE_NAME_TO_ABBR[normalizeProvinceKey(trimmed)] || value
}

CANADA_PROVINCE_NAME_TO_ABBR[normalizeProvinceKey("British Colombia")] = "BC"

const HOW_DID_YOU_HEAR_RE = /how\s+did\s+you\s+hear/i

function expandDegreeObtainedCandidates(degree) {
  if ("string" != typeof degree) return []
  const trimmed = degree.trim()
  if (!trimmed) return []
  const stripped = trimmed
    .replace(/['\u2019]s\b/g, "")
    .replace(/\s*degree\s*$/i, "")
    .trim()
  return stripped && stripped.toLowerCase() !== trimmed.toLowerCase()
    ? [trimmed, stripped]
    : [trimmed]
}

function hasNonEmptyField(record, key) {
  const value = record[key]
  return null != value && "" !== value
}

function hasNonEmptyAnswer(value) {
  return "string" == typeof value
    ? "" !== value.trim()
    : !!Array.isArray(value) &&
        value.some((item) => "string" == typeof item && "" !== item.trim())
}

const PHONE_COUNTRY_CODE_LABEL_SET = new Set(
  phoneCountryCode.PHONE_COUNTRY_CODE_ANSWER_LABELS.map(
    phoneCountryCode.normalizePhoneCountryText,
  ),
)

function isPhoneCountryCodeLabel(label) {
  return PHONE_COUNTRY_CODE_LABEL_SET.has(
    phoneCountryCode.normalizePhoneCountryText(label),
  )
}

function resolvePhoneValues(value, phoneCountryCodeAnswer, country) {
  return "string" == typeof value
    ? phoneCountryCode.resolvePhoneFieldValue(
        value,
        phoneCountryCodeAnswer,
        country,
      )
    : Array.isArray(value)
      ? value.map((item) =>
          "string" == typeof item
            ? phoneCountryCode.resolvePhoneFieldValue(
                item,
                phoneCountryCodeAnswer,
                country,
              )
            : item,
        )
      : value
}

function formatDateAnswer(value, format = "MM/DD/YYYY") {
  if (!value) return null
  if ("string" == typeof value) {
    const trimmed = value.trim()
    const nonDateRe =
      /^(immediately|asap|now|flexible|negotiable|tbd|to be determined|n\/a|na|not applicable)$/i
    if (nonDateRe.test(trimmed))
      return (
        console.warn(
          `[formatAnswer] \u65E5\u671F\u5B57\u6BB5\u5305\u542B\u975E\u65E5\u671F\u503C: "${trimmed}"\uFF0C\u8DF3\u8FC7`,
        ),
        null
      )
    if (trimmed.length < 6 || trimmed.length > 30)
      return (
        console.warn(
          `[formatAnswer] \u65E5\u671F\u5B57\u7B26\u4E32\u957F\u5EA6\u5F02\u5E38: "${trimmed}"\uFF0C\u8DF3\u8FC7`,
        ),
        null
      )
  }
  const parsed = dayjsDefault.default(value)
  if (!parsed.isValid())
    return (
      console.warn(
        `[formatAnswer] \u65E0\u6548\u7684\u65E5\u671F\u503C: "${value}"\uFF0C\u8DF3\u8FC7`,
      ),
      null
    )
  const year = parsed.year()
  return year < 1900 || year > 2100
    ? (console.warn(
        `[formatAnswer] \u65E5\u671F\u5E74\u4EFD\u8D85\u51FA\u8303\u56F4 (${year}): "${value}"\uFF0C\u8DF3\u8FC7`,
      ),
      null)
    : parsed.format(format)
}

function formatAnswer(answer) {
  if (answer.regular) {
    const isCanada = isCanadaCountry(resolveAnswerCountry(answer))
    const hasHowDidYouHear = Object.entries(answer.regular).some(
      ([key, value]) => HOW_DID_YOU_HEAR_RE.test(key) && hasNonEmptyAnswer(value),
    )
    for (const key of (hasHowDidYouHear ||
      ((answer.regular["How Did You Hear About Us?"] = constants.SOURCE_VALUES),
      (answer.regular["How did you hear about us?"] = constants.SOURCE_VALUES)),
    Object.keys(answer.regular)))
      /skill/i.test(key) && delete answer.regular[key]
    if (isCanada)
      for (const key of Object.keys(answer.regular))
        /^administrative\s+area$/i.test(key.trim()) &&
          (answer.regular[key] = normalizeCanadaAdministrativeArea(
            answer.regular[key],
          ))
    const phoneCountryCodeAnswer =
      phoneCountryCode.resolvePhoneCountryCodeAnswer(answer)
    const country = resolveAnswerCountry(answer)
    for (const [key, value] of Object.entries(answer.regular))
      /(phone|number)/i.test(key) &&
        (isPhoneCountryCodeLabel(key) ||
          (answer.regular[key] = resolvePhoneValues(
            value,
            phoneCountryCodeAnswer,
            country,
          )))
    ;(answer.regular?.["Available to work"] === "" ||
      answer.regular?.["Available to work"]) &&
      (answer.regular["Available to work"] =
        dayjsDefault.default().format("MM/DD/YYYY"))
    const availableToStartKeys = [
      "Available to Start",
      "available to start",
      "Date Available to Start",
      "dateAvailableToStart",
    ]
    for (const key of availableToStartKeys)
      if (answer.regular[key]) {
        const formatted = formatDateAnswer(answer.regular[key])
        formatted
          ? (answer.regular[key] = formatted)
          : (console.warn(
              `[formatAnswer] "${key}" \u503C\u65E0\u6548\uFF0C\u5DF2\u5220\u9664: ${answer.regular[key]}`,
            ),
            delete answer.regular[key])
      }
  }
  if (answer.workExperience && answer.workExperience.length > 0)
    for (const experience of answer.workExperience) {
      const country =
        "string" == typeof experience?.Country ? experience.Country : void 0
      for (const [key, value] of Object.entries(experience ?? {}))
        /(phone|number)/i.test(key) &&
          (experience[key] = resolvePhoneValues(value, void 0, country))
      if (
        experience?.Start &&
        ((experience.From = experience.Start),
        !hasNonEmptyField(experience, "Start Date"))
      ) {
        const formatted = formatDateAnswer(experience.Start)
        formatted && (experience["Start Date"] = formatted)
      }
      if (
        experience?.End &&
        ((experience.To = experience.End),
        !hasNonEmptyField(experience, "End Date"))
      ) {
        const formatted = formatDateAnswer(experience.End)
        formatted && (experience["End Date"] = formatted)
      }
      experience?.Company &&
        !hasNonEmptyField(experience, "Company Name") &&
        (experience["Company Name"] = experience.Company),
        experience?.Title &&
          !hasNonEmptyField(experience, "Position") &&
          (experience.Position = experience.Title),
        experience &&
          "isCurrent" in experience &&
          (experience["I currently work here"] = experience.isCurrent),
        experience?.jobDescriptions &&
          (experience.Responsibilities = experience.jobDescriptions)
    }
  if (answer.education && answer.education.length > 0)
    for (const education of answer.education) {
      const country =
        "string" == typeof education?.Country ? education.Country : void 0
      for (const [key, value] of Object.entries(education ?? {}))
        /(phone|number)/i.test(key) &&
          (education[key] = resolvePhoneValues(value, void 0, country))
      if (
        (education?.Start && (education.From = education.Start),
        education?.End && (education.To = education.End),
        education?.School &&
          ((education["School or University"] = education.School),
          hasNonEmptyField(education, "School Name") ||
            (education["School Name"] = education.School)),
        education?.Study &&
          ((education["Field of Study"] = education.Study),
          hasNonEmptyField(education, "Area of Study") ||
            (education["Area of Study"] = education.Study)),
        education)
      ) {
        const degreeCandidates = expandDegreeObtainedCandidates(education.Degree)
        degreeCandidates.length > 0 &&
          !hasNonEmptyField(education, "Degree Obtained") &&
          (education["Degree Obtained"] =
            degreeCandidates.length > 1
              ? degreeCandidates
              : degreeCandidates[0])
        const hasGraduateField = Object.keys(education).some(
          (key) => /graduate/i.test(key) && hasNonEmptyField(education, key),
        )
        if (
          !hasGraduateField &&
          (true === education.isCurrent
            ? (education["Did you Graduate?"] = "No")
            : false === education.isCurrent &&
              degreeCandidates.length > 0 &&
              (education["Did you Graduate?"] = "Yes")),
          education.End && !hasNonEmptyField(education, "Graduation Date")
        ) {
          const formatted = formatDateAnswer(education.End)
          formatted && (education["Graduation Date"] = formatted)
        }
      }
    }
  return answer
}

export { formatAnswer }
