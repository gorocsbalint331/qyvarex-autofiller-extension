/**
 * Minimal ~contents shim for the headless engine runtime.
 * Avoids pulling the original contents bootstrap (inject / React UI).
 */
var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
n.defineInteropFlag(r)
n.export(r, "HOST_ID", () => HOST_ID)
n.export(r, "jobId", () => jobId)
n.export(r, "agentTailorId", () => agentTailorId)
n.export(r, "agentResumeId", () => agentResumeId)
n.export(r, "agentOriginalResume", () => agentOriginalResume)
n.export(r, "setCurrentJobId", () => setCurrentJobId)
n.export(r, "setAutofillInstance", () => setAutofillInstance)
n.export(r, "getAutofillInstance", () => getAutofillInstance)
n.export(r, "cancelAutofillInstance", () => cancelAutofillInstance)

var HOST_ID = "qyvarex-engine-helper"
var jobId = null
var agentTailorId = null
var agentResumeId = null
var agentOriginalResume = true
var _instance = null

function setCurrentJobId(next) {
  jobId = next || null
}

function setAutofillInstance(instance) {
  _instance = instance || null
}

function getAutofillInstance() {
  return _instance
}

function cancelAutofillInstance() {
  try {
    _instance?.cancel?.()
  } catch {}
  _instance = null
}
