/**
 * Parcel module id: hQIM0
 * Resolved path: components/Resume/ResumeReview/download-menu.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e, t) {
  return [{
    key: "pdf",
    label: "Download by PDF",
    onClick: e
  }, {
    key: "word",
    label: "Download by Word(.docx)",
    onClick: t
  }]
}
n.defineInteropFlag(r), n.export(r, "buildResumeDownloadMenuItems", () => o)

