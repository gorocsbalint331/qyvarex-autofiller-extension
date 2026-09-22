// @ts-nocheck
/**
 * Avature — education institution/major client-search resolution.
 */

import * as autofillClientSearch from "../../../api/autofill-client-search.js"
import * as enums from "../../../core/enums.js"

const MAX_RESOLVE_ROUNDS = 5

const normalizeLabel = (value) =>
  String(value ?? "")
    .replace(/\s+/g, " ")
    .replace(/\s*\/\s*/g, "/")
    .trim()
    .toLowerCase()

const MAJOR_LABEL_RE =
  /\b(?:major|speciali[sz]ation|field of study|area of study|discipline)\b/i
const SCHOOL_LABEL_RE =
  /\b(?:institution|program|school|university|college)\b/i
const MINOR_LABEL_RE = /\bminor\b/i

function combinedFieldLabel(rule) {
  const input = rule.$input
  const aria = input?.getAttribute?.("aria-label") || ""
  const labelText = rule.$label?.textContent || ""
  return normalizeLabel([rule.label, aria, labelText].join(" "))
}

function isSelect2AutocompleteSelect(rule) {
  const input = rule.$input
  if (!input || String(input.tagName || "").toLowerCase() !== "select") {
    return false
  }

  const classTokens = new Set()
  let node = input
  for (let depth = 0; node && depth < 4; depth++, node = node.parentElement) {
    String(node.className || "")
      .split(/\s+/)
      .filter(Boolean)
      .forEach((token) => classTokens.add(token))
  }

  const isCheckboxList =
    classTokens.has("CheckBoxListFormField") &&
    classTokens.has("AutoCompleteField")
  return (
    classTokens.has("AutoCompleteField") &&
    (classTokens.has("AutocompleteSelectFieldChildHtmlElement") ||
      isCheckboxList) &&
    (classTokens.has("select2-hidden-accessible") ||
      input.hasAttribute?.("data-select2-id") === true)
  )
}

export function classifyAvatureEducationClientSearchField(rule) {
  if (!isSelect2AutocompleteSelect(rule)) return null

  const label = combinedFieldLabel(rule)
  if (MINOR_LABEL_RE.test(label)) return null
  if (MAJOR_LABEL_RE.test(label)) return "major"
  if (SCHOOL_LABEL_RE.test(label)) return "school"

  const input = rule.$input
  const className = String(input.className || "")
  const isMulti =
    rule.type === enums.FIELD_TYPE.MULTI_SELECT ||
    input.multiple === true ||
    className.split(/\s+/).includes("CheckBoxListFormField")
  return isMulti ? "major" : null
}

function inferFieldTypeFromLabel(label) {
  const normalized = normalizeLabel(label)
  if (MINOR_LABEL_RE.test(normalized)) return null
  if (MAJOR_LABEL_RE.test(normalized)) return "major"
  if (SCHOOL_LABEL_RE.test(normalized)) return "school"
  return null
}

export function isAvatureInstitutionProgramRule(rule) {
  return classifyAvatureEducationClientSearchField(rule) !== null
}

export function getAvatureInstitutionOriginalAnswer(
  record,
  label = "Institution/Program",
  fieldType,
) {
  const isMajor =
    (fieldType || inferFieldTypeFromLabel(label)) === "major"
  const keys = isMajor
    ? ["rawMajor", "rawDegree"]
    : [
        "rawSchool",
        "Institution/Program",
        "Institution",
        "School",
        "School Name",
        "University/School",
        "University",
      ]

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

const normalizeSearchInput = (value) =>
  value
    .normalize("NFKC")
    .trim()
    .toLowerCase()
    .replace(/\s+/gu, " ")

function singleSelectedValue(selectedValues) {
  if (selectedValues.length !== 1) return null
  const value = selectedValues[0]
  return typeof value === "string" && value.trim() ? value : null
}

function uniqueCandidateByText(candidates, text) {
  const matches = candidates.filter((candidate) => candidate.text === text)
  if (matches.length === 0) return null
  if (new Set(matches.map((candidate) => candidate.value)).size !== 1) {
    return null
  }
  return matches[0]
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0
}

export async function resolveAvatureInstitutionClientSearch(
  select,
  record,
  label,
  hooks,
  fieldType,
) {
  const resolvedType = fieldType || inferFieldTypeFromLabel(label) || "school"
  const originalAnswer = getAvatureInstitutionOriginalAnswer(
    record,
    label,
    resolvedType,
  )
  const rounds = []
  const closeCandidates = () => hooks.closeCandidates?.(select)
  let resolveSessionId = null
  let lastSearchRound = null

  if (!originalAnswer) {
    return {
      success: false,
      rounds,
      failureReason: "missing-original-answer",
    }
  }

  try {
    for (let i = 0; i < MAX_RESOLVE_ROUNDS; i += 1) {
      const requestBody = lastSearchRound
        ? {
            resolve_session_id: resolveSessionId,
            round_id: lastSearchRound.round_id,
            options: lastSearchRound.options,
          }
        : {
            source: "avature",
            field_type: resolvedType,
            question: autofillClientSearch.getAutofillClientSearchQuestion(
              resolvedType,
            ),
            original_answer: originalAnswer,
          }

      const step = await hooks.requestStep(requestBody)

      if (step.action === "REQUEST_SEARCH") {
        if (!isNonEmptyString(step.resolve_session_id)) {
          closeCandidates()
          return {
            success: false,
            rounds,
            failureReason: "missing-resolve-session-id",
          }
        }
        if (
          resolveSessionId !== null &&
          step.resolve_session_id !== resolveSessionId
        ) {
          closeCandidates()
          return {
            success: false,
            rounds,
            failureReason: "changed-resolve-session-id",
          }
        }
        resolveSessionId = step.resolve_session_id

        const searchInput = normalizeSearchInput(step.search_input)
        if (
          !searchInput ||
          !step.round_id.trim() ||
          rounds.some(
            (round) =>
              normalizeSearchInput(round.search_input) === searchInput ||
              round.round_id === step.round_id,
          )
        ) {
          closeCandidates()
          return {
            success: false,
            rounds,
            failureReason: "repeated-search",
          }
        }

        const capture = await hooks.captureCandidates(
          select,
          step.search_input,
          true,
        )
        if (capture.status === "failed") {
          closeCandidates()
          return {
            success: false,
            rounds,
            failureReason: "search-failed",
          }
        }

        lastSearchRound = {
          round_id: step.round_id,
          search_input: step.search_input,
          options: capture.candidates.slice(0, 25),
        }
        rounds.push(lastSearchRound)
        continue
      }

      if (step.action === "SELECT_OPTIONS") {
        const selectedText = singleSelectedValue(step.selected_values)
        if (!selectedText) {
          closeCandidates()
          return {
            success: false,
            rounds,
            failureReason: "invalid-selection",
          }
        }

        const capture = await hooks.captureCandidates(select, selectedText, true)
        if (capture.status === "failed") {
          closeCandidates()
          return {
            success: false,
            rounds,
            failureReason: "selection-search-failed",
          }
        }

        const selected = uniqueCandidateByText(capture.candidates, selectedText)
        if (!selected) {
          closeCandidates()
          return {
            success: false,
            rounds,
            failureReason: "invalid-selection",
          }
        }

        const committed = await hooks.commitCandidate(
          select,
          selected,
          selectedText,
        )
        if (!committed) {
          closeCandidates()
          return {
            success: false,
            rounds,
            selected,
            failureReason: "exact-commit-failed",
          }
        }

        return { success: true, rounds, selected }
      }

      closeCandidates()
      return {
        success: false,
        rounds,
        failureReason:
          step.action === "RETURN_EMPTY" ? "empty" : "retryable-failure",
      }
    }

    closeCandidates()
    return { success: false, rounds, failureReason: "round-limit" }
  } catch {
    closeCandidates()
    return {
      success: false,
      rounds,
      failureReason: "client-search-failed",
    }
  }
}
