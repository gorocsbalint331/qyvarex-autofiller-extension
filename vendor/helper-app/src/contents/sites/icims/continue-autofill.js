/**
 * Parcel module id: eqgAt
 * Resolved path: src/contents/sites/icims/continue-autofill.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e, t) {
  return /^(continue|save (?:and|&) continue|next)$/.test(e.trim().replace(/\s+/g, " ")
  .toLowerCase()) && !/review|submit|complete|confirmation|finish/i.test(t)
}

function i(e) {
  let t = e.querySelector(".iCIMS_PageStepText")?.textContent?.trim() || "";
  if (/review|submit|complete|confirmation|finish/i.test(t)) return null;
  let r = Array.from(e.querySelectorAll("form")),
    n = r.find(e => "enterEmailForm" === e.id || "iCIMS_MainForm" === e.id || "profileForm" === e
      .id);
  return JSON.stringify([t, (n ? [n] : r).map(e => [e.id, Array.from(e.querySelectorAll(
    "input:not([type=hidden]),select,textarea")).map(e => [e.tagName, e.getAttribute(
    "name"), e.getAttribute("type")])])])
}

function a(e, t, r) {
  let n = n => {
    if (!t() || !n || "function" != typeof n.closest) return;
    let i = n.closest("button,input[type=submit],input[type=button],a[role=button]");
    if (!i || i.disabled || "true" === i.getAttribute("aria-disabled")) return;
    let a = "INPUT" === i.tagName ? i.value : i.textContent || i.getAttribute("aria-label") || "",
      l = e.querySelector(".iCIMS_PageStepText")?.textContent || "";
    o(a, l) && r()
  };
  e.addEventListener("click", e => n(e.target), !0), e.addEventListener("submit", e => n(e
    .submitter), !0)
}
n.defineInteropFlag(r), n.export(r, "isIcimsAutofillContinue", () => o), n.export(r,
  "getIcimsContinuationSignature", () => i), n.export(r, "bindIcimsContinueAutofill", () => a)

