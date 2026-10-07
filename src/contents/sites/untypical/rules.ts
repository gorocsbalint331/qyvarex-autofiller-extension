// @ts-nocheck
/**
 * Fields on the Eploy registration form opened from an Untypical vacancy.
 */

import * as enums from "../../../core/enums.js"

const CONTROL_SELECTOR =
  "input:not([type='hidden']):not([type='submit']):not([type='button']):not([type='reset']):not([type='image']):not([type='file']):not([type='password']), select, textarea"

function cleanLabel(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .replace(/\*+/g, "")
    .trim()
}

function isVisible(element) {
  if (!element || element.disabled) return false
  const view = element.ownerDocument.defaultView
  const style = view.getComputedStyle(element)
  if (style.display === "none" || style.visibility === "hidden") return false
  const rect = element.getBoundingClientRect()
  return rect.width > 0 && rect.height > 0
}

function labelFor(doc, element) {
  if (element.id) {
    const explicit = doc.querySelector(`label[for="${CSS.escape(element.id)}"]`)
    const text = cleanLabel(explicit?.innerText)
    if (text) return text
  }
  const legend = element.closest("fieldset")?.querySelector("legend")
  const legendText = cleanLabel(legend?.innerText)
  if (legendText) return legendText
  return ""
}

export function getRules(doc) {
  const root = doc?.querySelector?.("#regPanel")
  if (!root) return []
  const rules = []
  const seen = new Set()
  const radios = new Map()

  for (const element of root.querySelectorAll(CONTROL_SELECTOR)) {
    if (!isVisible(element) || seen.has(element)) continue
    if (element.type === "radio") {
      const group = radios.get(element.name) || []
      group.push(element)
      radios.set(element.name, group)
      continue
    }
    if (element.type === "checkbox") {
      const label = labelFor(doc, element)
      if (!label) continue
      seen.add(element)
      rules.push({
        type: enums.FIELD_TYPE.CHECKBOX,
        label,
        required: /\*/.test(doc.querySelector(`label[for="${CSS.escape(element.id)}"]`)?.textContent || ""),
        options: [label],
        $checkboxs: [element],
        $input: element,
      })
      continue
    }
    const label = labelFor(doc, element)
    if (!label) continue
    seen.add(element)
    if (element.tagName === "SELECT") {
      rules.push({
        type: enums.FIELD_TYPE.SELECT,
        label,
        required: element.required || element.getAttribute("aria-required") === "true",
        options: [...element.options].map((option) => cleanLabel(option.textContent)).filter(Boolean),
        $input: element,
      })
      continue
    }
    rules.push({
      type: enums.FIELD_TYPE.TEXT,
      label,
      required: element.required || element.getAttribute("aria-required") === "true",
      $input: element,
    })
  }

  for (const group of radios.values()) {
    const visible = group.filter(isVisible)
    if (!visible.length) continue
    const legend = cleanLabel(visible[0].closest("fieldset")?.querySelector("legend")?.innerText)
    const options = visible.map((radio) =>
      cleanLabel(doc.querySelector(`label[for="${CSS.escape(radio.id)}"]`)?.innerText),
    )
    if (!legend) continue
    rules.push({
      type: enums.FIELD_TYPE.RADIOGROUP,
      label: legend,
      required: true,
      options,
      $radios: visible,
      $input: visible[0],
    })
  }

  return rules
}
