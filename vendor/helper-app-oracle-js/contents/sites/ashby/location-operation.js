/**
 * Parcel module id: e158F
 * Resolved path: contents/sites/ashby/location-operation.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "isAshbyGeoLocationRule", () => u), n.export(r,
    "getAshbyGeoLocationTypes", () => c), n.export(r, "buildAshbyLocationOperation", () => d), n
  .export(r, "getAshbyResolvedLocationValue", () => f);
var o = e("~core/enums");
let i = "ApiAutocompleteGeoLocation",
  a = ["Country", "Region", "City"],
  l = new Set(a),
  s = `
  query ApiAutocompleteGeoLocation($text: String!, $locationTypes: [GeoLocationType!]) {
    autocompleteGeoLocation(text: $text, locationTypes: $locationTypes) {
      suggestions {
        name
      }
    }
  }
`;

function u(e) {
  return e.type === o.FIELD_TYPE.ASHBY_SEARCH && (!!e.$input.closest(
    '[data-field-path="_systemfield_location"]') || "location" === e.$input.getAttribute(
    "data-jr-ashby-field-type"))
}

function c(e) {
  let t = e.$input.getAttribute("data-jr-ashby-location-types");
  if (!t) return [...a];
  try {
    let e = JSON.parse(t);
    if (!Array.isArray(e)) return [...a];
    let r = e.filter(e => "string" == typeof e && l.has(e));
    return r.length > 0 ? r : [...a]
  } catch {
    return [...a]
  }
}

function d({
  currentUrl: e,
  originalAnswer: t,
  locationTypes: r = a
}) {
  let n = new URL("/api/non-user-graphql", e);
  return n.searchParams.set("op", i), {
    field_type: "location",
    question: "Location",
    description: "Search Ashby's GeoLocation options and select a suggestion by name.",
    original_answer: t,
    search_request_schema: {
      url: n.toString(),
      allowed_methods: ["GET"],
      headers: {
        accept: "application/json",
        referer: e
      },
      params: [{
        name: "operationName",
        location: "query",
        description: "Ashby GraphQL operation name.",
        default_value: i,
        isMetaParam: !0
      }, {
        name: "variables",
        location: "query",
        description: `Keep this parameter as valid JSON while changing only "text"; preserve the fixed locationTypes ${JSON.stringify(r)}.`,
        default_value: JSON.stringify({
          text: "",
          locationTypes: r
        }),
        isSearchParam: !0
      }, {
        name: "query",
        location: "query",
        description: "Ashby location autocomplete GraphQL query.",
        default_value: s,
        isMetaParam: !0
      }]
    }
  }
}

function f(e) {
  if (e?.result?.action !== "SELECT_OPTIONS") return "";
  let t = e.result.selected_values[0];
  return "string" == typeof t ? t.trim() : ""
}

