// @ts-nocheck
/**
 * iCIMS client-search resolve-trace payload builders for submit tracking.
 */

const MAX_ROUNDS = 5
const MAX_ACTIONS = MAX_ROUNDS + 1
const MAX_SEARCH_INPUT_LENGTH = 256
const MAX_CANDIDATE_COUNT = 25
const MAX_SELECTED_VALUE_LENGTH = 256
const MAX_SELECTED_TEXT_LENGTH = 512
const MAX_FAILURE_REASON_LENGTH = 512

const ALLOWED_ACTIONS = new Set([
  "REQUEST_SEARCH",
  "SELECT_OPTIONS",
  "SELECT_OPTION",
  "RETURN_EMPTY",
  "RETRYABLE_FAILURE",
])

function truncateString(value, maxLength) {
  if (typeof value !== "string") return ""
  return value.normalize("NFKC").trim().slice(0, maxLength)
}

function clampCandidateCount(value) {
  return typeof value === "number" && Number.isFinite(value)
    ? Math.min(MAX_CANDIDATE_COUNT, Math.max(0, Math.floor(value)))
    : 0
}

function normalizeRounds(rounds) {
  if (!Array.isArray(rounds)) return []
  return rounds
    .slice(0, MAX_ROUNDS)
    .map((round) => {
      let searchInput = truncateString(
        round?.searchInput,
        MAX_SEARCH_INPUT_LENGTH,
      )
      if (!searchInput) return null
      return {
        searchInput,
        candidateCount: clampCandidateCount(round?.candidateCount),
      }
    })
    .filter((round) => round !== null)
}

function normalizeActions(actions) {
  if (!Array.isArray(actions)) return []
  return actions
    .filter((action) => typeof action === "string" && ALLOWED_ACTIONS.has(action))
    .slice(0, MAX_ACTIONS)
}

function buildSelected(outcome, actions) {
  if (
    !outcome.success ||
    (!actions.includes("SELECT_OPTIONS") &&
      !actions.includes("SELECT_OPTION"))
  ) {
    return null
  }

  let value = truncateString(outcome.selected?.value, MAX_SELECTED_VALUE_LENGTH)
  let text = truncateString(outcome.selected?.text, MAX_SELECTED_TEXT_LENGTH)
  return value && text ? { value, text } : null
}

function buildFieldTrace(outcome) {
  let actions = normalizeActions(outcome.actions)
  let selected = buildSelected(outcome, actions)
  let failureReason = outcome.success
    ? ""
    : truncateString(outcome.failureReason, MAX_FAILURE_REASON_LENGTH)

  return {
    fieldType: outcome.fieldType,
    executionMode: "CLIENT_SEARCH",
    originalAnswerPresent: true,
    attempted: true,
    success: outcome.success === true,
    rounds: normalizeRounds(outcome.rounds),
    actions,
    ...(selected ? { selected } : {}),
    ...(failureReason ? { failureReason } : {}),
  }
}

export function buildIcimsClientSearchTrackingData(outcomes) {
  if (!Array.isArray(outcomes) || outcomes.length === 0) return {}

  let byRow = new Map()
  for (let outcome of outcomes) {
    if (
      !outcome ||
      !Number.isInteger(outcome.rowIndex) ||
      outcome.rowIndex < 0 ||
      (outcome.fieldType !== "school" && outcome.fieldType !== "major")
    ) {
      continue
    }

    let row = byRow.get(outcome.rowIndex) ?? {
      recordIndex: outcome.rowIndex,
    }
    row[outcome.fieldType] = buildFieldTrace(outcome)
    byRow.set(outcome.rowIndex, row)
  }

  let education = Array.from(byRow.values()).sort(
    (left, right) => left.recordIndex - right.recordIndex,
  )
  return education.length === 0 ? {} : { resolveTrace: { education } }
}
