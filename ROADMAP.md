# Extension fork roadmap

**Goal:** Jobright fill engine **is** `src/`, which is also the Plasmo source root (`--src-path=src`).

## Layout

```
src/               ← Plasmo shell (popup, options, background, hub client, Activate CS)
                     + Jobright ATS SoT → assets/helper-app.js (injected)
build-helper.mjs   ← esbuild IIFE → assets/helper-app.js
assets/            ← helper-app.js + store icons
```

`~` maps to `src/`. Popup/options/background must not import the helper UI — Activate injects the helper bundle.
Shell-only variants of helper modules use `native-*` / `hub-env` names (e.g. `core/native-supported-sites.ts`).

- ATS fill code: edit under **`src/`**, then `npm run bundle:helper` (also runs on `dev`/`build`).
- Only `src/contents/bootstrap.ts` may sit at the top level of `src/contents/` (Plasmo registers each top-level file as a content script).

## Status

| # | Item | Status |
|---|------|--------|
| 1–26 | Hub + Jobright Activate | ✅ |
| 28–29 | Dedupe + retire Clean-TS popup | ✅ |
| 30 | Promote helper-runtime → `src/`, shell → `plasmo/` | ✅ |
| 31 | Replace `scripts/` Parcel linker with esbuild | ✅ |
| 32 | Merge `plasmo/` shell into `src/` | ✅ |
| 27 | Trash monorepo `engine/` after smoke | ⬜ you |

## Runtime

```
Activate / ATS match
  → src/contents/bootstrap.ts
  → inject assets/helper-app.js
  → bootstrapJobrightHelperRuntime()  (src/helper-entry.ts)
       → src/contents/crawler/factory → site.fillForm()
```

## Commands

```bash
npm run bundle:helper   # node build-helper.mjs
npm run dev             # plasmo --src-path=src
npm run build
npm test
```
