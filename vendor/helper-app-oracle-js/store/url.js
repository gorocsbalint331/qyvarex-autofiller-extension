/**
 * Parcel module id: b53L3
 * Resolved path: store/url.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   zustand -> ffRFv  =>  zustand.js
 *   ~utils/checkLinkedin -> 5xJv6  =>  _tilde_utils/checkLinkedin.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "shouldPreserveCurrentTabUrlWithJobId", () => s), n.export(r,
  "useUrlStore", () => c);
var o = e("zustand"),
  i = e("@plasmohq/messaging"),
  a = e("~utils/checkLinkedin");

function l(e) {
  let t = new URL(e.toString());
  return t.searchParams.delete("jr_id"), t.searchParams.sort(), t.toString()
}

function s({
  currentTabUrl: e,
  nextUrl: t
}) {
  if (!e || !t) return !1;
  try {
    let r = new URL(e),
      n = new URL(t);
    if (!r.searchParams.get("jr_id") || n.searchParams.get("jr_id")) return !1;
    return l(r) === l(n)
  } catch {
    return !1
  }
}
let u = async () => {
  if ((0, a.isLinkedinPreloadIframe)()) try {
    let e = window.top?.location?.href;
    if (e && "about:blank" !== e) return e
  } catch {}
  return window.location.href && "about:blank" !== window.location.href ? window.location.href :
    await (0, i.sendToBackground)({
      name: "getCurrentTabUrl"
    })
}, c = (0, o.create)(e => ({
  currentTabUrl: void 0,
  setCurrentTabUrl: t => e({
    currentTabUrl: t
  }),
  initCurrentTabUrl: async () => {
    let t = await u();
    e({
      currentTabUrl: t
    })
  },
  updateCurrentTabUrl: async () => {
    let t = await u();
    e(e => s({
      currentTabUrl: e.currentTabUrl,
      nextUrl: t
    }) ? e : {
      currentTabUrl: t
    })
  }
}))

