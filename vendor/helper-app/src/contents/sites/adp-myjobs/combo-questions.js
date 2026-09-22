/**
 * Parcel module id: cVef7
 * Resolved path: src/contents/sites/adp-myjobs/combo-questions.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o({doc:e=document,href:t=window.location.href}={}){if(e.querySelector("form#prescreeningForm, #prescreeningForm"))return console.debug("[ADP MyJobs][Combo] dynamic-field rescan eligibility",{eligible:!0,reason:"prescreening-form"}),!0;try{let e=new URL(t).searchParams.get("workflowComponent")?.trim().toLowerCase(),r=!!(e?.startsWith("prescreen")||"source"===e);return console.debug("[ADP MyJobs][Combo] dynamic-field rescan eligibility",{workflowComponent:e,eligible:r}),r}catch{return console.debug("[ADP MyJobs][Combo] dynamic-field rescan eligibility",{eligible:!1,reason:"invalid-url"}),!1}}n.defineInteropFlag(r),n.export(r,"shouldRunAdpMyJobsComboQuestionAutofill",()=>o)
