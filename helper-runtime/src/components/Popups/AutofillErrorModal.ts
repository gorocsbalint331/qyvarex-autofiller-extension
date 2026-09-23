// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/Popups/AutofillErrorModal.js).
 */
import * as n from "react/jsx-runtime"
import * as o from "antd"
import * as i from "../../store/container.ts"
import * as a from "../../store/profile.ts"

let l = ({onRetry: e}) => {let t = a.useProfileStore(e => e.showErrorPopup),r = a.useProfileStore(e => e.autofillErrorReason),l = a.useProfileStore(e => e.setShowErrorPopup),s = i.useContainerStore(e => e.containerDom),u = "extension_updated" === r,c = "no_fillable_form" === r,d = () => {l(false);try {(window.top ?? window).location.reload()} catch {window.location.reload()}};return n.jsxs(o.Modal, {open: t,wrapClassName: "popup-modal-wrap jobright-helper-centered-popup-wrap",className: u ? "popup-modal extension-update-modal" : "popup-modal",mask: false,title: null,closable: false,getContainer: () => s,footer: null,width: 320,children: [n.jsx("div", {className: u ? "extension-update-modal-message" : undefined,children: u ?"Jobright extension has been updated. Please refresh this page to reload the extension." :c ? "No fillable application form was found on this page." :"Autofill failed, please try it later. If the issue persists, contact us at support@jobright.ai"}), n.jsxs(o.Flex, {justify: "space-between",align: "center",gap: 12,className: u ? "popup-modal-actions extension-update-modal-actions" :"popup-modal-actions",children: [n.jsx(o.Button, {type: "default",onClick: () => {l(false)},children: "Cancel"}), u ? n.jsx(o.Button, {type: "primary",onClick: d,children: "Refresh Page"}) : n.jsx(o.Button, {type: "primary",onClick: () => {e(), l(false)},children: "Try Again"})]})]})};

export default l
