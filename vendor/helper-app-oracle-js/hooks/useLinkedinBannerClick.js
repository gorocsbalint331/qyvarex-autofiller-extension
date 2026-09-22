/**
 * Parcel module id: kwAtx
 * Resolved path: hooks/useLinkedinBannerClick.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ahooks -> 9sqtS  =>  ahooks.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~api/env-resolver -> 45ABC  =>  _tilde_api/env-resolver.js
 *   ~store/externalJob -> 1YpU3  =>  _tilde_store/externalJob.js
 *   ~store/hide -> az1YZ  =>  _tilde_store/hide.js
 *   ~utils/checkLinkedin -> 5xJv6  =>  _tilde_utils/checkLinkedin.js
 *   ~utils/job-id -> klnOn  =>  _tilde_utils/job-id.js
 *   ~utils/trace -> 1ik0r  =>  _tilde_utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "useLinkedinBannerClick", () => p);
var o = e("ahooks"),
  i = e("react"),
  a = e("@plasmohq/messaging"),
  l = e("~api/env-resolver"),
  s = e("~store/externalJob"),
  u = e("~store/hide"),
  c = e("~utils/checkLinkedin"),
  d = e("~utils/job-id"),
  f = e("~utils/trace");

function p(e) {
  let t = (0, s.useExternalJobStore)(e => e.setFormValues),
    r = (0, s.useExternalJobStore)(e => e.setJobId),
    n = (0, s.useExternalJobStore)(e => e.setJobInfo),
    p = (0, s.useExternalJobStore)(e => e.setPage),
    m = (0, u.useHideStore)(e => e.setOpenCard),
    h = (0, u.useHideStore)(e => e.setDisplayIcon),
    g = (0, s.useExternalJobStore)(e => e.setIsAddingAnotherJob),
    {
      run: b,
      loading: y
    } = (0, o.useRequest)(async () => {
      let e = await (0, a.sendToBackground)({
        name: "getJobBannerDetail",
        body: {
          jobId: `l_${(0,c.getCurrentJobId)()}`
        }
      });
      return e
    }, {
      manual: !0,
      onSuccess: async o => {
        if (null === o) {
          let o = await (0, a.sendToBackground)({
            name: "getPageLinkedinJobInfo"
          });
          t({
            jobTitle: o?.result?.job_title || "",
            url: window.location.href,
            companyId: o?.result?.company_id || void 0,
            companyName: o?.result?.company_name || "",
            jobDescription: o?.result?.job_description || ""
          }), r(null), n(null), g(!1), p("form"), (0, f.trackEvent)(
            "autofill_external_linkedin_click", {
              user_id: e,
              currentUrl: window.location.href,
              type: "new"
            }), h(!0), m(!0)
        } else {
          let t = o?.jobResult?.jobId;
          if (r(t), n(o), p("analyze-success"), (0, f.trackEvent)(
              "autofill_external_linkedin_click", {
                user_id: e,
                currentUrl: window.location.href,
                type: "existing"
              }), m(!1), !t) return;
          window.open((0, d.buildJobrightTailorUrl)(l.HOST_DOMAIN, t), "_blank")
        }
      }
    }),
    v = () => {
      y || b()
    };
  (0, i.useEffect)(() => {
    let e = e => {
      e.data && "TRIGGER_BANNER_CLICK_FROM_IFRAME" === e.data.type && v()
    };
    return window.addEventListener("message", e), () => {
      window.removeEventListener("message", e)
    }
  }, [v]);
  let w = () => {
    window.top.postMessage({
      type: "TRIGGER_BANNER_CLICK_FROM_IFRAME"
    }, "https://www.linkedin.com")
  };
  return {
    handleBannerClick: v,
    handleIframeBannerClick: w
  }
}

