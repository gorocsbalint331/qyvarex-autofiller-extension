/** Open-ended application fields the model should write from the job title. */
export function isNarrativeField(label: string) {
  const text = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
  if (!text) return false
  return (
    /personal note/.test(text) ||
    /cover letter/.test(text) ||
    /letter of (interest|motivation)/.test(text) ||
    /additional (information|info|comments|details|notes)/.test(text) ||
    /^(comments|notes|message|motivation|summary)$/.test(text) ||
    /why (are you|do you|this role|this position|this job|interested)/.test(
      text
    ) ||
    /tell us about/.test(text) ||
    /about yourself/.test(text)
  )
}
