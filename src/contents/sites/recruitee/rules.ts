// @ts-nocheck
/**
 * Recruitee — form rule extraction and autofill/submit snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as fiber from "./fiber.ts"
import * as recruiteePhone from "./phone-country-code.ts"

async function extractRules() {
  const rules = []
  const applyButton = xpath.getFirstOrderedNodeSafe(
    './/button[@data-cy="apply-button-nav" or @data-cy="apply-button"]',
    document.body,
  )
  if (applyButton) {
    applyButton.click()
    await delay.delay(500)
  }

  const sections = xpath.getOrderedNodesSafe(
    ".//fieldset[not(ancestor::fieldset)]/div | .//fieldset[not(ancestor::fieldset)]/section",
    document.body,
  )

  for (const section of sections) {
    const labeledSections = []
    const seenLabels = /* @__PURE__ */ new Set()
    let topLabel = xpath.getFirstOrderedNodeSafe("./label[@for]", section)

    if (topLabel) {
      const topDiv = xpath.getFirstOrderedNodeSafe("./div", section)
      if (topDiv) {
        labeledSections.push({ labelElement: topLabel, section: topDiv })
      }
      seenLabels.add(topLabel)
    }

    const nestedBlocks = xpath.getOrderedNodesSafe("./div | .//section", section)
    if (nestedBlocks.length > 0) {
      for (const block of nestedBlocks) {
        const choiceFieldset = xpath.getFirstOrderedNodeSafe(
          './/fieldset[.//input[@type="radio"] or .//input[@type="checkbox"]][not(.//fieldset[.//input[@type="radio"] or .//input[@type="checkbox"]])]',
          block,
        )
        if (choiceFieldset) {
          topLabel = xpath.getFirstOrderedNodeSafe("./legend", choiceFieldset)
          if (topLabel && !seenLabels.has(topLabel)) {
            labeledSections.push({ labelElement: topLabel, section: block })
            seenLabels.add(topLabel)
          }
        } else {
          const labels = xpath.getOrderedNodesSafe(".//label[@for]", block)
          for (const label of labels) {
            if (seenLabels.has(label)) continue
            const wrapper = label.closest("div")
            if (wrapper && block.contains(wrapper)) {
              labeledSections.push({
                labelElement: label,
                section: wrapper,
              })
              seenLabels.add(label)
            }
          }
        }
      }
    }

    for (const { labelElement, section: fieldSection } of labeledSections) {
      let required = false
      const requiredMarker = xpath.getFirstOrderedNodeSafe(
        './/span[contains(@title, "This field is required and can not be left empty.")]',
        labelElement,
      )
      if (requiredMarker) required = true

      const labelText =
        labelElement.textContent?.trim().replace("*", "") || ""
      if (labelText.trim() === "") continue

      const fieldRules = await getRule(
        fieldSection,
        labelText.trim(),
        required,
        labelElement,
      )
      if (fieldRules) rules.push(...fieldRules)
    }
  }

  return rules
}

async function getRule(section, label, required, labelElement) {
  const radios = xpath.getOrderedNodesSafe('.//input[@type="radio"]', section)
  if (radios.length > 0) {
    const options = radios
      .map((radio) => {
        const forLabel = section.querySelector(`label[for="${radio.id}"]`)
        const span = forLabel?.querySelector("span:last-child")
        return span?.textContent?.trim() || ""
      })
      .filter(Boolean)
    return options.length > 0
      ? [
          {
            type: enums.FIELD_TYPE.RADIOGROUP,
            label,
            required,
            options,
            $input: radios[0],
            $label: labelElement,
            $radioParent: section,
          },
        ]
      : null
  }

  const checkboxes = xpath.getOrderedNodesSafe(
    './/input[@type="checkbox"]',
    section,
  )
  if (checkboxes.length > 0) {
    const options = checkboxes
      .map((checkbox) => {
        const forLabel = section.querySelector(`label[for="${checkbox.id}"]`)
        const span = forLabel?.querySelector("span:last-child")
        return span?.textContent?.trim() || ""
      })
      .filter(Boolean)
    if (options.length > 0) {
      return [
        {
          type: enums.FIELD_TYPE.CHECKBOX,
          label,
          required,
          $checkboxs: checkboxes,
          $input: checkboxes[0],
          $label: labelElement,
          options,
        },
      ]
    }
  }

  const input = xpath.getFirstOrderedNodeSafe(
    './/input[not(@type="hidden") and not(@type="radio") and not(@type="checkbox") and not(@type="file")] | .//textarea',
    section,
  )
  if (!input) return null

  const phoneRules = await buildPhoneRules(input, label, required, labelElement)
  return (
    phoneRules || [
      {
        label,
        required,
        type: enums.FIELD_TYPE.TEXT,
        $input: input,
        $label: labelElement,
      },
    ]
  )
}

async function buildPhoneRules(input, label, required, labelElement) {
  const phoneInput = input
  if (
    String(phoneInput.type || "").toLowerCase() !== "tel" ||
    phoneInput.name !== "candidate.phone" ||
    !phoneInput.id
  ) {
    return null
  }

  const phoneRoot = phoneInput.closest(".PhoneInput")
  if (!phoneRoot) return null

  const countryButtonId = `country-select-${phoneInput.id}`
  const countryButton = phoneRoot.querySelector(
    `#${escapeCssSelector(countryButtonId)}`,
  )
  if (
    !countryButton ||
    countryButton.id !== countryButtonId ||
    countryButton.tagName.toUpperCase() !== "BUTTON"
  ) {
    return null
  }

  let countries = []
  try {
    const result = await fiber.getRecruiteePhoneCountriesViaFiber(countryButton)
    if (result.success && Array.isArray(result.options)) {
      countries = result.options
    }
  } catch (error) {
    console.warn("[recruitee] Failed to read phone countries via Fiber", error)
  }

  const phoneState = {}
  return [
    {
      type: enums.FIELD_TYPE.SELECT,
      label: recruiteePhone.RECRUITEE_PHONE_COUNTRY_CODE_LABEL,
      required,
      options: countries.map(recruiteePhone.formatRecruiteePhoneCountryOption),
      $input: countryButton,
      $label: labelElement,
      __recruiteePhoneField: "country",
      __recruiteePhoneCountries: countries,
      __recruiteePhoneState: phoneState,
    },
    {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required,
      description: recruiteePhone.RECRUITEE_LOCAL_PHONE_DESCRIPTION,
      $input: phoneInput,
      $label: labelElement,
      __recruiteePhoneField: "number",
      __recruiteePhoneState: phoneState,
    },
  ]
}

function escapeCssSelector(value) {
  return typeof CSS !== "undefined" && typeof CSS.escape === "function"
    ? CSS.escape(value)
    : value.replace(/([ #;?%&,.+*~':"!^$[\]()=>|/@])/g, "\\$1")
}

function getFormSnapshot(rules) {
  const snapshot = {}
  const dialCodeByState = /* @__PURE__ */ new Map()

  for (const rule of rules) {
    const label = String(rule?.label || "").trim()
    if (
      !label ||
      /captcha/i.test(label) ||
      rule.__machineOnly ||
      rule.type === enums.FIELD_TYPE.EDUCATION ||
      rule.type === enums.FIELD_TYPE.EMPLOYMENT
    ) {
      continue
    }

    try {
      const phoneRule = rule
      if (phoneRule.__recruiteePhoneField) {
        if (!isPhoneRuleSnapshotVisible(phoneRule)) continue
        snapshot[label] = readPhoneRuleSnapshot(phoneRule, dialCodeByState)
        continue
      }

      const choiceInputs = getChoiceInputs(rule)
      if (choiceInputs) {
        snapshot[label] = choiceInputs
          .filter(isSnapshotVisibleInput)
          .filter((input) => input.checked)
          .map(readChoiceLabel)
          .filter(Boolean)
          .join(", ")
        continue
      }

      const input = rule.$input
      if (!isSnapshotVisibleInput(input)) continue
      snapshot[label] = readInputValue(input)
    } catch (error) {
      console.warn(`[recruitee] Failed to read snapshot field "${label}"`, error)
    }
  }

  return snapshot
}

function readPhoneRuleSnapshot(rule, dialCodeByState) {
  if (rule.__recruiteePhoneField === "country") {
    const { accessibleCountry, matchedCountry } = resolveAccessibleCountry(
      rule.$input,
      rule.__recruiteePhoneCountries || [],
    )
    const dialCode = matchedCountry
      ? recruiteePhone.getRecruiteeDialCode(matchedCountry.dialCode)
      : readResolvedDialCode(rule.__recruiteePhoneState)
    if (rule.__recruiteePhoneState && dialCode) {
      dialCodeByState.set(rule.__recruiteePhoneState, dialCode)
    }
    return matchedCountry
      ? recruiteePhone.formatRecruiteePhoneCountryOption(matchedCountry)
      : accessibleCountry
  }

  const value = String(rule.$input?.value || "")
  const dialCode = rule.__recruiteePhoneState
    ? dialCodeByState.get(rule.__recruiteePhoneState)
    : undefined
  return dialCode && hasDialPrefix(value, dialCode)
    ? recruiteePhone.readRecruiteeNationalNumber(value, dialCode)
    : value
}

function readResolvedDialCode(phoneState) {
  return phoneState?.explicitCountryAttempted &&
    phoneState.explicitCountryResolved &&
    phoneState.dialCode
    ? recruiteePhone.getRecruiteeDialCode(phoneState.dialCode)
    : ""
}

function resolveAccessibleCountry(button, countries) {
  if (!button) return { accessibleCountry: "", matchedCountry: null }

  const candidates = [
    button.getAttribute?.("aria-label"),
    button.getAttribute?.("title"),
    button.textContent,
  ]
    .map(cleanCountryAccessibleText)
    .filter(Boolean)

  for (const candidate of candidates) {
    const matched = matchCountryOption(candidate, countries)
    if (matched) {
      return { accessibleCountry: candidate, matchedCountry: matched }
    }
  }

  return { accessibleCountry: candidates[0] || "", matchedCountry: null }
}

function cleanCountryAccessibleText(value) {
  return sanitizeWhitespace(value).replace(
    /^Select country calling code:\s*/i,
    "",
  )
}

function sanitizeWhitespace(value) {
  return String(value || "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function matchCountryOption(text, countries) {
  const normalized = recruiteePhone.normalizeRecruiteePhoneText(text)
  if (!normalized) return null

  return (
    countries.find(
      (option) =>
        recruiteePhone.normalizeRecruiteePhoneText(option.countryName) ===
          normalized ||
        recruiteePhone.normalizeRecruiteePhoneText(option.iso2) === normalized,
    ) ||
    countries.find((option) => {
      const countryName = recruiteePhone.normalizeRecruiteePhoneText(
        option.countryName,
      )
      return !!(
        countryName &&
        normalized === `${countryName}${countryName}`
      )
    }) ||
    recruiteePhone.findRecruiteePhoneCountryOption(text, countries)
  )
}

function hasDialPrefix(value, dialCode) {
  return RegExp(`^\\s*\\+\\s*${dialCode}`).test(value)
}

function getChoiceInputs(rule) {
  if (rule.type === enums.FIELD_TYPE.CHECKBOX) {
    return Array.from(rule.$checkboxs || [])
  }
  if (rule.type === enums.FIELD_TYPE.RADIOGROUP) {
    const parent = rule.$radioParent
    const radios = parent?.querySelectorAll?.('input[type="radio"]') || []
    return Array.from(radios)
  }
  return null
}

function isSnapshotVisibleInput(input) {
  if (!input) return false
  const type = String(input.type || "").toLowerCase()
  return (
    !["hidden", "file", "submit", "button", "image", "reset"].includes(type) &&
    isElementVisible(input)
  )
}

function isPhoneRuleSnapshotVisible(rule) {
  const input = rule.$input
  return rule.__recruiteePhoneField === "country"
    ? String(input?.type || "").toLowerCase() === "button" &&
        isElementVisible(input)
    : isSnapshotVisibleInput(input)
}

function isElementVisible(element) {
  return !!(
    element &&
    !element.hidden &&
    !element.closest?.('[hidden], [aria-hidden="true"]') &&
    !hasHiddenComputedStyle(element)
  )
}

function hasHiddenComputedStyle(element) {
  const view = element.ownerDocument?.defaultView
  const getStyle = view?.getComputedStyle
    ? (node) => view.getComputedStyle(node)
    : typeof window !== "undefined" &&
        typeof window.getComputedStyle === "function"
      ? (node) => window.getComputedStyle(node)
      : null

  if (!getStyle) return false

  let current = element
  while (current) {
    try {
      const style = getStyle(current)
      const display = String(style.display || "").toLowerCase()
      const visibility = String(style.visibility || "").toLowerCase()
      if (
        display === "none" ||
        visibility === "hidden" ||
        visibility === "collapse"
      ) {
        return true
      }
    } catch {
      // ignore style lookup failures
    }
    current = current.parentElement
  }

  return false
}

function readChoiceLabel(input) {
  return String(
    input.getAttribute("data-label") ||
      input.getAttribute("aria-label") ||
      input.labels?.[0]?.textContent ||
      input.nextElementSibling?.textContent ||
      input.value ||
      "",
  ).trim()
}

function readInputValue(input) {
  return input instanceof HTMLSelectElement
    ? String(input.selectedOptions?.[0]?.textContent || input.value || "").trim()
    : String(input.value || "")
}

export {
  extractRules,
  getFormSnapshot,
  getRule,
}
