// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/contents/sites/autofill-answer-pair-tracking.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import * as i from "../../utils/autofill-answer-pair.js"
import * as a from "../../utils/autofill-install-attribution-client.js"
import * as l from "./falcon-answer-tracking.js"

let n;function s(e) {
  return n = e, () => {
    n === e && (n = undefined)
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
    .filter(([, e]) => undefined !== e))
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
      "string" == typeof e?.name && "" !== e.name.trim() && undefined !== e.value).map(e => [e.name,
      b(e.value)
    ]));
  undefined !== t.greenhouseLocation && (r.greenhouseLocation = t.greenhouseLocation);
  let n = i.filterAutofillAnswerPairNormalSnapshot(r),
    o = g(h(t, f).length > 0 ? h(t, f) : e?.workExperience),
    a = g(h(t, d).length > 0 ? h(t, d) : e?.education),
    s = p({
      normal: n,
      employment: o,
      education: a
    });
  return l.isFalconResponseAnswer(e) || Object.keys(s.normal).length || s.employment.length ||
    s.education.length ? s : undefined
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
    Array.isArray(o) && (undefined === n[t] && (n[t] = o), delete r[e])
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
  return i.sanitizeAutofillAnswerPairPayload({
    formUrl: e,
    autofill: {
      normal: i.filterAutofillAnswerPairNormalSnapshot(s.snapshot),
      ...s.additionalData
    },
    submit: {
      normal: i.filterAutofillAnswerPairNormalSnapshot(u.snapshot),
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
        "jobright_debug_autofill_answer_pair=1")) return true;
    return globalThis.localStorage?.getItem(S) === "1" || true === globalThis
      .__JOBRIGHT_DEBUG_AUTOFILL_ANSWER_PAIR__
  } catch {
    return false
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
  if (undefined === n.falcon) {
    let e = u();
    if (e && l.isCurrentFalconResponseAnswer(e)) {
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

export { s as registerAutofillAnswerPairAnswerProvider, w as buildAutofillAnswerPairEventPayload, C as sendAutofillAnswerPairEvent }
