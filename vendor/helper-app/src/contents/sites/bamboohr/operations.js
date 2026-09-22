/**
 * Parcel module id: gz0J8
 * Resolved path: src/contents/sites/bamboohr/operations.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/getTargetOrTimeout -> 1TBhF  =>  src/utils/getTargetOrTimeout.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "preFillForm", () => f), n.export(r, "uploadResume", () => p), n
  .export(r, "getBamboohrCoverLetterUploadDom", () => m), n.export(r,
    "getBamboohrCoverLetterStatus", () => h), n.export(r, "uploadCoverLetter", () => b), n.export(r,
    "getSelectOptionList", () => y), n.export(r, "clearInputField", () => S), n.export(r,
    "fillInputField", () => E), n.export(r, "clearCustomSelectField", () => x), n.export(r,
    "fillCustomSelectField", () => C), n.export(r, "clearCustomCheckboxField", () => j), n.export(r,
    "fillCustomCheckboxField", () => D), n.export(r, "fillVeteranField", () => P), n.export(r,
    "injectStyle", () => _), n.export(r, "removeStyle", () => L), n.export(r, "blurPage", () => R),
  n.export(r, "submitObserver", () => O);
var o = e("~contents/methods/answer"),
  i = e("~contents/methods/dom"),
  a = e("~core/enums"),
  l = e("~core/xpath"),
  s = e("~utils/delay"),
  u = e("~utils/getTargetOrTimeout"),
  c = n.interopDefault(u),
  d = e("~utils/string");
async function f() {
  let e = (0, l.getFirstOrderedNodeSafe)('.//button[child::span[text()="Apply for This Job"]]');
  e && (e?.click(), await (0, s.delay)(500))
}
async function p(e, t, r) {
  let n = document.querySelector('input[name="resumeFileId"]');
  if (n.value) {
    let t = n?.closest("div")?.textContent?.trim();
    if (t && t !== e.resumeName) {
      let e = n?.closest("div")?.querySelector("button");
      e.click(), await (0, s.delay)(200)
    }
  }
  let a = n?.closest("div")?.querySelector('input[type="file"]');
  a && await (0, i.uploadFiles)(a, await (0, o.fetchPdfAsBlob)(e), t, r, "Resume/CV")
}

function m() {
  let e = document.querySelector(
      'input[name="coverLetterFileId"][type="hidden"], input[name="coverLetterFileId"]'),
    t = e?.closest('[data-fabric-component="FileUpload"]') || e?.parentElement || null,
    r = t?.querySelector('input[type="file"][aria-label="file-input"], input[type="file"]') || null,
    n = t?.querySelector('[data-fabric-component="FileUploadList"]') || null,
    o = n?.querySelector('[class*="-name"], [class*="FileUploadList"] span') || null,
    i = t?.querySelector('button[aria-label="remove file"], button[aria-label*="remove" i]') ||
    null;
  return {
    input: r,
    hiddenInput: e,
    uploadedFileName: o,
    removeButton: i
  }
}

function h() {
  let {
    hiddenInput: e,
    input: t,
    uploadedFileName: r
  } = m();
  return e && (t || r || e.value) ? "optional" : ""
}

function g() {
  return m().uploadedFileName?.textContent?.trim() || ""
}
async function b(e, t, r) {
  let n = m();
  if (!n.hiddenInput) return !1;
  let a = !!(n.hiddenInput.value || n.uploadedFileName);
  if (a && !n.removeButton || (a && (n.removeButton.click(), n = await (0, c.default)(() => {
      let e = m();
      return e.input ? e : null
    }) || m()), !n.input)) return !1;
  await (0, i.uploadFiles)(n.input, await (0, o.fetchCoverLetterPdfAsBlob)(e), t, () => {},
    "Cover Letter", !1);
  let l = await (0, c.default)(() => g() || null, void 0, 30);
  return !!l && (r("Cover Letter"), !0)
}
async function y(e, t = !1) {
  let r = e?.getAttribute("data-menu-id"),
    n = await (0, c.default)(() => {
      e.dispatchEvent(new Event("click", {
        bubbles: !0
      }));
      let t = r ? document.getElementById(r) : null;
      return t?.querySelector(".fab-MenuOption") ? t : (0, l.getFirstOrderedNode)(
        `//div[@data-fabric-component="Menu" and @data-helium-id="${r}"]`)
    }, null, t ? 15 : 1);
  if (!n) return (console.warn("[BambooHR][Select] option-container-missing", {
    expanded: e.getAttribute("aria-expanded"),
    menuIdPresent: !!r
  }), t) ? [] : await v(e);
  let o = await (0, c.default)(() => {
    let e = n.querySelectorAll(".fab-MenuOption");
    return e.length > 0 ? e : null
  }, null, 15);
  return o.length ? (console.debug("[BambooHR][Select] option-container-ready", {
    lookup: n.id === r ? "id" : "legacy-data-helium-id",
    optionCount: o.length
  }), Array.from(o)) : []
}
async function v(e) {
  let t = await y(e, !0),
    r = document.querySelector("#applicationFormWrapper") || document.querySelector("#poRoot");
  return r.dispatchEvent(new Event("click", {
    bubbles: !0,
    cancelable: !1
  })), t
}
async function w(e, t) {
  e.value = t, e.dispatchEvent(new Event("input", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))
}
async function S(e) {
  await w(e, "")
}
async function E(e, t) {
  e.focus(), e.dispatchEvent(new FocusEvent("focus", {
    bubbles: !0
  })), t !== e.value && await w(e, t), await (0, s.delay)(200), e.blur(), e.dispatchEvent(
    new FocusEvent("blur", {
      bubbles: !0
    }))
}
async function x(e) {
  let t = e.parentElement.querySelector(".fab-SelectToggle__clearButtonContainer button");
  t?.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0,
    view: window
  }))
}
async function C(e, t) {
  try {
    e.focus(), e.dispatchEvent(new FocusEvent("focus", {
      bubbles: !0
    }));
    let r = t[0],
      n = e.querySelector(".fab-SelectToggle__content"),
      o = n?.textContent?.trim() || "";
    if (!r && o) await x(e);
    else if (r && r !== o) {
      e.dispatchEvent(new Event("click", {
        bubbles: !0
      })), await (0, s.delay)(200);
      let t = await y(e, !0);
      if (!t) throw Error("fillCustomSelectField - optionList is null");
      let n = !1,
        o = [];
      for (let e of t) {
        let t = e?.textContent?.trim();
        if (o.push(t.toLowerCase()), T(t, r)) {
          e.dispatchEvent(new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0,
            view: window
          })), n = !0;
          break
        }
      }
      if (!n) {
        let i = o.indexOf("other");
        if (i > -1) {
          t[i].dispatchEvent(new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0,
            view: window
          }));
          let o = e.closest(".fab-Select")?.querySelector("select"),
            a = o.name || o.id,
            l = document.querySelector(`input[name^="${a}"], input[id^="${a}"]`);
          l && (await E(l, r), n = !0)
        }
      }
      if (!n) throw Error("fillCustomSelectField - no select")
    }
  } catch {} finally {
    await (0, s.delay)(200), e.blur(), e.dispatchEvent(new FocusEvent("blur", {
      bubbles: !0
    }))
  }
}

function A(e) {
  return e.replace(/don't/gi, "do not").replace(/[^a-zA-Z0-9\s]/g, " ").replace(/\s+/g, " ")
    .toLowerCase().trim()
}

function k(e) {
  let t = A(e);
  return t.startsWith("no i do not have a disability") ? "disability:no" : t.startsWith(
      "yes i have a disability") ? "disability:yes" : "decline to answer" === t ||
    "i do not want to answer" === t || "i do not wish to self identify" === t ||
    "i prefer not to respond" === t ? "self-identify:decline" : null
}

function T(e, t) {
  if (e === t) return !0;
  let r = k(e),
    n = k(t);
  return !!r && r === n
}

function F(e) {
  if (!e || 0 === e.length) return null;
  if (1 === e.length) return e[0].parentElement;
  let t = (e, t) => {
      let r = new Set,
        n = e;
      for (; n;) r.add(n), n = n.parentElement;
      for (n = t; n;) {
        if (r.has(n)) return n;
        n = n.parentElement
      }
      return null
    },
    r = e[0];
  for (let n = 1; n < e.length; n++) {
    if (!r) return null;
    r = t(r, e[n])
  }
  return r
}

function I(e, t) {
  if (!(e instanceof HTMLInputElement) || "checkbox" !== e.type) {
    console.error("Error type error or value null", e);
    return
  }
  e.checked !== t && (e.checked = t, e.dispatchEvent(new Event("click", {
    bubbles: !0,
    cancelable: !0
  })))
}
async function j(e) {
  try {
    let t = e.$input;
    if ("radio" === t.type) {
      let r = t.closest("div.fab-Radio") || t.closest('[data-fabric-component="Radio"]') || t
        .closest('[data-fabric-component="Checkbox"]'),
        n = r.cloneNode(!0),
        o = n.querySelector("input[type='radio'], input[type='checkbox']");
      o.value = void 0, o.style.display = "none";
      let i = F(e.$checkboxs);
      i.appendChild(o), o.checked = !0, o.dispatchEvent(new MouseEvent("click", {
        bubbles: !0
      })), o.click(), await (0, s.delay)(100), i.removeChild(o)
    } else if ("checkbox" === t.type) {
      let t = Array.from(e.$checkboxs);
      for (let e of t) I(e, !1);
      await (0, s.delay)(100)
    }
  } catch (e) {
    console.error("Error clear checkbox:", e)
  }
}
async function D(e, t) {
  await j(e);
  let r = Array.from(e.$checkboxs);
  1 === r.length && "checkbox" === r[0].type ? I(r[0], "Yes" === t[0]) : await (0, i
    .fillCheckBoxesField)(e, t), await (0, s.delay)(200)
}
async function P(e, t) {
  let r = t[0],
    n = e.options.indexOf(r);
  if (n < 0) return !1;
  try {
    if (await j(e), n < 2) await (0, i.fillCheckBoxesField)(e, [r]);
    else {
      await (0, i.fillCheckBoxesField)(e, ["Veteran"]);
      let t = document.querySelector(
        ".CandidateField--veteranStatuses .fab-Select .fab-SelectToggle");
      await C(t, []), await C(t, [r])
    }
    return !0
  } catch (e) {
    return console.error("An unexpected error occurred:", e), !1
  }
}

function _() {
  let e = "fabric-menu-hide-style";
  if (document.getElementById(e)) return console.warn(
    "The style already exists and does not need to be injected again"), document.getElementById(
    e);
  let t = document.createElement("style");
  return t.id = e, t.textContent = `
    div[data-fabric-component="Menu"] {
      opacity: 0 !important;
      pointer-events: none !important;
    }
    .CandidateField--veteranStatusesShown {
      opacity: 0 !important;
      pointer-events: none !important;
    }
    .fab-Radio__input:checked+.fab-Radio__label {
      color: inherit !important;
      font-weight: inherit !important;
    }
    .fab-Radio__input:checked+.fab-Radio__label::before,
    .fab-Radio__input:checked+.fab-Radio__label::after {
	    transform: scale(0) !important;
      box-shadow: none !important;
    }
    .fab-TextInput--error,
    .fab-SelectToggle__innerFacade--errorCondition,
    .fab-SelectToggle__toggleButton--errorCondition {
      border-color: #c6c2bf !important;
    }
    .fab-Label::before {
      display:none !important;
    }
    .fab-Label--error {
      color: #38312f !important;
    }
  `, document.head.appendChild(t), t
}

function L() {
  let e = "fabric-menu-hide-style",
    t = document.getElementById(e);
  return !!t && (t.remove(), !0)
}

function R() {
  let e = (0, l.getFirstOrderedNode)('//*[@id="js-careers-root"]');
  if (e)
    for (let t = 0; t < 3; t++)(0, i.triggerEvents)(e, ["click"]), (0, i.triggerEvents)(e, [
      "mousedown"
    ]), (0, i.triggerEvents)(e, ["mouseup"])
}

function O(e) {
  if (e) {
    let e = new MutationObserver(() => {
        let t = l.getFirstOrderedNodeSafe(
            '//p[contains(text(), "Your application was submitted successfully")]', document)
          ?.parentElement?.parentElement?.parentElement;
        t && t.offsetHeight > 0 && (e.disconnect(), setTimeout(() => {
          window.top?.postMessage(d.cleanObject({
            type: a.MESSAGE_EVENTS.agentSubmitClicked
          }), {
            targetOrigin: "*"
          })
        }, 1e3))
      }),
      t = document.getElementById("js-careers-root");
    t && e.observe(t, {
      childList: !0,
      subtree: !0
    })
  }
}

