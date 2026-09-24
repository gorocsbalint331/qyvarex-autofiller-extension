// @ts-nocheck
/**
 * Oracle Cloud — education raw school/major/degree values.
 */

function o(e) {
  let t = Array.isArray(e) ? e : [e];
  for (let e2 of t) {
    if ("string" != typeof e2) continue;
    let t2 = e2.trim();
    if (t2) return t2;
  }
}
function getOracleEducationRawValues(e, t) {
  return {
    rawSchool: o(e.rawSchool) || o(t?.organization),
    rawMajor: o(e.rawMajor),
    rawDegree: o(e.rawDegree),
  };
}

export { getOracleEducationRawValues };
