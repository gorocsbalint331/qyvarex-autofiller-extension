// @ts-nocheck
/**
 * Opens agent apply tabs and registers OpenAgentApplyTab listeners.
 */
import { useEffect } from "react"
import { sendToBackground } from "@plasmohq/messaging"
import { APPLICATION_STATUS } from "../core/enums.js"

const listenerRegistry = new WeakMap()

const createOpenAgentApplyTabHandler = (doc, sendMessage) => async (event) => {
  const { detail } = event
  if (!detail?.url) return
  const opened = await sendMessage({
    name: "openAgentApplyTab",
    body: {
      url: detail.url,
      jobId: detail.jobId,
    },
  })
  if (opened) {
    doc.dispatchEvent(
      new CustomEvent("FromExtension", {
        detail: {
          status: APPLICATION_STATUS.SUCCESS,
          missingFields: [],
        },
      }),
    )
  }
}

export const registerOpenAgentApplyTabListener = ({
  document: doc = document,
  sendMessage = sendToBackground,
} = {}) => {
  const existing = listenerRegistry.get(doc)
  if (existing) {
    existing.refCount += 1
    return () => {
      existing.refCount -= 1
      if (existing.refCount > 0) return
      doc.removeEventListener("OpenAgentApplyTab", existing.handler)
      listenerRegistry.delete(doc)
    }
  }

  const handler = createOpenAgentApplyTabHandler(doc, sendMessage)
  const entry = {
    refCount: 1,
    handler,
  }
  listenerRegistry.set(doc, entry)
  doc.addEventListener("OpenAgentApplyTab", handler)
  return () => {
    const current = listenerRegistry.get(doc)
    if (current) {
      current.refCount -= 1
      if (current.refCount > 0) return
      doc.removeEventListener("OpenAgentApplyTab", current.handler)
      listenerRegistry.delete(doc)
    }
  }
}

export default function useOpenNewTab() {
  useEffect(() => registerOpenAgentApplyTabListener(), [])
}
