/**
 * Tiny nanoid shim (engine messaging dependency).
 */
var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
n.defineInteropFlag(r)
n.export(r, "nanoid", function () {
  return nanoid
})
function nanoid(size) {
  size = size || 21
  var url = "useandom-26T198340PX75pxJACKVERYMINUSBUSHWOLF_GQZbfghjklqvwyzrict"
  var id = ""
  for (var i = 0; i < size; i++) id += url[(Math.random() * 64) | 0]
  return id
}
r.default = nanoid
r.nanoid = nanoid
