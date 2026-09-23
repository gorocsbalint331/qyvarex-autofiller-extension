// @ts-nocheck
/**
 * Format job publish-time copy, optionally marking a repost.
 */

export function formatPublishTimeDesc(publishTimeDesc, isRepost) {
  if (!publishTimeDesc) return ""
  return isRepost ? `Reposted ${publishTimeDesc}` : publishTimeDesc
}
