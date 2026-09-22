/**
 * Parcel module id: 2rFEx
 * Resolved path: src/api/resume-helpers.js
 * Dependencies:
 *   ./env-resolver -> 45ABC  =>  src/api/env-resolver.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "extractCoverLetterInfo", () => a), n.export(r,
    "resolveFileExtensionFromDisposition", () => l), n.export(r, "buildCurrentCoverLetterUrl", () =>
    s), n.export(r, "extractAgentCoverLetterId", () => c), n.export(r,
    "buildAgentCoverLetterViewUrl", () => d), n.export(r, "convertPdfBlobToWordFile", () => h), n
  .export(r, "downloadOrionCoverLetterPdf", () => g), n.export(r,
    "shouldUseLegacyAgentCoverLetterDownload", () => b);
var o = e("./env-resolver");

function i(e) {
  return !e || "object" != typeof e || Array.isArray(e) ? null : e
}

function a(e) {
  let t = i(e),
    r = i(t?.coverLetter),
    n = r ?? t,
    o = n?.coverLetterId,
    a = "string" == typeof n?.coverLetterName ? n.coverLetterName : "string" == typeof n?.name ? n
    .name : "",
    l = "string" == typeof n?.markdown ? n.markdown : "";
  return "string" != typeof o || 0 === o.length ? null : {
    coverLetterId: o,
    coverLetterName: a,
    markdown: l
  }
}

function l(e, t = "pdf") {
  if (!e || !e.includes("filename=")) return t;
  let r = e.match(/filename="?([^"]+)"?/)?.[1],
    n = r?.split(".").pop()?.toLowerCase();
  return n || t
}

function s(e, t) {
  let r = new URLSearchParams({
    jobId: t
  });
  return `${e}/swan/orion/get-cover-letter?${r.toString()}`
}

function u(e) {
  return e.toLowerCase().replace(/[^a-z0-9]/g, "")
}

function c(e) {
  let t = new URL(e).searchParams;
  for (let [e, r] of t.entries())
    if (u(e).includes("agentcoverletterid")) {
      let e = r.trim();
      return e || null
    } return null
}

function d(e, t) {
  let r = new URLSearchParams({
    coverLetterId: t
  });
  return `${e}/swan/agent/cover-letter/view?${r.toString()}`
}

function f(e, t) {
  let r = t.toLowerCase().endsWith(".pdf") ? t : `${t.replace(/\.[^/.]+$/,"")}.pdf`;
  return new File([e], r, {
    type: e.type || "application/pdf",
    lastModified: Date.now()
  })
}

function p(e, t) {
  let r = new FormData,
    n = f(e, t);
  return r.append("file", n, n.name), r
}
async function m(e, t, r) {
  return fetch(e, {
    method: "POST",
    body: p(t, r),
    credentials: "include"
  })
}
async function h(e, t) {
  try {
    let r = await m(`${o.API_DOMAIN}/foxit/pdf-to-docx`, e, t);
    if (r.ok) return r
  } catch (e) {}
  let r = await m(`${o.API_DOMAIN}/swan/resume/pdf-to-doc`, e, t);
  if (!r.ok) throw Error("Failed to convert pdf to word");
  return r
}
async function g(e) {
  let t = await fetch(`${o.HOST_DOMAIN}/api/cover-letter/orion/download`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      markdown: e
    }),
    credentials: "include"
  });
  if (!t.ok) throw Error("Failed to download orion cover letter pdf");
  return t
}

function b(e) {
  return !!c(e)
}

