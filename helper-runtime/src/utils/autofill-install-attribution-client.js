/**
 * Parcel module id: kEmo3
 * Resolved path: src/utils/autofill-install-attribution-client.js
 * Dependencies:
 *   ./autofill-completion -> 8ImK9  =>  src/utils/autofill-completion.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "acceptAutofillInstallAttribution", () => a), n.export(r,
  "flushAutofillInstallAttribution", () => l), n.export(r, "reportAutofillFirstUseAttribution",
() => s), n.export(r, "reportAutofillFirstUseIfSuccessful", () => u), n.export(r,
  "sendAutofillAnswerPairWithAttribution", () => c);
var o = e("@plasmohq/messaging"),
  i = e("./autofill-completion");
async function a(e) {
  let t = await (0, o.sendToBackground)({
    name: "acceptAutofillInstallAttribution",
    body: {
      record: e
    }
  });
  return t?.accepted === !0
}
async function l() {
  let e = await (0, o.sendToBackground)({
    name: "flushAutofillInstallAttribution"
  });
  return e?.committed === !0
}
async function s() {
  await (0, o.sendToBackground)({
    name: "reportAutofillFirstUseAttribution"
  })
}
async function u(e, t = s) {
  return !!(0, i.isSuccessfulAutofillCompletion)(e) && (await t(), !0)
}
async function c(e) {
  await (0, o.sendToBackground)({
    name: "postAutofillAnswerPairAttributed",
    body: {
      payload: e
    }
  })
}

