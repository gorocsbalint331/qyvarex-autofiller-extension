// @ts-nocheck
/**
 * Shared DOM fill primitives for text, checkbox, select, file upload, and events.
 */

import { fillCheckbox } from "../crawler/fill-utils/checkbox.ts"
import { fillDefaultInputField } from "../crawler/fill-utils/input.ts"
import { isMatched } from "./answer.ts"
import {
  getRadioCheckText,
  normalizeRadioCheckText,
} from "./checkbox-label.ts"
import {
  findExactChoice,
  isExactChoiceMatch,
  normalizeChoiceText,
} from "./choice-match.ts"
import { updateFileInputFieldFocusRule } from "../../core/dom.ts"
import { MESSAGE_EVENTS } from "../../core/enums.ts"
import { getFirstOrderedNode } from "../../core/xpath.ts"
import { cleanObject } from "../../utils/string.ts"

const ANSWER_ALIAS = {
  true: "yes",
  false: "no",
  linkedin: "linkedin.com",
  indeed: "indeed.com",
}

export async function fillInputTextField(element, value) {
  await fillDefaultInputField(element, value)
}

function getChoiceLabelText(inputEl) {
  const fromControl = normalizeRadioCheckText(getRadioCheckText(inputEl))
  if (fromControl) return fromControl
  const preceding = getFirstOrderedNode("./preceding::label[1]", inputEl)
  return normalizeRadioCheckText(preceding?.innerText || "")
}

function labelMatchesAnswer(labelText, answer) {
  const normalized = answer?.toLowerCase().trim()
  return !!normalized && isExactChoiceMatch(labelText, normalized)
}

async function maybeCheckSingleBox(
  inputEl,
  answers,
  fieldLabel,
  fillFn = fillCheckbox,
) {
  const labelText = getChoiceLabelText(inputEl)
  if (!labelText) return

  if (answers.some((answer) => labelMatchesAnswer(labelText, answer))) {
    await fillFn(inputEl, true)
    return
  }

  const first = String(answers[0] || "").toLowerCase()
  const shouldCheck =
    (first === "true" && labelText === "yes") ||
    (first === "false" && labelText === "no") ||
    (labelText.includes("have read") && first === "true") ||
    (isMatched(labelText, fieldLabel) && first === "true") ||
    (first === "true" &&
      (labelText.includes("current") ||
        String(fieldLabel).toLowerCase().includes("current"))) ||
    (String(fieldLabel).toLowerCase().includes("current") && first === "true")

  if (shouldCheck) await fillFn(inputEl, true)
}

export async function fillCheckBoxesField(
  field,
  rawAnswers,
  fillFn = fillCheckbox,
) {
  const answers = (Array.isArray(rawAnswers) ? rawAnswers : [rawAnswers]).filter(
    (answer) => normalizeChoiceText(answer),
  )
  if (!answers.length) return false

  const inputs = Array.from(field.$checkboxs ?? [])
  const isMultiOrRadio =
    inputs.length > 1 || inputs.some((el) => el.type === "radio")

  if (isMultiOrRadio) {
    const selected = new Set()
    const allRadios = inputs.every((el) => el.type === "radio")

    for (const answer of answers) {
      const want = normalizeChoiceText(answer)
      if (!want) continue

      const exactHits = inputs.filter((el) =>
        isExactChoiceMatch(getChoiceLabelText(el), want),
      )
      if (exactHits.length > 1) return false

      let match = findExactChoice(inputs, want, getChoiceLabelText)

      if (!match) {
        const alias = ANSWER_ALIAS[want]
        if (alias) {
          const aliasHits = inputs.filter((el) =>
            isExactChoiceMatch(getChoiceLabelText(el), alias),
          )
          if (aliasHits.length > 1) return false
          match = findExactChoice(inputs, alias, getChoiceLabelText)
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
    await maybeCheckSingleBox(box, answers, field.label, fillFn)
  }
}

export function fillSelectField(selectEl, answers) {
  const focusEv = new FocusEvent("focus", {
    bubbles: true,
    cancelable: true,
    view: window,
  })
  selectEl.dispatchEvent(focusEv)
  selectEl.focus()

  if (selectEl.options && selectEl.options.length > 0) {
    for (let i = 0; i < selectEl.options.length; i++) {
      const opt = selectEl.options[i]
      if (
        opt &&
        opt.value &&
        opt.text &&
        answers.some((answer) => isMatched(answer, opt.text))
      ) {
        opt.click()
        opt.dispatchEvent(
          new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
        )
        opt.dispatchEvent(
          new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
        )
        opt.selected = true
        selectEl.dispatchEvent(
          new Event("change", { bubbles: true, cancelable: true }),
        )
        selectEl.blur()
        return
      }
    }
  }
  selectEl.blur()
}

export function fillOriginSelectField(selectEl, values) {
  const options = selectEl.options
  if (!options) {
    console.error("No options found for select element", values)
    return
  }
  for (const want of values) {
    for (let i = 0; i < options.length; i++) {
      if (options[i].text === want || options[i].title === want) {
        options[i].selected = true
        selectEl.dispatchEvent(new Event("change", { bubbles: true }))
        return
      }
    }
  }
}

export async function uploadFiles(
  fileInput,
  prepared,
  reportProgress,
  onUploaded,
  label = "Resume/CV",
  required = true,
) {
  try {
    if (!fileInput?.files) return
    fileInput.files = prepared.files
    fileInput.dispatchEvent(
      new Event("change", { bubbles: true, cancelable: false }),
    )
    reportProgress({ label, required })
    updateFileInputFieldFocusRule(label, fileInput)
    onUploaded(label)
  } catch (err) {
    console.error("Error uploading files:", err)
  }
}

export function triggerEvents(element, eventNames) {
  eventNames.forEach((name) => {
    if (!element) return
    let ev
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
      ev = new InputEvent(name, {
        bubbles: true,
        cancelable: true,
        data:
          "value" in element && typeof element.value === "string"
            ? element.value
            : null,
        inputType: "insertText",
      })
    } else {
      ev = new Event(name, { bubbles: true, cancelable: true })
    }
    element.dispatchEvent(ev)
  })
}

export function postCoverLetterStatus(status) {
  window.top?.postMessage(
    cleanObject({
      type: MESSAGE_EVENTS.agentCheckCoverLetter,
      status,
    }),
    { targetOrigin: "*" },
  )
}
