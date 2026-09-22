/**
 * Parcel module id: joTPk
 * Resolved path: src/contents/sites/zohorecruit/location-operation.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/profile-location-original-answer -> 8kwJN  =>  src/contents/sites/profile-location-original-answer.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "isZohoRecruitCityAutocompleteRule", () => u), n.export(r,
  "getZohoRecruitCityOriginalAnswer", () => c), n.export(r, "shouldRestoreZohoPostalCode", () =>
  d), n.export(r, "buildZohoRecruitCityOperation", () => f), n.export(r,
  "getZohoRecruitResolvedCityValue", () => p), n.export(r, "findExactZohoRecruitCityOption", () =>
  m);
var o = e("~contents/sites/profile-location-original-answer");
let i = "/recruit/v2/public/Locations/search",
  a = e => String(e ?? "").replace(/\s+/g, " ").trim().toLowerCase();

function l(e, t) {
  let r = "profileData.location" === t ? e?.profileData : "profile_data.location" === t ? e
    ?.profile_data : null,
    n = r?.location ?? r?.Location ?? r,
    o = n?.postCode ?? n?.postalCode ?? n?.postal_code ?? n?.zipCode ?? n?.zip_code;
  return "string" == typeof o ? o.trim() : ""
}

function s(e) {
  return "https:" === e.protocol && ("zohorecruit.com" === e.hostname || e.hostname.endsWith(
    ".zohorecruit.com"))
}

function u(e) {
  return e?.__zohoSemanticType === "address.city" && !!e?.$input?.closest?.("lyte-autocomplete")
}

function c(e, t, r = "") {
  let n = (0, o.getProfileLocationOriginalAnswer)(e);
  if (n.value) {
    let t = l(e, n.source);
    return {
      ...n,
      value: [n.value, t].filter(Boolean).join(", ")
    }
  }
  let i = [t.trim(), r.trim()].filter(Boolean).join(", ");
  return {
    value: i,
    source: i ? "regular" : ""
  }
}

function d({
  postalCode: e,
  currentPostalCode: t
}) {
  return !!e.trim() && !t.trim()
}

function f({
  pageUrl: e,
  originalAnswer: t
}) {
  let r = new URL(e);
  if (!s(r)) throw Error("Invalid Zoho Recruit City autocomplete URL");
  return {
    field_type: "location",
    question: "Which Zoho Recruit City option matches the candidate location?",
    description: "Search Zoho Recruit City suggestions and choose the one locations[].value that best matches the candidate city, state or region, and country.",
    original_answer: t,
    search_request_schema: {
      url: `${r.origin}${i}`,
      allowed_methods: ["GET"],
      headers: {
        accept: "application/json, text/plain, */*"
      },
      params: [{
        name: "searchtxt",
        location: "query",
        description: "Full candidate City, State or Region, Country, and Postal Code search text.",
        default_value: "",
        isSearchParam: !0
      }, {
        name: "field_name",
        location: "query",
        description: "Zoho location field to search.",
        default_value: "City",
        isMetaParam: !0
      }, {
        name: "selected_country",
        location: "query",
        description: "Current Zoho form country filter, empty when unset.",
        default_value: "",
        isMetaParam: !0
      }]
    }
  }
}

function p(e) {
  if (e?.result?.action !== "SELECT_OPTIONS") return "";
  let t = e.result.selected_values[0];
  return "string" == typeof t ? t.trim() : ""
}

function m(e, t) {
  let r = a(t);
  if (!r) return null;
  let n = e.filter(e => a(e.textContent) === r);
  return 1 === n.length ? n[0] : null
}

