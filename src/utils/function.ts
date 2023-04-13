import { TMember } from '~/models/member';

export const filterVerifiedMembers = (members: Array<TMember>): Array<TMember> =>{
  let verifiedMembers:Array<TMember> = []

  members.forEach(member => {
    if(member.IsVerified){
      verifiedMembers.push(member)
    }
  });
  return verifiedMembers
}
