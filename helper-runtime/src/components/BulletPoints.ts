// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/BulletPoints.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "@ant-design/icons"
import * as a from "antd"
import * as l from "../assets/inline/images/close_mini.svg.js"

const s = { default: l }
let u=({descriptions:e,onChange:t})=>o.jsxs("div",{className:"autofill-info-modal-bullet-points",children:[e.map((r,n)=>o.jsxs("div",{className:"autofill-info-modal-bullet-row",children:[o.jsx(a.Input,{value:r,placeholder:`Bullet point ${n+1}`,className:"autofill-info-modal-bullet-input",onChange:r=>{let o=[...e];o[n]=r.target.value,t(o)}}),o.jsx(a.Button,{className:"autofill-info-modal-bullet-delete",icon:o.jsx("img",{src:s.default,alt:"delete",width:12,height:12}),onClick:()=>{let r=e.filter((e,t)=>t!==n);t(r)}})]},n)),o.jsx(a.Button,{className:"autofill-info-modal-add",icon:o.jsx(i.PlusOutlined,{}),onClick:()=>t([...e,""]),children:"Add Bullet Point"})]})

export { u as BulletPoints }
