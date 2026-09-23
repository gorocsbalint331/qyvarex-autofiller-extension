// @ts-nocheck
/**
 * iCIMS answer formatting, packet labels, and field alias helpers.
 */

import * as constants from "../../../constants.ts"
import * as enums from "../../../core/enums.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as utils from "./utils.js"

const EMPLOYER_NA_STRAIGHT =
  'Employer (If None, enter "N/A")'
const EMPLOYER_NA_CURLY =
  "Employer (If None, enter \u201CN/A\u201D)"
const TITLE_NA_STRAIGHT = 'Title (If None, enter "N/A")'
const TITLE_NA_CURLY = "Title (If None, enter \u201CN/A\u201D)"

export const ICIMS_PACKET_VETERAN_LABEL = "Protected veteran status"
export const ICIMS_PACKET_DISABILITY_LABEL =
  "How do you know if you have a disability?"

const NAME_LABEL = "Name"
const YOUR_NAME_LABEL = "Your Name"
const TODAYS_DATE_LABEL = "Today's Date"
const SIGNATURE_LABEL = "Signature"

export const ICIMS_PACKET_MATCHERS = [
  {
    label: ICIMS_PACKET_VETERAN_LABEL,
    signalGroups: [
      ["voluntary_self_identification_of_veteran_status_template"],
      ["vetstatus"],
      ["protected veteran"],
      ["veteran", "identification"],
    ],
  },
  {
    label: ICIMS_PACKET_DISABILITY_LABEL,
    signalGroups: [
      ["voluntary_self_identification_of_disability_template"],
      ["disability", "identification"],
    ],
  },
]

export const ICIMS_AGREEMENT_SIGNATURE_LABEL =
  "Agreement Signature Checking this box is intended to be and constitutes the equivalent of a handwritten signature. By this signature, you are (i) representing that the answers given are truthful and (ii) legally binding yourself to the provisions above following which you selected \u201CI agree.\u201D"

export const ICIMS_AUTO_CHECK_CHECKBOX_LABELS = [
  ICIMS_AGREEMENT_SIGNATURE_LABEL,
  "I acknowledge the above notices",
]

export const ICIMS_AUTO_ACCEPT_AGREEMENT_SIGNAL_GROUPS = [
  [
    "applicant's certification & agreement",
    "cellular sales services group, llc",
    "consumer background check",
  ],
  [
    "authorization to use likeness",
    "your likeness",
    "cellular sales parties",
  ],
  [
    "dispute resolution agreement",
    "all disputes must be arbitrated",
    "american arbitration association",
  ],
]

export const ICIMS_AUTO_ACCEPT_AGREEMENT_TITLES = [
  "applicant's certification & agreement",
  "authorization to use likeness",
  "dispute resolution agreement",
]

export const ICIMS_AUTO_CHECK_CHECKBOX_SIGNAL_GROUPS = [
  ["please acknowledge", "pre-employment assessments"],
  ["i agree", "false statements", "former employment", "references"],
  ["ai usage acknowledgement", "i agree not to use ai", "assessments"],
]

const VETERAN_ALIASES = {
  pick: [
    ICIMS_PACKET_VETERAN_LABEL,
    "Protected Veteran Status",
    "Veteran Status",
    "Voluntary Self-Identification of Veteran Status",
  ],
  spread: [ICIMS_PACKET_VETERAN_LABEL],
}

const DISABILITY_ALIASES = {
  pick: [
    ICIMS_PACKET_DISABILITY_LABEL,
    "Disability",
    "Disability status",
    "Voluntary Self-Identification of Disability",
  ],
  spread: [ICIMS_PACKET_DISABILITY_LABEL, "Disability", "Disability status"],
}

const NAME_ALIASES = {
  pick: [NAME_LABEL, YOUR_NAME_LABEL],
  spread: [NAME_LABEL, YOUR_NAME_LABEL],
}

const DATE_ALIASES = {
  pick: [TODAYS_DATE_LABEL, "Date", "Today's date"],
  spread: [TODAYS_DATE_LABEL],
}

const SIGNATURE_ALIASES = {
  pick: [SIGNATURE_LABEL, "signature"],
  spread: [SIGNATURE_LABEL],
}

const STATE_ALIASES = {
  pick: [
    "State/Province",
    "State",
    "Province",
    "state",
    "stateProvince",
  ],
  spread: ["State/Province"],
}

const PHONE_TYPE_ALIASES = {
  pick: [
    "Phones - Type",
    "Phones - Type - enter mobile for text alerts",
    "Phone - Type",
    "Phone - Type - enter mobile for text alerts",
    "Phone Type",
    "Type",
  ],
  spread: ["Phone Type"],
}

const PHONE_TYPE_NESTED_PICK = {
  pick: [
    "Phones - Type",
    "Phones - Type - enter mobile for text alerts",
    "Phone Type",
    "Type",
  ],
}

const PHONE_NUMBER_ALIASES = {
  pick: [
    "Phones - Phone Number",
    "Phones - Number",
    "Phone - Phone Number",
    "Phone Number",
    "Number",
    "phoneNumber",
  ],
  spread: ["Phone Number", "Number (xxx) xxx-xxxx"],
}

const PHONE_NUMBER_NESTED_PICK = {
  pick: [
    "Phones - Phone Number",
    "Phones - Number",
    "Phone Number",
    "Number",
    "phoneNumber",
  ],
}

const PHONE_COUNTRY_ALIASES = {
  pick: [
    "Phones - Phone Country Code",
    "Phone - Phone Country Code",
    "Phone Country Code",
    "Country Code",
    "countryCode",
  ],
  spread: ["Phone Country Code", "Country Code"],
}

const PHONE_COUNTRY_NESTED_PICK = {
  pick: [
    "Phones - Phone Country Code",
    "Phone Country Code",
    "Country Code",
    "countryCode",
  ],
}

const SALARY_CURRENCY_NESTED = {
  pick: ["Salary Currency", "Currency"],
  spread: ["Salary Currency", "Currency"],
}

const SALARY_AMOUNT_NESTED = {
  pick: ["Desired Salary", "Salary", "Amount", "Amount (Numbers only)"],
  spread: ["Desired Salary", "Amount (Numbers only)"],
}

const SALARY_TIMEFRAME_NESTED = {
  pick: ["Salary Time Frame", "Time Frame"],
  spread: ["Salary Time Frame", "Time Frame"],
}

const SALARY_CURRENCY_ALIASES = {
  pick: [
    "Salary Currency",
    "Desired Salary - Currency",
    "Desired Salary Max - Currency",
    "Currency",
  ],
  spread: ["Salary Currency", "Currency"],
}

const SALARY_AMOUNT_ALIASES = {
  pick: [
    "Desired Salary - Amount (Numbers only)",
    "Desired Salary - Amount",
    "Desired Salary Max - Amount (Numbers only)",
    "Desired Salary Max - Amount",
    "Desired Salary",
    "Salary",
    "Amount",
    "Amount (Numbers only)",
  ],
  spread: ["Desired Salary", "Amount (Numbers only)"],
}

const SALARY_TIMEFRAME_ALIASES = {
  pick: [
    "Desired Salary - Time Frame",
    "Desired Salary Max - Time Frame",
    "Salary Time Frame",
    "Time Frame",
  ],
  spread: ["Salary Time Frame", "Time Frame"],
}

const SALARY_CURRENCY_SELECTOR =
  'select[id$="Salary_Currency"], select[name$="Salary_Currency"], .iCIMS_Forms_SalaryField select[id$="_Currency"], .iCIMS_Forms_SalaryField select[name$="_Currency"]'

const SALARY_TIMEFRAME_SELECTOR =
  'select[id$="Salary_Timeframe"], select[name$="Salary_Timeframe"], .iCIMS_Forms_SalaryField select[id$="_Timeframe"], .iCIMS_Forms_SalaryField select[name$="_Timeframe"], .iCIMS_Forms_SalaryField select[id$="_TimeFrame"], .iCIMS_Forms_SalaryField select[name$="_TimeFrame"]'

const EMPLOYER_ALIASES = {
  pick: [
    "organization",
    "Organization",
    "Employer",
    EMPLOYER_NA_STRAIGHT,
    EMPLOYER_NA_CURLY,
  ],
  spread: [
    "organization",
    "Organization",
    "Employer",
    EMPLOYER_NA_STRAIGHT,
    EMPLOYER_NA_CURLY,
  ],
}

const TITLE_ALIASES = {
  pick: [
    "jobTitle",
    "Job Title",
    "Title",
    TITLE_NA_STRAIGHT,
    TITLE_NA_CURLY,
  ],
  spread: [
    "jobTitle",
    "Job Title",
    "Title",
    TITLE_NA_STRAIGHT,
    TITLE_NA_CURLY,
  ],
}

const SCHOOL_PICK = [
  "School",
  "school",
  "organization",
  "Organization",
]
const SCHOOL_RAW_PICK = [
  "rawSchool",
  "School original answer",
  "School",
  "School/Institution",
  "school",
  "organization",
  "Organization",
]
const SCHOOL_SPREAD = ["School", "School/Institution"]
const MAJOR_LABEL_PICK = ["Study", "Major/Area of Study"]
const MAJOR_RAW_PICK = ["rawMajor"]
const MAJOR_FALLBACK_KEYS = ["Study", "Major"]
const MAJOR_SPREAD = [
  "Study",
  "Major",
  "Area of Study",
  "Major/Area of Study",
]

export const ICIMS_LEGACY_END_DATE_MATCH_LABELS = ["To"]
export const ICIMS_EMPLOYMENT_END_DATE_RECORD_KEYS = [
  "End",
  "End Date",
  "End Date (Leave blank if current employer)",
]
export const ICIMS_EDUCATION_END_DATE_RECORD_KEYS = [
  "End",
  "End Date",
  "School End Date",
  "Graduation Date",
  "Completion Date",
]

function textIncludesAllSignalGroups(text, signalGroups) {
  let normalized = utils.normalizeIcimsWhitespace(text).toLowerCase()
  return (
    !!normalized &&
    signalGroups.some((group) =>
      group.every((signal) => normalized.includes(signal)),
    )
  )
}

export function resolveIcimsPacketLabel(title, body, extra = "") {
  let combined = [title, body, extra].join(" ")
  return (
    ICIMS_PACKET_MATCHERS.find(({ signalGroups }) =>
      textIncludesAllSignalGroups(combined, signalGroups),
    )?.label ?? ""
  )
}

export function isIcimsPacketSemanticTitle(text) {
  return ICIMS_PACKET_MATCHERS.some(({ signalGroups }) =>
    textIncludesAllSignalGroups(text, signalGroups),
  )
}

function getFieldDescription(label) {
  let normalized = utils.normalizeIcimsRuleLabel(label).toLowerCase()
  if (normalized === "school/institution") {
    return "Please return the school name in English."
  }
  if (normalized === "what is your desired salary?") {
    return "Please return your desired salary. It must be a number."
  }
  if (normalized === "amount (numbers only)" || normalized === "amount") {
    return "Please return a specific number for the expected salary."
  }
  if (normalized === "time frame" || normalized === "salary time frame") {
    return "Please return the exact option value, not a number."
  }
  if (normalized === "if yes, what is/was date of your separation?") {
    return "This question asks for the specific date you left your job."
  }
  if (
    normalized ===
    "are you open to relocation? if yes, please list cities you are willing to relocate to where we have an office location. current locations are wilkes-barre, pa, new york, ny, parsippany, nj, rancho cordova, ca. upcoming office locations: philadelphia, pa, conshohocken, pa, atlanta, ga, dallas, tx, chicago, il, scottsdale, az."
  ) {
    return "Please return either 'Yes' or 'No'."
  }
  return undefined
}

function mapPhoneTypeToSelectText(value) {
  return mapValueToSelectOptionText(
    value,
    'select[id$="PhoneType"], select[name$="PhoneType"]',
  )
}

function formatE164Prefix(value) {
  let digits = String(value ?? "").replace(/\D/g, "")
  return digits ? `+${digits}` : ""
}

function countryNameFromValue(value) {
  let raw = Array.isArray(value) ? value[0] : value
  let text = utils.normalizeIcimsWhitespace(String(raw ?? ""))
  if (!text) return ""
  let iso2 = phoneCountryCode.resolveIso2FromCountryName(text)
  if (!iso2) return ""
  if (iso2 === "us") return "United States"
  if (iso2 === "ca") return "Canada"
  return text
}

function resolveCountryCodeDisplay(value) {
  let e164 = formatE164Prefix(value)
  if (e164) return e164 === "+1" ? "United States" : e164
  return countryNameFromValue(value)
}

function resolvePhoneParts(phoneNumber, country, countryCode) {
  return {
    countryCode: resolveCountryCodeDisplay(
      phoneCountryCode.resolvePhoneCountrySource(
        phoneNumber,
        countryCode,
        country,
      ),
    ),
    phoneNumber: phoneCountryCode.resolvePhoneFieldValue(
      phoneNumber,
      countryCode,
      country,
    ),
  }
}

function expandStateAbbreviation(value) {
  let text = utils.normalizeIcimsWhitespace(value)
  return text ? (constants.STATE_MAP[text.toUpperCase()] ?? text) : ""
}

function mapValueToSelectOptionText(value, selector) {
  let text = utils.normalizeIcimsWhitespace(value)
  if (!text) return ""
  if (typeof document === "undefined") return text

  let select = document.querySelector(selector)
  if (!select) return text

  let options = Array.from(select.options)
    .map((option) => ({
      text: utils.normalizeIcimsWhitespace(option.text),
      value: utils.normalizeIcimsWhitespace(option.value),
    }))
    .filter(
      (option) =>
        !!option.text && option.text !== "\u2014 Make a Selection \u2014",
    )

  return (
    options.find(
      (option) => option.text === text || option.value === text,
    )?.text ||
    (Number.isInteger(Number(text)) ? options[Number(text)]?.text : "") ||
    text
  )
}

function normalizeRuleForRequest(rule) {
  let label = utils.normalizeIcimsRuleLabel(rule.label)
  let description =
    ("description" in rule ? rule.description : undefined) ??
    getFieldDescription(label)
  let normalized = {
    ...rule,
    label,
    ...(description ? { description } : {}),
  }

  let children = "children" in rule ? rule.children : undefined
  if (Array.isArray(children)) {
    normalized.children = children.map((child) =>
      normalizeRuleForRequest(child),
    )
  }
  return normalized
}

export function formatRulesForRequest(rules) {
  let result = []
  let seenSectionTypes = new Set()

  for (let rule of rules) {
    if (
      rule.type === enums.FIELD_TYPE.EDUCATION ||
      rule.type === enums.FIELD_TYPE.EMPLOYMENT
    ) {
      let typeKey = String(rule.type)
      if (seenSectionTypes.has(typeKey)) continue
      seenSectionTypes.add(typeKey)
    }
    result.push(normalizeRuleForRequest(rule))
  }

  return result
}

function isPhoneSectionLabel(label) {
  let text = utils.normalizeIcimsWhitespace(label).toLowerCase()
  return /^phones?\b/.test(text) || /\bphone number\b/.test(text)
}

export function expandIcimsPhoneSectionRulesForRequest(rules) {
  return rules.flatMap((rule) =>
    rule.type === enums.FIELD_TYPE.SECTION &&
    isPhoneSectionLabel(rule.label) &&
    Array.isArray(rule.children)
      ? (rule.children ?? [])
      : [rule],
  )
}

export function normalizeLegacySectionLabel(label) {
  let text = utils
    .normalizeIcimsWhitespace(label)
    .replace(/[:\uff1a]\s*$/, "")
  if (!text) return ""

  let lower = text.toLowerCase()
  if (lower === "employer name" || lower === "name of employer") {
    return "Employer"
  }
  if (lower === "school name" || lower === "school/institution name") {
    return "School"
  }
  if (lower === "from") return "Start Date"
  if (lower === "to") return "End Date"
  return text
}

function coerceBoolean(value) {
  if (typeof value === "boolean") return value
  if (typeof value === "number") return value === 1
  if (typeof value === "string") {
    let normalized = value.trim().toLowerCase()
    return (
      normalized === "true" ||
      normalized === "yes" ||
      normalized === "y" ||
      normalized === "1"
    )
  }
  return false
}

function firstStringValue(value) {
  if (value == null) return ""
  let item = Array.isArray(value) ? value[0] : value
  return item == null ? "" : String(item).trim()
}

function parsePhoneStringRecord(value) {
  let text = utils.normalizeIcimsWhitespace(String(value ?? ""))
  if (!text) return null
  let match = text.match(/^([^:\uff1a]+?)\s*[:\uff1a]\s*(.+)$/)
  return match
    ? { "Phone Type": match[1].trim(), "Phone Number": match[2].trim() }
    : { "Phone Number": text }
}

function coercePhoneRecord(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) return value
  if (!Array.isArray(value)) return null

  let objectItem = value.find(
    (item) => item && typeof item === "object" && !Array.isArray(item),
  )
  if (objectItem) return objectItem

  let stringItem = value.find(
    (item) =>
      typeof item === "string" && utils.normalizeIcimsWhitespace(item),
  )
  return stringItem ? parsePhoneStringRecord(stringItem) : null
}

function pickFirstPresent(record, keys) {
  if (!record) return ""
  for (let key of keys) {
    let value = firstStringValue(record[key])
    if (value) return value
  }
  return ""
}

function isOtherMajor(value) {
  let text = utils.normalizeIcimsWhitespace(value).toLowerCase()
  return text === "other" || text === "others"
}

function spreadValue(record, value, keys) {
  for (let key of keys) record[key] = value
}

export function applyIcimsStateProvinceFallback(answer, stateProvince) {
  let value = String(stateProvince ?? "").trim()
  if (!value) return answer

  let regular = answer.regular ?? {}
  let existing = pickFirstPresent(regular, STATE_ALIASES.pick)
  if (!existing) {
    regular["State/Province"] = value
    answer.regular = regular
  }
  return answer
}

export function applyIcimsEducationProfileRawFallback(answer, profile) {
  let education = answer.education
  let profileEducation = profile?.education
  if (!Array.isArray(education) || !Array.isArray(profileEducation)) {
    return answer
  }

  education.forEach((row, index) => {
    let profileRow = profileEducation[index]
    if (!row || !profileRow) return

    if (!pickFirstPresent(row, ["rawSchool"])) {
      let school = pickFirstPresent(profileRow, ["organization"])
      if (school) row.rawSchool = school
    }
    if (!pickFirstPresent(row, ["rawDegree"])) {
      let degree = pickFirstPresent(profileRow, ["accreditation"])
      if (degree) row.rawDegree = degree
    }
  })

  return answer
}

export function formatAnswer(answer) {
  if (answer.regular) {
    let referral = pickFirstPresent(answer.regular, ["Referral", "referral"])
    if (referral) {
      answer.regular[
        "Did a current Ascension, AMITA, Presence Health, or their associated Health Ministries employee refer you to this role?"
      ] = referral
    }

    let veteran = pickFirstPresent(answer.regular, VETERAN_ALIASES.pick)
    if (veteran) {
      spreadValue(answer.regular, veteran.trim(), VETERAN_ALIASES.spread)
    }

    let disability = pickFirstPresent(answer.regular, DISABILITY_ALIASES.pick)
    if (disability) {
      spreadValue(answer.regular, disability, DISABILITY_ALIASES.spread)
    }

    let name = pickFirstPresent(answer.regular, NAME_ALIASES.pick)
    if (name) spreadValue(answer.regular, name, NAME_ALIASES.spread)

    let date = pickFirstPresent(answer.regular, DATE_ALIASES.pick)
    if (date) spreadValue(answer.regular, date, DATE_ALIASES.spread)

    let signature = pickFirstPresent(answer.regular, SIGNATURE_ALIASES.pick)
    if (signature) {
      spreadValue(
        answer.regular,
        coerceBoolean(signature) ? "true" : signature,
        SIGNATURE_ALIASES.spread,
      )
    }

    let stateRaw = pickFirstPresent(answer.regular, STATE_ALIASES.pick)
    let state = stateRaw ? expandStateAbbreviation(stateRaw) : ""
    if (state) spreadValue(answer.regular, state, STATE_ALIASES.spread)

    let phones = answer.regular.Phones ?? answer.regular.Phone
    let phoneRecord = coercePhoneRecord(phones)
    let phoneTypeRaw =
      pickFirstPresent(answer.regular, PHONE_TYPE_ALIASES.pick) ||
      pickFirstPresent(phoneRecord, PHONE_TYPE_NESTED_PICK.pick)
    let phoneType = phoneTypeRaw ? mapPhoneTypeToSelectText(phoneTypeRaw) : ""
    if (phoneType) {
      spreadValue(answer.regular, phoneType, PHONE_TYPE_ALIASES.spread)
    }

    let phoneNumber =
      pickFirstPresent(answer.regular, PHONE_NUMBER_ALIASES.pick) ||
      pickFirstPresent(phoneRecord, PHONE_NUMBER_NESTED_PICK.pick)
    let countryCodeRaw =
      pickFirstPresent(answer.regular, PHONE_COUNTRY_ALIASES.pick) ||
      pickFirstPresent(phoneRecord, PHONE_COUNTRY_NESTED_PICK.pick)
    let phoneParts = phoneNumber
      ? resolvePhoneParts(phoneNumber, answer.country, countryCodeRaw)
      : null
    let countryCode =
      (countryCodeRaw ? resolveCountryCodeDisplay(countryCodeRaw) : "") ||
      phoneParts?.countryCode ||
      ""

    if (phoneNumber) {
      spreadValue(
        answer.regular,
        phoneParts?.phoneNumber || phoneNumber,
        PHONE_NUMBER_ALIASES.spread,
      )
    }
    if (countryCode) {
      spreadValue(answer.regular, countryCode, PHONE_COUNTRY_ALIASES.spread)
    }

    let desiredSalary =
      answer.regular["Desired Salary"] ??
      answer.regular["Desired Salary Max"] ??
      answer.regular.Salary
    let salaryObject =
      desiredSalary &&
      typeof desiredSalary === "object" &&
      !Array.isArray(desiredSalary)
        ? desiredSalary
        : null

    if (salaryObject) {
      let nestedCurrency = pickFirstPresent(
        salaryObject,
        SALARY_CURRENCY_NESTED.pick,
      )
      if (nestedCurrency) {
        spreadValue(
          answer.regular,
          nestedCurrency,
          SALARY_CURRENCY_NESTED.spread,
        )
      }
      let nestedAmount = pickFirstPresent(
        salaryObject,
        SALARY_AMOUNT_NESTED.pick,
      )
      if (nestedAmount) {
        spreadValue(answer.regular, nestedAmount, SALARY_AMOUNT_NESTED.spread)
      }
      let nestedTimeframe = pickFirstPresent(
        salaryObject,
        SALARY_TIMEFRAME_NESTED.pick,
      )
      if (nestedTimeframe) {
        spreadValue(
          answer.regular,
          nestedTimeframe,
          SALARY_TIMEFRAME_NESTED.spread,
        )
      }
    }

    let currencyRaw = pickFirstPresent(
      answer.regular,
      SALARY_CURRENCY_ALIASES.pick,
    )
    let amountRaw = pickFirstPresent(
      answer.regular,
      SALARY_AMOUNT_ALIASES.pick,
    )
    let timeframeRaw = pickFirstPresent(
      answer.regular,
      SALARY_TIMEFRAME_ALIASES.pick,
    )
    let currency = currencyRaw
      ? mapValueToSelectOptionText(currencyRaw, SALARY_CURRENCY_SELECTOR)
      : ""
    let amount = ["undefined", "null"].includes(
      utils.normalizeIcimsWhitespace(amountRaw),
    )
      ? ""
      : utils.normalizeIcimsWhitespace(amountRaw)
    let timeframe = timeframeRaw
      ? mapValueToSelectOptionText(timeframeRaw, SALARY_TIMEFRAME_SELECTOR)
      : ""

    if (currency) {
      spreadValue(answer.regular, currency, SALARY_CURRENCY_ALIASES.spread)
    }
    if (amount) {
      spreadValue(answer.regular, amount, SALARY_AMOUNT_ALIASES.spread)
    }
    if (timeframe) {
      spreadValue(answer.regular, timeframe, SALARY_TIMEFRAME_ALIASES.spread)
    }
  }

  if (answer.workExperience?.length) {
    for (let row of answer.workExperience) {
      let employer = pickFirstPresent(row, EMPLOYER_ALIASES.pick) || "N/A"
      let title = pickFirstPresent(row, TITLE_ALIASES.pick) || "N/A"
      spreadValue(row, employer, EMPLOYER_ALIASES.spread)
      spreadValue(row, title, TITLE_ALIASES.spread)
      if (row?.Start) row["Start Date"] = row.Start
      if (row?.End) {
        row["End Date"] = row.End
        row["End Date (Leave blank if current employer)"] = row.End
      }
    }
  }

  if (answer.education?.length) {
    for (let row of answer.education) {
      let rawSchool = pickFirstPresent(row, SCHOOL_RAW_PICK)
      if (rawSchool) row.rawSchool = rawSchool

      let rawMajor = pickFirstPresent(row, MAJOR_RAW_PICK)
      if (rawMajor) {
        row.rawMajor = rawMajor
      } else {
        for (let key of MAJOR_FALLBACK_KEYS) {
          let value = pickFirstPresent(row, [key])
          if (value && !isOtherMajor(value)) {
            row.rawMajor = value
            break
          }
        }
      }

      let school = pickFirstPresent(row, SCHOOL_PICK)
      if (school) spreadValue(row, school, SCHOOL_SPREAD)

      let major = pickFirstPresent(row, MAJOR_LABEL_PICK)
      if (major) spreadValue(row, major, MAJOR_SPREAD)

      if (row?.Start) row["Start Date"] = row.Start
      if (row?.End) {
        row["End Date"] = row.End
        row["School End Date"] = row.End
        row["Graduation Date"] = row.End
        row["Completion Date"] = row.End
      }
    }
  }

  return answer
}
