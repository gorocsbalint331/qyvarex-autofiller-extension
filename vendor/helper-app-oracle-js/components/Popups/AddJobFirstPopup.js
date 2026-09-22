/**
 * Parcel module id: 32feq
 * Resolved path: components/Popups/AddJobFirstPopup.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/job.svg -> lt8tY  =>  data-base64__tilde_assets/images/job.svg.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~store/container -> cKIaQ  =>  _tilde_store/container.js
 *   ~ui/Image -> 4wCrP  =>  _tilde_/ui/Image.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("data-base64:~assets/images/job.svg"),
  l = n.interopDefault(a),
  s = e("~store/container"),
  u = e("~ui/Image"),
  c = n.interopDefault(u);
let d = ({
  open: e,
  onConfirm: t,
  onCancel: r
}) => {
  let n = (0, s.useContainerStore)(e => e.containerDom);
  return (0, o.jsxs)(i.Modal, {
    open: e,
    title: null,
    footer: null,
    centered: !0,
    wrapClassName: "popup-modal-wrap add-job-first-popup-wrap",
    className: "popup-modal add-job-first-popup",
    mask: !0,
    closable: !1,
    closeIcon: !1,
    getContainer: () => n,
    destroyOnClose: !0,
    width: 304,
    children: [(0, o.jsx)(c.default, {
      src: l.default,
      width: 48,
      height: 48,
      preview: !1,
      className: "add-job-first-popup-icon"
    }), (0, o.jsx)("div", {
      className: "add-job-first-popup-title",
      children: "Add this job first"
    }), (0, o.jsx)("div", {
      className: "add-job-first-popup-desc",
      children: "To create a custom resume or cover letter, please add this job to Jobright first."
    }), (0, o.jsxs)(i.Flex, {
      vertical: !0,
      className: "add-job-first-popup-footer",
      gap: 8,
      children: [(0, o.jsx)(i.Button, {
        type: "primary",
        className: "add-job-first-popup-confirm-btn",
        onClick: t,
        children: "Add This Job"
      }), (0, o.jsx)(i.Button, {
        type: "default",
        className: "add-job-first-popup-cancel-btn",
        onClick: r,
        children: "Not Now"
      })]
    })]
  })
};
r.default = d

