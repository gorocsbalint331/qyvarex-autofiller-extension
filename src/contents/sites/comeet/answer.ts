// @ts-nocheck
/**
 * Comeet — label normalization and required-field detection.
 */

export function normalizeComeetLabelText(text) {
  return (text || "")
    .replace(/\s+/g, " ")
    .replace(/\s+\*+\s*$/, "")
    .trim()
}

export function isComeetRequiredField(input, labelEl) {
  if (
    input?.hasAttribute("required") ||
    labelEl?.querySelector("span.required-asterisk") ||
    labelEl?.querySelector(".required-asterisk")?.textContent?.includes("*")
  ) {
    return true
  }
  const text = labelEl?.textContent?.trim() || ""
  return /\brequired\b/i.test(text) || /\*\s*$/.test(text)
}
