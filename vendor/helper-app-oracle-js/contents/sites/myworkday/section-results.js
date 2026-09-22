/**
 * Parcel module id: jywL4
 * Resolved path: contents/sites/myworkday/section-results.js (oracle restore)
 * Dependencies:
 *   ./snapshot-alignment -> 25NpF  =>  _tilde_contents/sites/myworkday/snapshot-alignment.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "syncMyWorkdaySectionResult", () => s);
var o = e("./snapshot-alignment");

function i(e) {
  return e.replace(/\*/g, "").replace(/\s+/g, " ").trim().toLowerCase()
}

function a(e, t) {
  if (Object.prototype.hasOwnProperty.call(e, t)) return {
    found: !0,
    value: e[t]
  };
  let r = i(t);
  for (let [t, n] of Object.entries(e))
    if (i(t) === r) return {
      found: !0,
      value: n
    };
  return {
    found: !1,
    value: void 0
  }
}

function l(e) {
  return "string" == typeof e ? e.trim() || void 0 : "number" == typeof e ? String(e) : void 0
}

function s(e, t) {
  if (!Array.isArray(t)) return e;
  let r = new Map;
  for (let [n, i] of t.entries()) {
    if (!i || "object" != typeof i) continue;
    let t = i,
      a = t[o.MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_KEY],
      l = "number" == typeof a && Number.isInteger(a) && a >= 0 ? a : "employment" === e.type ? n :
      void 0;
    void 0 !== l && r.set(l, t)
  }
  let n = !1,
    i = e.rows.map(e => {
      let t = r.get(e.index);
      if (!t) return e;
      let o = e.fields.map(e => {
        let r = a(t, e.label),
          o = r.found ? l(r.value) : void 0;
        return o && o !== e.value ? (n = !0, {
          ...e,
          value: o
        }) : e
      });
      return o === e.fields ? e : {
        ...e,
        fields: o
      }
    });
  return n ? {
    ...e,
    rows: i
  } : e
}

