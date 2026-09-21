# Chrome Web Store — publish checklist

Upload package: `extension/build/chrome-mv3-prod.zip`

Developer dashboard: https://chrome.google.com/webstore/devconsole

## One-time account setup

1. Open the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. Pay the one-time $5 developer registration (if not already)
3. Enable **2-Step Verification** on the Google account
4. Click **New item** → upload `chrome-mv3-prod.zip`

## Store listing (copy/paste)

**Name:** Qyvarex Autofill

**Summary (short):**  
Autofill job applications from your Qyvarex team profiles, resumes, and saved answers.

**Detailed description:**

```
Qyvarex Autofill connects to your Team Autofill Hub so you can fill job applications faster.

What it does
• Connect with an API token from the hub dashboard
• Choose which profile to use (identity, answers, resume)
• Activate the helper on a job application page to autofill supported fields

Setup
1. Create an account at https://jobright-team-site.vercel.app
2. Add a profile + resume and generate an extension token
3. Open extension Options, paste the token, select a profile
4. On an application page, open the popup and activate the helper

This extension is intended for authorized Qyvarex team members.
```

**Category:** Productivity  
**Language:** English  

**Official URL:** https://jobright-team-site.vercel.app  
**Privacy policy URL:** https://jobright-team-site.vercel.app/privacy  

**Visibility:** start with **Unlisted** (install via direct store link) or **Public**.

## Privacy tab

**Single purpose:**  
Autofill job application forms using profiles managed in the Qyvarex Team Autofill Hub.

**Data use (check what applies):**
- Personally identifiable information — Yes (names, email, phone from profiles)
- Authentication information — Yes (hub API token / account)
- Website content — Yes (reads form fields on the active ATS page to fill them)
- Personal communications / financial / location / web history — No

**Remote code:** No (all extension code is packaged; hub only returns JSON/profile data and resume files)

**Certify** Limited Use compliance.

## Permission justifications

| Permission | Justification |
|------------|---------------|
| `storage` | Save hub URL, API token, and selected profile locally |
| `tabs` | Find the active tab so the helper can be activated on the current application page |
| `activeTab` | Access the page the user is viewing when they click Activate |
| `scripting` | Inject the autofill helper script into the active job application tab |
| Host access (`<all_urls>`) | Job applications live on many employer ATS / career site domains; the helper must run on the page the user opens |

## Assets required in the dashboard

- **Store icon:** 128×128 PNG (use `assets/icon.png` or build icons)
- **Screenshots:** at least one **1280×800** or **640×400** PNG showing Options or popup + hub
- Optional: small promo tile 440×280

## After upload

1. Complete Store listing + Privacy + Distribution
2. Submit for review
3. When approved, copy the store URL and share with the team  
   Install link format: `https://chrome.google.com/webstore/detail/<extension-id>`

Review often takes from a few hours to several days for broad host permissions.
