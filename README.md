Buildable Chrome MV3 extension for the **internal team**. Profile data comes from **[`../team-site`](../team-site)** (Team Autofill Hub).

The fill engine is injected as **`assets/helper-app.js`**:

- **Default:** Parcel dump vendored at [`vendor/helper-app`](./vendor/helper-app) (`npm run bundle:helper`)
- **TS path:** [`src/engine`](./src/engine) + [`src/contents`](./src/contents) (`npm run bundle:helper:ts`)

Monorepo `../engine` is optional. Confirm with `npm run check:engine-independent`, smoke Activate, then trash `../engine`. See **[ROADMAP.md](./ROADMAP.md)**.

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
npm test           # crawler fixture tests
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

## What’s ported (v0.4)

| Area | Status |
|------|--------|
| Plasmo MV3 + team hub | ✅ |
| Engine helper bundle (Parcel default) | ✅ |
| Clean-TS fill in `src/contents` + `src/engine` | ✅ |
| Popup Activate / Clean-TS fill | ✅ |
| Ashby / Workday / Oracle widget modules + LOV capture | ✅ |
| Fixture + widget unit tests | ✅ (`npm test`) |
| Full helper UI / every Fiber edge case | ⬜ still in `engine/helper-app` |

## Layout

```
extension/
  src/
    engine/              # TS helper entry (bundle:helper:ts)
    contents/            # bootstrap + Clean-TS fill stack
    api/                 # hub client + env
    background/messages/ # Plasmo handlers (incl. injectHelperAppBundle)
    crawler/             # fixture-facing discovers
    lib/hub-to-jobright.ts
    options.tsx / popup.tsx
  vendor/helper-app/     # Parcel runtime (default bundle:helper)
  assets/helper-app.js   # injected fill runtime
  tests/fixtures/
```

## Team workflow

1. Manage identity/resumes/answers on **team-site**.
2. Prefer new ATS work in **`src/contents`**; use Parcel bundle only for unported Fiber/UI.
3. Prefer label→answer fixes in `hub-to-jobright.ts` over crawler rewrites.
4. Add ATS HTML fixtures under `tests/fixtures/` when hardening discovery.
5. After parity, remove dependency on `../engine` and delete that folder.
