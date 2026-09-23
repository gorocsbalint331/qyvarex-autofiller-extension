// @ts-nocheck
/**
 * HTTP status and autofill error-code enums used by the helper runtime.
 */

export enum HTTP_STATUS_CODES {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  INTERNAL_SERVER_ERROR = 500,
  CLIENT_REQUEST_TIMEOUT = "client_408",
}

export enum CUSTOM_ERROR_CODES {
  RESUME_MISSING_KEY = "errorCode: 40008",
  EXTENSION_CONTEXT_INVALIDATED = "extension_context_invalidated",
  NO_ELEMENTS = "NO_ELEMENTS",
}

const AUTOFILL_TERMINAL_HTTP_STATUSES = [
  HTTP_STATUS_CODES.BAD_REQUEST,
  HTTP_STATUS_CODES.PAYMENT_REQUIRED,
  HTTP_STATUS_CODES.FORBIDDEN,
  HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
  HTTP_STATUS_CODES.CLIENT_REQUEST_TIMEOUT,
  CUSTOM_ERROR_CODES.EXTENSION_CONTEXT_INVALIDATED,
  CUSTOM_ERROR_CODES.NO_ELEMENTS,
]

function normalizeHttpStatus(value) {
  if (typeof value !== "string") return value
  const trimmed = value.trim()
  return /^\d+$/.test(trimmed) ? Number(trimmed) : trimmed
}

export function isAutofillTerminalHttpStatus(status) {
  return AUTOFILL_TERMINAL_HTTP_STATUSES.includes(normalizeHttpStatus(status))
}

export const TIMEOUT_DURATION_MS = 6e4
