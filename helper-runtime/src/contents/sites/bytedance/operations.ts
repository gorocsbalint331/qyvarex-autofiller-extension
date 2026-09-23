// @ts-nocheck
/**
 * ByteDance ATS — DOM fill operations (inputs, selects, dates, resume).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as inputUtils from "../../crawler/utils/input.js"
import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as observer from "../../methods/observer.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as rules from "./rules.ts"

const EDUCATION_MODULE_KEYWORDS = ["education"]
const EXPERIENCE_MODULE_KEYWORDS = [["work", "experience"]]

const ATSX_MONTH_PANEL = ".atsx-date-picker-period-month-panel"
const ATSX_MONTH_PANEL_LIST = ".atsx-date-picker-period-month-panel-list"
const ATSX_MONTH_PANEL_ITEM =
  ".atsx-date-picker-period-month-panel-list-item"

export async function preFillForm() {
  await clickAddAllFormSections()
  await delay.delay(200)
}

export async function ensurePrivacyPolicyChecked() {
  await observer.waitForCondition(
    () => rules.getPrivacyPolicyCheckboxes().length > 0 || null,
    { timeout: 1500, interval: 100, observeTarget: document.body },
  )
  let checkboxes = rules.getPrivacyPolicyCheckboxes()
  if (checkboxes.length === 0) return

  for (let checkbox of checkboxes) {
    if (checkbox.checked) continue
    let clickTarget =
      checkbox.closest(".atsx-checkbox-wrapper") ||
      checkbox.closest(".atsx-checkbox") ||
      checkbox.closest("label")
    if (clickTarget) {
      fullClick(clickTarget)
    } else {
      checkbox.click()
    }
    await delay.delay(50)
    if (!checkbox.checked) {
      let proto = Object.getPrototypeOf(checkbox)
      let setter = Object.getOwnPropertyDescriptor(proto, "checked")?.set
      if (setter) {
        setter.call(checkbox, true)
      } else {
        checkbox.checked = true
      }
      checkbox.dispatchEvent(new Event("input", { bubbles: true }))
      checkbox.dispatchEvent(new Event("change", { bubbles: true }))
    }
  }
}

export async function clickAddExperienceSection() {
  let buttons = getAddButtons()
  let experienceBtn = buttons.find((btn) =>
    getModuleTitleNormalized(btn).includes("work experience"),
  )
  if (experienceBtn) await clickAddAndWaitForFields(experienceBtn)
}

export async function clickAddAllFormSections() {
  let buttons = getAddButtons()
  if (buttons.length === 0) return
  for (let button of buttons) {
    if (shouldAutoClickAddSection(button)) {
      await clickAddAndWaitForFields(button)
    }
  }
}

function getAddButtons() {
  return Array.from(
    document.querySelectorAll('[class*="apply-form-array-card-add"]'),
  ).filter((el) => (el.textContent || "").trim().toLowerCase().includes("add"))
}

function getModuleWrapper(el) {
  return el.closest('[class*="applyFormModuleWrapper__"]')
}

function getModuleTitleNormalized(el) {
  let module = getModuleWrapper(el)
  let text =
    module?.querySelector(".applyFormModuleWrapper-text")?.textContent ||
    module?.querySelector(".applyFormModuleWrapper-title")?.textContent ||
    ""
  return text.trim().toLowerCase().replace(/\s+/g, " ")
}

function isOptionalExperienceLikeSection(el) {
  let title = getModuleTitleNormalized(el)
  return !!(
    (title.includes("internship") && title.includes("experience")) ||
    (title.includes("project") && title.includes("experience")) ||
    title.includes("work samples") ||
    title.includes("honors and awards")
  )
}

function shouldAutoClickAddSection(el) {
  let title = getModuleTitleNormalized(el)
  let autoClickTitles = [
    "work experience",
    "language skills",
    "self-introduction",
    "sns",
  ]
  return (
    !!(
      autoClickTitles.some((name) => title === name) ||
      autoClickTitles.some((name) => title.includes(name))
    ) || (isOptionalExperienceLikeSection(el), false)
  )
}

async function clickAddAndWaitForFields(button) {
  let module = getModuleWrapper(button)
  let beforeCount = module
    ? module.querySelectorAll("input, select, textarea").length
    : document.querySelectorAll("input, select, textarea").length
  try {
    scrollIntoViewIfNeeded(button)
  } catch {
    // ignore
  }
  button.click()
  await observer.waitForCondition(
    () => {
      if (module) {
        let afterCount = module.querySelectorAll(
          "input, select, textarea",
        ).length
        if (afterCount > beforeCount) return true
      }
      return (
        document.querySelectorAll("input, select, textarea").length >
        beforeCount
      )
    },
    {
      timeout: 2000,
      interval: 100,
      observeTarget: module || document.body,
    },
  )
}

export function countEducationSections() {
  return rules.getEducationRules().length
}

export function countEmploymentSections() {
  return rules.getExperienceRules().length
}

function findModuleByKeywords(keywordSets) {
  let modules = Array.from(
    document.querySelectorAll('[class*="applyFormModuleWrapper__"]'),
  )
  for (let keywords of keywordSets) {
    let found = modules.find((module) => {
      let text =
        module.querySelector(".applyFormModuleWrapper-text")?.textContent ||
        module.querySelector(".applyFormModuleWrapper-title")?.textContent ||
        ""
      let title = (text || "").trim().toLowerCase()
      return keywords.every((keyword) => title.includes(keyword))
    })
    if (found) return found
  }
  return null
}

function findAddButtonInModule(module) {
  let direct = module.querySelector('[class*="apply-form-array-card-add"]')
  if (direct) return direct
  let buttons = Array.from(module.querySelectorAll("button.ud__button"))
  let withIcon = buttons.find((btn) => {
    let icon = btn.querySelector('[data-icon="AddOutlined"]')
    let text = (btn.textContent || "").trim().toLowerCase()
    return icon && text.includes("add")
  })
  return withIcon || null
}

export async function addEducationSection(count) {
  if (count <= 0) return
  let module = findModuleByKeywords([EDUCATION_MODULE_KEYWORDS])
  if (!module) return
  while (countEducationSections() < count) {
    let addBtn = findAddButtonInModule(module)
    if (!addBtn) return
    await clickAddAndWaitForFields(addBtn)
    await delay.delay(200)
  }
}

export async function addEmploymentSection(count) {
  if (count <= 0) return
  let module = findModuleByKeywords(EXPERIENCE_MODULE_KEYWORDS)
  if (!module) return
  while (countEmploymentSections() < count) {
    let addBtn = findAddButtonInModule(module)
    if (!addBtn) return
    await clickAddAndWaitForFields(addBtn)
    await delay.delay(200)
  }
}

function parseYearMonth(value) {
  if (!value || (value = String(value).trim()) === "") {
    return { year: "", month: "" }
  }
  let lower = value.toLowerCase()
  if (lower === "present") return { year: "Present", month: "" }

  let yearMonth = value.match(/^(20\d{2})[-/](\d{1,2})$/)
  if (yearMonth) {
    return {
      year: yearMonth[1],
      month: yearMonth[2].padStart(2, "0"),
    }
  }
  let yearOnly = value.match(/^(20\d{2})$/)
  return yearOnly
    ? { year: yearOnly[1], month: "" }
    : { year: value, month: "" }
}

function formatYearMonthValue(value, _isEnd = false) {
  if (!value || (value = String(value).trim()) === "") return value || ""
  if (value.toLowerCase() === "present") return "Present"
  let yearMonth = value.match(/^(20\d{2})[-/](\d{1,2})$/)
  if (yearMonth) {
    return `${yearMonth[1]}-${yearMonth[2].padStart(2, "0")}`
  }
  let yearOnly = value.match(/^(20\d{2})$/)
  return yearOnly ? `${yearOnly[1]}-01` : value
}

function getVisibleMonthPanel() {
  let panels = document.querySelectorAll(ATSX_MONTH_PANEL)
  for (let panel of panels) {
    let rect = panel.getBoundingClientRect()
    if (rect.width > 0 && rect.height > 0) return panel
  }
  return panels[0] ?? null
}

function clickMonthPanelItem(list, dataCy) {
  let item = list.querySelector(`${ATSX_MONTH_PANEL_ITEM}[data-cy="${dataCy}"]`)
  if (!item) return false
  let scrollParent = list.closest(".scrollbar-container") ?? list
  if (scrollParent && scrollParent !== document.body) {
    scrollParent.scrollTop = Math.max(
      0,
      item.offsetTop - scrollParent.clientHeight / 2,
    )
  }
  item.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  item.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  item.click()
  return true
}

async function fillAtsxDateRangePicker(hiddenInput, range) {
  let picker = hiddenInput.closest(".atsx-date-picker-period-month")
  if (!picker) return

  let hasStart = range.start != null && String(range.start).trim() !== ""
  let hasEnd = range.end != null && String(range.end).trim() !== ""
  if (!hasStart && !hasEnd) return

  let startFormatted = formatYearMonthValue(hasStart ? range.start : null, false)
  let endFormatted =
    range.end && String(range.end).trim().toLowerCase() === "present"
      ? "Present"
      : formatYearMonthValue(hasEnd ? (range.end ?? null) : null, true)

  let startParts = parseYearMonth(startFormatted)
  let rawEnd = hasEnd ? String(range.end ?? "").trim() : ""
  let endIsYearOnly = /^(20\d{2})$/.test(rawEnd)
  let endParts =
    endFormatted === "Present"
      ? { year: "Present", month: "" }
      : endIsYearOnly
        ? { year: rawEnd, month: "" }
        : parseYearMonth(endFormatted)

  scrollIntoViewIfNeeded(picker)
  await delay.delay(150)

  let labels = Array.from(
    picker.querySelectorAll(".atsx-date-picker-period-month-label"),
  )
  if (labels.length < 2) return

  let pickYearMonth = async (year, month) => {
    if (!year) return false
    let panel = getVisibleMonthPanel()
    if (!panel) return false
    let lists = Array.from(panel.querySelectorAll(ATSX_MONTH_PANEL_LIST))
    if (lists.length < 2) return false
    let yearList = lists[0]
    let monthList = lists[1]
    if (!clickMonthPanelItem(yearList, year)) return false
    await delay.delay(180)
    if (month && !clickMonthPanelItem(monthList, month)) return false
    await delay.delay(180)
    return true
  }

  if (hasStart) {
    labels[0].click()
    await delay.delay(350)
    await pickYearMonth(startParts.year, startParts.month)
    await delay.delay(150)
  }

  if (hasEnd) {
    labels[1].click()
    await delay.delay(350)
    if (endFormatted === "Present") {
      let panel = getVisibleMonthPanel()
      let presentByCy = panel?.querySelector(
        `${ATSX_MONTH_PANEL_ITEM}[data-cy="present"]`,
      )
      let presentByText = presentByCy
        ? null
        : Array.from(panel?.querySelectorAll(ATSX_MONTH_PANEL_ITEM) ?? []).find(
            (item) => (item.textContent || "").trim() === "Present",
          )
      let presentItem = presentByCy ?? presentByText
      if (presentItem) {
        presentItem.scrollIntoView({ block: "center", behavior: "auto" })
        presentItem.dispatchEvent(
          new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
        )
        presentItem.dispatchEvent(
          new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
        )
        presentItem.click()
      }
    } else {
      await pickYearMonth(endParts.year, endParts.month)
    }
    await delay.delay(150)
  }

  await closeOpenOverlays()
}

async function fillPhoneCountrySelect(input, areaCode, country) {
  if (!areaCode) return
  let group = input.closest(".ud__input-group")
  if (!group) return
  let selectRoot = group.querySelector(".ud__select")
  if (!selectRoot) return
  let selector = selectRoot.querySelector(".ud__select__selector")
  if (!selector) return

  let current = (
    selectRoot.querySelector(".ud__select__selector__selectItem")
      ?.textContent || ""
  ).trim()
  if (areaCode !== "+1" && current === areaCode) return

  let optionText = areaCode
  if (areaCode === "+1") {
    let countryNorm = normalizeCountryText(country)
    optionText =
      countryNorm === "ca" || countryNorm === "canada"
        ? "Canada"
        : "United States"
  }
  await fillUdSelect(
    selector,
    optionText,
    optionText === areaCode ? [] : [areaCode],
  )
}

export async function fillInputTextField(input, value, areaCode, country) {
  if (!input) return false

  let isRangeObject =
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    (value.start !== undefined || value.end !== undefined)

  if (
    input instanceof HTMLInputElement &&
    areaCode &&
    input.closest(".ud__input-group")
  ) {
    await fillPhoneCountrySelect(input, areaCode, country)
  }

  if (
    input instanceof HTMLInputElement &&
    (input.classList.contains("atsx-phone-input") ||
      input.closest(".atsx-phone"))
  ) {
    await ensurePhonePrefix(input, country)
  }

  if (
    input instanceof HTMLInputElement &&
    isRangeObject &&
    input.classList.contains("atsx-date-picker-period-hidden-input")
  ) {
    await fillAtsxDateRangePicker(input, value)
    return true
  }

  if (input instanceof HTMLInputElement && isRangeObject) {
    let throneWrapper = input.closest(
      ".throne-biz-date-range-picker-wrapper",
    )
    if (throneWrapper) return await fillThroneDateRangePicker(throneWrapper, value)
  }

  let textValue = typeof value === "object" ? value.start : value
  clearInputElement(input)
  await inputUtils.fillDefaultInputField(input, textValue)
  if (isRangeObject && input instanceof HTMLInputElement) {
    await blurAndCloseOverlays(input)
  }
  await delay.delay(50)
  return true
}

async function fillThroneDateRangePicker(wrapper, range) {
  let inputs = Array.from(wrapper.querySelectorAll(".ud__native-input"))
  let values = [
    String(range.start ?? "").trim(),
    String(range.end ?? "").trim(),
  ]
  for (let i = 0; i < inputs.length && i < values.length; i++) {
    let input = inputs[i]
    let value = values[i]
    if (!value) continue
    let typed = await typeDateIntoInput(input, value)
    if (typed) {
      await blurAndCloseOverlays(input)
      await delay.delay(80)
      continue
    }
    let picked = await pickDateFromCalendar(input, value)
    await blurAndCloseOverlays(input)
    await delay.delay(80)
    if (!picked) return false
  }
  return true
}

async function typeDateIntoInput(input, value) {
  let formatted = formatYearMonthValue(value)
  if (!formatted) return false
  scrollIntoViewIfNeeded(input)
  try {
    input.focus()
  } catch {
    // ignore
  }
  clearInputElement(input)
  await delay.delay(30)
  setNativeValue(input, "")
  input.setAttribute("value", "")
  input.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }))

  let built = ""
  for (let char of formatted) {
    dispatchBeforeInput(input, char)
    setNativeValue(input, (built += char))
    input.setAttribute("value", built)
    dispatchInputChar(input, char)
    await delay.delay(8)
  }
  input.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: true }),
  )
  input.dispatchEvent(
    new FocusEvent("blur", { bubbles: true, cancelable: true }),
  )
  try {
    input.blur()
  } catch {
    // ignore
  }
  await observer.waitForCondition(
    () => (input.value || "").trim() === formatted || null,
    { timeout: 800, interval: 50, observeTarget: input },
  )
  return (input.value || "").trim() === formatted
}

function dispatchBeforeInput(input, char) {
  if (typeof InputEvent === "function") {
    input.dispatchEvent(
      new InputEvent("beforeinput", {
        bubbles: true,
        cancelable: true,
        data: char,
        inputType: "insertText",
      }),
    )
    return
  }
  input.dispatchEvent(
    new Event("beforeinput", { bubbles: true, cancelable: true }),
  )
}

function dispatchInputChar(input, char) {
  if (typeof InputEvent === "function") {
    input.dispatchEvent(
      new InputEvent("input", {
        bubbles: true,
        cancelable: true,
        data: char,
        inputType: "insertText",
      }),
    )
    return
  }
  input.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }))
}

function getVisibleDateRangePanel() {
  let panels = Array.from(
    document.querySelectorAll(".throne-biz-date-range-picker-panel"),
  )
  return panels.find(isVisible) ?? null
}

async function waitForDateRangePanel() {
  await observer.waitForCondition(
    () => !!getVisibleDateRangePanel() || null,
    { timeout: 1200, interval: 80, observeTarget: document.body },
  )
  return getVisibleDateRangePanel()
}

function getPickerHeaderBtn(panel) {
  return panel.querySelector(".ud__picker-panel-header-btn")
}

function getInteractivePickerCells(panel) {
  return Array.from(
    panel.querySelectorAll(".ud__picker__cell-interactive-area"),
  ).filter(isVisible)
}

function getYearCells(panel) {
  return getInteractivePickerCells(panel).filter((cell) =>
    cell.closest(".ud__picker-year-panel-cell"),
  )
}

function getMonthCells(panel) {
  return getInteractivePickerCells(panel).filter((cell) =>
    cell.closest(".ud__picker-month-panel-cell"),
  )
}

function findCellByText(cells, text) {
  return cells.find((cell) => (cell.textContent || "").trim() === text) ?? null
}

function getPickerCellTarget(cell) {
  return (
    cell.closest(".ud__picker__cell") ||
    cell.closest(".ud__picker__cell__inner") ||
    cell
  )
}

function getPickerNavButtons(panel) {
  let header = panel.querySelector(".ud__picker-panel-header")
  return header
    ? Array.from(
        header.querySelectorAll(
          ":scope > button.ud__picker-panel-header-icon",
        ),
      ).filter(isVisible)
    : []
}

async function selectYearInPanel(panel, year) {
  let headerBtn = getPickerHeaderBtn(panel)
  if (!headerBtn) return false
  fullClick(headerBtn)
  await delay.delay(180)

  for (let i = 0; i < 8; i++) {
    let current = getVisibleDateRangePanel()
    if (!current) break
    let yearCells = getYearCells(current)
    let match = findCellByText(yearCells, year)
    if (match) {
      fullClick(getPickerCellTarget(match))
      fullClick(match)
      await delay.delay(180)
      return true
    }
    let years = yearCells
      .map((cell) => Number((cell.textContent || "").trim()))
      .filter((n) => Number.isFinite(n))
    if (years.length === 0) break
    let min = Math.min(...years)
    let max = Math.max(...years)
    let target = Number(year)
    let navButtons = getPickerNavButtons(current)
    let navBtn = target < min ? navButtons[0] : navButtons[1]
    if (!navBtn || (target >= min && target <= max)) break
    fullClick(navBtn)
    await delay.delay(180)
  }
  return false
}

async function selectMonthInPanel(panel, month) {
  let current = getVisibleDateRangePanel() ?? panel
  let match = findCellByText(getMonthCells(current), month)
  if (!match) return false
  fullClick(getPickerCellTarget(match))
  fullClick(match)
  await delay.delay(220)
  return true
}

async function pickDateFromCalendar(input, value) {
  let formatted = formatYearMonthValue(value)
  if (!formatted || formatted === "Present") return false
  let { year, month } = parseYearMonth(formatted)
  if (!year || !month) return false

  scrollIntoViewIfNeeded(input)
  let clickTarget =
    input.closest(".ud__input-input-wrap") ||
    input.closest(".throne-biz-date-range-picker-input") ||
    input
  fullClick(clickTarget)
  fullClick(input)
  await delay.delay(180)

  let panel = await waitForDateRangePanel()
  if (!panel || !(await selectYearInPanel(panel, year))) return false
  let monthPanel = getVisibleDateRangePanel()
  if (!(monthPanel && (await selectMonthInPanel(monthPanel, month)))) {
    return false
  }
  await observer.waitForCondition(
    () => (input.value || "").trim() === formatted || null,
    { timeout: 1200, interval: 80, observeTarget: input },
  )
  return (input.value || "").trim() === formatted
}

function setChecked(input, checked) {
  let proto = Object.getPrototypeOf(input)
  let setter = Object.getOwnPropertyDescriptor(proto, "checked")?.set
  if (setter) {
    setter.call(input, checked)
  } else {
    input.checked = checked
  }
  input.dispatchEvent(
    new Event("input", { bubbles: true, cancelable: true }),
  )
  input.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: true }),
  )
}

function clearInputElement(el) {
  if (!el || el.disabled) return false
  if (el instanceof HTMLInputElement) {
    let type = (el.type || "").toLowerCase()
    if (type === "file" || type === "hidden") return false
    if (type === "checkbox" || type === "radio") {
      return !!el.checked && (setChecked(el, false), true)
    }
  }
  let previous = el.value
  if (previous === "") return false
  let proto = Object.getPrototypeOf(el)
  let setter = Object.getOwnPropertyDescriptor(proto, "value")?.set
  if (setter) {
    setter.call(el, "")
  } else {
    el.value = ""
  }
  el.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }))
  el.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }))
  el.dispatchEvent(
    new FocusEvent("blur", { bubbles: true, cancelable: true }),
  )
  return true
}

function clearSelectElement(select) {
  if (!select || select.disabled) return false
  let previous = select.value
  let emptyIndex = Array.from(select.options).findIndex(
    (option) => (option.value || "").trim() === "",
  )
  if (emptyIndex >= 0) {
    select.selectedIndex = emptyIndex
  } else {
    select.selectedIndex = -1
  }
  select.dispatchEvent(
    new Event("input", { bubbles: true, cancelable: true }),
  )
  select.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: true }),
  )
  select.dispatchEvent(
    new FocusEvent("blur", { bubbles: true, cancelable: true }),
  )
  return previous !== select.value
}

function clearInputsIn(root) {
  let cleared = 0
  let inputs = Array.from(root.querySelectorAll("input, textarea"))
  for (let input of inputs) {
    if (clearInputElement(input)) cleared += 1
  }
  return cleared
}

function findSelectRoot(el) {
  if (el.matches(".ud__select, .ud-select-container, .ud-select-selector")) {
    return el
  }
  let closest = el.closest(".ud__select, .ud-select-container")
  return closest || el.querySelector(".ud__select, .ud-select-container")
}

function clearSelectSelections(root) {
  let selectRoot = findSelectRoot(root)
  if (!selectRoot) return 0
  let cleared = 0
  let clearBtn = selectRoot.querySelector(
    ".ud__select__selector__clear, .ud-select-clear, .ud-select-selector-clear",
  )
  if (clearBtn && isVisible(clearBtn)) {
    fullClick(clearBtn)
    cleared += 1
  }
  for (let i = 0; i < 30; i++) {
    let closeIcon =
      selectRoot.querySelector(".ud__tag__close-icon, .ud-tag-close-icon") ||
      selectRoot.querySelector('[data-icon="CloseBoldOutlined"]')
    if (!closeIcon) break
    let target =
      closeIcon.closest("button") || closeIcon.closest("span") || closeIcon
    if (!isVisible(target)) break
    fullClick(target)
    cleared += 1
  }
  return cleared
}

function normalizeCountryText(value) {
  return (value || "").trim().toLowerCase().replace(/\s+/g, " ")
}

function getPhonePrefixForCountry(country) {
  let normalized = normalizeCountryText(country)
  return normalized &&
    (normalized === "canada" || normalized === "united states")
    ? "+1"
    : null
}

async function ensurePhonePrefix(input, country) {
  let prefix = getPhonePrefixForCountry(country)
  if (!prefix) return
  let phoneRoot = input.closest(".atsx-phone") || null
  if (!phoneRoot) return
  let combobox =
    phoneRoot.querySelector('[data-cy="phonePrefix"]') ||
    phoneRoot.querySelector('.atsx-phone-select [role="combobox"]')
  if (!combobox) return
  let current =
    phoneRoot
      .querySelector('[data-cy="selectedValue"] [data-cy-value]')
      ?.getAttribute("data-cy-value") ||
    phoneRoot.querySelector('[data-cy="selectedValue"]')?.textContent ||
    ""
  if ((current || "").trim() === prefix) return
  fullClick(combobox)
  await delay.delay(150)
  await clickOptionInOverlays([prefix, prefix.replace("+", "")])
  await delay.delay(80)
}

function isVisible(el) {
  if (!el) return false
  let style = window.getComputedStyle(el)
  if (style.display === "none" || style.visibility === "hidden") return false
  let rect = el.getBoundingClientRect()
  return rect.width > 0 && rect.height > 0
}

function normalizeText(value) {
  return (value || "").replace(/\s+/g, " ").trim().toLowerCase()
}

export function shouldScrollElementIntoView(rect, viewportHeight) {
  return rect.top < 0 || rect.bottom > viewportHeight
}

function scrollIntoViewIfNeeded(el) {
  let rect = el.getBoundingClientRect()
  if (shouldScrollElementIntoView(rect, window.innerHeight)) {
    try {
      el.scrollIntoView({ block: "center", behavior: "auto" })
    } catch {
      // ignore
    }
  }
}

function mouseClick(el) {
  scrollIntoViewIfNeeded(el)
  el.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  el.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  el.click()
}

function isAnyDropdownVisible() {
  let dropdowns = Array.from(
    document.querySelectorAll(
      '[role="listbox"],.ud__select__dropdown,.ud-select-dropdown,[class*="select-dropdown"],[class*="dropdown-menu"]',
    ),
  )
  return dropdowns.some(isVisible)
}

function isAriaExpanded(el) {
  if (!el) return false
  let expanded = (el.getAttribute("aria-expanded") || "")
    .trim()
    .toLowerCase()
  return expanded === "true"
}

function findCombobox(el) {
  if (!el) return null
  return (
    (el.matches('[role="combobox"]') ? el : null) ||
    el.closest('[role="combobox"]')
  )
}

function hasOpenSelectDropdown(el) {
  return !!el && !!findSelectDropdown(el)
}

function resolveSelectClickTarget(el) {
  let candidates = [
    el,
    el?.closest(".ud-select-container, .ud__select"),
    document.activeElement,
  ]
  for (let candidate of candidates) {
    if (!candidate) continue
    if (
      candidate.matches(
        ".ud__select__selector, .ud-select-selector, .ud-select-arrow",
      )
    ) {
      return candidate
    }
    let root = candidate.closest(".ud-select-container, .ud__select")
    if (!root) continue
    let selector = root.querySelector(
      ".ud__select__selector, .ud-select-selector, .ud-select-arrow",
    )
    if (selector) return selector
  }
  return null
}

async function closeOpenOverlays(el) {
  let clickTarget = resolveSelectClickTarget(el)
  let combobox = findCombobox(clickTarget)
  let hasSelect = !!clickTarget
  let isOpen = () =>
    hasSelect
      ? isAriaExpanded(combobox) || hasOpenSelectDropdown(clickTarget)
      : isAnyDropdownVisible()

  let active = document.activeElement
  try {
    active?.blur?.()
  } catch {
    // ignore
  }
  dispatchEscape(active)
  dispatchEscape(el)
  dispatchEscape(document)
  dispatchEscape(window)
  await delay.delay(60)
  if (isOpen()) {
    dispatchEscape(document)
    dispatchEscape(window)
    await delay.delay(60)
    if (!isOpen()) return
  }
}

function dispatchEscape(target) {
  if (target && typeof target.dispatchEvent === "function") {
    target.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    )
    target.dispatchEvent(
      new KeyboardEvent("keyup", { key: "Escape", bubbles: true }),
    )
  }
}

function clickBody() {
  let body = document.body || document.documentElement
  if (!body) return
  body.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  body.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  body.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true }),
  )
}

async function blurAndCloseOverlays(el) {
  try {
    el.blur()
  } catch {
    // ignore
  }
  let active = document.activeElement
  try {
    active?.blur?.()
  } catch {
    // ignore
  }
  dispatchEscape(el)
  dispatchEscape(active)
  dispatchEscape(document)
  dispatchEscape(window)
  await delay.delay(40)
  clickBody()
  await delay.delay(40)
  dispatchEscape(document)
  dispatchEscape(window)
  await delay.delay(60)
}

function findExactOption(options, text) {
  let normalized = normalizeText(text)
  return (
    (normalized &&
      (options.find(
        (option) => normalizeText(option.textContent || "") === normalized,
      ) ||
        options.find((option) =>
          choiceMatch.isExactChoiceMatch(
            normalizeText(option.textContent || ""),
            normalized,
          ),
        ))) ||
    null
  )
}

function findOptionByCandidates(options, candidates) {
  let normalized = candidates.map(normalizeText).filter(Boolean)
  if (normalized.length === 0) return null
  return (
    options.find((option) =>
      normalized.includes(normalizeText(option.textContent || "")),
    ) ||
    options.find((option) => {
      let text = normalizeText(option.textContent || "")
      return normalized.some((candidate) =>
        choiceMatch.isExactChoiceMatch(text, candidate),
      )
    }) ||
    null
  )
}

async function clickOption(option) {
  scrollIntoViewIfNeeded(option)
  option.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  option.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  option.click()
  await delay.delay(120)
}

function getVisibleOverlays() {
  let overlays = Array.from(
    document.querySelectorAll(
      '[role="dialog"],[role="listbox"],[class*="picker"],[class*="calendar"],[class*="dropdown"],[class*="panel"],[class*="popover"],[class*="modal"]',
    ),
  )
  return overlays.filter(isVisible)
}

function findSelectDropdown(selector) {
  let collectItems = (root) =>
    Array.from(
      root.querySelectorAll('.ud__select__list__item,[role="option"],li'),
    ).filter((item) => isVisible(item) && !!(item.textContent || "").trim())

  let selectRoot = selector.closest(".ud__select")
  let nested = selectRoot
    ? Array.from(
        selectRoot.querySelectorAll(
          '.ud__select__dropdown,[role="listbox"]',
        ),
      )
    : []
  for (let dropdown of nested) {
    if (isVisible(dropdown) && collectItems(dropdown).length > 0) {
      return dropdown
    }
  }

  let selectorRect = selector.getBoundingClientRect()
  let dropdowns = Array.from(
    document.querySelectorAll('.ud__select__dropdown,[role="listbox"]'),
  ).filter(isVisible)
  let best = null
  for (let dropdown of dropdowns) {
    let items = collectItems(dropdown)
    if (items.length === 0) continue
    let rect = dropdown.getBoundingClientRect()
    let dx = (rect.left || 0) - (selectorRect.left || 0)
    let dy = (rect.top || 0) - (selectorRect.bottom || 0)
    let distance = Math.hypot(dx, dy)
    let widthDelta =
      selectorRect.width > 0
        ? Math.abs(rect.width - selectorRect.width) / selectorRect.width
        : 0
    let score = distance + 200 * widthDelta
    if (!best || score < best.score) {
      best = { el: dropdown, score }
    }
  }
  return best?.el || null
}

async function selectOptionInDropdown(selector, values) {
  let candidates = Array.isArray(values) ? values : [values]
  let dropdown = findSelectDropdown(selector)
  if (!dropdown) return false
  let options = Array.from(
    dropdown.querySelectorAll('.ud__select__list__item,[role="option"],li'),
  ).filter((item) => isVisible(item) && !!(item.textContent || "").trim())
  if (options.length === 0) return false
  let match = findOptionByCandidates(options, candidates)
  if (!match) return false
  await clickOption(match)
  return true
}

function fullClick(el) {
  if (!el || !isVisible(el)) return
  scrollIntoViewIfNeeded(el)
  let dispatchPointer = (type) => {
    if (typeof PointerEvent === "function") {
      el.dispatchEvent(
        new PointerEvent(type, { bubbles: true, cancelable: true }),
      )
    }
  }
  dispatchPointer("pointerover")
  dispatchPointer("pointerenter")
  el.dispatchEvent(
    new MouseEvent("mouseover", { bubbles: true, cancelable: true }),
  )
  el.dispatchEvent(
    new MouseEvent("mouseenter", { bubbles: true, cancelable: true }),
  )
  dispatchPointer("pointermove")
  el.dispatchEvent(
    new MouseEvent("mousemove", { bubbles: true, cancelable: true }),
  )
  dispatchPointer("pointerdown")
  el.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  try {
    el.focus?.()
  } catch {
    // ignore
  }
  el.dispatchEvent(
    new FocusEvent("focus", { bubbles: true, cancelable: true }),
  )
  dispatchPointer("pointerup")
  el.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  el.click()
}

async function clickOptionInOverlays(candidates) {
  let overlays = getVisibleOverlays()
  for (let overlay of overlays) {
    let nodes = Array.from(
      overlay.querySelectorAll(
        'button,[role="option"],[role="gridcell"],td,li,div,span',
      ),
    ).filter(isVisible)
    let match = findOptionByCandidates(nodes, candidates)
    if (match) {
      await clickOption(match)
      return true
    }
  }
  return false
}

function setNativeValue(input, value) {
  let proto = Object.getPrototypeOf(input)
  let setter = Object.getOwnPropertyDescriptor(proto, "value")?.set
  if (setter) {
    setter.call(input, value)
  } else {
    input.value = value
  }
}

function getSelectSearchInput(selector) {
  let selectRoot = selector.closest(".ud__select")
  return (
    selector.querySelector(".ud__select__selector__search__input") ||
    selectRoot?.querySelector(".ud__select__selector__search__input") ||
    null
  )
}

function getSelectedSelectText(selector) {
  let selectRoot = selector.closest(".ud__select")
  return selectRoot
    ? (
        selectRoot.querySelector(".ud__select__selector__selectItem")
          ?.textContent || ""
      ).trim()
    : ""
}

function dispatchKey(target, key) {
  target.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true }))
  target.dispatchEvent(new KeyboardEvent("keyup", { key, bubbles: true }))
}

async function selectViaKeyboardNav(selector, candidates) {
  let dropdown = findSelectDropdown(selector)
  if (!dropdown) return false
  let holder = dropdown.querySelector(".rc-virtual-list-holder")
  if (!holder) return false
  let content = holder.firstElementChild
  if (!content) return false

  let scrollHeight = content.scrollHeight || content.offsetHeight
  let item = dropdown.querySelector(".ud__select__list__item")
  let itemHeight = item?.offsetHeight || 32
  let steps = Math.ceil(scrollHeight / itemHeight) + 5
  let normalized = candidates.map(normalizeText).filter(Boolean)
  if (normalized.length === 0) return false

  dispatchKey(holder, "Home")
  await delay.delay(40)
  for (let i = 0; i < steps; i++) {
    dispatchKey(holder, "ArrowDown")
    await delay.delay(30)
    let active = dropdown.querySelector(".ud__select__list__item-active")
    if (!active) continue
    let text = normalizeText(active.textContent || "")
    if (!text) continue
    let matched = normalized.some((candidate) =>
      choiceMatch.isExactChoiceMatch(text, candidate),
    )
    if (matched) {
      dispatchKey(holder, "Enter")
      await delay.delay(120)
      return true
    }
  }
  return false
}

async function fillUdSelect(selector, primary, extras = []) {
  let candidates = [primary, ...extras]
    .map((value) => String(value).trim())
    .filter(Boolean)
  if (candidates.length === 0) return false

  mouseClick(selector)
  await delay.delay(180)

  let searchInput = getSelectSearchInput(selector)
  if (searchInput) {
    searchInput.focus()
    setNativeValue(searchInput, "")
    searchInput.dispatchEvent(new Event("input", { bubbles: true }))
    searchInput.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(60)
    setNativeValue(searchInput, primary)
    searchInput.dispatchEvent(new Event("input", { bubbles: true }))
    searchInput.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(180)
  }

  let selected = await selectOptionInDropdown(selector, candidates)
  if (!selected) selected = await clickOptionInOverlays(candidates)
  if (!selected) selected = await selectViaKeyboardNav(selector, candidates)
  await closeOpenOverlays(selector)

  let selectedText = normalizeText(getSelectedSelectText(selector))
  let matches = candidates
    .map(normalizeText)
    .some(
      (candidate) =>
        !!candidate && choiceMatch.isExactChoiceMatch(selectedText, candidate),
    )
  return matches || selected
}

export async function fillSelectField(rule, value) {
  let values = Array.isArray(value)
    ? value.map((item) => String(item))
    : value == null
      ? []
      : [String(value)]
  if (!rule.$input || values.length === 0) return

  if (rule.$input instanceof HTMLSelectElement) {
    let select = rule.$input
    let target = values[0]?.trim().toLowerCase()
    if (!target) return
    let index = -1
    for (let i = 0; i < select.options.length; i++) {
      let option = select.options[i]
      let text = (option.textContent || option.value || "")
        .trim()
        .toLowerCase()
      let optionValue = (option.value || "").trim().toLowerCase()
      if (
        choiceMatch.isExactChoiceMatch(text, target) ||
        choiceMatch.isExactChoiceMatch(optionValue, target)
      ) {
        index = i
        break
      }
    }
    if (index >= 0) {
      clearSelectElement(select)
      select.focus()
      select.selectedIndex = index
      select.dispatchEvent(new Event("input", { bubbles: true }))
      select.dispatchEvent(new Event("change", { bubbles: true }))
      select.blur()
      await delay.delay(50)
    }
    return
  }

  if (rule.$input instanceof HTMLElement) {
    let udSelect = rule.$input.closest?.(
      ".ud__select, .ud-select-container",
    )
    if (udSelect) {
      let candidates = values
        .map((item) => String(item).trim())
        .filter(Boolean)
      if (candidates.length === 0) return
      let selector =
        udSelect.querySelector(
          ".ud__select__selector, .ud-select-selector",
        ) || rule.$input
      await closeOpenOverlays(selector)
      let anySelected = false
      for (let candidate of candidates) {
        let ok = await fillUdSelect(selector, candidate)
        if (ok) anySelected = true
        await delay.delay(80)
      }
      if (!anySelected) return
      clearSelectSelections(udSelect)
      await delay.delay(60)
      await closeOpenOverlays(selector)
      for (let candidate of candidates) {
        await fillUdSelect(selector, candidate)
        await delay.delay(80)
      }
      return
    }

    let text = values[0]?.trim()
    if (!text) return
    clearInputsIn(rule.$input)
    let combobox =
      rule.$input.getAttribute("role") === "combobox"
        ? rule.$input
        : rule.$input.querySelector('[role="combobox"]')
    let search =
      rule.$input.querySelector("input.atsx-select-search__field") ||
      combobox?.querySelector("input.atsx-select-search__field")
    combobox?.click()
    await delay.delay(150)
    if (search) {
      search.focus()
      search.value = ""
      search.dispatchEvent(new Event("input", { bubbles: true }))
      await delay.delay(50)
      search.value = text
      search.dispatchEvent(new Event("input", { bubbles: true }))
      search.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(200)
    }
    let controlsId = combobox?.getAttribute("aria-controls") || ""
    let listbox =
      (controlsId ? document.getElementById(controlsId) : null) ||
      document.querySelector('[role="listbox"]')
    if (listbox) {
      let options = Array.from(
        listbox.querySelectorAll('[role="option"], li, div'),
      ).filter((item) => (item.textContent || "").trim())
      let match = findExactOption(options, text) || options[0]
      if (match) await clickOption(match)
    }
  }
}

export async function fillCheckboxField(rule, value) {
  let values = Array.isArray(value)
    ? value.map((item) => String(item))
    : value == null
      ? []
      : [String(value)]
  if (!rule.$checkboxs || rule.$checkboxs.length === 0 || values.length === 0) {
    return
  }

  for (let checkbox of rule.$checkboxs) {
    if (checkbox.checked) setChecked(checkbox, false)
  }

  let normalized = values
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean)
  let wantsTrue = normalized.some((item) =>
    ["true", "yes", "y", "1"].includes(item),
  )
  let wantsFalse = normalized.some((item) =>
    ["false", "no", "n", "0"].includes(item),
  )
  let first = rule.$checkboxs[0]
  if (wantsTrue && !first.checked) {
    first.click()
    await delay.delay(50)
    return
  }
  if (wantsFalse) {
    await delay.delay(50)
    return
  }

  for (let checkbox of rule.$checkboxs) {
    let labelText = (
      checkbox.closest("label")?.textContent ||
      checkbox.value ||
      ""
    ).trim()
    let labelLower = labelText.toLowerCase()
    let matched = normalized.some((item) =>
      choiceMatch.isExactChoiceMatch(item, labelLower),
    )
    if (matched && !checkbox.checked) {
      checkbox.click()
      await delay.delay(50)
    }
  }
}

export async function fillRadioGroupFiled(rule, value) {
  let values = Array.isArray(value)
    ? value.map((item) => String(item))
    : value == null
      ? []
      : [String(value)]
  let target = values[0]?.trim().toLowerCase()
  if (!target) return

  let parent = rule.$radioParent || rule.$label || document.body
  let radios = xpath.getOrderedNodesSafe(
    './/input[@type="radio"]',
    parent,
  )
  let match = choiceMatch.findExactChoice(
    radios,
    target,
    (radio) => {
      let label = document.querySelector(`label[for="${radio.id}"]`)
      return label?.textContent || radio.value
    },
    (radio) => radio.value,
  )
  if (match) {
    for (let radio of radios) {
      if (radio.checked) setChecked(radio, false)
    }
    if (!match.checked) {
      match.click()
      await delay.delay(50)
    }
  }
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  let input =
    xpath.getFirstOrderedNodeSafe(
      './/input[@type="file" and (contains(@accept, "pdf") or contains(@accept, ".pdf") or not(@accept))]',
    ) || document.querySelector('input[type="file"]')
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

export async function removeResume() {
  let deleteBtn =
    Array.from(
      document.querySelectorAll(
        ".uploadFile-loadedOperates .uploadFile-loadedOperate",
      ),
    ).find(
      (el) => (el.textContent || "").trim().toLowerCase() === "delete",
    ) || null
  if (deleteBtn) {
    deleteBtn.click()
    await delay.delay(200)
  }
}
