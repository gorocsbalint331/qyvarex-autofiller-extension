// @ts-nocheck
/**
 * GoHire — DOM fill operations (inputs, selects, resume upload).
 */

import * as filler from "../../shared/filler.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as delay from "../../../utils/delay.js"

export async function fillInputField(rule, value) {
  const input = rule.$input
  if (!input || !value) return

  input.focus()
  input.value = value
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
  await delay.delay(50)
  input.blur()
}

export function fillSelectField(rule, values) {
  const input = rule.$input
  const answer = values?.[0]?.trim()
  if (!input || !answer) return

  const answerLower = answer.toLowerCase()
  const matchedOption = Array.from(input.options).find((option) => {
    const optionText = option.textContent
      ?.replace(/\s+/g, " ")
      .trim()
      .toLowerCase()
    return (
      optionText === answerLower || option.value.toLowerCase() === answerLower
    )
  })

  if (!matchedOption) return

  input.focus()
  input.value = matchedOption.value
  matchedOption.selected = true
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
  input.blur()
}

export async function uploadResume(
  resumeInfo,
  updateFieldRequiredStatus,
  updateFilledProgress,
) {
  let fileInput = null
  for (
    let attempt = 0;
    attempt < 50 &&
    !(fileInput = document.querySelector(
      'input#attach[type="file"], input[type="file"][name*="resume" i], input[type="file"][name*="cv" i], input[type="file"]',
    ));
    attempt++
  ) {
    await delay.delay(100)
  }

  if (!fileInput) {
    throw new filler.FillError("(GoHire) Resume file input not found")
  }

  await dom.uploadFiles(
    fileInput,
    await answerMethods.fetchPdfAsBlob(resumeInfo),
    updateFieldRequiredStatus,
    updateFilledProgress,
    "Resume/CV",
    true,
  )
}
