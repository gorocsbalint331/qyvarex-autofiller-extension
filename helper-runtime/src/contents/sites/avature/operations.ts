// @ts-nocheck
/**
 * Avature DOM fill operations (inputs, Select2, education/employment, uploads).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as sectionResults from "../../methods/section-results.js"
import * as inputUtils from "../../crawler/utils/input.js"
import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as observer from "../../methods/observer.js"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as rule from "./rule.ts"

function normalizeLabel(value) {
  return String(value ?? "")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\*/g, "")
    .toLowerCase()
}

const STATE_LABELS = new Set([
  "state",
  "province",
  "state/province",
  "state / province",
  "home state/province",
  "home state / province",
])

const PLACEHOLDER_STATE_OPTIONS = new Set([
  "",
  "select an option",
  "select a state/province",
  "not required",
])

function isStateSelectRule(fieldRule) {
  return (
    fieldRule.type === enums.FIELD_TYPE.SELECT &&
    STATE_LABELS.has(normalizeLabel(fieldRule.label))
  )
}

function isSelectElement(el) {
  return (
    !!el &&
    typeof el === "object" &&
    String(el.tagName ?? "").toLowerCase() === "select"
  )
}

function hasUsableStateOptions(select) {
  return (
    !select.disabled &&
    Array.from(select.options || []).some((option) => {
      const value = String(option.value ?? "").trim()
      const text = normalizeLabel(option.text || option.textContent || "")
      return !option.disabled && !!value && !PLACEHOLDER_STATE_OPTIONS.has(text)
    })
  )
}

function isPlaceholderOnlyDisabledSelect(select, baselineOptions) {
  const options = Array.from(select.options || [])
  if (!select.disabled || options.length !== 1) return false
  const [only] = options
  return (
    !baselineOptions.includes(only) &&
    String(only.value ?? "").trim() === "" &&
    normalizeLabel(only.text || only.textContent || "") === "not required"
  )
}

function isNotRequiredOnlyDisabledSelect(select) {
  const options = Array.from(select.options || [])
  if (!select.disabled || options.length !== 1) return false
  const [only] = options
  return (
    String(only.value ?? "").trim() === "" &&
    normalizeLabel(only.text || only.textContent || "") === "not required"
  )
}

function getStateSelectsFromDom() {
  if (
    typeof document === "undefined" ||
    typeof document.querySelectorAll !== "function"
  ) {
    return []
  }
  return Array.from(document.querySelectorAll("select")).filter((select) => {
    const container = select.closest(
      ".datasetfieldSpec, .datasetFieldContainer, .fieldSpecContainer, .fieldSpec, fieldset",
    )
    const label =
      (container && rule.getNormalSectionInfo(container)?.labelText) || ""
    return STATE_LABELS.has(normalizeLabel(label))
  })
}

export function hasAvatureStateField() {
  return getStateSelectsFromDom().length > 0
}

function optionSignature(select) {
  return Array.from(select.options || [])
    .map((option) => normalizeLabel(option.text || option.textContent || ""))
    .join("|")
}

export async function waitForAvatureStateOptions(rules, options = {}) {
  const stateRules = rules.filter(isStateSelectRule)
  const initialSelects = stateRules
    .map((fieldRule) => fieldRule.$input)
    .filter(isSelectElement)

  const baselines = new Map(
    initialSelects.map((select) => {
      const fieldRule = stateRules.find(
        (candidate) => candidate.$input === select,
      )
      return [
        select,
        {
          disabled: select.disabled,
          optionNodes: Array.from(select.options || []),
          ruleSignature: (fieldRule?.options || [])
            .map((opt) => normalizeLabel(String(opt ?? "")))
            .join("|"),
        },
      ]
    }),
  )

  const getStateSelects = options.getStateSelects ?? getStateSelectsFromDom
  const trackedPlaceholders = new Map()
  const observeTarget =
    initialSelects[0]?.parentElement ||
    initialSelects[0] ||
    (typeof document !== "undefined" ? document.body : undefined)

  try {
    return await observer.waitForCondition(
      () => {
        const liveSelects = getStateSelects()
        const selects = Array.from(
          new Set([
            ...initialSelects.filter((select) => select.isConnected !== false),
            ...liveSelects,
          ]),
        ).filter(isSelectElement)

        return (
          selects.length !== 0 &&
          selects.every((select) => {
            const baseline = baselines.get(select)
            if (!baseline) {
              if (hasUsableStateOptions(select)) return true
              if (!isNotRequiredOnlyDisabledSelect(select)) return false
              const tracked = trackedPlaceholders.get(select)
              if (tracked) {
                return isPlaceholderOnlyDisabledSelect(select, tracked)
              }
              trackedPlaceholders.set(select, Array.from(select.options || []))
              return false
            }

            const currentOptions = Array.from(select.options || [])
            const optionsChanged =
              currentOptions.length !== baseline.optionNodes.length ||
              currentOptions.some(
                (option, index) => option !== baseline.optionNodes[index],
              )
            const signatureChanged =
              optionSignature(select) !== baseline.ruleSignature
            const changed =
              optionsChanged ||
              signatureChanged ||
              select.disabled !== baseline.disabled
            return (
              changed &&
              (hasUsableStateOptions(select) ||
                isPlaceholderOnlyDisabledSelect(select, baseline.optionNodes))
            )
          })
        )
      },
      {
        timeout: options.timeout ?? 2000,
        interval: options.interval ?? 50,
        ...(observeTarget ? { observeTarget } : {}),
      },
    )
  } catch (error) {
    console.warn("[Avature] failed while waiting for State options:", error)
    return false
  }
}

function normalizeChoiceText(value) {
  return String(value ?? "")
    .trim()
    .replace(/[\u2019\u2018]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\s+/g, " ")
    .toLowerCase()
}

function findOptionByAnswer(select, answer, options = {}) {
  const optionList = Array.from(select.options)
  const trimmed = answer.trim()
  const normalized = normalizeChoiceText(trimmed)

  let match =
    optionList.find((option) => {
      const text = option.text.trim()
      const value = option.value.trim()
      return text === trimmed || value === trimmed
    }) ?? null

  if (!match) {
    match =
      optionList.find((option) => {
        const text = normalizeChoiceText(option.text)
        const value = normalizeChoiceText(option.value)
        return text === normalized || value === normalized
      }) ?? null
  }

  if (!match && options.allowContains !== false) {
    match =
      optionList.find((option) => {
        const text = normalizeChoiceText(option.text)
        const value = normalizeChoiceText(option.value)
        return (
          (!!text || !!value) &&
          (choiceMatch.isExactChoiceMatch(text, normalized) ||
            (!!text && choiceMatch.isExactChoiceMatch(normalized, text)) ||
            choiceMatch.isExactChoiceMatch(value, normalized) ||
            (!!value && choiceMatch.isExactChoiceMatch(normalized, value)))
        )
      }) ?? null
  }

  return match
}

function updateSelect2RenderedText(select, text) {
  if (typeof document === "undefined") return
  const key = select.id || select.name
  if (!key) return

  const field = select.closest(".fieldSpec, .datasetField__row, fieldset")
  const rendered =
    field?.querySelector(".select2-selection__rendered") ||
    (Array.from(document.querySelectorAll(".select2-selection__rendered")).find(
      (el) => el.id === `select2-${key}-container`,
    ) ??
      null)
  if (rendered) {
    rendered.textContent = text
    rendered.setAttribute("title", text)
  }

  const labelValue = document.getElementById(`${key}-labelValue`)
  if (labelValue) labelValue.textContent = text
}

export function syncSelectElementToExistingOption(select, answer, options = {}) {
  const match = findOptionByAnswer(select, answer, {
    allowContains: options.allowContains,
  })
  if (!match) return false

  const optionList = Array.from(select.options)
  optionList.forEach((option) => {
    option.selected = option === match
  })
  select.value = match.value
  select.selectedIndex = optionList.indexOf(match)
  select.dispatchEvent(new Event("change", { bubbles: true }))
  select.dispatchEvent(new Event("input", { bubbles: true }))
  if (options.updateSelect2Display) {
    updateSelect2RenderedText(select, match.text.trim())
  }

  const view =
    select.ownerDocument?.defaultView ||
    (typeof window !== "undefined" ? window : undefined)
  if (!view) return true

  const $ = view.jQuery || view.$
  if (typeof $ === "function") {
    try {
      $(select).trigger("change")
    } catch {
      /* ignore */
    }
  }
  return true
}

function isDisabledSelect2Result(option) {
  const text = option.textContent?.trim().toLowerCase() || ""
  return (
    option.classList.contains("select2-results__option--disabled") ||
    option.getAttribute("aria-disabled") === "true" ||
    !text ||
    text.includes("no results") ||
    text.includes("searching") ||
    text.includes("loading")
  )
}

function isLoadingSelect2Result(option) {
  const text = option.textContent?.trim().toLowerCase() || ""
  return (
    option.classList.contains("loading-results") ||
    text.includes("searching") ||
    text.includes("loading")
  )
}

function pushAriaControlIds(ids, el) {
  if (!el) return
  for (const attr of ["aria-controls", "aria-owns"]) {
    const value = el.getAttribute(attr) || ""
    value
      .split(/\s+/)
      .map((part) => part.trim())
      .filter(Boolean)
      .forEach((id) => {
        if (!ids.includes(id)) ids.push(id)
      })
  }
}

function isResultsListbox(el) {
  return (
    !!el &&
    (el.classList?.contains("select2-results__options") ||
      el.getAttribute("role") === "listbox")
  )
}

function resolveResultsListbox(el) {
  if (!el) return null
  return isResultsListbox(el)
    ? el
    : el.querySelector(".select2-results__options")
}

function findSelect2ResultsContainer(select, selection, searchField) {
  const ids = []
  pushAriaControlIds(ids, searchField)
  pushAriaControlIds(ids, selection)

  const key = select.id || select.name
  if (key) ids.push(`select2-${key}-results`)

  for (const id of ids) {
    const listbox = resolveResultsListbox(document.getElementById(id))
    if (listbox) return listbox
  }

  for (const selector of [
    ".select2-dropdown .select2-results__options",
    '.select2-results__options[aria-expanded="true"]',
    '.select2-results__options[aria-hidden="false"]',
    ".select2-container--open .select2-results__options",
  ]) {
    const el = document.querySelector(selector)
    if (el) return el
  }
  return null
}

function findSelect2SearchField(select, container) {
  const key = select.id || select.name
  if (key) {
    const byId = document.getElementById(`${key}-search__field`)
    if (byId) return byId
  }
  return (
    container.querySelector(".select2-search__field") ||
    document.querySelector(
      ".select2-container--open .select2-search__field",
    ) ||
    document.querySelector(".select2-dropdown .select2-search__field")
  )
}

export function getAvatureSelect2ResultMatchScore(optionText, answer) {
  return choiceMatch.isExactChoiceMatch(optionText, answer) ? 100 : 0
}

function findBestSelect2Result(options, answer) {
  let best = null
  for (const option of options) {
    if (isDisabledSelect2Result(option)) continue
    const score = getAvatureSelect2ResultMatchScore(
      option.textContent?.trim() || "",
      answer,
    )
    if (score <= 0) continue
    if (best && !(score > best.score)) continue
    best = { option, score }
  }
  return best?.option ?? null
}

function findExactSelect2Result(options, answer) {
  const normalized = normalizeChoiceText(answer)
  if (!normalized) return null
  return (
    options.find(
      (option) =>
        !isDisabledSelect2Result(option) &&
        normalizeChoiceText(option.textContent?.trim() || "") === normalized,
    ) ?? null
  )
}

function isEmployerLikeLabel(label) {
  const normalized = normalizeLabel(label).trim()
  return (
    normalized === "employer" ||
    normalized === "company" ||
    normalized === "company name" ||
    normalized.includes("employer")
  )
}

function findDatasetEntryRoot(el) {
  let node = el?.parentElement ?? null
  while (node) {
    const id = node.id || ""
    const className = String(node.className || "")
    if (
      id.includes("multipleDatasetEntry_") ||
      className.split(/\s+/).includes("datasetField__row")
    ) {
      return node
    }
    node = node.parentElement
  }
  return null
}

function readDatasetFieldLabel(container) {
  const label = container.querySelector(
    "label, legend, .datasetlabelText, .labelText",
  )
  return normalizeLabel(label?.textContent || "").trim()
}

function findTextLikeInput(container) {
  return container.querySelector('input:not([type="hidden"]), textarea')
}

function findOtherEmployerInput(select) {
  const entry = findDatasetEntryRoot(select)
  if (!entry) return null

  const fields = Array.from(
    entry.querySelectorAll(
      ".datasetFieldContainer, .datasetfieldSpec, .fieldSpec",
    ),
  )
  const current = select.closest(
    ".datasetFieldContainer, .datasetfieldSpec, .fieldSpec",
  )
  const index = current ? fields.indexOf(current) : -1
  const searchFrom = index >= 0 ? fields.slice(index + 1) : fields

  for (const field of searchFrom) {
    const label = readDatasetFieldLabel(field)
    if (label !== "other" && !label.includes("other employer")) continue
    const input = findTextLikeInput(field)
    if (input) return input
  }
  return null
}

async function fillOtherEmployerWhenReady(select, value) {
  const timeoutMs = 2500
  const started = Date.now()
  while (Date.now() - started < timeoutMs) {
    const input = findOtherEmployerInput(select)
    if (input) {
      await fillInputTextField(input, value)
      return true
    }
    await delay.delay(50)
  }
  return false
}

async function clickSelect2Result(option) {
  option.scrollIntoView({ block: "nearest", behavior: "smooth" })
  await delay.delay(100)
  option.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
  option.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
  option.click()
  await delay.delay(200)
}

async function searchSelect2ForExactOption(
  select,
  selection,
  searchField,
  query,
  timeoutMs,
) {
  searchField.focus()
  await delay.delay(100)
  searchField.value = query
  searchField.dispatchEvent(new Event("input", { bubbles: true }))
  searchField.dispatchEvent(
    new KeyboardEvent("keyup", {
      bubbles: true,
      cancelable: true,
      key: query.slice(-1) || "Enter",
    }),
  )

  const started = Date.now()
  let stableReadyCount = 0
  while (Date.now() - started < timeoutMs) {
    const results = findSelect2ResultsContainer(select, selection, searchField)
    const options = results
      ? Array.from(results.querySelectorAll(".select2-results__option"))
      : []
    const exact = findExactSelect2Result(options, query)
    if (exact) {
      await clickSelect2Result(exact)
      return true
    }

    const loading = options.some(isLoadingSelect2Result)
    const ready = options.length > 0 && !loading
    if (ready) {
      stableReadyCount += 1
      if (stableReadyCount >= 4) break
    } else {
      stableReadyCount = 0
    }
    await delay.delay(100)
  }
  return false
}

function getFieldSpecLabel(container) {
  return container.querySelector("label")
}

function getFieldSpecLabelText(container) {
  return normalizeLabel(getFieldSpecLabel(container)?.textContent || "")
}

function isCoverLetterFileField(container) {
  const label = getFieldSpecLabelText(container)
  const className = container.className || ""
  return (
    label.includes("cover letter") &&
    !label.includes("resume") &&
    /\bFile(Schema)?Field\b/.test(className)
  )
}

function isResumeFileField(container) {
  const label = getFieldSpecLabelText(container)
  const className = container.className || ""
  const input = container.querySelector('input[type="file"]')
  const id = input?.id || ""
  const name = input?.name || ""
  return (
    container.id === "methodButton--fileFieldSpec" ||
    id === "resumeFile" ||
    name === "resumeFile" ||
    ((label.includes("resume") || label.includes("cv")) &&
      !label.includes("cover letter") &&
      /\bFile(Schema)?Field\b/.test(className))
  )
}

function findFileUploadDom(matcher) {
  const fields = Array.from(document.querySelectorAll(".fieldSpec"))
  for (const field of fields) {
    if (!matcher(field)) continue
    const input = field.querySelector('input[type="file"]')
    if (input) {
      return {
        container: field,
        label: getFieldSpecLabel(field),
        input,
        uploadedValue: field.querySelector(
          "span.screenReaderVisibility, .screenReaderVisibility",
        ),
      }
    }
  }
  return {
    container: null,
    label: null,
    input: null,
    uploadedValue: null,
  }
}

export function getAvatureCoverLetterUploadDom() {
  return findFileUploadDom(isCoverLetterFileField)
}

export function getAvatureResumeUploadDom() {
  return findFileUploadDom(isResumeFileField)
}

export function hasAvatureCoverLetterSlot() {
  const { container, input } = getAvatureCoverLetterUploadDom()
  return !!container && !!input
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function toTinyMceHtml(value) {
  const trimmed = String(value ?? "").trim()
  if (!trimmed) return ""
  return /<\/?[a-z][\s\S]*>/i.test(trimmed)
    ? trimmed
    : `<p>${escapeHtml(trimmed).replace(/\n/g, "<br />")}</p>`
}

async function fillTinyMceTextarea(textarea, value) {
  const id = textarea.id
  if (!id) return false

  const html = toTinyMceHtml(value)
  if (!html) return false

  const win = window
  if (win?.tinymce?.get) {
    const started = Date.now()
    let editor = null
    while (Date.now() - started < 2500 && !editor) {
      editor = win.tinymce.get(id)
      if (!editor) await delay.delay(100)
    }
    if (editor) {
      textarea.scrollIntoView({ behavior: "smooth", block: "center" })
      await delay.delay(100)
      editor.focus?.()
      editor.setContent(html)
      editor.save?.()
      editor.fire?.("input")
      editor.fire?.("change")
      textarea.dispatchEvent(
        new Event("input", { bubbles: true, cancelable: true }),
      )
      textarea.dispatchEvent(
        new Event("change", { bubbles: true, cancelable: true }),
      )
      return true
    }
  }

  const iframeId = `${id}_ifr`
  const started = Date.now()
  let iframe = null
  while (Date.now() - started < 2500 && !iframe) {
    iframe = document.getElementById(iframeId)
    if (!iframe) await delay.delay(100)
  }

  const doc = iframe?.contentDocument
  const body = doc?.body
  if (!body) return false

  textarea.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)
  body.innerHTML = html
  body.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }))
  body.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }))
  textarea.value = value
  textarea.dispatchEvent(
    new Event("input", { bubbles: true, cancelable: true }),
  )
  textarea.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: true }),
  )
  return true
}

export async function fillInputTextField(input, value) {
  if (input && value && value.trim() !== "") {
    input.scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
    if (input instanceof HTMLTextAreaElement) {
      const filled = await fillTinyMceTextarea(input, value)
      if (filled) return
    }
    await inputUtils.fillDefaultInputField(input, value)
  }
}

function isCountryOrStateLabel(label) {
  const normalized = normalizeLabel(label)
  return (
    !(
      normalized.includes("code") ||
      normalized.includes("phone") ||
      normalized.includes("dial")
    ) &&
    (normalized.includes("country") || normalized.includes("state"))
  )
}

export async function fillSelectField(fieldRule, answers) {
  if (!answers || answers.length === 0) return
  const answer = answers[0]
  if (String(answer ?? "").trim() === "") return

  const label = fieldRule.label
  const select = fieldRule.$input
  if (!select) return

  const isCountrySelect =
    select.classList?.contains("countryFieldSelect") ?? false
  if (!isCountrySelect && isCountryOrStateLabel(label)) {
    const alreadySelected =
      !!select && select.value !== "" && select.selectedIndex > 0
    if (alreadySelected) return
  }

  select.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)
  return isSelect2Field(select)
    ? fillSelect2Field(fieldRule, String(answer))
    : syncSelectElementToExistingOption(select, answer, {
        allowContains: !isCountrySelect,
      })
}

function uniqueAnswerTexts(answers) {
  const list = Array.isArray(answers) ? answers : [answers]
  const seen = new Set()
  const unique = []
  for (const answer of list) {
    const trimmed = String(answer ?? "").trim()
    if (!trimmed) continue
    const key = normalizeChoiceText(trimmed)
    if (seen.has(key)) continue
    seen.add(key)
    unique.push(trimmed)
  }
  return unique.slice(0, 3)
}

function syncMultiSelectOptions(select, answers) {
  const selectedKeys = new Set()
  for (const option of Array.from(select.options)) {
    const match = answers.find((answer) => {
      const text = normalizeChoiceText(option.text || "")
      const value = normalizeChoiceText(option.value || "")
      const wanted = normalizeChoiceText(answer)
      return text === wanted || value === wanted
    })
    option.selected = !!match
    if (match) selectedKeys.add(normalizeChoiceText(match))
  }

  if (selectedKeys.size !== answers.length) return false

  select.dispatchEvent(new Event("change", { bubbles: true }))
  select.dispatchEvent(new Event("input", { bubbles: true }))

  const view =
    select.ownerDocument?.defaultView ||
    (typeof window !== "undefined" ? window : undefined)
  const $ = view?.jQuery || view?.$
  if (typeof $ === "function") {
    try {
      $(select).trigger("change")
    } catch {
      /* ignore */
    }
  }
  return true
}

export async function fillMultiSelectField(fieldRule, answers) {
  const unique = uniqueAnswerTexts(answers)
  if (unique.length === 0) return

  const select = fieldRule.$input
  if (!select) return false

  select.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)
  if (!isSelect2Field(select)) return syncMultiSelectOptions(select, unique)

  for (const answer of unique) {
    const filled = await fillSelect2Field(fieldRule, answer, {
      skipExistingOptionSync: true,
    })
    if (filled !== true) return false
  }
  return true
}

function isSelect2Field(select) {
  if (
    select.classList?.contains("select2-hidden-accessible") ||
    select.hasAttribute?.("data-select2-id")
  ) {
    return true
  }
  const container =
    select.closest?.(
      ".datasetfieldSpec, .datasetFieldContainer, .fieldSpecContainer, fieldset",
    ) ?? null
  if (container?.querySelector(".select2-container")) return true

  const key = select.id || select.name
  return (
    !!key &&
    !!document.body.querySelector(
      `.select2-selection.select2Container${CSS.escape(key)}`,
    )
  )
}

export async function fillCheckboxField(fieldRule, answers) {
  fieldRule.label
  const checkboxes = fieldRule.$checkboxs || []
  fieldRule.options
  if (!checkboxes.length) return

  if (checkboxes[0]) {
    checkboxes[0].scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
  }

  for (const answer of answers) {
    const wanted = String(answer).toLowerCase().trim()
    for (const checkbox of checkboxes) {
      const label = checkbox.closest("label")
      if (label) {
        const clone = label.cloneNode(true)
        const nested = clone.querySelector('input[type="checkbox"]')
        if (nested) nested.remove()
        const text = clone.textContent?.trim() || ""
        if (choiceMatch.isExactChoiceMatch(text.toLowerCase(), wanted)) {
          if (!checkbox.checked) checkbox.click()
          return
        }
      } else {
        const sibling = checkbox.nextElementSibling
        if (sibling && sibling.tagName === "SPAN") {
          const text = sibling.textContent?.trim() || ""
          if (choiceMatch.isExactChoiceMatch(text.toLowerCase(), wanted)) {
            if (!checkbox.checked) checkbox.click()
            return
          }
        }
      }
    }
  }
}

export async function fillRadioGroupField(fieldRule, answers) {
  fieldRule.label
  const answer = answers?.[0]
  if (!answer) return false

  const parent = fieldRule.$radioParent
  if (!parent) return false

  parent.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)

  const radios = Array.from(parent.querySelectorAll('input[type="radio"]'))
  let match = null
  for (const radio of radios) {
    if (radio.disabled) continue
    let optionText = ""
    if (radio.getAttribute("data-option-name")) {
      optionText = radio.getAttribute("data-option-name")?.trim() || ""
    } else if (radio.id) {
      const forLabel = parent.querySelector(`label[for="${radio.id}"]`)
      if (forLabel) optionText = forLabel.textContent?.trim() || ""
    }
    if (!optionText) {
      const parentLabel = radio.parentElement?.querySelector("label")
      if (parentLabel) optionText = parentLabel.textContent?.trim() || ""
    }
    if (optionText.toLowerCase().trim() === answer.toLowerCase().trim()) {
      match = radio
      break
    }
  }

  if (!match) return false

  let label = null
  if (match.id) label = parent.querySelector(`label[for="${match.id}"]`)
  if (!label) label = match.parentElement?.querySelector("label") || null

  if (!match.checked) {
    match.checked = true
    match.dispatchEvent(new Event("change", { bubbles: true }))
    match.dispatchEvent(new Event("click", { bubbles: true }))
    match.dispatchEvent(new Event("input", { bubbles: true }))
    if (label) label.click()
  }
  return match.checked
}

function adaptDateValueForInput(input, value) {
  const type = String(input.getAttribute("type") || input.type || "").toLowerCase()
  if (type === "date" && /^\d{4}-\d{2}$/.test(value)) return `${value}-01`
  if (type === "month" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value.slice(0, 7)
  }

  const placeholder = input.getAttribute("placeholder")
  if (placeholder && placeholder.toLowerCase().includes("mm/dd/yy")) {
    const month = value.split("-")[1]
    const year = value.split("-")[0]
    return `${month}/01/${String(year).slice(-2)}`
  }
  if (placeholder && placeholder.toLowerCase().includes("yyyy/mm/dd")) {
    const month = value.split("-")[1]
    const year = value.split("-")[0]
    return `${year}/${month}/01`
  }
  return value
}

export async function fillDateField(input, value) {
  if (input && value && value.trim() !== "") {
    value = adaptDateValueForInput(input, value.trim())
    input.scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
    input.value = value
    input.dispatchEvent(
      new Event("input", { bubbles: true, cancelable: true }),
    )
    input.dispatchEvent(
      new Event("change", { bubbles: true, cancelable: true }),
    )
    await delay.delay(100)
  }
}

function createEndDateRefreshHelpers(reporter, recordIndex, sectionRules, record) {
  let latestSection
  const callbacks = reporter.forRecord(recordIndex, sectionRules)
  return {
    callbacks: {
      onSectionResultChanged(section) {
        latestSection = section
        callbacks.onSectionResultChanged?.(section)
      },
    },
    refreshEndDate(result) {
      const row = latestSection?.rows[0]
      if (!result || !latestSection || !row) return

      const endField = row.fields.find((field) =>
        ["end", "end date"].includes(normalizeLabel(field.label)),
      )
      const endLabel = endField?.label ?? "End Date"
      const sectionRule = sectionRules[0]
      const existing = sectionRule.children.find((child) =>
        ["end", "end date"].includes(normalizeLabel(child.label)),
      )
      if (existing) {
        existing.$input = result.input
      } else {
        sectionRule.children.push({
          type: enums.FIELD_TYPE.DATE,
          label: endLabel,
          $input: result.input,
          required: false,
        })
      }

      reporter.forRecord(recordIndex, sectionRules)
      const refreshed = answerMethods.createSectionResultReporter(
        latestSection.type,
        callbacks,
      )
      refreshed.setLabel(latestSection.label)
      const refreshedRow = refreshed.ensureRow(0, record)
      for (const field of row.fields) {
        refreshed.updateField(
          refreshedRow,
          field.label,
          field.value,
          field.status,
        )
      }
      refreshed.updateField(
        refreshedRow,
        endLabel,
        result.value,
        endField?.status === "skipped"
          ? "skipped"
          : result.filled
            ? "filled"
            : "missed",
      )
      refreshed.emit()
    },
  }
}

export async function fillEducationFields(
  rules,
  education,
  operationConfig,
  taskQueue,
  updateFilledProgress,
  resolveField,
  updateSectionResult,
) {
  const reporter = sectionResults.createSequentialSectionResultReporter(
    "education",
    { updateSectionResult },
    "Education",
  )

  function findEducationRule(allRules) {
    return (
      allRules.find((fieldRule) => fieldRule.type === enums.FIELD_TYPE.EDUCATION) ??
      null
    )
  }

  function findEducationWrapper(eduRule) {
    const children = eduRule.children || []
    const anchor =
      children[0]?.$input || children[0]?.$label || eduRule?.$label
    const row = anchor?.closest("fieldset.datasetField__row")
    return (
      anchor?.closest(".multipleDatasetWrapper") ||
      anchor?.closest(".multipleDataset") ||
      row?.parentElement ||
      row ||
      xpath.getFirstOrderedNodeSafe(
        './/div[contains(@class, "multipleDatasetWrapper")]',
        document.body,
      )
    )
  }

  const entryXpath =
    './/div[contains(@id, "multipleDatasetEntry_") and not(contains(@id, "_sample")) and not(contains(@class, "TableSampleRow"))] | .//fieldset[contains(@class, "datasetField__row") and not(contains(@class, "datasetField__row--sample"))]'

  async function ensureEntry(wrapper, index) {
    let entries = xpath.getOrderedNodesSafe(entryXpath, wrapper)
    if (index < entries.length) return entries[index]
    await rule.addEduExp(wrapper)
    await delay.delay(300)
    entries = xpath.getOrderedNodesSafe(entryXpath, wrapper)
    return entries[index] ?? null
  }

  function dedupeChildren(children) {
    const seen = new Set()
    const unique = []
    for (const child of children) {
      const label = normalizeLabel(child.label || "")
      if (!label) {
        unique.push(child)
        continue
      }
      const key = `${child.type}:${label}`
      if (seen.has(key)) continue
      seen.add(key)
      unique.push(child)
    }
    return unique
  }

  function wrapEducationHandlers(handlers, recordIndex, resolveHook) {
    const filledValues = new WeakMap()
    const findValue = (fieldRule, record) =>
      answerMethods.findValueInRecord(fieldRule.label, record)

    const fillSelectLike = async (fieldRule, record, fieldType) => {
      let value
      const resolveResult = await resolveHook?.(fieldRule, record, recordIndex)
      if (resolveResult === "handled") return true
      try {
        value = findValue(fieldRule, record)
      } catch {
        return
      }

      const text = Array.isArray(value) ? value[0] : String(value)
      if (!text) return

      const input = fieldRule.$input
      input?.scrollIntoView({ behavior: "smooth", block: "center" })
      await delay.delay(200)
      if (input && filledValues.get(input) === text) return
      if (input) filledValues.set(input, text)

      if (input instanceof HTMLSelectElement && isSelect2Field(input)) {
        return fillSelect2Field(fieldRule, text)
      }

      const handler = handlers[fieldType]
      if (handler) return handler(fieldRule, record)
      if (
        fieldType === enums.FIELD_TYPE.LISTBOX &&
        handlers[enums.FIELD_TYPE.SELECT]
      ) {
        return handlers[enums.FIELD_TYPE.SELECT]?.(fieldRule, record)
      }
    }

    const fillMulti = async (fieldRule, record) => {
      const resolveResult = await resolveHook?.(fieldRule, record, recordIndex)
      return (
        resolveResult === "handled" ||
        handlers[enums.FIELD_TYPE.MULTI_SELECT]?.(fieldRule, record)
      )
    }

    return {
      ...handlers,
      [enums.FIELD_TYPE.SELECT]: (fieldRule, record) =>
        fillSelectLike(fieldRule, record, enums.FIELD_TYPE.SELECT),
      [enums.FIELD_TYPE.LISTBOX]: (fieldRule, record) =>
        fillSelectLike(fieldRule, record, enums.FIELD_TYPE.LISTBOX),
      [enums.FIELD_TYPE.MULTI_SELECT]: (fieldRule, record) =>
        fillMulti(fieldRule, record),
    }
  }

  async function fillOneRecord(
    entry,
    children,
    record,
    recordIndex,
    handlers,
    queue,
    resolveHook,
  ) {
    const sectionRules = [
      {
        type: enums.FIELD_TYPE.EDUCATION,
        label: "Education",
        required: true,
        children,
      },
    ]
    const helpers = createEndDateRefreshHelpers(
      reporter,
      recordIndex,
      sectionRules,
      record,
    )
    const ops = answerMethods.getEducationOperations(
      sectionRules,
      [record],
      wrapEducationHandlers(handlers, recordIndex, resolveHook),
      undefined,
      helpers.callbacks,
    )
    ops.forEach((op) => queue.add(op))
    await queue.run()
    await delay.delay(300)
    const endDate = await fillEndDateIfNeeded(entry, record)
    helpers.refreshEndDate(endDate)
    await delay.delay(300)
  }

  const educationRule = findEducationRule(rules)
  if (!educationRule) {
    console.warn("No education rule found")
    return false
  }

  const wrapper = findEducationWrapper(educationRule)
  if (!wrapper) {
    console.warn("No multipleDatasetWrapper found for education")
    return false
  }

  let filledAny = false
  for (let index = 0; index < education.length; index++) {
    const entry = await ensureEntry(wrapper, index)
    if (!entry) continue
    const children = dedupeChildren(
      buildChildrenByLabel(entry, educationRule.children || []),
    )
    if (children.length === 0) continue
    await fillOneRecord(
      entry,
      children,
      education[index],
      index,
      operationConfig,
      taskQueue,
      resolveField,
    )
    filledAny = true
  }

  if (filledAny) updateFilledProgress("Education")
  return filledAny
}

export async function fillEmploymentFields(
  rules,
  workExperience,
  operationConfig,
  taskQueue,
  updateFilledProgress,
  updateSectionResult,
) {
  const reporter = sectionResults.createSequentialSectionResultReporter(
    "employment",
    { updateSectionResult },
    "Employment",
  )

  function findEmploymentRule(allRules) {
    return (
      allRules.find(
        (fieldRule) => fieldRule.type === enums.FIELD_TYPE.EMPLOYMENT,
      ) ?? null
    )
  }

  function findEmploymentWrapper(empRule) {
    const children = empRule.children || []
    const anchor =
      children[0]?.$input || children[0]?.$label || empRule?.$label
    const row = anchor?.closest("fieldset.datasetField__row")
    return (
      anchor?.closest(".multipleDatasetWrapper") ||
      anchor?.closest(".multipleDataset") ||
      row?.parentElement ||
      row ||
      xpath.getFirstOrderedNodeSafe(
        './/div[contains(@class, "multipleDatasetWrapper")]',
        document.body,
      )
    )
  }

  const entryXpath =
    './/div[contains(@id, "multipleDatasetEntry_") and not(contains(@id, "_sample")) and not(contains(@class, "TableSampleRow"))] | .//fieldset[contains(@class, "datasetField__row") and not(contains(@class, "datasetField__row--sample"))]'

  async function ensureEntry(wrapper, index) {
    let entries = xpath.getOrderedNodesSafe(entryXpath, wrapper)
    if (index < entries.length) return entries[index]
    await rule.addEduExp(wrapper)
    await delay.delay(500)
    entries = xpath.getOrderedNodesSafe(entryXpath, wrapper)
    return entries[index] ?? null
  }

  function dedupeChildren(children) {
    const seen = new Set()
    const unique = []
    for (const child of children) {
      const label = normalizeLabel(child.label || "")
      if (!label) {
        unique.push(child)
        continue
      }
      const key = `${child.type}:${label}`
      if (seen.has(key)) continue
      seen.add(key)
      unique.push(child)
    }
    return unique
  }

  function wrapEmploymentHandlers(handlers) {
    const filledValues = new WeakMap()
    const findValue = (fieldRule, record) =>
      answerMethods.findValueInRecord(fieldRule.label, record)

    const fillSelectLike = async (fieldRule, record, fieldType) => {
      let value
      try {
        value = findValue(fieldRule, record)
      } catch {
        return
      }

      const text = Array.isArray(value) ? value[0] : String(value)
      if (!text) return

      const input = fieldRule.$input
      input?.scrollIntoView({ behavior: "smooth", block: "center" })
      await delay.delay(200)
      if (input && filledValues.get(input) === text) return
      if (input) filledValues.set(input, text)

      if (input instanceof HTMLSelectElement && isSelect2Field(input)) {
        return fillSelect2Field(fieldRule, text)
      }

      const handler = handlers[fieldType]
      if (handler) return handler(fieldRule, record)
      if (
        fieldType === enums.FIELD_TYPE.LISTBOX &&
        handlers[enums.FIELD_TYPE.SELECT]
      ) {
        return handlers[enums.FIELD_TYPE.SELECT]?.(fieldRule, record)
      }
    }

    return {
      ...handlers,
      [enums.FIELD_TYPE.SELECT]: (fieldRule, record) =>
        fillSelectLike(fieldRule, record, enums.FIELD_TYPE.SELECT),
      [enums.FIELD_TYPE.LISTBOX]: (fieldRule, record) =>
        fillSelectLike(fieldRule, record, enums.FIELD_TYPE.LISTBOX),
    }
  }

  async function fillOneRecord(
    entry,
    children,
    record,
    recordIndex,
    handlers,
    queue,
  ) {
    const sectionRules = [
      {
        type: enums.FIELD_TYPE.EMPLOYMENT,
        label: "Employment",
        required: true,
        children,
      },
    ]
    const helpers = createEndDateRefreshHelpers(
      reporter,
      recordIndex,
      sectionRules,
      record,
    )
    const ops = answerMethods.getEmploymentOperations(
      sectionRules,
      [record],
      wrapEmploymentHandlers(handlers),
      undefined,
      helpers.callbacks,
    )
    ops.forEach((op) => queue.add(op))
    await queue.run()
    await delay.delay(300)
    const endDate = await fillEndDateIfNeeded(entry, record)
    helpers.refreshEndDate(endDate)
    await delay.delay(300)
  }

  const employmentRule = findEmploymentRule(rules)
  if (!employmentRule) {
    console.warn("No education rule found")
    return false
  }

  const wrapper = findEmploymentWrapper(employmentRule)
  if (!wrapper) {
    console.warn("No multipleDatasetWrapper found for employment")
    return false
  }

  let filledAny = false
  for (let index = 0; index < workExperience.length; index++) {
    const entry = await ensureEntry(wrapper, index)
    if (!entry) continue
    const children = dedupeChildren(
      buildChildrenByLabel(entry, employmentRule.children || []),
    )
    if (children.length === 0) continue
    await fillOneRecord(
      entry,
      children,
      workExperience[index],
      index,
      operationConfig,
      taskQueue,
    )
    filledAny = true
  }

  if (filledAny) updateFilledProgress("Employment")
  return filledAny
}

function agreementMatchesAnswer(fieldRule, regular) {
  if (!fieldRule || !regular) return false
  try {
    const value = answerMethods.findValueInRecord(fieldRule.label, regular)
    const values = Array.isArray(value) ? value : [value]
    return values.some((item) => isTruthyAgreementAnswer(item, fieldRule.label))
  } catch {
    return false
  }
}

function isTruthyAgreementAnswer(value, label) {
  if (value === true) return true
  if (value === false) return false
  const normalized = normalizeLabel(String(value ?? ""))
  return (
    !!normalized &&
    (["true", "yes", "y", "1"].includes(normalized) ||
      normalized === normalizeLabel(label))
  )
}

function findCheckboxRuleForInput(input, rules) {
  return rules.find((fieldRule) => {
    const checkboxes = fieldRule.$checkboxs || []
    return (
      fieldRule.type === enums.FIELD_TYPE.CHECKBOX &&
      (fieldRule.$input === input || checkboxes.includes(input))
    )
  })
}

export async function fillAgreementField(rules = [], regular = {}) {
  const checkboxes = xpath.getOrderedNodesSafe(
    './/div[contains(@class, "AcceptCheckboxFieldContainer")]//input[@type="checkbox"]',
    document.body,
  )
  for (const checkbox of checkboxes) {
    if (!checkbox || checkbox.type !== "checkbox") continue
    const fieldRule = findCheckboxRuleForInput(checkbox, rules)
    if (!agreementMatchesAnswer(fieldRule, regular)) continue
    checkbox.scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
    checkbox.checked = true
    checkbox.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(100)
  }
}

export function buildChildrenByLabel(entry, templateChildren) {
  const rows = rule.collectDatasetRowInfo(entry)
  const byLabel = new Map(
    rows.map((rowInfo) => [normalizeLabel(rowInfo.labelText), rowInfo]),
  )
  const children = []
  for (const template of templateChildren) {
    const key = normalizeLabel(template.label || "")
    if (!key) continue
    const rowInfo = byLabel.get(key)
    if (!rowInfo) continue
    const child = rule.getRule(
      rowInfo.row,
      rowInfo.labelElement,
      template.label,
      rowInfo.required,
    )
    if (child) children.push(child)
  }
  return children
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const methodButton = document.querySelector("#methodButton--file")
  const fieldset = document.querySelector(
    "#methodButton--fileFieldSetContainer",
  )
  if (methodButton && (!fieldset || fieldset.style.display === "none")) {
    console.info("[Avature][ResumeUpload] activate-method", {
      selector: "#methodButton--file",
      fieldset: fieldset?.id || null,
    })
    if (fieldset) fieldset.style.display = "block"
    await delay.delay(100)
    await delay.delay(200)
  } else {
    const resumeField = xpath.getFirstOrderedNodeSafe(
      './/div[@id="resumeFileField"]',
      document.body,
    )
    if (resumeField) {
      resumeField.style.display = "block"
      await delay.delay(100)
      await delay.delay(200)
    }
  }

  const resumeDom = getAvatureResumeUploadDom()
  const fileInputs = Array.from(
    document.querySelectorAll('input[type="file"]'),
  )
  const input =
    resumeDom.input || (fileInputs.length === 1 ? fileInputs[0] : null)
  if (!input) {
    console.warn("[Avature][ResumeUpload] input-not-found", {
      fileInputCount: fileInputs.length,
    })
    return false
  }

  console.info("[Avature][ResumeUpload] input-selected", {
    id: input.id || null,
    name: input.name || null,
    source: resumeDom.input ? "resume-field" : "single-file-fallback",
  })
  await dom.uploadFiles(
    input,
    await answerMethods.fetchPdfAsBlob(resumeInfo),
    updateRequired,
    updateFilled,
    "Resume/CV",
  )
  await observer.waitForCondition(() => !!findEnabledResumeUploadButton(), {
    timeout: 3000,
    observeTarget: document.body,
  })
  const uploadButton = findEnabledResumeUploadButton()
  if (uploadButton) {
    uploadButton.scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
    uploadButton.click()
    await delay.delay(200)
  }
  return !!input.files?.length
}

function findEnabledResumeUploadButton() {
  return xpath.getFirstOrderedNodeSafe(
    './/button[@id="uploadFileResume" and not(@disabled)] | .//div[@id="uploadFileResumeContainer"]//button[contains(@class, "button--primary") and not(@disabled)]',
    document.body,
  )
}

export async function uploadCoverLetter(
  coverLetter,
  updateRequired,
  updateFilled,
) {
  const { container, input } = getAvatureCoverLetterUploadDom()
  if (!container || !input) return false

  await dom.uploadFiles(
    input,
    await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter),
    updateRequired,
    updateFilled,
    "Cover Letter",
  )
  return await observer.waitForCondition(
    () => {
      const uploaded = getAvatureCoverLetterUploadDom().uploadedValue
      const text = uploaded?.textContent?.trim() || ""
      return !!text
    },
    { timeout: 5000, interval: 100, observeTarget: container },
  )
}

export async function fillSelect2Field(fieldRule, answer, options = {}) {
  if (!answer || answer.trim() === "") return

  const timeoutMs = 5000
  const query = answer
  const select = fieldRule.$input
  if (!select) return

  const key = select.id || select.name
  if (!key) return

  if (!options.skipExistingOptionSync) {
    const synced = syncSelectElementToExistingOption(select, answer, {
      allowContains: false,
      updateSelect2Display: true,
    })
    if (synced) {
      await delay.delay(100)
      return true
    }
  }

  select.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(200)

  let container = null
  const selectionSpan = xpath.getFirstOrderedNodeSafe(
    `.//span[contains(@class, "select2-selection") and contains(@class, "select2Container${key}")]`,
    document.body,
  )
  if (selectionSpan) container = selectionSpan.closest(".select2-container")
  if (!container) {
    const field = select.closest(
      ".fieldSpecContainer, .datasetFieldContainer, .datasetfieldSpec, fieldset",
    )
    if (field) {
      container = xpath.getFirstOrderedNodeSafe(
        './/span[contains(@class, "select2-container")]',
        field,
      )
    }
  }
  if (!container) return false

  const selection = container.querySelector(".select2-selection")
  if (!selection) return false

  selection.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)
  selection.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
  selection.click()
  await delay.delay(300)

  const openStarted = Date.now()
  let searchField = null
  while (
    Date.now() - openStarted < timeoutMs &&
    !(searchField = findSelect2SearchField(select, container))
  ) {
    await delay.delay(50)
  }
  if (!searchField) return false

  searchField.focus()
  await delay.delay(100)
  searchField.value = query
  searchField.dispatchEvent(new Event("input", { bubbles: true }))
  searchField.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }))
  await delay.delay(500)

  const searchStarted = Date.now()
  let chosen = null
  let results = null
  let optionNodes = []
  while (Date.now() - searchStarted < timeoutMs) {
    results = findSelect2ResultsContainer(select, selection, searchField)
    const optionsList = results
      ? Array.from(results.querySelectorAll(".select2-results__option"))
      : []
    optionNodes = optionsList

    const best = findBestSelect2Result(optionsList, query)
    if (best) {
      chosen = best
      break
    }

    chosen =
      results?.querySelector(".select2-results__option--highlighted") ||
      document.querySelector(
        ".select2-container--open .select2-results__option--highlighted",
      )
    if (
      (chosen &&
        !isDisabledSelect2Result(chosen) &&
        getAvatureSelect2ResultMatchScore(
          chosen.textContent?.trim() || "",
          query,
        ) > 0) ||
      (optionsList.length > 0 &&
        !optionsList.some(isLoadingSelect2Result) &&
        Date.now() - searchStarted >= 250)
    ) {
      break
    }
    await delay.delay(50)
  }

  if (
    !chosen ||
    isDisabledSelect2Result(chosen) ||
    getAvatureSelect2ResultMatchScore(
      chosen.textContent?.trim() || "",
      query,
    ) <= 0
  ) {
    const other = findExactSelect2Result(optionNodes, "Other")
    if (other && isEmployerLikeLabel(fieldRule.label)) {
      await clickSelect2Result(other)
      return fillOtherEmployerWhenReady(select, query)
    }
    if (isEmployerLikeLabel(fieldRule.label)) {
      const searchedOther = await searchSelect2ForExactOption(
        select,
        selection,
        searchField,
        "Other",
        timeoutMs,
      )
      if (searchedOther) return fillOtherEmployerWhenReady(select, query)
    }

    const escape = new KeyboardEvent("keydown", { bubbles: true })
    Object.defineProperty(escape, "key", { value: "Escape" })
    searchField.dispatchEvent(escape)
    return false
  }

  await clickSelect2Result(chosen)
  await delay.delay(100)
  return true
}

function readSelectedOptionText(select) {
  const options = Array.from(select.options || [])
  const selected =
    options.find((option) => option.selected) ||
    options[select.selectedIndex] ||
    options.find((option) => option.value === select.value)
  if (selected) {
    return String(selected.textContent ?? selected.text ?? "").trim()
  }
  const rendered = findSelect2Selection(select)?.querySelector(
    ".select2-selection__rendered",
  )
  return stripSelect2CloseGlyph(rendered?.textContent?.trim() || "")
}

function textMatchesAnyAlias(text, aliases) {
  const normalized = normalizeChoiceText(text)
  return (
    !!normalized &&
    aliases.some((alias) => normalizeChoiceText(alias) === normalized)
  )
}

function findUniqueAliasResult(options, aliases) {
  const matches = options.filter(
    (option) =>
      !isDisabledSelect2Result(option) &&
      textMatchesAnyAlias(readResultOptionText(option), aliases),
  )
  return matches.length === 1 ? matches[0] : null
}

function resultsFingerprint(options) {
  return options
    .filter((option) => !isDisabledSelect2Result(option))
    .map(
      (option) =>
        `${readResultOptionValue(option)}\0${readResultOptionText(option)}`,
    )
    .join("\u0001")
}

async function restoreSelectToOriginal(select, originalText) {
  const synced = syncSelectElementToExistingOption(select, originalText, {
    allowContains: false,
    updateSelect2Display: true,
  })
  return !!synced && readSelectedOptionText(select) === originalText
}

export async function fillAvatureGeographicCountryField(
  select,
  answer,
  aliases = [answer],
) {
  const trimmed = String(answer ?? "").trim()
  if (!select || !trimmed) return false

  const candidates = Array.from(
    new Set([trimmed, ...aliases].map((value) => String(value).trim())),
  ).filter(Boolean)
  const original = readSelectedOptionText(select)
  let touched = false
  const isSelect2 = isSelect2Field(select)

  console.info("[Avature][Country] prefill-start", {
    candidateCount: candidates.length,
    current: original,
    select2: isSelect2,
  })

  if (textMatchesAnyAlias(original, candidates)) {
    console.info("[Avature][Country] already-selected", { current: original })
    return true
  }

  for (const candidate of candidates) {
    const synced = syncSelectElementToExistingOption(select, candidate, {
      allowContains: false,
      updateSelect2Display: true,
    })
    if (synced && textMatchesAnyAlias(readSelectedOptionText(select), candidates)) {
      console.info("[Avature][Country] native-committed", {
        selected: readSelectedOptionText(select),
      })
      return true
    }
    if (synced) touched = true
  }

  if (!isSelect2) {
    if (touched) await restoreSelectToOriginal(select, original)
    console.warn("[Avature][Country] native-exact-match-missing", {
      candidateCount: candidates.length,
      current: readSelectedOptionText(select),
      restored: touched,
    })
    return false
  }

  let searchField = null
  try {
    const opened = await openAvatureSelect2Search(select)
    if (!opened) return false
    searchField = opened.searchInput

    for (const candidate of candidates) {
      const baseline = resultsFingerprint(
        collectSelect2ResultOptions(select, opened.selection, searchField),
      )
      typeIntoSelect2Search(searchField, candidate)

      const started = Date.now()
      let previousFingerprint = baseline
      let stableCount = 0
      while (Date.now() - started < 5000) {
        const options = collectSelect2ResultOptions(
          select,
          opened.selection,
          searchField,
        )
        const loading = options.some(isLoadingSelect2Result)
        const fingerprint = resultsFingerprint(options)
        if (fingerprint && fingerprint === previousFingerprint) {
          stableCount += 1
        } else {
          stableCount = 0
        }
        previousFingerprint = fingerprint

        const unique = findUniqueAliasResult(options, candidates)
        const changed = fingerprint !== baseline
        if (
          unique &&
          !loading &&
          changed &&
          stableCount >= 1
        ) {
          await clickSelect2Result(unique)
          touched = true
          if (
            textMatchesAnyAlias(readSelectedOptionText(select), candidates)
          ) {
            console.info("[Avature][Country] select2-committed", {
              selected: readSelectedOptionText(select),
            })
            return true
          }
        }
        if (fingerprint && !loading && changed && stableCount >= 2) break
        await delay.delay(100)
      }
    }
  } finally {
    closeAvatureSelect2Search(select, searchField)
  }

  const restored = await restoreSelectToOriginal(select, original)
  if (!restored) {
    console.warn("[Avature][Country] rollback-failed", {
      reason: "original-selection-not-restored",
    })
  }
  console.warn("[Avature][Country] select2-exact-match-missing", {
    candidateCount: candidates.length,
    current: readSelectedOptionText(select),
    restored,
  })
  return false
}

function findSelect2Selection(select) {
  const key = select.id || select.name
  if (!key) return null
  const field = select.closest(
    ".datasetfieldSpec, .datasetFieldContainer, .fieldSpecContainer, fieldset",
  )
  const inField = Array.from(
    field?.querySelectorAll(".select2-selection") || [],
  ).find((el) => el.classList.contains(`select2Container${key}`))
  return (
    inField ||
    document.querySelector(`.select2-selection.select2Container${key}`) ||
    null
  )
}

function findVisibleSelect2SearchInput(select) {
  const key = select.id || select.name
  if (!key) return null
  const resultsId = `select2-${key}-results`
  return (
    Array.from(document.querySelectorAll(".select2-search__field")).find(
      (input) =>
        input.offsetParent !== null &&
        (input.getAttribute("aria-controls") === resultsId ||
          input.id === `${key}-search__field`),
    ) || null
  )
}

function readResultOptionValue(option) {
  const raw =
    option.getAttribute("data-value") ||
    option.getAttribute("value") ||
    option.id ||
    option.getAttribute("data-select2-id") ||
    ""
  return (raw.match(/^li(.+)$/i)?.[1] || raw).trim()
}

function readResultOptionText(option) {
  return (option.textContent || "").replace(/\s+/g, " ").trim()
}

function stripSelect2CloseGlyph(text) {
  return text
    .replace(/\s*\u00d7\s*$/u, "")
    .replace(/\s+/g, " ")
    .trim()
}

function splitMultiSelectRendered(text) {
  return text
    .split("\xD7")
    .map((part) => stripSelect2CloseGlyph(part))
    .filter(Boolean)
}

function renderedIncludesText(renderedText, wanted, isMultiple) {
  return isMultiple
    ? splitMultiSelectRendered(renderedText).includes(wanted)
    : stripSelect2CloseGlyph(renderedText) === wanted
}

function collectSelect2ResultOptions(select, selection, searchField) {
  const results = findSelect2ResultsContainer(select, selection, searchField)
  return results
    ? Array.from(results.querySelectorAll(".select2-results__option"))
    : []
}

function toInstitutionCandidates(select, options) {
  const key = select.id || select.name || "field"
  const candidates = []
  for (const [index, option] of options.entries()) {
    if (isDisabledSelect2Result(option)) continue
    const value = readResultOptionValue(option)
    const text = readResultOptionText(option)
    if (value && text) {
      candidates.push({
        candidate_key: `avature-${key}-${index}`.slice(0, 128),
        value,
        text,
      })
    }
  }
  return candidates.slice(0, 25)
}

async function openAvatureSelect2Search(select) {
  const selection = findSelect2Selection(select)
  if (!selection) {
    console.warn(
      "[Avature][Education] select2-open-failed",
      JSON.stringify({ phase: "selection", selectId: select.id || "" }),
    )
    return null
  }

  const existing = findVisibleSelect2SearchInput(select)
  if (existing) return { selection, searchInput: existing }

  selection.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)
  selection.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
  selection.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
  selection.click()

  const container = selection.closest(".select2-container")
  const findSearch = () =>
    container ? findSelect2SearchField(select, container) : null

  const started = Date.now()
  while (Date.now() - started < 2500) {
    const searchInput = findSearch()
    if (searchInput) return { selection, searchInput }
    await delay.delay(50)
  }

  const view =
    select.ownerDocument?.defaultView ||
    (typeof window !== "undefined" ? window : undefined)
  const $ = view?.jQuery || view?.$
  if (typeof $ === "function") {
    try {
      $(select).select2?.("open")
    } catch {
      /* ignore */
    }
  }

  selection.focus()
  selection.dispatchEvent(
    new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      key: "ArrowDown",
      code: "ArrowDown",
    }),
  )
  await delay.delay(300)

  let searchInput = findSearch()
  if (searchInput) return { selection, searchInput }

  selection.focus()
  selection.dispatchEvent(
    new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      key: "Enter",
      code: "Enter",
    }),
  )
  while (Date.now() - started < 5000) {
    searchInput = findSearch()
    if (searchInput) return { selection, searchInput }
    await delay.delay(50)
  }

  console.warn(
    "[Avature][Education] select2-open-failed",
    JSON.stringify({
      phase: "search-input",
      selectId: select.id || "",
      hasOpenContainer: !!document.querySelector(".select2-container--open"),
      visibleSearchInputCount: Array.from(
        document.querySelectorAll(".select2-search__field"),
      ).filter((input) => input.offsetParent !== null).length,
      dropdownCount: document.querySelectorAll(".select2-dropdown").length,
    }),
  )
  return null
}

export function closeAvatureSelect2Search(select, searchField) {
  const view =
    select.ownerDocument?.defaultView ||
    (typeof window !== "undefined" ? window : undefined)
  const $ = view?.jQuery || view?.$
  if (typeof $ === "function") {
    try {
      $(select).select2?.("close")
    } catch {
      /* ignore */
    }
  }

  const selection = findSelect2Selection(select)
  if (selection && document.querySelector(".select2-container--open")) {
    selection.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
    selection.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
    selection.click()
  }

  if (searchField) {
    const escape = new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      key: "Escape",
      code: "Escape",
    })
    for (const [prop, value] of [
      ["which", 27],
      ["keyCode", 27],
    ]) {
      try {
        Object.defineProperty(escape, prop, { value })
      } catch {
        /* ignore */
      }
    }
    searchField.dispatchEvent(escape)
    searchField.dispatchEvent(new Event("focusout", { bubbles: true }))
    searchField.blur()
  }
}

function typeIntoSelect2Search(searchField, value) {
  searchField.focus()
  searchField.value = value
  searchField.dispatchEvent(new Event("input", { bubbles: true }))
  searchField.dispatchEvent(
    new KeyboardEvent("keyup", {
      bubbles: true,
      cancelable: true,
      key: value.slice(-1) || "Enter",
    }),
  )
}

export async function captureAvatureInstitutionCandidates(
  select,
  searchInput,
  keepOpen = false,
) {
  if (!select || !searchInput.trim()) {
    return { status: "failed", candidates: [] }
  }

  let searchField = null
  try {
    const opened = await openAvatureSelect2Search(select)
    if (!opened) {
      console.warn(
        "[Avature][Education] candidate-capture-failed",
        JSON.stringify({ phase: "open", selectId: select.id || "" }),
      )
      return { status: "failed", candidates: [] }
    }

    searchField = opened.searchInput
    typeIntoSelect2Search(searchField, searchInput)

    const started = Date.now()
    let previousFingerprint = ""
    let stableCount = 0
    let candidates = []
    while (Date.now() - started < 5000) {
      const options = collectSelect2ResultOptions(
        select,
        opened.selection,
        searchField,
      )
      const loading = options.some(isLoadingSelect2Result)
      candidates = toInstitutionCandidates(select, options)
      const fingerprint = candidates
        .map((candidate) => `${candidate.value}\0${candidate.text}`)
        .join("\u0001")
      if (loading || fingerprint !== previousFingerprint) stableCount = 0
      else stableCount += 1
      previousFingerprint = fingerprint
      if (!loading && stableCount >= 2) break
      await delay.delay(100)
    }

    return {
      status: candidates.length > 0 ? "ready" : "no-results",
      candidates,
    }
  } catch (error) {
    console.warn(
      "[Avature][Education] candidate-capture-failed",
      JSON.stringify({
        phase: "capture",
        selectId: select.id || "",
        reason: error instanceof Error ? error.name : "unknown-error",
      }),
    )
    return { status: "failed", candidates: [] }
  } finally {
    if (!keepOpen) closeAvatureSelect2Search(select, searchField)
  }
}

function findExactCandidateOption(options, candidate) {
  return (
    options.find(
      (option) =>
        !isDisabledSelect2Result(option) &&
        readResultOptionText(option) === candidate.text &&
        readResultOptionValue(option) === candidate.value,
    ) || null
  )
}

function isInstitutionSelectionCommitted(select, candidate) {
  const selected = Array.from(select.selectedOptions || []).find(
    (option) =>
      option.value === candidate.value &&
      stripSelect2CloseGlyph(option.text) === candidate.text,
  )
  if (!selected) return false

  const field = select.closest(
    ".datasetfieldSpec, .datasetFieldContainer, .fieldSpecContainer, fieldset",
  )
  const rendered =
    field?.querySelector(".select2-selection__rendered") ||
    document.getElementById(`select2-${select.id}-container`)
  if (
    rendered &&
    !renderedIncludesText(
      rendered.textContent || "",
      candidate.text,
      select.multiple === true,
    )
  ) {
    return false
  }

  const labelValue = document.getElementById(`${select.id}-labelValue`)
  return (
    !labelValue ||
    renderedIncludesText(
      labelValue.textContent || "",
      candidate.text,
      select.multiple === true,
    )
  )
}

export async function fillResolvedAvatureInstitutionField(
  select,
  candidate,
  searchText,
) {
  if (!candidate.value.trim() || !candidate.text.trim()) return false
  if (isInstitutionSelectionCommitted(select, candidate)) return true

  let searchField = null
  try {
    const opened = await openAvatureSelect2Search(select)
    if (!opened) return false
    searchField = opened.searchInput
    typeIntoSelect2Search(searchField, searchText?.trim() || candidate.text)

    const started = Date.now()
    while (Date.now() - started < 5000) {
      const option = findExactCandidateOption(
        collectSelect2ResultOptions(select, opened.selection, searchField),
        candidate,
      )
      if (option) {
        await clickSelect2Result(option)
        const confirmStarted = Date.now()
        while (Date.now() - confirmStarted < 2500) {
          if (isInstitutionSelectionCommitted(select, candidate)) return true
          await delay.delay(50)
        }
        break
      }
      await delay.delay(100)
    }
    return false
  } catch (error) {
    console.warn("[Avature][Education] exact-commit-failed", {
      reason: error instanceof Error ? error.name : "unknown-error",
    })
    return false
  } finally {
    closeAvatureSelect2Search(select, searchField)
  }
}

export function clearAvatureInstitutionField(select) {
  for (const option of Array.from(select.options || [])) {
    option.selected = false
  }
  select.selectedIndex = -1
  select.value = ""
  select.dispatchEvent(new Event("change", { bubbles: true }))
  select.dispatchEvent(new Event("input", { bubbles: true }))

  const view =
    select.ownerDocument?.defaultView ||
    (typeof window !== "undefined" ? window : undefined)
  const $ = view?.jQuery || view?.$
  if (typeof $ === "function") {
    try {
      $(select).trigger("change")
    } catch {
      /* ignore */
    }
  }
}

export async function fillEndDateIfNeeded(entry, recordOrRecords) {
  let isCurrent
  let endDate

  const record = Array.isArray(recordOrRecords)
    ? recordOrRecords[0]
    : recordOrRecords
  if (!record) return

  if ("isCurrent" in record) isCurrent = record.isCurrent === true
  if (isCurrent === true) {
    const checkbox = xpath.getFirstOrderedNodeSafe(
      './/input[@type="checkbox" and (contains(normalize-space(.), "current") or contains(@id, "current") or contains(@name, "current") or parent::label[contains(normalize-space(.), "current")])]',
      entry,
    )
    if (checkbox && !checkbox.checked) {
      checkbox.scrollIntoView({ behavior: "smooth", block: "center" })
      await delay.delay(100)
      checkbox.click()
      checkbox.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(300)
    }
    return
  }

  try {
    const value = answerMethods.findValueInRecord("End Date", record)
    endDate = String(Array.isArray(value) ? value[0] : value)
  } catch {
    try {
      const value = answerMethods.findValueInRecord("End", record)
      endDate = String(Array.isArray(value) ? value[0] : value)
    } catch {
      endDate = undefined
    }
  }

  if (!endDate || endDate.trim() === "") return

  const started = Date.now()
  const timeoutMs = 4000
  let input = null

  const findEndInput = () => {
    const label = xpath.getFirstOrderedNodeSafe(
      './/div[contains(@class,"datasetlabelText") and contains(normalize-space(.),"End")] | .//label[contains(normalize-space(.),"End")]',
      entry,
    )
    const forId = label?.getAttribute?.("for")?.trim?.()
    if (forId) {
      const byId = document.getElementById(forId)
      if (byId) return byId
    }

    const container = label?.closest(".datasetFieldContainer")
    if (container) {
      const visible = container.querySelector(
        'input[type="month"], input[type="text"]',
      )
      if (visible) return visible
      const hidden = container.querySelector('input[type="hidden"]')
      if (hidden) return hidden
    }

    const startInput = xpath.getFirstOrderedNodeSafe(
      './/div[contains(@class,"datasetlabelText") and contains(normalize-space(.),"Start Date")]/following::input[1]',
      entry,
    )
    if (startInput?.id) {
      const match = startInput.id.match(/^(.+)-(\d+)-(\d+)$/)
      if (match) {
        const nextId = `${match[1]}-${Number(match[2]) + 1}-${match[3]}`
        const next = document.getElementById(nextId)
        if (next) return next
      }
    }
    return null
  }

  while (Date.now() - started < timeoutMs && !input) {
    input = findEndInput()
    if (!input) {
      await delay.delay(200)
      continue
    }
    if (input.type === "hidden") {
      await delay.delay(200)
      const again = findEndInput()
      if (again) input = again
    }
  }

  if (!input) return

  const adapted = adaptDateValueForInput(input, endDate.trim())
  await fillDateField(input, endDate.trim())
  const matched = input.value.trim() === adapted
  console.debug("[Avature][EndDate] post-fill readback", {
    inputType: input.type,
    matched,
  })
  return { input, value: endDate.trim(), filled: matched }
}
