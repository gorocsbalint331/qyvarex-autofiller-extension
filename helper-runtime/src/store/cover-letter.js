/**
 * Parcel module id: 71sWr
 * Resolved path: src/store/cover-letter.js
 * Dependencies:
 *   ../api/resume-helpers -> 2rFEx  =>  src/api/resume-helpers.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"resolveAgentCoverLetterViewRequest",()=>a),n.export(r,"resolveCoverLetterRefreshPlan",()=>l),n.export(r,"normalizeAgentCoverLetter",()=>s);var o=e("../api/resume-helpers");let i=e=>{if(null==e)return;let t=String(e).trim();return t||void 0},a=({url:e,agentCoverLetter:t})=>{let r=i(t?.coverLetterId)||(e?i((0,o.extractAgentCoverLetterId)(e)):void 0);return r?{coverLetterId:r}:null},l=({jobId:e})=>({currentJobId:i(e)}),s=e=>{let t=i(e?.coverLetterId);return t?{coverLetterId:t,coverLetterName:i(e?.coverLetterName)||i(e?.title)||i(e?.jobTitle)||i(e?.companyName)||"Cover Letter"}:null}
