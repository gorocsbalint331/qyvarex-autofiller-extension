/**
 * Parcel module id: 8Bisn
 * Resolved path: contents/sites/lever/answer.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/shared/filler -> 2aGsX  =>  _tilde_contents/shared/filler.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"formatAnswer",()=>s),n.export(r,"createOperationHandlerFactory",()=>u);var o=e("dayjs"),i=n.interopDefault(o),a=e("~contents/shared/filler"),l=e("~contents/methods/answer");function s(e){return e.regular&&(e.regular.Date=(0,i.default)().format("MM/DD/YYYY")),e}function u(e,t){return function(r,n={expectArray:!1}){return async(o,i,s=!0)=>{try{let t=(0,l.findValueInRecord)(o.label,i),a=n.expectArray?(0,l.ensureArray)(t):t;await r(o,a),s&&e(o.label)}catch(e){a.ValueError,s&&t(o.label)}}}}
