// @ts-nocheck
/**
 * Generic application-form rules for sites that are not a known ATS.
 */

import * as enums from "../../../core/enums.js"

const EXTENSION_UI =
  "#jobright-helper-plugin, #jobright-fork-helper-plugin, plasmo-csui, [id^='jobright']"

const CONTROL_SELECTOR =
  "input:not([type='hidden']):not([type='submit']):not([type='button']):not([type='reset']):not([type='image']):not([type='file']):not([type='password']):not([type='search']), select, textarea"

function cleanLabel(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .replace(/\*+/g, "")
    .replace(/\(\s*required\s*\)/gi, "")
    .trim()
}

function shortenLabel(text) {
  const label = cleanLabel(text)
  if (!label) return ""
  if (label.length <= 240) return label
  return label.slice(0, 240).trim()
}

function inExtensionUi(element) {
  return !!element.closest?.(EXTENSION_UI)
}

function isVisible(element) {
  if (!element || element.disabled) return false
  const style = window.getComputedStyle(element)
  if (style.display === "none" || style.visibility === "hidden") return false
  const rect = element.getBoundingClientRect()
  return rect.width > 0 && rect.height > 0
}

function isChoiceVisible(element) {
  if (isVisible(element)) return true
  const type = (element.type || "").toLowerCase()
  if (type !== "radio" && type !== "checkbox") return false
  const label = element.id
    ? document.querySelector(`label[for="${CSS.escape(element.id)}"]`)
    : null
  const host = label || element.closest("label") || element.parentElement
  return isVisible(host)
}

function labelFor(element) {
  if (element.id) {
    const explicit = document.querySelector(
      `label[for="${CSS.escape(element.id)}"]`,
    )
    const text = shortenLabel(explicit?.innerText)
    if (text) return { text, element: explicit }
  }

  const wrapping = element.closest("label")
  if (wrapping) {
    const clone = wrapping.cloneNode(true)
    clone.querySelectorAll("input, select, textarea").forEach((node) => {
      node.remove()
    })
    const text = shortenLabel(clone.innerText)
    if (text) return { text, element: wrapping }
  }

  const aria = shortenLabel(element.getAttribute("aria-label"))
  if (aria) return { text: aria, element: null }

  const labelledBy = element.getAttribute("aria-labelledby")
  if (labelledBy) {
    const text = shortenLabel(
      labelledBy
        .split(/\s+/)
        .map((id) => document.getElementById(id)?.innerText || "")
        .join(" "),
    )
    if (text) return { text, element: null }
  }

  const placeholder = shortenLabel(element.getAttribute("placeholder"))
  if (placeholder && !/^select$/i.test(placeholder)) {
    return { text: placeholder, element: null }
  }

  const previous = element.previousElementSibling
  const previousText = shortenLabel(previous?.innerText)
  if (previousText && previousText.length <= 80 && !previous.querySelector?.("input, select, textarea")) {
    return { text: previousText, element: previous }
  }

  let node = element.parentElement
  for (let depth = 0; depth < 3 && node; depth += 1) {
    const sibling = node.previousElementSibling
    const text = shortenLabel(sibling?.innerText)
    if (
      text &&
      text.length <= 80 &&
      !sibling.querySelector?.("input, select, textarea")
    ) {
      return { text, element: sibling }
    }
    node = node.parentElement
  }

  return null
}

function isRequired(element, labelElement) {
  return (
    element.required === true ||
    element.getAttribute("aria-required") === "true" ||
    /\*/.test(labelElement?.textContent || "")
  )
}

function optionText(option) {
  return cleanLabel(option.textContent)
}

function fieldRoots() {
  const dialogs = Array.from(
    document.querySelectorAll("dialog[open], [role='dialog'], [aria-modal='true']"),
  ).filter((node) => isVisible(node) && !inExtensionUi(node))
  const forms = Array.from(document.querySelectorAll("form")).filter(
    (form) => !inExtensionUi(form),
  )
  const rich = forms.filter(
    (form) => form.querySelectorAll(CONTROL_SELECTOR).length >= 2,
  )
  if (dialogs.length) return [...dialogs, ...(rich.length ? rich : forms)]
  if (rich.length) return rich
  const main = document.querySelector("main") || document.body
  return main ? [main] : []
}

function pushUnique(rules, seen, rule, element) {
  if (!rule || seen.has(element)) return
  seen.add(element)
  rules.push(rule)
}

function textOrSelectRule(element) {
  const found = labelFor(element)
  if (!found) return null
  const tag = element.tagName.toLowerCase()
  if (tag === "select") {
    const options = Array.from(element.options)
      .map(optionText)
      .filter((text) => text && !/^select$/i.test(text))
    return {
      type: enums.FIELD_TYPE.SELECT,
      label: found.text,
      required: isRequired(element, found.element),
      options,
      $input: element,
      $label: found.element,
    }
  }
  return {
    type: enums.FIELD_TYPE.TEXT,
    label: found.text,
    required: isRequired(element, found.element),
    $input: element,
    $label: found.element,
  }
}

function questionAbove(start) {
  let node = start instanceof Element ? start.parentElement : null
  for (let depth = 0; depth < 6 && node; depth += 1) {
    let prev = node.previousElementSibling
    let hops = 0
    while (prev && hops < 3) {
      const hasControl = prev.querySelector(
        "input, button, select, textarea, [role='radio'], [role='checkbox']",
      )
      if (!hasControl && !prev.contains(start)) {
        const text = shortenLabel(prev.innerText || "")
        if (text && text.length > 12 && !/^(yes|no)$/i.test(text)) return text
      }
      prev = prev.previousElementSibling
      hops += 1
    }
    node = node.parentElement
  }
  return ""
}

function checkboxRule(boxes) {
  const labels = boxes.map((box) => labelFor(box)?.text || cleanLabel(box.value))
  const question =
    boxes.length === 1
      ? labels[0]
      : shortenLabel(
          boxes[0].closest("fieldset")?.querySelector("legend")?.innerText,
        ) ||
        questionAbove(boxes[0]) ||
        labels[0]
  if (!question) return null
  return {
    type: enums.FIELD_TYPE.CHECKBOX,
    label: question,
    required: boxes.some((box) => isRequired(box, null)),
    options: labels.filter(Boolean),
    $checkboxs: boxes,
    $input: boxes[0],
    $label: labelFor(boxes[0])?.element || null,
  }
}

function radioRule(radios) {
  const legend = radios[0].closest("fieldset")?.querySelector("legend")
  const groupLabel =
    shortenLabel(legend?.innerText) ||
    shortenLabel(
      radios[0].closest("[role='radiogroup']")?.getAttribute("aria-label"),
    )
  const options = radios.map(
    (radio) => labelFor(radio)?.text || cleanLabel(radio.value),
  )
  const label = groupLabel || questionAbove(radios[0]) || options.find(Boolean)
  if (!label) return null
  return {
    type: enums.FIELD_TYPE.RADIOGROUP,
    label,
    required: radios.some((radio) => isRequired(radio, null)),
    options: options.filter(Boolean),
    $radios: radios,
    $input: radios[0],
    $label: legend || null,
  }
}

export function getRules() {
  const rules = []
  const seen = new Set()
  const checkboxGroups = new Map()
  const radioGroups = new Map()

  for (const root of fieldRoots()) {
    const controls = Array.from(root.querySelectorAll(CONTROL_SELECTOR))
    for (const element of controls) {
      if (inExtensionUi(element)) continue
      const type = (element.type || "").toLowerCase()
      const shown =
        type === "radio" || type === "checkbox"
          ? isChoiceVisible(element)
          : isVisible(element)
      if (!shown) continue
      const nearby = labelFor(element)?.text || ""
      if (/how was your experience on this website/i.test(nearby)) continue
      if (type === "checkbox") {
        const key = choiceGroupKey(element, "checkbox")
        const group = checkboxGroups.get(key) || []
        group.push(element)
        checkboxGroups.set(key, group)
        continue
      }
      if (type === "radio") {
        const key = choiceGroupKey(element, "radio")
        const group = radioGroups.get(key) || []
        group.push(element)
        radioGroups.set(key, group)
        continue
      }
      pushUnique(rules, seen, textOrSelectRule(element), element)
    }
  }

  for (const boxes of checkboxGroups.values()) {
    const visible = boxes.filter((box) => isChoiceVisible(box) && !inExtensionUi(box))
    if (!visible.length) continue
    const rule = checkboxRule(visible)
    if (rule) rules.push(rule)
  }

  for (const radios of radioGroups.values()) {
    const visible = radios.filter((radio) => isChoiceVisible(radio) && !inExtensionUi(radio))
    if (!visible.length) continue
    const rule = radioRule(visible)
    if (rule) rules.push(rule)
  }

  for (const rule of buttonChoiceRules()) {
    if (rules.some((existing) => existing.label === rule.label)) continue
    rules.push(rule)
  }
  for (const rule of radioRoleRules()) {
    if (rules.some((existing) => existing.label === rule.label)) continue
    rules.push(rule)
  }

  return rules
}

function radioRoleRules() {
  const radios = Array.from(document.querySelectorAll("[role='radio']")).filter(
    (radio) => isVisible(radio) && !inExtensionUi(radio),
  )
  const groups = new Map()
  for (const radio of radios) {
    const group = radio.closest("[role='radiogroup']") || radio.parentElement
    if (!group) continue
    const list = groups.get(group) || []
    list.push(radio)
    groups.set(group, list)
  }
  const rules = []
  for (const [group, list] of groups) {
    if (list.length < 2 || list.length > 12) continue
    const options = list.map((item) =>
      cleanLabel(item.innerText || item.getAttribute("aria-label") || item.textContent),
    )
    if (options.some((text) => !text || text.length > 80)) continue
    const label =
      shortenLabel(group.getAttribute("aria-label")) || questionAbove(list[0])
    if (!label) continue
    rules.push({
      type: enums.FIELD_TYPE.RADIOGROUP,
      label,
      required: group.getAttribute("aria-required") === "true" || /\*/.test(label),
      options,
      $radios: list,
      $input: list[0],
      $label: group,
    })
  }
  return rules
}

function choiceGroupKey(element, kind) {
  if (element.name) {
    try {
      const selector = `input[type="${kind}"][name="${CSS.escape(element.name)}"]`
      if (document.querySelectorAll(selector).length > 1) return `${kind}:${element.name}`
    } catch {
      /* name is not a valid selector */
    }
  }
  const fieldset = element.closest("fieldset")
  if (fieldset) return fieldset
  let node = element.parentElement
  for (let depth = 0; depth < 5 && node; depth += 1) {
    const same = node.querySelectorAll(`input[type="${kind}"]`)
    if (same.length < 2) {
      node = node.parentElement
      continue
    }
    const foreign = Array.from(node.querySelectorAll("input, textarea, select")).some((control) => {
      const controlType = (control.type || "").toLowerCase()
      return controlType && controlType !== kind && controlType !== "hidden"
    })
    if (!foreign) return node
    node = node.parentElement
  }
  return element
}

function buttonChoiceRules() {
  const groups = new Map()
  const buttons = Array.from(
    document.querySelectorAll("button, [role='button'], [role='radio']"),
  ).filter((button) => {
    if (inExtensionUi(button) || !isVisible(button)) return false
    const text = cleanLabel(button.innerText || button.textContent)
    return /^(yes|no)$/i.test(text)
  })
  const leaves = Array.from(document.querySelectorAll("div, span, a")).filter((node) => {
    if (node.children.length || inExtensionUi(node) || !isVisible(node)) return false
    return /^(yes|no)$/i.test(cleanLabel(node.textContent))
  })
  for (const node of leaves) {
    if (!buttons.includes(node)) buttons.push(node)
  }
  for (const button of buttons) {
    let parent = button.parentElement
    let group = null
    for (let depth = 0; depth < 4 && parent; depth += 1) {
      const inside = buttons.filter((item) => parent.contains(item))
      const names = inside.map((item) => cleanLabel(item.innerText || item.textContent))
      const hasYes = names.some((text) => /^yes$/i.test(text))
      const hasNo = names.some((text) => /^no$/i.test(text))
      if (hasYes && hasNo && inside.length <= 4) {
        group = parent
        break
      }
      parent = parent.parentElement
    }
    if (!group) continue
    if (!groups.has(group)) groups.set(group, buttons.filter((item) => group.contains(item)))
  }

  const rules = []
  for (const list of groups.values()) {
    const unique = []
    for (const word of ["yes", "no"]) {
      const matches = list.filter(
        (button) => cleanLabel(button.innerText || button.textContent).toLowerCase() === word,
      )
      const chosen = matches.find((button) => button.tagName === "BUTTON") || matches[0]
      if (chosen) unique.push(chosen)
    }
    list.splice(0, list.length, ...unique)
    const options = list.map((button) => cleanLabel(button.innerText || button.textContent)).filter(Boolean)
    const yesNo =
      options.length >= 2 && options.every((text) => /^(yes|no)$/i.test(text))
    if (!yesNo) continue
    const label = questionAbove(list[0])
    if (!label) continue
    rules.push({
      type: enums.FIELD_TYPE.RADIOGROUP,
      label,
      required: /\*/.test(label),
      options,
      $radios: list,
      $input: list[0],
      $label: null,
    })
  }
  return rules
}

function readControlValue(rule) {
  const input = rule?.$input
  if (input instanceof HTMLSelectElement) {
    const selected = Array.from(input.selectedOptions || [])
      .map((option) => option.textContent || option.value)
      .filter(Boolean)
    return selected.join(", ") || input.value || ""
  }
  if (input instanceof HTMLInputElement) {
    const type = (input.type || "").toLowerCase()
    if (type === "checkbox") {
      return (rule.$checkboxs || [input])
        .filter((box) => box.checked)
        .map((box) => box.value || "on")
    }
    if (type === "radio") {
      const checked = (rule.$radios || [input]).find((radio) => radio.checked)
      return checked ? checked.value || "on" : ""
    }
    if (type === "file") return input.files?.[0]?.name || ""
    return input.value || ""
  }
  if (input instanceof HTMLTextAreaElement) return input.value || ""
  return ""
}

export function getFormSnapshot(formRules = []) {
  return (formRules || []).map((rule) => ({
    label: rule.label || "",
    type: rule.type || "",
    required: !!rule.required,
    value: readControlValue(rule)
  }))
}
