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

type SaveTarget = "profile" | "shared"

function sidebarSlot() {
  const hosts = document.querySelectorAll(
    "#jobright-helper-plugin, #jobright-fork-helper-plugin, plasmo-csui"
  )
  for (const host of hosts) {
    const shadow = host.shadowRoot
    const panel = shadow?.querySelector("#jobright-helper-id")
    if (shadow && panel instanceof HTMLElement) return { shadow, panel }
  }
  return null
}

function placeSavePrompt(host: HTMLElement, panel: HTMLElement) {
  const rect = panel.getBoundingClientRect()
  const width = Math.max(220, rect.width - 16)
  host.style.position = "fixed"
  host.style.left = `${rect.left + 8}px`
  host.style.width = `${width}px`
  host.style.bottom = `${window.innerHeight - rect.bottom + 64}px`
  host.style.zIndex = "10020"
}

function askWhereToSave(
  hostname: string,
  question: string,
  answer: string,
  profileLabel: string
): Promise<SaveTarget | null> {
  return new Promise((resolve) => {
    const slot = sidebarSlot()
    const host = document.createElement("div")
    host.style.cssText = slot
      ? "all: initial; display: block; position: fixed; z-index: 10020;"
      : "all: initial; display: block; position: fixed; right: 16px; bottom: 16px; z-index: 2147483647; width: min(360px, calc(100vw - 32px));"
    if (slot) placeSavePrompt(host, slot.panel)
    const shadow = host.attachShadow({ mode: "closed" })
    const style = document.createElement("style")
    style.textContent = `
      .card { box-sizing: border-box; width: 100%; background: #fff; color: #0f172a; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 12px 40px rgba(0,0,0,.22); padding: 14px; font: 500 13px/18px Inter, -apple-system, sans-serif; }
      h2 { margin: 0 0 6px; font-size: 14px; }
      p { margin: 0 0 8px; color: #475569; }
      .qa { margin: 0 0 12px; color: #0f172a; }
      .row { display: flex; flex-direction: column; gap: 8px; }
      button { border: 0; border-radius: 8px; padding: 9px 12px; cursor: pointer; font: inherit; text-align: left; }
      .primary { background: #0b6e4f; color: #fff; }
      .shared { background: #e8f3ef; color: #0b6e4f; }
      .skip { background: transparent; color: #64748b; text-align: center; }
    `
    const card = document.createElement("div")
    card.className = "card"
    const title = document.createElement("h2")
    title.textContent = `Save this answer for ${hostname}?`
    const hint = document.createElement("p")
    hint.textContent = "Choose where the next autofill should find it."
    const qa = document.createElement("p")
    qa.className = "qa"
    qa.textContent = `${question}: ${answer}`
    const row = document.createElement("div")
    row.className = "row"
    const profileBtn = document.createElement("button")
    profileBtn.className = "primary"
    profileBtn.type = "button"
    profileBtn.textContent = `Selected profile${profileLabel ? `: ${profileLabel}` : ""}`
    const sharedBtn = document.createElement("button")
    sharedBtn.className = "shared"
    sharedBtn.type = "button"
    sharedBtn.textContent = "Shared answers for every profile"
    const skip = document.createElement("button")
    skip.className = "skip"
    skip.type = "button"
    skip.textContent = "Don't save"
    let settled = false
    const onLayout = () => {
      if (slot?.panel.isConnected) placeSavePrompt(host, slot.panel)
    }
    const finish = (choice: SaveTarget | null) => {
      if (settled) return
      settled = true
      window.removeEventListener("resize", onLayout)
      host.remove()
      resolve(choice)
    }
    profileBtn.addEventListener("click", () => finish("profile"))
    sharedBtn.addEventListener("click", () => finish("shared"))
    skip.addEventListener("click", () => finish(null))
    row.append(profileBtn, sharedBtn, skip)
    card.append(title, hint, qa, row)
    shadow.append(style, card)
    if (slot) window.addEventListener("resize", onLayout)
    ;(slot?.shadow || document.body).appendChild(host)
  })
}

async function selectedProfileLabel() {
  try {
    const response = await sendToBackground<{
      ok?: boolean
      selectedProfileId?: string | null
      profiles?: { id: string; label: string }[]
    }>({ name: "teamProfiles" })
    const selected = response?.profiles?.find(
      (profile) => profile.id === response.selectedProfileId
    )
    return selected?.label || ""
  } catch {
    return ""
  }
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

  const destination = await askWhereToSave(hostname, q, a, await selectedProfileLabel())
  if (!destination) return

  try {
    const response = await sendToBackground<{ ok?: boolean; message?: string }>({
      name: "learnAnswers",
      body: {
        answers: { [q]: a },
        scopeKey,
        hostname,
        stepKey: "site",
        destination
      }
    })
    if (!response?.ok) {
      recent.delete(key)
      console.warn("[qyvarex] could not save answer", response?.message)
      return
    }
    console.info("[qyvarex] saved answer for job site", { hostname, question: q, answer: a, destination })
    showToast(destination === "shared" ? `Saved for every profile on ${hostname}` : `Saved for ${hostname}`)
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

function dropdownOption(target: Element): Element | null {
  const option = target.closest('.select__option, [role="option"]')
  if (!option || isExtensionUi(option)) return null
  return option
}

function dropdownQuestion(option: Element) {
  const menu = option.closest('.select__menu, [role="listbox"]')
  const listId = menu?.id || ""
  const input = listId
    ? document.querySelector(`[aria-controls="${CSS.escape(listId)}"]`)
    : null
  const control = input?.closest(".select__control, .select") || input
  const field =
    control?.closest(
      ".select__container, .field, [class*='field'], [class*='question']"
    ) || control?.parentElement
  const fromField = questionFrom(field, input instanceof Element ? input : null)
  if (fromField.length >= 8) return fromField
  const label = field?.querySelector("label") || field?.previousElementSibling
  return clean(label?.textContent).replace(/\*+$/g, "").trim()
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
  const option = dropdownOption(target)
  if (option) {
    void persist(dropdownQuestion(option), optionText(option))
    return
  }
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
