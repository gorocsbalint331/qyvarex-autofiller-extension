// @ts-nocheck
/**
 * Dover ATS autofill crawler (MUI form extraction + country/phone normalization).
 */

import { FIELD_TYPE } from "../../core/enums.ts"
import {
  getFirstOrderedNode,
  getOrderedNodes,
  getXpathContainsText,
} from "../../core/xpath.ts"
import { useAutofillInfoStore } from "../../store/autofillInfo.ts"
import { isEmpty } from "../../utils.ts"
import {
  applyDoverCountryFromAutofillInfo,
} from "./dover-country.ts"
import { applyDoverPhoneNormalization } from "./dover-phone.ts"
import { AutoFillBase } from "./newBase.ts"

export class DoverAutoFill extends AutoFillBase {
  constructor() {
    super()
    this.source = "dover"
    this.executeMap = {
      [FIELD_TYPE.TEXT]: "fillInputTextField",
      [FIELD_TYPE.CHECKBOX]: "fillRadioCheckField",
      [FIELD_TYPE.SELECT]: "fillOriginSelectField",
    }
  }

  shouldSkipElement(_element, _label) {
    return false
  }

  formatUserInfo(_data) {
    applyDoverCountryFromAutofillInfo(
      this.userInfo,
      this.formRules,
      useAutofillInfoStore.getState().country,
    )
    applyDoverPhoneNormalization(this.userInfo)
  }

  async executeAdditionalTasks() {
    await this.uploadFiles()
    return Promise.resolve()
  }

  async beforeFillForm() {
    await useAutofillInfoStore.getState().fetchAutofillInfo()
    const [elements, submitButtonText] = this.extractRules()
    if (elements.length > 0) this.formRules = elements
    this.submitButtonText = "Apply"
    return {
      form: {
        elements,
        submit_button: submitButtonText,
      },
    }
  }

  getAllFormRoot(form) {
    const roots = getOrderedNodes(
      "//div[contains(@class, 'MuiBox-root') and .//div[contains(@class, 'MuiFormControl-root')]]",
      form,
    )
    this.resumeInput = getFirstOrderedNode(
      `//div[contains(@class, "MuiBox-root")]/div[${getXpathContainsText("Resume")}]/following-sibling::div//input[@type="file"]`,
      form,
    )
    return roots
  }

  extractRules() {
    const form = document.querySelector("form")
    if (!form) return null

    const roots = this.getAllFormRoot(form)
    const rules = []
    roots.forEach((root) => {
      const rule = this.extractInput(root)
      if (rule) rules.push(rule)
    })

    const submitButton = this.getSubmitButton(form)
    const submitText = submitButton ? submitButton.textContent?.trim() : ""
    return [rules, submitText]
  }

  extractInput(root) {
    let options
    let checkboxes

    const labelEl =
      root.querySelector('[class*="FormLabel-"], .MuiFormLabel-root') ||
      root.querySelector("div")
    if (!labelEl) return null

    let label = (labelEl.textContent || "")
      .replace(/[\u200b-\u200d\ufeff]/g, "")
      .trim()
    if (!label) return null

    let required = /[*\uff0a]$/.test(label)
    label = label.replace(/[*\uff0a]$/, "").trim()

    const control = root.querySelector(
      ".MuiFormControl-root input, .MuiFormControl-root textarea, .MuiFormControl-root select",
    )
    if (!control) return null

    required =
      required ||
      control.required ||
      control.getAttribute("aria-required") === "true"

    switch (control.tagName) {
      case "INPUT":
      case "TEXTAREA": {
        const fieldType = ["checkbox", "radio"].includes(
          control.getAttribute("type"),
        )
          ? FIELD_TYPE.CHECKBOX
          : FIELD_TYPE.TEXT

        if (fieldType === FIELD_TYPE.CHECKBOX) {
          const name = control.getAttribute("name")
          checkboxes = Array.from(
            document.querySelectorAll(`input[name="${name}"]`),
          )
          options = checkboxes.reduce((acc, checkbox) => {
            const optionText =
              checkbox.parentElement.parentElement.textContent?.trim()
            if (!isEmpty(optionText) && checkbox.getAttribute("value")) {
              acc.push(optionText)
            }
            return acc
          }, [])

          if (checkboxes.indexOf(control) >= 1) return null

          return {
            type: FIELD_TYPE.CHECKBOX,
            label,
            required: !!required,
            $label: labelEl,
            options,
            $checkboxs: checkboxes,
          }
        }

        return {
          type: FIELD_TYPE.TEXT,
          label,
          required: !!required,
          $label: labelEl,
          $input: control,
        }
      }
      default:
        return null
    }
  }

  getSubmitButton(form) {
    return form.querySelector('button[type="submit"], input[type="submit"]')
  }
}
