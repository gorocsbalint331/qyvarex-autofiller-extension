// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/contents/sites/profile-location-original-answer.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import * as o from "../../constants.ts"

function i(e) {
  return "string" == typeof e ? e.trim() : ""
}

function a(e, t) {
  return i(e?.location?.[t] ?? e?.Location?.[t] ?? e?.[t])
}

function l(e) {
  return e.replace(/\./g, "").replace(/\s+/g, " ").trim().toLowerCase()
}

function s(e) {
  let t = e.replace(/\./g, "").trim().toUpperCase();
  return o.STATE_MAP[t] ?? e
}

function u(e, t) {
  let r = s(t),
    n = e.split(",").map(e => e.trim()).filter(Boolean);
  if (n.length < 2) return {
    city: e,
    state: r
  };
  let o = s(n[n.length - 1]);
  return l(o) !== l(r) ? {
    city: e,
    state: r
  } : {
    city: n.slice(0, -1).join(", "),
    state: r
  }
}

function c(e) {
  let t = e.split(",").map(e => e.trim()).filter(Boolean);
  return t.length < 2 ? e : [...t.slice(0, -1), s(t[t.length - 1])].join(", ")
}

function d(e, t = {}) {
  let r = [{
      data: e?.profileData,
      source: "profileData.location"
    }, {
      data: e?.profile_data,
      source: "profile_data.location"
    }],
    n = new Set(t.locationTypes ?? ["City"]);
  for (let {
      data: e,
      source: t
    }
    of r) {
    let r = a(e, "state"),
      o = a(e, "country");
    if (!n.has("City")) {
      if (n.has("Region") && r) return {
        value: [s(r), o].filter(Boolean).join(", "),
        source: t
      };
      if (n.has("Country") && o) return {
        value: o,
        source: t
      };
      continue
    }
    let i = a(e, "city");
    if (!i) continue;
    if (!r) return {
      value: [c(i), o].filter(Boolean).join(", "),
      source: t
    };
    let l = u(i, r);
    return {
      value: [l.city, l.state, o].filter(Boolean).join(", "),
      source: t
    }
  }
  return {
    value: "",
    source: ""
  }
}

export { d as getProfileLocationOriginalAnswer }
