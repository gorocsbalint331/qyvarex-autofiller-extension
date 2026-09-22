/**
 * Shared DOM fill primitives for clean-TS autofill.
 *
 * Lives in the extension (`src/contents/methods`).
 * Parcel reference: engine/helper-app/src/contents/methods/dom.js
 */

import { fillDefaultInputField } from "~contents/crawler/utils/input"
import { fillCheckbox } from "~contents/crawler/utils/checkbox"
import { delay } from "~contents/crawler/utils/delay"
import {
  findExactChoice,
  isExactChoiceMatch,
  normalizeChoiceText
} from "~contents/methods/choice-match"
import {
  getRadioCheckText,
  normalizeRadioCheckText
} from "~contents/methods/checkbox-label"
import { isMatched } from "~contents/methods/native-answer"
import { MESSAGE_EVENTS } from "~core/enums"

/** Field shape used by oracle site fillers (`field.$checkboxs`, `field.label`). */
export type CheckboxField = {
  $checkboxs?: Iterable<HTMLInputElement> | HTMLInputElement[] | null
  label?: string
}

/** Aliases when answers map true/false / job boards to visible labels. */
const ANSWER_ALIAS: Record<string, string> = {
  true: "yes",
  false: "no",
  linkedin: "linkedin.com",
  indeed: "indeed.com"
}

type FillCheckboxFn = (
  el: HTMLInputElement,
  checked?: boolean
) => void | Promise<void>

/** Dispatch typed DOM events (mousedown/click/focus/input/…) like the oracle. */
export function triggerEvents(
  el: Element | null | undefined,
  eventNames: string[] = ["input", "change", "blur"]
): void {
  if (!el) return
  for (const name of eventNames) {
    let ev: Event
    if (
      (name === "mousedown" || name === "mouseup" || name === "click") &&
      typeof MouseEvent === "function"
    ) {
      ev = new MouseEvent(name, { bubbles: true, cancelable: true })
    } else if (
      (name === "focus" || name === "blur") &&
      typeof FocusEvent === "function"
    ) {
      ev = new FocusEvent(name, { bubbles: true, cancelable: true })
    } else if (name === "input" && typeof InputEvent === "function") {
      const value =
        "value" in el && typeof (el as HTMLInputElement).value === "string"
          ? (el as HTMLInputElement).value
          : null
      ev = new InputEvent(name, {
        bubbles: true,
        cancelable: true,
        data: value,
        inputType: "insertText"
      })
    } else {
      ev = new Event(name, { bubbles: true, cancelable: true })
    }
    el.dispatchEvent(ev)
  }
}

export async function fillInputTextField(
  input: HTMLInputElement | HTMLTextAreaElement | null | undefined,
  value: string
): Promise<void> {
  await fillDefaultInputField(input, value)
}

function choiceLabelText(inputEl: HTMLInputElement): string {
  const fromControl = normalizeRadioCheckText(getRadioCheckText(inputEl))
  if (fromControl) return fromControl
  return ""
}

function labelMatchesAnswer(labelText: string, answer: unknown): boolean {
  const normalized =
    typeof answer === "string" || typeof answer === "number"
      ? String(answer).toLowerCase().trim()
      : ""
  return !!normalized && isExactChoiceMatch(labelText, normalized)
}

/**
 * Decide whether a single checkbox should be checked given answer list + field label.
 * Handles yes/no, "have read", and "current" employment heuristics.
 */
async function maybeCheckSingleBox(
  inputEl: HTMLInputElement,
  answers: unknown[],
  fieldLabel: string | undefined,
  fillFn: FillCheckboxFn = fillCheckbox
): Promise<void> {
  const labelText = choiceLabelText(inputEl)
  if (!labelText) return

  if (answers.some((a) => labelMatchesAnswer(labelText, a))) {
    await fillFn(inputEl, true)
    return
  }

  const first = String(answers[0] ?? "").toLowerCase()
  const label = String(fieldLabel ?? "").toLowerCase()
  const shouldCheck =
    (first === "true" && labelText === "yes") ||
    (first === "false" && labelText === "no") ||
    (labelText.includes("have read") && first === "true") ||
    (isMatched(labelText, fieldLabel ?? "") && first === "true") ||
    (first === "true" &&
      (labelText.includes("current") || label.includes("current"))) ||
    (label.includes("current") && first === "true")

  if (shouldCheck) await fillFn(inputEl, true)
}

/**
 * Oracle-shaped checkbox/radio group fill (`field.$checkboxs`, `field.label`).
 * Returns `false` on ambiguous multi-match; otherwise void/undefined like the oracle.
 */
export async function fillCheckBoxesField(
  field: CheckboxField | HTMLInputElement[],
  rawAnswers: unknown,
  fillFn: FillCheckboxFn = fillCheckbox
): Promise<false | void | number> {
  // Back-compat: BaseFiller passes (boxes[], string[])
  if (Array.isArray(field) && !(field as CheckboxField).$checkboxs) {
    return fillCheckboxField(field as HTMLInputElement[], rawAnswers as string[])
  }

  const answers = (
    Array.isArray(rawAnswers) ? rawAnswers : [rawAnswers]
  ).filter((a) => normalizeChoiceText(a))
  if (!answers.length) return false

  const boxField = field as CheckboxField
  const inputs = Array.from(boxField.$checkboxs ?? [])
  const isMultiOrRadio =
    inputs.length > 1 || inputs.some((el) => el.type === "radio")

  if (isMultiOrRadio) {
    const selected = new Set<HTMLInputElement>()
    const allRadios = inputs.every((el) => el.type === "radio")

    for (const answer of answers) {
      const want = normalizeChoiceText(answer)
      if (!want) continue

      const exactHits = inputs.filter((el) =>
        isExactChoiceMatch(choiceLabelText(el), want)
      )
      if (exactHits.length > 1) return false

      let match = findExactChoice(inputs, want, choiceLabelText)

      if (!match) {
        const alias = ANSWER_ALIAS[want]
        if (alias) {
          const aliasHits = inputs.filter((el) =>
            isExactChoiceMatch(choiceLabelText(el), alias)
          )
          if (aliasHits.length > 1) return false
          match = findExactChoice(inputs, alias, choiceLabelText)
        }
      }

      if (!match) {
        if (allRadios) continue
        return false
      }

      selected.add(match)
      if (allRadios) break
    }

    if (!selected.size) return false
    for (const el of selected) await fillFn(el, true)
    return
  }

  for (const box of inputs) {
    await maybeCheckSingleBox(box, answers, boxField.label, fillFn)
  }
}

/** Simple label-list fill used by BaseFiller / Personio. */
export async function fillCheckboxField(
  boxes: HTMLInputElement[],
  values: string[]
): Promise<number> {
  let filled = 0
  for (const want of values) {
    const match = findExactChoice(boxes, want, choiceLabelText)
    if (match) {
      await fillCheckbox(match, true)
      filled += 1
    }
  }
  return filled
}

/**
 * Focus a <select> and pick the first option matching any answer via isMatched.
 * Also accepts a single string (BaseFiller / Personio).
 */
export async function fillSelectField(
  select: HTMLSelectElement | null | undefined,
  answers: string | string[]
): Promise<boolean> {
  if (!select) return false
  const list = (Array.isArray(answers) ? answers : [answers]).filter(Boolean)
  if (!list.length) return false

  const focusEv = new FocusEvent("focus", {
    bubbles: true,
    cancelable: true,
    view: window
  })
  select.dispatchEvent(focusEv)
  select.focus()

  if (select.options?.length) {
    for (let i = 0; i < select.options.length; i++) {
      const opt = select.options[i]
      if (
        opt?.value &&
        opt.text &&
        list.some((a) => isMatched(a, opt.text) || isExactChoiceMatch(opt.text, a))
      ) {
        opt.click()
        opt.dispatchEvent(
          new MouseEvent("mousedown", { bubbles: true, cancelable: true })
        )
        opt.dispatchEvent(
          new MouseEvent("mouseup", { bubbles: true, cancelable: true })
        )
        opt.selected = true
        select.dispatchEvent(
          new Event("change", { bubbles: true, cancelable: true })
        )
        select.blur()
        return true
      }
    }
  }
  select.blur()
  return false
}

/** Exact option `.text` or `.title` match (no fuzzy). */
export function fillOriginSelectField(
  select: HTMLSelectElement | null | undefined,
  values: string | string[]
): boolean {
  if (!select?.options) return false
  const wants = (Array.isArray(values) ? values : [values]).map(String)
  for (const want of wants) {
    for (let i = 0; i < select.options.length; i++) {
      const opt = select.options[i]
      if (opt.text === want || opt.title === want) {
        opt.selected = true
        select.dispatchEvent(new Event("change", { bubbles: true }))
        return true
      }
    }
  }
  return false
}

export async function fillRadioGroupField(
  radios: HTMLInputElement[],
  value: string | string[]
): Promise<boolean> {
  const want = Array.isArray(value) ? value[0] : value
  if (!want) return false
  const match = findExactChoice(radios, want, choiceLabelText)
  if (!match) return false
  if (!match.checked) {
    match.click()
    match.checked = true
    match.dispatchEvent(new Event("change", { bubbles: true }))
    match.dispatchEvent(new Event("click", { bubbles: true }))
  }
  return true
}

export async function fillSingleCheckbox(
  el: HTMLInputElement,
  checked = true
): Promise<void> {
  await fillCheckbox(el, checked)
}

/**
 * Attach a File / Blob to a file input (clean-TS).
 * Oracle also accepts a prepared `{ files: FileList }` + progress callbacks.
 */
export async function uploadFiles(
  input: HTMLInputElement | null | undefined,
  file: File | Blob,
  fileName: string
): Promise<boolean> {
  if (!input || input.type !== "file") return false

  const blob =
    file instanceof File
      ? file
      : new File([file], fileName, {
          type: (file as Blob).type || "application/pdf"
        })

  const dt = new DataTransfer()
  dt.items.add(blob)
  input.files = dt.files
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
  await delay(100)
  return true
}

/** Tell the top frame the agent covered letter status changed. */
export function postCoverLetterStatus(status: unknown): void {
  window.top?.postMessage(
    {
      type: MESSAGE_EVENTS.agentCheckCoverLetter,
      status
    },
    { targetOrigin: "*" }
  )
}

export {
  fillDefaultInputField,
  fillCheckbox,
  delay
}
