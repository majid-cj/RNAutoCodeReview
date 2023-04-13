import React, { FC, useCallback } from 'react'
import { Text } from 'react-native'

import { AppButton } from '~/components/buttons'
import { Screen } from '~/components/containers'
import { useStore } from '~/store'

export const HomeScreen: FC = () => {
  const { setAuthState } = useStore((state) => state)

  const onPress = useCallback(() => {
    setAuthState(false)
  }, [])

  return (
    <Screen footer={<AppButton label={'Log out'} onPress={onPress} />}>
      <Text>this is home screen</Text>
    </Screen>
  )
}
