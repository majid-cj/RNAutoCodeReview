import { TMember } from '~/models/member'

/**
 *
 * @param Array<TMember>
 * @returns Array<TMember>
 */
export const filterVerifiedMembers = (members: Array<TMember>): Array<TMember> =>
  members.filter(({ VerifyStatus }) => VerifyStatus)
