// @ts-nocheck
/**
 * Button that appends an animated "..." suffix while loading.
 */

import { jsxs } from "react/jsx-runtime"
import { Button } from "antd"
import { useEffect, useState } from "react"

export default function LoadingButton({ loading, children, ...props }) {
  const [dots, setDots] = useState("")

  useEffect(() => {
    let timer
    if (loading) {
      timer = setInterval(() => {
        setDots((prev) => (prev.length >= 3 ? "." : prev + "."))
      }, 500)
    } else {
      setDots("")
    }
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [loading])

  return jsxs(Button, {
    ...props,
    children: [children, loading ? dots : ""],
  })
}
