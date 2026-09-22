/**
 * Parcel module id: 4atQ2
 * Resolved path: utils/phone.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  let t = e.replace(/\D/g, "");
  return 10 === t.length ? {
    originalPhone: e,
    areaCode: "+1",
    phoneWithoutAreaCode: t
  } : 11 === t.length ? {
    originalPhone: e,
    areaCode: "+".concat(t.charAt(0)),
    phoneWithoutAreaCode: t.substring(1)
  } : {
    originalPhone: e,
    areaCode: "",
    phoneWithoutAreaCode: t || e
  }
}

function i(e) {
  let t = (e || "").trim(),
    r = t.match(/^\(\+?(\d{1,4})\)(.*)$/);
  if (r) return {
    dialCode: r[1],
    nationalNumber: r[2].replace(/\D/g, "")
  };
  let n = t.match(/^\+(\d{1,4})[\s\-.]+(.*)$/);
  return n ? {
    dialCode: n[1],
    nationalNumber: n[2].replace(/\D/g, "")
  } : {
    dialCode: "",
    nationalNumber: t.replace(/\D/g, "")
  }
}

function a(e) {
  let {
    originalPhone: t,
    areaCode: r,
    phoneWithoutAreaCode: n
  } = o(e), i = r.replace(/\D/g, ""), a = n.replace(/\D/g, ""), l = `${i}${a}`.trim();
  return l ? 11 === l.length && l.startsWith("1") ?
    `${l[0]}-${l.slice(1,4)}-${l.slice(4,7)}-${l.slice(7)}` : l : t
}
n.defineInteropFlag(r), n.export(r, "formatPhoneNumber", () => o), n.export(r, "parsePhonePrefix",
() => i), n.export(r, "formatPhoneNumberWithHyphens", () => a)

