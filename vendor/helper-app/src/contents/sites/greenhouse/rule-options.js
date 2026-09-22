/**
 * Parcel module id: k315S
 * Resolved path: src/contents/sites/greenhouse/rule-options.js
 * Dependencies:
 *   ./answer -> 3lHOC  =>  src/contents/sites/greenhouse/answer.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"buildGreenhouseEducationOptionDescriptors",()=>a);var o=e("~core/enums"),i=e("./answer");function a(e){return e.map(e=>{let t={type:e.type,label:e.label},r=e.label?.toLowerCase().trim(),n="school"===r&&e.type===o.FIELD_TYPE.SEARCH&&Array.isArray(e.options)&&0===e.options.length,a=Array.isArray(e.options)?[...e.options]:void 0;return"degree"!==r||a&&0!==a.length||(a=i.DEGREE_FALLBACK_OPTIONS),"discipline"!==r||a&&0!==a.length||(a=i.DISCIPLINE_FALLBACK_OPTIONS),n&&(a=[]),a&&a.length>0&&(t.options=a),n&&(t.options=[]),t})}
