// @ts-nocheck
/**
 * Normalize GPA strings (e.g. "3.8 / 4.0" → "3.8").
 */

export function normalizeGpaValue(value) {
  const raw = Array.isArray(value) ? value.find(Boolean) : value
  const text = String(raw ?? "").trim()
  if (!text) return ""

  const fraction = text.match(/^(\d+(?:\.\d+)?)\s*\/\s*\d+(?:\.\d+)?$/)
  if (fraction) return fraction[1]

  const plain = text.match(/^(\d+(?:\.\d+)?)$/)
  return plain ? plain[1] : text
}
