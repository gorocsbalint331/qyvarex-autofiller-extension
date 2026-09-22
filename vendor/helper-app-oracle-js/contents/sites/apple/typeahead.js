/**
 * Parcel module id: lI3rh
 * Resolved path: contents/sites/apple/typeahead.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e, t) {
  let r = e ?? "",
    n = t ?? "",
    o = [];
  r.length > 0 && o.push("");
  for (let e = 0; e < n.length; e++) o.push(n.slice(0, e + 1));
  return o.filter((e, t) => e !== o[t - 1])
}
n.defineInteropFlag(r), n.export(r, "buildTypeaheadInputSteps", () => o)

