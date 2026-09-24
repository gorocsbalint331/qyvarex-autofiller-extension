// @ts-nocheck
/**
 * Catsone answer shaping — map state/country onto regular field labels.
 */

const STATE_LABELS = new Set(["state", "state province"])
const COUNTRY_LABELS = new Set([
  "country",
  "country region",
  "country territory",
  "country of residence",
  "residence country",
])

function normalizeLabel(label) {
  return label
    .toLowerCase()
    .replace(/[^a-z]+/g, " ")
    .trim()
}

function trimOrNull(value) {
  const trimmed = value?.trim()
  return trimmed || null
}

export function formatAnswer(answer) {
  const state = trimOrNull(answer.state)
  const country = trimOrNull(answer.country)

  if (answer.regular) {
    Object.keys(answer.regular).forEach((key) => {
      const normalized = normalizeLabel(key)
      if (state && STATE_LABELS.has(normalized)) {
        answer.regular[key] = state
      }
      if (country && COUNTRY_LABELS.has(normalized)) {
        answer.regular[key] = country
      }
    })
  }

  return answer
}
