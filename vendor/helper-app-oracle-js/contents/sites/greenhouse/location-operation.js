/**
 * Parcel module id: 3FZ4r
 * Resolved path: contents/sites/greenhouse/location-operation.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "extractGreenhouseLocationControlConfig", () => d), n.export(r,
  "buildGreenhouseLocationOperation", () => f), n.export(r, "getGreenhouseResolvedLocationValue",
  () => p);
let o = "https://api-geocode-earth-proxy.greenhouse.io/",
  i = "locality",
  a = {
    accept: "*/*",
    "accept-language": "en",
    origin: "https://job-boards.greenhouse.io",
    referer: "https://job-boards.greenhouse.io/",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36"
  };

function l(e) {
  return "string" == typeof e ? e.trim() : ""
}

function s(e, t, r = "") {
  return l(e?.[t]) || r
}

function u(e) {
  try {
    let t = e.endsWith("/") ? e : `${e}/`;
    return new URL("v1/autocomplete", t).toString()
  } catch {
    return `${o}v1/autocomplete`
  }
}

function c(e) {
  let t = e.match(/window\.ENV\s*=\s*(\{[\s\S]*?\})\s*;?/);
  if (!t?.[1]) return null;
  try {
    return JSON.parse(t[1])
  } catch {
    return null
  }
}

function d(e = "undefined" == typeof document ? void 0 : document) {
  if (!e?.scripts) return {};
  for (let t of Array.from(e.scripts)) {
    let e = t.textContent ?? "";
    if (!e.includes("LOCATION_CONTROL_")) continue;
    let r = c(e);
    if (r) return {
      provider: l(r.LOCATION_CONTROL_PROVIDER),
      apiKey: l(r.LOCATION_CONTROL_API_KEY),
      baseUrl: l(r.LOCATION_CONTROL_BASE_URL)
    }
  }
  return {}
}

function f({
  currentUrl: e,
  originalAnswer: t,
  locationControlConfig: r
}) {
  let n = s(r, "apiKey"),
    l = s(r, "baseUrl", o),
    c = s(r, "locationType", i);
  return {
    field_type: "location",
    question: "Where are you located?",
    description: "Search and select the Greenhouse candidate Location option. For Pelias results, Greenhouse displays options as name, region, country when those fields are available.",
    original_answer: t,
    search_request_schema: {
      url: u(l),
      allowed_methods: ["GET"],
      headers: {
        ...a,
        referer: e || a.referer
      },
      params: [{
        name: "text",
        location: "query",
        description: "Free-text location search query.",
        default_value: "",
        isSearchParam: !0
      }, {
        name: "api_key",
        location: "query",
        description: "Greenhouse location control API key.",
        default_value: n,
        isMetaParam: !0
      }, {
        name: "layers",
        location: "query",
        description: "Greenhouse location control result layer filter.",
        default_value: c,
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

