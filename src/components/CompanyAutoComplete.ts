// @ts-nocheck
/**
 * Company name autocomplete with logo prefix (external job form).
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { useRequest } from "ahooks"
import { AutoComplete, Input } from "antd"
import { useEffect, useState } from "react"
import { sendToBackground } from "@plasmohq/messaging"
import { COMPANY_FALLBACK_LOGO } from "./companyFallbackLogo.ts"
import { useContainerStore } from "../store/container.ts"
import { useExternalJobStore } from "../store/externalJob.ts"
import Image from "../ui/Image.ts"
import { isLinkedinDomain } from "../utils/checkLinkedin.ts"
import { findCompanyMatch } from "./match.ts"

const FALLBACK_LOGO = COMPANY_FALLBACK_LOGO

function ImageWithFallback({ errorSrc, style, ...rest }) {
  const [src, setSrc] = useState(rest.src)
  const size = rest.width || rest.height || 72

  return jsx("div", {
    style: {
      minWidth: size,
      minHeight: size,
      width: size,
      height: size,
      display: "block",
      position: "relative",
      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
      borderRadius: "6px",
      marginRight: "2px",
      ...style,
    },
    children: jsx(Image, {
      ...rest,
      preview: false,
      src,
      alt: rest.alt || "image",
      height: rest.height,
      style: {
        borderRadius: "6px",
        ...rest.style,
      },
      placeholder: jsxs("svg", {
        width: rest.width || 72,
        height: rest.height || 72,
        viewBox: "0 0 80 80",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          jsx("rect", {
            width: "80",
            height: "80",
            fill: "#FBFCFC",
          }),
          jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M42.6924 26.1941C42.6924 25.5156 42.1424 24.9656 41.4639 24.9656H35.8481C35.3574 24.9656 34.8883 25.1675 34.5511 25.5239L29.181 31.1991C28.8672 31.5307 28.6924 31.9698 28.6924 32.4263V34.0663H35.077C35.6293 34.0663 36.077 34.514 36.077 35.0663C36.077 35.6186 35.6293 36.0663 35.077 36.0663H28.6924V40.2334H35.077C35.6293 40.2334 36.077 40.6811 36.077 41.2334C36.077 41.7857 35.6293 42.2334 35.077 42.2334H28.6924V46.4005H35.077C35.6293 46.4005 36.077 46.8482 36.077 47.4005C36.077 47.9528 35.6293 48.4005 35.077 48.4005H28.6924V55.0344H42.461H42.6924V26.1941ZM26.6924 47.4023V55.0344H25.2308C24.6786 55.0344 24.2308 55.4821 24.2308 56.0344C24.2308 56.5867 24.6786 57.0344 25.2308 57.0344H27.6924H42.461H43.6924H52.3072H54.7693C55.3216 57.0344 55.7693 56.5867 55.7693 56.0344C55.7693 55.4821 55.3216 55.0344 54.7693 55.0344H53.3072V37.9606C53.3072 37.0063 52.9467 36.0872 52.2981 35.3873L51.0542 34.0452C50.3378 33.2722 49.3316 32.8329 48.2777 32.8329H44.6924V26.1941C44.6924 24.411 43.2469 22.9656 41.4639 22.9656H35.8481C34.8078 22.9656 33.8133 23.3937 33.0983 24.1493L27.7283 29.8245C27.0631 30.5274 26.6924 31.4585 26.6924 32.4263V35.0645L26.6924 35.0663L26.6924 35.0682V41.2316L26.6924 41.2334L26.6924 41.2353V47.3986C26.6924 47.3993 26.6924 47.3999 26.6924 47.4005C26.6924 47.4011 26.6924 47.4017 26.6924 47.4023ZM51.3072 37.9606V55.0344H44.6924V34.8329H48.2777C48.7748 34.8329 49.2494 35.0401 49.5873 35.4047L50.8312 36.7468C51.1372 37.077 51.3072 37.5105 51.3072 37.9606Z",
            fill: "#828CA0",
            fillOpacity: "0.15",
          }),
        ],
      }),
      onError: () => {
        if (errorSrc) setSrc(errorSrc)
      },
    }),
  })
}

export function CompanyLogo({ onClick, logoSrc, width, height }) {
  return jsx("div", {
    className: "company-logo",
    onClick,
    children: jsx(ImageWithFallback, {
      className: "company-logo-img",
      src: logoSrc ?? FALLBACK_LOGO,
      errorSrc: FALLBACK_LOGO,
      alt: "company-logo",
      width: width || 72,
      height: height || 72,
    }),
  })
}

export default function CompanyAutoComplete({ form }) {
  const formValues = useExternalJobStore((state) => state.formValues)
  const [companyName, setCompanyName] = useState(
    formValues.companyName || undefined,
  )
  const [logoUrl, setLogoUrl] = useState(undefined)
  const containerDom = useContainerStore((state) => state.containerDom)
  const [options, setOptions] = useState([])

  useEffect(() => {
    const nextName = formValues.companyName || undefined
    if (nextName !== companyName) setCompanyName(nextName)
  }, [formValues.companyName])

  const { run: searchCompanies } = useRequest(
    async (input, linkedinCompanyId) =>
      await sendToBackground({
        name: "getCompanyNameList",
        body: {
          input,
          linkedinCompanyId,
        },
      }),
    {
      manual: true,
      debounceWait: 200,
      onSuccess: (result, params) => {
        if (params[0] !== companyName || !result || !companyName) {
          setOptions([])
          return
        }

        setOptions(
          (result || []).map((item) => ({
            label: item.companyName,
            logo: item.llogoUrl,
            companyId: item.linkedin_company_id,
            value: item.linkedin_company_id,
            originData: item,
          })),
        )

        const linkedinCompanyId = params[1]
        const match = findCompanyMatch(result, companyName, linkedinCompanyId)
        if (match) {
          form.setFieldValue("companyId", match.linkedin_company_id)
          setLogoUrl(match.llogoUrl)
        } else {
          setLogoUrl(undefined)
          if (!linkedinCompanyId) form.setFieldValue("companyId", undefined)
        }
      },
      onError: () => {
        setOptions([])
      },
    },
  )

  function getLinkedinCompanyIdFromForm() {
    try {
      if (!isLinkedinDomain(window.top.location.href)) return
    } catch {
      return
    }
    const companyId = form.getFieldValue("companyId")
    return companyId ? String(companyId) : undefined
  }

  useEffect(() => {
    if (companyName) searchCompanies(companyName, getLinkedinCompanyIdFromForm())
  }, [companyName])

  return jsx(AutoComplete, {
    getPopupContainer: () => containerDom,
    value: companyName,
    onChange: (value) => {
      const isSelectingOption = options.some((option) => option.value === value)
      if (isSelectingOption) return
      setCompanyName(value)
      form.setFieldValue("companyName", value)
      form.setFieldValue("companyId", undefined)
      setLogoUrl(undefined)
    },
    onSelect: (value, option) => {
      form.setFieldValue("companyId", value)
      form.setFieldValue("companyName", option?.originData?.companyName)
      setCompanyName(option?.originData?.companyName)
      setLogoUrl(option?.originData?.llogoUrl)
    },
    options,
    optionRender: (option) =>
      jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
        },
        children: [
          jsx(CompanyLogo, {
            width: 20,
            height: 20,
            logoSrc: option?.data?.logo,
          }),
          option?.data?.label,
        ],
      }),
    children: jsx(Input, {
      classNames: {
        input: "company-icon-input",
      },
      size: "small",
      prefix: jsx(
        CompanyLogo,
        {
          width: 20,
          height: 20,
          logoSrc: logoUrl,
        },
        logoUrl,
      ),
      placeholder: "Enter the company name",
    }),
  })
}
