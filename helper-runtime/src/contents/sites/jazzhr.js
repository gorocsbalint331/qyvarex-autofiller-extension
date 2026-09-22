/**
 * Parcel module id: 1xsGf
 * Resolved path: src/contents/sites/jazzhr.js
 * Dependencies:
 *   ../base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ./answer -> gfSkt  =>  src/contents/sites/jazzhr/answer.js
 *   ./operations -> cgRxd  =>  src/contents/sites/jazzhr/operations.js
 *   ./rules -> iW69z  =>  src/contents/sites/jazzhr/rules.js
 *   ./tracking -> 5WaRj  =>  src/contents/sites/jazzhr/tracking.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/cover-letter -> 7VR5i  =>  src/contents/methods/cover-letter.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Jazzhr", () => w);
var o = e("@plasmohq/messaging"),
  i = e("~contents/methods/cancellation"),
  a = e("~contents/methods/dom"),
  l = e("~contents/methods/cover-letter"),
  s = e("~contents/methods/answer"),
  u = e("~contents/methods/track"),
  c = e("~core/enums"),
  d = e("~utils/string"),
  f = e("../base-filler"),
  p = e("./answer"),
  m = e("./operations"),
  h = e("./rules"),
  g = e("./tracking");
let b = "resumator-eeoc_disability_date-value";

function y(e) {
  return e.type === c.FIELD_TYPE.DATE && e.$input?.id === b
}

function v() {
  let e = new Date,
    t = e.getFullYear(),
    r = String(e.getMonth() + 1).padStart(2, "0"),
    n = String(e.getDate()).padStart(2, "0");
  return `${t}-${r}-${n}`
}
class w extends f.BaseFiller {
  getFieldHandlers() {
    return {
      [c.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, m.fillInputTextField)(e.$input, t),
        options: {
          expectArray: !1
        }
      },
      [c.FIELD_TYPE.DATE]: {
        handler: (e, t) => (0, m.fillInputTextField)(e.$input, t),
        options: {
          expectArray: !1
        }
      },
      [c.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, m.fillSelectField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [c.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, m.fillCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [c.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, m.fillRadioGroupField)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  async extractFormRules() {
    return (0, h.extractRules)()
  }
  getSiteName() {
    return "jazzhr"
  }
  formatAnswer(e) {
    return (0, p.formatAnswer)(e)
  }
  async getAutofillSnapshot(e) {
    return this.answerPairSnapshotRules = e, this.answerPairAutofillSnapshot = (0, h
      .getFormSnapshot)(e), this.answerPairAutofillSnapshot
  }
  async getSubmitSnapshot() {
    return (0, h.getFormSnapshot)(this.answerPairSnapshotRules)
  }
  getSubmitTrackingDelegationRoot() {
    return document
  }
  resolveDelegatedSubmitButton(e) {
    return (0, g.resolveJazzhrTrackingButton)(e)
  }
  normalizeAutofillAnswerPairTrackingData(e) {
    let {
      extraData: t,
      ...r
    } = e;
    return {
      ...r,
      formUrl: e.formUrl || window.location.href,
      autofillSnapshot: this.answerPairAutofillSnapshot ?? e.autofillSnapshot
    }
  }
  async checkCoverLetter() {
    (0, a.postCoverLetterStatus)((0, h.getCoverLetterStatus)())
  }
  async doFillForm(e) {
    this.resetFalconResponseAccumulator(), this.timeTrace.rulesParseStartTime = Date.now(), this
      .progressTracker.clear(), this.taskQueue.clear();
    let {
      rules: t,
      task: r
    } = (0, l.prepareCoverLetterFillTask)({
      rules: (0, h.extractRules)(),
      coverLetter: this.coverLetter,
      resumeId: this.resumeInfo?.id,
      tailorId: this.resumeInfo?.tailorId
    });
    this.progressTracker.setFieldsRequiredStatus(t);
    try {
      this.token || (this.token = await (0, s.getSiteToken)());
      let r = t.filter(e => {
        let t = e.label.toLowerCase();
        return !t.includes("start date") && !t.includes("human check")
      });
      this.timeTrace.requestStartTime = Date.now();
      let n = this.captureFalconResponseRun(),
        o = await (0, s.getElementRules)(r, "jazzhr", this.token, e, this.resumeInfo.id, this
          .resumeInfo.tailorId);
      this.recordFalconResponse(o, n), this.answer = (0, p.formatAnswer)(o), this.timeTrace
        .fillStartTime = Date.now()
    } catch (e) {
      if (e instanceof s.HTTPError || e instanceof s.ResumeMissingCodeError) return (0, u
        .sendHttpStatusMessage)(e.message), e.message;
      console.error("Unknown error occurred:", e)
    }(0, i.checkpoint)();
    let n = (0, g.getJazzhrSubmitButton)(document.body);
    n && (0, u.bindSubmitButton)(n.textContent || "Submit", this.progressTracker.fieldStatus,
      this.timeTrace);
    let a = (0, l.withoutCoverLetterRules)(t).flatMap(e => {
      if (!y(e)) return (0, s.getRegularOperations)([e], this.answer.regular, this
        .operationConfig);
      let t = v();
      return console.info("[JazzHR][disability-signature] filling current date", {
        fieldId: b,
        format: "YYYY-MM-DD",
        date: t
      }), (0, s.getRegularOperations)([e], {
        [e.label]: t
      }, this.operationConfig)
    });
    for (let e of a) this.taskQueue.add(e);
    await this.taskQueue.run(), this.disableUploadResume ? this.progressTracker
      .updateMissedProgress("Resume/CV") : this.taskQueue.add(async () => {
        await (0, m.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      }), await this.taskQueue.run(), await (0, l.fillPreparedCoverLetterTask)({
        task: r,
        coverLetter: this.coverLetter,
        answer: this.answer,
        updateMissedProgress: this.progressTracker.updateMissedProgress,
        operationConfig: this.operationConfig
      }), await this.executeSiteSpecificSteps((0, l.withoutCoverLetterRules)(t));
    let f = (0, u.generateSubmitStatus)("filling", this.progressTracker.fieldStatus, this
      .timeTrace);
    return f.formData && (f.formData = this.filterFormData(f.formData)), await (0, o
      .sendToBackground)({
      name: "saveSubmitStatus",
      body: {
        submitStatus: f,
        status: "filling"
      }
    }), window.top?.postMessage(d.cleanObject({
      type: c.MESSAGE_EVENTS.autoFillResultFromIframe,
      data: this.progressTracker.fieldStatus
    }), {
      targetOrigin: "*"
    }), this.progressTracker.generateFinalProgress()
  }
  submitApplication() {
    let e = (0, g.getJazzhrSubmitButton)(document.body);
    e && e.click()
  }
  filterFormData(e) {
    if (!e || "object" != typeof e) return e;
    let t = {};
    for (let [r, n] of Object.entries(e))
      if ("resumator-questionnaire" !== r) {
        if (Array.isArray(n)) {
          let e = n.filter(e => {
              if (null == e) return !1;
              if ("object" == typeof e) {
                let t = Object.values(e).some(e => "object" == typeof e && null !== e ?
                  null !== e.value && void 0 !== e.value && "" !== e.value : null != e &&
                  "" !== e);
                return t
              }
              return !0
            }),
            t = e.length / n.length;
          if (t < .2) continue
        }
        t[r] = n
      } return t
  }
  constructor(...e) {
    super(...e), this.answerPairSnapshotRules = [], this.answerPairAutofillSnapshot = null
  }
}

