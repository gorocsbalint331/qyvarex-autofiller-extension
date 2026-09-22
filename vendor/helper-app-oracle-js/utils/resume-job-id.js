/**
 * Parcel module id: 67Z8T
 * Resolved path: utils/resume-job-id.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "resolveResumeJobId", () => i);
let o = e => {
    if (null == e) return null;
    let t = String(e).trim();
    return t || null
  },
  i = ({
    currentTabJob: e,
    fallbackJobId: t,
    currentJobContextId: r
  }) => o(t) || o(e?.jobResult?.jobId) || o(r)

