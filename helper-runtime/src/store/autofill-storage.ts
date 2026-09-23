// @ts-nocheck
/**
 * Factory for Plasmo local Storage used by autofill snapshots.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import { Storage } from "@plasmohq/storage"

export const createAutofillSnapshotStorage = () => new Storage({
  area: "local"
})
