// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/Resume/dirty-state.js).
 */
let o="tailor-resume-";function i({disableUploadResume:e,selectResume:t}){return e?"none":t?.startsWith(o)?"tailor":"base"}function a({disableUploadResume:e,selectResume:t,useOriginalResume:r}){return e||t?.startsWith(o)?"none":"true"===r?"original":"jobright"}let l=({initial:e,current:t})=>{let r=[];return e.disableUploadResume!==t.disableUploadResume&&r.push("disableUploadResume"),e.selectResume!==t.selectResume&&r.push("selectResume"),e.useOriginalResume!==t.useOriginalResume&&r.push("useOriginalResume"),{hasChanges:r.length>0,changedFields:r}},s=({hasChanges:e})=>!e,u=({disableUploadResume:e,selectResume:t,useOriginalResume:r})=>{let n={disableUploadResume:e,selectResume:t,useOriginalResume:r};return{selected_resume_type:i(n),selected_template_type:a(n)}}

export { l as getResumePickerChangeSummary, s as isResumePickerContinueDisabled, u as getResumePickerTrackingSnapshot }
