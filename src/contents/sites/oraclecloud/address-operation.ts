// @ts-nocheck
/**
 * Oracle Cloud — Address Line 1 eLocation resolve helpers.
 */

import * as constants from "../../../constants.ts";
import * as enums from "../../../core/enums.js";
let a =
    "https://elocation.oracle.com/AppIDGC000001/geocoder/resources/gcsearch",
  l = {
    accept: "*/*",
    "accept-language": "en",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
  },
  s = /* @__PURE__ */ new Set([
    "address",
    "address1",
    "addressline",
    "addressline1",
    "streetaddress",
  ]),
  u = /* @__PURE__ */ new Set(["city", "townorcity"]),
  c = /* @__PURE__ */ new Set([
    "state",
    "stateprovince",
    "province",
    "region2",
  ]),
  d = /* @__PURE__ */ new Set(["country"]);
function f() {
  if ("undefined" == typeof window) return false;
  try {
    let e = "jobright_oraclecloud_combobox_debug";
    return (
      "1" === new URLSearchParams(window.location?.search ?? "").get(e) ||
      window.localStorage?.getItem(e) === "1"
    );
  } catch {
    return false;
  }
}
function p(e, t = {}) {
  if (f())
    try {
      console.debug(
        `[OracleCloud][Address] ${e} ${JSON.stringify({ t: Date.now(), ...t })}`,
      );
    } catch {}
}
function m(e) {
  return Array.isArray(e)
    ? m(e.find((e2) => m(e2)))
    : "string" == typeof e
      ? e.replace(/\s+/g, " ").trim()
      : "";
}
function h(e) {
  return m(e)
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
}
function g(e) {
  let t = e.$input;
  return h(t?.getAttribute?.("name"));
}
function b(e, t) {
  for (let [r, n] of Object.entries(e ?? {})) {
    if (!t.has(h(r))) continue;
    let e2 = m(n);
    if (e2) return e2;
  }
  return "";
}
function y(e) {
  let t = m(e);
  if (!t) return "";
  let r = t.toUpperCase();
  if (constants.STATE_MAP[r]) return r;
  let n = Object.entries(constants.STATE_MAP).find(
    ([, e2]) => e2.toLowerCase() === t.toLowerCase(),
  );
  return n?.[0] ?? "";
}
function v(e) {
  let t = y(e);
  return t ? constants.STATE_MAP[t] : m(e);
}
function w(e) {
  let t = e
    .split(",")
    .map((e2) => e2.trim())
    .filter(Boolean);
  if (t.length < 2) return e;
  let r = y(t[t.length - 1]);
  return r ? t.slice(0, -1).join(", ") : e;
}
function S(e) {
  let t = m(e).toLowerCase();
  return "canada" === t || "ca" === t
    ? "CA"
    : "united states" === t ||
        "united states of america" === t ||
        "us" === t ||
        "usa" === t ||
        "u.s." === t ||
        "u.s.a." === t
      ? "US"
      : "";
}
function E(e) {
  try {
    return new URL(e).origin;
  } catch {
    return;
  }
}
function x(e, t) {
  let r = b(t, /* @__PURE__ */ new Set([h(e.label)]));
  return r || b(t, s);
}
function hasOracleAddressLine1Value(e, t) {
  return !!x(e, t);
}
function isOracleAddressLine1Rule(e) {
  return s.has(g(e)) || s.has(h(e.label));
}
function isOracleAddressLine1SearchRule(e) {
  if (!isOracleAddressLine1Rule(e)) return false;
  let t = e.$input,
    r = String(t?.className ?? ""),
    n = t?.getAttribute?.("role"),
    o2 = t?.getAttribute?.("aria-controls")?.trim(),
    a2 = t?.getAttribute?.("aria-autocomplete");
  return (
    !!(
      "combobox" === n ||
      o2 ||
      "list" === a2 ||
      r.includes("cx-select-input") ||
      r.includes("oj-searchselect-input")
    ) ||
    ("string" != typeof t?.tagName && e.type === enums.FIELD_TYPE.SELECT)
  );
}
function T(e) {
  if (!isOracleAddressLine1Rule(e) || isOracleAddressLine1SearchRule(e))
    return false;
  let t = String(e.$input?.tagName ?? "").toUpperCase();
  return "INPUT" === t || "TEXTAREA" === t;
}
function describeOracleAddressLine1Rule(e) {
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
    hasOracleSearchClass:
      r.includes("cx-select-input") || r.includes("oj-searchselect-input"),
    isSearchRule: isOracleAddressLine1SearchRule(e),
    isPlainInputRule: T(e),
  };
}
function buildOracleAddressSearchTerm({ addressLine1: e, city: t, state: r }) {
  let n = m(e),
    o2 = w(m(t)),
    i2 = v(r);
  return n && o2 && i2 ? [n, o2, i2].join(", ") : "";
}
function buildOracleAddressLine1Operation({
  originalAnswer: e,
  country: t,
  currentUrl: r,
}) {
  let n = E(r);
  return {
    field_type: "location",
    question: "What is your address line 1?",
    description:
      "Search and select the Oracle eLocation address option for Address Line 1. Oracle displays address candidates with city, state, and sometimes postal code.",
    original_answer: e,
    search_request_schema: {
      url: a,
      allowed_methods: ["GET"],
      headers: {
        ...l,
        ...(n
          ? {
              origin: n,
            }
          : {}),
        referer: r || "https://elocation.oracle.com/",
      },
      params: [
        {
          name: "q",
          location: "query",
          description: "Free-text address search query.",
          default_value: "",
          isSearchParam: true,
        },
        {
          name: "limit",
          location: "query",
          description: "Maximum Oracle eLocation search result count.",
          default_value: "200",
          isMetaParam: true,
        },
        {
          name: "country_filter",
          location: "query",
          description: "Oracle eLocation country filter.",
          default_value: S(t),
          isMetaParam: true,
        },
        {
          name: "hnrank",
          location: "query",
          description: "Enable Oracle eLocation house-number ranking.",
          default_value: "true",
          isMetaParam: true,
        },
      ],
    },
  };
}
function getOracleResolvedAddressLine1Value(e) {
  return e?.result?.action !== "SELECT_OPTIONS"
    ? ""
    : m(e.result.selected_values[0]);
}
async function resolveOracleAddressLine1Record({
  currentUrl: e,
  rule: t,
  record: r,
  resolveOperation: n,
}) {
  if (!isOracleAddressLine1SearchRule(t))
    return (
      p("resolve:skip", {
        reason: "not-searchable",
        rule: describeOracleAddressLine1Rule(t),
      }),
      r
    );
  let o2 = x(t, r),
    i2 = b(r, u),
    a2 = b(r, c),
    l2 = b(r, d),
    s2 = buildOracleAddressSearchTerm({
      addressLine1: o2,
      city: i2,
      state: a2,
    });
  if (
    (p("resolve:prepare", {
      rule: describeOracleAddressLine1Rule(t),
      hasAddressLine1: !!o2,
      addressLine1Length: o2.length,
      hasCity: !!i2,
      hasState: !!a2,
      hasCountry: !!l2,
      hasSearchTerm: !!s2,
      searchTermLength: s2.length,
    }),
    !s2)
  )
    return (
      p("resolve:fallback", {
        reason: "incomplete-address-context",
      }),
      r
    );
  let f2 = {
      ...r,
      [t.label]: s2,
    },
    h2 = buildOracleAddressLine1Operation({
      originalAnswer: s2,
      country: l2,
      currentUrl: e,
    }),
    g2 = h2.search_request_schema.params.find(
      (e2) => "country_filter" === e2.name,
    )?.default_value;
  p("resolve:dispatch", {
    countryFilter: g2,
    endpoint: new URL(h2.search_request_schema.url).hostname,
    hasReferer: !!h2.search_request_schema.headers.referer,
    searchTerm: s2,
    searchTermLength: s2.length,
  });
  try {
    let e2 = await n(h2),
      o3 = getOracleResolvedAddressLine1Value(e2),
      i3 =
        e2?.result?.action === "SELECT_OPTIONS"
          ? e2.result.selected_values
          : [];
    if (
      (p("resolve:response", {
        action: e2?.result?.action ?? null,
        selectedValueCount: i3.length,
        selectedValueLengths: i3.map((e3) => m(e3).length),
        accepted: !!o3,
      }),
      !o3)
    )
      return (
        p("resolve:fallback", {
          reason: "resolver-returned-no-selectable-option",
          localSearchTermLength: s2.length,
        }),
        f2
      );
    return (
      p("resolve:apply", {
        resolvedValueLength: o3.length,
      }),
      {
        ...r,
        [t.label]: o3,
      }
    );
  } catch (e2) {
    return (
      p("resolve:error", {
        errorType: e2 instanceof Error ? e2.name : typeof e2,
      }),
      console.warn(
        "[OracleCloud][Address] Failed to resolve Address Line 1:",
        e2,
      ),
      f2
    );
  }
}

export {
  buildOracleAddressLine1Operation,
  buildOracleAddressSearchTerm,
  describeOracleAddressLine1Rule,
  getOracleResolvedAddressLine1Value,
  hasOracleAddressLine1Value,
  T as isOracleAddressLine1PlainInputRule,
  isOracleAddressLine1Rule,
  isOracleAddressLine1SearchRule,
  resolveOracleAddressLine1Record,
};
