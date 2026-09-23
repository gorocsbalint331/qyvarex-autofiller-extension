// @ts-nocheck
/**
 * Autofill client-search step request/response validation and fetch.
 */

import { API_DOMAIN } from "./env-resolver.js"

const FIELD_QUESTIONS = Object.freeze({
  school: "What school did you attend?",
  major: "What was your field of study?",
  degree: "What degree did you earn?",
  location: "What city do you live in?",
  company: "What company did you work for?",
})

export function getAutofillClientSearchQuestion(fieldType) {
  return FIELD_QUESTIONS[fieldType]
}

const MAX_TEXT_LEN = 512
const MAX_SEARCH_INPUT_LEN = 256
const MAX_VALUE_LEN = 256
const MAX_KEY_LEN = 128
const MAX_OPTIONS = 25
const MAX_RETRY_AFTER_MS = 60000

const FAILURE_CODES = new Set([
  "REQUEST_INVALID",
  "MODEL_CALL_FAILED",
  "MODEL_RESPONSE_INVALID",
  "MODEL_RETRYABLE",
  "SESSION_STATE_INVALID",
  "SESSION_CONFLICT",
  "SESSION_STORE_FAILED",
  "INTERNAL_ERROR",
])

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/

const START_FIELDS = ["source", "field_type", "question", "original_answer"]
const CONTINUE_FIELDS = ["resolve_session_id", "round_id", "options"]
const OPTION_FIELDS = ["candidate_key", "value", "text", "domain"]

function invalidPayload(message) {
  return new Error(`Invalid autofill client-search payload: ${message}`)
}

function assertPlainObject(value, label) {
  if (
    typeof value !== "object" ||
    value === null ||
    Array.isArray(value) ||
    (Object.getPrototypeOf(value) !== Object.prototype &&
      Object.getPrototypeOf(value) !== null)
  ) {
    throw invalidPayload(`${label} must be an object`)
  }
}

function assertExactFields(obj, allowed, label, required = allowed) {
  const keys = Reflect.ownKeys(obj)
  for (const key of keys) {
    if (typeof key !== "string") {
      throw invalidPayload(`${label} contains a symbol field`)
    }
    if (!allowed.includes(key)) {
      throw invalidPayload(`${label} contains unknown field ${key}`)
    }
    const desc = Object.getOwnPropertyDescriptor(obj, key)
    if (
      !desc ||
      desc.enumerable !== true ||
      !Object.prototype.hasOwnProperty.call(desc, "value")
    ) {
      throw invalidPayload(
        `${label}.${key} must be an enumerable data property`,
      )
    }
  }
  const missing = required.find((field) => !keys.includes(field))
  if (missing) {
    throw invalidPayload(`${label} is missing field ${missing}`)
  }
}

function readDataProperty(obj, key, label) {
  const desc = Object.getOwnPropertyDescriptor(obj, key)
  if (
    !desc ||
    desc.enumerable !== true ||
    !Object.prototype.hasOwnProperty.call(desc, "value")
  ) {
    throw invalidPayload(`${label} must be an enumerable data property`)
  }
  return desc.value
}

function requireBoundedString(value, maxLen, label) {
  if (
    typeof value !== "string" ||
    value.trim().length === 0 ||
    value.length > maxLen
  ) {
    throw invalidPayload(
      `${label} must be a non-empty string no longer than ${maxLen}`,
    )
  }
  return value
}

function normalizeOption(option) {
  assertPlainObject(option, "option")
  assertExactFields(option, OPTION_FIELDS, "option", [
    "candidate_key",
    "value",
    "text",
  ])
  return {
    candidate_key: requireBoundedString(
      option.candidate_key,
      MAX_KEY_LEN,
      "option.candidate_key",
    ),
    value: requireBoundedString(option.value, MAX_VALUE_LEN, "option.value"),
    text: requireBoundedString(option.text, MAX_TEXT_LEN, "option.text"),
    ...(Object.hasOwn(option, "domain")
      ? {
          domain: requireBoundedString(
            option.domain,
            MAX_VALUE_LEN,
            "option.domain",
          ),
        }
      : {}),
  }
}

function normalizeOptions(options) {
  if (!Array.isArray(options)) {
    throw invalidPayload("request.options must be an array")
  }
  if (options.length > MAX_OPTIONS) {
    throw invalidPayload(`request.options cannot exceed ${MAX_OPTIONS}`)
  }
  const normalized = []
  const seen = new Set()
  for (const option of options) {
    const item = normalizeOption(option)
    if (seen.has(item.candidate_key)) {
      throw invalidPayload("request.options contains a duplicate candidate_key")
    }
    seen.add(item.candidate_key)
    normalized.push(item)
  }
  return normalized
}

function normalizeStartRequest(request) {
  if (
    request.source !== "icims" &&
    request.source !== "phenom" &&
    request.source !== "smartrecruiters" &&
    request.source !== "avature" &&
    request.source !== "oraclecloud" &&
    request.source !== "jacobs" &&
    request.source !== "ripplehire" &&
    request.source !== "kula"
  ) {
    throw invalidPayload(
      "request.source must equal icims, phenom, smartrecruiters, avature, oraclecloud, jacobs, ripplehire, or kula",
    )
  }
  if (
    request.field_type !== "school" &&
    request.field_type !== "major" &&
    request.field_type !== "degree" &&
    request.field_type !== "location" &&
    request.field_type !== "company"
  ) {
    throw invalidPayload(
      "request.field_type must equal school, major, degree, location, or company",
    )
  }
  if (request.field_type === "company" && request.source !== "kula") {
    throw invalidPayload("company requires source kula")
  }
  return {
    source: request.source,
    field_type: request.field_type,
    question: requireBoundedString(
      request.question,
      MAX_TEXT_LEN,
      "request.question",
    ),
    original_answer: requireBoundedString(
      request.original_answer,
      MAX_TEXT_LEN,
      "request.original_answer",
    ),
  }
}

export function normalizeAutofillClientSearchStepRequest(request) {
  assertPlainObject(request, "request")
  const keys = Reflect.ownKeys(request)
  if (keys.includes("source")) {
    assertExactFields(request, START_FIELDS, "request")
    return normalizeStartRequest(request)
  }
  assertExactFields(request, CONTINUE_FIELDS, "request")
  return {
    resolve_session_id: requireBoundedString(
      request.resolve_session_id,
      MAX_KEY_LEN,
      "request.resolve_session_id",
    ),
    round_id: requireBoundedString(
      request.round_id,
      MAX_KEY_LEN,
      "request.round_id",
    ),
    options: normalizeOptions(request.options),
  }
}

function validateStepResponse(response, request) {
  assertPlainObject(response, "response")
  const action = readDataProperty(response, "action", "response.action")

  if (action === "REQUEST_SEARCH") {
    assertExactFields(
      response,
      ["action", "resolve_session_id", "round_id", "search_input", "reason"],
      "REQUEST_SEARCH response",
      ["action", "resolve_session_id", "round_id", "search_input"],
    )
    const resolveSessionId = requireBoundedString(
      response.resolve_session_id,
      MAX_KEY_LEN,
      "response.resolve_session_id",
    )
    const roundId = requireBoundedString(
      response.round_id,
      MAX_KEY_LEN,
      "response.round_id",
    )
    if ("round_id" in request && request.round_id === roundId) {
      throw invalidPayload("REQUEST_SEARCH must use a fresh round_id")
    }
    const searchInput = requireBoundedString(
      response.search_input,
      MAX_SEARCH_INPUT_LEN,
      "response.search_input",
    )
    const result = {
      action: "REQUEST_SEARCH",
      resolve_session_id: resolveSessionId,
      round_id: roundId,
      search_input: searchInput,
    }
    if (Object.prototype.hasOwnProperty.call(response, "reason")) {
      result.reason = requireBoundedString(
        response.reason,
        MAX_TEXT_LEN,
        "response.reason",
      )
    }
    return result
  }

  if (action === "SELECT_OPTIONS") {
    if (!("options" in request)) {
      throw invalidPayload("SELECT_OPTIONS is not allowed on a start request")
    }
    assertExactFields(
      response,
      ["action", "selected_values", "round_id", "selected_candidate_key"],
      "SELECT_OPTIONS response",
      ["action", "selected_values"],
    )
    if (
      !Array.isArray(response.selected_values) ||
      response.selected_values.length !== 1
    ) {
      throw invalidPayload(
        "SELECT_OPTIONS response.selected_values must contain exactly one item",
      )
    }
    const selectedText = requireBoundedString(
      response.selected_values[0],
      MAX_TEXT_LEN,
      "response.selected_values[0]",
    )
    if (
      Object.hasOwn(response, "round_id") ||
      Object.hasOwn(response, "selected_candidate_key")
    ) {
      const roundId = requireBoundedString(
        response.round_id,
        MAX_KEY_LEN,
        "response.round_id",
      )
      const candidateKey = requireBoundedString(
        response.selected_candidate_key,
        MAX_KEY_LEN,
        "response.selected_candidate_key",
      )
      const matches = request.options.filter(
        (opt) =>
          opt.candidate_key === candidateKey && opt.text === selectedText,
      )
      if (roundId !== request.round_id || matches.length !== 1) {
        throw invalidPayload(
          "SELECT_OPTIONS must reference current round and candidate identity",
        )
      }
      return {
        action: "SELECT_OPTIONS",
        selected_values: [matches[0].text],
        round_id: roundId,
        selected_candidate_key: candidateKey,
      }
    }
    const textMatches = request.options.filter(
      (opt) => opt.text === selectedText,
    )
    if (textMatches.length === 0) {
      throw invalidPayload(
        "SELECT_OPTIONS must reference exact text from current options",
      )
    }
    if (new Set(textMatches.map((opt) => opt.value)).size !== 1) {
      throw invalidPayload(
        "SELECT_OPTIONS text must identify one canonical native value",
      )
    }
    return {
      action: "SELECT_OPTIONS",
      selected_values: [textMatches[0].text],
    }
  }

  if (action === "RETURN_EMPTY") {
    assertExactFields(response, ["action"], "RETURN_EMPTY response")
    if (!("options" in request) && request.field_type !== "school") {
      throw invalidPayload("RETURN_EMPTY is not allowed on a start request")
    }
    return { action: "RETURN_EMPTY" }
  }

  if (action === "RETRYABLE_FAILURE") {
    assertExactFields(
      response,
      ["action", "failure_code", "diagnostic_id", "retry_after_ms"],
      "RETRYABLE_FAILURE response",
      ["action"],
    )
    const hasFailureCode = Object.prototype.hasOwnProperty.call(
      response,
      "failure_code",
    )
    const hasDiagnosticId = Object.prototype.hasOwnProperty.call(
      response,
      "diagnostic_id",
    )
    const hasRetryAfter = Object.prototype.hasOwnProperty.call(
      response,
      "retry_after_ms",
    )
    if (!hasFailureCode && !hasDiagnosticId && !hasRetryAfter) {
      return { action: "RETRYABLE_FAILURE" }
    }
    if (!hasFailureCode || !hasDiagnosticId) {
      throw invalidPayload(
        "RETRYABLE_FAILURE failure_code and diagnostic_id must be provided together",
      )
    }
    const failureCode = readDataProperty(
      response,
      "failure_code",
      "response.failure_code",
    )
    const diagnosticId = readDataProperty(
      response,
      "diagnostic_id",
      "response.diagnostic_id",
    )
    if (typeof failureCode !== "string" || !FAILURE_CODES.has(failureCode)) {
      throw invalidPayload("RETRYABLE_FAILURE failure_code is unsupported")
    }
    if (typeof diagnosticId !== "string" || !UUID_RE.test(diagnosticId)) {
      throw invalidPayload(
        "RETRYABLE_FAILURE diagnostic_id must be a canonical lowercase UUID",
      )
    }
    const result = {
      action: "RETRYABLE_FAILURE",
      failure_code: failureCode,
      diagnostic_id: diagnosticId,
    }
    if (hasRetryAfter) {
      const retryAfterMs = readDataProperty(
        response,
        "retry_after_ms",
        "response.retry_after_ms",
      )
      if (
        typeof retryAfterMs !== "number" ||
        !Number.isSafeInteger(retryAfterMs) ||
        retryAfterMs < 0 ||
        retryAfterMs > MAX_RETRY_AFTER_MS
      ) {
        throw invalidPayload(
          `RETRYABLE_FAILURE retry_after_ms must be an integer between 0 and ${MAX_RETRY_AFTER_MS}`,
        )
      }
      result.retry_after_ms = retryAfterMs
    }
    return result
  }

  throw invalidPayload("response.action is unsupported")
}

export function validateAutofillClientSearchStepResponse(response, request) {
  const normalizedRequest = normalizeAutofillClientSearchStepRequest(request)
  return validateStepResponse(response, normalizedRequest)
}

export async function fetchAutofillClientSearchStep(request) {
  const normalizedRequest = normalizeAutofillClientSearchStepRequest(request)
  const response = await fetch(
    `${API_DOMAIN}/swan/autofill/autofill-option-resolve/client-search-step`,
    {
      credentials: "include",
      method: "POST",
      headers: {
        accept: "*/*",
        "cache-control": "no-cache",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(normalizedRequest),
    },
  )
  if (!response.ok) {
    throw new Error(
      `Failed to resolve autofill client-search step: ${response.status} ${response.statusText}`,
    )
  }
  let body
  try {
    body = await response.json()
  } catch {
    throw new Error("Failed to parse autofill client-search response")
  }
  assertPlainObject(body, "Swan response")
  if (
    !Object.prototype.hasOwnProperty.call(body, "success") ||
    body.success !== true ||
    !Object.prototype.hasOwnProperty.call(body, "result")
  ) {
    throw invalidPayload("Swan response does not contain a successful result")
  }
  return validateAutofillClientSearchStepResponse(
    body.result,
    normalizedRequest,
  )
}
