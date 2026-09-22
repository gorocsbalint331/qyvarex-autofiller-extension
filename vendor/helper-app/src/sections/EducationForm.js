/**
 * Parcel module id: 5ixx0
 * Resolved path: sections/EducationForm.js
 * Dependencies:
 *   ../../../FormFactory -> g3URx  =>  src/FormFactory.js
 *   ./config -> bSnxB  =>  src/sections/EducationForm/config.js
 *   @ant-design/icons -> hBaAy  =>  @ant-design/icons.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"EducationForm",()=>u);var o=e("react/jsx-runtime"),i=e("@ant-design/icons"),a=e("antd"),l=e("../../../FormFactory"),s=e("./config");let u=({education:e,confirmingDeleteId:t,setConfirmingDeleteId:r,dotChecker:n,hasError:u,clearError:c,updateEducationField:d,removeEducation:f,addEducation:p})=>(0,o.jsxs)(a.Flex,{vertical:!0,className:"autofill-info-modal-panel",children:[e.map((i,p)=>{let m=`education.${p}`,h=e=>n.hasFieldDot(m,e);return(0,o.jsxs)("div",{className:"autofill-info-modal-card",onFocusCapture:()=>n.clearPrefixDots(m),children:[(0,o.jsxs)(a.Flex,{align:"center",gap:12,className:"autofill-info-modal-card-header",children:[(0,o.jsxs)(a.Typography.Text,{className:"autofill-info-modal-card-title",children:["Education ",p+1]}),e.length>1&&(0,o.jsx)(l.DeleteConfirm,{isConfirming:t===i.id,confirmText:"Are you sure to delete this education?",onRequestConfirm:()=>r(i.id),onConfirm:()=>{f(i.id),r(null)},onCancel:()=>r(null)})]}),(0,o.jsxs)(a.Flex,{vertical:!0,gap:16,className:"autofill-info-modal-field-group",children:[(0,o.jsx)(l.TextFieldRows,{rows:s.EDUCATION_TEXT_FIELD_ROWS,values:i,errorPrefix:`education.${p}`,fieldDot:h,updateField:(e,t)=>d(i.id,e,t),hasError:u,clearError:c}),(0,l.renderDateFieldRow)({fields:s.EDUCATION_DATE_FIELD_CONFIGS,values:i,fieldDot:h,errorPrefix:`education.${p}`,hasError:u,clearError:c,updateField:(e,t)=>d(i.id,e,t),currentChecked:i.isCurrent,onCurrentChange:e=>d(i.id,"isCurrent",e),allowEndDateWithCurrent:!0,clearAllDateErrorsOnChange:!0,constrainDateRange:!0})]})]},i.id)}),(0,o.jsx)(a.Button,{className:"autofill-info-modal-add",icon:(0,o.jsx)(i.PlusOutlined,{}),onClick:p,children:"Add Education"})]})
