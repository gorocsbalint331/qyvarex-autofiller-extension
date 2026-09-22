/**
 * Parcel module id: d9oZa
 * Resolved path: src/components/HelperContainer/visibility.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  let {
    openCard: t,
    isAgentDomain: r,
    clickOpenInAgent: n
  } = e;
  return t && (!r || n)
}
n.defineInteropFlag(r), n.export(r, "isHelperSidebarVisible", () => o)

