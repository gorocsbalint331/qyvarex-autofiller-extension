// @ts-nocheck
/**
 * Kula — company search DOM capture / commit helpers.
 */

import * as messaging from "@plasmohq/messaging"
import * as cancellation from "../../methods/cancellation.ts"

function isCompanyInput(input) {
  return (
    input.isConnected &&
    /^profile\.experience\[\d+\]\.company$/.test(input.name) &&
    !!input.closest('[data-test-id="company"]')
  )
}

function setInputValue(input, value) {
  const setter = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    "value",
  )?.set
  if (!setter) throw Error("Missing input setter")
  setter.call(input, value)
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
}

async function requestCompanyDom(input, query, selected) {
  return messaging.sendToBackground({
    name: "kulaCompanyDom",
    body: {
      action: selected ? "click" : "snapshot",
      inputName: input.name,
      query,
      ...(selected ? { selected } : {}),
    },
  })
}

const lastQueryByInput = new WeakMap()

export function clearKulaCompanySearch(input) {
  lastQueryByInput.delete(input)
  if (isCompanyInput(input)) {
    setInputValue(input, "")
    input.blur()
  }
}

export async function captureKulaCompanyCandidates(input, query) {
  if (!isCompanyInput(input) || !query.trim()) {
    return { status: "failed", candidates: [] }
  }

  lastQueryByInput.set(input, query)
  input.focus()
  setInputValue(input, query)
  await cancellation.cancellableDelay(600)

  let previousCandidatesJson = ""
  let stableCount = 0

  for (
    let attempt = 0;
    attempt < 25 &&
    (cancellation.checkpoint(),
    isCompanyInput(input) && input.value === query);
    attempt++
  ) {
    const snapshot = await requestCompanyDom(input, query)
    cancellation.checkpoint()
    if (snapshot.status === "failed") break

    const candidatesJson = JSON.stringify(snapshot.candidates)
    if (snapshot.status === "ready" && snapshot.menuOpen) {
      stableCount =
        candidatesJson === previousCandidatesJson ? stableCount + 1 : 0
      previousCandidatesJson = candidatesJson
      if (snapshot.candidates.length && stableCount >= 2) {
        return {
          status: "ready",
          candidates: snapshot.candidates.slice(0, 25),
        }
      }
      if (attempt === 24 && !snapshot.candidates.length) {
        return { status: "no-results", candidates: [] }
      }
    } else {
      stableCount = 0
      previousCandidatesJson = ""
    }

    await cancellation.cancellableDelay(200)
  }

  return { status: "failed", candidates: [] }
}

export async function commitKulaCompanyCandidate(input, candidate) {
  const query = lastQueryByInput.get(input)
  if (!isCompanyInput(input) || query === undefined || input.value !== query) {
    return false
  }

  cancellation.checkpoint()
  const clickResult = await requestCompanyDom(input, query, candidate)
  if (clickResult.status !== "ready" || !clickResult.menuOpen) return false

  for (let attempt = 0; attempt < 10; attempt++) {
    await cancellation.cancellableDelay(100)
    cancellation.checkpoint()

    const snapshot = await requestCompanyDom(input, candidate.text)
    if (snapshot.status === "failed") break

    if (
      !snapshot.menuOpen &&
      snapshot.committedId === candidate.value &&
      snapshot.inputValue === candidate.text
    ) {
      input.blur()
      await cancellation.cancellableDelay(150)
      cancellation.checkpoint()

      const verified = await requestCompanyDom(input, candidate.text)
      lastQueryByInput.delete(input)
      return (
        verified.status === "ready" &&
        !verified.menuOpen &&
        !verified.invalid &&
        verified.committedId === candidate.value &&
        verified.inputValue === candidate.text
      )
    }
  }

  return false
}
