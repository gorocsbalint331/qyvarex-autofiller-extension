/**
 * Parcel module id: 4X7iu
 * Resolved path: src/contents/sites/workable/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~contents/methods/cover-letter -> 7VR5i  =>  src/contents/methods/cover-letter.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "formatAnswer", () => l);
var o = e("dayjs"),
  i = n.interopDefault(o),
  a = e("~contents/methods/cover-letter");

function l(e, t) {
  let r = (0, a.applyCoverLetterTextToAnswer)(e, t, ["Cover letter", "Cover Letter"]);
  if (r.regular && r.regular?.["Available Start Date"] && (r.regular["Available Start Date"] = (0, i
      .default)().format("YYYY-MM-DD")), r.workExperience && r.workExperience.length > 0)
    for (let e of r.workExperience) e?.Start && (e["Start date"] = (0, i.default)(e.Start).format(
      "MM/YYYY"), e.From = e["Start date"]), e?.End && (e["End date"] = (0, i.default)(e.End)
      .format("MM/YYYY"), e.To = e["End date"]), e && "isCurrent" in e && (e[
      "I currently work here"] = e.isCurrent);
  if (r.education && r.education.length > 0)
    for (let e of r.education) e?.Start && (e["Start date"] = (0, i.default)(e.Start).format(
      "MM/YYYY"), e.From = e["Start date"]), e?.End && (e["End date"] = (0, i.default)(e.End)
      .format("MM/YYYY"), e.To = e["End date"]), e?.Study && (e["Field of Study"] = e.Study);
  return r.regular?.["Family Law Experience"] && r.regular?.["Family Law Experience"].toString()
    .toLowerCase().includes("no") && (r.regular["Family Law Experience"] = "0"), r
}

