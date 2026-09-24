// @ts-nocheck
/**
 * Breezy ATS — form rule extraction and hard-coded edu/work config.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as polyglot from "./polyglot.ts"

export let HARDCODE_KEY = {}
;(function (keys) {
  keys.education = "education"
  keys.workExperience = "workExperience"
})(HARDCODE_KEY || (HARDCODE_KEY = {}))

export function getBreezySalaryFieldType(label) {
  if (/\b(salary|compensation|pay)\b/i.test(label)) {
    return /\b(range|minimum and maximum|min and max)\b/i.test(label)
      ? enums.FIELD_TYPE.TEXT
      : enums.FIELD_TYPE.NUMBER
  }
  return enums.FIELD_TYPE.TEXT
}

let buildAddButtonXpath = (canonicalKey) =>
  `.//div[@class="section-footer"]//a[child::span[${polyglot.buildBreezyPolyglotXpathTextCondition(canonicalKey, (phrase) => `contains(text(), "${phrase}")`)}]]`

export let hardCodeConfig = {
  [HARDCODE_KEY.education]: {
    key: HARDCODE_KEY.education,
    container: './/li[@ng-repeat="candidateSchool in candidate.education"]',
    snapshot: '//li[@ng-repeat="candidateSchool in candidate.education"]',
    addButton: buildAddButtonXpath("Add Education"),
    fields: [
      {
        key: "School",
        xpath: './/input[@ng-model="candidateSchool.school_name"]',
      },
      {
        key: "Study",
        xpath: './/input[@ng-model="candidateSchool.field_of_study"]',
      },
      {
        key: "Start",
        xpath: './/input[@ng-model="candidateSchool.date_start"]',
      },
      {
        key: "End",
        xpath: './/input[@ng-model="candidateSchool.date_end"]',
      },
    ],
  },
  [HARDCODE_KEY.workExperience]: {
    key: HARDCODE_KEY.workExperience,
    container:
      './/li[@ng-repeat="candidatePosition in candidate.work_history"]',
    snapshot:
      '//li[@ng-repeat="candidatePosition in candidate.work_history"]',
    addButton: buildAddButtonXpath("Add Position"),
    fields: [
      {
        key: "Title",
        xpath: './/input[@ng-model="candidatePosition.title"]',
      },
      {
        key: "Organization",
        alternateKey: "Company",
        xpath: './/input[@ng-model="candidatePosition.company_name"]',
      },
      {
        key: "Start",
        xpath: './/input[@ng-model="candidatePosition.date_start"]',
      },
      {
        key: "End",
        xpath: './/input[@ng-model="candidatePosition.date_end"]',
      },
      {
        key: "jobDescriptions",
        xpath: './/textarea[@ng-model="candidatePosition.summary"]',
      },
    ],
  },
}

export let getFillingLabels = () =>
  xpath.getOrderedNodes(
    '//h3[contains(@class, "polygot") or child::span[@class="polygot" or contains(@class,"ng-binding")] or @class="polygot" or contains(@class, "ng-binding")]',
  )

export let getRules = async () => {
  let labels = getFillingLabels()
  let rules = []
  for (let label of labels) {
    let rule = parseLabelRule(label)
    if (Array.isArray(rule)) rules.push(...rule)
    if (rule && !Array.isArray(rule)) rules.push(rule)
  }
  return rules
}

export function findCoverLetterTextarea() {
  let textareas = xpath.getOrderedNodes(
    '//textarea[@name="cCoverLetter" or @ng-model="candidate.cover_letter"]',
  )
  if (textareas.length === 0) return null
  let matched = textareas.find((textarea) => {
    let heading = textarea
      .closest?.('div[class*="section"]')
      ?.querySelector("h3")
    return (
      !!heading &&
      polyglot.matchesBreezyLabel(getLabelText(heading), "Cover Letter")
    )
  })
  return matched ?? textareas[0]
}

let parseLabelRule = (labelEl) => {
  let workHistory = parseWorkHistorySection(labelEl)
  if (workHistory) return workHistory

  let education = parseEducationSection(labelEl)
  if (education) return education

  let salary = parseDesiredSalarySection(labelEl)
  if (salary) return salary

  let dateField = parseDateField(labelEl)
  if (dateField) return dateField

  let textField = parseTextInputField(labelEl)
  if (textField) return textField

  let textareaField = parseTextareaField(labelEl)
  if (textareaField) return textareaField

  let selectField = parseSelectField(labelEl)
  if (selectField) return selectField

  let radioField = parseRadioField(labelEl)
  if (radioField) return radioField

  let checkboxField = parseCheckboxField(labelEl)
  return checkboxField || null
}

let parseEducationSection = (labelEl) => {
  let label = getLabelText(labelEl)
  if (label !== "Education") return null

  let firstItem = xpath.getFirstOrderedNode(
    "//h3/parent::div/following-sibling::ul/li",
    labelEl,
  )
  if (firstItem) {
    let children = []
    let school = xpath.getFirstOrderedNode(
      '//input[@placeholder="School"]',
      firstItem,
    )
    let study = xpath.getFirstOrderedNode(
      '//input[@placeholder="Study"]',
      firstItem,
    )
    let summary = xpath.getFirstOrderedNode(
      '//textarea[@placeholder="Summary"]',
      firstItem,
    )
    let start = xpath.getFirstOrderedNode(
      '//input[@ng-model="candidateSchool.date_start"]',
      firstItem,
    )
    let end = xpath.getFirstOrderedNode(
      '//input[@ng-model="candidateSchool.date_end"]',
      firstItem,
    )

    children.push({
      type: enums.FIELD_TYPE.TEXT,
      label: "School",
      required: true,
      $input: school,
      $label: labelEl,
    })
    children.push({
      type: enums.FIELD_TYPE.TEXT,
      label: "Study",
      required: false,
      $input: study,
      $label: labelEl,
    })
    children.push({
      type: enums.FIELD_TYPE.TEXT,
      label: "Summary",
      required: false,
      $input: summary,
      $label: labelEl,
    })
    children.push({
      type: enums.FIELD_TYPE.DATE,
      label: "Start date",
      required: false,
      $input: start,
      $label: labelEl,
    })
    children.push({
      type: enums.FIELD_TYPE.DATE,
      label: "End date",
      required: false,
      $input: end,
      $label: labelEl,
    })

    let options = children.map((child) => ({
      type: child.type,
      label: child.label,
    }))
    return {
      label,
      required: false,
      type: enums.FIELD_TYPE.EDUCATION,
      $input: firstItem,
      options,
      children,
    }
  }
  return null
}

let getEduOrWorkExpItems = (isEducation) => {
  let expr = isEducation
    ? '//li[@ng-repeat="candidateSchool in candidate.education"]'
    : '//li[@ng-repeat="candidatePosition in candidate.work_history"]'
  return xpath.getOrderedNodes(expr, document)
}

export let processEduOrWorkExpRules = (isEducation) => {
  let items = getEduOrWorkExpItems(isEducation)
  let fieldTypes = []
  let fieldLabels = []

  if (isEducation) {
    fieldTypes = [
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.DATE,
      enums.FIELD_TYPE.DATE,
    ]
    fieldLabels = ["School", "Study", "Summary", "Start date", "End date"]
  } else {
    fieldTypes = [
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.DATE,
      enums.FIELD_TYPE.DATE,
    ]
    fieldLabels = ["Company", "Title", "Summary", "Start date", "End date"]
  }

  if (items.length > 0) {
    let results = []
    for (let i = 0; i < items.length; i++) {
      let children = []
      let options = []
      let item = items[i]
      let inputs = xpath.getOrderedNodes(".//input | .//textarea", item)

      for (let j = 0; j < fieldTypes.length; j++) {
        if (!inputs[j]) continue
        let fieldType = fieldTypes[j]

        if (fieldType === enums.FIELD_TYPE.TEXT) {
          children.push({
            type: enums.FIELD_TYPE.TEXT,
            label: fieldLabels[j],
            required: false,
            $input: inputs[j],
            $label: item,
          })
          options.push({
            type: enums.FIELD_TYPE.TEXT,
            label: fieldLabels[j],
            option: [],
          })
        } else if (fieldType === enums.FIELD_TYPE.DATE) {
          children.push({
            type: enums.FIELD_TYPE.DATE,
            label: fieldLabels[j],
            required: false,
            $input: inputs[j],
            $label: item,
          })
          options.push({
            type: enums.FIELD_TYPE.DATE,
            label: fieldLabels[j],
            option: [],
          })
        } else {
          throw Error(
            `Unsupported field type: ${fieldType} in Edu/Work Exp processing`,
          )
        }
      }

      results.push({
        children,
        label: isEducation ? "Education" : "Work History",
        options,
        required: false,
        type: isEducation
          ? enums.FIELD_TYPE.EDUCATION
          : enums.FIELD_TYPE.EMPLOYMENT,
      })
    }
    return results
  }
  return null
}

let parseWorkHistorySection = (labelEl) => {
  let label = getLabelText(labelEl)
  if (label !== "Work History") return null

  let firstItem = xpath.getFirstOrderedNode(
    "//h3/parent::div/following-sibling::ul/li",
    labelEl,
  )
  if (firstItem) {
    let children = []
    let company = xpath.getFirstOrderedNode(
      '//input[@placeholder="School"]',
      firstItem,
    )
    let title = xpath.getFirstOrderedNode(
      '//input[@placeholder="Study"]',
      firstItem,
    )
    let summary = xpath.getFirstOrderedNode(
      '//textarea[@placeholder="Summary"]',
      firstItem,
    )
    let start = xpath.getFirstOrderedNode(
      '//input[@ng-model="candidateSchool.date_start"]',
      firstItem,
    )
    let end = xpath.getFirstOrderedNode(
      '//input[@ng-model="candidateSchool.date_end"]',
      firstItem,
    )

    children.push({
      type: enums.FIELD_TYPE.TEXT,
      label: "Company",
      required: true,
      $input: company,
      $label: labelEl,
    })
    children.push({
      type: enums.FIELD_TYPE.TEXT,
      label: "Title",
      required: false,
      $input: title,
      $label: labelEl,
    })
    children.push({
      type: enums.FIELD_TYPE.TEXT,
      label: "Summary",
      required: false,
      $input: summary,
      $label: labelEl,
    })
    children.push({
      type: enums.FIELD_TYPE.DATE,
      label: "Start date",
      required: false,
      $input: start,
      $label: labelEl,
    })
    children.push({
      type: enums.FIELD_TYPE.DATE,
      label: "End date",
      required: false,
      $input: end,
      $label: labelEl,
    })

    let options = children.map((child) => ({
      type: child.type,
      label: child.label,
    }))
    return {
      label,
      required: false,
      type: enums.FIELD_TYPE.EMPLOYMENT,
      $input: firstItem,
      options,
      children,
    }
  }
  return null
}

let parseTextInputField = (labelEl) => {
  let label = getLabelText(labelEl)
  let input = xpath.getFirstOrderedNode(
    './following-sibling::input[@type="text" or @type="email"]',
    labelEl,
  )
  return input
    ? {
        type: getBreezySalaryFieldType(label),
        label,
        required: isRequiredLabel(labelEl),
        $input: input,
        $label: labelEl,
      }
    : null
}

let parseTextareaField = (labelEl) => {
  let label = getLabelText(labelEl)
  let input = xpath.getFirstOrderedNode("../following-sibling::textarea", labelEl)
  if (!input) {
    input = xpath.getFirstOrderedNode("./following-sibling::textarea", labelEl)
  }
  return input
    ? {
        type: getBreezySalaryFieldType(label),
        label,
        required: isRequiredLabel(labelEl),
        $input: input,
        $label: labelEl,
      }
    : null
}

let parseSelectField = (labelEl) => {
  let label = getLabelText(labelEl)
  let select = xpath.getFirstOrderedNode(
    "./following-sibling::div[@class='dropdown-container']//select | ./following-sibling::select",
    labelEl,
  )
  if (select) {
    let options = getSelectOptions(select)
    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      required: isRequiredLabel(labelEl),
      options,
      $input: select,
      $label: labelEl,
    }
  }
  return null
}

let parseRadioField = (labelEl) => {
  let label = getLabelText(labelEl)
  let radioXpath =
    './/ancestor::li[contains(@class, "question") or contains(@class, "multiplechoice")]//input[@type="radio"]'
  if (label === "Veteran status") {
    radioXpath =
      './following-sibling::ul//input[@type="radio" and contains(@id, "vet")]'
  }
  if (label === "Voluntary Self-Identification of Disability") {
    radioXpath =
      './following-sibling::ul//input[@type="radio" and contains(@id, "disability")]'
  }

  let radios = xpath.getOrderedNodes(radioXpath, labelEl)
  if (radios.length > 0) {
    let options = radios.map((radio) => {
      let labelEl2 = radio.closest("label") || radio.nextElementSibling
      return labelEl2?.textContent?.trim() || ""
    })
    return {
      type: enums.FIELD_TYPE.RADIO,
      label,
      required: isRequiredLabel(labelEl),
      options,
      $input: radios,
      $label: labelEl,
      $radioParent: labelEl,
    }
  }
  return null
}

let parseCheckboxField = (labelEl) => {
  let label = getLabelText(labelEl)
  let checkboxes = xpath.getOrderedNodes(
    './/ancestor::li[contains(@class, "question") or contains(@class, "multiplechoice") or contains(@class, "option")]//input[@type="checkbox"]',
    labelEl,
  )
  if (checkboxes.length > 0) {
    let options = checkboxes.map((checkbox) => {
      let labelEl2 = checkbox.closest("label") || checkbox.nextElementSibling
      return labelEl2?.textContent?.trim() || ""
    })
    return {
      type: enums.FIELD_TYPE.CHECKBOX,
      label,
      required: isRequiredLabel(labelEl),
      $label: labelEl,
      options,
      $checkboxs: checkboxes,
    }
  }
  return null
}

let parseDateField = (labelEl) => {
  let label = getLabelText(labelEl)
  let input = xpath.getFirstOrderedNode(
    './following-sibling::input[@type="date"]',
    labelEl,
  )
  return input
    ? {
        type: enums.FIELD_TYPE.DATE,
        label,
        required: isRequiredLabel(labelEl),
        $input: input,
        $label: labelEl,
      }
    : null
}

let parseDesiredSalarySection = (labelEl) => {
  let label = getLabelText(labelEl)
  if (!label.includes("Desired Salary")) return null

  let rules = []
  let currency = xpath.getFirstOrderedNode(
    "./following::select[@ng-model='candidate.salary.currency']",
    labelEl,
  )
  let salary = xpath.getFirstOrderedNode(
    "./following-sibling::input[@ng-model='candidate.salary.salary']",
    labelEl,
  )
  let period = xpath.getFirstOrderedNode(
    "./following::select[@ng-model='candidate.salary.period']",
    labelEl,
  )

  if (currency && salary && period) {
    let currencyOptions = getSelectOptions(currency)
    let periodOptions = getSelectOptions(period)

    rules.push({
      type: enums.FIELD_TYPE.SELECT,
      label: "Currency of Desired Salary",
      options: currencyOptions,
      required: isRequiredLabel(labelEl),
      $input: currency,
      $label: labelEl,
    })
    rules.push({
      type: getBreezySalaryFieldType(label),
      label: /\brange\b/i.test(label)
        ? "Desired Salary Range"
        : "Desired Salary Monthly, you must provide a number",
      required: isRequiredLabel(labelEl),
      $input: salary,
      $label: labelEl,
    })
    rules.push({
      type: enums.FIELD_TYPE.SELECT,
      label: "Period of Desired Salary, must select one, default to Monthly",
      options: periodOptions,
      required: isRequiredLabel(labelEl),
      $input: period,
      $label: labelEl,
    })
    return rules
  }
  return null
}

let getSelectOptions = (select) =>
  Array.from(select.options)
    .filter(
      (option) =>
        option.value.trim() !== "" && !option.value.trim().startsWith("?"),
    )
    .map((option) => option.text.trim())

let getLabelText = (el) => {
  let text = el?.textContent?.replaceAll("*", "").trim() || ""
  return polyglot.canonicalizeBreezyLabel(text)
}

let isRequiredLabel = (labelEl) => {
  let required = labelEl.querySelector(".required:not(.ng-hide)")
  return required !== null
}

export let findAndRemoveRule = (rules, label) => {
  let index = rules.findIndex((rule) =>
    polyglot.matchesBreezyLabel(rule.label, label),
  )
  return index !== -1 ? rules.splice(index, 1)[0] : null
}

export let getSubmitButtonText = () => "Submit"

export let getBreezySubmitButtonXpath = () =>
  `//button[.//span[${polyglot.buildBreezyPolyglotXpathTextCondition("Submit Application", (phrase) => `text()="${phrase}"`)}]]`
