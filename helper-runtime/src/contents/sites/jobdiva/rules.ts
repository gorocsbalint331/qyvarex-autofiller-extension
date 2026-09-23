// @ts-nocheck
/**
 * JobDiva — form rule extraction and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as jobdivaAnswer from "./answer.ts"
import * as signinCredentials from "./signin-credentials.ts"

const classContains = (className) =>
  `contains(concat(" ", normalize-space(@class), " "), " ${className} ")`

const FORM_LAYOUT_XPATH = `.//div[${classContains("jd-form-layout")}]`
const CHECKBOX_LABEL_XPATH = `.//label[${classContains("jd-checkbox")}]`
const LABEL_XPATH = `.//label[${classContains("jd-label")}]`
const SELECT_XPATH = `.//div[${classContains("jd-form-select")}]`
const PHONE_XPATH = `.//div[${classContains("jd-form-phone")}]`
const TEXT_INPUT_XPATH = `.//input[${classContains("jd-form")} and not(@type="checkbox") and not(@type="radio") and not(@type="hidden") and not(@type="submit") and not(@type="button") and not(@type="reset") and not(@type="file")]`
const TEXTAREA_XPATH = `.//textarea[${classContains("jd-form")}]`
const DROPDOWN_ITEM_XPATH = `.//div[${classContains("dropdown-menu")}]//*[${classContains("dropdown-item")}]`
const EDUCATION_CONTAINER_XPATH =
  './/*[contains(translate(@id, "EDUCATION", "education"), "education") or contains(translate(@class, "EDUCATION", "education"), "education")]'

function cleanLabel(value) {
  return value
    .replace(/[*\u2731]/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function isVisible(element) {
  return (
    element.getClientRects().length > 0 &&
    window.getComputedStyle(element).display !== "none" &&
    window.getComputedStyle(element).visibility !== "hidden"
  )
}

export function isUnsupportedJobdivaReferenceLabel(label) {
  const text = cleanLabel(label).toLowerCase()
  return (
    !!text &&
    !text.includes("preference") &&
    /\breferences?\b/.test(text)
  )
}

function getRegTitleText(container) {
  if (!container) return ""
  const title = container.querySelector(".jd-reg-title h2, .jd-reg-title")
  return cleanLabel(title?.textContent || "")
}

export function isInsideUnsupportedJobdivaReferenceSection(element) {
  if (element.closest(".jd-reg-card.id-reg-reference")) return true
  const containers = [
    element.closest(".row"),
    element.closest(".modal-content"),
    element.closest(".job-app-main"),
    element.closest("form"),
  ]
  return containers.some((container) =>
    isUnsupportedJobdivaReferenceLabel(getRegTitleText(container)),
  )
}

function collectVisibleText(element) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement
      if (!parent || parent.closest("a, button, script, style, svg")) {
        return NodeFilter.FILTER_REJECT
      }
      return (node.textContent || "").trim()
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT
    },
  })
  const parts = []
  let node = walker.nextNode()
  while (node) {
    const text = (node.textContent || "").trim()
    if (text) parts.push(text)
    node = walker.nextNode()
  }
  return cleanLabel(parts.join(" "))
}

function directTextContent(element) {
  const text = Array.from(element.childNodes)
    .filter((node) => node.nodeType === Node.TEXT_NODE)
    .map((node) => node.textContent || "")
    .join(" ")
  return cleanLabel(text)
}

function getRadioDisplayText(radio) {
  const forLabel = radio.id
    ? cleanLabel(
        document.querySelector(`label[for="${radio.id}"]`)?.textContent || "",
      )
    : ""
  const closestLabel = cleanLabel(radio.closest("label")?.textContent || "")
  const siblingLabel = cleanLabel(radio.nextElementSibling?.textContent || "")
  const groupLabel = cleanLabel(
    radio.closest(".radio-button")?.textContent || "",
  )
  return (
    forLabel ||
    closestLabel ||
    siblingLabel ||
    groupLabel ||
    cleanLabel(radio.value)
  )
}

export function findLabel(element) {
  const layout = xpath.getFirstOrderedNodeSafe(
    `ancestor::div[${classContains("jd-form-layout")}][1]`,
    element,
  )
  if (layout) {
    const label = xpath.getFirstOrderedNodeSafe(LABEL_XPATH, layout)
    if (label) return label
  }
  const checkbox = xpath.getFirstOrderedNodeSafe(
    `ancestor::label[${classContains("jd-checkbox")}][1]`,
    element,
  )
  if (checkbox) {
    const nested = xpath.getFirstOrderedNodeSafe("./label", checkbox)
    return nested || checkbox
  }
  return null
}

function isRequired(container, label) {
  if (label && /\*/.test(label.textContent || "")) return true
  const required = xpath.getFirstOrderedNodeSafe(
    ".//input[@required or @aria-required='true'] | .//textarea[@required or @aria-required='true'] | .//select[@required or @aria-required='true']",
    container,
  )
  return !!required
}

function collectDropdownOptions(container) {
  const items = xpath.getOrderedNodesSafe(DROPDOWN_ITEM_XPATH, container)
  const options = []
  const seen = new Set()
  for (const item of items) {
    const text = (item.textContent || "").trim()
    if (text && !seen.has(text)) {
      seen.add(text)
      options.push(text)
    }
  }
  return options
}

function toRuleOptions(children) {
  return children.map((child) => ({
    label: child.label,
    type: child.type,
    options: child.options || [],
  }))
}

export function buildJobdivaPhoneSnapshotEntries(phone) {
  const entries = {
    [jobdivaAnswer.JOBDIVA_PHONE_COUNTRY_CODE_LABEL]: String(
      phone.country || "",
    ).trim(),
    [cleanLabel(phone.label) || "Phone"]: String(phone.text || "").trim(),
  }
  if (phone.type !== undefined) {
    entries[jobdivaAnswer.JOBDIVA_PHONE_TYPE_LABEL] = String(
      phone.type || "",
    ).trim()
  }
  return entries
}

function readSelectDisplayValue(container) {
  const selected = xpath.getFirstOrderedNodeSafe(
    `.//*[${classContains("dropdown-item")} and contains(concat(" ", normalize-space(@class), " "), " selected ")]`,
    container,
  )
  if (selected) return cleanLabel(selected.textContent || "")

  const truncated = xpath.getFirstOrderedNodeSafe(
    `.//span[${classContains("text-truncate")}]`,
    container,
  )
  if (truncated) return cleanLabel(truncated.textContent || "")

  const button = xpath.getFirstOrderedNodeSafe(
    './/button[@data-bs-toggle="dropdown"]',
    container,
  )
  return cleanLabel(button?.textContent || "")
}

export function buildJobdivaSelectSnapshotEntries(label, values) {
  const cleaned = cleanLabel(label)
  if (!cleaned) return []
  const texts = values.map((value) => cleanLabel(String(value ?? "")))
  if (["From", "To"].includes(cleaned) && texts.length >= 2) {
    return [
      [`${cleaned} Month`, texts[0]],
      [`${cleaned} Year`, texts[1]],
    ].filter(([, value]) => !!value)
  }
  const first = texts.find(Boolean)
  return first ? [[cleaned, first]] : []
}

function buildSelectRule(layout, select, labelEl, labelText) {
  return {
    label: cleanLabel(labelText),
    type: enums.FIELD_TYPE.SELECT,
    required: isRequired(layout, labelEl),
    options: collectDropdownOptions(select),
    $input: select,
    $label: labelEl,
  }
}

function buildPhoneSectionRule(layout, labelEl) {
  const phone = xpath.getFirstOrderedNodeSafe(PHONE_XPATH, layout)
  if (!phone) return null

  const typeSelect = xpath.getFirstOrderedNodeSafe(
    `.//div[${classContains("jd-form-select")}][1]`,
    layout,
  )
  const countrySelect = xpath.getFirstOrderedNodeSafe(
    `.//div[${classContains("dropright")}][1]`,
    phone,
  )
  const textInput = xpath.getFirstOrderedNodeSafe(
    './/input[@type="tel"]',
    phone,
  )
  if (!countrySelect || !textInput) return null

  const required = isRequired(layout, labelEl)
  const children = []
  if (typeSelect) {
    children.push({
      label: "type",
      type: enums.FIELD_TYPE.SELECT,
      required,
      options: collectDropdownOptions(typeSelect),
      $input: typeSelect,
      $label: labelEl,
    })
  }
  children.push(
    {
      label: "country",
      type: enums.FIELD_TYPE.SELECT,
      required,
      options: collectDropdownOptions(countrySelect),
      $input: countrySelect,
      $label: labelEl,
    },
    {
      label: "text",
      type: enums.FIELD_TYPE.TEXT,
      required,
      $input: textInput,
      $label: labelEl,
    },
  )

  return {
    label: cleanLabel(labelEl.textContent || ""),
    type: enums.FIELD_TYPE.SECTION,
    required,
    children,
    options: toRuleOptions(children),
    $input: phone,
  }
}

export async function getRule(element) {
  if (!element) return null

  const layout = element.classList.contains("jd-form-layout")
    ? element
    : xpath.getFirstOrderedNodeSafe(
        `ancestor::div[${classContains("jd-form-layout")}][1]`,
        element,
      ) || element

  if (isInsideUnsupportedJobdivaReferenceSection(layout)) return null

  const labelEl = xpath.getFirstOrderedNodeSafe(LABEL_XPATH, layout)
  const checkboxLabel =
    element.tagName === "LABEL" && element.classList.contains("jd-checkbox")
      ? element
      : null
  const checkboxTextLabel = checkboxLabel
    ? xpath.getFirstOrderedNodeSafe("./label", checkboxLabel) || checkboxLabel
    : null
  const effectiveLabel = checkboxTextLabel || labelEl
  if (!effectiveLabel) return null

  const label = checkboxLabel
    ? collectVisibleText(effectiveLabel) ||
      cleanLabel(checkboxLabel.textContent || "")
    : cleanLabel(effectiveLabel.textContent || "")
  if (isUnsupportedJobdivaReferenceLabel(label)) return null

  const phoneRule = labelEl ? buildPhoneSectionRule(layout, labelEl) : null
  if (phoneRule) return phoneRule

  let fieldType = null
  let input = null

  if (checkboxLabel) {
    input = xpath.getFirstOrderedNodeSafe(
      './/input[@type="checkbox"]',
      checkboxLabel,
    )
    fieldType = input ? enums.FIELD_TYPE.CHECKBOX : null
  } else {
    const radio = xpath.getFirstOrderedNodeSafe(
      './/input[@type="radio"]',
      layout,
    )
    const textInput = xpath.getFirstOrderedNodeSafe(TEXT_INPUT_XPATH, layout)
    const textarea = xpath.getFirstOrderedNodeSafe(TEXTAREA_XPATH, layout)
    const select = xpath.getFirstOrderedNodeSafe(SELECT_XPATH, layout)

    if (radio) {
      fieldType = enums.FIELD_TYPE.RADIOGROUP
      input = radio
    } else if (textInput) {
      fieldType = enums.FIELD_TYPE.TEXT
      input = textInput
    } else if (textarea) {
      fieldType = enums.FIELD_TYPE.TEXT
      input = textarea
    } else if (select) {
      fieldType = enums.FIELD_TYPE.SELECT
      input = select
    }
  }

  if (!fieldType || !input) return null

  const required = isRequired(checkboxLabel || layout, effectiveLabel)
  let options = []
  if (fieldType === enums.FIELD_TYPE.SELECT) {
    options = collectDropdownOptions(input)
  }

  if (fieldType === enums.FIELD_TYPE.RADIOGROUP) {
    const radioParent = layout || input.closest("form")
    const allRadios = Array.from(
      (radioParent || document).querySelectorAll('input[type="radio"]'),
    )
    const named = input
    const group = named.name
      ? allRadios.filter((radio) => radio.name === named.name)
      : allRadios
    const labels = group
      .map((radio) => {
        const forLabel = radio.id
          ? (
              document.querySelector(`label[for="${radio.id}"]`)?.textContent ||
              ""
            ).trim()
          : ""
        const closest = radio.closest("label")?.textContent?.trim() || ""
        return cleanLabel(forLabel || closest || radio.value)
      })
      .filter(Boolean)

    return {
      label,
      type: fieldType,
      required,
      options: Array.from(new Set(labels)),
      $input: named,
      $radioParent: radioParent || layout,
      $label: effectiveLabel,
    }
  }

  if (fieldType === enums.FIELD_TYPE.CHECKBOX) {
    return {
      label,
      type: fieldType,
      required,
      options: [label],
      $checkboxs: [input],
      $input: input,
      $label: effectiveLabel,
    }
  }

  return {
    label,
    type: fieldType,
    required,
    options,
    $input: input,
    $label: effectiveLabel,
  }
}

function isInsideEduExp(element) {
  return !!xpath.getFirstOrderedNodeSafe(
    `ancestor-or-self::*[${classContains("education")} or ${classContains("id-reg-education")} or ${classContains("id-reg-workexperience")} or contains(translate(@id, "EDUCATIONMPLYRCWORK", "educationmplyrcwork"), "education") or contains(translate(@id, "EDUCATIONMPLYRCWORK", "educationmplyrcwork"), "workexperience")][1]`,
    element,
  )
}

async function extractRulesFromContainer(container) {
  const rules = []
  const layouts = xpath.getOrderedNodesSafe(
    `.//div[${classContains("jd-form-layout")}]`,
    container,
  )
  const seen = new Set()

  for (const layout of layouts) {
    const labelEl = xpath.getFirstOrderedNodeSafe(LABEL_XPATH, layout)
    const selects = xpath.getOrderedNodesSafe(SELECT_XPATH, layout)

    if (
      labelEl &&
      selects.length >= 2 &&
      ["From", "To"].includes(cleanLabel(labelEl.textContent || ""))
    ) {
      const base = cleanLabel(labelEl.textContent || "")
      rules.push(
        buildSelectRule(layout, selects[0], labelEl, `${base} Month`),
        buildSelectRule(layout, selects[1], labelEl, `${base} Year`),
      )
      continue
    }

    const rule = await getRule(layout)
    if (!rule) continue
    const key = `${rule.label}:${rule.type}`
    if (!seen.has(key)) {
      seen.add(key)
      rules.push(rule)
    }
  }

  return rules
}

function toSectionOptions(children) {
  return toRuleOptions(children)
}

function getRadioGroupLabel(group) {
  const direct = directTextContent(group)
  if (direct) return direct
  const heading = group.querySelector(
    ".jd-label, label, legend, h1, h2, h3, h4, h5, h6",
  )
  if (heading) return cleanLabel(heading.textContent || "")
  const radio = group.querySelector('input[type="radio"]')
  return cleanLabel(radio?.name || "")
}

function extractStandaloneRadioGroups(root, seen, options = {}) {
  const rules = []
  const groups = Array.from(root.querySelectorAll(".radio-buttons-div"))

  for (const group of groups) {
    if (group.closest(".jd-form-layout")) continue
    if (options.skipEduExp && isInsideEduExp(group)) continue
    if (isInsideUnsupportedJobdivaReferenceSection(group)) continue

    const radios = Array.from(
      group.querySelectorAll('input[type="radio"]'),
    ).filter(isVisible)
    if (radios.length === 0) continue

    const label = getRadioGroupLabel(group)
    if (!label || isUnsupportedJobdivaReferenceLabel(label)) continue

    const key = `${label}:${enums.FIELD_TYPE.RADIOGROUP}`
    if (seen.has(key)) continue
    seen.add(key)

    const optionsList = radios.map(getRadioDisplayText).filter(Boolean)
    rules.push({
      label,
      type: enums.FIELD_TYPE.RADIOGROUP,
      required:
        /\*/.test(directTextContent(group)) ||
        radios.some(
          (radio) =>
            radio.required || radio.getAttribute("aria-required") === "true",
        ),
      options: Array.from(new Set(optionsList)),
      $input: radios[0],
      $radioParent: group,
      $radios: radios,
    })
  }

  return rules
}

function queryExpandedCards(root, selector) {
  return Array.from(root.querySelectorAll(selector)).filter((card) =>
    !!card.querySelector(".jd-form-layout"),
  )
}

export async function getEducationRules() {
  return getEducationRulesForRoot(document)
}

export async function getEducationRulesForRoot(root = document) {
  const rules = []
  const cards = getEducationContainers(root)
  for (const card of cards) {
    const children = await extractRulesFromContainer(card)
    if (children.length === 0) continue
    rules.push({
      type: enums.FIELD_TYPE.EDUCATION,
      label: "Education",
      required: true,
      children,
      options: toSectionOptions(children),
    })
  }
  return rules
}

export async function getExperienceRules() {
  return getExperienceRulesForRoot(document)
}

export async function getExperienceRulesForRoot(root = document) {
  const rules = []
  const cards = getExperienceContainers(root)
  for (const card of cards) {
    const children = await extractRulesFromContainer(card)
    if (children.length === 0) continue
    rules.push({
      type: enums.FIELD_TYPE.EMPLOYMENT,
      label: "Experience",
      required: true,
      children,
      options: toSectionOptions(children),
    })
  }
  return rules
}

export async function extractRules(root = document, mode = "regular") {
  const rules = []
  const seen = new Set()
  const layouts = xpath.getOrderedNodesSafe(FORM_LAYOUT_XPATH, root)

  for (const layout of layouts) {
    if (isInsideEduExp(layout)) continue
    const rule = await getRule(layout)
    if (!rule) continue
    const key = `${rule.label}:${rule.type}`
    if (!seen.has(key)) {
      seen.add(key)
      rules.push(rule)
    }
  }

  const checkboxLabels = xpath.getOrderedNodesSafe(CHECKBOX_LABEL_XPATH, root)
  for (const checkbox of checkboxLabels) {
    if (isInsideEduExp(checkbox)) continue
    const rule = await getRule(checkbox)
    if (!rule) continue
    const key = `${rule.label}:${rule.type}`
    if (!seen.has(key)) {
      seen.add(key)
      rules.push(rule)
    }
  }

  rules.push(...extractStandaloneRadioGroups(root, seen))

  if (mode === "regular") {
    const education = await getEducationRulesForRoot(root)
    if (education.length > 0) rules.push(education[0])
    const experience = await getExperienceRulesForRoot(root)
    if (experience.length > 0) rules.push(experience[0])
  }

  return rules
}

export function excludeJobdivaSignInRules(rules, root = document) {
  const signInInputs = signinCredentials.getJobdivaSignInInputs(root)
  if (signInInputs.size === 0) return rules

  return rules.flatMap((rule) => {
    if (signInInputs.has(rule.$input)) return []
    if (
      rule.type !== enums.FIELD_TYPE.SECTION ||
      !Array.isArray(rule.children)
    ) {
      return [rule]
    }
    const children = excludeJobdivaSignInRules(rule.children, root)
    return children.length > 0 ? [{ ...rule, children }] : []
  })
}

function getEducationContainers(root = document) {
  const cards = queryExpandedCards(root, ".jd-reg-card.id-reg-education")
  if (cards.length > 0) return cards
  const fallback = xpath.getFirstOrderedNodeSafe(
    EDUCATION_CONTAINER_XPATH,
    root,
  )
  return fallback ? [fallback] : []
}

function getExperienceContainers(root = document) {
  return queryExpandedCards(root, ".jd-reg-card.id-reg-workexperience")
}

function snapshotFromRoot(root = document, options = {}) {
  const snapshot = {}
  const skipEduExp = options.skipEduExp === true
  const layouts = xpath.getOrderedNodesSafe(FORM_LAYOUT_XPATH, root)

  for (const layout of layouts) {
    if (skipEduExp && isInsideEduExp(layout)) continue
    if (isInsideUnsupportedJobdivaReferenceSection(layout)) continue

    const labelEl = xpath.getFirstOrderedNodeSafe(LABEL_XPATH, layout)
    if (!labelEl) continue
    const label = cleanLabel(labelEl.textContent || "")
    if (!label) continue

    const phoneRule = buildPhoneSectionRule(layout, labelEl)
    if (phoneRule) {
      const typeChild = phoneRule.children.find(
        (child) => child.label === "type",
      )
      const countryChild = phoneRule.children.find(
        (child) => child.label === "country",
      )
      const textChild = phoneRule.children.find(
        (child) => child.label === "text",
      )
      const typeValue = typeChild
        ? readSelectDisplayValue(typeChild.$input)
        : ""
      const countryValue = countryChild
        ? readSelectDisplayValue(countryChild.$input)
        : ""
      const textValue = textChild?.$input.value || ""
      Object.assign(
        snapshot,
        buildJobdivaPhoneSnapshotEntries({
          label,
          type: typeChild ? typeValue : undefined,
          country: countryValue,
          text: textValue,
        }),
      )
      continue
    }

    const textInput = xpath.getFirstOrderedNodeSafe(TEXT_INPUT_XPATH, layout)
    if (textInput) {
      if (options.excludedInputs?.has(textInput)) continue
      snapshot[label] =
        textInput.type === "password" ? "" : textInput.value || ""
      continue
    }

    const textarea = xpath.getFirstOrderedNodeSafe(TEXTAREA_XPATH, layout)
    if (textarea) {
      snapshot[label] = textarea.value || ""
      continue
    }

    const selects = xpath.getOrderedNodesSafe(SELECT_XPATH, layout)
    if (selects.length > 0) {
      const values = selects.map((select) => readSelectDisplayValue(select))
      for (const [key, value] of buildJobdivaSelectSnapshotEntries(
        label,
        values,
      )) {
        snapshot[key] = value
      }
    }
  }

  const checkboxLabels = xpath.getOrderedNodesSafe(CHECKBOX_LABEL_XPATH, root)
  for (const checkboxLabel of checkboxLabels) {
    if (skipEduExp && isInsideEduExp(checkboxLabel)) continue
    if (isInsideUnsupportedJobdivaReferenceSection(checkboxLabel)) continue

    const checkbox = xpath.getFirstOrderedNodeSafe(
      './/input[@type="checkbox"]',
      checkboxLabel,
    )
    if (!checkbox) continue

    const nested = xpath.getFirstOrderedNodeSafe("./label", checkboxLabel)
    const label =
      collectVisibleText(nested || checkboxLabel) ||
      cleanLabel(checkboxLabel.textContent || "")
    if (label) snapshot[label] = checkbox.checked ? "Yes" : "No"
  }

  const radioSeen = new Set()
  for (const rule of extractStandaloneRadioGroups(root, radioSeen, {
    skipEduExp,
  })) {
    const radios = rule.$radios || []
    const checked = radios.find((radio) => radio.checked)
    snapshot[rule.label] = checked ? getRadioDisplayText(checked) : ""
  }

  return snapshot
}

export function getFormSnapshot(root = document) {
  const excludedInputs = signinCredentials.getJobdivaSignInInputs(root)
  const snapshot = snapshotFromRoot(root, {
    skipEduExp: true,
    excludedInputs,
  })

  const educationCards = getEducationContainers(root)
  if (educationCards.length > 0) {
    const education = educationCards.map((card) =>
      snapshotFromRoot(card, { excludedInputs }),
    )
    snapshot.education = education.filter(
      (entry) => Object.keys(entry).length > 0,
    )
  }

  const experienceCards = getExperienceContainers(root)
  if (experienceCards.length > 0) {
    const employment = experienceCards.map((card) =>
      snapshotFromRoot(card, { excludedInputs }),
    )
    snapshot.employment = employment.filter(
      (entry) => Object.keys(entry).length > 0,
    )
  }

  return snapshot
}
