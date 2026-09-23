// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/UpdateJobInfoLink.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "clsx"

const l = { default: a }
function s({disabled: e = false,onClick: t}) {let r = () => {e || t()},n = e => {("Enter" === e.key || " " === e.key) && (e.preventDefault(), r())};return o.jsx("div", {className: l.default("update-job-info-link", {"update-job-info-link-disabled": e}),onClick: r,onKeyDown: n,role: "button",tabIndex: e ? -1 : 0,"aria-disabled": e,children: o.jsx(i.Typography.Text, {className: "update-job-info-link-text",children: "Autofill for Another Job"})})}

export default s
