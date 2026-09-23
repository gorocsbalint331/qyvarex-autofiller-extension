// @ts-nocheck
/**
 * PinpointHQ — DOM fill operations (inputs, country, phone, resume).
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as defaultInput from "../../crawler/fill-utils/input.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as country from "./country.ts"
import * as phoneCountryCode from "./phone-country-code.ts"

export {
  findPinpointPhoneCountryOption,
  formatPinpointPhoneValue,
  resolvePinpointPhoneCountryCode,
} from "./phone-country-code.ts"

const COUNTRY_COMMIT_ATTEMPTS = 100

function normalizeCountryText(value) {
  return (typeof value === "string" ? value : "")
    .replace(/\s*\([^)]*\)\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

export function isPinpointCountryOptionMatched(option, answer) {
  const wanted = normalizeCountryText(answer)
  if (!wanted) return false
  const label = normalizeCountryText(option.label)
  const value = normalizeCountryText(option.value)
  const aliases = {
    us: ["united states", "united states of america", "usa"],
    gb: ["united kingdom", "uk", "great britain"],
  }
  const aliasList = aliases[value] || []
  return value === wanted || label === wanted || aliasList.includes(wanted)
}

function isCountryOptionMatchedLoose(option, answer) {
  const wanted = normalizeCountryText(answer)
  if (!wanted) return false
  const label = normalizeCountryText(option.label)
  const value = normalizeCountryText(option.value)
  const aliases = {
    us: ["united states", "united states of america", "usa"],
    gb: ["united kingdom", "uk", "great britain"],
  }
  return (
    value === wanted ||
    label === wanted ||
    (aliases[value] || []).includes(wanted)
  )
}

function readSelectOptions(select) {
  return Array.from(select.options)
    .filter((option) => option.value && option.value !== "blank")
    .map((option) => ({
      value: option.value.trim(),
      label: option.textContent?.trim() || option.value.trim(),
    }))
}

export function findPinpointCountryOption(options, answer) {
  return (
    options.find((option) => isCountryOptionMatchedLoose(option, answer)) ||
    options.find((option) => isPinpointCountryOptionMatched(option, answer)) ||
    null
  )
}

function findAddressCountrySelect() {
  return (
    Array.from(document.querySelectorAll("select")).find(
      (select) =>
        select.id.includes("[country]") ||
        select.name.includes("[country]") ||
        select.closest("#address-country"),
    ) || null
  )
}

export function resolvePinpointCountryIso2(
  answer,
  select = findAddressCountrySelect(),
) {
  const normalized = normalizeCountryText(answer)
  if (!normalized) return null
  if (normalized === "uk") return "GB"
  if (/^[a-z]{2}$/.test(normalized)) return normalized.toUpperCase()
  if (select) {
    const matched = findPinpointCountryOption(readSelectOptions(select), answer)
    if (matched?.value) return matched.value.toUpperCase()
  }
  const fallback = {
    "united states": "US",
    "united states of america": "US",
    usa: "US",
    canada: "CA",
    "united kingdom": "GB",
    uk: "GB",
    "great britain": "GB",
    "new zealand": "NZ",
    australia: "AU",
    china: "CN",
    india: "IN",
  }
  return fallback[normalized] || null
}

function setNativeInputValue(input, value) {
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value",
  )?.set
  if (setter) setter.call(input, value)
  else input.value = value
}

function setNativeSelectValue(select, value) {
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLSelectElement.prototype,
    "value",
  )?.set
  if (setter) setter.call(select, value)
  else select.value = value
}

function dispatchInputChange(element) {
  element.dispatchEvent(new Event("input", { bubbles: true }))
  element.dispatchEvent(new Event("change", { bubbles: true }))
}

function typeIntoCombobox(input, text) {
  setNativeInputValue(input, text)
  input.dispatchEvent(
    new InputEvent("input", {
      bubbles: true,
      data: text,
      inputType: "insertText",
    }),
  )
  input.dispatchEvent(new Event("change", { bubbles: true }))
}

function isReactSelectVisibleValue(section, option) {
  return (
    normalizeCountryText(
      section.querySelector(country.PINPOINT_COUNTRY_VISIBLE_VALUE_SELECTOR)
        ?.textContent,
    ) === normalizeCountryText(option.label)
  )
}

async function waitForVisibleCountryValue(section, option, attempts = 10) {
  for (let i = 0; i < attempts; i++) {
    if (isReactSelectVisibleValue(section, option)) return true
    await delay.delay(50)
  }
  return false
}

function findCountryHiddenInput(section, select) {
  const hiddens = Array.from(
    (section || document).querySelectorAll('input[type="hidden"]'),
  )
  return (
    hiddens.find(
      (input) =>
        input.name === select.id ||
        input.name === select.name ||
        input.name.includes("[country]"),
    ) || null
  )
}

async function fillCountryReactSelect(section, option) {
  const control = section?.querySelector(".react-select__control")
  const combobox = section?.querySelector(
    'input.react-select__input[role="combobox"], input[role="combobox"]',
  )
  if (!control || !combobox) {
    console.info("[PinpointHQ][Country] react-select-unavailable", {
      hasControl: !!control,
      hasCombobox: !!combobox,
    })
    return false
  }

  console.info("[PinpointHQ][Country] react-select-open", {
    hasControl: true,
    hasCombobox: true,
  })
  control.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  control.click()
  combobox.focus()
  await delay.delay(100)
  typeIntoCombobox(combobox, option.label)
  await delay.delay(300)

  const visibleOptions = Array.from(
    document.querySelectorAll(
      '.react-select__option, [id^="react-select-"][id*="-option-"], [role="option"]',
    ),
  ).filter((node) => {
    const text = node.textContent?.trim()
    return !!text && getComputedStyle(node).display !== "none"
  })

  const matched =
    visibleOptions.find(
      (node) =>
        normalizeCountryText(node.textContent) ===
        normalizeCountryText(option.label),
    ) ||
    visibleOptions.find((node) =>
      isPinpointCountryOptionMatched(
        {
          value: option.value,
          label: node.textContent?.trim() || "",
        },
        option.label,
      ),
    )

  console.info("[PinpointHQ][Country] react-select-option", {
    visibleOptionCount: visibleOptions.length,
    targetFound: !!matched,
  })

  if (!matched) {
    combobox.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
        keyCode: 13,
        bubbles: true,
        cancelable: true,
      }),
    )
    await delay.delay(100)
    return false
  }

  matched.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  matched.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  matched.click()
  await delay.delay(150)

  if (await waitForVisibleCountryValue(section, option)) {
    console.info("[PinpointHQ][Country] react-select-option-clicked", {
      visibleValueCommitted: true,
    })
    return true
  }

  const retryCombobox = section.querySelector(
    'input.react-select__input[role="combobox"], input[role="combobox"]',
  )
  retryCombobox?.focus()
  retryCombobox?.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      bubbles: true,
      cancelable: true,
    }),
  )
  await delay.delay(50)
  retryCombobox?.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      bubbles: true,
      cancelable: true,
    }),
  )

  const committed = await waitForVisibleCountryValue(section, option)
  console.info("[PinpointHQ][Country] react-select-keyboard-fallback", {
    visibleValueCommitted: committed,
  })
  return committed
}

function isPhoneInput(input) {
  return (
    input.type === "tel" ||
    input.name.toLowerCase().includes("[phone]") ||
    input.id.toLowerCase().includes("phone") ||
    !!input.closest(".intl-tel-input")
  )
}

export async function fillInputTextField(input, value, phoneCountryAnswer) {
  if (!input || !value || value.trim() === "") return
  input.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)
  if (input instanceof HTMLInputElement && isPhoneInput(input)) {
    const formatted = phoneCountryCode.formatPinpointPhoneValue(
      value,
      phoneCountryAnswer,
    )
    await defaultInput.fillDefaultInputField(input, formatted)
    return
  }
  await defaultInput.fillDefaultInputField(input, value)
}

export async function fillSelectField(rule, answers) {
  if (!answers || answers.length === 0) return false
  const answer = answers[0]
  const label = rule.label
  const select = rule.$input
  if (!select) return false

  select.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)

  const options = readSelectOptions(select)
  const matched = findPinpointCountryOption(options, answer)
  if (!matched) return false

  if (label.toLowerCase().trim() === "country") {
    const section =
      rule.$label?.closest(".col-1-1, .col-md-1-1") ||
      select.closest(".col-1-1, .col-md-1-1")
    const reactClicked = await fillCountryReactSelect(section, matched)
    setNativeSelectValue(select, matched.value)
    const hidden = findCountryHiddenInput(section, select)
    if (hidden && reactClicked) setNativeInputValue(hidden, matched.value)
    console.info("[PinpointHQ][Country] controls-updated", {
      nativeMatchesExpected: select.value === matched.value,
      reactSelectClicked: reactClicked,
      submitInputPresent: !!hidden,
    })
    return reactClicked && select.value === matched.value
  }

  setNativeSelectValue(select, matched.value)
  select.dispatchEvent(new Event("change", { bubbles: true }))
  select.dispatchEvent(new Event("input", { bubbles: true }))
  return select.value === matched.value
}

export async function prefillPinpointCountry(countryAnswer) {
  const select = document.querySelector(country.PINPOINT_COUNTRY_NATIVE_SELECT)
  if (!select?.closest("#address-country")) {
    console.info("[PinpointHQ][Country] prefill-skipped", {
      reason: "missing-native-control",
    })
    return { committed: false, countryCode: "" }
  }

  const option = findPinpointCountryOption(
    readSelectOptions(select),
    countryAnswer,
  )
  if (!option) {
    console.info("[PinpointHQ][Country] prefill-skipped", {
      reason: "missing-live-option",
    })
    return { committed: false, countryCode: "" }
  }

  const readControls = () => {
    const liveSelect = document.querySelector(
      country.PINPOINT_COUNTRY_NATIVE_SELECT,
    )
    return {
      select: liveSelect,
      section: liveSelect?.closest("#address-country") ?? null,
    }
  }

  const readSettleState = () => {
    const controls = readControls()
    return {
      expectedCode: option.value,
      expectedLabel: option.label,
      nativeCode: controls.select?.value ?? "",
      submittedCode:
        controls.select && controls.section
          ? findCountryHiddenInput(controls.section, controls.select)?.value ??
            ""
          : "",
      visibleLabel:
        controls.section?.querySelector(
          country.PINPOINT_COUNTRY_VISIBLE_VALUE_SELECTOR,
        )?.textContent ?? "",
    }
  }

  const priorSchema = country.getPinpointAddressSchemaSignature()
  const priorState = readSettleState()
  const selectionAlreadyLive =
    country.isPinpointCountrySelectionSettled(priorState)
  const schemaAlreadyCompatible =
    country.isPinpointAddressSchemaCompatibleWithCountry(
      priorSchema,
      option.value,
    )
  const alreadyCommitted = country.isPinpointCountryCommitSettled(priorState)

  if (!alreadyCommitted) {
    await fillSelectField(
      {
        type: enums.FIELD_TYPE.SELECT,
        label: "Country",
        required: false,
        options: Array.from(select.options).map(
          (opt) => opt.textContent?.trim() || "",
        ),
        $input: select,
        $label: select.closest(".col-1-1, .col-md-1-1"),
      },
      [countryAnswer],
    )
  }

  let stableCount = 0
  let countryControlsCommitted = false
  for (let attempt = 0; attempt < COUNTRY_COMMIT_ATTEMPTS; attempt++) {
    if (attempt > 0) await delay.delay(50)
    if (country.isPinpointCountryCommitSettled(readSettleState())) {
      stableCount += 1
      if (stableCount >= 2) {
        countryControlsCommitted = true
        break
      }
    } else {
      stableCount = 0
    }
  }

  const addressSchemaSettled =
    !!countryControlsCommitted &&
    !alreadyCommitted &&
    (selectionAlreadyLive ||
      schemaAlreadyCompatible ||
      (await country.waitForPinpointAddressSchemaSettlement(
        () => country.getPinpointAddressSchemaSignature(),
        priorSchema,
      )))

  const committed =
    countryControlsCommitted && (alreadyCommitted || addressSchemaSettled)
  const countryCode = committed
    ? String(readControls().select?.value ?? "").trim()
    : ""

  console.info("[PinpointHQ][Country] prefill-result", {
    committed,
    countryControlsCommitted,
    countryCode: countryCode || null,
    alreadyCommitted,
    countrySelectionAlreadyLive: selectionAlreadyLive,
    addressSchemaAlreadyCompatible: schemaAlreadyCompatible,
    addressSchemaSettled,
    nativeControlRemounted: readControls().select !== select,
  })

  return { committed, countryCode }
}

export async function fillPhoneCountryCode(rule, answers) {
  if (rule.label !== phoneCountryCode.PINPOINT_PHONE_COUNTRY_CODE_LABEL) {
    return false
  }

  const raw = (Array.isArray(answers) ? answers : [answers]).find((value) =>
    String(value ?? "").trim(),
  )
  const answer = String(raw ?? "").trim()
  if (!answer) return false

  const input = rule.$input
  if (!input) return false

  const optionElements =
    phoneCountryCode.getPinpointPhoneCountryOptionElements(input)
  const optionElement = phoneCountryCode.findPinpointPhoneCountryOption(
    answer,
    optionElements,
  )
  if (!optionElement) return false

  const parsed =
    phoneCountryCode.parsePinpointPhoneCountryOption(optionElement)
  if (!parsed.countryCode) return false

  const wrapper =
    input.closest('[id^="Shared::Form::Phonenumberinput"]') ||
    input.closest(".intl-tel-input")?.parentElement
  const hidden =
    wrapper?.querySelector(
      'input[type="hidden"][name*="[phone_iso2]"], #phone-country-code-dropdown',
    ) || document.getElementById("phone-country-code-dropdown")
  const hiddenCode = hidden?.value?.trim().toLowerCase()
  const currentCode = phoneCountryCode.readPinpointPhoneCountryCode(input)

  if (
    hiddenCode === parsed.countryCode.toLowerCase() ||
    phoneCountryCode.findPinpointPhoneCountryOption(currentCode, [
      optionElement,
    ]) === optionElement
  ) {
    return true
  }

  const phoneContainer = phoneCountryCode.getPinpointPhoneContainer(input)
  const selectedFlag = phoneContainer?.querySelector(".selected-flag")
  if (selectedFlag && optionElement) {
    selectedFlag.dispatchEvent(
      new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
    )
    selectedFlag.click()
    await delay.delay(100)
    optionElement.dispatchEvent(
      new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
    )
    optionElement.dispatchEvent(
      new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
    )
    optionElement.click()
    await delay.delay(100)
  }

  if (hidden) {
    setNativeInputValue(hidden, parsed.countryCode.toUpperCase())
    dispatchInputChange(hidden)
  }
  return true
}

export async function fillCheckboxField(rule, answers) {
  const checkboxes = rule.$checkboxs || []
  if (!checkboxes.length) return

  if (checkboxes[0]) {
    checkboxes[0].scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
  }

  for (const answer of answers) {
    for (const checkbox of checkboxes) {
      const label = checkbox.closest("label")
      if (!label) continue
      const clone = label.cloneNode(true)
      const nested = clone.querySelector('input[type="checkbox"]')
      if (nested) nested.remove()
      const text = clone.textContent?.trim() || ""
      if (choiceMatch.isExactChoiceMatch(text, answer)) {
        if (!checkbox.checked) checkbox.click()
        break
      }
    }
  }
}

export async function fillRadioGroupField(rule, answers) {
  const answer = answers?.[0]
  if (!answer) return

  const parent = rule.$radioParent
  if (!parent) return

  parent.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)

  const radios = Array.from(parent.querySelectorAll('input[type="radio"]'))
  const options = []
  for (const radio of radios) {
    if (radio.disabled) continue
    let labelText = ""
    const forLabel = parent.querySelector(`label[for="${radio.id}"]`)
    if (forLabel) {
      labelText = forLabel.textContent?.trim() || ""
    } else {
      const wrapping = radio.closest("label")
      if (wrapping) {
        const clone = wrapping.cloneNode(true)
        const nested = clone.querySelector('input[type="radio"]')
        if (nested) nested.remove()
        labelText = clone.textContent?.trim() || ""
      } else {
        const sibling = radio.nextElementSibling
        if (sibling && sibling.tagName === "LABEL") {
          labelText = sibling.textContent?.trim() || ""
        }
      }
    }
    options.push({ radio, label: labelText })
  }

  const matched = choiceMatch.findExactChoice(
    options,
    answer,
    (option) => option.label,
    (option) => option.radio.value,
  )?.radio

  if (matched) {
    const forLabel = parent.querySelector(`label[for="${matched.id}"]`)
    const clickTarget = forLabel || matched.closest("label")
    if (!matched.checked) {
      matched.checked = true
      matched.dispatchEvent(new Event("change", { bubbles: true }))
      matched.dispatchEvent(new Event("click", { bubbles: true }))
      matched.dispatchEvent(new Event("input", { bubbles: true }))
      if (clickTarget) {
        clickTarget.click()
        await delay.delay(50)
      }
    }
  }
}

export async function agreementCheckboxField() {
  const checkbox = document.querySelector(
    'input[type="checkbox"][id="application_process_information"]',
  )
  if (!checkbox) return
  checkbox.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)
  if (!checkbox.checked) {
    checkbox.checked = true
    checkbox.dispatchEvent(new Event("change", { bubbles: true }))
    checkbox.dispatchEvent(new Event("click", { bubbles: true }))
    checkbox.dispatchEvent(new Event("input", { bubbles: true }))
    await delay.delay(50)
  }
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const fileInput = xpath.getFirstOrderedNodeSafe(
    './/input[@type="file"]',
    document.body,
  )
  if (fileInput) {
    await dom.uploadFiles(
      fileInput,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      updateRequired,
      updateFilled,
      "Resume/CV",
    )
  }
}
