/**
 * Parcel module id: 9zFM0
 * Resolved path: src/contents/sites/adp-recruiting.js
 * Dependencies:
 *   ../base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ./answer -> 3LhvH  =>  src/contents/sites/adp-recruiting/answer.js
 *   ./operations -> 1IQSh  =>  src/contents/sites/adp-recruiting/operations.js
 *   ./rules -> jTK8L  =>  src/contents/sites/adp-recruiting/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/section-results -> 6WWsC  =>  src/contents/methods/section-results.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~enums/http -> eJFqj  =>  src/enums/http.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "AdpRecruiting", () => S);
var o = e("~contents/methods/section-results"),
  i = e("~contents/methods/cancellation"),
  a = e("~contents/methods/answer"),
  l = e("~contents/methods/dom"),
  s = e("~contents/methods/track"),
  u = e("~core/enums"),
  c = e("~enums/http"),
  d = e("~store/autofillInfo"),
  f = e("~utils/string"),
  p = e("~utils/delay"),
  m = e("../base-filler"),
  h = e("./answer"),
  g = e("./operations"),
  b = e("./rules");

function y(e) {
  if (!(e instanceof Element)) return !1;
  let t = e.closest("button, input[type='submit'], input[type='button'], [role='button']");
  if (!t) return !1;
  let r = (t.textContent || "").replace(/\s+/g, " ").trim();
  return /submit\s+application/i.test(r) || /^submit\b/i.test(r)
}

function v(e) {
  if (!(e instanceof Element) || y(e)) return null;
  let t = e.closest("div.appGo.center");
  if (t) return t;
  let r = e.closest(`[data-dojo-attach-point="${b.ADP_RECRUITING_PAGER_NEXT_ATTACH}"]`);
  if (r) return r;
  let n = e.closest('[data-dojo-attach-point="thePagerNext"]');
  if (n) return n;
  let o = e;
  for (; o;) {
    let e = o.getAttribute("data-dojo-attach-point") || "";
    if (/pager/i.test(e) && /next/i.test(e)) return o;
    o = o.parentElement
  }
  let i = e.closest(".two.column");
  if (i) {
    let t = i.querySelectorAll("div.appGo.center");
    for (let r = t.length - 1; r >= 0; r--) {
      let n = t[r];
      if (n.contains(e)) return n
    }
  }
  return null
}

function w(e) {
  if ("true" === e.getAttribute("aria-disabled") || e.classList.contains("dijitDisabled")) return !
  0;
  let t = e.parentElement;
  if (t?.classList.contains("dijitDisabled")) return !0;
  let r = window.getComputedStyle(e);
  return "none" === r.display || "hidden" === r.visibility
}
class S extends m.BaseFiller {
  getFieldHandlers() {
    return {
      [u.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, l.fillInputTextField)(e.$input, t),
        options: {
          expectArray: !1
        }
      },
      [u.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, l.fillCheckBoxesField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [u.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, g.fillCustomSelectField)(e?.$input, t, this.currentLocation),
        options: {
          expectArray: !0
        }
      },
      [u.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, g.fillRadioGroupField)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  async extractFormRules() {
    return await (0, b.getRules)()
  }
  getSiteName() {
    return "adp-recruiting"
  }
  formatAnswer(e) {
    return (0, h.formatAnswer)(e)
  }
  async getAutofillSnapshot() {
    return (0, b.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, b.getFormSnapshot)()
  }
  async executeSiteSpecificSteps() {}
  isCountryRule(e) {
    return e.type === u.FIELD_TYPE.SELECT && /^country$/i.test(e.label)
  }
  isStateProvinceRule(e) {
    if (e.type !== u.FIELD_TYPE.SELECT) return !1;
    let t = e.label.replace(/[^a-z]/gi, "").toLowerCase();
    return ["state", "province", "stateprovince", "provincestate", "stateregion",
      "stateterritory", "stateprov", "stateprovinceterritory"
    ].includes(t)
  }
  getRulesWithoutClientLocationRules(e) {
    return e.filter(e => !this.isCountryRule(e) && !this.isStateProvinceRule(e))
  }
  async fillCountryRuleDirectly(e, t) {
    let r = e.find(e => this.isCountryRule(e));
    if (!r) return !1;
    let n = (0, g.normalizeRecruitingCountryValue)(t.country);
    if (!n) return this.progressTracker.updateMissedProgress(r.label), !1;
    let o = await (0, g.fillCustomSelectField)(r.$input, n, t);
    return o ? this.progressTracker.updateFilledProgress(r.label) : this.progressTracker
      .updateMissedProgress(r.label), o
  }
  async fillStateRuleDirectly(e, t) {
    let r = e.find(e => this.isStateProvinceRule(e));
    if (!r) return !1;
    let n = t.state.trim();
    if (!n) return this.progressTracker.updateMissedProgress(r.label), !1;
    let o = await (0, g.fillCustomSelectField)(r.$input, n, t);
    return o ? this.progressTracker.updateFilledProgress(r.label) : this.progressTracker
      .updateMissedProgress(r.label), o
  }
  async uploadResumeOnly() {
    this.progressTracker.setFieldsRequiredStatus([{
      label: "Resume/CV",
      required: !0
    }]);
    let e = null;
    return (this.taskQueue.add(async () => {
      try {
        await (0, g.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      } catch (t) {
        if (t instanceof i.CancelledError) throw t;
        if (this.progressTracker.updateMissedProgress("Resume/CV"), t instanceof a
          .ResumeMissingCodeError || t instanceof Error && t.message === a
          .NO_RESUME_FOUND_ERROR) {
          e = t instanceof a.ResumeMissingCodeError ? t.message : c.CUSTOM_ERROR_CODES
            .RESUME_MISSING_KEY, (0, s.sendHttpStatusMessage)(e);
          return
        }
        console.error("[ADP Recruiting] resume-only upload failed:", t)
      }
    }), await this.taskQueue.run(), e) ? e : ((0, s.postStatus)("filling", this
        .progressTracker.fieldStatus, this.timeTrace), this.progressTracker
      .generateFinalProgress())
  }
  async waitForEnabledAdpRecruitingVsidRaceRule(e) {
    let t = Date.now() + 1500,
      r = 0,
      n = null,
      o = !e;
    for (; Date.now() <= t;) {
      if (r += 1, e && (o = (0, b.isAdpRecruitingVsidRaceRequiredAfterEthnicity)()), !o) {
        await (0, p.delay)(100);
        continue
      }
      let t = await (0, b.getEnabledAdpRecruitingVsidRaceRule)();
      if (t && (n = t, t.options?.length)) return console.info(
        "[ADP Recruiting][VSID Race] live rule ready", {
          attempts: r,
          optionCount: t.options.length
        }), t;
      await (0, p.delay)(100)
    }
    return console.info("[ADP Recruiting][VSID Race] live rule wait ended", {
      attempts: r,
      ethnicityTriggerObserved: o,
      raceControlEnabled: !!n,
      optionCount: n?.options?.length ?? 0
    }), n
  }
  async fillDeferredAdpRecruitingVsidRace(e, t, r) {
    if (!e.length && !t) return;
    console.info("[ADP Recruiting][VSID Race] defer dependent rule", {
      deferredRuleCount: e.length,
      hasVsidRaceDependency: t,
      initialOptionCounts: e.map(e => e.options?.length ?? 0)
    });
    let n = await this.waitForEnabledAdpRecruitingVsidRaceRule(t);
    if (!n) {
      console.info("[ADP Recruiting][VSID Race] not rendered after Ethnicity", {
        deferredRuleCount: e.length
      });
      return
    }
    if (this.progressTracker.updateFieldRequiredStatus(n), !n.options?.length) {
      console.warn("[ADP Recruiting][VSID Race] enabled control has no options", {
        optionCount: 0
      }), this.progressTracker.updateMissedProgress(n.label);
      return
    }
    let o = await this.requestFormAnswers([n], r, {
      updateTimeTrace: !1
    });
    if (!o || "string" == typeof o) {
      console.warn(
        "[ADP Recruiting][VSID Race] answer request did not return a fillable result", {
          hasErrorCode: "string" == typeof o
        }), this.progressTracker.updateMissedProgress(n.label);
      return
    }
    this.answer.regular = {
      ...this.answer.regular,
      ...o.regular
    }, this.answer.fillDataList = [...this.answer.fillDataList || [], ...o.fillDataList || []];
    let i = this.operationConfig[n.type];
    if (!i) {
      console.warn("[ADP Recruiting][VSID Race] no select operation configured"), this
        .progressTracker.updateMissedProgress(n.label);
      return
    }
    let a = await i(n, this.answer.regular);
    console.info("[ADP Recruiting][VSID Race] fill finished", {
      optionCount: n.options.length,
      filled: a
    })
  }
  async doFillForm(e) {
    this.resetFalconResponseAccumulator(), this.recruitingPagerCaptureHandler && (document
        .removeEventListener("click", this.recruitingPagerCaptureHandler, !0), this
        .recruitingPagerCaptureHandler = null), this.timeTrace.rulesParseStartTime = Date.now(),
      this.progressTracker.clear(), this.taskQueue.clear(), this.taskQueue.add(g.preFillForm),
      await this.taskQueue.run(), this.taskQueue.add(async () => {
        await (0, g.preclickAddButtons)()
      }), await this.taskQueue.run();
    let t = await (0, d.useAutofillInfoStore).getState().fetchAutofillInfo();
    this.currentLocation = {
      country: String(t?.location?.country ?? "").trim(),
      state: String(t?.location?.state ?? "").trim()
    };
    let r = await (0, b.getRules)(),
      {
        readyRules: n,
        deferredRaceRules: l
      } = (0, b.partitionAdpRecruitingVsidRaceRules)(r),
      c = (0, b.hasAdpRecruitingVsidRaceDependency)();
    if (this.progressTracker.setFieldsRequiredStatus(n), 0 === n.length) {
      if (!this.disableUploadResume && (0, g.hasResumeUploadInput)()) {
        let e = Date.now();
        return this.timeTrace.requestStartTime = e, this.timeTrace.fillStartTime = e, await this
          .uploadResumeOnly()
      }
      return this.progressTracker.generateFinalProgress()
    }
    try {
      this.token || (this.token = await (0, a.getSiteToken)()), this.timeTrace
        .requestStartTime = Date.now();
      let t = this.captureFalconResponseRun(),
        r = await (0, a.getElementRules)(n, "adp-recruiting", this.token, e, this.resumeInfo.id,
          this.resumeInfo.tailorId);
      this.recordFalconResponse(r, t), this.answer = (0, h.formatAnswer)(r), this.timeTrace
        .fillStartTime = Date.now()
    } catch (e) {
      if (e instanceof a.HTTPError || e instanceof a.ResumeMissingCodeError) return (0, s
        .sendHttpStatusMessage)(e.message), e.message;
      console.error("Unknown error occurred:", e)
    }(0, i.checkpoint)();
    let p = (0, b.getSubmitButtonText)();
    (0, s.bindSubmitButton)(p, this.progressTracker.fieldStatus, this.timeTrace), await this
      .fillCountryRuleDirectly(n, this.currentLocation), await this.fillStateRuleDirectly(n,
        this.currentLocation);
    let m = this.getRulesWithoutClientLocationRules(n),
      y = [...(0, a.getRegularOperations)(m, this.answer.regular, this.operationConfig)];
    for (let e of y) this.taskQueue.add(e);
    await this.taskQueue.run(), await this.fillDeferredAdpRecruitingVsidRace(l, c, e);
    let S = (0, o.createSequentialSectionResultReporter)("education", this.progressTracker,
        "education"),
      E = !1;
    for (let e = 0; e < this.answer.education.length; e++) {
      let t = this.answer.education[e],
        r = await (0, b.getEduRules)(),
        n = (0, a.getEducationOperations)(r, [t], this.operationConfig, void 0, {
          ...S.forRecord(e, r.slice(0, 1)),
          onSkipped: () => {
            E = !0
          }
        });
      for (let e of n) this.taskQueue.add(e);
      if (await this.taskQueue.run(), E) break
    }
    E ? this.progressTracker.updateMissedProgress("Education") : this.answer.education.length >
      0 && this.progressTracker.updateFilledProgress("Education");
    let x = (0, o.createSequentialSectionResultReporter)("employment", this.progressTracker,
        "experience"),
      C = !1;
    for (let e = 0; e < this.answer.workExperience.length; e++) {
      let t = this.answer.workExperience[e],
        r = (0, g.getVisibleEmploymentCount)();
      e >= r && (this.taskQueue.add(async () => {
        await (0, g.addSingleEmploymentSection)()
      }), await this.taskQueue.run());
      let n = await (0, b.getExpRules)(),
        o = (0, a.getEmploymentOperations)(n, [t], this.operationConfig, void 0, {
          ...x.forRecord(e, n.slice(0, 1)),
          onSkipped: () => {
            C = !0
          }
        });
      for (let e of o) this.taskQueue.add(e);
      if (await this.taskQueue.run(), C) break
    }
    C ? this.progressTracker.updateMissedProgress("Employment") : this.answer.workExperience
      .length > 0 && this.progressTracker.updateFilledProgress("Employment"), this
      .disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this
      .taskQueue.add(async () => {
        await (0, g.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      }), this.taskQueue.add(() => {}), await this.taskQueue.run(), (0, g
        .syncFilledTextProgressFromCurrentValues)(r, this.progressTracker.fieldStatus, this
        .progressTracker.updateFilledProgress);
    let A = (0, b.getFormSnapshot)();
    return this.recruitingPagerCaptureHandler = e => {
        let t = v(e.target);
        t?.isConnected && (w(t) || (0, b.submitHandler)(A, this.answer))
      }, document.addEventListener("click", this.recruitingPagerCaptureHandler, !0), (0, s
        .postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace), window.top
      ?.postMessage(f.cleanObject({
        type: u.MESSAGE_EVENTS.autoFillResultFromIframe,
        data: this.progressTracker.fieldStatus
      }), {
        targetOrigin: "*"
      }), this.progressTracker.generateFinalProgress()
  }
  submitApplication() {}
  constructor(...e) {
    super(...e), this.recruitingPagerCaptureHandler = null, this.currentLocation = {
      country: "",
      state: ""
    }
  }
}

