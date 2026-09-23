// @ts-nocheck
/**
 * Oracle Cloud — education LOV candidate mapping.
 */

function o(e) {
  return String(e ?? "")
    .normalize("NFKC")
    .replace(/[\u2018\u2019\u02bc]/g, "'")
    .replace(/[\u2010-\u2015]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}
function i(e, t) {
  if (!t || "object" != typeof t || Array.isArray(t)) return null;
  let r = t,
    n = String(
      "school" === e ? (r.ContentItemId ?? "") : (r.LookupCode ?? ""),
    ).trim(),
    i2 = o("school" === e ? r.Name : r.Meaning);
  return n && i2
    ? {
        displayIdentity: i2,
        value: n,
      }
    : null;
}
function a(e, t, r) {
  let n = e.get(t);
  if (n) {
    n.push(r);
    return;
  }
  e.set(t, [r]);
}
function mapOracleEducationLovCandidates({
  fieldType: e,
  lovItems: t,
  visibleCandidates: r,
}) {
  let n = /* @__PURE__ */ new Map();
  for (let r2 of t) {
    let t2 = i(e, r2);
    t2 && a(n, t2.displayIdentity, t2);
  }
  let l2 = /* @__PURE__ */ new Map();
  for (let e2 of r) {
    let t2 = o(e2.text);
    t2 && a(l2, t2, e2);
  }
  let s = [],
    u = /* @__PURE__ */ new Set(),
    c = /* @__PURE__ */ new Set();
  for (let t2 of r) {
    let r2 = o(t2.text),
      i2 = n.get(r2) ?? [],
      a2 = l2.get(r2) ?? [];
    if (1 !== i2.length || 1 !== a2.length) continue;
    let d = i2[0];
    u.has(d.value) ||
      (u.add(d.value),
      c.add(t2),
      s.push({
        candidate_key: `${e}:${d.value}`,
        value: d.value,
        text: t2.text,
      }));
  }
  return {
    candidates: s,
    diagnostics: {
      lovItemCount: t.length,
      mappedCandidateCount: s.length,
      unmatchedLovItemCount: Math.max(0, t.length - u.size),
      unmatchedVisibleCandidateCount: Math.max(0, r.length - c.size),
    },
  };
}

export { mapOracleEducationLovCandidates };
