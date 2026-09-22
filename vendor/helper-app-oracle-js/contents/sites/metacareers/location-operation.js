/**
 * Parcel module id: jTGaf
 * Resolved path: contents/sites/metacareers/location-operation.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/profile-location-original-answer -> 8kwJN  =>  _tilde_contents/sites/profile-location-original-answer.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"isMetaCurrentLocationRule",()=>l),n.export(r,"getMetaCurrentLocationOriginalAnswer",()=>s),n.export(r,"getMetaResolvedLocationValue",()=>u);var o=e("~contents/sites/profile-location-original-answer"),i=e("~core/enums");function a(e){return"string"==typeof e?e.replace(/\s*\*+\s*$/,"").replace(/\s+/g," ").trim().toLowerCase():""}function l(e){if(e.type!==i.FIELD_TYPE.TEXT||"current location"!==a(e.label))return!1;let t=e.$input;return"BUTTON"===t.tagName.toUpperCase()&&"combobox"===t.getAttribute("role")&&"current location"===a(t.getAttribute("aria-label"))}function s(e,t){let r=(0,o.getProfileLocationOriginalAnswer)(e).value;if(r)return r;let n=Array.isArray(t)?t[0]:t;return"string"==typeof n?n.trim():""}function u(e){if(e?.action!=="SELECT_OPTIONS")return"";let t=e.selected_values[0];return"string"==typeof t?t.trim():""}
