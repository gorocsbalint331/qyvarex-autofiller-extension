/**
 * Parcel module id: hfEAA
 * Resolved path: components/HelperHeader.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/storage/hook -> 8QXHm  =>  @plasmohq/storage/hook.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/arr_subnav.svg -> f3VFs  =>  data-base64__tilde_assets/images/arr_subnav.svg.js
 *   data-base64:~assets/images/logo.svg -> 9ViRe  =>  data-base64__tilde_assets/images/logo.svg.js
 *   data-base64:~assets/images/setting.svg -> eMelD  =>  data-base64__tilde_assets/images/setting.svg.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~api/env-resolver -> 45ABC  =>  _tilde_api/env-resolver.js
 *   ~components/PaymentEntry -> lMgsL  =>  _tilde_components/PaymentEntry.js
 *   ~components/Popups/FeedbackPopup/Button -> eUGsX  =>  _tilde_components/Popups/FeedbackPopup/Button.js
 *   ~components/WorkdayToast -> iBOtA  =>  _tilde_components/WorkdayToast.js
 *   ~contents/crawler/target -> kkscK  =>  _tilde_contents/crawler/target.js
 *   ~enums/storage -> e2WM4  =>  _tilde_enums/storage.js
 *   ~store/externalJob -> 1YpU3  =>  _tilde_store/externalJob.js
 *   ~store/hide -> az1YZ  =>  _tilde_store/hide.js
 *   ~ui/Image -> 4wCrP  =>  _tilde_/ui/Image.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => T);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("data-base64:~assets/images/arr_subnav.svg"),
  l = n.interopDefault(a),
  s = e("data-base64:~assets/images/logo.svg"),
  u = n.interopDefault(s),
  c = e("data-base64:~assets/images/setting.svg"),
  d = n.interopDefault(c),
  f = e("react"),
  p = e("@plasmohq/storage/hook"),
  m = e("~api/env-resolver"),
  h = e("~components/PaymentEntry"),
  g = n.interopDefault(h),
  b = e("~components/Popups/FeedbackPopup/Button"),
  y = n.interopDefault(b),
  v = e("~components/WorkdayToast"),
  w = n.interopDefault(v),
  S = e("~contents/crawler/target"),
  E = e("~enums/storage"),
  x = e("~store/externalJob"),
  C = e("~store/hide"),
  A = e("~ui/Image"),
  k = n.interopDefault(A);

function T({
  currentTabJob: e,
  setOpenSetting: t
}) {
  let [r] = (0, p.useStorage)("plugin-actived", !0), n = (0, x.useExternalJobStore)(e => e
      .isAddingAnotherJob), a = (0, x.useExternalJobStore)(e => e.setIsAddingAnotherJob), s = (0, C
      .useHideStore)(e => e.setOpenCard), c = (0, C.useHideStore)(e => e.setClickOpenInAgent), h =
    "myworkday" === (0, S.getTargetName)(), [b, v] = (0, p.useStorage)(E.STORAGE_KEY
      .WORKDAY_TOAST_CLOSED, !1), [A, T] = (0, f.useState)(!1), F = h && !b, I = !F && !A, j =
  () => {
      v(!0), T(!0)
    };
  return (0, o.jsxs)(i.Flex, {
    className: "header",
    vertical: !0,
    gap: 0,
    children: [F && (0, o.jsx)(w.default, {
      onClose: j
    }), I && (0, o.jsx)(g.default, {}), (0, o.jsxs)(i.Flex, {
      className: "helper-header-row",
      align: "center",
      justify: "space-between",
      gap: 12,
      children: [(0, o.jsx)(k.default, {
        src: u.default,
        height: 32,
        width: 128,
        alt: "logo-image",
        draggable: !1,
        preview: !1,
        style: {
          userSelect: "none",
          pointerEvents: "none"
        }
      }), (0, o.jsxs)(i.Flex, {
        align: "center",
        gap: 8,
        className: "helper-header-actions",
        children: [r && (0, o.jsx)(y.default, {}), r && (0, o.jsx)(i.Button, {
          className: "toggle-handler",
          onClick: () => t(!0),
          children: (0, o.jsx)(k.default, {
            src: d.default,
            alt: "logo-image",
            preview: !1
          })
        }), (0, o.jsx)(i.Button, {
          className: "toggle-handler",
          onClick: () => {
            n && a(!1), (0, m.agentDomains).includes(new URL(window.location
              .href).hostname) && c(!1), s(e => !e)
          },
          children: (0, o.jsx)(k.default, {
            src: l.default,
            alt: "logo-image",
            preview: !1
          })
        })]
      })]
    })]
  })
}

