# Jobright Fork Extension (Plasmo MV3)

Buildable Chrome MV3 extension for the **internal team**. Profile data comes from **[`../team-site`](../team-site)** (Team Autofill Hub). Fill-engine behavior is ported from `../engine`.

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

Production build (load unpacked or zip for install):

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
| Resume file | `getResumeBlob` → `/api/v1/resumes/:id/download` |

Settings are stored in `chrome.storage.local` under `teamHubSettings`.

## What’s ported (v0.1)

| Area | Status |
|------|--------|
| Plasmo MV3 scaffold | ✅ |
| Team hub client + Options + popup profile select | ✅ |
| `getAutofillInfo` / `getResumeBlob` / `getUserProfile` → team-site | ✅ |
| `~core` enums, xpath, dom, cloudflare, supported-sites | ✅ |
| Early content bootstrap | ✅ |
| Remaining message handlers | 🟡 stubs |
| Full helper React autofill UI / ATS fillers | ❌ later |
| Phase-1 identity fill (name/email/phone/…) | ✅ `assets/helper-app.js` |

## Layout

```
extension/
  src/
    api/
      team-client.ts      # hub HTTP client
      team-types.ts
      env-resolver.ts
    core/
    contents/
    background/messages/
    options.tsx           # connect + select profile
    popup.tsx
  assets/
    helper-app.js
```

## Team workflow

1. Manage identity/resumes/credentials on **team-site**.
2. Port fill pipeline from **`../engine/**`** into `src/` as TypeScript.
3. Map hub `autofillInfo` into helper answers (`getCurrentFillAnswer`, fillers).
4. Replace `assets/helper-app.js` when porting the real helper UI.
