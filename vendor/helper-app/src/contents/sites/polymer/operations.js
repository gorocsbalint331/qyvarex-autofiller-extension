/**
 * Parcel module id: 75HQr
 * Resolved path: src/contents/sites/polymer/operations.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "findUploaderInput", () => c), n.export(r,
  "getPolymerCoverLetterStatus", () => d), n.export(r, "simulateUserClick", () => f), n.export(r,
  "fillTextField", () => p), n.export(r, "fillReactSelect", () => m), n.export(r, "uploadResume",
  () => h), n.export(r, "uploadCoverLetter", () => g);
var o = e("~utils/delay"),
  i = e("~contents/methods/answer"),
  a = e("~contents/methods/dom");
let l = {
  resume: {
    field: "resume",
    action: "attach resume/cv"
  },
  "cover-letter": {
    field: "cover letter",
    action: "attach file"
  }
};

function s(e) {
  return (e || "").replace(/\s+/g, " ").trim().toLowerCase()
}

function u(e) {
  let t = Array.from(document.querySelectorAll('div[class*="FormUploader"]'));
  for (let r of t) {
    let t = r.querySelector('input[type="file"]');
    if (!t) continue;
    let n = Array.from(r.querySelectorAll("label")),
      o = n.find(e => e.getAttribute("for") !== t.id),
      i = n.find(e => e.getAttribute("for") === t.id),
      a = s(o?.textContent),
      u = s(i?.textContent),
      c = l[e];
    if (a !== c.field || u !== c.action) continue;
    let d = r.querySelector('[class*="FormLabel_RequiredLabel"]');
    return {
      input: t,
      required: t.required || s(d?.textContent).includes("required")
    }
  }
  return null
}

function c(e) {
  return u(e)?.input || null
}

function d() {
  let e = u("cover-letter");
  return e ? e.required ? "required" : "optional" : ""
}
async function f(e, t = !1) {
  e.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: !0,
    cancelable: !0,
    view: window
  })), await (0, o.delay)(50), e.dispatchEvent(new MouseEvent("mouseup", {
    bubbles: !0,
    cancelable: !0,
    view: window
  })), e.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0,
    view: window
  })), t && e.focus()
}
async function p(e, t) {
  if (!e || !t) return;
  e.focus(), await (0, o.delay)(100);
  let r = e instanceof HTMLTextAreaElement ? window.HTMLTextAreaElement.prototype : window
    .HTMLInputElement.prototype,
    n = Object.getOwnPropertyDescriptor(r, "value")?.set;
  n ? n.call(e, t) : e.value = t, e.dispatchEvent(new Event("input", {
    bubbles: !0
  })), e.dispatchEvent(new Event("change", {
    bubbles: !0
  })), e.dispatchEvent(new Event("blur", {
    bubbles: !0
  })), await (0, o.delay)(100)
}
async function m(e, t) {
  if (!e || !t) return;
  let r = Array.isArray(t) ? t[0] : t;
  if (!r) {
    console.warn("[Polymer fillReactSelect] Empty value provided");
    return
  }
  try {
    await f(e, !0), await (0, o.delay)(500);
    let t = document.querySelector(".form-select-ui__menu");
    if (t) {
      let e = t.querySelectorAll(".form-select-ui__option");
      for (let t of Array.from(e)) {
        let e = t.textContent?.trim().toLowerCase() || "";
        if (e === r.toLowerCase()) {
          await f(t), await (0, o.delay)(300);
          return
        }
      }
      console.warn(`[Polymer fillReactSelect] No matching option found for: ${r}`), await f(
        document.body), await (0, o.delay)(100)
    } else console.warn("[Polymer fillReactSelect] Menu not found after clicking input")
  } catch (e) {
    console.error("[Polymer fillReactSelect] Error:", e)
  }
}
async function h(e, t, r) {
  let n = c("resume");
  if (!n) {
    console.warn("[Polymer uploadResume] File input not found");
    return
  }
  try {
    await (0, a.uploadFiles)(n, await (0, i.fetchPdfAsBlob)(e), t, r, "Resume/CV")
  } catch (e) {
    console.error("[Polymer uploadResume] Error:", e)
  }
}
async function g(e, t, r) {
  let n = u("cover-letter");
  if (!n) return console.warn("[Polymer uploadCoverLetter] File input not found"), !1;
  try {
    return await (0, a.uploadFiles)(n.input, await (0, i.fetchCoverLetterPdfAsBlob)(e), t, r,
      "Cover Letter", n.required), !0
  } catch (e) {
    return console.error("[Polymer uploadCoverLetter] Error:", e), !1
  }
}

