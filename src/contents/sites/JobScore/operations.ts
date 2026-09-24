// @ts-nocheck
/**
 * JobScore — DOM fill operations (inputs, resume, cover letter, sections).
 */

import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as enums from "../../../core/enums.js"
import * as delay from "../../../utils/delay.js"
import * as answers from "./answers.ts"
import * as normalizers from "./normalizers.ts"

export {
  normalizeJobScoreWorkExperienceRecord,
  normalizeWorkExperienceRecords,
} from "./normalizers.ts"

let filledElements = new WeakMap()

export function resetFilledElementsForNewRun() {
  filledElements = new WeakMap()
}

function firstValue(value) {
  const raw = Array.isArray(value) ? value[0] : value
  return String(raw ?? "").trim()
}

async function waitUntilVisible(element, options) {
  const maxWait = options?.maxWait ?? 20
  const pollMs = options?.pollMs ?? 100
  const checkLayout = options?.checkLayout ?? false
  let attempt = 0

  while (attempt < maxWait) {
    const display = window.getComputedStyle(element).display
    const hasLayout =
      typeof element.getClientRects !== "function" ||
      element.getClientRects().length > 0
    const visible = display !== "none" && (!checkLayout || hasLayout)
    if (visible) return true
    await delay.delay(pollMs)
    attempt++
  }

  const display = window.getComputedStyle(element).display
  const hasLayout =
    typeof element.getClientRects !== "function" ||
    element.getClientRects().length > 0
  return display !== "none" && (!checkLayout || hasLayout)
}

function describeStateControl(element) {
  let display = "unavailable"
  try {
    display = window.getComputedStyle(element).display
  } catch {
    // ignore
  }
  const formGroup = element.closest(".js-form-group")
  const hidden = formGroup?.querySelector(
    'input[type="hidden"][name*="home_state"], input[type="hidden"][id*="home_state"]',
  )
  const selected = element.options?.[element.selectedIndex]
  const live = element.id ? document.getElementById(element.id) : null
  return {
    id: element.id,
    name: element.name,
    tagName: element.tagName,
    value: element.value,
    selectedIndex: element.selectedIndex,
    selectedText: selected?.textContent?.trim() || "",
    optionCount: element.options?.length ?? 0,
    display,
    offsetParentPresent: element.offsetParent !== null,
    layoutRectCount:
      typeof element.getClientRects === "function"
        ? element.getClientRects().length
        : null,
    isConnected: element.isConnected,
    sameLiveNode: element.id ? live === element : null,
    hiddenValue: hidden?.value ?? null,
    hiddenId: hidden?.id ?? null,
    hiddenName: hidden?.name ?? null,
  }
}

function logStateDebug(event, payload) {
  try {
    console.info(`[JobScore][State][debug] ${event}`, JSON.stringify(payload))
  } catch {
    console.info(`[JobScore][State][debug] ${event}`, "payload-unserializable")
  }
}

function isVisiblyLaidOut(element) {
  const style = window.getComputedStyle(element)
  const hasLayout =
    typeof element.getClientRects !== "function" ||
    element.getClientRects().length > 0
  return (
    style.display !== "none" &&
    style.visibility !== "hidden" &&
    hasLayout
  )
}

function queryFirst(selectors, root = document) {
  for (const selector of selectors) {
    try {
      const node = root.querySelector(selector)
      if (node) return node
    } catch {
      // ignore invalid selectors like :contains
    }
  }
  return null
}

async function clickUntilCount(
  button,
  itemSelector,
  targetCount,
  options,
) {
  const root = options?.root ?? document
  const delayAfterClick = options?.delayAfterClick ?? 300
  const retryWithEvents = options?.retryWithEvents ?? true
  const before = root.querySelectorAll(itemSelector).length
  if (before >= targetCount) return

  const needed = targetCount - before
  for (let index = 0; index < needed; index++) {
    try {
      button.click()
      await delay.delay(delayAfterClick)
      let after = root.querySelectorAll(itemSelector).length
      if (retryWithEvents && after <= before + index) {
        button.dispatchEvent(
          new MouseEvent("click", { bubbles: true, cancelable: true }),
        )
        await delay.delay(delayAfterClick)
        after = root.querySelectorAll(itemSelector).length
        if (after <= before + index) {
          button.dispatchEvent(
            new MouseEvent("mousedown", { bubbles: true }),
          )
          await delay.delay(50)
          button.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
          await delay.delay(50)
          button.dispatchEvent(new MouseEvent("click", { bubbles: true }))
          await delay.delay(delayAfterClick)
        }
      }
      await delay.delay(500)
    } catch {
      // ignore click failures
    }
  }
}

export function isStateProvinceField(element, labelText, ruleLabel) {
  if (
    typeof element.closest === "function" &&
    element.closest('.js-section-questions, [data-context="custom-question"]')
  ) {
    return false
  }
  const id = element.id?.toLowerCase() || ""
  const name = element.name?.toLowerCase() || ""
  return (
    id.includes("home_state") ||
    (id.includes("state") && !id.includes("work_authorization")) ||
    name.includes("home_state") ||
    (name.includes("state") && !name.includes("work_authorization")) ||
    looksLikeStateProvinceLabel(labelText) ||
    looksLikeStateProvinceLabel(ruleLabel)
  )
}

function looksLikeStateProvinceLabel(label) {
  const text = (label || "").trim().toLowerCase()
  return !!text && !text.includes("?") && /^(state|province)\b/.test(text)
}

export async function fillInputTextField(input, value) {
  const meta = {
    id: input.id,
    name: input.name,
    type: input.type,
    label:
      input.closest(".js-form-group")?.querySelector("label")?.textContent?.trim() ||
      "",
    value,
  }

  if (
    answers.isCompensationField(meta.label) &&
    !(value = answers.cleanCompensationValue(value, meta.label))
  ) {
    return
  }

  const previous = filledElements.get(input)
  if (previous && previous.value === value) return

  const isEmployer =
    input.name?.toLowerCase().includes("employer") ||
    input.name?.toLowerCase().includes("company")
  if (!isEmployer && previous && previous.value === input.value) return

  const inQuestions = input.closest(".js-section-questions") !== null
  if (inQuestions) {
    const hidden = window.getComputedStyle(input).display === "none"
    if (hidden) {
      const visible = await waitUntilVisible(input, {
        maxWait: 20,
        pollMs: 100,
      })
      if (!visible) return
    }
  }

  input.focus()
  await delay.delay(100)
  input.value = ""
  input.dispatchEvent(new Event("input", { bubbles: true }))
  await delay.delay(100)
  input.value = value
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
  input.blur()
  await delay.delay(100)
  filledElements.set(input, { value: input.value, timestamp: Date.now() })
}

async function fillCheckboxQuestion(container, rule, value) {
  const text = firstValue(value)
  if (!text) return true

  const previous = filledElements.get(container)
  if (previous && previous.value === text) return true

  const inQuestions = container.closest(".js-section-questions") !== null
  if (inQuestions) {
    const hidden = window.getComputedStyle(container).display === "none"
    if (hidden) {
      const visible = await waitUntilVisible(container, {
        maxWait: 20,
        pollMs: 100,
      })
      if (!visible) return false
    }
  }

  const checkboxes = container.querySelectorAll('input[type="checkbox"]')
  const wanted = text.toLowerCase()
  const options = Array.from(checkboxes).flatMap((checkbox) => {
    const id = checkbox.id
    let optionText = ""
    if (id) {
      const label = document.querySelector(`label[for="${id}"]`)
      if (label?.textContent) optionText = label.textContent.trim()
    }
    if (!optionText) {
      const wrap = checkbox.closest(".js-checkbox-container")
      const label = wrap?.querySelector("label.js-control-label")
      if (label?.textContent) optionText = label.textContent.trim()
    }
    return optionText
      ? [{ checkbox, optionTextLower: optionText.toLowerCase() }]
      : []
  })

  const exact = options.filter(
    ({ optionTextLower }) => optionTextLower === wanted,
  )
  const matches =
    exact.length > 0
      ? exact
      : options.filter(
          ({ optionTextLower }) =>
            optionTextLower.includes(wanted) ||
            wanted.includes(optionTextLower),
        )

  if (matches.length !== 1) return false

  const before = options.map(({ checkbox }) => !!checkbox.checked)
  const [{ checkbox: target }] = matches

  for (const { checkbox } of options) {
    if (checkbox !== target && checkbox.checked) {
      checkbox.click()
      await delay.delay(100)
    }
  }
  if (!target.checked) {
    target.click()
    await delay.delay(100)
  }

  const ok =
    target.checked &&
    options.every(({ checkbox }) => checkbox === target || !checkbox.checked)
  if (!ok) {
    for (const [index, { checkbox }] of options.entries()) {
      if (checkbox.checked !== before[index]) {
        checkbox.click()
        await delay.delay(100)
      }
    }
    return false
  }

  filledElements.set(container, { value: text, timestamp: Date.now() })
  return true
}

export async function fillSelectField(rule, value) {
  const input = rule.$input
  const label =
    (input.closest(".js-form-group")?.querySelector("label")?.textContent?.trim() ||
      rule.label ||
      "") ?? ""

  let checkboxQuestion = null
  if (input instanceof HTMLElement) {
    checkboxQuestion =
      input.classList.contains("js-checkbox-question") &&
      input.getAttribute("data-candidate-question-type") === "checkbox"
        ? input
        : input.closest(
            '.js-checkbox-question[data-candidate-question-type="checkbox"]',
          )
  }
  if (checkboxQuestion) {
    return fillCheckboxQuestion(checkboxQuestion, rule, value)
  }

  if (!input) return false

  const target = firstValue(value)
  const isState = isStateProvinceField(input, label, rule.label)

  if (isState) {
    logStateDebug("fill:start", {
      label: label || rule.label || "",
      target,
      ...describeStateControl(input),
    })
  }

  if (isState) {
    if (input.tagName === "INPUT") {
      await fillInputTextField(input, target)
      return true
    }

    const international = document.getElementById("region_international")
    if (international && isVisiblyLaidOut(international)) {
      const textInput = international.querySelector(
        'input[type="text"], input[autocomplete="address-level1"]',
      )
      if (textInput) {
        await fillInputTextField(textInput, target)
        return true
      }
    }

    const formGroup = input.closest(".js-form-group")
    if (formGroup) {
      const regionInput = formGroup.querySelector(
        'input[type="text"][autocomplete="address-level1"], input[type="text"][id*="region"], input[type="text"][name*="region"]',
      )
      const regionVisible = !!regionInput && isVisiblyLaidOut(regionInput)
      if (regionInput && regionInput !== input && regionVisible) {
        logStateDebug("fill:use-international-input", {
          reason: "visible-form-group-input",
          ...describeStateControl(input),
        })
        await fillInputTextField(regionInput, target)
        return true
      }
      if (regionInput && !regionVisible) {
        logStateDebug("fill:skip-hidden-international-input", {
          reason: "no-visible-layout",
          inputId: regionInput.id,
          inputValue: regionInput.value,
          inputDisplay: window.getComputedStyle(regionInput).display,
          inputLayoutRectCount:
            typeof regionInput.getClientRects === "function"
              ? regionInput.getClientRects().length
              : null,
          ...describeStateControl(input),
        })
      }
    }
  }

  if (input.tagName !== "SELECT" && !isState) return false

  const previous = filledElements.get(input)
  if ((previous && previous.value === target) || input.value === target) {
    return true
  }

  const inQuestions = input.closest(".js-section-questions") !== null
  const computedDisplay = window.getComputedStyle(input).display
  const hasLayout =
    typeof input.getClientRects !== "function" ||
    input.getClientRects().length > 0
  const isHidden = computedDisplay === "none" || !hasLayout

  if (isState) {
    logStateDebug("fill:layout-check", {
      isHidden,
      computedDisplay,
      hasLayoutBox: hasLayout,
      ...describeStateControl(input),
    })
  }

  if (isHidden) {
    const visible = await waitUntilVisible(input, {
      maxWait: 20,
      pollMs: 100,
      checkLayout: true,
    })
    if (!visible) {
      console.warn("[JobScore][State] control did not become laid out", {
        id: input.id,
        label,
        target,
        display: computedDisplay,
        hasLayoutBox: hasLayout,
      })
      logStateDebug("fill:layout-timeout", {
        label: label || rule.label || "",
        target,
        ...describeStateControl(input),
      })
      return false
    }
  }

  if (input.tagName === "SELECT") {
    let selected = Array.isArray(value) ? value[0] : value
    const nameLower = input.name?.toLowerCase() || ""
    const labelLower = label.toLowerCase()

    if (selected == null || String(selected).trim() === "") {
      const isDateLike =
        nameLower.includes("start") ||
        nameLower.includes("end") ||
        nameLower.includes("year") ||
        labelLower.includes("start") ||
        labelLower.includes("end") ||
        labelLower.includes("year")
      if (isDateLike) return true
      selected = ""
    }

    let optionText = String(selected).trim()
    const isDate = answers.isDateSelectField(input, nameLower, labelLower)
    const isDegree =
      nameLower.includes("degree_id") ||
      (nameLower.includes("degree") && !nameLower.includes("major"))

    if (isDegree) optionText = answers.resolveDegreeValue(optionText)

    if (isDate) {
      const lower = optionText.toLowerCase()
      if (
        lower === "present" ||
        lower === "current" ||
        lower === "now" ||
        lower.includes("present")
      ) {
        optionText = "to_present"
      } else {
        const yearMatch = optionText.match(/\b(\d{4})\b/)
        if (yearMatch) optionText = yearMatch[1]
      }
    }

    const candidates = isState
      ? answers.getStateProvinceCandidates(optionText)
      : null

    for (let index = 0; index < input.options.length; index++) {
      const option = input.options[index]
      const text = (option.textContent?.trim() || option.value).toLowerCase()
      const optionValue = option.value.toLowerCase()
      const wanted = optionText.toLowerCase()
      if (
        optionValue &&
        optionValue !== "" &&
        text !== "- select -" &&
        text !== "select" &&
        text !== "-select-" &&
        text !== "select..." &&
        (text === wanted || optionValue === wanted || option.value === optionText)
      ) {
        if (isState) {
          logStateDebug("fill:option-match", {
            matchType: "exact",
            optionIndex: index,
            optionText: option.textContent?.trim() || "",
            optionValue: option.value,
            ...describeStateControl(input),
          })
        }
        input.selectedIndex = index
        input.dispatchEvent(new Event("change", { bubbles: true }))
        input.dispatchEvent(new Event("input", { bubbles: true }))
        await delay.delay(inQuestions ? 500 : 100)
        if (isState) logStateDebug("fill:after-events", describeStateControl(input))
        if (isState) {
          const committed = await commitStateProvinceValue(input, option.value)
          logStateDebug("fill:state-commit", {
            committed,
            selectedValue: option.value,
            ...describeStateControl(input),
          })
          if (!committed) return false
        }
        filledElements.set(input, {
          value: input.value,
          timestamp: Date.now(),
        })
        return true
      }
    }

    if (candidates && candidates.length > 0) {
      const lowered = candidates.map((item) => item.toLowerCase().trim())
      for (let index = 0; index < input.options.length; index++) {
        const option = input.options[index]
        const text = (option.textContent?.trim() || option.value).toLowerCase()
        const optionValue = option.value.toLowerCase()
        if (
          !optionValue ||
          optionValue === "" ||
          text === "- select -" ||
          text === "select" ||
          text === "-select-" ||
          text === "select..."
        ) {
          continue
        }
        const exact = lowered.some(
          (candidate) =>
            text === candidate ||
            optionValue === candidate ||
            (option.value || "").toLowerCase() === candidate,
        )
        const partial = lowered.some(
          (candidate) =>
            text.includes(candidate) ||
            candidate.includes(text) ||
            optionValue.includes(candidate) ||
            candidate.includes(optionValue),
        )
        if (exact || partial) {
          logStateDebug("fill:option-match", {
            matchType: exact ? "candidate-exact" : "candidate-partial",
            optionIndex: index,
            optionText: option.textContent?.trim() || "",
            optionValue: option.value,
            candidates,
            ...describeStateControl(input),
          })
          input.selectedIndex = index
          input.dispatchEvent(new Event("change", { bubbles: true }))
          input.dispatchEvent(new Event("input", { bubbles: true }))
          await delay.delay(inQuestions ? 500 : 100)
          logStateDebug("fill:after-events", describeStateControl(input))
          if (!(await commitStateProvinceValue(input, option.value))) {
            logStateDebug("fill:state-commit", {
              committed: false,
              selectedValue: option.value,
              ...describeStateControl(input),
            })
            return false
          }
          logStateDebug("fill:state-commit", {
            committed: true,
            selectedValue: option.value,
            ...describeStateControl(input),
          })
          filledElements.set(input, {
            value: input.value,
            timestamp: Date.now(),
          })
          return true
        }
      }
    }
  }

  if (isState) {
    logStateDebug("fill:no-match", {
      label: label || rule.label || "",
      target,
      ...describeStateControl(input),
    })
  }
  return false
}

async function commitStateProvinceValue(select, selectedValue) {
  if (!isStateProvinceField(select)) return true

  logStateDebug("state:commit-start", {
    selectedValue,
    ...describeStateControl(select),
  })

  const findHidden = () => {
    const formGroup = select.closest(".js-form-group")
    return formGroup?.querySelector(
      'input[type="hidden"][name*="home_state"], input[type="hidden"][id*="home_state"]',
    )
  }

  const syncHidden = () => {
    const hidden = findHidden()
    if (hidden) {
      hidden.value = selectedValue
      hidden.dispatchEvent(new Event("change", { bubbles: true }))
      hidden.dispatchEvent(new Event("input", { bubbles: true }))
      logStateDebug("state:hidden-sync", {
        selectedValue,
        ...describeStateControl(select),
      })
    }
  }

  const isCommitted = () => {
    const hidden = findHidden()
    return select.value === selectedValue && (!hidden || hidden.value === selectedValue)
  }

  syncHidden()
  await delay.delay(300)
  logStateDebug("state:after-initial-wait", {
    committed: isCommitted(),
    ...describeStateControl(select),
  })

  let retryCount = 0
  const maxRetries = 3
  while (retryCount < maxRetries && !isCommitted()) {
    logStateDebug("state:retry", {
      retryCount,
      selectedValue,
      ...describeStateControl(select),
    })
    const index = Array.from(select.options).findIndex(
      (option) => option.value === selectedValue,
    )
    if (index >= 0) {
      select.selectedIndex = index
      select.value = selectedValue
      syncHidden()
      select.dispatchEvent(new Event("change", { bubbles: true }))
      select.dispatchEvent(new Event("input", { bubbles: true }))
      await delay.delay(300)
    }
    retryCount++
  }

  const committed = isCommitted()
  logStateDebug("state:commit-end", {
    committed,
    retryCount,
    selectedValue,
    ...describeStateControl(select),
  })
  return committed
}

export async function fillCheckboxField(rule, value) {
  const input = rule.$input
  const raw = Array.isArray(value) ? value[0] : value
  const checked =
    raw === true ||
    raw === "Yes" ||
    raw === "true" ||
    String(raw).toLowerCase() === "yes"
  if (input.checked !== checked) {
    input.click()
    await delay.delay(100)
  }
}

async function matchAndClickRadio(radio, wantedLower) {
  const value = radio.value || radio.getAttribute("value") || ""
  if (value && String(value).toLowerCase() === wantedLower) {
    if (!radio.checked) {
      radio.click()
      await delay.delay(100)
    }
    return true
  }

  if (radio.id) {
    const label = document.querySelector(`label[for="${radio.id}"]`)
    if (label) {
      const text = (label.textContent?.trim() || "").toLowerCase()
      if (
        text === wantedLower ||
        text.includes(wantedLower) ||
        wantedLower.includes(text)
      ) {
        if (!radio.checked) {
          radio.click()
          await delay.delay(100)
        }
        return true
      }
    }
  }

  const sibling = radio.nextElementSibling
  if (sibling && sibling.tagName === "LABEL") {
    const text = (sibling.textContent?.trim() || "").toLowerCase()
    // Preserve original Parcel dump predicate (includes itself).
    if (
      text === wantedLower ||
      text.includes(wantedLower) ||
      text.includes(text)
    ) {
      if (!radio.checked) {
        radio.click()
        await delay.delay(100)
      }
      return true
    }
  }

  return (
    !!radio.id &&
    radio.id.toLowerCase() === wantedLower &&
    (radio.checked || (radio.click(), await delay.delay(100), true))
  )
}

export async function fillRadioGroupFiled(rule, value) {
  const text = firstValue(value)
  const parent = rule.$radioParent
  const radios = parent.querySelectorAll('input[type="radio"]')
  for (const radio of Array.from(radios)) {
    const radioValue = radio.value || radio.getAttribute("value")
    const siblingText = radio.nextElementSibling?.textContent?.trim() || ""
    if (radioValue === text || siblingText === text || radio.id === text) {
      radio.click()
      await delay.delay(100)
      return
    }
  }
}

export async function fillRadioField(rule, value) {
  const text = firstValue(value)
  if (!text) return
  const radios = rule.$input
  if (!radios || radios.length === 0) return
  const parent = rule.$radioParent
  const wanted = text.toLowerCase()

  for (const radio of radios) {
    if (await matchAndClickRadio(radio, wanted)) return
  }
  if (parent) {
    const all = parent.querySelectorAll('input[type="radio"]')
    for (const radio of Array.from(all)) {
      if (!radios.includes(radio) && (await matchAndClickRadio(radio, wanted))) {
        return
      }
    }
  }
}

function getResumeInput() {
  return document.getElementById("resume_document")
}

export function isResumeOnlyPage() {
  const hasResume =
    getResumeInput() !== null ||
    document.querySelector(
      'input[type="file"][data-context="resume-document-input"]',
    ) !== null
  const hasOther =
    document.querySelector(".js-area-container.contact") !== null ||
    document.querySelector(".js-section-cover-letter") !== null ||
    document.querySelector(".js-area-container.experience") !== null ||
    document.querySelector(".js-area-container.education") !== null ||
    document.querySelector(".js-section-questions") !== null
  return hasResume && !hasOther
}

export function getResumeOnlyPageRequiredFields(rules) {
  return rules?.length
    ? rules
    : [{ label: "Resume/CV", required: true, type: "file" }]
}

export function restoreResumeProgressAfterRulesUpdate({
  resumeStatusBefore,
  wasResumeFilled,
  updateFieldRequiredStatus,
  updateFilledProgress,
}) {
  if (wasResumeFilled || resumeStatusBefore) {
    updateFieldRequiredStatus({
      label: "Resume/CV",
      required: resumeStatusBefore?.required ?? true,
    })
    if (wasResumeFilled) updateFilledProgress("Resume/CV")
  }
}

export async function executeResumeUpload({
  resumeInfo,
  updateFieldRequiredStatus,
  updateFilledProgress,
  updateMissedProgress,
  disableUploadResume,
}) {
  if (disableUploadResume) {
    await removeResume()
    updateMissedProgress("Resume/CV")
  } else {
    await removeResume()
    await uploadResume(
      resumeInfo,
      updateFieldRequiredStatus,
      updateFilledProgress,
    )
  }
}

export function syncResumeFilledProgress(
  updateFieldRequiredStatus,
  updateFilledProgress,
) {
  const input = getResumeInput()
  const hasFiles = input?.files != null && input.files.length > 0
  const hasFilename =
    document.querySelector(
      '.fileupload-filename, .file-name, [class*="file-name"], [class*="filename"]',
    ) !== null
  if (hasFiles || hasFilename) {
    updateFieldRequiredStatus({ label: "Resume/CV", required: true })
    updateFilledProgress("Resume/CV")
  }
}

export async function uploadResume(
  resumeInfo,
  updateFieldRequiredStatus,
  updateFilledProgress,
) {
  const documentRadio = document.querySelector(
    'input.resume_radio_button[value="document"], input#doc_radio_button[value="document"]',
  )
  if (documentRadio && !documentRadio.checked) {
    documentRadio.click()
    await delay.delay(100)
  }

  let input = getResumeInput()
  if (!input) {
    input = document.querySelector(
      'input[type="file"][data-context="resume-document-input"]',
    )
  }
  if (!input) {
    input = document.querySelector('input[type="file"][accept*=".pdf"]')
  }
  if (!input) return

  const blob = await answerMethods.fetchPdfAsBlob(resumeInfo)
  await dom.uploadFiles(
    input,
    blob,
    updateFieldRequiredStatus,
    updateFilledProgress,
    "Resume/CV",
  )

  let uploaded = false
  const timeoutMs = 10000
  const started = Date.now()
  while (!uploaded && Date.now() - started < timeoutMs) {
    const filename = document.querySelector(
      '.fileupload-filename, .file-name, [class*="file-name"], [class*="filename"]',
    )
    if (filename?.textContent?.trim()) {
      uploaded = true
      break
    }

    const live = getResumeInput()
    if (!live || window.getComputedStyle(live).display === "none") {
      const uploadedNode = document.querySelector(
        '[class*="uploaded"], [class*="file-uploaded"], [class*="resume-uploaded"]',
      )
      if (uploadedNode) {
        uploaded = true
        break
      }
    }

    const progress = document.querySelector(
      '[class*="progress"], [class*="upload-progress"], .progress-bar',
    )
    if (!progress || window.getComputedStyle(progress).display === "none") {
      await delay.delay(500)
      uploaded = true
      break
    }
    await delay.delay(200)
  }

  updateFieldRequiredStatus({ label: "Resume/CV", required: true })
  updateFilledProgress("Resume/CV")
  if (uploaded) await delay.delay(200)
}

export async function removeResume() {
  const deleteButton = document.querySelector(
    'button[aria-label="Delete"], button[class*="delete"]',
  )
  if (deleteButton) {
    deleteButton.click()
    await delay.delay(500)
    const confirm = document.querySelector(
      'button[class*="confirm"], button:contains("Confirm")',
    )
    if (confirm) {
      confirm.click()
      await delay.delay(500)
    }
  }
}

export async function fillCoverLetterField(value) {
  const text = String(value ?? "").trim()
  if (!text) return

  const textarea = document.querySelector(
    'textarea[name="cover_letter"], textarea#cover_letter',
  )
  const editor = document.querySelector(
    '.js-section-cover-letter .fr-element.fr-view[contenteditable="true"]',
  )
  if (!textarea && !editor) return

  const escapeHtml = (raw) =>
    raw
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")

  const html = /<\/?[a-z][\s\S]*>/i.test(text)
    ? text
    : escapeHtml(text)
        .split(/\n{2,}/)
        .map((paragraph) => `<p>${paragraph.replace(/\n/g, "<br>")}</p>`)
        .join("")

  const hasContent = () => {
    const editorText = editor?.textContent?.replace(/\u00a0/g, " ").trim()
    const textareaText = textarea?.value?.trim()
    return !!(editorText || textareaText)
  }

  const syncTextarea = () => {
    if (textarea) {
      textarea.value = text
      textarea.dispatchEvent(new Event("input", { bubbles: true }))
      textarea.dispatchEvent(new Event("change", { bubbles: true }))
      textarea.dispatchEvent(new Event("blur", { bubbles: true }))
    }
  }

  const syncEditorEvents = () => {
    if (!editor) return
    editor.focus()
    try {
      editor.dispatchEvent(
        new InputEvent("beforeinput", {
          bubbles: true,
          cancelable: true,
          inputType: "insertText",
          data: text,
        }),
      )
    } catch {
      // ignore
    }
    editor.dispatchEvent(new Event("input", { bubbles: true }))
    editor.dispatchEvent(new Event("change", { bubbles: true }))
    editor.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }))
    editor.dispatchEvent(new Event("blur", { bubbles: true }))
  }

  if (editor) {
    editor.innerHTML = html
    syncTextarea()
    syncEditorEvents()
    await delay.delay(200)
    if (hasContent()) return
  }

  const jquery = window.$ || window.jQuery
  if (jquery && typeof jquery.fn.froalaEditor === "function") {
    const targets = [textarea, editor].filter(Boolean)
    for (const target of targets) {
      try {
        jquery(target).froalaEditor("html.set", html)
        syncTextarea()
        syncEditorEvents()
        await delay.delay(200)
        if (hasContent()) return
      } catch {
        // ignore
      }
      try {
        const froala = jquery(target).data("froala.editor")
        if (
          froala &&
          froala.html &&
          typeof froala.html.set === "function" &&
          (froala.html.set(html),
          syncTextarea(),
          syncEditorEvents(),
          await delay.delay(200),
          hasContent())
        ) {
          return
        }
      } catch {
        // ignore
      }
    }
  }
}

export async function preFillForm() {
  await delay.delay(500)
}

export function normalizeEducationRecords(records) {
  if (!records || !Array.isArray(records)) return []
  return records.map((record) => {
    const isCurrent =
      record.isCurrent === true ||
      String(record.isCurrent).toLowerCase() === "true"
    return isCurrent &&
      record.End !== undefined &&
      record.End !== null &&
      String(record.End).trim() !== ""
      ? { ...record, End: "present" }
      : record
  })
}

export function orderWorkExperienceByDom(rules, records, normalizeFn) {
  const normalized = normalizeFn(records)
  if (!Array.isArray(rules) || rules.length === 0) return normalized
  if (!Array.isArray(normalized) || normalized.length === 0) return []

  const byEmployer = new Map()
  for (const record of normalized) {
    const employer = normalizers.getEmployerFromRecord(record)
    if (!byEmployer.has(employer)) byEmployer.set(employer, [])
    byEmployer.get(employer).push(record)
  }

  const remainingGroups = () =>
    Array.from(byEmployer.entries()).filter(([, list]) => list.length > 0)

  const ordered = []
  for (const rule of rules) {
    let picked
    const titleChild = rule?.children?.find((child) => {
      const input = child?.$input
      return input && input.name === "title"
    })
    const titleInput = titleChild?.$input
    const employerWrapper = titleInput?.closest(".employer_wrapper")
    const employerInput = employerWrapper?.querySelector(
      'input[name="employer"]',
    )
    const employerValue = String(employerInput?.value ?? "").trim()

    if (
      employerValue &&
      byEmployer.has(employerValue) &&
      byEmployer.get(employerValue).length
    ) {
      picked = byEmployer.get(employerValue).shift()
    } else {
      const groups = remainingGroups()
      if (groups.length) picked = groups[0][1].shift()
    }
    if (picked) ordered.push(picked)
  }

  const leftovers = remainingGroups().flatMap(([, list]) => list)
  if (ordered.length < rules.length && leftovers.length) {
    ordered.push(...leftovers.slice(0, rules.length - ordered.length))
  }
  return ordered.slice(0, rules.length)
}

export async function clickElementAndWait(selector, options) {
  const {
    waitForSelector,
    timeoutMs = 3000,
    pollMs = 100,
    postClickDelayMs = 0,
  } = options || {}
  const element = document.querySelector(selector)
  if (!element) return false

  try {
    element.focus?.()
  } catch {
    // ignore
  }

  const eventInit = {
    bubbles: true,
    cancelable: true,
    view: window,
    button: 0,
  }
  try {
    element.dispatchEvent(new MouseEvent("mousedown", eventInit))
    element.dispatchEvent(new MouseEvent("mouseup", eventInit))
    element.dispatchEvent(new MouseEvent("click", eventInit))
  } catch {
    // ignore
  }
  try {
    element.click()
  } catch {
    // ignore
  }

  if (postClickDelayMs > 0) await delay.delay(postClickDelayMs)
  if (!waitForSelector) return true

  const started = Date.now()
  while (Date.now() - started < timeoutMs) {
    if (document.querySelector(waitForSelector)) return true
    await delay.delay(pollMs)
  }
  return !!document.querySelector(waitForSelector)
}

export async function clickSeeButton(selector) {
  await clickElementAndWait(selector, {
    waitForSelector: selector,
    postClickDelayMs: 500,
  })
}

export async function addEmploymentFormElements(records) {
  if (!records || records.length === 0) return

  const byEmployer = new Map()
  for (const record of records) {
    const employer = normalizers.getEmployerFromRecord(record)
    if (!byEmployer.has(employer)) byEmployer.set(employer, [])
    byEmployer.get(employer).push(record)
  }

  const employerCount = byEmployer.size
  const existing = document.querySelectorAll(".employer_wrapper").length
  if (!(existing >= employerCount) && employerCount > 1) {
    const addButton = queryFirst([
      "#add_employer",
      "a#add_employer",
      '[id="add_employer"]',
      'a.js-btn[href="#"]',
      'a:contains("Add Employer")',
    ])
    if (addButton) {
      await clickUntilCount(addButton, ".employer_wrapper", employerCount)
    }
  }

  await delay.delay(500)

  const wrappers = Array.from(document.querySelectorAll(".employer_wrapper"))
  let wrapperIndex = 0
  for (const [, group] of byEmployer.entries()) {
    const titles = new Set()
    for (const record of group) {
      const title =
        record.Title ||
        record.title ||
        record.JobTitle ||
        record.jobTitle ||
        record.Position ||
        record.position ||
        ""
      if (title) titles.add(title)
    }
    const titleCount = titles.size
    if (titleCount > 1) {
      if (wrapperIndex >= wrappers.length) {
        wrapperIndex++
        continue
      }
      const wrapper = wrappers[wrapperIndex]
      const addTitle = wrapper.querySelector("a.js-add-title")
      if (addTitle) {
        await clickUntilCount(addTitle, 'input[name="title"]', titleCount, {
          root: wrapper,
          delayAfterClick: 300,
        })
      }
    }
    wrapperIndex++
  }

  await delay.delay(500)
}

export async function addEducationFormElements(records) {
  if (!records || records.length === 0) return
  const needed = records.length
  const existing = document.querySelectorAll(
    '[data-context="education-row"]',
  ).length
  if (!(existing >= needed) && needed > 1) {
    const addButton = document.getElementById("add_edu_button")
    if (addButton) {
      await clickUntilCount(
        addButton,
        '[data-context="education-row"]',
        needed,
      )
    }
  }
  await delay.delay(500)
}

export function cleanRules(rules) {
  const cleaned = []
  let seenEmployment = false
  let seenEducation = false
  for (const rule of rules) {
    if (rule.type === enums.FIELD_TYPE.EMPLOYMENT) {
      if (!seenEmployment) {
        cleaned.push(rule)
        seenEmployment = true
      }
    } else if (rule.type === enums.FIELD_TYPE.EDUCATION) {
      if (!seenEducation) {
        cleaned.push(rule)
        seenEducation = true
      }
    } else {
      cleaned.push(rule)
    }
  }
  return cleaned
}
