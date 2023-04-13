import React, { FC, useState } from 'react'

import { AppButton } from '~/components/buttons'
import { Screen } from '~/components/containers'
import { InputField } from '~/components/input'
import { ToastProps } from '~/components/ui'
import { UserModel } from '~/models/user'
import { useStore } from '~/store'

export const LoginScreen: FC = () => {
  const [error, setError] = useState(false)
  const [toast, setToast] = useState<ToastProps>()
  const { setAuthState } = useStore((state) => state)
  const [user] = useState(new UserModel())

  const onEmailChange = (email: string) => {
    user.UserEmail = email
  }

  const onPasswordChange = (password: string) => {
    user.UserPassword = password
  }

  const onPress = () => {
    try {
      user.ValidateLogin()
      setAuthState(true)
    } catch (error: any) {
      setToast({ error: true, message: error.toString() })
      setError(true)
    }
  }

  return (
    <Screen
      footer={<AppButton label={'login'} onPress={onPress} />}
      toast={toast}>
      <InputField
        placeholder={'user email'}
        onTextChange={onEmailChange}
        error={error}
        keyBoard={'email-address'}
        testID={'input-user-email'}
      />
      <InputField
        placeholder={'user password'}
        onTextChange={onPasswordChange}
        error={error}
        secure={true}
        testID={'input-user-password'}
      />
    </Screen>
  )
}
