/**
 * Parcel module id: aCElZ
 * Resolved path: src/contents/sites/autofill-answer-pair-tracking.js
 * Dependencies:
 *   ../../utils/autofill-answer-pair -> 5bGe0  =>  src/utils/autofill-answer-pair.js
 *   ../../utils/autofill-install-attribution-client -> kEmo3  =>  src/utils/autofill-install-attribution-client.js
 *   ./falcon-answer-tracking -> 2vI9E  =>  src/contents/sites/falcon-answer-tracking.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

let n;
var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
o.defineInteropFlag(r), o.export(r, "beginFalconResponseAnswerRequest", () => l
    .beginFalconResponseAnswerRequest), o.export(r, "hasCurrentFalconResponseAnswer", () => l
    .hasCurrentFalconResponseAnswer), o.export(r, "inheritFalconResponseAnswerMarker", () => l
    .inheritFalconResponseAnswerMarker), o.export(r, "isCurrentFalconResponseAnswer", () => l
    .isCurrentFalconResponseAnswer), o.export(r, "isFalconResponseAnswer", () => l
    .isFalconResponseAnswer), o.export(r, "markFalconResponseAnswer", () => l
    .markFalconResponseAnswer), o.export(r, "registerAutofillAnswerPairAnswerProvider", () => s), o
  .export(r, "buildFalconAutofillAnswerPairData", () => y), o.export(r,
    "buildAutofillAnswerPairEventPayload", () => w), o.export(r, "sendAutofillAnswerPairEvent",
  () => C);
var i = e("../../utils/autofill-answer-pair"),
  a = e("../../utils/autofill-install-attribution-client"),
  l = e("./falcon-answer-tracking");

function s(e) {
  return n = e, () => {
    n === e && (n = void 0)
  }
}

function u() {
  try {
    return n?.()
  } catch {
    return
  }
}
let c = [{
    sourceKey: "education",
    targetKey: "education"
  }, {
    sourceKey: "Education",
    targetKey: "education"
  }, {
    sourceKey: "employment",
    targetKey: "employment"
  }, {
    sourceKey: "Employment",
    targetKey: "employment"
  }, {
    sourceKey: "experience",
    targetKey: "employment"
  }, {
    sourceKey: "Experience",
    targetKey: "employment"
  }],
  d = ["education", "Education", "EDUCATION"],
  f = ["Employment", "employment", "EMPLOYMENT", "workExperience", "work_experience",
    "Work Experience", "experience", "Experience"
  ];

function p(e) {
  return !e || "object" != typeof e || Array.isArray(e) ? {} : Object.fromEntries(Object.entries(e)
    .filter(([, e]) => void 0 !== e))
}

function m(e) {
  return e && "object" == typeof e && !Array.isArray(e) ? e : {}
}

function h(e, t) {
  for (let r of t)
    if (Array.isArray(e[r])) return e[r];
  return []
}

function g(e) {
  return Array.isArray(e) ? e.filter(e => !!e && "object" == typeof e && !Array.isArray(e)).map(p) :
    []
}

function b(e) {
  return Array.isArray(e) && e.length > 0 && e.every(e => "string" == typeof e) ? e.join(", ") : e
}

function y(e) {
  let t = {
      ...m(e?.profile_data),
      ...m(e?.profileData)
    },
    r = Object.fromEntries((Array.isArray(e?.fillDataList) ? e.fillDataList : []).filter(e =>
      "string" == typeof e?.name && "" !== e.name.trim() && void 0 !== e.value).map(e => [e.name,
      b(e.value)
    ]));
  void 0 !== t.greenhouseLocation && (r.greenhouseLocation = t.greenhouseLocation);
  let n = (0, i.filterAutofillAnswerPairNormalSnapshot)(r),
    o = g(h(t, f).length > 0 ? h(t, f) : e?.workExperience),
    a = g(h(t, d).length > 0 ? h(t, d) : e?.education),
    s = p({
      normal: n,
      employment: o,
      education: a
    });
  return (0, l.isFalconResponseAnswer)(e) || Object.keys(s.normal).length || s.employment.length ||
    s.education.length ? s : void 0
}

function v(e, t) {
  let r = {
      ...m(e)
    },
    n = {
      ...p(t)
    };
  for (let {
      sourceKey: e,
      targetKey: t
    }
    of c) {
    let o = r[e];
    Array.isArray(o) && (void 0 === n[t] && (n[t] = o), delete r[e])
  }
  return {
    snapshot: r,
    additionalData: n
  }
}

function w({
  formUrl: e,
  autofillSnapshot: t,
  submitSnapshot: r,
  additionalAutofillData: n = {},
  additionalSubmitData: o = {},
  extraData: a = {},
  source: l
}) {
  let s = v(t, n),
    u = v(r, o);
  return (0, i.sanitizeAutofillAnswerPairPayload)({
    formUrl: e,
    autofill: {
      normal: (0, i.filterAutofillAnswerPairNormalSnapshot)(s.snapshot),
      ...s.additionalData
    },
    submit: {
      normal: (0, i.filterAutofillAnswerPairNormalSnapshot)(u.snapshot),
      ...u.additionalData
    },
    ...p(a),
    source: l
  })
}
let S = "jobright:debugAutofillAnswerPair";

function E() {
  try {
    let e = globalThis.location?.search || "";
    if (e.includes("jr_debug_autofill_answer_pair=1") || e.includes(
        "jobright_debug_autofill_answer_pair=1")) return !0;
    return globalThis.localStorage?.getItem(S) === "1" || !0 === globalThis
      .__JOBRIGHT_DEBUG_AUTOFILL_ANSWER_PAIR__
  } catch {
    return !1
  }
}

function x(e) {
  if (E()) try {
    console.info("[Jobright][autofill_answer_pair]", JSON.stringify(e))
  } catch (t) {
    console.info("[Jobright][autofill_answer_pair]", e)
  }
}
async function C(e, t, r = a.sendAutofillAnswerPairWithAttribution) {
  let n = e.extraData || {},
    o = n;
  if (void 0 === n.falcon) {
    let e = u();
    if (e && (0, l.isCurrentFalconResponseAnswer)(e)) {
      let t = y(e) ?? {
        normal: {},
        employment: [],
        education: []
      };
      t && (o = {
        ...n,
        falcon: t
      })
    }
  }
  let i = w({
    ...e,
    extraData: o
  });
  if (x(i), t) {
    t("autofill_answer_pair", i);
    return
  }
  try {
    await r(i)
  } catch {
    console.warn("[AutofillInstallAttribution] answer pair upload failed", {
      reason: "event_upload_failed"
    })
  }
}

