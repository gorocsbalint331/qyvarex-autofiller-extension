/**
 * Parcel module id: llTaO
 * Resolved path: src/contents/sites/eightfold/steps.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *
 * Restored under src/ (root steps.js was missing on disk). Behavior inferred
 * from inventory export names + eightfold callers.
 */

var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js")
helpers.defineInteropFlag(r)
helpers.export(r, "getCareerHubActiveStep", () => getCareerHubActiveStep)
helpers.export(r, "getCareerHubStepScopeKey", () => getCareerHubStepScopeKey)
helpers.export(r, "hasCareerHubProfileSurface", () => hasCareerHubProfileSurface)

function getCareerHubActiveStep(root) {
  var scope = root || document
  var active =
    scope.querySelector('[data-testid="stepper"] [aria-current="step"]') ||
    scope.querySelector(".stepper .active, .steps .active, [class*='step'][class*='active']")
  if (!active) return null
  return {
    el: active,
    label: (active.textContent || "").replace(/\s+/g, " ").trim(),
    key: getCareerHubStepScopeKey(active)
  }
}

function getCareerHubStepScopeKey(stepOrEl) {
  if (!stepOrEl) return "default"
  if (typeof stepOrEl === "string") return stepOrEl
  var el = stepOrEl.el || stepOrEl
  var label = (el.getAttribute?.("aria-label") || el.textContent || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
  return label || "default"
}

function hasCareerHubProfileSurface(root) {
  var scope = root || document
  return !!(
    scope.querySelector('[data-testid="profile"]') ||
    scope.querySelector(".profile-surface, .careerhub-profile, [class*='Profile']")
  )
}
