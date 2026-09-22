// @ts-nocheck
/**
 * ADP MyJobs DOM fill operations (inputs, selects, phone, resume, employment).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as answer from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as filler from "../../shared/filler.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeoutMod from "../../../utils/getTargetOrTimeout.js"
import * as adpCountry from "../adp-workforcenow/country.ts"

const RESUME_GROUP_SELECTOR =
  'adp-form-group[data-name="resume"], adp-form-group[id$="__group__resume"]'
const RESUME_UPLOAD_BUTTON_SELECTOR =
  'sdf-button[aria-label^="upload" i], [role="button"][aria-label^="upload" i], sdf-button[icon="action-refresh"], sdf-button[icon="action-upload"]'
const RESUME_PREVIEW_BUTTON_SELECTOR =
  'sdf-button[aria-label^="open resume" i], [role="button"][aria-label^="open resume" i], sdf-button[icon="action-show"]'
const FILE_INPUT_SELECTOR = 'input[type="file"]'
const FOCUS_PANE_SELECTOR = "sdf-focus-pane"
const SAVE_BUTTON_SELECTOR =
  'sdf-button[aria-label="save" i], button[aria-label="save" i], [role="button"][aria-label="save" i]'

async function setNativeInputValue(input, value) {
  dom.triggerEvents(input, ["focus", "mousedown", "mouseup"])
  input.value = value
  dom.triggerEvents(input, ["input", "change"])
  await delay.delay(300)
}

function getOwnerWindow(el) {
  let node = el
  return node?.ownerDocument?.defaultView || window
}

function createWindowEvent(el, type, init) {
  let win = getOwnerWindow(el)
  return new win.Event(type, init)
}

function createWindowCustomEvent(el, type, init) {
  let win = getOwnerWindow(el)
  return new win.CustomEvent(type, init)
}

export async function preFillForm() {
  await delay.delay(200)
  let page = document.querySelector(
    '.page-content-container[aria-label="Employment History"]',
  )
  if (page) {
    let repeatingForm = page.querySelector("rm-repeating-form")
    let hasEmployerFields =
      !!repeatingForm?.querySelector(
        "sdf-input, sdf-select-simple, sdf-radio-group, sdf-checkbox",
      ) &&
      !!repeatingForm?.querySelector(
        "adp-form-group label.form-control-label:not(.form-control-label-hidden)",
      )
    if (!hasEmployerFields) {
      let addButton =
        repeatingForm?.querySelector(
          'sdf-button[aria-label*="Add employer" i], sdf-button[aria-label*="Add Employer" i]',
        ) ||
        Array.from(repeatingForm?.querySelectorAll("sdf-button") || []).find(
          (btn) =>
            (btn.textContent || "").toLowerCase().includes("add employer"),
        ) ||
        null
      if (addButton) {
        dom.triggerEvents(addButton, ["mousedown", "mouseup"])
        try {
          let win = getOwnerWindow(addButton)
          addButton.dispatchEvent(
            new win.MouseEvent("click", {
              bubbles: true,
              composed: true,
              cancelable: true,
            }),
          )
        } catch {
        }
        try {
          addButton.click?.()
        } catch {
        }
        let startedAt = Date.now()
        for (; Date.now() - startedAt < 3e3; ) {
          let ready = !!repeatingForm?.querySelector(
            "adp-form-group label.form-control-label:not(.form-control-label-hidden)",
          )
          if (ready) break
          await delay.delay(150)
        }
      }
    }
  }
}

export async function ensureEmploymentEmployerCount(desiredCount) {
  if (!desiredCount || desiredCount <= 0) return
  let page = document.querySelector(
    '.page-content-container[aria-label="Employment History"]',
  )
  if (!page) return
  let repeatingForm = page.querySelector("rm-repeating-form")
  if (!repeatingForm) return

  let countEmployerBoxes = () => {
    let boxes = Array.from(repeatingForm.querySelectorAll("sdf-expandable-box"))
    let employers = boxes.filter((box) => {
      let header =
        (box.querySelector('[slot="header"]')?.textContent || "")
          .replace(/\s+/g, " ")
          .trim()
          .toLowerCase() || ""
      return header.includes("employer")
    })
    return employers.length
  }

  let maxEmployerIndexFromDataName = () => {
    let groups = Array.from(
      repeatingForm.querySelectorAll("adp-form-group[data-name]"),
    )
    let maxIndex = 0
    for (let group of groups) {
      let dataName = group.getAttribute("data-name") || ""
      let match = dataName.match(/_(\d+)\s*$/)
      if (match) {
        let index = parseInt(match[1], 10)
        Number.isNaN(index) || (maxIndex = Math.max(maxIndex, index))
      }
    }
    return maxIndex
  }

  let countEmployers = () => {
    let boxCount = countEmployerBoxes()
    if (boxCount > 0) return boxCount
    let indexCount = maxEmployerIndexFromDataName()
    if (indexCount > 0) return indexCount
    let removeButtons = Array.from(
      repeatingForm.querySelectorAll("sdf-button"),
    ).filter(
      (btn) =>
        ((btn.getAttribute("aria-label") || "").toLowerCase().includes("remove") ||
          (btn.textContent || "").toLowerCase().includes("remove")) &&
        true !== btn.hidden,
    )
    return removeButtons.length > 0
      ? removeButtons.length
      : repeatingForm.querySelector(
            "adp-form-group label.form-control-label:not(.form-control-label-hidden)",
          )
        ? 1
        : 0
  }

  let currentCount = countEmployers()
  let toAdd = Math.max(0, desiredCount - currentCount)
  if (0 !== toAdd)
    for (let i = 0; i < toAdd; i++) {
      let addButton = findAddEmployerButton(repeatingForm)
      if (!addButton) break
      let beforeCount = countEmployers()
      await clickAddEmployerButton(addButton)
      let waitStarted = Date.now()
      for (; Date.now() - waitStarted < 5e3; ) {
        let afterCount = countEmployers()
        if (afterCount > beforeCount) break
        await delay.delay(150)
      }
      if ((currentCount = countEmployers()) <= beforeCount) {
        let retryButton = findAddEmployerButton(repeatingForm)
        if (retryButton) {
          await clickAddEmployerButton(retryButton)
          let retryStarted = Date.now()
          for (; Date.now() - retryStarted < 5e3; ) {
            let afterRetry = countEmployers()
            if (afterRetry > beforeCount) break
            await delay.delay(150)
          }
          currentCount = countEmployers()
        }
      }
      if (currentCount >= desiredCount) break
    }
}

function findAddEmployerButton(repeatingForm) {
  let button =
    repeatingForm.querySelector(
      'sdf-button[aria-label*="Add employer" i], sdf-button[aria-label*="Add Employer" i]',
    ) ||
    Array.from(repeatingForm.querySelectorAll("sdf-button")).find((btn) =>
      (btn.textContent || "").toLowerCase().includes("add employer"),
    ) ||
    null
  return button
}

async function clickAddEmployerButton(button) {
  try {
    button.scrollIntoView?.({ block: "center", inline: "center" })
  } catch {
  }
  await delay.delay(80)
  let shadowTarget =
    button.shadowRoot?.querySelector("button") ||
    button.shadowRoot?.querySelector("[role='button']") ||
    null
  let clickTarget = shadowTarget || button
  dom.triggerEvents(button, ["mousedown", "mouseup"])
  try {
    let win = getOwnerWindow(clickTarget)
    clickTarget.dispatchEvent(
      new win.MouseEvent("click", {
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    )
  } catch {
  }
  try {
    clickTarget.click?.()
  } catch {
  }
  await delay.delay(120)
}

export async function uploadResume(resumeUrl, onFilled, onTracked) {
  let surface = getAdpMyJobsResumeUploadDom()
  if (
    console.debug("[ADP MyJobs][ResumeUpload] surface resolved", {
      hasGroup: !!surface.group,
      hasInput: !!surface.input,
      hasUploadButton: !!surface.uploadButton,
    }),
    !surface.input &&
      surface.uploadButton &&
      (clickUploadButton(surface.uploadButton), await delay.delay(300)),
    !surface.input
  ) {
    let waited = await getTargetOrTimeoutMod.default(
      () => {
        let next = getAdpMyJobsResumeUploadDom()
        return next.input ? next : null
      },
      () => false,
      80,
    )
    surface = waited || getAdpMyJobsResumeUploadDom()
  }
  let fileInput = surface.input
  if (!fileInput)
    return (
      console.warn("[ADP MyJobs][ResumeUpload] input not found", {
        hasGroup: !!surface.group,
        hasUploadButton: !!surface.uploadButton,
      }),
      false
    )
  try {
    let blob = await answer.fetchPdfAsBlob(resumeUrl)
    await dom.uploadFiles(
      fileInput,
      blob,
      () => {},
      () => {},
      "Resume/CV",
    )
  } catch (err) {
    return (
      console.error("[ADP MyJobs][ResumeUpload] file assignment failed", {
        reason: err instanceof Error ? err.message : "unknown",
      }),
      false
    )
  }
  let hasAttachedFile = (fileInput.files?.length || 0) > 0
  if (!hasAttachedFile)
    return (
      console.warn("[ADP MyJobs][ResumeUpload] input did not retain a file"),
      false
    )
  let saveButton = findEnabledSaveButtonForInput(fileInput)
  console.debug("[ADP MyJobs][ResumeUpload] save action resolved", {
    hasEnabledSaveButton: !!saveButton,
  })
  saveButton && (clickSaveButton(saveButton), await delay.delay(300))
  let readback = {
    hasGroup: false,
    hasCurrentInput: false,
    hasEnabledPreview: false,
  }
  let uploaded = !!(await getTargetOrTimeoutMod.default(
    () => {
      let next = getAdpMyJobsResumeUploadDom()
      return !!(readback = getResumeUploadReadback(next, hasAttachedFile))
        .hasEnabledPreview || null
    },
    () => false,
    100,
  ))
  return (
    console.debug("[ADP MyJobs][ResumeUpload] ADP readback", {
      uploaded,
      hasAttachedFile,
      ...readback,
    }),
    !!uploaded &&
      (onFilled({ label: "Resume/CV", required: true }),
      onTracked("Resume/CV"),
      true)
  )
}

export function getAdpMyJobsResumeUploadDom(root = document) {
  let group = queryDeep(RESUME_GROUP_SELECTOR, root)
  let searchRoot = group || root
  let uploadButton = queryDeep(RESUME_UPLOAD_BUTTON_SELECTOR, searchRoot)
  let inputInGroup = group ? queryDeep(FILE_INPUT_SELECTOR, group) : null
  let allFileInputs = queryAllDeep(FILE_INPUT_SELECTOR, root)
  return {
    group,
    input:
      inputInGroup ||
      (group || 1 !== allFileInputs.length ? null : allFileInputs[0]),
    uploadButton:
      uploadButton && isElementVisible(uploadButton) ? uploadButton : null,
  }
}

export function hasAdpMyJobsResumeUploadUI() {
  let { input, uploadButton } = getAdpMyJobsResumeUploadDom()
  return !!(input || uploadButton)
}

function clickUploadButton(button) {
  let inner = queryDeep("button, [role='button']", button)
  let target = inner || button
  dom.triggerEvents(target, ["mousedown", "mouseup", "click"])
  try {
    let win = getOwnerWindow(target)
    target.dispatchEvent(
      new win.MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        composed: true,
      }),
    )
  } catch {
  }
  try {
    target.click?.()
  } catch {
  }
}

function clickSaveButton(button) {
  let inner = queryDeep("button, [role='button']", button)
  let target = inner || button
  dom.triggerEvents(target, ["mousedown", "mouseup"])
  try {
    target.click?.()
  } catch {
  }
}

function findEnabledSaveButtonForInput(fileInput) {
  let pane = queryAllDeep(FOCUS_PANE_SELECTOR, document).find(
    (node) =>
      isElementVisible(node) && queryDeep(FILE_INPUT_SELECTOR, node) === fileInput,
  )
  if (!pane) return null
  let saveButton = queryDeep(SAVE_BUTTON_SELECTOR, pane)
  return saveButton &&
    isElementVisible(saveButton) &&
    !saveButton.hasAttribute("disabled") &&
    "true" !== saveButton.getAttribute("aria-disabled")
    ? saveButton
    : null
}

function getResumeUploadReadback({ group, input }, hasAttachedFile) {
  if (!group || !hasAttachedFile)
    return {
      hasGroup: !!group,
      hasCurrentInput: !!input,
      hasEnabledPreview: false,
    }
  let preview = queryDeep(RESUME_PREVIEW_BUTTON_SELECTOR, group)
  let hasEnabledPreview = !!(
    preview &&
    !preview.hasAttribute("disabled") &&
    "true" !== preview.getAttribute("aria-disabled")
  )
  return {
    hasGroup: true,
    hasCurrentInput: !!input,
    hasEnabledPreview,
  }
}

export async function removeResume() {
  let { group } = getAdpMyJobsResumeUploadDom()
  let deleteButton =
    (group &&
      queryAllDeep(
        'button[aria-label*="Delete"], button[aria-label*="Remove"], button[class*="delete"], button[class*="remove"], sdf-button[aria-label*="Delete"], sdf-button[aria-label*="Remove"]',
        group,
      ).find(
        (btn) =>
          !btn.hasAttribute("disabled") &&
          "true" !== btn.getAttribute("aria-disabled"),
      )) ||
    null
  if (deleteButton) {
    deleteButton.click()
    await delay.delay(500)
    let confirmButton =
      document.querySelector('button[class*="confirm"]') ||
      Array.from(document.querySelectorAll("button")).find((btn) => {
        let text = (btn.textContent || "").trim().toLowerCase()
        return "confirm" === text || "yes" === text || "ok" === text
      }) ||
      null
    confirmButton && (confirmButton.click(), await delay.delay(500))
  }
}

export async function fillInputTextField(field, value) {
  if (
    !(field instanceof HTMLInputElement) &&
    !(field instanceof HTMLTextAreaElement)
  ) {
    let host = field
    ;(host.tagName || "").toLowerCase()
    let nested = queryDeep("input, textarea", host)
    if (nested) return await fillInputTextField(nested, value)
    try {
      host.click()
    } catch {
    }
    await delay.delay(50)
    let nestedAfterClick = queryDeep("input, textarea", host)
    if (nestedAfterClick) {
      await setNativeInputValue(nestedAfterClick, value)
      blurField(nestedAfterClick)
      return
    }
    let didSet = setHostValue(host, value)
    dispatchInputChange(host, value)
    host.dispatchEvent(
      createWindowCustomEvent(host, "sdfInput", {
        bubbles: true,
        composed: true,
        detail: { value },
      }),
    )
    host.dispatchEvent(
      createWindowCustomEvent(host, "sdfChange", {
        bubbles: true,
        composed: true,
        detail: { value },
      }),
    )
    host.dispatchEvent(
      createWindowCustomEvent(host, "valueChange", {
        bubbles: true,
        composed: true,
        detail: value,
      }),
    )
    let win = getOwnerWindow(host)
    host.dispatchEvent(
      new win.KeyboardEvent("keydown", { bubbles: true, composed: true }),
    )
    host.dispatchEvent(
      new win.KeyboardEvent("keyup", { bubbles: true, composed: true }),
    )
    host.dispatchEvent(
      new win.FocusEvent("focusout", { bubbles: true, composed: true }),
    )
    try {
      host.blur?.()
    } catch {
    }
    return void (await delay.delay(didSet ? 120 : 200))
  }
  await setNativeInputValue(field, value)
  blurField(field)
  await delay.delay(80)
}

export async function fillDateField(field, rawValue) {
  let raw = Array.isArray(rawValue)
    ? String(rawValue[0] ?? "")
    : String(rawValue ?? "")
  if (!raw) return
  let formatted = formatDateForAdp(raw)
  try {
    field.click()
  } catch {
  }
  await delay.delay(50)
  let nested = queryDeep("input", field)
  if (nested) {
    await setNativeInputValue(nested, formatted)
    blurField(nested)
    return
  }
  try {
    field.value = formatted
  } catch {
  }
  try {
    field.setAttribute("value", formatted)
  } catch {
  }
  dom.triggerEvents(field, ["input", "change"])
  blurField(field)
  await delay.delay(200)
}

function formatDateForAdp(raw) {
  let trimmed = raw.trim()
  let isoDash = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})/)
  if (isoDash) return `${isoDash[2]}/${isoDash[3]}/${isoDash[1]}`
  let isoSlash = trimmed.match(/^(\d{4})\/(\d{2})\/(\d{2})/)
  if (isoSlash) return `${isoSlash[2]}/${isoSlash[3]}/${isoSlash[1]}`
  let us = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/)
  return us
    ? `${us[1].padStart(2, "0")}/${us[2].padStart(2, "0")}/${us[3]}`
    : trimmed
}

function setHostValue(host, value) {
  let didSet = false
  try {
    "value" in host && ((host.value = value), (didSet = true))
  } catch {
  }
  try {
    host.setAttribute("value", value)
    didSet = true
  } catch {
  }
  try {
    let api = host
    "function" == typeof api.setValue && (api.setValue(value), (didSet = true))
    "function" == typeof api.setAttributeValue &&
      (api.setAttributeValue(value), (didSet = true))
  } catch {
  }
  return didSet
}

function dispatchInputChange(el, value) {
  let win = getOwnerWindow(el)
  try {
    el.dispatchEvent(
      new win.InputEvent("input", {
        bubbles: true,
        composed: true,
        data: value,
        inputType: "insertText",
      }),
    )
  } catch {
    el.dispatchEvent(
      createWindowEvent(el, "input", { bubbles: true, composed: true }),
    )
  }
  el.dispatchEvent(
    createWindowEvent(el, "change", { bubbles: true, composed: true }),
  )
}

function blurField(el) {
  let win = getOwnerWindow(el)
  try {
    el.dispatchEvent(
      new win.FocusEvent("focusout", { bubbles: true, composed: true }),
    )
  } catch {
  }
  try {
    el.blur?.()
  } catch {
  }
}

export async function fillSelectField(field, answers) {
  let label = field.label
  let value = (answers?.[0] ?? "").trim()
  if (!value)
    throw new filler.FillError(
      `(Select) No value to select for label: "${label}" (backend may not have returned this field)`,
    )
  let input = resolveSelectInputForLabel(field.$input, label)
  if (!input)
    throw new filler.FillError(
      `(Select) Could not find field for label: "${label}"`,
    )
  if (
    "string" == typeof input.tagName &&
    "sdf-select-simple" === String(input.tagName).toLowerCase()
  ) {
    await selectSdfOption(input, value)
    return
  }
  if (input instanceof HTMLSelectElement) {
    input.focus()
    await delay.delay(100)
    let option = Array.from(input.options).find(
      (opt) =>
        opt.textContent?.trim().toLowerCase() === value.toLowerCase() ||
        opt.value.toLowerCase() === value.toLowerCase(),
    )
    if (option) {
      input.value = option.value
      input.dispatchEvent(
        createWindowEvent(input, "input", { bubbles: true }),
      )
      input.dispatchEvent(
        createWindowEvent(input, "change", { bubbles: true }),
      )
      await delay.delay(100)
      input.blur()
      await delay.delay(100)
    } else
      throw new filler.FillError(
        `(Select) Option not found: "${value}" for label: "${label}"`,
      )
    return
  }
  if (input instanceof HTMLInputElement) {
    input.focus()
    await delay.delay(150)
    let openButton = input.parentElement?.querySelector(
      'button[aria-label*="Open"], button[class*="dropdown"], button[class*="arrow"]',
    )
    openButton && (openButton.click(), await delay.delay(300))
    input.value = value
    input.dispatchEvent(createWindowEvent(input, "input", { bubbles: true }))
    await delay.delay(300)
    let listbox = document.querySelector('[role="listbox"]')
    if (listbox) {
      let options = xpath.getOrderedNodesSafe('.//*[@role="option"]', listbox)
      let matched = options.find((opt) => {
        let text = opt.textContent?.trim().toLowerCase() || ""
        return choiceMatch.isExactChoiceMatch(text, value.toLowerCase())
      })
      matched && (matched.click(), await delay.delay(200))
    }
    input.blur()
    await delay.delay(100)
  }
}

function findPhoneFormGroup(fromEl) {
  let root = fromEl.getRootNode?.()
  let host = root?.host
  let group = host?.closest?.("adp-form-group[data-name='phone']")
  return (
    group ||
    ("undefined" != typeof document
      ? document.querySelector("adp-form-group[data-name='phone']")
      : null)
  )
}

function getPhoneCountrySelect(fromEl) {
  let group = findPhoneFormGroup(fromEl)
  let phoneInput = group?.querySelector("sdf-phone-number-input")
  return phoneInput
    ? queryDeep('sdf-select-simple[embedded-context="phone-number"]', phoneInput)
    : fromEl
}

export function getCurrentAdpMyJobsPhoneInput(fromEl) {
  let group = findPhoneFormGroup(fromEl)
  let phoneHost = group?.querySelector("sdf-phone-number-input")
  let telInput = phoneHost
    ? queryDeep('input[type="tel"], input', phoneHost)
    : null
  return telInput || fromEl
}

function collectPhoneCountryOptions(selectEl) {
  return getSelectItems(selectEl)
    .map((item) => {
      let countryName =
        item.getAttribute("aria-label")?.trim() ||
        item.textContent?.replace(/\s+/g, " ").trim() ||
        ""
      let iso2 = item.getAttribute("value")?.trim().toLowerCase() || ""
      let country = phoneCountryCode.getCountryByIso2(iso2)
      return {
        countryName,
        dialCode: country?.dialCode || "",
        iso2,
        label: countryName,
        element: item,
      }
    })
    .filter((opt) => opt.countryName && opt.dialCode)
}

function makePhoneCountryMatcher(option) {
  let nameNorm = normalizeLabel(option.countryName)
  let isoNorm = normalizeLabel(option.iso2 || "")
  return (text, ariaLabel, value) =>
    [text, ariaLabel, value].some((candidate) => {
      let norm = normalizeLabel(candidate)
      return norm === nameNorm || norm === isoNorm
    })
}

function resolvePhoneCountryFallback(answerText) {
  let iso2 = phoneCountryCode.resolvePhoneCountryIso2({ answer: answerText })
  let country = phoneCountryCode.getCountryByIso2(iso2)
  return country
    ? {
        countryName: country.name,
        dialCode: country.dialCode,
        iso2: country.iso2,
        label: country.name,
        element: null,
      }
    : null
}

export async function fillAdpMyJobsPhoneCountryCode(field, answers) {
  if (field.label !== phoneCountryCode.PHONE_COUNTRY_CODE_LABEL) return false
  let answerText = String(answers?.[0] ?? "").trim()
  let selectEl = getPhoneCountrySelect(field.$input)
  let options = selectEl ? collectPhoneCountryOptions(selectEl) : []
  let matched = phoneCountryCode.findPhoneCountryOption(answerText, options, {
    bareDialPolicy: "reject-shared",
  })
  let fallback = matched ? null : resolvePhoneCountryFallback(answerText)
  let target = matched || fallback
  let matcher = target ? makePhoneCountryMatcher(target) : undefined
  let currentMatches = !!(
    selectEl &&
    target &&
    matcher &&
    isSelectValueSelected(selectEl, target.countryName, matcher)
  )
  if (
    console.debug("[ADP MyJobs][PhoneCountryCode] selection resolved", {
      hasAnswer: !!answerText,
      optionCount: options.length,
      targetFound: !!matched,
      fallbackTargetFound: !!fallback,
      currentMatches,
    }),
    !selectEl ||
      !target ||
      !matcher
  )
    return false
  if (currentMatches) return true
  await selectSdfOption(selectEl, target.countryName, matcher)
  let committed = isSelectValueSelected(
    selectEl,
    target.countryName,
    matcher,
  )
  return (
    console.debug("[ADP MyJobs][PhoneCountryCode] selection committed", {
      committed,
    }),
    committed
  )
}

export async function fillAdpMyJobsPhoneNumber(field, value) {
  let phoneInput = getCurrentAdpMyJobsPhoneInput(field)
  await fillInputTextField(phoneInput, value)
  let current = getCurrentAdpMyJobsPhoneInput(phoneInput)
  let expectedDigits = value.replace(/\D/g, "")
  let actual = String(current.value || "")
  let committed =
    expectedDigits.length > 0 &&
    actual.replace(/\D/g, "") === expectedDigits
  return (
    console.debug("[ADP MyJobs][PhoneCountryCode] national phone readback", {
      expectedLength: expectedDigits.length,
      actualLength: actual.replace(/\D/g, "").length,
      committed,
    }),
    committed
  )
}

async function fillContactSelectWithRestore(selectEl, value) {
  let previous = getSelectedSelectLabel(selectEl)
  try {
    await selectSdfOption(selectEl, value, makeAdpCountryMatcher(value))
  } catch (err) {
    throw (
      (await restoreSelectValue(
        selectEl,
        previous,
        makeAdpCountryMatcher(previous),
      )),
      err
    )
  }
}

export async function fillAutofillInfoContactLocationSelects({
  country,
  state,
}) {
  let result = { country: false, state: false }
  if (!country && !state) return result
  let countrySelect = getContactSelectByName("country")
  if (
    country &&
    countrySelect &&
    !isSelectValueSelected(
      countrySelect,
      country,
      makeAdpCountryMatcher(country),
    )
  ) {
    try {
      await fillContactSelectWithRestore(countrySelect, country)
    } catch (err) {
      console.warn("[ADP MyJobs] Failed to fill contact country:", err)
    }
    await delay.delay(600)
  }
  result.country = !!(
    country &&
    countrySelect &&
    isSelectValueSelected(
      countrySelect,
      country,
      makeAdpCountryMatcher(country),
    )
  )
  let stateSelect = getContactSelectByName("state")
  let countryReady = !country || result.country
  if (
    state &&
    stateSelect &&
    countryReady &&
    !isSelectValueSelected(stateSelect, state)
  )
    try {
      await selectSdfOption(stateSelect, state)
    } catch (err) {
      console.warn("[ADP MyJobs] Failed to fill contact state:", err)
    }
  return (
    (result.state = !!(
      state &&
      stateSelect &&
      isSelectValueSelected(stateSelect, state)
    )),
    result
  )
}

function getContactSelectByName(dataName) {
  return findSelectByDataName(dataName)
}

function findSelectByDataName(dataName) {
  let wanted = dataName.toLowerCase()
  let groups = Array.from(
    document.querySelectorAll("adp-form-group[data-name]"),
  ).filter(
    (group) => group.getAttribute("data-name")?.toLowerCase() === wanted,
  )
  let selects = groups.flatMap((group) =>
    Array.from(group.querySelectorAll("sdf-select-simple")),
  )
  return (
    selects.find((el) => isElementVisible(el)) ||
    selects.find((el) => el.isConnected) ||
    null
  )
}

function hasFormGroupDataName(el, dataName) {
  return (
    el?.closest?.("adp-form-group[data-name]")?.getAttribute?.("data-name")
      ?.toLowerCase?.() === dataName
  )
}

function isVisibleSelectForDataName(el, dataName) {
  return el && hasFormGroupDataName(el, dataName) && isElementVisible(el)
}

function isSelectValueSelected(selectEl, value, matcher) {
  let wanted = normalizeLabel(value)
  if (!wanted) return false
  let matches = (text, ariaLabel = "", attrValue = "") =>
    matcher
      ? matcher(text, ariaLabel, attrValue)
      : [text, ariaLabel, attrValue].some(
          (candidate) => normalizeLabel(candidate) === wanted,
        )
  let shadow = selectEl.shadowRoot
  let selectedLabel =
    shadow?.querySelector?.(
      "#selected-label span, [part='selected-label'] span, #selected-label",
    )?.textContent || ""
  if (matches(selectedLabel)) return true
  let selectedItems = Array.from(
    selectEl.querySelectorAll(
      'sdf-select-item[aria-selected="true"], sdf-select-item[selected]',
    ),
  )
  return selectedItems.some((item) =>
    matches(
      item.textContent || "",
      item.getAttribute("aria-label") || "",
      item.getAttribute("value") || "",
    ),
  )
}

function makeAdpCountryMatcher(answerText) {
  return (text, ariaLabel, value) =>
    [text, ariaLabel, value].some((candidate) =>
      adpCountry.isAdpCountryOptionMatch(answerText, candidate),
    )
}

function getSelectedSelectLabel(selectEl) {
  let shadow = selectEl.shadowRoot
  let label =
    shadow
      ?.querySelector?.(
        "#selected-label span, [part='selected-label'] span, #selected-label",
      )
      ?.textContent?.replace(/\s+/g, " ")
      .trim() || ""
  if (label) return label
  let selected =
    shadow?.querySelector?.(
      'sdf-select-item[aria-selected="true"], sdf-select-item[selected]',
    ) ||
    selectEl.querySelector(
      'sdf-select-item[aria-selected="true"], sdf-select-item[selected]',
    )
  return (
    selected?.textContent?.replace(/\s+/g, " ").trim() ||
    selected?.getAttribute("aria-label")?.trim() ||
    selected?.getAttribute("value")?.trim() ||
    ""
  )
}

async function restoreSelectValue(selectEl, previous, matcher) {
  if (!(!previous || isSelectValueSelected(selectEl, previous, matcher)))
    try {
      await selectSdfOption(selectEl, previous, matcher)
    } catch (err) {
      console.warn("[ADP MyJobs] Failed to restore contact country:", err)
    }
}

function normalizeLabel(text) {
  return text.replace(/\s+/g, " ").trim().toLowerCase()
}

function resolveSelectInputForLabel(input, label) {
  let fromLabel = labelToDataName(label)
  let fromDom =
    input
      ?.closest?.("adp-form-group[data-name]")
      ?.getAttribute?.("data-name")
      ?.toLowerCase?.() || ""
  let dataName = isCompatibleDataName(fromDom, fromLabel)
    ? fromDom
    : fromLabel || fromDom
  if (!dataName || isVisibleSelectForDataName(input, dataName)) return input
  let found = findSelectByDataName(dataName)
  return found || input
}

function isCompatibleDataName(dataName, expected) {
  return (
    !!dataName &&
    (!expected ||
      dataName === expected ||
      ("phonetype" === expected && /^phone\d*type$/.test(dataName)))
  )
}

function labelToDataName(label) {
  let normalized = label
    .replace(/\u00a0/g, " ")
    .replace(/\*/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
  return "country" === normalized
    ? "country"
    : "phone type" === normalized
      ? "phonetype"
      : "state" === normalized ||
          "province" === normalized ||
          "state/province" === normalized ||
          "state / province" === normalized ||
          "province/state" === normalized ||
          "province / state" === normalized
        ? "state"
        : ""
}

export async function fillCheckboxField(field, answers) {
  let label = field.label
  if (!answers || 0 === answers.length) return
  let checkboxes = field.$checkboxs || []
  if (0 !== checkboxes.length)
    for (let checkbox of checkboxes) {
      if (checkbox instanceof HTMLInputElement) {
        let input = checkbox
        let labelEl = findCheckboxLabel(input)
        let optionText = labelEl?.textContent?.trim().toLowerCase() || ""
        let shouldCheck = answers.some((answerItem) => {
          let answerText = String(answerItem).toLowerCase()
          return (
            choiceMatch.isExactChoiceMatch(optionText, answerText) ||
            (1 === checkboxes.length &&
              ["true", "yes", "y", "on", "1"].includes(answerText))
          )
        })
        input.checked !== shouldCheck &&
          (input.click(), await delay.delay(100))
        continue
      }
      let host = checkbox
      let isChecked = "true" === host.getAttribute("aria-checked")
      let optionLabel =
        host.getAttribute("label") ||
        host.textContent ||
        (1 === checkboxes.length ? label : "")
      let shouldSelect = answers.some(
        (answerItem) =>
          choiceMatch.isExactChoiceMatch(optionLabel, answerItem) ||
          (1 === checkboxes.length &&
            ["true", "yes", "y", "on", "1"].includes(
              String(answerItem).toLowerCase().trim(),
            )),
      )
      isChecked !== shouldSelect && (host.click(), await delay.delay(100))
    }
}

export async function fillRadioGroupFiled(field, answers) {
  let label = field.label
  let answerValue = answers?.[0]
  if (!answerValue) return
  let radios = field.$radios || []
  if (0 === radios.length) return
  let wanted = String(answerValue).trim().toLowerCase()
  let matched = choiceMatch.findExactChoice(
    radios,
    wanted,
    getRadioOptionLabel,
    (radio) => radio.getAttribute("value"),
  )
  if (!matched)
    throw new filler.FillError(
      `(Radio) No option "${answerValue}" found for label: "${label}"`,
    )
  let selected = matched
  let radioParent =
    field.$radioParent || selected.closest("sdf-radio-group") || selected
  let others = radios.filter((radio) => radio !== selected)
  await clickRadioOption(selected)
  let startedAt = Date.now()
  for (; Date.now() - startedAt < 1200; ) {
    let isChecked = "true" === selected.getAttribute("aria-checked")
    let othersUnchecked = others.every(
      (radio) => "true" !== radio.getAttribute("aria-checked"),
    )
    let groupValue = radioParent?.value
    if (isChecked && (othersUnchecked || groupValue)) break
    await delay.delay(60)
  }
  blurField(radioParent)
  await delay.delay(200)
}

function findCheckboxLabel(input) {
  if (input.id) {
    let byFor = document.querySelector(`label[for="${input.id}"]`)
    if (byFor) return byFor
  }
  let container = input.closest("label, div, fieldset")
  if (container) {
    let nested = container.querySelector("label")
    if (nested) return nested
  }
  return null
}

function getRadioOptionLabel(radio) {
  let ariaLabel = radio.getAttribute("aria-label")?.trim()
  if (ariaLabel) return ariaLabel
  let text = radio.textContent?.replace(/\s+/g, " ").trim()
  if (text) return text
  let describedBy = radio.getAttribute("aria-describedby") || ""
  let ids = describedBy.split(/\s+/).filter(Boolean)
  for (let id of ids) {
    let el = document.getElementById(id)
    let described = el?.textContent?.replace(/\s+/g, " ").trim()
    if (described) return described
  }
  let shadowText =
    radio.shadowRoot?.textContent?.replace(/\s+/g, " ").trim() || ""
  return shadowText || radio.getAttribute("value")?.trim() || ""
}

async function clickRadioOption(radio) {
  let shadow = radio.shadowRoot
  let inner =
    shadow?.querySelector('[role="radio"]') ||
    shadow?.querySelector("button") ||
    shadow?.querySelector("input") ||
    null
  let target = inner || radio
  dom.triggerEvents(target, ["focus", "mousedown", "mouseup"])
  try {
    let win = getOwnerWindow(target)
    target.dispatchEvent(
      new win.MouseEvent("click", {
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    )
  } catch {
  }
  try {
    target.click()
  } catch {
  }
  if (target !== radio) {
    try {
      let win = getOwnerWindow(radio)
      radio.dispatchEvent(
        new win.MouseEvent("click", {
          bubbles: true,
          composed: true,
          cancelable: true,
        }),
      )
    } catch {
    }
    try {
      radio.click()
    } catch {
    }
  }
  dom.triggerEvents(target, ["click", "change"])
  await delay.delay(120)
}

function findSelectListbox(docOrEl, selectEl) {
  let fromSelect = queryDeep(
    "sdf-floating-pane:not(.floating-pane-hidden) .floating-pane-content [role='listbox'], sdf-floating-pane:not(.floating-pane-hidden) .floating-pane-content #listbox, sdf-floating-pane:not(.floating-pane-hidden) .list.floating-pane-content [role='listbox'], [role='listbox'], #listbox",
    selectEl,
  )
  if (fromSelect) return fromSelect
  let fromDoc = queryDeep(
    "sdf-floating-pane:not(.floating-pane-hidden) .floating-pane-content [role='listbox'], sdf-floating-pane:not(.floating-pane-hidden) .floating-pane-content #listbox, .floating-pane-content [role='listbox'], .floating-pane-content #listbox, .list.floating-pane-content [role='listbox']",
    docOrEl,
  )
  if (fromDoc) return fromDoc
  let pane = queryDeep("sdf-floating-pane", selectEl)
  if (pane) {
    let inPane = queryDeep("[role='listbox'], #listbox", pane)
    if (inPane) return inPane
  }
  return (
    docOrEl.querySelector(".floating-pane-content #listbox") ||
    docOrEl.querySelector(".list.floating-pane-content [role='listbox']") ||
    docOrEl.querySelector(".floating-pane-content [role='listbox']") ||
    docOrEl.querySelector("[role='listbox']") ||
    queryDeep("[role='listbox']", selectEl)
  )
}

function findFilterInput(selectEl) {
  let filterSelector =
    'input[part="filter-input"], input#select-filter-input, input.filter, input[aria-label*="filter" i], input[placeholder*="Filter" i]'
  let inSelect = selectEl ? queryAllDeep(filterSelector, selectEl) : []
  let inDoc = queryAllDeep(
    `sdf-floating-pane:not(.floating-pane-hidden) ${filterSelector}, ${filterSelector}`,
    document,
  )
  let unique = [...inSelect, ...inDoc].filter(
    (el, index, arr) => arr.indexOf(el) === index,
  )
  return unique.find((el) => isElementVisible(el)) || null
}

function clearFilterInput(input) {
  try {
    input.select?.()
  } catch {
  }
  try {
    input.ownerDocument.execCommand?.("delete")
  } catch {
  }
  setInputValueNative(input, "")
}

function setInputValueNative(input, value) {
  let win = getOwnerWindow(input)
  let descriptor = Object.getOwnPropertyDescriptor(
    win.HTMLInputElement.prototype,
    "value",
  )
  descriptor?.set?.call(input, value)
}

function dispatchFilterEvents(input, filterText, selectEl, options = {}) {
  let win = getOwnerWindow(input)
  let data = options.data ?? filterText
  let key = options.key ?? (1 === data.length ? data : "Unidentified")
  let code = options.code ?? keyToCode(key)
  input.dispatchEvent(
    new win.KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      composed: true,
      key,
      code,
    }),
  )
  data &&
    input.dispatchEvent(
      new win.KeyboardEvent("keypress", {
        bubbles: true,
        cancelable: true,
        composed: true,
        key,
        code,
      }),
    )
  try {
    input.dispatchEvent(
      new win.InputEvent("beforeinput", {
        bubbles: true,
        cancelable: true,
        composed: true,
        data,
        inputType:
          options.inputType || (data ? "insertText" : "deleteContentBackward"),
      }),
    )
  } catch {
  }
  input.dispatchEvent(
    new win.InputEvent("input", {
      bubbles: true,
      cancelable: true,
      composed: true,
      data,
      inputType:
        options.inputType || (data ? "insertText" : "deleteContentBackward"),
    }),
  )
  input.dispatchEvent(
    new win.CustomEvent("sdfFilter", {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: filterText,
    }),
  )
  input.dispatchEvent(
    new win.CustomEvent("sdfFilter", {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        value: filterText,
        filterText,
        search: filterText,
      },
    }),
  )
  try {
    selectEl?.setAttribute("search", filterText)
  } catch {
  }
  selectEl?.dispatchEvent(
    new win.CustomEvent("sdfFilter", {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: filterText,
    }),
  )
  selectEl?.dispatchEvent(
    new win.CustomEvent("sdfFilter", {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        value: filterText,
        filterText,
        search: filterText,
      },
    }),
  )
  input.dispatchEvent(
    new win.KeyboardEvent("keyup", {
      bubbles: true,
      cancelable: true,
      composed: true,
      key,
      code,
    }),
  )
  input.dispatchEvent(
    new win.Event("change", {
      bubbles: true,
      cancelable: true,
      composed: true,
    }),
  )
}

function keyToCode(key) {
  return /^[a-z]$/i.test(key)
    ? `Key${key.toUpperCase()}`
    : /^[0-9]$/.test(key)
      ? `Digit${key}`
      : " " === key
        ? "Space"
        : "Backspace" === key
          ? "Backspace"
          : ""
}

function getVisibleSelectItemsInBody() {
  let items = queryAllDeep("sdf-select-item", document.body)
  let viewportWidth = document.documentElement.clientWidth
  let viewportHeight = document.documentElement.clientHeight
  return items.filter((item) => {
    let rect = item.getBoundingClientRect?.()
    return (
      !!rect &&
      !(rect.width <= 0) &&
      !(rect.height <= 0) &&
      rect.top < viewportHeight &&
      rect.left < viewportWidth &&
      rect.bottom > 0 &&
      rect.right > 0
    )
  })
}

function getSelectItems(selectEl) {
  let shadow = selectEl.shadowRoot
  let inShadow = shadow
    ? Array.from(shadow.querySelectorAll("sdf-select-item, [role='option']"))
    : []
  return inShadow.length > 0
    ? inShadow.filter((item) => {
        let text =
          item.textContent?.replace(/\s+/g, " ").trim() ||
          item.getAttribute("aria-label")?.trim() ||
          item.getAttribute("value")?.trim() ||
          ""
        return !!text
      })
    : queryAllDeep("sdf-select-item, [role='option']", selectEl)
}

function getListboxOptions(listbox) {
  let items = Array.from(listbox.querySelectorAll("sdf-select-item"))
  let options = Array.from(listbox.querySelectorAll("[role='option']"))
  return items.length > 0 ? items : options
}

function isElementVisible(el) {
  if (!el) return false
  let style = window.getComputedStyle(el)
  if ("none" === style.display || "hidden" === style.visibility) return false
  let rect = el.getBoundingClientRect?.()
  return !!rect && rect.width > 0 && rect.height > 0
}

function collectVisibleSelectOptions(selectEl) {
  let listbox = findSelectListbox(document, selectEl)
  if (isElementVisible(listbox)) {
    let options = getListboxOptions(listbox)
    if (options.length > 0) return options
  }
  let fromSelect = getSelectItems(selectEl).filter((item) =>
    isElementVisible(item),
  )
  return fromSelect.length > 0 ? fromSelect : getVisibleSelectItemsInBody()
}

async function selectSdfOption(selectEl, value, matcher) {
  let trimmed = value.trim()
  let lower = trimmed.toLowerCase()
  let filterInput = findVisibleInputIn(selectEl)
  let trigger = queryDeep(
    ".trigger-button[role='button'], [part='frame'][role='button'], [role='button'][aria-expanded], [part='input-container'], .select-input, sdf-icon.expansion-control, [part='expansion-trigger-control']",
    selectEl,
  )
  let openTarget =
    filterInput ||
    (trigger && isElementVisible(trigger) ? trigger : null) ||
    Array.from(selectEl.querySelectorAll("button")).find((btn) => {
      let id = (btn.id || "").toLowerCase()
      let aria = (btn.getAttribute("aria-label") || "").toLowerCase()
      return !id.includes("clear") && !aria.includes("clear")
    }) ||
    selectEl
  filterInput && (filterInput.focus(), await delay.delay(80))
  await clickElement(openTarget)
  await delay.delay(350)
  let listbox = findSelectListbox(document, selectEl)
  isElementVisible(listbox) ||
    (await clickElement(selectEl), await delay.delay(350))
  let options = []
  for (let attempt = 0; attempt < 30; attempt++) {
    let found = collectVisibleSelectOptions(selectEl)
    if (found.length > 0) {
      options = found
      break
    }
    let openListbox = findSelectListbox(document, selectEl)
    let listboxVisible = isElementVisible(openListbox)
    if (openListbox && listboxVisible) {
      let items = Array.from(openListbox.querySelectorAll("sdf-select-item"))
      let roleOptions = Array.from(
        openListbox.querySelectorAll("[role='option']"),
      )
      let listOptions = items.length > 0 ? items : roleOptions
      if (listOptions.length > 0) {
        options = listOptions
        break
      }
    }
    await delay.delay(100)
  }
  if (0 === options.length && (options = getVisibleSelectItemsInBody()), 0 === options.length)
    throw new filler.FillError(`(Select) No options found for: "${trimmed}"`)
  let index = findOptionIndex(options, trimmed, lower, matcher)
  if (index < 0) {
    await clearSelectFilterAndReopen(selectEl)
    let scrolled = await scrollToOptionInSelect(
      selectEl,
      trimmed,
      lower,
      matcher,
    )
    scrolled && ((options = [scrolled]), (index = 0))
  }
  if (index < 0) {
    let scrolled = await scrollUntilOptionFound(
      selectEl,
      trimmed,
      lower,
      matcher,
    )
    scrolled && ((options = [scrolled]), (index = 0))
  }
  if (index < 0)
    for (let attempt = 0; attempt < 35; attempt++) {
      let openListbox = findSelectListbox(document, selectEl)
      let visible = collectVisibleSelectOptions(selectEl)
      if (
        0 === visible.length &&
        openListbox &&
        isElementVisible(openListbox) &&
        visible.push(
          ...Array.from(
            openListbox.querySelectorAll("sdf-select-item, [role='option']"),
          ),
        ),
        0 === visible.length && visible.push(...getVisibleSelectItemsInBody()),
        visible.length > 0 &&
          (index = findOptionIndex(
            (options = visible),
            trimmed,
            lower,
            matcher,
          )) >= 0
      )
        break
      await delay.delay(100)
    }
  if (index < 0)
    throw (
      (document.body.click(),
      new filler.FillError(`(Select) Option "${value}" not found in list`))
    )
  let option = options[index]
  let optionValue = option.getAttribute("value")
  if (
    (await clickSelectOption(option, selectEl, optionValue),
    await delay.delay(400),
    !isSelectValueSelected(selectEl, trimmed, matcher))
  )
    throw new filler.FillError(`(Select) Option "${value}" was not selected`)
  closeSelectDropdowns(selectEl)
  blurField(selectEl)
}

async function clickElement(el) {
  try {
    el.scrollIntoView?.({ block: "center", inline: "nearest" })
  } catch {
  }
  await delay.delay(50)
  let win = getOwnerWindow(el)
  let eventInit = {
    bubbles: true,
    cancelable: true,
    composed: true,
    view: win,
  }
  try {
    el.dispatchEvent(new win.PointerEvent("pointerdown", eventInit))
    el.dispatchEvent(new win.PointerEvent("pointerup", eventInit))
  } catch {
  }
  try {
    el.dispatchEvent(new win.MouseEvent("mousedown", eventInit))
    el.dispatchEvent(new win.MouseEvent("mouseup", eventInit))
    el.dispatchEvent(new win.MouseEvent("click", eventInit))
  } catch {
    dom.triggerEvents(el, ["mousedown", "mouseup", "click"])
  }
}

async function clearSelectFilterAndReopen(selectEl) {
  let filterInput = findFilterInput(selectEl)
  if (!filterInput?.value) return
  let clearButton = findFilterClearButton(selectEl)
  clearButton &&
    (await clickElement(clearButton), await delay.delay(250))
  filterInput.value &&
    (clearFilterInput(filterInput),
    dispatchFilterEvents(filterInput, "", selectEl, {
      inputType: "deleteContentBackward",
    }),
    await delay.delay(250))
  closeSelectDropdowns(selectEl)
  await delay.delay(150)
  await clickElement(selectEl)
  await delay.delay(350)
}

function findFilterClearButton(selectEl) {
  let selector =
    'button.filter-input-clear, button[aria-label="[CLEAR_BUTTON]"], [role="button"].filter-input-clear'
  let buttons = queryAllDeep(selector, selectEl)
  return buttons.find((btn) => isElementVisible(btn)) || null
}

function findVisibleInputIn(selectEl) {
  let input = queryDeep("input", selectEl)
  return input && isElementVisible(input) ? input : null
}

async function scrollToOptionInSelect(selectEl, value, lower, matcher) {
  let items = getSelectItems(selectEl)
  let index = findOptionIndex(items, value, lower, matcher)
  if (index < 0) return null
  try {
    items[index].scrollIntoView({ block: "center", inline: "nearest" })
  } catch {
  }
  await scrollListToIndex(selectEl, index)
  await delay.delay(350)
  let visible = collectVisibleSelectOptions(selectEl)
  let visibleIndex = findOptionIndex(visible, value, lower, matcher)
  if (visibleIndex >= 0) return visible[visibleIndex]
  let item = items[index]
  return isElementVisible(item) ? item : null
}

async function scrollListToIndex(selectEl, index) {
  let listbox = findSelectListbox(document, selectEl)
  let options = collectVisibleSelectOptions(selectEl)
  let scrollParent = findScrollParent(listbox, options)
  let scroller = scrollParent || listbox
  if (!scroller || index < 0) return
  let heights = options
    .map((opt) => opt.getBoundingClientRect?.().height || 0)
    .filter((h) => h > 0)
  let itemHeight = heights[0] || 40
  let viewportHeight =
    scrollParent?.clientHeight || listbox?.clientHeight || 6 * itemHeight
  let scrollTop = Math.max(
    0,
    index * itemHeight - Math.floor(viewportHeight / 2),
  )
  try {
    scroller.scrollTop = scrollTop
    let win = getOwnerWindow(scroller)
    scroller.dispatchEvent(
      new win.WheelEvent("wheel", {
        bubbles: true,
        cancelable: true,
        composed: true,
        deltaY: scrollTop,
      }),
    )
    scroller.dispatchEvent(
      createWindowEvent(scroller, "scroll", { bubbles: true }),
    )
  } catch {
  }
  await delay.delay(250)
}

async function scrollUntilOptionFound(selectEl, value, lower, matcher) {
  clearSelectFilter(selectEl)
  await delay.delay(250)
  let sameFingerprintCount = 0
  let lastFingerprint = ""
  for (let attempt = 0; attempt < 80; attempt++) {
    let options = collectVisibleSelectOptions(selectEl)
    let index = findOptionIndex(options, value, lower, matcher)
    if (index >= 0) return options[index]
    let fingerprint = optionsFingerprint(options)
    if (
      ((sameFingerprintCount =
        fingerprint === lastFingerprint ? sameFingerprintCount + 1 : 0),
      (lastFingerprint = fingerprint),
      sameFingerprintCount >= 5)
    )
      break
    await scrollListDown(selectEl, options)
  }
  return null
}

function clearSelectFilter(selectEl) {
  let filterInput = queryDeep(
    'input[part="filter-input"], input#select-filter-input, input.filter, input[aria-label*="filter" i], input[placeholder*="Filter" i]',
    selectEl,
  )
  filterInput &&
    filterInput.value &&
    (setInputValueNative(filterInput, ""),
    dispatchFilterEvents(filterInput, "", selectEl, {
      inputType: "deleteContentBackward",
    }))
}

async function scrollListDown(selectEl, options) {
  let listbox = findSelectListbox(document, selectEl)
  let scrollParent = findScrollParent(listbox, options)
  let wheelTarget =
    scrollParent || listbox || options[options.length - 1] || selectEl
  let lastOption = options[options.length - 1]
  try {
    lastOption?.scrollIntoView({ block: "end", inline: "nearest" })
  } catch {
  }
  try {
    if (scrollParent) {
      let win = getOwnerWindow(scrollParent)
      scrollParent.scrollTop = Math.min(
        scrollParent.scrollHeight,
        scrollParent.scrollTop + Math.max(360, scrollParent.clientHeight),
      )
      scrollParent.dispatchEvent(
        new win.WheelEvent("wheel", {
          bubbles: true,
          cancelable: true,
          composed: true,
          deltaY: 900,
        }),
      )
      scrollParent.dispatchEvent(
        createWindowEvent(scrollParent, "scroll", { bubbles: true }),
      )
    } else
      listbox &&
        ((listbox.scrollTop = listbox.scrollHeight),
        listbox.dispatchEvent(
          createWindowEvent(listbox, "scroll", { bubbles: true }),
        ))
  } catch {
  }
  try {
    let win = getOwnerWindow(wheelTarget)
    wheelTarget.dispatchEvent(
      new win.WheelEvent("wheel", {
        bubbles: true,
        cancelable: true,
        composed: true,
        deltaY: 900,
      }),
    )
  } catch {
  }
  await delay.delay(350)
}

function findScrollParent(listbox, options) {
  let node =
    (listbox || options[options.length - 1])?.parentElement || null
  for (; node && node !== document.body; ) {
    let style = window.getComputedStyle(node)
    let canScroll =
      node.scrollHeight > node.clientHeight &&
      ["auto", "scroll", "overlay"].includes(style.overflowY)
    if (canScroll) return node
    node = node.parentElement
  }
  return null
}

function optionsFingerprint(options) {
  let tail = options
    .slice(-3)
    .map((opt) =>
      (opt.textContent || opt.getAttribute("aria-label") || "")
        .replace(/\s+/g, " ")
        .trim(),
    )
  return `${options.length}:${tail.join("|")}`
}

function closeSelectDropdowns(selectEl) {
  let win = getOwnerWindow(selectEl || document.body)
  try {
    document.dispatchEvent(
      new win.KeyboardEvent("keydown", {
        bubbles: true,
        cancelable: true,
        composed: true,
        key: "Escape",
        code: "Escape",
      }),
    )
    document.dispatchEvent(
      new win.KeyboardEvent("keyup", {
        bubbles: true,
        cancelable: true,
        composed: true,
        key: "Escape",
        code: "Escape",
      }),
    )
  } catch {
  }
  try {
    document.body.click()
  } catch {
  }
  let openSelects = Array.from(
    document.querySelectorAll("sdf-select-simple.open"),
  )
  for (let open of openSelects) {
    open.classList.remove("open")
    hideFloatingPanes(open)
    blurField(open)
  }
  selectEl?.classList.remove("open")
  selectEl && hideFloatingPanes(selectEl)
}

function hideFloatingPanes(root) {
  let panes = queryAllDeep("sdf-floating-pane", root)
  for (let pane of panes) {
    pane.classList.add("floating-pane-hidden")
    pane.setAttribute("aria-hidden", "true")
  }
}

async function clickSelectOption(option, _selectEl, _optionValue) {
  try {
    option.scrollIntoView({ block: "nearest", inline: "nearest" })
    await delay.delay(80)
    let span = option.querySelector("span")
    let target = span || option
    let win = getOwnerWindow(target)
    let eventInit = {
      bubbles: true,
      cancelable: true,
      composed: true,
      view: win,
    }
    try {
      target.dispatchEvent(new win.PointerEvent("pointerdown", eventInit))
      target.dispatchEvent(new win.PointerEvent("pointerup", eventInit))
    } catch {
    }
    try {
      target.dispatchEvent(new win.MouseEvent("mousedown", eventInit))
      target.dispatchEvent(new win.MouseEvent("mouseup", eventInit))
    } catch {
      dom.triggerEvents(target, ["mousedown", "mouseup"])
    }
    await delay.delay(50)
    try {
      target.dispatchEvent(
        new win.MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          composed: true,
          view: win,
        }),
      )
    } catch {
    }
    try {
      target.click()
    } catch {
    }
    if (span) {
      let optionWin = getOwnerWindow(option)
      try {
        option.dispatchEvent(
          new optionWin.MouseEvent("mousedown", {
            bubbles: true,
            cancelable: true,
            composed: true,
            view: optionWin,
          }),
        )
        option.dispatchEvent(
          new optionWin.MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            composed: true,
            view: optionWin,
          }),
        )
      } catch {
        dom.triggerEvents(option, ["mousedown", "click"])
      }
      option.click()
    }
    await delay.delay(150)
  } catch {
  }
}

function findOptionIndex(options, value, lower, matcher) {
  for (let i = 0; i < options.length; i++) {
    let option = options[i]
    let text = (option.textContent || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase()
    let aria = (option.getAttribute("aria-label") || "").trim().toLowerCase()
    let valueLower = (option.getAttribute("value") || "").trim().toLowerCase()
    let valueRaw = (option.getAttribute("value") || "").trim()
    if (
      matcher?.(option.textContent || "", option.getAttribute("aria-label") || "", valueRaw) ||
      (!matcher &&
        ((text && choiceMatch.isExactChoiceMatch(text, lower)) ||
          (aria && choiceMatch.isExactChoiceMatch(aria, lower)) ||
          (valueLower &&
            (valueLower === lower ||
              valueRaw === value ||
              choiceMatch.isExactChoiceMatch(valueLower, lower)))))
    )
      return i
  }
  return -1
}

function queryAllDeep(selector, root = document) {
  let start = root
  let matches = []
  let collect = (node) => {
    matches.push(...Array.from(node.querySelectorAll(selector)))
  }
  collect(start)
  let queue = []
  let enqueueChildren = (node) => {
    if (node instanceof ShadowRoot) {
      queue.push(...Array.from(node.children))
      return
    }
    node.shadowRoot && queue.push(node.shadowRoot)
    queue.push(...Array.from(node.children))
  }
  for (
    start instanceof Document
      ? queue.push(...Array.from(start.documentElement.children))
      : (start instanceof HTMLElement &&
          start.shadowRoot &&
          queue.push(start.shadowRoot),
        queue.push(...Array.from(start.children)));
    queue.length;
  ) {
    let next = queue.shift()
    collect(next)
    enqueueChildren(next)
  }
  return Array.from(new Set(matches))
}

function queryDeep(selector, root = document) {
  let start = root
  let direct = start.querySelector(selector)
  if (direct) return direct
  let queue = []
  let enqueueChildren = (node) => {
    if (node instanceof ShadowRoot) {
      queue.push(...Array.from(node.children))
      return
    }
    node.shadowRoot && queue.push(node.shadowRoot)
    queue.push(...Array.from(node.children))
  }
  for (
    start instanceof Document
      ? queue.push(...Array.from(start.documentElement.children))
      : start instanceof HTMLElement
        ? (start.shadowRoot && queue.push(start.shadowRoot),
          queue.push(...Array.from(start.children)))
        : start instanceof ShadowRoot &&
          queue.push(...Array.from(start.children));
    queue.length;
  ) {
    let next = queue.shift()
    let found = next.querySelector(selector)
    if (found) return found
    enqueueChildren(next)
  }
  return null
}
