// @ts-nocheck
/**
 * Adobe Careers form rule extraction and snapshot helpers.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"

function isLeafFormGroup(node) {
  return !node.querySelector("div.form-group.field")
}

function queryLeafFormGroups(xpathExpr, root = document.body) {
  return xpath.getOrderedNodesSafe(xpathExpr, root).filter(isLeafFormGroup)
}

function mapChildOption(child) {
  const option = {
    type:
      child.type === enums.FIELD_TYPE.SELECT ||
      child.type === enums.FIELD_TYPE.LISTBOX
        ? "listbox"
        : child.type === enums.FIELD_TYPE.MULTI_SELECT
          ? "multi-select"
          : child.type === enums.FIELD_TYPE.DATE
            ? "date"
            : child.type === enums.FIELD_TYPE.CHECKBOX
              ? "checkbox"
              : "text",
    label: child.label,
  }
  if (child.type === enums.FIELD_TYPE.DATE) {
    option.description = "MM/DD/YYYY"
  }
  if (child.options && Array.isArray(child.options)) {
    option.options = child.options
  }
  return option
}

/** Build a single field rule from an Adobe form-group node. */
export function getRule(formGroup) {
  const labelNode = xpath.getFirstOrderedNodeSafe(
    './/label[contains(@class, "control-label")] | .//label[@for] | .//span[contains(@class, "checkboxText")] | .//div[contains(@class, "checkbox")]//label',
    formGroup,
  )
  if (!labelNode) return null

  const label = labelNode.textContent.trim().split("\n")[0].replace("*", "")
  const required = !!xpath.getFirstOrderedNodeSafe(
    './/span[contains(@class, "required")]',
    formGroup,
  )

  const select = xpath.getFirstOrderedNodeSafe(".//select", formGroup)
  if (select) {
    const optionNodes = xpath.getOrderedNodesSafe(".//option", select)
    const options = optionNodes
      .map((node) => node.textContent.trim())
      .filter((text) => text !== "Please Select")
    if (options.length > 0) {
      return {
        type: enums.FIELD_TYPE.SELECT,
        label,
        required,
        $input: select,
        $label: labelNode,
        options,
      }
    }
  }

  const textInput = xpath.getFirstOrderedNodeSafe(
    './/input[not(@type) or @type="text" or @type="email" or @type="tel" or @type="url" or @type="search" or @type="number"]',
    formGroup,
  )
  if (textInput) {
    const id = textInput.id?.toLowerCase() || ""
    const isDate = id.includes("date")
    return {
      type: isDate ? enums.FIELD_TYPE.DATE : enums.FIELD_TYPE.TEXT,
      label,
      required,
      $input: textInput,
      $label: labelNode,
    }
  }

  const textarea = xpath.getFirstOrderedNodeSafe(".//textarea", formGroup)
  if (textarea) {
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required,
      $input: textarea,
      $label: labelNode,
    }
  }

  const checkboxes = xpath.getOrderedNodesSafe(
    './/input[@type="checkbox"]',
    formGroup,
  )
  if (checkboxes.length > 0) {
    const options = checkboxes
      .map((checkbox) => {
        const aria = checkbox.getAttribute("aria-label")
        if (aria) return aria
        const textNode = xpath.getFirstOrderedNodeSafe(
          './/span[contains(@class, "checkboxText")]',
          checkbox.closest("div") || formGroup,
        )
        return textNode?.textContent?.trim() || label
      })
      .filter((text) => text !== null && text.length > 0)

    if (options.length > 0) {
      return {
        type: enums.FIELD_TYPE.CHECKBOX,
        label,
        required,
        $checkboxs: checkboxes,
        $input: checkboxes[0],
        $label: labelNode,
        options,
      }
    }
  }

  const radioGroup = xpath.getFirstOrderedNodeSafe(
    './/div[contains(@class, "field-radio-group")]',
    formGroup,
  )
  if (radioGroup) {
    const radios = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "radio")]',
      radioGroup,
    )
    if (radios.length > 0) {
      const options = radios
        .map((radio) => {
          const textNode = xpath.getFirstOrderedNodeSafe(
            './/span[@class="radio-text"]',
            radio,
          )
          const text = textNode?.textContent?.trim() || ""
          return text || null
        })
        .filter((text) => text !== null && text.length > 0)

      if (options.length > 0) {
        const firstInput = xpath.getFirstOrderedNodeSafe(
          './/input[@type="radio"]',
          radios[0],
        )
        if (firstInput) {
          return {
            type: enums.FIELD_TYPE.RADIOGROUP,
            label,
            required,
            $input: firstInput,
            $radioParent: radioGroup,
            $label: labelNode,
            options,
          }
        }
      }
    }
  }

  return null
}

export function getEducationRule(fieldset) {
  const groups = xpath.getOrderedNodesSafe(
    './/div[contains(@class, "row form-group field field-")] | .//div[contains(@class, "form-group") and contains(@class, "row")] | .//div[@id="I currently work here"]',
    fieldset,
  )
  const children = []
  for (const group of groups) {
    const rule = getRule(group)
    if (rule) children.push(rule)
  }
  if (children.length === 0) return null

  return {
    type: enums.FIELD_TYPE.EDUCATION,
    label: "Education",
    required: true,
    children,
    options: children.map(mapChildOption),
  }
}

export function getExperienceRule(fieldset) {
  if (!fieldset) return null

  const groups = xpath.getOrderedNodesSafe(
    './/div[contains(@class, "row form-group field field-")] | .//div[contains(@class, "form-group") and contains(@class, "row")] | .//div[contains(@class, "daterangepicker-checkbox")]',
    fieldset,
  )
  const children = []
  for (const group of groups) {
    if (!group) continue
    const rule = getRule(group)
    if (rule) children.push(rule)
  }
  if (children.length === 0) return null

  return {
    type: enums.FIELD_TYPE.EMPLOYMENT,
    label: "Employment",
    required: true,
    children,
    options: children.map(mapChildOption),
  }
}

/** Current slick-carousel step title (e.g. "My Information", "My Experience"). */
export function getCurrencyPageField() {
  const title = xpath.getFirstOrderedNodeSafe(
    './/li[contains(@class, "slick-current")]//span[@class="title"]',
    document.body,
  )
  return title?.textContent?.trim() || ""
}

export function extractRules() {
  const rules = []
  const page = getCurrencyPageField()

  if (page.includes("My Experience")) {
    const fieldsets = xpath.getOrderedNodesSafe(
      '//fieldset[contains(@class, "field-array-of-object")]',
      document.body,
    )
    const seenLabels = new Set()

    for (const fieldset of fieldsets) {
      if (fieldset.id.includes("educationData")) {
        const first = xpath.getFirstOrderedNodeSafe(
          '//fieldset[@id="educationData[0]"]',
          document.body,
        )
        if (first) {
          const rule = getEducationRule(first)
          if (rule) rules.push(rule)
        }
      } else if (fieldset.id.includes("experienceData")) {
        const first = xpath.getFirstOrderedNodeSafe(
          '//fieldset[@id="experienceData[0]"]',
          document.body,
        )
        if (first) {
          const rule = getExperienceRule(first)
          if (rule) rules.push(rule)
        }
      } else {
        const groups = queryLeafFormGroups(
          './/div[contains(@class, "form-group") and contains(@class, "field-")]',
          fieldset,
        )
        for (const group of groups) {
          const rule = getRule(group)
          if (rule && !seenLabels.has(rule.label)) {
            seenLabels.add(rule.label)
            rules.push(rule)
          }
        }
      }
    }
  } else {
    const groups = queryLeafFormGroups(
      '//div[contains(@class, "form-group") and contains(@class, "field-")]',
    )
    const seenLabels = new Set()
    for (const group of groups) {
      const rule = getRule(group)
      if (rule && !seenLabels.has(rule.label)) {
        seenLabels.add(rule.label)
        rules.push(rule)
      }
    }
  }

  return rules
}

export function getEduRules() {
  const rules = []
  const fieldsets = xpath.getOrderedNodesSafe(
    '//fieldset[starts-with(@id, "educationData[")]',
    document.body,
  )
  for (const fieldset of fieldsets) {
    const rule = getEducationRule(fieldset)
    if (rule) rules.push(rule)
  }
  return rules
}

function readRuleValue(rule) {
  try {
    switch (rule.type) {
      case enums.FIELD_TYPE.TEXT:
      case enums.FIELD_TYPE.DATE:
      case enums.FIELD_TYPE.SEARCH: {
        return rule.$input?.value?.trim() ?? ""
      }
      case enums.FIELD_TYPE.SELECT:
      case enums.FIELD_TYPE.SELECT_ORIGINAL:
      case enums.FIELD_TYPE.LISTBOX: {
        const select = rule.$input
        if (!select || select.tagName !== "SELECT") return ""
        const selected = select.options[select.selectedIndex]
        return selected?.textContent?.trim() || select.value || ""
      }
      case enums.FIELD_TYPE.CHECKBOX: {
        const checkboxes = rule.$checkboxs
        const options = rule.options
        if (!checkboxes?.length) return ""
        if (checkboxes.length > 1 && options?.length) {
          const selected = []
          checkboxes.forEach((box, index) => {
            if (box.checked && options[index]) selected.push(options[index])
          })
          return selected.join(", ")
        }
        return checkboxes[0].checked ? "Yes" : "No"
      }
      case enums.FIELD_TYPE.RADIOGROUP: {
        const parent = rule.$radioParent
        const options = rule.options
        if (!parent) return ""
        const radios = Array.from(
          parent.querySelectorAll('input[type="radio"]'),
        )
        const checked = radios.find((radio) => radio.checked)
        if (!checked) return ""
        const index = radios.indexOf(checked)
        if (options && index >= 0 && index < options.length) {
          return options[index]
        }
        const label = checked.closest("label")
        const text = label?.querySelector("span.radio-text")
        return text?.textContent?.trim() || checked.value || ""
      }
      default:
        return ""
    }
  } catch {
    return ""
  }
}

export function getFormSnapshot(rules, _eduRules) {
  const snapshot = {}
  for (const rule of rules) {
    if (
      rule.type === enums.FIELD_TYPE.EDUCATION ||
      rule.type === enums.FIELD_TYPE.EMPLOYMENT
    ) {
      continue
    }
    snapshot[rule.label] = readRuleValue(rule)
  }
  return snapshot
}

function snapshotSectionChildren(sections) {
  return sections.map((section) => {
    const row = {}
    for (const child of section.children ?? []) {
      row[child.label] = readRuleValue(child)
    }
    return row
  })
}

export function getAdditionalFormSnapshotData(rules, eduRules) {
  const extra = {}
  const employment = rules.filter(
    (rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT,
  )
  const education =
    eduRules && eduRules.length > 0
      ? eduRules
      : rules.filter((rule) => rule.type === enums.FIELD_TYPE.EDUCATION)

  if (employment.length > 0) {
    extra.employment = snapshotSectionChildren(employment)
  }
  if (education.length > 0) {
    extra.education = snapshotSectionChildren(education)
  }
  return extra
}
