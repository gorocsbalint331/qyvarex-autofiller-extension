/**
 * Parcel module id: 30xAs
 * Resolved path: src/components/ExternalJob/ExternalJobForm.js
 * Dependencies:
 *   ../BackHomeButton -> dFEPH  =>  src/components/ExternalJob/BackHomeButton.js
 *   ../ExternalJobIcon -> 8RkiA  =>  src/components/ExternalJob/ExternalJobIcon.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~components/CompanyAutoComplete -> 2Kr5V  =>  src/components/CompanyAutoComplete.js
 *   ~core/jobPageScraper -> b1t9t  =>  src/core/jobPageScraper.js
 *   ~core/utils -> aTDh5  =>  src/core/utils.js
 *   ~store/externalJob -> 1YpU3  =>  src/store/externalJob.js
 *   ~store/profile -> 9omPD  =>  src/store/profile.js
 *   ~utils -> czatw  =>  src/utils.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => w);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("react"),
  l = e("~components/CompanyAutoComplete"),
  s = n.interopDefault(l),
  u = e("~core/jobPageScraper"),
  c = e("~core/utils"),
  d = e("~store/externalJob"),
  f = e("~store/profile"),
  p = e("~utils"),
  m = e("~utils/trace"),
  h = e("../BackHomeButton"),
  g = n.interopDefault(h),
  b = e("../ExternalJobIcon");
let y = {
  success: {
    bg: "#E6F9F1",
    text: "Job details are ready to review."
  },
  partial: {
    bg: "#FFF7E6",
    text: "Some details were found. Please fill in the rest."
  },
  error: {
    bg: "#FFF1F0",
    text: "No job details found on this page"
  }
};

function v({
  status: e,
  visible: t
}) {
  if ("none" === e || !t) return null;
  let {
    bg: r,
    text: n
  } = y[e];
  return (0, o.jsx)("div", {
    className: "scrape-status-toast",
    style: {
      background: r,
      borderRadius: 8,
      padding: "8px 12px",
      marginTop: 12,
      textAlign: "center"
    },
    children: (0, o.jsx)(i.Typography.Text, {
      style: {
        fontSize: 13,
        lineHeight: "16px"
      },
      children: n
    })
  })
}

function w({
  jumpToInitPage: e,
  jumpToSuccessPage: t
}) {
  let r = (0, d.useExternalJobStore)(e => e.formValues),
    n = (0, d.useExternalJobStore)(e => e.addExternalJob),
    l = (0, d.useExternalJobStore)(e => e.setFormValues),
    h = (0, d.useExternalJobStore)(e => e.isAddingAnotherJob),
    y = (0, d.useExternalJobStore)(e => e.parsePageWithMarkdown),
    w = (0, d.useExternalJobStore)(e => e.scrapeFallbackStatus),
    S = (0, f.useProfileStore)(e => e.userStage),
    [E] = (0, i.Form).useForm(),
    [x, C] = (0, a.useState)(!0),
    A = (0, a.useMemo)(() => {
      if ("success" === w) {
        let {
          jobTitle: e,
          companyName: t,
          jobDescription: n
        } = r, o = [e, t, n].filter(e => !!e).length;
        return 3 === o ? "success" : o > 0 ? "partial" : "error"
      }
      return "error" === w ? "error" : "none"
    }, [w, r]);
  return ((0, a.useEffect)(() => {
    if ("undefined" == typeof window) return;
    let e = Date.now(),
      t = async () => {
        let {
          formValues: t
        } = (0, d.useExternalJobStore).getState(), {
          data: r,
          ruleMatched: n
        } = (0, u.scrapeJobPageData)(), o = {};
        "" === t.url && (o.url = window.location.href), n && ("" === t.jobTitle && r
          .jobTitle && (o.jobTitle = r.jobTitle), "" === t.companyName && r.companyName &&
          (o.companyName = r.companyName), "" === t.jobDescription && r.jobDescription &&
          (o.jobDescription = r.jobDescription)), Object.keys(o).length > 0 && l(o);
        let i = o.jobTitle || t.jobTitle,
          a = o.companyName || t.companyName,
          s = o.jobDescription || t.jobDescription,
          c = !i || !a || !s,
          f = !n || c;
        f && await y();
        let p = (0, d.useExternalJobStore).getState().formValues,
          h = !!p.jobTitle && !!p.companyName && !!p.jobDescription;
        h && (0, m.trackEvent)("autofill_external_job_source", {
          source_type: f ? "ai_scrape" : "frontend_scrape",
          user_id: S?.userId,
          current_url: window.location.href
        });
        let g = Date.now() - e,
          b = Math.max(0, 500 - g);
        b > 0 && await new Promise(e => setTimeout(e, b)), C(!1)
      };
    t()
  }, []), (0, a.useEffect)(() => {
    if (x) return;
    let e = (0, d.useExternalJobStore).getState().formValues;
    E.setFieldsValue(e)
  }, [x]), (0, a.useEffect)(() => {
    (0, m.trackEvent)("autofill_external_form_viewed", {
      user_id: S?.userId,
      source: (0, c.checkSupportStatus)() ? "supported_page" : "unsupported_page",
      currentUrl: window.location.href
    })
  }, []), x) ? (0, o.jsxs)("section", {
    className: "external-job-scanning-page",
    children: [(0, o.jsx)("div", {
      className: "external-job-scanning-topbar",
      children: (0, o.jsx)(g.default, {
        backFunction: h ? t : e
      })
    }), (0, o.jsxs)("div", {
      className: "external-job-scanning-body",
      children: [(0, o.jsx)(b.AnalyzeStarIcon, {}), (0, o.jsxs)("div", {
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
        gap: 4,
        children: [(0, o.jsx)(i.Typography.Text, {
          className: "external-job-scanning-title",
          children: "AI is scanning this page"
        }), (0, o.jsx)(i.Typography.Text, {
          className: "external-job-scanning-subtitle",
          children: "We're pulling the key job details from this page."
        })]
      })]
    })]
  }) : (0, o.jsxs)("section", {
    className: "external-job-form-page",
    children: [(0, o.jsxs)("div", {
      className: "external-job-form-topbar",
      children: [(0, o.jsx)(g.default, {
        backFunction: h ? t : e
      }), (0, o.jsx)("h2", {
        className: "external-job-form-header-title",
        children: "Add a New Job for This Page"
      })]
    }), (0, o.jsxs)("div", {
      className: "external-job-form-body",
      children: [(0, o.jsx)(v, {
        status: A,
        visible: "none" !== A
      }), (0, o.jsxs)(i.Form, {
        className: "external-job-form",
        form: E,
        layout: "vertical",
        initialValues: r,
        onValuesChange: (e, t) => {
          l(t)
        },
        onFinish: n,
        children: [(0, o.jsx)(i.Form.Item, {
          name: "jobTitle",
          label: "Job Title",
          rules: [{
            required: !0,
            message: "Please enter the job title",
            validateTrigger: "onBlur"
          }],
          children: (0, o.jsx)(i.Input, {
            placeholder: "Enter Job Title"
          })
        }), (0, o.jsx)(i.Form.Item, {
          name: "url",
          label: "URL for Original Posting",
          rules: [{
            required: !0,
            message: "Please enter the URL for original posting",
            validateTrigger: "onBlur"
          }],
          children: (0, o.jsx)(i.Input, {
            placeholder: "Enter URL"
          })
        }), (0, o.jsx)(i.Form.Item, {
          hidden: !0,
          name: "companyId"
        }), (0, o.jsx)(i.Form.Item, {
          name: "companyName",
          label: "Company Name",
          rules: [{
            required: !0,
            validateTrigger: "onBlur"
          }],
          children: (0, o.jsx)(s.default, {
            form: E
          })
        }), (0, o.jsx)(i.Form.Item, {
          name: "jobDescription",
          label: "Job Description",
          rules: [{
            required: !0,
            validateTrigger: "onBlur"
          }, {
            validator: (e, t) => (0, p.isNounEng)(t) ? Promise.reject(
                Error("Job description should be English.")) : Promise
              .resolve()
          }],
          children: (0, o.jsx)(i.Input.TextArea, {
            placeholder: "Please paste the complete job description...",
            style: {
              padding: 12,
              resize: "none"
            }
          })
        })]
      })]
    }), (0, o.jsx)("div", {
      className: "external-job-form-bottom",
      children: (0, o.jsx)("button", {
        type: "button",
        className: "external-job-form-submit-button",
        onClick: () => {
          E.submit(), (0, m.trackEvent)("autofill_external_job_submitted", {
            user_id: S?.userId,
            source: (0, c.checkSupportStatus)() ? "supported_page" :
              "unsupported_page",
            currentUrl: window.location.href
          })
        },
        children: (0, o.jsx)("span", {
          className: "external-job-form-submit-button-text-hint",
          children: "Save"
        })
      })
    })]
  })
}

