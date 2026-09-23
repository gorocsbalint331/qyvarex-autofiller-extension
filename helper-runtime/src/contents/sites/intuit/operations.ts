// @ts-nocheck
/**
 * Intuit — DOM fill operations (inputs, selects, radios, prefill).
 * Readable TypeScript source of truth.
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as filler from "../../shared/filler.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"

async function openDropdownAndPick(input, pickFirst) {
  if (!(input instanceof HTMLInputElement)) {
    console.warn("传入的元素不是 HTMLInputElement 类型")
    return
  }
  try {
    input.click()
    input.focus()
    await new Promise((resolve) => setTimeout(resolve, 600))
    const options = document.querySelectorAll(
      '[role="option"], .styled-option-item, [class*="option"]',
    )
    if (options.length > 0) {
      const option = pickFirst ? options[0] : options[options.length - 1]
      option.click()
    }
    input.blur()
  } catch (error) {
    console.error("操作下拉框失败:", error)
  }
}

export async function preFillForm() {
  let processedCount = 0
  for (;;) {
    const dropdowns = xpath.getOrderedNodesSafe(
      '//input[contains(@class, "ehpDropdownTextField")]',
    )
    const count = dropdowns.length
    if (count === 0 || count === processedCount) break
    for (const dropdown of dropdowns.slice(processedCount)) {
      await openDropdownAndPick(dropdown, true)
      processedCount++
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  }
}

export async function prefillRegularFields(answer) {
  const regular = answer?.regular || {}
  const questionBlocks = xpath.getOrderedNodesSafe(
    '//div[@class="question-content"][.//input[contains(@class, "ehpDropdownTextField")]]',
  )
  for (let index = 0; index < questionBlocks.length; index++) {
    const block = questionBlocks[index]
    const previousText = block.previousElementSibling?.textContent
    const label = previousText?.replaceAll("*", "").trim() || ""
    if (["No experience", "None"].includes(regular[label]) && questionBlocks[index + 1]) {
      const nextBlock = questionBlocks[index + 1]
      const nextPreviousText = nextBlock.previousElementSibling?.textContent
      const nextLabel = nextPreviousText?.replaceAll("*", "").trim() || ""
      if (nextLabel && answer?.regular) {
        delete answer.regular[nextLabel]
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }
}

export async function fillInputTextField(element, value) {
  element.focus()
  element.dispatchEvent(new FocusEvent("focusin", { bubbles: true }))
  await delay.delay(100)
  const prototype =
    element instanceof HTMLInputElement
      ? window.HTMLInputElement.prototype
      : window.HTMLTextAreaElement.prototype
  const nativeValueSetter = Object.getOwnPropertyDescriptor(
    prototype,
    "value",
  )?.set
  if (nativeValueSetter) nativeValueSetter.call(element, "")
  else element.value = ""
  element.dispatchEvent(new Event("input", { bubbles: true }))
  element.dispatchEvent(new Event("change", { bubbles: true }))
  await delay.delay(50)
  if (nativeValueSetter) nativeValueSetter.call(element, value)
  else element.value = value
  element.dispatchEvent(
    new Event("input", { bubbles: true, composed: true }),
  )
  element.dispatchEvent(
    new Event("change", { bubbles: true, composed: true }),
  )
  await delay.delay(100)
  element.dispatchEvent(new FocusEvent("focusout", { bubbles: true }))
  element.blur()
  await delay.delay(100)
}

export async function fillSelectField(field, answers) {
  const label = field.label
  if (!answers || answers.length === 0) return
  const desired = answers[0]
  const input = field.$input
  if (!input) {
    throw new filler.FillError(
      `(Select) Could not find field for label: "${label}"`,
    )
  }
  if (input instanceof HTMLInputElement) {
    input.click()
    input.focus()
    await new Promise((resolve) => setTimeout(resolve, 600))
    const optionNodes = document.querySelectorAll(
      '[role="option"], .styled-option-item, [class*="option"]',
    )
    if (optionNodes.length === 0) {
      throw new filler.FillError(
        `(Select) No options found in dropdown for label: "${label}"`,
      )
    }
    const options = Array.from(optionNodes)
    options.map((option) => option.textContent?.trim() || "")
    const match =
      options.find((option) => {
        const optionText = option.textContent?.trim().toLowerCase() || ""
        const desiredLower = desired.toLowerCase()
        return choiceMatch.isExactChoiceMatch(optionText, desiredLower)
      }) || null
    if (match) match.click()
    input.blur()
    return
  }
  if (input instanceof HTMLSelectElement) {
    input.focus()
    await delay.delay(100)
    const match = xpath
      .getOrderedNodesSafe(".//option", input)
      .find(
        (option) =>
          option.textContent.trim().toLowerCase() === desired.toLowerCase() ||
          option.value.toLowerCase() === desired.toLowerCase(),
      )
    if (match) {
      input.value = match.value
      input.dispatchEvent(new Event("input", { bubbles: true }))
      input.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(100)
      input.blur()
      await delay.delay(100)
    } else {
      throw new filler.FillError(
        `(Select) Option not found: "${desired}" for label: "${label}"`,
      )
    }
  }
}

export async function fillRadioGroupFiled(field, answers) {
  const label = field.label
  const desired = answers?.[0]
  if (!desired) return
  let match = null
  if (field.$radioParent) {
    const radios = xpath.getOrderedNodesSafe(
      './/input[@type="radio"]',
      field.$radioParent,
    )
    match =
      choiceMatch.findExactChoice(
        radios.filter((radio) => !radio.disabled),
        desired,
        (radio) => radio.closest("label")?.textContent,
        (radio) => radio.value,
      ) || null
  }
  if (match && !match.checked) {
    match.focus()
    await delay.delay(50)
    match.click()
    await delay.delay(100)
    match.blur()
    await delay.delay(50)
  } else if (!match) {
    throw new filler.FillError(
      `(Radio) No option "${desired}" found for label: "${label}"`,
    )
  }
}

export async function fillMultiselectField(field, answers) {
  if (!answers || answers.length === 0) return
  const label = field.label
  const input = field.$input
  if (!input) {
    throw new filler.FillError(
      `(Select) Could not find field for label: "${label}"`,
    )
  }
  if (input instanceof HTMLInputElement) {
    for (const answer of answers) {
      input.click()
      input.focus()
      await new Promise((resolve) => setTimeout(resolve, 600))
      const optionNodes = document.querySelectorAll(
        '[role="option"], .styled-option-item, [class*="option"]',
      )
      if (optionNodes.length === 0) {
        throw new filler.FillError(
          `(Select) No options found in dropdown for label: "${label}"`,
        )
      }
      const options = Array.from(optionNodes)
      const desiredLower = answer.toLowerCase()
      const match = options.find((option) => {
        const optionText = option.textContent?.trim().toLowerCase() || ""
        return choiceMatch.isExactChoiceMatch(optionText, desiredLower)
      })
      if (match) match.click()
      input.blur()
      await delay.delay(100)
    }
    return
  }
}
