// @ts-nocheck
/**
 * Observes DOM and resolves the active pre-autofill flow.
 */
import { useEffect, useState } from "react"
import { resolvePreAutofillFlow } from "../contents/pre-autofill-flow/core.js"
import { PRE_AUTOFILL_FLOW_REGISTRY } from "../contents/pre-autofill-flow/registry.js"

const POLL_INTERVAL_MS = 1e3
const OBSERVE_DURATION_MS = 3e4

function isSameFlowSnapshot(previous, next) {
  return (
    previous?.flowId === next?.flowId &&
    previous?.pageKind === next?.pageKind &&
    previous?.ctaText === next?.ctaText
  )
}

export function usePreAutofillFlow({
  targetName,
  url,
  enabled = true,
}) {
  const [flow, setFlow] = useState(null)

  useEffect(() => {
    if (!enabled) {
      setFlow(null)
      return
    }

    let cancelled = false
    let animationFrameId = 0

    const resolveFlow = () => {
      if (cancelled) return
      const nextFlow = resolvePreAutofillFlow({
        targetName,
        url,
        document,
        registry: PRE_AUTOFILL_FLOW_REGISTRY,
      })
      setFlow((previous) =>
        isSameFlowSnapshot(previous, nextFlow) ? previous : nextFlow,
      )
    }

    const scheduleResolve = () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId)
      animationFrameId = window.requestAnimationFrame(resolveFlow)
    }

    resolveFlow()

    const observeRoot = document.body || document.documentElement
    const observer =
      observeRoot && typeof MutationObserver !== "undefined"
        ? new MutationObserver(scheduleResolve)
        : null
    observer?.observe(observeRoot, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: [
        "data-automation-id",
        "role",
        "href",
        "aria-label",
        "id",
        "class",
        "style",
        "title",
      ],
    })

    const intervalId = window.setInterval(resolveFlow, POLL_INTERVAL_MS)
    const stopIntervalTimeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId)
    }, OBSERVE_DURATION_MS)

    return () => {
      cancelled = true
      observer?.disconnect()
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId)
      window.clearInterval(intervalId)
      window.clearTimeout(stopIntervalTimeoutId)
    }
  }, [targetName, url, enabled])

  return flow
}
