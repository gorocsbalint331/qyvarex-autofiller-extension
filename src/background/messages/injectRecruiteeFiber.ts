// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../injectRecruiteeFiber.js
 */
import type { PlasmoMessaging } from "@plasmohq/messaging"

function injectMain() {
  function e(e) {
    let t = "string" == typeof e ? e : e?.value ?? e?.iso2 ?? e?.code ?? "";
    return String(t).trim().toUpperCase()
  }

  function t(e) {
    document.dispatchEvent(new CustomEvent("__jr_recruitee_phone_country_response", {
      detail: e
    }))
  }
  window.__jr_recruitee_fiber_injected || (window.__jr_recruitee_fiber_injected = !0, document
    .addEventListener("__jr_recruitee_phone_country_request", r => {
      let a = r.detail || {},
        o = a.requestId,
        s = {
          success: !1,
          requestId: o
        };
      try {
        let r = document.querySelector(a.selector);
        if (!r) {
          s.error = "phone country element not found", t(s);
          return
        }
        let o = function(t) {
          let r = Object.keys(t).find(e => e.startsWith("__reactFiber$") || e.startsWith(
            "__reactInternalInstance$"));
          if (!r) return null;
          let a = null,
            o = null,
            s = t[r];
          for (let t = 0; t < 30 && s; t += 1) {
            let t = [s.memoizedProps, s.pendingProps].filter((e, t, r) => e && r.indexOf(
              e) === t);
            for (let r of t) !a && r?.name === "candidate.phoneCountry" && e(r.value) && Array
              .isArray(r.options) && "function" == typeof r.onChange && (a = r), o || (o =
                function(t) {
                  let r = t?.metadata?.country_calling_codes;
                  if (!r || "object" != typeof r || Array.isArray(r)) return null;
                  let a = Object.entries(r).some(([t, r]) => t.replace(/\D/g, "") && Array
                    .isArray(r) && r.some(t => e(t)));
                  return a ? r : null
                }(r));
            s = s.return
          }
          if (!a || !o) return null;
          let n = new Map;
          for (let [t, r] of Object.entries(o)) {
            if (!Array.isArray(r)) continue;
            let a = t.replace(/\D/g, "");
            if (a)
              for (let t of r) {
                let r = e(t);
                r && !n.has(r) && n.set(r, a)
              }
          }
          let l = a.options.flatMap(t => {
              let r = e(t),
                a = String(t?.label ?? t?.countryName ?? t?.name ?? "").trim(),
                o = n.get(r) || "";
              return r && a && o ? [{
                iso2: r,
                countryName: a,
                dialCode: o
              }] : []
            }),
            i = e(a.value);
          return {
            controlledProps: a,
            currentIso2: i,
            options: l
          }
        }(r);
        if (!o) {
          s.error = "phone country Fiber metadata not found", t(s);
          return
        }
        if (s.currentIso2 = o.currentIso2, s.options = o.options, "read" === a.action) s
          .success = !0;
        else if ("select" === a.action) {
          let t = e(a.targetIso2);
          if (s.targetIso2 = t, t) {
            let r = o.options.filter(r => e(r.iso2) === t);
            0 === r.length ? (s.changed = !1, s.error =
              "target ISO not found in live options") : r.length > 1 ? (s.changed = !1, s
                .error = "target ISO matched multiple live options") : t === o.currentIso2 ? (s
                .success = !0, s.changed = !1) : (o.controlledProps.onChange(t), s.success = !0,
                s.changed = !0)
          } else s.error = "target ISO is required"
        } else s.error = "unsupported phone country action"
      } catch (e) {
        s.error = String(e)
      }
      t(s)
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
    console.error("[injectRecruiteeFiber]", err)
    res.send({
      success: false,
      ok: false,
      message: err instanceof Error ? err.message : "inject_failed"
    })
  }
}

export default handler
