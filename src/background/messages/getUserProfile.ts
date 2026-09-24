import type { PlasmoMessaging } from "@plasmohq/messaging"

import {
  fetchAutofillInfo,
  getTeamSettings,
  verifyTeamConnection
} from "~api/team-client"

/**
 * Jobright helper expects:
 *   { data: { userStage, userProfile } }
 * where userStage.logined + userProfile.step === 5 unlocks FILLING.
 * Team hub: signed-in + selected profile ⇒ treat as fully onboarded.
 */
const FILTE_RESUME_READY = 30

const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  try {
    const settings = await getTeamSettings()
    const conn = await verifyTeamConnection()

    if (!conn.ok || !settings.apiToken) {
      res.send({
        data: {
          userStage: {
            logined: false,
            userId: null,
            currentStage: 0,
            email: null
          },
          userProfile: null
        }
      })
      return
    }

    const hub = await fetchAutofillInfo()
    const profileId = hub?.profileId || settings.selectedProfileId

    const userId =
      profileId ||
      conn.email ||
      settings.userEmail ||
      "team-user"

    const userStage = {
      logined: true,
      userId,
      currentStage: FILTE_RESUME_READY,
      email: conn.email || settings.userEmail || null,
      name: conn.name || settings.userName || null,
      siteUrl: settings.siteUrl
    }

    // step 5 = Jobright "ready to autofill" onboarding step
    const userProfile = {
      step: 5,
      email: conn.email || settings.userEmail || "",
      name: conn.name || settings.userName || "",
      profileId,
      hasResume: Boolean(
        hub &&
          (Array.isArray((hub as { resumes?: unknown[] }).resumes)
            ? (hub as { resumes: unknown[] }).resumes.length > 0
            : true)
      ),
      teamHub: true
    }

    res.send({
      data: { userStage, userProfile }
    })
  } catch (err) {
    res.send({
      data: {
        userStage: { logined: false, userId: null, currentStage: 0 },
        userProfile: null
      },
      message: err instanceof Error ? err.message : "profile_failed"
    })
  }
}

export default handler
