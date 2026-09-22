/**
 * Parcel module id: 5A2Ti
 * Resolved path: components/LinkedinBannerProvider/copy.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "MISSING_JOB_MESSAGE", () => o), n.export(r, "getMatchMessage",
  () => i), n.export(r, "getPoorMatchDescription", () => a);
let o = "Add this job to view your Match Score and tailor your resume.";

function i(e) {
  switch (e) {
    case "Excellent":
      return "Good Match, Continue to Make it Unmissable.";
    case "Fair":
      return "Partial Match, Let's Make it Perfect.";
    default:
      return "Low match to this role"
  }
}

function a(e, t) {
  return {
    emphasis: `${e}/${t}`,
    text: "keywords are present in your resume, let's fix it"
  }
}

