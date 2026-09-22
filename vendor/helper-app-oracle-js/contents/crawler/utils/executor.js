/**
 * Parcel module id: iAZMN
 * Resolved path: contents/crawler/utils/executor.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~utils/delay -> am614  =>  _tilde_utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "delay", () => o.delay), n.export(r, "executeSequentially",
() => i);
var o = e("~utils/delay");
async function i(...e) {
  for (let t of e) {
    let e;
    let r = 1200;
    if ("function" == typeof t) e = t;
    else if ("object" == typeof t && t.func) e = t.func, "number" == typeof t.delay && (r = t
      .delay);
    else {
      console.warn("Skipping invalid argument:", t);
      continue
    }
    try {
      "AsyncFunction" === e.constructor.name ? await e() : e()
    } catch (t) {
      console.error(`Error in function ${e.name}:`, t)
    }
    await (0, o.delay)(r)
  }
}

