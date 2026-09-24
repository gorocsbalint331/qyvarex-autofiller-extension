// @ts-nocheck
/**
 * Dover-specific phone field detection and (+N) → +N normalization.
 */

function normalizeFieldLabel(label) {
  return String(label ?? "")
    .replace(/[*\uff0a]\s*$/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

export function isDoverPhoneField(label) {
  const normalized = normalizeFieldLabel(label)
  return normalized === "phone" || normalized === "phone number"
}

export function normalizeDoverPhoneValue(value) {
  if (typeof value !== "string") return value
  const match = value.match(/^\s*\(\+(\d{1,4})\)\s*(.+)$/)
  return match ? `+${match[1]} ${match[2]}` : value
}

export function applyDoverPhoneNormalization(userInfo) {
  for (const key of Object.keys(userInfo)) {
    if (isDoverPhoneField(key)) {
      userInfo[key] = normalizeDoverPhoneValue(userInfo[key])
    }
  }
}
