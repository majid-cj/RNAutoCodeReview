import { FilterVerifiedMembers } from './function'

import { TMember } from '~/models/memeber'

describe('Test FilterVerifiedMembers', () => {
  const data: Array<TMember> = [
    { ID: '1', IsVerified: false, NickName: 'user1', Email: 'user1@mail.com' },
    { ID: '2', IsVerified: true, NickName: 'user2', Email: 'user2@mail.com' },
    { ID: '3', IsVerified: true, NickName: 'user3', Email: 'user3@mail.com' },
    { ID: '4', IsVerified: false, NickName: 'user4', Email: 'user4@mail.com' },
    { ID: '5', IsVerified: false, NickName: 'user5', Email: 'user5@mail.com' },
  ]

  it('test number of verified members must be 2', () => {
    const results = FilterVerifiedMembers(data)
    expect(results.length).toEqual(2)
  })
})
