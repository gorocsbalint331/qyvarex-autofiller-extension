// @ts-nocheck
/**
 * Autofill ↔ submit answer-pair tracking payloads (including Falcon snapshots).
 */

import * as autofillAnswerPair from "../../utils/autofill-answer-pair.js"
import * as attributionClient from "../../utils/autofill-install-attribution-client.js"
import * as falconAnswerTracking from "./falcon-answer-tracking.ts"

// Re-export falcon markers (Parcel module did this for site convenience).
export {
  beginFalconResponseAnswerRequest,
  hasCurrentFalconResponseAnswer,
  inheritFalconResponseAnswerMarker,
  isCurrentFalconResponseAnswer,
  isFalconResponseAnswer,
  markFalconResponseAnswer,
} from "./falcon-answer-tracking.ts"

let answerProvider

export function registerAutofillAnswerPairAnswerProvider(provider) {
  answerProvider = provider
  return () => {
    if (answerProvider === provider) answerProvider = undefined
  }
}

function readRegisteredAnswer() {
  try {
    return answerProvider?.()
  } catch {
    return
  }
}

const SECTION_KEY_MOVES = [
  { sourceKey: "education", targetKey: "education" },
  { sourceKey: "Education", targetKey: "education" },
  { sourceKey: "employment", targetKey: "employment" },
  { sourceKey: "Employment", targetKey: "employment" },
  { sourceKey: "experience", targetKey: "employment" },
  { sourceKey: "Experience", targetKey: "employment" },
]

const EDUCATION_PROFILE_KEYS = ["education", "Education", "EDUCATION"]
const EMPLOYMENT_PROFILE_KEYS = [
  "Employment",
  "employment",
  "EMPLOYMENT",
  "workExperience",
  "work_experience",
  "Work Experience",
  "experience",
  "Experience",
]

function omitUndefinedEntries(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return {}
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== undefined),
  )
}

function asPlainObject(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {}
}

function firstArrayField(obj, keys) {
  for (const key of keys) {
    if (Array.isArray(obj[key])) return obj[key]
  }
  return []
}

function normalizeRecordRows(rows) {
  return Array.isArray(rows)
    ? rows
        .filter(
          (row) => !!row && typeof row === "object" && !Array.isArray(row),
        )
        .map(omitUndefinedEntries)
    : []
}

function stringifyListValue(value) {
  return Array.isArray(value) &&
    value.length > 0 &&
    value.every((item) => typeof item === "string")
    ? value.join(", ")
    : value
}

/** Build the Falcon-shaped answer-pair payload from a marked Falcon answer. */
export function buildFalconAutofillAnswerPairData(answer) {
  const profile = {
    ...asPlainObject(answer?.profile_data),
    ...asPlainObject(answer?.profileData),
  }

  const fromFillData = Object.fromEntries(
    (Array.isArray(answer?.fillDataList) ? answer.fillDataList : [])
      .filter(
        (row) =>
          typeof row?.name === "string" &&
          row.name.trim() !== "" &&
          row.value !== undefined,
      )
      .map((row) => [row.name, stringifyListValue(row.value)]),
  )

  if (profile.greenhouseLocation !== undefined) {
    fromFillData.greenhouseLocation = profile.greenhouseLocation
  }

  const normal =
    autofillAnswerPair.filterAutofillAnswerPairNormalSnapshot(fromFillData)
  const employmentSource =
    firstArrayField(profile, EMPLOYMENT_PROFILE_KEYS).length > 0
      ? firstArrayField(profile, EMPLOYMENT_PROFILE_KEYS)
      : answer?.workExperience
  const educationSource =
    firstArrayField(profile, EDUCATION_PROFILE_KEYS).length > 0
      ? firstArrayField(profile, EDUCATION_PROFILE_KEYS)
      : answer?.education

  const payload = omitUndefinedEntries({
    normal,
    employment: normalizeRecordRows(employmentSource),
    education: normalizeRecordRows(educationSource),
  })

  if (
    falconAnswerTracking.isFalconResponseAnswer(answer) ||
    Object.keys(payload.normal).length ||
    payload.employment.length ||
    payload.education.length
  ) {
    return payload
  }
  return undefined
}

function splitSnapshotSections(snapshot, additionalData) {
  const nextSnapshot = { ...asPlainObject(snapshot) }
  const nextAdditional = { ...omitUndefinedEntries(additionalData) }

  for (const { sourceKey, targetKey } of SECTION_KEY_MOVES) {
    const value = nextSnapshot[sourceKey]
    if (Array.isArray(value)) {
      if (nextAdditional[targetKey] === undefined) {
        nextAdditional[targetKey] = value
      }
      delete nextSnapshot[sourceKey]
    }
  }

  return { snapshot: nextSnapshot, additionalData: nextAdditional }
}

export function buildAutofillAnswerPairEventPayload({
  formUrl,
  autofillSnapshot,
  submitSnapshot,
  additionalAutofillData = {},
  additionalSubmitData = {},
  extraData = {},
  source,
}) {
  const autofill = splitSnapshotSections(
    autofillSnapshot,
    additionalAutofillData,
  )
  const submit = splitSnapshotSections(submitSnapshot, additionalSubmitData)

  return autofillAnswerPair.sanitizeAutofillAnswerPairPayload({
    formUrl,
    autofill: {
      normal: autofillAnswerPair.filterAutofillAnswerPairNormalSnapshot(
        autofill.snapshot,
      ),
      ...autofill.additionalData,
    },
    submit: {
      normal: autofillAnswerPair.filterAutofillAnswerPairNormalSnapshot(
        submit.snapshot,
      ),
      ...submit.additionalData,
    },
    ...omitUndefinedEntries(extraData),
    source,
  })
}

const DEBUG_STORAGE_KEY = "jobright:debugAutofillAnswerPair"

function isAutofillAnswerPairDebugEnabled() {
  try {
    const search = globalThis.location?.search || ""
    if (
      search.includes("jr_debug_autofill_answer_pair=1") ||
      search.includes("jobright_debug_autofill_answer_pair=1")
    ) {
      return true
    }
    return (
      globalThis.localStorage?.getItem(DEBUG_STORAGE_KEY) === "1" ||
      globalThis.__JOBRIGHT_DEBUG_AUTOFILL_ANSWER_PAIR__ === true
    )
  } catch {
    return false
  }
}

function debugAutofillAnswerPair(payload) {
  if (!isAutofillAnswerPairDebugEnabled()) return
  try {
    console.info("[Jobright][autofill_answer_pair]", JSON.stringify(payload))
  } catch {
    console.info("[Jobright][autofill_answer_pair]", payload)
  }
}

export async function sendAutofillAnswerPairEvent(
  event,
  trackFn,
  uploadFn = attributionClient.sendAutofillAnswerPairWithAttribution,
) {
  let extraData = event.extraData || {}
  if (extraData.falcon === undefined) {
    const registered = readRegisteredAnswer()
    if (
      registered &&
      falconAnswerTracking.isCurrentFalconResponseAnswer(registered)
    ) {
      const falcon =
        buildFalconAutofillAnswerPairData(registered) ?? {
          normal: {},
          employment: [],
          education: [],
        }
      if (falcon) {
        extraData = { ...extraData, falcon }
      }
    }
  }

  const payload = buildAutofillAnswerPairEventPayload({
    ...event,
    extraData,
  })
  debugAutofillAnswerPair(payload)

  if (trackFn) {
    trackFn("autofill_answer_pair", payload)
    return
  }

  try {
    await uploadFn(payload)
  } catch {
    console.warn("[AutofillInstallAttribution] answer pair upload failed", {
      reason: "event_upload_failed",
    })
  }
}
