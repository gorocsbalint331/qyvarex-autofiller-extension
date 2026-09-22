// @ts-nocheck

const GREENHOUSE_REQUEST_HEADERS = {
  accept: "*/*",
  "accept-language": "en",
  origin: "https://job-boards.greenhouse.io",
  referer: "https://job-boards.greenhouse.io/",
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
}

function normalizeEducationLabel(value) {
  return String(value ?? "").trim().toLowerCase()
}

function getEducationFieldType(label) {
  const normalizedLabel = normalizeEducationLabel(label)
  return normalizedLabel === "school"
    ? "school"
    : normalizedLabel === "degree"
      ? "degree"
      : normalizedLabel === "discipline"
        ? "discipline"
        : null
}

function getOperationFieldType(operation) {
  return typeof operation?.field_type === "string" &&
    operation.field_type.trim()
    ? normalizeEducationLabel(operation.field_type)
    : ""
}

export function getEducationFieldKeyByLabel(label) {
  const normalizedLabel = normalizeEducationLabel(label)
  return normalizedLabel === "school"
    ? "School"
    : normalizedLabel === "degree"
      ? "Degree"
      : normalizedLabel === "discipline"
        ? "Discipline"
        : null
}

export function getEducationSearchTypeByLabel(label) {
  const normalizedLabel = normalizeEducationLabel(label)
  return normalizedLabel === "school"
    ? "schools"
    : normalizedLabel === "degree"
      ? "degrees"
      : normalizedLabel === "discipline"
        ? "disciplines"
        : null
}

export function shouldResolveEducationLabel(label) {
  const normalizedLabel = normalizeEducationLabel(label)
  return (
    normalizedLabel === "school" || normalizedLabel === "discipline"
  )
}

export function extractGreenhouseBoardToken(url) {
  const parsedUrl = new URL(url)
  const queryToken = parsedUrl.searchParams.get("for")
  if (queryToken) {
    return queryToken
  }

  const pathMatch =
    parsedUrl.pathname.match(/\/embed\/([^/]+)\/jobs\//) ||
    parsedUrl.pathname.match(/^\/([^/]+)\/jobs\//)
  return pathMatch?.[1] ?? ""
}

export function extractEducationSearchTerm(value) {
  const searchTerm = String(value ?? "")
    .trim()
    .replace(/^the\s+/i, "")
    .replace(/[^\p{L}\p{N}'\s-]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()

  return searchTerm || ""
}

function getEducationQuestion(label) {
  const normalizedLabel = normalizeEducationLabel(label)
  return normalizedLabel === "school"
    ? "What school did you attend?"
    : normalizedLabel === "degree"
      ? "What degree did you earn?"
      : normalizedLabel === "discipline"
        ? "What was your discipline?"
        : label
}

function getEducationDescription(label) {
  const normalizedLabel = normalizeEducationLabel(label)
  return normalizedLabel === "school"
    ? "Search and select your school."
    : normalizedLabel === "degree"
      ? "Search and select your degree."
      : normalizedLabel === "discipline"
        ? "Search and select your discipline."
        : `Search and select your ${normalizedLabel}.`
}

function getDefaultEducationSearchTerm() {
  return ""
}

export function buildGreenhouseEducationOperation({
  currentUrl,
  label,
  originalAnswer,
}) {
  const boardToken = extractGreenhouseBoardToken(currentUrl)
  const searchType = getEducationSearchTypeByLabel(label)
  const fieldType = getEducationFieldType(label)

  if (!boardToken || !searchType || !fieldType) {
    throw Error(
      `Unable to build greenhouse education operation for ${label}`,
    )
  }

  return {
    field_type: fieldType,
    question: getEducationQuestion(label),
    description: getEducationDescription(label),
    original_answer: originalAnswer,
    search_request_schema: {
      url: `https://boards.greenhouse.io/v1/boards/${boardToken}/education/${searchType}`,
      allowed_methods: ["GET"],
      headers: {
        ...GREENHOUSE_REQUEST_HEADERS,
      },
      params: [
        {
          name: "term",
          location: "query",
          description: `Search term for the ${normalizeEducationLabel(label)} dropdown.`,
          default_value: getDefaultEducationSearchTerm(),
          isSearchParam: true,
        },
        {
          name: "page",
          location: "query",
          description: "Pagination for the dropdown search results.",
          default_value: "1",
          isMetaParam: true,
        },
      ],
    },
  }
}

export function mergeEducationOperationIntoRecord(
  record,
  label,
  operation,
) {
  const fieldType =
    getEducationFieldType(label) ?? normalizeEducationLabel(label)
  const operations = Array.isArray(record.operation)
    ? [...record.operation]
    : []
  const updatedRecord = {
    ...record,
    operation: operations,
  }
  const operationIndex = operations.findIndex(
    (existingOperation) =>
      getOperationFieldType(existingOperation ?? {}) === fieldType,
  )

  if (operationIndex >= 0) {
    operations.splice(operationIndex, 1, operation)
  } else {
    operations.push(operation)
  }

  return updatedRecord
}

function getSelectedValue(result) {
  return (
    result.selected_values.find(
      (value) => typeof value === "string" && value.trim(),
    ) ?? ""
  )
}

function getFirstString(value) {
  return typeof value === "string"
    ? value.trim()
    : Array.isArray(value)
      ? (value.find((item) => typeof item === "string" && item.trim()) ?? "")
      : ""
}

function getRawEducationAnswer(record, label) {
  const normalizedLabel = normalizeEducationLabel(label)
  return normalizedLabel === "school"
    ? getFirstString(record?.rawSchool)
    : normalizedLabel === "degree"
      ? getFirstString(record?.rawDegree)
      : normalizedLabel === "discipline"
        ? getFirstString(record?.rawMajor) ||
          getFirstString(record?.rawDegree)
        : ""
}

export function getEducationOriginalAnswerFromRecord(record, label) {
  const rawAnswer = getRawEducationAnswer(record, label)
  if (rawAnswer) {
    return rawAnswer
  }

  const fieldKey = getEducationFieldKeyByLabel(label) ?? label
  const originalAnswer = record?.[`${fieldKey} original answer`]
  if (typeof originalAnswer === "string" && originalAnswer.trim()) {
    return originalAnswer.trim()
  }

  const value = record?.[fieldKey]
  if (typeof value === "string") {
    return value.trim()
  }
  if (Array.isArray(value)) {
    return (
      value.find(
        (item) =>
          typeof item === "string" &&
          item.trim() &&
          item.trim().toLowerCase() !== "other",
      ) ?? ""
    )
  }
  return ""
}

export function applyEducationResolveResultToRecord({
  record,
  label,
  operation,
  result,
}) {
  if (result.action !== "SELECT_OPTIONS") {
    return record
  }

  const selectedValue = getSelectedValue(result)
  if (!selectedValue) {
    return record
  }

  const fieldKey = getEducationFieldKeyByLabel(label) ?? label
  return {
    ...mergeEducationOperationIntoRecord(record, label, operation),
    [fieldKey]: selectedValue,
  }
}

export async function resolveEducationRecordForRule({
  currentUrl,
  rule,
  record,
  resolveOperation,
}) {
  if (
    !getEducationSearchTypeByLabel(rule.label) ||
    !shouldResolveEducationLabel(rule.label)
  ) {
    return record
  }

  const originalAnswer = getEducationOriginalAnswerFromRecord(
    record,
    rule.label,
  )
  if (!originalAnswer) {
    return record
  }

  const operation = buildGreenhouseEducationOperation({
    currentUrl,
    label: rule.label,
    originalAnswer,
  })
  const resolution = await resolveOperation(operation)

  return resolution
    ? applyEducationResolveResultToRecord({
        record,
        label: rule.label,
        operation: resolution.operation,
        result: resolution.result,
      })
    : record
}

export async function resolveEducationRecordChildrenInParallel({
  currentUrl,
  rules,
  record,
  resolveOperation,
}) {
  const resolvableRules = rules.filter(
    (rule) =>
      Boolean(getEducationSearchTypeByLabel(rule.label)) &&
      shouldResolveEducationLabel(rule.label),
  )
  if (resolvableRules.length === 0) {
    return record
  }

  const resolutions = await Promise.all(
    resolvableRules.map(async (rule) => {
      const originalAnswer = getEducationOriginalAnswerFromRecord(
        record,
        rule.label,
      )
      if (!originalAnswer) {
        return null
      }

      const operation = buildGreenhouseEducationOperation({
        currentUrl,
        label: rule.label,
        originalAnswer,
      })
      const resolution = await resolveOperation(operation)

      return resolution
        ? {
            label: rule.label,
            operation: resolution.operation,
            result: resolution.result,
          }
        : null
    }),
  )

  return resolutions.reduce(
    (updatedRecord, resolution) =>
      resolution
        ? applyEducationResolveResultToRecord({
            record: updatedRecord,
            label: resolution.label,
            operation: resolution.operation,
            result: resolution.result,
          })
        : updatedRecord,
    record,
  )
}

export function createEducationRecordResolutionTaskMap({
  currentUrl,
  rules,
  records,
  resolveOperation,
}) {
  const resolvableRules = rules.filter(
    (rule) =>
      Boolean(getEducationSearchTypeByLabel(rule.label)) &&
      shouldResolveEducationLabel(rule.label),
  )

  return records.map((record) => {
    const taskMap = {}
    if (!record || resolvableRules.length === 0) {
      return taskMap
    }

    resolvableRules.forEach((rule) => {
      const originalAnswer = getEducationOriginalAnswerFromRecord(
        record,
        rule.label,
      )
      if (!originalAnswer) {
        return
      }

      const operation = buildGreenhouseEducationOperation({
        currentUrl,
        label: rule.label,
        originalAnswer,
      })
      taskMap[rule.label] = (async () => {
        try {
          const resolution = await resolveOperation(operation)
          if (!resolution) {
            return null
          }
          return {
            label: rule.label,
            operation: resolution.operation,
            result: resolution.result,
          }
        } catch (error) {
          console.warn(
            `[Greenhouse][Education] Failed to resolve prefetched field "${rule.label}":`,
            error,
          )
          return null
        }
      })()
    })

    return taskMap
  })
}

export async function applyPrefetchedEducationResolutionForLabel({
  record,
  label,
  prefetchedResolution,
}) {
  if (!prefetchedResolution) {
    return record
  }

  const resolution = await prefetchedResolution
  return resolution
    ? applyEducationResolveResultToRecord({
        record,
        label: resolution.label || label,
        operation: resolution.operation,
        result: resolution.result,
      })
    : record
}

export async function resolveEducationRecordsInParallel({
  currentUrl,
  rules,
  records,
  resolveOperation,
}) {
  const resolvedRecords = await Promise.all(
    records.map(async (record, index) => {
      if (!record) {
        return record
      }

      return resolveEducationRecordChildrenInParallel({
        currentUrl,
        rules: rules[index]?.children ?? [],
        record,
        resolveOperation,
      })
    }),
  )

  resolvedRecords.forEach((record, index) => {
    if (record) {
      records[index] = record
    }
  })
  return records
}

export async function resolveEducationRecordsByKeysInParallel({
  currentUrl,
  records,
  rules,
  resolveOperation,
}) {
  const educationRules =
    rules && rules.length > 0
      ? rules
      : [{ label: "School" }, { label: "Discipline" }]
  const resolvedRecords = await Promise.all(
    records.map((record) =>
      record
        ? resolveEducationRecordChildrenInParallel({
            currentUrl,
            rules: educationRules,
            record,
            resolveOperation,
          })
        : record,
    ),
  )

  resolvedRecords.forEach((record, index) => {
    if (record) {
      records[index] = record
    }
  })
  return records
}
