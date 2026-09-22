/**
 * Parcel module id: 9omPD
 * Resolved path: src/store/profile.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   @plasmohq/storage -> 9RCRe  =>  @plasmohq/storage.js
 *   zustand -> ffRFv  =>  zustand.js
 *   ~enums/storage -> e2WM4  =>  src/enums/storage.js
 *   ~utils/ab-test -> eEchw  =>  src/utils/ab-test.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "useProfileStore", () => c);
var o = e("zustand"),
  i = e("@plasmohq/messaging"),
  a = e("@plasmohq/storage"),
  l = e("~enums/storage"),
  s = e("~utils/ab-test");
let u = new a.Storage,
  c = (0, o.create)((e, t) => ({
    userStage: {},
    userProfile: null,
    abConfig: {},
    abConfigLoaded: !1,
    showOutofCredit: !1,
    showOutofCreditFrom: "",
    setShowOutofCredit: (t, r) => {
      e({
        showOutofCredit: t,
        showOutofCreditFrom: r || ""
      })
    },
    showResumeMissingKeyPopup: !1,
    setShowResumeMissingKeyPopup: t => {
      e({
        showResumeMissingKeyPopup: t
      })
    },
    showErrorPopup: !1,
    autofillErrorReason: null,
    setShowErrorPopup: (t, r = null) => {
      e({
        showErrorPopup: t,
        autofillErrorReason: t ? r : null
      })
    },
    doubleConfirmPopupVisible: !1,
    setDoubleConfirmPopupVisible: t => {
      e({
        doubleConfirmPopupVisible: t
      })
    },
    autofillDoNotAskAgain: !1,
    setAutofillDoNotAskAgain: async t => {
      t ? (e({
        autofillDoNotAskAgain: !0
      }), await u.setItem(l.STORAGE_KEY.DONT_ASK_AGAIN_AUTOFILL, "true")) : (e({
        autofillDoNotAskAgain: !1
      }), await u.removeItem(l.STORAGE_KEY.DONT_ASK_AGAIN_AUTOFILL))
    },
    syncAutofillDoNotAskAgainWithStorage: async () => {
      let t = await u.getItem(l.STORAGE_KEY.DONT_ASK_AGAIN_AUTOFILL);
      "true" === t ? e({
        autofillDoNotAskAgain: !0
      }) : e({
        autofillDoNotAskAgain: !1
      })
    },
    setUserStage: t => {
      e({
        userStage: t
      })
    },
    setUserProfile: t => {
      e({
        userProfile: t
      })
    },
    initAbConfig: async t => {
      if (!t) {
        e({
          abConfig: {},
          abConfigLoaded: !0
        });
        return
      }
      try {
        let r = await (0, i.sendToBackground)({
            name: "getAbUser",
            body: {
              user: t
            }
          }),
          n = (0, s.normalizeAbConfig)(r);
        e({
          abConfig: n,
          abConfigLoaded: !0
        })
      } catch {
        e({
          abConfig: {},
          abConfigLoaded: !0
        })
      }
    },
    initUserStage: async () => {
      if (window.top !== window.self) return;
      let r = await (0, i.sendToBackground)({
          name: "getUserProfile"
        }),
        n = r?.data?.userStage,
        o = r?.data?.userProfile;
      t().setUserStage(n), t().setUserProfile(o), n?.logined ? await t().initAbConfig(n
        ?.userId) : e({
        abConfig: {},
        abConfigLoaded: !0
      })
    },
    creditFeed: null,
    initCreditFeed: async () => {
      if (window.top !== window.self) return;
      let {
        userStage: r
      } = t();
      if (!r?.logined) {
        e({
          creditFeed: null
        });
        return
      }
      let n = await (0, i.sendToBackground)({
        name: "getCreditFeed"
      });
      e({
        creditFeed: n?.data
      })
    },
    creditsLeft: null,
    creditSwitchStatus: null,
    priceRecord: null,
    autofillConfig: null,
    paymentDataLoaded: !1,
    initPaymentData: async () => {
      if (window.top !== window.self) return;
      let {
        userProfile: r,
        paymentDataLoaded: n
      } = t();
      if (!n) {
        if (r?.step !== 5) {
          e({
            paymentDataLoaded: !0
          });
          return
        }
        try {
          let {
            userStage: r,
            abConfigLoaded: n
          } = t(), o = r?.userId;
          n || await t().initAbConfig(o);
          let [a, l, s, u] = await Promise.all([(0, i.sendToBackground)({
              name: "getCreditsLeft"
            }), (0, i.sendToBackground)({
              name: "getCreditSwitchStatus"
            }), (0, i.sendToBackground)({
              name: "getPaymentPrice"
            }), (0, i.sendToBackground)({
              name: "getAutofillConfig"
            })]), c = u instanceof Map ? Object.fromEntries(u) : u, d = t().abConfig, f = d
            .autofill_banner_stu_copy_exp ?? "off", p = d.autofill_banner_copy_exp ?? "off",
            m = d.autofill_credits_copy_exp ?? "off", h = c, g = h?.autofillStuBannerCopy, b =
            h?.autofillBannerCopy, y = h?.autofillCreditsCopy, v = {
              ...c,
              autofillCreditsTurboCopy: y?.[m] ?? y?.off ?? "Get Unlimited Credits Now",
              autofillBannerCopyResolved: b?.[p] ?? b?.off ??
                "Upgrade to Turbo: Get Hired Faster",
              autofillStuBannerCopyResolved: g?.[f] ?? g?.off ??
                "Turbo for Students: Get Hired Faster!"
            };
          e({
            creditsLeft: a ?? null,
            creditSwitchStatus: l ?? null,
            priceRecord: s ?? null,
            autofillConfig: v,
            paymentDataLoaded: !0
          })
        } catch {
          e({
            paymentDataLoaded: !0
          })
        }
      }
    },
    resetPaymentData: () => {
      e({
        creditsLeft: null,
        creditSwitchStatus: null,
        priceRecord: null,
        autofillConfig: null,
        paymentDataLoaded: !1
      })
    },
    refreshCreditsLeft: async () => {
      if (window.top !== window.self) return;
      let {
        userProfile: r
      } = t();
      if (r?.step === 5) try {
        let t = await (0, i.sendToBackground)({
          name: "getCreditsLeft",
          body: {
            bypass: !0
          }
        });
        e({
          creditsLeft: t ?? null
        })
      } catch {}
    },
    ensureCreditsLeft: async () => {
      if (null != t().creditsLeft) return;
      let {
        userStage: r
      } = t();
      if (r?.logined) try {
        let t = await (0, i.sendToBackground)({
          name: "getCreditsLeft"
        });
        t && e({
          creditsLeft: t
        })
      } catch {}
    }
  }))

