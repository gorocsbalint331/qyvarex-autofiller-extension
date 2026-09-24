// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../interceptFileInputClick.js
 */
import type { PlasmoMessaging } from "@plasmohq/messaging"

function injectMain() {
  let e = "__jr_resume_source",
    t = HTMLInputElement.prototype.click;
  HTMLInputElement.prototype.click = function() {
    if ("file" === this.type) {
      HTMLInputElement.prototype.click = t;
      let r = document.getElementById(e);
      if (r?.files?.length > 0) {
        try {
          this.files = r.files, this.dispatchEvent(new Event("change", {
            bubbles: !0,
            cancelable: !1
          }))
        } catch (e) {
          console.warn("[jr/interceptFileInputClick] set files failed:", e)
        }
        r.remove();
        return
      }
    }
    return t.call(this)
  };
  let r = window.showOpenFilePicker;
  "function" == typeof r && (window.showOpenFilePicker = async function(...t) {
    window.showOpenFilePicker = r;
    let a = document.getElementById(e);
    if (a?.files?.length > 0) {
      let e = a.files[0];
      return a.remove(), [{
        getFile: async () => e,
        kind: "file",
        name: e.name
      }]
    }
    return r.apply(window, t)
  }), setTimeout(() => {
    HTMLInputElement.prototype.click = t, "function" == typeof r && (window.showOpenFilePicker =
      r);
    let a = document.getElementById(e);
    a && a.remove()
  }, 1e4)
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
    console.error("[interceptFileInputClick]", err)
    res.send({
      success: false,
      ok: false,
      message: err instanceof Error ? err.message : "inject_failed"
    })
  }
}

export default handler
