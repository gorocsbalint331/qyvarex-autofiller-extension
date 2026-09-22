// @ts-nocheck
/**
 * ADP Recruiting — form rule extraction, VSID race helpers, and snapshots.
 */

import * as dom from "../../methods/dom.js"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as autofillAnswerPair from "../../../utils/autofill-answer-pair.js"
import * as autofillAnswerPairTracking from "../autofill-answer-pair-tracking.js"
import * as urlStore from "../../../store/url.js"
import * as operations from "./operations.ts"

export const ADP_RECRUITING_PAGER_NEXT_ATTACH = "thePagerDualNext"

const VSID_MAIN_CONTAINER_SELECTOR =
  ".vdl-accordian-panel.applicationvsid-main-container, .applicationvsid-main-container"

const FIELD_SECTION_XPATH = `
.//div[contains(@class, "element") and (
.//label or
.//*[contains(@class, "mdf-label")]
)]
| .//*[contains(@class, "mdf-validated-field") and child::*[contains(@class, "mdf-label")]]
`

export async function getRules() {
  const rules = []
  const employmentRules = await getEmploymentRepeatRules()
  const claimedNodes = new Set()

  if (employmentRules && employmentRules.length > 0) {
    rules.push(...employmentRules)
    employmentRules.forEach((empRule) => {
      empRule.children &&
        empRule.children.forEach((child) => {
          "$input" in child && child.$input && claimedNodes.add(child.$input)
          "$label" in child && child.$label && claimedNodes.add(child.$label)
        })
    })
  }

  const sections = getFieldSections(document)
  for (const section of sections) {
    if (claimedNodes.has(section)) continue

    const repeatParent = section.closest('div[id^="_eformrender_repeat_"]')
    if (repeatParent) {
      const isEmployerRepeat = Array.from(
        section.querySelectorAll("input, select, textarea"),
      ).some((el) => {
        const input = el
        const name = input.getAttribute("name") || ""
        return name.includes("employer")
      })
      if (isEmployerRepeat) continue
    }

    const extracted = await extractFieldFromSection(section)
    extracted && pushRule(rules, extracted)
  }

  const questionsContainer = document.querySelector(
    ".quesitions-container, .questions-container",
  )
  if (questionsContainer) {
    const questionDivs = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "qMainDiv")]',
      questionsContainer,
    )
    for (const questionDiv of questionDivs) {
      const questionRules = await extractQuestionRules(questionDiv)
      questionRules && rules.push(...questionRules)
    }
  }

  const vsidContainer = getVsidMainContainer()
  if (vsidContainer) {
    const vsidRules = await extractVsidRules(vsidContainer)
    vsidRules && rules.push(...vsidRules)
  }

  return dedupeCityRules(rules)
}

function dedupeCityRules(rules) {
  const hasTextCity = rules.some(
    (rule) =>
      /^city$/i.test(rule.label) && rule.type === enums.FIELD_TYPE.TEXT,
  )
  return hasTextCity
    ? rules.filter(
        (rule) =>
          !/^city$/i.test(rule.label) || rule.type === enums.FIELD_TYPE.TEXT,
      )
    : rules
}

function getVsidMainContainer() {
  return document.querySelector(VSID_MAIN_CONTAINER_SELECTOR)
}

function getVsidRaceInput(container) {
  return container.querySelector('input#vsidRace, input[aria-label="Race"]')
}

function getVsidEthnicityInput(container) {
  return container.querySelector(
    'input#vsidEthinicity, input[aria-label="Ethnicity"]',
  )
}

function isInputDisabled(input) {
  return (
    !!input.disabled ||
    input.getAttribute("aria-disabled") === "true" ||
    !!input.closest?.("[disabled], [aria-disabled='true']")
  )
}

export function isAdpRecruitingVsidRaceRule(rule) {
  if (rule.type !== enums.FIELD_TYPE.SELECT) return false
  const input = rule.$input
  return (
    !!input &&
    (input.id === "vsidRace" ||
      (input.getAttribute?.("aria-label")?.trim().toLowerCase() === "race" &&
        !!input.closest?.(VSID_MAIN_CONTAINER_SELECTOR)))
  )
}

function isAdpRecruitingVsidEthnicityRule(rule) {
  if (rule.type !== enums.FIELD_TYPE.SELECT) return false
  const input = rule.$input
  return (
    !!input &&
    (input.id === "vsidEthinicity" ||
      (input.getAttribute?.("aria-label")?.trim().toLowerCase() ===
        "ethnicity" &&
        !!input.closest?.(VSID_MAIN_CONTAINER_SELECTOR)))
  )
}

export function hasAdpRecruitingVsidRaceDependency() {
  const container = getVsidMainContainer()
  return !!(container && getVsidEthnicityInput(container))
}

function getVsidSelectDisplayedValue(input) {
  const item = input.closest(".vsid-item") || input.parentElement
  return (
    item?.querySelector(".MDFSelectBox__single-value")?.textContent?.trim() ||
    ""
  )
}

export function isAdpRecruitingVsidRaceRequiredAfterEthnicity() {
  const container = getVsidMainContainer()
  if (!container) return false
  const ethnicityInput = getVsidEthnicityInput(container)
  return (
    !!ethnicityInput &&
    getVsidSelectDisplayedValue(ethnicityInput)
      .replace(/[^a-z]/gi, "")
      .toLowerCase() === "nothispanicorlatino"
  )
}

export function partitionAdpRecruitingVsidRaceRules(rules) {
  const hasEthnicity = rules.some(isAdpRecruitingVsidEthnicityRule)
  const deferredRaceRules = rules.filter(
    (rule) =>
      !!isAdpRecruitingVsidRaceRule(rule) &&
      (hasEthnicity || isInputDisabled(rule.$input)),
  )
  return {
    readyRules: rules.filter((rule) => !deferredRaceRules.includes(rule)),
    deferredRaceRules,
  }
}

async function buildVsidRaceRule(container, raceInput = getVsidRaceInput(container)) {
  if (!raceInput) return null

  const labelEl =
    container.querySelector("label#race_vsid_label") ||
    Array.from(container.querySelectorAll("label")).find((el) =>
      el.textContent?.trim().includes("Race"),
    ) ||
    null
  const label = labelEl
    ? getLabelText(labelEl)
    : raceInput.getAttribute("aria-label") || "Race"
  if (!label) return null

  const required = !!labelEl && isLabelRequired(labelEl)
  const optionEls = isInputDisabled(raceInput)
    ? null
    : await operations.getSelectOptionsElement(raceInput, false)
  const options = optionEls
    ? optionEls
        .map((el) => el.textContent?.trim() || "")
        .filter(Boolean)
    : []

  return {
    type: enums.FIELD_TYPE.SELECT,
    label,
    required,
    $input: raceInput,
    options,
    $label: labelEl || raceInput,
  }
}

export async function getEnabledAdpRecruitingVsidRaceRule() {
  const container = getVsidMainContainer()
  if (!container) return null
  const raceInput = getVsidRaceInput(container)
  return !raceInput || isInputDisabled(raceInput)
    ? null
    : await buildVsidRaceRule(container, raceInput)
}

function pushRule(rules, rule) {
  if (rule) {
    if (Array.isArray(rule)) {
      rules.push(...rule)
      return
    }
    rules.push(rule)
  }
}

export async function getEduRules() {
  const sections = Array.from(
    document.querySelectorAll(
      "section[data-ui='section']>[data-ui='section-fields']",
    ),
  ).flatMap((sectionFields) =>
    Array.from(sectionFields?.children).filter(
      (child) => child instanceof HTMLElement,
    ),
  )
  const rules = []
  for (const section of sections)
    if (section.dataset.ui === "education") {
      const eduRules = await extractEducationSection(section)
      eduRules && rules.push(...eduRules)
    }
  return rules
}

export async function getExpRules() {
  const rules = []
  const sections = Array.from(
    document.querySelectorAll(
      "section[data-ui='section']>[data-ui='section-fields']",
    ),
  ).flatMap((sectionFields) =>
    Array.from(sectionFields?.children).filter(
      (child) => child instanceof HTMLElement,
    ),
  )
  for (const section of sections)
    if (section.dataset.ui === "experience") {
      const expRules = await extractExperienceSection(section)
      expRules && rules.push(...expRules)
    }
  const employmentRepeatRules = await getEmploymentRepeatRules()
  return (
    employmentRepeatRules &&
      employmentRepeatRules.length > 0 &&
      rules.push(...employmentRepeatRules),
    rules
  )
}

function mapChildrenToOptions(children) {
  return children.map((child) => {
    const base = { type: String(child.type), label: child.label }
    if (
      "options" in child &&
      Array.isArray(child.options) &&
      child.options.length
    ) {
      const stringOptions = Array.from(child.options).filter(
        (opt) => typeof opt == "string",
      )
      return stringOptions.length ? { ...base, options: stringOptions } : base
    }
    return base
  })
}

async function extractEducationSection(section) {
  if (section.dataset.ui !== "education") return null
  const editors = Array.from(
    section.querySelectorAll("ul>li [data-ui='editor']"),
  ).filter((el) => el instanceof HTMLElement)
  if (!editors?.length) return null

  const rules = []
  for (const editor of editors) {
    const children = Array.from(editor.children).filter(
      (el) => el instanceof HTMLElement,
    )
    const fieldRules = []
    for (const child of children) {
      const extracted = await extractFieldFromSection(child)
      extracted && pushRule(fieldRules, extracted)
    }
    fieldRules.length &&
      rules.push({
        type: enums.FIELD_TYPE.EDUCATION,
        label: "education",
        children: fieldRules,
        options: mapChildrenToOptions(fieldRules),
        $input: editor,
        $label: editor,
        required: false,
      })
  }
  return rules
}

async function extractExperienceSection(section) {
  if (section.dataset.ui !== "experience") return null
  const editors = Array.from(
    section.querySelectorAll("ul>li [data-ui='editor']"),
  ).filter((el) => el instanceof HTMLElement)
  if (!editors?.length) return null

  const rules = []
  for (const editor of editors) {
    const children = Array.from(editor.children).filter(
      (el) => el instanceof HTMLElement,
    )
    const fieldRules = []
    for (const child of children) {
      const extracted = await extractFieldFromSection(child)
      extracted && pushRule(fieldRules, extracted)
    }
    fieldRules.length &&
      rules.push({
        type: enums.FIELD_TYPE.EMPLOYMENT,
        label: "experience",
        children: fieldRules,
        options: mapChildrenToOptions(fieldRules),
        $input: editor,
        $label: editor,
        required: false,
      })
  }
  return rules
}

async function extractFieldFromSection(section) {
  return section instanceof HTMLElement
    ? extractCheckboxRadioField(section) ||
        (await extractMdfSelectField(section)) ||
        (await extractDijitSelectField(section)) ||
        extractTextField(section)
    : null
}

function extractCheckboxRadioField(section) {
  const labelEl = section.querySelector("label")
  if (!labelEl) return null

  const inputs = xpath.getOrderedNodesSafe(
    ".//input[@type='checkbox' or @type='radio']",
    section,
  )
  if (!inputs.length) return null

  const groups = groupCheckboxRadioInputs(inputs)
  const rules = []

  for (const group of groups) {
    const options = group.inputs.map(getInputLabelText).filter(Boolean)
    if (!options.length) continue

    const label = resolveCheckboxRadioLabel(
      section,
      getLabelText(labelEl),
      options,
      group.inputs[0],
      labelEl,
    )
    if (!label) continue

    const required = isCheckboxRadioRequired(section, labelEl, group.inputs)
    if (group.kind === "radio") {
      rules.push({
        type: enums.FIELD_TYPE.RADIOGROUP,
        label,
        required,
        options,
        $radios: group.inputs,
        $input: group.inputs[0],
        $label: section,
        $radioParent: section,
      })
    } else {
      rules.push({
        type: enums.FIELD_TYPE.CHECKBOX,
        label,
        required,
        $checkboxs: group.inputs,
        options,
        $input: group.inputs[0],
        $label: section,
      })
    }
  }

  return rules.length > 0 ? rules : null
}

function groupCheckboxRadioInputs(inputs) {
  const groups = []
  const radiosByName = new Map()
  const checkboxes = []

  for (const groupInputs of (inputs.forEach((input, index) => {
    const kind = (input.getAttribute("type") || input.type || "").toLowerCase()
    if (kind === "radio") {
      const name =
        input.getAttribute("name") || input.name || `__radio_${index}`
      radiosByName.has(name) || radiosByName.set(name, [])
      radiosByName.get(name)?.push(input)
      return
    }
    checkboxes.push(input)
  }),
  radiosByName.values()))
    groups.push({ kind: "radio", inputs: groupInputs })

  checkboxes.length > 0 &&
    groups.push({ kind: "checkbox", inputs: checkboxes })

  return groups.sort(
    (a, b) => inputs.indexOf(a.inputs[0]) - inputs.indexOf(b.inputs[0]),
  )
}

function getInputLabelText(input) {
  const label = xpath.getFirstOrderedNodeSafe(
    "./ancestor-or-self::label",
    input,
  )
  return label?.textContent?.trim() || ""
}

function isCheckboxRadioRequired(section, labelEl, inputs) {
  return (
    labelEl.classList.contains("required") ||
    !!section.querySelector(".mdf-required-indicator") ||
    inputs.some(
      (input) =>
        input.hasAttribute("required") ||
        input.getAttribute("aria-required") === "true",
    )
  )
}

function resolveCheckboxRadioLabel(
  section,
  fallbackLabel,
  options,
  firstInput = section.querySelector(
    'input[type="checkbox"], input[type="radio"]',
  ),
  labelEl,
) {
  const normalizedOptions = options
    .map((opt) => normalizeCompareText(opt))
    .filter(Boolean)
  const normalizedFallback = normalizeCompareText(fallbackLabel)

  if (
    normalizedFallback &&
    !normalizedOptions.includes(normalizedFallback) &&
    labelEl &&
    !labelEl.querySelector('input[type="checkbox"], input[type="radio"]')
  ) {
    return fallbackLabel
  }

  const selectors = [
    "legend",
    "h1, h2, h3, h4, h5, h6",
    ".preamble",
    ".bold",
    ".qLabel",
    '[class*="question"]',
    '[class*="Question"]',
    '[class*="title"]',
    '[class*="Title"]',
    "p",
  ]
  let bestEl = null
  const seen = new Set()

  for (const selector of selectors) {
    const candidates = Array.from(section.querySelectorAll(selector))
    for (const candidate of candidates) {
      if (
        seen.has(candidate) ||
        (seen.add(candidate),
        candidate.closest("label") ||
          candidate.querySelector(
            'input[type="checkbox"], input[type="radio"]',
          ))
      )
        continue

      if (firstInput) {
        const position = candidate.compareDocumentPosition(firstInput)
        const precedesOrContains =
          candidate.contains(firstInput) ||
          !!(position & Node.DOCUMENT_POSITION_FOLLOWING)
        if (!precedesOrContains) continue
      }

      const text = getLabelText(candidate)
      const normalized = normalizeCompareText(text)
      normalized &&
        !normalizedOptions.includes(normalized) &&
        (!bestEl ||
          bestEl.compareDocumentPosition(candidate) &
            Node.DOCUMENT_POSITION_FOLLOWING) &&
        (bestEl = candidate)
    }
  }

  if (bestEl) return getLabelText(bestEl)

  const walked = walkForQuestionText(section, firstInput)
  return walked || fallbackLabel
}

function walkForQuestionText(section, stopAt) {
  if (!stopAt) return ""
  const walker = document.createTreeWalker(section, NodeFilter.SHOW_ELEMENT)
  let node = walker.currentNode
  for (; node && node !== stopAt; ) {
    const el = node
    if (
      el !== section &&
      !el.closest("label") &&
      !el.querySelector('input[type="checkbox"], input[type="radio"]')
    ) {
      const text = getLabelText(el)
      if (text && normalizeCompareText(text).length > 8) return text
    }
    node = walker.nextNode()
  }
  return ""
}

function normalizeCompareText(text) {
  return text
    .replace(/\s+/g, " ")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .trim()
    .toLowerCase()
}

async function extractMdfSelectField(section) {
  const labelEl = getSectionLabelElement(section)
  const label = getLabelText(labelEl)
  if (!label) return null

  const required = isLabelRequired(labelEl)
  const inputId = labelEl.getAttribute("for") || labelEl.getAttribute("id")
  const input = xpath.getFirstOrderedNodeSafe(
    `.//*[@aria-labelledby="${inputId}"]
  | .//*[contains(@class, "vdl-dropdown-list__input-container")]
  | .//*[contains(@class, "MDFSelectBox__input-container")]//*[contains(@class, "MDFSelectBox__input")]`,
    section,
  )
  if (!input) return null

  const optionEls = await operations.getSelectOptionsElement(input)
  if (!optionEls)
    return (
      console.error(
        "No options element found for select input:",
        label,
        "inputId:",
        inputId,
        "sectionElement:",
        section,
      ),
      null
    )

  const options = optionEls.map((el) => {
    const text = el.textContent?.trim()
    return text || null
  })

  return {
    type: enums.FIELD_TYPE.SELECT,
    label,
    required,
    $input: input,
    options,
    $label: labelEl,
  }
}

async function extractDijitSelectField(section) {
  let options
  const labelEl = getSectionLabelElement(section)
  const label = getLabelText(labelEl)
  if (!label) return null

  const required = isLabelRequired(labelEl)
  const selectTable = getDijitSelectTable(section)
  if (!selectTable) return null

  const selectId = selectTable.getAttribute("id")
  if (!selectTable) return null

  const isStateField = /^State(\s|\/|$)/i.test(label)
  if (isStateField) options = []
  else {
    dom.triggerEvents(selectTable, ["mousedown"])
    await delay.delay(100)
    let optionNodes = xpath.getOrderedNodesSafe(
      `.//table[@aria-labelledby="${selectId}"]/tbody/tr/td[contains(@class, "dijitMenuItemLabel")]/span[@class="label"]`,
      document,
    )
    optionNodes.length === 0 &&
      (optionNodes = xpath.getOrderedNodesSafe(
        `.//table[@aria-labelledby="${selectId}"]/tbody/tr/td[contains(@class, "dijitMenuItemLabel")]`,
        document,
      ))
    options = optionNodes.map((el) => {
      const text = el.textContent?.trim()
      return text || null
    })
  }

  return {
    type: enums.FIELD_TYPE.SELECT,
    label,
    required,
    $input: selectTable,
    options,
    $label: labelEl,
  }
}

function extractTextField(section) {
  const labelEl = getSectionLabelElement(section)
  if (!labelEl) return null

  const label = getLabelText(labelEl)
  if (!label) return null

  const required = isLabelRequired(labelEl)
  const input = section.querySelector(
    'input:not([readonly="readonly"]), textarea',
  )
  if (!input) return null

  const isDate =
    section.querySelector(".dijitDateTextBox") !== null ||
    /Start Date|End Date/i.test(label)
  const rule = {
    type: enums.FIELD_TYPE.TEXT,
    label,
    required,
    $input: input,
    $label: labelEl,
  }
  return isDate && (rule.description = "mm/dd/yyyy"), rule
}

function getLabelText(el) {
  const text = el?.textContent || ""
  return (
    text
      .replaceAll("*", "")
      .replace(/[\u200B-\u200D\uFEFF]/g, "")
      .trim() || ""
  )
}

function isLabelRequired(labelEl) {
  return (
    labelEl.classList.contains("required") ||
    !!labelEl.querySelector(".mdf-required-indicator")
  )
}

async function extractQuestionRules(questionDiv) {
  const rules = []
  const labelEl = questionDiv.querySelector("label.qLabel")
  let label = labelEl ? getLabelText(labelEl) : ""
  const required = !!labelEl && isLabelRequired(labelEl)

  const radioGroup = questionDiv.querySelector("sdf-radio-group")
  if (radioGroup) {
    const groupLabel = radioGroup.getAttribute("label") || ""
    !label && groupLabel && (label = groupLabel)

    const buttons = Array.from(
      radioGroup.querySelectorAll("sdf-radio-button"),
    )
    if (buttons.length > 0) {
      const options = []
      const radios = []
      for (const button of buttons) {
        const buttonLabel = button.getAttribute("label") || ""
        const buttonValue = button.getAttribute("value") || ""
        ;(buttonLabel || buttonValue) &&
          options.push(buttonLabel || buttonValue)
        const radio = button.querySelector('input[type="radio"]')
        radio && radios.push(radio)
      }
      options.length > 0 &&
        label &&
        rules.push({
          type: enums.FIELD_TYPE.RADIOGROUP,
          label,
          required,
          options,
          $radios: radios.length > 0 ? radios : void 0,
          $input: radios[0] || buttons[0],
          $label: labelEl || radioGroup,
          $radioParent: questionDiv,
        })
    }
  }

  const textarea = questionDiv.querySelector("textarea.qTextArea")
  if (textarea) {
    const fieldLabel = textarea.getAttribute("aria-label") || label
    fieldLabel &&
      rules.push({
        type: enums.FIELD_TYPE.TEXT,
        label: fieldLabel,
        required:
          required || textarea.getAttribute("aria-required") === "true",
        $input: textarea,
        $label: labelEl || textarea,
      })
  }

  const numberInput = questionDiv.querySelector(
    "input.question__number, input.additional-info-salary-textBox",
  )
  if (numberInput) {
    const fieldLabel =
      numberInput.getAttribute("aria-label") ||
      numberInput.id === "desiredSalaryId"
        ? "What is your desired salary?"
        : label
    fieldLabel &&
      rules.push({
        type: enums.FIELD_TYPE.TEXT,
        label: fieldLabel,
        required:
          required || numberInput.getAttribute("aria-required") === "true",
        $input: numberInput,
        $label: labelEl || numberInput,
      })
  }

  const selectSimple = questionDiv.querySelector("sdf-select-simple")
  if (selectSimple) {
    const input = selectSimple.querySelector("input")
    if (input) {
      const fieldLabel =
        input.getAttribute("aria-label") ||
        selectSimple.getAttribute("aria-label") ||
        "Select currency type"
      rules.push({
        type: enums.FIELD_TYPE.SELECT,
        label: fieldLabel,
        required:
          required ||
          selectSimple.getAttribute("required") === "true" ||
          selectSimple.getAttribute("required-state") === "required",
        $input: input,
        options: [],
        $label: labelEl || selectSimple,
      })
    }
  }

  return rules.length > 0 ? rules : null
}

async function extractVsidRules(container) {
  const rules = []

  const genderInput = container.querySelector(
    'input#vsidGender, input[aria-label="Gender"]',
  )
  if (genderInput) {
    let genderLabelEl = container.querySelector("label.vsid-title")
    if (!genderLabelEl || !genderLabelEl.textContent?.includes("Gender")) {
      const labels = Array.from(container.querySelectorAll("label"))
      genderLabelEl =
        labels.find((el) => el.textContent?.trim().includes("Gender")) || null
    }
    const genderLabel = genderLabelEl
      ? getLabelText(genderLabelEl)
      : genderInput.getAttribute("aria-label") || "Gender"
    if (genderLabel) {
      const required = !!genderLabelEl && isLabelRequired(genderLabelEl)
      const optionEls = await operations.getSelectOptionsElement(
        genderInput,
        false,
      )
      const options = optionEls
        ? optionEls
            .map((el) => el.textContent?.trim() || "")
            .filter(Boolean)
        : []
      rules.push({
        type: enums.FIELD_TYPE.SELECT,
        label: genderLabel,
        required,
        $input: genderInput,
        options,
        $label: genderLabelEl || genderInput,
      })
    }
  }

  const declineCheckbox = container.querySelector(
    'input[type="checkbox"][name="enthinicityAndRaceId"]',
  )
  if (declineCheckbox) {
    const declineLabelEl = container.querySelector(
      `label[for="${declineCheckbox.id}"]`,
    )
    if (declineLabelEl) {
      const declineLabel = declineLabelEl.textContent?.trim() || ""
      declineLabel &&
        rules.push({
          type: enums.FIELD_TYPE.CHECKBOX,
          label: declineLabel,
          required: false,
          $checkboxs: [declineCheckbox],
          options: [declineLabel],
          $input: declineCheckbox,
          $label: declineLabelEl,
        })
    }
  }

  const ethnicityInput = container.querySelector(
    'input#vsidEthinicity, input[aria-label="Ethnicity"]',
  )
  if (ethnicityInput) {
    const ethnicityLabels = Array.from(
      container.querySelectorAll("label.upperCaseTextLable, label"),
    )
    const ethnicityLabelEl = ethnicityLabels.find((el) =>
      el.textContent?.trim().includes("Ethnicity"),
    )
    const ethnicityLabel = ethnicityLabelEl
      ? getLabelText(ethnicityLabelEl)
      : ethnicityInput.getAttribute("aria-label") || "Ethnicity"
    if (ethnicityLabel) {
      const required =
        !!ethnicityLabelEl && isLabelRequired(ethnicityLabelEl)
      const optionEls = await operations.getSelectOptionsElement(
        ethnicityInput,
        false,
      )
      const options = optionEls
        ? optionEls
            .map((el) => el.textContent?.trim() || "")
            .filter(Boolean)
        : []
      rules.push({
        type: enums.FIELD_TYPE.SELECT,
        label: ethnicityLabel,
        required,
        $input: ethnicityInput,
        options,
        $label: ethnicityLabelEl || ethnicityInput,
      })
    }
  }

  const raceRule = await buildVsidRaceRule(container)
  raceRule && rules.push(raceRule)

  const veteranHeading = Array.from(container.querySelectorAll("h4")).find(
    (el) => el.textContent?.includes("Protected Veteran Status"),
  )
  if (veteranHeading) {
    let sibling = veteranHeading.nextElementSibling
    let veteranRadioGroup = null
    for (; sibling && !veteranRadioGroup; )
      (veteranRadioGroup = sibling.querySelector("sdf-radio-group")) ||
        (sibling = sibling.nextElementSibling)
    if (
      veteranRadioGroup ||
      (veteranRadioGroup = container.querySelector("sdf-radio-group")),
      veteranRadioGroup
    ) {
      const buttons = Array.from(
        veteranRadioGroup.querySelectorAll("sdf-radio-button"),
      )
      if (buttons.length > 0) {
        const options = []
        const radios = []
        for (const button of buttons) {
          const buttonLabel = button.getAttribute("label") || ""
          const buttonValue = button.getAttribute("value") || ""
          ;(buttonLabel || buttonValue) &&
            options.push(buttonLabel || buttonValue)
          const radio = button.querySelector('input[type="radio"]')
          radio && radios.push(radio)
        }
        if (options.length > 0) {
          const veteranLabel =
            veteranRadioGroup.getAttribute("label") ||
            "Protected Veteran Status"
          const veteranRule = {
            type: enums.FIELD_TYPE.RADIOGROUP,
            label: veteranLabel,
            required: false,
            options,
            $radios: radios.length > 0 ? radios : void 0,
            $input: radios[0] || buttons[0],
            $label: veteranHeading || veteranRadioGroup,
            $radioParent: container,
          }
          rules.push(veteranRule)
        }
      }
    }
  }

  const disabilityCheckbox = container.querySelector(
    'input[type="checkbox"][name="disabilityStatusCheck"]',
  )
  if (disabilityCheckbox) {
    const disabilityLabelEl = container.querySelector(
      `label[for="${disabilityCheckbox.id}"]`,
    )
    if (disabilityLabelEl) {
      const disabilityLabel = disabilityLabelEl.textContent?.trim() || ""
      if (disabilityLabel) {
        const required =
          isLabelRequired(disabilityLabelEl) ||
          disabilityCheckbox.getAttribute("aria-required") === "true"
        rules.push({
          type: enums.FIELD_TYPE.CHECKBOX,
          label: disabilityLabel,
          required,
          $checkboxs: [disabilityCheckbox],
          options: [disabilityLabel],
          $input: disabilityCheckbox,
          $label: disabilityLabelEl,
        })
      }
    }
  }

  return rules.length > 0 ? rules : null
}

function hasEmployerNamedInputs(container) {
  return Array.from(
    container.querySelectorAll("input, select, textarea"),
  ).some((el) => {
    const input = el
    const name = input.getAttribute("name") || ""
    return name.includes("employer")
  })
}

function getEmploymentRepeatContainers() {
  return xpath
    .getOrderedNodesSafe(
      './/div[starts-with(@id, "_eformrender_repeat_")]',
      document,
    )
    .filter((el) => isElementVisible(el) && hasEmployerNamedInputs(el))
}

async function getEmploymentRepeatRules() {
  const containers = getEmploymentRepeatContainers()
  if (containers.length === 0) return null

  const rules = []
  for (const container of containers) {
    const elements = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "element")]',
      container,
    )
    const children = []
    for (const element of elements) {
      const extracted = await extractFieldFromSection(element)
      extracted && pushRule(children, extracted)
    }
    if (children.length > 0) {
      const empRule = {
        type: enums.FIELD_TYPE.EMPLOYMENT,
        label: "employment",
        children,
        options: [
          ...children.map((child) => ({
            type: child.type,
            label: child.label,
            options: child.options || [],
            ...(child.description
              ? { description: child.description }
              : {}),
          })),
        ],
        required: false,
      }
      rules.push(empRule)
    }
  }
  return rules.length > 0 ? rules : null
}

export function getSubmitButtonText() {
  return "Submit application"
}

function stripZeroWidth(text) {
  return text.replace(/[\u200B-\u200D\uFEFF]/g, "").trim()
}

function normalizeSnapshotLabel(text) {
  return stripZeroWidth(text)
    .replace(/\*+/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function setSnapshotValue(snapshot, label, value) {
  const base = normalizeSnapshotLabel(label)
  if (!base) return
  let key = base
  let suffix = 2
  for (; Object.prototype.hasOwnProperty.call(snapshot, key); )
    key = `${base} (${suffix++})`
  snapshot[key] = stripZeroWidth(value)
}

function isElementVisible(el) {
  let current = el
  for (; current; ) {
    if (current.hasAttribute("hidden")) return false
    const style = window.getComputedStyle(current)
    if (style.display === "none" || style.visibility === "hidden")
      return false
    current = current.parentElement
  }
  return true
}

function readSelectDisplayValue(el) {
  if (el.tagName === "SELECT") {
    const select = el
    const selected = select.options[select.selectedIndex]
    return (selected?.textContent ?? selected?.value ?? "").trim()
  }
  for (const valueEl of el.querySelectorAll(
    ".MDFSelectBox__single-value, .single-value, [class*='SingleValue']",
  )) {
    const text = valueEl.textContent?.trim()
    if (text) return text
  }
  const textInput = el.querySelector('input[type="text"], input[readonly]')
  if (textInput?.value?.trim()) return textInput.value.trim()
  const ariaLabel = el.getAttribute("aria-label")?.trim()
  if (ariaLabel) return ariaLabel
  const text = el.textContent?.trim() ?? ""
  return text.length > 400 ? `${text.slice(0, 400)}\u2026` : text
}

function readDijitButtonText(table) {
  const contents = table.querySelector(
    ".dijitButtonContents, .dijitReset.dijitInline",
  )
  const text = (contents?.textContent ?? table.textContent ?? "").trim()
  return text.replace(/\s+/g, " ").slice(0, 320)
}

function readSdfRadioGroupValue(radioGroup) {
  for (const button of radioGroup.querySelectorAll("sdf-radio-button")) {
    const btn = button
    if (
      btn.hasAttribute("selected") ||
      btn.getAttribute("aria-checked") === "true"
    )
      return (
        btn.getAttribute("label") ||
        btn.getAttribute("value") ||
        btn.textContent?.trim() ||
        ""
      )
    const radio = button.querySelector('input[type="radio"]')
    if (radio?.checked)
      return (
        btn.getAttribute("label") ||
        btn.getAttribute("value") ||
        radio.value ||
        ""
      )
  }
  return ""
}

function getSectionLabelElement(section) {
  return (
    section.querySelector(".mdf-label") ||
    section.querySelector(".mdf-label label") ||
    section.querySelector("label")
  )
}

function getFieldSections(root) {
  return xpath.getOrderedNodesSafe(FIELD_SECTION_XPATH, root).filter((el) => {
    if (!(el instanceof HTMLElement)) return false
    const parentField = el.parentElement?.closest(
      ".mdf-validated-field, div.element",
    )
    if (parentField instanceof HTMLElement && parentField !== el) {
      const parentLabel = getSectionLabelElement(parentField)
      if (parentLabel) return false
    }
    return !!getSectionLabelElement(el)
  })
}

function getDijitSelectTable(section) {
  return section.querySelector(
    'table.dijitSelect, table[role="listbox"], table[aria-haspopup="true"]',
  )
}

function getMdfSelectInput(section, labelEl) {
  const inputId =
    labelEl.getAttribute("for") || labelEl.getAttribute("id")
  return xpath.getFirstOrderedNodeSafe(
    `.//*[@aria-labelledby="${inputId}"]
  | .//*[contains(@class, "vdl-dropdown-list__input-container")]
  | .//*[contains(@class, "MDFSelectBox__input-container")]//*[contains(@class, "MDFSelectBox__input")]`,
    section,
  )
}

function isSelectSection(section, labelEl) {
  return !!getDijitSelectTable(section) || !!getMdfSelectInput(section, labelEl)
}

function isTextCitySection(section) {
  const labelEl = getSectionLabelElement(section)
  return (
    !(!labelEl || isSelectSection(section, labelEl)) &&
    !!section.querySelector('input:not([readonly="readonly"]), textarea')
  )
}

function isCityLabeledSection(section) {
  const labelEl = getSectionLabelElement(section)
  return (
    !!labelEl &&
    /^city$/i.test(normalizeSnapshotLabel(getLabelText(labelEl)))
  )
}

function shouldSkipNonTextCity(section, ctx) {
  return (
    !!(ctx.hasTextCity && isCityLabeledSection(section)) &&
    !isTextCitySection(section)
  )
}

function snapshotSectionField(section, snapshot) {
  const labelEl = getSectionLabelElement(section)
  if (!labelEl) return

  const checkboxRadios = xpath.getOrderedNodesSafe(
    ".//input[@type='checkbox' or @type='radio']",
    section,
  )
  if (checkboxRadios.length > 0) {
    const groups = groupCheckboxRadioInputs(checkboxRadios)
    for (const group of groups) {
      const options = group.inputs.map(getInputLabelText).filter(Boolean)
      const label = resolveCheckboxRadioLabel(
        section,
        getLabelText(labelEl),
        options,
        group.inputs[0],
        labelEl,
      )
      if (!label) continue
      const checked = []
      for (const input of group.inputs) {
        if (!input.checked) continue
        const inputLabel = getInputLabelText(input)
        inputLabel && checked.push(inputLabel)
      }
      setSnapshotValue(
        snapshot,
        label,
        checked.length ? checked.join("; ") : "false",
      )
    }
    return
  }

  const label = getLabelText(labelEl)
  if (!label) return

  const mdfInput = getMdfSelectInput(section, labelEl)
  const table = section.querySelector("table")
  if (table && !mdfInput) {
    setSnapshotValue(snapshot, label, readDijitButtonText(table))
    return
  }
  if (mdfInput) {
    setSnapshotValue(
      snapshot,
      label,
      readSelectDisplayValue(
        mdfInput.closest(".mdf-validated-field") || mdfInput,
      ),
    )
    return
  }
  if (table) {
    setSnapshotValue(snapshot, label, readDijitButtonText(table))
    return
  }
  const textInput = section.querySelector(
    'input:not([readonly="readonly"]), textarea',
  )
  textInput && setSnapshotValue(snapshot, label, textInput.value ?? "")
}

function isInsideAnyContainer(el, containers) {
  return containers.some((container) => container.contains(el))
}

function snapshotEmploymentBlocks(containers) {
  const blocks = []
  for (const container of containers) {
    const block = {}
    const sections = getFieldSections(container)
    for (const section of sections)
      isElementVisible(section) && snapshotSectionField(section, block)
    Object.keys(block).length > 0 && blocks.push(block)
  }
  return blocks
}

function snapshotQuestionField(questionDiv, snapshot) {
  const labelEl = questionDiv.querySelector("label.qLabel")
  let label = labelEl ? getLabelText(labelEl) : ""

  const radioGroup = questionDiv.querySelector("sdf-radio-group")
  if (radioGroup) {
    const groupLabel = radioGroup.getAttribute("label") || ""
    !label && groupLabel && (label = groupLabel)
    label &&
      setSnapshotValue(snapshot, label, readSdfRadioGroupValue(radioGroup))
    return
  }

  const textarea = questionDiv.querySelector("textarea.qTextArea")
  if (textarea) {
    const fieldLabel = textarea.getAttribute("aria-label") || label
    fieldLabel && setSnapshotValue(snapshot, fieldLabel, textarea.value ?? "")
    return
  }

  const numberInput = questionDiv.querySelector(
    "input.question__number, input.additional-info-salary-textBox",
  )
  if (numberInput) {
    const fieldLabel =
      numberInput.getAttribute("aria-label") ||
      (numberInput.id === "desiredSalaryId"
        ? "What is your desired salary?"
        : label)
    fieldLabel &&
      setSnapshotValue(snapshot, fieldLabel, numberInput.value ?? "")
    return
  }

  const selectSimple = questionDiv.querySelector("sdf-select-simple")
  if (selectSimple) {
    const input = selectSimple.querySelector("input")
    const fieldLabel =
      input?.getAttribute("aria-label") ||
      selectSimple.getAttribute("aria-label") ||
      "Select currency type"
    setSnapshotValue(snapshot, fieldLabel, readSelectDisplayValue(selectSimple))
  }
}

function snapshotQuestionsContainer(snapshot) {
  const container = document.querySelector(
    ".quesitions-container, .questions-container",
  )
  if (!container) return
  const questionDivs = xpath.getOrderedNodesSafe(
    './/div[contains(@class, "qMainDiv")]',
    container,
  )
  for (const questionDiv of questionDivs)
    isElementVisible(questionDiv) &&
      snapshotQuestionField(questionDiv, snapshot)
}

function snapshotVsidContainer(snapshot) {
  const container = document.querySelector(
    ".vdl-accordian-panel.applicationvsid-main-container, .applicationvsid-main-container",
  )
  if (!container || !isElementVisible(container)) return

  const genderInput = container.querySelector(
    'input#vsidGender, input[aria-label="Gender"]',
  )
  if (genderInput) {
    let genderLabelEl = container.querySelector("label.vsid-title")
    ;(genderLabelEl && genderLabelEl.textContent?.includes("Gender")) ||
      (genderLabelEl =
        Array.from(container.querySelectorAll("label")).find((el) =>
          el.textContent?.trim().includes("Gender"),
        ) || null)
    const genderLabel =
      (genderLabelEl ? getLabelText(genderLabelEl) : "") ||
      genderInput.getAttribute("aria-label") ||
      "Gender"
    genderLabel &&
      setSnapshotValue(
        snapshot,
        genderLabel,
        readSelectDisplayValue(genderInput),
      )
  }

  const declineCheckbox = container.querySelector(
    'input[type="checkbox"][name="enthinicityAndRaceId"]',
  )
  if (declineCheckbox) {
    const declineLabelEl = container.querySelector(
      `label[for="${declineCheckbox.id}"]`,
    )
    const declineLabel =
      declineLabelEl?.textContent?.trim() || "Decline race/ethnicity"
    setSnapshotValue(
      snapshot,
      declineLabel,
      declineCheckbox.checked ? declineLabel : "false",
    )
  }

  const ethnicityInput = container.querySelector(
    'input#vsidEthinicity, input[aria-label="Ethnicity"]',
  )
  if (ethnicityInput) {
    const ethnicityLabels = Array.from(
      container.querySelectorAll("label.upperCaseTextLable, label"),
    )
    const ethnicityLabelEl = ethnicityLabels.find((el) =>
      el.textContent?.trim().includes("Ethnicity"),
    )
    const ethnicityLabel =
      (ethnicityLabelEl ? getLabelText(ethnicityLabelEl) : "") ||
      ethnicityInput.getAttribute("aria-label") ||
      "Ethnicity"
    setSnapshotValue(
      snapshot,
      ethnicityLabel,
      readSelectDisplayValue(ethnicityInput),
    )
  }

  const raceInput = container.querySelector(
    'input#vsidRace, input[aria-label="Race"]',
  )
  if (raceInput) {
    const raceLabelEl =
      container.querySelector("label#race_vsid_label") ||
      Array.from(container.querySelectorAll("label")).find((el) =>
        el.textContent?.trim().includes("Race"),
      )
    const raceLabel =
      (raceLabelEl ? getLabelText(raceLabelEl) : "") ||
      raceInput.getAttribute("aria-label") ||
      "Race"
    setSnapshotValue(snapshot, raceLabel, readSelectDisplayValue(raceInput))
  }

  const veteranHeading = Array.from(container.querySelectorAll("h4")).find(
    (el) => el.textContent?.includes("Protected Veteran Status"),
  )
  if (veteranHeading) {
    let sibling = veteranHeading.nextElementSibling
    let veteranRadioGroup = null
    for (; sibling && !veteranRadioGroup; )
      (veteranRadioGroup = sibling.querySelector("sdf-radio-group")) ||
        (sibling = sibling.nextElementSibling)
    if (
      veteranRadioGroup ||
      (veteranRadioGroup = container.querySelector("sdf-radio-group")),
      veteranRadioGroup
    ) {
      const veteranLabel =
        veteranRadioGroup.getAttribute("label") || "Protected Veteran Status"
      setSnapshotValue(
        snapshot,
        veteranLabel,
        readSdfRadioGroupValue(veteranRadioGroup),
      )
    }
  }

  const disabilityCheckbox = container.querySelector(
    'input[type="checkbox"][name="disabilityStatusCheck"]',
  )
  if (disabilityCheckbox) {
    const disabilityLabelEl = container.querySelector(
      `label[for="${disabilityCheckbox.id}"]`,
    )
    const disabilityLabel =
      disabilityLabelEl?.textContent?.trim() || "Disability Status"
    setSnapshotValue(
      snapshot,
      disabilityLabel,
      disabilityCheckbox.checked ? disabilityLabel : "false",
    )
  }
}

export function getFormSnapshot() {
  const snapshot = {}
  const employmentContainers = getEmploymentRepeatContainers()
  const employmentBlocks = snapshotEmploymentBlocks(employmentContainers)
  const sections = getFieldSections(document)
  const hasTextCity = sections.some(
    (section) => isCityLabeledSection(section) && isTextCitySection(section),
  )
  for (const section of sections)
    !(
      !isElementVisible(section) ||
      isInsideAnyContainer(section, employmentContainers)
    ) &&
      (shouldSkipNonTextCity(section, { hasTextCity }) ||
        snapshotSectionField(section, snapshot))
  return (
    snapshotQuestionsContainer(snapshot),
    snapshotVsidContainer(snapshot),
    {
      ...snapshot,
      ...(employmentBlocks.length > 0
        ? { employment: employmentBlocks }
        : {}),
    }
  )
}

function mergeFalconExtraData(existing, normalSnapshot) {
  const filteredNormal =
    autofillAnswerPair.filterAutofillAnswerPairNormalSnapshot(normalSnapshot)
  const existingNormal =
    existing?.normal &&
    typeof existing.normal == "object" &&
    !Array.isArray(existing.normal)
      ? autofillAnswerPair.filterAutofillAnswerPairNormalSnapshot(
          existing.normal,
        )
      : {}
  const mergedNormal = { ...filteredNormal, ...existingNormal }
  if (existing || Object.keys(mergedNormal).length !== 0)
    return {
      ...(existing || {}),
      ...(Object.keys(mergedNormal).length > 0
        ? { normal: mergedNormal }
        : {}),
    }
}

export function submitHandler(autofillSnapshot, falconData) {
  const submitSnapshot = getFormSnapshot()
  const {
    education: submitEducation,
    employment: submitEmployment,
    ...submitNormal
  } = submitSnapshot
  const {
    education: autofillEducation,
    employment: autofillEmployment,
    ...autofillNormal
  } = autofillSnapshot
  const falconExtra = mergeFalconExtraData(
    autofillAnswerPairTracking.buildFalconAutofillAnswerPairData(falconData),
    autofillNormal,
  )
  autofillAnswerPairTracking.sendAutofillAnswerPairEvent({
    formUrl: urlStore.useUrlStore.getState().currentTabUrl,
    autofillSnapshot: autofillNormal,
    submitSnapshot: submitNormal,
    additionalAutofillData: {
      education: autofillEducation,
      employment: autofillEmployment,
    },
    additionalSubmitData: {
      education: submitEducation,
      employment: submitEmployment,
    },
    ...(falconExtra ? { extraData: { falcon: falconExtra } } : {}),
    source: "adp-recruiting",
  })
}
