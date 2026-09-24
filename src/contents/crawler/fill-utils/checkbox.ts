// @ts-nocheck
/**
 * Default checkbox fill: focus, check, change, optional ancestor role=checkbox click.
 */

import { getFirstOrderedNode } from "../../../core/xpath.ts"

export async function fillCheckbox(element, dispatchClick = true) {
  if (element.checked) return

  element.focus()
  element.dispatchEvent(
    new Event("focus", {
      bubbles: true,
      cancelable: false,
    }),
  )
  element.checked = true

  if (dispatchClick) {
    element.dispatchEvent(
      new Event("click", {
        bubbles: true,
        cancelable: false,
      }),
    )
  }

  element.dispatchEvent(
    new Event("change", {
      bubbles: true,
      cancelable: false,
    }),
  )

  const checkboxAncestor = getFirstOrderedNode(
    './ancestor::div[@role="checkbox"]',
    element,
  )
  if (checkboxAncestor) {
    checkboxAncestor.dispatchEvent(
      new Event("click", {
        bubbles: true,
        cancelable: false,
      }),
    )
  }

  element.blur()
  element.dispatchEvent(
    new Event("blur", {
      bubbles: true,
      cancelable: false,
    }),
  )
}
