// @ts-nocheck
/**
 * Kula — DOM fill operations (inputs, sections, resume, cover letter).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as answerMethods from "../../methods/answer.js"
import * as observer from "../../methods/observer.js"
import * as delay from "../../../utils/delay.js"
import * as phoneCountryCode from "./phone-country-code.ts"

export function getKulaSectionAddButton(sectionLabel) {
  const xpath = `//button[normalize-space(text())='Add' and ancestor::div[contains(@class, 'chakra-form-control')]//p[normalize-space(text())='${sectionLabel}']]`
  return document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null,
  ).singleNodeValue
}

export async function preFillForm() {
  const applicationFormButton = Array.from(
    document.querySelectorAll("button, a, [role='button']"),
  ).find((el) => /application form/i.test(el.textContent || ""))
  if (applicationFormButton) {
    applicationFormButton.click()
    await delay.delay(300)
  }

  const applyButton = Array.from(
    document.querySelectorAll("button, a, [role='button']"),
  ).find((el) => /apply for this position/i.test(el.textContent || ""))
  if (applyButton) {
    applyButton.click()
    await delay.delay(500)
  }

  const educationSections = document.querySelectorAll(
    'div[data-test-id="education"]',
  )
  if (educationSections.length === 0) {
    const addEducation = getKulaSectionAddButton("Education")
    if (addEducation) {
      addEducation.click()
      await delay.delay(500)
    }
  }

  const experienceSections = document.querySelectorAll(
    'div[data-test-id="experience"]',
  )
  if (experienceSections.length === 0) {
    const addExperience = getKulaSectionAddButton("Experience")
    if (addExperience) {
      addExperience.click()
      await delay.delay(500)
    }
  }
}

function getFileInput(inputId) {
  return document.querySelector(`input[type="file"]#${inputId}`)
}

function getFileFormControl(inputId) {
  return getFileInput(inputId)?.closest(
    ".chakra-form-control, [class*='form-control']",
  )
}

function getUploadedFileContainer(inputId) {
  const control = getFileFormControl(inputId)
  if (!control) return null

  const uploadedLabel = Array.from(
    control.querySelectorAll("div, p, span"),
  ).find((el) => /^uploaded$/i.test(el.textContent?.trim() || ""))
  if (!uploadedLabel) return null

  let parent = uploadedLabel.parentElement
  while (parent && parent !== control) {
    if (parent.querySelector("button")) return parent
    parent = parent.parentElement
  }
  return uploadedLabel.parentElement
}

function getUploadedFileDeleteTrigger(inputId) {
  const container = getUploadedFileContainer(inputId)
  if (!container) return null

  const explicit = container.querySelector(
    '[aria-label*="delete" i], [aria-label*="remove" i], button[title*="delete" i], button[title*="remove" i]',
  )
  if (explicit) return explicit

  const lastChild = container.lastElementChild
  return lastChild &&
    lastChild !== container &&
    (lastChild.querySelector("svg") || lastChild.childElementCount > 0)
    ? lastChild
    : null
}

function isFileInputRequired(inputId) {
  const input = getFileInput(inputId)
  if (!input) return false
  if (input.required || input.getAttribute("aria-required") === "true") {
    return true
  }
  const label = document.querySelector(`label[for="${inputId}"]`)
  return /[*\uff0a]/.test(label?.textContent || "")
}

function isUploadRequired(inputId) {
  return inputId === "cover_letter" || isFileInputRequired(inputId)
}

export function getKulaCoverLetterStatus() {
  const input = getFileInput("cover_letter")
  return input ? "required" : ""
}

async function clearExistingUpload(inputId) {
  if (!getUploadedFileContainer(inputId)) return true

  const deleteTrigger = getUploadedFileDeleteTrigger(inputId)
  if (!deleteTrigger) {
    console.warn(`[kula] Failed to find delete trigger for ${inputId}`)
    return false
  }

  deleteTrigger.click()
  const cleared = await observer.waitForCondition(
    () => !getUploadedFileContainer(inputId),
    { timeout: 4000, interval: 100, observeTarget: document.body },
  )
  if (cleared) await delay.delay(150)
  return cleared
}

async function uploadFileById(
  inputId,
  fileBlob,
  updateFieldRequiredStatus,
  updateFilledProgress,
  updateMissedProgress,
  label,
) {
  updateFieldRequiredStatus({ label, required: isUploadRequired(inputId) })

  const cleared = await clearExistingUpload(inputId)
  if (!cleared) {
    updateMissedProgress(label)
    return false
  }

  const inputReady = await observer.waitForCondition(
    () => !!getFileInput(inputId),
    { timeout: 4000, interval: 100, observeTarget: document.body },
  )
  if (!inputReady) {
    updateMissedProgress(label)
    return false
  }

  const input = getFileInput(inputId)
  if (!input?.files) {
    updateMissedProgress(label)
    return false
  }

  input.files = fileBlob.files
  input.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: false }),
  )

  const uploaded = await observer.waitForCondition(
    () =>
      !!getUploadedFileContainer(inputId) || !!getFileInput(inputId)?.files?.length,
    { timeout: 4000, interval: 100, observeTarget: document.body },
  )

  if (uploaded) {
    updateFilledProgress(label)
    return true
  }
  updateMissedProgress(label)
  return false
}

const MONTH_NAME_TO_INDEX = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
}

const MONTH_DISPLAY = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

function parseMonthYear(value) {
  const match = value.trim().match(/^([A-Za-z]+)\s+(\d{4})$/)
  if (!match) return null
  const monthIndex = MONTH_NAME_TO_INDEX[match[1].toLowerCase()]
  const year = Number(match[2])
  return monthIndex != null && Number.isFinite(year)
    ? {
        displayValue: `${MONTH_DISPLAY[monthIndex]} ${year}`,
        monthIndex,
        year,
      }
    : null
}

function isKulaDateField(input) {
  return (
    input.tagName.toLowerCase() === "input" &&
    (input.classList.contains("kula-date-field-input-trigger") ||
      input.closest(".kula-date-field-shell") !== null ||
      input.closest(".react-datepicker-wrapper") !== null)
  )
}

function getDatePickerPopper(input) {
  const shell = input.closest(".kula-date-field-shell")
  return (
    shell?.querySelector(".react-datepicker-popper") ||
    document.querySelector(".react-datepicker-popper")
  )
}

function getPickerYear(popper) {
  const header =
    popper.querySelector(".react-datepicker-year-header")?.textContent || ""
  const match = header.match(/\b(\d{4})\b/)
  return match ? Number(match[1]) : null
}

async function navigatePickerToYear(popper, targetYear) {
  for (let attempt = 0; attempt < 30; attempt++) {
    const currentYear = getPickerYear(popper)
    if (!currentYear) return false
    if (currentYear === targetYear) return true

    const direction = targetYear < currentYear ? "previous" : "next"
    const button = popper.querySelector(
      `.react-datepicker__navigation--${direction}`,
    )
    if (!button) return false
    button.click()
    await delay.delay(120)
  }
  return getPickerYear(popper) === targetYear
}

function findMonthCell(popper, parsed) {
  const cells = Array.from(
    popper.querySelectorAll(".react-datepicker__month-text"),
  )
  return (
    cells.find((cell) => {
      const className = String(cell.className)
      const ariaLabel = cell.getAttribute("aria-label") || ""
      const disabled =
        cell.getAttribute("aria-disabled") === "true" ||
        className.includes("react-datepicker__month-text--disabled")
      return (
        !disabled &&
        className.includes(
          `react-datepicker__month-${parsed.monthIndex}`,
        ) &&
        (!ariaLabel || ariaLabel.includes(String(parsed.year)))
      )
    }) || null
  )
}

async function fillMonthYearDatePicker(input, value) {
  const parsed = parseMonthYear(value)
  if (!parsed) return false

  input.focus()
  input.click()

  const opened = await observer.waitForCondition(
    () => !!getDatePickerPopper(input),
    { timeout: 3000, interval: 100, observeTarget: document.body },
  )
  if (!opened) return false

  const popper = getDatePickerPopper(input)
  if (!popper) return false

  const navigated = await navigatePickerToYear(popper, parsed.year)
  if (!navigated) return false

  const monthCell = findMonthCell(popper, parsed)
  if (!monthCell) return false

  monthCell.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  monthCell.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  monthCell.click()

  return await observer.waitForCondition(
    () => input.value.trim() === parsed.displayValue,
    { timeout: 1500, interval: 100, observeTarget: document.body },
  )
}

export async function fillInputTextField(input, value) {
  if (!input) return
  if (isKulaDateField(input) && (await fillMonthYearDatePicker(input, value))) {
    return
  }

  input.focus()
  const proto =
    input instanceof HTMLTextAreaElement
      ? HTMLTextAreaElement.prototype
      : HTMLInputElement.prototype
  const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set
  if (setter) {
    setter.call(input, value || "")
  } else {
    input.value = value || ""
  }
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
  await delay.delay(80)
  input.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "Escape",
      keyCode: 27,
      code: "Escape",
      bubbles: true,
      cancelable: true,
    }),
  )
  await delay.delay(50)
  document.body.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  document.body.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  document.body.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true }),
  )
  await delay.delay(50)
}

export async function fillPhoneField(rule, value) {
  const input = rule.$input
  if (!input) return
  const digits = value.replace(/\D/g, "") || value
  await fillInputTextField(input, digits)
}

export async function fillSelectField(rule, values) {
  const value = values?.[0]
  if (!value) return

  const input = rule.$input
  if (!input) return

  if (
    rule.label === phoneCountryCode.KULA_PHONE_COUNTRY_CODE_LABEL &&
    input.tagName.toLowerCase() === "button"
  ) {
    return await phoneCountryCode.fillKulaPhoneCountryCode(input, value)
  }

  if (input.tagName.toLowerCase() === "select") {
    const select = input
    value.toLowerCase().trim()
    const match = choiceMatch.findExactChoice(
      Array.from(select.options),
      value,
      (option) => option.textContent,
      (option) => option.value,
    )
    if (match) {
      select.value = match.value
      select.dispatchEvent(new Event("change", { bubbles: true }))
      select.dispatchEvent(new Event("input", { bubbles: true }))
    }
    return
  }

  const combobox = input
  const isReadonly =
    combobox.getAttribute("aria-readonly") === "true" ||
    combobox.inputMode === "none"

  combobox.focus()
  await delay.delay(120)
  combobox.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "ArrowDown",
      keyCode: 40,
      bubbles: true,
    }),
  )
  await delay.delay(350)

  if (!isReadonly) {
    const setter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      "value",
    )?.set
    if (setter) {
      setter.call(combobox, value)
    } else {
      combobox.value = value
    }
    combobox.dispatchEvent(new Event("input", { bubbles: true }))
    combobox.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(400)
  }

  const container = combobox.closest('[class*="-container"]')
  let menu =
    container?.querySelector('[class*="-menu"]') ||
    container?.querySelector('[role="listbox"]')
  if (!menu) {
    menu =
      document.querySelector('[class*="-menu"]') ||
      document.querySelector('[role="listbox"]')
  }

  if (menu) {
    const options = Array.from(
      menu.querySelectorAll(
        '[class*="-option"], [role="option"], li, button',
      ),
    ).filter((el) => (el.textContent || "").trim().length > 0)

    if (options.length > 0) {
      value.toLowerCase().trim()
      const match = choiceMatch.findExactChoice(
        options,
        value,
        (el) => el.textContent,
      )
      if (match) {
        match.dispatchEvent(
          new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
        )
        await delay.delay(50)
        match.dispatchEvent(
          new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
        )
        match.dispatchEvent(
          new MouseEvent("click", { bubbles: true, cancelable: true }),
        )
        await delay.delay(100)
        return
      }
    }
  }

  combobox.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "Enter",
      keyCode: 13,
      bubbles: true,
    }),
  )
  await delay.delay(100)
}

export async function fillSearchField(rule, values) {
  const value = values?.[0]
  if (!value) return

  const input = rule.$input
  if (!input) return

  const companyContainer = input.closest('[data-test-id="company"]')
  const isCompanyField = !!companyContainer
  const setter = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    "value",
  )?.set

  const findOpenMenu = () => {
    const popovers = Array.from(
      (companyContainer || document).querySelectorAll(
        '.chakra-popover__content, [class*="popover__content"], section[role="dialog"]',
      ),
    )
    for (const popover of popovers) {
      const style = getComputedStyle(popover)
      if (
        style.visibility !== "hidden" &&
        style.display !== "none" &&
        parseFloat(style.opacity || "1") > 0.1
      ) {
        return popover
      }
    }

    if (isCompanyField) return null

    const container = input.closest('[class*="-container"]')
    return (
      container?.querySelector('[class*="-menu"]') ||
      container?.querySelector('[role="listbox"]') ||
      document.querySelector('[class*="-menu"]:not([style*="display: none"])') ||
      document.querySelector(
        '[role="listbox"]:not([style*="display: none"])',
      )
    )
  }

  const getOptions = (menu) => {
    if (isCompanyField) {
      return Array.from(menu.children).filter((child) => {
        const text = child.textContent?.trim() || ""
        return (
          child.tagName.toLowerCase() === "div" &&
          !!child.querySelector("p") &&
          !!text &&
          !/^Add and select\b/i.test(text) &&
          child.getAttribute("aria-disabled") !== "true"
        )
      })
    }

    const candidates = Array.from(
      menu.querySelectorAll(
        'div[class*="css-"], p, span, [class*="-option"], [role="option"], li, button',
      ),
    )
    return candidates.filter((el) => {
      const text = (el.textContent || "").trim()
      if (text.length === 0) return false
      const nested = el.querySelector(
        'div[class*="css-"], section, article',
      )
      return !nested
    })
  }

  const clickOption = async (option) => {
    option.scrollIntoView({ block: "nearest", behavior: "auto" })
    await delay.delay(50)
    option.dispatchEvent(
      new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
    )
    await delay.delay(30)
    option.dispatchEvent(
      new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
    )
    option.dispatchEvent(
      new MouseEvent("click", { bubbles: true, cancelable: true }),
    )
    await delay.delay(200)
  }

  const maxAttempts = 3
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    input.focus()
    await delay.delay(150)
    if (setter) {
      setter.call(input, value)
    } else {
      input.value = value
    }
    input.dispatchEvent(new Event("input", { bubbles: true }))
    input.dispatchEvent(new Event("change", { bubbles: true }))

    let menu = null
    for (let wait = 0; wait < 15; wait++) {
      await delay.delay(200)
      if ((menu = findOpenMenu())) break
    }
    if (!menu) continue

    let options = []
    for (let settle = 0; settle < 10; settle++) {
      await delay.delay(200)
      const currentMenu = findOpenMenu()
      if (!currentMenu) {
        menu = null
        break
      }
      options = getOptions((menu = currentMenu))
      if (options.length > 0) break
    }
    if (!menu || options.length === 0) continue

    const match = choiceMatch.findExactChoice(
      options,
      value,
      (el) => el.textContent,
    )
    if (match && findOpenMenu()) {
      await clickOption(match)
      if (!findOpenMenu()) {
        if (
          isCompanyField &&
          (!choiceMatch.isExactChoiceMatch(input.value, match.textContent) ||
            input.getAttribute("aria-invalid") === "true")
        ) {
          break
        }
        if ((input.blur(), await delay.delay(100), isCompanyField)) {
          if (
            !choiceMatch.isExactChoiceMatch(input.value, match.textContent) ||
            input.getAttribute("aria-invalid") === "true" ||
            companyContainer?.querySelector(".chakra-form__error-message")
          ) {
            break
          }
          return true
        }
        return
      }

      if (
        !isCompanyField &&
        (input.dispatchEvent(
          new KeyboardEvent("keydown", {
            key: "Enter",
            keyCode: 13,
            bubbles: true,
          }),
        ),
        await delay.delay(150),
        !findOpenMenu())
      ) {
        input.blur()
        await delay.delay(100)
        return
      }
    }
  }

  if (isCompanyField) {
    if (setter) {
      setter.call(input, "")
    } else {
      input.value = ""
    }
    input.dispatchEvent(new Event("input", { bubbles: true }))
    input.dispatchEvent(new Event("change", { bubbles: true }))
    input.blur()
    return false
  }

  input.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "Enter",
      keyCode: 13,
      bubbles: true,
    }),
  )
  await delay.delay(150)
  input.blur()
  await delay.delay(100)
}

export async function fillCheckboxField(rule, values) {
  const selected = (values || []).map((value) => value.toLowerCase().trim())
  const checkboxes = rule.$checkboxs || []

  for (const checkbox of checkboxes) {
    const label = (
      checkbox.closest("label")?.textContent ||
      checkbox.getAttribute("aria-label") ||
      ""
    )
      .toLowerCase()
      .trim()
    const shouldCheck = selected.some((value) =>
      choiceMatch.isExactChoiceMatch(label, value),
    )
    if (shouldCheck && !checkbox.checked) {
      checkbox.click()
      checkbox.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(60)
    }
  }
}

export async function fillRadioGroupField(rule, values) {
  const value = values?.[0]?.toLowerCase().trim()
  if (!value) return

  const radios = Array.from(
    (rule.$radioParent || document).querySelectorAll('input[type="radio"]'),
  )
  const match = choiceMatch.findExactChoice(
    radios.filter((radio) => !radio.disabled),
    value,
    (radio) => radio.closest("label")?.textContent,
    (radio) => radio.value,
  )
  if (match) {
    match.click()
    match.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(60)
  }
}

export async function uploadResume(
  resumeInfo,
  updateFieldRequiredStatus,
  updateFilledProgress,
  updateMissedProgress,
) {
  await uploadFileById(
    "resume",
    await answerMethods.fetchPdfAsBlob(resumeInfo),
    updateFieldRequiredStatus,
    updateFilledProgress,
    updateMissedProgress,
    "Resume/CV",
  )
}

export async function uploadCoverLetter(
  coverLetter,
  updateFieldRequiredStatus,
  updateFilledProgress,
  updateMissedProgress,
) {
  await uploadFileById(
    "cover_letter",
    await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter),
    updateFieldRequiredStatus,
    updateFilledProgress,
    updateMissedProgress,
    "Cover Letter",
  )
}
