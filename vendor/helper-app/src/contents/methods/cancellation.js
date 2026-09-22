/**
 * Parcel module id: luJfs
 * Resolved path: src/contents/methods/cancellation.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
  *
 * Deobfuscated (pretty + export/import rename). Parcel e()/r preserved.
 */

var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");
helpers.defineInteropFlag(r), helpers.export(r, "setCurrentFieldTracker", () => setCurrentFieldTracker), helpers.export(r, "updateCurrentField", () => updateCurrentField), helpers.export(r, "CancelledError", () => CancelledError), helpers.export(r, "SkippedError", () => SkippedError), helpers.export(r, "getCurrentCancelSignal", () => getCurrentCancelSignal), helpers.export(r, "getCurrentSkipSignal", () => getCurrentSkipSignal), helpers.export(r, "skipCurrentField", () => skipCurrentField), helpers.export(r, "checkpoint", () => checkpoint), helpers.export(r, "cancellableDelay", () => cancellableDelay), helpers.export(r, "withCancellation", () => withCancellation), helpers.export(r, "withSkip", () => withSkip), helpers.export(r, "createCancellation", () => createCancellation);
let o = null,
  i = null,
  a = null,
  l = !1,
  s = null;
function setCurrentFieldTracker(e) {
  s = e;
}
function updateCurrentField(e) {
  s?.(e);
}
class CancelledError extends Error {
  constructor() {
    super("Autofill cancelled"), this.name = "CancelledError";
  }
}
class SkippedError extends Error {
  constructor() {
    super("Field skipped"), this.name = "SkippedError";
  }
}
function getCurrentCancelSignal() {
  return o;
}
function getCurrentSkipSignal() {
  return i;
}
function skipCurrentField() {
  a ? a.abort() : l = !0;
}
function checkpoint() {
  if (o?.aborted) throw new CancelledError();
  if (i?.aborted || l) throw l = !1, new SkippedError();
}
function cancellableDelay(e) {
  if (e <= 0) return Promise.resolve();
  if (o?.aborted) return Promise.reject(new CancelledError());
  if (i?.aborted || l) return l = !1, Promise.reject(new SkippedError());
  let t = o,
    r = i;
  return new Promise(t || r ? (_helpersArg, _oArg) => {
    let _iLocal = () => {
        clearTimeout(_sLocal), t?.removeEventListener("abort", _aLocal), r?.removeEventListener("abort", _lLocal);
      },
      _aLocal = () => {
        _iLocal(), _oArg(new CancelledError());
      },
      _lLocal = () => {
        _iLocal(), _oArg(new SkippedError());
      },
      _sLocal = setTimeout(() => {
        _iLocal(), _helpersArg();
      }, e);
    t?.addEventListener("abort", _aLocal, {
      once: !0
    }), r?.addEventListener("abort", _lLocal, {
      once: !0
    });
  } : t => setTimeout(t, e));
}
async function withCancellation(e, t) {
  let r = o;
  o = e;
  try {
    return await t();
  } finally {
    o = r;
  }
}
async function withSkip(e) {
  let t = i,
    r = a,
    _helpersLocal = new AbortController();
  a = _helpersLocal, i = _helpersLocal.signal, l && (l = !1, _helpersLocal.abort());
  try {
    let t = await e();
    if (_helpersLocal.signal.aborted) throw new SkippedError();
    return t;
  } catch (e) {
    if (_helpersLocal.signal.aborted && !(e instanceof CancelledError) && !(e instanceof SkippedError)) throw new SkippedError();
    throw e;
  } finally {
    i = t, a = r;
  }
}
function createCancellation(e, t) {
  let r = new AbortController();
  return {
    cancel: async () => {
      r.abort(), e?.();
    },
    skip: async () => {
      skipCurrentField();
    },
    get signal() {
      return r.signal;
    },
    async wrap(e) {
      r = new AbortController(), l = !1;
      let _helpersLocal2 = s;
      t && (s = t);
      try {
        return await withCancellation(r.signal, e);
      } finally {
        s = _helpersLocal2, l = !1;
      }
    }
  };
}
