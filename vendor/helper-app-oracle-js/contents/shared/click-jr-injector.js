/**
 * Parcel module id: fu3wC
 * Resolved path: contents/shared/click-jr-injector.js (oracle restore)
 * Dependencies:
 *   ./incremental-anchor-observer -> iLrNS  =>  shared/incremental-anchor-observer.js
 *   ./sticky-job-id -> DQI8L  =>  shared/sticky-job-id.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/utils -> aTDh5  =>  _tilde_core/utils.js
 *   ~utils/job-id -> klnOn  =>  _tilde_utils/job-id.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "keepJobIdInUrl", () => l.keepJobIdInUrl), n.export(r,
    "matchesApplyHeuristic", () => c), n.export(r, "matchesSiteSpecificPattern", () => j), n.export(
    r, "evaluatePostNavigationSync", () => L), n.export(r, "handleClickForJrInjection", () => B), n
  .export(r, "attachClickJrInjector", () => q);
var o = e("~core/utils"),
  i = e("~utils/job-id"),
  a = e("./incremental-anchor-observer"),
  l = e("./sticky-job-id");
let s =
  /^\s*(apply|apply now|apply (for|to) (this )?(job|position)|submit (your )?application|start (your )?application|continue to apply|begin application)\s*$/i,
  u = 80;

function c(e) {
  if (!e) return !1;
  let t = e.textContent ?? "",
    r = t.trim();
  if (r.length <= u && s.test(r)) return !0;
  let n = (e.getAttribute("aria-label") ?? "").trim();
  return !!(n && s.test(n))
}

function d(e) {
  if ("BUTTON" !== e.tagName) return !1;
  if (/^applyButton_(top|bottom)$/.test(e.id)) return !0;
  let t = e.getAttribute("onclick") ?? "";
  return c(e) && /\bcheckDpcs2AndProceed\s*\(/.test(t)
}

function f(e) {
  if ("BUTTON" !== e.tagName) return !1;
  let t = e.getAttribute("test-id");
  return "apply-button" === t || "apply-without-account" === t || "application-next-step" === t
}

function p(e) {
  if ("A" !== e.tagName || !c(e)) return !1;
  let t = e.href;
  return /\/careers\/RegisterEdit(?:[/?#]|$)/.test(t)
}

function m(e) {
  if ("A" !== e.tagName || !c(e)) return !1;
  let t = e.href;
  return /\/careers\/[^/]+\/jobs\/[^/]+\/apply\/?(?:[?#]|$)/.test(t)
}

function h(e) {
  if ("A" !== e.tagName || !c(e)) return !1;
  let t = e.href;
  try {
    let e = new URL(t);
    return (0, o.isDomainMatch)(e.hostname, "jobs.bytedance.com") &&
      /^\/[^/]+\/[^/]+\/[^/]+\/apply\/?$/.test(e.pathname)
  } catch {
    return !1
  }
}

function g(e) {
  if ("A" !== e.tagName) return !1;
  try {
    let t = new URL(e.href);
    return (0, o.isDomainMatch)(t.hostname, "jobs.apple.com") && /^\/app\/[^/]+\/apply\/[^/]+\/?$/
      .test(t.pathname)
  } catch {
    return !1
  }
}

function b(e) {
  if (!c(e)) return !1;
  let t = e.getAttribute("role");
  return "BUTTON" === e.tagName || "button" === t || "tab" === t
}
let y = [{
  label: "smartrecruiters",
  domain: "smartrecruiters.com",
  predicate: e => "st-apply" === e.id || "apply" === e.getAttribute("data-sr-track")
}, {
  label: "recruitee",
  domain: "recruitee.com",
  predicate: e => {
    let t = e.getAttribute("data-cy");
    return "apply-button-nav" === t || "apply-button" === t
  }
}, {
  label: "netflix-jobs",
  domain: "jobs.netflix.net",
  predicate: e => "apply-button" === e.getAttribute("data-test-id")
}, {
  label: "gusto",
  domain: "jobs.gusto.com",
  predicate: e => {
    if ("A" !== e.tagName) return !1;
    let t = e.href;
    return "string" == typeof t && /\/applicants\/new(?:\/|[?#]|$)/.test(t)
  }
}, {
  label: "apple-submit-resume",
  domain: "jobs.apple.com",
  predicate: g
}, {
  label: "successfactors-eu",
  domain: "successfactors.eu",
  predicate: d
}, {
  label: "successfactors-com",
  domain: "successfactors.com",
  predicate: d
}, {
  label: "dayforce-apply-and-next",
  domain: "jobs.dayforcehcm.com",
  predicate: f
}, {
  label: "sapsf",
  domain: "sapsf.com",
  predicate: d
}, {
  label: "deloitte-avature-register-edit",
  domain: "apply.deloitte.com",
  predicate: p
}, {
  label: "catsone-apply",
  domain: "catsone.com",
  syncAfterAnchorClick: !0,
  predicate: m
}, {
  label: "bytedance-apply",
  domain: "joinbytedance.com",
  predicate: h
}, {
  label: "tiktok-usds-apply",
  domain: "tiktokusds.com",
  predicate: b
}];

function v(e) {
  return y.filter(t => (0, o.isDomainMatch)(e, t.domain))
}

function w(e, t) {
  for (let r of t)
    if (r.predicate(e)) return !0;
  return !1
}

function S(e, t) {
  for (let r of t)
    if (r.syncAfterAnchorClick && r.predicate(e)) return !0;
  return !1
}

function E(e, t, r) {
  if (!e.href || e.hasAttribute("download")) return !1;
  let n = (0, i.safeSetJobIdInUrl)(e.href, t, r);
  return !!n && (e.href = n, e.referrerPolicy = "unsafe-url", !0)
}

function x(e, t) {
  try {
    return new URL(e.href).searchParams.get(i.JOB_ID_QUERY_KEY) === t
  } catch {
    return !1
  }
}

function C() {
  try {
    return "undefined" != typeof window && window.top !== window.self
  } catch {
    return !1
  }
}

function A(e) {
  try {
    return new URL(e)
  } catch {
    return null
  }
}

function k(e, t, r) {
  let n = A(e);
  if (!t || !n) return null;
  let o = (0, i.safeSetJobIdInUrl)(e, t, r);
  if (o) return o;
  if (n.searchParams.get(i.JOB_ID_QUERY_KEY) !== t) return null;
  let a = new URL(n.toString());
  a.searchParams.delete(i.JOB_ID_QUERY_KEY);
  let l = (0, i.safeSetJobIdInUrl)(a.toString(), t, r);
  return l ? n.toString() : null
}

function T(e, t, r) {
  if (!C()) return !1;
  let n = k(e.href, t, r);
  return !!n && (e.href = n, e.target = "_top", e.referrerPolicy = "unsafe-url", !0)
}

function F(e, t, r, n) {
  if ("A" !== e.tagName) return {
    scanned: 0,
    matched: 0,
    rewritten: 0
  };
  let o = w(e, n),
    i = c(e);
  return o || i ? T(e, t, r) ? {
    scanned: 1,
    matched: 1,
    rewritten: 1
  } : "_blank" !== e.target || o ? {
    scanned: 1,
    matched: 1,
    rewritten: E(e, t, r) ? 1 : 0
  } : {
    scanned: 1,
    matched: 1,
    rewritten: 0
  } : {
    scanned: 1,
    matched: 0,
    rewritten: 0
  }
}

function I(e, t, r, n) {
  let o = {
    scanned: 0,
    matched: 0,
    rewritten: 0
  };
  for (let i of e) {
    let e = F(i, t, r, n);
    o.scanned += e.scanned, o.matched += e.matched, o.rewritten += e.rewritten
  }
  return o
}

function j(e, t) {
  return w(e, v(t))
}

function D(e) {
  let t = e.composedPath?.() ?? [];
  for (let e of t) {
    let t = e;
    if (!t?.tagName) continue;
    if ("A" === t.tagName) return {
      kind: "anchor",
      element: t
    };
    if ("BUTTON" === t.tagName) return {
      kind: "button",
      element: t
    };
    let r = t.getAttribute("role");
    if ("button" === r || "tab" === r) return {
      kind: "button",
      element: t
    }
  }
  return null
}
let P = 1e4,
  _ = 50;

function L({
  jobId: e,
  originalHost: t,
  originalUrl: r,
  currentUrl: n
}) {
  let o;
  if (n === r) return {
    done: !1
  };
  try {
    o = new URL(n)
  } catch {
    return {
      done: !0
    }
  }
  return o.hostname.toLowerCase() !== t.toLowerCase() || o.searchParams.has(i.JOB_ID_QUERY_KEY) ? {
    done: !0
  } : (o.searchParams.set(i.JOB_ID_QUERY_KEY, e), {
    done: !0,
    restoredUrl: o.toString()
  })
}
let R = 1e4,
  O = 250,
  M = "click-jr-injector-20260721-v9",
  N = null;

function $(e, t) {
  null !== N && clearInterval(N);
  let r = window.location.href,
    n = Date.now(),
    o = setInterval(() => {
      try {
        if (Date.now() - n > P) {
          clearInterval(o), N === o && (N = null);
          return
        }
        let a = window.location.href,
          s = L({
            jobId: e,
            originalHost: t,
            originalUrl: r,
            currentUrl: a
          });
        if (!s.done) return;
        if (clearInterval(o), N === o && (N = null), s.restoredUrl) {
          try {
            let e = new URL(r),
              t = new URL(a);
            console.info("[jobright] click-jr-injector button URL sync result", {
              host: e.hostname,
              originalPathname: e.pathname,
              currentPathname: t.pathname,
              currentQueryKeys: Array.from(t.searchParams.keys()).filter(e => e !== i
                .JOB_ID_QUERY_KEY),
              restored: !0
            })
          } catch {}
          window.history.replaceState(window.history.state, "", s.restoredUrl), (0, l
            .keepJobIdInUrl)(e, {
            originalHost: t
          })
        }
      } catch {
        clearInterval(o), N === o && (N = null)
      }
    }, _);
  N = o
}

function B(e, t, r, n = v(r)) {
  let o = D(e);
  if (!o) return !1;
  let i = w(o.element, n),
    a = i || c(o.element);
  if (!a) return !1;
  if ("anchor" === o.kind) {
    let e = o.element,
      a = "_blank" !== e.target && S(e, n);
    return !!T(e, t, r) || ("_blank" !== e.target || !!i) && (E(e, t, r) ? (a && $(t, r), !0) : !!(
      a && x(e, t)) && ($(t, r), !0))
  }
  return !!i && (console.info("[jobright] click-jr-injector scheduling button URL sync", {
    host: r,
    testId: o.element.getAttribute("test-id"),
    role: o.element.getAttribute("role"),
    hasJobId: !!t
  }), $(t, r), !0)
}

function q() {
  let e = window.location.hostname,
    t = v(e);
  if (t.length) {
    let r;
    try {
      r = chrome?.runtime?.getManifest?.()?.version
    } catch {
      r = void 0
    }
    console.info("[jobright] click-jr-injector attached", {
      marker: M,
      extensionVersion: r,
      host: e,
      hasJobId: !!(0, i.extractJobIdFromUrl)(window.location.href),
      activeSitePatterns: t.map(e => e.label),
      rewriteDurationMs: R,
      rewriteFallbackIntervalMs: O
    })
  }
  let r = !1,
    n = !1,
    o = () => {
      let o = (0, i.extractJobIdFromUrl)(window.location.href);
      if (!o || "function" != typeof document.querySelectorAll) return;
      let a = I(document.querySelectorAll("a[href]"), o, e, t),
        l = t.length > 0 || a.matched > 0;
      l && !r && (r = !0, console.info("[jobright] click-jr-injector first anchor scan", {
        marker: M,
        host: e,
        ...a
      })), a.matched > 0 && !n && (n = !0, console.info(
        "[jobright] click-jr-injector first anchor match", {
          marker: M,
          host: e,
          ...a
        })), a.rewritten > 0 && console.info(
      "[jobright] click-jr-injector rewrote apply anchors", {
        marker: M,
        host: e,
        ...a
      })
    },
    l = null,
    s = null,
    u = null;
  (0, i.extractJobIdFromUrl)(window.location.href) && (o(), "undefined" !=
    typeof MutationObserver && document.documentElement ? (l = new MutationObserver(r => {
      let n = (0, i.extractJobIdFromUrl)(window.location.href);
      if (!n) return;
      let o = {
        scanned: 0,
        matched: 0,
        rewritten: 0
      };
      (0, a.visitChangedAnchors)(r, r => {
        let i = F(r, n, e, t);
        o.scanned += i.scanned, o.matched += i.matched, o.rewritten += i.rewritten
      }), o.rewritten > 0 && console.info(
        "[jobright] click-jr-injector rewrote changed anchors", {
          marker: M,
          host: e,
          ...o
        })
    })).observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["aria-label", "href"],
      childList: !0,
      characterData: !0,
      subtree: !0
    }) : s = setInterval(o, O), u = setTimeout(() => {
      l?.disconnect(), l = null, null !== s && (clearInterval(s), s = null), u = null
    }, R));
  let c = r => {
    try {
      let n = (0, i.extractJobIdFromUrl)(window.location.href);
      if (!n) return;
      B(r, n, e, t)
    } catch (e) {
      console.warn("[jobright] click-jr-injector handler failed:", e)
    }
  };
  return document.addEventListener("click", c, !0), () => {
    document.removeEventListener("click", c, !0), l?.disconnect(), null !== s && clearInterval(s),
      null !== u && clearTimeout(u)
  }
}

