/**
 * Parcel module id: S4oeS
 * Resolved path: components/BulletPoints.js
 * Dependencies:
 *   @ant-design/icons -> hBaAy  =>  @ant-design/icons.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/close_mini.svg -> 5lvLL  =>  src/assets/inline/images/close_mini.svg__5lvLL.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"BulletPoints",()=>u);var o=e("react/jsx-runtime"),i=e("@ant-design/icons"),a=e("antd"),l=e("data-base64:~assets/images/close_mini.svg"),s=n.interopDefault(l);let u=({descriptions:e,onChange:t})=>(0,o.jsxs)("div",{className:"autofill-info-modal-bullet-points",children:[e.map((r,n)=>(0,o.jsxs)("div",{className:"autofill-info-modal-bullet-row",children:[(0,o.jsx)(a.Input,{value:r,placeholder:`Bullet point ${n+1}`,className:"autofill-info-modal-bullet-input",onChange:r=>{let o=[...e];o[n]=r.target.value,t(o)}}),(0,o.jsx)(a.Button,{className:"autofill-info-modal-bullet-delete",icon:(0,o.jsx)("img",{src:s.default,alt:"delete",width:12,height:12}),onClick:()=>{let r=e.filter((e,t)=>t!==n);t(r)}})]},n)),(0,o.jsx)(a.Button,{className:"autofill-info-modal-add",icon:(0,o.jsx)(i.PlusOutlined,{}),onClick:()=>t([...e,""]),children:"Add Bullet Point"})]})
