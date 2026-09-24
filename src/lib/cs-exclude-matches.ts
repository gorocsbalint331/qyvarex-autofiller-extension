/**
 * Hostnames where bootstrap must no-op even if a CS somehow loads.
 * Keep in sync with the Google / consumer excludes in bootstrap.ts.
 *
 * Lives under src/lib (not contents/) so Plasmo does not register it
 * as its own <all_urls> content script.
 */

export function isNeverApplyHost(hostname: string): boolean {
  const host = hostname.toLowerCase()

  // Entire Google property tree (docs, translate, gmail, search, …)
  if (host === "google.com" || host.endsWith(".google.com")) return true
  if (host === "youtu.be" || host === "youtube.com" || host.endsWith(".youtube.com")) {
    return true
  }

  const suffixes = [
    "facebook.com",
    "instagram.com",
    "twitter.com",
    "x.com",
    "tiktok.com",
    "reddit.com",
    "netflix.com",
    "twitch.tv",
    "discord.com",
    "slack.com",
    "whatsapp.com",
    "spotify.com",
    "office.com",
    "office365.com",
    "sharepoint.com",
    "outlook.live.com",
    "onedrive.live.com",
    "teams.microsoft.com",
    "github.com",
    "stackoverflow.com",
    "stackexchange.com"
  ]

  return suffixes.some(
    (suffix) => host === suffix || host.endsWith(`.${suffix}`)
  )
}
