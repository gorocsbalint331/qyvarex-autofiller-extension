export type OracleLovCandidate = {
  candidate_key: string
  value: string
  text: string
}

/**
 * Multi-step client-search planner for Oracle education LOV.
 */
export function planOracleEducationClientSearchStep(opts: {
  round: number
  maxRounds?: number
  searchText: string
  candidates: OracleLovCandidate[]
  desired: string
}): {
  action: "REQUEST_SEARCH" | "SELECT_OPTIONS" | "NO_MATCH"
  searchText?: string
  selected_values?: string[]
} {
  const max = opts.maxRounds ?? 5
  if (opts.round >= max) return { action: "NO_MATCH" }

  if (!opts.candidates.length) {
    return {
      action: "REQUEST_SEARCH",
      searchText: opts.searchText
    }
  }

  const want = opts.desired.toLowerCase()
  const hit = opts.candidates.find(
    (c) =>
      c.text.toLowerCase() === want ||
      c.text.toLowerCase().includes(want) ||
      want.includes(c.text.toLowerCase())
  )
  if (hit) {
    return {
      action: "SELECT_OPTIONS",
      selected_values: [hit.text]
    }
  }

  const token = opts.searchText.split(/\s+/)[0] || opts.searchText
  if (opts.round < max - 1 && token !== opts.searchText) {
    return { action: "REQUEST_SEARCH", searchText: token }
  }

  return {
    action: "SELECT_OPTIONS",
    selected_values: [opts.candidates[0].text]
  }
}
