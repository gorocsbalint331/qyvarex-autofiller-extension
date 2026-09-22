/**
 * Native input fill with React-compatible value setter (engine input.js port).
 */

export async function fillDefaultInputField(
  el: HTMLInputElement | HTMLTextAreaElement | null | undefined,
  value: string
): Promise<void> {
  if (!el) {
    console.error("[clean-fill] element is null")
    return
  }

  el.focus()
  const proto = Object.getPrototypeOf(el)
  const desc = Object.getOwnPropertyDescriptor(proto, "value")
  if (desc?.set) {
    desc.set.call(el, value)
  } else {
    el.value = value
  }

  el.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }))
  el.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }))
  el.dispatchEvent(new Event("blur"))
  el.dispatchEvent(
    new KeyboardEvent("keydown", { bubbles: true, cancelable: true, key: "Enter", keyCode: 13 })
  )
  el.dispatchEvent(
    new KeyboardEvent("keyup", { bubbles: true, cancelable: true, key: "Enter", keyCode: 13 })
  )
  el.blur()
  el.dispatchEvent(new FocusEvent("focus", { bubbles: true, cancelable: true }))
  el.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }))
  el.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }))
  el.dispatchEvent(new FocusEvent("blur", { bubbles: true, cancelable: true }))
}
