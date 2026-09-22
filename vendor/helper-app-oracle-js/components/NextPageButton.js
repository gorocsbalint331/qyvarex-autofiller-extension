/**
 * Parcel module id: cb8Df
 * Resolved path: components/NextPageButton.js (oracle restore)
 * Dependencies:
 *   ./navigation-state -> d4qMp  =>  _tilde_components/NextPageButton/navigation-state.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   clsx -> jgTfo  =>  clsx.js
 *   data-base64:~assets/images/confirm.svg -> 4MriY  =>  data-base64__tilde_assets/images/confirm.svg__4MriY.js
 *   data-base64:~assets/images/play_b.svg -> jRKLn  =>  data-base64__tilde_assets/images/play_b.svg.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~contents/crawler/target -> kkscK  =>  _tilde_contents/crawler/target.js
 *   ~contents/sites/dayforce/auth -> 1TnOy  =>  _tilde_contents/sites/dayforce/auth.js
 *   ~contents/sites/dayforce/navigation -> hbWOC  =>  _tilde_contents/sites/dayforce/navigation.js
 *   ~contents/sites/google -> 4GQXn  =>  _tilde_contents/sites/google.js
 *   ~contents/sites/walmart -> 3a5UU  =>  _tilde_contents/sites/walmart.js
 *   ~core/pagenation -> l1kUK  =>  _tilde_core/pagenation.js
 *   ~hooks/useShowSubmitted -> lxTxV  =>  _tilde_hooks/useShowSubmitted.js
 *   ~ui/Image -> 4wCrP  =>  _tilde_/ui/Image.js
 *   ~utils/trace -> 1ik0r  =>  _tilde_utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("clsx"),
  l = n.interopDefault(a),
  s = e("data-base64:~assets/images/confirm.svg"),
  u = n.interopDefault(s),
  c = e("data-base64:~assets/images/play_b.svg"),
  d = n.interopDefault(c),
  f = e("react"),
  p = e("~contents/crawler/target"),
  m = e("~contents/sites/dayforce/auth"),
  h = e("~contents/sites/dayforce/navigation"),
  g = e("~contents/sites/google"),
  b = e("~contents/sites/walmart"),
  y = e("~core/pagenation"),
  v = e("~hooks/useShowSubmitted"),
  w = n.interopDefault(v),
  S = e("~ui/Image"),
  E = n.interopDefault(S),
  x = e("~utils/trace"),
  C = e("./navigation-state");
let A = "jobright:icims:continue-request",
  k = 'button[title="Next"][name="Next"][type="button"]',
  T =
  'button[type="submit"][value="apply"], span[role="button"][id*="_submitBtn"], span[role="button"].rcmSaveButton',
  F = `${k}, ${T}`,
  I =
  "button[data-direct-call-identifier], a#save-and-continue-form-button, a.btn.btn-primary.mt-5, button.btn.btn-primary, div.form-group.submit-button button, div.form-group.submit-button a",
  j = ".application-content .question-form.active, .question-form.active",
  D = e => {
    (0, x.trackEvent)("autofill_navigation_button_click", {
      page_url: window.location.href,
      type: e,
      screen_type: window.innerHeight <= 840 ? "small" : "normal"
    })
  };

function P({
  buttonStation: e,
  buttonTextOverride: t
}) {
  return t || ("continue" === e ? "Continue To The Next Page" : "Submit Application")
}
let _ = e => {
    if (!e) return !1;
    let t = "function" == typeof e.checkVisibility;
    return t ? e.checkVisibility() ?? !1 : !!e.offsetParent
  },
  L = e => (e.innerText?.trim() || e.textContent?.trim() || e.getAttribute("value")?.trim() || e
    .getAttribute("aria-label")?.trim() || "").toLowerCase(),
  R = e => {
    let t = L(e),
      r = e.getAttribute("aria-label")?.trim().toLowerCase() ?? "",
      n = "submit" === t || "apply" === t || t.includes("submit") || "submit" === r || r.includes(
        "submit");
    return n ? "submit" : "continue"
  },
  O = e => {
    let t = (e.ownerDocument?.querySelector(".iCIMS_PageStepText")?.textContent ?? "").trim()
      .toLowerCase();
    if (t) {
      let e = t.includes("submit") || t.includes("review") || t.includes("complete") || t.includes(
        "confirmation") || t.includes("finish");
      return e ? "submit" : "continue"
    }
    let r = e,
      n = r.value?.trim().toLowerCase() || e.innerText?.trim().toLowerCase() || "",
      o = e.getAttribute("aria-label")?.trim().toLowerCase() ?? "",
      i = "submit" === n || "apply" === n || n.includes("submit") || "submit" === n.toLowerCase() ||
      "submit" === o || o.includes("submit");
    return i ? "submit" : "continue"
  },
  M = e => {
    let t = (e.innerText ?? e.textContent ?? "").trim().toLowerCase(),
      r = (e.getAttribute("aria-label") ?? "").trim().toLowerCase(),
      n = t.includes("continue") || r.includes("continue");
    if (n) return "continue";
    let o = "apply" === t || "apply" === r;
    if (o) return "submit";
    let i = "submit" === t || t.includes("submit") || "submit" === t.toLowerCase() || "submit" ===
      r || r.includes("submit");
    return i ? "submit" : "continue"
  },
  N = e => {
    let t = L(e);
    if ("next" === t || t.includes("continue")) return "continue";
    if (t.includes("submit") || t.includes("application") || "save" === t || e.closest(
        ".job-app-btns")) return "submit";
    let r = document.querySelector(".jd-reg-title span"),
      n = r?.textContent?.match(/Step\s+(\d+)\s+of\s+(\d+)/i);
    if (n) {
      let e = Number(n[1]),
        t = Number(n[2]);
      if (Number.isFinite(e) && Number.isFinite(t) && e >= t) return "submit"
    }
    return "continue"
  },
  $ = e => {
    let t = e.getAttribute("id")?.trim().toLowerCase();
    if ("apply" === t || "apply_button" === t) return "continue";
    let r = L(e),
      n = (e.getAttribute("aria-label") ?? "").trim().toLowerCase(),
      o = r || n;
    if ("submit" === o || "apply" === o || o.includes("submit") || o.includes("apply"))
    return "submit";
    if (o.includes("proceed to next step") || o.includes("continue") || "next" === o || o.includes(
        "next step")) return "continue";
    let i = document.querySelector("#steps .step.current + .step");
    return i?.getAttribute("data-file") === "submit" ? "submit" : "continue"
  },
  B = e => {
    let t = (0, y.getJacobsStepState)();
    return t ? "submit" === t.title || t.title.includes("submit") ? "submit" : "continue" : R(e)
  },
  q = e => {
    if ((0, y.isJobviteConsentAcceptButton)(e)) return "continue";
    if (e instanceof HTMLButtonElement) {
      let t = (e.type || e.getAttribute("type") || "").trim().toLowerCase();
      return "submit" === t ? "submit" : "continue"
    }
    return R(e)
  },
  U = e => {
    let t = e.getAttribute("id") ?? "",
      r = L(e),
      n = e.getAttribute("value")?.trim().toLowerCase() ?? "";
    return t.includes("_submitBtn") || "apply" === n || r.includes("apply") ? "submit" : R(e)
  },
  H = () => {
    let e = [document];
    if (window.self !== window.top) return e;
    let t = Array.from(document.querySelectorAll("iframe"));
    for (let r of t) try {
      let t = r.contentDocument ?? r.contentWindow?.document;
      if (!t) continue;
      e.push(t)
    } catch {}
    return e
  },
  Y = () => {
    for (let e of H()) {
      let t = Array.from(e.querySelectorAll('li[id^="Step_"]'));
      if (0 === t.length) continue;
      let r = t.findIndex(e => {
        let t = e.getAttribute("title") ?? "",
          r = e.querySelector(".iCIMS_Steps_Content")?.getAttribute("title") ?? "";
        return e.classList.contains("iCIMS_Steps_Current") || /current step/i.test(t) ||
          /current step/i.test(r)
      });
      if (-1 === r) continue;
      let n = (e.querySelector(".iCIMS_PageStepText")?.textContent || t[r].querySelector(
          ".iCIMS_Steps_Content")?.getAttribute("title") || t[r].getAttribute("title") || "").trim()
        .toLowerCase(),
        o = n.includes("submit") || n.includes("review") || n.includes("complete") || n.includes(
          "confirmation") || n.includes("finish");
      return o ? "submit" : "continue"
    }
    return null
  },
  z = e => (e.textContent || e.getAttribute("value") || e.getAttribute("aria-label") || "").trim()
  .toLowerCase(),
  V = e => e.find(e => !(!_(e) || e.closest("#jobright-helper-id"))) ?? null,
  W = e => e.filter(e => !(!_(e) || e.closest("#jobright-helper-id"))),
  G = e => {
    if (e.closest("#jobright-helper-id")) return !1;
    let t = e;
    if (t.disabled || null != e.getAttribute("disabled") || "true" === e.getAttribute(
        "aria-disabled") || "true" === e.getAttribute("aria-hidden") || e.hidden) return !1;
    let r = e.ownerDocument?.defaultView?.getComputedStyle?.(e);
    if (r?.display === "none" || r?.visibility === "hidden") return !1;
    let n = e.getBoundingClientRect?.();
    return !!(n && n.width > 0 && n.height > 0)
  },
  K = () => {
    let e = new Set,
      t = Array.from(document.querySelectorAll(j));
    for (let r of t)
      for (let t of Array.from(r.querySelectorAll(I))) e.add(t);
    if (0 === e.size)
      for (let t of Array.from(document.querySelectorAll(I))) e.add(t);
    return Array.from(e)
  },
  X = () => {
    let e = K(),
      t = e.filter(G),
      r = e => {
        let t = L(e);
        return "save-and-continue-form-button" === e.getAttribute("id") || "continue" === t || t
          .includes("continue") || "submit" === t || t.includes("submit") || "apply" === t || t
          .includes("apply")
      };
    return t.find(e => !!e.closest("div.form-group.submit-button") && r(e)) || t.find(r) || t[0] ||
      null
  },
  J = e => {
    e.scrollIntoView?.({
      block: "center",
      inline: "nearest"
    }), e.focus?.({
      preventScroll: !0
    }), e.click()
  },
  Q = e => {
    let t = W(e);
    return t.length > 0 ? t[t.length - 1] : null
  },
  Z = e => {
    let t = {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      view: window
    };
    e.focus?.(), e.dispatchEvent(new MouseEvent("pointerdown", t)), e.dispatchEvent(new MouseEvent(
      "mousedown", t)), e.dispatchEvent(new MouseEvent("pointerup", t)), e.dispatchEvent(
      new MouseEvent("mouseup", t)), e.click()
  },
  ee = e => {
    let t = e.shadowRoot?.querySelector("button.c-spl-button");
    return t ?? e
  },
  et = e => {
    let t = z(e);
    return t.includes("submit application") || "submit" === t ? "submit" : "continue"
  },
  er = () => {
    let e = Q(Array.from(document.querySelectorAll(
      '[data-dojo-attach-point="thePagerDualNext"], [data-dojo-attach-point="thePagerNext"]')));
    if (e) return {
      element: e,
      type: "continue"
    };
    let t = W(Array.from(document.querySelectorAll("div.appGo.center")).filter(e => !e.classList
      .contains("appBack") && "thePagerDualPrev" !== e.getAttribute("data-dojo-attach-point")));
    if (t.length > 0) {
      let e = t[t.length - 1],
        r = e;
      return {
        element: r,
        type: et(r)
      }
    }
    let r = V(Array.from(document.querySelectorAll(
      'button, input[type="submit"], input[type="button"], [role="button"]')).filter(e => {
      let t = z(e);
      return t.includes("submit application") || "submit" === t
    }));
    return r ? {
      element: r,
      type: "submit"
    } : null
  },
  en = () => {
    let e = document.getElementById("ja_sv_cw_next_footer_btn");
    if (e && _(e)) return {
      element: e,
      type: R(e)
    };
    let t = document.querySelector(y.ADP_WORKFORCENOW_RECAPTCHA_CONTINUE_BUTTON_SELECTOR);
    if (t && _(t)) return {
      element: t,
      type: "continue"
    };
    let r = V(Array.from(document.querySelectorAll(
      'button, input[type="submit"], input[type="button"], [role="button"]')).filter(e => z(e)
      .includes("submit")));
    return r ? {
      element: r,
      type: "submit"
    } : null
  },
  eo = () => {
    let e = W(Array.from(document.querySelectorAll(y.ADP_MYJOBS_ADVANCE_BUTTON_SELECTOR))),
      t = e.find(e => (0, y.isAdpMyJobsAdvanceButton)(e)) || null;
    return t ? {
      element: t,
      type: R(t)
    } : null
  },
  ei = e => {
    let t = W(Array.from(document.querySelectorAll(e.selector))),
      r = t.find(e => (0, y.isPaycomOnlineAdvanceButton)(e)) || null;
    return r ? {
      element: r,
      type: e.getButtonType(r)
    } : null
  },
  ea = e => {
    let t = W(Array.from(document.querySelectorAll(e.selector))),
      r = t.find(t => "submit" === e.getButtonType(t)),
      n = r || t[0] || V(Array.from(document.querySelectorAll(e.selector)));
    return n ? {
      element: n,
      type: e.getButtonType(n)
    } : null
  },
  el = e => {
    let t = e => {
        let t = L(e);
        return !("save & return later" === t || "finish later" === t)
      },
      r = e => {
        let r = e.filter(e => t(e));
        return r.find(e => "next" === L(e)) || r.find(e => L(e).includes("continue")) || r.find(
        e => {
          let t = L(e);
          return "submit" === t || "submit profile" === t || "apply" === t || t.includes(
            "submit")
        }) || r[0] || null
      };
    for (let t of H()) {
      let n = W(Array.from(t.querySelectorAll(e.selector)));
      if (0 === n.length) continue;
      let o = r(n);
      if (o) return {
        element: o,
        type: e.getButtonType(o)
      }
    }
    return null
  },
  es = () => {
    let e = V(Array.from(document.querySelectorAll(k)));
    if (e) return {
      element: e,
      type: "continue"
    };
    let t = W(Array.from(document.querySelectorAll(T))).find(e => "submit" === U(e));
    return t ? {
      element: t,
      type: "submit"
    } : null
  },
  eu = () => {
    let e = Array.from(document.querySelectorAll(y.TALEO_CWS_V2_NEXT_BUTTON_SELECTOR)).find(e => _(
      e) && !e.closest("#jobright-helper-id") && "true" !== e.getAttribute("aria-disabled"));
    if (e) return {
      element: e,
      type: "continue"
    };
    let t = Array.from(document.querySelectorAll(y.TALEO_CLASSIC_SAVE_AND_CONTINUE_SELECTOR)).find(
      e => _(e) && !e.closest("#jobright-helper-id") && !e.disabled);
    return t ? {
      element: t,
      type: "continue"
    } : null
  },
  ec = () => {
    let e = Array.from(document.querySelectorAll("iframe")),
      t = !1;
    for (let r of e) r.contentWindow && (r.contentWindow.postMessage({
      type: A,
      data: {
        fromAgent: !1,
        timestamp: Date.now()
      },
      url: r.src
    }, {
      targetOrigin: "*"
    }), t = !0);
    return t
  },
  ed = {
    myworkday: {
      selector: C.WORKDAY_NAVIGATION_BUTTON_SELECTOR,
      getButtonType: R
    },
    jacobs: {
      selector: y.JACOBS_NAV_BUTTON_SELECTOR,
      getButtonType: B
    },
    jobvite: {
      selector: y.JOBVITE_ADVANCE_BUTTON_SELECTOR,
      getButtonType: q
    },
    phenom: {
      selector: 'form.rjsf #next, form.rjsf button#next, form.rjsf button[aria-label="Continue"], form.rjsf button[type="submit"], form.rjsf input[type="submit"]',
      getButtonType: R
    },
    oraclecloud: {
      selector: 'button, [role="button"]',
      getButtonType: R
    },
    tesla: {
      selector: 'button[name="next"], button[type="submit"]',
      getButtonType: R
    },
    adobe: {
      selector: 'button[type="submit"], button#next.btn-next, button[aria-label="Next"], button[aria-label="Submit"]',
      getButtonType: R
    },
    amazon: {
      selector: I,
      getButtonType: R
    },
    adpMyJobs: {
      selector: y.ADP_MYJOBS_ADVANCE_BUTTON_SELECTOR,
      getButtonType: R
    },
    brassring: {
      selector: "button#showstart:not([disabled]), button#shownext:not([disabled]), button[ng-click*='goStart']:not([disabled]), button[ng-click*='goNext']:not([disabled]), button[id*='submit'], button[ng-click*='submit'], button[type='submit'], input[type='submit']",
      getButtonType: R
    },
    apple: {
      selector: "#apply-step-continue-button",
      getButtonType: R
    },
    successfactors: {
      selector: F,
      getButtonType: U
    },
    cisco: {
      selector: 'button#next, button[atm-id="submit-button"]',
      getButtonType: R
    },
    hrmdirect: {
      selector: 'button[type="submit"]',
      getButtonType: R
    },
    paylocity: {
      selector: 'button#btn-submit[data-automation-id="btnNext"]',
      getButtonType: R
    },
    paycomonline: {
      selector: y.PAYCOMONLINE_ADVANCE_BUTTON_SELECTOR,
      getButtonType: R
    },
    icims: {
      selector: '#cp_form_submit_i, input[type="submit"], button[type="submit"]',
      getButtonType: O
    },
    google: {
      selector: 'button[jsname="M2UYVd"], button[aria-label*="Submit profile"], button[aria-label="Next"], .Rwgx2d button[aria-label="Next"], div[role="button"][jsname="OCpkoe"], div[role="button"][jsname="M2UYVd"]',
      getButtonType: M
    },
    dayforce: {
      selector: 'button[test-id="application-next-step"], button[test-id="application-submit"]',
      getButtonType: R
    },
    smartrecruiters: {
      selector: y.SMARTRECRUITERS_ADVANCE_BUTTON_SELECTOR,
      getButtonType: R
    },
    ripplehire: {
      selector: y.RIPPLEHIRE_ADVANCE_BUTTON_SELECTOR,
      getButtonType: R
    },
    isolved: {
      selector: "input#apply, button#apply_button, #save_contact_info_button, #verify_contact_info_button, #new_upload_button, #next",
      getButtonType: $
    },
    jobdiva: {
      selector: y.JOBDIVA_ADVANCE_BUTTON_SELECTOR,
      getButtonType: N
    }
  },
  ef = ({
    isFilling: e
  }) => {
    let [t, r] = (0, f.useState)("continue"), [n, a] = (0, f.useState)(null), [s, c] = (0, f
      .useState)(null), [v, S] = (0, f.useState)(!1), x = (0, w.default)(), A = (0, p.getTargetName)
      (), k = (0, C.shouldDisableNextPageButton)({
        isFilling: e,
        targetName: A,
        walmartCompositeDialogOpen: v
      }), T = () => {
        let e = (0, p.getTargetName)();
        if ("adpRecruiting" === e) return er();
        if ("adpWorkforceNow" === e) return en();
        if ("adpMyJobs" === e) return eo();
        if ("walmart" === e) {
          let e = (0, b.getCurrentAdvanceButton)();
          return e ? {
            element: e.element,
            type: e.type
          } : null
        }
        if ("myworkday" === e) return (0, C.getWorkdayNextPageButtonTarget)(document);
        if ("taleo" === e) return eu();
        let t = ed[e];
        if (!t) return null;
        if ("icims" === e) return el(t);
        if ("jobvite" === e) {
          let e = Array.from(document.querySelectorAll(t.selector)),
            r = W(e),
            n = r[0] || e[0] || null;
          return n ? {
            element: n,
            type: t.getButtonType(n)
          } : null
        }
        if ("google" === e) {
          let e = (0, g.getCurrentAdvanceButton)();
          if (e) return {
            element: e.element,
            type: e.type
          }
        }
        if ("successfactors" === e) return es();
        let r = null;
        if ("oraclecloud" === e) {
          let e = Array.from(document.querySelectorAll(t.selector)),
            n = e.filter(e => {
              if (!_(e) || e.closest("#jobright-helper-id")) return !1;
              let t = e.innerText?.trim().toLowerCase() ?? "",
                r = e.getAttribute("aria-label")?.trim().toLowerCase() ?? "",
                n = "submit" === t || "next" === t || "apply" === t || t.includes("submit") || t
                .includes("next") || "submit" === r || "next" === r || r.includes("submit") || r
                .includes("next") || "pageFooterNextButton" === e.getAttribute(
                  "data-automation-id") || "bottom-navigation-next-button" === e.getAttribute(
                  "data-automation-id");
              return n
            }),
            o = n.find(e => "submit" === t.getButtonType(e));
          r = o || n[0] || e.find(e => "submit" === t.getButtonType(e)) || e[0] || null
        } else if ("cisco" === e) return ea(t);
        else if ("isolved" === e) {
          let e = document.querySelector(".modal-content #verify_contact_info_button");
          if (e && _(e)) r = e;
          else {
            let e = Array.from(document.querySelectorAll(t.selector));
            r = e.find(e => _(e)) || null
          }
        } else if ("brassring" === e) {
          let e = Array.from(document.querySelectorAll(t.selector));
          r = e.find(e => _(e)) || null
        } else if ("amazon" === e) r = X();
        else if ("dayforce" === e) {
          if ((0, m.getDayforceAuthPageMode)()) return (0, h.getDayforceRegistrationNextTarget)();
          let e = Array.from(document.querySelectorAll(t.selector));
          r = V(e)
        } else if ("jobdiva" === e) {
          let e = Array.from(document.querySelectorAll(t.selector));
          r = W(e).find(e => (0, y.isJobdivaAdvanceButton)(e)) || null
        } else if ("smartrecruiters" === e) {
          let e = Array.from(document.querySelectorAll(t.selector));
          r = W(e).find(e => (0, y.isSmartRecruitersAdvanceButton)(e)) || null
        } else {
          if ("paycomonline" === e) return ei(t);
          r = document.querySelector(t.selector)
        }
        if (!r && "amazon" === e) {
          let e = document.querySelector(
            'div[class="form-group submit-button mt-5"], div.form-group.submit-button');
          e && (r = e.querySelector("button, a"))
        }
        return r ? {
          element: r,
          type: t.getButtonType(r)
        } : null
      }, F = async () => {
        if (k) return;
        let e = (0, p.getTargetName)();
        if ("icims" === e && (n || t) && ec()) {
          setTimeout(() => {
            y.getPaginationAdvanceCheck("icims")?.("next-button-800")
          }, 800), setTimeout(() => {
            y.getPaginationAdvanceCheck("icims")?.("next-button-1600")
          }, 1600), D(n ?? t);
          return
        }
        let r = T();
        if (r || "taleo" !== e || console.warn("[Taleo][navigation] proxy target not found", {
            cwsV2NextFound: !!document.querySelector(y.TALEO_CWS_V2_NEXT_BUTTON_SELECTOR),
            classicSaveAndContinueFound: !!document.querySelector(y
              .TALEO_CLASSIC_SAVE_AND_CONTINUE_SELECTOR)
          }), r && (0, C.shouldClickNextPageButtonTarget)({
            targetType: r.type,
            currentStation: t,
            source: r.source
          })) {
          if ("google" === e)(0, g.clickAdvanceButton)(r.element);
          else if ("walmart" === e)(0, b.clickAdvanceButton)(r.element), setTimeout(() => {
            y.getPaginationAdvanceCheck("walmart")?.("next-button-800"), window.dispatchEvent(
              new CustomEvent(y.WALMART_STEP_CHANGE_EVENT))
          }, 800), setTimeout(() => {
            y.getPaginationAdvanceCheck("walmart")?.("next-button-1600"), window
              .dispatchEvent(new CustomEvent(y.WALMART_STEP_CHANGE_EVENT))
          }, 1600);
          else if ("adpRecruiting" === e) {
            let e = r.element.querySelector(
              'button, input[type="submit"], input[type="button"], a, [role="button"]');
            Z(e ?? r.element)
          } else if ("adpMyJobs" === e) r.element.click(), setTimeout(() => {
            y.getPaginationAdvanceCheck("adpMyJobs")?.("next-button-800")
          }, 800), setTimeout(() => {
            y.getPaginationAdvanceCheck("adpMyJobs")?.("next-button-1600")
          }, 1600);
          else if ("paycomonline" === e) r.element.click(), setTimeout(() => {
            y.getPaginationAdvanceCheck("paycomonline")?.("next-button-800")
          }, 800), setTimeout(() => {
            y.getPaginationAdvanceCheck("paycomonline")?.("next-button-1600")
          }, 1600);
          else if ("cisco" === e) r.element.click(), setTimeout(() => {
            window.dispatchEvent(new CustomEvent(y.CISCO_STEP_CHANGE_EVENT))
          }, 400), setTimeout(() => {
            window.dispatchEvent(new CustomEvent(y.CISCO_STEP_CHANGE_EVENT))
          }, 1e3);
          else if ("myworkday" === e) r.element.click(), setTimeout(() => {
            y.getPaginationAdvanceCheck("myworkday")?.("next-button-800")
          }, 800), setTimeout(() => {
            y.getPaginationAdvanceCheck("myworkday")?.("next-button-1600")
          }, 1600);
          else if ("oraclecloud" === e) {
            let e = (0, y.saveOracleCloudPendingAutofillForCurrentStep)();
            r.element.click(), setTimeout(() => {
              y.getPaginationAdvanceCheck("oraclecloud")?.("next-button-800")
            }, 800), setTimeout(() => {
              y.getPaginationAdvanceCheck("oraclecloud")?.("next-button-1600"), window
                .dispatchEvent(new CustomEvent(y.ORACLE_CLOUD_CONTINUE_EVENT, {
                  detail: {
                    previousIndex: e.index
                  }
                }))
            }, 1600)
          } else "jacobs" === e ? (r.element.click(), setTimeout(() => {
            y.getPaginationAdvanceCheck("jacobs")?.("next-button-800")
          }, 800), setTimeout(() => {
            y.getPaginationAdvanceCheck("jacobs")?.("next-button-1600")
          }, 1600)) : "amazon" === e ? J(r.element) : "smartrecruiters" === e ? (y
            .getPaginationAdvanceCheck("smartrecruiters")?.(y
              .SMARTRECRUITERS_PREPARE_ADVANCE_SOURCE), ee(r.element).click(), setTimeout(
          () => {
              y.getPaginationAdvanceCheck("smartrecruiters")?.("next-button-800")
            }, 800), setTimeout(() => {
              y.getPaginationAdvanceCheck("smartrecruiters")?.("next-button-1600")
            }, 1600)) : "jobdiva" === e ? (r.element.click(), setTimeout(() => {
            y.getPaginationAdvanceCheck("jobdiva")?.("next-button-800")
          }, 800), setTimeout(() => {
            y.getPaginationAdvanceCheck("jobdiva")?.("next-button-1600")
          }, 1600)) : "successfactors" === e ? ("continue" === r.type && (0, y
            .markSuccessFactorsContinueAutofillPending)(), r.element.click(), setTimeout(
        () => {
            y.getPaginationAdvanceCheck("successfactors")?.("next-button-800")
          }, 800), setTimeout(() => {
            y.getPaginationAdvanceCheck("successfactors")?.("next-button-1600")
          }, 1600)) : "taleo" === e ? (console.info("[Taleo][navigation] proxy click", {
            target: r.element.matches(y.TALEO_CLASSIC_SAVE_AND_CONTINUE_SELECTOR) ?
              "classic-save-and-continue" : "cws-v2-next"
          }), r.element.click(), setTimeout(() => {
            y.getPaginationAdvanceCheck("taleo")?.("next-button-800")
          }, 800), setTimeout(() => {
            y.getPaginationAdvanceCheck("taleo")?.("next-button-1600")
          }, 1600)) : r.element.click();
          (0, C.shouldTrackNextPageButtonClick)({
            targetName: e,
            suppressClickTracking: r.suppressClickTracking
          }) && D(r.type);
          return
        }
      };
    (0, f.useEffect)(() => {
      let e = () => {
        let e = (0, p.getTargetName)();
        S("walmart" === e && (0, b.hasVisibleWalmartCompositeDialog)());
        let t = "icims" === e ? Y() : null,
          n = T();
        if (!n) {
          "icims" === e && t && (r(t), a(t), c(null)), c(null);
          return
        }
        r(n.type), c(n.buttonText ?? null), "icims" === e && a(t ?? n.type)
      };
      e();
      let t = null,
        n = 600,
        o = new MutationObserver(() => {
          null == t && (t = setTimeout(() => {
            t = null, e()
          }, n))
        });
      o.observe(document.body, {
        childList: !0,
        subtree: !0,
        characterData: !0,
        attributes: !0,
        attributeFilter: ["class", "type", "aria-label", "data-automation-id"]
      });
      let i = window.setInterval(e, 800);
      return () => {
        null != t && clearTimeout(t), o.disconnect(), window.clearInterval(i)
      }
    }, []), (0, f.useEffect)(() => {
      let e;
      if ("cisco" !== (0, p.getTargetName)()) return;
      let t = () => {
          let e = T();
          return e && (r(e.type), c(e.buttonText ?? null)), !!e
        },
        n = () => {
          if (e?.(), t()) return;
          let r = setTimeout(t, 200),
            n = setTimeout(t, 500);
          e = () => {
            clearTimeout(r), clearTimeout(n)
          }
        };
      return window.addEventListener(y.CISCO_STEP_CHANGE_EVENT, n), () => {
        e?.(), window.removeEventListener(y.CISCO_STEP_CHANGE_EVENT, n)
      }
    }, []), (0, f.useEffect)(() => {
      let e;
      if ("jacobs" !== (0, p.getTargetName)()) return;
      let t = () => {
          let e = T();
          return e && (r(e.type), c(e.buttonText ?? null)), !!e
        },
        n = () => {
          if (e?.(), t()) return;
          let r = setTimeout(t, 200),
            n = setTimeout(t, 500);
          e = () => {
            clearTimeout(r), clearTimeout(n)
          }
        };
      return window.addEventListener(y.JACOBS_STEP_CHANGE_EVENT, n), () => {
        e?.(), window.removeEventListener(y.JACOBS_STEP_CHANGE_EVENT, n)
      }
    }, []), (0, f.useEffect)(() => {
      let e;
      let t = (0, p.getTargetName)();
      if ("google" !== t && "walmart" !== t) return;
      let n = () => {
          let e = T();
          return e && (r(e.type), c(e.buttonText ?? null)), !!e
        },
        o = () => {
          if (e?.(), n()) return;
          let t = setTimeout(n, 200),
            r = setTimeout(n, 500);
          e = () => {
            clearTimeout(t), clearTimeout(r)
          }
        },
        i = "google" === t ? g.GOOGLE_STEP_CHANGE_EVENT : y.WALMART_STEP_CHANGE_EVENT;
      return window.addEventListener(i, o), () => {
        e?.(), window.removeEventListener(i, o)
      }
    }, []), (0, f.useEffect)(() => {
      x && (r("submit"), c(null))
    }, [x]);
    let I = "submit" === t && x,
      j = "icims" === A ? n : t;
    if ("icims" === A && !j) return null;
    let L = "continue" === j,
      R = P({
        buttonStation: j,
        buttonTextOverride: s
      });
    return (0, o.jsx)("div", {
      className: "continue-button-wrapper",
      children: I ? (0, o.jsx)("button", {
        className: "continue-button",
        children: (0, o.jsxs)("div", {
          className: "continue-button-content",
          children: [(0, o.jsx)(E.default, {
            preview: !1,
            src: u.default,
            alt: "Submitted",
            width: 16
          }), (0, o.jsx)(i.Typography.Text, {
            className: "continue-button-text",
            children: "Submitted!"
          })]
        })
      }) : (0, o.jsx)("button", {
        disabled: k,
        onClick: F,
        className: (0, l.default)("continue-button", {
          "continue-button-disabled": k
        }),
        children: (0, o.jsxs)("div", {
          className: "continue-button-content",
          children: [(0, o.jsx)(i.Typography.Text, {
            className: (0, l.default)("continue-button-text", {
              "continue-button-text-disabled": k
            }),
            children: R
          }), L && (0, o.jsx)(E.default, {
            preview: !1,
            src: d.default,
            alt: "",
            width: 16,
            height: 16,
            className: (0, l.default)("continue-button-icon", {
              "continue-button-icon-disabled": k
            })
          })]
        })
      })
    })
  };
r.default = ef

