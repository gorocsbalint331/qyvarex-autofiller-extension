// @ts-nocheck
/**
 * Extract visible label / description text for form controls.
 */

const LABEL_SELECTOR =
  "label, legend, h2, h3, h4, h5, h6, [class*='label'], [class*='Label'], [class*='section-header'], [class*='section_header'], [class*='bodyImportant']"

const DESCRIPTION_SELECTOR =
  "[class*='description'], [class*='Description'], [class*='help-text'], [class*='helpText'], [class*='helper-text'], [class*='helperText'], [class*='hint'], [class*='Hint'], [class*='instruction'], [class*='Instruction'], [class*='subtext'], [class*='Subtext']"

const MAX_PARENT_HOPS = 4
const MAX_DESCRIPTION_LENGTH = 500

const cleanLabelText = (text) =>
  text.trim().replace(/\s*\*\s*/g, "").trim()

function truncateDescription(text) {
  return text.length > MAX_DESCRIPTION_LENGTH
    ? `${text.slice(0, MAX_DESCRIPTION_LENGTH - 1)}\u2026`
    : text
}

export function extractVisibleLabel(element) {
  if (element.id) {
    try {
      const root = element.getRootNode()
      const forLabel = root.querySelector(
        `label[for="${CSS.escape(element.id)}"]`,
      )
      if (forLabel) return cleanLabelText(forLabel.innerText)
    } catch {
      // ignore invalid id / CSS.escape failures
    }
  }

  const ariaLabel = element.getAttribute("aria-label")
  if (ariaLabel) return ariaLabel.trim()

  const labelledBy = element.getAttribute("aria-labelledby")
  if (labelledBy) {
    const root = element.getRootNode()
    const joined = labelledBy
      .split(/\s+/)
      .filter(Boolean)
      .map((id) => {
        try {
          return root.querySelector(`#${CSS.escape(id)}`)?.innerText.trim() ?? ""
        } catch {
          return ""
        }
      })
      .filter(Boolean)
      .join(" ")
    if (joined) return cleanLabelText(joined)
  }

  if (element.placeholder) return element.placeholder.trim()

  let parent = element.parentElement
  for (let hop = 0; hop < MAX_PARENT_HOPS && parent; hop++, parent = parent.parentElement) {
    const candidates = parent.querySelectorAll(LABEL_SELECTOR)
    const preceding = Array.from(candidates).findLast(
      (node) =>
        !node.contains(element) &&
        !!(element.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_PRECEDING),
    )
    if (preceding) {
      const text = cleanLabelText(preceding.innerText)
      if (text) return text
    }
  }

  return ""
}

export function extractDescription(element) {
  const describedBy = element.getAttribute("aria-describedby")
  if (describedBy) {
    const root = element.getRootNode()
    const joined = describedBy
      .split(/\s+/)
      .filter(Boolean)
      .map((id) => {
        try {
          return root.querySelector(`#${CSS.escape(id)}`)?.innerText.trim() ?? ""
        } catch {
          return ""
        }
      })
      .filter(Boolean)
      .join(" ")
    if (joined) return truncateDescription(joined)
  }

  let parent = element.parentElement
  for (let hop = 0; hop < MAX_PARENT_HOPS && parent; hop++, parent = parent.parentElement) {
    const candidates = Array.from(parent.querySelectorAll(DESCRIPTION_SELECTOR)).filter(
      (node) => !node.contains(element),
    )
    if (candidates.length === 0) continue

    const preceding = candidates.findLast(
      (node) =>
        !!(element.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_PRECEDING),
    )
    const chosen = preceding ?? candidates[0]
    const text = chosen.innerText.trim().replace(/\s+/g, " ")
    if (text) return truncateDescription(text)
  }

  return ""
}
