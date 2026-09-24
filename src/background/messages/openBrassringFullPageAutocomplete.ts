// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../openBrassringFullPageAutocomplete.js
 */
import type { PlasmoMessaging } from "@plasmohq/messaging"

function injectMain(e) {
  let t = document.getElementById(e);
  if (!t) return {
    opened: !1
  };
  let r = t.closest(".fieldcontain"),
    a = r?.querySelector(".ui-icon-triangle-1-s, [ng-click*='blanketSearch']");
  if (!a) return {
    opened: !1
  };
  let o = window,
    s = o.pageSize,
    n = () => {
      void 0 === s ? delete o.pageSize : o.pageSize = s
    },
    l = () => {
      o.pageSize = 1e3;
      let e = o.jQuery || o.$,
        r = e?.(t).data?.("uiAutocomplete");
      r ? r.pageIndex = 0 : t.pageIndex = 0
    },
    i = !1;
  try {
    return t.focus(), a.addEventListener("click", l, {
      capture: !0,
      once: !0
    }), l(), a.click(), i = !0, {
      opened: !0
    }
  } catch {
    return {
      opened: !1
    }
  } finally {
    i ? o.setTimeout(n, 3e3) : n()
  }
}

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const tabId = req.sender?.tab?.id
    if (!tabId) {
      res.send({ success: false, ok: false, opened: false, message: "no_tab" })
      return
    }
    const frameId = req.sender?.frameId ?? 0
    const results = await chrome.scripting.executeScript({
      target: { tabId, frameIds: [frameId] },
      world: "MAIN",
      func: injectMain,
      args: [req.body?.inputId]
    })
    const result = results?.[0]?.result ?? null
    res.send({
      success: true,
      ok: true,
      opened: result?.opened === true,
      result,
      ...(result && typeof result === "object" ? result : {})
    })
  } catch (err) {
    console.error("[openBrassringFullPageAutocomplete]", err)
    res.send({
      success: false,
      ok: false,
      opened: false,
      message: err instanceof Error ? err.message : "inject_failed"
    })
  }
}

export default handler
