// @ts-nocheck
/**
 * Zoho Recruit — DOM fill operations (inputs, phone, autocomplete, uploads).
 */

import * as dayjs from "dayjs"
import * as filler from "../../shared/filler.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as cancellation from "../../methods/cancellation.ts"
import * as dom from "../../methods/dom.ts"
import * as zohoPhoneCountryCode from "./phone-country-code.ts"
import * as locationOperation from "./location-operation.ts"

const dayjsDefault = { default: dayjs?.default ?? dayjs }

const FILE_REMOVE_SELECTOR =
  ".lyteFileUpdClose, .lyteFileUpdRemove, .lyteFileUpdDelete, lyte-file-close"

export async function clearAllPopups() {
  const mouseInit = {
    bubbles: true,
    cancelable: true,
    view: window,
    clientX: 1,
    clientY: 1,
  }
  document.body.dispatchEvent(new MouseEvent("mousedown", mouseInit))
  document.body.dispatchEvent(new MouseEvent("mouseup", mouseInit))
  await new Promise((resolve) => setTimeout(resolve, 100))
}

export async function preFillForm() {
  const addButtons = document.querySelectorAll(
    'button.tabular-group-add, button[id*="add-row"], .crux-tabular-component button',
  )
  if (addButtons.length === 0) return
  for (const button of Array.from(addButtons)) {
    if (button.offsetWidth > 0 && button.offsetHeight > 0) {
      const container =
        button.closest(".crc-form-row") || document.body
      if (container.querySelector(".tabular-delect-btn")) continue
      try {
        button.click()
        await new Promise((resolve) => setTimeout(resolve, 800))
      } catch (error) {
        console.error("[Zoho-Ops] 点击按钮失败:", error)
      }
    }
  }
}

export async function uploadResume(
  resumeInfo,
  updateRequired,
  updateFilled,
) {
  const container = document.querySelector(
    'rec-file-upload-component[cx-prop-zcqa="manual_RESUME"]',
  )
  const input = container?.querySelector("input.fileuploadInput")
  const removeButtons = Array.from(
    container?.querySelectorAll?.(FILE_REMOVE_SELECTOR) ?? [],
  )
  if (removeButtons.length) {
    removeButtons.forEach((button) => button.click())
    await new Promise((resolve) => setTimeout(resolve, 1e3))
  }
  if (input && resumeInfo) {
    await dom.uploadFiles(
      input,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      updateRequired,
      updateFilled,
      "Resume/CV",
    )
  }
}

export async function addEducationRow(rowIndex) {
  const section = document.querySelector(
    '.crc-form-row[aria-label="Educational Details"]',
  )
  if (!section) {
    console.error("[Zoho-Ops] 未找到教育经历板块容器")
    return
  }
  if (typeof rowIndex == "number") {
    const existing = section.querySelectorAll(".tabular-main-div")
    if (existing.length > rowIndex) return
  }
  const addButton = section.querySelector("button.tabular-group-add")
  if (addButton) {
    addButton.click()
    await new Promise((resolve) => setTimeout(resolve, 800))
  } else {
    console.error(
      "[Zoho-Ops] 教育板块内未找到 .tabular-group-add 按钮",
    )
  }
}

export async function fillZohoDropdownDirectly(rule, value) {
  const dropdown = rule.$input
  await clearAllPopups()
  let optionText = value.toString().trim()
  if (/month/i.test(rule.label)) {
    const monthMap = {
      "01": "Jan",
      "02": "Feb",
      "03": "Mar",
      "04": "Apr",
      "05": "May",
      "06": "Jun",
      "07": "Jul",
      "08": "Aug",
      "09": "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    }
    optionText = monthMap[optionText.padStart(2, "0")] || optionText
  }
  const isPhoneCountryCode =
    /^(phone country code|country phone code)$/i.test(rule.label)
  const matchesPhoneCountryReadback = () => {
    const flagCode = dropdown.querySelector(".flag-drop-code")
    const text = flagCode?.textContent?.trim() || ""
    const ariaLabel = flagCode?.getAttribute("aria-label") || ""
    if (/^\+\d+$/.test(optionText)) {
      return (
        zohoPhoneCountryCode.extractDialCode(text || ariaLabel) ===
        zohoPhoneCountryCode.extractDialCode(optionText)
      )
    }
    const label = ariaLabel || text
    return (
      /[a-z]/i.test(label) &&
      !!zohoPhoneCountryCode.findZohoPhoneCountryOption(
        [{ textContent: label }],
        optionText,
      )
    )
  }
  if (isPhoneCountryCode && matchesPhoneCountryReadback()) {
    console.info(
      "[ZohoRecruit][section-field] phone-country-readback",
      { matched: true, phase: "existing" },
    )
    return true
  }
  const controlsId = dropdown
    .querySelector(".lyteDummyEventContainer")
    ?.getAttribute("aria-controls")
  const dropBody = document.querySelector(
    `lyte-drop-body[id="${controlsId}"]`,
  )
  const items = Array.from(
    dropBody?.querySelectorAll("lyte-drop-item") || [],
  )
  const matchedItem = isPhoneCountryCode
    ? zohoPhoneCountryCode.findZohoPhoneCountryOption(items, optionText)
    : items.find((item) => {
        const text = item.textContent?.trim() || ""
        return text.toLowerCase() === optionText.toLowerCase()
      })
  if (matchedItem) {
    matchedItem.dispatchEvent(
      new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
    )
    matchedItem.dispatchEvent(
      new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
    )
    matchedItem.dispatchEvent(
      new MouseEvent("click", { bubbles: true, cancelable: true }),
    )
    await new Promise((resolve) => setTimeout(resolve, 200))
    if (isPhoneCountryCode) {
      const matched = matchesPhoneCountryReadback()
      console.info(
        "[ZohoRecruit][section-field] phone-country-readback",
        { matched, phase: "after-selection" },
      )
      return matched
    }
    return true
  }
  console.info("[ZohoRecruit][section-field] dropdown-option-missing", {
    label: rule.label,
  })
  return false
}

export async function addExperienceRow(rowIndex) {
  const section = document.querySelector(
    '.crc-form-row[aria-label="Experience Details"]',
  )
  if (typeof rowIndex == "number") {
    const existing = section.querySelectorAll(".tabular-main-div")
    if (existing.length > rowIndex) return
  }
  const addButton = section.querySelector("button.tabular-group-add")
  addButton.click()
  await new Promise((resolve) => setTimeout(resolve, 800))
}

export async function submitApplication() {
  const button = document.querySelector(
    'button[data-zcqa="saveCandidate"], #saveCandidate, .crm-button-save',
  )
  if (button) {
    if (
      button.disabled ||
      button.classList.contains("lyteDisabled")
    ) {
      console.warn(
        "[ZohoRecruit] 按钮当前处于禁用状态，跳过点击",
      )
      return
    }
    button.click()
  } else {
    console.error("[ZohoRecruit] 未能找到有效的提交按钮")
  }
}

export async function fillPhoneField(
  rule,
  phoneValue,
  countryCodeAnswer,
  addressCountry,
) {
  const digitsOnly = String(phoneValue ?? "").replace(/\D/g, "")
  const countryQuery = countryCodeAnswer || ""
  const countryDropdown =
    rule.$countryCode ||
    rule.$input
      ?.closest("crux-phone-component")
      ?.querySelector("lyte-dropdown")
  const dropdownTrigger = countryDropdown?.querySelector(
    ".lyteDummyEventContainer",
  )
  let dialCode = ""
  let selectedOptionText = ""
  if (countryDropdown && dropdownTrigger) {
    openDropdownTrigger(dropdownTrigger)
    await new Promise((resolve) => setTimeout(resolve, 500))
    const options = collectPhoneCountryOptions(countryDropdown)
    const matched = countryQuery
      ? zohoPhoneCountryCode.findZohoPhoneCountryOption(
          options,
          countryQuery,
          addressCountry,
        )
      : zohoPhoneCountryCode.findZohoPhoneCountryOption(
          options,
          "United States",
        )
    if (matched) {
      selectedOptionText = matched.textContent || ""
      dialCode = zohoPhoneCountryCode.extractDialCode(selectedOptionText)
      clickDropdownOption(matched)
      await waitForPhoneCountrySelection(
        countryDropdown,
        dropdownTrigger,
        selectedOptionText,
        dialCode,
      )
    }
    await closePhoneCountryDropdown(countryDropdown, dropdownTrigger)
  }
  const input = rule.$input
  if (input) {
    const formatted = zohoPhoneCountryCode.formatZohoPhoneNumber(
      phoneValue,
      dialCode,
    )
    await setNativeInputValue(input, formatted || digitsOnly)
    input.dispatchEvent(new Event("input", { bubbles: true }))
    input.dispatchEvent(new Event("change", { bubbles: true }))
    input.dispatchEvent(new Event("blur", { bubbles: true }))
  }
  await waitForZohoPhoneFieldSettled(rule)
}

function openDropdownTrigger(trigger) {
  trigger.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  trigger.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  trigger.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true }),
  )
}

function clickDropdownOption(option) {
  option.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  option.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  option.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true }),
  )
}

function collectPhoneCountryOptions(countryDropdown) {
  const controlsId = countryDropdown
    .querySelector(".lyteDummyEventContainer")
    ?.getAttribute("aria-controls")
  if (controlsId) {
    const dropBody = document.getElementById(controlsId)
    const items = Array.from(
      dropBody?.querySelectorAll("lyte-drop-item") || [],
    ).filter(
      (item) =>
        item instanceof HTMLElement && !!item.textContent?.trim(),
    )
    if (items.length > 0) return items
  }
  return Array.from(document.querySelectorAll("lyte-drop-item")).filter(
    (item) =>
      item instanceof HTMLElement && !!item.textContent?.trim(),
  )
}

async function waitForPhoneCountrySelection(
  countryDropdown,
  trigger,
  optionText,
  dialCode,
) {
  const normalizedOption =
    zohoPhoneCountryCode.normalizePhoneCountry(optionText)
  for (let attempt = 0; attempt < 12; attempt++) {
    const ariaLabel =
      countryDropdown
        .querySelector(".flag-drop-code")
        ?.getAttribute("aria-label") || ""
    const textContent =
      countryDropdown.querySelector(".flag-drop-code")?.textContent ||
      ""
    const expanded = trigger?.getAttribute("aria-expanded") === "true"
    const normalizedCurrent =
      zohoPhoneCountryCode.normalizePhoneCountry(
        `${ariaLabel} ${textContent}`,
      )
    const dialMatches =
      !dialCode ||
      normalizedCurrent.includes(dialCode.toLowerCase())
    const optionMatches =
      !normalizedOption ||
      normalizedCurrent.includes(normalizedOption)
    if (!expanded && dialMatches && optionMatches) return
    await new Promise((resolve) => setTimeout(resolve, 150))
  }
}

async function closePhoneCountryDropdown(countryDropdown, trigger) {
  trigger?.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
      cancelable: true,
    }),
  )
  trigger?.dispatchEvent(
    new KeyboardEvent("keyup", {
      key: "Escape",
      bubbles: true,
      cancelable: true,
    }),
  )
  trigger?.blur()
  if (trigger?.getAttribute("aria-expanded") === "true") {
    openDropdownTrigger(trigger)
  }
  countryDropdown?.blur?.()
  await new Promise((resolve) => setTimeout(resolve, 120))
  await clearAllPopups()
  await new Promise((resolve) => setTimeout(resolve, 120))
}

export async function waitForZohoPhoneFieldSettled(rule) {
  const input = rule?.$input
  const countryDropdown =
    rule?.$countryCode ||
    input?.closest("crux-phone-component")?.querySelector("lyte-dropdown")
  const trigger = countryDropdown?.querySelector(
    ".lyteDummyEventContainer",
  )
  const expectedDigits = String(input?.value ?? "").replace(/\D/g, "")
  for (let attempt = 0; attempt < 10; attempt++) {
    const controlsId = trigger?.getAttribute("aria-controls") || ""
    const dropBody = controlsId
      ? document.getElementById(controlsId)
      : null
    const expanded = trigger?.getAttribute("aria-expanded") === "true"
    const dropVisible = !!(
      dropBody &&
      dropBody.childElementCount > 0 &&
      dropBody.getBoundingClientRect().height > 0
    )
    const currentDigits = String(input?.value ?? "").replace(/\D/g, "")
    if (!expanded && !dropVisible && currentDigits === expectedDigits) {
      return
    }
    await new Promise((resolve) => setTimeout(resolve, 150))
  }
}

export async function fillAutocompleteField(rule, value) {
  const input = rule.$input
  if (!input) return
  await clearAllPopups()
  const isAutocomplete =
    input.closest("lyte-autocomplete") ||
    rule.label.toLowerCase().includes("city") ||
    rule.label.toLowerCase().includes("state") ||
    rule.label.toLowerCase().includes("zip")
  if (isAutocomplete) {
    const selected = await selectZohoAutocompleteOption(rule, value)
    if (!selected) {
      throw new filler.FillError(
        `No matching autocomplete option for label: ${rule.label} with value: ${value}`,
      )
    }
  } else {
    await setNativeInputValue(input, value)
    input.dispatchEvent(new Event("input", { bubbles: true }))
    input.dispatchEvent(new Event("change", { bubbles: true }))
    input.dispatchEvent(new Event("blur", { bubbles: true }))
  }
}

export async function fillZohoDateField(rule, value) {
  const input = rule?.$input
  if (!input || !value) return
  const parsed = dayjsDefault.default(value)
  const formatted = parsed.isValid()
    ? parsed.format("MM/DD/YYYY")
    : value
  await setNativeInputValue(input, formatted)
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
  input.dispatchEvent(new Event("blur", { bubbles: true }))
}

export async function selectZohoAutocompleteOption(
  rule,
  value,
  contextHints = [],
  options = {},
) {
  const input = rule?.$input
  if (!input) return false
  input.focus()
  input.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
  input.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
  input.dispatchEvent(new MouseEvent("click", { bubbles: true }))
  await setNativeInputValue(input, value)
  input.dispatchEvent(new Event("input", { bubbles: true }))
  await new Promise((resolve) => setTimeout(resolve, 250))
  const items = await waitForAutocompleteItems(input, options.exactOnly)
  const matched = options.exactOnly
    ? locationOperation.findExactZohoRecruitCityOption(items, value)
    : findUniqueZohoAutocompleteOptionItem(items, value, contextHints)
  if (!matched) {
    await clearZohoAutocompleteForInput(input)
    return false
  }
  matched.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  matched.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  matched.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true }),
  )
  await new Promise((resolve) => setTimeout(resolve, 250))
  const committed =
    !options.exactOnly || matchesExactAutocompleteCommit(input, value)
  await dismissAutocomplete(input)
  return committed
}

async function setNativeInputValue(input, value) {
  const prototype =
    input instanceof HTMLTextAreaElement
      ? window.HTMLTextAreaElement.prototype
      : window.HTMLInputElement.prototype
  const valueSetter = Object.getOwnPropertyDescriptor(
    prototype,
    "value",
  )?.set
  if (valueSetter) {
    valueSetter.call(input, value)
  } else {
    input.value = value
  }
  try {
    const tracker = input?._valueTracker
    if (tracker?.setValue) tracker.setValue("")
  } catch (error) {
    console.warn(
      "[ZohoAutocomplete] value tracker sync skipped",
      error,
    )
  }
}

async function waitForAutocompleteItems(input, exactOnly = false) {
  const autocomplete = input.closest("lyte-autocomplete")
  const dropdown =
    autocomplete?.querySelector("lyte-dropdown") ||
    input.closest("lyte-dropdown")
  const controlsId =
    dropdown
      ?.querySelector(".lyteDummyEventContainer")
      ?.getAttribute("aria-controls") || ""
  for (let attempt = 0; attempt < 8; attempt++) {
    let items = []
    if (controlsId) {
      const dropBody = document.getElementById(controlsId)
      items = Array.from(
        dropBody?.querySelectorAll("lyte-drop-item") || [],
      ).filter(
        (item) =>
          item instanceof HTMLElement && !!item.textContent?.trim(),
      )
    }
    if (items.length === 0 && autocomplete && !exactOnly) {
      items = Array.from(
        autocomplete.querySelectorAll("lyte-drop-item"),
      ).filter(
        (item) =>
          item instanceof HTMLElement && !!item.textContent?.trim(),
      )
    }
    if (items.length > 0) return items
    await new Promise((resolve) => setTimeout(resolve, 120))
  }
  return []
}

function normalizeAutocompleteText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function getAutocompleteOptionLabel(item) {
  return (
    item.querySelector(".cxLookupDropboxLabel")?.textContent?.trim() ||
    item.textContent?.trim() ||
    ""
  )
}

function expandLocationAliases(token) {
  const aliases = {
    il: ["illinois"],
    mi: ["michigan"],
    ny: ["new york"],
    on: ["ontario"],
    qc: ["quebec"],
    us: ["united states"],
    usa: ["united states"],
    "united states of america": ["united states"],
  }
  const normalized = normalizeAutocompleteText(token)
  return [normalized, ...(aliases[normalized] || [])]
}

function splitLocationTokens(value) {
  return String(value ?? "")
    .split(/[,-]/)
    .map((part) => normalizeAutocompleteText(part))
    .filter(Boolean)
}

function locationTokenMatches(optionLabel, token) {
  const optionTokens = splitLocationTokens(optionLabel)
  return expandLocationAliases(token).some((alias) =>
    optionTokens.includes(alias),
  )
}

export function findUniqueZohoAutocompleteOptionItem(
  items,
  value,
  contextHints = [],
) {
  const normalizedValue = normalizeAutocompleteText(value)
  if (!normalizedValue) return null
  const normalizedHints = contextHints
    .map((hint) => normalizeAutocompleteText(hint))
    .filter(Boolean)
  const matches = items.filter((item) => {
    const label = getAutocompleteOptionLabel(item)
    const normalizedLabel = normalizeAutocompleteText(label)
    return (
      normalizedLabel === normalizedValue ||
      (!!locationTokenMatches(label, normalizedValue) &&
        normalizedHints.every((hint) =>
          locationTokenMatches(label, hint),
        ))
    )
  })
  return matches.length === 1 ? matches[0] : null
}

function matchesExactAutocompleteCommit(input, value) {
  const component = input.closest("crux-text-component")
  const selectedValue =
    component?.getAttribute("selected-value") || ""
  return (
    normalizeAutocompleteText(input.value) ===
      normalizeAutocompleteText(value) && !!selectedValue
  )
}

export async function clearZohoAutocompleteForInput(input) {
  await setNativeInputValue(input, "")
  input.dispatchEvent(new Event("input", { bubbles: true }))
  await dismissAutocomplete(input)
}

async function dismissAutocomplete(input) {
  input.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
      cancelable: true,
    }),
  )
  input.dispatchEvent(
    new KeyboardEvent("keyup", {
      key: "Escape",
      bubbles: true,
      cancelable: true,
    }),
  )
  input.blur()
  await new Promise((resolve) => setTimeout(resolve, 120))
  await clearAllPopups()
  await new Promise((resolve) => setTimeout(resolve, 120))
}

export async function fillAgreementCheckbox() {
  const checkboxLabel = Array.from(
    document.querySelectorAll("label.lyteCheckbox.lyteDefault"),
  ).find((label) => {
    if (label.closest(".tabular-main-div, .crc-form-tabularrow")) {
      return false
    }
    const input = label.querySelector("input")
    const row = label.closest(".crc-form-row")
    const haystack = [
      label.textContent,
      label.getAttribute("aria-label"),
      input?.getAttribute("aria-label"),
      row?.textContent,
    ]
      .filter(Boolean)
      .join(" ")
      .replace(/\s+/g, " ")
      .toLowerCase()
    return /agree|agreement|consent|certif|terms|privacy|acknowledge|authorize/.test(
      haystack,
    )
  })
  if (checkboxLabel) {
    const input = checkboxLabel.querySelector("input")
    if (input && !input.checked) input.click()
  }
}

export async function fillMultiCheckbox(rule, values) {
  const selectedValues = Array.isArray(values) ? values : [values]
  if (!rule.$checkboxs || rule.$checkboxs.length === 0) {
    console.error("[Zoho-MultiCheckbox] No checkbox elements found")
    return
  }
  for (const checkbox of rule.$checkboxs) {
    let optionLabel = checkbox.getAttribute("data-label")
    if (!optionLabel) {
      const lyteCheckbox = checkbox.closest("lyte-checkbox")
      if (lyteCheckbox) {
        optionLabel = lyteCheckbox.getAttribute("lt-prop-label")
      }
    }
    const shouldCheck = selectedValues.some(
      (value) =>
        optionLabel.toLowerCase().trim() ===
        value.toLowerCase().trim(),
    )
    if (shouldCheck && !checkbox.checked) {
      checkbox.click()
      await new Promise((resolve) => setTimeout(resolve, 100))
    } else if (!shouldCheck && checkbox.checked) {
      checkbox.click()
      await new Promise((resolve) => setTimeout(resolve, 100))
    }
  }
}

export async function fillZohoSkillSetField(rule, skills) {
  const input = rule?.$input
  if (!input || !Array.isArray(skills) || skills.length === 0) {
    return false
  }
  let filledCount = 0
  for (const skill of skills.slice(0, 20)) {
    const skillText = String(skill || "").trim()
    if (!skillText || hasSelectedSkill(input, skillText)) continue
    await setNativeInputValue(input, skillText)
    input.focus()
    input.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
    input.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
    input.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    input.dispatchEvent(new Event("input", { bubbles: true }))
    const suggestion = await waitForSkillSuggestion(input, skillText)
    if (!suggestion) {
      input.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Escape",
          bubbles: true,
          cancelable: true,
        }),
      )
      continue
    }
    suggestion.dispatchEvent(
      new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
    )
    suggestion.dispatchEvent(
      new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
    )
    suggestion.dispatchEvent(
      new MouseEvent("click", { bubbles: true, cancelable: true }),
    )
    await cancellation.cancellableDelay(250)
    if (hasSelectedSkill(input, skillText)) filledCount += 1
  }
  await setNativeInputValue(input, "")
  input.dispatchEvent(new Event("input", { bubbles: true }))
  await clearAllPopups()
  return filledCount > 0
}

async function waitForSkillSuggestion(input, skillText) {
  const normalized = normalizeAutocompleteText(skillText)
  for (let attempt = 0; attempt < 10; attempt++) {
    const candidates = Array.from(
      document.querySelectorAll(
        'li[aria-label^="Ajouter une comp\xE9tence"], li[aria-label^="Add skill"], li[role="button"]',
      ),
    ).filter((item) => {
      const rect = item.getBoundingClientRect()
      return rect.width > 0 && rect.height > 0
    })
    const match = candidates.find((item) => {
      const label = extractSkillSuggestionLabel(item)
      return normalizeAutocompleteText(label) === normalized
    })
    if (match) return match
    await cancellation.cancellableDelay(150)
  }
  return null
}

function extractSkillSuggestionLabel(item) {
  const ariaLabel = item.getAttribute("aria-label") || ""
  return (
    ariaLabel
      .replace(/^Ajouter une comp\u00e9tence\s*[:\uff1a]\s*/i, "")
      .replace(/^Add skill\s*[:\uff1a]\s*/i, "")
      .trim() ||
    item.textContent?.trim() ||
    ""
  )
}

function hasSelectedSkill(input, skillText) {
  const container =
    input.closest("skills-tag, rec-skills-component") || document
  const normalized = normalizeAutocompleteText(skillText)
  return Array.from(
    container.querySelectorAll(".skl-selected-skill-li"),
  ).some((item) => {
    const label =
      item.querySelector("span")?.getAttribute("aria-label") ||
      item.querySelector("span")?.getAttribute("lt-prop-title") ||
      item.textContent ||
      ""
    return normalizeAutocompleteText(label) === normalized
  })
}

function getCoverLetterUploadDom() {
  const container =
    document.querySelector(
      'rec-file-upload-component[cx-prop-zcqa="manual_COVERLETTER"]',
    ) ??
    document.querySelector(
      'rec-file-upload-component[cx-prop-zcqa="manual_OTHERS"]',
    )
  if (!container) {
    return {
      container: null,
      input: null,
      uploadedFile: null,
      deleteButton: null,
    }
  }
  const input = container.querySelector("input.fileuploadInput")
  const uploadedFile = container.querySelector(".lyteFileUpdListFile")
  const deleteButton = container.querySelector(FILE_REMOVE_SELECTOR)
  return {
    container,
    input,
    uploadedFile,
    deleteButton,
  }
}

export async function checkCoverLetter() {
  const maxAttempts = 30
  const intervalMs = 500
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const { container, input } = getCoverLetterUploadDom()
    if (container && input) {
      dom.postCoverLetterStatus("required")
      return
    }
    await new Promise((resolve) => setTimeout(resolve, intervalMs))
  }
  dom.postCoverLetterStatus("")
}

export async function uploadCoverLetter(
  coverLetter,
  updateRequired,
  updateFilled,
) {
  const { container, input, uploadedFile, deleteButton } =
    getCoverLetterUploadDom()
  if (input) {
    if (uploadedFile && deleteButton) {
      const removeButtons = Array.from(
        container?.querySelectorAll?.(FILE_REMOVE_SELECTOR) ?? [
          deleteButton,
        ],
      )
      removeButtons.forEach((button) => button.click())
      await new Promise((resolve) => setTimeout(resolve, 1e3))
    }
    await dom.uploadFiles(
      input,
      await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter),
      updateRequired,
      updateFilled,
      "Cover Letter",
    )
  }
}
