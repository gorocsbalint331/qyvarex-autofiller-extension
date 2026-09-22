/**
 * Parcel module id: 3nEVv
 * Resolved path: src/components/Editor/utils/date-format.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"AUTOFILL_INFO_DATE_FORMAT",()=>a),n.export(r,"formatAutofillInfoDate",()=>l);var o=e("dayjs"),i=n.interopDefault(o);let a="MMM YYYY",l=e=>{if(!e)return"";let t=(0,i.default)(e);return t.isValid()?t.format(a):e}
