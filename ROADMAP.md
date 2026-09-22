# Extension fork roadmap

**Goal:** extension owns the fill engine. Monorepo `../engine` is disposable once `vendor/helper-app` + `src/` cover you.

## Status

| # | Item | Status |
|---|------|--------|
| 1–20 | Hub, Clean-TS fill, Ashby/Workday/Oracle widgets | ✅ |
| 21 | Full Parcel ATS/UI (Fiber, React-select, …) | ✅ vendored + **ported into `helper-runtime/`** |
| 22 | TS engine entry `src/engine` + fill stack `src/contents` | ✅ |
| 23 | Site registry detect + cancellation/observer ports | ✅ |
| 24 | Extension independent of `../engine` for shipping | ✅ `npm run check:engine-independent` |
| 25 | All ~70 ATS site modules under `helper-runtime/` | ✅ `npm run port:vendor-helper` |
| 26 | Default Activate runtime = ported `HELPER_RUNTIME=ts` | ✅ |
| 27 | Trash monorepo `engine/` after smoke | ⬜ you |

## Runtime

```
Activate / ATS match
  → contents/bootstrap.ts
  → inject assets/helper-app.js
  → bootstrapJobrightHelperRuntime()
       → helper-runtime factory → site.fillForm()

Default:  HELPER_RUNTIME=ts   (extension/helper-runtime)
Fallback: HELPER_RUNTIME=parcel (vendor/helper-app)
Opt-in:   HELPER_RUNTIME=phase1 (identity-only)
Clean-TS: contents/clean-fill.ts / popup → native-filler.ts
```

**Important:** Parcel `e()` modules must stay in `helper-runtime/` — never under
Plasmo `src/` (popup will throw `e is not defined`).

## Delete `engine/` when ready

```bash
cd extension
npm run check:engine-independent   # must pass
# smoke: Activate on Greenhouse + Personio + Workday
# then move ../engine to trash (or delete)
```

Keep `extension/vendor/helper-app` as reference / linker fallback until you no longer need it.

## Commands

```bash
npm run port:vendor-helper
npm run bundle:helper
npm run bundle:helper:ts
npm run bundle:helper:parcel
npm run check:engine-independent
npm run dev
npm test
```
