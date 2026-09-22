/**
 * Parcel module id: 7ej6w
 * Resolved path: components/Popups/AutofillErrorModal.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~store/container -> cKIaQ  =>  _tilde_store/container.js
 *   ~store/profile -> 9omPD  =>  _tilde_store/profile.js
 */

e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
var n = e("react/jsx-runtime"),
  o = e("antd"),
  i = e("~store/container"),
  a = e("~store/profile");
let l = ({
  onRetry: e
}) => {
  let t = (0, a.useProfileStore)(e => e.showErrorPopup),
    r = (0, a.useProfileStore)(e => e.autofillErrorReason),
    l = (0, a.useProfileStore)(e => e.setShowErrorPopup),
    s = (0, i.useContainerStore)(e => e.containerDom),
    u = "extension_updated" === r,
    c = "no_fillable_form" === r,
    d = () => {
      l(!1);
      try {
        (window.top ?? window).location.reload()
      } catch {
        window.location.reload()
      }
    };
  return (0, n.jsxs)(o.Modal, {
    open: t,
    wrapClassName: "popup-modal-wrap jobright-helper-centered-popup-wrap",
    className: u ? "popup-modal extension-update-modal" : "popup-modal",
    mask: !1,
    title: null,
    closable: !1,
    getContainer: () => s,
    footer: null,
    width: 320,
    children: [(0, n.jsx)("div", {
      className: u ? "extension-update-modal-message" : void 0,
      children: u ?
        "Jobright extension has been updated. Please refresh this page to reload the extension." :
        c ? "No fillable application form was found on this page." :
        "Autofill failed, please try it later. If the issue persists, contact us at support@jobright.ai"
    }), (0, n.jsxs)(o.Flex, {
      justify: "space-between",
      align: "center",
      gap: 12,
      className: u ? "popup-modal-actions extension-update-modal-actions" :
        "popup-modal-actions",
      children: [(0, n.jsx)(o.Button, {
        type: "default",
        onClick: () => {
          l(!1)
        },
        children: "Cancel"
      }), u ? (0, n.jsx)(o.Button, {
        type: "primary",
        onClick: d,
        children: "Refresh Page"
      }) : (0, n.jsx)(o.Button, {
        type: "primary",
        onClick: () => {
          e(), l(!1)
        },
        children: "Try Again"
      })]
    })]
  })
};
r.default = l

