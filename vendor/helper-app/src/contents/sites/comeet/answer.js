/**
 * Parcel module id: dAtaS
 * Resolved path: src/contents/sites/comeet/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return(e||"").replace(/\s+/g," ").replace(/\s+\*+\s*$/,"").trim()}function i(e,t){if(e?.hasAttribute("required")||t?.querySelector("span.required-asterisk")||t?.querySelector(".required-asterisk")?.textContent?.includes("*"))return!0;let r=t?.textContent?.trim()||"";return/\brequired\b/i.test(r)||/\*\s*$/.test(r)}n.defineInteropFlag(r),n.export(r,"normalizeComeetLabelText",()=>o),n.export(r,"isComeetRequiredField",()=>i)
