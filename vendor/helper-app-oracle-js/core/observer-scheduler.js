/**
 * Parcel module id: 6ejQS
 * Resolved path: core/observer-scheduler.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o({
  run: e,
  schedule: t,
  cancel: r
}) {
  let n, o = !1;
  return {
    schedule() {
      o || (o = !0, n = t(() => {
        o = !1, n = void 0, e()
      }))
    },
    cancel() {
      o && (o = !1, r(n), n = void 0)
    }
  }
}
n.defineInteropFlag(r), n.export(r, "createSingleFlightScheduler", () => o)

