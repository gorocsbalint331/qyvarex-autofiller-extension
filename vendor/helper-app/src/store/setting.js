/**
 * Parcel module id: 1Q6Yp
 * Resolved path: src/store/setting.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/storage -> 9RCRe  =>  @plasmohq/storage.js
 *   zustand -> ffRFv  =>  zustand.js
 *   ~enums/storage -> e2WM4  =>  src/enums/storage.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "useSettingStore", () => s);
var o = e("zustand"),
  i = e("@plasmohq/storage"),
  a = e("~enums/storage");
let l = new i.Storage,
  s = (0, o.create)((e, t) => ({
    automaticallyTurnPage: "Automatically",
    setAutomaticallyTurnPage: async t => {
      e({
        automaticallyTurnPage: t
      }), await l.setItem(a.STORAGE_KEY.GLOBAL_CONFIG_TURN_PAGE, t)
    },
    defaultView: "Expanded",
    setDefaultView: async t => {
      e({
        defaultView: t
      }), await l.setItem(a.STORAGE_KEY.GLOBAL_CONFIG_DEFAULT_VIEW, t)
    },
    syncSettingsWithStorage: async () => {
      e({
        automaticallyTurnPage: await l.getItem(a.STORAGE_KEY.GLOBAL_CONFIG_TURN_PAGE) ||
          "Automatically",
        defaultView: await l.getItem(a.STORAGE_KEY.GLOBAL_CONFIG_DEFAULT_VIEW) ||
          "Expanded"
      })
    }
  }));
r.default = s

