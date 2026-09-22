/**
 * Parcel module id: 7Ks3y
 * Resolved path: store/cover-letter-state.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  return !!e?.coverLetterId
}

function i(e, t) {
  let r = e?.trim(),
    n = t?.trim();
  return r && n ? `Cover_Letter_${r}_${n}` : "Cover Letter"
}

function a(e) {
  return e.replace(/\.[^/.]+$/, "")
}

function l(e, t) {
  let r = e?.trim() || t?.trim() || "Cover Letter";
  return a(r)
}

function s(e) {
  let t = e?.coverLetterId?.trim(),
    r = e?.jobId?.trim();
  return t && r ? {
    coverLetterId: t,
    jobId: r
  } : null
}

function u(e, t) {
  let r = t?.trim();
  if (e && r && e.jobId === r) return e.coverLetterId
}

function c({
  useLegacyDownload: e,
  agentCoverLetter: t = null,
  currentJobCoverLetter: r = null
}) {
  let n = o(t) ? t : o(r) ? r : null;
  return n?.coverLetterId ? {
    coverLetterId: n.coverLetterId,
    markdown: e ? "" : r?.markdown?.trim() || n.markdown?.trim() || "",
    useLegacyDownload: e
  } : null
}

function d({
  detectionStatus: e,
  agentCoverLetter: t = null,
  currentJobCoverLetter: r = null
}) {
  let n = o(t) ? t : o(r) ? r : null,
    i = !!n?.coverLetterId,
    a = "" !== e || i;
  return a ? {
    showModule: a,
    hasExistingCoverLetter: i,
    state: i ? "existing" : "missing",
    activeCoverLetter: n
  } : {
    showModule: a,
    hasExistingCoverLetter: i,
    state: "hidden",
    activeCoverLetter: n
  }
}
n.defineInteropFlag(r), n.export(r, "hasValidCoverLetter", () => o), n.export(r,
    "buildDefaultCoverLetterName", () => i), n.export(r, "getCoverLetterEditableName", () => a), n
  .export(r, "getCoverLetterDisplayName", () => l), n.export(r, "buildEditWithAiCoverLetterSeed",
  () => s), n.export(r, "resolveEditWithAiCoverLetterSeedId", () => u), n.export(r,
    "resolveCoverLetterDownloadRequest", () => c), n.export(r, "resolveCoverLetterState", () => d)

