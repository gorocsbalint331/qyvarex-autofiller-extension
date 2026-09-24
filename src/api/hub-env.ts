/**
 * Environment / host config for the team fork.
 * Override via .env (PLASMO_PUBLIC_*).
 *
 * Autofill profile data comes from the Team Autofill Hub (team-site),
 * not Jobright cloud — see ~api/team-client and extension Options.
 */

const PROD_HUB = "https://jobright-team-site.vercel.app"
const DEV_HUB = "http://localhost:3210"

export const TEAM_SITE_URL =
  process.env.PLASMO_PUBLIC_TEAM_SITE_URL ?? PROD_HUB

/** Hub URL for the current build: localhost in plasmo dev, prod URL in builds. */
export function getHubUrl() {
  if (process.env.NODE_ENV === "development") return DEV_HUB
  return TEAM_SITE_URL || PROD_HUB
}

/** @deprecated Prefer TEAM_SITE_URL — kept for older stubs */
export const API_DOMAIN =
  process.env.PLASMO_PUBLIC_API_DOMAIN ?? TEAM_SITE_URL

export const HOST_DOMAIN =
  process.env.PLASMO_PUBLIC_HOST_DOMAIN ?? TEAM_SITE_URL

export const COOKIE_DOMAIN =
  process.env.PLASMO_PUBLIC_COOKIE_DOMAIN ?? "localhost"

/** Team hub host only — do NOT include localhost (would activate on every local app). */
export const agentDomains = ["jobright-team-site.vercel.app"] as const
