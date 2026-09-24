// @ts-nocheck
/**
 * React-select menu search settle state for Greenhouse autocomplete fields.
 */

/** @returns {"no-options" | "options-ready" | "pending"} */
export function getReactSelectMenuSearchState({
  hasNoOptionsNotice,
  currentOptionsSnapshot,
  previousOptionsSnapshot,
}) {
  if (hasNoOptionsNotice) return "no-options"
  if (
    currentOptionsSnapshot &&
    (previousOptionsSnapshot == null ||
      currentOptionsSnapshot !== previousOptionsSnapshot)
  ) {
    return "options-ready"
  }
  return "pending"
}

/** True when the menu is no longer waiting on a search in flight. */
export function isReactSelectMenuSearchSettled({
  hasLoadingNotice,
  hasNoOptionsNotice,
  currentOptionsSnapshot,
  previousOptionsSnapshot,
}) {
  const state = getReactSelectMenuSearchState({
    hasNoOptionsNotice,
    currentOptionsSnapshot,
    previousOptionsSnapshot,
  })
  return (
    state !== "pending" ||
    (!hasLoadingNotice && currentOptionsSnapshot.length > 0)
  )
}
