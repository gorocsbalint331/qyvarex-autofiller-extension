// @ts-nocheck
/**
 * Careers With Waymo form rule extraction, education rules, and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as waymoAnswer from "./answer.ts"

function getFormContainer() {
  return document.querySelector(
    'form.form-template[data-turbo="true"][data-call-to-action--form-target="form"][id^="new_form_submission_"][enctype="multipart/form-data"][action*="/call_to_actions/"][action*="/form_submissions"][method="post"]',
  )
}

function getCoverLetterInput() {
  const byClass = document.querySelector(
    '.form-group.cover-letter input[type="file"]',
  )
  if (byClass) return byClass

  const fileInputs = Array.from(
    document.querySelectorAll('input[type="file"]'),
  )
  for (const input of fileInputs) {
    const label = input.id
      ? document.querySelector(`label[for="${input.id}"]`)
      : input.closest("label")
    if (
      waymoAnswer.getVisibleLabelText(label).toLowerCase() === "cover letter"
    ) {
      return input
    }
  }
  return null
}

function isCoverLetterRequired(input) {
  const label = input.id
    ? document.querySelector(`label[for="${input.id}"]`)
    : input.closest("label")
  const text = label?.textContent || ""
  return (
    input.required ||
    input.getAttribute("aria-required") === "true" ||
    /\*/.test(text) ||
    /\(\s*required\s*\)/i.test(text) ||
    label?.querySelector(".question-label-required") !== null
  )
}

function isHiddenOrDisabledType(element) {
  const style = window.getComputedStyle(element)
  return (
    style.display === "none" ||
    style.visibility === "hidden" ||
    element.getAttribute("type") === "hidden"
  )
}

function isEducationField(element) {
  return !!element.closest(".greenhouse-education")
}

function isJobAlertField(element) {
  const fieldset = element.closest("fieldset")
  return (
    fieldset instanceof HTMLFieldSetElement &&
    fieldset.querySelector(
      'input[type="hidden"][name*="[kind]"][value="job_alert"]',
    ) !== null
  )
}

function findLabelForElement(element) {
  const form = getFormContainer()
  if (!form) return null

  if ("id" in element && element.id) {
    const byFor = form.querySelector(`label[for="${element.id}"]`)
    if (byFor instanceof HTMLElement) return byFor
  }

  const fieldset = element.closest("fieldset")
  const legend = fieldset?.querySelector("legend")
  if (legend instanceof HTMLElement) return legend

  const closestLabel = element.closest("label")
  if (closestLabel instanceof HTMLElement) return closestLabel

  const container = element.closest("div, li, td, section, form")
  const nestedLabel = container?.querySelector("label")
  if (nestedLabel instanceof HTMLElement) return nestedLabel

  let sibling = element.previousElementSibling
  while (sibling) {
    if (sibling instanceof HTMLLabelElement) return sibling
    sibling = sibling.previousElementSibling
  }

  return null
}

function isFieldRequired(input, labelEl) {
  const text = labelEl.textContent || ""
  return (
    input.required ||
    input.getAttribute("aria-required") === "true" ||
    /\*/.test(text) ||
    /\(\s*required\s*\)/i.test(text) ||
    labelEl.querySelector(".question-label-required") !== null
  )
}

function getCheckboxGroup(checkbox) {
  const form = getFormContainer()
  if (!form) return []
  return checkbox.name
    ? Array.from(
        form.querySelectorAll(
          `input[type="checkbox"][name="${CSS.escape(checkbox.name)}"]`,
        ),
      )
    : [checkbox]
}

function getRadioGroup(radio) {
  const form = getFormContainer()
  if (!form) return []
  return radio.name
    ? Array.from(
        form.querySelectorAll(
          `input[type="radio"][name="${CSS.escape(radio.name)}"]`,
        ),
      )
    : [radio]
}

function getSelectOptions(select) {
  return Array.from(select.options)
    .map((option) => (option.textContent || option.value || "").trim())
    .filter((text) => text !== "")
}

function buildFieldRule(element, seenRadios, seenCheckboxes) {
  const form = getFormContainer()
  if (
    isHiddenOrDisabledType(element) ||
    element.disabled ||
    isJobAlertField(element) ||
    (element instanceof HTMLInputElement &&
      ["hidden", "submit", "button", "reset", "file"].includes(element.type))
  ) {
    return null
  }

  const labelEl = findLabelForElement(element)
  if (!labelEl) return null

  const label = waymoAnswer.getVisibleLabelText(labelEl)
  if (!label) return null

  if (element instanceof HTMLTextAreaElement) {
    return {
      label,
      required: isFieldRequired(element, labelEl),
      type: enums.FIELD_TYPE.TEXT,
      $label: labelEl,
      $input: element,
    }
  }

  if (element instanceof HTMLSelectElement) {
    return {
      label,
      required: isFieldRequired(element, labelEl),
      type: enums.FIELD_TYPE.SELECT,
      $label: labelEl,
      $input: element,
      options: getSelectOptions(element),
    }
  }

  if (element.type === "checkbox") {
    const groupKey = element.name || element.id
    if (groupKey && seenCheckboxes.has(groupKey)) return null
    if (groupKey) seenCheckboxes.add(groupKey)

    const checkboxes = getCheckboxGroup(element)
    return {
      label,
      required: isFieldRequired(element, labelEl),
      type: enums.FIELD_TYPE.CHECKBOX,
      $label: labelEl,
      $checkboxs: checkboxes,
      options: checkboxes.map((checkbox) =>
        waymoAnswer.getChoiceText(checkbox, form ?? document),
      ),
    }
  }

  if (element.type === "radio") {
    const groupKey = element.name || element.id
    if (groupKey && seenRadios.has(groupKey)) return null
    if (groupKey) seenRadios.add(groupKey)

    const radios = getRadioGroup(element)
    const radioParent =
      element.closest("fieldset, div, section, li, form") ?? document.body
    return {
      label,
      required: isFieldRequired(element, labelEl),
      type: enums.FIELD_TYPE.RADIOGROUP,
      $label: labelEl,
      $input: element,
      $radioParent: radioParent,
      options: radios.map((radio) =>
        waymoAnswer.getChoiceText(radio, form ?? document),
      ),
    }
  }

  return {
    label,
    required: isFieldRequired(element, labelEl),
    type: enums.FIELD_TYPE.TEXT,
    $label: labelEl,
    $input: element,
  }
}

function readRuleValue(rule) {
  if (rule.type === enums.FIELD_TYPE.TEXT) return rule.$input?.value ?? ""

  if (rule.type === enums.FIELD_TYPE.SELECT) {
    const select = rule.$input
    return (
      (select instanceof HTMLSelectElement &&
        (select.selectedOptions?.[0]?.textContent?.trim() || select.value)) ||
      ""
    )
  }

  if (rule.type === enums.FIELD_TYPE.CHECKBOX) {
    return rule.$checkboxs
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) =>
        waymoAnswer.getChoiceText(checkbox, getFormContainer() ?? document),
      )
  }

  if (rule.type === enums.FIELD_TYPE.RADIOGROUP) {
    const checked = rule.$radioParent.querySelector(
      'input[type="radio"]:checked',
    )
    return checked
      ? waymoAnswer.getChoiceText(checked, getFormContainer() ?? document)
      : ""
  }

  return ""
}

function snapshotSectionRules(sectionRules) {
  return sectionRules
    .map((section) => {
      const row = {}
      const children = section.children || []
      for (const child of children) {
        row[child.label] = readRuleValue(child)
      }
      return row
    })
    .filter((row) => Object.keys(row).length > 0)
}

function toSectionOptions(children) {
  return children.map((child) => ({
    label: child.label,
    type: child.type,
    options: "options" in child ? child.options : undefined,
  }))
}

async function getEducationRules() {
  const form = getFormContainer()
  if (!form) return []

  const educationRoot = form.querySelector(".greenhouse-education")
  if (!(educationRoot instanceof HTMLElement)) return []

  const groups = Array.from(
    educationRoot.querySelectorAll(".education-question-group"),
  )
  const rules = []

  for (const group of groups) {
    const children = []

    const schoolLabel = group.querySelector(".form-group.school label")
    const schoolSelect = group.querySelector(
      '.form-group.school select[name*="[school_name_id]"]',
    )
    if (schoolLabel && schoolSelect) {
      children.push({
        label: "School",
        required:
          schoolSelect.required ||
          /required/i.test(schoolLabel.textContent || ""),
        type: enums.FIELD_TYPE.SELECT,
        $label: schoolLabel,
        $input: schoolSelect,
        options: getSelectOptions(schoolSelect),
      })
    }

    const endDateLabel = group.querySelector(".form-group.end-date label")
    const endMonth = group.querySelector(
      '.form-group.end-date input[name*="[end_date][month]"]',
    )
    const endYear = group.querySelector(
      '.form-group.end-date input[name*="[end_date][year]"]',
    )

    if (endDateLabel && endMonth) {
      children.push({
        label: "End date month",
        required:
          endMonth.required ||
          /required/i.test(endDateLabel.textContent || ""),
        type: enums.FIELD_TYPE.TEXT,
        $label: endDateLabel,
        $input: endMonth,
      })
    }

    if (endDateLabel && endYear) {
      children.push({
        label: "End date year",
        required:
          endYear.required ||
          /required/i.test(endDateLabel.textContent || ""),
        type: enums.FIELD_TYPE.TEXT,
        $label: endDateLabel,
        $input: endYear,
      })
    }

    if (children.length) {
      rules.push({
        label: "Education",
        required: children.some((child) => child.required),
        type: enums.FIELD_TYPE.EDUCATION,
        children,
        options: toSectionOptions(children),
      })
    }
  }

  return rules
}

async function getExperienceRules() {
  return []
}

async function extractRules() {
  const rules = []
  const form = getFormContainer()
  if (!form) return rules

  const seenRadios = new Set()
  const seenCheckboxes = new Set()
  const fields = form.querySelectorAll("input, select, textarea")

  for (const field of Array.from(fields)) {
    if (isEducationField(field)) continue
    const rule = buildFieldRule(field, seenRadios, seenCheckboxes)
    if (rule) rules.push(rule)
  }

  const educationRules = await getEducationRules()
  if (educationRules.length > 0) rules.push(educationRules[0])

  const experienceRules = await getExperienceRules()
  rules.push(...experienceRules)
  return rules
}

async function getFormSnapshot() {
  const snapshot = {}
  const rules = await extractRules()

  for (const rule of rules) {
    if (
      rule.type !== enums.FIELD_TYPE.EDUCATION &&
      rule.type !== enums.FIELD_TYPE.EMPLOYMENT
    ) {
      snapshot[rule.label] = readRuleValue(rule)
    }
  }

  const educationRules = await getEducationRules()
  snapshot.education = snapshotSectionRules(educationRules)

  const experienceRules = await getExperienceRules()
  snapshot.employment = snapshotSectionRules(experienceRules)

  return snapshot
}

export {
  extractRules,
  getCoverLetterInput,
  getEducationRules,
  getExperienceRules,
  getFormContainer,
  getFormSnapshot,
  isCoverLetterRequired,
}
