// @ts-nocheck
/**
 * Paycom Online v3 — form rule extraction and snapshot helpers.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as phoneCountryOptions from "./phone-country-options.ts"

const SECTIONS = [
  { id: "personal-information-section", type: "normal" },
  {
    id: "education-section",
    type: "complex",
    label: "Education",
    wrapType: enums.FIELD_TYPE.EDUCATION,
    entryHeaderPattern: /Institution #\d+/,
    addButtonText: "Add Institution",
  },
  {
    id: "employment-section",
    type: "complex",
    label: "Employment",
    wrapType: enums.FIELD_TYPE.EMPLOYMENT,
    entryHeaderPattern: /Employer #\d+/,
    addButtonText: "Add Employer",
  },
  {
    id: "reference-section",
    type: "complex",
    label: "Professional References",
    wrapType: enums.FIELD_TYPE.SECTION,
    entryHeaderPattern: /Professional Reference #\d+/,
    addButtonText: "Add Professional Reference",
  },
  { id: "questions-section", type: "normal" },
  { id: "voluntaryInformation-section", type: "normal" },
  { id: "taxCredit-section", type: "normal" },
  { id: "authorization-section", type: "normal" },
]

const FIELD_CANDIDATE_XPATH = `
        .//*[contains(@id, '-field')] |
        .//*[@data-floating-error-notice-type='date'] |
        .//input[not(@type='hidden')] |
        .//button[@data-testid='international-phone-button'] |
        .//select |
        .//textarea |
        .//*[@role='radiogroup'] |
        .//*[@role='listbox'] |
        .//iframe
        `

export async function getRules() {
  const rules = []
  const seen = new Set()
  for (const section of SECTIONS) {
    const root = document.getElementById(section.id)
    if (!root) continue
    if (section.type === "normal") {
      await collectNormalFields(root, rules, seen)
    } else {
      await ensureComplexSectionSeeded(root, section)
      await collectComplexSection(root, section, rules, seen)
    }
  }
  if (rules.length === 0) await collectNormalFields(document.body, rules, seen)
  return rules
}

export async function getFormSnapshot() {
  const rules = await getRules()
  const snapshot = {}
  const sectionTypes = new Set([
    enums.FIELD_TYPE.EDUCATION,
    enums.FIELD_TYPE.EMPLOYMENT,
    enums.FIELD_TYPE.SECTION,
  ])

  const readRuleValue = (rule) => {
    if (rule.type === enums.FIELD_TYPE.TEXT) return rule.$input?.value ?? null
    if (rule.type === enums.FIELD_TYPE.SELECT) {
      const selectEl = rule.$input
      if (!selectEl) return null
      const option = selectEl.options?.[selectEl.selectedIndex]
      return option?.text || selectEl.value || null
    }
    if (rule.type === enums.FIELD_TYPE.LISTBOX) {
      return rule.$input?.textContent?.trim() || null
    }
    if (rule.type === enums.FIELD_TYPE.CHECKBOX) {
      const checkboxes = rule.$checkboxs
      return Array.isArray(checkboxes)
        ? checkboxes
            .filter((el) => el.checked)
            .map((el) => el.value || "on")
        : (rule.$input?.checked ?? null)
    }
    if (rule.type === enums.FIELD_TYPE.RADIOGROUP) {
      const parent = rule.$radioParent
      if (!parent) return null
      const radios = xpath.getOrderedNodesSafe(
        ".//input[@type='radio']",
        parent,
      )
      const checked = radios.find((radio) => radio.checked) ?? null
      if (!checked) return null
      let value = checked.value
      if (checked.id) {
        const label = xpath.getFirstOrderedNodeSafe(
          `//label[@for='${checked.id}']`,
        )
        if (label) value = label.textContent?.trim() || value
      }
      return value
    }
    if (rule.type === enums.FIELD_TYPE.DATE) {
      const container = rule.$input
      if (!container) return null
      const inputs = xpath.getOrderedNodesSafe(".//input", container)
      const parts = inputs.map((el) => el.value || "").filter(Boolean)
      return parts.length ? parts.join("/") : null
    }
    return null
  }

  const isEmpty = (value) =>
    value == null ||
    value === "" ||
    (Array.isArray(value) && value.length === 0)

  const walk = (ruleList, target) => {
    for (const rule of ruleList) {
      const children = rule.children
      if (Array.isArray(children) && children.length > 0) {
        if (sectionTypes.has(rule.type)) {
          const rows = []
          for (const child of children) {
            const nested = child.children
            const row = {}
            if (Array.isArray(nested) && nested.length > 0) walk(nested, row)
            else walk([child], row)
            if (Object.keys(row).length > 0) rows.push(row)
          }
          if (rows.length > 0) target[rule.label] = rows
        } else {
          walk(children, target)
        }
        continue
      }
      const label = rule.label
      if (!label) continue
      const value = readRuleValue(rule)
      if (!isEmpty(value)) target[label] = value
    }
  }

  walk(rules, snapshot)
  return snapshot
}

async function ensureComplexSectionSeeded(sectionRoot, section) {
  if (!section.entryHeaderPattern || !section.addButtonText) return
  const hasEntry = xpath
    .getOrderedNodesSafe(".//h3[contains(text(), '#')]", sectionRoot)
    .some((el) => section.entryHeaderPattern.test(el.textContent || ""))
  if (hasEntry) return

  const addButton = findAddButton(sectionRoot, section.addButtonText)
  if (addButton) {
    addButton.click()
    for (let attempt = 0; attempt < 15; attempt++) {
      await delay.delay(150)
      const seeded = xpath
        .getOrderedNodesSafe(".//h3[contains(text(), '#')]", sectionRoot)
        .some((el) => section.entryHeaderPattern.test(el.textContent || ""))
      if (seeded) return
    }
  }
}

function findAddButton(sectionRoot, buttonText) {
  const buttons = xpath.getOrderedNodesSafe(".//button", sectionRoot)
  for (const button of buttons) {
    const text = button.textContent?.trim() || ""
    if (text.includes(buttonText)) return button
  }
  return null
}

async function collectNormalFields(root, rules, seen) {
  const candidates = xpath.getOrderedNodesSafe(FIELD_CANDIDATE_XPATH, root)
  for (const candidate of candidates) {
    if (!seen.has(candidate)) {
      isInsideSeenAncestor(candidate, seen) ||
        (await processCandidate(candidate, rules, seen))
    }
  }
}

async function collectComplexSection(sectionRoot, section, rules, seen) {
  const headers = xpath.getOrderedNodesSafe(
    ".//h3[contains(text(), '#')]",
    sectionRoot,
  )
  const entryHeaders = headers.filter(
    (el) =>
      !section.entryHeaderPattern ||
      section.entryHeaderPattern.test(el.textContent || ""),
  )

  if (entryHeaders.length === 0) {
    await collectNormalFields(sectionRoot, rules, seen)
    return
  }

  const entries = []
  const wrapType = section.wrapType ?? enums.FIELD_TYPE.SECTION
  const sectionLabel =
    section.label ??
    (wrapType === enums.FIELD_TYPE.EDUCATION ? "Education" : "Employment")

  for (let index = 0; index < entryHeaders.length; index++) {
    const header = entryHeaders[index]
    const nextHeader = entryHeaders[index + 1]
    const children = []
    const candidates = xpath.getOrderedNodesSafe(
      FIELD_CANDIDATE_XPATH,
      sectionRoot,
    )
    const inRange = candidates.filter((candidate) => {
      if (seen.has(candidate) || isInsideSeenAncestor(candidate, seen)) {
        return false
      }
      const afterHeader =
        header.compareDocumentPosition(candidate) &
        Node.DOCUMENT_POSITION_FOLLOWING
      const beforeNext =
        !nextHeader ||
        (candidate.compareDocumentPosition(nextHeader) &
          Node.DOCUMENT_POSITION_FOLLOWING)
      return afterHeader && beforeNext
    })

    for (const candidate of inRange) {
      if (!seen.has(candidate)) await processCandidate(candidate, children, seen)
    }

    if (children.length > 0) {
      entries.push({
        label: `${sectionLabel} ${index + 1}`,
        required: true,
        type: wrapType,
        children,
        options: children.map((child) => ({
          label: child.label,
          type: child.type,
          options: "options" in child ? child.options : undefined,
        })),
      })
    }
  }

  if (entries.length > 0) {
    rules.push({
      label: sectionLabel,
      required: true,
      type: wrapType,
      children: entries,
      options: entries.map((entry) => ({
        label: entry.label,
        type: entry.type,
        options: "options" in entry ? entry.options : undefined,
      })),
    })
  }
}

async function processCandidate(el, rules, seen) {
  if (isInsideSeenAncestor(el, seen) || isIgnoredPaycomCandidate(el)) return

  let rule = null

  if (isPaycomPhoneCountryButton(el)) {
    rule = buildPhoneCountryCodeRule(el)
    rules.push(rule)
    seen.add(el)
    return
  }

  if (
    el.getAttribute("role") === "radiogroup" ||
    (el.id &&
      el.id.includes("-field") &&
      xpath.getFirstOrderedNodeSafe(".//fieldset", el))
  ) {
    if (
      el.id === "authorization-acknowledge-disclosure-field" &&
      (el.tagName === "BUTTON" || el.tagName === "INPUT")
    ) {
      return
    }
    const radioParent =
      el.getAttribute("role") === "radiogroup"
        ? el
        : xpath.getFirstOrderedNodeSafe(".//*[@role='radiogroup']", el)
    if (radioParent && (rule = await buildRadioGroupRule(radioParent, el))) {
      rules.push(rule)
      seen.add(el)
      seen.add(radioParent)
      xpath
        .getOrderedNodesSafe(".//input", el)
        .forEach((inputEl) => seen.add(inputEl))
      return
    }
  }

  if (el.tagName === "INPUT" && el.type === "radio") {
    const container =
      el.closest("fieldset") ||
      el.closest('[id$="-field"]') ||
      el.parentElement?.parentElement
    if (container && !seen.has(container)) {
      const radioParent =
        xpath.getFirstOrderedNodeSafe(".//*[@role='radiogroup']", container) ||
        container
      if ((rule = await buildRadioGroupRule(radioParent, container))) {
        rules.push(rule)
        seen.add(container)
        xpath
          .getOrderedNodesSafe(".//input", container)
          .forEach((inputEl) => seen.add(inputEl))
        return
      }
    }
  }

  if (
    el.getAttribute("data-floating-error-notice-type") === "date" &&
    (rule = await buildDateRule(el))
  ) {
    rules.push(rule)
    seen.add(el)
    xpath
      .getOrderedNodesSafe(".//input", el)
      .forEach((inputEl) => seen.add(inputEl))
    return
  }

  if (el.getAttribute("role") === "listbox" && !el.querySelector("ul")) {
    const inner = xpath.getFirstOrderedNodeSafe(".//input | .//select", el)
    if (inner && !seen.has(inner) && (rule = await buildInputRule(inner, el))) {
      rules.push(rule)
      seen.add(el)
      seen.add(inner)
      return
    }
  }

  if (el.tagName === "IFRAME") {
    const iframeRule = await buildIframeRule(el)
    if (iframeRule) {
      rules.push(iframeRule)
      seen.add(el)
      return
    }
  }

  if (["INPUT", "SELECT", "TEXTAREA", "BUTTON"].includes(el.tagName)) {
    if (
      (el.tagName === "TEXTAREA" && !el.hasAttribute("aria-label")) ||
      (el.tagName === "BUTTON" &&
        (!el.id || !el.id.startsWith("CheckboxOuterID-")))
    ) {
      return
    }
    const inputType = el.getAttribute("type")?.toLowerCase()
    if (inputType === "radio") return
    if ((rule = await buildInputRule(el))) {
      rules.push(rule)
      seen.add(el)
    }
  }
}

export function isIgnoredPaycomCandidate(el) {
  const tag = el.tagName.toUpperCase()
  const id = el.getAttribute("id") || ""
  const name = el.getAttribute("name") || ""
  if (tag === "TEXTAREA") return isCaptchaResponseField(id, name)
  if (tag !== "IFRAME") return false
  const src = el.getAttribute("src") || ""
  const title = el.getAttribute("title") || ""
  return !!(isCaptchaIframe(src, title) || isHiddenIframe(el))
}

export function isPaycomPhoneCountryButton(el) {
  return (
    el.tagName === "BUTTON" &&
    el.getAttribute("data-testid") === "international-phone-button"
  )
}

export function getPaycomPhoneCountryCodeOptions() {
  return [...phoneCountryOptions.PAYCOM_PHONE_COUNTRY_CODE_OPTIONS]
}

function buildPhoneCountryCodeRule(button) {
  const phoneInput = document.querySelector(
    'input[data-testid*="internationalphonenumbers"], input[name*="phone" i][type="text"]',
  )
  const wrapper =
    button.closest(".uiLibIntPhone") ||
    button.closest('[aria-label*="Phone" i]')
  return {
    label: "Phone Country Code",
    required: !!(
      phoneInput?.required ||
      String(wrapper?.className || "").includes("required")
    ),
    type: enums.FIELD_TYPE.LISTBOX,
    $input: button,
    options: getPaycomPhoneCountryCodeOptions(),
  }
}

function isCaptchaResponseField(id, name) {
  const combined = `${id} ${name}`.toLowerCase()
  return /(?:^|[-_])(?:g-)?recaptcha-response|(?:^|[-_])h-captcha-response|(?:^|[-_])captcha-response/.test(
    combined,
  )
}

function isCaptchaIframe(src, title) {
  const combined = `${src} ${title}`.toLowerCase()
  return /hcaptcha|recaptcha|captcha/.test(combined)
}

function isHiddenIframe(el) {
  const style = el.getAttribute("style") || ""
  const ariaHidden = el.getAttribute("aria-hidden")
  if (
    ariaHidden === "true" ||
    /display\s*:\s*none|visibility\s*:\s*hidden/i.test(style)
  ) {
    return true
  }
  const rect = el.getBoundingClientRect?.()
  return !!(rect && (rect.width === 0 || rect.height === 0))
}

async function buildRadioGroupRule(radioParent, container) {
  const labelEl = findNearbyLabel(container) || findNearbyLabel(radioParent)
  const label = labelEl
    ? cleanLabelText(labelEl.textContent || "")
    : getLabelFromFor(container) ||
      getAriaOrAttributeLabel(container) ||
      ""
  if (!label || /^(yes|no)$/i.test(label)) return null

  const radios = xpath.getOrderedNodesSafe(
    ".//input[@type='radio']",
    radioParent,
  )
  const options = radios
    .map((radio) => {
      const text =
        radio.closest("label")?.textContent?.trim() || radio.value
      return text.replace(/^Yes|^No/, "").trim() || text
    })
    .filter((text) => text)
  const finalOptions = options.length > 0 ? options : ["Yes", "No"]

  return {
    label,
    required: isRequired(container, labelEl),
    type: enums.FIELD_TYPE.RADIOGROUP,
    $input: radios[0],
    $radioParent: radioParent,
    options: finalOptions,
  }
}

async function buildDateRule(container) {
  let labelEl = null
  const dateDiv = xpath.getFirstOrderedNodeSafe(
    ".//div[text()[contains(., 'Date')]]",
    container,
  )
  let label = ""
  if (dateDiv && dateDiv.textContent) {
    label = cleanLabelText(dateDiv.textContent)
  }
  if (!label) label = getLabelFromFor(container)
  if (!label && (labelEl = findTypographyLabel(container))) {
    label = cleanLabelText(labelEl.textContent || "")
  }
  if (!label) label = getAriaOrAttributeLabel(container)
  if (!label) return null

  return {
    label,
    required: isRequired(container, labelEl),
    type: enums.FIELD_TYPE.DATE,
    $input: container,
    $label: container,
  }
}

async function buildIframeRule(iframe) {
  let labelEl = null
  let parent = iframe.parentElement
  for (let depth = 0; depth < 5 && parent; depth++) {
    const typography = parent.querySelector('p[data-testid="typography"]')
    const previous = parent.previousElementSibling
    let previousTypography = null
    if (previous) {
      previousTypography =
        previous.tagName === "P" &&
        previous.getAttribute("data-testid") === "typography"
          ? previous
          : previous.querySelector('p[data-testid="typography"]')
    }
    if (typography && isMeaningfulLabelText(typography)) {
      labelEl = typography
      break
    }
    if (previousTypography && isMeaningfulLabelText(previousTypography)) {
      labelEl = previousTypography
      break
    }
    parent = parent.parentElement
  }

  if (!labelEl) labelEl = findTypographyLabel(iframe)
  if (!labelEl) return null

  const label = cleanLabelText(labelEl.textContent || "")
  if (!label) return null

  return {
    label,
    required: isRequired(iframe, labelEl),
    type: enums.FIELD_TYPE.TEXT,
    $input: iframe,
    $label: labelEl,
  }
}

async function buildInputRule(el, listboxContainer) {
  if (
    el.id === "authorization-acknowledge-disclosure-field" &&
    el.tagName === "INPUT"
  ) {
    return null
  }

  const phoneLabel = getPaycomInternationalPhoneNumberLabel(el)
  let label = phoneLabel || getLabelFromFor(el)
  let labelEl = null
  let isCheckbox = el.getAttribute("type") === "checkbox"

  if (phoneLabel) {
    console.info(
      "[Paycom-v3][rules] international phone label resolved",
      { inputId: el.id, labelSource: "aria-label" },
    )
  }

  if (el.id && el.id.startsWith("CheckboxOuterID-")) isCheckbox = true
  if (el.id) labelEl = document.querySelector(`label[for="${el.id}"]`)
  if (!labelEl) labelEl = el.closest("label")
  if (labelEl) {
    const forId = labelEl.getAttribute("for")
    if (forId && forId !== el.id) labelEl = null
  }

  if (listboxContainer && !label) {
    const nearby = findTypographyLabel(listboxContainer)
    if (nearby) {
      labelEl = nearby
      label = cleanLabelText(nearby.textContent || "")
    }
  }

  if (label && /^(text question|.*-field.*)$/i.test(label)) {
    const nearby = findTypographyLabel(el)
    if (
      nearby &&
      (nearby.textContent?.trim().length || 0) > label.length
    ) {
      labelEl = nearby
      label = cleanLabelText(nearby.textContent || "")
    }
  }

  if (!label && !isCheckbox && (labelEl = findTypographyLabel(listboxContainer || el))) {
    label = cleanLabelText(labelEl.textContent || "")
  }
  if (!label && !isCheckbox) label = getAriaOrAttributeLabel(el)
  if (!label && !isCheckbox) return null

  let finalLabel = label
  if (isCheckbox && !finalLabel) {
    finalLabel =
      el.closest("label")?.textContent?.trim() ||
      xpath
        .getFirstOrderedNodeSafe(
          "./following-sibling::div//p",
          el.parentElement,
        )
        ?.textContent?.trim() ||
      ""
  }
  if (!finalLabel && !isCheckbox) return null

  if (el.tagName === "SELECT") {
    const options = Array.from(el.options)
      .map((option) => option.text)
      .filter((text) => text)
    const lowerOptions = options.map((text) => text.toLowerCase())
    if (
      lowerOptions.includes("hour") &&
      lowerOptions.includes("year") &&
      (lowerOptions.includes("week") || lowerOptions.includes("month"))
    ) {
      finalLabel = "Pay period"
    }
    if (
      finalLabel === "Institution Type" ||
      (lowerOptions.includes("university") &&
        lowerOptions.includes("high school"))
    ) {
      finalLabel = "Institution Type"
    }
    return {
      label: finalLabel,
      required: isRequired(el, labelEl),
      type: enums.FIELD_TYPE.SELECT,
      $input: el,
      options,
    }
  }

  if (isCheckbox) {
    return {
      label: finalLabel,
      required: isRequired(el, labelEl),
      type: enums.FIELD_TYPE.CHECKBOX,
      $checkboxs: [el],
      options: [],
    }
  }

  if (el.getAttribute("type") === "file") return null

  if (el.tagName === "BUTTON" && el.hasAttribute("aria-label")) {
    const aria = cleanLabelText(el.getAttribute("aria-label") || "")
    const cleaned = cleanLabelText(finalLabel)
    if (!aria.includes(cleaned) && !cleaned.includes(aria)) return null
  }

  return {
    label: finalLabel,
    required: isRequired(el, labelEl),
    type: enums.FIELD_TYPE.TEXT,
    $input: el,
  }
}

function findNearbyLabel(container) {
  const typography = findTypographyLabel(container)
  if (typography) return typography
  return xpath.getFirstOrderedNodeSafe(".//label | .//span[@label]", container)
}

function findTypographyLabel(startEl) {
  let current = startEl
  let depth = 0
  const maxDepth = 20
  while (current && depth < maxDepth) {
    let sibling = current.previousElementSibling
    while (sibling) {
      const typographies = sibling.querySelectorAll(
        'p[data-testid="typography"]',
      )
      for (const node of Array.from(typographies)) {
        if (isMeaningfulLabelText(node)) return node
      }
      if (
        sibling.tagName === "P" &&
        sibling.getAttribute("data-testid") === "typography" &&
        isMeaningfulLabelText(sibling)
      ) {
        return sibling
      }
      const paragraphs = sibling.querySelectorAll("p")
      for (const node of Array.from(paragraphs)) {
        if (isMeaningfulLabelText(node, 5)) return node
      }
      if (
        (sibling.tagName === "P" && isMeaningfulLabelText(sibling, 5)) ||
        (/^H[1-6]$/.test(sibling.tagName) &&
          isMeaningfulLabelText(sibling)) ||
        (sibling.tagName === "LABEL" && isMeaningfulLabelText(sibling))
      ) {
        return sibling
      }
      if (
        (sibling.tagName === "SPAN" || sibling.tagName === "DIV") &&
        isMeaningfulLabelText(sibling, 2, 100)
      ) {
        const nestedInput = sibling.querySelector(
          "input, select, textarea",
        )
        if (!nestedInput) return sibling
      }
      sibling = sibling.previousElementSibling
    }
    current = current.parentElement
    depth++
  }
  return null
}

function isMeaningfulLabelText(el, minLength = 2, maxLength = 1e3) {
  const text = el.textContent?.trim()
  return !(
    !text ||
    text.length <= minLength ||
    (maxLength < 1e3 && text.length > maxLength) ||
    /^\d+\.?$/.test(text)
  )
}

function getLabelFromFor(el) {
  if (el.id) {
    const label = document.querySelector(`label[for="${el.id}"]`)
    if (label) return cleanLabelText(label.textContent || "")
  }
  const closest = el.closest("label")
  if (closest) {
    const clone = closest.cloneNode(true)
    const controls = clone.querySelectorAll("input, select, textarea")
    controls.forEach((control) => control.remove())
    return cleanLabelText(clone.textContent || "")
  }
  return ""
}

export function getPaycomInternationalPhoneNumberLabel(el) {
  if (el.tagName !== "INPUT" || !el.closest(".uiLibIntPhone")) return ""
  const testId = el.getAttribute("data-testid") || ""
  return testId.endsWith("internationalphonenumbers")
    ? cleanLabelText(el.getAttribute("aria-label") || "") || "Phone Number"
    : ""
}

function getAriaOrAttributeLabel(el) {
  const labeled = el.closest("[label]")
  if (labeled) return cleanLabelText(labeled.getAttribute("label") || "")
  if (el.getAttribute("aria-label")) {
    const aria = el.getAttribute("aria-label") || ""
    if (!/field|question/i.test(aria) || aria.length > 30) {
      return cleanLabelText(aria)
    }
  }
  return ""
}

function cleanLabelText(text) {
  return text.replace(/\*/g, "").trim()
}

function isRequired(el, labelEl) {
  if (
    el.hasAttribute("required") ||
    el.getAttribute("aria-required") === "true"
  ) {
    return true
  }
  if (labelEl) {
    if (labelEl.textContent?.includes("*")) return true
    const next = labelEl.nextElementSibling
    if (
      next &&
      next.tagName === "SPAN" &&
      next.textContent?.includes("*")
    ) {
      return true
    }
  }
  const wrapper = el.closest("div")
  return !!(
    wrapper &&
    wrapper.textContent?.includes("*") &&
    wrapper.children.length < 5
  )
}

function isInsideSeenAncestor(el, seen) {
  let parent = el.parentElement
  while (parent) {
    if (seen.has(parent)) return true
    parent = parent.parentElement
  }
  return false
}

export {
  getPaycomInternationalPhoneNumberLabel as getPaycomInternationalPhoneNumberLabelForTests,
  getPaycomPhoneCountryCodeOptions as getPaycomPhoneCountryCodeOptionsForTests,
}
