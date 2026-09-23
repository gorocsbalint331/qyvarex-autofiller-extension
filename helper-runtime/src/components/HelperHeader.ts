// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/HelperHeader.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "../assets/inline/images/arr_subnav.svg.js"
import * as s from "../assets/inline/images/logo.svg.js"
import * as c from "../assets/inline/images/setting.svg.js"
import * as f from "react"
import * as p from "@plasmohq/storage/hook"
import * as m from "../api/env-resolver.ts"
import * as h from "./PaymentEntry.js"
import * as b from "./Popups/FeedbackPopup/Button.js"
import * as v from "./WorkdayToast.js"
import * as S from "../contents/crawler/target.js"
import * as E from "../enums/storage.ts"
import * as x from "../store/externalJob.ts"
import * as C from "../store/hide.ts"
import * as A from "../ui/Image.ts"

const l = { default: a }
const u = { default: s }
const d = { default: c }
const g = { default: h }
const y = { default: b }
const w = { default: v }
const k = { default: A }
function HelperHeader({currentTabJob: e,setOpenSetting: t}) {let [r] = p.useStorage("plugin-actived", true), n = x.useExternalJobStore(e => e.isAddingAnotherJob), a = x.useExternalJobStore(e => e.setIsAddingAnotherJob), s = (0, C.useHideStore)(e => e.setOpenCard), c = C.useHideStore(e => e.setClickOpenInAgent), h ="myworkday" === S.getTargetName(), [b, v] = p.useStorage(E.STORAGE_KEY.WORKDAY_TOAST_CLOSED, false), [A, T] = f.useState(false), F = h && !b, I = !F && !A, j =() => {v(true), T(true)};return o.jsxs(i.Flex, {className: "header",vertical: true,gap: 0,children: [F && o.jsx(w.default, {onClose: j}), I && o.jsx(g.default, {}), o.jsxs(i.Flex, {className: "helper-header-row",align: "center",justify: "space-between",gap: 12,children: [o.jsx(k.default, {src: u.default,height: 32,width: 128,alt: "logo-image",draggable: false,preview: false,style: {userSelect: "none",pointerEvents: "none"}}), o.jsxs(i.Flex, {align: "center",gap: 8,className: "helper-header-actions",children: [r && o.jsx(y.default, {}), r && o.jsx(i.Button, {className: "toggle-handler",onClick: () => t(true),children: o.jsx(k.default, {src: d.default,alt: "logo-image",preview: false})}), o.jsx(i.Button, {className: "toggle-handler",onClick: () => {n && a(false), m.agentDomains.includes(new URL(window.location.href).hostname) && c(false), s(e => !e)},children: o.jsx(k.default, {src: l.default,alt: "logo-image",preview: false})})]})]})]})}

export default HelperHeader
