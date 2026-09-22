/**
 * Parcel module id: iBOtA
 * Resolved path: src/components/WorkdayToast.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/workday_alert.svg -> cKisS  =>  src/assets/inline/images/workday_alert.svg.js
 *   data-base64:~assets/images/workday_close.svg -> 7pIkc  =>  src/assets/inline/images/workday_close.svg.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("data-base64:~assets/images/workday_alert.svg"),
  l = n.interopDefault(a),
  s = e("data-base64:~assets/images/workday_close.svg"),
  u = n.interopDefault(s);
let c = ({
  onClose: e
}) => (0, o.jsxs)(i.Flex, {
  gap: 8,
  align: "flex-start",
  className: "workday-toast",
  children: [(0, o.jsx)("div", {
    className: "workday-toast-badge",
    children: (0, o.jsx)("img", {
      src: l.default,
      alt: "",
      width: 16,
      height: 16
    })
  }), (0, o.jsx)(i.Typography.Text, {
    className: "workday-toast-text",
    children: "Please stay on the Workday page while Autofill fills out the form."
  }), (0, o.jsx)("span", {
    role: "button",
    tabIndex: 0,
    className: "workday-toast-close",
    onClick: e,
    children: (0, o.jsx)("img", {
      src: u.default,
      alt: "",
      width: 16,
      height: 16
    })
  })]
});
r.default = c

