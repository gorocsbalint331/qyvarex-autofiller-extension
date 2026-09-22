// @ts-nocheck
/**
 * ADP WorkforceNow — form rule extraction, VSID race helpers, and snapshots.
 */

import * as autofillAnswerPairTracking from "../autofill-answer-pair-tracking.js"
import * as enums from "../../../core/enums.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as xpath from "../../../core/xpath.js"
import * as urlStore from "../../../store/url.js"
import * as answer from "./answer.ts"
import * as operations from "./operations.ts"

const VSID_CONTAINER_SELECTOR =
  ".personal-step-container.vsid-padding-container, .vsid-padding-container"

function isElementVisible(el) {
  if (
    !el ||
    !el.isConnected ||
    (el instanceof HTMLInputElement && el.type === "hidden")
  ) {
    return false
  }

  const checkVisibility = el.checkVisibility
  if (typeof checkVisibility === "function") {
    try {
      if (!checkVisibility.call(el, { checkVisibilityCSS: true })) return false
    } catch {
      if (!checkVisibility.call(el)) return false
    }
  }

  let node = el
  while (node) {
    if (
      node.hasAttribute("hidden") ||
      node.getAttribute("aria-hidden") === "true"
    ) {
      return false
    }
    const style = window.getComputedStyle(node)
    if (style.display === "none" || style.visibility === "hidden") return false
    node = node.parentElement
  }

  if (typeof el.getClientRects === "function") {
    const rects = el.getClientRects()
    if (rects.length === 0) return false
  }

  return true
}

function isRuleVisible(rule) {
  const field = rule
  switch (rule.type) {
    case enums.FIELD_TYPE.TEXT:
    case enums.FIELD_TYPE.SEARCH:
    case enums.FIELD_TYPE.DATE:
    case enums.FIELD_TYPE.SELECT:
      return isElementVisible(field.$input ?? null)
    case enums.FIELD_TYPE.CHECKBOX:
      if (!field.$checkboxs?.length) return false
      return field.$checkboxs.some((checkbox) => isElementVisible(checkbox))
    case enums.FIELD_TYPE.RADIOGROUP:
      return (
        isElementVisible(field.$radioParent ?? null) ||
        isElementVisible(field.$input ?? null)
      )
    case enums.FIELD_TYPE.RADIO:
    case enums.FIELD_TYPE.LISTBOX:
    case enums.FIELD_TYPE.MULTI_SELECT:
      return isElementVisible(field.$input ?? null)
    default:
      return true
  }
}

export async function getRules() {
  const rules = []
  rules.push(...extractGuestLoginFormRules())

  const fieldNodes = xpath.getOrderedNodesSafe(
    './/div[contains(@class, "mdf-validated-field")]',
  )
  for (const fieldNode of fieldNodes) {
    if (!isElementVisible(fieldNode)) continue
    const rule = await extractMdfValidatedFieldRule(fieldNode)
    if (rule) rules.push(rule)
  }

  rules.push(...extractPersonalCheckboxRules())

  const phoneRules = await extractPhoneFieldRules()
  rules.push(...phoneRules)

  const questionRules = await extractQuestionRules()
  rules.push(...questionRules)

  const vsidRules = await extractVsidRules()
  rules.push(...vsidRules)

  const selfReviewRules = await extractSelfReviewRules()
  rules.push(...selfReviewRules)

  return rules.filter(isRuleVisible)
}

async function extractSelfReviewRules() {
  const rules = []
  const attestation = document.querySelector(".self-review-attestation")
  if (attestation) {
    const checkbox = attestation.querySelector('input[type="checkbox"]')
    if (checkbox) {
      const labelNode = attestation.querySelector(
        ".self-review-signature-checkbox label, label",
      )
      const label =
        attestation.querySelector("h3")?.textContent?.trim() ||
        "Self Attestation"
      const optionLabel =
        labelNode?.textContent?.trim() ||
        "Yes, I agree to sign electronically."
      const required =
        checkbox.getAttribute("aria-required") === "true" ||
        checkbox.hasAttribute("required") ||
        !!attestation.querySelector(".self-review-signature-required")
      rules.push({
        type: enums.FIELD_TYPE.CHECKBOX,
        label,
        required,
        $label: labelNode || checkbox,
        $checkboxs: [checkbox],
        options: [optionLabel],
      })
    }
  }

  const signature = document.getElementById("electronicSignature")
  if (signature && !signature.disabled) {
    let labelNode = null
    const labelWrap = signature.closest(".self-review-signature-label")
    if (labelWrap) labelNode = labelWrap.querySelector("label")
    const label =
      labelNode?.textContent?.trim() ||
      signature.getAttribute("aria-label") ||
      "Please type your full name."
    const required =
      signature.getAttribute("aria-required") === "true" ||
      signature.hasAttribute("required") ||
      !!labelNode?.classList.contains("required")
    rules.push({
      type: enums.FIELD_TYPE.TEXT,
      label,
      required,
      $label: labelNode || signature,
      $input: signature,
    })
  }

  return rules
}

async function extractMdfValidatedFieldRule(fieldNode) {
  const labelNode = fieldNode.querySelector(".mdf-label label")
  if (!labelNode) return null

  const rawLabel = labelNode.textContent?.trim() || ""
  if (!rawLabel) return null

  const requiredness = getRequirednessSignals(fieldNode, labelNode)
  const required = requiredness.required
  console.info(
    "[AdpWorkforceNowRequiredDebug] normal-field-requiredness",
    JSON.stringify({
      label: getCleanLabelText(labelNode),
      required,
      signals: requiredness.signals,
    }),
  )

  const extractors = [
    () => extractCheckboxFieldRule(fieldNode, labelNode, required),
    () => extractRadioGroupFieldRule(fieldNode, labelNode, required),
    () => extractSelectFieldRule(fieldNode, labelNode, required),
    () => extractTextFieldRule(fieldNode, labelNode, required),
  ]
  for (const extract of extractors) {
    const rule = await extract()
    if (rule) return rule
  }

  return null
}

function getRequirednessSignals(fieldNode, labelNode) {
  const signals = []
  if (labelNode.classList.contains("mdf-required-indicator")) {
    signals.push("label-mdf-required-indicator")
  }
  if (labelNode.classList.contains("required-indicator")) {
    signals.push("label-required-indicator")
  }
  if (labelNode.querySelector(".mdf-required-indicator")) {
    signals.push("label-child-mdf-required-indicator")
  }
  if (labelNode.querySelector(".required-indicator")) {
    signals.push("label-child-required-indicator")
  }

  try {
    const afterContent = window.getComputedStyle(labelNode, "::after").content
    if (afterContent?.includes("*")) signals.push("label-after-asterisk")
  } catch {
    // ignore computed-style failures
  }

  for (const control of fieldNode.querySelectorAll(
    'input, select, textarea, [role="combobox"]',
  )) {
    if (control.hasAttribute("required")) signals.push("control-required")
    if (control.getAttribute("aria-required") === "true") {
      signals.push("control-aria-required")
    }
  }

  return { required: signals.length > 0, signals }
}

function extractTextFieldRule(fieldNode, labelNode, required) {
  let input = null
  const forId = labelNode.getAttribute("for")
  if (forId) input = document.getElementById(forId)

  if (!input) {
    const candidates = fieldNode.querySelectorAll(
      'input.vdl-textbox, input[type="text"], input[type="email"], input[type="tel"]',
    )
    for (const candidate of candidates) {
      if (
        !candidate.disabled &&
        !candidate.readOnly &&
        candidate.getAttribute("aria-readonly") !== "true" &&
        candidate.getAttribute("data-testid") !== "phone-input" &&
        candidate.type !== "checkbox" &&
        candidate.type !== "radio" &&
        candidate.getAttribute("role") !== "combobox"
      ) {
        input = candidate
        break
      }
    }
  }

  if (
    !input ||
    input.disabled ||
    input.readOnly ||
    input.getAttribute("aria-readonly") === "true" ||
    input.type === "checkbox" ||
    input.type === "radio" ||
    input.getAttribute("data-testid") === "phone-input"
  ) {
    return null
  }

  const label = labelNode.textContent?.replace("*", "").trim() || ""
  return {
    type: enums.FIELD_TYPE.TEXT,
    label,
    required,
    $label: labelNode,
    $input: input,
  }
}

function normalizeLabelText(raw) {
  return (raw || "").replace(/\*+/g, "").replace(/\s+/g, " ").trim()
}

function getCleanLabelText(labelNode) {
  if (!labelNode) return ""
  const clone = labelNode.cloneNode(true)
  clone
    .querySelectorAll(".mdf-required-indicator, .required-indicator")
    .forEach((node) => node.remove())
  return normalizeLabelText(clone.textContent)
}

function cssEscape(value) {
  const css = window.CSS
  return css?.escape
    ? css.escape(value)
    : value.replace(/["\\]/g, "\\$&")
}

function findLabelByText(root, text) {
  const normalized = normalizeLabelText(text).toLowerCase()
  if (!normalized) return null
  return (
    Array.from(
      root.querySelectorAll("label, .sdf-label, .input-label"),
    ).find(
      (label) =>
        normalizeLabelText(label.textContent).toLowerCase() === normalized,
    ) ?? null
  )
}

function findAssociatedLabel(control, root = document) {
  const id = control.getAttribute("id")
  if (id) {
    const byFor = root.querySelector(`label[for="${cssEscape(id)}"]`)
    if (byFor) return byFor
  }

  const labelledBy = control.getAttribute("aria-labelledby")
  if (labelledBy) {
    for (const refId of labelledBy.split(/\s+/).filter(Boolean)) {
      const ref = root.querySelector(`#${cssEscape(refId)}`)
      if (ref) return ref
    }
  }

  const fieldWrap = control.closest(
    ".vdl-field, .mdf-validated-field, .rrui__input, .form-group, .field-container, [role='group']",
  )
  const wrapLabel = fieldWrap?.querySelector(
    "label, .sdf-label, .input-label",
  )
  if (wrapLabel) return wrapLabel

  const ariaLabel = control.getAttribute("aria-label")
  return ariaLabel ? findLabelByText(root, ariaLabel) : null
}

function isControlRequired(control, labelNode) {
  return (
    control.hasAttribute("required") ||
    control.getAttribute("aria-required") === "true" ||
    !!labelNode?.querySelector(
      ".mdf-required-indicator, .required-indicator",
    ) ||
    !!labelNode?.classList.contains("required-indicator")
  )
}

function isFillableTextInput(input) {
  return (
    !input.disabled &&
    !input.readOnly &&
    input.getAttribute("aria-readonly") !== "true" &&
    input.getAttribute("data-testid") !== "phone-input" &&
    input.getAttribute("role") !== "combobox" &&
    ["", "text", "email", "tel", "url", "number"].includes(
      input.getAttribute("type") || input.type || "",
    )
  )
}

function getSelectOptionTexts(select) {
  return Array.from(select.options)
    .map((option) => option.textContent?.trim() || option.value.trim())
    .filter((text) => text.length > 0)
}

export function extractGuestLoginFormRules(root = document) {
  const rules = []
  const seenInputs = new WeakSet()
  const seenCountrySelects = new WeakSet()
  const containers = Array.from(root.querySelectorAll(".login-form-container"))

  for (const container of containers) {
    for (const inputNode of Array.from(container.querySelectorAll("input"))) {
      const input = inputNode
      if (
        !isFillableTextInput(input) ||
        seenInputs.has(input) ||
        !isElementVisible(input)
      ) {
        continue
      }

      const labelNode = findAssociatedLabel(input, root)
      const label =
        getCleanLabelText(labelNode) ||
        normalizeLabelText(input.getAttribute("aria-label")) ||
        normalizeLabelText(input.getAttribute("placeholder")) ||
        normalizeLabelText(input.getAttribute("name")) ||
        normalizeLabelText(input.id)

      if (label) {
        seenInputs.add(input)
        rules.push({
          type: enums.FIELD_TYPE.TEXT,
          label,
          required: isControlRequired(input, labelNode),
          $label: labelNode || input,
          $input: input,
        })
      }
    }

    const phoneInput = container.querySelector(
      'input[data-testid="phone-input"]',
    )
    if (
      phoneInput &&
      !phoneInput.disabled &&
      !seenInputs.has(phoneInput) &&
      isElementVisible(phoneInput)
    ) {
      const labelNode = findAssociatedLabel(phoneInput, root)
      const rawLabel =
        getCleanLabelText(labelNode) ||
        normalizeLabelText(phoneInput.getAttribute("aria-label")) ||
        "Mobile Number"
      const phoneLabel = answer.normalizeAdpWorkforceNowPhoneLabel(rawLabel)
      seenInputs.add(phoneInput)

      const phoneGroup =
        (labelNode ? findPhoneGroup(labelNode) : null) ||
        phoneInput.closest('[role="group"]') ||
        container
      const countrySelect = phoneGroup.querySelector(
        'select[name="phoneCountry"]',
      )

      if (
        countrySelect?.isConnected &&
        !countrySelect.disabled &&
        !seenCountrySelects.has(countrySelect)
      ) {
        seenCountrySelects.add(countrySelect)
        const countryLabel =
          answer.getAdpWorkforceNowPhoneCountryCodeLabel(phoneLabel) ||
          `${phoneLabel} Country`
        rules.push({
          type: enums.FIELD_TYPE.SELECT,
          label: countryLabel,
          required: isControlRequired(countrySelect, labelNode),
          $label: labelNode || countrySelect,
          $input: countrySelect,
          options: getSelectOptionTexts(countrySelect),
          description: phoneCountryCode.PHONE_COUNTRY_CODE_DESCRIPTION,
        })
      }

      rules.push({
        type: enums.FIELD_TYPE.TEXT,
        label: phoneLabel,
        required: isControlRequired(phoneInput, labelNode),
        $label: labelNode || phoneInput,
        $input: phoneInput,
        description: phoneCountryCode.LOCAL_PHONE_DESCRIPTION,
      })
    }
  }

  return rules
}

function findSelectOrComboboxControl(fieldNode, labelNode) {
  const findByLabelledBy = () => {
    const labelId = labelNode.getAttribute("id")
    if (!labelId) return null
    for (const combobox of fieldNode.querySelectorAll('[role="combobox"]')) {
      const labelledBy = (combobox.getAttribute("aria-labelledby") || "")
        .split(/\s+/)
        .filter(Boolean)
      if (labelledBy.includes(labelId)) return combobox
    }
    return null
  }

  const forId = labelNode.getAttribute("for")
  if (forId) {
    const byId = document.getElementById(forId)
    if (byId) {
      if (isPlainTextInput(byId)) {
        const combobox =
          findByLabelledBy() || fieldNode.querySelector('[role="combobox"]')
        if (combobox) return combobox
      }
      return byId
    }
  }

  return findByLabelledBy() || fieldNode.querySelector('[role="combobox"]')
}

function isPlainTextInput(el) {
  if (el.tagName !== "INPUT") return false
  const type = el.type
  return (
    ["text", "email", "tel", "url", "search", "number", "password"].includes(
      type,
    ) && el.getAttribute("role") !== "combobox"
  )
}

function getOptionDisplayText(optionNode) {
  const flexRow = optionNode.querySelector(".flex.justify-between")
  if (flexRow) {
    const clone = flexRow.cloneNode(true)
    clone.querySelectorAll("sdf-icon, svg, i").forEach((node) => node.remove())
    return clone.textContent?.trim() || ""
  }

  const clone = optionNode.cloneNode(true)
  clone.querySelectorAll("sdf-icon, svg, i").forEach((node) => node.remove())
  return clone.textContent?.trim() || ""
}

function normalizeLabelForMatch(raw) {
  return raw
    .replace(/\*+/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function isDesiredSalaryLabel(label) {
  return /\bdesired salary\b/.test(normalizeLabelForMatch(label))
}

export function getAdpQuestionTextFieldType(label) {
  const normalized = normalizeLabelForMatch(label)
  if (/\b(salary|compensation|pay)\b/.test(normalized)) {
    return /\b(range|minimum and maximum|min and max)\b/.test(normalized)
      ? enums.FIELD_TYPE.TEXT
      : enums.FIELD_TYPE.NUMBER
  }
  return enums.FIELD_TYPE.TEXT
}

export function isAdpSalaryCurrencySelectLabel(label) {
  return normalizeLabelForMatch(label) === "select currency type"
}

async function extractSelectFieldRule(fieldNode, labelNode, required) {
  const label = labelNode.textContent?.replace("*", "").trim() || ""
  const labelLower = label.toLowerCase()

  if (labelLower === "country") {
    const control =
      findSelectOrComboboxControl(fieldNode, labelNode) ||
      fieldNode.querySelector('[role="combobox"]')
    if (!control) return null

    let options = []
    if (control.tagName === "SELECT") {
      options = Array.from(control.options)
        .map((option) => option.textContent?.trim() || "")
        .filter((text) => text.length > 0)
    } else if (control.getAttribute("role") === "combobox") {
      const optionNodes = await operations.getSelectOptionsElement(
        control,
        false,
      )
      options = (optionNodes || [])
        .map(getOptionDisplayText)
        .filter((text) => text.length > 0)
    }

    return {
      type: enums.FIELD_TYPE.SELECT,
      label: "Country",
      required,
      $label: labelNode,
      $input: control,
      options,
    }
  }

  const control = findSelectOrComboboxControl(fieldNode, labelNode)
  if (control && isPlainTextInput(control)) return null

  if (!control) {
    const nativeSelect = fieldNode.querySelector(
      'select:not([name="phoneCountry"])',
    )
    if (nativeSelect) {
      const options = Array.from(nativeSelect.options)
        .map((option) => option.textContent?.trim() || "")
        .filter((text) => text.length > 0)
      if (options.length > 0) {
        return {
          type: enums.FIELD_TYPE.SELECT,
          label,
          required,
          $label: labelNode,
          $input: nativeSelect,
          options,
        }
      }
    }
    return null
  }

  if (control.tagName === "SELECT") {
    const select = control
    const options = Array.from(select.options)
      .map((option) => option.textContent?.trim() || "")
      .filter((text) => text.length > 0)
    return options.length > 0
      ? {
          type: enums.FIELD_TYPE.SELECT,
          label,
          required,
          $label: labelNode,
          $input: select,
          options,
        }
      : null
  }

  if (control.getAttribute("role") === "combobox") {
    const optionNodes = await operations.getSelectOptionsElement(
      control,
      false,
    )
    const options = (optionNodes || [])
      .map(getOptionDisplayText)
      .filter((text) => text.length > 0)
    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      required,
      $label: labelNode,
      $input: control,
      options,
    }
  }

  return null
}

function extractCheckboxFieldRule(fieldNode, labelNode, _required) {
  const forId = labelNode.getAttribute("for")
  if (!forId) return null

  const checkbox = document.getElementById(forId)
  if (!checkbox || checkbox.type !== "checkbox") return null

  const checkboxWrap = checkbox.closest(".vdl-checkbox")
  if (!checkboxWrap) return null

  const checkboxLabel = checkboxWrap.querySelector("label")
  if (!checkboxLabel) return null

  const label =
    checkboxLabel.textContent?.trim() ||
    labelNode.textContent?.replace("*", "").trim() ||
    ""

  return {
    type: enums.FIELD_TYPE.CHECKBOX,
    label,
    required: false,
    $label: checkboxLabel,
    $checkboxs: [checkbox],
    options: [label],
  }
}

function findPhoneGroup(labelNode) {
  const group = labelNode.closest('[role="group"]')
  return (
    group ||
    labelNode
      .closest(".mdf-validated-field")
      ?.querySelector('[role="group"]') ||
    null
  )
}

function extractPersonalCheckboxRules() {
  const rules = []
  const searchRoots = []
  const personalStep = document.querySelector(".personal-step-container")
  if (personalStep) searchRoots.push(personalStep)
  searchRoots.push(document)

  const queryFirst = (selectors) => {
    for (const root of searchRoots) {
      for (const selector of selectors) {
        const hit = root.querySelector(selector)
        if (hit?.isConnected) return hit
      }
    }
    return null
  }

  const preferredNameCheckbox = queryFirst([
    "#usePreferredName input[type='checkbox']",
    'input[name="usePreferredName"][type="checkbox"]',
  ])
  if (preferredNameCheckbox) {
    const checkboxWrap = preferredNameCheckbox.closest(".vdl-checkbox")
    const row =
      preferredNameCheckbox.closest(".flex.flex-row") ||
      preferredNameCheckbox.closest('[class*="flex-row"]')
    const span = row?.querySelector("span")
    const optionLabel =
      span?.textContent?.trim() ||
      preferredNameCheckbox.getAttribute("aria-label") ||
      checkboxWrap?.getAttribute("aria-label") ||
      "I have a preferred or chosen name"
    rules.push({
      type: enums.FIELD_TYPE.CHECKBOX,
      label: "Preferred or chosen name",
      required:
        preferredNameCheckbox.getAttribute("aria-required") === "true",
      $label: span || checkboxWrap || preferredNameCheckbox,
      $checkboxs: [preferredNameCheckbox],
      options: [optionLabel],
    })
  }

  const consentCheckbox = queryFirst([
    "#consentCheckBox input[type='checkbox']",
    'input[name="consentCheckBox"][type="checkbox"]',
    ".personal-info-consent input[type='checkbox']",
  ])
  if (consentCheckbox) {
    const checkboxWrap = consentCheckbox.closest(".vdl-checkbox")
    const labelNode = checkboxWrap?.querySelector("label")
    const optionLabel =
      labelNode?.textContent?.trim() ||
      consentCheckbox.getAttribute("aria-label") ||
      "(Optional) I would like to receive text messages to this number about my job application."
    rules.push({
      type: enums.FIELD_TYPE.CHECKBOX,
      label: "Text message notifications (optional)",
      required: consentCheckbox.getAttribute("aria-required") === "true",
      $label: labelNode || checkboxWrap || consentCheckbox,
      $checkboxs: [consentCheckbox],
      options: [optionLabel],
    })
  }

  return rules
}

async function extractPhoneFieldRules() {
  const rules = []
  const seenPhoneInputs = new WeakSet()
  const seenCountrySelects = new WeakSet()
  const labelNodes = xpath.getOrderedNodesSafe(
    './/label[@id and (contains(@id, "validated_label_mobile") or contains(@id, "validated_label_home"))]',
  )

  for (const labelNode of labelNodes) {
    const phoneLabel = answer.normalizeAdpWorkforceNowPhoneLabel(
      labelNode.textContent,
    )
    if (!phoneLabel) continue

    const required = labelNode.querySelector(".mdf-required-indicator") !== null
    const phoneGroup = findPhoneGroup(labelNode)
    if (!phoneGroup) continue

    const countrySelect = phoneGroup.querySelector(
      'select[name="phoneCountry"]',
    )
    if (countrySelect && !seenCountrySelects.has(countrySelect)) {
      seenCountrySelects.add(countrySelect)
      const options = Array.from(countrySelect.options)
        .map((option) => option.textContent?.trim() || "")
        .filter((text) => text.length > 0)
      const countryLabel =
        answer.getAdpWorkforceNowPhoneCountryCodeLabel(phoneLabel) ||
        `${phoneLabel} Country`
      rules.push({
        type: enums.FIELD_TYPE.SELECT,
        label: countryLabel,
        required,
        $label: labelNode,
        $input: countrySelect,
        options,
        description: phoneCountryCode.PHONE_COUNTRY_CODE_DESCRIPTION,
      })
    }

    const phoneInput = phoneGroup.querySelector(
      'input[data-testid="phone-input"]',
    )
    if (
      !phoneInput ||
      phoneInput.disabled ||
      seenPhoneInputs.has(phoneInput)
    ) {
      continue
    }

    seenPhoneInputs.add(phoneInput)
    rules.push({
      type: enums.FIELD_TYPE.TEXT,
      label: phoneLabel,
      required,
      $label: labelNode,
      $input: phoneInput,
      description: phoneCountryCode.LOCAL_PHONE_DESCRIPTION,
    })
  }

  return rules
}

async function extractRadioGroupFieldRule(fieldNode, labelNode, required) {
  const radioGroup = fieldNode.querySelector("sdf-radio-group")
  if (!radioGroup) return null

  const radioButtons = Array.from(
    radioGroup.querySelectorAll("sdf-radio-button"),
  )
  if (radioButtons.length === 0) return null

  const options = []
  const optionNodes = []
  for (const radioButton of radioButtons) {
    const label = radioButton.getAttribute("label")
    const value = radioButton.getAttribute("value")
    if (label) {
      options.push(label)
      optionNodes.push(radioButton)
    } else if (value) {
      options.push(value)
      optionNodes.push(radioButton)
    }
  }

  if (options.length === 0) return null

  const fieldLabel = labelNode.textContent?.replace("*", "").trim() || ""
  const firstRadioInput = radioButtons[0]?.querySelector(
    "input[type='radio']",
  )
  const input = firstRadioInput || radioButtons[0]

  return {
    type: enums.FIELD_TYPE.RADIOGROUP,
    label: fieldLabel,
    required,
    $label: labelNode,
    $input: input,
    $radioParent: radioGroup,
    options,
  }
}

async function extractQuestionRules() {
  const rules = []
  const container = document.querySelector(
    ".quesitions-container, .qContainerRowsWhite",
  )
  if (!container) return rules

  const mainQuestions = xpath.getOrderedNodesSafe(
    './/div[contains(@class, "qMainDiv")]',
    container,
  )
  for (const questionNode of mainQuestions) {
    const labelNode = questionNode.querySelector(
      ".question-label-container label.qLabel",
    )
    if (!labelNode) continue

    const rawLabel = labelNode.textContent?.trim() || ""
    if (!rawLabel) continue

    const required =
      labelNode.querySelector(".mdf-required-indicator") !== null
    rawLabel.replace("*", "").trim()

    const forId = labelNode.getAttribute("for")
    if (!forId) continue

    const extractors = [
      () => extractQuestionRadioRule(questionNode, labelNode, required),
      () =>
        extractQuestionSelectRule(questionNode, labelNode, forId, required),
      () =>
        extractQuestionTextRule(questionNode, labelNode, forId, required),
    ]
    for (const extract of extractors) {
      const rule = await extract()
      if (rule) {
        rules.push(rule)
        break
      }
    }
  }

  const additionalQuestions = xpath.getOrderedNodesSafe(
    './/div[contains(@class, "additional-question")]',
    container,
  )
  for (const questionNode of additionalQuestions) {
    const radioGroup = questionNode.querySelector("sdf-radio-group")
    if (radioGroup) {
      const labelNode = questionNode.querySelector(
        ".question-label-container, .qLabel, span.qLabel",
      )
      if (labelNode) {
        const label = labelNode.textContent?.trim() || ""
        const radioButtons = Array.from(
          radioGroup.querySelectorAll("sdf-radio-button"),
        )
        const options = []
        for (const radioButton of radioButtons) {
          const optionLabel = radioButton.getAttribute("label")
          const optionValue = radioButton.getAttribute("value")
          if (optionLabel) options.push(optionLabel)
          else if (optionValue) options.push(optionValue)
        }

        if (options.length > 0 && !isDesiredSalaryLabel(label)) {
          const firstRadioInput = radioButtons[0]?.querySelector(
            "input[type='radio']",
          )
          const input = firstRadioInput || radioButtons[0]
          rules.push({
            type: enums.FIELD_TYPE.RADIOGROUP,
            label,
            required: false,
            $label: labelNode,
            $input: input,
            $radioParent: radioGroup,
            options,
          })
        }
      }
    }

    const questionLabel = getCleanLabelText(
      questionNode.querySelector(
        ".question-label-container, .qLabel, span.qLabel",
      ),
    )
    const textInputs = questionNode.querySelectorAll(
      'input[type="text"]:not([data-testid="phone-input"])',
    )
    for (const textInputNode of textInputs) {
      const textInput = textInputNode
      if (textInput.disabled) continue
      const ariaLabel = textInput.getAttribute("aria-label")
      const label =
        (isDesiredSalaryLabel(questionLabel) ? questionLabel : ariaLabel) ||
        textInput.id ||
        ""
      if (label) {
        rules.push({
          type: getAdpQuestionTextFieldType(label),
          label,
          required: textInput.getAttribute("aria-required") === "true",
          $label: textInput,
          $input: textInput,
        })
      }
    }

    const selectSimple = questionNode.querySelector("sdf-select-simple")
    if (selectSimple) {
      const ariaLabel = selectSimple.getAttribute("aria-label")
      const label = ariaLabel || ""
      if (label) {
        if (isAdpSalaryCurrencySelectLabel(label)) continue

        let control = selectSimple.querySelector("input")
        if (!control) {
          control = selectSimple.querySelector(".MDFSelectBox__control")
        }
        const optionsRoot = control || selectSimple
        const optionNodes = await operations.getSelectOptionsElement(
          optionsRoot,
          false,
        )
        if (optionNodes && optionNodes.length > 0) {
          const options = optionNodes
            .map(getOptionDisplayText)
            .filter((text) => text.length > 0)
          rules.push({
            type: enums.FIELD_TYPE.SELECT,
            label,
            required: selectSimple.getAttribute("required") === "true",
            $label: selectSimple,
            $input: selectSimple,
            options,
          })
        } else {
          rules.push({
            type: enums.FIELD_TYPE.SELECT,
            label,
            required: selectSimple.getAttribute("required") === "true",
            $label: selectSimple,
            $input: selectSimple,
            options: [],
          })
        }
      }
    }

    const textarea = questionNode.querySelector("textarea")
    if (textarea && !textarea.disabled) {
      const ariaLabel = textarea.getAttribute("aria-label")
      const label = ariaLabel || ""
      if (label) {
        rules.push({
          type: enums.FIELD_TYPE.TEXT,
          label,
          required: false,
          $label: textarea,
          $input: textarea,
        })
      }
    }
  }

  return rules
}

async function extractQuestionRadioRule(questionNode, labelNode, required) {
  const radioGroup = questionNode.querySelector("sdf-radio-group")
  if (!radioGroup) return null

  const radioButtons = Array.from(
    radioGroup.querySelectorAll("sdf-radio-button"),
  )
  if (radioButtons.length === 0) return null

  const options = []
  const optionNodes = []
  for (const radioButton of radioButtons) {
    const label = radioButton.getAttribute("label")
    const value = radioButton.getAttribute("value")
    if (label) {
      options.push(label)
      optionNodes.push(radioButton)
    } else if (value) {
      options.push(value)
      optionNodes.push(radioButton)
    }
  }

  if (options.length === 0) return null

  const fieldLabel = labelNode.textContent?.replace("*", "").trim() || ""
  const firstRadioInput = radioButtons[0]?.querySelector(
    "input[type='radio']",
  )
  const input = firstRadioInput || radioButtons[0]

  return {
    type: enums.FIELD_TYPE.RADIOGROUP,
    label: fieldLabel,
    required,
    $label: labelNode,
    $input: input,
    $radioParent: radioGroup,
    options,
  }
}

async function extractQuestionSelectRule(
  questionNode,
  labelNode,
  forId,
  required,
) {
  let control = document.getElementById(forId)
  if (!control) {
    const combobox = questionNode.querySelector('[role="combobox"]')
    const expandedButton = questionNode.querySelector(
      '[role="button"][aria-expanded]',
    )
    const selectSimple = questionNode.querySelector("sdf-select-simple")
    if (combobox) {
      control = combobox
    } else if (expandedButton) {
      control = expandedButton
    } else if (selectSimple) {
      const nested = selectSimple.querySelector(
        '[role="combobox"], [role="button"][aria-expanded], input, button',
      )
      control = nested || selectSimple
    }
  }

  const role = control?.getAttribute("role")
  const isSelectSimple =
    control?.tagName?.toLowerCase() === "sdf-select-simple"
  if (
    !control ||
    (role !== "combobox" && role !== "button" && !isSelectSimple)
  ) {
    return null
  }

  const optionNodes = await operations.getSelectOptionsElement(control, false)
  if (optionNodes && optionNodes.length > 0) {
    const options = optionNodes
      .map(getOptionDisplayText)
      .filter((text) => text.length > 0)
    const label = labelNode.textContent?.replace("*", "").trim() || ""
    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      required,
      $label: labelNode,
      $input: control,
      options,
    }
  }

  return null
}

function extractQuestionTextRule(questionNode, labelNode, forId, required) {
  const control = document.getElementById(forId)
  if (
    !control ||
    control.disabled ||
    (control instanceof HTMLInputElement &&
      (control.type === "radio" || control.type === "checkbox"))
  ) {
    return null
  }

  const label = labelNode.textContent?.replace("*", "").trim() || ""
  return {
    type: getAdpQuestionTextFieldType(label),
    label,
    required,
    $label: labelNode,
    $input: control,
  }
}

function getVsidContainer() {
  return document.querySelector(VSID_CONTAINER_SELECTOR)
}

function findVsidComboboxByLabel(container, label) {
  return (
    Array.from(container.querySelectorAll('input[role="combobox"]')).find(
      (combobox) =>
        combobox.getAttribute("aria-label")?.trim().toLowerCase() ===
        label.toLowerCase(),
    ) ?? null
  )
}

function findVsidRaceCombobox(container) {
  return findVsidComboboxByLabel(container, "Race")
}

function findVsidEthnicityCombobox(container) {
  return findVsidComboboxByLabel(container, "Ethnicity")
}

function isControlDisabled(control) {
  return (
    !!control.disabled ||
    control.getAttribute("aria-disabled") === "true" ||
    !!control.closest?.("[disabled], [aria-disabled='true']")
  )
}

function isVsidRaceRule(rule) {
  if (rule.type !== enums.FIELD_TYPE.SELECT) return false
  const input = rule.$input
  return (
    !!input &&
    (input.id === "vsidRace" ||
      (input.getAttribute?.("aria-label")?.trim().toLowerCase() === "race" &&
        !!input.closest?.(VSID_CONTAINER_SELECTOR)))
  )
}

function isVsidEthnicityRule(rule) {
  if (rule.type !== enums.FIELD_TYPE.SELECT) return false
  const input = rule.$input
  return (
    !!input &&
    (input.id === "vsidEthinicity" ||
      (input.getAttribute?.("aria-label")?.trim().toLowerCase() ===
        "ethnicity" &&
        !!input.closest?.(VSID_CONTAINER_SELECTOR)))
  )
}

export function hasAdpWorkforceNowVsidRaceDependency() {
  const container = getVsidContainer()
  return !!(container && findVsidEthnicityCombobox(container))
}

function getVsidSelectDisplayValue(control) {
  const item = control.closest(".vsid-item") || control.parentElement
  return (
    item?.querySelector(".MDFSelectBox__single-value")?.textContent?.trim() ||
    ""
  )
}

export function isAdpWorkforceNowVsidRaceRequiredAfterEthnicity() {
  const container = getVsidContainer()
  if (!container) return false
  const ethnicity = findVsidEthnicityCombobox(container)
  return (
    !!ethnicity &&
    getVsidSelectDisplayValue(ethnicity)
      .replace(/[^a-z]/gi, "")
      .toLowerCase() === "nothispanicorlatino"
  )
}

export function partitionAdpWorkforceNowVsidRaceRules(rules) {
  const hasEthnicity = rules.some(isVsidEthnicityRule)
  const deferredRaceRules = rules.filter(
    (rule) =>
      !!isVsidRaceRule(rule) &&
      (hasEthnicity || isControlDisabled(rule.$input)),
  )
  return {
    readyRules: rules.filter((rule) => !deferredRaceRules.includes(rule)),
    deferredRaceRules,
  }
}

async function buildVsidRaceRule(
  container,
  raceControl = findVsidRaceCombobox(container),
) {
  if (!raceControl) return null

  const optionNodes = isControlDisabled(raceControl)
    ? null
    : await operations.getSelectOptionsElement(raceControl, false)
  const options = optionNodes
    ? optionNodes.map(getOptionDisplayText).filter(Boolean)
    : []

  return {
    type: enums.FIELD_TYPE.SELECT,
    label: raceControl.getAttribute("aria-label") || "Race",
    required: false,
    $label: raceControl,
    $input: raceControl,
    options,
  }
}

export async function getEnabledAdpWorkforceNowVsidRaceRule() {
  const container = getVsidContainer()
  if (!container) return null
  const raceControl = findVsidRaceCombobox(container)
  if (!raceControl || isControlDisabled(raceControl)) return null
  return await buildVsidRaceRule(container, raceControl)
}

async function extractVsidRules() {
  const rules = []
  const container = getVsidContainer()
  if (!container) return rules

  const getCleanVsidTitle = (labelNode) => {
    if (!labelNode) return ""
    const clone = labelNode.cloneNode(true)
    clone
      .querySelectorAll(
        "sdf-icon-button, sdf-icon, .contents, .mdf-required-indicator",
      )
      .forEach((node) => node.remove())
    return clone.textContent?.trim() || ""
  }

  const comboboxes = Array.from(
    container.querySelectorAll('input[role="combobox"]'),
  )
  for (const combobox of comboboxes) {
    let labelNode = null
    const wrap = combobox.closest(
      ".vsid-component-padding-bottom, .padding-top",
    )
    if (wrap) labelNode = wrap.querySelector("label.vsid-title, h4")

    let label = getCleanVsidTitle(labelNode)
    if (!label) label = combobox.getAttribute("aria-label") || ""

    let options = []
    try {
      const optionNodes = await operations.getSelectOptionsElement(
        combobox,
        false,
      )
      if (optionNodes && optionNodes.length > 0) {
        options = optionNodes
          .map(getOptionDisplayText)
          .filter((text) => text.length > 0)
      }
    } catch (error) {
      console.warn("Failed to get options for VSID Select field:", error)
    }

    rules.push({
      type: enums.FIELD_TYPE.SELECT,
      label: label || "Unknown VSID Field",
      required: false,
      $label: labelNode || combobox,
      $input: combobox,
      options,
    })
  }

  const radioGroups = Array.from(
    container.querySelectorAll("sdf-radio-group"),
  )
  for (const radioGroup of radioGroups) {
    let labelNode = null
    const wrap = radioGroup.closest(
      ".vsid-component-padding-bottom, .padding-top",
    )
    if (wrap) labelNode = wrap.querySelector("h4, label.vsid-title")

    let label = getCleanVsidTitle(labelNode)
    if (!label) label = radioGroup.getAttribute("label") || ""

    const radioButtons = Array.from(
      radioGroup.querySelectorAll("sdf-radio-button"),
    )
    const options = []
    for (const radioButton of radioButtons) {
      const optionLabel =
        radioButton.getAttribute("label") ||
        radioButton.getAttribute("value")
      if (optionLabel) options.push(optionLabel)
    }

    if (options.length > 0) {
      const input =
        radioButtons[0].querySelector('input[type="radio"]') ||
        radioButtons[0]
      rules.push({
        type: enums.FIELD_TYPE.RADIOGROUP,
        label: label || "Unknown VSID Radio",
        required: false,
        $label: labelNode || radioGroup,
        $input: input,
        $radioParent: radioGroup,
        options,
      })
    }
  }

  const checkboxes = Array.from(
    container.querySelectorAll('input[type="checkbox"]'),
  )
  for (const checkbox of checkboxes) {
    const checkboxWrap = checkbox.closest(".vdl-checkbox")
    if (!checkboxWrap) continue
    const labelNode = checkboxWrap.querySelector("label")
    const label = getCleanVsidTitle(labelNode)
    if (label) {
      rules.push({
        type: enums.FIELD_TYPE.CHECKBOX,
        label,
        required:
          checkboxWrap.querySelector(".text-action-destructive") !== null,
        $label: labelNode || checkbox,
        $checkboxs: [checkbox],
        options: [label],
      })
    }
  }

  return rules
}

function setSnapshotValue(snapshot, rawLabel, value) {
  const baseLabel = rawLabel
    .replace(/\*+/g, "")
    .replace(/\s+/g, " ")
    .trim()
  if (!baseLabel) return

  let key = baseLabel
  let suffix = 2
  while (Object.prototype.hasOwnProperty.call(snapshot, key)) {
    key = `${baseLabel} (${suffix++})`
  }
  snapshot[key] = value
}

function getNativeSelectDisplayValue(select) {
  const option = select.options[select.selectedIndex]
  return (option?.textContent ?? option?.value ?? "").trim()
}

function getSelectDisplayValue(control) {
  if (control.tagName === "SELECT") return getNativeSelectDisplayValue(control)

  const singleValues = control.querySelectorAll(
    ".MDFSelectBox__single-value, .single-value, [class*='SingleValue'], [class*='single-value']",
  )
  for (const node of singleValues) {
    const text = node.textContent?.trim()
    if (text) return text
  }

  const selectSimple = control.closest("sdf-select-simple")
  if (selectSimple) {
    for (const node of selectSimple.querySelectorAll(
      ".MDFSelectBox__single-value, .single-value",
    )) {
      const text = node.textContent?.trim()
      if (text) return text
    }
  }

  const textInput = control.querySelector(
    'input[type="text"], input[readonly], input:not([type])',
  )
  if (textInput?.value?.trim()) return textInput.value.trim()

  const ariaLabel = control.getAttribute("aria-label")?.trim()
  if (ariaLabel) return ariaLabel

  const text = control.textContent?.trim() ?? ""
  return text.length > 400 ? `${text.slice(0, 400)}\u2026` : text
}

function getRadioGroupSelectedValue(radioGroup) {
  for (const radioButton of radioGroup.querySelectorAll("sdf-radio-button")) {
    const button = radioButton
    if (
      button.hasAttribute("selected") ||
      button.getAttribute("aria-checked") === "true"
    ) {
      return (
        button.getAttribute("label") ||
        button.getAttribute("value") ||
        button.textContent?.trim() ||
        ""
      )
    }

    const input = radioButton.querySelector('input[type="radio"]')
    if (input?.checked) {
      return (
        button.getAttribute("label") ||
        button.getAttribute("value") ||
        input.value ||
        ""
      )
    }
  }
  return ""
}

function captureMdfValidatedFieldSnapshot(fieldNode, snapshot) {
  const labelNode = fieldNode.querySelector(".mdf-label label")
  if (!labelNode) return

  const label =
    labelNode.textContent?.replace(/\*+/g, "").replace(/\s+/g, " ").trim() ??
    ""
  if (!label) return

  const forId = labelNode.getAttribute("for")
  if (forId) {
    const byId = document.getElementById(forId)
    if (byId?.type === "checkbox") {
      const checkboxWrap = byId.closest(".vdl-checkbox")
      const optionLabel =
        checkboxWrap?.querySelector("label")?.textContent?.trim() || label
      setSnapshotValue(
        snapshot,
        label,
        byId.checked ? optionLabel || "true" : "false",
      )
      return
    }
  }

  const radioGroup = fieldNode.querySelector("sdf-radio-group")
  if (radioGroup) {
    setSnapshotValue(snapshot, label, getRadioGroupSelectedValue(radioGroup))
    return
  }

  const control = findSelectOrComboboxControl(fieldNode, labelNode)
  if (control) {
    if (control.tagName === "SELECT") {
      setSnapshotValue(snapshot, label, getNativeSelectDisplayValue(control))
      return
    }
    if (!isPlainTextInput(control)) {
      setSnapshotValue(snapshot, label, getSelectDisplayValue(control))
      return
    }
  }

  const nativeSelect = fieldNode.querySelector(
    'select:not([name="phoneCountry"])',
  )
  if (nativeSelect) {
    setSnapshotValue(
      snapshot,
      label,
      getNativeSelectDisplayValue(nativeSelect),
    )
    return
  }

  let input = null
  if (forId) input = document.getElementById(forId)
  if (!input) input = fieldNode.querySelector("textarea")
  if (!input) {
    const candidates = fieldNode.querySelectorAll(
      'input.vdl-textbox, input[type="text"], input[type="email"], input[type="tel"], input[type="url"], input[type="number"]',
    )
    for (const candidate of candidates) {
      if (
        candidate.getAttribute("data-testid") !== "phone-input" &&
        candidate.type !== "checkbox" &&
        candidate.type !== "radio" &&
        candidate.getAttribute("role") !== "combobox"
      ) {
        input = candidate
        break
      }
    }
  }

  if (
    !input ||
    (input instanceof HTMLInputElement && input.type === "checkbox") ||
    (input instanceof HTMLInputElement && input.type === "radio")
  ) {
    return
  }

  setSnapshotValue(snapshot, label, input.value ?? "")
}

function capturePersonalCheckboxSnapshot(snapshot) {
  const preferredNameCheckbox = document.querySelector(
    "#usePreferredName input[type='checkbox'], input[name='usePreferredName'][type='checkbox']",
  )
  if (preferredNameCheckbox?.isConnected) {
    const row =
      preferredNameCheckbox.closest(".flex.flex-row") ||
      preferredNameCheckbox.closest('[class*="flex-row"]')
    const span = row?.querySelector("span")
    const optionLabel =
      span?.textContent?.trim() ||
      preferredNameCheckbox.getAttribute("aria-label") ||
      "I have a preferred or chosen name"
    setSnapshotValue(
      snapshot,
      "Preferred or chosen name",
      preferredNameCheckbox.checked ? optionLabel : "false",
    )
  }

  const consentCheckbox = document.querySelector(
    "#consentCheckBox input[type='checkbox'], input[name='consentCheckBox'][type='checkbox'], .personal-info-consent input[type='checkbox']",
  )
  if (consentCheckbox?.isConnected) {
    const checkboxWrap = consentCheckbox.closest(".vdl-checkbox")
    const labelNode = checkboxWrap?.querySelector("label")
    const optionLabel =
      labelNode?.textContent?.trim() ||
      consentCheckbox.getAttribute("aria-label") ||
      "SMS consent"
    setSnapshotValue(
      snapshot,
      "Text message notifications (optional)",
      consentCheckbox.checked ? optionLabel : "false",
    )
  }
}

function captureGuestLoginFormSnapshot(snapshot) {
  const containers = Array.from(
    document.querySelectorAll(".login-form-container"),
  )
  for (const container of containers) {
    for (const inputNode of Array.from(container.querySelectorAll("input"))) {
      const input = inputNode
      if (!isFillableTextInput(input) || !isElementVisible(input)) continue

      const labelNode = findAssociatedLabel(input)
      const label =
        getCleanLabelText(labelNode) ||
        normalizeLabelText(input.getAttribute("aria-label")) ||
        normalizeLabelText(input.getAttribute("placeholder")) ||
        normalizeLabelText(input.getAttribute("name")) ||
        normalizeLabelText(input.id)
      if (label) setSnapshotValue(snapshot, label, input.value ?? "")
    }

    const phoneInput = container.querySelector(
      'input[data-testid="phone-input"]',
    )
    if (phoneInput && !phoneInput.disabled && isElementVisible(phoneInput)) {
      const labelNode = findAssociatedLabel(phoneInput)
      const phoneLabel = answer.normalizeAdpWorkforceNowPhoneLabel(
        getCleanLabelText(labelNode) ||
          normalizeLabelText(phoneInput.getAttribute("aria-label")) ||
          "Mobile Number",
      )
      setSnapshotValue(snapshot, phoneLabel, phoneInput.value ?? "")

      const phoneGroup =
        (labelNode ? findPhoneGroup(labelNode) : null) ||
        phoneInput.closest('[role="group"]') ||
        container
      const countrySelect = phoneGroup.querySelector(
        'select[name="phoneCountry"]',
      )
      if (countrySelect?.isConnected && !countrySelect.disabled) {
        setSnapshotValue(
          snapshot,
          answer.getAdpWorkforceNowPhoneCountryCodeLabel(phoneLabel) ||
            `${phoneLabel} Country`,
          getNativeSelectDisplayValue(countrySelect),
        )
      }
    }
  }
}

function capturePhoneFieldSnapshot(snapshot) {
  const labelNodes = xpath.getOrderedNodesSafe(
    './/label[@id and (contains(@id, "validated_label_mobile") or contains(@id, "validated_label_home"))]',
  )
  for (const labelNode of labelNodes) {
    const phoneLabel = answer.normalizeAdpWorkforceNowPhoneLabel(
      labelNode.textContent,
    )
    if (!phoneLabel) continue

    const phoneGroup = findPhoneGroup(labelNode)
    if (!phoneGroup) continue

    const phoneInput = phoneGroup.querySelector(
      'input[data-testid="phone-input"]',
    )
    if (phoneInput && !phoneInput.disabled) {
      setSnapshotValue(snapshot, phoneLabel, phoneInput.value ?? "")
    }

    const countrySelect = phoneGroup.querySelector(
      'select[name="phoneCountry"]',
    )
    if (countrySelect) {
      setSnapshotValue(
        snapshot,
        answer.getAdpWorkforceNowPhoneCountryCodeLabel(phoneLabel) ||
          `${phoneLabel} Country`,
        getNativeSelectDisplayValue(countrySelect),
      )
    }
  }
}

function captureQuestionMainDivSnapshot(questionNode, snapshot) {
  const labelNode = questionNode.querySelector(
    ".question-label-container label.qLabel",
  )
  if (!labelNode) return

  const label =
    labelNode.textContent?.replace(/\*+/g, "").replace(/\s+/g, " ").trim() ??
    ""
  if (!label) return

  const radioGroup = questionNode.querySelector("sdf-radio-group")
  if (radioGroup) {
    setSnapshotValue(snapshot, label, getRadioGroupSelectedValue(radioGroup))
    return
  }

  const forId = labelNode.getAttribute("for")
  if (forId) {
    const byId = document.getElementById(forId)
    if (byId) {
      const selectSimple = byId.closest("sdf-select-simple")
      if (byId.getAttribute("role") === "combobox" || selectSimple) {
        setSnapshotValue(
          snapshot,
          label,
          getSelectDisplayValue(selectSimple || byId),
        )
        return
      }
      if (byId instanceof HTMLSelectElement) {
        setSnapshotValue(snapshot, label, getNativeSelectDisplayValue(byId))
        return
      }
      if (
        byId instanceof HTMLInputElement ||
        byId instanceof HTMLTextAreaElement
      ) {
        if (byId.type !== "radio" && byId.type !== "checkbox") {
          setSnapshotValue(snapshot, label, byId.value ?? "")
        }
        return
      }
    }
  }

  const combobox = questionNode.querySelector('[role="combobox"]')
  if (combobox) {
    setSnapshotValue(snapshot, label, getSelectDisplayValue(combobox))
  }
}

function captureQuestionSnapshot(snapshot) {
  const container = document.querySelector(
    ".quesitions-container, .qContainerRowsWhite",
  )
  if (!container) return

  const mainQuestions = xpath.getOrderedNodesSafe(
    './/div[contains(@class, "qMainDiv")]',
    container,
  )
  for (const questionNode of mainQuestions) {
    captureQuestionMainDivSnapshot(questionNode, snapshot)
  }

  const additionalQuestions = xpath.getOrderedNodesSafe(
    './/div[contains(@class, "additional-question")]',
    container,
  )
  for (const questionNode of additionalQuestions) {
    const radioGroup = questionNode.querySelector("sdf-radio-group")
    if (radioGroup) {
      const labelNode = questionNode.querySelector(
        ".question-label-container, .qLabel, span.qLabel",
      )
      const label =
        labelNode?.textContent?.replace(/\*+/g, "").trim() ?? ""
      if (label) {
        setSnapshotValue(
          snapshot,
          label,
          getRadioGroupSelectedValue(radioGroup),
        )
      }
    }

    for (const textInputNode of questionNode.querySelectorAll(
      'input[type="text"]:not([data-testid="phone-input"])',
    )) {
      const textInput = textInputNode
      if (textInput.disabled) continue
      const label =
        textInput.getAttribute("aria-label") || textInput.id || ""
      if (label) setSnapshotValue(snapshot, label, textInput.value ?? "")
    }

    const selectSimple = questionNode.querySelector("sdf-select-simple")
    if (selectSimple) {
      const label =
        selectSimple.getAttribute("aria-label")?.trim() ||
        questionNode.querySelector(".qLabel")?.textContent?.trim() ||
        "Select"
      setSnapshotValue(snapshot, label, getSelectDisplayValue(selectSimple))
    }

    const textarea = questionNode.querySelector("textarea")
    if (textarea && !textarea.disabled) {
      const label =
        textarea.getAttribute("aria-label")?.trim() || "Comment"
      setSnapshotValue(snapshot, label, textarea.value ?? "")
    }
  }
}

function getCleanVsidLabelText(labelNode) {
  if (!labelNode) return ""
  const clone = labelNode.cloneNode(true)
  clone
    .querySelectorAll(
      "sdf-icon-button, sdf-icon, .contents, .mdf-required-indicator",
    )
    .forEach((node) => node.remove())
  return clone.textContent?.trim() || ""
}

function captureVsidSnapshot(snapshot) {
  const container = document.querySelector(
    ".personal-step-container.vsid-padding-container, .vsid-padding-container",
  )
  if (!container) return

  for (const comboboxNode of container.querySelectorAll(
    'input[role="combobox"]',
  )) {
    const combobox = comboboxNode
    let labelNode = null
    const wrap = combobox.closest(
      ".vsid-component-padding-bottom, .padding-top",
    )
    if (wrap) labelNode = wrap.querySelector("label.vsid-title, h4")

    let label = getCleanVsidLabelText(labelNode)
    if (!label) {
      label = combobox.getAttribute("aria-label") || "Unknown VSID Field"
    }
    setSnapshotValue(snapshot, label, getSelectDisplayValue(combobox))
  }

  for (const radioGroupNode of container.querySelectorAll(
    "sdf-radio-group",
  )) {
    const radioGroup = radioGroupNode
    let labelNode = null
    const wrap = radioGroup.closest(
      ".vsid-component-padding-bottom, .padding-top",
    )
    if (wrap) labelNode = wrap.querySelector("h4, label.vsid-title")

    let label = getCleanVsidLabelText(labelNode)
    if (!label) {
      label = radioGroup.getAttribute("label") || "Unknown VSID Radio"
    }
    setSnapshotValue(
      snapshot,
      label,
      getRadioGroupSelectedValue(radioGroup),
    )
  }

  for (const checkboxNode of container.querySelectorAll(
    'input[type="checkbox"]',
  )) {
    const checkbox = checkboxNode
    const checkboxWrap = checkbox.closest(".vdl-checkbox")
    if (!checkboxWrap) continue
    const labelNode = checkboxWrap.querySelector("label")
    const label = getCleanVsidLabelText(labelNode)
    if (label) {
      setSnapshotValue(snapshot, label, checkbox.checked ? label : "false")
    }
  }
}

function captureSelfReviewSnapshot(snapshot) {
  const attestation = document.querySelector(".self-review-attestation")
  if (attestation) {
    const checkbox = attestation.querySelector('input[type="checkbox"]')
    if (checkbox) {
      const label =
        attestation.querySelector("h3")?.textContent?.trim() ||
        "Self Attestation"
      const labelNode = attestation.querySelector(
        ".self-review-signature-checkbox label, label",
      )
      const optionLabel =
        labelNode?.textContent?.trim() ||
        "Yes, I agree to sign electronically."
      setSnapshotValue(
        snapshot,
        label,
        checkbox.checked ? optionLabel : "false",
      )
    }
  }

  const signature = document.getElementById("electronicSignature")
  if (signature && !signature.disabled) {
    let labelNode = null
    const labelWrap = signature.closest(".self-review-signature-label")
    if (labelWrap) labelNode = labelWrap.querySelector("label")
    const label =
      labelNode?.textContent?.trim() ||
      signature.getAttribute("aria-label") ||
      "Please type your full name."
    setSnapshotValue(snapshot, label, signature.value ?? "")
  }
}

export function getFormSnapshot() {
  const snapshot = {}
  const fieldNodes = xpath.getOrderedNodesSafe(
    './/div[contains(@class, "mdf-validated-field")]',
  )
  for (const fieldNode of fieldNodes) {
    if (isElementVisible(fieldNode)) {
      captureMdfValidatedFieldSnapshot(fieldNode, snapshot)
    }
  }

  captureGuestLoginFormSnapshot(snapshot)
  capturePersonalCheckboxSnapshot(snapshot)
  capturePhoneFieldSnapshot(snapshot)
  captureQuestionSnapshot(snapshot)
  captureVsidSnapshot(snapshot)
  captureSelfReviewSnapshot(snapshot)

  return { ...snapshot }
}

export function submitHandler(autofillSnapshot) {
  const submitSnapshot = getFormSnapshot()
  const {
    education: submitEducation,
    employment: submitEmployment,
    ...submitRest
  } = submitSnapshot
  const {
    education: autofillEducation,
    employment: autofillEmployment,
    ...autofillRest
  } = autofillSnapshot

  autofillAnswerPairTracking.sendAutofillAnswerPairEvent({
    formUrl: urlStore.useUrlStore.getState().currentTabUrl,
    autofillSnapshot: autofillRest,
    submitSnapshot: submitRest,
    additionalAutofillData: {
      education: autofillEducation,
      employment: autofillEmployment,
    },
    additionalSubmitData: {
      education: submitEducation,
      employment: submitEmployment,
    },
    source: "adp-workforcenow",
  })
}
