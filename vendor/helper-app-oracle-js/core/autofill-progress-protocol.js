/**
 * Parcel module id: 2aELO
 * Resolved path: core/autofill-progress-protocol.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "AUTOFILL_PROGRESS_PROTOCOL_VERSION", () => o), n.export(r,
    "createAutofillProgressSessionId", () => a), n.export(r, "isAutofillProgressMessage", () => l),
  n.export(r, "applyAutofillProgressMessage", () => p);
let o = 2,
  i = 0;

function a() {
  return i += 1, `autofill-${Date.now()}-${i}`
}

function l(e) {
  if (!e || "object" != typeof e) return !1;
  let t = e;
  return t.version === o && ("snapshot" === t.kind || "patch" === t.kind) && "string" == typeof t
    .sessionId
}

function s(e) {
  return e.replace(/\*/g, "").replace(/\s+/g, " ").trim().toLowerCase()
}

function u(e) {
  return {
    status: e.status,
    requestedItems: [...e.requestedItems],
    succeededItems: [...e.succeededItems],
    failedItems: [...e.failedItems]
  }
}

function c(e) {
  return e.map(e => ({
    type: e.type,
    label: e.label,
    rows: e.rows.map(e => ({
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
    }))
  }))
}

function d(e) {
  return {
    filledFields: [...e.filledFields ?? []],
    missingFields: [...e.missingFields ?? []],
    fieldRequiredStatus: (e.fieldRequiredStatus ?? []).map(e => ({
      label: e.label,
      required: e.required
    })),
    fieldItemResults: Object.fromEntries(Object.entries(e.fieldItemResults ?? {}).map(([e, t]) => [
      e, u(t)
    ])),
    ...e.sectionResults ? {
      sectionResults: c(e.sectionResults)
    } : {},
    currentField: e.currentField ?? null,
    userAutoFillResponse: e.userAutoFillResponse ?? {}
  }
}

function f(e) {
  if (!e || "object" != typeof e) return !1;
  let t = e;
  return Array.isArray(t.filledFields) && Array.isArray(t.missingFields) && Array.isArray(t
    .fieldRequiredStatus)
}

function p(e, t) {
  if (!l(t)) return f(t) ? {
    sessionId: null,
    data: d(t)
  } : e;
  if ("snapshot" === t.kind) return {
    sessionId: t.sessionId,
    data: d(t.data)
  };
  if (!e.data || e.sessionId !== t.sessionId) return e;
  let r = e.data;
  if ("sectionResults" in t && (r = {
      ...r,
      ...t.sectionResults ? {
        sectionResults: c(t.sectionResults)
      } : {
        sectionResults: void 0
      }
    }), "currentField" in t && (r = {
      ...r,
      currentField: t.currentField ?? null
    }), t.fieldResult) {
    let {
      fieldResult: e
    } = t, n = s(e.label), o = e => e.filter(e => s(e) !== n), i = o(r.filledFields), a = o(r
      .missingFields), l = e.itemResult ? {
      ...r.fieldItemResults,
      [n]: u(e.itemResult)
    } : r.fieldItemResults;
    r = {
      ...r,
      filledFields: "filled" === e.status ? [...i, e.label] : i,
      missingFields: "missing" === e.status ? [...a, e.label] : a,
      fieldItemResults: l
    }
  }
  if (t.requiredField) {
    let e = s(t.requiredField.label),
      n = r.fieldRequiredStatus.findIndex(t => s(t.label) === e),
      o = -1 === n ? [...r.fieldRequiredStatus, t.requiredField] : r.fieldRequiredStatus.map((e,
        r) => r === n ? {
          ...e,
          required: t.requiredField.required
        } : e);
    r = {
      ...r,
      fieldRequiredStatus: o
    }
  }
  return r === e.data ? e : {
    ...e,
    data: r
  }
}

