// @ts-nocheck
/**
 * ByteDance ATS — form rule extraction and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as answer from "./answer.ts"

export const BYTEDANCE_DATE_RANGE_DESCRIPTION =
  'Use YYYY-MM format. This is a date range with two separate inputs: start and end. Return as "YYYY-MM / YYYY-MM"; if the record is current, return "YYYY-MM / Present".'

export const LINKEDIN_PROFILE_URL_DESCRIPTION =
  "Return the applicant's LinkedIn profile URL. If no LinkedIn URL is available, return an empty string."

const EDUCATION_MODULE_KEYWORDS = ["education"]
const EXPERIENCE_MODULE_KEYWORDS = [["work", "experience"]]

function cleanLabel(label) {
  return label
    .replace(/[*\uff0a]\s*$/g, "")
    .trim()
    .replace(/\s+/g, " ")
}

export function getBytedanceSelectRuleLabel(input, label) {
  let isPhoneCountryCodeSearch =
    input.classList.contains("ud__select__selector__search__input") &&
    !!input.closest(".ud__input-group") &&
    label.trim().toLowerCase() === "mobile"
  return isPhoneCountryCodeSearch ? "Phone Country Code" : label
}

function isStartEndDateLabel(label) {
  let normalized = label.toLowerCase().trim().replace(/\s+/g, " ")
  return normalized === "start & end date"
}

export function getBytedanceTextRuleDescription(label) {
  let key = cleanLabel(label)
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
  return key === "urlid" ? LINKEDIN_PROFILE_URL_DESCRIPTION : undefined
}

export function getBytedanceRuleDescription(label) {
  return isStartEndDateLabel(label)
    ? BYTEDANCE_DATE_RANGE_DESCRIPTION
    : getBytedanceTextRuleDescription(label)
}

export function buildBytedanceSectionOptions(children) {
  return children.map((child) => ({
    type: child.type,
    label: child.label,
    ...(child.options?.length ? { options: child.options } : {}),
    ...(child.description ? { description: child.description } : {}),
  }))
}

export function refreshBytedanceStructuredSectionOptions(rules) {
  for (let rule of rules) {
    if (
      rule.type !== enums.FIELD_TYPE.EDUCATION &&
      rule.type !== enums.FIELD_TYPE.EMPLOYMENT
    ) {
      continue
    }
    if (Array.isArray(rule.children)) {
      rule.options = buildBytedanceSectionOptions(rule.children)
    }
  }
}

export function applyBytedanceHydratedSelectOptions(rule, options) {
  if (options.length > 0) {
    rule.options = options
  }
}

function findLabelForControl(control) {
  let labels = control.labels
  if (labels && labels.length > 0) {
    let text = (labels[0].textContent || "").trim()
    if (text) return labels[0]
  }

  let id = control.id
  if (id) {
    let byFor = document.querySelector(`label[for="${CSS.escape(id)}"]`)
    if (byFor) return byFor
  }

  let atsxItem = control.closest(".atsx-form-item")
  if (atsxItem) {
    let label =
      atsxItem.querySelector(".atsx-form-item-label label") ||
      atsxItem.querySelector("label")
    if (label) return label
  }

  let formilyItem = control.closest(".ud-formily-item")
  if (formilyItem) {
    let label =
      formilyItem.querySelector(".ud-formily-item-label label") ||
      formilyItem.querySelector("label") ||
      formilyItem.querySelector(".ud-formily-item-label-content") ||
      formilyItem.querySelector(".ud-formily-item-label")
    if (label) return label
  }

  let closestLabel = control.closest("label")
  if (closestLabel) return closestLabel

  let container =
    control.closest('[class*="form-item"]') ||
    control.closest("div, fieldset, li, section, form")
  let nearby =
    container?.querySelector("label") ||
    container?.parentElement?.querySelector("label")
  return nearby || null
}

function getModuleWrapper(el) {
  let exact = el.closest('[class*="applyFormModuleWrapper__"]')
  if (exact) return exact
  let loose = el.closest('[class*="applyFormModuleWrapper"]')
  return loose
    ? loose.closest('[class*="applyFormModuleWrapper__"]') || loose
    : null
}

function getModuleTitleNormalized(module) {
  let text =
    module.querySelector(".applyFormModuleWrapper-text")?.textContent ||
    module.querySelector(".applyFormModuleWrapper-title")?.textContent ||
    ""
  return (text || "").trim().toLowerCase()
}

function getModuleTitle(module) {
  let text =
    module.querySelector(".applyFormModuleWrapper-text")?.textContent ||
    module.querySelector(".applyFormModuleWrapper-title")?.textContent ||
    ""
  return (text || "").trim()
}

function findModuleByKeywords(keywordSets) {
  let modules = Array.from(
    document.querySelectorAll('[class*="applyFormModuleWrapper__"]'),
  )
  for (let keywords of keywordSets) {
    let found = modules.find((module) => {
      let title = getModuleTitleNormalized(module)
      return keywords.every((keyword) => title.includes(keyword))
    })
    if (found) return found
  }
  return null
}

function isInsideEduOrEmployment(el) {
  let module = getModuleWrapper(el)
  if (!module) return false
  let title = getModuleTitleNormalized(module)
  return !!(
    EDUCATION_MODULE_KEYWORDS.some((keyword) => title.includes(keyword)) ||
    title.includes("experience")
  )
}

function getEduAndEmploymentModules() {
  let modules = Array.from(
    document.querySelectorAll('[class*="applyFormModuleWrapper__"]'),
  )
  return modules.filter((module) => {
    let title = getModuleTitleNormalized(module)
    return title.includes("education") || title.includes("experience")
  })
}

function isRequiredField(control, labelEl) {
  let labelText = (labelEl?.textContent || "").trim()
  let hasAsterisk = !!control
    .closest(".ud-formily-item")
    ?.querySelector(".ud-formily-item-asterisk")
  return (
    hasAsterisk ||
    labelText.includes("*") ||
    (labelEl?.className?.toLowerCase().includes("required") ?? false) ||
    (control instanceof HTMLInputElement && control.required) ||
    (control instanceof HTMLSelectElement && control.required) ||
    (control instanceof HTMLTextAreaElement && control.required) ||
    false
  )
}

function getNativeSelectOptions(select) {
  return Array.from(select.options)
    .map((option) => (option.textContent || option.value || "").trim())
    .filter(
      (text) =>
        text &&
        !["--", "select", "please select"].includes(text.toLowerCase()),
    )
}

function getRadiosByName(radio, root) {
  let name = (radio.name || "").trim()
  if (!name) return []
  return Array.from(
    root.querySelectorAll(`input[type="radio"][name="${CSS.escape(name)}"]`),
  ).filter((el) => !el.disabled)
}

function getRadioOptionLabels(radios, root) {
  let options = []
  for (let radio of radios) {
    let text =
      root.querySelector(`label[for="${CSS.escape(radio.id)}"]`)?.textContent ||
      radio.value
    let trimmed = (text || "").trim()
    if (trimmed) options.push(trimmed)
  }
  return options
}

function buildRuleFromControl(control, root, documentRoot) {
  let labelEl = findLabelForControl(control)
  if (!labelEl) return null

  let rawLabel = labelEl.textContent?.trim() || ""
  let label = cleanLabel(rawLabel)
  if (!label) return null
  if (label.toLowerCase() === "preferred work location") return null

  let type
  let $input = null
  let options = []

  if (
    control instanceof HTMLInputElement &&
    control.classList.contains("atsx-select-search__field")
  ) {
    if (answer.isSkippableInput(control)) return null
    let selectRoot = control.closest(".atsx-select")
    let labelLower = label.toLowerCase()
    let isComboboxText =
      labelLower.includes("school") ||
      !!selectRoot?.classList.contains("atsx-select-combobox") ||
      !!selectRoot?.classList.contains("atsx-select-no-arrow")
    if (isComboboxText) {
      return {
        type: enums.FIELD_TYPE.TEXT,
        label,
        required: isRequiredField(control, labelEl),
        $input: control,
        $label: labelEl,
      }
    }
    let combobox =
      control.closest('[role="combobox"]') ||
      control.closest(".atsx-select-selection") ||
      control.closest(".atsx-select")
    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      required: isRequiredField(control, labelEl),
      options: [],
      $input: combobox || control,
      $label: labelEl,
    }
  }

  if (
    control instanceof HTMLInputElement &&
    control.getAttribute("role") === "combobox" &&
    control.closest(".ud__select")
  ) {
    if (answer.isSkippableInput(control)) return null
    let selectLabel = getBytedanceSelectRuleLabel(control, label)
    let selectRoot = control.closest(".ud__select")
    let selector = selectRoot?.querySelector(".ud__select__selector")
    $input = selector || control

    let collectOptions = (nodes) => {
      if (!nodes || nodes.length === 0) return []
      let texts = Array.from(nodes)
        .map((node) => (node.textContent || "").trim())
        .filter(Boolean)
      return Array.from(new Set(texts))
    }

    let listItems = selectRoot?.querySelectorAll(".ud__select__list__item")
    options = collectOptions(listItems)
    if (options.length === 0 && $input) {
      let inputRect = $input.getBoundingClientRect()
      let dropdowns = Array.from(
        document.querySelectorAll(".ud__select__dropdown"),
      ).filter(isDropdownVisible)
      let best = null
      for (let dropdown of dropdowns) {
        let items = dropdown.querySelectorAll(".ud__select__list__item")
        if (!items || items.length === 0) continue
        let rect = dropdown.getBoundingClientRect()
        let dx = (rect.left || 0) - (inputRect.left || 0)
        let dy = (rect.top || 0) - (inputRect.bottom || 0)
        let distance = Math.hypot(dx, dy)
        let widthDelta =
          inputRect.width > 0
            ? Math.abs(rect.width - inputRect.width) / inputRect.width
            : 0
        let score = distance + 200 * widthDelta
        if (!best || score < best.score) {
          best = { el: dropdown, score }
        }
      }
      if (best) {
        options = collectOptions(
          best.el.querySelectorAll(".ud__select__list__item"),
        )
      }
    }

    return {
      type: enums.FIELD_TYPE.SELECT,
      label: selectLabel,
      required: isRequiredField(control, labelEl),
      options,
      $input,
      $label: labelEl,
    }
  }

  if (control.tagName === "INPUT") {
    let input = control
    if (answer.isSkippableInput(input)) return null

    if (input.type === "checkbox") {
      let nearbyText = (
        input.closest(".atsx-form-item-control")?.textContent ||
        input.closest(".atsx-form-item")?.textContent ||
        ""
      ).toLowerCase()
      if (nearbyText.includes("privacy policy")) return null
      let optionText = cleanLabel(
        (labelEl.textContent || input.value || "").trim(),
      )
      return {
        type: enums.FIELD_TYPE.CHECKBOX,
        label,
        required: isRequiredField(input, labelEl),
        options: optionText ? [optionText] : [],
        $checkboxs: [input],
        $input: input,
        $label: labelEl,
      }
    }

    if (input.type === "radio") {
      let radios = getRadiosByName(input, root)
      if (radios.length === 0) return null
      let groupLabelEl = findLabelForControl(radios[0]) || labelEl
      let groupLabel = cleanLabel(groupLabelEl?.textContent?.trim() || "")
      if (!groupLabel) return null
      let radioOptions = getRadioOptionLabels(radios, documentRoot)
      let radioParent =
        radios[0].closest("fieldset") ||
        radios[0].closest("div") ||
        groupLabelEl?.closest("fieldset") ||
        root
      return {
        type: enums.FIELD_TYPE.RADIOGROUP,
        label: groupLabel,
        required:
          radios.some((radio) => radio.required) ||
          (groupLabelEl?.textContent?.includes("*") ?? false),
        options: radioOptions,
        $radioParent: radioParent,
        $input: radios[0],
        $label: groupLabelEl || radioParent,
      }
    }

    if (isStartEndDateLabel(label)) {
      return {
        type: enums.FIELD_TYPE.DATE,
        label,
        required: isRequiredField(input, labelEl),
        description: getBytedanceRuleDescription(label),
        $input: input,
        $label: labelEl,
      }
    }
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required: isRequiredField(input, labelEl),
      description: getBytedanceTextRuleDescription(label),
      $input: input,
      $label: labelEl,
    }
  }

  if (control.tagName === "SELECT") {
    let select = control
    if (select.disabled) return null
    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      required: isRequiredField(select, labelEl),
      options: getNativeSelectOptions(select),
      $input: select,
      $label: labelEl,
    }
  }

  if (control.tagName === "TEXTAREA") {
    let textarea = control
    if (textarea.disabled || textarea.readOnly) return null
    if (isStartEndDateLabel(label)) {
      return {
        type: enums.FIELD_TYPE.DATE,
        label,
        required: isRequiredField(textarea, labelEl),
        description: getBytedanceRuleDescription(label),
        $input: textarea,
        $label: labelEl,
      }
    }
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required: isRequiredField(textarea, labelEl),
      description: getBytedanceTextRuleDescription(label),
      $input: textarea,
      $label: labelEl,
    }
  }

  return null
}

function extractRulesFromRoot(root, documentRoot, options) {
  let controls = Array.from(
    root.querySelectorAll("input, select, textarea"),
  )
  let excluded = options?.excludedSectionContainers
  let excludedSet =
    excluded && excluded.length > 0 ? new Set(excluded) : null
  let seenRadioNames = new Set()
  let seenDateRangeWrappers = new Set()
  let rules = []

  for (let control of controls) {
    if (control instanceof HTMLInputElement) {
      let dateRangeWrapper = control.closest(
        ".throne-biz-date-range-picker-wrapper",
      )
      if (dateRangeWrapper) {
        if (seenDateRangeWrappers.has(dateRangeWrapper)) continue
        seenDateRangeWrappers.add(dateRangeWrapper)
      }
    }

    if (excludedSet) {
      let module = getModuleWrapper(control)
      if (module && excludedSet.has(module)) continue
    } else if (options?.excludeEduOrEmployment && isInsideEduOrEmployment(control)) {
      continue
    }

    if (control instanceof HTMLInputElement && control.type === "radio") {
      let name = (control.name || "").trim()
      if (!name || seenRadioNames.has(name)) continue
      seenRadioNames.add(name)
    }

    let rule = buildRuleFromControl(control, root, documentRoot)
    if (rule) rules.push(rule)
  }

  return rules
}

function getSectionCardRoots(module) {
  let cards = Array.from(
    module.querySelectorAll(
      '[class*="apply-form-array-card-content__"] .register-form-group-wrapper',
    ),
  )
  if (cards.length > 0) return cards

  let children = Array.from(module.children).filter((child) => {
    return (
      child.querySelector(".ud-formily-item") ||
      child.querySelector("input, select, textarea")
    )
  })
  if (children.length > 0) return children
  return module.querySelector(".ud-formily-item, input, select, textarea")
    ? [module]
    : []
}

export function getEducationRules() {
  let module = findModuleByKeywords([EDUCATION_MODULE_KEYWORDS])
  if (!module) return []
  let documentRoot = document.body
  let cards = getSectionCardRoots(module)
  let rules = []
  let sectionLabel = getModuleTitle(module) || "Education"
  for (let card of cards) {
    let children = extractRulesFromRoot(card, documentRoot)
    if (children.length === 0) continue
    rules.push({
      type: enums.FIELD_TYPE.EDUCATION,
      label: sectionLabel,
      required: true,
      children,
      options: buildBytedanceSectionOptions(children),
    })
  }
  return rules
}

export function getExperienceRules() {
  let module = findModuleByKeywords(EXPERIENCE_MODULE_KEYWORDS)
  if (!module) return []
  let documentRoot = document.body
  let cards = getSectionCardRoots(module)
  let rules = []
  let sectionLabel = getModuleTitle(module) || "Work Experience"
  for (let card of cards) {
    let children = extractRulesFromRoot(card, documentRoot)
    if (children.length === 0) continue
    rules.push({
      type: enums.FIELD_TYPE.EMPLOYMENT,
      label: sectionLabel,
      required: true,
      children,
      options: buildBytedanceSectionOptions(children),
    })
  }
  return rules
}

export async function extractRules() {
  let documentRoot = document.body
  let rules = []
  rules.push(...getEducationRules())
  rules.push(...getExperienceRules())
  let sectionModules = [...getEduAndEmploymentModules()]
  rules.push(
    ...extractRulesFromRoot(documentRoot, documentRoot, {
      excludeEduOrEmployment: true,
      excludedSectionContainers: sectionModules,
    }),
  )
  await hydrateEmptySelectOptions(rules, documentRoot)
  refreshBytedanceStructuredSectionOptions(rules)
  return rules
}

function flattenRules(rules) {
  let flat = []
  let queue = [...rules]
  while (queue.length) {
    let rule = queue.shift()
    flat.push(rule)
    if (Array.isArray(rule.children)) {
      for (let child of rule.children) queue.push(child)
    }
  }
  return flat
}

async function scrollCollectVirtualListOptions(dropdown) {
  let holder = dropdown.querySelector(".rc-virtual-list-holder")
  if (!holder) return []
  let content = holder.firstElementChild
  if (!content) return []
  let scrollHeight = content.scrollHeight || content.offsetHeight
  if (scrollHeight <= holder.clientHeight) return []

  let options = new Set()
  let collect = () => {
    let items = dropdown.querySelectorAll(".ud__select__list__item")
    for (let item of Array.from(items)) {
      let text = (item.textContent || "").trim()
      if (text) options.add(text)
    }
  }

  holder.dispatchEvent(
    new WheelEvent("wheel", {
      deltaY: -scrollHeight,
      bubbles: true,
      cancelable: true,
    }),
  )
  await new Promise((resolve) => setTimeout(resolve, 60))
  collect()

  let step = Math.max(holder.clientHeight - 32, 32)
  let iterations = Math.ceil(scrollHeight / step) + 2
  for (let i = 0; i < iterations; i++) {
    let before = options.size
    holder.dispatchEvent(
      new WheelEvent("wheel", {
        deltaY: step,
        bubbles: true,
        cancelable: true,
      }),
    )
    await new Promise((resolve) => setTimeout(resolve, 60))
    collect()
    if (i > 0 && options.size === before) break
  }
  return Array.from(options)
}

function findNearbySelectDropdown(selector) {
  let selectRoot = selector.closest(".ud__select")
  let nested = selectRoot?.querySelector(".ud__select__dropdown")
  if (nested && isDropdownVisible(nested)) return nested

  let selectorRect = selector.getBoundingClientRect()
  let dropdowns = Array.from(
    document.querySelectorAll(".ud__select__dropdown"),
  ).filter(isDropdownVisible)
  let best = null
  for (let dropdown of dropdowns) {
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
  return best?.el ?? null
}

function isDropdownVisible(el) {
  if (el.classList.contains("ud__select__dropdown-hidden")) return false
  let rect = el.getBoundingClientRect()
  if (rect.width === 0 && rect.height === 0) return false
  let style = getComputedStyle(el)
  return style.display !== "none" && style.visibility !== "hidden"
}

function collectListItemOptions(container) {
  let items = container.querySelectorAll(".ud__select__list__item")
  if (!items || items.length === 0) return []
  return Array.from(
    new Set(
      Array.from(items)
        .map((item) => (item.textContent || "").trim())
        .filter(Boolean),
    ),
  )
}

function collectNearbySelectOptions(selector) {
  let selectRoot = selector.closest(".ud__select")
  let nestedItems = selectRoot?.querySelectorAll(".ud__select__list__item")
  let nested =
    nestedItems && nestedItems.length
      ? Array.from(
          new Set(
            Array.from(nestedItems)
              .map((item) => (item.textContent || "").trim())
              .filter(Boolean),
          ),
        )
      : []
  if (nested.length) return nested

  let selectorRect = selector.getBoundingClientRect()
  let dropdowns = Array.from(
    document.querySelectorAll(".ud__select__dropdown"),
  ).filter(isDropdownVisible)
  let best = null
  for (let dropdown of dropdowns) {
    let options = collectListItemOptions(dropdown)
    if (options.length === 0) continue
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
  return best ? collectListItemOptions(best.el) : []
}

function isInsideEducationModule(el) {
  let module = getModuleWrapper(el)
  if (!module) return false
  return getModuleTitleNormalized(module).includes("education")
}

async function hydrateEmptySelectOptions(rules, _documentRoot) {
  let flat = flattenRules(rules)
  let emptySelects = flat.filter(
    (rule) =>
      rule.type === enums.FIELD_TYPE.SELECT &&
      Array.isArray(rule.options) &&
      (rule.options?.length ?? 0) === 0,
  )

  for (let rule of emptySelects) {
    let input = rule.$input
    if (!input || !(input instanceof HTMLElement)) continue

    let udSelect = input.closest(".ud__select")
    let atsxSelect = input.closest(".atsx-select")
    if (!udSelect && !atsxSelect) continue
    if (atsxSelect && isInsideEducationModule(input)) continue

    try {
      input.scrollIntoView({ block: "center", behavior: "auto" })
    } catch {
      // ignore
    }
    await new Promise((resolve) => setTimeout(resolve, 80))

    try {
      input.dispatchEvent(
        new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
      )
      input.dispatchEvent(
        new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
      )
      input.click()
    } catch {
      // ignore
    }
    await new Promise((resolve) => setTimeout(resolve, udSelect ? 120 : 200))

    let options = []
    if (udSelect) {
      let dropdown = findNearbySelectDropdown(input)
      if (dropdown) options = await scrollCollectVirtualListOptions(dropdown)
      if (options.length === 0) options = collectNearbySelectOptions(input)
    } else if (atsxSelect) {
      let controlsId = input.getAttribute("aria-controls") || ""
      let listbox =
        (controlsId ? document.getElementById(controlsId) : null) ||
        document.querySelector('[role="listbox"]')
      if (listbox) {
        let items = listbox.querySelectorAll(
          '[role="option"], li, [class*="list__item"]',
        )
        for (let item of Array.from(items)) {
          let text = (item.textContent || "").trim()
          if (text) options.push(text)
        }
        options = Array.from(new Set(options))
      }
    }

    applyBytedanceHydratedSelectOptions(rule, options)
    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    )
    document.dispatchEvent(
      new KeyboardEvent("keyup", { key: "Escape", bubbles: true }),
    )
    await new Promise((resolve) => setTimeout(resolve, 50))
  }
}

export async function getFormSnapshot(rules) {
  let documentRoot = document.body
  let snapshot = {}

  let readControlValue = (el) => {
    if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
      if (el.type === "checkbox" || el.type === "radio") return
      if (
        el instanceof HTMLInputElement &&
        el.classList.contains("atsx-date-picker-period-hidden-input")
      ) {
        let picker = el.closest(".atsx-date-picker-period-month")
        if (picker) {
          let labels = Array.from(
            picker.querySelectorAll(".atsx-date-picker-period-month-label"),
          )
          let readLabel = (labelEl) => {
            if (!labelEl) return ""
            let year =
              labelEl.querySelector('[data-cy="year"]')?.textContent?.trim() ||
              ""
            let month =
              labelEl.querySelector('[data-cy="month"]')?.textContent?.trim() ||
              ""
            let yearUpper = year.toUpperCase()
            let monthUpper = month.toUpperCase()
            if (yearUpper === "PRESENT") return "Present"
            return year &&
              month &&
              yearUpper !== "YYYY" &&
              monthUpper !== "MM"
              ? `${year}-${month}`
              : ""
          }
          let start = readLabel(labels[0])
          let end = readLabel(labels[1])
          return start && end
            ? `${start} - ${end}`
            : start || end || ""
        }
        return ""
      }
      return (el.value || "").trim()
    }

    if (el instanceof HTMLSelectElement) {
      return (
        el.options?.[el.selectedIndex]?.textContent?.trim()?.trim() || ""
      )
    }

    let udSelect = el.closest?.(".ud__select")
    if (udSelect) {
      let selected = udSelect.querySelector(
        ".ud__select__selector__selectItem",
      )
      if (selected) return (selected.textContent || "").trim()
      let tags = Array.from(
        udSelect.querySelectorAll(
          '.ud__select__selector__content [class*="tag"], .ud__select__selector__content .ud__tag',
        ),
      )
      let values = tags
        .map((tag) => (tag.textContent || "").trim())
        .filter(Boolean)
      return Array.from(new Set(values))
    }

    let atsxSelect = el.closest?.(".atsx-select")
    if (atsxSelect) {
      let selected = atsxSelect.querySelector(
        ".atsx-select-selection-selected-value",
      )
      let valueNode =
        selected?.querySelector("[data-cy-value]") ||
        selected?.querySelector(".atsx-clamp-content")
      let text =
        valueNode?.getAttribute?.("data-cy-value") ||
        valueNode?.textContent?.trim() ||
        selected?.textContent?.trim() ||
        ""
      text = text.trim()
      if (text === "Please choose") text = ""
      return text
    }
  }

  let readRuleValue = (rule) => {
    let { $input, type, $checkboxs, options } = rule
    if (!$input || !document.contains($input)) return ""

    if (type === enums.FIELD_TYPE.CHECKBOX) {
      if ($checkboxs?.length) {
        let checked = $checkboxs
          .map((box, index) =>
            box.checked ? options?.[index] || "Checked" : null,
          )
          .filter(Boolean)
        return checked.length === 1 ? checked[0] : checked
      }
      return $input.checked || false
    }

    if (type === enums.FIELD_TYPE.RADIOGROUP) {
      let parent = rule.$radioParent || documentRoot
      if (!document.contains(parent)) return ""
      let checked = parent.querySelector(
        `input[type=radio][name="${CSS.escape($input.name || "")}"]:checked`,
      )
      return checked
        ? cleanLabel(
            (
              checked.closest("label")?.textContent ||
              checked.value ||
              ""
            ).trim(),
          )
        : ""
    }

    let value = readControlValue($input)
    return value !== undefined ? value : ""
  }

  for (let rule of rules) {
    if (
      rule.type !== enums.FIELD_TYPE.EDUCATION &&
      rule.type !== enums.FIELD_TYPE.EMPLOYMENT &&
      "$input" in rule &&
      rule.$input
    ) {
      snapshot[rule.label] = readRuleValue(rule)
    }
  }

  let educationRules = getEducationRules()
  let education = educationRules.map((section) => {
    let entry = {}
    section.children.forEach((child) => {
      entry[child.label] = readRuleValue(child)
    })
    return entry
  })

  let employmentRules = getExperienceRules()
  let employment = employmentRules.map((section) => {
    let entry = {}
    section.children.forEach((child) => {
      entry[child.label] = readRuleValue(child)
    })
    return entry
  })

  return { ...snapshot, education, employment }
}

function isPrivacyPolicyCheckbox(input) {
  if (input.type !== "checkbox") return false
  if (input.closest(".resumeEdit-privacyArea")) return true
  let text = (
    input.closest(".atsx-form-item-control")?.textContent ||
    input.closest("label")?.textContent ||
    ""
  )
    .trim()
    .toLowerCase()
  return text.includes("privacy policy")
}

export function getPrivacyPolicyCheckboxes() {
  return Array.from(
    document.querySelectorAll(
      'input[type="checkbox"], input.atsx-checkbox-input',
    ),
  ).filter(isPrivacyPolicyCheckbox)
}
