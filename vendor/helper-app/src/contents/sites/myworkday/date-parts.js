/**
 * Parcel module id: gh1td
 * Resolved path: src/contents/sites/myworkday/date-parts.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   dayjs/plugin/customParseFormat -> g94SE  =>  dayjs/plugin/customParseFormat.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"getWorkdayDatePartsForField",()=>d),n.export(r,"hasWorkdayDateRequiredError",()=>f);var o=e("dayjs"),i=n.interopDefault(o),a=e("dayjs/plugin/customParseFormat"),l=n.interopDefault(a);function s(e,t){return e.querySelector(`[data-automation-id="${t}"]`)}function u(e,t=2){return String(e).padStart(t,"0")}function c(e){let t=String(e||"").trim(),r={month:"",day:"",year:""};if(!t)return r;let n=t.match(/^(\d{4})$/);if(n)return{...r,year:n[1]};let o=t.match(/^(\d{4})[-/.](\d{1,2})(?:[-/.](\d{1,2}))?$/);if(o)return{year:o[1],month:u(o[2]),day:o[3]?u(o[3]):""};let a=t.match(/^(\d{1,2})[-/.](?:(\d{1,2})[-/.])?(\d{4})$/);if(a)return{month:u(a[1]),day:a[2]?u(a[2]):"",year:a[3]};let l=(0,i.default)(t,["MMM YYYY","MMMM YYYY","MMM D YYYY","MMM D, YYYY","MMMM D YYYY","MMMM D, YYYY","YYYY-MM-DD","YYYY-MM","MM/DD/YYYY","M/D/YYYY","MM/YYYY","M/YYYY"],!0),s=l.isValid()?l:(0,i.default)(t);return s.isValid()?{month:s.format("MM"),day:s.format("DD"),year:s.format("YYYY")}:r}function d(e,t){let r=c(t),n=!!s(e,"dateSectionMonth-input"),o=!!s(e,"dateSectionDay-input"),a=!!s(e,"dateSectionYear-input"),l=r.year||(0,i.default)(t).format("YYYY");return n&&o&&a?{month:r.month||"01",day:r.day||"01",year:l}:n&&a?{month:r.month||"01",year:l}:{year:l}}function f(e){let t=e.closest?.('[data-automation-id^="formField-"]')||e.parentElement,r=t?.querySelector?.('[data-automation-id="inputAlert"]')?.textContent?.replace(/\s+/g," ").trim()||"";return/required and must have a value/i.test(r)}(0,i.default).extend(l.default)
