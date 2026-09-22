/**
 * Parcel module id: d4tj7
 * Resolved path: contents.js (oracle restore)
 * Dependencies:
 *   ../utils/autofill-install-attribution -> 7VqIV  =>  _dotdot_/_dotdot_/utils/autofill-install-attribution.js
 *   ../utils/autofill-install-attribution-client -> kEmo3  =>  _tilde_utils/autofill-install-attribution-client.js
 *   ./shared/autofill-install-attribution-bridge -> aunKc  =>  shared/autofill-install-attribution-bridge.js
 *   ./shared/early-url-normalization -> 9mVDf  =>  _tilde_contents/shared/early-url-normalization.js
 *   ./shared/incremental-anchor-observer -> iLrNS  =>  shared/incremental-anchor-observer.js
 *   ./shared/parcel-runtime -> AC8HW  =>  shared/parcel-runtime.js
 *   ./shared/runtime-activation -> JCRCE  =>  shared/runtime-activation.js
 *   ./shared/sticky-job-id -> DQI8L  =>  shared/sticky-job-id.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   url:./shared/helper-app -> adSH5  =>  url_/shared/helper-app.js
 *   ~core/cloudflare-challenge -> dWG0e  =>  _tilde_core/cloudflare-challenge.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "HOST_ID", () => g), n.export(r, "config", () => k), n.export(r,
    "jobId", () => F), n.export(r, "agentTailorId", () => I), n.export(r, "agentResumeId", () => j),
  n.export(r, "agentOriginalResume", () => D), n.export(r, "setCurrentJobId", () => P), n.export(r,
    "setAutofillInstance", () => _), n.export(r, "getAutofillInstance", () => L), n.export(r,
    "cancelAutofillInstance", () => R);
var o = e("url:./shared/helper-app"),
  i = n.interopDefault(o),
  a = e("@plasmohq/messaging"),
  l = e("~core/cloudflare-challenge"),
  s = e("../utils/autofill-install-attribution"),
  u = e("../utils/autofill-install-attribution-client"),
  c = e("./shared/autofill-install-attribution-bridge"),
  d = e("./shared/early-url-normalization"),
  f = e("./shared/incremental-anchor-observer"),
  p = e("./shared/parcel-runtime"),
  m = e("./shared/runtime-activation"),
  h = e("./shared/sticky-job-id");
let g = "jobright-helper-plugin",
  b = "__jobrightHelperBootstrapEntryActive",
  y = "__jobrightAutofillInstance",
  v = "__jobrightGetAutofillInstance",
  w = "jr_id",
  S = null,
  E = null,
  x = null,
  C = null;

function A() {
  if (C) return;
  let e = null;
  C = (0, c.initializeAutofillInstallAttributionBridge)({
    origin: window.location.origin,
    isTopFrame: window.top === window.self,
    addResponseListener: t => {
      e = e => t(e.detail), document.addEventListener(s.ATTRIBUTION_RESPONSE_EVENT, e)
    },
    removeResponseListener: () => {
      e && document.removeEventListener(s.ATTRIBUTION_RESPONSE_EVENT, e), e = null
    },
    dispatch: (e, t) => {
      document.dispatchEvent(new CustomEvent(e, {
        detail: t
      }))
    },
    accept: u.acceptAutofillInstallAttribution,
    flush: u.flushAutofillInstallAttribution,
    schedule: (e, t) => setTimeout(e, t),
    cancelScheduled: e => clearTimeout(e),
    logWarning: e => {
      console.warn("[AutofillInstallAttribution] bridge failed", {
        reason: e
      })
    }
  }), window.addEventListener("pagehide", () => C?.(), {
    once: !0
  })
}
let k = {
    matches: ["<all_urls>"],
    all_frames: !0,
    exclude_matches: ["*://*.cloudflare.com/*", "https://li.protechts.net/*",
      "https://cs.ns1p.net/*", "https://merchantpool1.linkedin.com/*",
      "https://www.googletagmanager.com/*", "https://*.fls.doubleclick.net/activityi*",
      "https://li.protechts.net/*", "https://lnkd.demdex.net/*",
      "https://www.google.com/recaptcha/enterprise/*", "https://crcldu.com/*"
    ],
    run_at: "document_start"
  },
  T = new URLSearchParams(window.location.search),
  F = T.get(w),
  I = T.get("a_t_id"),
  j = T.get("a_r_id"),
  D = "true" === T.get("useOriginalResume");

function P(e) {
  F = e || null
}

function _(e) {
  globalThis[y] = e
}

function L() {
  let e = globalThis,
    t = e[v];
  return "function" == typeof t ? t() : e[y] || null
}

function R(e) {
  e && ("function" == typeof e.cancel ? e.cancel() : "function" == typeof e.cancelAutoFill && e
    .cancelAutoFill())
}
let O = "__jobrightEarlyCatsoneClickInjectorActive",
  M = 1e4,
  N = 250,
  $ = "__jobrightEarlyGoogleCareersJrIdRetentionActive",
  B = 1e4,
  q = 50,
  U = 5,
  H = "__jobrightEarlyLifeAtTikTokJrIdRetentionActive",
  Y = 1e4,
  z = 50,
  V = 5,
  W = "__jobrightEarlyLifeAtTikTokClickInjectorActive",
  G = 1e4,
  K = 250;

function X(e) {
  let t = e.toLowerCase();
  return "catsone.com" === t || t.endsWith(".catsone.com")
}

function J(e) {
  let t = e.toLowerCase();
  return "google.com" === t || t.endsWith(".google.com")
}

function Q() {
  try {
    return new URL(window.location.href).searchParams.get(w)?.trim() || null
  } catch {
    return null
  }
}

function Z(e) {
  return X(e.hostname) && /^\/careers\/[^/]+\/jobs\/[^/]+\/apply\/?$/.test(e.pathname)
}

function ee(e) {
  return J(e.hostname) && /^\/about\/careers\/applications\/(?:u\/\d+\/)?apply\/?$/.test(e.pathname)
}

function et(e) {
  let t = (e.textContent || "").replace(/\s+/g, " ").trim(),
    r = (e.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim();
  return /^apply(?: now)?$/i.test(t) || /^apply(?: now)?$/i.test(r)
}

function er(e) {
  let t = e.composedPath?.() ?? [];
  for (let e of t) {
    let t = e;
    if (t?.tagName === "A") return t
  }
  return null
}

function en(e, t) {
  let r;
  if (!t || !e.href || e.hasAttribute("download")) return !1;
  try {
    r = new URL(e.href)
  } catch {
    return !1
  }
  return !!Z(r) && (!!r.searchParams.has(w) || !!et(e) && (r.searchParams.set(w, t), e.href = r
    .toString(), e.referrerPolicy = "unsafe-url", !0))
}

function eo({
  activeFlag: e,
  durationMs: t,
  fallbackIntervalMs: r,
  isEligible: n,
  label: o,
  rewriteAnchor: i
}) {
  let a = globalThis;
  if (a[e] || !n() || !Q()) return;
  a[e] = !0;
  let l = () => {
      let e = n() ? Q() : null;
      if (e)
        for (let t of document.querySelectorAll("a[href]")) i(t, e)
    },
    s = e => {
      try {
        let t = n() ? Q() : null;
        if (!t) return;
        let r = er(e);
        if (!r) return;
        i(r, t)
      } catch (e) {
        console.warn(`[jobright] early ${o} jr_id injector failed:`, e)
      }
    };
  document.addEventListener("click", s, !0), l();
  let u = null,
    c = null,
    d = null;
  "undefined" != typeof MutationObserver && document.documentElement ? (u = new MutationObserver(
    e => {
      let t = n() ? Q() : null;
      t && (0, f.visitChangedAnchors)(e, e => {
        i(e, t)
      })
    })).observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["aria-label", "href"],
    childList: !0,
    characterData: !0,
    subtree: !0
  }) : c = setInterval(l, r);
  let p = () => {
    u?.disconnect(), u = null, null !== c && (clearInterval(c), c = null), null !== d && (
      clearTimeout(d), d = null)
  };
  d = setTimeout(p, t), window.addEventListener("pagehide", p, {
    once: !0
  })
}

function ei() {
  eo({
    activeFlag: O,
    durationMs: M,
    fallbackIntervalMs: N,
    isEligible: () => X(window.location.hostname),
    label: "CatsOne",
    rewriteAnchor: en
  })
}

function ea(e, t) {
  if (e.hasAttribute("download")) return !1;
  let r = (e.textContent || "").replace(/\s+/g, " ").trim(),
    n = (e.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim();
  if (!/^apply to this job$/i.test(r) && !/^apply to this job$/i.test(n)) return !1;
  let o = (0, d.buildLifeAtTikTokApplyUrl)(window.location.href, e.href, t);
  return !!o && (e.href = o, !0)
}

function el() {
  let e = window.location.href;
  eo({
    activeFlag: W,
    durationMs: G,
    fallbackIntervalMs: K,
    isEligible: () => (0, d.shouldKeepLifeAtTikTokApplyBridge)(e, window.location.href),
    label: "LifeAtTikTok Apply bridge",
    rewriteAnchor: ea
  })
}

function es() {
  let e = globalThis;
  if (!e[$]) try {
    if (window.top !== window.self) return;
    let t = new URL(window.location.href);
    if (!ee(t)) return;
    let r = t.searchParams.get(w)?.trim() || null;
    if (!r) return;
    e[$] = !0, console.info("[jobright] Google Careers retaining initial apply jr_id", {
      pathname: t.pathname,
      durationMs: B
    });
    let n = (0, h.keepJobIdInUrl)(r, {
      originalHost: t.hostname,
      durationMs: B,
      intervalMs: q,
      maxRestorations: U,
      onRestore: ({
        pathname: e,
        restorationCount: t
      }) => {
        console.info("[jobright] Google Careers initial apply jr_id restored", {
          pathname: e,
          restorationCount: t
        })
      }
    });
    window.addEventListener("pagehide", n, {
      once: !0
    })
  } catch (e) {
    console.warn("[jobright] early Google Careers jr_id retention failed:", e)
  }
}

function eu() {
  let e = globalThis;
  if (!e[H]) try {
    if (window.top !== window.self) return;
    let t = new URL(window.location.href);
    if (!(0, d.shouldRetainLifeAtTikTokJobDetailJrId)(t.toString())) return;
    let r = t.searchParams.get(w)?.trim() || null;
    if (!r) return;
    e[H] = !0, console.info("[jobright] LifeAtTikTok retaining initial job detail jr_id", {
      pathname: t.pathname,
      durationMs: Y
    });
    let n = (0, h.keepJobIdInUrl)(r, {
      originalHost: t.hostname,
      allowedPathname: t.pathname,
      durationMs: Y,
      intervalMs: z,
      maxRestorations: V,
      onRestore: ({
        pathname: e,
        restorationCount: t
      }) => {
        console.info("[jobright] LifeAtTikTok job detail jr_id restored", {
          pathname: e,
          restorationCount: t
        })
      }
    });
    window.addEventListener("pagehide", n, {
      once: !0
    })
  } catch (e) {
    console.warn("[jobright] early LifeAtTikTok jr_id retention failed:", e)
  }
}
async function ec() {
  if (window.top !== window.self || !(0, d.shouldRecoverLifeAtTikTokJobDetailJrId)(window.location
      .href)) return !1;
  try {
    let e = await (0, a.sendToBackground)({
        name: "getTabJobId",
        body: {
          currentUrl: window.location.href,
          requireSamePath: !0
        }
      }),
      t = "string" == typeof e?.jobId ? e.jobId.trim() : "",
      r = (0, d.buildLifeAtTikTokRecoveredUrl)(window.location.href, t);
    if (!r) return !1;
    window.history.replaceState(window.history.state, "", r), P(t);
    let n = window.location.pathname,
      o = (0, h.keepJobIdInUrl)(t, {
        originalHost: window.location.hostname,
        allowedPathname: n,
        durationMs: Y,
        intervalMs: z,
        maxRestorations: V
      });
    return window.addEventListener("pagehide", o, {
      once: !0
    }), console.info("[jobright] LifeAtTikTok redirected job detail jr_id restored", {
      pathname: n
    }), !0
  } catch (e) {
    return console.warn("[jobright] failed to recover redirected LifeAtTikTok jr_id:", e), !1
  }
}

function ed() {
  return "loading" !== document.readyState ? Promise.resolve() : new Promise(e => {
    document.addEventListener("DOMContentLoaded", () => e(), {
      once: !0
    })
  })
}

function ef() {
  let e = globalThis;
  return Object.values(e).filter(p.isParcelRequire)
}

function ep() {
  return (0, p.findModuleExportFromParcelRequires)(ef(), "bootstrapJobrightHelperRuntime")
}
async function em() {
  let e = await (0, a.sendToBackground)({
    name: "injectHelperAppBundle",
    body: {
      bundleUrl: i.default
    }
  });
  if (!e?.success) throw Error("Failed to inject Jobright helper runtime bundle");
  let t = ep();
  if (!t?.bootstrapJobrightHelperRuntime) throw Error(
    "Failed to load Jobright helper runtime module");
  return t
}

function eh() {
  let e = Array.from(document.querySelectorAll("iframe[src]"), e => e.src),
    t = Array.from(document.querySelectorAll("script[src], link[href]"), e =>
      e instanceof HTMLScriptElement ? e.src : e.href);
  return (0, m.getRuntimeActivationReason)({
    href: window.location.href,
    isTopFrame: window.top === window.self,
    iframeUrls: e,
    pageSourceUrls: t
  })
}

function eg() {
  E?.(), E = null, x?.(), x = null
}

function eb(e) {
  return S || (eg(), S = (async () => {
    if (console.info("[jobright] helper runtime activation matched", {
        host: window.location.hostname,
        pathname: window.location.pathname,
        frame: window.top === window.self ? "top" : "child",
        reason: e
      }), await ed(), await (0, l.waitForCloudflareManagedChallengePage)()) {
      (0, l.removeCloudflareChallengeInjectedHost)(g);
      return
    }
    let t = await em();
    return await t.bootstrapJobrightHelperRuntime(), t
  })().catch(e => {
    throw S = null, e
  }))
}

function ey() {
  window.top === window.self && chrome.runtime.onMessage.addListener(e => {
    "iconClicked" === e.message && (console.info("[jobright] extension icon requested helper", {
      runtimeStarted: null !== S
    }), eb("extension_icon").then(e => e?.openJobrightHelperFromExtensionIcon?.()).catch(
      e => {
        console.warn("[jobright] extension icon activation failed:", e)
      }))
  })
}

function ev() {
  if (window.top !== window.self) return;
  let e = e => {
    eb(e).catch(e => {
      console.warn("[jobright] failed to activate helper runtime:", e)
    })
  };
  E = (0, m.observeRuntimeActivationSignals)(e);
  let t = t => {
    if (console.debug("[jobright] runtime activation message", {
        message: t.message,
        frame: "top"
      }), "urlUpdated" !== t.message) return;
    let r = eh();
    r && e(r)
  };
  chrome.runtime.onMessage.addListener(t), x = () => {
    chrome.runtime.onMessage.removeListener(t)
  }
}(async function() {
  let e = globalThis;
  if (e[b] || (e[b] = !0, ey(), A(), (0, d.normalizeEarlyJobrightUrl)())) return;
  ei(), es(), eu(), await ec(), el(), await ed();
  let t = eh();
  if (!t) {
    ev();
    return
  }
  await eb(t)
})().catch(e => {
  console.warn("[jobright] failed to bootstrap helper:", e)
})

