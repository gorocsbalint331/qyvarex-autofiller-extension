/**
 * Parcel module id: klnOn
 * Resolved path: utils/job-id.js (oracle restore)
 * Dependencies:
 *   ../contents/shared/constants -> ayCbq  =>  _tilde_contents/shared/constants.js
 *   ../core/utils -> aTDh5  =>  _tilde_core/utils.js
 *   ./atsDetection -> lIDGj  =>  atsDetection.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "JOB_ID_QUERY_KEY", () => l), n.export(r, "extractJobIdFromUrl",
  () => b), n.export(r, "setJobIdInUrl", () => y), n.export(r, "resolveTailorSourceResumeId",
() => v), n.export(r, "buildJobrightTailorUrl", () => w), n.export(r, "safeSetJobIdInUrl", () =>
  A), n.export(r, "extractTrustedJobIdFromReferrer", () => k), n.export(r,
  "extractTrustedJobIdFromNestedUrlParams", () => T);
var o = e("../contents/shared/constants"),
  i = e("../core/utils"),
  a = e("./atsDetection");
let l = "jr_id",
  s = "resume_id",
  u = ["linkedin.com", "jobright.ai"],
  c = [
    ["joinbytedance.com", "jobs.bytedance.com"],
    ["hrmdirect.com", "clearcompany.com"]
  ],
  d = /^\/.+\/JobBoard\/[^/]+\/(?:Account\/Register|OpportunityApply)(?:\/|$)/,
  f = /^\/careers\/[^/]+\/jobs\/[^/]+\/apply\/?$/,
  p = /^\/[^/]+\/resume\/[^/]+\/apply\/?$/,
  m = [{
    domain: "clearcompany.com"
  }, {
    domain: "careers-page.com"
  }, {
    domain: "jobscore.com",
    pathPattern: /^\/apply_flow\//
  }, {
    domain: "ultipro.com",
    pathPattern: d
  }, {
    domain: "ultipro.ca",
    pathPattern: d
  }, {
    domain: "rec.pro.ukg.net",
    pathPattern: d
  }, {
    domain: "catsone.com",
    pathPattern: f
  }, {
    domain: "tiktokusds.com",
    pathPattern: p
  }],
  h = [{
    domain: "ultipro.com",
    pathPattern: d
  }, {
    domain: "ultipro.ca",
    pathPattern: d
  }, {
    domain: "rec.pro.ukg.net",
    pathPattern: d
  }],
  g = ["cancelUrl", "redirectUrl"];

function b(e) {
  if (!e) return null;
  try {
    let t = new URL(e),
      r = t.searchParams.get(l);
    return r?.trim() || null
  } catch {
    return null
  }
}

function y(e, t) {
  let r = new URL(e);
  return r.searchParams.set(l, t), r.toString()
}

function v({
  disableUploadResume: e,
  lastUsedResume: t,
  resumeCollection: r
}) {
  if (e || !t || t.startsWith(o.TAILOR_RESUME_ID_PREFIX)) return;
  let n = r.find(e => e.resumeId === t),
    i = n?.resumeId?.trim();
  if (!(!i || n?.primary)) return i
}

function w(e, t, r = {}) {
  let n = new URL(`/jobs/info/${t}`, e),
    o = r.resumeId?.trim();
  return n.searchParams.set("plugin_tailor", "1"), o && n.searchParams.set(s, o), y(n.toString(), t)
}

function S(e) {
  return (0, i.matchesAnyDomain)(e.toLowerCase(), u)
}

function E(e, t) {
  return c.some(r => (0, i.matchesAnyDomain)(e, r) && (0, i.matchesAnyDomain)(t, r))
}

function x(e, t, r) {
  let n = e.toLowerCase(),
    o = t.toLowerCase();
  return (0, i.isDomainMatch)(n, o) || (0, i.isDomainMatch)(o, n) || E(n, o) || null !== (0, a
    .getInventoryMatchSourceByUrl)(r)
}

function C(e, t) {
  let r = e.toLowerCase(),
    n = t.toLowerCase();
  return (0, i.isDomainMatch)(r, n) || (0, i.isDomainMatch)(n, r) || E(r, n)
}

function A(e, t, r) {
  let n;
  if (!t || !e || e.startsWith("#")) return null;
  try {
    n = new URL(e)
  } catch {
    return null
  }
  return !["http:", "https:"].includes(n.protocol) || n.searchParams.has(l) || S(n.hostname) || !x(n
    .hostname, r, n.href) ? null : (n.searchParams.set(l, t), n.toString())
}

function k(e, t, r = "") {
  let n;
  if (!F(t, r) || !e) return null;
  try {
    n = new URL(e)
  } catch {
    return null
  }
  if (!["http:", "https:"].includes(n.protocol) || S(n.hostname) || !x(n.hostname, t, n.href))
    return null;
  let o = n.searchParams.get(l);
  return o?.trim() || null
}

function T(e, t, r = "") {
  let n;
  if (!I(h, t, r) || !e) return null;
  try {
    n = new URL(e)
  } catch {
    return null
  }
  for (let e of g)
    for (let r of n.searchParams.getAll(e)) {
      let e;
      if (!r) continue;
      try {
        e = new URL(r, n.toString())
      } catch {
        continue
      }
      if (!["http:", "https:"].includes(e.protocol) || S(e.hostname) || !C(e.hostname, t)) continue;
      let o = e.searchParams.get(l);
      if (o?.trim()) return o.trim()
    }
  return null
}

function F(e, t) {
  return I(m, e, t)
}

function I(e, t, r) {
  let n = t.toLowerCase();
  return e.find(e => (0, i.isDomainMatch)(n, e.domain) && (!e.pathPattern || e.pathPattern.test(
    r))) ?? null
}

