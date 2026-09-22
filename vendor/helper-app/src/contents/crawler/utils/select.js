/**
 * Parcel module id: h22JB
 * Resolved path: src/contents/crawler/utils/select.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "fuzzyFindBest", () => a), n.export(r, "findMatchOption", () =>
  l);
var o = e("~contents/methods/choice-match");

function i(e, t) {
  if (0 === e.length) return t.length;
  if (0 === t.length) return e.length;
  let r = [];
  for (let e = 0; e <= t.length; e++) r[e] = [e];
  for (let t = 0; t <= e.length; t++) r[0][t] = t;
  for (let n = 1; n <= t.length; n++)
    for (let o = 1; o <= e.length; o++) t.charAt(n - 1) === e.charAt(o - 1) ? r[n][o] = r[n - 1][o -
      1
    ] : r[n][o] = Math.min(r[n - 1][o - 1] + 1, r[n][o - 1] + 1, r[n - 1][o] + 1);
  return r[t.length][e.length]
}

function a(e, t, r = {}) {
  if (!e || 0 === t.length) return null;
  let {
    caseSensitive: n = !1,
    threshold: o = 1,
    normalize: a = e => e.trim()
  } = r, l = a(e);
  n || (l = l.toLowerCase());
  let s = null,
    u = !1;
  return t.forEach((e, t) => {
    let r = a(e?.textContent ?? "");
    if (n || (r = r.toLowerCase()), !r || !l) return;
    let c = i(l, r),
      d = Math.max(l.length, r.length),
      f = 0 === d ? 1 : (d - c) / d;
    s && f >= o && f === s.similarity && (u = !0), f >= o && (!s || f > s.similarity) && (u = !
      1, s = {
        bestMatch: e,
        similarity: f,
        distance: c,
        index: t
      })
  }), u ? null : s?.bestMatch ?? null
}

function l(e, t = "") {
  return (0, o.findExactChoice)(e, t, e => e.textContent) ?? null
}

