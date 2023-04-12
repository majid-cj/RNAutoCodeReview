/**
 * @interface TMember
 * @field {string} ID
 * @field {boolean} VerifyStatus is used to check the member status whether it's verified or not
 * @field {string} NickName
 * @field {string} Email
 */
export interface TMember {
  ID: string
  VerifyStatus: boolean
  NickName: string
  Email: string
}
