// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../uploadBrassringProfileBuilderFile.js
 */
import type { PlasmoMessaging } from "@plasmohq/messaging"

function injectMain(e) {
  let t = e => "resume" === e ? "resume" : "coverletter";
  if (!(() => {
      try {
        let r = new URL(window.location.href);
        return /\/TGNewUI\/Profile\/Home\/ProfileBuilder$/i.test(r.pathname) && (r.searchParams
          .get("calledFrom") || "").toLowerCase() === t(e.kind)
      } catch {
        return !1
      }
    })()) return {
    matched: !1,
    success: !1
  };
  let r = document.querySelector(
    "input[type='file']#file, input[type='file'][name='file'], input[type='file']");
  if (!r || r.disabled) return {
    matched: !0,
    success: !1,
    reason: "missing-file-input"
  };
  if (!e.base64 || !e.fileName) return {
    matched: !0,
    success: !1,
    reason: "missing-file-payload"
  };
  try {
    let t = atob(e.base64),
      a = new Uint8Array(t.length);
    for (let e = 0; e < t.length; e += 1) a[e] = t.charCodeAt(e);
    let o = new File([a], e.fileName, {
        type: e.fileType || "application/pdf",
        lastModified: e.lastModified || Date.now()
      }),
      s = new DataTransfer;
    s.items.add(o);
    try {
      r.files = s.files
    } catch {
      Object.defineProperty(r, "files", {
        configurable: !0,
        value: s.files
      })
    }
    for (let e of ["input", "change", "blur"]) r.dispatchEvent(new Event(e, {
      bubbles: !0,
      cancelable: !1
    }));
    return {
      matched: !0,
      success: !!r.files?.length
    }
  } catch (e) {
    return {
      matched: !0,
      success: !1,
      reason: String(e)
    }
  }
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
    console.error("[uploadBrassringProfileBuilderFile]", err)
    res.send({
      success: false,
      ok: false,
      message: err instanceof Error ? err.message : "inject_failed"
    })
  }
}

export default handler
