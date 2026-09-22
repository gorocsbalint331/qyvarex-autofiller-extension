/**
 * Parcel module id: 2W7tx
 * Resolved path: contents/sites/jobvite/operations.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  _tilde_contents/methods/choice-match.js
 *   ~contents/methods/observer -> eTzUx  =>  _tilde_contents/methods/observer.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~utils/delay -> am614  =>  _tilde_utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "fillInputField", () => u), n.export(r, "fillSelectField", () =>
    c), n.export(r, "fillRadioField", () => d), n.export(r, "fillCheckboxField", () => f), n.export(
    r, "fillDateField", () => p), n.export(r, "blurPage", () => m), n.export(r, "uploadResume",
  () => h), n.export(r, "getCoverLetterStatus", () => C), n.export(r, "hasCoverLetterSlot", () =>
  A), n.export(r, "waitForCoverLetterSlot", () => k), n.export(r, "uploadCoverLetter", () => F), n
  .export(r, "uploadFiles", () => I), n.export(r, "submitObserver", () => j), n.export(r,
    "hasUploadedResume", () => D);
var o = e("~contents/methods/choice-match"),
  i = e("~core/xpath"),
  a = e("~contents/methods/answer"),
  l = e("~contents/methods/observer"),
  s = e("~utils/delay");
let u = async (e, t) => {
  if (e && t) {
    if ("number" === e.type) {
      let e = t.match(/[\d,.]+/);
      if (!e) return;
      t = e[0].replace(/,/g, "")
    }
    e.focus(), e.value = t, e.dispatchEvent(new Event("input", {
      bubbles: !0,
      cancelable: !0
    })), e.dispatchEvent(new Event("change", {
      bubbles: !0,
      cancelable: !0
    })), await (0, s.delay)(100), e.blur()
  }
}, c = async (e, t) => {
  if (!e || !t.length) return;
  let r = t[0],
    n = Array.from(e.options);
  for (let t of n)
    if ((0, o.isExactChoiceMatch)(t.text, r)) {
      e.value = t.value, e.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !0
      })), await (0, s.delay)(100), e.blur();
      return
    }
}, d = async (e, t) => {
  if (!e.length || !t.length) return;
  let r = t[0].toLowerCase();
  for (let t of e) {
    let e = t.closest("label") || t.nextElementSibling,
      n = e?.textContent?.trim().toLowerCase() || "";
    if (n === r) {
      t.click(), t.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !0
      })), await (0, s.delay)(100), t.blur();
      return
    }
  }
}, f = async (e, t) => {
  if (!e.length || !t.length) return;
  let r = t.map(e => e.toLowerCase());
  for (let t of e) {
    let e = t.closest("label") || t.nextElementSibling,
      n = e?.textContent?.trim().toLowerCase() || "";
    r.includes(n) && (t.click(), t.dispatchEvent(new Event("change", {
      bubbles: !0,
      cancelable: !0
    })), await (0, s.delay)(100), t.blur())
  }
}, p = async (e, t) => {
  if (!e || !t) return;
  let r = t.trim(),
    n = /^\d{4}$/,
    o = /^\d{4}[-/]\d{2}$/;
  n.test(r) ? r = `${r}-01-01` : o.test(r) && (r = `${r.replace("/","-")}-01`), e
  .focus(), e.value = r, e.dispatchEvent(new Event("input", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new Event("change", {
    bubbles: !0,
    cancelable: !0
  })), await (0, s.delay)(100), e.blur()
}, m = () => {
  let e = document.activeElement;
  e && e.blur()
}, h = async e => {
    let t = (0, i.getFirstOrderedNode)('//input[@id="file-input-0"]');
    t && await I(t, await (0, a.fetchPdfAsBlob)(e))
  }, g = e => e?.replace(/\s+/g, " ").trim().toLowerCase() || "", b = e => {
    let t = [e.getAttribute("attachment-label"), e.getAttribute("pasted-label"), e
      .getAttribute("aria-label"), e.textContent
    ].map(g).filter(Boolean).join(" ");
    return t.includes("cover letter")
  }, y = () => {
    let e = Array.from(document.querySelectorAll(
      "button[jv-add-attachment], button[attachment-label], button[aria-label]"));
    return e.find(b) ?? null
  }, v = (e = y()) => e?.closest(".jv-additional-files, .jv-apply-section") ?? null, w =
  () => Array.from(document.querySelectorAll('input[type="file"]')), S = e =>
  "file-input-0" === e.id, E = (e, t) => {
    if (S(e)) return !1;
    let r = [e.id, e.name, e.getAttribute("aria-label"), e.getAttribute(
        "data-automation-id"), e.closest("[aria-label]")?.getAttribute("aria-label"),
      e.closest("label")?.textContent, e.closest(
        ".jv-additional-files, .jv-apply-section")?.textContent
    ].map(g).filter(Boolean).join(" ");
    return "file-input-1" === e.id || r.includes("cover letter") || !!t?.contains(e)
  }, x = (e = new Set, t = y()) => {
    let r = v(t),
      n = w(),
      o = n.find(t => !e.has(t) && !S(t));
    if (o) return o;
    let i = n.filter(e => E(e, r));
    return i.at(-1) ?? null
  }, C = () => {
    let e = y();
    if (!e) return "";
    let t = v(e),
      r = [t?.textContent, e.getAttribute("attachment-label"), e.getAttribute(
        "pasted-label"), e.getAttribute("aria-label"), e.textContent].map(g).filter(
        Boolean).join(" ");
    return r.includes("optional") ? "optional" : "required"
  }, A = () => "" !== C(), k = async () => await (0, l.waitForCondition)(() => A(), {
    timeout: 3e3,
    interval: 100,
    observeTarget: document.body
  }), T = async () => {
    let e = y(),
      t = x(new Set, e);
    if (t) return t;
    if (!e) return null;
    let r = new Set(w());
    e.click();
    let n = await (0, l.waitForCondition)(() => !!x(r, e), {
      timeout: 2e3,
      interval: 50,
      observeTarget: v(e) ?? document.body
    });
    return n ? x(r, e) : null
  }, F = async e => {
    let t = await T();
    return !!t && await I(t, await (0, a.fetchCoverLetterPdfAsBlob)(e))
  }, I = async (e, t) => {
    try {
      if (e?.files) return e.files = t.files, e.dispatchEvent(new Event(
        "change", {
          bubbles: !0,
          cancelable: !1
        })), !0
    } catch (e) {
      console.error("Error uploading files:", e)
    }
    return !1
  }, j = () => {}, D = async () => {
    let e = (0, i.getFirstOrderedNode)('//input[@id="file-input-0"]'),
      t = (0, i.getFirstOrderedNode)('//h3[@id="jv-resume-header"]');
    return !!(e && t)
  }

