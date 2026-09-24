/**
 * Background service worker entry.
 * Message handlers live in background/messages/*.
 */

import { getHubUrl } from "~api/hub-env"
import { saveTeamSettings } from "~api/team-client"

chrome.runtime.onMessageExternal.addListener((message, _sender, sendResponse) => {
  if (message?.type !== "TEAM_HUB_AUTH" || !message.token) {
    sendResponse({ ok: false, error: "unknown_message" })
    return false
  }

  const siteUrl = String(message.siteUrl || getHubUrl()).replace(/\/+$/, "")

  void saveTeamSettings({
    siteUrl,
    apiToken: String(message.token),
    userEmail: message.user?.email || "",
    userName: message.user?.name || ""
  })
    .then(() => sendResponse({ ok: true }))
    .catch((err) =>
      sendResponse({
        ok: false,
        error: err instanceof Error ? err.message : "save_failed"
      })
    )

  return true
})

export {}
