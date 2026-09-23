import * as o from "url:./shared/helper-app";
import * as a from "@plasmohq/messaging";
import * as l from "./core/cloudflare-challenge.ts";
import * as s from "../utils/autofill-install-attribution.ts";
import * as u from "../utils/autofill-install-attribution-client.ts";
import * as c from "./shared/autofill-install-attribution-bridge.ts";
import * as d from "./shared/early-url-normalization.ts";
import * as f from "./shared/incremental-anchor-observer.ts";
import * as p from "./shared/parcel-runtime.ts";
import * as m from "./shared/runtime-activation.ts";
import * as h from "./shared/sticky-job-id.ts";
const i = { default: o };
let g = "jobright-helper-plugin", b = "__jobrightHelperBootstrapEntryActive", y = "__jobrightAutofillInstance", v = "__jobrightGetAutofillInstance", w = "jr_id", S = null, E = null, x = null, C = null;
function A() {
  if (C) return;
  let e = null;
  C = c.initializeAutofillInstallAttributionBridge({
    origin: window.location.origin,
    isTopFrame: window.top === window.self,
    addResponseListener: (t) => {
      e = (e2) => t(e2.detail), document.addEventListener(s.ATTRIBUTION_RESPONSE_EVENT, e);
    },
    removeResponseListener: () => {
      e && document.removeEventListener(s.ATTRIBUTION_RESPONSE_EVENT, e), e = null;
    },
    dispatch: (e2, t) => {
      document.dispatchEvent(new CustomEvent(e2, {
        detail: t
      }));
    },
    accept: u.acceptAutofillInstallAttribution,
    flush: u.flushAutofillInstallAttribution,
    schedule: (e2, t) => setTimeout(e2, t),
    cancelScheduled: (e2) => clearTimeout(e2),
    logWarning: (e2) => {
      console.warn("[AutofillInstallAttribution] bridge failed", {
        reason: e2
      });
    }
  }), window.addEventListener("pagehide", () => C?.(), {
    once: true
  });
}
let k = {
  matches: ["<all_urls>"],
  all_frames: true,
  exclude_matches: [
    "*://*.cloudflare.com/*",
    "https://li.protechts.net/*",
    "https://cs.ns1p.net/*",
    "https://merchantpool1.linkedin.com/*",
    "https://www.googletagmanager.com/*",
    "https://*.fls.doubleclick.net/activityi*",
    "https://li.protechts.net/*",
    "https://lnkd.demdex.net/*",
    "https://www.google.com/recaptcha/enterprise/*",
    "https://crcldu.com/*"
  ],
  run_at: "document_start"
}, T = new URLSearchParams(window.location.search), F = T.get(w), I = T.get("a_t_id"), j = T.get("a_r_id"), D = "true" === T.get("useOriginalResume");
function P(e) {
  F = e || null;
}
function _(e) {
  globalThis[y] = e;
}
function L() {
  let e = globalThis, t = e[v];
  return "function" == typeof t ? t() : e[y] || null;
}
function R(e) {
  e && ("function" == typeof e.cancel ? e.cancel() : "function" == typeof e.cancelAutoFill && e.cancelAutoFill());
}
let O = "__jobrightEarlyCatsoneClickInjectorActive", M = 1e4, N = 250, $ = "__jobrightEarlyGoogleCareersJrIdRetentionActive", B = 1e4, q = 50, U = 5, H = "__jobrightEarlyLifeAtTikTokJrIdRetentionActive", Y = 1e4, z = 50, V = 5, W = "__jobrightEarlyLifeAtTikTokClickInjectorActive", G = 1e4, K = 250;
function X(e) {
  let t = e.toLowerCase();
  return "catsone.com" === t || t.endsWith(".catsone.com");
}
function J(e) {
  let t = e.toLowerCase();
  return "google.com" === t || t.endsWith(".google.com");
}
function Q() {
  try {
    return new URL(window.location.href).searchParams.get(w)?.trim() || null;
  } catch {
    return null;
  }
}
function Z(e) {
  return X(e.hostname) && /^\/careers\/[^/]+\/jobs\/[^/]+\/apply\/?$/.test(e.pathname);
}
function ee(e) {
  return J(e.hostname) && /^\/about\/careers\/applications\/(?:u\/\d+\/)?apply\/?$/.test(e.pathname);
}
function et(e) {
  let t = (e.textContent || "").replace(/\s+/g, " ").trim(), r = (e.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim();
  return /^apply(?: now)?$/i.test(t) || /^apply(?: now)?$/i.test(r);
}
function er(e) {
  let t = e.composedPath?.() ?? [];
  for (let e2 of t) {
    let t2 = e2;
    if (t2?.tagName === "A") return t2;
  }
  return null;
}
function en(e, t) {
  let r;
  if (!t || !e.href || e.hasAttribute("download")) return false;
  try {
    r = new URL(e.href);
  } catch {
    return false;
  }
  return !!Z(r) && (!!r.searchParams.has(w) || !!et(e) && (r.searchParams.set(w, t), e.href = r.toString(), e.referrerPolicy = "unsafe-url", true));
}
function eo({
  activeFlag: e,
  durationMs: t,
  fallbackIntervalMs: r,
  isEligible: n,
  label: o2,
  rewriteAnchor: i2
}) {
  let a2 = globalThis;
  if (a2[e] || !n() || !Q()) return;
  a2[e] = true;
  let l2 = () => {
    let e2 = n() ? Q() : null;
    if (e2)
      for (let t2 of document.querySelectorAll("a[href]")) i2(t2, e2);
  }, s2 = (e2) => {
    try {
      let t2 = n() ? Q() : null;
      if (!t2) return;
      let r2 = er(e2);
      if (!r2) return;
      i2(r2, t2);
    } catch (e3) {
      console.warn(`[jobright] early ${o2} jr_id injector failed:`, e3);
    }
  };
  document.addEventListener("click", s2, true), l2();
  let u2 = null, c2 = null, d2 = null;
  "undefined" != typeof MutationObserver && document.documentElement ? (u2 = new MutationObserver(
    (e2) => {
      let t2 = n() ? Q() : null;
      t2 && f.visitChangedAnchors(e2, (e3) => {
        i2(e3, t2);
      });
    }
  )).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["aria-label", "href"],
    childList: true,
    characterData: true,
    subtree: true
  }) : c2 = setInterval(l2, r);
  let p2 = () => {
    u2?.disconnect(), u2 = null, null !== c2 && (clearInterval(c2), c2 = null), null !== d2 && (clearTimeout(d2), d2 = null);
  };
  d2 = setTimeout(p2, t), window.addEventListener("pagehide", p2, {
    once: true
  });
}
function ei() {
  eo({
    activeFlag: O,
    durationMs: M,
    fallbackIntervalMs: N,
    isEligible: () => X(window.location.hostname),
    label: "CatsOne",
    rewriteAnchor: en
  });
}
function ea(e, t) {
  if (e.hasAttribute("download")) return false;
  let r = (e.textContent || "").replace(/\s+/g, " ").trim(), n = (e.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim();
  if (!/^apply to this job$/i.test(r) && !/^apply to this job$/i.test(n)) return false;
  let o2 = d.buildLifeAtTikTokApplyUrl(window.location.href, e.href, t);
  return !!o2 && (e.href = o2, true);
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
  });
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
        pathname: e2,
        restorationCount: t2
      }) => {
        console.info("[jobright] Google Careers initial apply jr_id restored", {
          pathname: e2,
          restorationCount: t2
        });
      }
    });
    window.addEventListener("pagehide", n, {
      once: true
    });
  } catch (e2) {
    console.warn("[jobright] early Google Careers jr_id retention failed:", e2);
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
        pathname: e2,
        restorationCount: t2
      }) => {
        console.info("[jobright] LifeAtTikTok job detail jr_id restored", {
          pathname: e2,
          restorationCount: t2
        });
      }
    });
    window.addEventListener("pagehide", n, {
      once: true
    });
  } catch (e2) {
    console.warn("[jobright] early LifeAtTikTok jr_id retention failed:", e2);
  }
}
async function ec() {
  if (window.top !== window.self || !d.shouldRecoverLifeAtTikTokJobDetailJrId(window.location.href)) return false;
  try {
    let e = await a.sendToBackground({
      name: "getTabJobId",
      body: {
        currentUrl: window.location.href,
        requireSamePath: true
      }
    }), t = "string" == typeof e?.jobId ? e.jobId.trim() : "", r = d.buildLifeAtTikTokRecoveredUrl(window.location.href, t);
    if (!r) return false;
    window.history.replaceState(window.history.state, "", r), P(t);
    let n = window.location.pathname, o2 = h.keepJobIdInUrl(t, {
      originalHost: window.location.hostname,
      allowedPathname: n,
      durationMs: Y,
      intervalMs: z,
      maxRestorations: V
    });
    return window.addEventListener("pagehide", o2, {
      once: true
    }), console.info("[jobright] LifeAtTikTok redirected job detail jr_id restored", {
      pathname: n
    }), true;
  } catch (e) {
    return console.warn("[jobright] failed to recover redirected LifeAtTikTok jr_id:", e), false;
  }
}
function ed() {
  return "loading" !== document.readyState ? Promise.resolve() : new Promise((e) => {
    document.addEventListener("DOMContentLoaded", () => e(), {
      once: true
    });
  });
}
function ef() {
  let e = globalThis;
  return Object.values(e).filter(p.isParcelRequire);
}
function ep() {
  return p.findModuleExportFromParcelRequires(ef(), "bootstrapJobrightHelperRuntime");
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
    "Failed to load Jobright helper runtime module"
  );
  return t;
}
function eh() {
  let e = Array.from(document.querySelectorAll("iframe[src]"), (e2) => e2.src), t = Array.from(document.querySelectorAll("script[src], link[href]"), (e2) => e2 instanceof HTMLScriptElement ? e2.src : e2.href);
  return m.getRuntimeActivationReason({
    href: window.location.href,
    isTopFrame: window.top === window.self,
    iframeUrls: e,
    pageSourceUrls: t
  });
}
function eg() {
  E?.(), E = null, x?.(), x = null;
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
      return;
    }
    let t = await em();
    return await t.bootstrapJobrightHelperRuntime(), t;
  })().catch((e2) => {
    throw S = null, e2;
  }));
}
function ey() {
  window.top === window.self && chrome.runtime.onMessage.addListener((e) => {
    "iconClicked" === e.message && (console.info("[jobright] extension icon requested helper", {
      runtimeStarted: null !== S
    }), eb("extension_icon").then((e2) => e2?.openJobrightHelperFromExtensionIcon?.()).catch(
      (e2) => {
        console.warn("[jobright] extension icon activation failed:", e2);
      }
    ));
  });
}
function ev() {
  if (window.top !== window.self) return;
  let e = (e2) => {
    eb(e2).catch((e3) => {
      console.warn("[jobright] failed to activate helper runtime:", e3);
    });
  };
  E = m.observeRuntimeActivationSignals(e);
  let t = (t2) => {
    if (console.debug("[jobright] runtime activation message", {
      message: t2.message,
      frame: "top"
    }), "urlUpdated" !== t2.message) return;
    let r = eh();
    r && e(r);
  };
  chrome.runtime.onMessage.addListener(t), x = () => {
    chrome.runtime.onMessage.removeListener(t);
  };
}
(async function() {
  let e = globalThis;
  if (e[b] || (e[b] = true, ey(), A(), d.normalizeEarlyJobrightUrl())) return;
  ei(), es(), eu(), await ec(), el(), await ed();
  let t = eh();
  if (!t) {
    ev();
    return;
  }
  await eb(t);
})().catch((e) => {
  console.warn("[jobright] failed to bootstrap helper:", e);
});
export {
  g as HOST_ID,
  D as agentOriginalResume,
  j as agentResumeId,
  I as agentTailorId,
  R as cancelAutofillInstance,
  k as config,
  L as getAutofillInstance,
  F as jobId,
  _ as setAutofillInstance,
  P as setCurrentJobId
};
