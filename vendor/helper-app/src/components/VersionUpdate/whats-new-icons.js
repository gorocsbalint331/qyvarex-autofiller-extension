/**
 * Parcel module id: 3CGFK
 * Resolved path: src/components/VersionUpdate/whats-new-icons.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   data-base64:~assets/images/aistar.svg -> aLQYQ  =>  src/assets/inline/images/aistar.svg.js
 *   data-base64:~assets/images/aistar_l.svg -> eU8gv  =>  src/assets/inline/images/aistar_l.svg.js
 *   data-base64:~assets/images/file.svg -> 4niB9  =>  src/assets/inline/images/file.svg__4niB9.js
 *   data-base64:~assets/images/filter.svg -> 35j3g  =>  src/assets/inline/images/filter.svg.js
 *   data-base64:~assets/images/folder.svg -> bL2fn  =>  src/assets/inline/images/folder.svg__bL2fn.js
 *   data-base64:~assets/images/light.svg -> dha7F  =>  src/assets/inline/images/light.svg__dha7F.js
 *   data-base64:~assets/images/mail.svg -> 2IvGP  =>  src/assets/inline/images/mail.svg__2IvGP.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "resolveWhatsNewIcon", () => v);
var o = e("data-base64:~assets/images/aistar_l.svg"),
  i = n.interopDefault(o),
  a = e("data-base64:~assets/images/aistar.svg"),
  l = n.interopDefault(a),
  s = e("data-base64:~assets/images/file.svg"),
  u = n.interopDefault(s),
  c = e("data-base64:~assets/images/filter.svg"),
  d = n.interopDefault(c),
  f = e("data-base64:~assets/images/folder.svg"),
  p = n.interopDefault(f),
  m = e("data-base64:~assets/images/light.svg"),
  h = n.interopDefault(m),
  g = e("data-base64:~assets/images/mail.svg"),
  b = n.interopDefault(g);
let y = {
  aistar: l.default,
  aistar_l: i.default,
  file: u.default,
  filter: d.default,
  folder: p.default,
  light: h.default,
  mail: b.default,
  saved_information: i.default,
  cover_letter: b.default
};

function v(e) {
  return e ? y[e] ?? null : null
}

