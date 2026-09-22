/**
 * Parcel module id: gJ2PS
 * Resolved path: src/store/resume-autofill-ready.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/shared/constants -> ayCbq  =>  src/contents/shared/constants.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "shouldRefreshResumeBeforeAutofill", () => i);
var o = e("~contents/shared/constants");

function i({
  disableUploadResume: e,
  userLoggedIn: t,
  fromAgent: r,
  agentData: n,
  lastUsedResume: i,
  resumeMap: a,
  resumeCollectionLength: l
}) {
  return !(!t || e || r && (n?.resumeId || n?.tailorId)) && (i ? (i.startsWith(o
    .TAILOR_RESUME_ID_PREFIX), !a[i]) : 0 === l)
}

