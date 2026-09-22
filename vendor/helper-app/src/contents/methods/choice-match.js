/**
 * Parcel module id: 6mkI4
 * Resolved path: src/contents/methods/choice-match.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
  *
 * Deobfuscated (pretty + export/import rename). Parcel e()/r preserved.
 */

var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");
function normalizeChoiceText(e) {
  return "string" != typeof e && "number" != typeof e ? "" : String(e).normalize("NFKC").replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/\s+/g, " ").trim().toLowerCase();
}
function isExactChoiceMatch(e, t) {
  let r = normalizeChoiceText(t);
  return !!r && normalizeChoiceText(e) === r;
}
function findExactChoice(e, t, r, _helpersArg) {
  if (!normalizeChoiceText(t)) return;
  let _findExactChoiceLocal = e.filter(e => isExactChoiceMatch(r(e), t));
  if (_findExactChoiceLocal.length) return 1 === _findExactChoiceLocal.length ? _findExactChoiceLocal[0] : void 0;
  if (!_helpersArg) return;
  let l = e.filter(e => isExactChoiceMatch(_helpersArg(e), t));
  return 1 === l.length ? l[0] : void 0;
}
helpers.defineInteropFlag(r), helpers.export(r, "normalizeChoiceText", () => normalizeChoiceText), helpers.export(r, "isExactChoiceMatch", () => isExactChoiceMatch), helpers.export(r, "findExactChoice", () => findExactChoice);
