/**
 * Parcel module id: 1wgrD
 * Resolved path: src/background/update-check.js
 * Dependencies:
 *   ./version-lifecycle -> 8LSMY  =>  src/background/version-lifecycle.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "UPDATE_READY_STORAGE_KEY", () => i), n.export(r,
  "WHATS_NEW_READ_STORAGE_KEY", () => a), n.export(r, "interpretUpdateCheck", () => l), n.export(
  r, "whatsNewReadKey", () => s), n.export(r, "shouldDiscardUpdateReady", () => u), n.export(r,
  "recordUpdateReady", () => c), n.export(r, "markUpdateReadyConsumed", () => d);
var o = e("./version-lifecycle");
let i = "autofillUpdateReadyState",
  a = "autofillWhatsNewReadMap";

function l(e, t, r) {
  return r ? {
    kind: "update_not_available",
    failReason: "runtime_error"
  } : "update_available" === e ? {
    kind: "update_ready",
    version: t?.version ?? null
  } : "throttled" === e ? {
    kind: "update_not_available",
    failReason: "throttled"
  } : {
    kind: "update_not_available",
    failReason: "no_update"
  }
}

function s(e, t) {
  return `${e}::${t}`
}

function u(e, t, r) {
  return !!e && (null !== e.version ? !((0, o.isValidChromeExtensionVersion)(e.version) && (0, o
    .isValidChromeExtensionVersion)(t)) || 0 >= (0, o.compareChromeExtensionVersions)(e.version,
    t) : null !== r && "upgrade" === r.transition && r.recordedAt > e.recordedAt)
}
async function c(e) {
  let t = {
    schemaVersion: 1,
    version: e,
    recordedAt: Date.now()
  };
  await chrome.storage.local.set({
    [i]: t
  })
}
async function d() {
  await chrome.storage.local.remove(i)
}

