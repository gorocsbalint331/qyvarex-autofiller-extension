/**
 * Parcel module id: bxLeu
 * Resolved path: src/contents/sites/bamboohr/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/bamboohr/operations -> gz0J8  =>  src/contents/sites/bamboohr/operations.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"getRules",()=>l),n.export(r,"findAndRemoveRule",()=>h),n.export(r,"getSubmitButtonText",()=>g);var o=e("~contents/sites/bamboohr/operations"),i=e("~core/enums"),a=e("~core/xpath");async function l(){let e=(0,a.getOrderedNodesSafe)(`.//*[@id="careerApplicationForm"]//div[contains(@class, "fab-FormRow")]
    | .//form[@id="job-application-form"]//*[contains(@class, "MuiFormControl-root") or @data-fabric-component="Checkbox"]
    `,document),t=[],r=!1,n={[i.FIELD_TYPE.CHECKBOX]:async e=>{await (0,o.clearCustomCheckboxField)(e)},[i.FIELD_TYPE.SELECT]:async e=>{await (0,o.clearCustomSelectField)(e.$input)},[i.FIELD_TYPE.TEXT]:async e=>{await (0,o.clearInputField)(e.$input)}};for(let o of e){let e=await s(o);if(e){t.push(e);let o=e.type;r&&n[o]&&await n[o](e)}}return t}async function s(e){return e instanceof HTMLElement?await u(e)||await c(e)||d(e)||f(e):null}async function u(e){let t=e.querySelector("legend"),r=!1;if(!t){let n=(0,a.getFirstOrderedNode)(`self::*[
        not(child::label)
        and (
          child::div[contains(concat(' ', @class, ' '), ' fab-InputWrapper ')]
          and .//div[contains(concat(' ', @class, ' '), ' fab-Checkbox ')]
        ) or (
          @data-fabric-component="Checkbox"
        )
      ]`,e);if(!n||!(t=e.querySelector("label.fab-Checkbox__label")||e.querySelector("label.MuiFormControlLabel-root")))return null;r=!0}let n=b(t);if(!n)return null;let o=t.classList.contains("fab-RadioGroup__legend--required")||t.classList.contains("fab-CheckboxGroup__legend--required")||y(t)||"true"===e.getAttribute("aria-required"),l=(0,a.getOrderedNodesSafe)(`.//*[
      @data-fabric-component="Radio"
      or @data-fabric-component="Checkbox"
      or contains(concat(' ', @class, ' '), ' fab-Radio ')
      or contains(concat(' ', @class, ' '), ' fab-Checkbox ')
    ]`,e),s=[],u=[];for(let e of l){let t=e.querySelector("input[type='radio'], input[type='checkbox']"),r=e.querySelector("label")?.textContent?.trim();t&&r&&(s.push(t),u.push(r))}if(!s.length)return null;if("Veteran Status"===n){let e=await p();e&&(u=[...u.slice(0,-1),...e])}return{type:i.FIELD_TYPE.CHECKBOX,label:n,required:o,$checkboxs:s,options:r?["Yes","No"]:u,$input:s[0],$label:t}}async function c(e){let t=(0,a.getFirstOrderedNode)("self::*[.//select]",e);if(!t)return null;let r=t.querySelector("label");if(!r)return null;let n=b(r);if(!n)return null;let o=y(r),l=t.querySelector(".fab-Select .fab-SelectToggle"),s=await m(l);return s&&s.length?{type:i.FIELD_TYPE.SELECT,label:n,required:o,options:s,$input:l,$label:r}:null}function d(e){let t=(0,a.getFirstOrderedNode)(`self::*[
      .//input[(contains(concat(' ', @class, ' '), ' fabric-') and substring(concat(' ', @class, ' '), string-length(concat(' ', @class, ' ')) - 5) = '-input ') or contains(concat(' ', @class, ' '), ' MuiInputBase-input ')]
      or .//textarea
      or .//label[@for="dateAvailable"]
    ]`,e);if(!t)return null;let r=t.querySelector("label");if(!r)return null;let n=b(r);if(!n)return null;let o=y(r);if("dateAvailable"===r.getAttribute("for")){o=n.includes("*");let e=r.cloneNode(!0);if(Array.from(e.children).forEach(e=>e.remove()),!(n=b(e)))return null}let l=t.querySelector("input, textarea");return l?{type:i.FIELD_TYPE.TEXT,label:n,required:o,$input:l,$label:r}:null}async function f(e){let t=(0,a.getFirstOrderedNode)("self::*[.//label[@for and string(@for) != '']]",e);if(!t)return null;let r=t.querySelector("label");if(!r)return null;let n=b(r);if(!n)return null;let o=y(r);return{type:i.FIELD_TYPE.BAMBOOHR_SPECIAL,label:n,required:o,$label:r}}async function p(){let e=document.querySelector(".CandidateField--veteranStatuses"),t=e?.querySelector(".fab-Select .fab-SelectToggle")||document.querySelector('[aria-label="Veteran Status \u2013Select\u2013"]');if(!t)return null;let r=await m(t);return r}async function m(e){let t=await (0,o.getSelectOptionList)(e),r=t.map(e=>e?.textContent?.trim());return r}function h(e,t){let r=e.findIndex(e=>e.label===t);return -1!==r?e.splice(r,1)[0]:null}function g(){return"Submit Application"}function b(e){return e?.textContent?.replaceAll("*","").trim()}function y(e){return e.classList.contains("fab-Label--required")||!!e.querySelector(".MuiFormLabel-asterisk")}
