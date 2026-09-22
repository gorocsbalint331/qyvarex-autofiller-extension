/**
 * Parcel module id: cEpli
 * Resolved path: src/contents/sites/oraclecloud/address-operation.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~constants -> 6VEjR  =>  src/constants.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "hasOracleAddressLine1Value", () => C), n.export(r,
    "isOracleAddressLine1Rule", () => A), n.export(r, "isOracleAddressLine1SearchRule", () => k), n
  .export(r, "isOracleAddressLine1PlainInputRule", () => T), n.export(r,
    "describeOracleAddressLine1Rule", () => F), n.export(r, "buildOracleAddressSearchTerm", () =>
  I), n.export(r, "buildOracleAddressLine1Operation", () => j), n.export(r,
    "getOracleResolvedAddressLine1Value", () => D), n.export(r, "resolveOracleAddressLine1Record",
  () => P);
var o = e("~constants"),
  i = e("~core/enums");
let a = "https://elocation.oracle.com/AppIDGC000001/geocoder/resources/gcsearch",
  l = {
    accept: "*/*",
    "accept-language": "en",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36"
  },
  s = new Set(["address", "address1", "addressline", "addressline1", "streetaddress"]),
  u = new Set(["city", "townorcity"]),
  c = new Set(["state", "stateprovince", "province", "region2"]),
  d = new Set(["country"]);

function f() {
  if ("undefined" == typeof window) return !1;
  try {
    let e = "jobright_oraclecloud_combobox_debug";
    return "1" === new URLSearchParams(window.location?.search ?? "").get(e) || window.localStorage
      ?.getItem(e) === "1"
  } catch {
    return !1
  }
}

function p(e, t = {}) {
  if (f()) try {
    console.debug(`[OracleCloud][Address] ${e} ${JSON.stringify({t:Date.now(),...t})}`)
  } catch {}
}

function m(e) {
  return Array.isArray(e) ? m(e.find(e => m(e))) : "string" == typeof e ? e.replace(/\s+/g, " ")
    .trim() : ""
}

function h(e) {
  return m(e).replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
}

function g(e) {
  let t = e.$input;
  return h(t?.getAttribute?.("name"))
}

function b(e, t) {
  for (let [r, n] of Object.entries(e ?? {})) {
    if (!t.has(h(r))) continue;
    let e = m(n);
    if (e) return e
  }
  return ""
}

function y(e) {
  let t = m(e);
  if (!t) return "";
  let r = t.toUpperCase();
  if (o.STATE_MAP[r]) return r;
  let n = Object.entries(o.STATE_MAP).find(([, e]) => e.toLowerCase() === t.toLowerCase());
  return n?.[0] ?? ""
}

function v(e) {
  let t = y(e);
  return t ? o.STATE_MAP[t] : m(e)
}

function w(e) {
  let t = e.split(",").map(e => e.trim()).filter(Boolean);
  if (t.length < 2) return e;
  let r = y(t[t.length - 1]);
  return r ? t.slice(0, -1).join(", ") : e
}

function S(e) {
  let t = m(e).toLowerCase();
  return "canada" === t || "ca" === t ? "CA" : "united states" === t ||
    "united states of america" === t || "us" === t || "usa" === t || "u.s." === t || "u.s.a." ===
    t ? "US" : ""
}

function E(e) {
  try {
    return new URL(e).origin
  } catch {
    return
  }
}

function x(e, t) {
  let r = b(t, new Set([h(e.label)]));
  return r || b(t, s)
}

function C(e, t) {
  return !!x(e, t)
}

function A(e) {
  return s.has(g(e)) || s.has(h(e.label))
}

function k(e) {
  if (!A(e)) return !1;
  let t = e.$input,
    r = String(t?.className ?? ""),
    n = t?.getAttribute?.("role"),
    o = t?.getAttribute?.("aria-controls")?.trim(),
    a = t?.getAttribute?.("aria-autocomplete");
  return !!("combobox" === n || o || "list" === a || r.includes("cx-select-input") || r.includes(
    "oj-searchselect-input")) || "string" != typeof t?.tagName && e.type === i.FIELD_TYPE.SELECT
}

function T(e) {
  if (!A(e) || k(e)) return !1;
  let t = String(e.$input?.tagName ?? "").toUpperCase();
  return "INPUT" === t || "TEXTAREA" === t
}

function F(e) {
  let t = e.$input,
    r = String(t?.className ?? "");
  return {
    label: e.label,
    ruleType: e.type,
    inputName: t?.getAttribute?.("name") ?? null,
    tagName: String(t?.tagName ?? "").toUpperCase() || null,
    role: t?.getAttribute?.("role") ?? null,
    hasAriaControls: !!t?.getAttribute?.("aria-controls")?.trim(),
    ariaAutocomplete: t?.getAttribute?.("aria-autocomplete") ?? null,
    hasOracleSearchClass: r.includes("cx-select-input") || r.includes("oj-searchselect-input"),
    isSearchRule: k(e),
    isPlainInputRule: T(e)
  }
}

function I({
  addressLine1: e,
  city: t,
  state: r
}) {
  let n = m(e),
    o = w(m(t)),
    i = v(r);
  return n && o && i ? [n, o, i].join(", ") : ""
}

function j({
  originalAnswer: e,
  country: t,
  currentUrl: r
}) {
  let n = E(r);
  return {
    field_type: "location",
    question: "What is your address line 1?",
    description: "Search and select the Oracle eLocation address option for Address Line 1. Oracle displays address candidates with city, state, and sometimes postal code.",
    original_answer: e,
    search_request_schema: {
      url: a,
      allowed_methods: ["GET"],
      headers: {
        ...l,
        ...n ? {
          origin: n
        } : {},
        referer: r || "https://elocation.oracle.com/"
      },
      params: [{
        name: "q",
        location: "query",
        description: "Free-text address search query.",
        default_value: "",
        isSearchParam: !0
      }, {
        name: "limit",
        location: "query",
        description: "Maximum Oracle eLocation search result count.",
        default_value: "200",
        isMetaParam: !0
      }, {
        name: "country_filter",
        location: "query",
        description: "Oracle eLocation country filter.",
        default_value: S(t),
        isMetaParam: !0
      }, {
        name: "hnrank",
        location: "query",
        description: "Enable Oracle eLocation house-number ranking.",
        default_value: "true",
        isMetaParam: !0
      }]
    }
  }
}

function D(e) {
  return e?.result?.action !== "SELECT_OPTIONS" ? "" : m(e.result.selected_values[0])
}
async function P({
  currentUrl: e,
  rule: t,
  record: r,
  resolveOperation: n
}) {
  if (!k(t)) return p("resolve:skip", {
    reason: "not-searchable",
    rule: F(t)
  }), r;
  let o = x(t, r),
    i = b(r, u),
    a = b(r, c),
    l = b(r, d),
    s = I({
      addressLine1: o,
      city: i,
      state: a
    });
  if (p("resolve:prepare", {
      rule: F(t),
      hasAddressLine1: !!o,
      addressLine1Length: o.length,
      hasCity: !!i,
      hasState: !!a,
      hasCountry: !!l,
      hasSearchTerm: !!s,
      searchTermLength: s.length
    }), !s) return p("resolve:fallback", {
    reason: "incomplete-address-context"
  }), r;
  let f = {
      ...r,
      [t.label]: s
    },
    h = j({
      originalAnswer: s,
      country: l,
      currentUrl: e
    }),
    g = h.search_request_schema.params.find(e => "country_filter" === e.name)?.default_value;
  p("resolve:dispatch", {
    countryFilter: g,
    endpoint: new URL(h.search_request_schema.url).hostname,
    hasReferer: !!h.search_request_schema.headers.referer,
    searchTerm: s,
    searchTermLength: s.length
  });
  try {
    let e = await n(h),
      o = D(e),
      i = e?.result?.action === "SELECT_OPTIONS" ? e.result.selected_values : [];
    if (p("resolve:response", {
        action: e?.result?.action ?? null,
        selectedValueCount: i.length,
        selectedValueLengths: i.map(e => m(e).length),
        accepted: !!o
      }), !o) return p("resolve:fallback", {
      reason: "resolver-returned-no-selectable-option",
      localSearchTermLength: s.length
    }), f;
    return p("resolve:apply", {
      resolvedValueLength: o.length
    }), {
      ...r,
      [t.label]: o
    }
  } catch (e) {
    return p("resolve:error", {
      errorType: e instanceof Error ? e.name : typeof e
    }), console.warn("[OracleCloud][Address] Failed to resolve Address Line 1:", e), f
  }
}

