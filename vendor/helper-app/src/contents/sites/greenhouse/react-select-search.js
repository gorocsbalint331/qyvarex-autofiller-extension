/**
 * Parcel module id: pnPkG
 * Resolved path: src/contents/sites/greenhouse/react-select-search.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){let{hasNoOptionsNotice:t,currentOptionsSnapshot:r,previousOptionsSnapshot:n}=e;return t?"no-options":r&&(null==n||r!==n)?"options-ready":"pending"}function i(e){let{hasLoadingNotice:t,hasNoOptionsNotice:r,currentOptionsSnapshot:n,previousOptionsSnapshot:i}=e;return"pending"!==o({hasNoOptionsNotice:r,currentOptionsSnapshot:n,previousOptionsSnapshot:i})||!t&&n.length>0}n.defineInteropFlag(r),n.export(r,"getReactSelectMenuSearchState",()=>o),n.export(r,"isReactSelectMenuSearchSettled",()=>i)
