/**
 * Parcel module id: hJ857
 * Resolved path: contents/sites/teamtailor.js (oracle restore)
 * Dependencies:
 *   ./answer -> fLZQx  =>  src/contents/sites/teamtailor/answer.js
 *   ./operations -> b9W7c  =>  src/contents/sites/teamtailor/operations.js
 *   ./rules -> dGJDg  =>  src/contents/sites/teamtailor/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/sites/autofill-answer-pair-tracking -> aCElZ  =>  _tilde_contents/sites/autofill-answer-pair-tracking.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  _tilde_core/phone-country-code.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~store/url -> b53L3  =>  _tilde_store/url.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "TeamTailor", () => m);
var o = e("~contents/sites/base-filler"),
  i = e("~contents/methods/dom"),
  a = e("~contents/sites/autofill-answer-pair-tracking"),
  l = e("~core/enums"),
  s = e("~core/phone-country-code"),
  u = e("./operations"),
  c = e("./answer"),
  d = e("./rules"),
  f = e("~core/xpath"),
  p = e("~store/url");
class m extends o.BaseFiller {
  async checkCoverLetter() {
    this.bindCoverLetterStatusObserver(), await this.syncCoverLetterStatus(!0)
  }
  getApplicationFormFrame() {
    return document.querySelector(d.TEAMTAILOR_APPLICATION_FORM_SELECTOR)
  }
  async syncCoverLetterStatus(e = !1) {
    await (0, d.waitForApplicationFormReady)();
    let t = (0, d.getCoverLetterStatus)();
    (e || t !== this.lastCoverLetterStatus) && (this.lastCoverLetterStatus = t, (0, i
      .postCoverLetterStatus)(t))
  }
  scheduleCoverLetterStatusSync(e = !1) {
    this.coverLetterStatusTimer && window.clearTimeout(this.coverLetterStatusTimer), this
      .coverLetterStatusTimer = window.setTimeout(() => {
        this.syncCoverLetterStatus(e)
      }, 150)
  }
  isRelevantCoverLetterMutation(e) {
    let t = this.getApplicationFormFrame();
    return e.some(e => {
      let r = [e.target, ...e.addedNodes, ...e.removedNodes];
      return r.some(e => e instanceof Element && (!!(e.matches(d
        .TEAMTAILOR_APPLICATION_FORM_SELECTOR) || e.querySelector(d
        .TEAMTAILOR_APPLICATION_FORM_SELECTOR)) || !!t && t.contains(e)))
    })
  }
  bindCoverLetterStatusObserver() {
    if (this.coverLetterStatusObserver) {
      this.scheduleCoverLetterStatusSync(!0);
      return
    }
    let e = document.body || document.documentElement;
    if (!e) {
      this.syncCoverLetterStatus(!0);
      return
    }
    this.coverLetterStatusObserver = new MutationObserver(e => {
      if (!this.isRelevantCoverLetterMutation(e)) return;
      let t = this.getApplicationFormFrame();
      t && t.scrollIntoView({
        block: "center",
        inline: "nearest"
      }), this.scheduleCoverLetterStatusSync()
    }), this.coverLetterStatusObserver.observe(e, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["loading", "src", "class", "style", "hidden", "aria-hidden"]
    }), this.scheduleCoverLetterStatusSync(!0)
  }
  getFieldHandlers() {
    return {
      [l.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (r) return (0, u.fillInputTextField)(e.$input, String(r ?? ""), (0, s
          .resolvePhoneCountryCodeAnswer)(this.answer))
      },
      [l.FIELD_TYPE.SELECT]: (e, t) => (0, u.fillSelectField)(e, t),
      [l.FIELD_TYPE.CHECKBOX]: (e, t) => (0, u.fillCheckboxField)(e, t),
      [l.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, u.fillRadioGroupFiled)(e, t)
    }
  }
  async handleResumeUpload() {
    this.disableUploadResume ? (await (0, u.removeResume)(), this.progressTracker
      .updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, u.removeResume)(), await (0, u.uploadResume)(this.resumeInfo, this
        .progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress)
    }), await this.taskQueue.run()
  }
  async executeSiteSpecificSteps(e) {
    await (0, u.checkAllConsentCheckboxes)();
    let t = (0, d.getFormSnapshot)(),
      r = (0, f.getFirstOrderedNodeSafe)('.//input[@type="submit"]');
    if (r) {
      function n() {
        let e = (0, d.getFormSnapshot)();
        (0, a.sendAutofillAnswerPairEvent)({
          formUrl: (0, p.useUrlStore).getState().currentTabUrl,
          autofillSnapshot: t,
          submitSnapshot: e,
          source: "teamtailor"
        })
      }
      r.addEventListener("click", n)
    }
    await super.executeSiteSpecificSteps(e)
  }
  async extractFormRules() {
    return await (0, d.extractRules)()
  }
  getSiteName() {
    return "teamtailor"
  }
  async getAutofillSnapshot(e) {
    return (0, d.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, d.getFormSnapshot)()
  }
  submitApplication() {
    let e = './input[@type="submit"]',
      t = (0, f.getFirstOrderedNode)(e);
    t && t?.click()
  }
  constructor(...e) {
    super(...e), this.coverLetterStatusObserver = null, this.coverLetterStatusTimer = null, this
      .lastCoverLetterStatus = "", this.formatAnswer = e => (0, c.formatAnswer)(e)
  }
}

