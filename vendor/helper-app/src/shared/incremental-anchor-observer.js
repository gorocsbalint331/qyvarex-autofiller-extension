/**
 * Parcel module id: iLrNS
 * Resolved path: shared/incremental-anchor-observer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){let t=e;return t?.tagName==="A"&&(!!t.href||"function"==typeof t.hasAttribute&&t.hasAttribute("href"))}function i(e,t){let r=e;if(o(r)){t(r);return}if("function"!=typeof r?.closest)return;let n=r.closest("a[href]");o(n)&&t(n)}function a(e,t){let r=e;if(o(r)&&t(r),"function"==typeof r?.querySelectorAll){for(let e of r.querySelectorAll("a[href]"))o(e)&&t(e);return}i(r?.parentElement,t)}function l(e,t){let r=new Set,n=e=>{r.has(e)||(r.add(e),t(e))};for(let t of e){if("attributes"===t.type){i(t.target,n);continue}if("characterData"===t.type){i(t.target.parentElement,n);continue}if("childList"===t.type)for(let e of(i(t.target,n),t.addedNodes))a(e,n)}return r.size}n.defineInteropFlag(r),n.export(r,"visitChangedAnchors",()=>l)
