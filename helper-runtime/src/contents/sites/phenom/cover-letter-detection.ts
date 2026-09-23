// @ts-nocheck
/**
 * Phenom — detect continue/next actions that should re-check cover letter status.
 */

function normalizeActionText(value) {
  return value?.trim().toLowerCase() || ""
}

function shouldScheduleCoverLetterCheckForAction({
  text,
  id,
  ariaLabel,
}) {
  const normalizedText = normalizeActionText(text)
  const normalizedId = normalizeActionText(id)
  const normalizedAriaLabel = normalizeActionText(ariaLabel)
  return (
    normalizedId === "next" ||
    normalizedText === "continue" ||
    normalizedText === "next" ||
    normalizedText === "apply" ||
    normalizedText === "i accept" ||
    normalizedAriaLabel === "continue" ||
    normalizedAriaLabel === "next" ||
    normalizedAriaLabel === "apply" ||
    normalizedAriaLabel === "i accept"
  )
}

export { shouldScheduleCoverLetterCheckForAction }
