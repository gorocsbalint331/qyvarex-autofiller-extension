/**
 * Parcel module id: heASZ
 * Resolved path: components/Popups/DoubleConfirmPopup.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/note.svg -> 4U2lo  =>  data-base64__tilde_assets/images/note.svg.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~store/container -> cKIaQ  =>  _tilde_store/container.js
 *   ~store/profile -> 9omPD  =>  _tilde_store/profile.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("data-base64:~assets/images/note.svg"),
  l = n.interopDefault(a),
  s = e("react"),
  u = e("~store/container"),
  c = e("~store/profile");
let d = e => {
  let [t, r] = (0, s.useState)(!1), n = (0, c.useProfileStore)(e => e.setAutofillDoNotAskAgain),
    a = (0, u.useContainerStore)(e => e.containerDom);
  return (0, o.jsxs)(i.Modal, {
    open: e.open,
    title: null,
    footer: null,
    centered: !0,
    wrapClassName: "popup-modal-wrap jobright-helper-double-confirm-popup-wrap",
    className: "popup-modal jobright-helper-double-confirm-popup",
    mask: !1,
    closable: !1,
    closeIcon: !1,
    getContainer: () => a,
    destroyOnClose: !0,
    width: 320,
    children: [(0, o.jsx)("img", {
      src: l.default,
      width: 48,
      height: 48,
      alt: "",
      className: "jobright-helper-double-confirm-popup-icon"
    }), (0, o.jsx)("div", {
      className: "jobright-helper-double-confirm-popup-desc",
      children: "Are you sure to autofill again the current form? This will overwrite your current progress."
    }), (0, o.jsx)(i.Flex, {
      align: "center",
      justify: "center",
      className: "jobright-helper-double-confirm-popup-checkbox-row",
      children: (0, o.jsx)(i.Checkbox, {
        checked: t,
        onChange: e => r(e.target.checked),
        className: "jobright-helper-double-confirm-popup-checkbox",
        children: "Don't ask again"
      })
    }), (0, o.jsxs)(i.Flex, {
      vertical: !0,
      className: "jobright-helper-double-confirm-popup-footer",
      gap: 8,
      children: [(0, o.jsx)(i.Button, {
        type: "primary",
        className: "jobright-helper-double-confirm-popup-confirm-btn",
        onClick: () => {
          t && n(!0), e?.onConfirm?.()
        },
        children: "Yes"
      }), (0, o.jsx)(i.Button, {
        type: "default",
        className: "jobright-helper-double-confirm-popup-cancel-btn",
        onClick: e?.onCancel,
        children: "Cancel"
      })]
    })]
  })
};
r.default = d

