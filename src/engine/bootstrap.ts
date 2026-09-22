/**
 * TypeScript fill-engine entry (documentation + activate contract).
 *
 * Injected runtime (`assets/helper-app.js`, HELPER_RUNTIME=ts) is linked from
 * `scripts/engine-runtime-entry.js` → ported `src/contents/crawler/factory.js`
 * → site class `fillForm()`.
 *
 * All ATS adapters: `src/contents/sites/*.js` (from vendor via
 * `node scripts/port-vendor-helper-to-src.mjs`).
 *
 * Clean-TS native fill (popup): `~contents/sites/native-filler`.
 */

import { PORTED_ATS_SITES } from "~contents/sites/ported-sites"

export { PORTED_ATS_SITES }

export type EngineBootstrapResult = {
  siteName: string
  ok: boolean
  detail?: string
}

/**
 * Prefer the injected Parcel-linked bootstrap when present (Activate path).
 * Otherwise log that the helper bundle must be injected first.
 */
export async function bootstrapJobrightHelperRuntime(): Promise<void> {
  const g = globalThis as unknown as {
    bootstrapJobrightHelperRuntime?: () => Promise<void>
    __qyvarexEngineHelperLoaded?: boolean
  }
  // Injected IIFE assigns a different function onto globalThis.
  const injected = Object.getOwnPropertyDescriptor(
    globalThis,
    "bootstrapJobrightHelperRuntime"
  )?.value
  if (typeof injected === "function" && injected !== bootstrapJobrightHelperRuntime) {
    await injected()
    return
  }
  console.warn(
    "[qyvarex-engine-ts] helper bundle not injected. " +
      `Expected assets/helper-app.js (HELPER_RUNTIME=ts). Ported ATS: ${PORTED_ATS_SITES.length}`
  )
}

export const openJobrightHelperFromExtensionIcon = bootstrapJobrightHelperRuntime
