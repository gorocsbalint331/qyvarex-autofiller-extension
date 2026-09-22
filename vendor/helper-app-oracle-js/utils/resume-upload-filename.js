/**
 * Parcel module id: ev1lJ
 * Resolved path: utils/resume-upload-filename.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  return e.replace(/\.[^/.]+$/, "")
}

function i(e) {
  let t = e?.trim();
  if (!t) return "";
  let r = t.match(/(\.[^./\\]+)$/);
  return r?.[1] ?? ""
}

function a(e, t) {
  let r = e.trim();
  return r ? t ? `${o(r)}${t}` : r : ""
}

function l({
  selectedResume: e,
  isTailorResume: t,
  tailorResumeName: r = ""
}) {
  let n = e?.resumeName?.trim() ?? "",
    o = e?.resumeNameWithSuffix?.trim() ?? "",
    l = r.trim(),
    s = i(o) || (t ? ".pdf" : "");
  return n ? a(n, s) : t && l ? a(l, s || ".pdf") : o || (s ? `resume${s}` : "resume")
}
n.defineInteropFlag(r), n.export(r, "getResumeUploadFilename", () => l)

