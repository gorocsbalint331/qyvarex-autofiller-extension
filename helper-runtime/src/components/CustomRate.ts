// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/CustomRate.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "clsx"
import * as s from "react"
import * as u from "../BasicButton.ts"

const l = { default: a }
const c = { default: u }
let d = ({scores: e,className: t,buttonClassName: r,onSelect: n}) => {let [a, u] = s.useState(undefined), [d, f] = s.useState(false), [p, m] = s.useState(undefined);return o.jsx(i.Flex, {gap: 8,className: t,onMouseLeave: () => {f(false)},onMouseEnter: () => {f(true)},children: e.map(e => o.jsx(c.default, {className: l.default("rate-button", "rate-button-overwrite", r, {"rate-button-hightlight": d ? undefined !== a && e <= a : undefined !== p && e <=p}),onClick: () => {m(e), n && n(e)},onMouseEnter: () => {u(e)},children: e}, e))})};

export default d
