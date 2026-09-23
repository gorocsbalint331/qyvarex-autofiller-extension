// @ts-nocheck
/**
 * Autofill progress / submit-status messaging to the top frame and background.
 */

import { intersection, isEmpty } from "lodash-es"
import { sendToBackground } from "@plasmohq/messaging"
import {
  AUTOFILL_PROGRESS_PROTOCOL_VERSION,
  createAutofillProgressSessionId,
} from "../../core/autofill-progress-protocol.ts"
import { MESSAGE_EVENTS } from "../../core/enums.ts"
import {
  collectFormDataWithRepeatingGroups,
  getExtensionVersion,
} from "../../core/utils.ts"
import { escapeXPath, getFirstOrderedNode } from "../../core/xpath.ts"
import { cleanObject, isStringNumber } from "../../utils/string.ts"

export function dedup_fields(missingFields, filledFields) {
  const seen = new Set()
  const uniqueMissing = []
  const uniqueFilled = []

  for (let field of missingFields) {
    if (!field) continue
    field = field.replace("*", "").trim()
    if (seen.has(field)) continue
    uniqueMissing.push(field)
    seen.add(field)
  }

  seen.clear()
  for (let field of filledFields) {
    if (!field) continue
    field = field.replace("*", "").trim()
    if (seen.has(field)) continue
    uniqueFilled.push(field)
    seen.add(field)
  }

  return {
    missingFields: uniqueMissing,
    filledFields: uniqueFilled,
  }
}

function postProgressToTop(data) {
  if (typeof window === "undefined") return
  window.top.postMessage(
    cleanObject({
      type: MESSAGE_EVENTS.updateResultFromIframe,
      data,
    }),
    { targetOrigin: "*" },
  )
}

export function sendProgressMessage(
  progress,
  sessionId = createAutofillProgressSessionId(),
  userAutoFillResponse,
) {
  postProgressToTop({
    version: AUTOFILL_PROGRESS_PROTOCOL_VERSION,
    kind: "snapshot",
    sessionId,
    data: {
      missingFields: progress.missingFields,
      filledFields: progress.filledFields,
      fieldRequiredStatus: progress.fieldRequiredStatus.map((field) => ({
        label: field.label,
        required: field.required,
      })),
      fieldItemResults: progress.fieldItemResults,
      sectionResults: progress.sectionResults,
      currentField: progress.currentField ?? null,
      userAutoFillResponse,
    },
  })
}

export function sendProgressPatchMessage(patch) {
  postProgressToTop({
    version: AUTOFILL_PROGRESS_PROTOCOL_VERSION,
    kind: "patch",
    ...patch,
  })
}

export function sendHttpStatusMessage(httpStatus) {
  if (window === window.top) return
  window.top?.postMessage(
    {
      type: MESSAGE_EVENTS.sendHttpStatusIframe,
      httpStatus: isStringNumber(httpStatus) ? Number(httpStatus) : httpStatus,
    },
    { targetOrigin: "*" },
  )
}

export function generateSubmitStatus(status, progress, timing) {
  const totalFields = progress.fieldRequiredStatus.map((field) => field.label)
  const requiredFields = progress.fieldRequiredStatus
    .filter((field) => field.required)
    .map((field) => field.label)
  const filledAmongTotal = intersection(totalFields, progress.filledFields)
  const filledRequiredFields = intersection(requiredFields, progress.filledFields)

  return {
    status,
    url: window.location.href,
    version: getExtensionVersion(),
    requiredFields,
    missingFields: progress.missingFields,
    filledFields: progress.filledFields,
    filledCount: filledAmongTotal.length,
    requiredCount: requiredFields.length,
    filledRequiredCount: filledRequiredFields.length,
    filledRequiredFields,
    totalCount: totalFields.length,
    totalFields,
    userInput: [],
    rulesTime:
      timing.rulesParseStartTime && timing.requestStartTime
        ? Number(
            (
              (timing.requestStartTime - timing.rulesParseStartTime) /
              1000
            ).toFixed(2),
          )
        : 0,
    requestTime:
      timing.requestStartTime && timing.fillStartTime
        ? Number(
            ((timing.fillStartTime - timing.requestStartTime) / 1000).toFixed(2),
          )
        : 0,
    fillTime: timing.fillStartTime
      ? Number(((Date.now() - timing.fillStartTime) / 1000).toFixed(2))
      : 0,
    formData: collectFormDataWithRepeatingGroups(),
  }
}

export async function postStatus(status, progress, timing) {
  await sendToBackground({
    name: "saveSubmitStatus",
    body: {
      submitStatus: generateSubmitStatus(status, progress, timing),
      status: "filling",
    },
  })
}

export function getSubmitButton(submitButtonText) {
  if (!submitButtonText) return

  const wanted = submitButtonText.trim().toLowerCase()
  const candidates = Array.from(
    document.querySelectorAll(
      'button, input[type="submit"], input[type="button"], [role="button"]',
    ),
  )

  const exact = candidates.find((element) => {
    const text =
      element.textContent?.trim().toLowerCase() ||
      element.getAttribute("value")?.trim().toLowerCase() ||
      element.getAttribute("aria-label")?.trim().toLowerCase() ||
      ""
    return text === wanted
  })
  if (exact) return exact

  const partial = candidates.find((element) => {
    const text =
      element.textContent?.trim().toLowerCase() ||
      element.getAttribute("value")?.trim().toLowerCase() ||
      element.getAttribute("aria-label")?.trim().toLowerCase() ||
      ""
    return text.includes(wanted)
  })
  if (partial) return partial

  const xpath = `//*[contains(text(), ${escapeXPath(submitButtonText)}) or contains(@value, ${escapeXPath(submitButtonText)})]`
  return getFirstOrderedNode(xpath)
}

async function handleSubmitClick(event, progress, timing) {
  const target = event.target
  const submitStatus = generateSubmitStatus("submit", progress, timing)
  const errorSelector = ["field-error-msg", "helper-text--error"]
    .map((className) => `.${className}`)
    .join(",")
  const errors = document.querySelectorAll(errorSelector)

  if (isEmpty(errors)) {
    await sendToBackground({
      name: "saveSubmitStatus",
      body: {
        submitStatus,
        status: "submit",
        submittedForm: target,
      },
    })
  }
}

export function bindSubmitButton(submitButtonText, progress, timing, signal) {
  const button = getSubmitButton(submitButtonText)
  if (!button) return
  button.addEventListener(
    "click",
    (event) => handleSubmitClick(event, progress, timing),
    { signal },
  )
}
