/**
 * Parcel module id: 6kRQQ
 * Resolved path: contents/sites/zohorecruit/rules.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getRules", () => d), n.export(r,
  "appendZohoPhoneRulesForTests", () => p), n.export(r, "getEduRules", () => g), n.export(r,
  "getExpRules", () => b), n.export(r, "getAdditionalFormSnapshotData", () => v), n.export(r,
  "getFormSnapshot", () => w);
var o = e("~core/enums");

function i(e, t) {
  let r = e.querySelector("lyte-drop-button");
  r && (r.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: !0,
    cancelable: !0
  })), r.dispatchEvent(new MouseEvent("mouseup", {
    bubbles: !0,
    cancelable: !0
  })), r.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0
  })));
  let n = [],
    o = document.querySelectorAll(`lyte-drop-item[data-zcqa*="${t}"]`);
  return o.forEach(e => {
    let t = e.textContent?.trim();
    t && "-None-" !== t && n.push(t)
  }), n
}

function a(e) {
  let t = Array.from(e.querySelectorAll("input[type='text']")),
    r = t.find(e => {
      let t = e.closest(
        "lyte-yield[style*='display: none'], .lyteDropdownHidden, .lyteSearchInput");
      if (t) return !1;
      let r = window.getComputedStyle(e);
      return "none" !== r.display && "hidden" !== r.visibility
    }) || null;
  return r || t[t.length - 1] || null
}

function l(e) {
  return e?.$input instanceof HTMLElement ? e.$input : Array.isArray(e?.$input) && e.$input[
    0] instanceof HTMLElement ? e.$input[0] : Array.isArray(e?.$checkboxs) && e.$checkboxs[
    0] instanceof HTMLElement ? e.$checkboxs[0] : null
}

function s(e) {
  return String(e || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}

function u(e) {
  let t = s(`${e?.label||""} ${e?.name||""}`);
  return e?.isPhone || t.includes("mobile") || t.includes("phone") ? "contact.mobile" : t.includes(
      "email") ? "contact.email" : t.includes("zip/postal code") || t.includes("zip code") || t
    .includes("postal code") || t.includes("zip_code") || /\bzip\b/.test(t) ? "address.zip" : t
    .includes("state/province") || t.includes("state") || t.includes("province") || t.includes(
      "etat") ? "address.state" : t.includes("city") || t.includes("ville") ? "address.city" : t
    .includes("country") || t.includes("pays") ? "address.country" : t.includes("street") ?
    "address.street" : ""
}

function c(e) {
  let t = l(e),
    r = t?.closest(".crc-form-row, .crc-form-tabularrow") || null,
    n = r?.closest(".wbf-doublewrapper, .wdb-doublewrapper") || r?.closest(".crc-form-sec") || r ||
    t;
  return {
    ...e,
    $fieldRow: r,
    __zohoClusterRoot: n,
    __zohoSemanticType: u(e)
  }
}
async function d() {
  let e = [],
    t = document.querySelectorAll(".crc-form-row");
  for (let r of t) {
    let t = r.querySelector("rec-tabular-component"),
      n = r.querySelector("button.tabular-group-add");
    if (t && n) {
      r.getAttribute("aria-label") || r.querySelector(".cw-section-title")?.textContent?.trim();
      let t = "additional_info",
        n = r.className.toLowerCase();
      if (n.includes("education")) {
        t = "education";
        let n = await m(r, "Education");
        n && e.push(...n)
      } else if (n.includes("experience")) {
        t = "workExperience";
        let n = await m(r, "Experience");
        n && e.push(...n)
      }
      continue
    }
    if (r.querySelector(".wbf-doublewrapper") || r.querySelector(".wdb-doublewrapper") || r
      .classList.contains("crc-form-sec")) continue;
    let l = r.querySelector("label.crm-from-label");
    if (!l) continue;
    let s = l.textContent?.replace("*", "").trim() || "",
      u = !!r.querySelector(".crc-form-mandatory");
    if (r.querySelector("rec-captcha-component") || /captcha/i.test(s)) continue;
    let c = r.querySelector(`crux-phone-component, crux-email-component, crux-text-component, 
       crux-number-component, crux-website-component, crux-picklist-component,
       crux-text-area-component, crux-radio-component, crux-inline-radio-component,
       rec-multi-radio-component, rec-multi-checkbox-component, rec-skills-component`),
      d = c?.getAttribute("cx-prop-label") || s,
      p = c?.getAttribute("cx-prop-zcqa") || "",
      h = Array.from(r.querySelectorAll("input[type='radio']"));
    if (h.length > 0) {
      let t = Array.from(r.querySelectorAll("lyte-radiobutton"));
      t.length > 0 && t.forEach(e => {
        let t = e.querySelector("input"),
          r = e.getAttribute("lt-prop-label");
        t && r && t.setAttribute("data-label", r)
      }), e.push({
        type: o.FIELD_TYPE.RADIOGROUP,
        label: d,
        name: p,
        $input: c,
        $checkboxs: h,
        $label: l,
        required: u,
        options: t.length > 0 ? t.map(e => e.getAttribute("lt-prop-label")).filter(Boolean) :
          void 0
      });
      continue
    }
    let g = Array.from(r.querySelectorAll("input[type='checkbox']"));
    if (g.length > 0) {
      let t = Array.from(r.querySelectorAll("lyte-checkbox"));
      t.length > 0 && t.forEach(e => {
        let t = e.querySelector("input"),
          r = e.getAttribute("lt-prop-label");
        t && r && t.setAttribute("data-label", r)
      }), e.push({
        type: o.FIELD_TYPE.MULTI_SELECT,
        label: d,
        name: p,
        $input: c,
        $checkboxs: g,
        $label: l,
        required: u,
        options: t.length > 0 ? t.map(e => e.getAttribute("lt-prop-label")).filter(Boolean) :
          void 0
      });
      continue
    }
    if (r.querySelector(".cnl-firstname-row")) {
      let t = r.querySelectorAll("crux-picklist-component, crux-text-component");
      t.forEach((t, r) => {
        let n = t.getAttribute("cx-prop-label") || s,
          a = t.getAttribute("cx-prop-zcqa") || "";
        if ("CRUX-PICKLIST-COMPONENT" === t.tagName) {
          let r = t.querySelector("lyte-dropdown");
          if (r) {
            let t = i(r, n);
            e.push({
              type: o.FIELD_TYPE.SELECT,
              label: n,
              name: a,
              $input: r,
              $label: l,
              required: !1,
              options: t
            })
          }
        } else if ("CRUX-TEXT-COMPONENT" === t.tagName) {
          let r = t.querySelector("lyte-input input");
          r && e.push({
            type: o.FIELD_TYPE.TEXT,
            label: n,
            name: a,
            $input: r,
            $label: l,
            required: u
          })
        }
      });
      continue
    }
    let b = r.querySelector("lyte-dropdown");
    if (b) {
      let t = r.querySelector("crux-phone-component");
      if (t) {
        let t = r.querySelector(".cxElementValue > lyte-input input") || r.querySelector(
          "lyte-input:not([is-search]) input");
        f(e, b, t, l, d, p, u)
      } else {
        let t = a(b);
        if (t) {
          e.push({
            type: o.FIELD_TYPE.TEXT,
            label: d,
            name: p,
            $input: t,
            $label: l,
            required: u
          });
          continue
        }
        let r = b.querySelector("lyte-drop-button");
        r && (r.dispatchEvent(new MouseEvent("mousedown", {
          bubbles: !0,
          cancelable: !0
        })), r.dispatchEvent(new MouseEvent("mouseup", {
          bubbles: !0,
          cancelable: !0
        })), r.dispatchEvent(new MouseEvent("click", {
          bubbles: !0,
          cancelable: !0
        })));
        let n = i(b, d);
        e.push({
          type: o.FIELD_TYPE.SELECT,
          label: d,
          name: p,
          $input: b,
          $label: l,
          required: u,
          options: n.length > 0 ? n : void 0
        })
      }
      continue
    }
    let y = r.querySelector("textarea");
    if (y) {
      e.push({
        type: o.FIELD_TYPE.TEXT,
        label: d,
        name: p,
        $input: y,
        $label: l,
        required: u
      });
      continue
    }
    let v = r.querySelector("rec-skills-component input.skillset-input, skills-tag #addSkills");
    if (v) {
      e.push({
        label: d || "Skill Set",
        type: "SKILL_SET",
        $input: v,
        required: u || !!r.querySelector(".crm-star"),
        name: v.getAttribute("name") || ""
      });
      continue
    }
    let w = r.querySelector("lyte-input input");
    if (w) {
      let t = w.getAttribute("placeholder");
      "MM/DD/YYYY" === t ? e.push({
        type: o.FIELD_TYPE.DATE,
        label: d,
        name: p,
        $input: w,
        $label: l,
        required: u
      }) : e.push({
        type: o.FIELD_TYPE.TEXT,
        label: d,
        name: p,
        $input: w,
        $label: l,
        required: u
      });
      continue
    }
  }
  return e.filter(e => e.$input || e.type === o.FIELD_TYPE.SELECT).map(e => c(e))
}

function f(e, t, r, n, a, l, s) {
  e.push({
    type: o.FIELD_TYPE.SELECT,
    label: "Phone Country Code",
    name: `${l||a}-phone-country-code`,
    $input: t,
    $label: n,
    required: s,
    options: i(t, "Phone Country Code")
  }), r && e.push({
    type: o.FIELD_TYPE.TEXT,
    label: a,
    name: l,
    $input: r,
    $countryCode: t,
    $label: n,
    isPhone: !0,
    required: s
  })
}
let p = f;
async function m(e, t) {
  let r = [],
    n = Array.from(e.querySelectorAll(".tabular-main-div"));
  if (0 === n.length) return null;
  for (let e = 0; e < n.length; e++) {
    let i = n[e],
      a = i.querySelectorAll(".crc-form-tabularrow"),
      l = [];
    a.forEach(e => {
      let t = e.querySelector("label"),
        r = t?.textContent?.replace(/\s+/g, " ").trim() || "";
      if (r.includes("Duration")) {
        let n = Array.from(e.querySelectorAll("lyte-dropdown")),
          i = ["Start Month", "Start Year", "End Month", "End Year"];
        n.forEach((e, n) => {
          let a = i[n] || `Date Part ${n+1}`;
          l.push({
            type: o.FIELD_TYPE.SELECT,
            label: a,
            name: e.id || `${r}_${n}`,
            $input: e,
            $label: t,
            required: !1
          })
        })
      } else if (r.includes("Currently")) {
        let n = e.querySelector('input[type="checkbox"]');
        n && l.push({
          type: o.FIELD_TYPE.CHECKBOX,
          label: r,
          name: n.getAttribute("name") || r,
          $input: n,
          $label: t,
          required: !1,
          options: ["Yes"]
        })
      } else {
        let n = e.querySelector("input, textarea, lyte-dropdown");
        r && n && l.push({
          type: "LYTE-DROPDOWN" === n.tagName ? o.FIELD_TYPE.SELECT : o.FIELD_TYPE.TEXT,
          label: r,
          name: n.getAttribute("name") || r,
          $input: n,
          $label: t,
          required: !1
        })
      }
    }), l.length > 0 && r.push({
      type: "Education" === t ? o.FIELD_TYPE.EDUCATION : o.FIELD_TYPE.EMPLOYMENT,
      label: t.toLowerCase(),
      $input: i,
      $label: i,
      required: !1,
      children: l,
      options: l.map(e => ({
        type: e.type,
        label: e.label,
        options: e.options || []
      }))
    })
  }
  return r.length > 0 ? r : null
}
async function h(e) {
  let t = await d();
  return t.filter(t => t.type === e)
}
async function g() {
  return h(o.FIELD_TYPE.EDUCATION)
}
async function b() {
  return h(o.FIELD_TYPE.EMPLOYMENT)
}

function y(e) {
  let t = {};
  return e.children?.forEach(e => {
    t[e.label] = S(e.$input, e.type)
  }), t
}
async function v(e) {
  let t = {};
  for (let r of e)(r.type === o.FIELD_TYPE.EDUCATION || r.type === o.FIELD_TYPE.EMPLOYMENT) && (t[
    r.type] || (t[r.type] = []), t[r.type].push(y(r)));
  return t
}
async function w(e) {
  let t = {};
  for (let r of e) {
    let e = r.label;
    if (r.type !== o.FIELD_TYPE.EDUCATION && r.type !== o.FIELD_TYPE.EMPLOYMENT) {
      if ("SKILL_SET" === r.type) {
        let r = Array.from(document.querySelectorAll(".skl-selected-skill li .skl-tag-name")).map(
          e => e.textContent?.trim());
        t[e] = r;
        continue
      }
      if (r.type === o.FIELD_TYPE.RADIOGROUP) {
        let n = r.$checkboxs?.find(e => e.checked);
        t[e] = n ? n.nextElementSibling?.textContent?.trim() || n.value : "";
        continue
      }
      t[e] = S(r.$input, r.type)
    }
  }
  return t
}

function S(e, t) {
  if (!e) return "";
  if ("LYTE-DROPDOWN" === e.tagName) {
    let t = e.querySelector(".lyteMarginRight.lyteOption")?.textContent?.trim() || e.querySelector(
      ".lyteDropButton span")?.textContent?.trim();
    return "-None-" === t ? "" : t
  }
  return t === o.FIELD_TYPE.CHECKBOX ? e.checked : e instanceof HTMLInputElement ||
    e instanceof HTMLTextAreaElement ? e.value : e.textContent?.trim() || ""
}

