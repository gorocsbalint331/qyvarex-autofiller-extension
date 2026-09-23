// @ts-nocheck
/**
 * Handle LinkedIn banner / iframe click: open form for new jobs or tailor URL for existing.
 */

import { useRequest } from "ahooks"
import { useEffect } from "react"
import { sendToBackground } from "@plasmohq/messaging"
import { HOST_DOMAIN } from "../api/env-resolver.js"
import { useExternalJobStore } from "../store/externalJob.ts"
import { useHideStore } from "../store/hide.ts"
import { getCurrentJobId } from "../utils/checkLinkedin.ts"
import { buildJobrightTailorUrl } from "../utils/job-id.ts"
import { trackEvent } from "../utils/trace.ts"

export function useLinkedinBannerClick(userId) {
  const setFormValues = useExternalJobStore((state) => state.setFormValues)
  const setJobId = useExternalJobStore((state) => state.setJobId)
  const setJobInfo = useExternalJobStore((state) => state.setJobInfo)
  const setPage = useExternalJobStore((state) => state.setPage)
  const setOpenCard = useHideStore((state) => state.setOpenCard)
  const setDisplayIcon = useHideStore((state) => state.setDisplayIcon)
  const setIsAddingAnotherJob = useExternalJobStore(
    (state) => state.setIsAddingAnotherJob,
  )

  const { run: fetchBannerDetail, loading } = useRequest(
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
      manual: true,
      onSuccess: async (bannerDetail) => {
        if (null === bannerDetail) {
          const pageInfo = await sendToBackground({
            name: "getPageLinkedinJobInfo",
          })
          setFormValues({
            jobTitle: pageInfo?.result?.job_title || "",
            url: window.location.href,
            companyId: pageInfo?.result?.company_id || void 0,
            companyName: pageInfo?.result?.company_name || "",
            jobDescription: pageInfo?.result?.job_description || "",
          })
          setJobId(null)
          setJobInfo(null)
          setIsAddingAnotherJob(false)
          setPage("form")
          trackEvent("autofill_external_linkedin_click", {
            user_id: userId,
            currentUrl: window.location.href,
            type: "new",
          })
          setDisplayIcon(true)
          setOpenCard(true)
        } else {
          const jobId = bannerDetail?.jobResult?.jobId
          setJobId(jobId)
          setJobInfo(bannerDetail)
          setPage("analyze-success")
          trackEvent("autofill_external_linkedin_click", {
            user_id: userId,
            currentUrl: window.location.href,
            type: "existing",
          })
          setOpenCard(false)
          if (!jobId) return
          window.open(
            buildJobrightTailorUrl(HOST_DOMAIN, jobId),
            "_blank",
          )
        }
      },
    },
  )

  const handleBannerClick = () => {
    if (!loading) fetchBannerDetail()
  }

  useEffect(() => {
    const onMessage = (event) => {
      if (
        event.data &&
        "TRIGGER_BANNER_CLICK_FROM_IFRAME" === event.data.type
      ) {
        handleBannerClick()
      }
    }
    window.addEventListener("message", onMessage)
    return () => {
      window.removeEventListener("message", onMessage)
    }
  }, [handleBannerClick])

  const handleIframeBannerClick = () => {
    window.top.postMessage(
      {
        type: "TRIGGER_BANNER_CLICK_FROM_IFRAME",
      },
      "https://www.linkedin.com",
    )
  }

  return {
    handleBannerClick,
    handleIframeBannerClick,
  }
}
