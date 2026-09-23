import * as o from "react/jsx-runtime";
import * as i from "@ant-design/cssinjs";
import * as a from "react";
import * as l from "react-dom/client";
import * as s from "url:../global.less";
import * as c from "url:../inter.css";
import * as f from "@plasmohq/messaging";
import * as p from "@plasmohq/storage/hook";
import * as m from "./api/env-resolver.js";
import * as h from "./components/DraggableIcon.js";
import * as b from "./components/LinkedinBannerProvider.js";
import * as v from "./components/Popups/FeedbackPopup.js";
import * as S from "./components/StarRatingModal.js";
import * as x from "./components/TextareaGenerateButton.js";
import * as C from "./components/TraceProvider.js";
import * as k from "./contents.js";
import * as T from "./contents/crawler/factory.js";
import * as I from "./contents/shared/autofill-instance-lifecycle.js";
import * as j from "./contents/shared/click-jr-injector.js";
import * as D from "./contents/shared/css-assets.js";
import * as P from "./contents/shared/early-url-normalization.js";
import * as _ from "./contents/shared/helper-host-stacking.js";
import * as L from "./contents/sites/autofill-answer-pair-tracking.ts";
import * as R from "./core/iframeEventHandle.ts";
import * as O from "./core/utils.ts";
import * as M from "./enums.js";
import * as N from "./hooks/useOpenNewTab.ts";
import * as B from "./hooks/useSubscribeTabUrl.ts";
import * as U from "./hooks/useTrackAutofillStuck.ts";
import * as H from "./store/feedback.ts";
import * as Y from "./store/hide.ts";
import * as z from "./store/profile.ts";
import * as V from "./store/setting.ts";
import * as G from "./utils/hide-logic.ts";
import * as K from "./utils/job-id.ts";
import * as X from "./utils/starRating.ts";
import * as J from "./utils/string.ts";
import * as Q from "./utils/trace.ts";
const u = { default: s };
const d = { default: c };
const g = { default: h };
const y = { default: b };
const w = { default: v };
const E = { default: S };
const A = { default: C };
const F = { default: T };
const $ = { default: N };
const q = { default: B };
const W = { default: V };
let Z = "jobright-helper-root", ee = "jobright-helper-document-font-style", et = "jobright-helper-font-style", er = "jobright-helper-style", en = "__jobrightGetAutofillInstance", eo = "__jobrightTurbolinksHelperRemountActive", ei = new URLSearchParams(window.location.search).get(K.JOB_ID_QUERY_KEY), ea = "", el = null, es = null;
function eu(e) {
  let t = document.getElementById(k.HOST_ID)?.shadowRoot;
  if (!t) return false;
  let r = t.getElementById("jobright-helper-style");
  return !!r && (r.textContent === e || (r.textContent = e, true));
}
function ec(e) {
  if (!e) return false;
  try {
    let t = new URL(window.location.href);
    return t.searchParams.set(K.JOB_ID_QUERY_KEY, e), window.history.replaceState(window.history.state, "", t.toString()), ei = e, k.setCurrentJobId(e), j.keepJobIdInUrl(e, { originalHost: window.location.hostname }), true;
  } catch (e2) {
    console.warn("[jobright] failed to repair URL with referrer-recovered jr_id:", e2);
  }
  return false;
}
async function ed() {
  if (ei) {
    k.setCurrentJobId(ei);
    return;
  }
  let e = K.extractTrustedJobIdFromNestedUrlParams(window.location.href, window.location.hostname, window.location.pathname) || K.extractTrustedJobIdFromReferrer(document.referrer, window.location.hostname, window.location.pathname);
  if (!ec(e) && window.top === window.self) {
    if (P.shouldResolveGoHireDroppedJobIdUrl(window.location.href)) try {
      let e2 = await f.sendToBackground({ name: "resolveJobIdByUrl", body: { pageUrl: window.location.href } }), t = "string" == typeof e2?.jobId ? e2.jobId.trim() : "";
      if (ec(t)) return;
    } catch (e2) {
      console.warn("[jobright] failed to recover GoHire jr_id by URL:", e2);
    }
    try {
      let e2 = await f.sendToBackground({ name: "getTabJobId", body: { currentUrl: window.location.href } }), t = "string" == typeof e2?.jobId ? e2.jobId.trim() : "";
      ec(t);
    } catch (e2) {
      console.warn("[jobright] failed to recover tab-bound jr_id:", e2);
    }
  }
}
function ef() {
  ei && window.top === window.self && f.sendToBackground({ name: "setTabJobId", body: { jobId: ei, pageUrl: window.location.href } }).catch((e) => {
    console.warn("[jobright] failed to bind jr_id to tab:", e);
  });
}
function ep() {
  ei && j.attachClickJrInjector();
}
let em = null;
function eh() {
  let e = O.checkSupportIframeSrc(window.location.href) && window.top !== window.self || window.top === window.self && O.checkSupportDomain(), t = !!em;
  return em = I.ensureAutofillInstance(em, e, () => F.default.create()), !t && em && (k.setAutofillInstance(em), console.debug(`[AutofillInstance] ${JSON.stringify({ reason: "created", hostname: window.location.hostname, topFrame: window.top === window.self })}`)), em;
}
async function eg() {
  eh();
}
function eb() {
  globalThis[en] = eh;
}
function ey() {
  O.checkSupportIframeSrc(window.location.href) && window.top !== window.self && window.top.postMessage(J.cleanObject({ type: M.IFRAME_EVENTS.IFRAME_LOADED, url: window.location.href }), { targetOrigin: "*" });
}
function ev() {
  R.registerIframeEventHandle(), R.redirctAgentIframePages();
}
function ew() {
  let e = new URL(window.location.href);
  returnO.isDomainMatch(e.hostname, "greenhouse.io") || e.searchParams.get("gh_jid") || e.searchParams.get("gh_src");
}
function eS(e, t, r) {
  let n = e.getElementById(t), o2 = n || document.createElement("style");
  o2.id = t, o2.textContent !== r && (o2.textContent = r), n || e.appendChild(o2);
}
function eE(e, t) {
  let r = document.getElementById(e), n = r || document.createElement("style");
  n.id = e, n.textContent !== t && (n.textContent = t), r || (document.head || document.documentElement).appendChild(n);
}
async function ex(e) {
  let t = await fetch(e);
  if (!t.ok) throw Error(`Failed to load extension asset ${e}`);
  return t.text();
}
function eC() {
  return es || (es = Promise.all([ex(d.default), ex(u.default)]).then(([e, t]) => {
    let r = D.resolveCssAssetUrls(t, u.default), n = r.match(/--iti-path-flags-1x:\s*url\(([^)]+)\)/)?.[1];
    return n ? console.debug("[jobright][helper-style] phone flag asset ready", { mode: n.includes("data:image/webp;base64,") ? "embedded" : "external", stylesheetUrl: u.default }) : console.warn("[jobright][helper-style] phone flag asset unavailable:", "missing --iti-path-flags-1x declaration"), { fontText: e, styleText: r };
  })), es;
}
function eA() {
  let e = el || document.getElementById(k.HOST_ID);
  return e || ((e = document.createElement("plasmo-csui")).id = k.HOST_ID, e.setAttribute("data-plasmo", k.HOST_ID)), el = e, _.applyHelperHostStackingStyle(e), e.isConnected || (document.body || document.documentElement).appendChild(e), e.shadowRoot || e.attachShadow({ mode: "open" });
}
async function ek() {
  let { fontText: e, styleText: t } = await eC(), r = eA();
  if (r.getElementById(Z)) return;
  eE(ee, e), eS(r, et, e), eS(r, er, t);
  let n = document.createElement("div");
  n.id = Z, r.appendChild(n), eL(n, t);
}
function eT() {
  let e = globalThis;
  e[eo] || (e[eo] = true, document.addEventListener("turbolinks:load", () => {
    let e2 = !!el?.isConnected;
    console.info("[jobright] Turbolinks navigation completed", { host: window.location.hostname, pathname: window.location.pathname, hostWasConnected: e2 }), ek().then(() => {
      console.info("[jobright] helper host ready after Turbolinks navigation", { host: window.location.hostname, pathname: window.location.pathname, reattached: !e2, hostConnected: !!el?.isConnected });
    }).catch((e3) => {
      console.warn("[jobright] failed to restore helper after Turbolinks navigation:", e3);
    });
  }));
}
function eF() {
  returnO.checkSupportStatus() || m.agentDomains.includes(new URL(window.location.href).hostname);
}
function eI() {
  let e = new URL(window.location.href);
  returnO.checkSupportStatus() || m.agentDomains.includes(e.hostname) && e.pathname.includes("/agent") || e.hostname.includes("linkedin.com");
}
function ej(e, t) {
  let r = m.agentDomains.includes(new URL(window.location.href).hostname);
  return !!(e?.logined && t && (5 === t.step || r));
}
function eD() {
  return window.top === window.self;
}
function eP() {
  let e = H.useFeedbackStore((e2) => e2.setShowStarRatingModal);
  returna.useEffect(() => {
    let t = (t2) => {
      t2.data?.type === "JOBRIGHT_SHOW_STAR_RATING_MODAL" && e(true);
    };
    return window.addEventListener("message", t), () => window.removeEventListener("message", t);
  }, [e]), a.useEffect(() => {
    X.resumePendingStarRating();
  }, []), null;
}
let e_ = () => {
  let e = Y.useHideStore((e2) => e2.displayIcon), t = Y.useHideStore((e2) => e2.setDisplayIcon), r = Y.useHideStore((e2) => e2.setClickOpenInAgent), n = z.useProfileStore((e2) => e2.initUserStage), l2 = z.useProfileStore((e2) => e2.initCreditFeed), s2 = z.useProfileStore((e2) => e2.resetPaymentData), u2 = z.useProfileStore((e2) => e2.userStage), c2 = H.useFeedbackStore((e2) => e2.openFeedbackPopup), d2 = H.useFeedbackStore((e2) => e2.showStarRatingModal), [h2, b2] = a.useState(() => !eI()), [v2, S2] = a.useState(false), [, C2] = p.useStorage("plugin-actived"), [, T2] = a.useState(true), [F2, I2] = a.useState(false), j2 = W.default((e2) => e2.defaultView), [D2, P2] = a.useState(eF), _2 = a.useRef(eI()), L2 = a.useCallback(async ({ resetPluginOnError: e2 = false } = {}) => {
    b2(false);
    try {
      if (await n(), eD()) {
        let { userStage: e3, userProfile: t2 } = z.useProfileStore.getState();
        await C2(ej(e3, t2));
      }
      await l2();
    } catch (t2) {
      throw e2 && eD() && await C2(false), t2;
    } finally {
      b2(true);
    }
  }, [l2, n, C2]);
  $.default(), q.default(), a.useLayoutEffect(() => {
    if (!h2) {
      S2(false);
      return;
    }
    S2(false);
    let e2 = 0, t2 = 0, r2 = false, n2 = () => {
      if (eu(ea)) {
        r2 || S2(true);
        return;
      }
      t2 >= 10 || (t2 += 1, e2 = window.requestAnimationFrame(n2));
    };
    return n2(), () => {
      r2 = true, e2 && window.cancelAnimationFrame(e2);
    };
  }, [h2]), a.useEffect(() => {
    if (m.agentDomains.includes(new URL(window.location.href).hostname)) {
      let e2 = chrome.runtime.getManifest(), t2 = e2.version, r2 = document.createElement("div");
      r2.style.display = "none", r2.id = "jobright-helper-version", r2.setAttribute("data-version", t2), document.body.appendChild(r2);
    }
  }, []), a.useEffect(() => {
    let e2 = async (e3) => {
      if ("urlUpdated" === e3.message) P2(eF()), eI() ? await L2() : b2(true);
      else if ("cookieChanged" === e3.message) try {
        await L2({ resetPluginOnError: true });
      } catch (e4) {
        console.warn("Failed to refresh profile after cookie change:", e4);
      } finally {
        s2();
      }
    };
    return chrome.runtime.onMessage.addListener(e2), () => {
      chrome.runtime.onMessage.removeListener(e2);
    };
  }, []);
  let R2 = W.default((e2) => e2.syncSettingsWithStorage), M2 = Y.useHideStore((e2) => e2.setOpenCard);
  a.useEffect(() => {
    R2().catch((e2) => {
      console.warn("[jobright] helper settings load failed; using defaults:", e2);
    }).finally(() => {
      I2(true);
    });
  }, []), a.useEffect(() => {
    if (!D2) {
      t(false);
      return;
    }
    let e2 = false;
    returnG.shouldHideOnDomain(window.location.hostname).then((r2) => {
      e2 || t(!r2);
    }), () => {
      e2 = true;
    };
  }, [D2]), a.useEffect(() => {
    if (eD()) returnO.observeSupportedAutofillIframe(() => {
      let e2 = eF();
      e2 && (P2(true), O.shouldActivateDynamicIframeSupport({ hasActivated: _2.current, isSupportedNow: e2 }) && (_2.current = true, console.info("[jobright] dynamic supported iframe activated", { host: window.location.hostname, reason: "supported_iframe_detected" }), L2().catch((e3) => {
        console.warn("[jobright] failed to initialize profile for dynamic supported iframe:", e3);
      })));
    });
  }, [L2]), a.useEffect(() => {
    F2 && ("Minimized" !== j2 || ei || m.agentDomains.includes(new URL(window.location.href).hostname) ? M2(true) : M2(false));
  }, [F2]), a.useEffect(() => {
    if (F2) return eO = async () => {
      t(true), M2(true), await Promise.all([G.restoreFromExtensionIcon(window.location.hostname), L2()]), eF() || T2(true), m.agentDomains.includes(window.location.hostname) && r(true);
    }, eR && eM(), () => {
      eO = null;
    };
  }, [F2]), a.useEffect(() => {
    if (!eI()) {
      b2(true);
      return;
    }
    L2().catch((e2) => {
      console.warn("Failed to initialize user stage and credit feed:", e2);
    });
  }, []), a.useEffect(() => {
    (async function() {
      let e2 = await f.sendToBackground({ name: "countExternalJobIds" });
      e2.success && e2.count >= 1e3 && Q.trackEvent("linkedin_external_job_ids_count_limit_reached", { external_job_ids_count: e2.count });
    })();
  }, []), U.useTrackAutofillStuck();
  let N2 = window.self === window.top, B2 = m.agentDomains.includes(new URL(window.location.href).hostname), V2 = D2 && !B2, K2 = N2 ? o.jsxs(o.Fragment, { children: [o.jsx(eP, {}), d2 && o.jsx(E.default, {}), c2 && o.jsx(i.StyleProvider, { container: document.getElementById(k.HOST_ID)?.shadowRoot, children: o.jsx(w.default, { variant: "modal-only" }) })] }) : null;
  return e ? N2 ? o.jsxs(A.default, { children: [o.jsxs(y.default, { userId: u2?.userId, children: [o.jsx(g.default, { hostId: k.HOST_ID, domainSupport: D2, helperReady: v2 }), V2 && o.jsx(x.TextareaGenerateButtonLayer, {})] }), K2] }) : o.jsx(A.default, { children: o.jsx(y.default, { userId: u2?.userId, children: V2 && o.jsx(x.TextareaGenerateButtonLayer, {}) }) }) : o.jsxs(A.default, { children: [o.jsx(y.default, { userId: u2?.userId, children: null }), K2] });
};
function eL(e, t) {
  ea = t, l.createRoot(e).render(o.jsx(e_, {}));
}
let eR = false, eO = null;
function eM() {
  if (!eO) {
    eR = true, console.info("[jobright] extension icon waiting for helper UI");
    return;
  }
  eR = false, eO().catch((e) => {
    console.warn("[jobright] extension icon open failed:", e);
  });
}
async function eN() {
  await ed(), ef(), ep(), await eg(), eb(), L.registerAutofillAnswerPairAnswerProvider(() => {
    let e = eh();
    return e?.getFalconResponseAnswerForTracking ? e.getFalconResponseAnswerForTracking() : e?.answer;
  }), ey(), ev(), eT(), ew() ? setTimeout(() => {
    ek().catch((e) => {
      console.warn("[jobright] failed to mount helper:", e);
    });
  }, 1500) : await ek();
}
export {
  eN as bootstrapJobrightHelperRuntime,
  eM as openJobrightHelperFromExtensionIcon
};
