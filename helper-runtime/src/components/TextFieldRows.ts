// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/TextFieldRows.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "../FormField.ts"

let l=({rows:e,values:t,errorPrefix:r,fieldDot:n,updateField:l,hasError:s,clearError:u})=>{let c=(e,c)=>{let d=`${r}.${e.field}`;return o.jsxs(i.Flex,{vertical:true,gap:8,flex:c,"data-autofill-info-field":d,children:[a.fieldLabel(e.label,{required:e.required,showDot:n(e.field)}),o.jsx(i.Input,{value:t[e.field],placeholder:e.placeholder,className:"autofill-info-modal-control",onChange:t=>{l(e.field,t.target.value),e.error&&u(d)}}),e.error&&s(d)&&o.jsx("span",{className:"autofill-info-modal-error",children:e.error})]},e.field)};return e.map(e=>{let t=e.fields.map(({field:e})=>e).join("-");return"row"===e.layout?o.jsx(i.Flex,{gap:8,children:e.fields.map(e=>c(e,1))},t):c(e.fields[0])})}

export { l as TextFieldRows }
