/**
 * Parcel module id: 6TJ1n
 * Resolved path: src/contents/sites/freshteam/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"formatDate",()=>i);let o=["January","February","March","April","May","June","July","August","September","October","November","December"];function i(e){if(!e?.trim())return"";if(e.match(/^[A-Za-z]+\s+\d{1,2},\s+\d{4}$/))return e;let t=null;if(e.match(/^\d{4}-\d{2}-\d{2}$/))t=new Date(e);else if(e.match(/^\d{4}-\d{2}$/))t=new Date(e+"-01");else if(e.match(/^\d{2}\/\d{2}\/\d{4}$/)){let[t,r,n]=e.split("/"),i=parseInt(t,10)-1;if(i>=0&&i<12)return`${o[i]} ${parseInt(r,10)}, ${n}`}else t=new Date(e);if(t&&!isNaN(t.getTime())){let e=o[t.getMonth()],r=t.getDate(),n=t.getFullYear();return`${e} ${r}, ${n}`}return e}
