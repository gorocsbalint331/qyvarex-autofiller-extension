// @ts-nocheck
/**
 * Field-label normalize / compare helpers for ATS form matching.
 */

export function normalizeFieldLabel(label, options = {}) {
  const normalized = String(label ?? "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s*\/\s*/g, " / ")
    .replace(/\s*\*\s*/g, "")
    .trim()
    .toLowerCase()
  return options.loose
    ? normalized
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, " ")
        .trim()
    : normalized
}

export function buildNormalizedFieldLabelSet(labels = [], options = {}) {
  return new Set(labels.map((label) => normalizeFieldLabel(label, options)))
}

export function formatFieldLabelForDisplay(label) {
  return String(label ?? "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .replace(/(?:\s*\*)+\s*$/g, "")
    .trim()
}

/** Short English name for a required-field row, including when the site is not in English. */
export function englishFieldLabel(label) {
  const text = formatFieldLabelForDisplay(label)
  const lower = text.toLowerCase()
  if (!lower) return text
  if (/gehalt|salary|compensation|remuneration|\blohn\b/.test(lower)) {
    const period = /monat|month/.test(lower)
      ? "Monthly"
      : /stunde|hour/.test(lower)
        ? "Hourly"
        : "Annual"
    const gross = /brutto|gross/.test(lower) ? " gross" : ""
    const currency = /\busd\b/.test(lower) ? "USD" : /\beur\b|€/.test(lower) ? "EUR" : ""
    return `${period}${gross} salary${currency ? ` (${currency})` : ""}`
  }
  if (/startdatum|start date|frühestmöglich|earliest/.test(lower)) return "Start date"
  if (/lebenslauf|\bcv\b|resume/.test(lower)) return "Resume/CV"
  if (/anschreiben|cover letter/.test(lower)) return "Cover letter"
  if (/vorname|first name|given name/.test(lower)) return "First name"
  if (/nachname|last name|surname|family name/.test(lower)) return "Last name"
  if (/e-?mail/.test(lower)) return "Email"
  if (/telefon|phone|handy/.test(lower) && !/code|dial/.test(lower)) return "Phone"
  if (/land des wohnsitzes|country of residence|\bcountry\b/.test(lower)) return "Country"
  if (/\bstadt\b|\bcity\b|wohnort/.test(lower)) return "City"
  if (/adresse|address|straße|strasse|street/.test(lower)) return "Address"
  return text
}

export function removeFieldLabelSpecialCharacters(label) {
  return normalizeFieldLabel(label, { loose: true }).replace(/\s/g, "")
}
