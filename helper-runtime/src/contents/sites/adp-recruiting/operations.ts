// @ts-nocheck
/**
 * ADP Recruiting DOM fill operations (selects, radios, resume, employment).
 */

import * as constants from "../../../constants.ts"
import * as answer from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as fieldLabel from "../../../utils/fieldLabel.js"
import * as stringUtils from "../../../utils/string.ts"

export async function preFillForm() {}

function getCurrentTextFieldValue(field) {
  if (field.type !== enums.FIELD_TYPE.TEXT) return ""
  let input = field.$input
  if (
    !input ||
    "string" != typeof input.value ||
    input.disabled ||
    input.readOnly
  ) {
    return ""
  }
  let inputType = input.getAttribute?.("type")?.toLowerCase() || ""
  return ["hidden", "file", "button", "submit", "reset"].includes(inputType)
    ? ""
    : input.value.trim()
}

export function syncFilledTextProgressFromCurrentValues(
  fields,
  progress,
  markFilled,
) {
  let filledSet = new Set(
    (progress.filledFields || []).map((label) =>
      fieldLabel.normalizeFieldLabel(label),
    ),
  )
  for (let field of fields) {
    let normalized = fieldLabel.normalizeFieldLabel(field.label)
    !(!normalized || filledSet.has(normalized)) &&
      getCurrentTextFieldValue(field) &&
      (markFilled(field.label), filledSet.add(normalized))
  }
}

export async function fillCustomSelectField(element, value, client) {
  let selectedValue = Array.isArray(value) ? value[0] : value
  let elementId = element.getAttribute("id") || ""
  let labelText = getFieldLabelFromElement(element)
  let ariaLabel = element.getAttribute("aria-label") || ""
  if (isCountryField(labelText, elementId, ariaLabel)) {
    let countryValue = normalizeRecruitingCountryValue(client.country)
    return (
      !!countryValue &&
      (element?.tagName === "TABLE"
        ? fillDojoSelect(element, countryValue)
        : fillSelectElement(element, countryValue))
    )
  }
  if (isStateOrProvinceField(labelText, elementId, ariaLabel)) {
    let stateValue = getRecruitingClientStateValue(client)
    return (
      !!stateValue &&
      (element?.tagName === "TABLE"
        ? fillDojoSelect(element, stateValue, { retryNoMatch: true })
        : fillSelectElement(element, stateValue))
    )
  }
  return element?.tagName === "TABLE"
    ? fillDojoSelect(element, selectedValue)
    : fillSelectElement(element, selectedValue)
}

export function normalizeRecruitingCountryValue(country) {
  let normalized = String(country ?? "").trim().toLowerCase()
  return normalized
    ? "canada" === normalized || "ca" === normalized
      ? "Canada"
      : "us" === normalized ||
          "usa" === normalized ||
          "united states" === normalized ||
          "united states of america" === normalized
        ? "United States"
        : ""
    : ""
}

export function getRecruitingClientStateValue(client) {
  let state = String(client.state ?? "").trim()
  return state ? resolveStateDisplayName(state) || state : ""
}

function resolveStateDisplayName(raw) {
  let trimmed = raw.trim()
  if (!trimmed) return ""
  let abbrevKey = trimmed.replace(/\./g, "").toUpperCase()
  if (constants.STATE_MAP[abbrevKey]) return constants.STATE_MAP[abbrevKey]
  let lower = trimmed.toLowerCase()
  return (
    Object.values(constants.STATE_MAP).find(
      (name) => name.toLowerCase() === lower,
    ) || ""
  )
}

function lettersOnlyLower(text) {
  return text.replace(/[^a-z]/gi, "").toLowerCase()
}

function isCountryField(label, id, ariaLabel) {
  let normalizedLabel = lettersOnlyLower(label)
  return normalizedLabel
    ? "country" === normalizedLabel
    : [id, ariaLabel].some((candidate) => "country" === lettersOnlyLower(candidate))
}

function isStateOrProvinceField(label, id, ariaLabel) {
  let stateKeys = [
    "state",
    "province",
    "stateprovince",
    "provincestate",
    "stateregion",
    "stateterritory",
    "stateprov",
    "stateprovinceterritory",
  ]
  let normalizedLabel = lettersOnlyLower(label)
  return normalizedLabel
    ? stateKeys.includes(normalizedLabel)
    : [id, ariaLabel].some((candidate) =>
        stateKeys.includes(lettersOnlyLower(candidate)),
      )
}

function getFieldLabelFromElement(element) {
  let validatedField = element.closest(".mdf-validated-field")
  let mdfLabel =
    validatedField?.querySelector(".mdf-label")?.textContent?.trim() || ""
  if (mdfLabel) return mdfLabel
  let elementDiv = element.closest("div.element")
  let labelText = elementDiv?.querySelector("label")?.textContent?.trim() || ""
  return labelText || ""
}

async function fillDojoSelect(trigger, value, options = {}) {
  if (!trigger || !String(value || "").trim()) return false
  let maxAttempts = options.retryNoMatch ? 3 : 1
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    trigger.focus()
    dom.triggerEvents(trigger, ["mousedown", "mouseup", "click"])
    await delay.delay(0 === attempt ? 250 : 350)
    let menuOptions = getDojoMenuOptions(trigger)
    0 === menuOptions.length &&
      (dom.triggerEvents(trigger, ["mousedown", "mouseup", "click"]),
      await delay.delay(300),
      (menuOptions = getDojoMenuOptions(trigger)))
    let result = await trySelectDojoOption(trigger, value, menuOptions)
    if (null !== result) return result
    attempt < maxAttempts - 1 &&
      (await blurSelect(trigger), await delay.delay(350))
  }
  return (
    console.warn("[adp-recruiting][dojo-select] no-match", {
      triggerId: trigger.getAttribute("id") || "",
      value: value,
    }),
    false
  )
}

async function trySelectDojoOption(trigger, value, menuOptions) {
  for (let option of menuOptions) {
    let optionText = option.textContent?.trim()
    if (!answer.isMatched(optionText, value)) continue
    let clickTargets = getDojoOptionClickTargets(option)
    for (let target of clickTargets)
      if (
        (dom.triggerEvents(target, ["mousedown", "mouseup", "click"]),
        target.click(),
        await delay.delay(200),
        isDojoSelectMatched(trigger, value, optionText))
      )
        return true
    if (forceStateHiddenInput(trigger, value, optionText)) return true
    return false
  }
  return null
}

function getDojoOptionClickTargets(option) {
  let targets = [
    option.closest("td.dijitMenuItemLabel"),
    option.closest("tr"),
    option,
  ].filter(Boolean)
  return targets.filter((target, index) => targets.indexOf(target) === index)
}

function isDojoSelectMatched(trigger, value, optionText = "") {
  let displayText = getDojoSelectDisplayText(trigger)
  return (
    !(!displayText || /please\s+specify|select/i.test(displayText)) &&
    (answer.isMatched(displayText, optionText) ||
      answer.isMatched(displayText, value) ||
      answer.isMatched(optionText, displayText))
  )
}

function getDojoSelectDisplayText(trigger) {
  let labelNode = Array.from(
    trigger.querySelectorAll(
      ".dijitSelectLabel, .dijitButtonText, [role='option']",
    ),
  ).find((node) => node.textContent?.trim())
  return (labelNode?.textContent || trigger.textContent || "").trim()
}

function forceStateHiddenInput(trigger, value, optionText = "") {
  let hiddenInput = trigger.querySelector('input[type="hidden"]')
  if (!hiddenInput) return false
  let fieldLabelText = getFieldLabelFromElement(trigger)
  let hiddenName = hiddenInput.getAttribute("name") || ""
  let hiddenId = hiddenInput.getAttribute("id") || ""
  let triggerId = trigger.getAttribute("id") || ""
  let isStateField = [fieldLabelText, hiddenName, hiddenId, triggerId].some(
    (candidate) => /state|province/i.test(candidate),
  )
  if (!isStateField) return false
  let stateFullName = resolveStateFullName(optionText || value)
  if (!stateFullName) return false
  let stateAbbrev = getStateAbbreviation(stateFullName)
  if (!stateAbbrev) return false
  hiddenInput.value = stateAbbrev
  hiddenInput.setAttribute("value", stateAbbrev)
  let nestedLabel = trigger.querySelector(".dijitSelectLabel .label")
  nestedLabel && (nestedLabel.textContent = stateFullName)
  let selectLabel = trigger.querySelector(".dijitSelectLabel")
  return (
    selectLabel && (selectLabel.textContent = stateFullName),
    dom.triggerEvents(hiddenInput, ["input", "change"]),
    dom.triggerEvents(trigger, ["change", "blur"]),
    isDojoSelectMatched(trigger, value, stateFullName)
  )
}

function resolveStateFullName(raw) {
  let trimmed = raw.trim()
  if (!trimmed) return ""
  let abbrevKey = trimmed.replace(/\./g, "").toUpperCase()
  if (constants.STATE_MAP[abbrevKey]) return constants.STATE_MAP[abbrevKey]
  let lower = trimmed.toLowerCase()
  return (
    Object.values(constants.STATE_MAP).find(
      (name) => name.toLowerCase() === lower,
    ) || ""
  )
}

function getStateAbbreviation(fullName) {
  return (
    Object.entries(constants.STATE_MAP).find(
      ([, name]) => name.toLowerCase() === fullName.trim().toLowerCase(),
    )?.[0] || ""
  )
}

async function fillSelectElement(element, value) {
  try {
    let sdfSelect = element.closest("sdf-select-simple")
    if (sdfSelect) return await fillSdfSelectSimple(sdfSelect, value)
    let options = await getSelectOptionsElement(element, false)
    if (!options)
      return (
        console.error(
          "No options found for select input:",
          element,
          "options: ",
          options,
        ),
        false
      )
    for (let option of options) {
      let optionText = option.textContent?.trim()
      if (answer.isMatched(optionText, value))
        return (
          option.dispatchEvent(
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
              view: window,
            }),
          ),
          option.click(),
          await delay.delay(200),
          true
        )
    }
    return false
  } finally {
    await blurSelect(element)
  }
}

async function fillSdfSelectSimple(sdfSelect, value) {
  try {
    let input = sdfSelect.querySelector("input")
    if (!input) return false
    input.focus()
    await delay.delay(100)
    input.click()
    await delay.delay(300)
    let ariaControls = input.getAttribute("aria-controls")
    let menu = null
    if (ariaControls && (menu = document.getElementById(ariaControls)), !menu) {
      let allMenus = Array.from(
        document.querySelectorAll("menu[role='menu'], ul[role='menu']"),
      )
      let visibleMenus = allMenus.filter(
        (node) =>
          null !== node.offsetParent && "none" !== node.style.display,
      )
      visibleMenus.length > 0 && (menu = visibleMenus[visibleMenus.length - 1])
    }
    if (!menu) return false
    let menuItems = menu.querySelectorAll(
      "li[role='menuitem'], li[role='option'], [role='menuitem'], [role='option']",
    )
    for (let item of menuItems) {
      let menuItem = item
      if (null === menuItem.offsetParent) continue
      let itemText = menuItem.textContent?.trim() || ""
      if (answer.isMatched(itemText, value))
        return (
          menuItem.focus(),
          await delay.delay(50),
          menuItem.click(),
          await delay.delay(200),
          true
        )
    }
    return false
  } catch (error) {
    return console.error("Error filling sdf-select-simple:", error), false
  }
}

function getResumeUploadContainer() {
  return (
    document
      .querySelector(".documentsContentRow .docBoxHeader span")
      ?.closest(".docBox") ||
    document.querySelector(
      "#resumeUploadContainer, .resume-upload-container",
    )
  )
}

export function hasResumeUploadInput() {
  return !!getResumeUploadContainer()?.querySelector('input[type="file"]')
}

export async function uploadResume(url, fileName, mimeType) {
  let container = getResumeUploadContainer()
  if (!container) throw Error("Could not find resume upload container")
  let fileInput = container.querySelector('input[type="file"]')
  if (!fileInput) throw Error("Could not find resume upload input")
  await dom.uploadFiles(
    fileInput,
    await answer.fetchPdfAsBlob(url),
    fileName,
    mimeType,
    "Resume/CV",
  )
}

export async function preclickAddButtons() {
  let clearProfile = xpath.getFirstOrderedNode(
    './/a[@aria-label="Clear Profile" and (not(@aria-disabled) or @aria-disabled != "true")]',
  )
  clearProfile && clearProfile.click()
  let addEducation = xpath.getFirstOrderedNode(
    ".//*[@data-ui='add-section' and @aria-label='Add Education']",
    xpath.getFirstOrderedNode("//*[@data-ui='education']"),
  )
  addEducation && (addEducation.click(), await delay.delay(100))
  let addExperience = xpath.getFirstOrderedNode(
    ".//*[@data-ui='add-section' and @aria-label='Add Experience']",
    xpath.getFirstOrderedNode("//*[@data-ui='experience']"),
  )
  addExperience && (addExperience.click(), await delay.delay(100))
}

export async function addSingleEmploymentSection() {
  let addButton = xpath.getFirstOrderedNode(
    './/div[@id="theAddRepeatButton"]',
  )
  return addButton
    ? (addButton.focus(),
      await delay.delay(100),
      addButton.click(),
      await delay.delay(500),
      true)
    : (console.warn("Add Employer button not found"), false)
}

export function getVisibleEmploymentCount() {
  let sections = xpath.getOrderedNodesSafe(
    './/div[starts-with(@id, "_eformrender_repeat_")]',
    document,
  )
  let visible = sections.filter((section) => {
    let style = window.getComputedStyle(section)
    return "none" !== style.display
  })
  return visible.length
}

export async function fillRadioGroupField(field, value) {
  let selectedValue = value?.[0]
  if (!selectedValue) return false
  let radioField = field
  if (radioField.$radios && radioField.$radios.length > 0) {
    let radios = Array.from(radioField.$radios)
    let matchedRadios = radios.filter((radio) =>
      radioOptionMatches(
        radio.closest("label")?.textContent?.trim() || "",
        radio.value || "",
        selectedValue,
        true,
      ),
    )
    for (let radio of matchedRadios.length ? matchedRadios : radios) {
      let labelText = radio.closest("label")?.textContent?.trim() || ""
      let radioValue = radio.value || ""
      let matched = radioOptionMatches(labelText, radioValue, selectedValue)
      if (!matched) continue
      if (!isRadioVisible(radio)) return false
      if (isRadioChecked(radio)) return true
      try {
        radio.focus()
      } catch (error) {}
      if (
        (await delay.delay(50),
        radio.click(),
        await delay.delay(100),
        isRadioChecked(radio))
      )
        return true
      let label = radio.closest("label")
      if (
        label &&
        (label.click(), await delay.delay(50), isRadioChecked(radio))
      )
        return true
      return false
    }
  }
  let radioParent = field.$radioParent || document
  let sdfRadios = Array.from(radioParent.querySelectorAll("sdf-radio-button"))
  let matchedSdfRadios = sdfRadios.filter((radio) =>
    radioOptionMatches(
      radio.getAttribute("label") || "",
      radio.getAttribute("value") || "",
      selectedValue,
      true,
    ),
  )
  for (let radio of matchedSdfRadios.length ? matchedSdfRadios : sdfRadios) {
    let labelText = radio.getAttribute("label") || ""
    let radioValue = radio.getAttribute("value") || ""
    let matched = radioOptionMatches(labelText, radioValue, selectedValue)
    if (matched) {
      if (!isRadioVisible(radio)) return false
      let alreadyChecked = "true" === radio.getAttribute("aria-checked")
      if (alreadyChecked) return true
      radio.focus()
      await delay.delay(50)
      radio.click()
      await delay.delay(100)
      let nativeRadio = radio.querySelector('input[type="radio"]')
      return (
        nativeRadio &&
          !nativeRadio.checked &&
          (nativeRadio.click(), await delay.delay(50)),
        "true" === radio.getAttribute("aria-checked") ||
          (!!nativeRadio && isRadioChecked(nativeRadio))
      )
    }
  }
  return false
}

function isRadioChecked(radio) {
  return radio.checked || "true" === radio.getAttribute("aria-checked")
}

function isRadioVisible(radio) {
  let label = radio.closest("label")
  let nodes = [label, radio].filter(Boolean)
  let rects = nodes
    .map((node) => node.getBoundingClientRect?.())
    .filter(Boolean)
  if (rects.length > 0 && rects.every((rect) => rect.width <= 0 || rect.height <= 0))
    return false
  let getComputedStyle = globalThis.window?.getComputedStyle
  return (
    !getComputedStyle ||
    nodes.every((node) => {
      let style = getComputedStyle(node)
      return "none" !== style.display && "hidden" !== style.visibility
    })
  )
}

function radioOptionMatches(label, value, target, strictOnly = false) {
  let normalizedLabel = normalizeRadioMatchText(label)
  let normalizedValue = normalizeRadioMatchText(value)
  let normalizedTarget = normalizeRadioMatchText(target)
  return (
    !!normalizedTarget &&
    (normalizedLabel === normalizedTarget ||
      normalizedValue === normalizedTarget ||
      answer.isMatched(label, target) ||
      answer.isMatched(value, target) ||
      (!strictOnly && tokenSubsetMatch(normalizedLabel, normalizedTarget)))
  )
}

function normalizeRadioMatchText(text) {
  return String(text || "")
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function tokenSubsetMatch(labelText, targetText) {
  let labelTokens = new Set(significantTokens(labelText))
  let targetTokens = significantTokens(targetText)
  return (
    !(targetTokens.length < 2) &&
    !(labelTokens.size < 2) &&
    targetTokens.every((token) => labelTokens.has(token))
  )
}

function significantTokens(text) {
  return text
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 1)
}

export function submitObserver(enabled) {
  if (enabled) {
    enabled.parentNode
    let observer = new MutationObserver((mutations) => {
      for (let mutation of mutations)
        for (let addedNode of mutation.addedNodes)
          (addedNode?.getAttribute?.("data-ui") === "successful-submit" ||
            addedNode?.querySelectorAll("[data-ui='successful-submit']")
              .length > 0) &&
            (observer.disconnect(),
            window.top?.postMessage(
              stringUtils.cleanObject({
                type: enums.MESSAGE_EVENTS.agentSubmitClicked,
              }),
              { targetOrigin: "*" },
            ))
    })
    observer.observe(document.getElementById("app"), {
      childList: true,
      subtree: true,
    })
  }
}

export async function getSelectOptionsElement(element, shouldBlur = true) {
  try {
    element.focus?.()
    element.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      }),
    )
    await delay.delay(300)
    let ariaExpanded = element.getAttribute("aria-expanded")
    "false" === ariaExpanded &&
      console.error("Dropdown is not open, unable to get options.", element)
    let ariaControls = element?.getAttribute("aria-controls")
    let options = ariaControls
      ? Array.from(
          document.querySelectorAll(
            `#${ariaControls} .MDFSelectBox__option, #${ariaControls} .vdl-list__option`,
          ),
        ).filter((option) => !!option.textContent?.trim())
      : []
    if (0 === options.length && (options = getDojoMenuOptions(element)), 0 === options.length)
      return null
    return options
  } finally {
    shouldBlur && (await blurSelect(element))
  }
}

function getDojoMenuOptions(trigger) {
  let triggerId = trigger.getAttribute("id") || ""
  let ariaOwns = trigger.getAttribute("aria-owns") || ""
  if (!triggerId && !ariaOwns) return []
  let selectors = [
    ariaOwns
      ? `#${ariaOwns} td.dijitMenuItemLabel .label, #${ariaOwns} td.dijitMenuItemLabel`
      : "",
    `table[aria-labelledby="${triggerId}"] td.dijitMenuItemLabel .label`,
    `table[aria-labelledby="${triggerId}"] td.dijitMenuItemLabel`,
    `#${triggerId}_menu td.dijitMenuItemLabel .label`,
    `#${triggerId}_menu td.dijitMenuItemLabel`,
    '.dijitPopup[style*="visibility: visible"] td.dijitMenuItemLabel .label',
    '.dijitPopup[style*="visibility: visible"] td.dijitMenuItemLabel',
  ]
  for (let selector of selectors) {
    if (!selector) continue
    let matches = Array.from(document.querySelectorAll(selector)).filter(
      (node) => {
        if (!node.textContent?.trim()) return false
        let popup = node.closest(".dijitPopup")
        if (!popup) return true
        let style = window.getComputedStyle(popup)
        return "none" !== style.display && "hidden" !== style.visibility
      },
    )
    if (matches.length > 0) return matches
  }
  return []
}

async function blurSelect(element) {
  let focusOutEvent =
    "function" == typeof FocusEvent
      ? new FocusEvent("focusout", {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      : new Event("focusout", { bubbles: true, cancelable: true })
  element.dispatchEvent(focusOutEvent)
  await delay.delay(100)
}
