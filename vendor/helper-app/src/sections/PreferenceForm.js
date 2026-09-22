/**
 * Parcel module id: hinZW
 * Resolved path: sections/PreferenceForm.js
 * Dependencies:
 *   ../../../FormFactory -> g3URx  =>  src/FormFactory.js
 *   ../../constants -> 3rdkr  =>  src/forms/constants.js
 *   ./config -> 3nMIS  =>  src/sections/PreferenceForm/config.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"PreferenceForm",()=>c);var o=e("react/jsx-runtime"),i=e("antd"),a=e("react"),l=e("../../../FormFactory"),s=e("../../constants"),u=e("./config");let c=({preference:e,dotChecker:t,updatePreferenceField:r})=>{let{hasDot:n,clearDot:c}=t.forSection("preference");return(0,o.jsxs)(i.Flex,{vertical:!0,className:"autofill-info-modal-panel autofill-info-modal-pref-panel",children:[(0,u.PREFERENCE_FIELD_CONFIGS).map((t,s)=>(0,o.jsxs)(a.Fragment,{children:[s>0&&(0,o.jsx)(i.Divider,{className:"autofill-info-modal-equal-divider"}),(0,o.jsxs)(i.Flex,{align:"center",className:"autofill-info-modal-pref-row",children:[(0,l.fieldLabel)(t.label,{required:!1,showDot:n(t.field)}),(0,o.jsx)(i.Input,{value:e[t.field],placeholder:t.placeholder,className:"autofill-info-modal-pref-input",onFocus:()=>c(t.field),onChange:e=>r(t.field,e.target.value)})]})]},t.field)),(0,o.jsx)(i.Divider,{className:"autofill-info-modal-equal-divider"}),(0,o.jsxs)(i.Flex,{vertical:!0,gap:8,className:"autofill-info-modal-additional-application-info",children:[(0,l.fieldLabel)("Anything else we should know?",{required:!1,showDot:n("additionalApplicationInfo")}),(0,o.jsx)(i.Typography.Text,{className:"autofill-info-modal-additional-application-info-helper",children:"Add any details you want Jobright to consider when filling out applications."}),(0,o.jsx)(i.Input.TextArea,{value:e.additionalApplicationInfo,placeholder:"For example: work authorization, availability, salary expectations, relocation preferences, or anything you want us to mention in application answers.",maxLength:s.ADDITIONAL_APPLICATION_INFO_MAX_LENGTH,showCount:!0,autoSize:{minRows:5,maxRows:8},className:"autofill-info-modal-textarea autofill-info-modal-additional-application-info-textarea",onFocus:()=>c("additionalApplicationInfo"),onChange:e=>r("additionalApplicationInfo",e.target.value)})]})]})}
