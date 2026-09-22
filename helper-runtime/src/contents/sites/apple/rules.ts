// @ts-nocheck
/**
 * Apple Careers form rules — field extraction, education/employment, snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as delay from "../../../utils/delay.js"

export async function getRules(retried = false) {
  const rules = []
  const eduRules = await getEduRules()
  rules.push(...eduRules)
  const expRules = await getExpRules()
  rules.push(...expRules)

  let root = document.getElementById("apply-profileInformation-form")
  if (!root) root = document.querySelector("main") || document.body
  if (root) rules.push(...extractFieldRules(root))

  if (rules.length !== 0 || retried) return rules
  await delay.delay(1500)
  return await getRules(true)
}

export async function getDisabilityModalRules() {
  const modal = document.getElementById("selfdisclosure-disabilitymodal-modal")
  if (!modal) return []

  const rules = []
  const form = modal.querySelector("#disabilityform")
  if (!form) return rules

  const nameInput = form.querySelector(
    'input[name="disabilityAckName"]:not([disabled])',
  )
  if (nameInput) {
    const nameLabel = form.querySelector('label[for="disabilityAckName"]')
    rules.push({
      type: enums.FIELD_TYPE.TEXT,
      label: "Name",
      required: true,
      $input: nameInput,
      $label: nameLabel || nameInput,
    })
  }

  const disabilityOptions = form.querySelector("#disability_options")
  if (disabilityOptions) {
    const radios = Array.from(
      disabilityOptions.querySelectorAll(
        'input[type="radio"][name="disabilityStatusCd"]',
      ),
    )
    const options = radios
      .map((radio) => {
        const label = disabilityOptions.querySelector(`label[for="${radio.id}"]`)
        return label?.textContent?.trim() || ""
      })
      .filter(Boolean)
    if (radios.length > 0) {
      rules.push({
        type: enums.FIELD_TYPE.CHECKBOX,
        label: "Disability Status",
        required: true,
        $checkboxs: radios,
        $label: disabilityOptions,
        options,
      })
    }
  }

  return rules
}

function extractFieldRules(root, seen = new Set()) {
  const rules = []
  const educationTitle = document.getElementById("parsedmodal-review-education-title")
  const employmentTitle = document.getElementById(
    "parsedmodal-review-employments-title",
  )
  const isInOtherSection = (el) =>
    !!(
      (educationTitle &&
        educationTitle.contains(el) &&
        !educationTitle.contains(root) &&
        educationTitle !== root) ||
      (employmentTitle &&
        employmentTitle.contains(el) &&
        !employmentTitle.contains(root) &&
        employmentTitle !== root)
    )

  const selects = root.querySelectorAll("select")
  selects.forEach((select) => {
    if (seen.has(select) || isInOtherSection(select)) return
    const label = getFieldLabel(select)
    if (!label) return
    rules.push({
      type: enums.FIELD_TYPE.SELECT,
      label,
      $input: select,
      $label: select.parentElement,
      required: isRequired(select),
      options: Array.from(select.options)
        .map((option) => option.text)
        .filter(
          (text) =>
            text &&
            !text.includes("Month") &&
            !text.includes("Year") &&
            !text.includes("Country/Region"),
        ),
    })
    seen.add(select)
  })

  const dropdowns = root.querySelectorAll(".form-dropdown")
  dropdowns.forEach((dropdown) => {
    if (seen.has(dropdown) || isInOtherSection(dropdown) || dropdown.querySelector("select")) {
      return
    }
    const labelEl = dropdown.querySelector(".form-dropdown-label")
    if (!labelEl) return
    const inputs = dropdown.querySelectorAll("ul li input")
    if (inputs.length === 0) return
    rules.push({
      type: enums.FIELD_TYPE.SELECT,
      label: cleanLabel(labelEl.textContent || ""),
      $input: dropdown,
      $label: labelEl,
      required: isRequired(dropdown),
      options: Array.from(inputs).map((input) => input.value),
    })
    seen.add(dropdown)
  })

  const textInputs = root.querySelectorAll(
    'input:not([type="hidden"]):not([type="radio"]):not([type="checkbox"]):not([type="file"]), textarea',
  )
  textInputs.forEach((input) => {
    if (seen.has(input) || isInOtherSection(input)) return
    let label = getFieldLabel(input)
    if (input.id === "apply-skills-typeahead-suggestion-textbox") label = "Skills"
    if (!label) return
    const isListbox = input.getAttribute("aria-haspopup") === "listbox"
    rules.push({
      type: isListbox ? enums.FIELD_TYPE.LISTBOX : enums.FIELD_TYPE.TEXT,
      label,
      $input: input,
      $label: input.parentElement,
      required: isRequired(input),
    })
    seen.add(input)
  })

  const fieldsets = root.querySelectorAll("fieldset")
  fieldsets.forEach((fieldset) => {
    if (isInOtherSection(fieldset)) return
    const radios = fieldset.querySelectorAll('input[type="radio"]')
    if (radios.length === 0) return
    const legend = fieldset.querySelector("legend")
    const label = legend ? legend.textContent?.trim() : ""
    if (!label) return
    rules.push({
      type: enums.FIELD_TYPE.CHECKBOX,
      label,
      $checkboxs: Array.from(radios),
      $label: legend,
      required: isRequired(radios[0]),
      options: Array.from(radios)
        .map((radio) => {
          const forLabel = fieldset.querySelector(`label[for="${radio.id}"]`)
          return (forLabel && forLabel.textContent?.trim()) || ""
        })
        .filter(Boolean),
    })
    radios.forEach((radio) => seen.add(radio))
  })

  return rules
}

function getFieldLabel(el) {
  const labelledBy = el.getAttribute("aria-labelledby")
  if (labelledBy) {
    const labelEl = document.getElementById(labelledBy)
    if (labelEl) return cleanLabel(labelEl.textContent || "")
  }

  if (
    el.parentElement?.classList.contains("form-textbox") ||
    el.parentElement?.classList.contains("form-dropdown")
  ) {
    const nestedLabel = el.parentElement.querySelector(
      ".form-textbox-label, .form-dropdown-label",
    )
    if (nestedLabel) return cleanLabel(nestedLabel.textContent || "")
  }

  const typeahead = el.closest(".typeahead-container")
  if (typeahead) {
    const typeaheadLabel = typeahead.querySelector(".form-textbox-label")
    if (typeaheadLabel) return cleanLabel(typeaheadLabel.textContent || "")
  }

  const placeholder = el.getAttribute("placeholder")
  if (placeholder) return cleanLabel(placeholder)

  if (el.id) {
    const escapedId = cssEscapeId(el.id)
    const forLabel = document.querySelector(`label[for="${escapedId}"]`)
    if (forLabel) return cleanLabel(forLabel.textContent || "")
  }

  return ""
}

function cssEscapeId(id) {
  return id.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
}

function cleanLabel(text) {
  return text.replace(/\(optional\)/gi, "").replace(/\*/g, "").trim()
}

function isRequired(el) {
  return !!el.hasAttribute("required") || el.getAttribute("aria-required") === "true"
}

export async function getEduRules() {
  const rules = []
  const title = document.getElementById("parsedmodal-review-education-title")
  if (!title) return rules

  const forms = title.querySelectorAll('[id^="parsedmodal-edu-form-"]')
  forms.forEach((form) => {
    const children = extractFieldRules(form)
    if (children.length > 0) {
      rules.push({
        type: enums.FIELD_TYPE.EDUCATION,
        label: "Education",
        required: true,
        children,
        options: children.map((child) => ({
          type: child.type,
          label: child.label,
          options: child.options,
        })),
      })
    }
  })
  return rules
}

export async function getExpRules() {
  const rules = []
  const title = document.getElementById("parsedmodal-review-employments-title")
  if (!title) return rules

  const group = title.querySelector(
    '[role="group"][aria-label="Edit Employment Summary"]',
  )
  if (group) {
    const fieldsets = group.querySelectorAll("fieldset")
    fieldsets.forEach((fieldset) => {
      const legend = fieldset.querySelector("legend")
      if (legend && legend.textContent?.includes("Edit Employment")) {
        const children = extractFieldRules(fieldset)
        const withDates = mergeEmploymentDateRules(children, fieldset)
        if (withDates.length > 0) {
          rules.push({
            type: enums.FIELD_TYPE.EMPLOYMENT,
            label: "Employment",
            required: true,
            children: withDates,
            options: withDates.map((child) => ({
              type: child.type,
              label: child.label,
              options: child.options,
            })),
          })
        }
      }
    })
  }
  return rules
}

function mergeEmploymentDateRules(rules, fieldset) {
  const merged = []
  const consumedIndexes = new Set()
  const indexed = rules.map((rule, index) => ({
    rule,
    index,
    element: rule.$input,
  }))

  const findByLegend = (legendText) => {
    const nestedFieldsets = Array.from(fieldset.querySelectorAll("fieldset"))
    const match = nestedFieldsets.find(
      (fs) => fs.querySelector("legend")?.textContent?.trim() === legendText,
    )
    return match ? indexed.filter((item) => match.contains(item.element)) : []
  }

  const startDateFields = findByLegend("Start Date")
  const endDateFields = findByLegend("End Date")

  if (startDateFields.length >= 2) {
    const month = startDateFields.find((item) => item.rule.label === "Month")
    const year = startDateFields.find((item) => item.rule.label === "Year")
    if (month && year) {
      merged.push({
        type: enums.FIELD_TYPE.DATE,
        label: "Start Date",
        required: month.rule.required,
        $input: month.element,
        description: "MM/YYYY",
      })
      consumedIndexes.add(month.index)
      consumedIndexes.add(year.index)
    }
  }

  if (endDateFields.length >= 2) {
    const month = endDateFields.find((item) => item.rule.label === "Month")
    const year = endDateFields.find((item) => item.rule.label === "Year")
    if (month && year) {
      merged.push({
        type: enums.FIELD_TYPE.DATE,
        label: "End Date",
        required: month.rule.required,
        $input: month.element,
        description: "MM/YYYY",
      })
      consumedIndexes.add(month.index)
      consumedIndexes.add(year.index)
    }
  }

  rules.forEach((rule, index) => {
    if (!consumedIndexes.has(index)) merged.push(rule)
  })
  return merged
}

export function getSubmitButtonText() {
  const button = document.getElementById("apply-step-continue-button")
  return (button && button.textContent?.trim()) || ""
}

function snapshotKey(label) {
  return cleanLabel(label).replace(/:\s*$/, "")
}

function getApplicationRegion() {
  return document.querySelector("main")
}

function getChoiceDisplayValue(input) {
  const labelledBy = input.getAttribute("aria-labelledby")
  if (labelledBy) {
    const labelEl = document.getElementById(labelledBy)
    const fromLabelledBy = cleanLabel(labelEl?.textContent || "")
    if (fromLabelledBy) return fromLabelledBy
  }

  if (input.id) {
    const escapedId = cssEscapeId(input.id)
    const forLabel = document.querySelector(`label[for="${escapedId}"]`)
    const fromFor = cleanLabel(forLabel?.textContent || "")
    if (fromFor) return fromFor
  }

  const ariaLabel = cleanLabel(input.getAttribute("aria-label") || "")
  return ariaLabel || input.value || ""
}

function findChoiceGroup(input) {
  return input.closest("fieldset") || input.closest('[role="group"]')
}

function getChoiceGroupLabel(group) {
  const legend = group.querySelector("legend")
  const fromLegend = snapshotKey(legend?.textContent || "")
  if (fromLegend) return fromLegend

  const labelledBy = group.getAttribute("aria-labelledby")
  if (labelledBy) {
    const labelEl = document.getElementById(labelledBy)
    const fromLabelledBy = snapshotKey(labelEl?.textContent || "")
    if (fromLabelledBy) return fromLabelledBy
  }

  return snapshotKey(group.getAttribute("aria-label") || "")
}

function captureDropdownTitles(snapshot, root) {
  const dropdowns = root.querySelectorAll(".form-dropdown")
  dropdowns.forEach((dropdown) => {
    const labelEl = dropdown.querySelector(".form-dropdown-label")
    const titleEl = dropdown.querySelector(".form-dropdown-title")
    const label = snapshotKey(labelEl?.textContent || "")
    const title = cleanLabel(titleEl?.textContent || "")
    if (label && titleEl) snapshot[label] = title
  })
}

function captureDisabilityStatus(snapshot, root) {
  const headings = Array.from(root.querySelectorAll("h1, h2, h3, h4"))
  const heading = headings.find(
    (el) => snapshotKey(el.textContent || "") === "Disability Status",
  )
  if (!heading?.parentElement) return

  const paragraphs = Array.from(heading.parentElement.querySelectorAll("p"))
  const statusParagraph = paragraphs.find((el) => {
    const text = cleanLabel(el.textContent || "")
    return !!text && !text.toLowerCase().startsWith("completed:")
  })
  const status = cleanLabel(statusParagraph?.textContent || "")
  if (status) snapshot["Disability Status"] = status
}

export function getFormSnapshot() {
  const snapshot = {}
  const root = getApplicationRegion()
  if (!root) {
    console.warn("[Apple][Snapshot] skipped: application region is missing")
    return snapshot
  }

  captureDropdownTitles(snapshot, root)
  captureDisabilityStatus(snapshot, root)

  const seenGroups = new Set()
  const controls = root.querySelectorAll("input, select, textarea")
  controls.forEach((el) => {
    const control = el
    const skipTypes = ["hidden", "submit", "file", "button", "reset", "password"]
    if (skipTypes.includes(control.type)) return

    const dropdown = control.closest(".form-dropdown")
    if (dropdown && dropdown.querySelector(".form-dropdown-title")) return

    if (control.type === "checkbox" || control.type === "radio") {
      const choice = control
      const group = findChoiceGroup(choice)
      if (group) {
        if (seenGroups.has(group)) return
        seenGroups.add(group)
        const groupLabel = getChoiceGroupLabel(group)
        if (!groupLabel) return
        const checked = Array.from(
          group.querySelectorAll('input[type="radio"], input[type="checkbox"]'),
        )
          .filter((input) => input.checked)
          .map(getChoiceDisplayValue)
          .filter(Boolean)
        snapshot[groupLabel] = checked.join(", ")
        return
      }
      if (!choice.checked) return
      const singleLabel = getFieldLabel(choice)
      if (!singleLabel) return
      snapshot[snapshotKey(singleLabel)] = getChoiceDisplayValue(choice)
      return
    }

    const label = snapshotKey(getFieldLabel(control))
    if (label) snapshot[label] = control.value || ""
  })

  return snapshot
}
