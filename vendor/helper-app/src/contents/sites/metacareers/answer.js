/**
 * Parcel module id: eUOuS
 * Resolved path: src/contents/sites/metacareers/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"formatAnswer",()=>u);var o=e("~core/enums");let i=e=>e.type===o.FIELD_TYPE.CHECKBOX&&/select one or more locations/i.test(e.label),a=e=>Array.isArray(e)?e.some(e=>""!==String(e??"").trim()):""!==String(e??"").trim(),l=e=>{let t="options"in e?e.options:void 0;if(!Array.isArray(t))return null;for(let e of t){let t=String(e??"").trim();if(t)return t}return null},s=(e,t)=>{e.regular=e.regular||{};let r=t.find(i);if(!r||a(e.regular[r.label]))return;let n=l(r);n&&(e.regular[r.label]=[n])};function u(e,t=[]){return s(e,t),e.workExperience.length>0&&"Yes"===e.regular["Are you applying for your first job?"]&&(e.regular["Are you applying for your first job?"]="No"),e}
