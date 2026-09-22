/**
 * Parcel module id: 7VR5i
 * Resolved path: contents/methods/cover-letter.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/cancellation -> luJfs  =>  _tilde_contents/methods/cancellation.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~utils/current-job-id -> cAdEa  =>  _tilde_utils/current-job-id.js
  *
 * Deobfuscated (pretty + export/import rename). Parcel e()/r preserved.
 */

var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");
helpers.defineInteropFlag(r), helpers.export(r, "DEFAULT_AUTOFILL_COVER_LETTER_PROMPT", () => DEFAULT_AUTOFILL_COVER_LETTER_PROMPT), helpers.export(r, "markTextCoverLetterRules", () => markTextCoverLetterRules), helpers.export(r, "prepareCoverLetterFillTask", () => prepareCoverLetterFillTask), helpers.export(r, "findCoverLetterRules", () => findCoverLetterRules), helpers.export(r, "withoutCoverLetterRules", () => withoutCoverLetterRules), helpers.export(r, "parseAutofillCoverLetterResumeId", () => parseAutofillCoverLetterResumeId), helpers.export(r, "getCurrentAutofillJobId", () => getCurrentAutofillJobId), helpers.export(r, "startAutofillCoverLetterRequest", () => startAutofillCoverLetterRequest), helpers.export(r, "onAutofillCoverLetterGenerated", () => onAutofillCoverLetterGenerated), helpers.export(r, "resolveCoverLetterTextForFill", () => resolveCoverLetterTextForFill), helpers.export(r, "fillCoverLetterTask", () => fillCoverLetterTask), helpers.export(r, "fillPreparedCoverLetterTask", () => fillPreparedCoverLetterTask), helpers.export(r, "formatCoverLetterMarkdownAsText", () => formatCoverLetterMarkdownAsText), helpers.export(r, "applyCoverLetterTextToAnswer", () => applyCoverLetterTextToAnswer);
var messaging = e("@plasmohq/messaging"),
  cancellation = e("~contents/methods/cancellation"),
  enums = e("~core/enums"),
  currentJobId = e("~utils/current-job-id");
let DEFAULT_AUTOFILL_COVER_LETTER_PROMPT = "Write a tailored cover letter for this job application using the candidate's resume and the job description. Keep it concise, specific, and employer-facing: open with clear interest in the role, connect the candidate's most relevant experience to the company's needs, and close with a confident next step. Do not invent facts, do not include placeholders, and output only the cover letter text.";
function u(e) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}
function c(e) {
  if (!e) return !1;
  let t = e.tagName?.toLowerCase(),
    r = (e.type || e.getAttribute?.("type") || "")?.toLowerCase() ?? "";
  return "textarea" === t || ("input" === t ? !["button", "checkbox", "file", "hidden", "image", "radio", "reset", "submit"].includes(r) : e.isContentEditable || e.getAttribute?.("contenteditable") === "true");
}
function d(e) {
  let t = u(e ?? "");
  return !(!t.includes("cover letter") || /\b(upload|attach|attachment|attached|file|resume|cv)\b/.test(t) || /^(do|did|have|has|will|would|can|could|is|are)\b/.test(t));
}
function f(e) {
  return e.type === enums.FIELD_TYPE.TEXT && c(e.$input) && d(e.label);
}
function markTextCoverLetterRules(e = []) {
  return e.map(e => {
    let t = e.children,
      r = f(e) ? {
        ...e,
        type: enums.FIELD_TYPE.COVER_LETTER
      } : e;
    return Array.isArray(t) ? {
      ...r,
      children: markTextCoverLetterRules(t)
    } : r;
  });
}
function prepareCoverLetterFillTask({
  rules: e,
  ...t
}) {
  let r = markTextCoverLetterRules(e),
    _helpersLocal = findCoverLetterRules(r),
    _messagingLocal = (e = t.coverLetter) => startAutofillCoverLetterRequest({
      ...t,
      coverLetter: e,
      rules: r
    });
  return {
    rules: r,
    task: _helpersLocal.length ? {
      rules: _helpersLocal,
      coverLetterRequest: _messagingLocal(),
      startCoverLetterRequest: _messagingLocal,
      lateRequestAttempted: !1
    } : null
  };
}
function findCoverLetterRules(e = []) {
  let t = [];
  for (let r of e) {
    r.type === enums.FIELD_TYPE.COVER_LETTER && t.push(r);
    let e = r.children;
    Array.isArray(e) && t.push(...findCoverLetterRules(e));
  }
  return t;
}
function withoutCoverLetterRules(e = []) {
  return e.filter(e => e.type !== enums.FIELD_TYPE.COVER_LETTER).map(e => {
    let t = e.children;
    return Array.isArray(t) ? {
      ...e,
      children: withoutCoverLetterRules(t)
    } : e;
  });
}
function b(e) {
  return !!e?.markdown?.trim();
}
function parseAutofillCoverLetterResumeId(e) {
  if (null == e || "" === e) return;
  if ("number" == typeof e) return e;
  let t = e.trim();
  return t || void 0;
}
function getCurrentAutofillJobId(e) {
  let t = "undefined" != typeof window ? window.location.href : "";
  return (0, currentJobId.resolveCurrentJobId)({
    explicitJobId: e,
    pageUrl: t
  });
}
async function w(e) {
  let t = await (0, messaging.sendToBackground)({
    name: "generateAutofillCoverLetter",
    body: e
  });
  return t?.data ?? null;
}
function startAutofillCoverLetterRequest({
  rules: e,
  coverLetter: t,
  jobId: r,
  userPrompt: _helpersLocal2,
  resumeId: _messagingLocal2,
  tailorId: _cancellationLocal,
  coverLetterId: _enumsLocal,
  generateCoverLetter: _currentJobIdLocal = w
}) {
  let _uLocal = findCoverLetterRules(e);
  if (!_uLocal.length || b(t)) return null;
  let _cLocal = getCurrentAutofillJobId(r),
    _dLocal = _helpersLocal2?.trim() || DEFAULT_AUTOFILL_COVER_LETTER_PROMPT;
  if (!_cLocal || !_dLocal) return null;
  let _fLocal = parseAutofillCoverLetterResumeId(_messagingLocal2),
    _markTextCoverLetterRulesLocal = {
      jobId: _cLocal,
      userPrompt: _dLocal,
      ...(_fLocal ? {
        resumeId: _fLocal
      } : {}),
      ...(_cancellationLocal ? {
        tailorId: _cancellationLocal
      } : {}),
      ...(_enumsLocal ? {
        coverLetterId: _enumsLocal
      } : {})
    };
  return _currentJobIdLocal(_markTextCoverLetterRulesLocal).then(e => {
    let t = e ?? null;
    return t?.coverLetterId && C(t), t;
  }).catch(() => null);
}
let E = new Set();
function onAutofillCoverLetterGenerated(e) {
  return E.add(e), () => E.delete(e);
}
function C(e) {
  for (let t of E) try {
    t(e);
  } catch (e) {
    console.warn("[autofill cover letter] listener threw", e);
  }
}
function A(e, t = []) {
  let r = e?.regular ?? {},
    _helpersLocal3 = e => {
      for (let r of t) {
        let t = u(r.label),
          _helpersLocal4 = Object.keys(e).find(e => u(e) === t),
          _messagingLocal4 = _helpersLocal4 ? e[_helpersLocal4] : void 0,
          _cancellationLocal3 = k(_messagingLocal4);
        if (_cancellationLocal3) return _cancellationLocal3;
      }
      return "";
    },
    _messagingLocal3 = _helpersLocal3(r);
  if (_messagingLocal3) return _messagingLocal3;
  let _cancellationLocal2 = Object.fromEntries((e?.fillDataList ?? []).filter(e => e?.name).map(e => [e.name, e.value]));
  return _helpersLocal3(_cancellationLocal2);
}
function k(e) {
  return Array.isArray(e) ? e.map(e => String(e ?? "").trim()).find(Boolean) ?? "" : String(e ?? "").trim();
}
async function resolveCoverLetterTextForFill({
  coverLetter: e,
  coverLetterRequest: t,
  answer: r,
  coverLetterRules: _helpersLocal5
}) {
  let _messagingLocal5 = formatCoverLetterMarkdownAsText(e?.markdown);
  if (_messagingLocal5) return _messagingLocal5;
  let _cancellationLocal4 = t ? await t : null,
    _enumsLocal2 = formatCoverLetterMarkdownAsText(_cancellationLocal4?.markdown);
  return _enumsLocal2 || A(r, _helpersLocal5);
}
async function fillCoverLetterTask({
  coverLetterRules: e = [],
  coverLetter: t,
  coverLetterRequest: r,
  answer: _helpersLocal6,
  operationConfig: _messagingLocal6,
  updateMissedProgress: _currentJobIdLocal2
}) {
  if (!e.length) return;
  let _DEFAULT_AUTOFILL_COVER_LETTER_PROMPTLocal = await resolveCoverLetterTextForFill({
    coverLetter: t,
    coverLetterRequest: r,
    answer: _helpersLocal6,
    coverLetterRules: e
  });
  (0, cancellation.checkpoint)();
  let _uLocal2 = _messagingLocal6[enums.FIELD_TYPE.COVER_LETTER] ?? _messagingLocal6[enums.FIELD_TYPE.TEXT];
  if (!_DEFAULT_AUTOFILL_COVER_LETTER_PROMPTLocal || !_uLocal2) {
    for (let t of e) _currentJobIdLocal2?.(t.label);
    return;
  }
  let _cLocal2 = Object.fromEntries(e.map(e => [e.label, _DEFAULT_AUTOFILL_COVER_LETTER_PROMPTLocal]));
  for (let t of e) (0, cancellation.checkpoint)(), await _uLocal2(t, _cLocal2);
}
function I(e) {
  return {
    ...e,
    [enums.FIELD_TYPE.COVER_LETTER]: e[enums.FIELD_TYPE.COVER_LETTER] ?? e[enums.FIELD_TYPE.TEXT]
  };
}
async function fillPreparedCoverLetterTask({
  task: e,
  coverLetter: t,
  answer: r,
  operationConfig: _helpersLocal7,
  updateMissedProgress: _messagingLocal7
}) {
  if (!e?.rules.length) return;
  let _cancellationLocal5 = e.coverLetterRequest;
  _cancellationLocal5 || e.lateRequestAttempted || (e.lateRequestAttempted = !0, _cancellationLocal5 = e.startCoverLetterRequest(t), e.coverLetterRequest = _cancellationLocal5), await fillCoverLetterTask({
    coverLetterRules: e.rules,
    coverLetter: t,
    coverLetterRequest: _cancellationLocal5,
    answer: r,
    updateMissedProgress: _messagingLocal7,
    operationConfig: I(_helpersLocal7)
  });
}
function D(e) {
  return e.replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, '"').replace(/&#39;/gi, "'");
}
function P(e) {
  let t = e.split("\n").map(e => e.trim()).filter(Boolean),
    r = t.findIndex(e => /^(dear\b|to\b.*hiring manager|i am applying\b|i'?m applying\b)/i.test(e));
  return (r < 0 && (r = t.findIndex(e => /[.!?]$/.test(e))), r <= 0) ? t.join("\n\n") : t.slice(r).join("\n\n");
}
function _(e) {
  let t = e.split("\n").map(e => e.trim()).filter(Boolean);
  if (t.length <= 1) return t.join("\n\n");
  let r = t.at(-1) ?? "",
    _helpersLocal8 = t.at(-2) ?? "",
    _messagingLocal8 = /^(thank you|thanks|sincerely|best|regards|warm regards)\b/i.test(_helpersLocal8),
    _cancellationLocal6 = _messagingLocal8 && !/[.;:!?]$/.test(_helpersLocal8) && _helpersLocal8.split(/\s+/).length <= 4,
    _enumsLocal3 = /^[A-Za-z][A-Za-z .'-]{1,60}$/.test(r) && !/[.!?]$/.test(r);
  return _cancellationLocal6 && _enumsLocal3 ? t.slice(0, -2).join("\n\n") : _messagingLocal8 && _enumsLocal3 ? t.slice(0, -1).join("\n\n") : t.join("\n\n");
}
function formatCoverLetterMarkdownAsText(e) {
  if (!e?.trim()) return "";
  let t = D(e.replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n\n").replace(/<[^>]+>/g, "")),
    r = t.replace(/<br\s*\/?>/gi, "\n").replace(/\r\n/g, "\n").replace(/```[\s\S]*?```/g, e => e.replace(/^```[^\n]*\n?/, "").replace(/\n?```$/, "").trim()).replace(/`([^`]+)`/g, "$1").replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/^>\s?/gm, "").replace(/^#{1,6}\s*/gm, "").replace(/^\s*[-*+]\s+/gm, "").replace(/^\s*\d+\.\s+/gm, "").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/__([^_]+)__/g, "$1").replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "$1").replace(/(?<!_)_([^_]+)_(?!_)/g, "$1").replace(/\n{3,}/g, "\n\n").trim();
  return _(P(r));
}
function applyCoverLetterTextToAnswer(e, t, r = ["Cover Letter"]) {
  let _helpersLocal9 = formatCoverLetterMarkdownAsText(t?.markdown);
  if (!_helpersLocal9) return e;
  let _messagingLocal9 = new Set(r.map(e => u(e))),
    _cancellationLocal7 = e => !!e && _messagingLocal9.has(u(e)),
    _enumsLocal4 = !1,
    _currentJobIdLocal3 = Object.fromEntries(Object.entries(e.regular ?? {}).map(([e, t]) => _cancellationLocal7(e) ? (_enumsLocal4 = !0, [e, _helpersLocal9]) : [e, t])),
    _DEFAULT_AUTOFILL_COVER_LETTER_PROMPTLocal2 = e.fillDataList?.map(e => _cancellationLocal7(e?.name) ? (_enumsLocal4 = !0, {
      ...e,
      value: _helpersLocal9
    }) : e);
  return _enumsLocal4 ? {
    ...e,
    regular: _currentJobIdLocal3,
    ...(_DEFAULT_AUTOFILL_COVER_LETTER_PROMPTLocal2 ? {
      fillDataList: _DEFAULT_AUTOFILL_COVER_LETTER_PROMPTLocal2
    } : {})
  } : e;
}
