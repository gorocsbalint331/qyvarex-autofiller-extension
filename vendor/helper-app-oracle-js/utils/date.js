/**
 * Parcel module id: 3fOSF
 * Resolved path: utils/date.js (oracle restore)
 * Dependencies:
 *   ./lang -> f5rbp  =>  _tilde_utils/lang.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   dayjs/plugin/relativeTime -> 6ArHU  =>  dayjs/plugin/relativeTime.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getResumeDateRange", () => c), n.export(r,
  "transFormDateNumberToEg", () => d);
var o = e("dayjs"),
  i = n.interopDefault(o),
  a = e("dayjs/plugin/relativeTime"),
  l = n.interopDefault(a),
  s = e("./lang");
(0, i.default).extend(l.default);
let u = (e = "", t) => t ? "Present" : e?.length === 10 || e?.length === 7 ? (0, i.default)(e)
  .format("MMM YYYY") : e,
  c = ({
    startDate: e,
    completionDate: t,
    isCurrent: r
  }) => {
    let n = u(e, !1),
      o = u(t, r);
    return (0, s.isEmpty)(n) && (0, s.isEmpty)(o) ? "" : (0, s.isEmpty)(n) || (0, s.isEmpty)(o) ?
      n || o : `${n} - ${o}`
  },
  d = (e, t) => {
    if (!e || "string" != typeof e) return t ? "" : ["", "", ""];
    let r = "",
      n = "",
      o = "";
    if (e.includes("-")) {
      let t = e.split("-");
      t.length >= 2 && (4 !== t[0].length || isNaN(Number(t[0])) ? (n = t[0], o = t.length > 1 ? t[
        1] : "", r = t.length > 2 ? t[2] : "") : (r = t[0], n = t[1], o = t.length > 2 ? t[2] :
        ""))
    } else if (e.includes("/")) {
      let t = e.split("/");
      t.length >= 2 && (n = t[0], o = t.length > 1 ? t[1] : "", r = t.length > 2 ? t[2] : "")
    } else /^\d{8}$/.test(e) && (r = e.substring(0, 4), n = e.substring(4, 6), o = e.substring(6,
      8));
    let i = ["", "January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"
      ],
      a = parseInt(n, 10),
      l = a > 0 && a <= 12 ? i[a] : "";
    if (t) switch (t.toLowerCase()) {
      case "month":
      default:
        return l;
      case "year":
        return r;
      case "day":
        return parseInt(o, 10).toString()
    }
    return [l, r, o]
  }

