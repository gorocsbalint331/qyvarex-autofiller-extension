/**
 * Parcel module id: bacSi
 * Resolved path: contents/sites/pinpointhq.js (oracle restore)
 * Dependencies:
 *   ./address-search -> dORUH  =>  address-search.js
 *   ./answer -> 1Owhq  =>  src/contents/sites/pinpointhq/answer.js
 *   ./country -> k4CP3  =>  src/contents/sites/pinpointhq/country.js
 *   ./operations -> jFJwr  =>  src/contents/sites/pinpointhq/operations.js
 *   ./phone-country-code -> 4ZAY1  =>  src/contents/sites/pinpointhq/phone-country-code.js
 *   ./rules -> fRtPj  =>  src/contents/sites/pinpointhq/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~store/autofillInfo -> 79VNP  =>  _tilde_store/autofillInfo.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Pinpointhq", () => h);
var o = e("~contents/sites/base-filler"),
  i = e("~core/enums"),
  a = e("~core/xpath"),
  l = e("~store/autofillInfo"),
  s = e("./address-search"),
  u = e("./answer"),
  c = e("./country"),
  d = e("./operations"),
  f = e("./phone-country-code"),
  p = e("./rules");
let m = '//button[contains(@type, "submit")] | //button[contains(@class, "submit")]';
class h extends o.BaseFiller {
  getFieldHandlers() {
    return {
      [i.FIELD_TYPE.TEXT]: {
        handler: async (e, t) => (0, s.isPinpointAddressLine1Rule)(e) && (0, s
          .hasPinpointFindAddress)() ? await (0, s.fillPinpointAddressLine1Search)({
          rule: e,
          value: t,
          currentUrl: window.location.href,
          addressContext: (0, s.getPinpointAddressSearchContext)(this.answer)
        }) : await (0, d.fillInputTextField)(e.$input, t, (0, d
          .resolvePinpointPhoneCountryCode)(this.answer)),
        options: {
          expectArray: !1
        }
      },
      [i.FIELD_TYPE.SELECT]: {
        handler: (e, t) => e.label === f.PINPOINT_PHONE_COUNTRY_CODE_LABEL ? (0, d
          .fillPhoneCountryCode)(e, t) : (0, d.fillSelectField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [i.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, d.fillCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [i.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, d.fillRadioGroupField)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  async extractFormRules() {
    return (0, p.extractRules)()
  }
  async runPreFillForm() {
    if (this.hasAddressCountryControl = (0, c.hasPinpointAddressCountryControl)(), !this
      .hasAddressCountryControl) {
      console.info(
        "[PinpointHQ][Country] pre-crawl-skipped reason=missing-address-country-control");
      return
    }
    this.countryPrefillResult = await (0, c.runPinpointCountryPrefill)({
      fetchAutofillInfo: () => (0, l.useAutofillInfoStore).getState().fetchAutofillInfo(),
      fillCountry: d.prefillPinpointCountry
    }), console.info(
      `[PinpointHQ][Country] pre-crawl-result countryProvided=${!!this.countryPrefillResult.country} countryCode=${this.countryPrefillResult.countryCode||"none"} committed=${this.countryPrefillResult.committed}`
      )
  }
  getPreExtractionAbortReason() {
    return !this.hasAddressCountryControl || this.countryPrefillResult.committed ? null : (
      console.info(
        `[PinpointHQ][Country] pre-crawl-blocked reason=country-not-committed countryProvided=${!!this.countryPrefillResult.country}`
        ),
      "Country from Autofill Information could not be set before address fields were read.")
  }
  async fillRegularFields(e) {
    let t = e.find(c.isMainPinpointCountryRule);
    if (t) {
      let e = t.$input;
      e.value ? this.progressTracker.updateFilledProgress(t.label) : this.progressTracker
        .updateMissedProgress(t.label)
    }
    await super.fillRegularFields(e.filter(e => e !== t))
  }
  getSiteName() {
    return "pinpointhq"
  }
  async executeSiteSpecificSteps(e) {
    await (0, d.agreementCheckboxField)(), this.disableUploadResume ? this.progressTracker
      .updateMissedProgress("Resume/CV") : this.taskQueue.add(async () => {
        await (0, d.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      }), await this.taskQueue.run(), await this.bindSubmitButtonTracking(e)
  }
  getSubmitButtonSelector() {
    return m
  }
  async getAutofillSnapshot(e) {
    return (0, p.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, p.getFormSnapshot)()
  }
  submitApplication() {
    let e = (0, a.getFirstOrderedNodeSafe)(m, document.body);
    e && e.click()
  }
  constructor(...e) {
    super(...e), this.countryPrefillResult = {
      country: null,
      countryCode: "",
      committed: !1
    }, this.hasAddressCountryControl = !1, this.formatAnswer = u.formatAnswer
  }
}

