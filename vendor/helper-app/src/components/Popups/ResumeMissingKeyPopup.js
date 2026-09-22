/**
 * Parcel module id: zWHj6
 * Resolved path: src/components/Popups/ResumeMissingKeyPopup.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~api/env-resolver -> 45ABC  =>  src/api/env-resolver.js
 *   ~store/container -> cKIaQ  =>  src/store/container.js
 *   ~store/profile -> 9omPD  =>  src/store/profile.js
 *   ~store/resume -> iSBDf  =>  src/store/resume.js
 */

e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
var n = e("react/jsx-runtime"),
  o = e("antd"),
  i = e("~api/env-resolver"),
  a = e("~store/container"),
  l = e("~store/profile"),
  s = e("~store/resume");
let u = () => {
  let e = (0, l.useProfileStore)(e => e.showResumeMissingKeyPopup),
    t = (0, l.useProfileStore)(e => e.setShowResumeMissingKeyPopup),
    r = (0, s.useResumeStore)(e => e.resumeMap),
    u = (0, s.useResumeStore)(e => e.lastUsedResume),
    c = (0, a.useContainerStore)(e => e.containerDom);
  return (0, n.jsxs)(o.Modal, {
    open: e,
    wrapClassName: "popup-modal-wrap jobright-helper-centered-popup-wrap",
    className: "popup-modal",
    mask: !1,
    title: null,
    closable: !1,
    getContainer: () => c,
    footer: null,
    width: 320,
    children: [(0, n.jsxs)("div", {
      style: {
        textAlign: "left"
      },
      children: ["Your resume is missing key info in ", (0, n.jsx)("b", {
        children: "Work Experience"
      }), " or", " ", (0, n.jsx)("b", {
        children: "Education"
      }), ". Please complete it before using Autofill."]
    }), (0, n.jsxs)(o.Flex, {
      justify: "space-between",
      align: "center",
      gap: 12,
      className: "popup-modal-actions resume-missing-modal-actions",
      children: [(0, n.jsx)(o.Button, {
        type: "default",
        className: "resume-missing-key-model-button-cancel",
        onClick: () => {
          t(!1)
        },
        children: "Cancel"
      }), (0, n.jsx)(o.Button, {
        type: "primary",
        className: "resume-missing-key-model-button-edit",
        onClick: () => {
          window.open(i.HOST_DOMAIN + `/jobs/resume/edit/${r[u].diagnoseId}`,
            "_blank"), t(!1)
        },
        children: "Edit Resume"
      })]
    })]
  })
};
r.default = u

