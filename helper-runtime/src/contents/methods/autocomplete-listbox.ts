// @ts-nocheck
/**
 * Find an aria listbox tied to an autocomplete control.
 */

function normalizeAriaLabel(value) {
  return (value || "").replace(/\s+/g, " ").trim().toLowerCase()
}

export function findAutocompleteListbox(control, documentRoot, searchRoot) {
  const controlsId = control.getAttribute("aria-controls")
  if (controlsId) {
    const byId = documentRoot.getElementById(controlsId)
    if (byId?.isConnected && byId.getAttribute("role") === "listbox") {
      return byId
    }
  }

  if (!searchRoot) return null

  const controlLabel = normalizeAriaLabel(control.getAttribute("aria-label") ?? "")
  if (!controlLabel) return null

  const matches = Array.from(searchRoot.querySelectorAll('[role="listbox"]')).filter(
    (node) =>
      node.isConnected &&
      normalizeAriaLabel(node.getAttribute("aria-label") ?? "") === controlLabel,
  )

  return matches.length === 1 ? matches[0] : null
}
