/**
 * Parcel module id: 5f7QQ
 * Resolved path: src/contents/sites/dayforce/policy-link.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");async function o(e,t){if(!e.isConnected||!["https://www.dayforce.com/privacy","https://www.dayforce.com/terms"].includes(e.href))return!1;let r=e=>e.preventDefault();try{let n=await t(e.href);if(!n?.ok||!e.isConnected)return!1;return e.addEventListener("click",r,{capture:!0}),e.click(),!0}catch{return!1}finally{e.removeEventListener("click",r,{capture:!0})}}n.defineInteropFlag(r),n.export(r,"openDayforcePolicyLink",()=>o)
