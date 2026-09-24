// @ts-nocheck
/**
 * Kula — form rule extraction and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as delay from "../../../utils/delay.js"
import * as phoneCountryCode from "./phone-country-code.ts"

function normalizeWhitespace(text) {
  return (text || "").replace(/\s+/g, " ").trim()
}

function isGenericLabel(text) {
  const lower = normalizeWhitespace(text).toLowerCase()
  return (
    !lower ||
    /^(yes|no|select|select\.{0,3}|upload file|add|input|choose|option)$/i.test(
      lower,
    )
  )
}

function labelFromAriaLabelledBy(element) {
  const ids = (element.getAttribute("aria-labelledby") || "")
    .split(/\s+/)
    .filter(Boolean)
  if (ids.length === 0) return ""
  const parts = ids
    .map((id) =>
      normalizeWhitespace(document.getElementById(id)?.textContent),
    )
    .filter((text) => text && !isGenericLabel(text))
  return normalizeWhitespace(parts.join(" "))
}

function isAddressLabel(label) {
  return /^address$/i.test(label.trim())
}

export const KULA_MONTH_YEAR_DATE_DESCRIPTION =
  "Return month and year only in MMM YYYY format, for example: Jul 2026. Do not include a day."

function isKulaDateField(input) {
  return (
    input.classList.contains("kula-date-field-input-trigger") ||
    input.closest(".kula-date-field-shell") !== null ||
    input.closest(".react-datepicker-wrapper") !== null
  )
}

function getDateFieldDescription(label, input) {
  if (
    isKulaDateField(input) &&
    /^(start date|end date|graduation date)$/i.test(label.trim())
  ) {
    return KULA_MONTH_YEAR_DATE_DESCRIPTION
  }
}

function isRequired(element) {
  if (
    element.hasAttribute("required") ||
    element.getAttribute("aria-required") === "true"
  ) {
    return true
  }

  const formControl = element.closest(
    ".chakra-form-control, [class*='form-control']",
  )
  if (formControl) {
    const label = formControl.querySelector("label, p.chakra-text")
    if (label && /\*/.test(label.textContent || "")) return true
  }

  const testIdContainer = element.closest("[data-test-id]")
  if (testIdContainer) {
    const label = testIdContainer.querySelector("p.chakra-text, p")
    if (label && /\*/.test(label.textContent || "")) return true
  }

  return false
}

function stripOptionNoise(text) {
  return text
    .replace(
      /\s*(No options available|Add and select\s*["'""][^"'"]*["'""]|Add and select\s*"[^"]*"|Type to search\.{0,3})$/i,
      "",
    )
    .trim()
}

function getFormControlLabel(element, kind = "text") {
  const control = element.closest(
    ".chakra-form-control, [class*='form-control']",
  )
  if (!control) return ""

  const labelNode = control.querySelector("label, p.chakra-text")
  if (labelNode) {
    const clone = labelNode.cloneNode(true)
    clone.querySelectorAll('[aria-hidden="true"]').forEach((node) => node.remove())
    const text = normalizeWhitespace(clone.textContent)
      .replace(/\*+$/, "")
      .trim()
    if (text && !isGenericLabel(text)) return text
  }

  let text = normalizeWhitespace(control.textContent)
  if (!text) return ""

  text = stripOptionNoise(text)
  if (kind === "radio") {
    text = text.replace(/\*?\s*(yes\s*no)$/i, "")
  }
  if (kind === "select") {
    text = text.replace(/\s*select\.{0,3}$/i, "")
  }
  text = normalizeWhitespace(text).replace(/\*+$/g, "").trim()
  return isGenericLabel(text) ? "" : text
}

function getNearbyLabel(element) {
  const container = element.closest("fieldset, section, li, div")
  if (!container) return ""

  const ariaLabel = normalizeWhitespace(element.getAttribute("aria-label"))
  if (ariaLabel && !isGenericLabel(ariaLabel)) return ariaLabel

  const labelledBy = labelFromAriaLabelledBy(element)
  if (labelledBy) return labelledBy

  const formControlLabel = getFormControlLabel(element)
  if (formControlLabel) return formControlLabel

  const legend = container.querySelector("legend")
  if (legend) {
    const legendText = normalizeWhitespace(legend.textContent)
    if (!isGenericLabel(legendText)) return legendText
  }

  const nearby = Array.from(
    container.querySelectorAll(
      "label, h1, h2, h3, h4, h5, h6, p, span, div",
    ),
  )
    .map((node) => normalizeWhitespace(node.textContent))
    .find(
      (text) => text.length > 3 && text.length < 180 && !isGenericLabel(text),
    )
  return nearby || ""
}

function getFieldLabel(element) {
  const id = element.id
  if (id) {
    const forLabel = document.querySelector(`label[for="${id}"]`)
    const forText = normalizeWhitespace(forLabel?.textContent)
    if (forText && !isGenericLabel(forText)) return forText
  }

  const ariaLabel = normalizeWhitespace(element.getAttribute("aria-label"))
  if (ariaLabel && !isGenericLabel(ariaLabel)) return ariaLabel

  const labelledBy = labelFromAriaLabelledBy(element)
  if (labelledBy) return labelledBy

  const wrappingLabel = element.closest("label")
  const wrappingText = normalizeWhitespace(wrappingLabel?.textContent)
  if (wrappingText && !isGenericLabel(wrappingText)) return wrappingText

  const container = element.closest("div, li, fieldset, section")
  const nestedLabel = container?.querySelector("label")
  const nestedText = normalizeWhitespace(nestedLabel?.textContent)
  return nestedText && !isGenericLabel(nestedText)
    ? nestedText
    : getNearbyLabel(element)
}

function isHidden(element) {
  const style = getComputedStyle(element)
  return (
    style.display === "none" ||
    style.visibility === "hidden" ||
    element.getClientRects().length === 0
  )
}

async function extractReactSelectOptions(input) {
  input.focus()
  await delay.delay(100)
  input.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "ArrowDown",
      keyCode: 40,
      bubbles: true,
    }),
  )
  await delay.delay(300)

  const container = input.closest('[class*="-container"]')
  let menu = container?.querySelector('[class*="-menu"]')
  if (!menu) {
    menu = document.querySelector('[class*="-menu"]')
  }

  const options = []
  if (menu) {
    menu.querySelectorAll('[class*="-option"]').forEach((option) => {
      const text = normalizeWhitespace(option.textContent)
      if (text) options.push(text)
    })
  }

  input.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "Escape",
      keyCode: 27,
      bubbles: true,
    }),
  )
  await delay.delay(100)
  return options
}

function isInsideEducationOrExperience(element) {
  return !!element.closest(
    'div[data-test-id="education"], div[data-test-id="experience"]',
  )
}

async function extractRulesFromRoot(
  root,
  seenKeys = new Set(),
  skipEducationExperience = false,
) {
  const rules = []
  const fields = Array.from(
    root.querySelectorAll("input, textarea, select"),
  ).filter(
    (element) =>
      !(
        (element.tagName.toLowerCase() === "textarea" &&
          element.getAttribute("name") === "g-recaptcha-response") ||
        element.type === "hidden" ||
        (skipEducationExperience && isInsideEducationOrExperience(element))
      ) && !isHidden(element),
  )

  for (const element of fields) {
    const label = getFieldLabel(element)
    const dedupeKey = `${label}::${element.getAttribute("name") || element.id || element.tagName}`
    if (seenKeys.has(dedupeKey)) continue

    const required = isRequired(element)

    if (element.tagName.toLowerCase() === "textarea") {
      rules.push({
        type: enums.FIELD_TYPE.TEXT,
        label: label.replace(/\*/g, "").trim(),
        required,
        $input: element,
        $label: null,
      })
      seenKeys.add(dedupeKey)
      continue
    }

    if (element.tagName.toLowerCase() === "select") {
      const options = Array.from(element.options)
        .map((option) => normalizeWhitespace(option.textContent))
        .filter(Boolean)
      rules.push({
        type: enums.FIELD_TYPE.SELECT,
        label: label.replace(/\*/g, "").trim(),
        required,
        $input: element,
        $label: null,
        options,
      })
      seenKeys.add(dedupeKey)
      continue
    }

    const input = element
    const inputType = (input.type || "text").toLowerCase()
    if (inputType === "file") continue

    const phoneCountryButton =
      phoneCountryCode.getKulaPhoneCountryButton(input)
    if (phoneCountryButton) {
      const phoneCountryKey = `kula-phone-country::${input.id}`
      if (!seenKeys.has(phoneCountryKey)) {
        rules.push({
          type: enums.FIELD_TYPE.SELECT,
          label: phoneCountryCode.KULA_PHONE_COUNTRY_CODE_LABEL,
          required,
          $input: phoneCountryButton,
          $label: null,
          options:
            await phoneCountryCode.extractKulaPhoneCountryOptions(
              phoneCountryButton,
            ),
        })
        seenKeys.add(phoneCountryKey)
      }
      rules.push({
        type: enums.FIELD_TYPE.TEXT,
        label: phoneCountryCode.KULA_PHONE_LABEL,
        required,
        $input: input,
        $label: null,
        description: phoneCountryCode.KULA_LOCAL_PHONE_DESCRIPTION,
      })
      seenKeys.add(dedupeKey)
      continue
    }

    if (inputType === "radio") {
      const name = input.name
      if (!name) continue

      const radios = Array.from(
        document.querySelectorAll(`input[type="radio"][name="${name}"]`),
      )
      const options = radios
        .map((radio) =>
          normalizeWhitespace(
            radio.closest("label")?.textContent || radio.value || "",
          ),
        )
        .filter(Boolean)
      const radioParent = input.closest(
        "fieldset, [role='radiogroup'], div, section",
      )
      const legendText = normalizeWhitespace(
        radioParent?.querySelector(
          "legend, h1, h2, h3, h4, h5, h6, [data-testid*='question'], [class*='question']",
        )?.textContent,
      )
      const controlLabel = getFormControlLabel(input, "radio")
      const nearbyLabel = getNearbyLabel(input)
      let questionLabel = normalizeWhitespace(
        legendText || controlLabel || nearbyLabel || label,
      )
      if (isGenericLabel(questionLabel)) {
        const fallback = normalizeWhitespace(
          radioParent?.previousElementSibling?.textContent ||
            radioParent?.parentElement?.querySelector("label, p, h3, h4")
              ?.textContent,
        )
        if (fallback && !isGenericLabel(fallback)) {
          questionLabel = fallback
        }
      }

      const radioKey = `radio::${name}`
      if (!seenKeys.has(radioKey)) {
        rules.push({
          type: enums.FIELD_TYPE.RADIOGROUP,
          label: questionLabel.replace(/\*/g, "").trim() || name,
          required,
          $input: input,
          $radioParent: radioParent,
          $label: null,
          options,
        })
        seenKeys.add(radioKey)
      }
      continue
    }

    if (inputType === "checkbox") {
      const group = input.closest("fieldset, div, section")
      const checkboxes = Array.from(
        group?.querySelectorAll('input[type="checkbox"]') || [input],
      )
      const options = checkboxes
        .map((checkbox) =>
          normalizeWhitespace(
            checkbox.closest("label")?.textContent ||
              checkbox.getAttribute("aria-label") ||
              "",
          ),
        )
        .filter(Boolean)
      const checkboxKey = `checkbox::${input.name || label}`
      if (!seenKeys.has(checkboxKey)) {
        rules.push({
          type: enums.FIELD_TYPE.CHECKBOX,
          label: label.replace(/\*/g, "").trim() || "Checkbox",
          required,
          $checkboxs: checkboxes,
          $input: checkboxes[0],
          $label: null,
          options,
        })
        seenKeys.add(checkboxKey)
      }
      continue
    }

    if (inputType === "text") {
      const placeholder = normalizeWhitespace(
        input.getAttribute("placeholder"),
      )
      if (placeholder && /search/i.test(placeholder)) {
        const searchLabel =
          label.replace(/\*/g, "").trim() ||
          placeholder ||
          input.name ||
          "Search"
        const searchKey = `search::${searchLabel}`
        if (!seenKeys.has(searchKey)) {
          rules.push({
            type: enums.FIELD_TYPE.SEARCH,
            label: searchLabel,
            required,
            $input: input,
            $label: null,
            ...(isAddressLabel(searchLabel) && {
              description:
                "Format: City, State/Province, Country (e.g. Angus, Ontario, Canada)",
            }),
          })
          seenKeys.add(searchKey)
        }
        continue
      }
    }

    if (
      input.id.includes("react-select") ||
      input.getAttribute("role") === "combobox"
    ) {
      const formControl = input.closest(
        ".chakra-form-control, [class*='form-control']",
      )
      let testIdLabel = ""
      const testIdContainer = input.closest("[data-test-id]")
      if (testIdContainer) {
        const paragraph = testIdContainer.querySelector("p.chakra-text, p")
        if (paragraph) {
          const clone = paragraph.cloneNode(true)
          clone.querySelectorAll("span, div").forEach((node) => node.remove())
          testIdLabel = stripOptionNoise(
            normalizeWhitespace(clone.textContent),
          )
        }
      }

      const controlLabel = normalizeWhitespace(
        formControl?.querySelector("label")?.textContent,
      )
      const ariaLabel = normalizeWhitespace(input.getAttribute("aria-label"))
      const labelledBy = labelFromAriaLabelledBy(input)
      const selectControlLabel = getFormControlLabel(input, "select")
      let resolvedLabel = ""

      if (testIdLabel && !isGenericLabel(testIdLabel)) {
        resolvedLabel = testIdLabel.replace(/\*/g, "").trim()
      } else if (controlLabel && !isGenericLabel(controlLabel)) {
        resolvedLabel = controlLabel.replace(/\*/g, "").trim()
      } else if (ariaLabel && !isGenericLabel(ariaLabel)) {
        resolvedLabel = ariaLabel.replace(/\*/g, "").trim()
      } else if (labelledBy && !isGenericLabel(labelledBy)) {
        resolvedLabel = labelledBy.replace(/\*/g, "").trim()
      } else if (selectControlLabel && !isGenericLabel(selectControlLabel)) {
        resolvedLabel = selectControlLabel.replace(/\*/g, "").trim()
      } else if (label && !isGenericLabel(label)) {
        resolvedLabel = label.replace(/\*/g, "").trim()
      }

      if (!resolvedLabel) {
        const fallback = stripOptionNoise(
          normalizeWhitespace(
            input
              .closest("div, li, section")
              ?.querySelector("label, p, h3, h4")?.textContent,
          ),
        )
        if (fallback && !isGenericLabel(fallback)) {
          resolvedLabel = fallback.replace(/\*/g, "").trim()
        }
      }

      if (!resolvedLabel) {
        const nearby = stripOptionNoise(getNearbyLabel(input))
        resolvedLabel =
          nearby && !isGenericLabel(nearby) ? nearby : input.name || "Select"
      }

      let selectRequired = isRequired(input)
      if (resolvedLabel && /preferred location/i.test(resolvedLabel)) {
        selectRequired = true
      }

      const isReadonly =
        input.getAttribute("aria-readonly") === "true" ||
        input.inputMode === "none"

      if (isReadonly) {
        const selectKey = `react-select::${resolvedLabel || input.id.split("-input")[0]}`
        if (!seenKeys.has(selectKey)) {
          const options = await extractReactSelectOptions(input)
          rules.push({
            type: enums.FIELD_TYPE.SELECT,
            label: resolvedLabel,
            required: selectRequired,
            $input: input,
            $label: null,
            options,
          })
          seenKeys.add(selectKey)
        }
      } else {
        const searchKey = `react-search::${resolvedLabel || input.id.split("-input")[0]}`
        if (!seenKeys.has(searchKey)) {
          rules.push({
            type: enums.FIELD_TYPE.SEARCH,
            label: resolvedLabel,
            required: selectRequired,
            $input: input,
            $label: null,
            ...(isAddressLabel(resolvedLabel) && {
              description:
                "Format: City, State/Province, Country (e.g. Angus, Ontario, Canada)",
            }),
          })
          seenKeys.add(searchKey)
        }
      }
      continue
    }

    const textLabel =
      label.replace(/\*/g, "").trim() || input.name || "Text"
    const dateDescription = getDateFieldDescription(textLabel, input)
    if (dateDescription) {
      rules.push({
        type: enums.FIELD_TYPE.DATE,
        label: textLabel,
        required,
        $input: input,
        $label: null,
        description: dateDescription,
      })
    } else {
      rules.push({
        type: enums.FIELD_TYPE.TEXT,
        label: textLabel,
        required,
        $input: input,
        $label: null,
      })
    }
    seenKeys.add(dedupeKey)
  }

  return rules
}

export async function getEducationRules() {
  const sections = Array.from(
    document.querySelectorAll('div[data-test-id="education"]'),
  )
  const rules = []
  for (const section of sections) {
    const children = await extractRulesFromRoot(section)
    rules.push({
      type: enums.FIELD_TYPE.EDUCATION,
      label: "Education",
      required: false,
      children,
      options: children.map((child) => ({
        label: child.label,
        type: child.type,
        options: child.options,
        ...(child.description ? { description: child.description } : {}),
      })),
    })
  }
  return rules
}

export async function getExperienceRules() {
  const sections = Array.from(
    document.querySelectorAll('div[data-test-id="experience"]'),
  )
  const rules = []
  for (const section of sections) {
    const children = await extractRulesFromRoot(section)
    rules.push({
      type: enums.FIELD_TYPE.EMPLOYMENT,
      label: "Experience",
      required: false,
      children,
      options: children.map((child) => ({
        label: child.label,
        type: child.type,
        options: child.options,
        ...(child.description ? { description: child.description } : {}),
      })),
    })
  }
  return rules
}

export async function getRules() {
  const seenKeys = new Set()
  const rules = await extractRulesFromRoot(document.body, seenKeys, true)

  const educationRules = await getEducationRules()
  if (educationRules.length > 0) {
    rules.push(educationRules[0])
  }

  const experienceRules = await getExperienceRules()
  if (experienceRules.length > 0) {
    rules.push(experienceRules[0])
  }

  return rules
}

function snapshotRoot(root, skipEducationExperience = false) {
  const snapshot = {}
  const seenLabels = new Set()
  const cleanLabel = (label) => label.replace(/\*/g, "").trim()

  const fields = Array.from(
    root.querySelectorAll("input, textarea, select"),
  ).filter(
    (element) =>
      !(
        element.type === "hidden" ||
        (skipEducationExperience && isInsideEducationOrExperience(element))
      ) && !isHidden(element),
  )

  for (const element of fields) {
    if (element.tagName.toLowerCase() === "select") {
      const select = element
      const label = cleanLabel(getFieldLabel(select))
      if (!label || seenLabels.has(label)) continue
      seenLabels.add(label)
      snapshot[label] =
        select.options[select.selectedIndex]?.textContent?.trim() ?? ""
      continue
    }

    const input = element
    const inputType = (input.type || "text").toLowerCase()
    if (inputType === "file") continue

    const phoneContainer = phoneCountryCode.getKulaPhoneContainer(input)
    if (phoneContainer) {
      const countryButton = phoneCountryCode.getKulaPhoneCountryButton(input)
      if (
        countryButton &&
        !seenLabels.has(phoneCountryCode.KULA_PHONE_COUNTRY_CODE_LABEL)
      ) {
        seenLabels.add(phoneCountryCode.KULA_PHONE_COUNTRY_CODE_LABEL)
        snapshot[phoneCountryCode.KULA_PHONE_COUNTRY_CODE_LABEL] =
          phoneCountryCode.getKulaSelectedPhoneCountry(countryButton)
      }
      if (!seenLabels.has(phoneCountryCode.KULA_PHONE_LABEL)) {
        seenLabels.add(phoneCountryCode.KULA_PHONE_LABEL)
        snapshot[phoneCountryCode.KULA_PHONE_LABEL] = input.value.trim()
      }
      continue
    }

    if (
      input.id.includes("react-select") ||
      input.getAttribute("role") === "combobox"
    ) {
      const container = input.closest('[class*="-container"]')
      const singleValue = container?.querySelector(
        '[class*="-singleValue"], [class*="singleValue"], [class*="single-value"]',
      )
      const label = cleanLabel(getFieldLabel(input))
      if (!label || seenLabels.has(label)) continue
      seenLabels.add(label)
      snapshot[label] = singleValue?.textContent?.trim() ?? ""
      continue
    }

    if (inputType === "radio") {
      const name = input.name
      if (!name) continue
      const radioKey = `radio::${name}`
      if (seenLabels.has(radioKey)) continue
      seenLabels.add(radioKey)

      const checked = root.querySelector(
        `input[type="radio"][name="${CSS.escape(name)}"]:checked`,
      )
      const label = cleanLabel(getFieldLabel(input))
      if (!label) continue
      snapshot[label] = (checked?.closest("label")?.textContent ?? "")
        .replace(/\s+/g, " ")
        .trim()
      continue
    }

    if (inputType === "checkbox") {
      const label = cleanLabel(getFieldLabel(input))
      const checkboxKey = `checkbox::${input.name || label}`
      if (!label || seenLabels.has(checkboxKey)) continue
      seenLabels.add(checkboxKey)

      const group = input.closest("fieldset, div, section")
      const checkboxes = Array.from(
        group?.querySelectorAll('input[type="checkbox"]') ?? [input],
      )
      snapshot[label] = checkboxes
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) =>
          (
            checkbox.closest("label")?.textContent ||
            checkbox.getAttribute("aria-label") ||
            ""
          )
            .replace(/\s+/g, " ")
            .trim(),
        )
      continue
    }

    const label = cleanLabel(getFieldLabel(input))
    if (!label || seenLabels.has(label)) continue
    seenLabels.add(label)
    snapshot[label] = input.value.trim()
  }

  return snapshot
}

export function getFormSnapshot() {
  const regular = snapshotRoot(document.body, true)
  const educationSections = Array.from(
    document.querySelectorAll('div[data-test-id="education"]'),
  )
  const education = educationSections.map((section) =>
    snapshotRoot(section, false),
  )
  const experienceSections = Array.from(
    document.querySelectorAll('div[data-test-id="experience"]'),
  )
  const experience = experienceSections.map((section) =>
    snapshotRoot(section, false),
  )

  return {
    url: window.location.href,
    ...regular,
    ...(education.length > 0 ? { education } : {}),
    ...(experience.length > 0 ? { experience } : {}),
  }
}
