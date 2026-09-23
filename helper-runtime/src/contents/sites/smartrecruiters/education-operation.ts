// @ts-nocheck
/**
 * SmartRecruiters — education institution client-search helpers.
 */

import * as autofillClientSearch from "../../../api/autofill-client-search.js"

const INSTITUTION_LABEL = "institution"
const EDUCATION_ENTRY_TAG = "oc-education-entry"
const INSTITUTION_SUGGESTION_URL =
  "https://jobs.smartrecruiters.com/suggestions/education/institution"
const INSTITUTION_HOST = "jobs.smartrecruiters.com"
const INSTITUTION_PATH = "/suggestions/education/institution"

const normalizeText = (value) =>
  String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()

function isValidInstitutionSuggestionUrl(urlString) {
  try {
    const url = new URL(urlString)
    return (
      "https:" === url.protocol &&
      url.hostname === INSTITUTION_HOST &&
      url.pathname === INSTITUTION_PATH
    )
  } catch {
    return false
  }
}

function isInsideEducationEntry(node) {
  let current = node
  const visited = /* @__PURE__ */ new Set()
  while (current && !visited.has(current)) {
    visited.add(current)
    if (normalizeText(current.localName) === EDUCATION_ENTRY_TAG) return true
    const parent = current.parentElement || current.parentNode
    if (parent && parent !== current) {
      current = parent
      continue
    }
    const root = current.getRootNode?.()
    current = root?.host || current.host || null
  }
  return false
}

function buildSmartRecruitersInstitutionOperation({
  originalAnswer,
  language,
  requestUrl = INSTITUTION_SUGGESTION_URL,
}) {
  if (!isValidInstitutionSuggestionUrl(requestUrl)) {
    throw Error("Invalid SmartRecruiters Institution suggestion URL")
  }
  return {
    field_type: "school",
    question: "Which Institution matches the candidate's education?",
    description:
      "Search the SmartRecruiters Institution suggestions and select the exact matching school.",
    original_answer: originalAnswer,
    search_request_schema: {
      url: INSTITUTION_SUGGESTION_URL,
      allowed_methods: ["POST"],
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json",
      },
      params: [
        {
          name: "query",
          location: "body",
          description: "Free-text Institution search query.",
          default_value: "",
          isSearchParam: true,
        },
        {
          name: "language",
          location: "body",
          description: "SmartRecruiters result language.",
          default_value: language?.trim() || "en",
          isMetaParam: true,
        },
      ],
    },
  }
}

function getSmartRecruitersInstitutionOriginalAnswer(record) {
  for (const key of ["rawSchool", "Institution", "School"]) {
    const value = record[key]
    if ("string" != typeof value) continue
    const trimmed = value.trim()
    if (trimmed) return trimmed
  }
  return ""
}

const normalizeSearchInput = (value) =>
  value
    .normalize("NFKC")
    .trim()
    .toLowerCase()
    .replace(/\s+/gu, " ")

function getSmartRecruitersInstitutionSearchSequence(query) {
  const trimmed = query.replace(/\s+/gu, " ").trim()
  if (!trimmed) return []
  const words = trimmed.split(" ")
  const sequence = [trimmed]
  while (words.length > 2) {
    words.pop()
    sequence.push(words.join(" "))
  }
  return sequence
}

function resolveSelectedInstitutionOption(rounds, selectedValues) {
  if (1 !== selectedValues.length) return null
  const selected = selectedValues[0]
  if ("string" != typeof selected || !selected.trim()) return null
  const matches = rounds
    .flatMap((round) => round.options)
    .filter((option) => option.text === selected)
  return 0 === matches.length ||
    1 !== new Set(matches.map((option) => option.value)).size
    ? null
    : matches[0]
}

async function resolveSmartRecruitersInstitutionClientSearch(
  input,
  originalAnswer,
  adapters,
) {
  const trimmedAnswer = originalAnswer.trim()
  const rounds = []
  let resolveSessionId = ""
  let requestBody = {
    source: "smartrecruiters",
    field_type: "school",
    question: autofillClientSearch.getAutofillClientSearchQuestion("school"),
    original_answer: trimmedAnswer,
  }
  if (!trimmedAnswer) {
    return {
      success: false,
      rounds,
      failureReason: "missing-original-answer",
    }
  }
  try {
    for (let attempt = 0; attempt < 5; attempt += 1) {
      const step = await adapters.requestStep(requestBody)
      if ("REQUEST_SEARCH" === step.action) {
        const sessionId = String(step.resolve_session_id ?? "").trim()
        if (!sessionId) {
          return {
            success: false,
            rounds,
            failureReason: "missing-resolve-session",
          }
        }
        if (resolveSessionId && resolveSessionId !== sessionId) {
          return {
            success: false,
            rounds,
            failureReason: "resolve-session-changed",
          }
        }
        resolveSessionId = sessionId
        const searchInput = normalizeSearchInput(step.search_input)
        if (
          !searchInput ||
          rounds.some(
            (round) => normalizeSearchInput(round.search_input) === searchInput,
          ) ||
          rounds.some((round) => round.round_id === step.round_id)
        ) {
          return {
            success: false,
            rounds,
            failureReason: "repeated-search",
          }
        }
        const capture = await adapters.captureCandidates(
          input,
          step.search_input,
        )
        if ("failed" === capture.status) {
          return {
            success: false,
            rounds,
            failureReason: "search-failed",
          }
        }
        const round = {
          round_id: step.round_id,
          search_input:
            capture.searchInput?.trim() || step.search_input,
          options: capture.candidates.slice(0, 25).map((candidate) => ({
            ...candidate,
          })),
        }
        rounds.push(round)
        requestBody = {
          resolve_session_id: resolveSessionId,
          round_id: round.round_id,
          options: round.options.map((option) => ({ ...option })),
        }
        continue
      }
      if ("SELECT_OPTIONS" === step.action) {
        const selected = resolveSelectedInstitutionOption(
          rounds,
          step.selected_values,
        )
        if (!selected) {
          return {
            success: false,
            rounds,
            failureReason: "invalid-selection",
          }
        }
        const matchingRound = rounds.find((round) =>
          round.options.some(
            (option) =>
              option.text === selected.text &&
              option.value === selected.value,
          ),
        )
        const committed = await adapters.commitCandidate(
          input,
          selected,
          matchingRound?.search_input,
        )
        if (!committed) {
          return {
            success: false,
            rounds,
            selected,
            failureReason: "exact-commit-failed",
          }
        }
        return { success: true, rounds, selected }
      }
      return {
        success: false,
        rounds,
        failureReason:
          "RETURN_EMPTY" === step.action ? "empty" : "retryable-failure",
      }
    }
    return { success: false, rounds, failureReason: "round-limit" }
  } catch {
    return {
      success: false,
      rounds,
      failureReason: "client-search-failed",
    }
  }
}

function isSmartRecruitersInstitutionRule(rule) {
  return (
    normalizeText(rule.label) === INSTITUTION_LABEL &&
    (isInsideEducationEntry(rule.$input) ||
      isInsideEducationEntry(rule.$label))
  )
}

function getSmartRecruitersResolvedInstitutionValue(response) {
  if (
    response?.result?.action !== "SELECT_OPTIONS" ||
    !Array.isArray(response.result.selected_values)
  ) {
    return ""
  }
  const selected = response.result.selected_values[0]
  return "string" == typeof selected ? selected.trim() : ""
}

function findExactSmartRecruitersInstitutionOption(options, value) {
  const normalized = normalizeText(value)
  return (
    (normalized &&
      options.find((option) => {
        const optionValue = normalizeText(option.getAttribute?.("value"))
        return (
          "#spl-custom-option" !== optionValue &&
          (optionValue === normalized ||
            normalizeText(option.textContent) === normalized)
        )
      })) ||
    null
  )
}

function isSmartRecruitersInstitutionModelEmpty(value) {
  return null == value || ("string" == typeof value && !value.trim())
}

function isSmartRecruitersInstitutionCommitted({
  inputValue,
  resolvedValue,
  expanded,
  autocompleteValue,
}) {
  const normalizedResolved = normalizeText(resolvedValue)
  const hasAutocompleteValue =
    "string" == typeof autocompleteValue
      ? !!autocompleteValue.trim()
      : "object" == typeof autocompleteValue &&
        null !== autocompleteValue &&
        !Array.isArray(autocompleteValue)
  return (
    !!normalizedResolved &&
    normalizeText(inputValue) === normalizedResolved &&
    "true" !== expanded &&
    hasAutocompleteValue
  )
}

export {
  buildSmartRecruitersInstitutionOperation,
  findExactSmartRecruitersInstitutionOption,
  getSmartRecruitersInstitutionOriginalAnswer,
  getSmartRecruitersInstitutionSearchSequence,
  getSmartRecruitersResolvedInstitutionValue,
  isSmartRecruitersInstitutionCommitted,
  isSmartRecruitersInstitutionModelEmpty,
  isSmartRecruitersInstitutionRule,
  resolveSmartRecruitersInstitutionClientSearch,
}
