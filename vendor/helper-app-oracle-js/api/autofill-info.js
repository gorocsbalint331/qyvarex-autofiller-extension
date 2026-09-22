/**
 * Parcel module id: 3ZEEL
 * Resolved path: api/autofill-info.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "isAutofillInfoRevision", () => o), n.export(r,
  "isAutofillInfoSaveSuccess", () => a), n.export(r, "isAutofillInfoConflict", () => l), n.export(
  r, "parseAutofillInfoSaveResponse", () => s), n.export(r, "parseAutofillInfoGetResponse", () =>
  u);
let o = e => "number" == typeof e && Number.isSafeInteger(e) && e >= 0,
  i = e => null === e || "object" != typeof e || Array.isArray(e) ? null : e,
  a = e => {
    let t = i(e);
    return t?.success === !0 && t?.result === !0 && (void 0 === t.status || t.status >= 200 && t
      .status < 300)
  },
  l = e => {
    let t = i(e);
    return t?.status === 409 || t?.errorCode === 409
  },
  s = async e => {
    let t = i(await e.json().catch(() => null));
    if (e.ok && a(t)) return t;
    let r = {
      success: !1,
      status: e.status,
      ..."number" == typeof t?.errorCode && Number.isFinite(t.errorCode) ? {
        errorCode: t.errorCode
      } : {}
    };
    return console.warn("[autofill-info] write rejected", r), r
  }, u = async e => {
    let t = i(await e.json().catch(() => null));
    if (!e.ok || t?.success !== !0 || !i(t.result)) throw console.warn(
      "[autofill-info] read rejected", {
        status: e.status,
        success: t?.success === !0
      }), Error("Failed to fetch autofill information");
    return t
  }

