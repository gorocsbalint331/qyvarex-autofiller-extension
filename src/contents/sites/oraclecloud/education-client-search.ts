// @ts-nocheck
/**
 * Oracle Cloud — education client-search resolve loop.
 */

import * as autofillClientSearch from "../../../api/autofill-client-search.js";
let i = 5,
  a = 25;
function l(e) {
  return e.normalize("NFKC").replace(/\s+/g, " ").trim().toLowerCase();
}
function s(e) {
  return e
    .map((e2) => ({
      candidate_key: String(e2.candidate_key ?? "").trim(),
      value: String(e2.value ?? "").trim(),
      text: String(e2.text ?? "")
        .replace(/\s+/g, " ")
        .trim(),
    }))
    .filter((e2) => !!e2.value && !!e2.text)
    .slice(0, a);
}
function u(e, t, r) {
  return {
    round_id: e,
    search_input: t,
    options: r.map((e2, t2) => ({
      candidate_key: `candidate-${t2 + 1}`,
      value: e2.value,
      text: e2.text,
    })),
  };
}
function c(e) {
  return "options" in e
    ? {
        ...e,
        options: e.options.map((e2) => ({
          ...e2,
        })),
      }
    : {
        ...e,
      };
}
async function runOracleEducationClientSearch({
  fieldType: e,
  originalAnswer: t,
  deps: r,
}) {
  let n = [],
    a2 = [],
    d2 = [],
    f = "",
    p = {
      source: "oraclecloud",
      field_type: e,
      question: autofillClientSearch.getAutofillClientSearchQuestion(e),
      original_answer: t.trim(),
    },
    m = (t2) => ({
      fieldType: e,
      success: false,
      actions: n,
      rounds: a2,
      failureReason: t2,
    });
  for (;;) {
    let t2;
    try {
      t2 = await r.requestStep(c(p));
    } catch {
      return m("transport-error");
    }
    if ((n.push(t2.action), "REQUEST_SEARCH" === t2.action)) {
      let e2;
      if (d2.length >= i) return m("search-limit-exceeded");
      let n2 = String(t2.resolve_session_id ?? "").trim();
      if (!n2) return m("missing-resolve-session");
      if (f && f !== n2) return m("resolve-session-changed");
      f = n2;
      let o2 = l(t2.search_input);
      if (
        !o2 ||
        d2.some((e3) => l(e3.search_input) === o2) ||
        d2.some((e3) => e3.round_id === t2.round_id)
      )
        return m("repeated-search");
      try {
        e2 = s(await r.captureCandidates(t2.search_input));
      } catch {
        return m("candidate-capture-error");
      }
      let c2 = u(t2.round_id, t2.search_input, e2);
      (d2.push(c2),
        a2.push({
          searchInput: c2.search_input,
          candidateCount: c2.options.length,
        }),
        (p = {
          resolve_session_id: f,
          round_id: c2.round_id,
          options: c2.options.map((e3) => ({
            ...e3,
          })),
        }));
      continue;
    }
    if ("SELECT_OPTIONS" === t2.action) {
      let o2 = t2.selected_values[0],
        i2 = d2.flatMap((e2) =>
          e2.options
            .filter((e3) => e3.text === o2)
            .map((t3) => ({
              candidate: t3,
              searchInput: e2.search_input,
            })),
        );
      if (1 !== i2.length) return m("ambiguous-selected-text");
      let l2 = i2[0];
      try {
        let t3 = await r.commitCandidate(
          {
            value: l2.candidate.value,
            text: l2.candidate.text,
          },
          {
            searchInput: l2.searchInput,
          },
        );
        return t3
          ? {
              fieldType: e,
              success: true,
              actions: n,
              rounds: a2,
            }
          : m("candidate-not-committed");
      } catch {
        return m("candidate-commit-error");
      }
    }
    return m(t2.action.toLowerCase());
  }
}

export { runOracleEducationClientSearch };
