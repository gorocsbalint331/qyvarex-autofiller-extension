/**
 * Parcel module id: 2GxpS
 * Resolved path: components/ExternalJob/ExternalJobEntry.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/aistar_c.svg -> 4cnn0  =>  data-base64__tilde_assets/images/aistar_c.svg.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => s);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("data-base64:~assets/images/aistar_c.svg"),
  l = n.interopDefault(a);

function s({
  entryFunction: e
}) {
  return (0, o.jsxs)("div", {
    className: "external-job-entry-container",
    onClick: () => {
      e && e()
    },
    children: [(0, o.jsxs)("div", {
      className: "external-job-entry-pill-wrapper",
      children: [(0, o.jsxs)("div", {
        className: "external-job-entry-pill",
        children: [(0, o.jsxs)("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, o.jsx)("path", {
            d: "M8 2.5V13.5",
            stroke: "black",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }), (0, o.jsx)("path", {
            d: "M13.5 8L2.5 8",
            stroke: "black",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })]
        }), (0, o.jsx)(i.Typography.Text, {
          className: "external-job-entry-pill-text",
          children: "Add This job in one click"
        })]
      }), (0, o.jsx)("img", {
        className: "external-job-entry-aistar",
        src: l.default,
        width: 20,
        height: 20,
        alt: "",
        draggable: !1
      })]
    }), (0, o.jsx)(i.Typography.Text, {
      className: "external-job-entry-text-hint",
      children: "See your match score and tailor your resume"
    })]
  })
}

