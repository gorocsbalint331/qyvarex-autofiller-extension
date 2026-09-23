// @ts-nocheck
/**
 * HiringThing — form rule extraction and snapshot helpers.
 */

import * as enums from "../../../core/enums.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"

export const HIRINGTHING_RESUME_LABEL = "Resume/CV"
export const HIRINGTHING_COVER_LETTER_LABEL = "Cover Letter"

const TEXT_INPUT_SELECTOR =
  'input[type="text"], input[type="email"], input[type="tel"], input[type="url"], textarea'

export function normalizeHiringThingLabel(text) {
  return text
    .replace(/\u200b/g, "")
    .replace(/\s*\(required\)\s*/gi, "")
    .replace(/\s+/g, " ")
    .replace(/\s*:\s*$/g, "")
    .trim()
}

export function isHiringThingRequiredLabel(text) {
  return /\(required\)/i.test(text)
}

export function isHiringThingUploadLabel(text) {
  const normalized = normalizeHiringThingLabel(text).toLowerCase()
  return (
    normalized.includes("resume") ||
    normalized.includes("cover letter") ||
    normalized.includes("additional files")
  )
}

export function getHiringThingUploadKindFromLabel(text) {
  const normalized = normalizeHiringThingLabel(text).toLowerCase()
  if (normalized.includes("resume")) return "resume"
  if (normalized.includes("cover letter")) return "coverLetter"
  if (normalized.includes("additional")) return "additional"
  return null
}

export function getHiringThingUploadInputIndex(labels, kind) {
  return labels.findIndex(
    (label) => getHiringThingUploadKindFromLabel(label) === kind,
  )
}

export function getHiringThingCoverLetterName(name) {
  return name?.trim() || "Cover Letter"
}

export function normalizeHiringThingPhoneValue(phone, countryIso2) {
  const trimmed = phone.trim()
  if (!trimmed) return trimmed

  const country = phoneCountryCode.getCountryByIso2(countryIso2 || "")
  if (country) {
    const national = phoneCountryCode
      .decomposePhone(trimmed)
      .national.replace(/\D/g, "")
    if (national) return `+${country.dialCode}${national}`
  }

  if (trimmed.startsWith("+")) return trimmed

  const digits = trimmed.replace(/\D/g, "")
  if (!digits) return trimmed
  if (digits.length === 10) return `1${digits}`
  if (digits.length === 11 && digits.startsWith("1")) return digits
  return trimmed
}

export function formatHiringThingDate(value) {
  if (!value) return ""

  if (typeof value === "string") {
    const trimmed = value.trim()
    const isoMatch = trimmed.match(/^(\d{4})-(\d{1,2})(?:-(\d{1,2}))?/)
    if (isoMatch) {
      return `${isoMatch[2].padStart(2, "0")}/${(isoMatch[3] || "1").padStart(2, "0")}/${isoMatch[1]}`
    }

    const monthYearMatch = trimmed.match(/^([A-Za-z]{3,9})\s+(\d{4})$/)
    if (monthYearMatch) {
      const monthIndex = [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
      ].indexOf(monthYearMatch[1].slice(0, 3).toLowerCase())
      if (monthIndex >= 0) {
        return `${String(monthIndex + 1).padStart(2, "0")}/01/${monthYearMatch[2]}`
      }
    }

    return trimmed
  }

  if (typeof value === "object") {
    const year = value.year || value.yyyy
    const month = value.month || value.mm
    if (year && month) {
      return `${String(month).padStart(2, "0")}/01/${year}`
    }
  }

  return String(value)
}

function getApplicationForm() {
  return document.querySelector("form#job-application-form")
}

function findFieldLabel(input) {
  if (input.id) {
    const byFor = document.querySelector(
      `label[for="${CSS.escape(input.id)}"]`,
    )
    if (byFor) return byFor
  }
  const group = input.closest(".deprecated-form-group, .form-group")
  return group?.querySelector("label") || null
}

function extractPhoneCountryCodeRule(form) {
  const select = form.querySelector('select[name="user.phoneCountry"]')
  if (!select || select.disabled) return null

  const labelEl = findFieldLabel(select)
  const labelText = labelEl?.textContent || "Country Phone Code"
  const options = Array.from(select.options)
    .map((option) => (option.textContent || option.value || "").trim())
    .filter(Boolean)

  return {
    type: enums.FIELD_TYPE.SELECT,
    label: "Country Phone Code",
    required:
      isHiringThingRequiredLabel(labelText) ||
      select.required ||
      select.getAttribute("aria-required") === "true",
    options,
    $input: select,
    $label: labelEl || select,
  }
}

function getInputNameOrId(input) {
  return input.name || input.id || ""
}

function disambiguateRepeatedLabel(input, label) {
  const nameOrId = getInputNameOrId(input)
  if (/\.st_date$/.test(nameOrId)) return "Dates of Employment Start"
  if (/\.end_date$/.test(nameOrId)) return "Dates of Employment End"
  if (/\.st_wage$/.test(nameOrId)) return "Salary/Wage Start"
  if (/\.end_wage$/.test(nameOrId)) return "Salary/Wage End"
  return label
}

function getStructuredFieldKind(input) {
  return getStructuredFieldMeta(input)?.kind || null
}

function getStructuredFieldMeta(input) {
  const nameOrId = getInputNameOrId(input)
  const match = nameOrId.match(
    /job_assessment\.question_\d+\.response\.(\d+)\.([^.]+)$/,
  )
  if (!match) return null

  if (
    ["name", "position", "duties", "reason", "st_date", "end_date"].includes(
      match[2],
    )
  ) {
    return { kind: "employment", rowIndex: Number(match[1]) }
  }
  if (["institution", "degree", "completed"].includes(match[2])) {
    return { kind: "education", rowIndex: Number(match[1]) }
  }
  return null
}

function isStructuredField(input) {
  return !!getStructuredFieldKind(input)
}

function extractTextRule(input) {
  if (
    input.disabled ||
    input.readOnly ||
    isStructuredField(input) ||
    (input instanceof HTMLInputElement &&
      (input.type === "file" ||
        input.type === "hidden" ||
        input.id === "app.where_from" ||
        input.getAttribute("role") === "combobox" ||
        input.closest(".Select")))
  ) {
    return null
  }

  const labelEl = findFieldLabel(input)
  const rawLabel = labelEl?.textContent || input.placeholder || input.name || ""
  const label = disambiguateRepeatedLabel(
    input,
    normalizeHiringThingLabel(rawLabel),
  )
  if (!label || isHiringThingUploadLabel(label)) return null

  return {
    type: enums.FIELD_TYPE.TEXT,
    label,
    required:
      isHiringThingRequiredLabel(rawLabel) ||
      input.required ||
      input.getAttribute("aria-required") === "true",
    $input: input,
    $label: labelEl || input,
  }
}

function extractSearchRule(input) {
  if (
    input.disabled ||
    (input.getAttribute("role") !== "combobox" && !input.closest(".Select"))
  ) {
    return null
  }

  const labelEl = findFieldLabel(input)
  const rawLabel = labelEl?.textContent || input.id || ""
  const label = normalizeHiringThingLabel(rawLabel)
  if (!label) return null

  const options = readReactSelectOptions(input)
  return {
    type: enums.FIELD_TYPE.SEARCH,
    label,
    required: isHiringThingRequiredLabel(rawLabel),
    $input: input,
    $label: labelEl || input,
    ...(options.length > 0 ? { options } : {}),
  }
}

function dispatchMouseEvent(target, type) {
  const EventCtor = typeof MouseEvent === "function" ? MouseEvent : Event
  target.dispatchEvent(new EventCtor(type, { bubbles: true, cancelable: true }))
}

function dispatchEscape(target) {
  const EventCtor = typeof KeyboardEvent === "function" ? KeyboardEvent : Event
  target.dispatchEvent(
    new EventCtor("keydown", {
      bubbles: true,
      cancelable: true,
      ...(typeof KeyboardEvent === "function"
        ? { key: "Escape", code: "Escape" }
        : {}),
    }),
  )
}

function readReferralOptions(input) {
  if (input.id !== "app.where_from") return []
  const reactRoot = document.querySelector(
    '[data-react-class="HiringThing.Components.ApplyButtonGroup"][data-react-props]',
  )
  const propsJson = reactRoot?.getAttribute("data-react-props")
  if (!propsJson) return []

  try {
    const props = JSON.parse(propsJson)
    const referralOptions = props?.jobObj?.referral_options
    if (!Array.isArray(referralOptions)) return []
    return Array.from(
      new Set(
        [...referralOptions, "Other"]
          .map((option) => String(option || "").replace(/\s+/g, " ").trim())
          .filter(Boolean),
      ),
    )
  } catch {
    return []
  }
}

function closeSelectMenu(input) {
  dispatchEscape(input)
  if (document.querySelector(".Select-option")) {
    dispatchMouseEvent(document.body, "mousedown")
    dispatchMouseEvent(document.body, "mouseup")
    dispatchMouseEvent(document.body, "click")
  }
}

function readReactSelectOptions(input) {
  const referralOptions = readReferralOptions(input)
  if (referralOptions.length > 0) return referralOptions

  const selectRoot = input.closest(".Select")
  const control = selectRoot?.querySelector(".Select-control") || selectRoot
  if (!selectRoot || !control) return []

  const wasOpen = selectRoot.classList.contains("is-open")
  dispatchMouseEvent(control, "mousedown")
  const options = Array.from(document.querySelectorAll(".Select-option"))
    .map((option) =>
      (option.getAttribute("aria-label") || option.textContent || "")
        .replace(/\s+/g, " ")
        .trim(),
    )
    .filter(Boolean)
  if (!wasOpen) closeSelectMenu(input)
  return Array.from(new Set(options))
}

function findGroupLabel(container) {
  return (
    container.querySelector(
      ".form-field-label, .field-label, label:not(.radio-option-label)",
    ) || container.querySelector("label")
  )
}

function extractRadioGroupRules(form) {
  const byName = new Map()
  for (const radio of Array.from(
    form.querySelectorAll('input[type="radio"]'),
  )) {
    if (!radio.name) continue
    const group = byName.get(radio.name) || []
    group.push(radio)
    byName.set(radio.name, group)
  }

  const rules = []
  for (const radios of byName.values()) {
    const first = radios[0]
    if (isStructuredField(first)) continue

    const container =
      first.closest(".form-field-container") ||
      first.closest(".deprecated-form-group") ||
      first.closest("fieldset")
    if (!container) continue

    const labelEl = findGroupLabel(container)
    const rawLabel = labelEl?.textContent || ""
    const label = normalizeHiringThingLabel(rawLabel)
    const options = radios
      .map((radio) => radio.getAttribute("aria-label") || radio.value || "")
      .map((text) => text.trim())
      .filter(Boolean)

    if (label && options.length !== 0) {
      rules.push({
        type: enums.FIELD_TYPE.RADIOGROUP,
        label,
        required: isHiringThingRequiredLabel(rawLabel),
        $input: first,
        $label: labelEl || container,
        $radioParent: container,
        options,
      })
    }
  }
  return rules
}

function structuredFieldType(kind) {
  return kind === "education"
    ? enums.FIELD_TYPE.EDUCATION
    : enums.FIELD_TYPE.EMPLOYMENT
}

function structuredSectionLabel(kind) {
  return kind === "education" ? "Education" : "Employment"
}

function toChildOptions(children) {
  return children.map((child) => ({
    label: child.label,
    type: child.type,
    ...(Array.isArray(child.options) && child.options.length > 0
      ? { options: child.options }
      : {}),
  }))
}

function extractStructuredTextRule(input) {
  const labelEl = findFieldLabel(input)
  const rawLabel = labelEl?.textContent || input.placeholder || input.name || ""
  const label = disambiguateRepeatedLabel(
    input,
    normalizeHiringThingLabel(rawLabel),
  )
  if (!label) return null
  return {
    type: enums.FIELD_TYPE.TEXT,
    label,
    required:
      isHiringThingRequiredLabel(rawLabel) ||
      input.required ||
      input.getAttribute("aria-required") === "true",
    $input: input,
    $label: labelEl || input,
  }
}

function extractStructuredRadioRule(radios) {
  const first = radios[0]
  const container =
    first.closest(".form-field-container") ||
    first.closest(".deprecated-form-group") ||
    first.closest("fieldset")
  if (!container) return null

  const labelEl = findGroupLabel(container)
  const rawLabel = labelEl?.textContent || ""
  const label = normalizeHiringThingLabel(rawLabel)
  const options = radios
    .map((radio) => radio.getAttribute("aria-label") || radio.value || "")
    .map((text) => text.trim())
    .filter(Boolean)

  if (!label || options.length === 0) return null
  return {
    type: enums.FIELD_TYPE.RADIOGROUP,
    label,
    required: isHiringThingRequiredLabel(rawLabel),
    $input: first,
    $label: labelEl || container,
    $radioParent: container,
    options,
  }
}

function extractStructuredSectionRules(form) {
  const rows = new Map()
  const radiosByName = new Map()

  const getOrCreateRow = (meta) => {
    const key = `${meta.kind}:${meta.rowIndex}`
    const existing = rows.get(key)
    if (existing) return existing
    const row = {
      kind: meta.kind,
      rowIndex: meta.rowIndex,
      children: [],
    }
    rows.set(key, row)
    return row
  }

  for (const input of Array.from(form.querySelectorAll("input, textarea"))) {
    const meta = getStructuredFieldMeta(input)
    if (!meta) continue

    if (input instanceof HTMLInputElement && input.type === "radio") {
      const group = radiosByName.get(input.name) || []
      group.push(input)
      radiosByName.set(input.name, group)
      continue
    }

    const textRule = extractStructuredTextRule(input)
    if (textRule) getOrCreateRow(meta).children.push(textRule)
  }

  for (const radios of radiosByName.values()) {
    const meta = getStructuredFieldMeta(radios[0])
    const radioRule = extractStructuredRadioRule(radios)
    if (meta && radioRule) getOrCreateRow(meta).children.push(radioRule)
  }

  return Array.from(rows.values())
    .sort((left, right) =>
      left.kind !== right.kind
        ? left.kind === "employment"
          ? -1
          : 1
        : left.rowIndex - right.rowIndex,
    )
    .map(({ kind, children }) =>
      children.length === 0
        ? null
        : {
            label: structuredSectionLabel(kind),
            required: children.some((child) => child.required),
            type: structuredFieldType(kind),
            children,
            options: toChildOptions(children),
          },
    )
    .filter((rule) => !!rule)
}

export function getHiringThingCheckboxLabel(checkbox) {
  return (
    checkbox.closest(".checkbox-option-label")?.textContent?.trim() ||
    checkbox.closest("label")?.textContent?.trim() ||
    checkbox.getAttribute("aria-label")?.trim() ||
    checkbox.value ||
    ""
  )
    .replace(/\s+/g, " ")
    .trim()
}

function extractCheckboxRules(form) {
  const rules = []
  const grouped = new Map()

  for (const checkbox of Array.from(
    form.querySelectorAll('input[type="checkbox"]'),
  )) {
    const optionWrapper = checkbox.closest(".checkbox-option-label")
    const fieldContainer = optionWrapper
      ? checkbox.closest(".form-field-container")
      : null
    const questionLabelEl = fieldContainer?.querySelector(".form-field-label")
    const labelEl =
      questionLabelEl || optionWrapper || checkbox.closest("label")
    const optionText = getHiringThingCheckboxLabel(checkbox)
    const rawQuestionLabel = questionLabelEl?.textContent?.trim() || optionText
    const label = normalizeHiringThingLabel(rawQuestionLabel)

    if (!label || !optionText) {
      console.info("[HiringThing][Checkbox] missing option label", {
        hasQuestionLabel: !!questionLabelEl,
        hasOptionWrapper: !!optionWrapper,
        hasOptionText: !!optionText,
      })
      continue
    }

    const required =
      isHiringThingRequiredLabel(rawQuestionLabel) ||
      checkbox.required ||
      checkbox.getAttribute("aria-required") === "true"
    const groupKey =
      fieldContainer && questionLabelEl && checkbox.name ? checkbox.name : null
    const existing =
      groupKey ? grouped.get(fieldContainer)?.get(groupKey) : null

    if (existing) {
      existing.$checkboxs.push(checkbox)
      existing.options.push(optionText)
      if (!existing.required) existing.required = required
      continue
    }

    const rule = {
      type: enums.FIELD_TYPE.CHECKBOX,
      label,
      required,
      $input: checkbox,
      $label: labelEl || checkbox,
      $checkboxs: [checkbox],
      options: [optionText],
    }
    rules.push(rule)

    if (groupKey) {
      const byName = grouped.get(fieldContainer) || new Map()
      byName.set(groupKey, rule)
      grouped.set(fieldContainer, byName)
    }
  }

  for (const byName of grouped.values()) {
    for (const rule of byName.values()) {
      console.info("[HiringThing][Checkbox] question extracted", {
        labelSource: "form-field-label",
        optionCount: rule.options.length,
        required: rule.required,
      })
    }
  }

  return rules
}

function searchRuleSortKey(rule) {
  const label = rule.label.toLowerCase()
  if (label === "country") return 0
  if (label.includes("state") || label.includes("province")) return 1
  return 2
}

export function extractRules() {
  const form = getApplicationForm()
  if (!form) return []

  const textInputs = Array.from(form.querySelectorAll(TEXT_INPUT_SELECTOR))
  const textRules = textInputs.map(extractTextRule).filter((rule) => !!rule)

  const disambiguated = textInputs
    .map(
      (input) =>
        getInputNameOrId(input).match(/\.(st_date|end_date|st_wage|end_wage)$/)?.[1],
    )
    .filter((suffix) => !!suffix)
  if (
    disambiguated.some((suffix) => suffix.endsWith("date")) &&
    disambiguated.some((suffix) => suffix.endsWith("wage"))
  ) {
    console.info("[HiringThing][Employment] disambiguated repeated labels", {
      fields: disambiguated,
    })
  }

  const phoneCountryRule = extractPhoneCountryCodeRule(form)
  const comboboxInputs = Array.from(
    form.querySelectorAll('input[role="combobox"], .Select input'),
  )
  const searchRules = Array.from(new Set(comboboxInputs))
    .map(extractSearchRule)
    .filter((rule) => !!rule)
    .filter(
      (rule, index, all) =>
        all.findIndex((candidate) => candidate.label === rule.label) === index,
    )
    .sort((left, right) => searchRuleSortKey(left) - searchRuleSortKey(right))

  return [
    ...(phoneCountryRule ? [phoneCountryRule] : []),
    ...textRules,
    ...searchRules,
    ...extractStructuredSectionRules(form),
    ...extractRadioGroupRules(form),
    ...extractCheckboxRules(form),
  ]
}

function readReactSelectValue(input) {
  const selectRoot = input.closest(".Select")
  return (
    selectRoot
      ?.querySelector(".Select-value-label")
      ?.textContent?.replace(/\s+/g, " ")
      .trim() || ""
  )
}

function readRuleValue(rule) {
  if (
    rule.type === enums.FIELD_TYPE.SEARCH &&
    rule.$input?.getAttribute("role") === "combobox"
  ) {
    return readReactSelectValue(rule.$input) || (rule.$input.value || "").trim()
  }
  if (rule.type === enums.FIELD_TYPE.TEXT) {
    return (rule.$input?.value || "").trim()
  }
  if (rule.type === enums.FIELD_TYPE.SELECT) {
    const select = rule.$input
    return (
      select.selectedOptions?.[0]?.textContent || select.value || ""
    ).trim()
  }
  if (rule.type === enums.FIELD_TYPE.RADIOGROUP) {
    const radios = Array.from(
      rule.$radioParent.querySelectorAll('input[type="radio"]'),
    )
    const checked = radios.find((radio) => radio.checked)
    return checked?.getAttribute("aria-label") || checked?.value || ""
  }
  if (rule.type === enums.FIELD_TYPE.CHECKBOX) {
    return (rule.$checkboxs || [])
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => getHiringThingCheckboxLabel(checkbox))
  }
  if (rule.type === enums.FIELD_TYPE.SEARCH) {
    return readReactSelectValue(rule.$input) || (rule.$input.value || "").trim()
  }
  return ""
}

export function getFormSnapshot(formRules = extractRules()) {
  return Object.fromEntries(
    formRules.map((rule) => [rule.label, readRuleValue(rule)]),
  )
}
