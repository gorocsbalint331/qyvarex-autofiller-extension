// @ts-nocheck
/**
 * Dayforce — form rules, section config, snapshots, and submit helpers.
 */

import * as countryConstants from "../../../constants/country.ts"
import * as enums from "../../../core/enums.js"
import * as dayforceAnswer from "./answer.ts"

export const DAYFORCE_SECTIONS = {
  education: {
    label: "Education",
    type: enums.FIELD_TYPE.EDUCATION,
    containerSelector: '[test-id*="education-history"]',
    rowSelector: 'form[id*="educationHistory"]',
    addButtonSelector: 'button[test-id*="add-educationhistory-record"]',
    fields: [
      {
        key: "Degree",
        selector: 'input[id*="degreeName"]',
        type: enums.FIELD_TYPE.TEXT,
      },
      {
        key: "isCurrent",
        alternateKey: "isCurrent",
        selector: 'input[id*="notCompleted"]',
        isCheckbox: true,
        type: enums.FIELD_TYPE.CHECKBOX,
      },
      {
        key: "Major",
        alternateKey: "Study",
        selector: 'input[id*="majorName"]',
        type: enums.FIELD_TYPE.TEXT,
      },
      {
        key: "Minor",
        selector:
          'input[id*="minorName"], input[id*="Minor"], input[name*="Minor"]',
        type: enums.FIELD_TYPE.TEXT,
      },
      {
        key: "Start Date",
        alternateKey: "Start",
        selector: 'input[id*="effectiveStart"]',
        type: enums.FIELD_TYPE.DATE,
      },
      {
        key: "End Date",
        alternateKey: "End",
        selector: 'input[id*="effectiveEnd"]',
        type: enums.FIELD_TYPE.DATE,
      },
      {
        key: "School",
        selector: 'input[id*="schoolName"]',
        type: enums.FIELD_TYPE.TEXT,
      },
      {
        key: "Country",
        selector: 'input[id*="countryCode"], input[name*="Country"]',
        type: enums.FIELD_TYPE.DROPDOWN,
      },
      {
        key: "State / Province",
        selector:
          'input[id*="stateCode"], input[id*="StateProvince"], input[name*="StateProvince"]',
        type: enums.FIELD_TYPE.DROPDOWN,
      },
      {
        key: "City",
        selector: 'input[id*="City"], input[name*="City"]',
        type: enums.FIELD_TYPE.TEXT,
      },
      {
        key: "G.P.A",
        alternateKey: "gpa",
        selector: 'input[id*="gpa"], input[id*="GPA"], input[name*="GPA"]',
        type: enums.FIELD_TYPE.TEXT,
      },
    ],
  },
  workExperience: {
    label: "Employment",
    type: enums.FIELD_TYPE.EMPLOYMENT,
    containerSelector: '[test-id*="work-history"]',
    rowSelector: 'form[id*="workHistory"]',
    addButtonSelector: 'button[test-id*="add-workhistory-record"]',
    fields: [
      {
        key: "Position Title",
        alternateKey: "jobTitle",
        selector: 'input[id*="title"]',
        type: enums.FIELD_TYPE.TEXT,
      },
      {
        key: "isCurrent",
        selector: 'input[id*="isCurrent"]',
        isCheckbox: true,
        type: enums.FIELD_TYPE.CHECKBOX,
      },
      {
        key: "Employer Name",
        alternateKey: "organization",
        selector: 'input[id*="companyName"]',
        type: enums.FIELD_TYPE.TEXT,
      },
      {
        key: "Start Date",
        alternateKey: "Start",
        selector: 'input[id*="effectiveStart"]',
        type: enums.FIELD_TYPE.DATE,
      },
      {
        key: "End Date",
        alternateKey: "End",
        selector: 'input[id*="effectiveEnd"]',
        type: enums.FIELD_TYPE.DATE,
      },
      {
        key: "Country",
        selector: 'input[id*="countryCode"], input[id*="Country"]',
        type: enums.FIELD_TYPE.DROPDOWN,
      },
      {
        key: "State / Province",
        alternateKey: "State/Province",
        selector:
          'input[id*="stateCode"], input[id*="StateProvince"], input[name*="StateProvince"]',
        type: enums.FIELD_TYPE.DROPDOWN,
      },
      {
        key: "Address Line 1",
        alternateKey: "location",
        selector: 'input[name*="Address1"]',
        type: enums.FIELD_TYPE.TEXT,
      },
      {
        key: "City",
        alternateKey: "City",
        selector: 'input[id*="city"], input[name*="City"]',
        type: enums.FIELD_TYPE.TEXT,
      },
      {
        key: "Division / Dept.",
        alternateKey: "Division",
        selector: 'input[id*="department"], input[name*="DivisionDept"]',
        type: enums.FIELD_TYPE.TEXT,
      },
      {
        key: "Supervisor",
        alternateKey: "Supervisor",
        selector: 'input[name*="SupervisorName"]',
        type: enums.FIELD_TYPE.TEXT,
      },
      {
        key: "Reason for Leaving",
        alternateKey: "Reason for Leaving",
        selector:
          'textarea[id*="reasonForLeaving"], input[name*="ReasonForLeaving"], textarea[test-id*="reasonforleaving"]',
        type: enums.FIELD_TYPE.TEXT,
      },
      {
        key: "Duties and Responsibilities",
        alternateKey: "Duties and Responsibilities",
        selector:
          'textarea[id*="description"], input[name*="DutiesResponsibilities"], textarea[test-id*="dutiesandresponsibilities"]',
        type: enums.FIELD_TYPE.TEXT,
      },
    ],
  },
}

function isBlank(text) {
  return !text || text.trim() === ""
}

function isEmptyValue(value) {
  return (
    value == null ||
    (Array.isArray(value)
      ? value.every(isEmptyValue)
      : typeof value === "string" && value.trim() === "")
  )
}

function getFormItem(el) {
  return el.closest(".ant-form-item")
}

function getLabelEl(el) {
  return getFormItem(el)?.querySelector("label")
}

function getAriaLabel(el) {
  return (
    el.getAttribute("aria-label") ||
    el.closest(".ant-select")?.getAttribute("aria-label") ||
    ""
  ).trim()
}

function resolveFieldLabel(el, labelEl) {
  const text = labelEl.textContent?.trim() || ""
  if (!isCombobox(el)) return text
  const aria = getAriaLabel(el)
  return (
    (aria === "Country dialing code" &&
      text.includes("Phone Number") &&
      dayforceAnswer.getDayforcePhoneCountryCodeLabel(text)) ||
    text
  )
}

function getDateDescription(input) {
  const min = input.getAttribute("min")
  const max = input.getAttribute("max")
  const range = [min && `min ${min}`, max && `max ${max}`]
    .filter(Boolean)
    .join(", ")
  return range
    ? `Please format the date as YYYY-MM-DD (${range})`
    : "Please format the date as YYYY-MM-DD"
}

function isHiddenField(el) {
  return !!el.closest(".HiddenFields")
}

function isCombobox(el) {
  return el.getAttribute("role") === "combobox"
}

function isReadonlyInput(el) {
  return (
    !isCombobox(el) &&
    (el.readOnly ||
      el.getAttribute("readonly") === "readonly" ||
      el.hasAttribute?.("readonly"))
  )
}

function getCheckboxOptionLabel(input) {
  const wrapper = input.closest(
    "label.ant-checkbox-wrapper, label.ant-radio-wrapper",
  )
  return wrapper?.textContent?.trim() || ""
}

function getInputsByName(name) {
  return name
    ? Array.from(
        document.querySelectorAll(`input[name="${CSS.escape(name)}"]`),
      )
    : []
}

function getGroupedInputs(input) {
  const group = input.closest(".ant-checkbox-group, .ant-radio-group")
  const grouped = Array.from(
    group?.querySelectorAll('input[type="checkbox"], input[type="radio"]') ||
      [],
  )
  if (grouped.length > 0) return grouped
  const byName = getInputsByName(input.name)
  if (byName.length > 0) return byName
  return input.type === "checkbox" ? [input] : []
}

const PHONE_INPUT_SELECTORS = {
  "Home Phone Number":
    'input[test-id="personal-info-home-phone-text-input"]',
  "Mobile Phone Number":
    'input[test-id="personal-info-mobile-phone-text-input"]',
}

function findPhoneInputByLabel(el, label) {
  if (el.tagName !== "INPUT") return null
  const selector = PHONE_INPUT_SELECTORS[label]
  return selector ? document.querySelector(selector) : null
}

export function getCurrentDayforceElement(el, label = "") {
  if (typeof document === "undefined") return el
  const fallback = () => findPhoneInputByLabel(el, label) || el
  if (!el.id || typeof document.getElementById !== "function") return fallback()
  const byId = document.getElementById(el.id)
  return byId && byId.tagName === el.tagName ? byId : fallback()
}

function countryLabelFromCode(code) {
  const normalized = code?.trim().toLowerCase()
  return (
    (normalized &&
      countryConstants.COUNTRY_OPTIONS.find(
        (option) => option.code.toLowerCase() === normalized,
      )?.label) ||
    ""
  )
}

function findPhoneCountryHiddenInput(el, label = "") {
  if (typeof document === "undefined") return null
  const id = label.startsWith("Home Phone")
    ? "jobPostingApplication_personalInfo_homePhoneCountryCode"
    : label.startsWith("Mobile")
      ? "jobPostingApplication_personalInfo_mobilePhoneCountryCode"
      : ""
  const byId = id ? document.getElementById?.(id) : null
  return byId?.value
    ? byId
    : el
        .closest(".ant-col, [class*='ant-col']")
        ?.querySelector('input[type="hidden"][id$="PhoneCountryCode"]')
}

export function getDayforceDropdownCurrentValue(el, label = "") {
  if (dayforceAnswer.isDayforcePhoneCountryCodeLabel(label)) {
    const fromHidden = countryLabelFromCode(
      findPhoneCountryHiddenInput(el, label)?.value,
    )
    if (fromHidden) return fromHidden
  }
  const item = el
    .closest(".ant-select")
    ?.querySelector(".ant-select-selection-item")
  const text = item?.getAttribute("title") || item?.textContent || ""
  return dayforceAnswer.normalizeDayforceDropdownOptionText(text)
}

async function readDropdownOptions(input) {
  openDropdown(input)
  await sleep(500)
  const list = input.id
    ? document.querySelector(`#${CSS.escape(input.id)}_list`)
    : null
  const options = Array.from(list?.children || [])
    .map((child) =>
      dayforceAnswer.normalizeDayforceDropdownOptionText(child.textContent),
    )
    .filter((text) => !isBlank(text))
  input.blur?.()
  await sleep(200)
  return options
}

function openDropdown(el) {
  const event = document.createEvent("MouseEvents")
  event.initEvent("mousedown", true, true)
  el.dispatchEvent(event)
}

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms))
}

export async function getDayforceRuleFromElement(el) {
  const input = el
  if (
    input.type === "hidden" ||
    input.type === "file" ||
    isReadonlyInput(input) ||
    isHiddenField(el)
  ) {
    return null
  }

  if (input.id === "agreeCheckbox" && input.type === "checkbox") {
    const heading = el
      .closest(".submit-information")
      ?.querySelector("h3")
    const label = heading?.textContent?.trim()
    return label
      ? {
          type: enums.FIELD_TYPE.CHECKBOX,
          label,
          required: true,
          $label: heading,
          options: ["I Agree to the Candidate Acknowledgement"],
          $checkboxs: [input],
        }
      : null
  }

  const labelEl = getLabelEl(el)
  if (!labelEl) return null
  const label = resolveFieldLabel(el, labelEl)
  if (isBlank(label)) return null

  const required =
    input.required ||
    input.getAttribute("aria-required") === "true" ||
    String(labelEl.className || "").includes("required")

  if (el.tagName === "TEXTAREA") {
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required: !!required,
      $label: labelEl,
      $input: el,
    }
  }

  if (el.tagName === "INPUT") {
    const type = input.type
    if (type === "date") {
      return {
        type: enums.FIELD_TYPE.DATE,
        label,
        required: !!required,
        $label: labelEl,
        $input: el,
        description: getDateDescription(input),
      }
    }
    if (type === "checkbox" || type === "radio") {
      const group = getGroupedInputs(input)
      const options = group
        .map((item) => getCheckboxOptionLabel(item))
        .filter((text) => !isBlank(text))
      const isBinary =
        type === "checkbox" && group.length === 1 && options.length === 0
      if (group.indexOf(input) >= 1 || (!isBinary && options.length === 0)) {
        return null
      }
      return {
        type: enums.FIELD_TYPE.CHECKBOX,
        label,
        required: !!required,
        $label: labelEl,
        options: isBinary ? ["Yes", "No"] : options,
        $checkboxs: group,
      }
    }
    if (isCombobox(el)) {
      return {
        type: enums.FIELD_TYPE.DROPDOWN,
        label,
        required: !!required,
        $input: el,
        $label: labelEl,
        options: await readDropdownOptions(el),
      }
    }
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required: !!required,
      $label: labelEl,
      $input: el,
    }
  }

  if (el.tagName === "SELECT") {
    const options = Array.from(el.options)
      .filter((option) => !!option.value)
      .map((option) => option.textContent?.trim() || "")
      .filter((text) => !isBlank(text))
    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      required: !!required,
      $input: el,
      $label: labelEl,
      options,
    }
  }

  return null
}

export function dedupeDayforceFieldStatus(rules) {
  const result = []
  const seen = new Set()
  for (const rule of rules) {
    const label = rule?.label?.trim()
    if (!label || seen.has(label)) continue
    seen.add(label)
    result.push(rule)
  }
  return result
}

function getRuleRoots() {
  return [
    ...Array.from(document.querySelectorAll('form[id*="personalInfo"]')),
    ...Array.from(
      document.querySelectorAll('[test-id*="application-step-questionnaire"]'),
    ),
  ]
}

async function extractRulesFromRoot(root) {
  const rules = []
  const byLabel = new Map()
  for (const el of root.querySelectorAll("input, textarea, select")) {
    const rule = await getDayforceRuleFromElement(el)
    if (!rule) continue
    const existing = byLabel.get(rule.label)
    if (existing && "$input" in existing) {
      const aria = existing.$input?.getAttribute?.("aria-label")
      if (aria) {
        existing.label = aria
        byLabel.set(aria, existing)
      }
    }
    if (!byLabel.has(rule.label)) {
      rules.push(rule)
      byLabel.set(rule.label, rule)
    }
  }
  return rules
}

export function getDayforceSectionRows(section) {
  const prefix =
    section.label === "Education" ? "educationHistory" : "workHistory"
  const indexRe = RegExp(`^${prefix}-(\\d+)$`, "i")
  return Array.from(document.querySelectorAll(section.rowSelector))
    .map((row, domIndex) => ({
      row,
      domIndex,
      formIndex: Number(String(row.id || "").match(indexRe)?.[1]),
    }))
    .sort((a, b) => {
      const aFinite = Number.isFinite(a.formIndex)
      const bFinite = Number.isFinite(b.formIndex)
      return aFinite && bFinite
        ? a.formIndex - b.formIndex
        : a.domIndex - b.domIndex
    })
    .map(({ row }) => row)
}

export async function getDayforceCompositeRules(section) {
  const rules = []
  for (const row of getDayforceSectionRows(section)) {
    const children = []
    for (const el of row.querySelectorAll(
      "input:not([type='submit']), textarea, select",
    )) {
      const rule = await getDayforceRuleFromElement(el)
      if (rule) children.push(rule)
    }
    if (children.length === 0) continue
    rules.push({
      type: section.type,
      label: section.label,
      required: true,
      options: children.map((child) => ({
        type: child.type,
        label: child.label,
        description: child.description,
        options: child.options || [],
      })),
      children,
    })
  }
  return rules
}

export async function getRules() {
  const rules = []
  for (const root of getRuleRoots()) {
    rules.push(...(await extractRulesFromRoot(root)))
  }
  rules.push(...(await getDayforceCompositeRules(DAYFORCE_SECTIONS.education)))
  rules.push(
    ...(await getDayforceCompositeRules(DAYFORCE_SECTIONS.workExperience)),
  )
  return dedupeDayforceFieldStatus(rules)
}

function readElementValue(el, label = "") {
  const current = getCurrentDayforceElement(el, label)
  if (current.tagName === "SELECT") {
    return (
      current.options[current.selectedIndex]?.textContent?.trim() || ""
    )
  }
  if (current.tagName === "INPUT") {
    if (isCombobox(current)) return getDayforceDropdownCurrentValue(current, label)
    if (current.type === "checkbox") return current.checked ? "Yes" : "No"
    if (current.type === "radio") {
      const checked = document.querySelector(
        `input[type="radio"][name="${CSS.escape(current.name)}"]:checked`,
      )
      return checked?.value || ""
    }
  }
  return current.value || current.getAttribute("value") || ""
}

function flattenRules(rules) {
  return rules.flatMap((rule) =>
    Array.isArray(rule.children) ? flattenRules(rule.children) : [rule],
  )
}

function isCompositeRule(rule) {
  return (
    Array.isArray(rule?.children) &&
    (rule.type === enums.FIELD_TYPE.EDUCATION ||
      rule.type === enums.FIELD_TYPE.EMPLOYMENT ||
      rule.label === DAYFORCE_SECTIONS.education.label ||
      rule.label === DAYFORCE_SECTIONS.workExperience.label)
  )
}

function isInStructuredSection(el) {
  return Object.values(DAYFORCE_SECTIONS).some((section) =>
    el.closest(section.rowSelector),
  )
}

function readCheckboxValue(rule) {
  const checkboxes = rule.$checkboxs
  if (!checkboxes?.length) return
  if (checkboxes.length === 1) {
    return checkboxes[0].checked ? "Yes" : "No"
  }
  const selected = checkboxes
    .filter((box) => box.checked)
    .map((box) => getCheckboxOptionLabel(box) || box.value || "")
    .filter((text) => !isBlank(text))
  if (selected.length === 0) return ""
  return selected.length === 1 ? selected[0] : selected
}

function collectSnapshotRules(rules, options = {}) {
  if (rules.length > 0) return flattenRules(rules)
  return Array.from(document.querySelectorAll("input, textarea, select"))
    .map((el) => {
      if (options.excludeStructuredSections && isInStructuredSection(el)) {
        return null
      }
      const labelEl = getLabelEl(el)
      const label = labelEl ? resolveFieldLabel(el, labelEl) : ""
      if (!label) return null
      if (el.tagName === "INPUT") {
        if (el.type === "checkbox" || el.type === "radio") {
          const group = getGroupedInputs(el)
          if (group.indexOf(el) >= 1) return null
          return {
            label,
            $input: el,
            $checkboxs: group.length > 0 ? group : [el],
          }
        }
      }
      return { label, $input: el }
    })
    .filter((rule) => !!rule?.label)
}

export function getFormSnapshot(rules = [], options = {}) {
  const snapshot = {}
  const fields = collectSnapshotRules(rules, options)
  for (const rule of fields) {
    const checkboxValue = readCheckboxValue(rule)
    if (checkboxValue !== undefined) {
      snapshot[rule.label] = checkboxValue
      continue
    }
    const input = rule.$input
    if (!input || (input.tagName === "INPUT" && input.type === "file")) {
      continue
    }
    const value = readElementValue(input, rule.label)
    const hasExisting = Object.prototype.hasOwnProperty.call(
      snapshot,
      rule.label,
    )
    if (
      !(hasExisting && !isEmptyValue(snapshot[rule.label]) && isEmptyValue(value)) &&
      (!hasExisting ||
        isEmptyValue(snapshot[rule.label]) ||
        isEmptyValue(value))
    ) {
      snapshot[rule.label] = value
    }
  }
  return snapshot
}

export function getDayforceNormalFormSnapshot(rules = []) {
  return getFormSnapshot(
    rules.filter((rule) => !isCompositeRule(rule)),
    { excludeStructuredSections: rules.length === 0 },
  )
}

function resolveSectionFieldLabel(field, el) {
  const labelEl = getLabelEl(el)
  return (labelEl && resolveFieldLabel(el, labelEl)) || field.key
}

function isDefaultCurrentNo(label, value) {
  const key = label.trim().toLowerCase()
  const normalized = String(value ?? "")
    .trim()
    .toLowerCase()
  return (
    normalized === "no" &&
    (key === "iscurrent" ||
      key === "current job" ||
      key === "not completed")
  )
}

function sectionRecordHasContent(record) {
  return Object.entries(record).some(
    ([label, value]) =>
      !isDefaultCurrentNo(label, value) && !isEmptyValue(value),
  )
}

function pruneEmptySectionRecord(record) {
  return sectionRecordHasContent(record)
    ? Object.fromEntries(
        Object.entries(record).filter(
          ([label, value]) =>
            !!isDefaultCurrentNo(label, value) || !isEmptyValue(value),
        ),
      )
    : null
}

function snapshotSection(section) {
  return getDayforceSectionRows(section)
    .map((row) => {
      const record = {}
      for (const field of section.fields) {
        const el = row.querySelector(field.selector)
        if (!el) continue
        const label = resolveSectionFieldLabel(field, el)
        if (field.isCheckbox) {
          record[label] = el.checked ? "Yes" : "No"
          continue
        }
        record[label] = readElementValue(el, label)
      }
      return pruneEmptySectionRecord(record)
    })
    .filter((record) => !!record)
}

export function getDayforceEducationEmploymentSnapshot() {
  return {
    education: snapshotSection(DAYFORCE_SECTIONS.education),
    employment: snapshotSection(DAYFORCE_SECTIONS.workExperience),
  }
}

export const DAYFORCE_SUBMIT_BUTTON_SELECTOR =
  'button[test-id="application-submit"], button[test-id="application-next-step"]'

export function isVisibleDayforceSubmitButton(button) {
  if (
    button.disabled ||
    button.hidden ||
    button.getAttribute("aria-hidden") === "true"
  ) {
    return false
  }
  let node = button
  while (node) {
    if (node.hidden || node.getAttribute("aria-hidden") === "true") {
      return false
    }
    const style = window.getComputedStyle?.(node)
    if (style?.display === "none" || style?.visibility === "hidden") {
      return false
    }
    if (node === document.body) break
    node = node.parentElement
  }
  return true
}

export function resolveDayforceSubmitButtonFromTarget(target) {
  const button = target.closest(DAYFORCE_SUBMIT_BUTTON_SELECTOR)
  return button && isVisibleDayforceSubmitButton(button) ? button : null
}

export function getSubmitButton() {
  return Array.from(
    document.querySelectorAll(DAYFORCE_SUBMIT_BUTTON_SELECTOR),
  ).find(isVisibleDayforceSubmitButton)
}
