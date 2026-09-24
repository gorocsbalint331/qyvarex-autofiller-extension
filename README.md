Buildable Chrome MV3 extension for the **internal team**. Profile data comes from **[`../team-site`](../team-site)** (Team Autofill Hub).

The fill engine is injected as **`assets/helper-app.js`**, built from the full Jobright helper (`src/bootstrapJobrightHelperRuntime.ts`) via [`build-helper.mjs`](./build-helper.mjs).


## Setup

```bash
# 1) Start the hub first
cd ../team-site && npm install && npm run setup && npm run dev

# 2) Extension
cd ../extension
cp .env.example .env   # optional — PLASMO_PUBLIC_TEAM_SITE_URL
npm install
npm run dev
```

Chrome → `chrome://extensions` → Developer mode → **Load unpacked** → `extension/build/chrome-mv3-dev`.

Then: extension **Options** → sign in with hub email/password → select a profile.

**Production hub:** [https://jobright-team-site.vercel.app](https://jobright-team-site.vercel.app)

```bash
npm run build      # build/chrome-mv3-prod
npm run package    # build/chrome-mv3-prod.zip
```

## Connect to team hub

| Step | Where |
|------|--------|
| Create account / profiles / resumes | https://jobright-team-site.vercel.app |
| Sign in | Extension Options → email + password |
| Pick profile | Extension Options (or popup profile dropdown) |
| Autofill data | `getAutofillInfo` → `GET /api/v1/profiles/:id?autofill=1` |
| Answer resolve | `getGptResults` / `getCurrentFillAnswer` → `hub-to-jobright` |
| Resume file | `getResumeBlob` (+ base/tailor aliases) → `/api/v1/resumes/:id/download` |

Settings are stored in `chrome.storage.local` under `teamHubSettings`.

## Layout

```
extension/
  src/                   # Plasmo --src-path: popup, options, background, Activate CS
                         #   + Jobright ATS engine / helper UI (bundled → helper-app.js)
  build-helper.mjs       # esbuild src/helper-entry.ts → assets/helper-app.js
  assets/helper-app.js   # injected fill runtime
```

## Team workflow

1. Manage identity/resumes/answers on **team-site**.
2. Everything lives in **`src/`**. Only `src/contents/bootstrap.ts` is a Plasmo content script; keep other files out of the top level of `src/contents/` (Plasmo registers each one as a content script).
3. Prefer label→answer fixes in `src/lib/hub-to-jobright.ts` over crawler rewrites.
