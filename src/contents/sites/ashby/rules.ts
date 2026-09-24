// @ts-nocheck
/**
 * Ashby form rule extraction, education rows, and autofill snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as fieldMetadata from "./field-metadata.ts"
import * as delay from "../../../utils/delay.js"

export async function extractRules() {
  let rules = []

  if (
    xpath.getFirstOrderedNodeSafe(
      '//div[.//h2[contains(@class, "ashby-application-form-section-header-title")]]',
    )
  ) {
    let sections = xpath.getOrderedNodesSafe(
      '//div[contains(@class, "ashby-application-form-section-container")]',
    )
    for (let section of sections) {
      let titles = xpath.getOrderedNodesSafe(
        './/h2[contains(@class, "ashby-application-form-section-header-title")]/text()',
        section,
      )
      if (titles) {
        titles[0]?.textContent?.trim()
        let entries = xpath.getOrderedNodesSafe(
          './/div[contains(@class, "ashby-application-form-field-entry")] | .//fieldset[contains(@class, "_container_")]',
          section,
        )
        for (let entry of entries) {
          let rule = await extractFieldRule(entry)
          if (rule) rules.push(rule)
        }
      }
    }
  } else {
    let entries = xpath.getOrderedNodesSafe(
      '//div[contains(@class, "ashby-application-form-field-entry")] | .//fieldset[contains(@class, "_container_")]',
    )
    for (let entry of entries) {
      let rule = await extractFieldRule(entry)
      if (rule) rules.push(rule)
    }
  }

  let consentRule = extractCommunicationConsentRule()
  if (consentRule) {
    console.info("[Ashby][CommunicationConsent] extracted", {
      optionCount: consentRule.options.length,
      required: consentRule.required,
    })
    rules.push(consentRule)
  }

  rules.push(...getEducationRules())
  return rules
}

function extractCommunicationConsentRule() {
  if (
    typeof document === "undefined" ||
    typeof document.querySelector !== "function"
  ) {
    return null
  }

  let container = document.querySelector(
    ".ashby-application-form-texting-consent-description",
  )
  if (!container) return null

  let radios = Array.from(
    container.querySelectorAll(
      'input[type="radio"][name="communicationConsent"]',
    ),
  )
  if (radios.length < 2) {
    console.warn("[Ashby][CommunicationConsent] extraction skipped", {
      reason: "radio-options-missing",
      optionCount: radios.length,
    })
    return null
  }

  let questionEl = container.querySelector("p")
  let label = normalizeWhitespace(questionEl?.textContent)
  let options = radios.map(communicationConsentOptionLabel)
  if (!label || options.some((opt) => !opt)) {
    console.warn("[Ashby][CommunicationConsent] extraction skipped", {
      reason: label ? "option-label-missing" : "question-label-missing",
      optionCount: radios.length,
    })
    return null
  }

  let required = radios.some(
    (radio) =>
      radio.required || radio.getAttribute("aria-required") === "true",
  )

  return {
    type: enums.FIELD_TYPE.SELECT,
    label,
    required,
    options,
    $input: radios[0],
    $label: questionEl ?? container,
    $radioParent: container,
  }
}

function communicationConsentOptionLabel(radio) {
  return normalizeWhitespace(radio.closest("label")?.textContent)
}

function normalizeWhitespace(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
}

async function extractFieldRule(entry) {
  let labelEl =
    xpath.getFirstOrderedNodeSafe(
      './/label[contains(@class, "ashby-application-form-question-title")]',
      entry,
    ) ||
    xpath.getFirstOrderedNodeSafe(
      './/label[contains(@class, "_label_")]',
      entry,
    )

  let label = labelEl
    ? labelEl.textContent.trim().split("\n")[0].replace("\u2731", "")
    : ""
  if (isEducationHistoryLabel(label)) return null

  let requiredClass = xpath.getFirstOrderedNodeSafe(".//label/@class", entry)
  let required = false
  if (requiredClass && requiredClass.textContent.includes("required")) {
    required = true
  }

  let combobox = xpath.getFirstOrderedNodeSafe(
    './/input[@role="combobox"]',
    entry,
  )
  if (combobox) {
    await fieldMetadata.annotateAshbyFieldType(combobox)
    let options = await extractComboboxOptions(combobox, entry, label)
    let isLocation = isLocationOrCityLabel(label)
    let isSchool = isSchoolLabel(label)
    let description =
      isLocation && options.length > 0
        ? buildOptionFormatDescription(options)
        : ""
    let exposedOptions = isLocation || isSchool ? [] : options
    return {
      type: enums.FIELD_TYPE.ASHBY_SEARCH,
      label,
      required,
      options: exposedOptions,
      ...(description ? { description } : {}),
      $input: combobox,
      $label: labelEl,
    }
  }

  let textInput =
    xpath.getFirstOrderedNodeSafe('.//input[@type="text"]', entry) ||
    xpath.getFirstOrderedNodeSafe('.//input[@type="email"]', entry) ||
    xpath.getFirstOrderedNodeSafe('.//input[@type="tel"]', entry) ||
    xpath.getFirstOrderedNodeSafe('.//input[@type="number"]', entry) ||
    xpath.getFirstOrderedNodeSafe('.//input[@type="url"]', entry) ||
    xpath.getFirstOrderedNodeSafe(".//textarea", entry)

  if (textInput) {
    let description = numberInputDescription(textInput)
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required,
      ...(description ? { description } : {}),
      $input: textInput,
      $label: labelEl,
    }
  }

  let locationContainer = xpath.getFirstOrderedNodeSafe(
    './/div[contains(@class, "location-input-container")]',
    entry,
  )
  if (locationContainer) {
    let locationInput = xpath.getFirstOrderedNodeSafe(
      ".//input",
      locationContainer,
    )
    if (
      textInput &&
      textInput.getAttribute("aria-autocomplete") == "list"
    ) {
      return {
        type: enums.FIELD_TYPE.TEXT,
        label,
        required,
        $input: locationInput,
        $label: labelEl,
      }
    }
  }

  let yesNo = xpath.getOrderedNodesSafe(
    './/div[contains(@class, "yesno")]',
    entry,
  )
  if (yesNo.length > 0) {
    let buttonTexts = xpath.getOrderedNodesSafe(".//button/text()", entry)
    return {
      type: enums.FIELD_TYPE.CHECKBOX,
      label,
      required,
      $checkboxs: yesNo,
      options: buttonTexts.map((node) => node.textContent.trim()),
      $input: yesNo[0],
      $label: labelEl,
    }
  }

  let optionGroup =
    xpath.getFirstOrderedNodeSafe(".//fieldset", entry) ||
    xpath.getFirstOrderedNodeSafe(
      './/div[contains(@class, "_option_")]',
      entry,
    )
  if (optionGroup) {
    let optionLabels = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "_option_")]/label/text() | .//fieldset//label/text()',
      entry,
    )
    let checkbox = xpath.getFirstOrderedNodeSafe(
      './/input[@type="checkbox"]',
      entry,
    )
    if (checkbox) {
      return {
        label,
        $label: labelEl,
        required,
        type: enums.FIELD_TYPE.MULTI_SELECT,
        $input: checkbox,
        options: optionLabels.map((node) => node.textContent.trim()),
      }
    }
    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      $label: labelEl,
      required,
      options: optionLabels.map((node) => node.textContent.trim()),
    }
  }

  return null
}

export function getAshbyEducationHistoryContainer(root = document) {
  let labels = Array.from(root.querySelectorAll("label"))
  let educationLabel = labels.find((label) =>
    isEducationHistoryLabel(firstLineLabelText(label)),
  )
  return (
    educationLabel?.closest(".ashby-application-form-field-entry") ||
    educationLabel?.parentElement
  )
}

export function getAshbyEducationRows(root = document) {
  let scope =
    typeof Document !== "undefined" && root instanceof Document
      ? getAshbyEducationHistoryContainer(root)
      : root
  return scope
    ? Array.from(scope.querySelectorAll('[class*="repeatableEducationEntry"]'))
    : []
}

export function getEducationRules() {
  let container = getAshbyEducationHistoryContainer()
  if (!container) return []

  let rows = getAshbyEducationRows(container)
  let scopes = rows.length > 0 ? rows : [container]
  let required = !!findLabelByText(container, "Education History")?.className.includes(
    "required",
  )

  return scopes
    .map((scope) => {
      let children = extractEducationChildRules(scope)
      if (children.length === 0) return null
      return {
        type: enums.FIELD_TYPE.EDUCATION,
        label: "Education History",
        children,
        options: summarizeChildOptions(children),
        required,
      }
    })
    .filter((rule) => rule !== null)
}

export function getAshbyEducationSnapshot() {
  let container = getAshbyEducationHistoryContainer()
  if (!container) return []

  let rows = getAshbyEducationRows(container)
  let scopes = rows.length > 0 ? rows : [container]

  return scopes
    .map((scope) => {
      let values = {}
      for (let child of extractEducationChildRules(scope)) {
        let input = child.$input
        if (!input) continue
        values[child.label] =
          input instanceof HTMLSelectElement
            ? getSelectedSelectValue(input)
            : (input.value ?? "")
      }
      return values
    })
    .filter((row) => Object.keys(row).length > 0)
}

function extractEducationChildRules(scope) {
  let children = []
  let school = extractEducationComboboxChild(scope, "School")
  if (school) children.push(school)

  let degree = extractEducationTextChild(scope, "Degree")
  if (degree) children.push(degree)

  let fieldOfStudy =
    extractEducationTextChild(scope, "Field of Study") ??
    extractEducationTextChild(scope, "Major")
  if (fieldOfStudy) children.push(fieldOfStudy)

  children.push(...extractEducationDateChildren(scope, "Start Date"))
  children.push(...extractEducationDateChildren(scope, "End Date"))
  return children
}

function extractEducationComboboxChild(scope, label) {
  let labelEl = findLabelByText(scope, label)
  let fieldRoot = labelEl ? findInputRootFromLabel(labelEl, scope) : null
  let input = fieldRoot?.querySelector('input[role="combobox"]')
  if (!labelEl || !input) return null
  return {
    type: enums.FIELD_TYPE.ASHBY_SEARCH,
    label,
    required: isRequiredLabel(labelEl),
    options: [],
    $input: input,
    $label: labelEl,
  }
}

function extractEducationTextChild(scope, label) {
  let labelEl = findLabelByText(scope, label)
  let fieldRoot = labelEl ? findInputRootFromLabel(labelEl, scope) : null
  let input = fieldRoot?.querySelector(
    'input:not([type="file"]):not([type="hidden"]):not([role="combobox"]), textarea',
  )
  if (!labelEl || !input) return null

  let description = numberInputDescription(input)
  return {
    type: enums.FIELD_TYPE.TEXT,
    label,
    required: isRequiredLabel(labelEl),
    ...(description ? { description } : {}),
    $input: input,
    $label: labelEl,
  }
}

function extractEducationDateChildren(scope, baseLabel) {
  let labelEl = findLabelByText(scope, baseLabel)
  if (!labelEl) return []

  let children = []
  let controls = controlsFollowingLabel(scope, labelEl)
  let monthSelect =
    controls.find(
      (el) => el instanceof HTMLSelectElement && isMonthSelect(el),
    ) ?? null
  let yearSelect =
    controls.find(
      (el) =>
        el instanceof HTMLSelectElement &&
        el !== monthSelect &&
        isYearSelect(el),
    ) ?? null
  let yearInput =
    controls.find(
      (el) =>
        (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) &&
        !isMonthPlaceholderInput(el),
    ) ?? null

  if (yearSelect) {
    children.push({
      type: enums.FIELD_TYPE.SELECT,
      label: `${baseLabel} - Year`,
      required: yearSelect.required,
      $input: yearSelect,
      $label: labelEl,
      options: selectOptionTexts(yearSelect),
    })
  } else if (yearInput) {
    let description = numberInputDescription(yearInput)
    children.push({
      type: enums.FIELD_TYPE.TEXT,
      label: `${baseLabel} - Year`,
      required: yearInput.required,
      ...(description ? { description } : {}),
      $input: yearInput,
      $label: labelEl,
    })
  }

  if (monthSelect) {
    children.push({
      type: enums.FIELD_TYPE.SELECT,
      label: `${baseLabel} - Month`,
      required: monthSelect.required,
      $input: monthSelect,
      $label: labelEl,
      options: selectOptionTexts(monthSelect),
    })
  }

  return children
}

function controlsFollowingLabel(scope, labelEl) {
  let labels = Array.from(scope.querySelectorAll("label"))
  let index = labels.indexOf(labelEl)
  let nextLabel =
    index >= 0
      ? (labels.slice(index + 1).find((label) => {
          let text = firstLineLabelText(label)
          return text && text !== firstLineLabelText(labelEl)
        }) ?? null)
      : null

  return Array.from(
    scope.querySelectorAll(
      'input:not([type="file"]):not([type="hidden"]):not([role="combobox"]), select, textarea',
    ),
  ).filter((el) => {
    let followsLabel = !!(
      labelEl.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING
    )
    return (
      !!followsLabel &&
      (!nextLabel ||
        !!(el.compareDocumentPosition(nextLabel) & Node.DOCUMENT_POSITION_FOLLOWING))
    )
  })
}

function isMonthSelect(select) {
  let options = selectOptionTexts(select).map((text) => normalizeKey(text))
  return options.some(
    (text) =>
      text.includes("month") ||
      /^(jan|january|feb|february|mar|march|apr|april|may|jun|june|jul|july|aug|august|sep|sept|september|oct|october|nov|november|dec|december)$/.test(
        text,
      ),
  )
}

function isYearSelect(select) {
  let options = selectOptionTexts(select).map((text) => normalizeKey(text))
  return options.some((text) => /^\d{4}$/.test(text))
}

function isMonthPlaceholderInput(input) {
  let placeholder = normalizeKey(input.getAttribute("placeholder") || "")
  let name = normalizeKey(input.getAttribute("name") || "")
  return placeholder.includes("month") || name.includes("month")
}

function numberInputDescription(input) {
  return input.getAttribute("type")?.toLowerCase() === "number"
    ? "number"
    : undefined
}

function summarizeChildOptions(children) {
  return children.map((child) => {
    let summary = {
      label: child.label,
      type: child.type,
    }
    let options = child.options
    if (Array.isArray(options)) summary.options = options
    let description = child.description
    if (description) summary.description = description
    return summary
  })
}

export function getSelectedSelectValue(select) {
  let selected = select.selectedOptions?.[0]
  if (!selected || selected.disabled || selected.hidden) return ""
  let text = selected.textContent?.trim() || select.value || ""
  return /^\s*month\.\.\.\s*$/i.test(text) ? "" : text
}

function selectOptionTexts(select) {
  return Array.from(select.options)
    .filter((opt) => !opt.disabled && !opt.hidden)
    .map((opt) => opt.textContent?.trim() || opt.value)
    .filter((text) => text && !/^\s*month\.\.\.\s*$/i.test(text))
}

function findLabelByText(scope, text) {
  let wanted = normalizeKey(text)
  let labels = Array.from(scope.querySelectorAll("label"))
  return labels.find((label) => normalizeKey(firstLineLabelText(label)) === wanted) ?? null
}

function findInputRootFromLabel(labelEl, stopAt) {
  let parent = labelEl.parentElement
  while (parent) {
    if (parent.querySelector("input, select, textarea")) return parent
    if (parent === stopAt) break
    parent = parent.parentElement
  }
  return labelEl.parentElement ?? stopAt
}

function firstLineLabelText(el) {
  return String(el.textContent ?? "")
    .split("\n")[0]
    .replace("\u2731", "")
    .trim()
}

function normalizeKey(value) {
  return String(value ?? "")
    .replace("\u2731", "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function isEducationHistoryLabel(label) {
  return normalizeKey(label) === "education history"
}

function isRequiredLabel(labelEl) {
  return labelEl.className.includes("required")
}

export function getFormSnapshot() {
  let snapshot = {}
  let educationContainer = getAshbyEducationHistoryContainer()
  let isInsideEducation = (el) => !!educationContainer?.contains(el)

  let textInputs = xpath.getOrderedNodesSafe(
    './/input[@type="text" or @type="email" or @type="tel" or @type="number" or @type="url"] | .//textarea',
  )
  for (let input of textInputs) {
    if (isInsideEducation(input)) continue
    let labelText = (
      input.parentElement.querySelector("label") ||
      xpath.getFirstOrderedNodeSafe("./preceding::label[1]", input)
    )?.textContent.trim()
    if (!labelText || input.className.includes("g-recaptcha-response")) continue
    snapshot[labelText] = input.value
  }

  let comboboxes = xpath.getOrderedNodesSafe('.//input[@role="combobox"]')
  for (let input of comboboxes) {
    if (isInsideEducation(input)) continue
    let labelText = resolveComboboxLabel(input)
    if (labelText) snapshot[labelText] = input.value
  }

  let fieldsets = xpath.getOrderedNodesSafe(
    ".//fieldset[contains(@class, '_container_1v5e2_29')]",
  )
  for (let fieldset of fieldsets) {
    let labelText = fieldset.querySelector("label")?.textContent.trim()
    if (!labelText) continue

    if (xpath.getFirstOrderedNodeSafe(".//input[@type='radio']", fieldset)) {
      let selected = xpath.getFirstOrderedNodeSafe(
        "./div[contains(@class, 'true')]//label",
        fieldset,
      )
      snapshot[labelText] = selected ? selected.textContent.trim() : ""
    } else if (
      xpath.getFirstOrderedNodeSafe(".//input[@type='checkbox']", fieldset)
    ) {
      let selected = []
      let checked = xpath.getOrderedNodesSafe(
        ".//span[contains(@class, '_checked')]",
        fieldset,
      )
      for (let mark of checked) {
        let optionLabel = xpath.getFirstOrderedNodeSafe(
          "following-sibling::label",
          mark,
        )
        if (optionLabel) selected.push(optionLabel.textContent.trim())
      }
      snapshot[labelText] = selected
    }
  }

  let yesNoGroups = xpath.getOrderedNodesSafe(
    './/div[contains(@class, "yesno")]',
  )
  for (let group of yesNoGroups) {
    let labelText = (
      group.parentElement.querySelector("label") ||
      xpath.getFirstOrderedNodeSafe("./preceding::label[1]", group)
    )?.textContent.trim()
    if (!labelText) continue

    let buttons = xpath.getOrderedNodesSafe(".//button", group)
    for (let button of buttons) {
      if (button.className.includes("active")) {
        snapshot[labelText] = button.textContent.trim()
      }
    }
    if (!snapshot[labelText]) snapshot[labelText] = ""
  }

  let consentRule = extractCommunicationConsentRule()
  if (consentRule) {
    let checked = Array.from(
      consentRule.$radioParent.querySelectorAll(
        'input[type="radio"][name="communicationConsent"]',
      ),
    ).find((radio) => radio.checked)
    snapshot[consentRule.label] = checked
      ? communicationConsentOptionLabel(checked)
      : ""
  }

  return snapshot
}

function resolveComboboxLabel(input) {
  let label =
    input.parentElement.querySelector("label") ||
    xpath.getFirstOrderedNodeSafe("./preceding::label[1]", input)
  if (label) return label.textContent?.trim() || null

  let container = input.closest('div[class*="_container_"]')
  if (container) {
    let sibling = xpath.getFirstOrderedNodeSafe(
      "./preceding-sibling::*[1]",
      container,
    )
    if (sibling && sibling.textContent) return sibling.textContent.trim()
  }

  if (input.id) {
    let forLabel = document.querySelector(`label[for="${input.id}"]`)
    if (forLabel) return forLabel.textContent?.trim() || null
  }
  return null
}

async function extractComboboxOptions(input, entry, label) {
  return expandComboboxOptions(input, entry, label)
}

async function expandComboboxOptions(input, entry, label) {
  let options = []
  let searched = await searchExpandComboboxOptions(input, label)
  if (searched.length > 0) options = searched

  let toggle = entry.querySelector('button[class*="_toggleButton_"]')
  if (toggle && options.length === 0) {
    let clicked = false
    try {
      toggle.click()
      clicked = true
      let toggled = await waitForAriaExpandedOptions(input)
      if (toggled.length > 0) options = toggled
    } catch (error) {
      console.warn("Auto-click extraction failed", error)
    } finally {
      if (clicked && toggle.getAttribute("aria-expanded") === "true") {
        toggle.click()
      }
    }
  }

  return options && options.length > 0
    ? options
        .map((opt) =>
          typeof opt === "string"
            ? opt
            : opt.text || opt.label || opt.value || JSON.stringify(opt),
        )
        .filter((opt) => opt && opt !== "Select...")
    : []
}

function shouldSearchExpandLabel(label) {
  let lower = label.toLowerCase()
  return lower.includes("school") || lower.includes("location")
}

async function searchExpandComboboxOptions(input, label) {
  if (!(input instanceof HTMLInputElement) || !shouldSearchExpandLabel(label)) {
    return []
  }

  let previousValue = input.value
  let collected = []
  let queries = searchQueriesForLabel(label)

  try {
    for (let query of queries) {
      focusCombobox(input)
      setSearchInputValue(input, query)
      dispatchSearchInputEvents(input)
      let found = await waitForListboxOptions()
      mergeUniqueOptions(collected, found)
      input.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Escape",
          bubbles: true,
          cancelable: true,
        }),
      )
      await delay.delay(50)
      if (isLocationOrCityLabel(label) && collected.length >= 20) break
    }
  } catch (error) {
    console.warn("Ashby combobox search expansion failed", error)
  } finally {
    setSearchInputValue(input, previousValue)
    dispatchSearchInputEvents(input)
    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      }),
    )
    input.blur()
    await delay.delay(50)
  }

  return collected
}

function searchQueriesForLabel(label) {
  return isSchoolLabel(label) ? [" "] : isLocationOrCityLabel(label) ? ["a"] : [" "]
}

function mergeUniqueOptions(collected, incoming) {
  for (let option of incoming) {
    let key = optionKey(option)
    if (key && !collected.some((existing) => optionKey(existing) === key)) {
      collected.push(option)
    }
  }
}

function optionKey(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function isSchoolLabel(label) {
  return label.toLowerCase().includes("school")
}

function isLocationOrCityLabel(label) {
  let lower = label.toLowerCase()
  return lower.includes("location") || lower.includes("city")
}

function buildOptionFormatDescription(options) {
  let example = options.find((opt) => opt?.trim())
  return example ? `Option format example: ${example}` : ""
}

function focusCombobox(input) {
  input.focus()
  input.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  input.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  input.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true }),
  )
}

function setSearchInputValue(input, value) {
  let valueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value",
  )?.set
  let previous = input.value
  if (valueSetter) valueSetter.call(input, value)
  else input.value = value

  try {
    let tracker = input?._valueTracker
    if (tracker?.setValue) tracker.setValue(previous)
  } catch (error) {
    console.warn("Ashby search input tracker update failed", error)
  }
}

function dispatchSearchInputEvents(input) {
  input.dispatchEvent(
    new InputEvent("input", {
      bubbles: true,
      cancelable: true,
      composed: true,
    }),
  )
  input.dispatchEvent(
    new KeyboardEvent("keydown", { bubbles: true, cancelable: true }),
  )
  input.dispatchEvent(
    new KeyboardEvent("keyup", { bubbles: true, cancelable: true }),
  )
}

async function waitUntilOptions(readOptions) {
  let maxAttempts = 8
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    let options = readOptions()
    if (options.length > 0) return options
    await delay.delay(100)
  }
  return []
}

function waitForListboxOptions() {
  return waitUntilOptions(readVisibleListboxOptions)
}

function waitForAriaExpandedOptions(input) {
  return waitUntilOptions(() => {
    if (input.getAttribute("aria-expanded") !== "true") return []
    let controlsId = input.getAttribute("aria-controls")
    if (!controlsId) return []
    let listbox = document.getElementById(controlsId)
    return listbox
      ? Array.from(listbox.querySelectorAll('div[role="option"]'))
          .map((opt) => opt.textContent?.trim())
          .filter((text) => !!text)
      : []
  })
}

function readVisibleListboxOptions() {
  let options = document.querySelectorAll(
    'div[role="listbox"] div[role="option"]',
  )
  return Array.from(options)
    .map((opt) => opt.textContent?.trim())
    .filter((text) => !!text)
}

/** Option-array shape detection (preserved from bundled source). */
function coerceOptionArray(value, _depth = 0, seen = new Set()) {
  if (!value || !Array.isArray(value) || value.length === 0 || seen.has(value)) {
    return null
  }
  seen.add(value)

  let allStrings = value.every((item) => typeof item === "string")
  if (allStrings) return value

  let allOptionObjects = value.every(
    (item) =>
      typeof item === "object" &&
      item !== null &&
      ("label" in item || "value" in item || "text" in item || "id" in item),
  )
  return allOptionObjects ? value : null
}
