/**
 * Parcel module id: da2o3
 * Resolved path: src/contents/sites/resolve-trace-tracking.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  return e ? {
    ...e,
    search_request_schema: {
      ...e.search_request_schema,
      headers: {
        ...e.search_request_schema.headers
      },
      params: e.search_request_schema.params.map(e => ({
        ...e
      }))
    }
  } : null
}

function i(e) {
  let t = o(e);
  if (!t) return null;
  let {
    original_answer: r,
    ...n
  } = t, {
    headers: i,
    ...a
  } = n.search_request_schema;
  return {
    ...n,
    search_request_schema: a
  }
}

function a(e, t, r) {
  let n = i(t);
  if (!n) return null;
  let o = String(r ?? "");
  return {
    fieldType: e,
    request: {
      ...n,
      original_answer: String(t?.original_answer ?? "")
    },
    result: {
      value: o,
      selected_values: o ? [o] : []
    }
  }
}
n.defineInteropFlag(r), n.export(r, "cloneAutofillOperation", () => o), n.export(r,
  "cloneAutofillOperationCommon", () => i), n.export(r, "buildResolveTraceField", () => a)

