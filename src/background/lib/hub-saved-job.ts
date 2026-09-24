import { getTeamSettings } from "~api/team-client"
import type { SavedJob } from "~api/team-types"

/**
 * Helper job ids for hub saved jobs. The helper treats ids starting with
 * "external" as imported (non-Jobright) jobs, e.g. it hides applicant counts.
 */
const HUB_JOB_ID_PREFIX = "external_hub_"

export function toHelperJobId(savedJobId: string) {
  return `${HUB_JOB_ID_PREFIX}${savedJobId}`
}

export function fromHelperJobId(jobId: unknown): string | null {
  if (typeof jobId !== "string" || !jobId.startsWith(HUB_JOB_ID_PREFIX)) return null
  return jobId.slice(HUB_JOB_ID_PREFIX.length) || null
}

/** Shape the helper's JobCard / banner code reads from getJobBannerDetail. */
export async function toJobBannerDetail(job: SavedJob) {
  const { siteUrl } = await getTeamSettings()
  return {
    jobResult: {
      jobId: toHelperJobId(job.id),
      jobTitle: job.title,
      jobDescription: job.description,
      userCompanyName: job.company,
      jdLogo: "",
      publishTimeDesc: "",
      applyLink: job.url,
      originalUrl: job.url,
      detailsUrl: `${siteUrl.replace(/\/+$/, "")}/dashboard/jobs`
    },
    companyResult: {
      companyName: job.company,
      companyCategories: ""
    }
  }
}
