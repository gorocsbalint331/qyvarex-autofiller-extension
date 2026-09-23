// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/Popups/ResumeMissingKeyPopup.js).
 */
import * as n from "react/jsx-runtime"
import * as o from "antd"
import * as i from "../../api/env-resolver.ts"
import * as a from "../../store/container.ts"
import * as l from "../../store/profile.ts"
import * as s from "../../store/resume.ts"

let u = () => {let e = l.useProfileStore(e => e.showResumeMissingKeyPopup),t = l.useProfileStore(e => e.setShowResumeMissingKeyPopup),r = s.useResumeStore(e => e.resumeMap),u = s.useResumeStore(e => e.lastUsedResume),c = a.useContainerStore(e => e.containerDom);return n.jsxs(o.Modal, {open: e,wrapClassName: "popup-modal-wrap jobright-helper-centered-popup-wrap",className: "popup-modal",mask: false,title: null,closable: false,getContainer: () => c,footer: null,width: 320,children: [n.jsxs("div", {style: {textAlign: "left"},children: ["Your resume is missing key info in ", n.jsx("b", {children: "Work Experience"}), " or", " ", n.jsx("b", {children: "Education"}), ". Please complete it before using Autofill."]}), n.jsxs(o.Flex, {justify: "space-between",align: "center",gap: 12,className: "popup-modal-actions resume-missing-modal-actions",children: [n.jsx(o.Button, {type: "default",className: "resume-missing-key-model-button-cancel",onClick: () => {t(false)},children: "Cancel"}), n.jsx(o.Button, {type: "primary",className: "resume-missing-key-model-button-edit",onClick: () => {window.open(i.HOST_DOMAIN + `/jobs/resume/edit/${r[u].diagnoseId}`,"_blank"), t(false)},children: "Edit Resume"})]})]})};

export default u
