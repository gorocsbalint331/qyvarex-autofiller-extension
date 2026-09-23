// @ts-nocheck
/**
 * Sanitize autofill answer-pair payloads before tracking / upload.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */

let SECTION_KEYS = /* @__PURE__ */ new Set([
  "education",
  "employment",
  "experience",
])

function isPlainObject(value) {
  return !!value && "object" == typeof value && !Array.isArray(value)
}

function omitUndefined(value) {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => void 0 !== entry),
  )
}

function deepSanitize(value) {
  return Array.isArray(value)
    ? value.map(deepSanitize)
    : isPlainObject(value)
      ? Object.fromEntries(
          Object.entries(omitUndefined(value)).map(([key, entry]) => [
            key,
            "normal" === key ? filterAutofillAnswerPairNormalSnapshot(entry) : deepSanitize(entry),
          ]),
        )
      : value
}

function toTrimmedString(value, fallback = "") {
  return "string" == typeof value
    ? value.trim()
    : "number" == typeof value ||
        "boolean" == typeof value ||
        "bigint" == typeof value
      ? String(value)
      : fallback
}

function toSourceString(value) {
  return toTrimmedString(value, "unknown") || "unknown"
}

function filterAutofillAnswerPairNormalSnapshot(value) {
  return isPlainObject(value)
    ? Object.fromEntries(
        Object.entries(value).filter(([, entry]) => "string" == typeof entry),
      )
    : {}
}

function sanitizeSectionArray(value) {
  return Array.isArray(value)
    ? value.filter(isPlainObject).map(omitUndefined)
    : []
}

function sanitizeAutofillSnapshot(value) {
  let source = isPlainObject(value) ? value : {}
  let { normal, ...rest } = source
  let sanitizedRest = Object.fromEntries(
    Object.entries(omitUndefined(rest)).map(([key, entry]) => [
      key,
      SECTION_KEYS.has(key) ? sanitizeSectionArray(entry) : entry,
    ]),
  )
  return {
    normal: filterAutofillAnswerPairNormalSnapshot(normal),
    ...sanitizedRest,
  }
}

function sanitizeAutofillAnswerPairPayload(value) {
  let source = isPlainObject(value) ? value : {}
  let {
    formUrl,
    autofill,
    submit,
    source: eventSource,
    ...rest
  } = source
  return {
    ...deepSanitize(rest),
    formUrl: toTrimmedString(formUrl),
    autofill: sanitizeAutofillSnapshot(autofill),
    submit: sanitizeAutofillSnapshot(submit),
    source: toSourceString(eventSource),
  }
}

export {
  filterAutofillAnswerPairNormalSnapshot,
  sanitizeAutofillAnswerPairPayload,
}
