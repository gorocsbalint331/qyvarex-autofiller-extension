# Vendored fill-engine artifacts (extension-owned)

| Path | Purpose |
|------|---------|
| `helper-app/` | Parcel dump used by `npm run bundle:helper` (default runtime) |
| `helper-app-oracle-js/` | Readable first-party JS reference (offline; not shipped) |

These copies let the **extension run without `../engine`**. After validating `npm run bundle:helper` + Activate on a few ATS pages, the monorepo `engine/` folder can be moved to trash.

Do not edit Parcel modules here for product features — port behavior into `src/contents` / `src/engine` instead.
