/**
 * Parcel module id: 9mB6w
 * Resolved path: hooks/useVersionUpdate.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~core/version-update-ui -> 2DXqr  =>  _tilde_core/version-update-ui.js
 *   ~store/autofillResult -> hCUzf  =>  _tilde_store/autofillResult.js
 *   ~store/profile -> 9omPD  =>  _tilde_store/profile.js
 *   ~store/version-update -> jktea  =>  _tilde_store/version-update.js
 *   ~utils/trace -> 1ik0r  =>  _tilde_utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "useVersionUpdate", () => p);
var o = e("react"),
  i = e("@plasmohq/messaging"),
  a = e("~core/version-update-ui"),
  l = e("~store/autofillResult"),
  s = e("~store/profile"),
  u = e("~store/version-update"),
  c = e("~utils/trace");
let d = 6e4,
  f = 3e3;

function p() {
  let e = (0, s.useProfileStore)(e => e.userStage),
    t = (0, l.useAutofillResultStore)(e => e.hasClickedAutoFill),
    r = (0, l.useAutofillResultStore)(e => e.isFilling),
    n = (0, l.useAutofillResultStore)(e => !!e.autoFillResult),
    p = (0, u.useVersionUpdateStore)(e => e.phase),
    m = (0, u.useVersionUpdateStore)(e => e.setPhase),
    h = (0, u.useVersionUpdateStore)(e => e.dismissedNewVersion),
    g = (0, u.useVersionUpdateStore)(e => e.setDismissedNewVersion),
    b = (0, u.useVersionUpdateStore)(e => e.updateCheckSuppressed),
    y = (0, u.useVersionUpdateStore)(e => e.setUpdateCheckSuppressed),
    v = (0, u.useVersionUpdateStore)(e => e.dismissedReadyModal),
    w = (0, u.useVersionUpdateStore)(e => e.setDismissedReadyModal),
    S = (0, u.useVersionUpdateStore)(e => e.setOpenWhatsNewSheet),
    E = (0, u.useVersionUpdateStore)(e => e.sessionReadKeys),
    x = (0, u.useVersionUpdateStore)(e => e.appliedEventReported),
    C = (0, u.useVersionUpdateStore)(e => e.setAppliedEventReported),
    A = (0, u.useVersionUpdateStore)(e => e.setLastUpdateFailReason),
    [k, T] = (0, o.useState)(null),
    [F, I] = (0, o.useState)(null),
    [j, D] = (0, o.useState)(!1),
    P = (0, o.useRef)(null),
    _ = (0, o.useRef)(null),
    L = (0, o.useCallback)(() => {
      P.current && (clearTimeout(P.current), P.current = null), _.current && (clearInterval(_
        .current), _.current = null)
    }, []);
  (0, o.useEffect)(() => L, [L]), (0, o.useEffect)(() => {
    let e = (0, u.useVersionUpdateStore).getState();
    "idle" !== e.phase && e.setPhase("idle"), e.openWhatsNewSheet && e.setOpenWhatsNewSheet(!1), e
      .setLastUpdateFailReason(null)
  }, []), (0, o.useEffect)(() => {
    let e = !1;
    return (0, i.sendToBackground)({
      name: "getReleaseConfig"
    }).then(t => {
      e || T(t ?? null)
    }).catch(() => {
      e || T(null)
    }), (0, i.sendToBackground)({
      name: "getVersionUpdateState"
    }).then(t => {
      e || I(t ?? null)
    }).catch(() => {
      e || I(null)
    }), () => {
      e = !0
    }
  }, []), (0, o.useEffect)(() => {
    F?.appliedEvent && !x && (C(!0), (0, c.trackEvent)("autofill_version_update_applied_result", F
      .appliedEvent))
  }, [F, x, C]);
  let R = F?.localVersion ?? "",
    O = e?.userId ? String(e.userId) : null,
    M = new Set(Object.keys(F?.whatsNewRead?.read ?? {}));
  for (let e of E) M.add(e);
  let N = t || r || n,
    $ = !!e?.logined,
    B = !$ || N,
    q = F ? (0, a.resolveVersionUiState)({
      logined: $,
      userId: O,
      autofillStarted: N,
      localVersion: R,
      releaseConfig: k,
      updateReadyVersion: null === F.updateReady ? void 0 : F.updateReady.version,
      lifecycleTransition: F.lifecycle?.transition ?? null,
      whatsNewReadKeys: M,
      sessionDismissedNewVersion: h
    }) : {
      kind: "hidden"
    },
    U = k?.version ?? null,
    H = (0, o.useCallback)(e => {
      _.current || (_.current = setInterval(async () => {
        try {
          let t = await (0, i.sendToBackground)({
            name: "getVersionUpdateState"
          });
          t?.updateReady && (L(), I(t), e())
        } catch {}
      }, f))
    }, [L]),
    Y = (0, o.useCallback)(() => {
      m("ready"), w(!1), (0, c.trackEvent)("autofill_version_update_result", {
        local_version: R,
        target_version: U,
        result_status: "update_ready"
      })
    }, [R, U, m, w]),
    z = (0, o.useCallback)(e => {
      L(), m("unavailable"), A(e), "throttled" === e && y(!0), (0, c.trackEvent)(
        "autofill_version_update_result", {
          local_version: R,
          target_version: U,
          result_status: "update_not_available",
          fail_reason: e
        }), H(Y)
    }, [L, R, U, H, Y, m, A, y]),
    V = (0, o.useCallback)(() => {
      "idle" !== p || b || (m("updating"), (0, i.sendToBackground)({
        name: "requestExtensionUpdateCheck"
      }).then(e => {
        if (e?.kind === "update_ready") {
          P.current = setTimeout(() => {
            L(), z("timeout")
          }, d), H(Y);
          return
        }
        z(e?.failReason ?? "runtime_error")
      }).catch(() => z("runtime_error")))
    }, [p, b, m, L, Y, z, H]),
    W = (0, o.useCallback)(() => {
      g(!0)
    }, [g]),
    G = F?.updateReady?.version ?? U,
    K = (0, o.useCallback)(() => {
      if (j) return;
      D(!0);
      let e = G ? (0, i.sendToBackground)({
        name: "markRefreshRequested",
        body: {
          targetVersion: G
        }
      }).catch(() => {}) : Promise.resolve();
      e.then(() => (0, i.sendToBackground)({
        name: "reloadExtension"
      }).catch(() => {
        D(!1)
      }))
    }, [j, G]),
    X = (0, o.useCallback)(() => {
      w(!0), "ready" === p && m("idle")
    }, [p, m, w]),
    J = (0, o.useCallback)(() => {
      L(), m("idle"), g(!0)
    }, [L, m, g]),
    Q = (0, o.useCallback)(() => {
      S(!0)
    }, [S]),
    Z = {
      kind: "hidden"
    },
    ee = !1,
    et = !1;
  return B || "hidden" === q.kind && "idle" === p || ("updating" === p && U ? Z = {
      kind: "updating",
      targetVersion: U
    } : "unavailable" === p ? et = !0 : "ready" === p ? ee = !v : "update_ready_modal" === q
    .kind ? ee = !v : "new_version" === q.kind ? Z = {
      kind: "new_version",
      targetVersion: q.targetVersion
    } : "whats_new_entry" === q.kind && (Z = {
      kind: "whats_new_entry",
      version: q.version,
      releasedAt: k?.releasedAt ?? null
    })), {
    banner: Z,
    readyModalOpen: ee,
    unavailableModalOpen: et,
    refreshTargetVersion: G,
    refreshSubmitting: j,
    localVersion: R,
    releaseConfig: k,
    onClickUpdate: V,
    onClickLaterNewVersion: W,
    onClickRefresh: K,
    onClickLaterReady: X,
    onClickTryAgainLater: J,
    onOpenWhatsNew: Q
  }
}

