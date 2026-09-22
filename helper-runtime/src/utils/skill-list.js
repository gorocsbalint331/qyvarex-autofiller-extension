/**
 * Parcel module id: 74lkH
 * Resolved path: src/utils/skill-list.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "extractSkillList", () => l), n.export(r,
  "withStructuredSkillList", () => u);
let o = e => Array.isArray(e) ? e.map(e => "string" == typeof e ? e : `${e??""}`).filter(e => e
    .length > 0) : [],
  i = e => Array.isArray(e) ? e.flatMap(e => {
    if (!e || "object" != typeof e) return [];
    let t = "string" == typeof e.category && e.category.length > 0 ? e.category : "DEFAULT",
      r = o(e.skills);
    return 0 === r.length ? [] : [{
      category: t,
      skills: r
    }]
  }) : [],
  a = e => Array.isArray(e) ? o(e) : e && "object" == typeof e ? Object.values(e).flatMap(e => o(
  e)) : [],
  l = e => {
    let t = i(e?.skillList);
    return t.length > 0 || Array.isArray(e?.skillList) ? t.flatMap(e => e.skills) : a(e?.skills)
  },
  s = e => {
    if (Array.isArray(e)) {
      let t = o(e);
      return t.length > 0 ? [{
        category: "DEFAULT",
        skills: t
      }] : []
    }
    return e && "object" == typeof e ? Object.entries(e).flatMap(([e, t]) => {
      let r = o(t);
      return r.length > 0 ? [{
        category: e,
        skills: r
      }] : []
    }) : []
  },
  u = (e, t) => {
    let r = {
      ...e
    };
    return delete r.skills, {
      ...r,
      skillList: s(t)
    }
  }

