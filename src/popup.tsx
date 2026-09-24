import { useEffect, useState } from "react"
import logoMark from "data-base64:~assets/logo-mark.png"
import { sendToBackground } from "@plasmohq/messaging"

import { getHubUrl } from "~api/hub-env"
import {
  getTeamSettings,
  listProfiles,
  saveTeamSettings,
  signOut
} from "~api/team-client"
import type { ProfileSummary } from "~api/team-types"

import "~style.css"

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 17H9m6 0a3 3 0 0 1-6 0m6 0h2.5a1.5 1.5 0 0 0 1.4-2l-.7-2.1A6 6 0 0 1 6.8 13L6.1 15a1.5 1.5 0 0 0 1.4 2H9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4a4.5 4.5 0 0 1 4.5 4.5v2.2c0 .5.1 1 .3 1.5l.7 2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ExternalIcon({ color = "currentColor" }: { color?: string }) {
  return (
    <svg
      className="ext-icon"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden>
      <path
        d="M14 4h6v6M20 4 10 14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IndexPopup() {
  const [tabUrl, setTabUrl] = useState("")
  const [status, setStatus] = useState("")
  const [profiles, setProfiles] = useState<ProfileSummary[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [signedIn, setSignedIn] = useState(false)
  const [userLabel, setUserLabel] = useState("")
  const [activating, setActivating] = useState(false)
  const [busy, setBusy] = useState(false)
  const [sessionReady, setSessionReady] = useState(false)

  async function refreshSession(_opts?: { quiet?: boolean }) {
    try {
      const settings = await getTeamSettings()
      setSelectedId(settings.selectedProfileId)
      if (!settings.apiToken) {
        setSignedIn(false)
        setProfiles([])
        setUserLabel("")
        return
      }
      setSignedIn(true)
      setUserLabel(
        settings.userName
          ? `${settings.userName}${settings.userEmail ? ` (${settings.userEmail})` : ""}`
          : settings.userEmail || "Signed in"
      )
      setSessionReady(true)
      try {
        const list = await listProfiles()
        setProfiles(list)
        if (!settings.selectedProfileId && list[0]) {
          await saveTeamSettings({ selectedProfileId: list[0].id })
          setSelectedId(list[0].id)
        }
      } catch {
        setProfiles([])
      }
    } finally {
      setSessionReady(true)
    }
  }

  useEffect(() => {
    void chrome.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
      setTabUrl(tab?.url ?? "")
    })
    void refreshSession()
    const onFocus = () => void refreshSession({ quiet: true })
    window.addEventListener("focus", onFocus)
    return () => window.removeEventListener("focus", onFocus)
  }, [])

  function openHubSignIn() {
    const hub = getHubUrl().replace(/\/+$/, "")
    const url = `${hub}/extension/connect?ext=${chrome.runtime.id}`
    void chrome.tabs.create({ url })
  }

  function openHubSignUp() {
    const hub = getHubUrl().replace(/\/+$/, "")
    void chrome.tabs.create({ url: `${hub}/?mode=register` })
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
    <div className="qx-popup">
      <div className="qx-brand">
        <img src={logoMark} alt="" width={28} height={28} />
        <p className="qx-brand__name">qyvarex</p>
      </div>

      {!sessionReady ? (
        <p className="qx-loading">Loading…</p>
      ) : signedIn ? (
        <>
          <div className="qx-alert qx-alert--ok" role="status">
            <BellIcon />
            <span>Qyvarex is active on this browser.</span>
          </div>

          <p className="qx-headline">Ready to autofill applications</p>

          {userLabel ? (
            <p className="qx-meta" style={{ marginBottom: 10 }}>
              {userLabel}
            </p>
          ) : null}

          {profiles.length > 0 ? (
            <label className="qx-label">
              Active profile
              <select
                className="qx-select"
                value={selectedId || ""}
                onChange={(e) => void onSelectProfile(e.target.value)}>
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

          <p className="qx-meta">{tabUrl || "No active tab URL"}</p>

          <button
            type="button"
            className="qx-btn"
            onClick={() => void activateHelper()}
            disabled={activating}>
            {activating ? "Working…" : "Activate on this tab"}
          </button>

          <button
            type="button"
            className="qx-btn qx-btn--ghost"
            onClick={() => void onSignOut()}
            disabled={busy}>
            Sign out
          </button>
        </>
      ) : (
        <>
          <div className="qx-alert" role="status">
            <BellIcon />
            <span>Qyvarex is installed, but your hub account isn’t connected.</span>
          </div>

          <p className="qx-headline">Sign in now to unlock the following:</p>

          <ul className="qx-benefits">
            <li>
              <CheckIcon />
              <span>Team profiles and resumes from your hub</span>
            </li>
            <li>
              <CheckIcon />
              <span>One-click autofill on supported job sites</span>
            </li>
            <li>
              <CheckIcon />
              <span>Saved answers reused across applications</span>
            </li>
          </ul>

          <button type="button" className="qx-btn" onClick={openHubSignIn}>
            Sign in
            <ExternalIcon color="#fff" />
          </button>

          <p className="qx-footer">
            Don&apos;t have an account?{" "}
            <button type="button" className="link" onClick={openHubSignUp}>
              Sign up
              <ExternalIcon color="currentColor" />
            </button>
          </p>
        </>
      )}

      {status ? <p className="qx-status">{status}</p> : null}
    </div>
  )
}

export default IndexPopup
