// @ts-nocheck
/**
 * DOM helpers for pre-autofill account / entry flows.
 */

export function findPreAutofillElement(root, selector, type = HTMLElement) {
  const node = root.querySelector(selector)
  return node instanceof type ? node : null
}

export function findPreAutofillButtonByText(root, textPattern) {
  const candidates = Array.from(
    root.querySelectorAll("button, a, [role='button']"),
  )
  const match = candidates.find((element) =>
    textPattern.test(element.textContent?.trim() ?? ""),
  )
  return match instanceof HTMLElement ? match : null
}

export function findPreAutofillInput(root, selector) {
  return findPreAutofillElement(root, selector, HTMLInputElement)
}

function resolveHtmlElementConstructor(documentRoot, override) {
  if (override) return override
  if (documentRoot.defaultView?.HTMLElement) return documentRoot.defaultView.HTMLElement
  return typeof HTMLElement !== "undefined" ? HTMLElement : null
}

export function isVisiblePreAutofillElement(element) {
  if (
    !element ||
    element.hidden ||
    element.getAttribute?.("aria-hidden") === "true" ||
    element.closest?.("[hidden], [aria-hidden='true']")
  ) {
    return false
  }

  const view = element.ownerDocument?.defaultView
  const style = view?.getComputedStyle?.(element)
  if (
    style &&
    (style.display === "none" ||
      style.visibility === "hidden" ||
      style.opacity === "0")
  ) {
    return false
  }

  return (
    typeof element.getClientRects !== "function" ||
    element.getClientRects().length > 0
  )
}

export function findVisiblePreAutofillElements(root, selector, elementType) {
  const HtmlElement = resolveHtmlElementConstructor(root, elementType)
  const nodes =
    typeof root.querySelectorAll === "function"
      ? Array.from(root.querySelectorAll(selector))
      : [root.querySelector(selector)].filter(Boolean)

  return nodes
    .filter(
      (node) => (!HtmlElement || node instanceof HtmlElement) && isVisiblePreAutofillElement(node),
    )
    .map((node) => node)
}

export function findVisiblePreAutofillElement(root, selector, elementType) {
  return findVisiblePreAutofillElements(root, selector, elementType)[0] ?? null
}

export async function waitForPreAutofillElement(
  documentRoot,
  findElement,
  timeoutMs = 8000,
  signal,
) {
  if (signal?.aborted) return null

  const immediate = findElement()
  if (immediate) return immediate

  return new Promise((resolve) => {
    let settled = false

    function finish(value) {
      if (settled) return
      settled = true
      window.clearTimeout(timeoutId)
      observer.disconnect()
      resolve(value)
    }

    const timeoutId = window.setTimeout(() => {
      finish(null)
    }, timeoutMs)

    const observer = new MutationObserver(() => {
      const found = findElement()
      if (found) finish(found)
    })

    observer.observe(documentRoot.documentElement, {
      childList: true,
      subtree: true,
    })

    signal?.addEventListener("abort", () => finish(null), { once: true })
  })
}

export async function clickPreAutofillElement({ document, findElement, signal }) {
  const element = await waitForPreAutofillElement(document, findElement, undefined, signal)
  if (signal.aborted || !element) return false
  element.click()
  return true
}

export function setNativeInputValue(input, value) {
  const valueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value",
  )?.set
  valueSetter?.call(input, value)
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
}

export async function fillPreAutofillInput({ document, findInput, value, signal }) {
  const input = await waitForPreAutofillElement(document, findInput, undefined, signal)
  if (signal.aborted || !input || !value) return false
  setNativeInputValue(input, value)
  return true
}

export async function fillPreAutofillInputs({ document, findInputs, value, signal }) {
  if (!value) return false

  const first = await waitForPreAutofillElement(
    document,
    () => findInputs()[0] ?? null,
    undefined,
    signal,
  )
  if (signal.aborted || !first) return false

  const inputs = findInputs()
  if (!inputs.length) return false

  for (const input of inputs) setNativeInputValue(input, value)
  return true
}

export function clearNativeInputValues(inputs) {
  const seen = new Set()
  for (const input of inputs) {
    if (!input || seen.has(input)) continue
    seen.add(input)
    setNativeInputValue(input, "")
  }
}

export function setNativeInputValueIfEmpty(input, value) {
  if (input.value !== "") return true
  if (!value) return false
  setNativeInputValue(input, value)
  return true
}
