// @ts-nocheck
/**
 * Cisco Careers DOM fill operations (inputs, selects, composites, resume).
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as dayjs from "dayjs"
import * as customParseFormat from "dayjs/plugin/customParseFormat"
import * as messaging from "@plasmohq/messaging"
import * as selectUtils from "../../crawler/fill-utils/select.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as coreDom from "../../../core/dom.js"
import * as dom from "../../methods/dom.ts"
import * as observer from "../../methods/observer.ts"
import * as autofillAnswerPairTracking from "../autofill-answer-pair-tracking.js"
import * as enums from "../../../core/enums.js"
import * as urlStore from "../../../store/url.js"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeoutMod from "../../../utils/getTargetOrTimeout.js"
import * as rules from "./rules.ts"

const dayjsDefault = { default: dayjs }
const customParseFormatDefault = { default: customParseFormat }

dayjsDefault.default.extend(customParseFormatDefault.default)

const RESUME_ALERT_MARKER_ATTR = "data-jobright-cisco-resume-alert-patch"
const RESUME_ALERT_STATE_KEY = "__jr_cisco_resume_alert_suppressor"
const RESUME_SUCCESS_ALERT_RE = /uploaded\s+resume\s+successfully/i
const COVER_LETTER_UPLOAD_NAME = "cover-letter"
const LEGAL_NAME_MAX_CHECKS = 5
const LEGAL_NAME_INTERVAL_MS = 250
const INTERNAL_KEY_PREFIX = "__"

const LEGAL_NAME_FIELD_MAP = [
  {
    ruleLabels: ["Legal First Name", "Legal Given Name(s)"],
    answerLabels: [
      "Legal First Name",
      "Legal Given Name(s)",
      "Legal Given Name",
      "First Name",
      "Given Name",
      "First",
      "firstName",
    ],
  },
  {
    ruleLabels: ["Legal Last Name", "Legal Family Name"],
    answerLabels: [
      "Legal Last Name",
      "Legal Family Name",
      "Last Name",
      "Family Name",
      "Surname",
      "lastName",
    ],
  },
]

function pickStringEntries(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return {}
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([key, value]) =>
        !key.startsWith(INTERNAL_KEY_PREFIX) && typeof value === "string",
    ),
  )
}

function collectAllowedLabels(snapshotEntries, formRules) {
  const labels = new Set(Object.keys(snapshotEntries))
  for (const rule of formRules || []) {
    if (typeof rule?.label === "string" && rule.label.trim() !== "") {
      labels.add(rule.label)
    }
  }
  return labels
}

function filterNormalAnswers(entries, allowedLabels) {
  return Object.fromEntries(
    Object.entries(entries).filter(
      ([key, value]) =>
        key.trim() !== "" &&
        !key.startsWith(INTERNAL_KEY_PREFIX) &&
        typeof value === "string" &&
        (allowedLabels.size === 0 || allowedLabels.has(key)),
    ),
  )
}

function pickRegularAnswers(answer, allowedLabels) {
  const regular = answer?.regular
  if (!regular || typeof regular !== "object" || Array.isArray(regular)) {
    return {}
  }
  return filterNormalAnswers(regular, allowedLabels)
}

function buildFalconExtraData(existingExtra, autofillSnapshot, answer, formRules) {
  const snapshotStrings = pickStringEntries(autofillSnapshot)
  const allowedLabels = collectAllowedLabels(snapshotStrings, formRules)
  const fromRegular = pickRegularAnswers(answer, allowedLabels)
  const fromExistingNormal =
    existingExtra?.normal &&
    typeof existingExtra.normal === "object" &&
    !Array.isArray(existingExtra.normal)
      ? filterNormalAnswers(existingExtra.normal, allowedLabels)
      : {}
  const normal = { ...snapshotStrings, ...fromRegular, ...fromExistingNormal }

  if (!existingExtra && Object.keys(normal).length === 0) return
  return {
    ...(existingExtra || {}),
    ...(Object.keys(normal).length > 0 ? { normal } : {}),
  }
}

export function shouldSuppressCiscoResumeAlertMessage(message) {
  return RESUME_SUCCESS_ALERT_RE.test(String(message ?? ""))
}

export async function installCiscoResumeAlertSuppressor() {
  if (document.documentElement?.getAttribute(RESUME_ALERT_MARKER_ATTR) === "true") {
    return true
  }

  const result = await messaging.sendToBackground({
    name: "installMainWorldAlertSuppressor",
    body: {
      markerAttr: RESUME_ALERT_MARKER_ATTR,
      patternFlags: RESUME_SUCCESS_ALERT_RE.flags,
      patternSource: RESUME_SUCCESS_ALERT_RE.source,
      stateKey: RESUME_ALERT_STATE_KEY,
    },
  })
  return result?.success === true
}

export async function suppressCiscoResumeSuccessAlert() {
  const installed = await installCiscoResumeAlertSuppressor()
  if (!installed) {
    console.warn("[cisco] resume upload alert suppressor is not installed")
  }
  return installed
}

function dispatchInputChangeBlur(el) {
  el.dispatchEvent(new Event("input", { bubbles: true }))
  el.dispatchEvent(new Event("change", { bubbles: true }))
  el.dispatchEvent(new Event("blur", { bubbles: true }))
}

function dispatchMouseClickSequence(el) {
  const opts = { bubbles: true, cancelable: true, view: window }
  el.dispatchEvent(new MouseEvent("mousedown", opts))
  el.dispatchEvent(new MouseEvent("mouseup", opts))
  el.dispatchEvent(new MouseEvent("click", opts))
}

function dispatchArrowDown(el) {
  el.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "ArrowDown",
      code: "ArrowDown",
      bubbles: true,
      cancelable: true,
    }),
  )
  el.dispatchEvent(
    new KeyboardEvent("keyup", {
      key: "ArrowDown",
      code: "ArrowDown",
      bubbles: true,
      cancelable: true,
    }),
  )
}

function dispatchEscape(target) {
  if (target && typeof target.dispatchEvent === "function") {
    target.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        code: "Escape",
        bubbles: true,
        cancelable: true,
      }),
    )
    target.dispatchEvent(
      new KeyboardEvent("keyup", {
        key: "Escape",
        code: "Escape",
        bubbles: true,
        cancelable: true,
      }),
    )
  }
}

function clickDocumentBody() {
  const target = document.body || document.documentElement
  if (!target) return
  target.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  target.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  target.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true }),
  )
}

async function dismissOverlaysAround(input) {
  try {
    input.blur()
  } catch {
    /* ignore */
  }

  const active = document.activeElement
  try {
    active?.blur?.()
  } catch {
    /* ignore */
  }

  dispatchEscape(input)
  dispatchEscape(active)
  dispatchEscape(document)
  dispatchEscape(window)
  await delay.delay(40)
  clickDocumentBody()
  await delay.delay(40)
  dispatchEscape(document)
  dispatchEscape(window)
  await delay.delay(60)
}

async function applySelectOption(select, option, selectedIndex) {
  select.focus()
  dispatchMouseClickSequence(select)
  dispatchArrowDown(select)
  if (selectedIndex >= 0) select.selectedIndex = selectedIndex
  select.value = option.value
  option.selected = true
  select.dispatchEvent(new Event("input", { bubbles: true, composed: true }))
  select.dispatchEvent(new Event("change", { bubbles: true, composed: true }))
  select.dispatchEvent(new Event("blur", { bubbles: true, composed: true }))
  clickDocumentBody()
  await delay.delay(40)
}

function isHiddenOverlay(el) {
  return el instanceof HTMLElement && el.classList.contains("hidden")
}

function areOverlaysIdle() {
  const overlay = document.querySelector(".overlaybg")
  const loader = document.querySelector(".widget-loader")
  return (!overlay && !loader) || (isHiddenOverlay(overlay) && isHiddenOverlay(loader))
}

function getCountryPhoneCodeSelect() {
  return document.getElementById("phoneWidget.countryPhoneCode")
}

function isCountryPhoneCodeReady() {
  const select = getCountryPhoneCodeSelect()
  return !select || select.options.length > 1
}

async function waitForOverlayActivity(timeoutMs = 900) {
  const overlay = document.querySelector(".overlaybg")
  const loader = document.querySelector(".widget-loader")
  if (!(overlay instanceof HTMLElement || loader instanceof HTMLElement)) {
    return false
  }
  if (!areOverlaysIdle()) return true

  return await new Promise((resolve) => {
    let settled = false
    const finish = (value) => {
      if (settled) return
      settled = true
      mutationObserver.disconnect()
      clearTimeout(timeoutId)
      clearInterval(intervalId)
      resolve(value)
    }
    const check = () => {
      if (!areOverlaysIdle()) finish(true)
    }
    const mutationObserver = new MutationObserver(check)
    if (overlay instanceof HTMLElement) {
      mutationObserver.observe(overlay, {
        attributes: true,
        attributeFilter: ["class"],
      })
    }
    if (loader instanceof HTMLElement) {
      mutationObserver.observe(loader, {
        attributes: true,
        attributeFilter: ["class"],
      })
    }
    const intervalId = window.setInterval(check, 25)
    const timeoutId = window.setTimeout(() => finish(false), timeoutMs)
    check()
  })
}

async function waitForOverlaysToClear() {
  const sawActivity = await waitForOverlayActivity()
  if (!sawActivity) return

  await new Promise((resolve) => {
    let settled = false
    const overlay = document.querySelector(".overlaybg")
    const loader = document.querySelector(".widget-loader")

    if (!(overlay instanceof HTMLElement) && !(loader instanceof HTMLElement)) {
      resolve()
      return
    }

    const finish = () => {
      if (settled) return
      settled = true
      mutationObserver.disconnect()
      clearTimeout(timeoutId)
      clearInterval(intervalId)
      resolve()
    }
    const check = () => {
      if (areOverlaysIdle()) finish()
    }
    const mutationObserver = new MutationObserver(check)
    if (overlay instanceof HTMLElement) {
      mutationObserver.observe(overlay, {
        attributes: true,
        attributeFilter: ["class"],
      })
    }
    if (loader instanceof HTMLElement) {
      mutationObserver.observe(loader, {
        attributes: true,
        attributeFilter: ["class"],
      })
    }
    const intervalId = window.setInterval(check, 25)
    const timeoutId = window.setTimeout(finish, 4000)
    check()
  })
}

async function waitForCountrySelectSideEffects(select, expectedValue, expectedText) {
  const matched = await observer.waitForCondition(
    () => {
      if (!select.isConnected) return false
      const selectedText = select.selectedOptions?.[0]?.textContent?.trim() || ""
      return (
        select.value === expectedValue ||
        normalizeChoiceText(selectedText) === normalizeChoiceText(expectedText)
      )
    },
    { timeout: 4000, interval: 100, observeTarget: select },
  )
  if (!matched) return

  await waitForOverlaysToClear()
  const phoneCodeSelect = getCountryPhoneCodeSelect()
  await observer.waitForCondition(() => isCountryPhoneCodeReady(), {
    timeout: 1800,
    interval: 100,
    observeTarget: phoneCodeSelect || undefined,
  })
}

function setNativeInputValue(input, value) {
  const proto = Object.getPrototypeOf(input)
  const descriptor = Object.getOwnPropertyDescriptor(proto, "value")
  descriptor?.set?.call(input, value)
  if (!descriptor?.set) input.value = value
}

function normalizeComparableKey(value) {
  return String(value ?? "")
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim()
}

function firstDefinedValue(value) {
  if (value == null) return
  if (Array.isArray(value)) {
    for (const item of value) {
      const nested = firstDefinedValue(item)
      if (nested !== undefined) return nested
    }
    return
  }
  const text = String(value).trim()
  return text || undefined
}

function findAnswerValueByLabels(answer, labels) {
  const wanted = new Set(labels.map(normalizeComparableKey))
  const regular =
    answer?.regular &&
    typeof answer.regular === "object" &&
    !Array.isArray(answer.regular)
      ? answer.regular
      : null

  if (regular) {
    for (const [key, value] of Object.entries(regular)) {
      if (!wanted.has(normalizeComparableKey(key))) continue
      const resolved = firstDefinedValue(value)
      if (resolved !== undefined) return resolved
    }
  }

  const fillDataList = Array.isArray(answer?.fillDataList)
    ? answer.fillDataList
    : []
  for (const entry of fillDataList) {
    if (!wanted.has(normalizeComparableKey(entry?.name))) continue
    const resolved = firstDefinedValue(entry?.value)
    if (resolved !== undefined) return resolved
  }
}

function findLegalNameMapping(label) {
  const key = normalizeComparableKey(label)
  return LEGAL_NAME_FIELD_MAP.find((mapping) =>
    mapping.ruleLabels.some(
      (ruleLabel) => normalizeComparableKey(ruleLabel) === key,
    ),
  )
}

export async function preserveCiscoLegalNameFields(
  formRules,
  answer,
  options = {},
) {
  const targets = formRules
    .map((rule) => {
      if (rule.type !== enums.FIELD_TYPE.TEXT) return null
      const mapping = findLegalNameMapping(rule.label)
      if (!mapping) return null
      const input = rule.$input
      if (!input || typeof input.value !== "string") return null
      const value = findAnswerValueByLabels(answer, mapping.answerLabels)
      if (value === undefined) return null
      return { input, value }
    })
    .filter((entry) => entry !== null)

  if (targets.length === 0) return

  const maxChecks = Math.max(1, options.maxChecks ?? LEGAL_NAME_MAX_CHECKS)
  const intervalMs = options.intervalMs ?? LEGAL_NAME_INTERVAL_MS

  for (let i = 0; i < maxChecks; i += 1) {
    for (const target of targets) {
      if (target.input.value !== target.value) {
        await fillInputTextField(target.input, target.value)
      }
    }
    if (i < maxChecks - 1) await delay.delay(intervalMs)
  }
}

function dispatchTypedInputEvents(input, nextValue, previousValue) {
  let data = ""
  let inputType = "insertReplacementText"
  if (nextValue.length > previousValue.length) {
    data = nextValue.slice(previousValue.length)
    inputType = "insertText"
  } else if (nextValue.length < previousValue.length) {
    data = previousValue.slice(nextValue.length)
    inputType = "deleteContentBackward"
  }

  try {
    input.dispatchEvent(
      new InputEvent("beforeinput", {
        bubbles: true,
        cancelable: true,
        data,
        inputType,
      }),
    )
  } catch {
    /* ignore */
  }

  try {
    input.dispatchEvent(
      new InputEvent("input", {
        bubbles: true,
        data,
        inputType,
      }),
    )
  } catch {
    input.dispatchEvent(new Event("input", { bubbles: true }))
  }
}

async function typeOneStep(input, nextValue) {
  const previousValue = input.value || ""
  if (nextValue === previousValue) return

  const key =
    nextValue.length > previousValue.length ? nextValue.slice(-1) : "Backspace"
  input.dispatchEvent(
    new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      key,
    }),
  )
  setNativeInputValue(input, nextValue)
  dispatchTypedInputEvents(input, nextValue, previousValue)
  input.dispatchEvent(
    new KeyboardEvent("keyup", {
      bubbles: true,
      cancelable: true,
      key,
    }),
  )
  await delay.delay(nextValue === "" ? 20 : 35)
}

async function typeValueGradually(input, value) {
  await typeOneStep(input, "")
  for (let i = 0; i < value.length; i += 1) {
    await typeOneStep(input, value.slice(0, i + 1))
  }
  input.dispatchEvent(new Event("change", { bubbles: true }))
}

function normalizeChoiceText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function getOptionSearchTexts(option) {
  return [option.getAttribute("aria-label"), option.textContent]
    .map((text) => normalizeChoiceText(text))
    .filter((text) => text.length > 0)
}

function isCustomAddOption(option) {
  return (
    option.classList.contains("rbt-menu-custom-option") ||
    normalizeChoiceText(option.textContent).startsWith("add new:")
  )
}

function stripAddNewPrefix(text) {
  return normalizeChoiceText(text)
    .replace(/^add new:?\s*/, "")
    .trim()
}

function getCustomOptionSearchTexts(option) {
  return [
    option.getAttribute("aria-label"),
    option.textContent,
    stripAddNewPrefix(option.textContent),
  ]
    .map((text) => normalizeChoiceText(text))
    .filter((text) => text.length > 0)
}

function findCustomAddOption(options, wanted) {
  const target = normalizeChoiceText(wanted)
  if (!target) return null
  return (
    options
      .filter(isCustomAddOption)
      .find((option) =>
        getCustomOptionSearchTexts(option).some((text) => text === target),
      ) ?? null
  )
}

function findTypeaheadOption(options, wanted) {
  const target = normalizeChoiceText(wanted)
  if (!target) return null

  const regularOptions = options.filter((option) => !isCustomAddOption(option))
  const exact = regularOptions.find((option) =>
    getOptionSearchTexts(option).some((text) => text === target),
  )
  if (exact) return exact

  const custom = findCustomAddOption(options, wanted)
  return custom || selectUtils.findMatchOption(regularOptions, wanted) || null
}

function normalizeCountryToken(value) {
  const text = normalizeChoiceText(value)
    .replace(/\s*\(\+\d+\)\s*/g, "")
    .replace(/^the\s+/, "")
    .trim()
  if (!text) return ""
  if (
    text === "united states" ||
    text === "united states of america" ||
    text === "usa" ||
    text === "us"
  ) {
    return "united states"
  }
  if (text === "canada" || text === "ca") return "canada"
  return text
}

function countryIsoHint(value) {
  const text = normalizeChoiceText(value)
  if (!text) return ""
  if (
    text === "united states" ||
    text === "united states of america" ||
    text === "usa" ||
    text === "us"
  ) {
    return "USA"
  }
  if (text === "canada" || text === "ca") return "CAN"
  return ""
}

function readSelectedCountryIso() {
  const select =
    document.querySelector("#country") ||
    Array.from(document.querySelectorAll("select")).find(
      (el) =>
        normalizeChoiceText(
          document.querySelector(`label[for="${CSS.escape(el.id)}"]`)
            ?.textContent,
        ) === "country or region",
    )
  return select?.value?.trim().toUpperCase() || ""
}

function optionCountryToken(option) {
  const raw = option.textContent || option.value || ""
  const beforeParen = raw.split("(")[0]?.trim() || raw
  return normalizeCountryToken(beforeParen)
}

function findSelectOption(options, answer, label) {
  const wanted = String(answer ?? "").trim()
  if (!wanted) return

  const candidates = options.filter(
    (option) => option.value !== "" || option.textContent?.trim().length,
  )
  const wantedLower = normalizeChoiceText(wanted)
  const labelLower = normalizeChoiceText(label)
  const isPhoneCode = labelLower.includes("phone code")
  const isCountry =
    labelLower === "country or region" || labelLower === "country"
  const countryToken = normalizeCountryToken(wanted)

  const exact = candidates.find((option) => {
    const text = normalizeChoiceText(option.textContent)
    const value = normalizeChoiceText(option.value)
    return text === wantedLower || value === wantedLower
  })
  if (exact) return exact

  if (isPhoneCode) {
    const iso = countryIsoHint(wanted) || readSelectedCountryIso()
    if (iso) {
      const byIso = candidates.find((option) => {
        const value = option.value.trim().toUpperCase()
        return value.startsWith(`${iso}_`)
      })
      if (byIso) return byIso
    }
  }

  if ((isPhoneCode || isCountry) && countryToken) {
    const byCountry = candidates.find(
      (option) => optionCountryToken(option) === countryToken,
    )
    if (byCountry) return byCountry
  }

  if (isPhoneCode) {
    const partial = candidates.find((option) => {
      const token = normalizeCountryToken(option.textContent || option.value || "")
      return !!countryToken && token.includes(countryToken)
    })
    if (partial) return partial

    const dial =
      wanted.match(/\+\s*(\d{1,4})\b/)?.[1] ??
      wanted.match(/\b(\d{1,4})\b/)?.[1] ??
      (countryToken === "canada" || countryToken === "united states"
        ? "1"
        : null)
    if (dial) {
      const plus = `+${dial}`
      const byDial = candidates.find((option) => {
        const text = option.textContent || ""
        const value = option.value || ""
        return (
          text.includes(plus) ||
          text.includes(`(+${dial})`) ||
          value.endsWith(`_${dial}`) ||
          value.includes(`_${dial}`)
        )
      })
      if (byDial) return byDial
    }
  }
}

export async function preFillForm() {
  await observer.waitForCondition(
    () => !!document.querySelector(rules.FORM_SELECTOR),
    { timeout: 3000, interval: 100 },
  )
  await clearCompositeSectionsAndSkills()
  await ensureCompositeSectionsExist()
  await uncheckFirstCurrentEmploymentIfNeeded()
}

export function isInitialStep() {
  const { index, key } = rules.getStepInfo()
  return index <= 1 || key === "personalinformation"
}

export function hasResumeInput() {
  return !!document.querySelector(rules.RESUME_FILE_INPUT_SELECTOR)
}

function listAdditionalAttachmentRows() {
  return Array.from(
    document.querySelectorAll(".row.form-group.additional-attachment-v2"),
  )
}

function isCoverLetterAttachmentRow(row) {
  return !!(
    row.querySelector('input[type="file"]') &&
    row.querySelector("#cover-letter-files-div")
  )
}

function findCoverLetterAttachmentRow() {
  const direct = listAdditionalAttachmentRows().find(isCoverLetterAttachmentRow)
  if (direct) return direct

  const filesDiv = getCoverLetterFilesDiv()
  let node = filesDiv?.parentElement ?? null
  while (node && node !== document.body) {
    if (
      node.matches(".row.form-group.additional-attachment-v2") &&
      node.querySelector('input[type="file"]')
    ) {
      return node
    }
    node = node.parentElement
  }
  return null
}

function getCoverLetterFilesDiv() {
  return document.querySelector("#cover-letter-files-div")
}

export function getCoverLetterFileInputSync() {
  const row = findCoverLetterAttachmentRow()
  const input = row?.querySelector('input[type="file"]')
  return input?.isConnected && !input.disabled ? input : null
}

export function hasCoverLetterInput() {
  return !!getCoverLetterFileInputSync()
}

function normalizeUploadedNameSignature(value) {
  return String(value ?? "")
    .replace(/\.(pdf|docx?|rtf|txt)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
}

function readCoverLetterUploadText() {
  const filesDiv = getCoverLetterFilesDiv()
  const links = Array.from(filesDiv?.querySelectorAll("a.download-link") ?? [])
  return [
    ...links.flatMap((link) => [
      link.textContent,
      link.getAttribute("title"),
      link.getAttribute("aria-label"),
    ]),
    filesDiv?.textContent,
  ]
    .filter((text) => !!text && text.trim().length > 0)
    .join(" ")
}

function readCoverLetterUploadState() {
  const filesDiv = getCoverLetterFilesDiv()
  const hasControls = !!(
    filesDiv &&
    (filesDiv.querySelector("a.download-link") ||
      filesDiv.querySelector(".delete-text, .icon-delete, .glyphicon-trash"))
  )
  return {
    hasControls,
    signature: normalizeUploadedNameSignature(readCoverLetterUploadText()),
  }
}

function didCoverLetterUploadComplete(fileName, beforeState) {
  const afterState = readCoverLetterUploadState()
  if (!afterState.hasControls) return false
  if (!beforeState.hasControls) return true

  const wanted = normalizeUploadedNameSignature(fileName)
  return (
    !!(wanted && afterState.signature.includes(wanted)) ||
    afterState.signature !== beforeState.signature
  )
}

function getBlobFileName(blobLike) {
  const file = blobLike.files?.[0]
  return typeof file?.name === "string" ? file.name : ""
}

const REMOVE_SECTION_BUTTON_SELECTOR =
  'button.array-button-remove, .array-button-remove, button[aria-label^="Remove"], button[id*="array-button-remove"]'
const COMPOSITE_CONTROL_SELECTOR = "input, textarea, select"
const CLEARABLE_INPUT_TYPES = new Set([
  "button",
  "file",
  "hidden",
  "image",
  "reset",
  "submit",
])

async function waitForCoverLetterInput() {
  return await observer.waitForCondition(() => !!getCoverLetterFileInputSync(), {
    timeout: 4000,
    interval: 100,
    observeTarget: document.body,
  })
}

function listRemoveSectionButtons(container) {
  return Array.from(
    container.querySelectorAll(REMOVE_SECTION_BUTTON_SELECTOR),
  ).filter((button) => button.isConnected !== false)
}

async function waitForSectionRemoved(container, beforeCount, button) {
  return await observer.waitForCondition(
    () => countCompositeSections(container) < beforeCount || button.isConnected === false,
    {
      timeout: 2500,
      interval: 100,
      observeTarget: container,
    },
  )
}

async function clearAllCompositeSections(container) {
  for (let i = 0; i < 30; i += 1) {
    const count = countCompositeSections(container)
    if (count === 0) return

    const buttons = listRemoveSectionButtons(container)
    if (buttons.length === 0) return

    const button = buttons[buttons.length - 1]
    button.click()
    const removed = await waitForSectionRemoved(container, count, button)
    await delay.delay(100)
    if (!removed && countCompositeSections(container) >= count) return
  }
}

function clearControlValue(control) {
  const el = control
  if (el.disabled) return

  const tag = el.tagName?.toLowerCase()
  const type = String(el.type || "").toLowerCase()
  if (tag === "input" && CLEARABLE_INPUT_TYPES.has(type)) return

  if (type === "checkbox" || type === "radio") {
    if (el.checked) {
      el.click?.()
      dispatchInputChangeBlur(el)
    }
    return
  }

  if (tag === "select") {
    el.selectedIndex = 0
    el.value = el.options?.[0]?.value ?? ""
    dispatchInputChangeBlur(el)
    return
  }

  if ("value" in el) {
    setNativeInputValue(el, "")
    dispatchInputChangeBlur(el)
  }
}

function clearCompositeItemControls(container) {
  for (const fieldset of rules.getCompositeItemFieldsets(container)) {
    const controls = Array.from(
      fieldset.querySelectorAll(COMPOSITE_CONTROL_SELECTOR),
    )
    controls.forEach(clearControlValue)
  }
}

function findSkillsInput() {
  const direct = document.querySelector(
    '#skillObject\\.skills, textarea[id="skillObject.skills"], input[id="skillObject.skills"]',
  )
  if (direct) return direct
  if (typeof document.querySelectorAll !== "function") return null

  return (
    Array.from(document.querySelectorAll("textarea, input")).find((input) => {
      const blob = normalizeChoiceText(
        [
          input.id,
          input.name,
          input.getAttribute("aria-label"),
          input.closest(".form-group")?.textContent,
        ].join(" "),
      )
      return (
        blob.includes("skillobject skills") ||
        blob.includes("separate each skill with a comma") ||
        blob.includes("skills")
      )
    }) ?? null
  )
}

function clearSkillsInput() {
  const input = findSkillsInput()
  if (input) {
    setNativeInputValue(input, "")
    dispatchInputChangeBlur(input)
  }
}

async function clearCompositeSectionsAndSkills() {
  const education = rules.getArrayContainer(enums.FIELD_TYPE.EDUCATION)
  if (education) {
    await clearAllCompositeSections(education)
    clearCompositeItemControls(education)
  }

  const employment = rules.getArrayContainer(enums.FIELD_TYPE.EMPLOYMENT)
  if (employment) {
    await clearAllCompositeSections(employment)
    clearCompositeItemControls(employment)
  }

  clearSkillsInput()
}

async function ensureCompositeSectionsExist() {
  const education = rules.getArrayContainer(enums.FIELD_TYPE.EDUCATION)
  if (education && countCompositeSections(education) === 0) {
    await addCompositeSection(education)
  }

  const employment = rules.getArrayContainer(enums.FIELD_TYPE.EMPLOYMENT)
  if (employment && countCompositeSections(employment) === 0) {
    await addCompositeSection(employment)
  }
}

async function uncheckFirstCurrentEmploymentIfNeeded() {
  const checkbox = document.querySelector(
    '#experienceData\\[0\\]\\.fromTo\\.currentlyWorkHere, input[type="checkbox"][id*="experienceData[0].fromTo.currentlyWorkHere"]',
  )
  if (!checkbox?.checked) return

  checkbox.click()
  checkbox.dispatchEvent(new Event("change", { bubbles: true }))
  await observer.waitForCondition(
    () => {
      const endDate = document.querySelector(
        "#experienceData\\[0\\]\\.fromTo\\.endDate",
      )
      return !!endDate && !endDate.closest(".hidden,[hidden]")
    },
    { timeout: 2000, interval: 100 },
  )
}

export function getContinueButton() {
  const form = rules.getFormRoot()
  return form?.querySelector(rules.CONTINUE_BUTTON_SELECTOR) ?? null
}

export function getAdvanceButtonType(button) {
  const text = normalizeChoiceText(
    button?.textContent || button?.getAttribute("value") || "",
  )
  return text.includes("submit") || text.includes("apply")
    ? "submit"
    : "continue"
}

export function getCiscoCoverLetterUploadPayload(coverLetter) {
  return { ...coverLetter, coverLetterName: COVER_LETTER_UPLOAD_NAME }
}

export async function fillInputTextField(input, value) {
  input.focus()
  setNativeInputValue(input, String(value ?? ""))
  dispatchInputChangeBlur(input)
}

export async function fillSearchField(input, value) {
  input.focus()
  await typeValueGradually(input, value)
  dispatchMouseClickSequence(input)
  await delay.delay(30)
  dispatchArrowDown(input)

  const listbox = await getTargetOrTimeoutMod.default(
    () => {
      const owns = input.getAttribute("aria-owns")
      if (owns) {
        const byId = document.getElementById(owns)
        if (byId && byId.getAttribute("role") === "listbox") return byId
      }

      const rbt = input.closest(".rbt")
      if (rbt) {
        const menu = rbt.querySelector('[role="listbox"], .rbt-menu')
        if (menu) return menu
      }

      return document.querySelector(
        '[role="listbox"].show, .rbt-menu.dropdown-menu.show, [role="listbox"]',
      )
    },
    () => false,
    25,
  )

  if (!listbox) {
    input.blur()
    clickDocumentBody()
    return
  }

  await delay.delay(150)
  const options = Array.from(
    listbox.querySelectorAll('[role="option"], .dropdown-item'),
  ).filter((option) => normalizeChoiceText(option.textContent).length > 0)

  if (options.length === 0) {
    input.blur()
    clickDocumentBody()
    return
  }

  const match = findTypeaheadOption(options, value)
  if (!match) {
    input.blur()
    clickDocumentBody()
    return
  }

  match.dispatchEvent(
    new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
  await delay.delay(30)
  match.dispatchEvent(
    new MouseEvent("mouseup", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
  match.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
  await delay.delay(150)
  input.blur()
}

function shouldUseMonthYearFormat(input, formatHint) {
  const format = extractDateFormatHint(formatHint)
  return (
    format === "MM/YYYY" ||
    (format !== "MM/DD/YYYY" &&
      (!!input.id.match(/\.fromTo\.(startDate|endDate)$/i) ||
        !!input.closest("#educationData, #experienceData")))
  )
}

function extractDateFormatHint(description) {
  if (!description) return
  const text = String(description).trim()
  const match = text.match(/\b(?:YYYY\/MM\/DD|MM\/DD\/YYYY|MM\/YYYY)\b/)
  return match?.[0]
}

function formatDateForCisco(raw, description, input) {
  const text = String(raw ?? "").trim()
  if (!text) return ""
  if (normalizeChoiceText(text) === "current") return "current"

  const formatHint = extractDateFormatHint(description)
  const useMonthYear = input
    ? shouldUseMonthYearFormat(input, formatHint)
    : formatHint === "MM/YYYY"
  const useYmdSlash = formatHint === "YYYY/MM/DD"

  const parsed = dayjsDefault.default(
    text,
    [
      "YYYY/MM/DD",
      "YYYY/M/D",
      "MM/YYYY",
      "M/YYYY",
      "YYYY-MM",
      "YYYY-MM-DD",
      "YYYY/M",
      "YYYY/MM",
      "MM/DD/YYYY",
      "M/D/YYYY",
      "MMM YYYY",
      "MMMM YYYY",
      "YYYY",
    ],
    true,
  )

  if (!parsed.isValid()) return text

  if (useMonthYear) {
    return /^\d{4}$/.test(text) ? `01/${text}` : parsed.format("MM/YYYY")
  }

  if (useYmdSlash) {
    if (/^\d{4}$/.test(text)) return `${text}/01/01`
    if (
      /^\d{4}[-/]\d{1,2}$/.test(text) ||
      dayjsDefault.default(text, ["YYYY-MM", "YYYY/M", "YYYY/MM"], true).isValid()
    ) {
      return parsed.format("YYYY/MM/01")
    }
    return parsed.format("YYYY/MM/DD")
  }

  if (/^\d{4}$/.test(text)) return `01/01/${text}`
  if (/^\d{4}-\d{2}$/.test(text)) return parsed.format("MM/01/YYYY")
  return parsed.format("MM/DD/YYYY")
}

function toNativeDateValue(raw) {
  const text = String(raw ?? "").trim()
  if (!text || normalizeChoiceText(text) === "current") return text

  const parsed = dayjsDefault.default(
    text,
    ["YYYY-MM-DD", "YYYY/MM/DD", "YYYY/M/D", "MM/DD/YYYY", "M/D/YYYY"],
    true,
  )
  return parsed.isValid() ? parsed.format("YYYY-MM-DD") : text
}

export async function fillDateField(input, value, description) {
  const formatted = formatDateForCisco(value, description, input)
  if (!formatted) return

  const currentlyWorkHere = input
    .closest("fieldset[id]")
    ?.querySelector('input[type="checkbox"][id*="currentlyWorkHere"]')

  if (normalizeChoiceText(formatted) === "current") {
    if (currentlyWorkHere && !currentlyWorkHere.checked) {
      currentlyWorkHere.click()
      currentlyWorkHere.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(150)
    }
    await dismissOverlaysAround(input)
    return
  }

  if (currentlyWorkHere && currentlyWorkHere.checked) {
    currentlyWorkHere.click()
    currentlyWorkHere.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(150)
  }

  const nextValue = input.type === "date" ? toNativeDateValue(formatted) : formatted
  await fillInputTextField(input, nextValue)
  await dismissOverlaysAround(input)
}

export async function fillSelectField(rule, values) {
  const select = rule.$input
  if (!(select instanceof HTMLSelectElement)) return

  const wanted = String(values ?? "").trim()
  if (!wanted) return

  const isCountry =
    normalizeChoiceText(rule.label) === "country or region" ||
    normalizeChoiceText(rule.label) === "country"
  const options = Array.from(select.options)
  const match =
    findSelectOption(options, wanted, rule.label) ||
    selectUtils.findMatchOption(
      options.filter((option) => !!option.value),
      wanted,
    ) ||
    options.find(
      (option) =>
        normalizeChoiceText(option.textContent) === normalizeChoiceText(wanted),
    )

  if (!match) return

  const selectedIndex = options.findIndex((option) => option === match)
  const blankIndex = options.findIndex((option) => !option.value)

  if (isCountry && blankIndex >= 0) {
    const blank = options[blankIndex]
    await applySelectOption(select, blank, blankIndex)
    await delay.delay(150)
  }

  await applySelectOption(select, match, selectedIndex)
  if (isCountry) {
    await waitForCountrySelectSideEffects(
      select,
      match.value,
      match.textContent?.trim() || wanted,
    )
    return
  }

  await delay.delay(100)
}

export async function fillRadioGroupField(rule, values) {
  const wanted = normalizeChoiceText(Array.isArray(values) ? values[0] : values)
  if (!wanted || !rule.$radioParent) return

  const radios = Array.from(
    rule.$radioParent.querySelectorAll('input[type="radio"]'),
  )

  const getLabel = (radio) => {
    const label = radio.closest("label")
    const radioText = label?.querySelector("span.radio-text")
    if (radioText?.textContent) return normalizeChoiceText(radioText.textContent)
    return (
      normalizeChoiceText(label?.textContent) ||
      normalizeChoiceText(radio.value) ||
      normalizeChoiceText(radio.getAttribute("aria-label"))
    )
  }

  const isChecked = (radio) => {
    const hasAria =
      radio.hasAttribute("aria-checked") || radio.hasAttribute("ischecked")
    return hasAria
      ? radio.getAttribute("aria-checked") === "true" ||
          radio.getAttribute("ischecked") === "true"
      : radio.checked
  }

  const match = choiceMatch.findExactChoice(
    radios,
    wanted,
    getLabel,
    (radio) => radio.value,
  )
  if (!match || isChecked(match)) return

  const label = match.closest("label")
  const radioWrap = match.closest(".radio")
  const clickTarget =
    label?.querySelector("span.radio-text") ||
    label?.querySelector("span.checkmark") ||
    label

  const waitChecked = async () => {
    await observer.waitForCondition(() => isChecked(match), {
      timeout: 600,
      interval: 50,
    })
  }

  radioWrap?.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(80)
  match.focus()

  if (label) {
    label.click()
    match.dispatchEvent(new Event("input", { bubbles: true }))
    match.dispatchEvent(new Event("change", { bubbles: true }))
    await waitChecked()
  }

  if (!isChecked(match) && clickTarget) {
    dispatchMouseClickSequence(clickTarget)
    match.dispatchEvent(new Event("input", { bubbles: true }))
    match.dispatchEvent(new Event("change", { bubbles: true }))
    await waitChecked()
  }

  if (!isChecked(match)) {
    match.click()
    match.dispatchEvent(new Event("input", { bubbles: true }))
    match.dispatchEvent(new Event("change", { bubbles: true }))
    await waitChecked()
  }

  if (!isChecked(match)) {
    match.checked = true
    match.dispatchEvent(new Event("input", { bubbles: true }))
    match.dispatchEvent(new Event("change", { bubbles: true }))
    match.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      }),
    )
    await waitChecked()
  }

  await delay.delay(100)
}

export async function fillCheckboxField(rule, values) {
  const checkboxes = (rule.$checkboxs || []).filter(
    (checkbox) => checkbox instanceof HTMLInputElement,
  )
  if (checkboxes.length === 0) return

  const wanted = (Array.isArray(values) ? values : [values])
    .map((value) => normalizeChoiceText(value))
    .filter(Boolean)

  if (checkboxes.length === 1) {
    const shouldCheck = wanted.some((value) =>
      ["yes", "true", "1", "agree", "accept", "send sms"].includes(value),
    )
    if (checkboxes[0].checked !== shouldCheck) {
      checkboxes[0].click()
      checkboxes[0].dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(100)
    }
    return
  }

  for (const checkbox of checkboxes) {
    const label = normalizeChoiceText(
      checkbox.closest("label")?.textContent || checkbox.value,
    )
    const shouldCheck = wanted.some((value) =>
      choiceMatch.isExactChoiceMatch(label, value),
    )
    if (checkbox.checked !== shouldCheck) {
      checkbox.click()
      checkbox.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(100)
    }
  }
}

export function countCompositeSections(container) {
  return rules.getCompositeItemFieldsets(container).length
}

export async function addCompositeSection(container) {
  const addButton = container.querySelector(".more-actions .array-button-add")
  if (!addButton) return

  const beforeCount = countCompositeSections(container)
  addButton.click()

  let attempts = 0
  while (attempts < 30) {
    await delay.delay(100)
    const afterCount = countCompositeSections(container)
    if (afterCount > beforeCount) break
    attempts += 1
  }

  await delay.delay(200)
}

export async function processCompositeBlocks(
  items,
  fieldType,
  operationConfig,
  taskQueue,
  callbacks,
) {
  const container = rules.getArrayContainer(fieldType)
  if (!container || items.length === 0) return

  const existingCount = countCompositeSections(container)
  const toAdd = Math.max(0, items.length - existingCount)
  for (let i = 0; i < toAdd; i += 1) {
    await addCompositeSection(container)
  }

  const compositeRules = await rules.getCompositeRules(fieldType)
  if (compositeRules.length === 0) return

  coreDom.setSectionResultFocusRules(
    fieldType === enums.FIELD_TYPE.EDUCATION ? "education" : "employment",
    compositeRules,
  )

  const operationsList =
    fieldType === enums.FIELD_TYPE.EDUCATION
      ? answerMethods.getEducationOperations(
          compositeRules,
          items,
          operationConfig,
          undefined,
          callbacks,
        )
      : answerMethods.getEmploymentOperations(
          compositeRules,
          items,
          operationConfig,
          undefined,
          callbacks,
        )

  for (const operation of operationsList) {
    taskQueue.add(operation)
  }
  await taskQueue.run()
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const input = document.querySelector(rules.RESUME_FILE_INPUT_SELECTOR)
  if (!input || !updateRequired || !updateFilled) return false

  const deleteLink = document.querySelector(rules.RESUME_DELETE_SELECTOR)
  if (deleteLink) {
    deleteLink.click()
    await getTargetOrTimeoutMod.default(
      () => {
        const uploaded = document.querySelector(
          rules.RESUME_UPLOADED_LINK_SELECTOR,
        )
        return uploaded ? null : deleteLink
      },
      () => false,
      20,
    )
    await delay.delay(200)
  }

  const blob = await answerMethods.fetchPdfAsBlob(resumeInfo)
  if (!input.files) return false

  updateRequired({ label: "Resume/CV", required: true })
  await suppressCiscoResumeSuccessAlert()
  input.files = blob.files
  input.dispatchEvent(new Event("change", { bubbles: true, cancelable: false }))

  const uploaded = await getTargetOrTimeoutMod.default(
    () => document.querySelector(rules.RESUME_UPLOADED_LINK_SELECTOR),
    () => false,
    40,
  )
  if (!uploaded) return false

  updateFilled("Resume/CV")
  await delay.delay(200)
  return true
}

export async function uploadCoverLetter(
  coverLetter,
  updateRequired,
  updateFilled,
) {
  await waitForCoverLetterInput()
  const input = getCoverLetterFileInputSync()
  if (!input || !updateRequired || !updateFilled) return false

  const beforeState = readCoverLetterUploadState()
  const payload = getCiscoCoverLetterUploadPayload(coverLetter)
  const blob = await answerMethods.fetchCoverLetterPdfAsBlob(payload)
  const fileName = getBlobFileName(blob) || payload.coverLetterName

  input.focus()
  await suppressCiscoResumeSuccessAlert()
  await dom.uploadFiles(
    input,
    blob,
    () => undefined,
    () => undefined,
    "Cover Letter",
  )
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("blur", { bubbles: true }))

  const waited = await observer.waitForCondition(
    () => didCoverLetterUploadComplete(fileName, beforeState),
    {
      timeout: 5000,
      interval: 100,
      observeTarget: document.body,
    },
  )
  const uploaded = waited || didCoverLetterUploadComplete(fileName, beforeState)
  if (!uploaded) return false

  updateRequired({ label: "Cover Letter", required: false })
  updateFilled("Cover Letter")
  await delay.delay(200)
  return true
}

export function submitHandler(
  autofillSnapshot,
  additionalAutofillData = {},
  answer,
  formRules,
) {
  const submitSnapshot = rules.getFormSnapshot()
  const additionalSubmitData = rules.getAdditionalFormSnapshotData()
  const falconExtra = buildFalconExtraData(
    autofillAnswerPairTracking.buildFalconAutofillAnswerPairData(answer),
    autofillSnapshot,
    answer,
    formRules,
  )

  autofillAnswerPairTracking.sendAutofillAnswerPairEvent({
    formUrl: urlStore.useUrlStore.getState().currentTabUrl,
    autofillSnapshot,
    submitSnapshot,
    additionalAutofillData,
    additionalSubmitData,
    ...(falconExtra ? { extraData: { falcon: falconExtra } } : {}),
    source: "cisco",
  })
}
