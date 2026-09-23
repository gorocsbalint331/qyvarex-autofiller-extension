// @ts-nocheck
/**
 * Rippling location operation — readable TypeScript source of truth.
 */

import * as observer from "../../methods/observer.js"
import * as profileLocationOriginalAnswer from "../profile-location-original-answer.ts"
import * as enums from "../../../core/enums.js"
let l = "/maps/api/place/js/AutocompletionService.GetPredictionsJson";
function isRipplingCanonicalLocationRule(e) {
  return e.type === enums.FIELD_TYPE.TEXT && "location" === e.label.trim().toLowerCase() && (e.$input.matches('input[data-qa="location-input"]') || !!e.$input.closest('[data-testid="location"]'));
}
function getRipplingLocationOriginalAnswer(e, t) {
  let r = profileLocationOriginalAnswer.getProfileLocationOriginalAnswer(e);
  return r.value ? r.value : "string" == typeof t ? t.trim() : "";
}
function extractRipplingGooglePlacesPredictionRequest(e = "undefined" == typeof document ? void 0 : document, t) {
  if (!e) return "";
  let r = Array.from(e.scripts ?? [], (e2) => e2.src?.trim()).filter((e2) => !!e2), n = e.defaultView?.performance?.getEntriesByType("resource").map((e2) => e2.name?.trim()).filter((e2) => !!e2);
  for (let e2 of (n?.length && r.push(...n), r.reverse())) if (e2) try {
    let r2 = new URL(e2);
    if ("maps.googleapis.com" !== r2.hostname || r2.pathname !== l) continue;
    let n2 = r2.search.slice(1).split("&"), o2 = n2.find((e3) => /^1s[^=]+$/.test(e3));
    if (!o2 || t && decodeURIComponent(o2.slice(2).replace(/\+/g, "%20")) !== t || !r2.searchParams.get("key") || !r2.searchParams.get("token")) continue;
    return e2;
  } catch {
    continue;
  }
  return "";
}
function d(e, t) {
  let r = e.value, n = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
  n ? n.call(e, t) : e.value = t;
  let o2 = e._valueTracker;
  o2?.setValue(r), e.dispatchEvent(new InputEvent("input", { bubbles: true, cancelable: true, data: t || null, inputType: t ? "insertText" : "deleteContentBackward" }));
}
async function bootstrapRipplingGooglePlacesPredictionRequest(e, t, r = document, n = observer.waitForCondition) {
  let i2 = c(r, t);
  return i2 || (e.focus({ preventScroll: true }), d(e, t), await n(() => !!c(r, t), { timeout: 3e3, interval: 50, observeTarget: r.head ?? r.body }), d(e, ""), e.dispatchEvent(new Event("change", { bubbles: true })), c(r, t));
}
function buildRipplingLocationOperation({ currentUrl: e, originalAnswer: t, predictionRequestUrl: r }) {
  let n = r.indexOf("?"), o2 = r.slice(0, n), i2 = r.slice(n + 1).split("&"), a2 = i2.find((e2) => e2.startsWith("token=")), l2 = a2 ? decodeURIComponent(a2.slice(6)) : "", s2 = `${o2}?${i2.filter((e2) => e2 !== a2).join("&")}`;
  return { field_type: "location", question: "Location", description: "Replay Rippling's authenticated Google Places city prediction request and select one canonical display description.", original_answer: t, search_request_schema: { url: s2, allowed_methods: ["GET"], headers: { accept: "*/*", referer: e }, params: [{ name: "token", location: "query", description: "Google Maps protocol token copied unchanged from Rippling's authenticated request.", default_value: l2, isMetaParam: true }] } };
}
function getRipplingResolvedLocationValue(e) {
  if (e?.result?.action !== "SELECT_OPTIONS") return "";
  let t = e.result.selected_values[0];
  return "string" == typeof t ? t.trim() : "";
}

export {
  bootstrapRipplingGooglePlacesPredictionRequest,
  buildRipplingLocationOperation,
  extractRipplingGooglePlacesPredictionRequest,
  getRipplingLocationOriginalAnswer,
  getRipplingResolvedLocationValue,
  isRipplingCanonicalLocationRule,
}
