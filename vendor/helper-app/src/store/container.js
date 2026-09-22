/**
 * Parcel module id: cKIaQ
 * Resolved path: src/store/container.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   zustand -> ffRFv  =>  zustand.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "useContainerStore", () => i);
var o = e("zustand");
let i = (0, o.create)(e => ({
  containerDom: null,
  setContainerDom: t => e(() => ({
    containerDom: t
  }))
}))

