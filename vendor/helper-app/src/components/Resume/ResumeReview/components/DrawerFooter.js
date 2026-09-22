/**
 * Parcel module id: 2yZZ7
 * Resolved path: src/components/Resume/ResumeReview/components/DrawerFooter.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~/ui/BasicButton -> gvQGk  =>  src/ui/BasicButton.js
 *   ~/ui/Image -> 4wCrP  =>  src/ui/Image.js
 *   ~/ui/SimpleButton -> dqnbE  =>  src/ui/SimpleButton.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("~/ui/BasicButton"),
  l = n.interopDefault(a),
  s = e("~/ui/Image"),
  u = n.interopDefault(s),
  c = e("~/ui/SimpleButton"),
  d = n.interopDefault(c);
let f = ({
  primary: e,
  onClick: t,
  onReturn: r,
  items: n,
  primaryIcon: a,
  primaryMenuItems: s,
  loading: c = !1
}) => {
  let f = (0, o.jsx)(d.default, {
      shape: "round",
      className: "resume-align-submit-button",
      onClick: t,
      disabled: c,
      icon: a,
      children: e
    }),
    p = (0, o.jsx)(i.Button, {
      shape: "round",
      className: "resume-align-submit-button download-button",
      disabled: c,
      icon: a,
      children: e
    });
  return (0, o.jsxs)(i.Flex, {
    id: "resume-align-submit-container",
    gap: 12,
    children: ["function" == typeof r && (0, o.jsx)(l.default, {
      className: "resume-align-return-button",
      onClick: r,
      icon: (0, o.jsx)(u.default, {
        src: "/newimages/public/back.svg",
        width: 24,
        height: 24,
        alt: "back"
      })
    }), s && s.length ? (0, o.jsx)(i.Dropdown, {
      trigger: ["click"],
      placement: "topLeft",
      menu: {
        items: s
      },
      getPopupContainer: e => e.parentElement || document.body,
      children: p
    }) : t ? f : null, n ? n?.map(e => o.jsx(d.default, {
      shape: "round",
      className: "resume-align-submit-button",
      disabled: c || e.disabled,
      onClick: e.onClick,
      children: e.label
    }, e?.key)) : null]
  })
};
r.default = f

