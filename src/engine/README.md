# Extension-owned fill engine

```
Activate → src/contents/bootstrap.ts → inject assets/helper-app.js
  entry: src/helper-entry.ts
       → src/bootstrapJobrightHelperRuntime.ts (full Jobright helper UI)
  bundle: node build-helper.mjs (esbuild IIFE)
```

ATS + helper UI live in [`src/`](../), alongside the Plasmo shell
(`--src-path=src`). Do not import them into popup/options — inject
`assets/helper-app.js` instead.

```bash
npm run bundle:helper   # Jobright UI + engine → assets/helper-app.js
```
