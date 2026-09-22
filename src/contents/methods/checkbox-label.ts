/**
 * Checkbox / radio label helpers (clean-TS).
 * Oracle: engine/helper-app/src/contents/methods/checkbox-label.js
 */

function textOf(el: Element | null | undefined): string {
  return (el?.textContent || "").trim()
}

function labelForInput(input: HTMLInputElement): HTMLLabelElement | null {
  if (!input.id || typeof document === "undefined") return null
  try {
    return document.querySelector(`label[for="${CSS.escape(input.id)}"]`)
  } catch {
    return null
  }
}

/** Visible label text for a checkbox/radio. */
export function getRadioCheckText(input: HTMLInputElement): string {
  const parent = input.parentElement
  const grand = parent?.parentElement
  const candidates: Array<Element | null | undefined> = [
    typeof input.closest === "function" ? input.closest("label") : null,
    labelForInput(input),
    parent,
    parent?.nextElementSibling,
    parent?.previousElementSibling,
    grand
  ]
  for (const el of candidates) {
    const t = textOf(el)
    if (t) return t
  }
  return (
    input.getAttribute("aria-label") ||
    input.value ||
    ""
  )
}

export function normalizeRadioCheckText(text: string): string {
  return text.toLowerCase().trim().replace("*", "")
}
