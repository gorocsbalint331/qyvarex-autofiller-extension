/**
 * Parcel module id: bU3EA
 * Resolved path: store/inventory-match-job.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   zustand -> ffRFv  =>  zustand.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "useInventoryMatchJobStore", () => l);
var o = e("zustand");
let i = e => {
    if (null == e) return null;
    let t = String(e).trim();
    return t || null
  },
  a = {
    jobInfo: null
  },
  l = (0, o.create)(e => ({
    ...a,
    setInventoryMatchJob: ({
      jobInfo: t = null
    }) => {
      i(t?.jobResult?.jobId) && e({
        jobInfo: t
      })
    },
    clearInventoryMatchJob: () => {
      e({
        ...a
      })
    },
    resetInventoryMatchJob: () => {
      e(a)
    }
  }))

