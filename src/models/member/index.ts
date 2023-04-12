/**
 * @interface TMember
 * @field {string} ID
 * @field {boolean} IsVerified is used to check the member status whether it's verified or not
 * @field {string} NickName
 * @field {string} Email
 */
export interface TMember {
  ID: string
  IsVerified: boolean
  NickName: string
  Email: string
}
