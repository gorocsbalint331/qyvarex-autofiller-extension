// @ts-nocheck

const EDUCATION_FIELD_LABELS = {
  school: "School",
  discipline: "Discipline",
}

function getFirstString(value) {
  return typeof value === "string"
    ? value.trim()
    : Array.isArray(value)
      ? (value.find((item) => typeof item === "string" && item.trim()) ?? "")
      : ""
}

function normalizeCandidate(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^\p{L}\p{N}]+/gu, "")
}

function addUniqueCandidate(candidates, value) {
  const candidate = getFirstString(value)
  if (!candidate) {
    return
  }

  const normalizedCandidate = normalizeCandidate(candidate)
  if (
    normalizedCandidate &&
    !candidates.some(
      (existingCandidate) =>
        normalizeCandidate(existingCandidate) === normalizedCandidate,
    )
  ) {
    candidates.push(candidate)
  }
}

function normalizeLabel(value) {
  return String(value ?? "")
    .replace(/\*/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function findSnapshotValue(snapshot, label) {
  if (!snapshot) {
    return { found: false, value: "" }
  }

  if (Object.prototype.hasOwnProperty.call(snapshot, label)) {
    return {
      found: true,
      value: getFirstString(snapshot[label]),
    }
  }

  const normalizedLabel = normalizeLabel(label)
  for (const [snapshotLabel, value] of Object.entries(snapshot)) {
    if (normalizeLabel(snapshotLabel) === normalizedLabel) {
      return {
        found: true,
        value: getFirstString(value),
      }
    }
  }

  return { found: false, value: "" }
}

function getResolvedValue(resolveRecord, fieldType) {
  return fieldType === "school"
    ? getFirstString(resolveRecord?.school)
    : getFirstString(resolveRecord?.discipline)
}

function getResolvePayload(resolveRecord, fieldType) {
  return fieldType === "school"
    ? resolveRecord?.schoolPayload
    : resolveRecord?.disciplinePayload
}

function collectEducationCandidates({ record, resolveRecord, fieldType }) {
  const candidates = []
  const resolvePayload = getResolvePayload(resolveRecord, fieldType)

  addUniqueCandidate(
    candidates,
    getResolvedValue(resolveRecord, fieldType),
  )
  addUniqueCandidate(candidates, resolvePayload?.original_answer)

  if (fieldType === "school") {
    addUniqueCandidate(candidates, record?.rawSchool)
    addUniqueCandidate(candidates, record?.["School original answer"])
    addUniqueCandidate(candidates, record?.School)
  } else {
    addUniqueCandidate(candidates, record?.rawMajor)
    addUniqueCandidate(candidates, record?.rawDegree)
    addUniqueCandidate(candidates, record?.["Discipline original answer"])
    addUniqueCandidate(candidates, record?.Discipline)
  }

  return candidates
}

function buildValidationResult({
  sourceValue,
  resolveValue,
  committedValue,
  attemptedCandidates,
}) {
  const normalizedCommittedValue = normalizeCandidate(committedValue)
  const matchesAttemptedCandidate =
    Boolean(normalizedCommittedValue) &&
    attemptedCandidates.some(
      (candidate) =>
        normalizeCandidate(candidate) === normalizedCommittedValue,
    )

  return {
    status: attemptedCandidates.length
      ? normalizedCommittedValue
        ? matchesAttemptedCandidate
          ? "matched"
          : "mismatched"
        : "empty"
      : "not_checked",
    sourceValue,
    resolveValue,
    committedValue,
    attemptedCandidates,
  }
}

function findRetryResult(retryResults, fieldType, index) {
  return retryResults?.find(
    (result) =>
      result.fieldType === fieldType &&
      (fieldType === "location" || result.index === index),
  )
}

function getResetStatus(initialStatus) {
  return initialStatus === "empty"
    ? "reset_after_empty"
    : initialStatus === "not_checked"
      ? "reset_after_not_checked"
      : "reset_after_mismatch"
}

function applyRetryResult(validationResult, retryResult) {
  if (!validationResult || !retryResult) {
    return validationResult
  }

  return {
    ...validationResult,
    status: retryResult.resetApplied
      ? getResetStatus(retryResult.initialStatus)
      : validationResult.status === "matched"
        ? "retry_matched"
        : validationResult.status,
    initialStatus: retryResult.initialStatus,
    initialCommittedValue: retryResult.initialCommittedValue,
    retryCount: retryResult.retryCount,
    resetApplied: retryResult.resetApplied === true,
  }
}

function buildEducationFieldValidation({
  record,
  snapshotRecord,
  resolveRecord,
  fieldType,
}) {
  const label = EDUCATION_FIELD_LABELS[fieldType]
  const snapshotValue = findSnapshotValue(snapshotRecord, label)
  const resolveValue = getResolvedValue(resolveRecord, fieldType)
  const resolvePayload = getResolvePayload(resolveRecord, fieldType)

  if (!snapshotValue.found && !resolveValue && !resolvePayload) {
    return null
  }

  const attemptedCandidates = collectEducationCandidates({
    record,
    resolveRecord,
    fieldType,
  })

  return buildValidationResult({
    sourceValue:
      resolvePayload?.original_answer ?? attemptedCandidates[0] ?? "",
    resolveValue,
    committedValue: snapshotValue.value,
    attemptedCandidates,
  })
}

function buildLocationValidation({ autofillSnapshot, location }) {
  if (!location) {
    return null
  }

  const attemptedCandidates = []
  for (const candidate of location.attemptedCandidates ?? []) {
    addUniqueCandidate(attemptedCandidates, candidate)
  }
  addUniqueCandidate(attemptedCandidates, location.resolveValue)

  const snapshotValue = findSnapshotValue(autofillSnapshot, location.label)
  return {
    label: location.label,
    ...buildValidationResult({
      sourceValue: location.sourceValue,
      resolveValue: location.resolveValue ?? "",
      committedValue: snapshotValue.value,
      attemptedCandidates,
    }),
  }
}

export function buildGreenhouseRuntimeValidationTrackingData({
  educationRecords = [],
  educationSnapshotRecords = [],
  educationResolveRecords = [],
  autofillSnapshot,
  location,
  retryResults,
}) {
  const validation = {}

  if (Array.isArray(educationRecords) && educationRecords.length > 0) {
    validation.education = Array.from(
      { length: educationRecords.length },
      (_, index) => {
        const record = educationRecords[index] ?? {}
        const snapshotRecord = educationSnapshotRecords[index]
        const resolveRecord = educationResolveRecords[index]

        return {
          school: applyRetryResult(
            buildEducationFieldValidation({
              record,
              snapshotRecord,
              resolveRecord,
              fieldType: "school",
            }),
            findRetryResult(retryResults, "school", index),
          ),
          discipline: applyRetryResult(
            buildEducationFieldValidation({
              record,
              snapshotRecord,
              resolveRecord,
              fieldType: "discipline",
            }),
            findRetryResult(retryResults, "discipline", index),
          ),
        }
      },
    )
  }

  const locationValidation = applyRetryResult(
    buildLocationValidation({ autofillSnapshot, location }),
    findRetryResult(retryResults, "location"),
  )
  if (locationValidation) {
    validation.location = locationValidation
  }

  return Object.keys(validation).length > 0 ? { validation } : {}
}

function buildValidationLogEntry(
  validationResult,
  fieldType,
  fieldLabel,
  index,
) {
  return {
    ...(typeof index === "number" ? { index } : {}),
    fieldType,
    fieldLabel,
    level:
      validationResult.status === "matched" ||
      validationResult.status === "retry_matched"
        ? "info"
        : "warn",
    status: validationResult.status,
    committedValue: validationResult.committedValue ?? "",
    attemptedCandidates: Array.isArray(validationResult.attemptedCandidates)
      ? validationResult.attemptedCandidates
      : [],
  }
}

export function getGreenhouseRuntimeValidationLogEntries(trackingData) {
  const entries = []
  const educationValidation = trackingData?.validation?.education

  if (Array.isArray(educationValidation)) {
    educationValidation.forEach((record, index) => {
      for (const fieldType of ["school", "discipline"]) {
        const validationResult = record?.[fieldType]
        if (validationResult?.status) {
          entries.push(
            buildValidationLogEntry(
              validationResult,
              fieldType,
              EDUCATION_FIELD_LABELS[fieldType],
              index,
            ),
          )
        }
      }
    })
  }

  const locationValidation = trackingData?.validation?.location
  if (locationValidation?.status) {
    entries.push(
      buildValidationLogEntry(
        locationValidation,
        "location",
        locationValidation.label || "Location",
      ),
    )
  }

  return entries
}
