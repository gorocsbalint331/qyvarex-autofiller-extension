/**
 * Parcel module id: bTmbG
 * Resolved path: components/OptionGroup.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"OptionGroup",()=>a);var o=e("react/jsx-runtime"),i=e("antd");let a=({options:e,value:t,onChange:r})=>(0,o.jsx)(i.Flex,{gap:8,align:"center",justify:"center",wrap:"wrap",children:e.map(e=>(0,o.jsx)("div",{className:`autofill-info-modal-option-btn${t===e?" is-selected":""}`,onClick:()=>r(e),children:e},e))})
