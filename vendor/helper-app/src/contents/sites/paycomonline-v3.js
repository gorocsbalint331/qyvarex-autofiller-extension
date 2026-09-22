/**
 * Parcel module id: gHOdW
 * Resolved path: src/contents/sites/paycomonline-v3.js
 * Dependencies:
 *   ./answer -> hqlCA  =>  src/contents/sites/paycomonline-v3/answer.js
 *   ./operations -> kmsj6  =>  src/contents/sites/paycomonline-v3/operations.js
 *   ./rules -> i9lUC  =>  src/contents/sites/paycomonline-v3/rules.js
 *   ./start-application-dialog -> dQRRK  =>  src/contents/sites/paycomonline-v3/start-application-dialog.js
 *   ./submit-outcome -> eFtdg  =>  src/contents/sites/paycomonline-v3/submit-outcome.js
 *   ./submit-tracking -> 8rDpV  =>  src/contents/sites/paycomonline-v3/submit-tracking.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/rules -> 3cWKC  =>  src/contents/methods/rules.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/starRating -> imWVP  =>  src/utils/starRating.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "PaycomOnline", () => E);
var o = e("~contents/methods/answer"),
  i = e("~contents/methods/dom"),
  a = e("~contents/methods/rules"),
  l = e("~contents/methods/track"),
  s = e("~contents/sites/base-filler"),
  u = e("~core/dom"),
  c = e("~core/enums"),
  d = e("~core/xpath"),
  f = e("~store/autofillInfo"),
  p = e("~store/url"),
  m = e("~utils/starRating"),
  h = e("./answer"),
  g = e("./operations"),
  b = e("./rules"),
  y = e("./start-application-dialog"),
  v = e("./submit-outcome"),
  w = e("./submit-tracking");
let S = "paycomonline";
class E extends s.BaseFiller {
  getFieldHandlers() {
    return {
      [c.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, g.fillInputTextField)(e.$input, t),
        options: {
          expectArray: !1
        }
      },
      [c.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, g.fillCheckBoxesField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [c.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, g.fillPaycomSelect)(e, t),
        options: {
          expectArray: !1
        }
      },
      [c.FIELD_TYPE.DATE]: {
        handler: (e, t) => (0, g.fillPaycomDateGroup)(e, t),
        options: {
          expectArray: !1
        }
      },
      [c.FIELD_TYPE.LISTBOX]: {
        handler: (e, t) => (0, g.isPaycomPhoneCountryCodeButton)(e.$input) ? (0, g
          .fillPaycomPhoneCountryCode)(e, t, this.answer?.country) : (0, g.fillPaycomListbox)(
          e, t),
        options: {
          expectArray: !1
        }
      },
      [c.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, g.fillPaycomRadioGroup)(e, t),
        options: {
          expectArray: !1
        }
      }
    }
  }
  getSiteName() {
    return S
  }
  async extractFormRules() {
    return await (0, b.getRules)()
  }
  formatAnswer(e) {
    return (0, h.normalizePaycomAnswer)(e)
  }
  getSubmitButtonSelector() {
    return ".//button[contains(., 'Submit Application') or contains(., 'Sign and Submit') or contains(., 'Submit') or contains(., 'Next')]"
  }
  async getAutofillSnapshot(e) {
    return await (0, b.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return await (0, b.getFormSnapshot)()
  }
  submitApplication() {
    let e = (0, d.getFirstOrderedNodeSafe)(this.getSubmitButtonSelector());
    e?.click()
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = e => (0, i.triggerEvents)(e, ["mousedown", "mouseup", "click"]),
      r = await (0, y.dismissPaycomResumeParserDialog)(document, {
        timeoutMs: 0,
        activateButton: t
      }),
      n = await (0, y.dismissPaycomStartApplicationDialog)(document, {
        activateButton: t
      }),
      o = "closed" === n ? await (0, y.dismissPaycomResumeParserDialog)(document, {
        activateButton: t
      }) : "not-found";
    if ("not-found" !== r && console.info("[Paycom-v3][resume-parser-dialog] prefill result", {
        result: r,
        action: "attach-only"
      }), "not-found" !== n) {
      let e = "closed" === n ? console.info : console.warn;
      e("[Paycom-v3][start-application-dialog] prefill result", {
        result: n,
        action: "apply-manually"
      })
    }
    if ("not-found" !== o) {
      let e = "closed" === o ? console.info : console.warn;
      e("[Paycom-v3][resume-parser-dialog] post-start result", {
        result: o,
        action: "attach-only"
      })
    }
    this.currentRunCountry = "";
    let l = await (0, f.useAutofillInfoStore).getState().fetchAutofillInfo();
    this.currentRunCountry = l?.location?.country ?? "", await (0, g
      .fillPaycomGeographicCountry)(this.currentRunCountry) && await (0, g.waitForDOMStable)();
    let s = await this.extractFormRules();
    this.progressTracker.setFieldsRequiredStatus(s);
    let u = await this.fetchFormAnswers(s, e);
    return "string" == typeof u ? u : (this.taskQueue.add(() => (0, g.expandForm)(this.answer)),
      await this.taskQueue.run(), this.taskQueue.clear(), s = await this.extractFormRules(),
      this.progressTracker.setFieldsRequiredStatus(s), await (0, g
        .fillPaycomGeographicCountry)(this.currentRunCountry) && await (0, g.waitForDOMStable)
      (), s = await this.extractFormRules(), s = (0, a.filterRulesByLabel)(s, [
        "Referral Source", "Referral Name"
      ]), this.progressTracker.setFieldsRequiredStatus(s), await this.fillRegularFields(s),
      await this.fillEducationAndEmployment(s), this.taskQueue.add(() => (0, g
        .fillAgreementCheckbox)()), await this.handleResumeUpload(), await this.taskQueue
      .run(), await this.handleCoverLetterUpload(), await this.taskQueue.run(), await this
      .executeSiteSpecificSteps(s), await this.finalizeFillForm())
  }
  async fillEducationAndEmployment(e) {
    this.taskQueue.add(async () => {
      await (0, g.fillEducation)(this.answer, {
        onSectionResultChanged: this.progressTracker.updateSectionResult
      }), this.progressTracker.updateFilledProgress("Education")
    });
    let t = [],
      r = e.find(e => e.type === c.FIELD_TYPE.EMPLOYMENT);
    t = r && r.children ? r.children : e.filter(e => e.type === c.FIELD_TYPE.EMPLOYMENT), (0, u
      .setSectionResultFocusRules)("employment", t);
    let n = (0, o.getEmploymentOperations)(t, this.answer.workExperience, this.operationConfig,
      void 0, {
        onSectionResultChanged: this.progressTracker.updateSectionResult,
        onCompleted: () => this.progressTracker.updateFilledProgress("Employment"),
        onSkipped: () => this.progressTracker.updateMissedProgress("Employment")
      });
    for (let e of n) this.taskQueue.add(e);
    await this.taskQueue.run(), console.info(
      "[Paycom-v3] Education/Employment progress callbacks finished", {
        educationEntryCount: this.answer.education?.length ?? 0,
        employmentEntryCount: this.answer.workExperience?.length ?? 0,
        filledSectionLabels: this.progressTracker.fieldStatus.filledFields?.filter(e =>
          "Education" === e || "Employment" === e)
      })
  }
  async handleResumeUpload() {
    this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this
      .taskQueue.add(() => (0, g.uploadResume)(this.resumeInfo, this.progressTracker
        .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress))
  }
  async checkCoverLetter() {
    (0, i.postCoverLetterStatus)((0, g.getPaycomCoverLetterStatus)())
  }
  async handleCoverLetterUpload() {
    let e = (0, g.getPaycomCoverLetterStatus)();
    e && this.progressTracker.updateFieldRequiredStatus({
      label: "Cover Letter",
      required: !1
    });
    let t = this.coverLetter;
    e && t?.coverLetterId && t.coverLetterName && this.taskQueue.add(async () => {
      await (0, g.uploadCoverLetter)({
          coverLetterId: t.coverLetterId,
          coverLetterName: t.coverLetterName,
          markdown: t.markdown,
          useLegacyDownload: t.useLegacyDownload
        }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress)
    })
  }
  async executeSiteSpecificSteps(e) {
    await this.bindSubmitButtonTracking(e);
    let t = document.querySelector('button[type="submit"]') || Array.from(document
      .querySelectorAll("button")).find(e => e.textContent?.toLowerCase().includes("submit"));
    t && (0, l.bindSubmitButton)(t.textContent || "Submit", this.progressTracker.fieldStatus,
      this.timeTrace)
  }
  async bindSubmitButtonTracking(e) {
    let t = this.getSubmitButtonSelector();
    if (!t) return;
    let r = (0, d.getFirstOrderedNodeSafe)(t);
    r || console.warn(
      "[Paycom-v3] \u7ed1\u5b9a\u65f6\u672a\u627e\u5230 Submit \u6309\u94ae\uff1b\u4ecd\u4f1a\u542f\u7528\u4e8b\u4ef6\u59d4\u6258\u7b49\u5f85\u540e\u7eed\u6e32\u67d3\u3002",
      t);
    let n = await this.getAutofillSnapshot(e),
      o = this.getAdditionalAutofillSnapshotData?.(e) || {};
    this.submitDelegationAbortController?.abort(), this.submitDelegationAbortController =
      new AbortController;
    let i = this.submitDelegationAbortController.signal,
      a = null,
      l = async e => {
        let r = e.target;
        if (!r) return;
        let i = (0, d.getFirstOrderedNodeSafe)(t);
        if (!i || i !== r && !i.contains(r)) return;
        let l = (0, v.capturePaycomSubmitBaseline)();
        try {
          a?.abort(), a = new AbortController;
          let e = a.signal,
            r = await this.getSubmitSnapshot(),
            s = this.getAdditionalSubmitSnapshotData?.() || {},
            u = (0, w.buildPaycomSubmitExtraTrackingData)(this.answer, this
              .getAutofillAnswerPairExtraTrackingData?.() || {});
          (0, w.sendPaycomAutofillAnswerPairOnAttempt)({
            formUrl: (0, p.useUrlStore).getState().currentTabUrl,
            autofillSnapshot: n,
            submitSnapshot: r,
            additionalAutofillData: o,
            additionalSubmitData: s,
            extraData: u,
            source: this.getSiteName()
          }), await (0, v.waitForPaycomSubmitOutcome)(l, i, e, {
            findSubmitButton: () => (0, d.getFirstOrderedNodeSafe)(t)
          }), (0, m.handleSubmitStarRating)(this.getSiteName(), n, r, this.progressTracker
            .fieldStatus, this.getSubmitSuccessSelectors(), e)
        } catch (e) {
          console.error("[Paycom-v3] Submit \u8ddf\u8e2a\u5f02\u5e38:", e)
        }
      };
    document.addEventListener("click", l, {
      capture: !0,
      signal: i
    })
  }
  constructor(...e) {
    super(...e), this.currentRunCountry = "", this.submitDelegationAbortController = null
  }
}

