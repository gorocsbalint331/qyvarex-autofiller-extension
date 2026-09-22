/**
 * Parcel module id: 6WWsC
 * Resolved path: contents/methods/section-results.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/dom -> hLMJX  =>  _tilde_core/dom.js
  *
 * Deobfuscated (pretty + export/import rename). Parcel e()/r preserved.
 */

var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");
helpers.defineInteropFlag(r), helpers.export(r, "createSequentialSectionResultReporter", () => createSequentialSectionResultReporter);
var dom = e("~core/dom");
function i(e) {
  let t = new Set();
  for (let r of e) if ("children" in r && Array.isArray(r.children)) for (let e of i(r.children)) t.add(e);else for (let [e, helpers] of Object.entries(r)) if (e.startsWith("$") && "$label" !== e) for (let e of Array.isArray(helpers) ? helpers : [helpers]) e && "object" == typeof e && t.add(e);
  return t;
}
function createSequentialSectionResultReporter(e, t, r) {
  let _helpersLocal = new Map(),
    _createSequentialSectionResultReporterLocal = [],
    l = r ?? ("education" === e ? "Education" : "Employment"),
    s = () => t.updateSectionResult?.({
      type: e,
      label: l,
      rows: [..._helpersLocal.values()].sort((e, t) => e.index - t.index).map(e => ({
        ...e,
        fields: e.fields.map(e => ({
          ...e
        }))
      }))
    });
  return {
    setRecordFocus(t, r) {
      Number.isInteger(t) && !(t < 0) && (_createSequentialSectionResultReporterLocal[t] = r, (0, dom.setSectionResultFocusRules)(e, _createSequentialSectionResultReporterLocal.slice()));
    },
    clearRecordFocus(t) {
      Number.isInteger(t) && !(t < 0) && (delete _createSequentialSectionResultReporterLocal[t], (0, dom.setSectionResultFocusRules)(e, _createSequentialSectionResultReporterLocal.slice()));
    },
    markRecordMissed(e) {
      let t = _helpersLocal.get(e);
      t && (_helpersLocal.set(e, {
        ...t,
        status: "skipped" === t.status ? "skipped" : "missed",
        fields: t.fields.map(e => ({
          ...e,
          status: "skipped" === e.status ? "skipped" : "missed"
        }))
      }), s());
    },
    forRecord(t, u) {
      if (!Number.isInteger(t) || t < 0) return {};
      let c = i(u);
      return _createSequentialSectionResultReporterLocal.forEach((e, r) => {
        (!(r >= t) || !(r < t + u.length)) && [...i([e])].some(e => c.has(e)) && delete _createSequentialSectionResultReporterLocal[r];
      }), u.forEach((e, r) => {
        _createSequentialSectionResultReporterLocal[t + r] = e;
      }), (0, dom.setSectionResultFocusRules)(e, _createSequentialSectionResultReporterLocal.slice()), {
        onSectionResultChanged(_domArg) {
          if (_domArg.type === e) {
            for (let e of _domArg.rows) {
              if (!Number.isInteger(e.index) || e.index < 0) continue;
              let r = t + e.index;
              _helpersLocal.set(r, {
                ...e,
                index: r,
                fields: e.fields.map(e => ({
                  ...e
                }))
              });
            }
            l = r ?? _domArg.label, s();
          }
        }
      };
    }
  };
}
