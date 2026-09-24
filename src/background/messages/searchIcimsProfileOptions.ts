// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../searchIcimsProfileOptions.js
 */
import type { PlasmoMessaging } from "@plasmohq/messaging"

async function injectMain(e) {
  let t = e => ({
      status: "failure",
      reason: e
    }),
    r = e => "string" == typeof e ? e.replace(/\s+/g, " ").trim() : "",
    a = r(e?.selectId),
    o = r(e?.searchInput);
  if (!a || a.length > 256 || !o || o.length > 256) return t("invalid-request");
  let s = globalThis.location,
    n = s?.hostname?.toLowerCase() ?? "";
  if (s?.protocol !== "https:" || "icims.com" !== n && !n.endsWith(".icims.com")) return t(
    "invalid-context");
  let l = globalThis.document?.getElementById(a),
    i = a.endsWith("CandProfileFields.School") ? "CandProfileFields.School" : a.endsWith(
      "CandProfileFields.Major") ? "CandProfileFields.Major" : "",
    u = r(l?.getAttribute("hash"));
  if (!l || !l.isConnected || !i || !u || u.length > 256 || "1" !== l.getAttribute(
      "icimsdropdown-enabled") || "1" !== l.getAttribute("icimsdropdown-search") || "1" !== l
    .getAttribute("icimsdropdown-ajax")) return t("invalid-control");
  let c = new URL("/jobs/profileoptions", s.origin);
  for (let [e, t] of [
      ["in_iframe", "1"],
      ["q", o],
      ["page", "0"],
      ["size", "25"],
      ["parentValue", ""],
      ["id", i],
      ["hash", u]
    ]) c.searchParams.append(e, t);
  let d = new AbortController,
    p = setTimeout(() => d.abort(), 3e3);
  try {
    let e;
    let a = await fetch(c.toString(), {
        method: "GET",
        credentials: "same-origin",
        redirect: "error",
        cache: "no-store",
        signal: d.signal
      }),
      o = new URL(a.url);
    if (!a.ok || 200 !== a.status || a.redirected || o.origin !== s.origin ||
      "/jobs/profileoptions" !== o.pathname) return t("request-failed");
    try {
      e = await a.json()
    } catch {
      return t("invalid-response")
    }
    if (!e || "object" != typeof e || Array.isArray(e)) return t("invalid-response");
    let n = e.total,
      l = e.options;
    if ("number" != typeof n || !Number.isFinite(n) || !Number.isInteger(n) || n < 0 || !Array
      .isArray(l) || l.length > 25 || 0 === n && l.length > 0 || n > 0 && 0 === l.length)
    return t("invalid-response");
    let i = [],
      u = new Set;
    for (let e of l) {
      if (!e || "object" != typeof e || Array.isArray(e)) return t("invalid-response");
      let a = r(e.value),
        o = r(e.text);
      if (!a || a.length > 256 || !o || o.length > 512) return t("invalid-response");
      let s = JSON.stringify([a, o]);
      u.has(s) || (u.add(s), i.push({
        value: a,
        text: o
      }))
    }
    return i.length ? {
      status: "ready",
      candidates: i
    } : {
      status: "no-results",
      candidates: []
    }
  } catch {
    return t("request-failed")
  } finally {
    clearTimeout(p)
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
    console.error("[searchIcimsProfileOptions]", err)
    res.send({
      success: false,
      ok: false,
      opened: false,
      message: err instanceof Error ? err.message : "inject_failed"
    })
  }
}

export default handler
