/**
 * Parcel module id: 2Qwhr
 * Resolved path: hooks/useLinkedinBannerRefresh.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ahooks -> 9sqtS  =>  ahooks.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~store/externalJob -> 1YpU3  =>  _tilde_store/externalJob.js
 *   ~utils/checkLinkedin -> 5xJv6  =>  _tilde_utils/checkLinkedin.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "useLinkedinBannerRefresh", () => u);
var o = e("ahooks"),
  i = e("react"),
  a = e("@plasmohq/messaging"),
  l = e("~store/externalJob"),
  s = e("~utils/checkLinkedin");

function u(e, t) {
  let r = (0, l.useExternalJobStore)(e => e.setJobId),
    n = (0, l.useExternalJobStore)(e => e.setJobInfo),
    u = (0, l.useExternalJobStore)(e => e.setPage),
    c = (0, l.useExternalJobStore)(e => e.setFormValues),
    d = (0, l.useExternalJobStore)(e => e.analyzeStatus),
    f = (0, l.useExternalJobStore)(e => e.setAndBroadcastAnalyzeStatus),
    p = (0, l.useExternalJobStore)(e => e.isAddingAnotherJob),
    m = (0, l.useExternalJobStore)(e => e.setIsAddingAnotherJob),
    h = (0, l.useExternalJobStore)(e => e.setMatchedSkillCount),
    g = (0, l.useExternalJobStore)(e => e.setTotalSkillCount),
    b = (0, l.useExternalJobStore)(e => e.setMatchedScore),
    y = (0, l.useExternalJobStore)(e => e.setMissingJobSkills),
    {
      data: v
    } = (0, o.useRequest)(async () => {
      let e = await (0, a.sendToBackground)({
        name: "getJobBannerDetail",
        body: {
          jobId: `l_${(0,s.getCurrentJobId)()}`
        }
      });
      return e
    }, {
      ready: !p,
      refreshDeps: [e, d, t]
    });
  (0, i.useEffect)(() => {
    n(v || null), v?.jobResult?.skillMatchingScores ? (y(!1), h(v?.jobResult?.skillMatchingScores
        .filter(e => 0 != e.score).length), g(v?.jobResult?.skillMatchingScores.length), b(Math
        .round(v?.jobResult?.skillMatchingScores.filter(e => 0 != e.score).length / v?.jobResult
          ?.skillMatchingScores.length * 20) / 2), r(v?.jobResult?.jobId), u("analyze-success")) :
      (r(null), u("init"), y(!0), (0, a.sendToBackground)({
        name: "getPageLinkedinJobInfo"
      }).then(e => {
        c({
          jobTitle: e?.result?.job_title || "",
          url: window.location.href,
          companyId: e?.result?.company_id || void 0,
          companyName: e?.result?.company_name || "",
          jobDescription: e?.result?.job_description || ""
        })
      }))
  }, [v, e]), (0, i.useEffect)(() => {
    m(!1)
  }, [e]), (0, i.useEffect)(() => {
    let e = e => {
      "https://www.linkedin.com" === e.origin && e?.data?.type === "ImportJobStatus" && e
        ?.data && f(e.data.analyzeStatus)
    };
    window.addEventListener("message", e)
  }, [])
}

