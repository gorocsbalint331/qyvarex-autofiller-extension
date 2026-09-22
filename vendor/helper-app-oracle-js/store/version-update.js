/**
 * Parcel module id: jktea
 * Resolved path: store/version-update.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   zustand -> ffRFv  =>  zustand.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "useVersionUpdateStore", () => i);
var o = e("zustand");
let i = (0, o.create)(e => ({
  phase: "idle",
  setPhase: t => e({
    phase: t
  }),
  dismissedNewVersion: !1,
  setDismissedNewVersion: t => e({
    dismissedNewVersion: t
  }),
  updateCheckSuppressed: !1,
  setUpdateCheckSuppressed: t => e({
    updateCheckSuppressed: t
  }),
  dismissedReadyModal: !1,
  setDismissedReadyModal: t => e({
    dismissedReadyModal: t
  }),
  openWhatsNewSheet: !1,
  setOpenWhatsNewSheet: t => e({
    openWhatsNewSheet: t
  }),
  sessionReadKeys: [],
  addSessionReadKey: t => e(e => e.sessionReadKeys.includes(t) ? e : {
    sessionReadKeys: [...e.sessionReadKeys, t]
  }),
  exposedNewVersion: !1,
  setExposedNewVersion: t => e({
    exposedNewVersion: t
  }),
  exposedWhatsNewEntry: !1,
  setExposedWhatsNewEntry: t => e({
    exposedWhatsNewEntry: t
  }),
  appliedEventReported: !1,
  setAppliedEventReported: t => e({
    appliedEventReported: t
  }),
  lastUpdateFailReason: null,
  setLastUpdateFailReason: t => e({
    lastUpdateFailReason: t
  })
}))

