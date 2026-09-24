// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../installMainWorldAlertSuppressor.js
 */
import type { PlasmoMessaging } from "@plasmohq/messaging"

function injectMain(e) {
  let {
    markerAttr: t,
    patternFlags: r,
    patternSource: a,
    stateKey: o
  } = e, s = document.documentElement, n = window[o];
  if (n && window.alert === n.patchedAlert) return s?.setAttribute(t, "true"), !0;
  let l = n?.originalAlert || window.alert,
    i = new RegExp(a, r),
    u = function(e) {
      if (!i.test(String(e ?? ""))) return l.call(window, e)
    };
  return window[o] = {
    originalAlert: l,
    patchedAlert: u
  }, window.alert = u, s?.setAttribute(t, "true"), s?.getAttribute(t) === "true"
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
      func: injectMain,
      args: [req.body]
    })
    res.send({
      success: true,
      ok: true,
      result: results?.[0]?.result ?? null
    })
  } catch (err) {
    console.error("[installMainWorldAlertSuppressor]", err)
    res.send({
      success: false,
      ok: false,
      message: err instanceof Error ? err.message : "inject_failed"
    })
  }
}

export default handler
