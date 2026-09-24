// @ts-nocheck
/**
 * Comeet — form rule extraction and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as phoneCountryCodeCore from "../../../core/phone-country-code.js"
import * as comeetAnswer from "./answer.ts"
import * as phoneCountryCode from "./phone-country-code.ts"

export const COMEET_PHONE_WITH_COUNTRY_CODE_DESCRIPTION =
  phoneCountryCodeCore.LOCAL_PHONE_DESCRIPTION

function getComeetIframeDocuments() {
  const docs = []
  const iframe = document.querySelector('iframe[title="Job Application form"]')
  if (!iframe) return docs
  try {
    const doc = iframe.contentDocument || iframe.contentWindow?.document
    if (doc) docs.push(doc)
  } catch {
    // cross-origin iframe
  }
  return docs
}

function findApplyForm(doc) {
  return (
    doc.querySelector("form#applyForm") ||
    doc.querySelector('form[name="applyForm"]')
  )
}

export function isRunningInIframe() {
  return window.top !== window.self
}

export function isRunningInComeetIframe() {
  const href = window.location.href
  if (href === "about:blank" || href.startsWith("about:")) return false
  if (findApplyForm(document)) return true
  if (!isRunningInIframe()) return false
  return (
    (href.includes("comeet.co") || href.includes("comeet.com")) &&
    href.includes("/apply")
  )
}

export function hasCrossOriginComeetIframe() {
  if (isRunningInIframe()) return false
  const iframe = document.querySelector('iframe[title="Job Application form"]')
  if (!iframe) return false
  try {
    const doc = iframe.contentDocument
    if (!doc) return true
  } catch {
    return true
  }
  return false
}

export async function extractRules() {
  const rules = []
  if (isRunningInComeetIframe()) {
    const form = findApplyForm(document)
    if (form) {
      const formRules = await extractRulesFromForm(form, document)
      rules.push(...formRules)
    }
    return rules
  }
}

async function extractRulesFromForm(form, doc) {
  const rules = []
  const seen = new Set()
  const fields = form.querySelectorAll("input, select, textarea")

  for (const el of fields) {
    if (el.type === "radio" || el.type === "checkbox") {
      const fieldset = el.closest("fieldset")
      if (fieldset) {
        const legend = fieldset.querySelector("legend.question-title")
        if (legend) {
          const title = legend.textContent?.trim() || ""
          if (title && seen.has(title)) continue
          if (title) seen.add(title)
        }
      } else {
        if (el.name && seen.has(el.name)) continue
        if (el.name) seen.add(el.name)
      }
    }

    const rule = await getRuleFromElement(el, doc)
    if (rule) {
      rules.push(rule)
      const phoneCountryRule = buildPhoneCountryCodeRule(rule, el)
      if (phoneCountryRule) rules.push(phoneCountryRule)
    }
  }

  for (const dropdown of form.querySelectorAll("div.dropdown")) {
    const fieldset = dropdown.closest("fieldset")
    if (fieldset) {
      const legend = fieldset.querySelector("legend.question-title")
      if (legend) {
        const title = legend.textContent?.trim() || ""
        const key = "dropdown:" + title
        if (seen.has(key)) continue
        if (key) seen.add(key)
      }
    }
    const rule = await getDropdownRule(dropdown, doc)
    if (rule) rules.push(rule)
  }

  return rules
}

function buildPhoneCountryCodeRule(rule, input) {
  if (rule.label.trim().toLowerCase() !== "phone") return null
  const itiRoot = input.closest(".iti")
  const selectedBtn = itiRoot?.querySelector("button.iti__selected-country")
  if (!itiRoot || !selectedBtn) return null
  const options = Array.from(itiRoot.querySelectorAll("li.iti__country"))
    .map(phoneCountryCode.parseComeetPhoneCountryOption)
    .map(phoneCountryCode.formatComeetPhoneCountryOption)
    .filter(Boolean)
  return {
    label: "Phone Country Code",
    type: enums.FIELD_TYPE.SELECT,
    required: rule.required,
    options,
    $input: input,
  }
}

async function getDropdownRule(dropdown, doc = document) {
  const fieldset = dropdown.closest("fieldset")
  if (!fieldset) return null
  const legend = fieldset.querySelector("legend.question-title")
  if (!legend) return null
  const label = comeetAnswer.normalizeComeetLabelText(legend.textContent)
  if (!label) return null
  const required = comeetAnswer.isComeetRequiredField(dropdown, legend)
  const options = []
  const menu = dropdown.querySelector("ul.dropdown-menu")
  if (menu) {
    for (const title of menu.querySelectorAll("li .option-title")) {
      const text = title.textContent?.trim()
      if (text) options.push(text)
    }
  }
  const toggle = dropdown.querySelector("a.dropdown-toggle")
  return toggle
    ? {
        label,
        type: enums.FIELD_TYPE.SELECT,
        required,
        options,
        $input: toggle,
      }
    : null
}

function getPhoneDescription(el) {
  if (el.tagName !== "INPUT") return
  const input = el
  const isTel =
    input.type === "tel" || input.classList.contains("iti__tel-input")
  if (!isTel) return
  const selectedBtn = input
    .closest(".iti")
    ?.querySelector("button.iti__selected-country")
  return selectedBtn ? COMEET_PHONE_WITH_COUNTRY_CODE_DESCRIPTION : undefined
}

async function getRuleFromElement(el, doc = document) {
  const labelEl = findLabelForElement(el, doc)
  if (!labelEl) return null
  const label = comeetAnswer.normalizeComeetLabelText(labelEl.textContent)
  let type
  let input = null

  if (el.tagName === "INPUT") {
    if (el.type === "file") return null
    type =
      el.type === "checkbox"
        ? enums.FIELD_TYPE.CHECKBOX
        : el.type === "radio"
          ? enums.FIELD_TYPE.RADIOGROUP
          : enums.FIELD_TYPE.TEXT
    input = el
  } else if (el.tagName === "SELECT") {
    type = enums.FIELD_TYPE.SELECT
    input = el
  } else if (el.tagName === "TEXTAREA") {
    type = enums.FIELD_TYPE.TEXT
    input = el
  } else {
    return null
  }

  const required = comeetAnswer.isComeetRequiredField(el, labelEl)
  let options = []
  if (type === enums.FIELD_TYPE.SELECT) {
    options = await getSelectOptions(input)
  }
  if (type === enums.FIELD_TYPE.RADIOGROUP) {
    options = getRadioOptions(el, doc)
  }
  if (type === enums.FIELD_TYPE.CHECKBOX) {
    const fieldset = el.closest("fieldset")
    if (fieldset) options = getCheckboxOptions(el, fieldset, doc)
  }

  const description = getPhoneDescription(el)
  return {
    label,
    type,
    required,
    options,
    ...(description ? { description } : {}),
    $input: input,
  }
}

function findLabelForElement(el, doc = document) {
  if (el.type === "radio" || el.type === "checkbox") {
    const fieldset = el.closest("fieldset")
    if (fieldset) {
      const legend = fieldset.querySelector("legend.question-title")
      if (legend) return legend
    }
  }

  if (el.id) {
    const label = doc.querySelector(`label[for="${CSS.escape(el.id)}"]`)
    if (label) return label
  }

  const fieldset = el.closest("fieldset")
  if (fieldset) {
    const legend = fieldset.querySelector("legend.question-title")
    if (legend) return legend
  }

  const container = el.closest("div, fieldset, form")
  if (container) {
    const label = container.querySelector("label")
    if (label) return label
  }

  let sibling = el.previousElementSibling
  while (sibling) {
    if (sibling.tagName === "LABEL") return sibling
    sibling = sibling.previousElementSibling
  }
  return null
}

async function getSelectOptions(select) {
  const options = []
  if (select.tagName === "SELECT") {
    Array.from(select.options).forEach((option) => {
      if (option.value && option.value !== "") {
        options.push(option.textContent?.trim() || option.value)
      }
    })
  }
  return options
}

function getCheckboxOptions(input, fieldset, doc = document) {
  const options = []
  for (const checkbox of fieldset.querySelectorAll(
    'input[type="checkbox"]',
  )) {
    if (!checkbox.id) continue
    const label = doc.querySelector(
      `label[for="${CSS.escape(checkbox.id)}"]`,
    )
    if (!label) continue
    const title = label.querySelector(".option-title")
    if (title) {
      const text = title.textContent?.trim()
      if (text) {
        options.push(text)
        continue
      }
    }
    const text = label.textContent?.trim()
    if (text) options.push(text)
  }
  return options
}

function getRadioOptions(input, doc = document) {
  const options = []
  const name = input.name
  if (!name) return options
  const radios = doc.querySelectorAll(
    `input[type="radio"][name=${CSS.escape(name)}]`,
  )
  for (const radio of radios) {
    if (radio.id) {
      const label = doc.querySelector(
        `label[for="${CSS.escape(radio.id)}"]`,
      )
      if (label) {
        const title = label.querySelector(".option-title")
        if (title) {
          const text = title.textContent?.trim()
          if (text) {
            options.push(text)
            continue
          }
        }
        const text = label.textContent?.trim()
        if (text) {
          options.push(text)
          continue
        }
      }
    }
    if (radio.value && radio.value !== "[object Object]") {
      options.push(radio.value)
      continue
    }
    const next = radio.nextElementSibling
    if (next && next.tagName === "LABEL") {
      const title = next.querySelector(".option-title")
      if (title) {
        const text = title.textContent?.trim()
        if (text) {
          options.push(text)
          continue
        }
      }
      const text = next.textContent?.trim()
      if (text) options.push(text)
    }
  }
  return options
}

export async function getFormSnapshot(_root) {
  const snapshot = {}
  const docs = [document, ...getComeetIframeDocuments()]
  for (const doc of docs) {
    for (const el of doc.querySelectorAll("input, select, textarea")) {
      const labelEl = findLabelForElement(el, doc)
      if (!labelEl) continue
      const label = labelEl.textContent?.trim() || ""
      let value = ""

      if (el.tagName === "INPUT") {
        if (el.type === "checkbox") {
          value = el.checked ? "Yes" : "No"
        } else if (el.type === "radio") {
          const checked = doc.querySelector(
            `input[type="radio"][name="${CSS.escape(el.name)}"]:checked`,
          )
          if (checked) {
            let radioValue = checked.value
            if (
              (!radioValue ||
                radioValue === "[object Object]" ||
                radioValue === "on") &&
              checked.id
            ) {
              const labelFor = doc.querySelector(
                `label[for="${CSS.escape(checked.id)}"]`,
              )
              if (labelFor) {
                const title = labelFor.querySelector(".option-title")
                radioValue =
                  title?.textContent?.trim() ||
                  labelFor.textContent?.trim() ||
                  ""
              }
            }
            value = radioValue || ""
          }
        } else {
          value = el.value || ""
        }
      } else if (el.tagName === "SELECT") {
        if (
          el.selectedIndex >= 0 &&
          el.selectedIndex < el.options.length
        ) {
          const option = el.options[el.selectedIndex]
          value = option.textContent?.trim() || option.value || ""
        }
      } else if (el.tagName === "TEXTAREA") {
        value = el.value || ""
      }

      if (!snapshot[label] || value) snapshot[label] = value
    }
  }
  return snapshot
}

export function getEduAndEmploymentSnapshot() {
  const education = extractEducationSnapshot()
  const employment = extractEmploymentSnapshot()
  const result = {}
  if (education && education.length > 0) result.education = education
  if (employment && employment.length > 0) result.employment = employment
  return result
}

function findSectionContainers(doc, keywordGroups) {
  const matched = []
  for (const keywords of keywordGroups) {
    matched.push(
      ...Array.from(
        doc.querySelectorAll(
          keywords
            .map(
              (kw) =>
                `[id*="${kw}"], [class*="${kw}"], [name*="${kw}"]`,
            )
            .join(", "),
        ),
      ),
    )
  }
  const unique = Array.from(new Set(matched))
  const containers = new Set()

  unique.forEach((el) => {
    let node = el
    while (node && node !== doc.body) {
      const fields = node.querySelectorAll("input, select, textarea")
      if (fields.length >= 2) {
        containers.add(node)
        break
      }
      node = node.parentElement
    }
  })

  const roots = []
  containers.forEach((candidate) => {
    let containedByOther = false
    containers.forEach((other) => {
      if (candidate !== other && other.contains(candidate)) {
        containedByOther = true
      }
    })
    if (!containedByOther) {
      let containsOther = false
      containers.forEach((other) => {
        if (candidate !== other && candidate.contains(other)) {
          containsOther = true
        }
      })
      if (!containsOther) roots.push(candidate)
    }
  })
  return roots
}

function snapshotSectionFields(container) {
  const record = {}
  for (const el of container.querySelectorAll("input, select, textarea")) {
    if (el.type === "hidden" || el.type === "button" || el.type === "submit") {
      continue
    }
    const idOrName = el.id || el.name
    let label = ""
    if (idOrName) {
      const labelEl = container.querySelector(`label[for="${idOrName}"]`)
      label = labelEl?.textContent?.trim() || ""
    }
    if (!label) {
      label =
        el.getAttribute("placeholder") ||
        el.getAttribute("aria-label") ||
        el.name ||
        idOrName ||
        ""
    }
    label = label.replace(/[*:\uff1a]/g, "").trim()

    let value = ""
    if (el.tagName === "SELECT") {
      if (
        el.selectedIndex >= 0 &&
        el.selectedIndex < el.options.length
      ) {
        const option = el.options[el.selectedIndex]
        value = (option.textContent?.trim() || option.value || "").toString()
      }
    } else {
      value = el.value || ""
    }
    if (label && value) record[label] = value
  }
  return record
}

function extractEducationSnapshot() {
  const records = []
  try {
    const roots = findSectionContainers(document, [
      ["education"],
      ["school"],
      ["degree"],
    ])
    roots.forEach((root) => {
      const record = snapshotSectionFields(root)
      if (Object.keys(record).length > 0) records.push(record)
    })
  } catch {
    // ignore snapshot errors
  }
  return records
}

function extractEmploymentSnapshot() {
  const records = []
  try {
    const roots = findSectionContainers(document, [
      ["employment"],
      ["employer"],
      ["job"],
    ])
    roots.forEach((root) => {
      const record = snapshotSectionFields(root)
      if (Object.keys(record).length > 0) records.push(record)
    })
  } catch {
    // ignore snapshot errors
  }
  return records
}
