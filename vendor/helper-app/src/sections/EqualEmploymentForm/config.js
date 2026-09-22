/**
 * Parcel module id: lSSAx
 * Resolved path: src/sections/EqualEmploymentForm/config.js
 * Dependencies:
 *   ../../constants -> 3rdkr  =>  src/forms/constants.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"EQUAL_EMPLOYMENT_OPTION_SECTIONS",()=>i),n.export(r,"EQUAL_EMPLOYMENT_SELECT_SECTIONS",()=>a);var o=e("../../constants");let i=[{label:"Are you authorized to work in the US?",field:"workAuthorization",options:["Yes","No"]},{label:"Will you now or in the future require sponsorship for employment visa status?",field:"sponsorshipStatus",options:["Yes","No"]},{label:"Do you have a disability?",field:"disability",options:o.YES_NO_OPTIONS},{label:"Are you a veteran?",field:"veteran",options:o.YES_NO_OPTIONS},{label:"What is your gender?",field:"gender",options:o.GENDER_OPTIONS},{label:"Do you identify as LGBTQ+?",field:"lgbt",options:o.YES_NO_OPTIONS},{label:"Are you Hispanic/Latino?",field:"hispanic",options:o.YES_NO_OPTIONS}],a=[{label:"How would you identify your race?",field:"ethnicity",options:o.ETHNICITY_OPTIONS,showSearch:!0},{label:"How would you describe your sexual orientation? (mark all that apply)",field:"sexual",options:o.SEXUAL_ORIENTATION_OPTIONS,mode:"multiple",maxTagCount:2}]
