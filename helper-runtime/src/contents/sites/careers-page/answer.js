/**
 * Parcel module id: 7ABcJ
 * Resolved path: src/contents/sites/careers-page/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/cover-letter -> 7VR5i  =>  src/contents/methods/cover-letter.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"MONTH_NAMES",()=>i),n.export(r,"APPLY_SUBMIT_BUTTON_XPATH",()=>a),n.export(r,"END_DATE_LABEL_ALIASES",()=>l),n.export(r,"EDUCATION_START_DATE_SELECTORS",()=>s),n.export(r,"EDUCATION_END_DATE_SELECTORS",()=>u),n.export(r,"EDUCATION_PREFERRED_END_DATE_QUERY",()=>c),n.export(r,"EXPERIENCE_START_DATE_SELECTORS",()=>d),n.export(r,"EXPERIENCE_END_DATE_SELECTORS",()=>f),n.export(r,"EXPERIENCE_PREFERRED_END_DATE_QUERY",()=>p),n.export(r,"formatAnswer",()=>m);var o=e("~contents/methods/cover-letter");let i=["January","February","March","April","May","June","July","August","September","October","November","December"],a='.//button[@type="submit" and (@id="submit-id-submit" or @name="submit" or contains(normalize-space(.), "Apply") or contains(@class, "btn-apply"))]',l=["End Date","ended_at","End"],s=['input[name="started_at"]',"input.education_started_at",'input[placeholder*="Start Date"]'],u=['input[name="ended_at"]',"input.education_ended_at",'input[placeholder*="End Date"]'],c=["input.education_ended_at",...u].join(", "),d=['input[name="started_at"]',"input.experience_started_at",'input[placeholder*="Start Date"]'],f=['input[name="ended_at"]',"input.experience_ended_at",'input[placeholder*="End Date"]'],p=["input.experience_ended_at",...f].join(", ");function m(e,t){return(0,o.applyCoverLetterTextToAnswer)(e,t,["Cover Letter","Add cover letter"])}
