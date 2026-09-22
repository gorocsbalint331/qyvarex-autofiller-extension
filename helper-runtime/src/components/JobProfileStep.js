/**
 * Parcel module id: dv20f
 * Resolved path: src/components/JobProfileStep.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   antd -> 9tniX  =>  antd.js
 *   clsx -> jgTfo  =>  clsx.js
 *   data-base64:~assets/images/credits.svg -> 6rd7Q  =>  src/assets/inline/images/credits.svg.js
 *   lodash-es -> p4RBe  =>  lodash-es.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~api/env-resolver -> 45ABC  =>  src/api/env-resolver.js
 *   ~components/ExternalJob/ExternalJobAnalyzing -> iJxrg  =>  src/components/ExternalJob/ExternalJobAnalyzing.js
 *   ~components/ExternalJob/ExternalJobEntry -> 2GxpS  =>  src/components/ExternalJob/ExternalJobEntry.js
 *   ~components/ExternalJob/ExternalJobFail -> 4koZP  =>  src/components/ExternalJob/ExternalJobFail.js
 *   ~components/ExternalJob/ExternalJobForm -> 30xAs  =>  src/components/ExternalJob/ExternalJobForm.js
 *   ~components/FillProgress -> iqFDb  =>  src/components/FillProgress.js
 *   ~components/JobCard -> hh9tB  =>  src/components/JobCard.js
 *   ~components/JobProfileStep/myworkday-progress -> dzqGl  =>  src/components/JobProfileStep/myworkday-progress.js
 *   ~components/JobProfileStep/resolve-job-to-show -> knAUl  =>  src/components/JobProfileStep/resolve-job-to-show.js
 *   ~components/LoadingButton -> 3KGxk  =>  src/components/LoadingButton.js
 *   ~components/NextPageButton -> cb8Df  =>  src/components/NextPageButton.js
 *   ~components/Popups/AutofillErrorModal -> 7ej6w  =>  src/components/Popups/AutofillErrorModal.js
 *   ~components/Popups/DoubleConfirmPopup -> heASZ  =>  src/components/Popups/DoubleConfirmPopup.js
 *   ~components/Popups/OutofCreditModal -> jMDeX  =>  src/components/Popups/OutofCreditModal.js
 *   ~components/Popups/ResumeMissingKeyPopup -> zWHj6  =>  src/components/Popups/ResumeMissingKeyPopup.js
 *   ~components/ResumeSwitcher -> ihewf  =>  src/components/ResumeSwitcher.js
 *   ~components/UpdateJobInfoLink -> fDGTw  =>  src/components/UpdateJobInfoLink.js
 *   ~components/VersionUpdate -> 8WhUc  =>  src/components/VersionUpdate.js
 *   ~constants/payment -> aukl5  =>  src/constants/payment.js
 *   ~contents/crawler/target -> kkscK  =>  src/contents/crawler/target.js
 *   ~contents/pre-autofill-flow/account-flow-state -> 8WOx2  =>  src/contents/pre-autofill-flow/account-flow-state.js
 *   ~contents/pre-autofill-flow/tracking -> 3L3xh  =>  src/contents/pre-autofill-flow/tracking.js
 *   ~core/pagenation -> l1kUK  =>  src/core/pagenation.js
 *   ~hooks/usePaginationObserver -> 7xg1Q  =>  src/hooks/usePaginationObserver.js
 *   ~hooks/usePreAutofillFlowRunner -> 62ozi  =>  src/hooks/usePreAutofillFlowRunner.js
 *   ~hooks/useRegisterAgentCancel -> l5wRD  =>  src/hooks/useRegisterAgentCancel.js
 *   ~hooks/useRegisterAgentSkip -> anm6s  =>  src/hooks/useRegisterAgentSkip.js
 *   ~hooks/useStartAutofill -> 12lb0  =>  src/hooks/useStartAutofill.js
 *   ~hooks/useSubmitApplication -> clZg3  =>  src/hooks/useSubmitApplication.js
 *   ~hooks/useUpdateAgentResume -> e52YT  =>  src/hooks/useUpdateAgentResume.js
 *   ~hooks/useUpdateCoverLetter -> lTWHp  =>  src/hooks/useUpdateCoverLetter.js
 *   ~store/autofillResult -> hCUzf  =>  src/store/autofillResult.js
 *   ~store/externalJob -> 1YpU3  =>  src/store/externalJob.js
 *   ~store/feedback -> l2vHp  =>  src/store/feedback.js
 *   ~store/profile -> 9omPD  =>  src/store/profile.js
 *   ~store/resume -> iSBDf  =>  src/store/resume.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~ui/Image -> 4wCrP  =>  src/ui/Image.js
 *   ~utils/checkLinkedin -> 5xJv6  =>  src/utils/checkLinkedin.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("clsx"),
  l = n.interopDefault(a),
  s = e("data-base64:~assets/images/credits.svg"),
  u = n.interopDefault(s),
  c = e("lodash-es"),
  d = e("react"),
  f = e("@plasmohq/messaging"),
  p = e("~api/env-resolver"),
  m = e("~components/ExternalJob/ExternalJobAnalyzing"),
  h = n.interopDefault(m),
  g = e("~components/ExternalJob/ExternalJobEntry"),
  b = n.interopDefault(g),
  y = e("~components/ExternalJob/ExternalJobFail"),
  v = n.interopDefault(y),
  w = e("~components/ExternalJob/ExternalJobForm"),
  S = n.interopDefault(w),
  E = e("~components/FillProgress"),
  x = n.interopDefault(E),
  C = e("~components/JobCard"),
  A = n.interopDefault(C),
  k = e("~components/JobProfileStep/myworkday-progress"),
  T = e("~components/JobProfileStep/resolve-job-to-show"),
  F = e("~components/LoadingButton"),
  I = n.interopDefault(F),
  j = e("~components/NextPageButton"),
  D = n.interopDefault(j),
  P = e("~components/Popups/AutofillErrorModal"),
  _ = n.interopDefault(P),
  L = e("~components/Popups/DoubleConfirmPopup"),
  R = n.interopDefault(L),
  O = e("~components/Popups/OutofCreditModal"),
  M = n.interopDefault(O),
  N = e("~components/Popups/ResumeMissingKeyPopup"),
  $ = n.interopDefault(N),
  B = e("~components/ResumeSwitcher"),
  q = n.interopDefault(B),
  U = e("~components/UpdateJobInfoLink"),
  H = n.interopDefault(U),
  Y = e("~components/VersionUpdate"),
  z = n.interopDefault(Y),
  V = e("~constants/payment"),
  W = e("~contents/crawler/target"),
  G = e("~contents/pre-autofill-flow/account-flow-state"),
  K = e("~contents/pre-autofill-flow/tracking"),
  X = e("~core/pagenation"),
  J = e("~hooks/usePaginationObserver"),
  Q = e("~hooks/usePreAutofillFlowRunner"),
  Z = e("~hooks/useRegisterAgentCancel"),
  ee = n.interopDefault(Z),
  et = e("~hooks/useRegisterAgentSkip"),
  er = n.interopDefault(et),
  en = e("~hooks/useStartAutofill"),
  eo = n.interopDefault(en),
  ei = e("~hooks/useSubmitApplication"),
  ea = n.interopDefault(ei),
  el = e("~hooks/useUpdateAgentResume"),
  es = n.interopDefault(el),
  eu = e("~hooks/useUpdateCoverLetter"),
  ec = n.interopDefault(eu),
  ed = e("~store/autofillResult"),
  ef = e("~store/externalJob"),
  ep = e("~store/feedback"),
  em = e("~store/profile"),
  eh = e("~store/resume"),
  eg = e("~store/url"),
  eb = e("~ui/Image"),
  ey = n.interopDefault(eb),
  ev = e("~utils/checkLinkedin"),
  ew = e("~utils/trace");
let eS = ({
    currentTabJob: e,
    showContinue: t,
    jobContextLoading: r = !1,
    fallbackJobId: n = null
  }) => {
    let a = (0, em.useProfileStore)(e => e.userProfile),
      s = (0, em.useProfileStore)(e => e.userStage),
      f = (0, ef.useExternalJobStore)(e => e.jobInfo),
      m = (0, ef.useExternalJobStore)(e => e.useExternalJobDetailRequest),
      h = (0, ef.useExternalJobStore)(e => e.manualOverrideJobId);
    m();
    let g = (0, ed.useAutofillResultStore)(e => e.isFilling),
      y = (0, ed.useAutofillResultStore)(e => e.setIsFilling),
      v = (0, ed.useAutofillResultStore)(e => e.fillingMode),
      w = (0, ed.useAutofillResultStore)(e => e.setFillingMode),
      S = (0, ed.useAutofillResultStore)(e => e.setProgressTitle),
      [E, C] = (0, d.useState)(!1),
      F = (0, d.useRef)(!1),
      j = (0, d.useRef)(!1),
      P = (0, d.useRef)(null),
      [L, O] = (0, d.useState)(null),
      [N, B] = (0, d.useState)(null),
      [U, Y] = (0, d.useState)(0),
      [Z, et] = (0, d.useState)(0);
    (0, d.useEffect)(() => {
      F.current && !g ? C(!0) : g && C(!1), F.current = g
    }, [g]), (0, d.useEffect)(() => {
      let e = () => {
        let e = ed.useAutofillResultStore.getState().autoFillResult?.userAutoFillResponse?.[G
            .WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_KEY
          ],
          t = e && "object" == typeof e ? e : null,
          r = "string" == typeof t?.messageType ? t.messageType : null;
        r && P.current !== r && ((0, K.sendWorkdayAccountSubmitWarningExposure)({
          targetName: (0, W.getTargetName)(),
          url: window.location.href,
          pending: {
            flowId: "workday_forgot_password_flow",
            intent: "forgot_password",
            sourceUrl: window.location.href,
            sourcePageKind: "forgot_password",
            submitStep: G.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickResetPassword
          },
          submitError: {
            message: "string" == typeof t.message ? t.message : "",
            rawMessage: "string" == typeof t.rawMessage ? t.rawMessage : "",
            messageType: r
          }
        }), P.current = r), j.current = !0, C(!0)
      };
      return document.addEventListener(G.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_EVENT, e), () => {
        document.removeEventListener(G.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_EVENT, e)
      }
    }, []), (0, d.useEffect)(() => {
      if (!L || !N) return;
      let e = () => Y(N.offsetTop);
      e();
      let t = new ResizeObserver(e);
      return Array.from(L.children).forEach(e => {
        e instanceof HTMLElement && t.observe(e)
      }), () => t.disconnect()
    }, [L, N]);
    let en = (0, ed.useAutofillResultStore)(e => e.setHasClickedAutoFill),
      ei = (0, ed.useAutofillResultStore)(e => !!e.autoFillResult),
      el = (0, ed.useAutofillResultStore)(e => e.setAutoFillResult),
      eu = (0, eg.useUrlStore)(e => e.currentTabUrl),
      eb = (0, ep.useFeedbackStore)(e => e.setShowStarRatingModal),
      ev = (0, T.resolveJobToShow)({
        currentTabJob: e,
        externalJobInfo: f,
        manualOverrideJobId: h
      }),
      {
        startAutofill: eS
      } = (0, eo.default)({
        currentTabJob: ev
      }),
      ex = (0, d.useCallback)(() => {
        j.current = !1, P.current = null, et(e => e + 1)
      }, []),
      eC = (0, W.getTargetName)(),
      eA = eu || window.location.href,
      {
        match: ek,
        ctaText: eT,
        startMatchedFlow: eF
      } = (0, Q.usePreAutofillFlowRunner)({
        targetName: eC,
        url: eA,
        isFilling: g,
        startStandardAutofill: eS,
        onFlowStart: ex,
        onAccountTransitionStart: () => {
          if (j.current) return;
          let e = ed.useAutofillResultStore.getState().autoFillResult?.userAutoFillResponse?.[G
            .PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY
          ];
          e || C(!1)
        },
        onAccountTransitionError: () => {
          j.current = !0, C(!0)
        }
      }),
      [eI, ej] = (0, d.useState)(!1),
      eD = !0;
    ev?.jobResult?.jobId.startsWith("external") && (eD = !1);
    let eP = (0, em.useProfileStore)(e => e.doubleConfirmPopupVisible),
      e_ = (0, em.useProfileStore)(e => e.setDoubleConfirmPopupVisible),
      eL = (0, em.useProfileStore)(e => e.autofillDoNotAskAgain),
      eR = (0, em.useProfileStore)(e => e.syncAutofillDoNotAskAgainWithStorage),
      eO = (0, eh.useResumeStore)(e => e.updateFillingResume);
    (0, ee.default)(), (0, er.default)(), (0, es.default)(), (0, ec.default)();
    let eM = (0, em.useProfileStore)(e => e.creditsLeft);
    (0, ea.default)();
    let eN = () => {
      eb(!1), w("standard_autofill"), S(null), el(null), eS()
    };
    (0, J.usePaginationObserver)(eS), (0, d.useEffect)(() => {
      eR()
    }, [eL]), (0, d.useEffect)(() => {
      a && a?.step === 5 && eO()
    }, [a]);
    let e$ = (0, em.useProfileStore)(e => e.creditSwitchStatus),
      eB = (0, em.useProfileStore)(e => e.paymentDataLoaded),
      eq = (0, em.useProfileStore)(e => e.initPaymentData),
      [eU, eH] = (0, d.useState)(null),
      eY = (0, d.useRef)(null);
    (0, d.useEffect)(() => {
      eB || eq()
    }, [eB]), (0, d.useEffect)(() => {
      if (!ek) return;
      let e = (0, K.shouldTrackWorkdayAccountCtaExposure)({
        targetName: eC,
        match: ek,
        lastStatus: eY.current,
        pending: G.preAutofillAccountTransitionSession.peek()?.payload
      });
      if (!e.status) return;
      if (!e.shouldTrack) {
        G.preAutofillAccountTransitionSession.peek()?.payload && (eY.current = e.status);
        return
      }
      let t = (0, K.sendWorkdayAccountCreationCtaExposure)({
        targetName: eC,
        url: eA,
        match: ek
      });
      t && (eY.current = e.status)
    }, [eA, ek, eC]), (0, d.useEffect)(() => {
      if ("apple" === eC && eu) {
        if (null === eU) {
          eH(eu);
          return
        }
        eu !== eU && (y(!1), el(null), e_(!1), eH(eu))
      }
    }, [eC, eu, eU, y, el, e_]), (0, d.useEffect)(() => {
      if ("myworkday" !== eC) return;
      let e = () => {
        let e = (0, X.getMyWorkdayStepState)(),
          t = eu || window.location.href;
        if (!e && (0, k.shouldClearMissingMyWorkdayStepProgress)({
            fillingMode: v,
            hasAutoFillResult: ei,
            isFilling: g,
            url: t
          })) {
          y(!1), el(null), S(null), C(!1);
          return
        }
        if (!e) return;
        let r = "review" === e.title || e.title.includes("review");
        r && (y(!1), el(null), S(null), C(!1))
      };
      e();
      let t = new MutationObserver(e);
      t.observe(document.body, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
      let r = window.setInterval(e, 800);
      return () => {
        t.disconnect(), window.clearInterval(r)
      }
    }, [eC, eu, g, v, ei, y, el, S, C]);
    let ez = !eM?.subscribed && eB && !!e$;
    (0, d.useEffect)(() => {
      ez && (0, c.isNumber)(eM?.credit?.autofill) && (0, ew.trackEvent)(
        "autofill_extension_credits_show", {})
    }, [ez, eM?.credit?.autofill]);
    let eV = async () => {
      if (g) return;
      let e = (0, K.getWorkdayAccountCtaStatus)({
        targetName: eC,
        match: ek
      });
      e && (eY.current = e), en(!0), eH(eA), ei && el(null), (0, K
        .sendWorkdayAccountCreationCtaClick)({
        targetName: eC,
        url: eA,
        match: ek
      });
      let t = await eF();
      t || (ex(), w("standard_autofill"), S(null), y(!0), eS())
    }, eW = () => {
      if (g) return;
      let t = e?.jobResult?.jobId ?? null;
      (0, ew.trackEvent)("autofill_update_job_info_click", {
        uid: s?.userId,
        website_url: window.location.href
      });
      let r = (0, ef.useExternalJobStore).getState();
      r.resetFormValues(), r.setJobId(null), r.setAndBroadcastAnalyzeStatus("idle"), r
        .setPendingOverrideJobId(t), ej(!0)
    }, eG = !!ev && !eI;
    return a ? eI ? (0, o.jsx)(eE, {
      setOpenExternalJob: ej
    }) : (0, o.jsxs)(o.Fragment, {
      children: [(0, o.jsxs)(i.Flex, {
        className: "job-profile-container",
        vertical: !0,
        gap: 0,
        children: [(0, o.jsxs)(i.Flex, {
          ref: O,
          vertical: !0,
          gap: 0,
          className: (0, l.default)("job-profile-scrollable-content", {
            "job-profile-scrollable-content--is-filling": g || E
          }),
          style: U > 0 ? {
            "--completion-overlay-top": `${U}px`
          } : void 0,
          children: [(0, o.jsx)("div", {
            className: "job-profile-job-section",
            children: ev ? (0, o.jsx)(A.default, {
              data: ev,
              hideActions: !0,
              hideApplicantsCount: !eD,
              style: {
                marginBottom: "0"
              }
            }) : (0, o.jsx)(b.default, {
              entryFunction: () => {
                ej(!0)
              }
            })
          }), (0, o.jsxs)(i.Flex, {
            ref: B,
            vertical: !0,
            gap: 12,
            className: "job-profile-content-section",
            children: [(0, o.jsxs)(i.Flex, {
              vertical: !0,
              className: ez ?
                "autofill-button-group autofill-button-group--with-credit" :
                "autofill-button-group",
              children: [(0, o.jsx)(I.default, {
                type: "default",
                className: "auto-fill-button",
                loading: g,
                onClick: eV,
                children: g ? "Autofilling" : eT
              }), ez && (0, c.isNumber)(eM?.credit?.autofill) && (0,
                o.jsxs)(i.Flex, {
                justify: "center",
                align: "center",
                gap: 8,
                className: "autofill-credit-row",
                children: [(0, o.jsxs)(i.Flex, {
                  gap: 2,
                  align: "center",
                  children: [(0, o.jsx)(ey.default, {
                    src: u.default,
                    alt: "credits",
                    width: 12,
                    height: 12,
                    preview: !1
                  }), (0, o.jsxs)(i.Typography.Text, {
                    className: "autofill-credit-text",
                    children: [eM?.credit?.autofill,
                      " credits left"
                    ]
                  })]
                }), (0, o.jsx)(i.Typography.Text, {
                  className: "autofill-credit-text-right",
                  onClick: () => {
                    (0, ew.trackEvent)(
                      "autofill_extension_credits_click"),
                    window.open(p.HOST_DOMAIN + V
                      .MEMBERSHIP_RETARGET_PATH,
                      "_blank")
                  },
                  children: "Get Unlimited"
                })]
              })]
            }), (0, o.jsx)(q.default, {
              currentTabJob: e,
              jobContextLoading: r,
              fallbackJobId: n,
              onRequestAddJob: () => ej(!0)
            }), eG && (0, o.jsx)(H.default, {
              disabled: g,
              onClick: eW
            })]
          }), (0, o.jsx)(x.default, {
            connected: t,
            expanded: E,
            onToggleExpanded: () => C(e => !e)
          }, Z)]
        }), t && (0, o.jsx)("div", {
          className: "continue-button-shell",
          children: (0, o.jsx)("div", {
            className: "continue-button-dock",
            children: (0, o.jsx)(D.default, {
              isFilling: g
            })
          })
        }), (0, o.jsx)(z.default, {
          currentJobId: e?.jobResult?.jobId ?? n
        })]
      }), (0, o.jsx)(R.default, {
        open: eP,
        onCancel: () => e_(!1),
        onConfirm: () => {
          eN()
        }
      }), (0, o.jsx)($.default, {}), (0, o.jsx)(M.default, {}), (0, o.jsx)(_.default, {
        onRetry: () => {
          w("standard_autofill"), S(null), eS()
        }
      })]
    }) : null
  },
  eE = ({
    setOpenExternalJob: e
  }) => {
    let [t, r] = (0, d.useState)("form"), n = (0, ef.useExternalJobStore)(e => e.jobInfo), a = (0,
      ef.useExternalJobStore)(e => e.analyzeStatus), l = (0, ef.useExternalJobStore)(e => e
      .setAndBroadcastAnalyzeStatus);
    (0, d.useEffect)(() => {
      "loading" === a ? r("analyzing") : "success" === a ? ((0, ev.isLinkedinDomain)(window.top
        .location.href) && (0, f.sendToBackground)({
        name: "saveExternalJobId",
        body: {
          linkedinJobId: (0, ev.getCurrentJobId)(),
          externalJobId: n?.jobResult?.jobId
        }
      }), r("analyze-success"), e(!1)) : "error" === a && r("analyze-failed")
    }, [a]), (0, d.useEffect)(() => () => {
      l("idle"), (0, ef.useExternalJobStore).getState().setPendingOverrideJobId(null)
    }, []);
    let s = (0, ef.useExternalJobStore)(e => e.useExternalJobDetailRequest);
    s();
    let u = () => {
        e(!1), l("idle"), (0, ef.useExternalJobStore).getState().setPendingOverrideJobId(null)
      },
      c = () => {
        r("form"), l("idle")
      },
      p = () => {
        switch (t) {
          case "form":
            return (0, o.jsx)(S.default, {
              jumpToInitPage: u
            });
          case "analyzing":
            return (0, o.jsx)(h.default, {
              backToForm: c
            });
          case "analyze-success":
            return (0, o.jsx)(i.Flex, {
              vertical: !0,
              className: "not-available-status-container",
              children: (0, o.jsx)(i.Flex, {
                vertical: !0,
                justify: "center",
                align: "center",
                gap: 12,
                className: "not-available-status-body",
                children: (0, o.jsx)(A.default, {
                  data: n,
                  hideActions: !0,
                  hideApplicantsCount: !0
                })
              })
            });
          case "analyze-failed":
            return (0, o.jsx)(v.default, {
              backToForm: c,
              backToInit: u
            })
        }
      };
    return p()
  };
r.default = eS

