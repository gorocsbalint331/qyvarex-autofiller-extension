import type { PlasmoMessaging } from "@plasmohq/messaging"

/**
 * Inject the helper-app bundle into the sender frame (ported from Jobright).
 */
function pathnameFromBundleUrl(bundleUrl?: string): string | null {
  if (!bundleUrl) return null
  try {
    const url = new URL(bundleUrl)
    return decodeURIComponent(url.pathname).replace(/^\/+/, "")
  } catch {
    return bundleUrl.replace(/^\/+/, "")
  }
}

const handler: PlasmoMessaging.MessageHandler<{ bundleUrl?: string }> = async (
  req,
  res
) => {
  try {
    const tabId = req.sender?.tab?.id
    const frameId = req.sender?.frameId ?? 0
    const file = pathnameFromBundleUrl(req.body?.bundleUrl)

    if (typeof tabId !== "number" || !file) {
      res.send({ success: false, error: "missing_tab_or_bundle" })
      return
    }

    await chrome.scripting.executeScript({
      target: { tabId, frameIds: [frameId] },
      files: [file],
      world: "ISOLATED"
    })

    res.send({ success: true })
  } catch (error) {
    console.error("[injectHelperAppBundle] failed:", error)
    res.send({
      success: false,
      error: error instanceof Error ? error.message : String(error)
    })
  }
}

export default handler
