// @ts-nocheck
/**
 * Build a Jobright login URL for a given origin / base URL.
 */

/** Team hub entry (home / login). */
export function buildJobrightLoginUrl(baseUrl) {
  try {
    return new URL("/", baseUrl).toString()
  } catch {
    return String(baseUrl || "").replace(/\/+$/, "") + "/"
  }
}
