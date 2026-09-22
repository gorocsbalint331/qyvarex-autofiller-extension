/**
 * Parcel module id: 2aGsX
 * Resolved path: src/contents/shared/filler.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   lodash-es -> p4RBe  =>  lodash-es.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~core/autofill-progress-protocol -> 2aELO  =>  src/core/autofill-progress-protocol.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/phone-country-code/answer -> exLmg  =>  src/core/phone-country-code/answer.js
 *   ~utils/fieldLabel -> 1RmGw  =>  src/utils/fieldLabel.js
 */

var n, o = e("@parcel/transformer-js/src/esmodule-helpers.js");
o.defineInteropFlag(r), o.export(r, "FillError", () => h), o.export(r, "ValueError", () => g), o
  .export(r, "TaskQueue", () => b), o.export(r, "ProgressTracker", () => y);
var i = e("lodash-es"),
  a = e("~contents/methods/cancellation"),
  l = e("~contents/methods/track"),
  s = e("~core/autofill-progress-protocol"),
  u = e("~core/dom"),
  c = e("~core/phone-country-code/answer"),
  d = e("~utils/fieldLabel");
let f = new Set((0, c.PHONE_COUNTRY_CODE_ANSWER_LABELS).map(e => (0, d.normalizeFieldLabel)(e)));

function p(e) {
  return "education" === e ? "Education" : "employment" === e ? "Employment" : void 0
}

function m(e, t) {
  let r = p(t);
  if (r) return r;
  let n = (0, d.formatFieldLabelForDisplay)(e),
    o = (0, d.normalizeFieldLabel)(n);
  return /^(education|education history|education experience|educational details)( \d+)?$/.test(o) ?
    "Education" :
    /^(employment|experience|work experience|workexperience|employment history|experience details)( \d+)?$/
    .test(o) ? "Employment" : n
}! function(e) {
  e[e.isIdle = 0] = "isIdle", e[e.isRunning = 1] = "isRunning", e[e.isPaused = 2] = "isPaused"
}(n || (n = {}));
class h extends Error {
  constructor(e = "Fill failed") {
    super(e), this.name = "FillError"
  }
}
class g extends Error {
  constructor(e = "Value error") {
    super(e), this.name = "ValueError"
  }
}
class b {
  constructor() {
    this.queue = [], this.status = n.isIdle
  }
  add(e) {
    this.queue.push(e)
  }
  async run() {
    if (this.status !== n.isIdle) throw Error(
      `Queue is already started. Current status: ${this.status}`);
    await this.drain()
  }
  pause() {
    this.status = n.isPaused
  }
  async resume() {
    if (this.status !== n.isPaused) throw Error("Can't resume the queue not paused.");
    await this.drain()
  }
  async drain() {
    this.status = n.isRunning;
    try {
      await this.executeNextTask()
    } finally {
      this.status === n.isRunning && (this.status = n.isIdle)
    }
  }
  clear() {
    this.queue = [], this.status = n.isIdle
  }
  async executeNextTask() {
    if (0 === this.queue.length) {
      this.status = n.isIdle;
      return
    }
    if (this.status === n.isPaused) throw Error("Queue is paused, can't execute next task. ");
    (0, a.checkpoint)();
    let e = this.queue.shift(),
      t = null;
    try {
      let t = e();
      t && "function" == typeof t.then && await t
    } catch (e) {
      e instanceof a.CancelledError ? t = e : console.error("Task execution failed:", e)
    }
    if (t) throw t;
    await this.executeNextTask()
  }
}
class y {
  constructor() {
    this.progressSessionId = (0, s.createAutofillProgressSessionId)(), this
      .hasSentProgressSnapshot = !1, this.syncProgress = () => {
        (0, l.sendProgressMessage)(this.fieldStatus, this.progressSessionId), this
          .hasSentProgressSnapshot = !0
      }, this.sendProgressPatch = e => {
        if (!this.hasSentProgressSnapshot) {
          this.syncProgress();
          return
        }
        if ("function" == typeof l.sendProgressPatchMessage) {
          (0, l.sendProgressPatchMessage)({
            sessionId: this.progressSessionId,
            ...e
          });
          return
        }(0, l.sendProgressMessage)(this.fieldStatus, this.progressSessionId)
      }, this.setCurrentField = e => {
        this.fieldStatus.currentField = null == e ? e : m(e), this.sendProgressPatch({
          currentField: this.fieldStatus.currentField
        })
      }, this.setFieldsRequiredStatus = e => {
        let t = this.dedupeRequiredStatus(e),
          r = new Set(t.map(e => this.getFieldStatusKey(e))),
          n = new Set(this.fieldStatus.filledFields.map(e => (0, d.normalizeFieldLabel)(e))),
          o = this.fieldStatus.fieldRequiredStatus.filter(e => {
            let t = this.getFieldStatusKey(e);
            return !r.has(t) && n.has(t)
          });
        this.fieldStatus.fieldRequiredStatus = [...t, ...o], (0, u.setFieldFocusRules)(this
          .fieldStatus.fieldRequiredStatus), this.syncProgress()
      }, this.updateFieldRequiredStatus = e => {
        if (this.isHiddenProgressField(e?.label)) return;
        let t = this.formatRequiredStatusLabel(e),
          r = this.getFieldStatusKey(t),
          n = this.fieldStatus.fieldRequiredStatus.findIndex(e => e.label === t.label || !!r &&
            this.getFieldStatusKey(e) === r);
        this.fieldStatus.fieldRequiredStatus = -1 !== n ? this.fieldStatus.fieldRequiredStatus
          .map((e, r) => r === n ? this.mergeRequiredStatus(e, t) : e) : [...this.fieldStatus
            .fieldRequiredStatus, t
          ], (0, u.updateFieldFocusRule)(this.fieldStatus.fieldRequiredStatus[-1 !== n ? n : this
            .fieldStatus.fieldRequiredStatus.length - 1]);
        let o = this.fieldStatus.fieldRequiredStatus[-1 !== n ? n : this.fieldStatus
          .fieldRequiredStatus.length - 1];
        this.sendProgressPatch({
          requiredField: {
            label: o.label,
            required: o.required
          }
        })
      }, this.replaceFieldRequiredStatus = e => {
        if (this.isHiddenProgressField(e?.label)) return;
        let t = this.formatRequiredStatusLabel(e),
          r = this.getFieldStatusKey(t),
          n = this.fieldStatus.fieldRequiredStatus.findIndex(e => e.label === t.label || !!r &&
            this.getFieldStatusKey(e) === r);
        this.fieldStatus.fieldRequiredStatus = -1 !== n ? this.fieldStatus.fieldRequiredStatus
          .map((e, r) => r === n ? {
            ...e,
            ...t,
            label: e.label || t.label,
            required: t.required
          } : e) : [...this.fieldStatus.fieldRequiredStatus, t], (0, u.updateFieldFocusRule)(this
            .fieldStatus.fieldRequiredStatus[-1 !== n ? n : this.fieldStatus.fieldRequiredStatus
              .length - 1]);
        let o = this.fieldStatus.fieldRequiredStatus[-1 !== n ? n : this.fieldStatus
          .fieldRequiredStatus.length - 1];
        this.sendProgressPatch({
          requiredField: {
            label: o.label,
            required: o.required
          }
        })
      }, this.updateFilledProgress = e => {
        let t = m(e);
        this.fieldStatus.missingFields = this.fieldStatus.missingFields.filter(e => (0, d
            .normalizeFieldLabel)(e) !== (0, d.normalizeFieldLabel)(t)), this.fieldStatus
          .filledFields = [...this.fieldStatus.filledFields.filter(e => (0, d.normalizeFieldLabel)
            (e) !== (0, d.normalizeFieldLabel)(t)), t], this.sendProgressPatch({
            fieldResult: {
              label: t,
              status: "filled"
            }
          })
      }, this.updateMissedProgress = e => {
        let t = m(e);
        this.fieldStatus.filledFields = this.fieldStatus.filledFields.filter(e => (0, d
            .normalizeFieldLabel)(e) !== (0, d.normalizeFieldLabel)(t)), this.fieldStatus
          .missingFields = [...this.fieldStatus.missingFields.filter(e => (0, d
            .normalizeFieldLabel)(e) !== (0, d.normalizeFieldLabel)(t)), t], this
          .sendProgressPatch({
            fieldResult: {
              label: t,
              status: "missing"
            }
          })
      }, this.updateFieldItemProgress = (e, t) => {
        let r = (0, d.formatFieldLabelForDisplay)(e),
          n = (0, d.normalizeFieldLabel)(r),
          o = {
            status: t.status,
            requestedItems: [...t.requestedItems],
            succeededItems: [...t.succeededItems],
            failedItems: [...t.failedItems]
          };
        this.fieldStatus.filledFields = this.fieldStatus.filledFields.filter(e => (0, d
            .normalizeFieldLabel)(e) !== n), this.fieldStatus.missingFields = this.fieldStatus
          .missingFields.filter(e => (0, d.normalizeFieldLabel)(e) !== n), this.fieldStatus
          .fieldItemResults = {
            ...this.fieldStatus.fieldItemResults,
            [n]: o
          }, "filled" === t.status ? this.fieldStatus.filledFields = [...this.fieldStatus
            .filledFields, r
          ] : this.fieldStatus.missingFields = [...this.fieldStatus.missingFields, r], this
          .sendProgressPatch({
            fieldResult: {
              label: r,
              status: "filled" === t.status ? "filled" : "missing",
              itemResult: o
            }
          })
      }, this.updateSectionResult = e => {
        let t = {
            type: e.type,
            label: p(e.type),
            rows: e.rows.map(e => ({
              index: e.index,
              ...e.title ? {
                title: e.title
              } : {},
              ...e.subtitle ? {
                subtitle: e.subtitle
              } : {},
              status: e.status,
              fields: e.fields.map(e => ({
                label: (0, d.formatFieldLabelForDisplay)(e.label),
                ...e.value ? {
                  value: e.value
                } : {},
                status: e.status
              }))
            }))
          },
          r = this.fieldStatus.sectionResults ?? [],
          n = r.findIndex(e => e.type === t.type),
          o = -1 === n ? t : {
            ...t,
            rows: [...new Map([...r[n].rows, ...t.rows].map(e => [e.index, e])).values()].sort((e,
              t) => e.index - t.index)
          };
        this.fieldStatus.sectionResults = -1 === n ? [...r, o] : r.map((e, t) => t === n ? o : e),
          this.sendProgressPatch({
            sectionResults: this.fieldStatus.sectionResults
          })
      }, this.fieldStatus = {
        fieldRequiredStatus: [],
        missingFields: [],
        filledFields: [],
        fieldItemResults: {},
        currentField: null
      }
  }
  getFieldStatusKey(e) {
    return (0, d.normalizeFieldLabel)(e.label)
  }
  formatRequiredStatusLabel(e) {
    return {
      ...e,
      label: m(e.label, e.type)
    }
  }
  mergeRequiredStatus(e, t) {
    let r = !0 === e.required || !0 === t.required || !1 !== e.required && !1 !== t.required &&
      null;
    return {
      ...e,
      ...t,
      label: e.label || t.label,
      required: r
    }
  }
  isHiddenProgressField(e) {
    return f.has((0, d.normalizeFieldLabel)(String(e ?? "")))
  }
  dedupeRequiredStatus(e) {
    let t = new Map,
      r = [];
    for (let n of e) {
      if (this.isHiddenProgressField(n?.label)) continue;
      let e = this.formatRequiredStatusLabel(n),
        o = this.getFieldStatusKey(e);
      if (!o) {
        r.push(e);
        continue
      }
      let i = t.get(o);
      if (!i) {
        t.set(o, e), r.push(e);
        continue
      }
      let a = this.mergeRequiredStatus(i, e);
      t.set(o, a);
      let l = r.indexOf(i); - 1 !== l && (r[l] = a)
    }
    return r
  }
  clear() {
    this.fieldStatus = {
        fieldRequiredStatus: [],
        missingFields: [],
        filledFields: [],
        fieldItemResults: {},
        currentField: null
      }, this.progressSessionId = (0, s.createAutofillProgressSessionId)(), this
      .hasSentProgressSnapshot = !1, (0, u.clearFieldFocusRules)()
  }
  generateFinalProgress() {
    return {
      fieldRequiredStatus: this.fieldStatus.fieldRequiredStatus.map(e => (0, i.pick)(e, ["label",
        "required"
      ])),
      filledFields: this.fieldStatus.filledFields,
      missingFields: this.fieldStatus.missingFields,
      fieldItemResults: Object.fromEntries(Object.entries(this.fieldStatus.fieldItemResults ?? {})
        .map(([e, t]) => [e, {
          status: t.status,
          requestedItems: [...t.requestedItems],
          succeededItems: [...t.succeededItems],
          failedItems: [...t.failedItems]
        }])),
      ...this.fieldStatus.sectionResults ? {
        sectionResults: this.fieldStatus.sectionResults.map(e => ({
          type: e.type,
          label: e.label,
          rows: e.rows.map(e => ({
            index: e.index,
            ...e.title ? {
              title: e.title
            } : {},
            ...e.subtitle ? {
              subtitle: e.subtitle
            } : {},
            status: e.status,
            fields: e.fields.map(e => ({
              label: e.label,
              ...e.value ? {
                value: e.value
              } : {},
              status: e.status
            }))
          }))
        }))
      } : {}
    }
  }
}

