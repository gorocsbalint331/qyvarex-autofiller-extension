import type { PlasmoMessaging } from "@plasmohq/messaging"

/** Soft success for Jobright telemetry / product messages we do not mirror. */
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

/** Soft null payload (Jobright often sends bare null on miss). */
export function softNull(handler: string): PlasmoMessaging.MessageHandler {
  return async (_req, res) => {
    res.send(null)
  }
}

/** Soft fixed JSON body (credits, config, etc.). */
export function softValue(
  handler: string,
  value: unknown
): PlasmoMessaging.MessageHandler {
  return async (_req, res) => {
    res.send(value)
  }
}
