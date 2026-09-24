// @ts-nocheck
/**
 * PDF / Word download menu items for resume review footer.
 */

export function buildResumeDownloadMenuItems(downloadPdf, downloadWord) {
  return [
    {
      key: "pdf",
      label: "Download by PDF",
      onClick: downloadPdf,
    },
    {
      key: "word",
      label: "Download by Word(.docx)",
      onClick: downloadWord,
    },
  ]
}
