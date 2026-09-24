// @ts-nocheck
/**
 * Bridge Jobright install-attribution postMessage flow into extension storage.
 */

import {
  ATTRIBUTION_ACK_EVENT,
  ATTRIBUTION_REQUEST_EVENT,
  isTrustedJobrightOrigin,
  validateAutofillInstallAttribution,
} from "../../utils/autofill-install-attribution.ts"

const RETRY_DELAYS_MS = [250, 1000, 2000]
const FLUSH_DELAY_MS = 3000

export function initializeAutofillInstallAttributionBridge(host) {
  if (!host.isTopFrame || !isTrustedJobrightOrigin(host.origin)) {
    return () => undefined
  }

  const now = host.now ?? Date.now
  let accepted = false
  let disposed = false
  const scheduled = []

  const dispose = () => {
    if (disposed) return
    disposed = true
    scheduled.forEach((entry) => entry.cancelScheduled())
    host.removeResponseListener(onResponse)
  }

  const onResponse = async (payload) => {
    if (disposed || accepted) return
    const record = validateAutofillInstallAttribution(payload, now())
    if (!record) {
      host.logWarning?.("invalid_response")
      return
    }
    accepted = true
    try {
      if (!(await host.accept(record)) || disposed) return
      host.dispatch(ATTRIBUTION_ACK_EVENT, {
        schema_version: 1,
        install_intent_id: record.install_intent_id,
      })
    } catch {
      host.logWarning?.("storage_or_message_failure")
    }
  }

  host.addResponseListener(onResponse)
  host.dispatch(ATTRIBUTION_REQUEST_EVENT)

  scheduled.push(
    ...RETRY_DELAYS_MS.map((delayMs) =>
      host.schedule(() => {
        if (!disposed && !accepted) {
          host.dispatch(ATTRIBUTION_REQUEST_EVENT)
        }
      }, delayMs),
    ),
  )

  scheduled.push(
    host.schedule(async () => {
      if (disposed || accepted) return
      try {
        if (await host.flush()) dispose()
      } catch {
        host.logWarning?.("direct_attribution_flush_failure")
      }
    }, FLUSH_DELAY_MS),
  )

  return dispose
}
