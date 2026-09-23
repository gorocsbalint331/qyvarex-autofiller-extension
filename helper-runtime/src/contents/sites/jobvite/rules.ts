// @ts-nocheck
/**
 * Jobvite — form rule extraction, employment grouping, and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"

function getLabelNodes() {
  const expr = `//label[@class='jv-form-field-label ng-binding ng-scope'] |
//label[@for='jv-country-select'] |
//legend[@class='jv-form-field-legend ng-binding'] |
//span[@class='ng-binding ng-scope']`
  return xpath.getOrderedNodes(expr)
}

const WORK_HISTORY_TITLE = "work history"
const PREVIOUS_EMPLOYMENT_RE = /^previous employment(?: \d+)?:?$/
const COMPANY_NAME_PREFIXES = [
  "company name",
  "name of company",
  "employer name",
]
const SECTION_TITLE_SELECTORS = [
  ":scope > .jv-prescreen-element-sectiontitle",
  ":scope > .jv-prescreen-section-header",
]
const UNSUPPORTED_REFERENCE_TITLES = new Set([
  "business/professional references",
  "business references",
  "professional references",
  "references",
])

function normalizePrescreenText(value) {
  return value?.replaceAll("*", "").replace(/\s+/g, " ").trim().toLowerCase() || ""
}

export function getJobvitePrescreenSectionTitle(section) {
  for (const selector of SECTION_TITLE_SELECTORS) {
    const text = section.querySelector(selector)?.textContent
    if (text) return text
  }
  return ""
}

export function isInsideUnsupportedJobviteReferenceSection(node) {
  const section = node.closest(".jv-prescreen-section")
  return UNSUPPORTED_REFERENCE_TITLES.has(
    normalizePrescreenText(
      section ? getJobvitePrescreenSectionTitle(section) : "",
    ),
  )
}

function isHorizontalLine(element) {
  return element.classList.contains("jv-prescreen-element-horizontalline")
}

function isEmployerMarker(element) {
  return (
    element.classList.contains("jv-prescreen-element-rightcolumntext") &&
    /\bemployer\b/.test(normalizePrescreenText(element.textContent))
  )
}

function hasCompanyNameField(elements) {
  return elements.some((element) =>
    COMPANY_NAME_PREFIXES.some((prefix) =>
      normalizePrescreenText(element.textContent).startsWith(prefix),
    ),
  )
}

export function groupWorkHistoryElements(elements) {
  const employerIndexes = elements.flatMap((element, index) =>
    isEmployerMarker(element) ? [index] : [],
  )

  if (employerIndexes.length > 0) {
    const stride =
      employerIndexes.length > 1
        ? employerIndexes[1] - employerIndexes[0]
        : undefined
    return employerIndexes
      .map((start, index) => {
        const nextStart = employerIndexes[index + 1]
        const end =
          nextStart ?? (stride ? start + stride : elements.length)
        return elements.slice(start, end)
      })
      .filter(hasCompanyNameField)
  }

  const groups = []
  let current = []
  const flush = () => {
    if (hasCompanyNameField(current)) groups.push(current)
    current = []
  }

  for (const element of elements) {
    if (isHorizontalLine(element)) {
      flush()
      continue
    }
    current.push(element)
  }
  flush()
  return groups
}

export function groupJobviteEmploymentSections(sections) {
  return sections.flatMap(({ title, elements }) => {
    const normalized = normalizePrescreenText(title)
    if (normalized === WORK_HISTORY_TITLE) {
      return groupWorkHistoryElements(elements)
    }
    if (PREVIOUS_EMPLOYMENT_RE.test(normalized) && hasCompanyNameField(elements)) {
      return [elements]
    }
    return []
  })
}

function getEmploymentElementGroups() {
  const sections = Array.from(
    document.querySelectorAll(".jv-prescreen-section"),
  ).map((section) => ({
    title: getJobvitePrescreenSectionTitle(section),
    elements: Array.from(section.children).filter((child) =>
      child.classList.contains("jv-prescreen-element"),
    ),
  }))
  const groups = groupJobviteEmploymentSections(sections)
  if (sections.length > 0) {
    console.info("[Jobvite][Employment] inspected prescreen sections", {
      sectionCount: sections.length,
      recognizedRowCount: groups.length,
    })
  }
  return groups
}

function extractFromToFields(element) {
  if (!element.classList.contains("jv-prescreen-element-fromto")) return []

  const labelText =
    element.querySelector("p .ng-binding")?.textContent || ""
  const labels = labelText
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean)
  const inputs = Array.from(element.querySelectorAll('input[type="text"]'))

  return inputs.slice(0, labels.length).map((input, index) => ({
    type: enums.FIELD_TYPE.TEXT,
    label: labels[index],
    required: input.required,
    $input: input,
    $label: element,
  }))
}

function extractEmploymentRules() {
  const groups = getEmploymentElementGroups()
  const rules = groups.flatMap((elements) => {
    const children = []
    for (const element of elements) {
      const fromTo = extractFromToFields(element)
      if (fromTo.length > 0) {
        children.push(...fromTo)
        continue
      }
      const labels = Array.from(
        element.querySelectorAll(
          "label.jv-form-field-label, legend.jv-form-field-legend",
        ),
      )
      for (const label of labels) {
        const rule = extractRuleFromLabel(label)
        if (rule) children.push(rule)
      }
    }
    if (children.length === 0) return []
    return [
      {
        type: enums.FIELD_TYPE.EMPLOYMENT,
        label: "Employment",
        required: children.some((child) => child.required),
        $input: elements[0],
        $label: elements[0],
        children,
        options: children.map((child) => ({
          type: child.type,
          label: child.label,
          options: child.options || [],
        })),
      },
    ]
  })

  if (rules.length > 0) {
    console.info("[Jobvite][Employment] extracted structured Work History", {
      rowCount: rules.length,
      childCounts: rules.map((rule) => rule.children?.length ?? 0),
    })
  }
  return rules
}

function extractRuleFromLabel(label) {
  return (
    extractTextRule(label) ||
    extractSelectRule(label) ||
    extractCheckboxRule(label) ||
    extractRadioRule(label) ||
    extractDateRule(label) ||
    null
  )
}

export async function getRules() {
  const labels = getLabelNodes()
  const employmentElements = new Set(getEmploymentElementGroups().flat())
  const rules = []

  for (const label of labels) {
    if (isInsideUnsupportedJobviteReferenceSection(label)) continue
    const element = label.closest?.(".jv-prescreen-element")
    if (element && employmentElements.has(element)) continue
    const rule = extractRuleFromLabel(label)
    if (rule) rules.push(rule)
  }

  rules.push(...extractEmploymentRules())
  return rules
}

function extractTextRule(label) {
  const labelText = getLabelText(label)
  const input = xpath.getFirstOrderedNode(
    './following-sibling::div[1]//input[@type="text" or @type="email" or @type="tel" or @type="number"] | ./following-sibling::div[1]//textarea',
    label,
  )
  if (!input) return null
  return {
    type: enums.FIELD_TYPE.TEXT,
    label: labelText,
    required: isRequired(label),
    $input: input,
    $label: label,
  }
}

function extractRadioRule(label) {
  const labelText = getLabelText(label)
  const radios = xpath.getOrderedNodes(
    './following-sibling::label//input[@type="radio"]',
    label,
  )
  if (radios.length === 0) return null

  const options = radios.map((radio) => {
    const optionLabel = radio.closest("label") || radio.nextElementSibling
    return optionLabel?.textContent?.trim() || ""
  })
  return {
    type: enums.FIELD_TYPE.RADIO,
    label: labelText,
    required: isRequired(label),
    $label: label,
    options,
    $radioParent: label,
    $input: radios,
  }
}

function extractSelectRule(label) {
  const labelText = getLabelText(label)
  const select = xpath.getFirstOrderedNode(
    "./following-sibling::div//select | ../following-sibling::select",
    label,
  )
  if (!select) return null
  return {
    type: enums.FIELD_TYPE.SELECT,
    label: labelText,
    required: isRequired(label),
    $input: select,
    options: getSelectOptions(select),
    $label: label,
  }
}

function extractCheckboxRule(label) {
  const labelText = getLabelText(label)
  const checkboxes = xpath.getOrderedNodes(
    './following-sibling::label//input[@type="checkbox"]',
    label,
  )
  if (checkboxes.length === 0) return null

  const options = checkboxes.map((checkbox) => {
    const optionLabel =
      checkbox.closest("label") || checkbox.nextElementSibling
    return optionLabel?.textContent?.trim() || ""
  })
  return {
    type: enums.FIELD_TYPE.CHECKBOX,
    label: labelText,
    required: isRequired(label),
    $label: label,
    options,
    $checkboxs: checkboxes,
  }
}

function extractDateRule(label) {
  const labelText = getLabelText(label)
  const input = xpath.getFirstOrderedNode(
    './following-sibling::div[1]//input[@type="date"]',
    label,
  )
  if (!input) return null
  return {
    type: enums.FIELD_TYPE.DATE,
    label: labelText,
    required: isRequired(label),
    $input: input,
    $label: label,
  }
}

function getLabelText(label) {
  return label?.textContent?.replaceAll("*", "").trim() || ""
}

function isRequired(label) {
  const required = xpath.getFirstOrderedNode(
    ".//span[contains(@class, 'jv-required-label')]",
    label,
  )
  return !!required
}

function getSelectOptions(select) {
  return Array.from(select.options).map((option) => option.text.trim())
}

export async function getFormSnapshot() {
  const labels = getLabelNodes()
  const snapshot = {}

  for (const label of labels) {
    if (isInsideUnsupportedJobviteReferenceSection(label)) continue
    const labelText = getLabelText(label)
    if (!labelText) continue

    const textInput = xpath.getFirstOrderedNode(
      './following-sibling::div[1]//input[@type="text" or @type="email" or @type="tel" or @type="number"] | ./following-sibling::div[1]//textarea',
      label,
    )
    if (textInput) {
      snapshot[labelText] = textInput.value || ""
      continue
    }

    const select = xpath.getFirstOrderedNode(
      "./following-sibling::div//select | ../following-sibling::select",
      label,
    )
    if (select) {
      const selected = select.options[select.selectedIndex]
      snapshot[labelText] = selected?.text?.trim() || ""
      continue
    }

    const radios = xpath.getOrderedNodes(
      './following-sibling::label//input[@type="radio"]',
      label,
    )
    if (radios.length > 0) {
      const checked = radios.find((radio) => radio.checked)
      if (checked) {
        const optionLabel =
          checked.closest("label") || checked.nextElementSibling
        snapshot[labelText] = optionLabel?.textContent?.trim() || ""
      } else {
        snapshot[labelText] = ""
      }
      continue
    }

    const checkboxes = xpath.getOrderedNodes(
      './following-sibling::label//input[@type="checkbox"]',
      label,
    )
    if (checkboxes.length > 0) {
      snapshot[labelText] = checkboxes
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => {
          const optionLabel =
            checkbox.closest("label") || checkbox.nextElementSibling
          return optionLabel?.textContent?.trim() || ""
        })
        .join(", ")
      continue
    }

    const dateInput = xpath.getFirstOrderedNode(
      './following-sibling::div[1]//input[@type="date"]',
      label,
    )
    if (dateInput) {
      snapshot[labelText] = dateInput.value || ""
      continue
    }
  }

  return Object.keys(snapshot).length > 0 ? snapshot : null
}
