/**
 * Parcel module id: IgBHR
 * Resolved path: src/contents/pre-autofill-flow/account-flow.js
 * Dependencies:
 *   ./account-flow-state -> 8WOx2  =>  src/contents/pre-autofill-flow/account-flow-state.js
 *   ./core -> aKRqS  =>  src/contents/pre-autofill-flow/core.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~store/autofillResult -> hCUzf  =>  src/store/autofillResult.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_REFRESH_DELAY_MS", () => l),
  n.export(r, "cancelPreAutofillAccountFlow", () => c), n.export(r,
    "resolvePreAutofillAccountTransition", () => q), n.export(r,
    "resolvePreAutofillAccountPendingSubmit", () => U), n.export(r,
    "consumePreAutofillAccountTransition", () => G), n.export(r,
    "consumePreAutofillAccountPendingSubmit", () => K), n.export(r,
    "createPreAutofillAccountFlowAdapter", () => X);
var o = e("~store/autofillResult"),
  i = e("./core"),
  a = e("./account-flow-state");
n.exportAll(a, r);
let l = 500,
  s = null,
  u = null;

function c() {
  s?.abort(), s = null, (0, a.preAutofillAccountFlowSession).clear(), (0, a
      .preAutofillAccountTransitionSession).clear(), (0, o.useAutofillResultStore).getState()
    .stopCurrentFilling()
}

function d(e) {
  return e.aborted
}

function f(e) {
  return e.filter(e => !1 !== e.progress).map(e => ({
    label: e.label,
    metadata: p(e)
  }))
}

function p(e) {
  let t = {};
  return e.progressGroup && (t.progressGroup = e.progressGroup), e.waitForCredential && (t
    .setupCredential = e.waitForCredential), Object.keys(t).length > 0 ? {
    signup: t
  } : void 0
}

function m(e) {
  return e.map(e => e.label)
}

function h({
  steps: e,
  currentIndex: t
}) {
  return e.slice(t + 1).find(e => !1 !== e.progress)?.label ?? null
}

function g(e, t) {
  return !!e && "running" === e.status && !!e.completedSteps.length && (e.pageKind === t ||
    "sign_in" === t && "registration" === e.pageKind && e.completedSteps.some(e => (0, a
      .PRE_AUTOFILL_ACCOUNT_REGISTRATION_ENTRY_STEPS).includes(e)))
}

function b(e, t) {
  return g(e, t)
}

function y({
  session: e,
  state: t,
  ruleProgressSteps: r
}) {
  return g(e, t) && e ? e.pageKind === t ? e.completedSteps.filter(e => !r.includes(e)) : (0, a
    .PRE_AUTOFILL_ACCOUNT_REGISTRATION_ENTRY_STEPS).filter(t => e.completedSteps.includes(t)) : []
}

function v() {
  s?.abort(), s = null, (0, a.preAutofillAccountFlowSession).clear(), (0, a
      .preAutofillAccountTransitionSession).clear(), (0, o.useAutofillResultStore).getState()
    .stopCurrentFilling()
}

function w(e) {
  d(e) || v()
}

function S(e) {
  return "function" != typeof e.addEventListener || "function" != typeof e.removeEventListener ?
    null : e
}
async function E({
  credential: e,
  document: t,
  credentials: r,
  rereadCredential: n,
  progress: o,
  stepLabel: l,
  signal: s
}) {
  if (r[e]) return r;
  let u = S(t);
  return (0, a.debugPreAutofillAccountSetup)("runner", "wait-start", {
    credential: e,
    stepLabel: l,
    hasEmail: !!r.email,
    hasPassword: !!r.password
  }), new Promise(t => {
    let c = !1,
      d = !1,
      f = !1,
      p = null,
      m = null,
      h = () => {
        p && clearTimeout(p), m && clearTimeout(m), u?.removeEventListener(a
          .PRE_AUTOFILL_ACCOUNT_CREDENTIALS_CHANGED_EVENT, v), s.removeEventListener(
          "abort", b)
      },
      g = e => {
        c || (c = !0, h(), t(e))
      },
      b = () => g(null),
      y = () => {
        c || f || (f = !0, (0, a.debugPreAutofillAccountSetup)("runner", "prompt-show", {
          credential: e,
          stepLabel: l
        }), o.markCredentialMissing(l), (0, i.waitForPreAutofillFlowDebugStep)(
          `Missing value for ${l}`, s))
      };
    async function v() {
      if (!d && !c) {
        d = !0;
        try {
          let t = await n(r, e);
          (0, a.debugPreAutofillAccountSetup)("runner", "credential-read", {
            credential: e,
            stepLabel: l,
            hasEmail: !!t.email,
            hasPassword: !!t.password,
            found: !!t[e]
          }), t[e] && g(t)
        } catch {} finally {
          d = !1
        }
      }
    }
    u?.addEventListener(a.PRE_AUTOFILL_ACCOUNT_CREDENTIALS_CHANGED_EVENT, v), s
      .addEventListener("abort", b, {
        once: !0
      }), p = setTimeout(() => {
        g(null)
      }, a.PRE_AUTOFILL_ACCOUNT_PASSWORD_WAIT_TIMEOUT_MS), m = setTimeout(y, a
        .PRE_AUTOFILL_ACCOUNT_SETUP_PROMPT_DELAY_MS), v()
  })
}
async function x({
  context: e,
  progress: t,
  step: r,
  nextStep: n,
  action: o
}) {
  if (d(e.signal)) return !1;
  let a = await o(e);
  return !d(e.signal) && (!1 === a ? (t.markMissing(r), await (0, i
    .waitForPreAutofillFlowDebugStep)(`Missing ${r}`, e.signal), !1) : (t.complete(r, n),
    await (0, i.waitForPreAutofillFlowDebugStep)(n ?? `${r} completed`, e.signal), !d(e
      .signal)))
}

function C({
  context: e,
  intent: t,
  transitionStep: r,
  completedSteps: n,
  currentStep: i,
  targetUrl: l
}) {
  let s = {
      flowId: e.match.flowId,
      intent: t ?? e.state,
      sourceUrl: e.url,
      ...l ? {
        targetUrl: l
      } : {},
      sourcePageKind: e.match.pageKind,
      transitionStep: r,
      completedSteps: n,
      currentStep: i
    },
    u = (0, a.preAutofillAccountTransitionSession).peek(),
    c = u?.payload,
    d = o.useAutofillResultStore.getState().autoFillResult?.userAutoFillResponse?.[a
      .PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY
    ];
  if (c && A(c, s) && !d) {
    let e = Date.now() - (u?.createdAt ?? 0);
    return e > a.PRE_AUTOFILL_ACCOUNT_SUBMIT_REFRESH_DEBOUNCE_MS && ((0, a
      .preAutofillAccountTransitionSession).save(s), T()), {
      pending: c,
      didSubmit: !1
    }
  }
  return (0, a.preAutofillAccountTransitionSession).save(s), j() && D(), T(), {
    pending: s,
    didSubmit: !0
  }
}

function A(e, t) {
  return e.flowId === t.flowId && e.intent === t.intent && e.sourceUrl === t.sourceUrl && e
    .targetUrl === t.targetUrl && e.sourcePageKind === t.sourcePageKind && e.transitionStep === t
    .transitionStep && e.currentStep === t.currentStep && k(e.completedSteps, t.completedSteps)
}

function k(e, t) {
  let r = e ?? [],
    n = t ?? [];
  return r.length === n.length && r.every((e, t) => e === n[t])
}

function T() {
  "undefined" != typeof window && "function" == typeof window.dispatchEvent && window.dispatchEvent(
    new Event(a.PRE_AUTOFILL_ACCOUNT_TRANSITION_CHANGED_EVENT))
}

function F({
  context: e,
  state: t
}) {
  return {
    flowId: e.match.flowId,
    intent: t,
    sourceUrl: e.url,
    sourcePageKind: e.match.pageKind,
    transitionStep: "",
    completedSteps: []
  }
}

function I({
  context: e,
  progress: t,
  step: r,
  transition: n
}) {
  let o = n.includeStep ? (0, a.appendCompletedPreAutofillStep)(t.getCompletedSteps(), r.label) : t
    .getCompletedSteps(),
    i = n.getTargetUrl?.(e) ?? void 0;
  C({
    context: e,
    intent: n.intent,
    transitionStep: r.label,
    completedSteps: o,
    currentStep: n.currentStep ?? null,
    targetUrl: i
  })
}

function j() {
  let e = (0, o.useAutofillResultStore).getState(),
    t = e.autoFillResult;
  if (!t?.userAutoFillResponse?.[a.PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY]) return !1;
  let {
    [a.PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY]: r, ...n
  } = t.userAutoFillResponse;
  return e.setAutoFillResult({
    ...t,
    userAutoFillResponse: n
  }), !0
}

function D() {
  u = new Promise(e => {
    setTimeout(e, l)
  })
}
async function P() {
  let e = u;
  e && (await e, u === e && (u = null))
}

function _({
  state: e,
  steps: t,
  completedSteps: r,
  missingSteps: n = [],
  progressTitle: i
}) {
  let l = r,
    s = n,
    u = [];

  function c() {
    return {
      [a.PRE_AUTOFILL_ACCOUNT_SETUP_MISSING_STEPS_KEY]: u
    }
  }

  function d(r, n) {
    (0, a.preAutofillAccountProgress).set({
        pageKind: e,
        steps: t,
        completedSteps: l,
        missingSteps: s,
        currentStep: r,
        userAutoFillResponse: c(),
        persistSession: !1
      }), void 0 !== n ? (0, o.useAutofillResultStore).getState().setProgressTitle(n) : void 0 !==
      i && (0, o.useAutofillResultStore).getState().setProgressTitle(i)
  }
  return {
    complete: function(e, t) {
      l = (0, a.appendCompletedPreAutofillStep)(l, e), s = s.filter(t => t !== e), u = u.filter(
        t => t !== e), d(t)
    },
    markCredentialMissing: function(e) {
      s = [e], u = [e], d(e, a.PRE_AUTOFILL_ACCOUNT_SETUP_PROGRESS_TITLE)
    },
    markMissing: function(e) {
      s = [e], u = [], d(e)
    },
    setCurrent: function(e) {
      d(e)
    },
    getCompletedSteps: () => l
  }
}

function L({
  rules: e,
  match: t
}) {
  return e[t.pageKind] ?? null
}

function R(e) {
  let t = Object.fromEntries(Object.entries(e).map(([e, {
    state: t,
    entry: r,
    ctaText: n,
    progressTitle: o,
    completeEntryProgress: i,
    ...l
  }]) => [e, {
    ...l,
    ctaText: n ?? (0, a.getPreAutofillAccountFlowCtaText)(t)
  }]));
  return (0, i.definePreAutofillPageRules)(t)
}
async function O({
  context: e,
  steps: t
}) {
  let r = [];
  for (let n of t)(!n.shouldRun || await n.shouldRun(e)) && r.push(n);
  return r
}
async function M({
  context: e,
  credentialReaders: t,
  progress: r,
  step: n
}) {
  let o = n.waitForCredential;
  if (!o || e.credentials[o]) return !0;
  try {
    let r = await t.rereadCredential(e.credentials, o);
    if (e.credentials = r, r[o]) return !0
  } catch {}
  let i = await E({
    credential: o,
    document: e.document,
    credentials: e.credentials,
    rereadCredential: t.rereadCredential,
    progress: r,
    stepLabel: n.label,
    signal: e.signal
  });
  return !!i && (e.credentials = i, !0)
}
async function N({
  context: e,
  credentialReaders: t,
  progress: r,
  steps: n
}) {
  for (let [o, i] of n.entries()) {
    if (d(e.signal)) return !1;
    let a = h({
      steps: n,
      currentIndex: o
    });
    i.transition?.timing === "before" && I({
      context: e,
      progress: r,
      step: i,
      transition: i.transition
    });
    let l = await M({
      context: e,
      credentialReaders: t,
      progress: r,
      step: i
    });
    if (!l || d(e.signal)) return !1;
    let s = async () => {
      let t = "jd" === e.match.pageKind ? r.getCompletedSteps() : [];
      return i.run({
        ...e,
        onSubmit: () => !1 === i.submitSession ? {
          pending: {
            ...F({
              context: e,
              state: e.state
            }),
            transitionStep: i.label,
            completedSteps: t,
            currentStep: null
          },
          didSubmit: !0
        } : C({
          context: e,
          transitionStep: i.label,
          completedSteps: t,
          currentStep: null
        })
      })
    };
    if (!1 === i.progress) {
      let e = await s();
      if (!1 === e) return !1
    } else {
      let t = await x({
        context: e,
        progress: r,
        step: i.label,
        nextStep: a,
        action: s
      });
      if (!t) return !1
    }
    i.transition?.timing === "after" && I({
      context: e,
      progress: r,
      step: i,
      transition: i.transition
    })
  }
  return !0
}
async function $({
  context: e,
  rule: t,
  credentialReaders: r
}) {
  let n = e.signal ?? new AbortController().signal,
    l = t.state,
    u = {
      email: "",
      password: ""
    },
    c = {
      ...e,
      document: e.document,
      state: l,
      signal: n,
      credentials: u,
      onSubmit: () => ({
        pending: F({
          context: e,
          state: l
        }),
        didSubmit: !1
      })
    },
    p = await O({
      context: c,
      steps: t.steps
    }),
    m = f(p),
    h = _({
      state: l,
      steps: m,
      completedSteps: [],
      progressTitle: t.progressTitle
    }),
    g = m[0]?.label ?? null;
  if (h.setCurrent(g), await (0, i.waitForPreAutofillFlowDebugStep)(g ?? "Start account entry",
    n), d(n)) return;
  let b = await N({
    context: c,
    credentialReaders: r,
    progress: h,
    steps: p
  });
  if (!b) {
    w(n), (0, a.preAutofillAccountTransitionSession).clear();
    return
  }
  if (t.completeEntryProgress && !d(n)) {
    let e = o.useAutofillResultStore.getState().autoFillResult?.userAutoFillResponse;
    (0, a.preAutofillAccountProgress).set({
      pageKind: l,
      steps: m,
      completedSteps: h.getCompletedSteps(),
      currentStep: null,
      status: "completed",
      userAutoFillResponse: e,
      persistSession: !1
    }), (0, o.useAutofillResultStore).getState().stopCurrentFilling(), s = null
  }
}
async function B({
  context: e,
  rule: t,
  credentialReaders: r
}) {
  let n = e.signal ?? new AbortController().signal,
    l = t.state,
    u = await r.getInitialCredentials();
  if (d(n)) return;
  let c = (0, a.preAutofillAccountFlowSession).get(),
    p = b(c, l);
  p && (0, a.preAutofillAccountFlowSession).clear();
  let h = {
      document: e.document,
      state: l,
      signal: n
    },
    g = {
      ...e,
      ...h,
      entrySession: p ? c : null,
      credentials: u,
      onSubmit: () => ({
        pending: F({
          context: e,
          state: l
        }),
        didSubmit: !1
      })
    },
    v = await O({
      context: g,
      steps: t.steps
    });
  if (d(n)) return;
  let S = f(v),
    E = y({
      session: c,
      state: l,
      ruleProgressSteps: m(S)
    }),
    x = [...E, ...S],
    C = _({
      state: l,
      steps: x,
      completedSteps: E
    }),
    A = S[0]?.label ?? null;
  if (C.setCurrent(A), await (0, i.waitForPreAutofillFlowDebugStep)(A ?? "Start account form", n),
    d(n)) return;
  let k = await N({
    context: g,
    credentialReaders: r,
    progress: C,
    steps: v
  });
  if (!k) {
    w(n);
    return
  }
  if (d(n)) return;
  let T = o.useAutofillResultStore.getState().autoFillResult?.userAutoFillResponse;
  (0, a.preAutofillAccountProgress).set({
    pageKind: l,
    steps: x,
    completedSteps: C.getCompletedSteps(),
    currentStep: null,
    status: "completed",
    userAutoFillResponse: T,
    persistSession: !1
  }), (0, o.useAutofillResultStore).getState().stopCurrentFilling(), s = null
}

function q({
  pending: e,
  currentUrl: t,
  currentMatch: r
}) {
  return t === e.sourceUrl && r?.flowId === e.flowId && r.pageKind === e.sourcePageKind ?
    "still_on_source_page" : r ? r.flowId === e.flowId || "reset_password" === e.intent &&
    "workday_account_flow" === r.flowId && "sign_in" === r.pageKind ? "continue_account_flow" :
    "ignore" : "start_standard_autofill"
}
let U = q;

function H(e) {
  e.completedSteps?.length && (0, a.preAutofillAccountFlowSession).save({
    pageKind: e.intent,
    completedSteps: e.completedSteps,
    currentStep: e.currentStep ?? null,
    status: "running"
  })
}

function Y(e) {
  return !e || e <= 0 ? Promise.resolve() : new Promise(t => {
    setTimeout(t, e)
  })
}

function z({
  pending: e,
  canStartStandardAutofill: t
}) {
  return !t || t(e) ? Promise.resolve() : new Promise(r => {
    let n = null,
      o = !1,
      i = () => {
        t(e) && (null !== n ? clearInterval(n) : o = !0, r())
      };
    n = setInterval(i, a.PRE_AUTOFILL_ACCOUNT_STANDARD_READY_CHECK_INTERVAL_MS), o &&
      clearInterval(n)
  })
}

function V({
  pending: e,
  submitError: t
}) {
  let r = (0, o.useAutofillResultStore).getState(),
    n = r.autoFillResult?.userAutoFillResponse?.[a.PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY],
    i = n && "object" == typeof n ? n : null;
  if (i?.message === t.message && i.rawMessage === t.rawMessage) return;
  let l = e.submitStep ?? e.transitionStep ?? null,
    s = r.autoFillResult?.fieldRequiredStatus?.map(e => e.label).filter(e => "string" == typeof e &&
      !!e),
    u = s?.length ? s : (0, a.preAutofillAccountProgress).getSteps(e.intent),
    c = l && !u.includes(l) ? [...u, l] : u,
    d = l ? (0, a.appendCompletedPreAutofillStep)(r.autoFillResult?.filledFields ?? e
      .completedSteps ?? [], l) : r.autoFillResult?.filledFields ?? e.completedSteps ?? [];
  (0, a.preAutofillAccountProgress).set({
    pageKind: e.intent,
    steps: c,
    completedSteps: d,
    currentStep: null,
    status: "completed",
    persistSession: !1,
    userAutoFillResponse: {
      [a.PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY]: t
    }
  }), r.setIsFilling(!1)
}

function W() {
  let e = (0, o.useAutofillResultStore).getState();
  e.setFillingMode("standard_autofill"), e.setProgressTitle(null), e.setAutoFillResult(null), e
    .setHasClickedAutoFill(!0), e.setIsFilling(!0)
}
async function G({
  currentUrl: e,
  currentMatch: t,
  startCurrentPreAutofillFlow: r,
  startStandardAutofill: n,
  canStartStandardAutofill: i,
  hasStandardAutofillSignal: l,
  isTransitionInScope: s,
  standardAutofillStartDelayMs: u,
  onTransitionComplete: c,
  detectSourcePageSubmitError: d
}) {
  let f = (0, a.preAutofillAccountTransitionSession).peek();
  if (!f) return !1;
  let p = q({
    pending: f.payload,
    currentUrl: e,
    currentMatch: t
  });
  if ("still_on_source_page" === p) {
    await P();
    let e = await d?.(f.payload);
    return e && V({
      pending: f.payload,
      submitError: e
    }), !1
  }
  if (s?.(f.payload) === !1) return (0, a.preAutofillAccountTransitionSession).consume(), (0, a
      .preAutofillAccountFlowSession).clear(), (0, o.useAutofillResultStore).getState()
    .stopCurrentFilling(), !0;
  if ("start_standard_autofill" === p && (l?.(f.payload) ?? i?.(f.payload)) === !1) return !1;
  let m = (0, a.preAutofillAccountTransitionSession).consume();
  if (!m) return !1;
  (0, a.preAutofillAccountFlowSession).clear();
  let h = q({
    pending: m.payload,
    currentUrl: e,
    currentMatch: t
  });
  return "continue_account_flow" === h && t ? (H(m.payload), await r(t)) :
    "start_standard_autofill" === h ? (W(), await z({
      pending: m.payload,
      canStartStandardAutofill: i
    }), await Y(u), await n(), await c?.({
      currentUrl: e,
      pending: m.payload
    })) : "still_on_source_page" === h && (0, o.useAutofillResultStore).getState()
    .stopCurrentFilling(), !0
}
let K = G;

function X({
  flowId: e,
  rules: t,
  ...r
}) {
  let n = R(t),
    l = J(r);
  return {
    flowId: e,
    detect: t => (0, i.resolvePreAutofillPageRule)({
      flowId: e,
      pageRules: n,
      context: t
    }),
    async start(e) {
      s?.abort(), s = new AbortController;
      let r = L({
        rules: t,
        match: e.match
      });
      if (r) {
        if ((0, o.useAutofillResultStore).getState().setIsFilling(!0), r.entry) {
          await $({
            context: {
              ...e,
              signal: s.signal
            },
            rule: r,
            credentialReaders: l
          });
          return
        }
        await B({
          context: {
            ...e,
            signal: s.signal
          },
          rule: r,
          credentialReaders: l
        })
      }
    },
    shouldResume(e) {
      let r = L({
        rules: t,
        match: e.match
      });
      return !!(r && !r.entry && b((0, a.preAutofillAccountFlowSession).get(), r.state))
    }
  }
}

function J(e) {
  return "getCredentials" in e ? {
    getInitialCredentials: e.getCredentials,
    rereadCredential: () => e.getCredentials()
  } : {
    async getInitialCredentials() {
      let t = await e.getEmail(),
        r = await e.getPassword();
      return {
        email: t,
        password: r
      }
    },
    async rereadCredential(t, r) {
      if ("email" === r) {
        let r = await e.getEmail(),
          n = await e.getPassword().catch(() => t.password);
        return {
          ...t,
          email: r,
          password: n
        }
      }
      let n = await e.getPassword();
      return {
        ...t,
        password: n
      }
    }
  }
}

