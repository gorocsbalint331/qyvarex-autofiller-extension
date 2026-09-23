// @ts-nocheck
/**
 * Whether the helper sidebar should be visible for the current card/agent state.
 */

export function isHelperSidebarVisible({
  openCard,
  isAgentDomain,
  clickOpenInAgent,
}) {
  return openCard && (!isAgentDomain || clickOpenInAgent)
}
