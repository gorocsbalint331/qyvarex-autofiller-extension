/**
 * Parcel module id: az1YZ
 * Resolved path: store/hide.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   zustand -> ffRFv  =>  zustand.js
 *   ~api/env-resolver -> 45ABC  =>  _tilde_api/env-resolver.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "useHideStore", () => a);
var o = e("zustand"),
  i = e("~api/env-resolver");
let a = (0, o.create)(e => ({
  displayIcon: (0, i.agentDomains).includes(new URL(window.location.href).hostname),
  setDisplayIcon: t => e(() => ({
    displayIcon: t
  })),
  openCard: !1,
  setOpenCard: t => e(e => ({
    openCard: "function" == typeof t ? t(e.openCard) : t
  })),
  clickOpenInAgent: !1,
  setClickOpenInAgent: t => e(() => ({
    clickOpenInAgent: t
  }))
}))

