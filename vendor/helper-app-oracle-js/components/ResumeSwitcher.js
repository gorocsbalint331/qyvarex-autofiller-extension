/**
 * Parcel module id: ihewf
 * Resolved path: components/ResumeSwitcher.js (oracle restore)
 * Dependencies:
 *   ./resume-init-gate -> i5yOy  =>  resume-init-gate.js
 *   ./resume-target-job -> aM9Cd  =>  resume-target-job.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/aistar_c.svg -> akber  =>  data-base64__tilde_assets/images/aistar_c.svg__akber.js
 *   data-base64:~assets/images/arr_go.svg -> b4RGt  =>  data-base64__tilde_assets/images/arr_go.svg__b4RGt.js
 *   data-base64:~assets/images/file.svg -> heMRY  =>  data-base64__tilde_assets/images/file.svg.js
 *   data-base64:~assets/images/folder.svg -> 73Lys  =>  data-base64__tilde_assets/images/folder.svg.js
 *   data-base64:~assets/images/mail.svg -> 5YqkX  =>  data-base64__tilde_assets/images/mail.svg.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~api/env-resolver -> 45ABC  =>  _tilde_api/env-resolver.js
 *   ~components/Popups/AddJobFirstPopup -> 32feq  =>  _tilde_components/Popups/AddJobFirstPopup.js
 *   ~contents -> d4tj7  =>  _tilde_contents.js
 *   ~contents/shared/constants -> ayCbq  =>  _tilde_contents/shared/constants.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~store/autofillInfo -> 79VNP  =>  _tilde_store/autofillInfo.js
 *   ~store/cover-letter-state -> 7Ks3y  =>  _tilde_store/cover-letter-state.js
 *   ~store/externalJob -> 1YpU3  =>  _tilde_store/externalJob.js
 *   ~store/profile -> 9omPD  =>  _tilde_store/profile.js
 *   ~store/resume -> iSBDf  =>  _tilde_store/resume.js
 *   ~ui/Image -> 4wCrP  =>  _tilde_/ui/Image.js
 *   ~utils/job-id -> klnOn  =>  _tilde_utils/job-id.js
 *   ~utils/trace -> 1ik0r  =>  _tilde_utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => R);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("data-base64:~assets/images/aistar_c.svg"),
  l = n.interopDefault(a),
  s = e("data-base64:~assets/images/arr_go.svg"),
  u = n.interopDefault(s),
  c = e("data-base64:~assets/images/file.svg"),
  d = n.interopDefault(c),
  f = e("data-base64:~assets/images/folder.svg"),
  p = n.interopDefault(f),
  m = e("data-base64:~assets/images/mail.svg"),
  h = n.interopDefault(m),
  g = e("react"),
  b = e("@plasmohq/messaging"),
  y = e("~api/env-resolver"),
  v = e("~components/Popups/AddJobFirstPopup"),
  w = n.interopDefault(v),
  S = e("~contents"),
  E = e("~contents/shared/constants"),
  x = e("~core/enums"),
  C = e("~store/autofillInfo"),
  A = e("~store/cover-letter-state"),
  k = e("~store/externalJob"),
  T = e("~store/profile"),
  F = e("~store/resume"),
  I = e("~ui/Image"),
  j = n.interopDefault(I),
  D = e("~utils/job-id"),
  P = e("~utils/trace"),
  _ = e("./resume-init-gate"),
  L = e("./resume-target-job");

function R({
  currentTabJob: e,
  jobContextLoading: t = !1,
  fallbackJobId: r = null,
  onRequestAddJob: n
}) {
  let [a, s] = (0, g.useState)(!1), c = () => {
      n && s(!0)
    }, f = (0, F.useResumeStore)(e => e.initResume), m = (0, F.useResumeStore)(e => e
      .disableUploadResume), v = (0, F.useResumeStore)(e => e.resumeCollection), I = (0, F
      .useResumeStore)(e => e.lastUsedResume), R = (0, F.useResumeStore)(e => e.tailorResumeName),
    O = (0, F.useResumeStore)(e => e.setOpenResumeSelector), M = (0, F.useResumeStore)(e => e
      .tailorResume), N = (0, F.useResumeStore)(e => e.setOpenAutofillInfo), $ = (0, F
      .useResumeStore)(e => e.setOpenCoverLetterPreview), B = (0, F.useResumeStore)(e => e
      .autofillChangedFields), q = (0, F.useResumeStore)(e => e.agentCoverLetter), U = (0, F
      .useResumeStore)(e => e.currentJobCoverLetter), H = (0, F.useResumeStore)(e => e
      .coverLetterDetectionStatus), Y = (0, F.useResumeStore)(e => e.setAgentCoverLetter), z = (0, F
      .useResumeStore)(e => e.setCurrentJobCoverLetter), V = (0, F.useResumeStore)(e => e
      .setCoverLetterDetectionStatus), W = (0, C.useAutofillInfoStore)(e => e.fetchAutofillInfo),
    G = (0, k.useExternalJobStore)(e => e.jobId), K = (0, T.useProfileStore)(e => e.userStage), X =
    (0, T.useProfileStore)(e => e.userProfile), J = (0, k.useExternalJobStore)(e => e.jobInfo), Q =
    r?.trim() || null, Z = (0, g.useMemo)(() => (0, L.resolveResumeTargetJob)(e, J), [e, J]), ee = (
      0, g.useMemo)(() => Z || (Q ? {
      jobResult: {
        jobId: Q
      }
    } : null), [Q, Z]), et = (0, g.useMemo)(() => (0, _.resolveResumeInitializationJobId)({
      resumeTargetJob: Z,
      fallbackJobId: Q,
      jobContextLoading: t
    }), [Z, Q, t]), er = Z?.jobResult?.jobId || Q, en = Z?.jobResult?.jobTitle, eo = (0, g.useMemo)(
      () => v.find(e => e?.resumeId === I), [v, I]), ei = (0, g.useMemo)(() => (0, D
      .resolveTailorSourceResumeId)({
      disableUploadResume: m,
      lastUsedResume: I,
      resumeCollection: v
    }), [m, I, v]), ea = (0, g.useMemo)(() => (0, A.resolveCoverLetterState)({
      detectionStatus: H,
      agentCoverLetter: q,
      currentJobCoverLetter: U
    }), [H, q, U]), el = (0, g.useMemo)(() => {
      let e = X?.profile?.personalInfo,
        t = [e?.firstName, e?.lastName].filter(Boolean).join(" ");
      return (0, A.buildDefaultCoverLetterName)(t, en)
    }, [en, X]), es = (0, g.useRef)(!1), eu = (0, g.useRef)(K), ec = (0, g.useRef)(ee), ed = (0, g
      .useRef)(null), ef = (0, g.useRef)(null), ep = (0, g.useMemo)(() => ea.activeCoverLetter ? (0,
      A.getCoverLetterDisplayName)(ea.activeCoverLetter.coverLetterName, el) : "", [ea
      .activeCoverLetter, el
    ]);
  eu.current = K, ec.current = ee, (0, g.useEffect)(() => {
    let e = (t, r, n) => {
        ed.current = null, es.current = !0, f(t, r, n).finally(() => {
          if (ed.current) {
            let t = ed.current;
            e(!1, t.userStage, t.resumeTargetJob)
          } else es.current = !1
        })
      },
      t = (t, r) => {
        let n = eu.current,
          o = ec.current;
        if (n?.logined && (t || et)) {
          if (es.current && !t) {
            ed.current = {
              userStage: n,
              resumeTargetJob: o
            };
            return
          }
          e(t, n, o)
        }
      },
      r = (e, r, n) => {
        if ("refreshResume" === e.name) {
          t(!0, "Received 'refreshResume' message");
          let e = ec.current;
          e?.jobResult?.jobId && (0, P.trackEvent)("autofill_tailor_complete", {
            jobId: e.jobResult.jobId,
            scene: "Autofill"
          })
        }
      };
    return chrome.runtime.onMessage.addListener(r), t(!1, "Component mounted"), () => {
      ed.current = null, chrome.runtime.onMessage.removeListener(r)
    }
  }, [f, et]), (0, g.useEffect)(() => {
    W()
  }, []), (0, g.useEffect)(() => {
    let e = e => {
      e.detail?.action === x.MESSAGE_EVENTS.agentCheckCoverLetter && V(e.detail?.status || "")
    };
    return document.addEventListener("FromExtension", e), () => {
      document.removeEventListener("FromExtension", e)
    }
  }, [V]), (0, g.useEffect)(() => {
    if (Y(null), z(null), V(""), er) {
      if ((0, y.agentDomains).includes(new URL(window.location.href).hostname)) {
        document.dispatchEvent(new CustomEvent("CheckAgentCoverLetter"));
        return
      }
      S.getAutofillInstance()?.checkCoverLetter?.()
    }
  }, [er, Y, z, V]), (0, g.useEffect)(() => {
    er && ea.showModule && ef.current !== er && ((0, P.trackEvent)(
      "autofill_cover_letter_section_exposure", {}), ef.current = er)
  }, [ea.showModule, er]);
  let em = async () => {
    if (!er) {
      c();
      return
    }
    Z && (0, P.trackEvent)("autofill_tailor_click", {
      jobId: er,
      scene: "Autofill"
    }), J && G && (0, P.trackEvent)("autofill_tailor_click", {
      userId: K?.userId,
      jobId: J?.jobResult?.jobId,
      currentUrl: window.location.href
    }), await (0, b.sendToBackground)({
      name: "getTabContext",
      body: {
        command: "initListener"
      }
    }), await (0, b.sendToBackground)({
      name: "getTabContext",
      body: {
        command: "openTailorTab",
        url: (0, D.buildJobrightTailorUrl)(y.HOST_DOMAIN, er, {
          resumeId: ei
        })
      }
    })
  }, eh = async () => {
    if (!er) {
      c();
      return
    }(0, P.trackEvent)("autofill_cover_letter_generate_click", {
      has_existing: ea.hasExistingCoverLetter
    }), await (0, b.sendToBackground)({
      name: "getTabContext",
      body: {
        command: "initListener"
      }
    }), await (0, b.sendToBackground)({
      name: "getTabContext",
      body: {
        command: "openTailorTab",
        url: `${y.HOST_DOMAIN}/jobs/info/${er}?plugin_cover_letter=1`
      }
    })
  }, eg = () => {
    s(!1), n?.()
  };
  return (0, o.jsxs)(i.Flex, {
    className: "application-dashboard-base-resume",
    vertical: !0,
    gap: 12,
    children: [(0, o.jsx)(i.Flex, {
      vertical: !0,
      gap: 0,
      className: "application-dashboard-base-resume-section application-dashboard-base-resume-section--autofill",
      children: (0, o.jsxs)(i.Button, {
        className: "application-dashboard-row-action application-dashboard-resume-header",
        onClick: () => {
          (0, P.trackEvent)("autofill_info_view_click", {}), N(!0)
        },
        children: [(0, o.jsxs)(i.Flex, {
          gap: 4,
          align: "center",
          className: "application-dashboard-resume-title",
          children: [(0, o.jsx)(j.default, {
            src: p.default,
            width: 16,
            height: 16,
            preview: !1,
            draggable: !1
          }), (0, o.jsx)("span", {
            children: "Your Autofill Information"
          })]
        }), (0, o.jsxs)(i.Flex, {
          gap: 4,
          align: "center",
          className: "application-dashboard-resume-action",
          children: [B.length > 0 && (0, o.jsx)("span", {
            className: "application-dashboard-autofill-dot"
          }), (0, o.jsx)(j.default, {
            src: u.default,
            width: 16,
            height: 16,
            preview: !1,
            draggable: !1
          })]
        })]
      })
    }), (0, o.jsx)("div", {
      className: "application-dashboard-resume-divider"
    }), (0, o.jsxs)(i.Flex, {
      vertical: !0,
      gap: 8,
      className: "application-dashboard-base-resume-section application-dashboard-base-resume-section--resume",
      children: [(0, o.jsxs)(i.Button, {
        className: "application-dashboard-row-action application-dashboard-upload-row",
        onClick: () => O(!0),
        children: [(0, o.jsxs)(i.Flex, {
          gap: 4,
          align: "center",
          className: "application-dashboard-upload-header",
          children: [(0, o.jsx)(j.default, {
            src: d.default,
            width: 16,
            height: 16,
            preview: !1,
            draggable: !1
          }), (0, o.jsx)("span", {
            className: "application-dashboard-upload-title",
            children: "Upload Resume"
          })]
        }), (0, o.jsx)(i.Flex, {
          gap: 4,
          align: "center",
          className: "application-dashboard-resume-action",
          children: (0, o.jsx)(j.default, {
            src: u.default,
            width: 16,
            height: 16,
            preview: !1,
            draggable: !1
          })
        })]
      }), (() => {
        let e = !!M?.tailorId && eo?.resumeId === E.TAILOR_RESUME_ID_PREFIX + M
          .tailorId,
          t = m ? "Apply without resume" : e ? R : eo?.resumeName;
        return (0, o.jsxs)(i.Flex, {
          align: "center",
          gap: 4,
          children: [e && (0, o.jsx)("span", {
            className: "application-dashboard-customized-tag",
            children: "Customized"
          }), (0, o.jsx)(i.Typography.Text, {
            ellipsis: !0,
            className: "application-dashboard-base-resume-name",
            children: t
          })]
        })
      })(), (er || n) && (0, o.jsxs)(i.Button, {
        className: "application-dashboard-tailor-resume",
        onClick: em,
        children: [(0, o.jsx)(j.default, {
          src: l.default,
          width: 16,
          height: 16,
          preview: !1,
          draggable: !1
        }), (0, o.jsx)("span", {
          children: "Generate Custom Resume"
        })]
      })]
    }), (ea.showModule || n) && (0, o.jsxs)(o.Fragment, {
      children: [(0, o.jsx)("div", {
        className: "application-dashboard-resume-divider"
      }), (0, o.jsxs)(i.Flex, {
        vertical: !0,
        gap: 8,
        className: "application-dashboard-base-resume-section application-dashboard-base-resume-section--cover-letter",
        children: [(0, o.jsxs)(i.Flex, {
          gap: 4,
          justify: "space-between",
          align: "center",
          style: {
            cursor: ea.hasExistingCoverLetter ? "pointer" : "default"
          },
          onClick: () => {
            ea.hasExistingCoverLetter && ((0, P.trackEvent)(
              "autofill_cover_letter_view_click", {}), $(!0))
          },
          children: [(0, o.jsxs)(i.Flex, {
            gap: 4,
            align: "center",
            className: "application-dashboard-upload-header",
            children: [(0, o.jsx)(j.default, {
              src: h.default,
              width: 16,
              height: 16,
              preview: !1,
              draggable: !1
            }), (0, o.jsx)("span", {
              className: "application-dashboard-upload-title",
              children: "Upload Cover Letter"
            })]
          }), ea.hasExistingCoverLetter && (0, o.jsx)(i.Flex, {
            gap: 4,
            align: "center",
            className: "application-dashboard-resume-action",
            children: (0, o.jsx)(j.default, {
              src: u.default,
              width: 16,
              height: 16,
              preview: !1,
              draggable: !1
            })
          })]
        }), ea.activeCoverLetter && (0, o.jsx)(i.Flex, {
          align: "center",
          justify: "space-between",
          gap: 8,
          className: "application-dashboard-file-row",
          children: (0, o.jsx)(i.Typography.Text, {
            ellipsis: !0,
            className: "application-dashboard-base-resume-name application-dashboard-file-name",
            children: ep
          })
        }), (0, o.jsxs)(i.Button, {
          className: "application-dashboard-tailor-resume",
          onClick: eh,
          children: [(0, o.jsx)(j.default, {
            src: l.default,
            width: 16,
            height: 16,
            preview: !1,
            draggable: !1
          }), (0, o.jsx)("span", {
            children: "Generate Cover Letter"
          })]
        })]
      })]
    }), (0, o.jsx)(w.default, {
      open: a,
      onConfirm: eg,
      onCancel: () => s(!1)
    })]
  })
}

