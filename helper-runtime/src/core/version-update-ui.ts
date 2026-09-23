// @ts-nocheck
/**
 * Decide which extension version-update UI surface to show.
 */
import * as updateCheck from "../background/update-check.js"
import * as versionLifecycle from "../background/version-lifecycle.js"

export function resolveVersionUiState(state) {
  if (!state.logined || state.autofillStarted) {
    return {
      kind: "hidden"
    }
  }
  if (undefined !== state.updateReadyVersion) {
    return {
      kind: "update_ready_modal"
    }
  }
  let releaseConfig = state.releaseConfig
  return releaseConfig &&
    !state.sessionDismissedNewVersion &&
    versionLifecycle.compareChromeExtensionVersions(
      releaseConfig.version,
      state.localVersion
    ) > 0
    ? {
        kind: "new_version",
        targetVersion: releaseConfig.version
      }
    : "upgrade" === state.lifecycleTransition &&
        releaseConfig &&
        releaseConfig.version === state.localVersion &&
        releaseConfig.hasWhatsNewContent &&
        state.userId &&
        !state.whatsNewReadKeys.has(
          updateCheck.whatsNewReadKey(state.userId, state.localVersion)
        )
      ? {
          kind: "whats_new_entry",
          version: state.localVersion
        }
      : {
          kind: "hidden"
        }
}
