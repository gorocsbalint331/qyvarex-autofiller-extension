/**
 * Parcel module id: 3Cm0K
 * Resolved path: src/store/resume-name.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  let t = null,
    r = null;
  return n => n ? (n === t && r || (t = n, r = e(n).catch(() => "")), r) : Promise.resolve("")
}
n.defineInteropFlag(r), n.export(r, "createTailorResumeFileNameLoader", () => o), n.export(r,
  "resolveTailorResumeName", () => i);
let i = ({
  userStage: e,
  currentTabJob: t,
  firstName: r,
  lastName: n,
  apiName: o
}) => {
  let i = o?.trim();
  if (i) return i;
  if (!e || !t) return null;
  let a = [r, n, t?.jobResult?.jobTitle].filter(Boolean).join(" ");
  return a || null
}

