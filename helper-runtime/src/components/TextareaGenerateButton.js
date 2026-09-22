/**
 * Parcel module id: 8llzP
 * Resolved path: src/components/TextareaGenerateButton.js
 * Dependencies:
 *   ./constants -> h41rE  =>  src/components/constants.js
 *   ./exposureTracker -> j1Pce  =>  src/components/exposureTracker.js
 *   ./useGenerateField -> cGhAQ  =>  src/components/useGenerateField.js
 *   ./useTextareaTracker -> bYfsw  =>  src/components/useTextareaTracker.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   data-base64:~/assets/images/logo_bird.svg -> aZBe1  =>  src/assets/inline/images/logo_bird.svg.js
 *   data-base64:~/assets/images/turbo.png -> 3BBKV  =>  src/assets/inline/images/turbo.png.js
 *   react -> 329PG  =>  react-reexport.js
 *   react-dom -> f20Gy  =>  react-dom-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~api/env-resolver -> 45ABC  =>  src/api/env-resolver.js
 *   ~constants/payment -> aukl5  =>  src/constants/payment.js
 *   ~store/profile -> 9omPD  =>  src/store/profile.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "TextareaGenerateButtonLayer", () => D);
var o = e("react/jsx-runtime"),
  i = e("data-base64:~/assets/images/logo_bird.svg"),
  a = n.interopDefault(i),
  l = e("data-base64:~/assets/images/turbo.png"),
  s = n.interopDefault(l),
  u = e("react"),
  c = e("react-dom"),
  d = e("@plasmohq/messaging"),
  f = e("~api/env-resolver"),
  p = e("~constants/payment"),
  m = e("~store/profile"),
  h = e("~store/url"),
  g = e("~utils/trace"),
  b = e("./constants"),
  y = e("./exposureTracker"),
  v = e("./useGenerateField"),
  w = e("./useTextareaTracker");
let S = 4,
  E = 40,
  x = 240,
  C = 100,
  A = ["...", "..", ".", "..", "..."];

function k() {
  let [e, t] = (0, u.useState)(0);
  return (0, u.useEffect)(() => {
    let e = setInterval(() => {
      t(e => (e + 1) % A.length)
    }, 300);
    return () => clearInterval(e)
  }, []), (0, o.jsx)("span", {
    style: {
      display: "inline-block",
      width: "1.2em",
      textAlign: "left"
    },
    children: A[e]
  })
}

function T({
  onClose: e
}) {
  return (0, o.jsx)("div", {
    style: {
      display: "flex",
      width: x,
      padding: 8,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
      borderRadius: 16,
      background: "#fff",
      boxShadow: "0 4px 24px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
      fontFamily: "Inter, -apple-system, sans-serif"
    },
    onClick: e => e.stopPropagation(),
    children: (0, o.jsxs)("div", {
      style: {
        display: "flex",
        width: "100%",
        padding: 8,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        borderRadius: 8
      },
      children: [(0, o.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          width: "100%"
        },
        children: [(0, o.jsx)("img", {
          src: s.default,
          alt: "",
          style: {
            width: 40,
            height: 40,
            display: "block",
            flexShrink: 0
          }
        }), (0, o.jsxs)("p", {
          style: {
            margin: 0,
            fontSize: 13,
            fontWeight: 400,
            lineHeight: "16px",
            color: "#000"
          },
          children: ["Upgrade to Turbo to", " ", (0, o.jsx)("strong", {
            style: {
              fontWeight: 700
            },
            children: "autofill answers with AI"
          })]
        })]
      }), (0, o.jsx)("button", {
        type: "button",
        onClick: () => {
          (0, g.trackEvent)("autofill_ai_regenerate_upgrade_click"), window.open(f
            .HOST_DOMAIN + p.MEMBERSHIP_RETARGET_PATH, "_blank"), e()
        },
        style: {
          width: "100%",
          padding: 8,
          borderRadius: 8,
          border: "none",
          background: "#57eba1",
          fontSize: 13,
          fontWeight: 600,
          color: "#000",
          cursor: "pointer",
          fontFamily: "inherit",
          lineHeight: "16px",
          textAlign: "center"
        },
        onMouseEnter: e => {
          e.currentTarget.style.background = "#3dd990"
        },
        onMouseLeave: e => {
          e.currentTarget.style.background = "#57eba1"
        },
        children: "Upgrade Now"
      })]
    })
  })
}

function F({
  onGenerate: e,
  onClose: t
}) {
  let [r, n] = (0, u.useState)(""), i = () => {
    (0, g.trackEvent)("autofill_ai_regenerate_generate_click", {
      url: (0, h.useUrlStore).getState().currentTabUrl || window.location.href
    });
    let o = r.trim() ? [r.trim()] : [];
    e(o), n(""), t()
  };
  return (0, o.jsxs)("div", {
    style: {
      display: "flex",
      width: x,
      padding: 8,
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 8,
      borderRadius: 16,
      background: "#fff",
      boxShadow: "0 4px 24px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
      fontFamily: "Inter, -apple-system, sans-serif"
    },
    onClick: e => e.stopPropagation(),
    children: [(0, o.jsx)("textarea", {
      placeholder: "Tell me what you want to add, change, or improve.",
      value: r,
      maxLength: 750,
      onChange: e => n(e.target.value.slice(0, 750)),
      onKeyDown: e => {
        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), i()), "Escape" === e
          .key && t()
      },
      autoFocus: !0,
      style: {
        width: "100%",
        height: 96,
        padding: 8,
        borderRadius: 8,
        border: "none",
        outline: "none",
        background: "#F7F8F9",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
        fontSize: 13,
        fontWeight: 400,
        lineHeight: "16px",
        color: "#000",
        fontFamily: "inherit",
        resize: "none",
        boxSizing: "border-box"
      }
    }), (0, o.jsxs)("div", {
      style: {
        display: "flex",
        gap: 8,
        alignSelf: "stretch"
      },
      children: [(0, o.jsx)("button", {
        type: "button",
        onClick: () => {
          n(""), t()
        },
        style: {
          flex: 1,
          padding: 8,
          borderRadius: 8,
          border: "none",
          background: "#fff",
          boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
          fontSize: 13,
          fontWeight: 500,
          color: "#000",
          cursor: "pointer",
          fontFamily: "inherit",
          lineHeight: "16px"
        },
        onMouseEnter: e => {
          e.currentTarget.style.background = "#F7F8F9"
        },
        onMouseLeave: e => {
          e.currentTarget.style.background = "#fff"
        },
        children: "Cancel"
      }), (0, o.jsx)("button", {
        type: "button",
        onClick: i,
        style: {
          flex: 1,
          padding: 8,
          borderRadius: 8,
          border: "none",
          background: "#57eba1",
          fontSize: 13,
          fontWeight: 500,
          color: "#000",
          cursor: "pointer",
          fontFamily: "inherit",
          lineHeight: "16px"
        },
        onMouseEnter: e => {
          e.currentTarget.style.background = "#3dd990"
        },
        onMouseLeave: e => {
          e.currentTarget.style.background = "#57eba1"
        },
        children: "Generate"
      })]
    })]
  })
}

function I({
  textarea: e,
  rect: t,
  status: r,
  isPopoverOpen: n,
  isSubscribed: i,
  onTogglePopover: l,
  onGenerate: s,
  onClosePopover: c
}) {
  let [d, f] = (0, u.useState)(!1), p = d || "loading" === r || n, m = (0, u.useRef)(null), [h, b] =
    (0, u.useState)({
      top: -9999,
      left: -9999
    }), y = 32, v = 6;
  if ((0, u.useLayoutEffect)(() => {
      let t = m.current;
      if (!t) return;
      let r = t.getRootNode(),
        n = r.host;
      if (!n) return;
      let o = n.getBoundingClientRect(),
        i = e.getBoundingClientRect();
      b({
        top: i.top - o.top + i.height - y - S,
        left: i.left - o.left + S
      })
    }, [e, t.top, t.left, t.width, t.height]), t.height < E) return null;
  let {
    top: w,
    left: x
  } = h, C = 1;
  return (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsxs)("button", {
      ref: m,
      type: "button",
      title: "loading" === r ? "Generating..." : "error" === r ?
        "Generation failed, click to retry" : "Edit with AI",
      onClick: t => {
        t.stopPropagation(), t.preventDefault(), "loading" !== r && ((0, g.trackEvent)(
          "autofill_ai_regenerate_entry_click"), l(e))
      },
      style: {
        position: "absolute",
        top: w,
        left: x,
        height: y,
        zIndex: C,
        display: "inline-flex",
        alignItems: "center",
        gap: p ? 4 : 0,
        padding: p ? "0 8px 0 6px" : "0 6px",
        borderRadius: "6px 0 6px 6px",
        background: "error" === r ? "#ef4444" : "#fff",
        boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
        border: "none",
        cursor: "loading" === r ? "default" : "pointer",
        userSelect: "none",
        pointerEvents: "auto",
        outline: "none",
        fontFamily: "Inter, -apple-system, sans-serif",
        transition: "box-shadow 0.15s ease, background 0.15s ease, padding 0.2s ease, gap 0.2s ease"
      },
      onMouseEnter: e => {
        f(!0), "loading" !== r && (e.currentTarget.style.boxShadow =
          "0 0 0 1px rgba(0,0,0,0.2)")
      },
      onMouseLeave: e => {
        f(!1), e.currentTarget.style.boxShadow = "0 0 0 1px rgba(0,0,0,0.1)"
      },
      children: [(0, o.jsx)("img", {
        src: a.default,
        alt: "",
        style: {
          width: 20,
          height: 20,
          display: "block",
          flexShrink: 0
        }
      }), (0, o.jsx)("span", {
        style: {
          fontSize: 12,
          fontWeight: 600,
          lineHeight: "16px",
          color: "error" === r ? "#fff" : "#000",
          whiteSpace: "nowrap",
          overflow: "hidden",
          maxWidth: p ? 100 : 0,
          opacity: p ? 1 : 0,
          transition: "max-width 0.2s ease, opacity 0.15s ease"
        },
        children: "loading" === r ? (0, o.jsxs)(o.Fragment, {
          children: ["Generating", (0, o.jsx)(k, {})]
        }) : "error" === r ? "Error" : "Edit with AI"
      })]
    }), n && "loading" !== r && (0, o.jsxs)("div", {
      style: {
        position: "absolute",
        top: w - v - 2,
        left: x,
        zIndex: C,
        transform: "translateY(-100%)",
        pointerEvents: "auto"
      },
      children: [i ? (0, o.jsx)(F, {
        onGenerate: t => s(e, t),
        onClose: c
      }) : (0, o.jsx)(T, {
        onClose: c
      }), (0, o.jsx)("div", {
        style: {
          position: "absolute",
          bottom: -v,
          left: 20,
          width: 0,
          height: 0,
          borderLeft: `${v}px solid transparent`,
          borderRight: `${v}px solid transparent`,
          borderTop: `${v}px solid #fff`
        }
      })]
    })]
  })
}

function j({
  textarea: e,
  children: t
}) {
  let [r, n] = (0, u.useState)(null);
  return ((0, u.useEffect)(() => {
    let t = e.parentElement;
    if (!t) return;
    let r = document.createElement("div");
    r.className = b.JR_EDIT_AI_HOST_CLASS, r.style.cssText =
      "all: initial; position: relative; display: block; width: 0; height: 0; align-self: flex-start; pointer-events: none;";
    let o = r.attachShadow({
      mode: "open"
    });
    t.insertBefore(r, e.nextSibling), n(o);
    let i = 0,
      a = new MutationObserver(t => {
        for (let n of t)
          if ("childList" === n.type) {
            for (let t of n.removedNodes)
              if (t === r && !(i >= C) && e.isConnected) {
                i += 1;
                try {
                  let t = e.parentElement;
                  if (!t) continue;
                  t.insertBefore(r, e.nextSibling)
                } catch {}
              }
          }
      });
    return a.observe(t, {
      childList: !0
    }), () => {
      a.disconnect(), r.remove(), n(null)
    }
  }, [e]), r) ? (0, c.createPortal)(t, r) : null
}

function D() {
  let e = (0, w.useTextareaTracker)(),
    {
      statusMap: t,
      generate: r
    } = (0, v.useGenerateField)(),
    n = (0, m.useProfileStore)(e => e.creditsLeft),
    i = (0, m.useProfileStore)(e => e.ensureCreditsLeft),
    a = !!n?.subscribed,
    [l, s] = (0, u.useState)(null);
  (0, u.useEffect)(() => {
    i()
  }, [i]), (0, u.useEffect)(() => {
    let t = Array.from(e.values()).filter(e => e.height >= E).length;
    t && (0, y.claimPageExposure)(document) && (console.debug(
      "[TextareaGenerateButton] reporting entry exposure", {
        visibleTextareaCount: t
      }), (0, g.trackEvent)("autofill_ai_regenerate_entry_exposure"))
  }, [e]);
  let c = (0, u.useRef)(!1),
    f = (0, u.useCallback)(async () => {
      if (!c.current) {
        c.current = !0;
        try {
          let e = await (0, d.sendToBackground)({
            name: "getCreditsLeft"
          });
          e && (0, m.useProfileStore).setState({
            creditsLeft: e
          })
        } catch (e) {
          console.warn("[TextareaGenerateButton] refresh subscription failed", e)
        } finally {
          c.current = !1
        }
      }
    }, []),
    p = (0, u.useCallback)(e => {
      let t = l === e ? null : e;
      s(t), t && !a && f()
    }, [l, f, a]),
    h = (0, u.useCallback)(() => {
      s(null)
    }, []);
  return (0, u.useEffect)(() => {
    if (!l) return;
    let e = () => s(null);
    return document.addEventListener("click", e), () => document.removeEventListener("click", e)
  }, [l]), (0, o.jsx)(o.Fragment, {
    children: Array.from(e.entries()).map(([e, n]) => (0, o.jsx)(j, {
      textarea: e,
      children: (0, o.jsx)(I, {
        textarea: e,
        rect: n,
        status: t.get(e) ?? "idle",
        isPopoverOpen: l === e,
        isSubscribed: a,
        onTogglePopover: p,
        onGenerate: r,
        onClosePopover: h
      })
    }, `jr-btn-${L(e)}`))
  })
}
let P = 0,
  _ = new WeakMap;

function L(e) {
  let t = _.get(e);
  return null == t && (t = P++, _.set(e, t)), t
}

