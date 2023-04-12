import { TMember } from '~/models/member'

export const getIsVerifiedMembers = (members: Array<TMember>): Array<TMember> => {
  return members.filter(({ IsVerified }) => IsVerified)
}
