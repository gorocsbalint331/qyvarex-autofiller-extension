/**
 * Parcel module id: 5dRDr
 * Resolved path: src/contents/sites/adobe/style.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"ADOBE_APPLY_PAGE_LAYOUT_FIX_STYLE_ID",()=>o),n.export(r,"ADOBE_APPLY_PAGE_LAYOUT_FIX_CSS",()=>i),n.export(r,"injectAdobeApplyPageLayoutFix",()=>a);let o="jobright-adobe-apply-page-layout-fix",i=`
.apply-page .container {
  width: auto !important;
}
`.trim();function a(e=document){let t=e.getElementById(o);if(t)return t;let r=e.createElement("style");return r.id=o,r.textContent=i,e.head.appendChild(r),r}
