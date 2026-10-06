/**
 * Saves answers the user types or clicks after autofill, onto the selected
 * hub profile, scoped to this job site so the next application there reuses them.
 * Programmatic fill clicks are ignored (isTrusted === false).
 */

import { sendToBackground } from "@plasmohq/messaging"

import { jobsiteHostname, jobsiteScopeKey } from "~lib/site-answers"

const IDENTITY_RE =
  /^(first name|last name|full name|legal name|preferred name|name|email|e-mail|email address|phone|mobile|telephone|cell|linkedin|website|address|street|city|state|province|zip|postal|country|resume|cv|cover letter)\b/i
const SKIP_CHOICE_RE =
  /^(submit|apply|replace|upload|cancel|back|next|save|continue|dismiss|fill again|ok)$/i
const PLACEHOLDER_RE = /^(select|choose|please select|search|type to search|--|n\/a)$/i
const CHOICE_SELECTOR =
  'button, [role="button"], [role="radio"], input[type="radio"]'
const UI_SELECTOR =
  "#jobright-helper-plugin, #jobright-fork-helper-plugin, plasmo-csui"

const recent = new Map<string, number>()

function clean(text: string | null | undefined) {
  return String(text || "")
    .replace(/\u2731/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function isExtensionUi(el: Element) {
  return !!el.closest(UI_SELECTOR)
}

function fieldRoot(el: Element): Element | null {
  return (
    el.closest(".ashby-application-form-field-entry") ||
    el.closest("fieldset") ||
    el.closest("[role='group']") ||
    el.closest("[role='radiogroup']") ||
    el.closest("[class*='form-field']") ||
    el.closest("[class*='field-entry']") ||
    el.closest(".field") ||
    el.closest("label")?.parentElement ||
    null
  )
}

function includesControl(options: Element[], control: Element) {
  return options.some(
    (option) => option === control || option.contains(control) || control.contains(option)
  )
}

/** Smallest ancestor that holds this control and at least one other choice. */
function tightChoiceRoot(control: Element): Element | null {
  let node = control.parentElement
  while (node && node !== document.documentElement) {
    const options = choiceControls(node)
    if (options.length >= 2 && includesControl(options, control)) return node
    node = node.parentElement
  }
  return null
}

function questionFrom(root: Element | null, control?: Element | null) {
  if (!root && !control) return ""
  const title = root?.querySelector(
    "label.ashby-application-form-question-title, .ashby-application-form-question-title, label[class*='_label_'], legend"
  )
  const labelledBy = control?.getAttribute("aria-labelledby")
  const labelled = labelledBy
    ? document.getElementById(labelledBy.split(/\s+/)[0] || "")
    : null
  const forLabel =
    control instanceof HTMLElement && control.id
      ? document.querySelector(`label[for="${CSS.escape(control.id)}"]`)
      : null
  const raw =
    title?.textContent ||
    labelled?.textContent ||
    forLabel?.textContent ||
    root?.getAttribute("aria-label") ||
    control?.getAttribute("aria-label") ||
    ""
  return clean(raw.split("\n")[0]).replace(/\*+$/g, "").trim()
}

function optionText(el: Element) {
  if (el instanceof HTMLInputElement && el.type === "radio") {
    const fromLabel =
      (el.id &&
        document.querySelector(`label[for="${CSS.escape(el.id)}"]`)?.textContent) ||
      el.closest("label")?.textContent ||
      el.value ||
      el.getAttribute("aria-label") ||
      ""
    return clean(fromLabel).split("\n")[0]
  }
  return clean(el.textContent || el.getAttribute("aria-label") || "").split("\n")[0]
}

function choiceControls(root: Element) {
  return [...root.querySelectorAll(CHOICE_SELECTOR)].filter((el) => {
    const text = optionText(el)
    if (!text || text.length > 80 || SKIP_CHOICE_RE.test(text)) return false
    return true
  })
}

function learnable(question: string, answer: string) {
  if (question.length < 8 || question.length > 500) return false
  if (!answer || answer.length > 2000) return false
  if (IDENTITY_RE.test(question)) return false
  if (SKIP_CHOICE_RE.test(answer) || PLACEHOLDER_RE.test(answer)) return false
  if (/^yesno$/i.test(answer.replace(/\s+/g, ""))) return false
  return true
}

function showToast(message: string) {
  if (!document.body) return
  const host = document.createElement("div")
  host.style.cssText =
    "all: initial; position: fixed; z-index: 2147483647; right: 16px; bottom: 16px;"
  const shadow = host.attachShadow({ mode: "closed" })
  const toast = document.createElement("div")
  toast.textContent = message
  toast.style.cssText =
    "font: 500 13px/18px Inter, -apple-system, sans-serif; color: #fff; background: #0b6e4f; padding: 10px 14px; border-radius: 10px; box-shadow: 0 6px 24px rgba(0,0,0,.2);"
  shadow.appendChild(toast)
  document.body.appendChild(host)
  window.setTimeout(() => host.remove(), 2800)
}

async function persist(question: string, answer: string) {
  const q = clean(question)
  const a = clean(answer)
  if (!learnable(q, a)) return

  const key = `${q}\n${a}`
  const now = Date.now()
  if ((recent.get(key) || 0) > now - 8000) return
  recent.set(key, now)

  const hostname = jobsiteHostname(location.hostname)
  const scopeKey = jobsiteScopeKey(hostname)
  if (!scopeKey) return

  try {
    const response = await sendToBackground<{ ok?: boolean; message?: string }>({
      name: "learnAnswers",
      body: {
        answers: { [q]: a },
        scopeKey,
        hostname,
        stepKey: "site"
      }
    })
    if (!response?.ok) {
      recent.delete(key)
      console.warn("[qyvarex] could not save answer", response?.message)
      return
    }
    console.info("[qyvarex] saved answer for job site", { hostname, question: q, answer: a })
    showToast(`Saved for ${hostname}`)
  } catch (error) {
    recent.delete(key)
    const message = error instanceof Error ? error.message : String(error)
    if (/extension context invalidated|receiving end does not exist/i.test(message)) {
      showToast("Refresh this page, then answer again to save it")
      return
    }
    console.warn("[qyvarex] could not save answer", message)
  }
}

function clickedChoice(target: Element): Element | null {
  const control = target.closest(
    'button, [role="button"], [role="radio"], input[type="radio"], label'
  )
  if (!control || isExtensionUi(control)) return null
  if (control instanceof HTMLLabelElement) {
    const input =
      (control.htmlFor && document.getElementById(control.htmlFor)) ||
      control.querySelector('input[type="radio"]')
    if (input instanceof Element) return input
  }
  return control
}

function onClick(event: Event) {
  if (!event.isTrusted) return
  const target = event.target
  if (!(target instanceof Element) || isExtensionUi(target)) return
  const control = clickedChoice(target)
  if (!control) return
  const group = tightChoiceRoot(control)
  if (!group || isExtensionUi(group)) return
  const questionRoot = fieldRoot(group) || group
  void persist(questionFrom(questionRoot, control), optionText(control))
}

function valueFromControl(el: EventTarget | null) {
  if (el instanceof HTMLSelectElement) {
    const option = el.selectedOptions[0]
    return clean(option?.textContent || el.value)
  }
  if (el instanceof HTMLTextAreaElement) return clean(el.value)
  if (!(el instanceof HTMLInputElement)) return ""
  const type = (el.type || "text").toLowerCase()
  if (
    type === "file" ||
    type === "password" ||
    type === "hidden" ||
    type === "radio" ||
    type === "checkbox" ||
    type === "submit" ||
    type === "button"
  ) {
    return ""
  }
  return clean(el.value)
}

function onChange(event: Event) {
  if (!event.isTrusted) return
  const el = event.target
  if (!(el instanceof Element) || isExtensionUi(el)) return
  if (el instanceof HTMLInputElement && el.type === "radio") {
    if (!el.checked) return
    const root = fieldRoot(el)
    if (!root) return
    void persist(questionFrom(root, el), optionText(el))
    return
  }
  const answer = valueFromControl(el)
  if (!answer) return
  const root = fieldRoot(el)
  void persist(questionFrom(root, el), answer)
}

export function startManualAnswerSync() {
  if ((globalThis as { __qyvarexManualAnswerSync?: boolean }).__qyvarexManualAnswerSync) {
    return
  }
  ;(globalThis as { __qyvarexManualAnswerSync?: boolean }).__qyvarexManualAnswerSync = true
  document.addEventListener("click", onClick, true)
  document.addEventListener("change", onChange, true)
}
