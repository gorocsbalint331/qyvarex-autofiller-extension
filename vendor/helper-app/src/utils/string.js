/**
 * Parcel module id: ijEFi
 * Resolved path: src/utils/string.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "isStringNumber", () => o), n.export(r, "isJSONString", () =>
  i), n.export(r, "parsedJSONString", () => a), n.export(r, "cleanObject", () => l), n.export(r,
    "toNameTitleCase", () => s);
let o = e => {
    let t = Number(e);
    return !isNaN(t)
  },
  i = e => {
    try {
      return JSON.parse(e), !0
    } catch (e) {
      return console.error("isJSONString error", e), !1
    }
  },
  a = e => {
    try {
      let t = JSON.parse(e);
      return t
    } catch (e) {
      return console.error("parsedJSONString error", e), null
    }
  };

function l(e) {
  return a(JSON.stringify(e))
}

function s(e) {
  return e && "string" == typeof e ? e.split(/(\s+|-)/).map(e => /^\s+$/.test(e) || "-" === e ||
    0 === e.length ? e : e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("") : e
}

