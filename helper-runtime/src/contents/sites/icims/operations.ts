// @ts-nocheck
/**
 * iCIMS DOM fill operations (inputs, selects, dates, resume, sections).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as checkboxUtils from "../../crawler/utils/checkbox.js"
import * as inputUtils from "../../crawler/utils/input.js"
import * as selectUtils from "../../crawler/utils/select.js"
import * as answer from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as observer from "../../methods/observer.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as icimsAnswer from "./answer.ts"
import * as clientSearchWidget from "./client-search-widget.ts"
import * as rules from "./rules.js"
import * as utils from "./utils.js"

const COMMIT_TIMEOUT_MS = 500
const COMMIT_INTERVAL_MS = 25

export async function uploadResume(
  resumeInfo,
  updateFieldRequiredStatus,
  updateFilledProgress,
) {
  if (hasUploadedResume()) {
    let deleteButton = document.getElementById(
      "PortalProfileFields.Resume_Button",
    )
    if (deleteButton && deleteButton.offsetParent !== null) {
      deleteButton.click()
      await delay.delay(300)
    }
  }

  let fileInput = xpath.getFirstOrderedNode(
    '//input[@type="file" and @id="PortalProfileFields.Resume_File"]',
  )
  if (!fileInput) return false

  await dom.uploadFiles(
    fileInput,
    await answer.fetchPdfAsBlob(resumeInfo),
    updateFieldRequiredStatus,
    updateFilledProgress,
    "Resume/CV",
  )
  await observer.waitForCondition(
    () => {
      let deleteSpan = document.getElementById(
        "PortalProfileFields.Resume_DeleteButtonSpan",
      )
      return (
        deleteSpan !== null &&
        deleteSpan.offsetParent !== null &&
        !deleteSpan.classList.contains("iCIMS_NoDisplay")
      )
    },
    { timeout: 1e4, interval: 200 },
  )
  await delay.delay(500)
  return true
}

export function hasResumeSection() {
  let label = document.getElementById("label_PortalProfileFields.Resume_File")
  return label !== null && label.offsetParent !== null
}

export function hasUploadedResume() {
  let deleteSpan = document.getElementById(
    "PortalProfileFields.Resume_DeleteButtonSpan",
  )
  return (
    deleteSpan !== null &&
    deleteSpan.offsetParent !== null &&
    !deleteSpan.classList.contains("iCIMS_NoDisplay")
  )
}

export function hasUploadedResumeQueryFlag() {
  return (
    window.location.href.includes("uploadResume=1") ||
    window.location.href.includes("resumeSubmitted=1")
  )
}

export async function fillInputTextField(input, value) {
  if (input && value) {
    if (isAddressStreet1Input(input)) {
      await fillAddressStreet1WithManualEntry(input, value)
      return
    }
    await inputUtils.fillDefaultInputField(input, value)
  }
}

export async function clearInputField(input) {
  if (input) await inputUtils.fillDefaultInputField(input, "")
}

function normalizeChoiceKey(text) {
  return utils
    .normalizeIcimsWhitespace(text)
    .toLowerCase()
    .replace(/[\u2019']/g, "'")
}

function humanizeToken(text) {
  return utils
    .normalizeIcimsWhitespace(text)
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
}

function isTruthyChoice(value) {
  let key = normalizeChoiceKey(value)
  return (
    key === "true" ||
    key === "yes" ||
    key === "y" ||
    key === "1" ||
    key === "checked"
  )
}

function matchesChoice(answerValue, input, ruleLabel, kind) {
  let needle = normalizeChoiceKey(answerValue)
  if (!needle) return false

  let choiceText = rules.readChoiceText(input, kind)
  let candidates = [
    choiceText,
    input.value,
    humanizeToken(input.value),
    input.id,
    ruleLabel,
  ]

  if (kind === "radio") {
    return utils.isExactIcimsChoiceMatch(answerValue, candidates)
  }

  for (let candidate of candidates.map((item) => normalizeChoiceKey(item))) {
    if (candidate && choiceMatch.isExactChoiceMatch(candidate, needle)) {
      return true
    }
  }
  return false
}

function matchesOptionText(optionText, answerValue) {
  return utils.isExactIcimsChoiceMatch(answerValue, [optionText])
}

export async function fillCheckboxField(rule, values) {
  let checkboxes = (rule.$checkboxs ?? []).filter(
    (node) => node instanceof HTMLInputElement,
  )
  if (checkboxes.length === 0) return
  if (checkboxes.length > 1) return dom.fillCheckBoxesField(rule, values)

  let checkbox = checkboxes[0]
  let value = Array.isArray(values) ? values[0] : values
  if (!value) return

  let shouldCheck =
    isTruthyChoice(String(value)) ||
    matchesChoice(String(value), checkbox, rule.label, "checkbox")
  if (shouldCheck) await checkboxUtils.fillCheckbox(checkbox, true)
}

export async function fillSignatureCheckboxes() {
  let queryAll = (selectors) =>
    selectors.flatMap((selector) =>
      Array.from(document.querySelectorAll(selector)),
    )

  let signatureBoxes = Array.from(
    new Set(
      [
        document.getElementById("icims_f_signature"),
        ...queryAll([
          'form.iCIMS_FormMainStyle input[type="checkbox"]',
          'table.iCIMS_dependentGroupTable input[type="checkbox"]',
        ]),
      ].filter(Boolean),
    ),
  ).filter((node) => {
    let checkbox = node
    if (
      checkbox.offsetParent === null ||
      checkbox.disabled ||
      checkbox.checked
    ) {
      return false
    }
    let haystack = utils
      .normalizeIcimsWhitespace(
        [
          checkbox.id,
          checkbox.name,
          checkbox.getAttribute("aria-label"),
          rules.readChoiceText(checkbox, "checkbox"),
        ].join(" "),
      )
      .toLowerCase()
    return haystack.includes("signature")
  })

  for (let checkbox of signatureBoxes) {
    await checkboxUtils.fillCheckbox(checkbox, true)
  }

  let agreementBoxes = queryAll([
    '.iCIMS_TableRow input[type="checkbox"]',
    'table.iCIMS_dependentGroupTable input[type="checkbox"]',
  ]).filter((node) => {
    let checkbox = node
    if (
      checkbox.offsetParent === null ||
      checkbox.disabled ||
      checkbox.checked
    ) {
      return false
    }
    let label = utils
      .normalizeIcimsWhitespace(rules.readChoiceText(checkbox, "checkbox"))
      .replace(/\s*\*\s*/g, " ")
      .replace(/[\u2019']/g, "'")
      .trim()
    let lower = label.toLowerCase()
    return (
      icimsAnswer.ICIMS_AUTO_CHECK_CHECKBOX_LABELS.includes(label) ||
      icimsAnswer.ICIMS_AUTO_CHECK_CHECKBOX_SIGNAL_GROUPS.some((group) =>
        group.every((signal) => lower.includes(signal)),
      )
    )
  })

  for (let checkbox of agreementBoxes) {
    await checkboxUtils.fillCheckbox(checkbox, true)
  }

  let agreementSelects = Array.from(
    document.querySelectorAll(".iCIMS_TableRow select"),
  ).filter((node) => {
    let select = node
    if (select.offsetParent === null || select.disabled) return false

    let optionTexts = Array.from(select.options)
      .map((option) =>
        utils.normalizeIcimsWhitespace(option.text).toLowerCase(),
      )
      .filter(Boolean)
    let usable = optionTexts.filter(
      (text) =>
        text !== "\u2014 make a selection \u2014" &&
        text !== "- make a selection -",
    )
    let hasIAgree = usable.some((text) => text === "i agree.")
    if (!hasIAgree || usable.length !== 1) return false

    let row = select.closest(".iCIMS_TableRow")
    let rowText = utils
      .normalizeIcimsWhitespace(
        row?.querySelector(".iCIMS_InfoField")?.textContent ?? row?.textContent,
      )
      .replace(/\s*\*\s*/g, " ")
      .replace(/[\u2019']/g, "'")
      .toLowerCase()

    let matchesTitle =
      icimsAnswer.ICIMS_AUTO_ACCEPT_AGREEMENT_TITLES.some((title) =>
        rowText.startsWith(title),
      )
    return (
      !!matchesTitle &&
      icimsAnswer.ICIMS_AUTO_ACCEPT_AGREEMENT_SIGNAL_GROUPS.some((group) =>
        group.every((signal) => rowText.includes(signal)),
      )
    )
  })

  for (let select of agreementSelects) {
    fillOriginSelectField(select, "I agree.")
  }
}

export async function fillRadioGroupField(rule, values) {
  let answerValue = values?.[0]
  if (!answerValue) return false

  let parent = rule.$radioParent
  if (!parent) return false

  if (
    parent.getBoundingClientRect().top < 0 ||
    parent.getBoundingClientRect().bottom > window.innerHeight
  ) {
    parent.scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
  }

  let radios = Array.from(parent.querySelectorAll('input[type="radio"]'))
  let namedInput = rule.$input
  if (namedInput instanceof HTMLInputElement && namedInput.name) {
    radios = radios.filter((radio) => radio.name === namedInput.name)
  }

  let needle = String(answerValue)
  let match = null
  for (let [index, radio] of radios.entries()) {
    if (radio.disabled) continue
    let optionText = rule.options?.[index]
    if (
      matchesOptionText(optionText, needle) ||
      matchesChoice(needle, radio, rule.label, "radio")
    ) {
      match = radio
      break
    }
  }

  if (!match && radios.length === 1 && isTruthyChoice(needle)) {
    match = radios[0]
  }

  if (!match) return false
  if (!match.checked) {
    match.focus()
    match.click()
    await delay.delay(50)
    match.blur()
  }
  return (
    match.checked &&
    radios.every((radio) => radio === match || !radio.checked)
  )
}

function isAddressStreet1Input(element) {
  return (
    element.tagName?.toLowerCase() === "input" &&
    [element.id, element.name].some((value) =>
      value.includes("PersonProfileFields.AddressStreet1"),
    )
  )
}

function isAddressStreet1Select(element) {
  return (
    element.tagName?.toLowerCase() === "select" &&
    [element.id, element.name].some((value) =>
      value.includes("PersonProfileFields.AddressStreet1"),
    )
  )
}

async function clickEnterManuallyOption(controlId, openDropdown) {
  let optionId = `result-selectable_${controlId}_-2`
  openDropdown()
  for (let attempt = 0; attempt < 20; attempt++) {
    await delay.delay(200)
    let option = document.getElementById(optionId)
    let title = utils.normalizeIcimsWhitespace(
      option?.getAttribute("title") || option?.textContent,
    )
    if (option && /enter manually/i.test(title)) {
      utils.triggerEvents(option, ["focus", "mousedown", "mouseup", "click"])
      return true
    }
  }
  return false
}

async function fillManualAddressInput(controlId, value) {
  for (let attempt = 0; attempt < 20; attempt++) {
    await delay.delay(100)
    let input = document.getElementById(controlId)
    if (input?.tagName?.toLowerCase() === "input" && !input.disabled) {
      await inputUtils.fillDefaultInputField(input, value)
      let expected = utils.normalizeIcimsWhitespace(value).toLowerCase()
      let matchedSince = 0
      return observer.waitForCondition(
        () => {
          let current = document.getElementById(controlId)
          let matched =
            current?.tagName?.toLowerCase() === "input" &&
            utils.normalizeIcimsWhitespace(current.value).toLowerCase() ===
              expected
          if (matched) {
            if (matchedSince === 0) matchedSince = Date.now()
            return Date.now() - matchedSince >= 50
          }
          matchedSince = 0
          return false
        },
        { timeout: COMMIT_TIMEOUT_MS, interval: COMMIT_INTERVAL_MS },
      )
    }
  }
  return false
}

async function fillAddressStreet1WithManualEntry(input, value) {
  if (!input.id) {
    await inputUtils.fillDefaultInputField(input, value)
    return
  }

  let opened = await clickEnterManuallyOption(input.id, () => {
    input.focus()
    utils.triggerEvents(input, ["mousedown", "mouseup", "click"])
  })
  if (!opened) {
    await inputUtils.fillDefaultInputField(input, value)
    return
  }

  let filled = await fillManualAddressInput(input.id, value)
  if (!filled) await inputUtils.fillDefaultInputField(input, value)
}

async function fillAddressStreet1SelectWithManualEntry(select, value) {
  if (!select.id) return false
  let trigger =
    document.getElementById(`${select.id}_icimsDropdown`) ??
    select.nextElementSibling
  if (!trigger) return false

  let opened = await clickEnterManuallyOption(select.id, () => {
    select.focus()
    utils.triggerEvents(trigger, ["mousedown", "mouseup", "click"])
  })
  return !!opened && fillManualAddressInput(select.id, value)
}

export function resolveIcimsSchoolCompanionInput(select) {
  let row = select.closest(".iCIMS_TableRow[data-collection][data-index]")
  if (!row) return null

  let collection = row.getAttribute("data-collection")
  let index = row.getAttribute("data-index")
  if (!collection || !index) return null

  let siblingRows = document.querySelectorAll(
    `.iCIMS_TableRow[data-collection="${collection}"][data-index="${index}"]`,
  )
  let companions = new Set()

  for (let sibling of siblingRows) {
    if (!(sibling instanceof HTMLElement) || sibling === row) continue

    let infoField = sibling.querySelector(".iCIMS_InfoField")
    let infoText = utils
      .normalizeIcimsWhitespace(infoField?.textContent)
      .toLowerCase()
    let looksLikeOtherSchool =
      infoText.includes("other") &&
      (infoText.includes("school") || infoText.includes("institution"))

    for (let input of sibling.querySelectorAll('input[type="text"]')) {
      if (!input.isConnected || !utils.isVisibleIcimsElement(input)) continue
      let identity = `${input.name}${input.id}`.toLowerCase()
      if (identity.includes("otherschool") || looksLikeOtherSchool) {
        companions.add(input)
      }
    }
  }

  return companions.size === 1
    ? (companions.values().next().value ?? null)
    : null
}

const SEARCH_FALLBACKS = [
  {
    match: (label) => /school|university|college/i.test(label),
    fallbackValue: "Other",
    resolveCompanionInput: resolveIcimsSchoolCompanionInput,
  },
]

function findSearchFallback(label) {
  return SEARCH_FALLBACKS.find((item) => item.match(label))
}

export const getSearchDropdownOptionItems =
  clientSearchWidget.getIcimsSearchDropdownOptionItems

function selectHasIdentities(select, identities) {
  let needles = identities
    .map((identity) => utils.normalizeIcimsWhitespace(identity).toLowerCase())
    .filter(Boolean)
  if (needles.length === 0) return false

  let selectedOptions = Array.from(select.selectedOptions ?? [])
  if (selectedOptions.length === 0) {
    let fallback = select.options?.[select.selectedIndex]
    if (fallback) selectedOptions.push(fallback)
  }

  let fakeSelected = select.id
    ? document.getElementById(`${select.id}_fakeSelected_icimsDropdown`)
    : null
  let sibling = select.nextElementSibling
  let displayRoots = [fakeSelected, sibling].filter(Boolean)
  let selectedNodes = displayRoots.flatMap((root) =>
    Array.from(
      root.querySelectorAll(
        ':scope > [data-value], [data-selected-value], [aria-selected="true"][data-value]',
      ),
    ),
  )

  let haystack = [
    ...selectedOptions.flatMap((option) =>
      [option.text, option.title, option.value]
        .map((value) => utils.normalizeIcimsWhitespace(value).toLowerCase())
        .filter(Boolean),
    ),
    ...selectedNodes.flatMap(
      clientSearchWidget.getIcimsSearchSelectIdentities,
    ),
    ...displayRoots
      .map((root) =>
        utils.normalizeIcimsWhitespace(root.textContent).toLowerCase(),
      )
      .filter(Boolean),
  ]

  return needles.some((needle) => haystack.includes(needle))
}

function waitForSelectIdentities(select, identities) {
  return observer.waitForCondition(() => selectHasIdentities(select, identities), {
    timeout: COMMIT_TIMEOUT_MS,
    interval: COMMIT_INTERVAL_MS,
  })
}

async function searchAndPickOption(context, value) {
  await inputUtils.fillDefaultInputField(context.$input, value)
  await delay.delay(500)

  let attempts = 0
  let loadingAttempts = 0
  while (
    attempts < 15 &&
    !clientSearchWidget.hasIcimsSearchDropdownNoResults(context.$container)
  ) {
    let loading = clientSearchWidget.getIcimsSearchDropdownLoading(
      context.$container,
    )
    if (loading && !loading.classList.contains("hide")) {
      if (++loadingAttempts > 30) return null
      await delay.delay(100)
      attempts = 1
      continue
    }

    let match = selectUtils.findMatchOption(
      getSearchDropdownOptionItems(context.$container),
      value,
    )
    if (match) {
      let identities =
        clientSearchWidget.getIcimsSearchSelectIdentities(match)
      if (identities.length === 0) return null
      utils.triggerEvents(match, ["focus", "click"])
      return { identities }
    }

    await delay.delay(100)
    attempts += 1
  }
  return null
}

export async function fillSearchSelectField(select, values, ruleLabel) {
  if (!select) return false

  let answers = Array.isArray(values) ? values : [values]
  if (answers.length === 0 || !answers[0]) return false

  let primary = String(answers[0])
  if (isAddressStreet1Select(select) && (await fillAddressStreet1SelectWithManualEntry(select, primary))) {
    return answers.length === 1
  }

  let nativeFilled = await tryFillSelectCaseInsensitive(select, primary)
  if (nativeFilled && !selectHasIdentities(select, [primary])) return false
  if (nativeFilled && answers.length === 1) return true

  let opened = await clientSearchWidget.openIcimsSearchDropdown(select)
  if (opened.status === "unavailable") return false

  let context = opened.context
  let startIndex = nativeFilled ? 1 : 0
  let committedIdentities = nativeFilled ? [[primary]] : []

  for (let index = startIndex; index < answers.length; index++) {
    let answerValue = String(answers[index])
    let picked = await searchAndPickOption(context, answerValue)
    if (!picked) {
      if (index > 0 || answers.length > 1 || !ruleLabel) return false

      let fallback = findSearchFallback(ruleLabel)
      if (!fallback) return false

      let fallbackPick = await searchAndPickOption(
        context,
        fallback.fallbackValue,
      )
      if (
        !fallbackPick ||
        !(await waitForSelectIdentities(select, fallbackPick.identities))
      ) {
        return false
      }

      let companion = fallback.resolveCompanionInput(select)
      if (!companion) return false
      await inputUtils.fillDefaultInputField(companion, primary)
      return companion.value === primary
    }

    if (
      !(await waitForSelectIdentities(select, picked.identities)) ||
      (committedIdentities.push(picked.identities),
      !committedIdentities.every((identities) =>
        selectHasIdentities(select, identities),
      ))
    ) {
      return false
    }
  }

  return committedIdentities.every((identities) =>
    selectHasIdentities(select, identities),
  )
}

function selectOptionByText(
  select,
  value,
  { includeTitle = false, includeValue = false, caseInsensitive = false } = {},
) {
  let options = select.options
  if (!options) return false

  let needle = value.trim()
  for (let index = 0; index < options.length; index++) {
    let option = options[index]
    let candidates = [option.text?.trim()]
    if (includeTitle) candidates.push(option.title?.trim())
    if (includeValue) candidates.push(option.value?.trim())

    let matched = candidates.some(
      (candidate) =>
        !!candidate &&
        (caseInsensitive
          ? candidate.toLowerCase() === needle.toLowerCase()
          : candidate === needle),
    )
    if (matched) {
      option.selected = true
      select.dispatchEvent(new Event("change", { bubbles: true }))
      return true
    }
  }
  return false
}

export function fillOriginSelectField(select, value) {
  return selectOptionByText(select, value, {
    includeTitle: true,
    includeValue: true,
  })
}

export function autoSelectCertifyField() {
  let select = document.querySelector(
    'form.iCIMS_FormMainStyle select#icims_f_Certify[name="icims_f_Certify"]',
  )
  if (!select || select.disabled || !utils.isVisibleIcimsElement(select)) {
    return null
  }

  let label = utils
    .normalizeIcimsWhitespace(
      select.getAttribute("aria-label") || select.getAttribute("data-label"),
    )
    .toLowerCase()
  if (label !== "certify") return null

  let selectedText = utils.normalizeIcimsWhitespace(
    select.selectedOptions?.[0]?.text,
  )
  let alreadyFilled =
    !!select.value &&
    select.value !== "0" &&
    !/make a selection/i.test(selectedText)
  let filled = !!alreadyFilled || fillOriginSelectField(select, "Yes")

  return {
    label: "Certify",
    required:
      select.getAttribute("aria-required") === "true" ||
      select.getAttribute("i_required") === "true",
    options: ["Yes"],
    type: "select",
    filled,
  }
}

export function clearSelectField(select) {
  let options = select.options
  if (!options || options.length === 0) return

  if (select.getAttribute("icimsdropdown-enabled") === "1" && select.id) {
    let trigger = document.getElementById(`${select.id}_icimsDropdown`)
    let clearOption =
      document
        .getElementById(`${select.id}_dropdown-results`)
        ?.querySelector('li.dropdown-result[dropdown-index="-1"]') ?? null
    if (trigger && clearOption) {
      trigger.click()
      clearOption.click()
      return
    }
  }

  if (select.multiple) {
    Array.from(options).forEach((option) => {
      option.selected = false
    })
    select.dispatchEvent(
      new Event("change", { bubbles: true, cancelable: true }),
    )
    return
  }

  let placeholderIndex = Array.from(options).findIndex((option) => {
    let text = option.text?.trim() ?? ""
    return option.value === "0" || /make a selection/i.test(text)
  })
  let index = placeholderIndex >= 0 ? placeholderIndex : 0
  select.selectedIndex = index
  select.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: true }),
  )
}

async function tryFillSelectCaseInsensitive(select, value) {
  let focusEvent = new FocusEvent("focus", {
    bubbles: true,
    cancelable: true,
    view: window,
  })
  select.dispatchEvent(focusEvent)
  select.focus()
  let filled = selectOptionByText(select, String(value), {
    caseInsensitive: true,
  })
  if (filled) {
    select.blur()
    return true
  }
  select.blur()
  return false
}

export async function clearDateFieldValue(container) {
  if (!container) return
  let selects = xpath.getOrderedNodes(".//select", container)
  let input = xpath.getFirstOrderedNode(".//input", container)
  selects.forEach((select) => clearSelectField(select))
  if (input) await clearInputField(input)
}

export async function fillDateField(container, value) {
  if (!container || !value) return

  let slashNormalized = value.trim().replace(/[/.]/g, "-")
  let normalized = slashNormalized
  let monthNameMatch = value
    .trim()
    .replace(/,\s*/g, " ")
    .toLowerCase()
    .match(/^([a-z]+)(?:\s+(\d{1,2}))?\s+(\d{4})$/)

  if (monthNameMatch) {
    let month = utils.getMonthNumber(monthNameMatch[1])
    if (month) {
      normalized = `${monthNameMatch[3]}-${month}${
        monthNameMatch[2]
          ? `-${monthNameMatch[2].padStart(2, "0")}`
          : ""
      }`
    }
  } else {
    let monthYearMatch = slashNormalized.match(/^(\d{1,2})-(\d{4})$/)
    if (monthYearMatch) {
      normalized = `${monthYearMatch[2]}-${monthYearMatch[1].padStart(2, "0")}`
    }
  }

  let { year, month, day } = answer.parseDateParts(normalized)
  let yearValue = /^\d{4}$/.test(slashNormalized) ? slashNormalized : year
  let dayValue = !day && yearValue && month ? "1" : day
  if (!yearValue && !month && !dayValue) return

  let selects = xpath.getOrderedNodes(".//select", container)
  let input = xpath.getFirstOrderedNode(".//input", container)
  let [monthSelect, daySelect] = selects

  if (monthSelect && month) {
    fillOriginSelectField(monthSelect, month)
    await delay.delay(100)
  }
  if (daySelect && dayValue) {
    fillOriginSelectField(daySelect, dayValue)
    await delay.delay(100)
  }
  if (input && yearValue) await fillInputTextField(input, yearValue)
}

function getVisibleEducationSnapshots() {
  return rules
    .getEducationSectionSnapshots()
    .filter(utils.isVisibleIcimsElement)
}

function getVisibleEmploymentSnapshots() {
  return rules
    .getExperienceSectionSnapshots()
    .filter(utils.isVisibleIcimsElement)
}

function getButtonInContainer(container, buttonXpath) {
  return xpath.getFirstOrderedNode(buttonXpath, container)
}

function hasVisibleButton(container, buttonXpath) {
  let button = getButtonInContainer(container, buttonXpath)
  return !!button && button.offsetParent !== null
}

const EDUCATION_SECTION_OPS = {
  getContainer: rules.getEducationSectionContainer,
  getSnapshots: getVisibleEducationSnapshots,
  addButtonXpath: rules.EDUCATION_ADD_BUTTON_XPATH,
  removeButtonXpath: rules.EDUCATION_REMOVE_BUTTON_XPATH,
}

const EMPLOYMENT_SECTION_OPS = {
  getContainer: rules.getEmploymentSectionContainer,
  getSnapshots: getVisibleEmploymentSnapshots,
  addButtonXpath: rules.EMPLOYMENT_ADD_BUTTON_XPATH,
  removeButtonXpath: rules.EMPLOYMENT_REMOVE_BUTTON_XPATH,
}

async function addSectionRows(ops, targetCount) {
  if (targetCount <= 0) return
  let container = ops.getContainer()
  if (!container) return
  let missing = targetCount - ops.getSnapshots().length
  if (missing > 0) {
    await utils.clickAddItemButton(container, ops.addButtonXpath, missing)
  }
}

async function removeSectionRows(ops, targetCount) {
  if (targetCount < 0) return
  let container = ops.getContainer()
  if (!container) return

  let snapshots = ops.getSnapshots()
  while (snapshots.length > targetCount) {
    let removeButton = getButtonInContainer(container, ops.removeButtonXpath)
    if (!removeButton || removeButton.offsetParent === null) break

    let previousCount = snapshots.length
    removeButton.click()
    await observer.waitForCondition(
      () => ops.getSnapshots().length < previousCount,
      { timeout: 5e3, interval: 100 },
    )
    await delay.delay(300)
    snapshots = ops.getSnapshots()
  }
}

async function syncSections(ops, targetCount) {
  let container = ops.getContainer()
  if (!container) return 0

  let canSync =
    hasVisibleButton(container, ops.addButtonXpath) ||
    hasVisibleButton(container, ops.removeButtonXpath)

  if (canSync) {
    await removeSectionRows(ops, targetCount)
    await addSectionRows(ops, targetCount)
    await observer.waitForCondition(
      () => ops.getSnapshots().length === targetCount,
      { timeout: 3e3, interval: 100 },
    )
  }

  return ops.getSnapshots().length
}

export function getVisibleEducationSectionCount() {
  return getVisibleEducationSnapshots().length
}

export function getVisibleEmploymentSectionCount() {
  return getVisibleEmploymentSnapshots().length
}

export const syncEducationSections = (count) =>
  syncSections(EDUCATION_SECTION_OPS, count)
export const syncEmploymentSections = (count) =>
  syncSections(EMPLOYMENT_SECTION_OPS, count)

function normalizeCountryName(value) {
  let text = String(value ?? "").trim()
  if (!text) return "United States"
  let lower = text.toLowerCase()
  if (lower === "canada") return "Canada"
  if (
    lower === "us" ||
    lower === "usa" ||
    lower.includes("united states")
  ) {
    return "United States"
  }
  return text
}

function logCountryDebug(stage, payload) {
  console.info(`[IcimsCountryDebug] ${stage} ${JSON.stringify(payload)}`)
}

export function getSelectedIcimsCountryText(select) {
  let control =
    select ?? xpath.getFirstOrderedNode('//select[@data-label="Country"]')
  if (!control) return ""
  return (
    utils.normalizeIcimsWhitespace(
      document.getElementById(`${control.id}_fakeSelected_icimsDropdown`)
        ?.textContent,
    ) ||
    utils.normalizeIcimsWhitespace(control.selectedOptions?.[0]?.text)
  )
}

function isSearchableIcimsDropdown(select) {
  return (
    select.getAttribute("icimsdropdown-enabled") === "1" &&
    select.getAttribute("icimsdropdown-search") === "1"
  )
}

function findExactDropdownResult(listbox, value) {
  if (!listbox) return null
  return (
    Array.from(listbox.querySelectorAll("li.dropdown-result")).find(
      (item) => {
        let text = utils.normalizeIcimsWhitespace(
          item.getAttribute("title") || item.textContent,
        )
        return text.toLowerCase() === value.toLowerCase()
      },
    ) ?? null
  )
}

function countrySelectionMatches(select, value) {
  let visible = getSelectedIcimsCountryText(select)
  let native = utils.normalizeIcimsWhitespace(
    select.selectedOptions?.[0]?.text,
  )
  return [visible, native].some(
    (text) => text.toLowerCase() === value.toLowerCase(),
  )
}

async function fillCountryViaSearch(select, value) {
  if (!isSearchableIcimsDropdown(select)) return false
  await fillSearchSelectField(select, value, "Country")
  await delay.delay(100)
  return countrySelectionMatches(select, value)
}

export async function fillCountry(country, preferredSelect) {
  let select =
    preferredSelect ??
    xpath.getFirstOrderedNode('//select[@data-label="Country"]')
  if (!select || !select.id) {
    logCountryDebug("control-missing", {
      preferredControlProvided: !!preferredSelect,
    })
    return false
  }

  let normalized = normalizeCountryName(country)
  let trigger = document.getElementById(`${select.id}_icimsDropdown`)
  let listbox = document.getElementById(`${select.id}_dropdown-results`)
  let renderedOptionCount =
    listbox?.querySelectorAll("li.dropdown-result").length ?? 0
  let searchable = isSearchableIcimsDropdown(select)

  logCountryDebug("attempt", {
    countryProvided: !!String(country ?? "").trim(),
    normalizedToDefault: !String(country ?? "").trim(),
    hasDropdownTrigger: !!trigger,
    searchable,
    nativeOptionCount: select.options.length,
    renderedOptionCount,
  })

  if (!trigger) {
    let filled = fillOriginSelectField(select, normalized)
    logCountryDebug("native-result", { filled })
    return filled
  }

  if (searchable) {
    let filled = await fillCountryViaSearch(select, normalized)
    logCountryDebug("search-result", {
      filled,
      renderedOptionCount:
        document
          .getElementById(`${select.id}_dropdown-results`)
          ?.querySelectorAll("li.dropdown-result").length ?? 0,
    })
    if (filled) return true
  }

  let exactBeforeOpen = findExactDropdownResult(listbox, normalized)
  if (!searchable && renderedOptionCount > 0 && !exactBeforeOpen) {
    logCountryDebug("exact-option-missing", { renderedOptionCount })
    return false
  }

  utils.triggerEvents(trigger, ["mousedown", "mouseup", "click"])
  await delay.delay(50)

  let openListbox = document.getElementById(`${select.id}_dropdown-results`)
  if (!openListbox) {
    logCountryDebug("listbox-missing", {})
    return false
  }

  let exactOption = findExactDropdownResult(openListbox, normalized)
  if (!exactOption) {
    logCountryDebug("exact-option-missing", {
      renderedOptionCount: openListbox.querySelectorAll(
        "li.dropdown-result",
      ).length,
    })
    return false
  }

  utils.triggerEvents(exactOption, ["focus", "click"])
  await delay.delay(100)
  let filled = countrySelectionMatches(select, normalized)
  logCountryDebug("visible-option-result", { filled })
  return filled
}
