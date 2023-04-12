import { filterVerifiedMembers } from './function'

import { TMember } from '~/models/member'

describe('Test filterVerifiedMembers', () => {
  const data: Array<TMember> = [
    { ID: '1', VerifyStatus: false, NickName: 'user1', Email: 'user1@mail.com' },
    { ID: '2', VerifyStatus: true, NickName: 'user2', Email: 'user2@mail.com' },
    { ID: '3', VerifyStatus: true, NickName: 'user3', Email: 'user3@mail.com' },
    { ID: '4', VerifyStatus: false, NickName: 'user4', Email: 'user4@mail.com' },
    { ID: '5', VerifyStatus: false, NickName: 'user5', Email: 'user5@mail.com' },
  ]

  const emptyData: Array<TMember> = []

  const notVerifiedData: Array<TMember> = [
    { ID: '1', VerifyStatus: false, NickName: 'user1', Email: 'user1@mail.com' },
    { ID: '2', VerifyStatus: false, NickName: 'user2', Email: 'user2@mail.com' },
    { ID: '3', VerifyStatus: false, NickName: 'user3', Email: 'user3@mail.com' },
  ]

  it('should return 2 verified members when given an array with both verified and unverified members', () => {
    const results = filterVerifiedMembers(data)
    expect(results.length).toEqual(2)
  })

  it('should return an empty array when given an empty input array', () => {
    const results = filterVerifiedMembers(emptyData)
    expect(results.length).toEqual(0)
  })

  it('should return an empty array when given an array with only unverified members', () => {
    const results = filterVerifiedMembers(notVerifiedData)
    expect(results.length).toEqual(0)
  })
})
