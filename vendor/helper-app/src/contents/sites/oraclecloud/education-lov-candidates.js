/**
 * Parcel module id: aWY8j
 * Resolved path: src/contents/sites/oraclecloud/education-lov-candidates.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  return String(e ?? "").normalize("NFKC").replace(/[\u2018\u2019\u02bc]/g, "'").replace(
    /[\u2010-\u2015]/g, "-").replace(/\s+/g, " ").trim().toLowerCase()
}

function i(e, t) {
  if (!t || "object" != typeof t || Array.isArray(t)) return null;
  let r = t,
    n = String("school" === e ? r.ContentItemId ?? "" : r.LookupCode ?? "").trim(),
    i = o("school" === e ? r.Name : r.Meaning);
  return n && i ? {
    displayIdentity: i,
    value: n
  } : null
}

function a(e, t, r) {
  let n = e.get(t);
  if (n) {
    n.push(r);
    return
  }
  e.set(t, [r])
}

function l({
  fieldType: e,
  lovItems: t,
  visibleCandidates: r
}) {
  let n = new Map;
  for (let r of t) {
    let t = i(e, r);
    t && a(n, t.displayIdentity, t)
  }
  let l = new Map;
  for (let e of r) {
    let t = o(e.text);
    t && a(l, t, e)
  }
  let s = [],
    u = new Set,
    c = new Set;
  for (let t of r) {
    let r = o(t.text),
      i = n.get(r) ?? [],
      a = l.get(r) ?? [];
    if (1 !== i.length || 1 !== a.length) continue;
    let d = i[0];
    u.has(d.value) || (u.add(d.value), c.add(t), s.push({
      candidate_key: `${e}:${d.value}`,
      value: d.value,
      text: t.text
    }))
  }
  return {
    candidates: s,
    diagnostics: {
      lovItemCount: t.length,
      mappedCandidateCount: s.length,
      unmatchedLovItemCount: Math.max(0, t.length - u.size),
      unmatchedVisibleCandidateCount: Math.max(0, r.length - c.size)
    }
  }
}
n.defineInteropFlag(r), n.export(r, "mapOracleEducationLovCandidates", () => l)

