/**
 * Parcel module id: 6WEEz
 * Resolved path: contents/sites/smartrecruiters/entry-preflow.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/pre-autofill-flow/account-flow-state -> 8WOx2  =>  _tilde_contents/pre-autofill-flow/account-flow-state.js
 *   ~contents/pre-autofill-flow/dom -> fChu0  =>  _tilde_contents/pre-autofill-flow/dom.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "smartRecruitersEntrySession", () => d), n.export(r,
  "createSmartRecruitersEntryAdapter", () => h), n.export(r, "smartRecruitersEntryAdapter", () =>
  g);
var o = e("~contents/pre-autofill-flow/account-flow-state"),
  i = e("~contents/pre-autofill-flow/dom");
let a = "smartrecruiters-entry",
  l = "https://jobs.smartrecruiters.com",
  s = /^\/oneclick-ui\/company\/([^/]+)\/publication\/[^/]+\/?$/;

function u(e) {
  try {
    let t = new URL(e);
    return t.origin === l ? t : null
  } catch {
    return null
  }
}

function c(e) {
  let t = u(e);
  return t && s.test(t.pathname) ? t.origin + t.pathname.replace(/\/$/, "") : null
}
let d = (0, o.createOneShotSessionStore)({
  storageKey: "jobright:smartrecruiters:entry-autofill",
  ttlMs: 3e5,
  validatePayload: e => "string" == typeof e && c(e) === e
});

function f({
  url: e,
  document: t
}) {
  let r = u(e),
    n = r?.pathname.match(/^\/([^/]+)\/\d+[^/]*\/?$/);
  if (!n) return null;
  let o = Array.from(t.querySelectorAll('a#st-apply, a[data-sr-track="apply"]')).filter(e => {
      let t = u(e.href);
      return t?.pathname.match(s)?.[1] === n[1] && !e.hasAttribute("download") && (!e.target ||
        "_self" === e.target) && "true" !== e.getAttribute("aria-disabled") && (0, i
        .isVisiblePreAutofillElement)(e)
    }),
    a = new Set(o.map(e => c(e.href)));
  return 1 === a.size ? o[0] : null
}

function p(e) {
  let t = e.querySelector('input:not([type="hidden"]):not([disabled]):not([readonly])');
  return !!(t && (0, i.isVisiblePreAutofillElement)(t) || "shadowRoot" in e && e.shadowRoot && p(e
    .shadowRoot)) || Array.from(e.querySelectorAll("*")).some(e => e.shadowRoot && p(e
    .shadowRoot))
}

function m({
  document: e
}) {
  let t = e.querySelector("oc-personal-information");
  return !!(t && p(t))
}

function h({
  session: e,
  waitForForm: t
}) {
  let r = t => {
      let r = c(t.url);
      return !!(r && e.peek()?.payload === r && m(t))
    },
    n = t ?? (e => new Promise(t => {
      let n = r => {
          clearInterval(i), clearTimeout(a), e.document.removeEventListener("CancelAutoFill",
            o), e.signal?.removeEventListener("abort", o), t(r)
        },
        o = () => n(!1),
        i = setInterval(() => {
          r({
            ...e,
            url: e.document.location.href
          }) && n(!0)
        }, 250),
        a = setTimeout(() => n(!1), 15e3);
      e.document.addEventListener("CancelAutoFill", o, {
        once: !0
      }), e.signal?.addEventListener("abort", o, {
        once: !0
      }), e.signal?.aborted && o()
    }));
  return {
    flowId: a,
    detect(e) {
      if ("smartrecruiters" !== e.targetName) return null;
      let t = f(e) ? "detail" : r(e) ? "application" : null;
      return t ? {
        flowId: a,
        pageKind: t,
        ctaText: "Autofill"
      } : null
    },
    shouldResume: e => r(e),
    async start(t) {
      if (t.signal?.aborted) throw e.clear(), Error("SmartRecruiters entry cancelled");
      if (!r(t)) {
        let r = f(t),
          o = r && c(r.href);
        if (console.info("[SmartRecruiters][Entry] navigation-check", {
            entryFound: !!r,
            pending: !!e.peek()
          }), !r || !o) throw Error("SmartRecruiters application entry unavailable");
        try {
          if (e.peek()?.payload !== o) {
            if (e.save(o), e.peek()?.payload !== o) throw Error(
              "SmartRecruiters entry session unavailable");
            console.info("[SmartRecruiters][Entry] click-application-entry"), r.click()
          }
          if (!await n(t)) throw Error("SmartRecruiters entry timed out or cancelled")
        } catch (t) {
          throw e.clear(), console.warn("[SmartRecruiters][Entry] navigation-stopped", {
            reason: String(t)
          }), t
        }
      }
      let o = t.document.location?.href || t.url;
      if (!r({
          ...t,
          url: o
        })) throw e.clear(), Error("SmartRecruiters application is not ready");
      e.consume() && (console.info("[SmartRecruiters][Entry] resume-standard-autofill"), await t
        .startStandardAutofill())
    }
  }
}
let g = h({
  session: d
})

