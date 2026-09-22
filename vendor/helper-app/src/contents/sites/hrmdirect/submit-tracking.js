/**
 * Parcel module id: dGJqx
 * Resolved path: src/contents/sites/hrmdirect/submit-tracking.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"resolveHrmdirectSubmitButton",()=>l),n.export(r,"getHrmdirectPageScope",()=>s),n.export(r,"getHrmdirectSubmitAction",()=>u),n.export(r,"getHrmdirectSubmitButton",()=>c);let o="forms.application.continue",i="forms.application.submit";function a(e,t){return(e.getAttribute("class")||"").split(/\s+/).includes(t)}function l(e){let t=e?.closest;if("function"!=typeof t)return null;let r=t.call(e,"button");return!(!r||"button"!==r.tagName.toLowerCase()||r.getAttribute("type")?.toLowerCase()!=="submit"||!a(r,"submit-button")||r.disabled||r.hasAttribute("disabled"))&&(r.closest("form.section-form")||r.closest("form#personal-info-form"))?r:null}function s(e=document){let t=e.querySelector(".form-progress-holder li.active"),r=(t?.getAttribute("class")||"").split(/\s+/),n=r.find(e=>/^page-\d+$/.test(e))||null;return n||(e.querySelector("form#personal-info-form")?"create-account":null)}function u(e,t=document){let r=e.getAttribute("data-localized-key");if(r===o)return"continue";if(r===i)return"submit";let n=t.querySelector(".form-progress-holder li.active");return n&&!n.nextElementSibling?"submit":"continue"}function c(e=document){return Array.from(e.querySelectorAll('button[type="submit"]')).find(e=>l(e)===e)||null}
