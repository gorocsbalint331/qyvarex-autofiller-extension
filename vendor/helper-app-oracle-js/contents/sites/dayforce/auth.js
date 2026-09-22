/**
 * Parcel module id: 1TnOy
 * Resolved path: contents/sites/dayforce/auth.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getDayforceAuthPageMode", () => i), n.export(r,
  "getDayforceAuthNameRules", () => u), n.export(r, "fillDayforceAuthCredentials", () => d);
var o = e("~core/enums");

function i(e = window.location.href) {
  try {
    let t = new URL(e);
    if ("https:" !== t.protocol || "dfid.dayforcehcm.com" !== t.host || t.username || t.password)
      return null;
    return t.pathname.match(/^\/globalidentity\/account\/(register|login)\/?$/)?.[1] ?? null
  } catch {
    return null
  }
}

function a(e) {
  return !e.closest('[hidden], [aria-hidden="true"]') && e.getClientRects().length > 0 &&
    "hidden" !== window.getComputedStyle(e).visibility
}

function l(e, t) {
  let r = Array.from(e.querySelectorAll(`input[id="${t}"]`));
  if (1 !== r.length) return null;
  let n = r[0],
    o = t.toLowerCase().includes("password") ? ["password", "text"] : ["text", "email"];
  return o.includes(n.type.toLowerCase()) ? n : null
}

function s({
  root: e = document,
  url: t,
  isVisible: r = a
}) {
  let n = i(t);
  if (!n) return null;
  let o = Array.from(e.querySelectorAll("main"));
  if (1 !== o.length || !r(o[0])) return null;
  let s = o[0],
    u = "register" === n ? {
      email: "emailAddress",
      confirmEmail: "confirmEmailAddress",
      password: "password",
      confirmPassword: "confirmPassword"
    } : {
      email: "email",
      password: "password"
    },
    c = {};
  for (let [e, t] of Object.entries(u)) {
    let r = l(s, t);
    if (!r) return null;
    c[e] = r
  }
  return {
    mode: n,
    main: s,
    fields: c
  }
}

function u(e = {}) {
  let t = s(e);
  if (t?.mode !== "register") return [];
  let r = e.isVisible ?? a;
  return [
    ["firstName", "First Name"],
    ["lastName", "Last Name"]
  ].flatMap(([e, n]) => {
    let i = l(t.main, e);
    return !i || !r(i) || i.disabled || i.readOnly ? [] : [{
      type: o.FIELD_TYPE.TEXT,
      label: n,
      required: i.required,
      $input: i
    }]
  })
}
async function c(e, t) {
  e.focus();
  let r = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value")?.set;
  if (!r) throw Error("input value setter unavailable");
  r.call(e, t), e.dispatchEvent(new Event("input", {
    bubbles: !0
  })), e.dispatchEvent(new Event("change", {
    bubbles: !0
  })), e.blur()
}
async function d({
  email: e,
  password: t,
  writeValue: r = c,
  ...n
}) {
  let o = s(n),
    l = {
      mode: i(n.url),
      foundForm: null !== o,
      foundRoles: [],
      filledRoles: [],
      skippedExistingRoles: [],
      rejectedRoles: []
    };
  if (!o) return l;
  let u = n.isVisible ?? a,
    d = e.trim(),
    f = e => !!d && e?.value.trim().toLowerCase() === d.toLowerCase();
  for (let e of Object.keys(o.fields)) {
    let n = o.fields[e];
    if (l.foundRoles.push(e), n.disabled || n.readOnly || !u(n)) continue;
    let i = "email" === e || "confirmEmail" === e;
    if (n.value.trim() && !("register" === o.mode && i)) {
      l.skippedExistingRoles.push(e);
      continue
    }
    let a = i ? d : t;
    if (a && (i || f(o.fields.email) && ("register" !== o.mode || f(o.fields.confirmEmail))) && (
        "confirmPassword" !== e || o.fields.password?.value === t) && (!("password" === e && o
        .fields.confirmPassword?.value) || o.fields.confirmPassword.value === t)) try {
      await r(n, a), n.value === a ? l.filledRoles.push(e) : l.rejectedRoles.push(e)
    } catch {
      l.rejectedRoles.push(e)
    }
  }
  return l
}

