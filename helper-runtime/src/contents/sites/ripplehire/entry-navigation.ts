// @ts-nocheck
/**
 * RippleHire entry navigation — readable TypeScript source of truth.
 */

import * as cancellation from "../../methods/cancellation.ts"
let i = 15e3, a = 100, l = "Autofill could not open the application form. Please open it manually and try again.", s = "The job page changed while opening the application. Please click Autofill again on the intended job.";
function u(e) {
  try {
    let t = new URL(e), r = /^#(detail|apply)\/job\/(\d+)\/?$/.exec(t.hash);
    if ("https:" !== t.protocol || !t.hostname.endsWith(".ripplehire.com") || !/^\/candidate\/?$/.test(t.pathname) || !r) return null;
    return { origin: t.origin, jobId: r[2], stage: r[1] };
  } catch {
    return null;
  }
}
function c(e) {
  if (!e.isConnected || !e.getClientRects().length) return false;
  for (let t = e; t; t = t.parentElement) {
    if (t.hidden || "true" === t.getAttribute("aria-hidden")) return false;
    let e2 = t.ownerDocument?.defaultView?.getComputedStyle(t);
    if (e2?.display === "none" || e2?.visibility === "hidden" || e2?.visibility === "collapse") return false;
  }
  return true;
}
function d(e, t, r) {
  let n = Array.from(e.querySelectorAll(t)).filter(c);
  if (1 !== n.length) return null;
  let o2 = n[0];
  return o2.disabled || "true" === o2.getAttribute("aria-disabled") || o2.getAttribute("type")?.toLowerCase() !== "button" || o2.textContent?.replace(/\s+/g, " ").trim().toLowerCase() !== r ? null : o2;
}
function f(e) {
  return Array.from(e.querySelectorAll("form#savecandidate")).some((e2) => c(e2) && Array.from(e2.querySelectorAll('input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"]), select, textarea')).some(c));
}
async function prepareRipplehireApplication({ root: e = document, getHref: t = () => window.location.href, now: r = Date.now, wait: n = cancellation.cancellableDelay } = {}) {
  let p2 = u(t());
  if (!p2) return null;
  let m = r(), h = false, g = false;
  for (; ; ) {
    cancellation.checkpoint();
    let b = u(t());
    if (!b || b.origin !== p2.origin || b.jobId !== p2.jobId) return s;
    if (f(e)) return null;
    if (r() - m >= i) return l;
    if ("detail" === b.stage && !h && !g) {
      let t2 = d(e, "button#btn-apply", "apply now");
      if (t2) {
        cancellation.checkpoint(), h = true, t2.click();
        continue;
      }
    }
    if ("apply" === b.stage && !g) {
      let t2 = d(e, "button#accept", "i agree"), r2 = t2?.parentElement?.parentElement;
      if (t2 && r2 && d(r2, "button#reject", "i don't agree") && Array.from(r2.querySelectorAll(".terms-content")).some(c)) {
        cancellation.checkpoint(), g = true, t2.click();
        continue;
      }
    }
    await n(Math.min(a, i - (r() - m)));
  }
}

export {
  prepareRipplehireApplication,
}
