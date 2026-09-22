/**
 * Parcel module id: eGEF6
 * Resolved path: contents/sites/adobe.js (oracle restore)
 * Dependencies:
 *   ./answer -> dudnu  =>  src/contents/sites/adobe/answer.js
 *   ./operations -> 1f2zg  =>  src/contents/sites/adobe/operations.js
 *   ./rules -> lWgAg  =>  src/contents/sites/adobe/rules.js
 *   ./style -> 5dRDr  =>  src/contents/sites/adobe/style.js
 *   ./tracking-snapshot -> iU3s5  =>  tracking-snapshot.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  _tilde_contents/methods/cancellation.js
 *   ~contents/methods/rules -> 3cWKC  =>  _tilde_contents/methods/rules.js
 *   ~contents/methods/track -> h479b  =>  _tilde_contents/methods/track.js
 *   ~contents/shared/filler -> 2aGsX  =>  _tilde_contents/shared/filler.js
 *   ~contents/sites/falcon-response-accumulator -> 9lWmK  =>  _tilde_contents/sites/falcon-response-accumulator.js
 *   ~core/dom -> hLMJX  =>  _tilde_core/dom.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/utils -> aTDh5  =>  _tilde_core/utils.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~utils/delay -> am614  =>  _tilde_utils/delay.js
 *   ~utils/string -> ijEFi  =>  _tilde_utils/string.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Adobe", () => E);
var o = e("@plasmohq/messaging"),
  i = e("~contents/shared/filler"),
  a = e("~contents/methods/cancellation"),
  l = e("~contents/methods/answer"),
  s = e("~contents/methods/rules"),
  u = e("~contents/methods/track"),
  c = e("~core/dom"),
  d = e("~core/enums"),
  f = e("~core/utils"),
  p = e("~core/xpath"),
  m = e("~utils/delay"),
  h = e("~utils/string"),
  g = e("~contents/sites/falcon-response-accumulator"),
  b = e("./answer"),
  y = e("./operations"),
  v = e("./rules"),
  w = e("./style"),
  S = e("./tracking-snapshot");
class E {
  constructor() {
    this.timeTrace = {
        rulesParseStartTime: 0,
        requestStartTime: 0,
        fillStartTime: 0
      }, this.lastAutofillTrackingBaseline = {
        formSnapshot: {},
        additionalFormSnapshotData: {}
      }, this.submitSnapshotAbortController = null, this.falconResponseAccumulator = new g
      .FalconResponseAccumulator, (0, w.injectAdobeApplyPageLayoutFix)(), this.progressTracker =
      new i.ProgressTracker, this.taskQueue = new i.TaskQueue, this.fillCancel = (0, a
        .createCancellation)(() => this.taskQueue.clear(), this.progressTracker.setCurrentField),
      this.cancel = this.fillCancel.cancel, this.skip = this.fillCancel.skip, this
      .createOperationHandler = (0, l.createOperationHandlerFactory)(this.progressTracker
        .updateFilledProgress, this.progressTracker.updateMissedProgress), this
      .operationConfig = {
        [d.FIELD_TYPE.TEXT]: this.createOperationHandler((e, t) => (0, y.fillInputTextField)(e
          .$input, t)),
        [d.FIELD_TYPE.DATE]: this.createOperationHandler((e, t) => (0, y.fillDateField)(e.$input,
          t)),
        [d.FIELD_TYPE.SELECT]: this.createOperationHandler((e, t) => (0, y.fillSelectField)(e,
        t), {
          expectArray: !0
        }),
        [d.FIELD_TYPE.CHECKBOX]: this.createOperationHandler((e, t) => (0, y.fillCheckboxField)(e,
          t), {
          expectArray: !0
        }),
        [d.FIELD_TYPE.RADIOGROUP]: this.createOperationHandler((e, t) => (0, y
          .fillRadioGroupField)(e, t), {
          expectArray: !0
        })
      }
  }
  async fillForm(e = !1) {
    return this.fillCancel.wrap(() => this.doFillForm(e))
  }
  async doFillForm(e) {
    this.resetFalconResponseAccumulator(), this.timeTrace.rulesParseStartTime = Date.now(), this
      .progressTracker.clear(), this.taskQueue.clear();
    let t = (0, v.extractRules)();
    this.progressTracker.setFieldsRequiredStatus(t);
    try {
      if (!this.token) {
        let e = (0, f.removeEndStrings)(window.location.href);
        try {
          let t = new URL(e);
          t.hostname.includes("adobe.com") && (t.searchParams.delete("stepname"), t.searchParams
            .delete("step"), e = t.toString())
        } catch (e) {
          console.error("Error parsing URL:", e)
        }
        this.token = await (0, o.sendToBackground)({
          name: "getSiteToken",
          body: {
            url: e
          }
        })
      }
      this.timeTrace.requestStartTime = Date.now();
      let r = this.captureFalconResponseRun(),
        n = await (0, l.getElementRules)((0, s.filterRulesByLabel)(t, ["Country",
          "Country / Territory", "Today\u2019s Date"
        ]), "adobe", this.token, e, this.resumeInfo.id, this.resumeInfo.tailorId);
      this.recordFalconResponse(n, r), this.answer = (0, b.formatAnswer)(n), this.timeTrace
        .fillStartTime = Date.now()
    } catch (e) {
      if (e instanceof l.HTTPError || e instanceof l.ResumeMissingCodeError) return (0, u
        .sendHttpStatusMessage)(e.message), e.message;
      console.error("Unknown error occurred:", e)
    }(0, a.checkpoint)(), this.bindAdobeSnapshotTrackingButtons();
    let r = (0, v.getEduRules)();
    (0, c.setSectionResultFocusRules)("education", r);
    let n = (0, l.getEducationOperations)(r, this.answer.education || [], this.operationConfig,
        void 0, {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
          onCompleted: () => {
            r.length > 0 && this.progressTracker.updateFilledProgress("Education")
          },
          onSkipped: () => this.progressTracker.updateMissedProgress("Education")
        }),
      i = (0, v.getCurrencyPageField)(),
      p = !i || i.includes("My Information"),
      g = t.filter(e => e.type !== d.FIELD_TYPE.EDUCATION && e.type !== d.FIELD_TYPE.EMPLOYMENT),
      w = g;
    if (p) {
      let e = g.filter(e => e.type === d.FIELD_TYPE.RADIOGROUP),
        t = g.filter(e => e.type === d.FIELD_TYPE.SELECT),
        r = g.filter(e => e.type !== d.FIELD_TYPE.RADIOGROUP && e.type !== d.FIELD_TYPE.SELECT);
      w = [...e, ...t, ...r]
    }
    let E = [...(0, l.getRegularOperations)(w, this.answer.regular, this.operationConfig), ...n];
    for (let e = 0; e < E.length; e++) {
      let t = E[e];
      this.taskQueue.add(async () => {
        await t(), e < E.length - 1 && await (0, m.delay)(200 + 200 * Math.random())
      })
    }
    await this.taskQueue.run(), this.progressTracker.updateFilledProgress("Country"), this
      .progressTracker.updateFilledProgress("Country Phone Code"), this.progressTracker
      .updateFilledProgress("Employment"), this.progressTracker.updateFilledProgress(
        "Today\u2019s Date"), await (0, m.delay)(300), this.taskQueue.add(y
      .fillAgreementCheckbox), await this.taskQueue.run(), !this.disableUploadResume && p ? this
      .taskQueue.add(async () => {
        await (0, y.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      }) : this.progressTracker.updateMissedProgress("Resume/CV"), await this.taskQueue.run(),
      await this.scrollToLastFilledSection(w), this.lastAutofillTrackingBaseline = (0, S
        .buildAdobeAutofillTrackingBaseline)(await (0, S.waitForSettledAdobeTrackingSnapshot)(),
        this.getFalconResponseAnswerForTracking());
    let {
      formSnapshot: x,
      additionalFormSnapshotData: C
    } = this.lastAutofillTrackingBaseline;
    (0, u.postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace);
    let A = this.progressTracker.generateFinalProgress();
    return window.top?.postMessage(h.cleanObject({
      type: d.MESSAGE_EVENTS.autoFillResultFromIframe,
      data: h.cleanObject({
        ...A,
        formSnapshot: {
          ...x,
          ...C
        }
      })
    }), {
      targetOrigin: "*"
    }), A
  }
  submitApplication() {
    let e = (0, p.getFirstOrderedNodeSafe)(
      '//button[contains(@type, "submit")] | //button[contains(@class, "submit")]', document
      .body);
    e && e.click()
  }
  cancelAutoFill() {
    this.submitSnapshotAbortController?.abort(), this.submitSnapshotAbortController = null, this
      .taskQueue.clear()
  }
  bindAdobeSnapshotTrackingButtons() {
    this.submitSnapshotAbortController?.abort(), this.submitSnapshotAbortController = (0, S
      .bindAdobeSnapshotTracking)({
      getAnswer: () => this.getFalconResponseAnswerForTracking(),
      getAutofillSnapshot: () => this.lastAutofillTrackingBaseline,
      setAutofillSnapshot: e => {
        this.lastAutofillTrackingBaseline = e
      },
      fieldStatus: this.progressTracker.fieldStatus,
      timeTrace: this.timeTrace
    })
  }
  resetFalconResponseAccumulator() {
    this.falconResponseAccumulator.reset()
  }
  captureFalconResponseRun() {
    return this.falconResponseAccumulator.captureEpoch()
  }
  recordFalconResponse(e, t) {
    this.falconResponseAccumulator.record(e, t)
  }
  getFalconResponseAnswerForTracking() {
    return this.falconResponseAccumulator.current()
  }
  async scrollToLastFilledSection(e) {
    let t = null;
    for (let r = e.length - 1; r >= 0; r--) {
      let n = e[r];
      if (n.$input || n.$label) {
        let e = n.$input;
        if (e) {
          let r = e.value || e.checked;
          if (r) {
            t = n;
            break
          }
        }
        if (n.type === d.FIELD_TYPE.CHECKBOX || n.type === d.FIELD_TYPE.RADIOGROUP) {
          let e = n.$checkboxs || [];
          if (e.some(e => e.checked)) {
            t = n;
            break
          }
        }
      }
    }
    if (t) {
      let e = t.$input || t.$label;
      if (e) {
        let t = e.closest('div.form-group, fieldset, div[class*="field-"]');
        t ? (await (0, m.delay)(200), t.scrollIntoView({
          behavior: "smooth",
          block: "center"
        })) : (await (0, m.delay)(200), e.scrollIntoView({
          behavior: "smooth",
          block: "center"
        }))
      }
    }
  }
}

