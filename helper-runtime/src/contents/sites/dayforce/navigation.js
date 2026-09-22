/**
 * Parcel module id: hbWOC
 * Resolved path: src/contents/sites/dayforce/navigation.js
 * Dependencies:
 *   ./auth -> 1TnOy  =>  src/contents/sites/dayforce/auth.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getDayforceRegistrationNextTarget", () => i);
var o = e("./auth");

function i({
  root: e = document,
  url: t,
  isVisible: r = e => !e.closest('[hidden], [aria-hidden="true"]') && e.getClientRects().length >
    0 && "hidden" !== window.getComputedStyle(e).visibility
} = {}) {
  if ("register" !== (0, o.getDayforceAuthPageMode)(t)) return null;
  let n = Array.from(e.querySelectorAll("main"));
  if (1 !== n.length || !r(n[0])) return null;
  let i = Array.from(n[0].querySelectorAll('evr-button[label="Next"][type="submit"]'));
  if (1 !== i.length || !r(i[0])) return null;
  let a = Array.from(i[0].shadowRoot?.querySelectorAll(
    'button[type="submit"][aria-label="Next"]') ?? []);
  if (1 !== a.length) return null;
  let l = a[0];
  return !r(l) || l.disabled || "true" === l.getAttribute("aria-disabled") ? null : {
    element: l,
    type: "continue",
    suppressClickTracking: !0
  }
}

