/**
 * Parcel module id: h479b
 * Resolved path: src/contents/methods/track.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   lodash-es -> p4RBe  =>  lodash-es.js
 *   ~core/autofill-progress-protocol -> 2aELO  =>  src/core/autofill-progress-protocol.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/utils -> aTDh5  =>  src/core/utils.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
  *
 * Deobfuscated (pretty + export/import rename). Parcel e()/r preserved.
 */

var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");
helpers.defineInteropFlag(r), helpers.export(r, "dedup_fields", () => dedup_fields), helpers.export(r, "sendProgressMessage", () => sendProgressMessage), helpers.export(r, "sendProgressPatchMessage", () => sendProgressPatchMessage), helpers.export(r, "sendHttpStatusMessage", () => sendHttpStatusMessage), helpers.export(r, "generateSubmitStatus", () => generateSubmitStatus), helpers.export(r, "postStatus", () => postStatus), helpers.export(r, "getSubmitButton", () => getSubmitButton), helpers.export(r, "bindSubmitButton", () => bindSubmitButton);
var lodashEs = e("lodash-es"),
  messaging = e("@plasmohq/messaging"),
  autofillProgressProtocol = e("~core/autofill-progress-protocol"),
  enums = e("~core/enums"),
  utils = e("~core/utils"),
  xpath = e("~core/xpath"),
  string = e("~utils/string");
function dedup_fields(e, t) {
  let r = new Set([]),
    _helpersLocal = [],
    _lodashEsLocal = [];
  for (let t of e) t && (t = t.replace("*", "").trim(), r.has(t) || (_helpersLocal.push(t), r.add(t)));
  for (let e of (r = new Set([]), t)) e && (e = e.replace("*", "").trim(), r.has(e) || (_lodashEsLocal.push(e), r.add(e)));
  return {
    missingFields: _helpersLocal,
    filledFields: _lodashEsLocal
  };
}
function f(e) {
  "undefined" != typeof window && window.top.postMessage((0, string.cleanObject)({
    type: enums.MESSAGE_EVENTS.updateResultFromIframe,
    data: e
  }), {
    targetOrigin: "*"
  });
}
function sendProgressMessage(e, t = (0, autofillProgressProtocol.createAutofillProgressSessionId)(), r) {
  f({
    version: autofillProgressProtocol.AUTOFILL_PROGRESS_PROTOCOL_VERSION,
    kind: "snapshot",
    sessionId: t,
    data: {
      missingFields: e.missingFields,
      filledFields: e.filledFields,
      fieldRequiredStatus: e.fieldRequiredStatus.map(e => ({
        label: e.label,
        required: e.required
      })),
      fieldItemResults: e.fieldItemResults,
      sectionResults: e.sectionResults,
      currentField: e.currentField ?? null,
      userAutoFillResponse: r
    }
  });
}
function sendProgressPatchMessage(e) {
  f({
    version: autofillProgressProtocol.AUTOFILL_PROGRESS_PROTOCOL_VERSION,
    kind: "patch",
    ...e
  });
}
function sendHttpStatusMessage(e) {
  window !== window.top && window.top?.postMessage({
    type: enums.MESSAGE_EVENTS.sendHttpStatusIframe,
    httpStatus: string.isStringNumber(e) ? Number(e) : e
  }, {
    targetOrigin: "*"
  });
}
function generateSubmitStatus(e, t, r) {
  let _helpersLocal2 = t.fieldRequiredStatus.map(e => e.label),
    _messagingLocal = t.fieldRequiredStatus.filter(e => e.required).map(e => e.label),
    _autofillProgressProtocolLocal = (0, lodashEs.intersection)(_helpersLocal2, t.filledFields),
    _enumsLocal = (0, lodashEs.intersection)(_messagingLocal, t.filledFields),
    _xpathLocal = {
      status: e,
      url: window.location.href,
      version: (0, utils.getExtensionVersion)(),
      requiredFields: _messagingLocal,
      missingFields: t.missingFields,
      filledFields: t.filledFields,
      filledCount: _autofillProgressProtocolLocal.length,
      requiredCount: _messagingLocal.length,
      filledRequiredCount: _enumsLocal.length,
      filledRequiredFields: _enumsLocal,
      totalCount: _helpersLocal2.length,
      totalFields: _helpersLocal2,
      userInput: [],
      rulesTime: r.rulesParseStartTime && r.requestStartTime ? Number(((r.requestStartTime - r.rulesParseStartTime) / 1e3).toFixed(2)) : 0,
      requestTime: r.requestStartTime && r.fillStartTime ? Number(((r.fillStartTime - r.requestStartTime) / 1e3).toFixed(2)) : 0,
      fillTime: r.fillStartTime ? Number(((Date.now() - r.fillStartTime) / 1e3).toFixed(2)) : 0,
      formData: (0, utils.collectFormDataWithRepeatingGroups)()
    };
  return _xpathLocal;
}
async function postStatus(e, t, r) {
  await (0, messaging.sendToBackground)({
    name: "saveSubmitStatus",
    body: {
      submitStatus: generateSubmitStatus(e, t, r),
      status: "filling"
    }
  });
}
function getSubmitButton(e) {
  if (!e) return;
  let t = e.trim().toLowerCase(),
    r = Array.from(document.querySelectorAll('button, input[type="submit"], input[type="button"], [role="button"]')),
    _helpersLocal3 = r.find(e => {
      let r = e.textContent?.trim().toLowerCase() || e.getAttribute("value")?.trim().toLowerCase() || e.getAttribute("aria-label")?.trim().toLowerCase() || "";
      return r === t;
    });
  if (_helpersLocal3) return _helpersLocal3;
  let _lodashEsLocal2 = r.find(e => {
    let r = e.textContent?.trim().toLowerCase() || e.getAttribute("value")?.trim().toLowerCase() || e.getAttribute("aria-label")?.trim().toLowerCase() || "";
    return r.includes(t);
  });
  if (_lodashEsLocal2) return _lodashEsLocal2;
  let _messagingLocal2 = `//*[contains(text(), ${(0, xpath.escapeXPath)(e)}) or contains(@value, ${(0, xpath.escapeXPath)(e)})]`;
  return (0, xpath.getFirstOrderedNode)(_messagingLocal2);
}
function bindSubmitButton(e, t, r, _helpersArg) {
  let _lodashEsLocal3 = getSubmitButton(e);
  _lodashEsLocal3 && _lodashEsLocal3.addEventListener("click", e => w(e, t, r), {
    signal: _helpersArg
  });
}
async function w(e, t, r) {
  let _helpersLocal4 = e.target,
    _autofillProgressProtocolLocal2 = generateSubmitStatus("submit", t, r),
    _enumsLocal2 = ["field-error-msg", "helper-text--error"],
    _utilsLocal = _enumsLocal2.map(e => `.${e}`).join(","),
    _xpathLocal2 = document.querySelectorAll(_utilsLocal);
  (0, lodashEs.isEmpty)(_xpathLocal2) && (await (0, messaging.sendToBackground)({
    name: "saveSubmitStatus",
    body: {
      submitStatus: _autofillProgressProtocolLocal2,
      status: "submit",
      submittedForm: _helpersLocal4
    }
  }));
}
