// @ts-nocheck
/**
 * Side-panel control for the hub profile used by Autofill.
 */

import { useEffect, useState } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { sendToBackground } from "@plasmohq/messaging"
import { useProfileStore } from "../store/profile.ts"

function profileOptionLabel(profile) {
  const name = [profile.firstName, profile.lastName].filter(Boolean).join(" ")
  if (!name || name.toLowerCase() === String(profile.label || "").toLowerCase()) {
    return profile.label || name || "Profile"
  }
  return `${profile.label} — ${name}`
}

export default function ProfilePicker({ disabled = false, onChanged }) {
  const [profiles, setProfiles] = useState([])
  const [selectedId, setSelectedId] = useState("")
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    let cancelled = false
    sendToBackground({ name: "teamProfiles" })
      .then((result) => {
        if (cancelled || !result?.ok) return
        setProfiles(Array.isArray(result.profiles) ? result.profiles : [])
        setSelectedId(result.selectedProfileId || "")
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  async function onSelect(id) {
    if (!id || id === selectedId || disabled || busy) return
    setBusy(true)
    setSelectedId(id)
    try {
      const result = await sendToBackground({
        name: "teamProfiles",
        body: { profileId: id }
      })
      if (!result?.ok) return
      setSelectedId(result.selectedProfileId || id)
      await onChanged?.()
    } finally {
      setBusy(false)
    }
  }

  async function onSignOut() {
    if (busy) return
    setBusy(true)
    try {
      await sendToBackground({ name: "signOutHub" })
      await useProfileStore.getState().initUserStage()
    } finally {
      setBusy(false)
    }
  }

  if (!profiles.length) return null

  return jsxs("div", {
    style: { display: "flex", flexDirection: "column", gap: 8, width: "100%" },
    children: [
  jsxs("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      width: "100%"
    },
    children: [
      jsx("span", {
        style: {
          font: "600 12px/16px Inter, -apple-system, sans-serif",
          color: "#667085"
        },
        children: "Profile"
      }),
      jsx("select", {
        "aria-label": "Profile",
        disabled: disabled || busy || profiles.length < 2,
        value: selectedId,
        onChange: (event) => void onSelect(event.target.value),
        style: {
          width: "100%",
          height: 40,
          border: "1px solid #d0d5dd",
          borderRadius: 10,
          padding: "0 12px",
          background: "#fff",
          color: "#101828",
          font: "500 14px/20px Inter, -apple-system, sans-serif"
        },
        children: profiles.map((profile) =>
          jsx(
            "option",
            {
              value: profile.id,
              children: profileOptionLabel(profile)
            },
            profile.id
          )
        )
      })
    ]
  }),
      jsx("button", {
        type: "button",
        disabled: busy,
        onClick: () => void onSignOut(),
        style: {
          alignSelf: "flex-start",
          border: 0,
          background: "transparent",
          padding: 0,
          color: "#667085",
          font: "500 13px/18px Inter, -apple-system, sans-serif",
          cursor: busy ? "default" : "pointer",
          textDecoration: "underline"
        },
        children: busy ? "Signing out…" : "Sign out"
      })
    ]
  })
}
