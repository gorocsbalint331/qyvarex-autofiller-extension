// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/PaymentEntry.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "clsx"
import * as s from "../assets/inline/images/turbo.png.js"
import * as c from "react"
import * as d from "@plasmohq/storage/hook"
import * as f from "../api/env-resolver.ts"
import * as p from "../constants/payment.ts"
import * as m from "../enums/storage.ts"
import * as h from "../store/profile.ts"
import * as g from "../ui/Image.ts"
import * as y from "../utils/trace.ts"

const l = { default: a }
const u = { default: s }
const b = { default: g }
let v = () => {let [e, t] = d.useStorage(m.STORAGE_KEY.TURBO_ENTRY_CLOSED, false), r = h.useProfileStore(e => e.creditsLeft), n = h.useProfileStore(e => e.creditSwitchStatus), a = (0, h.useProfileStore)(e => e.priceRecord), s = h.useProfileStore(e => e.autofillConfig),g = h.useProfileStore(e => e.paymentDataLoaded), v = !!a?.student?.monthly && !!a?.student?.quarterly && !!a?.student?.weekly, w = g && !r?.subscribed && !!n && !e;c.useEffect(() => {w && g && y.trackEvent("autofill_extension_turbo_banner_show", {})}, [w, g, r?.subscribed, v]);let S = () => {y.trackEvent("autofill_extension_turbo_banner_click", {}), window.open(f.HOST_DOMAIN +p.MEMBERSHIP_RETARGET_PATH, "_blank")},E = () => {y.trackEvent("autofill_extension_turbo_banner_close", {}), t(true)},x = () => v ? s?.autofillStuBannerCopyResolved || "Turbo for Students: Get Hired Faster!" : s?.autofillBannerCopyResolved || "Upgrade to Turbo: Get Hired Faster",C = v ? a?.student?.quarterly : a?.standard?.quarterly,A = C?.standardPrice,k = C?.currentPrice,T = null != A && null != k && A > 0 && A > k ? Math.round((A - k) / A * 100) : null;return g && w ? o.jsxs(i.Flex, {gap: 4,align: "center",justify: "space-between",className: l.default("payment-entry", {"payment-entry-padding": !v}),onClick: S,children: [o.jsxs(i.Flex, {gap: 4,align: "center",className: "payment-entry-left",children: [o.jsx(b.default, {src: u.default,width: 24,height: 24,alt: "turbo",preview: false,className: "payment-entry-icon"}), o.jsxs(i.Flex, {flex: 1,align: "center",gap: 4,className: "payment-entry-content",children: [o.jsx(i.Typography.Text, {ellipsis: true,className: "payment-entry-text",children: x()}), null != T && T > 0 && o.jsxs("span", {className: "payment-entry-amount",children: [T, "%Off"]})]})]}), o.jsx("span", {role: "button",tabIndex: 0,className: "payment-entry-close",onClick: e => {e.stopPropagation(), E()},style: {cursor: "pointer",display: "flex"},children: o.jsxs("svg", {width: "16",height: "16",viewBox: "0 0 16 16",fill: "none",xmlns: "http://www.w3.org/2000/svg",children: [o.jsx("path", {d: "M11.5 3.5L4.5 10.5",stroke: "black",strokeWidth: "1.5",strokeLinecap: "round",strokeLinejoin: "round"}), o.jsx("path", {d: "M4.5 3.5L11.5 10.5",stroke: "black",strokeWidth: "1.5",strokeLinecap: "round",strokeLinejoin: "round"})]})})]}) : null};

export default v
