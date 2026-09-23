// @ts-nocheck
/**
 * Careers Toasttab form rule extraction and snapshot helpers.
 */

import * as enums from "../../../core/enums.js"

const PHONE_NUMBER_DESCRIPTION =
  "Return only the phone number without the country calling code. Do not include the phone country code because it is provided separately."

async function extractRules() {
  const rules = []
  const form = document.querySelector("form[action*='/form_submissions']")
  if (!form) return rules

  const labels = form.querySelectorAll("label.form-template-field-label")
  for (const labelEl of labels) {
    if (labelEl.closest(".check-box-inline")) continue

    const label = getLabelText(labelEl)
    if (!label) continue

    const required = isLabelRequired(labelEl)
    const formGroup = labelEl.closest(".form-group")

    if (
      formGroup &&
      (formGroup.classList.contains("check-box-set") ||
        formGroup.getAttribute("data-kind") === "check_box_set")
    ) {
      const checkboxRule = buildCheckboxRule(
        formGroup,
        labelEl,
        label,
        required,
      )
      if (checkboxRule) rules.push(checkboxRule)
      continue
    }

    const forId = labelEl.getAttribute("for")?.trim()
    let input = null
    if (forId) input = document.getElementById(forId)
    if (!input && formGroup) input = findInputInGroup(formGroup)
    if (!input) continue

    const tagName = input.tagName
    if (tagName === "INPUT" && input.type === "file") continue

    if (tagName === "SELECT") {
      rules.push(buildSelectRule(labelEl, label, required, input))
    } else if (tagName === "INPUT" || tagName === "TEXTAREA") {
      const textRule = {
        label,
        $label: labelEl,
        required,
        type: enums.FIELD_TYPE.TEXT,
        $input: input,
      }
      const expanded = expandPhoneRules(textRule)
      rules.push(...(expanded ?? [textRule]))
    }
  }

  return dedupeRules(rules)
}

function formatCountryOptionLabel(item) {
  const name =
    item
      .querySelector(".iti__country-name")
      ?.textContent?.replace(/\s*\(\+\d+\)\s*$/, "")
      .trim() || ""
  const dialRaw =
    item.querySelector(".iti__dial-code")?.textContent?.trim() ||
    item.getAttribute("data-dial-code") ||
    ""
  const dialCode = dialRaw ? `+${dialRaw.replace(/\D/g, "")}` : ""
  if (name && dialCode) return `${name} ${dialCode}`
  return item.textContent?.replace(/\s+/g, " ").trim() || ""
}

function expandPhoneRules(rule) {
  const input = rule.$input
  if (input.type !== "tel") return null

  const iti = input.closest(".iti")
  const selectedCountryButton = iti?.querySelector(
    "button.iti__selected-country",
  )
  const options = Array.from(iti?.querySelectorAll("li.iti__country") || [])
    .map(formatCountryOptionLabel)
    .filter(Boolean)

  if (!selectedCountryButton || options.length === 0) return null

  return [
    {
      label: "Phone Country Code",
      $label: rule.$label,
      required: rule.required,
      type: enums.FIELD_TYPE.SELECT,
      $input: selectedCountryButton,
      options,
    },
    { ...rule, description: PHONE_NUMBER_DESCRIPTION },
  ]
}

function buildCheckboxRule(formGroup, labelEl, label, required) {
  const checkboxes = Array.from(
    formGroup.querySelectorAll('input[type="checkbox"]'),
  )
  if (checkboxes.length === 0) return null

  const options = checkboxes.map((checkbox) => {
    const wrapper = checkbox.closest("label")
    if (wrapper) {
      const clone = wrapper.cloneNode(true)
      const nestedInput = clone.querySelector("input")
      if (nestedInput) nestedInput.remove()
      return clone.textContent?.trim() || checkbox.value || ""
    }
    return checkbox.value || ""
  })

  return {
    label,
    $label: labelEl,
    required,
    type: enums.FIELD_TYPE.CHECKBOX,
    $checkboxs: checkboxes,
    options,
    $input: checkboxes[0],
  }
}

function buildSelectRule(labelEl, label, required, select) {
  const options = Array.from(select.querySelectorAll("option"))
  return {
    label,
    $label: labelEl,
    required,
    type: enums.FIELD_TYPE.SELECT,
    $input: select,
    options: options
      .map((option) => option.textContent?.trim() ?? "")
      .filter(
        (text) =>
          !["", "--", "please select", "select", "select one"].includes(
            text.toLowerCase(),
          ),
      ),
  }
}

function findInputInGroup(formGroup) {
  const select = formGroup.querySelector("select")
  if (select) return select

  const textarea = formGroup.querySelector("textarea")
  if (textarea) return textarea

  return (
    formGroup.querySelector(
      'input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="submit"]):not([type="button"]):not([type="search"]):not(.iti__search-input)',
    ) || null
  )
}

function getLabelText(labelEl) {
  let text
  const adaLabel = labelEl.querySelector("span.ada-label-text")
  if (adaLabel) {
    const clone = adaLabel.cloneNode(true)
    const small = clone.querySelector("small")
    if (small) small.remove()
    text = clone.textContent || ""
  } else {
    const clone = labelEl.cloneNode(true)
    const unique = clone.querySelector(".ada-unique-content")
    if (unique) unique.remove()
    const small = clone.querySelector("small")
    if (small) small.remove()
    text = clone.textContent || ""
  }
  return cleanLabelText(text)
}

function cleanLabelText(text) {
  return text
    .replace(/\(required\)/gi, "")
    .replace(/[*\uff0a]\s*$/, "")
    .replace(/\s+/g, " ")
    .trim()
}

function isLabelRequired(labelEl) {
  if (labelEl.querySelector("small.question-label-required")) return true

  const text = labelEl.textContent || ""
  if (/\(required\)/i.test(text) || /[*\uff0a]/.test(text)) return true

  const forId = labelEl.getAttribute("for")
  if (forId) {
    const input = document.getElementById(forId)
    if (input && input.hasAttribute("required")) return true
  }

  return false
}

function dedupeRules(rules) {
  const seen = new Set()
  return rules.filter((rule) => {
    const input = rule.$input
    const keyPart =
      input?.id || input?.getAttribute("name") || rule.label
    const key = `${rule.type}:${keyPart}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

async function getFormSnapshot() {
  const snapshot = {}
  const rules = await extractRules()

  for (const rule of rules) {
    if (rule.type === enums.FIELD_TYPE.CHECKBOX) {
      const checked = rule.$checkboxs
        .map((checkbox, index) =>
          checkbox.checked ? rule.options[index] : "",
        )
        .filter(Boolean)
      snapshot[rule.label] = checked.join(", ")
    } else if (rule.type === enums.FIELD_TYPE.SELECT) {
      if (rule.label === "Phone Country Code") {
        const input = rule.$input
        const iti = input.closest(".iti")
        const selected = iti?.querySelector(
          'li.iti__country[aria-selected="true"], li.iti__country.iti__active',
        )
        snapshot[rule.label] = selected
          ? formatCountryOptionLabel(selected)
          : input.getAttribute("aria-label")?.match(/selected\s+(.+)$/i)?.[1] ||
            ""
      } else {
        const select = rule.$input
        snapshot[rule.label] =
          select.options[select.selectedIndex]?.textContent?.trim() || ""
      }
    } else {
      snapshot[rule.label] = rule.$input.value || ""
    }
  }

  return snapshot
}

export { extractRules, getFormSnapshot }
