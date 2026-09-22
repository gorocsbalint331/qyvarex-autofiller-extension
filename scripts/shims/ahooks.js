/**
 * ahooks stub — UI hooks not needed for headless fill.
 */
var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
n.defineInteropFlag(r)
function noop() {}
function useMemoizedFn(fn) {
  return fn
}
function useLatest(v) {
  return { current: v }
}
function useBoolean(initial) {
  return [!!initial, { toggle: noop, set: noop, setTrue: noop, setFalse: noop }]
}
r.useMemoizedFn = useMemoizedFn
r.useLatest = useLatest
r.useBoolean = useBoolean
r.useDebounceFn = function (fn) {
  return { run: fn, cancel: noop }
}
r.useRequest = function () {
  return { data: undefined, loading: false, run: noop, refresh: noop }
}
r.default = r
n.export(r, "useMemoizedFn", function () {
  return useMemoizedFn
})
n.export(r, "useLatest", function () {
  return useLatest
})
n.export(r, "useBoolean", function () {
  return useBoolean
})
