/**
 * Parcel module id: cAdEa
 * Resolved path: src/utils/current-job-id.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~store/externalJob -> 1YpU3  =>  src/store/externalJob.js
 *   ~store/inventory-match-job -> bU3EA  =>  src/store/inventory-match-job.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/job-id -> klnOn  =>  src/utils/job-id.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "resolveCurrentJobId", () => c);
var o = e("~store/externalJob"),
  i = e("~store/inventory-match-job"),
  a = e("~store/url"),
  l = e("~utils/job-id");
let s = e => {
    if (null == e) return null;
    let t = String(e).trim();
    return t || null
  },
  u = () => "undefined" == typeof window ? null : window.location.href || null,
  c = ({
    explicitJobId: e,
    pageUrl: t
  } = {}) => {
    let r = t || u(),
      n = (0, a.useUrlStore).getState().currentTabUrl,
      c = (0, o.useExternalJobStore).getState(),
      d = (0, i.useInventoryMatchJobStore).getState();
    return (0, l.extractJobIdFromUrl)(r) || (0, l.extractJobIdFromUrl)(n) || s(e) || s(d.jobInfo
      ?.jobResult?.jobId) || s(c.jobInfo?.jobResult?.jobId) || s(c.jobId)
  }

