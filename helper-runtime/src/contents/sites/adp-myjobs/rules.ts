// @ts-nocheck
/**
 * ADP MyJobs — form rule extraction, phone-country expansion, and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as delay from "../../../utils/delay.js"

function normalizeLabel(raw) {
  return raw
    .replace(/\s+/g, " ")
    .replace(/\*/g, "")
    .replace(/\u00a0/g, " ")
    .trim()
}

function isRequiredFormGroup(group, labelNode) {
  if (
    group.hasAttribute("required") ||
    group.getAttribute("aria-required") === "true" ||
    (labelNode &&
      (labelNode.classList.contains("required") ||
        labelNode.querySelector(
          ".required, .required-indicator, [class*='required']",
        ) ||
        labelNode.textContent?.includes("*")))
  ) {
    return true
  }
  const wrapper = group.closest("div, fieldset")
  return !!(
    wrapper &&
    (wrapper.classList.contains("required") ||
      wrapper.querySelector(".required, .required-indicator"))
  )
}

function fallbackSelectOptions(label) {
  const lower = label.toLowerCase()
  if (lower.includes("may we contact")) return ["Yes", "No"]
  if (lower.includes("current or previous employer")) {
    return ["Current employer", "Previous employer"]
  }
  if (lower === "current employer" || lower.includes("current employer")) {
    return ["Yes", "No"]
  }
  return []
}

function readSdfRadioLabel(radio) {
  const aria = radio.getAttribute("aria-label")?.trim()
  if (aria) return aria

  const text = radio.textContent?.replace(/\s+/g, " ").trim()
  if (text) return text

  const describedBy = radio.getAttribute("aria-describedby") || ""
  for (const id of describedBy.split(/\s+/).filter(Boolean)) {
    const node = document.getElementById(id)
    const described = node?.textContent?.replace(/\s+/g, " ").trim()
    if (described) return described
  }

  const shadowText = radio.shadowRoot?.textContent?.replace(/\s+/g, " ").trim() || ""
  return shadowText || radio.getAttribute("value")?.trim() || ""
}

function isNumericishOption(text) {
  const trimmed = text.trim()
  return /^\d{4,}$/.test(trimmed) || /^q_\d+$/i.test(trimmed)
}

/** Normalize SDF radio option labels; Yes/No when both look like ids. */
export function normalizeAdpMyJobsSdfRadioOptions(labels, radioCount) {
  const cleaned = labels.map((label) => label.replace(/\s+/g, " ").trim()).filter(Boolean)
  if (radioCount === 2 && (cleaned.length === 0 || cleaned.every(isNumericishOption))) {
    return ["Yes", "No"]
  }
  return cleaned
}

function queryDeep(selector, root = document) {
  let current = root
  const direct = current.querySelector(selector)
  if (direct) return direct

  const queue = []
  const enqueueChildren = (node) => {
    if (node instanceof ShadowRoot) {
      queue.push(...Array.from(node.children))
      return
    }
    if (node.shadowRoot) queue.push(node.shadowRoot)
    queue.push(...Array.from(node.children))
  }

  if (current instanceof Document) {
    queue.push(...Array.from(current.documentElement.children))
  } else if (current instanceof HTMLElement) {
    if (current.shadowRoot) queue.push(current.shadowRoot)
    queue.push(...Array.from(current.children))
  } else if (current instanceof ShadowRoot) {
    queue.push(...Array.from(current.children))
  }

  while (queue.length) {
    const node = queue.shift()
    const hit = node.querySelector(selector)
    if (hit) return hit
    enqueueChildren(node)
  }
  return null
}

function queryAllDeep(selector, root = document) {
  const results = []
  const queue = []
  const current = root

  results.push(...Array.from(current.querySelectorAll(selector)))

  const enqueueChildren = (node) => {
    if (node instanceof ShadowRoot) {
      queue.push(...Array.from(node.children))
      return
    }
    if (node.shadowRoot) queue.push(node.shadowRoot)
    queue.push(...Array.from(node.children))
  }

  if (current instanceof Document) {
    queue.push(...Array.from(current.documentElement.children))
  } else if (current instanceof HTMLElement) {
    if (current.shadowRoot) queue.push(current.shadowRoot)
    queue.push(...Array.from(current.children))
  } else if (current instanceof ShadowRoot) {
    queue.push(...Array.from(current.children))
  }

  while (queue.length) {
    const node = queue.shift()
    results.push(...Array.from(node.querySelectorAll(selector)))
    enqueueChildren(node)
  }

  return Array.from(new Set(results))
}

function collectSelectItemLabels(items) {
  return items
    .map(
      (item) =>
        item.getAttribute("aria-label")?.trim() ||
        item.textContent?.replace(/\s+/g, " ").trim() ||
        "",
    )
    .filter((label) => label && label !== "-")
}

function querySelectItems(root) {
  return queryAllDeep("sdf-select-item, [role='option']", root)
}

async function openSelectAndCollectOptions(select) {
  try {
    const trigger =
      queryDeep(
        ".trigger-button[role='button'], [part='frame'][role='button'], [role='button'][aria-expanded]",
        select,
      ) ??
      queryDeep(
        "sdf-icon.expansion-control, [part='expansion-trigger-control']",
        select,
      ) ??
      select

    trigger.click()
    let options = []
    for (let attempt = 0; attempt < 30 && !((options = collectSelectItemLabels(querySelectItems(select))).length > 0); attempt++) {
      await delay.delay(100)
    }
    trigger.click()
    await delay.delay(300)
    return options
  } catch {
    return []
  }
}

function findEmbeddedPhoneCountrySelect(phoneInput) {
  return queryDeep('sdf-select-simple[embedded-context="phone-number"]', phoneInput)
}

async function collectSelectOptions(select) {
  let options = collectSelectItemLabels(
    queryAllDeep("sdf-select-item, [role='option']", select),
  )
  if (options.length === 0) {
    options = await openSelectAndCollectOptions(select)
  }
  return Array.from(new Set(options))
}

export function expandAdpMyJobsPhoneRules(phoneRule, countrySelect, options) {
  if (!countrySelect) return [phoneRule]
  return [
    {
      type: enums.FIELD_TYPE.SELECT,
      label: phoneCountryCode.PHONE_COUNTRY_CODE_LABEL,
      required: phoneRule.required,
      options,
      description: phoneCountryCode.PHONE_COUNTRY_CODE_DESCRIPTION,
      $input: countrySelect,
      $label: phoneRule.$label,
    },
    { ...phoneRule, description: phoneCountryCode.LOCAL_PHONE_DESCRIPTION },
  ]
}

export function shouldFillAdpMyJobsPhoneRule(rule, countryCodeCommitted) {
  return (
    rule.description !== phoneCountryCode.LOCAL_PHONE_DESCRIPTION ||
    countryCodeCommitted
  )
}

async function parseFormGroup(group) {
  const labelNode = group.querySelector("label.form-control-label")
  const rawLabel =
    labelNode?.querySelector(".valid-label")?.textContent?.replace(/\s+/g, " ")?.trim() ||
    labelNode?.textContent?.replace(/\s+/g, " ")?.trim() ||
    ""
  const label = normalizeLabel(rawLabel)
  if (!label) return null

  const required = !!labelNode?.querySelector(".required") || isRequiredFormGroup(group, labelNode)

  const radioGroup = group.querySelector("sdf-radio-group")
  if (radioGroup) {
    const radios = Array.from(radioGroup.querySelectorAll("sdf-radio-button"))
    if (radios.length > 0) {
      const options = normalizeAdpMyJobsSdfRadioOptions(
        radios.map((radio) => readSdfRadioLabel(radio)),
        radios.length,
      )
      return {
        type: enums.FIELD_TYPE.RADIOGROUP,
        label,
        required,
        options: options.length ? options : undefined,
        $radios: radios,
        $radioParent: radioGroup,
        $input: radios[0],
        $label: labelNode || group,
      }
    }
  }

  const checkbox = group.querySelector("sdf-checkbox")
  if (checkbox) {
    return {
      type: enums.FIELD_TYPE.CHECKBOX,
      label,
      required,
      options: [label],
      $checkboxs: [checkbox],
      $input: checkbox,
      $label: labelNode || group,
    }
  }

  const select = group.querySelector("sdf-select-simple")
  if (select) {
    let options = Array.from(select.querySelectorAll("sdf-select-item"))
      .map((item) => item.textContent?.replace(/\s+/g, " ")?.trim() || "")
      .filter((text) => text && text !== "-")
    if (options.length === 0) {
      options = await openSelectAndCollectOptions(select)
    }
    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      required,
      options: options.length ? options : fallbackSelectOptions(label),
      $input: select,
      $label: labelNode || group,
    }
  }

  const phoneInput = group.querySelector("sdf-phone-number-input")
  if (phoneInput) {
    const tel = queryDeep('input[type="tel"], input', phoneInput)
    if (!tel) return null
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required,
      $input: tel,
      $label: labelNode || group,
    }
  }

  const plainInput = group.querySelector("input, textarea")
  if (plainInput) {
    if (plainInput.hasAttribute("disabled") || plainInput.readOnly) return null
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required,
      $input: plainInput,
      $label: labelNode || group,
    }
  }

  const sdfTextarea = group.querySelector("sdf-textarea")
  if (sdfTextarea) {
    const nested = queryDeep("textarea, input", sdfTextarea)
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required,
      $input: nested || sdfTextarea,
      $label: labelNode || group,
    }
  }

  const datePicker = group.querySelector("sdf-date-picker")
  if (datePicker) {
    return {
      type: enums.FIELD_TYPE.DATE,
      label,
      required,
      description: "MM/DD/YYYY",
      $input: datePicker,
      $label: labelNode || group,
    }
  }

  const sdfInput = group.querySelector("sdf-input")
  if (sdfInput) {
    const nested = queryDeep("input, textarea", sdfInput)
    if (nested) {
      if (
        nested.hasAttribute("disabled") ||
        (nested instanceof HTMLInputElement && nested.readOnly)
      ) {
        return null
      }
      return {
        type: enums.FIELD_TYPE.TEXT,
        label,
        required,
        $input: nested,
        $label: labelNode || group,
      }
    }
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required,
      $input: sdfInput,
      $label: labelNode || group,
    }
  }

  return null
}

async function rulesFromFormGroup(group) {
  const rule = await parseFormGroup(group)
  if (!rule) return []

  if (group.getAttribute("data-name")?.toLowerCase() !== "phone") {
    return [rule]
  }

  const phoneRoot = group.querySelector("sdf-phone-number-input")
  const countrySelect = phoneRoot ? findEmbeddedPhoneCountrySelect(phoneRoot) : null
  if (!phoneRoot || !countrySelect || rule.type !== enums.FIELD_TYPE.TEXT) {
    return [rule]
  }

  const options = await collectSelectOptions(countrySelect)
  console.debug("[ADP MyJobs][PhoneCountryCode] extracted embedded selector", {
    fieldName: "phone",
    optionCount: options.length,
  })
  return expandAdpMyJobsPhoneRules(rule, countrySelect, options)
}

async function extractEmploymentTemplateRule() {
  const page = document.querySelector(
    '.page-content-container[aria-label="Employment History"]',
  )
  if (!page) return null

  const repeating = page.querySelector("rm-repeating-form")
  if (!repeating) return null

  const boxes = Array.from(repeating.querySelectorAll("sdf-expandable-box")).filter(
    (box) => {
      const header =
        (box.querySelector('[slot="header"]')?.textContent || "")
          .replace(/\s+/g, " ")
          .trim()
          .toLowerCase() || ""
      return (
        header.includes("employer") ||
        !!box.querySelector(
          "adp-form-group label.form-control-label:not(.form-control-label-hidden)",
        )
      )
    },
  )
  if (boxes.length === 0) return null

  const first = boxes[0]
  const groups = Array.from(first.querySelectorAll("adp-form-group[data-name]"))
  const children = []
  for (const group of groups) {
    children.push(...(await rulesFromFormGroup(group)))
  }
  if (children.length === 0) return null

  return {
    type: enums.FIELD_TYPE.EMPLOYMENT,
    label: "employment",
    required: false,
    children,
    options: children.map((child) => ({
      type: child.type,
      label: child.label,
      options: child.options || [],
    })),
  }
}

export async function extractEmploymentRulesForFillFromPage() {
  const page = document.querySelector(
    '.page-content-container[aria-label="Employment History"]',
  )
  if (!page) return []

  const repeating = page.querySelector("rm-repeating-form")
  if (!repeating) return []

  const boxes = Array.from(repeating.querySelectorAll("sdf-expandable-box")).filter(
    (box) => {
      const header =
        (box.querySelector('[slot="header"]')?.textContent || "")
          .replace(/\s+/g, " ")
          .trim()
          .toLowerCase() || ""
      return (
        header.includes("employer") ||
        !!box.querySelector(
          "adp-form-group label.form-control-label:not(.form-control-label-hidden)",
        )
      )
    },
  )

  const rules = []
  for (const box of boxes) {
    const groups = Array.from(box.querySelectorAll("adp-form-group[data-name]"))
    const children = []
    for (const group of groups) {
      children.push(...(await rulesFromFormGroup(group)))
    }
    if (children.length === 0) continue
    rules.push({
      type: enums.FIELD_TYPE.EMPLOYMENT,
      label: "employment",
      required: false,
      children,
      options: children.map((child) => ({
        type: child.type,
        label: child.label,
        options: child.options || [],
      })),
    })
  }
  return rules
}

function isOpaqueLabelId(id) {
  return (
    /^q_\d+/i.test(id) ||
    /^\d{4,}$/.test(id) ||
    /(?:^|[-_])(error|errormessage|required)(?:$|[-_])/i.test(id)
  )
}

function isUsableLabelText(text) {
  return !!text && !/^(error|required|\*)$/i.test(text)
}

function labelFromIds(ids) {
  for (const id of ids) {
    if (isOpaqueLabelId(id)) continue
    const text =
      document.getElementById(id)?.textContent?.replace(/\s+/g, " ").trim() || ""
    if (isUsableLabelText(text)) return text
  }
  return ""
}

function previousSectionDetailsLabel(el) {
  const parent = el.closest(".section-row")?.parentElement
  let sibling = parent?.previousElementSibling
  while (sibling) {
    const labeled = sibling
      .querySelector(".sdf-form-control-wrapper--label")
      ?.textContent?.replace(/\s+/g, " ")
      .trim()
    if (labeled) return labeled
    const text = sibling.textContent?.replace(/\s+/g, " ").trim()
    if (text) return text
    sibling = sibling.previousElementSibling
  }
  return ""
}

function resolveControlLabel(el, { fallbackToPreviousDetails = false } = {}) {
  const wrapperLabel = queryDeep(
    ".sdf-form-control-wrapper--label, label, [part='label']",
    el,
  )?.textContent?.replace(/\s+/g, " ").trim()
  if (wrapperLabel) return wrapperLabel

  const aria = el.getAttribute("aria-label")?.trim()
  if (aria) return aria

  const labelledBy =
    el.getAttribute("aria-labelledby")?.trim().split(/\s+/).filter(Boolean) || []
  const fromIds = labelFromIds(labelledBy)
  if (fromIds) return fromIds

  if (fallbackToPreviousDetails) {
    const previous = previousSectionDetailsLabel(el)
    if (previous) return `${previous} Details`
  }
  return ""
}

function parseStandaloneRadioGroup(group) {
  const labelNode = group.querySelector(".sdf-form-control-wrapper--label")
  const label = normalizeLabel(
    labelNode?.textContent?.replace(/\s+/g, " ").trim() ||
      group.getAttribute("aria-label") ||
      "",
  )
  if (!label) return null

  const radios = Array.from(group.querySelectorAll("sdf-radio-button"))
  if (radios.length === 0) return null

  const options = normalizeAdpMyJobsSdfRadioOptions(
    radios.map((radio) => readSdfRadioLabel(radio)),
    radios.length,
  )
  const required =
    group.getAttribute("aria-required") === "true" ||
    group.hasAttribute("required") ||
    !!group.querySelector(
      '[id$="errorMessage"]:not(:empty), [id*="errorMessage"]:not(:empty)',
    )

  return {
    type: enums.FIELD_TYPE.RADIOGROUP,
    label,
    required,
    options: options.length ? options : undefined,
    $radios: radios,
    $radioParent: group,
    $input: radios[0],
    $label: labelNode || group,
  }
}

function parsePrescreenTextControl(el) {
  const label = normalizeLabel(
    resolveControlLabel(el, { fallbackToPreviousDetails: true }),
  )
  if (!label) return null

  const nested = queryDeep("textarea, input", el)
  const input = nested || el
  if (
    input instanceof HTMLInputElement &&
    (input.type === "hidden" || input.disabled || input.readOnly)
  ) {
    return null
  }

  return {
    type: enums.FIELD_TYPE.TEXT,
    label,
    required:
      el.getAttribute("aria-required") === "true" || el.hasAttribute("required"),
    $input: input,
    $label: el,
  }
}

async function parseStandaloneSelect(select) {
  let label = resolveControlLabel(select)
  if (!label) {
    const section = select.closest(".section-row")
    if (section) {
      let previous = section.previousElementSibling
      if (!previous) previous = section.parentElement?.previousElementSibling
      if (
        previous?.querySelector?.(
          "sdf-radio-group, sdf-select-simple, sdf-checkbox, sdf-input",
        )
      ) {
        previous = null
      }
      if (previous) {
        const text = previous.textContent?.replace(/\s+/g, " ").trim() || ""
        if (text.length > 2 && !/^(error|required|\*)$/i.test(text)) {
          label = text
        }
      }
      if (!label) {
        const fallback = section.querySelector(
          "label, .form-control-label, [class*='label']",
        )
        label = fallback?.textContent?.replace(/\s+/g, " ").trim() || ""
      }
    }
  }
  if (!label) {
    const aria = select.getAttribute("aria-label")?.trim()
    if (aria) label = aria
  }

  const normalized = normalizeLabel(label)
  if (!normalized) return null

  let options = collectSelectItemLabels([
    ...Array.from(select.querySelectorAll("sdf-select-item")),
    ...querySelectItems(select),
  ])
  if (options.length === 0) {
    options = await openSelectAndCollectOptions(select)
  }

  const section = select.closest(".section-row")
  const required =
    select.getAttribute("aria-required") === "true" ||
    select.hasAttribute("required") ||
    !!section?.querySelector(".required, [class*='required']")

  return {
    type: enums.FIELD_TYPE.SELECT,
    label: normalized,
    required,
    options: options.length ? options : fallbackSelectOptions(normalized),
    $input: select,
    $label: section || select,
  }
}

export async function extractRules() {
  const rules = []
  const isEmploymentPage = !!document.querySelector(
    '.page-content-container[aria-label="Employment History"]',
  )
  const formGroups = Array.from(
    document.querySelectorAll("adp-form-group[data-name]"),
  )

  if (isEmploymentPage) {
    const employment = await extractEmploymentTemplateRule()
    if (employment) rules.push(employment)
    for (const group of formGroups) {
      if (group.closest("rm-repeating-form")) continue
      rules.push(...(await rulesFromFormGroup(group)))
    }
  } else {
    for (const group of formGroups) {
      rules.push(...(await rulesFromFormGroup(group)))
    }
  }

  for (const radioGroup of document.querySelectorAll(
    'sdf-radio-group[role="radiogroup"]',
  )) {
    if (radioGroup.closest("adp-form-group[data-name]")) continue
    const rule = parseStandaloneRadioGroup(radioGroup)
    if (rule) rules.push(rule)
  }

  for (const select of document.querySelectorAll("sdf-select-simple")) {
    if (select.closest("adp-form-group[data-name]")) continue
    const rule = await parseStandaloneSelect(select)
    if (rule) rules.push(rule)
  }

  for (const control of document.querySelectorAll(
    "#prescreeningForm sdf-textarea, #prescreeningForm sdf-input, #prescreeningForm textarea, #prescreeningForm input:not([type='hidden'])",
  )) {
    if (
      control.closest("adp-form-group[data-name]") ||
      control.closest("sdf-radio-group, sdf-select-simple")
    ) {
      continue
    }
    const rule = parsePrescreenTextControl(control)
    if (rule) rules.push(rule)
  }

  return rules
}

export async function getFormSnapshot() {
  const snapshot = {}
  const formGroups = Array.from(
    document.querySelectorAll("adp-form-group[data-name]"),
  )

  for (const group of formGroups) {
    const labelNode = group.querySelector("label.form-control-label")
    const rawLabel =
      labelNode?.querySelector(".valid-label")?.textContent?.replace(/\s+/g, " ")?.trim() ||
      labelNode?.textContent?.replace(/\s+/g, " ")?.trim() ||
      ""
    const label = normalizeLabel(rawLabel)
    if (!label) continue

    const checkbox = group.querySelector("sdf-checkbox")
    if (checkbox) {
      snapshot[label] =
        checkbox.getAttribute("aria-checked") === "true" ? "Yes" : "No"
      continue
    }

    const radioGroup = group.querySelector("sdf-radio-group")
    if (radioGroup) {
      const radios = Array.from(radioGroup.querySelectorAll("sdf-radio-button"))
      const checked = radios.find(
        (radio) => radio.getAttribute("aria-checked") === "true",
      )
      snapshot[label] = checked ? readSdfRadioLabel(checked) : ""
      continue
    }

    const select = group.querySelector("sdf-select-simple")
    if (select) {
      const selected =
        select.querySelector('sdf-select-item[aria-selected="true"]') ||
        select.querySelector("sdf-select-item[selected]")
      snapshot[label] =
        selected?.textContent?.replace(/\s+/g, " ")?.trim() || select.value || ""
      continue
    }

    const phoneRoot = group.querySelector("sdf-phone-number-input")
    if (phoneRoot) {
      const tel = queryDeep('input[type="tel"], input', phoneRoot)
      if (group.getAttribute("data-name")?.toLowerCase() === "phone") {
        const countrySelect = findEmbeddedPhoneCountrySelect(phoneRoot)
        const selected = countrySelect
          ? queryDeep(
              'sdf-select-item[aria-selected="true"], sdf-select-item[selected]',
              countrySelect,
            )
          : null
        snapshot[phoneCountryCode.PHONE_COUNTRY_CODE_LABEL] =
          selected?.getAttribute("aria-label")?.trim() ||
          selected?.textContent?.replace(/\s+/g, " ").trim() ||
          selected?.getAttribute("value")?.trim() ||
          ""
      }
      snapshot[label] = tel?.value || ""
      continue
    }

    const plain = group.querySelector("input, textarea")
    if (plain) {
      snapshot[label] = plain.value || ""
      continue
    }

    const sdfInput = group.querySelector("sdf-input")
    if (sdfInput) {
      const nested = queryDeep("input, textarea", sdfInput)
      snapshot[label] = nested?.value || ""
      continue
    }

    const sdfTextarea = group.querySelector("sdf-textarea")
    if (sdfTextarea) {
      const nested = queryDeep("textarea, input", sdfTextarea)
      snapshot[label] = nested?.value || ""
      continue
    }

    const datePicker = group.querySelector("sdf-date-picker")
    if (datePicker) {
      const nested = queryDeep("input", datePicker)
      snapshot[label] = nested?.value || datePicker.value || ""
    }
  }

  for (const radioGroup of document.querySelectorAll(
    'sdf-radio-group[role="radiogroup"]',
  )) {
    if (radioGroup.closest("adp-form-group[data-name]")) continue
    const labelNode = radioGroup.querySelector(".sdf-form-control-wrapper--label")
    const label = normalizeLabel(
      labelNode?.textContent?.replace(/\s+/g, " ").trim() ||
        radioGroup.getAttribute("aria-label") ||
        "",
    )
    if (!label) continue

    const radios = Array.from(radioGroup.querySelectorAll("sdf-radio-button"))
    const checked = radios.find(
      (radio) => radio.getAttribute("aria-checked") === "true",
    )
    const options = normalizeAdpMyJobsSdfRadioOptions(
      radios.map((radio) => readSdfRadioLabel(radio)),
      radios.length,
    )
    const index = checked ? radios.indexOf(checked) : -1
    snapshot[label] = index >= 0 ? options[index] || readSdfRadioLabel(checked) : ""
  }

  for (const control of document.querySelectorAll(
    "#prescreeningForm sdf-textarea, #prescreeningForm sdf-input, #prescreeningForm textarea, #prescreeningForm input:not([type='hidden'])",
  )) {
    if (
      control.closest("adp-form-group[data-name]") ||
      control.closest("sdf-radio-group, sdf-select-simple")
    ) {
      continue
    }
    const label = normalizeLabel(
      resolveControlLabel(control, { fallbackToPreviousDetails: true }),
    )
    if (!label) continue
    const nested = queryDeep("textarea, input", control)
    snapshot[label] = nested?.value || control.value || ""
  }

  return snapshot
}
