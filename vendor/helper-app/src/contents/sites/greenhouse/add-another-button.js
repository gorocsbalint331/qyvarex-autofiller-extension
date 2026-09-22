/**
 * Parcel module id: 1ZhNz
 * Resolved path: src/contents/sites/greenhouse/add-another-button.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return String(e??"").trim().toLowerCase()}function i(e,t){let r=o(t);return[e.id,e.className,e.text,e.sectionId,e.sectionClassName].some(e=>o(e).includes(r))}function a(e,t){return 0===e.length?null:e.find(e=>i(e,t))??e[0]}function l(e){let t=e,r=t.closest("#education_section, .education--container, #employment_section, .employment--container");return{element:e,id:t.id||null,className:"string"==typeof t.className?t.className:null,text:t.textContent?.trim()||null,sectionId:r?.id||null,sectionClassName:r?.className||null}}n.defineInteropFlag(r),n.export(r,"chooseGreenhouseAddAnotherButton",()=>a),n.export(r,"describeGreenhouseAddAnotherButton",()=>l)
