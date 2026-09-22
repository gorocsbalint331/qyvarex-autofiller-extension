/**
 * Parcel module id: dbT6g
 * Resolved path: src/store/resume-init.js
 * Dependencies:
 *   ../contents/shared/constants -> ayCbq  =>  src/contents/shared/constants.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "resolveInitLastUsedResumeState", () => a);
var o = e("../contents/shared/constants");
let i = (e, t) => e.find(e => e.resumeId === t)?.resumeId,
  a = ({
    isFirstLoad: e,
    isResumeRefresh: t,
    disableUploadResume: r,
    storedLastUsedResume: n,
    previousLastUsedResumeInState: a,
    resumeCollection: l,
    tailorResume: s,
    agentResumeId: u,
    agentTailorId: c
  }) => {
    let d = n;
    d = u || (c ? o.TAILOR_RESUME_ID_PREFIX + c : r ? void 0 : (e || t) && s?.tailorId ? o
      .TAILOR_RESUME_ID_PREFIX + s.tailorId : i(l, a) || i(l, n) || l.find(e => e.primary)
      ?.resumeId);
    let f = !!(d && (e ? d !== n : d !== a)),
      p = d !== n;
    return {
      lastUsedResume: d,
      shouldSyncResumeToAutofill: f,
      shouldPersistLastUsedResume: p
    }
  }

