// @ts-nocheck
/**
 * Meta Careers — form rule extraction and snapshot helpers.
 */

import * as executor from "../../crawler/utils/executor.js"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as getTargetOrTimeoutModule from "../../../utils/getTargetOrTimeout.js"

const getTargetOrTimeout = {
  default:
    getTargetOrTimeoutModule.default ?? getTargetOrTimeoutModule,
}

const PASSWORD_LABEL_SNIPPETS = ["Password", "Confirm password"]
const SECTION_HEADINGS = ["Education", "Experience"]
const EXP_EDU_FILTER_LABELS = [
  "High school name",
  "Are you applying for your first job?",
  "Skills (optional)",
]

const PHONE_NUMBER_LABEL_XPATH =
  'span[translate(normalize-space(text()), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz") = "phone number" and following-sibling::*//input[(@inputmode="numeric" or @type="tel") and not(@type="hidden")]]'

const GENERIC_TEXT_INPUT_SELECTOR = 'input[type="text"], textarea'
const PHONE_INPUT_SELECTOR =
  'input[inputmode="numeric"]:not([type="hidden"]), input[type="tel"]:not([type="hidden"]), input[type="text"]:not([type="hidden"]), textarea'
const PHONE_CODE_BUTTON_SELECTOR =
  'button[aria-label="Code"][aria-controls*="popover"], button[role="combobox"][aria-label="Code"]'

const NAME_FIELD_DESCRIPTIONS = {
  "first name": "First name can't be in all lowercase letters.",
  "last name": "Last name can't be in all lowercase letters.",
}

export const getFillingLabels = (scope) => {
  const labels = []
  let labelNodes = []
  labelNodes = scope
    ? xpath.getOrderedNodesSafe(
        `.//span[contains(text(), "Please select one or more locations")] 
| .//*[(self::div or self::label) and contains(@class, "x1e56ztr") and normalize-space(text())] 
| .//div[contains(@role, "radiogroup")]/div[1]//span[normalize-space(text())]
| .//${PHONE_NUMBER_LABEL_XPATH}`,
        scope,
      )
    : xpath.getOrderedNodesSafe(
        `//span[contains(text(), "Please select one or more locations")] | //*[(self::div or self::label) and contains(@class, "x1e56ztr") and normalize-space(text())] | //div[contains(@role, "radiogroup")]/div[1]//span[normalize-space(text())] | //${PHONE_NUMBER_LABEL_XPATH}`,
      )

  for (const node of labelNodes) {
    const text = node.textContent?.trim() || ""
    if (
      text &&
      !PASSWORD_LABEL_SNIPPETS.some((snippet) => text.includes(snippet))
    ) {
      labels.push(node)
    }
  }
  return labels
}

export const extractRules = async () => {
  const headings = xpath.getOrderedNodes("//h1")
  let onExpOrEduPage = false
  let sectionHeading = null
  let sectionName = ""

  for (const heading of headings) {
    const text = heading.textContent?.trim() || ""
    if (SECTION_HEADINGS.includes(text)) {
      onExpOrEduPage = true
      sectionHeading = heading
      sectionName = text
      break
    }
  }

  let rules = await extractRulesFromLabels().then((result) => result)
  if (onExpOrEduPage && rules) {
    const sectionRule = buildExpOrEduSectionRule(
      rules,
      sectionName === "Education",
    )
    const leftoverRules = filterExpOrEduLeftoverRules(rules)
    rules = [sectionRule, ...leftoverRules].filter(Boolean)
  }
  return rules
}

const extractRulesFromLabels = async (scope) => {
  let labelNodes = []
  labelNodes = scope ? getFillingLabels(scope) : getFillingLabels()
  const rules = []
  for (const labelNode of labelNodes) {
    const rule = await parseRuleFromLabel(labelNode).then((result) => result)
    if (Array.isArray(rule)) rules.push(...rule)
    if (rule && !Array.isArray(rule)) rules.push(rule)
  }
  return dedupeRadioRulesByParent(rules)
}

const dedupeRadioRulesByParent = (rules) => {
  const normalize = (text) => text.replace(/\s+/g, " ").trim().toLowerCase()
  const optionMatchesLabel = (rule) =>
    (rule.options ?? []).some(
      (option) => option && normalize(option) === normalize(rule.label),
    )

  const preferredByParent = new Map()
  for (const rule of rules) {
    if (rule.type !== enums.FIELD_TYPE.RADIO) continue
    const radioRule = rule
    const existing = preferredByParent.get(radioRule.$radioParent)
    if (!existing) {
      preferredByParent.set(radioRule.$radioParent, radioRule)
      continue
    }
    if (optionMatchesLabel(existing) && !optionMatchesLabel(radioRule)) {
      preferredByParent.set(radioRule.$radioParent, radioRule)
    }
  }

  return rules.filter((rule) => {
    if (rule.type !== enums.FIELD_TYPE.RADIO) return true
    const radioRule = rule
    return preferredByParent.get(radioRule.$radioParent) === radioRule
  })
}

const parseRuleFromLabel = async (labelNode) => {
  const phoneRule = parsePhoneNumberRule(labelNode)
  if (phoneRule) return phoneRule

  const radioRule = parseRadioRule(labelNode)
  if (radioRule) return radioRule

  const checkboxRule = parseCheckboxRule(labelNode)
  if (checkboxRule) return checkboxRule

  const selectRule = await parseSelectRule(labelNode).then((result) => result)
  if (selectRule) return selectRule

  const multiSelectRule = parseMultiSelectRule(labelNode)
  if (multiSelectRule) return multiSelectRule

  const textRule = parseTextRule(labelNode)
  return textRule || null
}

const parsePhoneNumberRule = (labelNode) => {
  const label = cleanLabelText(labelNode)
  if (!label || !/^phone\s*number$/i.test(label)) return null

  const container = labelNode.nextElementSibling || labelNode.parentElement
  if (!container) return null

  const codeButton = container.querySelector(PHONE_CODE_BUTTON_SELECTOR)
  const phoneInput = container.querySelector(PHONE_INPUT_SELECTOR)
  const rules = []
  if (codeButton) {
    rules.push({
      type: enums.FIELD_TYPE.TEXT,
      label: "Phone code",
      required: isRequired(labelNode),
      $input: codeButton,
      $label: labelNode,
    })
  }
  if (phoneInput) {
    rules.push({
      type: enums.FIELD_TYPE.TEXT,
      label: "Phone number",
      required: isRequired(labelNode),
      $input: phoneInput,
      $label: labelNode,
    })
  }
  return rules.length > 0 ? rules : null
}

export const getAllExpOrEduRulesInFill = async (isEducation) => {
  let anchor = null
  let sectionContainers = null
  const sectionRules = []

  if (isEducation) {
    anchor = xpath.getFirstOrderedNodeSafe(
      '//span[contains(text(), "Higher education")]',
    )
  } else {
    const applyingLabel = xpath.getFirstOrderedNodeSafe(
      '//span[contains(text(), "Are you applying")]',
    )
    anchor = applyingLabel?.parentElement
  }

  if (anchor) {
    sectionContainers = isEducation
      ? anchor.parentElement?.querySelectorAll(
          ":scope > div:not([role='button'])",
        )
      : anchor.parentElement?.querySelectorAll(":scope > div[class~='xbjudin']")
  }

  if (sectionContainers) {
    for (const container of sectionContainers) {
      const childRules = await extractRulesFromLabels(container).then(
        (result) => result,
      )
      const sectionRule = buildExpOrEduSectionRule(childRules, isEducation)
      if (sectionRule) sectionRules.push(sectionRule)
    }
  }
  return sectionRules
}

const buildExpOrEduSectionRule = (rules, isEducation) => {
  const children = rules
    .map((rule) => {
      if (!EXP_EDU_FILTER_LABELS.includes(rule.label)) return rule
    })
    .filter(Boolean)
  const options = children.map((rule) => ({
    label: rule.label,
    type: rule.type,
  }))
  return {
    type: isEducation ? enums.FIELD_TYPE.EDUCATION : enums.FIELD_TYPE.EMPLOYMENT,
    label: isEducation ? "Education" : "workExperience",
    required: true,
    children,
    options,
  }
}

const filterExpOrEduLeftoverRules = (rules) =>
  rules
    .map((rule) => {
      if (EXP_EDU_FILTER_LABELS.includes(rule.label)) return rule
    })
    .filter(Boolean)

const parseTextRule = (labelNode) => {
  const label = cleanLabelText(labelNode)
  if (label.toLowerCase().includes("date") || !label) return null
  const required = isRequired(labelNode)
  const input = findTextInputForLabel(labelNode)
  if (label && input) {
    const description = getNameFieldDescription(label)
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required,
      $input: input,
      $label: labelNode,
      ...(description ? { description } : {}),
    }
  }
  return null
}

const getNameFieldDescription = (label) =>
  NAME_FIELD_DESCRIPTIONS[label.trim().toLowerCase()]

const parseRadioRule = (labelNode) => {
  const label = cleanLabelText(labelNode)
  if (!label) return null
  const required = isRequired(labelNode)
  let radioParent = null
  let options = []
  radioParent = labelNode.closest('[role="radiogroup"]')
  const radios = Array.from(
    xpath.getOrderedNodesSafe(".//input[@type='radio']", radioParent),
  )
  if (radios.length === 0) return null
  options = radios.map((radio) => {
    const optionLabel = radio.parentElement?.nextElementSibling
    return cleanLabelText(optionLabel)
  })
  return radioParent && options.length > 0
    ? {
        type: enums.FIELD_TYPE.RADIO,
        label,
        required,
        options,
        $input: radios,
        $label: labelNode,
        $radioParent: radioParent,
      }
    : null
}

const parseCheckboxRule = (labelNode) => {
  const label = cleanLabelText(labelNode)
  if (!label) return null
  const required = isRequired(labelNode)
  let container = labelNode.nextElementSibling
  let checkboxes = Array.from(
    xpath.getOrderedNodesSafe('.//input[@type="checkbox"]', container),
  )
  if (checkboxes.length === 0) {
    checkboxes = Array.from(
      xpath.getOrderedNodesSafe('.//input[@type="checkbox"]', labelNode),
    )
    if (checkboxes.length >= 0) {
      container = labelNode
    }
  }
  if (checkboxes.length === 0) return null

  let options = checkboxes.map((checkbox) => {
    const optionLabel = xpath.getFirstOrderedNodeSafe(
      "./ancestor::label//span[normalize-space(text())]",
      checkbox,
    )
    return cleanLabelText(optionLabel)
  })
  if (options.length === 1 && options[0] === null) {
    options = ["yes", "no"]
  }
  return container
    ? {
        type: enums.FIELD_TYPE.CHECKBOX,
        label,
        required,
        options,
        $label: labelNode,
        $checkboxs: checkboxes,
      }
    : null
}

const parseSelectRule = async (labelNode) => {
  const label = cleanLabelText(labelNode)
  if (!label) return null
  const required = isRequired(labelNode)
  const input = null
  const comboboxSibling = labelNode.parentElement.nextElementSibling
  if (comboboxSibling) {
    comboboxSibling.click()
    const listbox = await getTargetOrTimeout.default(
      () =>
        xpath.getFirstOrderedNodeSafe(
          "//div[contains(@role, 'listbox') and contains(@aria-label, Degree)]",
        ),
      () => false,
      10,
    )
    if (listbox) {
      const optionNodes = xpath.getOrderedNodesSafe(
        './/div[@role="option"]',
        listbox,
      )
      const options = optionNodes
        .map((option) => option.textContent?.trim() || "")
        .filter((text) => text !== "")
      comboboxSibling.click()
      await executor.delay(100)
      return {
        type: enums.FIELD_TYPE.SELECT,
        label,
        required,
        options,
        $input: input,
        $label: labelNode,
      }
    }
  }
  return null
}

const parseMultiSelectRule = (labelNode) => {
  const label = cleanLabelText(labelNode)
  if (!label) return null
  const required = isRequired(labelNode)
  let select = null

  if (labelNode instanceof HTMLLabelElement && labelNode.htmlFor) {
    const byFor = document.getElementById(labelNode.htmlFor)
    if (byFor && byFor.tagName === "SELECT" && byFor.multiple) {
      select = byFor
    }
  }
  if (!select) {
    const sibling = labelNode.nextElementSibling
    if (sibling && sibling.tagName === "SELECT" && sibling.multiple) {
      select = sibling
    }
  }
  if (!select) {
    const parent = labelNode.parentElement
    if (parent) {
      select = parent.querySelector("select[multiple]")
    }
  }
  if (select) {
    const options = Array.from(select.options)
      .map((option) => option.textContent?.trim() || "")
      .filter((text) => text !== "")
    return {
      type: enums.FIELD_TYPE.MULTI_SELECT,
      label,
      required,
      options,
      $input: select,
      $label: labelNode,
    }
  }
  return null
}

const isRequired = (labelNode) => true

const cleanLabelText = (node) => {
  let text = node.textContent?.replace(/\s*\*\s*/g, "").trim() || ""
  text = text.replace(/\s*\*\s*$/, "").trim()
  text = text.replace(/\s*\(required\)\s*$/i, "").trim()
  text = text.replace(/\s*\(mandatory\)\s*$/i, "").trim()
  return text || null
}

const findTextInputForLabel = (labelNode) => {
  let input = null
  const label = cleanLabelText(labelNode) || ""
  if (
    /phone/i.test(label) &&
    (input =
      labelNode.querySelector(PHONE_INPUT_SELECTOR) ||
      labelNode.nextElementSibling?.querySelector(PHONE_INPUT_SELECTOR) ||
      labelNode.parentElement?.querySelector(PHONE_INPUT_SELECTOR))
  ) {
    return input
  }
  if (
    (input =
      labelNode.parentElement?.nextElementSibling?.querySelector(
        GENERIC_TEXT_INPUT_SELECTOR,
      ))
  ) {
    return input
  }
  return (input = xpath.getFirstOrderedNodeSafe(
    './following-sibling::div//button[contains(@aria-controls, "popover")]',
    labelNode,
  ))
}

export async function getFormSnapshot() {
  const snapshot = {}
  const seenInputs = new Set()

  if (await getWorkExperienceSnapshot()) {
    return await getWorkExperienceSnapshot()
  }
  if (await getEducationSnapshot()) {
    return await getEducationSnapshot()
  }

  const labelNodes = xpath.getOrderedNodesSafe(
    `//*[(self::div or self::label) and contains(@class, "x1e56ztr") and normalize-space(text())] | //${PHONE_NUMBER_LABEL_XPATH}`,
  )
  for (const labelNode of labelNodes) {
    const label = cleanLabelText(labelNode)
    if (
      !label ||
      PASSWORD_LABEL_SNIPPETS.some((snippet) => label.includes(snippet))
    ) {
      continue
    }
    const input = findTextInputForLabel(labelNode)
    if (!input) continue

    if (input.tagName === "INPUT" || input.tagName === "TEXTAREA") {
      const textInput = input
      if (
        textInput.type === "hidden" ||
        textInput.type === "file" ||
        textInput.type === "password"
      ) {
        continue
      }
      snapshot[label] = textInput.value || ""
      if (textInput instanceof HTMLInputElement) {
        seenInputs.add(textInput)
      }
    } else if (input.tagName === "BUTTON") {
      const buttonText = input.textContent?.trim() || ""
      if (buttonText && buttonText !== "Select" && buttonText !== "") {
        snapshot[label] = buttonText
      }
    }
  }

  const checkedByGroup = new Map()
  const checkboxes = xpath.getOrderedNodesSafe('//input[@type="checkbox"]')
  for (const checkbox of checkboxes) {
    if (seenInputs.has(checkbox)) continue
    const optionLabelNode = xpath.getFirstOrderedNodeSafe(
      "./ancestor::label//span[normalize-space(text())][last()]",
      checkbox,
    )
    const optionText = optionLabelNode?.textContent?.trim()
    if (!optionText) continue

    let groupLabel = "Other checkboxes"
    const labelEl = checkbox.closest("label")
    const listRoot = labelEl?.closest('[role="list"]')
    if (listRoot) {
      const listAncestor = listRoot.parentElement?.parentElement
      if (listAncestor) {
        const spans = listAncestor.querySelectorAll("span")
        for (const span of spans) {
          const spanText = span.textContent?.trim()
          if (
            spanText &&
            (spanText.length > 10 ||
              spanText.includes("Please") ||
              spanText.includes("select")) &&
            span.compareDocumentPosition(listRoot) &
              Node.DOCUMENT_POSITION_FOLLOWING
          ) {
            groupLabel = cleanLabelText(span) || groupLabel
            break
          }
        }
      }
    }

    if (groupLabel === "Other checkboxes") {
      let ancestor = labelEl?.parentElement
      while (ancestor && ancestor !== document.body) {
        const previousSiblings = []
        let previous = ancestor.previousElementSibling
        while (previous && previousSiblings.length < 5) {
          previousSiblings.push(previous)
          previous = previous.previousElementSibling
        }
        for (const sibling of previousSiblings) {
          const titleNode = sibling.querySelector
            ? sibling.querySelector('[class*="x1e56ztr"]')
            : sibling.matches && sibling.matches('[class*="x1e56ztr"]')
              ? sibling
              : null
          if (titleNode && titleNode.textContent?.trim()) {
            groupLabel = cleanLabelText(titleNode) || groupLabel
            break
          }
        }
        if (groupLabel !== "Other checkboxes") break
        ancestor = ancestor.parentElement
      }
    }

    if (checkbox.checked) {
      if (!checkedByGroup.has(groupLabel)) {
        checkedByGroup.set(groupLabel, [])
      }
      checkedByGroup.get(groupLabel).push(optionText)
    }
    seenInputs.add(checkbox)
  }
  checkedByGroup.forEach((values, groupLabel) => {
    snapshot[groupLabel] = values
  })

  const radioGroups = xpath.getOrderedNodesSafe('//div[@role="radiogroup"]')
  for (const group of radioGroups) {
    const labelNode = xpath.getFirstOrderedNodeSafe(
      ".//span[normalize-space(text())]",
      group,
    )
    const groupLabel = labelNode ? cleanLabelText(labelNode) : null
    if (!groupLabel) continue
    const radios = xpath.getOrderedNodesSafe('.//input[@type="radio"]', group)
    for (const radio of radios) {
      if (!radio.checked) continue
      const optionNode = radio.parentElement?.nextElementSibling
      const optionText = optionNode
        ? cleanLabelText(optionNode)
        : radio.value
      snapshot[groupLabel] = optionText || ""
      seenInputs.add(radio)
      break
    }
  }

  const selects = xpath.getOrderedNodesSafe("//select")
  for (const select of selects) {
    let label = ""
    if (select.id) {
      const labelEl = document.querySelector(`label[for="${select.id}"]`)
      if (labelEl) {
        label = cleanLabelText(labelEl) || ""
      }
    }
    if (!label && select.name) {
      label = select.name
    }
    if (!label) continue

    if (select.multiple) {
      snapshot[label] = Array.from(select.selectedOptions).map(
        (option) => option.textContent?.trim() || option.value,
      )
    } else {
      const selected = select.selectedOptions[0]
      snapshot[label] = selected
        ? selected.textContent?.trim() || selected.value
        : ""
    }
  }

  return snapshot
}

const getWorkExperienceSnapshot = async () => {
  const fieldXPaths = {
    Position: ".//label[text()='Position']/following-sibling::div/button",
    Location:
      ".//div[text()='Location']/parent::div/following-sibling::div//input",
    "Start (MM/YYYY)": ".//div[text()='Start (MM/YYYY)']/following::input[1]",
    "End (MM/YYYY)": ".//div[text()='End (MM/YYYY)']/following::input[1]",
    Description: ".//div[text()='Description']/following::textarea[1]",
    "Employer name":
      ".//label[text()='Employer name']/following-sibling::div/button",
    "I currently work here": ".//input[@type='checkbox']",
  }
  const snapshot = {}
  const sections = xpath.getOrderedNodes(
    "//h1[text()='Experience']/following-sibling::div//div[@class[contains(., 'xbjudin')]]",
  )
  if (sections.length === 0) return null

  for (const section of sections) {
    const row = {}
    for (const [key, fieldXPath] of Object.entries(fieldXPaths)) {
      const element = xpath.getFirstOrderedNodeSafe(fieldXPath, section)
      if (!element) continue
      let value = ""
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        if (element.type === "checkbox") {
          value = element.checked ? "Yes" : "No"
        }
        value = element.value
      } else if (element.tagName === "BUTTON") {
        value = element.textContent?.trim() || ""
      }
      row[key] = value
    }
    snapshot[`WorkExperience_${Object.keys(snapshot).length + 1}`] = row
  }
  return snapshot
}

const getEducationSnapshot = async () => {
  const fieldXPaths = {
    "School name": ".//label[text()='School name']/following-sibling::div/button",
    Degree: ".//div[text()='Degree']/following::div[@role='combobox'][1]/div[1]",
    "Concentration 1":
      "(.//div[text()='Concentration'])[1]/ancestor::label//input",
    "Concentration 2":
      "(.//div[text()='Concentration'])[2]/ancestor::label//input",
  }
  const snapshot = {}
  const sections = xpath.getOrderedNodes(
    "//h1[text()='Education']/following-sibling::div//div[@class[contains(., 'xbjudin')]]",
  )
  if (sections.length === 0) return null

  for (const section of sections) {
    const row = {}
    for (const [key, fieldXPath] of Object.entries(fieldXPaths)) {
      const element = xpath.getFirstOrderedNodeSafe(fieldXPath, section)
      if (!element) continue
      let value = ""
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        value = element.value
      } else if (element.tagName === "BUTTON" || element.tagName === "DIV") {
        value = element.textContent?.trim() || ""
      }
      row[key] = value
    }
    snapshot[`Education_${Object.keys(snapshot).length + 1}`] = row
  }
  return snapshot
}
