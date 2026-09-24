// @ts-nocheck
/**
 * Personio — form rule extraction and autofill/submit snapshots.
 */

import * as enums from "../../../core/enums.js"

const FIELD_SELECTOR =
  'input:not([type="hidden"]):not([type="file"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="image"]), textarea, select'
const DOCUMENT_WRAPPER_SELECTOR = ".document-field-wrapper"

function collapseWhitespace(value) {
  return (value || "").replace(/\s+/g, " ").trim()
}

function cleanLabelText(value) {
  return collapseWhitespace(value)
    .replace(/\s*\*+\s*/g, " ")
    .replace(/\(\s*(required|erforderlich)\s*\)/gi, "")
    .replace(/\s+/g, " ")
    .trim()
}

function cleanOptionText(value) {
  return collapseWhitespace(value).replace(/\s*\*+\s*/g, " ").trim()
}

function getDocumentFieldLabel(container) {
  const labelledBy = container.getAttribute("aria-labelledby")?.trim() || ""
  const labelNode =
    (labelledBy && document.getElementById(labelledBy)) ||
    container.querySelector('[class*="documentCategoryLabel"]')
  return cleanLabelText(labelNode?.textContent)
}

function getDocumentUploadedFileName(container) {
  const uploadedList = container.querySelector(
    "[class*='uploadedFilesList'], [role='list'][aria-label*='Uploaded files']",
  )
  const fileNameNode =
    uploadedList?.querySelector("[class*='uploadedFileName']") ||
    container.querySelector("[class*='uploadedFileName']")
  return collapseWhitespace(fileNameNode?.textContent)
}

function getPersonioFileSnapshots() {
  const snapshots = {}
  const wrappers = Array.from(
    document.querySelectorAll(DOCUMENT_WRAPPER_SELECTOR),
  )
  for (const wrapper of wrappers) {
    const input = wrapper.querySelector('input[type="file"]')
    const label = getDocumentFieldLabel(wrapper)
    const fileName = getDocumentUploadedFileName(wrapper)
    if (input && label && fileName) {
      snapshots[label] = fileName
    }
  }
  return snapshots
}

function getInputName(input) {
  return cleanLabelText(input.getAttribute("name"))
}

function isVisibleElement(element) {
  if (
    !(element instanceof HTMLElement) ||
    element.getAttribute("aria-hidden") === "true" ||
    element.hidden ||
    element.closest("[aria-hidden='true'], [hidden]")
  ) {
    return false
  }
  const style = window.getComputedStyle(element)
  return style.display !== "none" && style.visibility !== "hidden"
}

function isEligibleField(element) {
  if (
    !(element instanceof HTMLInputElement) &&
    !(element instanceof HTMLTextAreaElement) &&
    !(element instanceof HTMLSelectElement)
  ) {
    return false
  }
  if (element.disabled) return false
  if (
    element instanceof HTMLInputElement &&
    ["hidden", "file", "submit", "button", "reset", "image"].includes(
      element.type,
    )
  ) {
    return false
  }
  return isVisibleElement(element)
}

function findBestFormRoot() {
  const forms = Array.from(document.querySelectorAll("form")).filter(
    isVisibleElement,
  )
  let bestForm = null
  let bestScore = -1

  for (const form of forms) {
    const fieldCount = Array.from(form.querySelectorAll(FIELD_SELECTOR)).filter(
      isEligibleField,
    ).length
    const labelCount = Array.from(
      form.querySelectorAll("label, legend"),
    ).filter(isVisibleElement).length
    const score = 10 * fieldCount + labelCount
    if (score > bestScore) {
      bestScore = score
      bestForm = form
    }
  }

  return bestForm || document.body
}

function getAriaLabelledByText(element) {
  const ids = (element.getAttribute("aria-labelledby") || "")
    .split(/\s+/)
    .filter(Boolean)
  return collapseWhitespace(
    ids
      .map((id) => document.getElementById(id))
      .filter(isVisibleElement)
      .map((node) => node.textContent)
      .join(" "),
  )
}

function isUsefulLabelText(text) {
  return !!text && !/^(select|choose|option|yes|no|upload|browse)$/i.test(text)
}

function findFieldContainer(field, root) {
  const maxFields =
    field instanceof HTMLInputElement &&
    ["radio", "checkbox"].includes(field.type)
      ? 12
      : 4
  let current = field.parentElement
  let best = field.parentElement || root

  while (current && current !== root && current !== document.body) {
    const identity = `${current.id} ${current.className}`
    const fieldCount = Array.from(current.querySelectorAll(FIELD_SELECTOR)).filter(
      isEligibleField,
    ).length
    const hasLabel = !!current.querySelector("label, legend")
    const looksLikeField =
      /field|form|question|group|row|item|control|wrapper|input/i.test(identity)

    if (hasLabel || looksLikeField) best = current
    if ((hasLabel || looksLikeField) && fieldCount <= maxFields) return current
    current = current.parentElement
  }

  return best
}

function findLabelByFor(root, fieldId) {
  if (!fieldId) return null
  const label = root.querySelector(`label[for="${CSS.escape(fieldId)}"]`)
  return isVisibleElement(label) ? label : null
}

function findDirectLabel(field, container) {
  const byFor =
    findLabelByFor(container, field.id) || findLabelByFor(document, field.id)
  if (byFor) return byFor

  const closestLabel = field.closest("label")
  return isVisibleElement(closestLabel) ? closestLabel : null
}

function findNearbyLabel(field, container) {
  const direct = findDirectLabel(field, container)
  if (direct) return direct

  const legend = container.querySelector("legend")
  if (isVisibleElement(legend)) return legend

  const candidates = Array.from(
    container.querySelectorAll(
      "label, legend, h1, h2, h3, h4, h5, h6, p, span, div",
    ),
  ).filter((candidate) => {
    if (
      !isVisibleElement(candidate) ||
      (candidate.contains(field) && candidate.tagName !== "LABEL")
    ) {
      return false
    }
    const text = cleanLabelText(candidate.textContent)
    return isUsefulLabelText(text)
  })

  return candidates[0] || null
}

function findAncestorLabelledNode(field) {
  let current = field.parentElement
  while (current && current !== document.body) {
    const labelledBy = current.getAttribute("aria-labelledby")
    if (labelledBy) {
      const ids = labelledBy.split(/\s+/).filter(Boolean)
      for (const id of ids) {
        const node = document.getElementById(id)
        if (isVisibleElement(node)) return node
      }
    }

    const legend = current.querySelector(":scope > legend")
    if (isVisibleElement(legend)) return legend
    current = current.parentElement
  }
  return null
}

function resolveFieldLabel(field, container) {
  const directLabel = findDirectLabel(field, container)
  const directText = cleanLabelText(directLabel?.textContent)
  const ancestorText = cleanLabelText(
    findAncestorLabelledNode(field)?.textContent,
  )
  const inputName = getInputName(field)

  if (directText) {
    if (
      ancestorText &&
      /^(first|last|middle)$/i.test(directText) &&
      /name/i.test(ancestorText)
    ) {
      return `${directText} ${ancestorText}`
    }
    if (/^first$/i.test(directText) && /first_?name/i.test(inputName)) {
      return "First Name"
    }
    if (/^last$/i.test(directText) && /last_?name/i.test(inputName)) {
      return "Last Name"
    }
    return directText
  }

  const ariaLabel = cleanLabelText(field.getAttribute("aria-label"))
  if (ariaLabel && isUsefulLabelText(ariaLabel)) return ariaLabel

  const labelledByText = cleanLabelText(getAriaLabelledByText(field))
  if (labelledByText && isUsefulLabelText(labelledByText)) return labelledByText

  const nearby = findNearbyLabel(field, container)
  return cleanLabelText(nearby?.textContent)
}

function isFieldRequired(field, labelNode, container) {
  if (
    field.hasAttribute("required") ||
    field.getAttribute("aria-required") === "true"
  ) {
    return true
  }

  const candidates = [
    labelNode?.textContent,
    findAncestorLabelledNode(field)?.textContent,
    findNearbyLabel(field, container)?.textContent,
    container.textContent,
  ]
  return candidates.some((text) =>
    /\*|required|erforderlich/i.test(text || ""),
  )
}

function getChoiceLabel(choice, container) {
  const forLabelText = cleanOptionText(
    (
      findLabelByFor(container, choice.id) ||
      findLabelByFor(document, choice.id)
    )?.textContent,
  )
  if (forLabelText) return forLabelText

  const closestText = cleanOptionText(choice.closest("label")?.textContent)
  if (closestText) return closestText

  const ariaLabel = cleanOptionText(choice.getAttribute("aria-label"))
  return ariaLabel || cleanOptionText(choice.value)
}

function resolveGroupLabel(choices, container) {
  const choiceLabels = choices.map((choice) => getChoiceLabel(choice, container))
  const legend = container.querySelector("legend")
  const legendText = cleanLabelText(legend?.textContent)
  if (legendText) return { label: legendText, $label: legend }

  const candidates = Array.from(
    container.querySelectorAll("label, h1, h2, h3, h4, h5, h6, p, span, div"),
  ).filter(isVisibleElement)

  for (const candidate of candidates) {
    const text = cleanLabelText(candidate.textContent)
    if (text && (!choiceLabels.includes(text) || !(choices.length > 1))) {
      return { label: text, $label: candidate }
    }
  }

  const fallback = choiceLabels[0]
  return fallback ? { label: fallback, $label: container } : null
}

function getChoiceGroup(field, root) {
  const container = findFieldContainer(field, root)
  const type = field.type
  const sameType = Array.from(
    container.querySelectorAll(`input[type="${type}"]`),
  ).filter((candidate) => isEligibleField(candidate))
  const key = field.name || field.id
  const group =
    key &&
    sameType.some(
      (candidate) => candidate.name === key || candidate.id === key,
    )
      ? sameType.filter(
          (candidate) => candidate.name === key || candidate.id === key,
        )
      : sameType

  return { container, group }
}

function buildTextRule(field, root) {
  const container = findFieldContainer(field, root)
  const name = field.getAttribute("name")?.toLowerCase() || ""
  const label =
    name === "first_name"
      ? "First Name"
      : name === "last_name"
        ? "Last Name"
        : resolveFieldLabel(field, container)
  if (!label) return null

  const labelNode = findNearbyLabel(field, container) || container
  const required = isFieldRequired(field, labelNode, container)
  return {
    type: enums.FIELD_TYPE.TEXT,
    label,
    required,
    $input: field,
    $label: labelNode,
  }
}

function buildSelectRule(field, root) {
  const container = findFieldContainer(field, root)
  const label = resolveFieldLabel(field, container)
  if (!label) return null

  const labelNode = findNearbyLabel(field, container) || container
  const options = Array.from(field.options)
    .map((option) => cleanOptionText(option.textContent))
    .filter(
      (option) => option && !/^(select|please select)$/i.test(option),
    )

  return {
    type: enums.FIELD_TYPE.SELECT,
    label,
    required: isFieldRequired(field, labelNode, container),
    $input: field,
    $label: labelNode,
    options,
  }
}

function buildChoiceRule(field, root) {
  const { container, group } = getChoiceGroup(field, root)
  const type = field.type
  if (group.length === 0) return null

  const groupLabel = resolveGroupLabel(group, container)
  if (!groupLabel?.label) return null

  const options = group
    .map((choice) => getChoiceLabel(choice, container))
    .filter(Boolean)

  if (type === "radio") {
    return {
      type: enums.FIELD_TYPE.RADIOGROUP,
      label: groupLabel.label,
      required: group.some((choice) =>
        isFieldRequired(choice, groupLabel.$label, container),
      ),
      $input: group[0],
      $label: groupLabel.$label,
      $radioParent: container,
      options,
    }
  }

  return {
    type: enums.FIELD_TYPE.CHECKBOX,
    label: groupLabel.label,
    required: group.some((choice) =>
      isFieldRequired(choice, groupLabel.$label, container),
    ),
    $checkboxs: group,
    $input: group[0],
    $label: groupLabel.$label,
    options,
  }
}

async function extractRules() {
  const root = findBestFormRoot()
  const fields = Array.from(root.querySelectorAll(FIELD_SELECTOR)).filter(
    isEligibleField,
  )
  const rules = []
  const seen = /* @__PURE__ */ new Set()

  for (const field of fields) {
    if (seen.has(field)) continue

    if (
      field instanceof HTMLInputElement &&
      ["radio", "checkbox"].includes(field.type)
    ) {
      const rule = buildChoiceRule(field, root)
      if (rule) {
        const { group } = getChoiceGroup(field, root)
        group.forEach((choice) => seen.add(choice))
        rules.push(rule)
      }
      continue
    }

    if (field instanceof HTMLSelectElement) {
      const rule = buildSelectRule(field, root)
      if (rule) {
        seen.add(field)
        rules.push(rule)
      }
      continue
    }

    if (
      field instanceof HTMLInputElement ||
      field instanceof HTMLTextAreaElement
    ) {
      const rule = buildTextRule(field, root)
      if (rule) {
        seen.add(field)
        rules.push(rule)
      }
    }
  }

  return rules
}

function readSelectValue(select) {
  const selected =
    select.options[select.selectedIndex] ||
    Array.from(select.options).find((option) => option.selected)
  return cleanOptionText(selected?.textContent || select.value)
}

function readRuleValue(rule) {
  if (rule.type === enums.FIELD_TYPE.CHECKBOX) {
    const checkboxes = rule.$checkboxs.filter(
      (checkbox) => checkbox instanceof HTMLInputElement,
    )
    const selected = checkboxes
      .map((checkbox, index) =>
        checkbox.checked ? cleanOptionText(rule.options?.[index] || "") : "",
      )
      .filter(Boolean)
    if (selected.length === 0) return ""
    return selected.length === 1 ? selected[0] : selected
  }

  if (rule.type === enums.FIELD_TYPE.RADIOGROUP) {
    const checked = rule.$radioParent.querySelector(
      'input[type="radio"]:checked',
    )
    return checked ? getChoiceLabel(checked, rule.$radioParent) : ""
  }

  if (rule.type === enums.FIELD_TYPE.SELECT) return readSelectValue(rule.$input)

  return (
    (rule.type === enums.FIELD_TYPE.TEXT && rule.$input.value) || ""
  )
}

async function getFormSnapshot() {
  const rules = await extractRules()
  const snapshot = {}
  for (const rule of rules) {
    snapshot[rule.label] = readRuleValue(rule)
  }
  return Object.assign(snapshot, getPersonioFileSnapshots())
}

export {
  extractRules,
  getFormSnapshot,
  getPersonioFileSnapshots,
}
