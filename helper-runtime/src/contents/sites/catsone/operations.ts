// @ts-nocheck
/**
 * Catsone DOM fill operations (inputs, selects, resume, cover letter).
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as filler from "../../shared/filler.ts"
import * as observer from "../../methods/observer.ts"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeoutMod from "../../../utils/getTargetOrTimeout.js"

const RESUME_UPLOAD_START_TIMEOUT_MS = 2000
const RESUME_PARSE_TIMEOUT_MS = 20000
const PARSER_SETTLE_MS = 500
const PARSER_SETTLE_TIMEOUT_MS = 5000

const COUNTRY_LABELS = [
  "country",
  "country region",
  "country territory",
  "country of residence",
  "residence country",
]

const US_ALIASES = [
  "us",
  "usa",
  "u.s.",
  "u.s.a.",
  "united states",
  "united states of america",
]

function findResumeFileInput() {
  let input = document.querySelector('input[type="file"]')
  if (!input) {
    input = document.querySelector(
      'input[name*="resume"], input[name*="cv"], input[id*="resume"], input[id*="cv"]',
    )
  }
  return input
}

function normalizeWhitespace(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
}

function normalizeLower(value) {
  return normalizeWhitespace(value).toLowerCase()
}

function isCoverLetterLabel(text) {
  return normalizeWhitespace(text).toLowerCase() === "cover letter"
}

function getOptionLabelText(input) {
  const candidates = [
    input.nextElementSibling?.textContent,
    input.closest("label")?.textContent,
    typeof HTMLInputElement !== "undefined" &&
    input instanceof HTMLInputElement &&
    input.id
      ? document.querySelector(`label[for="${input.id}"]`)?.textContent
      : "",
  ]

  for (const candidate of candidates) {
    const text = normalizeWhitespace(candidate).replace(/\s*\*\s*/g, "")
    if (text) return text
  }
  return ""
}

function isCountryFieldLabel(label) {
  const normalized = normalizeLower(label)
    .replace(/[^a-z]+/g, " ")
    .trim()
  return COUNTRY_LABELS.includes(normalized)
}

function countryMatchTokens(answer) {
  const normalized = normalizeLower(answer)
  return US_ALIASES.includes(normalized) ? US_ALIASES : [normalized]
}

function optionMatchesCountry(option, answer) {
  const tokens = countryMatchTokens(answer)
  const candidates = [normalizeLower(option.textContent), normalizeLower(option.value)]
  return tokens.some((token) => candidates.includes(token))
}

function optionMatchesAnswer(option, answer, label) {
  if (isCountryFieldLabel(label)) return optionMatchesCountry(option, answer)

  const optionText = normalizeLower(option.textContent)
  const optionValue = normalizeLower(option.value)
  const wanted = normalizeLower(answer)
  return (
    choiceMatch.isExactChoiceMatch(optionText, wanted) ||
    choiceMatch.isExactChoiceMatch(optionValue, wanted)
  )
}

export function getCatsoneCoverLetterUploadDom() {
  const groups = Array.from(document.querySelectorAll(".form-group"))
  const group =
    groups.find((node) => {
      const label = node.querySelector("label")
      return isCoverLetterLabel(label?.textContent)
    }) || null

  return {
    group,
    input: group?.querySelector('input[type="file"]') || null,
    required: !!(
      group?.classList?.contains("required") ||
      group?.closest(".required, .mandatory, .must-fill")
    ),
  }
}

export function getCatsoneCoverLetterStatus() {
  const { group, input, required } = getCatsoneCoverLetterUploadDom()
  if (group && input) return required ? "required" : "optional"
  return ""
}

export async function preFillForm() {
  const applyNow = xpath.getFirstOrderedNode('//button[span[text()="Apply Now"]]')
  if (!applyNow) return

  applyNow.click()
  const fillManually = await getTargetOrTimeoutMod.default(
    () => xpath.getFirstOrderedNode('//a[span[normalize-space()="Fill manually"]]'),
    () => false,
    10,
  )
  fillManually.focus()
  await delay.delay(50)
  fillManually.click()
  await delay.delay(50)
  fillManually.blur()
  await delay.delay(50)
}

function isFillableControl(el) {
  const tag = el.tagName.toLowerCase()
  const name = (el.getAttribute("name") || "").toLowerCase()
  if (name.includes("captcha")) return false
  if (tag === "textarea" || tag === "select") return true
  if (tag !== "input") return false

  const type = (el.getAttribute("type") || "text").toLowerCase()
  return ["text", "email", "tel", "search", "url", "number", "date"].includes(type)
}

function captureParserFieldSignature() {
  return Array.from(document.querySelectorAll("input, textarea, select"))
    .filter(isFillableControl)
    .map((el) =>
      [el.tagName, el.id, el.getAttribute("name") || "", el.value || ""].join(":"),
    )
    .join("\n")
}

function closestFormGroup(input) {
  return input.closest?.(".form-group") || null
}

function resumeUploadSignature(input) {
  const group = closestFormGroup(input)
  const nameInput = group?.querySelector(
    'input[data-field="name"], input[id$="--name"]',
  )
  const complete = group?.querySelector(".file-upload-complete")
  return [
    input.getAttribute("aria-busy") || "",
    nameInput?.value || "",
    normalizeWhitespace(complete?.textContent),
  ].join("|")
}

function isResumeUploadComplete(input) {
  const group = closestFormGroup(input)
  if (!group || input.getAttribute("aria-busy") === "true") return false

  const nameInput = group.querySelector(
    'input[data-field="name"], input[id$="--name"]',
  )
  return !!(nameInput?.value || group.querySelector(".file-upload-complete"))
}

async function waitForParserFieldsToSettle(initialSignature) {
  let signature = initialSignature
  let lastChangeAt = Date.now()

  return await observer.waitForCondition(
    () => {
      const next = captureParserFieldSignature()
      if (next !== signature) {
        signature = next
        lastChangeAt = Date.now()
        return false
      }
      return Date.now() - lastChangeAt >= PARSER_SETTLE_MS
    },
    {
      timeout: PARSER_SETTLE_TIMEOUT_MS,
      interval: 100,
      observeTarget: document.body,
    },
  )
}

async function waitForResumeUpload(input, beforeSignature, beforeParserSignature) {
  const observeTarget = closestFormGroup(input) || document.body
  let sawBusy = false

  const started = await observer.waitForCondition(
    () => {
      if (input.getAttribute("aria-busy") === "true") {
        sawBusy = true
        return true
      }
      return (
        resumeUploadSignature(input) !== beforeSignature &&
        isResumeUploadComplete(input)
      )
    },
    {
      timeout: RESUME_UPLOAD_START_TIMEOUT_MS,
      interval: 50,
      observeTarget,
    },
  )

  if (started) {
    if (sawBusy) {
      const finished = await observer.waitForCondition(
        () => input.getAttribute("aria-busy") !== "true",
        {
          timeout: RESUME_PARSE_TIMEOUT_MS,
          interval: 100,
          observeTarget,
        },
      )
      if (!finished) {
        console.warn(
          "[uploadResume] Timed out waiting for Catsone resume parsing completion",
        )
      }
    }
  } else {
    console.warn(
      "[uploadResume] Timed out waiting for Catsone resume upload to start",
    )
  }

  const settled = await waitForParserFieldsToSettle(beforeParserSignature)
  if (!settled) {
    console.warn(
      "[uploadResume] Timed out waiting for Catsone parser fields to settle",
    )
  }
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const input = findResumeFileInput()
  if (!input) {
    console.warn(`[uploadResume] ⚠️ No resume input found`)
    return
  }

  const beforeSignature = resumeUploadSignature(input)
  const beforeParserSignature = captureParserFieldSignature()
  await answerMethods.fetchPdfAsBlob(resumeInfo).then(async (blob) => {
    await dom.uploadFiles(input, blob, updateRequired, updateFilled, "Resume/CV")
  })
  await waitForResumeUpload(input, beforeSignature, beforeParserSignature)
}

export async function uploadCoverLetter(
  coverLetter,
  updateRequired,
  updateFilled,
) {
  const { input, required } = getCatsoneCoverLetterUploadDom()
  if (!input) return false

  await dom.uploadFiles(
    input,
    await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter),
    updateRequired,
    updateFilled,
    "Cover Letter",
    required,
  )
  return true
}

export async function removeResume() {
  const input = findResumeFileInput()
  if (input && input.value) {
    input.value = ""
    input.dispatchEvent(new Event("change", { bubbles: true }))
  }
}

export async function fillInputTextField(input, value) {
  input.focus()
  input.dispatchEvent(new FocusEvent("focusin", { bubbles: true }))
  await delay.delay(50)
  input.value = ""
  input.dispatchEvent(new Event("input", { bubbles: true }))
  await delay.delay(50)
  input.value = value
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
  await delay.delay(50)
  input.blur()
  input.dispatchEvent(new FocusEvent("focusout", { bubbles: true }))
  await delay.delay(50)
}

function toIsoDateParts(year, month, day) {
  const y = Number(year)
  const m = Number(month)
  const d = Number(day)
  if (!y || !m || !d) return ""

  const date = new Date(y, m - 1, d)
  if (
    date.getFullYear() !== y ||
    date.getMonth() !== m - 1 ||
    date.getDate() !== d
  ) {
    return ""
  }

  return `${String(y).padStart(4, "0")}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`
}

function normalizeDateValue(raw) {
  const text = raw.trim()
  const ymd = text.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/)
  if (ymd) return toIsoDateParts(ymd[1], ymd[2], ymd[3]) || text

  const mdy = text.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/)
  if (mdy) return toIsoDateParts(mdy[3], mdy[1], mdy[2]) || text

  return text
}

export async function fillDateField(input, value) {
  if (!(input instanceof HTMLInputElement)) return
  const next = input.type === "date" ? normalizeDateValue(value) : value
  await fillInputTextField(input, next)
}

export async function fillRadioFiled(rule, values) {
  const label = rule.label
  const wanted = values?.[0]
  if (!wanted) {
    console.warn("[fillRadioGroupFiled] No value provided")
    return
  }

  const radios = rule.$input
  if (!radios || radios.length === 0) {
    throw new filler.FillError(`(Radio) No radio buttons found for label: "${label}"`)
  }

  let match = null
  for (const radio of radios) {
    const optionLabel = getOptionLabelText(radio)
    if (optionLabel.toLowerCase() === wanted.toLowerCase()) {
      match = radio
      break
    }
  }

  if (match && !match.checked) {
    match.focus()
    await delay.delay(50)
    match.click()
    await delay.delay(50)
    match.blur()
    await delay.delay(50)
  } else if (!match) {
    console.error(`[fillRadioGroupFiled] ❌ No radio found for: "${wanted}"`)
    throw new filler.FillError(
      `(Radio) No option "${wanted}" found for label: "${label}"`,
    )
  }
}

export async function fillSelectField(rule, values) {
  if (!values || values.length === 0) return

  const wanted = values[0]
  const select = rule.$input
  if (!select) {
    throw new filler.FillError(
      `(Select) Could not find field for label: "${rule.label}"`,
    )
  }

  const options = Array.from(select.options)
  let match = null
  for (const option of options) {
    if (optionMatchesAnswer(option, wanted, rule.label)) {
      match = option
      break
    }
  }

  if (match) {
    select.focus()
    await delay.delay(50)
    select.value = match.value
    select.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(100)
    select.blur()
  } else {
    console.warn(`[fillSelectField] ⚠️ No matching option found for: "${wanted}"`)
  }
}

export async function fillCheckboxField(rule, values) {
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
      const optionLabel = getOptionLabelText(checkbox)
      if (
        value.toLowerCase() === optionLabel.toLowerCase() &&
        !checkbox.checked
      ) {
        checkbox.focus()
        await delay.delay(50)
        checkbox.click()
        await delay.delay(100)
        checkbox.blur()
        await delay.delay(50)
      }
    }
  }
}

export async function fillMultiSelectField(rule, values) {
  const select = rule.$input
  if (!select || !select.multiple) {
    console.warn(
      `[fillMultiSelectField] No multi-select element found for: "${rule.label}"`,
    )
    return
  }

  select.focus()
  await delay.delay(100)
  for (const option of select.options) {
    option.selected = false
  }

  for (const value of values) {
    for (const option of select.options) {
      const text = option.textContent?.trim() || ""
      const optionValue = option.value
      if (
        choiceMatch.isExactChoiceMatch(text.toLowerCase(), value.toLowerCase()) ||
        choiceMatch.isExactChoiceMatch(
          optionValue.toLowerCase(),
          value.toLowerCase(),
        )
      ) {
        option.selected = true
        break
      }
    }
  }

  select.dispatchEvent(new Event("change", { bubbles: true }))
  await delay.delay(100)
  select.blur()
}
