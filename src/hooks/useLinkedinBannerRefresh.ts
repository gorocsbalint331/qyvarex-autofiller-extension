// @ts-nocheck
/**
 * Refresh LinkedIn banner job detail / analyze state when the page URL or status changes.
 */

import { useRequest } from "ahooks"
import { useEffect } from "react"
import { sendToBackground } from "@plasmohq/messaging"
import { useExternalJobStore } from "../store/externalJob.ts"
import { getCurrentJobId } from "../utils/checkLinkedin.ts"

export function useLinkedinBannerRefresh(refreshKey, refreshToken) {
  const setJobId = useExternalJobStore((state) => state.setJobId)
  const setJobInfo = useExternalJobStore((state) => state.setJobInfo)
  const setPage = useExternalJobStore((state) => state.setPage)
  const setFormValues = useExternalJobStore((state) => state.setFormValues)
  const analyzeStatus = useExternalJobStore((state) => state.analyzeStatus)
  const setAndBroadcastAnalyzeStatus = useExternalJobStore(
    (state) => state.setAndBroadcastAnalyzeStatus,
  )
  const isAddingAnotherJob = useExternalJobStore(
    (state) => state.isAddingAnotherJob,
  )
  const setIsAddingAnotherJob = useExternalJobStore(
    (state) => state.setIsAddingAnotherJob,
  )
  const setMatchedSkillCount = useExternalJobStore(
    (state) => state.setMatchedSkillCount,
  )
  const setTotalSkillCount = useExternalJobStore(
    (state) => state.setTotalSkillCount,
  )
  const setMatchedScore = useExternalJobStore((state) => state.setMatchedScore)
  const setMissingJobSkills = useExternalJobStore(
    (state) => state.setMissingJobSkills,
  )

  const { data: bannerDetail } = useRequest(
    async () => {
      const result = await sendToBackground({
        name: "getJobBannerDetail",
        body: {
          jobId: `l_${getCurrentJobId()}`,
        },
      })
      return result
    },
    {
      ready: !isAddingAnotherJob,
      refreshDeps: [refreshKey, analyzeStatus, refreshToken],
    },
  )

  useEffect(() => {
    setJobInfo(bannerDetail || null)
    if (bannerDetail?.jobResult?.skillMatchingScores) {
      setMissingJobSkills(false)
      setMatchedSkillCount(
        bannerDetail?.jobResult?.skillMatchingScores.filter(
          (scoreEntry) => 0 != scoreEntry.score,
        ).length,
      )
      setTotalSkillCount(bannerDetail?.jobResult?.skillMatchingScores.length)
      setMatchedScore(
        Math.round(
          (bannerDetail?.jobResult?.skillMatchingScores.filter(
            (scoreEntry) => 0 != scoreEntry.score,
          ).length /
            bannerDetail?.jobResult?.skillMatchingScores.length) *
            20,
        ) / 2,
      )
      setJobId(bannerDetail?.jobResult?.jobId)
      setPage("analyze-success")
    } else {
      setJobId(null)
      setPage("init")
      setMissingJobSkills(true)
      sendToBackground({
        name: "getPageLinkedinJobInfo",
      }).then((pageInfo) => {
        setFormValues({
          jobTitle: pageInfo?.result?.job_title || "",
          url: window.location.href,
          companyId: pageInfo?.result?.company_id || void 0,
          companyName: pageInfo?.result?.company_name || "",
          jobDescription: pageInfo?.result?.job_description || "",
        })
      })
    }
  }, [bannerDetail, refreshKey])

  useEffect(() => {
    setIsAddingAnotherJob(false)
  }, [refreshKey])

  useEffect(() => {
    const onMessage = (event) => {
      if (
        "https://www.linkedin.com" === event.origin &&
        event?.data?.type === "ImportJobStatus" &&
        event?.data
      ) {
        setAndBroadcastAnalyzeStatus(event.data.analyzeStatus)
      }
    }
    window.addEventListener("message", onMessage)
  }, [])
}
