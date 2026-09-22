/**
 * Parcel module id: daBan
 * Resolved path: src/components/VersionUpdate/UpdateReadyModal.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/oktag.svg -> fF7qy  =>  src/assets/inline/images/oktag.svg.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~store/container -> cKIaQ  =>  src/store/container.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("data-base64:~assets/images/oktag.svg"),
  l = n.interopDefault(a),
  s = e("~store/container");
let u = ({
  open: e,
  targetVersion: t,
  submitting: r,
  onRefresh: n,
  onLater: a
}) => {
  let u = (0, s.useContainerStore)(e => e.containerDom);
  return (0, o.jsx)(i.Modal, {
    open: e,
    title: null,
    footer: null,
    centered: !0,
    wrapClassName: "popup-modal-wrap jobright-version-modal-wrap",
    className: "popup-modal jobright-version-modal",
    closable: !1,
    closeIcon: !1,
    getContainer: () => u,
    destroyOnClose: !0,
    width: 320,
    children: (0, o.jsxs)("div", {
      className: "jobright-version-modal-body",
      children: [(0, o.jsx)("img", {
        src: l.default,
        width: 48,
        height: 48,
        alt: ""
      }), (0, o.jsxs)("div", {
        className: "jobright-version-modal-texts",
        children: [(0, o.jsx)("div", {
          className: "jobright-version-modal-title",
          children: "Autofill is ready to refresh"
        }), (0, o.jsxs)("div", {
          className: "jobright-version-modal-desc",
          children: [
            "The update has been downloaded. Refresh Autofill to finish updating",
            t ? ` to v${t}` : "", ". Your application page will stay open."
          ]
        })]
      }), (0, o.jsxs)("div", {
        className: "jobright-version-modal-actions",
        children: [(0, o.jsx)("button", {
          type: "button",
          className: "jobright-version-modal-primary",
          disabled: r,
          onClick: n,
          children: "Refresh Autofill"
        }), (0, o.jsx)("button", {
          type: "button",
          className: "jobright-version-modal-secondary",
          disabled: r,
          onClick: a,
          children: "Later"
        })]
      })]
    })
  })
};
r.default = u

