import React from 'react'
import 'react-native'

import { AppButton } from './AppButton'
import { fireEvent, render } from '~/utils'

it('test Button', () => {
  const onPress = jest.fn()
  const { getByTestId } = render(
    <AppButton onPress={onPress} label={'app-button'} />
  )
  const button = getByTestId('app-button')
  fireEvent.press(button)
})
