/**
 * Parcel module id: jMDeX
 * Resolved path: components/Popups/OutofCreditModal.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/turbo.png -> 9oSCN  =>  data-base64__tilde_assets/images/turbo.png.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~api/env-resolver -> 45ABC  =>  _tilde_api/env-resolver.js
 *   ~constants/payment -> aukl5  =>  _tilde_constants/payment.js
 *   ~store/container -> cKIaQ  =>  _tilde_store/container.js
 *   ~store/profile -> 9omPD  =>  _tilde_store/profile.js
 *   ~ui/Image -> 4wCrP  =>  _tilde_/ui/Image.js
 *   ~utils/trace -> 1ik0r  =>  _tilde_utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("data-base64:~assets/images/turbo.png"),
  l = n.interopDefault(a),
  s = e("~api/env-resolver"),
  u = e("~constants/payment"),
  c = e("~store/container"),
  d = e("~store/profile"),
  f = e("~ui/Image"),
  p = n.interopDefault(f),
  m = e("~utils/trace");
let h = () => {
  let e = (0, d.useProfileStore)(e => e.showOutofCredit),
    t = (0, d.useProfileStore)(e => e.setShowOutofCredit),
    r = (0, c.useContainerStore)(e => e.containerDom),
    n = (0, d.useProfileStore)(e => e.showOutofCreditFrom),
    a = (0, d.useProfileStore)(e => e.creditFeed);
  return (0, o.jsxs)(i.Modal, {
    open: e,
    wrapClassName: "popup-modal-wrap jobright-helper-centered-popup-wrap",
    className: "popup-modal",
    mask: !1,
    title: null,
    closable: !1,
    getContainer: () => r,
    footer: null,
    width: 320,
    children: [(0, o.jsx)(p.default, {
      src: l.default,
      width: 60,
      height: 60,
      preview: !1
    }), (0, o.jsx)("div", {
      children: "tooltip" === n ? (0, o.jsxs)(o.Fragment, {
        children: ["Your credits refill to ", a?.dailyFill?.autofill,
          " every day. Upgrade to Turbo for unlimited use."
        ]
      }) : (0, o.jsxs)(o.Fragment, {
        children: ["You have ", (0, o.jsx)("strong", {
            children: "0"
          }), " remaining Autofill credits. Your credits will be refilled up to ",
          a?.dailyFill?.autofill, " tomorrow. Upgrade to Turbo for unlimited use."
        ]
      })
    }), (0, o.jsxs)(i.Flex, {
      justify: "space-between",
      align: "center",
      gap: 12,
      className: "popup-modal-actions",
      children: [(0, o.jsx)(i.Button, {
        type: "default",
        onClick: () => {
          t(!1)
        },
        children: "Cancel"
      }), (0, o.jsx)(i.Button, {
        type: "primary",
        onClick: () => {
          window.open(s.HOST_DOMAIN + u.MEMBERSHIP_RETARGET_PATH, "_blank"), t(!
            1), (0, m.trackEvent)("autofill_upgrade_click", {
            from: n ? "" : "no_credit_popup"
          })
        },
        children: "Upgrade"
      })]
    })]
  })
};
r.default = h

