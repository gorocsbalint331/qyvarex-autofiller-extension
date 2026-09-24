// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../kulaCompanyDom.js
 */
import type { PlasmoMessaging } from "@plasmohq/messaging"

function injectMain(e) {
  let t;
  let r = () => ({
    status: "failed",
    candidates: []
  });
  if ("careers.kula.ai" !== location.hostname || !e || !/^profile\.experience\[\d+\]\.company$/
    .test(e.inputName) || "string" != typeof e.query || e.query.length > 256 || !["snapshot",
      "click"
    ].includes(e.action)) return r();
  let a = Array.from(document.getElementsByName(e.inputName)).filter(e => "INPUT" === e.tagName);
  if (1 !== a.length) return r();
  let o = a[0],
    s = o.closest('[data-test-id="company"]');
  if (!s || !o.isConnected) return r();
  let n = s.querySelector('section.chakra-popover__content[role="dialog"]'),
    l = e => {
      if (!e?.isConnected) return !1;
      let t = getComputedStyle(e);
      return "none" !== t.display && "hidden" !== t.visibility && Number(t.opacity || 1) > .1
    },
    i = e => {
      let t = Object.keys(e).find(e => e.startsWith("__reactFiber$") || e.startsWith(
          "__reactInternalInstance$")),
        r = t ? e[t] : null;
      for (let e of [r, r?.alternate]) {
        if (!e) continue;
        let t = e,
          r = new Set;
        for (let e = 0; t.return && e < 1e3 && !r.has(t); e++) r.add(t), t = t.return;
        if (!t.return && (!t.stateNode?.current || t.stateNode.current === t)) return e
      }
      return null
    },
    u = e => e && ("string" == typeof e.id || "number" == typeof e.id) && String(e.id).trim() &&
    "new_custom_value" !== String(e.id) && "string" == typeof e.name && e.name.trim() ? {
      id: String(e.id),
      name: e.name,
      ..."string" == typeof e.domain && e.domain.trim() ? {
        domain: e.domain.trim()
      } : {}
    } : null;
  for (let r = i(o), a = 0; r && a < 30; r = r.return, a++)
    if (r.memoizedProps?.field?.name === e.inputName) {
      t = u(r.memoizedProps.field.value)?.id;
      break
    } let c = l(n),
    d = {
      committedId: t,
      menuOpen: c,
      inputValue: o.value,
      invalid: "true" === o.getAttribute("aria-invalid") || s.hasAttribute("data-invalid") || !!s
        .querySelector(".chakra-form__error-message")
    };
  if (!c) return {
    status: "ready",
    candidates: [],
    ...d
  };
  if (o.value !== e.query) return r();
  if (n.querySelector('.chakra-spinner, [role="progressbar"]')) return {
    status: "pending",
    candidates: [],
    ...d
  };
  let p = [];
  for (let t of Array.from(n.children)) {
    if (!(t instanceof HTMLElement) || !l(t) || "DIV" !== t.tagName || !t.querySelector("p") ||
      "true" === t.getAttribute("aria-disabled") || /^Add and select\b/i.test(t.textContent
      ?.trim() || "")) continue;
    let a = null;
    for (let e = i(t), r = 0; e && r < 10 && e.stateNode !== n; e = e.return, r++)
      if (e.memoizedProps?.option) {
        a = u(e.memoizedProps.option);
        break
      } if (!a || a.name !== t.textContent?.trim()) return r();
    p.push({
      element: t,
      option: {
        candidate_key: `${e.inputName}:${a.id}`,
        value: a.id,
        text: a.name,
        ...a.domain ? {
          domain: a.domain
        } : {}
      }
    })
  }
  if (new Set(p.map(e => e.option.candidate_key)).size !== p.length) return r();
  if ("click" === e.action) {
    let t = e.selected,
      a = p.filter(({
          option: e
        }) => t && e.candidate_key === t.candidate_key && e.value === t.value && e.text === t
        .text && e.domain === t.domain);
    if (1 !== a.length) return r();
    a[0].element.click()
  }
  return {
    status: "ready",
    candidates: p.map(e => e.option),
    ...d
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
    console.error("[kulaCompanyDom]", err)
    res.send({
      success: false,
      ok: false,
      opened: false,
      message: err instanceof Error ? err.message : "inject_failed"
    })
  }
}

export default handler
