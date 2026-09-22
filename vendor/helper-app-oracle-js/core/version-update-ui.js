/**
 * Parcel module id: 2DXqr
 * Resolved path: core/version-update-ui.js (oracle restore)
 * Dependencies:
 *   ../background/update-check -> 1wgrD  =>  _tilde_background/update-check.js
 *   ../background/version-lifecycle -> 8LSMY  =>  _dotdot_/background/version-lifecycle.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "resolveVersionUiState", () => a);
var o = e("../background/update-check"),
  i = e("../background/version-lifecycle");

function a(e) {
  if (!e.logined || e.autofillStarted) return {
    kind: "hidden"
  };
  if (void 0 !== e.updateReadyVersion) return {
    kind: "update_ready_modal"
  };
  let t = e.releaseConfig;
  return t && !e.sessionDismissedNewVersion && (0, i.compareChromeExtensionVersions)(t.version, e
      .localVersion) > 0 ? {
      kind: "new_version",
      targetVersion: t.version
    } : "upgrade" === e.lifecycleTransition && t && t.version === e.localVersion && t
    .hasWhatsNewContent && e.userId && !e.whatsNewReadKeys.has((0, o.whatsNewReadKey)(e.userId, e
      .localVersion)) ? {
      kind: "whats_new_entry",
      version: e.localVersion
    } : {
      kind: "hidden"
    }
}

