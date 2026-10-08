// @ts-nocheck
/**
 * JustJoin apply dialog. The offer page hides name, email, and CV until Apply is clicked.
 */

import { isJustJoinOfferPage } from "./detect.ts"

const EXTENSION_UI =
  "#jobright-helper-plugin, #jobright-fork-helper-plugin, plasmo-csui, [id^='jobright']"

function outsideExtension(element) {
  return !element.closest?.(EXTENSION_UI)
}

function elementIsShown(element) {
  const style = window.getComputedStyle(element)
  if (style.display === "none" || style.visibility === "hidden") return false
  const rect = element.getBoundingClientRect()
  return rect.width > 0 && rect.height > 0
}

function controlText(element) {
  return (element.innerText || element.textContent || element.value || "")
    .replace(/\s+/g, " ")
    .trim()
}

function press(element) {
  element.scrollIntoView({ block: "center", inline: "nearest" })
  for (const type of ["pointerdown", "mousedown", "pointerup", "mouseup", "click"]) {
    element.dispatchEvent(
      new MouseEvent(type, { bubbles: true, cancelable: true, view: window }),
    )
  }
}

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms))
}

function fieldHint(element) {
  const explicit = element.id
    ? document.querySelector(`label[for="${CSS.escape(element.id)}"]`)?.innerText
    : ""
  return [
    element.getAttribute("placeholder") || "",
    element.getAttribute("aria-label") || "",
    element.getAttribute("name") || "",
    explicit || "",
    element.closest("label")?.innerText || "",
  ].join(" ")
}

export function justJoinApplyFormVisible() {
  if (!isJustJoinOfferPage()) return false
  const text = [...document.querySelectorAll("input, textarea")]
    .filter((element) => outsideExtension(element) && elementIsShown(element))
    .map(fieldHint)
    .join("\n")
  return /first and last name|your first and last name/i.test(text) && /\bemail\b/i.test(text)
}

export async function openJustJoinApplyForm() {
  if (!isJustJoinOfferPage() || justJoinApplyFormVisible()) return
  const button = [...document.querySelectorAll("button")].find((element) => {
    if (!outsideExtension(element) || !elementIsShown(element)) return false
    if (element.getAttribute("name") === "offer-apply_favorite-button") return false
    return /^apply$/i.test(controlText(element))
  })
  if (!button) return
  press(button)
  const started = Date.now()
  while (Date.now() - started < 8000) {
    if (justJoinApplyFormVisible()) return
    await sleep(200)
  }
}

export function acceptJustJoinConsent() {
  if (!justJoinApplyFormVisible()) return
  for (const box of document.querySelectorAll("input[type='checkbox'], [role='checkbox']")) {
    if (!outsideExtension(box)) continue
    const host = box.closest("label") || box.parentElement
    const text = `${host?.innerText || ""} ${box.getAttribute("aria-label") || ""}`
    if (!/consent|personal data|recruitment|przetwarzania|rodo/i.test(text)) continue
    const checked = box.checked === true || box.getAttribute("aria-checked") === "true"
    if (!checked) box.click()
  }
}

export function findJustJoinResumeInput() {
  if (!justJoinApplyFormVisible()) return null
  return [...document.querySelectorAll('input[type="file"]')].find(outsideExtension) || null
}
