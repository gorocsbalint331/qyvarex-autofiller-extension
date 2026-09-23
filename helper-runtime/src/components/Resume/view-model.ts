// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/Resume/view-model.js).
 */
let o=7;function i(e){return e.replace(/\.[^/.]+$/,"")}function a({resumes:e,tailorResumeId:t,tailorResumeName:r,lastUsedResumeId:n}){let a=e.slice(0,o).map(e=>{let o=!!t&&e.resumeId===t;return{type:"resume",value:e.resumeId,label:o?r||e.resumeName||i(e.resumeNameWithSuffix):e.resumeName||i(e.resumeNameWithSuffix),primary:!!e.primary,customized:o,lastUsed:e.resumeId===n,targetJobTitle:e.targetJobTitle?.trim()||null}});return a.push({type:"apply-without-resume",value:"NO_RESUME",label:"Apply without resume"}),a}

export { a as buildResumeReviewItems }
