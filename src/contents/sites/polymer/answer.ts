// @ts-nocheck
/**
 * Polymer — answer shaping for LinkedIn handles and boolean Yes/No values.
 */

export function formatAnswer(answer) {
  if (!answer.regular) return answer

  const linkedinKey = Object.keys(answer.regular).find((key) =>
    key.toLowerCase().includes("linkedin"),
  )
  if (linkedinKey) {
    let value = answer.regular[linkedinKey]
    if (Array.isArray(value)) value = value[0]
    if (typeof value === "string" && value) {
      const match = value.match(
        /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/([^\/\?]+)/,
      )
      if (match && match[1]) {
        answer.regular[linkedinKey] = match[1]
      } else {
        answer.regular[linkedinKey] = value
      }
    }
  }

  Object.keys(answer.regular).forEach((key) => {
    const value = answer.regular[key]
    if (typeof value === "boolean") {
      answer.regular[key] = value ? "Yes" : "No"
    }
  })
  return answer
}
