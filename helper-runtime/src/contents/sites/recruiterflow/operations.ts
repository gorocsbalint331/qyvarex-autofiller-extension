// @ts-nocheck
/**
 * Recruiterflow — DOM fill operations (inputs, selects, phone, uploads, sections).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as observer from "../../methods/observer.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeoutModule from "../../../utils/getTargetOrTimeout.js"
import * as recruiterflowPhone from "./phone-country-code.ts"

const getTargetOrTimeout = {
  default: getTargetOrTimeoutModule.default ?? getTargetOrTimeoutModule,
}

function normalizeLabel(text) {
  return String(text ?? "")
    .replace(/\*/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function isCoverLetterLabel(text) {
  return normalizeLabel(text) === "cover letter"
}

function readContainerLabel(container) {
  const label =
    container.querySelector("p.form-label") ||
    container.querySelector(".form-label")
  return label?.textContent || ""
}

export function getRecruiterflowCoverLetterUploadDom() {
  const containers = Array.from(
    document.querySelectorAll(".form-dnd-container"),
  )
  const container =
    containers.find((node) => isCoverLetterLabel(readContainerLabel(node))) ??
    null
  if (!container) {
    return { container: null, input: null, uploadedItem: null }
  }
  const uploadedItem = container.querySelector(".file-list-item") ?? null
  return {
    container,
    input: container.querySelector('input[type="file"]'),
    uploadedItem,
  }
}

function filesMatch(left, right) {
  const leftFile = left.files?.[0]
  const rightFile = right.files?.[0]
  return (
    !!leftFile &&
    !!rightFile &&
    (leftFile === rightFile ||
      (leftFile.name === rightFile.name && leftFile.size === rightFile.size))
  )
}

export function getRecruiterflowCoverLetterStatus() {
  const { container, input } = getRecruiterflowCoverLetterUploadDom()
  return container && input ? "required" : ""
}

export async function fillInputTextField(input, value) {
  if (!input || !value) return
  input.focus()
  await delay.delay(50)

  const proto =
    input instanceof HTMLTextAreaElement
      ? window.HTMLTextAreaElement.prototype
      : window.HTMLInputElement.prototype
  const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set
  if (setter) setter.call(input, value)
  else input.value = value

  for (const eventName of ["input", "change", "blur"]) {
    input.dispatchEvent(
      new Event(eventName, { bubbles: true, cancelable: true }),
    )
  }
  await delay.delay(50)
}

export async function fillSelectField(select, answers) {
  if (!select || !answers || answers.length === 0) return
  const answer = answers[0]
  const options = Array.from(select.options)
  const matched = choiceMatch.findExactChoice(
    options,
    answer,
    (option) => option.text,
    (option) => option.value,
  )
  if (matched) {
    select.value = matched.value
    dom.triggerEvents(select, ["change", "input", "blur"])
    await delay.delay(100)
  }
}

export async function fillCustomSelect(rule, answers) {
  if (!answers || answers.length === 0) return

  const input = rule.$input
  const multiWrapper = input.closest(".multi-select-input-wrapper")
  const singleWrapper = input.closest(".single-select-input-wrapper")
  const wrapper = multiWrapper || singleWrapper
  if (!wrapper) {
    console.warn("Custom select wrapper not found for", rule.label)
    return
  }

  const trigger = wrapper.querySelector("input")
  trigger.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
  await delay.delay(300)

  const listbox = document.querySelector(
    'div[role="listbox"][id*="-listbox"]',
  )
  if (!listbox) {
    console.warn("Custom select listbox not found")
    trigger.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    return
  }

  const optionNodes = listbox.querySelectorAll('div[role="option"]')
  const readOptionText = (option) => {
    const multi = option.querySelector(".custom-multi-select-option")
    if (multi) {
      return Array.from(multi.childNodes)
        .filter((node) => node.nodeType === Node.TEXT_NODE)
        .map((node) => node.textContent)
        .join("")
        .trim()
    }
    const single = option.querySelector(".custom-single-select-option")
    return (single?.textContent || option.textContent || "").trim()
  }

  const options = Array.from(optionNodes)
  const selected = new Set(
    answers
      .map((answer) =>
        choiceMatch.findExactChoice(options, answer, readOptionText),
      )
      .filter(Boolean),
  )

  for (const option of options) {
    if (!selected.has(option)) continue
    const checkbox = option.querySelector('input[type="checkbox"]')
    if (checkbox) {
      if (!checkbox.checked) {
        checkbox.click()
        await delay.delay(100)
      }
    } else {
      option.click()
      await delay.delay(100)
      return
    }
  }

  if (document.contains(listbox)) {
    trigger.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    await delay.delay(200)
  }
}

function ruleInput(rule) {
  return rule?.$input ?? null
}

function findReactSelectControl(rule) {
  const input = ruleInput(rule)
  const control =
    input?.closest?.(
      'div[class*="-control"], div[class*="control"]',
    ) ?? null
  return (
    control ||
    xpath.getFirstOrderedNodeSafe(
      '//div[contains(@class, "css-1wq9ix5-control")] | //div[contains(@class, "react-select")]//div[contains(@class, "control")]',
    )
  )
}

function findReactSelectInput(control, rule) {
  const input = ruleInput(rule)
  return input?.tagName.toLowerCase() === "input" &&
    input.id?.includes("react-select")
    ? input
    : control.querySelector('input[id*="react-select"]') ||
        xpath.getFirstOrderedNodeSafe(
          '//input[contains(@id, "react-select")]',
        )
}

export async function fillReactSelect(value, rule) {
  if (!value) return false
  try {
    const control = findReactSelectControl(rule)
    if (!control) {
      console.warn("React-select control not found")
      return false
    }
    control.click()
    await delay.delay(300)

    const input = findReactSelectInput(control, rule)
    if (!input) {
      console.warn("React-select input not found")
      return false
    }
    input.focus()
    await delay.delay(50)

    const setter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value",
    )?.set
    if (setter) setter.call(input, value)
    input.dispatchEvent(new Event("input", { bubbles: true }))
    input.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(300)

    const matched = await getTargetOrTimeout.default(
      () => {
        const options = xpath.getOrderedNodesSafe(
          '//div[contains(@class, "option") or @role="option"]',
        )
        for (const option of options) {
          if (choiceMatch.isExactChoiceMatch(option.textContent, value)) {
            return option
          }
        }
        return null
      },
      () => false,
      15,
    )

    if (matched) {
      matched.click()
      await delay.delay(200)
      return true
    }

    {
      const countryInput = xpath.getFirstOrderedNodeSafe(
        '//input[@name="country"]',
      )
      if (countryInput) {
        countryInput.value = value
        return true
      }
    }
  } catch (error) {
    console.error("Error filling react-select:", error)
  }
  return false
}

export async function fillDatePicker(input, value) {
  if (!input || !value) return
  try {
    let formatted = value
    if (value.match(/^\d{4}-\d{2}-\d{2}$/)) {
      const [year, month, day] = value.split("-")
      formatted = `${month}/${day}/${year}`
    }
    input.focus()
    await delay.delay(100)
    const setter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value",
    )?.set
    if (setter) setter.call(input, formatted)
    else input.value = formatted
    input.dispatchEvent(new Event("input", { bubbles: true }))
    input.dispatchEvent(new Event("change", { bubbles: true }))
    input.dispatchEvent(new Event("blur", { bubbles: true }))
    await delay.delay(200)
  } catch (error) {
    console.error("Error filling datepicker:", error)
  }
}

function phoneCountryOptionElements() {
  return xpath.getOrderedNodesSafe(
    '//li[contains(@class, "iti__country") and @data-country-code] | //li[@data-country-code]',
  )
}

function findPhoneCountryOption(answer) {
  return recruiterflowPhone.findRecruiterflowPhoneCountryOption(
    phoneCountryOptionElements(),
    answer,
  )
}

function writePhoneInputValue(input, value) {
  input.focus()
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value",
  )?.set
  if (setter) setter.call(input, value)
  else input.value = value
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
}

function readActivePhoneCountryIso2() {
  if (typeof document === "undefined") return ""
  const active = document.querySelector(
    "li.iti__country.iti__active[data-country-code]",
  )
  return (active?.getAttribute("data-country-code") || "").toLowerCase()
}

export async function fillPhoneNumber(
  phoneValue,
  countrySource = "United States",
) {
  if (!phoneValue) {
    return { phoneFilled: false, phoneCountryFilled: false }
  }

  let phoneFilled = false
  let phoneCountryFilled = !countrySource

  try {
    const input = xpath.getFirstOrderedNodeSafe(
      '//input[@id="user-phone"] | //input[@name="personal_info.phone"]',
    )
    if (!input) {
      console.warn("Phone input not found")
      return { phoneFilled: false, phoneCountryFilled: false }
    }

    const targetIso2 = phoneCountryCode.resolveIso2FromCountryName(
      phoneCountryCode.normalizePhoneCountryText(
        phoneCountryCode.extractPhoneCountryName(countrySource) ||
          countrySource,
      ),
    )
    const phoneDigitLength = phoneValue.replace(/\D/g, "").length

    for (let attempt = 0; attempt < 3; attempt += 1) {
      let selectedIso2 = readActivePhoneCountryIso2()
      let countryOk = !countrySource

      if (countrySource && (!targetIso2 || selectedIso2 !== targetIso2)) {
        const flagButton = xpath.getFirstOrderedNodeSafe(
          '//button[contains(@class, "iti__selected-country")]',
        )
        if (flagButton) {
          flagButton.click()
          await delay.delay(300)
          const option = findPhoneCountryOption(countrySource)
          if (option) {
            option.click()
            await delay.delay(250)
          }
          selectedIso2 = readActivePhoneCountryIso2()
          countryOk =
            !!option &&
            (!targetIso2 || !selectedIso2 || selectedIso2 === targetIso2)
        }
      } else if (countrySource) {
        countryOk = true
      }

      if (
        countrySource &&
        targetIso2 &&
        selectedIso2 &&
        selectedIso2 !== targetIso2
      ) {
        console.info("[RecruiterflowPhoneDebug] country-not-committed", {
          attempt: attempt + 1,
          targetIso2,
          selectedIso2,
          phoneDigitLength,
        })
        continue
      }

      writePhoneInputValue(input, phoneValue)
      phoneFilled = true
      await delay.delay(200)
      selectedIso2 = readActivePhoneCountryIso2()

      if (
        countrySource &&
        targetIso2 &&
        selectedIso2 &&
        selectedIso2 !== targetIso2
      ) {
        console.info(
          "[RecruiterflowPhoneDebug] country-reset-after-phone-write",
          {
            attempt: attempt + 1,
            targetIso2,
            selectedIso2,
            phoneDigitLength,
          },
        )
        continue
      }

      phoneCountryFilled = countryOk
      console.info("[RecruiterflowPhoneDebug] fill-result", {
        attempt: attempt + 1,
        targetIso2,
        selectedIso2: selectedIso2 || "unknown",
        phoneDigitLength,
        phoneFilled,
        phoneCountryFilled,
      })
      break
    }

    input.dispatchEvent(new Event("blur", { bubbles: true }))
    await delay.delay(100)
    return { phoneFilled, phoneCountryFilled }
  } catch (error) {
    console.error("Error filling phone number:", error)
    return { phoneFilled, phoneCountryFilled: false }
  }
}

export async function fillYesNoButtons(rule, answers) {
  if (!rule.$checkboxs || !answers || answers.length === 0) return
  const answer = answers[0].toLowerCase()
  const yesButton = rule.$checkboxs[0]
  const noButton = rule.$checkboxs[1]
  if (choiceMatch.isExactChoiceMatch(answer, "yes") && yesButton) {
    yesButton.click()
    await delay.delay(200)
  } else if (choiceMatch.isExactChoiceMatch(answer, "no") && noButton) {
    noButton.click()
    await delay.delay(200)
  }
}

export async function fillCheckboxField(rule, answers) {
  if (!rule.$checkboxs || !answers) return

  const isYesNo =
    rule.options.length === 2 &&
    rule.options.some((option) => option.toLowerCase().includes("yes")) &&
    rule.options.some((option) => option.toLowerCase().includes("no"))

  if (isYesNo) {
    await fillYesNoButtons(rule, answers)
    return
  }

  for (let index = 0; index < rule.options.length; index++) {
    const optionLabel = rule.options[index]
    const checkbox = rule.$checkboxs[index]
    if (checkbox && checkbox.type === "checkbox") {
      const shouldCheck = answers.some((answer) =>
        choiceMatch.isExactChoiceMatch(optionLabel, answer),
      )
      if (checkbox.checked !== shouldCheck) {
        checkbox.click()
        await delay.delay(100)
      }
    }
  }
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const fileInput = xpath.getFirstOrderedNodeSafe(
    '//div[contains(@class, "form-dnd-container")][1]//input[@type="file"]',
  )
  if (fileInput) {
    await dom.uploadFiles(
      fileInput,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      updateRequired,
      updateFilled,
      "Resume/CV",
    )
  }
}

export async function uploadCoverLetter(
  coverLetter,
  updateRequired,
  updateFilled,
) {
  const uploadDom = getRecruiterflowCoverLetterUploadDom()
  if (!uploadDom.container || !uploadDom.input?.files) return false

  uploadDom.input.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)

  const blob = await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter)
  uploadDom.input.files = blob.files
  dom.triggerEvents(uploadDom.input, ["change"])

  const uploaded = await observer.waitForCondition(
    () => {
      if (!filesMatch(uploadDom.input, blob)) return false
      const text =
        getRecruiterflowCoverLetterUploadDom().uploadedItem?.textContent || ""
      return !!text.trim()
    },
    {
      timeout: 1e4,
      interval: 100,
      observeTarget: uploadDom.container,
    },
  )

  if (!uploaded) return false
  updateRequired({ label: "Cover Letter", required: true })
  updateFilled("Cover Letter")
  return true
}

export async function expandForm(answer) {
  if (answer.education && answer.education.length > 0) {
    const current = await countEducationRows()
    const needed = answer.education.length
    for (let i = current; i < needed; i++) await addEducationSection()
  }

  if (answer.workExperience && answer.workExperience.length > 0) {
    const current = await countExperienceRows()
    const needed = answer.workExperience.length
    console.info("[Recruiterflow][Experience] reconcile:start", {
      currentRowCount: current,
      answerRecordCount: needed,
    })
    for (let i = current; i < needed; i++) await addEmploymentSection()
    const removedEmptyRows = await removeTrailingEmptyExperienceRows(needed)
    console.info("[Recruiterflow][Experience] reconcile:complete", {
      answerRecordCount: needed,
      removedEmptyRows,
      finalRowCount: await countExperienceRows(),
    })
  }
}

async function countEducationRows() {
  return xpath.getOrderedNodesSafe(
    '//input[starts-with(@name, "candidate_profile.school.")]',
  ).length
}

async function countExperienceRows() {
  return xpath.getOrderedNodesSafe(
    '//input[starts-with(@name, "candidate_profile.company-name.")]',
  ).length
}

function isExperienceRowEmpty(row) {
  const fields = Array.from(
    row.querySelectorAll("input, textarea, select"),
  ).filter((input) => {
    const type = (input.getAttribute("type") || "").toLowerCase()
    return (
      type !== "hidden" &&
      type !== "file" &&
      type !== "button" &&
      type !== "submit"
    )
  })
  return fields.every((input) => {
    const type = (input.getAttribute("type") || "").toLowerCase()
    return type === "checkbox" || type === "radio"
      ? !input.checked
      : !String(input.value || "").trim()
  })
}

async function removeTrailingEmptyExperienceRows(keepCount) {
  let rows = Array.from(
    document.querySelectorAll(".experience-input-wrapper"),
  )
  let removed = 0

  while (rows.length > keepCount) {
    const last = rows[rows.length - 1]
    if (!last || !isExperienceRowEmpty(last)) {
      console.info("[Recruiterflow][Experience] reconcile:preserve-tail", {
        answerRecordCount: keepCount,
        currentRowCount: rows.length,
      })
      break
    }

    const removeButton = last.querySelector(
      "button#remove-experience-button, button.remove-experience-button",
    )
    if (!removeButton) {
      console.warn("[Recruiterflow][Experience] reconcile:missing-remove", {
        answerRecordCount: keepCount,
        currentRowCount: rows.length,
      })
      break
    }

    const previousCount = rows.length
    removeButton.click()
    const removedApplied = await observer.waitForCondition(
      () =>
        document.querySelectorAll(".experience-input-wrapper").length <
        previousCount,
      {
        timeout: 3e3,
        interval: 100,
        observeTarget: document.body,
      },
    )

    rows = Array.from(
      document.querySelectorAll(".experience-input-wrapper"),
    )
    if (!removedApplied || rows.length >= previousCount) {
      console.warn(
        "[Recruiterflow][Experience] reconcile:remove-not-applied",
        {
          answerRecordCount: keepCount,
          previousRowCount: previousCount,
          currentRowCount: rows.length,
        },
      )
      break
    }
    removed += 1
  }

  return removed
}

export async function addEducationSection() {
  const button = xpath.getFirstOrderedNodeSafe(
    '//button[@id="add-education-button"] | //button[contains(@class, "add-education-button")] | //button[contains(text(), "Add") and contains(., "Education")]',
  )
  if (button) {
    button.click()
    await delay.delay(500)
  }
}

export async function addEmploymentSection() {
  const button = xpath.getFirstOrderedNodeSafe(
    '//button[@id="add-experience-button"] | //button[contains(@class, "add-experience-button")] | //button[contains(text(), "Add") and contains(., "Experience")]',
  )
  if (button) {
    button.click()
    await delay.delay(500)
  }
}

export async function removeEducationSection(index) {
  const buttons = xpath.getOrderedNodesSafe(
    '//button[@id="remove-education-button"] | //button[contains(@class, "remove-education-button")]',
  )
  if (buttons[index]) {
    buttons[index].click()
    await delay.delay(300)
  }
}

export async function removeEmploymentSection(index) {
  const buttons = xpath.getOrderedNodesSafe(
    '//button[@id="remove-experience-button"] | //button[contains(@class, "remove-experience-button")]',
  )
  if (buttons[index]) {
    buttons[index].click()
    await delay.delay(300)
  }
}

export async function blurPage() {
  const target = xpath.getFirstOrderedNodeSafe(
    '//div[contains(@class, "apply-to-job-form-container-wrapper")] | //main | //body',
  )
  if (target) {
    dom.triggerEvents(target, ["mousedown", "click"])
    await delay.delay(100)
  }
}

export async function waitPageClean() {
  const formTimeoutMs = 5000
  const formStarted = Date.now()
  while (Date.now() - formStarted < formTimeoutMs) {
    const form = xpath.getFirstOrderedNodeSafe(
      '//div[contains(@class, "apply-to-job-form-container-wrapper")]',
    )
    if (form) {
      await delay.delay(500)
      break
    }
    await delay.delay(100)
  }

  const spinnerTimeoutMs = 2000
  const spinnerStarted = Date.now()
  while (Date.now() - spinnerStarted < spinnerTimeoutMs) {
    const spinners = document.querySelectorAll(
      '[class*="loading"], [class*="spinner"], [class*="Loading"]',
    )
    if (spinners.length === 0) break
    await delay.delay(100)
  }
  await delay.delay(300)
}

export async function expandAllSections() {
  const sections = xpath.getOrderedNodesSafe(
    '//div[contains(@class, "input-section-container")]',
  )
  for (const section of sections) {
    const next = section.nextElementSibling
    if (next && next.style.display === "none") {
      section.click()
      await delay.delay(300)
    }
  }
}

export async function scrollToElement(element) {
  if (!element) return
  element.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(300)
}

export function submitHandler(_event) {}

export async function clickSubmitButton() {
  const button = xpath.getFirstOrderedNodeSafe(
    '//button[@id="submit-application-button"] | //button[contains(@class, "submit-application-button")]',
  )
  if (button) {
    await scrollToElement(button)
    button.click()
    await delay.delay(500)
  }
}

export function validateRequiredFields() {
  const missingFields = []
  const personalFields = [
    { name: "personal_info.first_name", label: "First Name" },
    { name: "personal_info.last_name", label: "Last Name" },
    { name: "personal_info.email", label: "Email" },
    { name: "personal_info.phone", label: "Phone" },
    { name: "personal_info.location.city", label: "City" },
    { name: "personal_info.location.state", label: "State" },
    { name: "personal_info.location.postal_code", label: "Zip Code" },
  ]

  for (const field of personalFields) {
    const input = xpath.getFirstOrderedNodeSafe(
      `//input[@name="${field.name}"]`,
    )
    if (!(input && input.value.trim())) missingFields.push(field.label)
  }

  const experience = xpath.getFirstOrderedNodeSafe(
    '//input[@name="candidate_profile.company-name.0"]',
  )
  if (!(experience && experience.value.trim())) missingFields.push("Experience")

  const education = xpath.getFirstOrderedNodeSafe(
    '//input[@name="candidate_profile.school.0"]',
  )
  if (!(education && education.value.trim())) missingFields.push("Education")

  return {
    valid: missingFields.length === 0,
    missingFields,
  }
}

export function debugFormState() {
  const state = {
    personalInfo: {},
    experience: [],
    education: [],
    additionalQuestions: [],
  }

  const personalKeys = [
    "first_name",
    "last_name",
    "email",
    "phone",
    "location.city",
    "location.state",
    "location.postal_code",
  ]
  for (const key of personalKeys) {
    const input = xpath.getFirstOrderedNodeSafe(
      `//input[@name="personal_info.${key}"]`,
    )
    if (input) state.personalInfo[key] = input.value
  }

  let experienceIndex = 0
  for (;;) {
    const company = xpath.getFirstOrderedNodeSafe(
      `//input[@name="candidate_profile.company-name.${experienceIndex}"]`,
    )
    if (!company) break
    state.experience.push({
      company: company.value,
      title:
        xpath.getFirstOrderedNodeSafe(
          `//input[@name="candidate_profile.designation.${experienceIndex}"]`,
        )?.value || "",
    })
    experienceIndex++
  }

  let educationIndex = 0
  for (;;) {
    const school = xpath.getFirstOrderedNodeSafe(
      `//input[@name="candidate_profile.school.${educationIndex}"]`,
    )
    if (!school) break
    state.education.push({
      school: school.value,
      degree:
        xpath.getFirstOrderedNodeSafe(
          `//input[@name="candidate_profile.degree.${educationIndex}"]`,
        )?.value || "",
    })
    educationIndex++
  }

  return state
}
