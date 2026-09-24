// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../selectIcimsProfileOption.js
 */
import type { PlasmoMessaging } from "@plasmohq/messaging"

function injectMain(e) {
  let t = e => ({
      status: "failure",
      reason: e
    }),
    r = e => "string" == typeof e ? e.replace(/\s+/g, " ").trim() : "",
    a = r(e?.selectId),
    o = r(e?.candidate?.value),
    s = r(e?.candidate?.text);
  if (!a || a.length > 256 || !o || o.length > 256 || !s || s.length > 512) return t(
    "invalid-request");
  let n = globalThis.location,
    l = n?.hostname?.toLowerCase() ?? "";
  if (n?.protocol !== "https:" || "icims.com" !== l && !l.endsWith(".icims.com")) return t(
    "invalid-context");
  let i = globalThis.document?.getElementById(a);
  if (!i || !i.isConnected || !a.endsWith("CandProfileFields.School") && !a.endsWith(
      "CandProfileFields.Major") || "1" !== i.getAttribute("icimsdropdown-enabled")) return t(
    "invalid-control");
  let u = globalThis.ICIMS ?? globalThis.icimsUtils,
    c = u?.dropdowns?.[a];
  if ("function" != typeof c?.findWordFromValue || "function" != typeof c.optionSelected) return t(
    "missing-dropdown");
  let d = c.findWordFromValue(o);
  if (!d || "object" != typeof d || r(d.value) !== o || r(d.text) !== s) return t("missing-option");
  c.optionSelected(d);
  let p = i.selectedOptions?.[0],
    f = r(globalThis.document?.getElementById(`${a}_fakeSelected_icimsDropdown`)?.textContent);
  return r(p?.value) !== o || r(p?.text) !== s || f !== s ? t("uncommitted") : {
    status: "selected"
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
      args: [req.body]
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
    console.error("[selectIcimsProfileOption]", err)
    res.send({
      success: false,
      ok: false,
      opened: false,
      message: err instanceof Error ? err.message : "inject_failed"
    })
  }
}

export default handler
