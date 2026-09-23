// @ts-nocheck
/**
 * Careers Page form rules extraction and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as delay from "../../../utils/delay.js"

async function extractSelectOptions(element) {
  const options = []

  if (element.tagName === "SELECT") {
    Array.from(element.options).forEach((option) => {
      if (option.value && option.value !== "") {
        options.push(option.textContent?.trim() || option.value)
      }
    })
    return options
  }

  const sibling = element.nextElementSibling
  if (sibling && sibling.tagName === "DIV") {
    const buttons = sibling.querySelectorAll("button")
    buttons.forEach((button) => {
      const div = button.querySelector("div")
      if (div) {
        const text = div.textContent?.trim()
        if (text) options.push(text)
      }
    })
  }

  return options
}

function findRadioGroupParent(radio) {
  const radiogroup = radio.closest("[role='radiogroup']")
  if (radiogroup) return radiogroup

  const formGroup = radio.closest(".form-group")
  if (formGroup) {
    const sameName = Array.from(
      formGroup.querySelectorAll("input[type='radio']"),
    ).filter((el) => el.name === radio.name)
    if (sameName.length > 0) return formGroup
  }

  const root = radio.getRootNode()
  const sameNameInRoot = Array.from(
    root.querySelectorAll("input[type='radio']"),
  ).filter((el) => el.name === radio.name)

  if (sameNameInRoot.length > 0) {
    const group = sameNameInRoot[0].closest(".form-group")
    return group || sameNameInRoot[0].parentElement || document.body
  }

  return radio.parentElement || document.body
}

function extractRadioOptions(parent) {
  const radios = parent.querySelectorAll("input[type='radio']")
  const options = []

  radios.forEach((radio) => {
    let labelText = ""
    const closestLabel = radio.closest("label")
    if (closestLabel?.textContent) {
      labelText = cleanLabelText(closestLabel.textContent)
    }

    if (!labelText) {
      const forLabel = findLabelByFor(radio)
      if (forLabel?.textContent) {
        labelText = cleanLabelText(forLabel.textContent)
      }
    }

    if (!labelText && radio.nextElementSibling) {
      const sibling = radio.nextElementSibling
      if (sibling.tagName === "LABEL" && sibling.textContent) {
        labelText = cleanLabelText(sibling.textContent)
      }
    }

    if (!labelText) {
      labelText = cleanLabelText(radio.value)
    }

    if (labelText && !options.includes(labelText)) {
      options.push(labelText)
    }
  })

  return options
}

export async function extractRules() {
  const rules = []
  const formRoot = findFormRoot()
  if (!formRoot) return rules

  await prepareEduExpSections(formRoot)

  const fields = formRoot.querySelectorAll("input, select, textarea")
  const seenCheckboxNames = new Set()
  const seenRadioNames = new Set()

  for (const field of fields) {
    if (isInsideEduExpItem(field)) continue

    if (field.tagName === "INPUT" && field.type === "radio") {
      const name = field.name
      if (name && seenRadioNames.has(name)) continue
    }

    if (field.tagName === "INPUT" && field.type === "checkbox" && field.name) {
      const name = field.name
      if (seenCheckboxNames.has(name)) continue
      seenCheckboxNames.add(name)

      const groupCheckboxes = Array.from(
        formRoot.querySelectorAll(
          `input[type="checkbox"][name="${CSS.escape(name)}"]`,
        ),
      ).filter((el) => !isInsideEduExpItem(el))

      if (groupCheckboxes.length > 1) {
        const formGroup = field.closest(".form-group")
        const groupLabel = formGroup?.querySelector(":scope > label") ?? null
        const label = groupLabel
          ? cleanLabelText(groupLabel.textContent ?? "")
          : name
        const required = isFieldRequired(field, groupLabel)
        const options = groupCheckboxes
          .map((checkbox) => {
            const labelEl = checkbox.closest("label")
            return cleanLabelText(labelEl?.textContent ?? checkbox.value ?? "")
          })
          .filter(Boolean)

        rules.push({
          label,
          type: enums.FIELD_TYPE.CHECKBOX,
          required,
          $input: groupCheckboxes[0],
          $checkboxs: groupCheckboxes,
          options,
        })
        continue
      }
    }

    const rule = await buildFieldRule(field)
    if (rule) {
      rules.push(rule)
      if (field.tagName === "INPUT" && field.type === "radio") {
        const name = field.name
        if (name) seenRadioNames.add(name)
      }
    }
  }

  await ensureEduExpSectionsPresent(formRoot)
  const educationRules = await getEducationRules()
  rules.push(...educationRules)
  const experienceRules = await getExperienceRules()
  rules.push(...experienceRules)

  return rules
}

function findFormRoot() {
  const form = document.querySelector("form")
  if (form) {
    const fields = form.querySelectorAll("input, select, textarea")
    if (fields.length > 0) return form
  }

  const shadowHosts = Array.from(document.querySelectorAll("*")).filter(
    (el) => el.shadowRoot,
  )

  for (const host of shadowHosts) {
    const shadow = host.shadowRoot
    const shadowForm = shadow.querySelector("form")
    if (shadowForm) return shadowForm

    const fields = shadow.querySelectorAll(
      "input, select, textarea, textarea",
    )
    if (fields.length > 0) return shadow
  }

  return null
}

function cleanLabelText(text) {
  return (text || "")
    .replace(/[*:\n]/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function isCoverLetterText(text) {
  return cleanLabelText(text).toLowerCase().includes("cover letter")
}

function findCoverLetterTextarea(formRoot = findFormRoot()) {
  if (!formRoot) return null

  const textareas = formRoot.querySelectorAll("textarea")
  for (const textarea of textareas) {
    const label = findFieldLabel(textarea)
    if (
      isCoverLetterText(label?.textContent) ||
      isCoverLetterText(textarea.placeholder) ||
      isCoverLetterText(textarea.getAttribute("aria-label")) ||
      isCoverLetterText(textarea.name) ||
      isCoverLetterText(textarea.id)
    ) {
      return textarea
    }
  }

  return null
}

export function getCoverLetterStatus() {
  const textarea = findCoverLetterTextarea()
  if (!textarea) return ""

  const label = findFieldLabel(textarea)
  const required =
    isFieldRequired(textarea, label) ||
    textarea.required ||
    textarea.getAttribute("aria-required") === "true"

  return required ? "required" : "optional"
}

function isSalaryFieldLabel(label) {
  return label === "salary desired" || label === "salary expectations"
}

const YEARS_EXPERIENCE_LABEL =
  "How many years' experiences do you have in software sales?"
const YEARS_EXPERIENCE_DESCRIPTION =
  "Please return the years of experience in software sales as a number (digits only)."

async function buildFieldRule(element) {
  let fieldType
  let description

  const labelEl = findFieldLabel(element)
  const placeholder =
    element.placeholder || element.getAttribute("placeholder")
  const label = labelEl
    ? cleanLabelText(labelEl.textContent || "")
    : cleanLabelText(placeholder)

  if (!label) return null

  const labelLower = label.toLowerCase()
  if (labelLower === "resume") return null

  const isSalary = isSalaryFieldLabel(labelLower)
  if (isSalary && element.tagName === "SELECT") return null

  const required = isFieldRequired(element, labelEl)
  let inputEl = null

  if (element.tagName === "INPUT") {
    const input = element
    if (input.type === "file") return null

    fieldType =
      input.type === "checkbox"
        ? enums.FIELD_TYPE.CHECKBOX
        : input.type === "radio"
          ? enums.FIELD_TYPE.RADIOGROUP
          : input.classList.contains("datetimefield")
            ? enums.FIELD_TYPE.DATE
            : enums.FIELD_TYPE.TEXT
    inputEl = input
  } else if (element.tagName === "SELECT") {
    fieldType = enums.FIELD_TYPE.SELECT
    inputEl = element
  } else {
    if (element.tagName !== "TEXTAREA") return null
    fieldType = enums.FIELD_TYPE.TEXT
    inputEl = element
  }

  let options = []
  if (fieldType === enums.FIELD_TYPE.SELECT) {
    options = await extractSelectOptions(inputEl)
  }

  let radioParent = null
  if (fieldType === enums.FIELD_TYPE.RADIOGROUP) {
    radioParent = findRadioGroupParent(element)
    options = extractRadioOptions(radioParent)
    const radioCount = radioParent.querySelectorAll("input[type='radio']")
      .length
    const debugInfo = {
      name: element.name || "(missing)",
      groupTag: radioParent.tagName,
      radioCount,
      optionCount: options.length,
    }
    if (options.length === 0) {
      console.warn("[CareersPage][rules] Radio 选项提取失败", debugInfo)
    } else {
      console.debug("[CareersPage][rules] Radio 选项提取完成", debugInfo)
    }
  }

  if (fieldType === enums.FIELD_TYPE.DATE) {
    description = "MM/DD/YYYY"
  }

  if (labelLower === cleanLabelText(YEARS_EXPERIENCE_LABEL).toLowerCase()) {
    description = YEARS_EXPERIENCE_DESCRIPTION
  }

  if (isSalary && fieldType === enums.FIELD_TYPE.TEXT) {
    description =
      "Return a numeric value only (digits, optional decimal). Currency is US Dollar and period is Monthly; do not include symbols or units."
  }

  const rule = {
    label,
    type: fieldType,
    required,
    $input: inputEl,
  }

  if (
    fieldType !== enums.FIELD_TYPE.TEXT &&
    fieldType !== enums.FIELD_TYPE.DATE
  ) {
    rule.options = options
  }

  if (description) {
    rule.description = description
  }

  if (fieldType === enums.FIELD_TYPE.RADIOGROUP && radioParent) {
    rule.$label = labelEl
    rule.$radioParent = radioParent
  }

  return rule
}

function isInsideEduExpItem(element) {
  return !!element.closest(".education-experience-item")
}

export function detectEduExpType(formGroup) {
  const sectionLabel =
    formGroup.querySelector(":scope > label")?.textContent?.toLowerCase() || ""
  const buttonTexts = Array.from(formGroup.querySelectorAll("button")).map(
    (button) => button.textContent?.trim().toLowerCase() || "",
  )

  if (
    buttonTexts.some(
      (text) => text.includes("add") && text.includes("education"),
    )
  ) {
    return "education"
  }

  if (
    buttonTexts.some(
      (text) => text.includes("add") && text.includes("experience"),
    )
  ) {
    return "experience"
  }

  const item = formGroup.querySelector(".education-experience-item")
  if (item) {
    if (
      item.querySelector(
        'input[name="school"], .education_started_at, .education_ended_at',
      )
    ) {
      return "education"
    }
    if (
      item.querySelector(
        'input[name="title"], input[name="employer"], input[name="is_current_employer"], .experience_started_at, .experience_ended_at',
      )
    ) {
      return "experience"
    }

    const itemText = cleanLabelText(item.textContent).toLowerCase()
    if (/\b(school|degree)\b/.test(itemText)) return "education"
    if (/\b(employer|position name)\b/.test(itemText)) return "experience"
  }

  if (sectionLabel.includes("education")) return "education"
  if (sectionLabel.includes("experience")) return "experience"
  return null
}

function findDeleteButton(item) {
  const buttons = Array.from(item.querySelectorAll("button"))
  return (
    buttons.find((button) => {
      const text = button.textContent?.trim().toLowerCase() || ""
      return (
        !!(
          text.includes("delete") ||
          text.includes("remove") ||
          button.className.toLowerCase().includes("btn-danger")
        ) || !!button.querySelector("i.fa-trash-alt, i.fas.fa-trash-alt")
      )
    }) || null
  )
}

function findEditButton(item) {
  const buttons = Array.from(item.querySelectorAll("button"))
  return (
    buttons.find((button) => {
      const text = button.textContent?.trim().toLowerCase() || ""
      return (
        !!(text === "edit" || text.includes("edit")) ||
        !!button.querySelector("i.fa-edit, i.far.fa-edit")
      )
    }) || null
  )
}

function findAddButton(formGroup, sectionType) {
  return (
    Array.from(formGroup.querySelectorAll("button")).find((button) => {
      const text = button.textContent?.trim().toLowerCase() || ""
      return text.includes("add") && text.includes(sectionType)
    }) || null
  )
}

function sectionHasEditableFields(item) {
  return !!item.querySelector("input, select, textarea")
}

export async function clearEduExpSectionFields(item) {
  const fields = item.querySelectorAll("input, select, textarea")

  for (const field of fields) {
    if (field instanceof HTMLInputElement) {
      if (field.type === "checkbox" || field.type === "radio") {
        if (field.checked) {
          field.checked = false
          field.dispatchEvent(new Event("change", { bubbles: true }))
        }
        continue
      }
      if (field.type === "file") continue

      field.value = ""
      field.dispatchEvent(new Event("input", { bubbles: true }))
      field.dispatchEvent(new Event("change", { bubbles: true }))
      continue
    }

    if (field instanceof HTMLSelectElement) {
      field.selectedIndex = 0
      field.dispatchEvent(new Event("change", { bubbles: true }))
      continue
    }

    field.value = ""
    field.dispatchEvent(new Event("input", { bubbles: true }))
    field.dispatchEvent(new Event("change", { bubbles: true }))
  }
}

async function prepareEduExpSections(formRoot) {
  const formGroups = formRoot.querySelectorAll(".form-group")

  for (const formGroup of formGroups) {
    const sectionType = detectEduExpType(formGroup)
    if (!sectionType) continue

    let items = Array.from(
      formGroup.querySelectorAll(".education-experience-item"),
    )
    if (items.length === 0) continue

    for (let i = items.length - 1; i >= 1; i--) {
      const deleteButton = findDeleteButton(items[i])
      if (deleteButton) {
        deleteButton.click()
        await delay.delay(250)
      }
    }

    items = Array.from(
      formGroup.querySelectorAll(".education-experience-item"),
    )
    let firstItem = items[0]
    if (!firstItem) continue

    if (!sectionHasEditableFields(firstItem)) {
      const editButton = findEditButton(firstItem)
      if (editButton) {
        editButton.click()
        await delay.delay(400)
      }
    }

    items = Array.from(
      formGroup.querySelectorAll(".education-experience-item"),
    )
    firstItem = items[0]
    if (!firstItem) continue

    if (!sectionHasEditableFields(firstItem)) {
      const addButton = findAddButton(formGroup, sectionType)
      if (addButton) {
        addButton.click()
        await delay.delay(500)
      }

      items = Array.from(
        formGroup.querySelectorAll(".education-experience-item"),
      )
      const editable = items.find((item) => sectionHasEditableFields(item))
      if (editable) await clearEduExpSectionFields(editable)
      continue
    }

    await clearEduExpSectionFields(firstItem)
  }
}

async function ensureSectionItemPresent(formGroup, sectionType) {
  if (formGroup.querySelector(".education-experience-item")) return

  const addButton = Array.from(formGroup.querySelectorAll("button")).find(
    (button) => {
      const text = button.textContent?.trim().toLowerCase() || ""
      return text.includes("add") && text.includes(sectionType)
    },
  )

  if (addButton) {
    addButton.click()
    await delay.delay(500)
  }
}

async function ensureEduExpSectionsPresent(formRoot) {
  const formGroups = formRoot.querySelectorAll(".form-group")
  for (const formGroup of formGroups) {
    if (detectEduExpType(formGroup) === "experience") {
      await ensureSectionItemPresent(formGroup, "experience")
    }
  }
  for (const formGroup of formGroups) {
    if (detectEduExpType(formGroup) === "education") {
      await ensureSectionItemPresent(formGroup, "education")
    }
  }
}

async function extractSectionFieldRules(item, options = {}) {
  const rules = []
  const fields = item.querySelectorAll("input, select, textarea")

  for (const field of fields) {
    const frequencyFallback = options.enableExperienceFrequencyFallback
      ? getExperienceFrequencyFallbackLabel(field)
      : null

    let rule = await buildFieldRule(field)
    if (!rule && options.enableExperienceFrequencyFallback) {
      rule = await buildExperienceFrequencyFallbackRule(field)
    }
    if (!rule) continue

    const placeholder =
      field.placeholder || field.getAttribute("placeholder")
    const placeholderLabel = cleanLabelText(placeholder)

    if (placeholderLabel) {
      rule.label = placeholderLabel
    } else if (
      frequencyFallback &&
      rule.type === enums.FIELD_TYPE.SELECT
    ) {
      rule.label = frequencyFallback
    }

    rules.push(rule)
  }

  return rules
}

function getExperienceFrequencyFallbackLabel(element) {
  if (element.tagName !== "SELECT") return null

  const select = element
  const firstOption = select.options[0]
  if (!firstOption) return null

  const text = cleanLabelText(firstOption.textContent || "")
  if (text.toLowerCase() !== "select frequency" || firstOption.value !== "") {
    return null
  }
  return text
}

async function buildExperienceFrequencyFallbackRule(element) {
  if (element.tagName !== "SELECT") return null

  const select = element
  const label = getExperienceFrequencyFallbackLabel(select)
  if (!label) return null

  const required = isFieldRequired(select, findFieldLabel(select))
  const options = await extractSelectOptions(select)

  return {
    label,
    type: enums.FIELD_TYPE.SELECT,
    required,
    $input: select,
    options,
  }
}

function collectEduExpItems(sectionType) {
  const items = []
  const formGroups = document.querySelectorAll(".form-group")

  for (const formGroup of formGroups) {
    if (detectEduExpType(formGroup) === sectionType) {
      const sectionItems = formGroup.querySelectorAll(
        ".education-experience-item",
      )
      sectionItems.forEach((item) => items.push(item))
    }
  }

  return items
}

export async function getEducationRules() {
  const rules = []
  const items = collectEduExpItems("education")

  for (const item of items) {
    const formGroup = item.closest(".form-group")
    const sectionLabel = formGroup?.querySelector(":scope > label")
    const required = isFieldRequired(item, sectionLabel)
    const children = await extractSectionFieldRules(item)
    const options = children.map((child) => ({
      label: child.label,
      type: child.type,
      ...(child.options ? { options: child.options } : {}),
    }))

    rules.push({
      label: "Education",
      type: enums.FIELD_TYPE.EDUCATION,
      required,
      children,
      options,
    })
  }

  return rules
}

export async function getExperienceRules() {
  const rules = []
  const items = collectEduExpItems("experience")

  for (const item of items) {
    const formGroup = item.closest(".form-group")
    const sectionLabel = formGroup?.querySelector(":scope > label")
    const required = isFieldRequired(item, sectionLabel)
    const children = await extractSectionFieldRules(item, {
      enableExperienceFrequencyFallback: true,
    })
    const options = children.map((child) => ({
      label: child.label,
      type: child.type,
      ...(child.options ? { options: child.options } : {}),
    }))

    rules.push({
      label: "Experience",
      type: enums.FIELD_TYPE.EMPLOYMENT,
      required,
      children,
      options,
    })
  }

  return rules
}

function isFieldRequired(element, labelEl) {
  if (labelEl) {
    const spans = labelEl.querySelectorAll("span")
    for (const span of spans) {
      if (span.textContent?.trim() === "*") return true
    }
  }

  return !!(
    element.hasAttribute("required") ||
    labelEl?.textContent?.toLowerCase().includes("required")
  )
}

function findLabelByFor(element) {
  const id = element.id
  if (!id) return null

  const root = element.getRootNode()
  if ("querySelector" in root) {
    const label = root.querySelector(`label[for="${id}"]`)
    if (label) return label
  }

  return document.querySelector(`label[for="${id}"]`) || null
}

function findFieldLabel(element) {
  const forLabel = findLabelByFor(element)
  if (forLabel) return forLabel

  let sibling = element.previousElementSibling
  while (sibling) {
    if (sibling.tagName === "LABEL") return sibling
    sibling = sibling.previousElementSibling
  }

  if (element.tagName === "INPUT" && element.type === "checkbox") {
    let next = element.nextElementSibling
    while (next) {
      if (
        (next.tagName === "SPAN" || next.tagName === "LABEL") &&
        next.textContent?.trim()
      ) {
        return next
      }
      next = next.nextElementSibling
    }

    const parent = element.parentElement
    if (parent && parent.textContent?.trim()) return parent
  }

  const formGroup = element.closest(".form-group")
  if (formGroup) {
    const col = element.closest("[class*='col-']")
    if (col) {
      const colLabel = col.querySelector("label")
      if (colLabel) return colLabel
    }

    const groupLabel = formGroup.querySelector("label")
    if (groupLabel) return groupLabel
  }

  let parent = element.parentElement
  while (parent) {
    let prev = parent.previousElementSibling
    while (prev) {
      const label = prev.querySelector("label")
      if (label?.textContent?.trim()) return label
      prev = prev.previousElementSibling
    }
    parent = parent.parentElement
  }

  return null
}

export async function getFormSnapshot() {
  const snapshot = {}
  const formRoot = findFormRoot() ?? document
  const fields = formRoot.querySelectorAll("input, select, textarea")

  for (const field of fields) {
    const labelEl = findFieldLabel(field)
    const placeholder =
      field.placeholder || field.getAttribute("placeholder")
    const label = labelEl
      ? cleanLabelText(labelEl.textContent || "")
      : cleanLabelText(placeholder)

    if (!label) continue

    const labelLower = label.toLowerCase()
    let value = ""

    if (field.tagName === "INPUT") {
      const input = field
      if (input.type === "checkbox") {
        value = input.checked ? "Yes" : "No"
      } else if (input.type === "radio") {
        const checked = document.querySelector(
          `input[type="radio"][name="${input.name}"]:checked`,
        )
        value = checked?.value || ""
      } else {
        value = input.value || ""
      }
    } else if (field.tagName === "SELECT") {
      const select = field
      value =
        select.options[select.selectedIndex]?.textContent?.trim() || ""
    } else if (field.tagName === "TEXTAREA") {
      value = field.value || ""
    }

    if (isSalaryFieldLabel(labelLower)) {
      const fieldId = field.id || ""
      const baseLabel = label

      if (fieldId === "expected_currency") {
        snapshot[`${baseLabel} Currency`] = value
      } else if (fieldId === "expected_frequency") {
        snapshot[`${baseLabel} Frequency`] = value
      } else if (field.tagName === "INPUT") {
        const input = field
        const skipTypes = new Set(["checkbox", "radio", "file", "hidden"])
        if (skipTypes.has(input.type)) {
          snapshot[label] = value
        } else {
          snapshot[`${baseLabel} Amount`] = value
        }
      } else {
        snapshot[label] = value
      }
      continue
    }

    snapshot[label] = value
  }

  return snapshot
}

function cleanSnapshotKey(text) {
  return cleanLabelText((text || "").replace(/:\s*$/, ""))
}

function snapshotFromDisplayRows(item) {
  const snapshot = {}
  const rows = item.querySelectorAll(".row")

  for (const row of rows) {
    const cols = row.querySelectorAll(":scope > div")
    if (cols.length < 2) continue

    const keyEl = cols[0].querySelector("h6")
    const valueEl = cols[1].querySelector("h6")
    if (!keyEl || !valueEl) continue

    const keyText = keyEl.textContent || ""
    if (!keyText.includes(":")) continue

    const key = cleanSnapshotKey(keyText)
    const value = (valueEl.textContent || "").trim()
    if (!key || !value || Object.prototype.hasOwnProperty.call(snapshot, key)) {
      continue
    }
    snapshot[key] = value
  }

  return snapshot
}

function snapshotFromEditableFields(item) {
  const snapshot = {}
  const fields = item.querySelectorAll("input, select, textarea")

  for (const field of fields) {
    let label = ""
    const placeholder =
      field.placeholder || field.getAttribute("placeholder")
    const name = field.getAttribute("name")

    if (placeholder) {
      label = cleanLabelText(placeholder)
    } else if (name) {
      label = cleanLabelText(name.replace(/_/g, " "))
    }

    if (!label) continue

    let value = ""
    if (field instanceof HTMLInputElement) {
      if (field.type === "checkbox") {
        value = field.checked ? "Yes" : "No"
      } else if (field.type === "radio") {
        if (!field.checked) continue
        value = field.value || "Yes"
      } else {
        value = field.value || ""
      }
    } else if (field instanceof HTMLSelectElement) {
      value =
        field.options[field.selectedIndex]?.textContent?.trim() || ""
    } else {
      value = field.value || ""
    }

    snapshot[label] = value
  }

  return snapshot
}

function collectSectionItems(sectionType) {
  const formGroups = document.querySelectorAll(".form-group")
  const items = []

  for (const formGroup of formGroups) {
    if (detectEduExpType(formGroup) === sectionType) {
      formGroup
        .querySelectorAll(".education-experience-item")
        .forEach((item) => {
          items.push(item)
        })
    }
  }

  return items
}

function getSectionSnapshots(sectionType) {
  const items = collectSectionItems(sectionType)
  const snapshots = []

  for (const item of items) {
    const snapshot = sectionHasEditableFields(item)
      ? snapshotFromEditableFields(item)
      : snapshotFromDisplayRows(item)

    if (Object.keys(snapshot).length > 0) {
      snapshots.push(snapshot)
    }
  }

  return snapshots
}

export function getEducationSnapshot() {
  return getSectionSnapshots("education")
}

export function getEmploymentSnapshot() {
  return getSectionSnapshots("experience")
}

export function getEduAndEmploymentSnapshot() {
  const education = getEducationSnapshot()
  const employment = getEmploymentSnapshot()

  if (education.length === 0 && employment.length === 0) return null
  return { education, employment }
}
