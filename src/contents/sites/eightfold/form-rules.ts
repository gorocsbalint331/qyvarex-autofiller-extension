// @ts-nocheck
/**
 * Eightfold ATS filler — form rule extraction and snapshots (readable TypeScript source of truth).
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as operations from "./operations.ts"

function prepareEightfoldAnswerRequestRules(rules) {
  return rules.map((rule) => {
    const label = operations.normalizeEightfoldFieldLabel(rule.label)
    if (
      label !== "number" &&
      label !== "phone number" &&
      label !== "phone phone number"
    ) {
      return rule
    }
    const input = rule.$input
    const type =
      typeof input?.getAttribute === "function"
        ? input.getAttribute("type")
        : input?.type
    if (typeof type !== "string" || type.toLowerCase() !== "number") {
      return rule
    }
    return {
      ...rule,
      $input: {
        type: "text",
        getAttribute: (name) =>
          name.toLowerCase() === "type"
            ? "text"
            : input.getAttribute?.(name),
      },
    }
  })
}

function hasNonEmptyAnswer(value) {
  if (typeof value === "string") return value.trim() !== ""
  return (
    !!Array.isArray(value) &&
    value.some((item) => typeof item === "string" && item.trim() !== "")
  )
}

export function filterAlreadyCommittedEightfoldRules(
  rules,
  filledLabels,
  snapshot,
) {
  const filled = new Set(
    filledLabels.map(operations.normalizeEightfoldFieldLabel).filter(Boolean),
  )
  if (filled.size === 0) return rules
  const snapshotByLabel = new Map(
    Object.entries(snapshot).map(([label, value]) => [
      operations.normalizeEightfoldFieldLabel(label),
      value,
    ]),
  )
  return rules.filter((rule) => {
    const label = operations.normalizeEightfoldFieldLabel(rule.label)
    return !filled.has(label) || !hasNonEmptyAnswer(snapshotByLabel.get(label))
  })
}

function readOpenComboboxOptions(input) {
  const options = []
  try {
    const controlsId = input.getAttribute("aria-controls")
    let listbox = null
    if (controlsId) listbox = document.getElementById(controlsId)
    if (!listbox) {
      const wrapper = input.closest('[class*="select-wrapper"]')
      if (wrapper) listbox = wrapper.querySelector('[role="listbox"]')
    }
    if (!listbox) {
      const openDropdowns = document.querySelectorAll(
        '[class*="dropdown-wrapper"][class*="open"], [class*="dropdown-overlay"][class*="open"]',
      )
      for (const dropdown of Array.from(openDropdowns)) {
        const candidate = dropdown.querySelector('[role="listbox"]')
        if (candidate) {
          const listboxId = candidate.id
          if (listboxId && listboxId === controlsId) {
            listbox = candidate
            break
          }
        }
      }
    }
    if (listbox) {
      for (const option of Array.from(
        listbox.querySelectorAll('[role="option"]'),
      )) {
        const text = getOptionLabelText(option)
        if (text) options.push(text)
      }
    }
  } catch {
    // ignore DOM read failures
  }
  return uniqueTrimmedLabels(options)
}

export async function getComboboxOptionsAsync(input) {
  return await hydrateComboboxOptions(input)
}

function getOptionLabelText(option) {
  const labelSpan = xpath.getFirstOrderedNodeSafe(
    './/span[contains(@class, "label")]',
    option,
  )
  return (
    labelSpan?.textContent?.trim() ||
    option.getAttribute("title")?.trim() ||
    option.textContent?.trim() ||
    ""
  )
}

function uniqueTrimmedLabels(labels) {
  const seen = new Set()
  const result = []
  for (const label of labels) {
    const trimmed = label.replace(/\s+/g, " ").trim()
    const key = trimmed.toLowerCase()
    if (!trimmed || seen.has(key)) continue
    seen.add(key)
    result.push(trimmed)
  }
  return result
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function hydrateComboboxOptions(input) {
  let options = readOpenComboboxOptions(input)
  if (options.length > 0) return options
  try {
    input.focus()
    if (typeof MouseEvent !== "undefined") {
      input.dispatchEvent(
        new MouseEvent("mousedown", { bubbles: true, composed: true }),
      )
      input.dispatchEvent(
        new MouseEvent("mouseup", { bubbles: true, composed: true }),
      )
    }
    input.click()
    for (let attempt = 0; attempt < 8; attempt++) {
      await delay(100)
      options = readOpenComboboxOptions(input)
      if (options.length > 0) break
    }
    if (options.length === 0) {
      const toggle = input.parentElement?.querySelector(
        'button[role="presentation"], button[aria-hidden="true"], button',
      )
      toggle?.click()
      for (let attempt = 0; attempt < 8; attempt++) {
        await delay(100)
        options = readOpenComboboxOptions(input)
        if (options.length > 0) break
      }
    }
  } catch {
    // ignore open failures
  } finally {
    if (typeof KeyboardEvent !== "undefined") {
      input.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Escape",
          bubbles: true,
          composed: true,
        }),
      )
    }
    input.blur()
  }
  return options
}

function hasRequiredClass(el) {
  return (
    !!el &&
    Array.from(el.classList).some(
      (cls) => cls === "required" || /^required-[A-Za-z0-9_-]+$/.test(cls),
    )
  )
}

function hasRequiredAttribute(el) {
  return !!el && el.hasAttribute("required")
}

function subtreeHasRequired(el) {
  if (!el) return false
  return Array.from(el.querySelectorAll("*")).some(
    (node) => hasRequiredClass(node) || hasRequiredAttribute(node),
  )
}

function isFieldRequired(field, labelEl, legendEl) {
  const classRequired =
    hasRequiredClass(field) ||
    hasRequiredClass(labelEl) ||
    hasRequiredClass(legendEl)
  const attrRequired =
    hasRequiredAttribute(field) ||
    hasRequiredAttribute(labelEl) ||
    hasRequiredAttribute(legendEl) ||
    !!xpath.getFirstOrderedNodeSafe(".//*[@required]", field)
  const nestedRequired = subtreeHasRequired(labelEl) || subtreeHasRequired(legendEl)
  return classRequired || attrRequired || nestedRequired
}

export async function extractRules(options = {}) {
  const fields = xpath.getOrderedNodesSafe(
    '//div[contains(@class, "field-")]',
  )
  return fields.length === 0
    ? await extractApplyItemRules(options)
    : await extractFieldDivRules(fields, options)
}

async function extractFieldDivRules(fields, options) {
  const rules = []
  let previousRule = null
  for (let index = 0; index < fields.length; index++) {
    const field = fields[index]
    try {
      const extracted = await extractRuleFromFieldDiv(field, options)
      const list = Array.isArray(extracted)
        ? extracted
        : extracted
          ? [extracted]
          : []
      for (const rule of list) {
        const withConditional = attachConditionalMeta(rule, previousRule)
        rules.push(withConditional)
        previousRule = withConditional
      }
    } catch {
      // skip broken field nodes
    }
  }
  return rules
}

function getApplyItems() {
  const form =
    document.getElementById("careers-apply-form") ||
    document.querySelector("#careers-apply-form")
  return form
    ? Array.from(form.querySelectorAll(".apply-item")).filter(
        (item) => getApplyItemControls(item).length > 0,
      )
    : []
}

function getApplyItemControls(item) {
  return Array.from(
    item.querySelectorAll(
      'input, textarea, select, [role="checkbox"]',
    ),
  ).filter((el) => {
    if (
      el.tagName === "TEXTAREA" ||
      el.tagName === "SELECT" ||
      el.getAttribute("role") === "checkbox"
    ) {
      return true
    }
    if (el.tagName !== "INPUT") return false
    const type = (el.getAttribute("type") || "text").toLowerCase()
    return !["file", "button", "submit"].includes(type)
  })
}

function getApplyItemLabelEl(item) {
  if (item.tagName === "FIELDSET") {
    const legend = item.querySelector("legend")
    if (legend) return legend
  }
  return (
    item.querySelector(".apply-form-item-question-label") ||
    item.querySelector("label") ||
    item.querySelector(".question-label") ||
    item.querySelector("legend")
  )
}

function cleanLabelText(text) {
  return text.replace(/\s*\*\s*$/, "").replace(/\s+/g, " ").trim()
}

function normalizeLooseLabel(text) {
  return cleanLabelText(text)
    .replace(/[:*]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function mapSectionHeading(text) {
  const key = normalizeLooseLabel(text)
  if (key === "legal name") return "Legal Name"
  if (key === "preferred name") return "Preferred Name"
  if (key === "phone") return "Phone"
  return null
}

function isNameSubfieldLabel(text) {
  const key = normalizeLooseLabel(text)
  return key === "first name" || key === "last name" || key === "last"
}

function isLastNameLabel(text) {
  const key = normalizeLooseLabel(text)
  return key === "last name" || key === "last"
}

function isHeadingElement(el) {
  const tag = el.tagName?.toUpperCase() || ""
  return /^H[1-6]$/.test(tag) || el.getAttribute?.("role") === "heading"
}

function collectDescendants(el, out) {
  out.push(el)
  for (const child of Array.from(el.children)) {
    collectDescendants(child, out)
  }
}

function findNearestSectionHeading(field) {
  let ancestor = field
  while (
    ancestor.parentElement &&
    (ancestor = ancestor.parentElement).tagName !== "FORM" &&
    ancestor.id !== "careers-apply-form"
  ) {
    // walk up to form root
  }
  const ordered = []
  collectDescendants(ancestor, ordered)
  const index = ordered.indexOf(field)
  if (index === -1) return null
  for (let i = index - 1; i >= 0; i--) {
    const node = ordered[i]
    if (isHeadingElement(node)) {
      return mapSectionHeading(node.textContent || "")
    }
  }
  return null
}

function inferSectionFromInputMeta(field) {
  const inputs = [
    ...xpath.getOrderedNodesSafe(".//input", field),
    ...xpath.getOrderedNodesSafe(".//textarea", field),
    ...xpath.getOrderedNodesSafe(".//select", field),
  ]
  const joined = inputs
    .map(getInputIdentityText)
    .join(" ")
    .replace(/[^a-z0-9]+/g, " ")
  if (/\bpreferred\b/.test(joined)) return "Preferred Name"
  if (/\blegal\b/.test(joined)) return "Legal Name"
  return null
}

function shouldPrefixWithSection(section, label) {
  const key = normalizeLooseLabel(label)
  if (section === "Phone") return key !== "phone"
  if (section === "Legal Name") {
    return isNameSubfieldLabel(label) || key === "i have a preferred name"
  }
  return isNameSubfieldLabel(label)
}

function maybePrefixLabel(field, label) {
  const section = findNearestSectionHeading(field) || inferSectionFromInputMeta(field)
  return section && shouldPrefixWithSection(section, label)
    ? `${section}: ${cleanLabelText(label)}`
    : label
}

function disambiguateDuplicateLabel(field, label) {
  const key = normalizeLooseLabel(label)
  if (!key) return label
  const fields = xpath.getOrderedNodesSafe(
    '//div[contains(@class, "field-")]',
  )
  const sameLabelFields = fields.filter(
    (candidate) =>
      normalizeLooseLabel(getFieldDivLabelText(candidate)) === key,
  )
  if (sameLabelFields.length < 2) return label
  const prefixed = maybePrefixLabel(field, label)
  if (prefixed === label) return label
  const prefixedKey = normalizeLooseLabel(prefixed)
  const uniquePrefixedCount = sameLabelFields.filter(
    (candidate) =>
      normalizeLooseLabel(
        maybePrefixLabel(candidate, getFieldDivLabelText(candidate)),
      ) === prefixedKey,
  ).length
  return uniquePrefixedCount === 1 ? prefixed : label
}

export function isEightfoldPreferredNameOptInLabel(label) {
  const key = operations.normalizeEightfoldFieldLabel(label)
  return (
    key === "i have a preferred name" ||
    key === "legal name i have a preferred name"
  )
}

export function hasEightfoldPreferredNameFields() {
  const labels = getNormalizedFieldLabelsOnPage()
  return (
    labels.has("preferred name first name") &&
    (labels.has("preferred name last name") ||
      labels.has("preferred name last"))
  )
}

function getNormalizedFieldLabelsOnPage() {
  const fields = xpath.getOrderedNodesSafe(
    '//div[contains(@class, "field-")]',
  )
  return new Set(
    fields.map((field) =>
      operations.normalizeEightfoldFieldLabel(
        disambiguateDuplicateLabel(field, getFieldDivLabelText(field)),
      ),
    ),
  )
}

export function hasEightfoldPhoneDependentFields() {
  const labels = getNormalizedFieldLabelsOnPage()
  return labels.has("phone device type") && labels.has("phone number")
}

function parseConditionalPrefix(label) {
  const match = label.trim().match(/^if\s+(yes|no)\b/i)
  return match ? match[1].toLowerCase() : null
}

function attachConditionalMeta(rule, previousRule) {
  const condition = parseConditionalPrefix(rule.label)
  if (!condition || !previousRule?.label) return rule
  const next = rule
  const parentLabel = previousRule.label
  const hint = `Conditional follow-up. Parent question: ${parentLabel}. Only answer this field if the parent question answer is ${condition}.`
  next.description = next.description ? `${next.description} ${hint}` : hint
  next.__eightfoldConditional = {
    condition,
    parentLabel,
    parentRule: previousRule,
  }
  return next
}

function findPhoneInputsInField(field) {
  const inputs = xpath.getOrderedNodesSafe(".//input", field)
  const identity = (input) => {
    const id = input.id || ""
    const testId = input.getAttribute("data-test-id") || ""
    const placeholder = input.getAttribute("placeholder") || ""
    return `${id} ${testId} ${placeholder}`.toLowerCase().replace(/\s+/g, " ")
  }
  const isCountryCode = (input) => {
    if (input.getAttribute("role") !== "combobox") return false
    const text = identity(input)
    return text.includes("country-code") || text.includes("country code")
  }
  const isPhoneNumber = (input) => {
    const role = input.getAttribute("role")
    const type = input.getAttribute("type") || "text"
    const id = input.id || ""
    const testId = input.getAttribute("data-test-id") || ""
    const placeholder = input.getAttribute("placeholder") || ""
    const text = identity(input)
    return (
      type !== "hidden" &&
      (role === "textbox" || role === "spinbutton" || !role) &&
      (type === "text" || type === "number" || type === "tel") &&
      (id.toLowerCase().includes("phone") ||
        testId.toLowerCase().includes("phone") ||
        placeholder.toLowerCase().includes("phone")) &&
      !text.includes("country-code") &&
      !text.includes("country code")
    )
  }
  const countryCodeIndex = inputs.findIndex(isCountryCode)
  const phoneCodeInput =
    countryCodeIndex >= 0 ? inputs[countryCodeIndex] : null
  const phoneInput =
    inputs.find(
      (input, index) => index > countryCodeIndex && isPhoneNumber(input),
    ) || null
  return { phoneCodeInput, phoneInput }
}

function getFieldDivLabelText(field) {
  const label = xpath.getFirstOrderedNodeSafe(
    './/label[contains(@id, "_label")]',
    field,
  )
  const legend = xpath.getFirstOrderedNodeSafe(
    './/legend[contains(@id, "_legend")]',
    field,
  )
  return (label?.textContent || legend?.textContent || "").trim()
}

export function getEightfoldLiveTextInputByLabel(requestedLabel) {
  const key = normalizeLooseLabel(requestedLabel)
  if (!key) return null
  const fields = xpath.getOrderedNodesSafe(
    '//div[contains(@class, "field-")]',
  )
  for (const field of fields) {
    const fieldLabel = normalizeLooseLabel(
      disambiguateDuplicateLabel(field, getFieldDivLabelText(field)),
    )
    const exact = fieldLabel === key
    const phoneComposite = key === "number" && fieldLabel === "phone"
    if (!exact && !phoneComposite) continue
    if (phoneComposite) {
      const phoneInput = findPhoneInputsInField(field).phoneInput
      console.debug("[Eightfold][Phone] text-input-resolved", {
        requestedLabel,
        resolution: "primary-phone-composite",
        inputIdentity:
          phoneInput?.getAttribute("data-test-id") || phoneInput?.id || "",
      })
      return phoneInput
    }
    if (isLinkedInUrlLabel(requestedLabel)) return findLinkedInInput(field)
    const input =
      findTextLikeInput(field) ||
      xpath.getFirstOrderedNodeSafe(".//textarea", field)
    if (key === "number" || key === "phone number") {
      console.debug("[Eightfold][Phone] text-input-resolved", {
        requestedLabel,
        resolution: "exact-field-label",
        inputIdentity:
          input?.getAttribute("data-test-id") || input?.id || "",
      })
    }
    return input
  }
  if (key === "number" || key === "phone number") {
    console.debug("[Eightfold][Phone] text-input-not-found", {
      requestedLabel,
    })
  }
  return null
}

function applyItemLooksRequired(item, labelEl) {
  const labelText = labelEl?.textContent || ""
  const itemText = `${item.textContent || ""} ${item.innerText || ""}`
  return labelText.includes("*") || itemText.includes("*")
}

function isPhoneNumberLabel(label) {
  return label.toLowerCase().trim() === "phone number"
}

function isPlainTextInput(el) {
  if (el.tagName !== "INPUT" || el.getAttribute("role") === "combobox") {
    return false
  }
  const type = (el.getAttribute("type") || "text").toLowerCase()
  return !["hidden", "file", "radio", "checkbox", "button", "submit"].includes(
    type,
  )
}

function normalizeIdentityKey(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function isLinkedInUrlLabel(label) {
  const key = normalizeIdentityKey(label)
  return (
    key.includes("linkedin") &&
    (key.includes("url") || key.includes("profile") || key === "linkedin")
  )
}

function isFillableTextInput(el) {
  if (el.tagName !== "INPUT" || el.getAttribute("role") === "combobox") {
    return false
  }
  const type = (el.getAttribute("type") || el.type || "text").toLowerCase()
  if (
    ["hidden", "file", "radio", "checkbox", "button", "submit"].includes(type)
  ) {
    return false
  }
  const role = el.getAttribute("role")
  return (
    role === "textbox" ||
    role === "spinbutton" ||
    ["text", "number", "email", "tel", "url", "time"].includes(type) ||
    el.hasAttribute("data-test-id")
  )
}

function getInputIdentityText(el) {
  return [
    el.id,
    el.name,
    el.getAttribute("data-test-id"),
    el.getAttribute("placeholder"),
    el.getAttribute("aria-label"),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
}

function findTextLikeInput(field) {
  const inputs = xpath.getOrderedNodesSafe(".//input", field)
  return inputs.find(isFillableTextInput) || null
}

function findLinkedInInput(field) {
  const inputs = xpath.getOrderedNodesSafe(".//input", field)
  return (
    inputs.find((input) => {
      if (!isFillableTextInput(input)) return false
      const type = (input.getAttribute("type") || input.type || "text").toLowerCase()
      return type === "url" || getInputIdentityText(input).includes("linkedin")
    }) || null
  )
}

async function extractRuleFromApplyItem(item, options = {}) {
  const labelEl = getApplyItemLabelEl(item)
  const label = cleanLabelText(labelEl?.textContent || "")
  if (!label) return null
  const required = applyItemLooksRequired(item, labelEl)
  const controls = getApplyItemControls(item)
  const checkboxes = controls.filter(
    (el) =>
      (el.tagName === "INPUT" && el.getAttribute("type") === "checkbox") ||
      el.getAttribute("role") === "checkbox",
  )
  if (checkboxes.length > 0) {
    const optionLabels = checkboxes
      .map(
        (el) =>
          el.getAttribute("aria-label") ||
          el.textContent?.trim() ||
          el.value ||
          "",
      )
      .filter((text) => text)
    return {
      type: enums.FIELD_TYPE.CHECKBOX,
      label,
      required,
      options: optionLabels,
      $checkboxs: checkboxes,
      $input: checkboxes[0],
      $label: labelEl,
    }
  }
  const textarea = controls.find((el) => el.tagName === "TEXTAREA")
  if (textarea) {
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required,
      $input: textarea,
      $label: labelEl,
    }
  }
  const textInput = controls.find(isPlainTextInput)
  if (textInput) {
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required,
      $input: textInput,
      $label: labelEl,
    }
  }
  if (!isPhoneNumberLabel(label)) {
    const combobox = controls.find(
      (el) =>
        el.tagName === "INPUT" && el.getAttribute("role") === "combobox",
    )
    if (combobox) {
      const shouldHydrate =
        options.shouldHydrateSelectOptions?.(label, combobox) ?? true
      const selectOptions = shouldHydrate
        ? await hydrateComboboxOptions(combobox)
        : readOpenComboboxOptions(combobox)
      return {
        type: enums.FIELD_TYPE.SELECT,
        label,
        required,
        options: selectOptions,
        $input: combobox,
        $label: labelEl,
      }
    }
  }
  const select = controls.find((el) => el.tagName === "SELECT")
  if (select) {
    const selectOptions = Array.from(select.options).map(
      (option) => option.textContent?.trim() || option.value,
    )
    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      required,
      options: selectOptions.filter((text) => text),
      $input: select,
      $label: labelEl,
    }
  }
  return null
}

async function extractApplyItemRules(options) {
  const rules = []
  const items = getApplyItems()
  let previousRule = null
  for (const item of items) {
    const rule = await extractRuleFromApplyItem(item, options)
    if (rule) {
      const withConditional = attachConditionalMeta(rule, previousRule)
      rules.push(withConditional)
      previousRule = withConditional
    }
  }
  return rules
}

async function extractRuleFromFieldDiv(field, options) {
  const isInstructionOnly = !!xpath.getFirstOrderedNodeSafe(
    './/div[contains(@class, "instruction-") or contains(@class, "readMoreWrapper-")]',
    field,
  )
  if (
    isInstructionOnly &&
    !xpath.getFirstOrderedNodeSafe(
      ".//input | .//textarea | .//select",
      field,
    )
  ) {
    return null
  }
  const labelEl = xpath.getFirstOrderedNodeSafe(
    './/label[contains(@id, "_label")]',
    field,
  )
  const legendEl = xpath.getFirstOrderedNodeSafe(
    './/legend[contains(@id, "_legend")]',
    field,
  )
  let rawLabel = ""
  if (labelEl) rawLabel = (labelEl.textContent || "").trim()
  else if (legendEl) rawLabel = (legendEl.textContent || "").trim()
  if (!rawLabel) return null
  const originalLabel = rawLabel
  rawLabel = disambiguateDuplicateLabel(field, originalLabel)
  const isCountry = operations.isEightfoldCountryLabel(rawLabel)
  const required =
    isFieldRequired(field, labelEl, legendEl) || isLastNameLabel(originalLabel)
  const isPhoneComposite = rawLabel.toLowerCase().trim() === "phone"
  if (isPhoneComposite) {
    const { phoneCodeInput, phoneInput } = findPhoneInputsInField(field)
    const phoneRules = []
    if (phoneCodeInput) {
      const shouldHydrate =
        options.shouldHydrateSelectOptions?.(
          "Country Code",
          phoneCodeInput,
        ) ?? true
      const codeOptions = shouldHydrate
        ? await hydrateComboboxOptions(phoneCodeInput)
        : readOpenComboboxOptions(phoneCodeInput)
      phoneRules.push({
        type: enums.FIELD_TYPE.SELECT,
        label: "Country Code",
        required,
        options: codeOptions,
        $input: phoneCodeInput,
        $label: labelEl || legendEl,
      })
    }
    if (phoneInput) {
      phoneRules.push({
        type: enums.FIELD_TYPE.TEXT,
        label: "Number",
        required,
        $input: phoneInput,
        $label: labelEl || legendEl,
      })
    }
    return phoneRules.length > 0 ? phoneRules : null
  }
  if (isCountry) {
    const countryInput = xpath.getFirstOrderedNodeSafe(
      './/input[@role="combobox" or @role="textbox" or contains(@data-test-id, "Country")]',
      field,
    )
    return countryInput
      ? {
          type: enums.FIELD_TYPE.SELECT,
          label: rawLabel,
          required,
          options: [],
          $input: countryInput,
          $label: labelEl || legendEl,
        }
      : null
  }
  if (isLinkedInUrlLabel(rawLabel)) {
    const linkedInInput = findLinkedInInput(field)
    return linkedInInput
      ? {
          type: enums.FIELD_TYPE.TEXT,
          label: rawLabel,
          required,
          $input: linkedInInput,
          $label: labelEl || legendEl,
        }
      : null
  }
  const combobox = xpath.getFirstOrderedNodeSafe(
    './/input[@role="combobox"]',
    field,
  )
  if (combobox) {
    const skipHydration =
      operations.isMicrosoftEightfoldHost() &&
      operations.isUnfillableMicrosoftLabel(rawLabel)
    const shouldHydrate =
      options.shouldHydrateSelectOptions?.(rawLabel, combobox) ?? true
    const selectOptions =
      skipHydration || !shouldHydrate
        ? []
        : await hydrateComboboxOptions(combobox)
    return {
      type: enums.FIELD_TYPE.SELECT,
      label: rawLabel,
      required,
      options: selectOptions,
      $input: combobox,
      $label: labelEl || legendEl,
    }
  }
  {
    const textInput = findTextLikeInput(field)
    if (textInput) {
      return {
        type: enums.FIELD_TYPE.TEXT,
        label: rawLabel,
        required,
        $input: textInput,
        $label: labelEl || legendEl,
      }
    }
  }
  const textarea = xpath.getFirstOrderedNodeSafe(".//textarea", field)
  if (textarea) {
    return {
      type: enums.FIELD_TYPE.TEXT,
      label: rawLabel,
      required,
      $input: textarea,
      $label: labelEl || legendEl,
    }
  }
  const checkboxes = xpath.getOrderedNodesSafe(
    './/input[@type="checkbox"]',
    field,
  )
  if (checkboxes.length > 0) {
    const optionLabels = checkboxes.map((checkbox) => {
      const forLabel = xpath.getFirstOrderedNodeSafe(
        `//label[@for="${checkbox.id}"]`,
      )
      return forLabel?.textContent?.trim() || checkbox.value || ""
    })
    return {
      type: enums.FIELD_TYPE.CHECKBOX,
      label: rawLabel,
      required,
      options: optionLabels.filter((text) => text),
      $checkboxs: checkboxes,
      $input: checkboxes[0],
      $label: labelEl || legendEl,
    }
  }
  const radios = xpath.getOrderedNodesSafe('.//input[@type="radio"]', field)
  if (radios.length > 0) {
    const optionLabels = radios.map((radio) => {
      const forLabel = xpath.getFirstOrderedNodeSafe(
        `//label[@for="${radio.id}"]`,
      )
      return forLabel?.textContent?.trim() || radio.value || ""
    })
    return {
      type: enums.FIELD_TYPE.RADIOGROUP,
      label: rawLabel,
      required,
      options: optionLabels.filter((text) => text),
      $radioParent: field,
      $input: radios[0],
      $label: labelEl || legendEl,
    }
  }
  const select = xpath.getFirstOrderedNodeSafe(".//select", field)
  if (select) {
    const selectOptions = Array.from(select.options).map(
      (option) => option.textContent?.trim() || option.value,
    )
    return {
      type: enums.FIELD_TYPE.SELECT,
      label: rawLabel,
      required,
      options: selectOptions.filter((text) => text),
      $input: select,
      $label: labelEl || legendEl,
    }
  }
  return null
}

export async function getFormSnapshot() {
  const snapshot = {}
  const fields = xpath.getOrderedNodesSafe(
    '//div[contains(@class, "field-")]',
  )
  if (fields.length === 0) return await getApplyItemFormSnapshot()
  for (const field of fields) {
    const labelEl = xpath.getFirstOrderedNodeSafe(
      './/label[contains(@id, "_label")]',
      field,
    )
    const legendEl = xpath.getFirstOrderedNodeSafe(
      './/legend[contains(@id, "_legend")]',
      field,
    )
    let label = ""
    if (labelEl) label = (labelEl.textContent || "").trim()
    else if (legendEl) label = (legendEl.textContent || "").trim()
    if (!label) continue
    label = disambiguateDuplicateLabel(field, label)
    if (label.toLowerCase().trim() === "phone") {
      const { phoneCodeInput, phoneInput } = findPhoneInputsInField(field)
      if (phoneCodeInput) snapshot["Country Code"] = phoneCodeInput.value || ""
      if (phoneInput) snapshot.Number = phoneInput.value || ""
      if (phoneCodeInput || phoneInput) continue
    }
    if (isLinkedInUrlLabel(label)) {
      const linkedInInput = findLinkedInInput(field)
      if (linkedInInput) snapshot[label] = linkedInInput.value
      continue
    }
    const combobox = xpath.getFirstOrderedNodeSafe(
      './/input[@role="combobox"]',
      field,
    )
    if (combobox) {
      snapshot[label] =
        combobox.value || combobox.parentElement?.textContent?.trim() || ""
      continue
    }
    const textInput = findTextLikeInput(field)
    if (textInput) {
      snapshot[label] = textInput.value
      continue
    }
    const textarea = xpath.getFirstOrderedNodeSafe(".//textarea", field)
    if (textarea) {
      snapshot[label] = textarea.value
      continue
    }
    const checkboxes = xpath.getOrderedNodesSafe(
      './/input[@type="checkbox"]',
      field,
    )
    if (checkboxes.length > 0) {
      snapshot[label] = checkboxes
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => {
          const nearestLabel = checkbox.closest("label")
          return (
            (nearestLabel && nearestLabel.textContent?.trim()) ||
            checkbox.value
          )
        })
      continue
    }
    const radios = xpath.getOrderedNodesSafe(
      './/input[@type="radio"]',
      field,
    )
    if (radios.length > 0) {
      const checked = radios.find((radio) => radio.checked)
      if (checked) {
        const forLabel = xpath.getFirstOrderedNodeSafe(
          `//label[@for="${checked.id}"]`,
        )
        snapshot[label] =
          forLabel?.textContent?.trim() || checked.value || ""
        continue
      }
    }
  }
  return snapshot
}

async function getApplyItemFormSnapshot() {
  const snapshot = {}
  const items = getApplyItems()
  for (const item of items) {
    const rule = await extractRuleFromApplyItem(item)
    if (!rule) continue
    if (rule.type === enums.FIELD_TYPE.CHECKBOX) {
      snapshot[rule.label] = (rule.$checkboxs || [])
        .filter((checkbox) => {
          const className = checkbox.getAttribute("class") || ""
          return (
            checkbox.checked ||
            className.includes("fa-check") ||
            className.includes("checked")
          )
        })
        .map(
          (checkbox) =>
            checkbox.getAttribute("aria-label") ||
            checkbox.textContent?.trim() ||
            checkbox.value ||
            "",
        )
        .filter((text) => text)
      continue
    }
    const input = rule.$input
    if (input) {
      if (
        rule.type === enums.FIELD_TYPE.SELECT &&
        input.tagName === "SELECT"
      ) {
        const selected = input.selectedOptions?.[0]
        snapshot[rule.label] =
          selected?.textContent?.trim() || input.value || ""
        continue
      }
      snapshot[rule.label] = input.value || input.textContent?.trim() || ""
    }
  }
  return snapshot
}

export function getDataPrivacyAgreementButton() {
  return document.querySelector(
    '#confirmUploadResume[data-test-id="confirm-upload-resume"]',
  )
}

export { prepareEightfoldAnswerRequestRules }
