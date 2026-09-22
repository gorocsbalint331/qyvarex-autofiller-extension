/**
 * Parcel module id: 1s9oG
 * Resolved path: src/components/VersionUpdate/UpdateUnavailableModal.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/warn_b.svg -> gVVEf  =>  src/assets/inline/images/warn_b.svg.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~store/container -> cKIaQ  =>  src/store/container.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("data-base64:~assets/images/warn_b.svg"),
  l = n.interopDefault(a),
  s = e("~store/container");
let u = ({
  open: e,
  onTryAgainLater: t
}) => {
  let r = (0, s.useContainerStore)(e => e.containerDom);
  return (0, o.jsx)(i.Modal, {
    open: e,
    title: null,
    footer: null,
    centered: !0,
    wrapClassName: "popup-modal-wrap jobright-version-modal-wrap",
    className: "popup-modal jobright-version-modal",
    closable: !1,
    closeIcon: !1,
    getContainer: () => r,
    destroyOnClose: !0,
    width: 320,
    children: (0, o.jsxs)("div", {
      className: "jobright-version-modal-body",
      children: [(0, o.jsx)("div", {
        className: "jobright-version-modal-warn-icon",
        children: (0, o.jsx)("img", {
          src: l.default,
          width: 32,
          height: 32,
          alt: ""
        })
      }), (0, o.jsxs)("div", {
        className: "jobright-version-modal-texts",
        children: [(0, o.jsx)("div", {
          className: "jobright-version-modal-title",
          children: "Update not available right now"
        }), (0, o.jsx)("div", {
          className: "jobright-version-modal-desc",
          children: "Chrome couldn\u2019t complete the update. Your current Autofill version will keep working."
        })]
      }), (0, o.jsx)("div", {
        className: "jobright-version-modal-actions",
        children: (0, o.jsx)("button", {
          type: "button",
          className: "jobright-version-modal-primary",
          onClick: t,
          children: "Try Again Later"
        })
      })]
    })
  })
};
r.default = u

