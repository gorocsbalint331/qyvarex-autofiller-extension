/**
 * Parcel module id: jCrxS
 * Resolved path: contents/sites/gohire/operations.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/shared/filler -> 2aGsX  =>  _tilde_contents/shared/filler.js
 *   ~utils/delay -> am614  =>  _tilde_utils/delay.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"fillInputField",()=>s),n.export(r,"fillSelectField",()=>u),n.export(r,"uploadResume",()=>c);var o=e("~contents/shared/filler"),i=e("~contents/methods/answer"),a=e("~contents/methods/dom"),l=e("~utils/delay");async function s(e,t){let r=e.$input;r&&t&&(r.focus(),r.value=t,r.dispatchEvent(new Event("input",{bubbles:!0})),r.dispatchEvent(new Event("change",{bubbles:!0})),await (0,l.delay)(50),r.blur())}function u(e,t){let r=e.$input,n=t?.[0]?.trim();if(!r||!n)return;let o=n.toLowerCase(),i=Array.from(r.options).find(e=>{let t=e.textContent?.replace(/\s+/g," ").trim().toLowerCase();return t===o||e.value.toLowerCase()===o});i&&(r.focus(),r.value=i.value,i.selected=!0,r.dispatchEvent(new Event("input",{bubbles:!0})),r.dispatchEvent(new Event("change",{bubbles:!0})),r.blur())}async function c(e,t,r){let n=null;for(let e=0;e<50&&!(n=document.querySelector('input#attach[type="file"], input[type="file"][name*="resume" i], input[type="file"][name*="cv" i], input[type="file"]'));e++)await (0,l.delay)(100);if(!n)throw new o.FillError("(GoHire) Resume file input not found");await (0,a.uploadFiles)(n,await (0,i.fetchPdfAsBlob)(e),t,r,"Resume/CV",!0)}
