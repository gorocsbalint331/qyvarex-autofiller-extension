/**
 * Parcel module id: imWVP
 * Resolved path: utils/starRating.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/storage -> 9RCRe  =>  @plasmohq/storage.js
 *   ~contents/methods/submit-success-observer -> 7L3Rw  =>  _tilde_contents/methods/submit-success-observer.js
 *   ~enums/storage -> e2WM4  =>  _tilde_enums/storage.js
 *   ~store/feedback -> l2vHp  =>  _tilde_store/feedback.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "isTargetSite", () => g), n.export(r, "computeModificationRate",
  () => b), n.export(r, "computeFillRate", () => y), n.export(r, "handleSubmitStarRating", () =>
  v), n.export(r, "resumePendingStarRating", () => w), n.export(r, "recordStarRatingClicked",
() => x), n.export(r, "recordStarRatingNoClick", () => C);
var o = e("@plasmohq/storage"),
  i = e("~contents/methods/submit-success-observer"),
  a = e("~enums/storage"),
  l = e("~store/feedback");
let s = 3e4,
  u = new o.Storage,
  c = 1728e5,
  d = ["greenhouse", "lever", "ashby"],
  f = "JOBRIGHT_STAR_RATING_PENDING_SUCCESS";

function p(e) {
  try {
    window.sessionStorage.setItem(f, JSON.stringify(e))
  } catch {}
}

function m() {
  try {
    let e = window.sessionStorage.getItem(f);
    if (!e) return null;
    let t = JSON.parse(e);
    if (!t || "string" != typeof t.siteName || !Array.isArray(t.selectors) || "number" != typeof t
      .expiresAt) return null;
    return t
  } catch {
    return null
  }
}

function h() {
  try {
    window.sessionStorage.removeItem(f)
  } catch {}
}

function g(e) {
  return d.includes(e)
}

function b(e, t) {
  let r = Object.keys(e);
  if (0 === r.length) return 0;
  let n = r.filter(r => {
    let n = String(e[r] ?? ""),
      o = String(t[r] ?? "");
    return n !== o
  });
  return n.length / r.length
}

function y(e) {
  let t = e.fieldRequiredStatus.filter(e => e.required).map(e => e.label);
  if (0 === t.length) return 1;
  let r = t.filter(t => e.filledFields.includes(t));
  return r.length / t.length
}
async function v(e, t, r, n, o = [], l) {
  if (!g(e)) return;
  let d = y(n),
    f = b(t, r);
  if (d < .9 || f > .1 || !o || 0 === o.length) return;
  let [m, v, w] = await Promise.all([u.get(a.STORAGE_KEY.STAR_RATING_CLICKED), u.get(a.STORAGE_KEY
    .STAR_RATING_EXPOSURE_COUNT_NO_CLICK), u.get(a.STORAGE_KEY
    .STAR_RATING_LAST_EXPOSURE_TIME)]);
  if (m || (v || 0) >= 3 || Date.now() - (w || 0) < c) return;
  let S = Date.now() + s;
  p({
    siteName: e,
    selectors: o,
    expiresAt: S
  });
  let x = await (0, i.waitForSubmitSuccess)(o, {
    timeout: s,
    signal: l
  });
  x && (h(), await E())
}
async function w() {
  if ("undefined" == typeof window || window.self !== window.top) return;
  let e = m();
  if (!e) return;
  let t = e.expiresAt - Date.now();
  if (t <= 0) {
    h();
    return
  }
  let r = await (0, i.waitForSubmitSuccess)(e.selectors, {
    timeout: t,
    matchExisting: !0
  });
  r && (h(), await E())
}
let S = !1;
async function E() {
  if (!S) {
    S = !0;
    try {
      let [e, t, r, n] = await Promise.all([u.get(a.STORAGE_KEY.STAR_RATING_SITE_FILLS), u.get(a
        .STORAGE_KEY.STAR_RATING_CLICKED), u.get(a.STORAGE_KEY
        .STAR_RATING_EXPOSURE_COUNT_NO_CLICK), u.get(a.STORAGE_KEY
        .STAR_RATING_LAST_EXPOSURE_TIME)]);
      if (t || (r || 0) >= 3 || Date.now() - (n || 0) < c) return;
      let o = "number" != typeof e || isNaN(e) ? 0 : e,
        i = o + 1;
      if (i < 1) {
        await u.set(a.STORAGE_KEY.STAR_RATING_SITE_FILLS, i);
        return
      }
      await u.set(a.STORAGE_KEY.STAR_RATING_LAST_EXPOSURE_TIME, Date.now()), await u.set(a
        .STORAGE_KEY.STAR_RATING_SITE_FILLS, 0), window.self === window.top ? (0, l
        .useFeedbackStore).setState({
        showStarRatingModal: !0
      }) : window.top?.postMessage({
        type: "JOBRIGHT_SHOW_STAR_RATING_MODAL"
      }, {
        targetOrigin: "*"
      })
    } finally {
      S = !1
    }
  }
}
async function x() {
  await u.set(a.STORAGE_KEY.STAR_RATING_CLICKED, !0)
}
async function C() {
  let e = await u.get(a.STORAGE_KEY.STAR_RATING_EXPOSURE_COUNT_NO_CLICK) || 0;
  await u.set(a.STORAGE_KEY.STAR_RATING_EXPOSURE_COUNT_NO_CLICK, e + 1)
}

