// @ts-nocheck
/**
 * Membership / subscription payment constants.
 */

export const MEMBERSHIP_RETARGET_PATH =
  "/jobs/recommend?retarget=membership&src=autofill"

export enum SUBSCRIPTION_STATUS {
  INCOMPLETE = 1,
  INCOMPLETE_EXPIRED = 2,
  TRIALING = 3,
  ACTIVE = 4,
  PAST_DUE = 5,
  CANCELED = 6,
  UNPAID = 7,
  PAUSED = 8,
}
