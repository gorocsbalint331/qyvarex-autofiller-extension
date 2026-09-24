// @ts-nocheck
/**
 * Apple Careers DOM fill operations (inputs, selects, resume, cover letter, skills).
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as delay from "../../../utils/delay.js"
import * as dom from "../../methods/dom.ts"
import * as checkboxUtils from "../../crawler/fill-utils/checkbox.ts"
import * as xpath from "../../../core/xpath.js"
import * as answerMethods from "../../methods/answer.ts"
import * as observer from "../../methods/observer.ts"
import * as appleRules from "./rules.ts"
import * as autofillAnswerPairTracking from "../autofill-answer-pair-tracking.js"
import * as typeahead from "./typeahead.ts"
import * as urlStore from "../../../store/url.js"

const COVER_LETTER_FILE_INPUT_ID = "attachfile-resume-supportfile"
const COVER_LETTER_FILE_SLOT_ID = "file-resume-supportfile"
const COVER_LETTER_SECTION_TITLE_ID = "parsedmodal-review-filesAndLinks-title"
const COVER_LETTER_SECTION_ARIA_LABEL = "Edit Additional Files & Links"
const COVER_LETTER_DESCRIPTION_ID = "resume-supportfile-description"
const COVER_LETTER_LIST_ITEM_SELECTOR = 'li[role="listitem"]'
const COVER_LETTER_FILENAME_PREFIX = "resume-supportfile-text-"
const COVER_LETTER_CATEGORY_PREFIX = "resume-supportfile-category-"
const COVER_LETTER_REMOVE_PREFIX = "resume-supportfile-remove-"
const COVER_LETTER_CATEGORY_VALUE = "supportingFileCategory-COVLT"
const PROFILE_INFORMATION_STEP = "profile information"

function normalizeLabel(text) {
  return text
    .trim()
    .replace(/\*/g, "")
    .replace(/\(optional\)/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function findElementByLabel(label, kind = "input") {
  if (!label) return null
  const wanted = normalizeLabel(label)
  const labelSpans = document.querySelectorAll("span.form-textbox-label")
  for (const span of Array.from(labelSpans)) {
    const text = span.textContent || ""
    const normalized = normalizeLabel(text)
    if (normalized === wanted) {
      const parent = span.parentElement
      if (!parent) continue
      if (kind === "input") {
        const input = parent.querySelector("input, textarea")
        if (input) return input
      } else if (kind === "select") {
        const select = parent.querySelector("select")
        if (select) return select
      } else if (kind === "container") {
        return parent
      }
    }
  }
  console.warn("[Apple] Could not find element by label:", label)
  return null
}

function refindIfDetached(el, label, kind = "input") {
  if (document.contains(el)) return el
  console.warn(
    "[Apple] Element no longer in DOM, attempting to refind by label:",
    label,
  )
  const found = findElementByLabel(label, kind)
  return found || null
}

function dispatchFullClick(el) {
  const eventInit = {
    bubbles: true,
    cancelable: true,
    view: window,
  }
  el.dispatchEvent(new PointerEvent("pointerover", eventInit))
  el.dispatchEvent(new MouseEvent("mouseover", eventInit))
  el.dispatchEvent(new PointerEvent("pointerenter", eventInit))
  el.dispatchEvent(new MouseEvent("mouseenter", eventInit))
  el.dispatchEvent(new PointerEvent("pointerdown", eventInit))
  el.dispatchEvent(new MouseEvent("mousedown", eventInit))
  el.dispatchEvent(new PointerEvent("pointerup", eventInit))
  el.dispatchEvent(new MouseEvent("mouseup", eventInit))
  el.dispatchEvent(new MouseEvent("click", eventInit))
}

function normalizeFileName(name) {
  return name?.trim().toLowerCase() || ""
}

export function getAppleCurrentStepTitle() {
  return (
    document
      .querySelector(
        'li.apply-progress-step[aria-current="step"] .apply-progress-label span',
      )
      ?.textContent?.trim()
      .toLowerCase() || ""
  )
}

export function isAppleCoverLetterStep() {
  return getAppleCurrentStepTitle() === PROFILE_INFORMATION_STEP
}

function findCoverLetterSection() {
  const title = document.getElementById(COVER_LETTER_SECTION_TITLE_ID)
  const fileSlot = document.getElementById(COVER_LETTER_FILE_SLOT_ID)
  return (
    title?.closest(".row.pt-30") ||
    fileSlot?.closest('[role="group"]') ||
    document.querySelector(
      `[role="group"][aria-label="${COVER_LETTER_SECTION_ARIA_LABEL}"]`,
    ) ||
    document.getElementById(COVER_LETTER_DESCRIPTION_ID)?.closest('[role="group"]')
  )
}

function parseCoverLetterRow(row) {
  const fileNameInput = row.querySelector(`input[id^="${COVER_LETTER_FILENAME_PREFIX}"]`)
  const categorySelect = row.querySelector(
    `select[id^="${COVER_LETTER_CATEGORY_PREFIX}"]`,
  )
  const deleteButton = row.querySelector(`button[id^="${COVER_LETTER_REMOVE_PREFIX}"]`)
  return {
    row,
    fileNameInput,
    categorySelect,
    deleteButton,
    fileName: fileNameInput?.value?.trim() || "",
    categoryValue: categorySelect?.value?.trim() || "",
    hasCoverLetterOption: !!categorySelect?.querySelector(
      `option[value="${COVER_LETTER_CATEGORY_VALUE}"]`,
    ),
  }
}

export function getAppleCoverLetterUploadDom() {
  const section = findCoverLetterSection()
  const uploadedList = section?.querySelector('ul[role="list"]')
  const rows = Array.from(uploadedList?.querySelectorAll(COVER_LETTER_LIST_ITEM_SELECTOR) || [])
    .map((row) => parseCoverLetterRow(row))
    .filter(
      (row) => !!row.fileNameInput || !!row.categorySelect || !!row.deleteButton,
    )
  return {
    section,
    description: document.getElementById(COVER_LETTER_DESCRIPTION_ID),
    input:
      document
        .getElementById(COVER_LETTER_FILE_SLOT_ID)
        ?.querySelector(`input[type="file"]#${COVER_LETTER_FILE_INPUT_ID}`) ||
      document.getElementById(COVER_LETTER_FILE_INPUT_ID),
    uploadedList,
    rows,
  }
}

function isCoverLetterSlotReady(domState) {
  const descriptionText = domState.description?.textContent?.toLowerCase() || ""
  const title = document.getElementById(COVER_LETTER_SECTION_TITLE_ID)
  const fileSlot = document.getElementById(COVER_LETTER_FILE_SLOT_ID)
  return (
    !!title &&
    !!fileSlot &&
    !!domState.section &&
    !!domState.input &&
    descriptionText.includes("cover letter")
  )
}

function isCompleteCoverLetterRow(row) {
  return !!(
    row?.fileNameInput &&
    row?.deleteButton &&
    row?.categorySelect &&
    row.fileName
  )
}

function findCoverLetterRow(domState, options = {}) {
  const expected = normalizeFileName(options.expectedFileName)
  const rows = [...domState.rows].reverse()
  return (
    rows.find((row) => {
      if (!isCompleteCoverLetterRow(row) || !row.hasCoverLetterOption) return false
      const nameOk = !expected || normalizeFileName(row.fileName) === expected
      return (
        !!nameOk &&
        (row.categoryValue === COVER_LETTER_CATEGORY_VALUE ||
          !!options.allowUncategorizedMatch)
      )
    }) || null
  )
}

function findLatestCompleteRow(domState) {
  return [...domState.rows].reverse().find((row) => isCompleteCoverLetterRow(row)) || null
}

function findCoverLetterRowForRemoval(domState, expectedFileName) {
  const expected = normalizeFileName(expectedFileName)
  return (
    [...domState.rows].reverse().find(
      (row) =>
        !!isCompleteCoverLetterRow(row) &&
        !!row.hasCoverLetterOption &&
        (row.categoryValue === COVER_LETTER_CATEGORY_VALUE ||
          normalizeFileName(row.fileName) === expected),
    ) || null
  )
}

function isCoverLetterVerified(expectedFileName) {
  const domState = getAppleCoverLetterUploadDom()
  const row = findCoverLetterRow(domState, {
    expectedFileName,
  })
  return !!(
    row &&
    isCompleteCoverLetterRow(row) &&
    row.categoryValue === COVER_LETTER_CATEGORY_VALUE &&
    (!expectedFileName ||
      normalizeFileName(row.fileName) === normalizeFileName(expectedFileName))
  )
}

export function getAppleCoverLetterStatus() {
  if (!isAppleCoverLetterStep()) return ""
  const domState = getAppleCoverLetterUploadDom()
  if (!isCoverLetterSlotReady(domState)) return ""
  if (domState.rows.length === 0) return "required"
  const latest = findLatestCompleteRow(domState)
  latest?.hasCoverLetterOption
  return "required"
}

async function setCoverLetterCategory(expectedFileName) {
  const row = findCoverLetterRow(getAppleCoverLetterUploadDom(), {
    expectedFileName,
    allowUncategorizedMatch: true,
  })
  if (!row?.categorySelect || !row.hasCoverLetterOption) return false

  row.categorySelect.focus()
  row.categorySelect.value = COVER_LETTER_CATEGORY_VALUE
  row.categorySelect.dispatchEvent(new Event("input", { bubbles: true }))
  row.categorySelect.dispatchEvent(new Event("change", { bubbles: true }))
  row.categorySelect.dispatchEvent(new Event("blur", { bubbles: true }))

  return await observer.waitForCondition(() => isCoverLetterVerified(expectedFileName), {
    timeout: 5000,
    interval: 100,
    observeTarget: getAppleCoverLetterUploadDom().section || document.body,
  })
}

async function removeExistingCoverLetterRows(expectedFileName) {
  let attempts = 0
  while (attempts < 3) {
    const row = findCoverLetterRowForRemoval(
      getAppleCoverLetterUploadDom(),
      expectedFileName,
    )
    if (!row?.deleteButton) return true
    row.deleteButton.click()
    const removed = await observer.waitForCondition(
      () => !findCoverLetterRowForRemoval(getAppleCoverLetterUploadDom(), expectedFileName),
      {
        timeout: 5000,
        interval: 100,
        observeTarget: getAppleCoverLetterUploadDom().section || document.body,
      },
    )
    if (removed) return true
    attempts += 1
  }
  return false
}

function setNativeInputValue(input, value) {
  const proto =
    input instanceof HTMLTextAreaElement
      ? window.HTMLTextAreaElement.prototype
      : window.HTMLInputElement.prototype
  const descriptor = Object.getOwnPropertyDescriptor(proto, "value")?.set
  if (descriptor) {
    descriptor.call(input, value)
    return
  }
  input.value = value
}

function dispatchInputValueEvents(input, nextValue, previousValue) {
  const inserted =
    nextValue.length > previousValue.length
      ? nextValue.slice(previousValue.length)
      : null
  const deleted =
    nextValue.length < previousValue.length
      ? previousValue.slice(nextValue.length)
      : null
  const data = inserted ?? deleted ?? ""
  const inputType = inserted
    ? "insertText"
    : deleted
      ? "deleteContentBackward"
      : "insertReplacementText"

  try {
    input.dispatchEvent(
      new InputEvent("beforeinput", {
        data,
        inputType,
        bubbles: true,
        cancelable: true,
      }),
    )
  } catch {
    // ignore
  }

  try {
    input.dispatchEvent(
      new InputEvent("input", {
        data,
        inputType,
        bubbles: true,
      }),
    )
  } catch {
    input.dispatchEvent(new Event("input", { bubbles: true }))
  }
}

async function typeTypeaheadValue(input, value) {
  const emptyDelayMs = 20
  const charDelayMs = 35
  const steps = typeahead.buildTypeaheadInputSteps(input.value || "", value)
  for (const step of steps) {
    const previous = input.value || ""
    const key = step.length > previous.length ? step.slice(-1) : "Backspace"
    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key,
        bubbles: true,
        cancelable: true,
      }),
    )
    setNativeInputValue(input, step)
    dispatchInputValueEvents(input, step, previous)
    input.dispatchEvent(
      new KeyboardEvent("keyup", {
        key,
        bubbles: true,
        cancelable: true,
      }),
    )
    await delay.delay(step === "" ? emptyDelayMs : charDelayMs)
  }
  input.dispatchEvent(new Event("change", { bubbles: true }))
}

async function commitTypeaheadWithEnter(input) {
  input.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "Enter",
      bubbles: true,
      cancelable: true,
    }),
  )
  input.dispatchEvent(
    new KeyboardEvent("keypress", {
      key: "Enter",
      bubbles: true,
      cancelable: true,
    }),
  )
  input.dispatchEvent(
    new KeyboardEvent("keyup", {
      key: "Enter",
      bubbles: true,
      cancelable: true,
    }),
  )
  input.dispatchEvent(new Event("change", { bubbles: true }))
  input.dispatchEvent(new FocusEvent("blur", { bubbles: true }))
  await blurPage()
  await delay.delay(100)
}

export async function fillInputTextField(input, value, label) {
  if (!input || !value) return
  let target = input
  if (label) {
    const refound = refindIfDetached(input, label, "input")
    if (!refound) return
    target = refound
  }
  target.focus()
  await delay.delay(50)
  setNativeInputValue(target, value)
  target.dispatchEvent(new Event("input", { bubbles: true }))
  target.dispatchEvent(new Event("change", { bubbles: true }))
  target.dispatchEvent(new Event("blur", { bubbles: true }))
  await blurPage()
  await delay.delay(50)
}

export async function fillListbox(input, value, label) {
  if (!input || !value) return
  let target = input
  if (label) {
    const refound = refindIfDetached(input, label, "input")
    if (!refound) return
    target = refound
  }

  const normalize = (text) => text.replace(/\s+/g, " ").trim().toLowerCase()
  const getTypeaheadContainer = () =>
    target.closest(".typeahead-container") ||
    target.parentElement?.closest(".typeahead-container")
  const getOptionButtons = () => {
    const container = getTypeaheadContainer()
    const controlsId =
      target.getAttribute("aria-controls") || target.getAttribute("aria-owns")
    const ownedList = controlsId ? document.getElementById(controlsId) : null
    const listbox =
      ownedList ||
      container?.querySelector('[role="listbox"], .typeahead-list') ||
      document.querySelector('div.typeahead-list, [role="listbox"]')
    return Array.from(
      listbox?.querySelectorAll(
        'button[role="option"], button.typeahead-button[role="option"]',
      ) || [],
    )
  }
  const waitForOptions = async () => {
    const startedAt = Date.now()
    const timeoutMs = 5000
    while (Date.now() - startedAt < timeoutMs) {
      const visible = getOptionButtons().filter((button) => button.offsetParent !== null)
      if (visible.length > 0) return visible
      await delay.delay(100)
    }
    return []
  }
  const selectOption = async (button) => {
    button.scrollIntoView({ block: "nearest" })
    target.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        cancelable: true,
      }),
    )
    await delay.delay(50)
    button.focus()
    button.dispatchEvent(new FocusEvent("focus", { bubbles: true }))
    dispatchFullClick(button)
    button.click()
    button.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
        cancelable: true,
      }),
    )
    button.dispatchEvent(
      new KeyboardEvent("keyup", {
        key: "Enter",
        bubbles: true,
        cancelable: true,
      }),
    )
    target.dispatchEvent(new Event("input", { bubbles: true }))
    target.dispatchEvent(new Event("change", { bubbles: true }))
    target.dispatchEvent(new FocusEvent("blur", { bubbles: true }))
    await blurPage()
  }

  target.scrollIntoView({
    behavior: "smooth",
    block: "center",
  })
  dispatchFullClick(target)
  target.focus()
  target.dispatchEvent(new FocusEvent("focus", { bubbles: true }))
  await delay.delay(100)
  await typeTypeaheadValue(target, value)

  const options = await waitForOptions()
  if (options.length === 0) {
    await commitTypeaheadWithEnter(target)
    return
  }

  const wanted = normalize(value)
  const exact = options.find((button) => {
    const text = normalize(button.textContent || "")
    return text === wanted
  })
  const choiceMatchHit =
    exact ||
    options.find((button) => {
      const text = normalize(button.textContent || "")
      return choiceMatch.isExactChoiceMatch(text, wanted)
    })
  const selected = choiceMatchHit ?? null
  if (selected) {
    await selectOption(selected)
    await delay.delay(300)
  } else {
    await commitTypeaheadWithEnter(target)
  }
}

export async function fillSelectField(select, answers, label) {
  if (!select || !answers || answers.length === 0) return
  let target = select
  if (label) {
    const refound = refindIfDetached(select, label, "select")
    if (!refound) return
    target = refound
  }

  const wanted = answers[0]
  const options = Array.from(target.options)
  const match = options.find(
    (option) =>
      option.text.trim().toLowerCase() === wanted.toLowerCase() ||
      option.value.toLowerCase() === wanted.toLowerCase(),
  )
  if (match) {
    target.value = match.value
    target.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(100)
  }
}

export async function fillCustomDropdown(container, answers, label) {
  if (!container || !answers || answers.length === 0) return
  let target = container
  if (label) {
    const refound = refindIfDetached(container, label, "container")
    if (!refound) return
    target = refound
  }

  const wanted = answers[0]
  const toggle = target.querySelector("button")
  if (toggle) {
    toggle.click()
    await delay.delay(200)
  }

  const inputs = Array.from(target.querySelectorAll("ul li input"))
  const match = inputs.find(
    (input) => input.value.toLowerCase() === wanted.toLowerCase(),
  )
  if (match) {
    match.click()
    await delay.delay(100)
  } else if (toggle) {
    toggle.click()
    await delay.delay(100)
  }
}

export async function fillRadioGroup(rule, answers) {
  if (!rule.$checkboxs || !answers || answers.length === 0) return
  const normalize = (text) => text.replace(/\s+/g, " ").trim().toLowerCase()
  normalize(answers[0])

  const indexedOptions = (rule.options || []).map((label, index) => ({
    label,
    index,
  }))
  const matchedIndex = choiceMatch.findExactChoice(
    indexedOptions,
    answers[0],
    (item) => item.label,
  )?.index

  if (matchedIndex !== undefined && matchedIndex !== -1 && rule.$checkboxs[matchedIndex]) {
    const checkbox = rule.$checkboxs[matchedIndex]
    if (!checkbox.checked) {
      const optionLabel = rule.options?.[matchedIndex]
        ? rule.$label?.querySelector(`label[for="${checkbox.id}"]`)
        : null
      checkbox.focus()
      checkbox.dispatchEvent(new Event("focus", { bubbles: true }))
      checkbox.dispatchEvent(
        new MouseEvent("mousedown", {
          bubbles: true,
          cancelable: true,
          view: window,
        }),
      )
      checkbox.dispatchEvent(
        new MouseEvent("mouseup", {
          bubbles: true,
          cancelable: true,
          view: window,
        }),
      )
      checkbox.click()
      checkbox.dispatchEvent(new Event("input", { bubbles: true }))
      checkbox.dispatchEvent(new Event("change", { bubbles: true }))
      if (optionLabel) optionLabel.click()
      await delay.delay(100)
    }
  }
}

export async function fillAgreementCheckbox() {
  const checkbox = xpath.getFirstOrderedNode(
    './/input[@type="checkbox" and @id="selfdisclosure-active-consent-checkbox-consent"]',
  )
  if (checkbox) await checkboxUtils.fillCheckbox(checkbox, true)
}

export async function openDisabilityModal() {
  const existing = document.getElementById("selfdisclosure-disabilitymodal-modal")
  if (existing) return existing

  const updateButton = Array.from(document.querySelectorAll("button")).find(
    (button) => button.textContent?.trim() === "Update Form",
  )
  if (!updateButton) return null

  updateButton.scrollIntoView({
    behavior: "smooth",
    block: "center",
  })
  updateButton.click()

  const timeoutMs = 10000
  const startedAt = Date.now()
  while (Date.now() - startedAt < timeoutMs) {
    const modal = document.getElementById("selfdisclosure-disabilitymodal-modal")
    if (modal) {
      await delay.delay(500)
      return modal
    }
    await delay.delay(100)
  }
  return null
}

export async function submitDisabilityModal() {
  const submitButton = document.getElementById(
    "selfdisclosure-disability-modal-submit-button",
  )
  if (!submitButton) return false

  submitButton.scrollIntoView({
    behavior: "smooth",
    block: "center",
  })
  submitButton.click()

  const timeoutMs = 10000
  const startedAt = Date.now()
  while (Date.now() - startedAt < timeoutMs) {
    if (!document.getElementById("selfdisclosure-disabilitymodal-modal")) {
      await delay.delay(300)
      return true
    }
    await delay.delay(100)
  }
  return false
}

export async function selectManualFillOption() {
  const manualOption = document.getElementById("manualOption")
  if (!manualOption) return

  if (!manualOption.checked) {
    manualOption.click()
    manualOption.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(300)
  }
  await delay.delay(200)

  const continueButton = document.getElementById("apply-step-continue-button")
  if (continueButton) {
    continueButton.click()
    await delay.delay(500)
  }
}

export async function uploadResume(resumeInfo, onRequired, onFilled) {
  const removeButton = document.getElementById("resume-remove")
  if (removeButton) {
    removeButton.dispatchEvent(
      new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        view: window,
      }),
    )
    await delay.delay(50)
    removeButton.dispatchEvent(
      new MouseEvent("mouseup", {
        bubbles: true,
        cancelable: true,
        view: window,
      }),
    )
    removeButton.click()
    await delay.delay(500)
  }

  const attachButton = document.getElementById("attachfile-button-resume-fileupload")
  if (!attachButton) return

  const fileInput = document.querySelector(
    'input[type="file"][id*="resume"], input[type="file"][name*="resume"]',
  )
  if (fileInput) {
    try {
      await dom.uploadFiles(
        fileInput,
        await answerMethods.fetchPdfAsBlob(resumeInfo),
        onRequired,
        onFilled,
        "Resume/CV",
      )
    } catch (error) {
      console.error("[Apple] Resume upload failed:", error)
    }
  }
}

export async function uploadCoverLetter(coverLetter, onRequired, onFilled) {
  if (!isAppleCoverLetterStep()) {
    console.warn(
      "[Apple] Cover letter upload skipped: current step is not Profile Information",
    )
    return false
  }

  const domState = getAppleCoverLetterUploadDom()
  if (!isCoverLetterSlotReady(domState) || !domState.input) {
    console.warn(
      "[Apple] Cover letter upload aborted: supportfile slot is not ready",
    )
    return false
  }

  const expectedFileName = `${coverLetter.coverLetterName}.pdf`
  const removed = await removeExistingCoverLetterRows(expectedFileName)
  if (!removed) {
    console.warn("[Apple] Existing cover letter row could not be removed")
    return false
  }

  await dom.uploadFiles(
    domState.input,
    await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter),
    onRequired,
    onFilled,
    "Cover Letter",
  )

  const rowAppeared = await observer.waitForCondition(() => {
    const current = getAppleCoverLetterUploadDom()
    const row = findCoverLetterRow(current, {
      expectedFileName,
      allowUncategorizedMatch: true,
    })
    return !!(
      row &&
      isCompleteCoverLetterRow(row) &&
      normalizeFileName(row.fileName) === normalizeFileName(expectedFileName)
    )
  }, {
    timeout: 8000,
    interval: 100,
    observeTarget: domState.section || document.body,
  })

  if (!rowAppeared) {
    console.warn(
      "[Apple] Cover letter upload did not produce a supportfile success row",
    )
    return false
  }

  const categorySet = await setCoverLetterCategory(expectedFileName)
  if (!categorySet) {
    console.warn("[Apple] Cover letter category was not set to Cover Letter", {
      expectedFileName,
      dom: getAppleCoverLetterUploadDom(),
    })
    return false
  }

  const verified = await observer.waitForCondition(
    () => isCoverLetterVerified(expectedFileName),
    {
      timeout: 5000,
      interval: 100,
      observeTarget: domState.section || document.body,
    },
  )
  if (!verified) {
    console.warn(
      "[Apple] Cover letter upload did not reach verified success state",
      {
        expectedFileName,
        dom: getAppleCoverLetterUploadDom(),
      },
    )
  }
  return verified
}

export async function fillSplitDate(rule, rawValue) {
  if (!rawValue) return
  const date = new Date(rawValue)
  if (isNaN(date.getTime())) return

  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  const year = date.getFullYear().toString()
  const input = rule.$input
  const fieldset = input.closest("fieldset")
  if (!fieldset) return

  const monthSelect = fieldset.querySelector('select[name="Month"]')
  const yearSelect = fieldset.querySelector('select[name="Year"]')
  if (monthSelect) await fillSelectField(monthSelect, [month])
  if (yearSelect) await fillSelectField(yearSelect, [year])
}

function getEducationTitle() {
  return document.getElementById("parsedmodal-review-education-title")
}

function getEmploymentTitle() {
  return document.getElementById("parsedmodal-review-employments-title")
}

export async function preclickAddButtons() {
  const educationTitle = getEducationTitle()
  if (educationTitle) {
    await removeEducationSections()
    if (countEducationSections() === 0) {
      await addEducationSection()
      await delay.delay(500)
    }
  }

  const employmentTitle = getEmploymentTitle()
  if (employmentTitle) {
    await removeEmploymentSections()
    if (countEmploymentSections() === 0) {
      await addEmploymentSection()
      await delay.delay(500)
    }
  }
}

async function removeEducationSections() {
  const buttons = document.querySelectorAll('[id*="remove-education"]')
  for (const button of Array.from(buttons)) {
    button.click()
    await delay.delay(300)
  }
}

async function removeEmploymentSections() {
  const buttons = document.querySelectorAll('[id*="remove-employment"]')
  for (const button of Array.from(buttons)) {
    button.click()
    await delay.delay(300)
  }
}

function countEducationSections() {
  const title = getEducationTitle()
  return title ? title.querySelectorAll('[id^="parsedmodal-edu-form-"]').length : 0
}

function countEmploymentSections() {
  const title = getEmploymentTitle()
  if (!title) return 0
  const group = title.querySelector(
    '[role="group"][aria-label="Edit Employment Summary"]',
  )
  if (!group) return 0
  const fieldsets = group.querySelectorAll("fieldset")
  let count = 0
  fieldsets.forEach((fieldset) => {
    const legend = fieldset.querySelector("legend")
    if (legend && legend.textContent?.includes("Edit Employment")) count++
  })
  return count
}

export async function addEducationSection() {
  const buttons = document.querySelectorAll('[id*="add-education"]')
  const button = buttons[buttons.length - 1]
  if (button) {
    button.click()
    await delay.delay(500)
  }
}

export async function addEmploymentSection() {
  const buttons = document.querySelectorAll('[id*="add-employment"]')
  const button = buttons[buttons.length - 1]
  if (button) {
    button.click()
    await delay.delay(500)
  }
}

export async function fillSkills(skills) {
  const values = (Array.isArray(skills) ? skills : [skills])
    .flatMap((entry) => String(entry ?? "").split(/[,\n]/))
    .map((entry) => entry.trim())
    .filter(Boolean)
  if (values.length === 0) return

  const inputId = "apply-skills-typeahead-suggestion-textbox"
  const input = document.getElementById(inputId)
  if (!input) return

  for (const skill of values) {
    if (!skill) continue
    input.click()
    input.focus()
    await delay.delay(200)
    setNativeInputValue(input, skill)
    input.dispatchEvent(new Event("input", { bubbles: true }))
    await delay.delay(400)
    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
        cancelable: true,
      }),
    )
    input.dispatchEvent(
      new KeyboardEvent("keypress", {
        key: "Enter",
        bubbles: true,
        cancelable: true,
      }),
    )
    input.dispatchEvent(
      new KeyboardEvent("keyup", {
        key: "Enter",
        bubbles: true,
        cancelable: true,
      }),
    )
    input.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(500)
    if (input.value) {
      setNativeInputValue(input, "")
      input.dispatchEvent(new Event("input", { bubbles: true }))
      await delay.delay(200)
    }
  }

  const rateButton = xpath.getFirstOrderedNode(
    './/button[@id="rate-skills-button"]',
  )
  if (rateButton) {
    rateButton.click()
    await delay.delay(500)
  }
}

export async function waitPageClean() {
  const timeoutMs = 10000
  const startedAt = Date.now()
  while (Date.now() - startedAt < timeoutMs) {
    if (document.getElementById("apply-profileInformation-form")) {
      await delay.delay(500)
      return
    }
    await delay.delay(200)
  }
}

export async function blurPage() {
  const target =
    document.getElementById("apply-profileInformation-form") || document.body
  target.dispatchEvent(
    new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
  await delay.delay(50)
  target.dispatchEvent(
    new MouseEvent("mouseup", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
  target.click()
}

export async function submitHandler(autofillSnapshot) {
  const submitSnapshot = appleRules.getFormSnapshot()
  const {
    education: submitEducation,
    employment: submitEmployment,
    ...submitRegular
  } = submitSnapshot
  const {
    education: autofillEducation,
    employment: autofillEmployment,
    ...autofillRegular
  } = autofillSnapshot

  autofillAnswerPairTracking.sendAutofillAnswerPairEvent({
    formUrl: urlStore.useUrlStore.getState().currentTabUrl,
    autofillSnapshot: autofillRegular,
    submitSnapshot: submitRegular,
    additionalAutofillData: {
      education: autofillEducation,
      employment: autofillEmployment,
    },
    additionalSubmitData: {
      education: submitEducation,
      employment: submitEmployment,
    },
    source: "apple",
  })
}
