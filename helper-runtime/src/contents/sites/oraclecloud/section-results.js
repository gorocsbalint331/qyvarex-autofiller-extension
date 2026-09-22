/**
 * Parcel module id: 9JNPk
 * Resolved path: src/contents/sites/oraclecloud/section-results.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  return {
    index: e.index,
    ...e.title ? {
      title: e.title
    } : {},
    ...e.subtitle ? {
      subtitle: e.subtitle
    } : {},
    status: e.status,
    fields: e.fields.map(e => ({
      label: e.label,
      ...e.value ? {
        value: e.value
      } : {},
      status: e.status
    }))
  }
}

function i(e, t, r) {
  let n = t.rows.map(e => ({
      ...o(e),
      index: e.index + r
    })),
    i = new Set(n.map(e => e.index)),
    a = (e?.rows ?? []).filter(e => !i.has(e.index)).map(o);
  return {
    type: t.type,
    label: t.label,
    rows: [...a, ...n].sort((e, t) => e.index - t.index)
  }
}

function a(e, t) {
  return {
    type: e.type,
    label: e.label,
    rows: e.rows.map(e => e.index !== t ? o(e) : {
      ...o(e),
      status: "missed",
      fields: e.fields.map(e => ({
        label: e.label,
        ...e.value ? {
          value: e.value
        } : {},
        status: "skipped" === e.status ? "skipped" : "missed"
      }))
    })
  }
}
n.defineInteropFlag(r), n.export(r, "mergeOracleSectionResult", () => i), n.export(r,
  "markOracleSectionResultRowMissed", () => a)

