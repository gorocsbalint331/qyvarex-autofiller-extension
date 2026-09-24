// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../injectWorkdayFiber.js
 */
import type { PlasmoMessaging } from "@plasmohq/messaging"

function injectMain() {
  if (window.__jr_workday_fiber_injected) return;
  window.__jr_workday_fiber_injected = !0;
  let e = "__jr_workday_text_response",
    t = "__jr_workday_select_response",
    r = "__jr_workday_select_options_response",
    a = "__jr_workday_date_response",
    o = "__jr_workday_checkbox_response";

  function s(e) {
    return Object.keys(e).find(e => e.startsWith("__reactProps$"))
  }

  function n(e) {
    return Object.keys(e).find(e => e.startsWith("__reactFiber$") || e.startsWith(
      "__reactInternalInstance$"))
  }

  function l(e, t) {
    document.dispatchEvent(new CustomEvent(e, {
      detail: t
    }))
  }

  function i(e) {
    return "string" == typeof e ? e : String(e?.label ?? e?.descriptor ?? e?.name ?? e?.text ?? e
      ?.value ?? "")
  }

  function u(e, t, r) {
    let a = "function" == typeof Proxy ? new Proxy(e, {
      get(e, r) {
        if ("checked" === r) return t;
        let a = Reflect.get(e, r, e);
        return "function" == typeof a ? a.bind(e) : a
      }
    }) : e;
    return {
      target: a,
      currentTarget: a,
      type: r,
      preventDefault() {},
      stopPropagation() {},
      nativeEvent: {
        target: a,
        currentTarget: a,
        type: r
      }
    }
  }

  function c(e, t, r) {
    let a = !1;
    if ("function" == typeof e?.onClick) try {
      e.onClick(u(t, r, "click")), a = !0
    } catch (e) {}
    if ("function" == typeof e?.onChange) try {
      e.onChange(u(t, r, "change")), a = !0
    } catch (e) {}
    return a
  }

  function d(e, t) {
    return {
      target: e,
      currentTarget: e,
      type: t,
      preventDefault() {},
      stopPropagation() {},
      nativeEvent: {
        target: e,
        currentTarget: e,
        type: t
      }
    }
  }
  document.addEventListener("__jr_workday_text_request", t => {
    let r = t.detail || {},
      a = r.selector,
      o = r.value,
      n = r.requestId,
      i = {
        success: !1,
        requestId: n
      };
    try {
      let t = document.querySelector(a);
      if (!t) {
        i.error = "element not found", l(e, i);
        return
      }
      let r = s(t);
      if (!r) {
        i.error = "no __reactProps found", l(e, i);
        return
      }
      let n = t[r];
      t.value = o, "function" == typeof n.onInput && n.onInput({
        target: t,
        currentTarget: t,
        preventDefault() {},
        stopPropagation() {}
      }), "function" == typeof n.onChange && n.onChange({
        target: t,
        currentTarget: t,
        preventDefault() {},
        stopPropagation() {}
      }), "function" == typeof n.onBlur && n.onBlur({
        target: t,
        currentTarget: t,
        relatedTarget: null,
        preventDefault() {},
        stopPropagation() {}
      }), i.success = !0
    } catch (e) {
      i.error = String(e)
    }
    l(e, i)
  }), document.addEventListener("__jr_workday_select_request", e => {
    let r = e.detail || {},
      a = r.selector,
      o = r.candidates || [],
      s = r.requestId,
      i = {
        success: !1,
        requestId: s
      };
    try {
      let e = document.querySelector(a);
      if (!e) {
        i.error = "button not found", l(t, i);
        return
      }
      let r = n(e);
      if (!r) {
        i.error = "no fiber key", l(t, i);
        return
      }
      let s = e[r],
        u = null,
        c = null,
        d = [],
        p = [];
      for (let e = 0; e < 15 && s; e++) {
        let t = s.stateNode,
          r = s.type?.displayName || s.type?.name || s.type || "(no type)",
          a = t && "object" == typeof t ? Object.getOwnPropertyNames(Object.getPrototypeOf(t) ||
          {}).filter(e => "function" == typeof t[e]).slice(0, 10) : [];
        if (p.push(`depth ${e}: ${r} methods=[${a.join(",")}]`), d.push(s), t && "object" ==
          typeof t && "function" == typeof t.updateStateFromValue) {
          u = t, c = s.memoizedProps || s.pendingProps;
          break
        }
        s = s.return
      }
      if (!u) {
        i.error = "no Select instance with updateStateFromValue found", l(t, i);
        return
      }
      let f = c?.options || [],
        m = null;
      for (let e of o) {
        let t = e.trim().toLowerCase();
        if ((m = f.find(e => e.label && e.label.trim().toLowerCase() === t) || null) || (m = f
            .find(e => e.label && -1 !== e.label.trim().toLowerCase().indexOf(t)) || null))
          break
      }
      if (!m) {
        i.error = "no matching option", i.availableOptions = f.slice(0, 10).map(e => e.label),
          l(t, i);
        return
      }
      u.updateStateFromValue(m.value);
      try {
        u.fireChangeEvent(m.value)
      } catch (e) {}
      for (let e of d) {
        let t = e.memoizedProps || e.pendingProps;
        if (t) {
          if ("function" == typeof t.onOptionSelection) try {
            t.onOptionSelection(m)
          } catch (e) {}
          if ("function" == typeof t.onChange) try {
            t.onChange(m.value)
          } catch (e) {}
        }
      }
      i.success = !0, i.matchedLabel = m.label
    } catch (e) {
      i.error = String(e)
    }
    l(t, i)
  }), document.addEventListener("__jr_workday_select_options_request", e => {
    let t = e.detail || {},
      a = t.selector,
      o = t.requestId,
      s = {
        success: !1,
        requestId: o,
        options: []
      };
    try {
      let e = document.querySelector(a);
      if (!e) {
        s.error = "button not found", l(r, s);
        return
      }
      let t = n(e);
      if (!t) {
        s.error = "no fiber key", l(r, s);
        return
      }
      let o = e[t],
        u = null;
      for (let e = 0; e < 15 && o; e++) {
        let e = o.stateNode;
        if (e && "object" == typeof e && "function" == typeof e.updateStateFromValue) {
          u = o.memoizedProps || o.pendingProps;
          break
        }
        o = o.return
      }
      if (!u) {
        s.error = "no Select instance with updateStateFromValue found", l(r, s);
        return
      }
      let c = Array.isArray(u?.options) ? u.options.map(i).map(e => e.replace(/\s+/g, " ")
      .trim()).filter(Boolean) : [];
      s.success = c.length > 0, s.options = c
    } catch (e) {
      s.error = String(e)
    }
    l(r, s)
  }), document.addEventListener("__jr_workday_date_request", e => {
    (async () => {
      let t = e.detail || {},
        r = t.selector,
        o = t.month,
        i = t.day,
        u = t.year,
        c = t.requestId,
        p = {
          success: !1,
          requestId: c
        };
      try {
        let e = document.querySelector(r);
        if (!e) {
          p.error = "date container not found", l(a, p);
          return
        }
        let t = [],
          c = e.querySelector('[data-automation-id="dateSectionMonth-input"]');
        c && o && t.push({
          input: c,
          val: o
        });
        let m = e.querySelector('[data-automation-id="dateSectionDay-input"]');
        m && i && t.push({
          input: m,
          val: i
        });
        let h = e.querySelector('[data-automation-id="dateSectionYear-input"]');
        h && u && t.push({
          input: h,
          val: u
        });
        let g = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set,
          b = !!c,
          y = !!m,
          j = b && y && o && i ? `${o}/${i}/${u}` : b && o ? `${o}/${u}` : u,
          x = function(e, t, r, a, o) {
            let s = e.padStart(4, "0");
            return a && o && t && r ? `${s}-${t.padStart(2, "0")}-${r.padStart(2, "0")}` :
              a && t ? `${s}-${t.padStart(2, "0")}` : s
          }(u, o, i, b, y),
          D = !1,
          v = !1,
          E = !1,
          _ = function(e) {
            let t = e.id || "",
              r = t.split("--");
            return r.length > 1 ? r[r.length - 1] : null
          }(e),
          A = null,
          w = new Set,
          T = new Set;
        for (let {
            input: e,
            val: r
          }
          of t) {
          let t = n(e);
          if (t) {
            let a = e[t];
            for (let e = 0; e < 10 && a; e++) {
              let e = a.stateNode;
              if (e && "object" == typeof e && e.state && "object" == typeof e.state &&
                "currentValue" in e.state && "dirty" in e.state) {
                "function" == typeof e.setState ? e.setState({
                  currentValue: r,
                  dirty: !0
                }) : (e.state.currentValue = r, e.state.dirty = !0, "function" == typeof e
                  .forceUpdate && e.forceUpdate()), D = !0;
                break
              }
              a = a.return
            }
          }
          let a = e._valueTracker;
          a && a.setValue(""), g ? g.call(e, r) : e.value = r, e.dispatchEvent(new Event(
            "input", {
              bubbles: !0
            })), e.dispatchEvent(new Event("change", {
            bubbles: !0
          })), D = function(e) {
            let t = s(e);
            if (!t) return !1;
            let r = e[t],
              a = !1;
            if ("function" == typeof r?.onInput) try {
              r.onInput(d(e, "input")), a = !0
            } catch (e) {}
            if ("function" == typeof r?.onChange) try {
              r.onChange(d(e, "change")), a = !0
            } catch (e) {}
            if ("function" == typeof r?.onBlur) try {
              r.onBlur(d(e, "blur")), a = !0
            } catch (e) {}
            return a
          }(e) || D
        }
        for (let {
            input: e
          }
          of t) e.dispatchEvent(new FocusEvent("blur", {
          bubbles: !0,
          relatedTarget: null
        }));
        let I = c || m || h,
          S = [];
        for (let t of [I, c, m, h, e]) t && !S.includes(t) && S.push(t);
        let R = e.parentElement;
        for (let e = 0; e < 8 && R; e++) S.push(R), R = R.parentElement;
        for (let e of S) {
          let t = n(e);
          if (t) {
            let r = e[t];
            for (let e = 0; e < 45 && r; e++) {
              var f;
              let e = r.stateNode,
                t = r.memoizedProps || r.pendingProps;
              if (_ || "string" != typeof t?.metadataId || (_ = t.metadataId), !A && (f = t
                  ?.value) && "object" == typeof f && "function" == typeof f.setValue && f
                .value && "object" == typeof f.value && (A = t.value), e && "object" ==
                typeof e && !T.has(e)) {
                if (T.add(e), "function" == typeof e.setValue) try {
                  e.setValue(j), v = !0
                } catch (e) {}
                if ("function" == typeof e.setDateValue) try {
                  e.setDateValue(j), v = !0
                } catch (e) {}
                if ("function" == typeof e.updateStateFromValue) try {
                  e.updateStateFromValue(j), v = !0, "function" == typeof e
                    .fireChangeEvent && (e.fireChangeEvent(j), v = !0)
                } catch (e) {}
              }
              if (t && !w.has(t) && "function" == typeof t.onDatePicked) {
                w.add(t);
                let e = {
                  yyyy: u.padStart(4, "0")
                };
                b && o && (e.mm = o.padStart(2, "0")), y && i && (e.dd = i.padStart(2,
                "0"));
                try {
                  t.onDatePicked(e), v = !0
                } catch (e) {}
              }
              r = r.return
            }
          }
        }
        if (_ && A) try {
          await Promise.resolve(A.setValue({
            id: _,
            value: x
          })), "function" == typeof A.clearFieldErrors && await Promise.resolve(A
            .clearFieldErrors(_)), v = !0, E = !0
        } catch (e) {
          p.contextCommitError = String(e)
        }
        p.success = v, p.inputHandled = D, p.parentCommitHandled = v, p
          .contextCommitHandled = E, p.dateFieldMetadataId = _
      } catch (e) {
        p.error = String(e)
      }
      l(a, p)
    })()
  }), document.addEventListener("__jr_workday_checkbox_request", e => {
    let t = e.detail || {},
      r = t.selector,
      a = t.checked ?? !0,
      i = t.requestId,
      u = {
        success: !1,
        requestId: i
      };
    try {
      let e = document.querySelector(r);
      if (!e) {
        u.error = "element not found", l(o, u);
        return
      }
      let t = s(e),
        i = new Set,
        d = !1;
      if (t) {
        let r = e[t];
        r && (i.add(r), d = c(r, e, a) || d)
      }
      let p = n(e);
      if (p) {
        let t = e[p];
        for (let r = 0; r < 15 && t; r++) {
          let r = t.memoizedProps || t.pendingProps;
          r && !i.has(r) && (i.add(r), d = c(r, e, a) || d), t = t.return
        }
      } else t || (u.error = "no reactProps or fiber key found");
      u.success = d
    } catch (e) {
      u.error = String(e)
    }
    l(o, u)
  })
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
    console.error("[injectWorkdayFiber]", err)
    res.send({
      success: false,
      ok: false,
      message: err instanceof Error ? err.message : "inject_failed"
    })
  }
}

export default handler
