import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchAutofillInfo } from "~api/team-client"
import { resolveOperationLocally } from "~lib/resolve-operation"

const ALLOWED_SOURCES = new Set([
  "ashby",
  "eightfold",
  "greenhouse",
  "metacareers",
  "myworkday",
  "oraclecloud",
  "pinpointhq",
  "phenom",
  "rippling",
  "smartrecruiters",
  "zohorecruit",
  "personio",
  "lever",
  "generic",
  "autoFill",
  "cleanTs"
])

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const operation = req.body?.operation
    const source =
      typeof req.body?.source === "string" ? req.body.source : "generic"

    if (!operation || typeof operation !== "object") {
      res.send({
        ok: false,
        operation,
        result: { action: "RETRYABLE_FAILURE", selected_values: [] },
        message: "missing_operation"
      })
      return
    }

    if (source && source.length > 64) {
      res.send({
        ok: false,
        operation,
        result: { action: "RETRYABLE_FAILURE", selected_values: [] },
        message: "invalid_source"
      })
      return
    }

    void ALLOWED_SOURCES

    const hub = await fetchAutofillInfo()
    if (!hub) {
      res.send({
        ok: false,
        operation,
        result: { action: "RETRYABLE_FAILURE", selected_values: [] },
        message: "no_profile"
      })
      return
    }

    const result = await resolveOperationLocally(hub, operation, source)
    res.send({
      ok: true,
      operation,
      result
    })
  } catch (err) {
    res.send({
      ok: false,
      result: { action: "RETRYABLE_FAILURE", selected_values: [] },
      message: err instanceof Error ? err.message : "resolve_failed"
    })
  }
}

export default handler
