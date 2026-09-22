/**
 * Parcel module id: gDCUu
 * Resolved path: sections/SkillForm.js
 * Dependencies:
 *   ./skill-input -> 44Z9L  =>  src/sections/SkillForm/skill-input.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/close_mini.svg -> eQO54  =>  src/assets/inline/images/close_mini.svg__eQO54.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"SkillForm",()=>u);var o=e("react/jsx-runtime"),i=e("antd"),a=e("data-base64:~assets/images/close_mini.svg"),l=n.interopDefault(a),s=e("./skill-input");let u=({skills:e,skillInputValue:t,setSkillInputValue:r,setSkills:n,dotChecker:a})=>{let u=a.hasItemDot("skill");return(0,o.jsxs)(i.Flex,{vertical:!0,gap:16,className:"autofill-info-modal-panel",onFocusCapture:()=>u&&a.clearItemDot("skill"),children:[(0,o.jsxs)(i.Flex,{align:"center",gap:12,className:"autofill-info-modal-card-header",children:[(0,o.jsx)(i.Typography.Text,{className:"autofill-info-modal-card-title",children:"Skills"}),u&&(0,o.jsx)("span",{className:"autofill-info-modal-nav-dot"})]}),(0,o.jsxs)("div",{className:"autofill-info-modal-tag-list",children:[e.map((e,t)=>(0,o.jsxs)("span",{className:"autofill-info-modal-tag",children:[(0,o.jsx)("span",{className:"autofill-info-modal-tag-text",title:e,children:e}),(0,o.jsx)("button",{className:"autofill-info-modal-tag-delete",onClick:()=>n(e=>e.filter((e,r)=>r!==t)),children:(0,o.jsx)("img",{src:l.default,alt:"delete",className:"autofill-info-modal-tag-delete-icon"})})]},e)),(0,o.jsx)(i.Input,{placeholder:"Add a skill",className:"autofill-info-modal-skill-input",value:t,onChange:e=>r(e.target.value),onPressEnter:t=>{let o=(0,s.addSkillAndResetInput)(e,t.currentTarget.value);o.skills!==e&&(n(o.skills),r(o.inputValue))}})]})]})}
