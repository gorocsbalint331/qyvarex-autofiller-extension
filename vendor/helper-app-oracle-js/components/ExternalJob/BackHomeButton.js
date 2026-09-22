/**
 * Parcel module id: dFEPH
 * Resolved path: components/ExternalJob/BackHomeButton.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => i);
var o = e("react/jsx-runtime");

function i({
  backFunction: e
}) {
  return (0, o.jsx)("div", {
    onClick: e,
    className: "external-job-back-home-button",
    children: (0, o.jsxs)("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [(0, o.jsx)("path", {
        d: "M9.75 2.25L2.25 9.75",
        stroke: "black",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), (0, o.jsx)("path", {
        d: "M2.25 2.25L9.75 9.75",
        stroke: "black",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })]
    })
  })
}

