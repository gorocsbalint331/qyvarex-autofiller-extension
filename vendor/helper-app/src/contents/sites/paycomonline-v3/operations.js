/**
 * Parcel module id: kmsj6
 * Resolved path: src/contents/sites/paycomonline-v3/operations.js
 * Dependencies:
 *   ./file-upload -> 8prPo  =>  src/contents/sites/paycomonline-v3/file-upload.js
 *   ./geographic-country -> 2LoTq  =>  src/contents/sites/paycomonline-v3/geographic-country.js
 *   ./phone-country -> 8lplO  =>  src/contents/sites/paycomonline-v3/phone-country.js
 *   ./start-application-dialog -> dQRRK  =>  src/contents/sites/paycomonline-v3/start-application-dialog.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~contents/crawler/utils/checkbox -> 5MP6u  =>  src/contents/crawler/utils/checkbox.js
 *   ~contents/crawler/utils/input -> iPIvT  =>  src/contents/crawler/utils/input.js
 *   ~contents/crawler/utils/select -> h22JB  =>  src/contents/crawler/utils/select.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
  *
 * Deobfuscated (pretty + export/import rename). Parcel e()/r preserved.
 */

var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");
helpers.defineInteropFlag(r), helpers.export(r, "fillCheckBoxesField", () => dom.fillCheckBoxesField), helpers.export(r, "fillSelectField", () => dom.fillSelectField), helpers.export(r, "getPaycomCoverLetterStatus", () => getPaycomCoverLetterStatus), helpers.export(r, "fillInputTextField", () => fillInputTextField), helpers.export(r, "fillPaycomDateGroup", () => fillPaycomDateGroup), helpers.export(r, "fillPaycomListbox", () => fillPaycomListbox), helpers.export(r, "isPaycomPhoneCountryCodeButton", () => isPaycomPhoneCountryCodeButton), helpers.export(r, "fillPaycomPhoneCountryCode", () => fillPaycomPhoneCountryCode), helpers.export(r, "clickCheckboxOuterIDButton", () => clickCheckboxOuterIDButton), helpers.export(r, "fillPaycomRadioGroup", () => fillPaycomRadioGroup), helpers.export(r, "fillPaycomSelect", () => fillPaycomSelect), helpers.export(r, "fillPaycomGeographicCountry", () => fillPaycomGeographicCountry), helpers.export(r, "waitForDOMStable", () => waitForDOMStable), helpers.export(r, "expandForm", () => expandForm), helpers.export(r, "fillEducation", () => fillEducation), helpers.export(r, "fillAgreementCheckbox", () => fillAgreementCheckbox), helpers.export(r, "uploadResume", () => uploadResume), helpers.export(r, "uploadCoverLetter", () => uploadCoverLetter);
var choiceMatch = e("~contents/methods/choice-match"),
  dayjs = e("dayjs"),
  a = helpers.interopDefault(dayjs),
  checkbox = e("~contents/crawler/utils/checkbox"),
  input = e("~contents/crawler/utils/input"),
  select = e("~contents/crawler/utils/select"),
  answer = e("~contents/methods/answer"),
  dom = e("~contents/methods/dom"),
  enums = e("~core/enums"),
  dom2 = e("~core/dom"),
  cancellation = e("~contents/methods/cancellation"),
  xpath = e("~core/xpath"),
  delay = e("~utils/delay"),
  geographicCountry = e("./geographic-country"),
  phoneCountry = e("./phone-country"),
  fileUpload = e("./file-upload"),
  startApplicationDialog = e("./start-application-dialog");
function getPaycomCoverLetterStatus() {
  return (0, fileUpload.getPaycomFileUploadInput)("coverLetter") ? "optional" : "";
}
async function fillInputTextField(e, t) {
  if (e) {
    if ("IFRAME" === e.tagName) {
      try {
        let r = e,
          _helpersLocal = r.contentDocument || r.contentWindow?.document;
        _helpersLocal && _helpersLocal.body && (await (0, delay.delay)(50), r.contentWindow?.focus(), _helpersLocal.body.focus(), _helpersLocal.body.innerHTML = "", "on" === _helpersLocal.designMode || "true" === _helpersLocal.body.contentEditable ? _helpersLocal.execCommand("insertText", !1, t) : _helpersLocal.body.innerText = t, _helpersLocal.body.dispatchEvent(new Event("input", {
          bubbles: !0
        })), _helpersLocal.body.dispatchEvent(new Event("change", {
          bubbles: !0
        })), _helpersLocal.body.dispatchEvent(new Event("blur", {
          bubbles: !0
        })), await (0, delay.delay)(50));
      } catch (e) {
        console.error("Failed to fill iframe editor:", e);
      }
      return;
    }
    await (0, delay.delay)(50), (0, dom.triggerEvents)(e, ["focus", "click"]), await (0, delay.delay)(50), await (0, input.fillDefaultInputField)(e, t), e.dispatchEvent(new Event("input", {
      bubbles: !0
    })), e.dispatchEvent(new Event("change", {
      bubbles: !0
    })), e.dispatchEvent(new Event("blur", {
      bubbles: !0
    })), await (0, delay.delay)(50);
  }
}
async function fillPaycomDateGroup(e, t) {
  let r = e.$input;
  if (!r || !t) return;
  let _helpersLocal2 = (0, a.default)(t);
  if (!_helpersLocal2.isValid()) return;
  let _choiceMatchLocal = (0, xpath.getOrderedNodesSafe)(".//input | .//select", r),
    _dayjsLocal = null,
    _checkboxLocal = null,
    _inputLocal = null,
    _selectLocal = (e, t) => {
      let r = (e.getAttribute("placeholder") || e.getAttribute("aria-label") || e.getAttribute("name") || "").toLowerCase();
      return r.includes(t);
    };
  for (let e of _choiceMatchLocal) _selectLocal(e, "month") ? _dayjsLocal = e : _selectLocal(e, "day") ? _checkboxLocal = e : _selectLocal(e, "year") && (_inputLocal = e);
  _dayjsLocal && _checkboxLocal && _inputLocal || (3 === _choiceMatchLocal.length ? (_dayjsLocal || (_dayjsLocal = _choiceMatchLocal[0]), _checkboxLocal || (_checkboxLocal = _choiceMatchLocal[1]), _inputLocal || (_inputLocal = _choiceMatchLocal[2])) : 2 === _choiceMatchLocal.length ? (_dayjsLocal || (_dayjsLocal = _choiceMatchLocal[0]), _inputLocal || (_inputLocal = _choiceMatchLocal[1])) : 1 !== _choiceMatchLocal.length || _inputLocal || (_inputLocal = _choiceMatchLocal[0])), _dayjsLocal && (await C(_dayjsLocal, _helpersLocal2.format("MM"))), _checkboxLocal && (await C(_checkboxLocal, _helpersLocal2.format("DD"))), _inputLocal && (await C(_inputLocal, _helpersLocal2.format("YYYY")));
  let _answerLocal = (e, t, r = !1) => {
    if (!e) return !1;
    let _choiceMatchLocal2 = e.value?.trim() || "",
      _dayjsLocal2 = "SELECT" === e.tagName && e.options[e.selectedIndex]?.text?.trim() || "";
    return _choiceMatchLocal2 === t || /^\d+$/.test(_choiceMatchLocal2) && Number(_choiceMatchLocal2) === Number(t) || r && _dayjsLocal2.toLowerCase() === _helpersLocal2.format("MMMM").toLowerCase();
  };
  return _answerLocal(_dayjsLocal, _helpersLocal2.format("MM"), !0) && _answerLocal(_inputLocal, _helpersLocal2.format("YYYY")) && (!_checkboxLocal || _answerLocal(_checkboxLocal, _helpersLocal2.format("DD")));
}
async function C(e, t) {
  if ("SELECT" === e.tagName) {
    let r = e.options,
      _helpersLocal3 = !1;
    for (let dayjs = 0; dayjs < r.length; dayjs++) {
      let _aLocal = r[dayjs];
      if (_aLocal.value === t || (0, choiceMatch.isExactChoiceMatch)(_aLocal.text, t) || t.startsWith("0") && _aLocal.value === t.replace(/^0/, "")) {
        e.value = _aLocal.value, _helpersLocal3 = !0;
        break;
      }
    }
    _helpersLocal3 || (e.value = t), e.dispatchEvent(new Event("change", {
      bubbles: !0
    }));
  } else await (0, input.fillDefaultInputField)(e, t);
}
async function fillPaycomListbox(e, t) {
  let r = e.$input;
  if (!r) return;
  (0, dom.triggerEvents)(r, ["mousedown", "mouseup", "click"]), await (0, delay.delay)(300);
  let _helpersLocal4 = r.getAttribute("aria-controls"),
    _choiceMatchLocal3 = null;
  for (let e = 0; e < 3 && (!(_choiceMatchLocal3 = _helpersLocal4 ? document.getElementById(_helpersLocal4) : (0, xpath.getFirstOrderedNodeSafe)("//ul[@role='listbox'] | //div[@role='listbox']")) || null === _choiceMatchLocal3.offsetParent); e++) await (0, delay.delay)(200);
  if (_choiceMatchLocal3) {
    let e = (0, xpath.getOrderedNodesSafe)(".//li[@role='option'] | .//div[@role='option']", _choiceMatchLocal3),
      r = (0, select.findMatchOption)(e, t);
    r && (0, dom.triggerEvents)(r, ["mousedown", "mouseup", "click"]);
  }
  await (0, delay.delay)(100);
}
function isPaycomPhoneCountryCodeButton(e) {
  return e instanceof HTMLButtonElement && "international-phone-button" === e.getAttribute("data-testid");
}
function T(e) {
  let t = e.getBoundingClientRect(),
    r = window.getComputedStyle(e);
  return t.width > 0 && t.height > 0 && "none" !== r.display && "hidden" !== r.visibility;
}
function F() {
  return Array.from(document.querySelectorAll('li[data-testid^="country-list-item-"]')).filter(T);
}
let I = 2e3,
  j = 50;
function D() {
  return Array.from(document.querySelectorAll('input[data-testid="searchsearchinput"], input[placeholder="Search"]')).find(T) || null;
}
async function P() {
  let e = Date.now() + I;
  for (;;) {
    let t = D();
    if (t) return t;
    let r = e - Date.now();
    if (r <= 0) return null;
    await (0, delay.delay)(Math.min(j, r));
  }
}
async function fillPaycomPhoneCountryCode(e, t, r) {
  let _helpersLocal5 = e.$input;
  if (!isPaycomPhoneCountryCodeButton(_helpersLocal5) || !t) return !1;
  let _choiceMatchLocal4 = (0, phoneCountry.getPaycomPhoneCountryCodeSearchCandidates)(t, r);
  if (0 === _choiceMatchLocal4.length) return !1;
  let _dayjsLocal3 = (0, phoneCountry.getPaycomPhoneCountryDialCode)(t);
  if ((0, phoneCountry.isPaycomPhoneCountrySelectionMatch)(_helpersLocal5, t, r)) return !0;
  (0, dom.triggerEvents)(_helpersLocal5, ["mousedown", "mouseup", "click"]);
  let _aLocal2 = await P();
  for (let e of (console.info("[Paycom-v3][phone-country] opened selector", {
    candidateCount: _choiceMatchLocal4.length,
    dialCode: _dayjsLocal3,
    searchReady: !!_aLocal2
  }), _choiceMatchLocal4)) {
    let _choiceMatchLocal5 = _aLocal2 ? await P() : null;
    _choiceMatchLocal5 && (await fillInputTextField(_choiceMatchLocal5, e));
    let _checkboxLocal2 = await (0, phoneCountry.waitForPaycomPhoneCountryOption)({
      getOptions: F,
      value: t,
      profileCountry: r,
      timeoutMs: _choiceMatchLocal5 ? void 0 : 0
    });
    if (_checkboxLocal2) {
      (0, dom.triggerEvents)(_checkboxLocal2, ["mousedown", "mouseup", "click"]), await (0, delay.delay)(300);
      let _choiceMatchLocal6 = !_dayjsLocal3 || (0, phoneCountry.isPaycomPhoneCountrySelectionMatch)(_helpersLocal5, t, r);
      return console.info("[Paycom-v3][phone-country] selection result", {
        candidate: e,
        dialCode: _dayjsLocal3,
        selected: _choiceMatchLocal6
      }), _choiceMatchLocal6;
    }
    console.warn("[Paycom-v3][phone-country] exact option not ready", {
      candidate: e,
      dialCode: _dayjsLocal3,
      searchReady: !!_choiceMatchLocal5
    });
  }
  return !1;
}
async function clickCheckboxOuterIDButton(e) {
  e && ((0, dom.triggerEvents)(e, ["mousedown", "mouseup", "click"]), await (0, delay.delay)(100));
}
async function fillPaycomRadioGroup(e, t) {
  let r = e.$radioParent,
    _helpersLocal6 = (0, xpath.getOrderedNodesSafe)(".//input[@type='radio']", r);
  if (!_helpersLocal6.length) return;
  let _dayjsLocal4 = (0, choiceMatch.findExactChoice)(_helpersLocal6.filter(e => !e.disabled), t, e => {
    let t = (0, xpath.getFirstOrderedNodeSafe)(`//label[@for='${e.id}']`);
    return t?.textContent || e.value;
  }, e => e.value);
  !(!_dayjsLocal4 && e.label.toLowerCase().includes("acknowledge")) && _dayjsLocal4 && (await (0, delay.delay)(50), (0, dom.triggerEvents)(_dayjsLocal4, ["focus", "click", "change", "input"]), await (0, checkbox.fillCheckbox)(_dayjsLocal4, !0), await (0, delay.delay)(50));
}
async function fillPaycomSelect(e, t) {
  let r = e.$input;
  if (!r || !t) return;
  await (0, delay.delay)(50), (0, dom.triggerEvents)(r, ["focus", "click"]), await (0, delay.delay)(50);
  let _helpersLocal7 = Array.from(r.options),
    _choiceMatchLocal7 = null;
  if (/^\d+$/.test(t)) {
    let e = parseInt(t, 10);
    e >= 0 && e < _helpersLocal7.length && (_choiceMatchLocal7 = _helpersLocal7[e]);
  }
  if (_choiceMatchLocal7 || (_choiceMatchLocal7 = (0, select.findMatchOption)(_helpersLocal7, t)), _choiceMatchLocal7) {
    let e = Object.getPrototypeOf(r),
      t = Object.getOwnPropertyDescriptor(e, "value").set;
    t ? t.call(r, _choiceMatchLocal7.value) : r.value = _choiceMatchLocal7.value, (0, dom.triggerEvents)(r, ["change", "input", "blur"]), await (0, delay.delay)(50);
    return;
  }
  let _dayjsLocal5 = Array.isArray(t) ? t[0] : t;
  for (let e of _helpersLocal7) if (e.value.toLowerCase() === _dayjsLocal5.toLowerCase() || e.text.toLowerCase() === _dayjsLocal5.toLowerCase()) {
    let t = Object.getPrototypeOf(r),
      _helpersLocal8 = Object.getOwnPropertyDescriptor(t, "value").set;
    _helpersLocal8 ? _helpersLocal8.call(r, e.value) : r.value = e.value, (0, dom.triggerEvents)(r, ["change", "input", "blur"]), await (0, delay.delay)(50);
    return;
  }
  (0, dom.fillSelectField)(r, [_dayjsLocal5]);
}
function M() {
  let e = Array.from(document.querySelectorAll('button[aria-label*="Country combo box"]')).filter(geographicCountry.isPaycomMainGeographicCountryButton);
  return 1 === e.length ? e[0] : null;
}
function N() {
  return Array.from(document.querySelectorAll('input[data-testid="searchsearchinput"], input[placeholder="Search"]')).find(T) ?? null;
}
function $() {
  return Array.from(document.querySelectorAll('li[data-testid^="country-list-item-"]')).filter(T);
}
function B(e) {
  (0, dom.triggerEvents)(e, ["mousedown", "mouseup", "click"]);
}
async function q(e, t) {
  if (!t) return !1;
  (0, dom.triggerEvents)(e, ["mousedown", "mouseup", "click"]), await (0, delay.delay)(300);
  let r = N();
  if (!r) return !1;
  await fillInputTextField(r, t), await (0, delay.delay)(300);
  let _helpersLocal9 = (0, geographicCountry.findPaycomGeographicCountryOption)($(), t);
  if (!_helpersLocal9) return !1;
  (0, dom.triggerEvents)(_helpersLocal9, ["mousedown", "mouseup", "click"]), await (0, delay.delay)(400);
  let _choiceMatchLocal8 = M();
  return !!(_choiceMatchLocal8 && (0, geographicCountry.isPaycomGeographicCountrySelectionMatch)(_choiceMatchLocal8, t));
}
async function fillPaycomGeographicCountry(e) {
  let t = (0, geographicCountry.formatPaycomGeographicCountrySearch)(e);
  if (!t) return console.info("[Paycom-v3] Geographic Country prefill skipped", {
    reason: "country-empty"
  }), !1;
  let r = M();
  if (!r) return console.warn("[Paycom-v3] Geographic Country prefill skipped", {
    reason: "control-missing-or-ambiguous"
  }), !1;
  if ((0, geographicCountry.isPaycomGeographicCountrySelectionMatch)(r, e)) return !0;
  let _helpersLocal0 = r.textContent?.trim() || "";
  (0, dom.triggerEvents)(r, ["mousedown", "mouseup", "click"]), await (0, delay.delay)(300);
  let _choiceMatchLocal9 = N();
  if (!_choiceMatchLocal9) return B(r), console.warn("[Paycom-v3] Geographic Country prefill failed", {
    reason: "search-unavailable"
  }), !1;
  await fillInputTextField(_choiceMatchLocal9, t), await (0, delay.delay)(300);
  let _dayjsLocal6 = (0, geographicCountry.findPaycomGeographicCountryOption)($(), e);
  if (!_dayjsLocal6) return B(r), console.warn("[Paycom-v3] Geographic Country prefill failed", {
    reason: "option-unmatched-or-ambiguous"
  }), !1;
  (0, dom.triggerEvents)(_dayjsLocal6, ["mousedown", "mouseup", "click"]), await (0, delay.delay)(400);
  let _aLocal3 = M(),
    _checkboxLocal3 = !!(_aLocal3 && (0, geographicCountry.isPaycomGeographicCountrySelectionMatch)(_aLocal3, e));
  if (!_checkboxLocal3) {
    let e = await q(_aLocal3 || r, _helpersLocal0);
    console.warn("[Paycom-v3] Geographic Country prefill failed", {
      reason: e ? "commit-readback-mismatch-restored" : "commit-readback-mismatch-rollback-failed"
    });
  }
  return _checkboxLocal3;
}
async function waitForDOMStable() {
  let e = 30,
    t = 200;
  for (let r = 0; r < e; r++) {
    await (0, delay.delay)(t);
    let e = document.getElementById("employment-city-field-1"),
      _helpersLocal1 = e && "INPUT" === e.tagName && "text" === e.type && !e.disabled,
      _choiceMatchLocal0 = document.getElementById("employment-state-field-1");
    _choiceMatchLocal0 && "SELECT" !== _choiceMatchLocal0.tagName && (_choiceMatchLocal0 = _choiceMatchLocal0.querySelector("select"));
    let _dayjsLocal7 = _choiceMatchLocal0 && "SELECT" === _choiceMatchLocal0.tagName && _choiceMatchLocal0.options && _choiceMatchLocal0.options.length > 10 && !_choiceMatchLocal0.disabled;
    if (_helpersLocal1 && _dayjsLocal7) return !0;
    if ((!e || !_choiceMatchLocal0) && r > 10) {
      let e = document.getElementById("education-city-field-1"),
        t = document.getElementById("education-state-field-1");
      t && "SELECT" !== t.tagName && (t = t.querySelector("select"));
      let r = e && "INPUT" === e.tagName && !e.disabled,
        _helpersLocal10 = t && "SELECT" === t.tagName && t.options && t.options.length > 10 && !t.disabled;
      if (r && _helpersLocal10) return !0;
    }
  }
  return !1;
}
async function expandForm(e) {
  if (e.education && e.education.length > 0) {
    let t = z(),
      r = e.education.length;
    if (r > t) for (let e = 0; e < r - t; e++) await W(), await (0, delay.delay)(300);
  }
  if (e.workExperience && e.workExperience.length > 0) {
    let t = V(),
      r = e.workExperience.length;
    if (r > t) for (let e = 0; e < r - t; e++) await G(), await (0, delay.delay)(300);
  }
  await (0, delay.delay)(500);
}
function z() {
  let e = document.getElementById("education-section");
  if (!e) return 0;
  let t = (0, xpath.getOrderedNodesSafe)(".//h3[contains(text(), 'Institution #')]", e);
  if (0 === t.length) {
    let t = (0, xpath.getFirstOrderedNodeSafe)(".//input", e);
    return t ? 1 : 0;
  }
  return t.length;
}
function V() {
  let e = document.getElementById("employment-section");
  if (!e) return 0;
  let t = (0, xpath.getOrderedNodesSafe)(".//h3[contains(text(), 'Employer #')]", e);
  if (0 === t.length) {
    let t = (0, xpath.getFirstOrderedNodeSafe)(".//input", e);
    return t ? 1 : 0;
  }
  return t.length;
}
async function W() {
  let e = document.getElementById("education-section");
  if (!e) return;
  let t = (0, xpath.getFirstOrderedNodeSafe)(".//button[.//h4[contains(text(), 'Add Institution')]] | .//button[contains(., 'Add Institution')]", e);
  t && (0, dom.triggerEvents)(t, ["mousedown", "mouseup", "click"]);
}
async function G() {
  let e = document.getElementById("employment-section");
  if (!e) return;
  let t = (0, xpath.getFirstOrderedNodeSafe)(".//button[.//h4[contains(text(), 'Add Employer')]] | .//button[contains(., 'Add Employer')]", e);
  t && (0, dom.triggerEvents)(t, ["mousedown", "mouseup", "click"]);
}
async function fillEducation(e, t) {
  if (!e.education || 0 === e.education.length) return;
  let r = t ? (0, answer.createSectionResultReporter)("education", t) : void 0;
  r?.setLabel("Education");
  let _helpersLocal11 = [];
  for (let t = 0; t < e.education.length; t++) {
    let _choiceMatchLocal1, _dayjsLocal8;
    let _aLocal4 = e.education[t],
      _inputLocal2 = t + 1,
      _selectLocal2 = r?.ensureRow(t, _aLocal4),
      _answerLocal2 = [];
    _helpersLocal11[t] = {
      type: enums.FIELD_TYPE.EDUCATION,
      label: "Education",
      children: _answerLocal2
    }, r && (0, dom2.setSectionResultFocusRules)("education", _helpersLocal11);
    let _domLocal = (e, t, _helpersArg, _choiceMatchArg) => {
      if (!r || !_selectLocal2) return;
      let _dayjsLocal9 = _answerLocal2.find(t => t.label === e);
      _dayjsLocal9 ? _dayjsLocal9.$input = t : _answerLocal2.push({
        label: e,
        type: enums.FIELD_TYPE.TEXT,
        $input: t
      });
      let _aLocal5 = String(Array.isArray(_helpersArg) ? _helpersArg[0] ?? "" : _helpersArg ?? "").trim(),
        _checkboxLocal4 = t,
        _inputLocal3 = t?.tagName === "SELECT" ? t.options[t.selectedIndex] : void 0,
        _domLocal2 = t?.getAttribute("type") === "radio" ? t.checked ? t.value : "" : String(_inputLocal3?.text || _checkboxLocal4?.value || "").trim(),
        _dom2Local = _domLocal2.toLowerCase() === _aLocal5.toLowerCase() || _inputLocal3?.value === _aLocal5;
      r.updateField(_selectLocal2, e, _domLocal2 || (!0 === _choiceMatchArg ? _aLocal5 : void 0), t && _aLocal5 && !1 !== _choiceMatchArg && (!0 === _choiceMatchArg || _dom2Local) ? "filled" : "missed"), r.emit();
    };
    r?.emit();
    let _delayLocal = async (e, t, _helpersArg2, _choiceMatchArg2) => {
        try {
          return await _choiceMatchArg2();
        } catch (_choiceMatchLocal10) {
          throw _domLocal(e, t, _helpersArg2, !1), r && _selectLocal2 && _choiceMatchLocal10 instanceof cancellation.SkippedError && (r.updateField(_selectLocal2, e, _selectLocal2.fields.find(t => t.label === e)?.value, "skipped"), r.emit()), _choiceMatchLocal10;
        }
      },
      _geographicCountryLocal = document.getElementById(`education-institution-name-field-${_inputLocal2}`);
    _geographicCountryLocal && _aLocal4["Institution Name"] && (await _delayLocal("Institution Name", _geographicCountryLocal, _aLocal4["Institution Name"], () => fillInputTextField(_geographicCountryLocal, _aLocal4["Institution Name"]))), _domLocal("Institution Name", _geographicCountryLocal, _aLocal4["Institution Name"]);
    let _phoneCountryLocal = document.getElementById(`education-institution-type-field-${_inputLocal2}`),
      _fileUploadLocal = _aLocal4["Institution Information"] || _aLocal4["Institution Type"];
    _phoneCountryLocal && _fileUploadLocal && (_choiceMatchLocal1 = await _delayLocal("Institution Type", _phoneCountryLocal, _fileUploadLocal, () => fillPaycomSelect({
      $input: _phoneCountryLocal
    }, Array.isArray(_fileUploadLocal) ? _fileUploadLocal[0] : _fileUploadLocal))), _domLocal("Institution Type", _phoneCountryLocal, _fileUploadLocal, _choiceMatchLocal1);
    let _startApplicationDialogLocal = document.getElementById(`education-degree-field-${_inputLocal2}`),
      _getPaycomCoverLetterStatusLocal = _aLocal4.Degree;
    _startApplicationDialogLocal && _getPaycomCoverLetterStatusLocal && (_dayjsLocal8 = await _delayLocal("Degree", _startApplicationDialogLocal, _getPaycomCoverLetterStatusLocal, () => fillPaycomSelect({
      $input: _startApplicationDialogLocal
    }, Array.isArray(_getPaycomCoverLetterStatusLocal) ? _getPaycomCoverLetterStatusLocal[0] : _getPaycomCoverLetterStatusLocal))), _domLocal("Degree", _startApplicationDialogLocal, _getPaycomCoverLetterStatusLocal, _dayjsLocal8);
    let _CLocal = document.getElementById(`education-major-field-${_inputLocal2}`),
      _fillPaycomListboxLocal = _aLocal4.Major;
    await _delayLocal("Major", _CLocal, _fillPaycomListboxLocal, () => fillInputTextField(_CLocal, _fillPaycomListboxLocal)), _domLocal("Major", _CLocal, _fillPaycomListboxLocal);
    let _isPaycomPhoneCountryCodeButtonLocal = _aLocal4.Graduated,
      _TLocal = null;
    if (_isPaycomPhoneCountryCodeButtonLocal) {
      let e = Array.isArray(_isPaycomPhoneCountryCodeButtonLocal) ? _isPaycomPhoneCountryCodeButtonLocal[0] : _isPaycomPhoneCountryCodeButtonLocal,
        t = (0, xpath.getFirstOrderedNodeSafe)(`//input[@name='education-graduated-field-${_inputLocal2}' and @value='${e}']`);
      _TLocal = t, t && (await _delayLocal("Graduated", t, _isPaycomPhoneCountryCodeButtonLocal, () => (0, checkbox.fillCheckbox)(t, !0)));
    }
    _domLocal("Graduated", _TLocal, _isPaycomPhoneCountryCodeButtonLocal);
    let _FLocal = (0, xpath.getOrderedNodesSafe)(`//div[contains(@id, 'education-') and contains(@id, '-field-${_inputLocal2}') and @data-floating-error-notice-type='date']`, document.body);
    for (let e of _FLocal) {
      let t;
      let r = e.id?.toLowerCase() || "",
        _helpersLocal12 = e.textContent?.toLowerCase() || "",
        _choiceMatchLocal11 = null;
      r.includes("start") || _helpersLocal12.includes("start") ? _choiceMatchLocal11 = _aLocal4["Start Date"] : (r.includes("end") || _helpersLocal12.includes("end") || _helpersLocal12.includes("graduated")) && (_choiceMatchLocal11 = _aLocal4["End Date"] || _aLocal4["Graduation Date"]), _choiceMatchLocal11 && (t = await _delayLocal(r.includes("start") || _helpersLocal12.includes("start") ? "Start Date" : "End Date", e, _choiceMatchLocal11, () => fillPaycomDateGroup({
        $input: e
      }, _choiceMatchLocal11))), _domLocal(r.includes("start") || _helpersLocal12.includes("start") ? "Start Date" : "End Date", e, _choiceMatchLocal11, t);
    }
  }
}
async function fillAgreementCheckbox() {
  let e = document.querySelector('[id*="CheckboxOuterID-authorization-acknowledge-disclosure-field"]');
  e && ((0, dom.triggerEvents)(e, ["mousedown", "mouseup"]), await (0, delay.delay)(200));
}
async function uploadResume(e, t, r) {
  let _helpersLocal13 = (0, fileUpload.getPaycomFileUploadInput)("resume");
  if (console.info("[PaycomFileUpload] resume slot resolved", {
    found: !!_helpersLocal13,
    id: _helpersLocal13?.id || "",
    name: _helpersLocal13?.name || ""
  }), _helpersLocal13) {
    await (0, dom.uploadFiles)(_helpersLocal13, await (0, answer.fetchPdfAsBlob)(e), t, r, "Resume/CV");
    let _choiceMatchLocal12 = await (0, startApplicationDialog.dismissPaycomResumeParserDialog)(document, {
      activateButton: e => (0, dom.triggerEvents)(e, ["mousedown", "mouseup", "click"])
    });
    "button-missing" === _choiceMatchLocal12 || "still-open" === _choiceMatchLocal12 || "blocked" === _choiceMatchLocal12 ? console.warn("[Paycom-v3][resume-parser-dialog] upload result", {
      result: _choiceMatchLocal12,
      action: "attach-only"
    }) : console.info("[Paycom-v3][resume-parser-dialog] upload result", {
      result: _choiceMatchLocal12,
      action: "attach-only"
    });
  }
}
async function uploadCoverLetter(e, t, r) {
  let _helpersLocal14 = (0, fileUpload.getPaycomFileUploadInput)("coverLetter");
  return console.info("[PaycomFileUpload] cover letter slot resolved", {
    found: !!_helpersLocal14,
    id: _helpersLocal14?.id || "",
    name: _helpersLocal14?.name || ""
  }), !!_helpersLocal14 && (await (0, dom.uploadFiles)(_helpersLocal14, await (0, answer.fetchCoverLetterPdfAsBlob)(e), t, r, "Cover Letter", !1), !0);
}
