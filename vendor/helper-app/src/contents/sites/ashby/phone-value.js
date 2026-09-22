/**
 * Parcel module id: 8jmJu
 * Resolved path: src/contents/sites/ashby/phone-value.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "resolveAshbyPhoneValue", () => i);
var o = e("~core/phone-country-code");

function i(e, t) {
  let r = (0, o.resolvePhoneFieldValue)(e, t);
  if (r.startsWith("+") && !r.startsWith("+1")) return r;
  let n = r.replace(/\D/g, "");
  return 10 === n.length ? `1-${n.slice(0,3)}-${n.slice(3,6)}-${n.slice(6)}` : 11 === n.length && n
    .startsWith("1") ? `${n[0]}-${n.slice(1,4)}-${n.slice(4,7)}-${n.slice(7)}` : r
}

