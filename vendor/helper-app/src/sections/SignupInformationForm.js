/**
 * Parcel module id: iBmPn
 * Resolved path: sections/SignupInformationForm.js
 * Dependencies:
 *   ../../../FormFactory -> g3URx  =>  src/FormFactory.js
 *   ./WorkdaySignupPasswordField -> 9McrK  =>  src/sections/SignupInformationForm/WorkdaySignupPasswordField.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/shield.svg -> fn8vp  =>  src/assets/inline/images/shield.svg.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"SignupInformationForm",()=>c);var o=e("react/jsx-runtime"),i=e("antd"),a=e("data-base64:~assets/images/shield.svg"),l=n.interopDefault(a),s=e("../../../FormFactory"),u=e("./WorkdaySignupPasswordField");let c=({registrationEmail:e,dotChecker:t,updateSignupRegistrationEmail:r,passwordFieldProps:n})=>(0,o.jsxs)(i.Flex,{vertical:!0,className:"autofill-info-modal-panel autofill-info-modal-signup-panel",children:[(0,o.jsxs)("div",{className:"autofill-info-modal-signup-header",children:[(0,o.jsx)(i.Typography.Text,{className:"autofill-info-modal-card-title",children:"Sign-up Information"}),(0,o.jsxs)(i.Typography.Text,{className:"autofill-info-modal-signup-description",children:[(0,o.jsx)("strong",{children:"Workday sites"})," require an account to apply. Save your credentials here and we'll fill them in automatically."]})]}),(0,o.jsx)(i.Divider,{className:"autofill-info-modal-signup-divider"}),(0,o.jsx)(s.FormField,{label:"Registration Email",required:!1,showDot:t.hasFieldDot("signupInformation","registrationEmail"),children:(0,o.jsx)(i.Input,{value:e,placeholder:"Enter the email",className:"autofill-info-modal-control",onFocus:()=>t.clearItemDot("signupInformation.registrationEmail"),onChange:e=>{r(e.target.value)}})}),(0,o.jsx)(u.WorkdaySignupPasswordField,{...n}),(0,o.jsx)(i.Divider,{className:"autofill-info-modal-signup-divider"}),(0,o.jsxs)("div",{className:"autofill-info-modal-signup-privacy",children:[(0,o.jsx)("span",{className:"autofill-info-modal-signup-privacy-icon",children:(0,o.jsx)("img",{src:l.default,alt:"",width:16,height:16})}),(0,o.jsxs)("span",{className:"autofill-info-modal-signup-privacy-text",children:["Your password is stored in"," ",(0,o.jsx)("strong",{children:"your browser's local storage"}),". Jobright never saves or shares it with anyone."]})]})]})
