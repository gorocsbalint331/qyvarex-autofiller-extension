/**
 * Parcel module id: 1A34s
 * Resolved path: contents/sites/zohorecruit/section-results.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  _tilde_contents/methods/cancellation.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "createZohoRecordResult", () => a);
var o = e("~contents/methods/answer"),
  i = e("~contents/methods/cancellation");

function a(e, t, r, n, a) {
  let l = (0, o.createSectionResultReporter)(e, a.forRecord(t, [r])),
    s = l.ensureRow(0, n),
    u = "children" in r && Array.isArray(r.children) ? r.children : [];
  for (let e of u) l.updateField(s, e.label, void 0, "missed");
  l.emit();
  let c = e => {
    if (null == e) return;
    let t = (Array.isArray(e) ? e.join(", ") : String(e)).trim();
    return t || void 0
  };
  async function d(r, n, o) {
    let a = c(n);
    l.updateField(s, r.label, a, "pending"), l.emit();
    try {
      let n = await o(),
        i = !1 !== n && a ? "filled" : "missed";
      return l.updateField(s, r.label, a, i), l.emit(), console.info(
        "[ZohoRecruit][section-result] field", {
          type: e,
          index: t,
          label: r.label,
          status: i
        }), n
    } catch (n) {
      throw l.updateField(s, r.label, a, n instanceof i.SkippedError ? "skipped" : "missed"), l
        .emit(), console.info("[ZohoRecruit][section-result] field-error", {
          type: e,
          index: t,
          label: r.label,
          reason: n instanceof i.SkippedError ? "skipped" : "operation-error"
        }), n
    }
  }
  return {
    run: d,
    operationConfig: e => Object.fromEntries(Object.entries(e).map(([e, t]) => [e, (e, r, n) => {
      let i;
      try {
        i = (0, o.findValueInRecord)(e.label, r)
      } catch {}
      return d(e, i, () => t?.(e, r, n))
    }]))
  }
}

