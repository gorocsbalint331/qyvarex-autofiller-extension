/**
 * Background service worker entry.
 * Message handlers live in background/messages/*.
 */

import "~lib/ignore-bfcache-ports"

import { getHubUrl } from "~api/hub-env"
import { saveTeamSettings } from "~api/team-client"
import { activateHelperTab } from "~background/messages/activateHelperOnTab"
import { ensureDevice } from "~lib/device"

chrome.action.onClicked.addListener((tab) => {
  if (typeof tab.id !== "number") return
  void activateHelperTab(tab.id).catch((error) => {
    console.warn("[qyvarex] could not open the helper", error)
  })
})

chrome.runtime.onMessageExternal.addListener((message, _sender, sendResponse) => {
  if (message?.type === "TEAM_HUB_DEVICE") {
    void ensureDevice()
      .then((device) => sendResponse({ ok: true, deviceKey: device.key, label: device.label }))
      .catch((err) =>
        sendResponse({
          ok: false,
          error: err instanceof Error ? err.message : "device_failed"
        })
      )
    return true
  }

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
