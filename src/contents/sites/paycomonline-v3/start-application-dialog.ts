// @ts-nocheck
/**
 * Paycom Online v3 — dismiss start-application and resume-parser dialogs.
 */

import * as delay from "../../../utils/delay.js"

const DIALOG_SELECTOR = '[role="dialog"][aria-modal="true"]'
const START_APPLICATION_TITLE = "start application"
const APPLY_MANUALLY = "apply manually"
const AUTOFILL_WITH_RESUME = "autofill with resume/cv"
const RESUME_PARSER_TITLE = "new resume/cv uploaded"
const ATTACH_ONLY =
  "no, only attach the new resume/cv."
const REPLACE_ALL =
  "yes, replace all existing entries with the new resume/cv information."

function normalizeText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function isVisible(el) {
  const rect = el.getBoundingClientRect()
  const style = el.ownerDocument?.defaultView?.getComputedStyle(el)
  return (
    rect.width > 0 &&
    rect.height > 0 &&
    style?.display !== "none" &&
    style?.visibility !== "hidden"
  )
}

function getVisibleDialogTitle(dialog) {
  const headings = Array.from(
    dialog.querySelectorAll("h1, h2, h3, h4, h5, h6"),
  )
  return normalizeText(headings.find(isVisible)?.textContent)
}

function getVisibleDialogs(root) {
  return Array.from(root.querySelectorAll(DIALOG_SELECTOR)).filter(isVisible)
}

function findDialogButton(dialog, text) {
  return (
    Array.from(dialog.querySelectorAll("button")).find(
      (button) => isVisible(button) && normalizeText(button.textContent) === text,
    ) ?? null
  )
}

function findTargetDialog(root, config) {
  const dialogs = getVisibleDialogs(root)
  const dialog = dialogs.find(
    (node) => getVisibleDialogTitle(node) === config.title,
  )
  return dialog
    ? { dialog, topmost: dialogs[dialogs.length - 1] === dialog }
    : null
}

async function dismissDialog(config, root, options) {
  const timeoutMs = options.timeoutMs ?? config.defaultTimeoutMs
  const intervalMs = options.intervalMs ?? 50
  const startedAt = Date.now()
  let match = findTargetDialog(root, config)

  while (!match && Date.now() - startedAt < timeoutMs) {
    await delay.delay(intervalMs)
    match = findTargetDialog(root, config)
  }

  if (!match) return "not-found"
  if (!match.topmost) return "blocked"

  const actionButton = findDialogButton(match.dialog, config.actionText)
  const companionButton = findDialogButton(
    match.dialog,
    config.companionButtonText,
  )
  if (!actionButton || !companionButton) return "button-missing"

  const activateButton = options.activateButton ?? ((el) => el.click())
  activateButton(actionButton)

  const closeStartedAt = Date.now()
  while (
    match.dialog.isConnected &&
    isVisible(match.dialog) &&
    Date.now() - closeStartedAt < timeoutMs
  ) {
    await delay.delay(intervalMs)
  }

  return match.dialog.isConnected && isVisible(match.dialog)
    ? "still-open"
    : "closed"
}

export function dismissPaycomStartApplicationDialog(
  root = document,
  options = {},
) {
  return dismissDialog(
    {
      title: START_APPLICATION_TITLE,
      actionText: APPLY_MANUALLY,
      companionButtonText: AUTOFILL_WITH_RESUME,
      defaultTimeoutMs: 750,
    },
    root,
    options,
  )
}

export function dismissPaycomResumeParserDialog(root = document, options = {}) {
  return dismissDialog(
    {
      title: RESUME_PARSER_TITLE,
      actionText: ATTACH_ONLY,
      companionButtonText: REPLACE_ALL,
      defaultTimeoutMs: 3e3,
    },
    root,
    options,
  )
}
