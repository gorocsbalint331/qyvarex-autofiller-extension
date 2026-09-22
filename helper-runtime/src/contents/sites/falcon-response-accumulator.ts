// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/contents/sites/falcon-response-accumulator.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import * as o from "./falcon-answer-tracking.ts"
import * as i from "../../utils/fieldLabel.js"

function a(e) {
  return !!e && "object" == typeof e && !Array.isArray(e)
}

function l(e) {
  return {
    ...a(e?.profile_data) ? e.profile_data : {},
    ...a(e?.profileData) ? e.profileData : {}
  }
}

function s(e, t) {
  let r = [...Array.isArray(e?.fillDataList) ? e.fillDataList : [], ...Array.isArray(t
      .fillDataList) ? t.fillDataList : []
    ],
    n = new Map,
    o = [];
  for (let e of r) {
    let t = i.normalizeFieldLabel(e?.name);
    if (!t) continue;
    let r = n.get(t);
    undefined === r ? (n.set(t, o.length), o.push(e)) : o[r] = e
  }
  return o.length ? o : undefined
}

function u(e, t) {
  return Array.isArray(t) && t.length > 0 ? [...t] : Array.isArray(e) && e.length > 0 ? [...e] : []
}

function c(e, t) {
  let r = {
      ...l(e),
      ...l(t)
    },
    n = {
      ...e,
      ...t,
      profileData: r,
      profile_data: r,
      education: u(e?.education, t.education),
      workExperience: u(e?.workExperience, t.workExperience),
      skills: u(e?.skills, t.skills),
      regular: {
        ...a(e?.regular) ? e.regular : {},
        ...a(t.regular) ? t.regular : {}
      },
      fillDataList: s(e, t)
    };
  return undefined === t.state && e?.state !== undefined && (n.state = e.state), undefined === t.country && e
    ?.country !== undefined && (n.country = e.country), o.inheritFalconResponseAnswerMarker(n, t,
      e)
}
class d {
  reset() {
    this.epoch += 1, this.answer = undefined
  }
  captureEpoch() {
    return this.epoch
  }
  record(e, t) {
    t === this.epoch && o.isCurrentFalconResponseAnswer(e) && (this.answer = c(this.answer,
      e))
  }
  current() {
    return o.isCurrentFalconResponseAnswer(this.answer) ? this.answer : undefined
  }
  constructor() {
    this.epoch = 0
  }
}

export { c as mergeFalconResponseAnswers, d as FalconResponseAccumulator }
