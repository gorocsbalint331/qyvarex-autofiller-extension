// @ts-nocheck
/**
 * Careers Page DOM fill operations (inputs, flatpickr dates, resume, sections).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as answer from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as delay from "../../../utils/delay.js"
import * as careersAnswer from "./answer.ts"
import * as rules from "./rules.ts"

export function querySelectorAllInDocumentAndShadows(selector) {
  const results = []
  const seen = new Set()

  const walk = (root) => {
    root.querySelectorAll(selector).forEach((el) => {
      if (!seen.has(el)) {
        seen.add(el)
        results.push(el)
      }
    })
    root.querySelectorAll("*").forEach((el) => {
      const shadow = el.shadowRoot
      if (shadow) walk(shadow)
    })
  }

  walk(document)
  return results
}

export function querySelectorInDocumentAndShadows(selector) {
  const matches = querySelectorAllInDocumentAndShadows(selector)
  return matches.length > 0 ? matches[0] : null
}

export async function fillInputTextField(input, value) {
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
}

export async function fillSelectField(rule, value) {
  const input = rule.$input
  if (input.tagName !== "SELECT") return

  const selected = Array.isArray(value) ? value[0] : value
  for (let i = 0; i < input.options.length; i++) {
    const option = input.options[i]
    const text = option.textContent?.trim() || option.value
    if (text === selected || option.value === selected) {
      input.selectedIndex = i
      input.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(100)
      return
    }
  }
}

export async function fillCheckboxField(rule, value) {
  const checkboxes = rule.$checkboxs
  if (checkboxes && checkboxes.length > 1) {
    const wanted = (Array.isArray(value) ? value : [value])
      .map((v) => String(v).toLowerCase().trim())
      .filter(Boolean)

    for (const checkbox of checkboxes) {
      const label = checkbox.closest("label")
      const optionText = (
        label?.textContent ||
        checkbox.getAttribute("aria-label") ||
        checkbox.value ||
        ""
      )
        .toLowerCase()
        .trim()
      const matches = wanted.some((w) =>
        choiceMatch.isExactChoiceMatch(optionText, w),
      )
      if (matches && !checkbox.checked) {
        checkbox.click()
        await delay.delay(80)
      } else if (!matches && checkbox.checked) {
        checkbox.click()
        await delay.delay(80)
      }
    }
    return
  }

  const input = rule.$input
  const raw = Array.isArray(value) ? value[0] : value
  const shouldCheck =
    raw === true ||
    raw === "Yes" ||
    raw === "true" ||
    String(raw).toLowerCase() === "yes"

  const root = input.getRootNode()
  const customCheckbox =
    input.parentElement?.querySelector(
      'button[role="checkbox"][data-testid="m-checkbox"]',
    ) ||
    ("querySelector" in root
      ? root.querySelector('button[role="checkbox"][data-testid="m-checkbox"]')
      : null)

  const isChecked = customCheckbox
    ? customCheckbox.getAttribute("aria-checked") === "true"
    : input.checked

  if (isChecked !== shouldCheck) {
    const target = customCheckbox || input
    target.click()
    await delay.delay(100)
  }
}

export async function fillRadioGroupFiled(rule, value) {
  const selected = Array.isArray(value) ? value[0] : value
  const parent = rule.$radioParent
  const radios = parent
    ? Array.from(parent.querySelectorAll('input[type="radio"]'))
    : []

  for (const radio of radios) {
    const radioValue = radio.value || radio.getAttribute("value")
    const siblingText = radio.nextElementSibling?.textContent?.trim() || ""
    if (radioValue === selected || siblingText === selected || radio.id === selected) {
      radio.click()
      await delay.delay(100)
      return
    }
  }
}

export async function uploadResume(resumeInfo, updateFieldRequiredStatus, updateFilledProgress) {
  const fileInputs = querySelectorAllInDocumentAndShadows('input[type="file"]')
  const input = fileInputs[0]
  if (!input) {
    console.warn("No resume input found")
    return
  }

  const blob = await answer.fetchPdfAsBlob(resumeInfo)
  console.debug("[careers-page][resume] blob ready", {
    fileCount: blob.files.length,
  })
  console.debug("[careers-page][resume] DOM upload started")
  await dom.uploadFiles(
    input,
    blob,
    updateFieldRequiredStatus,
    updateFilledProgress,
    "Resume/CV",
  )
  console.debug("[careers-page][resume] DOM upload completed", {
    selectedFileCount: input.files?.length || 0,
  })
  if (!input.files?.length) {
    console.warn("[careers-page][resume] file input has no selected file")
  }
}

export async function removeResume() {
  const buttons = querySelectorAllInDocumentAndShadows(
    'button[aria-label="Delete"], button[class*="delete"]',
  )
  const button = buttons[0]
  if (button) {
    button.click()
    await delay.delay(500)
  }
}

export async function fillDateField(rule, rawValue) {
  const normalized = rawValue.trim().replace(/-/g, "/")
  const parts = normalized.split("/")
  let year = 0
  let monthIndex = 0
  let day = 1

  if (parts.length === 3) {
    if (/^\d{4}$/.test(parts[0])) {
      year = parseInt(parts[0], 10)
      monthIndex = parseInt(parts[1], 10) - 1
      day = parseInt(parts[2], 10)
    } else if (/^\d{4}$/.test(parts[2])) {
      monthIndex = parseInt(parts[0], 10) - 1
      day = parseInt(parts[1], 10)
      year = parseInt(parts[2], 10)
    } else {
      console.warn(
        "Invalid date format, expected MM/DD/YYYY, YYYY-MM-DD, YYYY/MM/DD, YYYY-MM, YYYY/MM or YYYY:",
        rawValue,
      )
      return
    }
  } else if (parts.length === 2) {
    if (/^\d{4}$/.test(parts[0])) {
      year = parseInt(parts[0], 10)
      monthIndex = parseInt(parts[1], 10) - 1
    } else if (/^\d{4}$/.test(parts[1])) {
      monthIndex = parseInt(parts[0], 10) - 1
      year = parseInt(parts[1], 10)
    } else {
      console.warn(
        "Invalid date format, expected MM/DD/YYYY, YYYY-MM-DD, YYYY/MM/DD, YYYY-MM, YYYY/MM or YYYY:",
        rawValue,
      )
      return
    }
  } else if (parts.length === 1 && /^\d{4}$/.test(parts[0])) {
    year = parseInt(parts[0], 10)
    monthIndex = 0
    day = 1
  } else {
    console.warn(
      "Invalid date format, expected MM/DD/YYYY, YYYY-MM-DD, YYYY/MM/DD, YYYY-MM, YYYY/MM or YYYY:",
      rawValue,
    )
    return
  }

  if (!Number.isFinite(day) || day < 1 || day > 31) {
    console.warn("Invalid day in date:", rawValue)
    return
  }

  const monthName = careersAnswer.MONTH_NAMES[monthIndex]
  if (!monthName) {
    console.warn("Invalid month in date:", rawValue)
    return
  }

  const input = rule.$input
  const inputMeta = {
    label: rule.label,
    name: input.name,
    placeholder: input.placeholder,
    className: input.className,
    readOnly: input.readOnly,
  }

  const findOpenCalendar = () => {
    const open = Array.from(
      document.querySelectorAll(".flatpickr-calendar.open"),
    )
    if (open.length > 0) return open[open.length - 1]

    const visible = Array.from(
      document.querySelectorAll(".flatpickr-calendar"),
    ).filter((el) => el.offsetParent !== null)
    return visible.length > 0 ? visible[visible.length - 1] : null
  }

  let calendar = null
  let openAttempt = -1
  let pollAttempt = -1

  for (let attempt = 0; attempt < 4; attempt++) {
    input.focus()
    input.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
    input.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
    input.click()

    for (let poll = 0; poll < 6; poll++) {
      calendar = findOpenCalendar()
      if (calendar) {
        openAttempt = attempt
        pollAttempt = poll
        break
      }
      await delay.delay(100)
    }
    if (calendar) break
  }

  if (!calendar) {
    console.warn(
      "flatpickr calendar not found after click retries, falling back to direct input",
      {
        input: inputMeta,
        target: { year, month: monthIndex, day },
      },
    )
    await fillInputTextField(input, rawValue)
    return
  }

  const yearInput = calendar.querySelector("input.numInput.cur-year")
  if (yearInput) {
    yearInput.value = String(year)
    yearInput.dispatchEvent(new Event("input", { bubbles: true }))
    yearInput.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(200)
  }

  const monthSelect = calendar.querySelector(
    "select.flatpickr-monthDropdown-months",
  )
  const availableMonths = monthSelect
    ? Array.from(monthSelect.options).map((opt) => opt.value)
    : []

  if (monthSelect && !availableMonths.includes(String(monthIndex))) {
    console.warn("[careers-page][date] target month not available", {
      input: inputMeta,
      targetMonth: monthIndex,
      availableMonths,
    })
  }

  if (monthSelect) {
    monthSelect.value = String(monthIndex)
    monthSelect.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(200)
  }

  const ariaLabel = `${monthName} ${day}, ${year}`
  const dayCell = calendar.querySelector(
    `.flatpickr-day:not(.nextMonthDay):not(.prevMonthDay)[aria-label="${ariaLabel}"]`,
  )

  if (dayCell) {
    if (dayCell.classList.contains("flatpickr-disabled")) {
      console.warn("[careers-page][date] target day is disabled", {
        input: inputMeta,
        ariaLabel,
        className: dayCell.className,
      })
    }
    dayCell.click()
    await delay.delay(200)
  } else {
    const exact = calendar.querySelector(
      `.flatpickr-day[aria-label="${ariaLabel}"]`,
    )
    const sampleAriaLabels = Array.from(
      calendar.querySelectorAll(".flatpickr-day[aria-label]"),
    )
      .slice(0, 14)
      .map((el) => el.getAttribute("aria-label"))

    console.warn("[careers-page][date] Day cell not found for aria-label", {
      input: inputMeta,
      ariaLabel,
      exactMatchedButOutOfMonthOrDisabled: !!exact,
      exactClassName: exact?.className || "",
      sampleAriaLabels,
    })
    await fillInputTextField(input, rawValue)
  }
}

export async function fillPhoneField(rule, value) {
  const input = rule.$input
  const phoneRoot = input.closest(".PhoneInput")

  if (phoneRoot) {
    const countryButton = phoneRoot.querySelector('button[type="button"]')
    if (countryButton) {
      const usIcon = countryButton.querySelector('svg[title="US"]')
      if (!usIcon) {
        countryButton.click()
        await delay.delay(300)
        const usOption = document.querySelector(
          '[role="option"][data-country="US"], [role="option"][data-value="US"], li:has(svg[title="US"])',
        )
        if (usOption) {
          usOption.click()
          await delay.delay(200)
        } else {
          console.warn("US/Canada option not found in country selector")
        }
      }
    }
    await fillInputTextField(input, value)
  } else {
    await fillInputTextField(input, value)
  }
}

export async function clickExpandButton(selector) {
  const el = document.querySelector(selector)
  if (el) {
    el.click()
    await delay.delay(500)
    return true
  }
  console.warn(`Element not found for selector: "${selector}"`)
  return false
}

export async function addEducationSection(count) {
  if (!(count <= 0)) {
    for (let i = 0; i < count; i++) {
      const formGroup = Array.from(
        document.querySelectorAll(".form-group"),
      ).find((group) => rules.detectEduExpType(group) === "education")
      const buttons = (formGroup || document).querySelectorAll("button")
      let addButton = null

      for (const button of buttons) {
        const text = button.textContent?.trim().toLowerCase() || ""
        if (text.includes("add") && text.includes("education")) {
          addButton = button
          break
        }
      }

      if (addButton) {
        addButton.click()
        await delay.delay(500)
      } else {
        console.warn("Add Education button not found")
        break
      }
    }
  }
}

export async function addEmploymentSection(count) {
  if (!(count <= 0)) {
    for (let i = 0; i < count; i++) {
      const formGroup = Array.from(
        document.querySelectorAll(".form-group"),
      ).find((group) => rules.detectEduExpType(group) === "experience")
      const buttons = (formGroup || document).querySelectorAll("button")
      let addButton = null

      for (const button of buttons) {
        const text = button.textContent?.trim().toLowerCase() || ""
        if (text.includes("add") && text.includes("experience")) {
          addButton = button
          break
        }
      }

      if (addButton) {
        addButton.click()
        await delay.delay(500)
      } else {
        console.warn("Add Experience button not found")
        break
      }
    }
  }
}

export async function clickSaveButton(section) {
  const items = document.querySelectorAll(".education-experience-item")
  const target = section || items[items.length - 1]
  if (!target) return false

  const saveButton = Array.from(target.querySelectorAll("button")).find(
    (button) => {
      const text = button.textContent?.trim().toLowerCase() || ""
      return text === "save"
    },
  )

  if (saveButton) {
    saveButton.click()
    await delay.delay(500)
    return true
  }

  console.warn("Save button not found in education-experience-item")
  return false
}

export async function preFillForm() {
  await delay.delay(500)
  try {
    const formGroups = querySelectorAllInDocumentAndShadows(".form-group")
    const salaryGroup = formGroups.find((group) => {
      const label =
        group.querySelector(":scope > label")?.textContent?.toLowerCase() || ""
      return (
        label.includes("salary desired") ||
        label.includes("salary expectations")
      )
    })

    if (salaryGroup) {
      const currency = salaryGroup.querySelector("#expected_currency")
      const frequency = salaryGroup.querySelector("#expected_frequency")
      if (currency) {
        currency.value = "1"
        currency.dispatchEvent(new Event("change", { bubbles: true }))
      }
      if (frequency) {
        frequency.value = "month"
        frequency.dispatchEvent(new Event("change", { bubbles: true }))
      }
    }
  } catch {
    // ignore prefill errors
  }
}
