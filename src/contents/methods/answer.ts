// @ts-nocheck
/**
 * Answer / profile / resume fetch + section fill orchestration.
 */

import dataUrlToBlob from "dataurl-to-blob"
import { isArray, isEqual, omit } from "lodash-es"
import { sendToBackground } from "@plasmohq/messaging"
import {
  agentOriginalResume,
  agentResumeId,
  agentTailorId,
} from "../../helper-shims/host.ts"
import {
  CancelledError,
  SkippedError,
  checkpoint,
  updateCurrentField,
  withSkip,
} from "./cancellation.ts"
import { ValueError } from "../shared/filler.ts"
import {
  beginFalconResponseAnswerRequest,
  markFalconResponseAnswer,
} from "../sites/falcon-answer-tracking.ts"
import { FIELD_TYPE, MIME_TYPE } from "../../core/enums.ts"
import { removeEndStrings } from "../../core/utils.ts"
import { CUSTOM_ERROR_CODES } from "../../enums/http.ts"
import { formatFieldLabelForDisplay } from "../../utils/fieldLabel.ts"
import { extractSkillList } from "../../utils/skill-list.ts"

/** DOM / internal keys stripped before sending field descriptors to GPT. */
const OMIT_FROM_GPT_ELEMENT = [
  "$input",
  "$label",
  "$fieldRow",
  "children",
  "$checkboxs",
  "$radioParent",
  "$radios",
  "__careerHub",
  "__eightfoldConditional",
  "__zohoClusterRoot",
  "__zohoSemanticType",
  "__recruiteePhoneField",
  "__recruiteePhoneCountries",
  "__recruiteePhoneState",
  "__ultiproDialogSection",
  "optionsMode",
]

function prepareElementForGpt(field) {
  const cleaned = omit(field, ...OMIT_FROM_GPT_ELEMENT)
  if (field?.optionsMode === "searchable") delete cleaned.options
  if (typeof cleaned.label !== "string") return cleaned
  return {
    ...cleaned,
    type: isNumberInput(field) ? "number" : cleaned.type,
    label: formatFieldLabelForDisplay(cleaned.label),
  }
}

function isNumberInput(field) {
  const input = field?.$input
  const typeAttr =
    typeof input?.getAttribute === "function"
      ? input.getAttribute("type")
      : input?.type
  return typeof typeAttr === "string" && typeAttr.toLowerCase() === "number"
}

const NON_ALNUM_EXCEPT_CJK =
  /[^a-zA-Z0-9\s\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]/g

export function removeSpecialCharacters(text) {
  return text.replace(NON_ALNUM_EXCEPT_CJK, "")
}

/** Label equality after stripping punctuation / asterisks / whitespace. */
export function isMatched(a, b) {
  if (!a || !b || typeof a !== "string" || typeof b !== "string") return false
  const left = removeSpecialCharacters(a)
    ?.replace(/\s*\*\s*/g, "")
    ?.replace(/\s+/g, " ")
    ?.toLowerCase()
    .trim()
  const right = removeSpecialCharacters(b)
    ?.replace(/\s*\*\s*/g, "")
    ?.replace(/\s+/g, " ")
    ?.toLowerCase()
    .trim()
  return !!left && !!right && left === right
}

function dataUrlToFileList(base64URL, fileName, mimeType) {
  const bytes = dataUrlToBlob(base64URL)
  const blob = new Blob([bytes])
  const dt = new DataTransfer()
  dt.items.add(
    new File([blob], fileName, { type: mimeType, lastModified: Date.now() })
  )
  return dt
}

export const NO_RESUME_FOUND_ERROR = "No resume found"

export async function fetchPdfAsBlob(resumeRequest) {
  let response
  let extension = ""

  console.log("[ResumeUploadDebug] fetchPdfAsBlob:start", {
    resumeId: resumeRequest?.id,
    tailorId: resumeRequest?.tailorId,
    hasTailor: !!resumeRequest?.tailor,
    hasTailorResume: !!resumeRequest?.tailorResume,
    diagnoseId: resumeRequest?.diagnoseId,
    template: resumeRequest?.template,
    resumeName: resumeRequest?.resumeName,
    useOriginalResume: resumeRequest?.useOriginalResume,
    agentOriginalResume,
    agentResumeId,
    agentTailorId,
  })

  if (
    resumeRequest.useOriginalResume ||
    (agentOriginalResume && !agentTailorId)
  ) {
    const originalId = resumeRequest.id || agentResumeId
    console.log("[ResumeUploadDebug] fetchPdfAsBlob:branch-original", {
      resumeId: originalId,
    })
    response = await sendToBackground({
      name: "getResumeBlob",
      body: { resumeId: originalId },
    })
    extension = response?.extension
  } else if (resumeRequest.tailor) {
    console.log("[ResumeUploadDebug] fetchPdfAsBlob:branch-tailor", {
      tailorId: resumeRequest.tailorId,
      hasTailorResume: !!resumeRequest.tailorResume,
      template: resumeRequest.template,
    })
    response = await sendToBackground({
      name: "getTailorResumeBlob",
      body: {
        tailorResume: resumeRequest.tailorResume,
        template: resumeRequest.template,
      },
    })
    extension = "pdf"
  } else if (resumeRequest.diagnoseId) {
    console.log("[ResumeUploadDebug] fetchPdfAsBlob:branch-base", {
      diagnoseId: resumeRequest.diagnoseId,
      resumeId: resumeRequest.id,
      template: resumeRequest.template,
    })
    response = await sendToBackground({
      name: "getBaseResumeBlob",
      body: {
        diagnoseId: resumeRequest.diagnoseId,
        template: resumeRequest.template,
      },
    })
    extension = "pdf"
  } else if (resumeRequest.id) {
    console.log("[ResumeUploadDebug] fetchPdfAsBlob:branch-id-fallback", {
      resumeId: resumeRequest.id,
    })
    response = await sendToBackground({
      name: "getResumeBlob",
      body: { resumeId: resumeRequest.id },
    })
    extension = response?.extension
  }

  if (!response) {
    console.error("[ResumeUploadDebug] fetchPdfAsBlob:no-response", {
      resumeId: resumeRequest?.id,
      diagnoseId: resumeRequest?.diagnoseId,
      hasTailor: !!resumeRequest?.tailor,
      useOriginalResume: resumeRequest?.useOriginalResume,
    })
    throw Error(NO_RESUME_FOUND_ERROR)
  }

  const base64URL =
    typeof response.base64URL === "string" ? response.base64URL : ""
  const payload = base64URL.split(",")[1] || ""
  if (!payload) {
    console.error("[ResumeUploadDebug] fetchPdfAsBlob:empty-blob", {
      resumeId: resumeRequest?.id,
      diagnoseId: resumeRequest?.diagnoseId,
      hasTailor: !!resumeRequest?.tailor,
      useOriginalResume: resumeRequest?.useOriginalResume,
      base64URLLength: base64URL.length,
    })
    throw Error(NO_RESUME_FOUND_ERROR)
  }

  if (!extension) extension = "pdf"
  const baseName =
    resumeRequest.resumeName?.replace(/\.[^/.]+$/, "") || "resume"

  console.log("[ResumeUploadDebug] fetchPdfAsBlob:success", {
    extension,
    filename: `${baseName}.${extension}`,
    hasBase64URL: !!response.base64URL,
    base64Length: base64URL.length,
  })

  return dataUrlToFileList(
    base64URL,
    `${baseName}.${extension}`,
    MIME_TYPE[extension] || MIME_TYPE.pdf
  )
}

export async function fetchCoverLetterPdfAsBlob(request) {
  let response
  if (request.coverLetterId) {
    response = await sendToBackground({
      name: "getCoverLetterBlob",
      body: {
        coverLetterId: request.coverLetterId,
        markdown: request.markdown,
        useLegacyDownload: request.useLegacyDownload,
      },
    })
  }
  if (!response) throw Error("No cover letter found")
  return dataUrlToFileList(
    response.base64URL,
    `${request.coverLetterName}.pdf`,
    MIME_TYPE.pdf
  )
}

export async function getSiteToken() {
  return sendToBackground({
    name: "getSiteToken",
    body: { url: removeEndStrings(window.location.href) },
  })
}

export class HTTPError extends Error {
  constructor(message = "") {
    super(message)
    this.name = "HTTPError"
  }
}

export class ResumeMissingCodeError extends Error {
  constructor(message = "") {
    super(message)
    this.name = "ResumeMissingCodeError"
  }
}

export async function getElementRules(
  elements,
  source,
  token,
  fromAgentFlag,
  resumeId,
  tailorId,
  urlOverride
) {
  const trackingToken = beginFalconResponseAnswerRequest()
  const response = await sendToBackground({
    name: "getGptResults",
    body: {
      params: {
        elements: elements.map(prepareElementForGpt),
        token,
        url: urlOverride ?? removeEndStrings(window.location.href),
        parser: "internal",
        source,
        fromAgent: !!(fromAgentFlag || agentTailorId || agentResumeId),
        ...(resumeId && { resumeId }),
        ...(tailorId && { tailorId }),
      },
    },
  })

  if (response?.data?.data === CUSTOM_ERROR_CODES.RESUME_MISSING_KEY) {
    throw new ResumeMissingCodeError(CUSTOM_ERROR_CODES.RESUME_MISSING_KEY)
  }
  if (response?.data?.HTTP_STATUS) {
    throw new HTTPError(response?.data?.HTTP_STATUS)
  }
  return initUserData(response, trackingToken)
}

function firstArrayField(obj, keys) {
  for (const key of keys) {
    const value = obj?.[key]
    if (Array.isArray(value)) return value
  }
  return []
}

export function initUserData(gptResponse, trackingToken) {
  const profileA = gptResponse.data?.profile_data
  const profileB = gptResponse.data?.profileData
  const isPlainObject = (v) => v && typeof v === "object" && !Array.isArray(v)

  const profileData =
    isPlainObject(profileA) || isPlainObject(profileB)
      ? {
          ...(isPlainObject(profileA) ? profileA : {}),
          ...(isPlainObject(profileB) ? profileB : {}),
        }
      : (profileA ?? profileB ?? {})

  const userData = {
    profileData,
    profile_data: profileData,
    skills: extractSkillList(profileData),
    education: firstArrayField(profileData, [
      "Education",
      "education",
      "EDUCATION",
    ]),
    workExperience: firstArrayField(profileData, [
      "Employment",
      "employment",
      "EMPLOYMENT",
      "workExperience",
      "work_experience",
      "Work Experience",
      "experience",
      "Experience",
    ]),
    state: profileData?.state,
    country: profileData?.country ?? null,
    regular: null,
  }

  if (Array.isArray(gptResponse.data?.fill_data_list)) {
    userData.fillDataList = gptResponse.data.fill_data_list
    gptResponse.data.fill_data_list.forEach((row) => {
      if (row?.name) {
        userData.regular = {
          ...userData.regular,
          [row.name]: row.value,
        }
      }
    })
  }

  return markFalconResponseAnswer(userData, trackingToken)
}

export function findValueInRecord(label, record) {
  let found
  for (const key in record) {
    if (isMatched(label, key)) {
      found = record[key]
      break
    }
  }
  if (found == null || found === "") {
    throw new ValueError(`No matching field for label: ${label}`)
  }
  if (Array.isArray(found)) {
    if (found.length === 0) {
      throw new ValueError(`No matching field for label: ${label}`)
    }
    const allEmpty = found.every(
      (v) => typeof v === "string" && v.trim() === ""
    )
    if (allEmpty) {
      throw new ValueError(
        `No matching field for label: ${label} (array contains only empty values)`
      )
    }
    const cleaned = found.map((v) => String(v).trim()).filter((v) => v !== "")
    if (cleaned.length === 0) {
      throw new ValueError(
        `No valid string values found for label: ${label}`
      )
    }
    return cleaned
  }
  const asString = String(found).trim()
  if (asString === "") {
    throw new ValueError(
      `Field for label '${label}' resulted in an empty string`
    )
  }
  return asString
}

const EDUCATION_TITLE_KEYS = [
  "School",
  "School Name",
  "School or University",
  "University",
  "Institution",
  "Institution Name",
  "Organization",
  "organization",
  "school",
  "rawSchool",
]
const EDUCATION_SUBTITLE_KEYS = [
  "Degree",
  "Field of Study",
  "Discipline",
  "Major",
  "Study",
  "degree",
  "major",
]
const EMPLOYMENT_TITLE_KEYS = [
  "Company",
  "Company Name",
  "Employer Name",
  "Employer",
  "Organization",
  "organization",
  "company",
  "employerName",
]
const EMPLOYMENT_SUBTITLE_KEYS = [
  "Job Title",
  "Title",
  "Position",
  "Role",
  "jobTitle",
  "title",
]

function stringifyForDisplay(value) {
  if (value == null) return
  let text
  if (Array.isArray(value)) {
    text = value
      .map((v) => String(v).trim())
      .filter(Boolean)
      .join(", ")
  } else if (typeof value === "object") {
    try {
      text = JSON.stringify(value)
    } catch {
      return
    }
  } else {
    text = String(value)
  }
  const compact = text.replace(/\s+/g, " ").trim()
  if (!compact) return
  return compact.length > 80
    ? `${compact.slice(0, 77).trimEnd()}...`
    : compact
}

function pickFirstMatchedDisplay(record, keys) {
  for (const want of keys) {
    for (const key of Object.keys(record)) {
      if (isMatched(want, key)) {
        const display = stringifyForDisplay(record[key])
        if (display) return display
      }
    }
  }
}

function tryFindDisplayValue(label, record) {
  try {
    return stringifyForDisplay(findValueInRecord(label, record))
  } catch {
    return
  }
}

function sectionRowTitle(sectionType, record) {
  return pickFirstMatchedDisplay(
    record,
    sectionType === "education" ? EDUCATION_TITLE_KEYS : EMPLOYMENT_TITLE_KEYS
  )
}

function sectionRowSubtitle(sectionType, record) {
  return pickFirstMatchedDisplay(
    record,
    sectionType === "education"
      ? EDUCATION_SUBTITLE_KEYS
      : EMPLOYMENT_SUBTITLE_KEYS
  )
}

function aggregateFieldStatuses(fields) {
  if (fields.some((f) => f.status === "skipped")) return "skipped"
  if (fields.some((f) => f.status === "missed")) return "missed"
  if (fields.length > 0 && fields.every((f) => f.status === "filled")) {
    return "filled"
  }
  return "pending"
}

export function createSectionResultReporter(sectionType, callbacks) {
  const rows = new Map()
  let sectionLabel =
    sectionType === "education" ? "Education" : "Employment"

  const applyTitleSubtitle = (row, record) => {
    const title = sectionRowTitle(sectionType, record)
    const subtitle = sectionRowSubtitle(sectionType, record)
    if (title) row.title = title
    if (subtitle) row.subtitle = subtitle
  }

  const ensureRow = (index, record) => {
    const existing = rows.get(index)
    if (existing) {
      applyTitleSubtitle(existing, record)
      return existing
    }
    const row = {
      index,
      ...(sectionRowTitle(sectionType, record)
        ? { title: sectionRowTitle(sectionType, record) }
        : {}),
      ...(sectionRowSubtitle(sectionType, record)
        ? { subtitle: sectionRowSubtitle(sectionType, record) }
        : {}),
      status: "pending",
      fields: [],
    }
    rows.set(index, row)
    return row
  }

  return {
    setLabel: (label) => {
      sectionLabel = label
    },
    ensureRow,
    updateRow: applyTitleSubtitle,
    updateField: (row, label, value, status) => {
      const nextField = {
        label: formatFieldLabelForDisplay(label),
        ...(value ? { value } : {}),
        status,
      }
      const idx = row.fields.findIndex((f) => isMatched(f.label, label))
      row.fields =
        idx === -1
          ? [...row.fields, nextField]
          : row.fields.map((f, i) => (i === idx ? nextField : f))
      row.status = aggregateFieldStatuses(row.fields)
    },
    emit: () => {
      callbacks?.onSectionResultChanged?.({
        type: sectionType,
        label: formatFieldLabelForDisplay(sectionLabel),
        rows: [...rows.values()].sort((a, b) => a.index - b.index),
      })
    },
  }
}

function getOperationFieldType(op) {
  const t = op?.field_type
  return typeof t === "string" ? t.trim().toLowerCase() : ""
}

/** Operations in `next` that differ from `prev` (by field_type or identity). */
function diffOperations(prev, next) {
  if (!Array.isArray(next)) return []
  const prevList = Array.isArray(prev) ? prev : []
  return next.filter((item, index) => {
    const type = getOperationFieldType(item)
    const counterpart = type
      ? prevList.find((p) => getOperationFieldType(p) === type)
      : prevList[index]
    return !isEqual(item, counterpart)
  })
}

function mergeOperations(base, incoming) {
  const result = Array.isArray(base) ? [...base] : []
  for (const item of incoming) {
    const type = getOperationFieldType(item)
    const idx = type
      ? result.findIndex((r) => getOperationFieldType(r) === type)
      : -1
    if (idx >= 0) result.splice(idx, 1, item)
    else if (!result.some((r) => isEqual(r, item))) result.push(item)
  }
  return result
}

/** Deep-merge transformed record fields onto current, special-casing `operation`. */
function mergeTransformedRecord(baseRecord, currentRecord, transformed) {
  const merged = { ...currentRecord }
  for (const key of Object.keys(transformed)) {
    if (key === "operation") {
      const changed = diffOperations(baseRecord.operation, transformed.operation)
      if (changed.length > 0) {
        merged.operation = mergeOperations(currentRecord.operation, changed)
      }
      continue
    }
    if (!isEqual(transformed[key], baseRecord[key])) {
      merged[key] = transformed[key]
    }
  }
  return merged
}

/**
 * Education fill path that transforms child rules first (ready-first), then fills.
 */
async function fillEducationReadyTransformedFirst({
  rules,
  records,
  operationConfig,
  transformRecordByRule,
  sectionReporter,
}) {
  const pending = []
  let touchedCurrentField = false

  for (const [recordIndex, rule] of rules.entries()) {
    if (rule.type !== FIELD_TYPE.EDUCATION) continue
    const record = records[recordIndex]
    if (!record) continue

    sectionReporter?.setLabel(rule.label)
    sectionReporter?.ensureRow(recordIndex, record)
    if (!touchedCurrentField) {
      updateCurrentField(rule.label)
      touchedCurrentField = true
    }

    const children = rule.children || []
    for (const childRule of children) {
      const baseRecord = records[recordIndex] ?? record
      pending.push({
        recordIndex,
        baseRecord,
        childRule,
        ready: Promise.resolve()
          .then(() =>
            transformRecordByRule(childRule, baseRecord, recordIndex)
          )
          .then(
            (rec) => ({ status: "fulfilled", record: rec }),
            (error) => ({ status: "rejected", error })
          ),
      })
    }
    sectionReporter?.emit()
  }

  while (pending.length > 0) {
    const raced = await Promise.race(
      pending.map((item, index) =>
        item.ready.then((result) => ({ pendingIndex: index, result }))
      )
    )
    const finished = pending.splice(raced.pendingIndex, 1)[0]
    if (raced.result.status === "rejected") throw raced.result.error

    const current = records[finished.recordIndex] ?? finished.baseRecord
    const merged = mergeTransformedRecord(
      finished.baseRecord,
      current,
      raced.result.record
    )
    records[finished.recordIndex] = merged

    const row = sectionReporter?.ensureRow(finished.recordIndex, merged)
    const displayValue = tryFindDisplayValue(finished.childRule.label, merged)
    try {
      const fillOk = await operationConfig[finished.childRule.type]?.(
        finished.childRule,
        merged,
        false
      )
      if (row) {
        sectionReporter?.updateField(
          row,
          finished.childRule.label,
          displayValue,
          fillOk !== false && displayValue ? "filled" : "missed"
        )
        sectionReporter?.emit()
      }
    } catch (err) {
      if (row && err instanceof SkippedError) {
        sectionReporter?.updateField(
          row,
          finished.childRule.label,
          displayValue,
          "skipped"
        )
        sectionReporter?.emit()
      }
      throw err
    }
  }
}

export function sectionProgressCallbacks(sectionKey, progressTracker) {
  return {
    onCompleted: () => progressTracker.updateFilledProgress(sectionKey),
    onSkipped: () => progressTracker.updateMissedProgress(sectionKey),
    onSectionResultChanged: progressTracker.updateSectionResult,
  }
}

export function getRegularOperations(
  rules,
  record,
  operationConfig,
  updateField = true
) {
  const ops = []
  for (const rule of rules) {
    const run = updateField
      ? async () => {
          await operationConfig[rule.type]?.(rule, record)
        }
      : async () => {
          await operationConfig[rule.type]?.(rule, record, false)
        }
    if (run) ops.push(run)
  }
  return ops
}

export function getEducationOperations(
  rules,
  records,
  operationConfig,
  transformRecordByRule,
  progressCallbacks,
  options
) {
  return [
    async () => {
      const reporter = createSectionResultReporter(
        "education",
        progressCallbacks
      )
      try {
        if (
          options?.fillReadyTransformedFieldsFirst &&
          options?.wrapTransformedFieldWithSkip
        ) {
          throw Error(
            "Education fill cannot wrap ready-first transforms with Skip"
          )
        }

        if (transformRecordByRule && options?.fillReadyTransformedFieldsFirst) {
          await fillEducationReadyTransformedFirst({
            rules,
            records,
            operationConfig,
            transformRecordByRule,
            sectionReporter: reporter,
          })
          progressCallbacks?.onCompleted?.()
          return
        }

        for (const [recordIndex, rule] of rules.entries()) {
          if (rule.type !== FIELD_TYPE.EDUCATION) continue
          let record = records[recordIndex]
          if (!record) continue

          reporter.setLabel(rule.label)
          const row = reporter.ensureRow(recordIndex, record)
          updateCurrentField(rule.label)
          reporter.emit()

          const children = rule.children || []
          for (const childRule of children) {
            const runChild = async (withCheckpoints = false) => {
              if (withCheckpoints) checkpoint()
              if (transformRecordByRule) {
                const transformed = await transformRecordByRule(
                  childRule,
                  record,
                  recordIndex
                )
                if (withCheckpoints) checkpoint()
                record = transformed
                records[recordIndex] = transformed
              }
              return operationConfig[childRule.type]?.(
                childRule,
                record,
                false
              )
            }

            try {
              const fillOk =
                transformRecordByRule && options?.wrapTransformedFieldWithSkip
                  ? await withSkip(() => runChild(true))
                  : await runChild()
              reporter.updateRow(row, record)
              const displayValue = tryFindDisplayValue(childRule.label, record)
              reporter.updateField(
                row,
                childRule.label,
                displayValue,
                fillOk !== false && displayValue ? "filled" : "missed"
              )
              reporter.emit()
            } catch (err) {
              if (err instanceof SkippedError) {
                reporter.updateRow(row, record)
                reporter.updateField(
                  row,
                  childRule.label,
                  tryFindDisplayValue(childRule.label, record),
                  "skipped"
                )
                reporter.emit()
              }
              throw err
            }
          }
        }
        progressCallbacks?.onCompleted?.()
      } catch (err) {
        if (err instanceof SkippedError) {
          progressCallbacks?.onSkipped?.()
          return
        }
        throw err
      } finally {
        if (!options?.keepCurrentFieldOnExit) {
          updateCurrentField(null)
        }
      }
    },
  ]
}

export function getEmploymentOperations(
  rules,
  records,
  operationConfig,
  transformRecordByRule,
  progressCallbacks,
  options
) {
  const employmentRules = rules.filter(
    (rule) => rule.type === FIELD_TYPE.EMPLOYMENT
  )
  return [
    async () => {
      const reporter = createSectionResultReporter(
        "employment",
        progressCallbacks
      )
      try {
        for (const [recordIndex, rule] of employmentRules.entries()) {
          let record = records[recordIndex]
          if (!record) {
            console.warn(
              `No record found for employment rule at index ${recordIndex}. Total records: ${records.length}, Total rules: ${employmentRules.length}`
            )
            continue
          }

          reporter.setLabel(rule.label)
          const row = reporter.ensureRow(recordIndex, record)
          updateCurrentField(rule.label)
          reporter.emit()

          const children = rule.children || []
          for (const childRule of children) {
            try {
              if (transformRecordByRule) {
                record = await transformRecordByRule(
                  childRule,
                  record,
                  recordIndex
                )
                records[recordIndex] = record
              }
              const fillOk = await operationConfig[childRule.type]?.(
                childRule,
                record,
                false
              )
              reporter.updateRow(row, record)
              const displayValue = tryFindDisplayValue(childRule.label, record)
              reporter.updateField(
                row,
                childRule.label,
                displayValue,
                fillOk !== false && displayValue ? "filled" : "missed"
              )
              reporter.emit()
            } catch (err) {
              if (err instanceof SkippedError) {
                reporter.updateRow(row, record)
                reporter.updateField(
                  row,
                  childRule.label,
                  tryFindDisplayValue(childRule.label, record),
                  "skipped"
                )
                reporter.emit()
              }
              throw err
            }
          }
        }
        progressCallbacks?.onCompleted?.()
      } catch (err) {
        if (err instanceof SkippedError) {
          progressCallbacks?.onSkipped?.()
          return
        }
        throw err
      } finally {
        if (!options?.keepCurrentFieldOnExit) {
          updateCurrentField(null)
        }
      }
    },
  ]
}

export function ensureArray(value) {
  return Array.isArray(value) ? value : [value]
}

function normalizeCandidateText(text, isLocation) {
  const compact = text.replace(/\s+/g, " ").trim()
  return isLocation ? compact.replace(/\s*,\s*/g, ", ") : compact
}

export function buildAutocompleteAnswerCandidates(fieldLabel, rawAnswers) {
  const lower = fieldLabel.toLowerCase()
  const isLocation = lower.includes("location")
  const strings = ensureArray(rawAnswers).filter((v) => typeof v === "string")
  const candidates = []

  const pushUnique = (text) => {
    const normalized = normalizeCandidateText(text, isLocation)
    if (normalized && !candidates.includes(normalized)) {
      candidates.push(normalized)
    }
  }

  for (const value of strings) {
    pushUnique(value)
    if (isLocation) {
      const city = normalizeCandidateText(value, true).split(",")[0]?.trim()
      if (city) pushUnique(city)
    }
  }

  console.debug("[Greenhouse][Autocomplete] candidates prepared", {
    fieldKind: isLocation ? "location" : "generic",
    inputCount: strings.length,
    candidateCount: candidates.length,
  })

  return candidates.length > 0 ? candidates : strings
}

/**
 * Wrap a field fill fn with skip/cancel handling + progress callbacks.
 * fillFn(rule, value, record) — return false to treat as miss.
 */
export function createOperationHandlerFactory(onFilled, onMissed) {
  return function (fillFn, options = { expectArray: false }) {
    return async (rule, record, updateCurrentFieldFlag = true) => {
      const label = rule.label
      if (updateCurrentFieldFlag) updateCurrentField(label)
      try {
        await withSkip(async () => {
          const raw = findValueInRecord(rule.label, record)
          const value = options.expectArray
            ? ensureArray(raw)
            : isArray(raw)
              ? raw[0]
              : raw
          const ok = await fillFn(rule, value, record)
          if (ok === false) {
            throw new ValueError(`Failed to fill ${rule.label}`)
          }
          if (updateCurrentFieldFlag) onFilled(rule.label)
        })
        return true
      } catch (err) {
        if (err instanceof CancelledError) throw err
        if (err instanceof SkippedError) {
          if (updateCurrentFieldFlag) {
            onMissed(rule.label)
            return false
          }
          throw err
        }
        if (err instanceof ValueError) {
          console.warn(
            `[OperationHandler] "${label}" ValueError:`,
            err.message
          )
        } else {
          console.error(
            `[OperationHandler] "${label}" unexpected error:`,
            err
          )
        }
        if (updateCurrentFieldFlag) onMissed(rule.label)
        return false
      }
    }
  }
}

/** Parse `YYYY-MM-DD` (or / .) into { year, month: "Jan", day }. */
export function parseDateParts(raw) {
  try {
    if (!raw || typeof raw !== "string") {
      return { year: "", month: "", day: "" }
    }
    const normalized = raw.replace(/[\/.]/g, "-").trim()
    const parts = normalized.split("-")
    if (parts.length < 2) return { year: "", month: "", day: "" }

    const year = parts[0]
    const monthNum = parts[1]
    const day = parts[2]
    const MONTHS = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]
    const monthIndex = Number(monthNum) - 1
    const month =
      monthIndex >= 0 && monthIndex < 12 ? MONTHS[monthIndex] : ""

    return {
      year: year || "",
      month,
      day: day ? day.replace(/^0/, "") : "",
    }
  } catch (err) {
    console.error("parseDateParts error:", err, raw)
    return { year: "", month: "", day: "" }
  }
}
