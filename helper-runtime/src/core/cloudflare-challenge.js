/**
 * Parcel module id: dWG0e
 * Resolved path: src/core/cloudflare-challenge.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "isCloudflareManagedChallengePage", () => g), n.export(r,
  "collectCloudflareChallengePageProbe", () => y), n.export(r,
  "isCurrentDocumentCloudflareManagedChallengePage", () => v), n.export(r,
  "waitForCloudflareManagedChallengePage", () => w), n.export(r,
  "removeCloudflareChallengeInjectedHost", () => S), n.export(r,
  "startCloudflareChallengeInjectedHostCleanup", () => E);
let o = /(?:\/cdn-cgi\/challenge-platform\b|window\._cf_chl_opt|__cf_chl_|cf_chl_opt|cf_chl_)/i,
  i = /(?:just a moment|security verification|one more step)/i,
  a = [/performing security verification/i,
    /checking (?:if|that) (?:the )?(?:site )?connection is secure/i,
    /this website uses a security service to protect against malicious bots/i,
    /this page is displayed while the website verifies you are not a bot/i
  ],
  l = /\b(?:cloudflare\s+)?ray id\s*:?\s*[a-f0-9]{12,}\b/i,
  s = /performance and security by cloudflare/i,
  u =
  '#challenge-stage,#cf-challenge-running,#cf-please-wait,.cf-browser-verification,.cf-challenge,form[action*="/cdn-cgi/challenge-platform/"]',
  c = 'script[src*="/cdn-cgi/challenge-platform/"]';

function d(e) {
  return (e || "").replace(/\s+/g, " ").trim()
}

function f(e) {
  if (!e) return !1;
  try {
    let {
      hostname: t
    } = new URL(e);
    return "jobright.ai" === t || t.endsWith(".jobright.ai")
  } catch {
    return !1
  }
}

function p(e) {
  return !!a.some(t => t.test(e)) || /verify you are human/i.test(e) && /cloudflare/i.test(e) &&
    /(?:not a bot|malicious bots|security service)/i.test(e)
}

function m(e) {
  return l.test(e) && s.test(e)
}

function h({
  bodyText: e,
  interactiveElementCount: t,
  allowFooterLinks: r = !1
}) {
  let n = e.length,
    o = t ?? 0;
  return r ? n <= 1500 && o <= 20 : n <= 2500 && o <= 4
}

function g(e) {
  let t = d(e.title),
    r = d(e.bodyText),
    n = e.html || "",
    a = !!e.managedRuntimeFound || o.test(n),
    l = m(r),
    s = a || !!e.challengeMarkerFound || l,
    u = i.test(t),
    c = p(r) || u || l;
  return s && c && h({
    bodyText: r,
    interactiveElementCount: e.interactiveElementCount,
    allowFooterLinks: l || a && u
  })
}

function b(e) {
  let t = d(e.title),
    r = d(e.bodyText),
    n = e.html || "",
    a = !!e.managedRuntimeFound || o.test(n),
    l = m(r),
    s = a || !!e.challengeMarkerFound || l,
    u = i.test(t),
    c = p(r) || u || l;
  return !!s || !!u || !!c || h({
    bodyText: r,
    interactiveElementCount: e.interactiveElementCount
  })
}

function y(e) {
  let t = e.title,
    r = !!e.querySelector(u),
    n = e.defaultView,
    o = !!(e.querySelector(c) || n?._cf_chl_opt),
    a = e.querySelectorAll("button, input, select, textarea, a[href], [role='button']").length,
    l = o || r || i.test(d(t)) || a <= 4;
  return {
    title: t,
    bodyText: l ? (e.body?.textContent || e.body?.innerText || "").trim() : "",
    managedRuntimeFound: o,
    challengeMarkerFound: r,
    interactiveElementCount: a
  }
}

function v() {
  return "undefined" != typeof document && g(y(document))
}
async function w({
  timeoutMs: e = 1500,
  intervalMs: t = 100,
  currentUrl: r = "undefined" == typeof window ? void 0 : window.location.href,
  collectProbe: n
} = {}) {
  if (f(r)) return !1;
  let o = n || (() => "undefined" == typeof document ? null : y(document)),
    i = Date.now() + e;
  for (;;) {
    let e = o();
    if (e && g(e)) return !0;
    if (e && !b(e) || Date.now() >= i) return !1;
    await new Promise(e => setTimeout(e, Math.max(0, t)))
  }
}

function S(e) {
  if ("undefined" == typeof document) return !1;
  let t = document.getElementById(e);
  return !!t && (t.remove(), !0)
}

function E(e, {
  timeoutMs: t = 5e3,
  intervalMs: r = 250
} = {}) {
  if ("undefined" == typeof document) return () => {};
  let n = !1,
    o = null,
    i = null,
    a = null,
    l = () => {
      n || (n = !0, o && clearTimeout(o), i && clearInterval(i), a?.disconnect())
    },
    s = () => {
      !n && v() && (S(e), l())
    };
  return s(), !n && (i = setInterval(s, r), o = setTimeout(l, t), "undefined" !=
    typeof MutationObserver && document.documentElement && (a = new MutationObserver(s)).observe(
      document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      })), l
}

