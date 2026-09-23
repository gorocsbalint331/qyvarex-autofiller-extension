// @ts-nocheck
/**
 * TikTok — DOM fill operations (sections, dates, selects, resume).
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as inputUtils from "../../crawler/fill-utils/input.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as observer from "../../methods/observer.ts"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as dateUtils from "./date-utils.ts"
import * as rules from "./rules.ts"

const EDUCATION_SECTION_KEYWORDS = ["education"]
const EMPLOYMENT_SECTION_KEYWORDS = [["work", "experience"]]

export async function preFillForm() {
  await clickAddAllFormSections()
  await delay.delay(200)
}

export async function clickAddExperienceSection() {
  const buttons = discoverEmptySectionAddButtons()
  const experienceButton = buttons.find((button) =>
    getSectionTitleText(button).includes("work experience"),
  )
  experienceButton && (await expandSectionByAddButton(experienceButton))
}

export async function clickAddAllFormSections() {
  const buttons = discoverEmptySectionAddButtons()
  if (
    (console.debug(
      `[tiktok][prefill] discovered ${buttons.length} empty section Add button(s)`,
    ),
    0 !== buttons.length)
  )
    for (const button of buttons)
      shouldPrefillExpandSection(button) &&
        (await expandSectionByAddButton(button))
}

function discoverEmptySectionAddButtons() {
  const selectors = [
    ".createFormSection-addBtn",
    '[class*="apply-form-array-card-add"]',
  ]
  const nodes = selectors.flatMap((selector) =>
    Array.from(document.querySelectorAll(selector)),
  )
  return Array.from(new Set(nodes)).filter((node) =>
    (node.textContent || "").trim().toLowerCase().includes("add"),
  )
}

function getSectionContainer(node) {
  return (
    node.closest('[class*="applyFormModuleWrapper__"]') ||
    node.closest('[class*="createFormSection__"]')
  )
}

function getSectionTitleText(node) {
  const container = getSectionContainer(node)
  const title =
    container?.querySelector(".applyFormModuleWrapper-text")?.textContent ||
    container?.querySelector(".applyFormModuleWrapper-title")?.textContent ||
    container?.querySelector(".createFormSection-title")?.textContent ||
    container?.querySelector(".createFormSection-text")?.textContent ||
    ""
  return title
    .trim()
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
}

function isOptionalExperienceSection(node) {
  const title = getSectionTitleText(node)
  return !!(
    (title.includes("internship") && title.includes("experience")) ||
    (title.includes("project") && title.includes("experience")) ||
    title.includes("work samples") ||
    title.includes("honors and awards")
  )
}

function shouldPrefillExpandSection(node) {
  const title = getSectionTitleText(node)
  const alwaysExpand = [
    "work experience",
    "language skills",
    "self introduction",
    "sns",
  ]
  return (
    !!(
      alwaysExpand.some((item) => title === item) ||
      alwaysExpand.some((item) => title.includes(item))
    ) || (isOptionalExperienceSection(node), false)
  )
}

async function expandSectionByAddButton(button) {
  const container = getSectionContainer(button)
  const title = getSectionTitleText(button) || "unknown"
  const sectionControlCount = container
    ? container.querySelectorAll("input, select, textarea").length
    : null
  const pageControlCount = document.querySelectorAll(
    "input, select, textarea",
  ).length
  console.debug(
    `[tiktok][prefill] expanding "${title}", section controls before=${sectionControlCount ?? "n/a"}`,
  )
  try {
    button.scrollIntoView({ block: "center", behavior: "auto" })
  } catch {}
  button.click()
  const rendered = await observer.waitForCondition(
    () => {
      if (container && null !== sectionControlCount) {
        const nextCount = container.querySelectorAll(
          "input, select, textarea",
        ).length
        return nextCount > sectionControlCount
      }
      return (
        document.querySelectorAll("input, select, textarea").length >
        pageControlCount
      )
    },
    { timeout: 2e3, interval: 100, observeTarget: container || document.body },
  )
  if (rendered) {
    const afterCount = container
      ? container.querySelectorAll("input, select, textarea").length
      : document.querySelectorAll("input, select, textarea").length
    console.debug(
      `[tiktok][prefill] "${title}" rendered, controls after=${afterCount}`,
    )
  } else
    console.warn(
      `[tiktok][prefill] "${title}" did not render fields within 2000ms`,
    )
}

export function countEducationSections() {
  return rules.getEducationRules().length
}

export function countEmploymentSections() {
  return rules.getExperienceRules().length
}

function findSectionByKeywords(keywordGroups) {
  const selectors = [
    '[class*="applyFormModuleWrapper__"]',
    '[class*="createFormSection__"]',
  ]
  const sections = Array.from(
    new Set(
      selectors.flatMap((selector) =>
        Array.from(document.querySelectorAll(selector)),
      ),
    ),
  )
  for (const keywords of keywordGroups) {
    const match = sections.find((section) => {
      const title =
        section.querySelector(".applyFormModuleWrapper-text")?.textContent ||
        section.querySelector(".applyFormModuleWrapper-title")?.textContent ||
        section.querySelector(".createFormSection-text")?.textContent ||
        section.querySelector(".createFormSection-title")?.textContent ||
        ""
      const normalized = (title || "").trim().toLowerCase()
      return keywords.every((keyword) => normalized.includes(keyword))
    })
    if (match) return match
  }
  return null
}

function findSectionAddButton(section) {
  const arrayCardAdd = section.querySelector(
    '[class*="apply-form-array-card-add"]',
  )
  if (arrayCardAdd) return arrayCardAdd
  const formOperateAdd = section.querySelector(".formOperate-addBtn")
  if (formOperateAdd) return formOperateAdd
  const createFormAdd = section.querySelector(".createFormSection-addBtn")
  if (createFormAdd) return createFormAdd
  const buttons = Array.from(section.querySelectorAll("button.ud__button"))
  const addOutlined = buttons.find((button) => {
    const hasIcon = !!button.querySelector('[data-icon="AddOutlined"]')
    const text = (button.textContent || "").trim().toLowerCase()
    return hasIcon && "add" === text
  })
  return addOutlined || null
}

export async function addEducationSection(targetCount) {
  if (targetCount <= 0) return
  const section = findSectionByKeywords([EDUCATION_SECTION_KEYWORDS])
  if (section)
    for (; countEducationSections() < targetCount; ) {
      const addButton = findSectionAddButton(section)
      if (!addButton) return
      await expandSectionByAddButton(addButton)
      await delay.delay(200)
    }
}

export async function addEmploymentSection(targetCount) {
  if (targetCount <= 0) return
  const section = findSectionByKeywords(EMPLOYMENT_SECTION_KEYWORDS)
  if (section)
    for (; countEmploymentSections() < targetCount; ) {
      const addButton = findSectionAddButton(section)
      if (!addButton) return
      await expandSectionByAddButton(addButton)
      await delay.delay(200)
    }
}

const DATE_PANEL_SELECTOR = ".atsx-date-picker-period-month-panel"
const DATE_PANEL_LIST_SELECTOR = ".atsx-date-picker-period-month-panel-list"
const DATE_PANEL_ITEM_SELECTOR =
  ".atsx-date-picker-period-month-panel-list-item"

function getVisibleDatePanel() {
  const panels = document.querySelectorAll(DATE_PANEL_SELECTOR)
  for (const panel of panels) {
    const rect = panel.getBoundingClientRect()
    if (rect.width > 0 && rect.height > 0) return panel
  }
  return panels[0] ?? null
}

function clickDatePanelItem(listEl, dataCy) {
  const item = listEl.querySelector(`${DATE_PANEL_ITEM_SELECTOR}[data-cy="${dataCy}"]`)
  if (!item) return false
  item.scrollIntoView({ block: "center", behavior: "auto" })
  const scrollParent = item.closest(".scrollbar-container") ?? listEl
  scrollParent &&
    scrollParent !== document.body &&
    (scrollParent.scrollTop = Math.max(
      0,
      item.offsetTop - scrollParent.clientHeight / 2,
    ))
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
  const root = hiddenInput.closest(".atsx-date-picker-period-month")
  if (!root) return false
  const hasStart = null != range.start && "" !== String(range.start).trim()
  const hasEnd = null != range.end && "" !== String(range.end).trim()
  if (!hasStart && !hasEnd) return false
  const startValue = dateUtils.ensureTikTokFullMonth(hasStart ? range.start : null)
  const endValue =
    range.end && "present" === String(range.end).trim().toLowerCase()
      ? "Present"
      : dateUtils.ensureTikTokFullMonth(hasEnd ? (range.end ?? null) : null)
  const startParts = dateUtils.parseTikTokYearMonthForDisplay(startValue)
  const endRaw = hasEnd ? String(range.end ?? "").trim() : ""
  const endIsYearOnly = /^(?:19|20)\d{2}$/.test(endRaw)
  const endParts =
    "Present" === endValue
      ? { year: "Present", month: "" }
      : endIsYearOnly
        ? { year: endRaw, month: "" }
        : dateUtils.parseTikTokYearMonthForDisplay(endValue)
  scrollIntoViewCenter(root)
  await delay.delay(150)
  const labels = Array.from(
    root.querySelectorAll(".atsx-date-picker-period-month-label"),
  )
  if (labels.length < 2) return false
  const pickYearMonth = async (year, month) => {
    if (!year) return false
    const panel = getVisibleDatePanel()
    if (!panel) return false
    const lists = Array.from(panel.querySelectorAll(DATE_PANEL_LIST_SELECTOR))
    if (lists.length < 2) return false
    const yearList = lists[0]
    const monthList = lists[1]
    return (
      !!clickDatePanelItem(yearList, year) &&
      (await delay.delay(180),
      (!month || !!clickDatePanelItem(monthList, month)) &&
        (await delay.delay(180), true))
    )
  }
  if (hasStart) {
    labels[0].click()
    await delay.delay(350)
    const ok = await pickYearMonth(startParts.year, startParts.month)
    if (!ok) return false
    await delay.delay(150)
  }
  if (hasEnd) {
    if ((labels[1].click(), await delay.delay(350), "Present" === endValue)) {
      const panel = getVisibleDatePanel()
      const presentByCy = panel?.querySelector(
        `${DATE_PANEL_ITEM_SELECTOR}[data-cy="present"]`,
      )
      const presentByText = presentByCy
        ? null
        : Array.from(panel?.querySelectorAll(DATE_PANEL_ITEM_SELECTOR) ?? []).find(
            (item) => "Present" === (item.textContent || "").trim(),
          )
      const presentItem = presentByCy ?? presentByText
      if (!presentItem) return false
      presentItem.scrollIntoView({ block: "center", behavior: "auto" })
      presentItem.dispatchEvent(
        new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
      )
      presentItem.dispatchEvent(
        new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
      )
      presentItem.click()
    } else {
      const ok = await pickYearMonth(endParts.year, endParts.month)
      if (!ok) return false
    }
    await delay.delay(150)
  }
  return (await dismissOverlaysWithEscape(), true)
}

async function fillUsdsDateRangeInputs(anchorInput, range) {
  const inputs = rules.getTikTokUsdsDateRangeInputs(anchorInput)
  if (inputs.length < 2) return false
  const [startInput, endInput] = inputs
  const start = String(range.start || "").trim()
  const end = String(range.end || "").trim()
  return (
    (!!start || !!end) &&
    (start && (await inputUtils.fillDefaultInputField(startInput, start)),
    end && (await inputUtils.fillDefaultInputField(endInput, end)),
    await closeUsdsDatePicker(end ? endInput : startInput),
    true)
  )
}

function dispatchEscape(target) {
  target &&
    "function" == typeof target.dispatchEvent &&
    (target.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    ),
    target.dispatchEvent(
      new KeyboardEvent("keyup", { key: "Escape", bubbles: true }),
    ))
}

function clickDocumentBody() {
  const body = document.body || document.documentElement
  body &&
    (body.dispatchEvent(
      new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
    ),
    body.dispatchEvent(
      new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
    ),
    body.dispatchEvent(
      new MouseEvent("click", { bubbles: true, cancelable: true }),
    ))
}

async function closeUsdsDatePicker(input) {
  console.debug("[tiktok][date] closing USDS date picker after range write")
  try {
    input.blur()
  } catch {}
  const active = document.activeElement
  try {
    active?.blur?.()
  } catch {}
  const win = "undefined" == typeof window ? null : window
  dispatchEscape(input)
  dispatchEscape(active)
  dispatchEscape(document)
  dispatchEscape(win)
  await delay.delay(40)
  clickDocumentBody()
  await delay.delay(40)
  dispatchEscape(document)
  dispatchEscape(win)
  await delay.delay(60)
  console.debug("[tiktok][date] USDS date picker close sequence completed")
}

export async function fillInputTextField(input, value) {
  if (!input) return false
  if (
    input instanceof HTMLInputElement &&
    "object" == typeof value &&
    null !== value &&
    !Array.isArray(value) &&
    (void 0 !== value.start || void 0 !== value.end) &&
    input.classList.contains("atsx-date-picker-period-hidden-input")
  )
    return fillAtsxDateRangePicker(input, value)
  if (
    input instanceof HTMLInputElement &&
    "object" == typeof value &&
    null !== value &&
    !Array.isArray(value) &&
    (void 0 !== value.start || void 0 !== value.end)
  ) {
    const filled = await fillUsdsDateRangeInputs(input, value)
    if (filled) return true
  }
  const text = "object" == typeof value ? value.start : value
  return (
    await inputUtils.fillDefaultInputField(input, text),
    await delay.delay(50),
    true
  )
}

function isVisibleElement(el) {
  if (!el) return false
  const style = window.getComputedStyle(el)
  if ("none" === style.display || "hidden" === style.visibility) return false
  const rect = el.getBoundingClientRect()
  return rect.width > 0 && rect.height > 0
}

function normalizeChoiceText(text) {
  return (text || "").replace(/\s+/g, " ").trim().toLowerCase()
}

function scrollIntoViewCenter(el) {
  try {
    el.scrollIntoView({ block: "center", behavior: "auto" })
  } catch {}
}

function clickElement(el) {
  scrollIntoViewCenter(el)
  el.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  el.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  el.click()
}

async function dismissOverlaysWithEscape() {
  document.dispatchEvent(
    new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
  )
  document.dispatchEvent(
    new KeyboardEvent("keyup", { key: "Escape", bubbles: true }),
  )
  await delay.delay(80)
}

function findExactOptionByText(options, text) {
  const normalized = normalizeChoiceText(text)
  return (
    (normalized &&
      choiceMatch.findExactChoice(options, text, (option) => option.textContent)) ||
    null
  )
}

async function clickSelectOption(option) {
  scrollIntoViewCenter(option)
  option.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  option.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  option.click()
  await delay.delay(120)
}

function findOpenUdSelectDropdown(anchor) {
  const selectRoot = anchor.closest(".ud__select")
  const nested = selectRoot?.querySelector(".ud__select__dropdown")
  if (nested && isVisibleElement(nested)) return nested
  const anchorRect = anchor.getBoundingClientRect()
  const dropdowns = Array.from(
    document.querySelectorAll(".ud__select__dropdown"),
  ).filter(isVisibleElement)
  let best = null
  for (const dropdown of dropdowns) {
    const items = dropdown.querySelectorAll(".ud__select__list__item")
    if (!items || 0 === items.length) continue
    const rect = dropdown.getBoundingClientRect()
    const dx = (rect.left || 0) - (anchorRect.left || 0)
    const dy = (rect.top || 0) - (anchorRect.bottom || 0)
    const distance = Math.hypot(dx, dy)
    const widthDelta =
      anchorRect.width > 0
        ? Math.abs(rect.width - anchorRect.width) / anchorRect.width
        : 0
    const score = distance + 200 * widthDelta
    ;(!best || score < best.score) && (best = { el: dropdown, score })
  }
  return best?.el || null
}

async function selectUdDropdownOption(anchor, text) {
  const dropdown = findOpenUdSelectDropdown(anchor)
  if (!dropdown) return false
  const options = Array.from(
    dropdown.querySelectorAll(".ud__select__list__item"),
  ).filter(isVisibleElement)
  if (0 === options.length) return false
  const match = findExactOptionByText(options, text)
  return !!match && (await clickSelectOption(match), true)
}

export async function fillSelectField(rule, value) {
  const values = Array.isArray(value)
    ? value.map((item) => String(item))
    : null == value
      ? []
      : [String(value)]
  if (rule.$input && 0 !== values.length) {
    if (rule.$input instanceof HTMLSelectElement) {
      const select = rule.$input
      const needle = values[0]?.trim().toLowerCase()
      if (!needle) return
      const options = Array.from(select.options)
      const match = choiceMatch.findExactChoice(
        options,
        values[0],
        (option) => option.textContent,
        (option) => option.value,
      )
      const index = match ? options.indexOf(match) : -1
      index >= 0 &&
        (select.focus(),
        (select.selectedIndex = index),
        select.dispatchEvent(new Event("input", { bubbles: true })),
        select.dispatchEvent(new Event("change", { bubbles: true })),
        select.blur(),
        await delay.delay(50))
      return
    }
    if (rule.$input instanceof HTMLElement) {
      const udSelect = rule.$input.closest?.(".ud__select")
      if (udSelect) {
        const choices = values
          .map((item) => String(item).trim())
          .filter(Boolean)
        if (0 === choices.length) return
        for (const choice of (clickElement(rule.$input),
        await delay.delay(200),
        choices))
          await selectUdDropdownOption(rule.$input, choice),
            await delay.delay(120)
        await dismissOverlaysWithEscape()
        return
      }
      const first = values[0]?.trim()
      if (!first) return
      const combobox =
        "combobox" === rule.$input.getAttribute("role")
          ? rule.$input
          : rule.$input.querySelector('[role="combobox"]')
      const searchInput =
        rule.$input.querySelector("input.atsx-select-search__field") ||
        combobox?.querySelector("input.atsx-select-search__field")
      combobox?.click()
      await delay.delay(150)
      searchInput &&
        (searchInput.focus(),
        (searchInput.value = ""),
        searchInput.dispatchEvent(new Event("input", { bubbles: true })),
        await delay.delay(50),
        (searchInput.value = first),
        searchInput.dispatchEvent(new Event("input", { bubbles: true })),
        searchInput.dispatchEvent(new Event("change", { bubbles: true })),
        await delay.delay(200))
      const ariaControls = combobox?.getAttribute("aria-controls") || ""
      const listbox =
        (ariaControls ? document.getElementById(ariaControls) : null) ||
        document.querySelector('[role="listbox"]')
      if (listbox) {
        const options = Array.from(
          listbox.querySelectorAll('[role="option"], li, div'),
        ).filter((option) => (option.textContent || "").trim())
        const isPhoneCountryCode =
          "phone country code" === normalizeChoiceText(rule.label)
        const match = isPhoneCountryCode
          ? options.find(
              (option) =>
                normalizeChoiceText(option.textContent || "") ===
                normalizeChoiceText(first),
            ) || null
          : findExactOptionByText(options, first) || options[0]
        isPhoneCountryCode &&
          console.debug(
            `[tiktok][phone] ATSX country-code exact match=${!!match} candidates=${options.length}`,
          )
        match
          ? await clickSelectOption(match)
          : isPhoneCountryCode && (await dismissOverlaysWithEscape())
      }
      return
    }
  }
}

export async function fillCheckboxField(rule, value) {
  const values = Array.isArray(value)
    ? value.map((item) => String(item))
    : null == value
      ? []
      : [String(value)]
  if (!rule.$checkboxs || 0 === rule.$checkboxs.length || 0 === values.length)
    return
  const normalized = values
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean)
  const wantsTrue = normalized.some((item) =>
    ["true", "yes", "y", "1"].includes(item),
  )
  const wantsFalse = normalized.some((item) =>
    ["false", "no", "n", "0"].includes(item),
  )
  const firstCheckbox = rule.$checkboxs[0]
  if (
    (1 === rule.$checkboxs.length && wantsTrue && !firstCheckbox.checked) ||
    (1 === rule.$checkboxs.length && wantsFalse && firstCheckbox.checked)
  ) {
    firstCheckbox.click()
    await delay.delay(50)
    return
  }
  const checkboxes = Array.from(rule.$checkboxs)
  const matched = new Set(
    normalized
      .map((item) =>
        choiceMatch.findExactChoice(
          checkboxes,
          item,
          (checkbox) =>
            checkbox.closest("label")?.textContent || checkbox.value,
        ),
      )
      .filter(Boolean),
  )
  for (const checkbox of checkboxes) {
    const shouldCheck = matched.has(checkbox)
    shouldCheck &&
      !checkbox.checked &&
      (checkbox.click(), await delay.delay(50))
  }
}

export async function fillRadioGroupFiled(rule, value) {
  const values = Array.isArray(value)
    ? value.map((item) => String(item))
    : null == value
      ? []
      : [String(value)]
  const needle = values[0]?.trim().toLowerCase()
  if (!needle) return
  const root = rule.$radioParent || rule.$label || document.body
  const radios = xpath.getOrderedNodesSafe('.//input[@type="radio"]', root)
  for (const radio of radios) {
    const label = document.querySelector(`label[for="${radio.id}"]`)
    const labelText = (label?.textContent || radio.value || "")
      .trim()
      .toLowerCase()
    const isMatch = choiceMatch.isExactChoiceMatch(labelText, needle)
    if (isMatch) {
      radio.checked || (radio.click(), await delay.delay(50))
      return
    }
  }
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const fileInput =
    xpath.getFirstOrderedNodeSafe(
      './/input[@type="file" and (contains(@accept, "pdf") or contains(@accept, ".pdf") or not(@accept))]',
    ) || document.querySelector('input[type="file"]')
  fileInput &&
    (await dom.uploadFiles(
      fileInput,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      updateRequired,
      updateFilled,
      "Resume/CV",
    ))
}

const OTHERS_CONDITIONAL_LABELS = [
  "which social networking platform",
  "where else did you hear",
]

function getFormilyItemLabel(item) {
  const labelEl =
    item.querySelector(".ud-formily-item-label-content") ||
    item.querySelector(".ud-formily-item-label")
  return (labelEl?.textContent || "")
    .replace(/\*+\s*$/g, "")
    .trim()
    .replace(/\s+/g, " ")
}

function findRegularAnswerByLabel(regular, label) {
  const needle = normalizeChoiceText(label)
  if (needle) {
    for (const [key, value] of Object.entries(regular))
      if (
        normalizeChoiceText(key) === needle ||
        normalizeChoiceText(key).includes(needle) ||
        needle.includes(normalizeChoiceText(key))
      )
        return value
  }
}

export async function fillOthersConditionalFields(regular) {
  if (!regular || "object" != typeof regular) return
  const appeared = await observer.waitForCondition(
    () => {
      const items = Array.from(document.querySelectorAll(".ud-formily-item"))
      return items.some((item) => {
        const label = getFormilyItemLabel(item)
        return OTHERS_CONDITIONAL_LABELS.some((needle) =>
          normalizeChoiceText(label).includes(needle),
        )
      })
    },
    { timeout: 2500, interval: 150, observeTarget: document.body },
  )
  if (!appeared) return
  await delay.delay(200)
  const items = Array.from(document.querySelectorAll(".ud-formily-item"))
  for (const item of items) {
    const label = getFormilyItemLabel(item)
    const isTarget = OTHERS_CONDITIONAL_LABELS.some((needle) =>
      normalizeChoiceText(label).includes(needle),
    )
    if (!isTarget) continue
    const answer = findRegularAnswerByLabel(regular, label)
    if (null == answer) continue
    const selector = item.querySelector(".ud__select .ud__select__selector")
    if (selector) {
      const choices = Array.isArray(answer)
        ? answer.map((item) => String(item).trim()).filter(Boolean)
        : [String(answer).trim()].filter(Boolean)
      if (0 === choices.length) continue
      for (const choice of (clickElement(selector),
      await delay.delay(200),
      choices))
        await selectUdDropdownOption(selector, choice), await delay.delay(120)
      await dismissOverlaysWithEscape()
      continue
    }
    const textInput = item.querySelector("input.ud__native-input")
    if (textInput) {
      const text = Array.isArray(answer) ? answer[0] : answer
      if (null == text || "" === text) continue
      await inputUtils.fillDefaultInputField(textInput, String(text))
      await delay.delay(80)
    }
  }
}

export async function removeResume() {
  const deleteButton =
    Array.from(
      document.querySelectorAll(
        ".uploadFile-loadedOperates .uploadFile-loadedOperate",
      ),
    ).find(
      (button) =>
        "delete" === (button.textContent || "").trim().toLowerCase(),
    ) || null
  deleteButton && (deleteButton.click(), await delay.delay(200))
}
