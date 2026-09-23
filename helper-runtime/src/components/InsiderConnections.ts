// @ts-nocheck
/**
 * Insider connections strip on job cards.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Flex, Typography } from "antd"
import * as arrGoSvg from "../assets/inline/images/arr_go.svg.js"
import { useEffect, useMemo, useRef } from "react"
import { HOST_DOMAIN } from "../api/env-resolver.ts"
import { useProfileStore } from "../store/profile.ts"
import Image from "../ui/Image.ts"
import { trackEvent } from "../utils/trace.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

const VISIBLE_WHEN_OVERFLOW = 4
const SHOW_ALL_THRESHOLD = 5

function connectionInitial(connection) {
  if (connection.firstName) return connection.firstName.charAt(0).toUpperCase()
  if (connection.fullName) return connection.fullName.charAt(0).toUpperCase()
  return "?"
}

export default function InsiderConnections({
  socialConnections = [],
  personalSocialConnections,
  jobId,
}) {
  const connections = useMemo(() => {
    const company = personalSocialConnections?.company || []
    const school = personalSocialConnections?.school || []
    return [...company, ...school, ...socialConnections]
  }, [socialConnections, personalSocialConnections])

  const total = connections.length
  const userStage = useProfileStore((state) => state.userStage)
  const impressedJobIdRef = useRef(null)

  useEffect(() => {
    if (total > 0 && jobId && userStage?.userId && impressedJobIdRef.current !== jobId) {
      impressedJobIdRef.current = jobId
      trackEvent("autofill_insider_connections_impression", {
        user_id: userStage.userId,
        job_id: jobId,
      })
    }
  }, [total, jobId, userStage?.userId])

  if (total === 0) return null

  const showAll = total <= SHOW_ALL_THRESHOLD
  const visible = showAll ? connections : connections.slice(0, VISIBLE_WHEN_OVERFLOW)
  const overflowCount = total - VISIBLE_WHEN_OVERFLOW

  function openInsiderConnections() {
    if (!jobId) return
    trackEvent("autofill_insider_connections_click", {
      user_id: userStage?.userId,
      job_id: jobId,
    })
    window.open(`${HOST_DOMAIN}/jobs/info/${jobId}#insider-connection`, "_blank")
  }

  return jsxs(Flex, {
    className: "insider-connections",
    align: "center",
    justify: "space-between",
    onClick: openInsiderConnections,
    children: [
      jsx(Typography.Text, {
        className: "insider-connections-title",
        children: "Your Insider Connections",
      }),
      jsxs(Flex, {
        align: "center",
        gap: 0,
        className: "insider-connections-right",
        children: [
          jsxs(Flex, {
            className: "insider-connections-avatars",
            children: [
              visible.map((connection, index) =>
                jsx(
                  "div",
                  {
                    className: "insider-connections-avatar",
                    children: jsx("span", {
                      children: connectionInitial(connection),
                    }),
                  },
                  index,
                ),
              ),
              !showAll &&
                overflowCount > 0 &&
                jsx("div", {
                  className:
                    "insider-connections-avatar insider-connections-avatar-more",
                  children: jsxs("span", {
                    children: [overflowCount, "+"],
                  }),
                }),
            ],
          }),
          jsx(Image, {
            src: assetUrl(arrGoSvg),
            alt: "arrow",
            width: 16,
            height: 16,
            preview: false,
          }),
        ],
      }),
    ],
  })
}
