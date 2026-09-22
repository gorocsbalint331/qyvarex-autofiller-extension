/**
 * Parcel module id: 3LhvH
 * Resolved path: contents/sites/adp-recruiting/answer.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~constants -> 6VEjR  =>  _tilde_constants.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"formatAnswer",()=>c);var o=e("dayjs"),i=n.interopDefault(o),a=e("~constants");function l(e){return Array.isArray(e)?e.every(l):""===String(e??"").trim()}function s(e){let t=Array.isArray(e)?e.find(e=>!l(e)):e,r=String(t??"").trim();if(!r)return"";let n=r.replace(/\./g,"").toUpperCase();if(a.STATE_MAP[n])return a.STATE_MAP[n];let o=r.toLowerCase();return Object.values(a.STATE_MAP).find(e=>e.toLowerCase()===o)||""}function u(e){let t=e.replace(/[^a-z]/gi,"").toLowerCase();return["state","stateprovince","stateprov","stateregion","stateterritory"].includes(t)}function c(e){if(e.regular){let t=s(e.state),r=Object.keys(e.regular).filter(u);for(let n of r){let r=s(e.regular[n]);r?e.regular[n]=r:l(e.regular[n])&&t&&(e.regular[n]=t)}t&&0===r.length&&(e.regular.State=t),e.regular?.["Available Start Date"]&&(e.regular["Available Start Date"]=(0,i.default)().format("YYYY-MM-DD"))}if(e.workExperience&&e.workExperience.length>0)for(let t of e.workExperience)t?.Start&&(t["Start date"]=(0,i.default)(t.Start).format("MM/YYYY"),t.From=t["Start date"]),t?.End&&(t["End date"]=(0,i.default)(t.End).format("MM/YYYY"),t.To=t["End date"]),t&&"isCurrent"in t&&(t["I currently work here"]=t.isCurrent);if(e.education&&e.education.length>0)for(let t of e.education)t?.Start&&(t["Start date"]=(0,i.default)(t.Start).format("MM/YYYY"),t.From=t["Start date"]),t?.End&&(t["End date"]=(0,i.default)(t.End).format("MM/YYYY"),t.To=t["End date"]),t?.Study&&(t["Field of Study"]=t.Study);return e}
