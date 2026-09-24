// @ts-nocheck
/**
 * Zoho Recruit v2 — WebToLeads DOM fill operations.
 */

import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as rules from "./rules.ts"
import * as enums from "../../../core/enums.js"
import * as delay from "../../../utils/delay.js"
import * as sectionResults from "../../methods/section-results.ts"
import * as zohoSectionResults from "../zohorecruit/section-results.ts"

export async function preExpandForm() {
  await deleteAllEducationRows()
  if (countEducationRows() === 0) {
    await addEducationSection()
    await delay.delay(100)
  }
  await deleteAllExperienceRows()
  if (countExperienceRows() === 0) {
    await addExperienceSection()
    await delay.delay(100)
  }
}

async function deleteAllEducationRows() {
  const buttons = document.querySelectorAll(
    'a[title="Delete Educational Details"]',
  )
  for (const button of Array.from(buttons)) {
    button.click()
    await delay.delay(100)
  }
}

async function deleteAllExperienceRows() {
  const buttons = document.querySelectorAll(
    'a[title="Delete Experience Details"]',
  )
  for (const button of Array.from(buttons)) {
    button.click()
    await new Promise((resolve) => setTimeout(resolve, 300))
  }
}

export async function expandForm(answer) {
  if (answer.education.length >= 1) {
    for (let index = 0; index < answer.education.length; index++) {
      await addEducationSection()
    }
  }
  if (answer.workExperience.length >= 1) {
    for (
      let index = 0;
      index < answer.workExperience.length;
      index++
    ) {
      await addExperienceSection()
    }
  }
}

export async function addEducationSection() {
  const button = document.querySelector(
    'a[title="Add Educational Details"]',
  )
  if (button) {
    button.click()
    await delay.delay(100)
  }
}

export async function addExperienceSection() {
  const button = document.querySelector(
    'a[title="Add Experience Details"]',
  )
  if (button) {
    button.click()
    await delay.delay(100)
  }
}

function countEducationRows() {
  const section = document.querySelector(
    '.TD-twocol[data-l*="Educational"]',
  )
  if (!section) return 0
  const hidden = section.querySelectorAll(
    '.innerElem[style*="display: none"]',
  )
  if (hidden.length > 0) return hidden.length - 1
  const all = section.querySelectorAll(".innerElem")
  return all.length
}

function countExperienceRows() {
  const section = document.querySelector(
    '.TD-twocol[data-l*="Experience"]',
  )
  if (!section) return 0
  const hidden = section.querySelectorAll(
    '.innerElem[style*="display: none"]',
  )
  if (hidden.length > 0) return hidden.length - 1
  const all = section.querySelectorAll(".innerElem")
  return all.length
}

export async function uploadResume(
  resumeInfo,
  updateRequired,
  updateFilled,
) {
  const resumeInput = document.querySelector(
    'input[name*="Resume"][type="file"]',
  )
  const existing = document.getElementById(
    "theFile_content(Resume)",
  )
  if (existing && existing.children.length > 0) {
    updateFilled("Resume/CV")
    updateRequired({
      label: "Resume/CV",
      required: false,
    })
    return
  }
  if (resumeInput && resumeInfo) {
    await dom.uploadFiles(
      resumeInput,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      updateRequired,
      updateFilled,
      "Resume/CV",
    )
  }
  const coverLetterInput = document.querySelector(
    'input[name*="Cover Letter"][type="file"]',
  )
  if (coverLetterInput) {
    updateRequired({
      label: "Cover Letter",
      required: false,
    })
  }
}

export async function addEducationRow() {
  const button = document.querySelector(
    'a[title="Add Educational Details"]',
  )
  if (button) {
    button.click()
    await delay.delay(100)
  }
}

export async function addExperienceRow() {
  const button = document.querySelector(
    'a[title="Add Experience Details"]',
  )
  if (button) {
    button.click()
    await delay.delay(100)
  }
}

export async function fillSelect(select, value) {
  if (!select || !value) return false
  const optionText = value.toString().trim()
  const options = Array.from(select.options)
  const matched = options.find(
    (option) =>
      option.value === optionText ||
      option.textContent?.trim() === optionText,
  )
  if (matched) {
    select.value = matched.value
    select.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(100)
    return select.value === matched.value
  }
  console.info(
    "[ZohoRecruit-V2][section-field] dropdown-option-missing",
  )
  return false
}

export async function fillEducation(
  educationAnswers,
  operationConfig,
  progressTracker = {},
) {
  const educationRules = await rules.getEduRules()
  const reporter = sectionResults.createSequentialSectionResultReporter(
    "education",
    progressTracker,
  )
  for (let index = 0; index < educationAnswers.length; index++) {
    const record = educationAnswers[index]
    const sectionRule = educationRules[index]
    if (!sectionRule || !sectionRule.children) continue
    const children = sectionRule.children
    const recordResult = zohoSectionResults.createZohoRecordResult(
      "education",
      index,
      sectionRule,
      record,
      reporter,
    )
    const textRules = children.filter(
      (child) => child.type === enums.FIELD_TYPE.TEXT,
    )
    const textOps = answerMethods.getRegularOperations(
      textRules,
      record,
      recordResult.operationConfig(operationConfig),
    )
    for (const op of textOps) {
      await op()
      await delay.delay(100)
    }
    const selectRules = children.filter(
      (child) => child.type === enums.FIELD_TYPE.SELECT,
    )
    for (const selectRule of selectRules) {
      const selectValue =
        record[selectRule.name] || record[selectRule.label]
      if (
        selectValue &&
        selectRule.$input instanceof HTMLSelectElement
      ) {
        await recordResult.run(selectRule, selectValue, () =>
          fillSelect(selectRule.$input, selectValue),
        )
      }
    }
    if (record.isCurrent) {
      const currentlyPursuing = children.find((child) =>
        child.label.toLowerCase().includes("currently pursuing"),
      )
      if (currentlyPursuing && currentlyPursuing.$input) {
        await recordResult.run(currentlyPursuing, true, async () => {
          const input = currentlyPursuing.$input
          input.click()
          await delay.delay(200)
          return (
            input instanceof HTMLInputElement && input.checked
          )
        })
      }
    }
  }
}

export async function fillExperience(
  experienceAnswers,
  operationConfig,
  progressTracker = {},
) {
  const experienceRules = await rules.getExpRules()
  const reporter = sectionResults.createSequentialSectionResultReporter(
    "employment",
    progressTracker,
  )
  for (let index = 0; index < experienceAnswers.length; index++) {
    const record = experienceAnswers[index]
    const sectionRule = experienceRules[index]
    if (!sectionRule || !sectionRule.children) continue
    const children = sectionRule.children
    const recordResult = zohoSectionResults.createZohoRecordResult(
      "employment",
      index,
      sectionRule,
      record,
      reporter,
    )
    const textRules = children.filter(
      (child) => child.type === enums.FIELD_TYPE.TEXT,
    )
    const textOps = answerMethods.getRegularOperations(
      textRules,
      record,
      recordResult.operationConfig(operationConfig),
    )
    for (const op of textOps) {
      await op()
      await delay.delay(100)
    }
    const selectRules = children.filter(
      (child) => child.type === enums.FIELD_TYPE.SELECT,
    )
    for (const selectRule of selectRules) {
      const selectValue =
        record[selectRule.name] || record[selectRule.label]
      if (
        selectValue &&
        selectRule.$input instanceof HTMLSelectElement
      ) {
        await recordResult.run(selectRule, selectValue, () =>
          fillSelect(selectRule.$input, selectValue),
        )
      }
    }
    if (
      record.isCurrent ||
      (record["End date"] &&
        record["End date"].toLowerCase().includes("present"))
    ) {
      const currentlyWorking = children.find((child) =>
        child.label.toLowerCase().includes("currently work"),
      )
      if (currentlyWorking && currentlyWorking.$input) {
        await recordResult.run(currentlyWorking, true, async () => {
          const input = currentlyWorking.$input
          input.click()
          await delay.delay(200)
          return (
            input instanceof HTMLInputElement && input.checked
          )
        })
      }
    }
  }
}
