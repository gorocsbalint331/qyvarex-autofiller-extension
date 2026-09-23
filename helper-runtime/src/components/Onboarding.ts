// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/Onboarding.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "../assets/inline/images/flash.svg.js"
import * as s from "@plasmohq/storage/hook"
import * as u from "../api/env-resolver.ts"
import * as c from "./QuickChecklistItem.js"
import * as f from "../store/profile.ts"
import * as p from "../ui/Image.ts"
import * as h from "../utils/jobright-url.ts"

const l = { default: a }
const d = { default: c }
const m = { default: p }
function g() {let e = f.useProfileStore(e => e.userStage),t = f.useProfileStore(e => e.userProfile),r = !!e?.logined,n = t?.step === 5,[, a] = s.useStorage("plugin-actived", true);return o.jsxs(i.Flex, {className: "initial-phase-container",vertical: true,gap: 32,children: [o.jsxs(i.Flex, {className: "apply-hint",vertical: true,align: "center",gap: 16,children: [o.jsx(m.default, {src: l.default,preview: false,width: 48,height: 48}), o.jsx(i.Typography.Text, {className: "hint-main-title",children: "Autofill with Jobright"}), o.jsx(i.Typography.Text, {className: "hint-description",children: "Complete your setup to start autofilling\napplications in one click."})]}), o.jsx(i.Flex, {className: "quick-start-checklist",vertical: true,gap: 8,children: o.jsxs(i.Flex, {className: "list-items-group",vertical: true,gap: 8,children: [o.jsx(d.default, {checked: r,stepNumber: 1,onClick: () => {window.open(h.buildJobrightLoginUrl(u.HOST_DOMAIN), "_blank")},title: "Set Up a Jobright Account"}), o.jsx(d.default, {checked: n,stepNumber: 2,onClick: () => {r ? window.open(`${u.HOST_DOMAIN}/jobs/profile`, "_blank") :window.open(`${u.HOST_DOMAIN}/onboarding-v3/signup`, "_blank")},title: "Complete Your Profile Details"})]})}), o.jsx(i.Flex, {className: "confirm-area",vertical: true,gap: 12,align: "center",children: o.jsx(i.Button, {className: "go-to-next-button",disabled: !e?.logined || !!e?.logined && t?.step !== 5,onClick: () => {a(true)},children: "Start Applying"})})]})}

export default g
