// @ts-nocheck
/**
 * Ensure a single autofill instance exists, creating one when needed.
 */

export function ensureAutofillInstance(existing, shouldCreate, create) {
  return existing || !shouldCreate ? existing : create() || null
}
