// @ts-nocheck
/**
 * JobScore — form rule extraction and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as delay from "../../../utils/delay.js"
import * as answers from "./answers.ts"

function isCoverLetterTextarea(element) {
  if (element.tagName !== "TEXTAREA") return false
  const textarea = element
  return (
    textarea.closest(".js-section-cover-letter") !== null ||
    textarea.closest(".fr-box") !== null ||
    textarea.getAttribute("j-component") === "ApplyFlowRichEditor" ||
    textarea.closest('[role="application"]') !== null
  )
}

function isFillableElement(element) {
  const style = window.getComputedStyle(element)
  if (style.display === "none") return !!isCoverLetterTextarea(element)
  if (
    (element.tagName === "INPUT" && element.type === "hidden") ||
    element.closest("script")
  ) {
    return false
  }

  const preview = element.closest('[data-display="preview"]')
  if (
    preview ||
    element.classList.contains("js-hide") ||
    element.closest(".js-hide") ||
    (!isCoverLetterTextarea(element) &&
      (element.classList.contains("hide") || element.closest(".hide")))
  ) {
    return false
  }

  if (element.closest(".js-referred-by-someone-container")) return false
  if (element.closest("#source_referral, .referral-source")) return false

  let node = element
  while (node && node !== document.body) {
    const nodeStyle = window.getComputedStyle(node)
    const display = nodeStyle.display

    if (node.classList.contains("js-area-loader")) {
      node = node.parentElement
      continue
    }

    if (
      node.hasAttribute("data-display") &&
      node.getAttribute("data-display") === "form"
    ) {
      if (
        display === "none" ||
        nodeStyle.visibility === "hidden" ||
        nodeStyle.opacity === "0"
      ) {
        return false
      }
      node = node.parentElement
      continue
    }

    if (
      (node.style && node.style.display === "none") ||
      display === "none"
    ) {
      return false
    }

    const inlineStyle = node.getAttribute("style")
    if (inlineStyle && /display\s*:\s*none/i.test(inlineStyle)) return false

    node = node.parentElement
  }

  return true
}

function isVisibleIgnoringLoaders(element) {
  let node = element
  while (node && node !== document.body) {
    if (node.classList.contains("js-area-loader")) {
      node = node.parentElement
      continue
    }
    const style = window.getComputedStyle(node)
    if (
      node.style?.display === "none" ||
      style.display === "none" ||
      style.visibility === "hidden" ||
      style.opacity === "0"
    ) {
      return false
    }
    const inlineStyle = node.getAttribute("style")
    if (inlineStyle && /display\s*:\s*none/i.test(inlineStyle)) return false
    node = node.parentElement
  }
  return true
}

function isHiddenNode(element) {
  if (
    element.classList.contains("hide") ||
    element.classList.contains("js-hide")
  ) {
    return true
  }
  const style = window.getComputedStyle(element)
  return (
    element.style?.display === "none" ||
    style.display === "none" ||
    style.visibility === "hidden" ||
    style.opacity === "0"
  )
}

function collectVisibleText(element) {
  const parts = []
  const children = Array.from(element.childNodes)
  if (children.length === 0) return element.textContent?.trim() || ""

  for (const child of children) {
    if (child.nodeType === Node.TEXT_NODE) {
      parts.push(child.textContent || "")
      continue
    }
    if (child.nodeType === Node.ELEMENT_NODE) {
      const el = child
      if (!isHiddenNode(el)) parts.push(collectVisibleText(el))
    }
  }
  return parts.join(" ").replace(/\s+/g, " ").trim()
}

function isSourceField(id, name) {
  const idText = (id || "").trim()
  const nameText = (name ?? "").trim()
  return (
    (idText.startsWith("candidate_card_source_") &&
      !idText.includes("referral")) ||
    (nameText.includes("candidate_card[source_") &&
      !nameText.includes("referral"))
  )
}

export async function extractRules(selector, allowFormFallback = false) {
  const rules = []
  let root = document.querySelector(selector)
  if (!root) {
    if (allowFormFallback) root = document.querySelector("form")
    if (!root) return rules
  }

  const inputs = root.querySelectorAll("input, select, textarea")
  const inQuestions =
    selector.includes("js-section-questions") ||
    selector.includes("questions")
  const seenCheckboxQuestions = new Set()

  for (const element of inputs) {
    const input = element
    const id = input.id || ""
    const name = input.getAttribute("name") || ""
    const sourceField = isSourceField(id, name)

    if (!sourceField) {
      if (input.closest("#source_referral, .referral-source")) continue
      const idLower = id.toLowerCase()
      const nameLower = name.toLowerCase()
      if (
        idLower.includes("source_referral") ||
        nameLower.includes("source_referral")
      ) {
        continue
      }
    }

    if (
      (sourceField && !isVisibleIgnoringLoaders(input)) ||
      (!inQuestions && !isFillableElement(input))
    ) {
      continue
    }

    if (inQuestions) {
      const otherContainer = input.closest(
        '[data-context="custom-question-mc-details"], .js-oneline-textfield-for-multiple-choice-container',
      )
      const isOther =
        input.classList.contains("js-other-field") ||
        !!otherContainer ||
        name.includes("candidate_answer_other[") ||
        id.includes("candidate_answer_other_")
      if (isOther) {
        // Preserve original no-op visibility probes from the Parcel dump.
        otherContainer?.classList.contains("hide") ||
          input.classList.contains("hide") ||
          input.closest(".hide") !== null ||
          (otherContainer && otherContainer.closest(".hide"))
        ;(otherContainer &&
          window.getComputedStyle(otherContainer).display === "none") ||
          window.getComputedStyle(input).display
        continue
      }
    }

    if (element.tagName === "INPUT" && element.type === "checkbox") {
      const checkboxQuestion = input.closest(
        '.js-checkbox-question[data-candidate-question-type="checkbox"]',
      )
      if (checkboxQuestion) {
        if (seenCheckboxQuestions.has(checkboxQuestion)) continue
        seenCheckboxQuestions.add(checkboxQuestion)
      }
    }

    const rule = await buildRuleFromElement(input)
    if (rule) rules.push(rule)
  }

  return rules
}

function fallbackLabelFromElement(element) {
  if (element.tagName === "INPUT") {
    const input = element
    if (input.placeholder?.trim()) return input.placeholder.trim()
  } else if (element.tagName === "TEXTAREA") {
    const textarea = element
    if (textarea.placeholder?.trim()) return textarea.placeholder.trim()
  } else if (element.tagName === "SELECT") {
    const select = element
    if (select.options?.length > 0) {
      const first = select.options[0]
      if (first?.textContent?.trim()) return first.textContent.trim()
    }
  }

  if (element.id?.trim()) return element.id.trim()
  if ("name" in element && element.name) {
    const name = element.name
    if (name?.trim()) return name.trim()
  }
  return ""
}

function readElementValue(element) {
  if (element.tagName === "INPUT") {
    const input = element
    if (input.type === "checkbox") return input.checked ? "Yes" : "No"
    if (input.type === "radio") {
      const checked = document.querySelector(
        `input[type="radio"][name="${input.name}"]:checked`,
      )
      return checked?.value || ""
    }
    return input.value || ""
  }
  if (element.tagName === "SELECT") {
    const select = element
    return select.options[select.selectedIndex]?.textContent?.trim() || ""
  }
  return (element.tagName === "TEXTAREA" && element.value) || ""
}

function resolveSnapshotLabel(element) {
  const labelEl = findAssociatedLabel(element)
  if (labelEl) {
    const text = collectVisibleText(labelEl)
    if (text) {
      const labelGroup = labelEl.closest(".js-form-group")
      const inputGroup = element.closest(".js-form-group")
      if (!labelGroup || !inputGroup || labelGroup === inputGroup) return text
    }
  }
  return fallbackLabelFromElement(element) || null
}

async function buildRuleFromElement(element) {
  let fieldType
  let inputRef
  const labelEl = findAssociatedLabel(element)
  let label = ""

  if (labelEl) {
    label = collectVisibleText(labelEl)
    inputRef = labelEl
  } else {
    label = fallbackLabelFromElement(element)
    if (!label) return null
    inputRef = element
  }

  const required = labelEl
    ? isRequiredLabel(labelEl)
    : isRequiredLabel(inputRef)
  let multiSelectRoot = null

  if (
    element.tagName === "BUTTON" &&
    element.getAttribute("aria-haspopup") === "listbox"
  ) {
    fieldType = enums.FIELD_TYPE.LISTBOX
    multiSelectRoot = element
    const options = await collectListboxOptions(element)
    return {
      label,
      type: enums.FIELD_TYPE.LISTBOX,
      required,
      options,
      $input: multiSelectRoot,
      $label: inputRef,
    }
  }

  const formGroup = element.closest(".js-form-group")
  if (formGroup) {
    const multi = formGroup.querySelector(
      '[class*="multi-select"], [class*="multiselect"], [data-multi-select]',
    )
    if (multi && (multi.contains(element) || element === multi)) {
      fieldType = enums.FIELD_TYPE.MULTI_SELECT
      multiSelectRoot = element
      const options = await collectMultiSelectOptions(multi)
      return {
        label,
        type: enums.FIELD_TYPE.MULTI_SELECT,
        required,
        options,
        $input: multiSelectRoot,
        $label: inputRef,
      }
    }
  }

  if (element.tagName === "INPUT") {
    const input = element
    if (input.type === "checkbox") {
      const checkboxQuestion = input.closest(
        '.js-checkbox-question[data-candidate-question-type="checkbox"]',
      )
      if (checkboxQuestion) {
        const options = collectCheckboxQuestionOptions(checkboxQuestion)
        const column = checkboxQuestion.closest(
          '.js-col-md-6[data-context="custom-question-col"]',
        )
        let questionLabel = label
        if (column) {
          const controlLabel = column.querySelector("label.js-control-label")
          if (controlLabel) {
            questionLabel = controlLabel.textContent?.trim() || label
          }
        }
        checkboxQuestion.querySelector('input[type="checkbox"]')
        return {
          label: questionLabel,
          type: enums.FIELD_TYPE.SELECT,
          required,
          options,
          $input: checkboxQuestion,
          $label: column?.querySelector("label.js-control-label") || inputRef,
        }
      }

      fieldType = enums.FIELD_TYPE.CHECKBOX
      collectLegacyCheckboxOptions(element)
      return {
        label,
        type: enums.FIELD_TYPE.CHECKBOX,
        required,
        options: [],
        $input: element,
        $label: inputRef,
        $checkboxs: [],
      }
    }

    if (input.type === "radio") {
      fieldType = enums.FIELD_TYPE.RADIOGROUP
      const parent = findRadioParent(element)
      const options = collectRadioOptions(parent)
      return {
        label,
        type: enums.FIELD_TYPE.RADIOGROUP,
        required,
        options,
        $input: element,
        $label: inputRef,
        $radioParent: parent,
      }
    }

    fieldType = input.closest('[data-candidate-question-type="number"]')
      ? enums.FIELD_TYPE.NUMBER
      : enums.FIELD_TYPE.TEXT
    multiSelectRoot = input
  } else if (element.tagName === "SELECT") {
    fieldType = enums.FIELD_TYPE.SELECT
    multiSelectRoot = element
    const options = await collectSelectOptions(multiSelectRoot)
    return {
      label,
      type: enums.FIELD_TYPE.SELECT,
      required,
      options,
      $input: multiSelectRoot,
      $label: inputRef,
    }
  } else {
    if (element.tagName !== "TEXTAREA") return null
    fieldType = enums.FIELD_TYPE.TEXT
    multiSelectRoot = element
  }

  const rule = {
    label,
    type: fieldType,
    required,
    $input: multiSelectRoot,
    $label: inputRef,
  }

  if (label === "What is your desired compensation?") {
    rule.description =
      "Please return the desired compensation as a number (digits only)"
  }
  if (label === "What salary are you seeking for this position?") {
    rule.description =
      "Please return the desired salary as a number (digits only)"
  }
  if (label === "What is your desired base salary?") {
    rule.description =
      "Please return the desired base salary as a number (digits only)"
  }
  if (label === "What is your desired salary range?") {
    rule.description =
      "Please return the desired base salary as a range, not an exact number."
  }

  return rule
}

function isRequiredLabel(element) {
  if (element?.classList.contains("js-required")) return true
  const text = element.textContent || ""
  if (text.includes("*") || text.includes("\u2731")) return true
  if (element.querySelector('[aria-required="true"], .required, [class*="required"]')) {
    return true
  }
  if (
    element.tagName === "INPUT" ||
    element.tagName === "SELECT" ||
    element.tagName === "TEXTAREA"
  ) {
    const input = element
    if (
      input.hasAttribute("required") ||
      input.getAttribute("aria-required") === "true"
    ) {
      return true
    }
    const formGroup = element.closest(".js-form-group")
    if (formGroup?.querySelector('.js-required, [class*="required"]')) {
      return true
    }
  }
  return false
}

function containerHasRequired(container) {
  return (
    container.querySelectorAll(
      '.js-required, [required], *[aria-required="true"]',
    ).length > 0
  )
}

function findRadioParent(radio) {
  if (
    radio.parentElement &&
    (radio.parentElement.querySelector(
      `input[type="radio"][name="${radio.name}"]`,
    ) ||
      radio.closest('[role="radiogroup"]'))
  ) {
    return radio.closest('[role="radiogroup"]') || radio.parentElement
  }
  const group = document.querySelectorAll(
    `input[type="radio"][name="${radio.name}"]`,
  )
  return group.length > 0
    ? group[0].parentElement || document.body
    : radio.parentElement || document.body
}

function collectRadioOptions(parent) {
  const radios = parent.querySelectorAll('input[type="radio"]')
  const options = []
  radios.forEach((radio) => {
    if (radio.id) {
      const label = document.querySelector(`label[for="${radio.id}"]`)
      if (label?.textContent) options.push(label.textContent.trim())
    }
    if (radio.nextElementSibling?.nodeType === Node.ELEMENT_NODE) {
      const sibling = radio.nextElementSibling
      if (sibling.tagName === "LABEL" && sibling.textContent) {
        options.push(sibling.textContent.trim())
      }
    }
  })
  return options
}

export function findRadioGroupByText(root, searchText, radioSelector) {
  const nodes = root.querySelectorAll("*")
  let labelEl = null
  for (const node of Array.from(nodes)) {
    const text = node.textContent || ""
    if (text.includes(searchText)) {
      if (node.tagName === "STRONG" || node.tagName === "P") {
        labelEl = node
        break
      }
      if (!labelEl) labelEl = node
    }
  }
  if (!labelEl) return null

  const container =
    labelEl.closest(".js-fieldset") ||
    labelEl.closest(".js-area-container") ||
    root
  const group = container.querySelector(radioSelector)
  if (!group) return null

  const radios = Array.from(group.querySelectorAll('input[type="radio"]'))
  if (radios.length === 0) return null

  const options = collectRadioOptions(group)
  const label = labelEl.textContent?.trim() || searchText
  return {
    type: enums.FIELD_TYPE.RADIOGROUP,
    label,
    required: containerHasRequired(group),
    $label: labelEl,
    options,
    $radioParent: group,
    $input: radios.length > 0 ? radios[0] : group,
  }
}

function collectLegacyCheckboxOptions(element) {
  const options = []
  const checkboxes = element.querySelectorAll('input[type="checkbox"]')
  checkboxes.forEach((checkbox) => {
    options.push(checkbox.textContent?.trim() || "")
  })
  return options
}

function collectCheckboxQuestionOptions(container) {
  const options = []
  const checkboxes = container.querySelectorAll('input[type="checkbox"]')
  checkboxes.forEach((checkbox) => {
    const input = checkbox
    const id = input.id
    if (id) {
      const label = document.querySelector(`label[for="${id}"]`)
      if (label?.textContent) {
        const text = label.textContent.trim()
        if (text) options.push(text)
      }
    }
    if (!id || !document.querySelector(`label[for="${id}"]`)) {
      const wrap = input.closest(".js-checkbox-container")
      if (wrap) {
        const controlLabel = wrap.querySelector("label.js-control-label")
        if (controlLabel?.textContent) {
          const text = controlLabel.textContent.trim()
          if (text && !options.includes(text)) options.push(text)
        }
      }
    }
  })
  return options
}

function findAssociatedLabel(element) {
  if (element.id) {
    const forLabel = document.querySelector(`label[for="${element.id}"]`)
    if (forLabel) return forLabel
  }

  const formGroup = element.closest(".js-form-group")
  if (formGroup) {
    const controlLabel = formGroup.querySelector("label.js-control-label")
    if (controlLabel) return controlLabel
  }

  const section = element.closest(
    ".js-section-cover-letter, .js-area-container",
  )
  if (section) {
    const heading = section.querySelector(".js-area-heading span")
    if (heading?.textContent?.trim()) return heading
    const noHeader = section.querySelector(".js-no-header-label-container span")
    if (noHeader?.textContent?.trim()) return noHeader
    for (const span of Array.from(section.querySelectorAll("span"))) {
      const text = span.textContent?.trim()
      if (
        text &&
        !span.classList.contains("fr-sr-only") &&
        span.offsetParent !== null &&
        element.compareDocumentPosition(span) &
          Node.DOCUMENT_POSITION_PRECEDING
      ) {
        return span
      }
    }
  }

  let parent = element.parentElement
  while (parent) {
    const labels = Array.from(
      parent.querySelectorAll("label.js-control-label"),
    )
    let best = null
    for (const label of labels) {
      if (
        parent.contains(label) &&
        parent.contains(element) &&
        element.compareDocumentPosition(label) &
          Node.DOCUMENT_POSITION_PRECEDING
      ) {
        if (!best) {
          best = label
        } else {
          element.compareDocumentPosition(best)
          element.compareDocumentPosition(label)
          if (
            label.compareDocumentPosition(best) &
            Node.DOCUMENT_POSITION_FOLLOWING
          ) {
            best = label
          }
        }
      }
    }
    if (best) return best
    parent = parent.parentElement
  }

  let sibling = element.previousElementSibling
  while (sibling) {
    if (
      sibling.tagName === "LABEL" ||
      (sibling.tagName === "SPAN" &&
        sibling.textContent?.trim() &&
        !sibling.classList.contains("fr-sr-only"))
    ) {
      return sibling
    }
    sibling = sibling.previousElementSibling
  }

  return element.closest("label") || null
}

async function collectSelectOptions(select) {
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

async function collectListboxOptions(button) {
  const options = []
  try {
    let controls = button.getAttribute("aria-controls")
    let listbox = null
    if (controls) listbox = document.getElementById(controls)

    if (!listbox) {
      const candidates = document.querySelectorAll(
        'ul[role="listbox"], div[role="listbox"]',
      )
      for (const candidate of Array.from(candidates)) {
        if (candidate.offsetParent !== null) {
          listbox = candidate
          break
        }
      }
    }

    if (!(listbox && listbox.offsetParent !== null)) {
      button.click()
      await delay.delay(300)
      if (controls) listbox = document.getElementById(controls)
      if (!listbox) {
        listbox = document.querySelector(
          'ul[role="listbox"], div[role="listbox"]',
        )
      }
    }

    if (listbox) {
      listbox
        .querySelectorAll('li[role="option"], div[role="option"], option')
        .forEach((option) => {
          const text = option.textContent?.trim()
          if (text && text !== "") options.push(text)
        })
      if (button.getAttribute("aria-expanded") === "true") {
        button.click()
        await delay.delay(100)
      }
    }
  } catch {
    // ignore
  }
  return options
}

async function collectMultiSelectOptions(container) {
  const options = []
  try {
    container
      .querySelectorAll(
        'li[role="option"], div[role="option"], option, [class*="option"]',
      )
      .forEach((option) => {
        const text = option.textContent?.trim()
        if (text && text !== "") options.push(text)
      })

    if (options.length === 0) {
      const trigger = container.querySelector(
        'input, button, [role="combobox"]',
      )
      if (trigger) {
        trigger.click()
        await delay.delay(300)
        document
          .querySelectorAll(
            'li[role="option"], div[role="option"], option, [class*="option"]',
          )
          .forEach((option) => {
            const text = option.textContent?.trim()
            if (text && text !== "") options.push(text)
          })
        if (trigger) {
          trigger.click()
          await delay.delay(100)
        }
      }
    }
  } catch {
    // ignore
  }
  return options
}

function inferFieldType(element) {
  switch (element.tagName) {
    case "INPUT": {
      const type = element.type.toLowerCase()
      if (type === "checkbox") return enums.FIELD_TYPE.CHECKBOX
      if (type === "radio") return enums.FIELD_TYPE.RADIOGROUP
      return enums.FIELD_TYPE.TEXT
    }
    case "SELECT":
      return enums.FIELD_TYPE.SELECT
    default:
      return enums.FIELD_TYPE.TEXT
  }
}

async function buildChildRule(element, label, type) {
  const rule = {
    label,
    type,
    required: element.required,
    $label: element,
    $input: element,
  }
  if (type === enums.FIELD_TYPE.SELECT && element.tagName === "SELECT") {
    const select = element
    const isDate = answers.isDateSelectField(
      select,
      (select.name || "").toLowerCase(),
      label.toLowerCase(),
    )
    if (!isDate) rule.options = await collectSelectOptions(select)
  }
  return rule
}

function toSectionOptions(children) {
  return children.map((child) => {
    const option = { type: child.type, label: child.label }
    if (
      (child.type === enums.FIELD_TYPE.SELECT ||
        child.type === enums.FIELD_TYPE.CHECKBOX ||
        child.type === enums.FIELD_TYPE.RADIOGROUP) &&
      "options" in child &&
      Array.isArray(child.options)
    ) {
      const options = child.options
      if (options.length > 0 && typeof options[0] === "string") {
        option.options = options
      }
    }
    if (child.type === enums.FIELD_TYPE.DATE && "description" in child) {
      option.description = child.description
    }
    return option
  })
}

export async function extractEmploymentRules(selector) {
  const rules = []
  const root = document.querySelector(selector)
  if (!root) return rules

  async function childFrom(element) {
    const label = fallbackLabelFromElement(element)
    return label
      ? await buildChildRule(element, label, inferFieldType(element))
      : null
  }

  const titles = Array.from(root.querySelectorAll('input[name="title"]'))
  if (titles.length === 0) return rules

  for (let index = 0; index < titles.length; index++) {
    const titleInput = titles[index]
    const employerWrapper = titleInput.closest(".employer_wrapper")
    if (!employerWrapper) continue

    const titlesInWrapper = Array.from(
      employerWrapper.querySelectorAll('input[name="title"]'),
    )
    const titleIndex = titlesInWrapper.indexOf(titleInput)
    titlesInWrapper.length

    const experienceRow = titleInput.closest(".js-experience-row")
    if (!experienceRow) continue

    const children = []
    const seen = new Set()
    const fields = Array.from(
      experienceRow.querySelectorAll("input, select, textarea"),
    )
    for (const field of fields) {
      if (seen.has(field)) continue
      const child = await childFrom(field)
      if (child) {
        children.push(child)
        seen.add(field)
      }
    }

    if (titleIndex === 0) {
      const employerFields = Array.from(
        employerWrapper.querySelectorAll("input, select, textarea"),
      ).filter((field) => {
        const name = field.getAttribute("name")?.toLowerCase() || ""
        return name.includes("employer") || name.includes("company")
      })
      for (const field of employerFields) {
        if (seen.has(field)) continue
        const child = await childFrom(field)
        if (child) {
          children.unshift(child)
          seen.add(field)
        }
      }
    }

    if (children.length === 0) continue
    rules.push({
      label: "Employment",
      children,
      required: children.some((child) => child.required),
      type: enums.FIELD_TYPE.EMPLOYMENT,
      options: toSectionOptions(children),
    })
  }

  return rules
}

export async function extractEducationRules(selector) {
  const rules = []
  const root = document.querySelector(selector)
  if (!root) return rules

  async function childFrom(element) {
    let label = fallbackLabelFromElement(element)
    if (element.tagName === "SELECT") {
      const select = element
      const name = select.name?.toLowerCase() || ""
      if (name.includes("graduation_date") || name.includes("graduation")) {
        label = "End"
      } else if (
        name.includes("degree_id") ||
        (name.includes("degree") && !name.includes("major"))
      ) {
        label = "Degree"
      }
    }
    if (element.tagName === "INPUT") {
      const input = element
      const name = input.name?.toLowerCase() || ""
      if (name.includes("school")) label = "School"
      else if (name.includes("major")) label = "Major"
    }
    return label
      ? await buildChildRule(element, label, inferFieldType(element))
      : null
  }

  const rows = Array.from(
    root.querySelectorAll('[data-context="education-row"]'),
  )
  if (rows.length === 0) return rules

  for (let index = 0; index < rows.length; index++) {
    const row = rows[index]
    const fields = row.querySelectorAll("input, select, textarea")
    const children = []
    for (const field of fields) {
      const input = field
      if (!isFillableElement(input)) continue
      const child = await childFrom(input)
      if (child) children.push(child)
    }
    if (children.length === 0) continue
    rules.push({
      label: "Education",
      children,
      required: children.some((child) => child.required),
      type: enums.FIELD_TYPE.EDUCATION,
      options: toSectionOptions(children),
    })
  }

  return rules
}

export async function getFormSnapshot() {
  const snapshot = {}
  const elements = document.querySelectorAll("input, select, textarea")
  const seen = new Set()
  const seenCheckboxQuestions = new Set()

  for (const element of elements) {
    const input = element
    if (
      input.closest(".js-area-container.experience") ||
      input.closest(".js-area-container.education")
    ) {
      continue
    }

    const id = input.id ?? ""
    const name = input.name ?? ""
    const sourceField = isSourceField(String(id), String(name))
    if (
      (!sourceField && input.closest("#source_referral, .referral-source")) ||
      (sourceField && !isVisibleIgnoringLoaders(input))
    ) {
      continue
    }

    const inQuestions = input.closest(".js-section-questions") !== null
    if (!inQuestions && !sourceField && !isFillableElement(input)) continue

    if (inQuestions) {
      const otherContainer = input.closest(
        '[data-context="custom-question-mc-details"], .js-oneline-textfield-for-multiple-choice-container',
      )
      const isOther =
        input.classList.contains("js-other-field") || !!otherContainer
      if (isOther) {
        const hiddenClass =
          otherContainer?.classList.contains("hide") ||
          input.classList.contains("hide") ||
          input.closest(".hide") !== null ||
          (otherContainer && otherContainer.closest(".hide") !== null)
        const hiddenDisplay =
          (otherContainer &&
            window.getComputedStyle(otherContainer).display === "none") ||
          window.getComputedStyle(input).display === "none"
        if (hiddenClass || hiddenDisplay || !isFillableElement(input)) continue
      }
    }

    if (
      inQuestions &&
      input.tagName === "INPUT" &&
      input.type === "checkbox"
    ) {
      const checkboxQuestion = input.closest(
        '.js-checkbox-question[data-candidate-question-type="checkbox"]',
      )
      if (checkboxQuestion) {
        if (seenCheckboxQuestions.has(checkboxQuestion)) continue
        seenCheckboxQuestions.add(checkboxQuestion)

        const column = checkboxQuestion.closest(
          '.js-col-md-6[data-context="custom-question-col"]',
        )
        const controlLabel = column?.querySelector("label.js-control-label")
        const questionLabel =
          controlLabel?.textContent?.trim() ||
          resolveSnapshotLabel(input) ||
          ""
        if (!questionLabel) continue

        const selected = []
        for (const checkbox of Array.from(
          checkboxQuestion.querySelectorAll('input[type="checkbox"]'),
        )) {
          if (!checkbox.checked) continue
          let optionText = ""
          if (checkbox.id) {
            const label = document.querySelector(
              `label[for="${checkbox.id}"]`,
            )
            optionText = label?.textContent?.trim() || ""
          }
          if (!optionText) optionText = checkbox.value || ""
          if (optionText) selected.push(optionText)
        }
        if (selected.length > 0) snapshot[questionLabel] = selected.join(", ")
        continue
      }

      const column = input.closest(
        '.js-col-md-6[data-context="custom-question-col"]',
      )
      const controlLabel = column?.querySelector("label.js-control-label")
      const questionLabel =
        controlLabel?.textContent?.trim() ||
        resolveSnapshotLabel(input) ||
        ""
      if (questionLabel) {
        let optionText = ""
        if (input.id) {
          const label = document.querySelector(`label[for="${input.id}"]`)
          optionText = label?.textContent?.trim() || ""
        }
        snapshot[questionLabel] = input.checked
          ? optionText || "Yes"
          : "No"
        seen.add(input)
        continue
      }
    }

    if (seen.has(input)) continue
    const label = resolveSnapshotLabel(input)
    if (!label) continue
    const value = readElementValue(input)
    if (value) {
      if (snapshot[label] !== undefined && snapshot[label] !== value) {
        if (input.name) {
          snapshot[`${label} (${input.name})`] = value
        } else if (input.id) {
          snapshot[`${label} (${input.id})`] = value
        } else {
          snapshot[label] = value
        }
      } else {
        snapshot[label] = value
      }
    }
    seen.add(input)
  }

  const experienceRoot =
    document.querySelector(
      ".js-area-container.experience[data-display='form']",
    ) ||
    document.querySelector(
      ".js-area-container.experience[data-display='preview']",
    ) ||
    document.querySelector(".js-area-container.experience")

  if (experienceRoot) {
    const titles = Array.from(
      experienceRoot.querySelectorAll('input[name="title"]'),
    )
    const employment = []
    for (let index = 0; index < titles.length; index++) {
      const titleInput = titles[index]
      const employerWrapper = titleInput.closest(".employer_wrapper")
      if (!employerWrapper) continue
      const experienceRow = titleInput.closest(".js-experience-row")
      if (!experienceRow) continue

      const titlesInWrapper = Array.from(
        employerWrapper.querySelectorAll('input[name="title"]'),
      )
      const titleIndex = titlesInWrapper.indexOf(titleInput)
      const record = {}
      const seenFields = new Set()
      const rowFields = Array.from(
        experienceRow.querySelectorAll("input, select, textarea"),
      )

      for (const field of rowFields) {
        if (seenFields.has(field)) continue
        let fieldLabel = fallbackLabelFromElement(field)
        const name = field.name?.toLowerCase() || ""
        if (name.includes("title")) fieldLabel = "Title"
        else if (
          name.includes("position_start_date") ||
          (name.includes("start") && !name.includes("end"))
        ) {
          fieldLabel = "Start"
        } else if (
          name.includes("position_end_date") ||
          (name.includes("end") && !name.includes("start"))
        ) {
          fieldLabel = "End"
        }
        if (fieldLabel) {
          const value = readElementValue(field)
          if (value) record[fieldLabel] = value
        }
        seenFields.add(field)
      }

      if (titleIndex === 0) {
        const employerFields = Array.from(
          employerWrapper.querySelectorAll("input, select, textarea"),
        ).filter((field) => {
          const name = field.getAttribute("name")?.toLowerCase() || ""
          return name.includes("employer") || name.includes("company")
        })
        for (const field of employerFields) {
          if (seenFields.has(field)) continue
          let fieldLabel = fallbackLabelFromElement(field)
          const name = field.name?.toLowerCase() || ""
          if (name.includes("employer") || name.includes("company")) {
            fieldLabel = "Employer"
          }
          if (fieldLabel) {
            const value = readElementValue(field)
            if (value) record[fieldLabel] = value
          }
          seenFields.add(field)
        }
      }

      if (Object.keys(record).length > 0) employment.push(record)
    }
    if (employment.length > 0) snapshot.employment = employment
  }

  const educationPreview = document.querySelector(
    '.js-area-container.education[data-display="preview"]',
  )
  const educationForm = document.querySelector(
    '.js-area-container.education[data-display="form"]',
  )

  const findEducationRows = (container) => {
    const primary = Array.from(
      container.querySelectorAll('[data-context="education-row"]'),
    )
    if (primary.length > 0) return primary

    const secondary = Array.from(
      container.querySelectorAll(
        ".js-education-row, .education-row, .education_row, .edu-row, .edu_row",
      ),
    )
    if (secondary.length > 0) return secondary

    const named = Array.from(
      container.querySelectorAll(
        "input[name], select[name], textarea[name]",
      ),
    )
    const rows = new Set()
    for (const field of named) {
      const name = field.name?.toLowerCase?.() || ""
      if (
        !name.includes("school") &&
        !name.includes("major") &&
        !name.includes("degree") &&
        !name.includes("graduation") &&
        !name.includes("education")
      ) {
        continue
      }
      const row =
        field.closest("[data-context]") ||
        field.closest(".js-form-row, .js-row, .row") ||
        field.closest("li, tr, fieldset")
      if (row) rows.add(row)
    }
    return rows.size > 0 ? Array.from(rows) : [container]
  }

  const snapshotEducationForm = (container) => {
    if (!container) return []
    const records = []
    for (const row of findEducationRows(container)) {
      const fields = row.querySelectorAll("input, select, textarea")
      const record = {}
      for (const field of fields) {
        const input = field
        if (input.tagName === "INPUT" && input.type === "hidden") continue
        let label = fallbackLabelFromElement(input)
        const name = input.name?.toLowerCase() || ""
        if (input.tagName === "SELECT") {
          if (
            name.includes("graduation_date") ||
            name.includes("graduation")
          ) {
            label = "End"
          } else if (
            name.includes("degree_id") ||
            (name.includes("degree") && !name.includes("major"))
          ) {
            label = "Degree"
          }
        } else if (input.tagName === "INPUT") {
          if (name.includes("school")) label = "School"
          else if (name.includes("major")) label = "Major"
        }
        const value = readElementValue(input)
        if (label && value) record[label] = value
      }
      if (typeof record.School === "string" && record.School.trim()) {
        records.push(record)
      }
    }
    return records
  }

  const snapshotEducationPreview = (container) => {
    if (!container) return []
    const records = []
    const rows = Array.from(
      container.querySelectorAll('.js-row[data-context="area-content"]'),
    )
    for (const row of rows) {
      const record = {}
      const yearMatch = (row.textContent?.trim() || "").match(
        /\b(19|20)\d{2}\b/,
      )
      if (yearMatch) record.End = yearMatch[0]

      const school = row.querySelector("strong")?.textContent?.trim() || ""
      if (school) record.School = school

      const detail =
        row
          .querySelector(".js-form-group")
          ?.textContent?.replace(/\s+/g, " ")
          .trim() || ""
      if (detail) {
        const match = detail.match(/^(.*?)\s+in\s+(.*)$/i)
        if (match) {
          const degree = match[1]?.trim()
          const major = match[2]?.trim()
          if (degree) record.Degree = degree
          if (major) record.Major = major
        } else {
          record.Degree = detail
        }
      }
      if (Object.keys(record).length > 0) records.push(record)
    }
    return records
  }

  const educationRoot = document.querySelector(".js-area-container.education")
  const formRecords = snapshotEducationForm(
    educationForm ||
      (educationRoot?.getAttribute("data-display") !== "preview"
        ? educationRoot
        : null),
  )
  const educationRecords =
    formRecords.length > 0
      ? formRecords
      : snapshotEducationPreview(
          educationPreview ||
            (educationRoot?.getAttribute("data-display") === "preview"
              ? educationRoot
              : null),
        )
  if (educationRecords.length > 0) snapshot.education = educationRecords
  return snapshot
}

function buildIframeRadioRule(container, defaultLabel, radioSelector) {
  if (!container) return null

  let labelEl = null
  labelEl = container.querySelector("span.js-required")
  if (!labelEl) labelEl = container.querySelector(".js-area-heading .js-required")
  if (!labelEl) labelEl = container.querySelector(".js-area-heading")
  if (!labelEl) labelEl = container.querySelector("strong")

  const group = container.querySelector(radioSelector)
  if (!group) return null

  const radios = Array.from(group.querySelectorAll('input[type="radio"]'))
  if (radios.length === 0) return null

  const options = []
  radios.forEach((radio) => {
    let optionText = null
    const id = radio.id
    if (id) {
      const label =
        group.querySelector(`label[for="${id}"]`) ||
        document.querySelector(`label[for="${id}"]`)
      if (label?.textContent) optionText = label.textContent.trim()
    }
    if (!optionText && radio.nextElementSibling?.nodeType === Node.ELEMENT_NODE) {
      const sibling = radio.nextElementSibling
      if (sibling.tagName === "LABEL" && sibling.textContent) {
        optionText = sibling.textContent.trim()
      }
    }
    if (!optionText) {
      const wrap = radio.closest(".js-row, .js-col-md-12, div")
      if (wrap) {
        const label =
          wrap.querySelector(`label[for="${id}"]`) ||
          wrap.querySelector("label")
        if (label?.textContent) optionText = label.textContent.trim()
      }
    }
    if (optionText && !options.includes(optionText)) options.push(optionText)
  })

  let label = defaultLabel
  if (labelEl) {
    if (
      labelEl.tagName === "SPAN" &&
      labelEl.classList.contains("js-required")
    ) {
      label = labelEl.textContent?.trim() || defaultLabel
    } else {
      const requiredSpan = labelEl.querySelector("span.js-required")
      label = requiredSpan
        ? requiredSpan.textContent?.trim() || defaultLabel
        : labelEl.textContent?.trim() || defaultLabel
    }
  }

  return {
    type: enums.FIELD_TYPE.RADIOGROUP,
    label,
    required: containerHasRequired(container),
    $label: labelEl || container,
    options,
    $radioParent: group,
    $input: radios.length > 0 ? radios[0] : group,
  }
}

const IFRAME_SELECTORS = {
  gender: "#genderSection",
  race: "#raceSection",
  protectedVeteran: '[data-context-invalidate="protected_veteran_id"]',
  disability: "#desabilitySection",
  disabilityRadio: '[data-context-invalidate="disability2014_id"]',
  fullName: "#candidate_card_full_name",
}

function extractGenderRule(form) {
  const section = form.querySelector(IFRAME_SELECTORS.gender)
  return section
    ? buildIframeRadioRule(
        section,
        "Gender",
        '[data-context-invalidate="gender_id"]',
      )
    : null
}

function extractRaceRule(form) {
  const section = form.querySelector(IFRAME_SELECTORS.race)
  return section
    ? buildIframeRadioRule(
        section,
        "Race/Ethnic Identification",
        '[data-context-invalidate="race_id"]',
      )
    : null
}

function extractProtectedVeteranRule(form) {
  const radioGroup = form.querySelector(IFRAME_SELECTORS.protectedVeteran)
  if (!radioGroup) return null
  const listItem = radioGroup.closest("li")
  const container =
    radioGroup.closest(".js-fieldset") ||
    listItem?.closest(".js-fieldset") ||
    radioGroup.closest(".js-area-container") ||
    listItem
  if (!container) return null

  let label = "Protected Veteran"
  if (listItem) {
    const clone = listItem.cloneNode(true)
    const nested = clone.querySelector(IFRAME_SELECTORS.protectedVeteran)
    if (nested) nested.remove()
    label =
      (clone.textContent?.trim() || "").replace(/\s+/g, " ").trim() || label
  }

  const rule = buildIframeRadioRule(
    container,
    label,
    IFRAME_SELECTORS.protectedVeteran,
  )
  if (rule && listItem && label !== "Protected Veteran") {
    rule.label = label
    rule.$label = listItem
  }
  return rule
}

function extractDisabilityRule(form) {
  const section =
    form.querySelector(IFRAME_SELECTORS.disability) ||
    form
      .querySelector(IFRAME_SELECTORS.disabilityRadio)
      ?.closest(".js-area-container")
  if (!section) return null
  const rule = buildIframeRadioRule(
    section,
    "How do I know if I have a disability?",
    IFRAME_SELECTORS.disabilityRadio,
  )
  if (rule) {
    const labelNode = Array.from(section.querySelectorAll("*")).find((node) =>
      (node.textContent || "").includes(
        "How do I know if I have a disability?",
      ),
    )
    if (labelNode) {
      rule.label = "How do I know if I have a disability?"
      rule.$label = labelNode
    }
  }
  return rule
}

function extractFullNameRule(form) {
  const input = form.querySelector(IFRAME_SELECTORS.fullName)
  if (!input) return null

  let labelEl = null
  let label = "Your Name"
  const row = input.closest(".js-row")
  if (row) {
    let previous = row.previousElementSibling
    while (previous) {
      const text = previous.textContent?.trim() || ""
      if (
        text === "Your Name" ||
        (text.includes("Your Name") && text.length < 50)
      ) {
        const node =
          previous.querySelector(".js-col-md-12, div") || previous
        labelEl = node
        label = node.textContent?.trim() || "Your Name"
        break
      }
      previous = previous.previousElementSibling
    }
  }

  if (!labelEl) {
    const container = input.closest(".js-fieldset, .js-area-container")
    if (container) {
      for (const node of Array.from(
        container.querySelectorAll(".js-row, div"),
      )) {
        const text = node.textContent?.trim() || ""
        if (
          (text === "Your Name" ||
            (text.includes("Your Name") && text.length < 50)) &&
          node.compareDocumentPosition(input) &
            Node.DOCUMENT_POSITION_FOLLOWING
        ) {
          labelEl = node
          label = text
          break
        }
      }
    }
  }

  const required =
    input.hasAttribute("required") ||
    input.getAttribute("aria-required") === "true" ||
    labelEl?.querySelector(".js-required, [required]") !== null

  return {
    label,
    type: enums.FIELD_TYPE.TEXT,
    required,
    $input: input,
    $label: labelEl || input.closest(".js-form-group") || input,
  }
}

export async function extractIframeFormRules() {
  const form = document.querySelector("form#eeoOfccpForm")
  if (!form) return []

  const rules = []
  const gender = extractGenderRule(form)
  if (gender) rules.push(gender)
  const race = extractRaceRule(form)
  if (race) rules.push(race)
  const veteran = extractProtectedVeteranRule(form)
  if (veteran) rules.push(veteran)
  const disability = extractDisabilityRule(form)
  if (disability) rules.push(disability)
  const fullName = extractFullNameRule(form)
  if (fullName) rules.push(fullName)
  return rules
}
