// @ts-nocheck
/**
 * Walmart composite employment/education dialogs — open, fill mapping, save, snapshots.
 */

import * as observer from "../../methods/observer.ts"
import * as enums from "../../../core/enums.js"
import * as delay from "../../../utils/delay.js"
import * as rules from "./rules.ts"

const WALMART_COMPOSITE_DIALOG_SELECTOR =
  'dialog[aria-modal="true"], [role="dialog"][aria-modal="true"], [role="dialog"], [class*="mvk-popup-dialog" i], [class*="mvk-modal" i]'

const BUTTON_SELECTOR =
  'button, [role="button"], input[type="button"], input[type="submit"]'

const SECTION_INCLUDE = {
  employment: /\b(employment history|work)\b/i,
  education: /\beducation\b/i,
}

const SECTION_EXCLUDE = {
  employment: /\b(education|languages?|website)\b/i,
  education: /\b(employment history|work|languages?|website)\b/i,
}

const EDIT_PATTERN = /^edit\b/i

const COMPOSITE_TEMPLATES = {
  employment: {
    label: "Work",
    type: enums.FIELD_TYPE.EMPLOYMENT,
    addPattern: /add work experience/i,
    children: [
      { label: "Company name", type: enums.FIELD_TYPE.TEXT, required: true },
      { label: "Location", type: enums.FIELD_TYPE.TEXT, required: false },
      { label: "Role title", type: enums.FIELD_TYPE.TEXT, required: true },
      { label: "Role description", type: enums.FIELD_TYPE.TEXT, required: false },
      { label: "Start date (mm/yyyy)", type: enums.FIELD_TYPE.TEXT, required: true },
      {
        label: "I currently work here",
        type: enums.FIELD_TYPE.CHECKBOX,
        required: false,
      },
      { label: "End date (mm/yyyy)", type: enums.FIELD_TYPE.TEXT, required: true },
    ],
  },
  education: {
    label: "Education",
    type: enums.FIELD_TYPE.EDUCATION,
    addPattern: /add education/i,
    children: [
      {
        label: "School or university",
        type: enums.FIELD_TYPE.TEXT,
        required: true,
      },
      { label: "Degree", type: enums.FIELD_TYPE.SELECT, required: true },
      { label: "Field of study", type: enums.FIELD_TYPE.SELECT, required: true },
      {
        label: "Overall result (GPA)",
        type: enums.FIELD_TYPE.TEXT,
        required: false,
      },
      {
        label: "Start date (mm/dd/yyyy)",
        type: enums.FIELD_TYPE.TEXT,
        required: false,
      },
      {
        label: "End date, actual or expected (mm/dd/yyyy)",
        type: enums.FIELD_TYPE.TEXT,
        required: false,
      },
    ],
  },
}

const CERTIFICATES_LABEL = "Certificates and licenses"
const CERTIFICATES_ADD_PATTERN = /add certificates and licenses/i

const KNOWN_DEGREES = [
  "Associate Degree",
  "Bachelor's Degree",
  "Doctorate or Professional Degree",
  "GED",
  "High School Diploma",
  "Juris Doctor (J.D.)",
  "Master's Degree",
  "Other",
  "Trade or Technical Certificate",
]

const MONTH_NAME_TO_NUMBER = {
  jan: 1,
  january: 1,
  feb: 2,
  february: 2,
  mar: 3,
  march: 3,
  apr: 4,
  april: 4,
  may: 5,
  jun: 6,
  june: 6,
  jul: 7,
  july: 7,
  aug: 8,
  august: 8,
  sep: 9,
  sept: 9,
  september: 9,
  oct: 10,
  october: 10,
  nov: 11,
  november: 11,
  dec: 12,
  december: 12,
}

const SHORT_MONTH_NAMES = [
  "",
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

const LONG_MONTH_NAMES = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function collapseSpace(value) {
  return (value ?? "").replace(/\s+/g, " ").trim()
}

function toLower(value) {
  return collapseSpace(value).toLowerCase()
}

function normalizeCompareKey(value) {
  return toLower(value)
    .replace(/[\u2019\u2018`']/g, "'")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function normalizeLooseKey(value) {
  return toLower(String(value ?? ""))
    .replace(/[\u2019\u2018`']/g, "'")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function hasValue(value) {
  return null != value && "" !== collapseSpace(Array.isArray(value) ? value[0] : String(value))
}

function findByKeyPatterns(record, patterns) {
  return Object.entries(record).find(([key, value]) => {
    const lower = toLower(key)
    return hasValue(value) && patterns.some((pattern) => pattern.test(lower))
  })?.[1]
}

function mapDegreeLabel(raw) {
  const text = collapseSpace(Array.isArray(raw) ? raw[0] : String(raw))
  const lower = toLower(text).replace(/[\u2019\u2018`']/g, "'")
  return /\b(juris doctor|j\.?d\.?)\b/.test(lower)
    ? "Juris Doctor (J.D.)"
    : /\b(doctorate|doctoral|doctor|phd|ph\.?d\.?|m\.?d\.?)\b/.test(lower)
      ? "Doctorate or Professional Degree"
      : /\b(master|m\.?s\.?|mse|mba|m\.?eng)\b/.test(lower)
        ? "Master's Degree"
        : /\b(bachelor|b\.?s\.?|b\.?a\.?)\b/.test(lower)
          ? "Bachelor's Degree"
          : /\b(associate|a\.?s\.?|a\.?a\.?)\b/.test(lower)
            ? "Associate Degree"
            : /\bged\b/.test(lower)
              ? "GED"
              : /\bhigh school\b/.test(lower)
                ? "High School Diploma"
                : /\b(trade|technical|certificate|certification)\b/.test(lower)
                  ? "Trade or Technical Certificate"
                  : text
}

function isKnownDegree(value) {
  const key = normalizeLooseKey(value)
  return (
    !!key &&
    KNOWN_DEGREES.some((degree) => {
      const degreeKey = normalizeLooseKey(degree)
      const allowPartial = key.length >= 8 && degreeKey.length >= 8
      return (
        degreeKey === key ||
        (allowPartial && (degreeKey.includes(key) || key.includes(degreeKey)))
      )
    })
  )
}

function findAccreditation(record) {
  return findByKeyPatterns(record, [
    /^accreditation$/,
    /^credential$/,
    /^qualification$/,
    /^education level$/,
  ])
}

function extractGpaNumber(raw) {
  const text = collapseSpace(Array.isArray(raw) ? raw[0] : String(raw))
  const beforeSlash = text.split("/")[0]?.trim() ?? text
  const match = beforeSlash.match(/\d+(?:\.\d+)?/)
  return match?.[0] ?? beforeSlash
}

function findGpa(record) {
  return findByKeyPatterns(record, [
    /^gpa$/,
    /^overall result$/,
    /^overall result gpa$/,
    /^grade point average$/,
  ])
}

function findStartDate(record) {
  return findByKeyPatterns(record, [/^start$/, /^start date\b/, /^start month\b/, /^from\b/])
}

function findEndDate(record) {
  return findByKeyPatterns(record, [
    /^end$/,
    /^end date\b/,
    /^end month\b/,
    /^graduation date\b/,
    /^to\b/,
  ])
}

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate()
}

function padTwo(value) {
  return String(value).padStart(2, "0")
}

function formatFullDate(year, month, day) {
  return `${padTwo(month)}/${padTwo(day)}/${year}`
}

function formatMonthYear(year, month) {
  return `${padTwo(month)}/${year}`
}

function formatDateValue(raw, dayMode) {
  const text = collapseSpace(Array.isArray(raw) ? raw[0] : String(raw))
  if (!text) return ""
  const cleaned = text.replace(/,/g, " ").replace(/\s+/g, " ").trim()

  const iso = cleaned.match(/^(\d{4})[/-](\d{1,2})(?:[/-](\d{1,2}))?$/)
  if (iso) {
    const year = Number(iso[1])
    const month = Number(iso[2])
    const day = iso[3] ? Number(iso[3]) : "first" === dayMode ? 1 : daysInMonth(year, month)
    return formatFullDate(year, month, day)
  }

  const slash = cleaned.match(/^(\d{1,2})[/-](\d{1,2}|\d{4})(?:[/-](\d{4}))?$/)
  if (slash) {
    const month = Number(slash[1])
    const hasDay = !!slash[3]
    const year = Number(hasDay ? slash[3] : slash[2])
    const day = hasDay
      ? Number(slash[2])
      : "first" === dayMode
        ? 1
        : daysInMonth(year, month)
    return formatFullDate(year, month, day)
  }

  const named = cleaned.match(/^([a-z]+)\s+(?:(\d{1,2})\s+)?(\d{4})$/i)
  if (named) {
    const month = MONTH_NAME_TO_NUMBER[named[1].toLowerCase()]
    const year = Number(named[3])
    if (month) {
      const day = named[2]
        ? Number(named[2])
        : "first" === dayMode
          ? 1
          : daysInMonth(year, month)
      return formatFullDate(year, month, day)
    }
  }

  return text
}

function toMonthYear(raw) {
  const full = formatDateValue(raw, "first")
  const mdy = full.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  if (mdy) return formatMonthYear(Number(mdy[3]), Number(mdy[1]))
  const my = full.match(/^(\d{1,2})\/(\d{4})$/)
  return my ? formatMonthYear(Number(my[2]), Number(my[1])) : full
}

function getNormalizedFieldKey(record, fieldLabel) {
  const value =
    record[fieldLabel] ??
    findByKeyPatterns(
      record,
      "Company name" === fieldLabel
        ? [/^company\b/, /^employer\b/, /^organization\b/]
        : "Role title" === fieldLabel
          ? [/^role title\b/, /^title\b/, /^job title\b/, /^position\b/]
          : "School or university" === fieldLabel
            ? [/^school\b/, /^school name\b/, /^university\b/, /^institution\b/]
            : "Field of study" === fieldLabel
              ? [/^field of study\b/, /^major\b/, /^discipline\b/, /^area of study\b/]
              : [],
    )
  return normalizeCompareKey(Array.isArray(value) ? value[0] : String(value ?? ""))
}

function getNormalizedDateKey(kind, record, fieldLabel) {
  const value = record[fieldLabel]
  return hasValue(value)
    ? "employment" === kind
      ? toMonthYear(value)
      : formatDateValue(value, /^end date/i.test(fieldLabel) ? "last" : "first")
    : ""
}

function getWalmartCompositeRecordKey(kind, record) {
  const normalized =
    "employment" === kind
      ? normalizeWalmartEmploymentRecord(record)
      : normalizeWalmartEducationRecord(record)

  if ("employment" === kind) {
    const company = getNormalizedFieldKey(normalized, "Company name")
    const title = getNormalizedFieldKey(normalized, "Role title")
    const start = getNormalizedDateKey(kind, normalized, "Start date (mm/yyyy)")
    const end = getNormalizedDateKey(kind, normalized, "End date (mm/yyyy)")
    return [company, title, start, end].filter(Boolean).join("|")
  }

  const school = getNormalizedFieldKey(normalized, "School or university")
  const degree = getNormalizedFieldKey(normalized, "Degree")
  const field = getNormalizedFieldKey(normalized, "Field of study")
  const start = getNormalizedDateKey(kind, normalized, "Start date (mm/dd/yyyy)")
  const end = getNormalizedDateKey(
    kind,
    normalized,
    "End date, actual or expected (mm/dd/yyyy)",
  )
  return [school, degree, field, start, end].filter(Boolean).join("|")
}

function expandDateTokens(value) {
  const tokens = new Set()
  const mdy = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  const my = value.match(/^(\d{1,2})\/(\d{4})$/)
  if (mdy) {
    const month = Number(mdy[1])
    const day = Number(mdy[2])
    const year = Number(mdy[3])
    const short = SHORT_MONTH_NAMES[month]
    const long = LONG_MONTH_NAMES[month]
    tokens.add(`${padTwo(month)} ${padTwo(day)} ${year}`)
    tokens.add(`${month} ${day} ${year}`)
    tokens.add(`${padTwo(month)} ${year}`)
    tokens.add(`${month} ${year}`)
    if (short) tokens.add(`${short} ${day} ${year}`)
    if (long) tokens.add(`${long} ${day} ${year}`)
    if (short) tokens.add(`${short} ${year}`)
    if (long) tokens.add(`${long} ${year}`)
  } else if (my) {
    const month = Number(my[1])
    const year = Number(my[2])
    const short = SHORT_MONTH_NAMES[month]
    const long = LONG_MONTH_NAMES[month]
    tokens.add(`${padTwo(month)} ${year}`)
    tokens.add(`${month} ${year}`)
    if (short) tokens.add(`${short} ${year}`)
    if (long) tokens.add(`${long} ${year}`)
  } else if (value) {
    tokens.add(value)
  }
  return Array.from(tokens).map(normalizeCompareKey).filter(Boolean)
}

function getRecordMatchTokenGroups(kind, record) {
  const parts = getWalmartCompositeRecordKey(kind, record).split("|").filter(Boolean)
  return parts.map((part) =>
    /^\d{1,2}\/(?:\d{1,2}\/)?\d{4}$/.test(part)
      ? expandDateTokens(part)
      : [normalizeCompareKey(part)],
  )
}

function dedupeWalmartCompositeRecords(kind, records) {
  const seen = new Set()
  const result = []
  for (const record of records) {
    const normalized =
      "employment" === kind
        ? normalizeWalmartEmploymentRecord(record)
        : normalizeWalmartEducationRecord(record)
    const key = getWalmartCompositeRecordKey(kind, normalized)
    if (key && seen.has(key)) continue
    if (key) seen.add(key)
    result.push(normalized)
  }
  return result
}

function getAnswerRecords(kind, answer) {
  const records = "employment" === kind ? answer?.workExperience : answer?.education
  return Array.isArray(records) ? dedupeWalmartCompositeRecords(kind, records) : []
}

function getCardSummaryText(card) {
  const text = collapseSpace(getOwnTextWithoutButtons(card))
  return text || getElementText(card)
}

function mapExistingCardsToRecords(kind, records) {
  const cards = getEditButtonsForKind(kind)
  if (0 === cards.length) return []
  const used = new Set()
  return cards
    .map((button) => {
      const card = getCardRoot(button)
      const cardKey = getCardCompareKey(card)
      const matchIndex = records.findIndex(
        (record, index) =>
          !used.has(index) && recordMatchesCard(kind, cardKey, record),
      )
      if (matchIndex >= 0) {
        used.add(matchIndex)
        return records[matchIndex]
      }
      const summary = getCardSummaryText(card)
      return summary ? { Summary: summary } : null
    })
    .filter((record) => !!record)
}

function buildSnapshotRecords(kind, answer) {
  const records = getAnswerRecords(kind, answer)
  const mapped = mapExistingCardsToRecords(kind, records)
  return mapped.length > 0 ? mapped : records
}

function getWalmartAdditionalFormSnapshotData(answer) {
  const employment = buildSnapshotRecords("employment", answer)
  const education = buildSnapshotRecords("education", answer)
  const snapshot = {}
  if (employment.length > 0) snapshot.employment = employment
  if (education.length > 0) snapshot.education = education
  return snapshot
}

function getElementText(element) {
  if (!element) return ""
  const el = element
  return collapseSpace(
    el.innerText ||
      element.textContent ||
      el.value ||
      element.getAttribute?.("aria-label") ||
      element.getAttribute?.("title"),
  )
}

function getOwnTextWithoutButtons(element) {
  const el = element
  if (el.tagName) {
    const direct = collapseSpace(
      el.textContent || el.value || el.getAttribute?.("aria-label"),
    )
    if (
      BUTTON_SELECTOR.split(",").some((selector) => el.matches?.(selector.trim())) &&
      (EDIT_PATTERN.test(direct) ||
        getTemplate("employment").addPattern.test(direct) ||
        getTemplate("education").addPattern.test(direct))
    ) {
      return ""
    }
    const children = Array.from(el.childNodes ?? [])
    if (children.length > 0) {
      return children.map(getOwnTextWithoutButtons).join(" ") || direct
    }
  }
  return collapseSpace(element.textContent)
}

function getCardCompareKey(element) {
  return element ? normalizeCompareKey(getOwnTextWithoutButtons(element)) : ""
}

function isVisible(element) {
  if (!element) return false
  const el = element
  if (el.hidden || element.getAttribute?.("aria-hidden") === "true") return false
  if (
    "undefined" != typeof window &&
    "function" == typeof window.getComputedStyle
  ) {
    const style = window.getComputedStyle(element)
    if ("none" === style.display || "hidden" === style.visibility) return false
  }
  const rect = el.getBoundingClientRect?.()
  return !rect || 0 !== rect.width || 0 !== rect.height
}

function isDisabled(element) {
  return (
    ("undefined" != typeof HTMLButtonElement &&
      element instanceof HTMLButtonElement &&
      element.disabled) ||
    ("undefined" != typeof HTMLInputElement &&
      element instanceof HTMLInputElement &&
      element.disabled) ||
    "true" === element.getAttribute("aria-disabled")
  )
}

function isHelperChrome(element) {
  return !!element.closest?.(
    "#jobright-helper-id, #jobright-helper-plugin, [id='jobright-helper-id'], [id='jobright-helper-plugin']",
  )
}

function createElement(tag) {
  return "undefined" != typeof document && document.createElement
    ? document.createElement(tag)
    : {}
}

function buildTemplateChildRule(child) {
  const label = createElement("label")
  if (child.type === enums.FIELD_TYPE.SELECT) {
    return {
      label: child.label,
      required: child.required,
      type: enums.FIELD_TYPE.SELECT,
      options: [],
      $label: label,
      $input: createElement("button"),
    }
  }
  if (child.type === enums.FIELD_TYPE.CHECKBOX) {
    const input = createElement("input")
    return {
      label: child.label,
      required: child.required,
      type: enums.FIELD_TYPE.CHECKBOX,
      options: [child.label],
      $label: label,
      $input: input,
      $checkboxs: [input],
    }
  }
  return {
    label: child.label,
    required: child.required,
    type: enums.FIELD_TYPE.TEXT,
    $label: label,
    $input: createElement("input"),
  }
}

function getTemplate(kind) {
  return COMPOSITE_TEMPLATES[kind]
}

function toOptionsMeta(children) {
  return children.map((child) => ({
    label: child.label,
    type: child.type,
    options: "options" in child ? child.options : void 0,
  }))
}

function mapEmploymentFieldLabel(raw) {
  const text = toLower(raw)
  return /^company name\b/.test(text)
    ? "Company name"
    : /^location\b/.test(text)
      ? "Location"
      : /^role title\b/.test(text)
        ? "Role title"
        : /^role description\b/.test(text)
          ? "Role description"
          : /^start date\b/.test(text)
            ? "Start date (mm/yyyy)"
            : /currently work here/.test(text)
              ? "I currently work here"
              : /^end date\b/.test(text)
                ? "End date (mm/yyyy)"
                : null
}

function mapEducationFieldLabel(raw) {
  const text = toLower(raw)
  return /^school or university\b/.test(text)
    ? "School or university"
    : /^degree\b/.test(text)
      ? "Degree"
      : /^field of study\b/.test(text)
        ? "Field of study"
        : /^overall result\b/.test(text) || /\bgpa\b/.test(text)
          ? "Overall result (GPA)"
          : /^start date\b/.test(text)
            ? "Start date (mm/dd/yyyy)"
            : /^end date\b/.test(text)
              ? "End date, actual or expected (mm/dd/yyyy)"
              : null
}

function mapCompositeFieldLabel(kind, raw) {
  return "employment" === kind
    ? mapEmploymentFieldLabel(raw)
    : mapEducationFieldLabel(raw)
}

function getChildOrderIndex(kind, label) {
  return getTemplate(kind).children.findIndex((child) => child.label === label)
}

function getWalmartCompositeKindFromText(text) {
  const lower = toLower(text)
  if (!lower) return null
  return /\b(add|edit)\s+(work experience|employment)\b/.test(lower) ||
    (/company name/.test(lower) && /role title/.test(lower))
    ? "employment"
    : /\b(add|edit)\s+education\b/.test(lower) ||
        (/school or university/.test(lower) && /degree/.test(lower))
      ? "education"
      : /\b(add|edit)\s+languages?\b/.test(lower) ||
          (/reading proficiency/.test(lower) && /speaking proficiency/.test(lower))
        ? "language"
        : null
}

function isFillableWalmartCompositeKind(kind) {
  return "employment" === kind || "education" === kind
}

function buildWalmartCompositeTemplateRule(kind) {
  const template = getTemplate(kind)
  const children = template.children.map(buildTemplateChildRule)
  return {
    label: template.label,
    required: true,
    type: template.type,
    $input: createElement("section"),
    children,
    options: toOptionsMeta(children),
  }
}

function buildCertificatesTemplateRule() {
  return {
    label: CERTIFICATES_LABEL,
    required: false,
    type: enums.FIELD_TYPE.SECTION,
    $input: createElement("section"),
    children: [],
    options: [],
  }
}

function isInWalmartCompositeDialog(element) {
  const dialog = element.closest?.(WALMART_COMPOSITE_DIALOG_SELECTOR)
  return !!dialog && null !== getWalmartCompositeKindFromText(getElementText(dialog))
}

function getVisibleWalmartCompositeDialog(kind) {
  if ("undefined" == typeof document) return null
  const dialogs = Array.from(
    document.querySelectorAll(WALMART_COMPOSITE_DIALOG_SELECTOR),
  ).filter(isVisible)
  return (
    dialogs.find((dialog) => {
      const dialogKind = getWalmartCompositeKindFromText(getElementText(dialog))
      return kind ? dialogKind === kind : null !== dialogKind
    }) ?? null
  )
}

function findAddButton(kind) {
  if ("undefined" == typeof document) return null
  const { addPattern } = getTemplate(kind)
  return (
    Array.from(document.querySelectorAll(BUTTON_SELECTOR)).find(
      (button) =>
        !(
          !isVisible(button) ||
          isDisabled(button) ||
          isHelperChrome(button) ||
          isInWalmartCompositeDialog(button)
        ) && addPattern.test(getElementText(button)),
    ) ?? null
  )
}

function isEditButton(element) {
  const text = collapseSpace(
    getElementText(element) || element.value || element.getAttribute("aria-label"),
  )
  return EDIT_PATTERN.test(text)
}

function getCardRoot(button) {
  let parent = button.parentElement
  let best = button.parentElement ?? button
  let depth = 0
  while (
    parent &&
    depth < 8 &&
    "MAIN" !== parent.tagName &&
    "FORM" !== parent.tagName &&
    "main" !== parent.getAttribute("role")
  ) {
    const key = getCardCompareKey(parent)
    if (key) best = parent
    if (
      key &&
      (key.includes("employment history") ||
        key.includes("add work experience") ||
        key.includes("education add education") ||
        key.includes("languages add language"))
    ) {
      break
    }
    parent = parent.parentElement
    depth += 1
  }
  return best
}

function inferKindFromSectionText(text) {
  const employment = SECTION_INCLUDE.employment
  const education = SECTION_INCLUDE.education
  const languages = /\blanguages?\b/i
  return languages.test(text)
    ? null
    : employment.test(text) && !education.test(text)
      ? "employment"
      : education.test(text) && !employment.test(text)
        ? "education"
        : null
}

function inferKindFromPrecedingHeadings(button) {
  if (
    "undefined" == typeof document ||
    !document.body?.contains(button) ||
    "function" != typeof document.createTreeWalker
  ) {
    return null
  }
  const walker = document.createTreeWalker(
    document.body,
    "undefined" == typeof NodeFilter ? 1 : NodeFilter.SHOW_ELEMENT,
  )
  let node = walker.nextNode()
  let inferred = null
  while (node) {
    if (node === button || node.contains(button)) return inferred
    if (isVisible(node)) {
      const text = normalizeCompareKey(node.textContent)
      const short = text.length > 0 && text.length <= 80
      if (short) {
        if (/\bemployment history\b/.test(text) || "work" === text) {
          inferred = "employment"
        } else if ("education" === text) {
          inferred = "education"
        } else if (/^languages?$/.test(text)) {
          inferred = null
        }
      }
    }
    node = walker.nextNode()
  }
  return null
}

function getEditButtonsForKind(kind) {
  if ("undefined" == typeof document) return []
  const buttons = Array.from(document.querySelectorAll(BUTTON_SELECTOR)).filter(
    (button) =>
      isVisible(button) &&
      !isDisabled(button) &&
      !isHelperChrome(button) &&
      !isInWalmartCompositeDialog(button) &&
      isEditButton(button),
  )
  return buttons.filter((button) => {
    const card = getCardRoot(button)
    const cardText = getCardCompareKey(card)
    const inferred = inferKindFromPrecedingHeadings(button) || inferKindFromSectionText(cardText)
    if (inferred) return inferred === kind
    const include = SECTION_INCLUDE[kind]
    const exclude = SECTION_EXCLUDE[kind]
    return include.test(cardText) && !exclude.test(cardText)
  })
}

function recordMatchesCard(kind, cardKey, record) {
  const key = getWalmartCompositeRecordKey(kind, record)
  return (
    !!key &&
    getRecordMatchTokenGroups(kind, record).every((group) =>
      group.some((token) => cardKey.includes(token)),
    )
  )
}

function findMatchingEditButton(kind, record, index) {
  const buttons = getEditButtonsForKind(kind)
  const matched = buttons.find((button) =>
    recordMatchesCard(kind, getCardCompareKey(getCardRoot(button)), record),
  )
  return matched ?? buttons[index] ?? null
}

function getWalmartCompositeTemplateRules(root) {
  const scope = root ?? ("undefined" != typeof document ? document : null)
  if (!scope) return []
  const result = []
  for (const kind of ["employment", "education"]) {
    const hasAdd =
      "undefined" != typeof document && scope === document
        ? !!findAddButton(kind)
        : Array.from(scope.querySelectorAll(BUTTON_SELECTOR)).some(
            (button) =>
              isVisible(button) &&
              !isDisabled(button) &&
              getTemplate(kind).addPattern.test(getElementText(button)),
          )
    const hasDialog = !!getVisibleWalmartCompositeDialog(kind)
    if (hasAdd || hasDialog) result.push(buildWalmartCompositeTemplateRule(kind))
  }
  const hasCertificates = Array.from(scope.querySelectorAll(BUTTON_SELECTOR)).some(
    (button) =>
      isVisible(button) &&
      !isDisabled(button) &&
      CERTIFICATES_ADD_PATTERN.test(getElementText(button)),
  )
  if (hasCertificates) result.push(buildCertificatesTemplateRule())
  return result
}

function clickElement(element) {
  element.scrollIntoView?.({ block: "center", inline: "nearest" })
  element.focus?.()
  if ("undefined" == typeof MouseEvent || "undefined" == typeof window) {
    element.click?.()
    return
  }
  const rect = element.getBoundingClientRect?.()
  const eventInit = {
    bubbles: true,
    cancelable: true,
    composed: true,
    view: window,
    clientX: rect ? rect.left + rect.width / 2 : 0,
    clientY: rect ? rect.top + rect.height / 2 : 0,
  }
  element.dispatchEvent(new MouseEvent("pointerdown", eventInit))
  element.dispatchEvent(new MouseEvent("mousedown", eventInit))
  element.dispatchEvent(new MouseEvent("pointerup", eventInit))
  element.dispatchEvent(new MouseEvent("mouseup", eventInit))
  element.click?.()
}

async function closeVisibleDialog() {
  const dialog = getVisibleWalmartCompositeDialog()
  if (!dialog) return
  const closeButton = Array.from(dialog.querySelectorAll(BUTTON_SELECTOR)).find(
    (button) => {
      const text = getElementText(button)
      const aria = collapseSpace(button.getAttribute("aria-label"))
      return /^close$/i.test(text) || /^close$/i.test(aria)
    },
  )
  if (closeButton) {
    clickElement(closeButton)
    await observer.waitForCondition(
      () => !dialog.isConnected || !isVisible(dialog),
      { timeout: 1500, interval: 100, observeTarget: document.body },
    )
    await delay.delay(100)
  }
}

async function openWalmartCompositeDialog(kind, record, index = 0) {
  const existing = getVisibleWalmartCompositeDialog(kind)
  if (existing) return existing

  const other = getVisibleWalmartCompositeDialog()
  if (other) await closeVisibleDialog()

  const editButton = record ? findMatchingEditButton(kind, record, index) : null
  const trigger = editButton ?? findAddButton(kind)
  if (!trigger) return null

  clickElement(trigger)
  await observer.waitForCondition(() => !!getVisibleWalmartCompositeDialog(kind), {
    timeout: 3e3,
    interval: 100,
    observeTarget: document.body,
  })
  await delay.delay(200)
  return getVisibleWalmartCompositeDialog(kind)
}

function getWalmartCompositeDialogRule(kind, dialog = getVisibleWalmartCompositeDialog(kind)) {
  if (!dialog) return null
  const seen = new Set()
  const children = rules
    .extractRulesFromRoot(dialog)
    .map((rule) => {
      const mapped = mapCompositeFieldLabel(kind, rule.label)
      return mapped ? { ...rule, label: mapped } : null
    })
    .filter((rule) => !(!rule || seen.has(rule.label)) && (seen.add(rule.label), true))
    .sort(
      (a, b) =>
        getChildOrderIndex(kind, a.label) - getChildOrderIndex(kind, b.label),
    )
  if (0 === children.length) return null
  const template = getTemplate(kind)
  return {
    label: template.label,
    required: true,
    type: template.type,
    $input: dialog,
    children,
    options: toOptionsMeta(children),
  }
}

async function saveWalmartCompositeDialog(dialog) {
  const continueButton = Array.from(dialog.querySelectorAll(BUTTON_SELECTOR)).find(
    (button) => {
      const text = toLower(getElementText(button))
      return (
        isVisible(button) &&
        !isDisabled(button) &&
        ("continue" === text || /\bcontinue\b/.test(text))
      )
    },
  )
  return (
    !!continueButton &&
    (clickElement(continueButton),
    await observer.waitForCondition(
      () => !dialog.isConnected || !isVisible(dialog),
      { timeout: 3e3, interval: 100, observeTarget: document.body },
    ))
  )
}

function normalizeWalmartEmploymentRecord(record) {
  const next = { ...record }
  const start = findStartDate(record)
  const end = findEndDate(record)
  const current = Object.entries(record).find(([key]) =>
    /current|present|currently work/i.test(key),
  )?.[1]
  if (hasValue(start)) next["Start date (mm/yyyy)"] = toMonthYear(start)
  if (hasValue(end)) next["End date (mm/yyyy)"] = toMonthYear(end)
  if (
    true === current ||
    "true" === String(current ?? "").toLowerCase() ||
    "yes" === String(current ?? "").toLowerCase()
  ) {
    next["I currently work here"] = "Yes"
  }
  return next
}

function normalizeWalmartEducationRecord(record) {
  const next = { ...record }
  const gpa = findGpa(record)
  const start = findStartDate(record)
  const end = findEndDate(record)

  if (hasValue(gpa)) {
    const value = extractGpaNumber(gpa)
    next.GPA = value
    next["Overall result (GPA)"] = value
  }
  if (hasValue(start)) next["Start date (mm/dd/yyyy)"] = formatDateValue(start, "first")
  if (hasValue(end)) {
    next["End date, actual or expected (mm/dd/yyyy)"] = formatDateValue(end, "last")
  }

  if (hasValue(next.Degree)) {
    const mapped = mapDegreeLabel(next.Degree)
    if (isKnownDegree(mapped)) {
      next.Degree = mapped
    } else {
      const accreditation = findAccreditation(record)
      next.Degree = hasValue(accreditation) ? mapDegreeLabel(accreditation) : mapped
    }
    return next
  }

  const accreditation = findAccreditation(record)
  if (hasValue(accreditation)) next.Degree = mapDegreeLabel(accreditation)
  return next
}

export {
  WALMART_COMPOSITE_DIALOG_SELECTOR,
  buildWalmartCompositeTemplateRule,
  dedupeWalmartCompositeRecords,
  getVisibleWalmartCompositeDialog,
  getWalmartAdditionalFormSnapshotData,
  getWalmartCompositeDialogRule,
  getWalmartCompositeKindFromText,
  getWalmartCompositeRecordKey,
  getWalmartCompositeTemplateRules,
  isFillableWalmartCompositeKind,
  isInWalmartCompositeDialog,
  normalizeWalmartEducationRecord,
  normalizeWalmartEmploymentRecord,
  openWalmartCompositeDialog,
  saveWalmartCompositeDialog,
}
