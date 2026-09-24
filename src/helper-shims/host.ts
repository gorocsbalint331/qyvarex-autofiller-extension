/**
 * Contents host API used by the Jobright helper UI / fillers.
 * Shims src/contents.ts so the injected helper does not re-run Plasmo CS bootstrap.
 */
export const HOST_ID = "jobright-helper-plugin"

const JOB_ID_QUERY_KEY = "jr_id"
const AUTOFILL_INSTANCE_KEY = "__jobrightAutofillInstance"

const initialSearchParams = new URLSearchParams(window.location.search)

export let jobId: string | null = initialSearchParams.get(JOB_ID_QUERY_KEY)
export const agentTailorId = initialSearchParams.get("a_t_id")
export const agentResumeId = initialSearchParams.get("a_r_id")
export const agentOriginalResume =
  initialSearchParams.get("useOriginalResume") === "true"

export function setCurrentJobId(nextJobId: string | null) {
  jobId = nextJobId || null
}

export function setAutofillInstance(instance: any) {
  ;(globalThis as any)[AUTOFILL_INSTANCE_KEY] = instance || null
}

export function getAutofillInstance() {
  return (globalThis as any)[AUTOFILL_INSTANCE_KEY] || null
}

export function cancelAutofillInstance(instance?: any) {
  const current = instance || getAutofillInstance()
  try {
    current?.cancel?.()
  } catch {
    /* ignore */
  }
  if (!instance || instance === getAutofillInstance()) {
    setAutofillInstance(null)
  }
}

/** Plasmo CS config — unused inside injected helper, kept for type compatibility. */
export const config = {
  matches: ["<all_urls>"],
  all_frames: true,
  run_at: "document_start" as const,
}
