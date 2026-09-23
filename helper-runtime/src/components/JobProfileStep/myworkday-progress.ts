// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/JobProfileStep/myworkday-progress.js).
 */
function o(e) {if (!e) return false;try {return new URL(e).pathname.includes("/apply")} catch {return e.includes("/apply")}}function i({fillingMode: e,hasAutoFillResult: t,isFilling: r,url: n}) {return !(!r && !t || o(n)) && "pre_autofill_flow" !== e && "signup_autofill_flow" !== e}

export { o as isMyWorkdayApplyUrl, i as shouldClearMissingMyWorkdayStepProgress }
