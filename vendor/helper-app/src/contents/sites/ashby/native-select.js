/**
 * Parcel module id: lLsBv
 * Resolved path: src/contents/sites/ashby/native-select.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e, t) {
  let r = i(e);
  if (!r) return null;
  let n = t.filter(e => !e.disabled && !e.hidden);
  for (let e of n)
    if (i(e.value) === r || i(e.text) === r) return e.value;
  return null
}

function i(e) {
  return String(e ?? "").normalize("NFKC").replace(/\s+/g, " ").trim().toLowerCase()
}
n.defineInteropFlag(r), n.export(r, "resolveAshbyNativeSelectOptionValue", () => o)

