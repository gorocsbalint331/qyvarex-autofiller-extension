/**
 * Parcel module id: 4P8sE
 * Resolved path: src/contents/sites/breezy/operations.js
 * Dependencies:
 *   ./rules -> hU5fc  =>  src/contents/sites/breezy/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/getTargetOrTimeout -> 1TBhF  =>  src/utils/getTargetOrTimeout.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "stabilizeBreezyAngularLocation", () => p), n.export(r,
    "preFillForm", () => h), n.export(r, "afterUploadResume", () => g), n.export(r, "uploadResume",
    () => b), n.export(r, "uploadFiles", () => y), n.export(r, "waitForBreezyResumeReady", () => v),
  n.export(r, "fillInputField", () => S), n.export(r, "fillDateField", () => E), n.export(r,
    "fillSelectField", () => x), n.export(r, "fillRadioField", () => C), n.export(r,
    "fillCheckboxField", () => A), n.export(r, "clickDeleteItemButton", () => k), n.export(r,
    "clickAddItemButton", () => T), n.export(r, "ensureEducationAndWorkExperienceContainers", () =>
    F), n.export(r, "blurPage", () => I), n.export(r, "getSnapshot", () => j), n.export(r,
    "submitObserver", () => D);
var o = e("~contents/methods/choice-match"),
  i = e("~contents/methods/answer"),
  a = e("~core/enums"),
  l = e("~core/xpath"),
  s = e("~store/url"),
  u = e("~utils/delay"),
  c = e("~utils/getTargetOrTimeout"),
  d = n.interopDefault(c),
  f = e("./rules");
let p = ({
    currentTabUrl: e,
    currentUrl: t = window.location.href,
    history: r = window.history,
    setCurrentTabUrl: n
  } = {}) => {
    let o;
    try {
      o = new URL(t)
    } catch {
      return null
    }
    if (!o.searchParams.has("jr_id")) return null;
    let i = e || (0, s.useUrlStore).getState().currentTabUrl || t;
    o.searchParams.delete("jr_id");
    let a = o.toString();
    return a === t ? null : (r.replaceState(r.state, "", a), (n || (0, s.useUrlStore).getState()
      .setCurrentTabUrl)(i), {
      visibleUrl: a,
      preservedAutofillUrl: i
    })
  },
  m = e => {
    let t = e => {
      e.preventDefault()
    };
    document.addEventListener("click", t, {
      capture: !0,
      once: !0
    });
    try {
      e.click()
    } finally {
      document.removeEventListener("click", t, {
        capture: !0
      })
    }
  },
  h = async () => {
    let e = (0, l.getFirstOrderedNodeSafe)('.//a[child::span[text()="Apply To Position"]]');
    if (e) {
      e?.click();
      return
    }
  }, g = async () => {
    let e = await (0, d.default)(() => {
      let e = (0, l.getFirstOrderedNode)(
        "//div[contains(@class, 'file-input-container') and .//span[text()='Attached']]");
      if (e) return e
    }, () => !1, 100);
    e && (await k(document), await k(document), await T(document, f.hardCodeConfig[f
      .HARDCODE_KEY.education].addButton, (0, l.getOrderedNodes)(f.hardCodeConfig[f
      .HARDCODE_KEY.education].container).length > 0 ? 0 : 1), await T(document, f
      .hardCodeConfig[f.HARDCODE_KEY.workExperience].addButton, (0, l.getOrderedNodes)(f
        .hardCodeConfig[f.HARDCODE_KEY.workExperience].container).length > 0 ? 0 : 1))
  }, b = async e => {
    let t = (0, l.getFirstOrderedNode)('//input[@name="cResume"]');
    t && await y(t, await (0, i.fetchPdfAsBlob)(e)), await g()
  }, y = async (e, t) => {
    if (e && t) {
      try {
        e.files = t.files, e.dispatchEvent(new Event("change", {
          bubbles: !0,
          cancelable: !1
        }))
      } catch (e) {
        console.error("Error uploading files:", e);
        return
      }
      await v()
    }
  }, v = async (e = 15e3) => {
    let t = Date.now(),
      r = await (0, d.default)(() => (0, l.getFirstOrderedNode)(
        "//div[contains(@class, 'file-input-container') and .//span[text()='Attached']]"
        ), () => Date.now() - t > e, Math.max(1, Math.ceil((e - (Date.now() - t)) /
        100)));
    if (!r) return;
    let n = window.angular?.element?.(document.body)?.injector?.()?.get?.("$http");
    if (!n?.pendingRequests) {
      await w(r, t, e);
      return
    }
    let o = 0;
    for (; Date.now() - t < e;) {
      if (0 === n.pendingRequests.length) {
        if (o || (o = Date.now()), Date.now() - o >= 500) return
      } else o = 0;
      await (0, u.delay)(100)
    }
  }, w = async (e, t, r, n = 500, o = 1e3) => {
    if ("undefined" == typeof MutationObserver) {
      await (0, u.delay)(o);
      return
    }
    let i = e.closest("form") || document.body,
      a = Date.now(),
      l = new MutationObserver(() => {
        a = Date.now()
      });
    l.observe(i, {
      attributes: !0,
      childList: !0,
      subtree: !0
    });
    try {
      for (; Date.now() - t < r;) {
        let e = Date.now() - t,
          r = Date.now() - a;
        if (e >= o && r >= n) return;
        await (0, u.delay)(100)
      }
    } finally {
      l.disconnect()
    }
  }, S = async (e, t) => {
    e && t && (e.focus(), e.value = t, e.dispatchEvent(new Event("input", {
      bubbles: !0,
      cancelable: !0
    })), e.dispatchEvent(new Event("change", {
      bubbles: !0,
      cancelable: !0
    })), await (0, u.delay)(100), e.blur())
  }, E = async (e, t) => {
    if (!e || !t) return;
    Array.isArray(t) && (t = t[0]);
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
      })), await (0, u.delay)(100), e.blur()
  }, x = async (e, t) => {
    if (!e || !t.length) return;
    let r = t[0],
      n = Array.from(e.options);
    for (let t of n)
      if ((0, o.isExactChoiceMatch)(t.text.toLowerCase(), r.toLowerCase())) {
        e.value = t.value, e.dispatchEvent(new Event("change", {
          bubbles: !0,
          cancelable: !0
        })), await (0, u.delay)(100), e.blur();
        return
      }
  }, C = async (e, t) => {
    if (!e.length || !t.length) return;
    Array.isArray(t) && (t = t[0]);
    let r = t.toLowerCase();
    for (let t of e) {
      let e = t.closest("label") || t.nextElementSibling,
        n = e?.textContent?.trim().toLowerCase() || "";
      if (n === r) {
        t.click(), t.dispatchEvent(new Event("change", {
          bubbles: !0,
          cancelable: !0
        })), await (0, u.delay)(100), t.blur();
        return
      }
    }
  }, A = async (e, t) => {
    if (!e.length || !t.length) return;
    let r = t.map(e => e.toLowerCase());
    for (let t of e) {
      let e = t.closest("label") || t.nextElementSibling,
        n = e?.textContent?.trim().toLowerCase() || "";
      r.includes(n) && (t.click(), t.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !0
      })), await (0, u.delay)(100), t.blur())
    }
  }, k = async e => {
    if (!e) return;
    let t = (0, l.getOrderedNodes)('.//a[text()="Delete"]', e) || [];
    for (let e of t) m(e), await (0, u.delay)(300)
  }, T = async (e, t, r) => {
    if (r <= 0) return;
    let n = null;
    if (n = (0, l.getFirstOrderedNode)(t, e)) {
      for (let e = 0; e < r; e++) m(n), await (0, u.delay)(500);
      await (0, u.delay)(500)
    }
  }, F = async () => {
    for (let e of [f.hardCodeConfig[f.HARDCODE_KEY.education], f
        .hardCodeConfig[f.HARDCODE_KEY.workExperience]
      ]) {
      let t = (0, l.getFirstOrderedNode)(e.addButton, document),
        r = (0, l.getOrderedNodes)(e.container, document);
      t && 0 === r.length && await T(document, e.addButton, 1)
    }
  }, I = () => {
    let e = document.activeElement;
    e && e.blur()
  }, j = e => {
    let t = {};
    for (let r of e) {
      let e = r.label;
      if (!e) continue;
      let n = r;
      switch (r.type) {
        case a.FIELD_TYPE.TEXT:
        case a.FIELD_TYPE.DATE: {
          let r = n.$input;
          t[e] = r?.value || "";
          break
        }
        case a.FIELD_TYPE.SELECT: {
          let r = n.$input;
          if (r && r.selectedIndex >= 0) {
            let n = r.options[r.selectedIndex];
            t[e] = n?.text?.trim() || ""
          } else t[e] = "";
          break
        }
        case a.FIELD_TYPE.RADIO: {
          let r = n.$input,
            o = r?.find(e => e.checked);
          if (o) {
            let r = o.closest("label") || o.nextElementSibling;
            t[e] = r?.textContent?.trim() || o.value
          } else t[e] = "";
          break
        }
        case a.FIELD_TYPE.CHECKBOX: {
          let r = n.$checkboxs,
            o = [];
          if (r) {
            for (let e of r)
              if (e.checked) {
                let t = e.closest("label") || e.nextElementSibling;
                o.push(t?.textContent?.trim() || e.value)
              }
          }
          t[e] = o
        }
      }
    }
    let r = (0, l.getOrderedNodes)(f.hardCodeConfig[f.HARDCODE_KEY
      .education].snapshot);
    if (r.length > 0) {
      let e = f.hardCodeConfig[f.HARDCODE_KEY.education].fields,
        n = [];
      for (let t of r) {
        let r = {};
        for (let n of e) {
          let e = (0, l.getFirstOrderedNode)(n.xpath, t);
          r[n.key] = e?.value || ""
        }
        Object.values(r).every(e => !e) || n.push(r)
      }
      t.education = n
    }
    let n = (0, l.getOrderedNodes)(f.hardCodeConfig[f.HARDCODE_KEY
      .workExperience].snapshot);
    if (n.length > 0) {
      let e = f.hardCodeConfig[f.HARDCODE_KEY.workExperience].fields,
        r = [];
      for (let t of n) {
        let n = {};
        for (let r of e) {
          let e = (0, l.getFirstOrderedNode)(r.xpath, t);
          n[r.key] = e?.value || ""
        }
        Object.values(n).every(e => !e) || r.push(n)
      }
      t.employment = r
    }
    return t
  }, D = e => {
    if (!e) return;
    let t = new MutationObserver(e => {
      for (let t of e) t.type
    });
    t.observe(document.body, {
      childList: !0,
      subtree: !0
    })
  }

