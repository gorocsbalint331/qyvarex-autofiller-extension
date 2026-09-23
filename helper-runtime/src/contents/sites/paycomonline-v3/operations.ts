// @ts-nocheck
/**
 * Paycom Online v3 — field fill operations (inputs, selects, education, uploads).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as dayjs from "dayjs"
import * as checkbox from "../../crawler/utils/checkbox.js"
import * as input from "../../crawler/utils/input.js"
import * as select from "../../crawler/utils/select.js"
import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as enums from "../../../core/enums.js"
import * as coreDom from "../../../core/dom.js"
import * as cancellation from "../../methods/cancellation.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as geographicCountry from "./geographic-country.ts"
import * as phoneCountry from "./phone-country.ts"
import * as fileUpload from "./file-upload.ts"
import * as startApplicationDialog from "./start-application-dialog.ts"

export { fillCheckBoxesField } from "../../methods/dom.js"
export { fillSelectField } from "../../methods/dom.js"

const dayjsInterop = { default: dayjs }

const PHONE_SEARCH_TIMEOUT_MS = 2e3
const PHONE_SEARCH_INTERVAL_MS = 50

export function getPaycomCoverLetterStatus() {
  return fileUpload.getPaycomFileUploadInput("coverLetter") ? "optional" : ""
}

export async function fillInputTextField(el, value) {
  if (!el) return

  if (el.tagName === "IFRAME") {
    try {
      const iframe = el
      const iframeDoc =
        iframe.contentDocument || iframe.contentWindow?.document
      if (iframeDoc && iframeDoc.body) {
        await delay.delay(50)
        iframe.contentWindow?.focus()
        iframeDoc.body.focus()
        iframeDoc.body.innerHTML = ""
        if (
          iframeDoc.designMode === "on" ||
          iframeDoc.body.contentEditable === "true"
        ) {
          iframeDoc.execCommand("insertText", false, value)
        } else {
          iframeDoc.body.innerText = value
        }
        iframeDoc.body.dispatchEvent(new Event("input", { bubbles: true }))
        iframeDoc.body.dispatchEvent(new Event("change", { bubbles: true }))
        iframeDoc.body.dispatchEvent(new Event("blur", { bubbles: true }))
        await delay.delay(50)
      }
    } catch (error) {
      console.error("Failed to fill iframe editor:", error)
    }
    return
  }

  await delay.delay(50)
  dom.triggerEvents(el, ["focus", "click"])
  await delay.delay(50)
  await input.fillDefaultInputField(el, value)
  el.dispatchEvent(new Event("input", { bubbles: true }))
  el.dispatchEvent(new Event("change", { bubbles: true }))
  el.dispatchEvent(new Event("blur", { bubbles: true }))
  await delay.delay(50)
}

async function fillDatePart(el, value) {
  if (el.tagName === "SELECT") {
    const options = el.options
    let matched = false
    for (let index = 0; index < options.length; index++) {
      const option = options[index]
      if (
        option.value === value ||
        choiceMatch.isExactChoiceMatch(option.text, value) ||
        (value.startsWith("0") && option.value === value.replace(/^0/, ""))
      ) {
        el.value = option.value
        matched = true
        break
      }
    }
    if (!matched) el.value = value
    el.dispatchEvent(new Event("change", { bubbles: true }))
  } else {
    await input.fillDefaultInputField(el, value)
  }
}

export async function fillPaycomDateGroup(rule, value) {
  const container = rule.$input
  if (!container || !value) return

  const parsed = dayjsInterop.default(value)
  if (!parsed.isValid()) return

  const parts = xpath.getOrderedNodesSafe(".//input | .//select", container)
  let monthEl = null
  let dayEl = null
  let yearEl = null
  const matchesHint = (el, hint) => {
    const text = (
      el.getAttribute("placeholder") ||
      el.getAttribute("aria-label") ||
      el.getAttribute("name") ||
      ""
    ).toLowerCase()
    return text.includes(hint)
  }

  for (const part of parts) {
    if (matchesHint(part, "month")) monthEl = part
    else if (matchesHint(part, "day")) dayEl = part
    else if (matchesHint(part, "year")) yearEl = part
  }

  if (!(monthEl && dayEl && yearEl)) {
    if (parts.length === 3) {
      if (!monthEl) monthEl = parts[0]
      if (!dayEl) dayEl = parts[1]
      if (!yearEl) yearEl = parts[2]
    } else if (parts.length === 2) {
      if (!monthEl) monthEl = parts[0]
      if (!yearEl) yearEl = parts[1]
    } else if (parts.length === 1) {
      if (!yearEl) yearEl = parts[0]
    }
  }

  if (monthEl) await fillDatePart(monthEl, parsed.format("MM"))
  if (dayEl) await fillDatePart(dayEl, parsed.format("DD"))
  if (yearEl) await fillDatePart(yearEl, parsed.format("YYYY"))

  const partMatches = (el, expected, allowMonthName = false) => {
    if (!el) return false
    const rawValue = el.value?.trim() || ""
    const selectedText =
      (el.tagName === "SELECT" &&
        el.options[el.selectedIndex]?.text?.trim()) ||
      ""
    return (
      rawValue === expected ||
      (/^\d+$/.test(rawValue) && Number(rawValue) === Number(expected)) ||
      (allowMonthName &&
        selectedText.toLowerCase() === parsed.format("MMMM").toLowerCase())
    )
  }

  return (
    partMatches(monthEl, parsed.format("MM"), true) &&
    partMatches(yearEl, parsed.format("YYYY")) &&
    (!dayEl || partMatches(dayEl, parsed.format("DD")))
  )
}

export async function fillPaycomListbox(rule, value) {
  const button = rule.$input
  if (!button) return

  dom.triggerEvents(button, ["mousedown", "mouseup", "click"])
  await delay.delay(300)

  const controlsId = button.getAttribute("aria-controls")
  let listbox = null
  for (
    let attempt = 0;
    attempt < 3 &&
    (!(listbox = controlsId
      ? document.getElementById(controlsId)
      : xpath.getFirstOrderedNodeSafe(
          "//ul[@role='listbox'] | //div[@role='listbox']",
        )) ||
      listbox.offsetParent === null);
    attempt++
  ) {
    await delay.delay(200)
  }

  if (listbox) {
    const options = xpath.getOrderedNodesSafe(
      ".//li[@role='option'] | .//div[@role='option']",
      listbox,
    )
    const match = select.findMatchOption(options, value)
    if (match) dom.triggerEvents(match, ["mousedown", "mouseup", "click"])
  }
  await delay.delay(100)
}

export function isPaycomPhoneCountryCodeButton(el) {
  return (
    el instanceof HTMLButtonElement &&
    el.getAttribute("data-testid") === "international-phone-button"
  )
}

function isVisibleElement(el) {
  const rect = el.getBoundingClientRect()
  const style = window.getComputedStyle(el)
  return (
    rect.width > 0 &&
    rect.height > 0 &&
    style.display !== "none" &&
    style.visibility !== "hidden"
  )
}

function getVisiblePhoneCountryOptions() {
  return Array.from(
    document.querySelectorAll('li[data-testid^="country-list-item-"]'),
  ).filter(isVisibleElement)
}

function findVisibleSearchInput() {
  return (
    Array.from(
      document.querySelectorAll(
        'input[data-testid="searchsearchinput"], input[placeholder="Search"]',
      ),
    ).find(isVisibleElement) || null
  )
}

async function waitForPhoneSearchInput() {
  const deadline = Date.now() + PHONE_SEARCH_TIMEOUT_MS
  for (;;) {
    const inputEl = findVisibleSearchInput()
    if (inputEl) return inputEl
    const remaining = deadline - Date.now()
    if (remaining <= 0) return null
    await delay.delay(Math.min(PHONE_SEARCH_INTERVAL_MS, remaining))
  }
}

export async function fillPaycomPhoneCountryCode(rule, value, profileCountry) {
  const button = rule.$input
  if (!isPaycomPhoneCountryCodeButton(button) || !value) return false

  const candidates = phoneCountry.getPaycomPhoneCountryCodeSearchCandidates(
    value,
    profileCountry,
  )
  if (candidates.length === 0) return false

  const dialCode = phoneCountry.getPaycomPhoneCountryDialCode(value)
  if (
    phoneCountry.isPaycomPhoneCountrySelectionMatch(
      button,
      value,
      profileCountry,
    )
  ) {
    return true
  }

  dom.triggerEvents(button, ["mousedown", "mouseup", "click"])
  const initialSearch = await waitForPhoneSearchInput()
  console.info("[Paycom-v3][phone-country] opened selector", {
    candidateCount: candidates.length,
    dialCode,
    searchReady: !!initialSearch,
  })

  for (const candidate of candidates) {
    const searchInput = initialSearch ? await waitForPhoneSearchInput() : null
    if (searchInput) await fillInputTextField(searchInput, candidate)

    const option = await phoneCountry.waitForPaycomPhoneCountryOption({
      getOptions: getVisiblePhoneCountryOptions,
      value,
      profileCountry,
      timeoutMs: searchInput ? undefined : 0,
    })

    if (option) {
      dom.triggerEvents(option, ["mousedown", "mouseup", "click"])
      await delay.delay(300)
      const selected =
        !dialCode ||
        phoneCountry.isPaycomPhoneCountrySelectionMatch(
          button,
          value,
          profileCountry,
        )
      console.info("[Paycom-v3][phone-country] selection result", {
        candidate,
        dialCode,
        selected,
      })
      return selected
    }

    console.warn("[Paycom-v3][phone-country] exact option not ready", {
      candidate,
      dialCode,
      searchReady: !!searchInput,
    })
  }

  return false
}

export async function clickCheckboxOuterIDButton(el) {
  if (el) {
    dom.triggerEvents(el, ["mousedown", "mouseup", "click"])
    await delay.delay(100)
  }
}

export async function fillPaycomRadioGroup(rule, value) {
  const parent = rule.$radioParent
  const radios = xpath.getOrderedNodesSafe(
    ".//input[@type='radio']",
    parent,
  )
  if (!radios.length) return

  const match = choiceMatch.findExactChoice(
    radios.filter((radio) => !radio.disabled),
    value,
    (radio) => {
      const label = xpath.getFirstOrderedNodeSafe(
        `//label[@for='${radio.id}']`,
      )
      return label?.textContent || radio.value
    },
    (radio) => radio.value,
  )

  if (
    !(!match && rule.label.toLowerCase().includes("acknowledge")) &&
    match
  ) {
    await delay.delay(50)
    dom.triggerEvents(match, ["focus", "click", "change", "input"])
    await checkbox.fillCheckbox(match, true)
    await delay.delay(50)
  }
}

export async function fillPaycomSelect(rule, value) {
  const selectEl = rule.$input
  if (!selectEl || !value) return

  await delay.delay(50)
  dom.triggerEvents(selectEl, ["focus", "click"])
  await delay.delay(50)

  const options = Array.from(selectEl.options)
  let match = null

  if (/^\d+$/.test(value)) {
    const index = parseInt(value, 10)
    if (index >= 0 && index < options.length) match = options[index]
  }

  if (!match) match = select.findMatchOption(options, value)

  if (match) {
    const proto = Object.getPrototypeOf(selectEl)
    const valueSetter = Object.getOwnPropertyDescriptor(proto, "value").set
    if (valueSetter) valueSetter.call(selectEl, match.value)
    else selectEl.value = match.value
    dom.triggerEvents(selectEl, ["change", "input", "blur"])
    await delay.delay(50)
    return
  }

  const textValue = Array.isArray(value) ? value[0] : value
  for (const option of options) {
    if (
      option.value.toLowerCase() === textValue.toLowerCase() ||
      option.text.toLowerCase() === textValue.toLowerCase()
    ) {
      const proto = Object.getPrototypeOf(selectEl)
      const valueSetter = Object.getOwnPropertyDescriptor(proto, "value").set
      if (valueSetter) valueSetter.call(selectEl, option.value)
      else selectEl.value = option.value
      dom.triggerEvents(selectEl, ["change", "input", "blur"])
      await delay.delay(50)
      return
    }
  }

  dom.fillSelectField(selectEl, [textValue])
}

function getMainGeographicCountryButton() {
  const buttons = Array.from(
    document.querySelectorAll('button[aria-label*="Country combo box"]'),
  ).filter(geographicCountry.isPaycomMainGeographicCountryButton)
  return buttons.length === 1 ? buttons[0] : null
}

function findGeographicSearchInput() {
  return (
    Array.from(
      document.querySelectorAll(
        'input[data-testid="searchsearchinput"], input[placeholder="Search"]',
      ),
    ).find(isVisibleElement) ?? null
  )
}

function getVisibleGeographicCountryOptions() {
  return Array.from(
    document.querySelectorAll('li[data-testid^="country-list-item-"]'),
  ).filter(isVisibleElement)
}

function clickTrigger(el) {
  dom.triggerEvents(el, ["mousedown", "mouseup", "click"])
}

async function restoreGeographicCountrySelection(button, previousLabel) {
  if (!previousLabel) return false
  dom.triggerEvents(button, ["mousedown", "mouseup", "click"])
  await delay.delay(300)
  const searchInput = findGeographicSearchInput()
  if (!searchInput) return false
  await fillInputTextField(searchInput, previousLabel)
  await delay.delay(300)
  const option = geographicCountry.findPaycomGeographicCountryOption(
    getVisibleGeographicCountryOptions(),
    previousLabel,
  )
  if (!option) return false
  dom.triggerEvents(option, ["mousedown", "mouseup", "click"])
  await delay.delay(400)
  const current = getMainGeographicCountryButton()
  return !!(
    current &&
    geographicCountry.isPaycomGeographicCountrySelectionMatch(
      current,
      previousLabel,
    )
  )
}

export async function fillPaycomGeographicCountry(country) {
  const searchText =
    geographicCountry.formatPaycomGeographicCountrySearch(country)
  if (!searchText) {
    console.info("[Paycom-v3] Geographic Country prefill skipped", {
      reason: "country-empty",
    })
    return false
  }

  const button = getMainGeographicCountryButton()
  if (!button) {
    console.warn("[Paycom-v3] Geographic Country prefill skipped", {
      reason: "control-missing-or-ambiguous",
    })
    return false
  }

  if (
    geographicCountry.isPaycomGeographicCountrySelectionMatch(button, country)
  ) {
    return true
  }

  const previousLabel = button.textContent?.trim() || ""
  dom.triggerEvents(button, ["mousedown", "mouseup", "click"])
  await delay.delay(300)

  const searchInput = findGeographicSearchInput()
  if (!searchInput) {
    clickTrigger(button)
    console.warn("[Paycom-v3] Geographic Country prefill failed", {
      reason: "search-unavailable",
    })
    return false
  }

  await fillInputTextField(searchInput, searchText)
  await delay.delay(300)

  const option = geographicCountry.findPaycomGeographicCountryOption(
    getVisibleGeographicCountryOptions(),
    country,
  )
  if (!option) {
    clickTrigger(button)
    console.warn("[Paycom-v3] Geographic Country prefill failed", {
      reason: "option-unmatched-or-ambiguous",
    })
    return false
  }

  dom.triggerEvents(option, ["mousedown", "mouseup", "click"])
  await delay.delay(400)

  const current = getMainGeographicCountryButton()
  const matched = !!(
    current &&
    geographicCountry.isPaycomGeographicCountrySelectionMatch(current, country)
  )

  if (!matched) {
    const restored = await restoreGeographicCountrySelection(
      current || button,
      previousLabel,
    )
    console.warn("[Paycom-v3] Geographic Country prefill failed", {
      reason: restored
        ? "commit-readback-mismatch-restored"
        : "commit-readback-mismatch-rollback-failed",
    })
  }

  return matched
}

export async function waitForDOMStable() {
  const maxAttempts = 30
  const intervalMs = 200

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    await delay.delay(intervalMs)

    const cityField = document.getElementById("employment-city-field-1")
    const cityReady =
      cityField &&
      cityField.tagName === "INPUT" &&
      cityField.type === "text" &&
      !cityField.disabled

    let stateField = document.getElementById("employment-state-field-1")
    if (stateField && stateField.tagName !== "SELECT") {
      stateField = stateField.querySelector("select")
    }
    const stateReady =
      stateField &&
      stateField.tagName === "SELECT" &&
      stateField.options &&
      stateField.options.length > 10 &&
      !stateField.disabled

    if (cityReady && stateReady) return true

    if ((!cityField || !stateField) && attempt > 10) {
      const eduCity = document.getElementById("education-city-field-1")
      let eduState = document.getElementById("education-state-field-1")
      if (eduState && eduState.tagName !== "SELECT") {
        eduState = eduState.querySelector("select")
      }
      const eduCityReady =
        eduCity && eduCity.tagName === "INPUT" && !eduCity.disabled
      const eduStateReady =
        eduState &&
        eduState.tagName === "SELECT" &&
        eduState.options &&
        eduState.options.length > 10 &&
        !eduState.disabled
      if (eduCityReady && eduStateReady) return true
    }
  }

  return false
}

function countEducationEntries() {
  const section = document.getElementById("education-section")
  if (!section) return 0
  const headers = xpath.getOrderedNodesSafe(
    ".//h3[contains(text(), 'Institution #')]",
    section,
  )
  if (headers.length === 0) {
    const inputEl = xpath.getFirstOrderedNodeSafe(".//input", section)
    return inputEl ? 1 : 0
  }
  return headers.length
}

function countEmploymentEntries() {
  const section = document.getElementById("employment-section")
  if (!section) return 0
  const headers = xpath.getOrderedNodesSafe(
    ".//h3[contains(text(), 'Employer #')]",
    section,
  )
  if (headers.length === 0) {
    const inputEl = xpath.getFirstOrderedNodeSafe(".//input", section)
    return inputEl ? 1 : 0
  }
  return headers.length
}

async function clickAddInstitution() {
  const section = document.getElementById("education-section")
  if (!section) return
  const button = xpath.getFirstOrderedNodeSafe(
    ".//button[.//h4[contains(text(), 'Add Institution')]] | .//button[contains(., 'Add Institution')]",
    section,
  )
  if (button) dom.triggerEvents(button, ["mousedown", "mouseup", "click"])
}

async function clickAddEmployer() {
  const section = document.getElementById("employment-section")
  if (!section) return
  const button = xpath.getFirstOrderedNodeSafe(
    ".//button[.//h4[contains(text(), 'Add Employer')]] | .//button[contains(., 'Add Employer')]",
    section,
  )
  if (button) dom.triggerEvents(button, ["mousedown", "mouseup", "click"])
}

export async function expandForm(answer) {
  if (answer.education && answer.education.length > 0) {
    const existing = countEducationEntries()
    const needed = answer.education.length
    if (needed > existing) {
      for (let index = 0; index < needed - existing; index++) {
        await clickAddInstitution()
        await delay.delay(300)
      }
    }
  }

  if (answer.workExperience && answer.workExperience.length > 0) {
    const existing = countEmploymentEntries()
    const needed = answer.workExperience.length
    if (needed > existing) {
      for (let index = 0; index < needed - existing; index++) {
        await clickAddEmployer()
        await delay.delay(300)
      }
    }
  }

  await delay.delay(500)
}

export async function fillEducation(answer, sectionOptions) {
  if (!answer.education || answer.education.length === 0) return

  const reporter = sectionOptions
    ? answerMethods.createSectionResultReporter("education", sectionOptions)
    : undefined
  reporter?.setLabel("Education")

  const focusRules = []

  for (let index = 0; index < answer.education.length; index++) {
    let institutionTypeFilled
    let degreeFilled
    const entry = answer.education[index]
    const entryNumber = index + 1
    const row = reporter?.ensureRow(index, entry)
    const children = []
    focusRules[index] = {
      type: enums.FIELD_TYPE.EDUCATION,
      label: "Education",
      children,
    }
    if (reporter) {
      coreDom.setSectionResultFocusRules("education", focusRules)
    }

    const reportField = (label, inputEl, value, filledHint) => {
      if (!reporter || !row) return
      const existing = children.find((child) => child.label === label)
      if (existing) existing.$input = inputEl
      else {
        children.push({
          label,
          type: enums.FIELD_TYPE.TEXT,
          $input: inputEl,
        })
      }

      const expected = String(
        Array.isArray(value) ? (value[0] ?? "") : (value ?? ""),
      ).trim()
      const selectedOption =
        inputEl?.tagName === "SELECT"
          ? inputEl.options[inputEl.selectedIndex]
          : undefined
      const actual =
        inputEl?.getAttribute("type") === "radio"
          ? inputEl.checked
            ? inputEl.value
            : ""
          : String(selectedOption?.text || inputEl?.value || "").trim()
      const matches =
        actual.toLowerCase() === expected.toLowerCase() ||
        selectedOption?.value === expected

      reporter.updateField(
        row,
        label,
        actual || (filledHint === true ? expected : undefined),
        inputEl &&
          expected &&
          filledHint !== false &&
          (filledHint === true || matches)
          ? "filled"
          : "missed",
      )
      reporter.emit()
    }

    reporter?.emit()

    const withErrorReporting = async (
      label,
      inputEl,
      value,
      fillFn,
    ) => {
      try {
        return await fillFn()
      } catch (error) {
        reportField(label, inputEl, value, false)
        if (
          reporter &&
          row &&
          error instanceof cancellation.SkippedError
        ) {
          reporter.updateField(
            row,
            label,
            row.fields.find((field) => field.label === label)?.value,
            "skipped",
          )
          reporter.emit()
        }
        throw error
      }
    }

    const institutionNameEl = document.getElementById(
      `education-institution-name-field-${entryNumber}`,
    )
    if (institutionNameEl && entry["Institution Name"]) {
      await withErrorReporting(
        "Institution Name",
        institutionNameEl,
        entry["Institution Name"],
        () =>
          fillInputTextField(institutionNameEl, entry["Institution Name"]),
      )
    }
    reportField(
      "Institution Name",
      institutionNameEl,
      entry["Institution Name"],
    )

    const institutionTypeEl = document.getElementById(
      `education-institution-type-field-${entryNumber}`,
    )
    const institutionTypeValue =
      entry["Institution Information"] || entry["Institution Type"]
    if (institutionTypeEl && institutionTypeValue) {
      institutionTypeFilled = await withErrorReporting(
        "Institution Type",
        institutionTypeEl,
        institutionTypeValue,
        () =>
          fillPaycomSelect(
            { $input: institutionTypeEl },
            Array.isArray(institutionTypeValue)
              ? institutionTypeValue[0]
              : institutionTypeValue,
          ),
      )
    }
    reportField(
      "Institution Type",
      institutionTypeEl,
      institutionTypeValue,
      institutionTypeFilled,
    )

    const degreeEl = document.getElementById(
      `education-degree-field-${entryNumber}`,
    )
    const degreeValue = entry.Degree
    if (degreeEl && degreeValue) {
      degreeFilled = await withErrorReporting(
        "Degree",
        degreeEl,
        degreeValue,
        () =>
          fillPaycomSelect(
            { $input: degreeEl },
            Array.isArray(degreeValue) ? degreeValue[0] : degreeValue,
          ),
      )
    }
    reportField("Degree", degreeEl, degreeValue, degreeFilled)

    const majorEl = document.getElementById(
      `education-major-field-${entryNumber}`,
    )
    const majorValue = entry.Major
    await withErrorReporting("Major", majorEl, majorValue, () =>
      fillInputTextField(majorEl, majorValue),
    )
    reportField("Major", majorEl, majorValue)

    const graduatedValue = entry.Graduated
    let graduatedEl = null
    if (graduatedValue) {
      const raw = Array.isArray(graduatedValue)
        ? graduatedValue[0]
        : graduatedValue
      const radio = xpath.getFirstOrderedNodeSafe(
        `//input[@name='education-graduated-field-${entryNumber}' and @value='${raw}']`,
      )
      graduatedEl = radio
      if (radio) {
        await withErrorReporting(
          "Graduated",
          radio,
          graduatedValue,
          () => checkbox.fillCheckbox(radio, true),
        )
      }
    }
    reportField("Graduated", graduatedEl, graduatedValue)

    const dateGroups = xpath.getOrderedNodesSafe(
      `//div[contains(@id, 'education-') and contains(@id, '-field-${entryNumber}') and @data-floating-error-notice-type='date']`,
      document.body,
    )
    for (const dateGroup of dateGroups) {
      let dateFilled
      const idLower = dateGroup.id?.toLowerCase() || ""
      const textLower = dateGroup.textContent?.toLowerCase() || ""
      let dateValue = null
      if (idLower.includes("start") || textLower.includes("start")) {
        dateValue = entry["Start Date"]
      } else if (
        idLower.includes("end") ||
        textLower.includes("end") ||
        textLower.includes("graduated")
      ) {
        dateValue = entry["End Date"] || entry["Graduation Date"]
      }
      const dateLabel =
        idLower.includes("start") || textLower.includes("start")
          ? "Start Date"
          : "End Date"
      if (dateValue) {
        dateFilled = await withErrorReporting(
          dateLabel,
          dateGroup,
          dateValue,
          () => fillPaycomDateGroup({ $input: dateGroup }, dateValue),
        )
      }
      reportField(dateLabel, dateGroup, dateValue, dateFilled)
    }
  }
}

export async function fillAgreementCheckbox() {
  const el = document.querySelector(
    '[id*="CheckboxOuterID-authorization-acknowledge-disclosure-field"]',
  )
  if (el) {
    dom.triggerEvents(el, ["mousedown", "mouseup"])
    await delay.delay(200)
  }
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const inputEl = fileUpload.getPaycomFileUploadInput("resume")
  console.info("[PaycomFileUpload] resume slot resolved", {
    found: !!inputEl,
    id: inputEl?.id || "",
    name: inputEl?.name || "",
  })
  if (inputEl) {
    await dom.uploadFiles(
      inputEl,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      updateRequired,
      updateFilled,
      "Resume/CV",
    )
    const dialogResult =
      await startApplicationDialog.dismissPaycomResumeParserDialog(document, {
        activateButton: (button) =>
          dom.triggerEvents(button, ["mousedown", "mouseup", "click"]),
      })
    if (
      dialogResult === "button-missing" ||
      dialogResult === "still-open" ||
      dialogResult === "blocked"
    ) {
      console.warn("[Paycom-v3][resume-parser-dialog] upload result", {
        result: dialogResult,
        action: "attach-only",
      })
    } else {
      console.info("[Paycom-v3][resume-parser-dialog] upload result", {
        result: dialogResult,
        action: "attach-only",
      })
    }
  }
}

export async function uploadCoverLetter(
  coverLetter,
  updateRequired,
  updateFilled,
) {
  const inputEl = fileUpload.getPaycomFileUploadInput("coverLetter")
  console.info("[PaycomFileUpload] cover letter slot resolved", {
    found: !!inputEl,
    id: inputEl?.id || "",
    name: inputEl?.name || "",
  })
  return (
    !!inputEl &&
    (await dom.uploadFiles(
      inputEl,
      await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter),
      updateRequired,
      updateFilled,
      "Cover Letter",
      false,
    ),
    true)
  )
}
