/**
 * Parcel module id: 3laSy
 * Resolved path: components/TextFieldRows.js
 * Dependencies:
 *   ../FormField -> 8OIgC  =>  components/FormField.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"TextFieldRows",()=>l);var o=e("react/jsx-runtime"),i=e("antd"),a=e("../FormField");let l=({rows:e,values:t,errorPrefix:r,fieldDot:n,updateField:l,hasError:s,clearError:u})=>{let c=(e,c)=>{let d=`${r}.${e.field}`;return(0,o.jsxs)(i.Flex,{vertical:!0,gap:8,flex:c,"data-autofill-info-field":d,children:[(0,a.fieldLabel)(e.label,{required:e.required,showDot:n(e.field)}),(0,o.jsx)(i.Input,{value:t[e.field],placeholder:e.placeholder,className:"autofill-info-modal-control",onChange:t=>{l(e.field,t.target.value),e.error&&u(d)}}),e.error&&s(d)&&(0,o.jsx)("span",{className:"autofill-info-modal-error",children:e.error})]},e.field)};return e.map(e=>{let t=e.fields.map(({field:e})=>e).join("-");return"row"===e.layout?(0,o.jsx)(i.Flex,{gap:8,children:e.fields.map(e=>c(e,1))},t):c(e.fields[0])})}
