/** Shared types for Team Autofill Hub ↔ extension */

export type TeamSettings = {
  siteUrl: string
  /** Session JWT from sign-in, or legacy tf_… extension API token */
  apiToken: string
  selectedProfileId: string | null
  /** Cached display after sign-in */
  userEmail?: string
  userName?: string
}

export type ProfileSummary = {
  id: string
  label: string
  firstName: string
  lastName: string
  email: string
  phone: string
  resumeCount: number
  updatedAt: string
}

/** Mirrors team-site publicSavedJob() */
export type SavedJob = {
  id: string
  profileId: string | null
  title: string
  company: string
  url: string
  description: string
  source: string
  createdAt: string
  updatedAt: string
}

export type AutofillInfoPayload = {
  schemaVersion: 1
  profileId: string
  profileLabel: string
  identity: {
    firstName: string
    lastName: string
    fullName: string
    email: string
    phone: string
    linkedin: string
    website: string
    address: {
      line1: string
      line2: string
      city: string
      state: string
      postalCode: string
      country: string
    }
  }
  credentials: {
    loginEmail: string
    loginPassword: string
    siteLogins?: Array<{
      siteName: string
      hostname: string
      loginEmail: string
      loginPassword: string
    }>
  }
  answers: Record<string, string>
  extras: Record<string, unknown>
  resumes: Array<{
    id: string
    displayName: string
    fileName: string
    mimeType: string
    isDefault: boolean
    downloadPath: string
  }>
  defaultResumeId: string | null
  coverLetters?: Array<{
    id: string
    displayName: string
    fileName: string
    mimeType: string
    isDefault: boolean
    downloadPath: string
  }>
  defaultCoverLetterId?: string | null
}
