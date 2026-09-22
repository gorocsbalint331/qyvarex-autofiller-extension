/**
 * Parcel module id: 1TBhF
 * Resolved path: src/utils/getTargetOrTimeout.js
 * Dependencies:
 *   ./delay -> am614  =>  src/utils/delay.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
var n = e("./delay");
async function o(e, t = () => !1, r = 15) {
  let o = 0,
    i = null;
  for (; o < r;) {
    if (t?.()) return null;
    if (i = e()) break;
    await (0, n.delay)(100), o += 1
  }
  return i
}
r.default = o

