// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/Popups/OutofCreditModal.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "../../assets/inline/images/turbo.png.js"
import * as s from "../../api/env-resolver.ts"
import * as u from "../../constants/payment.ts"
import * as c from "../../store/container.ts"
import * as d from "../../store/profile.ts"
import * as f from "../../ui/Image.ts"
import * as m from "../../utils/trace.ts"

const l = { default: a }
const p = { default: f }
let h = () => {let e = d.useProfileStore(e => e.showOutofCredit),t = d.useProfileStore(e => e.setShowOutofCredit),r = c.useContainerStore(e => e.containerDom),n = d.useProfileStore(e => e.showOutofCreditFrom),a = d.useProfileStore(e => e.creditFeed);return o.jsxs(i.Modal, {open: e,wrapClassName: "popup-modal-wrap jobright-helper-centered-popup-wrap",className: "popup-modal",mask: false,title: null,closable: false,getContainer: () => r,footer: null,width: 320,children: [o.jsx(p.default, {src: l.default,width: 60,height: 60,preview: false}), o.jsx("div", {children: "tooltip" === n ? o.jsxs(o.Fragment, {children: ["Your credits refill to ", a?.dailyFill?.autofill," every day. Upgrade to Turbo for unlimited use."]}) : o.jsxs(o.Fragment, {children: ["You have ", o.jsx("strong", {children: "0"}), " remaining Autofill credits. Your credits will be refilled up to ",a?.dailyFill?.autofill, " tomorrow. Upgrade to Turbo for unlimited use."]})}), o.jsxs(i.Flex, {justify: "space-between",align: "center",gap: 12,className: "popup-modal-actions",children: [o.jsx(i.Button, {type: "default",onClick: () => {t(false)},children: "Cancel"}), o.jsx(i.Button, {type: "primary",onClick: () => {window.open(s.HOST_DOMAIN + u.MEMBERSHIP_RETARGET_PATH, "_blank"), t(!1), m.trackEvent("autofill_upgrade_click", {from: n ? "" : "no_credit_popup"})},children: "Upgrade"})]})]})};

export default h
