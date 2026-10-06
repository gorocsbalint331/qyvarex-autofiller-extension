const STORAGE_KEY = "qx-registered-device"

export type RegisteredDevice = {
  key: string
  label: string
}

function browserLabel() {
  const ua = typeof navigator === "undefined" ? "" : navigator.userAgent || ""
  const os = /Windows/i.test(ua)
    ? "Windows"
    : /Mac OS|Macintosh/i.test(ua)
      ? "Mac"
      : /Linux/i.test(ua)
        ? "Linux"
        : "this computer"
  const browser = /Edg\//.test(ua) ? "Edge" : /Chrome\//.test(ua) ? "Chrome" : "Browser"
  return `${browser} on ${os}`.slice(0, 80)
}

function randomDeviceKey() {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  let binary = ""
  for (const byte of bytes) binary += String.fromCharCode(byte)
  const body = btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "")
  return `qd_${body}`
}

/** Stable secret for this browser profile. Created once and kept across sign-out. */
export async function ensureDevice(): Promise<RegisteredDevice> {
  const stored = await chrome.storage.local.get(STORAGE_KEY)
  const current = stored[STORAGE_KEY] as RegisteredDevice | undefined
  if (current?.key?.startsWith("qd_") && current.label) return current
  const next = { key: randomDeviceKey(), label: browserLabel() }
  await chrome.storage.local.set({ [STORAGE_KEY]: next })
  return next
}
