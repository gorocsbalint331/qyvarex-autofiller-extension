/**
 * Parcel module id: 99dYo
 * Resolved path: src/contents/sites/ashby/canonical-search.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "extractAshbyTenant", () => i), n.export(r,
    "clearAshbyCanonicalSchoolCache", () => l), n.export(r, "resolveAshbyCanonicalSchool", () => f),
  n.export(r, "prefetchAshbySchoolCanonicalNames", () => m);
let o = `query ApiSearchSchoolByCanonicalName($name: String!, $organizationHostedJobsPageName: String!) {
  result: searchCanonicalSchools(name: $name, organizationHostedJobsPageName: $organizationHostedJobsPageName) {
    id
    name
    domain
    country
    __typename
  }
}`;

function i(e = window.location.href) {
  try {
    let t = new URL(e);
    if (!t.hostname.endsWith("ashbyhq.com")) return "";
    return t.pathname.split("/").filter(Boolean)[0] ?? ""
  } catch {
    return ""
  }
}
let a = new Map;

function l() {
  a.clear()
}
async function s(e, t) {
  if (!e || !t) return [];
  try {
    let r = await fetch("/api/non-user-graphql?op=ApiSearchSchoolByCanonicalName", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        operationName: "ApiSearchSchoolByCanonicalName",
        variables: {
          name: e,
          organizationHostedJobsPageName: t
        },
        query: o
      })
    });
    if (!r.ok) return console.warn("[Ashby canonical-search] non-200", r.status), [];
    let n = await r.json(),
      i = n?.data?.result;
    return Array.isArray(i) ? i : []
  } catch (e) {
    return console.warn("[Ashby canonical-search] failed", e), []
  }
}

function u(e) {
  return String(e ?? "").normalize("NFKC").toLowerCase().replace(/^the\s+/, "").replace(
    /[^\p{L}\p{N}\s]+/gu, " ").replace(/\s+/g, " ").trim()
}

function c(e) {
  return u(e).split(" ").filter(Boolean)
}

function d(e, t) {
  if (0 === e.length) return null;
  let r = u(t);
  if (!r) return null;
  let n = e.find(e => u(e.name) === r);
  if (n) return n;
  let o = c(t);
  if (0 === o.length) return null;
  if (1 === o.length) {
    let t = o[0];
    return e.find(e => c(e.name).includes(t)) ?? null
  }
  let i = Math.max(o.length - 1, 2);
  return e.find(e => {
    let t = c(e.name),
      r = 0;
    for (let e of t)
      if (o.includes(e) && r++, r >= i) return !0;
    return !1
  }) ?? null
}

function f(e, t = i()) {
  if (!e || !t) return Promise.resolve(null);
  let r = String(e).trim();
  if (!r) return Promise.resolve(null);
  let n = `${t}|${u(r)}`,
    o = a.get(n);
  if (o) return o;
  let l = p(r, t);
  return a.set(n, l), l
}
async function p(e, t) {
  let r = await s(e, t),
    n = d(r, e);
  if (n) return n.name;
  if (r.length > 0) return null;
  let o = c(e).slice(0, 4);
  if (o.length < 2) return null;
  let i = o.join(" ");
  if (i === u(e)) return null;
  let a = await s(i, t);
  return d(a, e)?.name ?? null
}

function m(e, t = i()) {
  if (t && Array.isArray(e))
    for (let r of e) {
      if (!r || "object" != typeof r) continue;
      let e = g(r);
      e && f(e, t).catch(() => null)
    }
}

function h(e) {
  if ("string" == typeof e && e.trim()) return e.trim();
  if (Array.isArray(e))
    for (let t of e) {
      let e = h(t);
      if (e) return e
    }
  return ""
}

function g(e) {
  for (let t of [e.rawSchool, e["School original answer"], e.School, e.school]) {
    let e = h(t);
    if (e) return e
  }
  return ""
}

