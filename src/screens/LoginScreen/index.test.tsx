import React from 'react'
import 'react-native'

import { LoginScreen } from '.'

import { AppLightTheme } from '~/resources/theme'
import { useStore } from '~/store'
import { MockedNavigator, fireEvent, render, renderHook } from '~/utils'

describe('LoginScreen', () => {
  it('displays an error border color when both email and password inputs are empty', () => {
    const { getByTestId, getAllByTestId } = render(<MockedNavigator component={LoginScreen} />)

    const userEmail = getByTestId('input-user-email')
    const userPassword = getByTestId('input-user-password')
    const appButton = getByTestId('app-button')
    const fieldContainerBefore = getAllByTestId('field-container')

    const borderBottomColorBefore = fieldContainerBefore[0].props['style']['borderBottomColor']
    expect(borderBottomColorBefore).toEqual(AppLightTheme.colors.secondary)

    fireEvent.changeText(userEmail, '')
    fireEvent.changeText(userPassword, '')
    fireEvent.press(appButton)

    const fieldContainerAfter = getAllByTestId('field-container')

    const borderBottomColorAfter = fieldContainerAfter[0].props['style']['borderBottomColor']
    expect(borderBottomColorAfter).toEqual(AppLightTheme.colors.danger)
  })

  it('authenticates the user when the correct email and password are entered', () => {
    const { getByTestId } = render(<MockedNavigator component={LoginScreen} />)

    const userEmail = getByTestId('input-user-email')
    const userPassword = getByTestId('input-user-password')
    const appButton = getByTestId('app-button')

    const {
      result: {
        current: { isAuthorized: isAuthorizedBefore },
      },
    } = renderHook(() => useStore())
    expect(isAuthorizedBefore).toBeFalsy()

    fireEvent.changeText(userEmail, 'test@mail.com')
    fireEvent.changeText(userPassword, '12345678')
    fireEvent.press(appButton)

    const {
      result: {
        current: { isAuthorized: isAuthorizedAfter },
      },
    } = renderHook(() => useStore())
    expect(isAuthorizedBefore).toBeFalsy()
    expect(isAuthorizedAfter).toBeTruthy()
  })
})
