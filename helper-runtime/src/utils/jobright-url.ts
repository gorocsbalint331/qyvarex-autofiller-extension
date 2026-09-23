// @ts-nocheck
/**
 * Build a Jobright login URL for a given origin / base URL.
 */

export function buildJobrightLoginUrl(baseUrl) {
  const url = new URL("/", baseUrl)
  url.searchParams.set("login", "1")
  return url.toString()
}
