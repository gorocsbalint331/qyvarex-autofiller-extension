// @ts-nocheck
/**
 * Avature — submit / next / finish button XPath helpers and event-target resolve.
 */

export const AVATURE_TRACKING_BUTTON_XPATH =
  '//button[(@name="save" or @id="saveButton" or contains(@id, "-save") or contains(concat(" ", normalize-space(@class), " "), " saveButton ") or contains(@class, "submit")) and not(contains(translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "previous")) and not(contains(translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "back")) and not(contains(translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "draft"))] | //button[@type="submit" and (contains(translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "next") or contains(translate(@value, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "continue") or contains(translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "continue") or contains(translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "submit") or contains(translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "apply") or contains(translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "finish"))] | //input[(@type="submit" or @type="button") and (@name="save" or @id="saveButton" or contains(@id, "-save") or contains(concat(" ", normalize-space(@class), " "), " saveButton ") or contains(@class, "submit")) and not(contains(translate(@value, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "previous")) and not(contains(translate(@value, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "back")) and not(contains(translate(@value, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "draft")) and not(contains(translate(@name, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "back")) and not(contains(translate(@id, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "back"))]'

export const AVATURE_SUBMIT_BUTTON_XPATH = AVATURE_TRACKING_BUTTON_XPATH

export const AVATURE_FINAL_SUBMIT_BUTTON_XPATH =
  '//button[@type="submit" and (@name="save" or @id="saveButton" or contains(@id, "-save") or contains(concat(" ", normalize-space(@class), " "), " saveButton ") or contains(@class, "submit")) and (contains(translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "submit") or contains(translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "apply") or contains(translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "finish")) and not(contains(translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "previous")) and not(contains(translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "back")) and not(contains(translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "draft"))] | //input[(@type="submit" or @type="button") and (@name="save" or @id="saveButton" or contains(@id, "-save") or contains(concat(" ", normalize-space(@class), " "), " saveButton ") or contains(@class, "submit")) and (contains(translate(@value, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "submit") or contains(translate(@value, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "apply") or contains(translate(@value, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "finish")) and not(contains(translate(@value, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "previous")) and not(contains(translate(@value, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "back")) and not(contains(translate(@value, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "draft")) and not(contains(translate(@name, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "back")) and not(contains(translate(@id, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "back"))]'

function hasClassToken(el, className) {
  return (el.getAttribute("class") || "").split(/\s+/).includes(className)
}

function buttonLabelText(el) {
  return (el.textContent || el.getAttribute("value") || el.getAttribute("aria-label") || "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase()
}

function isBackOrDraftButton(el) {
  const text = buttonLabelText(el)
  const name = (el.getAttribute("name") || "").toLowerCase()
  const id = (el.getAttribute("id") || "").toLowerCase()
  return (
    name === "back" ||
    id.includes("back") ||
    text.includes("previous") ||
    text.includes("back") ||
    text.includes("draft")
  )
}

function isSaveNamedButton(el) {
  const id = el.getAttribute("id") || ""
  const name = el.getAttribute("name") || ""
  return (
    name === "save" ||
    id === "saveButton" ||
    id.endsWith("-save") ||
    hasClassToken(el, "saveButton")
  )
}

function isAdvanceActionLabel(el) {
  const text = buttonLabelText(el)
  const value = (el.getAttribute("value") || "").trim().toLowerCase()
  return (
    /(^|\b)(next|continue|submit|apply|finish)(\b|$)/.test(text) ||
    value.includes("continue")
  )
}

export function getAvatureSubmitButtonFromEventTarget(target) {
  if (!target || typeof target.closest !== "function") return null
  const el = target.closest("button, input")
  if (!el) return null

  const tag = el.tagName.toLowerCase()
  if (tag !== "button" && tag !== "input") return null

  const type = (el.getAttribute("type") || "").toLowerCase()
  const className = el.getAttribute("class") || ""
  if (isBackOrDraftButton(el)) return null

  if (tag === "button") {
    return isSaveNamedButton(el) ||
      className.includes("submit") ||
      (type === "submit" && isAdvanceActionLabel(el))
      ? el
      : null
  }

  return (type === "submit" || type === "button") &&
    (isSaveNamedButton(el) || className.includes("submit"))
    ? el
    : null
}
