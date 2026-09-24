/**
 * Activate entry: boot the full Jobright helper UI + fill engine.
 * Bundled by build-helper.mjs → assets/helper-app.js (IIFE).
 */
import {
  bootstrapJobrightHelperRuntime,
  openJobrightHelperFromExtensionIcon,
} from "./bootstrapJobrightHelperRuntime"

export { bootstrapJobrightHelperRuntime, openJobrightHelperFromExtensionIcon }

const g = globalThis as typeof globalThis & {
  bootstrapJobrightHelperRuntime?: typeof bootstrapJobrightHelperRuntime
  openJobrightHelperFromExtensionIcon?: typeof openJobrightHelperFromExtensionIcon
}

g.bootstrapJobrightHelperRuntime = bootstrapJobrightHelperRuntime
g.openJobrightHelperFromExtensionIcon = openJobrightHelperFromExtensionIcon

void bootstrapJobrightHelperRuntime().catch((error) => {
  console.warn("[jobright] helper bootstrap failed:", error)
})
