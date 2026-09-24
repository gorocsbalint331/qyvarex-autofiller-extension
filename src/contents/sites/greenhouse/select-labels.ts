// @ts-nocheck
/**
 * Normalize Greenhouse select rule labels (phone-country vs geographic country).
 */

/**
 * Remap a bare "Country" label under a phone-input widget to
 * "Phone Country Code"; otherwise return the original label (or null when
 * the control is a phone-country field we should not treat as geographic).
 */
export function normalizeGreenhouseSelectRuleLabel(label, input) {
  if (label.toLowerCase() !== "country") return label
  if (
    input.closest(".phone-input__country") ||
    input.closest("fieldset.phone-input")
  ) {
    return "Phone Country Code"
  }
  return null
}
