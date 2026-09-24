import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchAutofillInfo } from "~api/team-client"
import {
  resolveOperationLocally,
  type OperationPayload
} from "~lib/resolve-operation"
import { planOracleEducationClientSearchStep } from "~lib/oracle-education-plan"

/**
 * Multi-turn client-search step (Oracle edu LOV, etc.).
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const body = req.body ?? {}
    const hub = await fetchAutofillInfo(
      typeof body.profileId === "string" ? body.profileId : null
    )
    if (!hub) {
      res.send({
        ok: false,
        results: [],
        options: [],
        message: "no_profile"
      })
      return
    }

    const round = typeof body.round === "number" ? body.round : 0
    const candidates = Array.isArray(body.candidates) ? body.candidates : []
    const searchText =
      typeof body.query === "string"
        ? body.query
        : typeof body.searchText === "string"
          ? body.searchText
          : ""

    // Oracle-style planner when candidates / round provided
    if (body.mode === "oracle-education" || candidates.length || body.round != null) {
      const desired =
        typeof body.desired === "string"
          ? body.desired
          : searchText
      const plan = planOracleEducationClientSearchStep({
        round,
        searchText,
        candidates: candidates.map((c: { text?: string; value?: string; candidate_key?: string }) => ({
          candidate_key: String(c.candidate_key || c.value || c.text || ""),
          value: String(c.value || c.candidate_key || c.text || ""),
          text: String(c.text || c.value || "")
        })),
        desired
      })
      res.send({
        ok: true,
        action: plan.action,
        results: plan.selected_values || [],
        options: plan.selected_values || [],
        searchText: plan.searchText,
        result: plan
      })
      return
    }

    const operation: OperationPayload = {
      label: body.label || body.field || body.step || "",
      query: searchText,
      options: body.options || body.results || [],
      search_request_schema: body.search_request_schema
    }

    const result = await resolveOperationLocally(
      hub,
      operation,
      typeof body.source === "string" ? body.source : "generic"
    )

    res.send({
      ok: true,
      results: result.selected_values,
      options: result.selected_values,
      result
    })
  } catch (err) {
    res.send({
      ok: false,
      results: [],
      options: [],
      message: err instanceof Error ? err.message : "resolve_failed"
    })
  }
}

export default handler
