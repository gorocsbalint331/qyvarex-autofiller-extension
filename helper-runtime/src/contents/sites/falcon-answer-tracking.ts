// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/contents/sites/falcon-answer-tracking.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
let n;let i = Symbol.for("jobright.falcon-response-answer"),a = 0;
function l() {
  return a += 1, n = undefined, a
}

function s() {
  return n === a
}

function u(e, t = a) {
  return t !== a || (n = t, c(e, t)), e
}

function c(e, t) {
  Object.defineProperty(e, i, {
    configurable: true,
    enumerable: true,
    value: t
  })
}

function d(e) {
  if (!e || "object" != typeof e) return;
  let t = e[i];
  return "number" == typeof t ? t : undefined
}

function f(e) {
  return undefined !== d(e)
}

function p(e) {
  return s() && d(e) === a
}

function m(e, ...t) {
  let r = t.map(d).filter(e => undefined !== e),
    n = r.find(e => e === a) ?? r[0];
  return undefined !== n && c(e, n), e
}

export { l as beginFalconResponseAnswerRequest, s as hasCurrentFalconResponseAnswer, u as markFalconResponseAnswer, f as isFalconResponseAnswer, p as isCurrentFalconResponseAnswer, m as inheritFalconResponseAnswerMarker }
