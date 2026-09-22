/**
 * Parcel module id: iSvIR
 * Resolved path: src/components/NotAvailableStatus.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ahooks -> 9sqtS  =>  ahooks.js
 *   antd -> 9tniX  =>  antd.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~api/env-resolver -> 45ABC  =>  src/api/env-resolver.js
 *   ~components/ExternalJob/ExternalJobAnalyzing -> iJxrg  =>  src/components/ExternalJob/ExternalJobAnalyzing.js
 *   ~components/ExternalJob/ExternalJobEntry -> 2GxpS  =>  src/components/ExternalJob/ExternalJobEntry.js
 *   ~components/ExternalJob/ExternalJobFail -> 4koZP  =>  src/components/ExternalJob/ExternalJobFail.js
 *   ~components/ExternalJob/ExternalJobForm -> 30xAs  =>  src/components/ExternalJob/ExternalJobForm.js
 *   ~components/JobCard -> hh9tB  =>  src/components/JobCard.js
 *   ~components/ResumeSwitcher -> ihewf  =>  src/components/ResumeSwitcher.js
 *   ~contents/shared/constants -> ayCbq  =>  src/contents/shared/constants.js
 *   ~core/utils -> aTDh5  =>  src/core/utils.js
 *   ~store/externalJob -> 1YpU3  =>  src/store/externalJob.js
 *   ~utils/checkLinkedin -> 5xJv6  =>  src/utils/checkLinkedin.js
 *   ~utils/job-id -> klnOn  =>  src/utils/job-id.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("ahooks"),
  a = e("antd"),
  l = e("react"),
  s = e("@plasmohq/messaging"),
  u = e("~api/env-resolver"),
  c = e("~components/ExternalJob/ExternalJobAnalyzing"),
  d = n.interopDefault(c),
  f = e("~components/ExternalJob/ExternalJobEntry"),
  p = n.interopDefault(f),
  m = e("~components/ExternalJob/ExternalJobFail"),
  h = n.interopDefault(m),
  g = e("~components/ExternalJob/ExternalJobForm"),
  b = n.interopDefault(g),
  y = e("~components/JobCard"),
  v = n.interopDefault(y),
  w = e("~components/ResumeSwitcher"),
  S = n.interopDefault(w),
  E = e("~contents/shared/constants"),
  x = e("~core/utils"),
  C = e("~store/externalJob"),
  A = e("~utils/checkLinkedin"),
  k = e("~utils/job-id");
let T = () => (0, o.jsxs)("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, o.jsx)("circle", {
      cx: "7",
      cy: "7",
      r: "6.42",
      fill: "white",
      stroke: "black",
      strokeWidth: "1.16"
    }), (0, o.jsx)("path", {
      d: "M4 6.5C4 5.11929 5.11929 4 6.5 4",
      stroke: "black",
      strokeWidth: "1.16",
      strokeLinecap: "round"
    }), (0, o.jsx)("path", {
      d: "M12 12L12.7143 12.7143L14.5 14.5",
      stroke: "black",
      strokeWidth: "1.16",
      strokeLinecap: "round"
    })]
  }),
  F = () => {
    let [e, t] = (0, l.useState)(!1), {
      run: r
    } = (0, i.useRequest)(() => (0, s.sendToBackground)({
      name: "postAutofillFeedback",
      body: {
        url: window.location.href
      }
    }), {
      manual: !0,
      onSuccess: () => {
        t(!0)
      }
    });
    return (0, o.jsxs)(a.Flex, {
      align: "center",
      justify: "space-between",
      className: "not-available-status-banner",
      children: [(0, o.jsx)(a.Typography.Text, {
        className: "not-available-status-banner-title",
        children: "Autofill Not Supported"
      }), e ? (0, o.jsx)(a.Typography.Text, {
        className: "not-available-status-banner-action",
        children: "Request Sent!"
      }) : (0, o.jsx)(a.Typography.Text, {
        className: "not-available-status-banner-action",
        onClick: () => r(),
        children: "Submit Request"
      })]
    })
  },
  I = () => {
    let e = (0, C.useExternalJobStore)(e => e.page),
      t = (0, C.useExternalJobStore)(e => e.setPage),
      r = (0, C.useExternalJobStore)(e => e.analyzeStatus),
      n = (0, C.useExternalJobStore)(e => e.setAndBroadcastAnalyzeStatus),
      i = (0, C.useExternalJobStore)(e => e.isAddingAnotherJob),
      s = (0, C.useExternalJobStore)(e => e.setIsAddingAnotherJob),
      c = (0, C.useExternalJobStore)(e => e.resetFormValues),
      f = (0, C.useExternalJobStore)(e => e.jobInfo),
      m = (0, C.useExternalJobStore)(e => e.jobId),
      g = (0, C.useExternalJobStore)(e => e.setJobId),
      y = (0, C.useExternalJobStore)(e => e.useExternalJobDetailRequest);
    y();
    let w = (0, A.isLinkedinDomain)(window.top.location?.href),
      I = !w && !(0, x.checkSupportDomainLevel)();
    (0, l.useEffect)(() => {
      if (m) return;
      let e = (0, k.extractJobIdFromUrl)(window.location.href);
      e && g(e)
    }, [m, g]), (0, l.useEffect)(() => {
      "loading" === r ? t("analyzing") : "success" === r ? t("analyze-success") : "error" === r &&
        t("analyze-failed")
    }, [r]), (0, l.useEffect)(() => () => {
      n("idle")
    }, []);
    let j = () => {
        t("init"), n("idle"), i && s(!1)
      },
      D = () => {
        n("idle"), t("form")
      },
      P = () => {
        n("success"), t("analyze-success"), i && s(!1)
      },
      _ = () => {
        switch (e) {
          case "init":
            return (0, o.jsxs)(a.Flex, {
              vertical: !0,
              className: "not-available-status-container not-available-status-container-init",
              children: [(0, o.jsxs)(a.Flex, {
                vertical: !0,
                gap: 12,
                className: "not-available-status-body not-available-status-init-body",
                children: [I && (0, o.jsx)(F, {}), (0, o.jsx)(p.default, {
                  entryFunction: D
                }), (0, o.jsx)(S.default, {
                  currentTabJob: f,
                  onRequestAddJob: D
                })]
              }), (0, o.jsxs)("a", {
                className: "not-available-status-find-more-button",
                href: `${u.HOST_DOMAIN}${E.JOB_RECOMMEND_LIST_PATHNAME}`,
                target: "_blank",
                rel: "noreferrer",
                children: [(0, o.jsx)(T, {}), (0, o.jsx)("span", {
                  children: "Find More Jobs on Jobright"
                })]
              })]
            });
          case "form":
            return (0, o.jsx)(b.default, {
              jumpToInitPage: j,
              jumpToSuccessPage: P
            });
          case "analyzing":
            return (0, o.jsx)(d.default, {
              backToForm: D
            });
          case "analyze-success":
            return (0, o.jsx)(a.Flex, {
              vertical: !0,
              className: "not-available-status-container external-job-success-page",
              children: (0, o.jsxs)(a.Flex, {
                vertical: !0,
                gap: 12,
                className: "not-available-status-body external-job-success-body",
                children: [I && (0, o.jsx)(F, {}), (0, o.jsx)(v.default, {
                  data: f,
                  hideActions: !0,
                  hideApplicantsCount: !0
                }), (0, o.jsx)(S.default, {
                  currentTabJob: f,
                  onRequestAddJob: D
                }), (0, o.jsx)("button", {
                  className: "external-job-another-job-link",
                  onClick: () => {
                    c(), f && s(!0), D()
                  },
                  children: "Autofill for Another Job"
                })]
              })
            });
          case "analyze-failed":
            return (0, o.jsx)(h.default, {
              backToInit: j,
              backToForm: D
            })
        }
      };
    return _()
  };
r.default = I

