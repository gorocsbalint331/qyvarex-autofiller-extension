/**
 * Parcel module id: 8OIgC
 * Resolved path: components/FormField.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"fieldLabel",()=>a),n.export(r,"FormField",()=>l);var o=e("react/jsx-runtime"),i=e("antd");let a=(e,t)=>{let{required:r=!0,showDot:n=!1}=t??{};return(0,o.jsxs)("span",{className:"autofill-info-modal-label",children:[r&&(0,o.jsx)("span",{className:"autofill-info-modal-label-required",children:"*"}),e,n&&(0,o.jsx)("span",{className:"autofill-info-modal-nav-dot"})]})},l=({label:e,required:t=!0,showDot:r,error:n,fieldKey:l,className:s,children:u})=>(0,o.jsxs)(i.Flex,{vertical:!0,gap:8,className:s,"data-autofill-info-field":l,children:[a(e,{required:t,showDot:r}),u,n&&(0,o.jsx)("span",{className:"autofill-info-modal-error",children:n})]})
