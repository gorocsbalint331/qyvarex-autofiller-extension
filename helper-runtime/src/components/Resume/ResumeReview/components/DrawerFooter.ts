// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/Resume/ResumeReview/components/DrawerFooter.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "../../../../ui/BasicButton.ts"
import * as s from "../../../../ui/Image.ts"
import * as c from "../../../../ui/SimpleButton.ts"

const l = { default: a }
const u = { default: s }
const d = { default: c }
let f = ({primary: e,onClick: t,onReturn: r,items: n,primaryIcon: a,primaryMenuItems: s,loading: c = false}) => {let f = o.jsx(d.default, {shape: "round",className: "resume-align-submit-button",onClick: t,disabled: c,icon: a,children: e}),p = o.jsx(i.Button, {shape: "round",className: "resume-align-submit-button download-button",disabled: c,icon: a,children: e});return o.jsxs(i.Flex, {id: "resume-align-submit-container",gap: 12,children: ["function" == typeof r && o.jsx(l.default, {className: "resume-align-return-button",onClick: r,icon: o.jsx(u.default, {src: "/newimages/public/back.svg",width: 24,height: 24,alt: "back"})}), s && s.length ? o.jsx(i.Dropdown, {trigger: ["click"],placement: "topLeft",menu: {items: s},getPopupContainer: e => e.parentElement || document.body,children: p}) : t ? f : null, n ? n?.map(e => o.jsx(d.default, {shape: "round",className: "resume-align-submit-button",disabled: c || e.disabled,onClick: e.onClick,children: e.label}, e?.key)) : null]})};

export default f
