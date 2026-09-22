/**
 * Parcel module id: jjZvo
 * Resolved path: components/Resume/view-model.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"buildResumeReviewItems",()=>a);let o=7;function i(e){return e.replace(/\.[^/.]+$/,"")}function a({resumes:e,tailorResumeId:t,tailorResumeName:r,lastUsedResumeId:n}){let a=e.slice(0,o).map(e=>{let o=!!t&&e.resumeId===t;return{type:"resume",value:e.resumeId,label:o?r||e.resumeName||i(e.resumeNameWithSuffix):e.resumeName||i(e.resumeNameWithSuffix),primary:!!e.primary,customized:o,lastUsed:e.resumeId===n,targetJobTitle:e.targetJobTitle?.trim()||null}});return a.push({type:"apply-without-resume",value:"NO_RESUME",label:"Apply without resume"}),a}
