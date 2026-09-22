/**
 * Parcel module id: AC8HW
 * Resolved path: shared/parcel-runtime.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return"function"==typeof e&&!!e.isParcelRequire&&!!e.modules}function i(e,t){let r=new Set;for(let n of e){let e=n;for(;o(e)&&!r.has(e);){for(let[n,o]of(r.add(e),Object.entries(e.modules||{}))){if(!String(o?.[0]).includes(t))continue;let r=e(n);if("function"==typeof r?.[t])return r}e=e.parent}}return null}n.defineInteropFlag(r),n.export(r,"isParcelRequire",()=>o),n.export(r,"findModuleExportFromParcelRequires",()=>i)
