// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../getPageLinkedinJobInfo.js
 */
import type { PlasmoMessaging } from "@plasmohq/messaging"

function injectMain() {
  try {
    let e = function() {
      let e = window.top.location.href,
        t = new URLSearchParams(window.top.location.search),
        r = t.get("currentJobId");
      if (r) return r;
      let a = e.match(/jobs\/view\/(\d+)/);
      return a && a[1] ? r = a[1] : null
    }();
    if (!e) return console.error("[LinkedIn Job Extractor] Cannot get JobID"), null;
    let t = function() {
      try {
        let e = window.requireModule ? window.requireModule("ember").default : window.Ember;
        if (!e) return console.error("[LinkedIn Job Extractor] Cannot find Ember module"), null;
        let t = e.Namespace.NAMESPACES.find(t => t instanceof e.Application);
        if (!t || !t.__container__) return console.error(
          "[LinkedIn Job Extractor] Cannot find Ember application container"), null;
        let r = t.__container__,
          a = r.lookup("service:store");
        if (!a || !a._globalM3RecordDataCache) return console.error(
          "[LinkedIn Job Extractor] Cannot find Ember data cache"), null;
        return {
          ember: e,
          cache: a._globalM3RecordDataCache
        }
      } catch (e) {
        return console.error("[LinkedIn Job Extractor] Error getting Ember cache:", e), null
      }
    }();
    if (!t) return console.error("[LinkedIn Job Extractor] Cannot get Ember cache"), null;
    let r = function(e, t) {
      try {
        let r = `urn:li:fsd_jobPosting:${t}`,
          a = `urn:li:fsd_jobPostingCard:(${t},JOB_DETAILS)`,
          o = e[r];
        if (!o || !o.__data) return console.error(
          "[LinkedIn Job Extractor] Cannot find job base data:", r), {
          error: "Cannot find job base data",
          job_id: t
        };
        let s = o.__data,
          n = e[a],
          l = n && n.__data || {};
        l && 0 !== Object.keys(l).length || console.error(
          "[LinkedIn Job Extractor] Cannot find job card data:", a);
        let {
          company_id: i,
          company_name: u
        } = function(e, t) {
          try {
            let r = t.companyDetails && t.companyDetails.jobCompany && t.companyDetails
              .jobCompany["*company"];
            if (!r) return {
              company_id: null,
              company_name: document.querySelector(
                ".job-details-jobs-unified-top-card__company-name")?.textContent.trim() || ""
            };
            let a = null,
              o = r.split(":");
            a = o[o.length - 1];
            let s = e[r] && e[r].__data,
              n = s && s.name || "";
            return {
              company_id: a,
              company_name: n
            }
          } catch (e) {
            return console.warn("[LinkedIn Job Extractor] Getting company info failed:", e), {
              company_id: null,
              company_name: ""
            }
          }
        }(e, s), c = {
          job_id: t,
          job_title: s.title || "",
          job_description: s.description && s.description.text || "",
          company_id: i,
          company_name: u,
          location: function(e, t) {
            try {
              let r = t["*location"];
              if (!r) return "";
              let a = e[r] && e[r].__data;
              return a && a.defaultLocalizedName || ""
            } catch (e) {
              return console.warn("[LinkedIn Job Extractor] Getting location info failed:",
                e), ""
            }
          }(e, s),
          job_state: s.jobState || "",
          is_expired: "CLOSED" === s.jobState
        };
        return c
      } catch (e) {
        return console.error("[LinkedIn Job Extractor] Error extracting job info:", e), {
          error: e.message,
          job_id: t,
          stack: e.stack
        }
      }
    }(t.cache, e);
    return r
  } catch (e) {
    console.error("[LinkedIn Job Extractor] Error occurred during execution:", e)
  }
}

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const tabId = req.sender?.tab?.id
    if (!tabId) {
      res.send({ success: false, ok: false, message: "no_tab" })
      return
    }
    const frameId = req.sender?.frameId ?? 0
    const target =
      req.body?.allFrames === true
        ? { tabId, allFrames: true }
        : { tabId, frameIds: [frameId] }
    const results = await chrome.scripting.executeScript({
      target,
      world: "MAIN",
      func: injectMain
    })
    res.send({
      success: true,
      ok: true,
      result: results?.[0]?.result ?? null
    })
  } catch (err) {
    console.error("[getPageLinkedinJobInfo]", err)
    res.send({
      success: false,
      ok: false,
      message: err instanceof Error ? err.message : "inject_failed"
    })
  }
}

export default handler
