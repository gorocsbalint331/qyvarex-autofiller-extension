/**
 * Parcel module id: bXn7T
 * Resolved path: src/components/QuickChecklistItem.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/confirm.svg -> ckaaW  =>  src/assets/inline/images/confirm.svg__ckaaW.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~ui/Image -> 4wCrP  =>  src/ui/Image.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("data-base64:~assets/images/confirm.svg"),
  l = n.interopDefault(a),
  s = e("~ui/Image"),
  u = n.interopDefault(s);
let c = ({
  checked: e,
  stepNumber: t,
  title: r,
  onClick: n
}) => (0, o.jsxs)(i.Flex, {
  align: "center",
  justify: "space-between",
  className: "check-list-item",
  children: [(0, o.jsxs)(i.Flex, {
    className: "content",
    gap: 8,
    align: "center",
    children: [(0, o.jsx)("div", {
      className: "check-list-step",
      children: t
    }), (0, o.jsx)(i.Typography.Text, {
      className: "check-list-item-title",
      children: r
    })]
  }), e ? (0, o.jsx)("div", {
    className: "check-list-item-status",
    children: (0, o.jsx)(u.default, {
      preview: !1,
      src: l.default,
      height: 20,
      width: 20
    })
  }) : (0, o.jsx)(i.Button, {
    className: "check-list-item-btn",
    onClick: n,
    children: "GO"
  })]
});
r.default = c

