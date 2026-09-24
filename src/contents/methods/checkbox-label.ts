// @ts-nocheck
/**
 * Resolve visible text for checkbox / radio controls.
 */

function readNodeText(node) {
  return (node?.innerText || node?.textContent || "").trim()
}

function findLabelForInput(input) {
  if (!input.id || typeof document === "undefined") return null
  const escapedId = input.id.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
  try {
    return document.querySelector(`label[for="${escapedId}"]`)
  } catch {
    return null
  }
}

export function getRadioCheckText(input) {
  const parent = input.parentElement ?? input.parentNode
  const grandparent = parent?.parentElement ?? input.parentNode?.parentNode
  const candidates = [
    typeof input.closest === "function" ? input.closest("label") : null,
    findLabelForInput(input),
    parent,
    parent?.nextElementSibling,
    parent?.previousElementSibling,
    grandparent,
  ]

  for (const candidate of candidates) {
    const text = readNodeText(candidate)
    if (text) return text
  }

  return ""
}

export function normalizeRadioCheckText(text) {
  return text.toLowerCase().trim().replace("*", "")
}
