// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/FormField.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"

let a=(e,t)=>{let{required:r=true,showDot:n=false}=t??{};return o.jsxs("span",{className:"autofill-info-modal-label",children:[r&&o.jsx("span",{className:"autofill-info-modal-label-required",children:"*"}),e,n&&o.jsx("span",{className:"autofill-info-modal-nav-dot"})]})},l=({label:e,required:t=true,showDot:r,error:n,fieldKey:l,className:s,children:u})=>o.jsxs(i.Flex,{vertical:true,gap:8,className:s,"data-autofill-info-field":l,children:[a(e,{required:t,showDot:r}),u,n&&o.jsx("span",{className:"autofill-info-modal-error",children:n})]})

export { a as fieldLabel, l as FormField }
