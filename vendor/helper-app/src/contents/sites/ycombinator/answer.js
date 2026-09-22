/**
 * Parcel module id: 9UTQM
 * Resolved path: src/contents/sites/ycombinator/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,t){return"+44"===e?t?.find(e=>e.trim().toLowerCase().startsWith("united kingdom +44"))??"United Kingdom +44":(t?.length,null)}function i(e,t){let r=String(e??"").trim();if(!r)return"";let n=r.match(/\+\s*(\d{1,4})(?!\d)/);if(n&&!/[A-Za-z]/.test(r)){let e=`+${n[1]}`;return o(e,t)??e}let i=r.replace(/[\s()-]/g,"");if(/^\d{1,4}$/.test(i)){let e=`+${i}`;return o(e,t)??e}let a=r.match(/(?:^|\D)(\d{1,4})\s*$/);return a&&/[A-Za-z]/.test(r)?r.replace(/\+\s*(\d{1,4})(?!\d)/g,"+$1"):r}function a(e){let t=e.replace(/\D/g,"");if(11===t.length&&t.startsWith("1")){let e=t.substring(1,4),r=t.substring(4,7),n=t.substring(7,11);return`(${e}) ${r}-${n}`}if(10===t.length){let e=t.substring(0,3),r=t.substring(3,6),n=t.substring(6,10);return`(${e}) ${r}-${n}`}return e}n.defineInteropFlag(r),n.export(r,"formatPhoneCountryCodeValue",()=>i),n.export(r,"formatPhoneNumber",()=>a),n.export(r,"formatPhoneCountryCodeValueForTests",()=>l);let l=i
