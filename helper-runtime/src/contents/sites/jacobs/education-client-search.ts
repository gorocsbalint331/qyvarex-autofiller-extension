// @ts-nocheck
/**
 * Jacobs education school/major Select2 client-search autofill flow.
 */

import * as autofillClientSearch from "../../../api/autofill-client-search.js"

const MAX_ROUNDS = 5
const MAX_CANDIDATES_PER_ROUND = 25

export function getJacobsEducationClientSearchFieldType(select) {
  if (
    !select ||
    String(select.tagName || "").toLowerCase() !== "select" ||
    !select.classList.contains("AutoCompleteField") ||
    !select.classList.contains("select2-hidden-accessible")
  ) {
    return null
  }

  const schemaFieldId = select
    .closest(".fieldSpec")
    ?.getAttribute("data-schema-field-id")
  return schemaFieldId === "2021"
    ? "school"
    : schemaFieldId === "2106"
      ? "major"
      : null
}

function pickFirstString(record, keys) {
  for (const key of keys) {
    const values = Array.isArray(record[key]) ? record[key] : [record[key]]
    for (const value of values) {
      if (typeof value !== "string") continue
      const trimmed = value.trim()
      if (trimmed) return trimmed
    }
  }
  return ""
}

export function getJacobsEducationClientSearchOriginalAnswer(
  record,
  fieldType,
) {
  return pickFirstString(
    record,
    fieldType === "school"
      ? ["rawSchool", "College/university name"]
      : ["rawMajor", "rawDegree"],
  )
}

function normalizeSearchInput(value) {
  return value
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function dedupeCandidates(candidates) {
  const seen = new Set()
  const result = []
  for (const candidate of candidates) {
    const candidateKey = String(candidate.candidate_key ?? "").trim()
    const value = String(candidate.value ?? "").trim()
    const text = String(candidate.text ?? "")
      .replace(/\s+/g, " ")
      .trim()
    if (!candidateKey || !value || !text || seen.has(candidateKey)) continue
    seen.add(candidateKey)
    result.push({ candidate_key: candidateKey, value, text })
    if (result.length === MAX_CANDIDATES_PER_ROUND) break
  }
  return result
}

function resolveExactCandidate(rounds, selectedValues) {
  if (selectedValues.length !== 1) return null
  const selected = String(selectedValues[0] ?? "").trim()
  if (!selected) return null
  const matches = rounds.flatMap((round) =>
    round.options.filter((option) => option.text === selected),
  )
  return matches.length === 1 ? matches[0] : null
}

export async function resolveJacobsEducationClientSearch(
  select,
  record,
  fieldType,
  deps,
) {
  const originalAnswer = getJacobsEducationClientSearchOriginalAnswer(
    record,
    fieldType,
  )
  const rounds = []
  if (!originalAnswer) {
    return {
      success: false,
      rounds,
      failureReason: "missing-original-answer",
    }
  }

  let resolveSessionId = ""
  let request = {
    source: "jacobs",
    field_type: fieldType,
    question: autofillClientSearch.getAutofillClientSearchQuestion(fieldType),
    original_answer: originalAnswer,
  }

  for (let attempt = 0; attempt <= MAX_ROUNDS; attempt += 1) {
    let step
    try {
      step = await deps.requestStep(request)
    } catch {
      return { success: false, rounds, failureReason: "transport-error" }
    }

    if (step.action === "REQUEST_SEARCH") {
      let capture
      if (rounds.length >= MAX_ROUNDS) {
        return { success: false, rounds, failureReason: "round-limit" }
      }

      const sessionId = step.resolve_session_id.trim()
      const searchInput = step.search_input.trim()
      const normalizedSearch = normalizeSearchInput(searchInput)
      if (
        !sessionId ||
        !step.round_id.trim() ||
        !normalizedSearch ||
        (resolveSessionId && resolveSessionId !== sessionId) ||
        rounds.some(
          (round) =>
            round.round_id === step.round_id ||
            normalizeSearchInput(round.search_input) === normalizedSearch,
        )
      ) {
        return {
          success: false,
          rounds,
          failureReason: "invalid-search-round",
        }
      }

      try {
        capture = await deps.captureCandidates(select, searchInput)
      } catch {
        return {
          success: false,
          rounds,
          failureReason: "candidate-capture-error",
        }
      }
      if (capture.status === "failed") {
        return {
          success: false,
          rounds,
          failureReason: "candidate-capture-error",
        }
      }

      resolveSessionId = sessionId
      const options = dedupeCandidates(capture.candidates)
      const round = {
        round_id: step.round_id,
        search_input: searchInput,
        options,
      }
      rounds.push(round)
      request = {
        resolve_session_id: resolveSessionId,
        round_id: round.round_id,
        options: round.options.map((option) => ({ ...option })),
      }
      continue
    }

    if (step.action === "SELECT_OPTIONS") {
      const selected = resolveExactCandidate(rounds, step.selected_values)
      if (!selected) {
        return { success: false, rounds, failureReason: "invalid-selection" }
      }
      try {
        const committed = await deps.commitCandidate(
          select,
          selected,
          selected.text,
        )
        return committed
          ? { success: true, rounds, selected }
          : { success: false, rounds, failureReason: "exact-commit-failed" }
      } catch {
        return {
          success: false,
          rounds,
          failureReason: "candidate-commit-error",
        }
      }
    }

    return {
      success: false,
      rounds,
      failureReason:
        step.action === "RETURN_EMPTY" ? "return-empty" : "retryable-failure",
    }
  }

  return { success: false, rounds, failureReason: "round-limit" }
}
