import type { PlasmoMessaging } from "@plasmohq/messaging"

/**
 * Static autofill feature config — Jobright fetches this from cloud.
 * Empty/default copy keeps payment banners from resolving to upsell text.
 */
const TEAM_AUTOFILL_CONFIG = {
  autofillBannerCopy: { off: "" },
  autofillStuBannerCopy: { off: "" },
  autofillCreditsCopy: { off: "" },
  enableAutofill: true,
  enableResumeUpload: true,
  enableCoverLetter: true,
  teamHub: true
}

const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  res.send(TEAM_AUTOFILL_CONFIG)
}

export default handler
