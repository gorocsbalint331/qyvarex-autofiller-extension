// @ts-nocheck
/**
 * Eightfold CareerHub — stepper / profile surface helpers (readable TypeScript source of truth).
 */

const STEP_ID_BY_LABEL = [
  { id: "personal-info", match: /personal|profile|contact/i },
  { id: "preferences", match: /prefer/i },
  { id: "experience", match: /experience|work|employment/i },
  { id: "education", match: /educat|school|academ/i },
]

function resolveCareerHubStepId(label) {
  const text = String(label || "")
    .replace(/\s+/g, " ")
    .trim()
  if (!text) return null
  for (const entry of STEP_ID_BY_LABEL) {
    if (entry.match.test(text)) return entry.id
  }
  const key = text.toLowerCase()
  if (
    key === "personal-info" ||
    key === "preferences" ||
    key === "experience" ||
    key === "education"
  ) {
    return key
  }
  return null
}

export function getCareerHubActiveStep(root) {
  const scope = root || document
  const active =
    scope.querySelector('[data-testid="stepper"] [aria-current="step"]') ||
    scope.querySelector(
      ".stepper .active, .steps .active, [class*='step'][class*='active']",
    )
  if (!active) return null
  const label =
    active.getAttribute?.("aria-label") ||
    active.getAttribute?.("data-testid") ||
    active.textContent ||
    ""
  return resolveCareerHubStepId(label)
}

export function getCareerHubStepScopeKey(stepOrEl) {
  if (!stepOrEl) return "default"
  if (typeof stepOrEl === "string") {
    return resolveCareerHubStepId(stepOrEl) || stepOrEl
  }
  const el = stepOrEl.el || stepOrEl
  const label = (el.getAttribute?.("aria-label") || el.textContent || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
  return resolveCareerHubStepId(label) || label || "default"
}

export function hasCareerHubProfileSurface(root) {
  const scope = root || document
  return !!(
    scope.querySelector('[data-testid="profile"]') ||
    scope.querySelector(
      ".profile-surface, .careerhub-profile, [class*='Profile']",
    )
  )
}
