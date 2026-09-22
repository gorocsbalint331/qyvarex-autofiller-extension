// @ts-nocheck

import { sendToBackground } from "@plasmohq/messaging"

import { fillCheckbox } from "../../crawler/utils/checkbox.js"
import {
  fetchCoverLetterPdfAsBlob,
  fetchPdfAsBlob,
} from "../../methods/answer.js"
import {
  fillInputTextField,
  triggerEvents,
  uploadFiles,
} from "../../methods/dom.js"
import { waitForCondition } from "../../methods/observer.js"
import {
  getFirstOrderedNode,
  getFirstOrderedNodeSafe,
  getOrderedNodesSafe,
} from "../../../core/xpath.js"
import { delay } from "../../../utils/delay.js"
import {
  chooseGreenhouseAddAnotherButton,
  describeGreenhouseAddAnotherButton,
} from "./add-another-button.ts"
import { resolveGreenhouseDateInputValue } from "./answer.ts"
import {
  findGreenhouseRaceContainer,
  isGreenhouseRaceLabel,
} from "./race.ts"
import {
  getReactSelectMenuSearchState,
  isReactSelectMenuSearchSettled,
} from "./react-select-search.ts"

export {
  fillGreenhouseGeographicCountry,
  isGreenhouseBuiltInGeographicCountryControl,
  isGreenhouseGeographicCountryLabel,
  isGreenhouseGeographicCountryRule,
  resolveGreenhouseCountryOption,
} from "./country.ts"

const REACT_SELECT_TIMEOUT = 5000
const FIBER_INJECTION_TIMEOUT = 1000
const FIBER_REQUEST_EVENT = "__jr_react_select_request"
const FIBER_RESPONSE_EVENT = "__jr_react_select_response"
const FIBER_CLICK_REQUEST_EVENT = "__jr_react_select_click_request"
const FIBER_CLICK_RESPONSE_EVENT = "__jr_react_select_click_response"

let reactFiberInjected = false
let reactFiberInjectionFailed = false

export function resetReactFiberInjectionStateForTests() {
  reactFiberInjected = false
  reactFiberInjectionFailed = false
}

async function injectReactSelectFiber() {
  if (reactFiberInjected) return true
  if (reactFiberInjectionFailed) return false

  try {
    const response = await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(Error("injectReactSelectFiber timed out"))
      }, FIBER_INJECTION_TIMEOUT)

      Promise.resolve(
        sendToBackground({ name: "injectReactSelectFiber" }),
      ).then(
        (result) => {
          clearTimeout(timeout)
          resolve(result ?? {})
        },
        (error) => {
          clearTimeout(timeout)
          reject(error)
        },
      )
    })

    if (response?.success === false) {
      throw Error("injectReactSelectFiber returned success=false")
    }

    reactFiberInjected = true
    return true
  } catch (error) {
    reactFiberInjectionFailed = true
    console.warn("[ReactFiber] failed to inject main world script:", error)
    return false
  }
}

async function setReactSelectValueThroughFiber(container, candidates) {
  const injected = await injectReactSelectFiber()
  if (!injected) return false

  const anchor =
    container.querySelector('input[class*="select__input"]') ||
    container.querySelector(".select__control") ||
    container.querySelector('[class*="select__"]')
  if (!anchor) return false

  let anchorSelector
  if (anchor.id) {
    anchorSelector = `#${CSS.escape(anchor.id)}`
  } else {
    const anchorId = `__jr_fiber_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2, 8)}`
    anchor.setAttribute("data-jr-fiber-id", anchorId)
    anchorSelector = `[data-jr-fiber-id="${anchorId}"]`
  }

  const requestId = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      document.removeEventListener(FIBER_RESPONSE_EVENT, handleResponse)
      resolve(false)
    }, 3000)

    function handleResponse(event) {
      const detail = event.detail
      if (detail?.requestId !== requestId) return

      document.removeEventListener(FIBER_RESPONSE_EVENT, handleResponse)
      clearTimeout(timeout)
      anchor?.removeAttribute("data-jr-fiber-id")
      resolve(Boolean(detail.success))
    }

    document.addEventListener(FIBER_RESPONSE_EVENT, handleResponse)
    document.dispatchEvent(
      new CustomEvent(FIBER_REQUEST_EVENT, {
        detail: { anchorSelector, candidates, requestId },
      }),
    )
  })
}

async function clickReactSelectOptionThroughFiber(option, container) {
  const injected = await injectReactSelectFiber()
  if (!injected) return false

  const optionId = `__jr_opt_${Date.now()}_${Math.random()
    .toString(36)
    .slice(2, 8)}`
  option.setAttribute("data-jr-fiber-opt", optionId)

  const anchor =
    container.querySelector('input[class*="select__input"]') ||
    container.querySelector(".select__control")
  let anchorSelector = ""
  if (anchor?.id) {
    anchorSelector = `#${CSS.escape(anchor.id)}`
  } else if (anchor) {
    const anchorId = `__jr_anc_${Date.now()}`
    anchor.setAttribute("data-jr-fiber-id", anchorId)
    anchorSelector = `[data-jr-fiber-id="${anchorId}"]`
  }

  const optionSelector = `[data-jr-fiber-opt="${optionId}"]`
  const requestId = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`

  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      document.removeEventListener(FIBER_CLICK_RESPONSE_EVENT, handleResponse)
      cleanUp()
      resolve(false)
    }, 3000)

    function cleanUp() {
      option.removeAttribute("data-jr-fiber-opt")
      anchor?.removeAttribute("data-jr-fiber-id")
    }

    function handleResponse(event) {
      const detail = event.detail
      if (detail?.requestId !== requestId) return

      document.removeEventListener(FIBER_CLICK_RESPONSE_EVENT, handleResponse)
      clearTimeout(timeout)
      cleanUp()
      resolve(Boolean(detail.success))
    }

    document.addEventListener(FIBER_CLICK_RESPONSE_EVENT, handleResponse)
    document.dispatchEvent(
      new CustomEvent(FIBER_CLICK_REQUEST_EVENT, {
        detail: { optionSelector, anchorSelector, requestId },
      }),
    )
  })
}

function setNativeInputValue(input, value) {
  const prototype = Object.getPrototypeOf(input)
  const descriptor = Object.getOwnPropertyDescriptor(prototype, "value")
  const setter = descriptor?.set

  if (setter) {
    setter.call(input, value)
    return
  }
  input.value = value
}

function findAddAnotherButton(sectionType, section) {
  const relativeXPath = `.//*[
    self::a[@id='add_${sectionType}'] or
    self::a[
      contains(
        translate(normalize-space(.), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
        'add another ${sectionType}'
      )
    ] or
    self::button[contains(@class, 'add-another-button')]
  ]`
  const sectionCandidates = getOrderedNodesSafe(relativeXPath, section).map(
    (element) => describeGreenhouseAddAnotherButton(element),
  )
  const sectionChoice = chooseGreenhouseAddAnotherButton(
    sectionCandidates,
    sectionType,
  )
  if (sectionChoice?.element) return sectionChoice.element

  const documentCandidates = getOrderedNodesSafe(`//*[
    self::a[@id='add_${sectionType}'] or
    self::a[
      contains(
        translate(normalize-space(.), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
        'add another ${sectionType}'
      )
    ] or
    self::button[contains(@class, 'add-another-button')]
  ]`).map((element) => describeGreenhouseAddAnotherButton(element))
  const documentChoice = chooseGreenhouseAddAnotherButton(
    documentCandidates,
    sectionType,
  )
  return documentChoice?.element ?? null
}

async function typeIntoReactSelectInput(input, text) {
  triggerEvents(input, ["focus", "mousedown", "mouseup"])
  if (input.value) {
    setNativeInputValue(input, "")
    triggerEvents(input, ["input"])
    await delay(50)
  }

  setNativeInputValue(input, text)
  triggerEvents(input, ["input", "change"])
  await delay(300)
}

function normalizeOptionText(value) {
  return value.replace(/\s+/g, " ").replace(/\s*,\s*/g, ", ").trim()
}

function isExactMatchOnlyLabel(label) {
  const normalizedLabel = label.trim().toLowerCase()
  return normalizedLabel === "school" || normalizedLabel === "discipline"
}

function findMatchingOption(options, candidates, allowPartialMatch = true) {
  const normalizedCandidates = candidates
    .map((candidate) => normalizeOptionText(candidate).toLowerCase())
    .filter(Boolean)
  if (normalizedCandidates.length === 0 || options.length === 0) return null

  const normalizedOptions = options.map((option) => ({
    option,
    text: normalizeOptionText(option.textContent || "").toLowerCase(),
  }))

  for (const candidate of normalizedCandidates) {
    const match = normalizedOptions.find(({ text }) => text === candidate)
    if (match) return match.option
  }
  if (!allowPartialMatch) return null

  for (const candidate of normalizedCandidates) {
    const match = normalizedOptions.find(({ text }) =>
      text.startsWith(candidate),
    )
    if (match) return match.option
  }

  for (const candidate of normalizedCandidates) {
    const match = normalizedOptions.find(({ text }) => text.includes(candidate))
    if (match) return match.option
  }
  return null
}

function isVisible(element) {
  return Boolean(element && element.offsetParent !== null)
}

export function findReactSelectInput(container) {
  return (
    container.querySelector('input[id^="react-select"]') ||
    container.querySelector("input.select__input")
  )
}

function findReactSelectTrigger(container) {
  return (
    container.querySelector('[aria-label="Toggle flyout"]') ||
    container.querySelector(".select__dropdown-indicator") ||
    container.querySelector(".select__indicators") ||
    container.querySelector(".select__control")
  )
}

function findVisibleMenuById(id) {
  const element = document.getElementById(id)
  const menu = element?.closest(".select__menu")
  return isVisible(menu) ? menu : null
}

export function findVisibleReactSelectMenu(container, input) {
  const controlledMenuId =
    input?.getAttribute("aria-controls") ||
    (input?.id ? `react-select-${input.id}-listbox` : null)

  if (controlledMenuId) {
    const controlledMenu = findVisibleMenuById(controlledMenuId)
    if (controlledMenu) return controlledMenu
  }

  const localMenu = container.querySelector(".select__menu")
  if (isVisible(localMenu)) return localMenu
  if (controlledMenuId) return null

  return (
    Array.from(document.querySelectorAll(".select__menu"))
      .filter(isVisible)
      .at(-1) ?? null
  )
}

export function dismissAllReactSelectMenus() {
  const visibleMenus = Array.from(
    document.querySelectorAll(".select__menu"),
  ).filter(isVisible)

  for (const menu of visibleMenus) {
    const container = menu.closest(".select__control")?.parentElement
    const input =
      container?.querySelector('input[id^="react-select"]') ||
      container?.querySelector("input.select__input")
    if (input) {
      input.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Escape",
          code: "Escape",
          keyCode: 27,
          bubbles: true,
          cancelable: true,
        }),
      )
      input.blur()
    }
  }

  for (const menu of document.querySelectorAll(".select__menu")) {
    if (isVisible(menu)) menu.style.display = "none"
  }
}

function getMenuOptionsSnapshot(menu) {
  return Array.from(menu.querySelectorAll(".select__option"))
    .map((option) => option.textContent?.trim() ?? "")
    .join("\n")
}

function getReactSelectValue(container) {
  const valueContainer = container.querySelector(".select__value-container")
  const singleValue =
    valueContainer
      ?.querySelector(".select__single-value")
      ?.textContent?.replace(/\s+/g, " ")
      .trim() ?? ""
  if (singleValue) return singleValue

  const hiddenValue =
    Array.from(container.querySelectorAll("input"))
      .find(
        (input) =>
          input.value.trim() &&
          (input.type === "hidden" ||
            input.getAttribute("aria-hidden") === "true" ||
            input.tabIndex === -1),
      )
      ?.value.trim() ?? ""
  if (hiddenValue) return hiddenValue

  const placeholder =
    valueContainer
      ?.querySelector(".select__placeholder")
      ?.textContent?.replace(/\s+/g, " ")
      .trim() ?? ""
  const containerText =
    valueContainer?.textContent?.replace(/\s+/g, " ").trim() ?? ""
  return containerText &&
    containerText !== placeholder &&
    containerText !== "Select..."
    ? containerText
    : ""
}

function hasReactSelectValue(container) {
  return getReactSelectValue(container).length > 0
}

export async function clearGreenhouseAutocompleteField(container) {
  if (!container) return false

  const clearIndicator = container.querySelector(".select__clear-indicator")
  if (clearIndicator) {
    triggerEvents(clearIndicator, ["mousedown", "mouseup", "click"])
    clearIndicator.click?.()
    await delay(100)
    return !hasReactSelectValue(container)
  }

  const reactSelectInput = findReactSelectInput(container)
  if (reactSelectInput) {
    reactSelectInput.value = ""
    triggerEvents(reactSelectInput, ["input", "change", "blur"])
  }

  const hiddenInputs = Array.from(container.querySelectorAll("input")).filter(
    (input) =>
      input.type === "hidden" ||
      input.getAttribute("aria-hidden") === "true" ||
      input.tabIndex === -1,
  )
  for (const input of hiddenInputs) {
    input.value = ""
    triggerEvents(input, ["input", "change"])
  }

  document.body?.click?.()
  await delay(100)
  return !hasReactSelectValue(container)
}

async function waitForReactSelectValue(container) {
  let hasValue = await waitForCondition(() => hasReactSelectValue(container), {
    timeout: REACT_SELECT_TIMEOUT,
    interval: 50,
    observeTarget: container,
  })
  if (!hasValue) {
    await delay(200)
    hasValue = hasReactSelectValue(container)
  }
  return hasValue
}

function clickElement(element) {
  for (const eventName of ["mousedown", "mouseup", "click"]) {
    const EventClass = typeof MouseEvent === "function" ? MouseEvent : Event
    element.dispatchEvent(
      new EventClass(eventName, { bubbles: true, cancelable: true }),
    )
  }
  element.click()
}

async function selectReactSelectOption(container, input, option) {
  clickElement(option)
  let selected = await waitForCondition(
    () => hasReactSelectValue(container),
    { timeout: REACT_SELECT_TIMEOUT, interval: 50 },
  )
  if (!selected) {
    clickElement(option)
    await delay(200)
    selected = hasReactSelectValue(container)
  }
  if (!selected) {
    const fiberSelected = await clickReactSelectOptionThroughFiber(
      option,
      container,
    )
    if (fiberSelected) {
      await delay(200)
      selected = hasReactSelectValue(container)
    }
  }
  if (!selected) return false

  const emptyHiddenInput =
    Array.from(container.querySelectorAll("input")).find(
      (candidate) =>
        candidate !== input &&
        !candidate.value &&
        (candidate.type === "hidden" ||
          candidate.getAttribute("aria-hidden") === "true" ||
          candidate.tabIndex === -1),
    ) ?? null
  if (emptyHiddenInput && !emptyHiddenInput.value) {
    const optionValue =
      option.getAttribute("data-value") || option.getAttribute("value")
    if (optionValue) {
      emptyHiddenInput.value = optionValue
      triggerEvents(emptyHiddenInput, ["change"])
    }
  }

  triggerEvents(input, ["change", "blur"])
  document.body.click()
  return true
}

async function closeReactSelectMenu(container, input) {
  const menu = findVisibleReactSelectMenu(container, input)
  if (!menu) return

  const EventClass = typeof KeyboardEvent === "function" ? KeyboardEvent : Event
  input.dispatchEvent(
    new EventClass("keydown", {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      bubbles: true,
      cancelable: true,
    }),
  )
  input.blur()
  document.body.click()

  const closed = await waitForCondition(
    () => !findVisibleReactSelectMenu(container, input),
    { timeout: 300, interval: 50 },
  )
  if (!closed && "style" in menu) menu.style.display = "none"
}

function getMenuSearchState(menu, previousOptionsSnapshot) {
  return getReactSelectMenuSearchState({
    hasNoOptionsNotice: Boolean(
      menu.querySelector(".select__menu-notice--no-options"),
    ),
    currentOptionsSnapshot: getMenuOptionsSnapshot(menu),
    previousOptionsSnapshot,
  })
}

function isMenuSearchSettled(menu, previousOptionsSnapshot) {
  return isReactSelectMenuSearchSettled({
    hasLoadingNotice: Boolean(
      menu.querySelector(".select__menu-notice--loading"),
    ),
    hasNoOptionsNotice: Boolean(
      menu.querySelector(".select__menu-notice--no-options"),
    ),
    currentOptionsSnapshot: getMenuOptionsSnapshot(menu),
    previousOptionsSnapshot,
  })
}

async function openReactSelectMenu(container, input, trigger, options) {
  const existingMenu = findVisibleReactSelectMenu(container, input)
  if (existingMenu && !options?.forceTrigger) return existingMenu

  const menuTrigger = trigger ?? findReactSelectTrigger(container)
  if (!menuTrigger || typeof menuTrigger.dispatchEvent !== "function") {
    return null
  }

  triggerEvents(menuTrigger, ["mousedown", "mouseup", "click"])
  const opened = await waitForCondition(
    () => Boolean(findVisibleReactSelectMenu(container, input)),
    {
      timeout: 5000,
      interval: 100,
      observeTarget: container,
    },
  )
  return opened ? findVisibleReactSelectMenu(container, input) : null
}

function findOptionByText(menu, value) {
  const options = Array.from(menu.querySelectorAll(".select__option"))
  const normalizedValue = value.trim().toLowerCase()

  for (const option of options) {
    if (option.textContent?.trim().toLowerCase() === normalizedValue) {
      return option
    }
  }
  for (const option of options) {
    if (option.textContent?.trim().toLowerCase().includes(normalizedValue)) {
      return option
    }
  }
  return null
}

export async function fillTextField(rule, value, inputOverride) {
  const input = inputOverride ?? rule.$input
  if (!input) return false

  await fillInputTextField(
    input,
    resolveGreenhouseDateInputValue(rule.label, value, input),
  )
  return true
}

export async function fillSelectField(rule, value) {
  const candidates = Array.isArray(value) ? value : [value]
  if (!rule.$input) {
    console.warn(
      `Cannot fill select field for label: "${rule.label}" - $input is undefined`,
    )
    return false
  }

  const container =
    rule.$input.closest("div, li, span") ||
    rule.$input.parentElement ||
    rule.$input
  if (!container) {
    console.warn(
      `Cannot find container for select field with label: "${rule.label}"`,
    )
    return false
  }

  if (await setReactSelectValueThroughFiber(container, candidates)) {
    await delay(100)
    return true
  }

  const reactSelectInput = findReactSelectInput(container)
  const menuTrigger =
    findReactSelectTrigger(container) ||
    container.querySelector(".select__indicators")
  if (reactSelectInput && menuTrigger) {
    let menu = await openReactSelectMenu(
      container,
      reactSelectInput,
      menuTrigger,
    )
    const initialOptionsSnapshot = menu ? getMenuOptionsSnapshot(menu) : null

    if (
      menu &&
      getMenuSearchState(menu, null) === "options-ready"
    ) {
      for (const candidate of candidates) {
        const option = findOptionByText(menu, candidate)
        if (!option) continue

        clickElement(option)
        let selected = await waitForCondition(
          () => hasReactSelectValue(container),
          {
            timeout: REACT_SELECT_TIMEOUT,
            interval: 50,
            observeTarget: container,
          },
        )
        if (!selected) {
          const fiberSelected = await clickReactSelectOptionThroughFiber(
            option,
            container,
          )
          if (fiberSelected) {
            await delay(200)
            selected = hasReactSelectValue(container)
          }
        }
        if (selected) {
          await delay(100)
          return true
        }
      }
    }

    for (const candidate of candidates) {
      const visibleMenu = findVisibleReactSelectMenu(
        container,
        reactSelectInput,
      )
      const previousOptionsSnapshot = visibleMenu
        ? getMenuOptionsSnapshot(visibleMenu)
        : initialOptionsSnapshot

      await typeIntoReactSelectInput(reactSelectInput, candidate)
      let menuOpened = await waitForCondition(
        () =>
          Boolean(findVisibleReactSelectMenu(container, reactSelectInput)),
        {
          timeout: 500,
          interval: 100,
          observeTarget: document.body,
        },
      )
      if (!menuOpened) {
        menuOpened = Boolean(
          await openReactSelectMenu(
            container,
            reactSelectInput,
            menuTrigger,
          ),
        )
      }
      if (!menuOpened) continue

      menu = findVisibleReactSelectMenu(container, reactSelectInput)
      if (!menu) continue

      const searchFinished = await waitForCondition(
        () => {
          const currentMenu = findVisibleReactSelectMenu(
            container,
            reactSelectInput,
          )
          return (
            Boolean(currentMenu) &&
            getMenuSearchState(currentMenu, previousOptionsSnapshot) !==
              "pending"
          )
        },
        {
          timeout: REACT_SELECT_TIMEOUT,
          interval: 100,
          observeTarget: document.body,
        },
      )
      menu =
        findVisibleReactSelectMenu(container, reactSelectInput) ?? menu
      if (
        !searchFinished ||
        getMenuSearchState(menu, previousOptionsSnapshot) === "no-options"
      ) {
        continue
      }

      const option = findOptionByText(menu, candidate)
      if (option) {
        clickElement(option)
        let selected = await waitForCondition(
          () => hasReactSelectValue(container),
          {
            timeout: REACT_SELECT_TIMEOUT,
            interval: 50,
            observeTarget: container,
          },
        )
        if (!selected) {
          const fiberSelected = await clickReactSelectOptionThroughFiber(
            option,
            container,
          )
          if (fiberSelected) {
            await delay(200)
            selected = hasReactSelectValue(container)
          }
        }
        if (selected) {
          await delay(100)
          return true
        }
      }
    }

    triggerEvents(menuTrigger, ["mousedown", "click"])
  }

  if (rule.$input.tagName === "SELECT") {
    const select = rule.$input
    let matchingOption = null
    for (const option of Array.from(select.options)) {
      if (
        option.text?.trim().toLowerCase() === candidates[0].toLowerCase()
      ) {
        matchingOption = option
        break
      }
    }
    if (matchingOption) {
      select.value = matchingOption.value
      matchingOption.selected = true
      triggerEvents(select, ["change", "blur"])
      await delay(50)
      return true
    }
  }

  return false
}

export async function reinitializeEducationAndEmployment() {
  await deleteEmploymentSections()
  await deleteEducationSections()
}

export function countEducationSections() {
  return getOrderedNodesSafe(
    "//*[(@id='education_section' or contains(@class, 'education--container'))]//*[contains(@class, 'education') and not(contains(@class, 'container'))]",
  ).length
}

export function countEmploymentSections() {
  return getOrderedNodesSafe(
    "//*[(@id='employment_section' or contains(@class, 'employment--container'))]//*[contains(@class, 'employment') and not(contains(@class, 'container'))]",
  ).length
}

export async function deleteEducationSections() {
  const section = getFirstOrderedNodeSafe(
    "//div[(@id='education_section' or contains(@class, 'education--container'))]",
  )
  if (!section) return

  const removeButtons = getOrderedNodesSafe(
    `.//a[@class='remove-background-field'] |
    .//button[contains(translate(@aria-label, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'remove education')] |
    .//button[contains(translate(@aria-label, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'remove') and ancestor::*[contains(@class, 'education')]]`,
    section,
  )
  for (const button of removeButtons) {
    if (button) {
      button.click()
      await delay(200)
    }
  }
  if (removeButtons.length > 0) await delay(100)
}

export async function deleteEmploymentSections() {
  const section = getFirstOrderedNodeSafe(
    "//div[(@id='employment_section' or contains(@class, 'employment--container'))]",
  )
  if (!section) return

  const removeButtons = getOrderedNodesSafe(
    `.//a[@class='remove-background-field'] |
    .//button[contains(translate(@aria-label, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'remove employment')] |
    .//button[contains(translate(@aria-label, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'remove') and ancestor::*[contains(@class, 'employment')]]`,
    section,
  )
  for (const button of removeButtons) {
    if (button) {
      button.click()
      await delay(200)
    }
  }
  if (removeButtons.length > 0) await delay(100)
}

export async function addEducationSection(targetCount) {
  const section = getFirstOrderedNodeSafe(
    ".//div[(@id='education_section' or contains(@class, 'education--container'))]",
    document,
  )
  if (targetCount <= 0 || !section) return

  const existingSections = getOrderedNodesSafe(
    `.//div[
      (
        (contains(@class, 'education') and not(contains(@class, 'container')))
        or contains(@class, 'education--form')
      )
      and not(ancestor::div[
        (contains(@class, 'education') and not(contains(@class, 'container')))
        or contains(@class, 'education--form')
      ])
    ]`,
    section,
  )
  const sectionsToAdd = targetCount - existingSections.length
  if (sectionsToAdd <= 0) return

  for (let index = 0; index < sectionsToAdd; index++) {
    const addButton = findAddAnotherButton("education", section)
    if (!addButton) break
    addButton.click()
    await delay(300)
  }
  await delay(200)
}

export async function addEmploymentSection(targetCount) {
  if (targetCount <= 0) return

  const section = getFirstOrderedNodeSafe(
    ".//div[(@id='employment_section' or contains(@class, 'employment--container'))]",
    document,
  )
  if (!section) return

  const existingSections = getOrderedNodesSafe(
    `.//div[
      (contains(@class, 'employment') and not(contains(@class, 'container')))
      or contains(@class, 'employment-form')
    ]`,
    section,
  )
  const sectionsToAdd = targetCount - (existingSections?.length || 0)
  if (sectionsToAdd <= 0) return

  for (let index = 0; index < sectionsToAdd; index++) {
    const addButton = findAddAnotherButton("employment", section)
    if (!addButton) break
    addButton.click()
    await delay(300)
  }
}

function isTruthyCurrentEmploymentValue(value) {
  if (value === true || value === 1) return true
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase()
    return normalized === "true" || normalized === "1" || normalized === "yes"
  }
  return false
}

const CURRENT_EMPLOYMENT_CHECKBOX_SELECTOR =
  'input[type="checkbox"].current[name*="[employments]"][name*="[current]"], input[type="checkbox"][name*="[employments]"][name*="[current]"]'

function getCurrentEmploymentCheckboxes() {
  return Array.from(
    document.querySelectorAll(CURRENT_EMPLOYMENT_CHECKBOX_SELECTOR),
  )
}

function getCurrentEmploymentCheckbox(index) {
  const checkboxes = getCurrentEmploymentCheckboxes()
  return checkboxes[index] || null
}

export async function fillCurrentEmploymentCheckboxes(employments) {
  if (
    !Array.isArray(employments) ||
    employments.length === 0 ||
    getCurrentEmploymentCheckboxes().length === 0
  ) {
    return
  }

  for (let index = 0; index < employments.length; index++) {
    const employment = employments[index]
    if (
      !employment ||
      !isTruthyCurrentEmploymentValue(employment.isCurrent)
    ) {
      continue
    }

    const checkbox = getCurrentEmploymentCheckbox(index)
    if (!checkbox || checkbox.disabled || checkbox.checked) continue

    await fillCheckbox(checkbox, true)
    await delay(50)
  }
}

export async function fillCountryFieldFirstOption(country, existingValue) {
  if (String(existingValue ?? "").trim()) return

  const countryContainer = document.querySelector(".phone-input__country")
  if (!countryContainer) return

  const input = countryContainer.querySelector("input#country")
  if (!input) return

  const countryName = country === "Canada" ? "Canada" : "United States"
  input.focus()
  input.value = ""
  await typeIntoReactSelectInput(input, countryName)

  let listbox = null
  await waitForCondition(
    () => {
      listbox = document.getElementById("react-select-country-listbox")
      if (listbox) return true

      const menu = document.querySelector(".select__menu")
      if (menu) {
        listbox = menu.querySelector(
          '[id="react-select-country-listbox"]',
        )
        if (listbox) return true
      }

      listbox = document.querySelector('[role="listbox"]')
      return listbox !== null
    },
    {
      timeout: REACT_SELECT_TIMEOUT,
      interval: 100,
      observeTarget: document.body,
    },
  )
  if (!listbox) return

  await waitForCondition(
    () => listbox.querySelectorAll(".select__option").length > 0,
    {
      timeout: REACT_SELECT_TIMEOUT,
      interval: 100,
      observeTarget: listbox,
    },
  )
  const firstOption = listbox.querySelector(
    ".select__option:not([aria-disabled='true']), .select__option",
  )
  if (firstOption) {
    firstOption.click()
    await delay(200)
    input.blur()
  }
}

export async function fillAutocompleteField(rule, value, options = {}) {
  const candidates = Array.isArray(value) ? value : [value]
  const searchOptions = {
    ...options,
    allowPartialMatch:
      options.allowPartialMatch ?? !isExactMatchOnlyLabel(rule.label),
  }
  let container = rule.$input

  if (!container && isGreenhouseRaceLabel(rule.label)) {
    const raceContainer = findGreenhouseRaceContainer()
    if (!raceContainer) return false

    container = raceContainer
    rule.$input = raceContainer
    rule.$label = getFirstOrderedNodeSafe(".//label", raceContainer)
  }

  return Boolean(
    container &&
      container.querySelector(".select__control") &&
      (await fillReactSelectAutocomplete(
        container,
        candidates,
        searchOptions,
      )),
  )
}

async function fillReactSelectAutocomplete(container, candidates, options) {
  const canUseFiberDirectly =
    candidates.length === 1 && options.allowPartialMatch !== false
  if (
    canUseFiberDirectly &&
    (await setReactSelectValueThroughFiber(container, candidates)) &&
    (await waitForReactSelectValue(container))
  ) {
    await delay(100)
    return true
  }

  return fillReactSelectAutocompleteThroughMenu(
    container,
    candidates,
    options,
  )
}

async function fillReactSelectAutocompleteThroughMenu(
  container,
  candidates,
  options,
) {
  const allowPartialMatch = options.allowPartialMatch !== false
  const control = container.querySelector(".select__control")
  if (!control) return false

  const input = getFirstOrderedNodeSafe(
    ".//input[contains(@class, 'select__input')]",
    container,
  )
  if (!input) return false

  for (let index = 0; index < candidates.length; index++) {
    const candidate = candidates[index]
    let menu = null

    if (index > 0) {
      await closeReactSelectMenu(container, input)
      menu = await openReactSelectMenu(container, input, control, {
        forceTrigger: true,
      })
    } else {
      menu = findVisibleReactSelectMenu(container, input)
    }

    const previousOptionsSnapshot = menu
      ? getMenuOptionsSnapshot(menu)
      : null
    const existingOption = menu
      ? findMatchingOption(
          Array.from(menu.querySelectorAll(".select__option")),
          [candidate],
          false,
        )
      : null

    if (existingOption) {
      if (await selectReactSelectOption(container, input, existingOption)) {
        return true
      }
      triggerEvents(input, ["blur"])
      document.body.click()
      continue
    }

    if (menu) await closeReactSelectMenu(container, input)
    await typeIntoReactSelectInput(input, candidate)

    let attempts = 0
    while (!input.value && attempts < 5) {
      await delay(100)
      await typeIntoReactSelectInput(input, candidate)
      attempts++
    }

    let menuOpened = await waitForCondition(
      () => Boolean(findVisibleReactSelectMenu(container, input)),
      { timeout: REACT_SELECT_TIMEOUT, interval: 100 },
    )
    if (!menuOpened) {
      menuOpened = Boolean(
        await openReactSelectMenu(container, input, control),
      )
    }
    if (!menuOpened) continue

    menu = findVisibleReactSelectMenu(container, input)
    if (!menu) continue

    const searchFinished = await waitForCondition(
      () => {
        const currentMenu = findVisibleReactSelectMenu(container, input)
        return (
          Boolean(currentMenu) &&
          isMenuSearchSettled(currentMenu, previousOptionsSnapshot)
        )
      },
      { timeout: REACT_SELECT_TIMEOUT, interval: 100 },
    )
    menu = findVisibleReactSelectMenu(container, input) ?? menu
    if (
      !searchFinished ||
      getMenuSearchState(menu, previousOptionsSnapshot) === "no-options"
    ) {
      continue
    }

    await delay(100)
    const options = Array.from(menu.querySelectorAll(".select__option"))
    const matchingOption = findMatchingOption(
      options,
      [candidate],
      allowPartialMatch,
    )
    if (matchingOption) {
      if (
        !(await selectReactSelectOption(container, input, matchingOption))
      ) {
        triggerEvents(input, ["blur"])
        document.body.click()
        continue
      }
      return true
    }
  }

  document.body.click()
  return false
}

export function isResumeRequired() {
  const uploadControl = document.querySelector(
    '[aria-labelledby="upload-label-resume"]',
  )
  if (uploadControl) {
    return uploadControl.getAttribute("aria-required") !== "false"
  }

  const fieldset = document.querySelector(
    "#resume_fieldset, #s3_upload_for_resume",
  )
  if (fieldset) {
    const label = fieldset.querySelector("label")
    if (label && /[*\uff0a]/.test(label.textContent || "")) return true

    const input = fieldset.querySelector('input[type="file"]')
    return Boolean(input?.hasAttribute("required")) ||
      input?.getAttribute("aria-required") === "true"
  }
  return true
}

export async function uploadResume(resumeInfo, reportProgress, onUploaded) {
  const required = isResumeRequired()
  const uploadContainer = document.querySelector(
    '[aria-labelledby="upload-label-resume"], #resume_fieldset, #s3_upload_for_resume',
  )
  const removeButton = uploadContainer?.querySelector(
    'button[aria-label="Remove file"]',
  )
  if (removeButton) removeButton.click()

  const uploadButtonXPath =
    '//*[@id="resume_fieldset" or @id="s3_upload_for_resume"]//button[@aria-describedby="resume-allowable-file-types"]'
  if (removeButton) {
    await waitForCondition(
      () => Boolean(getFirstOrderedNode(uploadButtonXPath)),
      { timeout: 2000, interval: 100 },
    )
  }

  const uploadButton = getFirstOrderedNode(uploadButtonXPath)
  if (uploadButton) {
    const preventFilePicker = (event) => {
      const target = event.target
      if (target?.tagName === "INPUT" && target.type === "file") {
        event.preventDefault()
      }
    }
    document.addEventListener("click", preventFilePicker, true)
    triggerEvents(uploadButton, ["focus", "click"])
    await delay(200)
    document.removeEventListener("click", preventFilePicker, true)
  }

  let input = getFirstOrderedNodeSafe(`.//input[@type="file" and
    (ancestor::*[@id="resume_fieldset" or @id="s3_upload_for_resume" or @aria-labelledby="upload-label-resume"]
    or ancestor::*[contains(@class, 'ant-form-item-row')][.//label[text()='Resume/CV']]
    )]
  `)
  if (!input) {
    input = getFirstOrderedNodeSafe('.//input[@id = "resume"]')
  }
  if (input) {
    await uploadFiles(
      input,
      await fetchPdfAsBlob(resumeInfo),
      reportProgress,
      onUploaded,
      "Resume/CV",
      required,
    )
  }
}

const COVER_LETTER_INPUT_XPATH = `.//input[@type="file" and
  (ancestor::*[@id="cover_letter_fieldset" or @id="s3_upload_for_cover_letter" or @aria-labelledby="upload-label-cover_letter"]
  or ancestor::*[contains(@class, 'ant-form-item-row')][.//label[text()='Cover Letter']]
  )]
`
const FILE_UPLOAD_CONTAINER_SELECTOR =
  '[role="group"][aria-labelledby], .file-upload, #cover_letter_fieldset, #s3_upload_for_cover_letter, .ant-form-item-row, .field-wrapper'

function normalizeUploadLabel(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim().toLowerCase()
}

function getFileInputLabel(input) {
  const container = input.closest(FILE_UPLOAD_CONTAINER_SELECTOR)
  const labelledBy = container?.getAttribute("aria-labelledby")
  const ariaLabel = labelledBy
    ? document.getElementById(labelledBy)?.textContent
    : ""
  const localLabel = container?.querySelector(".upload-label, label")?.textContent
  return [ariaLabel, localLabel].filter(Boolean).join(" ")
}

function isCoverLetterInput(input) {
  return normalizeUploadLabel(getFileInputLabel(input)).includes("cover letter")
}

export function getGreenhouseCoverLetterInput() {
  const input = getFirstOrderedNodeSafe(COVER_LETTER_INPUT_XPATH)
  return (
    input ||
    Array.from(document.querySelectorAll('input[type="file"]')).find(
      isCoverLetterInput,
    ) ||
    null
  )
}

export function isGreenhouseCoverLetterRequired(input) {
  const container = input.closest(FILE_UPLOAD_CONTAINER_SELECTOR)
  const containerRequirement = container?.getAttribute("aria-required")
  if (containerRequirement === "true") return true
  if (containerRequirement === "false") return false

  const inputRequirement = input.getAttribute("aria-required")
  return (
    inputRequirement === "true" ||
    (inputRequirement !== "false" &&
      (input.hasAttribute("required") ||
        /[*\uff0a]/.test(getFileInputLabel(input))))
  )
}

export async function uploadCoverLetter(coverLetter, reportProgress, onUploaded) {
  const input = getGreenhouseCoverLetterInput()
  if (!input) return

  const required = isGreenhouseCoverLetterRequired(input)
  await uploadFiles(
    input,
    await fetchCoverLetterPdfAsBlob(coverLetter),
    reportProgress,
    onUploaded,
    "Cover Letter",
    required,
  )
}

export async function fillConsentCheckbox() {
  const labelPrefix = "By checking this box"
  const labels = getOrderedNodesSafe(
    `//label[starts-with(normalize-space(.), "${labelPrefix}")]`,
  )
  if (!labels || labels.length === 0) return

  for (const label of labels) {
    const checkbox =
      document.getElementById(label.htmlFor) ||
      label.querySelector("input[type='checkbox']")
    if (checkbox && !checkbox.checked) {
      checkbox.click()
      await delay(50)
    }
  }
}

export async function fillAcknowledgeCheckbox() {
  const labels = getOrderedNodesSafe(
    "//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'acknowledge')]",
  )
  if (!labels || labels.length === 0) return

  for (const label of labels) {
    let checkbox = null
    if (label.htmlFor) checkbox = document.getElementById(label.htmlFor)

    if (!checkbox) {
      const fieldset = label.closest("fieldset.checkbox")
      if (fieldset) checkbox = fieldset.querySelector('input[type="checkbox"]')
    }
    if (!checkbox) {
      checkbox = label.querySelector('input[type="checkbox"]')
    }
    if (!checkbox) {
      const wrapper = label.closest("div.checkbox__wrapper")
      if (wrapper) checkbox = wrapper.querySelector('input[type="checkbox"]')
    }
    if (!checkbox) {
      const enclosingLabel = label.closest("label")
      if (enclosingLabel && enclosingLabel !== label) {
        checkbox = enclosingLabel.querySelector('input[type="checkbox"]')
      }
    }

    if (checkbox && !checkbox.checked) {
      checkbox.click()
      await delay(100)
    }
  }
}

export async function fillNestedAcknowledgeCheckbox() {
  const labels = getOrderedNodesSafe(
    "//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'candidate ai responsible use policy') or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'acknowledge')]",
  )
  if (!labels || labels.length === 0) return

  for (const label of labels) {
    const checkbox = label.querySelector('input[type="checkbox"]')
    if (checkbox && !checkbox.checked) {
      const shouldCheck =
        label.textContent?.toLowerCase().includes("acknowledge") || false
      if (shouldCheck) {
        checkbox.click()
        await delay(100)
      }
    }
  }
}
