import type { PlasmoMessaging } from "@plasmohq/messaging"

const HELPER_BUNDLE = "assets/helper-app.js"

/**
 * Activate the helper on a tab from the popup.
 *
 * "Receiving end does not exist" means no content script is listening
 * (page opened before the extension loaded, or CS not injected yet).
 * Re-injecting Plasmo's CS via scripting often still fails to attach
 * listeners, so we fall back to injecting the helper bundle directly.
 */
async function pingIconClicked(tabId: number) {
  await chrome.tabs.sendMessage(tabId, { message: "iconClicked" })
}

async function injectHelperDirectly(tabId: number) {
  await chrome.scripting.executeScript({
    target: { tabId, allFrames: true },
    files: [HELPER_BUNDLE],
    world: "ISOLATED"
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
      await pingIconClicked(tabId)
      res.send({ success: true, mode: "content_script" })
      return
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
