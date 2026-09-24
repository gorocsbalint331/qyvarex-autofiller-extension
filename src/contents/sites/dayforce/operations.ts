// @ts-nocheck
/**
 * Dayforce — DOM fill operations (inputs, sections, resume, cover letter).
 */

import * as dayjs from "dayjs"
import * as checkboxUtils from "../../crawler/fill-utils/checkbox.ts"
import * as inputUtils from "../../crawler/fill-utils/input.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as cancellation from "../../methods/cancellation.ts"
import * as dom from "../../methods/dom.ts"
import * as observer from "../../methods/observer.ts"
import * as enums from "../../../core/enums.js"
import * as coreDom from "../../../core/dom.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as dayforceAnswer from "./answer.ts"
import * as rules from "./rules.js"

const dayjsDefault = { default: dayjs?.default ?? dayjs }

const RESUME_LABEL = "Resume/CV"
const COVER_LETTER_LABEL = "Cover Letter"
const MIN_SETTLE_MS = 800
const QUIET_PERIOD_MS = 400
const MAX_SETTLE_MS = 5000
const POLL_INTERVAL_MS = 100

function sleep(ms) {
  const setTimeoutFn =
    typeof window !== "undefined" ? window.setTimeout : globalThis.setTimeout
  return new Promise((resolve) => setTimeoutFn(resolve, ms))
}

async function waitUntil(predicate, timeoutMs, intervalMs) {
  const deadline = Date.now() + timeoutMs
  for (;;) {
    cancellation.checkpoint()
    if (predicate()) return true
    const remaining = deadline - Date.now()
    if (remaining <= 0) return false
    await cancellation.cancellableDelay(Math.min(intervalMs, remaining))
  }
}

export function getDayforceResumeUploadDom() {
  const section = document.querySelector('[test-id="resume-upload-section"]')
  return section
    ? {
        section,
        input: section.querySelector(
          'input[type="file"][name="personal.resume"], input[type="file"]#jobPostingApplication_files_resume',
        ),
        uploadItem: section.querySelector(".ant-upload-list-item"),
        uploadedName: section.querySelector(".ant-upload-list-item-name"),
      }
    : {
        section: null,
        input: null,
        uploadItem: null,
        uploadedName: null,
      }
}

export function getDayforceCoverLetterUploadDom() {
  const section = document.querySelector(
    'section[test-id="cover-letter-upload-section"]',
  )
  return section
    ? {
        section,
        input: section.querySelector(
          'input[type="file"]#jobPostingApplication_files_coverLetter',
        ),
        uploadList: section.querySelector(
          ".ant-upload-list.ant-upload-list-text",
        ),
        uploadedName: section.querySelector(".ant-upload-list-item-name"),
        deleteButton: section.querySelector('button[title="Remove file"]'),
      }
    : {
        section: null,
        input: null,
        uploadList: null,
        uploadedName: null,
        deleteButton: null,
      }
}

function resolveCoverLetterRequiredStatus() {
  const { section, input, uploadList } = getDayforceCoverLetterUploadDom()
  if (!section || !input || !uploadList) {
    return { status: "", source: "slot-missing" }
  }
  const formItem = input.closest(".ant-form-item")
  const nodes = [section, formItem, input].filter(Boolean)
  const ariaValues = nodes.map((node) => node.getAttribute("aria-required"))
  if (ariaValues.includes("true")) {
    return { status: "required", source: "aria-required" }
  }
  if (input.required || input.hasAttribute("required")) {
    return { status: "required", source: "native-required" }
  }
  const label = formItem?.querySelector("label") ?? section.querySelector("label")
  const className = String(label?.className || "").toLowerCase()
  const text = label?.textContent || ""
  if (className.includes("required") || /[*\uff0a]/.test(text)) {
    return { status: "required", source: "label-required" }
  }
  if (ariaValues.includes("false")) {
    return { status: "optional", source: "aria-required" }
  }
  return { status: "optional", source: "slot-optional" }
}

export function getDayforceCoverLetterStatus() {
  return resolveCoverLetterRequiredStatus().status
}

export function isResumeUploadComplete() {
  const { uploadItem, uploadedName } = getDayforceResumeUploadDom()
  return dayforceAnswer.isDayforceUploadComplete(
    uploadedName?.textContent,
    uploadItem?.className,
  )
}

async function waitForResumeUploadComplete() {
  return await waitUntil(isResumeUploadComplete, 30000, 500)
}

function getCompositeDomSignature() {
  const queryRows = (section) =>
    typeof document !== "undefined" &&
    typeof document.querySelectorAll === "function"
      ? Array.from(document.querySelectorAll(section.rowSelector))
      : []
  const educationRows = queryRows(rules.DAYFORCE_SECTIONS.education)
  const workRows = queryRows(rules.DAYFORCE_SECTIONS.workExperience)
  const rowSignature = (row) =>
    [
      row.id || "",
      row.getAttribute?.("test-id") || "",
      ...Array.from(row.querySelectorAll("input, textarea, select")).map(
        (el) =>
          [
            el.tagName,
            el.id || "",
            el.getAttribute?.("name") || "",
            el.getAttribute?.("type") || "",
            "checked" in el ? String(el.checked) : "",
            el.value || "",
          ].join(":"),
      ),
    ].join("|")
  return {
    educationRowCount: educationRows.length,
    workExperienceRowCount: workRows.length,
    signature: [...educationRows, ...workRows].map(rowSignature).join("\n"),
  }
}

export async function waitForDayforceCompositeSectionsToSettle({
  minimumWaitMs = MIN_SETTLE_MS,
  quietPeriodMs = QUIET_PERIOD_MS,
  maxWaitMs = MAX_SETTLE_MS,
  pollIntervalMs = POLL_INTERVAL_MS,
} = {}) {
  const startedAt = Date.now()
  let lastChangeAt = startedAt
  let snapshot = getCompositeDomSignature()
  let sawChange = false
  console.info(
    "[Dayforce][ResumeParser] waiting for composite DOM settle",
    {
      educationRowCount: snapshot.educationRowCount,
      workExperienceRowCount: snapshot.workExperienceRowCount,
    },
  )
  const settled = await waitUntil(
    () => {
      const next = getCompositeDomSignature()
      if (next.signature !== snapshot.signature) {
        snapshot = next
        lastChangeAt = Date.now()
        sawChange = true
      }
      const now = Date.now()
      return (
        now - startedAt >= Math.max(0, minimumWaitMs) &&
        now - lastChangeAt >= Math.max(0, quietPeriodMs)
      )
    },
    Math.max(0, maxWaitMs),
    Math.max(1, pollIntervalMs),
  )
  snapshot = getCompositeDomSignature()
  console.info(
    "[Dayforce][ResumeParser] composite DOM settle completed",
    {
      settled,
      sawChange,
      educationRowCount: snapshot.educationRowCount,
      workExperienceRowCount: snapshot.workExperienceRowCount,
    },
  )
  return settled
}

export async function uploadResume(
  resumeInfo,
  disableUploadResume,
  onRequired,
  onFilled,
  onMissed,
) {
  const { section, input, uploadItem, uploadedName } =
    getDayforceResumeUploadDom()
  if (!section) return true
  onRequired({ label: RESUME_LABEL, required: true })
  if (
    dayforceAnswer.isDayforceUploadComplete(
      uploadedName?.textContent,
      uploadItem?.className,
    )
  ) {
    console.info(
      "[Dayforce][Diagnostics] resume " +
        JSON.stringify({ branch: "already-uploaded" }),
    )
    onFilled(RESUME_LABEL)
    return true
  }
  if (disableUploadResume || !input?.files) {
    console.info(
      "[Dayforce][Diagnostics] resume " +
        JSON.stringify({
          branch: "blocked",
          disableUploadResume,
          hasFileInput: !!input?.files,
        }),
    )
    onMissed(RESUME_LABEL)
    return false
  }
  try {
    const blob = await answerMethods.fetchPdfAsBlob(resumeInfo)
    cancellation.checkpoint()
    input.files = blob.files
    input.dispatchEvent(
      new Event("change", { bubbles: true, cancelable: false }),
    )
    const uploaded = await waitForResumeUploadComplete()
    if (!uploaded) {
      onMissed(RESUME_LABEL)
      return false
    }
    const settled = await waitForDayforceCompositeSectionsToSettle()
    console.info(
      "[Dayforce][Diagnostics] resume " +
        JSON.stringify({ branch: "uploaded", settled }),
    )
    onFilled(RESUME_LABEL)
    return true
  } catch (error) {
    if (
      error instanceof cancellation.CancelledError ||
      error instanceof cancellation.SkippedError
    ) {
      throw error
    }
    console.error("[Dayforce] Error uploading resume:", error)
    onMissed(RESUME_LABEL)
    return false
  }
}

export function syncCoverLetterRequiredStatus(replaceRequired) {
  const { status, source } = resolveCoverLetterRequiredStatus()
  if (!status) return false
  console.info("[Dayforce][CoverLetter] progress status resolved", {
    status,
    source,
  })
  replaceRequired({
    label: COVER_LETTER_LABEL,
    required: status === "required",
  })
  return true
}

function markCoverLetterMissed(previousStatus, replaceRequired, onMissed) {
  const { status, source } = resolveCoverLetterRequiredStatus()
  const required = status === "required"
  console.info("[Dayforce][CoverLetter] missed status resolved", {
    required,
    source,
  })
  if (status && status !== previousStatus) {
    replaceRequired({ label: COVER_LETTER_LABEL, required })
  }
  if (required) onMissed(COVER_LETTER_LABEL)
  return required
}

async function waitForCoverLetterCleared() {
  return await waitUntil(
    () => !getDayforceCoverLetterUploadDom().uploadedName?.textContent?.trim(),
    4000,
    200,
  )
}

async function waitForCoverLetterName(fileName) {
  return await waitUntil(() => {
    const name =
      getDayforceCoverLetterUploadDom().uploadedName?.textContent?.trim()
    return !!name && name.includes(fileName)
  }, 4000, 200)
}

export async function uploadCoverLetter(
  coverLetter,
  replaceRequired,
  onFilled,
  onMissed,
) {
  const { status, source } = resolveCoverLetterRequiredStatus()
  if (!status) return
  const required = status === "required"
  const { uploadedName } = getDayforceCoverLetterUploadDom()
  console.info("[Dayforce][CoverLetter] upload status resolved", {
    status,
    source,
  })
  replaceRequired({ label: COVER_LETTER_LABEL, required })

  const coverLetterId = coverLetter?.coverLetterId
  const coverLetterName = coverLetter?.coverLetterName
  if (!coverLetterId || !coverLetterName) {
    if (uploadedName?.textContent?.trim()) {
      onFilled(COVER_LETTER_LABEL)
    } else {
      markCoverLetterMissed(status, replaceRequired, onMissed)
    }
    return
  }

  try {
    const { deleteButton } = getDayforceCoverLetterUploadDom()
    if (uploadedName?.textContent?.trim() && deleteButton) {
      deleteButton.click()
      const cleared = await waitForCoverLetterCleared()
      if (!cleared) {
        markCoverLetterMissed(status, replaceRequired, onMissed)
        return
      }
    }

    const input = getDayforceCoverLetterUploadDom().input
    if (!input?.files) {
      console.error("[Dayforce] Cover letter file input not found")
      markCoverLetterMissed(status, replaceRequired, onMissed)
      return
    }

    const blob = await answerMethods.fetchCoverLetterPdfAsBlob({
      ...coverLetter,
      coverLetterId,
      coverLetterName,
    })
    cancellation.checkpoint()
    input.files = blob.files
    input.dispatchEvent(
      new Event("change", { bubbles: true, cancelable: false }),
    )
    const expectedName = `${coverLetterName}.pdf`
    const confirmed = await waitForCoverLetterName(expectedName)
    if (!confirmed) {
      console.error(
        "[Dayforce] Cover letter upload not confirmed:",
        expectedName,
      )
      markCoverLetterMissed(status, replaceRequired, onMissed)
      return
    }
    onFilled(COVER_LETTER_LABEL)
  } catch (error) {
    if (
      error instanceof cancellation.CancelledError ||
      error instanceof cancellation.SkippedError
    ) {
      throw error
    }
    console.error("[Dayforce] Error uploading cover letter:", error)
    markCoverLetterMissed(status, replaceRequired, onMissed)
  }
}

function firstValue(value) {
  return Array.isArray(value) ? value[0] : value
}

function resolveLiveInput(input, label = "") {
  return input ? rules.getCurrentDayforceElement(input, label) : null
}

const SUMMARY_FORM_SELECTORS = {
  Education: 'form[test-id*="educationhistory-record" i]',
  Employment: 'form[test-id*="workhistory-record" i]',
}
const DELETE_BUTTON_SELECTOR =
  'button[aria-label="Delete Record"], button[title="Delete Record"], button[test-id*="delete-button" i]'
const CANCEL_BUTTON_SELECTORS = {
  Education: '[test-id="educationHistory-cancel-button"]',
  Employment: '[test-id="workHistory-cancel-button"]',
}

function isMeaningfulSummaryForm(form) {
  return (
    !form.hidden &&
    form.getAttribute?.("aria-hidden") !== "true" &&
    /[a-z0-9]/i.test(
      form.textContent?.replace(/\s+/g, " ").trim() || "",
    )
  )
}

export function hasDayforceConfiguredSectionSummary(section) {
  return getSummaryForms(section).length > 0
}

function getSummaryForms(section) {
  if (typeof document === "undefined") return []
  const selector = SUMMARY_FORM_SELECTORS[section.label]
  if (!selector) return []
  const forms = new Set()
  const container = document.querySelector(section.containerSelector)
  if (container) {
    for (const form of Array.from(container.querySelectorAll(selector))) {
      forms.add(form)
    }
  }
  if (typeof document.querySelectorAll === "function") {
    for (const form of Array.from(document.querySelectorAll(selector))) {
      forms.add(form)
    }
  }
  const cancelSelector = CANCEL_BUTTON_SELECTORS[section.label]
  return Array.from(forms).filter(
    (form) =>
      isMeaningfulSummaryForm(form) &&
      (!cancelSelector ||
        typeof form.querySelector !== "function" ||
        !form.querySelector(cancelSelector)),
  )
}

export function isDayforceConfiguredSectionFilled(section, records) {
  return !!records?.length || hasDayforceConfiguredSectionSummary(section)
}

export async function fillDayforceTextField(rule, value) {
  const text = firstValue(value)
  if (!text) return false
  const expected = String(text ?? "")
  const attempts = String(rule.label || "").includes("Phone Number") ? 3 : 1
  for (let i = 0; i < attempts; i += 1) {
    const input = resolveLiveInput(rule.$input, rule.label)
    if (!input) break
    await dom.fillInputTextField(input, expected)
    await sleep(250)
    const live = resolveLiveInput(rule.$input, rule.label)
    if ((live?.value || "") === expected) return true
  }
  return false
}

export async function fillDayforceDateField(rule, value) {
  const raw = firstValue(value)
  if (!raw) return false
  const formatted = formatDayforceDate(raw)
  if (!formatted) return false
  const input = resolveLiveInput(rule.$input, rule.label)
  if (!input) return false
  await dom.fillInputTextField(input, formatted)
  return true
}

function needsCountryFallback(label = "") {
  return (
    dayforceAnswer.isDayforcePhoneCountryCodeLabel(label) ||
    label.includes("Phone Number")
  )
}

function hasNonEmptyAnswer(value) {
  return value != null && String(value).trim() !== ""
}

function resolveDropdownAnswers(rule, value) {
  const answers = (Array.isArray(value) ? value : [value]).filter(
    hasNonEmptyAnswer,
  )
  if (answers.length > 0) return answers
  if (!needsCountryFallback(rule.label)) return []
  const recordCountry = rule.recordCountry
  return hasNonEmptyAnswer(recordCountry) ? [recordCountry] : []
}

export async function fillDayforceDropdownField(rule, value, recordCountry) {
  const input = resolveLiveInput(rule.$input, rule.label)
  if (!input) return false
  const answers = resolveDropdownAnswers(
    { ...rule, recordCountry },
    value,
  )

  if (rule.label === "Country") {
    const current = rules.getDayforceDropdownCurrentValue(input, rule.label)
    const matchesAnswer = answers.some((answer) =>
      dayforceAnswer.isDayforceDropdownMatched(
        current,
        String(answer),
        rule.label,
      ),
    )
    const committed = !!current && (answers.length === 0 || matchesAnswer)
    console.debug("[Dayforce][Country] prefill-readback", {
      hasCommittedValue: !!current,
      answerCount: answers.length,
      matchesAnswer,
      committed,
    })
    if (committed) return true
  }

  if (answers.length === 0) return false

  input.dispatchEvent(
    new FocusEvent("focus", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
  input.focus()
  input.dispatchEvent(
    new Event("click", { bubbles: true, cancelable: true }),
  )
  await sleep(200)
  dom.triggerEvents(input, ["mousedown"])
  await sleep(200)

  const getOptions = () => {
    const list = input.id
      ? document.querySelector(`#${CSS.escape(input.id)}_list`)
      : null
    return Array.from(list?.children || [])
  }

  await observer.waitForCondition(() => getOptions().length > 0, {
    timeout: 1200,
    interval: 100,
    observeTarget: document.body,
  })

  const options = getOptions()
  if (dayforceAnswer.isDayforcePhoneCountryCodeLabel(rule.label)) {
    let matched = null
    for (const [index, answer] of answers.entries()) {
      matched = phoneCountryCode.findPhoneCountryOptionElement(
        answer,
        options,
        {
          debugLabel:
            index === answers.length - 1 ? rule.label : undefined,
        },
      )
      if (matched) break
    }
    if (matched) {
      dom.triggerEvents(matched, ["click"])
      await sleep(200)
    }
    input.blur()
    return !!matched
  }

  for (const option of options) {
    let optionText = dayforceAnswer.normalizeDayforceDropdownOptionText(
      option.textContent,
    )
    if (rule.label.includes("Phone Number")) {
      const parts = optionText.split("[")
      optionText = parts[parts.length - 1].trim()
    }
    if (
      answers.some((answer) =>
        dayforceAnswer.isDayforceDropdownMatched(
          optionText,
          String(answer),
          rule.label,
        ),
      )
    ) {
      dom.triggerEvents(option, ["click"])
      await sleep(200)
      input.blur()
      if (rule.label === "Country") {
        const current = rules.getDayforceDropdownCurrentValue(
          input,
          rule.label,
        )
        const committed = answers.some((answer) =>
          dayforceAnswer.isDayforceDropdownMatched(
            current,
            String(answer),
            rule.label,
          ),
        )
        console.debug("[Dayforce][Country] selection-readback", {
          optionCount: options.length,
          committed,
        })
        return committed
      }
      return true
    }
  }

  input.blur()
  return false
}

export async function fillDayforceSelectField(rule, value) {
  const select = rule.$input
  const answer = firstValue(value)
  if (!select || !answer) return false
  const normalized = String(answer).trim().toLowerCase()
  const option = Array.from(select.options).find((item) => {
    const text = item.textContent?.trim().toLowerCase()
    return text === normalized || item.value.trim().toLowerCase() === normalized
  })
  if (!option) return false
  select.value = option.value
  select.dispatchEvent(new Event("input", { bubbles: true }))
  select.dispatchEvent(new Event("change", { bubbles: true }))
  return select.value === option.value
}

export async function fillDayforceCheckboxField(rule, value) {
  const answers = (Array.isArray(value) ? value : [value]).map((item) =>
    String(item ?? "")
      .toLowerCase()
      .trim(),
  )
  if (answers.length === 0) return false
  let filled = false
  for (const checkbox of rule.$checkboxs) {
    const labelEl =
      checkbox.id === "agreeCheckbox"
        ? document.querySelector(`#${checkbox.id}Label`)
        : checkbox.closest("label[class*='ant-']")
    const labelText = labelEl?.innerText?.toLowerCase().trim() || ""
    if (!labelText && rule.$checkboxs.length === 1) {
      const state = getDayforceCheckboxState(value)
      if (state == null) return false
      await setCheckboxState(checkbox, state)
      return true
    }
    const shouldCheck =
      answers.includes(labelText) ||
      (answers[0] === "true" && labelText === "yes") ||
      (answers[0] === "false" && labelText === "no") ||
      (checkbox.id === "agreeCheckbox" && answers[0] === "true")
    if (shouldCheck) {
      await checkboxUtils.fillCheckbox(checkbox, true)
      filled = true
    }
  }
  return filled
}

function formatDayforceDate(value) {
  if (!value) return ""
  const normalized =
    String(value).split("-").length === 2 ? `${value}-01` : value
  const parsed = dayjsDefault.default(normalized)
  return parsed.isValid() ? parsed.format("YYYY-MM-DD") : ""
}

function resolveSectionFieldValue(field, record) {
  let value = record[field.key] ?? record[field.alternateKey || ""]
  if (
    field.type === enums.FIELD_TYPE.DATE ||
    field.key === "Start" ||
    field.key === "End" ||
    field.alternateKey === "Start" ||
    field.alternateKey === "End"
  ) {
    value = formatDayforceDate(value)
  }
  return field.format ? field.format(value, record) : value
}

export function getDayforceCheckboxState(value) {
  const raw = firstValue(value)
  if (raw == null || raw === "") return null
  if (typeof raw === "boolean") return raw
  const normalized = String(raw).trim().toLowerCase()
  if (!normalized) return null
  if (["true", "yes", "1", "current", "present"].includes(normalized)) {
    return true
  }
  if (["false", "no", "0", "not current"].includes(normalized)) {
    return false
  }
  return null
}

async function setCheckboxState(checkbox, checked) {
  if (checkbox.checked === checked) return
  if (checked) {
    await checkboxUtils.fillCheckbox(checkbox, true)
    return
  }
  checkbox.focus()
  checkbox.dispatchEvent(
    new Event("focus", { bubbles: true, cancelable: false }),
  )
  checkbox.click()
  checkbox.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: false }),
  )
  checkbox.blur()
  checkbox.dispatchEvent(
    new Event("blur", { bubbles: true, cancelable: false }),
  )
}

async function fillSectionField(field, record, row) {
  const input = row.querySelector(field.selector)
  if (!input) return
  const value = resolveSectionFieldValue(field, record)
  if (field.isCheckbox) {
    const state = getDayforceCheckboxState(value)
    await setCheckboxState(input, state ?? false)
    return
  }
  if (!value) {
    if (field.type === enums.FIELD_TYPE.DROPDOWN) {
      const clear = input
        .closest(".ant-select")
        ?.querySelector(".ant-select-clear")
      if (clear) {
        clear.click()
        await sleep(100)
        return
      }
    }
    await inputUtils.fillDefaultInputField(input, "")
    return
  }
  if (field.type === enums.FIELD_TYPE.DROPDOWN) {
    await fillDayforceDropdownField(
      {
        label: field.key,
        type: enums.FIELD_TYPE.DROPDOWN,
        required: false,
        $input: input,
      },
      value,
    )
    return
  }
  await inputUtils.fillDefaultInputField(input, value)
}

function findConfirmButton() {
  const dialogs = Array.from(
    document.querySelectorAll(
      ".ant-popconfirm, .ant-popover, .ant-modal-confirm, [role='dialog']",
    ),
  )
  for (const dialog of dialogs) {
    const button = Array.from(dialog.querySelectorAll("button")).find(
      (el) =>
        /^(ok|yes|delete|confirm)$/i.test(el.textContent?.trim() || ""),
    )
    if (button) return button
  }
  return null
}

function clickConfirmIfPresent() {
  const button = findConfirmButton()
  if (!button) return false
  button.click()
  return true
}

function looksLikeDeleteButton(button) {
  const text = [
    button.getAttribute("aria-label"),
    button.getAttribute("title"),
    button.getAttribute("test-id"),
    button.textContent,
    ...Array.from(button.querySelectorAll("[aria-label]")).map((el) =>
      el.getAttribute("aria-label"),
    ),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
  return text.includes("delete")
}

function findDeleteButtonInForm(form) {
  const root =
    form.matches("form") || !form.closest("form")
      ? form
      : form.closest("form")
  const direct =
    root.querySelector(DELETE_BUTTON_SELECTOR) ??
    form.querySelector(DELETE_BUTTON_SELECTOR)
  return (
    direct ||
    Array.from(root.querySelectorAll("button"))
      .concat(Array.from(form.querySelectorAll("button")))
      .find(looksLikeDeleteButton)
  )
}

function findDeleteButtonInSection(section) {
  const root =
    document.querySelector(section.containerSelector) ?? document
  return (
    root.querySelector(DELETE_BUTTON_SELECTOR) ||
    Array.from(root.querySelectorAll("button")).find(looksLikeDeleteButton)
  )
}

async function waitForFewerSummaryForms(section, previousCount) {
  return await observer.waitForCondition(
    () => getSummaryForms(section).length < previousCount,
    {
      timeout: 3000,
      interval: 150,
      observeTarget: document.body,
    },
  )
}

async function deleteAllSummaryRecords(section) {
  const initialCount = getSummaryForms(section).length
  for (let i = 0; i < initialCount; i += 1) {
    const forms = getSummaryForms(section)
    if (forms.length === 0) return
    const deleteButton =
      findDeleteButtonInForm(forms[0]) ?? findDeleteButtonInSection(section)
    if (!deleteButton) {
      console.warn(
        `[Dayforce] ${section.label} summary record found without delete button`,
      )
      return
    }
    deleteButton.click()
    await observer.waitForCondition(
      () =>
        getSummaryForms(section).length < forms.length ||
        !!findConfirmButton(),
      {
        timeout: 3000,
        interval: 100,
        observeTarget: document.body,
      },
    )
    clickConfirmIfPresent()
    const deleted = await waitForFewerSummaryForms(section, forms.length)
    if (!deleted) {
      console.warn(
        `[Dayforce] Failed to delete ${section.label} summary record`,
      )
      return
    }
  }
  const remaining = getSummaryForms(section).length
  if (remaining > 0) {
    console.warn(
      `[Dayforce] Failed to delete all ${section.label} summary records, remaining: ${remaining}`,
    )
  }
}

async function trimParserRows(section, targetCount) {
  const target = Math.max(targetCount, 1)
  const cancelSelector = CANCEL_BUTTON_SELECTORS[section.label]
  let rows = rules.getDayforceSectionRows(section)
  if (rows.length <= target || !cancelSelector) return

  console.info("[Dayforce][CompositeSections] trimming parser rows", {
    label: section.label,
    currentCount: rows.length,
    targetCount: target,
  })

  while (rows.length > target) {
    cancellation.checkpoint()
    const currentCount = rows.length
    const lastRow = rows[rows.length - 1]
    const cancelButton = lastRow.querySelector(cancelSelector)
    if (!cancelButton) {
      console.warn(
        "[Dayforce][CompositeSections] parser row cannot be removed",
        {
          label: section.label,
          currentCount,
          targetCount: target,
          reason: "cancel-button-missing",
        },
      )
      return
    }
    cancelButton.click()
    const changed = await observer.waitForCondition(() => {
      const nextRows = rules.getDayforceSectionRows(section)
      if (nextRows.length < currentCount) return true
      const restored = nextRows.find((row) => row.id === lastRow.id)
      return !!(restored && findDeleteButtonInForm(restored))
    }, {
      timeout: 3000,
      interval: 100,
      observeTarget: document.body,
    })
    if (!changed) {
      console.warn(
        "[Dayforce][CompositeSections] parser row cannot be removed",
        {
          label: section.label,
          currentCount,
          targetCount: target,
          reason: "row-count-unchanged",
        },
      )
      return
    }

    rows = rules.getDayforceSectionRows(section)
    if (rows.length === currentCount) {
      const restored = rows.find((row) => row.id === lastRow.id)
      const deleteButton = restored ? findDeleteButtonInForm(restored) : null
      if (!deleteButton) {
        console.warn(
          "[Dayforce][CompositeSections] restored parser row cannot be deleted",
          {
            label: section.label,
            currentCount,
            targetCount: target,
            reason: "delete-button-missing",
          },
        )
        return
      }
      deleteButton.click()
      await observer.waitForCondition(
        () =>
          rules.getDayforceSectionRows(section).length < currentCount ||
          !!findConfirmButton(),
        {
          timeout: 3000,
          interval: 100,
          observeTarget: document.body,
        },
      )
      clickConfirmIfPresent()
      const deleted = await observer.waitForCondition(
        () => rules.getDayforceSectionRows(section).length < currentCount,
        {
          timeout: 3000,
          interval: 100,
          observeTarget: document.body,
        },
      )
      if (!deleted) {
        console.warn(
          "[Dayforce][CompositeSections] restored parser row cannot be deleted",
          {
            label: section.label,
            currentCount,
            targetCount: target,
            reason: "row-count-unchanged",
          },
        )
        return
      }
    }
    rows = rules.getDayforceSectionRows(section)
  }

  console.info("[Dayforce][CompositeSections] parser rows trimmed", {
    label: section.label,
    rowCount: rows.length,
    targetCount: target,
  })
}

async function ensureSectionRows(section, expectedCount) {
  const container = document.querySelector(section.containerSelector)
  if (!container) return
  const rows = rules.getDayforceSectionRows(section)
  const rowsToAdd = Math.max(
    expectedCount - rows.length,
    rows.length === 0 ? 1 : 0,
  )
  const addButton = container.querySelector(section.addButtonSelector)
  console.info(
    "[Dayforce][Diagnostics] ensure-rows " +
      JSON.stringify({
        section: section.label,
        expectedCount,
        currentRows: rows.length,
        rowsToAdd,
        hasAddButton: !!addButton,
      }),
  )
  for (let i = 0; i < rowsToAdd; i++) {
    cancellation.checkpoint()
    addButton?.click()
    await cancellation.cancellableDelay(200)
  }
}

export async function initializeDayforceCompositeSections(
  educationCount,
  workExperienceCount,
) {
  await deleteAllSummaryRecords(rules.DAYFORCE_SECTIONS.education)
  await deleteAllSummaryRecords(rules.DAYFORCE_SECTIONS.workExperience)
  await trimParserRows(rules.DAYFORCE_SECTIONS.education, educationCount)
  await trimParserRows(
    rules.DAYFORCE_SECTIONS.workExperience,
    workExperienceCount,
  )
  await ensureSectionRows(rules.DAYFORCE_SECTIONS.education, educationCount)
  await ensureSectionRows(
    rules.DAYFORCE_SECTIONS.workExperience,
    workExperienceCount,
  )
}

export async function fillConfiguredSection(section, records, options) {
  await ensureSectionRows(section, records.length)
  const rows = rules.getDayforceSectionRows(section)
  console.info(
    "[Dayforce][Diagnostics] fill-rows " +
      JSON.stringify({
        section: section.label,
        recordCount: records.length,
        rowCount: rows.length,
      }),
  )

  const sectionKey =
    section.type === enums.FIELD_TYPE.EDUCATION ? "education" : "employment"
  const reporter = options
    ? answerMethods.createSectionResultReporter(
        sectionKey,
        options,
      )
    : undefined
  reporter?.setLabel(section.label)

  const focusRules = reporter
    ? rows.map((row) => ({
        type: section.type,
        label: section.label,
        $input: row,
        children: section.fields.map((field) => ({
          type: field.type,
          label: field.key,
          $input: row.querySelector(field.selector),
        })),
      }))
    : []
  if (reporter) {
    coreDom.setSectionResultFocusRules(sectionKey, focusRules)
  }

  for (let index = 0; index < records.length; index++) {
    const row = rows[index]
    const record = records[index]
    if (!row || !record) {
      console.warn(
        "[Dayforce][Diagnostics] row-skipped " +
          JSON.stringify({
            section: section.label,
            index,
            hasRow: !!row,
            hasRecord: !!record,
          }),
      )
      continue
    }

    const rowState = reporter?.ensureRow(index, record)
    reporter?.emit()

    for (const [fieldIndex, field] of section.fields.entries()) {
      try {
        cancellation.checkpoint()
        await fillSectionField(field, record, row)
        if (reporter && rowState) {
          const liveInput = row.querySelector(field.selector)
          focusRules[index].children[fieldIndex].$input = liveInput
          if (!liveInput) continue
          const answerValue = resolveSectionFieldValue(field, record)
          const hasAnswer =
            answerValue != null && String(answerValue).trim() !== ""
          const hasValue = field.isCheckbox
            ? liveInput?.checked === getDayforceCheckboxState(answerValue)
            : field.type === enums.FIELD_TYPE.DROPDOWN && liveInput
              ? !!rules.getDayforceDropdownCurrentValue(liveInput, field.key)
              : !!liveInput?.value?.trim()
          console.info(
            "[Dayforce][Diagnostics] field-result " +
              JSON.stringify({
                section: section.label,
                index,
                field: field.key,
                hasAnswer,
                hasValue,
                rowConnected: row.isConnected,
              }),
          )
          reporter.updateField(
            rowState,
            field.key,
            hasAnswer ? String(answerValue) : undefined,
            liveInput && hasAnswer && hasValue ? "filled" : "missed",
          )
          reporter.emit()
        }
      } catch (error) {
        if (reporter && rowState) {
          reporter.updateField(
            rowState,
            field.key,
            undefined,
            error instanceof cancellation.SkippedError ? "skipped" : "missed",
          )
          reporter.emit()
        }
        throw error
      }
      await cancellation.cancellableDelay(200)
    }
  }
}
