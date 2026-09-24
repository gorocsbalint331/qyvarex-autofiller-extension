import { useEffect, useState } from "react"
import logoMark from "data-base64:~assets/logo-mark.png"

import {
  ensureSelectedProfile,
  getTeamSettings,
  listProfiles,
  saveTeamSettings,
  signInWithPassword,
  signOut,
  verifyTeamConnection
} from "~api/team-client"
import type { ProfileSummary, TeamSettings } from "~api/team-types"

function OptionsPage() {
  const [settings, setSettings] = useState<TeamSettings | null>(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [profiles, setProfiles] = useState<ProfileSummary[]>([])
  const [status, setStatus] = useState("")
  const [error, setError] = useState("")
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    void (async () => {
      const s = await getTeamSettings()
      setSettings(s)
      if (s.userEmail) setEmail(s.userEmail)
      if (s.apiToken) {
        const conn = await verifyTeamConnection()
        if (conn.ok) {
          setStatus(`Signed in as ${conn.name} (${conn.email})`)
          const list = await listProfiles()
          setProfiles(list)
          if ((await ensureSelectedProfile(list)) !== s.selectedProfileId) {
            setSettings(await getTeamSettings())
          }
        }
      }
    })()
  }, [])

  async function onSignIn(e: React.FormEvent) {
    e.preventDefault()
    if (!settings) return
    setBusy(true)
    setError("")
    setStatus("")
    try {
      await saveTeamSettings({ siteUrl: settings.siteUrl })
      const result = await signInWithPassword({
        siteUrl: settings.siteUrl,
        email,
        password
      })
      if (!result.ok) {
        setError(result.error || "Sign-in failed")
        setProfiles([])
        return
      }
      const next = await getTeamSettings()
      setSettings(next)
      setPassword("")
      const list = await listProfiles()
      setProfiles(list)
      setStatus(
        `Signed in as ${result.user?.name} (${result.user?.email}) · ${list.length} profiles`
      )
      if ((await ensureSelectedProfile(list)) !== next.selectedProfileId) {
        setSettings(await getTeamSettings())
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign-in failed")
    } finally {
      setBusy(false)
    }
  }

  async function onSignOut() {
    setBusy(true)
    setError("")
    try {
      await signOut()
      const next = await getTeamSettings()
      setSettings(next)
      setProfiles([])
      setPassword("")
      setStatus("Signed out")
    } finally {
      setBusy(false)
    }
  }

  async function selectProfile(id: string) {
    const next = await saveTeamSettings({ selectedProfileId: id })
    setSettings(next)
    setStatus("Active profile updated")
  }

  if (!settings) {
    return <div style={styles.page}>Loading…</div>
  }

  const signedIn = Boolean(settings.apiToken)

  return (
    <div style={styles.page}>
      <div style={styles.brand}>
        <img
          src={logoMark}
          alt="Qyvarex"
          width={48}
          height={48}
          style={{ display: "block" }}
        />
        <div>
          <h1 style={styles.h1}>Qyvarex Autofill</h1>
          <p style={{ ...styles.muted, margin: 0 }}>
            Sign in with your Team Hub account, then choose which profile to use
            for autofill.
          </p>
        </div>
      </div>

      <label style={styles.label}>
        Team site URL
        <input
          style={styles.input}
          value={settings.siteUrl}
          onChange={(e) =>
            setSettings({ ...settings, siteUrl: e.target.value.trim() })
          }
          placeholder="https://jobright-team-site.vercel.app"
          disabled={signedIn}
        />
      </label>

      {signedIn ? (
        <div style={styles.card}>
          <p style={{ margin: "0 0 12px", fontSize: 14 }}>
            Signed in as{" "}
            <strong>{settings.userName || settings.userEmail || "member"}</strong>
            {settings.userEmail ? (
              <span style={styles.muted}> · {settings.userEmail}</span>
            ) : null}
          </p>
          <button
            style={styles.btnSecondary}
            disabled={busy}
            onClick={() => void onSignOut()}>
            Sign out
          </button>
          <p style={{ ...styles.muted, margin: "12px 0 0" }}>
            Manage profiles &amp; resumes on{" "}
            <a href={settings.siteUrl} target="_blank" rel="noreferrer">
              {settings.siteUrl.replace(/^https?:\/\//, "")}
            </a>
          </p>
        </div>
      ) : (
        <form onSubmit={(e) => void onSignIn(e)}>
          <label style={styles.label}>
            Email
            <input
              style={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              autoComplete="username"
              required
            />
          </label>
          <label style={styles.label}>
            Password
            <input
              style={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </label>
          <button style={styles.btn} disabled={busy} type="submit">
            {busy ? "Signing in…" : "Sign in"}
          </button>
          <p style={{ ...styles.muted, marginTop: 12 }}>
            No account yet?{" "}
            <a href={settings.siteUrl} target="_blank" rel="noreferrer">
              Create one on the hub
            </a>
          </p>
        </form>
      )}

      {error ? <p style={styles.error}>{error}</p> : null}
      {status ? <p style={styles.ok}>{status}</p> : null}

      {profiles.length > 0 ? (
        <div style={{ marginTop: 28 }}>
          <h2 style={styles.h2}>Select profile for autofill</h2>
          <ul style={styles.list}>
            {profiles.map((p) => {
              const active = settings.selectedProfileId === p.id
              return (
                <li key={p.id} style={styles.li}>
                  <div>
                    <strong>{p.label}</strong>
                    <div style={styles.muted}>
                      {[p.firstName, p.lastName].filter(Boolean).join(" ") ||
                        "No name"}{" "}
                      · {p.resumeCount} resume{p.resumeCount === 1 ? "" : "s"}
                    </div>
                  </div>
                  <button
                    style={{
                      ...styles.btnSecondary,
                      ...(active ? styles.btnActive : {})
                    }}
                    onClick={() => void selectProfile(p.id)}>
                    {active ? "Active" : "Use"}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    maxWidth: 560,
    margin: "40px auto",
    padding: 24,
    fontFamily: "Segoe UI, system-ui, sans-serif",
    color: "#102a43"
  },
  brand: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
    marginBottom: 20
  },
  card: {
    padding: 16,
    borderRadius: 10,
    border: "1px solid #d9e2ec",
    background: "#f8fafc",
    marginBottom: 8
  },
  h1: { margin: "0 0 8px", fontSize: 22 },
  h2: { margin: "0 0 12px", fontSize: 16 },
  muted: { color: "#627d98", fontSize: 13, margin: "0 0 16px" },
  label: {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 14
  },
  input: {
    display: "block",
    width: "100%",
    marginTop: 6,
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #bcccdc",
    font: "inherit",
    boxSizing: "border-box"
  },
  btn: {
    padding: "10px 16px",
    border: 0,
    borderRadius: 8,
    background: "#0b6e4f",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer"
  },
  btnSecondary: {
    padding: "8px 12px",
    border: "1px solid #bcccdc",
    borderRadius: 8,
    background: "#fff",
    cursor: "pointer",
    fontWeight: 600
  },
  btnActive: {
    background: "#0b6e4f",
    color: "#fff",
    borderColor: "#0b6e4f"
  },
  list: { listStyle: "none", padding: 0, margin: 0 },
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    padding: "12px 0",
    borderBottom: "1px solid #d9e2ec"
  },
  error: { color: "#9b1c1c", fontSize: 13 },
  ok: { color: "#0b6e4f", fontSize: 13 }
}

export default OptionsPage
