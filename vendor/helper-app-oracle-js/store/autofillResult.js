/**
 * Parcel module id: hCUzf
 * Resolved path: store/autofillResult.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   zustand -> ffRFv  =>  zustand.js
 *   ~core/autofill-progress-protocol -> 2aELO  =>  _tilde_core/autofill-progress-protocol.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "useAutofillResultStore", () => a);
var o = e("zustand"),
  i = e("~core/autofill-progress-protocol");
let a = (0, o.create)((e, t) => ({
  isFilling: !1,
  setIsFilling: t => e({
    isFilling: t
  }),
  stopCurrentFilling: () => e(e => ({
    isFilling: !1,
    autoFillResult: e.autoFillResult ? {
      ...e.autoFillResult,
      currentField: null
    } : e.autoFillResult
  })),
  fillingMode: "standard_autofill",
  setFillingMode: t => e({
    fillingMode: t
  }),
  progressTitle: null,
  setProgressTitle: t => e({
    progressTitle: t
  }),
  hasClickedAutoFill: !1,
  setHasClickedAutoFill: t => e({
    hasClickedAutoFill: t
  }),
  autoFillResult: null,
  progressSessionId: null,
  setAutoFillResult: t => e({
    autoFillResult: t,
    progressSessionId: null
  }),
  applyAutoFillProgressMessage: t => e(e => {
    let r = (0, i.applyAutofillProgressMessage)({
      sessionId: e.progressSessionId,
      data: e.autoFillResult
    }, t);
    return r.sessionId === e.progressSessionId && r.data === e.autoFillResult ? e : {
      autoFillResult: r.data,
      progressSessionId: r.sessionId
    }
  })
}))

