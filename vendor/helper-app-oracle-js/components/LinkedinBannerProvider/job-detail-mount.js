/**
 * Parcel module id: 1dQk6
 * Resolved path: components/LinkedinBannerProvider/job-detail-mount.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "BANNER_MOUNT_ID", () => o), n.export(r,
  "findLinkedInJobDetailInsertionTarget", () => S), n.export(r,
  "ensureLinkedInJobDetailBannerMount", () => x), n.export(r,
  "ensureLinkedInPublicJobDetailBannerMount", () => A), n.export(r,
  "ensureLinkedInListBannerMount", () => k), n.export(r, "shouldResolveLinkedInBannerMount", () =>
  T);
let o = "jobright-linkedin-banner-mount",
  i = "h1, h2, h3, [role='heading']",
  a = "main, .scaffold-layout__main, [class*='jobs-details']",
  l = '[data-testid="lazy-column"]',
  s = '[componentkey^="JobDetails_AboutTheJob"]',
  u = "article, .jobs-description, [class*='jobs-description']",
  c = "JobDetails_ManageJobBanner",
  d =
  'a[aria-label*="Apply"], button[aria-label*="Apply"], button[aria-label*="Save"], a[href*="/jobs/view/"]',
  f = "section.top-card-layout",
  p = 'button[data-modal="job-details-topcard-apply-modal"]';

function m(e) {
  return e?.replace(/\s+/g, " ").trim().toLowerCase() ?? ""
}

function h(e) {
  let t = m(e.textContent);
  return g(e) && t.includes("simplify") && t.includes("resume match")
}

function g(e) {
  return e.getClientRects().length > 0
}

function b(e) {
  let t = e.closest(s);
  if (t) return g(t) ? t : null;
  let r = e.closest(u);
  if (!r) return null;
  let n = r.parentElement?.closest(u);
  for (; n && n !== r;) r = n, n = r.parentElement?.closest(u);
  return g(r) ? r : null
}

function y(e, t) {
  let r = t;
  for (; r?.parentElement && r.parentElement !== e;) r = r.parentElement;
  return r?.parentElement === e ? r : null
}

function v(e) {
  let t = Array.from(e.children).find(e => e.getAttribute("componentkey")?.startsWith(c)),
    r = t?.nextElementSibling ?? null;
  for (; r && (r.id === o || !g(r));) r = r.nextElementSibling;
  return r || y(e, e.querySelector(d))
}

function w(e) {
  let t = e.closest(l) ?? e.parentElement;
  if (!t) return null;
  let r = y(t, e);
  if (!r) return null;
  let n = v(t);
  if (!n || n === r) return null;
  let i = n.nextElementSibling;
  i?.id === o && (i = i?.nextElementSibling ?? null);
  let a = i;
  for (; a && a !== r;) a = a.nextElementSibling;
  return a ? i ?? r : null
}

function S(e) {
  let t = Array.from(e.querySelectorAll(i)).filter(e => "about the job" === m(e.textContent) && g(
      e)),
    r = t.find(e => e.closest(a)),
    n = r ? b(r) : null;
  if (!n) return null;
  let l = w(n);
  if (l) return l;
  let s = n.previousElementSibling;
  for (let e = 0; s && e < 3; e += 1) {
    if (s.id === o) {
      s = s.previousElementSibling;
      continue
    }
    if (h(s)) return s;
    s = s.previousElementSibling
  }
  return n
}

function E(e, t, r) {
  let n = e.getElementById(o) ?? e.createElement("div");
  return n.id = o, (n.parentElement !== t || n.nextElementSibling !== r) && t.insertBefore(n, r), n
}

function x(e = document) {
  let t = S(e);
  return t?.parentElement ? E(e, t.parentElement, t) : null
}

function C(e, t) {
  if (!t.parentElement) return null;
  let r = t.nextElementSibling,
    n = r?.id === o ? r.nextElementSibling : r;
  return E(e, t.parentElement, n)
}

function A(e = document) {
  let t = e.querySelector(p),
    r = t?.closest(f) ?? e.querySelector(f);
  return r ? C(e, r) : null
}

function k(e, t) {
  return C(e, t)
}

function T(e, t, r) {
  return e || !t || !r.contains(t)
}

