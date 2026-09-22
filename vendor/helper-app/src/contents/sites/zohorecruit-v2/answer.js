/**
 * Parcel module id: jmQw3
 * Resolved path: src/contents/sites/zohorecruit-v2/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "formatAnswer", () => d);
var o = e("dayjs"),
  i = n.interopDefault(o),
  a = e("~core/enums");
let l = {
    "01": "1",
    "02": "2",
    "03": "3",
    "04": "4",
    "05": "5",
    "06": "6",
    "07": "7",
    "08": "8",
    "09": "9",
    10: "10",
    11: "11",
    12: "12"
  },
  s = {
    january: "1",
    february: "2",
    march: "3",
    april: "4",
    may: "5",
    june: "6",
    july: "7",
    august: "8",
    september: "9",
    october: "10",
    november: "11",
    december: "12",
    jan: "1",
    feb: "2",
    mar: "3",
    apr: "4",
    jun: "6",
    jul: "7",
    aug: "8",
    sep: "9",
    oct: "10",
    nov: "11",
    dec: "12"
  };

function u(e) {
  if (!e) return e;
  let t = e.toString().trim(),
    r = t.toLowerCase();
  return s[r] ? s[r] : l[t] ? l[t] : t
}

function c(e) {
  if (!e || !e.includes("/")) return null;
  let [t, r] = e.split("/");
  return {
    month: u(t),
    year: r
  }
}

function d(e, t) {
  if (e.regular && (Object.keys(e.regular).forEach(r => {
      let n = r.toLowerCase();
      if (n.includes("country") || n.includes("pays")) {
        if (t) {
          let n = t.find(e => e.label === r || e.name === r);
          n && n.type === a.FIELD_TYPE.TEXT && (e.regular[r] = "United States")
        } else e.regular[r] = "United States"
      }(n.includes("salary") || n.includes("current salary") || n.includes("excepted salary") ||
        n.includes("expected salary")) && "string" == typeof e.regular[r] && (e.regular[r] = e
        .regular[r].replace(/[^0-9]/g, ""))
    }), e.regular?.["Available Start Date"] && (e.regular["Available Start Date"] = (0, i.default)
      ().format("YYYY-MM-DD"))), e.workExperience && e.workExperience.length > 0)
    for (let t of e.workExperience) {
      if (t?.Start) {
        t["Start date"] = (0, i.default)(t.Start).format("MM/YYYY"), t.From = t["Start date"];
        let e = c(t["Start date"]);
        e && (t["Start Month"] = e.month, t["Start Year"] = e.year)
      }
      if (t?.End) {
        t["End date"] = (0, i.default)(t.End).format("MM/YYYY"), t.To = t["End date"];
        let e = c(t["End date"]);
        e && (t["End Month"] = e.month, t["End Year"] = e.year)
      }
      t["Start Month"] && (t["Start Month"] = u(t["Start Month"])), t["End Month"] && (t[
        "End Month"] = u(t["End Month"])), t && "isCurrent" in t && (t["I currently work here"] =
        t.isCurrent)
    }
  if (e.education && e.education.length > 0)
    for (let t of e.education) {
      if (t?.Start) {
        t["Start date"] = (0, i.default)(t.Start).format("MM/YYYY"), t.From = t["Start date"];
        let e = c(t["Start date"]);
        e && (t["Start Month"] = e.month, t["Start Year"] = e.year)
      }
      if (t?.End) {
        t["End date"] = (0, i.default)(t.End).format("MM/YYYY"), t.To = t["End date"];
        let e = c(t["End date"]);
        e && (t["End Month"] = e.month, t["End Year"] = e.year)
      }
      t["Start Month"] && (t["Start Month"] = u(t["Start Month"])), t["End Month"] && (t[
        "End Month"] = u(t["End Month"])), t?.Study && (t["Field of Study"] = t.Study)
    }
  return e
}

