/**
 * Parcel module id: aTDh5
 * Resolved path: src/core/utils.js
 * Dependencies:
 *   ./supported-sites -> lpxpl  =>  src/core/supported-sites.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~enums -> drZvv  =>  src/enums.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "clearIframeLoadedStateForTest", () => d), n.export(r,
    "markIframeLoadedFromMessage", () => f), n.export(r, "observeSupportedAutofillIframe", () => g),
  n.export(r, "shouldActivateDynamicIframeSupport", () => b), n.export(r, "startIframeAutoFill",
  () => w), n.export(r, "shouldStartIframeAutofill", () => S), n.export(r, "checkIframeCoverLetter",
    () => E), n.export(r, "updateIframeUserInfo", () => x), n.export(r, "focusIframeLabel", () =>
  C), n.export(r, "submitAgentApplication", () => A), n.export(r, "cancelIframeAutofill", () => k),
  n.export(r, "skipIframeAutofill", () => T), n.export(r, "isDomainMatch", () => F), n.export(r,
    "matchesAnyDomain", () => I), n.export(r, "checkPageSourceContains", () => j), n.export(r,
    "isDomainOrEmbedded", () => D), n.export(r, "isExcludedPage", () => q), n.export(r,
    "checkSupportDomain", () => U), n.export(r, "checkSupportStatus", () => H), n.export(r,
    "checkSupportDomainLevel", () => Y), n.export(r, "checkSupportIframeSrc", () => z), n.export(r,
    "shouldSkipAutofillIframeSrc", () => V), n.export(r, "getExtensionVersion", () => W), n.export(
    r, "collectFormDataWithRepeatingGroups", () => G), n.export(r, "removeEndStrings", () => K), n
  .export(r, "findClosestStringId", () => X), n.export(r, "levenshteinDistance", () => J);
var o = e("~enums"),
  i = e("./supported-sites");
let a = new WeakMap,
  l = 2e3,
  s = 500,
  u = 1e4;

function c(e) {
  return new Promise(t => setTimeout(t, e))
}

function d() {
  a = new WeakMap
}

function f(e, t) {
  "undefined" != typeof window && (window.iframeLoaded = !0), e && "object" == typeof e && a.set(
  e, {
    url: t,
    loadedAt: Date.now()
  })
}

function p(e) {
  return !e || z(e) && !V(e)
}

function m(e, t) {
  let r = e.contentWindow;
  if (!r) return !1;
  let n = a.get(r);
  return !!n && !(n.loadedAt < t) && p(n.url)
}

function h() {
  let e = document.getElementsByTagName("iframe");
  return Array.from(e).filter(e => e.src && z(e.src) && !V(e.src))
}

function g(e) {
  if ("undefined" == typeof window || "undefined" == typeof document) return () => {};
  let t = () => {
      h().length > 0 && e()
    },
    r = t => {
      if (t.data?.type !== o.IFRAME_EVENTS.IFRAME_LOADED) return;
      let r = h().find(e => e.contentWindow === t.source);
      r && e()
    },
    n = "undefined" != typeof MutationObserver && document.documentElement ? new MutationObserver(
    t) : null;
  return n?.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["src"],
    childList: !0,
    subtree: !0
  }), window.addEventListener("message", r), t(), () => {
    n?.disconnect(), window.removeEventListener("message", r)
  }
}

function b(e) {
  return e.isSupportedNow && !e.hasActivated
}

function y(e, t, r) {
  let n = Date.now();
  return new Promise(i => {
    let a = !1,
      l = null,
      s = null,
      u = () => {
        l && clearInterval(l), s && clearTimeout(s)
      },
      c = e => {
        a || (a = !0, u(), i(e))
      },
      d = () => {
        if (m(e, n)) {
          t(e), c(!0);
          return
        }
        e.contentWindow?.postMessage({
          type: o.IFRAME_EVENTS.REQUEST_IFRAME_LOADED,
          url: e.src
        }, "*")
      };
    d(), l = setInterval(d, r.pollIntervalMs), s = setTimeout(() => c(!1), r.timeoutMs)
  })
}
async function v(e, t = {}) {
  let r = h();
  if (!r.length) return !1;
  let n = {
      pollIntervalMs: t.pollIntervalMs ?? s,
      timeoutMs: t.timeoutMs ?? u
    },
    o = await Promise.all(r.map(t => y(t, e, n)));
  return o.some(Boolean)
}
let w = async (e = !1, t = {}) => (await c(t.initialDelayMs ?? l), v(t => {
  t.contentWindow?.postMessage({
    type: o.IFRAME_EVENTS.EXECUTE_IFRAME_FUNCTION,
    data: {
      timestamp: Date.now(),
      fromAgent: e
    },
    url: t.src
  }, "*")
}, t));

function S(e) {
  if (!e) return !0;
  try {
    let t = new URL(window.location.href),
      r = t.pathname.replace(/\/+$/, ""),
      n = F(t.hostname, e) && ("/careers/apply" === r || /^\/careers\/apply\/[^/]+$/.test(r) ||
        /^\/careers\/job\/[^/]+\/apply$/.test(r) || "/careerhub/explore/jobs/apply" === r && !!t
        .searchParams.get("pid"));
    return !n
  } catch {
    return !0
  }
}
let E = () => {
    setTimeout(() => {
      v(e => {
        e.contentWindow?.postMessage({
          type: o.IFRAME_EVENTS.CHECK_IFRAME_COVER_LETTER,
          data: {
            timestamp: Date.now()
          },
          url: e.src
        }, "*")
      })
    }, 2e3)
  },
  x = e => {
    v(t => {
      t.contentWindow?.postMessage({
        type: o.IFRAME_EVENTS.UPDATE_IFRAME_DATA,
        data: e,
        url: t.src
      }, "*")
    })
  },
  C = e => {
    v(t => {
      t.contentWindow?.postMessage({
        type: o.IFRAME_EVENTS.FOCUS_IFRAME_LABEL,
        data: e,
        url: t.src
      }, "*")
    })
  },
  A = () => {
    v(e => {
      e.contentWindow?.postMessage({
        type: o.IFRAME_EVENTS.SUBMIT_APPLICATION,
        url: e.src
      }, "*")
    })
  },
  k = () => {
    v(e => {
      e.contentWindow?.postMessage({
        type: o.IFRAME_EVENTS.CANCEL_AUTO_FILL,
        url: e.src
      }, "*")
    })
  },
  T = () => {
    v(e => {
      e.contentWindow?.postMessage({
        type: o.IFRAME_EVENTS.SKIP_AUTO_FILL,
        url: e.src
      }, "*")
    })
  };

function F(e, t) {
  return e === t || e.endsWith("." + t)
}

function I(e, t) {
  return t.some(t => F(e, t))
}

function j(e) {
  if ("undefined" == typeof document) return !1;
  let t = `script[src*="${e}"], link[href*="${e}"]`;
  return null !== document.querySelector(t)
}

function D(e, t, r) {
  return F(e, t) || j(r ?? t)
}

function P(e) {
  return (0, i.PAGE_SOURCE_ATS_LIST).some(([t, r]) => !F(e, r) && j(t))
}

function _(e, t, r) {
  let n = r.domains.some(e => F(t, e)),
    o = r.patterns.some(t => t.includes(e.href));
  return n || o
}

function L(e, t) {
  let r = `${e.pathname}${e.search}${e.hash}`;
  return (t.pathRegex?.test(e.pathname) ?? !1) || (t.urlRegex?.test(r) ?? !1)
}

function R(e, t) {
  return (0, i.CONSTRAINED_SITE_RULES).some(r => !!_(e, t, r) && L(e, r))
}

function O(e, t) {
  return (0, i.CONSTRAINED_SITE_RULES).some(r => _(e, t, r) && !L(e, r))
}

function M(e, t) {
  return (0, i.SUPPORT_DOMAINS).some(e => F(t, e)) || (0, i.SUPPORT_PATTERNS).some(t => t.includes(e
    .href)) || R(e, t) || P(t)
}

function N(e, t) {
  return !O(e, t) && (M(e, t) || (0, i.QUERY_PARAM_LIST).some(t => e.searchParams.has(t)))
}

function $(e) {
  return RegExp(`/${e}(?=/|$)`, "i")
}
let B = ["confirmation", "applyConfirmation", "careers/chatbot", "success(?:ful)?", "thank[_-]?you",
  "thanks", "SuccessfulRegistration"
].map($);

function q(e) {
  return B.some(t => t.test(e.pathname))
}

function U() {
  let e = new URL(window.location.href);
  if (q(e)) return !1;
  let t = e.hostname;
  return !(0, i.IFRAME_ONLY_DOMAINS).some(e => F(t, e)) && M(e, t)
}

function H(e) {
  try {
    let t = e || new URL(window.location.href);
    if (q(t)) return !1;
    let r = t.hostname;
    if (O(t, r)) return !1;
    if (N(t, r)) return !0;
    if ((0, i.IFRAME_CHECK_PATTERN).some(e => F(r, e))) return !1;
    let n = document.getElementsByTagName("iframe");
    for (let e of n)
      if (e.src && z(e.src)) return !0;
    return !1
  } catch (e) {
    return console.error("checkSupportStatus error:", e), !1
  }
}

function Y(e) {
  try {
    let t = e || new URL(window.location.href);
    return I(t.hostname, i.SUPPORT_HOSTS)
  } catch (e) {
    return console.error("checkSupportDomainLevel error:", e), !1
  }
}

function z(e) {
  if (!e) return !1;
  try {
    let t = new URL(e);
    if (q(t)) return !1
  } catch {}
  return (0, i.IFRAME_CHECK_PATTERN).some(t => e.includes(t))
}

function V(e) {
  if (!e) return !1;
  try {
    let t = new URL(e, "https://invalid.local"),
      r = (t.searchParams.get("calledFrom") || "").toLowerCase();
    return F(t.hostname, "brassring.com") && /^\/TGNewUI\/Profile\/Home\/ProfileBuilder$/i.test(t
      .pathname) && ("resume" === r || "coverletter" === r)
  } catch {
    return !1
  }
}

function W() {
  return "undefined" == typeof chrome ? "" : chrome?.runtime?.getManifest?.()?.version ?? ""
}

function G() {
  let e = {},
    t = 0,
    r = 0,
    n = -1,
    o = 0,
    i = -1;

  function a(e) {
    let t = e.match(/(.*)\[(\d+)\](.+)/);
    if (!t) return null;
    let r = t[3].replace(/^\[|\]$/g, "");
    return r ? {
      groupName: t[1],
      index: Number.parseInt(t[2], 10),
      fieldName: r
    } : null
  }

  function l(e) {
    let t = e.match(/\[(\d+)\]$/);
    return t ? Number.parseInt(t[1], 10) : null
  }

  function s(e) {
    let t = e.labels ? e.labels[0] : null;
    if (t || e.id && (t = document.querySelector(`label[for="${e.id}"]`))) return t.textContent
      .trim();
    let r = e.parentElement;
    return "LABEL" === r.tagName ? r.textContent.trim() : e.name || ""
  }

  function u(u) {
    let c = u.name,
      d = "checkbox" === u.type ? u.checked : u.value,
      f = s(u);
    t += 1;
    let p = a(c);
    if (p) {
      let {
        groupName: t,
        index: o,
        fieldName: i
      } = p;
      r += 1, n = Math.max(n, o), e[t] || (e[t] = []), e[t][o] || (e[t][o] = {}), e[t][o][i] = {
        value: d,
        label: f
      }
    } else {
      let t = l(c);
      null !== t && (o += 1, i = Math.max(i, t)), e[c] = {
        value: d,
        label: f
      }
    }
  }
  return document.querySelectorAll("input, select, textarea").forEach(e => {
    ("radio" !== e.type && "checkbox" !== e.type || e.checked) && u(e)
  }), console.debug("[AutofillSubmitStatus][FormData]", {
    processedElementCount: t,
    repeatingGroupFieldCount: r,
    maxRepeatingGroupIndex: n,
    terminalNumericKeyCount: o,
    maxTerminalNumericKeyIndex: i
  }), e
}

function K(e) {
  return e.replace(/(\/autofillWithResume|\/applyManually|\/useMyLastApplication)$/, "")
}

function X(e, t) {
  if (!t || 0 === t.length) return -1;
  let r = t.map(t => J(e, t)),
    n = 0,
    o = r[0];
  for (let e = 1; e < r.length; e++) r[e] < o && (o = r[e], n = e);
  return n
}

function J(e, t) {
  if (0 === e.length) return t.length;
  if (0 === t.length) return e.length;
  let r = [];
  for (let t = 0; t <= e.length; t++) r[t] = [t];
  for (let e = 0; e <= t.length; e++) r[0][e] = e;
  for (let n = 1; n <= e.length; n++)
    for (let o = 1; o <= t.length; o++) {
      let i = e[n - 1] === t[o - 1] ? 0 : 1;
      r[n][o] = Math.min(r[n - 1][o] + 1, r[n][o - 1] + 1, r[n - 1][o - 1] + i)
    }
  return r[e.length][t.length]
}

