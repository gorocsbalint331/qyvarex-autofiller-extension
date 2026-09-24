// @ts-nocheck
/**
 * MyWorkday — education resolve operations and runtime validation tracking.
 */

import * as resolveTraceTracking from "../resolve-trace-tracking.js"
import * as enums from "../../../core/enums.js"

function buildWorkdayEducationRuntimeValidationRetryRecord({
  record,
  ruleLabel,
  attemptedCandidates,
}) {
  const candidates = Array.from(
    new Set(
      attemptedCandidates
        .map((value) => String(value ?? "").trim())
        .filter(Boolean),
    ),
  )
  return ruleLabel && candidates.length !== 0
    ? {
        ...record,
        [ruleLabel]: candidates,
      }
    : {
        ...record,
      }
}

const FIELD_LABEL_BY_TYPE = {
  school: "School",
  discipline: "Field of Study",
  degree: "Degree",
}
const FIELD_TYPE_ALIASES = {
  school: new Set(["school"]),
  discipline: new Set(["fieldofstudy", "discipline"]),
  degree: new Set(["degree"]),
}

function normalizeLabel(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
}

function getEducationFieldTypeFromLabel(label) {
  const normalized = normalizeLabel(label)
  return normalized === "field of study"
    ? "discipline"
    : normalized === "degree"
      ? "degree"
      : normalized === "school" || normalized === "school or university"
        ? "school"
        : null
}

function getCanonicalEducationLabel(label) {
  const normalized = normalizeLabel(label)
  return normalized === "field of study"
    ? "Field of Study"
    : normalized === "degree"
      ? "Degree"
      : normalized === "school"
        ? "School"
        : normalized === "school or university"
          ? "School or University"
          : label
}

function getOperationFieldType(operation) {
  return typeof operation?.field_type === "string" &&
    operation.field_type.trim()
    ? normalizeLabel(operation.field_type)
    : ""
}

function operationMatchesFieldType(operation, fieldType) {
  return FIELD_TYPE_ALIASES[fieldType].has(getOperationFieldType(operation))
}

function findEducationOperation(record, fieldType) {
  const operations = Array.isArray(record?.operation) ? record.operation : []
  return (
    operations.find((operation) =>
      operationMatchesFieldType(operation ?? {}, fieldType),
    ) ?? null
  )
}

function cloneOriginalAnswerOnly(operation) {
  return operation
    ? {
        original_answer: String(operation.original_answer ?? ""),
      }
    : null
}

function buildEducationResolveTrace(records) {
  return Array.from({ length: records.length }, (_unused, index) => {
    const record = records[index] ?? {}
    const school = findEducationOperation(record, "school")
    const discipline = findEducationOperation(record, "discipline")
    const degree = findEducationOperation(record, "degree")
    return {
      recordIndex: index,
      school: resolveTraceTracking.buildResolveTraceField(
        "school",
        school,
        getResolvedEducationValue(record, "school"),
      ),
      discipline: resolveTraceTracking.buildResolveTraceField(
        "discipline",
        discipline,
        getResolvedEducationValue(record, "discipline"),
      ),
      degree: resolveTraceTracking.buildResolveTraceField(
        "degree",
        degree,
        getResolvedEducationValue(record, "degree"),
      ),
    }
  })
}

function buildEducationCommonOperations(records) {
  const schoolRecord = records.find((record) =>
    findEducationOperation(record ?? {}, "school"),
  )
  const disciplineRecord = records.find((record) =>
    findEducationOperation(record ?? {}, "discipline"),
  )
  const degreeRecord = records.find((record) =>
    findEducationOperation(record ?? {}, "degree"),
  )
  return {
    school: resolveTraceTracking.cloneAutofillOperationCommon(
      findEducationOperation(schoolRecord ?? {}, "school"),
    ),
    discipline: resolveTraceTracking.cloneAutofillOperationCommon(
      findEducationOperation(disciplineRecord ?? {}, "discipline"),
    ),
    degree: resolveTraceTracking.cloneAutofillOperationCommon(
      findEducationOperation(degreeRecord ?? {}, "degree"),
    ),
  }
}

function getResolvedEducationValue(record, fieldType) {
  return fieldType === "school"
    ? coerceEducationText(record?.["School or University"]) ||
        coerceEducationText(record?.School)
    : fieldType === "degree"
      ? coerceEducationText(record?.Degree) ||
        coerceEducationText(record?.rawDegree)
      : coerceEducationText(record?.["Field of Study"]) ||
        coerceEducationText(record?.Study)
}

function shouldResolveWorkdayEducationLabel(rule) {
  const fieldType = getEducationFieldTypeFromLabel(rule.label)
  return (
    !!fieldType &&
    (fieldType === "school"
      ? rule.type === enums.FIELD_TYPE.SEARCH ||
        rule.type === enums.FIELD_TYPE.MULTI_SELECT
      : fieldType === "discipline")
  )
}

function getSelectedEducationValue(result) {
  return (
    result.selected_values.find(
      (value) => typeof value === "string" && value.trim(),
    ) ?? ""
  )
}

function coerceEducationText(value) {
  return typeof value === "string"
    ? value.trim()
    : Array.isArray(value)
      ? (value.find(
          (item) => typeof item === "string" && item.trim(),
        ) ?? "")
      : ""
}

function isNumericOnlyEducationValue(value) {
  const text = value.trim()
  if (!text) return false
  if (/^\d+$/.test(text)) return true
  try {
    const parsed = JSON.parse(text)
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed.every(
        (item) => typeof item === "string" && /^\d+$/.test(item.trim()),
      )
    }
  } catch {
    // ignore JSON parse errors
  }
  return false
}

function normalizeEducationCompareKey(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "")
}

function pushUniqueEducationCandidate(candidates, value) {
  const text = coerceEducationText(value)
  if (!text) return
  const key = normalizeEducationCompareKey(text)
  if (!key || candidates.some((item) => normalizeEducationCompareKey(item) === key)) {
    return
  }
  candidates.push(text)
}

function getEducationAttemptedCandidates(record, fieldType) {
  const operation = findEducationOperation(record, fieldType)
  const candidates = []
  if (operation) {
    pushUniqueEducationCandidate(
      candidates,
      getResolvedEducationValue(record, fieldType),
    )
    pushUniqueEducationCandidate(candidates, operation.original_answer)
  } else {
    pushUniqueEducationCandidate(
      candidates,
      getResolvedEducationValue(record, fieldType),
    )
    if (fieldType === "discipline") {
      pushUniqueEducationCandidate(candidates, record?.rawDegree)
      pushUniqueEducationCandidate(candidates, record?.Study)
    } else if (fieldType === "degree") {
      pushUniqueEducationCandidate(candidates, record?.rawDegree)
      pushUniqueEducationCandidate(candidates, record?.Degree)
    } else {
      pushUniqueEducationCandidate(candidates, record?.rawSchool)
      pushUniqueEducationCandidate(candidates, record?.School)
    }
  }
  return candidates
}

function getSnapshotEducationValue(snapshotRecord, fieldType) {
  return snapshotRecord
    ? fieldType === "discipline"
      ? coerceEducationText(snapshotRecord?.["Field of Study"]) ||
        coerceEducationText(snapshotRecord?.Study)
      : fieldType === "degree"
        ? coerceEducationText(snapshotRecord?.Degree)
        : coerceEducationText(snapshotRecord?.["School or University"]) ||
          coerceEducationText(snapshotRecord?.School)
    : ""
}

function buildEducationFieldValidation({
  record,
  snapshotRecord,
  fieldType,
}) {
  const operation = findEducationOperation(record ?? {}, fieldType)
  const attemptedCandidates = getEducationAttemptedCandidates(
    record ?? {},
    fieldType,
  )
  const committedValue = getSnapshotEducationValue(snapshotRecord, fieldType)
  const committedKey = normalizeEducationCompareKey(committedValue)
  const matched =
    !!committedKey &&
    attemptedCandidates.some(
      (candidate) =>
        normalizeEducationCompareKey(candidate) === committedKey,
    )
  return {
    status: attemptedCandidates.length
      ? committedKey
        ? matched
          ? "matched"
          : "mismatched"
        : "empty"
      : "not_checked",
    sourceValue: operation?.original_answer ?? attemptedCandidates[0] ?? "",
    resolveValue: operation
      ? getResolvedEducationValue(record ?? {}, fieldType)
      : "",
    committedValue,
    attemptedCandidates,
  }
}

function findRetryResult(retryResults, fieldType, index) {
  return retryResults?.find(
    (item) => item.fieldType === fieldType && item.index === index,
  )
}

function getResetStatus(initialStatus) {
  return initialStatus === "empty"
    ? "reset_after_empty"
    : initialStatus === "not_checked"
      ? "reset_after_not_checked"
      : "reset_after_mismatch"
}

function applyRetryResultToValidation(validation, retryResult) {
  return validation && retryResult
    ? {
        ...validation,
        status: retryResult.resetApplied
          ? getResetStatus(retryResult.initialStatus)
          : validation.status === "matched"
            ? "retry_matched"
            : validation.status,
        initialStatus: retryResult.initialStatus,
        initialCommittedValue: retryResult.initialCommittedValue,
        retryCount: retryResult.retryCount,
        resetApplied: retryResult.resetApplied === true,
      }
    : validation
}

function shouldValidateSchoolField({ record, rule }) {
  return (
    !!ruleHasEducationChild(rule, "school") &&
    (!!findEducationOperation(record ?? {}, "school") ||
      (rule?.children ?? []).some(
        (child) =>
          getEducationFieldTypeFromLabel(child.label) === "school" &&
          shouldResolveWorkdayEducationLabel(child),
      ))
  )
}

function ruleHasEducationChild(rule, fieldType) {
  return (
    !rule ||
    (rule.children ?? []).some(
      (child) => getEducationFieldTypeFromLabel(child.label) === fieldType,
    )
  )
}

function isDisciplineLabel(label) {
  return getEducationFieldTypeFromLabel(label) === "discipline"
}

function getWorkdayEducationOriginalAnswerFromRecord(record, label) {
  const fieldType = getEducationFieldTypeFromLabel(label)
  if (fieldType === "school") {
    const rawSchool = coerceEducationText(record?.rawSchool)
    if (rawSchool) return rawSchool
    const schoolOrUniversity = coerceEducationText(
      record?.["School or University"],
    )
    return schoolOrUniversity || coerceEducationText(record?.School)
  }
  if (fieldType === "degree") {
    const rawDegree = coerceEducationText(record?.rawDegree)
    return rawDegree || coerceEducationText(record?.Degree)
  }
  const fieldOfStudy = coerceEducationText(record?.["Field of Study"])
  if (fieldOfStudy && !isNumericOnlyEducationValue(fieldOfStudy)) {
    return fieldOfStudy
  }
  const study = coerceEducationText(record?.Study)
  if (study && !isNumericOnlyEducationValue(study)) return study
  const rawDegree = coerceEducationText(record?.rawDegree)
  return rawDegree || ""
}

function buildWorkdayEducationOperation({
  apiBase,
  label,
  originalAnswer,
}) {
  const fieldType = getEducationFieldTypeFromLabel(label)
  if (!apiBase || !apiBase.trim()) {
    throw Error(
      `Unable to build workday education operation for ${label}: apiBase is empty`,
    )
  }
  if (!fieldType) {
    throw Error(
      `Unable to build workday education operation for ${label}: unsupported label`,
    )
  }
  const schemas = {
    school: {
      question: "What school did you attend?",
      description: "Search and select your school.",
      searchRequestUrl: `${apiBase}/schools`,
      searchParamDescription: "Search term for the school dropdown.",
    },
    discipline: {
      question: "What was your field of study?",
      description: "Search and select your field of study.",
      searchRequestUrl: `${apiBase}/values/educations/fieldsOfStudy`,
      searchParamDescription: "Search term for the field of study dropdown.",
    },
    degree: {
      question: "What degree did you earn?",
      description: "Search and select your degree.",
      searchRequestUrl: `${apiBase}/values/educations/degrees`,
      searchParamDescription: "Search term for the degree dropdown.",
    },
  }
  const {
    question,
    description,
    searchRequestUrl,
    searchParamDescription,
  } = schemas[fieldType]
  return {
    field_type: fieldType,
    question,
    description,
    original_answer: originalAnswer,
    search_request_schema: {
      url: searchRequestUrl,
      allowed_methods: ["GET"],
      headers: {
        accept: "application/json",
      },
      params: [
        {
          name: "search",
          location: "query",
          description: searchParamDescription,
          default_value: "",
          isSearchParam: true,
        },
      ],
    },
  }
}

function mergeWorkdayEducationOperationIntoRecord(
  record,
  label,
  operation,
) {
  const operations = Array.isArray(record.operation)
    ? [...record.operation]
    : []
  const nextRecord = {
    ...record,
    operation: operations,
  }
  const fieldType =
    getEducationFieldTypeFromLabel(label) ??
    (getOperationFieldType(operation) === "school"
      ? "school"
      : getOperationFieldType(operation) === "degree"
        ? "degree"
        : "discipline")
  const existingIndex = operations.findIndex((item) =>
    operationMatchesFieldType(item ?? {}, fieldType),
  )
  if (existingIndex >= 0) {
    operations.splice(existingIndex, 1, operation)
  } else {
    operations.push(operation)
  }
  return nextRecord
}

function applyWorkdayEducationResolveResult({
  record,
  label,
  operation,
  result,
}) {
  if (result.action !== "SELECT_OPTIONS") return record
  const selectedValue = getSelectedEducationValue(result)
  return selectedValue
    ? {
        ...mergeWorkdayEducationOperationIntoRecord(
          record,
          label,
          operation,
        ),
        [getCanonicalEducationLabel(label)]: selectedValue,
      }
    : record
}

function buildWorkdayEducationResolveTrackingData(records) {
  return Array.isArray(records) && records.length !== 0
    ? {
        resolve: {
          education: Array.from(
            { length: records.length },
            (_unused, index) => {
              const record = records[index]
              const school = findEducationOperation(record ?? {}, "school")
              const discipline = findEducationOperation(
                record ?? {},
                "discipline",
              )
              const degree = findEducationOperation(record ?? {}, "degree")
              return {
                school: school
                  ? getResolvedEducationValue(record ?? {}, "school")
                  : "",
                discipline: discipline
                  ? getResolvedEducationValue(record ?? {}, "discipline")
                  : "",
                degree: degree
                  ? getResolvedEducationValue(record ?? {}, "degree")
                  : "",
              }
            },
          ),
        },
        resolvePayload: {
          educationCommon: buildEducationCommonOperations(records),
          education: Array.from(
            { length: records.length },
            (_unused, index) => {
              const record = records[index]
              return {
                school: cloneOriginalAnswerOnly(
                  findEducationOperation(record ?? {}, "school"),
                ),
                discipline: cloneOriginalAnswerOnly(
                  findEducationOperation(record ?? {}, "discipline"),
                ),
                degree: cloneOriginalAnswerOnly(
                  findEducationOperation(record ?? {}, "degree"),
                ),
              }
            },
          ),
        },
        resolveTrace: {
          education: buildEducationResolveTrace(records),
        },
      }
    : {}
}

function scoreEducationSnapshotMatch(record, snapshotRecord) {
  return snapshotRecord
    ? ["school", "discipline", "degree"]
        .map((fieldType) => {
          const committedKey = normalizeEducationCompareKey(
            getSnapshotEducationValue(snapshotRecord, fieldType),
          )
          return committedKey &&
            getEducationAttemptedCandidates(record, fieldType).some(
              (candidate) =>
                normalizeEducationCompareKey(candidate) === committedKey,
            )
            ? 1
            : 0
        })
        .reduce((sum, score) => sum + score, 0)
    : 0
}

function alignEducationSnapshots(records, snapshotRows) {
  const usedIndexes = new Set()
  return records.map((record, index) => {
    let bestIndex = -1
    let bestScore = 0
    for (let snapshotIndex = 0; snapshotIndex < snapshotRows.length; snapshotIndex++) {
      if (usedIndexes.has(snapshotIndex)) continue
      const score = scoreEducationSnapshotMatch(
        record ?? {},
        snapshotRows[snapshotIndex],
      )
      if (score > bestScore) {
        bestScore = score
        bestIndex = snapshotIndex
      }
    }
    if (bestIndex !== -1) {
      usedIndexes.add(bestIndex)
      return snapshotRows[bestIndex]
    }
    if (usedIndexes.has(index)) return undefined
    usedIndexes.add(index)
    return snapshotRows[index]
  })
}

function buildWorkdayEducationRuntimeValidationTrackingData(
  records,
  snapshotRows = [],
  rules = [],
  retryResults = [],
) {
  if (!Array.isArray(records) || records.length === 0) return {}
  const alignedSnapshots = alignEducationSnapshots(records, snapshotRows)
  return {
    validation: {
      education: Array.from({ length: records.length }, (_unused, index) => {
        const record = records[index] ?? {}
        const snapshotRecord = alignedSnapshots[index]
        const rule = rules[index]
        return {
          school: shouldValidateSchoolField({
            record,
            rule,
          })
            ? applyRetryResultToValidation(
                buildEducationFieldValidation({
                  record,
                  snapshotRecord,
                  fieldType: "school",
                }),
                findRetryResult(retryResults, "school", index),
              )
            : null,
          discipline: ruleHasEducationChild(rule, "discipline")
            ? applyRetryResultToValidation(
                buildEducationFieldValidation({
                  record,
                  snapshotRecord,
                  fieldType: "discipline",
                }),
                findRetryResult(retryResults, "discipline", index),
              )
            : null,
          degree: ruleHasEducationChild(rule, "degree")
            ? applyRetryResultToValidation(
                buildEducationFieldValidation({
                  record,
                  snapshotRecord,
                  fieldType: "degree",
                }),
                findRetryResult(retryResults, "degree", index),
              )
            : null,
        }
      }),
    },
  }
}

function getWorkdayEducationRuntimeValidationLogEntries(trackingData) {
  const education = trackingData?.validation?.education
  return Array.isArray(education)
    ? education.flatMap((entry, index) =>
        ["school", "discipline", "degree"]
          .map((fieldType) => {
            const field = entry?.[fieldType]
            return field?.status
              ? {
                  index,
                  fieldType,
                  fieldLabel: FIELD_LABEL_BY_TYPE[fieldType],
                  level:
                    field.status === "matched" ||
                    field.status === "retry_matched"
                      ? "info"
                      : "warn",
                  status: field.status,
                  committedValue: field.committedValue ?? "",
                  attemptedCandidates: Array.isArray(
                    field.attemptedCandidates,
                  )
                    ? field.attemptedCandidates
                    : [],
                }
              : null
          })
          .filter((entry) => entry !== null),
      )
    : []
}

function getUnresolvedWorkdayEducationRuntimeValidationLogEntries(
  trackingData,
) {
  return getWorkdayEducationRuntimeValidationLogEntries(trackingData).filter(
    (entry) =>
      entry.level === "warn" && entry.attemptedCandidates.length > 0,
  )
}

async function resolveWorkdayEducationRecord({
  apiBase,
  rule,
  record,
  resolveOperation,
}) {
  if (!shouldResolveWorkdayEducationLabel(rule)) return record
  const originalAnswer = getWorkdayEducationOriginalAnswerFromRecord(
    record,
    rule.label,
  )
  if (!originalAnswer) return record
  const operation = buildWorkdayEducationOperation({
    apiBase,
    label: rule.label,
    originalAnswer,
  })
  const resolved = await resolveOperation(operation)
  return resolved
    ? applyWorkdayEducationResolveResult({
        record,
        label: rule.label,
        operation: resolved.operation,
        result: resolved.result,
      })
    : record
}

async function resolveWorkdayEducationRecordsInParallel({
  apiBase,
  rules,
  records,
  resolveOperation,
}) {
  const nextRecords = await Promise.all(
    records.map(async (record, index) => {
      if (!record) return record
      const children = rules[index]?.children ?? []
      const resolvableChildren = children.filter((child) =>
        shouldResolveWorkdayEducationLabel(child),
      )
      if (resolvableChildren.length === 0) return record

      const resolveResults = await Promise.all(
        resolvableChildren.map(async (child) => {
          const originalAnswer = getWorkdayEducationOriginalAnswerFromRecord(
            record,
            child.label,
          )
          if (!originalAnswer) return null
          const operation = buildWorkdayEducationOperation({
            apiBase,
            label: child.label,
            originalAnswer,
          })
          const resolved = await resolveOperation(operation)
          return resolved
            ? {
                label: child.label,
                operation: resolved.operation,
                result: resolved.result,
              }
            : null
        }),
      )

      return resolveResults.reduce(
        (currentRecord, resolveResult) =>
          resolveResult
            ? applyWorkdayEducationResolveResult({
                record: currentRecord,
                label: resolveResult.label,
                operation: resolveResult.operation,
                result: resolveResult.result,
              })
            : currentRecord,
        record,
      )
    }),
  )

  nextRecords.forEach((record, index) => {
    if (record) records[index] = record
  })
  return records
}

export {
  applyWorkdayEducationResolveResult,
  buildWorkdayEducationOperation,
  buildWorkdayEducationResolveTrackingData,
  buildWorkdayEducationRuntimeValidationRetryRecord,
  buildWorkdayEducationRuntimeValidationTrackingData,
  getUnresolvedWorkdayEducationRuntimeValidationLogEntries,
  getWorkdayEducationOriginalAnswerFromRecord,
  getWorkdayEducationRuntimeValidationLogEntries,
  mergeWorkdayEducationOperationIntoRecord,
  resolveWorkdayEducationRecord,
  resolveWorkdayEducationRecordsInParallel,
  shouldResolveWorkdayEducationLabel,
}
