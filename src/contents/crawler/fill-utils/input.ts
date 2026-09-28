// @ts-nocheck
/**
 * Fill a native input/textarea via the prototype value setter + input/change events.
 */

/** Number inputs drop non-numeric values, so keep only the leading figure ("60000 EUR" → "60000"). */
function coerceForNumberInput(element, value) {
  if (element?.type !== "number" || typeof value !== "string") return value
  if (value.trim() === "" || Number.isFinite(Number(value))) return value
  const match = value.match(/\d{1,3}(?:[,.' ]\d{3})+|\d+(?:\.\d+)?/)
  return match ? match[0].replace(/[,' ]/g, "").replace(/\.(?=\d{3}\b)/g, "") : value
}

export async function fillDefaultInputField(element, value) {
  if (!element) {
    console.error("element is null")
    return
  }
  value = coerceForNumberInput(element, value)

  element.focus()
  const proto = Object.getPrototypeOf(element)
  if (!Object.getOwnPropertyDescriptor(proto, "value")) return

  const valueSetter = Object.getOwnPropertyDescriptor(proto, "value").set
  valueSetter.call(element, value)

  element.dispatchEvent(
    new Event("input", {
      bubbles: true,
      cancelable: true,
    }),
  )
  element.dispatchEvent(
    new Event("change", {
      bubbles: true,
      cancelable: true,
    }),
  )
  element.dispatchEvent(new Event("blur"))
  element.dispatchEvent(
    new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      keyCode: 13,
    }),
  )
  element.dispatchEvent(
    new KeyboardEvent("keyup", {
      bubbles: true,
      cancelable: true,
      keyCode: 13,
    }),
  )
  element.blur()
  element.dispatchEvent(
    new FocusEvent("focus", {
      bubbles: true,
      cancelable: true,
    }),
  )
  element.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    }),
  )
  element.dispatchEvent(
    new Event("change", {
      bubbles: true,
      cancelable: true,
    }),
  )
  element.dispatchEvent(
    new FocusEvent("blur", {
      bubbles: true,
      cancelable: true,
    }),
  )
}
