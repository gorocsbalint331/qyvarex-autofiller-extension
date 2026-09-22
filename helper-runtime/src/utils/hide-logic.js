/**
 * Parcel module id: fv4lo
 * Resolved path: src/utils/hide-logic.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~enums/storage -> e2WM4  =>  src/enums/storage.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "shouldHideOnDomain", () => a), n.export(r, "hideOnDomain",
() => l), n.export(r, "hideOnAllWebsites", () => s), n.export(r, "restoreFromExtensionIcon", () =>
  u);
var o = e("~enums/storage");
let i = async () => {
  let e = await chrome.storage.local.get([o.STORAGE_KEY.HIDDEN_ALL_WEBSITES, o.STORAGE_KEY
    .HIDDEN_DOMAINS
  ]);
  return {
    hiddenAll: e[o.STORAGE_KEY.HIDDEN_ALL_WEBSITES] || !1,
    hiddenDomains: e[o.STORAGE_KEY.HIDDEN_DOMAINS] || []
  }
}, a = async e => {
  let {
    hiddenAll: t,
    hiddenDomains: r
  } = await i();
  return t || r.includes(e)
}, l = async e => {
  let {
    hiddenDomains: t
  } = await i();
  t.includes(e) || await chrome.storage.local.set({
    [o.STORAGE_KEY.HIDDEN_DOMAINS]: [...t, e]
  })
}, s = async () => {
  await chrome.storage.local.set({
    [o.STORAGE_KEY.HIDDEN_ALL_WEBSITES]: !0
  })
}, u = async e => {
  let {
    hiddenAll: t,
    hiddenDomains: r
  } = await i(), n = {};
  t && (n[o.STORAGE_KEY.HIDDEN_ALL_WEBSITES] = !1), r.includes(e) && (n[o.STORAGE_KEY
      .HIDDEN_DOMAINS] = r.filter(t => t !== e)), Object.keys(n).length > 0 &&
    await chrome.storage.local.set(n)
}

