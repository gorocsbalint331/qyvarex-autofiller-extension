/**
 * Parcel module id: lockZ
 * Resolved path: contents/sites/paylocity/date.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   dayjs/plugin/customParseFormat -> g94SE  =>  dayjs/plugin/customParseFormat.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"inferPaylocityDateFormat",()=>c),n.export(r,"formatPaylocityDateValue",()=>d),n.export(r,"summarizePaylocityDateValue",()=>f);var o=e("dayjs"),i=n.interopDefault(o),a=e("dayjs/plugin/customParseFormat"),l=n.interopDefault(a);(0,i.default).extend(l.default);let s=["YYYY-MM-DD","YYYY/MM/DD","MM/DD/YYYY","M/D/YYYY","YYYY-MM","YYYY/MM","MM/YYYY","M/YYYY"];function u(e){return[e.getAttribute?.("placeholder"),e.placeholder,e.getAttribute?.("format"),e.closest?.("[format]")?.getAttribute("format")].filter(Boolean).join(" ").toUpperCase().replace(/\s+/g,"")}function c(e){let t=String(e.getAttribute?.("type")||e.type||"").toLowerCase();if("date"===t)return"YYYY-MM-DD";if("month"===t)return"YYYY-MM";let r=u(e);return/YYYY[-/]MM[-/]DD/.test(r)?"YYYY-MM-DD":/MM[-/]DD[-/]YYYY/.test(r)?"MM/DD/YYYY":/YYYY[-/]MM/.test(r)?"YYYY-MM":/MM[-/]YYYY/.test(r)?"MM/YYYY":void 0}function d(e,t){let r=String(e??"").trim();if(!r)return null;let n=(0,i.default)(r,s,!0),o=n.isValid()?n:(0,i.default)(r);return o.isValid()?o.format(t):null}function f(e){let t=String(e??"").trim();return t?/^\d{4}[-/]\d{1,2}$/.test(t)?{present:!0,length:t.length,shape:"year-month"}:/^\d{1,2}[/\-]\d{4}$/.test(t)?{present:!0,length:t.length,shape:"month-year"}:/^\d{4}[-/]\d{1,2}[-/]\d{1,2}$|^\d{1,2}[/\-]\d{1,2}[/\-]\d{4}$/.test(t)?{present:!0,length:t.length,shape:"full-date"}:{present:!0,length:t.length,shape:"other"}:{present:!1,length:0,shape:"empty"}}
