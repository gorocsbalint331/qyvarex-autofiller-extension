// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/OptionGroup.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"

let a=({options:e,value:t,onChange:r})=>o.jsx(i.Flex,{gap:8,align:"center",justify:"center",wrap:"wrap",children:e.map(e=>o.jsx("div",{className:`autofill-info-modal-option-btn${t===e?" is-selected":""}`,onClick:()=>r(e),children:e},e))})

export { a as OptionGroup }
