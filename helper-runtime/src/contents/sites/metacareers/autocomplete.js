/**
 * Parcel module id: a2D4O
 * Resolved path: src/contents/sites/metacareers/autocomplete.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"normalizeAutocompleteText",()=>i),n.export(r,"findExactMetaPopoverOption",()=>l),n.export(r,"buildMetaAutocompleteCandidates",()=>u),n.export(r,"findBestPopoverOption",()=>c);var o=e("~contents/methods/choice-match");let i=e=>e.replace(/\s+/g," ").trim().toLowerCase(),a=e=>i(e.replace(/\s*,\s*/g,", ")),l=(e,t)=>{let r=a(t);return r?e.find(e=>a(e.textContent||"")===r)??null:null},s=e=>e.replace(/\s+/g," ").replace(/\s*,\s*/g,", ").trim(),u=(e,t)=>{let r=[],n=e=>{let t=s(e);t&&!r.includes(t)&&r.push(t)};if(n(t),e?.toLowerCase().includes("location")){let e=s(t).split(",")[0]?.trim();e&&n(e)}return r},c=(e,t,r=!1)=>{let n=t.map(i).filter(Boolean);for(let t of n){let r=e.filter(e=>(0,o.isExactChoiceMatch)(e.textContent,t));if(r.length>1)return null;if(1===r.length)return r[0]}if(!r)return null;for(let t of n){let r=t.split(",").map(e=>e.trim());if(r.some(e=>!e))continue;let n=e.filter(e=>{let t=String(e.textContent||"").split(",").map(e=>e.trim());return t.length>r.length&&r.every((e,r)=>(0,o.isExactChoiceMatch)(t[r],e))});if(n.length>1)break;if(1===n.length)return n[0]}return null}
