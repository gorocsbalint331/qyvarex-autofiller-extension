import type { PlasmoMessaging } from "@plasmohq/messaging"

const HELPER_BUNDLE = "assets/helper-app.js"

/**
 * Activate the helper on a tab from the popup.
 *
 * After an extension reload, a stale content script may still receive
 * messages but cannot use chrome.* APIs. We require an explicit { ok: true }
 * ACK; anything else falls back to injecting the helper bundle directly.
 */
async function pingIconClicked(
  tabId: number
): Promise<{ ok: boolean; response?: unknown }> {
  const response = await chrome.tabs.sendMessage(
    tabId,
    { message: "iconClicked" },
    { frameId: 0 }
  )
  if (response && typeof response === "object" && (response as { ok?: boolean }).ok === true) {
    return { ok: true }
  }
  return { ok: false, response }
}

async function injectHelperDirectly(tabId: number) {
  await chrome.scripting.executeScript({
    target: { tabId, allFrames: true },
    files: [HELPER_BUNDLE],
    world: "ISOLATED"
  })
  // Bundle auto-boots; call again if the page already had a partial load.
  await chrome.scripting.executeScript({
    target: { tabId, allFrames: true },
    world: "ISOLATED",
    func: () => {
      const g = globalThis as typeof globalThis & {
        bootstrapJobrightHelperRuntime?: () => void | Promise<void>
        openJobrightHelperFromExtensionIcon?: () => void | Promise<void>
      }
      const boot = g.bootstrapJobrightHelperRuntime
      const open = g.openJobrightHelperFromExtensionIcon
      void (async () => {
        if (typeof boot === "function") await boot()
        if (typeof open === "function") await open()
      })()
    }
  })
}

function isRestrictedUrl(url?: string) {
  if (!url) return true
  return /^(chrome|chrome-extension|edge|about|devtools|view-source):/i.test(
    url
  )
}

const handler: PlasmoMessaging.MessageHandler<{ tabId?: number }> = async (
  req,
  res
) => {
  try {
    const tabId = req.body?.tabId
    if (typeof tabId !== "number") {
      res.send({ success: false, error: "missing_tab" })
      return
    }

    const tab = await chrome.tabs.get(tabId)
    if (isRestrictedUrl(tab.url)) {
      res.send({
        success: false,
        error: "Open a job application page (not a browser internal page)."
      })
      return
    }

    try {
      const ack = await pingIconClicked(tabId)
      if (ack.ok) {
        res.send({ success: true, mode: "content_script" })
        return
      }
      console.warn(
        "[activateHelperOnTab] content script ACK failed — direct inject",
        ack.response
      )
    } catch (pingError) {
      console.warn(
        "[activateHelperOnTab] content script missing, injecting helper directly:",
        pingError instanceof Error ? pingError.message : pingError
      )
    }

    await injectHelperDirectly(tabId)
    res.send({ success: true, mode: "direct_inject" })
  } catch (error) {
    console.error("[activateHelperOnTab] failed:", error)
    res.send({
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Could not activate helper — reload the page and try again."
    })
  }
}

export default handler
