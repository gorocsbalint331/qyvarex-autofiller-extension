/**
 * Parcel module id: e00gr
 * Resolved path: src/contents/sites/jobvite/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getJobvitePrescreenSectionTitle", () => p), n.export(r,
  "isInsideUnsupportedJobviteReferenceSection", () => m), n.export(r, "groupWorkHistoryElements",
  () => y), n.export(r, "groupJobviteEmploymentSections", () => v), n.export(r, "getRules", () =>
  C), n.export(r, "getFormSnapshot", () => _);
var o = e("~core/enums"),
  i = e("~core/xpath");
let a = () => {
    let e = `//label[@class='jv-form-field-label ng-binding ng-scope'] |
  //label[@for='jv-country-select'] |
  //legend[@class='jv-form-field-legend ng-binding'] |
  //span[@class='ng-binding ng-scope']`,
      t = (0, i.getOrderedNodes)(e);
    return t
  },
  l = "work history",
  s = /^previous employment(?: \d+)?:?$/,
  u = ["company name", "name of company", "employer name"],
  c = [":scope > .jv-prescreen-element-sectiontitle", ":scope > .jv-prescreen-section-header"],
  d = new Set(["business/professional references", "business references", "professional references",
    "references"
  ]),
  f = e => e?.replaceAll("*", "").replace(/\s+/g, " ").trim().toLowerCase() || "",
  p = e => {
    for (let t of c) {
      let r = e.querySelector(t)?.textContent;
      if (r) return r
    }
    return ""
  },
  m = e => {
    let t = e.closest(".jv-prescreen-section");
    return d.has(f(t ? p(t) : ""))
  },
  h = e => e.classList.contains("jv-prescreen-element-horizontalline"),
  g = e => e.classList.contains("jv-prescreen-element-rightcolumntext") && /\bemployer\b/.test(f(e
    .textContent)),
  b = e => e.some(e => u.some(t => f(e.textContent).startsWith(t))),
  y = e => {
    let t = e.flatMap((e, t) => g(e) ? [t] : []);
    if (t.length > 0) {
      let r = t.length > 1 ? t[1] - t[0] : void 0;
      return t.map((n, o) => {
        let i = t[o + 1],
          a = i ?? (r ? n + r : e.length);
        return e.slice(n, a)
      }).filter(b)
    }
    let r = [],
      n = [],
      o = () => {
        b(n) && r.push(n), n = []
      };
    for (let t of e) {
      if (h(t)) {
        o();
        continue
      }
      n.push(t)
    }
    return o(), r
  },
  v = e => e.flatMap(({
    title: e,
    elements: t
  }) => {
    let r = f(e);
    return r === l ? y(t) : s.test(r) && b(t) ? [t] : []
  }),
  w = () => {
    let e = Array.from(document.querySelectorAll(".jv-prescreen-section")).map(e => ({
        title: p(e),
        elements: Array.from(e.children).filter(e => e.classList.contains(
          "jv-prescreen-element"))
      })),
      t = v(e);
    return e.length > 0 && console.info("[Jobvite][Employment] inspected prescreen sections", {
      sectionCount: e.length,
      recognizedRowCount: t.length
    }), t
  },
  S = e => {
    if (!e.classList.contains("jv-prescreen-element-fromto")) return [];
    let t = e.querySelector("p .ng-binding")?.textContent || "",
      r = t.split("/").map(e => e.trim()).filter(Boolean),
      n = Array.from(e.querySelectorAll('input[type="text"]'));
    return n.slice(0, r.length).map((t, n) => ({
      type: o.FIELD_TYPE.TEXT,
      label: r[n],
      required: t.required,
      $input: t,
      $label: e
    }))
  },
  E = () => {
    let e = w(),
      t = e.flatMap(e => {
        let t = [];
        for (let r of e) {
          let e = S(r);
          if (e.length > 0) {
            t.push(...e);
            continue
          }
          let n = Array.from(r.querySelectorAll(
            "label.jv-form-field-label, legend.jv-form-field-legend"));
          for (let e of n) {
            let r = x(e);
            r && t.push(r)
          }
        }
        return 0 === t.length ? [] : [{
          type: o.FIELD_TYPE.EMPLOYMENT,
          label: "Employment",
          required: t.some(e => e.required),
          $input: e[0],
          $label: e[0],
          children: t,
          options: t.map(e => ({
            type: e.type,
            label: e.label,
            options: e.options || []
          }))
        }]
      });
    return t.length > 0 && console.info("[Jobvite][Employment] extracted structured Work History", {
      rowCount: t.length,
      childCounts: t.map(e => e.children?.length ?? 0)
    }), t
  },
  x = e => {
    let t = A(e);
    if (t) return t;
    let r = T(e);
    if (r) return r;
    let n = F(e);
    if (n) return n;
    let o = k(e);
    if (o) return o;
    let i = I(e);
    return i || null
  },
  C = async () => {
    let e = a(),
      t = new Set(w().flat()),
      r = [];
    for (let n of e) {
      if (m(n)) continue;
      let e = n.closest?.(".jv-prescreen-element");
      if (e && t.has(e)) continue;
      let o = x(n);
      o && r.push(o)
    }
    return r.push(...E()), r
  }, A = e => {
    let t = j(e),
      r = (0, i.getFirstOrderedNode)(
        './following-sibling::div[1]//input[@type="text" or @type="email" or @type="tel" or @type="number"] | ./following-sibling::div[1]//textarea',
        e);
    return r ? {
      type: o.FIELD_TYPE.TEXT,
      label: t,
      required: D(e),
      $input: r,
      $label: e
    } : null
  }, k = e => {
    let t = j(e),
      r = (0, i.getOrderedNodes)('./following-sibling::label//input[@type="radio"]', e);
    if (r.length > 0) {
      let n = r.map(e => {
        let t = e,
          r = t.closest("label") || t.nextElementSibling;
        return r?.textContent?.trim() || ""
      });
      return {
        type: o.FIELD_TYPE.RADIO,
        label: t,
        required: D(e),
        $label: e,
        options: n,
        $radioParent: e,
        $input: r
      }
    }
    return null
  }, T = e => {
    let t = j(e),
      r = (0, i.getFirstOrderedNode)(
        "./following-sibling::div//select | ../following-sibling::select", e);
    if (r) {
      let n = r,
        i = P(n);
      return {
        type: o.FIELD_TYPE.SELECT,
        label: t,
        required: D(e),
        $input: n,
        options: i,
        $label: e
      }
    }
    return null
  }, F = e => {
    let t = j(e),
      r = (0, i.getOrderedNodes)('./following-sibling::label//input[@type="checkbox"]', e);
    if (r.length > 0) {
      let n = r.map(e => {
        let t = e,
          r = t.closest("label") || t.nextElementSibling;
        return r?.textContent?.trim() || ""
      });
      return {
        type: o.FIELD_TYPE.CHECKBOX,
        label: t,
        required: D(e),
        $label: e,
        options: n,
        $checkboxs: r
      }
    }
    return null
  }, I = e => {
    let t = j(e),
      r = (0, i.getFirstOrderedNode)('./following-sibling::div[1]//input[@type="date"]', e);
    return r ? {
      type: o.FIELD_TYPE.DATE,
      label: t,
      required: D(e),
      $input: r,
      $label: e
    } : null
  }, j = e => e?.textContent?.replaceAll("*", "").trim() || "", D = e => {
    let t = ".//span[contains(@class, 'jv-required-label')]",
      r = (0, i.getFirstOrderedNode)(t, e);
    return !!r
  }, P = e => Array.from(e.options).map(e => e.text.trim()), _ = async () => {
    let e = a(),
      t = {};
    for (let r of e) {
      let e = r;
      if (m(e)) continue;
      let n = j(e);
      if (!n) continue;
      let o = (0, i.getFirstOrderedNode)(
        './following-sibling::div[1]//input[@type="text" or @type="email" or @type="tel" or @type="number"] | ./following-sibling::div[1]//textarea',
        e);
      if (o) {
        t[n] = o.value || "";
        continue
      }
      let a = (0, i.getFirstOrderedNode)(
        "./following-sibling::div//select | ../following-sibling::select", e);
      if (a) {
        let e = a.options[a.selectedIndex];
        t[n] = e?.text?.trim() || "";
        continue
      }
      let l = (0, i.getOrderedNodes)('./following-sibling::label//input[@type="radio"]', e);
      if (l.length > 0) {
        let e = l.find(e => e.checked);
        if (e) {
          let r = e.closest("label") || e.nextElementSibling;
          t[n] = r?.textContent?.trim() || ""
        } else t[n] = "";
        continue
      }
      let s = (0, i.getOrderedNodes)('./following-sibling::label//input[@type="checkbox"]', e);
      if (s.length > 0) {
        let e = s.filter(e => e.checked).map(e => {
          let t = e.closest("label") || e.nextElementSibling;
          return t?.textContent?.trim() || ""
        });
        t[n] = e.join(", ");
        continue
      }
      let u = (0, i.getFirstOrderedNode)('./following-sibling::div[1]//input[@type="date"]', e);
      if (u) {
        t[n] = u.value || "";
        continue
      }
    }
    return Object.keys(t).length > 0 ? t : null
  }

