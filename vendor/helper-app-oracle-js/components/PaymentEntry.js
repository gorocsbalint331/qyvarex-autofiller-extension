/**
 * Parcel module id: lMgsL
 * Resolved path: components/PaymentEntry.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/storage/hook -> 8QXHm  =>  @plasmohq/storage/hook.js
 *   antd -> 9tniX  =>  antd.js
 *   clsx -> jgTfo  =>  clsx.js
 *   data-base64:~assets/images/turbo.png -> 4hzwv  =>  data-base64__tilde_assets/images/turbo.png__4hzwv.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~api/env-resolver -> 45ABC  =>  _tilde_api/env-resolver.js
 *   ~constants/payment -> aukl5  =>  _tilde_constants/payment.js
 *   ~enums/storage -> e2WM4  =>  _tilde_enums/storage.js
 *   ~store/profile -> 9omPD  =>  _tilde_store/profile.js
 *   ~ui/Image -> 4wCrP  =>  _tilde_/ui/Image.js
 *   ~utils/trace -> 1ik0r  =>  _tilde_utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("clsx"),
  l = n.interopDefault(a),
  s = e("data-base64:~assets/images/turbo.png"),
  u = n.interopDefault(s),
  c = e("react"),
  d = e("@plasmohq/storage/hook"),
  f = e("~api/env-resolver"),
  p = e("~constants/payment"),
  m = e("~enums/storage"),
  h = e("~store/profile"),
  g = e("~ui/Image"),
  b = n.interopDefault(g),
  y = e("~utils/trace");
let v = () => {
  let [e, t] = (0, d.useStorage)(m.STORAGE_KEY.TURBO_ENTRY_CLOSED, !1), r = (0, h.useProfileStore)
    (e => e.creditsLeft), n = (0, h.useProfileStore)(e => e.creditSwitchStatus), a = (0, h
      .useProfileStore)(e => e.priceRecord), s = (0, h.useProfileStore)(e => e.autofillConfig),
    g = (0, h.useProfileStore)(e => e.paymentDataLoaded), v = !!a?.student?.monthly && !!a
    ?.student?.quarterly && !!a?.student?.weekly, w = g && !r?.subscribed && !!n && !e;
  (0, c.useEffect)(() => {
    w && g && (0, y.trackEvent)("autofill_extension_turbo_banner_show", {})
  }, [w, g, r?.subscribed, v]);
  let S = () => {
      (0, y.trackEvent)("autofill_extension_turbo_banner_click", {}), window.open(f.HOST_DOMAIN +
        p.MEMBERSHIP_RETARGET_PATH, "_blank")
    },
    E = () => {
      (0, y.trackEvent)("autofill_extension_turbo_banner_close", {}), t(!0)
    },
    x = () => v ? s?.autofillStuBannerCopyResolved || "Turbo for Students: Get Hired Faster!" : s
    ?.autofillBannerCopyResolved || "Upgrade to Turbo: Get Hired Faster",
    C = v ? a?.student?.quarterly : a?.standard?.quarterly,
    A = C?.standardPrice,
    k = C?.currentPrice,
    T = null != A && null != k && A > 0 && A > k ? Math.round((A - k) / A * 100) : null;
  return g && w ? (0, o.jsxs)(i.Flex, {
    gap: 4,
    align: "center",
    justify: "space-between",
    className: (0, l.default)("payment-entry", {
      "payment-entry-padding": !v
    }),
    onClick: S,
    children: [(0, o.jsxs)(i.Flex, {
      gap: 4,
      align: "center",
      className: "payment-entry-left",
      children: [(0, o.jsx)(b.default, {
        src: u.default,
        width: 24,
        height: 24,
        alt: "turbo",
        preview: !1,
        className: "payment-entry-icon"
      }), (0, o.jsxs)(i.Flex, {
        flex: 1,
        align: "center",
        gap: 4,
        className: "payment-entry-content",
        children: [(0, o.jsx)(i.Typography.Text, {
          ellipsis: !0,
          className: "payment-entry-text",
          children: x()
        }), null != T && T > 0 && (0, o.jsxs)("span", {
          className: "payment-entry-amount",
          children: [T, "%Off"]
        })]
      })]
    }), (0, o.jsx)("span", {
      role: "button",
      tabIndex: 0,
      className: "payment-entry-close",
      onClick: e => {
        e.stopPropagation(), E()
      },
      style: {
        cursor: "pointer",
        display: "flex"
      },
      children: (0, o.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, o.jsx)("path", {
          d: "M11.5 3.5L4.5 10.5",
          stroke: "black",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }), (0, o.jsx)("path", {
          d: "M4.5 3.5L11.5 10.5",
          stroke: "black",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })]
      })
    })]
  }) : null
};
r.default = v

