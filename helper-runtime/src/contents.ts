// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/contents.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import * as o from "url:./shared/helper-app"
import * as a from "@plasmohq/messaging"
import * as l from "./core/cloudflare-challenge.ts"
import * as s from "../utils/autofill-install-attribution.ts"
import * as u from "../utils/autofill-install-attribution-client.ts"
import * as c from "./shared/autofill-install-attribution-bridge.ts"
import * as d from "./shared/early-url-normalization.ts"
import * as f from "./shared/incremental-anchor-observer.ts"
import * as p from "./shared/parcel-runtime.ts"
import * as m from "./shared/runtime-activation.ts"
import * as h from "./shared/sticky-job-id.ts"

const i = { default: o };
let g = "jobright-helper-plugin",b = "__jobrightHelperBootstrapEntryActive",y = "__jobrightAutofillInstance",v = "__jobrightGetAutofillInstance",w = "jr_id",S = null,E = null,x = null,C = null;
function A() {
  if (C) return;
  let e = null;
  C = c.initializeAutofillInstallAttributionBridge({
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
    once: true
  })
}
let k = {
    matches: ["<all_urls>"],
    all_frames: true,
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
  if (!t || !e.href || e.hasAttribute("download")) return false;
  try {
    r = new URL(e.href)
  } catch {
    return false
  }
  return !!Z(r) && (!!r.searchParams.has(w) || !!et(e) && (r.searchParams.set(w, t), e.href = r
    .toString(), e.referrerPolicy = "unsafe-url", true))
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
  a[e] = true;
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
  document.addEventListener("click", s, true), l();
  let u = null,
    c = null,
    d = null;
  "undefined" != typeof MutationObserver && document.documentElement ? (u = new MutationObserver(
    e => {
      let t = n() ? Q() : null;
      t && f.visitChangedAnchors(e, e => {
        i(e, t)
      })
    })).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["aria-label", "href"],
    childList: true,
    characterData: true,
    subtree: true
  }) : c = setInterval(l, r);
  let p = () => {
    u?.disconnect(), u = null, null !== c && (clearInterval(c), c = null), null !== d && (
      clearTimeout(d), d = null)
  };
  d = setTimeout(p, t), window.addEventListener("pagehide", p, {
    once: true
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
  if (e.hasAttribute("download")) return false;
  let r = (e.textContent || "").replace(/\s+/g, " ").trim(),
    n = (e.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim();
  if (!/^apply to this job$/i.test(r) && !/^apply to this job$/i.test(n)) return false;
  let o = d.buildLifeAtTikTokApplyUrl(window.location.href, e.href, t);
  return !!o && (e.href = o, true)
}

function el() {
  let e = window.location.href;
  eo({
    activeFlag: W,
    durationMs: G,
    fallbackIntervalMs: K,
    isEligible: () => d.shouldKeepLifeAtTikTokApplyBridge(e, window.location.href),
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
    e[$] = true, console.info("[jobright] Google Careers retaining initial apply jr_id", {
      pathname: t.pathname,
      durationMs: B
    });
    let n = h.keepJobIdInUrl(r, {
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
      once: true
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
    if (!d.shouldRetainLifeAtTikTokJobDetailJrId(t.toString())) return;
    let r = t.searchParams.get(w)?.trim() || null;
    if (!r) return;
    e[H] = true, console.info("[jobright] LifeAtTikTok retaining initial job detail jr_id", {
      pathname: t.pathname,
      durationMs: Y
    });
    let n = h.keepJobIdInUrl(r, {
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
      once: true
    })
  } catch (e) {
    console.warn("[jobright] early LifeAtTikTok jr_id retention failed:", e)
  }
}
async function ec() {
  if (window.top !== window.self || !d.shouldRecoverLifeAtTikTokJobDetailJrId(window.location
      .href)) return false;
  try {
    let e = await a.sendToBackground({
        name: "getTabJobId",
        body: {
          currentUrl: window.location.href,
          requireSamePath: true
        }
      }),
      t = "string" == typeof e?.jobId ? e.jobId.trim() : "",
      r = d.buildLifeAtTikTokRecoveredUrl(window.location.href, t);
    if (!r) return false;
    window.history.replaceState(window.history.state, "", r), P(t);
    let n = window.location.pathname,
      o = h.keepJobIdInUrl(t, {
        originalHost: window.location.hostname,
        allowedPathname: n,
        durationMs: Y,
        intervalMs: z,
        maxRestorations: V
      });
    return window.addEventListener("pagehide", o, {
      once: true
    }), console.info("[jobright] LifeAtTikTok redirected job detail jr_id restored", {
      pathname: n
    }), true
  } catch (e) {
    return console.warn("[jobright] failed to recover redirected LifeAtTikTok jr_id:", e), false
  }
}

function ed() {
  return "loading" !== document.readyState ? Promise.resolve() : new Promise(e => {
    document.addEventListener("DOMContentLoaded", () => e(), {
      once: true
    })
  })
}

function ef() {
  let e = globalThis;
  return Object.values(e).filter(p.isParcelRequire)
}

function ep() {
  return p.findModuleExportFromParcelRequires(ef(), "bootstrapJobrightHelperRuntime")
}
async function em() {
  let e = await a.sendToBackground({
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
  return m.getRuntimeActivationReason({
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
      }), await ed(), await l.waitForCloudflareManagedChallengePage()) {
      l.removeCloudflareChallengeInjectedHost(g);
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
  E = m.observeRuntimeActivationSignals(e);
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
  if (e[b] || (e[b] = true, ey(), A(), d.normalizeEarlyJobrightUrl())) return;
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

export { g as HOST_ID, k as config, F as jobId, I as agentTailorId, j as agentResumeId, D as agentOriginalResume, P as setCurrentJobId, _ as setAutofillInstance, L as getAutofillInstance, R as cancelAutofillInstance }
