/**
 * Parcel module id: gfSkt
 * Resolved path: contents/sites/jazzhr/answer.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/cover-letter -> 7VR5i  =>  _tilde_contents/methods/cover-letter.js
 *   ~core/phone-country-code -> 8nENw  =>  _tilde_core/phone-country-code.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"formatAnswer",()=>l);var o=e("~core/phone-country-code"),i=e("~contents/methods/cover-letter");function a(e,t){let r=(0,o.resolvePhoneFieldValue)(e,t),n=r.replace(/\D/g,"");if(r.startsWith("+")&&!r.startsWith("+1"))return r;if(10===n.length){let e=n.substring(0,3),t=n.substring(3,6),r=n.substring(6,10);return`(${e}) ${t}-${r}`}return r||e}function l(e,t){let r=(0,i.applyCoverLetterTextToAnswer)(e,t,["Cover Letter","Cover letter"]);if(r.regular){let e=["Phone"];for(let t of e)if(r.regular[t]){let e=Array.isArray(r.regular[t])?r.regular[t][0]:r.regular[t];e&&"string"==typeof e&&(r.regular[t]=a(e,(0,o.resolvePhoneCountryCodeAnswer)(r)))}}let n=(0,i.formatCoverLetterMarkdownAsText)(t?.markdown);if(!n)return r;let l={...r.regular??{}};return l["Cover Letter"]||l["Cover letter"]||(l["Cover Letter"]=n),{...r,regular:l}}
