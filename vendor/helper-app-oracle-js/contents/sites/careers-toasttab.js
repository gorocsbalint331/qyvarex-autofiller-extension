/**
 * Parcel module id: 44HAb
 * Resolved path: contents/sites/careers-toasttab.js (oracle restore)
 * Dependencies:
 *   ./operations -> kkjJL  =>  src/contents/sites/careers-toasttab/operations.js
 *   ./rules -> 4xhlr  =>  src/contents/sites/careers-toasttab/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "CareersToasttab", () => c);
var o = e("~contents/methods/dom"),
  i = e("~contents/sites/base-filler"),
  a = e("~core/enums"),
  l = e("~core/xpath"),
  s = e("./operations"),
  u = e("./rules");
class c extends i.BaseFiller {
  getFieldHandlers() {
    return {
      [a.FIELD_TYPE.TEXT]: {
        handler: (e, t) => {
          let r = t?.[0];
          if (!r) return;
          let n = e.$input;
          return "tel" === n.type || n.classList.contains("iti__tel-input") || n.closest?.(
            ".iti") ? (0, s.fillPhoneField)(n, String(r ?? "")) : (0, o.fillInputTextField)(
            n, String(r ?? ""))
        },
        options: {
          expectArray: !0
        }
      },
      [a.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, s.fillSelectField)(e, t),
        options: {
          expectArray: !1
        }
      },
      [a.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, o.fillCheckBoxesField)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  getSiteName() {
    return "careerstoasttab"
  }
  async extractFormRules() {
    return await (0, u.extractRules)()
  }
  async runPreFillForm() {
    this.taskQueue.add(s.preFillForm), await this.taskQueue.run()
  }
  async getAutofillSnapshot(e) {
    return await (0, u.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return await (0, u.getFormSnapshot)()
  }
  getSubmitButtonSelector() {
    return './/button[@type="submit" and @name="next_step" and (@data-call-to-action--form-target="submitButton" or starts-with(@id, "form_submit_"))]'
  }
  submitApplication() {
    let e = (0, l.getFirstOrderedNodeSafe)('.//button[@type="submit"]');
    e && e.click()
  }
  async handleResumeUpload() {
    this.disableUploadResume ? (await (0, s.removeResume)(), this.progressTracker
      .updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, s.removeResume)(), await (0, s.uploadResume)(this.resumeInfo, this
        .progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress)
    }), await this.taskQueue.run()
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    this.progressTracker.setFieldsRequiredStatus(t), await this.handleResumeUpload();
    let r = await this.fetchFormAnswers(t, e);
    return "string" == typeof r ? r : (await this.fillRegularFields(t), await this
      .executeSiteSpecificSteps(t), this.finalizeFillForm())
  }
}

