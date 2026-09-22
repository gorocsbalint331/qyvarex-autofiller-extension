/**
 * Parcel module id: 62ozi
 * Resolved path: src/hooks/usePreAutofillFlowRunner.js
 * Dependencies:
 *   ./usePreAutofillFlow -> dK8Va  =>  src/hooks/usePreAutofillFlow.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~contents/pre-autofill-flow/account-flow -> IgBHR  =>  src/contents/pre-autofill-flow/account-flow.js
 *   ~contents/pre-autofill-flow/core -> aKRqS  =>  src/contents/pre-autofill-flow/core.js
 *   ~contents/pre-autofill-flow/registry -> lfzZV  =>  src/contents/pre-autofill-flow/registry.js
 *   ~contents/pre-autofill-flow/tracking -> 3L3xh  =>  src/contents/pre-autofill-flow/tracking.js
 *   ~store/autofillResult -> hCUzf  =>  src/store/autofillResult.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "usePreAutofillFlowRunner", () => f);
var o = e("react"),
  i = e("~contents/pre-autofill-flow/account-flow"),
  a = e("~contents/pre-autofill-flow/core"),
  l = e("~contents/pre-autofill-flow/registry"),
  s = e("~contents/pre-autofill-flow/tracking"),
  u = e("~store/autofillResult"),
  c = e("./usePreAutofillFlow");
let d = 1e3;

function f({
  targetName: e,
  url: t,
  isFilling: r,
  startStandardAutofill: n,
  onFlowStart: f,
  onAccountTransitionStart: p,
  onAccountTransitionError: m
}) {
  let h = (0, u.useAutofillResultStore)(e => e.setIsFilling),
    g = (0, u.useAutofillResultStore)(e => e.setFillingMode),
    b = (0, u.useAutofillResultStore)(e => e.setProgressTitle),
    [y, v] = (0, o.useState)(0),
    [w, S] = (0, o.useState)(0),
    E = (0, o.useRef)(new Set),
    x = (0, o.useRef)(null),
    C = (0, o.useRef)(null),
    A = (0, c.usePreAutofillFlow)({
      targetName: e,
      url: t,
      enabled: !r
    }),
    k = (0, o.useCallback)(() => {
      v(e => e + 1)
    }, []),
    T = (0, o.useCallback)(async () => {
      if (!A) return !1;
      f?.(), g("pre_autofill_flow"), b(null), h(!0), await (0, a
        .waitForPreAutofillFlowDebugStep)("Scanning the page");
      try {
        let r = await (0, a.startPreAutofillFlow)({
          targetName: e,
          url: t,
          document,
          match: A,
          registry: l.PRE_AUTOFILL_FLOW_REGISTRY,
          startStandardAutofill: n
        });
        return r || h(!1), r
      } catch (e) {
        return console.error(e), h(!1), !0
      }
    }, [A, f, g, h, b, n, e, t]);
  return (0, o.useEffect)(() => {
    if (!A || r) return;
    let o = (0, a.shouldResumePreAutofillFlow)({
      targetName: e,
      url: t,
      document,
      match: A,
      registry: l.PRE_AUTOFILL_FLOW_REGISTRY,
      startStandardAutofill: n
    });
    if (!o) return;
    let i = !1;
    return f?.(), g("signup_autofill_flow"), h(!0), (0, a.startPreAutofillFlow)({
      targetName: e,
      url: t,
      document,
      match: A,
      registry: l.PRE_AUTOFILL_FLOW_REGISTRY,
      startStandardAutofill: n
    }).catch(e => {
      console.error(e), i || h(!1)
    }), () => {
      i = !0
    }
  }, [r, A, f, g, h, n, e, t]), (0, o.useEffect)(() => {
    let e = () => {
      p?.(), S(e => e + 1), k()
    };
    return window.addEventListener(i.PRE_AUTOFILL_ACCOUNT_TRANSITION_CHANGED_EVENT, e), () => {
      window.removeEventListener(i.PRE_AUTOFILL_ACCOUNT_TRANSITION_CHANGED_EVENT, e)
    }
  }, [p, k]), (0, o.useEffect)(() => {
    if (!(0, i.preAutofillAccountTransitionSession).peek()) return;
    p?.();
    let e = !1,
      t = 0,
      r = () => {
        e || (t && window.cancelAnimationFrame(t), t = window.requestAnimationFrame(() => {
          t = 0, e || k()
        }))
      },
      n = document.body || document.documentElement,
      o = n && "undefined" != typeof MutationObserver ? new MutationObserver(r) : null;
    o?.observe(n, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["data-automation-id", "aria-label", "role", "class", "style"]
    });
    let a = window.setInterval(r, d),
      l = window.setTimeout(() => {
        window.clearInterval(a)
      }, i.PRE_AUTOFILL_ACCOUNT_TRANSITION_TTL_MS);
    return r(), () => {
      e = !0, o?.disconnect(), t && window.cancelAnimationFrame(t), window.clearInterval(a),
        window.clearTimeout(l)
    }
  }, [r, p, k, e, w, t]), (0, o.useEffect)(() => {
    if (!(0, i.preAutofillAccountTransitionSession).peek()) return;
    let r = !1,
      o = (0, a.resolvePreAutofillFlow)({
        targetName: e,
        url: t,
        document,
        registry: l.PRE_AUTOFILL_FLOW_REGISTRY
      });
    return (0, i.consumePreAutofillAccountTransition)({
      currentUrl: t,
      currentMatch: o,
      startCurrentPreAutofillFlow: async r => {
        f?.(), g("signup_autofill_flow"), h(!0), await (0, a.startPreAutofillFlow)({
          targetName: e,
          url: t,
          document,
          match: r,
          registry: l.PRE_AUTOFILL_FLOW_REGISTRY,
          startStandardAutofill: n
        })
      },
      startStandardAutofill: n,
      canStartStandardAutofill: () => (0, l.canStartPreAutofillStandardAutofill)({
        targetName: e,
        url: t,
        document
      }),
      hasStandardAutofillSignal: () => (0, l.hasPreAutofillStandardAutofillSignal)({
        targetName: e,
        url: t,
        document
      }),
      standardAutofillStartDelayMs: (0, l.getPreAutofillStandardAutofillStartDelayMs)({
        targetName: e,
        url: t,
        document
      }),
      onTransitionComplete: (0, l.getPreAutofillAccountTransitionCompleteHandler)(e),
      isTransitionInScope: r => (0, l.isPreAutofillAccountTransitionInScope)({
        targetName: e,
        url: t,
        pending: r
      }),
      detectSourcePageSubmitError: async n => {
        let o = (0, i.preAutofillAccountTransitionSession).peek();
        if (!o) return null;
        let a = [o.createdAt, n.flowId, n.sourceUrl, n.sourcePageKind, n.transitionStep ??
          n.submitStep ?? ""
        ].join("|");
        if (E.current.has(a)) return null;
        E.current.add(a);
        try {
          let o = await (0, l.detectPreAutofillAccountSourcePageSubmitError)({
              targetName: e,
              url: t,
              document,
              pending: n
            }),
            i = o ? [o.message, o.rawMessage ?? ""].join("|") : null;
          return i ? r || (o.messageType && C.current !== o.messageType && (C.current = o
            .messageType, (0, s.sendWorkdayAccountSubmitWarningExposure)({
              targetName: e,
              url: t,
              pending: n,
              submitError: o
            })), x.current !== i && (x.current = i, m?.())) : (x.current = null, C
            .current = null), o
        } finally {
          E.current.delete(a)
        }
      }
    }).catch(e => {
      console.error(e), r || h(!1)
    }), () => {
      r = !0
    }
  }, [r, A, m, p, f, g, h, n, e, y, t]), {
    match: A,
    ctaText: A?.ctaText ?? "Autofill",
    startMatchedFlow: T
  }
}

