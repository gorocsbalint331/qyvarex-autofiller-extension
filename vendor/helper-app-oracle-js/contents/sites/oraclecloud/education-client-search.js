/**
 * Parcel module id: 883w6
 * Resolved path: contents/sites/oraclecloud/education-client-search.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~api/autofill-client-search -> 3KzDR  =>  _tilde_api/autofill-client-search.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "runOracleEducationClientSearch", () => d);
var o = e("~api/autofill-client-search");
let i = 5,
  a = 25;

function l(e) {
  return e.normalize("NFKC").replace(/\s+/g, " ").trim().toLowerCase()
}

function s(e) {
  return e.map(e => ({
    candidate_key: String(e.candidate_key ?? "").trim(),
    value: String(e.value ?? "").trim(),
    text: String(e.text ?? "").replace(/\s+/g, " ").trim()
  })).filter(e => !!e.value && !!e.text).slice(0, a)
}

function u(e, t, r) {
  return {
    round_id: e,
    search_input: t,
    options: r.map((e, t) => ({
      candidate_key: `candidate-${t+1}`,
      value: e.value,
      text: e.text
    }))
  }
}

function c(e) {
  return "options" in e ? {
    ...e,
    options: e.options.map(e => ({
      ...e
    }))
  } : {
    ...e
  }
}
async function d({
  fieldType: e,
  originalAnswer: t,
  deps: r
}) {
  let n = [],
    a = [],
    d = [],
    f = "",
    p = {
      source: "oraclecloud",
      field_type: e,
      question: (0, o.getAutofillClientSearchQuestion)(e),
      original_answer: t.trim()
    },
    m = t => ({
      fieldType: e,
      success: !1,
      actions: n,
      rounds: a,
      failureReason: t
    });
  for (;;) {
    let t;
    try {
      t = await r.requestStep(c(p))
    } catch {
      return m("transport-error")
    }
    if (n.push(t.action), "REQUEST_SEARCH" === t.action) {
      let e;
      if (d.length >= i) return m("search-limit-exceeded");
      let n = String(t.resolve_session_id ?? "").trim();
      if (!n) return m("missing-resolve-session");
      if (f && f !== n) return m("resolve-session-changed");
      f = n;
      let o = l(t.search_input);
      if (!o || d.some(e => l(e.search_input) === o) || d.some(e => e.round_id === t.round_id))
        return m("repeated-search");
      try {
        e = s(await r.captureCandidates(t.search_input))
      } catch {
        return m("candidate-capture-error")
      }
      let c = u(t.round_id, t.search_input, e);
      d.push(c), a.push({
        searchInput: c.search_input,
        candidateCount: c.options.length
      }), p = {
        resolve_session_id: f,
        round_id: c.round_id,
        options: c.options.map(e => ({
          ...e
        }))
      };
      continue
    }
    if ("SELECT_OPTIONS" === t.action) {
      let o = t.selected_values[0],
        i = d.flatMap(e => e.options.filter(e => e.text === o).map(t => ({
          candidate: t,
          searchInput: e.search_input
        })));
      if (1 !== i.length) return m("ambiguous-selected-text");
      let l = i[0];
      try {
        let t = await r.commitCandidate({
          value: l.candidate.value,
          text: l.candidate.text
        }, {
          searchInput: l.searchInput
        });
        return t ? {
          fieldType: e,
          success: !0,
          actions: n,
          rounds: a
        } : m("candidate-not-committed")
      } catch {
        return m("candidate-commit-error")
      }
    }
    return m(t.action.toLowerCase())
  }
}

