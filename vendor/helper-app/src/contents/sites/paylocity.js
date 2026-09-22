/**
 * Parcel module id: 4Wyl0
 * Resolved path: src/contents/sites/paylocity.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/rules -> 3cWKC  =>  src/contents/methods/rules.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/shared/filler -> 2aGsX  =>  src/contents/shared/filler.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~contents/sites/paylocity/answer -> eiV7s  =>  src/contents/sites/paylocity/answer.js
 *   ~contents/sites/paylocity/operations -> bmU1E  =>  src/contents/sites/paylocity/operations.js
 *   ~contents/sites/paylocity/rules -> 5BvUQ  =>  src/contents/sites/paylocity/rules.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Paylocity", () => x);
var o = e("~contents/shared/filler"),
  i = e("~contents/methods/cancellation"),
  a = e("~contents/sites/base-filler"),
  l = e("~contents/methods/answer"),
  s = e("~contents/methods/dom"),
  u = e("~contents/methods/rules"),
  c = e("~contents/methods/track"),
  d = e("~contents/sites/paylocity/answer"),
  f = e("~contents/sites/paylocity/operations"),
  p = e("~contents/sites/paylocity/rules"),
  m = e("~core/enums"),
  h = e("~core/dom"),
  g = e("~store/autofillInfo"),
  b = e("~utils/delay");
let y = e => (0, l.removeSpecialCharacters)(e).toLowerCase().trim(),
  v = (e, t) => {
    let r = y(e),
      n = Object.keys(t || {}).filter(e => e && void 0 !== t[e] && null !== t[e]).map(e => ({
        key: e,
        normalizedKey: y(e)
      })).filter(({
        normalizedKey: e
      }) => e),
      o = n.find(({
        normalizedKey: e
      }) => e === r || r.includes(e) || e.includes(r));
    if (o) return t[o.key];
    if (/degreeobtained/i.test(r)) {
      let e = n.find(({
        normalizedKey: e
      }) => e.includes("degree"));
      if (e) return t[e.key]
    }
  },
  w = e => {
    try {
      let t;
      let r = ["Did you graduate?", "Did you Graduate?", "didGraduate", "Did You Graduate?",
          "graduated", "Graduated", "Did you graduate", "didYouGraduate"
        ],
        n = "";
      for (let o of r) try {
        if (null != (t = (0, l.findValueInRecord)(o, e)) && "" !== t) {
          n = o;
          break
        }
      } catch {
        continue
      }
      if (null == t || "" === t) {
        for (let [r, o] of Object.entries(e))
          if (/did.*graduate/i.test(r) || /graduate/i.test(r)) {
            t = o, n = r;
            break
          }
      }
      let o = Array.isArray(t) ? t[0] : t,
        i = String(o).trim().toLowerCase(),
        a = "yes" === i || "y" === i || "true" === i || "1" === i;
      return a
    } catch (e) {
      return !0
    }
  };

function S(e) {
  let t = e?.$container ?? e?.$input;
  return t instanceof HTMLElement ? t : null
}

function E(e, t) {
  return t ? (0, l.ensureArray)(e) : Array.isArray(e) ? e[0] : e
}
class x extends a.BaseFiller {
  doFillForm(e = !1) {
    return this.runDoFillFormSingleFlight(e)
  }
  getSiteName() {
    return "paylocity"
  }
  async runPreFillForm() {
    this.currentRunCountryFilled = !1, this.taskQueue.add(f.waitPageClean), await this.taskQueue
      .run();
    let e = await (0, g.useAutofillInfoStore).getState().fetchAutofillInfo();
    this.taskQueue.add(async () => {
      this.currentRunCountryFilled = await (0, f.fillCountry)(e?.location?.country)
    }), await this.taskQueue.run(), this.taskQueue.add(async () => {
      await (0, f.preclickAddButtons)()
    }), await this.taskQueue.run(), this.taskQueue.add(async () => {
      await (0, f.expandFormFromProfile)({
        expandEmployment: !1
      })
    }), await this.taskQueue.run()
  }
  async extractFormRules() {
    let e = await (0, p.getRules)();
    return this.taskQueue.add(f.blurPage), await this.taskQueue.run(), e
  }
  formatAnswer(e) {
    return (0, d.formatAnswer)(e)
  }
  async checkCoverLetter() {
    (0, s.postCoverLetterStatus)(await (0, f.getPaylocityCoverLetterStatus)())
  }
  async fetchFormAnswers(e, t) {
    try {
      this.token || (this.token = await (0, l.getSiteToken)()), this.timeTrace
        .requestStartTime = Date.now();
      let r = (0, u.filterRulesByLabel)(e, ["Security Code", "Country", "Country / Territory",
          "United States of America", "Date", "Employee ID (if applicable)",
          "What is your desired start date?", "What is your date of availability?"
        ]),
        n = this.captureFalconResponseRun(),
        o = await (0, l.getElementRules)(r, this.getSiteName(), this.token, t, this.resumeInfo
          .id, this.resumeInfo.tailorId);
      this.recordFalconResponse(o, n), this.answer = this.formatAnswer(o), this.timeTrace
        .fillStartTime = Date.now()
    } catch (e) {
      if (e instanceof l.HTTPError || e instanceof l.ResumeMissingCodeError) return (0, c
        .sendHttpStatusMessage)(e.message), e.message;
      console.error("Unknown error occurred:", e)
    }(0, i.checkpoint)()
  }
  getFieldHandlers() {
    return {
      [m.FIELD_TYPE.NUMBER]: {
        handler: (e, t) => (console.info("[Paylocity][SalaryRange] filling field", {
          id: e.$input?.id,
          label: e.label,
          hasValue: null != t && "" !== t
        }), (0, s.fillInputTextField)(e.$input, t)),
        options: {
          expectArray: !1
        }
      },
      [m.FIELD_TYPE.CHECKBOX]: (e, t) => (0, s.fillCheckBoxesField)(e, t),
      [m.FIELD_TYPE.MULTI_SELECT]: (e, t) => (0, f.fillSearchBoxInputField)(e.$input, t),
      [m.FIELD_TYPE.SEARCH]: (e, t) => (0, f.fillSearchBoxInputField)(e.$input, t),
      [m.FIELD_TYPE.LISTBOX]: (e, t) => (0, f.fillListboxButtonField)(e.$input, t)
    }
  }
  buildOperationConfig() {
    let e = super.buildOperationConfig(),
      t = this.createOperationHandler(async (e, t) => (0, f.isPaylocityPersonalAddressInput)(e
        .$input) ? await (0, f.fillPaylocityPersonalAddressField)(e.$input, String(t)) : (
        await (0, s.fillInputTextField)(e.$input, t), await (0, b.delay)(f
          .PAYLOCITY_PERSONAL_ADDRESS_SETTLE_DELAY_MS), !0), {
        expectArray: !0
      }),
      r = this.createOperationHandler((e, t) => (0, f.fillListboxSelectButtonField)(e.$input,
        t), {
          expectArray: !0
        });
    return e[m.FIELD_TYPE.TEXT] = async (e, r, n = !0) => {
      if (/^Graduation Date$/i.test(e.label)) {
        if (!w(r)) return;
        let t = S(e);
        await this.runCustomHandler(e, r, async e => {
          if (!t) return !1;
          let r = await (0, f.fillPaylocityEducationGraduationDate)(t, String(e));
          return r
        }, {
          expectArray: !1
        }, n);
        return
      }
      await t(e, r, n)
    }, e[m.FIELD_TYPE.SELECT] = async (e, t, n = !0) => {
      if (/^Degree Obtained$/i.test(e.label)) {
        if (!w(t)) return;
        let r = S(e);
        await this.runCustomHandler(e, t, async e => {
          if (!r) return !1;
          let t = await (0, f.fillPaylocityEducationDegreeObtained)(r, e);
          return t
        }, {
          expectArray: !0
        }, n);
        return
      }
      await r(e, t, n)
    }, e[m.FIELD_TYPE.DATE] = async (e, t, r = !0) => {
      if (/^Available to Start$/i.test(e.label)) {
        await this.runCustomHandler(e, t, async t => {
          let r = e.$input;
          return !!r && (await (0, f.fillAvailableToStartField)(r, String(t)), !0)
        }, {
          expectArray: !1
        }, r);
        return
      }
      let n = this.createOperationHandler((e, t) => (0, f.fillPaylocityDateField)(e
        .$input, t));
      await n(e, t, r)
    }, e
  }
  async runCustomHandler(e, t, r, n = {}, i = !0) {
    try {
      let a;
      try {
        a = (0, l.findValueInRecord)(e.label, t)
      } catch (r) {
        if (r instanceof o.ValueError && /^Degree Obtained$/i.test(e.label)) {
          let n = v(e.label, t);
          if (void 0 === n) throw r;
          a = n
        } else throw r
      }
      let s = E(a, n.expectArray),
        u = await r(s);
      if (!1 === u) throw new o.ValueError(`No target found for label: ${e.label}`);
      i && this.progressTracker.updateFilledProgress(e.label)
    } catch (t) {
      o.ValueError, i && this.progressTracker.updateMissedProgress(e.label)
    }
  }
  async fillRegularFields(e) {
    let t = e.filter(e => "skills" !== y(e.label)),
      r = (0, f.orderPaylocityPersonalAddressRules)(t.filter(f.isPaylocityPersonalAddressRule)),
      n = t.filter(e => !(0, f.isPaylocityPersonalAddressRule)(e));
    for (let e of (await super.fillRegularFields(n), r)) {
      await super.fillRegularFields([e]);
      let t = e.$input,
        r = t?.id || t?.querySelector("input")?.id;
      if ("public-site-address-address-1" === r) {
        let e = document.querySelector('[data-automation-id="public-site-address"]');
        if (e) {
          let t = await (0, f.waitForPaylocityPersonalAddressQuiet)(e);
          console.info("[Paylocity][PersonalAddress] native update settled", {
            quiet: t
          })
        }
      }
    }
  }
  async fillEducationAndEmployment(e) {
    await (0, f.expandForm)(this.answer);
    let t = await (0, p.getEduRules)(),
      r = await (0, p.getExpRules)(),
      n = t.length > 0 ? t : e.filter(e => e.type === m.FIELD_TYPE.EDUCATION),
      o = r.length > 0 ? r : e.filter(e => e.type === m.FIELD_TYPE.EMPLOYMENT);
    (0, h.setSectionResultFocusRules)("employment", o);
    let i = (0, l.getEmploymentOperations)(o, this.answer.workExperience, this.operationConfig,
      void 0, {
        onSectionResultChanged: this.progressTracker.updateSectionResult,
        onCompleted: () => {
          o.length > 0 && this.progressTracker.updateFilledProgress("Employment")
        },
        onSkipped: () => this.progressTracker.updateMissedProgress("Employment")
      });
    (0, h.setSectionResultFocusRules)("education", n);
    let a = (0, l.getEducationOperations)(n, this.answer.education, this.operationConfig,
        void 0, {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
          onCompleted: () => {
            n.length > 0 && this.progressTracker.updateFilledProgress("Education")
          },
          onSkipped: () => this.progressTracker.updateMissedProgress("Education")
        }),
      s = [...i, ...a];
    for (let e of s) this.taskQueue.add(e);
    await this.taskQueue.run()
  }
  async handleResumeUpload() {
    let e = document.querySelector("#remove-resume");
    e ? this.progressTracker.updateFilledProgress("Resume/CV") : this.disableUploadResume ? this
      .progressTracker.updateMissedProgress("Resume/CV") : this.taskQueue.add(async () => {
        let e = document.querySelector("#useAttachedResumeToFillOutApplication"),
          t = e?.hasAttribute("checked") || e?.checked;
        t && e.click(), await (0, f.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      }), this.taskQueue.add(async () => {
        let e = await (0, f.fillSkills)(this.answer.skills);
        e ? this.progressTracker.updateFilledProgress("Skills") : this.progressTracker
          .updateMissedProgress("Skills")
      })
  }
  async executeSiteSpecificSteps(e) {
    let t = await (0, f.reconcilePaylocityPersonalAddress)({
      rules: e,
      record: this.answer.regular,
      fillRule: async (e, t) => {
        let r = e.$input;
        if (!r) return !1;
        let n = r.id || r.querySelector("input")?.id || "";
        return (0, f.isPaylocityPersonalStateControlId)(n) ? await (0, f
          .fillPaylocityPersonalStateField)(n, (0, l.ensureArray)(t)) : (0, f
          .isPaylocityPersonalAddressInput)(r) ? await (0, f
          .fillPaylocityPersonalAddressField)(r, String(t ?? "")) : await (0, f
          .fillListboxSelectButtonField)(r, (0, l.ensureArray)(t))
      },
      waitForQuiet: async () => {
        let e = document.querySelector('[data-automation-id="public-site-address"]');
        return !!e && await (0, f.waitForPaylocityPersonalAddressQuiet)(e)
      }
    });
    for (let r of e.filter(f.isPaylocityPersonalAddressRule)) {
      let e = r.$input,
        n = e?.id || e?.querySelector("input")?.id;
      n && t.filledControlIds.includes(n) ? this.progressTracker.updateFilledProgress(r.label) :
        n && t.missingControlIds.includes(n) && this.progressTracker.updateMissedProgress(r
          .label)
    }
    console.info("[Paylocity][PersonalAddress] final validation", {
        attemptedControlIds: t.attemptedControlIds,
        filledControlIds: t.filledControlIds,
        missingControlIds: t.missingControlIds
      }), this.currentRunCountryFilled && this.progressTracker.updateFilledProgress("Country"),
      (0, f.hasPaylocityCoverLetterSlot)() && (this.progressTracker.updateFieldRequiredStatus({
          label: "Cover Letter",
          required: !0
        }), this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName ? this
        .taskQueue.add(async () => {
          let e = await (0, f.uploadCoverLetter)({
              coverLetterId: this.coverLetter.coverLetterId,
              coverLetterName: this.coverLetter.coverLetterName,
              markdown: this.coverLetter.markdown,
              useLegacyDownload: this.coverLetter.useLegacyDownload
            }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker
            .updateFilledProgress);
          e || this.progressTracker.updateMissedProgress("Cover Letter")
        }) : (0, f.hasUploadedPaylocityCoverLetter)() ? this.progressTracker
        .updateFilledProgress("Cover Letter") : this.progressTracker.updateMissedProgress(
          "Cover Letter")), this.taskQueue.add(async () => {
        await (0, f.blurPage)()
      }), await this.taskQueue.run();
    let r = (0, p.getSubmitButtonText)();
    (0, c.bindSubmitButton)(r, this.progressTracker.fieldStatus, this.timeTrace);
    let n = document.querySelector(
      'button[data-automation-id="pageFooterNextButton"], button[data-automation-id="bottom-navigation-next-button"], button#btn-submit[data-automation-id="btnNext"]'
      );
    if (n && "Submit" !== n.innerText) {
      this.continueButtonHandler && n.removeEventListener("click", this.continueButtonHandler);
      let t = await this.getAutofillSnapshot(e);
      this.continueButtonHandler = (0, f.submitHandler).bind(null, t, e, this.answer), n
        .addEventListener("click", this.continueButtonHandler)
    }
  }
  async getAutofillSnapshot(e) {
    return (0, p.getFormSnapshot)(e)
  }
  async getSubmitSnapshot() {
    return (0, p.getFormSnapshot)()
  }
  submitApplication() {
    let e = (0, p.getFormSnapshot)();
    (0, f.submitHandler)(e, [], this.answer)
  }
  constructor(...e) {
    super(...e), this.continueButtonHandler = null, this.currentRunCountryFilled = !1, this
      .runDoFillFormSingleFlight = (0, f.createPaylocitySingleFlight)((e = !1) => super
        .doFillForm(e))
  }
}

