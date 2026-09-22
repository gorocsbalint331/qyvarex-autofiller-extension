/**
 * Parcel module id: i5yOy
 * Resolved path: src/components/resume-init-gate.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "resolveResumeInitializationJobId", () => a);
let o = "__resume-init-without-job-id__",
  i = e => {
    if (null == e) return null;
    let t = String(e).trim();
    return t || null
  },
  a = ({
    resumeTargetJob: e,
    fallbackJobId: t,
    jobContextLoading: r = !1
  }) => r ? null : i(e?.jobResult?.jobId) || i(t) || o

