# Qyvarex Autofill (extension)

Chrome MV3 extension for the internal team. It autofills job applications using profiles, resumes, and saved answers from the **[Team Autofill Hub](../team-site)** (`team-site`).

The fill engine and in-page UI are the full Jobright helper, bundled from `src/` into **`assets/helper-app.js`** and injected into job pages on Activate.

## Setup

```bash
# 1) Start the hub
cd ../team-site && npm install && npm run setup && npm run dev

# 2) Start the extension
cd ../extension
cp .env.example .env   # optional: PLASMO_PUBLIC_TEAM_SITE_URL
npm install
npm run dev
```

1. Chrome → `chrome://extensions` → Developer mode → **Load unpacked** → `extension/build/chrome-mv3-dev`
2. Open the extension **Options** → sign in with your hub email/password → pick a profile
3. Open a job page → click the toolbar icon → **Activate on this tab**

Production hub: [https://jobright-team-site.vercel.app](https://jobright-team-site.vercel.app)

## Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Bundles the helper, then runs Plasmo dev → `build/chrome-mv3-dev` |
| `npm run build` | Production build → `build/chrome-mv3-prod` |
| `npm run package` | Zips the production build → `build/chrome-mv3-prod.zip` |
| `npm run bundle:helper` | Rebuilds only `assets/helper-app.js` (and syncs it into `build/*`) |

`build/`, `.plasmo/` and `assets/helper-app.js` are generated and git-ignored.

## How it works

```
Toolbar popup "Activate on this tab"
  → background/messages/activateHelperOnTab.ts
      → sends "iconClicked" to the tab's top frame
          → contents/bootstrap.ts (the only content script)
              → background/messages/injectHelperAppBundle.ts
                  → executeScript(assets/helper-app.js)
                      → helper-entry.ts → bootstrapJobrightHelperRuntime()
                          → helper UI + site filler (contents/sites/*)
      → if the tab doesn't ACK { ok: true }, injects helper-app.js directly
```

The bootstrap content script also auto-activates on supported ATS pages (see `contents/shared/native-runtime-activation.ts`).

Inside the page, the helper talks to the background through Plasmo messaging. The ~100 handlers in `src/background/messages/` translate Jobright's API calls to the hub:

| Data | Handler → hub |
|------|---------------|
| Autofill profile | `getAutofillInfo` → `GET /api/v1/profiles/:id?autofill=1` |
| Resume list | `getResumeCollection` |
| Resume file | `getResumeBlob` (+ base/tailor aliases) → `/api/v1/resumes/:id/download` |
| Answers | `getGptResults` / `getCurrentFillAnswer` → `lib/hub-to-jobright.ts` |

Hub settings are stored in `chrome.storage.local` under `teamHubSettings`.

## Layout

`src/` is both Plasmo's source root (`--src-path=src`) and the helper bundle source.

```
src/
  background.ts, popup.tsx, options.tsx   Plasmo entry points
  background/messages/                    background message handlers
  contents/bootstrap.ts                   the only content script (Activate + auto-activation)
  contents/sites/                         per-ATS fillers (helper)
  contents/crawler/, contents/methods/    form discovery / fill helpers
  api/                                    hub client (team-client, hub-env) + helper env
  lib/                                    hub ↔ Jobright mapping, operation resolver
  components/, hooks/, store/, sections/  helper React UI
  helper-entry.ts                         helper bundle entry
  bootstrapJobrightHelperRuntime.ts       helper runtime / UI mount
  helper-shims/                           replacements for Plasmo APIs inside the bundle
build-helper.mjs                          esbuild → assets/helper-app.js
```

Behavior reference (deobfuscated original Jobright): `../engine/helper-app/src/`.

## Conventions

- **Content scripts:** Plasmo registers every top-level file in `src/contents/` (and `src/contents.ts`) as an `<all_urls>` content script. Only `bootstrap.ts` belongs there. Put everything else in a subfolder. `build-helper.mjs` fails the build if this is violated.
- **Shell vs helper modules:** popup/options/background/bootstrap must not import the helper UI. Where the shell needs a different version of a helper module, it uses a `native-*` or `hub-env` name (e.g. `core/native-supported-sites.ts`, `api/hub-env.ts`).
- **`~` alias** maps to `src/` for both Plasmo and the helper bundle.
- **`chrome.runtime.onMessage` listeners must not be `async`.** Chrome sends a returned Promise as the reply, which answers every tab message (including Activate) with `undefined`.
- **Label → answer fixes:** prefer `src/lib/hub-to-jobright.ts` over crawler rewrites.

## Troubleshooting

- **"Extension context invalidated" / Activate does nothing after a rebuild:** every rebuild during `npm run dev` reloads the extension, which disconnects content scripts in open tabs. Hard-refresh the job tab (Ctrl+Shift+R) and Activate again.
- **Helper errors:** check DevTools on the job page (not the popup) for lines starting with `[jobright]` or `[jobright-fork]`. Background/popup logs are under `chrome://extensions` → the extension's service worker / popup.
- **Build guard failures:** `build-helper.mjs` stops the build on leftover Parcel code (`t.exports`, `e("@parcel/...")`), a second React copy from `engine/node_modules`, or stray content-script files. The error message names the file to fix.
