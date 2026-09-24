// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../injectReactSelectFiber.js
 */
import type { PlasmoMessaging } from "@plasmohq/messaging"

function injectMain() {
  function e(e) {
    return Object.keys(e).find(e => e.startsWith("__reactFiber$") || e.startsWith(
      "__reactInternalInstance$"))
  }

  function t(t) {
    let r = e(t);
    if (!r) return null;
    let a = t[r];
    for (let e = 0; e < 30 && a; e++) {
      let e = a.stateNode;
      if (e && "object" == typeof e) {
        let t = e.select || e;
        if ("function" == typeof t.setValue && t.props) return t
      }
      a = a.return
    }
    return null
  }
  window.__jr_react_select_injected || (window.__jr_react_select_injected = !0, document
    .addEventListener("__jr_react_select_request", e => {
      let r = e.detail || {},
        a = r.anchorSelector,
        o = r.candidates || [],
        s = r.requestId,
        n = {
          success: !1,
          requestId: s
        };
      try {
        let e = document.querySelector(a);
        if (!e) {
          n.error = "anchor not found", l(n);
          return
        }
        let r = t(e);
        if (!r) {
          n.error = "no Select instance found", l(n);
          return
        }
        let s = r.props?.options || [],
          i = function(e, t) {
            for (let r of t) {
              let t = r.trim().toLowerCase(),
                a = e.find(e => e.label && e.label.trim().toLowerCase() === t);
              if (a) return a;
              let o = e.find(e => e.label && -1 !== e.label.trim().toLowerCase().indexOf(t));
              if (o) return o
            }
            return null
          }(s, o);
        if (!i) {
          n.error = "no matching option", l(n);
          return
        }
        r.setValue(i, "select-option"), n.success = !0, n.matchedLabel = i.label
      } catch (e) {
        n.error = String(e)
      }

      function l(e) {
        document.dispatchEvent(new CustomEvent("__jr_react_select_response", {
          detail: e
        }))
      }
      l(n)
    }), document.addEventListener("__jr_react_select_click_request", r => {
      let a = r.detail || {},
        o = a.optionSelector,
        s = a.anchorSelector,
        n = a.requestId,
        l = {
          success: !1,
          requestId: n
        };
      try {
        let r = document.querySelector(o);
        if (!r) {
          l.error = "option element not found", i(l);
          return
        }
        let a = e(r);
        if (a) {
          let e = r[a];
          for (let r = 0; r < 15 && e; r++) {
            let r = e.memoizedProps || e.pendingProps;
            if (r?.data?.value !== void 0 && r?.data?.label) {
              let e = document.querySelector(s),
                a = e ? t(e) : null;
              if (a) {
                a.setValue(r.data, "select-option"), l.success = !0, l.matchedLabel = r.data
                  .label, i(l);
                return
              }
              break
            }
            e = e.return
          }
        }
        if (a) {
          let e = r[a];
          for (let t = 0; t < 15 && e; t++) {
            let t = e.memoizedProps || e.pendingProps;
            if ("function" == typeof t?.onClick) {
              t.onClick({
                preventDefault: () => {},
                stopPropagation: () => {}
              }), l.success = !0, i(l);
              return
            }
            if ("function" == typeof t?.innerProps?.onClick) {
              t.innerProps.onClick({
                preventDefault: () => {},
                stopPropagation: () => {}
              }), l.success = !0, i(l);
              return
            }
            e = e.return
          }
        }
        l.error = "could not find option data or onClick handler"
      } catch (e) {
        l.error = String(e)
      }

      function i(e) {
        document.dispatchEvent(new CustomEvent("__jr_react_select_click_response", {
          detail: e
        }))
      }
      i(l)
    }))
}

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const tabId = req.sender?.tab?.id
    if (!tabId) {
      res.send({ success: false, ok: false, message: "no_tab" })
      return
    }
    const frameId = req.sender?.frameId ?? 0
    const target =
      req.body?.allFrames === true
        ? { tabId, allFrames: true }
        : { tabId, frameIds: [frameId] }
    const results = await chrome.scripting.executeScript({
      target,
      world: "MAIN",
      func: injectMain
    })
    res.send({
      success: true,
      ok: true,
      result: results?.[0]?.result ?? null
    })
  } catch (err) {
    console.error("[injectReactSelectFiber]", err)
    res.send({
      success: false,
      ok: false,
      message: err instanceof Error ? err.message : "inject_failed"
    })
  }
}

export default handler
