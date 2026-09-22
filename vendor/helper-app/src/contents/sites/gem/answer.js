/**
 * Parcel module id: dRGXb
 * Resolved path: src/contents/sites/gem/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"requestGemAnswers",()=>i);var o=e("~core/enums");async function i(e,t){let r=e.filter(e=>e.type===o.FIELD_TYPE.TEXT&&/^location$/i.test(e.label));if(!r.length)return t(e);let n=await t(e.map(e=>r.includes(e)?{...e,label:"Address"}:e));if(!n||"string"==typeof n)return n;if(Object.hasOwn(n.regular??{},"Address")){let t={...n.regular};for(let e of r)t[e.label]=t.Address;e.some(e=>"Address"===e.label)||delete t.Address,n.regular=t}return n.fillDataList&&(n.fillDataList=n.fillDataList.flatMap(t=>"Address"===t.name?[...e.some(e=>"Address"===e.label)?[t]:[],...r.map(e=>({...t,name:e.label}))]:[t])),n}
