import { TMember } from '~/models/memeber'

export const FilterVerifiedMembers = (members: Array<TMember>): Array<TMember> => {
  let verifiedMembers = []
  for (let index = 0; index < members.length; index++) {
    if (members[index].IsVerified) {
      verifiedMembers.push(members[index])
    }
  }
  return verifiedMembers
}
