// @ts-nocheck
/**
 * Lever — DOM fill operations (inputs, resume, location, selects).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as inputUtils from "../../crawler/utils/input.js"
import * as filler from "../../shared/filler.js"
import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"

export async function preFillForm() {
  const form = document.getElementById("job-application-form")
  if (form) {
    form.click()
    await delay.delay(500)
  }
}

export async function uploadResume(resumeInfo, onRequired, onFilled) {
  const input = document.querySelector(
    'input[type="file"][id="resume-upload-input"]',
  )
  if (input) {
    await dom.uploadFiles(
      input,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      onRequired,
      onFilled,
      "Resume/CV",
    )
  }
}

export async function removeResume() {
  const input = document.querySelector("input#resume-upload-input")
  const button = input?.closest("a.postings-btn")
  const hasFile = button?.classList.contains("has-file")
  if (input && hasFile) {
    input.value = ""
    input.dispatchEvent(new Event("change", { bubbles: true }))
  }
}

export async function fillInputTextField(input, value) {
  await inputUtils.fillDefaultInputField(input, value)
}

export async function fillSelectField(rule, values) {
  if (!values || values.length === 0) return

  const target = values[0]
  const label = rule.label
  let select = rule.$input

  if (!select) {
    const expr = `//*[contains(text(), ${xpath.escapeXPath(label)})]/parent::div/parent::div//select | //*[contains(text(), ${xpath.escapeXPath(label)})]/parent::div/parent::li//select`
    select = xpath.getFirstOrderedNodeSafe(expr)
  }

  if (!select) {
    throw new filler.FillError(
      `(Select) Could not find field for label: "${label}"`,
    )
  }

  const option = xpath
    .getOrderedNodesSafe(".//option", select)
    .find(
      (candidate) =>
        candidate.textContent.trim().toLowerCase() === target.toLowerCase() ||
        candidate.value.toLowerCase() === target.toLowerCase(),
    )

  if (option) {
    select.value = option.value
    select.dispatchEvent(new Event("change", { bubbles: true }))
    select.dispatchEvent(new Event("input", { bubbles: true }))
    await delay.delay(500)
  } else {
    console.warn(`(Select) No option "${target}" found for label: "${label}"`)
  }
}

async function ensureRadioChecked(radio) {
  if (radio.checked) return true

  const label = radio.closest("label")
  if (label) {
    label.click()
  } else {
    radio.click()
  }
  if (!radio.checked) radio.click()

  radio.dispatchEvent(
    new Event("input", { bubbles: true, cancelable: true }),
  )
  radio.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: true }),
  )
  await delay.delay(500)
  return radio.checked
}

export async function fillRadioGroupFiled(rule, values) {
  const label = rule.label
  const parent = rule.$radioParent
  if (!parent) {
    throw new filler.FillError(
      `(Radio) Could not find $radioParent container for label: "${label}"`,
    )
  }

  let filled = false
  for (const value of values) {
    const target = String(value ?? "").trim()
    if (!target) continue

    const radios = Array.from(
      parent.querySelectorAll('input[type="radio"]'),
    ).filter((radio) => !radio.disabled)

    const match = choiceMatch.findExactChoice(
      radios,
      target,
      (radio) => {
        const optionLabel =
          radio.labels?.[0] ||
          (radio.id
            ? parent.querySelector(`label[for="${CSS.escape(radio.id)}"]`)
            : null)
        return (
          optionLabel?.textContent ||
          radio.closest("label")?.textContent ||
          radio.nextElementSibling?.textContent ||
          ""
        )
      },
      (radio) => radio.value,
    )

    if (match) {
      filled = (await ensureRadioChecked(match)) || filled
    } else {
      console.warn(`(Radio) No option "${target}" found for label: "${label}"`)
    }
  }
  return filled
}

export async function fillCheckboxField(rule, values) {
  const label = rule.label
  const checkboxes = rule.$checkboxs || []
  const options = rule.options || []

  if (!checkboxes.length) return

  for (const value of values) {
    let matched = false
    const optionIndex = options.findIndex(
      (option) =>
        option.toLowerCase().trim() === value.toLowerCase().trim(),
    )

    if (optionIndex >= 0 && optionIndex < checkboxes.length) {
      const checkbox = checkboxes[optionIndex]
      if (checkbox && !checkbox.checked) {
        checkbox.click()
        await delay.delay(200)
        matched = true
      }
    } else {
      for (const checkbox of checkboxes) {
        if (
          checkbox.value &&
          checkbox.value.toLowerCase().trim() === value.toLowerCase().trim()
        ) {
          if (!checkbox.checked) {
            checkbox.click()
            await delay.delay(200)
            matched = true
          }
          break
        }

        const checkboxLabel = checkbox.closest("label")
        if (checkboxLabel) {
          const alt = checkboxLabel.querySelector(
            "span.application-answer-alternative",
          )
          if (alt) {
            const altText = alt.textContent?.trim() || ""
            if (altText.toLowerCase() === value.toLowerCase().trim()) {
              if (!checkbox.checked) {
                checkbox.click()
                await delay.delay(200)
                matched = true
              }
              break
            }
          }
        }
      }
    }

    if (!matched) {
      console.warn(`(Checkbox) No option "${value}" found for label: "${label}"`)
    }
  }
}

export function setReactValue(input, value) {
  if (!input) return
  const setter = Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(input),
    "value",
  )?.set
  if (setter) {
    setter.call(input, value)
  } else {
    input.value = value
  }
}

export async function handleLocationInput(rule, value) {
  let locationName
  let locationObject

  if (!rule.$input) {
    console.error("handleLocationInput: 规则中缺少 $input 元素")
    return
  }

  if (typeof value === "object" && value !== null && value.name) {
    locationName = value.name
    locationObject = value
  } else if (typeof value === "string" && value.trim() !== "") {
    locationName = value
    locationObject = { name: value }
  } else {
    console.error("handleLocationInput: 传入的值无效。收到了:", value)
    return
  }

  const input = rule.$input
  const parent = input.parentElement
  if (!parent) return

  const hidden = parent.querySelector('input[name="selectedLocation"]')
  if (!hidden) return

  const serialized = JSON.stringify(locationObject)
  await fillReactInput(input, locationName)
  await fillReactInput(hidden, serialized)
}

export async function fillReactInput(input, value) {
  if (!input) return

  const setter = Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(input),
    "value",
  )?.set
  if (setter) {
    setter.call(input, value)
  } else {
    input.value = value
  }

  input.dispatchEvent(
    new Event("input", { bubbles: true, cancelable: true }),
  )
  input.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: true }),
  )
  input.blur()
}
