// @ts-nocheck
/**
 * Adobe Careers autofill / submit snapshot tracking.
 */

import * as rules from "./rules.ts"
import * as track from "../../methods/track.js"
import * as autofillAnswerPair from "../autofill-answer-pair-tracking.js"
import * as xpath from "../../../core/xpath.js"
import * as delayUtil from "../../../utils/delay.js"

const BUTTON_SELECTOR =
  'button, input[type="submit"], input[type="button"], a[role="button"], [role="button"]'
const FORWARD_LABEL = /\b(submit|continue|next|apply)\b/i
const BACK_LABEL = /\b(back|previous|cancel|delete|remove|upload|add|linkedin)\b/i

function buttonLabel(el) {
  return (
    el.textContent?.trim() ||
    el.getAttribute("aria-label")?.trim() ||
    el.getAttribute("value")?.trim() ||
    ""
  )
}

function buttonSearchText(el) {
  return [
    el.textContent,
    el.getAttribute("aria-label"),
    el.getAttribute("value"),
    el.id,
    el.getAttribute("name"),
    typeof el.className === "string" ? el.className : "",
  ]
    .map((part) => (typeof part === "string" ? part.trim() : ""))
    .filter(Boolean)
    .join(" ")
}

function isForwardNavigateButton(el) {
  const type = el.getAttribute("type")?.trim().toLowerCase() || ""
  if (
    el.tagName.toLowerCase() === "input" &&
    !["submit", "button"].includes(type)
  ) {
    return false
  }

  const search = buttonSearchText(el)
  if (BACK_LABEL.test(search)) return false

  const className = typeof el.className === "string" ? el.className : ""
  return (
    type === "submit" ||
    /\bsubmit\b/i.test(className) ||
    FORWARD_LABEL.test(search)
  )
}

function resolveTrackingButton(target) {
  if (!(target instanceof HTMLElement)) return null
  const button = target.closest(BUTTON_SELECTOR)
  return button && isForwardNavigateButton(button) ? button : null
}

export function buildAdobeAutofillTrackingBaseline(snapshot, answer) {
  const falcon =
    snapshot.falcon ??
    autofillAnswerPair.buildFalconAutofillAnswerPairData(answer)
  return falcon ? { ...snapshot, falcon } : snapshot
}

export function buildAdobeSnapshotTrackingPayload({
  formUrl,
  answer,
  autofillSnapshot,
  submitSnapshot,
}) {
  const falcon =
    autofillSnapshot.falcon ??
    autofillAnswerPair.buildFalconAutofillAnswerPairData(answer)

  return {
    formUrl,
    autofillSnapshot: autofillSnapshot.formSnapshot,
    submitSnapshot: submitSnapshot.formSnapshot,
    additionalAutofillData: autofillSnapshot.additionalFormSnapshotData,
    additionalSubmitData: submitSnapshot.additionalFormSnapshotData,
    extraData: falcon ? { falcon } : undefined,
    source: "adobe",
  }
}

export function captureAdobeTrackingSnapshot(overrides = {}) {
  const {
    extractRulesFn = rules.extractRules,
    getEduRulesFn = rules.getEduRules,
    getFormSnapshotFn = rules.getFormSnapshot,
    getAdditionalFormSnapshotDataFn = rules.getAdditionalFormSnapshotData,
  } = overrides

  const allRules = extractRulesFn()
  const eduRules = getEduRulesFn()
  return {
    formSnapshot: getFormSnapshotFn(allRules, eduRules),
    additionalFormSnapshotData: getAdditionalFormSnapshotDataFn(
      allRules,
      eduRules,
    ),
  }
}

function snapshotKey(snapshot) {
  return JSON.stringify(snapshot)
}

export async function waitForSettledAdobeTrackingSnapshot(options = {}) {
  const {
    captureFn = () => captureAdobeTrackingSnapshot(),
    delayFn = delayUtil.delay,
    minWaitMs = 3000,
    intervalMs = 1000,
    stableRepeats = 2,
    maxWaitMs = 10000,
  } = options

  if (minWaitMs > 0) await delayFn(minWaitMs)

  let snapshot = captureFn()
  let key = snapshotKey(snapshot)
  let stableCount = 0

  if (maxWaitMs <= 0 || intervalMs <= 0) return snapshot

  const maxIterations = Math.max(1, Math.ceil(maxWaitMs / intervalMs))
  for (let i = 0; i < maxIterations; i++) {
    await delayFn(intervalMs)
    snapshot = captureFn()
    const nextKey = snapshotKey(snapshot)
    if (nextKey === key) {
      stableCount += 1
      if (stableCount >= stableRepeats) return snapshot
      continue
    }
    stableCount = 0
    key = nextKey
  }

  return snapshot
}

export function bindAdobeSnapshotTracking({
  getAnswer,
  getAutofillSnapshot,
  setAutofillSnapshot,
  fieldStatus,
  timeTrace,
  root = document,
  formUrl = () => window.location.href,
}) {
  const controller = new AbortController()

  root.addEventListener(
    "click",
    (clickEvent) => {
      if (!resolveTrackingButton(clickEvent.target)) return
      try {
        const answer = getAnswer()
        const autofillSnapshot = buildAdobeAutofillTrackingBaseline(
          getAutofillSnapshot(),
          answer,
        )
        const submitSnapshot = captureAdobeTrackingSnapshot()
        autofillAnswerPair.sendAutofillAnswerPairEvent(
          buildAdobeSnapshotTrackingPayload({
            formUrl: formUrl(),
            answer,
            autofillSnapshot,
            submitSnapshot,
          }),
        )
        setAutofillSnapshot({
          ...submitSnapshot,
          falcon: autofillSnapshot.falcon,
        })
      } catch (error) {
        console.error("[Adobe] submit snapshot:", error)
      }
    },
    { capture: true, signal: controller.signal },
  )

  const submitButton = xpath.getFirstOrderedNodeSafe(
    '//button[contains(@type, "submit")] | //button[contains(@class, "submit")]',
    root.body,
  )
  if (submitButton) {
    track.bindSubmitButton(
      buttonLabel(submitButton) || "Submit",
      fieldStatus,
      timeTrace,
    )
  }

  return controller
}
