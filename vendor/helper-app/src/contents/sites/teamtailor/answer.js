/**
 * Parcel module id: fLZQx
 * Resolved path: src/contents/sites/teamtailor/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/cover-letter -> 7VR5i  =>  src/contents/methods/cover-letter.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"formatAnswer",()=>i);var o=e("~contents/methods/cover-letter");function i(e,t){let r=(0,o.applyCoverLetterTextToAnswer)(e,t,["Cover letter","Cover Letter"]),n=(0,o.formatCoverLetterMarkdownAsText)(t?.markdown);if(!n)return r;let i={...r.regular??{}};return i["Cover letter"]||i["Cover Letter"]||(i["Cover letter"]=n),{...r,regular:i}}
