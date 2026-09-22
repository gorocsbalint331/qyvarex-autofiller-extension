# Extension-owned fill engine

```
Activate → contents/bootstrap.ts → inject assets/helper-app.js
  HELPER_RUNTIME=ts (default): helper-runtime/ (ported ATS, isolated from Plasmo)
  entry linker: scripts/engine-runtime-entry.js → factory.js → fillForm()

Popup “Clean-TS fill” → contents/clean-fill.ts → sites/native-filler.ts
```

Parcel modules live in [`helper-runtime/`](../../helper-runtime/), **not** under
`src/` (Plasmo would crash with `e is not defined`).

```bash
npm run port:vendor-helper   # refresh helper-runtime from vendor
npm run bundle:helper        # default = ts
npm run bundle:helper:parcel # vendor/helper-app fallback
npm run bundle:helper:phase1 # lightweight identity filler
```
