// @ts-nocheck
/**
 * Meta Careers — DOM fill operations (inputs, location, experience, skills).
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as filler from "../../shared/filler.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as cancellation from "../../methods/cancellation.ts"
import * as coreDom from "../../../core/dom.js"
import * as dom from "../../methods/dom.ts"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeoutModule from "../../../utils/getTargetOrTimeout.js"
import * as autocomplete from "./autocomplete.ts"

const getTargetOrTimeout = {
  default:
    getTargetOrTimeoutModule.default ?? getTargetOrTimeoutModule,
}

const findResumeInputOrRemoveControl = () => {
  let node = document.querySelector('input[type="file"]')
  if (!node) {
    node = xpath.getFirstOrderedNode(
      '//div[@role="button" and contains(@aria-label, "Remove")]',
    )
  }
  return node
}

const isOnExperiencePage = () => {
  const headings = xpath.getOrderedNodes("//h1")
  for (const heading of headings) {
    const text = heading.textContent?.trim() || ""
    if (text.toLowerCase() === "experience") return true
  }
  return false
}

export const preFillForm = async () => {
  for (;;) {
    const removeButton = findRemoveButton()
    if (removeButton) {
      removeButton.focus()
      await delay.delay(50)
      removeButton.click()
      await delay.delay(500)
      removeButton.blur()
      await delay.delay(50)
    } else {
      break
    }
  }
  const addButton = findAddButton()
  if (addButton && !isOnExperiencePage()) {
    addButton.focus()
    await delay.delay(50)
    addButton.click()
    await delay.delay(500)
    addButton.blur()
    await delay.delay(50)
  }
}

export const uploadResume = async (
  resumeInfo,
  updateFieldRequiredStatus,
  updateFilledProgress,
) => {
  const input = findResumeInputOrRemoveControl()
  if (input) {
    await dom
      .uploadFiles(
        input,
        await answerMethods.fetchPdfAsBlob(resumeInfo),
        updateFieldRequiredStatus,
        updateFilledProgress,
        "Resume/CV",
      )
      .then(() => {})
  } else {
    console.warn(`[uploadResume] ⚠️ No resume input found`)
  }
}

export async function removeResume() {
  const control = findResumeInputOrRemoveControl()
  if (control && control.tagName.toLowerCase() === "div") {
    control.click()
    await delay.delay(500)
  }
}

const setNativeInputValue = (element, value) => {
  const proto =
    element instanceof HTMLTextAreaElement
      ? HTMLTextAreaElement.prototype
      : HTMLInputElement.prototype
  const valueSetter = Object.getOwnPropertyDescriptor(proto, "value")?.set
  if (valueSetter) {
    valueSetter.call(element, value)
  } else {
    element.value = value
  }
}

const findPopoverForControl = (control, allowFallback = true) => {
  const controlsId = control.getAttribute("aria-controls")
  if (controlsId) {
    const byId = document.getElementById(controlsId)
    if (byId) return byId
  }
  return allowFallback
    ? xpath.getFirstOrderedNodeSafe("//div[contains(@id, '__popover')]")
    : null
}

const getOpenPopover = (control) => {
  if (control.getAttribute("aria-expanded") === "false") return null
  const popover = findPopoverForControl(control, false)
  if (
    !popover ||
    popover.hidden ||
    popover.getAttribute?.("aria-hidden") === "true"
  ) {
    return null
  }
  return popover
}

const findPopoverSearchInput = (popover) =>
  popover.querySelector('input:not([type="hidden"]), textarea')

const collectPopoverOptions = (popover) => {
  const options = Array.from(
    popover.querySelectorAll('[role="option"], li'),
  ).filter((option) =>
    autocomplete.normalizeAutocompleteText(option.textContent || ""),
  )
  if (options.length > 0) return options
  return Array.from(popover.querySelectorAll('[role="listbox"] span')).filter(
    (option) =>
      autocomplete.normalizeAutocompleteText(option.textContent || ""),
  )
}

const getReactTrackedValue = (input) => {
  if (!input) return null
  const tracker = input._valueTracker
  try {
    return tracker?.getValue?.() ?? null
  } catch {
    return null
  }
}

const resolveLiveCurrentLocationButton = (button) => {
  const byId = button.id ? document.getElementById(button.id) : null
  if (byId instanceof HTMLButtonElement) return byId
  if (button.isConnected) return button
  return (
    Array.from(
      document.querySelectorAll('button[role="combobox"][aria-label]'),
    ).find(
      (candidate) =>
        autocomplete.normalizeAutocompleteText(
          candidate.getAttribute("aria-label") || "",
        ) === "current location",
    ) ?? button
  )
}

const logCurrentLocationStage = (
  stage,
  button,
  resolvedValue,
  popover,
  searchInput,
  option,
  searchValue = resolvedValue,
) => {
  const liveButton = resolveLiveCurrentLocationButton(button)
  const resolvedPopover = popover ?? findPopoverForControl(button, false)
  const resolvedInput =
    searchInput ??
    (resolvedPopover ? findPopoverSearchInput(resolvedPopover) : null)
  console.info(
    `[MetaCurrentLocation] ${JSON.stringify({
      stage,
      resolvedValue,
      searchValue,
      searchValueDiffersFromResolved:
        autocomplete.normalizeAutocompleteText(searchValue) !==
        autocomplete.normalizeAutocompleteText(resolvedValue),
      buttonText: autocomplete.normalizeAutocompleteText(
        button.innerText || button.textContent || "",
      ),
      buttonConnected: button.isConnected,
      liveButtonSame: liveButton === button,
      liveButtonConnected: liveButton.isConnected,
      liveButtonText: autocomplete.normalizeAutocompleteText(
        liveButton.innerText || liveButton.textContent || "",
      ),
      expanded: button.getAttribute("aria-expanded"),
      controls: button.getAttribute("aria-controls"),
      popoverId: resolvedPopover?.id ?? null,
      popoverConnected: resolvedPopover?.isConnected ?? false,
      popoverHidden: resolvedPopover?.hidden ?? null,
      inputConnected: resolvedInput?.isConnected ?? false,
      inputValue: resolvedInput?.value ?? null,
      reactTrackedValue: getReactTrackedValue(resolvedInput ?? undefined),
      optionTag: option?.tagName ?? null,
      optionRole: option?.getAttribute?.("role") ?? null,
      optionId: option?.id ?? null,
      optionConnected: option?.isConnected ?? null,
      optionFocusSkipped: !!option || null,
      activationOrder: option
        ? "synthetic-mousedown>synthetic-mouseup>native-click"
        : null,
      optionTexts: resolvedPopover
        ? collectPopoverOptions(resolvedPopover)
            .slice(0, 10)
            .map((opt) =>
              autocomplete.normalizeAutocompleteText(opt.textContent || ""),
            )
        : [],
    })}`,
  )
}

const activatePopoverOption = async (option) => {
  option.scrollIntoView?.({ block: "center" })
  option.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
  option.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
  option.click()
  await delay.delay(80)
}

const cleanupCurrentLocationSearch = (button, searchInput) => {
  if (searchInput) {
    try {
      setNativeInputValue(searchInput, "")
    } catch {
      // ignore
    }
    try {
      searchInput.dispatchEvent(new Event("input", { bubbles: true }))
    } catch {
      // ignore
    }
    try {
      searchInput.blur()
    } catch {
      // ignore
    }
    try {
      searchInput.dispatchEvent(new FocusEvent("focusout", { bubbles: true }))
    } catch {
      // ignore
    }
  }
  try {
    if (getOpenPopover(button)) button.click()
  } catch {
    // ignore
  }
  try {
    button.blur()
  } catch {
    // ignore
  }
  return false
}

export const triggerMetaCurrentLocationSearch = async (button, searchValue) => {
  let searchInput
  if (!searchValue.trim()) return null
  try {
    button.focus()
    if (!getOpenPopover(button)) {
      await delay.delay(50)
      button.click()
    }
    const popover = await getTargetOrTimeout.default(
      () => getOpenPopover(button),
      () => false,
      20,
    )
    if (
      !popover ||
      !(
        (searchInput =
          (await getTargetOrTimeout.default(
            () => findPopoverSearchInput(popover),
            () => false,
            20,
          )) ?? undefined)
      )
    ) {
      cleanupCurrentLocationSearch(button)
      return null
    }
    searchInput.focus()
    searchInput.dispatchEvent(new FocusEvent("focusin", { bubbles: true }))
    setNativeInputValue(searchInput, "")
    searchInput.dispatchEvent(new Event("input", { bubbles: true }))
    setNativeInputValue(searchInput, searchValue)
    searchInput.dispatchEvent(new Event("input", { bubbles: true }))
    searchInput.dispatchEvent(new Event("change", { bubbles: true }))
    return {
      cleanup: async () => {
        cleanupCurrentLocationSearch(button, searchInput)
      },
    }
  } catch (error) {
    cleanupCurrentLocationSearch(button, searchInput)
    throw error
  }
}

export const fillResolvedCurrentLocation = async (
  button,
  resolvedValue,
  searchValue = resolvedValue,
) => {
  let searchInput
  if (!resolvedValue.trim()) return false
  const query = searchValue.trim() || resolvedValue
  try {
    logCurrentLocationStage(
      "resolved-fill-start",
      button,
      resolvedValue,
      undefined,
      undefined,
      undefined,
      query,
    )
    if (!getOpenPopover(button)) {
      button.focus()
      await delay.delay(50)
      button.click()
    }
    const popover = await getTargetOrTimeout.default(
      () => getOpenPopover(button),
      () => false,
      20,
    )
    if (!popover) {
      console.warn(
        "[MetaCurrentLocation] resolved fill could not open popover",
        {
          buttonConnected: button.isConnected,
          expanded: button.getAttribute("aria-expanded"),
          hasControls: !!button.getAttribute("aria-controls"),
        },
      )
      return cleanupCurrentLocationSearch(button)
    }
    logCurrentLocationStage(
      "resolved-popover-open",
      button,
      resolvedValue,
      popover,
      undefined,
      undefined,
      query,
    )
    if (
      !(
        (searchInput =
          (await getTargetOrTimeout.default(
            () => findPopoverSearchInput(popover),
            () => false,
            20,
          )) ?? undefined)
      )
    ) {
      console.warn("[MetaCurrentLocation] resolved fill found no search input")
      return cleanupCurrentLocationSearch(button)
    }

    const activateExactOption = async (option, input) => {
      logCurrentLocationStage(
        "exact-option-found",
        button,
        resolvedValue,
        getOpenPopover(button),
        input,
        option,
        query,
      )
      await activatePopoverOption(option)
      logCurrentLocationStage(
        "option-activation-complete",
        button,
        resolvedValue,
        findPopoverForControl(button, false),
        input,
        option,
        query,
      )
      input.blur()
      input.dispatchEvent(new FocusEvent("focusout", { bubbles: true }))
      input.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(80)
      const committedButton = await getTargetOrTimeout.default(() => {
        const liveButton = resolveLiveCurrentLocationButton(button)
        return autocomplete.findExactMetaPopoverOption(
          [liveButton],
          resolvedValue,
        ) === liveButton
          ? liveButton
          : null
      }, () => false, 20)
      logCurrentLocationStage(
        committedButton ? "commit-confirmed" : "commit-readback-failed",
        committedButton ?? button,
        resolvedValue,
        findPopoverForControl(committedButton ?? button, false),
        input,
        undefined,
        query,
      )
      return !!committedButton
    }

    searchInput.focus()
    searchInput.dispatchEvent(new FocusEvent("focusin", { bubbles: true }))
    await delay.delay(50)
    setNativeInputValue(searchInput, "")
    searchInput.dispatchEvent(new Event("input", { bubbles: true }))
    logCurrentLocationStage(
      "resolved-search-cleared",
      button,
      resolvedValue,
      popover,
      searchInput,
      undefined,
      query,
    )
    await delay.delay(50)
    setNativeInputValue(searchInput, query)
    searchInput.dispatchEvent(new Event("input", { bubbles: true }))
    searchInput.dispatchEvent(new Event("change", { bubbles: true }))
    logCurrentLocationStage(
      "resolved-search-dispatched",
      button,
      resolvedValue,
      popover,
      searchInput,
      undefined,
      query,
    )
    await delay.delay(120)

    const exactMatch = await getTargetOrTimeout.default(() => {
      const openPopover = getOpenPopover(button)
      if (!openPopover) return null
      const input = findPopoverSearchInput(openPopover)
      const option = autocomplete.findExactMetaPopoverOption(
        collectPopoverOptions(openPopover),
        resolvedValue,
      )
      return input && option ? { option, input } : null
    }, () => false, 30)

    if (exactMatch) {
      searchInput = exactMatch.input
      if (await activateExactOption(exactMatch.option, exactMatch.input)) {
        return true
      }
      console.warn("[MetaCurrentLocation] exact option click did not commit")
    } else {
      logCurrentLocationStage(
        "exact-option-timeout",
        button,
        resolvedValue,
        findPopoverForControl(button, false),
        searchInput,
        undefined,
        query,
      )
      console.warn(
        "[MetaCurrentLocation] resolved search found no exact option",
        {
          buttonConnected: button.isConnected,
          expanded: button.getAttribute("aria-expanded"),
        },
      )
    }
    return cleanupCurrentLocationSearch(button, searchInput)
  } catch (error) {
    console.warn("[MetaCurrentLocation] resolved fill threw", {
      message: error instanceof Error ? error.message : String(error),
    })
    return cleanupCurrentLocationSearch(button, searchInput)
  }
}

const fillButtonComboboxAutocomplete = async (button, value, label) => {
  button.focus()
  await delay.delay(50)
  button.click()
  const popover = await getTargetOrTimeout.default(
    () => findPopoverForControl(button),
    () => false,
    20,
  )
  if (!popover) return false
  const searchInput = await getTargetOrTimeout.default(
    () => findPopoverSearchInput(popover),
    () => false,
    20,
  )
  if (!searchInput) return false

  const candidates = autocomplete.buildMetaAutocompleteCandidates(label, value)
  for (const candidate of candidates) {
    searchInput.focus()
    searchInput.dispatchEvent(new FocusEvent("focusin", { bubbles: true }))
    await delay.delay(50)
    setNativeInputValue(searchInput, "")
    searchInput.dispatchEvent(new Event("input", { bubbles: true }))
    await delay.delay(50)
    setNativeInputValue(searchInput, candidate)
    searchInput.dispatchEvent(new Event("input", { bubbles: true }))
    searchInput.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(120)

    const bestOption = await getTargetOrTimeout.default(() => {
      const options = collectPopoverOptions(popover)
      return autocomplete.findBestPopoverOption(
        options,
        candidates,
        /location/i.test(label || ""),
      )
    }, () => false, 30)

    if (bestOption) {
      await activatePopoverOption(bestOption)
      searchInput.blur()
      searchInput.dispatchEvent(new FocusEvent("focusout", { bubbles: true }))
      searchInput.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(80)
      return true
    }
  }

  searchInput.blur()
  searchInput.dispatchEvent(new FocusEvent("focusout", { bubbles: true }))
  return false
}

export const fillInputTextField = async (element, value, label) => {
  if (element instanceof HTMLButtonElement) {
    return fillButtonComboboxAutocomplete(element, value, label)
  }
  if (
    element instanceof HTMLInputElement &&
    element.getAttribute("role") === "combobox" &&
    !element.textContent.trim().toLowerCase().includes("skill")
  ) {
    element.focus()
    element.dispatchEvent(new FocusEvent("focusin", { bubbles: true }))
    await delay.delay(50)
    setNativeInputValue(element, "")
    element.dispatchEvent(new Event("input", { bubbles: true }))
    await delay.delay(50)
    setNativeInputValue(element, value)
    element.dispatchEvent(new Event("input", { bubbles: true }))
    element.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(50)
    const listbox = await getTargetOrTimeout.default(
      () =>
        xpath.getFirstOrderedNodeSafe('.//div[contains(@role, "listbox")]'),
      () => false,
      20,
    )
    if (listbox) {
      const option = listbox.querySelector("span")
      if (option) {
        option.focus()
        option.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
        option.click()
        option.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
        await delay.delay(50)
      }
      await delay.delay(50)
    }
    return
  }

  element.focus()
  element.dispatchEvent(new FocusEvent("focusin", { bubbles: true }))
  await delay.delay(50)
  setNativeInputValue(element, "")
  element.dispatchEvent(new Event("input", { bubbles: true }))
  await delay.delay(50)
  setNativeInputValue(element, value)
  element.dispatchEvent(new Event("input", { bubbles: true }))
  element.dispatchEvent(new Event("change", { bubbles: true }))
  await delay.delay(50)
  if (!element.textContent.trim().toLowerCase().includes("skill")) {
    element.blur()
    element.dispatchEvent(new FocusEvent("focusout", { bubbles: true }))
    element.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(50)
  }
}

const normalizeRadioChoiceText = (text) =>
  String(text)
    .normalize("NFKC")
    .replace(/[\u2018\u2019\u201a\u2032\u2035]/g, "'")
    .replace(/[\u201c\u201d\u2033]/g, '"')
    .replace(/\s*\*\s*/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()

const isNormalizedChoiceMatch = (left, right) =>
  choiceMatch.isExactChoiceMatch(
    normalizeRadioChoiceText(left),
    normalizeRadioChoiceText(right),
  )

export const fillRadioFiled = async (rule, values) => {
  const label = rule.label
  const value = values?.[0]
  if (!value) {
    console.warn("[fillRadioGroupFiled] No value provided")
    return
  }
  const radios = rule.$input
  if (!radios || radios.length === 0) {
    throw new filler.FillError(
      `(Radio) No radio buttons found for label: "${label}"`,
    )
  }

  let matchedRadio = null
  const valueLower = String(value).trim().toLowerCase()
  const valueNormalized = normalizeRadioChoiceText(String(value))
  const options = rule.options ?? []

  if (options.length === radios.length) {
    for (let index = 0; index < options.length; index++) {
      const option = options[index]
      if (!option) continue
      if (
        choiceMatch.isExactChoiceMatch(
          normalizeRadioChoiceText(option),
          valueNormalized,
        )
      ) {
        matchedRadio = radios[index]
        break
      }
    }
  }

  if (!matchedRadio) {
    for (const radio of radios) {
      const radioValue = (radio.value || "").trim().toLowerCase()
      if (radioValue && radioValue === valueLower) {
        matchedRadio = radio
        break
      }
      const siblingText =
        radio.parentElement?.nextElementSibling?.textContent?.trim() || ""
      if (isNormalizedChoiceMatch(siblingText, String(value))) {
        matchedRadio = radio
        break
      }
    }
  }

  if (matchedRadio && !matchedRadio.checked) {
    matchedRadio.focus()
    await delay.delay(50)
    const labelEl = matchedRadio.closest("label")
    if (labelEl) {
      labelEl.click()
    } else {
      matchedRadio.click()
    }
    await delay.delay(80)
    if (!matchedRadio.checked) matchedRadio.click()
    await delay.delay(50)
    matchedRadio.blur()
    await delay.delay(50)
  } else if (!matchedRadio) {
    console.error(`[fillRadioGroupFiled] ❌ No radio found for: "${value}"`)
    throw new filler.FillError(
      `(Radio) No option "${value}" found for label: "${label}"`,
    )
  }
}

export function findMetaDegreeOption(options, targetDegree) {
  const exact = choiceMatch.findExactChoice(
    options,
    targetDegree,
    (option) => option.textContent,
  )
  if (exact) return exact

  const degreeAliases = [
    ["Master of Science", "MSc", "M.S."],
    ["Master of Arts", "MA", "M.A."],
    ["Bachelor of Science", "BSc", "B.S."],
    ["Bachelor of Arts", "BA", "B.A."],
    ["Doctor of Philosophy", "PhD", "Ph.D."],
    ["Master", "Masters", "Master's degree"],
    ["Bachelor", "Bachelors", "Bachelor's degree"],
  ]
  const aliasGroup = degreeAliases.find((group) =>
    group.some((alias) => choiceMatch.isExactChoiceMatch(alias, targetDegree)),
  )
  if (!aliasGroup) return

  const matches = options.filter((option) =>
    aliasGroup.some((alias) =>
      choiceMatch.isExactChoiceMatch(option.textContent, alias),
    ),
  )
  return matches.length === 1 ? matches[0] : undefined
}

export const fillSelectField = async (rule, values) => {
  if (!values || values.length === 0) return
  const value = values[0]
  const combobox =
    rule.$label.parentElement?.nextElementSibling.querySelector(
      'div[role="combobox"]',
    )
  let matchedOption = null
  if (!combobox) {
    throw new filler.FillError(
      `(Select) Could not find field for label: "${rule.label}"`,
    )
  }
  combobox.focus()
  await delay.delay(50)
  combobox.click()
  await delay.delay(100)

  const listbox = await getTargetOrTimeout.default(
    () =>
      xpath.getFirstOrderedNodeSafe(
        "//div[contains(@role, 'listbox') and contains(@aria-label, Degree)]",
      ),
    () => false,
    10,
  )
  if (listbox) {
    const options = xpath.getOrderedNodesSafe(
      './/div[@role="option"]',
      listbox,
    )
    matchedOption = findMetaDegreeOption(options, value) || null
  }
  if (matchedOption) {
    matchedOption.focus()
    await delay.delay(50)
    matchedOption.click()
    await delay.delay(100)
    combobox.blur()
    await delay.delay(50)
    return
  }
  console.warn(`[fillSelectField] ⚠️ No matching option found for: "${value}"`)
}

export const fillCheckboxField = async (rule, values) => {
  if (
    values.length === 1 &&
    rule.$checkboxs.length === 1 &&
    values[0] === "yes" &&
    !rule.$checkboxs[0].checked
  ) {
    const checkbox = rule.$checkboxs[0]
    checkbox.focus()
    await delay.delay(50)
    checkbox.click()
    await delay.delay(100)
    checkbox.blur()
    await delay.delay(50)
  }

  for (const value of values) {
    for (const checkbox of rule.$checkboxs) {
      const optionText =
        xpath
          .getFirstOrderedNodeSafe(
            "./ancestor::label//span[normalize-space(text())]",
            checkbox,
          )
          ?.textContent?.replace(/\s*\*\s*/g, "")
          .trim() || ""
      if (
        value.toLowerCase() !== optionText.toLowerCase() ||
        checkbox.checked
      ) {
        continue
      }
      checkbox.focus()
      await delay.delay(50)
      checkbox.click()
      await delay.delay(100)
      checkbox.blur()
      await delay.delay(50)
    }
  }

  if (rule.label.toLowerCase().includes("location")) {
    await getTargetOrTimeout.default(
      () =>
        xpath.getFirstOrderedNodeSafe(
          "//span[contains(@class, 'x1motxo8') and contains(., 'disability')]",
          rule.$label,
        ),
      () => false,
      20,
    )
  }
}

export const fillMultiSelectField = async (rule, values) => {}

export const findRemoveButton = () => {
  const button = xpath.getFirstOrderedNode(
    '//div[contains(@role, "button")]//div[contains(normalize-space(.), "Remove this") and contains(@class, "xt0psk2")]',
  )
  return button || null
}

export const findAddButton = () => {
  const button = xpath.getFirstOrderedNode(
    '//div[contains(@role, "button")]//div[contains(., "Add another")]',
  )
  return button || null
}

export const addExpOrEduSection = async (count) => {
  const addButton = findAddButton()
  if (!addButton) {
    console.warn("[addExpOrEduSection] No add button found")
    return
  }
  for (let index = 0; index < count; index++) {
    addButton.focus()
    await delay.delay(50)
    addButton.click()
    await delay.delay(500)
    addButton.blur()
    await delay.delay(50)
  }
}

const WORK_EXPERIENCE_XPATHS = {
  Position: ".//label[text()='Position']/following-sibling::div/button",
  Location:
    ".//div[text()='Location']/parent::div/following-sibling::div//input",
  "Start (MM/YYYY)": ".//div[text()='Start (MM/YYYY)']/following::input[1]",
  "End (MM/YYYY)": ".//div[text()='End (MM/YYYY)']/following::input[1]",
  Description: ".//div[text()='Description']/following::textarea[1]",
}

const WORK_EXPERIENCE_FILLERS = {
  Position: fillInputTextField,
  Location: fillInputTextField,
  "Start (MM/YYYY)": fillInputTextField,
  "End (MM/YYYY)": fillInputTextField,
  Description: fillInputTextField,
}

const fillWorkExperienceSection = async (experience, sectionRoot, onField) => {
  let root = sectionRoot
  for (const [key, value] of Object.entries(experience)) {
    if (key === "isCurrent") {
      if (value === false) {
        onField?.(
          key,
          xpath.getFirstOrderedNodeSafe(".//input[@type='checkbox']", root),
          value,
        )
        continue
      }
      const checkboxXPath = ".//input[@type='checkbox']"
      const checkbox = await getTargetOrTimeout.default(
        () => xpath.getFirstOrderedNodeSafe(checkboxXPath, root),
        () => false,
        10,
      )
      if (checkbox) {
        const currentlyChecked = checkbox.checked
        if (value === true && !currentlyChecked) {
          checkbox.focus()
          await delay.delay(50)
          checkbox.click()
          await delay.delay(100)
          checkbox.blur()
          await delay.delay(50)
        } else if (value === false && currentlyChecked) {
          checkbox.focus()
          await delay.delay(50)
          checkbox.click()
          await delay.delay(100)
          checkbox.blur()
          await delay.delay(50)
        }
      }
      onField?.(key, checkbox, value)
      continue
    }

    const fieldXPath = WORK_EXPERIENCE_XPATHS[key]
    if (!fieldXPath) {
      console.warn(
        `[fillWorkExperienceSection] No XPath mapping for key: ${key}`,
      )
      continue
    }

    const fieldElement = await getTargetOrTimeout.default(
      () => xpath.getFirstOrderedNodeSafe(fieldXPath, root),
      () => false,
      10,
    )
    await delay.delay(100)
    if (!fieldElement) {
      onField?.(key, null, value, false)
      console.warn(
        `[fillWorkExperienceSection] No element found for key: ${key} with XPath: ${fieldXPath}`,
      )
      continue
    }

    const fillerFn = WORK_EXPERIENCE_FILLERS[key]
    if (!fillerFn) {
      onField?.(key, fieldElement, value, false)
      console.warn(
        `[fillWorkExperienceSection] No fill method mapping for key: ${key}`,
      )
      continue
    }

    try {
      const fillResult = await fillerFn(fieldElement, value)
      onField?.(key, fieldElement, value, fillResult)
    } catch (error) {
      onField?.(key, fieldElement, value, false, error)
      throw error
    }

    root = await getTargetOrTimeout.default(
      () =>
        xpath.getFirstOrderedNodeSafe(
          ".//ancestor::div[contains(@class, 'xbjudin')]",
          fieldElement,
        ),
      () => false,
      10,
    )
    await delay.delay(200)
  }
}

export const fillWorkExperience = async (experiences, options) => {
  const sectionRoots = xpath.getOrderedNodes(
    "//h1[text()='Experience']/following-sibling::div//div[@class[contains(., 'xbjudin')]]",
  )
  const reporter = options
    ? answerMethods.createSectionResultReporter("employment", options)
    : undefined
  reporter?.setLabel("Employment")

  const focusRules = []
  for (const [rowIndex, experience] of experiences.entries()) {
    const sectionRoot = sectionRoots.shift()
    const row = reporter?.ensureRow(rowIndex, experience)
    const children = []
    focusRules[rowIndex] = {
      type: enums.FIELD_TYPE.EMPLOYMENT,
      label: "Employment",
      children,
    }
    if (reporter) {
      coreDom.setSectionResultFocusRules("employment", focusRules)
    }

    const onField = (fieldKey, fieldElement, fieldValue, fillOk, error) => {
      if (!reporter || !row) return
      let element = fieldElement
      if (!sectionRoot) element = null

      const existing = children.find((child) => child.label === fieldKey)
      if (existing) {
        existing.$input = element
      } else {
        children.push({
          label: fieldKey,
          type: enums.FIELD_TYPE.TEXT,
          $input: element,
        })
      }

      const expectedText = String(fieldValue ?? "").trim()
      const actualText =
        typeof fieldValue === "boolean"
          ? String(element?.checked ?? "")
          : String(element?.value ?? element?.textContent ?? "").trim()
      const isFilled =
        element &&
        expectedText !== "" &&
        fillOk !== false &&
        (fillOk === true ||
          actualText.toLowerCase() === expectedText.toLowerCase())

      reporter.updateField(
        row,
        fieldKey,
        actualText || undefined,
        error instanceof cancellation.SkippedError
          ? "skipped"
          : isFilled
            ? "filled"
            : "missed",
      )
      reporter.emit()
    }

    reporter?.emit()
    if (sectionRoot) {
      await fillWorkExperienceSection(experience, sectionRoot, onField)
    } else {
      for (const [fieldKey, fieldValue] of Object.entries(experience)) {
        if (fieldKey in WORK_EXPERIENCE_XPATHS || fieldKey === "isCurrent") {
          onField(fieldKey, null, fieldValue, false)
        }
      }
    }

    const employerXPath =
      ".//label[text()='Employer name']/following-sibling::div/button"
    const employerButton = await getTargetOrTimeout.default(
      () => xpath.getFirstOrderedNodeSafe(employerXPath, sectionRoot),
      () => false,
      10,
    )
    try {
      const fillResult = await fillInputTextField(
        employerButton,
        experience["Employer name"],
      )
      onField(
        "Employer name",
        employerButton,
        experience["Employer name"],
        fillResult,
      )
    } catch (error) {
      onField(
        "Employer name",
        employerButton,
        experience["Employer name"],
        false,
        error,
      )
      throw error
    }
  }
}

export const fillSkills = async (skills) => {
  const skillsContainer = xpath.getFirstOrderedNode(
    "//label[contains(text(), 'Skills')]/following-sibling::div[1]",
  )
  if (!skillsContainer) {
    console.warn("[fillSkills] No skills input found")
    return
  }

  const deleteButtons = Array.from(
    skillsContainer.querySelectorAll("div[aria-label='Delete']"),
  )
  if (deleteButtons.length > 0) {
    for (const deleteButton of deleteButtons) {
      deleteButton.click()
      await delay.delay(50)
    }
    await delay.delay(500)
  }

  for (const skill of skills) {
    const skillInput = xpath.getFirstOrderedNodeSafe(
      ".//input",
      skillsContainer,
    )
    skillsContainer.focus()
    await delay.delay(50)
    skillsContainer.click()
    await delay.delay(100)
    if (skillInput) {
      await fillInputTextField(skillInput, skill)
      const listbox = await getTargetOrTimeout.default(
        () =>
          xpath.getFirstOrderedNodeSafe('.//ul[contains(@role, "listbox")]'),
        () => false,
        20,
      )
      if (listbox) {
        const option = listbox.querySelector("li")
        if (option) {
          option.focus()
          option.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
          option.click()
          option.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
          await delay.delay(50)
        }
        await delay.delay(50)
      }
    }
  }
}
