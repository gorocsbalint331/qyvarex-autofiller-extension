// @ts-nocheck
/**
 * Fill a native input/textarea via the prototype value setter + input/change events.
 */

export async function fillDefaultInputField(element, value) {
  if (!element) {
    console.error("element is null")
    return
  }

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
