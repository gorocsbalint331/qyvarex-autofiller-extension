// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/WorkdayToast.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "../assets/inline/images/workday_alert.svg.js"
import * as s from "../assets/inline/images/workday_close.svg.js"

const l = { default: a }
const u = { default: s }
let c = ({onClose: e}) => o.jsxs(i.Flex, {gap: 8,align: "flex-start",className: "workday-toast",children: [o.jsx("div", {className: "workday-toast-badge",children: o.jsx("img", {src: l.default,alt: "",width: 16,height: 16})}), o.jsx(i.Typography.Text, {className: "workday-toast-text",children: "Please stay on the Workday page while Autofill fills out the form."}), o.jsx("span", {role: "button",tabIndex: 0,className: "workday-toast-close",onClick: e,children: o.jsx("img", {src: u.default,alt: "",width: 16,height: 16})})]});

export default c
