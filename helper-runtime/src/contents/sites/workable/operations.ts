// @ts-nocheck
/**
 * Workable DOM fill operations — React inputs, checkbox main-world inject, sections.
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as dayjs from "dayjs"
import * as messaging from "@plasmohq/messaging"
import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as rules from "./rules.ts"
import * as phoneCountryCode from "./phone-country-code.ts"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as stringUtils from "../../../utils/string.ts"

const dayjsDefault = { default: dayjs }

const CHECKBOX_REQUEST_EVENT = "__jr_workable_checkbox_request"
const CHECKBOX_RESPONSE_EVENT = "__jr_workable_checkbox_response"
const INJECT_TIMEOUT_MS = 1e3
const CHECKBOX_RESPONSE_TIMEOUT_MS = 1500
const SELECTED_COUNTRY_POLL_MS = 750
const SELECTED_COUNTRY_POLL_STEP_MS = 50

let checkboxInjectSucceeded = false
let checkboxInjectFailed = false

async function fillWorkablePhoneCountryCode(rule, value) {
  const container = phoneCountryCode.getWorkablePhoneCountryContainer(rule.$input)
  if (!container || !value) return false

  const optionNodes = Array.from(
    container.querySelectorAll(
      "li.iti__country[role='option'][data-country-code][data-dial-code], li.iti__country[data-country-code][data-dial-code]",
    ),
  )
  const parsed = optionNodes.map(phoneCountryCode.parseWorkablePhoneCountryOption)
  const matched = phoneCountryCode.findWorkablePhoneCountryOption(value, parsed)
  if (!matched) return false

  const label = phoneCountryCode.formatWorkablePhoneCountryOption(matched)
  if (phoneCountryCode.readWorkableSelectedPhoneCountry(container) === label) {
    return true
  }

  const optionNode = optionNodes[parsed.indexOf(matched)]
  const selectedFlag = container.querySelector(
    "button.iti__selected-country, .iti__selected-flag[role='combobox']",
  )
  if (!optionNode || !selectedFlag) return false

  const dispatchMouse = (element) => {
    for (const type of ["mousedown", "mouseup", "click"]) {
      element.dispatchEvent(
        new MouseEvent(type, {
          bubbles: true,
          cancelable: true,
          view: window,
        }),
      )
    }
  }

  selectedFlag.focus()
  dispatchMouse(selectedFlag)
  await delay.delay(200)
  optionNode.scrollIntoView({ block: "center" })
  await delay.delay(100)
  dispatchMouse(optionNode)

  const steps = Math.ceil(SELECTED_COUNTRY_POLL_MS / SELECTED_COUNTRY_POLL_STEP_MS)
  for (let step = 0; step <= steps; step++) {
    if (phoneCountryCode.readWorkableSelectedPhoneCountry(container) === label) {
      return true
    }
    if (step < steps) await delay.delay(SELECTED_COUNTRY_POLL_STEP_MS)
  }
  return false
}

function getSectionAddButton(sectionUi) {
  const section = xpath.getFirstOrderedNode(`//*[@data-ui='${sectionUi}']`)
  return section ? section.querySelector('[data-ui="add-section"]') : null
}

function resetWorkableCheckboxMainWorldInjectionForTests() {
  checkboxInjectSucceeded = false
  checkboxInjectFailed = false
}

async function preFillForm() {
  if (document.querySelector('[data-ui="cookie-consent-accept"]')) {
    document.querySelector('[data-ui="cookie-consent-accept"]')?.click()
    await delay.delay(50)
  }
  if (document.querySelector('[data-ui="application-form-tab"]')) {
    for (
      document.querySelector('[data-ui="application-form-tab"]')?.click();
      !document.querySelector('[data-ui="application-form"]');

    ) {
      await delay.delay(100)
    }
  }
}

async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const input =
    xpath.getFirstOrderedNode('//input[@type="file" and @data-ui="resume"]') ||
    document.querySelector('input[type="file"][data-ui="resume"]')
  if (input) {
    await dom.uploadFiles(
      input,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      updateRequired,
      updateFilled,
      "Resume/CV",
    )
  }
}

function cleanSalaryValue(raw) {
  if (null == raw || "" === raw) return null
  let text = String(raw).trim()
  if ("" === text) return null
  text = (text = text.replace(/[$,\s]/g, "")).replace(/\b(USD|usd|dollars?)\b/gi, "")

  const rangeDash = text.match(/(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)/)
  if (rangeDash) {
    const left = parseFloat(rangeDash[1])
    const right = parseFloat(rangeDash[2])
    if (!isNaN(left) && !isNaN(right)) return String(Math.max(left, right))
  }

  const bracket = text.match(/\[([\d\s,.-]+)\]/)
  if (bracket) {
    const inner = bracket[1]
    const nums = inner.match(/(\d+(?:\.\d+)?)/g)
    if (nums && nums.length >= 2) {
      const parsed = nums.map((n) => parseFloat(n)).filter((n) => !isNaN(n))
      if (parsed.length >= 2) return String(Math.max(...parsed))
    } else if (nums && 1 === nums.length) {
      return nums[0]
    }
  }

  const rangeTilde = text.match(/(\d+(?:\.\d+)?)\s*~\s*(\d+(?:\.\d+)?)/)
  if (rangeTilde) {
    const left = parseFloat(rangeTilde[1])
    const right = parseFloat(rangeTilde[2])
    if (!isNaN(left) && !isNaN(right)) return String(Math.max(left, right))
  }

  const rangeTo = text.match(/(\d+(?:\.\d+)?)\s+to\s+(\d+(?:\.\d+)?)/i)
  if (rangeTo) {
    const left = parseFloat(rangeTo[1])
    const right = parseFloat(rangeTo[2])
    if (!isNaN(left) && !isNaN(right)) return String(Math.max(left, right))
  }

  const multi = text.match(/(\d+(?:\.\d+)?)(?:\s*[,\s]\s*(\d+(?:\.\d+)?))+/)
  if (multi) {
    const nums = text.match(/(\d+(?:\.\d+)?)/g)
    if (nums && nums.length >= 2) {
      const parsed = nums.map((n) => parseFloat(n)).filter((n) => !isNaN(n))
      if (parsed.length >= 2) return String(Math.max(...parsed))
    }
  }

  const single = text.match(/(\d+(?:\.\d+)?)/)
  if (single) {
    const value = parseFloat(single[1])
    if (!isNaN(value)) return String(Math.floor(value))
  }

  return null
}

function fillCountry() {
  const input = xpath.getFirstOrderedNode(
    "//strong[contains(text(), 'Country')]/ancestor::div[1]/div[1]//div//input",
  )
  if (input) {
    input.click()
    const option = xpath.getFirstOrderedNode(
      "//strong[contains(text(), 'Country')]/ancestor::div[1]/div[1]//dialog//ul//span[contains(text(), 'United States')]",
    )
    if (option) option.click()
    else setReactInputValue(input, "United States")
  }
}

function setReactInputValue(input, value) {
  const previous = input.value
  input.value = value
  const event = new InputEvent("input", { bubbles: true })
  const tracker = input?._valueTracker
  if (tracker) tracker.setValue(previous)
  input.dispatchEvent(event)
}

async function preclickAddButtons() {
  const clearProfile = xpath.getFirstOrderedNode(
    './/a[@aria-label="Clear Profile" and (not(@aria-disabled) or @aria-disabled != "true")]',
  )
  if (clearProfile) clearProfile.click()

  const educationAdd = getSectionAddButton("education")
  if (educationAdd) {
    educationAdd.click()
    await delay.delay(100)
  }

  const experienceAdd = getSectionAddButton("experience")
  if (experienceAdd) {
    experienceAdd.click()
    await delay.delay(100)
  }
}

async function typeReactValue(input, value) {
  input.focus()
  setReactInputValue(input, "")
  await delay.delay(30)

  const descriptor = Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(input),
    "value",
  )
  const setter = descriptor?.set

  for (const { char, valueSoFar } of rules.getTypingSteps(value)) {
    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: char,
        bubbles: true,
        cancelable: true,
      }),
    )
    input.dispatchEvent(
      new InputEvent("beforeinput", {
        data: char,
        inputType: "insertText",
        bubbles: true,
        cancelable: true,
      }),
    )
    if (setter) setter.call(input, valueSoFar)
    else input.value = valueSoFar

    const tracker = input._valueTracker
    if (tracker) tracker.setValue(valueSoFar.slice(0, -1))

    input.dispatchEvent(
      new InputEvent("input", {
        data: char,
        inputType: "insertText",
        bubbles: true,
      }),
    )
    input.dispatchEvent(
      new KeyboardEvent("keyup", {
        key: char,
        bubbles: true,
        cancelable: true,
      }),
    )
    await delay.delay(30)
  }

  input.dispatchEvent(
    new Event("change", {
      bubbles: true,
      cancelable: true,
    }),
  )
}

async function fillReactInputField(input, value, label, phoneCountryCodeAnswer) {
  if (!input) return
  const fieldLabel = label || ""
  let fillValue = value
  let typeAsSalary = false

  if (rules.isWorkablePhoneInput(input)) {
    fillValue = phoneCountryCode.formatWorkablePhoneValue(
      value,
      phoneCountryCodeAnswer,
    )
  } else if (
    rules.getWorkableSalaryFieldType(fieldLabel) === enums.FIELD_TYPE.NUMBER
  ) {
    const cleaned = cleanSalaryValue(value)
    if (null === cleaned) return
    fillValue = cleaned
    typeAsSalary = true
  }

  dispatchBackspace(input)
  await delay.delay(100)
  if (typeAsSalary) await typeReactValue(input, fillValue)
  else setReactInputValue(input, fillValue)

  if (
    xpath
      .getFirstOrderedNodeSafe('//*[@data-ui="education"]')
      ?.contains(input) &&
    (input.attributes.getNamedItem("name")?.value === "end_date" ||
      input.attributes.getNamedItem("name")?.value === "start_date")
  ) {
    await delay.delay(300)
  }
  if (
    xpath
      .getFirstOrderedNodeSafe('//*[@data-ui="experience"]')
      ?.contains(input) &&
    (input.attributes.getNamedItem("name")?.value === "end_date" ||
      input.attributes.getNamedItem("name")?.value === "start_date")
  ) {
    await delay.delay(300)
  }

  document.dispatchEvent(
    new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
}

function normalizeChoiceText(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/\*/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function isTruthyChoice(value) {
  return ["true", "yes", "y", "1", "checked", "accept", "accepted"].includes(
    normalizeChoiceText(value),
  )
}

function isWorkableAgreementCheckbox(rule) {
  const text = [rule.label, ...(rule.options || [])]
    .map(normalizeChoiceText)
    .join(" ")
  return [
    "agree",
    "agreement",
    "accept",
    "acknowledge",
    "authorize",
    "certify",
    "consent",
    "privacy",
    "terms",
    "notice",
    "read understand",
  ].some((token) => text.includes(token))
}

function shouldCheckWorkableCheckbox(rule, answers) {
  if (isWorkableAgreementCheckbox(rule) || answers.some(isTruthyChoice)) {
    return true
  }
  const labels = [rule.label, ...(rule.options || [])]
    .map(normalizeChoiceText)
    .filter(Boolean)
  return answers
    .map(normalizeChoiceText)
    .filter(Boolean)
    .some((answer) =>
      labels.some((label) => choiceMatch.isExactChoiceMatch(label, answer)),
    )
}

function readAriaChecked(element) {
  if (!element) return null
  for (const attr of ["aria-checked", "data-checked"]) {
    const value = element.getAttribute(attr)
    if ("true" === value) return true
    if ("false" === value) return false
  }
  return null
}

function findLabelForInput(input) {
  if (!input.id || "undefined" == typeof document) return null
  const escaped = input.id.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
  try {
    return document.querySelector(`label[for="${escaped}"]`)
  } catch {
    return null
  }
}

function isInputChecked(input) {
  return true === input.checked
}

function readOptionCheckedState(input) {
  return readAriaChecked(input.closest("[role='radio'], [data-ui='option']"))
}

function isRadiogroupCheckboxRule(rule, checkboxes) {
  return (
    checkboxes.length > 1 && rule.$label?.getAttribute("role") === "radiogroup"
  )
}

function findMatchingOptionIndex(rule, answers) {
  const normalizedAnswers = answers.map(normalizeChoiceText)
  return (rule.options || []).findIndex((option) => {
    const optionText = normalizeChoiceText(option)
    return normalizedAnswers.some(
      (answer) =>
        optionText === answer ||
        ("true" === answer && "yes" === optionText) ||
        ("false" === answer && "no" === optionText),
    )
  })
}

async function fillRadiogroupAsCheckbox(rule, answers, checkboxes) {
  const index = findMatchingOptionIndex(rule, answers)
  const target = checkboxes[index]
  if (!target) return false
  await ensureCheckboxChecked(target, rule)
  const aria = readOptionCheckedState(target)
  return (
    !!target.checked &&
    false !== aria &&
    checkboxes.every((checkbox, checkboxIndex) => {
      if (checkboxIndex === index) return true
      const otherAria = readOptionCheckedState(checkbox)
      return !checkbox.checked && true !== otherAria
    })
  )
}

function pushUnique(list, item) {
  if (item && !list.includes(item)) list.push(item)
}

function getElementSearchText(element) {
  return element
    ? normalizeChoiceText(element.innerText || element.textContent || "")
    : ""
}

function getCheckboxSearchTokens(rule) {
  const tokens = [rule.label, ...(rule.options || [])]
    .map(normalizeChoiceText)
    .filter((token) => token && "*" !== token && token.length >= 4)
  if (isWorkableAgreementCheckbox(rule)) {
    tokens.push(
      "privacy notice",
      "consent to the processing",
      "processing of my data",
      "part of this application",
    )
  }
  return Array.from(new Set(tokens))
}

function elementMatchesTokens(element, tokens) {
  const text = getElementSearchText(element)
  return (
    !!text &&
    tokens.some((token) =>
      token.length < 8
        ? text === token
        : text.includes(token) || (token.includes(text) && text.length >= 16),
    )
  )
}

function findCheckboxRelatedElements(rule) {
  if ("undefined" == typeof document) return []
  const tokens = getCheckboxSearchTokens(rule)
  return tokens.length && "function" == typeof document.querySelectorAll
    ? Array.from(
        document.querySelectorAll(
          "label, [role='checkbox'], [data-ui='option'], button, span, div",
        ),
      )
        .filter((element) => elementMatchesTokens(element, tokens))
        .sort(
          (a, b) => getElementSearchText(a).length - getElementSearchText(b).length,
        )
    : []
}

function collectCheckboxClickTargets(input, rule) {
  const targets = []
  const option = input.closest("[data-ui='option']")
  pushUnique(targets, input.closest("label"))
  pushUnique(targets, findLabelForInput(input))
  pushUnique(targets, input.closest("[role='checkbox']"))
  pushUnique(targets, option)
  pushUnique(targets, rule.$label)
  for (const related of findCheckboxRelatedElements(rule)) {
    pushUnique(targets, related)
  }
  pushUnique(targets, input)
  return targets
}

function createMouseishEvent(type) {
  return "function" == typeof MouseEvent
    ? new MouseEvent(type, {
        bubbles: true,
        cancelable: true,
        view: "undefined" != typeof window ? window : void 0,
      })
    : new Event(type, {
        bubbles: true,
        cancelable: true,
      })
}

function dispatchInputChange(input) {
  input.dispatchEvent(
    new Event("input", {
      bubbles: true,
      cancelable: true,
    }),
  )
  input.dispatchEvent(
    new Event("change", {
      bubbles: true,
      cancelable: true,
    }),
  )
}

async function ensureCheckboxInjected() {
  if (checkboxInjectSucceeded) return true
  if (checkboxInjectFailed) return false
  try {
    const response = await new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(Error("injectWorkableCheckbox timed out"))
      }, INJECT_TIMEOUT_MS)
      Promise.resolve(
        messaging.sendToBackground({
          name: "injectWorkableCheckbox",
        }),
      ).then(
        (result) => {
          clearTimeout(timer)
          resolve(result ?? {})
        },
        (error) => {
          clearTimeout(timer)
          reject(error)
        },
      )
    })
    if (response?.success !== true) {
      throw Error("injectWorkableCheckbox did not return success=true")
    }
    checkboxInjectSucceeded = true
    return true
  } catch (error) {
    checkboxInjectFailed = true
    console.warn(
      "[WorkableCheckbox] failed to inject main world script:",
      error,
    )
    return false
  }
}

async function requestMainWorldCheckboxCheck(input, rule) {
  if (
    "undefined" == typeof document ||
    "function" != typeof document.addEventListener ||
    "function" != typeof document.dispatchEvent
  ) {
    return false
  }
  const injected = await ensureCheckboxInjected()
  if (!injected) return false

  const requestId = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
  const marker = `__jr_workable_checkbox_${requestId}`
  input.setAttribute("data-jr-workable-checkbox-id", marker)
  const selector = `[data-jr-workable-checkbox-id="${marker}"]`

  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      document.removeEventListener(CHECKBOX_RESPONSE_EVENT, onResponse)
      resolve(false)
    }, CHECKBOX_RESPONSE_TIMEOUT_MS)

    function onResponse(event) {
      const detail = event.detail
      if (detail?.requestId === requestId) {
        document.removeEventListener(CHECKBOX_RESPONSE_EVENT, onResponse)
        clearTimeout(timer)
        resolve(detail?.success === true && isInputChecked(input))
      }
    }

    document.addEventListener(CHECKBOX_RESPONSE_EVENT, onResponse)
    document.dispatchEvent(
      new CustomEvent(CHECKBOX_REQUEST_EVENT, {
        detail: {
          requestId,
          selector,
          label: rule.label,
          options: rule.options || [],
        },
      }),
    )
  })
}

async function clickCheckboxFallback(input, rule) {
  for (const target of collectCheckboxClickTargets(input, rule)) {
    target.scrollIntoView?.({
      block: "center",
      inline: "nearest",
    })
    target.focus?.()
    target.dispatchEvent(createMouseishEvent("mousedown"))
    target.dispatchEvent(createMouseishEvent("mouseup"))
    if ("function" == typeof target.click) target.click()
    else target.dispatchEvent(createMouseishEvent("click"))
    dispatchInputChange(input)
    await delay.delay(120)
    if (isInputChecked(input)) return true
  }
  return isInputChecked(input)
}

async function ensureCheckboxChecked(input, rule) {
  if (isInputChecked(input) || (await requestMainWorldCheckboxCheck(input, rule))) {
    return true
  }
  for (const target of collectCheckboxClickTargets(input, rule)) {
    target.scrollIntoView?.({
      block: "center",
      inline: "nearest",
    })
    target.focus?.()
    target.dispatchEvent(createMouseishEvent("mousedown"))
    target.dispatchEvent(createMouseishEvent("mouseup"))
    if ("function" == typeof target.click) target.click()
    else target.dispatchEvent(createMouseishEvent("click"))
    dispatchInputChange(input)
    await delay.delay(50)
    if (isInputChecked(input) && (await delay.delay(150), isInputChecked(input))) {
      return true
    }
  }
  return await clickCheckboxFallback(input, rule)
}

async function fillWorkableCheckboxField(rule, value) {
  const answers = Array.isArray(value) ? value : [value]
  const checkboxes = Array.from(rule.$checkboxs || [])
  if (!checkboxes.length) return false

  const singleCheckbox =
    1 === checkboxes.length && checkboxes[0]?.type === "checkbox"
  if (singleCheckbox) {
    const input = checkboxes[0]
    return shouldCheckWorkableCheckbox(rule, answers)
      ? await ensureCheckboxChecked(input, rule)
      : !isInputChecked(input)
  }

  if (isRadiogroupCheckboxRule(rule, checkboxes)) {
    return await fillRadiogroupAsCheckbox(rule, answers, checkboxes)
  }

  const filled = await dom.fillCheckBoxesField(rule, answers)
  return (
    false !== filled &&
    (await delay.delay(50), checkboxes.some((input) => isInputChecked(input)))
  )
}

function dispatchBackspace(input) {
  const event = new KeyboardEvent("keydown", {
    key: "Backspace",
    code: "Backspace",
    keyCode: 8,
    which: 8,
    bubbles: true,
    cancelable: true,
  })
  input?.dispatchEvent(event)
}

async function fillCustomSelectField(input, values) {
  try {
    const value = values[0]
    const wrapper = input.parentElement
    if (!wrapper) throw Error("No wrapper element found")
    const label = wrapper.querySelector("label")
    if (!label) throw Error("No label element found")
    label.click()
    await delay.delay(400)

    const dialog = wrapper.querySelector("dialog")
    if (!dialog) throw Error("No dialog element found")

    const search = dialog.querySelector('input[type="search"]')
    if (search) {
      setReactInputValue(search, value)
      await delay.delay(200)
      const first = dialog.querySelector("ul>li")
      if (!first) return
      first.click()
      await delay.delay(100)
    } else {
      const options = Array.from(dialog.querySelectorAll("ul>li"))
      if (!options?.length) throw Error("No options found")
      for (const option of options) {
        const text = option.innerText.trim()
        if (text && text.toLowerCase() === value.toLowerCase()) {
          option.click()
          await delay.delay(100)
          break
        }
      }
    }
  } catch {
  } finally {
    document.dispatchEvent(
      new MouseEvent("mouseup", {
        bubbles: true,
        cancelable: true,
        view: window,
      }),
    )
  }
}

async function saveEducation() {
  const button = xpath.getFirstOrderedNode(
    '//div[@data-ui="education"]//button[@data-ui="save-section"]',
  )
  if (button) {
    button.click()
    await delay.delay(500)
  }
}

async function saveExperience() {
  const button = xpath.getFirstOrderedNode(
    '//div[@data-ui="experience"]//button[@data-ui="save-section"]',
  )
  if (button) {
    button.click()
    await delay.delay(500)
  }
}

function addEducation() {
  const button = getSectionAddButton("education")
  if (button) button.click()
}

function addExperience() {
  const button = getSectionAddButton("experience")
  if (button) button.click()
}

async function fillDateInDetailsSection() {
  await fillReactInputField(
    xpath.getFirstOrderedNode(
      '//section[@data-ui="section"]//input[@placeholder="YYYY/MM/DD"]',
    ),
    dayjsDefault.default().format("YYYY/MM/DD"),
  )
}

function blurPage() {
  const main = xpath.getFirstOrderedNode('//*[@id="mainContent"] | //main')
  if (main) {
    for (let i = 0; i < 3; i++) {
      dom.triggerEvents(main, ["click"])
      dom.triggerEvents(main, ["mousedown"])
      dom.triggerEvents(main, ["mouseup"])
    }
  }
}

function submitObserver(button) {
  if (button) {
    button.parentNode
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (
            node?.getAttribute?.("data-ui") === "successful-submit" ||
            node?.querySelectorAll("[data-ui='successful-submit']").length > 0
          ) {
            observer.disconnect()
            window.top?.postMessage(
              stringUtils.cleanObject({
                type: enums.MESSAGE_EVENTS.agentSubmitClicked,
              }),
              { targetOrigin: "*" },
            )
          }
        }
      }
    })
    observer.observe(document.getElementById("app"), {
      childList: true,
      subtree: true,
    })
  }
}

export {
  fillWorkablePhoneCountryCode,
  resetWorkableCheckboxMainWorldInjectionForTests,
  preFillForm,
  uploadResume,
  cleanSalaryValue,
  fillCountry,
  preclickAddButtons,
  fillReactInputField,
  isWorkableAgreementCheckbox,
  fillWorkableCheckboxField,
  fillCustomSelectField,
  saveEducation,
  saveExperience,
  addEducation,
  addExperience,
  fillDateInDetailsSection,
  blurPage,
  submitObserver,
}
