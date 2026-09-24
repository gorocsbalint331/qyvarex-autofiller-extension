// @ts-nocheck
/**
 * Detect Chrome extension context-invalidated / message-port closed errors.
 */

const INVALIDATED_MESSAGE_SNIPPETS = [
  "extension context invalidated",
  "message channel closed before a response was received",
  "the message port closed before a response was received",
  "receiving end does not exist",
]

function readErrorMessage(error) {
  if (error instanceof Error) return error.message
  if (typeof error === "string") return error
  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message
  }
  return ""
}

export function isExtensionContextInvalidatedError(error) {
  const message = readErrorMessage(error).toLowerCase()
  return INVALIDATED_MESSAGE_SNIPPETS.some((snippet) => message.includes(snippet))
}
