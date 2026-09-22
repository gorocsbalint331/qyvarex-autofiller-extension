/**
 * Parcel module id: dCLIj
 * Resolved path: contents/sites/ashby/field-metadata.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "annotateAshbyFieldType", () => d);
var o = e("@plasmohq/messaging");
let i = "__jr_ashby_field_metadata_request",
  a = "__jr_ashby_field_metadata_response",
  l = "data-jr-ashby-field-type",
  s = "data-jr-ashby-location-types",
  u = !1;
async function c() {
  if (u) return !0;
  try {
    let e = await (0, o.sendToBackground)({
      name: "injectAshbyFieldMetadata"
    });
    return u = e?.success === !0
  } catch (e) {
    return console.warn("[AshbyFieldMetadata] failed to prepare field detection:", e), !1
  }
}
async function d(e) {
  if ("undefined" == typeof document || "function" != typeof CustomEvent || !await c()) return;
  let t = `${Date.now()}_${Math.random().toString(36).slice(2,8)}`,
    r = `ashby_field_${t}`;
  e.setAttribute("data-jr-ashby-field-id", t), await new Promise(n => {
    let o = () => {
        document.removeEventListener(a, c), e.removeAttribute("data-jr-ashby-field-id")
      },
      u = setTimeout(() => {
        o(), n()
      }, 1e3);

    function c(t) {
      let i = t.detail;
      i?.requestId === r && (clearTimeout(u), o(), i?.fieldType === "Location" || i
        ?.serializationId === "LocationField" ? (e.setAttribute(l, "location"), Array
          .isArray(i?.locationTypes) ? e.setAttribute(s, JSON.stringify(i.locationTypes)) :
          e.removeAttribute(s), console.info("[Ashby][GeoLocation] metadata", {
            fieldPath: e.closest("[data-field-path]")?.getAttribute("data-field-path"),
            fieldType: i?.fieldType,
            serializationId: i?.serializationId,
            locationTypes: i?.locationTypes
          })) : (e.removeAttribute(l), e.removeAttribute(s)), n())
    }
    document.addEventListener(a, c), document.dispatchEvent(new CustomEvent(i, {
      detail: {
        selector: `[data-jr-ashby-field-id="${t}"]`,
        requestId: r
      }
    }))
  })
}

