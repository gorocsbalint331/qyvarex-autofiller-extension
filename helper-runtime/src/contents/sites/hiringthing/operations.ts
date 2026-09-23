// @ts-nocheck
/**
 * HiringThing — DOM fill operations (inputs, selects, files, structured rows).
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as inputUtils from "../../crawler/fill-utils/input.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as filler from "../../shared/filler.ts"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeout from "../../../utils/getTargetOrTimeout.js"
import * as rules from "./rules.ts"

const getTargetOrTimeoutDefault = { default: getTargetOrTimeout }

const US_STATE_ABBREVIATIONS = {
  alabama: "AL",
  alaska: "AK",
  arizona: "AZ",
  arkansas: "AR",
  california: "CA",
  colorado: "CO",
  connecticut: "CT",
  delaware: "DE",
  florida: "FL",
  georgia: "GA",
  hawaii: "HI",
  idaho: "ID",
  illinois: "IL",
  indiana: "IN",
  iowa: "IA",
  kansas: "KS",
  kentucky: "KY",
  louisiana: "LA",
  maine: "ME",
  maryland: "MD",
  massachusetts: "MA",
  michigan: "MI",
  minnesota: "MN",
  mississippi: "MS",
  missouri: "MO",
  montana: "MT",
  nebraska: "NE",
  nevada: "NV",
  "new hampshire": "NH",
  "new jersey": "NJ",
  "new mexico": "NM",
  "new york": "NY",
  "north carolina": "NC",
  "north dakota": "ND",
  ohio: "OH",
  oklahoma: "OK",
  oregon: "OR",
  pennsylvania: "PA",
  "rhode island": "RI",
  "south carolina": "SC",
  "south dakota": "SD",
  tennessee: "TN",
  texas: "TX",
  utah: "UT",
  vermont: "VT",
  virginia: "VA",
  washington: "WA",
  "west virginia": "WV",
  wisconsin: "WI",
  wyoming: "WY",
}

export function hasHiringThingApplicationForm() {
  return !!document.querySelector("form#job-application-form")
}

function clearNativeFileInput(input) {
  try {
    input.value = ""
    if (typeof DataTransfer !== "undefined") {
      input.files = new DataTransfer().files
    }
  } catch {
    input.value = ""
  }
  input.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }))
  input.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }))
}

function clickDropzoneRemoves(root) {
  const removes = Array.from(
    (root || document).querySelectorAll(".dz-remove[data-dz-remove]"),
  )
  for (const remove of removes) remove.click()
  return removes.length
}

async function waitForDropzoneCleared(root) {
  await getTargetOrTimeoutDefault.default(
    () => !(root || document).querySelector(".dz-preview"),
    () => false,
    10,
  )
  await delay.delay(100)
}

export async function clearHiringThingFileInputByKind(kind) {
  const dropzone = findDropzoneByKind(kind)
  const removedCount = clickDropzoneRemoves(dropzone)
  const input = resolveHiddenFileInput(kind)
  if (input) clearNativeFileInput(input)
  if (removedCount > 0) await waitForDropzoneCleared(dropzone)
}

export async function clearHiringThingFileInputs() {
  const removedCount = clickDropzoneRemoves(null)
  for (const input of Array.from(
    document.querySelectorAll('input[type="file"].dz-hidden-input'),
  )) {
    clearNativeFileInput(input)
  }
  if (removedCount > 0) await waitForDropzoneCleared(null)
}

export async function preFillForm() {
  if (!hasHiringThingApplicationForm()) {
    const applyButton = xpath.getFirstOrderedNodeSafe(
      '//button[contains(normalize-space(.), "Apply for this position")]',
      document.body,
    )
    if (applyButton) applyButton.click()
  }
  await getTargetOrTimeoutDefault.default(
    () => document.querySelector("form#job-application-form"),
    () => false,
    80,
  )
  await delay.delay(800)
  await clearHiringThingFileInputs()
}

export async function fillInputTextField(input, value) {
  if (input && value?.trim()) {
    input.scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
    await inputUtils.fillDefaultInputField(input, value)
  }
}

function setNativeInputValue(input, value) {
  const proto = Object.getPrototypeOf(input)
  const descriptor = Object.getOwnPropertyDescriptor(proto, "value")?.set
  if (descriptor) descriptor.call(input, value)
  else input.value = value
}

export async function fillDateTextField(input, value) {
  if (!input || !value?.trim()) return false

  input.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)
  input.focus()
  setNativeInputValue(input, value)
  input.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }))
  input.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }))
  input.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "Escape",
      code: "Escape",
      bubbles: true,
      cancelable: true,
    }),
  )
  input.dispatchEvent(
    new KeyboardEvent("keyup", {
      key: "Escape",
      code: "Escape",
      bubbles: true,
      cancelable: true,
    }),
  )
  input.blur()
  document.body?.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  await delay.delay(100)

  const committed = input.value === value
  console.info("[HiringThing][Employment] date commit result", {
    field: /\.end_date$/.test(input.name || input.id) ? "end" : "start",
    committed,
  })
  return committed
}

function getPhoneCountrySelectValue() {
  return document.querySelector('select[name="user.phoneCountry"]')?.value || ""
}

export async function fillPhoneField(input, value) {
  if (!input || !value?.trim()) return
  const phoneCountryBefore = getPhoneCountrySelectValue()
  const normalized = rules.normalizeHiringThingPhoneValue(
    value,
    phoneCountryBefore,
  )
  await fillInputTextField(input, normalized)
  const phoneCountryAfter = getPhoneCountrySelectValue()
  console.info("[HiringThing][Phone] text-fill-complete", {
    phoneCountryBefore,
    phoneCountryAfter,
    phoneCountryChanged: phoneCountryBefore !== phoneCountryAfter,
  })
}

function normalizeSelectToken(value) {
  return String(value ?? "")
    .replace(/[^a-z0-9+]+/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

export async function fillNativeSelectField(rule, value) {
  const select = rule.$input
  const raw = Array.isArray(value) ? value[0] : value
  const token = normalizeSelectToken(raw)
  if (!select || !token) return false

  const option = Array.from(select.options).find(
    (opt) =>
      normalizeSelectToken(opt.value) === token ||
      normalizeSelectToken(opt.textContent) === token,
  )
  if (!option) return false

  select.value = option.value
  select.dispatchEvent(new Event("input", { bubbles: true }))
  select.dispatchEvent(new Event("change", { bubbles: true }))
  await delay.delay(100)
  return select.value === option.value
}

export async function fillHiringThingPhoneCountryCodeField(rule, value) {
  if (await fillNativeSelectField(rule, value)) {
    console.info("[HiringThing][PhoneCountry] native-exact-resolution", {
      committed: true,
      selectedValue: rule.$input?.value ?? "",
    })
    return true
  }

  const raw = Array.isArray(value) ? value[0] : value
  const iso2 = phoneCountryCode.resolvePhoneCountryIso2({ answer: raw })
  if (!iso2) {
    console.info("[HiringThing][PhoneCountry] native-option-unresolved", {
      hasValue: !!String(raw ?? "").trim(),
    })
    return false
  }

  const committed = await fillNativeSelectField(rule, iso2)
  console.info("[HiringThing][PhoneCountry] native-iso2-resolution", {
    committed,
    selectedValue: rule.$input?.value ?? "",
  })
  return committed
}

function normalizeComparableText(value) {
  return (value || "").replace(/\s+/g, " ").trim().toLowerCase()
}

function getRadioOptionLabel(input) {
  return (
    input.getAttribute("aria-label") ||
    input.value ||
    input.closest("label")?.textContent ||
    ""
  ).trim()
}

function radioLabelsMatch(optionLabel, answer) {
  const left = normalizeComparableText(optionLabel)
  const right = normalizeComparableText(answer)
  return (
    left === right ||
    (right === "true" && left === "yes") ||
    (right === "false" && left === "no")
  )
}

export async function fillRadioGroupField(rule, value) {
  const answer = value?.[0]
  const parent = rule.$radioParent
  if (!answer || !parent) return

  const radios = Array.from(parent.querySelectorAll('input[type="radio"]'))
  const match = radios.find((radio) =>
    radioLabelsMatch(getRadioOptionLabel(radio), answer),
  )
  if (!match) {
    throw new filler.FillError(
      `(Radio) No option "${answer}" found for label: "${rule.label}"`,
    )
  }

  if (!match.checked) {
    match.scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
    match.click()
    match.dispatchEvent(new Event("input", { bubbles: true }))
    match.dispatchEvent(new Event("change", { bubbles: true }))
  }
}

export async function fillCheckboxField(rule, value) {
  const checkboxes = rule.$checkboxs || []
  const answers = new Set(value.map(normalizeComparableText))

  for (const checkbox of checkboxes) {
    if (checkbox.disabled) continue
    const optionLabel = normalizeComparableText(
      rules.getHiringThingCheckboxLabel(checkbox),
    )
    const shouldCheck =
      (checkboxes.length === 1 &&
        !checkbox.closest(".checkbox-option-label") &&
        (answers.has("true") || answers.has("yes"))) ||
      (optionLabel && answers.has(optionLabel))

    if (shouldCheck && !checkbox.checked) {
      checkbox.scrollIntoView({ behavior: "smooth", block: "center" })
      await delay.delay(100)
      checkbox.click()
      checkbox.dispatchEvent(new Event("change", { bubbles: true }))
    }
  }

  console.info("[HiringThing][Checkbox] fill result", {
    optionCount: checkboxes.length,
    checkedCount: checkboxes.filter((checkbox) => checkbox.checked).length,
  })
}

function closestSelectRoot(input) {
  return input.closest(".Select")
}

function resolveEditableSelectInput(selectRoot, input) {
  return (
    (("hidden" === input.type || input.disabled) &&
      Array.from(selectRoot.querySelectorAll("input")).find(
        (candidate) => candidate.type !== "hidden" && !candidate.disabled,
      )) ||
    input
  )
}

function buildSelectCandidates(value, includeAbbreviation = true) {
  const trimmed = value.replace(/\s+/g, " ").trim()
  const candidates = [trimmed]
  const abbreviation = US_STATE_ABBREVIATIONS[trimmed.toLowerCase()]
  if (includeAbbreviation && abbreviation) candidates.push(abbreviation)
  return Array.from(new Set(candidates.filter(Boolean)))
}

function isExactChoiceMatch(optionText, candidate, _exactCountry = false) {
  return choiceMatch.isExactChoiceMatch(optionText, candidate)
}

function isCountryLabel(label) {
  return normalizeComparableText(label) === "country"
}

export function isHiringThingCountryRule(rule) {
  return isCountryLabel(rule.label)
}

export function isHiringThingStateProvinceRule(rule) {
  return (
    normalizeComparableText(rule.label).replace(/[^a-z]/g, "") ===
    "stateprovince"
  )
}

function clickOptionElement(element) {
  element.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  element.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  element.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true }),
  )
  element.click()
}

function openReactSelect(selectRoot) {
  const control = selectRoot.querySelector(".Select-control") || selectRoot
  control.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  control.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  control.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true }),
  )
  control.click()
}

function readOpenSelectOptions(input) {
  const owns = input.getAttribute("aria-owns")
  const menu = owns ? document.getElementById(owns) : null
  if (!menu) return []
  return Array.from(menu.querySelectorAll(".Select-option"))
    .map((option) => normalizeComparableText(option.textContent))
    .filter(Boolean)
}

function serializeOptions(options) {
  return options.map(normalizeComparableText).filter(Boolean).join("|")
}

function closeSelectWithEscape(input) {
  input.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "Escape",
      code: "Escape",
      bubbles: true,
      cancelable: true,
    }),
  )
}

export async function waitForHiringThingStateOptions(initialOptions, options = {}) {
  const initialKey = serializeOptions(initialOptions)
  const maxAttempts = options.maxAttempts ?? 50
  const delayMs = options.delayMs ?? 100
  let optionCount = 0

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const stateInput = document.querySelector("input#user\\.state")
    const selectRoot = stateInput && closestSelectRoot(stateInput)
    if (!stateInput || !selectRoot) {
      if (attempt + 1 < maxAttempts) await delay.delay(delayMs)
      continue
    }

    const wasOpen = selectRoot.classList.contains("is-open")
    openReactSelect(selectRoot)
    const currentOptions = readOpenSelectOptions(stateInput)
    optionCount = currentOptions.length
    const currentKey = serializeOptions(currentOptions)

    if (!wasOpen) closeSelectWithEscape(stateInput)

    if (currentKey && (!initialKey || currentKey !== initialKey)) {
      console.info("[HiringThing][State] dependent-region-ready", {
        attempt: attempt + 1,
        initialOptionCount: initialOptions.length,
        optionCount: currentOptions.length,
      })
      return true
    }

    if (attempt + 1 < maxAttempts) await delay.delay(delayMs)
  }

  console.warn("[HiringThing][State] dependent-region-timeout", {
    initialOptionCount: initialOptions.length,
    optionCount,
  })
  return false
}

export function getHiringThingCountrySelectionValue() {
  const countryInput = document.querySelector("input#user\\.country")
  const selectRoot = countryInput && closestSelectRoot(countryInput)
  const labelText = selectRoot?.querySelector(".Select-value-label")?.textContent
  const hiddenValue = selectRoot?.querySelector(
    'input[name="user.country"]',
  )?.value
  return normalizeComparableText(labelText || hiddenValue)
}

async function waitForSelectOptions() {
  let options = []
  await getTargetOrTimeoutDefault.default(
    () =>
      (options = Array.from(document.querySelectorAll(".Select-option")))[0] ||
      null,
    () => false,
    20,
  )
  return options
}

async function waitForSelectValueMatch(selectRoot, candidate, exactCountry = false) {
  let matched = false
  await getTargetOrTimeoutDefault.default(
    () => {
      const label = selectRoot.querySelector(".Select-value-label")
      matched = isExactChoiceMatch(
        label?.textContent || "",
        candidate,
        exactCountry,
      )
      return matched ? label : null
    },
    () => false,
    10,
  )
  return matched
}

function setReactSelectInputValue(input, value) {
  const proto = Object.getPrototypeOf(input)
  const descriptor = Object.getOwnPropertyDescriptor(proto, "value")?.set
  if (descriptor) descriptor.call(input, value)
  else input.value = value
  input.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }))
  input.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }))
}

function resolveHiddenSelectCommitValue(label, candidate) {
  const trimmed = candidate.replace(/\s+/g, " ").trim()
  const abbreviation = US_STATE_ABBREVIATIONS[trimmed.toLowerCase()]
  if (abbreviation) return abbreviation
  if (/country/i.test(label) && /^united states$/i.test(trimmed)) return "US"
  return trimmed
}

function syncHiddenSelectInputs(selectRoot, originalInput, editableInput, label, candidate) {
  if (isCountryLabel(label)) return
  const commitValue = resolveHiddenSelectCommitValue(label, candidate)
  const targets = Array.from(selectRoot.querySelectorAll("input")).filter(
    (input) =>
      input !== editableInput &&
      (input === originalInput || input.type === "hidden" || !!input.id),
  )
  for (const target of targets) setReactSelectInputValue(target, commitValue)
}

export async function fillReactSelectField(rule, value) {
  const answer = value?.[0]
  const input = rule.$input
  const selectRoot = closestSelectRoot(input)
  if (!answer || !input || !selectRoot) return false

  const editableInput = resolveEditableSelectInput(selectRoot, input)
  const exactCountry = isCountryLabel(rule.label)

  selectRoot.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)

  for (const candidate of buildSelectCandidates(String(answer), !exactCountry)) {
    openReactSelect(selectRoot)
    await delay.delay(100)
    editableInput.focus()
    setReactSelectInputValue(editableInput, candidate)
    editableInput.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        cancelable: true,
      }),
    )
    await delay.delay(200)

    const options = await waitForSelectOptions()
    const matchedOption = options.find((option) =>
      isExactChoiceMatch(option.textContent || "", candidate, exactCountry),
    )

    if (exactCountry) {
      console.info("[HiringThing][Country] candidate resolution", {
        optionCount: options.length,
        matchedExactOption: !!matchedOption,
      })
    }

    if (matchedOption) {
      clickOptionElement(matchedOption)
      let committed = await waitForSelectValueMatch(
        selectRoot,
        candidate,
        exactCountry,
      )
      if (!committed) {
        editableInput.dispatchEvent(
          new KeyboardEvent("keydown", {
            key: "Enter",
            code: "Enter",
            bubbles: true,
            cancelable: true,
          }),
        )
        committed = await waitForSelectValueMatch(
          selectRoot,
          candidate,
          exactCountry,
        )
      }

      if (exactCountry) {
        console.info("[HiringThing][Country] commit result", {
          committedExactOption: committed,
        })
      }

      if (!committed) return false

      editableInput.dispatchEvent(new Event("change", { bubbles: true }))
      editableInput.blur()
      syncHiddenSelectInputs(
        selectRoot,
        input,
        editableInput,
        rule.label,
        candidate,
      )
      await delay.delay(100)
      return true
    }
  }

  return false
}

function countStructuredRows(kind) {
  const pattern =
    kind === "employment"
      ? /job_assessment\.question_\d+\.response\.(\d+)\.(?:name|position|duties|reason|st_date|end_date)$/
      : /job_assessment\.question_\d+\.response\.(\d+)\.(?:institution|degree|completed)$/
  const indices = new Set()
  for (const element of Array.from(
    document.querySelectorAll("input, textarea"),
  )) {
    const nameOrId = element.name || element.id || ""
    const match = nameOrId.match(pattern)
    if (match) indices.add(Number(match[1]))
  }
  return indices.size
}

function findAddStructuredRowButton(kind) {
  const label =
    kind === "employment"
      ? "Add Another Position"
      : "Add More Education History"
  return (
    Array.from(document.querySelectorAll("button")).find((button) =>
      (button.getAttribute("aria-label") || button.textContent || "")
        .replace(/\s+/g, " ")
        .includes(label),
    ) || null
  )
}

export async function ensureHiringThingStructuredRows(kind, neededCount) {
  if (neededCount <= 1) return
  let currentCount = countStructuredRows(kind)
  while (currentCount < neededCount) {
    const addButton = findAddStructuredRowButton(kind)
    if (!addButton) return
    const nextCount = currentCount + 1
    addButton.scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
    addButton.click()
    await getTargetOrTimeoutDefault.default(
      () => (currentCount = countStructuredRows(kind)),
      (count) => count >= nextCount,
      30,
    )
    await delay.delay(300)
    currentCount = countStructuredRows(kind)
  }
}

function findNearbyUploadLabel(element) {
  let current = element
  let depth = 0
  while (current && depth < 8) {
    const label = Array.from(current.querySelectorAll("label, h3, h4"))
      .map((node) => node.textContent || "")
      .find((text) => rules.isHiringThingUploadLabel(text))
    if (label) return label
    current = current.parentElement
    depth += 1
  }
  return ""
}

function resolveUploadKindFromDropzone(dropzone) {
  const field = dropzone.closest(".file-field-input")
  const fieldId = field?.id || ""
  if (/files\.resume/i.test(fieldId)) return "resume"
  if (/files\.coverletter/i.test(fieldId)) return "coverLetter"
  if (/files\.other/i.test(fieldId)) return "additional"
  return rules.getHiringThingUploadKindFromLabel(findNearbyUploadLabel(dropzone))
}

function resolveHiddenFileInput(kind) {
  const dropzone = findDropzoneByKind(kind)
  if (!dropzone) return null

  const dropzoneHidden = dropzone.dropzone?.hiddenFileInput
  if (dropzoneHidden instanceof HTMLInputElement) return dropzoneHidden

  const allDropzones = Array.from(
    document.querySelectorAll(".filepicker.dropzone"),
  )
  const hiddenInputs = Array.from(
    document.querySelectorAll('input[type="file"].dz-hidden-input'),
  )

  if (kind === "additional") {
    return hiddenInputs.find((input) => input.multiple) || null
  }

  const singleFileInputs = hiddenInputs.filter((input) => !input.multiple)
  const resumeOrCoverDropzones = allDropzones.filter((candidate) => {
    const resolvedKind = resolveUploadKindFromDropzone(candidate)
    return resolvedKind === "coverLetter" || resolvedKind === "resume"
  })
  const dropzoneIndex = resumeOrCoverDropzones.indexOf(dropzone)
  const emptyDropzones = resumeOrCoverDropzones.filter(
    (candidate) => !candidate.querySelector(".dz-preview"),
  )

  if (emptyDropzones.length === 1 && emptyDropzones[0] === dropzone) {
    return singleFileInputs[0] || null
  }
  if (emptyDropzones.length > 1) {
    return singleFileInputs[dropzoneIndex] || singleFileInputs[0] || null
  }
  return singleFileInputs[singleFileInputs.length - 1] || null
}

function findDropzoneByKind(kind) {
  const dropzones = Array.from(
    document.querySelectorAll(".filepicker.dropzone"),
  )
  const exact = dropzones.find(
    (dropzone) => resolveUploadKindFromDropzone(dropzone) === kind,
  )
  if (exact) return exact

  const index = rules.getHiringThingUploadInputIndex(
    dropzones.map(findNearbyUploadLabel),
    kind,
  )
  return (index >= 0 && dropzones[index]) || null
}

function normalizeFileName(name) {
  return name.replace(/\s+/g, " ").trim().toLowerCase()
}

function nativeInputHasFiles(input, dataTransfer) {
  const expected = Array.from(dataTransfer.files)
  const actual = Array.from(input.files || [])
  return (
    expected.length > 0 &&
    expected.every((file) => actual.some((item) => item.name === file.name))
  )
}

function dropzoneShowsFiles(dropzone, dataTransfer) {
  if (!dropzone) return false
  const expectedNames = Array.from(dataTransfer.files).map((file) =>
    normalizeFileName(file.name),
  )
  if (!expectedNames.length) return false
  const previewText = normalizeFileName(
    Array.from(
      dropzone.querySelectorAll(
        "[data-dz-name], .dz-filename, .dz-details, .dz-preview",
      ),
    )
      .map((node) => node.textContent || "")
      .join(" "),
  )
  return expectedNames.some((name) => previewText.includes(name))
}

function dispatchDropEvents(dropzone, dataTransfer) {
  if (!dropzone || dataTransfer.files.length === 0) return false
  try {
    for (const type of ["dragenter", "dragover", "drop"]) {
      dropzone.dispatchEvent(
        new DragEvent(type, {
          bubbles: true,
          cancelable: true,
          dataTransfer,
        }),
      )
    }
    return true
  } catch {
    return false
  }
}

async function commitFileUpload(
  input,
  dataTransfer,
  updateRequired,
  updateFilled,
  label,
  kind,
  required,
) {
  const dropzone = findDropzoneByKind(kind)
  let committed = false

  const waitForCommit = async (targetInput) => {
    let ready = false
    await getTargetOrTimeoutDefault.default(
      () =>
        (ready =
          dropzoneShowsFiles(dropzone, dataTransfer) ||
          nativeInputHasFiles(targetInput, dataTransfer)),
      (value) => value,
      15,
    )
    return ready
  }

  dispatchDropEvents(dropzone, dataTransfer)
  committed = await waitForCommit(input)

  if (!committed) {
    const fallbackInput = resolveHiddenFileInput(kind) || input
    fallbackInput.files = dataTransfer.files
    fallbackInput.dispatchEvent(
      new Event("change", { bubbles: true, cancelable: false }),
    )
    committed = await waitForCommit(fallbackInput)
  }

  if (!committed) {
    await getTargetOrTimeoutDefault.default(
      () =>
        (committed =
          dropzoneShowsFiles(dropzone, dataTransfer) ||
          nativeInputHasFiles(input, dataTransfer)),
      (value) => value,
      15,
    )
  }

  if (!committed) return false
  updateRequired({ label, required })
  updateFilled(label)
  return true
}

export function getHiringThingCoverLetterStatus() {
  return resolveHiddenFileInput("coverLetter") ? "optional" : ""
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const dataTransfer = await answerMethods.fetchPdfAsBlob(resumeInfo)
  await clearHiringThingFileInputByKind("resume")
  const input = resolveHiddenFileInput("resume")
  if (!input) {
    throw new filler.FillError(
      "(Resume) Could not find HiringThing resume upload input",
    )
  }
  const committed = await commitFileUpload(
    input,
    dataTransfer,
    updateRequired,
    updateFilled,
    rules.HIRINGTHING_RESUME_LABEL,
    "resume",
    false,
  )
  if (!committed) {
    throw new filler.FillError(
      "(Resume) HiringThing resume upload did not complete",
    )
  }
}

export async function uploadCoverLetter(
  coverLetterInfo,
  updateRequired,
  updateFilled,
) {
  try {
    const dataTransfer =
      await answerMethods.fetchCoverLetterPdfAsBlob(coverLetterInfo)
    await clearHiringThingFileInputByKind("coverLetter")
    const input = resolveHiddenFileInput("coverLetter")
    if (!input) return false
    return commitFileUpload(
      input,
      dataTransfer,
      updateRequired,
      updateFilled,
      rules.HIRINGTHING_COVER_LETTER_LABEL,
      "coverLetter",
      false,
    )
  } catch (error) {
    console.error("Error uploading HiringThing cover letter:", error)
    return false
  }
}
