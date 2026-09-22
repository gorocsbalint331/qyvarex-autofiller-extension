/**
 * Parcel module id: 4koZP
 * Resolved path: src/components/ExternalJob/ExternalJobFail.js
 * Dependencies:
 *   ../BackHomeButton -> dFEPH  =>  src/components/ExternalJob/BackHomeButton.js
 *   ../ExternalJobIcon -> 8RkiA  =>  src/components/ExternalJob/ExternalJobIcon.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~store/externalJob -> 1YpU3  =>  src/store/externalJob.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => c);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("~store/externalJob"),
  l = e("../BackHomeButton"),
  s = n.interopDefault(l),
  u = e("../ExternalJobIcon");

function c({
  backToInit: e,
  backToForm: t
}) {
  let r = (0, a.useExternalJobStore)(e => e.formValues);
  return (0, o.jsxs)(i.Flex, {
    vertical: !0,
    className: "external-job-analyze-page",
    children: [(0, o.jsx)("div", {
      className: "external-job-analyze-header",
      children: (0, o.jsx)(s.default, {
        backFunction: e
      })
    }), (0, o.jsx)("div", {
      className: "external-job-analyze-body",
      children: (0, o.jsxs)(i.Flex, {
        vertical: !0,
        align: "center",
        justify: "center",
        gap: 32,
        className: "external-job-fail-content",
        children: [(0, o.jsxs)(i.Flex, {
          vertical: !0,
          align: "center",
          justify: "center",
          gap: 16,
          className: "external-job-fail-title-block",
          children: [(0, o.jsx)(u.SadIcon, {}), (0, o.jsxs)(i.Flex, {
            vertical: !0,
            align: "center",
            justify: "center",
            gap: 4,
            className: "external-job-fail-copy",
            children: [(0, o.jsx)(i.Typography.Text, {
              className: "external-job-analyze-body-title",
              children: "Failed to Analyze Job"
            }), (0, o.jsxs)(i.Typography.Text, {
              className: "external-job-analyze-body-text",
              children: ["We couldn't analyze the", " ", (0, o.jsx)(
                "strong", {
                  children: r.jobTitle
                }), " job posting at", " ", (0, o.jsx)(
              "strong", {
                children: r.companyName
              }), ", please try again later."]
            })]
          })]
        }), (0, o.jsx)("button", {
          className: "external-job-fail-button",
          onClick: () => t(),
          children: (0, o.jsx)(i.Typography.Text, {
            className: "external-job-fail-button-text",
            children: "Back"
          })
        })]
      })
    })]
  })
}

