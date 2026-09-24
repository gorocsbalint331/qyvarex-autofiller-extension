// @ts-nocheck
/**
 * Clone autofill-operation payloads for resolve-trace tracking fields.
 *
 * Strips request headers (and optionally original_answer) so traces can be
 * attached to answer-pair events without leaking live request metadata.
 */

export function cloneAutofillOperation(operation) {
  if (!operation) return null
  return {
    ...operation,
    search_request_schema: {
      ...operation.search_request_schema,
      headers: {
        ...operation.search_request_schema.headers,
      },
      params: operation.search_request_schema.params.map((param) => ({
        ...param,
      })),
    },
  }
}

/** Clone operation for common resolve-trace use: drop headers + original_answer. */
export function cloneAutofillOperationCommon(operation) {
  const cloned = cloneAutofillOperation(operation)
  if (!cloned) return null
  const { original_answer: _originalAnswer, ...withoutAnswer } = cloned
  const { headers: _headers, ...schemaWithoutHeaders } =
    withoutAnswer.search_request_schema
  return {
    ...withoutAnswer,
    search_request_schema: schemaWithoutHeaders,
  }
}

export function buildResolveTraceField(fieldType, operation, resolvedValue) {
  const request = cloneAutofillOperationCommon(operation)
  if (!request) return null
  const value = String(resolvedValue ?? "")
  return {
    fieldType,
    request: {
      ...request,
      original_answer: String(operation?.original_answer ?? ""),
    },
    result: {
      value,
      selected_values: value ? [value] : [],
    },
  }
}
