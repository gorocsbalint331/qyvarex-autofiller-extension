// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/QuickChecklistItem.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "../assets/inline/images/confirm.svg.js"
import * as s from "../ui/Image.ts"

const l = { default: a }
const u = { default: s }
let c = ({checked: e,stepNumber: t,title: r,onClick: n}) => o.jsxs(i.Flex, {align: "center",justify: "space-between",className: "check-list-item",children: [o.jsxs(i.Flex, {className: "content",gap: 8,align: "center",children: [o.jsx("div", {className: "check-list-step",children: t}), o.jsx(i.Typography.Text, {className: "check-list-item-title",children: r})]}), e ? o.jsx("div", {className: "check-list-item-status",children: o.jsx(u.default, {preview: false,src: l.default,height: 20,width: 20})}) : o.jsx(i.Button, {className: "check-list-item-btn",onClick: n,children: "GO"})]});

export default c
