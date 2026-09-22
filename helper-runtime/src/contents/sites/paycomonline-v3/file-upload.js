/**
 * Parcel module id: 8prPo
 * Resolved path: src/contents/sites/paycomonline-v3/file-upload.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"getPaycomFileUploadInput",()=>u);let o='input[type="file"]',i=8,a={resume:"personal-information-resume-field",coverLetter:"personal-information-cover-letter-field"};function l(e){return(e||"").replace(/\s+/g," ").trim().toLowerCase()}function s(e,t){return"coverLetter"===t?/\bcover\s+letter\b/.test(e):/\bresume(?:\s*\/\s*cv)?\b|\bcv\b/.test(e)}function u(e,t=document){let r=t,n=r.getElementById?.(a[e])?.querySelector(o);if(n)return n;let u=Array.from(t.querySelectorAll(o));for(let t of u){let r=t.parentElement;for(let n=0;r&&n<i;n+=1,r=r.parentElement){let n=r.querySelectorAll(o);if(1===n.length&&s(l(r.textContent),e))return t}}return null}
