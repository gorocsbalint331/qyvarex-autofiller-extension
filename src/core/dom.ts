/** Shared DOM helpers (incremental port). */

export function isVisible(el: Element | null): boolean {
  if (!(el instanceof HTMLElement)) return false
  const style = window.getComputedStyle(el)
  if (style.display === "none" || style.visibility === "hidden") return false
  const rect = el.getBoundingClientRect()
  return rect.width > 0 && rect.height > 0
}

export function triggerEvents(
  el: Element,
  events: Array<keyof HTMLElementEventMap | string> = [
    "input",
    "change",
    "blur"
  ]
): void {
  for (const name of events) {
    el.dispatchEvent(new Event(name, { bubbles: true }))
  }
}

export function setNativeValue(
  el: HTMLInputElement | HTMLTextAreaElement,
  value: string
): void {
  const proto = Object.getPrototypeOf(el)
  const desc = Object.getOwnPropertyDescriptor(proto, "value")
  desc?.set?.call(el, value)
  triggerEvents(el)
}
