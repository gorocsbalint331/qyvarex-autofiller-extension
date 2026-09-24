// @ts-nocheck
/**
 * SmartRecruiters — form rule extraction and section snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"

const SMARTRECRUITERS_PHONE_LABEL = "Phone"
const SMARTRECRUITERS_PHONE_COUNTRY_CODE_LABEL = "Phone Country Code"

const getAutocompleteShadowInput = (autocomplete) => {
  if (!autocomplete?.shadowRoot) return null
  const splInput = autocomplete.shadowRoot.querySelector("spl-input")
  return splInput?.shadowRoot
    ? splInput.shadowRoot.querySelector('input[class*="c-spl-input"]')
    : null
}

const mapOptionTexts = (elements) =>
  elements
    .map((element) => element.textContent?.trim() || "")
    .filter((text) => "" !== text)

const normalizeSmartRecruitersPhoneCountryText = (value) =>
  String(value ?? "")
    .replace(/\s+/g, " ")
    .replace(/\s+\+\d[\d\s()-]*$/, "")
    .trim()

const mapSelectOptionTexts = (options) => mapOptionTexts(options)

const querySelectorAllDeep = (selector, root = document.body) => {
  let results = []
  if (
    root instanceof Document ||
    root instanceof ShadowRoot ||
    root instanceof HTMLElement
  ) {
    const matches = root.querySelectorAll(selector)
    matches.forEach((element) => results.push(element))
  }
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT)
  let node = walker.currentNode
  while (node) {
    if (node.shadowRoot) {
      const nested = querySelectorAllDeep(selector, node.shadowRoot)
      results = results.concat(nested)
    }
    node = walker.nextNode()
  }
  return results
}

const getFillingLabels = () => {
  const screening = document.querySelector("oc-screening-questions")
  if (screening) {
    const sectionTags = ["oc-screening-questions", "oc-consent"]
    const sections = sectionTags
      .map((tag) => document.querySelector(tag))
      .filter(Boolean)
    const labels = []
    for (const section of sections) {
      const found = querySelectorAllDeep('[slot*="label-content"]', section)
      labels.push(...found)
    }
    return [...new Set(labels)]
  }

  const sectionTags = [
    "oc-personal-information",
    "oc-web",
    "oc-resume-upload",
    "oc-hiring-manager-message",
    "oc-consent",
  ]
  const sections = sectionTags
    .map((tag) => document.querySelector(tag))
    .filter(Boolean)
  const labels = []
  for (const section of sections) {
    const found = querySelectorAllDeep(
      ".c-spl-form-field-label-wrapper",
      section,
    )
    labels.push(...found)
  }
  const experienceEntry = document.querySelector(
    "oc-experience-entry[data-test='experience-entry']",
  )
  if (experienceEntry) labels.push(experienceEntry)
  const educationEntry = document.querySelector(
    "oc-education-entry[data-test='experience-entry']",
  )
  if (educationEntry) labels.push(educationEntry)
  return labels
}

function normalizeRuleLabelKey(rule) {
  return "string" == typeof rule.label
    ? rule.label.replace(/\s+/g, " ").trim().toLowerCase()
    : ""
}

function dedupeExtractedRules(rules) {
  const selectLabels = new Set(
    rules
      .filter((rule) => rule.type === enums.FIELD_TYPE.SELECT)
      .map(normalizeRuleLabelKey)
      .filter(Boolean),
  )
  let droppedInvalidLabelCount = 0
  let droppedTextDuplicateCount = 0
  const filtered = rules.filter((rule) => {
    const key = normalizeRuleLabelKey(rule)
    if (!key) {
      droppedInvalidLabelCount += 1
      return false
    }
    if (
      rule.type === enums.FIELD_TYPE.TEXT &&
      selectLabels.has(key)
    ) {
      droppedTextDuplicateCount += 1
      return false
    }
    return true
  })
  return {
    rules: filtered,
    droppedInvalidLabelCount,
    droppedTextDuplicateCount,
  }
}

const extractRules = async () => {
  const candidates = getFillingLabels()
  const rawRules = []
  for (const candidate of candidates) {
    const extracted = getSmartRecruitersRule(candidate)
    if (Array.isArray(extracted)) rawRules.push(...extracted)
    if (extracted && !Array.isArray(extracted)) rawRules.push(extracted)
  }
  const {
    rules,
    droppedInvalidLabelCount,
    droppedTextDuplicateCount,
  } = dedupeExtractedRules(rawRules)
  console.info(
    `[SmartRecruiters][Rules] extraction-complete ${JSON.stringify({
      candidateCount: candidates.length,
      rawExtractedCount: rawRules.length,
      extractedCount: rules.length,
      droppedInvalidLabelCount,
      droppedTextDuplicateCount,
      typeCounts: rules.reduce((counts, rule) => {
        const type = String(rule.type || "unknown")
        counts[type] = (counts[type] || 0) + 1
        return counts
      }, {}),
      policyNoticeCheckboxCount: rules.filter(
        (rule) =>
          rule.type === enums.FIELD_TYPE.CHECKBOX &&
          /privacy\s+notice/i.test(String(rule.label || "")),
      ).length,
      eligiblePolicyNoticeCheckboxCount: rules.filter(
        (rule) =>
          rule.type === enums.FIELD_TYPE.CHECKBOX &&
          true === rule.required &&
          rule.$checkboxs?.length === 1 &&
          /privacy\s+notice/i.test(String(rule.label || "")),
      ).length,
    })}`,
  )
  return rules
}

const getSmartRecruitersRule = (labelElement) => {
  const radio = extractRadioGroupRule(labelElement)
  if (radio) return radio
  const checkbox = extractCheckboxRule(labelElement)
  if (checkbox) return checkbox
  const phone = extractPhoneRules(labelElement)
  if (phone) return phone
  const text = extractTextRule(labelElement)
  if (text) return text
  const autocomplete = extractAutocompleteSelectRule(labelElement)
  if (autocomplete) return autocomplete
  const multiSelect = extractMultiSelectRule(labelElement)
  if (multiSelect) return multiSelect
  const genderRace = extractGenderRaceRules(labelElement)
  if (genderRace) return genderRace
  const employment = extractEmploymentEntryRule(labelElement)
  if (employment) return employment
  const education = extractEducationEntryRule(labelElement)
  return education || null
}

const getSmartRecruitersRuleForTests = getSmartRecruitersRule

const extractPhoneRules = (labelElement) => {
  const labelText = getLabelText(labelElement)
  if (!isPhoneNumberLabel(labelText)) return null
  const rules = []
  const countryCodeRule = getSmartRecruitersPhoneCountryCodeRule(labelElement)
  if (countryCodeRule) rules.push(countryCodeRule)
  const phoneInput = getPhoneNumberInput(labelElement)
  if (phoneInput) {
    rules.push({
      type: enums.FIELD_TYPE.TEXT,
      label: SMARTRECRUITERS_PHONE_LABEL,
      required: false,
      $input: phoneInput,
      $label: labelElement,
    })
  }
  if (rules.length > 0) {
    console.info("[SmartRecruiters][Phone] rule-order", {
      labels: rules.map((rule) => rule.label),
    })
  }
  return rules.length > 0 ? rules : null
}

const getPhoneNumberInput = (labelElement) => {
  const sibling = getPhoneFieldSibling(labelElement)
  if (sibling) {
    const phoneInput = sibling.querySelector(
      'spl-input[class*="c-spl-phone-field-input"]',
    )
    return phoneInput?.shadowRoot?.querySelector('input[class*="c-spl-input"]')
  }
  return null
}

const getSmartRecruitersPhoneCountryCodeRule = (labelElement) => {
  const phoneField = findPhoneFieldHost(labelElement)
  const select = phoneField?.shadowRoot?.querySelector("spl-select")
  if (!select) return null
  let options =
    "function" == typeof select.querySelectorAll
      ? Array.from(select.querySelectorAll("spl-select-option"))
      : []
  if (0 === options.length) {
    options.push(
      ...Array.from(
        select.shadowRoot?.querySelectorAll("spl-select-option") || [],
      ),
    )
  }
  return {
    type: enums.FIELD_TYPE.SELECT,
    label: SMARTRECRUITERS_PHONE_COUNTRY_CODE_LABEL,
    required: false,
    options: mapSelectOptionTexts(options),
    $input: select,
    $label: labelElement,
  }
}

const findPhoneFieldHost = (labelElement) => {
  const host =
    "function" == typeof labelElement.getRootNode
      ? labelElement.getRootNode()?.host
      : void 0
  if (host?.tagName?.toLowerCase() === "spl-phone-field") return host
  return "function" == typeof labelElement.closest
    ? labelElement.closest("spl-phone-field")
    : null
}

const getPhoneFieldSibling = (labelElement) => {
  const label = labelElement.closest('label[class*="c-spl-form-field-label"]')
  return label?.nextElementSibling ?? null
}

const isPhoneNumberLabel = (label) =>
  label?.trim().toLowerCase() === "phone number"

const getSmartRecruitersPhoneRuleForTests = extractPhoneRules

const getSmartRecruitersPhoneSnapshot = (labelElement) => {
  if (!labelElement || !isPhoneNumberLabel(getLabelText(labelElement))) {
    return null
  }
  const snapshot = {}
  const countryCodeRule = getSmartRecruitersPhoneCountryCodeRule(labelElement)
  const select = countryCodeRule?.$input
  if (select) {
    snapshot[SMARTRECRUITERS_PHONE_COUNTRY_CODE_LABEL] =
      readPhoneCountryCodeValue(select)
  }
  const phoneInput = getPhoneNumberInput(labelElement)
  if (phoneInput) {
    snapshot[SMARTRECRUITERS_PHONE_LABEL] = phoneInput.value || ""
  }
  return Object.keys(snapshot).length > 0 ? snapshot : null
}

const getSmartRecruitersPhoneSnapshotForTests = getSmartRecruitersPhoneSnapshot

function readPhoneCountryCodeValue(select) {
  const value = select.getAttribute?.("value") || select.value || ""
  let options = Array.from(select.querySelectorAll?.("spl-select-option") || [])
  if (0 === options.length) {
    options.push(
      ...Array.from(
        select.shadowRoot?.querySelectorAll("spl-select-option") || [],
      ),
    )
  }
  const selected =
    options.find(
      (option) =>
        option.getAttribute?.("value") === value || option.value === value,
    ) ||
    options.find(
      (option) =>
        option.hasAttribute?.("selected") ||
        option.getAttribute?.("aria-selected") === "true",
    )
  const text = selected?.textContent?.trim()
  return normalizeSmartRecruitersPhoneCountryText(text || value)
}

function closestAcrossShadow(start, selector) {
  let current = start
  const visited = /* @__PURE__ */ new Set()
  while (current && !visited.has(current)) {
    visited.add(current)
    const match = current.closest?.(selector)
    if (match) return match
    const host =
      "function" == typeof current.getRootNode
        ? current.getRootNode()?.host
        : void 0
    if (!host || visited.has(host)) break
    if (host.matches?.(selector)) return host
    current = host
  }
  return null
}

const extractTextRule = (labelElement) => {
  const label = getLabelText(labelElement)
  const required = isRequiredField(labelElement)
  const input = findTextInput(labelElement)
  return label && input
    ? {
        type: enums.FIELD_TYPE.TEXT,
        label,
        required,
        $input: input,
        $label: labelElement,
      }
    : null
}

const extractSectionEntryRule = (entryElement, isEmployment) => {
  const expectedTag = isEmployment
    ? "oc-experience-entry"
    : "oc-education-entry"
  if (entryElement.tagName.toLowerCase() !== expectedTag) return null
  const labels = querySelectorAllDeep(
    ".c-spl-form-field-label-wrapper",
    entryElement,
  )
  const sectionLabel = isEmployment
    ? "Work Experience"
    : "Education Experience"
  const inputs = resolveSectionInputs(labels)
  const children = []
  const currentLabel = isEmployment
    ? "I currently work here"
    : "I currently attend"
  for (let index = 0; index < labels.length; index++) {
    if (!inputs[index]) continue
    if (index === labels.length - 1) {
      children.push({
        type: enums.FIELD_TYPE.CHECKBOX,
        label: currentLabel,
        required: false,
        options: ["Yes", "No"],
        $label: labels[index],
        $checkboxs: [inputs[index]],
      })
      continue
    }
    children.push({
      type: enums.FIELD_TYPE.TEXT,
      label: getLabelText(labels[index]),
      required: isRequiredField(labels[index]),
      $input: inputs[index],
      $label: labels[index],
    })
  }
  const options = children.map((child) => ({
    type: child.type,
    label: child.label,
  }))
  return {
    label: sectionLabel,
    required: false,
    type: isEmployment
      ? enums.FIELD_TYPE.EMPLOYMENT
      : enums.FIELD_TYPE.EDUCATION,
    $input: entryElement,
    children,
    options,
  }
}

const extractEmploymentEntryRule = (element) =>
  extractSectionEntryRule(element, true)
const extractEducationEntryRule = (element) =>
  extractSectionEntryRule(element, false)

const resolveSectionInputs = (labelElements) => {
  const inputs = labelElements.map((labelElement) => {
    let xpathExpr =
      "ancestor::label/following-sibling::div[contains(@class, 'c-spl-input-grid')]//input[@type='text']"
    let node = xpath.getFirstOrderedNodeSafe(xpathExpr, labelElement)
    if (node) return node

    xpathExpr =
      "ancestor::label/following-sibling::div[contains(@class, 'c-spl-textarea-wrapper')]//textarea"
    node = xpath.getFirstOrderedNodeSafe(xpathExpr, labelElement)
    if (node) return node

    xpathExpr = "ancestor::label/following-sibling::spl-date-picker"
    const datePicker = xpath.getFirstOrderedNodeSafe(xpathExpr, labelElement)
    if (datePicker) {
      const dateInput = datePicker.shadowRoot.querySelector(
        'input[class*="c-spl-input"]',
      )
      if (dateInput) return dateInput
    }

    xpathExpr =
      "ancestor::label/following-sibling::div[1]//input[@type='checkbox']"
    const checkbox = xpath.getFirstOrderedNodeSafe(xpathExpr, labelElement)
    return checkbox || null
  })
  return inputs.length > 0 ? inputs : null
}

const extractRadioGroupRule = (labelElement) => {
  const label = getLabelText(labelElement)
  const required = isRequiredField(labelElement)
  let options = []
  const radioGroup = labelElement.closest("spl-radio-group")
  if (!radioGroup) return null
  const radios = [...radioGroup.querySelectorAll("spl-radio")]
  if (radios.length > 0) {
    const optionLabels = radios
      .map((radio) =>
        radio.shadowRoot?.querySelector(
          'span[class*="c-spl-form-field-label-wrapper"]',
        ),
      )
      .filter(Boolean)
    options = mapOptionTexts(optionLabels)
  }
  return {
    type: enums.FIELD_TYPE.RADIOGROUP,
    label,
    required,
    options: options.filter((option) => option),
    $input: radios[0],
    $label: labelElement,
    $radioParent: radioGroup,
  }
}

const extractCheckboxRule = (labelElement) => {
  const label = getLabelText(labelElement)
  const required = isRequiredField(labelElement)
  const options = ["Yes", "No"]
  const checkboxHost = closestAcrossShadow(
    labelElement,
    "spl-checkbox:not([id*='select-all'])",
  )
  if (!checkboxHost) return null
  const input = checkboxHost.shadowRoot.querySelector("input[type='checkbox']")
  return input
    ? {
        type: enums.FIELD_TYPE.CHECKBOX,
        label,
        required,
        options,
        $label: labelElement,
        $checkboxs: [input],
        $input: checkboxHost,
      }
    : null
}

const extractAutocompleteSelectRule = (labelElement) => {
  const label = getLabelText(labelElement)
  const required = isRequiredField(labelElement)
  let options = []
  const autocomplete = closestAcrossShadow(labelElement, "spl-autocomplete")
  if (labelElement instanceof HTMLElement && autocomplete) {
    const input = autocomplete.shadowRoot
      ?.querySelector("spl-input")
      ?.shadowRoot?.querySelector('input[type="text"]')
    if (!input) return null
    input?.focus()
    input?.click()
    setTimeout(() => {}, 1e3)
    input?.blur()
    const menu = autocomplete.shadowRoot?.querySelector('div[slot*="menu"]')
    if (menu) {
      const optionElements = Array.from(
        menu.querySelectorAll("spl-select-option") || [],
      )
      options = mapOptionTexts(optionElements)
    }
    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      required,
      options: options.filter((option) => option),
      $input: input,
      $label: labelElement,
    }
  }
  return null
}

const extractGenderRaceRules = (labelElement) => {
  const label = getLabelText(labelElement)
  if (label !== "Gender, Race and Ethnicity (definitions)".trim()) return null
  const autocompletes = Array.from(
    labelElement.nextElementSibling?.querySelectorAll("spl-autocomplete") ||
      [],
  )
  const fieldLabels = ["Gender", "Race/Ethnicity"]
  const controls = autocompletes
    .slice(0, fieldLabels.length)
    .flatMap((autocomplete, index) => {
      const input = getAutocompleteShadowInput(autocomplete)
      return input ? [{ input, label: fieldLabels[index] }] : []
    })
  if (0 === controls.length) {
    console.info(
      "[SmartRecruiters][GenderRace] skipped-unmounted-controls",
      { autocompleteCount: autocompletes.length },
    )
    return null
  }
  return controls.map(({ input, label: fieldLabel }) => {
    input?.focus()
    input?.click()
    setTimeout(() => {}, 500)
    const menu =
      input
        ?.getRootNode()
        ?.host?.closest('div[class*="c-spl-autocomplete-trigger"]')
        ?.nextElementSibling
    const options = Array.from(
      menu?.querySelectorAll("spl-select-option") || [],
    )
    return {
      type: enums.FIELD_TYPE.SELECT,
      label: fieldLabel,
      required: false,
      options: mapOptionTexts(options),
      $input: input,
      $label: labelElement,
    }
  })
}

const processEduOrWorkExpAnwser = (isEmployment) => {
  const entries = getSectionEntries(isEmployment)
  let fieldTypes = []
  let fieldLabels = []
  if (isEmployment) {
    fieldTypes = [
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.CHECKBOX,
    ]
    fieldLabels = [
      "Title",
      "Company",
      "Office location",
      "Description",
      "From",
      "To",
      "I currently work here",
    ]
  } else {
    fieldTypes = [
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.CHECKBOX,
    ]
    fieldLabels = [
      "Institution",
      "Major",
      "Degree",
      "School location",
      "Description",
      "From",
      "To",
      "I currently attend",
    ]
  }
  if (entries.length > 0) {
    const rules = []
    for (const entry of entries) {
      const labels = querySelectorAllDeep(
        ".c-spl-form-field-label-wrapper",
        entry,
      )
      const inputs = resolveSectionInputs(labels)
      const children = []
      for (let index = 0; index < fieldLabels.length; index++) {
        if (!inputs[index]) continue
        const fieldType = fieldTypes[index]
        if (fieldType === enums.FIELD_TYPE.TEXT) {
          children.push({
            type: enums.FIELD_TYPE.TEXT,
            label: fieldLabels[index],
            required: false,
            $input: inputs[index],
            $label: labels[index],
          })
        }
        if (fieldType === enums.FIELD_TYPE.CHECKBOX) {
          children.push({
            type: enums.FIELD_TYPE.CHECKBOX,
            label: fieldLabels[index],
            required: false,
            options: ["Yes", "No"],
            $label: labels[index],
            $checkboxs: [inputs[index]],
          })
        }
      }
      rules.push({
        children,
        label: isEmployment ? "Work Experience" : "Education",
        required: false,
        type: isEmployment
          ? enums.FIELD_TYPE.EMPLOYMENT
          : enums.FIELD_TYPE.EDUCATION,
      })
    }
    return rules
  }
  return null
}

const SAVED_SECTION_SELECTORS = {
  education: {
    institution: '[data-test="education-entry-institution"]',
    major: '[data-test="education-entry-major"]',
    degree: '[data-test="education-entry-degree"]',
    from: '[data-test="education-entry-date"]',
    to: '[data-test="education-entry-date"]',
    description: '[data-test="education-entry-description"]',
  },
  employment: {
    title: '[data-test="experience-entry-title"]',
    company: '[data-test="experience-entry-company"]',
    from: '[data-test="experience-entry-date"]',
    to: '[data-test="experience-entry-date"]',
    description: '[data-test="experience-entry-description"]',
  },
}

function normalizeSavedFieldKey(label) {
  return String(label || "")
    .replace(/[^a-z0-9]+/gi, " ")
    .trim()
    .toLowerCase()
}

function getSavedSmartRecruitersSectionFocusRules(isEmployment, sourceRules) {
  const entries = getSectionEntries(isEmployment) || []
  if (entries.length !== sourceRules.length) return null
  const selectors = isEmployment
    ? SAVED_SECTION_SELECTORS.employment
    : SAVED_SECTION_SELECTORS.education
  return sourceRules.map((sourceRule, index) => {
    const entry = entries[index]
    const children = ("children" in sourceRule ? sourceRule.children : []).map(
      (child) => {
        const key = normalizeSavedFieldKey(child.label)
        const selector = selectors[key]
        const target = selector ? entry.querySelector(selector) : null
        const focusTarget = target || entry
        return {
          type: child.type,
          label: child.label,
          required: child.required,
          options: "options" in child ? child.options : [],
          $input: focusTarget,
          $label: focusTarget,
        }
      },
    )
    return {
      type: sourceRule.type,
      label: sourceRule.label,
      required: sourceRule.required,
      options: "options" in sourceRule ? sourceRule.options : [],
      $input: entry,
      $label: entry,
      children,
    }
  })
}

const isRequiredField = (labelElement) => {
  const control = closestAcrossShadow(
    labelElement,
    "spl-autocomplete,spl-input,spl-number-field,spl-textarea,spl-multiselect-autocomplete,spl-checkbox,spl-radio-group,spl-phone-field,spl-date-picker",
  )
  if (
    control?.hasAttribute("required") ||
    control?.getAttribute("aria-required") === "true"
  ) {
    return true
  }
  let asterisk = null
  if (!(asterisk = labelElement.querySelector("span[aria-hidden='true']"))) {
    const parent = labelElement.parentElement
    asterisk = parent.shadowRoot?.querySelector("span[aria-hidden='true']")
  }
  return !!asterisk
}

const getLabelText = (labelElement) => {
  const direct =
    labelElement.textContent?.replace(/\s*\*\s*/g, "").trim() || ""
  if (direct) return direct
  const host = labelElement.getRootNode()?.host
  const slotted = host?.querySelector(
    ':is(span, div)[slot*="label-content"]',
  )
  return slotted?.textContent?.trim() || ""
}

const findTextInput = (labelElement) => {
  let input = null
  let sibling = null
  const label = labelElement.closest(
    "label[class*=c-spl-form-field-label]",
  )
  if (label) sibling = label.nextElementSibling
  if (sibling) {
    input = sibling.querySelector(
      'input[type="text"], input[type="email"], input[type="tel"], input[type="number"], textarea',
    )
  }
  sibling = closestAcrossShadow(
    labelElement,
    'spl-input[type="text"], spl-input[type="number"], spl-number-field, spl-textarea',
  )
  if (
    sibling &&
    !(input = sibling.shadowRoot.querySelector(
      'input[class*="c-spl-input"], input[type="text"], input[role="combobox"], textarea[class*="c-spl-textarea"], textarea',
    ))
  ) {
    input = sibling.shadowRoot
      .querySelector('spl-input[type="number"]')
      ?.shadowRoot.querySelector('input[class*="c-spl-input"]')
  }
  return input || null
}

const getSectionEntries = (isEmployment) => {
  const sectionTag = isEmployment ? "oc-experience" : "oc-education"
  const entryTag = isEmployment
    ? "oc-experience-entry"
    : "oc-education-entry"
  const entries = document
    .querySelector(sectionTag)
    .querySelectorAll(entryTag)
  return entries.length ? Array.from(entries) : null
}

const extractMultiSelectRule = (labelElement) => {
  const label = getLabelText(labelElement)
  const required = isRequiredField(labelElement)
  let options = []
  const multiSelect = labelElement.closest("spl-multiselect-autocomplete")
  if (!multiSelect) return null
  const input = multiSelect.shadowRoot.querySelector(
    "input[role='combobox']",
  )
  if (!input) return null
  input.focus()
  input.click()
  setTimeout(() => {}, 1e3)
  input.blur()
  const menu = input
    .closest('div[class*="c-spl-multiselect-autocomplete-trigger"]')
    ?.nextElementSibling
  if (menu) {
    const optionElements = Array.from(
      menu.querySelectorAll("spl-select-option") || [],
    )
    options = mapOptionTexts(optionElements)
  }
  return {
    type: enums.FIELD_TYPE.MULTI_SELECT,
    label,
    required,
    options: options.filter((option) => option),
    $input: input,
    $label: labelElement,
  }
}

async function getFormSnapshot() {
  const snapshot = {}
  const fields = xpath.getOrderedNodesSafe(
    '//div[contains(@class, "field-")]',
  )
  for (const field of fields) {
    const labelNode = xpath.getFirstOrderedNodeSafe(
      './/label[contains(@id, "_label")]',
      field,
    )
    const legendNode = xpath.getFirstOrderedNodeSafe(
      './/legend[contains(@id, "_legend")]',
      field,
    )
    let label = ""
    if (labelNode) label = (labelNode.textContent || "").trim()
    else if (legendNode) label = (legendNode.textContent || "").trim()
    if (!label) continue

    const phoneSnapshot = getSmartRecruitersPhoneSnapshot(
      labelNode ?? legendNode,
    )
    if (phoneSnapshot) {
      Object.assign(snapshot, phoneSnapshot)
      continue
    }
    if ("country" === label.toLowerCase().trim()) continue

    const textInput = xpath.getFirstOrderedNodeSafe(
      './/input[@data-test-id][not(@type="hidden")] | .//input[@type="text"] | .//input[@type="email"] | .//input[@type="tel"] | .//textarea',
      field,
    )
    if (textInput && "file" !== textInput.type) {
      snapshot[label] = textInput.value
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

    const checkboxes = xpath.getOrderedNodesSafe(
      './/input[@type="checkbox"]',
      field,
    )
    if (checkboxes.length > 0) {
      snapshot[label] = checkboxes
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => {
          const checkboxLabel = checkbox.closest("label")
          return (
            (checkboxLabel && checkboxLabel.textContent?.trim()) ||
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
        const radioLabel = xpath.getFirstOrderedNodeSafe(
          `//label[@for="${checked.id}"]`,
        )
        snapshot[label] =
          radioLabel?.textContent?.trim() || checked.value || ""
        continue
      }
    }
  }
  return snapshot
}

export {
  SMARTRECRUITERS_PHONE_COUNTRY_CODE_LABEL,
  SMARTRECRUITERS_PHONE_LABEL,
  extractRules,
  getFillingLabels,
  getFormSnapshot,
  getSavedSmartRecruitersSectionFocusRules,
  getSmartRecruitersPhoneCountryCodeRule,
  getSmartRecruitersPhoneRuleForTests,
  getSmartRecruitersPhoneSnapshotForTests,
  getSmartRecruitersRuleForTests,
  normalizeSmartRecruitersPhoneCountryText,
  processEduOrWorkExpAnwser,
  querySelectorAllDeep,
}
