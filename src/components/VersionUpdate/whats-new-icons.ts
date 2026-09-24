// @ts-nocheck
/**
 * Resolve What’s New icon assets by key.
 */

import * as aistarL from "../../assets/inline/images/aistar_l.svg.js"
import * as aistar from "../../assets/inline/images/aistar.svg.js"
import * as fileIcon from "../../assets/inline/images/file.svg.js"
import * as filterIcon from "../../assets/inline/images/filter.svg.js"
import * as folderIcon from "../../assets/inline/images/folder.svg.js"
import * as lightIcon from "../../assets/inline/images/light.svg.js"
import * as mailIcon from "../../assets/inline/images/mail.svg.js"

function assetUrl(mod) {
  return mod?.default ?? mod
}

const WHATS_NEW_ICONS = {
  aistar: assetUrl(aistar),
  aistar_l: assetUrl(aistarL),
  file: assetUrl(fileIcon),
  filter: assetUrl(filterIcon),
  folder: assetUrl(folderIcon),
  light: assetUrl(lightIcon),
  mail: assetUrl(mailIcon),
  saved_information: assetUrl(aistarL),
  cover_letter: assetUrl(mailIcon),
}

export function resolveWhatsNewIcon(iconKey) {
  if (!iconKey) return null
  return WHATS_NEW_ICONS[iconKey] ?? null
}
