/**
 * Parcel module id: 7T5eW
 * Resolved path: contents/methods/answer.js (oracle)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   dataurl-to-blob -> dqjvN  =>  dataurl-to-blob.js
 *   lodash-es -> p4RBe  =>  lodash-es.js
 *   ~contents -> d4tj7  =>  _tilde_contents.js
 *   ~contents/methods/cancellation -> luJfs  =>  _tilde_contents/methods/cancellation.js
 *   ~contents/shared/filler -> 2aGsX  =>  _tilde_contents/shared/filler.js
 *   ~contents/sites/falcon-answer-tracking -> 2vI9E  =>  _tilde_contents/sites/falcon-answer-tracking.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/utils -> aTDh5  =>  _tilde_core/utils.js
 *   ~enums/http -> eJFqj  =>  _tilde_enums/http.js
 *   ~utils/fieldLabel -> 1RmGw  =>  _tilde_utils/fieldLabel.js
 *   ~utils/skill-list -> 74lkH  =>  _tilde_utils/skill-list.js
 *
 * Answer / profile / resume fetch + section fill orchestration.
 * Human-readable recovery from Parcel graph. Parcel `e()` / `r` preserved.
 */

var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js")
helpers.defineInteropFlag(r)
helpers.export(r, "removeSpecialCharacters", () => removeSpecialCharacters)
helpers.export(r, "isMatched", () => isMatched)
helpers.export(r, "NO_RESUME_FOUND_ERROR", () => NO_RESUME_FOUND_ERROR)
helpers.export(r, "fetchPdfAsBlob", () => fetchPdfAsBlob)
helpers.export(r, "fetchCoverLetterPdfAsBlob", () => fetchCoverLetterPdfAsBlob)
helpers.export(r, "getSiteToken", () => getSiteToken)
helpers.export(r, "HTTPError", () => HTTPError)
helpers.export(r, "ResumeMissingCodeError", () => ResumeMissingCodeError)
helpers.export(r, "getElementRules", () => getElementRules)
helpers.export(r, "initUserData", () => initUserData)
helpers.export(r, "findValueInRecord", () => findValueInRecord)
helpers.export(r, "createSectionResultReporter", () => createSectionResultReporter)
helpers.export(r, "sectionProgressCallbacks", () => sectionProgressCallbacks)
helpers.export(r, "getRegularOperations", () => getRegularOperations)
helpers.export(r, "getEducationOperations", () => getEducationOperations)
helpers.export(r, "getEmploymentOperations", () => getEmploymentOperations)
helpers.export(r, "ensureArray", () => ensureArray)
helpers.export(r, "buildAutocompleteAnswerCandidates", () => buildAutocompleteAnswerCandidates)
helpers.export(r, "createOperationHandlerFactory", () => createOperationHandlerFactory)
helpers.export(r, "parseDateParts", () => parseDateParts)

var dataurlToBlobMod = e("dataurl-to-blob")
var dataurlToBlob = helpers.interopDefault(dataurlToBlobMod)
var lodashEs = e("lodash-es")
var messaging = e("@plasmohq/messaging")
var contents = e("~contents")
var cancellation = e("~contents/methods/cancellation")
var filler = e("~contents/shared/filler")
var falconAnswerTracking = e("~contents/sites/falcon-answer-tracking")
var enums = e("~core/enums")
var coreUtils = e("~core/utils")
var http = e("~enums/http")
var fieldLabel = e("~utils/fieldLabel")
var skillList = e("~utils/skill-list")

/** DOM / internal keys stripped before sending field descriptors to GPT. */
var OMIT_FROM_GPT_ELEMENT = [
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
  "optionsMode"
]

function prepareElementForGpt(field) {
  var cleaned = lodashEs.omit(field, ...OMIT_FROM_GPT_ELEMENT)
  if (field?.optionsMode === "searchable") delete cleaned.options
  if (typeof cleaned.label !== "string") return cleaned
  return {
    ...cleaned,
    type: isNumberInput(field) ? "number" : cleaned.type,
    label: fieldLabel.formatFieldLabelForDisplay(cleaned.label)
  }
}

function isNumberInput(field) {
  var input = field?.$input
  var typeAttr =
    typeof input?.getAttribute === "function"
      ? input.getAttribute("type")
      : input?.type
  return typeof typeAttr === "string" && typeAttr.toLowerCase() === "number"
}

var NON_ALNUM_EXCEPT_CJK =
  /[^a-zA-Z0-9\s\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]/g

function removeSpecialCharacters(text) {
  return text.replace(NON_ALNUM_EXCEPT_CJK, "")
}

/** Label equality after stripping punctuation / asterisks / whitespace. */
function isMatched(a, b) {
  if (!a || !b || typeof a !== "string" || typeof b !== "string") return false
  var left = removeSpecialCharacters(a)
    ?.replace(/\s*\*\s*/g, "")
    ?.replace(/\s+/g, " ")
    ?.toLowerCase()
    .trim()
  var right = removeSpecialCharacters(b)
    ?.replace(/\s*\*\s*/g, "")
    ?.replace(/\s+/g, " ")
    ?.toLowerCase()
    .trim()
  return !!left && !!right && left === right
}

function dataUrlToFileList(base64URL, fileName, mimeType) {
  var bytes = dataurlToBlob.default(base64URL)
  var blob = new Blob([bytes])
  var dt = new DataTransfer()
  dt.items.add(
    new File([blob], fileName, { type: mimeType, lastModified: Date.now() })
  )
  return dt
}

var NO_RESUME_FOUND_ERROR = "No resume found"

async function fetchPdfAsBlob(resumeRequest) {
  var response
  var extension = ""

  console.log("[ResumeUploadDebug] fetchPdfAsBlob:start", {
    resumeId: resumeRequest?.id,
    tailorId: resumeRequest?.tailorId,
    hasTailor: !!resumeRequest?.tailor,
    hasTailorResume: !!resumeRequest?.tailorResume,
    diagnoseId: resumeRequest?.diagnoseId,
    template: resumeRequest?.template,
    resumeName: resumeRequest?.resumeName,
    useOriginalResume: resumeRequest?.useOriginalResume,
    agentOriginalResume: contents.agentOriginalResume,
    agentResumeId: contents.agentResumeId,
    agentTailorId: contents.agentTailorId
  })

  if (
    resumeRequest.useOriginalResume ||
    (contents.agentOriginalResume && !contents.agentTailorId)
  ) {
    var originalId = resumeRequest.id || contents.agentResumeId
    console.log("[ResumeUploadDebug] fetchPdfAsBlob:branch-original", {
      resumeId: originalId
    })
    response = await messaging.sendToBackground({
      name: "getResumeBlob",
      body: { resumeId: originalId }
    })
    extension = response?.extension
  } else if (resumeRequest.tailor) {
    console.log("[ResumeUploadDebug] fetchPdfAsBlob:branch-tailor", {
      tailorId: resumeRequest.tailorId,
      hasTailorResume: !!resumeRequest.tailorResume,
      template: resumeRequest.template
    })
    response = await messaging.sendToBackground({
      name: "getTailorResumeBlob",
      body: {
        tailorResume: resumeRequest.tailorResume,
        template: resumeRequest.template
      }
    })
    extension = "pdf"
  } else if (resumeRequest.diagnoseId) {
    console.log("[ResumeUploadDebug] fetchPdfAsBlob:branch-base", {
      diagnoseId: resumeRequest.diagnoseId,
      resumeId: resumeRequest.id,
      template: resumeRequest.template
    })
    response = await messaging.sendToBackground({
      name: "getBaseResumeBlob",
      body: {
        diagnoseId: resumeRequest.diagnoseId,
        template: resumeRequest.template
      }
    })
    extension = "pdf"
  } else if (resumeRequest.id) {
    console.log("[ResumeUploadDebug] fetchPdfAsBlob:branch-id-fallback", {
      resumeId: resumeRequest.id
    })
    response = await messaging.sendToBackground({
      name: "getResumeBlob",
      body: { resumeId: resumeRequest.id }
    })
    extension = response?.extension
  }

  if (!response) {
    console.error("[ResumeUploadDebug] fetchPdfAsBlob:no-response", {
      resumeId: resumeRequest?.id,
      diagnoseId: resumeRequest?.diagnoseId,
      hasTailor: !!resumeRequest?.tailor,
      useOriginalResume: resumeRequest?.useOriginalResume
    })
    throw Error(NO_RESUME_FOUND_ERROR)
  }

  var base64URL = typeof response.base64URL === "string" ? response.base64URL : ""
  var payload = base64URL.split(",")[1] || ""
  if (!payload) {
    console.error("[ResumeUploadDebug] fetchPdfAsBlob:empty-blob", {
      resumeId: resumeRequest?.id,
      diagnoseId: resumeRequest?.diagnoseId,
      hasTailor: !!resumeRequest?.tailor,
      useOriginalResume: resumeRequest?.useOriginalResume,
      base64URLLength: base64URL.length
    })
    throw Error(NO_RESUME_FOUND_ERROR)
  }

  if (!extension) extension = "pdf"
  var baseName =
    resumeRequest.resumeName?.replace(/\.[^/.]+$/, "") || "resume"

  console.log("[ResumeUploadDebug] fetchPdfAsBlob:success", {
    extension,
    filename: `${baseName}.${extension}`,
    hasBase64URL: !!response.base64URL,
    base64Length: base64URL.length
  })

  return dataUrlToFileList(
    base64URL,
    `${baseName}.${extension}`,
    enums.MIME_TYPE[extension] || enums.MIME_TYPE.pdf
  )
}

async function fetchCoverLetterPdfAsBlob(request) {
  var response
  if (request.coverLetterId) {
    response = await messaging.sendToBackground({
      name: "getCoverLetterBlob",
      body: {
        coverLetterId: request.coverLetterId,
        markdown: request.markdown,
        useLegacyDownload: request.useLegacyDownload
      }
    })
  }
  if (!response) throw Error("No cover letter found")
  return dataUrlToFileList(
    response.base64URL,
    `${request.coverLetterName}.pdf`,
    enums.MIME_TYPE.pdf
  )
}

async function getSiteToken() {
  return messaging.sendToBackground({
    name: "getSiteToken",
    body: { url: coreUtils.removeEndStrings(window.location.href) }
  })
}

class HTTPError extends Error {
  constructor(message = "") {
    super(message)
    this.name = "HTTPError"
  }
}

class ResumeMissingCodeError extends Error {
  constructor(message = "") {
    super(message)
    this.name = "ResumeMissingCodeError"
  }
}

async function getElementRules(
  elements,
  source,
  token,
  fromAgentFlag,
  resumeId,
  tailorId,
  urlOverride
) {
  var trackingToken = falconAnswerTracking.beginFalconResponseAnswerRequest()
  var response = await messaging.sendToBackground({
    name: "getGptResults",
    body: {
      params: {
        elements: elements.map(prepareElementForGpt),
        token,
        url: urlOverride ?? coreUtils.removeEndStrings(window.location.href),
        parser: "internal",
        source,
        fromAgent: !!(
          fromAgentFlag ||
          contents.agentTailorId ||
          contents.agentResumeId
        ),
        ...(resumeId && { resumeId }),
        ...(tailorId && { tailorId })
      }
    }
  })

  if (response?.data?.data === http.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY) {
    throw new ResumeMissingCodeError(http.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY)
  }
  if (response?.data?.HTTP_STATUS) {
    throw new HTTPError(response?.data?.HTTP_STATUS)
  }
  return initUserData(response, trackingToken)
}

function firstArrayField(obj, keys) {
  for (var key of keys) {
    var value = obj?.[key]
    if (Array.isArray(value)) return value
  }
  return []
}

function initUserData(gptResponse, trackingToken) {
  var profileA = gptResponse.data?.profile_data
  var profileB = gptResponse.data?.profileData
  var isPlainObject = (v) => v && typeof v === "object" && !Array.isArray(v)

  var profileData =
    isPlainObject(profileA) || isPlainObject(profileB)
      ? {
          ...(isPlainObject(profileA) ? profileA : {}),
          ...(isPlainObject(profileB) ? profileB : {})
        }
      : profileA ?? profileB ?? {}

  var userData = {
    profileData,
    profile_data: profileData,
    skills: skillList.extractSkillList(profileData),
    education: firstArrayField(profileData, [
      "Education",
      "education",
      "EDUCATION"
    ]),
    workExperience: firstArrayField(profileData, [
      "Employment",
      "employment",
      "EMPLOYMENT",
      "workExperience",
      "work_experience",
      "Work Experience",
      "experience",
      "Experience"
    ]),
    state: profileData?.state,
    country: profileData?.country ?? null,
    regular: null
  }

  if (Array.isArray(gptResponse.data?.fill_data_list)) {
    userData.fillDataList = gptResponse.data.fill_data_list
    gptResponse.data.fill_data_list.forEach((row) => {
      if (row?.name) {
        userData.regular = {
          ...userData.regular,
          [row.name]: row.value
        }
      }
    })
  }

  return falconAnswerTracking.markFalconResponseAnswer(userData, trackingToken)
}

function findValueInRecord(label, record) {
  var found
  for (var key in record) {
    if (isMatched(label, key)) {
      found = record[key]
      break
    }
  }
  if (found == null || found === "") {
    throw new filler.ValueError(`No matching field for label: ${label}`)
  }
  if (Array.isArray(found)) {
    if (found.length === 0) {
      throw new filler.ValueError(`No matching field for label: ${label}`)
    }
    var allEmpty = found.every(
      (v) => typeof v === "string" && v.trim() === ""
    )
    if (allEmpty) {
      throw new filler.ValueError(
        `No matching field for label: ${label} (array contains only empty values)`
      )
    }
    var cleaned = found.map((v) => String(v).trim()).filter((v) => v !== "")
    if (cleaned.length === 0) {
      throw new filler.ValueError(
        `No valid string values found for label: ${label}`
      )
    }
    return cleaned
  }
  var asString = String(found).trim()
  if (asString === "") {
    throw new filler.ValueError(
      `Field for label '${label}' resulted in an empty string`
    )
  }
  return asString
}

var EDUCATION_TITLE_KEYS = [
  "School",
  "School Name",
  "School or University",
  "University",
  "Institution",
  "Institution Name",
  "Organization",
  "organization",
  "school",
  "rawSchool"
]
var EDUCATION_SUBTITLE_KEYS = [
  "Degree",
  "Field of Study",
  "Discipline",
  "Major",
  "Study",
  "degree",
  "major"
]
var EMPLOYMENT_TITLE_KEYS = [
  "Company",
  "Company Name",
  "Employer Name",
  "Employer",
  "Organization",
  "organization",
  "company",
  "employerName"
]
var EMPLOYMENT_SUBTITLE_KEYS = [
  "Job Title",
  "Title",
  "Position",
  "Role",
  "jobTitle",
  "title"
]

function stringifyForDisplay(value) {
  if (value == null) return
  var text
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
  var compact = text.replace(/\s+/g, " ").trim()
  if (!compact) return
  return compact.length > 80
    ? `${compact.slice(0, 77).trimEnd()}...`
    : compact
}

function pickFirstMatchedDisplay(record, keys) {
  for (var want of keys) {
    for (var key of Object.keys(record)) {
      if (isMatched(want, key)) {
        var display = stringifyForDisplay(record[key])
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

function createSectionResultReporter(sectionType, callbacks) {
  var rows = new Map()
  var sectionLabel =
    sectionType === "education" ? "Education" : "Employment"

  var applyTitleSubtitle = (row, record) => {
    var title = sectionRowTitle(sectionType, record)
    var subtitle = sectionRowSubtitle(sectionType, record)
    if (title) row.title = title
    if (subtitle) row.subtitle = subtitle
  }

  var ensureRow = (index, record) => {
    var existing = rows.get(index)
    if (existing) {
      applyTitleSubtitle(existing, record)
      return existing
    }
    var row = {
      index,
      ...(sectionRowTitle(sectionType, record)
        ? { title: sectionRowTitle(sectionType, record) }
        : {}),
      ...(sectionRowSubtitle(sectionType, record)
        ? { subtitle: sectionRowSubtitle(sectionType, record) }
        : {}),
      status: "pending",
      fields: []
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
      var nextField = {
        label: fieldLabel.formatFieldLabelForDisplay(label),
        ...(value ? { value } : {}),
        status
      }
      var idx = row.fields.findIndex((f) => isMatched(f.label, label))
      row.fields =
        idx === -1
          ? [...row.fields, nextField]
          : row.fields.map((f, i) => (i === idx ? nextField : f))
      row.status = aggregateFieldStatuses(row.fields)
    },
    emit: () => {
      callbacks?.onSectionResultChanged?.({
        type: sectionType,
        label: fieldLabel.formatFieldLabelForDisplay(sectionLabel),
        rows: [...rows.values()].sort((a, b) => a.index - b.index)
      })
    }
  }
}

function getOperationFieldType(op) {
  var t = op?.field_type
  return typeof t === "string" ? t.trim().toLowerCase() : ""
}

/** Operations in `next` that differ from `prev` (by field_type or identity). */
function diffOperations(prev, next) {
  if (!Array.isArray(next)) return []
  var prevList = Array.isArray(prev) ? prev : []
  return next.filter((item, index) => {
    var type = getOperationFieldType(item)
    var counterpart = type
      ? prevList.find((p) => getOperationFieldType(p) === type)
      : prevList[index]
    return !lodashEs.isEqual(item, counterpart)
  })
}

function mergeOperations(base, incoming) {
  var result = Array.isArray(base) ? [...base] : []
  for (var item of incoming) {
    var type = getOperationFieldType(item)
    var idx = type
      ? result.findIndex((r) => getOperationFieldType(r) === type)
      : -1
    if (idx >= 0) result.splice(idx, 1, item)
    else if (!result.some((r) => lodashEs.isEqual(r, item))) result.push(item)
  }
  return result
}

/** Deep-merge transformed record fields onto current, special-casing `operation`. */
function mergeTransformedRecord(baseRecord, currentRecord, transformed) {
  var merged = { ...currentRecord }
  for (var key of Object.keys(transformed)) {
    if (key === "operation") {
      var changed = diffOperations(baseRecord.operation, transformed.operation)
      if (changed.length > 0) {
        merged.operation = mergeOperations(currentRecord.operation, changed)
      }
      continue
    }
    if (!lodashEs.isEqual(transformed[key], baseRecord[key])) {
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
  sectionReporter
}) {
  var pending = []
  var touchedCurrentField = false

  for (var [recordIndex, rule] of rules.entries()) {
    if (rule.type !== enums.FIELD_TYPE.EDUCATION) continue
    var record = records[recordIndex]
    if (!record) continue

    sectionReporter?.setLabel(rule.label)
    sectionReporter?.ensureRow(recordIndex, record)
    if (!touchedCurrentField) {
      cancellation.updateCurrentField(rule.label)
      touchedCurrentField = true
    }

    var children = rule.children || []
    for (var childRule of children) {
      var baseRecord = records[recordIndex] ?? record
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
          )
      })
    }
    sectionReporter?.emit()
  }

  while (pending.length > 0) {
    var raced = await Promise.race(
      pending.map((item, index) =>
        item.ready.then((result) => ({ pendingIndex: index, result }))
      )
    )
    var finished = pending.splice(raced.pendingIndex, 1)[0]
    if (raced.result.status === "rejected") throw raced.result.error

    var current =
      records[finished.recordIndex] ?? finished.baseRecord
    var merged = mergeTransformedRecord(
      finished.baseRecord,
      current,
      raced.result.record
    )
    records[finished.recordIndex] = merged

    var row = sectionReporter?.ensureRow(finished.recordIndex, merged)
    var displayValue = tryFindDisplayValue(finished.childRule.label, merged)
    try {
      var fillOk = await operationConfig[finished.childRule.type]?.(
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
      if (row && err instanceof cancellation.SkippedError) {
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

function sectionProgressCallbacks(sectionKey, progressTracker) {
  return {
    onCompleted: () => progressTracker.updateFilledProgress(sectionKey),
    onSkipped: () => progressTracker.updateMissedProgress(sectionKey),
    onSectionResultChanged: progressTracker.updateSectionResult
  }
}

function getRegularOperations(rules, record, operationConfig, updateField = true) {
  var ops = []
  for (var rule of rules) {
    var run = updateField
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

function getEducationOperations(
  rules,
  records,
  operationConfig,
  transformRecordByRule,
  progressCallbacks,
  options
) {
  return [
    async () => {
      var reporter = createSectionResultReporter(
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
            sectionReporter: reporter
          })
          progressCallbacks?.onCompleted?.()
          return
        }

        for (var [recordIndex, rule] of rules.entries()) {
          if (rule.type !== enums.FIELD_TYPE.EDUCATION) continue
          var record = records[recordIndex]
          if (!record) continue

          reporter.setLabel(rule.label)
          var row = reporter.ensureRow(recordIndex, record)
          cancellation.updateCurrentField(rule.label)
          reporter.emit()

          var children = rule.children || []
          for (var childRule of children) {
            var runChild = async (withCheckpoints = false) => {
              if (withCheckpoints) cancellation.checkpoint()
              if (transformRecordByRule) {
                var transformed = await transformRecordByRule(
                  childRule,
                  record,
                  recordIndex
                )
                if (withCheckpoints) cancellation.checkpoint()
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
              var fillOk =
                transformRecordByRule && options?.wrapTransformedFieldWithSkip
                  ? await cancellation.withSkip(() => runChild(true))
                  : await runChild()
              reporter.updateRow(row, record)
              var displayValue = tryFindDisplayValue(childRule.label, record)
              reporter.updateField(
                row,
                childRule.label,
                displayValue,
                fillOk !== false && displayValue ? "filled" : "missed"
              )
              reporter.emit()
            } catch (err) {
              if (err instanceof cancellation.SkippedError) {
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
        if (err instanceof cancellation.SkippedError) {
          progressCallbacks?.onSkipped?.()
          return
        }
        throw err
      } finally {
        if (!options?.keepCurrentFieldOnExit) {
          cancellation.updateCurrentField(null)
        }
      }
    }
  ]
}

function getEmploymentOperations(
  rules,
  records,
  operationConfig,
  transformRecordByRule,
  progressCallbacks,
  options
) {
  var employmentRules = rules.filter(
    (rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT
  )
  return [
    async () => {
      var reporter = createSectionResultReporter(
        "employment",
        progressCallbacks
      )
      try {
        for (var [recordIndex, rule] of employmentRules.entries()) {
          var record = records[recordIndex]
          if (!record) {
            console.warn(
              `No record found for employment rule at index ${recordIndex}. Total records: ${records.length}, Total rules: ${employmentRules.length}`
            )
            continue
          }

          reporter.setLabel(rule.label)
          var row = reporter.ensureRow(recordIndex, record)
          cancellation.updateCurrentField(rule.label)
          reporter.emit()

          var children = rule.children || []
          for (var childRule of children) {
            try {
              if (transformRecordByRule) {
                record = await transformRecordByRule(
                  childRule,
                  record,
                  recordIndex
                )
                records[recordIndex] = record
              }
              var fillOk = await operationConfig[childRule.type]?.(
                childRule,
                record,
                false
              )
              reporter.updateRow(row, record)
              var displayValue = tryFindDisplayValue(childRule.label, record)
              reporter.updateField(
                row,
                childRule.label,
                displayValue,
                fillOk !== false && displayValue ? "filled" : "missed"
              )
              reporter.emit()
            } catch (err) {
              if (err instanceof cancellation.SkippedError) {
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
        if (err instanceof cancellation.SkippedError) {
          progressCallbacks?.onSkipped?.()
          return
        }
        throw err
      } finally {
        if (!options?.keepCurrentFieldOnExit) {
          cancellation.updateCurrentField(null)
        }
      }
    }
  ]
}

function ensureArray(value) {
  return Array.isArray(value) ? value : [value]
}

function normalizeCandidateText(text, isLocation) {
  var compact = text.replace(/\s+/g, " ").trim()
  return isLocation ? compact.replace(/\s*,\s*/g, ", ") : compact
}

function buildAutocompleteAnswerCandidates(fieldLabel, rawAnswers) {
  var lower = fieldLabel.toLowerCase()
  var isLocation = lower.includes("location")
  var strings = ensureArray(rawAnswers).filter((v) => typeof v === "string")
  var candidates = []

  var pushUnique = (text) => {
    var normalized = normalizeCandidateText(text, isLocation)
    if (normalized && !candidates.includes(normalized)) {
      candidates.push(normalized)
    }
  }

  for (var value of strings) {
    pushUnique(value)
    if (isLocation) {
      var city = normalizeCandidateText(value, true).split(",")[0]?.trim()
      if (city) pushUnique(city)
    }
  }

  console.debug("[Greenhouse][Autocomplete] candidates prepared", {
    fieldKind: isLocation ? "location" : "generic",
    inputCount: strings.length,
    candidateCount: candidates.length
  })

  return candidates.length > 0 ? candidates : strings
}

/**
 * Wrap a field fill fn with skip/cancel handling + progress callbacks.
 * fillFn(rule, value, record) — return false to treat as miss.
 */
function createOperationHandlerFactory(onFilled, onMissed) {
  return function (fillFn, options = { expectArray: false }) {
    return async (rule, record, updateCurrentField = true) => {
      var label = rule.label
      if (updateCurrentField) cancellation.updateCurrentField(label)
      try {
        await cancellation.withSkip(async () => {
          var raw = findValueInRecord(rule.label, record)
          var value = options.expectArray
            ? ensureArray(raw)
            : lodashEs.isArray(raw)
              ? raw[0]
              : raw
          var ok = await fillFn(rule, value, record)
          if (ok === false) {
            throw new filler.ValueError(`Failed to fill ${rule.label}`)
          }
          if (updateCurrentField) onFilled(rule.label)
        })
        return true
      } catch (err) {
        if (err instanceof cancellation.CancelledError) throw err
        if (err instanceof cancellation.SkippedError) {
          if (updateCurrentField) {
            onMissed(rule.label)
            return false
          }
          throw err
        }
        if (err instanceof filler.ValueError) {
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
        if (updateCurrentField) onMissed(rule.label)
        return false
      }
    }
  }
}

/** Parse `YYYY-MM-DD` (or / .) into { year, month: "Jan", day }. */
function parseDateParts(raw) {
  try {
    if (!raw || typeof raw !== "string") {
      return { year: "", month: "", day: "" }
    }
    var normalized = raw.replace(/[\/.]/g, "-").trim()
    var parts = normalized.split("-")
    if (parts.length < 2) return { year: "", month: "", day: "" }

    var year = parts[0]
    var monthNum = parts[1]
    var day = parts[2]
    var MONTHS = [
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
      "Dec"
    ]
    var monthIndex = Number(monthNum) - 1
    var month =
      monthIndex >= 0 && monthIndex < 12 ? MONTHS[monthIndex] : ""

    return {
      year: year || "",
      month,
      day: day ? day.replace(/^0/, "") : ""
    }
  } catch (err) {
    console.error("parseDateParts error:", err, raw)
    return { year: "", month: "", day: "" }
  }
}
