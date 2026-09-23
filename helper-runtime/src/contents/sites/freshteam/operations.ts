// @ts-nocheck
/**
 * Freshteam — DOM fill operations (inputs, education, employment, resume, cover letter).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as sectionResults from "../../methods/section-results.js"
import * as inputUtils from "../../crawler/utils/input.js"
import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as observer from "../../methods/observer.js"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as freshteamAnswer from "./answer.ts"
import * as rules from "./rules.ts"

const COVER_LETTER_LABEL = "Cover Letter"
const COVER_LETTER_INPUT_SELECTOR =
  'input[type="file"]#uploadCoverLetter, input[type="file"].upload-cover, input[type="file"][name*="cover_letters_attributes"], input[type="file"][name*="cover_letter"]'

function normalizeText(text) {
  return (text || "").toLowerCase().replace(/\s+/g, " ").trim()
}

function getCoverLetterUploadDom() {
  let input = document.querySelector(COVER_LETTER_INPUT_SELECTOR)
  let container = input?.closest(".file-field")
  if (input && container && normalizeText(container.textContent).includes("cover letter")) {
    return {
      container,
      input,
      uploadedName: container.querySelector("#sanitizedCoverLetterName"),
      deleteButton: container.querySelector("#cover-letter-delete"),
    }
  }
  return {
    container: null,
    input: null,
    uploadedName: null,
    deleteButton: null,
  }
}

export function getFreshteamCoverLetterStatus() {
  let { input, uploadedName, deleteButton } = getCoverLetterUploadDom()
  return input && uploadedName && deleteButton ? "required" : ""
}

export function checkCoverLetter() {
  dom.postCoverLetterStatus(getFreshteamCoverLetterStatus())
}

function getUploadedCoverLetterName() {
  return getCoverLetterUploadDom().uploadedName?.textContent?.trim() || ""
}

async function waitForCoverLetterRemoved(observeTarget) {
  return await observer.waitForCondition(() => !getUploadedCoverLetterName(), {
    timeout: 3e3,
    interval: 100,
    observeTarget: observeTarget || document.body,
  })
}

async function waitForCoverLetterUploaded(observeTarget) {
  return await observer.waitForCondition(() => !!getUploadedCoverLetterName(), {
    timeout: 4e3,
    interval: 100,
    observeTarget: observeTarget || document.body,
  })
}

export async function fillInputTextField(input, value) {
  if (input && value && value.trim() !== "") {
    input.scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
    await inputUtils.fillDefaultInputField(input, value)
  }
}

export async function fillSelectField(rule, values) {
  if (!values || values.length === 0) return
  let selectedValue = values[0]
  rule.label
  let input = rule.$input
  if (!input) return
  input.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)
  let options = Array.from(input.options)
  let matched = options.find(
    (option) =>
      option.textContent.trim().toLowerCase() === selectedValue.toLowerCase() ||
      option.value.toLowerCase() === selectedValue.toLowerCase(),
  )
  if (matched) {
    input.value = matched.value
    input.dispatchEvent(new Event("change", { bubbles: true }))
    input.dispatchEvent(new Event("input", { bubbles: true }))
  }
}

export async function fillCheckboxField(rule, values) {
  rule.label
  let checkboxes = rule.$checkboxs || []
  rule.options
  if (!checkboxes.length) return
  if (checkboxes[0]) {
    checkboxes[0].scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
  }
  for (let value of values) {
    let needle = String(value).toLowerCase().trim()
    for (let checkbox of checkboxes) {
      let label = checkbox.closest("label")
      if (label) {
        let clone = label.cloneNode(true)
        let nestedInput = clone.querySelector('input[type="checkbox"]')
        if (nestedInput) nestedInput.remove()
        let labelText = clone.textContent?.trim() || ""
        let labelLower = labelText.toLowerCase()
        if (choiceMatch.isExactChoiceMatch(labelLower, needle)) {
          if (!checkbox.checked) checkbox.click()
          return
        }
      } else {
        let sibling = checkbox.nextElementSibling
        if (sibling && sibling.tagName === "SPAN") {
          let siblingText = sibling.textContent?.trim() || ""
          let siblingLower = siblingText.toLowerCase()
          if (choiceMatch.isExactChoiceMatch(siblingLower, needle)) {
            if (!checkbox.checked) checkbox.click()
            return
          }
        }
      }
    }
  }
}

export async function fillRadioGroupField(rule, values) {
  rule.label
  let selectedValue = values?.[0]
  if (!selectedValue) return
  let radioParent = rule.$radioParent
  if (!radioParent) return
  radioParent.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)
  let radios = Array.from(radioParent.querySelectorAll('input[type="radio"]'))
  let matched = null
  for (let radio of radios) {
    if (radio.disabled) continue
    let label = radio.closest("label")
    let optionText = ""
    let radioTextSpan = label?.querySelector("span.radio-text")
    if (radioTextSpan) {
      optionText = radioTextSpan.textContent?.trim() || ""
    } else if (label) {
      let clone = label.cloneNode(true)
      let nestedInput = clone.querySelector('input[type="radio"]')
      if (nestedInput) nestedInput.remove()
      optionText = clone.textContent?.trim() || ""
    }
    if (
      optionText.toLowerCase().trim() === selectedValue.toLowerCase().trim()
    ) {
      matched = radio
      break
    }
  }
  if (matched) {
    let label = matched.closest("label")
    if (label) (label.textContent || "").trim()
    if (!matched.checked) {
      matched.checked = true
      matched.dispatchEvent(new Event("change", { bubbles: true }))
      matched.dispatchEvent(new Event("click", { bubbles: true }))
      matched.dispatchEvent(new Event("input", { bubbles: true }))
      if (label) label.click()
    }
  }
}

export async function fillDateField(input, value) {
  if (!input || !value || value.trim() === "") return
  input.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)
  let formatted = freshteamAnswer.formatDate(value)
  input.value = formatted
  await delay.delay(100)
}

export async function fillEducationFields(
  formRules,
  educationAnswers,
  operationConfig,
  taskQueue,
  onFilled,
  progressTracker,
) {
  let educationRules = formRules.filter(
    (rule) => rule.type === enums.FIELD_TYPE.EDUCATION,
  )
  if (educationRules.length === 0) {
    console.warn("No education rule found")
    return false
  }

  let groupFields = xpath.getOrderedNodesSafe(
    '//div[contains(@class, "form-group") and .//div[contains(@class, "group-field")]]',
    document.body,
  )
  let educationSection = null
  for (let group of groupFields) {
    let title = xpath.getFirstOrderedNodeSafe(
      './/div[contains(@class, "link-label-title")]',
      group,
    )
    if (title) {
      let titleText = title.textContent?.trim().toLowerCase() || ""
      if (titleText.includes("education")) {
        educationSection = group
        break
      }
    }
  }
  if (!educationSection) {
    console.warn("No education section found")
    return false
  }

  let educationRule = educationRules[0]
  let childTemplates = educationRule.children || []
  let filledAny = false
  let recordFocusByGroup = new Map()
  let sectionReporter = progressTracker
    ? sectionResults.createSequentialSectionResultReporter(
        "education",
        progressTracker,
        "Education",
      )
    : undefined

  for (let index = 0; index < educationAnswers.length; index++) {
    let educationAnswer = educationAnswers[index]
    if (index > 0) {
      await rules.addEducation()
      await delay.delay(200)
    }
    let educationGroups = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "education-group")]',
      educationSection,
    )
    if (educationGroups.length === 0) continue
    let currentGroup =
      educationGroups[index] || educationGroups[educationGroups.length - 1]
    let matchedChildren = []
    for (let childTemplate of childTemplates) {
      let fieldGroups = xpath.getOrderedNodesSafe(
        './/div[contains(@class, "form-group") and not(contains(@class, "group-field"))]',
        currentGroup,
      )
      for (let fieldGroup of fieldGroups) {
        let fieldRule = rules.getRule(fieldGroup)
        if (
          fieldRule &&
          fieldRule.label &&
          fieldRule.label.trim() !== "" &&
          fieldRule.label === childTemplate.label
        ) {
          matchedChildren.push(fieldRule)
          break
        }
      }
    }
    if (matchedChildren.length > 0) {
      let sectionRules = [
        {
          type: enums.FIELD_TYPE.EDUCATION,
          label: "Education",
          required: true,
          children: matchedChildren,
        },
      ]
      let previousIndex = recordFocusByGroup.get(currentGroup)
      if (previousIndex !== undefined && previousIndex !== index) {
        sectionReporter?.clearRecordFocus(previousIndex)
      }
      recordFocusByGroup.set(currentGroup, index)
      let operationsList = answerMethods.getEducationOperations(
        sectionRules,
        [educationAnswer],
        operationConfig,
        undefined,
        sectionReporter?.forRecord(index, sectionRules),
      )
      for (let operation of operationsList) taskQueue.add(operation)
      await taskQueue.run()
      if (educationAnswer?.isCurrent === true) {
        let currentCheckbox = xpath.getFirstOrderedNodeSafe(
          './/input[@type="checkbox"]',
          currentGroup,
        )
        if (currentCheckbox && !currentCheckbox.checked) {
          currentCheckbox.scrollIntoView({
            behavior: "smooth",
            block: "center",
          })
          await delay.delay(100)
          currentCheckbox.click()
          await delay.delay(100)
        }
      }
      filledAny = true
    }
  }

  if (filledAny) onFilled("Education")
  return filledAny
}

export async function fillEmploymentFields(
  formRules,
  employmentAnswers,
  operationConfig,
  taskQueue,
  onFilled,
  progressTracker,
) {
  let employmentRules = formRules.filter(
    (rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT,
  )
  if (employmentRules.length === 0) {
    console.warn("No employment rule found")
    return false
  }

  let groupFields = xpath.getOrderedNodesSafe(
    '//div[contains(@class, "form-group") and .//div[contains(@class, "group-field")]]',
    document.body,
  )
  let employmentSection = null
  for (let group of groupFields) {
    let title = xpath.getFirstOrderedNodeSafe(
      './/div[contains(@class, "link-label-title")]',
      group,
    )
    if (title) {
      let titleText = title.textContent?.trim().toLowerCase() || ""
      if (
        titleText.includes("employer") ||
        titleText.includes("employment")
      ) {
        employmentSection = group
        break
      }
    }
  }
  if (!employmentSection) {
    console.warn("No employment section found")
    return false
  }

  let employmentRule = employmentRules[0]
  let childTemplates = employmentRule.children || []
  let filledAny = false
  let recordFocusByGroup = new Map()
  let sectionReporter = progressTracker
    ? sectionResults.createSequentialSectionResultReporter(
        "employment",
        progressTracker,
        "Employment",
      )
    : undefined

  for (let index = 0; index < employmentAnswers.length; index++) {
    let employmentAnswer = employmentAnswers[index]
    if (index > 0) {
      await rules.addEmployment()
      await delay.delay(200)
    }
    let employerGroups = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "employer-group")]',
      employmentSection,
    )
    if (employerGroups.length === 0) continue
    let currentGroup =
      employerGroups[index] || employerGroups[employerGroups.length - 1]
    let matchedChildren = []
    for (let childTemplate of childTemplates) {
      let fieldGroups = xpath.getOrderedNodesSafe(
        './/div[contains(@class, "form-group") and not(contains(@class, "group-field"))]',
        currentGroup,
      )
      for (let fieldGroup of fieldGroups) {
        let fieldRule = rules.getRule(fieldGroup)
        if (
          fieldRule &&
          fieldRule.label &&
          fieldRule.label.trim() !== "" &&
          fieldRule.label === childTemplate.label
        ) {
          matchedChildren.push(fieldRule)
          break
        }
      }
    }
    if (matchedChildren.length > 0) {
      let sectionRules = [
        {
          type: enums.FIELD_TYPE.EMPLOYMENT,
          label: "Employment",
          required: true,
          children: matchedChildren,
        },
      ]
      let previousIndex = recordFocusByGroup.get(currentGroup)
      if (previousIndex !== undefined && previousIndex !== index) {
        sectionReporter?.clearRecordFocus(previousIndex)
      }
      recordFocusByGroup.set(currentGroup, index)
      let operationsList = answerMethods.getEmploymentOperations(
        sectionRules,
        [employmentAnswer],
        operationConfig,
        undefined,
        sectionReporter?.forRecord(index, sectionRules),
      )
      for (let operation of operationsList) taskQueue.add(operation)
      await taskQueue.run()
      if (employmentAnswer?.isCurrent === true) {
        let currentCheckbox = xpath.getFirstOrderedNodeSafe(
          './/input[@type="checkbox"]',
          currentGroup,
        )
        if (currentCheckbox && !currentCheckbox.checked) {
          currentCheckbox.scrollIntoView({
            behavior: "smooth",
            block: "center",
          })
          await delay.delay(100)
          currentCheckbox.click()
          await delay.delay(100)
        }
      }
      filledAny = true
    }
  }

  if (filledAny) onFilled("Employment")
  return filledAny
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  let fileInput = xpath.getFirstOrderedNodeSafe(
    '//input[@type="file"]',
    document.body,
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
  let { container, input, uploadedName, deleteButton } =
    getCoverLetterUploadDom()
  if (!input || !uploadedName || !deleteButton || !coverLetter?.coverLetterId) {
    return false
  }
  try {
    if (uploadedName.textContent?.trim()) {
      deleteButton.click()
      let removed = await waitForCoverLetterRemoved(container)
      if (!removed) {
        console.warn("[Freshteam] Existing cover letter was not removed")
        return false
      }
    }
    let freshInput = getCoverLetterUploadDom().input
    if (!freshInput) return false
    freshInput.files = (
      await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter)
    ).files
    freshInput.dispatchEvent(
      new Event("change", { bubbles: true, cancelable: false }),
    )
    let uploaded = await waitForCoverLetterUploaded(container)
    if (!uploaded) {
      console.warn("[Freshteam] Cover letter upload was not confirmed")
      return false
    }
    updateRequired({ label: COVER_LETTER_LABEL, required: true })
    updateFilled(COVER_LETTER_LABEL)
    return true
  } catch (error) {
    console.error("[Freshteam] Error uploading cover letter:", error)
    return false
  }
}
