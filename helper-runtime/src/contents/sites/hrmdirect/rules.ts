// @ts-nocheck
/**
 * HRMDirect — form rule extraction and page snapshot helpers.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"

export async function extractRules() {
  const rules = []
  const sections = xpath.getOrderedNodesSafe(
    "//div[@class='section-container' and not(ancestor::div[@class='section-container'])]",
  )

  for (const section of sections) {
    const addRowButton = xpath.getFirstOrderedNodeSafe(
      './/a[@class="btn btn-block-xs btn-default add-row-button" and normalize-space(text())="Add Additional Row" and not(ancestor::div[contains(@style, "display: none")])]',
      section,
    )

    if (addRowButton) {
      let sectionType
      const text = section.textContent?.toLowerCase() || ""
      if (
        text.includes("school") ||
        text.includes("education") ||
        text.includes("major") ||
        text.includes("degree")
      ) {
        sectionType = enums.FIELD_TYPE.EDUCATION
      } else if (
        text.includes("company") ||
        text.includes("supervisor") ||
        text.includes("reason for leaving")
      ) {
        sectionType = enums.FIELD_TYPE.EMPLOYMENT
      }

      if (sectionType) {
        const sectionRules = await extractEduOrEmpRules(section, sectionType)
        rules.push(...sectionRules)
        continue
      }
    }

    const fields = xpath.getOrderedNodesSafe(
      ".//div[contains(@class, 'form-field')]",
      section,
    )
    for (const field of fields) {
      const rule = await extractFormFieldRule(field)
      if (rule) rules.push(rule)
    }
  }

  if (rules.length === 0) {
    const form = xpath.getFirstOrderedNodeSafe("//form")
    const controls = []
    controls.push(
      ...xpath.getOrderedNodesSafe(".//input | .//textarea | .//select", form),
    )

    const radiosByName = new Map()
    for (const control of controls) {
      if (control.tagName === "INPUT") {
        const input = control
        if (
          input.type === "text" ||
          input.type === "email" ||
          input.type === "tel" ||
          input.type === "number"
        ) {
          const rule = await extractFallbackTextRule(input, form)
          if (rule) rules.push(rule)
        } else if (input.type === "radio") {
          const name = input.name
          if (!radiosByName.has(name)) radiosByName.set(name, [])
          radiosByName.get(name)?.push(input)
        }
      } else if (control.tagName === "SELECT") {
        const rule = await extractFallbackSelectRule(control, form)
        if (rule) rules.push(rule)
      } else if (control.tagName === "TEXTAREA") {
        const rule = await extractFallbackTextareaRule(control, form)
        if (rule) rules.push(rule)
      }
    }

    for (const [, radios] of radiosByName) {
      if (radios.length > 0) {
        const rule = await extractFallbackRadioRule(radios, form)
        if (rule) rules.push(rule)
      }
    }
  }

  return rules
}

async function extractFallbackTextRule(input, _form) {
  let label = findAssociatedLabel(input)?.textContent?.trim() || ""
  if (label.endsWith("*")) label = label.slice(0, -1).trim()
  const required = input.getAttribute("tooltiptext") === "This field is required."
  return {
    label,
    type: enums.FIELD_TYPE.TEXT,
    required,
    $input: input,
  }
}

async function extractFallbackSelectRule(select, _form) {
  let labelEl = select
    .closest(".form-field")
    ?.querySelector('[class="control-label field-title"]')
  if (!labelEl) {
    const parent = select.parentElement
    if (parent) labelEl = parent.previousElementSibling
  }
  if (!labelEl) return null

  let label = labelEl.textContent?.trim() || ""
  if (label.endsWith("*")) label = label.slice(0, -1).trim()
  const required = labelEl.textContent?.includes("*") || false
  const options = await readSelectOptions(select)
  return {
    label,
    type: enums.FIELD_TYPE.SELECT,
    required,
    options,
    $input: select,
  }
}

async function extractFallbackTextareaRule(textarea, _form) {
  let label = ""
  const parent = textarea.parentElement
  if (parent) {
    const previous = parent.previousElementSibling
    if (previous) label = previous.textContent?.trim() || ""
  }
  if (!label) return null
  if (label.endsWith("*")) label = label.slice(0, -1).trim()
  const required =
    textarea.getAttribute("tooltiptext") === "This field is required."
  return {
    label,
    type: enums.FIELD_TYPE.TEXT,
    required,
    $input: textarea,
  }
}

async function extractFallbackRadioRule(radios, _form) {
  if (radios.length === 0) return null

  const first = radios[0]
  let label = ""
  const group = first.closest("div[class*='radio-group']")
  if (group) {
    const labelEl = group.querySelector("label:not(.btn)")
    if (labelEl) label = labelEl.textContent?.trim() || ""
  }
  if (!label) return null

  label = label.replace(/\*$/, "").trim()
  const required = radios.some((radio) => radio.required)
  const options = []
  for (const radio of radios) {
    const labelEl = radio.closest("label")
    if (labelEl) {
      const localized = labelEl.querySelector("span.l10n")
      const text = localized?.textContent?.trim()
      if (text) options.push(text)
    }
  }

  return {
    label,
    type: enums.FIELD_TYPE.RADIOGROUP,
    required,
    options: [...new Set(options)],
    $input: radios[0],
  }
}

export async function extractEduOrEmpRules(section, fieldType) {
  const rules = []
  const repeatables = xpath.getOrderedNodesSafe(
    ".//div[@class='section-repeatable']",
    section,
  )

  for (const repeatable of repeatables) {
    const children = []
    const fields = xpath.getOrderedNodesSafe(
      ".//div[contains(@class, 'form-field')]",
      repeatable,
    )
    for (const field of fields) {
      const rule = await extractFormFieldRule(field)
      if (rule) children.push(rule)
    }

    if (children.length > 0) {
      rules.push({
        label: getHrmdirectCompositeSectionLabel(fieldType),
        type: fieldType,
        required: true,
        options: children.map((child) => {
          const base = { label: child.label, type: child.type }
          return child.options &&
            Array.isArray(child.options) &&
            child.options.length > 0
            ? { ...base, options: child.options }
            : base
        }),
        $input: repeatable,
        children,
      })
    }
  }

  if (rules.length > 0) {
    console.info("[HRMDirect Rules] extracted structured section", {
      type: fieldType,
      progressLabel: getHrmdirectCompositeSectionLabel(fieldType),
      repeatableCount: rules.length,
    })
  }

  const allFields = xpath.getOrderedNodesSafe(
    ".//div[contains(@class, 'form-field')]",
    section,
  )
  const standaloneFields = allFields.filter(
    (field) => !repeatables.some((repeatable) => repeatable.contains(field)),
  )
  for (const field of standaloneFields) {
    const rule = await extractFormFieldRule(field)
    if (rule) rules.push(rule)
  }

  return rules
}

export function getHrmdirectCompositeSectionLabel(fieldType) {
  return fieldType === enums.FIELD_TYPE.EMPLOYMENT ? "Employment" : "Education"
}

export function resolveHrmdirectFieldType(field, control, isDate = false) {
  const className = String(field.className ?? "")
  if (className.includes("resume-upload")) return null
  if (className.includes("radio")) return enums.FIELD_TYPE.RADIOGROUP
  if (className.includes("checkbox")) return enums.FIELD_TYPE.CHECKBOX
  if (isDate) return enums.FIELD_TYPE.DATE
  if (className.includes("dropdown") && control.tagName === "SELECT") {
    return enums.FIELD_TYPE.SELECT
  }
  return enums.FIELD_TYPE.TEXT
}

async function extractFormFieldRule(field) {
  const control = field.querySelector("input, select, textarea")
  if (!control) return null

  let labelEl = field.querySelector(
    ".control-label.field-title, label.control-label",
  )
  if (!labelEl && control.id) {
    const form = field.closest("form.section-form") || field
    labelEl = form.querySelector(`label[for="${control.id}"]`)
  }
  if (!labelEl) labelEl = findAssociatedLabel(control)
  if (!labelEl) return null

  let label = labelEl.textContent?.trim() || ""
  label = label.replace(/\*$/, "").trim()
  const required = labelEl.textContent?.includes("*") || false
  const className = field.className
  const isDate = !!xpath.getFirstOrderedNode(
    './/input[contains(@class, "date-input")]',
    field,
  )
  const type = resolveHrmdirectFieldType(field, control, isDate)
  if (!type) return null

  if (
    className.includes("dropdown") &&
    type === enums.FIELD_TYPE.TEXT
  ) {
    console.info("[HRMDirect Rules] dynamic dropdown resolved as text", {
      label,
      tagName: control.tagName,
      connected: control.isConnected,
    })
  }

  let options = []
  if (type === enums.FIELD_TYPE.SELECT) {
    if (control.tagName === "SELECT") {
      options = await readSelectOptions(control)
      return {
        label,
        type,
        required,
        options,
        $input: control,
      }
    }
  } else if (
    type === enums.FIELD_TYPE.RADIOGROUP ||
    type === enums.FIELD_TYPE.CHECKBOX
  ) {
    const inputs = collectChoiceInputs(field)
    options = readChoiceOptionLabels(inputs)
    return {
      label,
      type,
      required,
      options,
      $input: control,
    }
  }

  return {
    label,
    type,
    required,
    $input: control,
  }
}

function readChoiceOptionLabels(inputs) {
  const options = []
  for (const input of inputs) {
    const labelEl = getParentLabel(input)
    const text = labelEl?.textContent?.trim() || input.value || ""
    if (text) options.push(text)
  }
  return options
}

function findAssociatedLabel(control, scope = control.closest("form.section-form") || control) {
  const id = control.id
  if (id) {
    const byFor = scope.querySelector(`label[for="${id}"]`)
    if (byFor) return byFor
  }

  const container = control.closest("div, fieldset, form")
  if (container) {
    const nestedLabel = container.querySelector("label")
    if (nestedLabel) return nestedLabel
    const previous = container.previousElementSibling
    if (previous?.tagName === "LABEL") return previous
  }

  let sibling = control.previousElementSibling
  while (sibling) {
    if (sibling.tagName === "LABEL") return sibling
    sibling = sibling.previousElementSibling
  }
  return null
}

function getParentLabel(input) {
  const parent = input.parentElement
  return parent?.tagName === "LABEL" ? parent : null
}

function collectChoiceInputs(field) {
  return xpath.getOrderedNodesSafe(
    './/input[@type="radio"] | .//input[@type="checkbox"]',
    field,
  )
}

async function readSelectOptions(select) {
  const options = []
  if (select.tagName === "SELECT") {
    Array.from(select.options).forEach((option) => {
      if (option.value && option.value !== "") {
        options.push(option.textContent?.trim() || option.value)
      }
    })
  }
  return options
}

function inferCompositeSectionType(section) {
  const text = section.textContent?.toLowerCase() || ""
  if (
    text.includes("school") ||
    text.includes("edu") ||
    text.includes("major") ||
    text.includes("degree")
  ) {
    return enums.FIELD_TYPE.EDUCATION
  }
  if (
    text.includes("company") ||
    text.includes("supervisor") ||
    text.includes("reason for leaving")
  ) {
    return enums.FIELD_TYPE.EMPLOYMENT
  }
  return enums.FIELD_TYPE.EDUCATION
}

export function mergeHrmdirectCurrentPageSnapshot(base, extra) {
  return { ...base, ...extra }
}

export function getHrmdirectCurrentPageForm(root = document) {
  return root.querySelector("form.section-form")
}

function listTopLevelSections() {
  const form = getHrmdirectCurrentPageForm()
  return form
    ? xpath.getOrderedNodesSafe(
        ".//div[@class='section-container' and not(ancestor::div[@class='section-container'])]",
        form,
      )
    : []
}

export function getAdditionalFormSnapshotData() {
  const snapshot = {}
  const sections = listTopLevelSections()

  for (const section of sections) {
    const addRowButton = xpath.getFirstOrderedNodeSafe(
      './/a[@class="btn btn-block-xs btn-default add-row-button" and normalize-space(text())="Add Additional Row" and not(ancestor::div[contains(@style, "display: none")])]',
      section,
    )
    if (!addRowButton) continue

    const rows = readRepeatableSnapshotRows(section)
    const key =
      inferCompositeSectionType(section) === enums.FIELD_TYPE.EDUCATION
        ? "education"
        : "employment"
    if (!snapshot[key]) snapshot[key] = []
    snapshot[key].push(...rows)
  }

  return snapshot
}

export function getFormSnapshot() {
  const snapshot = {}
  const sections = listTopLevelSections()

  if (sections.length === 0) {
    const personalInfoForm = document.querySelector("form#personal-info-form")
    if (personalInfoForm) return readPersonalInfoSnapshot(personalInfoForm)
  }

  for (const section of sections) {
    const addRowButton = xpath.getFirstOrderedNodeSafe(
      './/a[@class="btn btn-block-xs btn-default add-row-button" and normalize-space(text())="Add Additional Row" and not(ancestor::div[contains(@style, "display: none")])]',
      section,
    )
    if (addRowButton) continue

    const fields = xpath.getOrderedNodesSafe(
      ".//div[contains(@class, 'form-field')]",
      section,
    )
    for (const field of fields) {
      const entry = readFieldSnapshot(field)
      if (entry) {
        snapshot[entry.label] = serializeHrmdirectNormalSnapshotValue(
          entry.value,
        )
      }
    }
  }

  return snapshot
}

function readPersonalInfoSnapshot(form) {
  const snapshot = {}
  const groups = Array.from(form.querySelectorAll(".form-group"))

  for (const group of groups) {
    const labelEl =
      group.querySelector(".control-label") || group.querySelector(".radio-label")
    const control = group.querySelector("input, select, textarea")
    if (!labelEl || !control) continue

    const label = (labelEl.textContent || "").trim().replace(/\s*\*\s*$/, "")
    if (!label) continue

    let value = ""
    if (control.tagName === "INPUT" && control.type === "radio") {
      const checked = group.querySelector('input[type="radio"]:checked')
      value =
        (checked &&
          (checked.closest("label")?.textContent?.trim() || checked.value)) ||
        ""
    } else if (control.tagName === "SELECT") {
      value =
        control.options[control.selectedIndex]?.textContent?.trim() || ""
    } else {
      value = control.value || ""
    }

    snapshot[label] = value
  }

  return snapshot
}

export function serializeHrmdirectNormalSnapshotValue(value) {
  return Array.isArray(value) ? value.join(", ") : value
}

export function getHrmdirectCurrentPageSnapshot() {
  return mergeHrmdirectCurrentPageSnapshot(
    getFormSnapshot(),
    getAdditionalFormSnapshotData(),
  )
}

function readRepeatableSnapshotRows(section) {
  const rows = []
  const repeatables = xpath.getOrderedNodesSafe(
    ".//div[@class='section-repeatable']",
    section,
  )

  for (const repeatable of repeatables) {
    const row = {}
    const fields = xpath.getOrderedNodesSafe(
      ".//div[contains(@class, 'form-field')]",
      repeatable,
    )
    for (const field of fields) {
      const entry = readFieldSnapshot(field)
      if (entry) row[entry.label] = entry.value
    }
    rows.push(row)
  }

  return rows
}

function readFieldSnapshot(field) {
  const control = field.querySelector("input, select, textarea")
  if (!control) return null

  const form = field.closest("form.section-form") || field
  let labelEl = field.querySelector('[class="control-label field-title"]')
  if (!labelEl) labelEl = findAssociatedLabel(control, form)
  if (!labelEl) return null

  let label = labelEl.textContent?.trim() || ""
  if (label.endsWith("*")) label = label.slice(0, -1).trim()

  let value = ""
  if (control.tagName === "INPUT") {
    const input = control
    if (input.type === "checkbox") {
      const checkedLabels = []
      const name = input.name
      const checkboxes = name
        ? Array.from(
            form.querySelectorAll(`input[type="checkbox"][name="${name}"]`),
          )
        : [input]

      for (const checkbox of checkboxes) {
        if (!checkbox.checked) continue
        let optionLabel = ""
        const forLabel = form.querySelector(`label[for="${checkbox.id}"]`)
        if (forLabel) {
          optionLabel = forLabel.textContent?.trim() || ""
        } else if (checkbox.parentElement?.tagName === "LABEL") {
          optionLabel = checkbox.parentElement.textContent?.trim() || ""
        } else {
          optionLabel = checkbox.value || ""
        }
        if (optionLabel) checkedLabels.push(optionLabel)
      }
      value = checkedLabels
    } else if (input.type === "radio") {
      const checked = form.querySelector(
        `input[type="radio"][name="${input.name}"]:checked`,
      )
      if (checked) {
        const parentLabel = getParentLabel(checked)
        value = parentLabel
          ? parentLabel.textContent?.trim() || ""
          : checked.value || ""
      } else {
        value = ""
      }
    } else {
      value = input.value || ""
    }
  } else if (control.tagName === "SELECT") {
    value =
      control.options[control.selectedIndex]?.textContent?.trim() || ""
  } else if (control.tagName === "TEXTAREA") {
    value = control.value || ""
  }

  return { label, value }
}
