/**
 * Parcel module id: fxy2p
 * Resolved path: src/core/strip.js
 * Dependencies:
 *   ./parse -> 6zjmU  =>  src/core/parse.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"stripDialCodePrefix",()=>i);var o=e("./parse");function i(e,t){let r=String(e??""),n=(0,o.getDialCodeDigits)(t);if(!n||!r)return r;let i=n.split("").join("\\s*"),a=RegExp(`^\\s*(?:\\(\\s*\\+?\\s*${i}\\s*\\)|\\+\\s*${i})[\\s().\\-]*`);return a.test(r)?r.replace(a,"").trim():r}
