// @ts-nocheck
/**
 * Isolved — form rule extraction, snapshots, and page helpers.
 * Readable TypeScript source of truth.
 */

import * as enums from "../../../core/enums.js"
import * as getTargetOrTimeoutModule from "../../../utils/getTargetOrTimeout.js"

const getTargetOrTimeout = {
  default: getTargetOrTimeoutModule.default ?? getTargetOrTimeoutModule,
}

export function isElementDisabled(element) {
  if (
    element.getAttribute("aria-disabled") === "true" ||
    element.hasAttribute("disabled")
  ) {
    return true
  }
  return "disabled" in element && !!element.disabled
}

function isElementVisible(element) {
  let current = element
  while (current) {
    if (current.hidden || current.getAttribute("aria-hidden") === "true") {
      return false
    }
    const style = window.getComputedStyle(current)
    if (
      style.display === "none" ||
      style.visibility === "hidden" ||
      style.visibility === "collapse"
    ) {
      return false
    }
    current = current.parentElement
  }
  return true
}

function isHiddenSourceIdSelect(element) {
  return (
    element instanceof HTMLSelectElement &&
    (element.id === "source_id" || element.name === "source_id") &&
    !isElementVisible(element)
  )
}

function findAssociatedLabel(element) {
  const id = element.id
  if (id) {
    const byFor = document.querySelector(`label[for="${id}"]`)
    if (byFor) return byFor
  }
  const container = element.closest("fieldset, li, .form-group, .form-field")
  if (container) {
    const labelOrLegend = container.querySelector("label, legend")
    if (labelOrLegend) return labelOrLegend
  }
  const nextSibling = element.nextElementSibling
  if (
    nextSibling &&
    nextSibling.tagName.toLowerCase() === "span" &&
    nextSibling.textContent?.trim()
  ) {
    return nextSibling
  }
  return null
}

function isRequiredField(element, labelEl) {
  if (
    element.hasAttribute("required") ||
    element.getAttribute("aria-required") === "true"
  ) {
    return true
  }
  const container = element.closest(
    "div, fieldset, li, .field, .form-group, [class*='field'], [class*='question']",
  )
  if (container) {
    if (
      container.hasAttribute("required") ||
      container.querySelector('[class*="required"], .required')
    ) {
      return true
    }
    const requiredMark = container.querySelector(
      'abbr[title="required"], span[aria-label="required"], [class*="required-mark"], [class*="asterisk"]',
    )
    if (requiredMark) return true
  }
  if (labelEl) {
    if (
      labelEl.querySelector(
        'abbr[title="required"], [class*="required"]',
      )
    ) {
      return true
    }
    const clone = labelEl.cloneNode(true)
    clone
      .querySelectorAll("input, select, textarea")
      .forEach((node) => node.remove())
    if (clone.textContent?.includes("*")) return true
  }
  return false
}

function getSelectOptions(selectEl) {
  return Array.from(selectEl.options)
    .map((option) => option.textContent?.trim() || option.value)
    .filter((text) => text !== "")
}

function getCleanLabelText(labelEl) {
  if (!labelEl) return ""
  const clone = labelEl.cloneNode(true)
  clone
    .querySelectorAll(
      "abbr, [aria-hidden], [class*='required'], [class*='asterisk'], input, select, textarea",
    )
    .forEach((node) => node.remove())
  return (
    clone.textContent?.trim().replace(/[*:]+\s*$/, "").trim() || ""
  )
}

function getRadioOrCheckboxLabelText(element) {
  const labelEl = document.querySelector(`label[for="${element.id}"]`)
  return (
    labelEl?.textContent?.trim() ||
    element.closest("label")?.textContent?.trim() ||
    element.value ||
    ""
  )
}

function getFieldSnapshotValue(rule) {
  if (!("$input" in rule) || !rule.$input) return ""
  if (rule.type === enums.FIELD_TYPE.CHECKBOX) {
    const checkboxRule = rule
    const checkboxes = checkboxRule.$checkboxs || [checkboxRule.$input]
    const selected = checkboxes
      .map((checkbox, index) =>
        checkbox.checked
          ? checkboxRule.options?.[index] ||
            getRadioOrCheckboxLabelText(checkbox)
          : null,
      )
      .filter((value) => !!value)
    if (selected.length === 0) return ""
    return selected.length === 1 ? selected[0] : selected
  }
  if (rule.type === enums.FIELD_TYPE.RADIOGROUP) {
    const parent = rule.$radioParent
    const checked = parent?.querySelector('input[type="radio"]:checked')
    return checked ? getRadioOrCheckboxLabelText(checked) : ""
  }
  const input = rule.$input
  if (
    rule.type === enums.FIELD_TYPE.SELECT &&
    input instanceof HTMLSelectElement
  ) {
    return input.options[input.selectedIndex]?.textContent?.trim() || ""
  }
  return (
    ((input instanceof HTMLInputElement ||
      input instanceof HTMLTextAreaElement) &&
      input.value) ||
    ""
  )
}

export function getSectionRecordSnapshot(rulesList) {
  const snapshot = {}
  for (const rule of rulesList) {
    snapshot[rule.label] = getFieldSnapshotValue(rule)
  }
  return snapshot
}

function mapSectionSnapshots(sectionRules) {
  return sectionRules
    .map((section) => getSectionRecordSnapshot(section.children || []))
    .filter((row) => Object.keys(row).length > 0)
}

function getFieldDescription(sectionType, label) {
  if (sectionType === enums.FIELD_TYPE.EDUCATION) {
    if (label === "City") {
      return "return to the place where the school is located"
    }
    if (label === "Country/Territory") {
      return "return the Country/Territory where the school is located"
    }
  }
  if (sectionType === enums.FIELD_TYPE.EMPLOYMENT) {
    switch (label) {
      case "Start":
      case "Start Date":
      case "Date Started":
      case "Dates Employed Month Start Date":
      case "Dates Employed Year Start Date":
        return "return the date in English month-year format, e.g. 'Aug 2018' or 'August 2018'"
      case "End":
      case "End Date":
      case "Date Ended":
      case "Dates Employed Month End Date":
      case "Dates Employed Year End Date":
        return "return the date in English month-year format, e.g. 'Dec 2019' or 'December 2019'. If currently employed, return 'Present'"
      case "Reason For Leaving":
        return "the reason why the applicant left this employer, e.g. 'Seeking new opportunities', 'Career growth', 'Relocation'"
      case "Starting Rate of Pay":
        return "the salary or hourly wage when the applicant started this position"
      case "Ending Rate of Pay":
        return "the salary or hourly wage when the applicant left this position"
      case "Explain Your Duties":
      case "Briefly Explain Your Duties":
        return "a brief summary of the applicant's main job responsibilities and duties at this position"
    }
  }
}

function buildRuleFromElement(element) {
  const tagName = element.tagName.toLowerCase()
  const inputType = element.type?.toLowerCase() || ""
  if (
    inputType === "hidden" ||
    inputType === "submit" ||
    inputType === "button" ||
    inputType === "file" ||
    inputType === "image" ||
    inputType === "reset" ||
    !isElementVisible(element) ||
    isElementDisabled(element) ||
    inputType === "radio"
  ) {
    return null
  }
  const labelEl = findAssociatedLabel(element)
  const dataTitle = element.getAttribute("data-question-title")?.trim() || ""
  const label = getCleanLabelText(labelEl) || dataTitle
  if (!label) return null
  const $label =
    labelEl ||
    (() => {
      const span = document.createElement("span")
      span.textContent = label
      return span
    })()
  const required = isRequiredField(element, labelEl)
  if (inputType === "checkbox") {
    return {
      type: enums.FIELD_TYPE.CHECKBOX,
      label,
      required,
      options: [],
      $checkboxs: [element],
      $input: element,
      $label,
    }
  }
  if (tagName === "select") {
    const options = getSelectOptions(element)
    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      required,
      options,
      $input: element,
      $label,
    }
  }
  return {
    type: enums.FIELD_TYPE.TEXT,
    label,
    required,
    $input: element,
    $label,
  }
}

function collectRadioGroups(root) {
  const groups = new Map()
  const radios = Array.from(
    root.querySelectorAll('input[type="radio"]'),
  ).filter((radio) => isElementVisible(radio) && !isElementDisabled(radio))
  for (const radio of radios) {
    const groupKey = radio.name || radio.id
    if (!groupKey) continue
    if (!groups.has(groupKey)) groups.set(groupKey, [])
    groups.get(groupKey).push(radio)
  }
  return groups
}

export function isReferencePage() {
  const root = document.querySelector("#landingStrip") || document.body
  const currentStep = document.querySelector("#steps .step.current")
  const stepText = currentStep?.textContent?.trim().toLowerCase() || ""
  const dataFile =
    currentStep?.getAttribute("data-file")?.trim().toLowerCase() || ""
  const referenceTitles = Array.from(
    root.querySelectorAll(
      "input[data-question-title], select[data-question-title], textarea[data-question-title]",
    ),
  )
    .map(
      (el) =>
        el.getAttribute("data-question-title")?.trim().toLowerCase() || "",
    )
    .filter((title) => title.startsWith("reference "))
  const knownReferenceLabels = new Set([
    "reference name",
    "reference relationship",
    "reference phone number",
    "reference email address",
  ])
  const knownLabelCount = referenceTitles.filter((title) =>
    knownReferenceLabels.has(title),
  ).length
  const hasReferenceHeading = Array.from(
    root.querySelectorAll("h1, h2, h3, legend"),
  ).some((el) =>
    /^reference\s+\d+\*?$/i.test(el.textContent?.trim() || ""),
  )
  const stepLooksLikeReference =
    stepText.includes("reference") || dataFile.includes("reference")
  if (stepLooksLikeReference) {
    return hasReferenceHeading || knownLabelCount >= 2
  }
  return hasReferenceHeading && knownLabelCount >= 2
}

function isInsideEducationOrEmploymentForm(element) {
  return !!element.closest(
    'form[id*="education"], form[class*="education"], form[id*="employ"], form[class*="employ"], form[id*="experience"], form[class*="experience"]',
  )
}

function extractRulesFromRoot(root) {
  const rulesList = []
  const inputs = Array.from(
    root.querySelectorAll(
      "input:not([type='hidden']):not([type='submit']):not([type='button']):not([type='file']):not([type='radio']):not([type='checkbox']), select, textarea",
    ),
  )
  for (const input of inputs) {
    const rule = buildRuleFromElement(input)
    if (rule) rulesList.push(rule)
  }
  const checkboxes = Array.from(
    root.querySelectorAll('input[type="checkbox"]'),
  ).filter(
    (checkbox) =>
      isElementVisible(checkbox) &&
      checkbox.id !== "info_use_consent" &&
      checkbox.name !== "info_use_consent",
  )
  for (const checkbox of checkboxes) {
    const rule = buildRuleFromElement(checkbox)
    if (rule) rulesList.push(rule)
  }
  const radioGroups = collectRadioGroups(root)
  for (const [, radios] of radioGroups) {
    if (radios.length === 0) continue
    const firstRadio = radios[0]
    const groupParent =
      firstRadio.closest(
        'fieldset, [role="group"], [class*="radio-group"], [class*="radios"]',
      ) || firstRadio.parentElement
    const labelEl =
      (groupParent &&
        (groupParent.querySelector("legend") ||
          groupParent.querySelector("label"))) ||
      findAssociatedLabel(firstRadio)
    if (!labelEl || !isElementVisible(labelEl)) continue
    const label = getCleanLabelText(labelEl)
    if (!label) continue
    const options = radios.map((radio) =>
      getRadioOrCheckboxLabelText(radio),
    )
    rulesList.push({
      type: enums.FIELD_TYPE.RADIOGROUP,
      label,
      required: isRequiredField(firstRadio, labelEl),
      options: options.filter((option) => option),
      $radioParent: groupParent || root,
      $input: firstRadio,
      $label: labelEl,
    })
  }
  return rulesList
}

function buildSectionRule(sectionType, label, children) {
  return {
    type: sectionType,
    label,
    children,
    options: children.map((child) => {
      const option = { type: child.type, label: child.label }
      if (child.type !== enums.FIELD_TYPE.TEXT) {
        option.options = child.options || []
      }
      const description =
        child.description || getFieldDescription(sectionType, child.label)
      if (description) option.description = description
      return option
    }),
    required: false,
  }
}

export function getEducationRules() {
  const rulesList = []
  const form = document.querySelector("#education_form")
  if (!form) return rulesList
  const children = extractRulesFromRoot(form)
  if (children.length > 0) {
    rulesList.push(
      buildSectionRule(enums.FIELD_TYPE.EDUCATION, "Education", children),
    )
  }
  return rulesList
}

export function getExperienceRules() {
  const rulesList = []
  const form = document.querySelector("#employer_form")
  if (!form) return rulesList
  const children = extractRulesFromRoot(form)
  if (children.length > 0) {
    rulesList.push(
      buildSectionRule(enums.FIELD_TYPE.EMPLOYMENT, "Employment", children),
    )
  }
  return rulesList
}

export function getAddEmploymentButton() {
  return (
    document.querySelector(
      'button[onclick*="employment.edit"], a[onclick*="employment.edit"]',
    ) ||
    Array.from(
      document.querySelectorAll("#buttons button, #buttons a"),
    ).find(
      (el) =>
        el.textContent?.toLowerCase().includes("add employer") ?? false,
    ) ||
    null
  )
}

export function getAddEducationButton() {
  return (
    document.querySelector(
      'button[onclick*="education.edit"], a[onclick*="education.edit"]',
    ) ||
    Array.from(
      document.querySelectorAll("#buttons button, #buttons a"),
    ).find(
      (el) =>
        el.textContent?.toLowerCase().includes("add education") ?? false,
    ) ||
    null
  )
}

export async function getEducationEditorRules() {
  return await getTargetOrTimeout.default(
    () => {
      const educationRules = getEducationRules()
      if (educationRules.length === 0) return null
      const last = educationRules[educationRules.length - 1]
      const children = last.children
      return children && children.length >= 2 ? children : null
    },
    () => false,
    30,
  )
}

export async function getEmploymentEditorRules() {
  return await getTargetOrTimeout.default(
    () => {
      const employmentRules = getExperienceRules()
      if (employmentRules.length === 0) return null
      const last = employmentRules[employmentRules.length - 1]
      const children = last.children
      return children && children.length >= 2 ? children : null
    },
    () => false,
    30,
  )
}

function dedupeLabelsUsingDataTitle(rulesList) {
  const counts = new Map()
  for (const rule of rulesList) {
    counts.set(rule.label, (counts.get(rule.label) || 0) + 1)
  }
  for (const rule of rulesList) {
    if ((counts.get(rule.label) || 0) <= 1) continue
    const input = rule.$input
    const dataTitle = input?.getAttribute("data-question-title")?.trim()
    if (dataTitle && dataTitle !== rule.label) {
      rule.label = dataTitle
    }
  }
}

export async function extractRules() {
  const rulesList = []
  if (isReferencePage()) return rulesList
  const modalForm = document.querySelector(".modal-content form")
  const visibleModal = modalForm && isElementVisible(modalForm) ? modalForm : null
  const root =
    visibleModal ||
    document.querySelector("#landingStrip") ||
    document.querySelector("form") ||
    document.querySelector(
      '[class*="application"], [class*="apply"], main',
    ) ||
    document.body
  const inputs = Array.from(
    root.querySelectorAll(
      "input:not([type='hidden']):not([type='submit']):not([type='button']):not([type='file']):not([type='radio']):not([type='checkbox']), select, textarea",
    ),
  ).filter(
    (input) =>
      !isInsideEducationOrEmploymentForm(input) &&
      input.id !== "resume_text" &&
      !isHiddenSourceIdSelect(input),
  )
  for (const input of inputs) {
    const rule = buildRuleFromElement(input)
    if (rule) rulesList.push(rule)
  }
  const checkboxes = Array.from(
    root.querySelectorAll('input[type="checkbox"]'),
  ).filter(
    (checkbox) =>
      !isInsideEducationOrEmploymentForm(checkbox) &&
      isElementVisible(checkbox) &&
      checkbox.id !== "info_use_consent" &&
      checkbox.name !== "info_use_consent",
  )
  const checkboxGroups = new Map()
  for (const checkbox of checkboxes) {
    const groupParent =
      checkbox.closest(
        'fieldset, [role="group"], [class*="checkbox-group"], [class*="checkboxes"]',
      ) || checkbox.parentElement
    if (!checkboxGroups.has(groupParent)) {
      checkboxGroups.set(groupParent, [])
    }
    checkboxGroups.get(groupParent).push(checkbox)
  }
  for (const [groupParent, groupCheckboxes] of checkboxGroups) {
    if (groupCheckboxes.length === 0) continue
    const labelEl =
      groupParent.querySelector("legend") ||
      groupParent.querySelector("label") ||
      findAssociatedLabel(groupCheckboxes[0])
    if (!labelEl || !isElementVisible(labelEl)) continue
    const label = getCleanLabelText(labelEl)
    if (!label) continue
    const options = groupCheckboxes.map((checkbox) =>
      getRadioOrCheckboxLabelText(checkbox),
    )
    rulesList.push({
      type: enums.FIELD_TYPE.CHECKBOX,
      label,
      required: isRequiredField(groupCheckboxes[0], labelEl),
      options: options.filter((option) => option),
      $checkboxs: groupCheckboxes,
      $input: groupCheckboxes[0],
      $label: labelEl,
    })
  }
  const radioGroups = collectRadioGroups(root)
  for (const [, radios] of radioGroups) {
    if (radios.length === 0) continue
    const firstRadio = radios[0]
    if (isInsideEducationOrEmploymentForm(firstRadio)) continue
    const groupParent =
      firstRadio.closest(
        'fieldset, [role="group"], [class*="radio-group"], [class*="radios"]',
      ) || firstRadio.parentElement
    const labelEl =
      (groupParent &&
        (groupParent.querySelector("legend") ||
          groupParent.querySelector("label"))) ||
      findAssociatedLabel(firstRadio)
    if (!labelEl || !isElementVisible(labelEl)) continue
    const label = getCleanLabelText(labelEl)
    if (!label) continue
    const options = radios.map((radio) =>
      getRadioOrCheckboxLabelText(radio),
    )
    rulesList.push({
      type: enums.FIELD_TYPE.RADIOGROUP,
      label,
      required: isRequiredField(firstRadio, labelEl),
      options: options.filter((option) => option),
      $radioParent: groupParent || root,
      $input: firstRadio,
      $label: labelEl,
    })
  }
  rulesList.push(...getEducationRules())
  rulesList.push(...getExperienceRules())
  dedupeLabelsUsingDataTitle(rulesList)
  return rulesList
}

export async function getFormSnapshot() {
  const snapshot = {}
  const formRules = await extractRules()
  for (const rule of formRules) {
    if (
      rule.type !== enums.FIELD_TYPE.EDUCATION &&
      rule.type !== enums.FIELD_TYPE.EMPLOYMENT
    ) {
      snapshot[rule.label] = getFieldSnapshotValue(rule)
    }
  }
  const educationRules = getEducationRules()
  if (educationRules.length > 0) {
    snapshot.education = mapSectionSnapshots(educationRules)
  }
  const experienceRules = getExperienceRules()
  if (experienceRules.length > 0) {
    snapshot.employment = mapSectionSnapshots(experienceRules)
  }
  return snapshot
}
