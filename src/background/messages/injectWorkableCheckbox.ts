// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../injectWorkableCheckbox.js
 */
import type { PlasmoMessaging } from "@plasmohq/messaging"

function injectMain() {
  function e(e) {
    return new Promise(t => setTimeout(t, e))
  }

  function t(e) {
    return !0 === e.checked
  }

  function r(e, t) {
    t && !e.includes(t) && e.push(t)
  }

  function a(e) {
    return String(e ?? "").toLowerCase().replace(/\*/g, "").replace(/\s+/g, " ").trim()
  }

  function o(e) {
    return e ? a(e.innerText || e.textContent || "") : ""
  }

  function s(e) {
    return new MouseEvent(e, {
      bubbles: !0,
      cancelable: !0,
      view: window
    })
  }

  function n(e) {
    document.dispatchEvent(new CustomEvent("__jr_workable_checkbox_response", {
      detail: e
    }))
  }
  window.__jr_workable_checkbox_injected || (window.__jr_workable_checkbox_injected = !0, document
    .addEventListener("__jr_workable_checkbox_request", async l => {
      let i = l.detail || {},
        u = i.requestId,
        c = i.selector,
        d = i.label,
        p = Array.isArray(i.options) ? i.options : [],
        f = {
          requestId: u,
          success: !1
        };
      try {
        let l = document.querySelector(c);
        if (!(l instanceof HTMLInputElement)) {
          f.error = "checkbox input not found", n(f);
          return
        }
        if (!t(l)) {
          for (let n of function(e, t, s) {
              let n = [],
                l = e.closest("[data-ui='option']");
              for (let i of (r(n, e.closest("label")), r(n, function(e) {
                  if (!e.id) return null;
                  let t = e.id.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
                  try {
                    return document.querySelector(`label[for="${t}"]`)
                  } catch {
                    return null
                  }
                }(e)), r(n, e.closest("[role='checkbox']")), r(n, l), function(e, t) {
                  let r = function(e, t) {
                    let r = [e, ...t].map(a).filter(e => e && "*" !== e && e.length >=
                        4),
                      o = r.join(" ");
                    return ["agree", "accept", "acknowledge", "authorize", "certify",
                      "consent", "privacy", "terms", "notice", "read understand"
                    ].some(e => o.includes(e)) && r.push("privacy notice",
                      "consent to the processing", "processing of my data",
                      "part of this application"), Array.from(new Set(r))
                  }(e, t);
                  return r.length ? Array.from(document.querySelectorAll(
                    "label, [role='checkbox'], [data-ui='option'], button, span, div"
                    )).filter(e => (function(e, t) {
                    let r = o(e);
                    return !!r && t.some(e => e.length < 8 ? r === e : r.includes(
                      e) || e.includes(r) && r.length >= 16)
                  })(e, r)).sort((e, t) => o(e).length - o(t).length) : []
                }(t, s))) r(n, i);
              return r(n, e), n
            }(l, d, p))
            if (n.scrollIntoView?.({
                block: "center",
                inline: "nearest"
              }), n.focus?.(), n.dispatchEvent(s("mousedown")), n.dispatchEvent(s("mouseup")),
              n.click(), await e(120), t(l) && (await e(150), t(l))) break
        }
        t(l) && (l.dispatchEvent(new Event("input", {
            bubbles: !0,
            cancelable: !0
          })), l.dispatchEvent(new Event("change", {
            bubbles: !0,
            cancelable: !0
          })), l.dispatchEvent(new Event("blur", {
            bubbles: !0,
            cancelable: !0
          })), await e(120)), f.success = t(l), f.checked = l.checked, f.visualState =
          function(e) {
            let t = e.closest("[data-ui='option']"),
              r = [e.closest("[role='checkbox']"), e.closest("label[data-checked]"), t
                ?.querySelector("label[data-checked]"), e.closest("label")
              ];
            for (let e of r) {
              let t = function(e) {
                if (!e) return null;
                for (let t of ["aria-checked", "data-checked"]) {
                  let r = e.getAttribute(t);
                  if ("true" === r) return !0;
                  if ("false" === r) return !1
                }
                return null
              }(e);
              if (null !== t) return t
            }
            return null
          }(l)
      } catch (e) {
        f.error = String(e)
      }
      n(f)
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
    console.error("[injectWorkableCheckbox]", err)
    res.send({
      success: false,
      ok: false,
      message: err instanceof Error ? err.message : "inject_failed"
    })
  }
}

export default handler
