// @ts-nocheck
/**
 * Trakstar — DOM fill operations (inputs, selects, resume/cover letter).
 */

import * as filler from "../../shared/filler.js"
import * as inputUtils from "../../crawler/utils/input.js"
import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as delay from "../../../utils/delay.js"

const normalizeWhitespace = (text) => text?.replace(/\s+/g, " ").trim() || ""
const normalizeLower = (text) => normalizeWhitespace(text).toLowerCase()
const escapeCssAttributeValue = (value) =>
  value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')

export async function fillInputTextField(input, value) {
  input &&
    value &&
    (input.scrollIntoView({ behavior: "smooth", block: "center" }),
    await delay.delay(50),
    await inputUtils.fillDefaultInputField(input, value))
}

export async function fillSelectField(rule, value) {
  const select = rule.$input
  const choice = value?.[0]
  if (!select || !choice) return
  const needle = normalizeLower(choice)
  const option = Array.from(select.options).find((item) => {
    const text = normalizeLower(item.textContent)
    const optionValue = normalizeLower(item.value)
    return text === needle || optionValue === needle
  })
  option &&
    (select.scrollIntoView({ behavior: "smooth", block: "center" }),
    await delay.delay(50),
    select.focus(),
    (select.value = option.value),
    select.dispatchEvent(new Event("input", { bubbles: true })),
    select.dispatchEvent(new Event("change", { bubbles: true })),
    await delay.delay(50),
    select.blur())
}

export async function fillCheckboxField(rule, value) {
  const needles = (value || []).map(normalizeLower)
  if (needles.length)
    for (const checkbox of rule.$checkboxs || []) {
      const el = checkbox
      const label = normalizeLower(
        el.closest("label")?.textContent || el.value,
      )
      const shouldCheck = needles.includes(label)
      shouldCheck !== el.checked &&
        (el.click(),
        el.dispatchEvent(new Event("input", { bubbles: true })),
        el.dispatchEvent(new Event("change", { bubbles: true })),
        await delay.delay(30))
    }
}

export async function fillRadioField(rule, value) {
  const needle = normalizeLower(value?.[0])
  const radios = rule.$input
  if (!needle || !radios?.length) return
  const match = radios.find((radio) => {
    const label = normalizeLower(
      radio.closest("label")?.textContent || radio.value,
    )
    return label === needle || normalizeLower(radio.value) === needle
  })
  match &&
    (match.scrollIntoView({ behavior: "smooth", block: "center" }),
    await delay.delay(50),
    match.checked ||
      (match.click(),
      match.dispatchEvent(new Event("input", { bubbles: true })),
      match.dispatchEvent(new Event("change", { bubbles: true })),
      await delay.delay(30)))
}

const getFormRoot = () =>
  document.querySelector("form#job_application_form") || document

const findFileInput = (names, labelRe) => {
  const root = getFormRoot()
  const fileInputs = Array.from(root.querySelectorAll('input[type="file"]'))
  for (const input of fileInputs) {
    const id = input.id.toLowerCase()
    const name = input.name.toLowerCase()
    if (names.some((item) => item === name || `id_${item}` === id)) return input
  }
  return (
    (labelRe &&
      fileInputs.find((input) => {
        const label = document.querySelector(
          `label[for="${escapeCssAttributeValue(input.id)}"]`,
        )
        return labelRe.test(label?.textContent || "")
      })) ||
    null
  )
}

export const getResumeInput = () => findFileInput(["resume"], /\bresume\b/i)
export const getCoverLetterInput = () =>
  findFileInput(["cover_letter"], /cover\s+letter/i)

export function getCoverLetterStatus() {
  const input = getCoverLetterInput()
  return input ? (input.required ? "required" : "optional") : ""
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const input = getResumeInput()
  if (!input) throw new filler.FillError("(Resume) Could not find upload input")
  await dom.uploadFiles(
    input,
    await answerMethods.fetchPdfAsBlob(resumeInfo),
    updateRequired,
    updateFilled,
    "Resume/CV",
    input.required,
  )
}

export async function uploadCoverLetter(
  coverLetter,
  updateRequired,
  updateFilled,
) {
  const input = getCoverLetterInput()
  input &&
    (await dom.uploadFiles(
      input,
      await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter),
      updateRequired,
      updateFilled,
      "Cover Letter",
      input.required,
    ))
}
