// @ts-nocheck
/**
 * Scroll validation-error fields into view in the autofill info editor.
 */

export const AUTOFILL_INFO_FIELD_ATTRIBUTE = "data-autofill-info-field"

export function scrollValidationFieldIntoView(container, fieldKey) {
  if (!container) return false

  const nodes = container.querySelectorAll(
    `[${AUTOFILL_INFO_FIELD_ATTRIBUTE}]`,
  )
  const target = Array.from(nodes).find(
    (node) => node.getAttribute(AUTOFILL_INFO_FIELD_ATTRIBUTE) === fieldKey,
  )
  if (!target) return false

  target.scrollIntoView({ behavior: "smooth", block: "center" })
  return true
}
