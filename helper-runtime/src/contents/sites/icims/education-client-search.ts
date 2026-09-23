// @ts-nocheck
/**
 * iCIMS education school/major client-search autofill flow.
 */

import * as enums from "../../../core/enums.js"
import * as autofillClientSearch from "../../../api/autofill-client-search.js"
import * as cancellation from "../../methods/cancellation.js"
import * as clientSearchWidget from "./client-search-widget.ts"
import * as utils from "./utils.js"

const SCHOOL_LABELS = new Set([
  "school",
  "school/institution",
  "school name",
  "school/institution name",
])
const MAJOR_LABELS = new Set([
  "study",
  "major/area of study",
  "major",
  "area of study",
])

function normalizeSearchKey(value) {
  return value
    .normalize("NFKC")
    .trim()
    .toLowerCase()
    .replace(/\s+/gu, " ")
}

function isOtherText(value) {
  let text = value.normalize("NFKC").trim().toLowerCase()
  return text === "other" || text === "others"
}

function candidateEquals(left, right) {
  return left.value === right.value && left.text === right.text
}

function discardGeneration(deps, generation) {
  let discard =
    deps.discardGeneration ?? clientSearchWidget.discardIcimsSearchGeneration
  discard(generation)
}

export function classifyIcimsEducationClientSearchRule(rule) {
  if (rule.type !== enums.FIELD_TYPE.SELECT) return null

  let label = utils.normalizeIcimsRuleLabel(rule.label).toLowerCase()
  let fieldType = SCHOOL_LABELS.has(label)
    ? "school"
    : MAJOR_LABELS.has(label)
      ? "major"
      : null
  if (!fieldType) return null

  let select = rule.$input
  if (
    !select ||
    select.tagName?.toUpperCase() !== "SELECT" ||
    typeof select.getAttribute !== "function" ||
    select.getAttribute("icimsdropdown-enabled") !== "1" ||
    select.getAttribute("icimsdropdown-search") !== "1" ||
    select.getAttribute("icimsdropdown-ajax") !== "1"
  ) {
    return null
  }

  let trigger = clientSearchWidget.getIcimsSearchDropdownTrigger(select)
  if (!trigger) return null

  let container = clientSearchWidget.getIcimsSearchDropdownContainer(trigger)
  return container?.classList?.contains("dropdown-container")
    ? fieldType
    : null
}

export function getIcimsEducationOriginalAnswer(fieldType, record) {
  let candidates =
    fieldType === "school"
      ? [record?.rawSchool]
      : [record?.rawMajor, record?.rawDegree]

  for (let candidate of candidates) {
    let values = Array.isArray(candidate) ? candidate : [candidate]
    for (let value of values) {
      if (value == null || !String(value).trim()) continue
      let text = String(value).trim()
      if (fieldType === "major" && isOtherText(text)) continue
      return text
    }
  }
  return ""
}

async function waitForCompanionCommitted(select, resolveCompanion, expected) {
  let expectedKey = normalizeSearchKey(expected)
  let deadline = Date.now() + 500
  let lastInput = null
  let matchedSince = null

  while (Date.now() <= deadline) {
    cancellation.checkpoint()
    let now = Date.now()
    let companion = null
    try {
      companion = resolveCompanion(select)
    } catch {
      companion = null
    }

    if (companion !== lastInput) {
      lastInput = companion
      matchedSince = null
    }

    if (
      companion &&
      companion.isConnected !== false &&
      normalizeSearchKey(companion.value) === expectedKey
    ) {
      if (matchedSince == null) matchedSince = now
      if (now - matchedSince >= 50) return true
    } else {
      matchedSince = null
    }

    await cancellation.cancellableDelay(10)
  }

  return false
}

async function failSchoolWithOtherFallback({
  rule,
  originalAnswer,
  rowIndex,
  actions,
  rounds,
  failureReason,
  deps,
}) {
  let capture
  let companion

  let fail = (suffix) => ({
    rowIndex,
    fieldType: "school",
    attempted: true,
    success: false,
    actions,
    rounds,
    failureReason: `${failureReason};school-${suffix}`,
  })
  let invalidated = () => ({
    rowIndex,
    fieldType: "school",
    attempted: true,
    success: false,
    actions,
    rounds,
    failureReason: "trusted-invalidation",
  })

  try {
    cancellation.checkpoint()
    capture = await deps.captureCandidates(rule.$input, "Other")
  } catch {
    cancellation.checkpoint()
    return fail("other-capture-error")
  }

  cancellation.checkpoint()
  if (capture.status === "invalidated") return invalidated()
  if (capture.status !== "ready" && capture.status !== "no-results") {
    return fail(`other-capture-${capture.status}`)
  }
  if (capture.generation.invalidated) return invalidated()

  let otherCandidates = capture.generation.candidates.filter(
    (candidate) => normalizeSearchKey(candidate.text) === "other",
  )
  if (otherCandidates.length === 0) {
    discardGeneration(deps, capture.generation)
    return fail("other-missing")
  }
  if (otherCandidates.length > 1) {
    discardGeneration(deps, capture.generation)
    return fail("other-ambiguous")
  }

  let committed = false
  try {
    cancellation.checkpoint()
    committed = await deps.commitCandidate(
      capture.generation,
      otherCandidates[0],
    )
  } catch {
    cancellation.checkpoint()
    committed = false
  }

  cancellation.checkpoint()
  if (!committed && capture.generation.invalidated) return invalidated()
  discardGeneration(deps, capture.generation)
  if (!committed) return fail("other-commit-failed")

  try {
    cancellation.checkpoint()
    companion = deps.resolveSchoolCompanionInput(rule.$input)
  } catch {
    cancellation.checkpoint()
    return fail("companion-resolve-error")
  }

  cancellation.checkpoint()
  if (!companion) return fail("companion-missing")

  try {
    cancellation.checkpoint()
    await deps.fillCompanionInput(companion, originalAnswer)
  } catch {
    cancellation.checkpoint()
    return fail("companion-fill-error")
  }

  cancellation.checkpoint()
  return (await waitForCompanionCommitted(
    rule.$input,
    deps.resolveSchoolCompanionInput,
    originalAnswer,
  ))
    ? {
        rowIndex,
        fieldType: "school",
        attempted: true,
        success: true,
        actions,
        rounds,
      }
    : fail("companion-not-committed")
}

export async function fillIcimsEducationClientSearchField(
  rule,
  record,
  rowIndex,
  deps,
) {
  cancellation.checkpoint()

  let fieldType = classifyIcimsEducationClientSearchRule(rule)
  if (!fieldType) {
    throw Error("iCIMS Education client search requires an eligible rule")
  }

  let originalAnswer = getIcimsEducationOriginalAnswer(fieldType, record)
  let requestBase = {
    source: "icims",
    field_type: fieldType,
    question: autofillClientSearch.getAutofillClientSearchQuestion(fieldType),
    original_answer: originalAnswer,
  }

  let actions = []
  let rounds = []
  let searchRounds = []
  let sessionId = null
  let roundId = null
  let options = []
  let activeGeneration = null
  let activeRoundId = null
  let retainedGeneration = null

  let releaseRetained = () => {
    let generation = retainedGeneration
    if (generation) {
      retainedGeneration = null
      discardGeneration(deps, generation)
    }
  }

  let retainGeneration = (generation) => {
    if (retainedGeneration !== generation) {
      releaseRetained()
      retainedGeneration = generation
    }
  }

  let invalidatedOutcome = () => ({
    rowIndex,
    fieldType,
    attempted: true,
    success: false,
    actions,
    rounds,
    failureReason: "trusted-invalidation",
  })

  let fail = async (failureReason) => {
    releaseRetained()
    cancellation.checkpoint()

    if (fieldType === "school") {
      let outcome = await failSchoolWithOtherFallback({
        rule,
        originalAnswer,
        rowIndex,
        actions,
        rounds,
        failureReason,
        deps,
      })
      cancellation.checkpoint()
      return outcome
    }

    let cleared = false
    try {
      cancellation.checkpoint()
      cleared = await deps.clearSelect(rule.$input)
    } catch {
      cancellation.checkpoint()
      cleared = false
    }

    cancellation.checkpoint()
    return {
      rowIndex,
      fieldType,
      attempted: true,
      success: false,
      actions,
      rounds,
      failureReason: cleared
        ? failureReason
        : `${failureReason};major-not-blank`,
    }
  }

  try {
    for (;;) {
      let step
      cancellation.checkpoint()

      try {
        let body =
          sessionId && roundId
            ? {
                resolve_session_id: sessionId,
                round_id: roundId,
                options,
              }
            : requestBase
        step = await deps.requestStep(body)
      } catch {
        cancellation.checkpoint()
        if (activeGeneration?.invalidated) return invalidatedOutcome()
        return fail("transport-error")
      }

      cancellation.checkpoint()
      if (activeGeneration?.invalidated) return invalidatedOutcome()

      actions.push(step.action)

      if (step.action === "REQUEST_SEARCH") {
        let capture
        if (!step.resolve_session_id) return fail("missing-session-id")
        if (sessionId !== null && step.resolve_session_id !== sessionId) {
          return fail("session-id-changed")
        }
        sessionId = step.resolve_session_id

        if (searchRounds.length >= 5) return fail("search-limit-exceeded")

        let searchKey = normalizeSearchKey(step.search_input)
        if (
          searchRounds.some(
            (round) =>
              normalizeSearchKey(round.search_input) === searchKey,
          )
        ) {
          return fail("repeated-search")
        }

        try {
          cancellation.checkpoint()
          capture = await deps.captureCandidates(
            rule.$input,
            step.search_input,
          )
        } catch {
          cancellation.checkpoint()
          return fail("candidate-capture-error")
        }

        if (
          (capture.status === "ready" || capture.status === "no-results") &&
          capture.generation
        ) {
          retainGeneration(capture.generation)
        }

        cancellation.checkpoint()
        if (capture.status === "invalidated") return invalidatedOutcome()
        if (capture.status !== "ready" && capture.status !== "no-results") {
          return fail(`candidate-capture-${capture.status}`)
        }
        if (capture.generation.invalidated) return invalidatedOutcome()

        let candidates = capture.generation.candidates.slice(0, 25)
        capture.generation.candidates = candidates
        activeGeneration = capture.generation

        let round = {
          round_id: step.round_id,
          search_input: step.search_input,
          options: candidates.map((candidate, index) => ({
            candidate_key: `candidate-${index + 1}`,
            value: candidate.value,
            text: candidate.text,
          })),
        }
        activeRoundId = round.round_id
        roundId = round.round_id
        options = round.options
        searchRounds.push(round)
        rounds.push({
          searchInput: round.search_input,
          candidateCount: round.options.length,
        })
        continue
      }

      if (
        step.action === "SELECT_OPTIONS" ||
        step.action === "SELECT_OPTION"
      ) {
        let generation
        let isSelectOption = step.action === "SELECT_OPTION"
        let selectedText =
          step.action === "SELECT_OPTIONS" ? step.selected_values[0] : null
        let textMatches =
          selectedText === null
            ? []
            : searchRounds.flatMap((round) =>
                round.options.filter(
                  (option) => option.text === selectedText,
                ),
              )

        if (
          textMatches.length > 0 &&
          new Set(textMatches.map((option) => option.value)).size !== 1
        ) {
          return fail("ambiguous-selected-text")
        }

        let selectedRound = isSelectOption
          ? searchRounds.find((round) => round.round_id === step.round_id)
          : [...searchRounds]
              .reverse()
              .find((round) =>
                round.options.some(
                  (option) => option.text === selectedText,
                ),
              )
        let selectedOption = isSelectOption
          ? selectedRound?.options.find(
              (option) => option.candidate_key === step.candidate_key,
            )
          : selectedRound?.options.find(
              (option) => option.text === selectedText,
            )

        if (!selectedRound || !selectedOption) {
          return fail("missing-current-candidate")
        }

        if (activeRoundId === selectedRound.round_id) {
          if (
            !activeGeneration?.candidates.some((candidate) =>
              candidateEquals(candidate, selectedOption),
            )
          ) {
            return fail("missing-current-candidate")
          }
          generation = activeGeneration
        } else {
          let recapture
          try {
            cancellation.checkpoint()
            recapture = await deps.captureCandidates(
              rule.$input,
              selectedRound.search_input,
            )
          } catch {
            cancellation.checkpoint()
            return fail("selected-candidate-recapture-error")
          }

          if (
            (recapture.status === "ready" ||
              recapture.status === "no-results") &&
            recapture.generation
          ) {
            retainGeneration(recapture.generation)
          }

          cancellation.checkpoint()
          if (recapture.status === "invalidated") return invalidatedOutcome()
          if (
            recapture.status !== "ready" &&
            recapture.status !== "no-results"
          ) {
            return fail(`selected-candidate-recapture-${recapture.status}`)
          }
          if (recapture.generation.invalidated) return invalidatedOutcome()
          if (
            !recapture.generation.candidates.some((candidate) =>
              candidateEquals(candidate, selectedOption),
            )
          ) {
            return fail("missing-current-candidate")
          }

          activeGeneration = generation = recapture.generation
          activeRoundId = selectedRound.round_id
        }

        let committed = false
        try {
          cancellation.checkpoint()
          committed = await deps.commitCandidate(generation, {
            value: selectedOption.value,
            text: selectedOption.text,
          })
        } catch {
          cancellation.checkpoint()
          committed = false
        }

        cancellation.checkpoint()
        if (!committed) {
          if (generation.invalidated) return invalidatedOutcome()
          releaseRetained()
          return fail("candidate-commit-failed")
        }

        releaseRetained()
        return {
          rowIndex,
          fieldType,
          attempted: true,
          success: true,
          actions,
          rounds,
          selected: selectedOption,
        }
      }

      if (step.action === "RETURN_EMPTY") return fail("return-empty")
      return fail("retryable-failure")
    }
  } finally {
    releaseRetained()
  }
}
