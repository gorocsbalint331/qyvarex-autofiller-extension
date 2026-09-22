/**
 * Parcel module id: 3fn7Y
 * Resolved path: src/contents/sites/hrmdirect/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   dayjs/plugin/customParseFormat -> g94SE  =>  dayjs/plugin/customParseFormat.js
 *   ~constants -> 6VEjR  =>  src/constants.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"formatDate",()=>u),n.export(r,"formatAnswer",()=>c);var o=e("dayjs"),i=n.interopDefault(o),a=e("dayjs/plugin/customParseFormat"),l=n.interopDefault(a),s=e("~constants");function u(e){let t;if(!e)return"";if("string"==typeof e){if(e.match(/^\d{2}\/\d{2}\/\d{4}$/))return e;t=e.match(/^\d{4}-\d{2}$/)?(0,i.default)(e+"-01"):(0,i.default)(e)}else t=(0,i.default)(e);return t.isValid()?t.format("MM/DD/YYYY"):"string"==typeof e?e:""}function c(e){if(e.regular&&s.STATE_MAP[e.state]&&(e.regular.State=s.STATE_MAP[e.state]??e.regular.State),e.workExperience&&e.workExperience.length>0){for(let t of e.workExperience)if(t?.isCurrent!==void 0){let e=!0===t.isCurrent||"true"===t.isCurrent||"True"===t.isCurrent||1===t.isCurrent||"1"===t.isCurrent;if(e){t["End Date"]="current";continue}}for(let t of e.education)t?.["College (years completed)"]&&t?.Start&&t?.End&&(t["College (years completed)"]=parseInt(u(t.End).slice(6,10))-parseInt(u(t.Start).slice(6,10)))}return e}(0,i.default).extend(l.default)
