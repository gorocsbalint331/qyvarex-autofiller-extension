// @ts-nocheck
/**
 * Zoho Recruit — form rule extraction and snapshot helpers.
 */

import * as enums from "../../../core/enums.js"

function extractDropdownOptions(dropdown, zcqaHint) {
  const dropButton = dropdown.querySelector("lyte-drop-button")
  if (dropButton) {
    dropButton.dispatchEvent(
      new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
    )
    dropButton.dispatchEvent(
      new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
    )
    dropButton.dispatchEvent(
      new MouseEvent("click", { bubbles: true, cancelable: true }),
    )
  }
  const options = []
  const items = document.querySelectorAll(
    `lyte-drop-item[data-zcqa*="${zcqaHint}"]`,
  )
  items.forEach((item) => {
    const text = item.textContent?.trim()
    if (text && text !== "-None-") options.push(text)
  })
  return options
}

function findVisibleDropdownSearchInput(dropdown) {
  const inputs = Array.from(dropdown.querySelectorAll("input[type='text']"))
  const visible =
    inputs.find((input) => {
      const hiddenAncestor = input.closest(
        "lyte-yield[style*='display: none'], .lyteDropdownHidden, .lyteSearchInput",
      )
      if (hiddenAncestor) return false
      const style = window.getComputedStyle(input)
      return style.display !== "none" && style.visibility !== "hidden"
    }) || null
  return visible || inputs[inputs.length - 1] || null
}

function resolveRuleInputElement(rule) {
  return rule?.$input instanceof HTMLElement
    ? rule.$input
    : Array.isArray(rule?.$input) && rule.$input[0] instanceof HTMLElement
      ? rule.$input[0]
      : Array.isArray(rule?.$checkboxs) &&
          rule.$checkboxs[0] instanceof HTMLElement
        ? rule.$checkboxs[0]
        : null
}

function normalizeLabelKey(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
}

function inferZohoSemanticType(rule) {
  const key = normalizeLabelKey(`${rule?.label || ""} ${rule?.name || ""}`)
  return rule?.isPhone || key.includes("mobile") || key.includes("phone")
    ? "contact.mobile"
    : key.includes("email")
      ? "contact.email"
      : key.includes("zip/postal code") ||
          key.includes("zip code") ||
          key.includes("postal code") ||
          key.includes("zip_code") ||
          /\bzip\b/.test(key)
        ? "address.zip"
        : key.includes("state/province") ||
            key.includes("state") ||
            key.includes("province") ||
            key.includes("etat")
          ? "address.state"
          : key.includes("city") || key.includes("ville")
            ? "address.city"
            : key.includes("country") || key.includes("pays")
              ? "address.country"
              : key.includes("street")
                ? "address.street"
                : ""
}

function annotateZohoRule(rule) {
  const input = resolveRuleInputElement(rule)
  const fieldRow =
    input?.closest(".crc-form-row, .crc-form-tabularrow") || null
  const clusterRoot =
    fieldRow?.closest(".wbf-doublewrapper, .wdb-doublewrapper") ||
    fieldRow?.closest(".crc-form-sec") ||
    fieldRow ||
    input
  return {
    ...rule,
    $fieldRow: fieldRow,
    __zohoClusterRoot: clusterRoot,
    __zohoSemanticType: inferZohoSemanticType(rule),
  }
}

export async function getRules() {
  const rules = []
  const rows = document.querySelectorAll(".crc-form-row")
  for (const row of rows) {
    const tabular = row.querySelector("rec-tabular-component")
    const addButton = row.querySelector("button.tabular-group-add")
    if (tabular && addButton) {
      row.getAttribute("aria-label") ||
        row.querySelector(".cw-section-title")?.textContent?.trim()
      let sectionType = "additional_info"
      const className = row.className.toLowerCase()
      if (className.includes("education")) {
        sectionType = "education"
        const educationRules = await extractTabularSectionRules(
          row,
          "Education",
        )
        if (educationRules) rules.push(...educationRules)
      } else if (className.includes("experience")) {
        sectionType = "workExperience"
        const experienceRules = await extractTabularSectionRules(
          row,
          "Experience",
        )
        if (experienceRules) rules.push(...experienceRules)
      }
      void sectionType
      continue
    }
    if (
      row.querySelector(".wbf-doublewrapper") ||
      row.querySelector(".wdb-doublewrapper") ||
      row.classList.contains("crc-form-sec")
    ) {
      continue
    }
    const labelEl = row.querySelector("label.crm-from-label")
    if (!labelEl) continue
    const labelText = labelEl.textContent?.replace("*", "").trim() || ""
    const required = !!row.querySelector(".crc-form-mandatory")
    if (
      row.querySelector("rec-captcha-component") ||
      /captcha/i.test(labelText)
    ) {
      continue
    }
    const component = row.querySelector(`crux-phone-component, crux-email-component, crux-text-component, 
       crux-number-component, crux-website-component, crux-picklist-component,
       crux-text-area-component, crux-radio-component, crux-inline-radio-component,
       rec-multi-radio-component, rec-multi-checkbox-component, rec-skills-component`)
    const fieldLabel =
      component?.getAttribute("cx-prop-label") || labelText
    const fieldName = component?.getAttribute("cx-prop-zcqa") || ""
    const radios = Array.from(
      row.querySelectorAll("input[type='radio']"),
    )
    if (radios.length > 0) {
      const lyteRadios = Array.from(
        row.querySelectorAll("lyte-radiobutton"),
      )
      if (lyteRadios.length > 0) {
        lyteRadios.forEach((lyteRadio) => {
          const input = lyteRadio.querySelector("input")
          const optionLabel = lyteRadio.getAttribute("lt-prop-label")
          if (input && optionLabel) {
            input.setAttribute("data-label", optionLabel)
          }
        })
      }
      rules.push({
        type: enums.FIELD_TYPE.RADIOGROUP,
        label: fieldLabel,
        name: fieldName,
        $input: component,
        $checkboxs: radios,
        $label: labelEl,
        required,
        options:
          lyteRadios.length > 0
            ? lyteRadios
                .map((lyteRadio) =>
                  lyteRadio.getAttribute("lt-prop-label"),
                )
                .filter(Boolean)
            : void 0,
      })
      continue
    }
    const checkboxes = Array.from(
      row.querySelectorAll("input[type='checkbox']"),
    )
    if (checkboxes.length > 0) {
      const lyteCheckboxes = Array.from(
        row.querySelectorAll("lyte-checkbox"),
      )
      if (lyteCheckboxes.length > 0) {
        lyteCheckboxes.forEach((lyteCheckbox) => {
          const input = lyteCheckbox.querySelector("input")
          const optionLabel = lyteCheckbox.getAttribute("lt-prop-label")
          if (input && optionLabel) {
            input.setAttribute("data-label", optionLabel)
          }
        })
      }
      rules.push({
        type: enums.FIELD_TYPE.MULTI_SELECT,
        label: fieldLabel,
        name: fieldName,
        $input: component,
        $checkboxs: checkboxes,
        $label: labelEl,
        required,
        options:
          lyteCheckboxes.length > 0
            ? lyteCheckboxes
                .map((lyteCheckbox) =>
                  lyteCheckbox.getAttribute("lt-prop-label"),
                )
                .filter(Boolean)
            : void 0,
      })
      continue
    }
    if (row.querySelector(".cnl-firstname-row")) {
      const nameParts = row.querySelectorAll(
        "crux-picklist-component, crux-text-component",
      )
      nameParts.forEach((part) => {
        const partLabel =
          part.getAttribute("cx-prop-label") || labelText
        const partName = part.getAttribute("cx-prop-zcqa") || ""
        if (part.tagName === "CRUX-PICKLIST-COMPONENT") {
          const dropdown = part.querySelector("lyte-dropdown")
          if (dropdown) {
            const options = extractDropdownOptions(dropdown, partLabel)
            rules.push({
              type: enums.FIELD_TYPE.SELECT,
              label: partLabel,
              name: partName,
              $input: dropdown,
              $label: labelEl,
              required: false,
              options,
            })
          }
        } else if (part.tagName === "CRUX-TEXT-COMPONENT") {
          const input = part.querySelector("lyte-input input")
          if (input) {
            rules.push({
              type: enums.FIELD_TYPE.TEXT,
              label: partLabel,
              name: partName,
              $input: input,
              $label: labelEl,
              required,
            })
          }
        }
      })
      continue
    }
    const dropdown = row.querySelector("lyte-dropdown")
    if (dropdown) {
      const phoneComponent = row.querySelector("crux-phone-component")
      if (phoneComponent) {
        const phoneInput =
          row.querySelector(".cxElementValue > lyte-input input") ||
          row.querySelector("lyte-input:not([is-search]) input")
        appendZohoPhoneRulesForTests(
          rules,
          dropdown,
          phoneInput,
          labelEl,
          fieldLabel,
          fieldName,
          required,
        )
      } else {
        const searchInput = findVisibleDropdownSearchInput(dropdown)
        if (searchInput) {
          rules.push({
            type: enums.FIELD_TYPE.TEXT,
            label: fieldLabel,
            name: fieldName,
            $input: searchInput,
            $label: labelEl,
            required,
          })
          continue
        }
        const dropButton = dropdown.querySelector("lyte-drop-button")
        if (dropButton) {
          dropButton.dispatchEvent(
            new MouseEvent("mousedown", {
              bubbles: true,
              cancelable: true,
            }),
          )
          dropButton.dispatchEvent(
            new MouseEvent("mouseup", {
              bubbles: true,
              cancelable: true,
            }),
          )
          dropButton.dispatchEvent(
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            }),
          )
        }
        const options = extractDropdownOptions(dropdown, fieldLabel)
        rules.push({
          type: enums.FIELD_TYPE.SELECT,
          label: fieldLabel,
          name: fieldName,
          $input: dropdown,
          $label: labelEl,
          required,
          options: options.length > 0 ? options : void 0,
        })
      }
      continue
    }
    const textarea = row.querySelector("textarea")
    if (textarea) {
      rules.push({
        type: enums.FIELD_TYPE.TEXT,
        label: fieldLabel,
        name: fieldName,
        $input: textarea,
        $label: labelEl,
        required,
      })
      continue
    }
    const skillInput = row.querySelector(
      "rec-skills-component input.skillset-input, skills-tag #addSkills",
    )
    if (skillInput) {
      rules.push({
        label: fieldLabel || "Skill Set",
        type: "SKILL_SET",
        $input: skillInput,
        required: required || !!row.querySelector(".crm-star"),
        name: skillInput.getAttribute("name") || "",
      })
      continue
    }
    const textInput = row.querySelector("lyte-input input")
    if (textInput) {
      const placeholder = textInput.getAttribute("placeholder")
      if (placeholder === "MM/DD/YYYY") {
        rules.push({
          type: enums.FIELD_TYPE.DATE,
          label: fieldLabel,
          name: fieldName,
          $input: textInput,
          $label: labelEl,
          required,
        })
      } else {
        rules.push({
          type: enums.FIELD_TYPE.TEXT,
          label: fieldLabel,
          name: fieldName,
          $input: textInput,
          $label: labelEl,
          required,
        })
      }
      continue
    }
  }
  return rules
    .filter(
      (rule) => rule.$input || rule.type === enums.FIELD_TYPE.SELECT,
    )
    .map((rule) => annotateZohoRule(rule))
}

export function appendZohoPhoneRulesForTests(
  rules,
  countryDropdown,
  phoneInput,
  labelEl,
  fieldLabel,
  fieldName,
  required,
) {
  rules.push({
    type: enums.FIELD_TYPE.SELECT,
    label: "Phone Country Code",
    name: `${fieldName || fieldLabel}-phone-country-code`,
    $input: countryDropdown,
    $label: labelEl,
    required,
    options: extractDropdownOptions(
      countryDropdown,
      "Phone Country Code",
    ),
  })
  if (phoneInput) {
    rules.push({
      type: enums.FIELD_TYPE.TEXT,
      label: fieldLabel,
      name: fieldName,
      $input: phoneInput,
      $countryCode: countryDropdown,
      $label: labelEl,
      isPhone: true,
      required,
    })
  }
}

async function extractTabularSectionRules(sectionRow, sectionLabel) {
  const records = []
  const blocks = Array.from(
    sectionRow.querySelectorAll(".tabular-main-div"),
  )
  if (blocks.length === 0) return null
  for (let index = 0; index < blocks.length; index++) {
    const block = blocks[index]
    const fieldRows = block.querySelectorAll(".crc-form-tabularrow")
    const children = []
    fieldRows.forEach((fieldRow) => {
      const labelEl = fieldRow.querySelector("label")
      const rowLabel =
        labelEl?.textContent?.replace(/\s+/g, " ").trim() || ""
      if (rowLabel.includes("Duration")) {
        const dropdowns = Array.from(
          fieldRow.querySelectorAll("lyte-dropdown"),
        )
        const dateLabels = [
          "Start Month",
          "Start Year",
          "End Month",
          "End Year",
        ]
        dropdowns.forEach((dropdown, dropdownIndex) => {
          const dateLabel =
            dateLabels[dropdownIndex] || `Date Part ${dropdownIndex + 1}`
          children.push({
            type: enums.FIELD_TYPE.SELECT,
            label: dateLabel,
            name: dropdown.id || `${rowLabel}_${dropdownIndex}`,
            $input: dropdown,
            $label: labelEl,
            required: false,
          })
        })
      } else if (rowLabel.includes("Currently")) {
        const checkbox = fieldRow.querySelector('input[type="checkbox"]')
        if (checkbox) {
          children.push({
            type: enums.FIELD_TYPE.CHECKBOX,
            label: rowLabel,
            name: checkbox.getAttribute("name") || rowLabel,
            $input: checkbox,
            $label: labelEl,
            required: false,
            options: ["Yes"],
          })
        }
      } else {
        const input = fieldRow.querySelector(
          "input, textarea, lyte-dropdown",
        )
        if (rowLabel && input) {
          children.push({
            type:
              input.tagName === "LYTE-DROPDOWN"
                ? enums.FIELD_TYPE.SELECT
                : enums.FIELD_TYPE.TEXT,
            label: rowLabel,
            name: input.getAttribute("name") || rowLabel,
            $input: input,
            $label: labelEl,
            required: false,
          })
        }
      }
    })
    if (children.length > 0) {
      records.push({
        type:
          sectionLabel === "Education"
            ? enums.FIELD_TYPE.EDUCATION
            : enums.FIELD_TYPE.EMPLOYMENT,
        label: sectionLabel.toLowerCase(),
        $input: block,
        $label: block,
        required: false,
        children,
        options: children.map((child) => ({
          type: child.type,
          label: child.label,
          options: child.options || [],
        })),
      })
    }
  }
  return records.length > 0 ? records : null
}

async function getRulesByType(fieldType) {
  const rules = await getRules()
  return rules.filter((rule) => rule.type === fieldType)
}

export async function getEduRules() {
  return getRulesByType(enums.FIELD_TYPE.EDUCATION)
}

export async function getExpRules() {
  return getRulesByType(enums.FIELD_TYPE.EMPLOYMENT)
}

function snapshotSectionChildren(sectionRule) {
  const snapshot = {}
  sectionRule.children?.forEach((child) => {
    snapshot[child.label] = readFieldValue(child.$input, child.type)
  })
  return snapshot
}

export async function getAdditionalFormSnapshotData(rules) {
  const snapshot = {}
  for (const rule of rules) {
    if (
      rule.type === enums.FIELD_TYPE.EDUCATION ||
      rule.type === enums.FIELD_TYPE.EMPLOYMENT
    ) {
      if (!snapshot[rule.type]) snapshot[rule.type] = []
      snapshot[rule.type].push(snapshotSectionChildren(rule))
    }
  }
  return snapshot
}

export async function getFormSnapshot(rules) {
  const snapshot = {}
  for (const rule of rules) {
    const label = rule.label
    if (
      rule.type !== enums.FIELD_TYPE.EDUCATION &&
      rule.type !== enums.FIELD_TYPE.EMPLOYMENT
    ) {
      if (rule.type === "SKILL_SET") {
        const skills = Array.from(
          document.querySelectorAll(
            ".skl-selected-skill li .skl-tag-name",
          ),
        ).map((el) => el.textContent?.trim())
        snapshot[label] = skills
        continue
      }
      if (rule.type === enums.FIELD_TYPE.RADIOGROUP) {
        const checked = rule.$checkboxs?.find((input) => input.checked)
        snapshot[label] = checked
          ? checked.nextElementSibling?.textContent?.trim() ||
            checked.value
          : ""
        continue
      }
      snapshot[label] = readFieldValue(rule.$input, rule.type)
    }
  }
  return snapshot
}

function readFieldValue(input, fieldType) {
  if (!input) return ""
  if (input.tagName === "LYTE-DROPDOWN") {
    const selected =
      input
        .querySelector(".lyteMarginRight.lyteOption")
        ?.textContent?.trim() ||
      input.querySelector(".lyteDropButton span")?.textContent?.trim()
    return selected === "-None-" ? "" : selected
  }
  return fieldType === enums.FIELD_TYPE.CHECKBOX
    ? input.checked
    : input instanceof HTMLInputElement ||
        input instanceof HTMLTextAreaElement
      ? input.value
      : input.textContent?.trim() || ""
}
