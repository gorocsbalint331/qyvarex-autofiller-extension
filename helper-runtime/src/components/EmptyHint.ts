// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/EmptyHint.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "clsx"
import * as s from "./BasicButton.ts"

const l = { default: a }
const u = { default: s }
let c="empty-hint-",d=e=>o.jsx(i.Empty,{className:l.default(c+"container",e.className),image:e.image,description:o.jsx("div",{className:c+"message",children:e?.description}),children:!!e?.buttonText&&o.jsx(u.default,{className:c+"button",onClick:e?.onClick,children:e?.buttonText})});

export default d
