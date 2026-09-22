/**
 * Parcel module id: HYvSE
 * Resolved path: src/contents/sites/comeet.js
 * Dependencies:
 *   ./operations -> 8Dbst  =>  src/contents/sites/comeet/operations.js
 *   ./phone-country-code -> eJDVS  =>  src/contents/sites/comeet/phone-country-code.js
 *   ./rules -> 9qxec  =>  src/contents/sites/comeet/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   lodash-es -> p4RBe  =>  lodash-es.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/autofill-answer-pair-tracking -> aCElZ  =>  src/contents/sites/autofill-answer-pair-tracking.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~enums -> drZvv  =>  src/enums.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Comeet", () => b);
var o = e("~contents/sites/base-filler"),
  i = e("~contents/sites/autofill-answer-pair-tracking"),
  a = e("~core/enums"),
  l = e("~contents/methods/observer"),
  s = e("~contents/methods/dom"),
  u = e("~enums"),
  c = e("./operations"),
  d = e("./phone-country-code"),
  f = e("./rules"),
  p = e("~store/url"),
  m = e("~contents/methods/track"),
  h = e("~utils/string"),
  g = e("lodash-es");
class b extends o.BaseFiller {
  sendCompleteMessageToParent() {
    try {
      let e = this.progressTracker?.fieldStatus;
      window.top?.postMessage(h.cleanObject({
        type: a.MESSAGE_EVENTS.autoFillResultFromIframe,
        data: {
          missingFields: e?.missingFields ?? [],
          filledFields: e?.filledFields ?? [],
          fieldRequiredStatus: (e?.fieldRequiredStatus ?? []).map(e => g.pick(e, ["label",
            "required"
          ]))
        }
      }), {
        targetOrigin: "*"
      })
    } catch (e) {
      console.warn("[Comeet] sendCompleteMessageToParent failed", e)
    }
  }
  getFieldHandlers() {
    return {
      [a.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (!r) return;
        let n = (0, d.getComeetPhoneCountryCodeForRule)(this.answer, e);
        return (0, c.fillInputTextField)(e.$input, String(r ?? ""), n, e.label)
      },
      [a.FIELD_TYPE.SELECT]: (e, t) => "Phone Country Code" === e.label ? (0, c
        .fillPhoneCountryCode)(e.$input, String(t?.[0] ?? "")) : (0, c.fillSelectField)(e, t),
      [a.FIELD_TYPE.CHECKBOX]: (e, t) => (0, c.fillCheckboxField)(e, t),
      [a.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, c.fillRadioGroupFiled)(e, t)
    }
  }
  async extractFormRules() {
    let e = await (0, f.extractRules)();
    return e
  }
  getSiteName() {
    return "comeet"
  }
  async getAutofillSnapshot(e) {
    return await (0, f.getFormSnapshot)(document)
  }
  async getSubmitSnapshot() {
    return await (0, f.getFormSnapshot)(document)
  }
  submitApplication() {
    document.querySelector('button.applyButton[ng-click="apply()"]')
  }
  async doFillForm(e = !1) {
    if (!(0, f.isRunningInComeetIframe)()) return await new Promise(e => {
      let t = 1e4,
        r = Date.now(),
        n = () => {
          window.removeEventListener("message", i), clearTimeout(l)
        },
        o = t => {
          n(), e(t ?? this.progressTracker?.generateFinalProgress?.() ?? {
            fieldRequiredStatus: [],
            filledFields: [],
            missingFields: []
          })
        },
        i = e => {
          if (e?.data?.type === a.MESSAGE_EVENTS.autoFillResultFromIframe) {
            o(e.data.data);
            return
          }
          if (e?.data?.type === a.MESSAGE_EVENTS.autoFillCompleteFromIframe) {
            o();
            return
          }
        };
      window.addEventListener("message", i);
      let l = window.setTimeout(() => {
        console.warn("[Comeet] parent fillForm wait timeout", {
          waitedMs: Date.now() - r
        }), o()
      }, t)
    });
    if (this.isFillingForm) return await this.finalizeFillForm();
    this.isFillingForm = !0, window.top?.postMessage(h.cleanObject({
      type: a.MESSAGE_EVENTS.agentStartFillingFields
    }), {
      targetOrigin: "*"
    });
    try {
      await this.initializeFillForm();
      let t = await this.extractFormRules();
      this.progressTracker.setFieldsRequiredStatus(t), await this.handleResumeUpload();
      let r = await this.fetchFormAnswers(t, e);
      if ("string" == typeof r) return this.isFillingForm = !1, this
        .sendCompleteMessageToParent(), r;
      return await this.fillRegularFields(t), await this.executeSiteSpecificSteps(t), await this
        .finalizeFillForm()
    } catch (e) {
      throw this.isFillingForm = !1, this.sendCompleteMessageToParent(), e
    }
  }
  async handleResumeUpload() {
    this.disableUploadResume ? (await (0, c.removeResume)(), this.progressTracker
      .updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, c.removeResume)(), await (0, c.uploadResume)(this.resumeInfo, this
        .progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress)
    }), await this.taskQueue.run()
  }
  async runPreFillForm() {
    this.taskQueue.add(c.preFillForm), await this.taskQueue.run()
  }
  async checkCoverLetter() {
    if (!(0, f.isRunningInComeetIframe)()) {
      let e = await (0, l.waitForCondition)(() => {
        let e = document.querySelector("#applyFormWrapper"),
          t = e?.querySelector('iframe[title="Job Application form"]');
        return !!e && !!t
      }, {
        timeout: 1e4,
        interval: 100,
        observeTarget: document.body
      });
      if (!e) {
        (0, s.postCoverLetterStatus)("");
        return
      }
      let t = document.querySelector('#applyFormWrapper iframe[title="Job Application form"]');
      if (!t?.contentWindow) {
        (0, s.postCoverLetterStatus)("");
        return
      }
      await new Promise(e => {
        let r = !1,
          n = () => {
            r = !0, window.removeEventListener("message", l), t.removeEventListener("load",
              c), clearInterval(d), clearTimeout(f)
          },
          o = (t = !1) => {
            r || (n(), t && (0, s.postCoverLetterStatus)(""), e())
          },
          i = () => {
            t.contentWindow?.postMessage({
              type: u.IFRAME_EVENTS.CHECK_IFRAME_COVER_LETTER,
              data: {
                timestamp: Date.now()
              },
              url: t.src
            }, "*")
          },
          l = e => {
            e.source === t.contentWindow && e.data?.type === a.MESSAGE_EVENTS
              .agentCheckCoverLetter && o()
          },
          c = () => {
            i()
          };
        window.addEventListener("message", l), t.addEventListener("load", c), i();
        let d = window.setInterval(() => {
            i()
          }, 400),
          f = window.setTimeout(() => {
            o(!0)
          }, 8e3)
      });
      return
    }(0, c.checkCoverLetter)()
  }
  async executeSiteSpecificSteps(e) {
    let t = (0, c.getComeetCoverLetterRequiredField)();
    if (t) {
      this.progressTracker.updateFieldRequiredStatus(t);
      let e = !0 === t.required;
      this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName ? this.taskQueue.add(
        async () => {
          let t = await (0, c.uploadCoverLetter)({
              coverLetterId: this.coverLetter.coverLetterId,
              coverLetterName: this.coverLetter.coverLetterName,
              markdown: this.coverLetter?.markdown,
              useLegacyDownload: this.coverLetter?.useLegacyDownload
            }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker
            .updateFilledProgress);
          !t && e && this.progressTracker.updateMissedProgress("Cover Letter")
        }) : e && this.progressTracker.updateMissedProgress("Cover Letter")
    }
    this.taskQueue.queue.length > 0 && await this.taskQueue.run(), this
      .comeetSubmitTrackingAbortController?.abort(), this.comeetSubmitTrackingAbortController =
      new AbortController;
    let r = document.querySelector('button.applyButton[ng-click="apply()"]');
    if (!r) return;
    let n = await this.getAutofillSnapshot(e),
      o = this.getAdditionalAutofillSnapshotData?.(e) || {};
    r.addEventListener("click", async () => {
      let e = await this.getSubmitSnapshot(),
        t = this.getAdditionalSubmitSnapshotData?.() || {},
        r = (0, i.buildFalconAutofillAnswerPairData)(this.answer);
      (0, i.sendAutofillAnswerPairEvent)({
        formUrl: (0, p.useUrlStore).getState().currentTabUrl,
        autofillSnapshot: n,
        submitSnapshot: e,
        additionalAutofillData: o,
        additionalSubmitData: t,
        ...r ? {
          extraData: {
            falcon: r
          }
        } : {},
        source: "comeet"
      })
    }, {
      signal: this.comeetSubmitTrackingAbortController.signal
    })
  }
  getAdditionalAutofillSnapshotData(e) {
    let t = (0, f.getEduAndEmploymentSnapshot)();
    return t || {}
  }
  getAdditionalSubmitSnapshotData() {
    let e = (0, f.getEduAndEmploymentSnapshot)();
    return e || {}
  }
  async finalizeFillForm() {
    try {
      let e = (0, c.sanitizeElementIds)();
      try {
        (0, m.postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace), this
          .sendCompleteMessageToParent();
        let e = this.progressTracker.generateFinalProgress();
        return this.isFillingForm = !1, e
      } finally {
        (0, c.restoreElementIds)(e)
      }
    } catch (e) {
      throw this.isFillingForm = !1, e
    }
  }
  constructor(...e) {
    super(...e), this.isFillingForm = !1, this.comeetSubmitTrackingAbortController = null
  }
}

