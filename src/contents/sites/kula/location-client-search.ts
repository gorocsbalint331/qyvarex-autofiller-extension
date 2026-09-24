// @ts-nocheck
/**
 * Kula — location/address client-search resolution.
 */

import * as cancellation from "../../methods/cancellation.ts"

export function classifyKulaLocationField(rule) {
  const input = rule.$input
  if (input?.tagName !== "INPUT") return null
  const name = input.getAttribute("name") || input.id
  return name === "info.address" ? "address" : null
}

export function getKulaLocationOriginal(record) {
  for (const key of [
    "rawAddress",
    "Raw Address",
    "Address",
    "address",
    "Home Address",
  ]) {
    const values = Array.isArray(record[key]) ? record[key] : [record[key]]
    for (const value of values) {
      if (typeof value === "string" && value.trim()) return value.trim()
    }
  }
  return ""
}

function getLocationQuestion(_fieldType) {
  return "What city do you live in?"
}

const normalizeSearchKey = (value) =>
  value.normalize("NFKC").trim().toLowerCase().replace(/\s+/g, " ")

export async function resolveKulaLocationField(
  input,
  record,
  fieldType,
  deps,
) {
  let rounds = 0
  let searchStarted = false

  const fail = (failureReason) => {
    if (searchStarted) deps.clearSearch(input)
    return { success: false, failureReason, rounds }
  }

  const original = getKulaLocationOriginal(record)
  if (!original) return fail("missing-original-answer")

  let request = {
    source: "kula",
    field_type: "location",
    question: getLocationQuestion(fieldType),
    original_answer: original,
  }
  let sessionId = ""
  const seenSearchKeys = new Set()
  const seenRoundIds = new Set()
  let options = []

  try {
    for (let step = 0; step <= 5; step++) {
      cancellation.checkpoint()
      const response = await deps.requestStep(request)
      cancellation.checkpoint()

      if (response.action === "REQUEST_SEARCH") {
        if (rounds === 5) return fail("round-limit")
        if (
          !response.resolve_session_id?.trim() ||
          (sessionId && sessionId !== response.resolve_session_id)
        ) {
          return fail("invalid-session")
        }

        const searchKey = normalizeSearchKey(response.search_input)
        if (
          !searchKey ||
          !response.round_id?.trim() ||
          seenSearchKeys.has(searchKey) ||
          seenRoundIds.has(response.round_id)
        ) {
          return fail("repeated-search")
        }

        sessionId = response.resolve_session_id
        seenSearchKeys.add(searchKey)
        seenRoundIds.add(response.round_id)
        searchStarted = true

        const capture = await deps.captureCandidates(
          input,
          response.search_input,
        )
        cancellation.checkpoint()
        rounds++
        if (capture.status === "failed") return fail("search-failed")

        options = capture.candidates.slice(0, 25)
        request = {
          resolve_session_id: sessionId,
          round_id: response.round_id,
          options,
        }
      } else {
        if (response.action !== "SELECT_OPTIONS") {
          return fail(
            response.action === "RETURN_EMPTY" ? "empty" : "retryable-failure",
          )
        }
        if (!rounds || response.selected_values.length !== 1) {
          return fail("invalid-selection")
        }

        const matches = options.filter(
          (option) => option.text === response.selected_values[0],
        )
        if (matches.length !== 1) return fail("invalid-selection")

        const selected = matches[0]
        if (!(await deps.commitCandidate(input, selected))) {
          return fail("commit-failed")
        }
        return { success: true, selected, rounds }
      }
    }

    return fail("round-limit")
  } catch (error) {
    if (
      error instanceof cancellation.CancelledError ||
      error instanceof cancellation.SkippedError
    ) {
      if (searchStarted) deps.clearSearch(input)
      throw error
    }
    return fail("client-search-failed")
  }
}
