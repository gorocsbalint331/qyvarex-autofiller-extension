/**
 * Parcel module id: jevYI
 * Resolved path: contents/sites/walmart/answer.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"applyWalmartUrlFallbacks",()=>m);var o=e("~core/enums");function i(e){return String(e??"").replace(/\s+/g," ").trim()}function a(e){return i(e).toLowerCase()}function l(e){return Array.isArray(e)?e.every(l):null==e||""===i(e)}function s(e){let t=Array.isArray(e)?e.find(e=>!l(e)):e;return l(t)?null:i(t)}function u(...e){for(let t of e){let e=s(t);if(e)return e}return null}function c(e){let t=e?.personalInfo??{};return{linkedin:u(t.linkedin_link,t.linkedin,t.linkedinUrl,e?.linkedinUrl),github:u(t.github_link,t.github_url,t.githubUrl,e?.githubUrl),website:u(t.personal_site_link,t.personal_site,t.personalSite,t.websiteUrl,e?.personalSite,e?.websiteUrl)}}function d(e,t){let r=a(e),n=c(t),o=/linked\s*in/.test(r),i=/git\s*hub/.test(r),l=/portfolio/.test(r),s=/website|personal\s+site/.test(r);return!o||i||l?!i||o||l?o||i||l?n.linkedin||n.github||n.website:s?n.website:null:n.github:n.linkedin}function f(e){return/\bmiddle\s+initial\b/i.test(e)}function p(e){let t=s(e);return t?t.charAt(0).toUpperCase():null}function m(e,t,r){let n={...e.regular||{}};for(let e of t){if(e.type!==o.FIELD_TYPE.TEXT)continue;if(f(e.label)){let t=p(n[e.label]);t&&(n[e.label]=t);continue}if(!l(n[e.label]))continue;let t=d(e.label,r);t&&(n[e.label]=t)}return{...e,regular:n}}
