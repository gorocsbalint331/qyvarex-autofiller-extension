/**
 * Minimal ~store/resume shim — enough for autofillInfo + filler resumeInfo.
 */
var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
n.defineInteropFlag(r)
n.export(r, "useResumeStore", () => useResumeStore)
n.export(r, "updateAutofillInstance", () => updateAutofillInstance)
n.export(r, "syncResumeToAutofill", () => syncResumeToAutofill)
n.export(r, "mapResumeDiagnoseToAutofillSections", () => mapResumeDiagnoseToAutofillSections)

var o = e("zustand")
var contents = e("~contents")

var useResumeStore = o.create(function (set, get) {
  return {
    resumeMap: {},
    resumeCollection: [],
    tailorResume: null,
    lastUsedResume: undefined,
    lastUsedOriginalResume: true,
    disableUploadResume: false,
    autofillChangedFields: [],
    setAutofillChangedFields: function (fields) {
      set({ autofillChangedFields: fields || [] })
    },
    ensureResumeReadyForAutofill: async function () {
      return true
    },
    setFromAgent: function () {},
    getResumeInfo: function () {
      return get().resumeInfo || { id: null, tailorId: null, useOriginalResume: true }
    },
    resumeInfo: { id: null, tailorId: null, useOriginalResume: true },
    setResumeInfo: function (info) {
      set({ resumeInfo: info })
      updateAutofillInstance({ resumeInfo: info })
    }
  }
})

function updateAutofillInstance(patch) {
  var instance = contents.getAutofillInstance()
  if (!instance || !patch) return
  for (var key of Object.keys(patch)) {
    instance[key] = patch[key]
  }
}

async function syncResumeToAutofill() {}
function mapResumeDiagnoseToAutofillSections() {
  return { workExperience: [], education: [], skills: {} }
}
