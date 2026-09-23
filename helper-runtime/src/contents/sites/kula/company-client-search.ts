// @ts-nocheck
/**
 * Kula — company field client-search resolution.
 */

import * as cancellation from "../../methods/cancellation.js"

export function classifyKulaCompanyField(rule) {
  const input = rule.$input
  return (
    input?.tagName === "INPUT" &&
    !!input.closest?.('[data-test-id="company"]') &&
    /^profile\.experience\[\d+\]\.company$/.test(
      input.getAttribute("name") || input.id,
    )
  )
}

function firstNonEmptyString(record, keys) {
  for (const key of keys) {
    const values = Array.isArray(record[key]) ? record[key] : [record[key]]
    for (const value of values) {
      if (typeof value === "string" && value.trim()) return value.trim()
    }
  }
  return ""
}

export function getKulaCompanyOriginal(record) {
  const company = firstNonEmptyString(record, [
    "rawCompany",
    "Raw Company",
    "Company",
    "Company Name",
    "Employer",
  ])
  return company.length <= 250 ? company : ""
}

const normalizeDisplay = (value) =>
  value.normalize("NFKC").trim().replace(/\s+/g, " ")
const normalizeKey = (value) => normalizeDisplay(value).toLowerCase()

export async function resolveKulaCompanyField(input, record, deps) {
  let rounds = 0
  let searchStarted = false

  const fail = (failureReason) => {
    if (searchStarted) deps.clearSearch(input)
    return { success: false, failureReason, rounds }
  }

  const original = getKulaCompanyOriginal(record)
  if (!original) return fail("missing-original-answer")

  try {
    cancellation.checkpoint()
    searchStarted = true

    const capture = await deps.captureCandidates(input, original)
    cancellation.checkpoint()
    rounds = 1
    if (capture.status === "failed") return fail("search-failed")

    const exact = capture.candidates.filter(
      (candidate) =>
        normalizeDisplay(candidate.text) === normalizeDisplay(original),
    )
    const matches = exact.length
      ? exact
      : capture.candidates.filter(
          (candidate) =>
            normalizeKey(candidate.text) === normalizeKey(original),
        )

    if (matches.length !== 1) {
      return fail(matches.length ? "ambiguous-company" : "no-exact-match")
    }

    const selected = matches[0]
    if (!(await deps.commitCandidate(input, selected))) {
      return fail("commit-failed")
    }

    return { success: true, selected, rounds }
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
