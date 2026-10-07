import type { PlasmoMessaging } from "@plasmohq/messaging"

import {
  ensureSelectedProfile,
  listProfiles,
  saveTeamSettings
} from "~api/team-client"

/**
 * Lists hub profiles for the side panel and stores the one chosen for autofill.
 * Body: { profileId?: string }
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const requested =
      typeof req.body?.profileId === "string" ? req.body.profileId.trim() : ""
    const profiles = await listProfiles()
    if (requested && profiles.some((profile) => profile.id === requested)) {
      await saveTeamSettings({ selectedProfileId: requested })
    }
    const selectedProfileId = await ensureSelectedProfile(profiles)
    res.send({
      ok: true,
      selectedProfileId,
      profiles: profiles.map((profile) => ({
        id: profile.id,
        label: profile.label,
        firstName: profile.firstName,
        lastName: profile.lastName
      }))
    })
  } catch (error) {
    res.send({
      ok: false,
      profiles: [],
      selectedProfileId: null,
      message: error instanceof Error ? error.message : "profiles_failed"
    })
  }
}

export default handler
