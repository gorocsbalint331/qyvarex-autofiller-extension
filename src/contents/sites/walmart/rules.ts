// @ts-nocheck
/**
 * Walmart form rule extraction — labels, required markers, combo questions, snapshots.
 */

import * as enums from "../../../core/enums.js"

const FORM_ROOT_SELECTOR =
  'form, main, [role="main"], [data-testid*="application" i], [data-testid*="apply" i], [data-testid*="step" i], [class*="application" i], [class*="apply" i], [class*="step" i], [id*="application" i], [id*="apply" i]'

const FIELD_SELECTOR =
  'input:not([type="hidden"]):not([type="button"]):not([type="submit"]):not([type="reset"]), textarea, select, [role="combobox"], [aria-haspopup="listbox"], [aria-haspopup="menu"], button[aria-expanded][type="button"]'

const EXCLUDE_ROOT_SELECTOR =
  '[role="search"], [role="navigation"], header, nav, footer, #jobright-helper-id, #jobright-helper-plugin'

const ADDRESS_LABEL_PATTERNS = [
  /^address line 1$/i,
  /^address line 2/i,
  /^city$/i,
  /^state$/i,
  /^zip code$/i,
  /^postal code$/i,
]

const SECTION_LABEL_PATTERNS = [
  /^website/i,
  /^url\b/i,
  /^work$/i,
  /work experience/i,
  /employment history/i,
  /^education$/i,
  /^languages?$/i,
]

const APPLICATION_STEP_PATTERNS = [
  /resume/i,
  /cover letter/i,
  /application/i,
  /submit/i,
  /apply/i,
  /work and education/i,
  /employment history/i,
  /work experience/i,
  /add work experience/i,
  /add education/i,
  /add language/i,
  /add languages/i,
  /military service/i,
  /wotc/i,
  /work opportunity tax credit/i,
  /voluntary disclosure/i,
  /website/i,
]

const SEARCH_NOISE_PATTERNS = [
  /search by team/i,
  /^search$/i,
  /keyword/i,
  /^(?:career areas|brands|resources|about us|user account icon)$/i,
]

const NAV_NOISE_PATTERNS = [
  /^user account icon$/i,
  /\baccount icon\b/i,
  /^career areas$/i,
  /^brands$/i,
  /^resources$/i,
  /^about us$/i,
  /^military$/i,
]

const ACTION_LABEL_PATTERNS = [
  /^remove$/i,
  /^delete$/i,
  /^add another website$/i,
  /^add website$/i,
  /^continue$/i,
  /^back$/i,
  /^submit$/i,
]

const RESUME_NOISE_PATTERNS = [
  /^(?:resume(?:\/cv)?|cv|cover letter)?\s*maximum\s+\d+(?:\.\d+)?\s*(?:kb|mb|gb)(?:\b.*)?$/i,
  /^(?:resume(?:\/cv)?|cv|cover letter)\s+(?:file\s+)?(?:max|maximum)\s+\d+(?:\.\d+)?\s*(?:kb|mb|gb)(?:\b.*)?$/i,
  /^(?:resume|resume\/cv|cv)$/i,
]

const MAX_ANCESTOR_DEPTH = 10
const MAX_LABEL_LENGTH = 260

function cssEscape(value) {
  return "undefined" != typeof CSS && "function" == typeof CSS.escape
    ? CSS.escape(value)
    : value.replace(/["\\]/g, "\\$&")
}

function normalizeWalmartQuestionLabel(value) {
  const wotc = getWalmartWotcConsentLabel(value)
  return (
    wotc ||
    (value ?? "")
      .replace(/[*\uff0a:]/g, "")
      .replace(/\s+/g, " ")
      .replace(/\s*\(\s*(?:optional|required)\s*\)\s*$/gi, "")
      .replace(/\s+\b(?:optional|required)\b\s*$/i, "")
      .trim()
  )
}

function cleanLabel(value) {
  return normalizeWalmartQuestionLabel(value)
}

function collapseSpace(value) {
  return (value ?? "").replace(/\s+/g, " ").trim()
}

function getWalmartWotcConsentLabel(value) {
  const text = collapseSpace(value)
  if (
    !text ||
    !/wotc|work opportunity tax credit|irs form 8850|eta form 9175|please confirm your first and last name/i.test(
      text,
    )
  ) {
    return ""
  }
  const match = text.match(
    /under penalties of perjury,\s*i declare that i gave the above information to the employer on or before the day i was offered a job, and it is, to the best of my knowledge, true, correct, and complete\./i,
  )
  return match ? collapseSpace(match[0]) : ""
}

function hasWalmartRequiredMarkerForLabel(rawText, label) {
  const text = collapseSpace(rawText)
  const cleaned = cleanLabel(label)
  if (!text || !cleaned) return false
  const escaped = escapeRegExp(cleaned)
  return RegExp(
    `^\\s*${escaped}\\s*(?:\\*|\\uFF0A|\\(\\s*required\\s*\\)|\\brequired\\b)`,
    "i",
  ).test(text)
}

function stripRequiredMarker(value) {
  const text = collapseSpace(value)
  if (!text) return ""
  const starIndex = text.search(/[*\uff0a]/)
  const before = starIndex >= 0 ? text.slice(0, starIndex) : text
  return cleanLabel(before)
}

function toLowerLabel(value) {
  return cleanLabel(value).toLowerCase()
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function looksLikeGeneratedId(value) {
  const text = cleanLabel(value)
  if (!text || /\s/.test(text)) return false
  if (/^react-aria-?\d+[a-z0-9-]*$/i.test(text)) return true
  const hex = text.replace(/[-_]/g, "")
  return hex.length >= 24 && /^[a-f0-9]+$/i.test(hex)
}

function isActionLabel(value) {
  const text = cleanLabel(value)
  return ACTION_LABEL_PATTERNS.some((pattern) => pattern.test(text))
}

function isResumeNoiseLabel(value) {
  const text = cleanLabel(value)
  return RESUME_NOISE_PATTERNS.some((pattern) => pattern.test(text))
}

function isNavNoiseLabel(value) {
  const text = cleanLabel(value)
  return NAV_NOISE_PATTERNS.some((pattern) => pattern.test(text))
}

function isWalmartQuestionLabel(value) {
  const text = cleanLabel(value)
  return (
    text.length > 0 &&
    text.length <= MAX_LABEL_LENGTH &&
    !looksLikeGeneratedId(text) &&
    !isActionLabel(text) &&
    !isNavNoiseLabel(text) &&
    !isResumeNoiseLabel(text)
  )
}

function isUsableLabel(value) {
  return isWalmartQuestionLabel(value)
}

function isHtmlElement(node) {
  return "undefined" != typeof HTMLElement && node instanceof HTMLElement
}

function getChildNodes(element) {
  return Array.from(element.childNodes?.length ? element.childNodes : element.children)
}

function findChildContaining(parent, target) {
  return (
    getChildNodes(parent).find(
      (child) => child === target || (isHtmlElement(child) && child.contains(target)),
    ) ?? null
  )
}

function hasOtherFields(container, exclude) {
  return Array.from(container.querySelectorAll(FIELD_SELECTOR)).some(
    (node) => node !== exclude,
  )
}

function readSiblingText(node, field) {
  if (!isHtmlElement(node)) return collapseSpace(node.textContent)
  if (!isVisible(node) || hasOtherFields(node, field)) return ""
  const tag = node.tagName
  const role = toLowerLabel(node.getAttribute("role"))
  return "BUTTON" === tag ||
    "INPUT" === tag ||
    "TEXTAREA" === tag ||
    "SELECT" === tag ||
    "button" === role
    ? ""
    : collapseSpace(node.innerText || node.textContent)
}

function getPrecedingSiblingLabel(field, container) {
  const text = getPrecedingSiblingRawText(field, container)
  const stripped = stripRequiredMarker(text)
  const label = stripped || cleanLabel(text)
  return isUsableLabel(label) ? label : ""
}

function getPrecedingSiblingRawText(field, container) {
  const child = findChildContaining(container, field)
  if (!child) return ""
  const children = getChildNodes(container)
  const index = children.indexOf(child)
  return index <= 0
    ? ""
    : collapseSpace(
        children
          .slice(0, index)
          .map((node) => readSiblingText(node, field))
          .filter(Boolean)
          .join(" "),
      )
}

function getAncestors(field) {
  const ancestors = []
  let parent = field.parentElement
  let depth = 0
  while (
    parent &&
    depth < MAX_ANCESTOR_DEPTH &&
    (ancestors.push(parent), "FORM" !== parent.tagName && "MAIN" !== parent.tagName)
  ) {
    parent = parent.parentElement
    depth += 1
  }
  return ancestors
}

function isVisible(element) {
  if (
    !element ||
    ("hidden" in element && element.hidden) ||
    element.getAttribute?.("aria-hidden") === "true"
  ) {
    return false
  }
  const inline = toLowerLabel(element.getAttribute?.("style")).replace(/\s+/g, "")
  if (inline.includes("display:none") || inline.includes("visibility:hidden")) {
    return false
  }
  if ("undefined" != typeof window && "function" == typeof window.getComputedStyle) {
    const style = window.getComputedStyle(element)
    if ("none" === style.display || "hidden" === style.visibility) return false
  }
  return true
}

function isSearchNoise(element) {
  if (element.closest('[role="search"], [role="navigation"], header, footer, nav')) {
    return true
  }
  const tokens = [
    element.type,
    element.getAttribute("aria-label"),
    element.getAttribute("placeholder"),
    element.getAttribute("name"),
    element.id,
    element.textContent,
  ]
    .map(toLowerLabel)
    .filter(Boolean)
  return tokens.some((token) =>
    SEARCH_NOISE_PATTERNS.some((pattern) => pattern.test(token)),
  )
}

function isDateCombobox(element) {
  return (
    element instanceof HTMLInputElement &&
    "combobox" === element.getAttribute("role") &&
    "grid" === element.getAttribute("aria-haspopup")
  )
}

function isCalendarPickerButton(element) {
  const text = toLowerLabel(
    `${element.getAttribute("aria-label") ?? ""} ${element.textContent ?? ""}`,
  )
  return (
    "BUTTON" === element.tagName &&
    "button" === element.getAttribute("type") &&
    text.includes("calendar picker")
  )
}

function getLabelForId(element, root) {
  if (!element.id) return ""
  const label = root.querySelector(`label[for="${cssEscape(element.id)}"]`)
  return cleanLabel(label?.textContent)
}

function getRawLabelForId(element, root) {
  if (!element.id) return ""
  const label = root.querySelector(`label[for="${cssEscape(element.id)}"]`)
  return collapseSpace(label?.textContent)
}

function findNearbyLabel(element) {
  const closestLabel = element.closest("label")
  if (isUsableLabel(closestLabel?.textContent)) {
    return cleanLabel(closestLabel.textContent)
  }
  for (const ancestor of getAncestors(element)) {
    const labelNode = ancestor.querySelector(
      "label, legend, [data-testid*='label' i], [class*='label' i]",
    )
    if (isUsableLabel(labelNode?.textContent)) {
      return cleanLabel(labelNode?.textContent)
    }
    const preceding = getPrecedingSiblingLabel(element, ancestor)
    if (preceding) return preceding
  }
  return ""
}

function collectRawLabelCandidates(element, root) {
  const candidates = [
    getRawLabelForId(element, root),
    collapseSpace(element.closest("label")?.textContent),
  ]
  for (const ancestor of getAncestors(element)) {
    const labelNode = ancestor.querySelector(
      "label, legend, [data-testid*='label' i], [class*='label' i]",
    )
    candidates.push(collapseSpace(labelNode?.textContent))
    candidates.push(getPrecedingSiblingRawText(element, ancestor))
  }
  return candidates.filter(Boolean)
}

function resolveFieldLabel(element, root) {
  const forLabel = getLabelForId(element, root)
  const attrs = [
    element.getAttribute("aria-label"),
    element.getAttribute("placeholder"),
    element.getAttribute("name"),
    element.id,
  ]
  return (
    (isUsableLabel(forLabel) ? forLabel : "") ||
    findNearbyLabel(element) ||
    attrs.map(cleanLabel).find((label) => isUsableLabel(label)) ||
    ""
  )
}

function isRequiredField(element, label, root) {
  const containerText = element.closest("label, fieldset, div")?.textContent ?? ""
  const rawCandidates = collectRawLabelCandidates(element, root)
  return (
    (!!(
      element instanceof HTMLInputElement ||
      element instanceof HTMLTextAreaElement ||
      element instanceof HTMLSelectElement
    ) &&
      element.required) ||
    "true" === element.getAttribute("aria-required") ||
    /[*\uff0a]/.test(label) ||
    /\brequired\b/i.test(label) ||
    rawCandidates.some((raw) => hasWalmartRequiredMarkerForLabel(raw, label)) ||
    /[*\uff0a]|\brequired\b/i.test(containerText)
  )
}

function containerHasRequiredMarker(container) {
  return /[*\uff0a]|\brequired\b/i.test(container?.textContent ?? "")
}

function getOptionLabel(input) {
  const idLabel = cleanLabel(input.id)
  return (
    cleanLabel(input.closest("label")?.textContent) ||
    cleanLabel(input.nextElementSibling?.textContent) ||
    cleanLabel(input.value) ||
    (isUsableLabel(idLabel) ? idLabel : "")
  )
}

function getInputName(input) {
  return input.name || input.getAttribute("name") || ""
}

function getSameTypeInputs(root, input) {
  const name = getInputName(input)
  const selector = `input[type="${input.type}"]`
  return Array.from(root.querySelectorAll(selector)).filter(
    (node) =>
      node.type === input.type &&
      isVisible(node) &&
      (!name || getInputName(node) === name),
  )
}

function hasSiblingSameType(root, input) {
  return getSameTypeInputs(root, input).length > 1
}

function findRadioGroupContainer(input) {
  const container =
    input.closest("fieldset") ||
    input.closest('[role="radiogroup"], [role="group"]')
  return container && (container.querySelector("legend") || hasSiblingSameType(container, input))
    ? container
    : null
}

function resolveChoiceContainer(input, root) {
  const group = findRadioGroupContainer(input)
  if (group) return group
  if ("radio" !== input.type) {
    return (
      input.closest("fieldset") ||
      input.closest('[role="group"]') ||
      input.closest("label") ||
      input.closest("div") ||
      input.parentElement ||
      root
    )
  }
  for (const ancestor of getAncestors(input)) {
    if (
      hasSiblingSameType(ancestor, input) &&
      (getPrecedingSiblingLabel(input, ancestor) || ancestor.querySelector("legend"))
    ) {
      return ancestor
    }
  }
  return input.closest("div") || input.parentElement || root
}

function labelEqualsOptionSet(label, options) {
  const lower = toLowerLabel(label)
  if (!lower) return true
  const optionSet = options.map(toLowerLabel).filter(Boolean)
  if (optionSet.some((option) => option === lower)) return true
  const remainder = optionSet
    .sort((a, b) => b.length - a.length)
    .reduce(
      (text, option) => text.replace(RegExp(`\\b${escapeRegExp(option)}\\b`, "gi"), " "),
      lower,
    )
    .replace(/\s+/g, " ")
    .trim()
  return !remainder
}

function getAriaLabelledByText(element, root) {
  const ids = element.getAttribute("aria-labelledby")
  return ids
    ? cleanLabel(
        ids
          .split(/\s+/)
          .map((id) => root.querySelector(`#${cssEscape(id)}`))
          .map((node) => node?.textContent)
          .filter(Boolean)
          .join(" "),
      )
    : ""
}

function resolveChoiceGroupLabel(input, container, root, optionLabels) {
  const candidates = [
    stripRequiredMarker(container.querySelector("legend")?.textContent),
    getAriaLabelledByText(container, root),
    getAriaLabelledByText(input, root),
    cleanLabel(container.getAttribute("aria-label")),
    cleanLabel(input.getAttribute("aria-label")),
  ]
  for (const ancestor of getAncestors(input)) {
    candidates.push(getPrecedingSiblingLabel(input, ancestor))
  }
  return (
    candidates
      .map(cleanLabel)
      .find((label) => isUsableLabel(label) && !labelEqualsOptionSet(label, optionLabels)) ||
    ""
  )
}

function choiceDedupeKey(type, input, label) {
  const name = getInputName(input)
  return name ? `${type}:name:${name}` : `${type}:label:${toLowerLabel(label)}`
}

function isWalmartApplicationStepText(value) {
  const text = toLowerLabel(value)
  return APPLICATION_STEP_PATTERNS.some((pattern) => pattern.test(text))
}

function looksLikeChoiceCluster(input, root) {
  if (
    !(input instanceof HTMLInputElement) ||
    ("radio" !== input.type && "checkbox" !== input.type)
  ) {
    return false
  }
  const container = resolveChoiceContainer(input, root)
  const siblings = getSameTypeInputs(container ?? root, input)
  if (siblings.length <= 1) return false
  const optionLabels = siblings.map(getOptionLabel).filter(Boolean)
  return !!resolveChoiceGroupLabel(input, container, root, optionLabels)
}

function isLikelyFormRoot(root) {
  if (root.closest(EXCLUDE_ROOT_SELECTOR)) return false
  const fields = collectFields(root)
  if (0 === fields.length) return false
  const text = toLowerLabel(root.textContent)
  return (
    fields.some((field) => "file" === field.type) ||
    fields.some((field) => {
      const label = resolveFieldLabel(field, root)
      return [...ADDRESS_LABEL_PATTERNS, ...SECTION_LABEL_PATTERNS].some((pattern) =>
        pattern.test(label),
      )
    }) ||
    fields.some((field) => looksLikeChoiceCluster(field, root)) ||
    isWalmartApplicationStepText(text)
  )
}

function getWalmartFormRoots(doc = document) {
  const candidates = Array.from(doc.querySelectorAll(FORM_ROOT_SELECTOR)).filter(
    isLikelyFormRoot,
  )
  const roots = []
  for (const candidate of candidates) {
    if (!roots.some((root) => root.contains(candidate))) {
      for (let index = roots.length - 1; index >= 0; index -= 1) {
        if (candidate.contains(roots[index])) roots.splice(index, 1)
      }
      roots.push(candidate)
    }
  }
  return roots
}

function buildTextRule(element, root) {
  const label = resolveFieldLabel(element, root)
  return label
    ? {
        label,
        required: isRequiredField(element, label, root),
        type: enums.FIELD_TYPE.TEXT,
        $label: element.closest("label, div, fieldset"),
        $input: element,
      }
    : null
}

function buildSelectRule(element, root) {
  const label = resolveFieldLabel(element, root)
  if (!label) return null
  const options =
    element instanceof HTMLSelectElement
      ? Array.from(element.options)
          .map((option) => cleanLabel(option.textContent || option.value))
          .filter((text) => text && !/^select\b/i.test(text))
      : []
  return {
    label,
    required: isRequiredField(element, label, root),
    type: enums.FIELD_TYPE.SELECT,
    options,
    $label: element.closest("label, div, fieldset"),
    $input: element,
  }
}

function buildChoiceRule(input, root, seen) {
  const type =
    "radio" === input.type ? enums.FIELD_TYPE.RADIOGROUP : enums.FIELD_TYPE.CHECKBOX
  const container = resolveChoiceContainer(input, root)
  const siblings = getSameTypeInputs(container ?? root, input)
  const optionLabels = siblings.map(getOptionLabel).filter(Boolean)
  const groupLabel =
    "checkbox" === input.type && 1 === siblings.length
      ? ""
      : resolveChoiceGroupLabel(input, container, root, optionLabels)
  const label =
    type === enums.FIELD_TYPE.RADIOGROUP
      ? groupLabel
      : groupLabel || resolveFieldLabel(input, root)
  if (!label) return null

  const key = choiceDedupeKey(type, input, label)
  if (seen.has(key)) return null
  seen.add(key)

  return type === enums.FIELD_TYPE.RADIOGROUP
    ? {
        label,
        required:
          siblings.some((node) => isRequiredField(node, label, root)) ||
          containerHasRequiredMarker(container),
        type,
        options: optionLabels,
        $label: container,
        $input: input,
        $radioParent: container,
      }
    : {
        label,
        required:
          siblings.some((node) => isRequiredField(node, label, root)) ||
          containerHasRequiredMarker(container),
        type,
        options: optionLabels,
        $label: container,
        $input: input,
        $checkboxs: siblings,
      }
}

function extractRulesFromRoot(root, seen = new Set()) {
  const rules = []
  const fields = collectFields(root)
  for (const field of fields) {
    if (field instanceof HTMLSelectElement || isCustomSelect(field)) {
      const rule = buildSelectRule(field, root)
      if (rule) rules.push(rule)
      continue
    }
    if (field instanceof HTMLTextAreaElement) {
      const rule = buildTextRule(field, root)
      if (rule) rules.push(rule)
      continue
    }
    const input = field
    if ("file" === input.type) continue
    if ("radio" === input.type || "checkbox" === input.type) {
      const rule = buildChoiceRule(input, root, seen)
      if (rule) rules.push(rule)
      continue
    }
    const rule = buildTextRule(input, root)
    if (rule) rules.push(rule)
  }
  return rules
}

function extractRules(doc = document) {
  const rules = []
  const seen = new Set()
  for (const root of getWalmartFormRoots(doc)) {
    rules.push(...extractRulesFromRoot(root, seen))
  }
  return rules
}

function getRuleKey(rule) {
  return toLowerLabel(rule.label)
}

function getOptionKeys(rule) {
  const options = rule.options
  return Array.isArray(options) ? options.map(toLowerLabel).filter(Boolean) : []
}

function isChoiceRule(rule) {
  return (
    rule.type === enums.FIELD_TYPE.CHECKBOX ||
    rule.type === enums.FIELD_TYPE.RADIOGROUP
  )
}

function collectChoiceOptionKeys(rules) {
  const keys = new Set()
  for (const rule of rules) {
    if (isChoiceRule(rule)) {
      for (const option of getOptionKeys(rule)) keys.add(option)
    }
  }
  return keys
}

function selectOptionsChanged(previous, next) {
  if (previous.type !== enums.FIELD_TYPE.SELECT || next.type !== enums.FIELD_TYPE.SELECT) {
    return false
  }
  const prevOptions = getOptionKeys(previous)
  const nextOptions = getOptionKeys(next)
  return (
    0 !== nextOptions.length &&
    (0 === prevOptions.length ||
      prevOptions.length !== nextOptions.length ||
      nextOptions.some((option, index) => option !== prevOptions[index]))
  )
}

function getWalmartComboQuestionRules(existingRules, nextRules) {
  const byLabel = new Map()
  const choiceOptions = collectChoiceOptionKeys(existingRules)
  const added = []

  for (const rule of existingRules) {
    const key = getRuleKey(rule)
    if (key && !byLabel.has(key)) byLabel.set(key, rule)
  }

  for (const rule of nextRules) {
    const key = getRuleKey(rule)
    if (!key) continue
    const previous = byLabel.get(key)
    if (!previous) {
      if (choiceOptions.has(key)) continue
      byLabel.set(key, rule)
      added.push(rule)
      continue
    }
    if (selectOptionsChanged(previous, rule)) {
      byLabel.set(key, rule)
      added.push(rule)
    }
  }

  return added
}

function isCustomSelect(element) {
  if (isDateCombobox(element) || isCalendarPickerButton(element)) return false
  const role = element.getAttribute("role")
  const hasPopup = element.getAttribute("aria-haspopup")
  return (
    ("combobox" === role && "grid" !== hasPopup) ||
    "listbox" === hasPopup ||
    ("BUTTON" === element.tagName &&
      "button" === element.getAttribute("type") &&
      !!element.getAttribute("aria-expanded") &&
      !isSearchNoise(element))
  )
}

function collectFields(root) {
  return Array.from(root.querySelectorAll(FIELD_SELECTOR)).filter((element) => {
    const disabled =
      element instanceof HTMLInputElement ||
      element instanceof HTMLTextAreaElement ||
      element instanceof HTMLSelectElement ||
      element instanceof HTMLButtonElement
        ? element.disabled
        : "true" === element.getAttribute("aria-disabled")
    return isVisible(element) && !disabled && !isSearchNoise(element) && !isCalendarPickerButton(element)
  })
}

function getFormSnapshot(doc = document) {
  const snapshot = {}
  for (const rule of extractRules(doc)) {
    if (rule.type === enums.FIELD_TYPE.SELECT) {
      const selectRule = rule
      const input = selectRule.$input
      snapshot[rule.label] =
        input.selectedOptions?.[0]?.textContent?.trim() || input.value
      continue
    }
    if (rule.type === enums.FIELD_TYPE.CHECKBOX) {
      const checkboxRule = rule
      snapshot[rule.label] = checkboxRule.$checkboxs
        .filter((input) => input.checked)
        .map((input) => getOptionLabel(input))
      continue
    }
    if (rule.type === enums.FIELD_TYPE.RADIOGROUP) {
      const radioRule = rule
      const checked = Array.from(
        radioRule.$radioParent.querySelectorAll('input[type="radio"]'),
      ).find((input) => input.checked)
      snapshot[rule.label] = checked ? getOptionLabel(checked) : ""
      continue
    }
    const textRule = rule
    snapshot[rule.label] = textRule.$input.value
  }
  return snapshot
}

export {
  extractRules,
  extractRulesFromRoot,
  getFormSnapshot,
  getWalmartComboQuestionRules,
  getWalmartFormRoots,
  getWalmartWotcConsentLabel,
  hasWalmartRequiredMarkerForLabel,
  isWalmartApplicationStepText,
  isWalmartQuestionLabel,
  normalizeWalmartQuestionLabel,
}
