import type { PlasmoMessaging } from "@plasmohq/messaging"

/** Soft success for Jobright telemetry / attribution messages we do not mirror. */
export function softOk(
  handler: string,
  extra: Record<string, unknown> = {}
): PlasmoMessaging.MessageHandler {
  return async (_req, res) => {
    res.send({
      ok: true,
      stub: true,
      handler,
      ...extra
    })
  }
}

/** Soft empty payload for suggestion / search stubs. */
export function softEmpty(
  handler: string,
  key = "results"
): PlasmoMessaging.MessageHandler {
  return async (_req, res) => {
    res.send({
      ok: true,
      stub: true,
      handler,
      [key]: []
    })
  }
}
