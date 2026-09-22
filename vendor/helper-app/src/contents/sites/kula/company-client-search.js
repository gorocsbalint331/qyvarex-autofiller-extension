/**
 * Parcel module id: kX13u
 * Resolved path: src/contents/sites/kula/company-client-search.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"classifyKulaCompanyField",()=>i),n.export(r,"getKulaCompanyOriginal",()=>l),n.export(r,"resolveKulaCompanyField",()=>c);var o=e("~contents/methods/cancellation");function i(e){let t=e.$input;return t?.tagName==="INPUT"&&!!t.closest?.('[data-test-id="company"]')&&/^profile\.experience\[\d+\]\.company$/.test(t.getAttribute("name")||t.id)}function a(e,t){for(let r of t){let t=Array.isArray(e[r])?e[r]:[e[r]];for(let e of t)if("string"==typeof e&&e.trim())return e.trim()}return""}function l(e){let t=a(e,["rawCompany","Raw Company","Company","Company Name","Employer"]);return t.length<=250?t:""}let s=e=>e.normalize("NFKC").trim().replace(/\s+/g," "),u=e=>s(e).toLowerCase();async function c(e,t,r){let n=0,i=!1,a=t=>(i&&r.clearSearch(e),{success:!1,failureReason:t,rounds:n}),c=l(t);if(!c)return a("missing-original-answer");try{(0,o.checkpoint)(),i=!0;let t=await r.captureCandidates(e,c);if((0,o.checkpoint)(),n=1,"failed"===t.status)return a("search-failed");let l=t.candidates.filter(e=>s(e.text)===s(c)),d=l.length?l:t.candidates.filter(e=>u(e.text)===u(c));if(1!==d.length)return a(d.length?"ambiguous-company":"no-exact-match");let f=d[0];if(!await r.commitCandidate(e,f))return a("commit-failed");return{success:!0,selected:f,rounds:n}}catch(t){if(t instanceof o.CancelledError||t instanceof o.SkippedError)throw i&&r.clearSearch(e),t;return a("client-search-failed")}}
