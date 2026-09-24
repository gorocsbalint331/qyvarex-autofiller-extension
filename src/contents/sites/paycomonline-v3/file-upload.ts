// @ts-nocheck
/**
 * Paycom Online v3 — resolve resume / cover-letter file inputs.
 */

const FILE_INPUT_SELECTOR = 'input[type="file"]'
const MAX_PARENT_WALK = 8
const FIELD_IDS = {
  resume: "personal-information-resume-field",
  coverLetter: "personal-information-cover-letter-field",
}

function normalizeText(text) {
  return (text || "").replace(/\s+/g, " ").trim().toLowerCase()
}

function matchesUploadKind(text, kind) {
  return kind === "coverLetter"
    ? /\bcover\s+letter\b/.test(text)
    : /\bresume(?:\s*\/\s*cv)?\b|\bcv\b/.test(text)
}

export function getPaycomFileUploadInput(kind, root = document) {
  const byId = root.getElementById?.(FIELD_IDS[kind])?.querySelector(
    FILE_INPUT_SELECTOR,
  )
  if (byId) return byId

  const inputs = Array.from(root.querySelectorAll(FILE_INPUT_SELECTOR))
  for (const input of inputs) {
    let parent = input.parentElement
    for (
      let depth = 0;
      parent && depth < MAX_PARENT_WALK;
      depth += 1, parent = parent.parentElement
    ) {
      const fileInputs = parent.querySelectorAll(FILE_INPUT_SELECTOR)
      if (
        fileInputs.length === 1 &&
        matchesUploadKind(normalizeText(parent.textContent), kind)
      ) {
        return input
      }
    }
  }
  return null
}
