/**
 * Parcel module id: hA5Qa
 * Resolved path: src/contents/methods/dom.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/crawler/utils/checkbox -> 5MP6u  =>  src/contents/crawler/utils/checkbox.js
 *   ~contents/crawler/utils/input -> iPIvT  =>  src/contents/crawler/utils/input.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/checkbox-label -> 2KQwH  =>  src/contents/methods/checkbox-label.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 *
 * Shared DOM fill primitives — human-readable recovery from Parcel graph.
 * Parcel `e()` / `r` exports unchanged (required by bundle:helper).
 */

var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js")
helpers.defineInteropFlag(r)
helpers.export(r, "fillInputTextField", () => fillInputTextField)
helpers.export(r, "fillCheckBoxesField", () => fillCheckBoxesField)
helpers.export(r, "fillSelectField", () => fillSelectField)
helpers.export(r, "fillOriginSelectField", () => fillOriginSelectField)
helpers.export(r, "uploadFiles", () => uploadFiles)
helpers.export(r, "triggerEvents", () => triggerEvents)
helpers.export(r, "postCoverLetterStatus", () => postCoverLetterStatus)

var choiceMatch = e("~contents/methods/choice-match")
var checkboxUtils = e("~contents/crawler/utils/checkbox")
var inputUtils = e("~contents/crawler/utils/input")
var answerMethods = e("~contents/methods/answer")
var checkboxLabel = e("~contents/methods/checkbox-label")
var coreDom = e("~core/dom")
var enums = e("~core/enums")
var xpath = e("~core/xpath")
var stringUtils = e("~utils/string")

/** Aliases used when answers map true/false / job boards to visible labels. */
var ANSWER_ALIAS = {
  true: "yes",
  false: "no",
  linkedin: "linkedin.com",
  indeed: "indeed.com"
}

async function fillInputTextField(element, value) {
  await inputUtils.fillDefaultInputField(element, value)
}

/** Visible label text for a checkbox/radio (label[for], wrapping label, or preceding label). */
function getChoiceLabelText(inputEl) {
  var fromControl = checkboxLabel.normalizeRadioCheckText(
    checkboxLabel.getRadioCheckText(inputEl)
  )
  if (fromControl) return fromControl
  var preceding = xpath.getFirstOrderedNode("./preceding::label[1]", inputEl)
  return checkboxLabel.normalizeRadioCheckText(preceding?.innerText || "")
}

function labelMatchesAnswer(labelText, answer) {
  var normalized = answer?.toLowerCase().trim()
  return !!normalized && choiceMatch.isExactChoiceMatch(labelText, normalized)
}

/**
 * Decide whether a single checkbox should be checked given answer list + field label.
 * Handles yes/no, "have read", and "current" employment heuristics.
 */
async function maybeCheckSingleBox(
  inputEl,
  answers,
  fieldLabel,
  fillFn = checkboxUtils.fillCheckbox
) {
  var labelText = getChoiceLabelText(inputEl)
  if (!labelText) return

  if (answers.some((a) => labelMatchesAnswer(labelText, a))) {
    await fillFn(inputEl, true)
    return
  }

  var first = String(answers[0] || "").toLowerCase()
  var shouldCheck =
    (first === "true" && labelText === "yes") ||
    (first === "false" && labelText === "no") ||
    (labelText.includes("have read") && first === "true") ||
    (answerMethods.isMatched(labelText, fieldLabel) && first === "true") ||
    (first === "true" &&
      (labelText.includes("current") ||
        String(fieldLabel).toLowerCase().includes("current"))) ||
    (String(fieldLabel).toLowerCase().includes("current") && first === "true")

  if (shouldCheck) await fillFn(inputEl, true)
}

/**
 * Fill a checkbox/radio group on a field wrapper (`field.$checkboxs`, `field.label`).
 * Multi-option: exact label match (with aliases). Single: heuristic maybeCheckSingleBox.
 */
async function fillCheckBoxesField(
  field,
  rawAnswers,
  fillFn = checkboxUtils.fillCheckbox
) {
  var answers = (Array.isArray(rawAnswers) ? rawAnswers : [rawAnswers]).filter(
    (a) => choiceMatch.normalizeChoiceText(a)
  )
  if (!answers.length) return false

  var inputs = Array.from(field.$checkboxs ?? [])
  var isMultiOrRadio =
    inputs.length > 1 || inputs.some((el) => el.type === "radio")

  if (isMultiOrRadio) {
    var selected = new Set()
    var allRadios = inputs.every((el) => el.type === "radio")

    for (var answer of answers) {
      var want = choiceMatch.normalizeChoiceText(answer)
      if (!want) continue

      var exactHits = inputs.filter((el) =>
        choiceMatch.isExactChoiceMatch(getChoiceLabelText(el), want)
      )
      if (exactHits.length > 1) return false

      var match = choiceMatch.findExactChoice(inputs, want, getChoiceLabelText)

      if (!match) {
        var alias = ANSWER_ALIAS[want]
        if (alias) {
          var aliasHits = inputs.filter((el) =>
            choiceMatch.isExactChoiceMatch(getChoiceLabelText(el), alias)
          )
          if (aliasHits.length > 1) return false
          match = choiceMatch.findExactChoice(inputs, alias, getChoiceLabelText)
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
    for (var el of selected) await fillFn(el, true)
    return
  }

  for (var box of inputs) {
    await maybeCheckSingleBox(box, answers, field.label, fillFn)
  }
}

/** Focus a <select> and pick the first option whose text matches any answer via isMatched. */
function fillSelectField(selectEl, answers) {
  var focusEv = new FocusEvent("focus", {
    bubbles: true,
    cancelable: true,
    view: window
  })
  selectEl.dispatchEvent(focusEv)
  selectEl.focus()

  if (selectEl.options && selectEl.options.length > 0) {
    for (var i = 0; i < selectEl.options.length; i++) {
      var opt = selectEl.options[i]
      if (
        opt &&
        opt.value &&
        opt.text &&
        answers.some((a) => answerMethods.isMatched(a, opt.text))
      ) {
        opt.click()
        opt.dispatchEvent(
          new MouseEvent("mousedown", { bubbles: true, cancelable: true })
        )
        opt.dispatchEvent(
          new MouseEvent("mouseup", { bubbles: true, cancelable: true })
        )
        opt.selected = true
        selectEl.dispatchEvent(
          new Event("change", { bubbles: true, cancelable: true })
        )
        selectEl.blur()
        return
      }
    }
  }
  selectEl.blur()
}

/** Exact option `.text` or `.title` match (no fuzzy). */
function fillOriginSelectField(selectEl, values) {
  var options = selectEl.options
  if (!options) {
    console.error("No options found for select element", values)
    return
  }
  for (var want of values) {
    for (var i = 0; i < options.length; i++) {
      if (options[i].text === want || options[i].title === want) {
        options[i].selected = true
        selectEl.dispatchEvent(new Event("change", { bubbles: true }))
        return
      }
    }
  }
}

/**
 * Attach a prepared FileList (from fetchPdfAsBlob) to a file input and notify progress.
 * @param fileInput HTMLInputElement
 * @param prepared { files: FileList }
 * @param reportProgress (meta) => void
 * @param onUploaded (label) => void
 */
async function uploadFiles(
  fileInput,
  prepared,
  reportProgress,
  onUploaded,
  label = "Resume/CV",
  required = true
) {
  try {
    if (!fileInput?.files) return
    fileInput.files = prepared.files
    fileInput.dispatchEvent(
      new Event("change", { bubbles: true, cancelable: false })
    )
    reportProgress({ label, required })
    coreDom.updateFileInputFieldFocusRule(label, fileInput)
    onUploaded(label)
  } catch (err) {
    console.error("Error uploading files:", err)
  }
}

/** Dispatch typed mouse/focus/input/generic events on an element. */
function triggerEvents(element, eventNames) {
  eventNames.forEach((name) => {
    if (!element) return
    var ev
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
        inputType: "insertText"
      })
    } else {
      ev = new Event(name, { bubbles: true, cancelable: true })
    }
    element.dispatchEvent(ev)
  })
}

/** Tell the top frame the agent covered letter status changed. */
function postCoverLetterStatus(status) {
  window.top?.postMessage(
    stringUtils.cleanObject({
      type: enums.MESSAGE_EVENTS.agentCheckCoverLetter,
      status
    }),
    { targetOrigin: "*" }
  )
}
