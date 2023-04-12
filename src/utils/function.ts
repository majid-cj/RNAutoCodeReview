import { TMember } from '~/models/memeber'

export const FilterVerifiedMembers = (members: Array<TMember>): Array<TMember> => {
  return members.filter(({ IsVerified }) => {
    return IsVerified
  })
}
