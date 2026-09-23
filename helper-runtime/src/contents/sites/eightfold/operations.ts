// @ts-nocheck
/**
 * Eightfold ATS filler — DOM fill operations (readable TypeScript source of truth).
 *
 * Includes apply-form operations plus CareerHub preference / combobox helpers
 * that share this module path in the Parcel dump.
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as inputUtils from "../../crawler/utils/input.js"
import * as answerMethods from "../../methods/answer.js"
import * as cancellation from "../../methods/cancellation.js"
import * as dom from "../../methods/dom.js"
import * as filler from "../../shared/filler.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeout from "../../../utils/getTargetOrTimeout.js"
import * as eightfoldAnswer from "./answer.ts"
import * as careerHubRules from "./rules.ts"
import * as careerHubSteps from "./steps.ts"

const getTargetOrTimeoutDefault = { default: getTargetOrTimeout }

// ---------------------------------------------------------------------------
// Apply-form operations
// ---------------------------------------------------------------------------

export async function preFillForm() {
  await delay.delay(500)
}

function findCountryDependentFieldControl() {
  const labels = new Set(["state", "state province", "province", "region"])
  const fields = Array.from(
    document.querySelectorAll(
      '[class*="field-"], #careers-apply-form .apply-item',
    ),
  )
  for (const field of fields) {
    const labelEl = field.querySelector(
      'label[id*="_label"], legend[id*="_legend"], .apply-form-item-question-label, label, .question-label, legend',
    )
    if (!labels.has(normalizeEightfoldFieldLabel(labelEl?.textContent))) {
      continue
    }
    const control = field.querySelector(
      'input[role="combobox"], input[role="textbox"], select, input',
    )
    if (control) return control
  }
  return null
}

function countryDependentFieldSignature(control) {
  const controlsId = control.getAttribute("aria-controls") || ""
  const listbox = controlsId ? document.getElementById(controlsId) : null
  const optionCount =
    control instanceof HTMLSelectElement
      ? control.options.length
      : listbox?.querySelectorAll('[role="option"]').length || 0
  return [
    control.getAttribute("aria-disabled") || "",
    control.hasAttribute("disabled") ? "disabled" : "enabled",
    controlsId,
    optionCount,
  ].join("|")
}

export async function waitForCountryDependentFieldsToSettle() {
  let previousControl = null
  let previousSignature = ""
  let stableRounds = 0
  let missingRounds = 0
  for (let attempt = 0; attempt < 10; attempt++) {
    await delay.delay(150)
    const control = findCountryDependentFieldControl()
    if (!control) {
      previousControl = null
      previousSignature = ""
      stableRounds = 0
      missingRounds += 1
      if (missingRounds >= 5) return
      continue
    }
    missingRounds = 0
    const signature = countryDependentFieldSignature(control)
    if (control === previousControl && signature === previousSignature) {
      stableRounds += 1
      if (stableRounds >= 3) return
    } else {
      previousControl = control
      previousSignature = signature
      stableRounds = 0
    }
  }
}

function countryFillCandidates(country) {
  const trimmed = country?.trim()
  if (!trimmed) return []
  const key = normalizeLooseToken(trimmed)
  if (["ca", "canada"].includes(key)) return ["Canada"]
  if (
    [
      "us",
      "u s",
      "usa",
      "u s a",
      "united states",
      "united states of america",
    ].includes(key)
  ) {
    return ["United States", "United States of America"]
  }
  if (["gb", "uk", "u k", "great britain", "united kingdom"].includes(key)) {
    return ["United Kingdom", "Great Britain"]
  }
  return [trimmed]
}

function normalizeLooseToken(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function getOptionDisplayText(option) {
  const labelSpan = xpath.getFirstOrderedNodeSafe(
    './/span[contains(@class, "label")]',
    option,
  )
  return (
    labelSpan?.textContent?.trim() ||
    option.getAttribute("title")?.trim() ||
    option.textContent?.trim() ||
    ""
  )
}

function normalizeCompareKey(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export function normalizeEightfoldFieldLabel(label) {
  return normalizeCompareKey(label ?? "")
}

const COUNTRY_LABELS = new Set(["country", "country region of residence"])

export function isEightfoldCountryLabel(label) {
  return COUNTRY_LABELS.has(normalizeEightfoldFieldLabel(label))
}

function isLooseWordMatch(haystack, needle) {
  const left = normalizeCompareKey(haystack)
  const right = normalizeCompareKey(needle)
  return (
    !!left &&
    !!right &&
    (left === right ||
      (!(right.length < 3) &&
        left.split(" ").join(" ").match(RegExp(`(^| )${right}( |$)`)) !==
          null))
  )
}

function findExactOrLooseOption(options, target) {
  const exact = options.find(
    (option) =>
      normalizeCompareKey(getOptionDisplayText(option)) ===
      normalizeCompareKey(target),
  )
  return exact || options.find((option) => isLooseWordMatch(getOptionDisplayText(option), target))
}

function valuesEqualNormalized(left, right) {
  const a = normalizeCompareKey(left)
  const b = normalizeCompareKey(right)
  return a !== "" && b !== "" && a === b
}

function valueMatchesAnyCandidate(value, candidates) {
  return candidates.some((candidate) => valuesMatchCountryCode(value, candidate))
}

function stripNumericTokens(text) {
  return normalizeLooseToken(text)
    .split(" ")
    .filter((token) => !/^\d+$/.test(token))
    .join(" ")
}

function valuesMatchCountryCode(left, right) {
  const a = normalizeLooseToken(left)
  const b = normalizeLooseToken(right)
  if (!a || !b) return false
  if (a === b) return true
  const aWords = stripNumericTokens(left)
  const bWords = stripNumericTokens(right)
  if (aWords && bWords) return aWords === bWords
  const aDial = extractDialCode(left)
  const bDial = extractDialCode(right)
  return !bWords && !!aDial && !!bDial && aDial === bDial
}

function scoreOptionAgainstCandidates(optionText, candidates) {
  const trimmed = optionText.trim()
  const normalized = normalizeLooseToken(optionText)
  let best = -1
  for (let index = 0; index < candidates.length; index++) {
    const candidate = candidates[index]
    const candidateKey = normalizeLooseToken(candidate)
    if (trimmed === candidate) best = Math.max(best, 300 - index)
    else if (normalized === candidateKey) best = Math.max(best, 200 - index)
    else if (valuesMatchCountryCode(optionText, candidate)) {
      best = Math.max(best, 100 - index)
    }
  }
  return best
}

async function clickOptionElement(option) {
  option.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
  await delay.delay(50)
  option.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
  await delay.delay(50)
  option.click()
  await delay.delay(250)
}

async function selectBestOpenOption(input, candidates) {
  const listbox = findListboxForCombobox(input)
  if (!listbox) return "no-options"
  const options = xpath.getOrderedNodesSafe('.//*[@role="option"]', listbox)
  if (options.length === 0) return "no-options"
  let bestOption = null
  let bestScore = -1
  for (const option of options) {
    const score = scoreOptionAgainstCandidates(
      getOptionDisplayText(option),
      candidates,
    )
    if (score > bestScore) {
      bestScore = score
      bestOption = option
    }
  }
  if (!bestOption || bestScore < 0) return "no-match"
  await clickOptionElement(bestOption)
  return "selected"
}

async function typeCandidatesAndSelect(input, candidates) {
  for (const candidate of candidates) {
    for (let attempt = 0; attempt < 2; attempt++) {
      input.value = ""
      input.dispatchEvent(new Event("input", { bubbles: true }))
      input.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(attempt === 0 ? 400 : 800)
      input.value = candidate
      input.dispatchEvent(new Event("input", { bubbles: true }))
      input.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(attempt === 0 ? 500 : 1000)
      let listbox = findListboxForCombobox(input)
      for (let wait = 0; wait < 15 && !listbox; wait++) {
        await delay.delay(200)
        listbox = findListboxForCombobox(input)
      }
      if (!listbox) continue
      const result = await selectBestOpenOption(input, candidates)
      if (result === "selected") return true
    }
  }
  return false
}

function restoreInputValue(input, value) {
  input.value = value
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
}

async function clickOptionAndVerifyCommit(
  input,
  option,
  expectedText,
  label,
  restoreValue,
) {
  const optionText = getOptionDisplayText(option)
  option.click()
  await delay.delay(200)
  const current = input.value || ""
  const committed =
    valuesEqualNormalized(current, optionText) ||
    valuesEqualNormalized(current, expectedText)
  if (!committed) {
    console.warn("[Eightfold][Select] option click did not commit", {
      label,
    })
    restoreInputValue(input, restoreValue)
    input.blur()
    await delay.delay(100)
    throw new filler.FillError(
      `(Select) Option did not commit: "${expectedText}" for label: "${label}"`,
    )
  }
  input.blur()
  await delay.delay(100)
}

async function restoreCountryTextInput(input, value) {
  await commitCountryTextInput(input, value, (current) => current === value, "restore")
}

function isCountryTextInput(input) {
  const role = input.getAttribute("role")
  return (
    role === "textbox" ||
    (role !== "combobox" && !input.getAttribute("aria-controls"))
  )
}

function liveCountryInputOrFallback(input) {
  return input.isConnected !== false ? input : findCountryInput()
}

function setNativeInputValue(input, value) {
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value",
  )?.set
  if (setter) setter.call(input, value)
  else input.value = value
}

async function commitCountryTextInput(input, value, isMatch, phase) {
  let live = liveCountryInputOrFallback(input)
  for (let attempt = 1; attempt <= 3 && live; attempt++) {
    if (isMatch(live.value || "")) return true
    live.focus()
    setNativeInputValue(live, value)
    live.dispatchEvent(new Event("input", { bubbles: true, composed: true }))
    await delay.delay(80)
    const next = liveCountryInputOrFallback(live)
    const replaced = !!next && next !== live
    if (!next) {
      console.warn("[Eightfold][Country] text input commit failed", {
        phase,
        attempt,
        reason: "control_missing_after_input",
      })
      break
    }
    if (!isMatch(next.value || "")) {
      console.warn("[Eightfold][Country] text input readback mismatch", {
        phase,
        attempt,
        nodeReplaced: replaced,
      })
      live = next
      continue
    }
    next.dispatchEvent(new Event("change", { bubbles: true, composed: true }))
    next.dispatchEvent(
      new FocusEvent("focusout", { bubbles: true, composed: true }),
    )
    next.blur()
    await delay.delay(100)
    live = liveCountryInputOrFallback(next)
    const committed = !!live && isMatch(live.value || "")
    if ((replaced || !committed) && console.info) {
      console.info("[Eightfold][Country] text input live readback", {
        phase,
        attempt,
        nodeReplaced: replaced,
        committed,
      })
    }
    if (committed) return true
  }
  return false
}

async function fillCountryControl(input, candidates) {
  if (candidates.length === 0) return false
  if (isCountryTextInput(input)) {
    if (valueMatchesAnyCandidate(input.value || "", candidates)) return true
    const previous = input.value || ""
    const committed = await commitCountryTextInput(
      input,
      candidates[0],
      (current) => valueMatchesAnyCandidate(current, candidates),
      "fill",
    )
    if (committed) return true
    await restoreCountryTextInput(input, previous)
    return false
  }
  if (valueMatchesAnyCandidate(input.value || "", candidates)) return true
  const previous = input.value || ""
  input.focus()
  await delay.delay(150)
  const expanded = input.getAttribute("aria-expanded") === "true"
  if (!expanded) {
    const wrapper =
      input.closest('[class*="select-input-wrapper"]') ||
      input.closest('[class*="select-wrapper"]') ||
      input.parentElement
    const toggle = wrapper?.querySelector(
      'button[role="presentation"], button[aria-hidden="true"], button',
    )
    if (toggle) {
      toggle.click()
      await delay.delay(300)
    }
  }
  let result = await selectBestOpenOption(input, candidates)
  if (result === "no-options") {
    const typed = await typeCandidatesAndSelect(input, candidates)
    result = typed ? "selected" : "no-options"
  }
  const committed =
    result === "selected" &&
    valueMatchesAnyCandidate(input.value || "", candidates)
  if (committed) {
    input.blur()
    await delay.delay(500)
    return true
  }
  restoreInputValue(input, previous)
  input.blur()
  await delay.delay(100)
  return false
}

function findCountryInput() {
  const fields = xpath.getOrderedNodesSafe(
    '//div[contains(@class, "field-")]',
  )
  for (const field of fields) {
    const labelEl = xpath.getFirstOrderedNodeSafe(
      './/label[contains(@id, "_label")]',
      field,
    )
    if (!isEightfoldCountryLabel(labelEl?.textContent)) continue
    const input = field.querySelector(
      'input[role="combobox"], input[role="textbox"], input[data-test-id="Contact_Information_Country"], input[id="Contact_Information_Country"]',
    )
    if (input) return input
  }
  const form =
    document.getElementById?.("careers-apply-form") ||
    document.querySelector("#careers-apply-form")
  const items = Array.from(form?.querySelectorAll(".apply-item") || [])
  for (const item of items) {
    const labelEl = item.querySelector(
      ".apply-form-item-question-label, label, .question-label, legend",
    )
    if (!isEightfoldCountryLabel(labelEl?.textContent)) continue
    const input = item.querySelector(
      'input[role="combobox"], input[role="textbox"]',
    )
    if (input) return input
  }
  return null
}

function findListboxForCombobox(input) {
  const controlsId = input.getAttribute("aria-controls")
  let listbox = null
  if (controlsId) listbox = document.getElementById(controlsId)
  if (!listbox) {
    const wrapper = input.closest('[class*="select-wrapper"]')
    if (wrapper) listbox = wrapper.querySelector('[role="listbox"]')
  }
  if (!listbox) {
    const openDropdowns = document.querySelectorAll(
      '[class*="dropdown-wrapper"][class*="open"], [class*="dropdown-overlay"][class*="open"]',
    )
    for (const dropdown of Array.from(openDropdowns)) {
      const candidate = dropdown.querySelector('[role="listbox"]')
      if (candidate) {
        const listboxId = candidate.id
        if ((listboxId && listboxId === controlsId) || !controlsId) {
          listbox = candidate
          break
        }
      }
    }
  }
  if (!listbox && !controlsId) {
    listbox = document.querySelector('[role="listbox"]')
  }
  return listbox
}

async function waitForListbox(input, attempts = 8, intervalMs = 120) {
  let listbox = findListboxForCombobox(input)
  for (let attempt = 0; attempt < attempts && !listbox; attempt++) {
    await delay.delay(intervalMs)
    listbox = findListboxForCombobox(input)
  }
  return listbox
}

export async function preFillCountry(country) {
  const candidates = countryFillCandidates(country)
  if (candidates.length === 0) {
    console.warn("[Eightfold][Country] skipped: fresh AFI country is empty")
    return false
  }
  const input = findCountryInput()
  if (!input) {
    console.warn("[Eightfold][Country] prefill control was not found")
    return false
  }
  const committed = await fillCountryControl(input, candidates)
  console.info("[Eightfold][Country] prefill completed", {
    committed,
    controlKind: isCountryTextInput(input) ? "text" : "combobox",
  })
  return committed
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const fileInput = document.querySelector(
    'input[type="file"][accept*=".pdf"]',
  )
  if (fileInput) {
    await dom.uploadFiles(
      fileInput,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      updateRequired,
      updateFilled,
      "Resume/CV",
    )
    const replaceButton = await getTargetOrTimeoutDefault.default(
      () => {
        const dropzone = document.querySelector(".upload-resume-dropzone")
        if (dropzone) {
          const button = Array.from(dropzone.querySelectorAll("button")).find(
            (el) =>
              el.textContent?.trim().toLowerCase().includes("replace") &&
              !el.disabled,
          )
          if (button) return button
        }
        return null
      },
      () => false,
      100,
    )
    if (replaceButton) await delay.delay(200)
  }
}

export function isMicrosoftEightfoldHost() {
  return (
    typeof location !== "undefined" &&
    location.hostname.endsWith("careers.microsoft.com")
  )
}

export function isUnfillableMicrosoftLabel(label) {
  const key = label.toLowerCase()
  return (
    key.includes("where would you like to apply") ||
    key.startsWith("upload your resume")
  )
}

const MICROSOFT_RESUME_ACTION_WORDS = [
  "replace",
  "remove",
  "delete",
  "re-upload",
  "reupload",
  "change",
]
const RESUME_FILENAME_RE = /\.(pdf|docx?|rtf)\b/

function isNgcEightfoldHost() {
  return (
    typeof location !== "undefined" && location.hostname === "ngc.eightfold.ai"
  )
}

function findButtonByExactText(root, text) {
  const needle = text.toLowerCase()
  return Array.from(root.querySelectorAll("button")).find(
    (button) =>
      !button.disabled &&
      (button.textContent || "").trim().toLowerCase() === needle,
  )
}

function findNgcPreviewUploadSignal(dropzone) {
  let parent = dropzone.parentElement
  for (let depth = 0; parent && depth < 6; depth += 1) {
    if ((parent.getAttribute("class") || "").includes("resumeActionGroup")) {
      const groupParent = parent.parentElement
      if (!groupParent) return null
      const preview = findButtonByExactText(groupParent, "Preview")
      const uploadNew = findButtonByExactText(groupParent, "Upload new")
      return preview && uploadNew ? preview : null
    }
    parent = parent.parentElement
  }
  return null
}

export function findUploadCompleteIndicator() {
  const dropzone = document.querySelector(".upload-resume-dropzone")
  if (!dropzone) return null
  const buttons = Array.from(dropzone.querySelectorAll("button"))
  if (!isMicrosoftEightfoldHost()) {
    const replace =
      buttons.find(
        (button) =>
          !button.disabled &&
          (button.textContent || "").trim().toLowerCase().includes("replace"),
      ) ?? null
    return replace || (isNgcEightfoldHost() ? findNgcPreviewUploadSignal(dropzone) : null)
  }
  const actionButton = buttons.find((button) => {
    if (button.disabled) return false
    const text = (button.textContent || "").trim().toLowerCase()
    const aria = (button.getAttribute("aria-label") || "").toLowerCase()
    return MICROSOFT_RESUME_ACTION_WORDS.some(
      (word) => text.includes(word) || aria.includes(word),
    )
  })
  return (
    actionButton ||
    (RESUME_FILENAME_RE.test((dropzone.textContent || "").toLowerCase())
      ? dropzone
      : null)
  )
}

export async function waitForUploadComplete() {
  const attempts = isMicrosoftEightfoldHost() ? 30 : 100
  const indicator = await getTargetOrTimeoutDefault.default(
    findUploadCompleteIndicator,
    () => false,
    attempts,
  )
  if (indicator) {
    console.info("[Eightfold][Resume] upload completion confirmed", {
      host: location.hostname,
      completionSignal:
        isNgcEightfoldHost() &&
        (indicator.textContent || "").trim().toLowerCase() === "preview"
          ? "ngc_preview_upload_new"
          : "standard",
    })
    await delay.delay(200)
    return true
  }
  console.warn("[Eightfold][Resume] upload completion was not confirmed", {
    host: location.hostname,
    hasUploadDropzone: !!document.querySelector(".upload-resume-dropzone"),
  })
  return false
}

export async function removeResume() {
  const selector =
    '.upload-resume-dropzone button[aria-label="Delete"], .upload-resume-dropzone button[aria-label^="Delete file "]'
  const button = document.querySelector(selector)
  if (button && !button.disabled) {
    button.click()
    await getTargetOrTimeoutDefault.default(
      () => !document.querySelector(selector),
      () => false,
      30,
    )
  }
}

function findNearbyCountryCodeCombobox(phoneInput) {
  const identity = phoneInput.getAttribute("data-test-id") || phoneInput.id || ""
  if (identity) {
    const byIdentity = document.querySelector(
      `[data-test-id="${identity}-country-code"] input[role="combobox"], [id="${identity}-country-code"] input[role="combobox"]`,
    )
    if (byIdentity) return byIdentity
  }
  let parent = phoneInput.parentElement
  const maxDepth = 8
  let depth = 0
  while (parent && depth < maxDepth) {
    const comboboxes = Array.from(
      parent.querySelectorAll('input[role="combobox"]'),
    )
    for (const combobox of comboboxes) {
      if (combobox === phoneInput) continue
      const placeholder = (
        combobox.getAttribute("placeholder") || ""
      ).toLowerCase()
      if (placeholder.includes("country code")) return combobox
    }
    parent = parent.parentElement
    depth++
    if (parent?.tagName === "FORM" || parent?.tagName === "BODY") break
  }
  return null
}

function extractDialCode(text) {
  const match = (typeof text === "string" ? text : "").match(/\+?\s*(\d{1,4})\b/)
  return match?.[1] || ""
}

function uniqueTrimmed(values) {
  const seen = new Set()
  const result = []
  for (const value of values) {
    const trimmed = value.trim()
    const key = trimmed.toLowerCase()
    if (!trimmed || seen.has(key)) continue
    seen.add(key)
    result.push(trimmed)
  }
  return result
}

function buildPhoneCountryCodeProbe(source, useDialCodeInProbe) {
  const key = normalizeLooseToken(source || "")
  const dial = extractDialCode(source)
  if (key === "canada" || key === "ca") {
    return {
      candidates: useDialCodeInProbe
        ? ["(+1) Canada", "Canada"]
        : ["Canada"],
      selectedTokens: ["Canada"],
      failureLabel: "canada",
    }
  }
  if (
    key === "united states" ||
    key === "united states of america" ||
    key === "us" ||
    key === "usa"
  ) {
    return {
      candidates: useDialCodeInProbe
        ? [
            "(+1) United States of America",
            "United States of America",
            "United States",
          ]
        : ["United States of America", "United States"],
      selectedTokens: ["United States of America", "United States"],
      failureLabel: "united states",
    }
  }
  const hasWords = !!stripNumericTokens(source || "")
  const candidates = dial
    ? hasWords
      ? [source]
      : useDialCodeInProbe
        ? [source, `(+${dial})`, `+${dial}`, dial]
        : [source, `+${dial}`, dial]
    : [source]
  return {
    candidates: uniqueTrimmed(candidates),
    selectedTokens: uniqueTrimmed(
      (hasWords ? [source] : [dial, source]).filter(Boolean),
    ),
    failureLabel: source,
  }
}

export async function fillCountryCodeCombobox(input, sourceOrOptions) {
  const options =
    typeof sourceOrOptions === "object" && sourceOrOptions !== null
      ? sourceOrOptions
      : undefined
  const source =
    typeof sourceOrOptions === "string" ? sourceOrOptions.trim() : undefined
  const useDialCodeInProbe = options?.useDialCodeInProbe !== false
  if (!source) return
  const previousValue = input.value
  const { candidates, selectedTokens, failureLabel } =
    buildPhoneCountryCodeProbe(source, useDialCodeInProbe)
  const probeValue = async (value) => {
    input.value = ""
    input.dispatchEvent(new Event("input", { bubbles: true }))
    input.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(80)
    input.value = value
    input.dispatchEvent(new Event("input", { bubbles: true }))
    input.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(250)
  }
  const isSelected = () =>
    selectedTokens.some((token) =>
      valuesMatchCountryCode(input.value || "", token),
    )
  if (isSelected()) return
  let succeeded = false
  const isCommitted = (probe, option) => {
    if (!isSelected()) return false
    const ariaSelected = option?.getAttribute("aria-selected") === "true"
    const collapsed = input.getAttribute("aria-expanded") === "false"
    const valueChanged =
      normalizeLooseToken(input.value || "") !== normalizeLooseToken(probe)
    return ariaSelected || collapsed || valueChanged
  }
  try {
    for (let attempt = 0; attempt < 3; attempt++) {
      input.focus()
      await delay.delay(120)
      const wrapper =
        input.closest('[class*="select-input-wrapper"]') ||
        input.closest('[class*="select-wrapper"]') ||
        input.parentElement
      const toggle = wrapper?.querySelector(
        'button[role="presentation"], button[aria-hidden="true"]',
      )
      if (input.getAttribute("aria-expanded") !== "true") {
        if (toggle) toggle.click()
        else input.click()
        await delay.delay(250)
      }
      const probe =
        candidates[Math.min(attempt, candidates.length - 1)] || candidates[0]
      await probeValue(probe)
      const listbox = findListboxForCombobox(input)
      if (listbox) {
        const optionsInList = xpath.getOrderedNodesSafe(
          './/*[@role="option"]',
          listbox,
        )
        if (optionsInList.length > 0) {
          let bestOption = null
          let bestScore = -1
          for (const option of optionsInList) {
            const score = scoreOptionAgainstCandidates(
              getOptionDisplayText(option),
              candidates,
            )
            if (score > bestScore) {
              bestScore = score
              bestOption = option
            }
          }
          if (bestOption && bestScore >= 0) {
            await clickOptionElement(bestOption)
            input.dispatchEvent(new Event("change", { bubbles: true }))
            await delay.delay(180)
            if (isCommitted(probe, bestOption)) {
              succeeded = true
              input.blur()
              await delay.delay(100)
              return
            }
          } else {
            input.blur()
            break
          }
        }
      }
      input.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
      )
      await delay.delay(120)
      input.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
      )
      input.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(220)
      if (isCommitted(probe)) {
        succeeded = true
        input.blur()
        await delay.delay(100)
        return
      }
    }
    throw new filler.FillError(
      `(PhoneCountryCode) Could not select country code for "${failureLabel}"`,
    )
  } finally {
    if (!succeeded) {
      await probeValue(previousValue)
      input.blur()
    }
  }
}

async function pressEnterOnInput(input) {
  input.focus()
  await delay.delay(80)
  const enter = {
    key: "Enter",
    code: "Enter",
    keyCode: 13,
    which: 13,
    bubbles: true,
    composed: true,
  }
  input.dispatchEvent(new KeyboardEvent("keydown", enter))
  input.dispatchEvent(new KeyboardEvent("keypress", enter))
  input.dispatchEvent(new KeyboardEvent("keyup", enter))
  input.dispatchEvent(new Event("change", { bubbles: true, composed: true }))
  await delay.delay(100)
  input.blur()
  await delay.delay(50)
}

export async function fillInputTextField(
  input,
  value,
  label = "",
  countryCode = "",
  phoneCountrySources,
) {
  const idOrName = input.id || input.name || ""
  const testId = input.getAttribute("data-test-id") || ""
  const looksLikePhone =
    idOrName.toLowerCase().includes("phone") ||
    testId.toLowerCase().includes("phone") ||
    label.toLowerCase().includes("phone")
  let fillValue = value
  if (looksLikePhone && !idOrName.toLowerCase().includes("country-code")) {
    const countryCodeInput = findNearbyCountryCodeCombobox(input)
    if (countryCodeInput) {
      const countrySource = phoneCountryCode.resolvePhoneCountrySource(
        fillValue,
        countryCode,
        phoneCountrySources,
      )
      fillValue = eightfoldAnswer.resolveEightfoldPhoneValue(
        fillValue,
        countryCode,
        phoneCountrySources,
      )
      if (countrySource) {
        try {
          await fillCountryCodeCombobox(countryCodeInput, countrySource)
        } catch {
          // ignore country-code fill failures
        }
      }
    } else {
      const digitsOnlyCountry = countryCode.replace(/\D/g, "")
      fillValue = digitsOnlyCountry + fillValue.replace(/\D/g, "")
    }
  }
  input.focus()
  input.dispatchEvent(new FocusEvent("focusin", { bubbles: true }))
  await delay.delay(100)
  const setter = Object.getOwnPropertyDescriptor(
    input instanceof HTMLInputElement
      ? window.HTMLInputElement.prototype
      : window.HTMLTextAreaElement.prototype,
    "value",
  )?.set
  if (setter) setter.call(input, "")
  else input.value = ""
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
  await delay.delay(50)
  if (setter) setter.call(input, fillValue)
  else input.value = fillValue
  input.dispatchEvent(new Event("input", { bubbles: true, composed: true }))
  input.dispatchEvent(new Event("change", { bubbles: true, composed: true }))
  input.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true }))
  input.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }))
  input.dispatchEvent(new KeyboardEvent("keypress", { bubbles: true }))
  await delay.delay(100)
  input.dispatchEvent(new FocusEvent("focusout", { bubbles: true }))
  await delay.delay(100)
  input.blur()
  await delay.delay(100)
  if (input.value !== fillValue) {
    if (setter) setter.call(input, fillValue)
    else input.value = fillValue
    input.dispatchEvent(new Event("input", { bubbles: true }))
    input.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(50)
    if (input.value !== fillValue) {
      await inputUtils.fillDefaultInputField(input, fillValue)
      await delay.delay(50)
    }
  }
  const describedBy = input.getAttribute("aria-describedby")
  const describedText = describedBy
    ? (document.getElementById(describedBy)?.textContent || "")
        .trim()
        .toLowerCase()
    : ""
  const ariaInvalid = input.getAttribute("aria-invalid") === "true"
  const looksRequiredError =
    describedText.includes("cannot be left blank") ||
    describedText.includes("cannot be blank") ||
    describedText.includes("required")
  if (String(fillValue).trim() !== "" && ariaInvalid && looksRequiredError) {
    input.dispatchEvent(new Event("input", { bubbles: true, composed: true }))
    input.dispatchEvent(new Event("change", { bubbles: true, composed: true }))
    await delay.delay(80)
    input.blur()
    await delay.delay(80)
    const body = document.body || document.documentElement
    if (body) {
      body.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
      body.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
      body.dispatchEvent(new MouseEvent("click", { bubbles: true }))
      await delay.delay(100)
    }
  }
}

export async function fillSelectField(rule, values, countryOverride) {
  const label = rule.label
  const isCountry = isEightfoldCountryLabel(label)
  const countryCandidates = isCountry
    ? countryFillCandidates(countryOverride)
    : []
  let selectValues = values
  if (isCountry) {
    if (countryCandidates.length === 0) return
    selectValues = [countryCandidates[0]]
  } else if (!selectValues || selectValues.length === 0) {
    return
  }
  const selectedText = selectValues.find((value) => value?.trim()) || ""
  const input = rule.$input
  if (!input) {
    throw new filler.FillError(
      `(Select) Could not find field for label: "${label}"`,
    )
  }
  if (isCountry && input instanceof HTMLInputElement) {
    const committed = await fillCountryControl(input, countryCandidates)
    if (!committed) {
      throw new filler.FillError(
        `(Select) Option not found: "${selectedText}" for label: "${label}"`,
      )
    }
    return
  }
  if (isCountry && input instanceof HTMLSelectElement) {
    const option = xpath
      .getOrderedNodesSafe(".//option", input)
      .find((node) =>
        countryCandidates.some(
          (candidate) =>
            valuesMatchCountryCode(node.textContent || "", candidate) ||
            valuesMatchCountryCode(node.value || "", candidate),
        ),
      )
    if (!option) {
      throw new filler.FillError(
        `(Select) Option not found: "${selectedText}" for label: "${label}"`,
      )
    }
    input.value = option.value
    input.dispatchEvent(new Event("input", { bubbles: true }))
    input.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(100)
    input.blur()
    await delay.delay(100)
    return
  }
  if (
    input instanceof HTMLInputElement &&
    input.getAttribute("role") === "combobox"
  ) {
    const hasPopup = (input.getAttribute("aria-haspopup") || "").toLowerCase()
    const placeholder = (input.getAttribute("placeholder") || "").toLowerCase()
    const isDateLike =
      hasPopup === "dialog" ||
      input.type === "date" ||
      placeholder.includes("date")
    if (isDateLike) {
      await fillInputTextField(input, selectedText, label)
      await pressEnterOnInput(input)
      return
    }
    const previous = input.value || ""
    const restoreValue = previous
    const alreadySelected = isCountry
      ? valueMatchesAnyCandidate(previous, countryCandidates)
      : valuesEqualNormalized(previous, selectedText)
    if (alreadySelected) return
    input.focus()
    await delay.delay(100)
    const presentationButton = xpath.getFirstOrderedNodeSafe(
      './/button[@role="presentation"]',
      input.parentElement,
    )
    if (presentationButton) {
      presentationButton.click()
      await delay.delay(300)
    }
    const openListbox = findListboxForCombobox(input)
    if (openListbox) {
      const openOptions = xpath.getOrderedNodesSafe(
        './/*[@role="option"]',
        openListbox,
      )
      const match = findExactOrLooseOption(openOptions, selectedText)
      if (match) {
        await clickOptionAndVerifyCommit(
          input,
          match,
          selectedText,
          label,
          restoreValue,
        )
        return
      }
    }
    input.value = ""
    input.dispatchEvent(new Event("input", { bubbles: true }))
    input.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(400)
    input.value = selectedText
    input.dispatchEvent(new Event("input", { bubbles: true }))
    input.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(600)
    let controlsId = input.getAttribute("aria-controls")
    let listbox = null
    if (controlsId) listbox = document.getElementById(controlsId)
    if (!listbox && !controlsId) {
      listbox = document.querySelector('[role="listbox"]')
    }
    if (!listbox && presentationButton) {
      presentationButton.click()
      await delay.delay(300)
      if (controlsId) listbox = document.getElementById(controlsId)
      if (!listbox && !controlsId) {
        listbox = document.querySelector('[role="listbox"]')
      }
    }
    if (!listbox && isCountry) {
      listbox = await waitForListbox(input, 15, 200)
    }
    if (!listbox && isCountry) {
      for (const candidate of countryCandidates.slice(1)) {
        input.value = ""
        input.dispatchEvent(new Event("input", { bubbles: true }))
        input.dispatchEvent(new Event("change", { bubbles: true }))
        await delay.delay(400)
        input.value = candidate
        input.dispatchEvent(new Event("input", { bubbles: true }))
        input.dispatchEvent(new Event("change", { bubbles: true }))
        await delay.delay(600)
        listbox = await waitForListbox(input, 15, 200)
        if (listbox) break
      }
    }
    if (!listbox) {
      throw new filler.FillError(
        `(Select) Dropdown menu did not appear for label: "${label}"`,
      )
    }
    await delay.delay(200)
    let optionButtons = xpath.getOrderedNodesSafe(
      './/button[@role="option"]',
      listbox,
    )
    if (optionButtons.length === 0) {
      if (isCountry) {
        await delay.delay(1000)
        optionButtons = xpath.getOrderedNodesSafe(
          './/button[@role="option"]',
          listbox,
        )
        if (optionButtons.length === 0) {
          throw new filler.FillError(
            `(Select) No options found in dropdown for label: "${label}"`,
          )
        }
        const match = findExactOrLooseOption(optionButtons, selectedText)
        if (match) {
          match.click()
          await delay.delay(200)
        } else {
          restoreInputValue(input, restoreValue)
          throw new filler.FillError(
            `(Select) Exact option not found: "${selectedText}" for label: "${label}"`,
          )
        }
        input.blur()
        await delay.delay(100)
        return
      }
      throw new filler.FillError(
        `(Select) No options found in dropdown for label: "${label}"`,
      )
    }
    const match = findExactOrLooseOption(optionButtons, selectedText)
    if (!match) {
      console.warn("[Eightfold][Select] exact option was not found", {
        label,
        optionCount: optionButtons.length,
      })
      restoreInputValue(input, restoreValue)
      input.blur()
      await delay.delay(100)
      throw new filler.FillError(
        `(Select) Option not found: "${selectedText}" for label: "${label}"`,
      )
    }
    await clickOptionAndVerifyCommit(
      input,
      match,
      selectedText,
      label,
      restoreValue,
    )
    return
  }
  if (input instanceof HTMLSelectElement) {
    input.focus()
    await delay.delay(100)
    const option = xpath
      .getOrderedNodesSafe(".//option", input)
      .find(
        (node) =>
          node.textContent.trim().toLowerCase() ===
            selectedText.toLowerCase() ||
          node.value.toLowerCase() === selectedText.toLowerCase(),
      )
    if (option) {
      input.value = option.value
      input.dispatchEvent(new Event("input", { bubbles: true }))
      input.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(100)
      input.blur()
      await delay.delay(100)
    } else {
      throw new filler.FillError(
        `(Select) Option not found: "${selectedText}" for label: "${label}"`,
      )
    }
  }
}

export async function fillCheckboxField(rule, values) {
  if (!values || values.length === 0) return
  for (const value of values) {
    const checkboxes = Array.from(rule.$checkboxs || [])
    const matched = checkboxes.filter((checkbox) =>
      checkboxMatchesValue(checkbox, value),
    )
    const targets =
      matched.length > 0
        ? matched
        : checkboxes.length === 1 && isAffirmativeCheckboxValue(value)
          ? checkboxes
          : []
    if (targets.length > 0) {
      for (const checkbox of targets) await ensureCheckboxChecked(checkbox)
      continue
    }
    const xpathQuery = `.//input[@type='checkbox'][
      @value=${xpath.escapeXPath(value)} or
      following-sibling::*[normalize-space()=${xpath.escapeXPath(value)}] or
      parent::label[normalize-space()=${xpath.escapeXPath(value)}]
    ]`
    const found = xpath.getFirstOrderedNodeSafe(xpathQuery)
    if (found && !found.checked) {
      found.focus()
      await delay.delay(50)
      found.click()
      await delay.delay(100)
      found.blur()
      await delay.delay(50)
    }
  }
}

function normalizeChoiceText(text) {
  return text.toLowerCase().replace(/\s+/g, " ").trim()
}

function checkboxMatchesValue(checkbox, value) {
  const needle = normalizeChoiceText(value)
  if (!needle) return false
  const candidates = [
    checkbox.getAttribute("aria-label") || "",
    checkbox.getAttribute("value") || "",
    checkbox.value || "",
    checkbox.textContent || "",
  ]
  return candidates.some((candidate) => {
    const key = normalizeChoiceText(candidate)
    return key === needle || (!!key && choiceMatch.isExactChoiceMatch(key, needle))
  })
}

function isAffirmativeCheckboxValue(value) {
  return ["yes", "true", "agree", "agreed"].includes(normalizeChoiceText(value))
}

function isCheckboxAlreadyChecked(checkbox) {
  const className = checkbox.getAttribute("class") || ""
  return (
    checkbox.checked ||
    checkbox.getAttribute("aria-checked") === "true" ||
    className.includes("fa-check") ||
    className.includes("checked")
  )
}

async function ensureCheckboxChecked(checkbox) {
  if (isCheckboxAlreadyChecked(checkbox)) return
  checkbox.focus()
  await delay.delay(50)
  checkbox.click()
  await delay.delay(100)
  checkbox.blur()
  await delay.delay(50)
}

export async function fillRadioGroupFiled(rule, values) {
  const label = rule.label
  const selected = values?.[0]
  if (!selected) return
  let radio = null
  if (rule.$radioParent) {
    const radios = xpath.getOrderedNodesSafe(
      './/input[@type="radio"]',
      rule.$radioParent,
    )
    radio =
      choiceMatch.findExactChoice(
        radios,
        selected,
        (node) => {
          const forLabel = xpath.getFirstOrderedNodeSafe(
            `//label[@for="${node.id}"]`,
          )
          return forLabel?.textContent?.trim() || node.value || ""
        },
        (node) => node.value,
      ) || null
  }
  if (!radio) {
    const xpathQuery = `.//input[@type='radio'][
      @value=${xpath.escapeXPath(selected)} or
      following-sibling::*[normalize-space()=${xpath.escapeXPath(selected)}] or
      parent::label[normalize-space()=${xpath.escapeXPath(selected)}]
    ]`
    radio = xpath.getFirstOrderedNodeSafe(xpathQuery)
  }
  if (radio && !radio.checked) {
    radio.focus()
    await delay.delay(50)
    radio.click()
    await delay.delay(100)
    radio.blur()
    await delay.delay(50)
  } else if (!radio) {
    throw new filler.FillError(
      `(Radio) No option "${selected}" found for label: "${label}"`,
    )
  }
}

export async function agreeDataPrivacyAgreement(button) {
  if (!button) throw Error("(Data Privacy Agreement) Button not found")
  if (button.disabled) {
    throw Error("(Data Privacy Agreement) Button is disabled")
  }
  button.click()
}

// ---------------------------------------------------------------------------
// CareerHub operations (archived Parcel id ejJsZ; path collided with apply ops)
// ---------------------------------------------------------------------------

const CAREERHUB_PILL_SELECTOR =
  '[data-testid="pill-value"], .pill-tag:not(.add-pill-tag), .selected-pill, [role="listitem"]'
const CAREERHUB_OPTION_WAIT_ROUNDS = 8
const CAREERHUB_PAUSE_MS = 25
const CAREERHUB_COMMITTED_ATTR = "data-jobright-careerhub-committed-value"

function normalizeCareerHubText(text) {
  return text.normalize("NFKC").toLocaleLowerCase().replace(/\s+/g, " ").trim()
}

function getAriaControlsId(el) {
  const controls = el?.getAttribute("aria-controls")?.trim() ?? ""
  return controls && !/\s/.test(controls) ? controls : null
}

function getCareerHubOptionLabel(option) {
  return (
    ((typeof option.getAttribute === "function"
      ? option.getAttribute("title")
      : "") ||
      option.textContent ||
      "")
      .replace(/\s+/g, " ")
      .trim()
  )
}

function setNativeValue(el, value) {
  const proto =
    typeof HTMLInputElement !== "undefined" && el instanceof HTMLInputElement
      ? HTMLInputElement.prototype
      : typeof HTMLTextAreaElement !== "undefined"
        ? HTMLTextAreaElement.prototype
        : null
  const setter = proto
    ? Object.getOwnPropertyDescriptor(proto, "value")?.set
    : undefined
  if (setter) setter.call(el, value)
  else el.value = value
}

function dispatchInputChange(el) {
  el.dispatchEvent(new Event("input", { bubbles: true, composed: true }))
  el.dispatchEvent(new Event("change", { bubbles: true, composed: true }))
}

function writeControlValue(el, value) {
  el.removeAttribute?.(CAREERHUB_COMMITTED_ATTR)
  setNativeValue(el, value)
  dispatchInputChange(el)
}

export function fillTextControl(input, value) {
  writeControlValue(input, value)
  const current = input.value
  return { committed: current === value, value: current }
}

function warnCareerHubNotCommitted(reason) {
  console.warn(`[CareerHub autofill] control not committed reason=${reason}`)
}

function filterExactOptions(options, target) {
  const needle = normalizeCareerHubText(target)
  return needle
    ? options.filter(
        (option) =>
          normalizeCareerHubText(getCareerHubOptionLabel(option)) === needle,
      )
    : []
}

function isComboboxCommitted(surface) {
  const input = surface.input
  return (
    !!input &&
    input.getAttribute("aria-expanded") !== "true" &&
    !(surface.options.length > 0) &&
    (input.getAttribute(CAREERHUB_COMMITTED_ATTR) ===
      normalizeCareerHubText(input.value) ||
      input.getAttribute("aria-selected") === "true" ||
      input.getAttribute("data-selected") === "true")
  )
}

function clickOption(option) {
  option.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, composed: true }),
  )
  option.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, composed: true }),
  )
  option.click()
}

async function careerHubPause() {
  cancellation.checkpoint()
  await new Promise((resolve) => setTimeout(resolve, CAREERHUB_PAUSE_MS))
  cancellation.checkpoint()
}

async function waitForExactOptionMatches(getSurface, target, isValid = () => true) {
  cancellation.checkpoint()
  if (!isValid()) {
    return { surface: { input: null, options: [] }, matches: [], valid: false }
  }
  let surface = getSurface()
  let matches = filterExactOptions(surface.options, target)
  for (
    let round = 1;
    round < CAREERHUB_OPTION_WAIT_ROUNDS && matches.length !== 1;
    round += 1
  ) {
    await careerHubPause()
    if (!isValid()) {
      return { surface, matches: [], valid: false }
    }
    surface = getSurface()
    matches = filterExactOptions(surface.options, target)
  }
  cancellation.checkpoint()
  return { surface, matches, valid: isValid() }
}

async function restoreCareerHubControl(
  getSurface,
  fallbackInput,
  restoreValue,
  committedMarker = null,
  isValid = () => true,
) {
  if (cancellation.checkpoint(), !isValid()) return restoreValue
  let input = getSurface().input ?? fallbackInput
  let previous = null
  let stableRounds = 0
  for (let round = 0; round < CAREERHUB_OPTION_WAIT_ROUNDS; round += 1) {
    cancellation.checkpoint()
    if (!isValid()) return restoreValue
    if (input !== previous || input.value !== restoreValue) {
      writeControlValue(input, restoreValue)
      stableRounds = 0
      previous = input
    }
    await careerHubPause()
    if (!isValid()) return restoreValue
    const next = getSurface().input ?? input
    if (next === input && next.value === restoreValue) {
      stableRounds += 1
      if (stableRounds >= 2) {
        if (
          committedMarker === normalizeCareerHubText(restoreValue)
        ) {
          input.setAttribute(CAREERHUB_COMMITTED_ATTR, committedMarker)
        }
        return restoreValue
      }
    } else {
      stableRounds = 0
    }
    input = next
  }
  return input.value
}

function isCancellationLike(error) {
  return (
    error instanceof cancellation.CancelledError ||
    error instanceof cancellation.SkippedError
  )
}

function blurWithEscape(el) {
  if (typeof KeyboardEvent !== "undefined") {
    el.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        code: "Escape",
        bubbles: true,
        composed: true,
      }),
    )
  }
  el.blur()
}

function restoreCareerHubOnCancel(
  getSurface,
  fallbackInput,
  restoreValue,
  committedMarker,
) {
  try {
    const input = getSurface().input ?? fallbackInput
    if (input.value !== restoreValue) writeControlValue(input, restoreValue)
    if (committedMarker === null) input.removeAttribute?.(CAREERHUB_COMMITTED_ATTR)
    else input.setAttribute(CAREERHUB_COMMITTED_ATTR, committedMarker)
    blurWithEscape(input)
  } catch {
    try {
      blurWithEscape(fallbackInput)
    } catch {
      // ignore
    }
  }
}

export async function fillExactCombobox(getSurface, target, isValid = () => true) {
  cancellation.checkpoint()
  if (!isValid()) return { committed: false, value: "" }
  const initial = getSurface()
  const previousValue = initial.input?.value ?? ""
  const previousMarker = initial.input?.getAttribute(CAREERHUB_COMMITTED_ATTR) ?? null
  if (!initial.input || !normalizeCareerHubText(target)) {
    warnCareerHubNotCommitted("missing-control-or-target")
    return { committed: false, value: previousValue }
  }
  if (
    normalizeCareerHubText(previousValue) === normalizeCareerHubText(target) &&
    isComboboxCommitted(initial)
  ) {
    return { committed: true, value: previousValue }
  }
  let listenedInput = null
  let onChange = null
  try {
    initial.input.focus()
    writeControlValue(initial.input, target)
    if (!isValid()) return { committed: false, value: previousValue }
    const { surface, matches, valid } = await waitForExactOptionMatches(
      getSurface,
      target,
      isValid,
    )
    if (!valid || matches.length !== 1 || !surface.input) {
      const restored = await restoreCareerHubControl(
        getSurface,
        initial.input,
        previousValue,
        previousMarker,
        isValid,
      )
      warnCareerHubNotCommitted(
        matches.length > 1 ? "duplicate-exact-option" : "no-exact-option",
      )
      return { committed: false, value: restored }
    }
    const input = surface.input
    const wasAriaSelected = matches[0].getAttribute("aria-selected") === "true"
    const wasDataSelected = matches[0].getAttribute("data-selected") === "true"
    let changed = false
    onChange = () => {
      changed = true
    }
    listenedInput = input
    input.addEventListener?.("input", onChange)
    input.addEventListener?.("change", onChange)
    cancellation.checkpoint()
    clickOption(matches[0])
    let liveInput = input
    let liveValue = input.value
    let matchRounds = 0
    let committed = false
    for (
      let round = 0;
      round < CAREERHUB_OPTION_WAIT_ROUNDS && (await careerHubPause(), isValid());
      round += 1
    ) {
      const next = getSurface()
      liveInput = next.input ?? liveInput
      liveValue = liveInput?.value ?? ""
      const selectionChanged =
        (!wasAriaSelected &&
          matches[0].getAttribute("aria-selected") === "true") ||
        (!wasDataSelected &&
          matches[0].getAttribute("data-selected") === "true") ||
        changed
      matchRounds =
        normalizeCareerHubText(liveValue) === normalizeCareerHubText(target)
          ? matchRounds + 1
          : 0
      if (selectionChanged && matchRounds >= 2) {
        committed = true
        break
      }
    }
    if (!committed) {
      const restored = await restoreCareerHubControl(
        getSurface,
        initial.input,
        previousValue,
        previousMarker,
        isValid,
      )
      warnCareerHubNotCommitted("readback-mismatch")
      return { committed: false, value: restored }
    }
    liveInput?.setAttribute?.(
      CAREERHUB_COMMITTED_ATTR,
      normalizeCareerHubText(liveValue),
    )
    liveInput?.blur()
    return { committed: true, value: liveValue }
  } catch (error) {
    if (isCancellationLike(error)) {
      restoreCareerHubOnCancel(
        getSurface,
        initial.input,
        previousValue,
        previousMarker,
      )
    }
    throw error
  } finally {
    if (listenedInput && onChange) {
      listenedInput.removeEventListener?.("input", onChange)
      listenedInput.removeEventListener?.("change", onChange)
    }
  }
}

function readPreferencePillValues(group) {
  const seen = new Set()
  const values = []
  for (const pill of Array.from(group.querySelectorAll(CAREERHUB_PILL_SELECTOR))) {
    const text = getCareerHubOptionLabel(pill)
    const key = normalizeCareerHubText(text)
    if (!key || seen.has(key)) continue
    seen.add(key)
    values.push(text)
  }
  return values
}

function findPreferenceGroup(rule, root = document) {
  const groupLabelId = rule.__careerHub?.groupLabelId
  if (groupLabelId) {
    const group = root.querySelector(
      `.type-autocomplete-pill[role="group"][aria-labelledby="${groupLabelId}"]`,
    )
    if (isConnectedVisible(group)) return group
  }
  const input = rule.$input
  return isConnectedVisible(input ?? null) ? input : null
}

function isConnectedVisible(el) {
  const getAttribute = el?.getAttribute
  const getClientRects = el?.getClientRects
  return !!(
    el?.isConnected &&
    !el.hidden &&
    getAttribute?.call(el, "aria-hidden") !== "true" &&
    (!getClientRects || getClientRects.call(el).length > 0)
  )
}

function isVisibleElement(el) {
  return !!(
    el?.isConnected &&
    !el.hidden &&
    el.getAttribute("aria-hidden") !== "true" &&
    el.getClientRects().length > 0
  )
}

function isRuleOnActiveStep(rule, root) {
  const step = rule.__careerHub?.step
  return !!step && careerHubSteps.getCareerHubActiveStep(root) === step
}

function getPreferenceSearchSurface(group, root) {
  const input = group.querySelector('.Select-input[role="combobox"]')
  const controlsId = getAriaControlsId(input)
  const listbox = controlsId
    ? careerHubRules.findCareerHubElementById(root, controlsId)
    : null
  const options = isVisibleElement(listbox)
    ? Array.from(listbox.querySelectorAll('[role="option"]'))
    : []
  return {
    input: isConnectedVisible(input) ? input : null,
    options,
  }
}

export async function fillCareerHubPreference(rule, values, root = document) {
  cancellation.checkpoint()
  const isValid = () => isRuleOnActiveStep(rule, root)
  if (!isValid()) return { committed: false, values: [] }
  let group = findPreferenceGroup(rule, root)
  if (!group) {
    warnCareerHubNotCommitted("missing-preference-group")
    return { committed: false, values: [] }
  }
  let currentValues = readPreferencePillValues(group)
  let allCommitted = true
  let restoreInput = null
  let restoreValue = ""
  let restoreMarker = null
  let restoreGetSurface = null
  try {
    for (const value of values) {
      cancellation.checkpoint()
      if (!isValid()) {
        return { committed: false, values: readPreferencePillValues(group) }
      }
      if (
        !normalizeCareerHubText(value) ||
        currentValues.some(
          (existing) =>
            normalizeCareerHubText(existing) === normalizeCareerHubText(value),
        )
      ) {
        continue
      }
      const addButton = group.querySelector(
        'a.add-pill-tag[role="button"][aria-label]',
      )
      cancellation.checkpoint()
      addButton?.click()
      if (!isValid()) {
        return { committed: false, values: readPreferencePillValues(group) }
      }
      group = findPreferenceGroup(rule, root) ?? group
      let surface = getPreferenceSearchSurface(group, root)
      if (!surface.input) {
        warnCareerHubNotCommitted("missing-preference-search")
        allCommitted = false
        continue
      }
      if (!isValid()) {
        return { committed: false, values: readPreferencePillValues(group) }
      }
      const previousValue = surface.input.value
      const previousMarker = surface.input.getAttribute(
        CAREERHUB_COMMITTED_ATTR,
      )
      const getSurface = () =>
        isValid()
          ? ((group = findPreferenceGroup(rule, root) ?? group),
            getPreferenceSearchSurface(group, root))
          : { input: null, options: [] }
      restoreInput = surface.input
      restoreValue = previousValue
      restoreMarker = previousMarker
      restoreGetSurface = getSurface
      writeControlValue(surface.input, value)
      const { matches, valid } = await waitForExactOptionMatches(
        getSurface,
        value,
        isValid,
      )
      if (!valid || matches.length !== 1) {
        await restoreCareerHubControl(
          getSurface,
          surface.input,
          previousValue,
          previousMarker,
          isValid,
        )
        restoreInput = null
        restoreGetSurface = null
        warnCareerHubNotCommitted(
          matches.length > 1 ? "duplicate-exact-option" : "no-exact-option",
        )
        allCommitted = false
        continue
      }
      cancellation.checkpoint()
      clickOption(matches[0])
      let committed = false
      for (
        let round = 0;
        round < CAREERHUB_OPTION_WAIT_ROUNDS && isValid();
        round += 1
      ) {
        group = findPreferenceGroup(rule, root) ?? group
        currentValues = readPreferencePillValues(group)
        committed = currentValues.some(
          (existing) =>
            normalizeCareerHubText(existing) ===
            normalizeCareerHubText(value),
        )
        if (committed) break
        await careerHubPause()
      }
      if (!committed) {
        await restoreCareerHubControl(
          getSurface,
          surface.input,
          previousValue,
          previousMarker,
          isValid,
        )
        warnCareerHubNotCommitted("preference-readback-mismatch")
        allCommitted = false
      }
      restoreInput = null
      restoreGetSurface = null
    }
  } catch (error) {
    if (isCancellationLike(error) && restoreInput && restoreGetSurface) {
      restoreCareerHubOnCancel(
        restoreGetSurface,
        restoreInput,
        restoreValue,
        restoreMarker,
      )
    }
    throw error
  }
  return {
    committed: allCommitted,
    values: readPreferencePillValues(group),
  }
}

function findCareerHubControl(rule, root) {
  const controlId = rule.__careerHub?.controlId
  if (controlId) {
    const byId = root.querySelector(`#${controlId}`)
    if (isConnectedVisible(byId)) return byId
  }
  const input = rule.$input
  return isConnectedVisible(input ?? null) ? input : null
}

function getLocationSearchSurface(root) {
  const input = root.querySelector("#location")
  const controlsId = getAriaControlsId(input)
  const listbox = controlsId
    ? careerHubRules.findCareerHubElementById(root, controlsId)
    : null
  return {
    input: isConnectedVisible(input) ? input : null,
    options: isVisibleElement(listbox)
      ? Array.from(listbox.querySelectorAll('[role="option"]'))
      : [],
  }
}

export async function fillCareerHubRule(rule, value, root = document) {
  cancellation.checkpoint()
  const isValid = () => isRuleOnActiveStep(rule, root)
  if (!isValid()) {
    return Array.isArray(value)
      ? { committed: false, values: [] }
      : { committed: false, value: "" }
  }
  if (rule.type === enums.FIELD_TYPE.TEXT && typeof value === "string") {
    const input = findCareerHubControl(rule, root)
    if (!input) return { committed: false, value: "" }
    fillTextControl(input, value)
    const live = isValid() ? findCareerHubControl(rule, root) : null
    return live
      ? { committed: live.value === value, value: live.value }
      : { committed: false, value: "" }
  }
  if (rule.type === enums.FIELD_TYPE.SELECT && typeof value === "string") {
    return fillExactCombobox(() => getLocationSearchSurface(root), value, isValid)
  }
  if (rule.type === enums.FIELD_TYPE.MULTI_SELECT) {
    const values = Array.isArray(value) ? value : [value]
    return fillCareerHubPreference(rule, values, root)
  }
  return Array.isArray(value)
    ? { committed: false, values: [] }
    : { committed: false, value: "" }
}

export function getCareerHubSnapshot(rules, root = document) {
  const snapshot = {}
  for (const rule of rules) {
    if (!isRuleOnActiveStep(rule, root)) continue
    if (
      rule.type === enums.FIELD_TYPE.TEXT ||
      rule.type === enums.FIELD_TYPE.SELECT
    ) {
      const input = findCareerHubControl(rule, root)
      if (!input) continue
      if (rule.type === enums.FIELD_TYPE.SELECT) {
        const surface = getLocationSearchSurface(root)
        if (surface.input !== input || !isComboboxCommitted(surface)) continue
      }
      snapshot[rule.label] = input.value
      continue
    }
    if (rule.type === enums.FIELD_TYPE.MULTI_SELECT) {
      const group = findPreferenceGroup(rule, root)
      if (group) snapshot[rule.label] = readPreferencePillValues(group)
    }
  }
  return snapshot
}
