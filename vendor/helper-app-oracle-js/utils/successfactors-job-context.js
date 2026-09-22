/**
 * Parcel module id: 6uxLs
 * Resolved path: utils/successfactors-job-context.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "SUCCESSFACTORS_STICKY_JOB_ID_KEY", () => o), n.export(r,
  "resolveSuccessFactorsStickyJobId", () => l);
let o = "jobright_successfactors_current_job_id",
  i = e => {
    let t = e?.trim();
    return t || null
  },
  a = () => {
    try {
      return "undefined" == typeof sessionStorage ? null : sessionStorage
    } catch {
      return null
    }
  };

function l(e, t) {
  let r = i(e);
  if ("successfactors" !== t) return r;
  let n = a();
  return r ? (n?.setItem(o, r), r) : i(n?.getItem(o))
}

