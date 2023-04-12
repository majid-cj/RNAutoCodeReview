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

  it('test number of verified members must be 2', () => {
    const results = filterVerifiedMembers(data)
    expect(results.length).toEqual(2)
  })

  it('test number of verified members must be 0 for empty array', () => {
    const results = filterVerifiedMembers(emptyData)
    expect(results.length).toEqual(0)
  })

  it('test number of verified members must be 0 for none verified users', () => {
    const results = filterVerifiedMembers(notVerifiedData)
    expect(results.length).toEqual(0)
  })
})
