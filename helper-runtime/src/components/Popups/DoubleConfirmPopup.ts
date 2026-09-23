// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/Popups/DoubleConfirmPopup.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "../../assets/inline/images/note.svg.js"
import * as s from "react"
import * as u from "../../store/container.ts"
import * as c from "../../store/profile.ts"

const l = { default: a }
let d = e => {let [t, r] = s.useState(false), n = c.useProfileStore(e => e.setAutofillDoNotAskAgain),a = u.useContainerStore(e => e.containerDom);return o.jsxs(i.Modal, {open: e.open,title: null,footer: null,centered: true,wrapClassName: "popup-modal-wrap jobright-helper-double-confirm-popup-wrap",className: "popup-modal jobright-helper-double-confirm-popup",mask: false,closable: false,closeIcon: false,getContainer: () => a,destroyOnClose: true,width: 320,children: [o.jsx("img", {src: l.default,width: 48,height: 48,alt: "",className: "jobright-helper-double-confirm-popup-icon"}), o.jsx("div", {className: "jobright-helper-double-confirm-popup-desc",children: "Are you sure to autofill again the current form? This will overwrite your current progress."}), o.jsx(i.Flex, {align: "center",justify: "center",className: "jobright-helper-double-confirm-popup-checkbox-row",children: o.jsx(i.Checkbox, {checked: t,onChange: e => r(e.target.checked),className: "jobright-helper-double-confirm-popup-checkbox",children: "Don't ask again"})}), o.jsxs(i.Flex, {vertical: true,className: "jobright-helper-double-confirm-popup-footer",gap: 8,children: [o.jsx(i.Button, {type: "primary",className: "jobright-helper-double-confirm-popup-confirm-btn",onClick: () => {t && n(true), e?.onConfirm?.()},children: "Yes"}), o.jsx(i.Button, {type: "default",className: "jobright-helper-double-confirm-popup-cancel-btn",onClick: e?.onCancel,children: "Cancel"})]})]})};

export default d
