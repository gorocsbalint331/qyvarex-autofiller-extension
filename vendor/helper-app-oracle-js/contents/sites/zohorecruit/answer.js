/**
 * Parcel module id: 9TR3h
 * Resolved path: contents/sites/zohorecruit/answer.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "formatAnswer", () => a);
var o = e("dayjs"),
  i = n.interopDefault(o);

function a(e, t) {
  if (e.regular) {
    let r = t || "United States";
    Object.keys(e.regular).forEach(t => {
      let n = t.toLowerCase();
      (n.includes("country") || n.includes("pays")) && !l(n) && (e.regular[t] = r), (n.includes(
          "salary") || n.includes("current salary") || n.includes("excepted salary") || n
        .includes("expected salary")) && "string" == typeof e.regular[t] && (e.regular[t] = e
        .regular[t].replace(/[^0-9]/g, ""))
    }), e.regular?.["Available Start Date"] && (e.regular["Available Start Date"] = (0, i.default)
      ().format("YYYY-MM-DD"))
  }
  if (e.workExperience && e.workExperience.length > 0)
    for (let t of e.workExperience) t?.Start && (t["Start date"] = (0, i.default)(t.Start).format(
      "MM/YYYY"), t.From = t["Start date"]), t?.End && (t["End date"] = (0, i.default)(t.End)
      .format("MM/YYYY"), t.To = t["End date"]), t && "isCurrent" in t && (t[
      "I currently work here"] = t.isCurrent);
  if (e.education && e.education.length > 0)
    for (let t of e.education) t?.Start && (t["Start date"] = (0, i.default)(t.Start).format(
      "MM/YYYY"), t.From = t["Start date"]), t?.End && (t["End date"] = (0, i.default)(t.End)
      .format("MM/YYYY"), t.To = t["End date"]), t?.Study && (t["Field of Study"] = t.Study);
  return e
}

function l(e) {
  return e.includes("phone country code") || e.includes("country phone code") || e.includes(
    "phone") && e.includes("country") && e.includes("code") || e.includes("mobile") && e.includes(
      "country") && e.includes("code")
}

