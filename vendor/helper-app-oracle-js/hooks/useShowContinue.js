/**
 * Parcel module id: 7dIdK
 * Resolved path: hooks/useShowContinue.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~components/NextPageButton/navigation-state -> d4qMp  =>  _tilde_components/NextPageButton/navigation-state.js
 *   ~contents/crawler/target -> kkscK  =>  _tilde_contents/crawler/target.js
 *   ~contents/sites/dayforce/auth -> 1TnOy  =>  _tilde_contents/sites/dayforce/auth.js
 *   ~contents/sites/dayforce/navigation -> hbWOC  =>  _tilde_contents/sites/dayforce/navigation.js
 *   ~contents/sites/walmart -> 3a5UU  =>  _tilde_contents/sites/walmart.js
 *   ~core/observer-scheduler -> 6ejQS  =>  _tilde_core/observer-scheduler.js
 *   ~core/pagenation -> l1kUK  =>  _tilde_core/pagenation.js
 *   ~hooks/useShowContinueState -> cFD6N  =>  _tilde_hooks/useShowContinueState.js
 *   ~hooks/useShowSubmitted -> lxTxV  =>  _tilde_hooks/useShowSubmitted.js
 *   ~store/autofillResult -> hCUzf  =>  _tilde_store/autofillResult.js
 *   ~store/url -> b53L3  =>  _tilde_store/url.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => H);
var o = e("react"),
  i = e("~contents/crawler/target"),
  a = e("~contents/sites/dayforce/auth"),
  l = e("~contents/sites/dayforce/navigation"),
  s = e("~contents/sites/walmart"),
  u = e("~core/pagenation"),
  c = e("~hooks/useShowSubmitted"),
  d = n.interopDefault(c),
  f = e("~hooks/useShowContinueState"),
  p = e("~core/observer-scheduler"),
  m = e("~store/autofillResult"),
  h = e("~store/url"),
  g = e("~components/NextPageButton/navigation-state");
let b = ["myworkday", "phenom", "adobe", "tesla", "amazon", "apple", "adpRecruiting",
    "adpWorkforceNow", "adpMyJobs", "oraclecloud", "successfactors", "hrmdirect", "paylocity",
    "icims", "google", "cisco", "isolved", "brassring", "jacobs", "jobdiva", "walmart", "jobvite",
    "dayforce", "smartrecruiters", "paycomonline", "ripplehire", "taleo"
  ],
  y =
  'button[title="Next"][name="Next"][type="button"], button[type="submit"][value="apply"], span[role="button"][id*="_submitBtn"], span[role="button"].rcmSaveButton';

function v(e) {
  if (!(e instanceof HTMLElement)) return !1;
  let t = "function" == typeof e.checkVisibility;
  return t ? e.checkVisibility() ?? !1 : !!e.offsetParent
}

function w() {
  let e = document.querySelector(
    '[data-dojo-attach-point="thePagerDualNext"], [data-dojo-attach-point="thePagerNext"]');
  if (v(e)) return !0;
  let t = Array.from(document.querySelectorAll(
    'button, input[type="submit"], input[type="button"], [role="button"]')).find(e => {
    if (!v(e)) return !1;
    let t = (e.textContent || e.getAttribute("value") || e.getAttribute("aria-label") || "")
      .trim().toLowerCase();
    return t.includes("submit application") || "submit" === t
  });
  return !!t
}

function S() {
  let e = document.getElementById("ja_sv_cw_next_footer_btn");
  if (v(e)) return !0;
  let t = document.querySelector(u.ADP_WORKFORCENOW_RECAPTCHA_CONTINUE_BUTTON_SELECTOR);
  if (v(t)) return !0;
  let r = Array.from(document.querySelectorAll(
    'button, input[type="submit"], input[type="button"], [role="button"]')).find(e => {
    if (!v(e)) return !1;
    let t = (e.textContent || e.getAttribute("value") || e.getAttribute("aria-label") || "")
      .trim().toLowerCase();
    return t.includes("submit")
  });
  return !!r
}

function E() {
  return Array.from(document.querySelectorAll(u.ADP_MYJOBS_ADVANCE_BUTTON_SELECTOR)).some(e => v(
    e) && (0, u.isAdpMyJobsAdvanceButton)(e))
}

function x(e) {
  let t = document.getElementById("apply-step-continue-button"),
    r = document.querySelector(
      'li.apply-progress-step[aria-current="step"] .apply-progress-label span')?.textContent?.trim()
    .toLowerCase() || "",
    n = e?.includes("stepName=reviewinfo"),
    o = r.includes("review") && r.includes("submit");
  return !!t || !!n || o
}

function C(e) {
  let t = document.querySelector(
      '[data-automation-id="progressBar"] [data-automation-id="progressBarActiveStep"] label:last-of-type'
      ),
    r = t?.textContent?.trim().toLowerCase();
  return "review" === r || e
}

function A() {
  return !!(0, g.getWorkdayNextPageButtonTarget)(document)
}

function k() {
  let e = document.querySelector(
    'form.rjsf #next, form.rjsf button#next, form.rjsf button[aria-label="Continue"], form.rjsf button[type="submit"], form.rjsf input[type="submit"]'
    );
  if (!v(e)) return !1;
  let t = (e?.textContent || e?.getAttribute("value") || e?.getAttribute("aria-label") || "").trim()
    .toLowerCase();
  return t.includes("continue") || t.includes("submit") || t.includes("apply")
}

function T() {
  let e = Array.from(document.querySelectorAll('button, [role="button"]'));
  return e.some(e => {
    if (!v(e) || e.closest("#jobright-helper-id")) return !1;
    let t = (e.textContent || e.getAttribute("value") || e.getAttribute("aria-label") || "")
      .trim().toLowerCase(),
      r = e.getAttribute("data-automation-id");
    return "next" === t || "submit" === t || "apply" === t || t.includes("next") || t.includes(
      "submit") || "pageFooterNextButton" === r || "bottom-navigation-next-button" === r
  })
}

function F() {
  let e = document.querySelector('button#next, button[atm-id="submit-button"]');
  if (!v(e)) return !1;
  let t = (e?.textContent || e?.getAttribute("value") || e?.getAttribute("aria-label") || "").trim()
    .toLowerCase();
  return t.includes("next") || t.includes("continue") || t.includes("submit") || t.includes("apply")
}

function I() {
  let e = document.querySelectorAll(
    "button#showstart:not([disabled]), button#shownext:not([disabled]), button[ng-click*='goStart']:not([disabled]), button[ng-click*='goNext']:not([disabled]), button[id*='submit'], button[ng-click*='submit'], button[type='submit'], input[type='submit']"
    );
  return Array.from(e).some(e => v(e))
}

function j() {
  return Array.from(document.querySelectorAll(u.JOBDIVA_ADVANCE_BUTTON_SELECTOR)).some(e => v(e) &&
    (0, u.isJobdivaAdvanceButton)(e))
}
let D = "";

function P() {
  let e = Array.from(document.querySelectorAll(u.JOBVITE_ADVANCE_BUTTON_SELECTOR)),
    t = e.filter(e => v(e)),
    r = Array.from(document.querySelectorAll("iframe")),
    n = `${e.length}:${t.length}:${r.length}`;
  return n !== D && (D = n, console.log("[jobvite-debug] getJobviteContinueVisible", {
    selector: u.JOBVITE_ADVANCE_BUTTON_SELECTOR,
    matchedCount: e.length,
    visibleCount: t.length,
    matched: e.slice(0, 5).map(e => ({
      tag: e.tagName,
      type: e.getAttribute("type"),
      ngClick: e.getAttribute("ng-click"),
      ariaLabel: e.getAttribute("aria-label"),
      classes: e.className,
      ngHide: e.classList.contains("ng-hide"),
      offsetParent: !!e.offsetParent,
      visible: v(e)
    })),
    hasJvApplyContainer: !!document.querySelector(".jv-apply-form-actions"),
    iframeCount: r.length,
    jobviteIframeSrcs: r.map(e => e.src).filter(e => e.includes("jobvite")),
    inIframe: window.self !== window.top,
    href: window.location.href
  })), t.length > 0
}

function _() {
  let e = document.querySelector(
    'button[id="1578-save"].saveButton[name="save"][type="submit"], button[id="1578-save"].tc_formButton[type="submit"], form.tpt_wizard button.saveButton[type="submit"], form.tpt_wizard button[id$="-save"][type="submit"], form.tpt_wizard button[type="submit"]'
    );
  return v(e)
}

function L() {
  return !!(0, s.getCurrentAdvanceButton)()
}

function R() {
  let e = document.querySelector('button#btn-submit[data-automation-id="btnNext"]');
  return e instanceof HTMLButtonElement && !e.disabled && v(e)
}

function O() {
  return (0, a.getDayforceAuthPageMode)() ? !!(0, l.getDayforceRegistrationNextTarget)() : Array
    .from(document.querySelectorAll(
      'button[test-id="application-next-step"], button[test-id="application-submit"]')).some(e => v(
      e))
}

function M() {
  let e = Array.from(document.querySelectorAll(u.TALEO_CWS_V2_NEXT_BUTTON_SELECTOR)).some(e => v(
    e) && !e.closest("#jobright-helper-id") && "true" !== e.getAttribute("aria-disabled"));
  return !!e || Array.from(document.querySelectorAll(u.TALEO_CLASSIC_SAVE_AND_CONTINUE_SELECTOR))
    .some(e => v(e) && !e.closest("#jobright-helper-id") && !e.disabled)
}

function N() {
  return Array.from(document.querySelectorAll(u.SMARTRECRUITERS_ADVANCE_BUTTON_SELECTOR)).some(e =>
    v(e) && (0, u.isSmartRecruitersAdvanceButton)(e))
}

function $() {
  return Array.from(document.querySelectorAll(u.PAYCOMONLINE_ADVANCE_BUTTON_SELECTOR)).some(e => v(
    e) && !e.closest("#jobright-helper-id") && (0, u.isPaycomOnlineAdvanceButton)(e))
}

function B() {
  return Array.from(document.querySelectorAll(y)).some(e => {
    if (!v(e)) return !1;
    let t = e.getAttribute("id") ?? "",
      r = e.getAttribute("name")?.trim().toLowerCase() ?? "",
      n = e.getAttribute("title")?.trim().toLowerCase() ?? "",
      o = e.getAttribute("value")?.trim().toLowerCase() ?? "",
      i = e.textContent?.trim().toLowerCase() ?? "";
    return "next" === r && "next" === n || t.includes("_submitBtn") || "apply" === o || i
      .includes("apply")
  })
}
let q = "";

function U() {
  let e = document.querySelector(u.RIPPLEHIRE_ADVANCE_BUTTON_SELECTOR),
    t = (e?.textContent || "").replace(/\s+/g, " ").trim(),
    r = t.toLowerCase(),
    n = v(e),
    o = "continue" === r || "submit application" === r,
    i = `${!!e}:${n}:${r}`;
  return i !== q && (q = i, console.log("[RippleHire] sidebar navigation visibility", {
    selector: u.RIPPLEHIRE_ADVANCE_BUTTON_SELECTOR,
    matched: !!e,
    visible: n,
    text: t,
    isAdvanceButton: o
  })), n && o
}

function H() {
  let e = (0, i.getTargetName)(),
    t = (0, m.useAutofillResultStore)(e => !!e.autoFillResult),
    r = (0, m.useAutofillResultStore)(e => e.isFilling),
    n = (0, m.useAutofillResultStore)(e => e.hasClickedAutoFill),
    l = (0, h.useUrlStore)(e => e.currentTabUrl),
    s = (0, d.default)(),
    [u, c] = (0, o.useState)(!1);
  return (0, o.useEffect)(() => {
    let n = b.includes(e);
    if (!(0, f.shouldRunContinueVisibilityMonitor)({
        isSupported: n,
        isFilling: r
      })) {
      n || c(!1);
      return
    }
    "jobvite" === e && console.log("[jobvite-debug] useShowContinue mounted", {
      targetName: e,
      href: window.location.href,
      hostname: window.location.hostname,
      hasAutoFillResult: t,
      submitted: s,
      inIframe: window.self !== window.top
    });
    let o = () => {
      if ("apple" === e) {
        c(x(l));
        return
      }
      if ("adpRecruiting" === e) {
        c(w());
        return
      }
      if ("adpWorkforceNow" === e) {
        c(S());
        return
      }
      if ("adpMyJobs" === e) {
        c(E());
        return
      }
      if ("phenom" === e) {
        c(k());
        return
      }
      if ("oraclecloud" === e) {
        c(T());
        return
      }
      if ("cisco" === e) {
        c(F());
        return
      }
      if ("brassring" === e) {
        c(I());
        return
      }
      if ("jobdiva" === e) {
        c(j());
        return
      }
      if ("jobvite" === e) {
        let e = P();
        c(e);
        return
      }
      if ("jacobs" === e) {
        c(_());
        return
      }
      if ("walmart" === e) {
        c(L());
        return
      }
      if ("myworkday" === e) {
        c(A());
        return
      }
      if ("paylocity" === e) {
        c(R());
        return
      }
      if ("dayforce" === e) {
        c(O());
        return
      }
      if ("taleo" === e) {
        c(M());
        return
      }
      if ("smartrecruiters" === e) {
        c(N());
        return
      }
      if ("paycomonline" === e) {
        c($());
        return
      }
      if ("successfactors" === e) {
        c(B());
        return
      }
      if ("ripplehire" === e) {
        c(U());
        return
      }
      c(C(s))
    };
    o();
    let i = (0, p.createSingleFlightScheduler)({
        run: o,
        schedule: e => window.requestAnimationFrame(e),
        cancel: e => window.cancelAnimationFrame(e)
      }),
      a = new MutationObserver(i.schedule);
    a.observe(document.body, {
      childList: !0,
      subtree: !0,
      characterData: !0,
      attributes: !0,
      attributeFilter: ["aria-disabled", "aria-hidden", "aria-label", "class",
        "data-automation-id", "data-testid", "disabled", "hidden", "name", "style",
        "title", "type", "value"
      ]
    });
    let u = window.setInterval(o, 800);
    return () => {
      a.disconnect(), i.cancel(), window.clearInterval(u)
    }
  }, [e, l, s, r]), !!b.includes(e) && ("apple" === e || "dayforce" === e && (0, a
      .getDayforceAuthPageMode)() ? u : "adpMyJobs" === e || "brassring" === e || "paylocity" ===
    e || "paycomonline" === e || "successfactors" === e || "smartrecruiters" === e ||
    "ripplehire" === e ? t && u : "walmart" === e ? (0, f.shouldShowWalmartContinueButton)(t, n,
      u) : "myworkday" === e ? (0, f.shouldShowNavigationAfterAutofill)(t, n, u) : !!t || u)
}

