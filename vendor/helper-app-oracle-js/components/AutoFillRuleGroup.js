/**
 * Parcel module id: 8Z9FF
 * Resolved path: components/AutoFillRuleGroup.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/arr_down.svg -> 7FdQg  =>  data-base64__tilde_assets/images/arr_down.svg__7FdQg.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~components/CheckedIcon -> 5LY8K  =>  _tilde_components/CheckedIcon.js
 *   ~components/FillProgress/progress-state -> 66cuE  =>  _tilde_components/FillProgress/progress-state.js
 *   ~components/LoadingIcon -> 03WOh  =>  _tilde_components/LoadingIcon.js
 *   ~components/UnCheckedIcon -> f7hgC  =>  _tilde_components/UnCheckedIcon.js
 *   ~core/dom -> hLMJX  =>  _tilde_core/dom.js
 *   ~hooks/useSkipTimer -> lwAIe  =>  _tilde_hooks/useSkipTimer.js
 *   ~utils/fieldLabel -> 1RmGw  =>  _tilde_utils/fieldLabel.js
 *   ~utils/trace -> 1ik0r  =>  _tilde_utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("data-base64:~assets/images/arr_down.svg"),
  l = n.interopDefault(a),
  s = e("react"),
  u = e("~components/CheckedIcon"),
  c = n.interopDefault(u),
  d = e("~components/FillProgress/progress-state"),
  f = e("~components/LoadingIcon"),
  p = n.interopDefault(f),
  m = e("~components/UnCheckedIcon"),
  h = n.interopDefault(m),
  g = e("~core/dom"),
  b = e("~hooks/useSkipTimer"),
  y = e("~utils/fieldLabel"),
  v = e("~utils/trace");
let w = new Set(["education", "employment", "experience"]);

function S(e) {
  (0, v.trackEvent)("autofill_skip_click", {
    current_field_name: e
  }), document.dispatchEvent(new CustomEvent("SkipAutoFill"))
}

function E({
  groups: e,
  partialDetailsId: t,
  expanded: r
}) {
  return (0, o.jsx)("div", {
    id: t,
    className: "auto-fill-field-item-partial-details",
    hidden: !r,
    children: e.map(e => (0, o.jsxs)("div", {
      className: "auto-fill-field-item-result-group",
      children: [(0, o.jsx)("span", {
        className: "auto-fill-field-item-result-group-title",
        children: e.title
      }), e.items.map((t, r) => (0, o.jsxs)("div", {
        className: "auto-fill-field-item-result-value",
        children: ["filled" === e.status ? (0, o.jsx)(c.default, {}) : (0, o.jsx)(
          h.default, {}), (0, o.jsx)("span", {
          children: t
        })]
      }, `${t}-${r}`))]
    }, e.title))
  })
}

function x(e, t) {
  let r = (0, y.normalizeFieldLabel)(t);
  return e?.find(e => y.normalizeFieldLabel(e.label) === r)
}

function C({
  result: e,
  detailsId: t,
  expanded: r
}) {
  return (0, o.jsx)("div", {
    id: t,
    className: "auto-fill-section-result-details",
    hidden: !r,
    children: e.rows.map(t => (0, o.jsxs)("div", {
      className: "auto-fill-section-result-row",
      children: [(0, o.jsx)("button", {
        className: "auto-fill-section-result-row-title",
        type: "button",
        "aria-label": `Go to ${e.label} ${t.index+1}`,
        onClick: () => (0, g.focusSectionResultRow)(e.type, t.index),
        children: t.title || `${e.label} ${t.index+1}`
      }), (0, o.jsx)("div", {
        className: "auto-fill-section-result-fields",
        children: t.fields.map(r => (0, o.jsxs)("button", {
          className: "auto-fill-section-result-field",
          type: "button",
          "aria-label": `Go to ${e.label} ${t.index+1} ${r.label}`,
          onClick: () => (0, g.focusSectionResultRow)(e.type, t.index, r
            .label),
          children: [(0, o.jsx)("span", {
            className: `auto-fill-section-result-status auto-fill-section-result-status--${r.status}`
          }), (0, o.jsx)("span", {
            className: "auto-fill-section-result-field-label",
            children: r.label
          })]
        }, `${t.index}-${r.label}`))
      })]
    }, t.index))
  })
}
let A = ({
  autoFillResult: e,
  isFilling: t
}) => {
  let r = e?.currentField ?? null,
    n = (0, b.useSkipTimer)(t ? r : null),
    a = (0, s.useRef)(null),
    [u, f] = (0, s.useState)(new Set),
    [m, v] = (0, s.useState)(() => new Set(w)),
    A = (0, s.useRef)(t);
  (0, s.useEffect)(() => {
    t && !A.current && (f(new Set), v(new Set(w))), A.current = t
  }, [t]), (0, s.useEffect)(() => {
    if (!t || !r) return;
    let e = a.current;
    e && e.scrollIntoView({
      block: "nearest",
      behavior: "smooth"
    })
  }, [r, t]);
  let k = (0, s.useMemo)(() => {
    let s = (0, y.buildNormalizedFieldLabelSet)(e?.filledFields || []),
      b = (0, y.buildNormalizedFieldLabelSet)(e?.missingFields || []),
      w = [],
      A = [],
      k = [],
      T = [];
    return e?.fieldRequiredStatus?.forEach((F, I) => {
      let j = y.normalizeFieldLabel(F?.label),
        D = s.has(j),
        P = b.has(j),
        _ = d.getFieldItemResult(e?.fieldItemResults, F?.label),
        L = "partial" === d.getFieldItemDisplayState(_),
        R = L && !u.has(j),
        O = d.getFieldItemProgressSummary(_),
        M = d.getFieldItemResultGroups(_),
        N = L && O && M.length > 0,
        $ =
        `auto-fill-field-item-partial-details-${j.replace(/[^a-z0-9_-]+/g,"-")||"field"}-${I}`,
        B = x(e?.sectionResults, F?.label),
        q = (B?.rows.length ?? 0) > 0,
        U = q && m.has(j),
        H =
        `auto-fill-section-result-details-${j.replace(/[^a-z0-9_-]+/g,"-")||"field"}-${I}`,
        Y = t && F?.label === r,
        z = D && !Y,
        V = P && !Y,
        W = t && n && F?.label === n && F?.label === r && !D,
        G = o.jsxs(i.Flex, {
          gap: 4,
          ref: Y ? a : void 0,
          className: "auto-fill-field-item",
          onClick: () => {
            g.focusLabelElement(F?.label)
          },
          children: [z ? o.jsx(c.default, {}) : V || !t && e ? o.jsx(h.default, {}) : o
            .jsx(p.default, {}), o.jsx("span", {
              className: "auto-fill-field-item-text-label",
              children: F?.label
            }), N && o.jsxs("button", {
              type: "button",
              className: "auto-fill-field-item-partial-toggle",
              "aria-expanded": R,
              "aria-label": `${F.label}: ${O} autofill details`,
              "aria-controls": $,
              onClick: e => {
                e.stopPropagation(), f(e => {
                  let t = new Set(e);
                  return t.has(j) ? t.delete(j) : t.add(j), t
                })
              },
              children: [o.jsx("span", {
                children: O
              }), o.jsx("img", {
                src: l.default,
                alt: "",
                width: 12,
                height: 12,
                className: `auto-fill-field-item-partial-chevron${R?"":" auto-fill-field-item-partial-chevron--collapsed"}`
              })]
            }), q && B && o.jsx("button", {
              type: "button",
              className: "auto-fill-section-toggle",
              "aria-expanded": U,
              "aria-label": `${F.label} autofill details`,
              "aria-controls": H,
              onClick: e => {
                e.stopPropagation(), v(e => {
                  let t = new Set(e);
                  return t.has(j) ? t.delete(j) : t.add(j), t
                })
              },
              children: o.jsx("img", {
                src: l.default,
                alt: "",
                width: 14,
                height: 14,
                className: `auto-fill-section-chevron${U?"":" auto-fill-section-chevron--collapsed"}`
              })
            }), W && o.jsx("button", {
              type: "button",
              className: "auto-fill-field-item-skip-btn",
              onClick: e => {
                e.stopPropagation(), S(F.label)
              },
              children: "Skip"
            })
          ]
        }, I),
        K = N || q ? o.jsxs("div", {
          className: "auto-fill-field-item-details-wrapper",
          children: [G, q && B && o.jsx(C, {
            result: B,
            detailsId: H,
            expanded: U
          }), N && _ && o.jsx(E, {
            groups: M,
            partialDetailsId: $,
            expanded: R
          })]
        }, I) : G;
      F.required ? (w.push(K), D && k.push(K)) : (A.push(K), D && T.push(K))
    }), {
      requiredFields: w,
      optionalFields: A,
      filledRequiredFields: k,
      filledOptionalFields: T
    }
  }, [e, u, m, t, r, n]);
  return (0, o.jsx)(i.Flex, {
    className: "auto-fill-field-group",
    vertical: !0,
    children: (0, o.jsxs)(i.Flex, {
      gap: 12,
      vertical: !0,
      children: [k.requiredFields.length > 0 && (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(i.Typography.Title, {
          level: 4,
          className: "auto-fill-field-group-title",
          children: "Required"
        }), k.requiredFields]
      }), k.optionalFields.length > 0 && (0, o.jsxs)(o.Fragment, {
        children: [k.requiredFields.length > 0 && (0, o.jsx)(i.Divider, {
          className: "auto-fill-divider"
        }), (0, o.jsx)(i.Typography.Title, {
          level: 4,
          className: "auto-fill-field-group-title",
          children: "Optional"
        }), k.optionalFields]
      })]
    })
  })
};
r.default = A

