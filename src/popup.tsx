import { useEffect, useState } from "react"
import logoMark from "data-base64:~assets/logo-mark.png"
import { sendToBackground } from "@plasmohq/messaging"

import { getHubUrl } from "~api/env-resolver"
import {
  getTeamSettings,
  listProfiles,
  saveTeamSettings,
  signOut
} from "~api/team-client"
import type { ProfileSummary } from "~api/team-types"

function IndexPopup() {
  const [tabUrl, setTabUrl] = useState("")
  const [status, setStatus] = useState("")
  const [profiles, setProfiles] = useState<ProfileSummary[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [signedIn, setSignedIn] = useState(false)
  const [userLabel, setUserLabel] = useState("")
  const [activating, setActivating] = useState(false)
  const [busy, setBusy] = useState(false)

  async function refreshSession() {
    const settings = await getTeamSettings()
    setSelectedId(settings.selectedProfileId)
    if (!settings.apiToken) {
      setSignedIn(false)
      setProfiles([])
      setUserLabel("")
      return
    }
    try {
      const list = await listProfiles()
      setProfiles(list)
      setSignedIn(true)
      setUserLabel(
        settings.userName
          ? `${settings.userName}${settings.userEmail ? ` (${settings.userEmail})` : ""}`
          : settings.userEmail || "Signed in"
      )
      if (!settings.selectedProfileId && list[0]) {
        await saveTeamSettings({ selectedProfileId: list[0].id })
        setSelectedId(list[0].id)
      }
    } catch {
      setSignedIn(false)
      setProfiles([])
    }
  }

  useEffect(() => {
    void chrome.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
      setTabUrl(tab?.url ?? "")
    })
    void refreshSession()
    const onFocus = () => void refreshSession()
    window.addEventListener("focus", onFocus)
    return () => window.removeEventListener("focus", onFocus)
  }, [])

  function openHubSignIn() {
    const hub = getHubUrl().replace(/\/+$/, "")
    const url = `${hub}/extension/connect?ext=${chrome.runtime.id}`
    void chrome.tabs.create({ url })
  }

  async function onSignOut() {
    setBusy(true)
    try {
      await signOut()
      setStatus("Signed out")
      await refreshSession()
    } finally {
      setBusy(false)
    }
  }

  async function activateHelper() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (!tab?.id) {
      setStatus("No active tab")
      return
    }
    setActivating(true)
    setStatus("Activating…")
    try {
      const result = await sendToBackground({
        name: "activateHelperOnTab",
        body: { tabId: tab.id }
      })
      if (!result?.success) {
        setStatus(
          result?.error ||
            "Activation failed — reload the page and try again"
        )
        return
      }
      setStatus(
        result.mode === "direct_inject"
          ? "Helper injected on this tab"
          : "Helper activated on this tab"
      )
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Could not reach this tab — reload the page and try again"
      )
    } finally {
      setActivating(false)
    }
  }

  async function onSelectProfile(id: string) {
    setSelectedId(id)
    await saveTeamSettings({ selectedProfileId: id })
    setStatus("Profile selected for autofill")
  }

  return (
    <div
      style={{
        padding: 16,
        width: 340,
        fontFamily: "Segoe UI, system-ui, sans-serif",
        color: "#102a43"
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 8
        }}>
        <img
          src={logoMark}
          alt="Qyvarex"
          width={36}
          height={36}
          style={{ display: "block" }}
        />
        <h2 style={{ margin: 0, fontSize: 16 }}>Qyvarex Autofill</h2>
      </div>

      {signedIn ? (
        <>
          <p style={{ margin: "0 0 12px", fontSize: 12, opacity: 0.85 }}>
            {userLabel || "Signed in to team hub"}
          </p>

          {profiles.length > 0 ? (
            <label style={{ display: "block", fontSize: 12, marginBottom: 12 }}>
              Active profile
              <select
                value={selectedId || ""}
                onChange={(e) => void onSelectProfile(e.target.value)}
                style={{
                  display: "block",
                  width: "100%",
                  marginTop: 6,
                  padding: 8,
                  borderRadius: 6,
                  border: "1px solid #bcccdc"
                }}>
                {profiles.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label}
                    {p.firstName || p.lastName
                      ? ` — ${[p.firstName, p.lastName].filter(Boolean).join(" ")}`
                      : ""}
                  </option>
                ))}
              </select>
            </label>
          ) : null}

          <p
            style={{
              margin: "0 0 12px",
              fontSize: 11,
              wordBreak: "break-all",
              background: "#f0f4f8",
              padding: 8,
              borderRadius: 6
            }}>
            {tabUrl || "…"}
          </p>

          <button
            onClick={() => void activateHelper()}
            disabled={activating}
            style={{
              width: "100%",
              padding: "10px 12px",
              border: 0,
              borderRadius: 8,
              background: "#0b6e4f",
              color: "white",
              fontWeight: 600,
              cursor: activating ? "wait" : "pointer",
              marginBottom: 8,
              opacity: activating ? 0.7 : 1
            }}>
            {activating ? "Activating…" : "Activate helper on this tab"}
          </button>

          <button
            onClick={() => void onSignOut()}
            disabled={busy}
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "1px solid #bcccdc",
              borderRadius: 8,
              background: "#fff",
              cursor: "pointer"
            }}>
            Sign out
          </button>
        </>
      ) : (
        <>
          <p style={{ margin: "0 0 12px", fontSize: 12, opacity: 0.85 }}>
            Sign in on the Team Hub to connect this extension.
          </p>
          <button
            onClick={openHubSignIn}
            style={{
              width: "100%",
              padding: "10px 12px",
              border: 0,
              borderRadius: 8,
              background: "#0b6e4f",
              color: "white",
              fontWeight: 600,
              cursor: "pointer"
            }}>
            Sign in
          </button>
        </>
      )}

      {status ? (
        <p style={{ margin: "10px 0 0", fontSize: 12 }}>{status}</p>
      ) : null}
    </div>
  )
}

export default IndexPopup
