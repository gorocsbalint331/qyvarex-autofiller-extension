/**
 * Parcel module id: iqFDb
 * Resolved path: src/components/FillProgress.js
 * Dependencies:
 *   ./progress-state -> 66cuE  =>  src/components/FillProgress/progress-state.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   clsx -> jgTfo  =>  clsx.js
 *   data-base64:~assets/images/arr_down.svg -> ckVgA  =>  src/assets/inline/images/arr_down.svg.js
 *   data-base64:~assets/images/edit.svg -> f9hrG  =>  src/assets/inline/images/edit.svg__f9hrG.js
 *   numeral -> fBuMG  =>  numeral.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~components/AutoFillRuleGroup -> 8Z9FF  =>  src/components/AutoFillRuleGroup.js
 *   ~components/CheckedIcon -> 5LY8K  =>  src/components/CheckedIcon.js
 *   ~components/ExternalJob/ExternalJobIcon -> 8RkiA  =>  src/components/ExternalJob/ExternalJobIcon.js
 *   ~components/LoadingIcon -> 03WOh  =>  src/components/LoadingIcon.js
 *   ~components/UnCheckedIcon -> f7hgC  =>  src/components/UnCheckedIcon.js
 *   ~contents/pre-autofill-flow/account-flow -> IgBHR  =>  src/contents/pre-autofill-flow/account-flow.js
 *   ~store/autofillResult -> hCUzf  =>  src/store/autofillResult.js
 *   ~store/profile -> 9omPD  =>  src/store/profile.js
 *   ~store/resume -> iSBDf  =>  src/store/resume.js
 *   ~utils/fieldLabel -> 1RmGw  =>  src/utils/fieldLabel.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => M);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("clsx"),
  l = n.interopDefault(a),
  s = e("data-base64:~assets/images/arr_down.svg"),
  u = n.interopDefault(s),
  c = e("data-base64:~assets/images/edit.svg"),
  d = n.interopDefault(c),
  f = e("numeral"),
  p = n.interopDefault(f),
  m = e("react"),
  h = e("~components/AutoFillRuleGroup"),
  g = n.interopDefault(h),
  b = e("~components/CheckedIcon"),
  y = n.interopDefault(b),
  v = e("~components/ExternalJob/ExternalJobIcon"),
  w = e("~components/LoadingIcon"),
  S = n.interopDefault(w),
  E = e("~components/UnCheckedIcon"),
  x = n.interopDefault(E),
  C = e("~contents/pre-autofill-flow/account-flow"),
  A = e("~store/autofillResult"),
  k = e("~store/profile"),
  T = e("~store/resume"),
  F = e("~utils/fieldLabel"),
  I = e("~utils/trace"),
  j = e("./progress-state");

function D() {
  return (0, o.jsxs)("span", {
    className: "loading-dots",
    "aria-hidden": !0,
    children: [(0, o.jsx)("span", {}), (0, o.jsx)("span", {}), (0, o.jsx)("span", {})]
  })
}

function P(e) {
  if (!e) return "";
  let t = (0, F.buildNormalizedFieldLabelSet)(e.filledFields || []),
    r = (0, F.buildNormalizedFieldLabelSet)(e.missingFields || []),
    n = (e.fieldRequiredStatus || []).some(e => e?.required);
  for (let o of e.fieldRequiredStatus || []) {
    if (n && !o?.required) continue;
    let e = (0, F.normalizeFieldLabel)(o.label);
    if (!t.has(e) && !r.has(e)) return o.label || ""
  }
  return ""
}

function _({
  status: e
}) {
  return "completed" === e ? (0, o.jsx)(y.default, {}) : "current" === e ? (0, o.jsx)(S
    .default, {}) : (0, o.jsx)(x.default, {})
}

function L({
  label: e,
  onClick: t
}) {
  return (0, o.jsxs)("button", {
    type: "button",
    className: "signup-autofill-setup-chip",
    onClick: t,
    children: [(0, o.jsx)("img", {
      src: d.default,
      alt: "",
      width: 12,
      height: 12,
      className: "signup-autofill-setup-chip-icon"
    }), (0, o.jsx)("span", {
      children: e
    })]
  })
}

function R({
  message: e
}) {
  return (0, o.jsxs)("div", {
    className: "signup-autofill-submit-error",
    role: "alert",
    children: [(0, o.jsx)("span", {
      className: "signup-autofill-submit-error-icon",
      "aria-hidden": !0,
      children: "i"
    }), (0, o.jsx)("span", {
      className: "signup-autofill-submit-error-text",
      children: e
    })]
  })
}

function O({
  autoFillResult: e,
  isFilling: t,
  onSetupCredential: r
}) {
  let n = e.currentField ?? null,
    a = (0, F.buildNormalizedFieldLabelSet)(e.filledFields),
    s = (0, F.buildNormalizedFieldLabelSet)(e.missingFields),
    u = (0, C.getPreAutofillAccountSetupMissingSteps)(e.userAutoFillResponse),
    c = (0, j.getSignupAccountSubmitMessage)(e.userAutoFillResponse),
    d = (0, F.buildNormalizedFieldLabelSet)(u),
    f = (0, m.useRef)(new Set),
    p = e.filledFields.join("|"),
    h = e.missingFields.join("|"),
    g = u.join("|");
  (0, m.useEffect)(() => {
    (0, C.debugPreAutofillAccountSetup)("ui", "progress-render", {
      currentField: n,
      filledFields: e.filledFields,
      missingFields: e.missingFields,
      setupMissingFields: u
    })
  }, [n, p, h, g]);
  let b = e.fieldRequiredStatus;
  (0, m.useEffect)(() => {
    let e = (0, j.getSignupSetupExposureCredentialFields)({
      steps: b,
      setupMissingSet: d,
      trackedFields: f.current
    });
    for (let t of e) f.current.add(t), (0, I.trackEvent)(
      "autofill_workday_setup_password_exposure", {
        website_url: window.location.href,
        uid: k.useProfileStore.getState().userStage?.userId,
        filed: t
      })
  }, [b, g]);
  let y = (0, j.shouldShowSignupCreatingAccountGroup)(b),
    v = b.filter(e => e.metadata?.signup?.progressGroup === "create_account"),
    w = new Set(v.map(e => e.label)),
    S = b.filter(e => !w.has(e.label)),
    E = (0, j.getSignupCreatingAccountStatus)({
      childSteps: v.map(e => e.label),
      currentField: n,
      filledFields: e.filledFields,
      missingFields: e.missingFields,
      isFilling: t
    }),
    x = e => {
      let t = (0, j.getSignupSetupCredentialField)(e),
        n = (0, j.getSignupSetupStepLabel)(e);
      return t && n && (0, j.isSignupSetupStepMissing)({
        step: e,
        setupMissingSet: d
      }) ? (0, o.jsx)(L, {
        label: n,
        onClick: () => r(t)
      }) : null
    },
    A = e => {
      let r = e.label,
        i = (0, j.isSignupSetupStepMissing)({
          step: e,
          setupMissingSet: d
        });
      return (0, o.jsxs)("div", {
        className: (0, l.default)("auto-fill-field-item signup-autofill-step-row", {
          "signup-autofill-step-row--setup-missing": i
        }),
        children: [(0, o.jsx)(_, {
          status: (0, j.getSignupStepStatus)({
            step: r,
            currentField: n,
            filledSet: a,
            missingSet: s,
            isFilling: t
          })
        }), (0, o.jsx)("span", {
          className: "auto-fill-field-item-text-label signup-autofill-step-label",
          children: r
        }), x(e)]
      }, r)
    };
  return (0, o.jsx)(i.Flex, {
    className: "auto-fill-field-group signup-autofill-progress",
    vertical: !0,
    children: (0, o.jsxs)(i.Flex, {
      gap: 12,
      vertical: !0,
      children: [(0, o.jsx)(i.Typography.Title, {
        level: 4,
        className: "auto-fill-field-group-title",
        children: "Required"
      }), S.map(A), y && (0, o.jsxs)("div", {
        className: "signup-autofill-account-group",
        children: [(0, o.jsxs)("div", {
          className: "auto-fill-field-item signup-autofill-step-row",
          children: [(0, o.jsx)(_, {
            status: E
          }), (0, o.jsx)("span", {
            className: "auto-fill-field-item-text-label signup-autofill-step-label",
            children: j.SIGNUP_CREATING_ACCOUNT_LABEL
          })]
        }), (0, o.jsx)("div", {
          className: "signup-autofill-substeps",
          children: v.map(e => (0, o.jsxs)("div", {
            className: (0, l.default)("signup-autofill-substep-row", {
              "signup-autofill-substep-row--completed": "completed" ===
                (0, j.getSignupStepStatus)({
                  step: e.label,
                  currentField: n,
                  filledSet: a,
                  missingSet: s,
                  isFilling: t
                }),
              "signup-autofill-substep-row--setup-missing": (0, j
                .isSignupSetupStepMissing)({
                step: e,
                setupMissingSet: d
              })
            }),
            children: [(0, o.jsx)("span", {
              className: "signup-autofill-substep-label",
              children: e.label
            }), x(e)]
          }, e.label))
        })]
      }), c && (0, o.jsx)(R, {
        message: c
      })]
    })
  })
}

function M({
  connected: e = !1,
  expanded: t,
  onToggleExpanded: r
}) {
  let n = (0, A.useAutofillResultStore)(e => e.isFilling),
    a = (0, A.useAutofillResultStore)(e => e.fillingMode),
    s = (0, A.useAutofillResultStore)(e => e.progressTitle),
    c = (0, A.useAutofillResultStore)(e => e.autoFillResult),
    d = (0, T.useResumeStore)(e => e.setOpenAutofillInfo),
    f = (0, j.hasVisibleFillProgressResult)(c),
    h = (0, j.getSignupAccountSubmitMessage)(c?.userAutoFillResponse),
    b = (0, m.useMemo)(() => (0, j.getFillProgressCounts)(c), [c]),
    y = n || t,
    [w, S] = (0, m.useState)(!1);
  if ((0, m.useEffect)(() => {
      if (!y) {
        S(!1);
        return
      }
      let e = requestAnimationFrame(() => S(!0));
      return () => cancelAnimationFrame(e)
    }, [y]), !n && !f) return null;
  let E = (0, j.shouldShowFillProgressScanning)({
      isFilling: n,
      hasVisibleResult: f,
      fillingMode: a
    }),
    x = (0, j.shouldShowFillProgressPercent)({
      isScanning: E,
      isFilling: n,
      fillingMode: a
    }),
    F = "signup_autofill_flow" === a,
    _ = s ?? "Autofilling",
    L = _ === C.PRE_AUTOFILL_ACCOUNT_SETUP_PROGRESS_TITLE,
    M = 0 === b.totalFields.length ? 0 : b.filledFields.length / b.totalFields.length * 100,
    N = () => {
      (0, I.trackEvent)("autofill_cancel_click", {
        current_field_name: P(c),
        completion_percentage: Math.round(M)
      }), document.dispatchEvent(new CustomEvent("CancelAutoFill"))
    },
    $ = !n && f,
    B = (0, p.default)(0 === b.totalFields.length ? 0 : b.filledFields.length / b.totalFields
      .length).format("0%");
  return (0, o.jsx)(i.Flex, {
    vertical: !0,
    gap: 8,
    className: (0, l.default)("job-profile-completion-section", {
      "job-profile-completion-section-connected": e,
      "job-profile-completion-section--open": w
    }),
    children: (0, o.jsxs)(i.Flex, {
      className: "application-dashboard-progress job-profile-application-dashboard",
      vertical: !0,
      gap: 8,
      align: "start",
      children: [(0, o.jsxs)(i.Flex, {
        justify: "space-between",
        align: "center",
        className: "application-dashboard-title",
        onClick: $ ? r : void 0,
        style: $ ? {
          cursor: "pointer"
        } : void 0,
        children: [(0, o.jsx)(i.Flex, {
          gap: 8,
          align: "center",
          children: E ? (0, o.jsxs)("span", {
            className: "application-dashboard-title-label",
            children: ["Scanning the page", (0, o.jsx)(D, {})]
          }) : (0, o.jsxs)(o.Fragment, {
            children: [n || F ? (0, o.jsxs)("span", {
              className: "application-dashboard-title-label",
              children: [_, n && !L && (0, o.jsx)(D, {})]
            }) : (0, o.jsxs)("span", {
              className: "application-dashboard-title-label",
              children: [(0, o.jsxs)("span", {
                style: {
                  fontWeight: 600
                },
                children: [b.filledFields.length, "/", b
                  .totalFields.length
                ]
              }), " ", (0, o.jsxs)("span", {
                style: {
                  fontWeight: 400
                },
                children: [b.requiredOnly ? "required fields" :
                  "fields", " ", "filled"
                ]
              })]
            }), x && (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsx)("span", {
                className: "application-dashboard-title-divider",
                "aria-hidden": !0
              }), (0, o.jsx)("span", {
                className: "application-dashboard-title-value",
                children: B
              })]
            })]
          })
        }), (0, o.jsxs)(i.Flex, {
          gap: 8,
          align: "center",
          className: "application-dashboard-title-right",
          children: [n && (0, o.jsx)("button", {
            type: "button",
            className: "application-dashboard-cancel-btn",
            onClick: N,
            children: "Cancel"
          }), $ && (0, o.jsx)("img", {
            src: u.default,
            alt: "",
            width: 16,
            height: 16,
            style: {
              transform: t ? "rotate(180deg)" : void 0,
              transition: "transform 0.15s ease"
            }
          })]
        })]
      }), E ? (0, o.jsxs)("div", {
        className: "autofill-scanning",
        children: [(0, o.jsx)(v.AnalyzeStarIcon, {}), (0, o.jsxs)("div", {
          className: "tailor-resume-loading-linear-progress",
          children: [(0, o.jsx)("span", {
            className: "tailor-resume-loading-linear-progress-first"
          }), (0, o.jsx)("span", {
            className: "tailor-resume-loading-linear-progress-second"
          })]
        }), (0, o.jsxs)(i.Flex, {
          vertical: !0,
          align: "center",
          justify: "center",
          className: "autofill-scanning-copy",
          children: [(0, o.jsx)("span", {
            className: "autofill-scanning-title",
            children: "AI is scanning this page"
          }), (0, o.jsx)("span", {
            className: "autofill-scanning-subtitle",
            children: "We're checking this page for the information needed to apply."
          })]
        })]
      }) : (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(i.Progress, {
          type: "line",
          showInfo: !1,
          trailColor: "#F2F4F5",
          strokeColor: "#00F0A0",
          className: "auto-fill-progress-bar",
          percent: M
        }), c && (0, o.jsx)("div", {
          className: "auto-fill-fields-group-container",
          children: F ? (0, o.jsx)(O, {
            autoFillResult: c,
            isFilling: n,
            onSetupCredential: e => {
              (0, I.trackEvent)("autofill_workday_setup_password_click", {
                website_url: window.location.href,
                uid: k.useProfileStore.getState().userStage?.userId,
                filed: e
              }), d(!0, "signupInformation")
            }
          }) : (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(g.default, {
              autoFillResult: c,
              isFilling: n
            }), h && (0, o.jsx)(R, {
              message: h
            })]
          })
        })]
      })]
    })
  })
}

