// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/Popups/AddJobFirstPopup.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "../../assets/inline/images/job.svg.js"
import * as s from "../../store/container.ts"
import * as u from "../../ui/Image.ts"

const l = { default: a }
const c = { default: u }
let d = ({open: e,onConfirm: t,onCancel: r}) => {let n = s.useContainerStore(e => e.containerDom);return o.jsxs(i.Modal, {open: e,title: null,footer: null,centered: true,wrapClassName: "popup-modal-wrap add-job-first-popup-wrap",className: "popup-modal add-job-first-popup",mask: true,closable: false,closeIcon: false,getContainer: () => n,destroyOnClose: true,width: 304,children: [o.jsx(c.default, {src: l.default,width: 48,height: 48,preview: false,className: "add-job-first-popup-icon"}), o.jsx("div", {className: "add-job-first-popup-title",children: "Add this job first"}), o.jsx("div", {className: "add-job-first-popup-desc",children: "To create a custom resume or cover letter, please add this job to Jobright first."}), o.jsxs(i.Flex, {vertical: true,className: "add-job-first-popup-footer",gap: 8,children: [o.jsx(i.Button, {type: "primary",className: "add-job-first-popup-confirm-btn",onClick: t,children: "Add This Job"}), o.jsx(i.Button, {type: "default",className: "add-job-first-popup-cancel-btn",onClick: r,children: "Not Now"})]})]})};

export default d
