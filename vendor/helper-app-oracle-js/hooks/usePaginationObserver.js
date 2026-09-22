/**
 * Parcel module id: 7xg1Q
 * Resolved path: hooks/usePaginationObserver.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~contents/crawler/target -> kkscK  =>  _tilde_contents/crawler/target.js
 *   ~contents/pre-autofill-flow/registry -> lfzZV  =>  _tilde_contents/pre-autofill-flow/registry.js
 *   ~core/pagenation -> l1kUK  =>  _tilde_core/pagenation.js
 *   ~store/autofillResult -> hCUzf  =>  _tilde_store/autofillResult.js
 *   ~store/profile -> 9omPD  =>  _tilde_store/profile.js
 *   ~store/setting -> 1Q6Yp  =>  _tilde_store/setting.js
 *   ~utils/trace -> 1ik0r  =>  _tilde_utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "usePaginationObserver", () => p);
var o = e("react"),
  i = e("~contents/crawler/target"),
  a = e("~core/pagenation"),
  l = e("~contents/pre-autofill-flow/registry"),
  s = e("~store/autofillResult"),
  u = e("~store/profile"),
  c = e("~store/setting"),
  d = n.interopDefault(c),
  f = e("~utils/trace");
let p = e => {
  let t = (0, d.default)(e => e.automaticallyTurnPage),
    r = (0, s.useAutofillResultStore)(e => e.hasClickedAutoFill),
    [n, c] = (0, o.useState)(0),
    p = (0, u.useProfileStore)(e => e.userStage),
    m = (0, s.useAutofillResultStore)(e => e.setIsFilling),
    h = (0, s.useAutofillResultStore)(e => e.setAutoFillResult),
    g = (0, o.useRef)(0);
  (0, o.useEffect)(() => {
    let n;
    let o = (0, i.getTargetName)(),
      s = t => {
        if ("oraclecloud" === o && !t?.clearOnly) {
          let e = Date.now();
          if (e - g.current < 2500) return;
          g.current = e
        }
        if (!t?.clearOnly && (0, l.shouldSuppressStandardAutofillForPreAutofillTransition)({
            targetName: o,
            canStartStandardAutofill: (0, l.canStartPreAutofillStandardAutofill)({
              targetName: o,
              url: window.location.href,
              document
            })
          })) {
          "adpMyJobs" === o && console.info("[ADP MyJobs][Pagination] Autofill suppressed", {
            reason: "pre-autofill-transition"
          });
          return
        }
        if (h(null), !t?.clearOnly) {
          m(!0);
          let r = (0, a.resolvePaginationAutofillStartDelay)(t?.delay);
          "adpMyJobs" === o && console.info("[ADP MyJobs][Pagination] Autofill scheduled", {
            pageNumber: t?.page_number ?? null,
            observerDelayMs: t?.delay ?? 0,
            totalDelayMs: r
          }), setTimeout(() => {
            m(!0), "adpMyJobs" === o && console.info(
              "[ADP MyJobs][Pagination] Autofill started", {
                pageNumber: t?.page_number ?? null
              }), e().catch(e => {
              if ("adpMyJobs" === o) {
                console.error("[ADP MyJobs][Pagination] Autofill start failed", {
                  errorName: e instanceof Error ? e.name : "unknown"
                });
                return
              }
              console.error(e)
            })
          }, r)
        }(0, f.trackEvent)("kafka_autofill_log", {
          user_id: p?.userId,
          currentUrl: window.location.href,
          fill_auto: !t?.clearOnly,
          page_number: t?.page_number,
          page_title: t?.page_title
        }), c(e => e + 1)
      },
      u = e => {
        if (!r) return;
        let t = e instanceof CustomEvent && e.detail || {},
          n = Number(t.previousIndex),
          o = (0, a.getOracleCloudStepState)();
        !o.isApplySection || o.isTerminal || Number.isFinite(n) && o.index <= n || s({
          delay: 200,
          page_number: o.pageNumber,
          page_title: o.title
        })
      };
    "oraclecloud" === o && window.addEventListener(a.ORACLE_CLOUD_CONTINUE_EVENT, u);
    let d = !!a.OBSERVER_LIST[o],
      b = (0, a.shouldRegisterPaginationObserver)({
        siteName: o,
        automaticallyTurnPage: t,
        hasObserver: d
      });
    if ("adpMyJobs" === o && console.info("[ADP MyJobs][Pagination] observer registration", {
        automaticallyTurnPage: t,
        hasClickedAutoFill: r,
        hasObserver: d,
        shouldObserve: b
      }), !b) return () => {
      "oraclecloud" === o && window.removeEventListener(a.ORACLE_CLOUD_CONTINUE_EVENT, u),
        clearTimeout(n)
    };
    let y = (0, a.OBSERVER_LIST)[o](s, r),
      [v, w] = y || [];
    return v?.(), () => {
      "oraclecloud" === o && window.removeEventListener(a.ORACLE_CLOUD_CONTINUE_EVENT, u), w?.
        (), clearTimeout(n)
    }
  }, [r, n, t, e])
}

