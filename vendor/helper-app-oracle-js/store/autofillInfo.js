/**
 * Parcel module id: 79VNP
 * Resolved path: store/autofillInfo.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   zustand -> ffRFv  =>  zustand.js
 *   ~api/autofill-info -> 3ZEEL  =>  _tilde_api/autofill-info.js
 *   ~enums/storage -> e2WM4  =>  _tilde_enums/storage.js
 *   ~store/autofill-diff -> 3L9SO  =>  _tilde_store/autofill-diff.js
 *   ~store/autofill-storage -> gw4pD  =>  _tilde_store/autofill-storage.js
 *   ~store/resume -> iSBDf  =>  _tilde_store/resume.js
 *   ~utils/skill-list -> 74lkH  =>  _tilde_utils/skill-list.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "useAutofillInfoStore", () => g);
var o = e("zustand"),
  i = e("@plasmohq/messaging"),
  a = e("~api/autofill-info"),
  l = e("~enums/storage"),
  s = e("~store/autofill-diff"),
  u = e("~store/autofill-storage"),
  c = e("~store/resume"),
  d = e("~utils/skill-list");
let f = (0, u.createAutofillSnapshotStorage)(),
  p = {
    gender: e => e.gender ?? "",
    ethnicity: e => e.race ?? "",
    veteran: e => e.veteran ?? "",
    disability: e => e.disability ?? "",
    workAuthorization: e => e.workAuthorization ?? "",
    sponsorshipStatus: e => e.sponsorshipStatus ?? "",
    lgbt: e => e.lgbt ?? "",
    hispanic: e => e.hispanic ?? ""
  },
  m = (e, t, r, n, o) => {
    for (let [i, a] of Object.entries(r)) a(e) !== a(t) && o.push(`${n}.${i}`)
  },
  h = (e, t) => {
    let r = [];
    (0, s.diffPersonalFields)(e, t, r), m(e.employmentInfo ?? {}, t.employmentInfo ?? {}, p,
      "equalEmployment", r);
    let n = Array.isArray(e.employmentInfo?.sexual) ? e.employmentInfo.sexual : [],
      o = Array.isArray(t.employmentInfo?.sexual) ? t.employmentInfo.sexual : [];
    JSON.stringify(n) !== JSON.stringify(o) && r.push("equalEmployment.sexual"), (e.pronouns ??
      "") !== (t.pronouns ?? "") && r.push("equalEmployment.pronouns"), (e.salary ?? "") !== (t
        .salary ?? "") && r.push("preference.salary"), (e.hiringDate ?? "") !== (t.hiringDate ??
      "") && r.push("preference.hiringDate"), (e.additionalApplicationInfo ?? "") !== (t
        .additionalApplicationInfo ?? "") && r.push("preference.additionalApplicationInfo"), (e
        .regenerationEmail ?? "") !== (t.regenerationEmail ?? "") && r.push(
        "signupInformation.registrationEmail"), (0, s.diffArrayFields)(e.education ?? [], t
        .education ?? [], s.EDU_FIELD_MAP, "education", r), (0, s.diffArrayFields)(e
        .workExperience ?? [], t.workExperience ?? [], s.WORK_FIELD_MAP, "workExperience", r);
    let i = (0, d.extractSkillList)(e),
      a = (0, d.extractSkillList)(t);
    return JSON.stringify(i) !== JSON.stringify(a) && r.push("skill"), r
  },
  g = (0, o.create)(e => ({
    autofillInfo: null,
    country: "",
    city: "",
    autoUpdate: !0,
    revision: null,
    fetchAutofillInfo: async (t = !1) => {
      try {
        let r = await (0, i.sendToBackground)({
            name: "getAutofillInfo",
            body: {
              withAutoUpdate: !0,
              forceRefresh: t
            }
          }),
          n = r?.data ?? null,
          o = r?.autoUpdate ?? !0,
          s = n && (0, a.isAutofillInfoRevision)(r?.revision) ? r.revision : null;
        if (n) {
          let t = await f.get(l.STORAGE_KEY.AUTOFILL_INFO_SNAPSHOT);
          if (t) {
            let e = h(t, n);
            e.length > 0 && (0, c.useResumeStore).getState().setAutofillChangedFields(e)
          } else await f.set(l.STORAGE_KEY.AUTOFILL_INFO_SNAPSHOT, n);
          return e({
            autofillInfo: n,
            revision: s,
            country: n.location?.country ?? "",
            city: n.location?.city ?? "",
            autoUpdate: o
          }), n
        }
        return r ? e({
          autofillInfo: null,
          revision: null,
          country: "",
          city: "",
          autoUpdate: o
        }) : e({
          autofillInfo: null,
          revision: null,
          country: "",
          city: ""
        }), null
      } catch {
        return e({
          autofillInfo: null,
          revision: null,
          country: "",
          city: ""
        }), null
      }
    },
    saveSnapshotToStorage: async e => {
      let t = e ?? g.getState().autofillInfo;
      t && await f.set(l.STORAGE_KEY.AUTOFILL_INFO_SNAPSHOT, t)
    }
  }))

