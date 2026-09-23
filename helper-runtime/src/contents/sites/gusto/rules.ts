// @ts-nocheck
/**
 * Gusto — form rule extraction, request shaping, and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as gustoAnswer from "./answer.ts"

const FORM_SELECTOR =
  'form#job-applicant-form[action^="/postings/"][method="post"][enctype="multipart/form-data"]'
const FIELD_SELECTOR =
  'input[name^="job_applicant["]:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="file"]), select[name^="job_applicant["], textarea[name^="job_applicant["]'
const CUSTOM_QUESTION_UUID_SELECTOR =
  'input[type="hidden"][name*="[custom_form_response_attributes][answers_attributes]"][name$="[question_uuid]"]'
const PHONE_COUNTRY_CODE_LABEL = "Phone Country Code"
const PHONE_NUMBER_DESCRIPTION =
  "Return only the phone number without the country calling code. Do not include the phone country code because it is provided separately."

export function getFormContainer() {
  return document.querySelector(FORM_SELECTOR)
}

function cleanLabel(text) {
  return text.replace(/[*\uff0a]\s*$/g, "").replace(/\s+/g, " ").trim()
}

function normalizeLabel(text) {
  return text.toLowerCase().replace(/\s+/g, " ").trim()
}

function createSyntheticLabel(text) {
  const span = document.createElement("span")
  span.textContent = text
  return span
}

function fallbackLabelFromAttributes(el) {
  return cleanLabel(
    el.getAttribute("aria-label") ||
      el.placeholder ||
      el.getAttribute("name") ||
      "",
  )
}

function isCustomFormAnswerField(el) {
  return (
    (el instanceof HTMLInputElement ||
      el instanceof HTMLTextAreaElement ||
      el instanceof HTMLSelectElement) &&
    normalizeLabel(el.name || "").includes(
      "[custom_form_response_attributes][answers_attributes]",
    )
  )
}

function findCustomQuestionContainer(el) {
  const form = getFormContainer()
  let parent = el.parentElement
  while (parent && parent !== form) {
    if (parent.querySelector(CUSTOM_QUESTION_UUID_SELECTOR)) return parent
    parent = parent.parentElement
  }
  return null
}

function getCustomQuestionType(container) {
  const typeInput = container.querySelector(
    'input[type="hidden"][name$="[question_type]"]',
  )
  return normalizeLabel(typeInput?.value || "")
}

function isChoiceOtherTextInput(el) {
  if (
    !(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) ||
    !isCustomFormAnswerField(el) ||
    !el.name.endsWith("[text]")
  ) {
    return false
  }

  const container = findCustomQuestionContainer(el)
  if (!container) return false

  const questionType = getCustomQuestionType(container)
  return ["single_choice", "multiple_choice", "multi_choice"].includes(
    questionType,
  )
}

function isMultiChoiceQuestion(container) {
  const questionType = getCustomQuestionType(container)
  return questionType === "multi_choice" || questionType === "multiple_choice"
}

function getCheckboxOptionLabel(el) {
  const closestLabel = el.closest("label")
  if (closestLabel instanceof HTMLElement) {
    const text = cleanLabel(closestLabel.textContent || "")
    if (text) return text
  }

  if (el.id) {
    const forLabel = document.querySelector(
      `label[for="${CSS.escape(el.id)}"]`,
    )
    if (forLabel instanceof HTMLElement) {
      const text = cleanLabel(forLabel.textContent || "")
      if (text) return text
    }
  }

  return cleanLabel(el.value || "")
}

function getCheckboxesWithSameName(el, container) {
  const name = el.name
  return name
    ? Array.from(
        container.querySelectorAll(
          `input[type="checkbox"][name="${CSS.escape(name)}"]`,
        ),
      ).filter((checkbox) => !checkbox.disabled)
    : [el]
}

function findQuestionHeadingLabel(container) {
  const directLabels = Array.from(container.children).filter(
    (child) => child instanceof HTMLElement && child.tagName === "LABEL",
  )
  const plainDirectLabel = directLabels.find(
    (label) => !label.querySelector("input, select, textarea"),
  )
  return (
    plainDirectLabel ||
    Array.from(container.querySelectorAll("label")).find(
      (label) => !label.querySelector("input, select, textarea"),
    ) ||
    null
  )
}

function resolveCustomQuestionLabelNode(el) {
  if (!isCustomFormAnswerField(el)) return null

  const container = findCustomQuestionContainer(el)
  if (!container) return null

  const heading = findQuestionHeadingLabel(container)
  const headingText = cleanLabel(heading?.textContent || "")
  const questionType = getCustomQuestionType(container)

  if (
    (questionType === "single_choice" || questionType === "multiple_choice") &&
    (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) &&
    el.name.endsWith("[text]")
  ) {
    const placeholder = cleanLabel(el.getAttribute("placeholder") || "")
    if (headingText && placeholder) {
      return createSyntheticLabel(`${headingText} - ${placeholder}`)
    }
    if (placeholder) return createSyntheticLabel(placeholder)
  }

  return headingText ? heading : null
}

function resolveLabelNode(el) {
  const form = getFormContainer()
  if (!form) return null

  const customLabel = resolveCustomQuestionLabelNode(el)
  if (customLabel) return customLabel

  const labels = el.labels
  if (labels && labels.length > 0) {
    const text = cleanLabel(labels[0].textContent || "")
    if (text) return labels[0]
  }

  const id = el.id
  if (id) {
    const forLabel = form.querySelector(`label[for="${CSS.escape(id)}"]`)
    if (forLabel instanceof HTMLElement) {
      const text = cleanLabel(forLabel.textContent || "")
      if (text) return forLabel
    }
  }

  const closestLabel = el.closest("label")
  if (closestLabel instanceof HTMLElement) {
    const text = cleanLabel(closestLabel.textContent || "")
    if (text) return closestLabel
  }

  const candidates = [
    el.previousElementSibling,
    el.parentElement,
    el.closest("div, section, fieldset, li, form"),
  ]
  for (const candidate of candidates) {
    if (!candidate) continue

    const heading = candidate.querySelector(
      "label, legend, [role='heading']",
    )
    if (heading instanceof HTMLElement) {
      const text = cleanLabel(heading.textContent || "")
      if (text) return heading
    }

    const nearbyTextNodes = Array.from(
      candidate.querySelectorAll("div, span, p"),
    ).filter((node) => {
      if (
        node.contains(el) ||
        node.querySelector("input, select, textarea, button")
      ) {
        return false
      }
      const text = cleanLabel(node.textContent || "")
      return !!text && text.length <= 120
    })
    if (nearbyTextNodes[0]) return nearbyTextNodes[0]
  }

  const fallback = fallbackLabelFromAttributes(el)
  return fallback ? createSyntheticLabel(fallback) : null
}

function isRequiredField(el, labelNode) {
  const labelText = labelNode?.textContent || ""
  return (
    labelText.includes("*") ||
    (el instanceof HTMLInputElement && el.required) ||
    (el instanceof HTMLSelectElement && el.required) ||
    (el instanceof HTMLTextAreaElement && el.required) ||
    false
  )
}

function isDateField(label, el) {
  const normalized = normalizeLabel(label)
  return !!(
    normalized.includes("start date") ||
    normalized.includes("end date") ||
    (el instanceof HTMLInputElement &&
      (el.type === "date" || el.type === "month"))
  )
}

function getSelectOptions(select) {
  return Array.from(select.options)
    .map((option) => cleanLabel(option.textContent || option.value || ""))
    .filter(
      (text) =>
        text &&
        !["select", "please select", "choose..."].includes(normalizeLabel(text)),
    )
}

function getRadiosWithSameName(el, form) {
  const name = (el.name || "").trim()
  return name
    ? Array.from(
        form.querySelectorAll(
          `input[type="radio"][name="${CSS.escape(name)}"]`,
        ),
      ).filter((radio) => !radio.disabled)
    : []
}

function getRadioOptionLabels(radios) {
  return radios.map((radio) => getRadioOptionLabel(radio)).filter(Boolean)
}

function getRadioOptionLabel(el) {
  const form = getFormContainer()
  const forLabel = el.id
    ? form?.querySelector(`label[for="${CSS.escape(el.id)}"]`)
    : null
  const closestLabel = el.closest("label")
  return cleanLabel(
    forLabel?.textContent || closestLabel?.textContent || el.value || "",
  )
}

function buildRuleFromElement(el, form) {
  if (isChoiceOtherTextInput(el)) return null

  const labelNode = resolveLabelNode(el)
  const label = cleanLabel(labelNode?.textContent || "")
  if (!label) return null

  if (el instanceof HTMLInputElement) {
    if (gustoAnswer.isSkippableInput(el)) return null

    if (el.type === "checkbox") {
      const customContainer = findCustomQuestionContainer(el)
      if (customContainer && isMultiChoiceQuestion(customContainer)) {
        const checkboxes = getCheckboxesWithSameName(el, customContainer)
        const options = checkboxes
          .map((checkbox) => getCheckboxOptionLabel(checkbox))
          .filter(Boolean)
        return {
          type: enums.FIELD_TYPE.CHECKBOX,
          label,
          required: isRequiredField(el, labelNode),
          options,
          isMultiCheckboxQuestion: true,
          $checkboxs: checkboxes,
          $input: el,
          $label: labelNode || createSyntheticLabel(label),
        }
      }

      const optionLabel = cleanLabel(labelNode?.textContent || el.value || "")
      return {
        type: enums.FIELD_TYPE.CHECKBOX,
        label,
        required: isRequiredField(el, labelNode),
        options: optionLabel ? [optionLabel] : [],
        $checkboxs: [el],
        $input: el,
        $label: labelNode || createSyntheticLabel(label),
      }
    }

    if (el.type === "radio") {
      const radios = getRadiosWithSameName(el, form)
      if (radios.length === 0) return null
      return {
        type: enums.FIELD_TYPE.RADIOGROUP,
        label,
        required: isRequiredField(el, labelNode),
        options: getRadioOptionLabels(radios),
        $radioParent: el.closest("fieldset, div") || form,
        $input: radios[0],
        $label: labelNode || createSyntheticLabel(label),
      }
    }

    return isDateField(label, el)
      ? {
          type: enums.FIELD_TYPE.DATE,
          label,
          required: isRequiredField(el, labelNode),
          $input: el,
          $label: labelNode || createSyntheticLabel(label),
        }
      : {
          type: enums.FIELD_TYPE.TEXT,
          label,
          required: isRequiredField(el, labelNode),
          $input: el,
          $label: labelNode || createSyntheticLabel(label),
        }
  }

  if (el instanceof HTMLSelectElement) {
    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      required: isRequiredField(el, labelNode),
      options: getSelectOptions(el),
      $input: el,
      $label: labelNode || createSyntheticLabel(label),
    }
  }

  if (el instanceof HTMLTextAreaElement) {
    const type = isDateField(label, el)
      ? enums.FIELD_TYPE.DATE
      : enums.FIELD_TYPE.TEXT
    const rule = {
      type,
      label,
      required: isRequiredField(el, labelNode),
      $input: el,
      $label: labelNode || createSyntheticLabel(label),
    }
    if (
      type === enums.FIELD_TYPE.TEXT &&
      normalizeLabel(label) === "additional information (optional)"
    ) {
      rule.description = "Summarize your relevant experience"
    }
    return rule
  }

  return null
}

export function disambiguateGustoDuplicateQuestionLabels(rules) {
  const labelCounts = new Map()
  for (const rule of rules) {
    const key = normalizeLabel(rule.label)
    labelCounts.set(key, (labelCounts.get(key) || 0) + 1)
  }

  const usedLabels = new Set(rules.map((rule) => normalizeLabel(rule.label)))
  const occurrenceByLabel = new Map()

  return rules.map((rule) => {
    let nextLabel
    const key = normalizeLabel(rule.label)
    if ((labelCounts.get(key) || 0) < 2) return rule

    let occurrence = occurrenceByLabel.get(key) || 0
    do {
      occurrence += 1
      nextLabel = `${rule.label} [Question ${occurrence}]`
    } while (usedLabels.has(normalizeLabel(nextLabel)))

    occurrenceByLabel.set(key, occurrence)
    usedLabels.add(normalizeLabel(nextLabel))
    return { ...rule, label: nextLabel }
  })
}

function collectRulesFromForm(form) {
  const elements = Array.from(form.querySelectorAll(FIELD_SELECTOR))
  const rules = []
  const seenRadioNames = new Set()
  const seenMultiCheckboxNames = new Set()

  for (const el of elements) {
    if (
      el instanceof HTMLInputElement &&
      el.type === "radio" &&
      el.name &&
      seenRadioNames.has(el.name)
    ) {
      continue
    }

    const customContainer =
      el instanceof HTMLInputElement && el.type === "checkbox" && el.name
        ? findCustomQuestionContainer(el)
        : null
    const isMultiCheckbox = !!(
      customContainer && isMultiChoiceQuestion(customContainer)
    )
    if (isMultiCheckbox && seenMultiCheckboxNames.has(el.name)) continue

    const rule = buildRuleFromElement(el, form)
    if (rule) {
      if (
        el instanceof HTMLInputElement &&
        el.type === "radio" &&
        el.name
      ) {
        seenRadioNames.add(el.name)
      }
      if (isMultiCheckbox) seenMultiCheckboxNames.add(el.name)
      rules.push(rule)
    }
  }

  return disambiguateGustoDuplicateQuestionLabels(rules)
}

function isGustoPhoneNumberRule(rule) {
  if (rule.type !== enums.FIELD_TYPE.TEXT) return false
  const input = rule.$input
  return (
    !!input &&
    input.id === "job_applicant_phone" &&
    input.name === "job_applicant[phone]" &&
    input.getAttribute?.("data-phone-number-target") === "phone"
  )
}

export function buildGustoRequestRules(rules) {
  if (
    rules.some(
      (rule) => normalizeLabel(rule.label) === normalizeLabel(PHONE_COUNTRY_CODE_LABEL),
    )
  ) {
    return rules
  }

  const phoneIndex = rules.findIndex(isGustoPhoneNumberRule)
  if (phoneIndex < 0) return rules

  const phoneRule = rules[phoneIndex]
  const countryCodeRule = {
    type: enums.FIELD_TYPE.TEXT,
    label: PHONE_COUNTRY_CODE_LABEL,
    required: false,
  }
  const phoneRuleWithDescription = {
    ...phoneRule,
    description: PHONE_NUMBER_DESCRIPTION,
  }

  return [
    ...rules.slice(0, phoneIndex),
    countryCodeRule,
    phoneRuleWithDescription,
    ...rules.slice(phoneIndex + 1),
  ]
}

export async function extractRules() {
  const form = getFormContainer()
  if (!form) return []

  const rules = collectRulesFromForm(form)
  console.log("Extracted rules:", rules)
  return rules
}

function readFieldSnapshotValue(el) {
  if (el instanceof HTMLInputElement) {
    if (el.type === "checkbox") return el.checked ? "Yes" : "No"
    if (el.type === "radio") {
      if (!el.name) return el.checked ? el.value : ""
      const checked = getFormContainer()?.querySelector(
        `input[type="radio"][name="${CSS.escape(el.name)}"]:checked`,
      )
      return checked ? getRadioOptionLabel(checked) : ""
    }
    return el.value || ""
  }

  if (el instanceof HTMLSelectElement) {
    const selected = el.options[el.selectedIndex]
    return cleanLabel(selected?.textContent || el.value || "")
  }

  return el.value || ""
}

export function getGustoSnapshotFromRules(
  rules,
  readValue = readFieldSnapshotValue,
  readCheckboxLabel = getCheckboxOptionLabel,
) {
  const snapshot = {}

  for (const rule of rules) {
    const input = rule.$input
    if (!input) continue

    if (
      rule.type === enums.FIELD_TYPE.CHECKBOX &&
      rule.isMultiCheckboxQuestion
    ) {
      const checkboxes = rule.$checkboxs
      snapshot[rule.label] = (checkboxes || [])
        .filter((checkbox) => checkbox.checked)
        .map(readCheckboxLabel)
        .filter(Boolean)
        .join(", ")
      continue
    }

    snapshot[rule.label] = readValue(input)
  }

  return snapshot
}

export async function getFormSnapshot() {
  const form = getFormContainer()
  return form ? getGustoSnapshotFromRules(collectRulesFromForm(form)) : {}
}
