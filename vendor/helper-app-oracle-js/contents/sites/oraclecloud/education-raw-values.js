/**
 * Parcel module id: lJw3h
 * Resolved path: contents/sites/oraclecloud/education-raw-values.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  let t = Array.isArray(e) ? e : [e];
  for (let e of t) {
    if ("string" != typeof e) continue;
    let t = e.trim();
    if (t) return t
  }
}

function i(e, t) {
  return {
    rawSchool: o(e.rawSchool) || o(t?.organization),
    rawMajor: o(e.rawMajor),
    rawDegree: o(e.rawDegree)
  }
}
n.defineInteropFlag(r), n.export(r, "getOracleEducationRawValues", () => i)

