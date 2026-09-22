import { isExactChoiceMatch } from "~contents/methods/choice-match"
import { delay } from "~contents/crawler/utils/delay"

export async function fillCheckbox(
  el: HTMLInputElement | null | undefined,
  checked = true
): Promise<void> {
  if (!el) return
  el.focus()
  if (el.checked !== checked) {
    el.click()
    await delay(30)
  }
  el.checked = checked
  el.dispatchEvent(new Event("change", { bubbles: true }))
  const role = el.closest('[role="checkbox"]') as HTMLElement | null
  if (role) role.click()
}

export async function fillCheckboxesByLabels(
  checkboxes: HTMLInputElement[],
  wants: string[]
): Promise<number> {
  let filled = 0
  for (const want of wants) {
    for (const box of checkboxes) {
      const label =
        (box.id &&
          document.querySelector(`label[for="${CSS.escape(box.id)}"]`)
            ?.textContent) ||
        box.closest("label")?.textContent ||
        box.getAttribute("aria-label") ||
        box.value
      if (isExactChoiceMatch(label, want)) {
        await fillCheckbox(box, true)
        filled += 1
        break
      }
    }
  }
  return filled
}

export async function fillRadioByLabel(
  radios: HTMLInputElement[],
  want: string
): Promise<boolean> {
  for (const radio of radios) {
    const label =
      (radio.id &&
        document.querySelector(`label[for="${CSS.escape(radio.id)}"]`)
          ?.textContent) ||
      radio.closest("label")?.textContent ||
      radio.getAttribute("aria-label") ||
      radio.value
    if (isExactChoiceMatch(label, want)) {
      if (!radio.checked) {
        radio.click()
        radio.checked = true
        radio.dispatchEvent(new Event("change", { bubbles: true }))
        radio.dispatchEvent(new Event("click", { bubbles: true }))
      }
      return true
    }
  }
  return false
}
