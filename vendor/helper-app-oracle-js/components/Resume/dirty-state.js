/**
 * Parcel module id: hOhD5
 * Resolved path: components/Resume/dirty-state.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"getResumePickerChangeSummary",()=>l),n.export(r,"isResumePickerContinueDisabled",()=>s),n.export(r,"getResumePickerTrackingSnapshot",()=>u);let o="tailor-resume-";function i({disableUploadResume:e,selectResume:t}){return e?"none":t?.startsWith(o)?"tailor":"base"}function a({disableUploadResume:e,selectResume:t,useOriginalResume:r}){return e||t?.startsWith(o)?"none":"true"===r?"original":"jobright"}let l=({initial:e,current:t})=>{let r=[];return e.disableUploadResume!==t.disableUploadResume&&r.push("disableUploadResume"),e.selectResume!==t.selectResume&&r.push("selectResume"),e.useOriginalResume!==t.useOriginalResume&&r.push("useOriginalResume"),{hasChanges:r.length>0,changedFields:r}},s=({hasChanges:e})=>!e,u=({disableUploadResume:e,selectResume:t,useOriginalResume:r})=>{let n={disableUploadResume:e,selectResume:t,useOriginalResume:r};return{selected_resume_type:i(n),selected_template_type:a(n)}}
