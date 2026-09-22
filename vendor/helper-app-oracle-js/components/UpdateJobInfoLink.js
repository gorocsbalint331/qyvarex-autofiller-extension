/**
 * Parcel module id: fDGTw
 * Resolved path: components/UpdateJobInfoLink.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   clsx -> jgTfo  =>  clsx.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => s);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("clsx"),
  l = n.interopDefault(a);

function s({
  disabled: e = !1,
  onClick: t
}) {
  let r = () => {
      e || t()
    },
    n = e => {
      ("Enter" === e.key || " " === e.key) && (e.preventDefault(), r())
    };
  return (0, o.jsx)("div", {
    className: (0, l.default)("update-job-info-link", {
      "update-job-info-link-disabled": e
    }),
    onClick: r,
    onKeyDown: n,
    role: "button",
    tabIndex: e ? -1 : 0,
    "aria-disabled": e,
    children: (0, o.jsx)(i.Typography.Text, {
      className: "update-job-info-link-text",
      children: "Autofill for Another Job"
    })
  })
}

