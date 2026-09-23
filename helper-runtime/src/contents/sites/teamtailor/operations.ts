// @ts-nocheck
/**
 * TeamTailor — DOM fill operations (inputs, selects, phone, uploads, consents).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as filler from "../../shared/filler.js"
import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as xpath from "../../../core/xpath.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as getTargetOrTimeoutModule from "../../../utils/getTargetOrTimeout.js"
import * as teamtailorPhone from "./phone-country-code.ts"

const getTargetOrTimeout = {
  default: getTargetOrTimeoutModule.default ?? getTargetOrTimeoutModule,
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  let input = null
  if (
    (input = document.querySelector(
      'input[type="file"][accept*=".pdf"][id="candidate_resume_remote_url"]',
    ))
  ) {
    await dom.uploadFiles(
      input,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      updateRequired,
      updateFilled,
      "Resume/CV",
    )
    const clearButton = await getTargetOrTimeout.default(
      () => {
        const button = document.querySelector(
          'button[title="Clear file selection"]',
        )
        return button && !button.disabled ? button : null
      },
      () => false,
      100,
    )
    if (clearButton) {
      await getTargetOrTimeout.default(
        () => {
          const button = document.querySelector(
            'button[title="Clear file selection"]',
          )
          return (!!button && !button.disabled) || null
        },
        () => false,
        2,
      )
    } else {
      console.warn(
        `[uploadResume] \u26A0\uFE0F Clear file selection button not found after upload (waited 10s), but continuing...`,
      )
    }
  } else {
    console.warn(`[uploadResume] \u26A0\uFE0F No resume input found`)
  }
}

export async function removeResume() {
  let clearButton = null
  if (
    (clearButton = document.querySelector(
      'button[title="Clear file selection"]',
    )) &&
    !clearButton.disabled
  ) {
    clearButton.click()
    await getTargetOrTimeout.default(
      () => {
        const button = document.querySelector(
          'button[title="Clear file selection"]',
        )
        return !button || null
      },
      () => false,
      3,
    )
    const deleteIcon = document.querySelector(
      "button.upload-module_icon-delete__t1SoB",
    )
    if (deleteIcon) {
      await getTargetOrTimeout.default(
        () => {
          const button = document.querySelector(
            "button.upload-module_icon-delete__t1SoB",
          )
          return !button || null
        },
        () => false,
        5,
      )
    }
  }
}

export async function fillInputTextField(input, value, phoneCountryAnswer) {
  const isDateInput = input instanceof HTMLInputElement && input.type === "date"
  if (isDateInput && value.toLowerCase().includes("immediately")) {
    const now = /* @__PURE__ */ new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const day = String(now.getDate()).padStart(2, "0")
    value = `${year}-${month}-${day}`
  }

  const isTelInput = input instanceof HTMLInputElement && input.type === "tel"
  if (isTelInput) {
    value = phoneCountryCode.toNationalPhoneValue(value, phoneCountryAnswer)
  }

  input.focus()
  input.dispatchEvent(new FocusEvent("focusin", { bubbles: true }))
  await getTargetOrTimeout.default(
    () => document.activeElement === input || null,
    () => false,
    1,
  )

  const valueSetter = Object.getOwnPropertyDescriptor(
    input instanceof HTMLInputElement
      ? window.HTMLInputElement.prototype
      : window.HTMLTextAreaElement.prototype,
    "value",
  )?.set

  if (valueSetter) valueSetter.call(input, "")
  else input.value = ""
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
  await getTargetOrTimeout.default(
    () => input.value === "" || null,
    () => false,
    1,
  )

  if (valueSetter) valueSetter.call(input, value)
  else input.value = value
  input.dispatchEvent(new Event("input", { bubbles: true, composed: true }))
  input.dispatchEvent(new Event("change", { bubbles: true, composed: true }))
  input.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true }))
  input.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }))
  input.dispatchEvent(new KeyboardEvent("keypress", { bubbles: true }))
  await getTargetOrTimeout.default(
    () => input.value === value || null,
    () => false,
    1,
  )

  input.dispatchEvent(new FocusEvent("focusout", { bubbles: true }))
  await getTargetOrTimeout.default(() => true, () => false, 1)
  input.blur()
  await getTargetOrTimeout.default(
    () => document.activeElement !== input || null,
    () => false,
    1,
  )

  const actualValue = input.value
  if (actualValue !== value) {
    console.warn("[fillInputTextField] Value mismatch! Retrying...")
    if (valueSetter) valueSetter.call(input, value)
    else input.value = value
    input.dispatchEvent(new Event("input", { bubbles: true }))
    input.dispatchEvent(new Event("change", { bubbles: true }))
    await getTargetOrTimeout.default(
      () => input.value === value || null,
      () => false,
      1,
    )
  }
}

export async function fillSelectField(rule, values) {
  if (!values || values.length === 0) return
  const target = Array.isArray(values) ? values?.[0] || "" : values
  const input = rule.$input
  if (!input) return

  if (input instanceof HTMLButtonElement) {
    input.focus()
    await getTargetOrTimeout.default(
      () => document.activeElement === input || null,
      () => false,
      1,
    )
    input.click()
    await getTargetOrTimeout.default(
      () => {
        const sibling = input.nextElementSibling
        return sibling && sibling.tagName === "DIV" ? sibling : null
      },
      () => false,
      3,
    )

    const menu = input.nextElementSibling
    if (!menu || menu.tagName !== "DIV") return

    if (rule.label === "Phone Country Code") {
      const closeMenu = () => {
        input.click()
      }
      const option = teamtailorPhone.findTeamtailorPhoneCountryOption(
        menu,
        target,
      )
      if (!option) {
        console.warn(
          `[fillSelectField] No unambiguous phone country option for: "${target}"`,
        )
        closeMenu()
        return
      }
      const alreadySelected =
        option.getAttribute("aria-selected") === "true" ||
        option.classList?.contains("iti__active")
      if (alreadySelected) {
        closeMenu()
        return
      }
      option.scrollIntoView?.({ block: "nearest" })
      option.click()
      await getTargetOrTimeout.default(
        () =>
          menu.style.display === "none" || menu.offsetHeight === 0 || null,
        () => false,
        2,
      )
      return
    }

    const buttons = menu.querySelectorAll("button")
    if (buttons.length === 0) return

    let matched = null
    for (const button of buttons) {
      const labelDiv = button.querySelector("div")
      const labelText = labelDiv?.textContent?.trim() || ""
      if (choiceMatch.isExactChoiceMatch(labelText, target)) {
        matched = button
        break
      }
    }

    if (matched) {
      matched.click()
      await getTargetOrTimeout.default(
        () => {
          const sibling = input.nextElementSibling
          return !sibling || sibling.style.display === "none" || null
        },
        () => false,
        2,
      )
    } else {
      console.warn("[fillSelectField] No exact match, clicking first option")
      const first = buttons[0]
      const labelDiv = first.querySelector("div")
      labelDiv?.textContent?.trim()
      first.click()
      await getTargetOrTimeout.default(
        () => {
          const sibling = input.nextElementSibling
          return !sibling || sibling.style.display === "none" || null
        },
        () => false,
        2,
      )
    }
    return
  }

  if (input instanceof HTMLSelectElement) {
    input.focus()
    await getTargetOrTimeout.default(
      () => document.activeElement === input || null,
      () => false,
      1,
    )
    const option = xpath
      .getOrderedNodesSafe(".//option", input)
      .find(
        (node) =>
          node.textContent.trim().toLowerCase() === target.toLowerCase() ||
          node.value.toLowerCase() === target.toLowerCase(),
      )
    if (option) {
      input.value = option.value
      input.dispatchEvent(new Event("input", { bubbles: true }))
      input.dispatchEvent(new Event("change", { bubbles: true }))
      await getTargetOrTimeout.default(
        () => input.value === option.value || null,
        () => false,
        1,
      )
      input.blur()
      await getTargetOrTimeout.default(
        () => document.activeElement !== input || null,
        () => false,
        1,
      )
    } else {
      throw new filler.FillError(
        `(Select) Option not found: "${target}" for label: "${rule.label}"`,
      )
    }
  }
}

export async function fillCheckboxField(_rule, values) {
  if (values && values.length !== 0) {
    for (const value of values) {
      let checkbox = null
      const checkboxes = xpath.getOrderedNodesSafe(
        ".//input[@type='checkbox']",
      )
      checkbox =
        choiceMatch.findExactChoice(
          checkboxes,
          value,
          (node) =>
            (node.labels?.[0] || node.closest("label"))?.textContent ||
            node.nextElementSibling?.textContent,
          (node) => node.value,
        ) || null
      if (checkbox && !checkbox.checked) {
        checkbox.focus()
        await getTargetOrTimeout.default(
          () => document.activeElement === checkbox || null,
          () => false,
          1,
        )
        checkbox.click()
        await getTargetOrTimeout.default(
          () => !!checkbox.checked || null,
          () => false,
          1,
        )
        checkbox.blur()
        await getTargetOrTimeout.default(
          () => document.activeElement !== checkbox || null,
          () => false,
          1,
        )
      }
    }
  }
}

export async function fillRadioGroupFiled(rule, values) {
  const target = values?.[0]
  if (!target) {
    console.warn("[fillRadioGroupFiled] No value provided")
    return
  }

  let matched = null
  if (rule.$radioParent) {
    const radios = xpath.getOrderedNodesSafe(
      './/input[@type="radio"]',
      rule.$radioParent,
    )
    for (const radio of radios) {
      const label = xpath.getFirstOrderedNodeSafe(
        `//label[@for="${radio.id}"]`,
      )
      const labelText = label?.textContent?.trim() || radio.value || ""
      if (
        choiceMatch.isExactChoiceMatch(labelText, target) ||
        choiceMatch.isExactChoiceMatch(radio.value, target)
      ) {
        matched = radio
        break
      }
    }
  }

  if (matched && !matched.checked) {
    matched.focus()
    await getTargetOrTimeout.default(
      () => document.activeElement === matched || null,
      () => false,
      1,
    )
    matched.click()
    await getTargetOrTimeout.default(
      () => !!matched.checked || null,
      () => false,
      1,
    )
    matched.blur()
    await getTargetOrTimeout.default(
      () => document.activeElement !== matched || null,
      () => false,
      1,
    )
  } else if (!matched) {
    console.error(`[fillRadioGroupFiled] \u274C No radio found for: "${target}"`)
    throw new filler.FillError(
      `(Radio) No option "${target}" found for label: "${rule.label}"`,
    )
  }
}

export async function checkAllConsentCheckboxes() {
  const checkboxes = document.querySelectorAll(
    'input[name="candidate[consent_given]"], input[name="candidate[consent_given_future_jobs]"]',
  )
  if (checkboxes.length === 0) {
    console.warn(
      `[checkAllConsentCheckboxes] \u26A0\uFE0F No consent checkboxes found`,
    )
    return
  }
  for (let index = 0; index < checkboxes.length; index++) {
    const checkbox = checkboxes[index]
    if (!checkbox.checked) {
      checkbox.focus()
      await getTargetOrTimeout.default(
        () => document.activeElement === checkbox || null,
        () => false,
        1,
      )
      checkbox.click()
      await getTargetOrTimeout.default(
        () => !!checkbox.checked || null,
        () => false,
        1,
      )
      checkbox.blur()
      await getTargetOrTimeout.default(
        () => document.activeElement !== checkbox || null,
        () => false,
        1,
      )
    }
  }
}
