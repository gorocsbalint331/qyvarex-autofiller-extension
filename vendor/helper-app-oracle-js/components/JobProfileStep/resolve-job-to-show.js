/**
 * Parcel module id: knAUl
 * Resolved path: components/JobProfileStep/resolve-job-to-show.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o({
  currentTabJob: e,
  externalJobInfo: t,
  manualOverrideJobId: r
}) {
  let n = !!r && !!t && e?.jobResult?.jobId === r;
  return n ? t : e ?? t ?? null
}
n.defineInteropFlag(r), n.export(r, "resolveJobToShow", () => o)

