/**
 * Parcel module id: iJxrg
 * Resolved path: components/ExternalJob/ExternalJobAnalyzing.js (oracle restore)
 * Dependencies:
 *   ../BackHomeButton -> dFEPH  =>  _tilde_components/ExternalJob/BackHomeButton.js
 *   ../ExternalJobIcon -> 8RkiA  =>  _tilde_components/ExternalJob/ExternalJobIcon.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~api/env-resolver -> 45ABC  =>  _tilde_api/env-resolver.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => c);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("~api/env-resolver"),
  l = e("../BackHomeButton"),
  s = n.interopDefault(l),
  u = e("../ExternalJobIcon");

function c({
  backToForm: e
}) {
  return (0, o.jsxs)(i.Flex, {
    vertical: !0,
    className: "external-job-analyze-page",
    children: [(0, o.jsx)("div", {
      className: "external-job-analyze-header",
      children: (0, o.jsx)(s.default, {
        backFunction: e
      })
    }), (0, o.jsxs)("div", {
      className: "external-job-analyze-body",
      children: [(0, o.jsx)(u.AnalyzeStarIcon, {}), (0, o.jsxs)("div", {
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
        gap: 8,
        children: [(0, o.jsx)(i.Typography.Text, {
          className: "external-job-analyze-body-title",
          children: "Analyzing New Job..."
        }), (0, o.jsxs)(i.Typography.Text, {
          className: "external-job-analyze-body-text",
          children: [
            "Takes about 10-20 seconds, you can stay on this page or go to",
            " ", (0, o.jsx)("a", {
              href: a.HOST_DOMAIN + "/jobs/external",
              rel: "noreferrer",
              target: "_blank",
              className: "external-job-analyze-body-text-link",
              children: "External Job"
            }), " ", "to view the results later."
          ]
        })]
      })]
    })]
  })
}

