// @ts-nocheck
/**
 * iCIMS job-detail → apply flow: persist and resume pending autofill intent.
 */

const STORAGE_KEY = "jobright:icims:job-detail-pending-autofill"
const INTENT_TTL_MS = 6e4
const JOB_FLOW_PATH_PATTERN =
  /^\/jobs\/(\d+)\/(?:[^/]+\/)?(job|login|profile|candidate|questions|questionnaire)\/?$/i

function logContinuation(reason) {
  console.info(
    `[IcimsJobDetailContinuation] ${JSON.stringify({ reason })}`,
  )
}

export function clearIcimsJobDetailAutofill(storage) {
  try {
    storage.removeItem(STORAGE_KEY)
  } catch {
    logContinuation("storage-clear-unavailable")
  }
}

export function saveIcimsJobDetailAutofill(
  storage,
  href,
  payload,
  startedAt = Date.now(),
  sourceSignature,
) {
  try {
    let url = new URL(href)
    let jobId = url.pathname.match(JOB_FLOW_PATH_PATTERN)?.[1]
    if (!url.hostname.endsWith(".icims.com") || !jobId) return false

    storage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...payload,
        origin: url.origin,
        jobId,
        sourceSignature,
        sourcePath: url.pathname,
        startedAt,
      }),
    )
    logContinuation("intent-saved")
    return true
  } catch {
    logContinuation("storage-save-unavailable")
    return false
  }
}

export async function resumeIcimsJobDetailAutofill(
  storage,
  href,
  waitForForm,
  runAutofill,
  getContinuationSignature,
  onUnchangedOrFinal,
  beforeWait,
) {
  try {
    let raw = storage.getItem(STORAGE_KEY)
    if (!raw) return

    let intent = JSON.parse(raw)
    let ageMs = Date.now() - intent.startedAt
    if (!Number.isFinite(intent.startedAt) || ageMs < 0 || ageMs > INTENT_TTL_MS) {
      clearIcimsJobDetailAutofill(storage)
      logContinuation("intent-expired")
      return
    }

    let url = new URL(href)
    let pathMatch = url.pathname.match(JOB_FLOW_PATH_PATTERN)
    if (url.origin !== intent.origin || pathMatch?.[1] !== intent.jobId) {
      clearIcimsJobDetailAutofill(storage)
      logContinuation("unrelated-destination")
      return
    }

    if (
      pathMatch[2].toLowerCase() === "job" &&
      url.searchParams.get("mode") !== "apply" &&
      url.searchParams.get("apply") !== "yes"
    ) {
      return
    }

    beforeWait?.()
    logContinuation("waiting-for-form")
    let formReady = await waitForForm()
    if (storage.getItem(STORAGE_KEY) !== raw) return

    clearIcimsJobDetailAutofill(storage)
    if (storage.getItem(STORAGE_KEY) === raw) {
      logContinuation("intent-consume-failed")
      return
    }

    if (!formReady || Date.now() - intent.startedAt > INTENT_TTL_MS) {
      logContinuation("form-not-ready")
      return
    }

    let signature = getContinuationSignature?.()
    if (
      signature === null ||
      (intent.sourceSignature !== undefined &&
        intent.sourcePath === url.pathname &&
        signature === intent.sourceSignature)
    ) {
      if (signature !== null) onUnchangedOrFinal?.(intent)
      logContinuation("unchanged-or-final-page")
      return
    }

    logContinuation("resume-autofill")
    await runAutofill(intent)
    logContinuation("autofill-finished")
  } catch {
    clearIcimsJobDetailAutofill(storage)
    logContinuation("resume-failed")
  }
}
