/**
 * Parcel module id: 12lb0
 * Resolved path: src/hooks/useStartAutofill.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~api/env-resolver -> 45ABC  =>  src/api/env-resolver.js
 *   ~contents -> d4tj7  =>  src/contents.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/sites/falcon-answer-tracking -> 2vI9E  =>  src/contents/sites/falcon-answer-tracking.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/utils -> aTDh5  =>  src/core/utils.js
 *   ~enums/http -> eJFqj  =>  src/enums/http.js
 *   ~store/autofillResult -> hCUzf  =>  src/store/autofillResult.js
 *   ~store/profile -> 9omPD  =>  src/store/profile.js
 *   ~store/resume -> iSBDf  =>  src/store/resume.js
 *   ~utils/autofill-completion -> 8ImK9  =>  src/utils/autofill-completion.js
 *   ~utils/autofill-install-attribution-client -> kEmo3  =>  src/utils/autofill-install-attribution-client.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
var n = e("react"),
  o = e("~api/env-resolver"),
  i = e("~contents"),
  a = e("~contents/methods/cancellation"),
  l = e("~contents/sites/falcon-answer-tracking"),
  s = e("~core/enums"),
  u = e("~core/utils"),
  c = e("~enums/http"),
  d = e("~store/autofillResult"),
  f = e("~store/profile"),
  p = e("~store/resume"),
  m = e("~utils/autofill-completion"),
  h = e("~utils/autofill-install-attribution-client"),
  g = e("~utils/trace");
let b = "Jobright extension has been updated. Please refresh this page to reload the extension.";

function y(e, t = {}) {
  console.debug(`[AutofillDebug] ${JSON.stringify({reason:e,...t})}`)
}
let v = (e = {}) => {
  (0, f.useProfileStore)(e => e.userProfile);
  let t = (0, f.useProfileStore)(e => e.userStage),
    r = (0, f.useProfileStore)(e => e.setShowOutofCredit),
    v = (0, f.useProfileStore)(e => e.setShowResumeMissingKeyPopup),
    w = (0, f.useProfileStore)(e => e.setShowErrorPopup),
    S = (0, f.useProfileStore)(e => e.setDoubleConfirmPopupVisible),
    E = (0, d.useAutofillResultStore)(e => e.setIsFilling),
    x = (0, d.useAutofillResultStore)(e => e.setFillingMode),
    C = (0, d.useAutofillResultStore)(e => e.setProgressTitle),
    A = (0, p.useResumeStore)(e => e.ensureResumeReadyForAutofill),
    k = (0, p.useResumeStore)(e => e.setFromAgent),
    T = (0, d.useAutofillResultStore)(e => e.setAutoFillResult),
    F = (0, d.useAutofillResultStore)(e => e.applyAutoFillProgressMessage),
    I = (0, f.useProfileStore)(e => e.refreshCreditsLeft),
    j = (0, n.useCallback)(() => {
      let e = new URL(window.location.href);
      (0, o.agentDomains).includes(e.hostname) && e.pathname.includes("/agent") && document
        .dispatchEvent(new CustomEvent("FromExtension", {
          detail: {
            status: s.APPLICATION_STATUS.FAILED,
            missingFields: [],
            errorCode: c.CUSTOM_ERROR_CODES.EXTENSION_CONTEXT_INVALIDATED,
            message: b,
            shouldRefreshPage: !0
          }
        }))
    }, []),
    D = (0, n.useCallback)(() => {
      (0, o.agentDomains).includes(window.location.hostname) && document.dispatchEvent(
        new CustomEvent("FromExtension", {
          detail: {
            status: s.APPLICATION_STATUS.FAILED,
            missingFields: [],
            errorCode: c.CUSTOM_ERROR_CODES.NO_ELEMENTS
          }
        }))
    }, []),
    P = (0, n.useCallback)(async () => {
      try {
        let e = (0, i.getAutofillInstance)();
        if (!e) return E(!0), S(!1), !1;
        {
          E(!0), S(!1), y("instance-fill-start", {
            hostname: window.location.hostname
          });
          let t = await e.fillForm();
          y("instance-fill-finished", {
            hostname: window.location.hostname,
            resultType: null === t ? "null" : typeof t
          });
          let n = (0, m.isSuccessfulAutofillCompletion)(t);
          return t == c.HTTP_STATUS_CODES.PAYMENT_REQUIRED ? (r(!0), (0, g.trackEvent)(
              "autofill_credits_limit_triggered")) : t == c.CUSTOM_ERROR_CODES
            .EXTENSION_CONTEXT_INVALIDATED ? (w(!0, "extension_updated"), j()) : t == c
            .HTTP_STATUS_CODES.CLIENT_REQUEST_TIMEOUT ? ((0, g.trackEvent)(
              "autofill_request_timeout_on_60s_limit", {
                url: window.top.location?.href
              }), w(!0)) : t == c.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR ? w(!0) : t == c
            .CUSTOM_ERROR_CODES.NO_ELEMENTS ? (w(!0, "no_fillable_form"), D()) : (0, c
              .isAutofillTerminalHttpStatus)(t) || T(t), I(), E(!1), n
        }
      } catch (e) {
        if (e instanceof a.CancelledError) return I(), E(!1), !1;
        return E(!1), console.error(e), !1
      }
    }, [j, D, E]),
    _ = (0, n.useCallback)(async (r = !1) => {
      (0, l.beginFalconResponseAnswerRequest)(), x("standard_autofill"), C(null), console.log(
        "[ResumeUploadDebug] startAutofill:ensure-resume-ready", {
          fromAgent: r,
          userLoggedIn: !!t?.logined,
          jobId: e.currentTabJob?.jobResult?.jobId
        }), await A({
        userState: t,
        currentTabJob: e.currentTabJob
      });
      let n = (0, i.getAutofillInstance)(),
        o = (0, u.shouldStartIframeAutofill)("eightfold.ai");
      if (y("iframe-autofill-gate", {
          hostname: window.location.hostname,
          pathname: window.location.pathname,
          hasTopLevelInstance: !!n,
          canStartIframeAutofill: o
        }), n) {
        o && (0, u.startIframeAutoFill)(r).catch(e => {
          console.error("Failed to start iframe autofill:", e)
        });
        let e = await P();
        e && (0, h.reportAutofillFirstUseAttribution)().catch(() => {
          console.warn("[AutofillInstallAttribution] first use upload failed", {
            reason: "event_upload_failed"
          })
        });
        return
      }
      E(!0), S(!1);
      let a = !!o && await (0, u.startIframeAutoFill)(r);
      a || E(!1)
    }, [x, C, A, t, e.currentTabJob, P, E, S]);
  return (0, n.useEffect)(() => {
    let e = e => {
      (0, o.agentDomains).includes(new URL(window.location.href).hostname) && (0, u
        .checkIframeCoverLetter)()
    };
    return document.addEventListener("CheckAgentCoverLetter", e), () => {
      document.removeEventListener("CheckAgentCoverLetter", e)
    }
  }, []), (0, n.useEffect)(() => {
    let e = new Set,
      t = t => {
        if ((0, o.agentDomains).includes(new URL(window.location.href).hostname)) {
          let t = setTimeout(() => {
            e.delete(t), k(!0), _(!0)
          }, 1e3);
          e.add(t)
        }
      };
    return document.addEventListener("StartAgentFill", t), () => {
      document.removeEventListener("StartAgentFill", t), e.forEach(e => clearTimeout(e)), e
        .clear()
    }
  }, [k, _]), (0, n.useEffect)(() => {
    let e = (e, t) => {
        if (!(0, o.agentDomains).includes(window.location.hostname)) return;
        let {
          filledFields: r = [],
          fieldRequiredStatus: n = []
        } = e ?? {}, i = new Set(r), a = n?.filter(e => e.required && !i.has(e.label)).map(
          e => e.label), l = n?.filter(e => e.required && i.has(e.label)).map(e => e.label);
        document.dispatchEvent(new CustomEvent("FromExtension", {
          detail: {
            status: 0 === t ? t : a?.length > 0 ? s.APPLICATION_STATUS.FAILED : s
              .APPLICATION_STATUS.SUCCESS,
            fieldRequiredStatus: n,
            filledFields: l,
            missingFields: a
          }
        }))
      },
      t = t => {
        if (t.data.type === s.MESSAGE_EVENTS.autoFillResultFromIframe && (T(t.data.data), E(!
            1), e(t.data.data)), t.data.type === s.MESSAGE_EVENTS.complateAgent && document
          .dispatchEvent(new CustomEvent("FromExtension", {
            detail: {
              status: s.APPLICATION_STATUS.SUCCESS,
              missingFields: []
            }
          })), t.data.type === s.MESSAGE_EVENTS.updateResultFromIframe) {
          F(t.data.data);
          let r = (0, d.useAutofillResultStore).getState().autoFillResult;
          e(r, s.APPLICATION_STATUS.RUNNING)
        }
        t.data.type === s.MESSAGE_EVENTS.agentSubmitClicked && document.dispatchEvent(
            new CustomEvent("FromExtension", {
              detail: {
                action: s.MESSAGE_EVENTS.agentSubmitClicked
              }
            })), t.data.type === s.MESSAGE_EVENTS.agentCheckCoverLetter && document
          .dispatchEvent(new CustomEvent("FromExtension", {
            detail: {
              action: s.MESSAGE_EVENTS.agentCheckCoverLetter,
              status: t.data.status
            }
          })), t.data.type === s.MESSAGE_EVENTS.sendHttpStatusIframe && (t.data.httpStatus ===
            c.HTTP_STATUS_CODES.PAYMENT_REQUIRED ? (r(!0), E(!1), I(), (0, g.trackEvent)(
              "autofill_credits_limit_triggered")) : t.data.httpStatus === c
            .CUSTOM_ERROR_CODES.EXTENSION_CONTEXT_INVALIDATED ? (w(!0, "extension_updated"),
              E(!1), j()) : t.data.httpStatus === c.HTTP_STATUS_CODES.CLIENT_REQUEST_TIMEOUT ?
            ((0, g.trackEvent)("autofill_request_timeout_on_60s_limit", {
              url: window.top.location?.href
            }), w(!0), E(!1)) : t.data.httpStatus === c.HTTP_STATUS_CODES
            .INTERNAL_SERVER_ERROR ? (w(!0), E(!1)) : t.data.httpStatus === c
            .CUSTOM_ERROR_CODES.NO_ELEMENTS ? (w(!0, "no_fillable_form"), E(!1), D()) : t.data
            .httpStatus === c.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY ? (v(!0), E(!1)) : (0, c
              .isAutofillTerminalHttpStatus)(t.data.httpStatus) && (E(!1), document
              .dispatchEvent(new CustomEvent("FromExtension", {
                detail: {
                  status: s.APPLICATION_STATUS.FAILED,
                  missingFields: []
                }
              })))), t.data.type === s.MESSAGE_EVENTS.agentStartFillingFields && document
          .dispatchEvent(new CustomEvent("FromExtension", {
            detail: {
              status: s.APPLICATION_STATUS.RUNNING
            }
          })), t.data.type === s.MESSAGE_EVENTS.autoFillCompleteFromIframe && (I(), E(!1)), t
          .data.type === s.MESSAGE_EVENTS.autoFillReloadIframe && document.dispatchEvent(
            new CustomEvent("FromExtension", {
              detail: {
                action: s.MESSAGE_EVENTS.autoFillReloadIframe,
                src: t.data.src
              }
            }))
      };
    return window.addEventListener("message", t), () => {
      window.removeEventListener("message", t)
    }
  }, [j, D, F, I, T, E, w, r, v]), {
    startAutofill: _
  }
};
r.default = v

