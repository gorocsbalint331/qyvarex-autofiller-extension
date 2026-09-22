/**
 * Parcel module id: 9McrK
 * Resolved path: src/sections/SignupInformationForm/WorkdaySignupPasswordField.js
 * Dependencies:
 *   @ant-design/icons -> hBaAy  =>  @ant-design/icons.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   data-base64:~assets/images/display.svg -> hhZeB  =>  src/assets/inline/images/display.svg.js
 *   data-base64:~assets/images/hide.svg -> ezsru  =>  src/assets/inline/images/hide.svg.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~utils/workday-signup-password -> 4o1kC  =>  src/utils/workday-signup-password.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"WorkdaySignupPasswordField",()=>f);var o=e("react/jsx-runtime"),i=e("@ant-design/icons"),a=e("data-base64:~assets/images/display.svg"),l=n.interopDefault(a),s=e("data-base64:~assets/images/hide.svg"),u=n.interopDefault(s),c=e("~utils/workday-signup-password");function d(e,t){let r="autofill-info-modal-signup-requirement";return e?`${r} is-passed`:t?`${r} is-error`:r}let f=({inputRef:e,value:t,isVisible:r,showErrors:n,onChange:a,onFocus:s,onBlur:f,onKeyUp:p,onToggleVisible:m})=>{let h=(0,c.validateWorkdayPassword)(t),g=r?l.default:u.default;return(0,o.jsxs)("div",{className:"autofill-info-modal-signup-password-section",children:[(0,o.jsxs)("div",{className:"autofill-info-modal-signup-password-field",children:[(0,o.jsx)("span",{className:"autofill-info-modal-label",children:"Password"}),(0,o.jsxs)("div",{className:"autofill-info-modal-signup-password-control",children:[(0,o.jsx)("input",{ref:e,value:t,type:r?"text":"password",name:"workday-signup-password",placeholder:"Enter the password",autoComplete:"new-password",className:"autofill-info-modal-signup-password-input",onInput:e=>a(e.currentTarget.value),onChange:e=>a(e.currentTarget.value),onFocus:s,onBlur:f,onKeyUp:p}),(0,o.jsx)("button",{type:"button","aria-label":r?"Hide password":"Show password",className:"autofill-info-modal-signup-password-toggle",onClick:m,children:(0,o.jsx)("img",{src:g,alt:"",width:16,height:16})})]})]}),(0,o.jsx)("div",{className:"autofill-info-modal-signup-requirements",children:h.requirements.map(e=>(0,o.jsxs)("div",{className:d(e.isMet,n),children:[(0,o.jsx)("span",{className:"autofill-info-modal-signup-requirement-mark",children:e.isMet?(0,o.jsx)(i.CheckOutlined,{}):null}),(0,o.jsx)("span",{className:"autofill-info-modal-signup-requirement-text",children:e.label})]},e.id))})]})}
