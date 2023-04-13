import React from 'react'
import 'react-native'

import { HomeScreen } from '.'

import { LoginScreen } from '~/screens/LoginScreen'
import { useStore } from '~/store'
import { MockedNavigator, fireEvent, render, renderHook } from '~/utils'

describe('HomeScreen', () => {
  it('logs out the user when the logout button is pressed', () => {
    // Log in the user
    const { getByTestId: getByTestIdLoginScreen } = render(<MockedNavigator component={LoginScreen} />)

    const userEmail = getByTestIdLoginScreen('input-user-email')
    const userPassword = getByTestIdLoginScreen('input-user-password')
    const appButtonLoginScreen = getByTestIdLoginScreen('app-button')

    fireEvent.changeText(userEmail, 'test@mail.com')
    fireEvent.changeText(userPassword, '12345678')
    fireEvent.press(appButtonLoginScreen)

    const {
      result: {
        current: { isAuthorized: isAuthorizedBefore },
      },
    } = renderHook(() => useStore())
    expect(isAuthorizedBefore).toBeTruthy()

    // Render the HomeScreen and log out the user
    const { getByTestId: getByTestIdHomeScreen } = render(<MockedNavigator component={HomeScreen} />)

    const appButtonHomeScreen = getByTestIdHomeScreen('app-button')
    fireEvent.press(appButtonHomeScreen)

    const {
      result: {
        current: { isAuthorized: isAuthorizedAfter },
      },
    } = renderHook(() => useStore())
    expect(isAuthorizedAfter).toBeFalsy()
  })
})

describe('HomeScreen', () => {
  it('logs out the user when the logout button is pressed', () => {
    // Log in the user
    const { getByTestId: getByTestIdLoginScreen } = render(<MockedNavigator component={LoginScreen} />)

    const userEmail = getByTestIdLoginScreen('input-user-email')
    const userPassword = getByTestIdLoginScreen('input-user-password')
    const appButtonLoginScreen = getByTestIdLoginScreen('app-button')

    fireEvent.changeText(userEmail, 'test@mail.com')
    fireEvent.changeText(userPassword, '12345678')
    fireEvent.press(appButtonLoginScreen)

    const {
      result: {
        current: { isAuthorized: isAuthorizedBefore },
      },
    } = renderHook(() => useStore())
    expect(isAuthorizedBefore).toBeTruthy()

    // Render the HomeScreen and log out the user
    const { getByTestId: getByTestIdHomeScreen } = render(<MockedNavigator component={HomeScreen} />)

    const appButtonHomeScreen = getByTestIdHomeScreen('app-button')
    fireEvent.press(appButtonHomeScreen)

    const {
      result: {
        current: { isAuthorized: isAuthorizedAfter },
      },
    } = renderHook(() => useStore())
    expect(isAuthorizedAfter).toBeFalsy()
  })
})
