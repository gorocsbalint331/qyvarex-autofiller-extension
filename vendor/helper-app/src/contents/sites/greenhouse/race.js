/**
 * Parcel module id: cQ4Jg
 * Resolved path: src/contents/sites/greenhouse/race.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"RACE_FALLBACK_OPTIONS",()=>l),n.export(r,"isGreenhouseRaceLabel",()=>s),n.export(r,"findGreenhouseRaceContainer",()=>u),n.export(r,"isGreenhouseConditionalRaceRule",()=>c),n.export(r,"excludeGreenhouseConditionalRaceRules",()=>d);var o=e("~core/xpath");let i="please identify your race",a="//div[contains(@class, 'select__container')][.//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '"+i+"')]]",l=["American Indian or Alaskan Native","Asian","Black or African American","White","Native Hawaiian or Other Pacific Islander","Two or More Races","Decline To Self Identify"];function s(e){return"string"==typeof e&&e.toLowerCase().includes(i)}function u(){return(0,o.getFirstOrderedNodeSafe)(a,document)}function c(e){return s(e?.label)&&!e?.$input}function d(e){return e.filter(e=>!c(e))}
