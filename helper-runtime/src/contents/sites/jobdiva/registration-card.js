/**
 * Parcel module id: hEjHq
 * Resolved path: src/contents/sites/jobdiva/registration-card.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return String(e??"").replace(/[*\u2731]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function i(e,t){let r=Array.from(e).filter(e=>{let r=Array.from(e.querySelectorAll("h1, h2, h3, h4, h5, h6, div, span")).filter(e=>"start with my resume"===o(e.textContent));return!e.matches("[disabled]")&&"true"!==e.getAttribute("aria-disabled")&&t(e)&&1===r.length});return 1===r.length?r[0]:null}n.defineInteropFlag(r),n.export(r,"findJobdivaStartWithResumeCard",()=>i)
