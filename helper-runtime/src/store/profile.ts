// @ts-nocheck
/**
 * User profile Zustand store — stage, AB config, credits, and payment/autofill config.
 */
import * as zustand from "zustand"
import * as messaging from "@plasmohq/messaging"
import * as plasmohqStorage from "@plasmohq/storage"
import * as storageEnums from "../enums/storage.js"
import * as abTest from "../utils/ab-test.ts"

const storage = new plasmohqStorage.Storage()

export const useProfileStore = zustand.create((set, get) => ({
  userStage: {},
  userProfile: null,
  abConfig: {},
  abConfigLoaded: false,
  showOutofCredit: false,
  showOutofCreditFrom: "",
  setShowOutofCredit: (showOutofCredit, showOutofCreditFrom) => {
    set({
      showOutofCredit,
      showOutofCreditFrom: showOutofCreditFrom || "",
    })
  },
  showResumeMissingKeyPopup: false,
  setShowResumeMissingKeyPopup: (showResumeMissingKeyPopup) => {
    set({
      showResumeMissingKeyPopup,
    })
  },
  showErrorPopup: false,
  autofillErrorReason: null,
  setShowErrorPopup: (showErrorPopup, autofillErrorReason = null) => {
    set({
      showErrorPopup,
      autofillErrorReason: showErrorPopup ? autofillErrorReason : null,
    })
  },
  doubleConfirmPopupVisible: false,
  setDoubleConfirmPopupVisible: (doubleConfirmPopupVisible) => {
    set({
      doubleConfirmPopupVisible,
    })
  },
  autofillDoNotAskAgain: false,
  setAutofillDoNotAskAgain: async (autofillDoNotAskAgain) => {
    autofillDoNotAskAgain
      ? (set({
          autofillDoNotAskAgain: true,
        }),
        await storage.setItem(
          storageEnums.STORAGE_KEY.DONT_ASK_AGAIN_AUTOFILL,
          "true",
        ))
      : (set({
          autofillDoNotAskAgain: false,
        }),
        await storage.removeItem(
          storageEnums.STORAGE_KEY.DONT_ASK_AGAIN_AUTOFILL,
        ))
  },
  syncAutofillDoNotAskAgainWithStorage: async () => {
    let storedValue = await storage.getItem(
      storageEnums.STORAGE_KEY.DONT_ASK_AGAIN_AUTOFILL,
    )
    "true" === storedValue
      ? set({
          autofillDoNotAskAgain: true,
        })
      : set({
          autofillDoNotAskAgain: false,
        })
  },
  setUserStage: (userStage) => {
    set({
      userStage,
    })
  },
  setUserProfile: (userProfile) => {
    set({
      userProfile,
    })
  },
  initAbConfig: async (userId) => {
    if (!userId) {
      set({
        abConfig: {},
        abConfigLoaded: true,
      })
      return
    }
    try {
      let abUserResponse = await messaging.sendToBackground({
          name: "getAbUser",
          body: {
            user: userId,
          },
        }),
        normalizedAbConfig = abTest.normalizeAbConfig(abUserResponse)
      set({
        abConfig: normalizedAbConfig,
        abConfigLoaded: true,
      })
    } catch {
      set({
        abConfig: {},
        abConfigLoaded: true,
      })
    }
  },
  initUserStage: async () => {
    if (window.top !== window.self) return
    let profileResponse = await messaging.sendToBackground({
        name: "getUserProfile",
      }),
      userStage = profileResponse?.data?.userStage,
      userProfile = profileResponse?.data?.userProfile
    get().setUserStage(userStage),
      get().setUserProfile(userProfile),
      userStage?.logined
        ? await get().initAbConfig(userStage?.userId)
        : set({
            abConfig: {},
            abConfigLoaded: true,
          })
  },
  creditFeed: null,
  initCreditFeed: async () => {
    if (window.top !== window.self) return
    let { userStage } = get()
    if (!userStage?.logined) {
      set({
        creditFeed: null,
      })
      return
    }
    let creditFeedResponse = await messaging.sendToBackground({
      name: "getCreditFeed",
    })
    set({
      creditFeed: creditFeedResponse?.data,
    })
  },
  creditsLeft: null,
  creditSwitchStatus: null,
  priceRecord: null,
  autofillConfig: null,
  paymentDataLoaded: false,
  initPaymentData: async () => {
    if (window.top !== window.self) return
    let { userProfile, paymentDataLoaded } = get()
    if (!paymentDataLoaded) {
      if (userProfile?.step !== 5) {
        set({
          paymentDataLoaded: true,
        })
        return
      }
      try {
        let { userStage, abConfigLoaded } = get(),
          userId = userStage?.userId
        abConfigLoaded || (await get().initAbConfig(userId))
        let [
            creditsLeftResponse,
            creditSwitchStatusResponse,
            paymentPriceResponse,
            autofillConfigResponse,
          ] = await Promise.all([
            messaging.sendToBackground({
              name: "getCreditsLeft",
            }),
            messaging.sendToBackground({
              name: "getCreditSwitchStatus",
            }),
            messaging.sendToBackground({
              name: "getPaymentPrice",
            }),
            messaging.sendToBackground({
              name: "getAutofillConfig",
            }),
          ]),
          autofillConfigRaw =
            autofillConfigResponse instanceof Map
              ? Object.fromEntries(autofillConfigResponse)
              : autofillConfigResponse,
          abConfig = get().abConfig,
          stuBannerExperiment = abConfig.autofill_banner_stu_copy_exp ?? "off",
          bannerExperiment = abConfig.autofill_banner_copy_exp ?? "off",
          creditsExperiment = abConfig.autofill_credits_copy_exp ?? "off",
          autofillStuBannerCopy = autofillConfigRaw?.autofillStuBannerCopy,
          autofillBannerCopy = autofillConfigRaw?.autofillBannerCopy,
          autofillCreditsCopy = autofillConfigRaw?.autofillCreditsCopy,
          resolvedAutofillConfig = {
            ...autofillConfigRaw,
            autofillCreditsTurboCopy:
              autofillCreditsCopy?.[creditsExperiment] ??
              autofillCreditsCopy?.off ??
              "Get Unlimited Credits Now",
            autofillBannerCopyResolved:
              autofillBannerCopy?.[bannerExperiment] ??
              autofillBannerCopy?.off ??
              "Upgrade to Turbo: Get Hired Faster",
            autofillStuBannerCopyResolved:
              autofillStuBannerCopy?.[stuBannerExperiment] ??
              autofillStuBannerCopy?.off ??
              "Turbo for Students: Get Hired Faster!",
          }
        set({
          creditsLeft: creditsLeftResponse ?? null,
          creditSwitchStatus: creditSwitchStatusResponse ?? null,
          priceRecord: paymentPriceResponse ?? null,
          autofillConfig: resolvedAutofillConfig,
          paymentDataLoaded: true,
        })
      } catch {
        set({
          paymentDataLoaded: true,
        })
      }
    }
  },
  resetPaymentData: () => {
    set({
      creditsLeft: null,
      creditSwitchStatus: null,
      priceRecord: null,
      autofillConfig: null,
      paymentDataLoaded: false,
    })
  },
  refreshCreditsLeft: async () => {
    if (window.top !== window.self) return
    let { userProfile } = get()
    if (userProfile?.step === 5)
      try {
        let creditsLeftResponse = await messaging.sendToBackground({
          name: "getCreditsLeft",
          body: {
            bypass: true,
          },
        })
        set({
          creditsLeft: creditsLeftResponse ?? null,
        })
      } catch {}
  },
  ensureCreditsLeft: async () => {
    if (null != get().creditsLeft) return
    let { userStage } = get()
    if (userStage?.logined)
      try {
        let creditsLeftResponse = await messaging.sendToBackground({
          name: "getCreditsLeft",
        })
        creditsLeftResponse &&
          set({
            creditsLeft: creditsLeftResponse,
          })
      } catch {}
  },
}))
