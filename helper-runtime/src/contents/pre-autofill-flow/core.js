/**
 * Parcel module id: aKRqS
 * Resolved path: src/contents/pre-autofill-flow/core.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "PRE_AUTOFILL_FLOW_DEBUG_DELAY_MS", () => o), n.export(r,
    "definePreAutofillPageRules", () => a), n.export(r, "parsePreAutofillUrl", () => l), n.export(r,
    "hasPreAutofillElement", () => s), n.export(r, "hasPreAutofillElementText", () => u), n.export(
    r, "resolvePreAutofillPageRule", () => m), n.export(r, "createPreAutofillAdapter", () => h), n
  .export(r, "getPreAutofillFlowDebugDelayMs", () => g), n.export(r,
    "waitForPreAutofillFlowDebugStep", () => b), n.export(r, "resolvePreAutofillFlow", () => y), n
  .export(r, "startPreAutofillFlow", () => v), n.export(r, "shouldResumePreAutofillFlow", () => w);
let o = 1e3;

function i({
  pageKind: e,
  rule: t
}) {
  if (!t.ctaText) throw Error(`Missing pre-autofill CTA text for page kind: ${e}`);
  return t.ctaText
}

function a(e) {
  return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, {
    ...t,
    pageKind: e,
    ctaText: i({
      pageKind: e,
      rule: t
    })
  }]))
}

function l(e) {
  try {
    return new URL(e)
  } catch {
    return null
  }
}

function s(e, t) {
  return null !== e.querySelector(t)
}

function u({
  document: e,
  selector: t,
  text: r
}) {
  let n = e.querySelector(t),
    o = n?.textContent?.trim() ?? "";
  return "string" == typeof r ? o.toLowerCase() === r.toLowerCase() : r.test(o)
}

function c(e) {
  return Array.isArray(e) ? e : Object.values(e)
}

function d(e) {
  return e ? Array.isArray(e) ? e : [e] : []
}

function f(e, t) {
  if (e.title && !e.title.test(t.document.title.trim())) return !1;
  let r = d(e.url);
  return (!(r.length > 0) || !!r.some(e => e.test(t.parsedUrl.pathname))) && (!e.element || !!s(t
    .document, e.element)) && (!e.elementText || !!u({
    document: t.document,
    selector: e.elementText.selector,
    text: e.elementText.text
  }))
}

function p(e, t) {
  if (e.excludeUrl?.some(e => e.test(t.parsedUrl.pathname))) return !1;
  if (e.detect) return e.detect(t);
  let r = e.all ?? [];
  if (r.length > 0 && !r.every(e => f(e, t))) return !1;
  let n = e.any ?? [];
  return 0 === n.length ? r.length > 0 : n.some(e => f(e, t))
}

function m({
  flowId: e,
  pageRules: t,
  context: r
}) {
  let n = l(r.url);
  if (!n) return null;
  let o = {
      ...r,
      parsedUrl: n
    },
    i = c(t).find(e => p(e, o));
  return i ? {
    flowId: e,
    pageKind: i.pageKind,
    ctaText: i.ctaText
  } : null
}

function h({
  flowId: e,
  pageRules: t,
  start: r,
  shouldResume: n
}) {
  return {
    flowId: e,
    detect: r => m({
      flowId: e,
      pageRules: t,
      context: r
    }),
    start: r,
    shouldResume: n
  }
}

function g() {
  return o
}

function b(e, t) {
  let r = g();
  return r <= 0 || t?.aborted ? Promise.resolve() : (console.debug(
    `[pre-autofill-flow] ${e}; sleeping ${r}ms for UI inspection`), new Promise(e => {
    let n = setTimeout(e, r);
    t?.addEventListener("abort", () => {
      clearTimeout(n), e()
    }, {
      once: !0
    })
  }))
}

function y({
  targetName: e,
  registry: t,
  ...r
}) {
  let n = t[e] ?? [];
  for (let t of n) {
    let n = t.detect({
      ...r,
      targetName: e
    });
    if (n) return n
  }
  return null
}
async function v({
  targetName: e,
  registry: t,
  match: r,
  ...n
}) {
  let o = t[e] ?? [],
    i = o.find(e => e.flowId === r.flowId);
  return !!i?.start && (await i.start({
    ...n,
    targetName: e,
    match: r
  }), !0)
}

function w({
  targetName: e,
  registry: t,
  match: r,
  ...n
}) {
  let o = t[e] ?? [],
    i = o.find(e => e.flowId === r.flowId);
  return i?.shouldResume?.({
    ...n,
    targetName: e,
    match: r
  }) ?? !1
}

