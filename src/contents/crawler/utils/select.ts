import {
  findExactChoice,
  fuzzyFindBest,
  normalizeChoiceText
} from "~contents/methods/choice-match"
import { delay } from "~contents/crawler/utils/delay"

export function findMatchOption(
  select: HTMLSelectElement,
  want: string
): HTMLOptionElement | undefined {
  const options = Array.from(select.options)
  return (
    findExactChoice(
      options,
      want,
      (o) => o.textContent || "",
      (o) => o.value
    ) ||
    fuzzyFindBest(options, want, (o) => (o.textContent || "").trim(), 0.55)
  )
}

export async function fillNativeSelect(
  select: HTMLSelectElement | null | undefined,
  value: string | string[]
): Promise<boolean> {
  if (!select) return false
  const want = Array.isArray(value) ? value[0] : value
  if (!want?.trim()) return false

  select.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay(50)

  const opt = findMatchOption(select, want)
  if (!opt) {
    // Case-insensitive exact fallback
    const lower = normalizeChoiceText(want)
    const hit = Array.from(select.options).find(
      (o) =>
        normalizeChoiceText(o.textContent || "") === lower ||
        normalizeChoiceText(o.value) === lower
    )
    if (!hit) return false
    select.value = hit.value
  } else {
    select.value = opt.value
  }

  select.dispatchEvent(new Event("input", { bubbles: true }))
  select.dispatchEvent(new Event("change", { bubbles: true }))
  return true
}
