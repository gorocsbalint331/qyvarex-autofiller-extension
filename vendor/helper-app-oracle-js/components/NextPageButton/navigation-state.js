/**
 * Parcel module id: d4qMp
 * Resolved path: components/NextPageButton/navigation-state.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "WORKDAY_ACCOUNT_SUBMIT_BUTTON_SELECTOR", () => a), n.export(r,
  "WORKDAY_NAVIGATION_BUTTON_SELECTOR", () => l), n.export(r, "shouldDisableNextPageButton", () =>
  u), n.export(r, "getUnfilledRequiredWorkdayListboxes", () => b), n.export(r,
  "hasUnfilledRequiredWorkdayListbox", () => y), n.export(r, "getWorkdayContinueBlockers", () =>
  A), n.export(r, "getWorkdayNextPageButtonTarget", () => I), n.export(r,
  "shouldTrackNextPageButtonClick", () => j), n.export(r, "shouldClickNextPageButtonTarget", () =>
  D);
let o = [{
    selector: '[data-automation-id="click_filter"][aria-label="Reset Password"]',
    buttonText: "Reset Password"
  }, {
    selector: '[data-automation-id="click_filter"][aria-label="Create Account"]',
    buttonText: "Create Account"
  }, {
    selector: '[data-automation-id="click_filter"][aria-label="Sign In"]',
    buttonText: "Sign In"
  }, {
    selector: '[data-automation-id="noCaptchaWrapper"] [data-automation-id="click_filter"][aria-label="Submit"]'
  }, {
    selector: 'button[data-automation-id="createAccountSubmitButton"]',
    buttonText: "Create Account"
  }, {
    selector: 'button[data-automation-id="signInSubmitButton"]',
    buttonText: "Sign In"
  }, {
    selector: 'button[data-automation-id="resetPasswordButton"]',
    buttonText: "Reset Password"
  }],
  i =
  'button[data-automation-id="createAccountSubmitButton"], button[data-automation-id="signInSubmitButton"], button[data-automation-id="resetPasswordButton"]',
  a = o.map(e => e.selector).join(", "),
  l =
  'button[data-automation-id="pageFooterNextButton"], button[data-automation-id="bottom-navigation-next-button"]',
  s = new Set(["", "select one", "select", "please select", "not selected"]);

function u({
  isFilling: e,
  targetName: t,
  walmartCompositeDialogOpen: r
}) {
  return e || "walmart" === t && r
}

function c(e) {
  return (e.innerText?.trim() || e.textContent?.trim() || e.getAttribute("value")?.trim() || e
    .getAttribute("aria-label")?.trim() || "").toLowerCase()
}

function d(e) {
  let t = c(e),
    r = e.getAttribute("aria-label")?.trim().toLowerCase() ?? "",
    n = "submit" === t || "apply" === t || t.includes("submit") || "submit" === r || r.includes(
      "submit");
  return n ? "submit" : "continue"
}

function f(e) {
  let t = "function" == typeof e.checkVisibility;
  return t ? !!e.checkVisibility() : !!e.offsetParent
}

function p(e) {
  return (e ?? "").replace(/\s+/g, " ").trim()
}

function m(e) {
  let t = p(e.innerText || e.textContent || e.getAttribute("value")).toLowerCase();
  return s.has(t)
}

function h(e) {
  let t = e.closest('[data-automation-id^="formField-"]') ?? e.closest("fieldset"),
    r = p(t?.textContent);
  return r || p(e.getAttribute("aria-label"))
}

function g(e) {
  let t = p(e.getAttribute("aria-label")).toLowerCase();
  if (t.includes("required")) return !0;
  let r = e.closest('[data-automation-id^="formField-"]') ?? e.closest("fieldset");
  return !!r?.querySelector?.(".requiredAsterisk, abbr[title='required']")
}

function b(e) {
  return Array.from(e.querySelectorAll('button[aria-haspopup="listbox"][type="button"]')).filter(
    e => !(!f(e) || e.closest("#jobright-helper-id")) && !!g(e) && ("true" === e.getAttribute(
      "aria-invalid") || m(e))).map(e => ({
    label: h(e),
    text: p(e.innerText || e.textContent),
    value: p(e.getAttribute("value"))
  }))
}

function y(e) {
  return b(e).length > 0
}

function v(e) {
  return (e ?? "").replace(/\s+/g, " ").trim()
}

function w(e) {
  return Array.from(e.querySelectorAll(
    'button, [role="alert"], [data-automation-id="errorMessage"]')).filter(e => {
    if (!f(e) || e.closest("#jobright-helper-id")) return !1;
    let t = v(e.innerText || e.textContent);
    return /^Error[-:]/i.test(t) || /The field .+ is required and must have a value/i.test(t)
  }).map(e => {
    let t = v(e.innerText || e.textContent);
    return {
      reason: "native_validation_error",
      label: t.replace(/^Error[-:]/i, "").trim() || "Workday validation",
      text: t
    }
  })
}

function S(e) {
  let t = [e.parentElement, e.parentElement?.parentElement, "function" == typeof e.closest ? e
    .closest("label") : null
  ];
  return t.some(e => e?.querySelector?.(
    'svg[class*="wd-icon-check"], .wd-icon-check-small, .wd-icon-check'))
}

function E(e) {
  return "true" === e.getAttribute("aria-checked") || e.parentElement?.getAttribute(
    "aria-checked") === "true" || S(e)
}

function x(e) {
  return Array.from(e.querySelectorAll(
    'input[type="checkbox"][id*="disabilityStatus"], input[type="checkbox"][name*="disabilityStatus"]'
    )).filter(e => !(!f(e) || e.closest("#jobright-helper-id")) && "true" === e.getAttribute(
    "aria-required"))
}

function C(e) {
  let t = x(e);
  return 0 === t.length ? [] : t.some(E) ? [] : [{
    reason: "unfilled_self_identify_checkbox",
    label: "Please check one of the boxes below:"
  }]
}

function A(e) {
  let t = b(e).map(e => ({
    reason: "unfilled_required_listbox",
    label: e.label,
    text: e.text
  }));
  return [...t, ...w(e), ...C(e)]
}

function k(e, t) {
  return Array.from(e.querySelectorAll(t)).filter(e => !(!f(e) || e.closest("#jobright-helper-id")))
}

function T({
  element: e,
  target: t
}) {
  if (t.buttonText) return t.buttonText;
  let r = e.closest('[data-automation-id="noCaptchaWrapper"]')?.querySelector(i),
    n = r?.getAttribute("data-automation-id");
  return "createAccountSubmitButton" === n ? "Create Account" : "resetPasswordButton" === n ?
    "Reset Password" : "Sign In"
}

function F(e) {
  for (let t of o) {
    let r = k(e, t.selector)[0];
    if (r) return {
      element: r,
      type: "continue",
      source: "workday_account_submit",
      buttonText: T({
        element: r,
        target: t
      }),
      suppressClickTracking: !0
    }
  }
  return null
}

function I(e) {
  let t = k(e, l)[0];
  return t ? {
    element: t,
    type: d(t),
    source: "workday_navigation"
  } : F(e)
}

function j({
  targetName: e,
  suppressClickTracking: t
}) {
  return !(("myworkday" === e || "dayforce" === e) && t)
}

function D({
  targetType: e,
  currentStation: t,
  source: r
}) {
  return "workday_account_submit" === r || e === t
}

