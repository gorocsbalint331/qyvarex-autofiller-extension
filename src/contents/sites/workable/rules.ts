// @ts-nocheck
/**
 * Workable form rule extraction — sections, phone country, education/experience.
 */

import * as phoneCountryCode from "./phone-country-code.ts"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"

async function getRules() {
  const sections = Array.from(
    document.querySelectorAll(
      "section[data-ui='section']>[data-ui='section-fields']",
    ),
  ).flatMap((section) =>
    Array.from(section?.children).filter((child) => child instanceof HTMLElement),
  )
  const rules = []
  for (const section of sections) {
    if ("education" === section.dataset.ui) {
      const education = await extractEducationRules(section)
      if (education) rules.push(...education)
      continue
    }
    if ("experience" === section.dataset.ui) {
      const experience = await extractExperienceRules(section)
      if (experience) rules.push(...experience)
      continue
    }
    const field = await extractField(section)
    if (field) rules.push(...expandWorkablePhoneRule(field))
  }
  return rules
}

async function getEduRules() {
  const sections = Array.from(
    document.querySelectorAll(
      "section[data-ui='section']>[data-ui='section-fields']",
    ),
  ).flatMap((section) =>
    Array.from(section?.children).filter((child) => child instanceof HTMLElement),
  )
  const rules = []
  for (const section of sections) {
    if ("education" === section.dataset.ui) {
      const education = await extractEducationRules(section)
      if (education) rules.push(...education)
    }
  }
  return rules
}

async function getExpRules() {
  const sections = Array.from(
    document.querySelectorAll(
      "section[data-ui='section']>[data-ui='section-fields']",
    ),
  ).flatMap((section) =>
    Array.from(section?.children).filter((child) => child instanceof HTMLElement),
  )
  const rules = []
  for (const section of sections) {
    if ("experience" === section.dataset.ui) {
      const experience = await extractExperienceRules(section)
      if (experience) rules.push(...experience)
    }
  }
  return rules
}

async function extractEducationRules(section) {
  if ("education" !== section.dataset.ui) return null
  const editors = Array.from(
    section.querySelectorAll("ul>li [data-ui='editor']"),
  ).filter((node) => node instanceof HTMLElement)
  if (!editors?.length) return null

  const rules = []
  for (const editor of editors) {
    const children = Array.from(editor.children).filter(
      (node) => node instanceof HTMLElement,
    )
    const fields = []
    for (const child of children) {
      const field = await extractField(child)
      if (field) fields.push(field)
    }
    if (fields.length) {
      rules.push({
        type: enums.FIELD_TYPE.EDUCATION,
        label: "education",
        children: fields,
        options: [
          ...fields.map((field) => ({
            type: field.type,
            label: field.label,
            options: field.options || [],
          })),
        ],
        $input: editor,
        $label: editor,
        required: false,
      })
    }
  }
  return rules
}

async function extractExperienceRules(section) {
  if ("experience" !== section.dataset.ui) return null
  const editors = Array.from(
    section.querySelectorAll("ul>li [data-ui='editor']"),
  ).filter((node) => node instanceof HTMLElement)
  if (!editors?.length) return null

  const rules = []
  for (const editor of editors) {
    const children = Array.from(editor.children).filter(
      (node) => node instanceof HTMLElement,
    )
    const fields = []
    for (const child of children) {
      const field = await extractField(child)
      if (field) fields.push(field)
    }
    const current = extractCurrentJobCheckbox(editor)
    if (current) fields.push(current)
    if (fields.length) {
      rules.push({
        type: enums.FIELD_TYPE.EMPLOYMENT,
        label: "experience",
        children: fields,
        options: [
          ...fields.map((field) => ({
            type: field.type,
            label: field.label,
            options: field.options || [],
          })),
        ],
        $input: editor,
        $label: editor,
        required: false,
      })
    }
  }
  return rules
}

async function extractField(element) {
  return element instanceof HTMLElement &&
    ("absolute" !== element.style.position ||
      "1px" !== element.style.width ||
      "hidden" !== element.style.overflow)
    ? extractCheckbox(element) ||
        extractSingleCheckbox(element) ||
        (await extractSelect(element)) ||
        extractTextField(element)
    : null
}

function cleanLabelText(value) {
  return (value || "")
    .replace(/\s+/g, " ")
    .replace(/^\*\s*/, "")
    .trim()
}

function getAriaLabelledByText(element) {
  const ids = element?.getAttribute?.("aria-labelledby")
  return ids
    ? ids
        .split(/\s+/)
        .map((id) => document.getElementById(id)?.textContent || "")
        .join(" ")
        .replace(/\s+/g, " ")
        .trim()
    : ""
}

function getCheckboxAriaLabel(input) {
  const direct = getAriaLabelledByText(input)
  if (direct) return direct
  const parent =
    "function" == typeof input.closest
      ? input.closest("[role='checkbox'], [role='radio']")
      : null
  return getAriaLabelledByText(parent)
}

function extractSingleCheckbox(element) {
  const checkboxes = Array.from(
    element.querySelectorAll("input[type='checkbox']"),
  )
  if (1 !== checkboxes.length) return null
  const input = checkboxes[0]
  if (
    input.closest(
      "fieldset, [role='group'], [role='radiogroup'], [data-ui='experience']",
    )
  ) {
    return null
  }
  const labelNode =
    input.closest("label") || element.querySelector("label") || element
  const label = [
    input.getAttribute("aria-label"),
    getCheckboxAriaLabel(input),
    input.labels?.[0]?.textContent ?? "",
    labelNode.textContent,
    element.textContent,
  ]
    .map(cleanLabelText)
    .find(Boolean)
  return label
    ? {
        type: enums.FIELD_TYPE.CHECKBOX,
        label,
        required:
          input.required ||
          "true" === input.getAttribute("aria-required") ||
          /^\s*\*/.test(labelNode.textContent || element.textContent || ""),
        $checkboxs: checkboxes,
        $input: input,
        options: [label],
        $label: labelNode,
      }
    : null
}

function extractCurrentJobCheckbox(root) {
  const checkbox = xpath.getFirstOrderedNode(
    "//div[@role='checkbox' and @aria-labelledby='checkbox_label_current']",
    root,
  )
  if (checkbox) {
    const label = xpath.getFirstOrderedNode("following-sibling::span", checkbox)
    if (!label) return null
    const inputs = Array.from(
      checkbox.querySelectorAll("input[type='checkbox']"),
    )
    return {
      type: enums.FIELD_TYPE.CHECKBOX,
      label: label.textContent?.trim(),
      required: true,
      $checkboxs: inputs,
      $input: inputs[0],
      options: [label.textContent?.trim() || ""],
      $label: label,
    }
  }
}

function isDescendantOf(node, ancestor) {
  let parent = node.parentElement
  while (parent) {
    if (parent === ancestor) return true
    parent = parent.parentElement
  }
  return false
}

function findByIdInRoot(root, id) {
  return Array.from(root.querySelectorAll("[id]")).find((node) => node.id === id) || null
}

function getGroupLabelFromAria(group, root) {
  return (group.getAttribute("aria-labelledby") || "")
    .split(/\s+/)
    .map((id) => findByIdInRoot(root, id))
    .filter((node) => !!node && !isDescendantOf(node, group))
    .map((node) => node.innerText || node.textContent || "")
    .join(" ")
}

function getRadioOptionLabel(option) {
  const labelNode = option.querySelector("[data-radioLabel], span[id]")
  return (
    labelNode?.innerText ||
    labelNode?.textContent ||
    option.innerText ||
    option.textContent ||
    ""
  )
    .replace(/\s+/g, " ")
    .trim()
}

function getCheckboxOptionLabel(input) {
  const labelNode = input.closest("label")?.querySelector("span[id]")
  return (labelNode?.innerText || labelNode?.textContent || "")
    .replace(/\s+/g, " ")
    .trim()
}

function extractCheckbox(element) {
  const group = element.querySelector(
    "fieldset[role='radiogroup'], div[role='radiogroup'], [role='group']",
  )
  if (!group) return null

  const label = (
    getGroupLabelFromAria(group, element) ||
    Array.from(element.querySelectorAll("span[id]")).find(
      (node) => !isDescendantOf(node, group),
    )?.textContent ||
    ""
  )
    .replace(/\s+/g, " ")
    .replace(/^\*\s*/, "")
    .trim()
  if (!label) return null

  const options = []
  const inputs = []
  const optionNodes = Array.from(
    group.querySelectorAll(
      "[role='radio'], [role='checkbox'], [data-ui='option']",
    ),
  )
  for (const option of optionNodes) {
    const input = option.querySelector(
      "input[type='radio'], input[type='checkbox']",
    )
    const optionLabel =
      "checkbox" === option.getAttribute("role") && input
        ? getCheckboxOptionLabel(input)
        : getRadioOptionLabel(option)
    if (input && optionLabel) {
      options.push(optionLabel)
      inputs.push(input)
    }
  }
  if (!inputs.length) return null

  const required =
    inputs.some(
      (input) =>
        input.required || "true" === input.getAttribute("aria-required"),
    ) ||
    "true" === group.getAttribute("aria-required") ||
    /(^|\s)\*/.test(element.innerText || element.textContent || "")

  return {
    type: enums.FIELD_TYPE.CHECKBOX,
    label,
    required,
    $checkboxs: inputs,
    options,
    $input: inputs[0],
    $label: group,
  }
}

async function extractSelect(element) {
  const wrapper = element.querySelector("div")
  if (!wrapper) return null
  const labelSpan = wrapper.querySelector("span")
  if (!labelSpan) return null

  const idSpan = labelSpan.querySelector("span[id]")
  let label = idSpan?.textContent?.trim() || labelSpan?.textContent?.trim()
  if (!label || "Country" === label) return null

  let required = labelSpan?.textContent?.trim()?.startsWith("*") || false
  if (required) label = label.replace("*", "").trim()

  const select = wrapper.querySelector('div[data-input-type="select"]')
  if (!select) return null
  const input = select.querySelector('input[type="text"]')
  if (!input) return null

  input.click()
  await delay.delay(400)

  const dialogText = select.innerText.trim()
  const options = dialogText.split("\n").filter((line) => "" !== line)
  document.dispatchEvent(
    new MouseEvent("mouseup", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
  if (!options.length) return null

  const inputs = Array.from(wrapper.querySelectorAll("input"))
  if (!inputs?.length) return null
  const lastInput = inputs[inputs.length - 1]
  return lastInput
    ? {
        type: enums.FIELD_TYPE.SELECT,
        label,
        required,
        options,
        $input: lastInput,
        $label: wrapper,
      }
    : null
}

function getWorkableSalaryFieldType(label) {
  const text = (label || "").toLowerCase()
  return /\b(salary|compensation|pay)\b/.test(text)
    ? /\b(range|minimum and maximum|min and max)\b/.test(text)
      ? enums.FIELD_TYPE.TEXT
      : enums.FIELD_TYPE.NUMBER
    : enums.FIELD_TYPE.TEXT
}

function isWorkablePhoneInput(input) {
  if (!input) return false
  if ("tel" === (input.type || "").toLowerCase()) return true
  const name = (input.name || "").toLowerCase()
  const id = (input.id || "").toLowerCase()
  return !!(
    name.includes("phone") ||
    id.includes("phone") ||
    ("function" == typeof input.closest && input.closest(".iti"))
  )
}

function expandWorkablePhoneRule(rule) {
  if (rule.type !== enums.FIELD_TYPE.TEXT || !isWorkablePhoneInput(rule.$input)) {
    return [rule]
  }
  const container = phoneCountryCode.getWorkablePhoneCountryContainer(rule.$input)
  const flag = container?.querySelector(
    "button.iti__selected-country, .iti__selected-flag[role='combobox']",
  )
  if (!container || !flag) return [rule]

  const options = phoneCountryCode.getWorkablePhoneCountryOptions(container)
  if (!options.length) return [rule]

  const phoneRule = {
    ...rule,
    description: phoneCountryCode.WORKABLE_PHONE_WITH_COUNTRY_CODE_DESCRIPTION,
  }
  return [
    phoneRule,
    {
      type: enums.FIELD_TYPE.SELECT,
      label: phoneCountryCode.WORKABLE_PHONE_COUNTRY_CODE_LABEL,
      required: rule.required,
      options: options.map(phoneCountryCode.formatWorkablePhoneCountryOption),
      $input: rule.$input,
      $label: flag,
    },
  ]
}

function getWorkableLabelMeta(labelElement) {
  if (!labelElement) {
    return {
      labelText: null,
      required: false,
    }
  }
  const span = labelElement.querySelector("span")
  if (!span) {
    return {
      labelText: null,
      required: false,
    }
  }
  const idSpan = span.querySelector("span[id]")
  let labelText = idSpan?.textContent?.trim() || span?.textContent?.trim() || null
  if (!labelText) {
    return {
      labelText: null,
      required: false,
    }
  }
  let required = span.textContent?.trim()?.startsWith("*") || false
  if (required) labelText = labelText.replace("*", "").trim()
  return {
    labelText: (labelText = labelText.replace(/\s+/g, " ").trim()),
    required,
  }
}

function getWorkableCoverLetterStatus(root) {
  const textarea = root.querySelector(
    'textarea[data-ui="cover_letter"], textarea#cover_letter',
  )
  if (!textarea) return ""
  const { required } = getWorkableLabelMeta(textarea.closest("label"))
  return required ? "required" : "optional"
}

function extractTextField(element) {
  const label = element.querySelector("div>label")
  if (!label) return null
  const { labelText, required } = getWorkableLabelMeta(label)
  if (!labelText) return null

  if ("Date" === labelText) {
    const idSpan = label.querySelector("span span[id]")
    if (idSpan) {
      const sectionTitle = xpath.getFirstOrderedNode(
        'ancestor::section[@data-ui="section"]//h2',
        idSpan,
      )
      if (sectionTitle && sectionTitle.textContent?.trim() === "Details") {
        return null
      }
    }
  }

  const input = element.querySelector("input, textarea")
  return input
    ? {
        type: getWorkableSalaryFieldType(labelText),
        label: labelText,
        required,
        $input: input,
        $label: label,
      }
    : null
}

function getTypingSteps(value) {
  const text = value ?? ""
  const steps = []
  for (let index = 0; index < text.length; index++) {
    steps.push({
      char: text[index],
      valueSoFar: text.slice(0, index + 1),
    })
  }
  return steps
}

function getSubmitButtonText() {
  return "Submit application"
}

function getWorkableSubmitButtonSelector() {
  return `.//*[@data-ui="apply-button"] | .//button[contains(., "${getSubmitButtonText()}")]`
}

function getEducationRules() {
  const root = document.querySelector("div[data-ui='education']")
  if (!root) return []
  const items = Array.from(root.querySelectorAll("ul > li"))
  const rules = []
  items.forEach((item) => {
    const children = []
    const definitions = item.querySelectorAll("dl")
    if (
      (definitions.forEach((dl) => {
        const dt = dl.querySelector("dt")
        const dd = dl.querySelector("dd")
        if (dt && dd) {
          const label = dt.innerText.replace(":", "").trim()
          children.push({
            type: enums.FIELD_TYPE.TEXT,
            label,
            $label: dt,
            $input: dd,
            required: false,
          })
        }
      }),
      0 === children.length)
    ) {
      const editors = item.querySelectorAll(
        "[data-ui='editor'] .styles--36XiB, .field-wrapper",
      )
      editors.forEach((editor) => {
        const label = editor.querySelector("label")
        const input = editor.querySelector("input, textarea, select")
        if (label && input) {
          children.push({
            type: enums.FIELD_TYPE.TEXT,
            label: label.innerText.replace(":", "").trim(),
            $label: label,
            $input: input,
            required: false,
          })
        }
      })
    }
    if (children.length > 0) {
      rules.push({
        type: enums.FIELD_TYPE.EDUCATION,
        label: "education",
        children,
        $input: item,
        required: false,
        options: [],
      })
    }
  })
  return rules
}

function getExperienceRules() {
  const root = document.querySelector(
    "div[data-ui='experience'], section[data-ui='experience']",
  )
  if (!root) return []
  const items = Array.from(root.querySelectorAll("ul > li"))
  const rules = []
  items.forEach((item) => {
    const children = []
    const definitions = item.querySelectorAll("dl")
    if (
      (definitions.forEach((dl) => {
        const dt = dl.querySelector("dt")
        const dd = dl.querySelector("dd")
        if (dt && dd) {
          const label = dt.innerText.trim()
          children.push({
            type: enums.FIELD_TYPE.TEXT,
            label,
            $label: dt,
            $input: dd,
            required: false,
          })
        }
      }),
      0 === children.length)
    ) {
      const editors = item.querySelectorAll(".styles--36XiB, .field-wrapper")
      editors.forEach((editor) => {
        const label = editor.querySelector("label")
        const input = editor.querySelector("input, textarea, select")
        if (label && input) {
          children.push({
            type: enums.FIELD_TYPE.TEXT,
            label: label.innerText.trim(),
            $label: label,
            $input: input,
            required: false,
          })
        }
      })
    }
    if (children.length > 0) {
      rules.push({
        type: enums.FIELD_TYPE.EMPLOYMENT,
        label: "workExperience",
        children,
        $input: item,
        required: false,
        options: [],
      })
    }
  })
  return rules
}

function normalizeFocusLabel(value) {
  return String(value || "")
    .replace(/:/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function mapSavedFocusRule(savedRules, templateRule) {
  if (!templateRule || !("children" in templateRule)) return null
  const saved = savedRules.find((rule) => {
    const input = "$input" in rule ? rule.$input : null
    return !!(
      input &&
      "function" == typeof input.querySelector &&
      input.querySelector("[data-ui='edit-section']")
    )
  })
  if (!saved || !("children" in saved) || !("$input" in saved)) return null

  const root = saved.$input
  const savedChildren = saved.children
  const children = templateRule.children.map((child) => {
    const match = savedChildren.find(
      (savedChild) =>
        normalizeFocusLabel(savedChild.label) === normalizeFocusLabel(child.label),
    )
    const input = match && "$input" in match ? match.$input : root
    const label = match && "$label" in match ? match.$label : root
    return {
      type: child.type,
      label: child.label,
      required: child.required,
      $input: input,
      $label: label,
    }
  })

  return {
    type: templateRule.type,
    label: templateRule.label,
    required: templateRule.required,
    options: "options" in templateRule ? templateRule.options : [],
    $input: root,
    $label: root,
    children,
  }
}

function getLatestSavedEducationFocusRule(templateRule) {
  return mapSavedFocusRule(getEducationRules(), templateRule)
}

function getLatestSavedExperienceFocusRule(templateRule) {
  return mapSavedFocusRule(getExperienceRules(), templateRule)
}

async function getFormSnapshot(formRules) {
  const snapshot = {}
  for (const rule of formRules) {
    if (
      rule.type !== enums.FIELD_TYPE.EDUCATION &&
      rule.type !== enums.FIELD_TYPE.EMPLOYMENT &&
      "$input" in rule &&
      rule.$input
    ) {
      snapshot[rule.label] = readFieldValue(rule)
    }
  }

  const education = getEducationRules()
  if (education.length > 0) {
    snapshot.education = education.map((rule) => {
      const record = {}
      rule.children.forEach((child) => {
        record[child.label] = readFieldValue(child)
      })
      return record
    })
  }

  const experience = getExperienceRules()
  if (experience.length > 0) {
    snapshot.employment = experience.map((rule) => {
      const record = {}
      rule.children.forEach((child) => {
        record[child.label] = readFieldValue(child)
      })
      return record
    })
  }

  return snapshot
}

function readFieldValue(rule) {
  const { $input: input, type, $checkboxs: checkboxes, options } = rule
  if (!input) return ""

  if (rule.label === phoneCountryCode.WORKABLE_PHONE_COUNTRY_CODE_LABEL) {
    const container = phoneCountryCode.getWorkablePhoneCountryContainer(input)
    return container
      ? phoneCountryCode.readWorkableSelectedPhoneCountry(container)
      : ""
  }

  if (type === enums.FIELD_TYPE.CHECKBOX) {
    if (checkboxes && checkboxes.length > 0) {
      const selected = checkboxes
        .map((checkbox, index) =>
          checkbox.checked ? options?.[index] || "Checked" : null,
        )
        .filter(Boolean)
      return 1 === selected.length ? selected[0] : selected
    }
    return input.checked || false
  }

  if (
    input instanceof HTMLInputElement ||
    input instanceof HTMLTextAreaElement ||
    input instanceof HTMLSelectElement
  ) {
    return input.value || ""
  }

  return input.innerText?.trim() || input.textContent?.trim() || ""
}

export {
  expandWorkablePhoneRule,
  extractCheckbox,
  extractSingleCheckbox,
  getEduRules,
  getEducationRules,
  getExpRules,
  getExperienceRules,
  getFormSnapshot,
  getLatestSavedEducationFocusRule,
  getLatestSavedExperienceFocusRule,
  getRules,
  getSubmitButtonText,
  getTypingSteps,
  getWorkableCoverLetterStatus,
  getWorkableLabelMeta,
  getWorkableSalaryFieldType,
  getWorkableSubmitButtonSelector,
  isWorkablePhoneInput,
}
