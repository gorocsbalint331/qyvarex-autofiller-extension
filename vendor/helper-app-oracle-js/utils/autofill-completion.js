/**
 * Parcel module id: 8ImK9
 * Resolved path: utils/autofill-completion.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  if (!e || "object" != typeof e || Array.isArray(e)) return !1;
  let t = e;
  return Array.isArray(t.fieldRequiredStatus) && Array.isArray(t.filledFields) && Array.isArray(t
    .missingFields)
}
n.defineInteropFlag(r), n.export(r, "isSuccessfulAutofillCompletion", () => o)

