/**
 * Parcel module id: 9mVDf
 * Resolved path: contents/shared/early-url-normalization.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "buildLifeAtTikTokApplyUrl", () => c), n.export(r,
  "shouldRetainLifeAtTikTokJobDetailJrId", () => d), n.export(r,
  "shouldKeepLifeAtTikTokApplyBridge", () => f), n.export(r,
  "shouldRecoverLifeAtTikTokJobDetailJrId", () => p), n.export(r, "buildLifeAtTikTokRecoveredUrl",
  () => m), n.export(r, "buildNormalizedEarlyUrl", () => h), n.export(r,
  "shouldResolveGoHireDroppedJobIdUrl", () => g), n.export(r, "normalizeEarlyJobrightUrl", () =>
  b);
let o = "jr_id",
  i = "jobs.gohire.io",
  a = /^\/[^/]+\/.+-\d+\/?$/,
  l = "lifeattiktok.com",
  s = /^\/search\/\d+\/?$/;

function u(e) {
  let t = e.hostname.toLowerCase(),
    r = t === l || t.endsWith(`.${l}`);
  return r && s.test(e.pathname)
}

function c(e, t, r) {
  let n, i;
  let a = r.trim();
  if (!a) return null;
  try {
    n = new URL(e), i = new URL(t)
  } catch {
    return null
  }
  let l = /^\/search\/(\d+)\/?$/.exec(n.pathname)?.[1],
    s = /^\/resume\/(\d+)\/apply\/?$/.exec(i.pathname)?.[1];
  return !u(n) || "careers.tiktok.com" !== i.hostname.toLowerCase() || !l || s !== l || i
    .searchParams.has(o) ? null : (i.searchParams.set(o, a), i.toString())
}

function d(e) {
  let t;
  try {
    t = new URL(e)
  } catch {
    return !1
  }
  return u(t) && !!t.searchParams.get(o)?.trim()
}

function f(e, t) {
  let r, n;
  try {
    r = new URL(e), n = new URL(t)
  } catch {
    return !1
  }
  let i = r.searchParams.get(o)?.trim();
  return !!i && r.hostname.toLowerCase() === n.hostname.toLowerCase() && r.pathname === n
    .pathname && n.searchParams.get(o)?.trim() === i && u(n)
}

function p(e) {
  let t;
  try {
    t = new URL(e)
  } catch {
    return !1
  }
  return u(t) && !t.searchParams.has(o)
}

function m(e, t) {
  let r = t.trim();
  if (!r || !p(e)) return null;
  let n = new URL(e);
  return n.searchParams.set(o, r), n.toString()
}

function h(e) {
  let t;
  try {
    t = new URL(e)
  } catch {
    return null
  }
  if (t.hostname.toLowerCase() !== i || !t.searchParams.has(o) || !t.pathname.endsWith("/") || !a
    .test(t.pathname)) return null;
  t.pathname = t.pathname.replace(/\/+$/, "");
  let r = t.toString();
  return r === e ? null : r
}

function g(e) {
  let t;
  try {
    t = new URL(e)
  } catch {
    return !1
  }
  return t.hostname.toLowerCase() === i && !t.searchParams.has(o) && a.test(t.pathname)
}

function b(e = window) {
  let t = h(e.location.href);
  return !!t && (e.location.replace(t), !0)
}

