// @ts-nocheck
/**
 * GoHire — form rule extraction, cover letter status, and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as delay from "../../../utils/delay.js"

const FIELD_CONTAINER_SELECTOR =
  ".gh-widget-form-box, .form-group, .input-group, .field"
const RULES_POLL_INTERVAL_MS = 50
const RULES_SETTLE_MS = 200
const RULES_MAX_WAIT_MS = 5000

function cleanLabel(text) {
  return (text || "").replace(/\*/g, "").replace(/\s+/g, " ").trim()
}

function getFieldContainer(el) {
  return el.closest(FIELD_CONTAINER_SELECTOR) || el.parentElement || el
}

function resolveFieldLabel(el) {
  const container = getFieldContainer(el)
  const labelFromContainer = Array.from(container.querySelectorAll("label"))
    .map((label) => cleanLabel(label.textContent))
    .find((text) => text && !/^attach\s+(cv|resume)/i.test(text))
  if (labelFromContainer) return labelFromContainer

  const id = el.getAttribute("id")
  if (id) {
    const forLabel = document.querySelector(`label[for="${CSS.escape(id)}"]`)
    const forLabelText = cleanLabel(forLabel?.textContent)
    if (forLabelText) return forLabelText
  }

  const containerText = cleanLabel(container.textContent)
  return (
    containerText ||
    cleanLabel(
      el.getAttribute("aria-label") ||
        el.getAttribute("placeholder") ||
        el.getAttribute("name") ||
        el.id,
    )
  )
}

function isFieldRequired(el) {
  const container = getFieldContainer(el)
  return (
    el.hasAttribute("required") ||
    container.textContent?.includes("*") ||
    container.classList.contains("coverletterRequired") ||
    false
  )
}

function isElementVisible(el) {
  const rect = el.getBoundingClientRect()
  const style = window.getComputedStyle(el)
  return (
    style.display !== "none" &&
    style.visibility !== "hidden" &&
    rect.width > 0 &&
    rect.height > 0
  )
}

function buildSelectRule(el) {
  return {
    label: resolveFieldLabel(el),
    required: isFieldRequired(el),
    type: enums.FIELD_TYPE.SELECT,
    $input: el,
    options: Array.from(el.options)
      .map((option) => cleanLabel(option.textContent || option.value))
      .filter(Boolean),
  }
}

function buildTextRule(el) {
  return {
    label: resolveFieldLabel(el),
    required: isFieldRequired(el),
    type: enums.FIELD_TYPE.TEXT,
    $input: el,
  }
}

function getRulesSignature(rules) {
  return rules.map((rule) => `${rule.type}:${rule.label}`).join("|")
}

function hasVisibleSubmitButton() {
  return Array.from(
    document.querySelectorAll('button, input[type="submit"]'),
  ).some((el) => {
    const text = cleanLabel(el.textContent || el.getAttribute("value") || "")
    return isElementVisible(el) && /^submit$/i.test(text)
  })
}

function collectVisibleRules() {
  const rules = []
  const elements = document.querySelectorAll("input, textarea, select")

  for (const el of elements) {
    if (!isElementVisible(el)) continue

    if (el instanceof HTMLInputElement) {
      const type = el.type.toLowerCase()
      if (
        type === "hidden" ||
        type === "file" ||
        type === "submit" ||
        type === "button"
      ) {
        continue
      }
      rules.push(buildTextRule(el))
      continue
    }

    if (el instanceof HTMLTextAreaElement) {
      rules.push(buildTextRule(el))
      continue
    }

    if (el instanceof HTMLSelectElement) {
      rules.push(buildSelectRule(el))
    }
  }

  return rules.filter((rule) => !!rule.label)
}

function syncTextareaAriaLabels() {
  document.querySelectorAll("textarea").forEach((textarea) => {
    if (textarea.getAttribute("aria-label")) return
    const label = resolveFieldLabel(textarea)
    if (label) textarea.setAttribute("aria-label", label)
  })
}

export function installGoHireTextareaLabelObserver() {
  if (window.__jobrightGoHireTextareaLabelObserverInstalled) return
  window.__jobrightGoHireTextareaLabelObserverInstalled = true
  syncTextareaAriaLabels()

  const observer = new MutationObserver(() => {
    syncTextareaAriaLabels()
  })
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  })

  let tick = 0
  const intervalId = window.setInterval(() => {
    tick += 1
    syncTextareaAriaLabels()
    if (tick >= 10) window.clearInterval(intervalId)
  }, 500)
}

export async function extractRules() {
  let lastNonEmptyRules = []
  let lastSignature = ""
  let lastChangeAt = Date.now()
  const startedAt = Date.now()

  while (Date.now() - startedAt < RULES_MAX_WAIT_MS) {
    const rules = collectVisibleRules()
    if (rules.length > 0) lastNonEmptyRules = rules

    const signature = getRulesSignature(rules)
    if (signature !== lastSignature) {
      lastSignature = signature
      lastChangeAt = Date.now()
    }

    if (
      rules.length > 0 &&
      hasVisibleSubmitButton() &&
      Date.now() - lastChangeAt >= RULES_SETTLE_MS
    ) {
      return rules
    }

    await delay.delay(RULES_POLL_INTERVAL_MS)
  }

  return lastNonEmptyRules
}

export function getCoverLetterStatus() {
  const coverLetterTextarea = Array.from(
    document.querySelectorAll("textarea"),
  ).find((textarea) => {
    if (!isElementVisible(textarea)) return false
    const label = cleanLabel(resolveFieldLabel(textarea)).toLowerCase()
    return /^cover letter\b/.test(label)
  })

  if (!coverLetterTextarea) return ""
  return isFieldRequired(coverLetterTextarea) ? "required" : "optional"
}

function readFieldValue(el) {
  if (el instanceof HTMLSelectElement) {
    return cleanLabel(el.selectedOptions[0]?.textContent || el.value)
  }
  if (el instanceof HTMLInputElement && el.type === "file") {
    return Array.from(el.files || []).map((file) => file.name)
  }
  return el.value || ""
}

export function getFormSnapshot() {
  const snapshot = {}
  const elements = document.querySelectorAll("input, textarea, select")

  for (const el of elements) {
    if (el instanceof HTMLInputElement) {
      const type = el.type.toLowerCase()
      if (type === "hidden" || type === "submit" || type === "button") continue
    } else if (!isElementVisible(el)) {
      continue
    }

    const label = resolveFieldLabel(el)
    if (label) snapshot[label] = readFieldValue(el)
  }

  return snapshot
}
