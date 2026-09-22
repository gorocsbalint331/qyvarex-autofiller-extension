/**
 * Parcel module id: jCRAl
 * Resolved path: sections/WorkExperienceForm.js
 * Dependencies:
 *   ../../../FormFactory -> g3URx  =>  src/FormFactory.js
 *   ./config -> 5Jklc  =>  src/sections/WorkExperienceForm/config.js
 *   @ant-design/icons -> hBaAy  =>  @ant-design/icons.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"WorkExperienceForm",()=>u);var o=e("react/jsx-runtime"),i=e("@ant-design/icons"),a=e("antd"),l=e("../../../FormFactory"),s=e("./config");let u=({workExperience:e,confirmingDeleteId:t,setConfirmingDeleteId:r,dotChecker:n,hasError:u,clearError:c,updateWorkField:d,updateWorkDescriptions:f,removeWork:p,addWork:m})=>(0,o.jsxs)(a.Flex,{vertical:!0,className:"autofill-info-modal-panel",children:[e.map((i,m)=>{let h=`workExperience.${m}`,g=e=>n.hasFieldDot(h,e);return(0,o.jsxs)("div",{className:"autofill-info-modal-card",onFocusCapture:()=>n.clearPrefixDots(h),children:[(0,o.jsxs)(a.Flex,{align:"center",gap:12,className:"autofill-info-modal-card-header",children:[(0,o.jsxs)(a.Typography.Text,{className:"autofill-info-modal-card-title",children:["Work Experience ",m+1]}),e.length>1&&(0,o.jsx)(l.DeleteConfirm,{isConfirming:t===i.id,confirmText:"Are you sure to delete this experience?",onRequestConfirm:()=>r(i.id),onConfirm:()=>{p(i.id),r(null)},onCancel:()=>r(null)})]}),(0,o.jsxs)(a.Flex,{vertical:!0,gap:16,className:"autofill-info-modal-field-group",children:[(0,o.jsx)(l.TextFieldRows,{rows:s.WORK_TEXT_FIELD_ROWS_BEFORE_DATES,values:i,errorPrefix:`workExperience.${m}`,fieldDot:g,updateField:(e,t)=>d(i.id,e,t),hasError:u,clearError:c}),(0,l.renderDateFieldRow)({fields:s.WORK_DATE_FIELD_CONFIGS,values:i,fieldDot:g,updateField:(e,t)=>d(i.id,e,t)}),(0,o.jsx)(l.TextFieldRows,{rows:s.WORK_TEXT_FIELD_ROWS_AFTER_DATES,values:i,errorPrefix:`workExperience.${m}`,fieldDot:g,updateField:(e,t)=>d(i.id,e,t),hasError:u,clearError:c}),(0,o.jsxs)(a.Flex,{vertical:!0,gap:8,children:[(0,l.fieldLabel)("Job Description",{required:!1,showDot:g("jobDescription")}),(0,o.jsx)(l.BulletPoints,{descriptions:i.descriptions,onChange:e=>f(i.id,e)})]})]})]},i.id)}),(0,o.jsx)(a.Button,{className:"autofill-info-modal-add",icon:(0,o.jsx)(i.PlusOutlined,{}),onClick:m,children:"Add Work Experience"})]})
