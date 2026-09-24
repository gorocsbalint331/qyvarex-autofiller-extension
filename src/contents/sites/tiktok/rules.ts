// @ts-nocheck
/**
 * TikTok — form rule extraction and snapshot.
 */

import * as enums from "../../../core/enums.js"
import * as tiktokAnswer from "./answer.ts"

const EDUCATION_SECTION_KEYWORDS = ["education"]
const EMPLOYMENT_SECTION_KEYWORDS = [["work", "experience"]]

export const TIKTOK_DATE_RANGE_DESCRIPTION =
  'Use YYYY-MM format. This is a date range with two separate inputs: start and end. Return as "YYYY-MM / YYYY-MM"; if the record is current, return "YYYY-MM / Present".'
export const LINKEDIN_PROFILE_URL_DESCRIPTION =
  "Return the applicant's LinkedIn profile URL. If no LinkedIn URL is available, return an empty string."
export const TIKTOK_PHONE_COUNTRY_CODE_DESCRIPTION =
  "Select the country calling code. Return one complete option text exactly as displayed."
export const TIKTOK_MOBILE_DESCRIPTION =
  "Enter the mobile number exactly as returned. Do not add, remove, or transform digits."

function cleanLabelText(text) {
  return text
    .replace(/[*\uff0a]\s*$/g, "")
    .trim()
    .replace(/\s+/g, " ")
}

export function getTikTokSelectRuleLabel(input, label) {
  const isPhoneCountryCodeSearch =
    input.classList.contains("ud__select__selector__search__input") &&
    !!input.closest(".ud__input-group") &&
    "mobile" === label.trim().toLowerCase()
  return isPhoneCountryCodeSearch ? "Phone Country Code" : label
}

function isAtsxPhonePrefixSearch(input) {
  return (
    input.classList.contains("atsx-select-search__field") &&
    (null !== input.closest(".atsx-phone-select") ||
      null !== input.closest('[data-cy="phonePrefix"]') ||
      null !== input.closest(".atsx-phone"))
  )
}

function resolvePhonePrefixCombobox(input) {
  const phonePrefix = input.closest('[data-cy="phonePrefix"]')
  if (phonePrefix?.getAttribute("role") === "combobox") return phonePrefix
  const phoneRoot = input.closest(".atsx-phone")
  return (
    phonePrefix?.querySelector('[role="combobox"]') ||
    phoneRoot?.querySelector('[data-cy="phonePrefix"][role="combobox"]') ||
    phoneRoot?.querySelector('[data-cy="phonePrefix"] [role="combobox"]') ||
    input.closest('[role="combobox"]')
  )
}

function getSelectDescription(label) {
  return "Phone Country Code" === label
    ? TIKTOK_PHONE_COUNTRY_CODE_DESCRIPTION
    : void 0
}

export function getTikTokTextRuleDescription(label) {
  const fromRule = getTikTokRuleDescription(label)
  return (
    fromRule ||
    ("mobile" === label.trim().toLowerCase()
      ? TIKTOK_MOBILE_DESCRIPTION
      : void 0)
  )
}

function isStartEndDateLabel(label) {
  const normalized = label.toLowerCase().trim().replace(/\s+/g, " ")
  return "start & end date" === normalized
}

export function getTikTokUsdsDateRangeInputs(input) {
  const item = input.closest(".ud-formily-item")
  return item
    ? Array.from(item.querySelectorAll("input"))
        .filter((candidate) => candidate.closest(".ud-formily-item") === item)
        .filter((candidate) => !tiktokAnswer.isSkippableInput(candidate))
    : []
}

export function getTikTokRuleDescription(label) {
  if (isStartEndDateLabel(label)) return TIKTOK_DATE_RANGE_DESCRIPTION
  const key = cleanLabelText(label)
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
  return "urlid" === key ? LINKEDIN_PROFILE_URL_DESCRIPTION : void 0
}

export function buildTikTokSectionOptions(children) {
  return children.map((child) => ({
    type: child.type,
    label: child.label,
    ...(child.options?.length ? { options: child.options } : {}),
    ...(child.description ? { description: child.description } : {}),
  }))
}

function findFieldLabel(input) {
  const hasText = (el) => !!el && cleanLabelText(el.textContent || "").length > 0
  const labels = input.labels
  const fromLabels = labels && Array.from(labels).find(hasText)
  if (fromLabels) return fromLabels
  const id = input.id
  if (id) {
    const byFor = document.querySelector(`label[for="${CSS.escape(id)}"]`)
    if (hasText(byFor)) return byFor
  }
  const atsxItem = input.closest(".atsx-form-item")
  if (atsxItem) {
    const label =
      atsxItem.querySelector(".atsx-form-item-label label") ||
      atsxItem.querySelector("label")
    if (hasText(label)) return label
  }
  const formilyItem = input.closest(".ud-formily-item")
  if (formilyItem) {
    const label =
      formilyItem.querySelector(".ud-formily-item-label label") ||
      formilyItem.querySelector("label") ||
      formilyItem.querySelector(".ud-formily-item-label-content") ||
      formilyItem.querySelector(".ud-formily-item-label")
    if (hasText(label)) return label
  }
  const wrappingLabel = input.closest("label")
  if (hasText(wrappingLabel)) return wrappingLabel
  const container =
    input.closest('[class*="form-item"]') ||
    input.closest("div, fieldset, li, section, form")
  const nearby =
    container?.querySelector("label") ||
    container?.parentElement?.querySelector("label")
  return hasText(nearby) ? nearby : null
}

function getSectionContainer(node) {
  const exact =
    node.closest('[class*="applyFormModuleWrapper__"]') ||
    node.closest('[class*="createFormSection__"]')
  if (exact) return exact
  const loose =
    node.closest('[class*="applyFormModuleWrapper"]') ||
    node.closest('[class*="createFormSection"]')
  return loose
    ? loose.closest('[class*="applyFormModuleWrapper__"]') ||
        loose.closest('[class*="createFormSection__"]') ||
        loose
    : null
}

function getSectionTitleLower(section) {
  const title =
    section.querySelector(".applyFormModuleWrapper-text")?.textContent ||
    section.querySelector(".applyFormModuleWrapper-title")?.textContent ||
    section.querySelector(".createFormSection-text")?.textContent ||
    section.querySelector(".createFormSection-title")?.textContent ||
    ""
  return (title || "").trim().toLowerCase()
}

function getSectionTitle(section) {
  const title =
    section.querySelector(".applyFormModuleWrapper-text")?.textContent ||
    section.querySelector(".applyFormModuleWrapper-title")?.textContent ||
    section.querySelector(".createFormSection-text")?.textContent ||
    section.querySelector(".createFormSection-title")?.textContent ||
    ""
  return (title || "").trim()
}

function listSectionContainers() {
  const selectors = [
    '[class*="applyFormModuleWrapper__"]',
    '[class*="createFormSection__"]',
  ]
  return Array.from(
    new Set(
      selectors.flatMap((selector) =>
        Array.from(document.querySelectorAll(selector)),
      ),
    ),
  )
}

function findSectionByKeywords(keywordGroups) {
  const sections = listSectionContainers()
  for (const keywords of keywordGroups) {
    const match = sections.find((section) => {
      const title = getSectionTitleLower(section)
      return keywords.every((keyword) => title.includes(keyword))
    })
    if (match) return match
  }
  return null
}

function isInEduOrEmploymentSection(input) {
  const section = getSectionContainer(input)
  if (!section) return false
  const title = getSectionTitleLower(section)
  return !!(
    EDUCATION_SECTION_KEYWORDS.some((keyword) => title.includes(keyword)) ||
    title.includes("experience")
  )
}

function listEduOrEmploymentSections() {
  const sections = listSectionContainers()
  return sections.filter((section) => {
    const title = getSectionTitleLower(section)
    return title.includes("education") || title.includes("experience")
  })
}

function isRequiredField(input, labelEl) {
  const labelText = (labelEl?.textContent || "").trim()
  const formilyItem = input.closest(".ud-formily-item")
  const hasAsterisk = !!formilyItem?.querySelector(".ud-formily-item-asterisk")
  return (
    hasAsterisk ||
    labelText.includes("*") ||
    (labelEl?.className?.toLowerCase().includes("required") ?? false) ||
    (input instanceof HTMLInputElement && input.required) ||
    (input instanceof HTMLSelectElement && input.required) ||
    (input instanceof HTMLTextAreaElement && input.required) ||
    false
  )
}

function getSelectOptions(select) {
  return Array.from(select.options)
    .map((option) => (option.textContent || option.value || "").trim())
    .filter(
      (text) =>
        text && !["--", "select", "please select"].includes(text.toLowerCase()),
    )
}

function getRadiosByName(radio, root) {
  const name = (radio.name || "").trim()
  return name
    ? Array.from(
        root.querySelectorAll(
          `input[type="radio"][name="${CSS.escape(name)}"]`,
        ),
      ).filter((item) => !item.disabled)
    : []
}

function getRadioOptionLabels(radios, root) {
  const labels = []
  for (const radio of radios) {
    const text =
      root.querySelector(`label[for="${CSS.escape(radio.id)}"]`)?.textContent ||
      radio.value
    const trimmed = (text || "").trim()
    trimmed && labels.push(trimmed)
  }
  return labels
}

function buildRuleFromControl(control, root, labelRoot) {
  let fieldType
  const labelEl = findFieldLabel(control)
  if (!labelEl) return null
  const rawLabel = labelEl.textContent?.trim() || ""
  const label = cleanLabelText(rawLabel)
  if (!label) return null
  let $input = null
  let options = []
  if (
    control instanceof HTMLInputElement &&
    control.classList.contains("atsx-select-search__field")
  ) {
    if (isAtsxPhonePrefixSearch(control)) {
      const combobox = resolvePhonePrefixCombobox(control)
      return combobox
        ? {
            type: enums.FIELD_TYPE.SELECT,
            label: "Phone Country Code",
            required: isRequiredField(control, labelEl),
            options: [],
            description: TIKTOK_PHONE_COUNTRY_CODE_DESCRIPTION,
            $input: combobox,
            $label: labelEl,
          }
        : null
    }
    if (tiktokAnswer.isSkippableInput(control)) return null
    const atsxSelect = control.closest(".atsx-select")
    const labelLower = label.toLowerCase()
    const treatAsText =
      labelLower.includes("school") ||
      !!atsxSelect?.classList.contains("atsx-select-combobox") ||
      !!atsxSelect?.classList.contains("atsx-select-no-arrow")
    if (treatAsText)
      return (
        (fieldType = enums.FIELD_TYPE.TEXT),
        ($input = control),
        {
          type: fieldType,
          label,
          required: isRequiredField(control, labelEl),
          $input,
          $label: labelEl,
        }
      )
    fieldType = enums.FIELD_TYPE.SELECT
    const selectRoot =
      control.closest('[role="combobox"]') ||
      control.closest(".atsx-select-selection") ||
      control.closest(".atsx-select")
    return (
      ($input = selectRoot || control),
      (options = []),
      {
        type: fieldType,
        label,
        required: isRequiredField(control, labelEl),
        options,
        $input,
        $label: labelEl,
      }
    )
  }
  if (
    control instanceof HTMLInputElement &&
    ("combobox" === control.getAttribute("role") ||
      control.classList.contains("ud__select__selector__search__input")) &&
    control.closest(".ud__select")
  ) {
    if (tiktokAnswer.isSkippableInput(control)) return null
    const selectLabel = getTikTokSelectRuleLabel(control, label)
    const udSelect = control.closest(".ud__select")
    const selector = udSelect?.querySelector(".ud__select__selector")
    $input = selector || control
    const collectOptions = (nodes) => {
      if (!nodes || 0 === nodes.length) return []
      const texts = Array.from(nodes)
        .map((node) => (node.textContent || "").trim())
        .filter(Boolean)
      return Array.from(new Set(texts))
    }
    const listItems = udSelect?.querySelectorAll(".ud__select__list__item")
    if (0 === (options = collectOptions(listItems)).length && $input) {
      const anchorRect = $input.getBoundingClientRect()
      const dropdowns = Array.from(
        document.querySelectorAll(".ud__select__dropdown"),
      )
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
      if (best) {
        const items = best.el.querySelectorAll(".ud__select__list__item")
        options = collectOptions(items)
      }
    }
    return {
      type: enums.FIELD_TYPE.SELECT,
      label: selectLabel,
      required: isRequiredField(control, labelEl),
      options,
      description: getSelectDescription(selectLabel),
      $input,
      $label: labelEl,
    }
  }
  if ("INPUT" === control.tagName) {
    const input = control
    if (tiktokAnswer.isSkippableInput(input)) return null
    if ("checkbox" === input.type) {
      fieldType = enums.FIELD_TYPE.CHECKBOX
      $input = input
      const optionText = cleanLabelText(
        (labelEl.textContent || input.value || "").trim(),
      )
      return (
        (options = optionText ? [optionText] : []),
        {
          type: fieldType,
          label,
          required: isRequiredField(input, labelEl),
          options,
          $checkboxs: [input],
          $input,
          $label: labelEl,
        }
      )
    }
    if ("radio" === input.type) {
      fieldType = enums.FIELD_TYPE.RADIOGROUP
      const radios = getRadiosByName(input, root)
      if (0 === radios.length) return null
      const groupLabelEl = findFieldLabel(radios[0]) || labelEl
      const groupLabel = cleanLabelText(groupLabelEl?.textContent?.trim() || "")
      if (!groupLabel) return null
      options = getRadioOptionLabels(radios, labelRoot)
      const radioParent =
        radios[0].closest("fieldset") ||
        radios[0].closest("div") ||
        groupLabelEl?.closest("fieldset") ||
        root
      return {
        type: fieldType,
        label: groupLabel,
        required:
          radios.some((radio) => radio.required) ||
          (groupLabelEl?.textContent?.includes("*") ?? false),
        options,
        $radioParent: radioParent,
        $input: radios[0],
        $label: groupLabelEl || radioParent,
      }
    }
    if ((($input = input), isStartEndDateLabel(label))) {
      const rangeInputs = getTikTokUsdsDateRangeInputs(input)
      return rangeInputs.length > 1 && rangeInputs[0] !== input
        ? null
        : {
            type: (fieldType = enums.FIELD_TYPE.DATE),
            label,
            required: isRequiredField(input, labelEl),
            description: getTikTokRuleDescription(label),
            $input,
            $label: labelEl,
          }
    }
    return {
      type: (fieldType = enums.FIELD_TYPE.TEXT),
      label,
      required: isRequiredField(input, labelEl),
      description: getTikTokTextRuleDescription(label),
      $input,
      $label: labelEl,
    }
  }
  if ("SELECT" === control.tagName) {
    const select = control
    return select.disabled
      ? null
      : ((fieldType = enums.FIELD_TYPE.SELECT),
        ($input = select),
        (options = getSelectOptions(select)),
        {
          type: fieldType,
          label,
          required: isRequiredField(select, labelEl),
          options,
          $input,
          $label: labelEl,
        })
  }
  if ("TEXTAREA" === control.tagName) {
    const textarea = control
    return textarea.disabled || textarea.readOnly
      ? null
      : (($input = textarea), isStartEndDateLabel(label))
        ? {
            type: (fieldType = enums.FIELD_TYPE.DATE),
            label,
            required: isRequiredField(textarea, labelEl),
            description: getTikTokRuleDescription(label),
            $input,
            $label: labelEl,
          }
        : {
            type: (fieldType = enums.FIELD_TYPE.TEXT),
            label,
            required: isRequiredField(textarea, labelEl),
            description: getTikTokTextRuleDescription(label),
            $input,
            $label: labelEl,
          }
  }
  return null
}

function extractRulesFromRoot(root, labelRoot, options) {
  const controls = Array.from(
    root.querySelectorAll("input, select, textarea"),
  )
  const excluded = options?.excludedSectionContainers
  const excludedSet =
    excluded && excluded.length > 0 ? new Set(excluded) : null
  const seenRadioNames = /* @__PURE__ */ new Set()
  const rules = []
  for (const control of controls) {
    if (excludedSet) {
      const section = getSectionContainer(control)
      if (section && excludedSet.has(section)) continue
    } else if (options?.excludeEduOrEmployment && isInEduOrEmploymentSection(control))
      continue
    if (control instanceof HTMLInputElement && "radio" === control.type) {
      const name = (control.name || "").trim()
      if (!name || seenRadioNames.has(name)) continue
      seenRadioNames.add(name)
    }
    const rule = buildRuleFromControl(control, root, labelRoot)
    rule && rules.push(rule)
  }
  return rules
}

function getSectionEntryContainers(section) {
  const arrayCards = Array.from(
    section.querySelectorAll(
      '[class*="apply-form-array-card-content__"] .register-form-group-wrapper',
    ),
  )
  if (arrayCards.length > 0) return arrayCards
  const resumeItems = Array.from(
    section.querySelectorAll(
      ".createFormSection-formList .resumeEditForm-item",
    ),
  )
  if (resumeItems.length > 0) return resumeItems
  const children = Array.from(section.children).filter((child) => {
    const el = child
    return (
      el.querySelector(".ud-formily-item") ||
      el.querySelector(".atsx-form-item") ||
      el.querySelector("input, select, textarea")
    )
  })
  return children.length > 0
    ? children
    : section.querySelector(
          ".ud-formily-item, .atsx-form-item, input, select, textarea",
        )
      ? [section]
      : []
}

export function getEducationRules() {
  const section = findSectionByKeywords([EDUCATION_SECTION_KEYWORDS])
  if (!section) return []
  const labelRoot = document.body
  const entries = getSectionEntryContainers(section)
  const rules = []
  const sectionLabel = getSectionTitle(section) || "Education"
  for (const entry of entries) {
    const children = extractRulesFromRoot(entry, labelRoot)
    0 !== children.length &&
      rules.push({
        type: enums.FIELD_TYPE.EDUCATION,
        label: sectionLabel,
        required: true,
        children,
        options: buildTikTokSectionOptions(children),
      })
  }
  return rules
}

export function getExperienceRules() {
  const section = findSectionByKeywords(EMPLOYMENT_SECTION_KEYWORDS)
  if (!section) return []
  const labelRoot = document.body
  const entries = getSectionEntryContainers(section)
  const rules = []
  const sectionLabel = getSectionTitle(section) || "Work Experience"
  for (const entry of entries) {
    const children = extractRulesFromRoot(entry, labelRoot)
    0 !== children.length &&
      rules.push({
        type: enums.FIELD_TYPE.EMPLOYMENT,
        label: sectionLabel,
        required: true,
        children,
        options: buildTikTokSectionOptions(children),
      })
  }
  return rules
}

export function refreshTikTokSectionOptions(rules) {
  for (const rule of rules)
    (rule.type === enums.FIELD_TYPE.EDUCATION ||
      rule.type === enums.FIELD_TYPE.EMPLOYMENT) &&
      Array.isArray(rule.children) &&
      (rule.options = buildTikTokSectionOptions(rule.children))
}

export async function extractRules() {
  const body = document.body
  const rules = []
  const education = getEducationRules()
  const employment = getExperienceRules()
  console.debug(
    `[tiktok][rules] structured sections education=${education.length}, employment=${employment.length}`,
  )
  rules.push(...education)
  rules.push(...employment)
  const excludedSections = [...listEduOrEmploymentSections()]
  return (
    rules.push(
      ...extractRulesFromRoot(body, body, {
        excludeEduOrEmployment: true,
        excludedSectionContainers: excludedSections,
      }),
    ),
    await hydrateEmptySelectOptions(rules, body),
    refreshTikTokSectionOptions(rules),
    rules.push({
      type: enums.FIELD_TYPE.SELECT,
      label:
        "Which social networking platform did you hear about this opportunity? Choose the option(s) that influenced your decision to apply.",
      required: false,
      options: [...tiktokAnswer.SOCIAL_NETWORKING_PLATFORM_OPTIONS],
    }),
    rules.push({
      type: enums.FIELD_TYPE.TEXT,
      label:
        "Where else did you hear about this opportunity, that is not listed above as an option?",
      required: false,
    }),
    rules
  )
}

function flattenRules(rules) {
  const flat = []
  const queue = [...rules]
  for (; queue.length; ) {
    const rule = queue.shift()
    flat.push(rule)
    const withChildren = rule
    if (Array.isArray(withChildren.children))
      for (const child of withChildren.children) queue.push(child)
  }
  return flat
}

function collectUdSelectOptions(anchor) {
  const udSelect = anchor.closest(".ud__select")
  const listItems = udSelect?.querySelectorAll(".ud__select__list__item")
  const fromList =
    listItems && listItems.length
      ? Array.from(
          new Set(
            Array.from(listItems)
              .map((item) => (item.textContent || "").trim())
              .filter(Boolean),
          ),
        )
      : []
  if (fromList.length) return fromList
  const anchorRect = anchor.getBoundingClientRect()
  const dropdowns = Array.from(
    document.querySelectorAll(".ud__select__dropdown"),
  )
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
  if (!best) return []
  const items = best.el.querySelectorAll(".ud__select__list__item")
  return Array.from(
    new Set(
      Array.from(items)
        .map((item) => (item.textContent || "").trim())
        .filter(Boolean),
    ),
  )
}

function isInEducationSection(input) {
  const section = getSectionContainer(input)
  if (!section) return false
  const title = getSectionTitleLower(section)
  return title.includes("education")
}

export function shouldHydrateAtsxSelectOptions(input) {
  const atsxSelect = input.closest(".atsx-select")
  return (
    !!atsxSelect &&
    (!isInEducationSection(input) ||
      (!atsxSelect.classList.contains("atsx-select-combobox") &&
        !atsxSelect.classList.contains("atsx-select-no-arrow")))
  )
}

async function hydrateEmptySelectOptions(rules, _root) {
  const flat = flattenRules(rules)
  const emptySelects = flat.filter(
    (rule) =>
      rule.type === enums.FIELD_TYPE.SELECT &&
      Array.isArray(rule.options) &&
      (rule.options?.length ?? 0) === 0,
  )
  for (const rule of emptySelects) {
    const input = rule.$input
    if (!input || !(input instanceof HTMLElement)) continue
    const udSelect = input.closest(".ud__select")
    const atsxSelect = input.closest(".atsx-select")
    if (
      (!udSelect && !atsxSelect) ||
      (atsxSelect && !shouldHydrateAtsxSelectOptions(input))
    )
      continue
    try {
      input.scrollIntoView({ block: "center", behavior: "auto" })
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 80))
    try {
      input.dispatchEvent(
        new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
      )
      input.dispatchEvent(
        new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
      )
      input.click()
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, udSelect ? 120 : 200))
    let options = []
    if (udSelect) options = collectUdSelectOptions(input)
    else if (atsxSelect) {
      const ariaControls = input.getAttribute("aria-controls") || ""
      const listbox =
        (ariaControls ? document.getElementById(ariaControls) : null) ||
        document.querySelector('[role="listbox"]')
      if (listbox) {
        const optionNodes =
          "Phone Country Code" === rule.label
            ? listbox.querySelectorAll(
                ".atsx-phone-select-dropdown-menu-item[data-cy][data-val]",
              )
            : listbox.querySelectorAll(
                '[role="option"], li, [class*="list__item"]',
              )
        for (const node of Array.from(optionNodes)) {
          const text = (node.textContent || "").trim()
          text && options.push(text)
        }
        options = Array.from(new Set(options))
      }
    }
    options.length && (rule.options = options)
    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    )
    document.dispatchEvent(
      new KeyboardEvent("keyup", { key: "Escape", bubbles: true }),
    )
    await new Promise((resolve) => setTimeout(resolve, 50))
  }
}

export async function getFormSnapshot(formRules) {
  const body = document.body
  const snapshot = {}
  const readControlValue = (control) => {
    if (
      control instanceof HTMLInputElement ||
      control instanceof HTMLTextAreaElement
    ) {
      if ("checkbox" === control.type || "radio" === control.type) return
      if (
        control instanceof HTMLInputElement &&
        control.classList.contains("atsx-date-picker-period-hidden-input")
      ) {
        const picker = control.closest(".atsx-date-picker-period-month")
        if (picker) {
          const labels = Array.from(
            picker.querySelectorAll(".atsx-date-picker-period-month-label"),
          )
          const readLabel = (labelEl) => {
            if (!labelEl) return ""
            const year =
              labelEl.querySelector('[data-cy="year"]')?.textContent?.trim() ||
              ""
            const month =
              labelEl.querySelector('[data-cy="month"]')?.textContent?.trim() ||
              ""
            const yearUpper = year.toUpperCase()
            const monthUpper = month.toUpperCase()
            return "PRESENT" === yearUpper
              ? "Present"
              : year && month && "YYYY" !== yearUpper && "MM" !== monthUpper
                ? `${year}-${month}`
                : ""
          }
          const start = readLabel(labels[0])
          const end = readLabel(labels[1])
          return start && end
            ? `${start} - ${end}`
            : start || end || ""
        }
        return ""
      }
      return (control.value || "").trim()
    }
    if (control instanceof HTMLSelectElement)
      return (
        control.options?.[control.selectedIndex]?.textContent
          ?.trim()
          ?.trim() || ""
      )
    const udSelect = control.closest?.(".ud__select")
    if (udSelect) {
      const selected = udSelect.querySelector(
        ".ud__select__selector__selectItem",
      )
      if (selected) return (selected.textContent || "").trim()
      const tags = Array.from(
        udSelect.querySelectorAll(
          '.ud__select__selector__content [class*="tag"], .ud__select__selector__content .ud__tag',
        ),
      )
      const texts = tags
        .map((tag) => (tag.textContent || "").trim())
        .filter(Boolean)
      return Array.from(new Set(texts))
    }
    const atsxSelect = control.closest?.(".atsx-select")
    if (atsxSelect) {
      const selected = atsxSelect.querySelector(
        ".atsx-select-selection-selected-value",
      )
      const valueNode =
        selected?.querySelector("[data-cy-value]") ||
        selected?.querySelector(".atsx-clamp-content")
      let text =
        valueNode?.getAttribute?.("data-cy-value") ||
        valueNode?.textContent?.trim() ||
        selected?.textContent?.trim() ||
        ""
      return (
        "Please choose" === (text = text.trim()) && (text = ""),
        text
      )
    }
  }
  const readRuleValue = (rule) => {
    const { $input, type, $checkboxs, options } = rule
    if (!$input || !document.contains($input)) return ""
    if (type === enums.FIELD_TYPE.CHECKBOX) {
      if ($checkboxs?.length) {
        const checked = $checkboxs
          .map((checkbox, index) =>
            checkbox.checked ? options?.[index] || "Checked" : null,
          )
          .filter(Boolean)
        return 1 === checked.length ? checked[0] : checked
      }
      return $input.checked || false
    }
    if (type === enums.FIELD_TYPE.RADIOGROUP) {
      const parent = rule.$radioParent || body
      if (!document.contains(parent)) return ""
      const checked = parent.querySelector(
        `input[type=radio][name="${CSS.escape($input.name || "")}"]:checked`,
      )
      return checked
        ? cleanLabelText(
            (
              checked.closest("label")?.textContent ||
              checked.value ||
              ""
            ).trim(),
          )
        : ""
    }
    const value = readControlValue($input)
    return void 0 !== value ? value : ""
  }
  for (const rule of formRules)
    rule.type !== enums.FIELD_TYPE.EDUCATION &&
      rule.type !== enums.FIELD_TYPE.EMPLOYMENT &&
      "$input" in rule &&
      rule.$input &&
      (snapshot[rule.label] = readRuleValue(rule))
  const educationRules = getEducationRules()
  const education = educationRules.map((rule) => {
    const row = {}
    return (
      rule.children.forEach((child) => {
        row[child.label] = readRuleValue(child)
      }),
      row
    )
  })
  const employmentRules = getExperienceRules()
  const employment = employmentRules.map((rule) => {
    const row = {}
    return (
      rule.children.forEach((child) => {
        row[child.label] = readRuleValue(child)
      }),
      row
    )
  })
  return { ...snapshot, education, employment }
}
