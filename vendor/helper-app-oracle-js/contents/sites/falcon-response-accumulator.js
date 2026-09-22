/**
 * Parcel module id: 9lWmK
 * Resolved path: contents/sites/falcon-response-accumulator.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/falcon-answer-tracking -> 2vI9E  =>  _tilde_contents/sites/falcon-answer-tracking.js
 *   ~utils/fieldLabel -> 1RmGw  =>  _tilde_utils/fieldLabel.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "mergeFalconResponseAnswers", () => c), n.export(r,
  "FalconResponseAccumulator", () => d);
var o = e("~contents/sites/falcon-answer-tracking"),
  i = e("~utils/fieldLabel");

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
    let t = (0, i.normalizeFieldLabel)(e?.name);
    if (!t) continue;
    let r = n.get(t);
    void 0 === r ? (n.set(t, o.length), o.push(e)) : o[r] = e
  }
  return o.length ? o : void 0
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
  return void 0 === t.state && e?.state !== void 0 && (n.state = e.state), void 0 === t.country && e
    ?.country !== void 0 && (n.country = e.country), (0, o.inheritFalconResponseAnswerMarker)(n, t,
      e)
}
class d {
  reset() {
    this.epoch += 1, this.answer = void 0
  }
  captureEpoch() {
    return this.epoch
  }
  record(e, t) {
    t === this.epoch && (0, o.isCurrentFalconResponseAnswer)(e) && (this.answer = c(this.answer,
      e))
  }
  current() {
    return (0, o.isCurrentFalconResponseAnswer)(this.answer) ? this.answer : void 0
  }
  constructor() {
    this.epoch = 0
  }
}

