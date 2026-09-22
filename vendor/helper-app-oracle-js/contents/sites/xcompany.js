/**
 * Parcel module id: 47Efl
 * Resolved path: contents/sites/xcompany.js (oracle restore)
 * Dependencies:
 *   ./answer -> 2NWAX  =>  src/contents/sites/xcompany/answer.js
 *   ./operations -> 4yhys  =>  src/contents/sites/xcompany/operations.js
 *   ./rules -> i3znd  =>  src/contents/sites/xcompany/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "XCompany", () => d);
var o = e("~contents/methods/dom"),
  i = e("~contents/sites/base-filler"),
  a = e("~core/enums"),
  l = e("~core/xpath"),
  s = e("./answer"),
  u = e("./operations"),
  c = e("./rules");
class d extends i.BaseFiller {
  getFieldHandlers() {
    return {
      [a.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, u.fillTextField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [a.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, u.fillSelectField)(e, t),
        options: {
          expectArray: !1
        }
      },
      [a.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, u.fillCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [a.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, u.fillRadioGroupField)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  getSiteName() {
    return "xcompany"
  }
  async runPreFillForm() {
    await (0, u.preFillForm)()
  }
  async checkCoverLetter() {
    await (0, u.preFillForm)();
    let e = (0, u.getCoverLetterInput)(),
      t = "";
    e && (t = (0, u.isCoverLetterRequired)() ? "required" : "optional"), (0, o
      .postCoverLetterStatus)(t)
  }
  async getAutofillSnapshot(e) {
    return await (0, c.getFormSnapshot)(e)
  }
  async getSubmitSnapshot() {
    return await (0, c.getFormSnapshot)(this.cachedRulesForSnapshot)
  }
  getSubmitButtonSelector() {
    return '//*[@id="main"]//x-island//form//button[@type="submit"]'
  }
  async extractFormRules() {
    let e = await (0, c.extractRules)();
    return this.cachedRulesForSnapshot = e, e
  }
  async handleResumeUpload() {
    let e = (0, u.getResumeInput)();
    if (!e) return;
    let t = (0, u.isResumeRequired)();
    if (this.progressTracker.updateFieldRequiredStatus({
        label: "Resume/CV",
        required: t
      }), this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV");
      return
    }
    this.taskQueue.add(async () => {
      await (0, u.uploadResume)(this.resumeInfo, this.progressTracker
        .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
    }), await this.taskQueue.run()
  }
  async fillRegularFields(e) {
    this.taskQueue.add(async () => {
      await (0, u.fillConsentCheckbox)()
    }), await this.taskQueue.run();
    let t = e.filter(e => {
        if (e.type !== a.FIELD_TYPE.TEXT) return !0;
        let t = e.$input;
        return t?.type !== "file"
      }),
      r = e => Array.isArray(e) ? e[0] : e,
      n = e => String(r(e) ?? "").trim().toLowerCase(),
      o = this.answer.fillDataList ?? [],
      i = new Map;
    for (let e of t) i.set(e.label, (i.get(e.label) || 0) + 1);
    let l = new Set;
    for (let [e, r] of i)
      if (r > 1) {
        let r = t.some(t => t.label === e && t.type === a.FIELD_TYPE.SELECT);
        r && l.add(e)
      } let s = new Map;
    for (let e of o)
      if (e?.name && l.has(e.name)) {
        let t = s.get(e.name) ?? [];
        t.push(e.value), s.set(e.name, t)
      } for (let e of t) {
      let t = this.operationConfig[e.type];
      if (t) {
        if (l.has(e.label) && e.type === a.FIELD_TYPE.SELECT) {
          this.taskQueue.add(async () => {
            let o = s.get(e.label) ?? [],
              i = e,
              a = o.findIndex(e => (i.options ?? []).some(t => n(t) === n(e)));
            if (a >= 0) {
              let t = r(o.splice(a, 1)[0]),
                n = await (0, u.fillSelectField)(i, "string" == typeof t ? t : String(t ??
                  ""));
              n ? this.progressTracker.updateFilledProgress(e.label) : this
                .progressTracker.updateMissedProgress(e.label)
            } else await t(e, this.answer.regular)
          });
          continue
        }
        this.taskQueue.add(async () => {
          await t(e, this.answer.regular)
        })
      }
    }
    await this.taskQueue.run()
  }
  async executeSiteSpecificSteps(e) {
    this.taskQueue.add(async () => {
      await (0, u.fillAcknowledgeCheckbox)(), await (0, u.fillNestedAcknowledgeCheckbox)()
    }), this.coverLetter?.coverLetterId && this.taskQueue.add(async () => {
      await (0, u.uploadCoverLetter)(this.coverLetter, this.progressTracker
        .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
    }), await this.taskQueue.run(), await this.bindSubmitButtonTracking(e)
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm(), await this.handleResumeUpload();
    let t = await this.extractFormRules(),
      r = [...t],
      n = (0, u.getResumeInput)();
    n && r.push({
      label: "Resume/CV",
      required: (0, u.isResumeRequired)()
    }), this.progressTracker.setFieldsRequiredStatus(r);
    let o = await this.fetchFormAnswers(t, e);
    return "string" == typeof o ? o : (await this.fillRegularFields(t), await this
      .executeSiteSpecificSteps(t), await this.finalizeFillForm())
  }
  submitApplication() {
    let e = (0, l.getFirstOrderedNodeSafe)(
      '//*[@id="main"]//x-island//form//button[@type="submit"]');
    e?.click()
  }
  constructor(...e) {
    super(...e), this.cachedRulesForSnapshot = [], this.formatAnswer = s.formatAnswer
  }
}

