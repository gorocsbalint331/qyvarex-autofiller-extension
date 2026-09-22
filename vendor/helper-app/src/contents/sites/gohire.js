/**
 * Parcel module id: 2yhOH
 * Resolved path: src/contents/sites/gohire.js
 * Dependencies:
 *   ./iframe-data -> kF3O9  =>  src/contents/sites/gohire/iframe-data.js
 *   ./operations -> jCrxS  =>  src/contents/sites/gohire/operations.js
 *   ./rules -> 4BwUW  =>  src/contents/sites/gohire/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   react-dom/client -> blMEL  =>  react-dom/client.js
 *   ~components/TextareaGenerateButton -> 8llzP  =>  src/components/TextareaGenerateButton.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~enums -> drZvv  =>  src/enums.js
 *   ~utils/current-job-id -> cAdEa  =>  src/utils/current-job-id.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "GoHire", () => E);
var o = e("react"),
  i = e("react-dom/client"),
  a = e("~components/TextareaGenerateButton"),
  l = e("~contents/methods/dom"),
  s = e("~contents/sites/base-filler"),
  u = e("~core/enums"),
  c = e("~core/xpath"),
  d = e("~enums"),
  f = e("~utils/current-job-id"),
  p = e("~utils/delay"),
  m = e("./iframe-data"),
  h = e("./operations"),
  g = e("./rules");
let b = 'iframe[src*="app.gohire.io/widget/"]',
  y = "jobright-gohire-edit-ai-root",
  v =
  '//a[contains(normalize-space(.), "Apply Now") or contains(@onclick, "apply(")] | //button[contains(normalize-space(.), "Apply Now") or contains(@onclick, "apply(")]';

function w() {
  let e = new URL(window.location.href);
  return window.top !== window.self && "app.gohire.io" === e.hostname && e.pathname.startsWith(
    "/widget/")
}

function S() {
  if (!w() || document.getElementById(y)) return;
  let e = document.createElement("div");
  e.id = y, e.style.display = "contents", (document.body || document.documentElement).appendChild(
    e), (0, i.createRoot)(e).render((0, o.createElement)(a.TextareaGenerateButtonLayer))
}
class E extends s.BaseFiller {
  constructor() {
    super(), this.iframeFillPromise = null, (0, g.installGoHireTextareaLabelObserver)(), S()
  }
  getFieldHandlers() {
    return {
      [u.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, h.fillInputField)(e, t),
        options: {
          expectArray: !1
        }
      },
      [u.FIELD_TYPE.SELECT]: (e, t) => (0, h.fillSelectField)(e, t)
    }
  }
  async doFillForm(e = !1) {
    return window.top === window.self ? this.fillFormInWidgetIframe(e) : (this
      .iframeFillPromise || (this.iframeFillPromise = (async () => (await this
        .waitForFillingData(), super.doFillForm(e)))().finally(() => {
        this.iframeFillPromise = null
      })), this.iframeFillPromise)
  }
  async extractFormRules() {
    return (0, g.extractRules)()
  }
  getSiteName() {
    return "gohire"
  }
  async checkCoverLetter() {
    (0, l.postCoverLetterStatus)((0, g.getCoverLetterStatus)())
  }
  async handleResumeUpload() {
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV");
      return
    }
    this.taskQueue.add(async () => {
      await (0, h.uploadResume)(this.resumeInfo, this.progressTracker
        .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
    }), await this.taskQueue.run()
  }
  getSubmitButtonSelector() {
    return '//button[contains(normalize-space(.), "Submit") and not(@disabled)]'
  }
  async getAutofillSnapshot(e) {
    return (0, g.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, g.getFormSnapshot)()
  }
  submitApplication() {
    let e = (0, c.getFirstOrderedNodeSafe)(this.getSubmitButtonSelector());
    e?.click()
  }
  async fillFormInWidgetIframe(e) {
    await this.waitForFillingData();
    let t = await this.openAndWaitForWidgetIframe();
    if (!t?.contentWindow || !t.src) return this.progressTracker.generateFinalProgress();
    await this.waitForIframeReady(t), await this.syncIframeAutofillData(t);
    let r = await this.waitForIframeAutofillResult(t, e);
    return r || this.progressTracker.generateFinalProgress()
  }
  async waitForFillingData() {
    for (let e = 0; e < 50; e++) {
      if (this.resumeInfo) return;
      await (0, p.delay)(100)
    }
  }
  async openAndWaitForWidgetIframe() {
    let e = this.getWidgetIframe();
    if (e) return e;
    let t = (0, c.getFirstOrderedNodeSafe)(v);
    t?.click();
    for (let e = 0; e < 60; e++) {
      let e = this.getWidgetIframe();
      if (e?.contentWindow && e.src) return e;
      await (0, p.delay)(250)
    }
    return null
  }
  getWidgetIframe() {
    return document.querySelector(b)
  }
  async waitForIframeReady(e) {
    await new Promise(t => {
      let r = !1,
        n = null,
        o = () => {
          r || (r = !0, window.removeEventListener("message", i), n && clearInterval(n),
          t())
        },
        i = t => {
          t.source === e.contentWindow && t.data?.type === d.IFRAME_EVENTS.IFRAME_LOADED &&
            o()
        };
      window.addEventListener("message", i);
      let a = Date.now();
      n = setInterval(() => {
        e.contentWindow?.postMessage({
          type: d.IFRAME_EVENTS.REQUEST_IFRAME_LOADED,
          url: e.src
        }, "*"), Date.now() - a > 1e4 && o()
      }, 300)
    })
  }
  async syncIframeAutofillData(e) {
    for (let t = 0; t < 3; t++) e.contentWindow?.postMessage({
      type: d.IFRAME_EVENTS.UPDATE_IFRAME_DATA,
      data: m.buildGoHireIframeAutofillData({
        resumeInfo: this.resumeInfo,
        disableUploadResume: this.disableUploadResume,
        coverLetter: this.coverLetter,
        token: this.token,
        currentJobId: f.resolveCurrentJobId()
      }),
      url: e.src
    }, "*"), await (0, p.delay)(200)
  }
  async waitForIframeAutofillResult(e, t) {
    return new Promise(r => {
      let n = !1,
        o = null,
        i = null,
        a = e => {
          n || (n = !0, window.removeEventListener("message", s), o && clearTimeout(o), i &&
            clearTimeout(i), r(e))
        },
        l = () => {
          e.contentWindow?.postMessage({
            type: d.IFRAME_EVENTS.EXECUTE_IFRAME_FUNCTION,
            data: {
              timestamp: Date.now(),
              fromAgent: t
            },
            url: e.src
          }, "*")
        },
        s = t => {
          t.source === e.contentWindow && t.data?.type === u.MESSAGE_EVENTS
            .autoFillResultFromIframe && a(t.data.data)
        };
      window.addEventListener("message", s), o = setTimeout(l, 300), i = setTimeout(() => a(
        null), 7e4)
    })
  }
}

